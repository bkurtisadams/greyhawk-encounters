import { rollNumberFromPattern } from '../utils/utility.js';
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

    "grandwood_forest": [
      { min: 1, max: 7, encounter: "Elves, Patrol" },
      { min: 8, max: 10, encounter: "Elves, Sylvan" },
      { min: 11, max: 15, encounter: "Gnomes" },
      { min: 16, max: 20, encounter: "Halflings, Tallfellows" },
      { min: 21, max: 23, encounter: "Humanoids" },
      { min: 24, max: 25, encounter: "Men, Bandits" },
      { min: 26, max: 30, encounter: "Men, Brigands" },
      { min: 31, max: 45, encounter: "Men, Woodsmen" },
      { min: 46, max: 50, encounter: "Treants" },
      { min: 51, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],

    "amedio_jungle": [
      { min: 1, max: 10, encounter: "Dakon" },
      { min: 11, max: 15, encounter: "Gibberlings" },
      { min: 16, max: 20, encounter: "Men, Patrol, Slaver" },
      { min: 21, max: 30, encounter: "Men, Tribesmen" },
      { min: 31, max: 45, encounter: "Men, Tribesmen (cannibals/headhunters)" },
      { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    // For forests that share the same chart
    "axewood": [
      { min: 1, max: 5, encounter: "Elves, Patrol" },
      { min: 6, max: 15, encounter: "Elves, Sylvan" },
      { min: 16, max: 20, encounter: "Gnomes" },
      { min: 21, max: 25, encounter: "Halflings, Hairfeet" },
      { min: 26, max: 30, encounter: "Halflings, Tallfellows" },
      { min: 31, max: 33, encounter: "Humanoids" },
      { min: 34, max: 35, encounter: "Men, Bandits" },
      { min: 36, max: 40, encounter: "Men, Brigands" },
      { min: 41, max: 45, encounter: "Men, Characters" },
      { min: 46, max: 65, encounter: "Men, Woodsmen" },
      { min: 66, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    // Create aliases for areas that share the same encounter table
    "dreadwood": "axewood",  // References the axewood table
    "menowood": "axewood",
    "rieuwood": "axewood",
    "silverwood": "axewood",
    
    // More shared tables
    "bramblewood": [
      { min: 1, max: 3, encounter: "Demi-humans" },
      { min: 4, max: 10, encounter: "Humanoids" },
      { min: 11, max: 15, encounter: "Men, Bandits" },
      { min: 16, max: 18, encounter: "Men, Brigands" },
      { min: 19, max: 22, encounter: "Men, Patrol, Medium" },
      { min: 23, max: 28, encounter: "Men, Tribesmen (woodsmen)" },
      { min: 29, max: 30, encounter: "Ogres" },
      { min: 31, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "nutherwood": "bramblewood",
    "phostwood": "bramblewood",
    "udgru_forest": "bramblewood",

    "burneal_forest": [
      { min: 1, max: 5, encounter: "Kobolds" },
      { min: 6, max: 10, encounter: "Men, Nomads" },
      { min: 11, max: 20, encounter: "Men, Tribesmen (plus 1-20 wolf dogs)" },
      { min: 21, max: 25, encounter: "Quaggoths" },
      { min: 26, max: 30, encounter: "Wolf Dogs (as wild dogs but equal to war dogs)" },
      { min: 31, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    "celadon_forest": [
      { min: 1, max: 3, encounter: "Demi-humans" },
      { min: 4, max: 25, encounter: "Elves, High" },
      { min: 26, max: 27, encounter: "Elves, Sylvan" },
      { min: 28, max: 30, encounter: "Gnolls" },
      { min: 31, max: 35, encounter: "Gnomes" },
      { min: 36, max: 45, encounter: "Halflings, Hairfeet" },
      { min: 46, max: 65, encounter: "Halflings, Tallfellows" },
      { min: 66, max: 75, encounter: "Humanoids" },
      { min: 76, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "fellreev_forest": "celadon_forest",
    "gamboge_forest": "celadon_forest",
    
    "dim_forest": [
      { min: 1, max: 3, encounter: "Demi-humans" },
      { min: 4, max: 12, encounter: "Elves, Sylvan" },
      { min: 13, max: 18, encounter: "Gnomes" },
      { min: 19, max: 22, encounter: "Humanoids" },
      { min: 23, max: 25, encounter: "Men, Bandits" },
      { min: 26, max: 27, encounter: "Men, Brigands" },
      { min: 28, max: 31, encounter: "Men, Patrol, Light" },
      { min: 32, max: 35, encounter: "Men, Raiders" },
      { min: 36, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "hornwood": "dim_forest",
    "oytwood": "dim_forest",

    "suss_forest": [
      { min: 1, max: 2, encounter: "Demi-humans" },
      { min: 3, max: 4, encounter: "Ettercaps" },
      { min: 5, max: 8, encounter: "Gibberlings" },
      { min: 9, max: 12, encounter: "Gnolls" },
      { min: 13, max: 18, encounter: "Humanoids" },
      { min: 19, max: 24, encounter: "Kobolds" },
      { min: 25, max: 27, encounter: "Men, Bandits" },
      { min: 28, max: 29, encounter: "Men, Brigands" },
      { min: 30, max: 30, encounter: "Men, Characters" },
      { min: 31, max: 33, encounter: "Men, Patrol, Light" },
      { min: 34, max: 35, encounter: "Ogres" },
      { min: 36, max: 37, encounter: "Spiders, Giant" },
      { min: 38, max: 40, encounter: "Spiders, Large" },
      { min: 41, max: 42, encounter: "Susseri" },
      { min: 43, max: 48, encounter: "Tree (sentient, semi-mobile, 50% are dangerous)" },
      { min: 49, max: 49, encounter: "Trolls" },
      { min: 50, max: 55, encounter: "Vegetation (dangerous)" },
      { min: 56, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    "gnarley_forest": [
      { min: 1, max: 5, encounter: "Demi-humans" },
      { min: 6, max: 15, encounter: "Elves, Sylvan" },
      { min: 16, max: 19, encounter: "Gnomes" },
      { min: 20, max: 24, encounter: "Humanoids" },
      { min: 25, max: 27, encounter: "Men, Bandits" },
      { min: 28, max: 29, encounter: "Men, Brigands" },
      { min: 30, max: 35, encounter: "Men, Merchants" },
      { min: 36, max: 38, encounter: "Men, Patrol, Light" },
      { min: 39, max: 50, encounter: "Men, Tribesmen (woodsmen)" },
      { min: 51, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    "vesve_forest_east": [
      { min: 1, max: 2, encounter: "Bugbears" },
      { min: 3, max: 5, encounter: "Gnolls" },
      { min: 6, max: 12, encounter: "Humanoids" },
      { min: 13, max: 18, encounter: "Men, Bandits" },
      { min: 19, max: 25, encounter: "Men, Patrol, Light" },
      { min: 26, max: 30, encounter: "Men, Raiders" },
      { min: 31, max: 34, encounter: "Norkers" },
      { min: 35, max: 36, encounter: "Ogres" },
      { min: 37, max: 40, encounter: "Ogrillons" },
      { min: 41, max: 42, encounter: "Trolls" },
      { min: 43, max: 50, encounter: "Xvarts" },
      { min: 51, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    "vesve_forest_west": [
      { min: 1, max: 5, encounter: "Elves, High" },
      { min: 6, max: 10, encounter: "Elves, Patrol" },
      { min: 11, max: 20, encounter: "Elves, Sylvan" },
      { min: 21, max: 25, encounter: "Gnomes" },
      { min: 26, max: 27, encounter: "Halflings, Hairfeet" },
      { min: 28, max: 30, encounter: "Halflings, Tallfellows" },
      { min: 31, max: 35, encounter: "Humanoids" },
      { min: 36, max: 40, encounter: "Men, Bandits" },
      { min: 41, max: 45, encounter: "Men, Patrol, Light" },
      { min: 46, max: 58, encounter: "Men, Tribesmen (woodsmen)" },
      { min: 59, max: 60, encounter: "Ogres" },
      { min: 61, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],

    "forlorn_forest": [
      { min: 1, max: 5, encounter: "Humanoids" },
      { min: 6, max: 10, encounter: "Men, Berserkers (patrol)" },
      { min: 11, max: 20, encounter: "Men, Tribesmen" },
      { min: 21, max: 25, encounter: "Ogres" },
      { min: 26, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "hraak_forest": "forlorn_forest",
    
    "sablewood": [
      { min: 1, max: 10, encounter: "Humanoids" },
      { min: 11, max: 15, encounter: "Men, Berserkers (patrol)" },
      { min: 16, max: 25, encounter: "Men, Tribesmen (woodsmen)" },
      { min: 26, max: 30, encounter: "Ogres" },
      { min: 31, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "spikey_forest": "sablewood",
    
    "loftwood": [
      { min: 1, max: 10, encounter: "Humanoids" },
      { min: 11, max: 15, encounter: "Men, Patrol, Light" },
      { min: 16, max: 20, encounter: "Men, Raiders" },
      { min: 21, max: 30, encounter: "Men, Tribesmen (woodsmen)" },
      { min: 31, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "timberway_forest": "loftwood",
    
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
    "crystalmist_mountains": "barrier_peaks",
    "jotens": "barrier_peaks",
    
    "clatspur_range": [
      { min: 1, max: 5, encounter: "Dwarves, Mountain" },
      { min: 6, max: 7, encounter: "Giants" },
      { min: 8, max: 11, encounter: "Humanoids" },
      { min: 12, max: 13, encounter: "Men, Cavemen" },
      { min: 14, max: 15, encounter: "Men, Patrol, Medium" },
      { min: 16, max: 20, encounter: "Men, Patrol, Light" },
      { min: 21, max: 32, encounter: "Men, Tribesmen (mountaineers)" },
      { min: 33, max: 34, encounter: "Ogres" },
      { min: 35, max: 35, encounter: "Trolls" },
      { min: 36, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "yatil_mountains": "clatspur_range",
    
    "corusk_mountains": [
      { min: 1, max: 4, encounter: "Aarakoora" },
      { min: 5, max: 6, encounter: "Dwarves" },
      { min: 7, max: 10, encounter: "Dwarves, Mountain" },
      { min: 11, max: 14, encounter: "Giants" },
      { min: 15, max: 20, encounter: "Griffons" },
      { min: 21, max: 25, encounter: "Humanoids" },
      { min: 26, max: 27, encounter: "Men, Raiders" },
      { min: 28, max: 36, encounter: "Men, Tribesmen (mountaineers)" },
      { min: 37, max: 38, encounter: "Ogres" },
      { min: 39, max: 40, encounter: "Trolls" },
      { min: 41, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "griff_mountains": "corusk_mountains",
    "rakers": "corusk_mountains",

    "hellfurnaces": [
      { min: 1, max: 2, encounter: "Firedake" },
      { min: 3, max: 6, encounter: "Firenewt" },
      { min: 7, max: 10, encounter: "Firetoad" },
      { min: 11, max: 15, encounter: "Giants" },
      { min: 16, max: 25, encounter: "Giants, Fire" },
      { min: 26, max: 30, encounter: "Hell Hounds" },
      { min: 31, max: 38, encounter: "Humanoids" },
      { min: 39, max: 40, encounter: "Men, Cavemen" },
      { min: 41, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],

    "lortmil_mountains": [
      { min: 1, max: 4, encounter: "Aarakoora" },
      { min: 5, max: 12, encounter: "Dwarves" },
      { min: 13, max: 25, encounter: "Dwarves, Mountain" },
      { min: 26, max: 35, encounter: "Gnomes" },
      { min: 36, max: 38, encounter: "Halflings, Hairfeet" },
      { min: 39, max: 45, encounter: "Halflings, Stouts" },
      { min: 46, max: 49, encounter: "Humanoids" },
      { min: 50, max: 53, encounter: "Men, Bandits" },
      { min: 54, max: 55, encounter: "Men, Brigands" },
      { min: 56, max: 57, encounter: "Men, Characters" },
      { min: 58, max: 65, encounter: "Men, Patrol, Light" },
      { min: 66, max: 75, encounter: "Men, Tribesmen (mountaineers)" },
      { min: 76, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    "sulhaut_mountains": [
      { min: 1, max: 3, encounter: "Demi-humans" },
      { min: 4, max: 10, encounter: "Elves, Drow (night only)" },
      { min: 11, max: 12, encounter: "Giants" },
      { min: 13, max: 17, encounter: "Humanoids" },
      { min: 18, max: 25, encounter: "Men, Nomads" },
      { min: 26, max: 40, encounter: "Men, Tribesmen" },
      { min: 41, max: 60, encounter: "Ogres" },
      { min: 61, max: 0, encounter: "Use Pleistocine Conditions Encounter Table", useStandard: true }
    ],
    "ullsprue": "sulhaut_mountains",
    
    // Hills and Highlands
    "abbor_alz": [
      { min: 1, max: 3, encounter: "Giants, Hill" },
      { min: 4, max: 10, encounter: "Humanoids" },
      { min: 11, max: 15, encounter: "Men, Patrol, Medium" },
      { min: 16, max: 40, encounter: "Men, Tribesmen (plus 20-80)" },
      { min: 41, max: 43, encounter: "Ogres" },
      { min: 44, max: 45, encounter: "Trolls" },
      { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],

    "blemu_hills": [
      { min: 1, max: 2, encounter: "Giants, Hill" },
      { min: 3, max: 20, encounter: "Humanoids" },
      { min: 21, max: 24, encounter: "Men, Bandits" },
      { min: 25, max: 30, encounter: "Men, Brigands" },
      { min: 31, max: 40, encounter: "Men, Tribesmen (hillmen)" },
      { min: 41, max: 42, encounter: "Ogres" },
      { min: 43, max: 44, encounter: "Trolls" },
      { min: 45, max: 45, encounter: "Trolls, Giant" },
      { min: 46, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "bluff_hills": "blemu_hills",
    "drachensgrab_hills": "blemu_hills",
    "howling_hills": "blemu_hills",
    "spine_ridge": "blemu_hills",
    "tors": "blemu_hills",
    
    "cairn_hills": [
      { min: 1, max: 5, encounter: "Dwarves" },
      { min: 6, max: 10, encounter: "Gnomes" },
      { min: 11, max: 14, encounter: "Halflings, Hairfeet" },
      { min: 15, max: 17, encounter: "Halflings, Stouts" },
      { min: 18, max: 23, encounter: "Humanoids" },
      { min: 24, max: 29, encounter: "Men, Bandits" },
      { min: 30, max: 33, encounter: "Men, Brigands" },
      { min: 34, max: 36, encounter: "Men, Characters" },
      { min: 37, max: 45, encounter: "Men, Merchants" },
      { min: 46, max: 48, encounter: "Men, Patrol" },
      { min: 49, max: 50, encounter: "Men, Rhennee (near water)" },
      { min: 51, max: 60, encounter: "Men, Tribesmen" },
      { min: 61, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    "flinty_hills": [
      { min: 1, max: 5, encounter: "Demi-humans" },
      { min: 6, max: 20, encounter: "Dwarves" },
      { min: 21, max: 40, encounter: "Gnomes" },
      { min: 41, max: 50, encounter: "Halflings, Stouts" },
      { min: 51, max: 55, encounter: "Men, Bandits" },
      { min: 56, max: 75, encounter: "Men, Tribesmen (hillmen)" },
      { min: 76, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "good_hills": "flinty_hills",
    "gull_cliffs": "flinty_hills",
    "headlands": "flinty_hills",
    "hollow_highlands": "flinty_hills",
    "iron_hills": "flinty_hills",
    "little_hills": "flinty_hills",
    "lorridges": "flinty_hills",
    "stark_mounds": "flinty_hills",
    
    "hestmark_highlands": [
      { min: 1, max: 3, encounter: "Demi-humans" },
      { min: 4, max: 12, encounter: "Dwarves" },
      { min: 13, max: 16, encounter: "Dwarves, Mountain" },
      { min: 17, max: 25, encounter: "Elves, High" },
      { min: 26, max: 28, encounter: "Elves, Patrol" },
      { min: 29, max: 35, encounter: "Gnomes" },
      { min: 36, max: 40, encounter: "Humanoids" },
      { min: 41, max: 50, encounter: "Men, Bandits (90% are actually good hillmen)" },
      { min: 51, max: 55, encounter: "Men, Brigands" },
      { min: 56, max: 60, encounter: "Men, Merchants" },
      { min: 61, max: 63, encounter: "Men, Patrol, Light" },
      { min: 64, max: 70, encounter: "Men, Raiders" },
      { min: 71, max: 75, encounter: "Men, Tribesmen (hillmen)" },
      { min: 76, max: 80, encounter: "Ore Soldiery" },
      { min: 81, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "glorioles": "hestmark_highlands",

    "kron_hills": [
      { min: 1, max: 5, encounter: "Demi-humans" },
      { min: 6, max: 10, encounter: "Dwarves" },
      { min: 11, max: 30, encounter: "Gnomes" },
      { min: 31, max: 35, encounter: "Halflings, Stouts" },
      { min: 36, max: 40, encounter: "Humanoids" },
      { min: 41, max: 47, encounter: "Men, Bandits (50% are actually good hillmen)" },
      { min: 48, max: 50, encounter: "Men, Brigands" },
      { min: 51, max: 60, encounter: "Men, Tribesmen (hillmen)" },
      { min: 61, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    "sepia_uplands": [
      { min: 1, max: 5, encounter: "Demi-humans" },
      { min: 6, max: 15, encounter: "Humanoids" },
      { min: 16, max: 20, encounter: "Men, Bandits" },
      { min: 21, max: 25, encounter: "Men, Brigands" },
      { min: 26, max: 40, encounter: "Men, Nomads" },
      { min: 41, max: 55, encounter: "Men, Tribesmen" },
      { min: 56, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "tusman_hills": "sepia_uplands",
    "yecha_hills": "sepia_uplands",
    
    // Water Bodies
    "artonsamay_river": [
      { min: 1, max: 20, encounter: "Men, Rhennee" },
      { min: 21, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "nesser_river": "artonsamay_river",
    "selintan_river": "artonsamay_river",
    "velverdyva_river": "artonsamay_river",
    "veng_river": "artonsamay_river",
    
    "nyr_dyv": [
      { min: 1, max: 20, encounter: "Men, Buccaneers (patrol warship)" },
      { min: 21, max: 40, encounter: "Men, Merchants" },
      { min: 41, max: 50, encounter: "Men, Merchants (fishing fleet)" },
      { min: 51, max: 60, encounter: "Men, Pirates" },
      { min: 61, max: 80, encounter: "Men, Rhennee" },
      { min: 81, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "quag_lake": "nyr_dyv",
    "whyestil_lake": "nyr_dyv",
    
    "salt_water_seas": [
      { min: 1, max: 5, encounter: "Men, Buccaneers" },
      { min: 6, max: 25, encounter: "Men, Merchants" },
      { min: 26, max: 30, encounter: "Men, Patrol" },
      { min: 31, max: 35, encounter: "Men, Pirates" },
      { min: 36, max: 40, encounter: "Men, Raiders (Galley-type craft)" },
      { min: 41, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],

    // Wastelands
    "bright_desert": [
      { min: 1, max: 15, encounter: "Men, Dervishes" },
      { min: 16, max: 40, encounter: "Men, Nomads" },
      { min: 41, max: 45, encounter: "Men, Tribesmen (hills)" },
      { min: 46, max: 50, encounter: "Pernicons" },
      { min: 51, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "dry_steppes": [
      { min: 1, max: 7, encounter: "Herd Animals" },
      { min: 8, max: 10, encounter: "Horses" },
      { min: 11, max: 15, encounter: "Humanoids" },
      { min: 16, max: 19, encounter: "Men, Dervishes" },
      { min: 20, max: 30, encounter: "Men, Nomads" },
      { min: 31, max: 35, encounter: "Men, Tribesmen" },
      { min: 36, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "land_of_black_ice": [
      { min: 1, max: 15, encounter: "Bugbears, Blue (same as normal bugbears)" },
      { min: 16, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "rift_canyon": [
      { min: 1, max: 10, encounter: "Humanoids" },
      { min: 11, max: 25, encounter: "Men, Bandits" },
      { min: 26, max: 30, encounter: "Men, Brigands" },
      { min: 31, max: 32, encounter: "Men, Characters" },
      { min: 33, max: 37, encounter: "Men, Raiders (as knights)" },
      { min: 38, max: 40, encounter: "Ogres" },
      { min: 41, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "sea_of_dust": [
      { min: 1, max: 3, encounter: "Beetle, Boring" },
      { min: 4, max: 5, encounter: "Bulettes (half-strength, sand variety)" },
      { min: 6, max: 12, encounter: "Centipedes, Giant (plus 1-6)" },
      { min: 13, max: 17, encounter: "Dune Stalkers (1-6)" },
      { min: 18, max: 25, encounter: "Firenewts (near Hellfurnaces only)" },
      { min: 26, max: 30, encounter: "Firetoads (near Hellfurnaces only)" },
      { min: 31, max: 39, encounter: "Jermlaine" },
      { min: 40, max: 43, encounter: "Meenlocks" },
      { min: 44, max: 45, encounter: "Men, Characters (extreme west and south only)" },
      { min: 46, max: 47, encounter: "Men, Nomads (extreme west and south only)" },
      { min: 48, max: 53, encounter: "Mites" },
      { min: 54, max: 61, encounter: "Osquips" },
      { min: 62, max: 70, encounter: "Pernicon" },
      { min: 71, max: 77, encounter: "Rats, Giant" },
      { min: 78, max: 80, encounter: "Scorpions, Giant" },
      { min: 81, max: 82, encounter: "Snake, Giant, Amphisbaena" },
      { min: 83, max: 85, encounter: "Snakes, Giant, Poisonous" },
      { min: 86, max: 88, encounter: "Snakes, Giant, Spitting" },
      { min: 89, max: 93, encounter: "Snyads" },
      { min: 94, max: 96, encounter: "Spiders, Huge" },
      { min: 97, max: 99, encounter: "Thoqqua (2-4 foot diameter, sand/ash eater)" },
      { min: 0, max: 0, encounter: "Roll again or choose any creature", useStandard: true }
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
    "lone_heath": [
      { min: 1, max: 30, encounter: "Demi-humans" },
      { min: 31, max: 55, encounter: "Men, Bandits (good alignment)" },
      { min: 56, max: 65, encounter: "Men, Patrol, Light" },
      { min: 66, max: 95, encounter: "Men, Tribesmen (good marshmen)" },
      { min: 96, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    "vast_swamp": [
      { min: 1, max: 10, encounter: "Bullywugs" },
      { min: 11, max: 15, encounter: "Humanoids" },
      { min: 16, max: 20, encounter: "Lizardmen" },
      { min: 21, max: 25, encounter: "Men, Bandits" },
      { min: 26, max: 27, encounter: "Men, Patrol, Light (near edges only)" },
      { min: 28, max: 36, encounter: "Men, Tribesmen (marshmen)" },
      { min: 37, max: 40, encounter: "Trolls" },
      { min: 41, max: 0, encounter: "Use Standard Encounter Tables", useStandard: true }
    ],
    
    // Add a helper function to resolve aliases
    resolveEncounterTable: function(area) {
      let table = this[area];
      // If the table is a string, it's an alias to another table
      if (typeof table === 'string') {
        return this[table];
      }
      return table;
    }
  };
  
  // aliases after the object is created
  GREYHAWK_GEOGRAPHICAL_TABLES["lortmil"] = "lortmil_mountains";
  GREYHAWK_GEOGRAPHICAL_TABLES["crystalmists"] = "crystalmist_mountains";
  // add any other direct aliases here
  
  // Export default for easier importing
  export default GREYHAWK_GEOGRAPHICAL_TABLES; 