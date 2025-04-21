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
//import { rollNumberFromPattern } from '../utils/utility.js';
import { rollPlanarEncounter } from '../data/dmg-planar-tables.js';
import { MONSTER_MANUAL } from '../data/monster-manual.js';
import { findMonsterByName, rollNumberFromPattern } from '../utils/utility.js';


const TERRAIN_CHECK_TIMES = {
  plain: ['morning', 'evening', 'midnight'],
  scrub: ['morning', 'evening', 'night', 'pre-dawn'],
  forest: ['morning', 'noon', 'evening', 'night', 'midnight', 'pre-dawn'],
  desert: ['morning', 'night', 'pre-dawn'],
  hills: ['noon', 'night', 'pre-dawn'],
  mountains: ['morning', 'night'],
  marsh: ['morning', 'noon', 'evening', 'night', 'midnight', 'pre-dawn']
};

/* function findMonsterByName(name) {
  const normalized = name.toLowerCase().trim();

  return MONSTER_MANUAL.monsters.find(mon => {
    // Step 1: Exact name match
    if (mon.name?.toLowerCase() === normalized) return true;

    // Step 2: Match against name_variants (comma-separated or array)
    if (mon.name_variants) {
      const variants = Array.isArray(mon.name_variants)
        ? mon.name_variants
        : mon.name_variants.split(",").map(v => v.trim().toLowerCase());

      if (variants.includes(normalized)) return true;
    }

    // Step 3: Match against embedded structured variant types
    if (Array.isArray(mon.variants)) {
      for (const variant of mon.variants) {
        const fullVariant = `${mon.name}, ${variant.type}`.toLowerCase();
        if (fullVariant === normalized) {
          mon._variant = variant; // Attach matched variant
          return true;
        }
      }
    }

    // Step 4: Singular fallback (strip trailing 's' if needed)
    if (normalized.endsWith("s")) {
      const singular = normalized.slice(0, -1);
      return findMonsterByName(singular);
    }

    return false;
  });
} */

function normalizeEncounterName(name) {
  return name
    .replace(/^Men,\s*/, "Men, ") // Consistent prefix
    .replace(/\bBrigands?\b/gi, "Bandit")
    .replace(/\bNomads?\b/gi, "Nomad")
    .replace(/\bRaiders?\b/gi, "Raider")
    .replace(/\bTribesmen\b/gi, "Tribesman")
    .replace(/\bWorkers\b/gi, "Worker")
    .replace(/\bCentaurs\b/gi, "Centaur")
    .replace(/\bGoblins\b/gi, "Goblin")
    .replace(/\bOrcs\b/gi, "Orc")
    .replace(/\bHobgoblins\b/gi, "Hobgoblin")
    .replace(/\bKobolds\b/gi, "Kobold")
    .replace(/\bGnolls\b/gi, "Gnoll")
    .replace(/\bTrolls\b/gi, "Troll")
    .replace(/\bOgres\b/gi, "Ogre")
    .replace(/\bOgrillons\b/gi, "Ogrillon")
    .trim();
}

function parseLevel(level) {
  if (typeof level !== "string") return level;

  // Extract dice pattern like "1d4+6"
  const diceMatch = level.match(/(\d+d\d+(\s*\+\s*\d+)?)/i);
  if (diceMatch) {
    try {
      const formula = diceMatch[1].replace(/\s+/g, "");
      const roll = new Roll(formula);
      roll.evaluate({ async: false });
      return roll.total;
    } catch (err) {
      console.warn(`Failed to parse level roll from: "${level}"`);
      return level;
    }
  }

  // Extract first number found, e.g. "7th to 10th"
  const numMatch = level.match(/\d+/);
  if (numMatch) {
    return parseInt(numMatch[0]);
  }

  return level;
}

function parseCount(value) {
  if (typeof value === "string" && /\d+d\d+/.test(value)) {
    try {
      const roll = new Roll(value);
      roll.evaluate({ async: false });
      return roll.total;
    } catch (err) {
      return 1;
    }
  }
  return value;
}

function flattenLeaderData(leaders, totalCount, isLair = false) {
  const specialMembers = [];

  const rollCount = (value) => {
    if (typeof value === 'string' && /^[\ddx+\-]+$/.test(value)) {
      const result = rollNumberFromPattern(value);
      return result.total;
    }
    return parseInt(value) || 1;
  };

  const rollChance = (formula) => {
    const match = formula.match(/^(\d+)%\s+per\s+(\d+)\s*(.*)$/i);
    if (match) {
      const [_, percent, per, units] = match;
      const occurrences = Math.floor(totalCount / parseInt(per));
      let results = 0;
      for (let i = 0; i < occurrences; i++) {
        const d100 = Math.floor(Math.random() * 100) + 1;
        if (d100 <= parseInt(percent)) results++;
      }
      return results;
    }
    return 0;
  };

  for (const [key, value] of Object.entries(leaders)) {
    if (key.startsWith('per_')) {
      const per = parseInt(key.split('_')[1]);
      const slots = Math.floor(totalCount / per);
      if (value.level && value.class) {
        for (let i = 0; i < (slots * (value.count || 1)); i++) {
          specialMembers.push({
            role: key,
            level: parseLevel(value.level),
            type: value.class
          });
        }
      }
    }

    // Commander-type scaling roles
    else if (['commander', 'war_chief', 'captain'].includes(key)) {
      for (const [rangeKey, data] of Object.entries(value)) {
        const pass =
          (rangeKey === 'under_100' && totalCount < 100) ||
          (rangeKey === '100_to_150' && totalCount >= 100 && totalCount <= 150) ||
          (rangeKey === 'over_150' && totalCount > 150) ||
          (rangeKey === 'less_than_60' && totalCount < 60) ||
          (rangeKey === 'more_than_60' && totalCount >= 60) ||
          (rangeKey === 'less_than_200' && totalCount < 200) ||
          (rangeKey === 'more_than_200' && totalCount >= 200);
        if (pass) {
          const c = rollCount(data.count || 1);
          for (let i = 0; i < c; i++) {
            specialMembers.push({
              role: key,
              level: parseLevel(data.level),
              type: data.class
            });
          }
        }
      }
    }

    // Compound leader groups (fighters, clerics, magic_users, etc.)
    else if (typeof value === 'object' && !Array.isArray(value)) {
      // Check if it's a percent chance trigger group
      if (value.chance) {
        const rollsPassed = rollChance(value.chance);
        for (let i = 0; i < rollsPassed; i++) {
          if (value.main) {
            const mainCount = rollCount(value.main.count || 1);
            for (let j = 0; j < mainCount; j++) {
              specialMembers.push({
                role: `${key} (main)`,
                level: parseLevel(value.main.level),
                type: value.main.class || 'unknown'
              });
            }
          }

          if (value.assistants) {
            const assistants = Array.isArray(value.assistants) ? value.assistants : [value.assistants];
            for (const assistant of assistants) {
              const aCount = rollCount(assistant.count || 1);
              for (let j = 0; j < aCount; j++) {
                specialMembers.push({
                  role: `${key} (assistant)`,
                  level: parseLevel(assistant.level),
                  type: assistant.class
                });
              }
            }
          }

          if (value.permanent) {
            const pCount = rollCount(value.permanent.count || 1);
            for (let j = 0; j < pCount; j++) {
              specialMembers.push({
                role: `${key} (permanent)`,
                level: parseLevel(value.permanent.level),
                type: value.permanent.class
              });
            }
          }
        }
      }

      // Handle other compound keys like 'fighters', 'clerics' with sub-tables
      else {
        for (const [subKey, subData] of Object.entries(value)) {
          if (subKey === 'assistants') {
            const assistants = Array.isArray(subData) ? subData : [subData];
            for (const assistant of assistants) {
              const aCount = rollCount(assistant.count || 1);
              for (let j = 0; j < aCount; j++) {
                specialMembers.push({
                  role: `${key} Assistant`,
                  level: assistant.level,
                  type: assistant.class
                });
              }
            }
          } else if (subData?.level && subData?.class) {
            const count = rollCount(subData.count || 1);
            for (let i = 0; i < count; i++) {
              specialMembers.push({
                role: `${key} ${subKey}`,
                level: parseLevel(subData.level),
                type: subData.class
              });
            }
          }
        }
      }
    }

    // Notes or summaries
    else if (typeof value === 'string') {
      specialMembers.push({
        role: key,
        notes: value
      });
    }
  }

  console.log(`🧠 flattenLeaderData: total=${totalCount}`, leaders);
  return specialMembers;
}

