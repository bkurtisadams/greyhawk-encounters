import { rollNumberFromPattern } from '../utils/utility.js';

// Exports subtables for encounter tables
export const DEMI_HUMAN_SUBTABLE = {
    "plain": [
      { min: 1, max: 5, encounter: "Dwarf" },
      { min: 6, max: 70, encounter: "Elf" },
      { min: 71, max: 80, encounter: "Gnome" },
      { min: 81, max: 100, encounter: "Halfling" }
    ],
    "scrub": [
      { min: 1, max: 5, encounter: "Dwarf" },
      { min: 6, max: 60, encounter: "Elf" },
      { min: 61, max: 80, encounter: "Gnome" },
      { min: 81, max: 100, encounter: "Halfling" }
    ],
    // Add other terrain types
  };
  
  export const DRAGON_SUBTABLE = {
    "plain": [
      { min: 1, max: 2, encounter: "Black Dragon" },
      { min: 3, max: 4, encounter: "Blue Dragon" },
      { min: 5, max: 6, encounter: "Brass Dragon" },
      { min: 7, max: 8, encounter: "Bronze Dragon" },
      { min: 9, max: 10, encounter: "Chimera" },
      { min: 11, max: 12, encounter: "Copper Dragon" },
      { min: 13, max: 28, encounter: "Gold Dragon" },
      { min: 29, max: 30, encounter: "Green Dragon" },
      { min: 31, max: 32, encounter: "Red Dragon" },
      { min: 33, max: 34, encounter: "White Dragon" },
      { min: 35, max: 100, encounter: "Wyvern" }
    ],
    // Add other terrain types
  };
  
  export const GIANT_SUBTABLE = {
    "plain": [
      { min: 1, max: 2, encounter: "Cloud Giant" },
      { min: 3, max: 4, encounter: "Ettin" },
      { min: 5, max: 6, encounter: "Fire Giant" },
      { min: 7, max: 8, encounter: "Frost Giant" },
      { min: 9, max: 95, encounter: "Hill Giant" },
      { min: 96, max: 98, encounter: "Stone Giant" },
      { min: 99, max: 99, encounter: "Storm Giant" },
      { min: 100, max: 100, encounter: "Titan" }
    ],
    // Add other terrain types
  };
  
  export const HUMANOID_SUBTABLE = {
    "plain": [
      { min: 1, max: 5, encounter: "Gnoll" },
      { min: 6, max: 10, encounter: "Goblin" },
      { min: 11, max: 15, encounter: "Hobgoblin" },
      { min: 16, max: 100, encounter: "Orc" }
    ],
    // Add other terrain types
  };
  
  export const MEN_SUBTABLE = {
    "plain": [
      { min: 1, max: 5, encounter: "Bandit" },
      { min: 6, max: 7, encounter: "Berserker" },
      { min: 8, max: 10, encounter: "Brigand" },
      { min: 23, max: 60, encounter: "Merchant" },
      { min: 61, max: 90, encounter: "Nomad" },
      { min: 91, max: 95, encounter: "Pilgrim" },
      { min: 96, max: 100, encounter: "Tribesman" }
    ],
    // Add other terrain types
  };
  
  // Add these level-specific dragon subtables to your dmg-dungeon-tables.js file

export const DRAGON_SUBTABLE_LEVEL3 = [
  { min: 1, max: 28, encounter: "Black Dragon", number: "1", notes: "Very young (1 hp/die)" },
  { min: 29, max: 62, encounter: "Brass Dragon", number: "1", notes: "Very young (1 hp/die)" },
  { min: 63, max: 100, encounter: "White Dragon", number: "1", notes: "Very young (1 hp/die)" }
];

export const DRAGON_SUBTABLE_LEVEL4 = [
  { min: 1, max: 9, encounter: "Black Dragon", number: "1", notes: "Young/sub-adult (2/3 hp/die)" },
  { min: 10, max: 20, encounter: "Blue Dragon", number: "1", notes: "Very young/young (1/2 hp/die)" },
  { min: 21, max: 30, encounter: "Brass Dragon", number: "1", notes: "Young/sub-adult (2/3 hp/die)" },
  { min: 31, max: 37, encounter: "Bronze Dragon", number: "1", notes: "Very young/young (1/2 hp/die)" },
  { min: 38, max: 50, encounter: "Copper Dragon", number: "1", notes: "Very young/young (1/2 hp/die)" },
  { min: 51, max: 54, encounter: "Gold Dragon", number: "1", notes: "Very young/young (1/2 hp/die)" },
  { min: 55, max: 70, encounter: "Green Dragon", number: "1", notes: "Very young/young (1/2 hp/die)" },
  { min: 71, max: 80, encounter: "Red Dragon", number: "1", notes: "Very young/young (1/2 hp/die)" },
  { min: 81, max: 88, encounter: "Silver Dragon", number: "1", notes: "Very young/young (1/2 hp/die)" },
  { min: 89, max: 100, encounter: "White Dragon", number: "1", notes: "Young/sub-adult (2/3 hp/die)" }
];

