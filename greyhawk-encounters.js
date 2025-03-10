// greyhawk-encounters.js
// A Foundry VTT v12 module for Greyhawk random encounter tables with Simple Calendar integration

Hooks.once('init', async function() {
  console.log('Greyhawk Encounters | Initializing module');
  
  // Register core settings
  game.settings.register('greyhawk-encounters', 'enableAutoRegion', {
    name: 'Enable Automatic Region Detection',
    hint: 'Automatically detect region based on character position on world map',
    scope: 'world',
    config: true,
    type: Boolean,
    default: false
  });
  
  game.settings.register('greyhawk-encounters', 'enableLostCheck', {
    name: 'Enable Automatic Lost Checks',
    hint: 'Automatically check if the party gets lost when traveling',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true
  });
  
  game.settings.register('greyhawk-encounters', 'useSimpleCalendar', {
    name: 'Use Simple Calendar',
    hint: 'Integrate with Simple Calendar to determine time of day and seasonal effects',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true
  });
});

Hooks.once('ready', async function() {
  console.log('Greyhawk Encounters | Module ready');
  
  // Check if Simple Calendar is installed
  if (game.modules.get('foundryvtt-simple-calendar')?.active) {
    console.log('Greyhawk Encounters | Simple Calendar detected');
  } else {
    console.log('Greyhawk Encounters | Simple Calendar not detected');
  }

  // expose the class globally
  window.GreyhawkEncounterRoller = GreyhawkEncounterRoller;
  
  // Hook into Simple Calendar's date change events
  Hooks.on('simple-calendar:updateDate', (data) => {
    if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
      console.log('Greyhawk Encounters | Calendar date changed:', data);
      
      const autoRollSetting = game.settings.get('greyhawk-encounters', 'enableAutoCheck');
      if (autoRollSetting) {
        if (data.dateChanged && !data.timeChanged) {
          console.log('Greyhawk Encounters | Auto-rolling encounter check for new day');
          const terrain = game.settings.get('greyhawk-encounters', 'defaultTerrain') || 'plain';
          const population = game.settings.get('greyhawk-encounters', 'defaultPopulation') || 'uninhabited';
          const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
          GreyhawkEncounters.rollOutdoorEncounter(terrain, population, timeInfo?.timeOfDay, {
            season: timeInfo?.season,
            autoRolled: true
          }).then(result => {
            if (result && (result.result === "Encounter" || result.result === "Patrol Encounter")) {
              const chatData = {
                user: game.user.id,
                speaker: ChatMessage.getSpeaker({alias: "Greyhawk Encounters"}),
                content: `
                  <div>
                    <h3>Automatic Encounter Check</h3>
                    <p>Terrain: ${terrain}</p>
                    <p>Population: ${population}</p>
                    <p>Time of Day: ${timeInfo?.timeOfDay || 'Unknown'}</p>
                    <p>Encounter: ${result.encounter}</p>
                    <p>Number: ${result.number || '1'}</p>
                  </div>
                `
              };
              ChatMessage.create(chatData);
            }
          }).catch(err => {
            console.error("Error in auto encounter roll:", err);
          });
        }
      }
    }
  });
  
  // Additional settings registered on ready
  game.settings.register('greyhawk-encounters', 'enableAutoCheck', {
    name: 'Enable Automatic Encounter Checks',
    hint: 'Automatically check for encounters when the calendar day changes',
    scope: 'world',
    config: true,
    type: Boolean,
    default: false
  });
  
  game.settings.register('greyhawk-encounters', 'defaultTerrain', {
    name: 'Default Terrain',
    hint: 'Default terrain type for automatic encounter checks',
    scope: 'world',
    config: true,
    type: String,
    choices: {
      'plain': 'Plain',
      'forest': 'Forest',
      'desert': 'Desert',
      'hills': 'Hills',
      'mountains': 'Mountains',
      'marsh': 'Marsh'
    },
    default: 'plain'
  });
  
  game.settings.register('greyhawk-encounters', 'defaultPopulation', {
    name: 'Default Population',
    hint: 'Default population density for automatic encounter checks',
    scope: 'world',
    config: true,
    type: String,
    choices: {
      'dense': 'Dense',
      'moderate': 'Moderate',
      'uninhabited': 'Uninhabited/Wilderness'
    },
    default: 'uninhabited'
  });
});

// Main module class
class GreyhawkEncounters {
  static ID = 'greyhawk-encounters';
  
