// data/dmg-planar-tables.js
// Planar encounter tables from DMG Appendix C

// Helper function to roll numbers - re-implemented to avoid circular dependencies
import { rollNumberFromPattern } from '../utils/utility.js';

// Astral Plane Encounter Table
export const ASTRAL_ENCOUNTER_TABLE = [
  { min: 1, max: 4, creature: "Aerial servant", number: "1" },
  { min: 5, max: 10, creature: "Basilisk", number: "1-2", special: "perception only" },
  { min: 11, max: 13, creature: "Cockatrice", number: "1-4", special: "perception only" },
  { min: 14, max: 16, creature: "Demon, major", number: "1" },
  { min: 17, max: 22, creature: "Demon, minor", number: "1-3" },
  { min: 23, max: 23, creature: "Demon, prince", number: "1" },
  { min: 24, max: 24, creature: "Devil, arch-", number: "1" },
  { min: 25, max: 28, creature: "Devil, greater-", number: "1" },
  { min: 29, max: 37, creature: "Devil, lesser-", number: "1-3" },
  { min: 38, max: 38, creature: "Dragon, chromatic", number: "1" },
  { min: 39, max: 39, creature: "Dragon, platinum", number: "1" },
  { min: 40, max: 41, creature: "Gorgon", number: "1-2", special: "perception only" },
  { min: 42, max: 46, creature: "Human traveller", subtable: "human_planar" },
  { min: 47, max: 49, creature: "Intellect devourer", number: "1-2" },
  { min: 50, max: 55, creature: "Invisible stalker", number: "1-3" },
  { min: 56, max: 61, creature: "Ki-rin", number: "1" },
  { min: 62, max: 63, creature: "Medusa", number: "1-2", special: "perception only" },
  { min: 64, max: 71, creature: "Night hag", number: "1-4" },
  { min: 72, max: 74, creature: "Nightmare", number: "1-4" },
  { min: 75, max: 79, creature: "Rakshasa", number: "1-3" },
  { min: 80, max: 91, creature: "Shedu", number: "2-5" },
  { min: 92, max: 92, creature: "Titan, elder", number: "1" },
  { min: 93, max: 97, creature: "Titan, lesser", number: "1" },
  { min: 98, max: 100, creature: "Titan, major", number: "1" }
];

// Ethereal Plane Encounter Table
export const ETHEREAL_ENCOUNTER_TABLE = [
  { min: 1, max: 5, creature: "Aerial servant", number: "1" },
  { min: 6, max: 10, creature: "Basilisk", number: "1-2", special: "perception only" },
  { min: 11, max: 13, creature: "Cockatrice", number: "1-4", special: "perception only" },
  { min: 14, max: 18, creature: "Couatl", number: "1-4" },
  { min: 19, max: 26, creature: "Djinni", number: "1-6" },
  { min: 27, max: 27, creature: "Dragon, chromatic", number: "1" },
  { min: 28, max: 28, creature: "Dragon, platinum", number: "1" },
  { min: 29, max: 30, creature: "Efreeti", number: "1-3" },
  { min: 31, max: 37, creature: "Elemental, air", number: "1" },
  { min: 38, max: 39, creature: "Elemental, earth", number: "1" },
  { min: 40, max: 41, creature: "Elemental, fire", number: "1" },
  { min: 42, max: 42, creature: "Elemental, water", number: "1" },
  { min: 43, max: 48, creature: "Ghost", number: "1" },
  { min: 49, max: 50, creature: "Gorgon", number: "1-2", special: "perception only" },
  { min: 51, max: 52, creature: "Groaning spirit", number: "1-2" },
  { min: 53, max: 57, creature: "Human traveller", subtable: "human_planar" },
  { min: 58, max: 59, creature: "Intellect devourer", number: "1-2" },
  { min: 60, max: 62, creature: "Invisible stalker", number: "1-3" },
  { min: 63, max: 68, creature: "Ki-rin", number: "1" },
  { min: 69, max: 76, creature: "Lammasu", number: "2-8" },
  { min: 77, max: 78, creature: "Medusa", number: "1-2", special: "perception only" },
  { min: 79, max: 80, creature: "Nightmare", number: "1-4" },
  { min: 81, max: 82, creature: "Salamander", number: "2-5" },
  { min: 83, max: 87, creature: "Spider, phase", number: "1-6" },
  { min: 88, max: 94, creature: "Thought eaters", number: "1-3" },
  { min: 95, max: 97, creature: "Wind walkers", number: "2-5" },
  { min: 98, max: 100, creature: "Xorn", number: "3-6" }
];

