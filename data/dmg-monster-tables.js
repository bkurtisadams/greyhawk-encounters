// dmg-monster-tables.js
import { rollNumberFromPattern } from '../utils/utility.js';

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

    // Monster Level III Table
3: [
    { min: 1, max: 10, monster: "Beetle, boring", number: "1-3" },
    { min: 11, max: 20, monster: "Bugbear", number: "2-7" },
    { min: 21, max: 30, monster: "Character", subtable: "character" },
    { min: 31, max: 32, monster: "Dragon", subtable: "dragon_level3", number: "1" },
    { min: 33, max: 34, monster: "Fungi, violet", number: "1-3" },
    { min: 35, max: 40, monster: "Gelatinous cube", number: "1" },
    { min: 41, max: 45, monster: "Ghoul", number: "1-4" },
    { min: 46, max: 50, monster: "Lizard, giant", number: "1-3" },
    { min: 51, max: 54, monster: "Lycanthrope, wererat", number: "2-5" },
    { min: 55, max: 60, monster: "Ochre jelly", number: "1" },
    { min: 61, max: 72, monster: "Ogre", number: "1-3" },
    { min: 73, max: 74, monster: "Piercer", number: "2-5" },
    { min: 75, max: 75, monster: "Rot grub", number: "1-4" },
    { min: 76, max: 77, monster: "Shrieker", number: "2-5" },
    { min: 78, max: 84, monster: "Spider, huge", number: "1-3" },
    { min: 85, max: 93, monster: "Spider, large", number: "2-5" },
    { min: 94, max: 95, monster: "Tick, giant", number: "1-3" },
    { min: 96, max: 100, monster: "Weasel, giant", number: "1-4" }
  ],
  
  // Dragon Subtable for Monster Level III
  // This should be placed in a separate object for dragon subtables
  dragon_level3: [
    { min: 1, max: 28, creature: "Black Dragon", ageCategory: "very young", hitPointsPerDie: "1" },
    { min: 29, max: 62, creature: "Brass Dragon", ageCategory: "very young", hitPointsPerDie: "1" },
    { min: 63, max: 100, creature: "White Dragon", ageCategory: "very young", hitPointsPerDie: "1" }
  ],

  // Monster Level IV Table
4: [
    { min: 1, max: 8, monster: "Ape, carnivorous", number: "1-3" },
    { min: 9, max: 14, monster: "Blink dog", number: "2-5" },
    { min: 15, max: 22, monster: "Character", subtable: "character" },
    { min: 23, max: 24, monster: "Dragon", subtable: "dragon_level4", number: "1" },
    { min: 25, max: 30, monster: "Gargoyle", number: "1-2" },
    { min: 31, max: 36, monster: "Ghast", number: "1-4" },
    { min: 37, max: 40, monster: "Gray ooze", number: "1" },
    { min: 41, max: 44, monster: "Hell hound", number: "1-2" },
    { min: 45, max: 47, monster: "Hydra, 5 or 6 heads", number: "1" },
    { min: 48, max: 48, monster: "Hydra, pyro-, 5 heads", number: "1" },
    { min: 49, max: 62, monster: "Lycanthrope, werewolf", number: "1-2" },
    { min: 63, max: 75, monster: "Mold, yellow", number: "" },
    { min: 76, max: 78, monster: "Owlbear", number: "1-2" },
    { min: 79, max: 79, monster: "Rust monster", number: "1" },
    { min: 80, max: 82, monster: "Shadow", number: "1-3" },
    { min: 83, max: 90, monster: "Snake, giant, constrictor", number: "1" },
    { min: 91, max: 94, monster: "Su-monster", number: "1-2" },
    { min: 95, max: 96, monster: "Toad, ice", number: "1" },
    { min: 97, max: 100, monster: "Toad, poisonous", number: "1-3" }
  ],
  
  // Dragon Subtable for Monster Level IV
  dragon_level4: [
    { min: 1, max: 9, creature: "Black Dragon", ageCategory: "young/sub-adult", hitPointsPerDie: "2/3" },
    { min: 10, max: 20, creature: "Blue Dragon", ageCategory: "very young/young", hitPointsPerDie: "1/2" },
    { min: 21, max: 30, creature: "Brass Dragon", ageCategory: "young/sub-adult", hitPointsPerDie: "2/3" },
    { min: 31, max: 37, creature: "Bronze Dragon", ageCategory: "very young/young", hitPointsPerDie: "1/2" },
    { min: 38, max: 50, creature: "Copper Dragon", ageCategory: "very young/young", hitPointsPerDie: "1/2" },
    { min: 51, max: 54, creature: "Gold Dragon", ageCategory: "very young/young", hitPointsPerDie: "1/2" },
    { min: 55, max: 70, creature: "Green Dragon", ageCategory: "very young/young", hitPointsPerDie: "1/2" },
    { min: 71, max: 80, creature: "Red Dragon", ageCategory: "very young/young", hitPointsPerDie: "1/2" },
    { min: 81, max: 88, creature: "Silver Dragon", ageCategory: "very young/young", hitPointsPerDie: "1/2" },
    { min: 89, max: 100, creature: "White Dragon", ageCategory: "young/sub-adult", hitPointsPerDie: "2/3" }
  ],

  // Monster Level V Table
5: [
  { min: 1, max: 8, monster: "Character", subtable: "character" },
  { min: 9, max: 15, monster: "Cockatrice", number: "1-2" },
  { min: 16, max: 18, monster: "Displacer beast", number: "1-2" },
  { min: 19, max: 22, monster: "Doppleganger", number: "1-3" },
  { min: 23, max: 24, monster: "Dragon", subtable: "dragon_level5", number: "1" },
  { min: 25, max: 26, monster: "Hydra, 7 heads", number: "1" },
  { min: 27, max: 27, monster: "Hydra, pyro-, 6 heads", number: "1" },
  { min: 28, max: 28, monster: "Imp", number: "1-2" },
  { min: 29, max: 31, monster: "Leucrotta", number: "1-2" },
  { min: 32, max: 50, monster: "Lizard, subterranean", number: "1-3" },
  { min: 51, max: 52, monster: "Lycanthrope, wereboar", number: "1-3" },
  { min: 53, max: 60, monster: "Minotaur", number: "1-3" },
  { min: 61, max: 64, monster: "Mold, yellow", number: "" },
  { min: 65, max: 65, monster: "Quasit", number: "1" },
  { min: 66, max: 67, monster: "Rust Monster", number: "1" },
  { min: 68, max: 70, monster: "Shrieker", number: "2-5" },
  { min: 71, max: 72, monster: "Slithering Tracker", number: "1" },
  { min: 73, max: 74, monster: "Snake, giant, amphisbaena", number: "1" },
  { min: 75, max: 82, monster: "Snake, giant, poisonous", number: "1" },
  { min: 83, max: 86, monster: "Snake, giant, spitting", number: "1" },
  { min: 87, max: 100, monster: "Spider, giant", number: "1-2" }
],

// Dragon Subtable for Monster Level V
dragon_level5: [
  { min: 1, max: 8, creature: "Black Dragon", ageCategory: "young adult/adult", hitPointsPerDie: "4/5" },
  { min: 9, max: 20, creature: "Blue Dragon", ageCategory: "sub-adult/young adult", hitPointsPerDie: "3/4" },
  { min: 21, max: 30, creature: "Brass Dragon", ageCategory: "young adult/adult", hitPointsPerDie: "4/5" },
  { min: 31, max: 37, creature: "Bronze Dragon", ageCategory: "sub-adult/young adult", hitPointsPerDie: "3/4" },
  { min: 38, max: 50, creature: "Copper Dragon", ageCategory: "sub-adult/young adult", hitPointsPerDie: "3/4" },
  { min: 51, max: 54, creature: "Gold Dragon", ageCategory: "sub-adult/young adult", hitPointsPerDie: "3/4" },
  { min: 55, max: 70, creature: "Green Dragon", ageCategory: "sub-adult/young adult", hitPointsPerDie: "3/4" },
  { min: 71, max: 80, creature: "Red Dragon", ageCategory: "sub-adult/young adult", hitPointsPerDie: "3/4" },
  { min: 81, max: 88, creature: "Silver Dragon", ageCategory: "sub-adult/young adult", hitPointsPerDie: "3/4" },
  { min: 89, max: 100, creature: "White Dragon", ageCategory: "young adult/adult", hitPointsPerDie: "4/5" }
],

// Monster Level VI Table
6: [
    { min: 1, max: 3, monster: "Basilisk", number: "1" },
    { min: 4, max: 10, monster: "Carrion crawler", number: "1-2" },
    { min: 11, max: 16, monster: "Character", subtable: "character" },
    { min: 17, max: 17, monster: "Devil, erinyes", number: "1-2" },
    { min: 18, max: 19, monster: "Djinni", number: "1" },
    { min: 20, max: 21, monster: "Dragon", subtable: "dragon_level6", number: "1" },
    { min: 22, max: 25, monster: "Green slime", number: "" },
    { min: 26, max: 28, monster: "Hydra, 8-9 heads", number: "1" },
    { min: 29, max: 32, monster: "Jackalwere", number: "1-2" },
    { min: 33, max: 36, monster: "Lammasu", number: "1-3" },
    { min: 37, max: 38, monster: "Lycanthrope, werebear", number: "1" },
    { min: 39, max: 41, monster: "Lycanthrope, weretiger", number: "1-2" },
    { min: 42, max: 50, monster: "Manticore", number: "1-2" },
    { min: 51, max: 55, monster: "Medusa", number: "1" },
    { min: 56, max: 56, monster: "Mold, brown", number: "" },
    { min: 57, max: 58, monster: "Mold, yellow", number: "" },
    { min: 59, max: 60, monster: "Ogre magi", number: "1-2" },
    { min: 61, max: 68, monster: "Otyugh", number: "1" },
    { min: 69, max: 70, monster: "Rakshasa", number: "1" },
    { min: 71, max: 73, monster: "Salamander", number: "1-2" },
    { min: 74, max: 77, monster: "Spider, phase", number: "1-3" },
    { min: 78, max: 88, monster: "Troll", number: "1-3" },
    { min: 89, max: 93, monster: "Wight", number: "1-4" },
    { min: 94, max: 95, monster: "Wind walker", number: "1-2" },
    { min: 96, max: 98, monster: "Wraith", number: "1-2" },
    { min: 99, max: 100, monster: "Wyvern", number: "1" }
  ],
  
  // Dragon Subtable for Monster Level VI
  dragon_level6: [
    { min: 1, max: 8, creature: "Black Dragon", ageCategory: "old", hitPointsPerDie: "6" },
    { min: 9, max: 19, creature: "Blue Dragon", ageCategory: "adult", hitPointsPerDie: "5" },
    { min: 20, max: 29, creature: "Brass Dragon", ageCategory: "old", hitPointsPerDie: "6" },
    { min: 30, max: 36, creature: "Bronze Dragon", ageCategory: "adult", hitPointsPerDie: "5" },
    { min: 37, max: 48, creature: "Copper Dragon", ageCategory: "adult", hitPointsPerDie: "5" },
    { min: 49, max: 52, creature: "Gold Dragon", ageCategory: "adult", hitPointsPerDie: "5" },
    { min: 53, max: 65, creature: "Green Dragon", ageCategory: "adult", hitPointsPerDie: "5" },
    { min: 66, max: 78, creature: "Red Dragon", ageCategory: "adult", hitPointsPerDie: "5" },
    { min: 79, max: 87, creature: "Silver Dragon", ageCategory: "adult", hitPointsPerDie: "5" },
    { min: 88, max: 100, creature: "White Dragon", ageCategory: "old", hitPointsPerDie: "6" }
  ],

  // Monster Level VII Table
7: [
    { min: 1, max: 5, monster: "Black pudding", number: "1" },
    { min: 6, max: 10, monster: "Character", subtable: "character" },
    { min: 11, max: 14, monster: "Chimera", number: "1-2" },
    { min: 15, max: 15, monster: "Demon, succubus", number: "1" },
    { min: 16, max: 16, monster: "Demon, type I", number: "1" },
    { min: 17, max: 17, monster: "Demon, type II", number: "1" },
    { min: 18, max: 18, monster: "Demon, type III", number: "1" },
    { min: 19, max: 19, monster: "Devil, barbed", number: "1" },
    { min: 20, max: 20, monster: "Devil, bone", number: "1" },
    { min: 21, max: 21, monster: "Devil, horned", number: "1" },
    { min: 22, max: 23, monster: "Dragon", subtable: "dragon_level7", number: "1" },
    { min: 24, max: 24, monster: "Efreeti", number: "1" },
    { min: 25, max: 26, monster: "Elemental", number: "1", notes: "Choose, or use equal probabilities as applicable." },
    { min: 27, max: 30, monster: "Ettin", number: "1-2" },
    { min: 31, max: 35, monster: "Giant, hill or stone", number: "1-3" },
    { min: 36, max: 38, monster: "Giant, fire or frost", number: "1-2" },
    { min: 39, max: 39, monster: "Golem, flesh", number: "1" },
    { min: 40, max: 41, monster: "Gorgon", number: "1" },
    { min: 42, max: 43, monster: "Groaning spirit", number: "1" },
    { min: 44, max: 46, monster: "Hydra, 10-12 heads", number: "1" },
    { min: 47, max: 47, monster: "Hydra, pyro-, 7-9 heads", number: "1" },
    { min: 48, max: 49, monster: "Intellect devourer", number: "1" },
    { min: 50, max: 50, monster: "Invisible stalker", number: "1" },
    { min: 51, max: 52, monster: "Lamia", number: "1-2" },
    { min: 53, max: 56, monster: "Lizard, fire", number: "1-3" },
    { min: 57, max: 59, monster: "Lurker above", number: "1" },
    { min: 60, max: 60, monster: "Mezzodaemon", number: "1" },
    { min: 61, max: 63, monster: "Mimic", number: "1" },
    { min: 64, max: 65, monster: "Mind flayer", number: "1-2" },
    { min: 66, max: 69, monster: "Mummy", number: "1-2" },
    { min: 70, max: 70, monster: "Naga, spirit", number: "1-2" },
    { min: 71, max: 73, monster: "Neo-otyugh", number: "1" },
    { min: 74, max: 74, monster: "Night hag", number: "1-2" },
    { min: 75, max: 78, monster: "Roper", number: "1-2" },
    { min: 79, max: 82, monster: "Shambling mound", number: "1-2" },
    { min: 83, max: 86, monster: "Shedu", number: "1-2" },
    { min: 87, max: 87, monster: "Slug, giant", number: "1" },
    { min: 88, max: 91, monster: "Spectre", number: "1" },
    { min: 92, max: 93, monster: "Trapper", number: "1" },
    { min: 94, max: 95, monster: "Umber hulk", number: "1" },
    { min: 96, max: 97, monster: "Will-o-wisp", number: "1-3" },
    { min: 98, max: 100, monster: "Xorn", number: "1-3" }
  ],
  
  // Dragon Subtable for Monster Level VII
  dragon_level7: [
    { min: 1, max: 10, creature: "Black Dragon", ageCategory: "very old", hitPointsPerDie: "7" },
    { min: 11, max: 21, creature: "Blue Dragon", ageCategory: "old", hitPointsPerDie: "6" },
    { min: 22, max: 29, creature: "Brass Dragon", ageCategory: "very old", hitPointsPerDie: "7" },
    { min: 30, max: 36, creature: "Bronze Dragon", ageCategory: "old", hitPointsPerDie: "6" },
    { min: 37, max: 48, creature: "Copper Dragon", ageCategory: "old", hitPointsPerDie: "6" },
    { min: 49, max: 52, creature: "Gold Dragon", ageCategory: "old", hitPointsPerDie: "6" },
    { min: 53, max: 66, creature: "Green Dragon", ageCategory: "old", hitPointsPerDie: "6" },
    { min: 67, max: 80, creature: "Red Dragon", ageCategory: "old", hitPointsPerDie: "6" },
    { min: 81, max: 87, creature: "Silver Dragon", ageCategory: "old", hitPointsPerDie: "6" },
    { min: 88, max: 100, creature: "White Dragon", ageCategory: "very old", hitPointsPerDie: "7" }
  ],

  // Monster Level VIII Table
8: [
    { min: 1, max: 1, monster: "Aerial servant", number: "1" },
    { min: 2, max: 6, monster: "Character", subtable: "character" },
    { min: 7, max: 7, monster: "Demon, type IV", number: "1" },
    { min: 8, max: 8, monster: "Demon, type V", number: "1" },
    { min: 9, max: 9, monster: "Demon, type VI", number: "1" },
    { min: 10, max: 10, monster: "Devil, ice", number: "1" },
    { min: 11, max: 12, monster: "Dragon", subtable: "dragon_level8", number: "1" },
    { min: 13, max: 17, monster: "Ghost", number: "1" },
    { min: 18, max: 21, monster: "Giant, cloud", number: "1-2" },
    { min: 22, max: 23, monster: "Golem, clay", number: "1" },
    { min: 24, max: 26, monster: "Hydra, 13-16 heads", number: "1" },
    { min: 27, max: 27, monster: "Hydra, pyro-, 12 heads", number: "1" },
    { min: 28, max: 29, monster: "Intellect devourer", number: "1-2" },
    { min: 30, max: 35, monster: "Lurker above", number: "1" },
    { min: 36, max: 41, monster: "Mold, brown", number: "" },
    { min: 42, max: 43, monster: "Mold, yellow", number: "" },
    { min: 44, max: 47, monster: "Mind flayer", number: "1-4" },
    { min: 48, max: 50, monster: "Naga, guardian", number: "1-2" },
    { min: 51, max: 56, monster: "Neo-otyugh", number: "1" },
    { min: 57, max: 64, monster: "Purple worm", number: "1" },
    { min: 65, max: 69, monster: "Rust monster", number: "1" },
    { min: 70, max: 73, monster: "Slug, giant", number: "1" },
    { min: 74, max: 78, monster: "Trapper", number: "1" },
    { min: 79, max: 86, monster: "Vampire", number: "1" },
    { min: 87, max: 92, monster: "Will-o-wisp", number: "2-5" },
    { min: 93, max: 100, monster: "Xorn", number: "2-5" }
  ],
  
  // Dragon Subtable for Monster Level VIII
  dragon_level8: [
    { min: 1, max: 13, creature: "Black Dragon", ageCategory: "ancient", hitPointsPerDie: "8" },
    { min: 14, max: 24, creature: "Blue Dragon", ageCategory: "very old", hitPointsPerDie: "7" },
    { min: 25, max: 31, creature: "Brass Dragon", ageCategory: "ancient", hitPointsPerDie: "8" },
    { min: 32, max: 35, creature: "Bronze Dragon", ageCategory: "very old", hitPointsPerDie: "7" },
    { min: 36, max: 43, creature: "Copper Dragon", ageCategory: "very old", hitPointsPerDie: "7" },
    { min: 44, max: 47, creature: "Gold Dragon", ageCategory: "very old", hitPointsPerDie: "7" },
    { min: 48, max: 62, creature: "Green Dragon", ageCategory: "very old", hitPointsPerDie: "7" },
    { min: 63, max: 78, creature: "Red Dragon", ageCategory: "very old", hitPointsPerDie: "7" },
    { min: 79, max: 82, creature: "Silver Dragon", ageCategory: "very old", hitPointsPerDie: "7" },
    { min: 83, max: 100, creature: "White Dragon", ageCategory: "ancient", hitPointsPerDie: "8" }
  ],

  // Monster Level IX Table
