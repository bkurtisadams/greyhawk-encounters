// Main module entry point
// Import only the required components
import { GreyhawkEncounters } from './greyhawk-encounters.js';
import { GreyhawkEncounterRoller } from './encounter-roller.js';

// Initialize module
Hooks.once('init', async function() {
  console.log('Greyhawk Encounters | Initializing module');
  
  // Register core settings
  game.settings.register('greyhawk-encounters', 'enableAutoRegion', {
    name: 'Enable Automatic Region Detection',
    hint: 'Automatically detect region based on character position on world map',
    scope: 'world',
    config: true,
    type: Boolean,
    default: false
  });
  
  game.settings.register('greyhawk-encounters', 'enableLostCheck', {
    name: 'Enable Automatic Lost Checks',
    hint: 'Automatically check if the party gets lost when traveling',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true
  });
  
  game.settings.register('greyhawk-encounters', 'useSimpleCalendar', {
    name: 'Use Simple Calendar',
    hint: 'Integrate with Simple Calendar to determine time of day and seasonal effects',
    scope: 'world',
    config: true,
    type: Boolean,
    default: true
  });

  // In your module.js setup code
  game.settings.register('greyhawk-encounters', 'useMonsterManualStats', {
    name: "Use Monster Manual Stats for Human Encounters",
    hint: "When enabled, human encounters will use more detailed Monster Manual statistics with proper leaders and special members",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });

  // Add CSS styles
  const styles = `
    .region-options {
      margin-top: 10px;
      margin-bottom: 10px;
      display: block !important;
    }
  `;
  
  // Add style element to document
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
  
  // Load templates
  //loadTemplates(['templates/encounter-roller.hbs']);
  loadTemplates(['modules/greyhawk-encounters/templates/encounter-roller.hbs']);
});

Hooks.once('ready', async function() {
  console.log('Greyhawk Encounters | Module ready');
  
  // Check if Simple Calendar is installed
  if (game.modules.get('foundryvtt-simple-calendar')?.active) {
    console.log('Greyhawk Encounters | Simple Calendar detected');
  } else {
    console.log('Greyhawk Encounters | Simple Calendar not detected');
  }

  // Create a global namespace for the module
  game.greyhawk = {
    EncounterRoller: GreyhawkEncounterRoller,
    Encounters: GreyhawkEncounters
  };

  // Expose classes globally for modules and macros
  globalThis.GreyhawkEncounters = GreyhawkEncounters;
  globalThis.GreyhawkEncounterRoller = GreyhawkEncounterRoller;
  
  // Helper function to open the dialog
  const openRollerDialog = function() {
    const roller = new GreyhawkEncounterRoller();
    roller.render(true);
  };
  
  // Make helper function globally available
  globalThis.openGreyhawkRoller = openRollerDialog;
  
  // Additional settings registered on ready
  game.settings.register('greyhawk-encounters', 'enableAutoCheck', {
    name: 'Enable Automatic Encounter Checks',
    hint: 'Automatically check for encounters when the calendar day changes',
    scope: 'world',
    config: true,
    type: Boolean,
    default: false
  });
  
  // Hook into Simple Calendar's date change events
  Hooks.on('simple-calendar:updateDate', (data) => {
    if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
      console.log('Greyhawk Encounters | Calendar date changed:', data);
      
      const autoRollSetting = game.settings.get('greyhawk-encounters', 'enableAutoCheck');
      if (autoRollSetting) {
        if (data.dateChanged && !data.timeChanged) {
          console.log('Greyhawk Encounters | Auto-rolling encounter check for new day');
          const terrain = game.settings.get('greyhawk-encounters', 'defaultTerrain') || 'plain';
          const population = game.settings.get('greyhawk-encounters', 'defaultPopulation') || 'uninhabited';
          const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
          GreyhawkEncounters.rollOutdoorEncounter(terrain, population, timeInfo?.timeOfDay, {
            season: timeInfo?.season,
            autoRolled: true
          }).then(result => {
            if (result && (result.result === "Encounter" || result.result === "Patrol Encounter")) {
              const chatData = {
                user: game.user.id,
                speaker: ChatMessage.getSpeaker({alias: "Greyhawk Encounters"}),
                content: `
                  <div>
                    <h3>Automatic Encounter Check</h3>
                    <p>Terrain: ${terrain}</p>
                    <p>Population: ${population}</p>
                    <p>Time of Day: ${timeInfo?.timeOfDay || 'Unknown'}</p>
                    <p>Encounter: ${result.encounter}</p>
                    <p>Number: ${result.number || '1'}</p>
                  </div>
                `
              };
              ChatMessage.create(chatData);
            }
          }).catch(err => {
            console.error("Error in auto encounter roll:", err);
          });
        }
      }
    }
  });
});