  /**
   * Get the current time info from Simple Calendar.
   */
  static getCurrentTimeInfo() {
    if (!game.modules.get('foundryvtt-simple-calendar')?.active) return null;
    const sc = SimpleCalendar.api;
    if (!sc) return null;
    
    let currentDate;
    if (typeof sc.getCurrentDateTime === 'function') {
      currentDate = sc.getCurrentDateTime();
    } else {
      currentDate = sc.currentDate;
    }
    if (!currentDate) return null;
    
    const hour = currentDate.hour || 0;
    let timeOfDay;
    if (hour >= 5 && hour < 9) timeOfDay = 'morning';
    else if (hour >= 9 && hour < 15) timeOfDay = 'noon';
    else if (hour >= 15 && hour < 19) timeOfDay = 'evening';
    else if (hour >= 19 && hour < 22) timeOfDay = 'night';
    else if (hour >= 22 || hour < 2) timeOfDay = 'midnight';
    else timeOfDay = 'predawn';
    
    let season;
    const month = currentDate.month || 0;
    const totalMonths = (typeof sc.getAllMonths === "function") ? sc.getAllMonths().length : 12;
    
    if (totalMonths === 12) {
      if (month >= 2 && month <= 4) season = 'spring';
      else if (month >= 5 && month <= 7) season = 'summer';
      else if (month >= 8 && month <= 10) season = 'autumn';
      else season = 'winter';
    } else {
      const monthIndex = (month / totalMonths);
      if (monthIndex >= 0.17 && monthIndex < 0.42) season = 'spring';
      else if (monthIndex >= 0.42 && monthIndex < 0.67) season = 'summer';
      else if (monthIndex >= 0.67 && monthIndex < 0.92) season = 'autumn';
      else season = 'winter';
    }
    
    return {
      date: currentDate,
      timeOfDay,
      season,
      month,
      day: currentDate.day || 0,
      year: currentDate.year || 0,
      hour,
      minute: currentDate.minute || 0,
      weekday: currentDate.weekday || '',
      isDay: (hour >= 6 && hour < 19)
    };
  }
  
  /**
   * Return climate based on season and region.
   */
  static getClimateForSeasonAndRegion(region, season) {
    const climateMap = {
      'frost_barbarians': { spring: 'subarctic', summer: 'subarctic', autumn: 'subarctic', winter: 'arctic' },
      'ice_barbarians': { spring: 'subarctic', summer: 'subarctic', autumn: 'subarctic', winter: 'arctic' },
      'snow_barbarians': { spring: 'subarctic', summer: 'subarctic', autumn: 'subarctic', winter: 'arctic' },
      'blackmoor': { spring: 'subarctic', summer: 'subarctic', autumn: 'subarctic', winter: 'arctic' },
      'furyondy': { spring: 'temperate', summer: 'temperate', autumn: 'temperate', winter: 'subarctic' },
      'greyhawk': { spring: 'temperate', summer: 'temperate', autumn: 'temperate', winter: 'temperate' },
      'nyrond': { spring: 'temperate', summer: 'temperate', autumn: 'temperate', winter: 'subarctic' },
      'sea_princes': { spring: 'subtropical', summer: 'subtropical', autumn: 'subtropical', winter: 'temperate' },
      'hepmonaland': { spring: 'tropical', summer: 'tropical', autumn: 'tropical', winter: 'subtropical' },
      'amedio_jungle': { spring: 'tropical', summer: 'tropical', autumn: 'tropical', winter: 'tropical' },
      'default': { spring: 'temperate', summer: 'temperate', autumn: 'temperate', winter: 'temperate' }
    };
    const regionClimate = climateMap[region] || climateMap['default'];
    return regionClimate[season];
  }
  
  // Encounter Table Functions remain the same, except for _displayEncounterResult
  
  static async rollPatrolEncounter(options) {
    return {
      result: "Patrol Encounter",
      patrolType: "Military",
      leader: { level: Math.floor(Math.random() * 3) + 3, class: "Fighter" },
      lieutenant: { level: Math.floor(Math.random() * 2) + 2, class: "Fighter" },
      sergeant: { level: 1, class: "Fighter" },
      troops: Math.floor(Math.random() * 4) + 4
    };
  }
  
  static getResultFromTable(table, roll) {
    for (const entry of table) {
      if (roll >= entry.min && roll <= entry.max) {
        return entry.result || entry.creature;
      }
    }
    return "No result found";
  }
  
  // Other methods remain the same...
  