9: [
    { min: 1, max: 9, monster: "Character", subtable: "character" },
    { min: 10, max: 12, monster: "Devil, pit fiend", number: "1" },
    { min: 13, max: 15, monster: "Dragon", subtable: "dragon_level9", number: "1-2" },
    { min: 16, max: 21, monster: "Giant, storm", number: "1-2" },
    { min: 22, max: 23, monster: "Golem, stone", number: "1" },
    { min: 24, max: 30, monster: "Hydra, 17-20 heads", number: "1" },
    { min: 31, max: 33, monster: "Hydra, pyro-, 12 heads", number: "1" },
    { min: 34, max: 40, monster: "Mold, brown", number: "1" },
    { min: 41, max: 50, monster: "Mold, yellow", number: "1" },
    { min: 51, max: 52, monster: "Nycadaemon", number: "1" },
    { min: 53, max: 64, monster: "Purple worm", number: "1" },
    { min: 65, max: 67, monster: "Rust monster", number: "1" },
    { min: 68, max: 69, monster: "Titan, lesser", number: "1" },
    { min: 70, max: 73, monster: "Titan, minor", number: "1" },
    { min: 74, max: 80, monster: "Umber Hulk", number: "1-4" },
    { min: 81, max: 83, monster: "Vampire", number: "1", notes: "Former cleric, with full powers, of 7th - 10th level." },
    { min: 84, max: 93, monster: "Will-o-wisp", number: "2-5" },
    { min: 94, max: 100, monster: "Xorn", number: "2-9" }
  ],
  
  // Dragon Subtable for Monster Level IX
  dragon_level9: [
    { min: 1, max: 10, creature: "Black Dragon", ageCategory: "ancient & old", hitPointsPerDie: "8 & 6", number: "2" },
    { min: 11, max: 22, creature: "Blue Dragon", ageCategory: "ancient", hitPointsPerDie: "8" },
    { min: 23, max: 31, creature: "Brass Dragon", ageCategory: "ancient & old", hitPointsPerDie: "8 & 6", number: "2" },
    { min: 32, max: 34, creature: "Bronze Dragon", ageCategory: "ancient", hitPointsPerDie: "8" },
    { min: 35, max: 42, creature: "Copper Dragon", ageCategory: "ancient", hitPointsPerDie: "8" },
    { min: 43, max: 46, creature: "Gold Dragon", ageCategory: "ancient", hitPointsPerDie: "8" },
    { min: 47, max: 62, creature: "Green Dragon", ageCategory: "ancient", hitPointsPerDie: "8" },
    { min: 63, max: 78, creature: "Red Dragon", ageCategory: "ancient", hitPointsPerDie: "8" },
    { min: 79, max: 82, creature: "Silver Dragon", ageCategory: "ancient", hitPointsPerDie: "8" },
    { min: 83, max: 100, creature: "White Dragon", ageCategory: "ancient & very old", hitPointsPerDie: "8 & 7", number: "2" }
  ],

  // Monster Level X Table
10: [
    { min: 1, max: 12, monster: "Beholder", number: "1" },
    { min: 13, max: 20, monster: "Character", subtable: "character" },
    { min: 21, max: 28, monster: "Demon, prince", number: "1", notes: "Select one or find randomly." },
    { min: 29, max: 30, monster: "Devil, arch-", number: "1", notes: "Select one or find randomly." },
    { min: 31, max: 40, monster: "Dragon", subtable: "dragon_level10", number: "1-2" },
    { min: 41, max: 50, monster: "Golem, iron", number: "1" },
    { min: 51, max: 60, monster: "Lich", number: "1" },
    { min: 61, max: 70, monster: "Titan, elder", number: "1" },
    { min: 71, max: 80, monster: "Vampire", number: "1", notes: "Former magic-user, with full powers, of 9th - 12th level." },
    { min: 81, max: 100, monster: "NO ENCOUNTER", number: "" }
  ],
  
  // Dragon Subtable for Monster Level X
  dragon_level10: [
    { min: 1, max: 20, creature: "Blue Dragon", ageCategory: "ancient & very old", hitPointsPerDie: "8 & 7", number: "2" },
    { min: 21, max: 26, creature: "Bronze Dragon", ageCategory: "ancient & very old", hitPointsPerDie: "8 & 7", number: "2" },
    { min: 27, max: 33, creature: "Copper Dragon", ageCategory: "ancient & very old", hitPointsPerDie: "8 & 7", number: "2" },
    { min: 34, max: 35, creature: "Chromatic Dragon (Tiamat)", number: "1" },
    { min: 36, max: 40, creature: "Gold Dragon", ageCategory: "ancient & old", hitPointsPerDie: "8 & 6", number: "2" },
    { min: 41, max: 60, creature: "Green Dragon", ageCategory: "ancient & very old", hitPointsPerDie: "8 & 7", number: "2" },
    { min: 61, max: 63, creature: "Platinum Dragon (Bahamut)", number: "1" },
    { min: 64, max: 94, creature: "Red Dragon", ageCategory: "ancient & old", hitPointsPerDie: "8 & 6", number: "2" },
    { min: 95, max: 100, creature: "Silver Dragon", ageCategory: "ancient & old", hitPointsPerDie: "8 & 6", number: "2" }
  ]

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
    
    // Dungeon level 4
    4: [
      { min: 1, max: 5, monsterLevel: 1 },
      { min: 6, max: 10, monsterLevel: 2 },
      { min: 11, max: 16, monsterLevel: 3 },
      { min: 17, max: 18, monsterLevel: 4 },
      { min: 19, max: 19, monsterLevel: 5 },
      { min: 20, max: 20, monsterLevel: 6 }
    ],
    
    // Dungeon level 5
    5: [
      { min: 1, max: 3, monsterLevel: 1 },
      { min: 4, max: 6, monsterLevel: 2 },
      { min: 7, max: 12, monsterLevel: 3 },
      { min: 13, max: 16, monsterLevel: 4 },
      { min: 17, max: 18, monsterLevel: 5 },
      { min: 19, max: 19, monsterLevel: 6 },
      { min: 20, max: 20, monsterLevel: 7 }
    ],
    
    // Dungeon level 6
    6: [
      { min: 1, max: 2, monsterLevel: 1 },
      { min: 3, max: 4, monsterLevel: 2 },
      { min: 5, max: 6, monsterLevel: 3 },
      { min: 7, max: 12, monsterLevel: 4 },
      { min: 13, max: 16, monsterLevel: 5 },
      { min: 17, max: 18, monsterLevel: 6 },
      { min: 19, max: 19, monsterLevel: 7 },
      { min: 20, max: 20, monsterLevel: 8 }
    ],
    
    // Dungeon level 7
    7: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 3, monsterLevel: 2 },
      { min: 4, max: 5, monsterLevel: 3 },
      { min: 6, max: 10, monsterLevel: 4 },
      { min: 11, max: 14, monsterLevel: 5 },
      { min: 15, max: 16, monsterLevel: 6 },
      { min: 17, max: 18, monsterLevel: 7 },
      { min: 19, max: 19, monsterLevel: 8 },
      { min: 20, max: 20, monsterLevel: 9 }
    ],
    
    // Dungeon level 8
    8: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 2, monsterLevel: 2 },
      { min: 3, max: 4, monsterLevel: 3 },
      { min: 5, max: 7, monsterLevel: 4 },
      { min: 8, max: 10, monsterLevel: 5 },
      { min: 11, max: 14, monsterLevel: 6 },
      { min: 15, max: 16, monsterLevel: 7 },
      { min: 17, max: 18, monsterLevel: 8 },
      { min: 19, max: 19, monsterLevel: 9 },
      { min: 20, max: 20, monsterLevel: 10 }
    ],
    
    // Dungeon level 9
    9: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 2, monsterLevel: 2 },
      { min: 3, max: 3, monsterLevel: 3 },
      { min: 4, max: 5, monsterLevel: 4 },
      { min: 6, max: 8, monsterLevel: 5 },
      { min: 9, max: 12, monsterLevel: 6 },
      { min: 13, max: 15, monsterLevel: 7 },
      { min: 16, max: 17, monsterLevel: 8 },
      { min: 18, max: 19, monsterLevel: 9 },
      { min: 20, max: 20, monsterLevel: 10 }
    ],
    
    // Dungeon levels 10-11
    10: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 2, monsterLevel: 2 },
      { min: 3, max: 3, monsterLevel: 3 },
      { min: 4, max: 4, monsterLevel: 4 },
      { min: 5, max: 6, monsterLevel: 5 },
      { min: 7, max: 9, monsterLevel: 6 },
      { min: 10, max: 12, monsterLevel: 7 },
      { min: 13, max: 16, monsterLevel: 8 },
      { min: 17, max: 19, monsterLevel: 9 },
      { min: 20, max: 20, monsterLevel: 10 }
    ],
    11: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 2, monsterLevel: 2 },
      { min: 3, max: 3, monsterLevel: 3 },
      { min: 4, max: 4, monsterLevel: 4 },
      { min: 5, max: 6, monsterLevel: 5 },
      { min: 7, max: 9, monsterLevel: 6 },
      { min: 10, max: 12, monsterLevel: 7 },
      { min: 13, max: 16, monsterLevel: 8 },
      { min: 17, max: 19, monsterLevel: 9 },
      { min: 20, max: 20, monsterLevel: 10 }
    ],
    
    // Dungeon levels 12-13
    12: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 2, monsterLevel: 2 },
      { min: 3, max: 3, monsterLevel: 3 },
      { min: 4, max: 4, monsterLevel: 4 },
      { min: 5, max: 5, monsterLevel: 5 },
      { min: 6, max: 7, monsterLevel: 6 },
      { min: 8, max: 9, monsterLevel: 7 },
      { min: 10, max: 12, monsterLevel: 8 },
      { min: 13, max: 18, monsterLevel: 9 },
      { min: 19, max: 20, monsterLevel: 10 }
    ],
    13: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 2, monsterLevel: 2 },
      { min: 3, max: 3, monsterLevel: 3 },
      { min: 4, max: 4, monsterLevel: 4 },
      { min: 5, max: 5, monsterLevel: 5 },
      { min: 6, max: 7, monsterLevel: 6 },
      { min: 8, max: 9, monsterLevel: 7 },
      { min: 10, max: 12, monsterLevel: 8 },
      { min: 13, max: 18, monsterLevel: 9 },
      { min: 19, max: 20, monsterLevel: 10 }
    ],
    
    // Dungeon levels 14-15
    14: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 2, monsterLevel: 2 },
      { min: 3, max: 3, monsterLevel: 3 },
      { min: 4, max: 4, monsterLevel: 4 },
      { min: 5, max: 5, monsterLevel: 5 },
      { min: 6, max: 6, monsterLevel: 6 },
      { min: 7, max: 8, monsterLevel: 7 },
      { min: 9, max: 11, monsterLevel: 8 },
      { min: 12, max: 17, monsterLevel: 9 },
      { min: 18, max: 20, monsterLevel: 10 }
    ],
    15: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 2, monsterLevel: 2 },
      { min: 3, max: 3, monsterLevel: 3 },
      { min: 4, max: 4, monsterLevel: 4 },
      { min: 5, max: 5, monsterLevel: 5 },
      { min: 6, max: 6, monsterLevel: 6 },
      { min: 7, max: 8, monsterLevel: 7 },
      { min: 9, max: 11, monsterLevel: 8 },
      { min: 12, max: 17, monsterLevel: 9 },
      { min: 18, max: 20, monsterLevel: 10 }
    ],
    
    // Dungeon level 16 and deeper
    16: [
      { min: 1, max: 1, monsterLevel: 1 },
      { min: 2, max: 2, monsterLevel: 2 },
      { min: 3, max: 3, monsterLevel: 3 },
      { min: 4, max: 4, monsterLevel: 4 },
      { min: 5, max: 5, monsterLevel: 5 },
      { min: 6, max: 6, monsterLevel: 6 },
      { min: 7, max: 7, monsterLevel: 7 },
      { min: 8, max: 10, monsterLevel: 8 },
      { min: 11, max: 16, monsterLevel: 9 },
      { min: 17, max: 20, monsterLevel: 10 }
    ]
  };
  
  // data/dmg-outdoor-tables.js
// This file contains the outdoor encounter tables from the DMG Appendix C

