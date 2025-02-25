# Greyhawk Encounters Module for Foundry VTT v12

This module implements the Greyhawk regional encounter tables and the random monster encounter tables from AD&D 1st Edition, providing a comprehensive tool for Dungeon Masters running campaigns in the World of Greyhawk setting.

## Features

- **Regional Encounter Tables**: Roll on region-specific encounter tables for all political divisions and geographical regions of Greyhawk
- **Monster Encounter Tables**: Implement the classic dungeon random monster tables from the DMG Appendix C
- **Terrain-Based Encounters**: Generate encounters based on terrain type, population density, and time of day
- **Underwater & Airborne Encounters**: Special encounter tables for underwater and airborne adventures
- **Astral & Ethereal Plane Encounters**: Support for planar travel encounters
- **Simple Calendar Integration**: Optional integration with the Simple Calendar module to incorporate time of day and seasonal effects
- **Lost Checks**: Determine if a party gets lost based on terrain type, following AD&D wilderness adventure rules
- **Patrol Encounters**: Generate detailed patrol encounters in inhabited areas

## Installation

### Method 1: Install from Foundry VTT Package Manager

1. In your Foundry VTT setup screen, go to "Add-on Modules"
2. Click "Install Module"
3. Search for "Greyhawk Encounters" and click "Install"

### Method 2: Manual Installation

1. Download the [latest release](https://github.com/yourusername/greyhawk-encounters/releases/latest/download/module.zip)
2. Extract the zip file to your Foundry `Data/modules/` folder
3. Restart Foundry VTT
4. Enable the module in your world's module settings

## Usage

Once the module is installed and enabled:

1. A new "Greyhawk" button will appear in the chat controls
2. Click this button to open the Encounter Roller dialog
3. Select the type of encounter you want to generate
4. Customize the parameters as needed
5. Click "Roll Encounter" to generate an encounter
6. The result will be displayed in the chat

### Simple Calendar Integration

This module can integrate with the [Simple Calendar](https://foundryvtt.com/packages/foundryvtt-simple-calendar/) module to make encounters time-aware:

1. Install and enable both modules
2. Enable the "Use Simple Calendar" setting in the Encounter Roller dialog
3. The current date, time, and season from Simple Calendar will be used when generating encounters

When integrated:
- Time of day will be determined automatically
- Seasonal effects will modify encounter chances
- Nocturnal creatures appear more frequently at night
- Encounter results will include calendar information

## Module Organization

```
greyhawk-encounters/
├── greyhawk-encounters.js    # Main module code
├── module.json              # Module definition
├── README.md                # This file
├── styles/
│   └── greyhawk-encounters.css  # Styling
└── templates/
    └── encounter-roller.hbs  # UI template
```

## License

This module is licensed under the MIT License. The Greyhawk setting content and AD&D random encounter tables are the property of Wizards of the Coast.

## Acknowledgements

- Based on the encounter tables from the AD&D 1st Edition Dungeon Master's Guide
- Regional tables based on the World of Greyhawk setting
- Thanks to the Simple Calendar module developers for their API

## Support

If you encounter any issues or have suggestions, please file an issue on the [GitHub repository](https://github.com/yourusername/greyhawk-encounters/issues).