  static _displayEncounterResult(result, options) {
    result = result || {};
    options = options || {};
    let content = `<div><h3>Greyhawk Encounter</h3>`;
    
    switch (options.encounterType) {
      case 'regional': {
        const regionName = options.specificRegion ? 
          options.specificRegion.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
          'Unknown Region';
        content += `<p>Region: ${regionName}</p>
                    <p>Roll: ${result.roll || 'N/A'}</p>
                    <p>Encounter: ${result.encounter || 'None'}</p>`;
        break;
      }
      case 'outdoor': {
        if (result.result === "No encounter" || result.result === "No encounter check needed at this time of day") {
          content += `<p>Terrain: ${options.terrain || 'Unknown'}</p>
                      <p>Population: ${options.population || 'Unknown'}</p>
                      <p>Time of Day: ${options.timeOfDay || 'Unknown'}</p>
                      <p>Result: ${result.result || 'Unknown'}</p>`;
        } else if (result.result === "Patrol Encounter") {
          content += `<p>Terrain: ${options.terrain || 'Unknown'}</p>
                      <p>Population: ${options.population || 'Unknown'}</p>
                      <p>Result: Patrol Encounter</p>
                      <p>Patrol Type: ${result.patrolType || 'Standard'}</p>`;
          if (result.leader) {
            content += `<p>Leader: Level ${result.leader.level || '3'} ${result.leader.class || 'Fighter'}</p>`;
          }
          if (result.lieutenant) {
            content += `<p>Lieutenant: Level ${result.lieutenant.level || '2'} ${result.lieutenant.class || 'Fighter'}</p>`;
          }
          if (result.sergeant) {
            content += `<p>Sergeant: Level ${result.sergeant.level || '1'} ${result.sergeant.class || 'Fighter'}</p>`;
          }
          content += `<p>Troops: ${result.troops || '6'} Soldiers</p>`;
          if (result.spellcaster) {
            content += `<p>Spellcaster: Level ${result.spellcaster.level || '1'} ${result.spellcaster.class || 'Magic-User'}</p>`;
          }
        } else if (result.result === "Encounter") {
          content += `<p>Terrain: ${options.terrain || 'Unknown'}</p>
                      <p>Population: ${options.population || 'Unknown'}</p>
                      <p>Time of Day: ${options.timeOfDay || 'Unknown'}</p>
                      <p>Roll: ${result.typeRoll || 'N/A'}</p>
                      <p>Encounter: ${result.encounter || 'Unknown Creature'}</p>`;
          if (result.specialResult) {
            content += `<p>Specific Type: ${result.specialResult}</p>`;
          }
          content += `<p>Number: ${result.number || '1'}</p>`;
          if (result.notes) {
            content += `<p>Notes: ${result.notes}</p>`;
          }
        } else {
          content += `<p>Terrain: ${options.terrain || 'Unknown'}</p>
                      <p>Population: ${options.population || 'Unknown'}</p>
                      <p>Result: ${result.result || 'Unknown'}</p>`;
        }
        break;
      }
      case 'dungeon': {
        content += `<p>Dungeon Level: ${options.dungeonLevel || '1'}</p>
                    <p>Monster Level: ${result.monsterLevel || 'Unknown'}</p>
                    <p>Roll: ${result.monsterRoll || 'N/A'}</p>
                    <p>Encounter: ${result.monster || 'Unknown'}</p>
                    <p>Number: ${result.adjustedNumber || result.numberRoll || '1'}</p>`;
        if (result.notes) {
          content += `<p>Notes: ${result.notes}</p>`;
        }
        break;
      }
      case 'underwater': {
        content += `<p>Water Type: ${options.waterType || 'Unknown'}</p>
                    <p>Depth: ${options.depth || 'Unknown'}</p>
                    <p>Roll: ${result.roll || 'N/A'}</p>
                    <p>Encounter: ${result.encounter || 'Unknown'}</p>`;
        if (result.specificType) {
          content += `<p>Specific Type: ${result.specificType}</p>`;
        }
        if (result.notes) {
          content += `<p>Notes: ${result.notes}</p>`;
        }
        break;
      }
      case 'airborne': {
        content += `<p>Region: ${options.region || 'Open Sky'}</p>
                    <p>Roll: ${result.roll || 'N/A'}</p>
                    <p>Encounter: ${result.encounter || 'Unknown'}</p>
                    <p>Number: ${result.number || '1'}</p>`;
        if (result.notes) {
          content += `<p>Notes: ${result.notes}</p>`;
        }
        break;
      }
      case 'astral':
      case 'ethereal': {
        if (result.result === "Psychic Wind" || result.result === "Ether Cyclone") {
          content += `<p>Plane: ${options.encounterType === 'astral' ? 'Astral' : 'Ethereal'}</p>
                      <p>Result: ${result.result}</p>
                      <p>Roll: ${result.roll || 'N/A'}</p>
                      <p>Effect: ${result.effect || 'Unknown effect'}</p>`;
        } else {
          content += `<p>Plane: ${options.encounterType === 'astral' ? 'Astral' : 'Ethereal'}</p>
                      <p>Roll: ${result.roll || 'N/A'}</p>
                      <p>Encounter: ${result.encounter || 'Unknown'}</p>`;
          if (result.specificType) {
            content += `<p>Specific Type: ${result.specificType}</p>`;
          }
          content += `<p>Number: ${result.numbers || result.number || '1'}</p>`;
          if (result.notes) {
            content += `<p>Notes: ${result.notes}</p>`;
          }
        }
        break;
      }
      default: {
        content += `<p>Encounter Type: ${options.encounterType || 'Unknown'}</p>
                    <p>Result: ${result.result || 'No specific result'}</p>`;
      }
    }
    
    if (result.timeInfo) {
      content += `<hr>
                  <div>
                    <h4>Calendar Information</h4>`;
      if (result.timeInfo.weekday || result.timeInfo.day || result.timeInfo.month || result.timeInfo.year) {
        content += `<p>Date: `;
        if (result.timeInfo.weekday) content += `${result.timeInfo.weekday} `;
        if (result.timeInfo.day) content += `${result.timeInfo.day}`;
        if (result.timeInfo.month) content += `, Month ${result.timeInfo.month}`;
        if (result.timeInfo.year) content += `, Year ${result.timeInfo.year}`;
        content += `</p>`;
      }
      if (result.timeInfo.hour !== undefined) {
        const minutes = result.timeInfo.minute !== undefined ? result.timeInfo.minute.toString().padStart(2, '0') : '00';
        content += `<p>Time: ${result.timeInfo.hour}:${minutes}</p>`;
      }
      if (result.timeInfo.season) {
        content += `<p>Season: ${result.timeInfo.season}</p>`;
      }
      if (result.timeInfo.timeOfDay) {
        content += `<p>Time of Day: ${result.timeInfo.timeOfDay}</p>`;
      }
      content += `</div>`;
    }
    
    if (options.encounterModifier) {
      let seasonalEffect = '';
      if (options.encounterModifier < 1) seasonalEffect = 'Reduced encounter chance due to seasonal effects';
      else if (options.encounterModifier > 1) seasonalEffect = 'Increased encounter chance due to seasonal effects';
      if (seasonalEffect) {
        content += `<div>
                      <p><em>${seasonalEffect}</em></p>
                    </div>`;
      }
    }
    
    content += `</div>`;
    
    const chatData = {
      user: game.user.id,
      speaker: ChatMessage.getSpeaker(),
      content: content
    };
    ChatMessage.create(chatData);
  }