export const DRAGON_SUBTABLE_LEVEL5 = [
  { min: 1, max: 8, encounter: "Black Dragon", number: "1", notes: "Young adult/adult (4/5 hp/die)" },
  { min: 9, max: 20, encounter: "Blue Dragon", number: "1", notes: "Sub-adult/young adult (3/4 hp/die)" },
  { min: 21, max: 30, encounter: "Brass Dragon", number: "1", notes: "Young adult/adult (4/5 hp/die)" },
  { min: 31, max: 37, encounter: "Bronze Dragon", number: "1", notes: "Sub-adult/young adult (3/4 hp/die)" },
  { min: 38, max: 50, encounter: "Copper Dragon", number: "1", notes: "Sub-adult/young adult (3/4 hp/die)" },
  { min: 51, max: 54, encounter: "Gold Dragon", number: "1", notes: "Sub-adult/young adult (3/4 hp/die)" },
  { min: 55, max: 70, encounter: "Green Dragon", number: "1", notes: "Sub-adult/young adult (3/4 hp/die)" },
  { min: 71, max: 80, encounter: "Red Dragon", number: "1", notes: "Sub-adult/young adult (3/4 hp/die)" },
  { min: 81, max: 88, encounter: "Silver Dragon", number: "1", notes: "Sub-adult/young adult (3/4 hp/die)" },
  { min: 89, max: 100, encounter: "White Dragon", number: "1", notes: "Young adult/adult (4/5 hp/die)" }
];

export const DRAGON_SUBTABLE_LEVEL6 = [
  { min: 1, max: 8, encounter: "Black Dragon", number: "1", notes: "Old (6 hp/die)" },
  { min: 9, max: 19, encounter: "Blue Dragon", number: "1", notes: "Adult (5 hp/die)" },
  { min: 20, max: 29, encounter: "Brass Dragon", number: "1", notes: "Old (6 hp/die)" },
  { min: 30, max: 36, encounter: "Bronze Dragon", number: "1", notes: "Adult (5 hp/die)" },
  { min: 37, max: 48, encounter: "Copper Dragon", number: "1", notes: "Adult (5 hp/die)" },
  { min: 49, max: 52, encounter: "Gold Dragon", number: "1", notes: "Adult (5 hp/die)" },
  { min: 53, max: 65, encounter: "Green Dragon", number: "1", notes: "Adult (5 hp/die)" },
  { min: 66, max: 78, encounter: "Red Dragon", number: "1", notes: "Adult (5 hp/die)" },
  { min: 79, max: 87, encounter: "Silver Dragon", number: "1", notes: "Adult (5 hp/die)" },
  { min: 88, max: 100, encounter: "White Dragon", number: "1", notes: "Old (6 hp/die)" }
];

export const DRAGON_SUBTABLE_LEVEL7 = [
  { min: 1, max: 10, encounter: "Black Dragon", number: "1", notes: "Very old (7 hp/die)" },
  { min: 11, max: 21, encounter: "Blue Dragon", number: "1", notes: "Old (6 hp/die)" },
  { min: 22, max: 29, encounter: "Brass Dragon", number: "1", notes: "Very old (7 hp/die)" },
  { min: 30, max: 36, encounter: "Bronze Dragon", number: "1", notes: "Old (6 hp/die)" },
  { min: 37, max: 48, encounter: "Copper Dragon", number: "1", notes: "Old (6 hp/die)" },
  { min: 49, max: 52, encounter: "Gold Dragon", number: "1", notes: "Old (6 hp/die)" },
  { min: 53, max: 66, encounter: "Green Dragon", number: "1", notes: "Old (6 hp/die)" },
  { min: 67, max: 80, encounter: "Red Dragon", number: "1", notes: "Old (6 hp/die)" },
  { min: 81, max: 87, encounter: "Silver Dragon", number: "1", notes: "Old (6 hp/die)" },
  { min: 88, max: 100, encounter: "White Dragon", number: "1", notes: "Very old (7 hp/die)" }
];