// Men, Characters Generator - AD&D Wilderness Encounter Rules
// Extends Appendix C: Character generation for wilderness encounters
function generateCharacterParty() {
  const CHARACTER_TABLE = [
    { range: [1, 17], type: 'cleric', max: 3 },
    { range: [18, 20], type: 'druid', max: 2 },
    { range: [21, 60], type: 'fighter', max: 5 },
    { range: [61, 62], type: 'paladin', max: 2 },
    { range: [63, 65], type: 'ranger', max: 2 },
    { range: [66, 86], type: 'magic_user', max: 3 },
    { range: [87, 88], type: 'illusionist', max: 1 },
    { range: [89, 98], type: 'thief', max: 4 },
    { range: [99, 99], type: 'assassin', max: 2 },
    { range: [100, 100], type: 'monk_or_bard', max: 1 }
  ];

  const RACE_TABLE = [
    { range: [1, 25], race: 'dwarf', multiclass: 0.15 },
    { range: [26, 50], race: 'elf', multiclass: 0.85 },
    { range: [51, 60], race: 'gnome', multiclass: 0.25 },
    { range: [61, 85], race: 'half_elf', multiclass: 0.85 },
    { range: [86, 95], race: 'halfling', multiclass: 0.10 },
    { range: [96, 100], race: 'half_orc', multiclass: 0.50 }
  ];

  const ALIGNMENT_TABLE = [
    { range: [1, 10], alignment: 'lawful_good' },
    { range: [11, 20], alignment: 'neutral_good' },
    { range: [21, 50], alignment: 'chaotic_good' },
    { range: [51, 80], alignment: 'chaotic_neutral' },
    { range: [81, 90], alignment: 'neutral' },
    { range: [91, 95], alignment: 'chaotic_evil' },
    { range: [96, 98], alignment: 'neutral_evil' },
    { range: [99, 100], alignment: 'lawful_evil' }
  ];

  const getClass = (roll) => CHARACTER_TABLE.find(c => roll >= c.range[0] && roll <= c.range[1])?.type;
  const getRace = (roll) => RACE_TABLE.find(r => roll >= r.range[0] && roll <= r.range[1]);
  const getAlignment = (roll) => ALIGNMENT_TABLE.find(a => roll >= a.range[0] && roll <= a.range[1])?.alignment;

  const rollLevel = () => Math.floor(Math.random() * 4) + 7; // 7–10

  const party = [];
  const typeCount = {};
  const partySize = Math.floor(Math.random() * 4) + 2; // 2–5 characters

  while (party.length < partySize) {
    const roll = Math.floor(Math.random() * 100) + 1;
    const charClass = getClass(roll);
    if (!charClass) continue;

    const max = CHARACTER_TABLE.find(c => c.type === charClass)?.max || 1;
    const current = typeCount[charClass] || 0;

    if (current < max) {
      const raceRoll = Math.floor(Math.random() * 100) + 1;
      const raceInfo = getRace(raceRoll);
      const alignRoll = Math.floor(Math.random() * 100) + 1;
      const alignment = getAlignment(alignRoll);
      let classes = [charClass];

      let isMounted = Math.random() < 0.9;
      let weapon = charClass === 'fighter' ? (isMounted ? 'lance' : 'spear') : 'standard';

      const level = rollLevel();

      if (raceInfo && Math.random() < raceInfo.multiclass) {
        const secondRoll = Math.floor(Math.random() * 100) + 1;
        let secondaryClass = getClass(secondRoll);

        if (secondaryClass && secondaryClass !== charClass) {
          let totalLevel = Math.min(10, level);

          if (Math.random() < 0.25) {
            let thirdClass = getClass(Math.floor(Math.random() * 100) + 1);
            if (thirdClass && !classes.includes(thirdClass)) {
              classes.push(secondaryClass, thirdClass);
              const each = Math.floor((totalLevel + 3) / 3);
              party.push({ class: classes, race: raceInfo.race, levels: [each, each, each], alignment, mounted: isMounted, weapon });
            }
          } else {
            classes.push(secondaryClass);
            const each = Math.floor((totalLevel + 2) / 2);
            party.push({ class: classes, race: raceInfo.race, levels: [each, each], alignment, mounted: isMounted, weapon });
          }
        } else {
          party.push({ class: classes, race: raceInfo.race, level, alignment, mounted: isMounted, weapon });
        }
      } else {
        party.push({ class: classes, race: raceInfo?.race || 'human', level, alignment, mounted: isMounted, weapon });
      }

      typeCount[charClass] = current + 1;
    }
  }

  const henchmenCount = 7 + Math.floor(Math.random() * 3) - party.length;
  for (let i = 0; i < henchmenCount; i++) {
    const roll = Math.floor(Math.random() * 100) + 1;
    const henchClass = getClass(roll);
    const alignRoll = Math.floor(Math.random() * 100) + 1;
    const alignment = getAlignment(alignRoll);
    const raceRoll = Math.floor(Math.random() * 100) + 1;
    const raceInfo = getRace(raceRoll);
    const master = party[i % party.length];
    const masterLevel = master.level ?? Math.max(...(master.levels || [1]));
    let level = Math.max(1, Math.floor(masterLevel / 3) + Math.floor(masterLevel / 3));

    party.push({ class: [henchClass], race: raceInfo?.race || 'human', level, alignment, isHenchman: true });
  }

  return party;
}

function rollLevel(base = 7) {
  const raw = 6 + Math.floor(Math.random() * 6) + 1; // d6+6
  return Math.min(12, Math.max(7, raw));
}

function assignLevels(party) {
  return party.map((member, i) => {
    if (!member.isHenchman) {
      if (member.levels) return member; // already assigned in multiclass
      const level = rollLevel();
      return { ...member, level };
    } else {
      const paired = party[i % (party.length - 1)]; // link henchman to someone
      const masterLevel = paired.level ?? Math.max(...(paired.levels || [1]));
      const base = Math.floor(masterLevel / 3);
      const bonus = Math.floor(masterLevel / 3); // +1 per 3 levels >8
      return { ...member, level: base + bonus };
    }
  });
}

function assignGear(party) {
  return party.map(member => {
    const level = member.level ?? Math.max(...(member.levels || [1]));
    let tableI = 0, tableII = 0, tableIII = 0, tableIV = 0;

    if (level >= 12) {
      tableI = 3; tableII = 2; tableIII = 1; tableIV = Math.random() < 0.20 ? 1 : 0;
    } else if (level === 11) {
      tableI = 3; tableII = 2; tableIII = 1; tableIV = Math.random() < 0.10 ? 1 : 0;
    } else if (level === 10) {
      tableI = 3; tableII = Math.random() < 0.80 ? 2 : 1; tableIII = Math.random() < 0.40 ? 1 : 0;
    } else if (level === 9) {
      tableI = 3; tableII = Math.random() < 0.70 ? 2 : 1; tableIII = Math.random() < 0.30 ? 1 : 0;
    } else if (level === 8) {
      tableI = 3; tableII = Math.random() < 0.60 ? 2 : 1; tableIII = Math.random() < 0.20 ? 1 : 0;
    } else if (level === 7) {
      tableI = 3; tableII = Math.random() < 0.50 ? 2 : 1; tableIII = Math.random() < 0.10 ? 1 : 0;
    } else if (level === 6) {
      tableI = 3; tableII = Math.random() < 0.40 ? 2 : 1;
    } else if (level === 5) {
      tableI = 2; tableII = Math.random() < 0.30 ? 1 : 0;
    } else if (level === 4) {
      tableI = 2; tableII = Math.random() < 0.20 ? 1 : 0;
    } else if (level === 3) {
      tableI = 2; tableII = Math.random() < 0.10 ? 1 : 0;
    } else if (level === 2) {
      tableI = 2;
    } else if (level === 1) {
      tableI = 1;
    }

    return { ...member, gear: { tableI, tableII, tableIII, tableIV } };
  });
}

function displayGeneratedCharacterParty(party) {
  let content = `<h3>Encounter: Men, Characters</h3><hr>`;
  content += `<p>This is a party of adventurers encountered in the wilderness per DMG Appendix C rules. They are cautious, fully equipped, and may be hostile.</p>`;
  content += `<ul>`;

  for (const member of party) {
    const levelInfo = member.levels
      ? member.levels.map((lvl, idx) => `${lvl} ${member.class[idx]}`).join(' / ')
      : member.level ? `${member.level} ${member.class[0]}` : member.class.join(' / ');

    const role = member.isHenchman ? 'Henchman' : 'Character';
    const mountText = member.mounted ? ' (mounted)' : '';

    content += `<li><strong>${role}</strong>: ${levelInfo} — ${member.race}${mountText}, <em>${member.alignment.replace(/_/g, ' ')}</em></li>`;
  }

  content += `</ul>`;

  ChatMessage.create({
    user: game.user.id,
    speaker: ChatMessage.getSpeaker(),
    content
  });
}

