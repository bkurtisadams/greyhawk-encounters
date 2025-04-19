// utils/utility.js
// Utility functions for the random encounter system

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