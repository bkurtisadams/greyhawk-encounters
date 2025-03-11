// Main module code for Greyhawk Encounters
// imports with correct relative paths
import { GREYHAWK_REGIONAL_TABLES } from '../data/greyhawk-regions.js';
import { GREYHAWK_GEOGRAPHICAL_TABLES } from '../data/greyhawk-geography.js';
import DMG_TABLES from '../data/dmg-monster-tables.js'; // This imports all the DMG tables
import SUBTABLES from '../data/subtables.js'; // Import the subtables if needed
import { rollPatrolEncounter, GREYHAWK_PATROL_TYPES } from '../data/greyhawk-patrols.js';
//import { rollOnOutdoorTable } from '../data/dmg-outdoor-tables.js';
//import TEMPERATE_TABLES from '../data/dmg-monster-tables.js';
import { rollOnTemperateTable } from '../data/dmg-monster-tables.js';
import { rollWaterborneEncounter } from '../data/dmg-waterborne-tables.js';
import { rollAirborneEncounter } from '../data/dmg-airborne-tables.js';
import { rollCityEncounter } from '../data/dmg-city-tables.js';
import { rollNumberFromPattern } from '../utils/utility.js';
import { rollPlanarEncounter } from '../data/dmg-planar-tables.js';

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
  static async rollPatrolEncounter(options = {}) {
    const patrolType = options.patrolType || "patrol_heavy";
    
    // Use our new patrol encounter generator
    const patrolInfo = rollPatrolEncounter(patrolType);
    
    // Format leader information
    const leaderLevel = Math.floor(Math.random() * 3) + 6; // 6-8
    const lieutenantLevel = Math.floor(Math.random() * 2) + 4; // 4-5
    const sergeantLevel = Math.floor(Math.random() * 2) + 2; // 2-3
    
    // Format special members - integrate with our new patrol generator
    let spellcaster = null;
    if (patrolInfo.specialMembers.length > 0) {
      const special = patrolInfo.specialMembers[0];
      if (special.type === 'C' || special.type === 'D') {
        const levelRange = special.level.split("-");
        const clericLevel = Math.floor(Math.random() * (parseInt(levelRange[1]) - parseInt(levelRange[0]) + 1)) + parseInt(levelRange[0]);
        spellcaster = {
          class: special.type === 'C' ? "Cleric" : "Druid",
          level: clericLevel
        };
      } else if (special.type === 'MU' || special.type === 'I') {
        const levelRange = special.level.split("-");
        const mageLevel = Math.floor(Math.random() * (parseInt(levelRange[1]) - parseInt(levelRange[0]) + 1)) + parseInt(levelRange[0]);
        spellcaster = {
          class: special.type === 'MU' ? "Magic-User" : "Illusionist",
          level: mageLevel
        };
      }
    }
    
    return {
      result: "Patrol Encounter",
      patrolType: patrolInfo.name,
      leader: { level: leaderLevel, class: "Fighter" },
      lieutenant: { level: lieutenantLevel, class: "Fighter" },
      sergeant: { level: sergeantLevel, class: "Fighter" },
      firstLevelFighters: Math.floor(Math.random() * 2) + 3, // 3-4
      troops: patrolInfo.totalTroops,
      spellcaster: spellcaster,
      notes: patrolInfo.notes + " " + patrolInfo.equipment
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
      case 'dungeon': {
        content += `<p>Dungeon Level: ${options.dungeonLevel || '1'}</p>
                    <p>Monster: ${result.monster || 'Unknown'}</p>
                    <p>Number Appearing: ${result.number || '1'}</p>`;
        
        if (result.monsterLevel) {
          content += `<p>Monster Level: ${result.monsterLevel}</p>`;
        }
        
        if (result.adjustedNumber && result.adjustedNumber !== result.number) {
          content += `<p>Adjusted Number: ${result.adjustedNumber} (based on dungeon level)</p>`;
        }
        
        if (result.notes) {
          content += `<p>Notes: ${result.notes}</p>`;
        }
        
          // Special handling for Character encounters
        if (result.monster === "Character" && result.partyInfo) {
          content += `<hr><h4>Adventuring Party</h4>`;
          content += `<p>${result.partyInfo}</p>`;
          if (result.henchmenInfo) {
            content += `<p>${result.henchmenInfo}</p>`;
          }
        } 
        else if (result.adjustedNumber && result.adjustedNumber !== result.number) {
          content += `<p>Adjusted Number: ${result.adjustedNumber} (based on dungeon level)</p>`;
          if (result.notes) {
            content += `<p>Notes: ${result.notes}</p>`;
          }
        }
        else if (result.notes) {
          content += `<p>Notes: ${result.notes}</p>`;
        }
        
        break;
      }
      // Add other encounter type displays here
      default: {
        content += `<p>Encounter Type: ${options.encounterType || 'Unknown'}</p>
                    <p>Result: ${result.result || 'No specific result'}</p>`;
        
        if (result.monster) {
          content += `<p>Monster: ${result.monster}</p>`;
        }
        
        if (result.number) {
          content += `<p>Number: ${result.number}</p>`;
        }
        
        if (result.notes) {
          content += `<p>Notes: ${result.notes}</p>`;
        }
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
    
    try {
      if (!options || !options.encounterType) {
        console.warn("Missing encounter type in options");
        return { result: "No encounter type specified", error: "Missing encounter type" };
      }
      
      let result;
      switch (options.encounterType) {
        case 'regional':
          result = await this._rollRegionalEncounter(options);
          break;
        case 'outdoor':
          if (!options.terrain || !options.population) {
            console.warn("Missing required parameters for outdoor encounter");
            return { 
              result: "Error generating encounter", 
              error: "Missing required parameters for outdoor encounter",
              options: options 
            };
          }
          result = await this.rollOutdoorEncounter(options.terrain, options.population, options.timeOfDay);
          break;
        case 'dungeon':
          result = await this._rollDungeonEncounter(options);
          break;
        case 'underwater':
        case 'waterborne':
          result = await this._rollWaterborneEncounter(options);
          break;
        case 'airborne':
          result = await this._rollAirborneEncounter(options);
          break;
        case 'city':
        case 'town':
          result = await this._rollCityEncounter(options);
          break;
        case 'astral':
        case 'ethereal':
          result = await this._rollPlanarEncounter(options);
          break;
        default:
          console.warn(`Unknown encounter type: ${options.encounterType}`);
          return { 
            result: "No valid encounter type specified", 
            error: `Unknown encounter type: ${options.encounterType}` 
          };
      }
      
      // Validate result
      if (!result) {
        console.error(`No result returned from ${options.encounterType} encounter generation`);
        return { 
          result: "Error generating encounter", 
          error: "No result returned from encounter generator",
          encounterType: options.encounterType 
        };
      }
      
      // Return the successful result
      return result;
      
    } catch (error) {
      console.error(`Error generating ${options?.encounterType || 'unknown'} encounter:`, error);
      return { 
        result: "Error generating encounter", 
        error: error.message || "Unknown error",
        stack: error.stack,
        options: options 
      };
    }
  }

  static _rollPlanarEncounter(options) {
    // This is the function being called by your switch statement
    const planeType = options.encounterType.toLowerCase(); // 'astral' or 'ethereal'
    return rollPlanarEncounter(planeType, options);
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
  static _shouldRollEncounterForTime(timeOfDay, terrain, partySize = 0) {
    // DMG encounter check timing
    const checkMatrix = {
      'plain': { 'morning': true, 'noon': false, 'evening': true, 'night': false, 'midnight': true, 'predawn': false },
      'scrub': { 'morning': true, 'noon': false, 'evening': true, 'night': true, 'midnight': false, 'predawn': true },
      'forest': { 'morning': true, 'noon': true, 'evening': true, 'night': true, 'midnight': true, 'predawn': true },
      'desert': { 'morning': true, 'noon': false, 'evening': false, 'night': true, 'midnight': false, 'predawn': true },
      'hills': { 'morning': false, 'noon': true, 'evening': false, 'night': true, 'midnight': false, 'predawn': true },
      'mountains': { 'morning': true, 'noon': false, 'evening': false, 'night': true, 'midnight': false, 'predawn': false },
      'marsh': { 'morning': true, 'noon': true, 'evening': true, 'night': true, 'midnight': true, 'predawn': true }
    };
    
    // Get check status for terrain and time
    const terrainChecks = checkMatrix[terrain] || checkMatrix['plain'];
    const shouldCheck = terrainChecks[timeOfDay] || false;
    
    // Check unless party is too small during non-check times
    if (!shouldCheck && partySize > 100) {
      return true;
    }
    
    return shouldCheck;
  }
  
  // Helper to get base encounter chance based on terrain and population
  static _getBaseEncounterChance(terrain, population) {
    // Base encounter chances by population density directly from DMG
    // These are expressed as percentages (1 in X becomes 100/X %)
    const populationChances = {
      'dense': 5,     // 1 in 20 = 5% chance
      'moderate': 8.33, // 1 in 12 = 8.33% chance
      'uninhabited': 10 // 1 in 10 = 10% chance
    };
    
    // Get the base chance from population density
    let baseChance = populationChances[population] || 8.33; // Default to moderate if unknown
    
    // Now we need to determine if we should check for encounter at this time/terrain
    // This would ideally be handled by _shouldRollEncounterForTime, but you can
    // return the correct base chance from here
    
    return baseChance;
  }

  // Add new method for rolling on DMG outdoor encounter tables
  static _rollDMGOutdoorEncounter(terrain, population, options = {}) {
    // Determine climate based on options or default to temperate
    const climate = options.climate || 'temperate';
    
    // Use the appropriate outdoor table based on climate
    if (['arctic', 'subarctic'].includes(climate)) {
      try {
        const result = rollOnOutdoorTable(climate, terrain, options);
        if (result) {
          return result;
        }
      } catch (error) {
        console.error(`Error rolling on ${climate} table:`, error);
        // Fall back to simplified tables if there's an error
      }
    }
    
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
    
    // Determine if this is inhabited or uninhabited for table selection
    const isInhabited = population !== 'uninhabited';
    
    // Roll for creature type based on terrain and population
    const roll = Math.floor(Math.random() * 100) + 1;
    
    // Select appropriate table based on climate
    let encounterTable;
    if (climate === 'temperate' || climate === 'subtropical') {
      if (isInhabited) {
        // Use inhabited area tables
        encounterTable = this._getDMGInhabitedAreaTable(dmgTerrain);
      } else {
        // Use wilderness area tables
        encounterTable = this._getDMGWildernessTable(dmgTerrain);
      }
    } else {
      // For other climates, use the basic table for now
      encounterTable = this._getDMGTerrainEncounterTable(dmgTerrain, population);
    }
    
    if (!encounterTable || encounterTable.length === 0) {
      console.warn(`No encounter table found for terrain: ${dmgTerrain}, population: ${population}, climate: ${climate}`);
      return { 
        result: "No suitable encounter table found",
        climate: climate,
        terrain: dmgTerrain,
        population: population
      };
    }
    
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
        subtableRoll: subtableRoll,
        climate: climate,
        terrain: dmgTerrain
      };
    }
    
    // Get number pattern and roll for number
    const numberPattern = encounter.number || "1d6";
    const number = rollNumberFromPattern(numberPattern);
    
    // Check if creature is airborne (only for original table)
    const isAirborne = encounter.isAirborne && Math.random() < 0.75;
    
    return {
      result: "Encounter",
      typeRoll: roll,
      encounter: encounter.name || encounter,
      number: number,
      climate: climate,
      terrain: dmgTerrain,
      isAirborne: isAirborne,
      notes: isAirborne ? "Encountered while airborne" : ""
    };
  }

    /**
   * Roll a waterborne encounter.
   */
  static _rollWaterborneEncounter(options) {
    const waterType = options.waterType || 'coastal';
    return rollWaterborneEncounter(waterType, options);
  }

  /**
   * Roll an airborne encounter.
   */
  static _rollAirborneEncounter(options) {
    // Use current climate if available, otherwise default to temperate
    const climate = options.climate || 'temperate';
    return rollAirborneEncounter(climate, options);
  }

  /**
   * Roll a city/town encounter.
   */
  static _rollCityEncounter(options) {
    const citySize = options.citySize || 'town';
    return rollCityEncounter(citySize, options);
  }
  
  static _getDMGInhabitedAreaTable(terrain) {
    // Placeholder for inhabited area tables
    // Will be implemented in the future
    return this._getDMGTerrainEncounterTable(terrain, 'moderate');
  }
  
  static _getDMGWildernessTable(terrain) {
    // Placeholder for wilderness area tables
    // Will be implemented in the future
    return this._getDMGTerrainEncounterTable(terrain, 'uninhabited');
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
    console.log("Starting dungeon encounter generation with options:", options);
    
    try {
      const dungeonLevel = options.dungeonLevel || 1;
      
      // Initialize variables for character encounters
      let partyInfo = null;
      let henchmenInfo = null;

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
      
      console.log(`Using matrix level ${matrixLevel} for dungeon level ${dungeonLevel}`);
      
      // Get the monster level matrix for this dungeon level
      const levelMatrix = DMG_TABLES.DMG_DUNGEON_MONSTER_LEVEL_MATRIX[matrixLevel];
      if (!levelMatrix) {
        console.error("Error: Unknown dungeon level or missing matrix");
        return { result: "Error: Unknown dungeon level" };
      }
      
      // Roll to determine monster level
      const levelRoll = Math.floor(Math.random() * 20) + 1;
      let monsterLevel = 1; // Default
      
      console.log(`Rolled ${levelRoll} on 1d20 to determine monster level`);
      
      for (const entry of levelMatrix) {
        if (levelRoll >= entry.min && levelRoll <= entry.max) {
          monsterLevel = entry.monsterLevel;
          break;
        }
      }
      
      console.log(`Determined monster level: ${monsterLevel}`);
      
      // Get the monster table for this level
      const monsterTable = DMG_TABLES.DMG_MONSTER_LEVEL_TABLES[monsterLevel];
      if (!monsterTable) {
        console.error(`No monster table found for monster level ${monsterLevel}`);
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
      
      console.log(`Rolled ${monsterRoll} on d100 for specific monster`);
      
      // When determining the monster type:
      for (const entry of monsterTable) {
        if (monsterRoll >= entry.min && monsterRoll <= entry.max) {
          monster = entry.monster;
          numberPattern = entry.number || "1";
          subtable = entry.subtable || null;
          notes = entry.notes || null;
          break;
        }
      }
      
      console.log(`Selected monster: ${monster}, number pattern: ${numberPattern}, subtable: ${subtable}`);
      
      // Handle subtables
      // When determining the monster type:
for (const entry of monsterTable) {
  if (monsterRoll >= entry.min && monsterRoll <= entry.max) {
    monster = entry.monster;
    numberPattern = entry.number || "1";
    subtable = entry.subtable || null;
    notes = entry.notes || null;
    break;
  }
}

console.log(`Selected monster: ${monster}, number pattern: ${numberPattern}, subtable: ${subtable}`);

// Handle subtables
if (subtable) {
  console.log(`Rolling on subtable: ${subtable}`);
  
  if (subtable === "human") {
    const subtableResult = this._rollOnHumanSubtable();
    console.log(`Human subtable result:`, subtableResult);
   
    monster = subtableResult.encounter;
    numberPattern = subtableResult.number || numberPattern;
    notes = subtableResult.notes || notes;
    subtable = subtableResult.subtable || null;
   
    // If this is a character encounter from human subtable, generate it
    if (subtable === "character") {
      console.log(`Rolling on character subtable from human subtable`);
      const characterResult = this._generateCharacterEncounter(dungeonLevel);
      console.log(`Character encounter result:`, characterResult);
     
      numberPattern = characterResult.number.toString() || numberPattern;
      notes = characterResult.notes || notes;
     
      partyInfo = characterResult.partyInfo;
      henchmenInfo = characterResult.henchmenInfo;
    }
  }
  else if (subtable === "character") {
    // Direct handling for character encounters from monster tables
    console.log(`Direct Character encounter from monster table`);
    const characterResult = this._generateCharacterEncounter(dungeonLevel);
    console.log(`Character encounter result:`, characterResult);
    
    // Don't change the monster name - keep it as "Character"
    numberPattern = characterResult.number.toString() || numberPattern;
    notes = characterResult.notes || notes;
    
    // Set the character-specific properties
    partyInfo = characterResult.partyInfo;
    henchmenInfo = characterResult.henchmenInfo;
  }
  // Add handling for other subtable types as needed
} 
// Also handle direct Character monsters (not from a subtable)
else if (monster === "Character") {
  console.log(`Character monster directly from table (no subtable)`);
  const characterResult = this._generateCharacterEncounter(dungeonLevel);
  console.log(`Character encounter result:`, characterResult);
  
  numberPattern = characterResult.number.toString() || numberPattern;
  notes = characterResult.notes || notes;
  
  partyInfo = characterResult.partyInfo;
  henchmenInfo = characterResult.henchmenInfo;
}
      
      // Roll for number of monsters
      let number;
      try {
        // Use the imported utility function - make sure this exists
        if (typeof rollNumberFromPattern === 'function') {
          number = rollNumberFromPattern(numberPattern);
        } else if (typeof this.rollNumberFromPattern === 'function') {
          // Try class method if global function doesn't exist
          number = this.rollNumberFromPattern(numberPattern);
        } else {
          // Fallback to a simple implementation
          console.warn("rollNumberFromPattern not found, using fallback");
          number = this._fallbackRollNumberFromPattern(numberPattern);
        }
      } catch (error) {
        console.error("Error rolling number pattern:", error);
        number = 1; // Default to 1 if there's an error
      }
      
      console.log(`Rolled ${number} for number of monsters`);
      
      // Adjust numbers based on relative dungeon level
      let adjustedNumber = number;
      if (dungeonLevel > monsterLevel) {
        // This is causing the issue - limit the adjustment to at most double
        // the original number for level difference > 1
        const levelDifference = dungeonLevel - monsterLevel;
        if (levelDifference <= 1) {
          adjustedNumber = number * (1 + levelDifference);
        } else {
          // For bigger level differences, cap at 2x
          adjustedNumber = number * 2;
        }
        console.log(`Adjusted number up to ${adjustedNumber} due to level difference`);
      } else if (dungeonLevel < monsterLevel) {
        // Greater monsters on higher levels have numbers reduced
        const levelDifference = monsterLevel - dungeonLevel;
        adjustedNumber = Math.max(1, number - levelDifference);
        console.log(`Adjusted number down to ${adjustedNumber} due to level difference`);
      }
      
      const result = {
        result: "Encounter",
        monsterLevel: monsterLevel,
        levelRoll: levelRoll,
        monsterRoll: monsterRoll,
        monster: monster,
        number: number,
        adjustedNumber: adjustedNumber,
        notes: notes,
        partyInfo: partyInfo,       // party of adventurers!
        henchmenInfo: henchmenInfo  // Additional henchmen
      };
      
      console.log("Final dungeon encounter result:", result);
      return result;
    } catch (error) {
      console.error("Error in _rollDungeonEncounter:", error);
      return { 
        result: "Error",
        error: error.message,
        stack: error.stack
      };
    }
  }
  
  // Fallback method for rolling number patterns if the utility function is missing
  static _fallbackRollNumberFromPattern(pattern) {
    console.log(`Using fallback roll method for pattern: ${pattern}`);
    
    if (!pattern || pattern === "") return 1;
    
    // Handle simple number
    if (!isNaN(pattern)) return parseInt(pattern);
    
    // Handle simple dice (e.g. "2d6")
    const diceRegex = /^(\d+)d(\d+)$/;
    const diceMatch = pattern.match(diceRegex);
    if (diceMatch) {
      const diceCount = parseInt(diceMatch[1]);
      const diceSize = parseInt(diceMatch[2]);
      let total = 0;
      for (let i = 0; i < diceCount; i++) {
        total += Math.floor(Math.random() * diceSize) + 1;
      }
      return total;
    }
    
    // Handle range (e.g. "1-6")
    const rangeRegex = /^(\d+)-(\d+)$/;
    const rangeMatch = pattern.match(rangeRegex);
    if (rangeMatch) {
      const min = parseInt(rangeMatch[1]);
      const max = parseInt(rangeMatch[2]);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Handle addition (e.g. "1d4+1")
    const addRegex = /^(\d+)d(\d+)\+(\d+)$/;
    const addMatch = pattern.match(addRegex);
    if (addMatch) {
      const diceCount = parseInt(addMatch[1]);
      const diceSize = parseInt(addMatch[2]);
      const bonus = parseInt(addMatch[3]);
      let total = bonus;
      for (let i = 0; i < diceCount; i++) {
        total += Math.floor(Math.random() * diceSize) + 1;
      }
      return total;
    }
    
    // Default fallback
    return 1;
  }

  // Helper method to roll on the Human Subtable
  static _rollOnHumanSubtable() {
    const roll = Math.floor(Math.random() * 100) + 1;
    
    console.log(`Rolling on Human Subtable with roll ${roll}`);
    
    if (roll <= 25) {
      return { encounter: "Bandit", number: "5-15", notes: "Upper level leaders not with groups under 30" };
    } else if (roll <= 30) {
      return { encounter: "Berserker", number: "3-9", notes: "Upper level leaders not with groups under 30" };
    } else if (roll <= 45) {
      return { encounter: "Brigand", number: "5-15", notes: "Upper level leaders not with groups under 30" };
    } else {
      // Character encounter - this sets a flag to generate a character party
      return { encounter: "Character", subtable: "character", notes: "Adventuring party" };
    }
  }

  // Helper method to generate character encounters
  static _generateCharacterEncounter(dungeonLevel) {
    console.log(`Generating character encounter for dungeon level ${dungeonLevel}`);
    
    // Number of characters in party (2-5)
    const characterCount = Math.floor(Math.random() * 4) + 2;
    console.log(`Party contains ${characterCount} characters`);
    
    // Select character classes and create party members
    const partyMembers = [];
    for (let i = 0; i < characterCount; i++) {
      const roll = Math.floor(Math.random() * 100) + 1;
      let characterClass = "Fighter"; // Default
      
      for (const entry of DMG_TABLES.DMG_CHARACTER_SUBTABLE) {
        if (roll >= entry.min && roll <= entry.max) {
          characterClass = entry.character;
          break;
        }
      }
      
      // Determine race (20% chance of non-human)
      let race = "Human";
      const raceRoll = Math.floor(Math.random() * 100) + 1;
      if (raceRoll <= 20) {
        // Determine specific non-human race
        const nonHumanRoll = Math.floor(Math.random() * 100) + 1;
        if (nonHumanRoll <= 25) race = "Dwarf";
        else if (nonHumanRoll <= 50) race = "Elf";
        else if (nonHumanRoll <= 60) race = "Gnome";
        else if (nonHumanRoll <= 85) race = "Half-elf";
        else if (nonHumanRoll <= 95) race = "Halfling";
        else race = "Half-Orc";
        
        // Check for multi-class based on race
        let multiClassChance = 0;
        switch (race) {
          case "Dwarf": multiClassChance = 15; break;
          case "Elf": multiClassChance = 85; break;
          case "Gnome": multiClassChance = 25; break;
          case "Half-elf": multiClassChance = 85; break;
          case "Halfling": multiClassChance = 10; break;
          case "Half-Orc": multiClassChance = 50; break;
        }
        
        // Determine if multi-class
        if (Math.floor(Math.random() * 100) + 1 <= multiClassChance) {
          // 25% chance for triple-class if applicable
          const tripleClassRoll = Math.floor(Math.random() * 100) + 1;
          if (tripleClassRoll <= 25 && (race === "Elf" || race === "Half-elf")) {
            // Generate 2 more classes different from the first
            // Simplified implementation for brevity
            characterClass += "/Fighter/Thief";
          } else {
            // Add a second class
            characterClass += "/Thief";
          }
        }
      }
      
      // Determine character levels based on dungeon level - follow DMG rules
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
      
      // Adjust level for multi-class characters
      if (characterClass.includes("/")) {
        const classCount = characterClass.split("/").length;
        if (classCount === 2) {
          // Add 2 and divide by 2, per DMG
          characterLevel = Math.floor((characterLevel + 2) / 2);
        } else if (classCount === 3) {
          // Add 3 and divide by 3, per DMG
          characterLevel = Math.floor((characterLevel + 3) / 3);
        }
      }
      
      // Determine magic items based on character level
      const magicItems = this._determineMagicItems(characterLevel);
      
      partyMembers.push({
        race,
        class: characterClass,
        level: characterLevel,
        magicItems
      });
    }
    
    // Calculate number of henchmen (total party should be 9)
    const henchmenCount = 9 - characterCount;
    const henchmen = [];
    
    // Determine if henchmen are men-at-arms (levels 1-3) or actual henchmen (level 4+)
    const areMenAtArms = dungeonLevel <= 3;
    
    if (!areMenAtArms) {
      // Create actual henchmen with classes
      let remainingHenchmen = henchmenCount;
      let characterIndex = 0;
      
      while (remainingHenchmen > 0) {
        const master = partyMembers[characterIndex % characterCount];
        const roll = Math.floor(Math.random() * 100) + 1;
        let henchmanClass = "Fighter"; // Default
        
        for (const entry of DMG_TABLES.DMG_CHARACTER_SUBTABLE) {
          if (roll >= entry.min && roll <= entry.max) {
            henchmanClass = entry.character;
            break;
          }
        }
        
        // Calculate henchman level (1/3 of master's level) per DMG
        let henchmanLevel = Math.floor(master.level / 3);
        
        // Add 1 level per 3 levels of master for masters above 8th level
        if (master.level > 8) {
          henchmanLevel += Math.floor(master.level / 3);
        }
        
        // Ensure henchman level is at least 1
        henchmanLevel = Math.max(1, henchmanLevel);
        
        // Determine magic items for henchman
        const magicItems = this._determineMagicItems(henchmanLevel);
        
        henchmen.push({
          class: henchmanClass,
          level: henchmanLevel,
          master: characterIndex % characterCount,
          magicItems
        });
        
        remainingHenchmen--;
        characterIndex++;
      }
    }
    
    // Format party information
    const partyInfo = partyMembers.map(member => 
      `${member.race} ${member.class} (Lvl ${member.level}${member.magicItems.length > 0 ? 
      `, Items: ${member.magicItems.join(", ")}` : ""})`)
      .join("; ");
    
    // Format henchmen information
    let henchmenInfo = "";
    if (areMenAtArms) {
      henchmenInfo = `${henchmenCount} men-at-arms`;
    } else {
      henchmenInfo = henchmen.map(h => 
        `${h.class} (Lvl ${h.level}${h.magicItems.length > 0 ? 
        `, Items: ${h.magicItems.join(", ")}` : ""})`)
        .join("; ");
    }
    
    return {
      encounter: `Adventuring Party`,
      number: characterCount + henchmenCount,
      notes: "Adventuring party with characters and retainers",
      partyInfo: `${characterCount} characters: ${partyInfo}`,
      henchmenInfo: `${henchmenCount} ${areMenAtArms ? "men-at-arms" : "henchmen"}: ${henchmenInfo}`
    };
  }
  
  // Define magic item tables
  static MAGIC_ITEM_TABLE_I = [
    { id: 1, item: "2 POTIONS: climbing, flying" },
    { id: 2, item: "2 POTIONS: extra-healing, polymorph (self)" },
    { id: 3, item: "2 POTIONS: fire resistance, speed" },
    { id: 4, item: "2 POTIONS: healing, giant strength" },
    { id: 5, item: "2 POTIONS: heroism, invulnerability" },
    { id: 6, item: "2 POTIONS: human control, levitation" },
    { id: 7, item: "2 POTIONS: super-heroism, animal control" },
    { id: 8, item: "1 SCROLL: 1 Spell, level 1-6" },
    { id: 9, item: "1 SCROLL: 2 Spells, level 1-4" },
    { id: 10, item: "1 SCROLL: protection from magic" },
    { id: 11, item: "1 RING: mammal control" },
    { id: 12, item: "1 RING: protection +1" },
    { id: 13, item: "1 ARMOR: leather +1" },
    { id: 14, item: "1 SHIELD: +1" },
    { id: 15, item: "1 SWORD: +1 (no special abilities)" },
    { id: 16, item: "10 ARROWS: +1" },
    { id: 17, item: "4 BOLTS: +2" },
    { id: 18, item: "1 DAGGER: +1 (or +2)" },
    { id: 19, item: "1 JAVELIN +2" },
    { id: 20, item: "1 MACE +1" }
  ];
  
  static MAGIC_ITEM_TABLE_II = [
    { id: 1, item: "1 SCROLL: 3 Spells, level 2-9 or 2-7" },
    { id: 2, item: "2 RINGS: fire resistance, invisibility" },
    { id: 3, item: "1 RING: protection +3" },
    { id: 4, item: "1 STAFF: striking" },
    { id: 5, item: "1 WAND: illusion" },
    { id: 6, item: "1 WAND: negation" },
    { id: 7, item: "1 bracers of defense, armor class 4" },
    { id: 8, item: "1 brooch of shielding" },
    { id: 9, item: "1 cloak of elvenkind" },
    { id: 10, item: "1 dust of appearance" },
    { id: 11, item: "1 FIGURINE OF WONDROUS POWER: serpentine owl" },
    { id: 12, item: "3 javelins of lightning" },
    { id: 13, item: "1 set: chainmail +1, shield +2" },
    { id: 14, item: "1 ARMOR: splint mail +4" },
    { id: 15, item: "1 SWORD: +3 (no special abilities)" },
    { id: 16, item: "2 WEAPONS: crossbow of speed, hammer +2" }
  ];
  
  static MAGIC_ITEM_TABLE_III = [
    { id: 1, item: "1 RING: spell storing" },
    { id: 2, item: "1 ROD: cancellation" },
    { id: 3, item: "1 STAFF: serpent — python or adder" },
    { id: 4, item: "1 bag of tricks" },
    { id: 5, item: "1 boots of speed" },
    { id: 6, item: "1 boots of striding and leaping" },
    { id: 7, item: "1 cloak of displacement" },
    { id: 8, item: "1 gauntlets of ogre power" },
    { id: 9, item: "1 pipe of the sewers" },
    { id: 10, item: "1 robe of blending" },
    { id: 11, item: "2 ROPES: climbing, entanglement" },
    { id: 12, item: "1 set: plate mail +3, shield +2" },
    { id: 13, item: "1 SHIELD: +5" },
    { id: 14, item: "1 SWORD: +4, defender" },
    { id: 15, item: "1 mace +3" },
    { id: 16, item: "1 spear +3" }
  ];
  
  static MAGIC_ITEM_TABLE_IV = [
    { id: 1, item: "1 RING: djinni summoning" },
    { id: 2, item: "1 RING: spell turning" },
    { id: 3, item: "1 ROD: smiting" },
    { id: 4, item: "1 WAND: fire" },
    { id: 5, item: "1 cube of force" },
    { id: 6, item: "1 eyes of charming" },
    { id: 7, item: "1 horn of valhalla" },
    { id: 8, item: "1 robe of scintillating colors" },
    { id: 9, item: "1 talisman of either ultimate evil or pure good" },
    { id: 10, item: "1 set: plate mail +4, shield +3" },
    { id: 11, item: "1 SWORD: wounding" },
    { id: 12, item: "1 arrow of slaying (select character type)" }
  ];
  
  // Helper method to determine magic items based on character level
  static _determineMagicItems(characterLevel) {
    const items = [];
    
    // Check for items from Table I
    let tableIChance = 0;
    let tableICount = 0;
    
    switch (characterLevel) {
      case 1: tableIChance = 10; tableICount = 1; break;
      case 2: tableIChance = 20; tableICount = 2; break;
      case 3: tableIChance = 30; tableICount = 2; break;
      case 4: tableIChance = 40; tableICount = 2; break;
      case 5: tableIChance = 50; tableICount = 2; break;
      case 6: tableIChance = 60; tableICount = 3; break;
      case 7: tableIChance = 70; tableICount = 3; break;
      case 8: tableIChance = 80; tableICount = 3; break;
      case 9: tableIChance = 90; tableICount = 3; break;
      default: tableIChance = 100; tableICount = 3; break;
    }
    
    if (Math.floor(Math.random() * 100) + 1 <= tableIChance) {
      for (let i = 0; i < tableICount; i++) {
        const roll = Math.floor(Math.random() * 20) + 1;
        const itemEntry = this.MAGIC_ITEM_TABLE_I.find(entry => entry.id === roll);
        if (itemEntry) {
          items.push(itemEntry.item);
        }
      }
    }
    
    // Check for items from Table II
    let tableIIChance = 0;
    let tableIICount = 0;
    
    if (characterLevel >= 3) {
      switch (characterLevel) {
        case 3: tableIIChance = 10; tableIICount = 1; break;
        case 4: tableIIChance = 20; tableIICount = 1; break;
        case 5: tableIIChance = 30; tableIICount = 1; break;
        case 6: tableIIChance = 40; tableIICount = 2; break;
        case 7: tableIIChance = 50; tableIICount = 2; break;
        case 8: tableIIChance = 60; tableIICount = 2; break;
        case 9: tableIIChance = 70; tableIICount = 2; break;
        case 10: tableIIChance = 80; tableIICount = 2; break;
        case 11: tableIIChance = 90; tableIICount = 2; break;
        default: tableIIChance = 100; tableIICount = 2; break;
      }
      
      if (Math.floor(Math.random() * 100) + 1 <= tableIIChance) {
        for (let i = 0; i < tableIICount; i++) {
          // Correct procedure for Tables II and III:
          // Roll 1d6 first, if 1-3 then 1d8 gives result 1-8
          // If 1d6 is 4-6, then 1d8 gives result 9-16
          const roll1 = Math.floor(Math.random() * 6) + 1; // 1d6
          const roll2 = Math.floor(Math.random() * 8) + 1; // 1d8
          
          let itemId;
          if (roll1 <= 3) {
            itemId = roll2; // Items 1-8
          } else {
            itemId = roll2 + 8; // Items 9-16
          }
          
          const itemEntry = this.MAGIC_ITEM_TABLE_II.find(entry => entry.id === itemId);
          if (itemEntry) {
            items.push(itemEntry.item);
          }
        }
      }
    }
    
    // Check for items from Table III
    let tableIIIChance = 0;
    
    if (characterLevel >= 7) {
      switch (characterLevel) {
        case 7: tableIIIChance = 10; break;
        case 8: tableIIIChance = 20; break;
        case 9: tableIIIChance = 30; break;
        case 10: tableIIIChance = 40; break;
        case 11: tableIIIChance = 50; break;
        case 12: tableIIIChance = 60; break;
        default: tableIIIChance = 100; break;
      }
      
      if (Math.floor(Math.random() * 100) + 1 <= tableIIIChance) {
        // Same procedure as Table II
        const roll1 = Math.floor(Math.random() * 6) + 1; // 1d6
        const roll2 = Math.floor(Math.random() * 8) + 1; // 1d8
        
        let itemId;
        if (roll1 <= 3) {
          itemId = roll2; // Items 1-8
        } else {
          itemId = roll2 + 8; // Items 9-16
        }
        
        const itemEntry = this.MAGIC_ITEM_TABLE_III.find(entry => entry.id === itemId);
        if (itemEntry) {
          items.push(itemEntry.item);
        }
      }
    }
    
    // Check for items from Table IV
    let tableIVChance = 0;
    
    if (characterLevel >= 11) {
      switch (characterLevel) {
        case 11: tableIVChance = 10; break;
        case 12: tableIVChance = 20; break;
        default: tableIVChance = 60; break;
      }
      
      if (Math.floor(Math.random() * 100) + 1 <= tableIVChance) {
        // Table IV rolls on d12
        const roll = Math.floor(Math.random() * 12) + 1;
        const itemEntry = this.MAGIC_ITEM_TABLE_IV.find(entry => entry.id === roll);
        if (itemEntry) {
          items.push(itemEntry.item);
        }
      }
    }
    
    return items;
  }

  /**
   * Check if the party gets lost when traveling.
   */
  static async checkIfLost(terrain) {
    // DMG exact chances of getting lost
    const lostChances = {
      'plain': 10,    // 1 in 10
      'scrub': 30,    // 3 in 10
      'forest': 70,   // 7 in 10
      'desert': 40,   // 4 in 10
      'hills': 20,    // 2 in 10
      'mountains': 50, // 5 in 10
      'marsh': 60     // 6 in 10
    };
    
    const directionRanges = {
      'plain': '60° left or right',
      'scrub': '60° left or right',
      'forest': 'any',
      'desert': '60° left or right',
      'hills': '60° left or right',
      'mountains': '120° left or right',
      'marsh': 'any'
    };
    
    const lostChance = lostChances[terrain] || 20;
    const roll = Math.floor(Math.random() * 100) + 1;
    
    if (roll <= lostChance) {
      // Determine direction based on terrain
      let direction = "";
      const dirRange = directionRanges[terrain] || '60° left or right';
      
      if (dirRange === 'any') {
        // Roll for any direction (complex direction determination)
        const dirRoll = Math.floor(Math.random() * 6) + 1;
        const directions = ["Right ahead", "Right behind", "Directly behind", "Directly behind", "Left behind", "Left ahead"];
        direction = directions[dirRoll - 1];
      } else if (dirRange.includes('120°')) {
        // Roll for 60° or 120° deviation
        const leftRight = Math.floor(Math.random() * 6) + 1 <= 3 ? "Left" : "Right";
        const amount = Math.floor(Math.random() * 6) + 1 <= 3 ? "60°" : "120°";
        direction = `${leftRight} ${amount}`;
      } else {
        // Standard 60° deviation
        const leftRight = Math.floor(Math.random() * 6) + 1 <= 3 ? "Left" : "Right";
        direction = `${leftRight} 60°`;
      }
      
      return {
        result: "Lost",
        direction: direction
      };
    } else {
      return {
        result: "Not lost"
      };
    }
  }

  static _getEncounterDistance(terrain, surpriseValue = 0) {
    // Base encounter distance is 6d4 (6" to 24")
    let distance = 0;
    for (let i = 0; i < 6; i++) {
      distance += Math.floor(Math.random() * 4) + 1;
    }
    
    // Apply surprise modifier
    distance -= surpriseValue;
    
    // Apply terrain modifiers
    if (terrain === 'scrub') {
      // -1 per die on all 3's and 4's
      for (let i = 0; i < 6; i++) {
        const dieRoll = Math.floor(Math.random() * 4) + 1;
        if (dieRoll >= 3) {
          distance -= 1;
        }
      }
    } else if (terrain === 'forest') {
      // -1 per die on all numbers
      distance -= 6;
    } else if (terrain === 'marsh') {
      // -1 per die on all 2's, 3's, and 4's
      for (let i = 0; i < 6; i++) {
        const dieRoll = Math.floor(Math.random() * 4) + 1;
        if (dieRoll >= 2) {
          distance -= 1;
        }
      }
    }
    
    // Ensure minimum distance of 0
    return Math.max(0, distance);
  }

  static calculateForcedMarchImpact(percentForced) {
    if (percentForced <= 0) {
      return { restRequired: 0, exhaustionLevel: 0 };
    }
    
    let restHours = 0;
    if (percentForced <= 30) {
      restHours = percentForced / 10 * 1; // 1 hour per 10%
    } else if (percentForced <= 60) {
      restHours = percentForced / 10 * 2; // 2 hours per 10%
    } else {
      restHours = percentForced / 10 * 3; // 3 hours per 10%
    }
    
    const restDays = Math.floor(restHours / 24);
    const remainingHours = restHours % 24;
    const movementPenalty = remainingHours / 24 * 100; // % of movement lost next day
    
    return {
      restRequired: restHours,
      restDays: restDays,
      movementPenalty: movementPenalty,
      exhaustionLevel: 0 // Calculate if no rest taken
    };
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
