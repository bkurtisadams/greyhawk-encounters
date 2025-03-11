// data/dmg-airborne-tables.js
import { rollNumberFromPattern } from '../utils/utility.js';
// Airborne encounter tables from DMG Appendix C

// Helper function to roll numbers

  
  // Airborne Encounter Tables by Climate
  export const AIRBORNE_ENCOUNTER_TABLES = {
    // Temperate and Subtropical
    temperate: [
      { min: 1, max: 2, creature: "Chimera", number: "1" },
      { min: 3, max: 6, creature: "Dragon", subtable: "dragon_temperate", number: "1" },
      { min: 7, max: 8, creature: "Eagle, Giant", number: "1d3" },
      { min: 9, max: 10, creature: "Elemental, Air", number: "1" },
      { min: 11, max: 12, creature: "Griffon", number: "1d4" },
      { min: 13, max: 14, creature: "Hippogriff", number: "1d6" },
      { min: 15, max: 16, creature: "Manticore", number: "1" },
      { min: 17, max: 18, creature: "Men (flying carpet or broom)", number: "1d2" },
      { min: 19, max: 20, creature: "Men (Mounted on Griffons)", number: "1d4" },
      { min: 21, max: 22, creature: "Men (Mounted on Hippogriffs)", number: "1d6" },
      { min: 23, max: 24, creature: "Men (Mounted on Pegasi)", number: "1d4" },
      { min: 25, max: 27, creature: "Pegasus", number: "1d6" },
      { min: 28, max: 29, creature: "Pixie", number: "5d4" },
      { min: 30, max: 32, creature: "Roc", subtable: "roc_type", number: "1" },
      { min: 33, max: 35, creature: "Sylph", number: "1d3" },
      { min: 36, max: 40, creature: "Wind Walker", number: "1d3" },
      { min: 41, max: 45, creature: "Wyvern", number: "1d2" },
      { min: 46, max: 100, creature: "No encounter", number: "0" }
    ],
    
    // Tropical
    tropical: [
      { min: 1, max: 5, creature: "Dragon", subtable: "dragon_tropical", number: "1" },
      { min: 6, max: 10, creature: "Eagle, Giant", number: "1d4" },
      { min: 11, max: 15, creature: "Griffon", number: "1d6" },
      { min: 16, max: 25, creature: "Manticore", number: "1d2" },
      { min: 26, max: 30, creature: "Men (flying carpet or broom)", number: "1d2" },
      { min: 31, max: 40, creature: "Men (Mounted on Griffons)", number: "1d6" },
      { min: 41, max: 45, creature: "Pseudo-dragon", number: "1" },
      { min: 46, max: 55, creature: "Roc", subtable: "roc_type", number: "1" },
      { min: 56, max: 65, creature: "Wind Walker", number: "1d4" },
      { min: 66, max: 75, creature: "Wyvern", number: "1d3" },
      { min: 76, max: 100, creature: "No encounter", number: "0" }
    ],
    
    // Subarctic
    subarctic: [
      { min: 1, max: 5, creature: "Dragon", subtable: "dragon_subarctic", number: "1" },
      { min: 6, max: 10, creature: "Eagle, Giant", number: "1d3" },
      { min: 11, max: 15, creature: "Elemental, Air", number: "1" },
      { min: 16, max: 25, creature: "Griffon", number: "1d4" },
      { min: 26, max: 30, creature: "Men (flying carpet)", number: "1" },
      { min: 31, max: 45, creature: "Owl, Giant", number: "1d3" },
      { min: 46, max: 55, creature: "Roc", subtable: "roc_type", number: "1" },
      { min: 56, max: 75, creature: "Wind Walker", number: "1d3" },
      { min: 76, max: 100, creature: "No encounter", number: "0" }
    ],
    
    // Arctic
    arctic: [
      { min: 1, max: 10, creature: "Dragon, White", number: "1" },
      { min: 11, max: 20, creature: "Elemental, Air", number: "1" },
      { min: 21, max: 35, creature: "Owl, Giant", number: "1d4" },
      { min: 36, max: 50, creature: "Roc", subtable: "roc_type", number: "1" },
      { min: 51, max: 65, creature: "Wind Walker", number: "1d6" },
      { min: 66, max: 100, creature: "No encounter", number: "0" }
    ]
  };
  
  // Subtables
  export const AIRBORNE_SUBTABLES = {
    dragon_temperate: [
      { min: 1, max: 5, creature: "Blue Dragon", number: "1" },
      { min: 6, max: 10, creature: "Brass Dragon", number: "1" },
      { min: 11, max: 15, creature: "Bronze Dragon", number: "1" },
      { min: 16, max: 20, creature: "Copper Dragon", number: "1" },
      { min: 21, max: 30, creature: "Gold Dragon", number: "1" },
      { min: 31, max: 40, creature: "Green Dragon", number: "1" },
      { min: 41, max: 50, creature: "Red Dragon", number: "1" },
      { min: 51, max: 60, creature: "Silver Dragon", number: "1" },
      { min: 61, max: 100, creature: "Chimera", number: "1d2" }
    ],
    
    dragon_tropical: [
      { min: 1, max: 15, creature: "Blue Dragon", number: "1" },
      { min: 16, max: 20, creature: "Brass Dragon", number: "1" },
      { min: 21, max: 25, creature: "Bronze Dragon", number: "1" },
      { min: 26, max: 35, creature: "Green Dragon", number: "1" },
      { min: 36, max: 65, creature: "Red Dragon", number: "1" },
      { min: 66, max: 100, creature: "Chimera", number: "1d3" }
    ],
    
    dragon_subarctic: [
      { min: 1, max: 20, creature: "Silver Dragon", number: "1" },
      { min: 21, max: 35, creature: "White Dragon", number: "1" },
      { min: 36, max: 50, creature: "Chimera", number: "1" },
      { min: 51, max: 100, creature: "Wyvern", number: "1d2" }
    ],
    
    roc_type: [
      { min: 1, max: 60, creature: "Roc, Small", number: "1" },
      { min: 61, max: 85, creature: "Roc, Medium", number: "1" },
      { min: 86, max: 100, creature: "Roc, Large", number: "1" }
    ]
  };
  
  // Main function to roll airborne encounters
  export const rollAirborneEncounter = (climate, options = {}) => {
    // Select the appropriate table based on climate
    let table;
    switch(climate.toLowerCase()) {
      case 'temperate':
      case 'subtropical':
        table = AIRBORNE_ENCOUNTER_TABLES.temperate;
        break;
      case 'tropical':
        table = AIRBORNE_ENCOUNTER_TABLES.tropical;
        break;
      case 'subarctic':
        table = AIRBORNE_ENCOUNTER_TABLES.subarctic;
        break;
      case 'arctic':
        table = AIRBORNE_ENCOUNTER_TABLES.arctic;
        break;
      default:
        console.warn(`No table found for climate: ${climate}, defaulting to temperate`);
        table = AIRBORNE_ENCOUNTER_TABLES.temperate;
    }
    
    // Roll on the table
    const roll = Math.floor(Math.random() * 100) + 1;
    
    // Find the appropriate entry
    for (const entry of table) {
      if (roll >= entry.min && roll <= entry.max) {
        if (entry.creature === "No encounter") {
          return { result: "No Encounter" };
        }
        
        let creature = entry.creature;
        let subtableResult = null;
        let number = "1";
        
        // Check if this entry requires a subtable roll
        if (entry.subtable) {
          const subtableRoll = Math.floor(Math.random() * 100) + 1;
          subtableResult = rollOnAirborneSubtable(entry.subtable, subtableRoll);
          creature = `${creature}: ${subtableResult.creature}`;
          number = subtableResult.number || entry.number;
        } else {
          number = entry.number;
        }
        
        // Roll for number of creatures
        const creatureCount = rollNumberFromPattern(number);
        
        return {
          result: "Encounter",
          roll: roll,
          climate: climate,
          encounter: creature,
          number: creatureCount,
          notes: entry.notes || ""
        };
      }
    }
    
    return { result: "Error: No encounter found" };
  };
  
  // Function to roll on airborne subtables
  export const rollOnAirborneSubtable = (subtableName, roll) => {
    const subtable = AIRBORNE_SUBTABLES[subtableName];
    if (!subtable) {
      console.warn(`No subtable found with name: ${subtableName}`);
      return { creature: "Unknown (subtable not found)" };
    }
    
    for (const entry of subtable) {
      if (roll >= entry.min && roll <= entry.max) {
        return {
          creature: entry.creature,
          number: entry.number
        };
      }
    }
    
    return { creature: "Unknown (entry not found in subtable)" };
  };
  
  // Export as default
  export default {
    AIRBORNE_ENCOUNTER_TABLES,
    AIRBORNE_SUBTABLES,
    rollAirborneEncounter,
    rollOnAirborneSubtable,
    rollNumberFromPattern
  };