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
          "id": "political",
          "label": "Political Regions",
          "regions": [
            "Bandit Kingdoms",
            "Horned Society",
            "Iuz",
            "Rovers of the Barrens",
            "Bone March",
            "The Pomarj",
            "Furyondy",
            "Veluna",
            "Shield Lands",
            "Nyrond",
            "Keoland",
            "Bissel",
            "Gran March",
            "Geoff",
            "Sterich",
            "Yeomanry",
            "Great Kingdom",
            "North Province",
            "South Province",
            "See of Medegia",
            "County of Urnst",
            "Duchy of Urnst",
            "Principality of Ulek",
            "County of Ulek",
            "Duchy of Ulek",
            "Idee",
            "Onnwal",
            "Irongate",
            "Perrenland",
            "Ket",
            "Tenh",
            "The Pale",
            "Ratik",
            "Scarlet Brotherhood",
            "Sunndi",
            "Sea Princes",
            "Wild Coast",
            "Celene",
            "Highfolk"
          ]
        },
        {
          "id": "forest",
          "label": "Forests",
          "regions": [
            "Celadon",
            "Fellreev",
            "Gamboge",
            "Vesve",
            "Dreadwood",
            "Axewood",
            "Adri",
            "Grandwood"
          ]
        },
        {
          "id": "mountain",
          "label": "Mountains",
          "regions": [
            "Lortmil",
            "Crystalmists",
            "Jotens",
            "Yatils",
            "Barrier Peaks",
            "Hellfurnaces",
            "Sulhaut",
            "Rakers",
            "Griff Mountains",
            "Corusks",
            "Clatspurs",
            "Ulsprue"
          ]
        },
        {
          "id": "hills",
          "label": "Hills",
          "regions": [
            "Abbor-Alz",
            "Cairn Hills",
            "Hestmark Highlands",
            "Hollow Highlands"
          ]
        },
        {
          "id": "desert",
          "label": "Deserts",
          "regions": [
            "Bright Desert",
            "Sea of Dust"
          ]
        },
        {
          "id": "jungle",
          "label": "Jungles",
          "regions": [
            "Amedio Jungle",
            "Hepmonaland"
          ]
        },
        {
          "id": "swamp",
          "label": "Marshes & Swamps",
          "regions": [
            "Vast Swamp",
            "Hool Marshes",
            "Gnatmarsh"
          ]
        },
        {
          "id": "plains",
          "label": "Plains & Steppes",
          "regions": [
            "Dry Steppes",
            "Plains of the Paynims",
            "Ull",
            "Tiger Nomads",
            "Wolf Nomads",
            "Stonefist"
          ]
        },
        {
          "id": "waterway",
          "label": "Waterways",
          "regions": [
            "Nyr Dyv",
            "Lake Quag",
            "Lake Whyestil",
            "Selintan River",
            "Velverdyva River",
            "Nesser River",
            "Veng River",
            "Azure Sea",
            "Relmor Bay"
          ]
        },
        {
          "id": "arctic",
          "label": "Arctic/Subarctic",
          "regions": [
            "Blackmoor",
            "Frost Barbarians",
            "Ice Barbarians",
            "Snow Barbarians"
          ]
        }
      ],
      patrolTypes: [
        { id: "elves_knights", label: "Elves, Knights" },
        { id: "elven_patrol", label: "Elven Patrol" },
        // other patrol types...
      ],
      /* terrainTypes: [
        { id: 'plain', label: 'Plain' },
        { id: 'scrub', label: 'Scrub' },
        { id: 'forest', label: 'Forest' },
        { id: 'desert', label: 'Desert' },
        { id: 'hills', label: 'Hills' },
        { id: 'mountains', label: 'Mountains' },
        { id: 'marsh', label: 'Marsh' }
      ], */
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

  _updateTimingWarning(html) {
    const terrain = html.find('select[name="terrain"]').val();
    const timeOfDay = html.find('select[name="timeOfDay"]').val();
    const largeTravelingParty = html.find('input[name="largeTravelingParty"]').is(':checked');
    const useSimpleCalendar = html.find('input[name="useSimpleCalendar"]').is(':checked');
    
    // Don't show warning if using Simple Calendar (time is automatic)
    if (useSimpleCalendar) {
      html.find('.timing-warning').hide();
      return;
    }
    
    const shouldCheck = GreyhawkEncounters._shouldRollEncounterForTime(timeOfDay, terrain, largeTravelingParty ? 101 : 0);
    const warningDiv = html.find('.timing-warning');
    
    if (!shouldCheck && !largeTravelingParty) {
      warningDiv.html(`
        <div class="warning-box">
          <i class="fas fa-exclamation-triangle"></i>
          <strong>DMG Rule:</strong> No encounter checks at ${timeOfDay} in ${terrain} terrain 
          unless party exceeds 100 creatures
        </div>
      `).show();
    } else {
      warningDiv.hide();
    }
  }

  activateListeners(html) {
    super.activateListeners(html);
  
    // Load saved values when the form opens
    this._loadSavedFormValues(html);
    
    // Save form values when any input changes
    html.find('select, input').change(ev => {
      this._saveCurrentFormValues();
    });

    // Timing warning updates
    html.find('select[name="terrain"], select[name="timeOfDay"], input[name="largeTravelingParty"], input[name="useSimpleCalendar"]').change(ev => {
      this._updateTimingWarning(html);
      this._saveCurrentFormValues(); // Save the new checkbox state
    });
    
    // Initial timing warning check
    this._updateTimingWarning(html);
  
    // System selection (DMG vs WoG)
    html.find('select[name="encounterSystem"]').change(ev => {
      const system = ev.currentTarget.value;
      this._resetEncounterFormSections(html);
    
      if (system === 'dmg') {
        html.find('.dmg-system-container').show();
        const dmgType = html.find('select[name="dmgEncounterType"]').val() || 'outdoor';
        this._updateDmgOptions(dmgType, html);
      } else {
        html.find('.wog-system-container').show();
        const wogType = html.find('select[name="wogEncounterType"]').val() || 'regional';
        this._updateWogOptions(wogType, html);
    
        if (wogType === 'regional') {
          const regionType = html.find('select[name="regionType"]').val() || 'political';
          this._updateRegionList(regionType, html);
          html.find('.wog-regional-options').show(); // ⬅️ Force show
        }
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
    //html.find('.simple-calendar-info').toggle(checked);
    // Do not hide .time-of-day-group – always leave it visible
  });
    
    // Roll encounter button
    html.find('.roll-encounter-button').click(ev => {
      this._rollEncounter(html);
    });
    
    // Check if lost button
    html.find('.check-lost-button').click(ev => {
      this._checkLost(html);
    });
    
    // Initialize with default system based on saved settings or DMG by default
    const savedSettings = game.settings.get('greyhawk-encounters', 'lastUsedSettings') || {};
    const system = savedSettings.encounterSystem || 'dmg';
    
    // Show the appropriate container based on selected system
    html.find('.dmg-system-container').toggle(system === 'dmg');
    html.find('.wog-system-container').toggle(system === 'wog');
    
    // Initialize the appropriate options
    if (system === 'dmg') {
      const encounterType = savedSettings.dmgEncounterType || 'outdoor';
      this._updateDmgOptions(encounterType, html);
    } else {
      const encounterType = savedSettings.wogEncounterType || 'regional';
      this._updateWogOptions(encounterType, html);
      
      if (encounterType === 'regional') {
        const regionType = savedSettings.regionType || 'political';
        this._updateRegionList(regionType, html);
      }
    }
  }

  // Save current form values when they change
  _saveCurrentFormValues() {
    const html = this.element;
    const formData = {};
    
    // Collect all form values
    html.find('select, input').each((i, el) => {
      if (el.name) {
        formData[el.name] = el.value;
      }
    });
    
    // Save to game settings
    game.settings.set('greyhawk-encounters', 'lastUsedSettings', formData);
  }

  // Load saved form values
  _loadSavedFormValues(html) {
    const savedSettings = game.settings.get('greyhawk-encounters', 'lastUsedSettings');
    
    if (!savedSettings || Object.keys(savedSettings).length === 0) {
      return; // No saved settings
    }
    
    // Apply each saved value to the form
    for (const [key, value] of Object.entries(savedSettings)) {
      const el = html.find(`[name="${key}"]`);
      if (el.length) {
        el.val(value);
      }
    }
    
    // Trigger change events for key dropdowns to update form visibility
    this._resetEncounterFormSections(html);
    html.find('select[name="encounterSystem"]').trigger('change');
    
    // Get the currently shown system and trigger its encounter type change
    const system = savedSettings.encounterSystem || 'dmg';
    if (system === 'dmg') {
      html.find('select[name="dmgEncounterType"]').trigger('change');
    } else {
      html.find('select[name="wogEncounterType"]').trigger('change');
    }
    
    // For WoG regional encounters, update the region list
    if (system === 'wog' && savedSettings.wogEncounterType === 'regional') {
      this._updateRegionList(savedSettings.regionType || 'political', html);
    }

    if (savedSettings.region) {
      html.find('select[name="region"]').val(savedSettings.region);
    }
    
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
      case 'regional': {
        html.find('.wog-regional-options').show();
        const saved = game.settings.get('greyhawk-encounters', 'lastUsedSettings');
        const regionType = saved?.regionType || html.find('select[name="regionType"]').val() || 'political';
        this._updateRegionList(regionType, html);
        break;
      }
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
            html.find('.time-of-day-group').show(); // ✅ Always show this
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
          
          // Important: Store current selection before clearing dropdown
          const currentValue = regionsSelect.val();
          
          // Clear existing options
          regionsSelect.empty();
          
          // Find the region type in our data
          const regionTypeData = this.getData().regionTypes.find(r => r.id === regionType);
          
          if (regionTypeData && regionTypeData.regions) {
            // Add options for each region in this type
            for (const region of regionTypeData.regions) {
              // Check if region is an object with id/label or just a string
              if (typeof region === 'object') {
                regionsSelect.append(`<option value="${region.id || region}">${region.label || region}</option>`);
              } else {
                // Convert spaces to underscores for the value and format the label
                const value = region.toLowerCase().replace(/ /g, '_');
                const label = region;
                regionsSelect.append(`<option value="${value}">${label}</option>`);
              }
            }
            
            // Restore the previous selection if it exists in the new list
            if (currentValue) {
              // Check if the option exists in the rebuilt dropdown
              if (regionsSelect.find(`option[value="${currentValue}"]`).length > 0) {
                regionsSelect.val(currentValue);
              } else {
                // If not, get the saved settings and check there
                const savedSettings = game.settings.get('greyhawk-encounters', 'lastUsedSettings');
                if (savedSettings && savedSettings.region) {
                  if (regionsSelect.find(`option[value="${savedSettings.region}"]`).length > 0) {
                    regionsSelect.val(savedSettings.region);
                  }
                }
              }
            }
            
            console.log(`Added ${regionTypeData.regions.length} regions to dropdown`);
          } else {
            console.error(`Region type ${regionType} not found in data`);
          }
          
          // After updating the dropdown, save the current selection to settings
          this._saveCurrentFormValues();
        }
    
        async _rollEncounter(html) {
          try {
            const system = html.find('select[name="encounterSystem"]').val();
            // Store the current region selection
            const currentRegion = html.find('select[name="region"]').val();
        
            // 🧭 Shared values used by both DMG and WoG
            const terrain = html.find('select[name="terrain"]').val() || 'plain';
            const population = html.find('select[name="population"]').val() || 'moderate';
            const climate = html.find('select[name="climate"]').val() || 'temperate';
            let timeOfDay = html.find('select[name="timeOfDay"]').val() || 'noon';
        
            if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
              const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
              if (timeInfo?.timeOfDay) timeOfDay = timeInfo.timeOfDay;
            }
        
            // ─────────────────────────────────────────────────────────────
            // DMG System Encounter Logic
            // ─────────────────────────────────────────────────────────────
            if (system === 'dmg') {
              const encounterType = html.find('select[name="dmgEncounterType"]').val();
              let options = { encounterType };
        
              // Handle dungeon pre-roll separately
              if (encounterType === 'dungeon') {
                const dungeonLevel = parseInt(html.find('input[name="dungeonLevel"]').val()) || 1;
                options = { ...options, dungeonLevel };
        
                const periodicDieSize = parseInt(html.find('select[name="periodicDieSize"]').val()) || 6;
                const periodicSuccessValue = parseInt(html.find('input[name="periodicSuccessValue"]').val()) || 1;
                const periodicRoll = Math.floor(Math.random() * periodicDieSize) + 1;
                const encounterOccurs = periodicRoll <= periodicSuccessValue;
        
                await ChatMessage.create({
                  user: game.user.id,
                  speaker: ChatMessage.getSpeaker(),
                  content: `
                    <div>
                      <h3>Dungeon Wandering Monster Check</h3>
                      <p>Dungeon Level: ${dungeonLevel}</p>
                      <p>Roll: ${periodicRoll} on 1d${periodicDieSize}</p>
                      <p>Result: ${encounterOccurs ? "Encounter occurs!" : "No encounter"}</p>
                      <p><em>Check: ${periodicSuccessValue} or less on 1d${periodicDieSize} (${(periodicSuccessValue / periodicDieSize * 100).toFixed(1)}%)</em></p>
                      <p><em>Standard check: every 3 turns (30 minutes)</em></p>
                    </div>`
                });
        
                if (!encounterOccurs) return;
        
                const result = await (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')
                  ? GreyhawkEncounters.rollTimeAwareEncounter(options)
                  : GreyhawkEncounters.rollEncounter(options));
        
                if (result) {
                  GreyhawkEncounters._displayEncounterResult(result, options);
                } else {
                  ui.notifications.error("Error generating dungeon encounter.");
                }
        
                return;
              }
        
              // Handle all other DMG encounter types
              let result;  // declare once at top

              switch (encounterType) {
                case 'outdoor': {
                  const terrain = html.find('select[name="terrain"]').val() || 'plain';
                  const population = html.find('select[name="population"]').val() || 'moderate';
                  const climate = html.find('select[name="climate"]').val() || 'temperate';
                  let timeOfDay = html.find('select[name="timeOfDay"]').val() || 'noon';
                  const forceEncounter = html.find('input[name="forceEncounter"]').is(':checked');
                  const isWarZone = html.find('input[name="isWarZone"]').is(':checked');

                  if (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')) {
                    const timeInfo = GreyhawkEncounters.getCurrentTimeInfo();
                    if (timeInfo?.timeOfDay) timeOfDay = timeInfo.timeOfDay;
                  }

                  options = { ...options, terrain, population, climate, timeOfDay, isWarZone, forceEncounter };

                  // ✅ Just assign to result — do not redeclare it
                  result = await GreyhawkEncounters.rollOutdoorEncounter(terrain, population, timeOfDay, options);

                  if (options.originalRegionalRoll) {
                    result.roll = options.originalRegionalRoll;
                  }

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
        
                case 'astral':
                case 'ethereal': {
                  // No extra options needed
                  break;
                }
              }
        
              result = await (game.settings.get('greyhawk-encounters', 'useSimpleCalendar')
                ? GreyhawkEncounters.rollTimeAwareEncounter(options)
                : GreyhawkEncounters.rollEncounter(options));
        
              if (result) {
                GreyhawkEncounters._displayEncounterResult(result, options);
              } else {
                ui.notifications.warn("No DMG encounter generated.");
              }
        
            }
        
            // ─────────────────────────────────────────────────────────────
            // WoG System Encounter Logic
            // ─────────────────────────────────────────────────────────────
            else if (system === 'wog') {
              const wogType = html.find('select[name="wogEncounterType"]').val() || 'regional';
              this._updateWogOptions(wogType, html); // Ensure UI is synced
        
              const regionType = html.find('select[name="regionType"]').val() || 'political';
              const region = html.find('select[name="region"]').val();
              const isWarZone = html.find('input[name="isWarZone"]').is(':checked');
              const forceEncounter = html.find('input[name="forceEncounter"]').is(':checked');
        
              if (!region) {
                ui.notifications.warn("Please select a specific region");
                return;
              }
        
              try {
                const result = await GreyhawkEncounters._rollRegionalEncounter({
                  specificRegion: region,
                  regionType,
                  isWarZone,
                  forceEncounter,
                  terrain,
                  population,
                  timeOfDay,
                  climate
                });
        
                if (result) {
                  await GreyhawkEncounters._displayEncounterResult(result, {
                    encounterType: 'regional',
                    specificRegion: region,
                    regionType,
                    isWarZone
                  });
                } else {
                  ui.notifications.warn(`No encounter generated for ${region}`);
                }
                
                // restore the selected region after encounter generation
                html.find('select[name="region"]').val(region);

              } catch (error) {
                console.error("Error rolling WoG regional encounter:", error);
                ui.notifications.error(`Error generating encounter for ${region}`);
              }
            }
        
          } catch (error) {
            console.error("❌ Error in _rollEncounter:", error);
            ui.notifications.error("Encounter generation failed.");
            
            // Also restore from the catch block, even though currentRegion is out of scope
            // You'll need to get it again
            const selectedRegion = html.find('select[name="region"]').val();
            if (selectedRegion) {
              html.find('select[name="region"]').val(selectedRegion);
            }
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

        _resetEncounterFormSections(html) {
          html.find('.dmg-system-container').hide();
          html.find('.wog-system-container').hide();
          html.find('.dmg-dungeon-options, .dmg-outdoor-options, .dmg-underwater-options, .dmg-planar-options, .dmg-waterborne-options, .dmg-airborne-options, .dmg-city-options').hide();
          html.find('.wog-regional-options, .wog-patrol-options').hide();
          html.find('.region-options, .outdoor-options, .dungeon-options, .underwater-options, .planar-options').hide();
          //html.find('.time-of-day-group').hide();
        }
        
}
