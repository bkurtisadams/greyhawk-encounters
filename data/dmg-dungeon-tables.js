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
  
  // Add additional subtables as needed
  
  export default {
    DEMI_HUMAN_SUBTABLE,
    DRAGON_SUBTABLE,
    GIANT_SUBTABLE,
    HUMANOID_SUBTABLE,
    MEN_SUBTABLE
    // Add additional exports as needed
  };