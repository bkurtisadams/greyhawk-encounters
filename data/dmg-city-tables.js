// data/dmg-city-tables.js
import { rollNumberFromPattern } from '../utils/utility.js';

// City and town encounter tables from DMG Appendix C
export const CITY_ENCOUNTER_TABLES = {
// Village/Hamlet (Population <1000)
village: [
    { min: 1, max: 5, encounter: "Beggar", number: "1d3" },
    { min: 6, max: 10, encounter: "Drunk", number: "1d3" },
    { min: 11, max: 15, encounter: "Guard/Watch patrol", number: "2d4" },
    { min: 16, max: 20, encounter: "Local craftsman", number: "1" },
    { min: 21, max: 30, encounter: "Merchant", number: "1d2" },
    { min: 31, max: 40, encounter: "Noble with retinue", number: "1+1d4" },
    { min: 41, max: 50, encounter: "Pilgrim", number: "1d6" },
    { min: 51, max: 60, encounter: "Traveler", number: "1d3" },
    { min: 61, max: 75, encounter: "Villager", number: "2d6" },
    { min: 76, max: 90, encounter: "No encounter" },
    { min: 91, max: 100, encounter: "Special", subtable: "village_special" }
],

// Town (Population 1000-6000)
town: [
    { min: 1, max: 5, encounter: "Adventurer", number: "1d3" },
    { min: 6, max: 10, encounter: "Beggar", number: "1d6" },
    { min: 11, max: 15, encounter: "City official", number: "1+1d2" },
    { min: 16, max: 20, encounter: "Courier", number: "1" },
    { min: 21, max: 25, encounter: "Drunk", number: "1d3" },
    { min: 26, max: 30, encounter: "Guard/Watch patrol", number: "3d4" },
    { min: 31, max: 35, encounter: "Local craftsman", number: "1d3" },
    { min: 36, max: 45, encounter: "Merchant", number: "1d4" },
    { min: 46, max: 50, encounter: "Noble with retinue", number: "1+1d6" },
    { min: 51, max: 55, encounter: "Pilgrim", number: "1d8" },
    { min: 56, max: 60, encounter: "Thief or assassin", number: "1" },
    { min: 61, max: 70, encounter: "Townsperson", number: "3d6" },
    { min: 71, max: 75, encounter: "Traveler", number: "1d4" },
    { min: 76, max: 85, encounter: "No encounter" },
    { min: 86, max: 100, encounter: "Special", subtable: "town_special" }
    ],

    // City (Population 6000-25000)
    city: [
    { min: 1, max: 3, encounter: "Adventurer", number: "1d4" },
    { min: 4, max: 8, encounter: "Beggar", number: "2d4" },
    { min: 9, max: 12, encounter: "City official", number: "1+1d3" },
    { min: 13, max: 15, encounter: "Cleric", number: "1d2" },
    { min: 16, max: 18, encounter: "Courier", number: "1d2" },
    { min: 19, max: 22, encounter: "Drunk", number: "1d6" },
    { min: 23, max: 27, encounter: "Guard/Watch patrol", number: "4d4" },
    { min: 28, max: 31, encounter: "Local craftsman", number: "1d4" },
    { min: 32, max: 36, encounter: "Magic-user", number: "1" },
    { min: 37, max: 41, encounter: "Merchant", number: "1d6" },
    { min: 42, max: 45, encounter: "Noble with retinue", number: "1+2d6" },
    { min: 46, max: 49, encounter: "Pilgrim", number: "2d6" },
    { min: 50, max: 55, encounter: "Thief or assassin", number: "1d2" },
    { min: 56, max: 65, encounter: "Citizen", number: "4d6" },
    { min: 66, max: 70, encounter: "Traveler", number: "1d6" },
    { min: 71, max: 80, encounter: "No encounter" },
    { min: 81, max: 100, encounter: "Special", subtable: "city_special" }
    ],

    // Large City/Metropolis (Population >25000)
    metropolis: [
    { min: 1, max: 4, encounter: "Adventurer", number: "1d6" },
    { min: 5, max: 9, encounter: "Beggar", number: "3d6" },
    { min: 10, max: 12, encounter: "City official", number: "1+2d4" },
    { min: 13, max: 15, encounter: "Cleric", number: "1d3" },
    { min: 16, max: 18, encounter: "Courier", number: "1d3" },
    { min: 19, max: 23, encounter: "Drunk", number: "2d6" },
    { min: 24, max: 28, encounter: "Guard/Watch patrol", number: "5d4" },
    { min: 29, max: 31, encounter: "Local craftsman", number: "1d6" },
    { min: 32, max: 35, encounter: "Magic-user", number: "1d2" },
    { min: 36, max: 40, encounter: "Merchant", number: "2d6" },
    { min: 41, max: 44, encounter: "Noble with retinue", number: "1+3d6" },
    { min: 45, max: 48, encounter: "Pilgrim", number: "3d6" },
    { min: 49, max: 54, encounter: "Thief or assassin", number: "1d3" },
    { min: 55, max: 65, encounter: "Citizen", number: "6d6" },
    { min: 66, max: 70, encounter: "Traveler", number: "2d6" },
    { min: 71, max: 75, encounter: "No encounter" },
    { min: 76, max: 100, encounter: "Special", subtable: "metropolis_special" }
    ]
    };

    // Special Encounter Subtables
    export const CITY_SPECIAL_SUBTABLES = {
    village_special: [
    { min: 1, max: 10, encounter: "Animal (domestic)", number: "1d4" },
    { min: 11, max: 20, encounter: "Animal (wild)", number: "1" },
    { min: 21, max: 30, encounter: "Brawl", number: "2d4", notes: "Persons involved in disturbance" },
    { min: 31, max: 40, encounter: "Fire", notes: "Fire in building or public place" },
    { min: 41, max: 50, encounter: "Guard emergency", number: "3d4", notes: "Guards rushing to emergency" },
    { min: 51, max: 60, encounter: "Procession (minor)", notes: "Small religious or civic event" },
    { min: 61, max: 70, encounter: "Public argument", number: "2d4", notes: "Persons engaged in heated debate" },
    { min: 71, max: 80, encounter: "Public punishment", notes: "Execution, flogging, stocks, etc." },
    { min: 81, max: 90, encounter: "Theft", notes: "Pickpocket or shoplifting in progress" },
    { min: 91, max: 100, encounter: "Wedding or celebration", number: "4d6", notes: "People involved" }
    ],

    town_special: [
    { min: 1, max: 5, encounter: "Animal (domestic)", number: "1d6" },
    { min: 6, max: 10, encounter: "Animal (wild)", number: "1d2" },
    { min: 11, max: 15, encounter: "Brawl", number: "3d4", notes: "Persons involved in disturbance" },
    { min: 16, max: 20, encounter: "Construction", number: "2d6", notes: "Workers on building project" },
    { min: 21, max: 25, encounter: "Courier (emergency)", number: "1" },
    { min: 26, max: 30, encounter: "Drunkard", number: "1d2" },
    { min: 31, max: 35, encounter: "Fire", notes: "Fire in building or public place" },
    { min: 36, max: 45, encounter: "Guard emergency", number: "4d4", notes: "Guards rushing to emergency" },
    { min: 46, max: 50, encounter: "Merchant caravan", number: "2d6", notes: "Merchants with guards" },
    { min: 51, max: 60, encounter: "Procession", notes: "Religious or civic event" },
    { min: 61, max: 65, encounter: "Public argument", number: "2d6", notes: "Persons engaged in heated debate" },
    { min: 66, max: 70, encounter: "Public punishment", notes: "Execution, flogging, stocks, etc." },
    { min: 71, max: 80, encounter: "Street performance", number: "1+1d6", notes: "Performer(s) with crowd" },
    { min: 81, max: 85, encounter: "Theft", notes: "Pickpocket or shoplifting in progress" },
    { min: 86, max: 90, encounter: "Unusual weather", notes: "Sudden storm, fog, etc." },
    { min: 91, max: 100, encounter: "Wedding or celebration", number: "5d6", notes: "People involved" }
    ],

    city_special: [
    { min: 1, max: 3, encounter: "Animal (domestic)", number: "2d4" },
    { min: 4, max: 5, encounter: "Animal (exotic)", number: "1" },
    { min: 6, max: 10, encounter: "Brawl", number: "4d4", notes: "Persons involved in disturbance" },
    { min: 11, max: 15, encounter: "Construction", number: "3d6", notes: "Workers on building project" },
    { min: 16, max: 20, encounter: "Courier (emergency)", number: "1d2" },
    { min: 21, max: 25, encounter: "Demonstration", number: "3d10", notes: "People involved in protest" },
    { min: 26, max: 30, encounter: "Drunkard", number: "1d3" },
    { min: 31, max: 35, encounter: "Entertainment", number: "3d6", notes: "People watching performers" },
    { min: 36, max: 40, encounter: "Fire", notes: "Fire in building or public place" },
    { min: 41, max: 45, encounter: "Funeral procession", number: "3d6" },
    { min: 46, max: 50, encounter: "Guard emergency", number: "5d4", notes: "Guards rushing to emergency" },
    { min: 51, max: 55, encounter: "Madman", number: "1" },
    { min: 56, max: 60, encounter: "Merchant caravan", number: "2d6", notes: "Merchants with guards" },
    { min: 61, max: 65, encounter: "Procession", notes: "Religious or civic event" },
    { min: 66, max: 70, encounter: "Public argument", number: "2d6", notes: "Persons engaged in heated debate" },
    { min: 71, max: 75, encounter: "Public punishment", notes: "Execution, flogging, stocks, etc." },
    { min: 76, max: 80, encounter: "Riot", number: "3d20", notes: "People involved in disturbance" },
    { min: 81, max: 85, encounter: "Theft", notes: "Pickpocket or shoplifting in progress" },
    { min: 86, max: 90, encounter: "Undead", number: "1d2", notes: "Rare in most cities" },
    { min: 91, max: 95, encounter: "Unusual weather", notes: "Sudden storm, fog, etc." },
    { min: 96, max: 100, encounter: "Wedding or celebration", number: "6d6", notes: "People involved" }
    ],

    metropolis_special: [
    { min: 1, max: 3, encounter: "Animal (exotic)", number: "1d2" },
    { min: 4, max: 7, encounter: "Brawl", number: "5d4", notes: "Persons involved in disturbance" },
    { min: 8, max: 10, encounter: "Construction", number: "4d6", notes: "Major building project" },
    { min: 11, max: 15, encounter: "Courier (emergency)", number: "1d3" },
    { min: 16, max: 20, encounter: "Demonstration", number: "5d10", notes: "People involved in protest" },
    { min: 21, max: 25, encounter: "Drunkard", number: "1d4" },
    { min: 26, max: 30, encounter: "Entertainment", number: "4d6", notes: "People watching performers" },
    { min: 31, max: 35, encounter: "Fire", notes: "Major fire with multiple buildings" },
    { min: 36, max: 40, encounter: "Funeral procession", number: "4d6", notes: "Noble or important figure" },
    { min: 41, max: 45, encounter: "Guard emergency", number: "6d4", notes: "Guards rushing to emergency" },
    { min: 46, max: 50, encounter: "Madman", number: "1d2" },
    { min: 51, max: 55, encounter: "Merchant caravan", number: "3d6", notes: "Major caravan with exotic goods" },
    { min: 56, max: 60, encounter: "Procession", notes: "Major religious or state event" },
    { min: 61, max: 65, encounter: "Public argument", number: "3d6", notes: "Possible political implications" },
    { min: 66, max: 70, encounter: "Public punishment", notes: "Major criminal or state enemy" },
    { min: 71, max: 75, encounter: "Riot", number: "4d20", notes: "Major disturbance requiring military" },
    { min: 76, max: 80, encounter: "Robbery", notes: "Armed robbery in progress" },
    { min: 81, max: 85, encounter: "Slave auction", number: "3d6", notes: "In cities where slavery is legal" },
    { min: 86, max: 90, encounter: "Undead", number: "1d3", notes: "Possible infestation" },
    { min: 91, max: 95, encounter: "Unusual weather", notes: "Possibly magical in nature" },
    { min: 96, max: 100, encounter: "Wedding or celebration", number: "8d6", notes: "Major noble or state event" }
    ]
    };

