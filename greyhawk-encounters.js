// greyhawk-encounters.js
// A Foundry VTT v12 module for Greyhawk random encounter tables with Simple Calendar integration

Hooks.once('init', async function() {
  console.log('Greyhawk Encounters | Initializing module');
});

Hooks.once('ready', async function() {
  console.log('Greyhawk Encounters | Module ready');
  
  // Register settings
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
  
  // Check if Simple Calendar is installed
  if (game.modules.get('foundryvtt-simple-calendar')?.active) {
    console.log('Greyhawk Encounters | Simple Calendar detected');
  } else {
    console.log('Greyhawk Encounters | Simple Calendar not detected');
  }
  
  // Hook into Simple Calendar's time change events
  // Add this code near the top of your greyhawk-encounters.js file
// after the other Hooks.on statements, but before the class definitions

// Fix the Simple Calendar hook to use the correct event name and API
Hooks.on('simple-calendar.dateChanged', (data) => {
  if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
    console.log('Greyhawk Encounters | Calendar date changed:', data);
    
    // Automatically roll for encounters if enabled
    const autoRollSetting = game.settings.get('greyhawk-encounters', 'enableAutoCheck');
    
    if (autoRollSetting) {
      // Only roll during the day (don't roll for every clock tick)
      // Check if the current date has changed, not just the time
      if (data.dateChanged && !data.timeChanged) {
        console.log('Greyhawk Encounters | Auto-rolling encounter check for new day');
        
        // Get the current terrain and population density settings
        // Default to "plain" and "uninhabited" if not set
        const terrain = game.settings.get('greyhawk-encounters', 'defaultTerrain') || 'plain';
        const population = game.settings.get('greyhawk-encounters', 'defaultPopulation') || 'uninhabited';
        
        // Get time information
        const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
        
        // Roll an outdoor encounter
        GreyhawkEncounters.rollOutdoorEncounter(terrain, population, timeInfo?.timeOfDay, {
          season: timeInfo?.season,
          autoRolled: true  // Flag to indicate this was an automatic roll
        }).then(result => {
          // Display the result in chat if there's an actual encounter
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

// Add these new settings to your module
Hooks.once('ready', async function() {
  // Add these lines after your other settings registrations
  
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
});

// Main module class
class GreyhawkEncounters {
  
  static ID = 'greyhawk-encounters';
  
  /**
   * Get the current time information from Simple Calendar if available
   * @returns {Object} Time information or null if Simple Calendar is not available
   */
  static getCurrentTimeInfo() {
    if (!game.modules.get('simple-calendar')?.active) {
      return null;
    }
    
    // Get Simple Calendar API
    const sc = SimpleCalendar.api;
    if (!sc) return null;
    
    // Get current date/time info - using the correct API call
    // The error was trying to use sc.getCurrentDate() which doesn't exist
    const currentDate = sc.getCurrentDateTime();
    
    if (!currentDate) return null;
    
    // Determine time of day (morning, noon, evening, night, midnight, predawn)
    let timeOfDay;
    const hour = currentDate.hour || 0;
    
    if (hour >= 5 && hour < 9) timeOfDay = 'morning';
    else if (hour >= 9 && hour < 15) timeOfDay = 'noon';
    else if (hour >= 15 && hour < 19) timeOfDay = 'evening';
    else if (hour >= 19 && hour < 22) timeOfDay = 'night';
    else if (hour >= 22 || hour < 2) timeOfDay = 'midnight';
    else timeOfDay = 'predawn';
    
    // Determine season based on month
    let season;
    const month = currentDate.month || 0;
    const totalMonths = sc.getAllMonths().length;
    
    // Adjust this logic based on your world's calendar
    if (totalMonths === 12) {
      // Standard Earth-like calendar
      if (month >= 2 && month <= 4) season = 'spring';
      else if (month >= 5 && month <= 7) season = 'summer';
      else if (month >= 8 && month <= 10) season = 'autumn';
      else season = 'winter';
    } else {
      // Custom calendar - make a proportional guess
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
      isDay: (hour >= 6 && hour < 19) // Rough day/night determination
    };
  }
  
  /**
   * Get climate based on season and region
   * @param {string} region - Region name
   * @param {string} season - Season (spring, summer, autumn, winter)
   * @returns {string} - Climate type
   */
  static getClimateForSeasonAndRegion(region, season) {
    // Climate mapping based on Greyhawk regions and seasons
    const climateMap = {
      // Northern regions
      'frost_barbarians': {
        spring: 'subarctic',
        summer: 'subarctic',
        autumn: 'subarctic',
        winter: 'arctic'
      },
      'ice_barbarians': {
        spring: 'subarctic',
        summer: 'subarctic',
        autumn: 'subarctic',
        winter: 'arctic'
      },
      'snow_barbarians': {
        spring: 'subarctic',
        summer: 'subarctic',
        autumn: 'subarctic',
        winter: 'arctic'
      },
      'blackmoor': {
        spring: 'subarctic',
        summer: 'subarctic',
        autumn: 'subarctic',
        winter: 'arctic'
      },
      // Temperate regions
      'furyondy': {
        spring: 'temperate',
        summer: 'temperate',
        autumn: 'temperate',
        winter: 'subarctic'
      },
      'greyhawk': {
        spring: 'temperate',
        summer: 'temperate',
        autumn: 'temperate',
        winter: 'temperate'
      },
      'nyrond': {
        spring: 'temperate',
        summer: 'temperate',
        autumn: 'temperate',
        winter: 'subarctic'
      },
      // Southern regions
      'sea_princes': {
        spring: 'subtropical',
        summer: 'subtropical',
        autumn: 'subtropical',
        winter: 'temperate'
      },
      'hepmonaland': {
        spring: 'tropical',
        summer: 'tropical',
        autumn: 'tropical',
        winter: 'subtropical'
      },
      'amedio_jungle': {
        spring: 'tropical',
        summer: 'tropical',
        autumn: 'tropical',
        winter: 'tropical'
      },
      // Default for other regions
      'default': {
        spring: 'temperate',
        summer: 'temperate',
        autumn: 'temperate',
        winter: 'temperate'
      }
    };
    
    // Get climate map for region or use default
    const regionClimate = climateMap[region] || climateMap['default'];
    return regionClimate[season];
  }
  
  /**
   * Roll an encounter with time-aware features
   * @param {Object} options - Options for the encounter
   * @returns {Object} Encounter result
   */
  static async rollTimeAwareEncounter(options = {}) {
    // Get current time info from Simple Calendar
    const timeInfo = this.getCurrentTimeInfo();
    
    // If Simple Calendar not available or not enabled, use provided options
    if (!timeInfo || !game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
      return this.rollEncounter(options);
    }
    
    // Override options with time-aware settings
    const timeAwareOptions = {
      ...options,
      timeOfDay: options.timeOfDay || timeInfo.timeOfDay,
      isDay: options.isDay ?? timeInfo.isDay,
      season: options.season || timeInfo.season
    };
    
    // If region is provided, determine climate based on season and region
    if (timeAwareOptions.regionType === 'political' && timeAwareOptions.specificRegion) {
      const climate = this.getClimateForSeasonAndRegion(
        timeAwareOptions.specificRegion, 
        timeInfo.season
      );
      timeAwareOptions.climate = climate;
    }
    
    // Apply seasonal effects to encounter chances
    if (timeAwareOptions.encounterType === 'outdoor') {
      // Modify encounter chances based on season
      switch (timeInfo.season) {
        case 'winter':
          // Fewer creatures active in winter
          timeAwareOptions.encounterModifier = 0.75; // 25% less chance
          break;
        case 'summer':
          // More creatures active in summer
          timeAwareOptions.encounterModifier = 1.25; // 25% more chance
          break;
        case 'spring':
        case 'autumn':
          // Normal chances in spring/autumn
          timeAwareOptions.encounterModifier = 1.0;
          break;
      }
    }
    
    // Apply time of day effects
    if (timeAwareOptions.encounterType === 'outdoor' || timeAwareOptions.encounterType === 'regional') {
      // Some creatures are more active at night
      if (!timeInfo.isDay) {
        timeAwareOptions.nightActive = true;
      }
    }
    
    return this.rollEncounter(timeAwareOptions);
  }
  
  /**
   * Main encounter rolling method
   * @param {Object} options - Options for the encounter
   * @returns {Object} Encounter result
   */
  static async rollEncounter(options = {}) {
    // Default to regional encounter if not specified
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
  
  /**
   * Roll a regional encounter (Greyhawk-specific)
   * @param {string} regionType - Type of region (political, geographical, etc.)
   * @param {string} specificRegion - Specific region name
   * @param {Object} options - Additional options
   * @returns {object} - Encounter result
   */
  static async rollRegionalEncounter(regionType, specificRegion, options = {}) {
    const tables = this.getRegionalTables();
    
    // Find the appropriate table
    let table = null;
    
    if (regionType === 'political') {
      table = tables.political[specificRegion];
    } else if (regionType === 'geographical') {
      // Handle geographical regions
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
    
    // Apply any time-related modifiers to the table
    let modifiedTable = [...table];
    
    // If it's night, adjust encounter chances for nocturnal creatures
    if (options.nightActive) {
      // Example: Increase chance of undead, decrease chance of humans
      modifiedTable = modifiedTable.map(entry => {
        const result = entry.result.toLowerCase();
        if (result.includes('undead') || result.includes('ghoul') || 
            result.includes('wight') || result.includes('wraith')) {
          // Increase min/max range for undead
          return { 
            ...entry, 
            min: Math.max(1, entry.min - 2),
            max: Math.min(100, entry.max + 3)
          };
        } else if (result.includes('men,') && !result.includes('raiders')) {
          // Decrease range for human encounters (except raiders)
          return {
            ...entry,
            min: entry.min,
            max: Math.max(entry.min, entry.max - 2)
          };
        }
        return entry;
      });
      
      // Normalize the ranges after modification
      modifiedTable = this.normalizeTableRanges(modifiedTable);
    }
    
    // Roll on the table
    const roll = new Roll('1d20');
    await roll.evaluate();
    const result = this.getResultFromTable(modifiedTable, roll.total);
    
    // Return the result with time information
    return {
      roll: roll.total,
      encounter: result,
      timeInfo: this.getCurrentTimeInfo(),
      nightActive: options.nightActive || false
    };
  }
  
  /**
   * Roll an outdoor encounter with time consideration
   * @param {string} terrain - Terrain type (plain, forest, etc.)
   * @param {string} population - Population density (dense, moderate, uninhabited)
   * @param {string} timeOfDay - Time of day (morning, noon, evening, night, midnight, predawn)
   * @param {Object} options - Additional options
   * @returns {object} - Encounter result
   */
  static async rollOutdoorEncounter(terrain, population, timeOfDay, options = {}) {
    // Get tables directly from wherever they're stored, without using this
    const outdoorTables = GreyhawkEncounters.outdoorEncounterTables || game.greyhawk.outdoorEncounterTables;
    const tables = outdoorTables[terrain]?.[population];
    
    // If not specified, get time of day from Simple Calendar
    if (!timeOfDay && game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
      const timeInfo = this.getCurrentTimeInfo();
      if (timeInfo) {
        timeOfDay = timeInfo.timeOfDay;
      }
    }
    
    // First check if an encounter occurs based on population density
    let encounterChance;
    switch (population) {
      case 'dense':
        encounterChance = 20; // 1 in 20
        break;
      case 'moderate':
        encounterChance = 12; // 1 in 12
        break;
      case 'uninhabited':
        encounterChance = 10; // 1 in 10
        break;
      default:
        encounterChance = 20;
    }
    
    // Apply seasonal modifier if provided
    if (options.encounterModifier) {
      encounterChance = Math.round(encounterChance / options.encounterModifier);
    }
    
    // Check if time of day requires encounter check for this terrain
    const checkMatrix = {
      plain: { morning: true, noon: false, evening: true, night: false, midnight: true, predawn: false },
      scrub: { morning: true, noon: false, evening: true, night: true, midnight: false, predawn: true },
      forest: { morning: true, noon: true, evening: true, night: true, midnight: true, predawn: true },
      desert: { morning: true, noon: false, evening: false, night: true, midnight: false, predawn: true },
      hills: { morning: false, noon: true, evening: false, night: true, midnight: false, predawn: true },
      mountains: { morning: true, noon: false, evening: false, night: true, midnight: false, predawn: false },
      marsh: { morning: true, noon: true, evening: true, night: true, midnight: true, predawn: true }
    };
    
    // Skip if no check is needed at this time
    if (!checkMatrix[terrain][timeOfDay]) {
      return { 
        result: "No encounter check needed at this time of day",
        terrain,
        population,
        timeOfDay
      };
    }
    
    // Roll for encounter
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
    
    // An encounter occurs! Determine what is encountered based on terrain
    const encounterTables = GreyhawkEncounters.getOutdoorEncounterTables();
    const table = encounterTables[terrain];
    
    if (!table) {
      ui.notifications.error(`Encounter table not found for terrain: ${terrain}`);
      return null;
    }
    
    // Modify table based on time of day
    let modifiedTable = [...table];
    
    // Apply time of day modifications
    if (timeOfDay === 'night' || timeOfDay === 'midnight' || timeOfDay === 'predawn') {
      // Adjust for nocturnal creatures
      modifiedTable = GreyhawkEncounters.adjustTableForNightEncounters(modifiedTable);
    }
    
    // Apply seasonal modifications
    if (options.season) {
      modifiedTable = GreyhawkEncounters.adjustTableForSeason(modifiedTable, options.season);
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
    
    // If in inhabited area, check if this is a patrol
    if (population !== 'uninhabited' && population !== 'wilderness') {
      /* const patrolRoll = await new Roll('1d20').evaluate({async: true}); */
      const patrolRoll = new Roll('1d20');
        await patrolRoll.evaluate();

      if (patrolRoll.total <= 5) { // 5 in 20 chance
        return GreyhawkEncounters.rollPatrolEncounter(options);
      }
    }
    
    // Handle special subtables if needed
    let specialResult = null;
    if (encounterType.subtable) {
      const subtableRoll = await new Roll('1d100').evaluate({async: true});
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
    
    // Calculate number of creatures
    let numberRange = encounterType.numbers;
    let minNum, maxNum;
    
    if (numberRange && numberRange.includes('-')) {
      [minNum, maxNum] = numberRange.split('-').map(n => parseInt(n));
      /* const numberRoll = await new Roll(`1d${maxNum - minNum + 1} + ${minNum - 1}`).evaluate({async: true}); */
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
        timeInfo: GreyhawkEncounters.getCurrentTimeInfo()
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
        timeInfo: GreyhawkEncounters.getCurrentTimeInfo()
      };
    }
  }
  
  /**
   * Normalize table ranges to ensure they cover 1-100 without gaps
   * @param {Array} table - Table entries with min/max ranges
   * @returns {Array} - Normalized table
   */
  static normalizeTableRanges(table) {
    // Sort table by min value
    const sortedTable = [...table].sort((a, b) => a.min - b.min);
    
    // Ensure coverage from 1-100
    for (let i = 0; i < sortedTable.length; i++) {
      // Set first entry to start at 1
      if (i === 0) {
        sortedTable[i].min = 1;
      }
      
      // Connect current entry's min to previous entry's max + 1
      if (i > 0) {
        sortedTable[i].min = sortedTable[i-1].max + 1;
      }
      
      // Last entry should end at 100
      if (i === sortedTable.length - 1) {
        sortedTable[i].max = 100;
      }
    }
    
    return sortedTable;
  }
  
  /**
   * Adjust encounter table for night encounters
   * @param {Array} table - Original encounter table
   * @returns {Array} - Modified table for night encounters
   */
  static adjustTableForNightEncounters(table) {
    // Clone the table
    let nightTable = [...table];
    
    // Boost nocturnal creatures, reduce diurnal ones
    nightTable = nightTable.map(entry => {
      const creature = entry.creature.toLowerCase();
      
      // Nocturnal creatures (boost)
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
      
      // Diurnal creatures (reduce)
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
          min: entry.min,
          max: Math.max(entry.min, entry.max - 3)
        };
      }
      
      return entry;
    });
    
    // Normalize the ranges
    return GreyhawkEncounters.normalizeTableRanges(nightTable);
  }
  
  /**
   * Adjust encounter table based on season
   * @param {Array} table - Original encounter table
   * @param {string} season - Season (spring, summer, autumn, winter)
   * @returns {Array} - Modified table for the season
   */
  static adjustTableForSeason(table, season) {
    // Clone the table
    let seasonTable = [...table];
    
    switch (season) {
      case 'winter':
        // In winter, fewer creatures are active
        seasonTable = seasonTable.map(entry => {
          const creature = entry.creature.toLowerCase();
          
          // Cold-adapted creatures (boost)
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
          
          // Warm-weather creatures (reduce)
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
              min: entry.min,
              max: Math.max(entry.min, entry.max - 4)
            };
          }
          
          return entry;
        });
        break;
        
      case 'summer':
        // In summer, more creatures are active
        seasonTable = seasonTable.map(entry => {
          const creature = entry.creature.toLowerCase();
          
          // Warm-weather creatures (boost)
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
          
          // Cold-adapted creatures (reduce)
          if (
            creature.includes('frost') ||
            creature.includes('winter') ||
            creature.includes('ice') ||
            creature.includes('yeti')
          ) {
            return {
              ...entry,
              min: entry.min,
              max: Math.max(entry.min, entry.max - 3)
            };
          }
          
          return entry;
        });
        break;
        
      // Spring and autumn are considered "normal" seasons
      case 'spring':
      case 'autumn':
      default:
        // Minor adjustments for spring/autumn
        break;
    }
    
    // Normalize the ranges
    return GreyhawkEncounters.normalizeTableRanges(seasonTable);
  }
  
  // Rest of the class methods go here (getRegionalTables, rollDungeonEncounter, etc.)
  
  /**
   * Get regional tables (Greyhawk-specific)
   * @returns {object} - Regional tables
   */
  static getRegionalTables() {
    return {
      political: GreyhawkEncounters.getPoliticalTables(),
      geographical: GreyhawkEncounters.getGeographicalTables(),
      special: GreyhawkEncounters.getSpecialTables()
    };
  }
  
  // The rest of the API methods would follow...
}

// Replace your existing sidebar button code with this improved version
// Find the code that adds the button to the chat sidebar and replace it

// Replace your entire renderSidebarTab hook with this version
// This creates a standalone button at the bottom of the chat sidebar

Hooks.on('renderSidebarTab', async (app, html) => {
  if (app.options.id === 'chat') {
    // Create a more distinct button at the bottom of the chat log
    const greyhawkButton = $(`
      <div class="greyhawk-button-container" style="
        margin: 10px 6px; 
        text-align: center;
        position: relative;
        z-index: 30;
      ">
        <button type="button" class="greyhawk-encounters-button" style="
          width: 100%;
          background: #4b5563;
          color: white;
          border: 1px solid #374151;
          border-radius: 3px;
          padding: 5px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        ">
          <i class="fas fa-mountain" style="margin-right: 5px;"></i>
          <span>Greyhawk Encounters</span>
        </button>
      </div>
    `);
    
    // Add click handler
    greyhawkButton.find('button').click(ev => {
      new GreyhawkEncounterRoller().render(true);
    });
    
    // First attempt: Add at the bottom of the sidebar
    html.append(greyhawkButton);
    
    // Apply improved styling for chat results
    const styleElement = $(`
      <style>
        /* Improved chat output styling */
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
        
        /* Make sure our button stays on top */
        .greyhawk-button-container {
          position: relative;
          z-index: 30;
        }
        
        .greyhawk-encounters-button:hover {
          background: #374151;
          box-shadow: 0 1px 5px rgba(0,0,0,0.3);
        }
      </style>
    `);
    
    // Append the custom styles to the document head
    $('head').append(styleElement);
    
    // Alternative placement option - add after the chat log
    // Uncomment the next line and comment out the html.append line above if needed
    // html.find('#chat-log').after(greyhawkButton);
  }
});

// Dialog for rolling encounters
class GreyhawkEncounterRoller extends Application {
  static get defaultOptions() {
    // Use foundry.utils.mergeObject instead of just mergeObject for Foundry v12 compatibility
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
  // Get time info from Simple Calendar if available
  const useSimpleCalendar = game.settings.get('greyhawk-encounters', 'useSimpleCalendar');
  let timeInfo = null;
  
  try {
    if (useSimpleCalendar) {
      timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
    }
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
  
  // Modified version of the activateListeners method
// Replace this in your greyhawk-encounters.js file

activateListeners(html) {
  super.activateListeners(html);
  
  const useSimpleCalendar = game.settings.get('greyhawk-encounters', 'useSimpleCalendar');
  
  // Show/hide Simple Calendar info section based on setting
  html.find('.simple-calendar-info').toggle(useSimpleCalendar);
  
  // Encounter type selection changes available options
  html.find('.encounter-type-select').change(ev => {
    const selectedType = ev.currentTarget.value;
    this._updateFormForEncounterType(selectedType, html);
  });
  
  // Region type selection changes available regions
  html.find('.region-type-select').change(ev => {
    const selectedType = ev.currentTarget.value;
    this._updateRegionList(selectedType, html);
  });
  
  // Toggle Simple Calendar integration
  html.find('.toggle-calendar').change(ev => {
    const checked = ev.currentTarget.checked;
    game.settings.set('greyhawk-encounters', 'useSimpleCalendar', checked);
    html.find('.simple-calendar-info').toggle(checked);
    html.find('.time-of-day-group').toggle(!checked);
  });
  
  // Roll encounter button
  html.find('.roll-encounter-button').click(ev => {
    this._rollEncounter(html);
  });
  
  // Get lost check button
  html.find('.check-lost-button').click(ev => {
    this._checkIfLost(html);
  });
  
  // Set initial state - show the outdoor options by default since that seems to be what's showing
  this._updateFormForEncounterType('outdoor', html);
}
  
  // 1. First, fix the _updateFormForEncounterType method:
_updateFormForEncounterType(encounterType, html) {
  console.log(`Updating form for encounter type: ${encounterType}`);
  
  // Hide all specific option groups first
  html.find('.region-options').hide();
  html.find('.outdoor-options').hide();
  html.find('.dungeon-options').hide();
  html.find('.underwater-options').hide();
  html.find('.planar-options').hide();
  
  // Show appropriate options based on encounter type
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
    
    // Populate with appropriate regions based on type
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
    
    // Add options
    for (const region of regions) {
      regionsSelect.append(`<option value="${region.id}">${region.label}</option>`);
    }
  }

// 3. Most importantly, completely override the render method to ensure dropdowns are initialized properly:
async _render(force = false, options = {}) {
  // Call the parent class render method
  await super._render(force, options);
  
  // After rendering, make sure all dropdowns have proper values
  if (GreyhawkEncounters.element) {
    // Manually set the option text for each dropdown
    GreyhawkEncounters.element.find('.encounter-type-select option').each(function() {
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
    
    GreyhawkEncounters.element.find('.terrain-select option').each(function() {
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
    
    GreyhawkEncounters.element.find('.population-select option').each(function() {
      const value = $(this).val();
      switch(value) {
        case 'dense': $(this).text('Dense'); break;
        case 'moderate': $(this).text('Moderate'); break;
        case 'uninhabited': $(this).text('Uninhabited/Wilderness'); break;
      }
    });
    
    GreyhawkEncounters.element.find('.time-of-day-select option').each(function() {
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
    
    // Set a default encounter type
    const encounterTypeSelect = GreyhawkEncounters.element.find('.encounter-type-select');
    if (encounterTypeSelect.val() === undefined || encounterTypeSelect.val() === '') {
      encounterTypeSelect.val('outdoor');
      GreyhawkEncounters._updateFormForEncounterType('outdoor', GreyhawkEncounters.element);
    }
  }
}
 
async _rollEncounter(html) {
  try {
    const encounterType = html.find('.encounter-type-select').val() || 'outdoor';
    
    // Build options based on encounter type
    let options = {
      encounterType: encounterType
    };
    
    // Add specific options based on encounter type
    switch (encounterType) {
      case 'regional':
        const regionType = html.find('.region-type-select').val() || 'political';
        const specificRegion = html.find('.region-select').val() || 'greyhawk';
        
        options = {
          ...options,
          regionType: regionType.split('_')[0], // Extract base type (political, geographical)
          specificRegion: specificRegion
        };
        break;
        
      case 'outdoor':
        const terrain = html.find('.terrain-select').val() || 'plain';
        const population = html.find('.population-select').val() || 'moderate';
        
        // Get time of day from Simple Calendar or form
        let timeOfDay = 'noon';
        if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
          const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
          if (timeInfo && timeInfo.timeOfDay) {
            timeOfDay = timeInfo.timeOfDay;
          }
        } else {
          timeOfDay = html.find('.time-of-day-select').val() || 'noon';
        }
        
        options = {
          ...options,
          terrain: terrain,
          population: population,
          timeOfDay: timeOfDay
        };
        break;
        
      case 'dungeon':
        const dungeonLevel = parseInt(html.find('.dungeon-level-input').val()) || 1;
        
        options = {
          ...options,
          dungeonLevel: dungeonLevel
        };
        break;
        
      case 'underwater':
        const waterType = html.find('.water-type-select').val() || 'fresh';
        const depth = html.find('.depth-select').val() || 'shallow';
        
        options = {
          ...options,
          waterType: waterType,
          depth: depth
        };
        break;
    }
    
    console.log("Rolling encounter with options:", options);
    
    // Create a mock result if GreyhawkEncounters.rollEncounter is not fully implemented
    let result = null;
    
    // Use time-aware encounter if Simple Calendar is enabled
    if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
      try {
        result = await GreyhawkEncounters.rollTimeAwareEncounter(options);
      } catch (error) {
        console.error("Error rolling time-aware encounter:", error);
        // Create a simple fallback result
        result = GreyhawkEncounters._createMockResult(options);
      }
    } else {
      try {
        result = await GreyhawkEncounters.rollEncounter(options);
      } catch (error) {
        console.error("Error rolling encounter:", error);
        // Create a simple fallback result
        result = GreyhawkEncounters._createMockResult(options);
      }
    }
    
    if (result) {
      // Format the result for chat message
      GreyhawkEncounters._displayEncounterResult(result, options);
    } else {
      ui.notifications.error("Failed to generate encounter result.");
    }
  } catch (error) {
    console.error("Error in _rollEncounter:", error);
    ui.notifications.error("Error generating encounter.");
  }
}

/**
 * Get outdoor encounter tables for different terrains
 * @returns {object} - Outdoor encounter tables
 */
static getOutdoorEncounterTables() {
  // Return a basic structure of encounter tables
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

// Helper method to create a mock result when the actual roll methods aren't working
_createMockResult(options) {
  const timeInfo = this.getCurrentTimeInfo();
  
  switch (options.encounterType) {
    case 'outdoor':
      // If it's night, we have no check needed
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
      
      // Otherwise roll to see if there's an encounter
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
      
      // If we got a 1, then it's an encounter
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
      
    // Add cases for other encounter types as needed...
    
    default:
      return {
        result: "Not implemented",
        encounterType: options.encounterType,
        timeInfo: timeInfo
      };
  }
}

// Helper to get a random encounter based on terrain
_getRandomEncounterByTerrain(terrain) {
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
  const randomIndex = Math.floor(Math.random() * possibleEncounters.length);
  return possibleEncounters[randomIndex];
}


  async _checkIfLost(html) {
    const terrain = html.find('.terrain-select').val();
    
    if (!terrain) {
      ui.notifications.warn("Please select a terrain type first");
      return;
    }
    
    const result = await this.checkIfLost(terrain);
    
    // Format result for chat
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
  
  _displayEncounterResult(result, options) {
    // Ensure values are defined
    result = result || {};
    options = options || {};
    
    let content = `
      <div class="greyhawk-result">
        <h3>Greyhawk Encounter</h3>
    `;
    
    // Add encounter type specific details
    switch (options.encounterType) {
      case 'regional':
        const regionName = options.specificRegion ? 
          options.specificRegion.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 
          'Unknown Region';
        
        content += `
          <p><strong>Region:</strong> ${regionName}</p>
          <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
          <p><strong>Encounter:</strong> ${result.encounter || 'None'}</p>
        `;
        break;
        
      case 'outdoor':
        if (result.result === "No encounter" || result.result === "No encounter check needed at this time of day") {
          content += `
            <p><strong>Terrain:</strong> ${options.terrain || 'Unknown'}</p>
            <p><strong>Population:</strong> ${options.population || 'Unknown'}</p>
            <p><strong>Time of Day:</strong> ${options.timeOfDay || 'Unknown'}</p>
            <p><strong>Result:</strong> ${result.result || 'Unknown'}</p>
          `;
        } else if (result.result === "Patrol Encounter") {
          content += `
            <p><strong>Terrain:</strong> ${options.terrain || 'Unknown'}</p>
            <p><strong>Population:</strong> ${options.population || 'Unknown'}</p>
            <p><strong>Result:</strong> Patrol Encounter</p>
            <p><strong>Patrol Type:</strong> ${result.patrolType || 'Standard'}</p>
          `;
          
          // Only show leader info if available
          if (result.leader) {
            content += `<p><strong>Leader:</strong> Level ${result.leader.level || '3'} ${result.leader.class || 'Fighter'}</p>`;
          }
          
          // Only show lieutenant info if available
          if (result.lieutenant) {
            content += `<p><strong>Lieutenant:</strong> Level ${result.lieutenant.level || '2'} ${result.lieutenant.class || 'Fighter'}</p>`;
          }
          
          // Only show sergeant info if available
          if (result.sergeant) {
            content += `<p><strong>Sergeant:</strong> Level ${result.sergeant.level || '1'} ${result.sergeant.class || 'Fighter'}</p>`;
          }
          
          content += `<p><strong>Troops:</strong> ${result.troops || '6'} Soldiers</p>`;
          
          // Only show spellcaster info if available
          if (result.spellcaster) {
            content += `<p><strong>Spellcaster:</strong> Level ${result.spellcaster.level || '1'} ${result.spellcaster.class || 'Magic-User'}</p>`;
          }
        } else if (result.result === "Encounter") {
          content += `
            <p><strong>Terrain:</strong> ${options.terrain || 'Unknown'}</p>
            <p><strong>Population:</strong> ${options.population || 'Unknown'}</p>
            <p><strong>Time of Day:</strong> ${options.timeOfDay || 'Unknown'}</p>
            <p><strong>Roll:</strong> ${result.typeRoll || 'N/A'}</p>
            <p><strong>Encounter:</strong> ${result.encounter || 'Unknown Creature'}</p>
            ${result.specialResult ? `<p><strong>Specific Type:</strong> ${result.specialResult}</p>` : ''}
            <p><strong>Number:</strong> ${result.number || '1'}</p>
            ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}
          `;
        } else {
          content += `
            <p><strong>Terrain:</strong> ${options.terrain || 'Unknown'}</p>
            <p><strong>Population:</strong> ${options.population || 'Unknown'}</p>
            <p><strong>Result:</strong> ${result.result || 'Unknown'}</p>
          `;
        }
        break;
        
      case 'dungeon':
        content += `
          <p><strong>Dungeon Level:</strong> ${options.dungeonLevel || '1'}</p>
          <p><strong>Monster Level:</strong> ${result.monsterLevel || 'Unknown'}</p>
          <p><strong>Roll:</strong> ${result.monsterRoll || 'N/A'}</p>
          <p><strong>Encounter:</strong> ${result.monster || 'Unknown'}</p>
          <p><strong>Number:</strong> ${result.adjustedNumber || result.numberRoll || '1'}</p>
          ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}
        `;
        break;
        
      case 'underwater':
        content += `
          <p><strong>Water Type:</strong> ${options.waterType || 'Unknown'}</p>
          <p><strong>Depth:</strong> ${options.depth || 'Unknown'}</p>
          <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
          <p><strong>Encounter:</strong> ${result.encounter || 'Unknown'}</p>
          ${result.specificType ? `<p><strong>Specific Type:</strong> ${result.specificType}</p>` : ''}
          ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}
        `;
        break;
        
      case 'airborne':
        content += `
          <p><strong>Region:</strong> ${options.region || 'Open Sky'}</p>
          <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
          <p><strong>Encounter:</strong> ${result.encounter || 'Unknown'}</p>
          <p><strong>Number:</strong> ${result.number || '1'}</p>
          ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}
        `;
        break;
        
      case 'astral':
      case 'ethereal':
        if (result.result === "Psychic Wind" || result.result === "Ether Cyclone") {
          content += `
            <p><strong>Plane:</strong> ${options.encounterType === 'astral' ? 'Astral' : 'Ethereal'}</p>
            <p><strong>Result:</strong> ${result.result}</p>
            <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
            <p><strong>Effect:</strong> ${result.effect || 'Unknown effect'}</p>
          `;
        } else {
          content += `
            <p><strong>Plane:</strong> ${options.encounterType === 'astral' ? 'Astral' : 'Ethereal'}</p>
            <p><strong>Roll:</strong> ${result.roll || 'N/A'}</p>
            <p><strong>Encounter:</strong> ${result.encounter || 'Unknown'}</p>
            ${result.specificType ? `<p><strong>Specific Type:</strong> ${result.specificType}</p>` : ''}
            <p><strong>Number:</strong> ${result.numbers || result.number || '1'}</p>
            ${result.notes ? `<p><strong>Notes:</strong> ${result.notes}</p>` : ''}
          `;
        }
        break;
        
      default:
        content += `
          <p><strong>Encounter Type:</strong> ${options.encounterType || 'Unknown'}</p>
          <p><strong>Result:</strong> ${result.result || 'No specific result'}</p>
        `;
    }
    
    // Add calendar information if available
    if (result.timeInfo) {
      content += `
        <hr>
        <div class="calendar-info">
          <h4>Calendar Information</h4>
      `;
      
      // Add date if available
      if (result.timeInfo.weekday || result.timeInfo.day || result.timeInfo.month || result.timeInfo.year) {
        content += `<p><strong>Date:</strong> `;
        if (result.timeInfo.weekday) content += `${result.timeInfo.weekday} `;
        if (result.timeInfo.day) content += `${result.timeInfo.day}`;
        if (result.timeInfo.month) content += `, Month ${result.timeInfo.month}`;
        if (result.timeInfo.year) content += `, Year ${result.timeInfo.year}`;
        content += `</p>`;
      }
      
      // Add time if available
      if (result.timeInfo.hour !== undefined) {
        const minutes = result.timeInfo.minute !== undefined ? 
          result.timeInfo.minute.toString().padStart(2, '0') : '00';
        content += `<p><strong>Time:</strong> ${result.timeInfo.hour}:${minutes}</p>`;
      }
      
      // Add season if available
      if (result.timeInfo.season) {
        content += `<p><strong>Season:</strong> ${result.timeInfo.season}</p>`;
      }
      
      // Add time of day if available
      if (result.timeInfo.timeOfDay) {
        content += `<p><strong>Time of Day:</strong> ${result.timeInfo.timeOfDay}</p>`;
      }
      
      content += `
        </div>
      `;
    }
    
    // Add seasonal effects notice if applicable
    if (options.encounterModifier) {
      let seasonalEffect = '';
      if (options.encounterModifier < 1) {
        seasonalEffect = 'Reduced encounter chance due to seasonal effects';
      } else if (options.encounterModifier > 1) {
        seasonalEffect = 'Increased encounter chance due to seasonal effects';
      }
      
      if (seasonalEffect) {
        content += `
          <div class="seasonal-effects">
            <p><em>${seasonalEffect}</em></p>
          </div>
        `;
      }
    }
    
    content += `</div>`;
    
    // Create chat message
    const chatData = {
      user: game.user.id,
      speaker: ChatMessage.getSpeaker(),
      content: content
    };
    
    ChatMessage.create(chatData);
  }
}

// Template for the encounter roller dialog
const encounterRollerTemplate = `
<form class="greyhawk-encounters-form">
  <div class="form-group">
    <label>Encounter Type:</label>
    <select name="encounterType" class="encounter-type-select">
      {{#each encounterTypes}}
      <option value="{{GreyhawkEncounters.id}}">{{GreyhawkEncounters.label}}</option>
      {{/each}}
    </select>
  </div>
  
  <div class="form-group">
    <label>
      <input type="checkbox" name="useSimpleCalendar" class="toggle-calendar" {{#if useSimpleCalendar}}checked{{/if}}>
      Use Simple Calendar for Time
    </label>
  </div>
  
  {{#if useSimpleCalendar}}
  <div class="form-group simple-calendar-info">
    <div class="card">
      <div class="card-header">Current Calendar Information</div>
      <div class="card-body">
        {{#if timeInfo}}
        <p><strong>Date:</strong> {{timeInfo.weekday}} {{timeInfo.day}}, Month {{timeInfo.month}}, Year {{timeInfo.year}}</p>
        <p><strong>Time:</strong> {{timeInfo.hour}}:{{timeInfo.minute}}</p>
        <p><strong>Season:</strong> {{timeInfo.season}}</p>
        <p><strong>Time of Day:</strong> {{timeInfo.timeOfDay}}</p>
        {{else}}
        <p>Simple Calendar data not available</p>
        {{/if}}
      </div>
    </div>
  </div>
  {{/if}}
  
  <!-- Regional encounter options -->
  <div class="form-group region-options" style="display: none;">
    <label>Region Type:</label>
    <select name="regionType" class="region-type-select">
      {{#each regionTypes}}
      <option value="{{GreyhawkEncounters.id}}">{{GreyhawkEncounters.label}}</option>
      {{/each}}
    </select>
  </div>
  
  <div class="form-group region-options" style="display: none;">
    <label>Region:</label>
    <select name="region" class="region-select">
      <option value="">Select a region type first</option>
    </select>
  </div>
  
  <!-- Outdoor encounter options -->
  <div class="form-group outdoor-options" style="display: none;">
    <label>Terrain:</label>
    <select name="terrain" class="terrain-select">
      {{#each terrainTypes}}
      <option value="{{GreyhawkEncounters.id}}">{{GreyhawkEncounters.label}}</option>
      {{/each}}
    </select>
  </div>
  
  <div class="form-group outdoor-options" style="display: none;">
    <label>Population Density:</label>
    <select name="population" class="population-select">
      {{#each populationTypes}}
      <option value="{{GreyhawkEncounters.id}}">{{GreyhawkEncounters.label}}</option>
      {{/each}}
    </select>
  </div>
  
  <div class="form-group outdoor-options time-of-day-group" style="display: none;">
    <label>Time of Day:</label>
    <select name="timeOfDay" class="time-of-day-select">
      {{#each timesOfDay}}
      <option value="{{GreyhawkEncounters.id}}">{{GreyhawkEncounters.label}}</option>
      {{/each}}
    </select>
  </div>
  
  <div class="form-group outdoor-options" style="display: none;">
    <button type="button" class="check-lost-button">
      <i class="fas fa-compass"></i> Check if Lost
    </button>
  </div>
  
  <!-- Dungeon encounter options -->
  <div class="form-group dungeon-options" style="display: none;">
    <label>Dungeon Level:</label>
    <input type="number" name="dungeonLevel" class="dungeon-level-input" value="1" min="1" max="20">
  </div>
  
  <!-- Underwater encounter options -->
  <div class="form-group underwater-options" style="display: none;">
    <label>Water Type:</label>
    <select name="waterType" class="water-type-select">
      <option value="fresh">Fresh Water</option>
      <option value="salt">Salt Water</option>
    </select>
  </div>
  
  <div class="form-group underwater-options" style="display: none;">
    <label>Depth:</label>
    <select name="depth" class="depth-select">
      <option value="shallow">Shallow</option>
      <option value="deep">Deep</option>
    </select>
  </div>
  
  <!-- Planar encounter options -->
  <div class="form-group planar-options" style="display: none;">
    <p>Rolling for planar encounters uses standard rules from DMG Appendix C.</p>
  </div>
  
  <div class="form-group">
    <button type="button" class="roll-encounter-button">
      <i class="fas fa-dice-d20"></i> Roll Encounter
    </button>
  </div>
</form>
`;

// Add the template to the module
Hooks.once('init', () => {
  loadTemplates({
    'modules/greyhawk-encounters/templates/encounter-roller.hbs': encounterRollerTemplate
  });
});

// Export for external use
globalThis.GreyhawkEncounters = GreyhawkEncounters;
