// utils/utility.js
// Utility functions for the random encounter system
import { MONSTER_MANUAL } from '../data/monster-manual.js'; // adjust path as needed


export function findMonsterByName(name) {
  console.log(`🔍 Looking up monster: "${name}"`);
  const normalized = name.toLowerCase().trim();

  // Handle cases like "Dwarves, Mountain" → "Mountain Dwarf"
  const commaSplit = normalized.split(',').map(part => part.trim());
  if (commaSplit.length > 1) {
    const reversedName = `${commaSplit[1]} ${commaSplit[0]}`;
    console.log(`↩️ Trying reversed comma format: "${reversedName}"`);
    const reversedResult = _findMonsterByNameInner(reversedName);
    if (reversedResult) return reversedResult;
  }

  const directResult = _findMonsterByNameInner(normalized);
  if (!directResult) {
    console.warn(`⚠️ Monster not found for: "${name}"`);
  }
  return directResult;
}

// Internal helper with full normalization and fallback logic
function _findMonsterByNameInner(normalizedRaw) {
  const normalized = normalizedRaw.toLowerCase().trim();

  return MONSTER_MANUAL.monsters.find(mon => {
    const monsterName = mon.name?.toLowerCase().trim();
    if (!monsterName) return false;

    // Step 1: Exact name match
    if (monsterName === normalized) return true;

    // Step 2: Match against name_variants
    if (mon.name_variants) {
      const variants = Array.isArray(mon.name_variants)
        ? mon.name_variants.map(v => v.toLowerCase().trim())
        : mon.name_variants.split(',').map(v => v.toLowerCase().trim());
      if (variants.includes(normalized)) return true;
    }

    // Step 3: Match against structured variants
    if (Array.isArray(mon.variants)) {
      for (const variant of mon.variants) {
        const variantName1 = `${monsterName}, ${variant.type?.toLowerCase()}`.trim();
        const variantName2 = `${variant.type?.toLowerCase()} ${monsterName}`.trim();
        if (normalized === variantName1 || normalized === variantName2) {
          mon._variant = variant; // Attach matched variant
          return true;
        }
      }
    }

    // Step 4: Handle common plural forms (e.g. goblins → goblin, dwarves → dwarf)
    if (normalized.endsWith("s")) {
      const singular = normalized.endsWith("ves")
        ? normalized.slice(0, -3) + "f" // e.g. dwarves → dwarf
        : normalized.slice(0, -1);     // goblins → goblin

      if (monsterName === singular) return true;
      if (monsterName.endsWith("s") && normalized === monsterName.slice(0, -1)) return true;
    }

    // Step 5: Try stripped punctuation fallback (e.g. remove commas, parens)
    const strippedInput = normalized.replace(/[\(\),]/g, '').replace(/\s+/g, ' ').trim();
    const strippedMonsterName = monsterName.replace(/[\(\),]/g, '').replace(/\s+/g, ' ').trim();
    if (strippedInput === strippedMonsterName) return true;

    return false;
  });
}

/**
 * Rolls a random number according to a pattern like "1d6", "2d8+1", or "1-4"
 * @param {string} pattern - The pattern to roll (e.g., "2d6", "1-4", "3")
 * @returns {number} - The rolled result
 */
export const rollNumberFromPattern = (pattern) => {
  if (!pattern) return { total: 1, rolls: [1] };

  // Handle plain number
  if (!isNaN(pattern)) {
    const val = parseInt(pattern);
    return { total: val, rolls: [val] };
  }

  // Handle ranges like "1-4"
  if (pattern.includes('-')) {
    const [min, max] = pattern.split('-').map(n => parseInt(n));
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return { total: result, rolls: [result] };
  }

  // Handle dice like 2d6+1
  const match = pattern.match(/^(\d+)d(\d+)(\+(\d+))?$/);
  if (match) {
    const dice = parseInt(match[1]);
    const sides = parseInt(match[2]);
    const bonus = parseInt(match[4]) || 0;
    const rolls = [];

    for (let i = 0; i < dice; i++) {
      rolls.push(Math.floor(Math.random() * sides) + 1);
    }

    const total = rolls.reduce((sum, r) => sum + r, 0) + bonus;
    return {
      total,
      rolls: bonus ? [...rolls, `+${bonus}`] : rolls
    };
  }

  return { total: 1, rolls: [1] }; // Fallback
};

function rollNumberFromPatternWithDice(pattern) {
  if (!pattern) return { total: 1, rolls: [1], diceResults: [1] };

  // Handle plain number
  if (!isNaN(pattern)) {
    const val = parseInt(pattern);
    return { total: val, rolls: [val], diceResults: [val] };
  }

  // Handle ranges like "1-4"
  if (pattern.includes('-')) {
    const [min, max] = pattern.split('-').map(n => parseInt(n));
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return { total: result, rolls: [result], diceResults: [result] };
  }

  // Handle dice like 2d6+1
  const match = pattern.match(/^(\d+)d(\d+)(\+(\d+))?$/);
  if (match) {
    const dice = parseInt(match[1]);
    const sides = parseInt(match[2]);
    const bonus = parseInt(match[4]) || 0;
    const rolls = [];
    const diceResults = [];

    for (let i = 0; i < dice; i++) {
      const result = Math.floor(Math.random() * sides) + 1;
      rolls.push(result);
      diceResults.push(result);
    }

    const total = rolls.reduce((sum, r) => sum + r, 0) + bonus;
    
    // Add the bonus as its own dice result for display
    if (bonus) diceResults.push(bonus);
    
    return {
      total,
      rolls: bonus ? [...rolls, `+${bonus}`] : rolls,
      diceResults
    };
  }

  return { total: 1, rolls: [1], diceResults: [1] }; // Fallback
}
  
  /**
   * Roll on a specific encounter table based on a roll
   * @param {Array} table - The table to roll on
   * @param {number} roll - The roll result
   * @returns {Object} - The encounter result
   */
  export const getResultFromTable = (table, roll) => {
    for (const entry of table) {
      if (roll >= entry.min && roll <= entry.max) {
        return entry;
      }
    }
    return null;
  };
  
  /**
   * Generate a random integer between min and max (inclusive)
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @returns {number} - Random integer between min and max
   */
  export const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  /**
   * Roll percentile dice (d100)
   * @returns {number} - Number between 1-100
   */
  export const rollD100 = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  
  /**
   * Format encounter description
   * @param {Object} result - The encounter result object
   * @returns {string} - Formatted description
   */
  export const formatEncounterDescription = (result) => {
    if (!result) return "No encounter";
    
    let description = `${result.encounter || 'Unknown creature'}`;
    
    if (result.number && result.number > 0) {
      description += ` (${result.number})`;
    }
    
    if (result.notes) {
      description += ` - ${result.notes}`;
    }
    
    return description;
  };
  
  // Export as default for easier importing
  export default {
    rollNumberFromPattern,
    getResultFromTable,
    randomInt,
    rollD100,
    formatEncounterDescription
  };