// Main module code for Greyhawk Encounters

// Main module class
export class GreyhawkEncounters {
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
  
  // Roll a patrol encounter
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
  
  // Get result from a table based on a roll
  static getResultFromTable(table, roll) {
    for (const entry of table) {
      if (roll >= entry.min && roll <= entry.max) {
        return entry.result || entry.creature;
      }
    }
    return "No result found";
  }
  
  // Display the encounter result in chat
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
      // Add other encounter type displays here
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
   * Roll a regional encounter specific to Greyhawk.
   */
  static _rollRegionalEncounter(options) {
    const region = options.specificRegion || 'greyhawk';
    const roll = Math.floor(Math.random() * 100) + 1;
    
    console.log(`Rolling regional encounter for ${region} with roll ${roll}`);
    
    // Determine which table to use based on region type
    let table = null;
    
    // Check in political regions
    table = GREYHAWK_REGIONAL_TABLES[region];
    
    // Check in geographical features if not found
    if (!table) {
      // Check if this is a forest
      const forestTables = ['adri_forest', 'grandwood_forest', 'amedio_jungle', 'axewood', 
                          'dreadwood', 'menowood', 'rieuwood', 'silverwood'];
      if (forestTables.includes(region)) {
        table = GREYHAWK_GEOGRAPHICAL_TABLES[region] || GREYHAWK_GEOGRAPHICAL_TABLES['adri_forest'];
      }
      
      // Check if this is a mountain range
      const mountainTables = ['barrier_peaks', 'crystalmist_mountains', 'jotens', 'clatspur_range', 'yatil_mountains'];
      if (mountainTables.includes(region)) {
        table = GREYHAWK_GEOGRAPHICAL_TABLES[region] || GREYHAWK_GEOGRAPHICAL_TABLES['barrier_peaks'];
      }
      
      // Similarly check for hills, water bodies, marshes, and wastelands
    }
    
    // If still not found, use Greyhawk as default
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
   * Roll an encounter taking time of day and calendar into account.
   */
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
  static async rollOutdoorEncounter(terrain, population, timeOfDay, options = {}) {
    // Check if this is a time we should be rolling encounters
    if (!this._shouldRollEncounterForTime(timeOfDay)) {
      return { result: "No encounter check needed at this time of day" };
    }
    
    // Determine base encounter chance
    let encounterChance = this._getBaseEncounterChance(terrain, population);
    
    // Apply modifiers
    if (options.encounterModifier) {
      encounterChance *= options.encounterModifier;
    }
    
    // Check if encounter occurs
    const roll = Math.random() * 100;
    if (roll > encounterChance) {
      return { result: "No encounter" };
    }
    
    // Determine if this is a patrol encounter
    const isPatrolled = population !== 'uninhabited';
    const patrolRoll = Math.random() * 100;
    
    if (isPatrolled && patrolRoll <= 25) { // 25% chance of patrol in patrolled areas
      return this.rollPatrolEncounter({ patrolType: population });
    }
    
    // Roll for standard outdoor encounter
    return this._rollDMGOutdoorEncounter(terrain, population, options);
  }
  
  // Helper to determine if encounters should be rolled at certain times
  static _shouldRollEncounterForTime(timeOfDay) {
    const lowActivityTimes = ['predawn', 'midnight'];
    return !lowActivityTimes.includes(timeOfDay);
  }
  
  // Helper to get base encounter chance based on terrain and population
  static _getBaseEncounterChance(terrain, population) {
    // Base chances by terrain type
    const terrainChances = {
      'plain': 15,
      'scrub': 20,
      'forest': 25,
      'desert': 15,
      'hills': 20,
      'mountains': 15,
      'marsh': 30
    };
    
    // Population modifiers
    const populationModifiers = {
      'uninhabited': 1.5,  // Increased chance in wilderness
      'moderate': 1.0,     // Standard chance
      'dense': 0.7         // Reduced chance in densely populated areas
    };
    
    const baseChance = terrainChances[terrain] || 20;
    const modifier = populationModifiers[population] || 1.0;
    
    return baseChance * modifier;
  }

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
    const levelMatrix = DMG_TABLES.DMG_DUNGEON_MONSTER_LEVEL_MATRIX[matrixLevel];
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
    const monsterTable = DMG_TABLES.DMG_MONSTER_LEVEL_TABLES[monsterLevel];
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
    
    for (const entry of DMG_TABLES.DMG_HUMAN_SUBTABLE) {
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
      
      for (const entry of DMG_TABLES.DMG_CHARACTER_SUBTABLE) {
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
      // Handle ranges like "1-4"
      if (pattern.includes('-')) {
        const [min, max] = pattern.split('-').map(n => parseInt(n));
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
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