// Arctic Conditions table
export const ARCTIC_CONDITIONS_TABLE = {
    plain: [
      { min: 1, max: 10, creature: "Bear, brown (polar)", number: "1d4" },
      { min: 11, max: 12, creature: "Dragon, white", number: "1" },
      { min: 13, max: 15, creature: "Giant, frost", number: "1d4" },
      { min: 16, max: 55, creature: "Herd animal", number: "3d10" },
      { min: 56, max: 65, creature: "Men, tribesmen", number: "10d10" },
      { min: 66, max: 70, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 71, max: 72, creature: "Remorhaz", number: "1" },
      { min: 73, max: 74, creature: "Snake, giant, constrictor (white-furred)", number: "1" },
      { min: 75, max: 80, creature: "Toad, ice", number: "1d3" },
      { min: 81, max: 90, creature: "Wolf", number: "2d6" },
      { min: 91, max: 95, creature: "Wolf, winter", number: "1d6" },
      { min: 96, max: 100, creature: "Yeti", number: "1d6" }
    ],
    rough: [
      { min: 1, max: 9, creature: "Bear, brown (polar)", number: "1d4" },
      { min: 10, max: 12, creature: "Dragon, white", number: "1" },
      { min: 13, max: 15, creature: "Giant, frost", number: "1d4" },
      { min: 16, max: 55, creature: "Herd animal", number: "3d10" },
      { min: 56, max: 60, creature: "Men, tribesmen", number: "10d10" },
      { min: 61, max: 70, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 71, max: 75, creature: "Remorhaz", number: "1" },
      { min: 76, max: 80, creature: "Snake, giant, constrictor (white-furred)", number: "1" },
      { min: 81, max: 83, creature: "Toad, ice", number: "1d3" },
      { min: 84, max: 91, creature: "Wolf", number: "2d6" },
      { min: 92, max: 95, creature: "Wolf, winter", number: "1d6" },
      { min: 96, max: 100, creature: "Yeti", number: "1d6" }
    ],
    mountains: [
      { min: 1, max: 7, creature: "Bear, brown (polar)", number: "1d4" },
      { min: 8, max: 15, creature: "Dragon, white", number: "1" },
      { min: 16, max: 20, creature: "Giant, frost", number: "1d4" },
      { min: 21, max: 55, creature: "Herd animal", number: "3d10" },
      { min: 56, max: 60, creature: "Men, tribesmen", number: "10d10" },
      { min: 61, max: 70, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 71, max: 72, creature: "Remorhaz", number: "1" },
      { min: 73, max: 75, creature: "Snake, giant, constrictor (white-furred)", number: "1" },
      { min: 76, max: 80, creature: "Toad, ice", number: "1d3" },
      { min: 81, max: 86, creature: "Wolf", number: "2d6" },
      { min: 87, max: 90, creature: "Wolf, winter", number: "1d6" },
      { min: 91, max: 100, creature: "Yeti", number: "1d6" }
    ]
  };
  
  // Sub-Arctic Conditions table
  export const SUBARCTIC_CONDITIONS_TABLE = {
    plain: [
      { min: 1, max: 5, creature: "Dragon, white", number: "1" },
      { min: 6, max: 10, creature: "Giant, frost", number: "1d4" },
      { min: 11, max: 15, creature: "Gnoll", number: "2d6" },
      { min: 16, max: 40, creature: "Herd animal", number: "3d10" },
      { min: 41, max: 45, creature: "Mammoth", number: "1d6" },
      { min: 46, max: 55, creature: "Mastodon", number: "1d6" },
      { min: 56, max: 65, creature: "Men, tribesmen", number: "10d10" },
      { min: 66, max: 70, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 71, max: 80, creature: "Rhino, woolly", number: "1d4" },
      { min: 81, max: 90, creature: "Tiger", number: "1d3" },
      { min: 91, max: 100, creature: "Wolf", number: "2d6" }
    ],
    scrub: [
      { min: 1, max: 5, creature: "Bear, brown", number: "1d4" },
      { min: 6, max: 10, creature: "Dragon, white", number: "1" },
      { min: 11, max: 15, creature: "Giant, frost", number: "1d4" },
      { min: 16, max: 20, creature: "Gnoll", number: "2d6" },
      { min: 21, max: 40, creature: "Herd animal", number: "3d10" },
      { min: 41, max: 50, creature: "Mammoth", number: "1d6" },
      { min: 51, max: 55, creature: "Mastodon", number: "1d6" },
      { min: 56, max: 65, creature: "Men, tribesmen", number: "10d10" },
      { min: 66, max: 70, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 71, max: 80, creature: "Rhino, woolly", number: "1d4" },
      { min: 81, max: 90, creature: "Tiger", number: "1d3" },
      { min: 91, max: 100, creature: "Wolf", number: "2d6" }
    ],
    forest: [
      { min: 1, max: 10, creature: "Bear, brown", number: "1d4" },
      { min: 11, max: 15, creature: "Bear, cave", number: "1d2" },
      { min: 16, max: 20, creature: "Giant, frost", number: "1d4" },
      { min: 21, max: 25, creature: "Gnoll", number: "2d6" },
      { min: 26, max: 27, creature: "Hell hound", number: "1d3" },
      { min: 28, max: 38, creature: "Herd animal", number: "3d10" },
      { min: 39, max: 45, creature: "Lynx, giant", number: "1d2" },
      { min: 46, max: 50, creature: "Mammoth", number: "1d6" },
      { min: 51, max: 55, creature: "Mastodon", number: "1d6" },
      { min: 56, max: 65, creature: "Men, tribesmen", number: "10d10" },
      { min: 66, max: 70, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 71, max: 75, creature: "Rat, giant", number: "5d10" },
      { min: 76, max: 80, creature: "Tiger", number: "1d3" },
      { min: 81, max: 85, creature: "Troll", number: "1d3" },
      { min: 86, max: 95, creature: "Wolf", number: "2d6" },
      { min: 96, max: 98, creature: "Wolverine", number: "1d2" },
      { min: 99, max: 100, creature: "Wolverine, giant", number: "1" }
    ],
    rough: [
      { min: 1, max: 5, creature: "Bear, brown", number: "1d4" },
      { min: 6, max: 10, creature: "Bear, cave", number: "1d2" },
      { min: 11, max: 15, creature: "Dragon, white", number: "1" },
      { min: 16, max: 20, creature: "Giant, frost", number: "1d4" },
      { min: 21, max: 25, creature: "Gnoll", number: "2d6" },
      { min: 26, max: 27, creature: "Hell hound", number: "1d3" },
      { min: 28, max: 40, creature: "Herd animal", number: "3d10" },
      { min: 41, max: 50, creature: "Men, tribesmen", number: "10d10" },
      { min: 51, max: 55, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 56, max: 60, creature: "Ram, giant", number: "1d6" },
      { min: 61, max: 65, creature: "Rat, giant", number: "5d10" },
      { min: 66, max: 67, creature: "Remorhaz", number: "1" },
      { min: 68, max: 75, creature: "Tiger", number: "1d3" },
      { min: 76, max: 80, creature: "Troll", number: "1d3" },
      { min: 81, max: 90, creature: "Wolf", number: "2d6" },
      { min: 91, max: 96, creature: "Wolverine", number: "1d2" },
      { min: 97, max: 98, creature: "Wolverine, giant", number: "1" },
      { min: 99, max: 100, creature: "Yeti", number: "1d6" }
    ],
    hills: [
      { min: 1, max: 5, creature: "Bear, brown", number: "1d4" },
      { min: 6, max: 10, creature: "Bear, cave", number: "1d2" },
      { min: 11, max: 15, creature: "Dragon, white", number: "1" },
      { min: 16, max: 20, creature: "Giant, frost", number: "1d4" },
      { min: 21, max: 25, creature: "Gnoll", number: "2d6" },
      { min: 26, max: 27, creature: "Hell hound", number: "1d3" },
      { min: 28, max: 50, creature: "Herd animal", number: "3d10" },
      { min: 51, max: 60, creature: "Men, tribesmen", number: "10d10" },
      { min: 61, max: 65, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 66, max: 70, creature: "Ram, giant", number: "1d6" },
      { min: 71, max: 75, creature: "Rhino, woolly", number: "1d4" },
      { min: 76, max: 80, creature: "Tiger", number: "1d3" },
      { min: 81, max: 85, creature: "Troll", number: "1d3" },
      { min: 86, max: 92, creature: "Wolf", number: "2d6" },
      { min: 93, max: 94, creature: "Wolf, winter", number: "1d6" },
      { min: 95, max: 96, creature: "Wolverine", number: "1d2" },
      { min: 97, max: 98, creature: "Wolverine, giant", number: "1" },
      { min: 99, max: 100, creature: "Yeti", number: "1d6" }
    ],
    mountains: [
      { min: 1, max: 15, creature: "Bear, cave", number: "1d2" },
      { min: 16, max: 25, creature: "Dragon, white", number: "1" },
      { min: 26, max: 30, creature: "Giant, frost", number: "1d4" },
      { min: 31, max: 35, creature: "Gnoll", number: "2d6" },
      { min: 36, max: 40, creature: "Hell hound", number: "1d3" },
      { min: 41, max: 60, creature: "Herd animal", number: "3d10" },
      { min: 61, max: 65, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 66, max: 70, creature: "Ram, giant", number: "1d6" },
      { min: 71, max: 75, creature: "Remorhaz", number: "1" },
      { min: 76, max: 85, creature: "Troll", number: "1d3" },
      { min: 86, max: 92, creature: "Wolf", number: "2d6" },
      { min: 93, max: 95, creature: "Wolf, winter", number: "1d6" },
      { min: 96, max: 100, creature: "Yeti", number: "1d6" }
    ],
    marsh: [
      { min: 1, max: 5, creature: "Dragon, white", number: "1" },
      { min: 6, max: 20, creature: "Gnoll", number: "2d6" },
      { min: 21, max: 50, creature: "Herd animal", number: "3d10" },
      { min: 51, max: 55, creature: "Mastodon", number: "1d6" },
      { min: 56, max: 65, creature: "Men, tribesmen", number: "10d10" },
      { min: 66, max: 75, creature: "Owl, giant", number: "1d4", isAirborne: true },
      { min: 76, max: 85, creature: "Rat, giant", number: "5d10" },
      { min: 86, max: 90, creature: "Toad, ice", number: "1d3" },
      { min: 91, max: 100, creature: "Troll", number: "1d3" }
    ]
  };
  
  // Function to roll on a specific table
  export const rollOnOutdoorTable = (climate, terrain, options = {}) => {
    let table;
    
    // Select the appropriate table based on climate
    switch(climate.toLowerCase()) {
      case 'arctic':
        table = ARCTIC_CONDITIONS_TABLE[terrain];
        break;
      case 'subarctic':
        table = SUBARCTIC_CONDITIONS_TABLE[terrain];
        break;
      // Add cases for other climates as they are implemented
      default:
        console.warn(`No table found for climate: ${climate}, defaulting to arctic`);
        table = ARCTIC_CONDITIONS_TABLE[terrain];
    }
    
    if (!table) {
      console.warn(`No table found for terrain: ${terrain} in climate: ${climate}`);
      return null;
    }
    
    // Roll on the table
    const roll = Math.floor(Math.random() * 100) + 1;
    
    // Find the appropriate entry
    for (const entry of table) {
      if (roll >= entry.min && roll <= entry.max) {
        // Roll for number of creatures
        const number = rollNumberFromPattern(entry.number || "1");
        
        // Check if the creature is airborne
        const isAirborne = entry.isAirborne && Math.random() < 0.75; // 75% chance if marked as airborne
        
        return {
          result: "Encounter",
          roll: roll,
          encounter: entry.creature,
          number: number,
          isAirborne: isAirborne,
          notes: isAirborne ? "Encountered while airborne" : ""
        };
      }
    }
    
    return null;
  };
  
