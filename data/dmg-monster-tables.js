// Exports DMG Appendix C Monster Level Tables
export const DMG_MONSTER_LEVEL_TABLES = {
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
    
    // Add additional monster level tables as needed
  };
  
  // Human Subtable for Monster Level I
  export const DMG_HUMAN_SUBTABLE = [
    { min: 1, max: 25, encounter: "Bandit", number: "5-15", notes: "Upper level leaders not with groups under 30" },
    { min: 26, max: 30, encounter: "Berserker", number: "3-9", notes: "Upper level leaders not with groups under 30" },
    { min: 31, max: 45, encounter: "Brigand", number: "5-15", notes: "Upper level leaders not with groups under 30" },
    { min: 46, max: 100, encounter: "Character", subtable: "character" }
  ];
  
  // Character Subtable
  export const DMG_CHARACTER_SUBTABLE = [
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
  export const DMG_DUNGEON_MONSTER_LEVEL_MATRIX = {
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
    
    // Add remaining dungeon levels
  };
  
  // Export all in a default object for easier importing
  export default {
    DMG_MONSTER_LEVEL_TABLES,
    DMG_HUMAN_SUBTABLE,
    DMG_CHARACTER_SUBTABLE,
    DMG_DUNGEON_MONSTER_LEVEL_MATRIX
  };