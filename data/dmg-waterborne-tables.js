// data/dmg-waterborne-tables.js
import { rollNumberFromPattern } from '../utils/utility.js';
// Waterborne encounter tables from DMG Appendix C
  // Ocean Encounter Tables
  export const OCEAN_ENCOUNTER_TABLES = {
    // Open Ocean
    open: [
      { min: 1, max: 2, creature: "Dragon Turtle", number: "1" },
      { min: 3, max: 10, creature: "Elemental, Water", number: "1" },
      { min: 11, max: 13, creature: "Fish, Giant", subtable: "giant_fish", number: "1d4" },
      { min: 14, max: 23, creature: "Merman Patrol", number: "5d6" },
      { min: 24, max: 28, creature: "Nixie", number: "5d4" },
      { min: 29, max: 38, creature: "Pirate Ship", number: "1" },
      { min: 39, max: 48, creature: "Sahuagin", number: "3d6" },
      { min: 49, max: 50, creature: "Sea Hag", number: "1" },
      { min: 51, max: 53, creature: "Sea Serpent", number: "1" },
      { min: 54, max: 63, creature: "Ship", subtable: "ship_type", number: "1" },
      { min: 64, max: 70, creature: "Triton", number: "5d10" },
      { min: 71, max: 80, creature: "Whale", subtable: "whale_type", number: "1d4" },
      { min: 81, max: 100, creature: "No Encounter", number: "0" }
    ],
    
    // Coastal Waters
    coastal: [
      { min: 1, max: 2, creature: "Crocodile, Giant", number: "1d3" },
      { min: 3, max: 4, creature: "Dragon Turtle", number: "1" },
      { min: 5, max: 8, creature: "Elemental, Water", number: "1" },
      { min: 9, max: 15, creature: "Fish, Giant", subtable: "giant_fish", number: "2d4" },
      { min: 16, max: 25, creature: "Lizardmen", number: "5d6" },
      { min: 26, max: 35, creature: "Merman Patrol", number: "5d6" },
      { min: 36, max: 40, creature: "Morkoth", number: "1" },
      { min: 41, max: 45, creature: "Nixie", number: "5d4" },
      { min: 46, max: 55, creature: "Pirate Ship", number: "1" },
      { min: 56, max: 63, creature: "Sahuagin", number: "3d6" },
      { min: 64, max: 65, creature: "Sea Hag", number: "1" },
      { min: 66, max: 68, creature: "Sea Serpent", number: "1" },
      { min: 69, max: 78, creature: "Ship", subtable: "ship_type", number: "1" },
      { min: 79, max: 83, creature: "Triton", number: "5d10" },
      { min: 84, max: 90, creature: "Whale", subtable: "whale_type", number: "1d4" },
      { min: 91, max: 100, creature: "No Encounter", number: "0" }
    ]
  };
  
  // River Encounter Table
  export const RIVER_ENCOUNTER_TABLE = [
    { min: 1, max: 5, creature: "Crocodile", number: "2d4" },
    { min: 6, max: 10, creature: "Crocodile, Giant", number: "1d3" },
    { min: 11, max: 15, creature: "Elemental, Water", number: "1" },
    { min: 16, max: 25, creature: "Fish, Giant", subtable: "giant_fish_river", number: "1d4" },
    { min: 26, max: 35, creature: "Lizardmen", number: "5d6" },
    { min: 36, max: 40, creature: "Men, Bandits", number: "2d10" },
    { min: 41, max: 50, creature: "Men, Buccaneers", number: "3d6" },
    { min: 51, max: 55, creature: "Nixie", number: "5d4" },
    { min: 56, max: 60, creature: "Snake, Giant Constrictor", number: "1" },
    { min: 61, max: 70, creature: "Snake, Poisonous", number: "1d6" },
    { min: 71, max: 75, creature: "Snake, Water", number: "1d6" },
    { min: 76, max: 85, creature: "Vessel", subtable: "river_vessel", number: "1" },
    { min: 86, max: 100, creature: "No Encounter", number: "0" }
  ];
  
  // Lake Encounter Table
  export const LAKE_ENCOUNTER_TABLE = [
    { min: 1, max: 5, creature: "Crocodile", number: "2d4" },
    { min: 6, max: 10, creature: "Crocodile, Giant", number: "1d3" },
    { min: 11, max: 15, creature: "Elemental, Water", number: "1" },
    { min: 16, max: 25, creature: "Fish, Giant", subtable: "giant_fish_lake", number: "1d4" },
    { min: 26, max: 30, creature: "Hydra (8-12 heads)", number: "1" },
    { min: 31, max: 40, creature: "Lizardmen", number: "5d6" },
    { min: 41, max: 50, creature: "Nixie", number: "5d4" },
    { min: 51, max: 55, creature: "Nymph", number: "1" },
    { min: 56, max: 60, creature: "Snake, Giant Constrictor", number: "1" },
    { min: 61, max: 65, creature: "Snake, Poisonous", number: "1d6" },
    { min: 66, max: 70, creature: "Snake, Water", number: "1d6" },
    { min: 71, max: 80, creature: "Vessel", subtable: "lake_vessel", number: "1" },
    { min: 81, max: 85, creature: "Will-o-wisp", number: "1" },
    { min: 86, max: 100, creature: "No Encounter", number: "0" }
  ];
  
  // Subtables
  export const WATERBORNE_SUBTABLES = {
    giant_fish: [
      { min: 1, max: 30, creature: "Barracuda", number: "2d4" },
      { min: 31, max: 50, creature: "Gar", number: "1d2" },
      { min: 51, max: 75, creature: "Manta Ray", number: "1" },
      { min: 76, max: 90, creature: "Shark", number: "1d4" },
      { min: 91, max: 100, creature: "Sturgeon", number: "1" }
    ],
    
    giant_fish_river: [
      { min: 1, max: 30, creature: "Bass", number: "1d3" },
      { min: 31, max: 60, creature: "Catfish", number: "1d2" },
      { min: 61, max: 80, creature: "Gar", number: "1d2" },
      { min: 81, max: 100, creature: "Sturgeon", number: "1" }
    ],
    
    giant_fish_lake: [
      { min: 1, max: 30, creature: "Bass", number: "1d3" },
      { min: 31, max: 60, creature: "Catfish", number: "1d2" },
      { min: 61, max: 80, creature: "Pike", number: "1d3" },
      { min: 81, max: 100, creature: "Sturgeon", number: "1" }
    ],
    
    whale_type: [
      { min: 1, max: 40, creature: "Killer Whale", number: "1d2" },
      { min: 41, max: 70, creature: "Narwhal", number: "1d6" },
      { min: 71, max: 85, creature: "Right Whale", number: "1" },
      { min: 86, max: 100, creature: "Sperm Whale", number: "1" }
    ],
    
    ship_type: [
      { min: 1, max: 30, creature: "Merchant Ship", number: "1" },
      { min: 31, max: 50, creature: "Warship", number: "1" },
      { min: 51, max: 80, creature: "Galley", number: "1" },
      { min: 81, max: 100, creature: "Fishing Vessel", number: "1d2" }
    ],
    
    river_vessel: [
      { min: 1, max: 30, creature: "Fishing Boat", number: "1d3" },
      { min: 31, max: 60, creature: "Merchant Barge", number: "1" },
      { min: 61, max: 85, creature: "Riverboat", number: "1" },
      { min: 86, max: 100, creature: "Warship (galleon)", number: "1" }
    ],
    
    lake_vessel: [
      { min: 1, max: 40, creature: "Fishing Boat", number: "1d4" },
      { min: 41, max: 70, creature: "Merchant Ship", number: "1" },
      { min: 71, max: 90, creature: "Pleasure Craft", number: "1" },
      { min: 91, max: 100, creature: "Warship", number: "1" }
    ]
  };
  
  // Main function to roll waterborne encounters
  export const rollWaterborneEncounter = (waterType, options = {}) => {
    // Select the appropriate table based on water type
    let table;
    switch(waterType.toLowerCase()) {
      case 'open_ocean':
      case 'open':
        table = OCEAN_ENCOUNTER_TABLES.open;
        break;
      case 'coastal':
      case 'coast':
        table = OCEAN_ENCOUNTER_TABLES.coastal;
        break;
      case 'river':
        table = RIVER_ENCOUNTER_TABLE;
        break;
      case 'lake':
        table = LAKE_ENCOUNTER_TABLE;
        break;
      default:
        console.warn(`No table found for water type: ${waterType}, defaulting to coastal`);
        table = OCEAN_ENCOUNTER_TABLES.coastal;
    }
    
    // Roll on the table
    const roll = Math.floor(Math.random() * 100) + 1;
    
    // Find the appropriate entry
    for (const entry of table) {
      if (roll >= entry.min && roll <= entry.max) {
        if (entry.creature === "No Encounter") {
          return { result: "No Encounter" };
        }
        
        let creature = entry.creature;
        let subtableResult = null;
        let number = "1";
        
        // Check if this entry requires a subtable roll
        if (entry.subtable) {
          const subtableRoll = Math.floor(Math.random() * 100) + 1;
          subtableResult = rollOnWaterborneSubtable(entry.subtable, subtableRoll);
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
          waterType: waterType,
          encounter: creature,
          number: creatureCount,
          notes: entry.notes || ""
        };
      }
    }
    
    return { result: "Error: No encounter found" };
  };
  
  // Function to roll on waterborne subtables
  export const rollOnWaterborneSubtable = (subtableName, roll) => {
    const subtable = WATERBORNE_SUBTABLES[subtableName];
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
    OCEAN_ENCOUNTER_TABLES,
    RIVER_ENCOUNTER_TABLE,
    LAKE_ENCOUNTER_TABLE,
    WATERBORNE_SUBTABLES,
    rollWaterborneEncounter,
    rollOnWaterborneSubtable,
    rollNumberFromPattern
  };