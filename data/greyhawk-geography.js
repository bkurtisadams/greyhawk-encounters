// Exports geographical area encounter tables for World of Greyhawk
export const GREYHAWK_GEOGRAPHICAL_TABLES = {
    // Forests
    "adri_forest": [
      { min: 1, max: 5, encounter: "Elves, Sylvan" },
      { min: 6, max: 8, encounter: "Gnomes" },
      { min: 9, max: 15, encounter: "Halflings" },
      { min: 16, max: 18, encounter: "Humanoids" },
      { min: 19, max: 20, encounter: "Men, Bandits" },
      { min: 21, max: 45, encounter: "Men, Woodsmen" },
      { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    // Mountains
    "barrier_peaks": [
      { min: 1, max: 4, encounter: "Dwarves, Mountain" },
      { min: 5, max: 10, encounter: "Giants" },
      { min: 11, max: 15, encounter: "Giants, Frost" },
      { min: 16, max: 18, encounter: "Giants, Hill" },
      { min: 19, max: 20, encounter: "Giants, Mountain" },
      { min: 21, max: 24, encounter: "Giants, Stone" },
      { min: 25, max: 35, encounter: "Humanoids" },
      { min: 36, max: 38, encounter: "Men, Cavemen" },
      { min: 39, max: 42, encounter: "Men, Tribesmen" },
      { min: 43, max: 47, encounter: "Ogres" },
      { min: 48, max: 50, encounter: "Trolls" },
      { min: 51, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    // Hills
    "abbor_alz": [
      { min: 1, max: 3, encounter: "Giants, Hill" },
      { min: 4, max: 10, encounter: "Humanoids" },
      { min: 11, max: 15, encounter: "Men, Patrol, Medium" },
      { min: 16, max: 40, encounter: "Men, Tribesmen (plus 20-80)" },
      { min: 41, max: 43, encounter: "Ogres" },
      { min: 44, max: 45, encounter: "Trolls" },
      { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    // Marshes
    "cold_marshes": [
      { min: 1, max: 3, encounter: "Frost Men" },
      { min: 4, max: 10, encounter: "Gnolls" },
      { min: 11, max: 30, encounter: "Men, Tribesmen" },
      { min: 31, max: 40, encounter: "Quaggoths" },
      { min: 41, max: 45, encounter: "Toad, Ice" },
      { min: 46, max: 50, encounter: "Troll, Ice" },
      { min: 51, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    // Add other geographical regions as needed
  };
  
  // Export default for easier importing
  export default GREYHAWK_GEOGRAPHICAL_TABLES;