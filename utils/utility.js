// utils/utility.js
// Utility functions for the random encounter system

/**
 * Rolls a random number according to a pattern like "1d6", "2d8+1", or "1-4"
 * @param {string} pattern - The pattern to roll (e.g., "2d6", "1-4", "3")
 * @returns {number} - The rolled result
 */
export const rollNumberFromPattern = (pattern) => {
    if (!pattern) return 1;
    
    // Handle simple numbers
    if (!isNaN(pattern)) {
      return parseInt(pattern);
    }
    
    // Handle ranges like "1-4"
    if (pattern.includes('-')) {
      const [min, max] = pattern.split('-').map(n => parseInt(n));
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Handle dice patterns like "2d6"
    if (pattern.includes('d')) {
      let modifier = 0;
      let dicePattern = pattern;
      
      // Extract modifier if present
      if (pattern.includes('+')) {
        const parts = pattern.split('+');
        dicePattern = parts[0];
        modifier = parseInt(parts[1]) || 0;
      }
      
      // Split into dice count and sides
      const [diceCount, diceSides] = dicePattern.split('d').map(n => parseInt(n));
      
      // Roll the dice
      let total = 0;
      for (let i = 0; i < diceCount; i++) {
        total += Math.floor(Math.random() * diceSides) + 1;
      }
      
      // Add modifier
      return total + modifier;
    }
    
    return 1; // Default fallback
  };
  
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