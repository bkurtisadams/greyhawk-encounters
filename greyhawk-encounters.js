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
  
  // Check if Simple Calendar is installed (using the known module id)
  if (game.modules.get('foundryvtt-simple-calendar')?.active) {
    console.log('Greyhawk Encounters | Simple Calendar detected');
  } else {
    console.log('Greyhawk Encounters | Simple Calendar not detected');
  }
  
  // Hook into Simple Calendar's date change events.
  // (Using the event name as defined by your version of Simple Calendar.)
  Hooks.on('simple-calendar:updateDate', (data) => {
    console.log("Simple Calendar:updateDate event data:", data);
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
                  <div class="greyhawk-result">
                    <h3>Automatic Encounter Check</h3>
                    <p><strong>Terrain:</strong> ${terrain}</p>
                    <p><strong>Population:</strong> ${population}</p>
                    <p><strong>Time of Day:</strong> ${timeInfo?.timeOfDay || 'Unknown'}</p>
                    <p><strong>Encounter:</strong> ${result.encounter}</p>
                    <p><strong>Number:</strong> ${result.number || '1'}</p>
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
   * Fallback: if getCurrentDateTime() is not available, use sc.currentDate.
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
  
  // -------------------------------
  // Encounter Table Functions
  // -------------------------------
  
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
  
  static getPoliticalTables() {
    // Replace the comment placeholders with your actual table data.
    return {
      furyondy: [/* table entries for Furyondy */],
      greyhawk: [/* table entries for Greyhawk */]
      // Other political regions...
    };
  }
  
  static getGeographicalTables() {
    return {
      forests: {/* forest tables */},
      mountains: {/* mountain tables */},
      hills: {/* hill tables */},
      waters: {/* water tables */},
      marshes: {/* marsh tables */},
      wastelands: {/* wasteland tables */}
    };
  }
  
  static getSpecialTables() {
    return {
      // Special encounter tables can go here.
    };
  }
  
  static async rollTimeAwareEncounter(options = {}) {
    const timeInfo = this.getCurrentTimeInfo();
    if (!timeInfo || !game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
      return this.rollEncounter(options);
    }
    
    const timeAwareOptions = {
      ...options,
      timeOfDay: options.timeOfDay || timeInfo.timeOfDay,
      isDay: options.isDay ?? timeInfo.isDay,
      season: options.season || timeInfo.season
    };
    
    if (timeAwareOptions.regionType === 'political' && timeAwareOptions.specificRegion) {
      const climate = this.getClimateForSeasonAndRegion(timeAwareOptions.specificRegion, timeInfo.season);
      timeAwareOptions.climate = climate;
    }
    
    if (timeAwareOptions.encounterType === 'outdoor') {
      switch (timeInfo.season) {
        case 'winter':
          timeAwareOptions.encounterModifier = 0.75;
          break;
        case 'summer':
          timeAwareOptions.encounterModifier = 1.25;
          break;
        case 'spring':
        case 'autumn':
          timeAwareOptions.encounterModifier = 1.0;
          break;
      }
    }
    
    if (timeAwareOptions.encounterType === 'outdoor' || timeAwareOptions.encounterType === 'regional') {
      if (!timeInfo.isDay) {
        timeAwareOptions.nightActive = true;
      }
    }
    
    return this.rollEncounter(timeAwareOptions);
  }
  
  static async rollEncounter(options = {}) {
    const encounterType = options.encounterType || 'regional';
    switch (encounterType) {
      case 'regional':
        return this.rollRegionalEncounter(options.regionType, options.specificRegion, options);
      case 'dungeon':
        return this.rollDungeonEncounter(options.dungeonLevel, options);
      case 'outdoor':
        return this.rollOutdoorEncounter(options.terrain, options.population, options.timeOfDay, options);
      case 'underwater':
        return this.rollUnderwaterEncounter(options.waterType, options.depth, options);
      case 'airborne':
        return this.rollAirborneEncounter(options);
      case 'astral':
        return this.rollAstralEncounter(options);
      case 'ethereal':
        return this.rollEtherealEncounter(options);
      default:
        ui.notifications.error(`Unknown encounter type: ${encounterType}`);
        return null;
    }
  }
  
  static async rollRegionalEncounter(regionType, specificRegion, options = {}) {
    const tables = this.getRegionalTables();
    let table = null;
    if (regionType === 'political') {
      table = tables.political[specificRegion];
    } else if (regionType === 'geographical') {
      if (specificRegion.includes('forest')) {
        table = tables.geographical.forests[specificRegion];
      } else if (specificRegion.includes('mountain')) {
        table = tables.geographical.mountains[specificRegion];
      } else if (specificRegion.includes('hill')) {
        table = tables.geographical.hills[specificRegion];
      } else if (specificRegion.includes('water')) {
        table = tables.geographical.waters[specificRegion];
      } else if (specificRegion.includes('marsh')) {
        table = tables.geographical.marshes[specificRegion];
      } else if (specificRegion.includes('waste')) {
        table = tables.geographical.wastelands[specificRegion];
      }
    }
    
    if (!table) {
      ui.notifications.error(`Encounter table not found for ${regionType} - ${specificRegion}`);
      return null;
    }
    
    let modifiedTable = [...table];
    if (options.nightActive) {
      modifiedTable = modifiedTable.map(entry => {
        const resultText = entry.result.toLowerCase();
        if (resultText.includes('undead') || resultText.includes('ghoul') ||
            resultText.includes('wight') || resultText.includes('wraith')) {
          return { 
            ...entry, 
            min: Math.max(1, entry.min - 2),
            max: Math.min(100, entry.max + 3)
          };
        } else if (resultText.includes('men,') && !resultText.includes('raiders')) {
          return { ...entry, max: Math.max(entry.min, entry.max - 2) };
        }
        return entry;
      });
      modifiedTable = this.normalizeTableRanges(modifiedTable);
    }
    
    const roll = new Roll('1d20');
    await roll.evaluate();
    const result = this.getResultFromTable(modifiedTable, roll.total);
    return {
      roll: roll.total,
      encounter: result,
      timeInfo: this.getCurrentTimeInfo(),
      nightActive: options.nightActive || false
    };
  }
  
  static async rollOutdoorEncounter(terrain, population, timeOfDay, options = {}) {
    if (!timeOfDay && game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
      const timeInfo = this.getCurrentTimeInfo();
      if (timeInfo) timeOfDay = timeInfo.timeOfDay;
    }
    
    let encounterChance;
    switch (population) {
      case 'dense': encounterChance = 20; break;
      case 'moderate': encounterChance = 12; break;
      case 'uninhabited': encounterChance = 10; break;
      default: encounterChance = 20;
    }
    
    if (options.encounterModifier) {
      encounterChance = Math.round(encounterChance / options.encounterModifier);
    }
    
    const checkMatrix = {
      plain: { morning: true, noon: false, evening: true, night: false, midnight: true, predawn: false },
      scrub: { morning: true, noon: false, evening: true, night: true, midnight: false, predawn: true },
      forest: { morning: true, noon: true, evening: true, night: true, midnight: true, predawn: true },
      desert: { morning: true, noon: false, evening: false, night: true, midnight: false, predawn: true },
      hills: { morning: false, noon: true, evening: false, night: true, midnight: false, predawn: true },
      mountains: { morning: true, noon: false, evening: false, night: true, midnight: false, predawn: false },
      marsh: { morning: true, noon: true, evening: true, night: true, midnight: true, predawn: true }
    };
    
    if (!checkMatrix[terrain][timeOfDay]) {
      return { 
        result: "No encounter check needed at this time of day",
        terrain,
        population,
        timeOfDay
      };
    }
    
    const encounterRoll = new Roll(`1d${encounterChance}`);
    await encounterRoll.evaluate();
    if (encounterRoll.total !== 1) {
      return { 
        result: "No encounter",
        roll: encounterRoll.total,
        terrain,
        population,
        timeOfDay,
        season: options.season || null
      };
    }
    
    const encounterTables = this.getOutdoorEncounterTables();
    let table = encounterTables[terrain];
    if (!table) {
      ui.notifications.error(`Encounter table not found for terrain: ${terrain}`);
      return null;
    }
    
    let modifiedTable = [...table];
    if (['night', 'midnight', 'predawn'].includes(timeOfDay)) {
      modifiedTable = this.adjustTableForNightEncounters(modifiedTable);
    }
    
    if (options.season) {
      modifiedTable = this.adjustTableForSeason(modifiedTable, options.season);
    }
    
    const typeRoll = new Roll('1d100');
    await typeRoll.evaluate();
    let encounterType = null;
    for (const entry of modifiedTable) {
      if (typeRoll.total >= entry.min && typeRoll.total <= entry.max) {
        encounterType = entry;
        break;
      }
    }
    
    if (population !== 'uninhabited' && population !== 'wilderness') {
      const patrolRoll = new Roll('1d20');
      await patrolRoll.evaluate();
      if (patrolRoll.total <= 5) {
        return this.rollPatrolEncounter(options);
      }
    }
    
    let specialResult = null;
    if (encounterType.subtable) {
      const subtableRoll = new Roll('1d100');
      await subtableRoll.evaluate({async: true});
      const subtable = encounterTables[encounterType.subtable];
      if (subtable) {
        for (const entry of subtable) {
          if (subtableRoll.total >= entry.min && subtableRoll.total <= entry.max) {
            specialResult = entry;
            break;
          }
        }
      }
    }
    
    let numberRange = encounterType.numbers;
    if (numberRange && numberRange.includes('-')) {
      const [minNum, maxNum] = numberRange.split('-').map(n => parseInt(n));
      const numberRoll = new Roll(`1d${maxNum - minNum + 1} + ${minNum - 1}`);
      await numberRoll.evaluate();
      return {
        result: "Encounter",
        terrain,
        population,
        timeOfDay,
        encounterRoll: encounterRoll.total,
        typeRoll: typeRoll.total,
        encounter: encounterType.creature,
        specialResult: specialResult ? specialResult.creature : null,
        number: numberRoll.total,
        notes: encounterType.notes || '',
        season: options.season || null,
        timeInfo: this.getCurrentTimeInfo()
      };
    } else {
      return {
        result: "Encounter",
        terrain,
        population,
        timeOfDay,
        encounterRoll: encounterRoll.total,
        typeRoll: typeRoll.total,
        encounter: encounterType.creature,
        specialResult: specialResult ? specialResult.creature : null,
        number: encounterType.numbers || "See Monster Manual",
        notes: encounterType.notes || '',
        season: options.season || null,
        timeInfo: this.getCurrentTimeInfo()
      };
    }
  }
  
  static normalizeTableRanges(table) {
    const sortedTable = [...table].sort((a, b) => a.min - b.min);
    for (let i = 0; i < sortedTable.length; i++) {
      if (i === 0) sortedTable[i].min = 1;
      if (i > 0) sortedTable[i].min = sortedTable[i-1].max + 1;
      if (i === sortedTable.length - 1) sortedTable[i].max = 100;
    }
    return sortedTable;
  }
  
  static adjustTableForNightEncounters(table) {
    let nightTable = [...table];
    nightTable = nightTable.map(entry => {
      const creature = entry.creature.toLowerCase();
      if (
        creature.includes('undead') || 
        creature.includes('owl') || 
        creature.includes('bat') || 
        creature.includes('wolf') || 
        creature.includes('ghoul') || 
        creature.includes('vampire') || 
        creature.includes('shadow') ||
        creature.includes('wight') ||
        creature.includes('wraith') ||
        creature.includes('spider') ||
        creature.includes('troll')
      ) {
        return {
          ...entry,
          min: Math.max(1, entry.min - 2),
          max: entry.max + 3
        };
      }
      if (
        creature.includes('men, merchant') ||
        creature.includes('pilgrim') ||
        creature.includes('elf') ||
        creature.includes('dwarf') ||
        creature.includes('halfling') ||
        creature.includes('gnome') ||
        creature.includes('bird')
      ) {
        return {
          ...entry,
          max: Math.max(entry.min, entry.max - 3)
        };
      }
      return entry;
    });
    return this.normalizeTableRanges(nightTable);
  }
  
  static adjustTableForSeason(table, season) {
    let seasonTable = [...table];
    switch (season) {
      case 'winter':
        seasonTable = seasonTable.map(entry => {
          const creature = entry.creature.toLowerCase();
          if (
            creature.includes('frost') ||
            creature.includes('winter') ||
            creature.includes('ice') ||
            creature.includes('snow') ||
            creature.includes('troll') ||
            creature.includes('yeti') ||
            creature.includes('wolf')
          ) {
            return {
              ...entry,
              min: Math.max(1, entry.min - 2),
              max: entry.max + 3
            };
          }
          if (
            creature.includes('snake') ||
            creature.includes('lizard') ||
            creature.includes('insect') ||
            creature.includes('beetle') ||
            creature.includes('centipede') ||
            creature.includes('tropical')
          ) {
            return {
              ...entry,
              max: Math.max(entry.min, entry.max - 4)
            };
          }
          return entry;
        });
        break;
      case 'summer':
        seasonTable = seasonTable.map(entry => {
          const creature = entry.creature.toLowerCase();
          if (
            creature.includes('snake') ||
            creature.includes('lizard') ||
            creature.includes('insect') ||
            creature.includes('beetle') ||
            creature.includes('centipede') ||
            creature.includes('spider') ||
            creature.includes('tropical')
          ) {
            return {
              ...entry,
              min: Math.max(1, entry.min - 2),
              max: entry.max + 3
            };
          }
          if (
            creature.includes('frost') ||
            creature.includes('winter') ||
            creature.includes('ice') ||
            creature.includes('yeti')
          ) {
            return {
              ...entry,
              max: Math.max(entry.min, entry.max - 3)
            };
          }
          return entry;
        });
        break;
      case 'spring':
      case 'autumn':
      default:
        break;
    }
    return this.normalizeTableRanges(seasonTable);
  }
  
  static getRegionalTables() {
    return {
      political: this.getPoliticalTables(),
      geographical: this.getGeographicalTables(),
      special: this.getSpecialTables()
    };
  }
  
  static getOutdoorEncounterTables() {
    return {
      plain: [
        { min: 1, max: 20, creature: "Bandits", numbers: "2d6", notes: "50% mounted" },
        { min: 21, max: 35, creature: "Wolves", numbers: "2d4" },
        { min: 36, max: 50, creature: "Militia Patrol", numbers: "3d4" },
        { min: 51, max: 65, creature: "Merchant Caravan", numbers: "2d4+2" },
        { min: 66, max: 80, creature: "Goblins", numbers: "3d6" },
        { min: 81, max: 100, creature: "Travelers", numbers: "1d6" }
      ],
      forest: [
        { min: 1, max: 15, creature: "Wolves", numbers: "2d4" },
        { min: 16, max: 30, creature: "Bears", numbers: "1d4" },
        { min: 31, max: 45, creature: "Elves", numbers: "2d6" },
        { min: 46, max: 60, creature: "Goblins", numbers: "3d6" },
        { min: 61, max: 75, creature: "Giant Spiders", numbers: "1d6" },
        { min: 76, max: 90, creature: "Bandits", numbers: "2d6" },
        { min: 91, max: 100, creature: "Forest Creatures", numbers: "2d4" }
      ],
      mountains: [
        { min: 1, max: 20, creature: "Mountain Lions", numbers: "1d4" },
        { min: 21, max: 40, creature: "Hill Giants", numbers: "1d3" },
        { min: 41, max: 60, creature: "Orcs", numbers: "2d6" },
        { min: 61, max: 80, creature: "Dwarves", numbers: "2d4" },
        { min: 81, max: 100, creature: "Griffons", numbers: "1d3" }
      ],
      desert: [
        { min: 1, max: 25, creature: "Nomads", numbers: "2d6" },
        { min: 26, max: 50, creature: "Giant Scorpions", numbers: "1d4" },
        { min: 51, max: 75, creature: "Dust Devils", numbers: "1d3" },
        { min: 76, max: 100, creature: "Wyverns", numbers: "1d2" }
      ],
      hills: [
        { min: 1, max: 25, creature: "Gnolls", numbers: "2d6" },
        { min: 26, max: 50, creature: "Hobgoblins", numbers: "3d6" },
        { min: 51, max: 75, creature: "Hill Giants", numbers: "1d3" },
        { min: 76, max: 100, creature: "Ogres", numbers: "1d4" }
      ],
      scrub: [
        { min: 1, max: 25, creature: "Lizardmen", numbers: "2d6" },
        { min: 26, max: 50, creature: "Kobolds", numbers: "3d8" },
        { min: 51, max: 75, creature: "Gnolls", numbers: "2d6" },
        { min: 76, max: 100, creature: "Giant Ants", numbers: "2d6" }
      ],
      marsh: [
        { min: 1, max: 25, creature: "Lizardmen", numbers: "2d8" },
        { min: 26, max: 50, creature: "Giant Frogs", numbers: "1d6" },
        { min: 51, max: 75, creature: "Crocodiles", numbers: "1d4" },
        { min: 76, max: 100, creature: "Will-o-Wisps", numbers: "1d3" }
      ]
    };
  }
  
  static _createMockResult(options) {
    const timeInfo = this.getCurrentTimeInfo();
    switch (options.encounterType) {
      case 'outdoor': {
        const isNight = timeInfo?.timeOfDay === 'night' || 
                        timeInfo?.timeOfDay === 'midnight' || 
                        timeInfo?.timeOfDay === 'predawn';
        if (isNight && (options.terrain === 'plain' || options.terrain === 'desert')) {
          return {
            result: "No encounter check needed at this time of day",
            terrain: options.terrain,
            population: options.population,
            timeOfDay: timeInfo?.timeOfDay || options.timeOfDay
          };
        }
        const roll = Math.floor(Math.random() * 20) + 1;
        if (roll !== 1) {
          return {
            result: "No encounter",
            roll: roll,
            terrain: options.terrain,
            population: options.population,
            timeOfDay: timeInfo?.timeOfDay || options.timeOfDay,
            season: timeInfo?.season || 'summer'
          };
        }
        return {
          result: "Encounter",
          terrain: options.terrain,
          population: options.population,
          timeOfDay: timeInfo?.timeOfDay || options.timeOfDay,
          encounterRoll: 1,
          typeRoll: Math.floor(Math.random() * 100) + 1,
          encounter: this._getRandomEncounterByTerrain(options.terrain),
          specialResult: null,
          number: Math.floor(Math.random() * 10) + 2,
          notes: '',
          season: timeInfo?.season || 'summer',
          timeInfo: timeInfo
        };
      }
      default:
        return {
          result: "Not implemented",
          encounterType: options.encounterType,
          timeInfo: timeInfo
        };
    }
  }
  
  static _getRandomEncounterByTerrain(terrain) {
    const encountersByTerrain = {
      plain: ['Bandits', 'Wolves', 'Militia Patrol', 'Merchant Caravan', 'Goblins'],
      forest: ['Wolves', 'Bears', 'Elves', 'Goblins', 'Giant Spiders', 'Bandits'],
      mountains: ['Mountain Lions', 'Hill Giants', 'Orcs', 'Dwarves', 'Griffons'],
      desert: ['Nomads', 'Giant Scorpions', 'Dust Devils', 'Wyverns'],
      hills: ['Gnolls', 'Hobgoblins', 'Hill Giants', 'Ogres'],
      scrub: ['Lizardmen', 'Kobolds', 'Gnolls', 'Giant Ants'],
      marsh: ['Lizardmen', 'Giant Frogs', 'Crocodiles', 'Will-o-Wisps']
    };
    const possibleEncounters = encountersByTerrain[terrain] || ['Wandering Travelers'];
    return possibleEncounters[Math.floor(Math.random() * possibleEncounters.length)];
  }
  
  static async checkIfLost(terrain) {
    const lostChance = {
      plain: 5,
      forest: 10,
      mountains: 12,
      desert: 8,
      hills: 6,
      scrub: 8,
      marsh: 10
    }[terrain] || 10;
    const roll = Math.floor(Math.random() * 20) + 1;
    if (roll <= lostChance) {
      const directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
      const direction = directions[Math.floor(Math.random() * directions.length)];
      return { result: "Lost", roll: roll, direction: direction };
    } else {
      return { result: "Not Lost", roll: roll };
    }
  }
  
  static _displayEncounterResult(result, options) {
    result = result || {};
    options = options || {};
    let content = `<div class="greyhawk-result"><h3>Greyhawk Encounter</h3>`;
    
    switch (options.encounterType) {
      case 'regional': {
        const regionName = options.specificRegion ? 
          options.specificRegion.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
          'Unknown Region';
        content += `<p><strong>Region:</strong> ${regionName}</p>
                    <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
                    <p><strong>Encounter:</strong> ${result.encounter || 'None'}</p>`;
        break;
      }
      case 'outdoor': {
        if (result.result === "No encounter" || result.result === "No encounter check needed at this time of day") {
          content += `<p><strong>Terrain:</strong> ${options.terrain || 'Unknown'}</p>
                      <p><strong>Population:</strong> ${options.population || 'Unknown'}</p>
                      <p><strong>Time of Day:</strong> ${options.timeOfDay || 'Unknown'}</p>
                      <p><strong>Result:</strong> ${result.result || 'Unknown'}</p>`;
        } else if (result.result === "Patrol Encounter") {
          content += `<p><strong>Terrain:</strong> ${options.terrain || 'Unknown'}</p>
                      <p><strong>Population:</strong> ${options.population || 'Unknown'}</p>
                      <p><strong>Result:</strong> Patrol Encounter</p>
                      <p><strong>Patrol Type:</strong> ${result.patrolType || 'Standard'}</p>`;
          if (result.leader) {
            content += `<p><strong>Leader:</strong> Level ${result.leader.level || '3'} ${result.leader.class || 'Fighter'}</p>`;
          }
          if (result.lieutenant) {
            content += `<p><strong>Lieutenant:</strong> Level ${result.lieutenant.level || '2'} ${result.lieutenant.class || 'Fighter'}</p>`;
          }
          if (result.sergeant) {
            content += `<p><strong>Sergeant:</strong> Level ${result.sergeant.level || '1'} ${result.sergeant.class || 'Fighter'}</p>`;
          }
          content += `<p><strong>Troops:</strong> ${result.troops || '6'} Soldiers</p>`;
          if (result.spellcaster) {
            content += `<p><strong>Spellcaster:</strong> Level ${result.spellcaster.level || '1'} ${result.spellcaster.class || 'Magic-User'}</p>`;
          }
        } else if (result.result === "Encounter") {
          content += `<p><strong>Terrain:</strong> ${options.terrain || 'Unknown'}</p>
                      <p><strong>Population:</strong> ${options.population || 'Unknown'}</p>
                      <p><strong>Time of Day:</strong> ${options.timeOfDay || 'Unknown'}</p>
                      <p><strong>Roll:</strong> ${result.typeRoll || 'N/A'}</p>
                      <p><strong>Encounter:</strong> ${result.encounter || 'Unknown Creature'}</p>
                      ${result.specialResult ? `<p><strong>Specific Type:</strong> ${result.specialResult}</p>` : ''}
                      <p><strong>Number:</strong> ${result.number || '1'}</p>
                      ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}`;
        } else {
          content += `<p><strong>Terrain:</strong> ${options.terrain || 'Unknown'}</p>
                      <p><strong>Population:</strong> ${options.population || 'Unknown'}</p>
                      <p><strong>Result:</strong> ${result.result || 'Unknown'}</p>`;
        }
        break;
      }
      case 'dungeon': {
        content += `<p><strong>Dungeon Level:</strong> ${options.dungeonLevel || '1'}</p>
                    <p><strong>Monster Level:</strong> ${result.monsterLevel || 'Unknown'}</p>
                    <p><strong>Roll:</strong> ${result.monsterRoll || 'N/A'}</p>
                    <p><strong>Encounter:</strong> ${result.monster || 'Unknown'}</p>
                    <p><strong>Number:</strong> ${result.adjustedNumber || result.numberRoll || '1'}</p>
                    ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}`;
        break;
      }
      case 'underwater': {
        content += `<p><strong>Water Type:</strong> ${options.waterType || 'Unknown'}</p>
                    <p><strong>Depth:</strong> ${options.depth || 'Unknown'}</p>
                    <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
                    <p><strong>Encounter:</strong> ${result.encounter || 'Unknown'}</p>
                    ${result.specificType ? `<p><strong>Specific Type:</strong> ${result.specificType}</p>` : ''}
                    ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}`;
        break;
      }
      case 'airborne': {
        content += `<p><strong>Region:</strong> ${options.region || 'Open Sky'}</p>
                    <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
                    <p><strong>Encounter:</strong> ${result.encounter || 'Unknown'}</p>
                    <p><strong>Number:</strong> ${result.number || '1'}</p>
                    ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}`;
        break;
      }
      case 'astral':
      case 'ethereal': {
        if (result.result === "Psychic Wind" || result.result === "Ether Cyclone") {
          content += `<p><strong>Plane:</strong> ${options.encounterType === 'astral' ? 'Astral' : 'Ethereal'}</p>
                      <p><strong>Result:</strong> ${result.result}</p>
                      <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
                      <p><strong>Effect:</strong> ${result.effect || 'Unknown effect'}</p>`;
        } else {
          content += `<p><strong>Plane:</strong> ${options.encounterType === 'astral' ? 'Astral' : 'Ethereal'}</p>
                      <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
                      <p><strong>Encounter:</strong> ${result.encounter || 'Unknown'}</p>
                      ${result.specificType ? `<p><strong>Specific Type:</strong> ${result.specificType}</p>` : ''}
                      <p><strong>Number:</strong> ${result.numbers || result.number || '1'}</p>
                      ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}`;
        }
        break;
      }
      default: {
        content += `<p><strong>Encounter Type:</strong> ${options.encounterType || 'Unknown'}</p>
                    <p><strong>Result:</strong> ${result.result || 'No specific result'}</p>`;
      }
    }
    
    if (result.timeInfo) {
      content += `<hr>
                  <div class="calendar-info">
                    <h4>Calendar Information</h4>`;
      if (result.timeInfo.weekday || result.timeInfo.day || result.timeInfo.month || result.timeInfo.year) {
        content += `<p><strong>Date:</strong> `;
        if (result.timeInfo.weekday) content += `${result.timeInfo.weekday} `;
        if (result.timeInfo.day) content += `${result.timeInfo.day}`;
        if (result.timeInfo.month) content += `, Month ${result.timeInfo.month}`;
        if (result.timeInfo.year) content += `, Year ${result.timeInfo.year}`;
        content += `</p>`;
      }
      if (result.timeInfo.hour !== undefined) {
        const minutes = result.timeInfo.minute !== undefined ? result.timeInfo.minute.toString().padStart(2, '0') : '00';
        content += `<p><strong>Time:</strong> ${result.timeInfo.hour}:${minutes}</p>`;
      }
      if (result.timeInfo.season) {
        content += `<p><strong>Season:</strong> ${result.timeInfo.season}</p>`;
      }
      if (result.timeInfo.timeOfDay) {
        content += `<p><strong>Time of Day:</strong> ${result.timeInfo.timeOfDay}</p>`;
      }
      content += `</div>`;
    }
    
    if (options.encounterModifier) {
      let seasonalEffect = '';
      if (options.encounterModifier < 1) seasonalEffect = 'Reduced encounter chance due to seasonal effects';
      else if (options.encounterModifier > 1) seasonalEffect = 'Increased encounter chance due to seasonal effects';
      if (seasonalEffect) {
        content += `<div class="seasonal-effects">
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
}

// Sidebar button and styling
Hooks.on('renderSidebarTab', async (app, html) => {
  if (app.options.id === 'chat') {
    const greyhawkButton = $(`
      <div class="greyhawk-button-container">
        <button type="button" class="greyhawk-encounters-button">
          <i class="fas fa-mountain"></i>
          <span>Greyhawk Encounters</span>
        </button>
      </div>
    `);
    
    greyhawkButton.find('button').click(ev => {
      new GreyhawkEncounterRoller().render(true);
    });
    
    // Find the chat controls area and insert the button there
    const chatControls = html.find('.chat-control-icon');
    if (chatControls.length) {
      chatControls.last().after(greyhawkButton);
    } else {
      // Fallback to inserting it in a more contained way
      const buttonContainer = $('<div style="max-width: 200px; margin: 0 auto;"></div>');
      buttonContainer.append(greyhawkButton);
      html.append(buttonContainer);
    }
    
    // After adding the button
    console.log("Button added to:", html.selector);
    console.log("Chat UI structure:", html.parent().parent().html());
    
    const styleElement = $(`
      <style>
        .greyhawk-result {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #999;
          border-radius: 5px;
          margin: 5px 0;
          padding: 10px;
        }
        .greyhawk-result h3 {
          color: #591403;
          border-bottom: 1px solid #591403;
          padding-bottom: 5px;
          margin-bottom: 10px;
          font-size: 1.2em;
        }
        .greyhawk-result p {
          margin: 5px 0;
        }
        .greyhawk-result .calendar-info {
          background: rgba(230, 230, 230, 0.7);
          padding: 8px;
          margin-top: 10px;
          border-radius: 3px;
        }
        .greyhawk-result .calendar-info h4 {
          margin-top: 0;
          color: #444;
          font-size: 1.1em;
        }
        .greyhawk-button-container { position: relative; z-index: 30; }
        .greyhawk-encounters-button:hover { background: #374151; box-shadow: 0 1px 5px rgba(0,0,0,0.3); }
      </style>
    `);
    $('head').append(styleElement);
  }
});

// Encounter Roller Dialog
class GreyhawkEncounterRoller extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: 'greyhawk-encounter-roller',
      template: `modules/greyhawk-encounters/templates/encounter-roller.hbs`,
      title: 'Greyhawk Encounter Roller',
      width: 400,
      height: 'auto',
      classes: ['greyhawk-encounters'],
      resizable: true
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
    html.find('.encounter-type-select').change(ev => {
      const selectedType = ev.currentTarget.value;
      this._updateFormForEncounterType(selectedType, html);
    });
    html.find('.region-type-select').change(ev => {
      const selectedType = ev.currentTarget.value;
      this._updateRegionList(selectedType, html);
    });
    html.find('.toggle-calendar').change(ev => {
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
    const regionsSelect = html.find('.region-select');
    regionsSelect.empty();
    let regions = [];
    if (regionType === 'political') {
      regions = [
        { id: 'almor', label: 'Almor' },
        { id: 'bandit_kingdoms', label: 'Bandit Kingdoms' },
        { id: 'bissel', label: 'Bissel' },
        { id: 'blackmoor', label: 'Blackmoor' },
        { id: 'bone_march', label: 'Bone March' },
        { id: 'celene', label: 'Celene' },
        { id: 'dyvers', label: 'Dyvers' },
        { id: 'ekbir', label: 'Ekbir' },
        { id: 'frost_barbarians', label: 'Frost Barbarians' },
        { id: 'furyondy', label: 'Furyondy' },
        { id: 'geoff', label: 'Geoff' },
        { id: 'great_kingdom', label: 'Great Kingdom' },
        { id: 'greyhawk', label: 'Greyhawk' },
        { id: 'highfolk', label: 'High Folk' },
        { id: 'horned_society', label: 'Horned Society' },
        { id: 'idee', label: 'Idee' },
        { id: 'irongate', label: 'Irongate' },
        { id: 'iuz', label: 'Iuz' },
        { id: 'ket', label: 'Ket' },
        { id: 'lordship_isles', label: 'Lordship of the Isles' },
        { id: 'nyrond', label: 'Nyrond' },
        { id: 'pale', label: 'The Pale' },
        { id: 'perrenland', label: 'Perrenland' },
        { id: 'pomarj', label: 'Pomarj' },
        { id: 'ratik', label: 'Ratik' },
        { id: 'rovers_barrens', label: 'Rovers of the Barrens' },
        { id: 'scarlet_brotherhood', label: 'Scarlet Brotherhood' },
        { id: 'sea_barons', label: 'Sea Barons' },
        { id: 'sea_princes', label: 'Sea Princes' },
        { id: 'shield_lands', label: 'Shield Lands' },
        { id: 'spindrift_isles', label: 'Spindrift Isles' },
        { id: 'sterich', label: 'Sterich' },
        { id: 'stonefist', label: 'Hold of Stonefist' },
        { id: 'sunndi', label: 'Sunndi' },
        { id: 'tenh', label: 'Duchy of Tenh' },
        { id: 'tiger_nomads', label: 'Tiger Nomads' },
        { id: 'ulek_county', label: 'County of Ulek' },
        { id: 'ulek_duchy', label: 'Duchy of Ulek' },
        { id: 'ulek_principality', label: 'Principality of Ulek' },
        { id: 'ull', label: 'Ull' },
        { id: 'urnst_county', label: 'County of Urnst' },
        { id: 'urnst_duchy', label: 'Duchy of Urnst' },
        { id: 'valley_mage', label: 'Valley of the Mage' },
        { id: 'veluna', label: 'Veluna' },
        { id: 'verbobonc', label: 'Verbobonc' },
        { id: 'wild_coast', label: 'Wild Coast' },
        { id: 'wolf_nomads', label: 'Wolf Nomads' },
        { id: 'yeomanry', label: 'Yeomanry' },
        { id: 'zeif', label: 'Zeif' }
      ];
    } else if (regionType === 'geographical_forest') {
      regions = [
        { id: 'adri_forest', label: 'Adri Forest' },
        { id: 'amedio_jungle', label: 'Amedio Jungle' },
        { id: 'axewood', label: 'Axewood' },
        { id: 'bramblewood', label: 'Bramblewood' },
        { id: 'burneal_forest', label: 'Burneal Forest' },
        { id: 'celadon_forest', label: 'Celadon Forest' },
        { id: 'dim_forest', label: 'Dim Forest' },
        { id: 'dreadwood', label: 'Dreadwood' },
        { id: 'fellreev_forest', label: 'Fellreev Forest' },
        { id: 'forlorn_forest', label: 'Forlorn Forest' },
        { id: 'gamboge_forest', label: 'Gamboge Forest' },
        { id: 'gnarley_forest', label: 'Gnarley Forest' },
        { id: 'grandwood_forest', label: 'Grandwood Forest' },
        { id: 'hepmonaland', label: 'Hepmonaland' },
        { id: 'hornwood', label: 'Hornwood' },
        { id: 'hraak_forest', label: 'Hraak Forest' },
        { id: 'loftwood', label: 'Loftwood' },
        { id: 'menowood', label: 'Menowood' },
        { id: 'nutherwood', label: 'Nutherwood' },
        { id: 'oytwood', label: 'Oytwood' },
        { id: 'phostwood', label: 'Phostwood' },
        { id: 'rieuwood', label: 'Rieuwood' },
        { id: 'sablewood', label: 'Sablewood' },
        { id: 'silverwood', label: 'Silverwood' },
        { id: 'spikey_forest', label: 'Spikey Forest' },
        { id: 'suss_forest', label: 'Suss Forest' },
        { id: 'tangles', label: 'Tangles' },
        { id: 'timberway_forest', label: 'Timberway Forest' },
        { id: 'udgru_forest', label: 'Udgru Forest' },
        { id: 'vesve_forest', label: 'Vesve Forest' },
        { id: 'welkwood', label: 'Welkwood' }
      ];
    } else if (regionType === 'geographical_mountain') {
      regions = [
        { id: 'barrier_peaks', label: 'Barrier Peaks' },
        { id: 'clatspur_range', label: 'Clatspur Range' },
        { id: 'corusk_mountains', label: 'Corusk Mountains' },
        { id: 'crystalmist_mountains', label: 'Crystalmist Mountains' },
        { id: 'griff_mountains', label: 'Griff Mountains' },
        { id: 'hellfurnaces', label: 'Hellfurnaces' },
        { id: 'jotens', label: 'Jotens' },
        { id: 'lortmil_mountains', label: 'Lortmil Mountains' },
        { id: 'rakers', label: 'Rakers' },
        { id: 'sulhaut_mountains', label: 'Sulhaut Mountains' },
        { id: 'ullsprue', label: 'Ullsprue' },
        { id: 'yatil_mountains', label: 'Yatil Mountains' }
      ];
    } else if (regionType === 'geographical_hill') {
      regions = [
        { id: 'abbor_alz', label: 'Abbor-Alz' },
        { id: 'blemu_hills', label: 'Blemu Hills' },
        { id: 'bluff_hills', label: 'Bluff Hills' },
        { id: 'cairn_hills', label: 'Cairn Hills' },
        { id: 'drachensgrab_hills', label: 'Drachensgrab Hills' },
        { id: 'flinty_hills', label: 'Flinty Hills' },
        { id: 'glorioles', label: 'Glorioles' },
        { id: 'good_hills', label: 'Good Hills' },
        { id: 'gull_cliffs', label: 'Gull Cliffs' },
        { id: 'headlands', label: 'Headlands' },
        { id: 'hestmark_highlands', label: 'Hestmark Highlands' },
        { id: 'hollow_highlands', label: 'Hollow Highlands' },
        { id: 'howling_hills', label: 'Howling Hills' },
        { id: 'iron_hills', label: 'Iron Hills' },
        { id: 'kron_hills', label: 'Kron Hills' },
        { id: 'little_hills', label: 'Little Hills' },
        { id: 'lorridges', label: 'Lorridges' },
        { id: 'sepia_uplands', label: 'Sepia Uplands' },
        { id: 'spine_ridge', label: 'Spine Ridge' },
        { id: 'stark_mounds', label: 'Stark Mounds' },
        { id: 'tors', label: 'Tors' },
        { id: 'tusman_hills', label: 'Tusman Hills' },
        { id: 'yecha_hills', label: 'Yecha Hills' }
      ];
    } else if (regionType === 'geographical_water') {
      regions = [
        { id: 'artonsamay_river', label: 'Artonsamay River' },
        { id: 'nesser_river', label: 'Nesser River' },
        { id: 'nyr_dyv', label: 'Nyr Dyv' },
        { id: 'quag_lake', label: 'Quag Lake' },
        { id: 'selintan_river', label: 'Selintan River' },
        { id: 'velverdyva_river', label: 'Velverdyva River' },
        { id: 'veng_river', label: 'Veng River' },
        { id: 'whyestil_lake', label: 'Whyestil Lake' }
      ];
    } else if (regionType === 'special_marsh') {
      regions = [
        { id: 'cold_marshes', label: 'Cold Marshes' },
        { id: 'lone_heath', label: 'Lone Heath' },
        { id: 'vast_swamp', label: 'Vast Swamp' }
      ];
    } else if (regionType === 'special_wasteland') {
      regions = [
        { id: 'bright_desert', label: 'Bright Desert' },
        { id: 'dry_steppes', label: 'Dry Steppes' },
        { id: 'land_black_ice', label: 'Land of Black Ice' },
        { id: 'rift_canyon', label: 'Rift Canyon' },
        { id: 'sea_dust', label: 'Sea of Dust' }
      ];
    }
    for (const region of regions) {
      regionsSelect.append(`<option value="${region.id}">${region.label}</option>`);
    }
  }
  
  async _render(force = false, options = {}) {
    await super._render(force, options);
    if (this.element) {
      this.element.find('.encounter-type-select option').each(function() {
        const value = $(this).val();
        switch(value) {
          case 'regional': $(this).text('Regional (Greyhawk)'); break;
          case 'outdoor': $(this).text('Outdoor'); break;
          case 'dungeon': $(this).text('Dungeon'); break;
          case 'underwater': $(this).text('Underwater'); break;
          case 'airborne': $(this).text('Airborne'); break;
          case 'astral': $(this).text('Astral Plane'); break;
          case 'ethereal': $(this).text('Ethereal Plane'); break;
        }
      });
      this.element.find('.terrain-select option').each(function() {
        const value = $(this).val();
        switch(value) {
          case 'plain': $(this).text('Plain'); break;
          case 'scrub': $(this).text('Scrub'); break;
          case 'forest': $(this).text('Forest'); break;
          case 'desert': $(this).text('Desert'); break;
          case 'hills': $(this).text('Hills'); break;
          case 'mountains': $(this).text('Mountains'); break;
          case 'marsh': $(this).text('Marsh'); break;
        }
      });
      this.element.find('.population-select option').each(function() {
        const value = $(this).val();
        switch(value) {
          case 'dense': $(this).text('Dense'); break;
          case 'moderate': $(this).text('Moderate'); break;
          case 'uninhabited': $(this).text('Uninhabited/Wilderness'); break;
        }
      });
      this.element.find('.time-of-day-select option').each(function() {
        const value = $(this).val();
        switch(value) {
          case 'morning': $(this).text('Morning'); break;
          case 'noon': $(this).text('Noon'); break;
          case 'evening': $(this).text('Evening'); break;
          case 'night': $(this).text('Night'); break;
          case 'midnight': $(this).text('Midnight'); break;
          case 'predawn': $(this).text('Pre-dawn'); break;
        }
      });
      const encounterTypeSelect = this.element.find('.encounter-type-select');
      if (!encounterTypeSelect.val()) {
        encounterTypeSelect.val('outdoor');
        this._updateFormForEncounterType('outdoor', this.element);
      }
    }
  }
  
  async _rollEncounter(html) {
    try {
      const encounterType = html.find('.encounter-type-select').val() || 'outdoor';
      let options = { encounterType: encounterType };
      switch (encounterType) {
        case 'regional': {
          const regionType = html.find('.region-type-select').val() || 'political';
          const specificRegion = html.find('.region-select').val() || 'greyhawk';
          options = { ...options, regionType: regionType.split('_')[0], specificRegion: specificRegion };
          break;
        }
        case 'outdoor': {
          const terrain = html.find('.terrain-select').val() || 'plain';
          const population = html.find('.population-select').val() || 'moderate';
          let timeOfDay = 'noon';
          if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
            const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
            if (timeInfo && timeInfo.timeOfDay) timeOfDay = timeInfo.timeOfDay;
          } else {
            timeOfDay = html.find('.time-of-day-select').val() || 'noon';
          }
          options = { ...options, terrain: terrain, population: population, timeOfDay: timeOfDay };
          break;
        }
        case 'dungeon': {
          const dungeonLevel = parseInt(html.find('.dungeon-level-input').val()) || 1;
          options = { ...options, dungeonLevel: dungeonLevel };
          break;
        }
        case 'underwater': {
          const waterType = html.find('.water-type-select').val() || 'fresh';
          const depth = html.find('.depth-select').val() || 'shallow';
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
    const terrain = html.find('.terrain-select').val();
    if (!terrain) {
      ui.notifications.warn("Please select a terrain type first");
      return;
    }
    const result = await GreyhawkEncounters.checkIfLost(terrain);
    const chatData = {
      user: game.user.id,
      speaker: ChatMessage.getSpeaker(),
      content: `
        <div class="greyhawk-result lost-check">
          <h3>Lost Check</h3>
          <p><strong>Terrain:</strong> ${terrain}</p>
          <p><strong>Result:</strong> ${result.result}</p>
          ${result.result === "Lost" ? `<p><strong>Direction:</strong> ${result.direction}</p>` : ''}
        </div>
      `
    };
    ChatMessage.create(chatData);
  }
}

// Load the Handlebars template (ensure the template file exists)
Hooks.once('init', () => {
  loadTemplates(['modules/greyhawk-encounters/templates/encounter-roller.hbs']);
});

// Export the module class for external access
globalThis.GreyhawkEncounters = GreyhawkEncounters;
