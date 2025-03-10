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

// Add after initial declarations in greyhawk-encounters.js

// World of Greyhawk Regional Encounter Tables
const GREYHAWK_REGIONAL_TABLES = {
  // Political Regions
  "bone_march": [
    { min: 1, max: 2, encounter: "Bugbears" },
    { min: 3, max: 3, encounter: "Giant (evil only)" },
    { min: 4, max: 7, encounter: "Gnolls" },
    { min: 8, max: 9, encounter: "Gnolls and Flinds" },
    { min: 10, max: 11, encounter: "Goblins" },
    { min: 12, max: 12, encounter: "Goblins and Xvarts" },
    { min: 13, max: 14, encounter: "Hobgoblins" },
    { min: 15, max: 15, encounter: "Hobgoblins and Norkers" },
    { min: 16, max: 17, encounter: "Kobolds" },
    { min: 18, max: 21, encounter: "Men, Bandits" },
    { min: 22, max: 29, encounter: "Men, Brigands" },
    { min: 30, max: 34, encounter: "Men, Raiders" },
    { min: 35, max: 35, encounter: "Men, Tribesmen (hillmen)" },
    { min: 36, max: 39, encounter: "Norkers" },
    { min: 40, max: 41, encounter: "Ogres" },
    { min: 42, max: 42, encounter: "Ogres and Ogrillons" },
    { min: 43, max: 43, encounter: "Ogrillons" },
    { min: 44, max: 45, encounter: "Orcs" },
    { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
  ],
  "pomarj": [
    { min: 1, max: 2, encounter: "Bugbears" },
    { min: 3, max: 3, encounter: "Giant (evil only)" },
    { min: 4, max: 7, encounter: "Gnolls" },
    { min: 8, max: 9, encounter: "Gnolls and Flinds" },
    { min: 10, max: 11, encounter: "Goblins" },
    { min: 12, max: 12, encounter: "Goblins and Xvarts" },
    { min: 13, max: 14, encounter: "Hobgoblins" },
    { min: 15, max: 15, encounter: "Hobgoblins and Norkers" },
    { min: 16, max: 17, encounter: "Kobolds" },
    { min: 18, max: 21, encounter: "Men, Bandits" },
    { min: 22, max: 29, encounter: "Men, Brigands" },
    { min: 30, max: 34, encounter: "Men, Raiders" },
    { min: 35, max: 35, encounter: "Men, Tribesmen (hillmen)" },
    { min: 36, max: 39, encounter: "Norkers" },
    { min: 40, max: 41, encounter: "Ogres" },
    { min: 42, max: 42, encounter: "Ogres and Ogrillons" },
    { min: 43, max: 43, encounter: "Ogrillons" },
    { min: 44, max: 45, encounter: "Orcs" },
    // Similar structure to bone_march
    { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
  ],
  
  // Add a few more key regions as examples
  "celene": [
    { min: 1, max: 2, encounter: "Dwarves" },
    { min: 3, max: 3, encounter: "Dwarves, Mountain" },
    { min: 4, max: 20, encounter: "Elves, Gray" },
    { min: 21, max: 25, encounter: "Elves, High" },
    { min: 26, max: 40, encounter: "Elves, Sylvan" },
    { min: 41, max: 46, encounter: "Gnomes" },
    { min: 47, max: 47, encounter: "Halflings, Hairfeet" },
    { min: 48, max: 48, encounter: "Halflings, Stouts" },
    { min: 49, max: 50, encounter: "Halflings, Tallfellows" },
    { min: 51, max: 53, encounter: "Humanoids" },
    { min: 54, max: 55, encounter: "Men, Bandits" },
    { min: 56, max: 57, encounter: "Men, Brigands" },
    { min: 58, max: 63, encounter: "Men, Merchants" },
    { min: 64, max: 77, encounter: "Men, Patrol, Light" },
    { min: 78, max: 80, encounter: "Men, Pilgrims" },
    { min: 81, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
  ],
  
  "greyhawk": [
    { min: 1, max: 1, encounter: "Demi-humans" },
    { min: 2, max: 3, encounter: "Men, Characters" },
    { min: 4, max: 5, encounter: "Humanoids" },
    { min: 6, max: 7, encounter: "Men, Bandits" },
    { min: 8, max: 9, encounter: "Men, Brigands" },
    { min: 10, max: 11, encounter: "Men, Characters" },
    { min: 12, max: 30, encounter: "Men, Merchants" },
    { min: 31, max: 40, encounter: "Men, Patrol, Medium" },
    { min: 41, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
  ]
};

// Geographical Area Tables
const GREYHAWK_GEOGRAPHICAL_TABLES = {
  // Forests
  "adri_forest": [
    { min: 1, max: 5, encounter: "Elves, Sylvan" },
    { min: 6, max: 8, encounter: "Gnomes" },
    { min: 9, max: 15, encounter: "Halflings" },
    { min: 16, max: 18, encounter: "Humanoids" },
    { min: 19, max: 20, encounter: "Men, Bandits" },
    { min: 21, max: 45, encounter: "Men, Woodsmen" },
    { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
  ],
  
  // Mountains
  "barrier_peaks": [
    { min: 1, max: 4, encounter: "Dwarves, Mountain" },
    { min: 5, max: 10, encounter: "Giants" },
    { min: 11, max: 15, encounter: "Giants, Frost" },
    { min: 16, max: 18, encounter: "Giants, Hill" },
    { min: 19, max: 20, encounter: "Giants, Mountain" },
    { min: 21, max: 24, encounter: "Giants, Stone" },
    { min: 25, max: 35, encounter: "Humanoids" },
    { min: 36, max: 38, encounter: "Men, Cavemen" },
    { min: 39, max: 42, encounter: "Men, Tribesmen" },
    { min: 43, max: 47, encounter: "Ogres" },
    { min: 48, max: 50, encounter: "Trolls" },
    { min: 51, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
  ],
  
  // Hills
  "abbor_alz": [
    { min: 1, max: 3, encounter: "Giants, Hill" },
    { min: 4, max: 10, encounter: "Humanoids" },
    { min: 11, max: 15, encounter: "Men, Patrol, Medium" },
    { min: 16, max: 40, encounter: "Men, Tribesmen (plus 20-80)" },
    { min: 41, max: 43, encounter: "Ogres" },
    { min: 44, max: 45, encounter: "Trolls" },
    { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
  ],
  
  // Marshes
  "cold_marshes": [
    { min: 1, max: 3, encounter: "Frost Men" },
    { min: 4, max: 10, encounter: "Gnolls" },
    { min: 11, max: 30, encounter: "Men, Tribesmen" },
    { min: 31, max: 40, encounter: "Quaggoths" },
    { min: 41, max: 45, encounter: "Toad, Ice" },
    { min: 46, max: 50, encounter: "Troll, Ice" },
    { min: 51, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
  ]
};

// Add after the regional tables

// DMG Appendix C Random Monster Encounter Tables
const DMG_MONSTER_LEVEL_TABLES = {
  // Monster Level I Table
  1: [
    { min: 1, max: 2, monster: "Ant, giant", number: "1-4" },
    { min: 3, max: 4, monster: "Badger", number: "1-4", notes: "Not encountered below the 2nd level" },
    { min: 5, max: 14, monster: "Beetle, fire", number: "1-4" },
    { min: 15, max: 15, monster: "Demon, manes", number: "1-4" },
    { min: 16, max: 17, monster: "Dwarf", number: "4-14" },
    { min: 18, max: 18, monster: "Ear seeker", number: "1" },
    { min: 19, max: 19, monster: "Elf", number: "3-11" },
    { min: 20, max: 21, monster: "Gnome", number: "5-15" },
    { min: 22, max: 26, monster: "Goblin", number: "6-15" },
    { min: 27, max: 28, monster: "Halfling", number: "9-16", notes: "Not encountered below the 4th level" },
    { min: 29, max: 33, monster: "Hobgoblin", number: "2-8" },
    { min: 34, max: 48, monster: "Human", subtable: "human" },
    { min: 49, max: 54, monster: "Kobold", number: "6-18" },
    { min: 55, max: 66, monster: "Orc", number: "7-12" },
    { min: 67, max: 70, monster: "Piercer", number: "1-3" },
    { min: 71, max: 83, monster: "Rat, giant", number: "5-20" },
    { min: 84, max: 85, monster: "Rot grub", number: "1-3" },
    { min: 86, max: 96, monster: "Shrieker", number: "1-2" },
    { min: 97, max: 98, monster: "Skeleton", number: "1-4" },
    { min: 99, max: 100, monster: "Zombie", number: "1-3" }
  ],
  
  // Monster Level II Table
  2: [
    { min: 1, max: 1, monster: "Badger, giant", number: "1-4", notes: "Not encountered below the 3rd level" },
    { min: 2, max: 16, monster: "Centipede, giant", number: "3-13" },
    { min: 17, max: 27, monster: "Character", subtable: "character" },
    { min: 28, max: 29, monster: "Devil, lemure", number: "2-5" },
    { min: 30, max: 31, monster: "Gas spore", number: "1-2" },
    { min: 32, max: 38, monster: "Gnoll", number: "4-10" },
    { min: 39, max: 46, monster: "Piercer", number: "1-4" },
    { min: 47, max: 58, monster: "Rat, giant", number: "6-24" },
    { min: 59, max: 60, monster: "Rot grub", number: "1-4" },
    { min: 61, max: 72, monster: "Shrieker", number: "1-3" },
    { min: 73, max: 77, monster: "Stirge", number: "5-15" },
    { min: 78, max: 87, monster: "Toad, giant", number: "1-4" },
    { min: 88, max: 100, monster: "Troglodyte", number: "2-8" }
  ],
  
  // Add Monster Level III through X tables in a similar fashion
};

// Human Subtable for Monster Level I
const DMG_HUMAN_SUBTABLE = [
  { min: 1, max: 25, encounter: "Bandit", number: "5-15", notes: "Upper level leaders not with groups under 30" },
  { min: 26, max: 30, encounter: "Berserker", number: "3-9", notes: "Upper level leaders not with groups under 30" },
  { min: 31, max: 45, encounter: "Brigand", number: "5-15", notes: "Upper level leaders not with groups under 30" },
  { min: 46, max: 100, encounter: "Character", subtable: "character" }
];

// Character Subtable for determining encountered adventuring parties
const DMG_CHARACTER_SUBTABLE = [
  { min: 1, max: 17, character: "CLERIC", maxNumber: 3 },
  { min: 18, max: 20, character: "Druid", maxNumber: 2 },
  { min: 21, max: 60, character: "FIGHTER", maxNumber: 5 },
  { min: 61, max: 62, character: "Paladin", maxNumber: 2 },
  { min: 63, max: 65, character: "Ranger", maxNumber: 2 },
  { min: 66, max: 86, character: "MAGIC-USER", maxNumber: 3 },
  { min: 87, max: 88, character: "Illusionist", maxNumber: 1 },
  { min: 89, max: 98, character: "THIEF", maxNumber: 4 },
  { min: 99, max: 99, character: "Assassin", maxNumber: 2 },
  { min: 100, max: 100, character: "MONK OR BARD", maxNumber: 1 }
];

// Add the Dungeon Random Monster Level Determination Matrix

const DMG_DUNGEON_MONSTER_LEVEL_MATRIX = {
  // Dungeon level 1
  1: [
    { min: 1, max: 16, monsterLevel: 1 },
    { min: 17, max: 19, monsterLevel: 2 },
    { min: 20, max: 20, monsterLevel: 3 }
  ],
  
  // Dungeon levels 2-3
  2: [
    { min: 1, max: 12, monsterLevel: 1 },
    { min: 13, max: 16, monsterLevel: 2 },
    { min: 17, max: 18, monsterLevel: 3 },
    { min: 19, max: 19, monsterLevel: 4 },
    { min: 20, max: 20, monsterLevel: 5 }
  ],
  3: [
    { min: 1, max: 12, monsterLevel: 1 },
    { min: 13, max: 16, monsterLevel: 2 },
    { min: 17, max: 18, monsterLevel: 3 },
    { min: 19, max: 19, monsterLevel: 4 },
    { min: 20, max: 20, monsterLevel: 5 }
  ],
  
  // Dungeon level 4
  4: [
    { min: 1, max: 5, monsterLevel: 1 },
    { min: 6, max: 10, monsterLevel: 2 },
    { min: 11, max: 16, monsterLevel: 3 },
    { min: 17, max: 18, monsterLevel: 4 },
    { min: 19, max: 19, monsterLevel: 5 },
    { min: 20, max: 20, monsterLevel: 6 }
  ],
  
  // Add the rest of the matrix for dungeon levels 5-16+
};

// Main module class
class GreyhawkEncounters {
  static ID = 'greyhawk-encounters';
  
  /**
   * Get the current time info from Simple Calendar.
   */
  // Replace the getCurrentTimeInfo method

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
    // Standard calendar with 12 months
    if (month >= 2 && month <= 4) season = 'spring';
    else if (month >= 5 && month <= 7) season = 'summer';
    else if (month >= 8 && month <= 10) season = 'autumn';
    else season = 'winter';
  } else {
    // Handle non-standard calendars proportionally
    const monthIndex = (month / totalMonths);
    if (monthIndex >= 0.17 && monthIndex < 0.42) season = 'spring';
    else if (monthIndex >= 0.42 && monthIndex < 0.67) season = 'summer';
    else if (monthIndex >= 0.67 && monthIndex < 0.92) season = 'autumn';
    else season = 'winter';
  }
  
  // Determine weather conditions based on season
  let weather = 'normal';
  // This could be expanded with a more sophisticated weather system
  const weatherRoll = Math.floor(Math.random() * 100) + 1;
  if (season === 'winter') {
    if (weatherRoll <= 30) weather = 'stormy';
    else if (weatherRoll <= 60) weather = 'cold';
    else weather = 'normal';
  } else if (season === 'summer') {
    if (weatherRoll <= 20) weather = 'hot';
    else if (weatherRoll <= 40) weather = 'stormy';
    else weather = 'normal';
  } else { // spring or autumn
    if (weatherRoll <= 25) weather = 'stormy';
    else weather = 'normal';
  }
  
  return {
    date: currentDate,
    timeOfDay,
    season,
    weather,
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
  
  // Replace the existing rollPatrolEncounter method

static async rollPatrolEncounter(options) {
  // Determine patrol type based on region or other factors
  const patrolType = options.patrolType || "Standard";
  
  // Determine leader level (6-8)
  const leaderLevel = Math.floor(Math.random() * 3) + 6;
  
  // Determine lieutenant level (4-5)
  const lieutenantLevel = Math.floor(Math.random() * 2) + 4;
  
  // Determine sergeant level (2-3)
  const sergeantLevel = Math.floor(Math.random() * 2) + 2;
  
  // Determine number of 1st level fighters (3-4)
  const firstLevelFighters = Math.floor(Math.random() * 2) + 3;
  
  // Determine number of soldiers (13-24)
  const soldiers = Math.floor(Math.random() * 12) + 13;
  
  // Determine if a cleric or magic-user accompanies the patrol
  const spellcasterRoll = Math.floor(Math.random() * 100) + 1;
  let spellcaster = null;
  
  if (spellcasterRoll <= 40) {
    // Cleric of 6th or 7th level
    const clericLevel = Math.floor(Math.random() * 2) + 6;
    spellcaster = {
      class: "Cleric",
      level: clericLevel
    };
  } else if (spellcasterRoll <= 100) {
    // Magic-user of 5th to 8th level
    const mageLevel = Math.floor(Math.random() * 4) + 5;
    spellcaster = {
      class: "Magic-User",
      level: mageLevel
    };
  }
  
  return {
    result: "Patrol Encounter",
    patrolType: patrolType,
    leader: { level: leaderLevel, class: "Fighter" },
    lieutenant: { level: lieutenantLevel, class: "Fighter" },
    sergeant: { level: sergeantLevel, class: "Fighter" },
    firstLevelFighters: firstLevelFighters,
    troops: soldiers,
    spellcaster: spellcaster,
    notes: "Mounted unless terrain prevents it. Leaders on warhorses. Plate mail, shield, lance, flail, and long sword for fighters. Soldiers have chain/scale mail, shield, bow/crossbow, and hand weapon."
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
// Replace the rollTimeAwareEncounter method

static async rollTimeAwareEncounter(options) {
  // Get time info from Simple Calendar if available
  const timeInfo = this.getCurrentTimeInfo();
  if (timeInfo) {
    options.timeInfo = timeInfo;
    
    // Add seasonal modifiers
    if (options.encounterType === 'outdoor') {
      // Get region for climate determination
      const region = options.specificRegion || 'greyhawk';
      
      // Determine climate based on region and season
      const climate = this.getClimateForSeasonAndRegion(region, timeInfo.season);
      options.climate = climate;
      
      // Apply seasonal modifiers
      let encounterModifier = 1;
      
      // Modify encounter chance based on season and climate
      if (climate === 'arctic' && timeInfo.season === 'winter') {
        encounterModifier = 0.5; // Harsh conditions reduce activity
      } else if (climate === 'arctic' && timeInfo.season === 'summer') {
        encounterModifier = 1.5; // More active during brief summer
      } else if (climate === 'subarctic' && timeInfo.season === 'winter') {
        encounterModifier = 0.7;
      } else if (climate === 'tropical' && timeInfo.season === 'summer') {
        encounterModifier = 1.3; // Very active in hot season
      } else if (timeInfo.season === 'winter') {
        encounterModifier = 0.8; // Generally less active in winter
      } else if (timeInfo.season === 'summer') {
        encounterModifier = 1.2; // Generally more active in summer
      }
      
      // Weather effects
      if (timeInfo.weather === 'stormy') {
        encounterModifier *= 0.7; // Reduced activity in storms
      } else if (timeInfo.weather === 'hot' && (climate === 'temperate' || climate === 'subtropical')) {
        encounterModifier *= 0.9; // Slightly reduced activity in unusual heat
      } else if (timeInfo.weather === 'hot' && climate === 'tropical') {
        encounterModifier *= 1.1; // Increased activity for heat-adapted creatures
      }
      
      options.encounterModifier = encounterModifier;
      
      // Determine appropriate encounter table based on climate
      if (climate === 'arctic') {
        options.encounterTable = 'arctic';
      } else if (climate === 'subarctic') {
        options.encounterTable = 'subarctic';
      } else if (climate === 'tropical') {
        options.encounterTable = 'tropical';
      } else {
        options.encounterTable = 'temperate';
      }
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
// Add new method for rolling on DMG outdoor encounter tables
static _rollDMGOutdoorEncounter(terrain, population, options = {}) {
  // Convert terrain to match DMG tables
  let dmgTerrain = terrain;
  
  // Normalize the terrain to match DMG tables
  switch(terrain) {
    case 'desert': dmgTerrain = 'desert'; break;
    case 'forest': dmgTerrain = 'forest'; break;
    case 'hills': dmgTerrain = 'hills'; break;
    case 'mountains': dmgTerrain = 'mountains'; break;
    case 'marsh': dmgTerrain = 'marsh'; break;
    case 'plain': dmgTerrain = 'plain'; break;
    case 'scrub': dmgTerrain = 'scrub'; break;
    default: dmgTerrain = 'plain'; break;
  }
  
  // Roll for creature type based on terrain
  const roll = Math.floor(Math.random() * 100) + 1;
  
  // For now, we'll use simplified tables based on the DMG
  // In a full implementation, you'd use the complete tables from Appendix C
  const encounterTable = this._getDMGTerrainEncounterTable(dmgTerrain, population);
  
  let encounter = null;
  let subtableNeeded = null;
  
  // Find the encounter in the table
  for (const entry of encounterTable) {
    if (roll >= entry.min && roll <= entry.max) {
      encounter = entry.creature;
      subtableNeeded = entry.subtable || null;
      break;
    }
  }
  
  if (!encounter) {
    return { 
      result: "Encounter", 
      typeRoll: roll,
      encounter: "Unknown Creature" 
    };
  }
  
  // Handle subtables if needed
  if (subtableNeeded) {
    const subtableRoll = Math.floor(Math.random() * 100) + 1;
    const subtableResult = this._rollOnSubtable(subtableNeeded, subtableRoll);
    
    return {
      result: "Encounter",
      typeRoll: roll,
      encounter: encounter,
      specialResult: subtableResult.creature,
      number: this._rollNumberFromPattern(subtableResult.number || "1d6"),
      subtableRoll: subtableRoll
    };
  }
  
  // Get number pattern and roll for number
  const numberPattern = encounter.number || "1d6";
  const number = this._rollNumberFromPattern(numberPattern);
  
  return {
    result: "Encounter",
    typeRoll: roll,
    encounter: encounter.name || encounter,
    number: number
  };
}

// Helper to get terrain-specific encounter tables from DMG Appendix C
static _getDMGTerrainEncounterTable(terrain, population) {
  // For now, we'll return simplified tables
  // In a full implementation, you would use the complete DMG tables
  
  // Population affects which table to use
  const isInhabited = population !== 'uninhabited';
  
  // This is a simplified version of the temperate and sub-tropical DMG tables
  const tables = {
    plain: [
      { min: 1, max: 2, creature: { name: "Ant, giant", number: "1-4" } },
      { min: 3, max: 9, creature: { name: "Bull/Cattle, wild", number: "3d6" } },
      { min: 10, max: 10, creature: { name: "Demi-human", subtable: "demi_human", number: "2d6" } },
      { min: 11, max: 12, creature: { name: "Dog, wild", number: "2d4" } },
      { min: 13, max: 14, creature: { name: "Dragon", subtable: "dragon", number: "1" } },
      { min: 15, max: 15, creature: { name: "Eagle, giant", number: "1d3" } },
      { min: 17, max: 18, creature: { name: "Giant", subtable: "giant", number: "1d2" } },
      { min: 19, max: 19, creature: { name: "Griffon", number: "1d4" } },
      { min: 20, max: 25, creature: { name: "Herd animal", number: "3d10" } },
      { min: 31, max: 33, creature: { name: "Humanoid", subtable: "humanoid", number: "2d6" } },
      { min: 51, max: 70, creature: { name: "Men", subtable: "men", number: "3d6" } },
      { min: 78, max: 78, creature: { name: "Snake", subtable: "snake", number: "1" } },
      { min: 88, max: 97, creature: { name: "Wolf", number: "2d6" } },
      { min: 98, max: 100, creature: { name: "Wolf, worg", number: "1d4+1" } }
    ],
    // Add other terrain types similarly
  };
  
  return tables[terrain] || tables.plain;
}

// Helper to roll on creature subtables
static _rollOnSubtable(subtableName, roll) {
  // Define subtables from DMG Appendix C
  const subtables = {
    demi_human: [
      { min: 1, max: 5, creature: "Dwarf", number: "2d6" },
      { min: 6, max: 70, creature: "Elf", number: "2d6" },
      { min: 71, max: 80, creature: "Gnome", number: "2d6" },
      { min: 81, max: 100, creature: "Halfling", number: "3d6" }
    ],
    dragon: [
      { min: 1, max: 2, creature: "Black Dragon", number: "1" },
      { min: 3, max: 4, creature: "Blue Dragon", number: "1" },
      { min: 5, max: 6, creature: "Brass Dragon", number: "1" },
      { min: 7, max: 8, creature: "Bronze Dragon", number: "1" },
      { min: 9, max: 10, creature: "Chimera", number: "1" },
      { min: 11, max: 12, creature: "Copper Dragon", number: "1" },
      { min: 13, max: 28, creature: "Gold Dragon", number: "1" },
      { min: 29, max: 30, creature: "Green Dragon", number: "1" },
      { min: 31, max: 32, creature: "Red Dragon", number: "1" },
      { min: 33, max: 34, creature: "White Dragon", number: "1" },
      { min: 35, max: 100, creature: "Wyvern", number: "1" }
    ],
    giant: [
      { min: 1, max: 2, creature: "Cloud Giant", number: "1" },
      { min: 3, max: 4, creature: "Ettin", number: "1d2" },
      { min: 5, max: 6, creature: "Fire Giant", number: "1d2" },
      { min: 7, max: 8, creature: "Frost Giant", number: "1d2" },
      { min: 9, max: 95, creature: "Hill Giant", number: "1d4" },
      { min: 96, max: 98, creature: "Stone Giant", number: "1" },
      { min: 99, max: 99, creature: "Storm Giant", number: "1" },
      { min: 100, max: 100, creature: "Titan", number: "1" }
    ],
    humanoid: [
      { min: 1, max: 5, creature: "Gnoll", number: "2d6" },
      { min: 6, max: 10, creature: "Goblin", number: "3d6" },
      { min: 11, max: 15, creature: "Hobgoblin", number: "2d6" },
      { min: 16, max: 100, creature: "Orc", number: "3d6" }
    ],
    men: [
      { min: 1, max: 5, creature: "Bandit", number: "2d6" },
      { min: 6, max: 7, creature: "Berserker", number: "1d6" },
      { min: 8, max: 10, creature: "Brigand", number: "2d6" },
      { min: 23, max: 60, creature: "Merchant", number: "1d6" },
      { min: 61, max: 90, creature: "Nomad", number: "3d10" },
      { min: 91, max: 95, creature: "Pilgrim", number: "2d6" },
      { min: 96, max: 100, creature: "Tribesman", number: "3d10" }
    ],
    snake: [
      { min: 1, max: 10, creature: "Amphisbaena", number: "1" },
      { min: 11, max: 80, creature: "Poisonous Snake", number: "1d3" },
      { min: 81, max: 100, creature: "Spitting Snake", number: "1" }
    ]
    // Add other subtables as needed
  };
  
  const subtable = subtables[subtableName];
  if (!subtable) {
    return { creature: "Unknown (subtable not found)" };
  }
  
  for (const entry of subtable) {
    if (roll >= entry.min && roll <= entry.max) {
      return entry;
    }
  }
  
  return { creature: "Unknown (entry not found in subtable)" };
}

/**
 * Roll a dungeon encounter.
 */
// Replace the existing _rollDungeonEncounter method

static _rollDungeonEncounter(options) {
  const dungeonLevel = options.dungeonLevel || 1;
  
  // Use a normalized dungeon level for the matrix lookup
  let matrixLevel = dungeonLevel;
  if (dungeonLevel > 16) {
    matrixLevel = 16;
  } else if (dungeonLevel > 13) {
    matrixLevel = 14;
  } else if (dungeonLevel > 11) {
    matrixLevel = 12;
  } else if (dungeonLevel > 9) {
    matrixLevel = 10;
  } else if (dungeonLevel > 7) {
    matrixLevel = 8;
  } else if (dungeonLevel > 5) {
    matrixLevel = 6;
  } else if (dungeonLevel > 3) {
    matrixLevel = 4;
  } else if (dungeonLevel > 1) {
    matrixLevel = 2;
  }
  
  // Get the monster level matrix for this dungeon level
  const levelMatrix = DMG_DUNGEON_MONSTER_LEVEL_MATRIX[matrixLevel];
  if (!levelMatrix) {
    return { result: "Error: Unknown dungeon level" };
  }
  
  // Roll to determine monster level
  const levelRoll = Math.floor(Math.random() * 20) + 1;
  let monsterLevel = 1; // Default
  
  for (const entry of levelMatrix) {
    if (levelRoll >= entry.min && levelRoll <= entry.max) {
      monsterLevel = entry.monsterLevel;
      break;
    }
  }
  
  // Get the monster table for this level
  const monsterTable = DMG_MONSTER_LEVEL_TABLES[monsterLevel];
  if (!monsterTable) {
    return { 
      result: "Encounter",
      monsterLevel: monsterLevel,
      levelRoll: levelRoll,
      monster: `Monster Level ${monsterLevel} (Table not implemented yet)` 
    };
  }
  
  // Roll for the specific monster
  const monsterRoll = Math.floor(Math.random() * 100) + 1;
  let monster = "Unknown";
  let numberPattern = "1";
  let subtable = null;
  let notes = null;
  
  for (const entry of monsterTable) {
    if (monsterRoll >= entry.min && monsterRoll <= entry.max) {
      monster = entry.monster;
      numberPattern = entry.number || "1";
      subtable = entry.subtable || null;
      notes = entry.notes || null;
      break;
    }
  }
  
  // Handle subtables
  if (subtable) {
    if (subtable === "human") {
      const subtableResult = this._rollOnHumanSubtable();
      monster = subtableResult.encounter;
      numberPattern = subtableResult.number || numberPattern;
      notes = subtableResult.notes || notes;
      subtable = subtableResult.subtable || null;
      
      // Handle nested character subtable
      if (subtableResult.subtable === "character") {
        const characterResult = this._generateCharacterEncounter(dungeonLevel);
        monster = characterResult.encounter;
        numberPattern = characterResult.number || numberPattern;
        notes = characterResult.notes || notes;
      }
    }
    // Add other subtable handling as needed
  }
  
  // Roll for number of monsters
  const number = this._rollNumberFromPattern(numberPattern);
  
  // Adjust numbers based on relative dungeon level
  let adjustedNumber = number;
  if (dungeonLevel > monsterLevel) {
    // Lesser monsters on lower levels have numbers augmented
    const levelDifference = dungeonLevel - monsterLevel;
    adjustedNumber = number * (1 + levelDifference);
  } else if (dungeonLevel < monsterLevel) {
    // Greater monsters on higher levels have numbers reduced
    const levelDifference = monsterLevel - dungeonLevel;
    adjustedNumber = Math.max(1, number - levelDifference);
  }
  
  return {
    result: "Encounter",
    monsterLevel: monsterLevel,
    levelRoll: levelRoll,
    monsterRoll: monsterRoll,
    monster: monster,
    number: number,
    adjustedNumber: adjustedNumber,
    notes: notes
  };
}

// Helper method to roll on the Human Subtable
static _rollOnHumanSubtable() {
  const roll = Math.floor(Math.random() * 100) + 1;
  
  for (const entry of DMG_HUMAN_SUBTABLE) {
    if (roll >= entry.min && roll <= entry.max) {
      return entry;
    }
  }
  
  return { encounter: "Bandit", number: "5-15" }; // Default fallback
}

// Helper method to generate character encounters
static _generateCharacterEncounter(dungeonLevel) {
  // Number of characters in party (2-5)
  const characterCount = Math.floor(Math.random() * 4) + 2;
  
  // Select character classes
  const partyComposition = [];
  for (let i = 0; i < characterCount; i++) {
    const roll = Math.floor(Math.random() * 100) + 1;
    let characterClass = "Fighter"; // Default
    
    for (const entry of DMG_CHARACTER_SUBTABLE) {
      if (roll >= entry.min && roll <= entry.max) {
        characterClass = entry.character;
        break;
      }
    }
    
    partyComposition.push(characterClass);
  }
  
  // Determine character levels based on dungeon level
  let characterLevel;
  if (dungeonLevel <= 4) {
    characterLevel = dungeonLevel;
  } else {
    // 7th-12th level for deeper dungeons
    characterLevel = Math.floor(Math.random() * 6) + 7;
    
    // Adjust based on dungeon level
    if (characterLevel > dungeonLevel) {
      characterLevel--;
    } else if (characterLevel < dungeonLevel) {
      characterLevel++;
    }
    
    // Cap at 12th level unless very deep
    if (characterLevel > 12 && dungeonLevel < 16) {
      characterLevel = 12;
    }
  }
  
  // Calculate number of men-at-arms or henchmen
  const otherCount = 9 - characterCount;
  
  return {
    encounter: `Adventuring Party (${characterCount} level ${characterLevel} character${characterCount > 1 ? 's' : ''}, ${otherCount} henchmen/men-at-arms)`,
    number: `${characterCount + otherCount}`,
    notes: `Party: ${partyComposition.join(', ')}`
  };
}

// Helper method to roll for numbers from a dice pattern like "2d6+1"
static _rollNumberFromPattern(pattern) {
  if (!pattern) return 1;
  
  if (!pattern.includes('d')) {
    return parseInt(pattern) || 1;
  }
  
  let modifier = 0;
  let dicePattern = pattern;
  
  // Extract modifier if present
  if (pattern.includes('+')) {
    const parts = pattern.split('+');
    dicePattern = parts[0];
    modifier = parseInt(parts[1]) || 0;
  }
  
  // Split into dice count and sides
  const [diceCount, diceSides] = dicePattern.split('d').map(n => parseInt(n));
  
  // Roll the dice
  let total = 0;
  for (let i = 0; i < diceCount; i++) {
    total += Math.floor(Math.random() * diceSides) + 1;
  }
  
  // Add modifier
  return total + modifier;
}

/**
 * Roll a regional encounter specific to Greyhawk.
 */
// Replace the existing _rollRegionalEncounter method with this one

static _rollRegionalEncounter(options) {
  const region = options.specificRegion || 'greyhawk';
  const roll = Math.floor(Math.random() * 100) + 1;
  
  console.log(`Rolling regional encounter for ${region} with roll ${roll}`);
  
  // Try political regions first
  let table = GREYHAWK_REGIONAL_TABLES[region];
  
  // If not found in political regions, try geographical areas
  if (!table) {
    table = GREYHAWK_GEOGRAPHICAL_TABLES[region];
  }
  
  // If still not found, use a default table
  if (!table) {
    console.warn(`No encounter table found for region: ${region}, using Greyhawk`);
    table = GREYHAWK_REGIONAL_TABLES['greyhawk'];
  }
  
  // Find the appropriate entry based on the roll
  for (const entry of table) {
    // Handle the special case where max is 0 (indicating 46-00 range)
    if (entry.max === 0) {
      if (roll >= entry.min) {
        // If this result indicates using standard tables
        if (entry.useStandard) {
          return this._rollStandardEncounter(options);
        } else {
          return {
            roll: roll,
            encounter: entry.encounter
          };
        }
      }
    } 
    // Normal range check
    else if (roll >= entry.min && roll <= entry.max) {
      return {
        roll: roll,
        encounter: entry.encounter
      };
    }
  }
  
  // Fallback in case something goes wrong
  return {
    roll: roll,
    encounter: "No specific encounter found"
  };
}

// Add a new method for handling standard encounters from DMG Appendix C
static _rollStandardEncounter(options) {
  // For now, this is a placeholder that will be implemented later
  // It should eventually use the DMG Appendix C tables based on terrain
  const terrain = options.terrain || 'plain';
  const roll = Math.floor(Math.random() * 100) + 1;
  
  return {
    roll: roll,
    encounter: `Standard DMG encounter for ${terrain} terrain (roll: ${roll})`,
    notes: "Using standard DMG tables - not fully implemented yet"
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
  
  // Modify the _updateRegionList method to use our data

async _updateRegionList(regionType, html) {
  const regionsSelect = html.find('select[name="region"]');
  regionsSelect.empty();
  let regions = [];
  
  // Get all political regions
  if (regionType === 'political') {
    regions = Object.keys(GREYHAWK_REGIONAL_TABLES).map(id => {
      // Convert the key to a display label (e.g., "bone_march" -> "Bone March")
      const label = id.split('_')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');
      return { id, label };
    });
  } 
  // Get forest regions
  else if (regionType === 'geographical_forest') {
    regions = Object.keys(GREYHAWK_GEOGRAPHICAL_TABLES)
      .filter(id => id.includes('forest'))
      .map(id => {
        const label = id.split('_')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
        return { id, label };
      });
  }
  // Get mountain regions
  else if (regionType === 'geographical_mountain') {
    regions = Object.keys(GREYHAWK_GEOGRAPHICAL_TABLES)
      .filter(id => id.includes('mountains') || id.includes('peaks') || id.includes('range'))
      .map(id => {
        const label = id.split('_')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
        return { id, label };
      });
  }
  // Other geographical types would follow the same pattern
  
  // Add the regions to the select element
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