  /**
 * Roll an encounter based on the provided options.
 */
static async rollEncounter(options) {
  console.log("Rolling encounter with options:", options);
  
  switch (options.encounterType) {
    case 'regional':
      return this._rollRegionalEncounter(options);
    case 'outdoor':
      return this.rollOutdoorEncounter(options.terrain, options.population, options.timeOfDay);
    case 'dungeon':
      return this._rollDungeonEncounter(options);
    case 'underwater':
      return this._rollUnderwaterEncounter(options);
    case 'airborne':
      return this._rollAirborneEncounter(options);
    case 'astral':
    case 'ethereal':
      return this._rollPlanarEncounter(options);
    default:
      return { result: "No encounter type specified" };
  }
}

/**
 * Roll an encounter taking time of day and calendar into account.
 */
static async rollTimeAwareEncounter(options) {
  // Get time info from Simple Calendar if available
  const timeInfo = this.getCurrentTimeInfo();
  if (timeInfo) {
    options.timeInfo = timeInfo;
    
    // Add seasonal modifiers
    if (options.encounterType === 'outdoor') {
      // Apply seasonal modifiers
      let encounterModifier = 1;
      if (timeInfo.season === 'winter') encounterModifier = 0.75;
      if (timeInfo.season === 'summer') encounterModifier = 1.25;
      options.encounterModifier = encounterModifier;
    }
  }
  
  const result = await this.rollEncounter(options);
  if (result && timeInfo) {
    result.timeInfo = timeInfo;
  }
  return result;
}

/**
 * Roll an outdoor encounter.
 */
static async rollOutdoorEncounter(terrain, population, timeOfDay, options = {}) {
  console.log(`Rolling outdoor encounter: ${terrain}, ${population}, ${timeOfDay}`);
  options = options || {};
  
  // Skip encounters during certain times based on creature activity
  if (timeOfDay) {
    const nocturnalTimes = ['night', 'midnight', 'predawn'];
    const diurnalTimes = ['morning', 'noon', 'evening'];
    
    if (options.skipTimeCheck !== true) {
      if (terrain === 'desert' && nocturnalTimes.includes(timeOfDay)) {
        return { result: "Desert creatures are more active at night", encounter: "Increased chance" };
      }
    }
  }
  
  // Population density affects encounter chance
  let encounterChance = 0;
  switch (population) {
    case 'dense': encounterChance = 10; break;
    case 'moderate': encounterChance = 15; break;
    case 'uninhabited': encounterChance = 20; break;
    default: encounterChance = 15;
  }
  
  // Terrain affects encounter tables
  const roll = Math.floor(Math.random() * 100) + 1;
  
  // Apply seasonal modifier if provided
  if (options.encounterModifier) {
    encounterChance *= options.encounterModifier;
  }
  
  if (roll > encounterChance) {
    return { result: "No encounter", roll: roll };
  }
  
  // Determine if this is a patrol encounter
  const patrolRoll = Math.floor(Math.random() * 100) + 1;
  if (population !== 'uninhabited' && patrolRoll <= 20) {
    return this.rollPatrolEncounter(options);
  }
  
  // Mock creature tables for different terrain types
  const terrainTables = {
    'plain': [
      { min: 1, max: 20, creature: "Bandits", number: "2d6" },
      { min: 21, max: 35, creature: "Wolves", number: "2d4" },
      { min: 36, max: 50, creature: "Wild Dogs", number: "1d6+1" },
      { min: 51, max: 65, creature: "Orcs", number: "1d6+3" },
      { min: 66, max: 80, creature: "Gnolls", number: "1d4+1" },
      { min: 81, max: 90, creature: "Ogres", number: "1d3" },
      { min: 91, max: 100, creature: "Hill Giants", number: "1" }
    ],
    'forest': [
      { min: 1, max: 15, creature: "Bandits", number: "2d6" },
      { min: 16, max: 30, creature: "Wolves", number: "2d6" },
      { min: 31, max: 45, creature: "Elves", number: "1d8+2" },
      { min: 46, max: 60, creature: "Goblins", number: "2d6" },
      { min: 61, max: 75, creature: "Bears", number: "1d4" },
      { min: 76, max: 85, creature: "Giant Spiders", number: "1d3" },
      { min: 86, max: 95, creature: "Owlbears", number: "1d2" },
      { min: 96, max: 100, creature: "Treant", number: "1" }
    ],
    'desert': [
      { min: 1, max: 20, creature: "Nomads", number: "2d6" },
      { min: 21, max: 40, creature: "Giant Scorpions", number: "1d3" },
      { min: 41, max: 60, creature: "Giant Lizards", number: "1d4" },
      { min: 61, max: 75, creature: "Lamias", number: "1" },
      { min: 76, max: 90, creature: "Brass Dragon", number: "1" },
      { min: 91, max: 100, creature: "Blue Dragon", number: "1" }
    ],
    'hills': [
      { min: 1, max: 15, creature: "Bandits", number: "2d6" },
      { min: 16, max: 30, creature: "Goblins", number: "2d6" },
      { min: 31, max: 45, creature: "Hobgoblins", number: "2d4" },
      { min: 46, max: 60, creature: "Orcs", number: "2d6" },
      { min: 61, max: 75, creature: "Gnolls", number: "1d6+2" },
      { min: 76, max: 85, creature: "Bugbears", number: "1d4+1" },
      { min: 86, max: 95, creature: "Ogres", number: "1d3" },
      { min: 96, max: 100, creature: "Hill Giants", number: "1d2" }
    ],
    'mountains': [
      { min: 1, max: 10, creature: "Eagles, Giant", number: "1d3" },
      { min: 11, max: 25, creature: "Orcs", number: "2d6" },
      { min: 26, max: 40, creature: "Goblins", number: "3d4" },
      { min: 41, max: 55, creature: "Ogres", number: "1d4" },
      { min: 56, max: 70, creature: "Trolls", number: "1d3" },
      { min: 71, max: 80, creature: "Stone Giants", number: "1d2" },
      { min: 81, max: 90, creature: "Rocs", number: "1" },
      { min: 91, max: 100, creature: "Cloud Giants", number: "1" }
    ],
    'marsh': [
      { min: 1, max: 20, creature: "Lizardfolk", number: "2d6" },
      { min: 21, max: 35, creature: "Giant Frogs", number: "1d6" },
      { min: 36, max: 50, creature: "Giant Lizards", number: "1d4" },
      { min: 51, max: 65, creature: "Crocodiles", number: "1d3" },
      { min: 66, max: 80, creature: "Bullywugs", number: "2d4" },
      { min: 81, max: 90, creature: "Trolls", number: "1d2" },
      { min: 91, max: 100, creature: "Black Dragon", number: "1" }
    ],
    'scrub': [
      { min: 1, max: 20, creature: "Bandits", number: "2d4" },
      { min: 21, max: 40, creature: "Wolves", number: "1d6" },
      { min: 41, max: 60, creature: "Gnolls", number: "1d6" },
      { min: 61, max: 80, creature: "Giant Ants", number: "2d4" },
      { min: 81, max: 100, creature: "Centaurs", number: "1d6" }
    ]
  };
  
  const table = terrainTables[terrain] || terrainTables['plain'];
  const typeRoll = Math.floor(Math.random() * 100) + 1;
  let encounter = "Unknown Creature";
  let numberPattern = "1";
  
  for (const entry of table) {
    if (typeRoll >= entry.min && typeRoll <= entry.max) {
      encounter = entry.creature;
      numberPattern = entry.number;
      break;
    }
  }
  
  // Roll for number of creatures
  let number = 1;
  if (numberPattern.includes("d")) {
    const parts = numberPattern.split("d");
    const dice = parseInt(parts[0]) || 1;
    const sides = parseInt(parts[1]) || 6;
    number = 0;
    for (let i = 0; i < dice; i++) {
      number += Math.floor(Math.random() * sides) + 1;
    }
    
    // Add any modifier
    if (parts[1].includes("+")) {
      const modParts = parts[1].split("+");
      number += parseInt(modParts[1]) || 0;
    }
  } else {
    number = parseInt(numberPattern) || 1;
  }
  
  return {
    result: "Encounter",
    typeRoll: typeRoll,
    encounter: encounter,
    number: number
  };
}

/**
 * Roll a dungeon encounter.
 */
static _rollDungeonEncounter(options) {
  const dungeonLevel = options.dungeonLevel || 1;
  const monsterLevel = Math.min(Math.max(1, dungeonLevel + Math.floor(Math.random() * 3) - 1), 9);
  const monsterRoll = Math.floor(Math.random() * 20) + 1;
  
  // Mock dungeon monster tables
  const monsterTables = {
    1: [
      { min: 1, max: 4, monster: "Kobolds", number: "2d6" },
      { min: 5, max: 8, monster: "Goblins", number: "1d6+1" },
      { min: 9, max: 12, monster: "Skeletons", number: "1d6" },
      { min: 13, max: 16, monster: "Giant Rats", number: "2d6" },
      { min: 17, max: 20, monster: "Stirges", number: "1d8" }
    ],
    2: [
      { min: 1, max: 4, monster: "Hobgoblins", number: "1d4+1" },
      { min: 5, max: 8, monster: "Zombies", number: "1d6" },
      { min: 9, max: 12, monster: "Orcs", number: "1d6+2" },
      { min: 13, max: 16, monster: "Giant Spiders", number: "1d3" },
      { min: 17, max: 20, monster: "Gnolls", number: "1d4" }
    ],
    // Higher level tables would continue...
    9: [
      { min: 1, max: 4, monster: "Stone Giants", number: "1d2" },
      { min: 5, max: 8, monster: "Hydra (7 heads)", number: "1" },
      { min: 9, max: 12, monster: "Cloud Giant", number: "1" },
      { min: 13, max: 16, monster: "Young Adult Dragon", number: "1" },
      { min: 17, max: 20, monster: "Purple Worm", number: "1" }
    ]
  };
  
  // Fallback to level 1 if the specific level isn't defined
  const table = monsterTables[monsterLevel] || monsterTables[1];
  let monster = "Unknown";
  let numberRoll = "1";
  
  for (const entry of table) {
    if (monsterRoll >= entry.min && monsterRoll <= entry.max) {
      monster = entry.monster;
      numberRoll = entry.number;
      break;
    }
  }
  
  // Roll for number of monsters
  let number = 1;
  if (numberRoll.includes("d")) {
    const parts = numberRoll.split("d");
    const dice = parseInt(parts[0]) || 1;
    const sides = parseInt(parts[1]) || 6;
    number = 0;
    for (let i = 0; i < dice; i++) {
      number += Math.floor(Math.random() * sides) + 1;
    }
    
    // Add any modifier
    if (parts[1].includes("+")) {
      const modParts = parts[1].split("+");
      number += parseInt(modParts[1]) || 0;
    }
  } else {
    number = parseInt(numberRoll) || 1;
  }
  
  // Adjust number based on dungeon level vs monster level
  let adjustedNumber = number;
  if (dungeonLevel > monsterLevel) {
    adjustedNumber = Math.ceil(number * 1.5);
  } else if (dungeonLevel < monsterLevel) {
    adjustedNumber = Math.max(1, Math.floor(number * 0.75));
  }
  
  return {
    result: "Encounter",
    monsterLevel: monsterLevel,
    monsterRoll: monsterRoll,
    monster: monster,
    numberRoll: number,
    adjustedNumber: adjustedNumber
  };
}

/**
 * Roll a regional encounter specific to Greyhawk.
 */
static _rollRegionalEncounter(options) {
  const roll = Math.floor(Math.random() * 100) + 1;
  const region = options.specificRegion || 'greyhawk';
  let encounter = "No specific encounter";
  
  // This would be a more complex table based on the specific region
  // Simple mock example here
  if (roll <= 30) {
    encounter = "Local inhabitants";
  } else if (roll <= 60) {
    encounter = "Wilderness creature";
  } else if (roll <= 85) {
    encounter = "Bandits or raiders";
  } else {
    encounter = "Special encounter";
  }
  
  return {
    roll: roll,
    encounter: encounter
  };
}

/**
 * Roll an underwater encounter.
 */
static _rollUnderwaterEncounter(options) {
  const waterType = options.waterType || 'fresh';
  const depth = options.depth || 'shallow';
  const roll = Math.floor(Math.random() * 100) + 1;
  
  // Example table
  const tables = {
    'fresh_shallow': [
      { min: 1, max: 30, creature: "Giant Fish" },
      { min: 31, max: 60, creature: "Lizardfolk" },
      { min: 61, max: 85, creature: "Crocodiles" },
      { min: 86, max: 100, creature: "Water Elemental" }
    ],
    'fresh_deep': [
      { min: 1, max: 40, creature: "Kuo-toa" },
      { min: 41, max: 70, creature: "Giant Octopus" },
      { min: 71, max: 90, creature: "Water Weird" },
      { min: 91, max: 100, creature: "Black Dragon" }
    ],
    'salt_shallow': [
      { min: 1, max: 30, creature: "Sahuagin" },
      { min: 31, max: 60, creature: "Sea Hag" },
      { min: 61, max: 85, creature: "Giant Crab" },
      { min: 86, max: 100, creature: "Merfolk" }
    ],
    'salt_deep': [
      { min: 1, max: 25, creature: "Aquatic Elf" },
      { min: 26, max: 50, creature: "Sea Hag" },
      { min: 51, max: 75, creature: "Storm Giant" },
      { min: 76, max: 100, creature: "Bronze Dragon" }
    ]
  };
  
  const tableKey = `${waterType}_${depth}`;
  const table = tables[tableKey] || tables['fresh_shallow'];
  
  let encounter = "Unknown creature";
  for (const entry of table) {
    if (roll >= entry.min && roll <= entry.max) {
      encounter = entry.creature;
      break;
    }
  }
  
  return {
    roll: roll,
    encounter: encounter
  };
}

/**
 * Roll an airborne encounter.
 */
static _rollAirborneEncounter(options) {
  const roll = Math.floor(Math.random() * 100) + 1;
  
  // Example sky encounter table
  const table = [
    { min: 1, max: 20, creature: "Griffons", number: "1d4" },
    { min: 21, max: 40, creature: "Giant Eagles", number: "1d3" },
    { min: 41, max: 60, creature: "Wyverns", number: "1d2" },
    { min: 61, max: 75, creature: "Hippogriffs", number: "1d4+1" },
    { min: 76, max: 85, creature: "Pegasi", number: "1d3" },
    { min: 86, max: 93, creature: "Young Dragon", number: "1" },
    { min: 94, max: 100, creature: "Roc", number: "1" }
  ];
  
  let encounter = "Unknown flying creature";
  let number = 1;
  
  for (const entry of table) {
    if (roll >= entry.min && roll <= entry.max) {
      encounter = entry.creature;
      
      // Roll for number
      if (entry.number && entry.number.includes("d")) {
        const parts = entry.number.split("d");
        const dice = parseInt(parts[0]) || 1;
        const sides = parseInt(parts[1]) || 6;
        number = 0;
        for (let i = 0; i < dice; i++) {
          number += Math.floor(Math.random() * sides) + 1;
        }
        
        // Add any modifier
        if (parts[1].includes("+")) {
          const modParts = parts[1].split("+");
          number += parseInt(modParts[1]) || 0;
        }
      } else {
        number = parseInt(entry.number) || 1;
      }
      break;
    }
  }
  
  return {
    roll: roll,
    encounter: encounter,
    number: number
  };
}

/**
 * Roll a planar encounter.
 */
static _rollPlanarEncounter(options) {
  const plane = options.encounterType;
  const roll = Math.floor(Math.random() * 100) + 1;
  
  // Astral and Ethereal plane tables
  const tables = {
    'astral': [
      { min: 1, max: 10, result: "Psychic Wind", effect: "Minor disorientation" },
      { min: 11, max: 20, creature: "Astral Dreadnought" },
      { min: 21, max: 40, creature: "Githyanki Patrol" },
      { min: 41, max: 60, creature: "Planetar" },
      { min: 61, max: 80, creature: "Night Hag" },
      { min: 81, max: 100, creature: "Color Pool (random plane)" }
    ],
    'ethereal': [
      { min: 1, max: 10, result: "Ether Cyclone", effect: "Transported 1d10 miles" },
      { min: 11, max: 30, creature: "Phase Spider" },
      { min: 31, max: 50, creature: "Etherborn Entity" },
      { min: 51, max: 70, creature: "Ghosts" },
      { min: 71, max: 85, creature: "Spectres" },
      { min: 86, max: 100, creature: "Ethereal Dragon" }
    ]
  };
  
  const table = tables[plane] || tables['astral'];
  let result = {};
  
  for (const entry of table) {
    if (roll >= entry.min && roll <= entry.max) {
      if (entry.result) {
        result = { result: entry.result, effect: entry.effect, roll: roll };
      } else {
        result = { result: "Encounter", encounter: entry.creature, roll: roll };
      }
      break;
    }
  }
  
  return result;
}

/**
 * Check if the party gets lost when traveling.
 */
static async checkIfLost(terrain) {
  // Different terrains have different chances of getting lost
  const lostChances = {
    'plain': 10,
    'scrub': 20,
    'forest': 35,
    'desert': 30,
    'hills': 25,
    'mountains': 40,
    'marsh': 50
  };
  
  const lostChance = lostChances[terrain] || 20;
  const roll = Math.floor(Math.random() * 100) + 1;
  
  if (roll <= lostChance) {
    // Determine which direction they're veering
    const directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest"];
    const dirRoll = Math.floor(Math.random() * directions.length);
    return {
      result: "Lost",
      direction: directions[dirRoll]
    };
  } else {
    return {
      result: "Not lost"
    };
  }
}

/**
 * Create a mock result for error handling.
 */
static _createMockResult(options) {
  return {
    result: "Error generating encounter",
    options: options
  };
}
}

