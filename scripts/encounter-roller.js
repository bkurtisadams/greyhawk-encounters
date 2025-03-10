// This file will contain the GreyhawkEncounterRoller application
// This handles the UI for rolling encounters

import { GreyhawkEncounters } from './greyhawk-encounters.js';

export class GreyhawkEncounterRoller extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: 'greyhawk-encounter-roller',
      template: `modules/greyhawk-encounters/templates/encounter-roller.hbs`,
      title: 'Greyhawk Encounter Roller',
      width: 400,
      height: 'auto',
      resizable: true,
      popOut: true
    });
  }
  
  getData() {
    const useSimpleCalendar = game.settings.get('greyhawk-encounters', 'useSimpleCalendar');
    let timeInfo = null;
    try {
      if (useSimpleCalendar) timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
    } catch (error) {
      console.error("Error getting Simple Calendar time info:", error);
    }
    return {
      useSimpleCalendar,
      timeInfo,
      encounterTypes: [
        // Greyhawk-specific
        { id: 'regional_greyhawk', label: 'Greyhawk Regional (World of Greyhawk)' },
        // DMG Standard
        { id: 'outdoor', label: 'Outdoor (DMG Standard)' },
        { id: 'dungeon', label: 'Dungeon (DMG Standard)' },
        { id: 'underwater', label: 'Underwater (DMG Standard)' },
        { id: 'airborne', label: 'Airborne (DMG Standard)' },
        { id: 'astral', label: 'Astral Plane (DMG Standard)' },
        { id: 'ethereal', label: 'Ethereal Plane (DMG Standard)' }
      ],
      regionTypes: [
        { 
          id: 'political', 
          label: 'Political Regions',
          regions: [
            { id: 'bone_march', label: 'Bone March' },
            { id: 'pomarj', label: 'Pomarj' },
            { id: 'celene', label: 'Celene' },
            { id: 'highfolk', label: 'Highfolk' },
            { id: 'dyvers', label: 'Dyvers' },
            { id: 'greyhawk', label: 'Greyhawk' },
            { id: 'verbobonc', label: 'Verbobonc' },
            { id: 'ekbir', label: 'Ekbir' },
            { id: 'tusmit', label: 'Tusmit' },
            { id: 'zeif', label: 'Zeif' }
          ]
        },
        {
          id: 'forest',
          label: 'Forests',
          regions: [
            { id: 'adri_forest', label: 'Adri Forest' },
            { id: 'grandwood_forest', label: 'Grandwood Forest' },
            { id: 'amedio_jungle', label: 'Amedio Jungle' },
            { id: 'dreadwood', label: 'Dreadwood' },
            { id: 'vesve_forest', label: 'Vesve Forest' }
          ]
        },
        {
          id: 'mountain',
          label: 'Mountains',
          regions: [
            { id: 'barrier_peaks', label: 'Barrier Peaks' },
            { id: 'crystalmist_mountains', label: 'Crystalmist Mountains' },
            { id: 'yatil_mountains', label: 'Yatil Mountains' }
          ]
        },
        {
          id: 'hills',
          label: 'Hills',
          regions: [
            { id: 'abbor_alz', label: 'Abbor-Alz' },
            { id: 'cairn_hills', label: 'Cairn Hills' }
          ]
        }
      ],
      terrainTypes: [
        { id: 'plain', label: 'Plain' },
        { id: 'scrub', label: 'Scrub' },
        { id: 'forest', label: 'Forest' },
        { id: 'desert', label: 'Desert' },
        { id: 'hills', label: 'Hills' },
        { id: 'mountains', label: 'Mountains' },
        { id: 'marsh', label: 'Marsh' }
      ],
      populationTypes: [
        { id: 'dense', label: 'Dense' },
        { id: 'moderate', label: 'Moderate' },
        { id: 'uninhabited', label: 'Uninhabited/Wilderness' }
      ],
      timesOfDay: [
        { id: 'morning', label: 'Morning' },
        { id: 'noon', label: 'Noon' },
        { id: 'evening', label: 'Evening' },
        { id: 'night', label: 'Night' },
        { id: 'midnight', label: 'Midnight' },
        { id: 'predawn', label: 'Pre-dawn' }
      ]
    };
  }
  
  activateListeners(html) {
    super.activateListeners(html);
    const useSimpleCalendar = game.settings.get('greyhawk-encounters', 'useSimpleCalendar');
    html.find('.simple-calendar-info').toggle(useSimpleCalendar);
    
    // Event listener for encounter type dropdown
    html.find('select[name="encounterType"]').change(ev => {
      const selectedType = ev.currentTarget.value;
      this._updateFormForEncounterType(selectedType, html);
    });
    
    // Event listener for region type dropdown
    html.find('select[name="regionType"]').change(ev => {
      const selectedType = ev.currentTarget.value;
      this._updateRegionList(selectedType, html);
    });
    
    // Toggle Simple Calendar usage
    html.find('input[name="useSimpleCalendar"]').change(ev => {
      const checked = ev.currentTarget.checked;
      game.settings.set('greyhawk-encounters', 'useSimpleCalendar', checked);
      html.find('.simple-calendar-info').toggle(checked);
      html.find('.time-of-day-group').toggle(!checked);
    });
    
    // Roll encounter button
    // Roll encounter button
    html.find('.roll-encounter-button').click(ev => {
        this._rollEncounter(html);
      });
      
      // Check if lost button
      html.find('.check-lost-button').click(ev => {
        this._checkLost(html);
      });
      
      // Initialize the form with default encounter type
      this._updateFormForEncounterType('outdoor', html);
      
      // Show region options if regional encounter is selected
      const currentEncounterType = html.find('select[name="encounterType"]').val();
      if (currentEncounterType === 'regional') {
        html.find('.region-options').show();
        console.log("Showing region options");
        
        // Initialize the region dropdown with the first regionType
        this._updateRegionList('political', html);
      }
    }
    
    _updateFormForEncounterType(encounterType, html) {
      console.log(`Updating form for encounter type: ${encounterType}`);
      
      // Hide all option sections first
      html.find('.region-options').hide();
      html.find('.outdoor-options').hide();
      html.find('.dungeon-options').hide();
      html.find('.underwater-options').hide();
      html.find('.planar-options').hide();
      
      // Then show only the relevant section
      switch (encounterType) {
        case 'regional_greyhawk':
            html.find('.region-options').show();
            break;
          case 'outdoor':
            html.find('.outdoor-options').show();
            if (!game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
              html.find('.time-of-day-group').show();
            }
            break;
        case 'dungeon':
          html.find('.dungeon-options').show();
          break;
        case 'underwater':
          html.find('.underwater-options').show();
          break;
        case 'astral':
        case 'ethereal':
          html.find('.planar-options').show();
          break;
      }
      
      // For debugging
      console.log("Region options visible:", html.find('.region-options').is(':visible'));
    }
    
    _updateRegionList(regionType, html) {
      console.log(`Updating region list for type: ${regionType}`);
      
      // Get the regions select dropdown
      const regionsSelect = html.find('select[name="region"]');
      regionsSelect.empty();
      
      // Find the region type in our data
      const regionTypeData = this.getData().regionTypes.find(r => r.id === regionType);
      
      if (regionTypeData && regionTypeData.regions) {
        // Add options for each region in this type
        for (const region of regionTypeData.regions) {
          regionsSelect.append(`<option value="${region.id}">${region.label}</option>`);
        }
        console.log(`Added ${regionTypeData.regions.length} regions to dropdown`);
      } else {
        console.error(`Region type ${regionType} not found in data`);
      }
    }
    
    async _rollEncounter(html) {
      try {
        const encounterType = html.find('select[name="encounterType"]').val() || 'outdoor';
        let options = { encounterType: encounterType };
        
        switch (encounterType) {
            case 'regional_greyhawk': {
                const specificRegion = html.find('select[name="region"]').val() || 'greyhawk';
                options = { ...options, specificRegion: specificRegion };
                
                // Call the Greyhawk-specific regional encounter method
                const result = await GreyhawkEncounters._rollRegionalEncounter(options);
                
                // Display result
                GreyhawkEncounters._displayEncounterResult(result, options);
                break;
              }
          case 'outdoor': {
            const terrain = html.find('select[name="terrain"]').val() || 'plain';
            const population = html.find('select[name="population"]').val() || 'moderate';
            let timeOfDay = 'noon';
            
            if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
              const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
              if (timeInfo && timeInfo.timeOfDay) timeOfDay = timeInfo.timeOfDay;
            } else {
              timeOfDay = html.find('select[name="timeOfDay"]').val() || 'noon';
            }
            
            options = { ...options, terrain: terrain, population: population, timeOfDay: timeOfDay };
            break;
          }
          case 'dungeon': {
            const dungeonLevel = parseInt(html.find('input[name="dungeonLevel"]').val()) || 1;
            options = { ...options, dungeonLevel: dungeonLevel };
            break;
          }
          case 'underwater': {
            const waterType = html.find('select[name="waterType"]').val() || 'fresh';
            const depth = html.find('select[name="depth"]').val() || 'shallow';
            options = { ...options, waterType: waterType, depth: depth };
            break;
          }
        }
        
        console.log("Rolling encounter with options:", options);
        let result = null;
        
        if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
          try {
            result = await GreyhawkEncounters.rollTimeAwareEncounter(options);
          } catch (error) {
            console.error("Error rolling time-aware encounter:", error);
            result = GreyhawkEncounters._createMockResult(options);
          }
        } else {
          try {
            result = await GreyhawkEncounters.rollEncounter(options);
          } catch (error) {
            console.error("Error rolling encounter:", error);
            result = GreyhawkEncounters._createMockResult(options);
          }
        }
        
        if (result) {
          GreyhawkEncounters._displayEncounterResult(result, options);
        } else {
          ui.notifications.error("Failed to generate encounter result.");
        }
      } catch (error) {
        console.error("Error in _rollEncounter:", error);
        ui.notifications.error("Error generating encounter.");
      }
    }
    
    async _checkLost(html) {
      const terrain = html.find('select[name="terrain"]').val();
      if (!terrain) {
        ui.notifications.warn("Please select a terrain type first");
        return;
      }
      
      const result = await GreyhawkEncounters.checkIfLost(terrain);
      const chatData = {
        user: game.user.id,
        speaker: ChatMessage.getSpeaker(),
        content: `
          <div>
            <h3>Lost Check</h3>
            <p>Terrain: ${terrain}</p>
            <p>Result: ${result.result}</p>
            ${result.result === "Lost" ? `<p>Direction: ${result.direction}</p>` : ''}
          </div>
        `
      };
      
      ChatMessage.create(chatData);
    }
}