// data/dmg-temperate-tables.js
// Temperate and Sub-Tropical Conditions tables from DMG Appendix C
export const TEMPERATE_UNINHABITED_TABLES = {
    plain: [
      { min: 1, max: 1, creature: "Ant, giant", number: "1d4" },
      { min: 2, max: 2, creature: "Bear, brown", number: "1d4" },
      { min: 3, max: 3, creature: "Blink dog", number: "2d4" },
      { min: 4, max: 4, creature: "Boar, wild", number: "1d6" },
      { min: 5, max: 5, creature: "Bugbear", number: "2d4" },
      { min: 6, max: 9, creature: "Bull/Cattle, wild", number: "3d6" },
      { min: 10, max: 10, creature: "Demi-human", subtable: "demi_human", number: "2d6" },
      { min: 11, max: 12, creature: "Dog, wild", number: "2d4" },
      { min: 13, max: 14, creature: "Dragon", subtable: "dragon", number: "1" },
      { min: 15, max: 15, creature: "Eagle, giant", number: "1d3" },
      { min: 17, max: 18, creature: "Giant", subtable: "giant", number: "1d2" },
      { min: 19, max: 19, creature: "Griffon", number: "1d4" },
      { min: 20, max: 25, creature: "Herd animal", number: "3d10" },
      { min: 26, max: 27, creature: "Hippogriff", number: "1d6" },
      { min: 28, max: 30, creature: "Horse, wild", number: "2d12" },
      { min: 31, max: 33, creature: "Humanoid", subtable: "humanoid", number: "2d6" },
      { min: 34, max: 38, creature: "Jackal", number: "2d6", notes: "10% chance of jackalwere" },
      { min: 39, max: 39, creature: "Ki-rin/Lammasu/Shedu", number: "1" },
      { min: 40, max: 49, creature: "Lion", number: "1d4" },
      { min: 50, max: 50, creature: "Lycanthrope", subtable: "lycanthrope", number: "1d6" },
      { min: 51, max: 70, creature: "Men", subtable: "men", number: "3d6" },
      { min: 71, max: 74, creature: "Ogre", number: "1d6", notes: "10% chance of ogre magi" },
      { min: 75, max: 75, creature: "Owl, giant", number: "1d4" },
      { min: 76, max: 77, creature: "Pegasus", number: "1d3" },
      { min: 78, max: 78, creature: "Snake", subtable: "snake", number: "1" },
      { min: 79, max: 80, creature: "Spider", subtable: "spider", number: "1d4" },
      { min: 81, max: 81, creature: "Stag", number: "1d6" },
      { min: 82, max: 82, creature: "Toad, giant", number: "1d3" },
      { min: 83, max: 84, creature: "Troll", number: "1d3" },
      { min: 85, max: 86, creature: "Wasp, giant", number: "1d6" },
      { min: 87, max: 87, creature: "Weasel, giant", number: "1d2" },
      { min: 88, max: 97, creature: "Wolf", number: "2d6" },
      { min: 98, max: 100, creature: "Wolf, worg", number: "1d4+1" }
    ],
    scrub: [
      { min: 1, max: 1, creature: "Ant, giant", number: "1d4" },
      { min: 2, max: 2, creature: "Bear, brown", number: "1d4" },
      { min: 3, max: 3, creature: "Blink dog", number: "2d4" },
      { min: 4, max: 5, creature: "Boar, wild", number: "1d6" },
      { min: 6, max: 6, creature: "Bugbear", number: "2d4" },
      { min: 7, max: 8, creature: "Bull/Cattle, wild", number: "3d6" },
      { min: 9, max: 9, creature: "Demi-human", subtable: "demi_human", number: "2d6" },
      { min: 10, max: 10, creature: "Dog, wild", number: "2d4" },
      { min: 11, max: 11, creature: "Dragon", subtable: "dragon", number: "1" },
      { min: 12, max: 13, creature: "Giant", subtable: "giant", number: "1d2" },
      { min: 14, max: 14, creature: "Griffon", number: "1d4" },
      { min: 15, max: 20, creature: "Herd animal", number: "3d10" },
      { min: 21, max: 22, creature: "Hippogriff", number: "1d6" },
      { min: 23, max: 25, creature: "Horse, wild", number: "2d12" },
      { min: 26, max: 32, creature: "Humanoid", subtable: "humanoid", number: "2d6" },
      { min: 33, max: 34, creature: "Jackal", number: "2d6", notes: "10% chance of jackalwere" },
      { min: 35, max: 35, creature: "Ki-rin/Lammasu/Shedu", number: "1" },
      { min: 36, max: 40, creature: "Lion", number: "1d4" },
      { min: 41, max: 60, creature: "Men", subtable: "men", number: "3d6" },
      { min: 61, max: 65, creature: "Ogre", number: "1d6", notes: "10% chance of ogre magi" },
      { min: 66, max: 66, creature: "Owl, giant", number: "1d4" },
      { min: 67, max: 67, creature: "Pegasus", number: "1d3" },
      { min: 68, max: 69, creature: "Porcupine/Skunk", number: "1d2" },
      { min: 70, max: 70, creature: "Pseudo-dragon", number: "1" },
      { min: 71, max: 71, creature: "Snake", subtable: "snake", number: "1" },
      { min: 72, max: 80, creature: "Spider", subtable: "spider", number: "1d4" },
      { min: 81, max: 85, creature: "Stag", number: "1d6" },
      { min: 86, max: 86, creature: "Tick, giant", number: "1d3" },
      { min: 87, max: 87, creature: "Toad, giant", number: "1d3" },
      { min: 88, max: 88, creature: "Troll", number: "1d3" },
      { min: 89, max: 89, creature: "Wasp, giant", number: "1d6" },
      { min: 90, max: 91, creature: "Weasel, giant", number: "1d2" },
      { min: 92, max: 97, creature: "Wolf", number: "2d6" },
      { min: 98, max: 100, creature: "Wolf, worg", number: "1d4+1" }
    ],
    forest: [
      { min: 1, max: 1, creature: "Ant, giant", number: "1d4" },
      { min: 2, max: 2, creature: "Badger", number: "1d4" },
      { min: 3, max: 4, creature: "Bear, brown", number: "1d4" },
      { min: 5, max: 5, creature: "Beetle, bombardier", number: "1d6" },
      { min: 6, max: 6, creature: "Beetle, stag", number: "1d6" },
      { min: 7, max: 7, creature: "Blink dog", number: "2d4" },
      { min: 8, max: 8, creature: "Boar, wild", number: "1d6" },
      { min: 9, max: 9, creature: "Bugbear", number: "2d4" },
      { min: 10, max: 10, creature: "Bull/Cattle, wild", number: "3d6" },
      { min: 11, max: 11, creature: "Demi-human", subtable: "demi_human", number: "2d6" },
      { min: 12, max: 12, creature: "Displacer beast", number: "1d2" },
      { min: 13, max: 13, creature: "Dog, wild", number: "2d4" },
      { min: 14, max: 14, creature: "Dragon", subtable: "dragon", number: "1" },
      { min: 15, max: 15, creature: "Eagle, giant", number: "1d3" },
      { min: 16, max: 16, creature: "Giant", subtable: "giant", number: "1d2" },
      { min: 17, max: 17, creature: "Griffon", number: "1d4" },
      { min: 18, max: 20, creature: "Herd animal", number: "3d10" },
      { min: 21, max: 22, creature: "Hippogriff", number: "1d6" },
      { min: 23, max: 25, creature: "Horse, wild", number: "2d12" },
      { min: 26, max: 30, creature: "Humanoid", subtable: "humanoid", number: "2d6" },
      { min: 31, max: 31, creature: "Ki-rin/Lammasu/Shedu", number: "1" },
      { min: 32, max: 32, creature: "Leprechaun/Brownie", number: "1d6" },
      { min: 33, max: 35, creature: "Lion", number: "1d4" },
      { min: 36, max: 36, creature: "Lizard, giant", number: "1d3" },
      { min: 37, max: 38, creature: "Lycanthrope", subtable: "lycanthrope", number: "1d6" },
      { min: 39, max: 40, creature: "Lynx, giant", number: "1d2" },
      { min: 41, max: 50, creature: "Men", subtable: "men", number: "3d6" },
      { min: 51, max: 55, creature: "Ogre", number: "1d6", notes: "10% chance of ogre magi" },
      { min: 56, max: 58, creature: "Owl, giant", number: "1d4" },
      { min: 59, max: 60, creature: "Owlbear", number: "1d2" },
      { min: 61, max: 63, creature: "Porcupine/Skunk", number: "1d2" },
      { min: 64, max: 65, creature: "Pseudo-dragon", number: "1" },
      { min: 66, max: 66, creature: "Shambling mound", number: "1" },
      { min: 67, max: 68, creature: "Snake", subtable: "snake", number: "1" },
      { min: 69, max: 70, creature: "Sphinx", subtable: "sphinx", number: "1" },
      { min: 71, max: 73, creature: "Spider", subtable: "spider", number: "1d4" },
      { min: 74, max: 76, creature: "Stag", number: "1d6" },
      { min: 77, max: 78, creature: "Tick, giant", number: "1d3" },
      { min: 79, max: 79, creature: "Toad, giant", number: "1d3" },
      { min: 80, max: 84, creature: "Treant", number: "1d4" },
      { min: 85, max: 85, creature: "Troll", number: "1d3" },
      { min: 86, max: 87, creature: "Undead", subtable: "undead", number: "1d6" },
      { min: 88, max: 88, creature: "Wasp, giant", number: "1d6" },
      { min: 89, max: 89, creature: "Weasel, giant", number: "1d2" },
      { min: 90, max: 90, creature: "Will-o-wisp", number: "1" },
      { min: 91, max: 97, creature: "Wolf", number: "2d6" },
      { min: 98, max: 100, creature: "Wolf, worg", number: "1d4+1" }
    ],
    
    rough: [
        { min: 1, max: 1, creature: "Ant, giant", number: "1d4" },
        { min: 2, max: 3, creature: "Badger", number: "1d4" },
        { min: 4, max: 4, creature: "Badger, giant", number: "1d2" },
        { min: 5, max: 5, creature: "Bear, brown", number: "1d4" },
        { min: 6, max: 6, creature: "Blink dog", number: "2d4" },
        { min: 7, max: 7, creature: "Boar, wild", number: "1d6" },
        { min: 8, max: 8, creature: "Bugbear", number: "2d4" },
        { min: 9, max: 9, creature: "Demi-human", subtable: "demi_human", number: "2d6" },
        { min: 10, max: 10, creature: "Displacer beast", number: "1d2" },
        { min: 11, max: 11, creature: "Dog, wild", number: "2d4" },
        { min: 12, max: 12, creature: "Dragon", subtable: "dragon", number: "1" },
        { min: 13, max: 13, creature: "Dragonne", number: "1" },
        { min: 14, max: 14, creature: "Eagle, giant", number: "1d3" },
        { min: 15, max: 16, creature: "Giant", subtable: "giant", number: "1d2" },
        { min: 17, max: 17, creature: "Goat, giant", number: "1d6" },
        { min: 18, max: 18, creature: "Griffon", number: "1d4" },
        { min: 19, max: 20, creature: "Herd animal", number: "3d10" },
        { min: 21, max: 22, creature: "Hippogriff", number: "1d6" },
        { min: 23, max: 25, creature: "Horse, wild", number: "2d12" },
        { min: 26, max: 30, creature: "Humanoid", subtable: "humanoid", number: "2d6" },
        { min: 31, max: 31, creature: "Ki-rin/Lammasu/Shedu", number: "1" },
        { min: 32, max: 33, creature: "Leucrotta", number: "1d2" },
        { min: 34, max: 35, creature: "Lion", number: "1d4" },
        { min: 36, max: 37, creature: "Lizard, giant", number: "1d3" },
        { min: 38, max: 39, creature: "Lycanthrope", subtable: "lycanthrope", number: "1d6" },
        { min: 40, max: 50, creature: "Men", subtable: "men", number: "3d6" },
        { min: 51, max: 55, creature: "Ogre", number: "1d6", notes: "10% chance of ogre magi" },
        { min: 56, max: 56, creature: "Owl, giant", number: "1d4" },
        { min: 57, max: 57, creature: "Pegasus", number: "1d3" },
        { min: 58, max: 58, creature: "Porcupine/Skunk", number: "1d2" },
        { min: 59, max: 60, creature: "Snake", subtable: "snake", number: "1" },
        { min: 61, max: 63, creature: "Sphinx", subtable: "sphinx", number: "1" },
        { min: 64, max: 65, creature: "Spider", subtable: "spider", number: "1d4" },
        { min: 66, max: 66, creature: "Stag", number: "1d6" },
        { min: 67, max: 67, creature: "Toad, giant", number: "1d3" },
        { min: 68, max: 75, creature: "Troll", number: "1d3" },
        { min: 76, max: 80, creature: "Undead", subtable: "undead", number: "1d6" },
        { min: 81, max: 82, creature: "Wasp, giant", number: "1d6" },
        { min: 83, max: 84, creature: "Weasel, giant", number: "1d2" },
        { min: 85, max: 86, creature: "Will-o-wisp", number: "1" },
        { min: 87, max: 97, creature: "Wolf", number: "2d6" },
        { min: 98, max: 100, creature: "Wolf, worg", number: "1d4+1" }
      ],
      
      desert: [
        { min: 1, max: 7, creature: "Dragon", subtable: "dragon", number: "1" },
        { min: 8, max: 11, creature: "Dragonne", number: "1" },
        { min: 9, max: 9, creature: "Eagle, giant", number: "1d3" },
        { min: 10, max: 11, creature: "Griffon", number: "1d4" },
        { min: 12, max: 12, creature: "Herd animal", number: "3d10" },
        { min: 13, max: 14, creature: "Hippogriff", number: "1d6" },
        { min: 15, max: 19, creature: "Horse, wild", number: "2d12" },
        { min: 20, max: 28, creature: "Humanoid", subtable: "humanoid", number: "2d6" },
        { min: 29, max: 30, creature: "Ki-rin/Lammasu/Shedu", number: "1" },
        { min: 31, max: 40, creature: "Lion", number: "1d4" },
        { min: 41, max: 44, creature: "Lizard, giant", number: "1d3" },
        { min: 45, max: 69, creature: "Men", subtable: "men", number: "3d6" },
        { min: 70, max: 70, creature: "Owl, giant", number: "1d4" },
        { min: 71, max: 74, creature: "Pegasus", number: "1d3" },
        { min: 75, max: 79, creature: "Snake", subtable: "snake", number: "1" },
        { min: 80, max: 89, creature: "Sphinx", subtable: "sphinx", number: "1" },
        { min: 90, max: 93, creature: "Spider", subtable: "spider", number: "1d4" },
        { min: 94, max: 95, creature: "Will-o-wisp", number: "1" },
        { min: 96, max: 100, creature: "Wolf", number: "2d6" }
      ],
      
      hills: [
        { min: 1, max: 1, creature: "Ant, giant", number: "1d4" },
        { min: 2, max: 3, creature: "Bear, brown", number: "1d4" },
        { min: 4, max: 4, creature: "Blink dog", number: "2d4" },
        { min: 5, max: 8, creature: "Bugbear", number: "2d4" },
        { min: 9, max: 9, creature: "Bull/Cattle, wild", number: "3d6" },
        { min: 10, max: 20, creature: "Demi-human", subtable: "demi_human", number: "2d6" },
        { min: 21, max: 22, creature: "Dog, wild", number: "2d4" },
        { min: 23, max: 24, creature: "Dragon", subtable: "dragon", number: "1" },
        { min: 25, max: 25, creature: "Eagle, giant", number: "1d3" },
        { min: 26, max: 27, creature: "Giant", subtable: "giant", number: "1d2" },
        { min: 28, max: 30, creature: "Goat, giant", number: "1d6" },
        { min: 31, max: 32, creature: "Griffon", number: "1d4" },
        { min: 33, max: 35, creature: "Herd animal", number: "3d10" },
        { min: 36, max: 37, creature: "Hippogriff", number: "1d6" },
        { min: 38, max: 39, creature: "Horse, wild", number: "2d12" },
        { min: 40, max: 50, creature: "Humanoid", subtable: "humanoid", number: "2d6" },
        { min: 51, max: 51, creature: "Ki-rin/Lammasu/Shedu", number: "1" },
        { min: 52, max: 53, creature: "Leprechaun/Brownie", number: "1d6" },
        { min: 54, max: 55, creature: "Lion", number: "1d4" },
        { min: 56, max: 58, creature: "Lycanthrope", subtable: "lycanthrope", number: "1d6" },
        { min: 59, max: 70, creature: "Men", subtable: "men", number: "3d6" },
        { min: 71, max: 75, creature: "Ogre", number: "1d6", notes: "10% chance of ogre magi" },
        { min: 76, max: 76, creature: "Owl, giant", number: "1d4" },
        { min: 77, max: 77, creature: "Pegasus", number: "1d3" },
        { min: 78, max: 78, creature: "Porcupine/Skunk", number: "1d2" },
        { min: 79, max: 79, creature: "Snake", subtable: "snake", number: "1" },
        { min: 80, max: 81, creature: "Sphinx", subtable: "sphinx", number: "1" },
        { min: 82, max: 83, creature: "Spider", subtable: "spider", number: "1d4" },
        { min: 84, max: 87, creature: "Stag", number: "1d6" },
        { min: 88, max: 88, creature: "Toad, giant", number: "1d3" },
        { min: 89, max: 89, creature: "Troll", number: "1d3" },
        { min: 90, max: 91, creature: "Undead", subtable: "undead", number: "1d6" },
        { min: 92, max: 92, creature: "Wasp, giant", number: "1d6" },
        { min: 93, max: 93, creature: "Weasel, giant", number: "1d2" },
        { min: 94, max: 98, creature: "Wolf", number: "2d6" },
        { min: 99, max: 100, creature: "Wolf, worg", number: "1d4+1" }
      ],
      
      mountains: [
        { min: 1, max: 2, creature: "Bear, brown", number: "1d4" },
        { min: 3, max: 3, creature: "Blink dog", number: "2d4" },
        { min: 4, max: 5, creature: "Bugbear", number: "2d4" },
        { min: 6, max: 7, creature: "Demi-human", subtable: "demi_human", number: "2d6" },
        { min: 8, max: 8, creature: "Displacer beast", number: "1d2" },
        { min: 9, max: 9, creature: "Dog, wild", number: "2d4" },
        { min: 10, max: 11, creature: "Dragon", subtable: "dragon", number: "1" },
        { min: 12, max: 12, creature: "Dragonne", number: "1" },
        { min: 13, max: 14, creature: "Eagle, giant", number: "1d3" },
        { min: 15, max: 16, creature: "Gargoyle", number: "1d6" },
        { min: 17, max: 28, creature: "Giant", subtable: "giant", number: "1d2" },
        { min: 29, max: 29, creature: "Goat, giant", number: "1d6" },
        { min: 30, max: 30, creature: "Griffon", number: "1d4" },
        { min: 31, max: 32, creature: "Hippogriff", number: "1d6" },
        { min: 33, max: 40, creature: "Humanoid", subtable: "humanoid", number: "2d6" },
        { min: 41, max: 41, creature: "Ki-rin/Lammasu/Shedu", number: "1" },
        { min: 42, max: 42, creature: "Leucrotta", number: "1d2" },
        { min: 43, max: 45, creature: "Lycanthrope", subtable: "lycanthrope", number: "1d6" },
        { min: 46, max: 60, creature: "Men", subtable: "men", number: "3d6" },
        { min: 61, max: 65, creature: "Ogre", number: "1d6", notes: "10% chance of ogre magi" },
        { min: 66, max: 66, creature: "Owl, giant", number: "1d4" },
        { min: 67, max: 67, creature: "Pegasus", number: "1d3" },
        { min: 68, max: 68, creature: "Snake", subtable: "snake", number: "1" },
        { min: 69, max: 72, creature: "Sphinx", subtable: "sphinx", number: "1" },
        { min: 73, max: 78, creature: "Troll", number: "1d3" },
        { min: 79, max: 83, creature: "Undead", subtable: "undead", number: "1d6" },
        { min: 84, max: 86, creature: "Weasel, giant", number: "1d2" },
        { min: 87, max: 92, creature: "Will-o-wisp", number: "1" },
        { min: 93, max: 94, creature: "Wind walker", number: "1d2" },
        { min: 95, max: 96, creature: "Wolf", number: "2d6" },
        { min: 97, max: 100, creature: "Wolf, worg", number: "1d4+1" }
      ],
      
      marsh: [
        { min: 1, max: 1, creature: "Beaver, giant", number: "1d4" },
        { min: 2, max: 5, creature: "Bear, black", number: "1d4" },
        { min: 6, max: 6, creature: "Beholder", number: "1" },
        { min: 7, max: 7, creature: "Dragon", subtable: "dragon", number: "1" },
        { min: 8, max: 8, creature: "Eagle, giant", number: "1d3" },
        { min: 9, max: 15, creature: "Frog", subtable: "frog", number: "3d6" },
        { min: 16, max: 16, creature: "Gargoyle", number: "1d6" },
        { min: 17, max: 30, creature: "Humanoid", subtable: "humanoid", number: "2d6" },
        { min: 31, max: 31, creature: "Ki-rin/Lammasu/Shedu", number: "1" },
        { min: 32, max: 32, creature: "Leucrotta", number: "1d2" },
        { min: 33, max: 36, creature: "Lizard, giant", number: "1d3" },
        { min: 37, max: 52, creature: "Men", subtable: "men", number: "3d6" },
        { min: 53, max: 53, creature: "Owl, giant", number: "1d4" },
        { min: 54, max: 54, creature: "Owlbear", number: "1d2" },
        { min: 55, max: 58, creature: "Shambling mound", number: "1" },
        { min: 59, max: 72, creature: "Snake", subtable: "snake", number: "1" },
        { min: 73, max: 78, creature: "Sphinx", subtable: "sphinx", number: "1" },
        { min: 79, max: 83, creature: "Toad, giant", number: "1d3" },
        { min: 84, max: 86, creature: "Troll", number: "1d3" },
        { min: 87, max: 92, creature: "Undead", subtable: "undead", number: "1d6" },
        { min: 93, max: 94, creature: "Wasp, giant", number: "1d6" },
        { min: 95, max: 96, creature: "Weasel, giant", number: "1d2" },
        { min: 97, max: 100, creature: "Will-o-wisp", number: "1" }
      ]
};

    // Complete this set of subtables to add to your TEMPERATE_SUBTABLES object
    export const DMG_TERRAIN_SUBTABLES = {
  
      demi_human: {
        plain: [
          { min: 1, max: 5, creature: "Dwarf", number: "2d6" },
          { min: 6, max: 70, creature: "Elf", number: "2d6" },
          { min: 71, max: 80, creature: "Gnome", number: "2d6" },
          { min: 81, max: 100, creature: "Halfling", number: "3d6" }
        ],
        scrub: [
          { min: 1, max: 5, creature: "Dwarf", number: "2d6" },
          { min: 6, max: 60, creature: "Elf", number: "2d6" },
          { min: 61, max: 80, creature: "Gnome", number: "2d6" },
          { min: 81, max: 100, creature: "Halfling", number: "3d6" }
        ],
        forest: [
          { min: 1, max: 5, creature: "Dwarf", number: "2d6" },
          { min: 6, max: 70, creature: "Elf", number: "2d6" },
          { min: 71, max: 95, creature: "Gnome", number: "2d6" },
          { min: 96, max: 100, creature: "Halfling", number: "3d6" }
        ],
        rough: [
          { min: 1, max: 10, creature: "Dwarf", number: "2d6" },
          { min: 11, max: 15, creature: "Elf", number: "2d6" },
          { min: 16, max: 85, creature: "Gnome", number: "2d6" },
          { min: 86, max: 100, creature: "Halfling", number: "3d6" }
        ],
        hills: [
          { min: 1, max: 20, creature: "Dwarf", number: "2d6" },
          { min: 21, max: 30, creature: "Elf", number: "2d6" },
          { min: 31, max: 70, creature: "Gnome", number: "2d6" },
          { min: 71, max: 100, creature: "Halfling", number: "3d6" }
        ],
        mountains: [
          { min: 1, max: 70, creature: "Dwarf", number: "2d6" },
          { min: 71, max: 75, creature: "Elf", number: "2d6" },
          { min: 76, max: 95, creature: "Gnome", number: "2d6" },
          { min: 96, max: 100, creature: "Halfling", number: "3d6" }
        ]
      },
      
      dragon: {
        plain: [
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
        scrub: [
          { min: 1, max: 2, creature: "Black Dragon", number: "1" },
          { min: 3, max: 4, creature: "Blue Dragon", number: "1" },
          { min: 5, max: 6, creature: "Brass Dragon", number: "1" },
          { min: 7, max: 8, creature: "Bronze Dragon", number: "1" },
          { min: 9, max: 10, creature: "Chimera", number: "1" },
          { min: 11, max: 14, creature: "Copper Dragon", number: "1" },
          { min: 15, max: 16, creature: "Gold Dragon", number: "1" },
          { min: 17, max: 36, creature: "Green Dragon", number: "1" },
          { min: 37, max: 38, creature: "Red Dragon", number: "1" },
          { min: 39, max: 40, creature: "White Dragon", number: "1" },
          { min: 41, max: 100, creature: "Wyvern", number: "1" }
        ],
        forest: [
          { min: 1, max: 16, creature: "Black Dragon", number: "1" },
          { min: 17, max: 18, creature: "Blue Dragon", number: "1" },
          { min: 19, max: 20, creature: "Brass Dragon", number: "1" },
          { min: 21, max: 22, creature: "Bronze Dragon", number: "1" },
          { min: 24, max: 30, creature: "Chimera", number: "1" },
          { min: 31, max: 35, creature: "Copper Dragon", number: "1" },
          { min: 36, max: 40, creature: "Gold Dragon", number: "1" },
          { min: 41, max: 80, creature: "Green Dragon", number: "1" },
          { min: 81, max: 82, creature: "Red Dragon", number: "1" },
          { min: 83, max: 84, creature: "White Dragon", number: "1" },
          { min: 85, max: 100, creature: "Wyvern", number: "1" }
        ],
        rough: [
          { min: 1, max: 30, creature: "Black Dragon", number: "1" },
          { min: 31, max: 32, creature: "Blue Dragon", number: "1" },
          { min: 33, max: 40, creature: "Brass Dragon", number: "1" },
          { min: 41, max: 45, creature: "Bronze Dragon", number: "1" },
          { min: 46, max: 50, creature: "Chimera", number: "1" },
          { min: 51, max: 55, creature: "Copper Dragon", number: "1" },
          { min: 56, max: 57, creature: "Gold Dragon", number: "1" },
          { min: 58, max: 59, creature: "Green Dragon", number: "1" },
          { min: 60, max: 64, creature: "Red Dragon", number: "1" },
          { min: 65, max: 66, creature: "White Dragon", number: "1" },
          { min: 67, max: 100, creature: "Wyvern", number: "1" }
        ],
        desert: [
          { min: 1, max: 2, creature: "Black Dragon", number: "1" },
          { min: 3, max: 20, creature: "Blue Dragon", number: "1" },
          { min: 21, max: 65, creature: "Brass Dragon", number: "1" },
          { min: 66, max: 67, creature: "Bronze Dragon", number: "1" },
          { min: 68, max: 70, creature: "Chimera", number: "1" },
          { min: 71, max: 80, creature: "Copper Dragon", number: "1" },
          { min: 81, max: 82, creature: "Gold Dragon", number: "1" },
          { min: 83, max: 84, creature: "Green Dragon", number: "1" },
          { min: 85, max: 88, creature: "Red Dragon", number: "1" },
          { min: 89, max: 90, creature: "White Dragon", number: "1" },
          { min: 91, max: 100, creature: "Wyvern", number: "1" }
        ],
        hills: [
          { min: 1, max: 6, creature: "Black Dragon", number: "1" },
          { min: 7, max: 10, creature: "Blue Dragon", number: "1" },
          { min: 11, max: 20, creature: "Brass Dragon", number: "1" },
          { min: 21, max: 25, creature: "Bronze Dragon", number: "1" },
          { min: 26, max: 35, creature: "Chimera", number: "1" },
          { min: 36, max: 45, creature: "Copper Dragon", number: "1" },
          { min: 46, max: 50, creature: "Gold Dragon", number: "1" },
          { min: 51, max: 52, creature: "Green Dragon", number: "1" },
          { min: 53, max: 60, creature: "Red Dragon", number: "1" },
          { min: 61, max: 65, creature: "White Dragon", number: "1" },
          { min: 66, max: 100, creature: "Wyvern", number: "1" }
        ],
        mountains: [
          { min: 1, max: 4, creature: "Black Dragon", number: "1" },
          { min: 5, max: 15, creature: "Blue Dragon", number: "1" },
          { min: 16, max: 17, creature: "Brass Dragon", number: "1" },
          { min: 18, max: 25, creature: "Bronze Dragon", number: "1" },
          { min: 26, max: 30, creature: "Chimera", number: "1" },
          { min: 31, max: 40, creature: "Copper Dragon", number: "1" },
          { min: 41, max: 45, creature: "Gold Dragon", number: "1" },
          { min: 46, max: 47, creature: "Green Dragon", number: "1" },
          { min: 48, max: 60, creature: "Red Dragon", number: "1" },
          { min: 61, max: 95, creature: "White Dragon", number: "1" },
          { min: 96, max: 100, creature: "Wyvern", number: "1" }
        ],
        marsh: [
          { min: 1, max: 50, creature: "Black Dragon", number: "1" },
          { min: 51, max: 52, creature: "Blue Dragon", number: "1" },
          { min: 53, max: 54, creature: "Brass Dragon", number: "1" },
          { min: 55, max: 56, creature: "Bronze Dragon", number: "1" },
          { min: 57, max: 58, creature: "Chimera", number: "1" },
          { min: 59, max: 60, creature: "Copper Dragon", number: "1" },
          { min: 61, max: 62, creature: "Gold Dragon", number: "1" },
          { min: 63, max: 75, creature: "Green Dragon", number: "1" },
          { min: 76, max: 77, creature: "Red Dragon", number: "1" },
          { min: 78, max: 79, creature: "White Dragon", number: "1" },
          { min: 80, max: 100, creature: "Wyvern", number: "1" }
        ]
      },
      
      frog: {
        marsh: [
          { min: 1, max: 70, creature: "Giant Frog", number: "2d6" },
          { min: 71, max: 80, creature: "Killer Frog", number: "2d6" },
          { min: 81, max: 100, creature: "Poisonous Frog", number: "1d6" }
        ]
      },
      
      giant: {
        plain: [
          { min: 1, max: 2, creature: "Cloud Giant", number: "1" },
          { min: 3, max: 4, creature: "Ettin", number: "1d2" },
          { min: 5, max: 6, creature: "Fire Giant", number: "1d2" },
          { min: 7, max: 8, creature: "Frost Giant", number: "1d2" },
          { min: 9, max: 95, creature: "Hill Giant", number: "1d4" },
          { min: 96, max: 98, creature: "Stone Giant", number: "1" },
          { min: 99, max: 99, creature: "Storm Giant", number: "1" },
          { min: 100, max: 100, creature: "Titan", number: "1" }
        ],
        scrub: [
          { min: 1, max: 2, creature: "Cloud Giant", number: "1" },
          { min: 3, max: 5, creature: "Ettin", number: "1d2" },
          { min: 6, max: 7, creature: "Fire Giant", number: "1d2" },
          { min: 8, max: 9, creature: "Frost Giant", number: "1d2" },
          { min: 10, max: 94, creature: "Hill Giant", number: "1d4" },
          { min: 95, max: 98, creature: "Stone Giant", number: "1" },
          { min: 99, max: 99, creature: "Storm Giant", number: "1" },
          { min: 100, max: 100, creature: "Titan", number: "1" }
        ],
        forest: [
          { min: 1, max: 2, creature: "Cloud Giant", number: "1" },
          { min: 3, max: 10, creature: "Ettin", number: "1d2" },
          { min: 11, max: 12, creature: "Fire Giant", number: "1d2" },
          { min: 13, max: 14, creature: "Frost Giant", number: "1d2" },
          { min: 15, max: 93, creature: "Hill Giant", number: "1d4" },
          { min: 94, max: 98, creature: "Stone Giant", number: "1" },
          { min: 99, max: 99, creature: "Storm Giant", number: "1" },
          { min: 100, max: 100, creature: "Titan", number: "1" }
        ],
        rough: [
          { min: 1, max: 2, creature: "Cloud Giant", number: "1" },
          { min: 3, max: 10, creature: "Ettin", number: "1d2" },
          { min: 11, max: 20, creature: "Fire Giant", number: "1d2" },
          { min: 21, max: 25, creature: "Frost Giant", number: "1d2" },
          { min: 26, max: 85, creature: "Hill Giant", number: "1d4" },
          { min: 86, max: 98, creature: "Stone Giant", number: "1" },
          { min: 99, max: 99, creature: "Storm Giant", number: "1" },
          { min: 100, max: 100, creature: "Titan", number: "1" }
        ],
        hills: [
          { min: 1, max: 3, creature: "Cloud Giant", number: "1" },
          { min: 4, max: 10, creature: "Ettin", number: "1d2" },
          { min: 11, max: 15, creature: "Fire Giant", number: "1d2" },
          { min: 16, max: 20, creature: "Frost Giant", number: "1d2" },
          { min: 21, max: 81, creature: "Hill Giant", number: "1d4" },
          { min: 82, max: 98, creature: "Stone Giant", number: "1" },
          { min: 99, max: 99, creature: "Storm Giant", number: "1" },
          { min: 100, max: 100, creature: "Titan", number: "1" }
        ],
        mountains: [
          { min: 1, max: 15, creature: "Cloud Giant", number: "1" },
          { min: 16, max: 20, creature: "Ettin", number: "1d2" },
          { min: 21, max: 30, creature: "Fire Giant", number: "1d2" },
          { min: 31, max: 45, creature: "Frost Giant", number: "1d2" },
          { min: 46, max: 50, creature: "Hill Giant", number: "1d4" },
          { min: 51, max: 90, creature: "Stone Giant", number: "1" },
          { min: 91, max: 98, creature: "Storm Giant", number: "1" },
          { min: 99, max: 100, creature: "Titan", number: "1" }
        ]
      },
      
      humanoid: {
        plain: [
          { min: 1, max: 5, creature: "Gnoll", number: "2d6" },
          { min: 6, max: 10, creature: "Goblin", number: "3d6" },
          { min: 11, max: 15, creature: "Hobgoblin", number: "2d6" },
          { min: 16, max: 100, creature: "Orc", number: "3d6" }
        ],
        scrub: [
          { min: 1, max: 10, creature: "Gnoll", number: "2d6" },
          { min: 11, max: 15, creature: "Goblin", number: "3d6" },
          { min: 16, max: 50, creature: "Hobgoblin", number: "2d6" },
          { min: 51, max: 80, creature: "Kobold", number: "3d6" },
          { min: 81, max: 100, creature: "Orc", number: "3d6" }
        ],
        forest: [
          { min: 1, max: 10, creature: "Gnoll", number: "2d6" },
          { min: 11, max: 20, creature: "Goblin", number: "3d6" },
          { min: 21, max: 30, creature: "Hobgoblin", number: "2d6" },
          { min: 31, max: 80, creature: "Kobold", number: "3d6" },
          { min: 81, max: 100, creature: "Orc", number: "3d6" }
        ],
        rough: [
          { min: 1, max: 20, creature: "Gnoll", number: "2d6" },
          { min: 21, max: 30, creature: "Goblin", number: "3d6" },
          { min: 31, max: 50, creature: "Hobgoblin", number: "2d6" },
          { min: 51, max: 55, creature: "Kobold", number: "3d6" },
          { min: 56, max: 100, creature: "Orc", number: "3d6" }
        ],
        desert: [
          { min: 1, max: 40, creature: "Goblin", number: "3d6" },
          { min: 41, max: 90, creature: "Hobgoblin", number: "2d6" },
          { min: 91, max: 100, creature: "Orc", number: "3d6" }
        ],
        hills: [
          { min: 1, max: 25, creature: "Gnoll", number: "2d6" },
          { min: 26, max: 50, creature: "Goblin", number: "3d6" },
          { min: 51, max: 75, creature: "Hobgoblin", number: "2d6" },
          { min: 76, max: 100, creature: "Orc", number: "3d6" }
        ],
        mountains: [
          { min: 1, max: 15, creature: "Gnoll", number: "2d6" },
          { min: 16, max: 50, creature: "Goblin", number: "3d6" },
          { min: 51, max: 65, creature: "Hobgoblin", number: "2d6" },
          { min: 66, max: 100, creature: "Orc", number: "3d6" }
        ],
        marsh: [
          { min: 1, max: 25, creature: "Gnoll", number: "2d6" },
          { min: 26, max: 35, creature: "Goblin", number: "3d6" },
          { min: 36, max: 75, creature: "Hobgoblin", number: "2d6" },
          { min: 76, max: 100, creature: "Orc", number: "3d6" }
        ]
      },
      
      lycanthrope: {
        plain: [
          { min: 1, max: 2, creature: "Werebear", number: "1d2" },
          { min: 3, max: 25, creature: "Wereboar", number: "1d4" },
          { min: 26, max: 30, creature: "Wererat", number: "1d6" },
          { min: 31, max: 40, creature: "Weretiger", number: "1d2" },
          { min: 41, max: 100, creature: "Werewolf", number: "1d6" }
        ],
        forest: [
          { min: 1, max: 10, creature: "Werebear", number: "1d2" },
          { min: 11, max: 70, creature: "Wereboar", number: "1d4" },
          { min: 71, max: 90, creature: "Weretiger", number: "1d2" },
          { min: 91, max: 100, creature: "Werewolf", number: "1d6" }
        ],
        rough: [
          { min: 1, max: 2, creature: "Werebear", number: "1d2" },
          { min: 3, max: 15, creature: "Wereboar", number: "1d4" },
          { min: 16, max: 90, creature: "Wererat", number: "1d6" },
          { min: 91, max: 100, creature: "Werewolf", number: "1d6" }
        ],
        hills: [
          { min: 1, max: 2, creature: "Werebear", number: "1d2" },
          { min: 3, max: 15, creature: "Wereboar", number: "1d4" },
          { min: 16, max: 20, creature: "Wererat", number: "1d6" },
          { min: 21, max: 30, creature: "Weretiger", number: "1d2" },
          { min: 31, max: 100, creature: "Werewolf", number: "1d6" }
        ],
        mountains: [
          { min: 1, max: 75, creature: "Werebear", number: "1d2" },
          { min: 76, max: 80, creature: "Wererat", number: "1d6" },
          { min: 81, max: 90, creature: "Weretiger", number: "1d2" },
          { min: 91, max: 100, creature: "Werewolf", number: "1d6" }
        ]
      },
      
      men: {
        plain: [
          { min: 1, max: 5, creature: "Bandit", number: "2d6" },
          { min: 6, max: 7, creature: "Berserker", number: "1d6" },
          { min: 8, max: 10, creature: "Brigand", number: "2d6" },
          // 10% chance of Character (11-20) handled in code
          { min: 21, max: 22, creature: "Dervish", number: "2d6" },
          { min: 23, max: 60, creature: "Merchant", number: "1d6" },
          { min: 61, max: 90, creature: "Nomad", number: "3d10" },
          { min: 91, max: 95, creature: "Pilgrim", number: "2d6" },
          { min: 96, max: 100, creature: "Tribesman", number: "3d10" }
        ],
        scrub: [
          { min: 1, max: 10, creature: "Bandit", number: "2d6" },
          { min: 11, max: 12, creature: "Berserker", number: "1d6" },
          { min: 13, max: 15, creature: "Brigand", number: "2d6" },
          // 10% chance of Character (16-25) handled in code
          { min: 26, max: 27, creature: "Dervish", number: "2d6" },
          { min: 28, max: 60, creature: "Merchant", number: "1d6" },
          { min: 61, max: 80, creature: "Nomad", number: "3d10" },
          { min: 81, max: 85, creature: "Pilgrim", number: "2d6" },
          { min: 86, max: 100, creature: "Tribesman", number: "3d10" }
        ],
        forest: [
          { min: 1, max: 10, creature: "Bandit", number: "2d6" },
          { min: 11, max: 15, creature: "Brigand", number: "2d6" },
          // 10% chance of Character (16-25) handled in code
          { min: 26, max: 40, creature: "Merchant", number: "1d6" },
          { min: 41, max: 45, creature: "Pilgrim", number: "2d6" },
          { min: 46, max: 100, creature: "Tribesman", number: "3d10" }
        ],
        rough: [
          { min: 1, max: 10, creature: "Bandit", number: "2d6" },
          { min: 11, max: 12, creature: "Berserker", number: "1d6" },
          { min: 13, max: 15, creature: "Brigand", number: "2d6" },
          // 10% chance of Character (16-25) handled in code
          { min: 26, max: 27, creature: "Dervish", number: "2d6" },
          { min: 28, max: 50, creature: "Merchant", number: "1d6" },
          { min: 51, max: 60, creature: "Nomad", number: "3d10" },
          { min: 61, max: 80, creature: "Pilgrim", number: "2d6" },
          { min: 81, max: 100, creature: "Tribesman", number: "3d10" }
        ],
        desert: [
          { min: 1, max: 5, creature: "Bandit", number: "2d6" },
          { min: 6, max: 10, creature: "Brigand", number: "2d6" },
          // 10% chance of Character (11-20) handled in code
          { min: 21, max: 50, creature: "Dervish", number: "2d6" },
          { min: 51, max: 75, creature: "Merchant", number: "1d6" },
          { min: 76, max: 95, creature: "Nomad", number: "3d10" },
          { min: 96, max: 100, creature: "Pilgrim", number: "2d6" }
        ],
        hills: [
          { min: 1, max: 10, creature: "Bandit", number: "2d6" },
          { min: 11, max: 12, creature: "Berserker", number: "1d6" },
          { min: 13, max: 20, creature: "Brigand", number: "2d6" },
          // 10% chance of Character (21-30) handled in code
          { min: 31, max: 40, creature: "Dervish", number: "2d6" },
          { min: 41, max: 65, creature: "Merchant", number: "1d6" },
          { min: 66, max: 80, creature: "Nomad", number: "3d10" },
          { min: 81, max: 90, creature: "Pilgrim", number: "2d6" },
          { min: 91, max: 100, creature: "Tribesman", number: "3d10" }
        ],
        mountains: [
          { min: 1, max: 5, creature: "Bandit", number: "2d6" },
          { min: 6, max: 10, creature: "Berserker", number: "1d6" },
          { min: 11, max: 20, creature: "Brigand", number: "2d6" },
          // 10% chance of Character (21-30) handled in code
          { min: 31, max: 35, creature: "Dervish", number: "2d6" },
          { min: 36, max: 50, creature: "Merchant", number: "1d6" },
          { min: 51, max: 65, creature: "Pilgrim", number: "2d6" },
          { min: 66, max: 100, creature: "Tribesman", number: "3d10" }
        ],
        marsh: [
          { min: 1, max: 5, creature: "Bandit", number: "2d6" },
          { min: 6, max: 10, creature: "Brigand", number: "2d6" },
          // 10% chance of Character (11-20) handled in code
          { min: 21, max: 35, creature: "Merchant", number: "1d6" },
          { min: 36, max: 30, creature: "Pilgrim", number: "2d6" },
          { min: 31, max: 100, creature: "Tribesman", number: "3d10" }
        ]
      },
        undeadTables: {
        forest: [
          { min: 1, max: 10, creature: "Ghast", number: "1d4" },
          { min: 11, max: 12, creature: "Ghost", number: "1" },
          { min: 13, max: 55, creature: "Ghoul", number: "1d6" },
          { min: 56, max: 56, creature: "Lich", number: "1" },
          { min: 57, max: 70, creature: "Shadow", number: "1d8" },
          { min: 71, max: 79, creature: "Spectre", number: "1d4" },
          { min: 80, max: 89, creature: "Vampire", number: "1" },
          { min: 90, max: 96, creature: "Wight", number: "1d6" },
          { min: 97, max: 100, creature: "Wraith", number: "1d4" }
        ],
        rough: [
          { min: 1, max: 15, creature: "Ghast", number: "1d4" },
          { min: 16, max: 20, creature: "Ghost", number: "1" },
          { min: 21, max: 55, creature: "Ghoul", number: "1d6" },
          { min: 56, max: 60, creature: "Lich", number: "1" },
          { min: 61, max: 70, creature: "Mummy", number: "1d3" },
          { min: 71, max: 84, creature: "Shadow", number: "1d8" },
          { min: 85, max: 87, creature: "Spectre", number: "1d4" },
          { min: 88, max: 89, creature: "Vampire", number: "1" },
          { min: 90, max: 98, creature: "Wight", number: "1d6" },
          { min: 99, max: 100, creature: "Wraith", number: "1d4" }
        ],
        hills: [
          { min: 1, max: 10, creature: "Ghast", number: "1d4" },
          { min: 11, max: 12, creature: "Ghost", number: "1" },
          { min: 13, max: 35, creature: "Ghoul", number: "1d6" },
          { min: 36, max: 40, creature: "Lich", number: "1" },
          { min: 41, max: 55, creature: "Mummy", number: "1d3" },
          { min: 56, max: 61, creature: "Shadow", number: "1d8" },
          { min: 62, max: 64, creature: "Spectre", number: "1d4" },
          { min: 65, max: 74, creature: "Vampire", number: "1" },
          { min: 75, max: 97, creature: "Wight", number: "1d6" },
          { min: 98, max: 100, creature: "Wraith", number: "1d4" }
        ],
        mountains: [
          { min: 1, max: 10, creature: "Ghast", number: "1d4" },
          { min: 11, max: 13, creature: "Ghost", number: "1" },
          { min: 14, max: 30, creature: "Ghoul", number: "1d6" },
          { min: 31, max: 35, creature: "Lich", number: "1" },
          { min: 36, max: 40, creature: "Mummy", number: "1d3" },
          { min: 41, max: 50, creature: "Shadow", number: "1d8" },
          { min: 51, max: 60, creature: "Spectre", number: "1d4" },
          { min: 61, max: 75, creature: "Vampire", number: "1" },
          { min: 76, max: 94, creature: "Wight", number: "1d6" },
          { min: 95, max: 100, creature: "Wraith", number: "1d4" }
        ],
        marsh: [
          { min: 1, max: 15, creature: "Ghast", number: "1d4" },
          { min: 16, max: 18, creature: "Ghost", number: "1" },
          { min: 19, max: 75, creature: "Ghoul", number: "1d6" },
          { min: 76, max: 81, creature: "Shadow", number: "1d8" },
          { min: 82, max: 91, creature: "Spectre", number: "1d4" },
          { min: 92, max: 93, creature: "Vampire", number: "1" },
          { min: 94, max: 100, creature: "Wraith", number: "1d4" }
        ]
      }
      
      // Add other subtables as needed
    };

// Add this new object for inhabited/patrolled area tables
export const TEMPERATE_INHABITED_TABLES = {
    plain: [
      { min: 1, max: 2, creature: "Anhkheg", number: "1" },
      { min: 3, max: 5, creature: "Ant, giant", number: "1d4" },
      { min: 6, max: 10, creature: "Boar, wild", number: "1d6" },
      { min: 11, max: 11, creature: "Bulette", number: "1" },
      { min: 12, max: 12, creature: "Elf", number: "2d6" },
      { min: 13, max: 13, creature: "Giant, hill", number: "1" },
      { min: 14, max: 15, creature: "Gnoll", number: "2d6" },
      { min: 16, max: 16, creature: "Gnome", number: "2d6" },
      { min: 17, max: 18, creature: "Goblin", number: "3d6" },
      { min: 19, max: 19, creature: "Groaning spirit", number: "1" },
      { min: 20, max: 21, creature: "Halfling", number: "3d6" },
      { min: 22, max: 22, creature: "Hobgoblin", number: "2d6" },
      { min: 23, max: 23, creature: "Leprechaun", number: "1d6" },
      { min: 24, max: 24, creature: "Lycanthrope, weretiger", number: "1d2" },
      { min: 25, max: 26, creature: "Lycanthrope, werewolf", number: "1d6" },
      { min: 27, max: 27, creature: "Manticore", number: "1" },
      { min: 28, max: 32, creature: "Men, bandit", number: "3d10" },
      { min: 33, max: 34, creature: "Men, berserker", number: "2d6" },
      { min: 35, max: 38, creature: "Men, brigand", number: "3d10" },
      { min: 39, max: 40, creature: "Men, dervish", number: "2d10" },
      { min: 41, max: 68, creature: "Men, merchant", number: "2d6" },
      { min: 69, max: 70, creature: "Men, nomad", number: "3d10" },
      { min: 71, max: 80, creature: "Men, pilgrim", number: "3d10" },
      { min: 81, max: 83, creature: "Ogre", number: "1d3" },
      { min: 84, max: 87, creature: "Orc", number: "3d10" },
      { min: 88, max: 89, creature: "Rat, giant", number: "5d10" },
      { min: 90, max: 91, creature: "Skunk, giant", number: "1d2" },
      { min: 92, max: 92, creature: "Vampire", number: "1" },
      { min: 93, max: 100, creature: "Wolf", number: "2d6" }
    ],
  
    scrub: [
      { min: 1, max: 1, creature: "Anhkheg", number: "1" },
      { min: 2, max: 2, creature: "Ant, giant", number: "1d4" },
      { min: 3, max: 4, creature: "Bear, black", number: "1d4" },
      { min: 5, max: 5, creature: "Beetle, bombardier", number: "1d6" },
      { min: 6, max: 6, creature: "Beetle, stag", number: "1d6" },
      { min: 7, max: 8, creature: "Boar, wild", number: "1d6" },
      { min: 9, max: 9, creature: "Bulette", number: "1" },
      { min: 10, max: 11, creature: "Elf", number: "2d6" },
      { min: 12, max: 12, creature: "Ghast", number: "1d4" },
      { min: 13, max: 13, creature: "Giant, hill", number: "1" },
      { min: 14, max: 14, creature: "Gnoll", number: "2d6" },
      { min: 15, max: 15, creature: "Ghoul", number: "1d6" },
      { min: 16, max: 17, creature: "Hobgoblin", number: "2d6" },
      { min: 18, max: 19, creature: "Lycanthrope, wereboar", number: "1d4" },
      { min: 20, max: 20, creature: "Lycanthrope, wererat", number: "1d6" },
      { min: 21, max: 21, creature: "Lycanthrope, weretiger", number: "1d2" },
      { min: 22, max: 22, creature: "Manticore", number: "1" },
      { min: 23, max: 27, creature: "Men, bandit", number: "3d10" },
      { min: 28, max: 29, creature: "Men, berserker", number: "2d6" },
      { min: 30, max: 34, creature: "Men, brigand", number: "3d10" },
      { min: 35, max: 36, creature: "Men, dervish", number: "2d10" },
      { min: 37, max: 56, creature: "Men, merchant", number: "2d6" },
      { min: 57, max: 58, creature: "Men, nomad", number: "3d10" },
      { min: 59, max: 69, creature: "Men, pilgrim", number: "3d10" },
      { min: 70, max: 76, creature: "Ogre", number: "1d3" },
      { min: 77, max: 86, creature: "Orc", number: "3d10" },
      { min: 87, max: 89, creature: "Rat, giant", number: "5d10" },
      { min: 90, max: 91, creature: "Skunk, giant", number: "1d2" },
      { min: 92, max: 100, creature: "Wolf", number: "2d6" }
    ],
  
    forest: [
      { min: 1, max: 2, creature: "Ant, giant", number: "1d4" },
      { min: 3, max: 4, creature: "Bear, black", number: "1d4" },
      { min: 5, max: 7, creature: "Bear, brown", number: "1d4" },
      { min: 8, max: 9, creature: "Beetle, bombardier", number: "1d6" },
      { min: 10, max: 11, creature: "Beetle, stag", number: "1d6" },
      { min: 12, max: 14, creature: "Boar, wild", number: "1d6" },
      { min: 15, max: 18, creature: "Elf", number: "2d6" },
      { min: 19, max: 19, creature: "Giant, hill", number: "1" },
      { min: 20, max: 20, creature: "Gnoll", number: "2d6" },
      { min: 21, max: 22, creature: "Gnome", number: "2d6" },
      { min: 23, max: 23, creature: "Goblin", number: "3d6" },
      { min: 24, max: 24, creature: "Halfling", number: "3d6" },
      { min: 25, max: 25, creature: "Hobgoblin", number: "2d6" },
      { min: 26, max: 26, creature: "Lycanthrope, werebear", number: "1d2" },
      { min: 27, max: 27, creature: "Lycanthrope, wereboar", number: "1d4" },
      { min: 28, max: 28, creature: "Lycanthrope, weretiger", number: "1d2" },
      { min: 29, max: 29, creature: "Lycanthrope, werewolf", number: "1d6" },
      { min: 30, max: 32, creature: "Men, bandit", number: "3d10" },
      { min: 33, max: 35, creature: "Men, berserker", number: "2d6" },
      { min: 36, max: 40, creature: "Men, brigand", number: "3d10" },
      { min: 41, max: 42, creature: "Men, dervish", number: "2d10" },
      { min: 43, max: 55, creature: "Men, merchant", number: "2d6" },
      { min: 56, max: 60, creature: "Men, pilgrim", number: "3d10" },
      { min: 61, max: 70, creature: "Ogre", number: "1d3" },
      { min: 71, max: 82, creature: "Orc", number: "3d10" },
      { min: 83, max: 85, creature: "Rat, giant", number: "5d10" },
      { min: 86, max: 91, creature: "Skunk, giant", number: "1d2" },
      { min: 92, max: 92, creature: "Vampire", number: "1" },
      { min: 93, max: 100, creature: "Wolf", number: "2d6" }
    ],
  
    rough: [
      { min: 1, max: 2, creature: "Ant, giant", number: "1d4" },
      { min: 3, max: 4, creature: "Bear, black", number: "1d4" },
      { min: 5, max: 6, creature: "Boar, wild", number: "1d6" },
      { min: 7, max: 8, creature: "Dwarf", number: "2d6" },
      { min: 9, max: 10, creature: "Ghast", number: "1d4" },
      { min: 11, max: 11, creature: "Ghost", number: "1" },
      { min: 12, max: 14, creature: "Ghoul", number: "1d6" },
      { min: 15, max: 16, creature: "Giant, hill", number: "1" },
      { min: 17, max: 18, creature: "Gnoll", number: "2d6" },
      { min: 19, max: 20, creature: "Gnome", number: "2d6" },
      { min: 21, max: 22, creature: "Goblin", number: "3d6" },
      { min: 23, max: 23, creature: "Hobgoblin", number: "2d6" },
      { min: 24, max: 25, creature: "Lycanthrope, wererat", number: "1d6" },
      { min: 26, max: 26, creature: "Lycanthrope, werewolf", number: "1d6" },
      { min: 27, max: 27, creature: "Manticore", number: "1" },
      { min: 28, max: 32, creature: "Men, bandit", number: "3d10" },
      { min: 33, max: 34, creature: "Men, berserker", number: "2d6" },
      { min: 35, max: 39, creature: "Men, brigand", number: "3d10" },
      { min: 40, max: 44, creature: "Men, dervish", number: "2d10" },
      { min: 45, max: 55, creature: "Men, merchant", number: "2d6" },
      { min: 56, max: 57, creature: "Men, nomad", number: "3d10" },
      { min: 58, max: 63, creature: "Men, pilgrim", number: "3d10" },
      { min: 64, max: 69, creature: "Ogre", number: "1d3" },
      { min: 70, max: 82, creature: "Orc", number: "3d10" },
      { min: 83, max: 85, creature: "Rat, giant", number: "5d10" },
      { min: 86, max: 87, creature: "Skunk, giant", number: "1d2" },
      { min: 88, max: 89, creature: "Will-o-wisp", number: "1" },
      { min: 90, max: 100, creature: "Wolf", number: "2d6" }
    ],
  
    desert: [
      { min: 1, max: 3, creature: "Gnoll", number: "2d6" },
      { min: 4, max: 7, creature: "Manticore", number: "1" },
      { min: 8, max: 12, creature: "Men, bandit", number: "3d10" },
      { min: 13, max: 14, creature: "Men, berserker", number: "2d6" },
      { min: 15, max: 19, creature: "Men, brigand", number: "3d10" },
      { min: 20, max: 30, creature: "Men, dervish", number: "2d10" },
      { min: 31, max: 56, creature: "Men, merchant", number: "2d6" },
      { min: 57, max: 76, creature: "Men, nomad", number: "3d10" },
      { min: 77, max: 84, creature: "Men, pilgrim", number: "3d10" },
      { min: 85, max: 94, creature: "Orc", number: "3d10" },
      { min: 95, max: 95, creature: "Vampire", number: "1" },
      { min: 96, max: 100, creature: "Wolf", number: "2d6" }
    ],
  
    hills: [
      { min: 1, max: 1, creature: "Ant, giant", number: "1d4" },
      { min: 2, max: 2, creature: "Bear, black", number: "1d4" },
      { min: 3, max: 3, creature: "Bear, brown", number: "1d4" },
      { min: 4, max: 5, creature: "Boar, wild", number: "1d6" },
      { min: 6, max: 6, creature: "Bulette", number: "1" },
      { min: 7, max: 8, creature: "Dwarf", number: "2d6" },
      { min: 9, max: 10, creature: "Elf", number: "2d6" },
      { min: 11, max: 15, creature: "Giant, hill", number: "1" },
      { min: 16, max: 17, creature: "Gnoll", number: "2d6" },
      { min: 18, max: 21, creature: "Gnome", number: "2d6" },
      { min: 22, max: 23, creature: "Goblin", number: "3d6" },
      { min: 24, max: 24, creature: "Groaning spirit", number: "1" },
      { min: 25, max: 27, creature: "Halfling", number: "3d6" },
      { min: 28, max: 28, creature: "Hobgoblin", number: "2d6" },
      { min: 29, max: 30, creature: "Leprechaun", number: "1d6" },
      { min: 31, max: 31, creature: "Leucrotta", number: "1d2" },
      { min: 32, max: 32, creature: "Manticore", number: "1" },
      { min: 33, max: 36, creature: "Men, bandit", number: "3d10" },
      { min: 37, max: 38, creature: "Men, berserker", number: "2d6" },
      { min: 39, max: 44, creature: "Men, brigand", number: "3d10" },
      { min: 45, max: 46, creature: "Men, dervish", number: "2d10" },
      { min: 47, max: 60, creature: "Men, merchant", number: "2d6" },
      { min: 61, max: 62, creature: "Men, nomad", number: "3d10" },
      { min: 63, max: 67, creature: "Men, pilgrim", number: "3d10" },
      { min: 68, max: 75, creature: "Ogre", number: "1d3" },
      { min: 76, max: 85, creature: "Orc", number: "3d10" },
      { min: 86, max: 88, creature: "Rat, giant", number: "5d10" },
      { min: 89, max: 90, creature: "Skunk, giant", number: "1d2" },
      { min: 91, max: 100, creature: "Wolf", number: "2d6" }
    ],
  
    mountains: [
      { min: 1, max: 2, creature: "Bear, black", number: "1d4" },
      { min: 3, max: 15, creature: "Dwarf", number: "2d6" },
      { min: 16, max: 17, creature: "Giant, hill", number: "1" },
      { min: 18, max: 19, creature: "Gnoll", number: "2d6" },
      { min: 20, max: 21, creature: "Gnome", number: "2d6" },
      { min: 22, max: 24, creature: "Goblin", number: "3d6" },
      { min: 25, max: 26, creature: "Hobgoblin", number: "2d6" },
      { min: 27, max: 27, creature: "Lycanthrope, werebear", number: "1d2" },
      { min: 28, max: 29, creature: "Lycanthrope, werewolf", number: "1d6" },
      { min: 30, max: 30, creature: "Manticore", number: "1" },
      { min: 31, max: 32, creature: "Men, bandit", number: "3d10" },
      { min: 33, max: 34, creature: "Men, berserker", number: "2d6" },
      { min: 35, max: 39, creature: "Men, brigand", number: "3d10" },
      { min: 40, max: 41, creature: "Men, dervish", number: "2d10" },
      { min: 42, max: 51, creature: "Men, merchant", number: "2d6" },
      { min: 52, max: 59, creature: "Men, pilgrim", number: "3d10" },
      { min: 60, max: 67, creature: "Ogre", number: "1d3" },
      { min: 68, max: 80, creature: "Orc", number: "3d10" },
      { min: 81, max: 87, creature: "Vampire", number: "1" },
      { min: 88, max: 89, creature: "Will-o-wisp", number: "1" },
      { min: 90, max: 100, creature: "Wolf", number: "2d6" }
    ],
  
    marsh: [
      { min: 1, max: 5, creature: "Bear, black", number: "1d4" },
      { min: 6, max: 8, creature: "Boar, wild", number: "1d6" },
      { min: 9, max: 10, creature: "Ghoul", number: "1d6" },
      { min: 11, max: 13, creature: "Gnoll", number: "2d6" },
      { min: 14, max: 14, creature: "Groaning spirit", number: "1" },
      { min: 15, max: 15, creature: "Hobgoblin", number: "2d6" },
      { min: 16, max: 16, creature: "Lycanthrope, wererat", number: "1d6" },
      { min: 17, max: 17, creature: "Lycanthrope, werewolf", number: "1d6" },
      { min: 18, max: 19, creature: "Manticore", number: "1" },
      { min: 20, max: 22, creature: "Men, bandit", number: "3d10" },
      { min: 23, max: 24, creature: "Men, berserker", number: "2d6" },
      { min: 25, max: 29, creature: "Men, brigand", number: "3d10" },
      { min: 30, max: 31, creature: "Men, pilgrim", number: "3d10" },
      { min: 32, max: 40, creature: "Ogre", number: "1d3" },
      { min: 41, max: 60, creature: "Orc", number: "3d10" },
      { min: 61, max: 75, creature: "Rat, giant", number: "5d10" },
      { min: 76, max: 80, creature: "Vampire", number: "1" },
      { min: 81, max: 100, creature: "Will-o-wisp", number: "1" }
    ]
  };
  
  // Tropical and Near-Tropical Conditions tables for Uninhabited/Wilderness Areas
export const TROPICAL_UNINHABITED_TABLES = {
    plain: [
      { min: 1, max: 2, creature: "Ant, giant", number: "1d4" },
      { min: 3, max: 5, creature: "Boar, warthog", number: "1d6" },
      { min: 6, max: 10, creature: "Buffalo", number: "2d10" },
      { min: 11, max: 16, creature: "Flightless bird", number: "1d6" },
      { min: 17, max: 35, creature: "Herd animal", number: "3d10" },
      { min: 36, max: 40, creature: "Hyena", number: "2d6" },
      { min: 41, max: 44, creature: "Jackal", number: "2d8", notes: "10% chance of jackalwere" },
      { min: 45, max: 45, creature: "Jackalwere", number: "1d4" },
      { min: 46, max: 55, creature: "Lion", number: "1d4" },
      { min: 56, max: 59, creature: "Men, bandit", number: "3d10", notes: "Slavers" },
      { min: 60, max: 60, creature: "Men, dervish", number: "2d10" },
      { min: 61, max: 68, creature: "Men, merchant", number: "2d6" },
      { min: 69, max: 70, creature: "Men, nomad", number: "3d10" },
      { min: 71, max: 80, creature: "Rhinoceros", number: "1d4" },
      { min: 81, max: 85, creature: "Roc", number: "1" },
      { min: 86, max: 90, creature: "Scorpion, giant", number: "1d3" },
      { min: 91, max: 92, creature: "Snake, amphisbaena", number: "1" },
      { min: 93, max: 95, creature: "Snake, spitting", number: "1d3" },
      { min: 96, max: 100, creature: "Wolf/Wild dog", number: "2d6" }
    ],
    
    scrub: [
      { min: 1, max: 2, creature: "Ant, giant", number: "1d4" },
      { min: 3, max: 5, creature: "Baboon", number: "2d8" },
      { min: 6, max: 8, creature: "Boar, warthog", number: "1d6" },
      { min: 9, max: 12, creature: "Buffalo", number: "2d10" },
      { min: 13, max: 16, creature: "Camel", number: "1d6" },
      { min: 17, max: 20, creature: "Elephant", number: "1d6" },
      { min: 21, max: 22, creature: "Flightless bird", number: "1d6" },
      { min: 23, max: 35, creature: "Herd animal", number: "3d10" },
      { min: 36, max: 40, creature: "Hyena", number: "2d6" },
      { min: 41, max: 44, creature: "Jackal", number: "2d8", notes: "10% chance of jackalwere" },
      { min: 45, max: 45, creature: "Jackalwere", number: "1d4" },
      { min: 46, max: 46, creature: "Lammasu/Shedu", number: "1" },
      { min: 47, max: 50, creature: "Leopard", number: "1d3" },
      { min: 51, max: 55, creature: "Lion", number: "1d4" },
      { min: 56, max: 59, creature: "Men, bandit", number: "3d10", notes: "Slavers" },
      { min: 60, max: 65, creature: "Men, merchant", number: "2d6" },
      { min: 66, max: 71, creature: "Men, tribesman", number: "3d10" },
      { min: 72, max: 77, creature: "Rhinoceros", number: "1d4" },
      { min: 78, max: 84, creature: "Roc", number: "1" },
      { min: 85, max: 86, creature: "Scorpion, giant", number: "1d3" },
      { min: 87, max: 92, creature: "Snake", subtable: "snake_tropical", number: "1d3" },
      { min: 93, max: 95, creature: "Spider", subtable: "spider", number: "1d4" },
      { min: 96, max: 100, creature: "Wolf/Wild dog", number: "2d6" }
    ],
    
    forest: [
      { min: 1, max: 2, creature: "Ant, giant", number: "1d4" },
      { min: 3, max: 5, creature: "Ape", number: "2d4" },
      { min: 6, max: 6, creature: "Baboon", number: "2d8" },
      { min: 7, max: 9, creature: "Bear, black", number: "1d4" },
      { min: 10, max: 12, creature: "Beetle, rhinoceros", number: "1d3" },
      { min: 13, max: 16, creature: "Centipede, giant", number: "3d6" },
      { min: 17, max: 18, creature: "Couatl", number: "1" },
      { min: 19, max: 24, creature: "Elephant", number: "1d6" },
      { min: 25, max: 30, creature: "Elephant, loxodont", number: "1d6" },
      { min: 31, max: 33, creature: "Herd animal", number: "3d10" },
      { min: 34, max: 38, creature: "Jaguar", number: "1d2" },
      { min: 39, max: 40, creature: "Lamia", number: "1" },
      { min: 41, max: 47, creature: "Leopard", number: "1d3" },
      { min: 48, max: 50, creature: "Lion", number: "1d4" },
      { min: 51, max: 52, creature: "Lycanthrope, weretiger", number: "1d2" },
      { min: 53, max: 56, creature: "Men, bandit", number: "3d10", notes: "Slavers" },
      { min: 57, max: 60, creature: "Men, tribesman", number: "3d10" },
      { min: 61, max: 64, creature: "Snake, giant, constricting", number: "1" },
      { min: 65, max: 70, creature: "Snake, poisonous", number: "1d3" },
      { min: 71, max: 74, creature: "Snake, spitting", number: "1d3" },
      { min: 75, max: 76, creature: "Spectre", number: "1" },
      { min: 77, max: 80, creature: "Spider, giant", number: "1" },
      { min: 81, max: 86, creature: "Spider, huge", number: "1d4" },
      { min: 87, max: 95, creature: "Tiger", number: "1d3" },
      { min: 96, max: 98, creature: "Toad, giant", number: "1d3" },
      { min: 99, max: 100, creature: "Toad, giant, poisonous", number: "1d2" }
    ],
    
    rough: [
      { min: 1, max: 2, creature: "Ant, giant", number: "1d4" },
      { min: 3, max: 7, creature: "Baboon", number: "2d8" },
      { min: 8, max: 9, creature: "Bear, black", number: "1d4" },
      { min: 10, max: 13, creature: "Boar, warthog", number: "1d6" },
      { min: 14, max: 15, creature: "Buffalo", number: "2d10" },
      { min: 16, max: 18, creature: "Herd animal", number: "3d10" },
      { min: 19, max: 25, creature: "Hyena", number: "2d6" },
      { min: 26, max: 29, creature: "Jackal", number: "2d8", notes: "10% chance of jackalwere" },
      { min: 30, max: 30, creature: "Jackalwere", number: "1d4" },
      { min: 31, max: 35, creature: "Lamia", number: "1" },
      { min: 36, max: 38, creature: "Lammasu/Shedu", number: "1" },
      { min: 39, max: 40, creature: "Leopard", number: "1d3" },
      { min: 41, max: 45, creature: "Lion", number: "1d4" },
      { min: 46, max: 48, creature: "Men, bandit", number: "3d10", notes: "Slavers" },
      { min: 49, max: 50, creature: "Men, dervish", number: "2d10" },
      { min: 51, max: 53, creature: "Men, merchant", number: "2d6" },
      { min: 54, max: 60, creature: "Men, nomad", number: "3d10" },
      { min: 61, max: 68, creature: "Men, pilgrim", number: "3d10" },
      { min: 69, max: 72, creature: "Men, tribesman", number: "3d10" },
      { min: 73, max: 74, creature: "Naga, guardian", number: "1" },
      { min: 75, max: 76, creature: "Naga, spirit", number: "1" },
      { min: 77, max: 80, creature: "Rakshasa", number: "1" },
      { min: 81, max: 83, creature: "Roc", number: "1" },
      { min: 84, max: 85, creature: "Scorpion, giant", number: "1d3" },
      { min: 86, max: 88, creature: "Snake, poisonous", number: "1d3" },
      { min: 89, max: 90, creature: "Snake, spitting", number: "1d3" },
      { min: 91, max: 93, creature: "Spectre", number: "1" },
      { min: 94, max: 95, creature: "Sphinx", subtable: "sphinx_tropical", number: "1" },
      { min: 96, max: 100, creature: "Wolf/Wild dog", number: "2d6" }
    ],
    
    desert: [
      { min: 1, max: 4, creature: "Baboon", number: "2d8" },
      { min: 5, max: 11, creature: "Camel", number: "1d6" },
      { min: 12, max: 14, creature: "Centipede, giant", number: "3d6" },
      { min: 15, max: 16, creature: "Herd animal", number: "3d10" },
      { min: 17, max: 24, creature: "Jackal", number: "2d8", notes: "10% chance of jackalwere" },
      { min: 25, max: 25, creature: "Jackalwere", number: "1d4" },
      { min: 26, max: 28, creature: "Lamia", number: "1" },
      { min: 29, max: 35, creature: "Lammasu/Shedu", number: "1" },
      { min: 36, max: 37, creature: "Leopard", number: "1d3" },
      { min: 38, max: 40, creature: "Lion", number: "1d4" },
      { min: 41, max: 45, creature: "Men, bandit", number: "3d10", notes: "Slavers" },
      { min: 46, max: 55, creature: "Men, dervish", number: "2d10" },
      { min: 56, max: 65, creature: "Men, merchant", number: "2d6" },
      { min: 66, max: 81, creature: "Men, nomad", number: "3d10" },
      { min: 82, max: 83, creature: "Men, pilgrim", number: "3d10" },
      { min: 84, max: 89, creature: "Scorpion, giant", number: "1d3" },
      { min: 90, max: 91, creature: "Snake, amphisbaena", number: "1" },
      { min: 92, max: 93, creature: "Snake, poisonous", number: "1d3" },
      { min: 94, max: 95, creature: "Snake, spitting", number: "1d3" },
      { min: 96, max: 100, creature: "Sphinx", subtable: "sphinx_tropical", number: "1" }
    ],
    
    hills: [
      { min: 1, max: 2, creature: "Ant, giant", number: "1d4" },
      { min: 3, max: 7, creature: "Baboon", number: "2d8" },
      { min: 8, max: 10, creature: "Buffalo", number: "2d10" },
      { min: 11, max: 20, creature: "Herd animal", number: "3d10" },
      { min: 21, max: 25, creature: "Hyena", number: "2d6" },
      { min: 26, max: 29, creature: "Jackal", number: "2d8", notes: "10% chance of jackalwere" },
      { min: 30, max: 30, creature: "Jackalwere", number: "1d4" },
      { min: 31, max: 32, creature: "Lammasu/Shedu", number: "1" },
      { min: 33, max: 38, creature: "Leopard", number: "1d3" },
      { min: 39, max: 40, creature: "Lycanthrope, weretiger", number: "1d2" },
      { min: 41, max: 45, creature: "Men, bandit", number: "3d10", notes: "Slavers" },
      { min: 46, max: 55, creature: "Men, dervish", number: "2d10" },
      { min: 56, max: 63, creature: "Men, merchant", number: "2d6" },
      { min: 64, max: 68, creature: "Men, nomad", number: "3d10" },
      { min: 69, max: 74, creature: "Men, tribesman", number: "3d10" },
      { min: 75, max: 75, creature: "Naga, guardian", number: "1" },
      { min: 76, max: 78, creature: "Naga, spirit", number: "1" },
      { min: 79, max: 80, creature: "Rakshasa", number: "1" },
      { min: 81, max: 85, creature: "Roc", number: "1" },
      { min: 86, max: 87, creature: "Scorpion, giant", number: "1d3" },
      { min: 88, max: 90, creature: "Sphinx", subtable: "sphinx_tropical", number: "1" },
      { min: 91, max: 95, creature: "Tiger", number: "1d3" },
      { min: 96, max: 100, creature: "Wolf/Wild dog", number: "2d6" }
    ],
    
    mountains: [
      { min: 1, max: 3, creature: "Baboon", number: "2d8" },
      { min: 4, max: 6, creature: "Bear, black", number: "1d4" },
      { min: 7, max: 10, creature: "Herd animal", number: "3d10" },
      { min: 11, max: 15, creature: "Lammasu/Shedu", number: "1" },
      { min: 16, max: 20, creature: "Leopard", number: "1d3" },
      { min: 21, max: 22, creature: "Lycanthrope, weretiger", number: "1d2" },
      { min: 23, max: 28, creature: "Men, bandit", number: "3d10", notes: "Slavers" },
      { min: 29, max: 30, creature: "Men, dervish", number: "2d10" },
      { min: 31, max: 35, creature: "Men, merchant", number: "2d6" },
      { min: 36, max: 38, creature: "Men, nomad", number: "3d10" },
      { min: 39, max: 50, creature: "Men, tribesman", number: "3d10" },
      { min: 51, max: 53, creature: "Naga, guardian", number: "1" },
      { min: 54, max: 55, creature: "Naga, spirit", number: "1" },
      { min: 56, max: 60, creature: "Rakshasa", number: "1" },
      { min: 61, max: 70, creature: "Roc", number: "1" },
      { min: 71, max: 75, creature: "Snake, poisonous", number: "1d3" },
      { min: 76, max: 80, creature: "Sphinx", subtable: "sphinx_tropical", number: "1" },
      { min: 81, max: 90, creature: "Tiger", number: "1d3" },
      { min: 91, max: 100, creature: "Wolf/Wild dog", number: "2d6" }
    ],
    
    marsh: [
      { min: 1, max: 10, creature: "Crocodile", number: "2d6" },
      { min: 11, max: 35, creature: "Crocodile, giant", number: "1d4" },
      { min: 36, max: 50, creature: "Hippopotamus", number: "1d6" },
      { min: 51, max: 55, creature: "Leech, giant", number: "2d6" },
      { min: 56, max: 60, creature: "Lizard, subterranean", number: "1d3" },
      { min: 61, max: 73, creature: "Men, tribesman", number: "3d10" },
      { min: 74, max: 75, creature: "Naga, water", number: "1" },
      { min: 76, max: 80, creature: "Snake, giant, constricting", number: "1" },
      { min: 81, max: 85, creature: "Snake, poisonous", number: "1d3" },
      { min: 86, max: 89, creature: "Spider, large", number: "2d8" },
      { min: 90, max: 96, creature: "Toad, giant", number: "1d3" },
      { min: 97, max: 100, creature: "Toad, giant, poisonous", number: "1d2" }
    ]
  };
  
  // Add these to your TEMPERATE_SUBTABLES object or create a new TROPICAL_SUBTABLES object
export const TROPICAL_SUBTABLES = {
    snake_tropical: [
      { min: 1, max: 15, creature: "Amphisbaena", number: "1" },
      { min: 16, max: 70, creature: "Poisonous Snake", number: "1d3" },
      { min: 71, max: 100, creature: "Spitting Snake", number: "1d3" }
    ],
    
    sphinx_tropical: [
      { min: 1, max: 40, creature: "Androsphinx", number: "1" },
      { min: 41, max: 50, creature: "Criosphinx", number: "1" },
      { min: 51, max: 90, creature: "Gynosphinx", number: "1" },
      { min: 91, max: 100, creature: "Hieracosphinx", number: "1" }
    ]
  };

  // Subtables
  export const TEMPERATE_SUBTABLES = {
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
    lycanthrope: [
      { min: 1, max: 2, creature: "Werebear", number: "1d2" },
      { min: 3, max: 25, creature: "Wereboar", number: "1d4" },
      { min: 26, max: 30, creature: "Wererat", number: "1d6" },
      { min: 31, max: 40, creature: "Weretiger", number: "1d2" },
      { min: 41, max: 100, creature: "Werewolf", number: "1d6" }
    ],
    men: [
      { min: 1, max: 5, creature: "Bandit", number: "2d6" },
      { min: 6, max: 7, creature: "Berserker", number: "1d6" },
      { min: 8, max: 10, creature: "Brigand", number: "2d6" },
      // Characters - 10% chance (handled in code)
      { min: 21, max: 22, creature: "Dervish", number: "2d6" },
      { min: 23, max: 60, creature: "Merchant", number: "1d6" },
      { min: 61, max: 90, creature: "Nomad", number: "3d10" },
      { min: 91, max: 95, creature: "Pilgrim", number: "2d6" },
      { min: 96, max: 100, creature: "Tribesman", number: "3d10" }
    ],
    snake: [
      { min: 1, max: 10, creature: "Amphisbaena", number: "1" },
      { min: 11, max: 80, creature: "Poisonous Snake", number: "1d3" },
      { min: 81, max: 100, creature: "Spitting Snake", number: "1" }
    ],
    spider: [
      { min: 1, max: 15, creature: "Huge Spider", number: "1d4" },
      { min: 16, max: 100, creature: "Large Spider", number: "1d6" }
    ],
    sphinx: [
      { min: 1, max: 5, creature: "Androsphinx", number: "1" },
      { min: 6, max: 75, creature: "Criosphinx", number: "1" },
      { min: 76, max: 80, creature: "Gynosphinx", number: "1" },
      { min: 81, max: 100, creature: "Hieracosphinx", number: "1" }
    ],
    undead: [
      { min: 1, max: 10, creature: "Ghast", number: "1d4" },
      { min: 11, max: 12, creature: "Ghost", number: "1" },
      { min: 13, max: 55, creature: "Ghoul", number: "1d6" },
      { min: 56, max: 56, creature: "Lich", number: "1" },
      { min: 57, max: 70, creature: "Shadow", number: "1d8" },
      { min: 71, max: 79, creature: "Spectre", number: "1d4" },
      { min: 80, max: 89, creature: "Vampire", number: "1" },
      { min: 90, max: 96, creature: "Wight", number: "1d6" },
      { min: 97, max: 100, creature: "Wraith", number: "1d4" }
    ]
  };

  // Add to dmg-monster-tables.js
export const MM_HUMAN_TABLES = {
  bandit: {
    numberRange: [20, 200],
    dungeonNumberRange: [5, 30],
    leaderLevels: {
      small: 8,  // <100 bandits
      medium: 9, // 100-150 bandits
      large: 10  // >150 bandits
    },
    equipment: [
      { percent: 10, type: "medium horse, chainmail & shield, sword" },
      { percent: 10, type: "light horse, leather armor & shield, spear" },
      { percent: 10, type: "light horse, leather armor, light crossbow" },
      { percent: 10, type: "leather armor, pole arm" },
      { percent: 10, type: "leather armor, light crossbow" },
      { percent: 10, type: "leather armor, short bow" },
      { percent: 40, type: "leather armor & shield, sword" }
    ],
    specialMembers: {
      lieutenant: { level: 7, class: "Fighter", count: 1 },
      guards: { level: 2, class: "Fighter", count: 6 },
      thirdLevel: { level: 3, class: "Fighter", countFormula: "Math.floor(number/20)" },
      fourthLevel: { level: 4, class: "Fighter", countFormula: "Math.floor(number/30)" },
      fifthLevel: { level: 5, class: "Fighter", countFormula: "Math.floor(number/40)" },
      sixthLevel: { level: 6, class: "Fighter", countFormula: "Math.floor(number/50)" },
      magicUser: { 
        level: "7-10", 
        class: "Magic-User", 
        chanceFormula: "Math.min(100, Math.floor(number/50) * 25)",
        countFormula: "1"
      },
      cleric: {
        level: "5-6",
        class: "Cleric",
        chanceFormula: "Math.min(100, Math.floor(number/50) * 15)",
        countFormula: "1",
        assistant: { level: "3-4", class: "Cleric", count: 1 }
      }
    },
    alignment: "N",
    notes: "Bandits roam every clime from temperate to subtropical."
  },
  
  brigand: {
    // Copy bandit entry and modify
    inherits: "bandit",
    numberRange: [20, 200],
    dungeonNumberRange: [5, 30],
    leaderLevels: {
      small: 8,  // <100 brigands
      medium: 9, // 100-150 brigands
      large: 10  // >150 brigands
    },
    equipment: [
      { percent: 10, type: "medium horse, chainmail & shield, sword" },
      { percent: 10, type: "light horse, leather armor & shield, spear" },
      { percent: 10, type: "light horse, leather armor, light crossbow" },
      { percent: 10, type: "leather armor, pole arm" },
      { percent: 10, type: "leather armor, light crossbow" },
      { percent: 10, type: "leather armor, short bow" },
      { percent: 40, type: "leather armor & shield, sword" }
    ],
    specialMembers: {
      lieutenant: { level: 7, class: "Fighter", count: 1 },
      guards: { level: 2, class: "Fighter", count: 6 },
      thirdLevel: { level: 3, class: "Fighter", countFormula: "Math.floor(number/20)" },
      fourthLevel: { level: 4, class: "Fighter", countFormula: "Math.floor(number/30)" },
      fifthLevel: { level: 5, class: "Fighter", countFormula: "Math.floor(number/40)" },
      sixthLevel: { level: 6, class: "Fighter", countFormula: "Math.floor(number/50)" },
      magicUser: { 
        level: "7-10", 
        class: "Magic-User", 
        chanceFormula: "Math.min(100, Math.floor(number/50) * 25)",
        countFormula: "1"
      },
      cleric: {
        level: "5-6",
        class: "Cleric",
        chanceFormula: "Math.min(100, Math.floor(number/50) * 15)",
        countFormula: "1",
        assistant: { level: "3-4", class: "Cleric", count: 1 }
      }
    },
    alignment: "CE",
    morale: "+1",
    lairType: {
      cave: 20, // 20% cave complex
      castle: 30, // 30% castle
      camp: 50   // 50% informal camp
    },
    prisoners: "1d10",
    campFollowers: "20-50",  
    notes: "Brigands are chaotic evil bandits with high morale in combat. They have higher percentage of fortified lairs than regular bandits."
  },
  
  berserker: {
    numberRange: [10, 100],
    leaderLevels: {
      small: { chief: 9, subchiefs: 6 },  // ≤60 berserkers
      large: { chief: 10, subchiefs: 7 }  // >60 berserkers
    },
    specialMembers: {
      firstLevel: { level: 1, class: "Fighter", countFormula: "Math.floor(number/10)" },
      secondLevel: { level: 2, class: "Fighter", countFormula: "Math.floor(number/20)" },
      thirdLevel: { level: 3, class: "Fighter", countFormula: "Math.floor(number/30)" },
      fourthLevel: { level: 4, class: "Fighter", countFormula: "Math.floor(number/40)" },
      fifthLevel: { level: 5, class: "Fighter", countFormula: "Math.floor(number/50)" },
      cleric: {
        level: 7,
        class: "Cleric",
        chanceFormula: "Math.min(100, Math.floor(number/10) * 50)",
        countFormula: "1",
        assistants: { level: "3-4", class: "Cleric", countFormula: "1d4" }
      }
    },
    equipment: [],  // Scorn armor!
    alignment: "N",
    notes: "Berserkers never check morale. They strike twice or once with +2 due to battle lust."
  },
  
  // Add entries for other human types: merchant, dervish, nomad, pilgrim, tribesman
  // Add entries for other human types
merchant: {
  numberRange: [50, 300],
  leaderLevels: {
    leader: "6-11",
    lieutenant: "5-10"
  },
  composition: {
    merchants: 10,  // 10% are actual merchants
    drovers: 10,    // 10% are drovers
    guards: 80      // 80% are mercenary guards
  },
  equipment: [
    { percent: 10, type: "heavy warhorse, plate armor & shield, lance, sword (1st level fighters)" },
    { percent: 20, type: "medium warhorse, chainmail & shield, lance, sword" },
    { percent: 10, type: "medium warhorse, chainmail & shield, flail, mace" },
    { percent: 10, type: "light warhorse, scale mail, light crossbow, sword" },
    { percent: 10, type: "chainmail, pole arm, mace" },
    { percent: 10, type: "chainmail, heavy crossbow, mace" },
    { percent: 30, type: "ringmail & shield, spear, morning star" }
  ],
  specialMembers: {
    guards: { level: 2, class: "Fighter", count: 12 },
    magicUser: { 
      level: "6-8", 
      class: "Magic-User", 
      chanceFormula: "Math.min(100, Math.floor(number/50) * 10)",
      countFormula: "1"
    },
    cleric: {
      level: "5-7",
      class: "Cleric",
      chanceFormula: "Math.min(100, Math.floor(number/50) * 5)",
      countFormula: "1"
    },
    thief: {
      level: "8-10",
      class: "Thief",
      chanceFormula: "Math.min(100, Math.floor(number/50) * 15)",
      countFormula: "1",
      assistants: { level: "3-7", class: "Thief", countFormula: "1d4" }
    }
  },
  alignment: "N",
  treasure: {
    merchants: ["J", "K", "L", "M", "N", "Q"],
    mercenaries: ["K"],
    leaders: ["M"],
    payChest: "2000-4000 gp, 100-400 pp, 4d4 gems (100 gp base)",
    merchandise: "10000-60000 gp"
  },
  notes: "Merchants travel in caravans with heavy guard. Their merchandise requires 1 wagon or 10 pack animals per 5000 gp value."
},

dervish: {
  numberRange: [30, 300],
  leaderLevels: {
    small: 10,  // <125 dervishes
    medium: 11, // 125-250 dervishes
    large: 12   // >250 dervishes
  },
  equipment: [
    { percent: 25, type: "medium warhorse, chainmail & shield, lance, sword" },
    { percent: 5, type: "medium warhorse, chainmail & shield, composite bow, sword" },
    { percent: 50, type: "light warhorse, leather armor & shield, lance, sword" },
    { percent: 10, type: "light warhorse, leather armor & shield, composite bow, sword" },
    { percent: 10, type: "light warhorse, leather armor & shield, light crossbow, mace" }
  ],
  specialMembers: {
    bodyguards: [
      { level: "4-8", class: "Cleric", count: 2 }
    ],
    thirdLevel: { level: 3, class: "Fighter", countFormula: "Math.floor(number/30)" },
    fourthLevel: { level: 4, class: "Fighter", countFormula: "Math.floor(number/40)" },
    fifthLevel: { level: 5, class: "Fighter", countFormula: "Math.floor(number/50)" },
    sixthLevel: { level: 6, class: "Fighter", countFormula: "Math.floor(number/60)" },
    magicUser: { 
      level: "7-8", 
      class: "Magic-User", 
      chanceFormula: "Math.min(100, Math.floor(number/50) * 15)",
      countFormula: "1",
      assistants: { level: "3-4", class: "Magic-User", count: 2 }
    }
  },
  alignment: "LG",
  fortress: {
    defenders: "200-300",
    ballistae: "1d4",
    lightCatapults: "1d4",
    heavyCatapults: "1d2"
  },
  combatBonus: "+1 to hit and damage",
  morale: "Never check morale in combat",
  notes: "Dervishes are highly religious nomads found in deserts or steppes/plains. Due to their fanatical nature, they add +1 to hit and damage and never check morale."
},

nomad: {
  numberRange: [30, 300],
  leaderLevels: {
    small: 8,   // <150 nomads
    medium: 9,  // 150-250 nomads
    large: 10   // >250 nomads
  },
  surpriseBonus: "1-4 due to terrain concealment",
  equipment: {
    desert: [
      { percent: 10, type: "medium warhorse, chainmail & shield, lance & sword" },
      { percent: 10, type: "medium warhorse, chainmail, light crossbow, sword" },
      { percent: 50, type: "light warhorse, leather armor & shield, lance, sword" },
      { percent: 20, type: "light warhorse, leather armor & shield, sword, 2 javelins" },
      { percent: 10, type: "light warhorse, leather armor, light crossbow, sword" }
    ],
    steppes: [
      { percent: 20, type: "medium warhorse, chainmail & shield, lance, sword" },
      { percent: 10, type: "medium warhorse, chainmail, composite bow, sword" },
      { percent: 20, type: "light warhorse, leather armor & shield, lance, sword" },
      { percent: 50, type: "light warhorse, leather armor, composite bow, sword" }
    ]
  },
  specialMembers: {
    subcommander: { level: "6-8", class: "Fighter", count: 1 },
    guards: { level: 2, class: "Fighter", count: 12 },
    clerics: [
      { level: 3, class: "Cleric", count: 2 },
      { level: "4-7", class: "Cleric", chanceFormula: "Math.min(100, Math.floor(number/50) * 15)", countFormula: "1" }
    ],
    magicUsers: [
      { level: 4, class: "Magic-User", count: 1 },
      { level: "5-8", class: "Magic-User", chanceFormula: "Math.min(100, Math.floor(number/50) * 15)", countFormula: "1" }
    ]
  },
  alignment: "N",
  lairType: {
    encampment: 90,
    walledCity: 10
  },
  lairContents: {
    females: "200% of males",
    children: "100% of males",
    slaves: "10-100",
    horses: "100-400",
    herdAnimals: "200-800"
  },
  tactics: "May feign retreat to lure enemies into ambush. Will withdraw if taking >25% casualties.",
  notes: "Nomads roam freely herding and hunting. They're 75% likely to capture weaker groups, 90% likely to parley with equal strength parties."
},

pilgrim: {
  numberRange: [10, 100],
  mounted: 25, // 25% chance of being mounted, otherwise afoot
  specialMembers: {
    clerics: [
      { level: 2, class: "Cleric", countFormula: "1d6" },
      { level: 4, class: "Cleric", countFormula: "1d4" },
      { level: 6, class: "Cleric", countFormula: "1d2" },
      { level: 8, class: "Cleric", count: 1, assistants: [
        { level: 3, class: "Cleric", count: 1 },
        { level: 5, class: "Cleric", count: 1 }
      ]}
    ],
    monk: { 
      level: "5-6", 
      class: "Monk", 
      chance: 25,
      countFormula: "1"
    },
    fighters: { 
      level: "1-8", 
      class: "Fighter", 
      chanceFormula: "Math.min(100, Math.floor(number/10) * 10)",
      countFormula: "1d10"
    },
    thieves: { 
      level: "2-7", 
      class: "Thief", 
      chanceFormula: "Math.min(100, Math.floor(number/10) * 10)",
      countFormula: "1d6"
    },
    magicUser: { 
      level: "6-9", 
      class: "Magic-User", 
      chanceFormula: "Math.min(100, Math.floor(number/10) * 5)",
      countFormula: "1"
    }
  },
  alignment: {
    LG: 35,
    CG: 20,
    N: 10,
    CE: 15,
    LE: 20
  },
  alignmentSpecial: {
    LG: "Fighters are paladins",
    CG: "Fighters are rangers",
    N: "Clerics are druids",
    LE: "All pilgrims fight as berserkers (armed with daggers)",
    CE: "Thieves are assassins"
  },
  treasure: {
    pilgrims: ["J"],
    monks: ["J"],
    fighters: ["L", "M"],
    clerics: ["J", "K", "M"],
    magicUsers: ["L", "N", "Q"],
    thieves: ["J", "N", "Q"]
  },
  artifact: {
    chance: 5,
    notes: "Religious artifact carefully hidden and guarded by traps/magic"
  },
  notes: "Pilgrims are groups visiting locations holy or unholy to them. Special members vary based on alignment."
},

tribesman: {
  numberRange: [10, 120],
  armorClass: 7, // Use large shields
  equipment: [
    { percent: 30, type: "shield, spear & club" },
    { percent: 40, type: "shield & 2 spears" },
    { percent: 30, type: "shortbow & club" }
  ],
  specialMembers: {
    chief: { level: 5, class: "Fighter", count: 1 },
    subchiefs: { level: 4, class: "Fighter", countFormula: "1d4" },
    lowClerics: { level: 4, class: "Cleric", countFormula: "Math.floor(number/10)" },
    midClerics: { level: 6, class: "Cleric", countFormula: "Math.floor(number/30)" },
    witchdoctor: { level: 8, class: "Cleric", count: 1 }
  },
  alignment: "N",
  lairType: {
    village: 100,
    palisade: 50 // 50% chance of being protected by log palisade
  },
  lairContents: {
    females: "100% of males",
    young: "100% of males",
    slaves: {
      chance: 75,
      number: "20-50"
    },
    captives: {
      chance: 50,
      number: "2-12",
      notes: "Held for food!"
    }
  },
  treasure: {
    ivory: { chance: 5, value: "1000 gp per tusk", number: "2-12", notes: "2 men to carry each" },
    goldNuggets: { chance: 5, value: "5 gp each", number: "20-80" },
    gems: { chance: 5, value: "10 gp base", number: "1-100" }
  },
  notes: "Primitive tribesmen found in tropical jungles or islands. Clerics are druidical in nature. Can possess all three treasure types (unlike cavemen)."
}
};
  
  // Function to roll on temperate outdoor table
  // Updated function to roll on temperate outdoor table
export const rollOnTemperateTable = (terrain, population, options = {}) => {
    // Select the appropriate table based on population
    let table;
    const isInhabited = population !== 'uninhabited';
    
    if (isInhabited) {
      table = TEMPERATE_INHABITED_TABLES[terrain];
    } else {
      table = TEMPERATE_UNINHABITED_TABLES[terrain];
    }
    
    if (!table) {
      console.warn(`No table found for terrain: ${terrain} with population: ${population}`);
      return null;
    }
    
    // Roll on the table
    const roll = Math.floor(Math.random() * 100) + 1;
    
    // Find the appropriate entry
    for (const entry of table) {
      if (roll >= entry.min && roll <= entry.max) {
        let creature = entry.creature;
        let subtableResult = null;
        
        // Check if this entry requires a subtable roll
        if (entry.subtable) {
          const subtableRoll = Math.floor(Math.random() * 100) + 1;
          //subtableResult = rollOnSubtable(entry.subtable, subtableRoll);
          subtableResult = rollOnSubtable(entry.subtable, subtableRoll, subtableSet, terrain);
          
          // For "men" subtable, check for character encounter (10% chance)
          if (entry.subtable === "men" && subtableRoll >= 11 && subtableRoll <= 20) {
            return generateCharacterEncounter(options);
          }
        }
        
        // Roll for number of creatures
        const numberPattern = entry.number || subtableResult?.number || "1";
        const number = rollNumberFromPattern(numberPattern);
        
        return {
          result: "Encounter",
          roll: roll,
          encounter: subtableResult ? subtableResult.creature : creature,
          number: number,
          notes: entry.notes || subtableResult?.notes || "",
          isInhabited: isInhabited
        };
      }
    }
    
    return null;
  };
  
  // Helper function to generate character encounters
  export const generateCharacterEncounter = (options = {}) => {
    // Number of characters in party (2-5)
    const characterCount = Math.floor(Math.random() * 4) + 2;
    
    // Character levels (7-10 for wilderness)
    const characterLevel = Math.floor(Math.random() * 4) + 7;
    
    // Calculate number of henchmen/men-at-arms
    const henchmenCount = 9 - characterCount;
    
    return {
      result: "Encounter",
      encounter: `Adventuring Party`,
      number: characterCount + henchmenCount,
      notes: `${characterCount} level ${characterLevel} characters with ${henchmenCount} henchmen/men-at-arms. 90% chance they are mounted.`
    };
  };

  // Function to roll an encounter based on climate, terrain, and population
export const rollEncounterByClimateTerrain = (climate, terrain, population, options = {}) => {
    // Determine which table to use based on climate
    let table;
    switch (climate.toLowerCase()) {
      case 'arctic':
        table = ARCTIC_CONDITIONS_TABLE[terrain];
        break;
      case 'subarctic':
        table = SUBARCTIC_CONDITIONS_TABLE[terrain];
        break;
      case 'temperate':
      case 'subtropical':
        if (population !== 'uninhabited') {
          table = TEMPERATE_INHABITED_TABLES[terrain];
        } else {
          table = TEMPERATE_UNINHABITED_TABLES[terrain];
        }
        break;
      case 'tropical':
        table = TROPICAL_UNINHABITED_TABLES[terrain];
        break;
      default:
        console.warn(`No table found for climate: ${climate}, defaulting to temperate`);
        if (population !== 'uninhabited') {
          table = TEMPERATE_INHABITED_TABLES[terrain];
        } else {
          table = TEMPERATE_UNINHABITED_TABLES[terrain];
        }
    }
    
    if (!table) {
      console.warn(`No table found for terrain: ${terrain} in climate: ${climate}`);
      return null;
    }
    
    // Roll on the table
    const roll = Math.floor(Math.random() * 100) + 1;
    
    // Find the appropriate entry
    for (const entry of table) {
      if (roll >= entry.min && roll <= entry.max) {
        let creature = entry.creature;
        let subtableResult = null;
        
        // Check if this entry requires a subtable roll
        if (entry.subtable) {
          const subtableRoll = Math.floor(Math.random() * 100) + 1;
          
          // Determine which subtable to use
          const subtableSet = climate.toLowerCase() === 'tropical' ? 
            { ...TEMPERATE_SUBTABLES, ...TROPICAL_SUBTABLES } : 
            TEMPERATE_SUBTABLES;
            
          //subtableResult = rollOnSubtable(entry.subtable, subtableRoll, subtableSet);
          subtableResult = rollOnSubtable(entry.subtable, subtableRoll, subtableSet, terrain);
          
          // For "men" subtable, check for character encounter (10% chance)
          if (entry.subtable === "men" && subtableRoll >= 11 && subtableRoll <= 20) {
            return generateCharacterEncounter(options);
          }
        }
        
        // Roll for number of creatures
        const numberPattern = entry.number || subtableResult?.number || "1";
        const number = rollNumberFromPattern(numberPattern);
        
        return {
          result: "Encounter",
          roll: roll,
          climate: climate,
          terrain: terrain,
          population: population,
          encounter: subtableResult ? subtableResult.creature : creature,
          number: number,
          notes: entry.notes || subtableResult?.notes || ""
        };
      }
    }
    
    return null;
  };
  
  // Updated function to roll on subtables
  // Modified function to handle terrain-specific subtables
export const rollOnSubtable = (subtableName, roll, subtableSet = TEMPERATE_SUBTABLES, terrain = null) => {
    // Check if this is a terrain-specific subtable
    let finalSubtableName = subtableName;
    
    // Handle terrain-specific subtables
    if (terrain && subtableName === 'demi_human' && subtableSet[`demi_human_${terrain}`]) {
      finalSubtableName = `demi_human_${terrain}`;
    }
    else if (terrain && subtableName === 'lycanthrope' && subtableSet[`lycanthrope_${terrain}`]) {
      finalSubtableName = `lycanthrope_${terrain}`;
    }
    else if (terrain && subtableName === 'dragon' && subtableSet[`dragon_${terrain}`]) {
      finalSubtableName = `dragon_${terrain}`;
    }
    else if (terrain && subtableName === 'spider' && subtableSet[`spider_${terrain}`]) {
      finalSubtableName = `spider_${terrain}`;
    }
    
    const subtable = subtableSet[finalSubtableName];
    if (!subtable) {
      console.warn(`No subtable found with name: ${finalSubtableName}`);
      return { creature: "Unknown (subtable not found)" };
    }
    
    for (const entry of subtable) {
      if (roll >= entry.min && roll <= entry.max) {
        return {
          creature: entry.creature,
          number: entry.number,
          notes: entry.notes
        };
      }
    }
    
    return { creature: "Unknown (entry not found in subtable)" };
  };
  
  // Export all in a default object for easier importing
  export default {
    DMG_MONSTER_LEVEL_TABLES,
    DMG_HUMAN_SUBTABLE,
    MM_HUMAN_TABLES,
    DMG_CHARACTER_SUBTABLE,
    DMG_DUNGEON_MONSTER_LEVEL_MATRIX,
    ARCTIC_CONDITIONS_TABLE,
    SUBARCTIC_CONDITIONS_TABLE,
    //TEMPERATE_TABLES,
    TEMPERATE_UNINHABITED_TABLES,
    TEMPERATE_INHABITED_TABLES,
    TEMPERATE_SUBTABLES,
    TROPICAL_SUBTABLES,
    TROPICAL_UNINHABITED_TABLES,
    DMG_TERRAIN_SUBTABLES, // Add this!
    rollOnOutdoorTable,
    rollNumberFromPattern
    //rollOnTemperateTable,
    //rollOnSubtable,
    //generateCharacterEncounter
  };