// Example usage:
const baseParty = generateCharacterParty();
const leveledParty = assignLevels(baseParty);
const gearedParty = assignGear(leveledParty);
console.log("🎲 Men, Characters Wilderness Encounter:", gearedParty);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main module class
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  static async _displayEncounterResult(result, options) {
    const generator = result?.generator ?? result?.monsterData?.generator;

    if (generator === "generateCharacterParty") {
      const baseParty = generateCharacterParty();
      const leveledParty = assignLevels(baseParty);
      const gearedParty = assignGear(leveledParty);
      //return this._displayGeneratedCharacterParty(gearedParty);
      return displayGeneratedCharacterParty(gearedParty);
    }

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
        // Add the encounter chance roll information
        if (result.initialRoll !== undefined) {
          if (result.initialRoll === 1) {
            // Highlight successful rolls with bold, color, and an exclamation
            content += `<p>Encounter Check: <strong style="color: #990000;">1</strong> on d${result.dieSize} (Encounter!)</p>`;
          } else {
            content += `<p>Encounter Check: ${result.initialRoll} on d${result.dieSize} (No encounter)</p>`;
          }
        }

        // Always add terrain and population
        content += `<p>Terrain: ${options.terrain || 'Unknown'}</p>
                    <p>Population: ${options.population || 'Unknown'}</p>`;

        // Always display distance if available (for all outdoor encounters)
        if (result.distance !== undefined) {
          content += `<p>Encounter Distance: ${result.distance}" (${result.distance * 10} yards)</p>`;
        }

        if (result.result === "No encounter" || result.result === "No encounter check needed at this time of day") {
          content += `<p>Time of Day: ${options.timeOfDay || 'Unknown'}</p>
                      <p>Result: ${result.result || 'Unknown'}</p>`;
        } else if (result.result === "Patrol Encounter") {
          // Your existing patrol encounter handling
          content += `<p>Result: Patrol Encounter</p>
                      <p>Patrol Type: ${result.patrolType || 'Standard'}</p>`;
          if (result.leader) {
            content += `<p>Leader: Level ${result.leader.level || '3'} ${result.leader.class || 'Fighter'}</p>`;
          }
          // Rest of patrol display code...
        } else if (result.result === "Fortress Encounter") {
          // Your existing fortress encounter handling
          content += `<p>Result: Fortress Encounter</p>
                      <p>Size: ${result.size}</p>
                      <p>Type: ${result.type}</p>
                      <p>Inhabitants: ${result.inhabitants}</p>`;
          // Rest of fortress display code...
        }
        // Add new case for MM human encounters with special members
        else if (result.specialMembers && result.specialMembers.length > 0) {
          content += `<p>Time of Day: ${options.timeOfDay || 'Unknown'}</p>
                      <p>Encounter: ${result.encounter || 'Unknown Creature'}</p>
                      <p>Number: ${result.number || '1'}</p>`;

          // Display alignment if available
          if (result.alignment) {
            content += `<p>Alignment: ${result.alignment}</p>`;
          }

          // Special section for leader types
          content += `<hr><h4>Special Members</h4>`;

          // Group members by role to avoid repetition
          const membersByRole = {};
          for (const member of result.specialMembers) {
            if (!membersByRole[member.role]) {
              membersByRole[member.role] = {
                level: member.level,
                type: member.type,
                count: 1
              };
            } else {
              membersByRole[member.role].count++;
            }
          }

          // Display grouped members
          for (const [role, info] of Object.entries(membersByRole)) {
            if (info.level && info.type) {
              content += `<p>${info.count > 1 ? info.count + ' ' : ''}${role}${info.count > 1 ? 's' : ''}: Level ${info.level} ${info.type}</p>`;
            } else {
              content += `<p>${role}: ${info.notes || 'Special unit'}</p>`;
            }
          }

          // Add notes section if available
          if (result.notes) {
            content += `<hr><h4>Notes</h4>`;
            const noteLines = result.notes.split('\n');
            for (const line of noteLines) {
              if (line.trim()) { // Only add non-empty lines
                content += `<p>${line}</p>`;
              }
            }
          }
        } else if (result.result === "Encounter") {
          // existing standard encounter handling
          content += `<p>Time of Day: ${options.timeOfDay || 'Unknown'}</p>
                      <p>Table Roll: ${result.typeRoll || 'N/A'}</p>`;

          if (result.subtableType && result.subtableRoll) {
            content += `<p>Subtable: ${result.subtableType}</p>
                        <p>Subtable Roll: ${result.subtableRoll}</p>`;
          }

          content += `<p>Encounter: ${result.encounter || 'Unknown Creature'}</p>`;

          if (result.specialResult) {
            content += `<p>Specific Type: ${result.specialResult}</p>`;
          }

          if (typeof result.number === 'object') {
            content += `<p>Number: ${result.number.total}</p>`;
            if (Array.isArray(result.number.rolls)) {
              content += `<p><em>(Rolled: ${result.number.rolls.join(', ')})</em></p>`;
            }
          } else {
            content += `<p>Number: ${result.number || '1'}</p>`;
          }

          if (result.notes) {
            content += `<p>Notes: ${result.notes}</p>`;
          }
        } else {
          // Default case
          content += `<p>Result: ${result.result || 'Unknown'}</p>`;
        }

        console.log("🧪 Equipment length in display result:", result.equipmentAssigned?.length);
        console.log("📦 Equipment preview:", result.equipmentAssigned?.slice(0, 5));

        // Equipment loadout breakdown (if any)
        if (result.equipmentAssigned?.length) {
          const loadoutSummary = result.equipmentAssigned.reduce((acc, unit) => {
            acc[unit.equipment] = (acc[unit.equipment] || 0) + 1;
            return acc;
          }, {});

          content += `<hr><h4>Troop Equipment Loadout</h4><ul style="margin-top: 0.25em;">`;
          for (const [equip, count] of Object.entries(loadoutSummary)) {
            const label = equip.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
            content += `<li>${label}: ${count}</li>`;
          }
          content += `</ul>`;
        }

        break;  // end of case 'outdoor'
      }
      case 'dungeon': {
        // Display the dungeon level and monster name
        content += `<p>Dungeon Level: ${options.dungeonLevel || '1'}</p>
                    <p>Monster: ${result.monster || 'Unknown'}</p>`;

        // Show number appearing (safely handles both object and primitive formats)
        const numberTotal = result.number?.total ?? result.number ?? 1;
        content += `<p>Number Appearing: ${numberTotal}</p>`;

        // If we have individual dice results, show those too
        if (Array.isArray(result.number?.rolls)) {
          content += `<p><em>(Rolled: ${result.number.rolls.join(', ')})</em></p>`;
        }

        // Show the monster level if available
        if (result.monsterLevel) {
          content += `<p>Monster Level: ${result.monsterLevel}</p>`;
        }

        // Show adjusted number if it's different than original
        if (result.adjustedNumber && result.adjustedNumber !== numberTotal) {
          content += `<p>Adjusted Number: ${result.adjustedNumber} (based on dungeon level)</p>`;
        }

        // Add any notes associated with this result
        if (result.notes) {
          content += `<p>Notes: ${result.notes}</p>`;
        }

        // Special section for character-type dungeon encounters
        if (result.monster === "Character" && result.partyInfo) {
          content += `<hr><h4>Adventuring Party</h4>`;
          content += `<p>${result.partyInfo}</p>`;
          if (result.henchmenInfo) {
            content += `<p>${result.henchmenInfo}</p>`;
          }
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

    // Show a note if this was a fallback from a WoG regional table
    if (options.regionFallback && options.fromRegion) {
      const regionName = options.fromRegion.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      content += `<hr><p><em>📍 Encounter redirected from <strong>${regionName}</strong> regional table.</em></p>`;
    }

    // Unconditional equipment display (outside of encounter type branches)
    console.log("🧪 Equipment length check (end of function):", result.equipmentAssigned?.length);
    if (result.equipmentAssigned && result.equipmentAssigned.length > 0) {
      const loadoutSummary = result.equipmentAssigned.reduce((acc, unit) => {
        acc[unit.equipment] = (acc[unit.equipment] || 0) + 1;
        return acc;
      }, {});

      content += `<hr><h4>Troop Equipment Loadout</h4><ul style="margin-top: 0.25em;">`;
      for (const [equip, count] of Object.entries(loadoutSummary)) {
        const label = equip.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
        content += `<li>${label}: ${count}</li>`;
      }
      content += `</ul>`;
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
    console.log("🔍 [rollEncounter] Starting with options:", options);
  
    try {
      if (!options || !options.encounterType) {
        console.warn("❌ [rollEncounter] Missing encounter type in options");
        return { result: "No encounter type specified", error: "Missing encounter type" };
      }
  
      let result;
      console.log(`🎯 [rollEncounter] Processing encounter type: ${options.encounterType}`);
      
      switch (options.encounterType) {
        case 'regional':
          console.log("🌍 [rollEncounter] Calling _rollRegionalEncounter");
          result = await this._rollRegionalEncounter(options);
          console.log("🔄 [rollEncounter] Returned from _rollRegionalEncounter with result:", result);
          break;
        case 'outdoor':
          if (!options.terrain || !options.population) {
            console.warn("❌ [rollEncounter] Missing required parameters for outdoor encounter");
            return {
              result: "Error generating encounter",
              error: "Missing required parameters for outdoor encounter",
              options: options
            };
          }
          
          // Create a copy of the options object
          const outdoorOptions = { ...options };
          console.log("📋 [rollEncounter] Created copy of options for outdoor encounter:", outdoorOptions);
  
          // Ensure forceEncounter is properly set as a boolean
          outdoorOptions.forceEncounter = options.forceEncounter === true;
          console.log(`🚩 [rollEncounter] Set forceEncounter flag to: ${outdoorOptions.forceEncounter}`);
  
          console.log(`🏕️ [rollEncounter] Calling rollOutdoorEncounter with terrain=${options.terrain}, population=${options.population}, timeOfDay=${options.timeOfDay}`);
          
          result = await this.rollOutdoorEncounter(
            options.terrain,
            options.population,
            options.timeOfDay,
            outdoorOptions
          );
          
          console.log("🔄 [rollEncounter] Returned from rollOutdoorEncounter with result:", result);
          
          // Log specific important values
          console.log(`👁️ [rollEncounter] Result has encounter: ${result.encounter || 'undefined'}`);
          console.log(`👁️ [rollEncounter] Result has roll: ${result.roll || 'undefined'}`);
          console.log(`👁️ [rollEncounter] Result has typeRoll: ${result.typeRoll || 'undefined'}`);
          console.log(`👁️ [rollEncounter] Result has originalRegionalRoll: ${result.originalRegionalRoll || 'undefined'}`);
          console.log(`👁️ [rollEncounter] Result has monsterData: ${result.monsterData ? 'yes' : 'no'}`);
          
          break;
        case 'dungeon':
          console.log("🏰 [rollEncounter] Calling _rollDungeonEncounter");
          result = await this._rollDungeonEncounter(options);
          console.log("🔄 [rollEncounter] Returned from _rollDungeonEncounter with result:", result);
          break;
        case 'underwater':
        case 'waterborne':
          console.log("🌊 [rollEncounter] Calling _rollWaterborneEncounter");
          result = await this._rollWaterborneEncounter(options);
          console.log("🔄 [rollEncounter] Returned from _rollWaterborneEncounter with result:", result);
          break;
        case 'airborne':
          console.log("☁️ [rollEncounter] Calling _rollAirborneEncounter");
          result = await this._rollAirborneEncounter(options);
          console.log("🔄 [rollEncounter] Returned from _rollAirborneEncounter with result:", result);
          break;
        case 'city':
        case 'town':
          console.log("🏙️ [rollEncounter] Calling _rollCityEncounter");
          result = await this._rollCityEncounter(options);
          console.log("🔄 [rollEncounter] Returned from _rollCityEncounter with result:", result);
          break;
        case 'astral':
        case 'ethereal':
          console.log("✨ [rollEncounter] Calling _rollPlanarEncounter");
          result = await this._rollPlanarEncounter(options);
          console.log("🔄 [rollEncounter] Returned from _rollPlanarEncounter with result:", result);
          break;
        default:
          console.warn(`❌ [rollEncounter] Unknown encounter type: ${options.encounterType}`);
          return {
            result: "No valid encounter type specified",
            error: `Unknown encounter type: ${options.encounterType}`
          };
      }
  
      // Validate result
      if (!result) {
        console.error(`❌ [rollEncounter] No result returned from ${options.encounterType} encounter generation`);
        return {
          result: "Error generating encounter",
          error: "No result returned from encounter generator",
          encounterType: options.encounterType
        };
      }
  
      // Log the final result before returning
      console.log("✅ [rollEncounter] Final result to return:", result);
      
      // Return the successful result
      return result;
  
    } catch (error) {
      console.error(`❌ [rollEncounter] Error generating ${options?.encounterType || 'unknown'} encounter:`, error);
      console.error(`🔍 [rollEncounter] Error stack:`, error.stack);
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
  static async _rollRegionalEncounter(options) {
    const region = options.specificRegion?.trim().toLowerCase().replace(/[\s\-]/g, "_") || "greyhawk";
    let table = GREYHAWK_REGIONAL_TABLES[region];
  
    const isWarZone = options.isWarZone ?? false;
    const population = options.population || 'moderate';
    const forceEncounter = options.forceEncounter === true;
  
    console.log(`🗺️ Regional Encounter Starting...`);
    console.log(`  ➤ Region: ${region}`);
    console.log(`  ➤ Population: ${population}`);
    console.log(`  ➤ Is War Zone: ${isWarZone}`);
  
    // Step 1: Encounter Check
    let dieSize = { dense: 20, uninhabited: 10 }[population] || 12;
    const roll = new Roll(`1d${dieSize}`);
    await roll.evaluate();
  
    const encounterDiceResults = roll.dice.flatMap(die => die.results.map(r => r.result));
    await roll.toMessage({
      speaker: ChatMessage.getSpeaker(),
      flavor: `🎲 Encounter Check (${population} area): 1 in d${dieSize}<br><em>Rolled:</em> ${encounterDiceResults.join(', ')} (Total: ${roll.total})`
    });
  
    console.log(`🎲 Encounter check: rolled ${roll.total} on d${dieSize} (success if 1)`);
  
    if (!forceEncounter && roll.total !== 1) {
      console.log(`⛔ No encounter`);
      return { roll: roll.total, encounter: `No encounter (rolled ${roll.total} on d${dieSize})` };
    } else if (forceEncounter) {
      console.log(`⚠️ Forcing encounter due to test mode`);
    }
  
    // Step 2: Get Table (fallbacks)
    if (!table) {
      table = GREYHAWK_GEOGRAPHICAL_TABLES[region];
      console.log(`🌄 Using fallback geographical table: ${!!table}`);
    }
  
    if (!table) {
      console.warn(`⚠️ No encounter table found for region: ${region}, using Greyhawk`);
      table = GREYHAWK_REGIONAL_TABLES['greyhawk'];
    }
  
    // Step 3: Roll Encounter
    const tableRoll = new Roll("1d100");
    await tableRoll.evaluate();
    const tableRollValue = tableRoll.total;
    console.log(`📜 Rolled ${tableRollValue} for encounter result on ${region} table`);
  
    for (const entry of table) {
      const isMatch = (entry.max === 0 && tableRollValue >= entry.min) || (tableRollValue >= entry.min && tableRollValue <= entry.max);
      if (!isMatch) continue;
  
      console.log(`📌 Matched ${entry.min}-${entry.max || "+"} → ${entry.encounter}`);
  
      const fallbackText = entry.encounter?.toLowerCase();
      const isStandardRedirect = entry.useStandard || (
        fallbackText?.includes("use standard") ||
        fallbackText?.includes("standard encounter") ||
        fallbackText?.includes("as per standard")
      );
  
      if (isStandardRedirect) {
        console.log(`↪️ Redirecting to standard encounter handler`);
        return await this.rollEncounter({
          encounterType: 'outdoor',
          terrain: options.terrain || 'plain',
          population,
          timeOfDay: options.timeOfDay || 'noon',
          climate: options.climate || 'temperate',
          forceEncounter: true,
          regionFallback: true,
          fromRegion: region,
          originalRegionalRoll: tableRollValue
        });
      }
  
      // Attempt to resolve encounter via monster data
      const rawName = entry.encounter;
      const normalizedName = normalizeEncounterName(rawName);
      let monsterData = findMonsterByName(normalizedName);
  
      if (!monsterData && normalizedName.includes(",")) {
        const alt = normalizedName.split(",")[1].trim();
        monsterData = findMonsterByName(alt);
      }
  
      if (!monsterData && normalizedName.includes(" and ")) {
        const parts = normalizedName.split(" and ").map(s => s.trim());
        const found = parts.map(findMonsterByName).filter(Boolean);
        if (found.length) monsterData = found[0];
      }
  
      if (monsterData?._variant) {
        monsterData = { ...monsterData, ...monsterData._variant };
      }
  
      // Number Appearing
      let numberAppearing = null, breakdown = null, diceResults = [];
      if (monsterData?.numberAppearing) {
        const result = rollNumberFromPattern(monsterData.numberAppearing);
        numberAppearing = result.total;
        breakdown = result.rolls;
        if (Array.isArray(result.rolls)) {
          diceResults = [...result.rolls];
        }
        console.log(`🎯 Number Appearing: ${numberAppearing} [${breakdown.join(', ')}]`);
      }
  
      // % in Lair
      const lairChance = parseInt(monsterData?.lairProbability || "0");
      const lairRoll = Math.floor(Math.random() * 100) + 1;
      const isLairEncounter = lairRoll <= lairChance;
      if (lairChance > 0) {
        console.log(`🏰 Rolled ${lairRoll} for % in Lair (≤${lairChance}) → ${isLairEncounter ? "LAIR" : "not lair"}`);
      }
  
      // Leaders & Equipment
      const specialMembers = (monsterData?.leaders && numberAppearing)
        ? flattenLeaderData(monsterData.leaders, numberAppearing, isLairEncounter)
        : [];
  
      const equipmentAssigned = GreyhawkEncounters.assignEquipment(monsterData, numberAppearing, options.terrain || "");
  
      // Chat Content
      const encounterText = numberAppearing ? `${numberAppearing} ${rawName}` : rawName;
      let leaderBlock = "";
  
      if (specialMembers?.length) {
        leaderBlock = `<br><strong>Leaders & Special Members:</strong><ul style="margin-top: 0.25em;">`;
        for (const leader of specialMembers) {
          leaderBlock += `<li><em>${leader.role}</em>: ${leader.notes || `Level ${leader.level} ${leader.type}`}</li>`;
        }
        leaderBlock += `</ul>`;
      }
  
      const content = `
        <strong>Region:</strong> ${region}<br>
        <strong>Roll:</strong> ${tableRollValue}<br>
        <strong>Encounter:</strong> ${encounterText}
        ${breakdown ? `<br><em>Number Appearing:</em> ${numberAppearing} (Dice: ${diceResults.join(', ')})` : ""}
        <br><strong>% In Lair:</strong> ${lairChance}% → <em>${isLairEncounter ? "Yes" : "No"}</em>
        ${leaderBlock}
      `;
  
      await ChatMessage.create({
        speaker: ChatMessage.getSpeaker(),
        flavor: `📍 <strong>Greyhawk Encounter</strong>`,
        content,
        type: CONST.CHAT_MESSAGE_STYLES.OTHER
      });
  
      return {
        roll: tableRollValue,
        encounter: encounterText,
        number: numberAppearing ?? null,
        numberRolls: breakdown ?? [],
        rawEncounter: rawName,
        alignment: monsterData?.alignment,
        treasure: monsterData?.treasure,
        description: monsterData?.description,
        isLair: isLairEncounter,
        specialMembers,
        equipmentAssigned
      };
    }

    // 🛑 No match found in the encounter table
    console.warn(`⚠️ No valid encounter matched for roll ${tableRollValue} on region "${region}"`);
    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker(),
      flavor: `📍 <strong>Greyhawk Encounter</strong>`,
      content: `<strong>Region:</strong> ${region}<br>
                <strong>Roll:</strong> ${tableRollValue}<br>
                <strong>Encounter:</strong> <em>N/A (no matching entry)</em>`,
      type: CONST.CHAT_MESSAGE_STYLES.OTHER
    });

    return {
      roll: tableRollValue,
      encounter: "N/A (no matching entry found)",
      number: null,
      numberRolls: [],
      rawEncounter: null,
      isLair: false,
      specialMembers: [],
      equipmentAssigned: []
    };


  } // end of _rollRegionalEncounter()
  

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
    if (!this._shouldRollEncounterForTime(timeOfDay, terrain, options.partySize || 0)) {
      const msg = `🌄 <strong>No encounter check made</strong><br>
      <em>Reason:</em> According to DMG rules, encounters are not checked at <strong>${timeOfDay}</strong> in <strong>${terrain}</strong> terrain unless the party numbers over 100 creatures.`;

      await ChatMessage.create({
        user: game.user.id,
        speaker: ChatMessage.getSpeaker(),
        content: msg
      });

      console.log(`⛔ Encounter skipped due to DMG terrain/time rule — Time: ${timeOfDay}, Terrain: ${terrain}`);
      return {
        result: "Encounter check skipped",
        skipped: true
      };
    }

    // Determine die size based on population density
    let dieSize, checkValue;
    switch (population) {
      case 'dense':
        dieSize = 20; // 1 in 20
        checkValue = 1;
        break;
      case 'moderate':
        dieSize = 12; // 1 in 12
        checkValue = 1;
        break;
      case 'uninhabited':
        dieSize = 10; // 1 in 10 
        checkValue = 1;
        break;
      default:
        dieSize = 12; // default to moderate
        checkValue = 1;
    }

    // Roll for encounter
    const roll = await (new Roll(`1d${dieSize}`)).evaluate(); // ✅ correct

    await roll.toMessage({
      flavor: `🌲 Encounter Check (${population} area)`,
      speaker: ChatMessage.getSpeaker(),
    });

    const initialRoll = roll.total;

    // Check if encounter occurs (roll a 1 on the appropriate die)
    // OR force an encounter for testing
    if (!options.forceEncounter && initialRoll !== checkValue) {
      return {
        result: "No encounter",
        initialRoll,
        dieSize,
        encounterCheck: `Needed ${checkValue} on d${dieSize}`
      };
    }

    // Determine if this is a patrol encounter (for inhabited areas)
    // or a fortress encounter (for uninhabited areas)
    const isInhabited = population !== 'uninhabited';
    const isWarZone = options.isWarZone ?? false;

    // 🔥 Adjust special chance roll for patrol/fortress
    let patrolChance = isInhabited ? 5 : 0; // base 5 in 20 = 25%
    let fortressChance = !isInhabited ? 1 : 0; // base 1 in 20 = 5%

    if (isWarZone) {
      patrolChance *= 2;    // 50% in war zones
      fortressChance *= 2;  // optionally 10% for fortresses if desired
    }

    const specialRoll = Math.floor(Math.random() * 20) + 1;

    if (isInhabited && specialRoll <= patrolChance) {
      const patrolResult = await this.rollPatrolEncounter({ patrolType: population });
      patrolResult.initialRoll = initialRoll;
      patrolResult.dieSize = dieSize;
      patrolResult.encounterCheck = `Rolled ${initialRoll} on d${dieSize}`;
      patrolResult.specialRoll = specialRoll;
      patrolResult.specialType = "Patrol";
      return patrolResult;
    } else if (!isInhabited && specialRoll <= fortressChance) {
      const fortressResult = await this._rollFortressEncounter(terrain, options);
      fortressResult.initialRoll = initialRoll;
      fortressResult.dieSize = dieSize;
      fortressResult.encounterCheck = `Rolled ${initialRoll} on d${dieSize}`;
      fortressResult.specialRoll = specialRoll;
      fortressResult.specialType = "Fortress";
      return fortressResult;
    }

    // Roll for standard outdoor encounter
    const encounterResult = await this._rollDMGOutdoorEncounter(terrain, population, options);
    encounterResult.initialRoll = initialRoll;
    encounterResult.dieSize = dieSize;
    encounterResult.encounterCheck = `Rolled ${initialRoll} on d${dieSize}`;

    // Copy original regional roll into result if present
    if (options.originalRegionalRoll !== undefined) {
      encounterResult.roll = options.originalRegionalRoll;
    }
    
    return encounterResult;
  }

  static _rollFortressEncounter(terrain, options = {}) {
    console.log("Rolling fortress encounter");

    // Determine castle size and type
    const sizeRoll = Math.floor(Math.random() * 100) + 1;
    let size, type;

    if (sizeRoll <= 10) {
      size = "Small";
      type = "Small shell keep";
    } else if (sizeRoll <= 25) {
      size = "Small";
      type = "Tower";
    } else if (sizeRoll <= 35) {
      size = "Small";
      type = "Moat house or friary";
    } else if (sizeRoll <= 45) {
      size = "Medium";
      type = "Large shell keep";
    } else if (sizeRoll <= 65) {
      size = "Medium";
      type = "Small walled castle with keep";
    } else if (sizeRoll <= 80) {
      size = "Medium";
      type = "Medium walled castle with keep";
    } else if (sizeRoll <= 88) {
      size = "Large";
      type = "Concentric castle";
    } else if (sizeRoll <= 95) {
      size = "Large";
      type = "Large walled castle with keep";
    } else {
      size = "Large";
      type = "Fortress complex";
    }

    // Determine inhabitants
    const inhabitantsRoll = Math.floor(Math.random() * 100) + 1;
    let inhabitants, details;

    // Select range based on castle size
    let rangeStart, rangeEnd;
    switch (size) {
      case "Small":
        if (inhabitantsRoll <= 45) {
          inhabitants = "Totally deserted";
        } else if (inhabitantsRoll <= 60) {
          inhabitants = "Deserted with monster";
          // Roll monster appropriate to the area
          const monsterResult = this._rollDMGOutdoorEncounter(terrain, 'uninhabited',
            { ...options, checkForFortress: false }); // Prevent recursion
          details = monsterResult.encounter;
        } else if (inhabitantsRoll <= 70) {
          inhabitants = "Humans";
          details = this._rollFortressHumans();
        } else {
          inhabitants = "Character-types";
          details = this._rollFortressCharacters();
        }
        break;

      case "Medium":
        if (inhabitantsRoll <= 30) {
          inhabitants = "Totally deserted";
        } else if (inhabitantsRoll <= 50) {
          inhabitants = "Deserted with monster";
          // Roll monster appropriate to the area
          const monsterResult = this._rollDMGOutdoorEncounter(terrain, 'uninhabited',
            { ...options, checkForFortress: false }); // Prevent recursion
          details = monsterResult.encounter;
        } else if (inhabitantsRoll <= 65) {
          inhabitants = "Humans";
          details = this._rollFortressHumans();
        } else {
          inhabitants = "Character-types";
          details = this._rollFortressCharacters();
        }
        break;

      case "Large":
        if (inhabitantsRoll <= 15) {
          inhabitants = "Totally deserted";
        } else if (inhabitantsRoll <= 40) {
          inhabitants = "Deserted with monster";
          // Roll monster appropriate to the area
          const monsterResult = this._rollDMGOutdoorEncounter(terrain, 'uninhabited',
            { ...options, checkForFortress: false }); // Prevent recursion
          details = monsterResult.encounter;
        } else if (inhabitantsRoll <= 60) {
          inhabitants = "Humans";
          details = this._rollFortressHumans();
        } else {
          inhabitants = "Character-types";
          details = this._rollFortressCharacters();
        }
        break;
    }

    return {
      result: "Fortress Encounter",
      size: size,
      type: type,
      inhabitants: inhabitants,
      details: details,
      distanceInMiles: (Math.floor(Math.random() * 10) / 2) + 0.5, // 0.5 to 5 miles away
      notes: "The party is within visual range of this construction."
    };
  }

  // Helper for fortress humans subtable
  static _rollFortressHumans() {
    const roll = Math.floor(Math.random() * 100) + 1;

    if (roll <= 25) {
      return {
        type: "Bandits",
        number: Math.floor(Math.random() * 40) + 20, // 20-60 bandits is reasonable
        leader: "Bandit Captain"
      };
    } else if (roll <= 85) {
      return {
        type: "Brigands",
        number: Math.floor(Math.random() * 50) + 30, // 30-80 brigands
        leader: "Brigand Leader"
      };
    } else if (roll <= 97) {
      return {
        type: "Berserkers",
        number: Math.floor(Math.random() * 30) + 10, // 10-40 berserkers
        leader: "Berserker Chief"
      };
    } else {
      return {
        type: "Dervishes",
        number: Math.floor(Math.random() * 20) + 10, // 10-30 dervishes
        leader: "Dervish Fanatic"
      };
    }
  }

  // Helper for fortress character-types subtable
  static _rollFortressCharacters() {
    const roll = Math.floor(Math.random() * 100) + 1;
    let characterClass, level;

    if (roll <= 18) {
      characterClass = "CLERIC";
      level = Math.floor(Math.random() * 4) + 9; // 9-12
    } else if (roll <= 20) {
      characterClass = "Druid";
      level = Math.floor(Math.random() * 2) + 12; // 12-13
    } else if (roll <= 65) {
      characterClass = "FIGHTER";
      level = Math.floor(Math.random() * 4) + 9; // 9-12
    } else if (roll <= 66) {
      characterClass = "Paladin";
      level = Math.floor(Math.random() * 2) + 9; // 9-10
    } else if (roll <= 68) {
      characterClass = "Ranger";
      level = Math.floor(Math.random() * 4) + 10; // 10-13
    } else if (roll <= 80) {
      characterClass = "MAGIC-USER";
      level = Math.floor(Math.random() * 4) + 11; // 11-14
    } else if (roll <= 85) {
      characterClass = "Illusionist";
      level = Math.floor(Math.random() * 4) + 10; // 10-13
    } else if (roll <= 93) {
      characterClass = "THIEF";
      level = Math.floor(Math.random() * 5) + 10; // 10-14
    } else if (roll <= 96) {
      characterClass = "Assassin";
      level = 14; // Always 14th level
    } else if (roll <= 99) {
      characterClass = "MONK";
      level = Math.floor(Math.random() * 4) + 9; // 9-12
    } else {
      characterClass = "BARD";
      level = 23; // Always 23rd level
    }

    // Generate random number of henchmen (2-5)
    const henchmenCount = Math.floor(Math.random() * 4) + 2;

    // Create garrison forces based on DMG guidelines
    const garrison = [
      { type: "Heavy Horse", count: Math.floor(Math.random() * 4) + 9, equipment: "splint mail & shield, lance, long sword, mace" },
      { type: "Light Horse", count: Math.floor(Math.random() * 8) + 9, equipment: "studded leather, light crossbow, long sword" },
      { type: "Men-at-arms (Spear)", count: Math.floor(Math.random() * 12) + 13, equipment: "scale mail, shield, spear, hand axe" },
      { type: "Men-at-arms (Crossbow)", count: Math.floor(Math.random() * 6) + 7, equipment: "scale mail, heavy crossbow, morning star" }
    ];

    return {
      master: `${characterClass} (Level ${level})`,
      henchmen: henchmenCount,
      garrison: garrison,
      description: `The fortress is controlled by a ${level}th level ${characterClass} with ${henchmenCount} henchmen and a garrison of soldiers.`
    };
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

    // Convert terrain to match DMG tables
    let dmgTerrain = terrain;

    // Normalize the terrain to match DMG tables (your existing code is fine)
    switch (terrain) {
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

    // Check for fortress encounter in uninhabited areas (1 in 20 chance)
    if (!isInhabited && options.checkForFortress !== false) {
      const fortressRoll = Math.floor(Math.random() * 20) + 1;
      if (fortressRoll === 1) {
        return this._rollFortressEncounter(dmgTerrain, options);
      }
    }

    // Roll for creature type based on terrain and population
    const roll = Math.floor(Math.random() * 100) + 1;
    console.log(`Rolling ${roll} on d100 for creature type`);

    // Select appropriate table based on climate
    let encounterTable;
    if (climate === 'arctic') {
      encounterTable = DMG_TABLES.ARCTIC_CONDITIONS_TABLE[dmgTerrain];
    } else if (climate === 'subarctic') {
      encounterTable = DMG_TABLES.SUBARCTIC_CONDITIONS_TABLE[dmgTerrain];
    } else if (climate === 'temperate' || climate === 'subtropical') {
      if (isInhabited) {
        encounterTable = DMG_TABLES.TEMPERATE_INHABITED_TABLES[dmgTerrain];
      } else {
        encounterTable = DMG_TABLES.TEMPERATE_UNINHABITED_TABLES[dmgTerrain];
      }
    } else if (climate === 'tropical') {
      // Use tropical tables
      encounterTable = DMG_TABLES.TROPICAL_UNINHABITED_TABLES[dmgTerrain];
      // TODO: Add tropical inhabited tables when available
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
    let numberPattern = "1d6"; // Default

    // Find the encounter in the table
    for (const entry of encounterTable) {
      if (roll >= entry.min && roll <= entry.max) {
        // Handle different table formats
        if (typeof entry.creature === 'string') {
          encounter = entry.creature;
        } else if (entry.creature && entry.creature.name) {
          encounter = entry.creature.name;
        } else if (entry.monster) {
          encounter = entry.monster;
        }

        // Get number pattern
        numberPattern = entry.number || (entry.creature ? entry.creature.number : null) || "1d6";

        // Check for subtable
        subtableNeeded = entry.subtable || (entry.creature ? entry.creature.subtable : null);

        break;
      }
    }

    if (!encounter) {
      const result = {
        result: "Encounter",
        typeRoll: roll,
        encounter: "Unknown Creature"
      };
      if (options.originalRegionalRoll !== undefined) result.roll = options.originalRegionalRoll;
      return result;
    }

    // Handle subtables if needed
    if (subtableNeeded) {
      console.log(`Rolling on subtable: ${subtableNeeded}`);
      const subtableRoll = Math.floor(Math.random() * 100) + 1;

      // ✅ Select subtable set FIRST so it's available to both branches
      let subtableSet;
      if (climate === 'tropical') {
        subtableSet = { ...DMG_TABLES.TEMPERATE_SUBTABLES, ...DMG_TABLES.TROPICAL_SUBTABLES };
      } else {
        subtableSet = DMG_TABLES.TEMPERATE_SUBTABLES;
      }

      // Special handling for "men" subtable - check for character encounter
      if (subtableNeeded === "men") {
        console.log(`Rolling on men subtable with roll ${subtableRoll}`);

        // 10% chance of character encounter from Men subtable
        if (subtableRoll >= 11 && subtableRoll <= 20) {
          console.log("Men subtable resulted in Character encounter");
          const isWilderness = (options.population === 'uninhabited');
          return this._generateCharacterEncounter(1, isWilderness);
        }

        // Process the regular men subtable result
        const subtableResult = this._rollOnSubtable(subtableNeeded, subtableRoll, subtableSet, terrain);

        const useMMStats = game.settings.get('greyhawk-encounters', 'useMonsterManualStats');
        if (useMMStats && ["Bandit", "Berserker", "Brigand", "Dervish", "Merchant", "Nomad", "Pilgrim", "Tribesman"].includes(subtableResult.creature)) {
          console.log(`Using MM stats for ${subtableResult.creature}`);
          return this._generateMMHumanEncounter(subtableResult.creature.toLowerCase(), options);
        } else {
          let number;
          try {
            number = rollNumberFromPattern(subtableResult.number || "1d6");
          } catch (error) {
            console.error("Error rolling number pattern:", error);
            number = 1;
          }

          return {
            result: "Encounter",
            encounter: subtableResult.creature,
            subtableType: "men",
            subtableRoll: subtableRoll,
            number: number,
            distance: this._getEncounterDistance(dmgTerrain),
            notes: subtableResult.notes || "",
            ...(options.originalRegionalRoll !== undefined && { roll: options.originalRegionalRoll })
          };
        }
      }

      // ✅ Generic subtable fallback (for dragons, giants, etc.)
      const subtableResult = this._rollOnSubtable(subtableNeeded, subtableRoll, subtableSet, dmgTerrain);
      encounter = subtableResult.creature;
      numberPattern = subtableResult.number || numberPattern;

      const result = {
        result: "Encounter",
        typeRoll: roll,
        encounter: encounter,
        subtableType: subtableNeeded,
        subtableRoll: subtableRoll,
        climate: climate,
        terrain: dmgTerrain
      };

      const monsterData = findMonsterByName(subtableResult.creature);
      if (monsterData) {
        result.monsterData = monsterData;

        if (monsterData.numberAppearing) {
          try {
            result.number = rollNumberFromPattern(monsterData.numberAppearing);
          } catch (error) {
            console.error("Error rolling Monster Manual number appearing:", error);
            result.number = 1;
          }
        }

        if (monsterData.ageCategories?.length) {
          const ageRoll = Math.floor(Math.random() * monsterData.ageCategories.length);
          const age = monsterData.ageCategories[ageRoll];
          result.age = age.name;
          result.hitDice = age.hitDice;
          result.hpPerDie = age.hpPerDie;
          result.saveBonus = age.saveBonus;
          result.spellcasting = age.spellcasting;
        }
      }

      if (!result.number) {
        try {
          result.number = rollNumberFromPattern(numberPattern);
        } catch (error) {
          console.error("Error rolling for creature number:", error);
          result.number = 1;
        }
      }

      if (subtableResult.notes) {
        result.notes = subtableResult.notes;
      }

      if (options.originalRegionalRoll !== undefined) {
        result.roll = options.originalRegionalRoll;
      }

      return result;
    }

    // Handle direct Character encounters (not from subtable)
    if (encounter === "Character") {
      console.log("Direct Character encounter from table");
      return this._generateCharacterEncounter(1, true).then(result => {
        if (options.originalRegionalRoll !== undefined) {
          result.roll = options.originalRegionalRoll;
        }
        return result;
      });
    }

    // Roll for number of creatures
    let number;
    try {
      number = rollNumberFromPattern(numberPattern);
    } catch (error) {
      console.error("Error rolling number pattern:", error);
      number = 1;
    }

    // Check if creature is airborne
    const isAirborne = options.isAirborne || (encounter.isAirborne && Math.random() < 0.75);

    // Calculate encounter distance 
    const encounterDistance = this._getEncounterDistance(dmgTerrain);

    const result = {
      result: "Encounter",
      typeRoll: roll,
      encounter: encounter,
      number: number,
      climate: climate,
      terrain: dmgTerrain,
      population: population,
      distance: encounterDistance,
      notes: isAirborne ? "Encountered while airborne" : ""
    };
    
    // ⬇️ Lookup from Monster Manual
    const monsterData = findMonsterByName(encounter);
    if (monsterData) {
      result.monsterData = monsterData;
    
      // Roll number appearing if MM provides it
      if (monsterData.numberAppearing && typeof result.number !== 'object') {
        try {
          result.number = rollNumberFromPattern(monsterData.numberAppearing);
          console.log(`🎯 Number Appearing (MM): ${result.number.total} [${result.number.rolls.join(', ')}]`);
        } catch (error) {
          console.error("Error rolling Monster Manual number:", error);
        }
      }
    
      // Assign gear if number and equipment exist
      if (monsterData.equipment && result.number?.total) {
        try {
          result.equipmentAssigned = GreyhawkEncounters.assignEquipment(monsterData, result.number.total, terrain);
        } catch (err) {
          console.warn("⚠️ Equipment assignment failed:", err);
        }
      }
    }
    
    if (options.originalRegionalRoll !== undefined) {
      result.roll = options.originalRegionalRoll;
    }
    
    return result;
    
  }

  static _generateMMHumanEncounter(humanType, options) {
    console.log(`Generating MM-style ${humanType} encounter`);

    const terrain = options.terrain || 'plain';
    const isWilderness = options.population === 'uninhabited';

    // Get the MM table for this human type
    const mmTable = DMG_TABLES.MM_HUMAN_TABLES[humanType];
    if (!mmTable) {
      console.warn(`No MM table found for ${humanType}`);
      return null;
    }

    // Determine base number
    let baseNumber;
    if (isWilderness) {
      baseNumber = Math.floor(Math.random() * (mmTable.numberRange[1] - mmTable.numberRange[0] + 1)) + mmTable.numberRange[0];
    } else if (mmTable.dungeonNumberRange) {
      baseNumber = Math.floor(Math.random() * (mmTable.dungeonNumberRange[1] - mmTable.dungeonNumberRange[0] + 1)) + mmTable.dungeonNumberRange[0];
    } else {
      baseNumber = Math.floor(mmTable.numberRange[0] / 2);
    }

    // Determine leader level
    let leaderLevel;
    if (mmTable.leaderLevels) {
      if (typeof mmTable.leaderLevels === 'object') {
        if (baseNumber < 100) leaderLevel = mmTable.leaderLevels.small;
        else if (baseNumber < 150) leaderLevel = mmTable.leaderLevels.medium;
        else leaderLevel = mmTable.leaderLevels.large;
      } else {
        leaderLevel = mmTable.leaderLevels;
      }
    }

    // Generate special members
    const specialMembers = [];

    // Add leader
    if (leaderLevel) {
      specialMembers.push({
        type: "Fighter",
        level: typeof leaderLevel === 'object' ? leaderLevel.chief : leaderLevel,
        role: "Leader"
      });

      // Add subchiefs/lieutenants if defined
      if (typeof leaderLevel === 'object' && leaderLevel.subchiefs) {
        specialMembers.push({
          type: "Fighter",
          level: leaderLevel.subchiefs,
          role: "Subchieftain"
        });
      }
    }

    // Process all special members
    if (mmTable.specialMembers) {
      for (const [role, details] of Object.entries(mmTable.specialMembers)) {
        // Skip processing if this is for leader level
        if (role === 'leader') continue;

        // Determine count of this member type
        let count = details.count || 1;
        if (details.countFormula) {
          // Handle dice notation and math formulas
          if (details.countFormula.includes('d')) {
            count = rollNumberFromPattern(details.countFormula);
          } else {
            // Evaluate math formula with 'number' variable
            const number = baseNumber;
            count = eval(details.countFormula);
          }
        }

        // Check if there's a chance formula
        if (details.chanceFormula) {
          const number = baseNumber;
          const chance = eval(details.chanceFormula);
          if (Math.random() * 100 >= chance) {
            continue; // Skip this member type
          }
        }

        // Handle level ranges
        let level = details.level;
        if (typeof level === 'string' && level.includes('-')) {
          const levels = level.split('-').map(l => parseInt(l));
          level = Math.floor(Math.random() * (levels[1] - levels[0] + 1)) + levels[0];
        }

        // Add the special members
        for (let i = 0; i < count; i++) {
          specialMembers.push({
            type: details.class,
            level: level,
            role: role.charAt(0).toUpperCase() + role.slice(1)
          });
        }

        // Add assistants if defined
        if (details.assistant) {
          let assistantCount = details.assistant.count || 1;
          if (details.assistant.countFormula) {
            if (details.assistant.countFormula.includes('d')) {
              assistantCount = rollNumberFromPattern(details.assistant.countFormula);
            } else {
              const number = baseNumber;
              assistantCount = eval(details.assistant.countFormula);
            }
          }

          // Handle assistant level ranges
          let assistantLevel = details.assistant.level;
          if (typeof assistantLevel === 'string' && assistantLevel.includes('-')) {
            const levels = assistantLevel.split('-').map(l => parseInt(l));
            assistantLevel = Math.floor(Math.random() * (levels[1] - levels[0] + 1)) + levels[0];
          }

          // Add the assistants
          for (let i = 0; i < assistantCount; i++) {
            specialMembers.push({
              type: details.assistant.class,
              level: assistantLevel,
              role: "Assistant " + role.charAt(0).toUpperCase() + role.slice(1)
            });
          }
        }
      }
    }

    // Generate equipment description
    let equipmentText = "";
    if (mmTable.equipment && mmTable.equipment.length > 0) {
      equipmentText = "Equipment:\n";
      for (const eq of mmTable.equipment) {
        equipmentText += `${eq.percent}%: ${eq.type}\n`;
      }
    }

    // Combine notes
    let notes = mmTable.notes || "";
    if (equipmentText) notes += "\n" + equipmentText;
    if (mmTable.morale) notes += "\nMorale: " + mmTable.morale;

    return {
      result: "Encounter",
      typeRoll: 0,
      encounter: humanType.charAt(0).toUpperCase() + humanType.slice(1),
      number: baseNumber,
      specialMembers: specialMembers,
      distance: this._getEncounterDistance(terrain),
      alignment: mmTable.alignment,
      notes: notes
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
  // In greyhawk-encounters.js:

  static _rollOnSubtable(subtableName, roll, subtableSet = null, terrain = null) {
    console.log(`Rolling on subtable: ${subtableName}, terrain: ${terrain}, roll: ${roll}`);

    // Instead of defining DMG_TERRAIN_SUBTABLES here, use the imported tables

    // Try to find the right subtable
    let subtable = null;

    // First check for terrain-specific subtable in your main tables
    if (terrain) {
      // Check for terrain-specific versions like "demi_human_mountains"
      const terrainSpecificName = `${subtableName}_${terrain}`;
      if (DMG_TABLES.TEMPERATE_SUBTABLES[terrainSpecificName]) {
        subtable = DMG_TABLES.TEMPERATE_SUBTABLES[terrainSpecificName];
      }
      // Check for a terrain key within the subtable
      else if (DMG_TABLES.DMG_TERRAIN_SUBTABLES &&
        DMG_TABLES.DMG_TERRAIN_SUBTABLES[subtableName] &&
        DMG_TABLES.DMG_TERRAIN_SUBTABLES[subtableName][terrain]) {
        subtable = DMG_TABLES.DMG_TERRAIN_SUBTABLES[subtableName][terrain];
      }
    }

    // If no terrain-specific table, try the provided subtableSet
    if (!subtable && subtableSet && subtableSet[subtableName]) {
      subtable = subtableSet[subtableName];
    }

    // Finally fall back to general subtables
    if (!subtable && DMG_TABLES.TEMPERATE_SUBTABLES[subtableName]) {
      subtable = DMG_TABLES.TEMPERATE_SUBTABLES[subtableName];
    }

    if (!subtable) {
      console.warn(`No subtable found for ${subtableName} with terrain ${terrain}`);
      return { creature: "Unknown (subtable not found)" };
    }

    // Find matching entry
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
      let numberResult;
      let numberTotal;
      try {
        if (typeof rollNumberFromPattern === 'function') {
          numberResult = rollNumberFromPattern(numberPattern);
        } else if (typeof this.rollNumberFromPattern === 'function') {
          numberResult = this.rollNumberFromPattern(numberPattern);
        } else {
          console.warn("rollNumberFromPattern not found, using fallback");
          numberResult = this._fallbackRollNumberFromPattern(numberPattern);
        }

        // Normalize to primitive
        if (typeof numberResult === 'object' && numberResult.total !== undefined) {
          numberTotal = numberResult.total;
        } else if (typeof numberResult === 'number') {
          numberTotal = numberResult;
          numberResult = { total: numberResult };  // for consistency
        } else {
          console.warn("Invalid numberResult format, defaulting to 1");
          numberTotal = 1;
          numberResult = { total: 1 };
        }

      } catch (error) {
        console.error("Error rolling number pattern:", error);
        numberTotal = 1;
        numberResult = { total: 1 };
      }

      console.log(`Rolled number appearing: ${numberTotal} (pattern: ${numberPattern})`);

      // Adjust numbers based on relative dungeon level
      let adjustedNumber;

      if (dungeonLevel > monsterLevel) {
        // Augment base number by +1x per level difference
        const levelDifference = dungeonLevel - monsterLevel;
        adjustedNumber = numberTotal * (1 + levelDifference);
        console.log(`Adjusted number up to ${adjustedNumber} due to monster being lower level than dungeon`);
      } else if (dungeonLevel < monsterLevel) {
        // Reduce count by 1 per level above, minimum 1
        const levelDifference = monsterLevel - dungeonLevel;
        adjustedNumber = Math.max(1, numberTotal - levelDifference);
        console.log(`Adjusted number down to ${adjustedNumber} due to monster being higher level than dungeon`);
      } else {
        adjustedNumber = numberTotal; // No change if same level
        console.log(`No adjustment needed for monster/dungeon level`);
      }

      const result = {
        result: "Encounter",
        monsterLevel,
        levelRoll,
        monsterRoll,
        monster,
        number: numberResult,       // always an object with `.total`
        adjustedNumber,
        notes,
        partyInfo,
        henchmenInfo
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
  static _generateCharacterEncounter(dungeonLevel, isWilderness = false) {
    console.log(`Generating character encounter, dungeon level: ${dungeonLevel}, wilderness: ${isWilderness}`);

    // For wilderness encounters, use the special note guidelines from the DMG
    if (isWilderness) {
      // Number of characters in party (standard adventuring party)
      const characterCount = Math.floor(Math.random() * 4) + 2; // 2-5

      // Character levels (7-10 for wilderness)
      const characterLevel = Math.floor(Math.random() * 4) + 7; // 7-10

      // Determine if mounted (90% chance)
      const isMounted = Math.random() < 0.9;

      // Calculate number of henchmen (approximately half character level)
      const henchmenCount = 9 - characterCount;
      const henchmenLevel = Math.ceil(characterLevel / 2);

      // Generate a simple class distribution for the party
      const classOptions = ["Fighter", "Magic-User", "Cleric", "Thief"];
      const partyClasses = [];

      for (let i = 0; i < characterCount; i++) {
        const classIndex = Math.floor(Math.random() * classOptions.length);
        partyClasses.push(classOptions[classIndex]);
      }

      // Generate simple mount information if mounted
      let mountInfo = "";
      if (isMounted) {
        const mountTypes = ["light warhorses", "medium warhorses", "heavy warhorses"];
        const mountType = mountTypes[Math.floor(Math.random() * mountTypes.length)];
        mountInfo = `Mounted on ${mountType}`;
      }

      return {
        result: "Encounter",
        encounter: "Character",
        number: characterCount + henchmenCount,
        partyInfo: `${characterCount} adventurers (${partyClasses.join(", ")}) - Level ${characterLevel}`,
        henchmenInfo: `${henchmenCount} henchmen (Level ${henchmenLevel})`,
        notes: `Wilderness adventuring party. ${mountInfo}. According to DMG, 90% of wilderness character parties are mounted.`,
        isMounted: isMounted
      };
    }

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
    // Roll 6d4 and track individual die results for terrain modifiers
    const dieResults = [];
    let totalDistance = 0;

    for (let i = 0; i < 6; i++) {
      const dieRoll = Math.floor(Math.random() * 4) + 1;
      dieResults.push(dieRoll);
      totalDistance += dieRoll;
    }

    // Apply surprise modifier if provided
    totalDistance -= surpriseValue;

    // Apply terrain modifiers
    let terrainModifier = 0;

    if (terrain === 'scrub') {
      // -1 per die on all 3's and 4's
      terrainModifier = dieResults.filter(die => die >= 3).length * -1;
    } else if (terrain === 'forest') {
      // -1 per die on all numbers
      terrainModifier = -6;
    } else if (terrain === 'marsh') {
      // -1 per die on all 2's, 3's, and 4's
      terrainModifier = dieResults.filter(die => die >= 2).length * -1;
    }
    // Plain, desert, hills, and mountains have no modifiers

    const finalDistance = Math.max(0, totalDistance + terrainModifier);

    console.log(`Encounter distance: Base=${totalDistance}, Terrain=${terrain}, Modifier=${terrainModifier}, Final=${finalDistance}`);

    return finalDistance;
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

  static _generateHumanEncounter(humanType, population = 'uninhabited') {
    console.log(`Generating ${humanType} encounter`);

    let baseNumber = 0;
    let leaderLevel = 0;
    let notes = "";
    let specialMembers = [];

    switch (humanType.toLowerCase()) {
      case 'bandit':
      case 'brigand': {
        // Roll 20-200 bandits (or appropriate for dungeon)
        baseNumber = population === 'uninhabited' ? Math.floor(Math.random() * 181) + 20 : Math.floor(Math.random() * 31) + 10;

        // Calculate leader levels based on MM rules
        const isBrigand = humanType.toLowerCase() === 'brigand';

        // Leader level based on group size
        if (baseNumber < 100) leaderLevel = 8;
        else if (baseNumber < 150) leaderLevel = 9;
        else leaderLevel = 10;

        // Add lieutenants and guards
        specialMembers.push({
          type: "Fighter",
          level: leaderLevel,
          role: "Leader"
        });

        specialMembers.push({
          type: "Fighter",
          level: 7,
          role: "Lieutenant"
        });

        // Add 6 guards
        for (let i = 0; i < 6; i++) {
          specialMembers.push({
            type: "Fighter",
            level: 2,
            role: "Guard"
          });
        }

        // Add high level fighters based on group size
        const thirdLevelCount = Math.floor(baseNumber / 20);
        const fourthLevelCount = Math.floor(baseNumber / 30);
        const fifthLevelCount = Math.floor(baseNumber / 40);
        const sixthLevelCount = Math.floor(baseNumber / 50);

        for (let i = 0; i < thirdLevelCount; i++) {
          specialMembers.push({
            type: "Fighter",
            level: 3,
            role: "Sergeant"
          });
        }

        // Continue for other fighter levels...

        // Check for magic-user
        const magicUserChance = Math.floor(baseNumber / 50) * 25;
        if (Math.random() * 100 < magicUserChance) {
          const muLevel = Math.floor(Math.random() * 4) + 7; // 7-10
          specialMembers.push({
            type: "Magic-User",
            level: muLevel,
            role: "Advisor"
          });
        }

        // Check for cleric
        const clericChance = Math.floor(baseNumber / 50) * 15;
        if (Math.random() * 100 < clericChance) {
          const clericLevel = Math.floor(Math.random() * 2) + 5; // 5-6
          specialMembers.push({
            type: "Cleric",
            level: clericLevel,
            role: "Healer"
          });

          // Assistant cleric
          const assistantLevel = Math.floor(Math.random() * 2) + 3; // 3-4
          specialMembers.push({
            type: "Cleric",
            level: assistantLevel,
            role: "Assistant Healer"
          });
        }

        // Calculate equipment percentages
        notes = isBrigand ? "Chaotic evil bandits with high morale (+1)" : "Neutral bandits";
        notes += `\nArmed with: ${_calculateBanditEquipment(baseNumber)}`;
        break;
      }

      case 'merchant': {
        // Roll 50-300 people in caravan
        baseNumber = Math.floor(Math.random() * 251) + 50;

        // 10% merchants, 10% drovers, 80% guards
        const merchants = Math.floor(baseNumber * 0.1);
        const drovers = Math.floor(baseNumber * 0.1);
        const guards = baseNumber - merchants - drovers;

        // Add caravan leader
        const leaderLevel = Math.floor(Math.random() * 6) + 6; // 6-11
        specialMembers.push({
          type: "Fighter",
          level: leaderLevel,
          role: "Caravan Leader"
        });

        // Add lieutenant
        specialMembers.push({
          type: "Fighter",
          level: leaderLevel - 1,
          role: "Lieutenant"
        });

        // Add special characters based on caravan size
        // Magic-user check
        const muChance = Math.floor(baseNumber / 50) * 10;
        if (Math.random() * 100 < muChance) {
          const muLevel = Math.floor(Math.random() * 3) + 6; // 6-8
          specialMembers.push({
            type: "Magic-User",
            level: muLevel,
            role: "Advisor"
          });
        }

        // Similar code for clerics and thieves

        notes = `Merchants: ${merchants}, Drovers: ${drovers}, Guards: ${guards}`;
        notes += "\nCarrying merchandise worth 10,000-60,000 gp";
        notes += "\nPay chest: 2,000-4,000 gp, 100-400 pp, 4-16 gems";
        break;
      }

      // Add cases for other human types: Berserker, Dervish, Nomad, Pilgrim, Tribesman
    }

    return {
      result: "Human Encounter",
      encounter: humanType,
      number: baseNumber,
      specialMembers: specialMembers,
      notes: notes,
      distance: _getEncounterDistance(terrain)
    };
  }

  // Helper function to calculate bandit equipment
  static _calculateBanditEquipment(number) {
    // Calculate equipment based on percentages from Monster Manual
    const mountedPercent = terrain === 'hills' || terrain === 'mountains' ? 10 : 90;

    // Calculate equipment types
    return "Medium horse, chainmail & shield, sword (10%), etc."; // Full calculation in actual implementation
  }

  static resolveRegionalTable(region) {
    // Normalize casing
    const normalized = region.trim().replace(/\s+/g, ' ');
    const titleCased = normalized
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');

    const key = REGION_TABLE_MAP[titleCased] ?? titleCased;
    return GREYHAWK_REGIONAL_TABLES[key];
  }

  static assignEquipment(monsterData, totalCount, terrain = "") {
    console.log("🧰 assignEquipment: START");
    console.log("📦 monsterData.name:", monsterData?.name);
    console.log("📦 totalCount:", totalCount);
    console.log("🌍 terrain:", terrain);
  
    const assigned = [];
  
    const equipmentTable = monsterData?.equipment?.mounts_armor_weapons || monsterData?.equipment?.armor_weapons;
    console.log("📊 Equipment table:", equipmentTable);
  
    if (!equipmentTable) {
      console.warn("⚠️ No equipment table found for monster.");
      return assigned;
    }
  
    // Normalize equipment entries
    const entries = Object.entries(equipmentTable).flatMap(([label, percent]) => {
      const pct = typeof percent === "string" ? parseInt(percent) : percent;
      return isNaN(pct) ? [] : { label, chance: pct };
    });
  
    console.log("📋 Normalized equipment entries:", entries);
  
    // Adjust for mounted % if specified
    const mountedLimit = (() => {
      const mounted = monsterData?.equipment?.mounted_percentage;
      if (terrain.includes("hill") || terrain.includes("mountain")) return 0.1;
      if (terrain.includes("plain") || terrain.includes("open")) return 0.9;
      return null;
    })();
  
    const maxMounted = mountedLimit !== null ? Math.floor(totalCount * mountedLimit) : totalCount;
    console.log(`🐎 Mounted limit: ${maxMounted} (from mountedLimit=${mountedLimit})`);
  
    let mountedAssigned = 0;
  
    // Roll for each unit
    for (let i = 0; i < totalCount; i++) {
      const rolled = Math.floor(Math.random() * 100) + 1;
      let sum = 0;
      let selected = entries.find(e => {
        sum += e.chance;
        return rolled <= sum;
      });
  
      let isMounted = /horse/.test(selected?.label || "");
  
      // Enforce mount limit
      if (mountedLimit !== null && isMounted && mountedAssigned >= maxMounted) {
        console.log(`⚠️ Mounted limit reached (${mountedAssigned}/${maxMounted}), rerolling non-mounted for unit ${i + 1}`);
        selected = entries.find(e => !/horse/.test(e.label));
        isMounted = /horse/.test(selected?.label || "");
      }
  
      if (isMounted) mountedAssigned++;
  
      const assignedUnit = {
        equipment: selected?.label || "Unknown",
        mounted: isMounted
      };
  
      assigned.push(assignedUnit);
      console.log(`🎲 Unit ${i + 1} ➜ rolled ${rolled}, assigned:`, assignedUnit);
    }
  
    console.log("✅ assignEquipment: COMPLETE", assigned);
    return assigned;
  }
  
  
}