// Psychic Wind Table
export const PSYCHIC_WIND_TABLE = [
  { min: 1, max: 12, effect: "Slows travel only, incurs 1 additional check for random encounter." },
  { min: 13, max: 16, effect: "Blows off course, and party is lost for 2-20 days' time, then must return to starting place." },
  { min: 17, max: 19, effect: "Blows off course so that party arrives at a different destination as determined by random method." },
  { min: 20, max: 20, effect: "Storm blows, and unless a saving throw versus magic is made, the silver cord is broken, and the party is killed. If a save is successful, the party is lost for 4-40 days and must return to the starting place thereafter." }
];

// Ether Cyclone Table
export const ETHER_CYCLONE_TABLE = [
  { min: 1, max: 10, effect: "Blows so as to move party in random direction at 120' per round, and if travelling is involved, party is slowed so as to incur 1 additional encounter check." },
  { min: 11, max: 15, effect: "Blows to a different plane than that the party is on or desires to travel to; usual encounter checks must be made." },
  { min: 16, max: 18, effect: "Blows so as to cause party to be lost for 5-60 days, and when no longer lost the party will arrive at a different plane as determined by random means." },
  { min: 19, max: 20, effect: "Storm cyclone causes party to be lost for 10-120 days, and unless saving throw versus magic is made, the party is blown to the Astral Plane. If a save is successful, then party will still arrive at a randomly determined plane touched by the ether." }
];

// Function to roll for planar encounters
export const rollPlanarEncounter = (planeType, options = {}) => {
  // Select the appropriate table based on plane type
  const table = planeType === 'astral' ? ASTRAL_ENCOUNTER_TABLE : ETHEREAL_ENCOUNTER_TABLE;
  
  // Roll for a potential wind/cyclone event first
  const weatherChance = Math.floor(Math.random() * 100) + 1;
  if (weatherChance <= 5) { // 5% chance
    const weatherTable = planeType === 'astral' ? PSYCHIC_WIND_TABLE : ETHER_CYCLONE_TABLE;
    const weatherRoll = Math.floor(Math.random() * 20) + 1;
    
    // Find the effect
    for (const entry of weatherTable) {
      if (weatherRoll >= entry.min && weatherRoll <= entry.max) {
        return {
          result: 'Weather',
          weatherType: planeType === 'astral' ? 'Psychic Wind' : 'Ether Cyclone',
          effect: entry.effect,
          roll: weatherRoll
        };
      }
    }
  }
  
  // Roll on the encounter table
  const roll = Math.floor(Math.random() * 100) + 1;
  
  // Find the appropriate entry
  for (const entry of table) {
    if (roll >= entry.min && roll <= entry.max) {
      let creature = entry.creature;
      let number = 1;
      
      // Roll for number if specified
      if (entry.number) {
        number = rollNumberFromPattern(entry.number);
      }
      
      // Handle subtables (human travelers)
      if (entry.subtable === 'human_planar') {
        // In a full implementation, you would call a function to generate
        // human planar travelers according to the rules in the DMG
        return {
          result: 'Encounter',
          roll: roll,
          planeType: planeType,
          encounter: 'Human Planar Travelers',
          number: Math.floor(Math.random() * 6) + 1,
          notes: 'High-level adventuring party (detailed stats needed)'
        };
      }
      
      return {
        result: 'Encounter',
        roll: roll,
        planeType: planeType,
        encounter: creature,
        number: number,
        special: entry.special,
        notes: entry.special ? 'Perception only: creature not physically present' : ''
      };
    }
  }
  
  return { 
    result: 'No encounter',
    planeType: planeType
  };
};

export default {
  ASTRAL_ENCOUNTER_TABLE,
  ETHEREAL_ENCOUNTER_TABLE,
  PSYCHIC_WIND_TABLE,
  ETHER_CYCLONE_TABLE,
  rollPlanarEncounter
};