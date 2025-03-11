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
      climateTypes: [
        { id: 'arctic', label: 'Arctic' },
        { id: 'subarctic', label: 'Subarctic' },
        { id: 'temperate', label: 'Temperate' },
        { id: 'subtropical', label: 'Subtropical' },
        { id: 'tropical', label: 'Tropical' }
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
      patrolTypes: [
        { id: "elves_knights", label: "Elves, Knights" },
        { id: "elven_patrol", label: "Elven Patrol" },
        // other patrol types...
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
    
    // Toggle between DMG and WoG systems
    html.find('select[name="encounterSystem"]').change(ev => {
      const system = ev.currentTarget.value;
      html.find('.dmg-system-container').toggle(system === 'dmg');
      html.find('.wog-system-container').toggle(system === 'wog');
      
      // Update appropriate encounter type options
      if (system === 'dmg') {
        this._updateDmgOptions(html.find('select[name="dmgEncounterType"]').val(), html);
      } else {
        this._updateWogOptions(html.find('select[name="wogEncounterType"]').val(), html);
      }
    });
    
    // DMG encounter type
    html.find('select[name="dmgEncounterType"]').change(ev => {
      const type = ev.currentTarget.value;
      this._updateDmgOptions(type, html);
    });
    
    // WoG encounter type
    html.find('select[name="wogEncounterType"]').change(ev => {
      const type = ev.currentTarget.value;
      this._updateWogOptions(type, html);
    });
    
    // Region type change
    html.find('select[name="regionType"]').change(ev => {
      const type = ev.currentTarget.value;
      this._updateRegionList(type, html);
    });
    
    // Calendar toggle
    html.find('input[name="useSimpleCalendar"]').change(ev => {
      const checked = ev.currentTarget.checked;
      game.settings.set('greyhawk-encounters', 'useSimpleCalendar', checked);
      html.find('.simple-calendar-info').toggle(checked);
      html.find('.time-of-day-group').toggle(!checked);
    });
    
    // Roll encounter button
    html.find('.roll-encounter-button').click(ev => {
      this._rollEncounter(html);
    });
    
    // Check if lost button
    html.find('.check-lost-button').click(ev => {
      this._checkLost(html);
    });
    
    // Initialize with default DMG system
    html.find('.dmg-system-container').show();
    this._updateDmgOptions('outdoor', html);
  }

  _updateDmgOptions(encounterType, html) {
    // Hide all DMG options first
    html.find('.dmg-dungeon-options').hide();
    html.find('.dmg-underwater-options').hide();
    html.find('.dmg-planar-options').hide();
    html.find('.dmg-outdoor-options').hide();
    html.find('.dmg-waterborne-options').hide();
    html.find('.dmg-airborne-options').hide();
    html.find('.dmg-city-options').hide();
    
    // Show the appropriate options based on encounter type
    switch (encounterType) {
        case 'outdoor':
          html.find('.dmg-outdoor-options').show();
          break;
        case 'dungeon':
          html.find('.dmg-dungeon-options').show();
          break;
        case 'underwater':
          html.find('.dmg-underwater-options').show();
          break;
        case 'waterborne':
          html.find('.dmg-waterborne-options').show();
          break;
        case 'city':
        case 'town':
          html.find('.dmg-city-options').show();
          break;
        case 'airborne':
          html.find('.dmg-airborne-options').show();
          break;
        case 'astral':
        case 'ethereal':
          html.find('.dmg-planar-options').show();
          break;
      }
    }
  
  _updateWogOptions(encounterType, html) {
    // Hide all WoG options first
    html.find('.wog-regional-options').hide();
    html.find('.wog-patrol-options').hide();
    
    // Show the appropriate options based on encounter type
    switch (encounterType) {
      case 'regional':
        html.find('.wog-regional-options').show();
        this._updateRegionList('political', html);
        break;
      case 'patrol':
        html.find('.wog-patrol-options').show();
        break;
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
            // Remove the patrol case
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
          const system = html.find('select[name="encounterSystem"]').val();
          
          if (system === 'dmg') {
            // Handle DMG encounter system
            const encounterType = html.find('select[name="dmgEncounterType"]').val();
            let options = { encounterType };
            
            switch (encounterType) {
              case 'outdoor': {
                const terrain = html.find('select[name="terrain"]').val() || 'plain';
                const population = html.find('select[name="population"]').val() || 'moderate';
                const climate = html.find('select[name="climate"]').val() || 'temperate';
                let timeOfDay = 'noon';
                
                if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
                  const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
                  if (timeInfo && timeInfo.timeOfDay) timeOfDay = timeInfo.timeOfDay;
                } else {
                  timeOfDay = html.find('select[name="timeOfDay"]').val() || 'noon';
                }
                
                options = { ...options, terrain, population, timeOfDay };
                break;
              }
              case 'dungeon': {
                const dungeonLevel = parseInt(html.find('input[name="dungeonLevel"]').val()) || 1;
                options = { ...options, dungeonLevel };
                break;
              }
              case 'underwater': {
                const waterType = html.find('select[name="waterType"]').val() || 'fresh';
                const depth = html.find('select[name="depth"]').val() || 'shallow';
                options = { ...options, waterType, depth };
                break;
              }
              case 'waterborne': {
                const waterType = html.find('select[name="waterType"]').val() || 'coastal';
                options = { ...options, waterType };
                break;
              }
              case 'city':
              case 'town': {
                const citySize = html.find('select[name="citySize"]').val() || 'town';
                const timeOfDay = html.find('select[name="cityTimeOfDay"]').val() || 'day';
                options = { ...options, citySize, timeOfDay };
                break;
              }
              case 'airborne': {
                const climate = html.find('select[name="airborneClimate"]').val() || 'temperate';
                options = { ...options, climate };
                break;
              }
            }
            
            // Roll and display DMG encounter
            let result;
            if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
              result = await GreyhawkEncounters.rollTimeAwareEncounter(options);
            } else {
              result = await GreyhawkEncounters.rollEncounter(options);
            }
            
            if (result) {
              GreyhawkEncounters._displayEncounterResult(result, options);
            }
            
          } else {
            // Handle WoG encounter system
            const encounterType = html.find('select[name="wogEncounterType"]').val();
            
            if (encounterType === 'regional') {
              const regionType = html.find('select[name="regionType"]').val();
              const region = html.find('select[name="region"]').val();
              
              const result = await GreyhawkEncounters._rollRegionalEncounter({
                specificRegion: region
              });
              
              GreyhawkEncounters._displayEncounterResult(result, {
                encounterType: 'regional',
                specificRegion: region
              });
              
            } else if (encounterType === 'patrol') {
              const patrolType = html.find('select[name="patrolType"]').val() || 'patrol_heavy';
              
              const result = await GreyhawkEncounters.rollPatrolEncounter({
                patrolType: patrolType
              });
              
              GreyhawkEncounters._displayEncounterResult(result, {
                encounterType: 'patrol',
                patrolType: patrolType
              });
            }
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