export const DRAGON_SUBTABLE_LEVEL8 = [
  { min: 1, max: 13, encounter: "Black Dragon", number: "1", notes: "Ancient (8 hp/die)" },
  { min: 14, max: 24, encounter: "Blue Dragon", number: "1", notes: "Very old (7 hp/die)" },
  { min: 25, max: 31, encounter: "Brass Dragon", number: "1", notes: "Ancient (8 hp/die)" },
  { min: 32, max: 35, encounter: "Bronze Dragon", number: "1", notes: "Very old (7 hp/die)" },
  { min: 36, max: 43, encounter: "Copper Dragon", number: "1", notes: "Very old (7 hp/die)" },
  { min: 44, max: 47, encounter: "Gold Dragon", number: "1", notes: "Very old (7 hp/die)" },
  { min: 48, max: 62, encounter: "Green Dragon", number: "1", notes: "Very old (7 hp/die)" },
  { min: 63, max: 78, encounter: "Red Dragon", number: "1", notes: "Very old (7 hp/die)" },
  { min: 79, max: 82, encounter: "Silver Dragon", number: "1", notes: "Very old (7 hp/die)" },
  { min: 83, max: 100, encounter: "White Dragon", number: "1", notes: "Ancient (8 hp/die)" }
];

export const DRAGON_SUBTABLE_LEVEL9 = [
  { min: 1, max: 10, encounter: "Black Dragon", number: "2", notes: "Ancient & Old (8 & 6 hp/die)" },
  { min: 11, max: 22, encounter: "Blue Dragon", number: "1", notes: "Ancient (8 hp/die)" },
  { min: 23, max: 31, encounter: "Brass Dragon", number: "2", notes: "Ancient & Old (8 & 6 hp/die)" },
  { min: 32, max: 34, encounter: "Bronze Dragon", number: "1", notes: "Ancient (8 hp/die)" },
  { min: 35, max: 42, encounter: "Copper Dragon", number: "1", notes: "Ancient (8 hp/die)" },
  { min: 43, max: 46, encounter: "Gold Dragon", number: "1", notes: "Ancient (8 hp/die)" },
  { min: 47, max: 62, encounter: "Green Dragon", number: "1", notes: "Ancient (8 hp/die)" },
  { min: 63, max: 78, encounter: "Red Dragon", number: "1", notes: "Ancient (8 hp/die)" },
  { min: 79, max: 82, encounter: "Silver Dragon", number: "1", notes: "Ancient (8 hp/die)" },
  { min: 83, max: 100, encounter: "White Dragon", number: "2", notes: "Ancient & Very old (8 & 7 hp/die)" }
];

export const DRAGON_SUBTABLE_LEVEL10 = [
  { min: 1, max: 20, encounter: "Blue Dragon", number: "2", notes: "Ancient & Very old (8 & 7 hp/die)" },
  { min: 21, max: 26, encounter: "Bronze Dragon", number: "2", notes: "Ancient & Very old (8 & 7 hp/die)" },
  { min: 27, max: 33, encounter: "Copper Dragon", number: "2", notes: "Ancient & Very old (8 & 7 hp/die)" },
  { min: 34, max: 35, encounter: "Chromatic Dragon (Tiamat)", number: "1", notes: "Unique" },
  { min: 36, max: 40, encounter: "Gold Dragon", number: "2", notes: "Ancient & Old (8 & 6 hp/die)" },
  { min: 41, max: 60, encounter: "Green Dragon", number: "2", notes: "Ancient & Very old (8 & 7 hp/die)" },
  { min: 61, max: 63, encounter: "Platinum Dragon (Bahamut)", number: "1", notes: "Unique" },
  { min: 64, max: 94, encounter: "Red Dragon", number: "2", notes: "Ancient & Old (8 & 6 hp/die)" },
  { min: 95, max: 100, encounter: "Silver Dragon", number: "2", notes: "Ancient & Old (8 & 6 hp/die)" }
];

  // Add additional subtables as needed
  
  export default {
    DEMI_HUMAN_SUBTABLE,
    DRAGON_SUBTABLE,
    DRAGON_SUBTABLE_LEVEL3,
    DRAGON_SUBTABLE_LEVEL4,
    DRAGON_SUBTABLE_LEVEL5,
    DRAGON_SUBTABLE_LEVEL6,
    DRAGON_SUBTABLE_LEVEL7,
    DRAGON_SUBTABLE_LEVEL8,
    DRAGON_SUBTABLE_LEVEL9,
    DRAGON_SUBTABLE_LEVEL10,
    GIANT_SUBTABLE,
    HUMANOID_SUBTABLE,
    MEN_SUBTABLE
  };