// Remove this entire commented block that deals with sidebar button and styling
/* 
Hooks.on('renderSidebarTab', async (app, html) => {
  ...removed...
});
 */

// Encounter Roller Dialog
class GreyhawkEncounterRoller extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: 'greyhawk-encounter-roller',
      template: `modules/greyhawk-encounters/templates/encounter-roller.hbs`,
      title: 'Greyhawk Encounter Roller',
      width: 400,
      height: 'auto',
      resizable: true,
      popOut: true
    });
  }
  
  getData() {
    const useSimpleCalendar = game.settings.get('greyhawk-encounters', 'useSimpleCalendar');
    let timeInfo = null;
    try {
      if (useSimpleCalendar) timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
    } catch (error) {
      console.error("Error getting Simple Calendar time info:", error);
    }
    return {
      useSimpleCalendar,
      timeInfo,
      encounterTypes: [
        { id: 'regional', label: 'Regional (Greyhawk)' },
        { id: 'outdoor', label: 'Outdoor' },
        { id: 'dungeon', label: 'Dungeon' },
        { id: 'underwater', label: 'Underwater' },
        { id: 'airborne', label: 'Airborne' },
        { id: 'astral', label: 'Astral Plane' },
        { id: 'ethereal', label: 'Ethereal Plane' }
      ],
      regionTypes: [
        { id: 'political', label: 'Political Division' },
        { id: 'geographical_forest', label: 'Forest/Jungle' },
        { id: 'geographical_mountain', label: 'Mountain' },
        { id: 'geographical_hill', label: 'Hill/Highland' },
        { id: 'geographical_water', label: 'Body of Water' },
        { id: 'special_marsh', label: 'Marsh' },
        { id: 'special_wasteland', label: 'Wasteland' }
      ],
      terrainTypes: [
        { id: 'plain', label: 'Plain' },
        { id: 'scrub', label: 'Scrub' },
        { id: 'forest', label: 'Forest' },
        { id: 'desert', label: 'Desert' },
        { id: 'hills', label: 'Hills' },
        { id: 'mountains', label: 'Mountains' },
        { id: 'marsh', label: 'Marsh' }
      ],
      populationTypes: [
        { id: 'dense', label: 'Dense' },
        { id: 'moderate', label: 'Moderate' },
        { id: 'uninhabited', label: 'Uninhabited/Wilderness' }
      ],
      timesOfDay: [
        { id: 'morning', label: 'Morning' },
        { id: 'noon', label: 'Noon' },
        { id: 'evening', label: 'Evening' },
        { id: 'night', label: 'Night' },
        { id: 'midnight', label: 'Midnight' },
        { id: 'predawn', label: 'Pre-dawn' }
      ]
    };
  }
  
  activateListeners(html) {
    super.activateListeners(html);
    const useSimpleCalendar = game.settings.get('greyhawk-encounters', 'useSimpleCalendar');
    html.find('.simple-calendar-info').toggle(useSimpleCalendar);
    html.find('select[name="encounterType"]').change(ev => {
      const selectedType = ev.currentTarget.value;
      this._updateFormForEncounterType(selectedType, html);
    });
    html.find('select[name="regionType"]').change(ev => {
      const selectedType = ev.currentTarget.value;
      this._updateRegionList(selectedType, html);
    });
    html.find('input[name="useSimpleCalendar"]').change(ev => {
      const checked = ev.currentTarget.checked;
      game.settings.set('greyhawk-encounters', 'useSimpleCalendar', checked);
      html.find('.simple-calendar-info').toggle(checked);
      html.find('.time-of-day-group').toggle(!checked);
    });
    html.find('.roll-encounter-button').click(ev => {
      this._rollEncounter(html);
    });
    html.find('.check-lost-button').click(ev => {
      this._checkLost(html);
    });
    this._updateFormForEncounterType('outdoor', html);
  }
  
  _updateFormForEncounterType(encounterType, html) {
    console.log(`Updating form for encounter type: ${encounterType}`);
    html.find('.region-options').hide();
    html.find('.outdoor-options').hide();
    html.find('.dungeon-options').hide();
    html.find('.underwater-options').hide();
    html.find('.planar-options').hide();
    switch (encounterType) {
      case 'regional':
        html.find('.region-options').show();
        break;
      case 'outdoor':
        html.find('.outdoor-options').show();
        if (!game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
          html.find('.time-of-day-group').show();
        }
        break;
      case 'dungeon':
        html.find('.dungeon-options').show();
        break;
      case 'underwater':
        html.find('.underwater-options').show();
        break;
      case 'astral':
      case 'ethereal':
        html.find('.planar-options').show();
        break;
    }
  }
  
  async _updateRegionList(regionType, html) {
    const regionsSelect = html.find('select[name="region"]');
    regionsSelect.empty();
    let regions = [];
    if (regionType === 'political') {
      regions = [
        { id: 'almor', label: 'Almor' },
        // ... rest of the regions remain the same
      ];
    } else if (regionType === 'geographical_forest') {
      regions = [
        { id: 'adri_forest', label: 'Adri Forest' },
        // ... rest of the regions remain the same
      ];
    }
    // Other region types remain the same
    
    for (const region of regions) {
      regionsSelect.append(`<option value="${region.id}">${region.label}</option>`);
    }
  }
  
  async _rollEncounter(html) {
    try {
      const encounterType = html.find('select[name="encounterType"]').val() || 'outdoor';
      let options = { encounterType: encounterType };
      switch (encounterType) {
        case 'regional': {
          const regionType = html.find('select[name="regionType"]').val() || 'political';
          const specificRegion = html.find('select[name="region"]').val() || 'greyhawk';
          options = { ...options, regionType: regionType.split('_')[0], specificRegion: specificRegion };
          break;
        }
        case 'outdoor': {
          const terrain = html.find('select[name="terrain"]').val() || 'plain';
          const population = html.find('select[name="population"]').val() || 'moderate';
          let timeOfDay = 'noon';
          if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
            const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
            if (timeInfo && timeInfo.timeOfDay) timeOfDay = timeInfo.timeOfDay;
          } else {
            timeOfDay = html.find('select[name="timeOfDay"]').val() || 'noon';
          }
          options = { ...options, terrain: terrain, population: population, timeOfDay: timeOfDay };
          break;
        }
        case 'dungeon': {
          const dungeonLevel = parseInt(html.find('input[name="dungeonLevel"]').val()) || 1;
          options = { ...options, dungeonLevel: dungeonLevel };
          break;
        }
        case 'underwater': {
          const waterType = html.find('select[name="waterType"]').val() || 'fresh';
          const depth = html.find('select[name="depth"]').val() || 'shallow';
          options = { ...options, waterType: waterType, depth: depth };
          break;
        }
      }
      console.log("Rolling encounter with options:", options);
      let result = null;
      if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
        try {
          result = await GreyhawkEncounters.rollTimeAwareEncounter(options);
        } catch (error) {
          console.error("Error rolling time-aware encounter:", error);
          result = GreyhawkEncounters._createMockResult(options);
        }
      } else {
        try {
          result = await GreyhawkEncounters.rollEncounter(options);
        } catch (error) {
          console.error("Error rolling encounter:", error);
          result = GreyhawkEncounters._createMockResult(options);
        }
      }
      if (result) {
        GreyhawkEncounters._displayEncounterResult(result, options);
      } else {
        ui.notifications.error("Failed to generate encounter result.");
      }
    } catch (error) {
      console.error("Error in _rollEncounter:", error);
      ui.notifications.error("Error generating encounter.");
    }
  }
  
  async _checkLost(html) {
    const terrain = html.find('select[name="terrain"]').val();
    if (!terrain) {
      ui.notifications.warn("Please select a terrain type first");
      return;
    }
    const result = await GreyhawkEncounters.checkIfLost(terrain);
    const chatData = {
      user: game.user.id,
      speaker: ChatMessage.getSpeaker(),
      content: `
        <div>
          <h3>Lost Check</h3>
          <p>Terrain: ${terrain}</p>
          <p>Result: ${result.result}</p>
          ${result.result === "Lost" ? `<p>Direction: ${result.direction}</p>` : ''}
        </div>
      `
    };
    ChatMessage.create(chatData);
  }
}

// Load the Handlebars template
Hooks.once('init', () => {
  loadTemplates(['modules/greyhawk-encounters/templates/encounter-roller.hbs']);
});

// Export the module class for external access
globalThis.GreyhawkEncounters = GreyhawkEncounters;
globalThis.GreyhawkEncounterRoller = GreyhawkEncounterRoller;