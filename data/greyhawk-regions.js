import { rollNumberFromPattern } from '../utils/utility.js';

// Exports political region encounter tables for World of Greyhawk
export const GREYHAWK_REGIONAL_TABLES = {
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
      { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
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
    ],
    
    // Add other political regions as needed
  };
  
  // Export default for easier importing
  export default GREYHAWK_REGIONAL_TABLES;