// Main function to roll city encounters
export const rollCityEncounter = (citySize, options = {}) => {
// Select the appropriate table based on city size
let table;
switch(citySize.toLowerCase()) {
case 'village':
case 'hamlet':
  table = CITY_ENCOUNTER_TABLES.village;
  break;
case 'town':
  table = CITY_ENCOUNTER_TABLES.town;
  break;
case 'city':
  table = CITY_ENCOUNTER_TABLES.city;
  break;
case 'metropolis':
case 'large city':
  table = CITY_ENCOUNTER_TABLES.metropolis;
  break;
default:
  console.warn(`No table found for city size: ${citySize}, defaulting to town`);
  table = CITY_ENCOUNTER_TABLES.town;
}

// Roll on the table
const roll = Math.floor(Math.random() * 100) + 1;

// Find the appropriate entry
for (const entry of table) {
if (roll >= entry.min && roll <= entry.max) {
  if (entry.encounter === "No encounter") {
    return { result: "No Encounter" };
  }
  
  let encounter = entry.encounter;
  let subtableResult = null;
  
  // Check if this entry requires a subtable roll
  if (entry.subtable) {
    const subtableRoll = Math.floor(Math.random() * 100) + 1;
    subtableResult = rollOnCitySubtable(entry.subtable, subtableRoll);
    encounter = subtableResult.encounter;
  }
  
  // Roll for number of creatures/people
  const numberPattern = entry.number || subtableResult?.number || "1";
  const number = rollNumberFromPattern(numberPattern);
  
  return {
    result: "Encounter",
    roll: roll,
    citySize: citySize,
    encounter: encounter,
    number: number,
    notes: entry.notes || subtableResult?.notes || ""
  };
}
}

return { result: "Error: No encounter found" };
};

// Function to roll on city subtables
export const rollOnCitySubtable = (subtableName, roll) => {
const subtable = CITY_SPECIAL_SUBTABLES[subtableName];
if (!subtable) {
console.warn(`No subtable found with name: ${subtableName}`);
return { encounter: "Unknown (subtable not found)" };
}

for (const entry of subtable) {
if (roll >= entry.min && roll <= entry.max) {
  return {
    encounter: entry.encounter,
    number: entry.number,
    notes: entry.notes
  };
}
}

return { encounter: "Unknown (entry not found in subtable)" };
};

// Export as default
export default {
CITY_ENCOUNTER_TABLES,
CITY_SPECIAL_SUBTABLES,
rollCityEncounter,
rollOnCitySubtable,
rollNumberFromPattern
};