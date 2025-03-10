// data/greyhawk-patrols.js
// This file contains the patrol encounter tables for World of Greyhawk

export const GREYHAWK_PATROL_TYPES = {
    "elves_knights": {
      name: "Elves, Knights",
      description: "Knights of the Hart of Highfolk",
      composition: {
        commander: { class: "F/C", level: "7/7", ac: 3 },
        lieutenant: { class: "F/C", level: "6/6", ac: 3 },
        knights: { class: "F/C", level: "5/5", ac: 3, count: "5-8" },
        magicUsers: { 
          master: { class: "F/M-U", level: "4-6/8-11", ac: 4 },
          assistants: { class: "F/M-U", level: "3-5/4-7", ac: 4, count: "1-3" }
        },
        entourage: {
          esquires: { class: "F/C", level: "3-4/3-4", ac: 4, perKnight: "1-4" },
          sergeants: { class: "F", level: "2", ac: 5, perKnight: "3-12" }
        }
      },
      equipment: "Knights: shield, lance, long sword, mace. Esquires: shield, lance, long sword, mace. Sergeants: bow, long sword, mace. Magic-users: bow and long sword.",
      notes: "Mounted on warhorses. Elven clerics can wield edged and piercing weapons. Magical armor and arms chance: 5% per highest level."
    },
    
    "elven_patrol": {
      name: "Elven Patrol",
      description: "Elves and half-elves either mounted or afoot",
      composition: {
        captain: { class: "F/M-U", level: "4-6/5-7", ac: 4 },
        lieutenants: { class: "F/M-U", level: "3-5/4-6", ac: 5, count: 2 },
        scout: { class: "C/R", level: "5/5-7", ac: 5, race: "half-elf" },
        sergeants: { class: "F", level: "3-5", ac: 4, count: 4 },
        scouts: { class: "R", level: "1-2", ac: 5, count: 4, note: "can be half-elves" },
        elves: { class: "standard elves", level: "1", ac: 5, count: "13-18" }
      },
      equipment: "All members carry bow and long sword",
      notes: "Armor class excludes dexterity bonus and magic. Magical items chance: 5% per highest level."
    },
    
    "hobgoblin_soldiery": {
      name: "Hobgoblin Soldiery",
      description: "Well-trained bands of humanoids typically officered by humans",
      composition: {
        support: {
          cleric: { class: "C", level: "4-7", ac: 2, probability: 50 },
          magicUser: { class: "MU", level: "3-6", ac: 10, probability: 30 },
          thief: { class: "T", level: "5-8", ac: 8, probability: 70 }
        },
        officers: {
          captain: { class: "F", level: "6-8", ac: 2, race: "human" },
          lieutenant: { class: "F", level: "5", ac: 2, race: "human" },
          subalterns: { class: "F", level: "3", ac: 4, count: 4, race: "human" },
          sergeants: { class: "hobgoblin", hp: 9, ac: 4, count: 8 }
        },
        troops: { class: "hobgoblin", hp: "5-8", ac: 5, count: "90-160" }
      },
      equipment: "Humans mounted on medium warhorses with lance, whip, long sword, and/or mace. Hobgoblins have: Composite bow and short sword (20%), Fauchard-fork and short sword (50%), Morning star (30%).",
      notes: "Troops march and fight in close order. Morale excellent while human leaders remain. Human AC excludes dexterity/magic. Magic chance for humans: 5% per level."
    },
    
    "patrol_heavy": {
      name: "Men, Patrol, Heavy",
      description: "Typically mounted on heavy or medium warhorses, heavily armored",
      composition: {
        officer: { class: "F", level: "5-6", ac: 2 },
        subalterns: { class: "F", level: "3-4", ac: 2, count: 2 },
        sergeants: { class: "F", level: "2-3", ac: 3, count: 6 },
        veterans: { class: "F", level: "1", ac: 3, hp: "7-12", count: "7-10" },
        regulars: { class: "F", level: "0", ac: 3, hp: "4-7", count: "9-24" },
        support: {
          options: [
            { class: "C", level: "5-6", ac: 2 },
            { class: "D", level: "5-6", ac: 8 },
            { class: "MU", level: "4-5", ac: 10 }
          ]
        }
      },
      equipment: "Weapons appropriate to nationality, with broad or long swords common to officers and NCOs",
      notes: "Armor class is exclusive of dexterity and magical bonuses. Magic chance: 5% per level."
    },
    
    "patrol_knights": {
      name: "Men, Patrol, Knights",
      description: "11-14 knights plus retainers, mounted on warhorses",
      composition: {
        commander: { 
          options: [
            { class: "P", level: "8-9" },
            { class: "F", level: "9-10" }
          ]
        },
        lieutenant: { 
          options: [
            { class: "P", level: "6-7" },
            { class: "F", level: "7-8" }
          ]
        },
        knights: { class: "F", level: "4-6", count: "9-12" },
        clerics: {
          chaplain: { class: "C", level: "7-9" },
          assistants: { class: "C", level: "3-5", count: "1-3" }
        },
        entourage: {
          esquire: { class: "F", level: "2-3", perKnight: 1 },
          sergeants: { class: "F", level: "1", perKnight: "5-8" }
        }
      },
      equipment: "Knights: AC 2; lance, bastard sword, mace. Clerics: AC 2; flail, hammer, mace. Esquires: AC 3; lance, long sword, mace. Sergeants: AC 4; light crossbow (50%) or spear, short sword.",
      notes: "Armor class does not include dexterity or magical bonuses. Magic chance: 5% per level."
    }
  };
  
  // Additional patrol types can be added here
  
  // Main patrol encounter function
  export const rollPatrolEncounter = (patrolType = "patrol_heavy") => {
    const patrol = GREYHAWK_PATROL_TYPES[patrolType] || GREYHAWK_PATROL_TYPES["patrol_heavy"];
    
    // Calculate troop numbers
    let totalTroops = 0;
    let leaders = 0;
    let specialMembers = [];
    
    // This is a simplified calculation - would need more complex functions
    // to fully implement the exact distribution as described in the text
    if (patrol.composition.troops) {
      const troopCountRange = patrol.composition.troops.count.split("-");
      totalTroops = Math.floor(Math.random() * (parseInt(troopCountRange[1]) - parseInt(troopCountRange[0]) + 1)) + parseInt(troopCountRange[0]);
    }
    
    // Count leaders (simplified)
    leaders = 1; // commander/captain
    if (patrol.composition.lieutenants) {
      leaders += (typeof patrol.composition.lieutenants.count === 'number') ? 
        patrol.composition.lieutenants.count : 
        1;
    }
    if (patrol.composition.sergeants) {
      leaders += (typeof patrol.composition.sergeants.count === 'number') ? 
        patrol.composition.sergeants.count : 
        1;
    }
    
    // Determine special members (simplified)
    if (patrol.composition.support) {
      if (patrol.composition.support.options) {
        // Randomly select one support type
        const supportIndex = Math.floor(Math.random() * patrol.composition.support.options.length);
        specialMembers.push({
          type: patrol.composition.support.options[supportIndex].class,
          level: patrol.composition.support.options[supportIndex].level
        });
      } else {
        // Check each support type with its probability
        Object.entries(patrol.composition.support).forEach(([key, value]) => {
          if (!value.probability || Math.random() * 100 < value.probability) {
            specialMembers.push({
              type: value.class,
              level: value.level
            });
          }
        });
      }
    }
    
    return {
      patrolType: patrol.name,
      description: patrol.description,
      totalTroops,
      leaders,
      specialMembers,
      equipment: patrol.equipment,
      notes: patrol.notes
    };
  };
  
  export default {
    GREYHAWK_PATROL_TYPES,
    rollPatrolEncounter
  };