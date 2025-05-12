export const MONSTER_MANUAL = {
  monsters: [
    {
      "name": "Aerial Servant",
      "category": "Extraplanar",
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Large (8' tall)",
      "move": "240 ft",
      "armorClass": 3,
      "hitDice": "16",
      "attacks": 1,
      "damage": "8d4",
      "specialAttacks": "Surprise on 1-4",
      "specialDefenses": "Can only be hit by magic weapons",
      "magicResistance": "Standard",
      "lairProbability": "0%",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "levelXP": "8/4000+20/hp",
      "TREASURE TYPE": "Nil",
      "treasure": "Nil",
      "description": "Aerial servants are creatures from the elemental planes that can be summoned by clerics. Nearly invisible, they surprise opponents easily and can only be harmed by magical weapons. They are extraordinarily strong and can strangle opponents."
    },
    {
      "name": "Amber Creeping Vine",
      "category": "Plant",
      "variants": [
        {
          "name": "Amber Creeping Vine",
          "description": "A parasitic plant with intelligence-draining tendrils that feed on victims' brains, transforming some into Amber Zombies.",
          "specialAbilities": {
            "attack": "Consumes 1d4 Intelligence per round from a captured victim.",
            "zombieCreation": "If Intelligence is reduced to 1–2, victim becomes an Amber Zombie.",
            "killingBlow": "Piercing the buried root (1 ft below) kills the vine instantly.",
            "zombieControl": "Controls 1 Amber Zombie per 2 blooms it possesses.",
            "camouflage": "Covers remains and victim gear with foliage and dirt."
          },
          "vulnerabilities": {
            "healing": "Healing magic restores Intelligence, but does not heal HP simultaneously.",
            "cure": "Killing the vine halts the drain; otherwise, the process continues."
          },
          "dwelling": {
            "location": "Woodlands or caverns with soft earth",
            "buriedRoot": "1 ft underground"
          },
          "TREASURE TYPE": "Nil",
          "treasure": {
            "individual": "None",
            "lair": "Victims' items buried beneath vine"
          },
          "alignment": "Neutral",
          "intelligence": "Low",
          "armorClass": "Varies (typically plant cover)",
          "hitDice": "Unknown (GM’s discretion)",
          "attacks": "1+ (Tendrils)",
          "damage": "Intelligence drain",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "90%",
          "size": "Large (covers 10–20 ft area)"
        },
        {
          "name": "Amber Zombie",
          "description": "A mindless humanoid husk controlled by the Amber Creeping Vine. Amber-hued skin and lifeless eyes betray its origin.",
          "appearance": {
            "skin": "Amber",
            "eyes": "Glazed, lifeless"
          },
          "combat": {
            "hitDice": 2,
            "attacks": 1,
            "damage": "By weapon",
            "equipment": "Uses whatever it carried in life",
            "noSpells": true
          },
          "immunities": ["Mind-affecting spells", "Turning"],
          "behavior": {
            "guarding": "Defends the vine at all costs",
            "hunting": "Lures new prey to the vine",
            "lifespan": "Wanders away after 2 months, dies, and sprouts a new vine"
          },
          "cure": {
            "method": [
              "Kill the controlling vine",
              "Cast neutralise poison",
              "Then cast heal"
            ],
            "recoveryTime": "1 week per 4 Int lost"
          },
          "alignment": "Neutral",
          "intelligence": "None",
          "armorClass": 7,
          "hitDice": "2",
          "attacks": 1,
          "damage": "By weapon type",
          "specialAttacks": "None",
          "specialDefenses": "Immune to charm, sleep, mind control",
          "magicResistance": "Standard",
          "lairProbability": "As per vine",
          "size": "Medium (as former race)",
          "treasure": {
            "individual": "None",
            "lair": "Items carried at time of transformation"
          }
        }
      ]
    },
    {
      "name": "Anhkheg",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1d6",
      "size": "Large (10'-20' long)",
      "move": "120 ft (60 ft burrowing)",
      "armorClass": "2 (overall); 4 (underside)",
      "hitDice": "3-8",
      "attacks": 1,
      "damage": "3d6 (+1d4 acid)",
      "specialAttacks": "Acid squirt",
      "specialDefenses": "Nil",
      "magicResistance": "Standard",
      "lairProbability": "15%",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "Variable based on HD",
      "TREASURE TYPE": "C",
      "treasure": "none",
      "description": "Insectoid burrowing predators with chitinous shells and powerful mandibles. They squirt acid and burrow through soil to ambush prey."
    },
    {
      "name": "Annis",
      "category": "Giant-kin",
      "variants": [
        {
          "name": "Annis",
          "description": "Evil hag-like giants, gaunt and ragged, infamous for their hunger and cruelty. Often mistaken for horrid old women at a distance.",
          "appearance": {
            "height": "8 ft",
            "clothing": "Stained and filthy garments",
            "physique": "Gaunt, lank-haired, giantesses with hideous features"
          },
          "abilities": {
            "strength": "19 (as strong as a hill giant)",
            "grapple": "If all 3 attacks hit in 1 round, opponent is held and auto-hit each following round"
          },
          "magic": {
            "fogCloud": "3×/day",
            "changeSelf": "3×/day"
          },
          "speech": {
            "languages": ["Common", "Giantish tongues", "Own language"]
          },
          "behavior": {
            "alignment": "Chaotic evil",
            "habits": "Anthropophagic; will eat any meat when hungry",
            "associates": ["Occasionally found with giants or trolls"]
          },
          "TREASURE TYPE": "D",
          "lair": {
            "chance": "20%",
            "treasure": {
              "cp": "1d20×1,000 (25%)",
              "sp": "1d8×1,000 (35%)",
              "ep": "1d6×1,000 (10%)",
              "gp": "1d6×1,000 (40%)",
              "gems": "1d8 (30%)",
              "jewellery": "1d6 (25%)",
              "magicItems": "Any 2 + 1 potion (15%)"
            }
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d3",
      "size": "Large (8 ft)",
      "move": "150 ft",
      "armorClass": 0,
      "hitDice": 9,
      "attacks": 3,
      "damage": "1d8+8 / 1d8+8 / 1d8+1",
      "specialAttacks": {
        "grapple": "Hold opponent if all 3 attacks hit, automatic hits thereafter"
      },
      "specialDefenses": "Immune to illusions",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Average to exceptional",
      "alignment": "Chaotic evil",
      "psionicAbility": "Nil",
      "levelXP": "7/1,200+10/hp",
      "specialAbilities": {
        "spellcasting": {
          "fogCloud": "3/day",
          "changeSelf": "3/day"
        },
        "grappling": "Opponent is automatically hit once grappled"
      },
      "treasure": {
        "individual": "None",
        "lair": "cp, sp, ep, gp, gems, jewellery, 2 magic items and 1 potion (see percentages)"
      }
    },    
    {
      "name": "Ant, Giant",
      "category": "Insect",
      "variants": [
        {
          "name": "Worker",
          "description": "The most numerous caste in a giant ant colony. Responsible for foraging, construction, and tending to eggs and larvae.",
          "frequency": "Rare",
          "numberAppearing": "1d100",
          "size": "Small",
          "move": "180 ft",
          "armorClass": 3,
          "hitDice": 2,
          "TREASURE TYPE": "Q (x3), S",
          "attacks": 1,
          "damage": "1d6",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "10%",
          "intelligence": "Animal",
          "alignment": "Neutral",
          "levelXP": "2/30+1/hp",
          "behavior": {
            "role": "Foraging and colony maintenance",
            "colonyNote": "Presence of soldiers: 1 per 5 workers"
          }
        },
        {
          "name": "Soldier",
          "description": "Larger, more aggressive ants bred for defense. Appear with colonies or patrolling near the queen’s chamber.",
          "frequency": "Very rare",
          "numberAppearing": "1 per 5 workers",
          "size": "Small",
          "move": "180 ft",
          "armorClass": 3,
          "hitDice": 3,
          "TREASURE TYPE": "Q (x3), S",
          "attacks": 2,
          "damage": "2d4 / 3d4",
          "specialAttacks": "Poison",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "10%",
          "intelligence": "Animal",
          "alignment": "Neutral",
          "levelXP": "2/50+2/hp",
          "behavior": {
            "role": "Colony defense",
            "guardQueen": "5+ soldiers protect the queen at all times"
          }
        },
        {
          "name": "Queen",
          "description": "The heart of the colony. Immobile and completely dependent on her protectors.",
          "frequency": "Very rare",
          "numberAppearing": "1",
          "size": "Large",
          "move": "None",
          "armorClass": 4,
          "hitDice": 10,
          "TREASURE TYPE": "Q (x3), S",
          "attacks": "None",
          "damage": "None",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "100%",
          "intelligence": "Low",
          "alignment": "Neutral",
          "levelXP": "7/700+13/hp",
          "behavior": {
            "role": "Reproduction and colony cohesion",
            "deathEffect": "Slaying the queen causes colony-wide confusion (as druid spell) for 1d6 rounds; ants scatter thereafter"
          }
        }
      ],
      "specialAbilities": {
        "organization": {
          "nestDefense": "At least 5d10 workers and 5 soldiers defend the queen",
          "cohesion": "Queen's presence organizes the colony; without her, ants disperse"
        }
      },
      "treasure": {
        "individual": "None",
        "lair": {
          "gems": "3d4 (50%)",
          "potions": "2d4 (40%)"
        }
      }
    },
    {
      "name": "Ape, Carnivorous",
      "category": "Animal",
      "frequency": "Very rare",
      "numberAppearing": "2d4",
      "size": "Large",
      "move": "120 ft",
      "armorClass": 6,
      "hitDice": "5",
      "TREASURE TYPE": "C",
      "attacks": "3",
      "damage": "1d4/1d4/1d8",
      "specialAttacks": "Mangle",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Low",
      "alignment": "Neutral",
      "levelXP": "3/125+4/hp",
      "treasure": "None",
      "description": "Carnivorous apes are larger, more aggressive versions of normal apes. They can deliver a devastating mangle attack when both hands hit the same target in a round, dealing an additional 1d6 damage."
    },
    {
      "name": "Ape, Normal",
      "category": "Animal",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 6,
      "hitDice": "4+1",
      "TREASURE TYPE": "Nil",
      "attacks": "3",
      "damage": "1d3/1d3/1d6",
      "specialAttacks": "Mangle",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Low",
      "alignment": "Neutral",
      "levelXP": "3/110+4/hp",
      "treasure": "None",
      "description": "Normal apes are peaceful primates found in rainforests who fight only when threatened. If they hit with both hands in the same round, they deal an additional 1d6 damage by mangling their opponent."
    },
    {
      "name": "Aurumvorax",
      "category": "Beast",
      "variants": [
        {
          "name": "Aurumvorax",
          "description": "Also known as the 'golden gorger', this dense, burrowing predator has a beautiful golden pelt and the temperament of a furious badger. Though small in size, it is incredibly heavy and strong.",
          "appearance": {
            "coat": "Golden fur",
            "body": "Eight-legged, low-bodied like a weasel or badger"
          },
          "behavior": {
            "alignment": "Neutral",
            "habitat": "Plains and woodlands",
            "diet": "Carnivore—attacks anything it can kill and eat"
          },
          "combat": {
            "bite": {
              "effect": "Locks jaw like a bulldog; victim takes 2d4 damage per round while attached"
            },
            "clawRake": {
              "effect": "Each round after bite, 1d8 claws rake for 1d6 damage each"
            },
            "detachment": "The aurumvorax cannot be dislodged without killing it"
          },
          "defenses": {
            "bluntResistance": "Takes only half damage from blunt weapons",
            "fireResistance": "Takes only half damage from fire",
            "immunities": ["Poison", "Gas"]
          },
          "rumors": {
            "origin": "Possibly an extraplanar species, not native to the Prime Material Plane"
          },
          "treasure": {
            "individual": "None",
            "lair": "GM-determined; may contain treasure from past kills"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Small (dense as a bear)",
      "move": "90 ft; 30 ft burrowing",
      "armorClass": 0,
      "hitDice": 12,
      "attacks": 1,
      "damage": "2d4 (bite) + claws if attached",
      "specialAttacks": {
        "biteAndRake": "On successful bite, victim is raked for 1d6 damage ×1d8 claws each round"
      },
      "specialDefenses": "Half damage from fire and blunt; immune to gas and poison",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "psionicAbility": "Nil",
      "levelXP": "8/2,250+16/hp"
    },    
    {
      "name": "Axe Beak",
      "category": "Animal",
      "frequency": "Uncommon",
      "numberAppearing": "1-6",
      "size": "Large (7'+ tall)",
      "move": "180 ft",
      "armorClass": 6,
      "hitDice": 3,
      "TREASURE TYPE": "Nil",
      "attacks": 3,
      "damage": "1-3/1-3/2-8",
      "specialAttacks": "Nil",
      "specialDefenses": "Nil",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "3/60+3/hp",
      "treasure": "Nil",
      "description": "Axe beaks are large, flightless birds with sharp, axe-shaped beaks. They are aggressive predators that attack with their beaks and talons."
    },
    {
      "name": "Babbler",
      "category": "Humanoid (Mutant)",
      "variants": [
        {
          "name": "Babbler",
          "description": "Large, reptilian humanoids found in swamps and marshes. They emit incomprehensible speech and have an unsettling resemblance to miniature tyrannosaurs with longer arms. Possibly a mutant strain of lizard men.",
          "appearance": {
            "coloration": "Yellow with grey blotches and a grey underbelly",
            "body": "Mini-tyrannosaur body with humanoid arms",
            "size": "8 ft tall"
          },
          "behavior": {
            "alignment": "Chaotic evil",
            "habitat": "Swamps and marshes",
            "language": "Babbling tongue incomprehensible to humans and demi-humans",
            "diet": "Carnivorous, particularly fond of human flesh",
            "associates": "Occasionally found with lizard man raiding parties"
          },
          "combat": {
            "attacks": 3,
            "attackForms": "Two claws and one bite",
            "damage": "1d6 / 1d6 / 1d8",
            "tactics": {
              "stealth": "May hide like a 5th-level thief when prone in swampy terrain",
              "mobility": "Uses quadrupedal movement (120 ft) for speed; bipedal when attacking"
            }
          },
          "treasure": {
            "individual": "None",
            "lair": {
              "cp": "1d12×1,000 (20%)",
              "sp": "1d6×1,000 (35%)",
              "ep": "1d6×1,000 (10%)",
              "gp": "1d6×1,000 (40%)",
              "gems": "1d4 (30%)",
              "jewellery": "1d3 (25%)",
              "magicItems": "1 magic item and 1 potion (10%)"
            }
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d4",
      "size": "Large (8 ft tall)",
      "move": "60 ft bipedal; 120 ft quadrupedal",
      "armorClass": 6,
      "hitDice": 5,
      "TREASURE TYPE": "B",
      "attacks": 3,
      "damage": "1d6 / 1d6 / 1d8",
      "specialAttacks": {
        "stealth": "Hides in swamp like a 5th-level thief"
      },
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "15%",
      "intelligence": "Average",
      "alignment": "Chaotic evil",
      "psionicAbility": "Nil",
      "levelXP": "3/100+5/hp"
    },    
    {
      "name": "Baboon",
      "category": "Animal",
      "frequency": "Common",
      "numberAppearing": "10-100",
      "size": "Medium (5' tall)",
      "move": "120 ft",
      "hitDice": "1-1",
      "TREASURE TYPE": "Nil",
      "armorClass": 6,
      "attacks": 1,
      "damage": "1-3",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "1/5+1/hp",
      "treasure": "Nil",
      "description": "Baboons are social primates that live in large troops. Though not normally aggressive, they can be dangerous when threatened or provoked."
    },
    {
      "name": "Badger",
      "category": "Animal",
      "frequency": "Uncommon",
      "numberAppearing": "1-6",
      "size": "Small (3' long)",
      "move": "90 ft (30 ft burrowing)",
      "armorClass": 4,
      "hitDice": "3",
      "TREASURE TYPE": "Nil",
      "attacks": 3,
      "damage": "1-3/1-3/1-6",
      "specialAttacks": "Ferocity: +2 to hit if wounded",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "3/60+3/hp",
      "treasure": "Nil",
      "description": "Badgers are burrowing mammals known for their tenacity. When wounded, they fight with increased ferocity, gaining a +2 bonus to hit."
    },
    {
      "name": "Baluchitherium",
      "category": "Animal",
      "frequency": "Very Rare",
      "numberAppearing": "1-3",
      "size": "Large (20' tall)",
      "move": "120 ft",
      "armorClass": 6,
      "hitDice": "12",
      "TREASURE TYPE": "Nil",
      "attacks": 1,
      "damage": "2-12",
      "specialAttacks": "Trample on charge",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "6/800+12/hp",
      "treasure": "Nil",
      "description": "The baluchitherium is an enormous prehistoric rhinoceros-like creature. When frightened, it charges and attempts to trample opponents."
    },
    
    {
      "name": "Banshee",
      "category": "Undead",
      "name_variants": "Groaning Spirit",
      "turnResistance": 13,
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Man-sized",
      "move": "150 ft",
      "armorClass": 0,
      "hitDice": "7",
      "TREASURE TYPE": "D",
      "attacks": "1",
      "damage": "1d8",
      "specialAttacks": "Groan (save vs magic or die), fear (save vs spells or flee)",
      "specialDefenses": "+1 weapon or better to hit; immune to sleep, charm, hold, cold, electrical attacks; exorcism slays",
      "magicResistance": "50%",
      "lairProbability": "10%",
      "intelligence": "Exceptional",
      "alignment": "Chaotic evil",
      "levelXP": "6/665+8/hp",
      "treasure": "None",
      "description": "The legendary banshee is the ghost of an evil elven female that haunts remote natural areas. Its chilling touch deals 1d8 damage, and its wail forces all creatures within 30 ft to save vs magic or die. Merely seeing a banshee causes fear unless the viewer saves vs spells. Immune to many spells and resistant to cold and electrical attacks, a banshee can be slain by exorcism."
    },
    {
      "name": "Barghest",
      "category": "Extraplanar",
      "variants": [
        {
          "name": "Barghest (Larval Form)",
          "description": "Fiendish beings from Gehenna that appear during a larval phase on the Prime Material Plane. Initially resembling large goblins, they can shapeshift into monstrous dogs.",
          "appearance": {
            "baseForm": "Large goblin-like humanoid",
            "alternateForm": "Huge dog with glowing eyes (at will)",
            "size": "Man-sized"
          },
          "behavior": {
            "origin": "Native to Gehenna, sent to Prime Material Plane during larval stage",
            "mission": "To grow in power by devouring souls; returns to Gehenna when mature",
            "diet": "Devours humanoids to grow stronger",
            "tactics": "Uses illusion and misdirection to isolate and consume victims"
          },
          "combat": {
            "hitDice": "6+6 and increasing",
            "attacks": 2,
            "damage": "2d4 + modifiers based on consumed victims",
            "growth": {
              "perHumanConsumed": {
                "HD": "+1+1",
                "AC": "-1",
                "MR": "+5%",
                "damage": "+1"
              },
              "maturity": "At 12+12 HD, can plane shift back to Gehenna"
            },
            "dogForm": {
              "speed": "Doubles to 300 ft",
              "surpriseChance": "50%",
              "specialMove": "Pass without trace (at will)"
            }
          },
          "spellAbilities": {
            "atWill": [
              "change self",
              "levitate",
              "misdirection",
              "projected image"
            ],
            "daily": [
              "charm person (1/day)",
              "dimension door (1/day)"
            ]
          },
          "vulnerabilities": {
            "fire": "If takes 15+ fire damage in one hit, must save vs spell or be banished to Gehenna"
          },
          "speech": {
            "intelligence": "High and higher",
            "languages": ["Goblin", "Infernal", "Common (sometimes)"]
          },
          "treasure": {
            "individual": "None",
            "lair": "None (wanders Prime Material Plane)"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d2",
      "size": "Man-sized",
      "move": "150 ft (double in dog form)",
      "armorClass": "2 and lower (improves as they grow)",
      "hitDice": "6+6 and higher",
      "TREASURE TYPE": "Nil",
      "attacks": 2,
      "damage": "2d4 + modifiers",
      "specialAttacks": "Spell-like powers; devouring victims increases power",
      "specialDefenses": "Can shapeshift; pass without trace; banishment trigger from fire",
      "magicResistance": "30% and increases with growth",
      "lairProbability": "Nil",
      "intelligence": "High and higher",
      "alignment": "Lawful evil",
      "psionicAbility": "Nil",
      "levelXP": "7/1,250+10/hp and higher"
    },    
    {
      "name": "Barracuda",
      "category": "Animal",
      "frequency": "Uncommon",
      "numberAppearing": "2d6",
      "size": "Small to Large",
      "move": "300 ft swimming",
      "armorClass": 6,
      "hitDice": "1-3",
      "TREASURE TYPE": "Nil",
      "attacks": 1,
      "damage": "2d4",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "Variable based on HD",
      "treasure": "Nil",
      "description": "Barracudas are swift, predatory fish with sharp teeth. They are attracted to shiny objects and may attack swimmers wearing jewelry or metal equipment."
    },
    {
      "name": "Basilisk",
      "category": "Monster",
      "frequency": "Uncommon",
      "numberAppearing": "1d4",
      "size": "Medium (7' long)",
      "move": "60 ft",
      "armorClass": 4,
      "hitDice": "6+1",
      "TREASURE TYPE": "F",
      "attacks": 1,
      "damage": "1d10",
      "specialAttacks": "Petrifying gaze",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "5/500+6/hp",
      "treasure": "Type F",
      "description": "The basilisk is a reptilian monster with a deadly gaze that turns victims to stone. Even seeing a basilisk's reflection can trigger its petrifying effect. It hunts in rocky terrain and often accumulates a collection of stone statues - former victims."
    },
    {
      "name": "Bat",
      "category": "Animal",
      "variants": [
        {
          "type": "Ordinary",
          "frequency": "Common",
          "numberAppearing": "1d100×10",
          "size": "Small",
          "move": "10 ft; 240 ft flying (AA:V)",
          "armorClass": "8, see below",
          "hitDice": "1d2 hp",
          "TREASURE TYPE": "Nil",
          "attacks": 1,
          "damage": 1,
          "specialAttacks": "Swarm, see below",
          "specialDefenses": "None",
          "levelXP": "1/1"
        },
        {
          "type": "Giant",
          "frequency": "Uncommon",
          "numberAppearing": "3d6",
          "size": "Small",
          "move": "10 ft; 240 ft flying (AA:V)",
          "armorClass": "8, see below",
          "hitDice": "1d4 hp",
          "TREASURE TYPE": "Nil",
          "attacks": 1,
          "damage": "1d2",
          "specialAttacks": "None",
          "specialDefenses": "See below",
          "levelXP": "1/5+1/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Bats only attack when trapped, seeking to escape. When startled, they swarm, causing confusion and extinguishing torches. Their sonar navigation gives them AC 4 in optimal conditions. Giant bats grow up to 3 ft long with 6 ft wingspans. They're highly maneuverable, imposing -3 to hit with missiles (unless attacker has DEX 13+). Their bite carries a 1% chance of rabies or similar infection."
    },
    {
      "name": "Bat, Mobat",
      "category": "Animal",
      "frequency": "Rare",
      "numberAppearing": "1d8",
      "size": "Medium",
      "move": "30 ft; 150 ft flying (AA:IV)",
      "armorClass": "2 to 10, see below",
      "hitDice": "4 to 6, see below",
      "TREASURE TYPE": "C",
      "attacks": 1,
      "damage": "2d4",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "Standard",
      "lairProbability": "15%",
      "intelligence": "Low",
      "alignment": "Neutral (evil)",
      "levelXP": "3/135+3/hp (4 HD); 5/300+6/hp (6 HD)",
      "treasure": {
        "cp": {"amount": "1d12×1,000", "chance": "20%"},
        "sp": {"amount": "1d6×1,000", "chance": "30%"},
        "ep": {"amount": "1d4×1,000", "chance": "10%"},
        "gems": {"amount": "1d6", "chance": "25%"},
        "jewellery": {"amount": "1d3", "chance": "20%"},
        "magic_items": {"amount": "any 2", "chance": "10%"}
      },
      "description": "The very large mobat inhabits warm regions with plentiful warm-blooded prey. With 12-16 ft wingspans, they need large cave entrances. Their silent flight grants 50% surprise chance. They emit paralysing shrieks forcing victims to save vs paralysis or cover their ears defensively. Flying AC is 2, grounded AC is 10."
    },
    {
      "name": "Bear, Greater",
      "category": "Animal",
      "variants": [
        {
          "type": "Cave",
          "frequency": "Uncommon",
          "numberAppearing": "1d2",
          "size": "Large (12 ft)",
          "move": "120 ft",
          "armorClass": 6,
          "hitDice": "6+6",
          "TREASURE TYPE": "Nil",
          "attacks": 3,
          "damage": "1d8/1d8/1d12",
          "specialAttacks": "Hug: 2d8",
          "specialDefenses": "None",
          "levelXP": "5/225+8/hp"
        },
        {
          "type": "Polar",
          "frequency": "Rare",
          "numberAppearing": "1d6",
          "size": "Large (14 ft)",
          "move": "120 ft; 90 ft swimming",
          "armorClass": 6,
          "hitDice": "8+8",
          "TREASURE TYPE": "Nil",
          "attacks": 3,
          "damage": "1d10/1d10/2d6",
          "specialAttacks": "Hug: 3d6",
          "specialDefenses": "None",
          "levelXP": "6/600+12/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "10% (Cave); Nil (Polar)",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Cave bears are particularly carnivorous giant relics of past ages. Paw hits of 18+ cause additional hug damage. They have good hearing and smell but weak vision. If reduced to 0 hp, they continue fighting for 1d4 rounds or until reaching -9 hp. Polar bears are similar but fight for 1d4+1 rounds or until -13 hp after reaching 0 hp, and can swim effectively."
    },
    {
      "name": "Bear, Lesser",
      "category": "Animal",
      "variants": [
        {
          "type": "Black",
          "frequency": "Common",
          "numberAppearing": "1d3",
          "size": "Medium",
          "move": "120 ft",
          "armorClass": 7,
          "hitDice": "3+3",
          "TREASURE TYPE": "Nil",
          "attacks": 3,
          "damage": "1d3/1d3/1d6",
          "specialAttacks": "Hug: 2d4",
          "specialDefenses": "None",
          "levelXP": "3/75+3/hp"
        },
        {
          "type": "Brown",
          "frequency": "Uncommon",
          "numberAppearing": "1d6",
          "size": "Large (9 ft)",
          "move": "120 ft",
          "armorClass": 6,
          "hitDice": "5+5",
          "TREASURE TYPE": "Nil",
          "attacks": 3,
          "damage": "1d6/1d6/1d8",
          "specialAttacks": "Hug: 2d6",
          "specialDefenses": "None",
          "levelXP": "4/160+6/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Black bears are the least aggressive bear type but will defend themselves and cubs. Paw hits of 18+ cause additional hug damage. Brown bears (including grizzlies) are more aggressive, with good hearing and smell but weak vision. If reduced to 0 hp, brown bears continue fighting for 1d4 rounds or until reaching -9 hp."
    },
    {
      "name": "Bee, Giant",
      "category": "Insect",
      "variants": [
        {
          "name": "Worker Honeybee",
          "description": "Diligent gatherers and hive tenders. Will defend the hive if threatened but usually flee from smoke or fire.",
          "frequency": "Rare",
          "numberAppearing": "1d10 (20d10 in lair)",
          "size": "Medium",
          "move": "90 ft; 300 ft flying (AA: IV)",
          "armorClass": 6,
          "hitDice": "3+1",
          "TREASURE TYPE": "Nil",
          "attacks": 1,
          "damage": "1d3",
          "specialAttacks": "Poisonous sting (once per encounter)",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "20%",
          "intelligence": "Semi-",
          "alignment": "Neutral",
          "levelXP": "3/100+4/hp",
          "behavior": {
            "stingLimit": "Stings once per encounter; 25% chance of dying after stinging",
            "smokeAversion": "Flees from fire and smoke unless hive is threatened"
          }
        },
        {
          "name": "Soldier Honeybee",
          "description": "Larger and more aggressive than workers, tasked with defending the hive. Deadly poison in stinger.",
          "frequency": "Very rare",
          "numberAppearing": "1 (3d6 in lair)",
          "size": "Medium",
          "move": "120 ft; 300 ft flying (AA: III)",
          "armorClass": 5,
          "hitDice": "4+2",
          "TREASURE TYPE": "Nil",
          "attacks": 1,
          "damage": "1d4",
          "specialAttacks": "Poisonous sting (once per encounter)",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "90%",
          "intelligence": "Semi-",
          "alignment": "Neutral",
          "levelXP": "3/150+5/hp",
          "behavior": {
            "defenseRole": "Primary defenders of the hive",
            "stingLimit": "Stings once per encounter; 25% chance of dying after"
          }
        },
        {
          "name": "Bumblebee",
          "description": "Aggressive nest defenders with powerful venom. Found in burrows or wild nests. Deadlier than honeybee types.",
          "frequency": "Rare",
          "numberAppearing": "1 (1d6+6 in lair)",
          "size": "Medium",
          "move": "60 ft; 240 ft flying (AA: II)",
          "armorClass": 5,
          "hitDice": "6+4",
          "TREASURE TYPE": "Nil",
          "attacks": 1,
          "damage": "1d6",
          "specialAttacks": "Poisonous sting (once per encounter)",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "10%",
          "intelligence": "Semi-",
          "alignment": "Neutral",
          "levelXP": "4/300+8/hp",
          "behavior": {
            "aggression": "Very defensive if nest is disturbed",
            "stingLimit": "Same sting mechanic as others"
          }
        }
      ],
      "specialAbilities": {
        "stingDeath": "25% chance of dying after stinging; otherwise regrows slowly",
        "pupae": "Hives contain non-combatant queens (10 HD, no attack) and 2d3 drones (2 HD, no attack)",
        "royalJelly": {
          "chance": "15%",
          "effects": [
            "2d3 potions of extra healing (7th+ level caster)",
            "Unguent of youth (12th+ level caster): Makes user appear 2d3 years younger",
            "Market value: 3d6×1,000 gp"
          ]
        }
      },
      "treasure": {
        "individual": "None",
        "lair": "Honey worth 10d10 gp; 15% chance of royal jelly"
      }
    },    
    {
      "name": "Behir",
      "category": "Monster (Serpentine)",
      "variants": [
        {
          "name": "Behir",
          "description": "Massive serpentine creature with a crocodilian head and twelve clawed legs. It dwells in deep underground lairs or caves and is a deadly, fast-moving predator that can climb and constrict prey.",
          "appearance": {
            "body": "40 ft long snake-like torso",
            "legs": "12 clawed legs",
            "head": "Crocodilian with large, jagged teeth",
            "coloration": "Dark, earthy tones, scales often streaked with lightning patterns"
          },
          "behavior": {
            "alignment": "Neutral evil",
            "habitat": "Subterranean regions, caves, mountains",
            "temperament": "Aggressive, solitary predator"
          },
          "combat": {
            "attacks": "2 (bite + constriction) or 7 (bite + 6 claws)",
            "damage": {
              "constriction": "2d4 (bite) + 1d4 (wrap)",
              "clawSequence": "2d4 + 1d6×6 if wrapping victim",
              "lightning": "4d6+24 (breath weapon, 20 ft bolt every 10 rounds)"
            },
            "constriction": {
              "effect": "Wraps victim and claws them for 6 attacks in subsequent rounds"
            },
            "breathWeapon": {
              "type": "Lightning bolt",
              "range": "20 ft line",
              "damage": "4d6+24 (save vs breath for half)",
              "cooldown": "Once per 10 rounds"
            },
            "swallow": {
              "chance": "On attack roll of 20",
              "effect": "Victim is swallowed whole"
            }
          },
          "movement": {
            "speed": "150 ft",
            "climbing": "Vertical climb at half speed"
          },
          "defenses": {
            "immunities": ["Electricity", "Poison"]
          },
          "treasure": {
            "individual": "None",
            "lair": {
              "gems": "10d4 (60%)",
              "jewellery": "1d8 (30%)",
              "magicItem": "1 miscellaneous item (10%)"
            },
            "location": "Inside the creature’s stomach"
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "1d2",
      "size": "Large",
      "move": "150 ft",
      "armorClass": 4,
      "hitDice": 12,
      "attacks": "2 or 7",
      "damage": "2d4/1d4 or 2d4/1d6/1d6/1d6/1d6/1d6/1d6",
      "specialAttacks": {
        "lightning": "4d6+24, 20 ft bolt every 10 rounds",
        "constriction": "Wraps and claws if bite hits",
        "swallow": "On natural 20, swallows target"
      },
      "specialDefenses": "Immune to electricity and poison",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Low",
      "alignment": "Neutral evil",
      "psionicAbility": "Nil",
      "levelXP": "7/2,750+16/hp"
    },
    {
      "name": "Beetle, Giant",
      "category": "Insect",
      "variants": [
        {
          "name": "Bombardier Beetle",
          "description": "Found in forested areas, scavenges for rotting matter. When threatened, it releases a caustic and stunning chemical cloud.",
          "frequency": "Common",
          "numberAppearing": "3d4",
          "size": "Medium",
          "move": "90 ft",
          "armorClass": 4,
          "hitDice": "2+2",
          "TREASURE TYPE": "Nil",
          "attacks": 1,
          "damage": "2d6",
          "specialAttacks": {
            "acidCloud": {
              "range": "8 ft cube",
              "damage": "3d4",
              "effects": ["20% chance to stun (2d4 rounds)", "20% chance to deafen (2d6 rounds)"],
              "uses": "Every 3 rounds, max 2 uses per 8 hours"
            }
          },
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "Nil",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "3/65+2/hp",
          "treasure": "None"
        },
        {
          "name": "Boring Beetle",
          "description": "Tunnel-dwelling beetle that consumes wood and fungus. May display emergent hive-like intelligence if colony is threatened.",
          "frequency": "Common",
          "numberAppearing": "3d6",
          "size": "Large",
          "move": "60 ft",
          "armorClass": 3,
          "hitDice": 5,
          "TREASURE TYPE": "C, R, S, T",
          "attacks": 1,
          "damage": "5d4",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "40%",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "3/110+4/hp",
          "treasure": {
            "cp": "1d12×1,000 (20%)",
            "sp": "1d6×1,000 (30%)",
            "ep": "1d4×1,000 (10%)",
            "gp": "2d4×100 (40%)",
            "pp": "1d6×10 (50%)",
            "gems": "3d8 (55%)",
            "jewellery": "1d12 (45%)",
            "potions": "2d4 (40%)",
            "scrolls": "1d4 (50%)",
            "magicItems": "Any 2 (10%)"
          }
        },
        {
          "name": "Death Watch Beetle",
          "description": "Camouflages with debris and attacks with deadly bass vibrations. Feared for its droning death call.",
          "frequency": "Very rare",
          "numberAppearing": "1",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 3,
          "hitDice": "9+1",
          "attacks": 1,
          "damage": "2d6",
          "specialAttacks": {
            "deathDrone": {
              "area": "30 ft radius",
              "save": "Save vs death or die",
              "failSave": "Take 4d6 damage",
              "cooldown": "Once every 12 turns"
            }
          },
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "10%",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "7/1,100+12/hp",
          "treasure": "None"
        },
        {
          "name": "Fire Beetle",
          "description": "Nocturnal beetles with glowing red glands. Often harvested for light sources by adventurers.",
          "frequency": "Common",
          "numberAppearing": "3d4",
          "size": "Small",
          "move": "120 ft",
          "armorClass": 4,
          "hitDice": "1+2",
          "TREASURE TYPE": "Nil",
          "attacks": 1,
          "damage": "2d4",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "Nil",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "1/30+1/hp",
          "specialAbilities": {
            "glowingGlands": {
              "effect": "Illuminates 10 ft radius for 1d6 days after death"
            }
          },
          "treasure": "None"
        },
        {
          "name": "Rhinoceros Beetle",
          "description": "Massive beetles that roam the tropics, crushing fruit and vegetation in their path.",
          "frequency": "Uncommon",
          "numberAppearing": "1d6",
          "size": "Large",
          "move": "60 ft",
          "armorClass": 2,
          "hitDice": 12,
          "TREASURE TYPE": "Nil",
          "attacks": 2,
          "damage": "3d8 / 2d8",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "Nil",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "7/1,300+6/hp",
          "treasure": "None"
        },
        {
          "name": "Stag Beetle",
          "description": "Often destructive to farmland, devouring cultivated grains. Found near woodlands and fields.",
          "frequency": "Common",
          "numberAppearing": "2d6",
          "size": "Large",
          "move": "60 ft",
          "armorClass": 3,
          "hitDice": 7,
          "TREASURE TYPE": "Nil",
          "attacks": 3,
          "damage": "4d4 / 1d10 / 1d10",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "Nil",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "4/225+8/hp",
          "treasure": "None"
        },
        {
          "name": "Water Beetle",
          "description": "Dwelling in freshwater depths, this predatory beetle hunts anything it detects by vibration or scent.",
          "frequency": "Common",
          "numberAppearing": "1d12",
          "size": "Medium",
          "move": "30 ft; 120 ft swimming",
          "armorClass": 3,
          "hitDice": 4,
          "TREASURE TYPE": "Nil",
          "attacks": 1,
          "damage": "3d6",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "Nil",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "3/75+3/hp",
          "treasure": "None"
        }
      ]
    },
    {
      "name": "Bird",
      "category": "Animal",
      "variants": [
        {
          "type": "Normal",
          "frequency": "Common",
          "numberAppearing": "1d20",
          "size": "Small",
          "move": "30 ft; 360 ft flying (AA:IV)",
          "armorClass": 6,
          "hitDice": 1,
          "attacks": 3,
          "damage": "1d2/1d2/1",
          "specialAttacks": "See below",
          "specialDefenses": "None",
          "levelXP": "1/15 +1/hp"
        },
        {
          "type": "Huge",
          "frequency": "Rare",
          "numberAppearing": 1,
          "size": "Small",
          "move": "30 ft; 360 ft flying (AA:IV)",
          "armorClass": 5,
          "hitDice": 2,
          "attacks": 3,
          "damage": "1d4/1d4/2",
          "specialAttacks": "See below",
          "specialDefenses": "None",
          "levelXP": "2/40 +1/hp"
        },
        {
          "type": "Giant",
          "frequency": "Very rare",
          "numberAppearing": 1,
          "size": "Medium",
          "move": "30 ft; 360 ft flying (AA:IV)",
          "armorClass": 7,
          "hitDice": 4,
          "attacks": 3,
          "damage": "1d6/1d6/2d6",
          "specialAttacks": "See below",
          "specialDefenses": "None",
          "levelXP": "4/105 +3/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Birds of prey (eagles, hawks, falcons) can perform dive attacks from 120+ ft, gaining +2 to hit and double talon damage. Giant birds (likely magical in origin) can dive from 60 ft with +4 to hit and double talon damage. Some giant birds are rumored to possess intelligence and speech capability."
    },
    {
      "name": "Blindheim",
      "category": "Humanoid (Subterranean)",
      "variants": [
        {
          "name": "Blindheim",
          "description": "A strange subterranean frog-like creature with eyes that emit beams of intense, blinding light. Highly territorial and aggressive, they dwell in the depths of the underworld.",
          "appearance": {
            "form": "Humanoid frog",
            "color": "Yellowish skin",
            "eyes": "Large, luminescent — project blinding beams"
          },
          "behavior": {
            "alignment": "Chaotic evil",
            "habitat": "Deep underground caverns and tunnels",
            "aggression": "Attack intruders on sight, especially in groups"
          },
          "combat": {
            "attacks": 1,
            "damage": "1d8",
            "special": {
              "blindingLight": {
                "range": "30 ft",
                "effect": "Save vs aimed magic item or be blinded for 1d8+12 turns",
                "penalty": "-3 to save if victim has infravision"
              },
              "fightingBlind": {
                "options": {
                  "attackPenalty": "-2 if avoiding gaze",
                  "normalAttack": "If immune to light"
                }
              }
            }
          },
          "defenses": {
            "specialDefenses": "None"
          },
          "speech": {
            "intelligence": "Animal",
            "language": "None"
          },
          "treasure": {
            "individual": "None",
            "lair": {
              "cp": "2d6×1,000 (20%)",
              "sp": "1d6×1,000 (35%)",
              "ep": "1d6×1,000 (20%)",
              "gems": "1d4 (20%)",
              "jewellery": "1d4 (25%)",
              "magicItems": "Random weapon or magic item (15%)"
            }
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d4",
      "size": "Small",
      "move": "90 ft",
      "armorClass": 3,
      "hitDice": "4+2",
      "attacks": 1,
      "damage": "1d8",
      "specialAttacks": {
        "blinding": "Twin beams of bright light from eyes; save or be blinded"
      },
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "5%",
      "intelligence": "Animal",
      "alignment": "Chaotic evil",
      "psionicAbility": "Nil",
      "levelXP": "3/110+5/hp"
    },
    {
      "name": "Blink Dog",
      "category": "Magical Beast",
      "variants": [
        {
          "name": "Blink Dog",
          "description": "Intelligent, teleporting canines known for their loyalty, tactical cunning, and unerring ability to blink unpredictably in and out of combat. Natural enemies of coeurls.",
          "appearance": {
            "size": "Medium (3 ft at shoulder)",
            "coloration": "Dark brown with white highlights"
          },
          "behavior": {
            "alignment": "Lawful good",
            "habitat": "Forests, plains, or magical glades",
            "intelligence": "Comparable to average human",
            "communication": "High-pitched barks and low growls",
            "packTactics": "Fight in coordinated groups, blinking to flank or harass enemies",
            "blinkTriggers": "If pack suffers >25% losses, all remaining dogs blink away and flee"
          },
          "combat": {
            "attacks": 1,
            "damage": "1d6",
            "specialAttacks": {
              "rearAttack": "75% chance to blink into rear or flank position, bypassing shield and Dex bonuses",
              "blink": {
                "triggerRoll": "Blink occurs on roll of 12+ on 1d20 each round",
                "targetRoll": "01–15: behind, 16–18: right flank, 19: left flank, 20: front",
                "limitations": "Never teleports into solid objects or occupied space"
              }
            },
            "defensiveTactics": "Uses blinking defensively to avoid danger or withdraw"
          },
          "specialAbilities": {
            "teleportation": "Short-range blink-style teleportation as natural ability"
          },
          "lair": {
            "probability": "20%",
            "pups": {
              "chance": "60%",
              "number": "3d4",
              "combatStats": {
                "hitDice": "1",
                "damage": "1d2",
                "tactics": "More likely to flee than fight"
              },
              "value": "Loyal companion to good-aligned humans; can be sold for 1,500 gp (±100–600 gp)"
            },
            "treasure": {
              "cp": "2d6×1,000 (20%)",
              "sp": "1d6×1,000 (30%)",
              "ep": "1d6×1,000 (15%)",
              "gems": "1d6 (20%)",
              "jewellery": "1d4 (25%)",
              "magicItems": "2 random magic items or weapons (15%)"
            }
          },
          "relationships": {
            "enemies": ["Coeurls (attack on sight)"],
            "companions": ["Good-aligned humanoids (if tamed young)"]
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "4d4",
      "size": "Medium (3 ft at shoulder)",
      "move": "120 ft",
      "armorClass": 5,
      "hitDice": 4,
      "attacks": 1,
      "damage": "1d6",
      "specialAttacks": {
        "rearAttack": "75% chance to attack from rear or flank due to blinking"
      },
      "specialDefenses": "Teleportation (blink)",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Average",
      "alignment": "Lawful good",
      "psionicAbility": "Nil",
      "levelXP": "4/175 + 5/hp"
    },    
    {
      "name": "Boar",
      "category": "Animal",
      "variants": [
        {
          "type": "Wild",
          "frequency": "Common",
          "numberAppearing": "1d12",
          "size": "Medium",
          "move": "150 ft",
          "armorClass": 7,
          "hitDice": "3+3",
          "attacks": 1,
          "damage": "3d4",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "3/75+3/hp"
        },
        {
          "type": "Giant",
          "frequency": "Uncommon",
          "numberAppearing": "2d4",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 6,
          "hitDice": 7,
          "attacks": 1,
          "damage": "3d6",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "4/225+8/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Aggressive omnivores related to pigs. Wild boar groups include sows (3 HD, 2d4 damage) and young (which flee). Both boars and sows fight for 1d4+1 rounds after reaching 0 hp, or until -7 hp. Giant boars are prehistoric ancestors, even more aggressive, fighting to -11 hp or for 1d4 rounds after 0 hp. Young giants have 2-6 HD and do 1d4 to 3d4 damage."
    },
    {
      "name": "Boar, Warthog",
      "category": "Animal",
      "frequency": "Common",
      "numberAppearing": "1d6",
      "size": "Small",
      "move": "120 ft",
      "armorClass": 7,
      "hitDice": 3,
      "attacks": 2,
      "damage": "2d4/2d4",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "3/50+2/hp",
      "treasure": "None",
      "description": "Tropical relatives of common boars, warthogs attack only if threatened or cornered. Groups larger than two consist of mated pairs with young. All fight for 1-2 rounds below 0 hit points, or to -6 hp. Young have 1-2 HD and do 1d4-1 or 1d4+1 damage."
    },
    {
      "name": "Bugbear",
      "category": "Humanoid",
      "frequency": "Uncommon",
      "numberAppearing": "6d6",
      "size": "Large (7 ft tall)",
      "move": "90 ft",
      "armorClass": 5,
      "hitDice": "3+1",
      "attacks": 1,
      "damage": "2d4 or by weapon",
      "specialAttacks": "Surprise on a 1-3 on 1d6",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Low to average",
      "alignment": "Chaotic evil",
      "levelXP": "3/135+4/hp",
      "description": "Bugbears are stealthy goblinoid raiders with a talent for surprising prey. Their lair contains chieftains, sub-chiefs, females, and young. They use looted weapons and speak hobgoblin, goblin, and their own tongue.",
      "leaders": {
        "per_12": {
          "leader": {
            "hitPoints": "22-25",
            "armorClass": 4,
            "attacks": "As 4 HD monster",
            "damage": "+1 on damage caused"
          }
        },
        "per_24": {
          "additions": [
            {
              "chief": {
                "hitPoints": "28-30",
                "armorClass": 3,
                "attacks": "As 4 HD monster",
                "damage": "+2 damage"
              }
            },
            {
              "subChief": {
                "hitPoints": "22-25",
                "armorClass": 4,
                "attacks": "As 4 HD monster",
                "damage": "+1 on damage caused"
              }
            }
          ]
        },
        "lair": {
          "leadership": "Always a chief and sub-chief",
          "females": "50% of males; fight as hobgoblins if in life-threatening situation",
          "young": "50% of males; fight as kobolds if in life-threatening situation"
        }
      },
      "equipment": {
        "weapons": {
          "types": [
            "Swords",
            "Morning stars (wooden clubs with spikes)",
            "Spears",
            "Axes",
            "Maces",
            "Hammers"
          ],
          "missileUse": {
            "types": ["Spears", "Axes", "Maces", "Hammers"],
            "range": {
              "maximum": "4\"",
              "medium": "Under 2\""
            }
          }
        }
      },
      "specialAbilities": {
        "strength": "Strong enough to throw heavy weapons up to 4\""
      },
      "treasure": {
        "individual": "4d6 sp, 2d4 gp",
        "lair": {
          "cp": "1d8×1,000",
          "gp": "1d3×1,000",
          "gems": {"amount": "1d8", "chance": "30%"},
          "jewellery": {"amount": "1d4", "chance": "20%"},
          "magic_items": {"type": "weapon", "chance": "10%"}
        }
      }
    },
    {
      "name": "Bulette",
      "category": "Monster (Magical Beast)",
      "variants": [
        {
          "name": "Bulette",
          "description": "Feared apex predators known as 'land sharks' for their burrowing ambushes. Engineered monstrosities with armored plates, a massive maw, and an insatiable hunger—especially for horses. Elves and dwarves are generally avoided as prey.",
          "appearance": {
            "body": "Heavily armored, plated like a turtle or armadillo",
            "head": "Large, shark-like jaw filled with gnashing teeth",
            "size": "Large, ~9 ft tall at hump"
          },
          "behavior": {
            "alignment": "Neutral",
            "habitat": "Hills, plains, and open terrain",
            "temperament": "Aggressively territorial",
            "diet": "Carnivore—especially fond of horses",
            "reproduction": "Unknown; believed to be artificially created",
            "tactics": "Burrows just below the surface, ambushing prey from below"
          },
          "combat": {
            "attacks": 3,
            "damage": "3d6 / 3d6 / 4d12 (bite)",
            "movement": {
              "surface": "140 ft",
              "burrowing": "30 ft"
            },
            "armorClass": {
              "body": -2,
              "eyes": 4,
              "underbelly": 6
            },
            "specialAttacks": {
              "leap": {
                "range": "8 ft vertical",
                "effect": "Attempts to land on victim and attack with all four limbs"
              }
            }
          },
          "defenses": {
            "armor": "Heavily plated back and flanks; underbelly and eyes are vulnerable"
          },
          "treasure": {
            "individual": "None",
            "lair": "None—nomadic and never lairs",
            "special": {
              "armorPlates": "Highly prized by armorers; can be used to craft +1 or +2 shields"
            }
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d2",
      "size": "Large",
      "move": "140 ft; 30 ft burrowing",
      "armorClass": "-2 (back) / 4 (eyes) / 6 (underbelly)",
      "hitDice": 9,
      "attacks": 3,
      "damage": "3d6 / 3d6 / 4d12",
      "specialAttacks": {
        "leap": "Can leap 8 ft and land atop a target, attacking with all four feet"
      },
      "specialDefenses": "Heavily armored body; weak points at eyes and underbelly",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "psionicAbility": "Nil",
      "levelXP": "8/2,000+12/hp"
    },
    {
      "name": "Camel",
      "category": "Animal",
      "frequency": "Common",
      "numberAppearing": "1d12",
      "size": "Large",
      "move": "210 ft dromedary / 180 ft bactrian",
      "armorClass": 7,
      "hitDice": 3,
      "attacks": 1,
      "damage": "1d4",
      "specialAttacks": "Spit",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "2/50+2/hp",
      "treasure": "None",
      "description": "Ornery beasts of burden in two varieties: single-humped dromedaries (warmer climates) and two-humped bactrians (more adaptable, 30 ft slower). Both can carry up to 6,000 gp weight (halving movement) or 4,000-5,000 gp (reducing speed to 60 ft). They bite to attack and can spit (50% chance, with 25% chance to blind for 1d3 rounds)."
    },
    {
      "name": "Carbuncle",
      "category": "Magical Beast",
      "variants": [
        {
          "name": "Carbuncle",
          "description": "Small armadillo-like creatures with a magical ruby embedded in their forehead. Agents of chaos, they spread discord through lies and betrayal.",
          "appearance": {
            "size": "Small",
            "feature": "Large ruby set above its eyes"
          },
          "behavior": {
            "alignment": "Chaotic neutral",
            "intelligence": "Average (empathic)",
            "habitat": "Woodlands or ruins",
            "diet": "Leaves and small insects",
            "telepathy": "Minor empathic communication",
            "motive": "Joins adventuring parties to spread mischief"
          },
          "specialAbilities": {
            "gem": {
              "value": "At least 500 gp (randomized)",
              "regeneration": "Regrows over several months if given willingly",
              "shatter": "Destroyed if carbuncle dies"
            },
            "enchantment": "Can be persuaded to give gem only via charm or magic"
          },
          "treasure": "Gemstone (see behavior)",
          "lairProbability": "10%"
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "1",
      "size": "Small",
      "move": "30 ft",
      "armorClass": 2,
      "hitDice": 1,
      "attacks": "None",
      "damage": "None",
      "specialAttacks": "None",
      "specialDefenses": "See gem behavior",
      "magicResistance": "Standard",
      "intelligence": "Average",
      "alignment": "Chaotic neutral",
      "levelXP": "1/5+1/hp"
    },
    {
      "name": "Carcass Creeper",
      "category": "Aberration",
      "variants": [
        {
          "name": "Carcass Creeper",
          "description": "A grotesque blend of cutworm and squid, the carcass creeper is a fast, paralytic horror that dwells underground and feeds on corpses.",
          "appearance": {
            "form": "Segmented worm with many tentacles",
            "feature": "Armored head, soft body"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Non-",
            "habitat": "Subterranean lairs",
            "instinct": "Lays eggs in fresh corpses"
          },
          "combat": {
            "attacks": 8,
            "damage": "Paralysis (no damage)",
            "reach": "2 ft per tentacle"
          },
          "armorClass": {
            "head": 3,
            "body": 7
          },
          "treasure": {
            "cp": "1d8×1,000 (50%)",
            "sp": "1d6×1,000 (25%)",
            "ep": "1d4×1,000 (25%)",
            "gp": "1d3×1,000 (25%)",
            "gems": "1d8 (30%)",
            "jewellery": "1d4 (20%)",
            "magicItem": "1 weapon, armor, or miscellaneous (20%)"
          }
        }
      ],
      "frequency": "Uncommon",
      "numberAppearing": "1d6",
      "size": "Large",
      "move": "120 ft",
      "armorClass": "3/7",
      "hitDice": "3+1",
      "attacks": 8,
      "damage": "Paralysis",
      "specialAttacks": "Paralysis",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "50%",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "3/105+3/hp"
    },
    {
      "name": "Caryatid Column",
      "category": "Construct",
      "variants": [
        {
          "name": "Caryatid Column",
          "description": "Magical guardian statues carved in humanoid form. They animate to defend treasures or locations, then return to statue form.",
          "appearance": {
            "form": "Intricately carved humanoid statue (usually a maiden)",
            "pose": "Holds faintly outlined sword"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Non-",
            "activation": "Triggers when someone opens a door, lifts an item, or enters room",
            "combat": "Returns to statue form after defending"
          },
          "combat": {
            "attacks": 1,
            "damage": "2d4 (sword)",
            "weaponBreak": "25% chance to break weapon on hit, reduced by 5% per +1"
          },
          "specialDefenses": {
            "damageReduction": "Normal weapons half damage",
            "magicImmunity": "Immune to magical weapon effects",
            "savingThrows": "+4 to all saves"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d12",
      "size": "Medium",
      "move": "60 ft",
      "armorClass": 5,
      "hitDice": 5,
      "attacks": 1,
      "damage": "2d4",
      "specialAttacks": "None",
      "specialDefenses": "See weapon break and immunity",
      "magicResistance": "All saves at +4",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "5/110 + 3/hp"
    },    
    {
      "name": "Cat",
      "category": "Animal",
      "variants": [
        {
          "type": "Domestic",
          "frequency": "Common",
          "numberAppearing": "1 or 2d6",
          "size": "Small",
          "move": "50 ft",
          "armorClass": 6,
          "hitDice": "1d2 hp",
          "attacks": 1,
          "damage": "1d2-1",
          "specialAttacks": "Rear claws",
          "specialDefenses": "None",
          "levelXP": "1/3+1/hp"
        },
        {
          "type": "Wild",
          "frequency": "Uncommon",
          "numberAppearing": "1 or 1d4+1",
          "size": "Small",
          "move": "180 ft",
          "armorClass": 5,
          "hitDice": "1d6 hp",
          "attacks": 3,
          "damage": "1/1/1d2",
          "specialAttacks": "Rear claws",
          "specialDefenses": "None",
          "levelXP": "1/10+1/hp"
        },
        {
          "type": "Lynx, Giant",
          "frequency": "Rare",
          "numberAppearing": "1d4",
          "size": "Medium",
          "move": "120 ft",
          "armorClass": 5,
          "hitDice": "2+2",
          "attacks": 3,
          "damage": "1d2/1d2/1d4",
          "specialAttacks": "Rear claws; surprise on a 1d4",
          "specialDefenses": "Thief skills",
          "levelXP": "3/90+3/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "75% (Domestic); 5% (Wild and Giant Lynx)",
      "intelligence": "Animal (Very for Giant Lynx)",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Cats are agile and rarely surprised (only on 1 on d6), while able to surprise others on 1-3 on d6. Cats exceeding their needed 'to hit' score by 4+ can rake with rear claws (roll damage twice). Black cats serving as mage familiars grant excellent hearing and night vision. Giant lynxes are magical beings dwelling in icy wastes, possessing thief skills (90% Hide/Move Silently/Climb Walls, 75% Find/Remove Traps) and their own language."
    },
    {
      "name": "Caterwaul",
      "category": "Magical Beast",
      "variants": [
        {
          "name": "Caterwaul",
          "description": "Upright-walking feline predators that haunt dark caves, known for their eerie screech and deadly agility. Fierce and territorial.",
          "appearance": {
            "form": "Black panther-like, walks upright or on all fours",
            "movement": "180 ft upright, 240 ft sprint on all fours"
          },
          "behavior": {
            "alignment": "Chaotic evil",
            "intelligence": "Low",
            "habitat": "Caves and shadowy terrain",
            "instinct": "Ambush predators attracted to shiny objects"
          },
          "combat": {
            "attacks": "3 (claw, claw, bite)",
            "damage": "1d4 / 1d4 / 1d6",
            "screech": {
              "effect": "All within 60 ft take 1d8 damage",
              "trigger": "When pouncing"
            },
            "dexterityEffects": {
              "acBonus": "Varies from 0 to -7",
              "attacksPerRound": "Varies from 1/1 to 5/2",
              "table": "Roll d%; reference table for AC/attacks"
            }
          },
          "specialDefenses": {
            "stealth": "75% hide in shadows, 75% move silently",
            "climbing": "Scales walls with 5% failure chance",
            "surprise": "Can only be surprised on 1 in 10"
          },
          "treasure": {
            "gp": "1d6×1,000 (50%)",
            "gems": "1d8 (40%)",
            "jewellery": "5d6 (40%)",
            "magicItems": "2d4 potions + 1 item (40%)"
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "1",
      "size": "Medium",
      "move": "180 ft (upright), 240 ft (sprint)",
      "armorClass": 6,
      "hitDice": "4+2",
      "attacks": 3,
      "damage": "1d4 / 1d4 / 1d6",
      "specialAttacks": "Screech (1d8 in 60 ft)",
      "specialDefenses": "See stealth, climbing, surprise",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "5/400+5/hp"
    },    
    {
      "name": "Cattle",
      "category": "Animal",
      "variants": [
        {
          "type": "Buffalo",
          "frequency": "Uncommon",
          "numberAppearing": "4d6",
          "size": "Large",
          "move": "150 ft",
          "armorClass": 7,
          "hitDice": 5,
          "attacks": 2,
          "damage": "1d8/1d8",
          "specialAttacks": "Charge",
          "specialDefenses": "Head is AC 3",
          "levelXP": "3/110+4/hp"
        },
        {
          "type": "Bull",
          "frequency": "Common",
          "numberAppearing": "1, plus 50% chance of 3d6 cattle",
          "size": "Large",
          "move": "150 ft",
          "armorClass": 7,
          "hitDice": 4,
          "attacks": 2,
          "damage": "1d6/1d6",
          "specialAttacks": "Charge",
          "specialDefenses": "None",
          "levelXP": "3/75+3/hp"
        },
        {
          "type": "Wild",
          "frequency": "Common",
          "numberAppearing": "20d10",
          "size": "Large",
          "move": "150 ft",
          "armorClass": 7,
          "hitDice": "2-4 HD",
          "attacks": 1,
          "damage": "1d4",
          "specialAttacks": "Stampede",
          "specialDefenses": "None",
          "levelXP": "1/10+1/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Buffalo attack if approached within 60 ft, potentially causing the whole herd to charge. Charges (minimum 40 ft) deal 3d6 impact plus 1d4 trampling damage. 50% are non-aggressive. Bulls are very aggressive (75% chance to charge if approached within 80 ft), dealing 3d4 impact plus 1d4 trampling damage over minimum 30 ft. Wild cattle are skittish herd animals; stampedes cause characters to be trampled by 2d4 animals for 1d4 damage each."
    },
    {
      "name": "Centipede",
      "category": "Vermin",
      "variants": [
        {
          "name": "Large Centipede",
          "frequency": "Uncommon",
          "numberAppearing": "5d6",
          "size": "Small",
          "move": "210 ft",
          "armorClass": 9,
          "hitDice": "1 hp",
          "attacks": 1,
          "damage": "None",
          "specialAttacks": "Poison (save at +4, 4d4 damage)",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "15%",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "2/31"
        },
        {
          "name": "Huge Centipede",
          "frequency": "Common",
          "numberAppearing": "2d12",
          "size": "Small",
          "move": "150 ft",
          "armorClass": 9,
          "hitDice": "1 to 2 hp",
          "attacks": 1,
          "damage": "None",
          "specialAttacks": "Poison (save at +4, lethal)",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "15%",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "2/30+1/hp"
        },
        {
          "name": "Giant Centipede",
          "frequency": "Very rare",
          "numberAppearing": "1d4",
          "size": "Man-sized",
          "move": "180 ft",
          "armorClass": 5,
          "hitDice": 3,
          "attacks": 1,
          "damage": "1d3",
          "specialAttacks": "Poison (save or die, or 1d8 acid dmg on save)",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "15%",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "3/125+3/hp"
        }
      ],
      "treasure": "None"
    },
    {
      "name": "Chimæra",
      "category": "Magical Beast",
      "variants": [
        {
          "name": "Chimæra",
          "description": "A three-headed hybrid of lion, goat, and red dragon with wings. Vicious and chaotic, capable of six natural attacks and fiery breath.",
          "frequency": "Rare",
          "numberAppearing": "1d4",
          "size": "Large",
          "move": "90 ft; 180 ft flying (AA: II)",
          "armorClass": 4,
          "hitDice": 9,
          "attacks": 6,
          "damage": "1d3 / 1d3 / 1d4 / 2d6 / 3d4",
          "specialAttacks": {
            "breath": "60 ft cone of fire (3d8, save for half)"
          },
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "40%",
          "intelligence": "Semi-",
          "alignment": "Chaotic evil",
          "levelXP": "7/1,300+12/hp",
          "speech": "Speaks crude red dragon tongue",
          "treasure": {
            "sp": "1d20×1,000 (10%)",
            "ep": "1d12×1,000 (15%)",
            "gp": "1d10×1,000 (40%)",
            "pp": "1d8×100 (35%)",
            "gems": "3d10 (20%)",
            "jewellery": "1d10 (10%)",
            "magicItems": "3 items, 1 scroll, 1 potion (30%)"
          }
        },
        {
          "name": "Gorgimæra",
          "description": "A variant of the chimæra with a gorgon head replacing the goat’s. Capable of both fire breath and petrifying gas.",
          "frequency": "Very rare",
          "numberAppearing": "1",
          "size": "Large",
          "move": "120 ft; 150 ft flying (AA: II)",
          "armorClass": 3,
          "hitDice": "10+1",
          "attacks": 5,
          "damage": "1d3 / 1d3 / 2d4 / 1d4 / 2d4 / 3d4",
          "specialAttacks": {
            "fireBreath": "Same as chimæra",
            "gorgonBreath": "30 ft cone of petrifying gas"
          },
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "30%",
          "intelligence": "Semi-",
          "alignment": "Chaotic evil",
          "levelXP": "8/2,250+14/hp",
          "speech": "Same language as chimæra",
          "treasure": {
            "sp": "1d20×1,000 (20%)",
            "ep": "1d12×1,000 (25%)",
            "gp": "1d20×1,000 (50%)",
            "pp": "1d10×100 (40%)",
            "gems": "4d10 (25%)",
            "jewellery": "1d12 (15%)",
            "magicItems": "3 items, 1 scroll, 1 potion (40%)"
          }
        }
      ]
    },
    {
      "name": "Cockatrice",
      "category": "Magical Beast",
      "variants": [
        {
          "name": "Cockatrice",
          "description": "A hybrid of rooster and serpent, capable of turning creatures to stone with a mere touch. Often flies with leathery wings in search of prey to petrify.",
          "appearance": {
            "head": "Cock",
            "body": "Serpentine",
            "wings": "Functional, allows flight"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Animal",
            "habitat": "Caves, ruins, deep forests",
            "legend": "Said to be born from a cock’s egg hatched by a serpent"
          },
          "combat": {
            "attacks": 1,
            "damage": "1d3",
            "specialAttacks": {
              "petrification": {
                "trigger": "Touch",
                "effect": "Save vs petrification or turn to stone",
                "notes": "Affects astral and æthereal beings"
              }
            }
          },
          "treasure": {
            "cp": "1d10×1,000 (5%)",
            "sp": "1d12×1,000 (25%)",
            "ep": "1d6×1,000 (25%)",
            "gp": "1d8×1,000 (25%)",
            "gems": "1d12 (15%)",
            "jewellery": "1d8 (10%)",
            "magicItems": "3 items and 1 scroll (35%)"
          }
        }
      ],
      "frequency": "Uncommon",
      "numberAppearing": "1d6",
      "size": "Small",
      "move": "60 ft; 180 ft flying (AA: IV)",
      "armorClass": 6,
      "hitDice": 5,
      "attacks": 1,
      "damage": "1d3",
      "specialAttacks": "Touch petrifies",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "4/170 + 4/hp"
    },
    {
      "name": "Coeurl",
      "category": "Alien Beast",
      "variants": [
        {
          "name": "Coeurl",
          "description": "Tentacle-limbed panther-like alien predators that feed on the 'id' or life force. Elusive, intelligent, and deadly. Mortal enemies of blink dogs.",
          "appearance": {
            "body": "Feline, black",
            "tentacles": "Two long, whip-like"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Average",
            "habitat": "Remote wilderness",
            "communication": "Telepathic (seldom used)",
            "enemy": "Attacks blink dogs on sight"
          },
          "combat": {
            "attacks": 2,
            "damage": "2d4 / 2d4",
            "specialDefenses": {
              "savingThrows": "Save at +6"
            }
          },
          "treasure": {
            "cp": "1d8×1,000 (15%)",
            "sp": "2d6×1,000 (20%)",
            "ep": "1d6×1,000 (5%)",
            "gp": "1d8×1,000 (35%)",
            "gems": "2d6 (15%)",
            "jewellery": "1d8 (10%)",
            "magicItems": "2 items (25%)"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d4",
      "size": "Large",
      "move": "150 ft",
      "armorClass": 2,
      "hitDice": "6+6",
      "attacks": 2,
      "damage": "2d4 / 2d4",
      "specialAttacks": "None",
      "specialDefenses": "Save at +6",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Average",
      "alignment": "Neutral",
      "levelXP": "6/400+6/hp"
    },
    {
      "name": "Coffer Corpse",
      "category": "Undead",
      "turnResistance": 7,
      "frequency": "Rare",
      "numberAppearing": "1",
      "size": "Man-sized",
      "move": "60 ft",
      "armorClass": 8,
      "hitDice": "2",
      "attacks": "1",
      "damage": "1d6 or by weapon",
      "specialAttacks": "Strangle",
      "specialDefenses": "Can only be hit by magical weapons; fakes death if struck by normal weapon for 6+ damage",
      "magicResistance": "Standard",
      "lairProbability": "80%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "2/30 + 2/hp",
      "treasure": {
        "cp": {"amount": "1d8×1,000", "chance": "50%"},
        "sp": {"amount": "1d6×1,000", "chance": "25%"},
        "ep": {"amount": "1d4×1,000", "chance": "25%"},
        "gp": {"amount": "1d3×1,000", "chance": "25%"},
        "gems": {"amount": "1d8", "chance": "30%"},
        "jewellery": {"amount": "1d4", "chance": "20%"},
        "magic_items": {"amount": 1, "chance": "10%"}
      },
      "description": "A coffer corpse resembles a zombie but can only be harmed by magic weapons. When hit for 6+ damage by normal weapons, it falls as if dead only to rise again next round, causing all witnesses to save vs. fear. When attacking bare-handed, it grabs victims by the throat (1d6 damage) and continues strangling for 1d6 damage each round without needing additional attack rolls."
    },
    {
      "name": "Couatl",
      "category": "Celestial Serpent",
      "variants": [
        {
          "name": "Couatl",
          "description": "Feathered winged serpents of great intelligence and divine purpose. Rarely intervene in mortal affairs. Treated as gods in remote tropical lands.",
          "appearance": {
            "form": "Winged serpent",
            "color": "Brightly feathered"
          },
          "behavior": {
            "alignment": "Lawful good",
            "intelligence": "Genius",
            "habitat": "Remote tropical regions",
            "abilities": ["Polymorph", "Turn æthereal", "Spellcasting"]
          },
          "combat": {
            "attacks": 2,
            "damage": "1d3 / 2d4",
            "poison": {
              "bite": "Save or die"
            },
            "constriction": {
              "effect": "2d4 damage on grab, continues each round"
            }
          },
          "spellcasting": {
            "types": {
              "mage5": "45%",
              "cleric7": "35%",
              "mage/cleric": "20%"
            }
          },
          "treasure": {
            "cp": "1d8×1,000 (50%)",
            "sp": "1d6×1,000 (25%)",
            "ep": "1d4×1,000 (25%)",
            "gp": "1d3×1,000 (25%)",
            "pp": "3d4×100 (30%)",
            "gems": "2d10 (55%)",
            "jewellery": "1d12 (50%)",
            "magicItems": "1 item (15%)"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d4",
      "size": "Medium",
      "move": "60 ft; 180 ft flying (AA: VI)",
      "armorClass": 5,
      "hitDice": 9,
      "attacks": 2,
      "damage": "1d3 / 2d4",
      "specialAttacks": "Poison, constriction, spell use",
      "specialDefenses": "Æthereal ability",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Genius",
      "alignment": "Lawful good",
      "levelXP": "8/2,000+12/hp"
    },
    {
      "name": "Crabman",
      "category": "Humanoid (Aquatic)",
      "variants": [
        {
          "name": "Crabman",
          "description": "Amphibious humanoids with pincers and hard shells. Peaceful but prone to frenzied raids inland. Prized silver above all.",
          "appearance": {
            "height": "9 ft",
            "coloration": "Reddish-brown exoskeleton",
            "hands": "Replaced by pincers"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Low to average",
            "habitat": "Coastal caves and shorelines",
            "frenzy": "Occasionally form raiding parties of 30–40",
            "silverAttraction": "Will attack on sight if silver is visible"
          },
          "combat": {
            "attacks": 2,
            "damage": "1d4 / 1d4"
          },
          "treasure": {
            "sp": "3d8 per individual"
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "2d6",
      "size": "Large",
      "move": "90 ft; 60 ft swimming",
      "armorClass": 4,
      "hitDice": 3,
      "attacks": 2,
      "damage": "1d4 / 1d4",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Low to average",
      "alignment": "Neutral",
      "levelXP": "2/40 + 2/hp"
    },
    {
      "name": "Crocodile",
      "category": "Animal",
      "variants": [
        {
          "type": "Normal",
          "frequency": "Common",
          "numberAppearing": "3d8",
          "size": "Large",
          "move": "60 ft; 120 ft swimming",
          "armorClass": 4,
          "hitDice": 3,
          "attacks": 2,
          "damage": "2d4/1d12",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "2/50+2/hp"
        },
        {
          "type": "Giant",
          "frequency": "Rare",
          "numberAppearing": "1 to 2d6",
          "size": "Large",
          "move": "60 ft; 120 ft swimming",
          "armorClass": 3,
          "hitDice": 7,
          "attacks": 2,
          "damage": "3d6/2d10",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "5/225+8/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Crocodiles may be found in shallow fresh or salt water. They surprise on 1-3 on d6, lurking concealed before attacking prey. They eat almost anything within reach. Cold is their weakness, halving their movement speed. Giant crocodiles are typically found in prehistoric or saltwater environments and are even more fearsome opponents."
    },
    {
      "name": "Crypt Thing",
      "category": "Undead-like (not truly undead)",
      "variants": [
        {
          "name": "Crypt Thing",
          "description": "Lurking skeletal guardians that teleport attackers to random locations when disturbed. Immune to turning despite their appearance.",
          "appearance": {
            "form": "Cloaked skeleton",
            "note": "Not truly undead"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Very",
            "habitat": "Underground lairs",
            "reaction": "Does not attack unless first attacked",
            "speech": "Speaks Common"
          },
          "combat": {
            "attacks": 1,
            "damage": "1d8 (claw)",
            "teleport": {
              "trigger": "When attacked",
              "effect": "Save vs spell or be teleported 100–1,000 ft or 1 dungeon level up/down",
              "roll": "d% determines direction",
              "safe": "Never teleports into solid objects"
            }
          },
          "specialDefenses": {
            "immunity": "Immune to non-magical weapons, cannot be turned"
          },
          "treasure": {
            "cp": "1d3×1,000 (20%)",
            "sp": "1d4×1,000 (25%)",
            "ep": "1d4×1,000 (25%)",
            "gp": "1d4×1,000 (30%)",
            "pp": "1d6×100 (30%)",
            "gems": "10d6 (55%)",
            "jewellery": "5d6 (50%)",
            "magicItems": "3 items (50%)"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 3,
      "hitDice": 6,
      "attacks": 1,
      "damage": "1d8",
      "specialAttacks": "Teleport attackers (see rules)",
      "specialDefenses": "Immune to non-magical weapons and turning",
      "magicResistance": "Standard",
      "lairProbability": "100%",
      "intelligence": "Very",
      "alignment": "Neutral",
      "levelXP": "4/160 + 4/hp"
    },
    {
      "name": "Crustacean, Giant",
      "category": "Animal",
      "variants": [
        {
          "type": "Crab",
          "frequency": "Rare",
          "numberAppearing": "2d6",
          "size": "Large",
          "move": "90 ft",
          "armorClass": 3,
          "hitDice": 3,
          "attacks": 2,
          "damage": "2d4/2d4",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "3/75+3/hp"
        },
        {
          "type": "Crayfish",
          "frequency": "Uncommon",
          "numberAppearing": "2d6",
          "size": "Large",
          "move": "60 ft; 120 ft swimming",
          "armorClass": 4,
          "hitDice": "4+4",
          "attacks": 2,
          "damage": "2d6/2d6",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "3/110+4/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Giant crabs are found near fresh or salt water and surprise on 1-4 on 1d6. They typically rush prey from concealment, using their eyestalks to scout the area. Giant crayfish inhabit freshwater environments and surprise on 1-3 on 1d6, but lack the eyestalks that give crabs their superior surprise capability."
    },
    {
      "name": "Cyclops",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Very rare",
      "numberAppearing": "1d2",
      "size": "Large (20 ft)",
      "move": "150 ft",
      "armorClass": 2,
      "hitDice": 13,
      "attacks": 1,
      "damage": "6d6 or 4d10",
      "specialAttacks": "Rock throwing",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "80%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "7/3,300 + 17/hp",
      "description": "Cyclopes are extremely tall, ugly humanoids, each with a single eye centred under its slightly drooping brow. These oafish, antisocial creatures prefer to inhabit lonesome environs, such as out-of-the-way, otherwise deserted islands.",
      "specialAbilities": {
        "rockThrowing": {
          "range": "60 ft",
          "damage": ""
        }
      },
      "treasure": {
        "cp": {"amount": "1d10×1,000", "chance": "5%"},
        "sp": {"amount": "1d12×1,000", "chance": "25%"},
        "ep": {"amount": "1d6×1,000", "chance": "25%"},
        "gp": {"amount": "1d8×1,000", "chance": "25%"},
        "gems": {"amount": "1d12", "chance": "15%"},
        "jewellery": {"amount": "1d8", "chance": "10%"},
        "magic_items": {"amount": 3, "chance": "25%"},
        "potions": {"amount": "2d8", "chance": "40%"},
        "scrolls": {"amount": 1, "chance": "40%"}
      }
    },
    {
      "name": "Dakon",
      "category": "Humanoid (Ape)",
      "variants": [
        {
          "name": "Dakon",
          "description": "Intelligent, peaceful ape-like beings resembling gorillas with light brown fur, green eyes, and black hands. Known for their strength, wisdom, and lawful behavior.",
          "appearance": {
            "size": "Man-sized",
            "color": "Light brown with green eyes and black hands"
          },
          "behavior": {
            "alignment": "Lawful neutral",
            "intelligence": "Average",
            "habitat": "Forests or hills, avoid water bodies",
            "language": "Common tongue",
            "relationships": {
              "allies": ["Lawful humans", "Demi-humans"],
              "enemies": ["Humanoids (distrusted)"]
            },
            "combatTactics": "Avoids combat unless defending or recovering stolen treasure",
            "toHitBonus": "+2 due to strength and sharp claws"
          },
          "combat": {
            "attacks": 2,
            "damage": "1d10 / 1d10"
          },
          "treasure": {
            "cp": "2d6×1,000 (5%)",
            "sp": "2d6×1,000 (30%)",
            "ep": "1d4×1,000 (20%)",
            "gp": "1d10×1,000 (45%)",
            "pp": "1d10×100 (40%)",
            "gems": "3d12 (25%)",
            "jewellery": "1d10 (10%)",
            "magicItems": "Any 3 maps or magic items + 1 scroll (35%)"
          }
        }
      ],
      "frequency": "Uncommon",
      "numberAppearing": "6d10",
      "size": "Man-sized",
      "move": "60 ft",
      "armorClass": 5,
      "hitDice": "1+1",
      "attacks": 2,
      "damage": "1d10 / 1d10",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "50%",
      "intelligence": "Average",
      "alignment": "Lawful neutral",
      "levelXP": "2/25 + 2/hp"
    },
    {
      "name": "Dark Creeper",
      "category": "Humanoid (Shadow Folk)",
      "variants": [
        {
          "name": "Dark Creeper",
          "description": "Short, pale humanoids wrapped in dark robes. They despise light and hoard magic items, using stealth and magical darkness to ambush and steal.",
          "appearance": {
            "height": "4 ft",
            "clothing": "Loose, layered dark robes exposing only hands and glowing eyes"
          },
          "behavior": {
            "alignment": "Chaotic neutral",
            "intelligence": "Average",
            "skills": "Acts as a 4th-level thief",
            "abilities": [
              "Detect magic (3×/day)",
              "Create darkness (3×/day, 50 ft radius, 1 hour duration)"
            ],
            "tactics": "Extinguishes light sources and steals magic items",
            "deathEffect": "Explodes in green/purple flames (metal items 80% survive)"
          },
          "combat": {
            "attacks": 1,
            "damage": "1d4 (dagger)",
            "armorClass": {
              "inDarkness": 0,
              "inLight": 8
            },
            "equipmentUse": "Will use magic daggers/rings"
          },
          "treasure": "See individual and lair table in source text"
        },
        {
          "name": "Dark Stalker",
          "description": "Leaders of the dark creeper clans, taller and more powerful, with similar darkness-based powers and the ability to cast wall of fog.",
          "appearance": {
            "size": "Man-sized",
            "garb": "Same layered dark robes as creepers"
          },
          "behavior": {
            "alignment": "Chaotic neutral",
            "intelligence": "Average",
            "leadership": "Commands dark creeper clans",
            "abilities": [
              "All creeper abilities",
              "Wall of fog (2×/day)",
              "Fireball death burst (3d8 damage)"
            ]
          },
          "combat": {
            "attacks": 1,
            "damage": "1d6 (short sword)",
            "armorClass": {
              "inDarkness": 0,
              "inLight": 8
            },
            "equipmentUse": "May carry magic weapons or rings"
          },
          "treasure": "See individual treasure table; magic items 75% survival on death"
        }
      ],
      "frequency": {
        "Dark Creeper": "Rare",
        "Dark Stalker": "Very rare"
      },
      "numberAppearing": {
        "Dark Creeper": "1 or 20d4",
        "Dark Stalker": "1"
      },
      "size": {
        "Dark Creeper": "Small",
        "Dark Stalker": "Man-sized"
      },
      "move": "90 ft",
      "armorClass": "0 (in darkness) / 8 (in light)",
      "hitDice": {
        "Dark Creeper": "1+1",
        "Dark Stalker": "2+1"
      },
      "attacks": 1,
      "specialAttacks": "Darkness, stealth, magical fire death",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Average",
      "alignment": "Chaotic neutral",
      "levelXP": {
        "Dark Creeper": "3/50 + 2/hp",
        "Dark Stalker": "4/200 + 3/hp"
      }
    },
    {
      "name": "Disenchanter",
      "category": "Magical Beast",
      "variants": [
        {
          "name": "Disenchanter",
          "description": "A strange, blue, translucent creature resembling a camel-cow hybrid with a magical snout used to drain enchantments from magical items.",
          "appearance": {
            "form": "Electric blue dromedary/cow-like beast",
            "notableFeature": "Prehensile snout, can extend 5 ft"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Average",
            "habitat": "Rarely known, appears only to feed on magic",
            "ecology": "Feeds exclusively on magic dweomers"
          },
          "combat": {
            "attacks": 1,
            "damage": "None",
            "specialEffect": "Disenchants one magic item per hit (except artifacts)",
            "snout": {
              "range": "5 ft",
              "function": "Drains enchantment, renders item inert"
            }
          },
          "specialDefenses": "Can only be hit by magical weapons",
          "magicResistance": "Standard",
          "treasure": "None"
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d2",
      "size": "Medium (5 ft at shoulder)",
      "move": "120 ft",
      "armorClass": 5,
      "hitDice": 5,
      "attacks": 1,
      "damage": "None (see disenchanting effect)",
      "specialAttacks": "Disenchants magical items",
      "specialDefenses": "Only hit by magical weapons",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Average",
      "alignment": "Neutral",
      "levelXP": "4/225 + 5/hp"
    },
    {
      "name": "Demon, Babau",
      "category": "Demons",
      "name_variants": "Horned Demon, Bone Demon",
      "frequency": "Uncommon",
      "numberAppearing": "1d3 or 1d6 (in the Abyss)",
      "size": "Man-sized (7 ft)",
      "move": "150 ft",
      "armorClass": -3,
      "hitDice": "7+14",
      "attacks": "2 claws/1 bite or 1 weapon",
      "damage": "1d4+1/1d4+1/2d4 or by weapon +7",
      "specialAttacks": "Thief abilities, magical abilities, eye gaze",
      "specialDefenses": "Immune to normal weapons, ichor protection",
      "magicResistance": "50%",
      "lairProbability": "20%",
      "intelligence": "Very",
      "alignment": "Chaotic evil",
      "levelXP": "8/2,000+ 12/hp",
      "description": "Babau are skeletal demons covered in leathery black skin. Their feet, taloned hands and head are grossly oversized, nearly the same as a hill giant's. From the base of the skull protrudes a hooked horn.",
      "specialAbilities": {
        "strength": 19,
        "ichor": "Secretes slimy rust colored ichor that halves damage from melee weapons",
        "darkness": "Can cause darkness at will (5 ft radius)",
        "thiefAbilities": "Equal to a 9th level thief",
        "spellLikeAbilities": {
          "atWill": [
            "Fear (touch only, otherwise as 4th level magic user spell)",
            "Levitate (as 2nd level magic user spell)",
            "Fly (as 3rd level magic user spell)",
            "Dispel magic (as 3rd level magic user spell)",
            "Polymorph self (as 4th level magic user spell)",
            "Heat metal (as 2nd level druid spell)"
          ],
          "gateBabau": "25% chance of success"
        },
        "eyeGaze": "Ray of enfeeblement (as 2nd level magic user spell) to anyone within 20 feet who fails save vs spells",
        "weaponVulnerability": "Iron weapons inflict +2 damage"
      },
      "treasure": {
        "cp": {"amount": "1d12×1000", "chance": "20%"},
        "sp": {"amount": "1d6×1000", "chance": "30%"},
        "ep": {"amount": "1d4×1000", "chance": "10%"},
        "gems": {"amount": "1d6", "chance": "25%"},
        "jewellery": {"amount": "1d3", "chance": "20%"},
        "magic_items": {"amount": "1d2", "chance": "10%"}
      }
    },
    {
      "name": "Demon, Vrock",
      "category": "Demons",
      "name_variants": "Class A Demon",
      "frequency": "Common",
      "numberAppearing": "1d3 or 1d6 (in the Abyss)",
      "size": "Large",
      "move": "120 ft; 180 ft flying (AA:IV)",
      "armorClass": 0,
      "hitDice": 8,
      "attacks": "2 talons/2 claws/1 bite",
      "damage": "1d4/1d4/1d8/1d8/1d6",
      "specialAttacks": "Multiple attacks",
      "specialDefenses": "None",
      "magicResistance": "50%",
      "lairProbability": "5%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "7/1,275 +10/hp",
      "description": "Vrock, considered one of the weakest of demonkind, look like a hideous cross between a vulture and a humanoid.",
      "specialAbilities": {
        "darkness": "Can cause darkness at will (5 ft radius)",
        "spellLikeAbilities": {
          "atWill": [
            "Detect invisibility (objects only, otherwise as 2nd level magic user spell)",
            "Telekinesis (as 5th level magic user spell, up to 200 lbs)"
          ],
          "gateVrock": "10% chance of success"
        }
      },
      "motivation": "Love the sight of precious gems and jewellery, and enjoy feasting on the flesh of men",
      "treasure": {
        "cp": {"amount": "1d8×1,000", "chance": "50%"},
        "sp": {"amount": "1d6×1,000", "chance": "25%"},
        "ep": {"amount": "1d4×1,000", "chance": "25%"},
        "gp": {"amount": "1d3×1,000", "chance": "25%"},
        "gems": {"amount": "1d8", "chance": "30%"},
        "jewellery": {"amount": "1d4", "chance": "20%"},
        "magic_weapons": {"amount": 1, "chance": "10%"}
      }
    },
    {
      "name": "Demon, Hezrou",
      "category": "Demons",
      "name_variants": "Class B Demon",
      "frequency": "Common",
      "numberAppearing": "1d3 or 1d6 (in the Abyss)",
      "size": "Large",
      "move": "60 ft; 120 ft hopping",
      "armorClass": -2,
      "hitDice": 9,
      "attacks": "2 claws/1 bite",
      "damage": "1d3/1d3/4d4",
      "specialAttacks": "Multiple attacks",
      "specialDefenses": "None",
      "magicResistance": "55%",
      "lairProbability": "10%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "8/2,000 + 12/hp",
      "description": "Slightly shorter than the vrock, hezrou resemble loathsome toads with humanoid arms.",
      "specialAbilities": {
        "darkness": "Can cause darkness at will (15 ft radius)",
        "spellLikeAbilities": {
          "atWill": [
            "Cause fear (as 4th level magic user spell)",
            "Levitate (as 2nd level magic user spell)",
            "Detect invisibility (objects only, otherwise as 2nd level magic user spell)",
            "Telekinesis (as 5th level magic user spell, up to 300 lbs)"
          ],
          "gateHezrou": "20% chance of success"
        }
      },
      "motivation": "Share a love of human flesh with vrock, will gladly fight vrock",
      "treasure": {
        "cp": {"amount": "1d12×1,000", "chance": "20%"},
        "sp": {"amount": "1d6×1,000", "chance": "30%"},
        "ep": {"amount": "1d4×1,000", "chance": "10%"},
        "gems": {"amount": "1d6", "chance": "25%"},
        "jewellery": {"amount": "1d3", "chance": "20%"},
        "magic_items": {"amount": "1d2", "chance": "10%"}
      }
    },
    {
      "name": "Demon, Glabrezu",
      "category": "Demons",
      "name_variants": "Class C Demon",
      "frequency": "Uncommon",
      "numberAppearing": "1d3 or 1d6 (in the Abyss)",
      "size": "Large",
      "move": "90 ft",
      "armorClass": -4,
      "hitDice": 10,
      "attacks": "2 pincers/2 claws/1 bite",
      "damage": "2d6/2d6/1d3/1d3/1d4+1",
      "specialAttacks": "Multiple attacks",
      "specialDefenses": "None",
      "magicResistance": "60%",
      "lairProbability": "15%",
      "intelligence": "Average",
      "alignment": "Chaotic evil",
      "levelXP": "8/2,400 + 14/hp",
      "description": "These muscular demons have a head like a horned dog, and from their broad chest sprouts four arms: 2 with sharp pincers and 2 with hands.",
      "specialAbilities": {
        "darkness": "Can cause darkness at will (10 ft radius)",
        "spellLikeAbilities": {
          "atWill": [
            "Cause fear (as 4th level magic user spell)",
            "Levitate (as 2nd level magic user spell)",
            "Pyrotechnics (as 2nd level magic user spell)",
            "Polymorph self (as 4th level magic user spell)",
            "Telekinesis (as 5th level magic user spell, up to 400 lbs)"
          ],
          "gateDemon": "30% chance of success for Class A to C demon"
        }
      },
      "treasure": {
        "cp": {"amount": "1d8×1,000", "chance": "10%"},
        "sp": {"amount": "1d12×1,000", "chance": "15%"},
        "ep": {"amount": "1d8×1,000", "chance": "15%"},
        "gp": {"amount": "1d6×1,000", "chance": "50%"},
        "gems": {"amount": "1d10", "chance": "30%"},
        "jewellery": {"amount": "1d6", "chance": "25%"},
        "magic_items": {"amount": 3, "chance": "15%"},
        "potions": {"amount": 1, "chance": "15%"}
      }
    },
    {
      "name": "Demon, Nalfeshnee",
      "category": "Demons",
      "name_variants": "Class D Demon",
      "frequency": "Uncommon",
      "numberAppearing": "1d3 or 1d6 (in the Abyss)",
      "size": "Large",
      "move": "90 ft; 120 ft flying (AA:II)",
      "armorClass": -1,
      "hitDice": 11,
      "attacks": "1 claw/1 bite",
      "damage": "1d4/2d4",
      "specialAttacks": "+2 to hit",
      "specialDefenses": "+1 or better magic weapon to hit",
      "magicResistance": "65%",
      "lairProbability": "15%",
      "intelligence": "Very",
      "alignment": "Chaotic evil",
      "levelXP": "9/3,000 + 16/hp",
      "description": "Particularly malevolent demons, the class D have the upper body of an ape and the cloven-hoofed lower body of a boar. They have rather small feathered wings as well, which seem undersized compared to their corpulent bodies.",
      "specialAbilities": {
        "darkness": "Can cause darkness at will (10 ft radius)",
        "spellLikeAbilities": {
          "atWill": [
            "Improved phantasmal force (as 2nd level illusionist spell)",
            "Fear (as 4th level magic user spell)",
            "Levitate (as 2nd level magic user spell)",
            "Detect magic (as 1st level magic user spell)",
            "Comprehend languages (as 1st level magic user spell)",
            "Dispel magic (as 3rd level magic user spell)",
            "Polymorph self (as 4th level magic user spell)",
            "Telekinesis (as 5th level magic user spell, up to 500 lbs)",
            "Project image (as 6th level magic user spell)",
            "Symbol of fear or discord (as 8th level magic user spell)"
          ],
          "gateDemon": "60% chance of success for random Class A to D demon"
        },
        "secretName": "90% certain to answer a summons if secret name is spoken"
      },
      "motivation": "Particularly enjoy feasting on human blood and meat",
      "treasure": {
        "cp": {"amount": "1d10×1,000", "chance": "5%"},
        "sp": {"amount": "1d12×1,000", "chance": "15%"},
        "ep": {"amount": "1d6×1,000", "chance": "25%"},
        "gp": {"amount": "1d8×1,000", "chance": "25%"},
        "gems": {"amount": "1d12", "chance": "15%"},
        "jewellery": {"amount": "1d8", "chance": "10%"},
        "magic_items": {"amount": 3, "chance": "25%"},
        "scrolls": {"amount": 1, "chance": "25%"}
      }
    },
    {
      "name": "Demon, Marilith",
      "category": "Demons",
      "name_variants": "Class E Demon",
      "frequency": "Rare",
      "numberAppearing": "1d3 or 1d6 (in the Abyss)",
      "size": "Large",
      "move": "120 ft",
      "armorClass": -7,
      "hitDice": "7+7",
      "attacks": "6 arms/1 constriction",
      "damage": "2d4 (x6)/1d6",
      "specialAttacks": "Multiple weapon attacks, constriction",
      "specialDefenses": "+1 or better magic weapon to hit",
      "magicResistance": "80%",
      "lairProbability": "10%",
      "intelligence": "High",
      "alignment": "Chaotic evil",
      "levelXP": "9/3,000 + 12/hp",
      "description": "Infamous even among demonkind for their cruel and ill-tempered nature, the marilith are invariably female. From the waist up they appear to be a full-figured human female with six arms and skin tones ranging from deep violet to a putrescent green. Below the waist however, they have the coiling body of a large serpent.",
      "specialAbilities": {
        "darkness": "Can cause darkness at will (5 ft radius)",
        "spellLikeAbilities": {
          "atWill": [
            "Charm person (as 1st level magic user spell)",
            "Levitate (as 2nd level magic user spell)",
            "Comprehend languages (as 1st level magic user spell)",
            "Detect invisibility (objects only, otherwise as 2nd level magic user spell)",
            "Pyrotechnics (as 2nd level magic user spell)",
            "Polymorph self (as 4th level magic user spell)",
            "Project image (as 6th level magic user spell)"
          ],
          "gateDemon": {
            "chance": "50% chance of success",
            "summoned": {
              "1-30": "Class A",
              "31-55": "Class B",
              "56-70": "Class C",
              "71-85": "Class D",
              "86-00": "Class F"
            }
          }
        },
        "secretName": "Can be used to summon and bargain with them"
      },
      "combat": "In melee they prefer to wield a variety of barbed and hooked swords and battle axes or simply constrict their prey with their powerful serpentine tail",
      "motivation": "Reportedly prefer the sacrifice of powerful male warriors as payment",
      "treasure": {
        "gp": {"amount": "10d4×1000", "chance": "50%"},
        "pp": {"amount": "1d20×100", "chance": "50%"},
        "gems": {"amount": "5d4", "chance": "30%"},
        "jewellery": {"amount": "1d10", "chance": "10%"},
        "magic_items": {"amount": 4, "chance": "35%"},
        "scrolls": {"amount": 1, "chance": "35%"}
      }
    },
    {
      "name": "Demon, Balor",
      "category": "Demons",
      "name_variants": "Class F Demon",
      "frequency": "Rare",
      "numberAppearing": "1d3 or 1d6 (in the Abyss)",
      "size": "Large",
      "move": "60 ft; 150 ft flying (AA:III)",
      "armorClass": -2,
      "hitDice": "8+8",
      "attacks": "1 bite",
      "damage": "1d12+1",
      "specialAttacks": "Flaming whip (3d6)",
      "specialDefenses": "+1 or better magic weapon to hit",
      "magicResistance": "75%",
      "lairProbability": "20%",
      "intelligence": "High",
      "alignment": "Chaotic evil",
      "levelXP": "9/3,600 + 12/hp",
      "description": "Reportedly only six of this class of demon exist, each with their own secret name.",
      "specialAbilities": {
        "darkness": "Can cause darkness at will (10 ft radius)",
        "spellLikeAbilities": {
          "atWill": [
            "Fear (as 4th level magic user spell)",
            "Detect magic (as 1st level magic user spell)",
            "Read magic (as 1st level magic user spell)",
            "Comprehend languages (as 1st level magic user spell)",
            "Detect invisibility (objects only, otherwise as 2nd level magic user spell)",
            "Pyrotechnics (as 2nd level magic user spell)",
            "Dispel magic (as 3rd level magic user spell)",
            "Suggestion (as 3rd level magic user spell)",
            "Telekinesis (as 5th level magic user spell, up to 600 lbs)",
            "Symbol of fear, discord, sleep, or stunning (as 8th level magic user spell)"
          ],
          "gateDemon": {
            "chance": "70% chance of success",
            "summoned": {
              "1-80": "Class C",
              "81-100": "Class D"
            }
          }
        }
      },
      "combat": {
        "weapons": "Wield massive +1 swords and a cat-o-nine-tails whip",
        "whipUse": "4 in 6 chance per round",
        "whipEffect": "Victims failing save vs spells are burnt by flames for 4d6 additional damage",
        "immolation": "Continually immolate themselves in flames"
      },
      "leadership": {
        "charismaticEvil": "Many other chaotic evil monsters and demons are attracted to their aura",
        "desireToDominate": "Always try to bully and intimidate their masters in an effort to usurp leadership"
      },
      "treasure": {
        "sp": {"amount": "1d20×1,000", "chance": "10%"},
        "ep": {"amount": "1d12×1,000", "chance": "15%"},
        "gp": {"amount": "1d10×1,000", "chance": "40%"},
        "pp": {"amount": "1d8×100", "chance": "35%"},
        "gems": {"amount": "3d10", "chance": "20%"},
        "jewellery": {"amount": "1d10", "chance": "10%"},
        "potions": {"amount": 1, "chance": "30%"},
        "scrolls": {"amount": 1, "chance": "30%"},
        "magic_items": {"amount": 3, "chance": "30%", "note": "no weapons"}
      }
    },
    {
      "name": "Demon, Demonette",
      "category": "Demons",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": 1,
      "size": "Man-sized",
      "move": "120 ft; 120 ft flying (AA:IV)",
      "armorClass": 5,
      "hitDice": "6+1d6",
      "attacks": 1,
      "damage": "By weapon type + strength bonus",
      "specialAttacks": "Life energy drain, spellcasting",
      "specialDefenses": "Iron or +1 or better weapon to hit",
      "magicResistance": "30%",
      "lairProbability": "15%",
      "intelligence": "Very to genius",
      "alignment": "Chaotic evil",
      "levelXP": "9/4,050 +14/hp",
      "description": "Demonettes are the result of union between a succubus and a human male. Their individual appearances vary, but their vestigial horns and small leathery bat-like wings denote their demonic heritage.",
      "specialAbilities": {
        "spellLikeAbilities": {
          "threeDailyUses": [
            "Charm person (as 1st level magic user spell)",
            "ESP (as 2nd level magic user spell)",
            "Polymorph self (humanoid shapes only, otherwise as 4th level magic user spell)",
            "Suggestion (as 3rd level magic user spell)"
          ],
          "onceDaily": "Dimension door (as 4th level magic user spell)"
        },
        "spellcasting": "25% have genius intelligence and can cast spells as a 1d12 level magic user",
        "lifeEnergyDrain": {
          "touch": "Drains 1d8 hit points from victim and adds 1d4 hit points to the demonette"
        },
        "infravision": "120 ft range"
      },
      "armor": {
        "naturalAC": 5,
        "magicalArmor": "Only adds bonus unless superior to AC 5"
      },
      "alignment": {
        "chaoticEvil": "80%",
        "lessDemoniacal": "20%, but never lawful or good"
      },
      "treasure": {
        "scrolls": {"amount": "1d4", "chance": "50%"},
        "potions": {"amount": "2d4", "chance": "40%"},
        "gems": {"amount": "1d8×10", "chance": "90%"},
        "jewellery": {"amount": "5d6", "chance": "80%"},
        "magic_items": {"amount": "1d6", "chance": "70%", "note": "excluding potions and scrolls"}
      }
    },
    {
      "name": "Demon, Demoniac",
      "category": "Demons",
      "name_variants": "",
      "frequency": "Very rare",
      "numberAppearing": 1,
      "size": "Man-sized to Large",
      "move": "150 ft",
      "armorClass": 6,
      "hitDice": "5 to 8 (1d4+4)",
      "attacks": 2,
      "damage": "By weapon type + strength bonus",
      "specialAttacks": "Depends on class abilities",
      "specialDefenses": "Invulnerable to silver weapons",
      "magicResistance": "5%-20%",
      "lairProbability": "See description",
      "intelligence": "Low to exceptional",
      "alignment": "Chaotic evil",
      "levelXP": "7/1,275 +10/hp",
      "description": "Demoniacs are the result of a mating between a major demon and a human female. As such, each is slightly different depending upon parentage. Generally, demoniacs are strong and heavily-built. They will usually have several other demonic characteristics as well, such as vestigial horns, barbs, or scaled skin.",
      "specialAbilities": {
        "infravision": "Standard",
        "demonCommunication": "Able to communicate with demons",
        "weaponResistances": {
          "silver": "Invulnerable to silver weapons",
          "iron": "Takes double damage from iron weapons"
        },
        "abilityScores": {
          "strength": "1d3+16",
          "dexterity": "1d8+12",
          "intelligence": "1d8+8",
          "wisdom": "3d6"
        },
        "classes": {
          "cleric": "Maximum level equal to hit dice",
          "magicUser": "Maximum 5th level",
          "thief": "Maximum level equal to hit dice",
          "assassin": "Maximum level equal to hit dice"
        }
      },
      "armor": {
        "naturalAC": 6,
        "magicalArmor": "Only adds bonus unless superior to AC 6"
      },
      "treasure": "Similar to demonettes, appropriate to class(es)"
    },
    {
      "name": "Demon, Dretch",
      "category": "Demons",
      "name_variants": "",
      "frequency": "Common",
      "numberAppearing": "2d4 or 5d4 (in the Abyss)",
      "size": "Small",
      "move": "90 ft",
      "armorClass": 2,
      "hitDice": 4,
      "attacks": "2 claws/1 bite",
      "damage": "1d4/1d4/1d4+1",
      "specialAttacks": "Special abilities",
      "specialDefenses": "None",
      "magicResistance": "30%",
      "lairProbability": "15%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "4/175+4/hp",
      "description": "Dretch are the weakest of all demonkind. Their appearance is almost comical, with a plump body with thin, gangly arms and legs. Their squat heads are bald and they have a slobbering, stupid visage.",
      "specialAbilities": {
        "spellLikeAbilities": {
          "atWill": [
            "Darkness (5 ft radius)",
            "Scare (as 2nd level magic user spell)",
            "Telekinesis (as 5th level magic user spell, up to 50 lbs)"
          ],
          "onceDaily": [
            "Stinking cloud (as 2nd level magic user spell)",
            "Teleport without fail (as 5th level magic user spell, no chance of error)"
          ],
          "gateDemon": "15% chance of success for a class A demon"
        }
      },
      "combat": "Usually attack in hordes, using tooth and claw in blind abandon",
      "treasure": {
        "individual": {
          "cp": {"amount": "3d8", "chance": "100%"},
          "sp": {"amount": "3d6", "chance": "100%"},
          "ep": {"amount": "2d6", "chance": "100%"},
          "gp": {"amount": "2d4", "chance": "100%"}
        }
      }
    },
    {
      "name": "Demon, Ekivu",
      "category": "Demons",
      "name_variants": "Fly Demon",
      "frequency": "Common",
      "numberAppearing": "1d3 or 1d6 (in the Abyss)",
      "size": "Medium",
      "move": "50 ft; 210 ft flying (AA:III)",
      "armorClass": -1,
      "hitDice": "7+2",
      "attacks": "2 claws/1 bite",
      "damage": "2d4/2d4/1d4",
      "specialAttacks": "Buzzing drone",
      "specialDefenses": "Invulnerable to poison",
      "magicResistance": "40%",
      "lairProbability": "5%",
      "intelligence": "Average",
      "alignment": "Chaotic evil",
      "levelXP": "7/1,275 +10/hp",
      "description": "Ekivu resemble a hideous crossbreed between a giant fly and a human. Their hindlegs are insect-like and their forelimbs resemble human arms, but with bony, sharp claws. Like flies, their bodies are covered in blueish-black chitin with bristling hair. Their heads are vaguely human, but with bulbous, faceted eyes like those of a fly. Their mouths are ringed with sharp teeth and their long noses are actually a sharp proboscis for drawing blood from their victims.",
      "specialAbilities": {
        "darkness": "Can cause darkness at will (5 ft radius)",
        "spellLikeAbilities": {
          "atWill": [
            "Detect good (as 1st level cleric spell)",
            "Detect invisibility (as 2nd level magic user spell)",
            "Telekinesis (as 5th level magic user spell, up to 150 lbs)",
            "Fear (touch only, otherwise as 4th level magic user spell)"
          ],
          "gateEkivu": "15% chance of success"
        },
        "buzzingDrone": {
          "effect": "Lulls listeners into comatose state unless save vs spells",
          "duration": "2d4 hours or until 1d4 hp of blood is drawn"
        },
        "resistances": {
          "poison": "Invulnerable to all forms of poison"
        }
      },
      "relationships": {
        "hatred": "Long standing hatred of most other classes of demons, especially classes A and B",
        "enslavedShub": "Have managed to enslave a number of shub"
      },
      "treasure": {
        "cp": {"amount": "1d8×1,000", "chance": "50%"},
        "sp": {"amount": "1d6×1,000", "chance": "25%"},
        "ep": {"amount": "1d4×1,000", "chance": "25%"},
        "gp": {"amount": "1d3×1000", "chance": "25%"},
        "gems": {"amount": "1d8", "chance": "30%"},
        "jewellery": {"amount": "1d4", "chance": "20%"},
        "magic_weapons": {"amount": 1, "chance": "10%"}
      }
    },
    {
      "name": "Dog",
      "category": "Animal",
      "variants": [
        {
          "type": "War",
          "frequency": "Uncommon",
          "numberAppearing": "Varies",
          "size": "Medium",
          "move": "120 ft",
          "armorClass": "6 (or as armor)",
          "hitDice": "2+2",
          "attacks": 1,
          "damage": "2d4",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "2/50+2/hp"
        },
        {
          "type": "Wild",
          "frequency": "Common",
          "numberAppearing": "4d4",
          "size": "Small",
          "move": "150 ft",
          "armorClass": 7,
          "hitDice": 1,
          "attacks": 1,
          "damage": "1d4",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "1/10+1/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "War dogs are large, fearsome canines (like mastiffs or pit bulls) trained for combat and typically armored in leather. They remain loyal unto death. Wild dogs roam in packs, competing with wolves and sometimes refugees for food. They avoid conflict when well-fed but attack when hungry. They can be tamed if removed from their pack."
    },
    {
      "name": "Doppelgänger",
      "category": "Shapechanger",
      "variants": [
        {
          "name": "Doppelgänger",
          "description": "Mimicry specialists capable of perfectly assuming humanoid forms and infiltrating society or adventuring parties with deadly precision. Their natural form is pale, hairless, and alien.",
          "appearance": {
            "natural": "Tall, gangly humanoid with bulging yellow eyes and no hair",
            "mimicry": "Any humanoid form (4–8 ft tall), including clothing and gear"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Very",
            "habitat": "Dungeons, ruins, populated areas",
            "abilities": [
              "ESP for accurate impersonation",
              "Immune to charm and sleep",
              "Disguise fails only 10% of the time"
            ],
            "tactics": "Murder and replace a party member to ambush or rob others"
          },
          "combat": {
            "attacks": 1,
            "damage": "1d12",
            "special": "Surprises on 1–4 in 6"
          },
          "defenses": {
            "savingThrows": "As 10th level fighter"
          },
          "treasure": {
            "cp": "1d10×1,000 (5%)",
            "sp": "1d12×1,000 (25%)",
            "ep": "1d6×1,000 (25%)",
            "gp": "1d8×1,000 (25%)",
            "gems": "1d12 (15%)",
            "jewellery": "1d8 (10%)",
            "magicItems": "1 scroll and any 3 magic items (25%)"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "3d4",
      "size": "Man-sized",
      "move": "90 ft",
      "armorClass": 5,
      "hitDice": 4,
      "attacks": 1,
      "damage": "1d12",
      "specialAttacks": "Stealth (surprise 1-4 in 6)",
      "specialDefenses": "Immune to charm and sleep; saves as 10th level fighter",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Very",
      "alignment": "Neutral",
      "levelXP": "4/285 + 3/hp"
    },

    {
      "name": "Dracolisk",
      "category": "Dragon Hybrid",
      "variants": [
        {
          "name": "Dracolisk",
          "description": "A fusion of black dragon and basilisk, this six-limbed winged terror combines acid breath with petrifying gaze. Rare and fearsome.",
          "appearance": {
            "size": "Large (20 ft)",
            "form": "Black-scaled, dragon-like with basilisk traits and six limbs"
          },
          "behavior": {
            "alignment": "Chaotic evil",
            "intelligence": "Low to average",
            "language": "Usually Draconic"
          },
          "combat": {
            "attacks": 3,
            "damage": "1d6 / 1d6 / 3d4",
            "breathWeapon": {
              "type": "Acid stream",
              "range": "30 ft long, 5 ft wide",
              "damage": "4d6 (save for half)",
              "usesPerDay": 3
            },
            "gazeAttack": {
              "range": "30 ft",
              "effect": "Save vs petrifaction or turn to stone",
              "note": "Affects astral and æthereal creatures"
            }
          },
          "defenses": {
            "flying": "150 ft, short bursts only"
          },
          "treasure": {
            "cp": "1d10×1,000 (25%)",
            "sp": "1d8×1,000 (25%)",
            "gp": "1d6×1,000 (25%)",
            "pp": "1d6×100 (25%)",
            "gems": "3d6 (50%)",
            "jewellery": "3d4 (50%)",
            "magicItems": "Any 3 items (25%)"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1d2",
      "size": "Large",
      "move": "90 ft; 150 ft flying (AA: II)",
      "armorClass": 3,
      "hitDice": "7+3",
      "attacks": 3,
      "damage": "1d6 / 1d6 / 3d4",
      "specialAttacks": "Acid breath and petrifying gaze",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "60%",
      "intelligence": "Low to average",
      "alignment": "Chaotic evil",
      "levelXP": "7/1,000 + 10/hp"
    },
    {
      "name": "Dragon Turtle",
      "category": "Dragonkin",
      "variants": [
        {
          "name": "Dragon Turtle",
          "description": "Massive, steam-breathing sea monsters resembling dragons crossed with turtles. Often mistaken for islands before they surface and attack ships.",
          "appearance": {
            "form": "Gigantic turtle with dragon-like head and flippers",
            "size": "Large"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Very",
            "habitat": "Deep oceans and coastal waters",
            "tactics": [
              "Capsizes ships from below",
              "Breathes devastating steam clouds"
            ]
          },
          "combat": {
            "attacks": 3,
            "damage": "2d6 / 2d6 / 4d8",
            "breathWeapon": {
              "type": "Steam cloud",
              "area": "60 ft long, 40 ft wide, 40 ft high",
              "damage": "Equal to current HP (save for half)"
            },
            "shipAttack": "90% chance to capsize vessel it surfaces beneath"
          },
          "treasure": {
            "cp": "5d6×1,000 (25%)",
            "sp": "1d100×1,000 (40%)",
            "ep": "1d4×10,000 (40%)",
            "gp": "1d6×10,000 (55%)",
            "pp": "5d10×100 (25%)",
            "gems": "1d100 (50%)",
            "jewellery": "1d4×10 (50%)",
            "magicItems": "4 items + 1 scroll + 1 potion (15%), 2d4 potions (40%), 1d4 scrolls (50%)"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Large",
      "move": "90 ft swimming",
      "armorClass": 0,
      "hitDice": 13,
      "attacks": 3,
      "damage": "2d6 / 2d6 / 4d8",
      "specialAttacks": "Steam cloud breath, capsizing ships",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "5%",
      "intelligence": "Very",
      "alignment": "Neutral",
      "levelXP": "10/7,000+18/hp"
    },
    {
      "name": "Black Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Uncommon",
      "numberAppearing": "1d4",
      "size": "L (30' long)",
      "move": "12\"; 24\" flying (AA:II)",
      "armorClass": 3,
      "hitDice": "6–8",
      "attacks": 3,
      "damage": "1d4/1d4/3d6",
      "specialAttacks": "Acid breath (50' stream x 5'), 3x/day",
      "specialDefenses": "Standard; save vs breath weapon for half",
      "magicResistance": "Standard",
      "lairProbability": "30%",
      "intelligence": "Average",
      "alignment": "Chaotic evil",
      "levelXP": "Varies by age and HD",
      "description": "Black dragons haunt swamps and dark caves, exuding cruelty and malice. Their breath is a corrosive acid stream, deadly even to those who survive the initial blast. They are often found sleeping but may feign sleep to ambush prey.",
      "specialAbilities": {
        "breathWeapon": "Acid stream (50 ft x 5 ft), damage = HP, save for half, usable 3/day",
        "spells": {
          "casterLevel": "Half age category (if spellcaster)",
          "castingChance": "10%"
        },
        "sleepChance": "50%, with 1-in-6 chance of waking if adventurers are nearby",
        "speakingChance": "30%",
        "feignSleep": true
      },
      "treasure": "5d6×1,000 cp (25%), 1d100×1,000 sp (40%), 1d4×10,000 ep (40%), 1d6×10,000 gp (55%), 5d10×100 pp (25%), 1d100 gems (50%), 1d4×10 jewellery (50%), 4 magic items plus 1 potion and 1 scroll (15%)",
      "habitats": [
        {
          "type": "Swamps",
          "chance": "60%"
        },
        {
          "type": "Marshes",
          "chance": "30%"
        },
        {
          "type": "Dark Caves",
          "chance": "10%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 6,
          "hpPerDie": 1,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 6,
          "hpPerDie": 3,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 7,
          "hpPerDie": 5,
          "casterLevel": 2,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 8,
          "hpPerDie": 6,
          "casterLevel": 3,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 8,
          "hpPerDie": 8,
          "casterLevel": 4,
          "saveBonus": 4
        }
      ]
    },
    {
      "name": "Blue Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "L (42' long)",
      "move": "9\"; 24\" flying (AA:II)",
      "armorClass": 2,
      "hitDice": "8–10",
      "attacks": 3,
      "damage": "1d6/1d6/3d8",
      "specialAttacks": "Lightning breath (100' x 5') for full HP damage, 3x/day",
      "specialDefenses": "Standard; save vs breath weapon for half",
      "magicResistance": "Standard",
      "lairProbability": "50%",
      "intelligence": "Very",
      "alignment": "Lawful evil",
      "levelXP": "Varies by age and HD",
      "description": "Deadly dragons of the desert, blue dragons dwell in vast arid caverns. They breathe lightning bolts up to 100 feet long, and may cast spells if intelligent enough. Known for cruelty and arrogance, they are powerful foes even for experienced parties.",
      "specialAbilities": {
        "breathWeapon": "Lightning bolt (100 ft x 5 ft), damage = HP, save for half, usable 3/day",
        "spells": {
          "casterLevel": "Equal to age category (if spellcaster)",
          "castingChance": "30%"
        },
        "sleepChance": "30%, with 1-in-6 chance of waking if adventurers are nearby",
        "speakingChance": "60%",
        "feignSleep": true
      },
      "treasure": "5d6×1,000 cp (25%), 1d100×1,000 sp (40%), 1d4×10,000 ep (40%), 1d6×10,000 gp (55%), 5d10×100 pp (25%), 1d100 gems (50%), 1d4×10 jewellery (50%), 4 magic items plus 1 potion and 1 scroll (15%), 2d4 potions (40%)",
      "habitats": [
        {
          "type": "Deserts",
          "chance": "90%"
        },
        {
          "type": "Arid Caverns",
          "chance": "10%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 8,
          "hpPerDie": 1,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 8,
          "hpPerDie": 3,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 9,
          "hpPerDie": 5,
          "casterLevel": 4,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 10,
          "hpPerDie": 6,
          "casterLevel": 5,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 10,
          "hpPerDie": 8,
          "casterLevel": 8,
          "saveBonus": 4
        }
      ]
    },

    {
      "name": "Brass Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Uncommon",
      "numberAppearing": "1d4",
      "size": "L (30' long)",
      "move": "12\"; 24\" flying (AA:II)",
      "armorClass": 3,
      "hitDice": "6–8",
      "attacks": 3,
      "damage": "1d4/1d4/4d4",
      "specialAttacks": "Cone of sleep gas (70'x20') or cone of fear gas (40'x50'x20'), 3x/day",
      "specialDefenses": "Standard; saves against breath vary by size",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "High",
      "alignment": "Chaotic good or chaotic neutral",
      "levelXP": "Varies by age and HD",
      "description": "Brass dragons are desert-dwelling and social, known for their talkativeness and curiosity. Unlike their more violent cousins, they prefer conversation to combat, though their breath weapons can be formidable.",
      "specialAbilities": {
        "breathWeapon": "Cone of sleep gas (70'x20') or cone of fear gas (40'x50'x20'); 3/day",
        "spells": {
          "casterLevel": "1/2 age category",
          "castingChance": "30%"
        },
        "sleepChance": "50%, 1-in-6 chance to wake if adventurers nearby",
        "speakingChance": "30%",
        "feignSleep": true
      },
      "treasure": "5d6×1,000 cp (25%), 1d100×1,000 sp (40%), 1d4×10,000 ep (40%), 1d6×10,000 gp (55%), 5d10×100 pp (25%), 1d100 gems (50%), 1d4×10 jewellery (50%), 4 magic items + 1 potion + 1 scroll (15%)",
      "habitats": [
        {
          "type": "Desert caves",
          "chance": "100%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 6,
          "hpPerDie": 1,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 6,
          "hpPerDie": 3,
          "casterLevel": 1,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 7,
          "hpPerDie": 5,
          "casterLevel": 2,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 8,
          "hpPerDie": 6,
          "casterLevel": 3,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 8,
          "hpPerDie": 8,
          "casterLevel": 4,
          "saveBonus": 4
        }
      ]
    },

    {
      "name": "Bronze Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "L (42' long)",
      "move": "9\"; 24\" flying (AA:II)",
      "armorClass": 2,
      "hitDice": "8–10",
      "attacks": 3,
      "damage": "1d6/1d6/4d6",
      "specialAttacks": "Breath weapon: lightning bolt (100' x 5') or repulsion gas cloud (20'x30'x30'), 3x/day",
      "specialDefenses": "Standard",
      "magicResistance": "Standard",
      "lairProbability": "45%",
      "intelligence": "Exceptional",
      "alignment": "Lawful good",
      "levelXP": "Varies by age and HD",
      "description": "Reclusive and noble, bronze dragons dwell near water in temperate zones. Curious about humans, they sometimes assume humanoid form to observe or help. Their breath can blast with lightning or drive foes away with a gas cloud.",
      "specialAbilities": {
        "breathWeapon": "Lightning bolt (100'x5') or repulsion gas (20'x30'x30'); 3/day",
        "spells": {
          "casterLevel": "Equal to age category",
          "castingChance": "60%"
        },
        "sleepChance": "25%, 1-in-6 chance to awaken if disturbed",
        "speakingChance": "60%",
        "feignSleep": true
      },
      "treasure": "5d6×1,000 cp (25%), 1d100×1,000 sp (40%), 1d4×10,000 ep (40%), 1d6×10,000 gp (55%), 5d10×100 pp (25%), 1d100 gems (50%), 1d4×10 jewellery (50%), 4 magic items + 1 potion + 1 scroll (15%), 2d4 potions (40%), 1d4 scrolls (50%)",
      "habitats": [
        {
          "type": "Coastal cliffs, underwater caves, or lakefront caverns",
          "chance": "100%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 8,
          "hpPerDie": 1,
          "casterLevel": 1,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 8,
          "hpPerDie": 3,
          "casterLevel": 3,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 9,
          "hpPerDie": 5,
          "casterLevel": 5,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 10,
          "hpPerDie": 6,
          "casterLevel": 7,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 10,
          "hpPerDie": 8,
          "casterLevel": 10,
          "saveBonus": 4
        }
      ]
    },

        {
      "name": "Copper Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Uncommon to Rare",
      "numberAppearing": "1d4",
      "size": "L (36' long)",
      "move": "9\"; 24\" flying (AA:II)",
      "armorClass": 1,
      "hitDice": "7–9",
      "attacks": 3,
      "damage": "1d4/1d4/3d6+2",
      "specialAttacks": "Breath weapon: acid (stream, hp damage) or slowing gas (20'x30'x30'), 3x/day",
      "specialDefenses": "Standard",
      "magicResistance": "Standard",
      "lairProbability": "35%",
      "intelligence": "High",
      "alignment": "Chaotic good",
      "levelXP": "Varies by age and HD",
      "description": "Copper dragons are witty and whimsical creatures that prefer rocky hills and arid lands. They can breathe either acid or slowing gas and are known to use their magic to toy with or help adventurers. Despite their good nature, they can be vain and greedy.",
      "specialAbilities": {
        "breathWeapon": "Acid stream (hp damage) or slowing gas cloud (20'x30'x30'); 3/day",
        "spells": {
          "casterLevel": "Equal to age category",
          "castingChance": "40%"
        },
        "sleepChance": "40%, 1-in-6 chance to awaken if disturbed",
        "speakingChance": "45%",
        "feignSleep": true
      },
      "treasure": "5d6×1,000 cp (25%), 1d100×1,000 sp (40%), 1d4×10,000 ep (40%), 1d6×10,000 gp (55%), 5d10×100 pp (25%), 1d100 gems (50%), 1d4×10 jewellery (50%), 4 magic items + 1 potion + 1 scroll (15%), 2d4 potions (40%)",
      "habitats": [
        {
          "type": "Arid hills, rocky uplands, or desert cliffs",
          "chance": "100%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 7,
          "hpPerDie": 1,
          "casterLevel": 1,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 7,
          "hpPerDie": 3,
          "casterLevel": 3,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 8,
          "hpPerDie": 5,
          "casterLevel": 5,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 9,
          "hpPerDie": 6,
          "casterLevel": 7,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 9,
          "hpPerDie": 8,
          "casterLevel": 9,
          "saveBonus": 4
        }
      ]
    },

    {
      "name": "Gold Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Very Rare",
      "numberAppearing": "1d3",
      "size": "L (54' long)",
      "move": "12\"; 30\" flying (AA:II)",
      "armorClass": -2,
      "hitDice": "10–12",
      "attacks": 3,
      "damage": "1d8/1d8/6d6",
      "specialAttacks": "Breath weapon: fire cone (90' long, 15' radius) or poisonous gas cloud (save or die), 3x/day",
      "specialDefenses": "Standard",
      "magicResistance": "Standard",
      "lairProbability": "65%",
      "intelligence": "Genius",
      "alignment": "Lawful good",
      "levelXP": "Varies by age and HD",
      "description": "Gold dragons are the most powerful and majestic of the metallic dragons. Noble, wise, and just, they are often protectors of the innocent and champions of justice. They may assume human or animal form and prefer lairs hidden in remote lakes or deep mountain valleys.",
      "specialAbilities": {
        "breathWeapon": "Cone of fire (90' long, 15' radius at base) or poisonous gas cloud (save or die); 3/day",
        "spells": {
          "casterLevel": "Equal to age category",
          "castingChance": "100% if speaking (which is 90% likely)"
        },
        "sleepChance": "10%, 1-in-6 chance to awaken if disturbed",
        "speakingChance": "90%",
        "feignSleep": true,
        "shapeChange": "Can take human or animal form to observe mortals"
      },
      "treasure": "5d6×1,000 cp (25%), 1d100×1,000 sp (40%), 1d4×10,000 ep (40%), 2d6×10,000 gp (55%), 10d10×100 pp (25%), 7d20 gems (50%), 1d6×10 jewellery (50%), 4 magic items + 1 potion + 1 scroll (15%), 2d4 potions (40%), 1d4 scrolls (50%)",
      "habitats": [
        {
          "type": "Remote mountains, lakes, or secluded caverns",
          "chance": "100%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 10,
          "hpPerDie": 1,
          "casterLevel": 1,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 10,
          "hpPerDie": 3,
          "casterLevel": 3,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 11,
          "hpPerDie": 5,
          "casterLevel": 5,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 12,
          "hpPerDie": 6,
          "casterLevel": 7,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 12,
          "hpPerDie": 8,
          "casterLevel": 9,
          "saveBonus": 4
        }
      ]
    },
    
    {
      "name": "Green Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "L (36' long)",
      "move": "9\"; 24\" flying (AA:II)",
      "armorClass": 2,
      "hitDice": "7–9",
      "attacks": 3,
      "damage": "1d6/1d6/2d10",
      "specialAttacks": "Poison gas breath (50' × 40' × 30'), 3x/day",
      "specialDefenses": "Standard; save vs breath weapon for half",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Average to very",
      "alignment": "Lawful evil",
      "levelXP": "Varies by age and HD",
      "description": "Green dragons are known for their foul temperament and malicious cunning. They prefer wooded lairs and have a breath weapon of deadly poisonous gas. They may cast spells and speak, but are often found feigning sleep to ambush intruders.",
      "specialAbilities": {
        "breathWeapon": "Poison gas cloud (50' long, 40' wide, 30' high), damage = HP, save for half, 3/day",
        "spells": {
          "casterLevel": "Equal to age category (if spellcaster)",
          "castingChance": "20%"
        },
        "sleepChance": "40%, with 1-in-6 chance of waking if adventurers are nearby",
        "speakingChance": "45%",
        "feignSleep": true
      },
      "treasure": "5d6×1,000 cp (25%), 1d100×1,000 sp (40%), 1d4×10,000 ep (40%), 1d6×10,000 gp (55%), 5d10×100 pp (25%), 1d100 gems (50%), 1d4×10 jewellery (50%), 4 magic items plus 1 potion and 1 scroll (15%), 2d4 potions (40%), 1d4 scrolls (50%)",
      "habitats": [
        {
          "type": "Forests",
          "chance": "80%"
        },
        {
          "type": "Ruins or caverns near forests",
          "chance": "20%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 7,
          "hpPerDie": 1,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 7,
          "hpPerDie": 3,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 8,
          "hpPerDie": 5,
          "casterLevel": 5,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 9,
          "hpPerDie": 6,
          "casterLevel": 6,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 9,
          "hpPerDie": 8,
          "casterLevel": 9,
          "saveBonus": 4
        }
      ]
    },

    {
      "name": "Red Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "L (48' long)",
      "move": "9\"; 24\" flying (AA:II)",
      "armorClass": -1,
      "hitDice": "9–11",
      "attacks": 3,
      "damage": "1d8/1d8/3d10",
      "specialAttacks": "Fire breath (cone 90' long, 15' radius base), 3x/day",
      "specialDefenses": "Standard; save vs breath weapon for half",
      "magicResistance": "Standard",
      "lairProbability": "60%",
      "intelligence": "Exceptional",
      "alignment": "Chaotic evil",
      "levelXP": "Varies by age and HD",
      "description": "Red dragons are the most fearsome and iconic of all dragons—greedy, arrogant, and overwhelmingly powerful. They hoard treasure obsessively and attack without provocation. Their fiery breath is devastating, and they are often encountered in mountainous lairs.",
      "specialAbilities": {
        "breathWeapon": "Cone of fire (90' long, 15' radius), damage = HP, save for half, 3/day",
        "spells": {
          "casterLevel": "Equal to age category (if spellcaster)",
          "castingChance": "40%"
        },
        "sleepChance": "20%, 1-in-6 chance to wake if adventurers nearby",
        "speakingChance": "80%",
        "feignSleep": true
      },
      "treasure": "5d6×1,000 cp (25%), 1d100×1,000 sp (40%), 1d4×10,000 ep (40%), 1d6×10,000 gp (55%), 5d10×100 pp (25%), 1d100 gems (50%), 1d4×10 jewellery (50%), 4 magic items + 1 potion + 1 scroll (15%), 2d4 potions (40%), 1d4 scrolls (50%)",
      "habitats": [
        {
          "type": "Mountain peaks and volcanoes",
          "chance": "90%"
        },
        {
          "type": "Remote caverns",
          "chance": "10%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 9,
          "hpPerDie": 1,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 9,
          "hpPerDie": 3,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 10,
          "hpPerDie": 5,
          "casterLevel": 5,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 11,
          "hpPerDie": 6,
          "casterLevel": 6,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 11,
          "hpPerDie": 8,
          "casterLevel": 8,
          "saveBonus": 4
        }
      ]
    },

    {
      "name": "Silver Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Very rare",
      "numberAppearing": "1d4",
      "size": "L (48' long)",
      "move": "9\"; 24\" flying (AA:II)",
      "armorClass": -1,
      "hitDice": "9–11",
      "attacks": 3,
      "damage": "1d6/1d6/5d6",
      "specialAttacks": "Frost or paralysing gas breath, 3x/day",
      "specialDefenses": "Standard; breath save for half or paralysis",
      "magicResistance": "Standard",
      "lairProbability": "55%",
      "intelligence": "Exceptional",
      "alignment": "Lawful good",
      "levelXP": "Varies by age and HD",
      "description": "Silver dragons are noble and benevolent creatures found in high mountains and cloud-covered peaks. They often take human form to observe and aid humankind, guided by a strong moral compass. Though peaceful by nature, they are powerful defenders of good.",
      "specialAbilities": {
        "breathWeapon": "Cone of frost (50' long, 25' diameter) or cloud of paralysing gas (save or paralyzed for 3d4 turns), 3/day",
        "spells": {
          "casterLevel": "Equal to age category",
          "castingChance": "75%"
        },
        "sleepChance": "15%, 1-in-6 chance to wake if adventurers nearby",
        "speakingChance": "75%",
        "feignSleep": true
      },
      "treasure": "5d6×1,000 cp (25%), 1d100×1,000 sp (40%), 1d4×10,000 ep (40%), 1d6×10,000 gp (55%), 5d10×100 pp (25%), 1d100 gems (50%), 1d4×10 jewellery (50%), 4 magic items + 1 potion + 1 scroll (15%), 1d4 scrolls (50%)",
      "habitats": [
        {
          "type": "Mountain peaks",
          "chance": "70%"
        },
        {
          "type": "Cloud islands",
          "chance": "30%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 9,
          "hpPerDie": 1,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 9,
          "hpPerDie": 3,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 10,
          "hpPerDie": 5,
          "casterLevel": 5,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 11,
          "hpPerDie": 6,
          "casterLevel": 6,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 11,
          "hpPerDie": 8,
          "casterLevel": 8,
          "saveBonus": 4
        }
      ]
    },

    {
      "name": "White Dragon",
      "category": "Dragons",
      "name_variants": "",
      "frequency": "Uncommon",
      "numberAppearing": "1d4",
      "size": "L (24' long)",
      "move": "12\"; 30\" flying (AA:II)",
      "armorClass": 3,
      "hitDice": "5–7",
      "attacks": 3,
      "damage": "1d4/1d4/2d8",
      "specialAttacks": "Cone of frost (50' long, 25' base), 3x/day",
      "specialDefenses": "Standard; save vs breath weapon for half damage",
      "magicResistance": "Standard",
      "lairProbability": "30%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "Varies by age and HD",
      "description": "White dragons are cruel and unintelligent predators dwelling in arctic and mountainous regions. Though less cunning than their chromatic cousins, they are vicious foes and masters of frigid breath attacks.",
      "specialAbilities": {
        "breathWeapon": "Cone of frost, 50' long and 25' wide at the base; damage equals current HP, 3/day",
        "spells": {
          "casterLevel": "1/2 age category (only 5% chance)",
          "castingChance": "5%"
        },
        "sleepChance": "60%, 1-in-6 chance to wake if adventurers nearby",
        "speakingChance": "20%",
        "feignSleep": true
      },
      "treasure": "1d12×1,000 cp (15%), 1d20×1,000 sp (25%), 1d6×1,000 ep (25%), 1d8×1,000 gp (25%), 1d12 gems (15%), 1d8 jewellery (10%), 3 magic items + 2d4 potions + 1 scroll (25%)",
      "habitats": [
        {
          "type": "Frozen tundra",
          "chance": "50%"
        },
        {
          "type": "Icy mountain lairs",
          "chance": "50%"
        }
      ],
      "ageCategories": [
        {
          "age": "Young",
          "hitDice": 5,
          "hpPerDie": 1,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Juvenile",
          "hitDice": 5,
          "hpPerDie": 3,
          "casterLevel": 0,
          "saveBonus": 0
        },
        {
          "age": "Adult",
          "hitDice": 6,
          "hpPerDie": 5,
          "casterLevel": 3,
          "saveBonus": 1
        },
        {
          "age": "Old",
          "hitDice": 7,
          "hpPerDie": 6,
          "casterLevel": 4,
          "saveBonus": 2
        },
        {
          "age": "Ancient",
          "hitDice": 7,
          "hpPerDie": 8,
          "casterLevel": 4,
          "saveBonus": 4
        }
      ]
    },
    {
      "name": "Dwarf",
      "category": "Demi-Human",
      "frequency": "Common",
      "numberAppearing": "40d10",
      "size": "Small (4 ft tall)",
      "move": "60 ft",
      "armorClass": 4,
      "hitDice": 1,
      "attacks": 1,
      "damage": "1d8 or by weapon",
      "specialAttacks": "+1 to hit orcs and goblins",
      "specialDefenses": "Save at 4 levels higher; giants, trolls, and ogres fight at -4",
      "magicResistance": "As above",
      "lairProbability": "50%",
      "intelligence": "Very",
      "alignment": "Lawful good",
      "levelXP": "2/30+1/hp",
      "description": "Dwarfs are sturdy humanoids who live in extended clans, often in rocky hills. They hate orcs and goblins, gaining +1 to hit them. Giants, trolls, and ogres fight at -4 when fighting dwarfs. Save vs poison/magic as if 4 levels higher.",
      "leaders": {
        "per_40": "1d6 (1 = 2nd level, 2–6 = 6th level) fighter",
        "over_160": [
          "1 6th level fighter (chief)",
          "1 4th level fighter (lieutenant)"
        ],
        "over_200": "1 fighter/cleric (3rd–6th level fighter, 4th–7th level cleric)",
        "over_320": [
          "1 8th level fighter",
          "1 7th level fighter",
          "1 6th level fighter / 7th level cleric"
        ]
      },
      "variants": {
        "Mountain Dwarf": {
          "hitDice": "1d8+1",
          "height": "4½ ft"
        }
      },
      "treasure": {
        "individual": "2d4×5 gp",
        "lair": {
          "gp": { "amount": "10d4×1,000", "chance": "50%" },
          "pp": { "amount": "1d20×100", "chance": "50%" },
          "gems1": { "amount": "5d4", "chance": "30%" },
          "gems2": { "amount": "1d4×20", "chance": "50%" },
          "jewellery": { "amount": "1d10", "chance": "25%" },
          "magic_items": { "amount": 4, "chance": "15%" }
        }
      }
    },

    {
      "name": "Eel, Giant",
      "category": "Animal",
      "variants": [
        {
          "type": "Moray",
          "frequency": "Uncommon",
          "numberAppearing": "1d4",
          "size": "Large",
          "move": "90 ft swimming",
          "armorClass": 6,
          "hitDice": 5,
          "attacks": 1,
          "damage": "3d6",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "4/110+4/hp"
        },
        {
          "type": "Electric",
          "frequency": "Rare",
          "numberAppearing": "1d4",
          "size": "Medium",
          "move": "120 ft swimming",
          "armorClass": 9,
          "hitDice": 2,
          "attacks": 1,
          "damage": "1d4",
          "specialAttacks": "Electricity",
          "specialDefenses": "None",
          "levelXP": "2/40+2/hp"
        },
        {
          "type": "Weed",
          "frequency": "Very rare",
          "numberAppearing": "1d4",
          "size": "Small",
          "move": "150 ft swimming",
          "armorClass": 8,
          "hitDice": "1d6 hp",
          "attacks": 1,
          "damage": 1,
          "specialAttacks": "Poison",
          "specialDefenses": "None",
          "levelXP": "1/30+1/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil (Moray, Electric); 100% (Weed)",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "treasure": {
        "weed_eel_lair": {
          "cp": {"amount": "1d4×1,000", "chance": "30%"},
          "sp": {"amount": "1d10×1,000", "chance": "50%"},
          "ep": {"amount": "1d3×1,000", "chance": "20%"},
          "gp": {"amount": "1d8×1,000", "chance": "45%"},
          "pp": {"amount": "2d8×100", "chance": "60%"},
          "gems": {"amount": "6d6", "chance": "50%"},
          "jewellery": {"amount": "2d6", "chance": "50%"}
        }
      },
      "description": "Giant moray eels inhabit saltwater environments, sometimes serving locathah as battle mounts or guards. Electric eels discharge electricity when threatened, damaging creatures within 15 ft (3d8 damage at 5 ft, 2d8 at 5-10 ft, 1d8 at 10-15 ft). Weed eels camouflage themselves as seaweed and deliver lethal poison through their bite (save or die). Their lairs connect through small tunnels to a large central cave paved with shiny objects."
    },
    {
      "name": "Elephant",
      "category": "Animal",
      "variants": [
        {
          "type": "African",
          "frequency": "Common",
          "numberAppearing": "1d12",
          "size": "Large",
          "move": "150 ft",
          "armorClass": 6,
          "hitDice": 11,
          "attacks": 5,
          "damage": "2d8/2d8/2d6/2d6/2d6",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "7/1,400 +14/hp"
        },
        {
          "type": "Asian",
          "frequency": "Common",
          "numberAppearing": "1d12",
          "size": "Large",
          "move": "150 ft",
          "armorClass": 5,
          "hitDice": 10,
          "attacks": 5,
          "damage": "2d8/2d8/2d6/2d6/2d6",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "7/1,100 +13/hp"
        },
        {
          "type": "Mammoth",
          "frequency": "Very rare",
          "numberAppearing": "1d12",
          "size": "Large",
          "move": "150 ft",
          "armorClass": 6,
          "hitDice": 13,
          "attacks": 5,
          "damage": "3d6/3d6/2d8/2d8/2d8",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "7/2,300 +17/hp"
        },
        {
          "type": "Mastodon",
          "frequency": "Very rare",
          "numberAppearing": "1d12",
          "size": "Large",
          "move": "150 ft",
          "armorClass": 6,
          "hitDice": 12,
          "attacks": 5,
          "damage": "2d8/2d8/2d6/2d6/2d6",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "7/1,900 +16/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "Ivory is worth 1d6×100gp per tusk. An elephant tusk is hugely encumbering.",
      "description": "Elephants are large mammals found in subtropical regions, traveling in small herds across plains and grasslands. African elephants are typically larger with bigger ears than Asian elephants. Both can be trained as beasts of burden. Mammoths and mastodons are prehistoric ancestors with woolly coats suited to subarctic environments. All elephants attack with tusks, trunk, and forelegs, although no single opponent can be subject to more than two attacks simultaneously."
    },

    {
      "name": "Elf",
      "category": "Demi-Human",
      "variants": [
        {
          "name": "High Elf",
          "description": "The standard elven type. Slim of build and pale complected with dark hair and green eyes. Typically wear pastel garb of blue, green, or violet, often covered by a greenish gray cloak.",
          "lifespan": "Over 1,200 years"
        },
        {
          "name": "Aquatic Elf",
          "description": "Sea elves with gill slits on the throat, greenish-silver skin, and green or blue-green hair. Live in caverns in lagoon bottoms and reefs.",
          "specialAbilities": {
            "movement": "Seaweed affords little or no hindrance",
            "invisibility": "Invisible in weeds or on reefs",
            "companions": "50% chance of 1-3 friendly dolphins per 20 sea elves"
          },
          "equipment": {
            "weapons": "Spears and tridents, usually with nets",
            "noMagic": true
          },
          "relationships": {
            "friends": ["Dolphins", "Land elves"],
            "enemies": ["Sharks", "Sahuagin"],
            "neutral": ["All others"],
            "dislike": ["Fishermen"]
          },
          "languages": ["Elvish only"]
        },
        {
          "name": "Drow",
          "description": "The 'Black Elves' are only legend. They purportedly dwell deep beneath the surface in a strange subterranean realm. Said to be as dark as faeries are bright and as evil as the latter are good.",
          "combat": {
            "fighting": "Weak",
            "magic": "Strong"
          },
          "status": "Legendary, not confirmed to exist"
        },
        {
          "name": "Gray Elf (Faerie)",
          "description": "Noble elves, the rarest and most powerful of their kind. They favor white, yellow, silver, or gold garments with cloaks often deep blue or purple.",
          "appearance": {
            "variant1": {"hair": "Silver", "eyes": "Amber"},
            "variant2": {"hair": "Pale golden", "eyes": "Violet", "name": "Faerie"}
          },
          "specialAbilities": {
            "intelligence": "+1 on dice roll",
            "wizardry": "Those with supra-genius abilities can become wizards"
          },
          "equipment": {
            "armor": "Chain mail and shield",
            "weapons": "All carry swords"
          },
          "mounts": {
            "hippogriffs": {"chance": "50% × 70%"},
            "griffons": {"number": "3-12", "chance": "50% × 30%"}
          },
          "behavior": "Very reclusive, live in isolated meadowlands, never associate with other humanoids (except elves) for long",
          "languages": "Same as high elves",
          "lifespan": "Beyond 1,500 years"
        },
        {
          "name": "Half-Elf",
          "description": "All half-elves are of human stock. Handsome folk with good features of each race. Slightly taller than average elf (5½') and weighing about 150 pounds.",
          "specialAbilities": {
            "secretDoors": "Detect as elves (⅓ to ½ chance)",
            "infravision": "Normal",
            "multiclass": "Can progress in two or three categories simultaneously"
          },
          "maxLevel": {
            "standard": "6/6/4 (fighter/magic-user/cleric)",
            "exceptional": {
              "strength17": "7th level fighter",
              "strength18": "8th level fighter",
              "intelligence17": "7th level magic-user",
              "intelligence18": "8th level magic-user"
            }
          },
          "languages": ["Goblin", "Orcish", "Gnoll", "Halflingish", "Gnomish", "Elvish", "Alignment", "Common"],
          "lifespan": "250 years"
        },
        {
          "name": "Wood Elf",
          "description": "Also called sylvan elves, very reclusive and generally avoid all contact (75%). Fair complexion with yellow to coppery red hair and light brown, light green, or hazel eyes. Wear russets, reds, brown and tans with green or greenish brown cloaks.",
          "specialAbilities": {
            "strength": "+1 to all die rolls (19 treated as 18)",
            "intelligence": "Slightly lower (18 treated as 17)"
          },
          "equipment": {
            "armor": "Studded leather or ring mail (AC 6)",
            "weapons": {
              "bows": "50%",
              "swords": "20%",
              "spears": "40%"
            }
          },
          "lairGuards": {
            "chance": "70%",
            "options": [
              {"type": "Giant owls", "number": "2-8", "chance": "80%"},
              {"type": "Giant lynx", "number": "1-6", "chance": "20%"}
            ]
          },
          "habitat": "Primaeval forests and distant woodlands",
          "languages": ["Elvish", "Certain woods animals", "Treant"],
          "alignment": "More neutral than other elves",
          "lifespan": "Several centuries"
        }
      ],
      "frequency": "Uncommon",
      "numberAppearing": "20-200",
      "size": "M (5'+ tall)",
      "move": "12\"",
      "armorClass": 5,
      "hitDice": "1+1",
      "attacks": 1,
      "damage": "By weapon type",
      "specialAttacks": "+1 with normal bow or sword",
      "specialDefenses": "90% resistant to charm and sleep spells",
      "magicResistance": "90% to charm and sleep only",
      "lairProbability": "10%",
      "intelligence": "High and up",
      "alignment": "Chaotic good",
      "psionicAbility": "Nil",
      "specialAbilities": {
        "multiclass": "Able to operate in two or more classes simultaneously",
        "stealth": {
          "movement": "In natural surroundings can move silently (surprise on 1-4)",
          "invisibility": "Can blend into vegetation as long as not attacking"
        },
        "combat": "Can move, fire bows, and move back all in the same round",
        "senses": {
          "infravision": "60 ft",
          "secretDoors": "Note secret or hidden doors ⅓ to ½ of the time"
        },
        "languages": ["Common", "Alignment", "Elvish", "Halflingish", "Gnomish", "Goblin", "Orc", "Hobgoblin", "Gnoll"]
      },
      "leaders": {
        "per_20": {"level": "2nd or 3rd", "class": "fighter", "count": 1},
        "per_40": {"level": ["2nd or 3rd fighter", "1st or 2nd magic-user"], "count": 1},
        "over_100": [
          {"level": ["4th fighter", "8th magic-user"], "count": 1},
          {"level": ["4th fighter", "5th magic-user"], "count": 2},
          {"level": ["4th fighter", "4th magic-user", "4th cleric"], "count": 1}
        ],
        "over_160": {
          "main": [
            {"level": ["6th fighter", "9th magic-user"], "count": 1},
            {"level": ["6th fighter", "6th magic-user", "6th cleric"], "count": 1}
          ],
          "retainers": [
            {"level": ["4th fighter", "5th magic-user"], "count": 2},
            {"level": ["3rd fighter", "3rd magic-user", "3rd cleric"], "count": 2}
          ]
        },
        "lair_additional": [
          {"level": ["4th fighter", "7th magic-user"], "count": 1},
          {"level": "4th fighter", "count": "1 per 40 elves"},
          {"level": ["2nd fighter", "2nd magic-user", "2nd cleric"], "count": "1 per 40 elves"},
          {"level": "5th fighter", "count": 1},
          {"level": "6th fighter", "count": 1},
          "Females and young equal to 100% and 5% respectively"
        ],
        "magic_item_chance": "10% per level per class for usable items"
      },
      "dwelling": {
        "location": "Secluded copse, wood or forest",
        "guards": {"type": "Giant eagles", "number": "2-12", "chance": "65%"}
      },
      "equipment": {
        "armor": "Usually in scale, ring, or chain mail, most carry shields",
        "weaponDistribution": {
          "swordAndBow": "10%",
          "swordAndSpear": "20%",
          "sword": "20%",
          "twoHandedSword": "5%",
          "spear": "30%",
          "bow": "15%"
        }
      },
      "mounts": {
        "unicorns": {
          "riders": "Female fighters (elfmaids)",
          "number": "10-30",
          "chance": "5%"
        }
      },
      "treasure": {
        "individual": "N",
        "lair": "G, S, T"
      }
    },
    {
      "name": "Elves, Patrol (Foot)",
      "category": "Elves",
      "frequency": "Rare",
      "numberAppearing": "13d6+5",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": "5 (varies by role)",
      "hitDice": "1 (base elves); variable for leaders",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Magic and ranged attacks",
      "specialDefenses": "Resistance to charm and sleep (as elves); spells",
      "magicResistance": "Standard",
      "lairProbability": "5%",
      "intelligence": "Very to high",
      "alignment": "Neutral good or chaotic good",
      "levelXP": "Variable",
      "description": "Elven Patrols consist of elves and half-elves performing reconnaissance or defensive sweeps through their territory. While often mounted, some operate afoot depending on terrain. All carry bows and long swords, and are trained in stealth and woodland tactics. Leaders include fighter/magic-users and ranger-clerics. Patrols may ambush enemies and withdraw before engaging heavily.",
      "leaders": {
        "captain": {
          "level": "F/M-U, 4-6 / 5-7",
          "class": "fighter/magic-user",
          "count": 1
        },
        "lieutenants": {
          "level": "F/M-U, 3-5 / 4-6",
          "class": "fighter/magic-user",
          "count": 2
        },
        "serjeants": {
          "level": "3-5",
          "class": "fighter",
          "count": 4
        },
        "scout_half_elf": {
          "level": "C/R, 5 / 5-7",
          "class": "cleric/ranger",
          "count": 1
        },
        "scouts": {
          "level": "1-2",
          "class": "ranger",
          "count": 4
        }
      },
      "equipment": {
        "weapons": "All carry bows and long swords",
        "armor": "Standard elven chain (AC 5); leaders may have enchanted items",
        "magic_items": "5% per highest level for armor, shield, sword, potion, scroll"
      },
      "treasure": {
        "individual": "1d6 sp, 1d4 arrows (1 per level is magical)",
        "lair": {
          "gems": {"amount": "2d4", "chance": "50%"},
          "jewellery": {"amount": "1d6", "chance": "30%"},
          "magic_items": {"amount": 1, "chance": "20%"}
        }
      }
    },
    {
      "name": "Elves, Patrol (Mounted)",
      "category": "Elves",
      "name_variants": "Elven Patrol, Mounted Elves",
      "frequency": "Uncommon",
      "numberAppearing": "25d6", 
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": "4–5",
      "hitDice": "Varies by type",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Surprise on 4-in-6 if in forested terrain",
      "specialDefenses": "Standard elven resistances; see Elves",
      "magicResistance": "Standard",
      "lairProbability": "5%",
      "intelligence": "High",
      "alignment": "Chaotic Good or Neutral Good",
      "levelXP": "Variable",
      "description": "Mounted Elven Patrols consist of elite warrior-spellcasters and scouts from elven realms, traveling on light and medium warhorses. They patrol wilderness borders, often with bows and swords, and rely on stealth, magic, and ambush tactics.",
      "leaders": {
        "captain": { "level": "4-6 / 5-7", "class": "fighter/magic-user", "count": 1 },
        "lieutenants": { "level": "3-5 / 4-6", "class": "fighter/magic-user", "count": 2 },
        "serjeants": { "level": "3-5", "class": "fighter", "count": 4 },
        "scout_leader": { "level": "5 / 5-7", "class": "cleric/ranger", "count": 1 },
        "scouts": { "level": "1-2", "class": "ranger", "count": 4 },
        "troopers": { "level": 1, "class": "fighter", "count": "13-18" }
      },
      "equipment": {
        "armor_and_weapons": {
          "captain": "AC 4; bow, long sword, spells",
          "lieutenants": "AC 5; bow, long sword, spells",
          "serjeants": "AC 4; bow, long sword, mace",
          "scouts": "AC 5; bow, long sword",
          "troopers": "AC 5; bow, long sword"
        },
        "mounts": {
          "captain": "Medium warhorse",
          "lieutenants": "Medium warhorse",
          "serjeants": "Light warhorse",
          "scouts": "Light warhorse",
          "troopers": "Mix of light/medium warhorses"
        }
      },
      "treasure": {
        "individual": "1d6 gp",
        "group": {
          "gems": { "amount": "2d10", "chance": "30%" },
          "magic_items": { "chance": "5% per level of leader" }
        }
      }
    },
    
    {
      "name": "Elves, Knights",
      "category": "Elves",
      "name_variants": "Elven Knights, Knights of the Hart",
      "frequency": "Rare",
      "numberAppearing": "15d6+1d6",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": "3 (Knights), 4 (Esquires), 5 (Serjeants)",
      "hitDice": "2 (all knights are Level 2 fighters at minimum)",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Magic-users may cast spells",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "15%",
      "intelligence": "High",
      "alignment": "Chaotic Good",
      "levelXP": "Variable by class and level",
      "description": "Elven Knights are mounted warriors of the Knights of the Hart. Parties include knights, esquires, serjeants, and elven fighter/magic-users. Knights ride medium, barded warhorses; esquires ride medium warhorses; serjeants ride light warhorses. Units are well-equipped and may possess magical items based on level.",
      "leaders": {
        "commander": { "level": "7/7", "class": "fighter/cleric", "count": 1 },
        "lieutenant": { "level": "6/6", "class": "fighter/cleric", "count": 1 },
        "knights": { "level": "5/5", "class": "fighter/cleric", "count": "5d4" },
        "magic_user": {
          "main": { "level": "4-6/8-11", "class": "fighter/magic-user", "count": 1 },
          "assistants": { "level": "3-5/4-7", "class": "fighter/magic-user", "count": "1d3" }
        },
          "serjeant": {
            "level": 2,
            "class": "fighter",
            "count": "3-12 per knight"
          },
        "entourage": {
          "esquire": { "level": "3-4/3-4", "class": "fighter/cleric", "count": "1d4 per knight" },
          "serjeants": { "level": 2, "class": "fighter", "count": "3d4 per knight" }
        }
      },
      "equipment": {
        "mounts_armor_weapons": {
          "knights": "Medium barded horse, shield, lance, long sword, mace",
          "esquires": "Medium horse, shield, lance, long sword, mace",
          "serjeants": "Light horse, bow, long sword, mace",
          "magic_users": "Same armor as esquires; bow, long sword"
        },
        "magic_item_chance": "5% per level of highest class (armor, shield, sword, potion, scroll, ring, rod)",
        "magic_arrow_count": "1 per highest level for bow-armed elves"
      },
      "treasure": {
        "individual": "1d8 gp",
        "lair": {
          "gems": { "amount": "2d6", "chance": "40%" },
          "magic_items": { "amount": 1, "chance": "25%" }
        }
      }
    },
    
    {
      "name": "Ettercap",
      "category": "Aberration",
      "variants": [
        {
          "name": "Ettercap",
          "description": "Grotesque humanoid-arachnid hybrids that spin silk from stubby tails and construct web-based traps and snares around their lairs. They are cunning ambush predators.",
          "appearance": {
            "size": "Man-sized",
            "features": "Arachnid face, silk-spinning tail"
          },
          "behavior": {
            "alignment": "Neutral evil",
            "intelligence": "Semi-",
            "habitat": "Underground or forested lairs",
            "tactics": "Sets traps using silk; may use lassos or garrottes"
          },
          "combat": {
            "attacks": 3,
            "damage": "1d4 / 1d4 / 1d8",
            "specialAttacks": "Poisonous bite"
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "1d2",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 6,
      "hitDice": "5+1",
      "attacks": 3,
      "damage": "1d4 / 1d4 / 1d8",
      "specialAttacks": "Poison",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "30%",
      "intelligence": "Semi-",
      "alignment": "Neutral evil",
      "levelXP": "4/150 + 5/hp",
      "treasure": "None"
    },
    {
      "name": "Executioner’s Hood",
      "category": "Aberration",
      "variants": [
        {
          "name": "Executioner’s Hood",
          "description": "A small, amorphous predator that drops from ceilings and envelops a victim’s head, attempting to strangle them to death.",
          "appearance": {
            "size": "Small",
            "form": "Amorphous, flaccid mass with strong muscular body"
          },
          "behavior": {
            "alignment": "Neutral evil",
            "intelligence": "Semi-",
            "habitat": "Underground or ruin ceilings",
            "tactics": "Ambush drop, then auto-hit while latched on"
          },
          "combat": {
            "attacks": 1,
            "damage": "1d4 per round (if attached)",
            "specialAttacks": "Auto-hit while attached; only removable by alcohol or death"
          },
          "defenses": {
            "note": "Attacks targeting the creature also affect the victim"
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "1",
      "size": "Small",
      "move": "60 ft",
      "armorClass": 6,
      "hitDice": "3 to 6",
      "attacks": 1,
      "damage": "1d4",
      "specialAttacks": "Latch-on suffocation",
      "specialDefenses": "Must be bathed in alcohol or slain to remove",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Semi-",
      "alignment": "Neutral evil",
      "levelXP": "4/250 + 4/hp",
      "treasure": "None"
    },
    {
      "name": "Eye of the Deep",
      "category": "Aberration",
      "variants": [
        {
          "name": "Eye of the Deep",
          "description": "An aquatic beholder-like horror with powerful eye magic, massive claws, and a central eye that stuns its prey. It lurks in deep waters or sunken ruins.",
          "appearance": {
            "size": "Large (4 ft diameter)",
            "features": "Floating orb with central eye, 2 eyestalks, lobster claws"
          },
          "behavior": {
            "alignment": "Lawful evil",
            "intelligence": "Very",
            "habitat": "Underwater lairs or ruins",
            "abilities": [
              "Central eye: 30 ft cone, stun 2d4 rounds (save vs magic item)",
              "Left eyestalk: Hold monster",
              "Right eyestalk: Hold person",
              "Both eyestalks: Phantasmal force"
            ]
          },
          "combat": {
            "attacks": 3,
            "damage": "2d4 / 2d4 / 1d6",
            "magicUse": "Spell-like powers usable every round"
          },
          "treasure": {
            "gp": "2d6×1,000 (50%)",
            "pp": "1d4×1,000 (40%)",
            "gems": "4d10 (40%)",
            "jewellery": "2d6 (35%)"
          }
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Large",
      "move": "60 ft swimming",
      "armorClass": 5,
      "hitDice": 11,
      "attacks": 3,
      "damage": "2d4 / 2d4 / 1d6",
      "specialAttacks": "Stun cone, hold monster/person, phantasmal force",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Very",
      "alignment": "Lawful evil",
      "levelXP": "9/3,000 + 16/hp"
    },
    {
      "name": "Ettin",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Very rare",
      "numberAppearing": "1d4",
      "size": "Large (13 ft +)",
      "move": "120 ft",
      "armorClass": 3,
      "hitDice": 10,
      "attacks": 2,
      "damage": "2d8/3d6",
      "specialAttacks": "None",
      "specialDefenses": "Rarely surprised (dual heads)",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "7/1,370 + 14/hp",
      "description": "Ettins are large, nocturnal creatures that live below ground. They have two heads, each of which controls one arm. They are dirty creatures that wear tattered skins and often use wicked weapons, such as barbed clubs. They share some affinity to orcs, witnessed in their pig-like faces.",
      "specialAbilities": {
        "dualHeads": "Seldom surprised because one head or the other is usually keeping watch",
        "asymmetricAttacks": "Right arm (dominant) causes 3d6 damage, left arm causes 2d8"
      },
      "treasure": {
        "individual": {
          "gp": {"amount": "2d10", "chance": "100%"},
          "gems": {"amount": "1d6", "chance": "25%"},
          "jewellery": {"amount": "1d4", "chance": "20%"},
          "magic_items": {"amount": 2, "chance": "100%"}
        },
        "lair": {
          "gp": {"amount": "2d6×1,000", "chance": "70%"}
        }
      }
    },
    {
      "name": "Fish, Giant",
      "category": "Animal",
      "variants": [
        {
          "type": "Gar, Giant",
          "frequency": "Rare",
          "numberAppearing": "1d6",
          "size": "Large",
          "move": "300 ft swimming",
          "armorClass": 3,
          "hitDice": 8,
          "attacks": 1,
          "damage": "2d10",
          "specialAttacks": "See below",
          "specialDefenses": "Nil",
          "levelXP": "6/575+4/hp"
        },
        {
          "type": "Pike, Giant",
          "frequency": "Rare",
          "numberAppearing": "1d8",
          "size": "Large",
          "move": "300 ft swimming",
          "armorClass": 5,
          "hitDice": 4,
          "attacks": 1,
          "damage": "3d6",
          "specialAttacks": "Surprise",
          "specialDefenses": "Nil",
          "levelXP": "4/90+10/hp"
        },
        {
          "type": "Leviathan",
          "frequency": "Very rare",
          "numberAppearing": "1",
          "size": "Huge",
          "move": "300 ft swimming",
          "armorClass": 6,
          "hitDice": 24,
          "attacks": 1,
          "damage": "5d4",
          "specialAttacks": "Swallow whole on 1-4",
          "specialDefenses": "Nil",
          "levelXP": "9/5,000+24/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Giant gar inhabit deep rivers and lakes. They can swallow man-sized prey whole on a roll of 20. Swallowed victims have a cumulative 5% chance per segment of drowning but may cut themselves free by dealing 25% of the gar's HP in damage. Giant pike are aggressive deep-lake predators that often guard nixies' lairs and surprise prey on 1-4 on 1d6. Leviathans are enormous fish that can capsize vessels and swallow victims whole on a failed save vs. death."
    },

    {
      "name": "Flind",
      "category": "Humanoid",
      "frequency": "Rare",
      "numberAppearing": "2d12",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 5,
      "hitDice": "2+3",
      "attacks": 1,
      "damage": "2d4 or by weapon",
      "specialAttacks": "Disarm (25% chance to wield flindbar)",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Average",
      "alignment": "Chaotic evil",
      "levelXP": "2/40+4/hp",
      "description": "Stronger kin of gnolls. Often lead gnoll bands. May use flindbars (special disarming weapons). Dislike trolls.",
      "leaders": {
        "over_20": "1 leader (3+3 HD, STR 18, CHA 18 to gnolls); uses flindbar"
      },
      "languages": ["gnoll", "bugbear", "hobgoblin", "ogrish", "orcish"],
      "treasure": {
        "individual": "1d6 gp",
        "lair": {
          "cp": {"amount": "1d6×1,000", "chance": "30%"},
          "sp": {"amount": "1d6×1,000", "chance": "25%"},
          "ep": {"amount": "2d4×1,000", "chance": "35%"},
          "gp": {"amount": "1d10×1,000", "chance": "45%"},
          "pp": {"amount": "1d4×100", "chance": "20%"},
          "gems": {"amount": "5d8", "chance": "50%"},
          "jewellery": {"amount": "4d12", "chance": "65%"},
          "magic": {"amount": "3 items or maps", "chance": "25%"}
        }
      }
    },
    {
      "name": "Fly, Giant",
      "category": "Giant Insect",
      "variants": [
        {
          "name": "Blow Fly, Giant",
          "description": "Large, metallic green or blue flies attracted to carrion, blood, and sweet substances. They rarely attack the living unless blood is present.",
          "appearance": {
            "size": "Medium",
            "color": "Metallic green or blue with coarse black hairs and dark orange eyes"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Non-",
            "habitat": "Areas of decay, waste, or spoiled food",
            "tactics": "Hover, land to bite, leap away defensively"
          },
          "combat": {
            "attacks": 1,
            "damage": "1d8+1",
            "specialAttacks": "10% chance of disease with bite",
            "defenses": "Leap-jump 30 ft and hover (non-retreating)"
          }
        },
        {
          "name": "Horsefly, Giant",
          "description": "Aggressive bloodsuckers with tan and brown coloration. They land to bite warm-blooded creatures and feed continuously if not driven off.",
          "appearance": {
            "size": "Large (9 ft long)",
            "color": "Flat tan and brown with shiny brown eyes"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Non-",
            "habitat": "Any warm-blooded prey territory",
            "tactics": "Attack with bite, drain blood next round"
          },
          "combat": {
            "attacks": 1,
            "damage": "2d6",
            "specialAttacks": "Inflicts same damage next round unless interrupted",
            "defenses": "Leap 30 ft and hover"
          }
        }
      ],
      "frequency": {
        "Blow Fly": "Rare",
        "Horsefly": "Very rare"
      },
      "numberAppearing": {
        "Blow Fly": "1d12",
        "Horsefly": "1d6"
      },
      "move": "90 ft; 300 ft flying (AA:III)",
      "armorClass": {
        "Blow Fly": 6,
        "Horsefly": 5
      },
      "hitDice": {
        "Blow Fly": 3,
        "Horsefly": 6
      },
      "attacks": 1,
      "damage": {
        "Blow Fly": "1d8+1",
        "Horsefly": "2d6"
      },
      "specialAttacks": "Disease (Blow Fly), Blood Drain (Horsefly)",
      "specialDefenses": "Leap/hover avoidance",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": {
        "Blow Fly": "3/40 + 3/hp",
        "Horsefly": "4/165 + 6/hp"
      },
      "treasure": "None"
    },
    {
      "name": "Frog, Giant",
      "category": "Animal",
      "frequency": "Uncommon",
      "numberAppearing": "5d8",
      "size": "Small to medium",
      "move": "30 ft; 90 ft swimming",
      "armorClass": 7,
      "hitDice": "1 to 3",
      "attacks": "1",
      "damage": "1d3, 1d6 or 2d4",
      "specialAttacks": "Tongue attack, swallow",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "1/10 +5/hp, 2/30 +10/hp, 3/50 +15/hp",
      "treasure": "None",
      "description": "Giant frogs can be 2, 4, or 6 ft in length. Found in similar habitats to normal frogs, they have camouflage and surprise on a roll of 1-4 on 1d6. They jump vast distances, shoot sticky tongues to attack, and may attempt to drag smaller victims into their mouths. If they score a natural 20, they can swallow prey whole."
    },
    {
      "name": "Fungi, Violet",
      "category": "Plant",
      "variants": [
        {
          "name": "Violet Fungi",
          "description": "Fungal creatures resembling shriekers, with waving rot-spore branches that cause rapid tissue decay. Often found in dungeon environments.",
          "appearance": {
            "size": "Small to medium (4–7 ft tall)",
            "structure": "1d4 rot-spore branches, length = height in ft"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Non-",
            "habitat": "Underground areas; often with shriekers",
            "tactics": "Detects movement, waves branches to release rot spores"
          },
          "combat": {
            "attacks": "1d4",
            "damage": "Save vs poison or rot flesh in 1 round",
            "specialAttacks": "Rot spores require cure disease if failed save"
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "Small to Medium",
      "move": "10 ft",
      "armorClass": 7,
      "hitDice": 3,
      "attacks": "1d4",
      "damage": "Rot flesh (Save vs poison)",
      "specialAttacks": "Rotting spores",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "3/50 + 1/hp",
      "treasure": "None"
    },
    {
      "name": "Gargoyle",
      "category": "Magical Beast",
      "variants": [
        {
          "name": "Gargoyle",
          "description": "Malicious, horned winged humanoids made of enchanted stone. Gargoyles lie in wait, blending into masonry before springing to attack with tooth, claw, and horn.",
          "appearance": {
            "size": "Man-sized",
            "form": "Grotesque stone-skinned creature with wings and a horn"
          },
          "behavior": {
            "alignment": "Chaotic evil",
            "intelligence": "Low",
            "habitat": "Ruins, dungeons, ancient towers",
            "tactics": "Attack any living creature 90% of the time"
          },
          "combat": {
            "attacks": 4,
            "damage": "1d3 / 1d3 / 1d6 / 1d4",
            "specialDefenses": "Only hit by +1 or better magical weapons"
          }
        }
      ],
      "frequency": "Uncommon",
      "numberAppearing": "2d8",
      "size": "Man-sized",
      "move": "90 ft; 150 ft flying (AA:IV)",
      "armorClass": 5,
      "hitDice": "4+4",
      "attacks": 4,
      "damage": "1d3 / 1d3 / 1d6 / 1d4",
      "specialAttacks": "None",
      "specialDefenses": "+1 or better weapon to hit",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "4/155 + 4/hp",
      "treasure": "None"
    },
    {
      "name": "Gelatinous Cube",
      "category": "Ooze",
      "variants": [
        {
          "name": "Gelatinous Cube",
          "description": "Transparent dungeon scavenger that silently glides through corridors absorbing organic matter. Nearly invisible, it paralyzes with its touch.",
          "appearance": {
            "size": "Large (10 ft cube)",
            "form": "Gelatinous, nearly invisible cube"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Non-",
            "habitat": "Dungeon corridors, ruins",
            "tactics": "Absorbs paralyzed prey, surprises on 1–3 in 6"
          },
          "combat": {
            "attacks": 1,
            "damage": "2d4",
            "specialAttacks": "Paralysis (3d6+2 rounds, save vs paralysis)"
          },
          "defenses": {
            "immunities": [
              "Electricity",
              "Fear",
              "Sleep",
              "Hold",
              "Paralysis",
              "Polymorph"
            ],
            "resistance": {
              "Cold": "1d4 damage max, save negates",
              "Fire": "Normal resistance"
            }
          },
          "treasure": "Incidental (items suspended within)"
        }
      ],
      "frequency": "Uncommon",
      "numberAppearing": "1",
      "size": "Large",
      "move": "60 ft",
      "armorClass": 8,
      "hitDice": 4,
      "attacks": 1,
      "damage": "2d4",
      "specialAttacks": "Paralyzing touch, surprise 1-3 in 6",
      "specialDefenses": "See description",
      "magicResistance": "Normal",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "3/150 + 4/hp"
    },
    {
      "name": "Genie",
      "category": "Extraplanar",
      "variants": [
        {
          "name": "Genie",
          "description": "Noble elemental beings from the Plane of Air. Capable of powerful magic and physical strength, often encountered when summoned or bound into service.",
          "appearance": {
            "size": "Large",
            "form": "Humanoid with swirling vapor lower half or fully solid form"
          },
          "behavior": {
            "alignment": "Chaotic good",
            "intelligence": "Average to high",
            "habitat": "Elemental Plane of Air, occasionally the Astral or Prime Material",
            "abilities": [
              "Invisible or gaseous form at will",
              "Wind walking, whirlwind form (2d6 dmg to all <2 HD)",
              "Create food, water, cloth, wood, metal (non-permanent)",
              "Create illusion (sight and sound)",
              "Can carry up to 600 lbs indefinitely; 1,200 lbs briefly"
            ]
          },
          "combat": {
            "attacks": 1,
            "damage": "2d8",
            "specialAttacks": "Whirlwind form (once/round, 2d6 dmg, kills <2 HD instantly)"
          },
          "variants": {
            "Noble Genie": {
              "hitDice": "10 HD",
              "damage": "3d8",
              "whirlwindDamage": "3d6",
              "special": "Grants 3 wishes when subdued"
            }
          },
          "communication": "Genie language and telepathy"
        }
      ],
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Large",
      "move": "90 ft; 240 ft flying (AA:VI)",
      "armorClass": 4,
      "hitDice": "7+3",
      "attacks": 1,
      "damage": "2d8",
      "specialAttacks": "Magical abilities, whirlwind",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Average to high",
      "alignment": "Chaotic good",
      "levelXP": "5/350 + 8/hp",
      "treasure": "None"
    },
    {
      "name": "Ghast",
      "category": "Undead",
      "turnResistance": 6,
      "frequency": "Rare",
      "numberAppearing": "1d6",
      "size": "Man-sized",
      "move": "150 ft",
      "armorClass": 4,
      "hitDice": "4",
      "attacks": "3",
      "damage": "1d4/1d4/1d8",
      "specialAttacks": "Paralysation, Stench",
      "specialDefenses": "Standard undead immunities",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Very",
      "alignment": "Chaotic evil",
      "levelXP": "4/195 +4/hp",
      "treasure": {
        "cp": {"amount": "1d8×1,000", "chance": "50%"},
        "sp": {"amount": "1d6×1,000", "chance": "25%"},
        "ep": {"amount": "1d4×1,000", "chance": "25%"},
        "gp": {"amount": "1d12×1,000", "chance": "65%"},
        "pp": {"amount": "1d6×1,000", "chance": "30%"},
        "gems": {"amount": "3d8", "chance": "50%"},
        "jewellery": {"amount": "2d6", "chance": "50%"},
        "magic_items": {"amount": "1-2", "chance": "25%"}
      },
      "description": "These terrible creatures are more powerful versions of ghouls, distinguished by their terrible stench that requires a save vs poison to avoid retching and -2 to all actions. They can ignore protection from evil unless combined with certain pure metals. Ghasts share ghouls' spell immunities and can travel dream-realms to reach the prime material and lower planes."
    },
    {
      "name": "Ghost",
      "category": "Undead",
      "turnResistance": 11,
      "frequency": "Very Rare",
      "numberAppearing": "1",
      "size": "Man-sized",
      "move": "90 ft hovering",
      "armorClass": "0 when manifest/special",
      "hitDice": "10+4",
      "attacks": "1",
      "damage": "Special",
      "specialAttacks": "Wither; Magic Jar",
      "specialDefenses": "Magic weapons or special metals required to hit when manifest; immune to spells when aethereal unless the caster is also aethereal",
      "magicResistance": "As above",
      "lairProbability": "25%",
      "intelligence": "High",
      "alignment": "Any evil",
      "levelXP": "8/4200 +14/hp",
      "treasure": {
        "cp": {"amount": "1d10×1,000", "chance": "5%"},
        "sp": {"amount": "2d6×1,000", "chance": "30%"},
        "ep": {"amount": "1d6×1,000", "chance": "25%"},
        "gp": {"amount": "2d4×1,000", "chance": "25%"},
        "gems": {"amount": "2d6", "chance": "15%"},
        "jewellery": {"amount": "1d6", "chance": "20%"},
        "magic_items": {"amount": "1d3-1", "chance": "30%"}
      },
      "description": "Ghosts are evil human spirits denied passage to the outer planes. They exist partially in the aethereal plane, allowing them to drain life from victims. Witnessing a ghost requires a saving throw vs magic or flee in panic while aging 3d6 years. The ghost's touch ages victims 7d6 years. They can possess victims via magic jar and manifest physically, then only harmed by magic weapons or pure metals."
    },
    {
      "name": "Ghoul",
      "category": "Undead",
      "turnResistance": 3,
      "frequency": "Uncommon",
      "numberAppearing": "4d6",
      "size": "Man-sized",
      "move": "90 ft loping",
      "armorClass": 6,
      "hitDice": "2",
      "attacks": "3",
      "damage": "1d3/1d3/1d6",
      "specialAttacks": "Paralysation",
      "specialDefenses": "Immune to sleep and charm spells",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "3/70 +2/hp",
      "treasure": {
        "cp": {"amount": "1d8×1,000", "chance": "50%"},
        "sp": {"amount": "1d6×1,000", "chance": "25%"},
        "ep": {"amount": "1d4×1,000", "chance": "25%"},
        "gp": {"amount": "1d3×1,000", "chance": "25%"},
        "gems": {"amount": "2d4", "chance": "30%"},
        "jewellery": {"amount": "1d4", "chance": "20%"},
        "magic_items": {"amount": "1", "chance": "10%"}
      },
      "description": "Ghouls are humans who became undead by feasting on corpses or being killed by another ghoul. Any human or demihuman (except elves) attacked by a ghoul must save or be paralyzed for 3d4 turns. Protection from evil keeps them at bay unless the circle is violated. Marine ghouls called 'lacedons' sometimes dwell in shipwrecks."
    },
    
    {
      "name": "Giant, Cloud",
      "category": "Giants",
      "name_variants": "Cloud Giant",
      "frequency": "Rare",
      "numberAppearing": "1d6",
      "size": "L (18' tall)",
      "move": "15\"",
      "armorClass": 2,
      "hitDice": "12 + 1d6+1",
      "TREASURE TYPE": "E, Q (x5)",
      "attacks": 1,
      "damage": "6d6",
      "specialAttacks": "Hurling rocks for 2-24 hit points",
      "specialDefenses": "Surprised only on 1",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Average to very",
      "alignment": "Neutral (good 50%, evil 50%)",
      "levelXP": "8/3,520 + 16/hp",
      "description": "Cloud giants usually reside in crude castles built atop mountains or on magical cloud islands. They have pale blue white to light blue skin, silver white or brass colored hair, and wear various items of clothing and jewelry. They are armed with great clubs.",
      "specialAbilities": {
        "rockThrowing": {
          "range": "1\"-24\"",
          "damage": "2-24"
        },
        "catchMissiles": "60% chance",
        "senseOfSmell": "Surprised only on a roll of 1",
        "levitate": "10% of cloud giants can levitate themselves and additional weight of up to 20,000 gold pieces twice per day"
      },
      "pets": {
        "type": "Spotted lions",
        "number": "1-4",
        "chance": "60%"
      },
      "treasure": "E, Q (X5)"
    },
    {
      "name": "Giant, Fire",
      "category": "Giants",
      "name_variants": "Fire Giant",
      "frequency": "Uncommon",
      "numberAppearing": "1d8",
      "size": "L (12' tall)",
      "move": "12\"",
      "armorClass": 3,
      "hitDice": "11 + 1d4+1",
      "TREASURE TYPE": "E",
      "attacks": 1,
      "damage": "5d6",
      "specialAttacks": "Hurling rocks for 2-20 hit points",
      "specialDefenses": "Impervious to fire",
      "magicResistance": "Standard",
      "lairProbability": "35%",
      "intelligence": "Average to low",
      "alignment": "Lawful evil",
      "levelXP": "7/2,720 + 16/hp",
      "description": "Fire giants are very broad (about 6' at the shoulders), looking almost like dwarves. Their skins are coal black, hair is flaming red or bright orange, and eyes are deep red. Their teeth are usually yellow orange. They wear armor or dragon hides. They favor huge swords.",
      "specialAbilities": {
        "rockThrowing": {
          "range": "1\"-20\"",
          "damage": "2-20"
        },
        "catchMissiles": "50% chance",
        "fireImmunity": "Impervious to fire, even red dragon breath"
      },
      "pets": {
        "type": "Hell hounds (largest size)",
        "number": "1-4",
        "chance": "25%"
      },
      "treasure": "E"
    },
    {
      "name": "Giant, Frost",
      "category": "Giants",
      "name_variants": "Frost Giant",
      "frequency": "Rare",
      "numberAppearing": "1d8",
      "size": "L (15' tall)",
      "move": "12\"",
      "armorClass": 4,
      "hitDice": "10 + 1d4",
      "TREASURE TYPE": "E",
      "attacks": 1,
      "damage": "4d6",
      "specialAttacks": "Hurling rocks for 2-20 hit points",
      "specialDefenses": "Impervious to cold",
      "magicResistance": "Standard",
      "lairProbability": "30%",
      "intelligence": "Average to low",
      "alignment": "Chaotic evil",
      "levelXP": "7/1,820 + 14/hp",
      "description": "Frost giants have dead white or ivory skin color, blue-white or yellow hair, and pale blue or yellow eyes. Their build is basically similar to a muscular human, with appropriate size differences. Frost giants wear armor and bear arms similar to those of humans of the northern barbarian sort.",
      "specialAbilities": {
        "rockThrowing": {
          "range": "1\"-20\"",
          "damage": "2-20"
        },
        "catchMissiles": "40% chance",
        "coldImmunity": "Impervious to cold, even white dragon breath"
      },
      "pets": {
        "type": "Winter wolves",
        "number": "1-6",
        "chance": "50%"
      },
      "treasure": "E"
    },
    {
      "name": "Giant, Hill",
      "category": "Giants",
      "name_variants": "Hill Giant",
      "frequency": "Common",
      "numberAppearing": "1d10",
      "size": "L (10½' tall)",
      "move": "12\"",
      "armorClass": 4,
      "hitDice": "8 + 1d2",
      "TREASURE TYPE": "D",
      "attacks": 1,
      "damage": "2d8",
      "specialAttacks": "Hurling rocks for 2-16 hit points",
      "specialDefenses": "",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "6/1,200 + 12/hp",
      "description": "Hill giants have tan to reddish brown skins, brown to black hair, and red-rimmed eyes. They typically dress in rough hides or skins. They use any form of weapon available but favor clubs.",
      "specialAbilities": {
        "rockThrowing": {
          "range": "1\"-20\"",
          "damage": "2-16"
        },
        "catchMissiles": "30% chance",
        "languages": "50% speak ogre"
      },
      "pets": {
        "options": [
          {
            "type": "Dire wolves",
            "number": "2-8",
            "chance": "50% × 50%"
          },
          {
            "type": "Giant lizards",
            "number": "1-3",
            "chance": "50% × 30%"
          },
          {
            "type": "Ogres",
            "number": "2-8",
            "chance": "50% × 20%"
          }
        ]
      },
      "treasure": "D"
    },
    {
      "name": "Giant, Stone",
      "category": "Giants",
      "name_variants": "Stone Giant",
      "frequency": "Uncommon",
      "numberAppearing": "1d8",
      "size": "L (12' tall)",
      "move": "12\"",
      "armorClass": 0,
      "hitDice": "9 + 1d4",
      "TREASURE TYPE": "D",
      "attacks": 1,
      "damage": "3-18",
      "specialAttacks": "Hurling rocks for 3-30 hit points",
      "specialDefenses": "",
      "magicResistance": "Standard",
      "lairProbability": "30%",
      "intelligence": "Average",
      "alignment": "Neutral",
      "levelXP": "7/1,500 + 14/hp",
      "description": "With their gray to gray-brown skins, dark gray to blue-gray hair, and metallic-looking eyes (silver to steel), stone giants are both striking in appearance and able to blend easily into stoney settings. The latter effect is enhanced by their choice of rock-colored garments. Stone giants are typically armed with stone weapons.",
      "specialAbilities": {
        "rockThrowing": {
          "range": "1\"-30\"",
          "damage": "3-30"
        },
        "catchMissiles": "90% chance"
      },
      "pets": {
        "type": "Cave bears",
        "number": "1-4",
        "chance": "75%"
      },
      "treasure": "D"
    },
    {
      "name": "Giant, Storm",
      "category": "Giants",
      "name_variants": "Storm Giant",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "L (21' tall)",
      "move": "15\"",
      "armorClass": 1,
      "hitDice": "15+1d6+1",
      "TREASURE TYPE": "E, Q (x10), S",
      "attacks": 1,
      "damage": "7d6",
      "specialAttacks": "Lightning bolt (8d8) once per day, weather control spells",
      "specialDefenses": "Impervious to electrical energy",
      "magicResistance": "Standard",
      "lairProbability": "55%",
      "intelligence": "Exceptional",
      "alignment": "Chaotic good",
      "levelXP": "9/6,000 + 20/hp",
      "description": "The skin coloration of storm giants ranges from pale light green to violet, the former being typical of those specimens which are marine. Green colored storm giants have dark green hair and emerald green eyes, while other storm giants tend towards deep violet or blue-black hair coloration with silvery gray or purple eyes.",
      "specialAbilities": {
        "lightningBolt": "8d8 damage once per day",
        "spells": {
          "daily": ["Predict weather", "Call lightning (3 bolts of 10-15d6 each)", "Control winds", "Weather summoning"]
        },
        "levitate": "Twice per day, lifting weights up to 30,000 gold pieces",
        "underwaterBreathing": "Able to breathe normally underwater",
        "electricalImmunity": "Not harmed by electrical energy, including blue dragon breath"
      },
      "pets": {
        "options": [
          {
            "habitat": "Cloud islands or mountain peaks",
            "pets": [
              {
                "type": "Rocs",
                "number": "1-2",
                "chance": "30% × 70%",
                "note": "Also used as riding animals"
              },
              {
                "type": "Griffons",
                "number": "1-4",
                "chance": "30% × 30%"
              }
            ]
          },
          {
            "habitat": "Underwater",
            "pets": {
              "type": "Sea lions",
              "number": "2-8",
              "chance": "30% × 10%"
            }
          }
        ]
      },
      "habitats": [
        {
          "type": "Cloud islands",
          "chance": "60%"
        },
        {
          "type": "Mountain peaks",
          "chance": "30%"
        },
        {
          "type": "Underwater",
          "chance": "10%"
        }
      ],
      "treasure": "E, Q (X10), S"
    },
    {
      "name": "Gnoll",
      "category": "Humanoid",
      "frequency": "Uncommon",
      "numberAppearing": "20d10",
      "size": "Large",
      "move": "90 ft",
      "armorClass": 5,
      "hitDice": 2,
      "attacks": 1,
      "damage": "2d4 or by weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Low to average",
      "alignment": "Chaotic evil",
      "levelXP": "2/30+2/hp",
      "description": "Hyena-faced humanoids. Often led by Flinds. Use scavenged armor. Infravision 60 ft. Speak troll and others.",
      "leaders": {
        "raiding_party": "1 leader (16 HP, 3 HD)",
        "band": {
          "chieftain": "4 HD, AC 3, 22 HP, 2d4+2 dmg",
          "guards": "2d6, AC 4, 20 HP, 3 HD, 2d4+1 dmg"
        }
      },
      "treasure": {
        "individual": "2d6 ep, 2d4 gp",
        "lair": {
          "cp": {"amount": "1d8×1,000", "chance": "60%"},
          "sp": {"amount": "1d6×1,000", "chance": "50%"},
          "ep": {"amount": "1d8×1,000", "chance": "35%"},
          "gp": {"amount": "1d6×1,000", "chance": "50%"},
          "gems": {"amount": "5d4", "chance": "30%"},
          "jewellery": {"amount": "1d6", "chance": "25%"},
          "potions": {"amount": "2d4", "chance": "40%"}
        }
      }
    },
    {
      "name": "Gnome",
      "category": "Demi-Human",
      "frequency": "Rare",
      "numberAppearing": "40d10",
      "size": "Small",
      "move": "60 ft",
      "armorClass": 5,
      "hitDice": 1,
      "attacks": 1,
      "damage": "1d6 or by weapon",
      "specialAttacks": "+1 vs kobolds/goblins",
      "specialDefenses": "Enemies -4 to hit (giants, ogres, etc.)",
      "magicResistance": "Save vs magic/poison as if 4 levels higher",
      "lairProbability": "50%",
      "intelligence": "Very",
      "alignment": "Neutral to lawful good",
      "levelXP": "1/10 + 1/hp",
      "description": "Gnomes are resilient underground dwellers with bonuses against specific foes. Speak burrowing animal language. Detect underground features and slopes.",
      "leadership": {
        "per_40": "1 fighter of level 2 (1-2), 3 (3-4), or 4 (5-6)",
        "over_160": ["1 5th level fighter (chief)", "1 3rd level fighter (lieutenant)"],
        "over_200": "Add 1 cleric of 4th-6th level",
        "over_320": [
          "1 6th level fighter",
          "2 5th level fighters",
          "1 7th level cleric",
          "4 3rd level clerics"
        ]
      },
      "treasure": {
        "individual": "6d4 gp"
      }
    },
    {
      "name": "Goblin",
      "category": "Humanoid",
      "frequency": "Uncommon",
      "numberAppearing": "40d10",
      "size": "Small (4 ft tall)",
      "move": "60 ft",
      "armorClass": 6,
      "hitDice": "1-1",
      "attacks": 1,
      "damage": "1d6 or by weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Average (low)",
      "alignment": "Lawful evil",
      "levelXP": "1/10+1/hp",
      "description": "Small evil humanoids with red eyes and yellow to red skin. Hate dwarves and gnomes. Sunlight penalty.",
      "leaders": {
        "raiding_party": "1 captain + 4 sergeants (fight as orcs)",
        "war_party": "Sub-chief + 2d4 guards (fight as hobgoblins)",
        "lair": "Chief + 2d4 guards (fight as gnolls); may have worgs or bugbears"
      },
      "treasure": {
        "individual": "3d6 sp",
        "lair": {
          "cp": {"amount": "1d12×1,000", "chance": "75%"},
          "sp": {"amount": "1d6×1,000", "chance": "50%"},
          "gems": {"amount": "1d6", "chance": "25%"},
          "jewellery": {"amount": "1d3", "chance": "20%"},
          "potions": {"amount": "2d4", "chance": "40%"}
        }
      }
    },
    {
      "name": "Gorgon",
      "category": "Magical Beast",
      "variants": [
        {
          "name": "Gorgon",
          "description": "Large, bull-like beasts covered in metallic scales. Known for their petrifying breath, they are aggressive and lethal hunters.",
          "appearance": {
            "size": "Large",
            "form": "Giant bull with metallic scales"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Animal",
            "habitat": "Wilderness, ruins, underground",
            "tactics": "Uses petrifying breath 85% of the time before goring"
          },
          "combat": {
            "attacks": 1,
            "damage": "2d6",
            "specialAttacks": "Breath weapon (cone of petrifying gas, 60 ft x 10 ft radius, 3/day)"
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "Large",
      "move": "120 ft",
      "armorClass": 2,
      "hitDice": 8,
      "attacks": 1,
      "damage": "2d6",
      "specialAttacks": "Petrifying breath (save or turn to stone)",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "7/1,500 + 10/hp",
      "treasure": {
        "cp": "1d8×1,000 (10%)",
        "sp": "1d12×1,000 (25%)",
        "ep": "1d6×1,000 (25%)",
        "gp": "1d8×1,000 (25%)",
        "gems": "1d10 (15%)",
        "jewellery": "1d8 (10%)",
        "magicItems": "Any 4 magic items (25%)"
      }
    },
    {
      "name": "Grimlock",
      "category": "Humanoid",
      "frequency": "Uncommon",
      "numberAppearing": "20d10",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 5,
      "hitDice": 2,
      "attacks": 1,
      "damage": "1d6 or by weapon",
      "specialAttacks": "None",
      "specialDefenses": "Immune to visual illusions; vulnerable to sensory disruption",
      "magicResistance": "Special",
      "lairProbability": "75%",
      "intelligence": "Average",
      "alignment": "Neutral evil",
      "levelXP": "2/28 + 2/hp",
      "description": "Blind subterranean humanoids with heightened non-visual senses. Immune to light-based effects. Detect hidden foes easily.",
      "leaders": {
        "per_30": "1 with 3 HD, AC 4",
        "per_40": "1 with 4 HD, AC 3"
      },
      "treasure": {
        "lair": {
          "cp": {"amount": "1d6×1,000", "chance": "25%"},
          "sp": {"amount": "1d4×1,000", "chance": "25%"},
          "gp": {"amount": "2d10×100", "chance": "25%"},
          "gems": {"amount": "1d8", "chance": "25%"},
          "jewellery": {"amount": "1d4", "chance": "25%"},
          "magic_items": {"amount": "1 item", "chance": "10%"}
        }
      }
    },
    {
      "name": "Grey Ooze",
      "category": "Ooze",
      "variants": [
        {
          "name": "Grey Ooze",
          "description": "A nearly undetectable slime that appears as wet stone. It corrodes metal rapidly and is immune to cold and heat-based magic.",
          "appearance": {
            "form": "Amorphous ooze blending into dungeon floors",
            "size": "Medium to Large"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Animal",
            "habitat": "Underground ruins, dungeons",
            "traits": [
              "Appears as part of stone floor",
              "Forms pseudopods to strike prey",
              "Consumes metal, not stone or wood"
            ]
          },
          "combat": {
            "attacks": 1,
            "damage": "2d8",
            "specialAttacks": "Corrodes metal (eats through chain in 1 round, plate in 2)",
            "defenses": [
              "Immune to heat/cold-based magic",
              "Takes full damage from weapons, but corrodes metal ones"
            ]
          },
          "growth": {
            "note": "Larger specimens may reach 36 sq ft and develop rudimentary awareness"
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "1d3",
      "size": "Medium to Large",
      "move": "10 ft",
      "armorClass": 8,
      "hitDice": "3+3",
      "attacks": 1,
      "damage": "2d8",
      "specialAttacks": "Metal corrosion",
      "specialDefenses": "Immune to heat/cold; corrodes metal weapons",
      "magicResistance": "See description",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "4/75 + 3/hp",
      "treasure": "None"
    },
    {
      "name": "Griffon",
      "category": "Magical Beast",
      "variants": [
        {
          "name": "Griffon",
          "description": "Fierce aerial hunters with the body of a lion and head, wings, and forelegs of an eagle. Known for their hatred of horses and highly sought after as flying mounts.",
          "appearance": {
            "form": "Lion’s body with eagle head, wings, and talons",
            "size": "Large"
          },
          "behavior": {
            "alignment": "Neutral",
            "intelligence": "Semi-",
            "habitat": "Cliffside aeries and mountain caves",
            "traits": [
              "Hunt horses on sight",
              "Valuable as flying mounts if raised from hatchlings",
              "Cannot be trained once mature"
            ]
          },
          "combat": {
            "attacks": 3,
            "damage": "1d4 / 1d4 / 2d8",
            "notes": "Decreased aerial agility (to III) when bearing >100 lbs rider"
          }
        }
      ],
      "frequency": "Uncommon",
      "numberAppearing": "2d6",
      "size": "Large",
      "move": "120 ft; 300 ft flying (AA:IV)",
      "armorClass": 3,
      "hitDice": 7,
      "attacks": 3,
      "damage": "1d4 / 1d4 / 2d8",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "levelXP": "7/225 + 8/hp",
      "treasure": {
        "cp": "1d12×1,000 (20%)",
        "sp": "1d6×1,000 (30%)",
        "ep": "1d4×1,000 (10%)",
        "gems": "1d6 (25%)",
        "jewellery": "1d3 (20%)",
        "magicItems": "2 items (10%), 2d4 potions (40%)"
      }
    },
    {
      "name": "Halfling",
      "category": "Demi-Human",
      "variants": [
        {
          "name": "Hairfoot",
          "description": "The standard halfling type. They are stealthy rural folk with a strong resistance to magic and poison. Experts at hiding outdoors. Often accompanied by guard dogs.",
          "size": "Small (~3')",
          "armorClass": 7,
          "abilities": {
            "missile": "+3 to hit with bow or sling",
            "stealth": "Surprise on 1-4; invisible in foliage",
            "magicResistance": "Save vs magic/poison as if 4 levels higher"
          },
          "maxLevel": "Fighter 4"
        },
        {
          "name": "Tallfellow",
          "description": "A taller, slimmer halfling, with fairer skin and hair. Very rare. Very friendly with elves.",
          "size": "Small (~4')",
          "armorClass": 6,
          "lifespan": "180 years average",
          "abilities": {
            "missile": "+3 to hit with bow or sling",
            "stealth": "Surprise on 1-4; invisible in foliage",
            "magicResistance": "Save vs magic/poison as if 4 levels higher",
            "languages": "Can speak elvish"
          },
          "equipment": {
            "weapons": "Use more spears",
            "mounts": "Ride ponies"
          },
          "maxLevel": {
            "fighter": {
              "standard": "4th level",
              "exceptional": "5th or 6th level with 17-18 strength"
            }
          }
        },
        {
          "name": "Stout",
          "description": "Smaller and stockier than the typical halfling. They have no fear of water and can swim. Enjoy dwarven company.",
          "size": "Small (~3½')",
          "armorClass": 6,
          "lifespan": "200+ years",
          "abilities": {
            "missile": "+3 to hit with bow or sling",
            "stealth": "Surprise on 1-4; invisible in foliage",
            "magicResistance": "Save vs magic/poison as if 4 levels higher",
            "infravision": true,
            "dungeoneering": "Can detect sloping passageways",
            "swimming": true,
            "languages": "Can speak dwarvish"
          },
          "equipment": {
            "weapons": "Use morning stars in addition to usual halfling arms"
          },
          "maxLevel": {
            "fighter": {
              "standard": "4th level",
              "exceptional": "5th level with 18 strength"
            }
          }
        }
      ],
      "frequency": "Rare",
      "numberAppearing": "30-300",
      "size": "Small (3+ ' tall)",
      "move": "9\"",
      "armorClass": 7,
      "hitDice": "1d6 hitpoints",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "+3 with bow",
      "specialDefenses": "Save at 4 levels higher",
      "magicResistance": "As above",
      "lairProbability": "70%",
      "intelligence": "Very",
      "alignment": "Lawful good",
      "psionicAbility": "Nil (possible to exist in unusual characters)",
      "levelXP": "1/5 + 1/hp",
      "dwelling": "Villages with burrow homes and surface cottages, typically in pastoral countryside",
      "equipment": {
        "armor": "Padded or leather armor",
        "weaponDistribution": {
          "smallSwordAndShortBow": "10%",
          "smallSwordAndSpear": "10%",
          "shortBow": "10%",
          "sling": "20%",
          "smallSword": "10%",
          "spear": "20%",
          "handAxe": "20%"
        }
      },
      "leaders": {
        "per_30": {"level": 2, "class": "fighter", "count": 2},
        "over_90": {"level": 3, "class": "fighter", "count": 1},
        "over_150": {
          "additional": [
            {"level": 4, "class": "fighter", "count": 1},
            {"level": 3, "class": "fighter", "count": 2},
            {"level": 2, "class": "fighter", "count": 3}
          ]
        },
        "higherLevelArmor": {
          "normal": {"armorClass": 6},
          "third": {"armorClass": 5},
          "fourth": {"armorClass": 4},
          "magicChance": "10% per level of having magic armor and/or miscellaneous weapons"
        },
        "lair": {
          "females": "100% of adult males",
          "children": "60% of adult males",
          "guards": "1-4 dogs per halfling (treat as wild dogs)"
        }
      },
      "treasure": {
        "individual": "K",
        "lair": "B"
      }
    },
    {
      "name": "Harpy",
      "category": "Monstrous Humanoid",
      "frequency": "Rare",
      "numberAppearing": "2d6",
      "size": "Medium",
      "move": "60 ft; 150 ft flying (AA:IV)",
      "armorClass": 7,
      "hitDice": 3,
      "attacks": 3,
      "damage": "1d3/1d3/1d6",
      "specialAttacks": "Singing and charm",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "3/50 + 3/hp",
      "description": "These vile creatures lure victims with a magical song, then charm and devour them.",
      "treasure": {
        "cp": "1d12×1,000 (20%)",
        "sp": "1d6×1,000 (30%)",
        "ep": "1d4×1,000 (10%)",
        "gems": "1d6 (25%)",
        "jewellery": "1d3 (20%)",
        "magicItems": "2 items (10%)"
      }
    },
    {
      "name": "Hell Hound",
      "category": "Extraplanar Beast",
      "frequency": "Very rare",
      "numberAppearing": "2d4",
      "size": "Medium",
      "move": "120 ft",
      "armorClass": 4,
      "hitDice": "4 to 7",
      "attacks": 1,
      "damage": "1d10",
      "specialAttacks": "Breathe fire",
      "specialDefenses": "High surprise rating; keen senses",
      "magicResistance": "Standard",
      "lairProbability": "30%",
      "intelligence": "Low",
      "alignment": "Lawful evil",
      "levelXP": {
        "4HD": "4/75 + 4/hp",
        "5HD": "5/110 + 5/hp",
        "6HD": "6/160 + 6/hp",
        "7HD": "7/225 + 8/hp"
      },
      "description": "Infernal dogs that serve as otherworldly sentries, attacking with fiery breath and terrifying silence.",
      "treasure": {
        "cp": "1d12×1,000 (20%)",
        "sp": "1d6×1,000 (30%)",
        "ep": "1d4×1,000 (10%)",
        "gems": "1d6 (25%)",
        "jewellery": "1d3 (25%)",
        "magicItems": "2 items (10%)"
      }
    },
    {
      "name": "Hippogriff",
      "category": "Magical Beast",
      "frequency": "Rare",
      "numberAppearing": "2d8",
      "size": "Large",
      "move": "180 ft; 360 ft flying (AA:IV)",
      "armorClass": 5,
      "hitDice": "3 +3",
      "attacks": 3,
      "damage": "1d6/1d6/1d10",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "levelXP": "4/150 + 3/hp",
      "description": "A winged creature combining features of horse and eagle, often sought as a mount but highly territorial.",
      "treasure": {
        "gems": "5d4 (50%)"
      }
    },
    {
      "name": "Hippopotamus",
      "category": "Animal",
      "frequency": "Uncommon",
      "numberAppearing": "2d6",
      "size": "Large",
      "move": "90 ft; 120 ft swimming",
      "armorClass": 6,
      "hitDice": "8",
      "attacks": "1",
      "damage": "2d6 or 3d6",
      "specialAttacks": "Capsize boats",
      "specialDefenses": "Nil",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "5/600 + 12/hp",
      "treasure": "None",
      "description": "Hippopotami are large semi-aquatic mammals. Bulls bite for 3d6 damage, cows for 2d6. Boats passing over hippos have a 50% chance of being tipped."
    },
    {
      "name": "Hobgoblin",
      "category": "Humanoid",
      "frequency": "Uncommon",
      "numberAppearing": "20d10",
      "size": "Man-sized (6½ ft tall)",
      "move": "90 ft",
      "armorClass": 5,
      "hitDice": "1+1",
      "attacks": 1,
      "damage": "1d8 or by weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Average",
      "alignment": "Lawful evil",
      "levelXP": "2/20 + 2/hp",
      "description": "Larger cousins of goblins, hobgoblins are militaristic, competitive, and organized into hostile tribes with infamous names like Skull Smashers and Marrow Suckers. They hate elves above all else, and are often found bullying goblins and orcs or leading them in battle. Hobgoblins thrive underground or in fortified surface lairs and keep carnivorous apes as guards.",
      "leaders": {
        "per_20": {
          "level": 1,
          "class": "fighter",
          "count": 3,
          "hp": 9,
          "note": "1 sergeant + 2 assistants"
        },
        "commander": {
          "under_100": {
            "level": 3,
            "class": "fighter",
            "count": 1,
            "hp": 16,
            "damage": "1d8+2",
            "armorClass": 3,
            "note": "Sub-chief, fights as 3 HD"
          },
          "over_100": {
            "chief": {
              "level": 4,
              "class": "fighter",
              "count": 1,
              "hp": 22,
              "damage": "2d6",
              "armorClass": 2,
              "note": "Fights as 4 HD"
            },
            "guards": {
              "level": 3,
              "class": "fighter",
              "count": "5d4",
              "hp": 16,
              "damage": "1d8+2",
              "armorClass": 3
            }
          }
        },
        "psionic_abilities": "None"
      },
      "lair": {
        "types": {
          "underground": "80%",
          "fortified_village": "20%"
        },
        "features": {
          "underground": {
            "guards": {
              "carnivorous_apes": {
                "chance": "60%",
                "number": "2d12",
                "note": "Used as brutish guards"
              }
            }
          },
          "fortified_village": {
            "defenses": "Ditch, rampart, palisade, 2 gates, 3–6 guard towers",
            "artillery": {
              "heavy_catapults": "2 per 50 warriors",
              "light_catapults": "2 per 50 warriors",
              "ballista": "1 per 50 warriors"
            }
          }
        },
        "occupants": {
          "females": "150% of males",
          "young": "300% of males"
        }
      },
      "equipment": {
        "weapons_distribution": {
          "sword_composite_bow": "20%",
          "sword_spear": "10%",
          "sword_morning_star": "5%",
          "sword_whip": "5%",
          "polearm": "30%",
          "spear": "10%",
          "morning_star": "20%"
        },
        "leaders": {
          "note": "Always carry two weapons"
        },
        "standard": {
          "presence": {
            "subchief": "20%",
            "chief": "Always"
          },
          "effect": "+1 to attack and morale for all hobgoblins within 6\""
        }
      },
      "senses_languages": {
        "infravision": "60 ft",
        "mining_detection": "40% chance to detect sloping passages, shifting walls, and new construction",
        "languages": [
          "Hobgoblin",
          "Goblin",
          "Orcish",
          "Carnivorous Ape (rudimentary)",
          "Alignment tongue (Lawful Evil)",
          "Common (20%)"
        ]
      },
      "treasure": {
        "individual": "3d12 cp, 2d8 gp",
        "lair": {
          "cp": { "amount": "1d8×1,000", "chance": "75%" },
          "sp": { "amount": "1d12×1,000", "chance": "60%" },
          "ep": { "amount": "1d8×1,000", "chance": "35%" },
          "gp": { "amount": "1d6×1,000", "chance": "50%" },
          "gems": { "amount": "5d4", "chance": "50%" },
          "jewellery": { "amount": "1d6", "chance": "25%" },
          "potions": { "amount": "1", "chance": "15%" }
        }
      }
    },
    {
      "name": "Homonculus",
      "category": "Construct",
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Small (18 in)",
      "move": "60 ft; 180 ft flying (AA:V)",
      "armorClass": 6,
      "hitDice": 2,
      "attacks": 1,
      "damage": "1d3",
      "specialAttacks": "Bite causes sleep",
      "specialDefenses": "See below",
      "magicResistance": "See below",
      "lairProbability": "Nil",
      "intelligence": "See below",
      "alignment": "See below",
      "levelXP": "2/81 + 2/hp",
      "description": "A magically created construct under the complete control of its wizard master. Communicates telepathically within 500 ft and transmits what it sees and hears. If killed, its creator takes 2d10 damage.",
      "treasure": "None"
    },
    {
      "name": "Hippopotamus",
      "category": "Animal",
      "frequency": "Uncommon",
      "numberAppearing": "2d6",
      "size": "Large",
      "move": "90 ft; 120 ft swimming",
      "armorClass": 6,
      "hitDice": 8,
      "attacks": 1,
      "damage": "2d6 or 3d6",
      "specialAttacks": "Capsize boats",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "5/600 + 12/hp",
      "treasure": "None",
      "description": "Hippopotami are large semi-aquatic mammals that spend most of their time in water. Though herbivores, they aggressively defend their territory and can outrun humans on land despite their bulk. They can't float but can propel themselves to the surface for air, staying submerged for up to 15 minutes. Bull hippos (1 per 4 animals) bite for 3d6 damage, while cows bite for 2d6. Boats passing over a hippo have a 50% chance of being tipped over when the animal surfaces."
    },
    {
      "name": "Horse",
      "category": "Animal",
      "variants": [
        {
          "type": "Draft",
          "frequency": "Common",
          "numberAppearing": "1",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 7,
          "hitDice": "3",
          "attacks": "1",
          "damage": "1d3",
          "levelXP": "2/20+2/hp"
        },
        {
          "type": "Heavy (Warhorse)",
          "frequency": "Uncommon",
          "numberAppearing": "1",
          "size": "Large",
          "move": "150 ft",
          "armorClass": 7,
          "hitDice": "3+3",
          "attacks": "3",
          "damage": "1d8/1d8/1d3",
          "levelXP": "2/20+2/hp"
        },
        {
          "type": "Light (Warhorse)",
          "frequency": "Uncommon",
          "numberAppearing": "1",
          "size": "Large",
          "move": "240 ft",
          "armorClass": 7,
          "hitDice": "2",
          "attacks": "2",
          "damage": "1d4/1d4",
          "levelXP": "2/20+2/hp"
        },
        {
          "type": "Medium (Warhorse)",
          "frequency": "Uncommon",
          "numberAppearing": "1",
          "size": "Large",
          "move": "180 ft",
          "armorClass": 7,
          "hitDice": "2+2",
          "attacks": "3",
          "damage": "1d6/1d6/1d3",
          "levelXP": "2/20+2/hp"
        },
        {
          "type": "Pony",
          "frequency": "Uncommon",
          "numberAppearing": "1",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 7,
          "hitDice": "1+1",
          "attacks": "1",
          "damage": "1d2",
          "levelXP": "2/20+2/hp"
        },
        {
          "type": "Wild",
          "frequency": "Uncommon",
          "numberAppearing": "5d6",
          "size": "Large",
          "move": "240 ft",
          "armorClass": 7,
          "hitDice": "2",
          "attacks": "1",
          "damage": "1d3",
          "levelXP": "2/20+2/hp"
        }
      ],
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Horses are ubiquitous domesticated animals. Warhorses are classified as heavy, medium, or light, with only 10% able to be trained as such. Draft horses are used for hauling, ponies for light loads or children. Wild horses travel in herds."
    },
    {
      "name": "Hydra",
      "category": "Magical Beast",
      "frequency": "Uncommon",
      "numberAppearing": "1",
      "size": "Large",
      "move": "90 ft",
      "armorClass": 5,
      "hitDice": "5 to 16",
      "attacks": "5 to 16",
      "damage": "1d6 to 1d12 based on size",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "levelXP": "5/110 + 5/hp up to 9/5,000 + 20/hp",
      "description": "Multi-headed lizard-like creatures. Each head attacks independently and deals variable damage by size. Found in swamps, bogs, or underground lairs.",
      "treasure": {
        "cp": "1d8×1,000 (50%)",
        "sp": "1d6×1,000 (25%)",
        "ep": "1d4×1,000 (25%)",
        "gp": "1d3×1,000 (25%)",
        "gems": "1d8 (30%)",
        "jewellery": "1d4 (20%)",
        "magicItems": "sword, armour or misc. weapon (10%)"
      }
    },
    {
      "name": "Hyena",
      "category": "Animal",
      "variants": [
        {
          "type": "Normal",
          "frequency": "Common",
          "numberAppearing": "2d6",
          "size": "Medium",
          "move": "120 ft",
          "armorClass": 7,
          "hitDice": "2",
          "attacks": "1",
          "damage": "2d4",
          "levelXP": "3/50 +2/hp"
        },
        {
          "type": "Huge",
          "frequency": "Rare",
          "numberAppearing": "2d6",
          "size": "Medium",
          "move": "120 ft",
          "armorClass": 6,
          "hitDice": "3",
          "attacks": "1",
          "damage": "2d4+1",
          "levelXP": "4/75 +3/hp"
        },
        {
          "type": "Giant",
          "frequency": "Very rare",
          "numberAppearing": "1d6",
          "size": "Large",
          "move": "180 ft",
          "armorClass": 5,
          "hitDice": "4",
          "attacks": "1",
          "damage": "2d6",
          "levelXP": "6/160 +6/hp"
        }
      ],
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Hyenas are 4-5 ft long scavengers and predators with strong jaws. Huge types are more aggressive; Giant types may be magically bred. Found in grasslands, woodlands, and deserts. Known for grave-raiding and eerie vocalizations."
    },
    {
      "name": "Indricotherium",
      "category": "Animal",
      "frequency": "Rare",
      "numberAppearing": "1d3",
      "size": "Large",
      "move": "120 ft",
      "armorClass": 5,
      "hitDice": "14",
      "attacks": "2",
      "damage": "5d4",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "levelXP": "7/1,800+18/hp",
      "treasure": "None",
      "description": "A prehistoric ruminant, the indricotherium looks rather like its contemporary descendant the rhinoceros. If spooked, it will charge in an effort to trample. A 'two' on the Number Encountered roll means a mated pair; a 'three' means a mated pair with a juvenile."
    },
    {
      "name": "Invisible Stalker",
      "category": "Elemental",
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Large (8 ft tall)",
      "move": "120 ft",
      "armorClass": 3,
      "hitDice": 8,
      "attacks": 1,
      "damage": "2d8",
      "specialAttacks": "Surprise on 1-5",
      "specialDefenses": "Invisibility",
      "magicResistance": "30%",
      "lairProbability": "Nil",
      "intelligence": "High",
      "alignment": "Neutral",
      "levelXP": "7/1,100 + 10/hp",
      "description": "Summoned air elementals that track and attack at their master's command. May attempt to twist instructions for prolonged tasks. Cannot be permanently killed on the Prime Material Plane.",
      "treasure": "None"
    },
    {
      "name": "Jackal",
      "category": "Animal",
      "variants": [
        {
          "type": "Normal",
          "frequency": "Common",
          "numberAppearing": "1d6",
          "size": "Small",
          "move": "120 ft",
          "armorClass": 7,
          "hitDice": "1",
          "attacks": "1",
          "damage": "1d4",
          "levelXP": "1/10 +1/hp"
        },
        {
          "type": "Huge",
          "frequency": "Rare",
          "numberAppearing": "1d6",
          "size": "Small",
          "move": "150 ft",
          "armorClass": 6,
          "hitDice": "2",
          "attacks": "1",
          "damage": "1d4+1",
          "levelXP": "2/30 +1/hp"
        },
        {
          "type": "Giant",
          "frequency": "Very rare",
          "numberAppearing": "1d4",
          "size": "Medium",
          "move": "180 ft",
          "armorClass": 5,
          "hitDice": "4",
          "attacks": "1",
          "damage": "1d8",
          "levelXP": "3/75 +3/hp"
        }
      ],
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Jackals are nocturnal scavengers and occasional predators found in grasslands and wastelands. Huge jackals are more aggressive. Giant jackals are possibly magical and sometimes associated with evil cults. Some rumors claim they possess unnatural intelligence and will."
    },
    {
      "name": "Jackalwere",
      "category": "Shapechanger",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "Small (medium)",
      "move": "120 ft",
      "armorClass": 4,
      "hitDice": 4,
      "attacks": 1,
      "damage": "2d8 or by weapon",
      "specialAttacks": "Gaze causes sleep",
      "specialDefenses": "Iron or +1 weapon to hit",
      "magicResistance": "Standard",
      "lairProbability": "30%",
      "intelligence": "Very",
      "alignment": "Chaotic evil",
      "levelXP": "4/75+4/hp",
      "description": "Malevolent jackal creatures in human form. They prey on travelers, using their sleep gaze to subdue victims. Immune to non-magical, non-iron weapons.",
      "treasure": {
        "cp": "1d12×1,000 (20%)",
        "sp": "1d6×1,000 (30%)",
        "ep": "1d4×1,000 (10%)",
        "gems": "1d6 (25%)",
        "jewellery": "1d3 (20%)",
        "magicItems": "any 2 magic items (10%)"
      }
    },
    {
      "name": "Koalinth",
      "category": "Humanoid",
      "frequency": "Rare",
      "numberAppearing": "20d10",
      "size": "Man-sized (6 ft tall)",
      "move": "90 ft, 120 ft swim",
      "armorClass": 5,
      "hitDice": "1+1",
      "attacks": 1,
      "damage": "By weapon (typically spear or polearm)",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Average",
      "alignment": "Lawful evil",
      "levelXP": "2/20 + 2/hp",
      "description": "Koalinth are aquatic hobgoblins with gills and webbed limbs, dwelling in shallow water caverns and sea caves. They are aggressive, territorial, and prey on all other creatures. While similar to land hobgoblins in most respects, Koalinth use aquatic versions of polearms and spears. Their coloration is lighter, with green faces, and they do not speak Common.",
      "leaders": {
        "per_20": {
          "level": 1,
          "class": "fighter",
          "count": 3,
          "hp": 9,
          "note": "1 sergeant + 2 assistants"
        },
        "commander": {
          "under_100": {
            "level": 3,
            "class": "fighter",
            "count": 1,
            "hp": 16,
            "damage": "1d8+2",
            "armorClass": 3,
            "note": "Sub-chief, fights as 3 HD"
          },
          "over_100": {
            "chief": {
              "level": 4,
              "class": "fighter",
              "count": 1,
              "hp": 22,
              "damage": "2d6",
              "armorClass": 2,
              "note": "Fights as 4 HD"
            },
            "guards": {
              "level": 3,
              "class": "fighter",
              "count": "5d4",
              "hp": 16,
              "damage": "1d8+2",
              "armorClass": 3
            }
          }
        },
        "psionic_abilities": "None"
      },
      "lair": {
        "types": {
          "underwater_cavern": "100%"
        },
        "features": {
          "environment": "Typically located in shallow saltwater sea caves or ruins"
        },
        "occupants": {
          "females": "150% of males",
          "young": "300% of males"
        }
      },
      "equipment": {
        "weapons_distribution": {
          "spear": "50%",
          "polearm": "50%"
        },
        "note": "Weapons adapted for underwater use"
      },
      "senses_languages": {
        "infravision": "60 ft",
        "languages": [
          "Koalinth (hobgoblin dialect)",
          "Alignment tongue (Lawful Evil)"
        ]
      },
      "treasure": {
        "individual": "None",
        "lair": {
          "cp": { "amount": "1d6×1,000", "chance": "50%" },
          "sp": { "amount": "1d8×1,000", "chance": "40%" },
          "ep": { "amount": "1d4×1,000", "chance": "25%" },
          "gp": { "amount": "1d4×1,000", "chance": "40%" },
          "gems": { "amount": "2d6", "chance": "35%" },
          "jewellery": { "amount": "1d4", "chance": "20%" },
          "magic_items": { "amount": 1, "chance": "10%" }
        }
      }
    },
    {
      "name": "Kraken",
      "category": "Aquatic Monster",
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Large",
      "move": "210 ft swimming",
      "armorClass": "5/0",
      "hitDice": 20,
      "attacks": 9,
      "damage": "2d6(x8)/5d4",
      "specialAttacks": "Crushing tentacles, poison ink cloud, spell-like abilities",
      "specialDefenses": "See below",
      "magicResistance": "Standard",
      "lairProbability": "75%",
      "intelligence": "Genius",
      "alignment": "Neutral evil",
      "levelXP": "10/17,500+30/hp",
      "description": "Giant sea monsters with massive tentacles, poisonous ink, and devastating magic. Will drag ships and sailors to the depths. Intelligent and ruthless.",
      "treasure": {
        "gp": "12d4×1,000 (50%)",
        "pp": "1d8×1,000 (50%)",
        "gems": "9d6 (55%)",
        "jewellery": "2d10 (45%)",
        "magicItems": "4 magic items + 1d6 scrolls + 2d4 potions (50%)"
      }
    },
    {
      "name": "Lamia",
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Medium",
      "move": "240 ft",
      "armorClass": 3,
      "hitDice": "9",
      "attacks": "1",
      "damage": "1d4",
      "specialAttacks": "Spells (charm person, mirror image, suggestion, illusion); Wisdom drain (1 per touch)",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "60%",
      "intelligence": "High",
      "alignment": "Chaotic evil",
      "levelXP": "7/1,500 + 12/hp",
      "treasure": "1d8×1,000 cp (10%), 1d12×1,000 sp (15%), 1d8×1,000 ep (15%), 1d6×1,000 gp (50%), 1d10 gems (30%), 1d6 jewellery (25%), any 2 magic items + 1 potion (15%)"
    },
    {
      "name": "Lammasu",
      "frequency": "Rare",
      "numberAppearing": "1d8",
      "size": "Large",
      "move": "120 ft; 240 ft flying (AA:III)",
      "armorClass": 6,
      "hitDice": "7+7",
      "attacks": "2",
      "damage": "1d6+1/1d6+1",
      "specialAttacks": "Spells as 8th-level cleric; holy word (20%)",
      "specialDefenses": "Dimension door, invisibility, protection from evil 10 ft radius",
      "magicResistance": "30%",
      "lairProbability": "25%",
      "intelligence": "Genius",
      "alignment": "Lawful good",
      "levelXP": "8/875+10/hp",
      "treasure": "2d4×1,000 gp (45%), 1d8×100pp (60%), 4d8 gems (50%), 2d6 jewellery (40%), 2d4 potions (40%), 1 misc magic (20%)"
    },
    {
      "name": "Leech, Giant",
      "frequency": "Uncommon",
      "numberAppearing": "4d4",
      "size": "Small",
      "move": "30 ft",
      "armorClass": 9,
      "hitDice": "1-4 HD",
      "attacks": "1",
      "damage": "1d4 (1 HD), 1d6 (2–3 HD), 1d8 (4 HD)",
      "specialAttacks": "Blood drain per round; disease",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "2/50 + 3/hp",
      "treasure": "None"
    },
    
    {
      "name": "Kobold",
      "category": "Humanoid",
      "frequency": "Uncommon",
      "numberAppearing": "40d10",
      "size": "Small (3 ft tall)",
      "move": "60 ft",
      "armorClass": 7,
      "hitDice": "1d4 hp",
      "attacks": 1,
      "damage": "1d4 or by weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Average (low)",
      "alignment": "Lawful evil",
      "levelXP": "1/5+1/hp",
      "description": "Hateful, reptilian humanoids. Hate sunlight and gnomes. Lair underground. May use wild boars or weasels as guards.",
      "leaders": {
        "raiding_party": "Sergeant + 2 assistants (fight as goblins)",
        "lair": "Chief + 5d4 guards (fight as goblins)"
      },
      "treasure": {
        "individual": "3d6 cp",
        "lair": {
          "cp": {"amount": "1d4×1,000", "chance": "50%"},
          "sp": {"amount": "1d3×1,000", "chance": "30%"},
          "gems": {"amount": "1d4", "chance": "50%"}
        }
      }
    },
    {
      "name": "Lamia",
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Medium",
      "move": "240 ft",
      "armorClass": 3,
      "hitDice": "9",
      "attacks": "1",
      "damage": "1d4",
      "specialAttacks": "Spells (charm person, mirror image, suggestion, illusion); Wisdom drain (1 per touch)",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "60%",
      "intelligence": "High",
      "alignment": "Chaotic evil",
      "levelXP": "7/1,500 + 12/hp",
      "treasure": "1d8×1,000 cp (10%), 1d12×1,000 sp (15%), 1d8×1,000 ep (15%), 1d6×1,000 gp (50%), 1d10 gems (30%), 1d6 jewellery (25%), any 2 magic items + 1 potion (15%)"
    },
    {
      "name": "Lammasu",
      "frequency": "Rare",
      "numberAppearing": "1d8",
      "size": "Large",
      "move": "120 ft; 240 ft flying (AA:III)",
      "armorClass": 6,
      "hitDice": "7+7",
      "attacks": "2",
      "damage": "1d6+1/1d6+1",
      "specialAttacks": "Spells as 8th-level cleric; holy word (20%)",
      "specialDefenses": "Dimension door, invisibility, protection from evil 10 ft radius",
      "magicResistance": "30%",
      "lairProbability": "25%",
      "intelligence": "Genius",
      "alignment": "Lawful good",
      "levelXP": "8/875+10/hp",
      "treasure": "2d4×1,000 gp (45%), 1d8×100pp (60%), 4d8 gems (50%), 2d6 jewellery (40%), 2d4 potions (40%), 1 misc magic (20%)"
    },
    {
      "name": "Leech, Giant",
      "frequency": "Uncommon",
      "numberAppearing": "4d4",
      "size": "Small",
      "move": "30 ft",
      "armorClass": 9,
      "hitDice": "1-4 HD",
      "attacks": "1",
      "damage": "1d4 (1 HD), 1d6 (2–3 HD), 1d8 (4 HD)",
      "specialAttacks": "Blood drain per round; disease",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "2/50 + 3/hp",
      "treasure": "None"
    },
    {
      "name": "Lich",
      "category": "Undead",
      "turnResistance": 12,
      "frequency": "Very Rare",
      "numberAppearing": "1",
      "size": "Man-sized",
      "move": "60 ft",
      "armorClass": 0,
      "hitDice": "12 or more",
      "attacks": "1",
      "damage": "2d6 + paralysation",
      "specialAttacks": "Spell use at at least 18th level of ability; fear",
      "specialDefenses": "+1 or better weapon to hit; immune to cold, electrical, poison, paralysation, polymorph, and death magic, as well as sleep, charm, hold and other mental attacks",
      "magicResistance": "Standard",
      "lairProbability": "95%",
      "intelligence": "Genius or higher",
      "alignment": "Any evil",
      "levelXP": "10/at least 10,000 +16/hp",
      "treasure": {
        "cp": {"amount": "(1d4+1)×1,000", "chance": "30%"},
        "sp": {"amount": "(1d4+1)×1,000", "chance": "25%"},
        "ep": {"amount": "1d6×1,000", "chance": "40%"},
        "gp": {"amount": "(1d8+1)×1,000", "chance": "45%"},
        "pp": {"amount": "1d4×1,000", "chance": "25%"},
        "gems": {"amount": "5d8", "chance": "55%"},
        "jewellery": {"amount": "8d4", "chance": "45%"},
        "magic_items": {"amount": "3", "chance": "40%"}
      },
      "description": "Liches are the remains of powerful wizard-priests who have cheated death through fell magic. A lich's talisman contains a portion of its essence. They cast spells at 18th level minimum and typically dwell in complex underground labyrinths. Their touch inflicts 2d6 cold damage and paralysis (save or be held for 3d8 turns). Creatures below 6th level must save vs magic when seeing a lich or flee permanently."
    },

    {
      "name": "Lion",
      "category": "Animal",
      "variants": [
        {
          "type": "Lion",
          "frequency": "Common",
          "numberAppearing": "2d6",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 5,
          "hitDice": "5+3",
          "attacks": 3,
          "damage": "1d6/1d6/1d10",
          "specialAttacks": "Rear claws",
          "specialDefenses": "Only surprised on 1",
          "levelXP": "4/250+6/hp"
        },
        {
          "type": "Cougar",
          "frequency": "Common",
          "numberAppearing": "1d2",
          "size": "Medium",
          "move": "150 ft",
          "armorClass": 6,
          "hitDice": "3+2",
          "attacks": 3,
          "damage": "1d4/1d4/1d6",
          "specialAttacks": "Rear claws",
          "specialDefenses": "Only surprised on 1",
          "levelXP": "3/100+3/hp"
        },
        {
          "type": "Prehistoric",
          "frequency": "Rare",
          "numberAppearing": "2d4",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 5,
          "hitDice": "6+3",
          "attacks": 3,
          "damage": "2d4/2d4/2d6",
          "specialAttacks": "Rear claws",
          "specialDefenses": "Only surprised on 1",
          "levelXP": "4/300+6/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "25% (Lion, Prehistoric); 15% (Cougar)",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "All lions gain two additional rear leg raking claw attacks if they hit with both forepaw attacks. Lions organize into family 'prides' with 1d2 males and 2d4+1 females. When encountered in their lair, 1d10 cubs will be present, with adults fighting to the death to protect young. Cougars (mountain lions) are more solitary and wide-ranging, capable of 20 ft horizontal leaps and 15 ft vertical jumps. Prehistoric lions (cave lions) are larger versions typically found in 'lost world' settings."
    },
    {
      "name": "Lizard, Giant (Fire)",
      "frequency": "Very rare",
      "numberAppearing": "1d4",
      "size": "Large (30 ft long)",
      "move": "90 ft",
      "armorClass": 3,
      "hitDice": "10",
      "attacks": "3",
      "damage": "1d8/1d8/2d8",
      "specialAttacks": "Flame breath (cone 150 ft, 2d6 dmg, save for half)",
      "specialDefenses": "Tough scaled hide",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "7/1,500 + 14/hp",
      "treasure": "None carried. In lair: 1d8×1,000 cp (45%), 1d6×1,000 sp (30%), 1d6×1,000 ep (25%), 1d4×1,000 gp (33%), 1d4×100 pp (10%), 2d4 gems (30%), 1d6 jewellery (20%), Magic Sword/Armour/Weapon (12%), 2d4 potions (50%), 1d6 scrolls (40%)"
    },
    {
      "name": "Lizard, Giant",
      "frequency": "Uncommon",
      "numberAppearing": "2d6",
      "size": "Large (20 ft long)",
      "move": "150 ft",
      "armorClass": 5,
      "hitDice": "3+1",
      "attacks": "1",
      "damage": "1d8+1",
      "specialAttacks": "Double damage on nat 20",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "3/120 + 4/hp",
      "treasure": "None"
    },
    {
      "name": "Lizard, Monitor",
      "frequency": "Rare",
      "numberAppearing": "1d6",
      "size": "Large (40 ft long)",
      "move": "60 ft",
      "armorClass": 5,
      "hitDice": "8",
      "attacks": "3",
      "damage": "2d6/2d6/3d6",
      "specialAttacks": "Clamp on nat 20, auto-damage following round",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "6/925 + 10/hp",
      "treasure": "In lair: 4d6 cp (90%), 3d6 sp (80%), 3d6 ep (70%), 2d6 gp (60%), 1d6 pp (50%), 2d6 gems (40%), 1d2 magic items (10%)"
    },
    {
      "name": "Lizard, Cave",
      "frequency": "Uncommon",
      "numberAppearing": "1d6",
      "size": "Large (20 ft long)",
      "move": "120 ft",
      "armorClass": 5,
      "hitDice": "6",
      "attacks": "1",
      "damage": "2d6",
      "specialAttacks": "Clamp on nat 20; will drag victim to lair",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "7/375 + 6/hp",
      "treasure": "In lair: 1d4×1,000 cp (30%), 2d4×1,000 sp (40%), 1d3×1,000 ep (25%), 1d4 gems (50%)"
    },
    {
      "name": "Lizard Man",
      "category": "Humanoid",
      "frequency": "Rare",
      "numberAppearing": "10d4",
      "size": "Man-sized (7 ft tall)",
      "move": "60 ft; 120 ft swimming",
      "armorClass": "5 (4 with shield)",
      "hitDice": "2+1",
      "attacks": 3,
      "damage": "1d2/1d2/1d8",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "30%",
      "intelligence": "Low (average)",
      "alignment": "Neutral",
      "levelXP": "2/20+2/hp",
      "description": "Semi-aquatic tribal reptilians. Prefer underwater cave lairs. Crude villages. Often use javelins or barbed darts.",
      "treasure": {
        "lair": {
          "cp": {"amount": "1d8×1,000", "chance": "10%"},
          "sp": {"amount": "1d12×1,000", "chance": "15%"},
          "ep": {"amount": "1d8×1,000", "chance": "15%"},
          "gp": {"amount": "1d6×1,000", "chance": "50%"},
          "gems": {"amount": "1d10", "chance": "30%"},
          "jewellery": {"amount": "1d6", "chance": "25%"},
          "magic_items": {"amount": "2 items or 1 potion", "chance": "15%"}
        }
      }
    },
    {
      "name": "Locathah",
      "frequency": "Rare",
      "numberAppearing": "20d10",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 6,
      "hitDice": "2",
      "attacks": "1",
      "damage": "By weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Very",
      "alignment": "Neutral",
      "levelXP": "2/30 + 1/hp",
      "treasure": "None carried. In lair: 1d4×1,000 cp (30%), 1d6×1,000 sp (20%), 1d8×1,000 ep (30%), 1d10×1,000 gp (40%), 1d6×100 pp (25%), 3d12 gems (65%), 4d10 jewellery (50%), 3 magic items (33%)"
    },
    {
      "name": "Lurker Above",
      "frequency": "Rare",
      "numberAppearing": "1",
      "size": "Large",
      "move": "10 ft; 90 ft flying (AA:I)",
      "armorClass": 6,
      "hitDice": "10",
      "attacks": "1",
      "damage": "1d6",
      "specialAttacks": "Engulf and constrict (1d6/round), suffocation",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "95%",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "7/1,500 + 4/hp",
      "treasure": "1d10×1,000 cp (25%), 1d8×1,000 sp (25%), 1d6×1,000 gp (25%), 1d6 gems (25%), 1d3 jewellery (25%), any two Magic Items (10%)"
    },
    {
      "name": "Manticore",
      "frequency": "Uncommon",
      "number_appearing": "1d4",
      "size": "Large",
      "movement": "120 ft; 180 ft flying (AA:II)",
      "armor_class": 4,
      "hit_dice": "6+3",
      "attacks": 3,
      "damage": "1d3/1d3/1d8",
      "special_attacks": "Tail spikes",
      "special_defenses": null,
      "magic_resistance": "Standard",
      "lair_probability": "20%",
      "intelligence": "Low",
      "alignment": "Lawful evil",
      "level_xp": "6/525 + 8/hp",
      "treasure": "1d10×1,000 cp (5%), 1d12×1,000 sp (25%), 1d6×1,000 ep (25%), 1d8×1,000 gp (25%), 1d12 gems, 1d8 jewellery, 3 misc. magic and 1 scroll (25%)"
    },
    {
      "name": "Medusa",
      "frequency": "Rare",
      "number_appearing": "1d3",
      "size": "Medium",
      "movement": "90 ft",
      "armor_class": 5,
      "hit_dice": "6+1",
      "attacks": 1,
      "damage": "1d6",
      "special_attacks": "Poison, petrifaction",
      "special_defenses": null,
      "magic_resistance": "Normal",
      "lair_probability": "50%",
      "intelligence": "Very to High",
      "alignment": "Neutral evil",
      "level_xp": "5/750+6/hp",
      "treasure": "1d6×1,000 sp (30%), 1d2×1,000 ep (25%), 2d6×1,000 gp (70%), 10d4 gems (50%), 1 misc magic + 1 potion (60%)"
    },
    {
      "name": "Men, Bandit",
      "category": "Men",
      "name_variants": "Brigand",
      "frequency": "Common",
      "numberAppearing": "20d10",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": "Determined by armor worn",
      "hitDice": "1d6 hp",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Leader types may have spells",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Mean (average to very)",
      "alignment": "Neutral (chaotic evil)",
      "levelXP": "Variable",
      "description": "Bandits roam every clime from temperate to subtropical. They travel in groups, generally led by high level fighters, magic-users and clerics. Those encountered in dungeons will be far fewer in number and often cooperating with thieves.",
      "leaders": {
        "per_20": {"level": 3, "class": "fighter", "count": 1},
        "per_30": {"level": 4, "class": "fighter", "count": 1},
        "per_40": {"level": 5, "class": "fighter", "count": 1},
        "per_50": {"level": 6, "class": "fighter", "count": 1},
        "commander": {
          "under_100": {"level": 8, "class": "fighter", "count": 1},
          "100_to_150": {"level": 9, "class": "fighter", "count": 1},
          "over_150": {"level": 10, "class": "fighter", "count": 1},
          "lieutenant": {"level": 7, "class": "fighter", "count": 1},
          "guards": {"level": 2, "class": "fighter", "count": 6}
        },
        "magic_user": {
          "chance": "25% per 50 bandits",
          "level": "7th to 10th (1d4+6)"
        },
        "cleric": {
          "chance": "15% per 50 bandits",
          "level": "5th or 6th",
          "assistant": {"level": "3rd or 4th", "count": 1}
        },
        "psionic_abilities": "Normal chances for leader-types"
      },
      "lair": {
        "types": {
          "informal_camp": "80%",
          "cave_complex": {"chance": "10%", "features": "Secret entrance"},
          "castle": {"chance": "10%", "defenses": "1-4 light catapults"}
        },
        "occupants": {
          "important_prisoners": "2-20",
          "camp_followers_slaves": "5-30"
        }
      },
      "equipment": {
        "mounts_armor_weapons": {
          "medium_horse_chainmail_shield_sword": "10%",
          "light_horse_leather_shield_spear": "10%",
          "light_horse_leather_light_crossbow": "10%",
          "leather_polearm": "10%",
          "leather_light_crossbow": "10%",
          "leather_short_bow": "10%",
          "leather_shield_sword": "40%"
        },
        "mounted_percentage": {
          "hills_mountains": "No more than 10%",
          "open_country": "90%"
        }
      },
      "brigand_variant": {
        "description": "Brigands are chaotic evil bandits with +1 morale in combat",
        "lair": {
          "cave_complex": "20%",
          "castle": "30%",
          "important_prisoners": "1-10",
          "camp_followers_slaves": "20-50"
        }
      },
      "treasure": {
        "individual": "2d4 gp",
        "lair": {
          "cp": {"amount": "1d6×1,000", "chance": "25%"},
          "sp": {"amount": "1d6×1,000", "chance": "30%"},
          "ep": {"amount": "1d6×1,000", "chance": "35%"},
          "gp": {"amount": "1d10×1,000", "chance": "40%"},
          "pp": {"amount": "1d4×100", "chance": "25%"},
          "gems": {"amount": "4d10", "chance": "60%"},
          "jewellery": {"amount": "3d10", "chance": "50%"},
          "magic_items": {"amount": 3, "chance": "30%"}
        }
      }
    },
    {
      "name": "Men, Berserker",
      "category": "Men",
      "frequency": "Rare",
      "numberAppearing": "10d10",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 7,
      "hitDice": "1d6+1 hp",
      "attacks": "1 (or 2)",
      "damage": "By weapon",
      "specialAttacks": "Battle fury (strike twice or at +2)",
      "specialDefenses": "Never check morale",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Mean (average to very)",
      "alignment": "Neutral",
      "levelXP": "Variable",
      "description": "Berserkers are warrior bands that fight with fierce battle-fury, either striking twice per round or making one attack at +2. They never use armor and never make morale checks in battle.",
      "leaders": {
        "per_10": {"level": 1, "class": "fighter", "count": 1},
        "per_20": {"level": 2, "class": "fighter", "count": 1},
        "per_30": {"level": 3, "class": "fighter", "count": 1},
        "per_40": {"level": 4, "class": "fighter", "count": 1},
        "per_50": {"level": 5, "class": "fighter", "count": 1},
        "war_chief": {
          "less_than_60": {"level": 9, "class": "fighter", "count": 1},
          "more_than_60": {"level": 10, "class": "fighter", "count": 1}
        }
      },
      "treasure": {
        "individual": "3d6 sp",
        "lair": {
          "cp": {"amount": "1d8×1,000", "chance": "50%"},
          "sp": {"amount": "1d6×1,000", "chance": "25%"},
          "ep": {"amount": "1d4×1,000", "chance": "25%"},
          "pp": {"amount": "1d3×1,000", "chance": "25%"},
          "gems": {"amount": "1d8", "chance": "30%"},
          "jewellery": {"amount": "1d4", "chance": "20%"},
          "magic_items": {"amount": 1, "chance": "10%"}
        }
      }
    },
    {
      "name": "Men, Buccaneer",
      "category": "Men",
      "name_variants": "Pirate",
      "frequency": "Uncommon",
      "numberAppearing": "50d6",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": "Determined by armor worn",
      "hitDice": "1d6 hp",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Leader types",
      "specialDefenses": "Leader types",
      "magicResistance": "Standard",
      "lairProbability": "80% or 100%",
      "intelligence": "Mean (average to very)",
      "alignment": "Neutral (chaotic evil)",
      "levelXP": "Variable",
      "description": "Buccaneers are seafaring raiders found on oceans, seas, large lakes, and broad rivers. Their lair is typically their vessel(s). Only 20% of the time will they be encountered off their ship(s) along some coast or shore. Pirates are chaotic evil buccaneers who otherwise conform to the same characteristics.",
      "leaders": {
        "per_50": {"level": 3, "class": "fighter", "count": 1},
        "per_100": {"level": 5, "class": "fighter", "count": 1},
        "captain": {
          "less_than_200": {"level": 8, "class": "fighter", "count": 1},
          "more_than_200": {"level": 10, "class": "fighter", "count": 1}
        },
        "officers": {
          "lieutenant": {"level": "6th or 7th", "count": 1},
          "mates": {"level": 4, "count": 4}
        },
        "spellcasters": {
          "cleric": {"level": "12th to 15th", "chance": "15% per 50 buccaneers"},
          "magic_user": {"level": "6th to 8th", "chance": "10% per 50 buccaneers"}
        }
      },
      "prisoners": "2-5 in lair, held for ransom",
      "equipment": {
        "armor_weapons": {
          "chainmail_shield_sword_handaxe": "5%",
          "chainmail_sword": "10%",
          "leather_shield_sword": "20%",
          "leather_spear": "10%",
          "leather_axe": "20%",
          "leather_heavy_crossbow": "5%",
          "leather_light_crossbow": "30%"
        },
        "leader_armor": "Leaders wear chainmail rather than plate armor; magic armor will be chain variety"
      },
      "treasure": {
        "individual": "3d6 sp",
        "lair": {
          "gp": {"amount": "5d6×1,000", "chance": "60%"},
          "pp": {"amount": "1d8×100", "chance": "15%"},
          "gems": {"amount": "1d8×10", "chance": "60%"},
          "jewellery": {"amount": "5d8", "chance": "50%"},
          "map": {"chance": "55%"}
        }
      }
    },
    {
      "name": "Men, Caveman",
      "category": "Men",
      "frequency": "Rare",
      "numberAppearing": "10d10",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 8,
      "hitDice": 2,
      "attacks": 1,
      "damage": "By weapon (+1 damage from strength)",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Low (to average)",
      "alignment": "Neutral",
      "levelXP": "2/20+2/hp",
      "description": "Cavemen are primitive humans living in caves. They use spears, stone axes, and clubs, and are fearful of the unknown (–1 morale).",
      "leaders": {
        "hunting_party": "3rd level fighter",
        "lair": {
          "chief": "5th level fighter",
          "guards": "1d4 4th level fighters"
        },
        "shaman": "10% chance per 10: 3rd level cleric"
      },
      "treasure": {
        "lair": {
          "ivory_tusks": "2d6 (1,000 gp each)",
          "gold_nuggets": "2d4×10 (5 gp each)",
          "gems": "1d% (10 gp each)",
          "chance": "5% per 10 cavemen"
        }
      }
    },
    {
      "name": "Men, Characters",
      "category": "Men",
      "generator": "generateCharacterParty",
      "description": "This encounter generates a full adventuring party per DMG Appendix C rules. Includes 2–5 characters with henchmen to make a total of 7–9 members. Most will be mounted, level 7–10, and equipped with appropriate gear and magic items."
    },
    {
      "name": "Men, Dervish",
      "category": "Men",
      "name_variants": "Nomad",
      "frequency": "Rare (Uncommon)",
      "numberAppearing": "30d10",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": "Determined by armor worn",
      "hitDice": "1d6 hp",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Leader types, +1 to hit and damage",
      "specialDefenses": "Never check morale",
      "magicResistance": "Standard",
      "lairProbability": "5% (15%)",
      "intelligence": "Mean (average to very)",
      "alignment": "Lawful good (neutral)",
      "levelXP": "Variable",
      "description": "Dervishes are highly religious desert nomads who are fanatical devotees to their religion. They gain +1 to combat and never check morale. Always mounted on light or medium warhorses. Encountered only in desert or steppes/plains areas.",
      "leaders": {
        "fighters": {
          "per_30": {"level": 3, "class": "fighter", "count": 1},
          "per_40": {"level": 4, "class": "fighter", "count": 1},
          "per_50": {"level": 5, "class": "fighter", "count": 1},
          "per_60": {"level": 6, "class": "fighter", "count": 1}
        },
        "clerics": {
          "under_125": {"level": 10, "class": "cleric", "count": 1},
          "under_250": {"level": 11, "class": "cleric", "count": 1},
          "over_250": {"level": 12, "class": "cleric", "count": 1},
          "assistants": {"level": "4th to 8th", "class": "cleric", "count": 2}
        },
        "magic_users": {
          "chance": "15% per 50 dervishes",
          "main": {"level": "7th or 8th", "count": 1},
          "assistants": {"level": "3rd or 4th", "count": 2},
          "note": "If more than 200 dervishes, magic-users will be higher level"
        },
        "psionic_abilities": "Leaders have normal chances for possession"
      },
      "equipment": {
        "mounts_armor_weapons": {
          "medium_warhorse_chainmail_shield_lance_sword": "25%",
          "medium_warhorse_chainmail_shield_composite_bow_sword": "5%",
          "light_warhorse_leather_shield_lance_sword": "50%",
          "light_warhorse_leather_shield_composite_bow_sword": "10%",
          "light_warhorse_leather_shield_light_crossbow_mace": "10%"
        },
        "leader_armor": "Leaders wear chainmail; if magic armor indicated, will be of that variety"
      },
      "fortress": {
        "population": "200-300 dervishes",
        "defenses": {
          "walls": true,
          "ballistae": "1-4",
          "light_catapults": "1-4",
          "heavy_catapults": "1-2"
        }
      },
      "nomad_variant": {
        "description": "Bands of desert or steppes/plains dwellers who roam freely about herding and hunting. They surprise on a 1-4 due to ability to use terrain.",
        "leaders": {
          "fighters": {
            "same_as_dervish": true,
            "main_leader": {
              "under_150": {"level": 8, "class": "fighter", "count": 1},
              "150_to_250": {"level": 9, "class": "fighter", "count": 1},
              "over_250": {"level": 10, "class": "fighter", "count": 1}
            },
            "subcommander": {"level": "6th to 8th", "count": 1},
            "guards": {"level": 2, "count": 12}
          },
          "clerics": {
            "chance": "15% per 50 nomads",
            "level": "4th to 7th",
            "permanent": {"level": 3, "count": 2}
          },
          "magic_users": {
            "chance": "15% per 50 nomads",
            "level": "5th to 8th",
            "permanent": {"level": 4, "count": 1}
          },
          "psionic_abilities": "Normal possibilities"
        },
        "equipment": {
          "desert_nomads": {
            "medium_warhorse_chainmail_shield_lance_sword": "10%",
            "medium_warhorse_chainmail_light_crossbow_sword": "10%",
            "light_warhorse_leather_shield_lance_sword": "50%",
            "light_warhorse_leather_shield_sword_javelins": "20%",
            "light_warhorse_leather_light_crossbow_sword": "10%"
          },
          "steppes_plains_nomads": {
            "medium_warhorse_chainmail_shield_lance_sword": "20%",
            "medium_warhorse_chainmail_composite_bow_sword": "10%",
            "light_warhorse_leather_shield_lance_sword": "20%",
            "light_warhorse_leather_composite_bow_sword": "50%"
          }
        },
        "lair": {
          "type": {
            "tents_or_yurts": {
              "chance": "90%",
              "location": "Oasis or stream"
            },
            "walled_city": {
              "chance": "10%",
              "additional_forces": {
                "footmen": "20-80",
                "armor": "Chain and shield",
                "weapons": {
                  "spear_sword": "50%",
                  "composite_bow_sword": "50%"
                }
              }
            }
          },
          "population": {
            "females": "200% of males",
            "children": "100% of males",
            "slaves": "10-100"
          },
          "animals": {
            "horses": "100-400",
            "herd_animals": "200-800 (sheep, goats, camels, cattle, and/or yaks)"
          }
        },
        "tactics": {
          "withdrawal": "Withdraw if over 25% casualties and enemy continues resistance",
          "feigned_retreat": "Will feign retreat to lure enemies into ambush",
          "capture": "75% likely to capture weaker groups",
          "parley": "90% likely to parley with near equal strength"
        }
      },
      "treasure": {
        "individual": {
          "dervish": "3d12 cp",
          "nomad": "2d6 ep"
        },
        "lair": {
          "cp": {"amount": "1d3×1,000", "chance": "20%"},
          "sp": {"amount": "1d4×1,000", "chance": "25%"},
          "ep": {"amount": "1d4×1,000", "chance": "25%"},
          "gp": {"amount": "1d4×1,000", "chance": "30%"},
          "pp": {"amount": "1d6×100", "chance": "30%"},
          "gems": {"amount": "1d6×10", "chance": "55%"},
          "jewellery": {"chance": "50%"},
          "magic_items": {"amount": 3, "chance": "50%"}
        }
      }
    },
    {
      "name": "Men, Merchant",
      "category": "Men",
      "frequency": "Common",
      "numberAppearing": "50d6",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": "Determined by armor worn",
      "hitDice": "1d6 hp",
      "attacks": "See below",
      "damage": "By weapon",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "Standard",
      "lairProbability": "0%",
      "intelligence": "Mean (very to high)",
      "alignment": "Neutral",
      "levelXP": "Variable",
      "description": "Merchant encounters are caravans with merchants (10%), drovers (10%), and guards (80%). The caravan includes pack animals, carts, and horses. At least 50% of guards are mounted on light or medium warhorses.",
      "leaders": {
        "captain": {"level": "6-11 (1d6+5)", "class": "fighter", "count": 1},
        "lieutenant": {"level": "1 less than captain", "class": "fighter", "count": 1},
        "guards": {"level": 2, "class": "fighter", "count": 12},
        "magic_user_chance": "10% per 50 persons",
        "magic_user_level": "6-8 (1d3+5)",
        "cleric_chance": "5% per 50 persons",
        "cleric_level": "5-7 (1d3+4)"
      },
      "treasure": {
        "merchants": "3d12 cp, 3d6 sp, 2d6 ep, 2d4 gp, 1d6 pp, 2d4 gp (40%), 1d6x10 pp (50%), 4d8 gems (55%), 1d12 pieces of jewellery (45%) each",
        "mercenaries": "3d6 sp each",
        "leaders": "2d4 gp each",
        "pay_box": {
          "description": "Hidden in caravan",
          "gold": "2,000-4,000 (1d3+1 × 1,000)",
          "platinum": "100-400 (1d4 × 100)",
          "gems": "4d4"
        },
        "caravan_goods": {
          "value": "10,000 to 60,000 gp",
          "transport": "10 pack animals or 1 cart per 5,000 gp worth of goods"
        }
      }
    },
    {
      "name": "Men, Patrol (Heavy)",
      "category": "Men",
      "name_variants": "Heavy Patrol, State Patrol (Heavy)",
      "frequency": "Uncommon",
      "numberAppearing": "d20+20",
      "size": "Man-sized",
      "move": "120 ft (mounted) or 90 ft (afoot)",
      "armorClass": "2 (officers), 3 (NCOs and veterans)",
      "hitDice": "F 0–6",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "5%",
      "intelligence": "Average to High",
      "alignment": "Any (typically Lawful Neutral or Lawful Evil)",
      "levelXP": "Variable by class and level",
      "description": "Heavy patrols are organized military units of 21–40 men, typically mounted on medium or heavy warhorses unless terrain demands marching. They are trained for close-order combat and usually heavily armored. Patrol nationality determines specific weapons and heraldry. Encounters may include a spellcaster.",
      "leaders": {
        "officer": { "level": "5-6", "class": "fighter", "count": 1 },
        "subalterns": { "level": "3-4", "class": "fighter", "count": 2 },
        "serjeants": { "level": "2-3", "class": "fighter", "count": 6 },
        "veterans": { "level": 1, "class": "fighter", "hp": "7-12", "count": "7-10" },
        "regulars": { "level": 0, "class": "fighter", "hp": "4-7", "count": "9-24" },
        "spellcaster": {
          "options": [
            { "class": "cleric", "level": "5-6", "armorClass": 2 },
            { "class": "druid", "level": "5-6", "armorClass": 8 },
            { "class": "magic-user", "level": "4-5", "armorClass": 10 }
          ],
          "chance": "100%",
          "count": 1
        }
      },
      "equipment": {
        "mounts_armor_weapons": {
          "officer": "Heavy/medium horse, plate or banded mail, shield, broad or long sword",
          "subalterns": "As officer",
          "serjeants": "Chain or scale mail, shield, broad or long sword, appropriate national arms",
          "veterans": "Chain or scale mail, shield, melee weapon",
          "regulars": "Chain or leather armor, shield, melee weapon",
          "spellcaster": "Varies by class (e.g., clerics with chain, M-Us unarmored)"
        },
        "magic_item_chance": "5% per level of highest class (armor, shield, sword, potion, scroll, ring, rod)",
        "magic_item_types": {
          "fighter": ["armor", "shield", "sword", "misc weapon", "potion", "scroll"],
          "cleric": ["armor", "shield", "misc weapon", "misc magic", "potion", "scroll"],
          "magic_user": ["potion", "scroll", "ring", "rod", "misc magic"]
        }
      },
      "treasure": {
        "individual": "1d8 gp",
        "lair": {
          "gems": { "amount": "1d6", "chance": "25%" },
          "magic_items": { "amount": 1, "chance": "15%" }
        }
      }
    },
    {
      "name": "Men, Patrol (False)",
      "category": "Men",
      "name_variants": "False Patrol, Disguised Raiders, Impostor Soldiers",
      "frequency": "Rare",
      "numberAppearing": "15-60",
      "size": "Man-sized",
      "move": "120 ft (mounted) or 90 ft (afoot)",
      "armorClass": "Varies by role (see below)",
      "hitDice": "F 0–6",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Surprise (disguise), Ambush tactics",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Average to High",
      "alignment": "Neutral Evil or Chaotic Evil (usually)",
      "levelXP": "Variable by class and level",
      "description": "False patrols are raiding or scouting groups disguised as state soldiery. They use forged heraldry and mimic patrol formations to pass for legitimate forces. Small groups (under 42) act as scouts. Larger groups (42+) are raiders who deliberately conceal their full strength to appear as a typical patrol of 25–30 men. 30% of false patrols are raider types, often including hidden reserves.",
      "leaders": {
        "officer": { "level": "5-6", "class": "fighter", "count": 1 },
        "subalterns": { "level": "3-4", "class": "fighter", "count": 2 },
        "serjeants": { "level": "2-3", "class": "fighter", "count": 6 },
        "veterans": { "level": 1, "class": "fighter", "hp": "7-12", "count": "7-10" },
        "regulars": { "level": 0, "class": "fighter", "hp": "4-7", "count": "9-24" },
        "spellcaster": {
          "options": [
            { "class": "cleric", "level": "5-6", "armorClass": 2 },
            { "class": "druid", "level": "5-6", "armorClass": 8 },
            { "class": "magic-user", "level": "4-5", "armorClass": 10 }
          ],
          "chance": "30%",
          "count": 1
        }
      },
      "equipment": {
        "mounts_armor_weapons": {
          "officer": "Heavy/medium horse, plate or banded mail, shield, forged insignia, broad or long sword",
          "subalterns": "As officer",
          "serjeants": "Chain or scale mail, shield, forged insignia, broad or long sword",
          "veterans": "Chain or scale mail, melee weapon",
          "regulars": "Leather or chain armor, melee weapon",
          "spellcaster": "As appropriate to class (usually disguised as regulars)"
        },
        "magic_item_chance": "5% per level of highest class (armor, shield, sword, potion, scroll, ring, rod)",
        "magic_item_types": {
          "fighter": ["armor", "shield", "sword", "misc weapon", "potion", "scroll"],
          "cleric": ["armor", "shield", "misc weapon", "misc magic", "potion", "scroll"],
          "magic_user": ["potion", "scroll", "ring", "rod", "misc magic"]
        }
      },
      "treasure": {
        "individual": "1d8 gp",
        "lair": {
          "gems": { "amount": "2d6", "chance": "40%" },
          "magic_items": { "amount": 1, "chance": "20%" }
        }
      }
    },
    {
      "name": "Men, Patrol (Knight)",
      "category": "Men",
      "name_variants": "Knightly Patrol, Cavalry Patrol",
      "frequency": "Rare",
      "numberAppearing": "11-14 knights plus retainers",
      "size": "Man-sized",
      "move": "120 ft (mounted)",
      "armorClass": "2 (Knights, Clerics), 3 (Esquires), 4 (Serjeants)",
      "hitDice": "F 0–10",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "High",
      "alignment": "Lawful Good or Lawful Neutral",
      "levelXP": "Variable by class and level",
      "description": "Knightly patrols are elite units of mounted warriors supported by retainers and clergy. They are mounted on heavy horses with full equipment and engage in military and ceremonial duties. Knights are well-armored and well-trained; their entourage includes esquires and serjeants, while chaplains offer divine aid.",
      "leaders": {
        "commander": { "level": "8-9", "class": "paladin or fighter", "count": 1 },
        "lieutenant": { "level": "6-7", "class": "paladin or fighter", "count": 1 },
        "knights": { "level": "4-6", "class": "fighter", "count": "9-12" },
        "chaplain": { "level": "7-9", "class": "cleric", "count": 1 },
        "assistant_clerics": { "level": "3-5", "class": "cleric", "count": "1d3" },
        "entourage": {
          "esquire": { "level": "2-3", "class": "fighter", "count": "1 per knight" },
          "serjeants": { "level": 1, "class": "fighter", "count": "5-8 per knight" }
        }
      },
      "equipment": {
        "mounts_armor_weapons": {
          "knights": "Heavy warhorse, plate or banded mail, lance, bastard sword, mace",
          "esquires": "Medium warhorse, chain or scale mail, lance, long sword, mace",
          "serjeants": "Light horse (optional), studded or leather armor, short sword; 50% with light crossbow or spear",
          "clerics": "Medium warhorse, plate or banded mail, flail, hammer, or mace"
        },
        "magic_item_chance": "5% per level of highest class (armor, shield, sword, potion, scroll, ring, rod)",
        "magic_item_types": {
          "fighter": ["armor", "shield", "sword", "misc weapon", "potion", "scroll"],
          "cleric": ["armor", "shield", "misc weapon", "misc magic", "potion", "scroll"]
        }
      },
      "treasure": {
        "individual": "2d6 gp",
        "lair": {
          "gems": { "amount": "1d4", "chance": "30%" },
          "magic_items": { "amount": 1, "chance": "20%" }
        }
      }
    },

    {
      "name": "Men, Patrol (Levies)",
      "category": "Men",
      "name_variants": "Levy Patrol, Militia Patrol",
      "frequency": "Common",
      "numberAppearing": "50–70",
      "size": "Man-sized",
      "move": "90 ft (afoot), officers on light horses",
      "armorClass": "4 (Captains), 5 (Lieutenants, Serjeants, Veterans), 6-7 (Levies)",
      "hitDice": "F 0–8",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "5%",
      "intelligence": "Average",
      "alignment": "Lawful Neutral or Neutral",
      "levelXP": "Variable by class and level",
      "description": "Levies are hastily-raised militia footmen, drawn from the local populace in times of threat. They are commanded by trained officers and equipped with weapons typical of their region. In dangerous zones, they may be accompanied by scouts or spellcasters for added support. Non-human levies may be used in some areas.",
      "leaders": {
        "captain": { "level": "6-8", "class": "fighter or ranger", "count": 1 },
        "lieutenants": { "level": "4-5", "class": "fighter", "count": 2 },
        "serjeants": { "level": 3, "class": "fighter", "count": 4 },
        "veterans": { "level": "1-2", "class": "fighter", "count": 8 },
        "levies": { "level": 0, "class": "fighter", "hp": "3-6", "count": "41-50" },
        "spellcaster": {
          "options": [
            { "class": "cleric", "level": "4-5", "armorClass": 4 },
            { "class": "druid", "level": "4-6", "armorClass": 8 },
            { "class": "magic-user", "level": "3-5", "armorClass": 10 },
            { "class": "illusionist", "level": "3-5", "armorClass": 10 }
          ],
          "chance": "50% (1-2 may be present)",
          "count": "1–2"
        },
        "scouts": {
          "level": "3-5",
          "class": "ranger or thief",
          "armorClass": 5,
          "count": "1-4",
          "chance": "50% in troubled regions"
        }
      },
      "equipment": {
        "mounts_armor_weapons": {
          "captain": "Light horse, chain or banded mail, shield, regional sword or pole arm",
          "lieutenants": "Light horse, chain mail, melee weapon",
          "serjeants": "Chain mail or studded leather, pole arm or sword",
          "veterans": "Leather or chain armor, typical regional weapons",
          "levies": "Leather or padded armor, pikes, long spears, or pole arms; up to 50% with missile weapons (e.g., shortbows, slings)",
          "spellcasters": "Varies by class; often disguised or cloaked"
        },
        "magic_item_chance": "5% per level of highest class (armor, shield, sword, potion, scroll, ring, rod)",
        "magic_item_types": {
          "fighter": ["armor", "shield", "sword", "misc weapon", "potion", "scroll"],
          "cleric": ["armor", "shield", "misc weapon", "misc magic", "potion", "scroll"],
          "magic_user": ["potion", "scroll", "ring", "rod", "misc magic"]
        }
      },
      "treasure": {
        "individual": "1d4 gp",
        "lair": {
          "gems": { "amount": "1d4", "chance": "20%" },
          "magic_items": { "amount": 1, "chance": "10%" }
        }
      }
    },
    
    {
      "name": "Men, Patrol (Light)",
      "category": "Men",
      "name_variants": "Light Patrol, Skirmisher Patrol",
      "frequency": "Uncommon",
      "numberAppearing": "21-40",
      "size": "Man-sized",
      "move": "120 ft (mounted)",
      "armorClass": "4 (officers), 5 (NCOs and veterans), 6 (regulars)",
      "hitDice": "F 0–6",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "5%",
      "intelligence": "Average to High",
      "alignment": "Any (usually Lawful Neutral or Chaotic Neutral)",
      "levelXP": "Variable by class and level",
      "description": "Light patrols are mobile reconnaissance units mounted on light warhorses. They are structured similarly to heavy patrols but have lighter armor, emphasize missile combat, and typically include 17–24 regulars. They are suited to skirmishes, screening operations, or pursuit.",
      "leaders": {
        "officer": { "level": "5-6", "class": "fighter", "count": 1 },
        "subalterns": { "level": "3-4", "class": "fighter", "count": 2 },
        "serjeants": { "level": "2-3", "class": "fighter", "count": 6 },
        "veterans": { "level": 1, "class": "fighter", "hp": "7-12", "count": "7-10" },
        "regulars": { "level": 0, "class": "fighter", "hp": "4-7", "count": "17-24" },
        "spellcaster": {
          "options": [
            { "class": "cleric", "level": "5-6", "armorClass": 4 },
            { "class": "druid", "level": "5-6", "armorClass": 10 },
            { "class": "magic-user", "level": "4-5", "armorClass": 12 }
          ],
          "chance": "100%",
          "count": 1
        }
      },
      "equipment": {
        "mounts_armor_weapons": {
          "officer": "Light warhorse, chain mail or equivalent, shield, sword or lance",
          "subalterns": "Light warhorse, chain or studded leather, sword or bow",
          "serjeants": "Light warhorse, studded leather, shortbow or spear",
          "veterans": "Light warhorse, studded or padded armor, shortbow or melee weapon",
          "regulars": "Light warhorse, padded or leather armor, shortbow or sling",
          "spellcaster": "As appropriate to class; likely unarmored if a magic-user"
        },
        "magic_item_chance": "5% per level of highest class (armor, shield, sword, potion, scroll, ring, rod)",
        "magic_item_types": {
          "fighter": ["armor", "shield", "sword", "misc weapon", "potion", "scroll"],
          "cleric": ["armor", "shield", "misc weapon", "misc magic", "potion", "scroll"],
          "magic_user": ["potion", "scroll", "ring", "rod", "misc magic"]
        }
      },
      "treasure": {
        "individual": "1d8 gp",
        "lair": {
          "gems": { "amount": "1d6", "chance": "25%" },
          "magic_items": { "amount": 1, "chance": "15%" }
        }
      }
    },

    {
      "name": "Men, Patrol (Medium)",
      "category": "Men",
      "name_variants": "Medium Patrol, Standard Cavalry Patrol",
      "frequency": "Uncommon",
      "numberAppearing": "21-40",
      "size": "Man-sized",
      "move": "120 ft (mounted)",
      "armorClass": "3 (officers), 4 (NCOs and veterans), 5 (regulars)",
      "hitDice": "F 0–6",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "5%",
      "intelligence": "Average to High",
      "alignment": "Any (often Lawful Neutral)",
      "levelXP": "Variable by class and level",
      "description": "Medium patrols are structured like heavy patrols, but their equipment and armor are lighter. Officers ride medium warhorses while troops ride light horses. These patrols are balanced in speed, defense, and combat ability, often reflecting the culture and tactics of their home nation.",
      "leaders": {
        "officer": { "level": "5-6", "class": "fighter", "count": 1 },
        "subalterns": { "level": "3-4", "class": "fighter", "count": 2 },
        "serjeants": { "level": "2-3", "class": "fighter", "count": 6 },
        "veterans": { "level": 1, "class": "fighter", "hp": "7-12", "count": "7-10" },
        "regulars": { "level": 0, "class": "fighter", "hp": "4-7", "count": "9-24" },
        "spellcaster": {
          "options": [
            { "class": "cleric", "level": "5-6", "armorClass": 3 },
            { "class": "druid", "level": "5-6", "armorClass": 9 },
            { "class": "magic-user", "level": "4-5", "armorClass": 11 }
          ],
          "chance": "100%",
          "count": 1
        }
      },
      "equipment": {
        "mounts_armor_weapons": {
          "officer": "Medium warhorse, chain or scale mail, shield, national melee weapon",
          "subalterns": "Medium warhorse, chain or studded leather, weapon typical to homeland",
          "serjeants": "Light horse, studded leather or leather, national melee weapon",
          "veterans": "Light horse, leather armor, appropriate arms",
          "regulars": "Light horse, padded or leather armor, weapon typical of origin",
          "spellcaster": "Per class; usually unarmored for M-U or lightly armored for clerics"
        },
        "magic_item_chance": "5% per level of highest class (armor, shield, sword, potion, scroll, ring, rod)",
        "magic_item_types": {
          "fighter": ["armor", "shield", "sword", "misc weapon", "potion", "scroll"],
          "cleric": ["armor", "shield", "misc weapon", "misc magic", "potion", "scroll"],
          "magic_user": ["potion", "scroll", "ring", "rod", "misc magic"]
        }
      },
      "treasure": {
        "individual": "1d8 gp",
        "lair": {
          "gems": { "amount": "1d6", "chance": "30%" },
          "magic_items": { "amount": 1, "chance": "15%" }
        }
      }
    },
    
    {
      "name": "Men, Patrol (Slaver)",
      "category": "Men",
      "name_variants": "Slaver Patrol, Slave Train Escort",
      "frequency": "Rare",
      "numberAppearing": "20–50 (plus wagons/carts and slaves)",
      "size": "Man-sized",
      "move": "90 ft (afoot) or 120 ft (mounted)",
      "armorClass": "4 (officers), 5 (NCOs), 6 (guards)",
      "hitDice": "F 0–6",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Average",
      "alignment": "Lawful Evil or Neutral Evil",
      "levelXP": "Variable by class and level",
      "description": "Slaver patrols escort and guard slave caravans between strongholds or toward market destinations. They are similar in composition to levy or light patrols, but travel with 3–5 prison wagons or 5–7 carts. Each vehicle is guarded and chained for holding captives. These groups are cruel and well-prepared for dealing with escape attempts or ambushes. Slaves are typically chained in pairs and closely guarded.",
      "leaders": {
        "officer": { "level": "5-6", "class": "fighter or slaver", "count": 1 },
        "lieutenants": { "level": "3-4", "class": "fighter", "count": 2 },
        "serjeants": { "level": "2-3", "class": "fighter", "count": 4 },
        "guards": { "level": 0, "class": "fighter", "hp": "4-7", "count": "12-30" },
        "drivers": { "level": 0, "class": "fighter or teamster", "hp": "3-6", "count": "3-7" }
      },
      "equipment": {
        "mounts_armor_weapons": {
          "officer": "Medium warhorse, scale or chain mail, whip or sword",
          "lieutenants": "Light horse, studded leather, sword or crossbow",
          "serjeants": "Afoot or mounted, studded leather, pole arm, short sword",
          "guards": "Afoot, leather or padded armor, short sword, whip, 50% with missile weapon",
          "drivers": "Afoot, leather armor, club or short sword",
          "vehicles": "3–5 prison wagons or 5–7 carts, each with chains and restraints"
        },
        "magic_item_chance": "5% per level of highest class (armor, shield, weapon, potion, scroll)",
        "magic_item_types": {
          "fighter": ["armor", "shield", "sword", "misc weapon", "potion", "scroll"]
        }
      },
      "treasure": {
        "individual": "1d10 gp (officers only)",
        "lair": {
          "gems": { "amount": "2d4", "chance": "50%" },
          "magic_items": { "amount": 1, "chance": "20%" },
          "trade_goods": "1–100 slaves, 10–100 gp per head if sold"
        }
      },
      "slaves": {
        "count": "1d100",
        "status": "Chained in pairs, lightly clothed, poorly fed; 90% are noncombatants"
      }
    },
    
    {
      "name": "Men, Patrol (Warband)",
      "category": "Men",
      "name_variants": "Nomadic Warband, Raider Warband",
      "frequency": "Rare",
      "numberAppearing": "90–120",
      "size": "Man-sized",
      "move": "120 ft (mounted)",
      "armorClass": "Determined by armor worn",
      "hitDice": "1d6 hp",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Tactical ambush, feigned retreat",
      "specialDefenses": "Morale bonuses, surprise in terrain",
      "magicResistance": "Standard",
      "lairProbability": "15% (special loot carried if lair result)",
      "intelligence": "Mean (average to very)",
      "alignment": "Neutral (often with Chaotic or Evil tendencies)",
      "levelXP": "Variable",
      "description": "Warbands are large, fast-moving forces of nomadic warriors, raiders, or militant tribesmen. They operate as mobile forces with flexible tactics, often carrying special loot and surprising enemies using terrain or retreat lures. Their structure follows nomadic patterns, including experienced leaders and specialized mounted troops.",
      "leaders": {
        "fighters": {
          "per_30": { "level": 3, "class": "fighter", "count": 1 },
          "per_40": { "level": 4, "class": "fighter", "count": 1 },
          "per_50": { "level": 5, "class": "fighter", "count": 1 },
          "per_60": { "level": 6, "class": "fighter", "count": 1 },
          "main_leader": {
            "under_150": { "level": 8, "class": "fighter", "count": 1 },
            "150_to_250": { "level": 9, "class": "fighter", "count": 1 },
            "over_250": { "level": 10, "class": "fighter", "count": 1 }
          },
          "subcommander": { "level": "6th to 8th", "class": "fighter", "count": 1 },
          "guards": { "level": 2, "class": "fighter", "count": 12 }
        },
        "clerics": {
          "chance": "15% per 50 warband members",
          "level": "4th to 7th",
          "permanent": { "level": 3, "class": "cleric", "count": 2 }
        },
        "magic_users": {
          "chance": "15% per 50 warband members",
          "level": "5th to 8th",
          "permanent": { "level": 4, "class": "magic-user", "count": 1 }
        },
        "psionic_abilities": "Normal chances for psionic leadership"
      },
      "equipment": {
        "mounts_armor_weapons": {
          "medium_warhorse_chainmail_shield_lance_sword": "10%",
          "medium_warhorse_chainmail_composite_bow_sword": "10%",
          "light_warhorse_leather_shield_lance_sword": "20%",
          "light_warhorse_leather_composite_bow_sword": "50%",
          "light_warhorse_leather_crossbow_sword": "10%"
        },
        "leader_armor": "Chainmail or better; magical items if applicable"
      },
      "tactics": {
        "withdrawal": "Withdraw if 25% casualties and resistance continues",
        "feigned_retreat": "Will feign retreat to lure enemies into ambush",
        "capture": "75% likely to capture smaller or weaker groups",
        "parley": "90% chance to parley if opposing force is of similar strength"
      },
      "treasure": {
        "individual": "2d6 ep",
        "lair": {
          "cp": { "amount": "1d3×1000", "chance": "20%" },
          "sp": { "amount": "1d4×1000", "chance": "25%" },
          "ep": { "amount": "1d4×1000", "chance": "25%" },
          "gp": { "amount": "1d4×1000", "chance": "30%" },
          "pp": { "amount": "1d6×100", "chance": "30%" },
          "gems": { "amount": "1d6×10", "chance": "55%" },
          "jewellery": { "chance": "50%" },
          "magic_items": { "amount": 3, "chance": "50%" },
          "special_loot": "If lair result rolled, this represents loot being carried rather than a fixed site"
        }
      }
    },
    {
      "name": "Men, Raider",
      "category": "Men",
      "name_variants": "Raiding Party, Human Raiders",
      "frequency": "Variable (by region)",
      "numberAppearing": "Base group size of matching type + 5d6",
      "size": "Man-sized",
      "move": "Varies (mounted or afoot)",
      "armorClass": "Varies by source group",
      "hitDice": "Varies by group type (F 0–10)",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Ambush, surprise, mounted charge (if applicable)",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "15% (represents spoils from recent raids)",
      "intelligence": "Average",
      "alignment": "Typically Chaotic Neutral or Neutral Evil",
      "levelXP": "Variable by composition",
      "description": "Raider bands are composed of hostile forces from nearby regions. Their composition mirrors nearby patrol or humanoid types, with an additional 5–30 troops. Raiders may be mounted or afoot depending on terrain, origin, and success—e.g., swamp tribesmen raiding with captured horses. Raider morale and discipline vary greatly. If encountered 'in lair', they carry treasure from recent raids.",
      "composition": {
        "base_type": "Derived from adjacent encounter table entry (e.g., Bandits, Knights, Patrol types, Humanoids)",
        "additional_troops": "5–30 extra members (1d6+4 × 5)",
        "mount_status": "50% chance of being mounted if terrain and origin allow",
        "example": "If based on 'Bandits', roll Bandit stats and add 5–30; if based on 'Hool marshmen', use 'Men, Tribesmen' template plus 5–30"
      },
      "equipment": {
        "armor_weapons": "Varies by parent type; raiders often have mixed or scavenged gear",
        "mounts": "Light or medium horses, possibly stolen",
        "loot_transport": "Captured carts, beasts of burden, or magical bags if successful"
      },
      "tactics": {
        "alert_in_enemy_territory": true,
        "relaxed_in_own_territory": true,
        "ambush_or_hit_and_run": true,
        "fallback_behavior": "Will retreat if severely outnumbered unless fanatical"
      },
      "treasure": {
        "individual": "1d10 gp or stolen trade goods",
        "lair": {
          "type": "Loot from raids or Type A treasure",
          "details": {
            "cp": { "amount": "2d10×100", "chance": "20%" },
            "sp": { "amount": "2d8×100", "chance": "30%" },
            "ep": { "amount": "1d6×100", "chance": "25%" },
            "gp": { "amount": "2d6×100", "chance": "50%" },
            "gems": { "amount": "2d6", "chance": "40%" },
            "magic_items": { "amount": "1–3", "chance": "25%" }
          }
        }
      },
      "notes": "This is a template-type encounter. The DM or system should determine the specific base type from nearby regions, then apply raider modifications (size boost, tactics, treasure). Examples include: 'Bandits from Shield Lands', 'Soldiery from Ket', or 'Knights from the Great Kingdom'."
    },
    
    {
      "name": "Men, Pilgrim",
      "category": "Men",
      "frequency": "Uncommon",
      "numberAppearing": "10d10",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": "Determined by armor worn",
      "hitDice": "1d6 hp",
      "attacks": "See below",
      "damage": "By weapon",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Mean (very to high)",
      "alignment": "See below",
      "levelXP": "Variable",
      "description": "Pilgrims are religious followers traveling to holy sites. Most (75%) travel without mounts, but if mounted, all members will be mounted.",
      "leaders": {
        "clerics": {
          "level_2": {"level": 2, "class": "cleric", "count": "1d6"},
          "level_4": {"level": 4, "class": "cleric", "count": "1d4"},
          "level_6": {"level": 6, "class": "cleric", "count": "1d2"},
          "level_8": {"level": 8, "class": "cleric", "count": 1},
          "assistants": [
            {"level": 3, "class": "cleric", "count": 1},
            {"level": 5, "class": "cleric", "count": 1}
          ]
        },
        "fighters": {
          "chance": "10% per 10 pilgrims",
          "count": "1d10",
          "level": "1d8"
        }
      },
      "treasure": {
        "pilgrims": "3d12 cp each",
        "fighters": "2d6 ep each",
        "clerics": "3d12 cp, 3d6 sp, and 2d4 gp each",
        "magic_users": "2d6 ep, 1d6 pp, and 1d4 gems (50%) each",
        "thieves": "3d12 cp, 1d6 pp, and 1d4 gems (50%) each",
        "holy_item": {
          "chance": "5%",
          "description": "If present, will be hidden and carefully guarded"
        }
      }
    },
    {
      "name": "Men, Rhennee",
      "category": "Men",
      "name_variants": "Rhennee, Gypsy Barge Folk, Rhenn-Folk",
      "frequency": "Uncommon (Rare inland)",
      "numberAppearing": "7–12 barges (each with 17–31 adults + children)",
      "size": "Man-sized",
      "move": "120 ft (mounted or ashore), 90 ft (aboard barge)",
      "armorClass": "Varies by location and rank (see Equipment)",
      "hitDice": "Varies by role; average HP by class and level",
      "attacks": 1,
      "damage": "By weapon; harpoon special",
      "specialAttacks": "Harpoon (2d8/2d12, dragging), coordinated ranged attacks",
      "specialDefenses": "All Rhennee trained in crossbows and daggers",
      "magicResistance": "Standard",
      "lairProbability": "10% (15% if at secret camp)",
      "intelligence": "High (scheming)",
      "alignment": "Neutral",
      "levelXP": "Variable by level",
      "description": "The Rhennee are semi-nomadic barge folk who ply the rivers and lakes of the central Flanaess. Known for their secretive and self-serving culture, they rarely travel inland except in multi-barge flotillas. All Rhennee are trained in dagger and crossbow from youth, and many are skilled thieves or illusionists. Although friendly-seeming, they are deceitful to outsiders. Children, outsiders adopted into the folk, or kidnapped youth may be raised as full Rhennee.",
      "leaders": {
        "chief": { "level": "4-6 / 5-7", "class": "fighter/thief", "count": 1 },
        "guards": { "level": "3-5 / 2-4", "class": "fighter/thief", "count": "2-4" },
        "folk": { "level": "1-2 / 1-4", "class": "fighter/thief", "count": "13-24" },
        "wise_woman": { "level": "4-7 / 1-4", "class": "illusionist/thief", "count": 1 },
        "advisors": { "level": "1-3 / 1-2", "class": "illusionist/thief", "count": "1-2" },
        "children": { "level": "0 or thief 1 / fighter 0", "count": "7-12", "note": "Children above age 9 fight as 1st-level thieves and 0-level fighters" },
        "noble": {
          "chance": "If max barge group (12), 50% chance",
          "level": "8-9 / 10-13",
          "class": "fighter/thief",
          "magic_items": ["magic armor", "misc weapon", "misc magic", "ring"],
          "note": "One barge will have maximum stats and noble leadership"
        },
        "bard": {
          "chance": "50% if >1 mile inland; automatic if noble is present",
          "level": "3rd–8th (no noble) or 7th–12th (with noble)",
          "class": "bard"
        }
      },
      "equipment": {
        "training": "All Rhennee know dagger, crossbow, sling, harpoon, and one melee weapon by adulthood.",
        "aboard_barge": {
          "chief": "Leather & shield, harpoon, battle axe, long sword, sling, daggers",
          "guards": "Leather & shield, harpoon, battle axe, long sword, sling, dagger",
          "folk": [
            "Leather + dagger + 30%: glaive-guisarme, short sword",
            "30%: trident, sling",
            "40%: javelins, battle axe"
          ],
          "children": "Club, dagger",
          "weapons": "Each barge carries 2 ballistae (fore & aft), 12 heavy crossbows, harpoons, spears, and javelins"
        },
        "ashore": {
          "chief": "Chain & shield, battle axe, long sword, sling, dagger, 6 darts",
          "guards": "Scale & shield, spear, battle axe, long sword, sling, dagger, darts",
          "folk": [
            "Leather & dagger + 30%: light crossbow, short sword",
            "30%: trident, sling",
            "40%: spear, javelins, battle axe"
          ],
          "children": "Club, dagger"
        },
        "harpoon_rules": {
          "range": "30 yards (spear)",
          "damage": "2d8 (S-M), 2d12 (L)",
          "effects": "On hit, target must save vs poison or take 1 extra damage/round and be subject to dragging"
        },
        "magic_item_chance": {
          "fighter": "5% per fighter level for armor/shield/misc weapon",
          "highest_level": "5% per highest level for sword, potion, scroll, ring, misc magic",
          "illusionist": "5% per level for rods, etc."
        }
      },
      "treasure": {
        "individual": "1d3 of each coin type per level",
        "barge": {
          "type": ["O", "P", "Q", "Q (jewelry bonus)"],
          "jewelry": "2-5 pieces (if Q)",
          "note": "Each barge stores treasure in concealed compartments; nobles have highest shares"
        }
      },
      "vessel": {
        "type": "60-ft junk-like barge",
        "layout": {
          "forecastle": "Wise women and families",
          "sterncastle": "Chief, guards, and their families",
          "lower_deck": "Folk, animals, and cargo",
          "defense": "Ballistae, crossbows at 4 ft. intervals, sweeps, longboat, and dinghy"
        },
        "construction": "10-ft forecastle, 12-ft sterncastle, low draft, chained or cabled to other barges"
      },
      "special_notes": {
        "habitat": "Always near major lakes or rivers; 10% chance of being at inland camp",
        "behavior": "Seem friendly, actually scheming and cautious; dishonest to outsiders, loyal to folk",
        "culture": "Strict internal code, raise stolen or adopted children as their own",
        "appearance": "Short, wiry, dark curly hair, claim extraplanar origin from Rhop",
        "stat_generation": {
          "female": {
            "strength": "3 of 4d6",
            "intelligence": "3 of 4d6",
            "wisdom": "3 of 4d6",
            "dexterity": "2 of 3d6+6",
            "constitution": "3 of 5d6",
            "charisma": "3 of 6d6"
          },
          "male": {
            "strength": "3 of 5d6",
            "intelligence": "3 of 4d6",
            "wisdom": "3 of 4d6",
            "dexterity": "2 of 3d6+6",
            "constitution": "3 of 5d6",
            "charisma": "3 of 5d6"
          }
        }
      }
    },

    {
      "name": "Men, Tribesmen",
      "category": "Men",
      "name_variants": "Jungle Tribesmen, Hillmen, Marshmen, Mountaineers",
      "frequency": "Uncommon (Varies by region)",
      "numberAppearing": "10d12 plus leaders and spellcasters",
      "size": "Man-sized",
      "move": "120 ft (afoot)",
      "armorClass": "7 (primitive) to 5 (civilized types with better gear)",
      "hitDice": "1d6 hp (standard tribesmen), variable for leaders",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Ambush (if terrain allows), spell use by leaders",
      "specialDefenses": "Terrain camouflage",
      "magicResistance": "Standard",
      "lairProbability": "60% (village or camp)",
      "intelligence": "Low to Average",
      "alignment": "Neutral or Chaotic Neutral",
      "levelXP": "Variable by class and role",
      "description": "Tribesmen are semi-primitive or primitive peoples dwelling in wilderness areas of the Flanaess. Jungle or island tribes are more savage and use shamans and witch doctors (druidic clerics), while hillmen, marshmen, and mountaineers may be refugees with access to more advanced weapons and trained clerics or illusionists. Tribesmen are highly territorial and often keep slaves or captives. Their armament varies by region and culture.",
      "leaders": {
        "chieftain": { "level": "1d4+2", "class": "fighter", "count": 1 },
        "lieutenants": { "level": "1d3+1", "class": "fighter", "count": "1 per 20 tribesmen" },
        "clerics": {
          "primitive": [
            { "level": 4, "class": "druid", "count": "1 per 10 tribesmen" },
            { "level": 6, "class": "druid", "count": "1 per 30 tribesmen" },
            { "level": 8, "class": "druid", "title": "head cleric (witchdoctor)", "count": 1 }
          ],
          "civilized": {
            "chance": "Common",
            "level": "1d4+2",
            "class": "cleric or druid",
            "count": "1d3"
          }
        },
        "illusionists": {
          "chance": "10% per 10 civilized tribesmen",
          "level": "1d3+3",
          "class": "illusionist",
          "count": "1"
        }
      },
      "equipment": {
        "primitive": [
          "Shield, spear, and club",
          "Shield and 2 spears",
          "Shortbow and club (treat clubs as maces)"
        ],
        "civilized": {
          "hillmen": "Sling and spear",
          "marshmen": "Shortbow and long spear",
          "mountaineers": "Crossbow and pole arm",
          "note": "Armor and arms similar to bandits but modified by terrain and availability"
        }
      },
      "village": {
        "structure": "Grass, bamboo, or mud huts",
        "defenses": {
          "palisade": { "chance": "50%", "type": "log" }
        },
        "inhabitants": {
          "females": "Equal to number of males",
          "children": "Equal to number of males",
          "slaves": { "chance": "75%", "count": "20–50" },
          "captives": { "chance": "50%", "count": "2–12", "note": "Held as food" }
        }
      },
      "magic_item_chance": {
        "fighters": "5% per level (armor, sword, misc weapon, potion)",
        "clerics": "5% per level (armor, misc weapon, potion, scroll, misc magic)",
        "illusionists": "5% per level (potion, scroll, ring, misc magic)"
      },
      "treasure": {
        "individual": "1d6 cp or ep per tribesman",
        "lair": {
          "reference": "Same as Cavemen (Types O, P, and Q)",
          "note": "May include jewelry and basic magic if spellcasters are present"
        }
      }
    },
      {
        "name": "Mephit, Fire",
        "frequency": "Very rare",
        "number_appearing": "1",
        "size": "Man-sized (5 ft tall)",
        "movement": "120 ft; 240 ft flying (AA:IV)",
        "armor_class": 5,
        "hit_dice": "3+1",
        "attacks": 2,
        "damage": "1d3/1d3 (+1 heat each)",
        "special_attacks": "Breath weapon (jet or blanket of flame)",
        "special_defenses": "See below",
        "magic_resistance": "Standard",
        "lair_probability": "Nil",
        "intelligence": "Average",
        "alignment": "Any evil",
        "level_xp": "3/155 + 4/hp",
        "treasure": "3d12pp per individual",
    },
    {
        "name": "Mephit, Lava",
        "frequency": "Very rare",
        "number_appearing": "1",
        "size": "Man-sized (5 ft tall)",
        "movement": "120 ft; 240 ft flying (AA:IV)",
        "armor_class": 6,
        "hit_dice": "3",
        "attacks": 2,
        "damage": "1 + 1d8 heat each",
        "special_attacks": "Breath weapon (molten blob); dissolves materials",
        "special_defenses": "Regenerates in lava",
        "magic_resistance": "Standard",
        "lair_probability": "Nil",
        "intelligence": "Average",
        "alignment": "Any evil",
        "level_xp": "3/110 + 3/hp",
        "treasure": "3d12pp per individual"
    },
    {
        "name": "Mephit, Smoke",
        "frequency": "Very rare",
        "number_appearing": "1",
        "size": "Man-sized (5 ft tall)",
        "movement": "120 ft; 240 ft flying (AA:IV)",
        "armor_class": 4,
        "hit_dice": "3",
        "attacks": 2,
        "damage": "1d2/1d2",
        "special_attacks": "Breath weapon (smoke orb)",
        "special_defenses": "Flash-fire on death",
        "magic_resistance": "Standard",
        "lair_probability": "Nil",
        "intelligence": "Average",
        "alignment": "Any evil",
        "level_xp": "3/100 + 3/hp",
        "treasure": "3d12pp per individual"
    },
    {
        "name": "Mephit, Steam",
        "frequency": "Very rare",
        "number_appearing": "1",
        "size": "Man-sized (5 ft tall)",
        "movement": "120 ft; 240 ft flying (AA:IV)",
        "armor_class": 7,
        "hit_dice": "3+3",
        "attacks": 2,
        "damage": "1d4/1d4",
        "special_attacks": "Breath weapon (scalding water)",
        "special_defenses": "See below",
        "magic_resistance": "Standard",
        "lair_probability": "Nil",
        "intelligence": "Average",
        "alignment": "Any evil",
        "level_xp": "3/170 + 4/hp",
        "treasure": "3d12pp per individual"
    },
    {
      "name": "Mule",
      "category": "Animal",
      "frequency": "Common",
      "numberAppearing": "1",
      "size": "Large",
      "move": "120 ft",
      "armorClass": 7,
      "hitDice": 3,
      "attacks": "1 or 2",
      "damage": "1d2 (bite) or 1d6/1d6 (kick)",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "levelXP": "2/20+2/hp",
      "treasure": "None",
      "description": "Mules are sterile crosses between horses and donkeys, sufficiently sure-footed to be taken into dungeons. Their stubbornness is legendary. These statistics can also be used for asses and donkeys, though these should have hit points rolled on d6s rather than d8s to reflect their smaller size."
    },
    {
      "name": "Merman",
      "frequency": "Uncommon",
      "number_appearing": "20d10",
      "size": "Man-sized",
      "movement": "10 ft; 180 ft swimming",
      "armor_class": 7,
      "hit_dice": "1+1",
      "attacks": "1",
      "damage": "By weapon",
      "special_attacks": "None",
      "special_defenses": "None",
      "magic_resistance": "Standard",
      "lair_probability": "25%",
      "intelligence": "Average",
      "alignment": "Neutral",
      "level_xp": "2/30 + 1/hp",
      "treasure": "1d12×1,000 cp (20%), 1d6×1,000 sp (30%), 1d4×1,000 ep (10%), 2d4×1,000 gp (40%), 1d6×1,000 pp (50%), 5d8 gems (55%), 1d12 jewellery (45%), 2 magic items (10%)"
  },
  {
      "name": "Minotaur",
      "frequency": "Rare",
      "number_appearing": "1d8",
      "size": "Large",
      "movement": "120 ft",
      "armor_class": 6,
      "hit_dice": "6+3",
      "attacks": "2 or 1",
      "damage": "2d4/1d4, or by weapon",
      "special_attacks": "None",
      "special_defenses": "Surprised only on a 1",
      "magic_resistance": "Standard",
      "lair_probability": "20%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "level_xp": "5/225 + 6/hp",
      "treasure": "1d12×1,000 cp (20%), 1d6×1,000 sp (30%), 1d4×1,000 ep (10%), 1d6 gems (25%), 1d3 jewellery (20%), any 2 magic items (10%)"
  },
  {
      "name": "Mongrelman",
      "frequency": "Rare",
      "number_appearing": "10d10",
      "size": "Man-sized",
      "movement": "90 ft",
      "armor_class": 5,
      "hit_dice": "1 to 4 hit dice",
      "attacks": "1",
      "damage": "1d4 (1HD), 1d6 (2HD), 1d8 (3HD), 1d10 (4HD)",
      "special_attacks": "None",
      "special_defenses": "Camouflage",
      "magic_resistance": "Standard",
      "lair_probability": "40%",
      "intelligence": "Low to average",
      "alignment": "Lawful neutral",
      "level_xp": "(1 HD) 1/20+1/hp, (2 HD) 2/30+2/hp, (3 HD) 3/50+3/hp, (4 HD) 3/100+4/hp",
      "treasure": "2d6×1,000 cp (20%), 1d6×1,000 sp (35%), 1d4×1,000 ep (10%), 1d4 gems (25%), 1d3 jewellery (20%), any two magic items plus two potions (10%)"
  },
  {
      "name": "Mould (Brown or Yellow)",
      "frequency": "Very rare",
      "number_appearing": "1 patch",
      "size": "Small to large",
      "movement": "Nil",
      "armor_class": 10,
      "hit_dice": "N/A",
      "attacks": "Nil",
      "damage": "Nil",
      "special_attacks": "Freezing",
      "special_defenses": "See below",
      "magic_resistance": "See below",
      "lair_probability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "level_xp": "None",
      "treasure": "None"
  },
    {
      "name": "Mummy",
      "category": "Undead",
      "turnResistance": 8,
      "frequency": "Rare",
      "numberAppearing": "2d4",
      "size": "Man-sized",
      "move": "60 ft",
      "armorClass": 3,
      "hitDice": "6+3",
      "attacks": "1",
      "damage": "1d12",
      "specialAttacks": "Fear",
      "specialDefenses": "See below",
      "magicResistance": "See below",
      "lairProbability": "80%",
      "intelligence": "Low",
      "alignment": "Lawful evil",
      "levelXP": "6/985+8/hp",
      "treasure": {
        "cp": {"amount": "1d8×1,000", "chance": "10%"},
        "sp": {"amount": "1d12×1,000", "chance": "15%"},
        "ep": {"amount": "1d8×1,000", "chance": "15%"},
        "gp": {"amount": "1d6×1,000", "chance": "50%"},
        "gems": {"amount": "1d10", "chance": "30%"},
        "jewellery": {"amount": "1d6", "chance": "25%"},
        "magic_items": {"amount": "any 2 + 1 potion", "chance": "15%"}
      },
      "description": "Mummies exist on both the normal and negative material planes. Their touch causes a rotting disease that kills within 1d6 months and prevents magical healing. All creatures within 60 ft must save vs magic or be paralyzed with fear for 1d4 rounds. Mummies can only be harmed by fire, holy water, or magic weapons (which do half damage). Immunity to sleep, charm, cold, poison, and paralysis."
    },
    {
      "name": "Norker",
      "category": "Humanoid",
      "frequency": "Rare",
      "numberAppearing": "3d10",
      "size": "Small (4' tall)",
      "move": "90 ft",
      "armorClass": 3,
      "hitDice": "1+2",
      "attacks": 2,
      "damage": "1d3 bite / 1d6 club",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Average",
      "alignment": "Chaotic evil",
      "levelXP": "1/20 + 2/hp",
      "description": "Relatives of hobgoblins, norkers possess 3-inch fangs and club their enemies in melee. Their hardened skin functions as natural armor (AC 3). They lack claw attacks and rely solely on weapon and bite. Norkers are tribal and often found in similar lairs as hobgoblins, though usually more savage and insular.",
      "leaders": {
        "per_20": { "level": 2, "class": "fighter", "count": 1 },
        "commander": {
          "under_100": { "level": 3, "class": "fighter", "count": 1, "hp": 16, "damage": "1d8+2", "armorClass": 3 },
          "chief": { "level": 4, "class": "fighter", "count": 1, "hp": 22, "damage": "2d6", "armorClass": 2 },
          "guards": { "level": 3, "class": "fighter", "count": "5d4", "hp": 16, "damage": "1d8+2", "armorClass": 3 }
        },
        "psionic_abilities": "None"
      },
      "lair": {
        "types": {
          "underground": "80%",
          "fortified_camp": "20%"
        },
        "features": {
          "carnivorous_apes": {
            "chance": "60%",
            "number": "2d6",
            "notes": "Used as guards, similar to hobgoblins"
          }
        },
        "occupants": {
          "females": "150% of males",
          "young": "300% of males"
        }
      },
      "equipment": {
        "weapons": {
          "club_and_bite": "100%"
        },
        "armor": {
          "natural_exoskeleton": "AC 3 (no worn armor)"
        }
      },
      "treasure": {
        "individual": "None",
        "lair": {
          "type": "E"
        }
      }
    },
    {
      "name": "Ogre",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Common",
      "numberAppearing": "2d10",
      "size": "Large (9 ft +)",
      "move": "90 ft",
      "armorClass": 5,
      "hitDice": "4+1",
      "attacks": 1,
      "damage": "1d10 or weapon",
      "specialAttacks": "Weapon damage bonus (+2)",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "3/95 + 5/hp",
      "description": "Ogres are malicious beings who live in all environments, whether above or below ground. Aside from the elusive unhealthy-purple coloured ogre, most ogres have skin that is dull yellow or dark brown. They have black-green or blue-black hair, and their skin is covered in dark wart-like bumps. They have purple eyes and white pupils, and their hard, thick nails and teeth are orange and sometimes black.",
      "specialAbilities": {
        "weaponDamage": "+2 to damage when using weapons",
        "languages": "Speak orc, troll, hill giant, and their own language"
      },
      "leaders": {
        "per_11": {"hitPoints": 33, "armorClass": 3, "damage": "2d6", "attacksAs": "7 HD monster", "damageBonus": "+3", "count": 1},
        "per_16": {"type": "chief", "attacksAs": "7 HD monster", "damage": "1d10+4", "armorClass": 4, "damageBonus": "+4", "count": 1}
      },
      "lair": {
        "females": {"number": "2d6", "damage": "2d4", "hitPoints": "4d6+1"},
        "young": {"number": "2d4", "capabilities": "As goblins"},
        "slaves": {"chance": "30%", "slavery_rate": "25%", "food_rate": "75%"}
      },
      "treasure": {
        "individual": {"gp": {"amount": "20d4", "chance": "100%"}},
        "lair": {
          "gp": {"amount": "1d3×1,000", "chance": "30%"},
          "gems": {"amount": "5d8", "chance": "40%"},
          "magic_items": {"amount": 2, "chance": "10%"},
          "potions": {"amount": "2d4", "chance": "40%"}
        }
      }
    },
    {
      "name": "Ogre Mage",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": "1d6",
      "size": "Large (9 ft +)",
      "move": "90 ft; 150 ft flying (AA:III)",
      "armorClass": 4,
      "hitDice": "5+2",
      "attacks": 1,
      "damage": "1d12 or by weapon",
      "specialAttacks": "Spell use",
      "specialDefenses": "Regeneration",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Average to high",
      "alignment": "Chaotic evil",
      "levelXP": "5/750+6/hp",
      "description": "Ogre Magi are fearsome evil creatures, well versed in magic and of unnatural size and strength. Most have reddish coloured eyes, two or more yellow to white horns, thick tusks, sharp yellow to black nails and long dark hair. They speak common and ogrish, amongst other languages.",
      "specialAbilities": {
        "regeneration": "1 hp per combat round",
        "spells": {
          "atWill": ["Fly (12 turn duration)", "Invisibility", "Darkness 10 ft radius", "Polymorph self (limited to humanoid forms 4-12 ft)"],
          "daily": ["Charm person", "Sleep", "Gaseous form", "Cone of cold (as 12th level caster)"]
        }
      },
      "leaders": {
        "hitPoints": "30-42",
        "combatability": "Fight and save as 9 HD monster"
      },
      "treasure": {
        "gp": {"amount": "2d10×1,000", "chance": "50%"},
        "pp": {"amount": "1d10×1,000", "chance": "50%"},
        "gems": {"amount": "3d6", "chance": "25%"},
        "jewellery": {"amount": "1d6", "chance": "25%"},
        "potions": {"amount": "1d6", "chance": "100%"},
        "magic_items": {"amount": "1d6", "chance": "25%"}
      }
    },
    {
      "name": "Ogrillon",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": "1-4 (5-30 in lair)",
      "size": "M",
      "move": "12\"",
      "armorClass": 6,
      "hitDice": 2,
      "attacks": 2,
      "damage": "2-7/2-7",
      "specialAttacks": "Nil",
      "specialDefenses": "Nil",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "11/28 + 2 per hit point",
      "description": "The ogrillon is a smaller species of the ogre, being an orc-ogre crossbreed and displays the same general behaviour as its larger cousin with one exception - it never wields a weapon and fights with its horny fists.",
      "specialAbilities": {
        "strength": "18(01)",
        "appearance": {
          "orc-like": {"chance": "90%", "note": "Cannot be distinguished from orcs"},
          "ogre-like": {"chance": "10%", "note": "Smaller than true ogres, distinguishable from orcs"}
        },
        "languages": ["Ogrish", "Alignment language"]
      },
      "associations": "Often associate with orcs for short periods",
      "combat": "Fights with horny fists, never wields weapons",
      "treasure": {
        "individual": "M",
        "lair": "C, S"
      }
    },
    {
      "name": "Orc",
      "category": "Humanoid",
      "frequency": "Common",
      "numberAppearing": "30d10",
      "size": "Man-sized (6 ft tall)",
      "move": "90 ft",
      "armorClass": 6,
      "hitDice": 1,
      "attacks": 1,
      "damage": "1d8 or by weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "35%",
      "intelligence": "Average (low)",
      "alignment": "Lawful evil",
      "levelXP": "1/10+1 per hp",
      "description": "Tribal and cruel. Hate elves. Use lairs and crude fortifications. Skilled miners. Sunlight penalty.",
      "leaders": {
        "war_party": "Captain + 3d6 guards (2 HD, AC 4, 11 hp, 1d6+1 dmg)",
        "lair": {
          "chief": "3 HD, AC 4, 15 hp, 2d4 dmg",
          "guards": "5d6"
        }
      },
      "treasure": {
        "individual": "2d6 ep",
        "lair": {
          "cp": {"amount": "1d12×1,000", "chance": "50%"},
          "sp": {"amount": "1d6×1,000", "chance": "40%"},
          "gems": {"amount": "1d6", "chance": "25%"},
          "jewellery": {"amount": "1d3", "chance": "20%"},
          "potions": {"amount": "2d4", "chance": "40%"}
        }
      }
    },
    {
      "name": "Poltergeist",
      "category": "Undead",
      "turnResistance": "1 or 3",
      "frequency": "Rare",
      "numberAppearing": "1d8",
      "size": "Man-sized",
      "move": "60 ft",
      "armorClass": 10,
      "hitDice": "1d4 hit points",
      "attacks": "Nil",
      "damage": "Nil",
      "specialAttacks": "Fear, telekinesis",
      "specialDefenses": "Invisible, silver/magic weapons to hit",
      "magicResistance": "Standard",
      "lairProbability": "97%",
      "intelligence": "Low",
      "alignment": "Lawful evil",
      "levelXP": "2/35 + 1/hp",
      "treasure": "None",
      "description": "Poltergeists are invisible spirits of humans who died tragically. When wandering, they're treated as type 1 undead for turning; in their haunting area, they're treated as type 3. They can only be struck by magic or silver weapons at -4 penalty due to invisibility. They attack by telekinetically hurling objects (as 5 HD monster), causing victims to save vs spells or flee for 2d12 rounds with 50% chance of dropping held items."
    },
    {
      "name": "Portuguese Man O' War, Giant",
      "category": "Aquatic",
      "frequency": "Uncommon",
      "numberAppearing": "1d10",
      "size": "Variable",
      "move": "10 ft swimming",
      "armorClass": 9,
      "hitDice": "1 to 4",
      "attacks": 1,
      "damage": "1d10",
      "specialAttacks": "Paralysation",
      "specialDefenses": "Transparent",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "1 HD 2/45+1/hp; 2 HD 3/80+2/hp; 3 HD 4/110+3/hp; 4 HD 4/150+4/hp",
      "treasure": "None",
      "description": "These creatures float in warm salt water with poisonous tentacles trailing below. Their venom causes damage and paralysis (save negates paralysis), and paralyzed victims are consumed in 3d4 turns. The flotation sac is translucent and 90% likely to be unseen without detect invisibility. Size varies with HD: body diameter is 2½ ft per HD, with 10 tentacles per HD, each 10 ft long per HD. Damaging tentacles doesn't harm the creature but requires 1d3 days for regrowth."
    },
    {
      "name": "Qullan",
      "category": "Humanoids",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": "1d6",
      "size": "L (8'+ tall)",
      "move": "12\"",
      "armorClass": 10,
      "hitDice": 2,
      "attacks": 1,
      "damage": "2d4+3",
      "specialAttacks": "Confusion aura",
      "specialDefenses": "Confusion feedback",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "2/73 + 2 per hit point",
      "description": "Qullans are strong, large, seemingly insane humanoids which wear warpaint in a wild variety of clashing colours and sport their battle-scars proudly, often emphasising them with cosmetic paint. They never wear armour, either wandering naked or clad in tiger-skins.",
      "specialAbilities": {
        "confusion": {
          "aura": "Continually radiates confusion in a 5' radius",
          "effect": "Victims must save each round or be confused (equal probability of standing still, attacking nearest qullan without regard for safety, or attacking nearest friend)",
          "recovery": "New save allowed each round, effect disappears if victim moves outside radius"
        },
        "confusionFeedback": {
          "trigger": "Any attempt to force a qullan to do something it would not normally do",
          "result": "Instant death of the qullan",
          "spellEffect": "Same reaction when fails to save against any charm or control spell"
        }
      },
      "weapons": {
        "broadsword": {
          "special": "Honed to incredible sharpness using technique not emulated by man",
          "bonus": "+3 hit probability, +3 damage (5-11 total)",
          "usage": "Wielded two-handed (no additional advantage)",
          "blunting": "20% cumulative chance per hit of becoming normal broadsword",
          "transferability": "Non-magical, can be used by humans but will blunt normally"
        }
      },
      "behavior": "Extremely hostile, attacks all human or near-human races regardless of alignment or party size",
      "treasure": "Most types in lair but in small quantity (10% of A at most)"
    },
    {
      "name": "Rat",
      "category": "Animal",
      "variants": [
        {
          "type": "Huge",
          "frequency": "Common",
          "numberAppearing": "4d20",
          "size": "Small",
          "move": "120 ft",
          "armorClass": 8,
          "hitDice": "1 hp",
          "attacks": 1,
          "damage": 1,
          "specialAttacks": "Disease",
          "specialDefenses": "None",
          "levelXP": "1/5 + 1/hp"
        },
        {
          "type": "Giant",
          "frequency": "Common",
          "numberAppearing": "5d10",
          "size": "Small",
          "move": "120 ft",
          "armorClass": 7,
          "hitDice": "1d4 hp",
          "attacks": 1,
          "damage": "1d3",
          "specialAttacks": "Disease",
          "specialDefenses": "None",
          "levelXP": "1/7 + 1/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Huge and giant rats are vicious omnivores commonly found in ruins and upper dungeon levels. Each successful bite has a 5% chance of causing disease (as the cleric spell) unless the victim passes a saving throw vs poison."
    },
    {
      "name": "Remorhaz",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1",
      "size": "Large (21+ ft long)",
      "move": "Not specified",
      "armorClass": "Not specified",
      "hitDice": "7-14",
      "attacks": "Not specified",
      "damage": "6d6",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "75%",
      "lairProbability": "20%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": {
        "7HD": "6/625+8/hp",
        "8HD": "6/950+10/hp",
        "9HD": "7/1,400+12/hp",
        "10HD": "7/1,700+13/hp",
        "11HD": "7/2,100+14/hp",
        "12HD": "8/3,000+16/hp",
        "13HD": "8/3,500+17/hp",
        "14HD": "8/4,200+18/hp"
      },
      "description": "These great polar worms are found only in arctic areas. The remorhaz attacks on sight, and if encountered in its lair there is a 1 in 4 chance it has a mate and 1d3 eggs; the eggs can be sold on some markets for 5,000 gp each. The HD of the remorhaz determines its length: starting at 21 ft, each hit die above 7 adds 3 ft, so that a 14 HD specimen will be roughly 42 ft long. The remorhaz is ice-blue in colour, with white protrusions along its back and white insect-like eyes. When attacking, the remorhaz rises on the back section of its body and begins beating its bat-like wings. Its attack is blinding, and the larger-sized remorhaz can swallow its prey whole. All remorhaz generate an intense internal heat that instantly destroys any swallowed opponent. An opponent is swallowed and destroyed if the remorhaz' attack score is a 20. When aroused for combat, the internal heat of the remorhaz seeps up into the protrusions on the back of the creature. Non-magical weapons that strike the back will melt, and any physical touch deals 10d10 hp damage.",
      "treasure": "None"
    },
    {
      "name": "Rhinoceros",
      "category": "Animal",
      "variants": [
        {
          "type": "Common",
          "frequency": "Common",
          "numberAppearing": "1d6",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 6,
          "hitDice": "8 or 9",
          "attacks": 1,
          "damage": "2d4 or 2d6",
          "specialAttacks": "Charge",
          "specialDefenses": "None",
          "levelXP": "7/550 + 10/hp"
        },
        {
          "type": "Woolly",
          "frequency": "Common",
          "numberAppearing": "1d4",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 5,
          "hitDice": 10,
          "attacks": 1,
          "damage": "2d6",
          "specialAttacks": "Charge",
          "specialDefenses": "None",
          "levelXP": "7/900 + 12/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Rhinoceroses are aggressive herbivores that charge any detected creature. Despite poor eyesight, they have excellent smell and hearing. Single-horned varieties (8 HD, 2d4 damage) and double-horned varieties (9 HD, 2d6 damage) charge for double damage and trample prone opponents for 2d4 damage per foreleg. Woolly rhinoceroses are larger Arctic variants found in 'lost world' settings."
    },
    {
      "name": "Roc",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1d2",
      "size": "Large (60 ft + wingspan)",
      "move": "30 ft; 300 ft flying (AA:II)",
      "armorClass": 4,
      "hitDice": 18,
      "attacks": "1 or 2",
      "damage": "4d6 or 3d6/3d6",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "8/3,010 + 25/hp",
      "description": "Rocs are powerful creatures living at high elevations in warm environments, and look somewhat like huge eagles. They will sometimes be found with giants, who keep them as pets. The immense size of a roc is accompanied by its equally immense appetites, as rocs will frequently consume large mammals including horses and cattle. A roc hunts much like an eagle, swooping down on its meal and capturing it in its immense claws, carrying it back to its nest. A roc will silence struggling prey by impaling it with its powerful beak for 4d6 hit points of damage. Any treasure found in the gigantic nests of rocs is there purely on accident, since rocs have no concept of wealth. The belongings of past victims will be found woven into the intricate nest.",
      "treasure": {
        "cp": { "amount": "1d12×1,000", "chance": "20%" },
        "sp": { "amount": "1d6×1,000", "chance": "30%" },
        "ep": { "amount": "1d4×1,000", "chance": "10%" },
        "gems": { "amount": "1d6", "chance": "25%" },
        "jewellery": { "amount": "1d33", "chance": "20%" },
        "magic_items": { "amount": 2, "chance": "10%" }
      }
    },
    {
      "name": "Roper",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "Large",
      "move": "30 ft",
      "armorClass": 0,
      "hitDice": "11",
      "attacks": 1,
      "damage": "2d10+2",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "80%",
      "lairProbability": "93%",
      "intelligence": "Exceptional",
      "alignment": "Chaotic evil",
      "levelXP": "9/2,700+16/hp",
      "description": "Ropers are cavern-dwelling monsters and are frequently mistaken for stalagmites. These monsters are grey-green in colour, standing around 8 ft-12 ft tall, with a hide that mimics the smooth limestone formations of a natural cavern. Ropers are about 3 ft-4 ft at the base and approximately 1 ft wide at the apex. These monsters are almost always encountered in their stalagmite shape but can alter their appearance to some degree. A roper can assume the shape of a pillar, a boulder, or flatten themselves and lie flat to appear as no more than an irregularity on the walking surface of the cavern floor. It can also cling to a cavern ceiling (or wall) and appear as a stalactite. Through means of tiny adhesive cilia on its underside, the roper can move slowly and these cilia are what allow it to cling upside down to the ceiling. Ropers are predators and attack by means of the 6 rope-like appendages that give these monsters their name. The ropes secrete a powerful and poisonous adhesive and can lash out some distance from the creature; up to 50 ft. A successful to hit roll will weaken the target, decreasing its strength ability score by 50% (rounded down) within 1d3 rounds and lasting 2d4 turns; with multiple hits having a cumulative strength drain effect. An ensnared victim can break the strand by performing a Minor Test of Strength but for every round the victim is roped he or she will be dragged 10 ft closer to the roper. Creatures within 10 ft of the roper are subject to its vicious bite attack, this attack automatically hits any victim held by the strands of the roper. A strand can be sliced with an edged weapon but the attack must do a minimum of 6 points of damage in a single attack to the AC 0 tentacle to sever it. The strand of a roper can easily pull 800 lbs and can lift about a third of that amount. A roper is a tough monster. The stony hide grants it AC 0 in combat and it has an innate resistance to magic. Besides its base 80% magic resistance, the roper is completely immune to electricity based damage including lightning, ropers are also resistant to cold based magic and take only half damage from any such attacks. These creatures have few weaknesses but are susceptible to fire, saving vs fire based attacks at -4. Any fire based magic attacks, however, must still overcome the monster's magic resistance.",
      "variants": {
        "Quartz Roper": {
          "frequency": "Rare",
          "numberAppearing": "1",
          "size": "Medium (5 ft)",
          "move": "10 ft",
          "armorClass": 0,
          "hitDice": 6,
          "attacks": 1,
          "damage": "1d10",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "93%",
          "intelligence": "High",
          "alignment": "Chaotic evil",
          "levelXP": "5/525+6/hp",
          "description": "To adventurers familiar with ropers, a quartz roper appears as a 5 ft tall and 2 ft wide (at the base) statue of a roper hewn from some brownish or smoky grey crystalline mineral. The quartz roper is actually a monster with a rocky hide composed of living quartz. Quartz ropers are very sensitive to motion and are able to sense movement up to 225 ft away. In combat, quartz ropers fight in a manner similar to ropers: its tentacles can hit targets up to 50 ft away, the poisonous adhesive of the tentacles inflicts a 50% strength penalty on its targets, and it drags roped victims toward itself to deliver its nasty bite automatically. A quartz roper also differs from its larger cousins in a number of ways. First, it tends to concentrate its first attacks on two victims, striking each with 3 tentacles. The first two successfully roped victims will be injected with a venom which allows no saving throw and causes the victim to freeze in place, looking as if he or she has been turned to stone. One round after this apparent stoning the victim recovers and but is now under the delusion the quartz roper is a close friend and valued ally. These influenced adventurers will fight to protect the monster to the utmost of their abilities for the duration of effect of the venom; 10 turns. If the quartz roper is killed before the venom expires the deluded defenders will cease attacking and wander about aimlessly until the venom expires. The quartz roper can only inject its venom twice per day and afterward its combat tactics conform to those of a roper. A quartz roper's tentacles are strong, but not so strong as the larger variety of roper. A roped character's chances of breaking free are equal to double his or her chance to perform a Minor Test of Strength. Quartz ropers also lack a roper's magic resistance but its mineral-laden hide will resist normal missile fire, though magic missiles and hand held weapons damage it normally. All magic spells do normal damage as well. A quartz roper's gizzard has the same percentage chance of containing platinum pieces and gemstones as the standard variety of roper."
        }
      },
      "treasure": "Ropers do not hoard treasure but their acidic bile cannot dissolve platinum or gemstones. Cutting open the gizzard of a roper has a 40% chance of yielding 3d6 (3-18) platinum pieces and 30% chance of 4d6 (4-24) gems."
    },
    {
      "name": "Roc",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1d2",
      "size": "Large (60 ft + wingspan)",
      "move": "30 ft; 300 ft flying (AA:II)",
      "armorClass": 4,
      "hitDice": 18,
      "attacks": "1 or 2",
      "damage": "4d6 or 3d6/3d6",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "8/3,010 + 25/hp",
      "description": "Rocs are powerful creatures living at high elevations in warm environments, and look somewhat like huge eagles. They will sometimes be found with giants, who keep them as pets. The immense size of a roc is accompanied by its equally immense appetites, as rocs will frequently consume large mammals including horses and cattle. A roc hunts much like an eagle, swooping down on its meal and capturing it in its immense claws, carrying it back to its nest. A roc will silence struggling prey by impaling it with its powerful beak for 4d6 hit points of damage. Any treasure found in the gigantic nests of rocs is there purely on accident, since rocs have no concept of wealth. The belongings of past victims will be found woven into the intricate nest.",
      "treasure": {
        "cp": { "amount": "1d12×1,000", "chance": "20%" },
        "sp": { "amount": "1d6×1,000", "chance": "30%" },
        "ep": { "amount": "1d4×1,000", "chance": "10%" },
        "gems": { "amount": "1d6", "chance": "25%" },
        "jewellery": { "amount": "1d33", "chance": "20%" },
        "magic_items": { "amount": 2, "chance": "10%" }
      }
    },
    {
      "name": "Roper",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "Large",
      "move": "30 ft",
      "armorClass": 0,
      "hitDice": "11",
      "attacks": 1,
      "damage": "2d10+2",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "80%",
      "lairProbability": "93%",
      "intelligence": "Exceptional",
      "alignment": "Chaotic evil",
      "levelXP": "9/2,700+16/hp",
      "description": "Ropers are cavern-dwelling monsters and are frequently mistaken for stalagmites. These monsters are grey-green in colour, standing around 8 ft-12 ft tall, with a hide that mimics the smooth limestone formations of a natural cavern. Ropers are about 3 ft-4 ft at the base and approximately 1 ft wide at the apex. These monsters are almost always encountered in their stalagmite shape but can alter their appearance to some degree. A roper can assume the shape of a pillar, a boulder, or flatten themselves and lie flat to appear as no more than an irregularity on the walking surface of the cavern floor. It can also cling to a cavern ceiling (or wall) and appear as a stalactite. Through means of tiny adhesive cilia on its underside, the roper can move slowly and these cilia are what allow it to cling upside down to the ceiling. Ropers are predators and attack by means of the 6 rope-like appendages that give these monsters their name. The ropes secrete a powerful and poisonous adhesive and can lash out some distance from the creature; up to 50 ft. A successful to hit roll will weaken the target, decreasing its strength ability score by 50% (rounded down) within 1d3 rounds and lasting 2d4 turns; with multiple hits having a cumulative strength drain effect. An ensnared victim can break the strand by performing a Minor Test of Strength but for every round the victim is roped he or she will be dragged 10 ft closer to the roper. Creatures within 10 ft of the roper are subject to its vicious bite attack, this attack automatically hits any victim held by the strands of the roper. A strand can be sliced with an edged weapon but the attack must do a minimum of 6 points of damage in a single attack to the AC 0 tentacle to sever it. The strand of a roper can easily pull 800 lbs and can lift about a third of that amount. A roper is a tough monster. The stony hide grants it AC 0 in combat and it has an innate resistance to magic. Besides its base 80% magic resistance, the roper is completely immune to electricity based damage including lightning, ropers are also resistant to cold based magic and take only half damage from any such attacks. These creatures have few weaknesses but are susceptible to fire, saving vs fire based attacks at -4. Any fire based magic attacks, however, must still overcome the monster's magic resistance.",
      "variants": [
        {
          "name": "Quartz Roper",
          "frequency": "Rare",
          "numberAppearing": "1",
          "size": "Medium (5 ft)",
          "move": "10 ft",
          "armorClass": 0,
          "hitDice": 6,
          "attacks": 1,
          "damage": "1d10",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "93%",
          "intelligence": "High",
          "alignment": "Chaotic evil",
          "levelXP": "5/525+6/hp",
          "description": "To adventurers familiar with ropers, a quartz roper appears as a 5 ft tall and 2 ft wide (at the base) statue of a roper hewn from some brownish or smoky grey crystalline mineral. The quartz roper is actually a monster with a rocky hide composed of living quartz. Quartz ropers are very sensitive to motion and are able to sense movement up to 225 ft away. In combat, quartz ropers fight in a manner similar to ropers: its tentacles can hit targets up to 50 ft away, the poisonous adhesive of the tentacles inflicts a 50% strength penalty on its targets, and it drags roped victims toward itself to deliver its nasty bite automatically. A quartz roper also differs from its larger cousins in a number of ways. First, it tends to concentrate its first attacks on two victims, striking each with 3 tentacles. The first two successfully roped victims will be injected with a venom which allows no saving throw and causes the victim to freeze in place, looking as if he or she has been turned to stone. One round after this apparent stoning the victim recovers and but is now under the delusion the quartz roper is a close friend and valued ally. These influenced adventurers will fight to protect the monster to the utmost of their abilities for the duration of effect of the venom; 10 turns. If the quartz roper is killed before the venom expires the deluded defenders will cease attacking and wander about aimlessly until the venom expires. The quartz roper can only inject its venom twice per day and afterward its combat tactics conform to those of a roper. A quartz roper's tentacles are strong, but not so strong as the larger variety of roper. A roped character's chances of breaking free are equal to double his or her chance to perform a Minor Test of Strength. Quartz ropers also lack a roper's magic resistance but its mineral-laden hide will resist normal missile fire, though magic missiles and hand held weapons damage it normally. All magic spells do normal damage as well. A quartz roper's gizzard has the same percentage chance of containing platinum pieces and gemstones as the standard variety of roper."
        }
      ],
      "treasure": "Ropers do not hoard treasure but their acidic bile cannot dissolve platinum or gemstones. Cutting open the gizzard of a roper has a 40% chance of yielding 3d6 (3-18) platinum pieces and 30% chance of 4d6 (4-24) gems."
    },
    {
      "name": "Rot Grub",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "5d4",
      "size": "Small",
      "move": "10 ft",
      "armorClass": 9,
      "hitDice": "1 hit point",
      "attacks": 0,
      "damage": "None",
      "specialAttacks": "See below",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "1/5 + 1/hp",
      "description": "Although rot grubs can be found in animal waste and other foul refuse, they prefer to consume tissue that is still alive. Upon contact with a living being, rot grubs will begin to vigorously burrow deep into the body. Fire must be applied to the site of contact at once in order to prevent the rot grubs from burrowing further. This application of flame inflicts 1d6 hit points of damage per instance. If not stopped immediately, within 1 to 3 turns the rot grubs will find the heart and kill their victim.",
      "treasure": "None"
    },
    {
      "name": "Rust Monster",
      "category": "Monster",
      "frequency": "Uncommon",
      "numberAppearing": "1d2",
      "size": "Medium (5 ft long)",
      "move": "180 ft",
      "armorClass": 2,
      "hitDice": 5,
      "attacks": 2,
      "damage": "Nil",
      "specialAttacks": "See below",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "3/185 + 4 per hp",
      "description": "Rust monsters are creatures vaguely resembling a 5 ft long and 3 ft tall giant bug-like armadillo that weighs about 200 lbs. Rust monsters have rust-red colouration on their dorsal hides, yellowish tan on their ventral hides, and two prehensile antennae on their heads. Rust monsters are only found in underground type environments, which they prowl constantly in search of food. Rust monsters consume metal of any kind, especially ferrous metals and ferrous metal alloys. The antennae of a rust monster can \"smell\" metal 90 ft away, and the creature will dart toward such a source of food with blinding speed, rolling 2 attacks with its antennae at the largest piece of metal it can sense. A successful attack causes up to 10 cubic ft of metal instantly to crumble into easily-digestible rust and the creature will immediately cease attacking in such a case and begin devouring its newly-created meal. Metal with magical bonuses gains a 10% chance per plus of not being affected by the rust monsters attack. For instance a +3 shield would have a 30% of resisting the rusting effect. A successful \"to hit\" roll against a rust monster with a metal weapon automatically subjects that weapon to a rust attack. Rust monsters are motivated by animal intelligence and blind hunger, therefore can be easily distracted from pursuit by dropping metal objects and fleeing; some iron spikes or a heavy mace will cause the attacking rust monster to stop for 1 round to devour the treat. Otherwise, rust monsters will relentlessly pursue the PCs until slain or all metal items have been consumed.",
      "treasure": "1d4 gems per individual (50%)"
    },
    {
      "name": "Sahuagin",
      "category": "Monster",
      "variants": [
        {
          "name": "Warrior",
          "frequency": "Uncommon",
          "numberAppearing": "20d4",
          "size": "Man-sized",
          "move": "120 ft; 240 ft swimming",
          "armorClass": 5,
          "hitDice": "2+2",
          "attacks": 1,
          "damage": "By weapon",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "25%",
          "intelligence": "High",
          "alignment": "Lawful evil",
          "levelXP": "2/30+3/hp"
        },
        {
          "name": "Female",
          "frequency": "Uncommon",
          "numberAppearing": "30d4",
          "size": "Man-sized",
          "move": "120 ft; 240 ft swimming",
          "armorClass": 6,
          "hitDice": 2,
          "attacks": 1,
          "damage": "By weapon",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "100%",
          "intelligence": "High",
          "alignment": "Lawful evil",
          "levelXP": "2/20+2/hp"
        },
        {
          "name": "Hatchling",
          "frequency": "Uncommon",
          "numberAppearing": "10d4",
          "size": "Small",
          "move": "120 ft; 240 ft swimming",
          "armorClass": 7,
          "hitDice": 1,
          "attacks": 1,
          "damage": "1d4",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "100%",
          "intelligence": "High",
          "alignment": "Lawful evil",
          "levelXP": "1/10+1/hp"
        },
        {
          "name": "Guard",
          "frequency": "Uncommon",
          "numberAppearing": "3d6",
          "size": "Man-sized",
          "move": "120 ft; 240 ft swimming",
          "armorClass": 5,
          "hitDice": "3+3",
          "attacks": 1,
          "damage": "By weapon",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "25%",
          "intelligence": "High",
          "alignment": "Lawful evil",
          "levelXP": "3/50+4/hp"
        },
        {
          "name": "Warchief",
          "frequency": "Rare",
          "numberAppearing": "1",
          "size": "Man-sized",
          "move": "120 ft; 240 ft swimming",
          "armorClass": 4,
          "hitDice": "4+4",
          "attacks": 1,
          "damage": "By weapon",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "25%",
          "intelligence": "High",
          "alignment": "Lawful evil",
          "levelXP": "4/100+5/hp"
        },
        {
          "name": "Priestess",
          "frequency": "Very rare",
          "numberAppearing": "1d4+1",
          "size": "Man-sized",
          "move": "120 ft; 240 ft swimming",
          "armorClass": 5,
          "hitDice": "2 to 6",
          "attacks": 1,
          "damage": "By weapon",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "100%",
          "intelligence": "Exceptional",
          "alignment": "Lawful evil",
          "levelXP": "Variable"
        },
        {
          "name": "Baron",
          "frequency": "Very rare",
          "numberAppearing": "1",
          "size": "Man-sized",
          "move": "120 ft; 240 ft swimming",
          "armorClass": 3,
          "hitDice": "6+6",
          "attacks": 1,
          "damage": "By weapon",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "100%",
          "intelligence": "High",
          "alignment": "Lawful evil",
          "levelXP": "4/300+8/hp"
        },
        {
          "name": "Prince",
          "frequency": "Very rare",
          "numberAppearing": "1",
          "size": "Man-sized",
          "move": "120 ft; 240 ft swimming",
          "armorClass": 2,
          "hitDice": "8+8",
          "attacks": 2,
          "damage": "By weapon",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "100%",
          "intelligence": "High",
          "alignment": "Lawful evil",
          "levelXP": "5/500+12/hp"
        },
        {
          "name": "King",
          "frequency": "Very rare",
          "numberAppearing": "1",
          "size": "Man-sized",
          "move": "120 ft; 240 ft swimming",
          "armorClass": 1,
          "hitDice": "10+10",
          "attacks": 4,
          "damage": "By weapon",
          "specialAttacks": "See below",
          "specialDefenses": "See below",
          "magicResistance": "Standard",
          "lairProbability": "100%",
          "intelligence": "Exceptional",
          "alignment": "Lawful evil",
          "levelXP": "6/1,250+14/hp"
        }
      ],
      "description": "Sahuagin are humanoid ichthyans of evil alignment. They dwell in shallow, warmer salt waters and raid villages and communities on land for loot and sport. They are nocturnal. Each sahuagin realm has a King and is divided into nine provinces, each ruled by a Prince. Each Prince will have a number of Barons under his command, and each Baron controls a war-band. The \"Number Encountered\" listing for this creature is for the lair of a typical war-band; the lairs of a Prince will be much larger. If encountered outside their lair, there will be no females or hatchlings, no priestesses or above, and the band will be led by a warchief. Sahuagin are typically armed as follows: Dagger and spear 25% of the band, Dagger, trident and net 50% of the band, Dagger and heavy crossbow 25% of the band. All these weapons are fully usable both above and below the water, which makes them quite highly prized. The sahuagin clergy will always be led by a priestess with 6 HD and the spellcasting powers of an 8th level cleric. The remaining priestesses will be trainees of 2nd to 7th level (1d6+1). Their HD are equal to their spellcasting level -2 (minimum 2). Sahuagin priestesses will typically be attended by zombie or skeleton servants, as they are fond of the animate dead spell. Sahuagin have been known to tame sharks and keep them as pets.",
      "treasure": {
        "individual": "1d6 pp each",
        "lair": {
          "gp": { "amount": "2d6×1,000", "chance": "75%" },
          "pp": { "amount": "3d6×100", "chance": "50%" },
          "gems": { "amount": "3d8", "chance": "50%" },
          "jewellery": { "amount": "2d6", "chance": "50%" },
          "magic_items": { "amount": "1 miscellaneous magic and 1 potion", "chance": "50%" }
        }
      }
    },
    {
      "name": "Scorpion",
      "category": "Monster",
      "variants": [
        {
          "name": "Large",
          "frequency": "Common",
          "numberAppearing": "1d6",
          "size": "Small",
          "move": "90 ft",
          "armorClass": 5,
          "hitDice": "2+2",
          "attacks": 3,
          "damage": "1d4/1d4/1d2",
          "specialAttacks": "Poison sting",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "25%",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "3/75+3/hp"
        },
        {
          "name": "Huge",
          "frequency": "Uncommon",
          "numberAppearing": "1d4",
          "size": "Small",
          "move": "120 ft",
          "armorClass": 4,
          "hitDice": "4+4",
          "attacks": 3,
          "damage": "1d8/1d8/1d3",
          "specialAttacks": "Poison sting",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "25%",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "4/125+5/hp"
        },
        {
          "name": "Giant",
          "frequency": "Uncommon",
          "numberAppearing": "1d3",
          "size": "Medium",
          "move": "150 ft",
          "armorClass": 3,
          "hitDice": "5+5",
          "attacks": 3,
          "damage": "1d10/1d10/1d4",
          "specialAttacks": "Poison sting",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "50%",
          "intelligence": "Non-",
          "alignment": "Neutral",
          "levelXP": "5/600 + 6/hp"
        }
      ],
      "description": "Large, huge and giant scorpions are vicious, fearless predators found almost anywhere. Their usual tactic is to attack anything smaller than themselves. The scorpion will try and grab its prey with its huge claws then sting it to death with its tail. While its tail only does 1d4 points of damage the victim must save vs poison or die. The scorpion can use its attacks independently of each other on 3 different targets. Anything that the scorpion kills is taken back to its lair and consumed. It should be noted that the scorpion is not immune to its own poison; if it stings itself it could die.",
      "treasure": {
        "lair": {
          "cp": { "amount": "1d8×1,000", "chance": "10%" },
          "sp": { "amount": "1d12×1,000", "chance": "15%" },
          "ep": { "amount": "1d8×1,000", "chance": "15%" },
          "gp": { "amount": "1d6×1,000", "chance": "30%" },
          "gems": { "amount": "1d10", "chance": "10%" },
          "jewellery": { "amount": "1d6", "chance": "5%" },
          "magic_items": { "amount": "2 misc. magic + 1 potion", "chance": "5%" }
        }
      }
    },
    {
      "name": "Sea Hag",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1d3",
      "size": "Medium",
      "move": "90 ft; 150 ft swimming",
      "armorClass": 7,
      "hitDice": 3,
      "attacks": "2 claws or 1 weapon",
      "damage": "1d3+3/1d3+3 or by weapon +3",
      "specialAttacks": "See Below",
      "specialDefenses": "See Below",
      "magicResistance": "50%",
      "lairProbability": "50%",
      "intelligence": "Average",
      "alignment": "Chaotic evil",
      "levelXP": "5/410 +2/hp",
      "description": "Sea Hags are wretched creatures given to committing dreadful acts of evil. They typically make their lairs beneath the ocean depths, but they are occasionally found in large lakes or other significant bodies of water. Their true form is that of a decrepit old woman, ravaged by time and repellent beyond reason, but they generally use their magic to assume a much more pleasant visage. They have sharp claws and teeth, as well as an insatiable appetite for flesh. Most Sea Hags are thought to be capable of speaking a number of languages. The appearance of a Sea Hag belies their true abilities, for they are all supernaturally swift and strong, but more potent are their magical abilities. They take particular delight in their ability to use change self to deceive the unwary, either luring them to an unpleasant and immediate death or as part of a more subtle scheme; they can use this power at will and the duration is unlimited. Should a Sea Hag's true appearance ever be revealed, then the horror causes anyone within thirty feet to be subject to a saving throw versus spells to avoid losing half their strength score for 1d6 turns. Furthermore, a Sea Hag can employ an evil gaze up to three times per day that subjects one creature within thirty feet to a saving throw vs poison; failure results in immediate collapse and paralysis for three days, though for 1 in 4 victims the effect is stronger and causes instant death. If physical combat becomes unavoidable, Sea Hags will attack with a weapon or their sharp claws; regardless, they have +3 to hit and +3 to damage. Sea Hags are immune to charm, fear, sleep and fire or cold based spells and immune to weapons that are not forged of cold iron, silver or else enchanted with at least a +1 bonus.",
      "treasure": {
        "cp": { "amount": "1d10×1,000", "chance": "25%" },
        "sp": { "amount": "1d8×1,000", "chance": "25%" },
        "gp": { "amount": "1d6×1,000", "chance": "25%" },
        "gems": { "amount": "1d6", "chance": "25%" },
        "jewellery": { "amount": "1d3", "chance": "25%" },
        "magic_items": { "amount": "any two", "chance": "10%" }
      }
    },
    {
      "name": "Sea Serpent",
      "category": "Monster",
      "frequency": "Uncommon",
      "numberAppearing": "1d2",
      "size": "Large (50 ft long)",
      "move": "120 ft swimming",
      "armorClass": 5,
      "hitDice": 10,
      "attacks": 2,
      "damage": "1d6/3d6",
      "specialAttacks": "Poison, constrict",
      "specialDefenses": "Nil",
      "magicResistance": "Nil",
      "lairProbability": "5%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "7/1,000 + 12/hp",
      "description": "Descriptions of sea serpents vary with the region in which they are found. Sometimes they appear as giant sea snakes and other times as dragon-like serpentine creatures with legs or flippers. What is known for certain is a sea serpent can be encountered in any ocean, sea, or large body of fresh water. Sea serpents have two attacks. It has a poisonous bite for 1d6 points of damage and death in 1d4 rounds, save vs poison to negate; and a coiling attack which can crush a ship or creature in 1d6+4 (5-10) rounds. Sea serpents are very territorial but are not otherwise aggressive, only attacking when hungry. Once a sea serpent attacks, however, it is fearless and relentless and will fight to the death. Sea serpents are capable of diving to great depths and staying underwater for long periods of time. Sea serpents only lair in caves in very deep water and tend to be solitary or, at most, a mated pair.",
      "treasure": "None"
    },
    {
      "name": "Shadow",
      "category": "Undead",
      "turnResistance": 4,
      "frequency": "Rare",
      "numberAppearing": "2d10+1",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 7,
      "hitDice": "3+1",
      "attacks": "1",
      "damage": "1d6",
      "specialAttacks": "Drains strength, dexterity or constitution",
      "specialDefenses": "+1 or better weapon to hit; immune to cold, poison, and paralysation, as well as sleep, charm, hold and other mental attacks",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "4/250 +4/hp",
      "treasure": {
        "sp": {"amount": "2d10×1,000", "chance": "10%"},
        "ep": {"amount": "2d6×1,000", "chance": "15%"},
        "gp": {"amount": "2d4×1,000", "chance": "45%"},
        "pp": {"amount": "1d6×1,000", "chance": "33%"},
        "gems": {"amount": "4d8", "chance": "20%"},
        "jewellery": {"amount": "2d4", "chance": "8%"},
        "magic_items": {"amount": "3", "chance": "33%"}
      },
      "description": "Shadows are undead creatures that drain random attributes (Str, Dex, or Con) with each hit. Victims reduced to zero become shadows under the control of their killer. Drained points return after an hour if not reduced to zero. They can only be hit by magic weapons and are immune to cold, mind-affecting spells, and most detection methods."
    },
    {
      "name": "Shambling Mound",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1d3",
      "size": "Large",
      "move": "60 ft",
      "armorClass": 0,
      "hitDice": "8 to 11",
      "attacks": 2,
      "damage": "2d8/2d8",
      "specialAttacks": "Suffocation",
      "specialDefenses": "See below",
      "magicResistance": "See below",
      "lairProbability": "30%",
      "intelligence": "Low",
      "alignment": "Neutral",
      "levelXP": "Variable according to hit dice",
      "description": "Shambling mounds appear to be piles of rotting vegetation. They are a type of intelligent plant. They dwell deep underground and in swamps, wherever there is ample moisture and decay. Shambling mounds will eat anything organic. They feed by wrapping their roots around their prey and absorbing the nutrients as the material rots. When attacking, the shambling mound swings its arms around wildly. If both arms strike the same target within the same round, that target has become tangled up inside the creature. The victim will be smothered in 2d4 rounds unless the monster can be killed. These things are rugged since the actual creature is surrounded by layers upon layers of rotting material. Fire has no effect as they are so wet, nothing will burn. Electricity will actually cause the shambling mound to grow, add an additional hit die. Cold based attacks do no damage if the creature makes it save, half if it does. Weapons only do half damage as well. Shambling mounds are vulnerable to spells that affect plants such as plant control or charm plant.",
      "treasure": {
        "cp": { "amount": "1d8×1,000", "chance": "50%" },
        "sp": { "amount": "1d6×1,000", "chance": "25%" },
        "ep": { "amount": "1d4×1,000", "chance": "25%" },
        "gp": { "amount": "1d3×1,000", "chance": "25%" },
        "gems": { "amount": "1d8", "chance": "30%" },
        "jewellery": { "amount": "1d4", "chance": "20%" },
        "magic_items": { "amount": "sword, armour, or misc. weapon + 1d4 scrolls + 1 misc. magic item + 1 potion", "chance": "60%" }
      }
    },
    {
      "name": "Shark",
      "category": "Animal",
      "frequency": "Common",
      "numberAppearing": "3d4",
      "size": "Medium to large",
      "move": "240 ft swimming",
      "armorClass": 6,
      "hitDice": "3, 5 or 8",
      "attacks": 1,
      "damage": "1d4+1, 2d4 or 3d4",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "3/50 + 2/hp or more",
      "treasure": "None",
      "description": "Sharks are vicious sea scavengers attracted to splashing, movement, and especially blood in water. When feeding, they enter a frenzy attacking everything, sometimes even each other. Sharks have two notable weaknesses: they must remain in constant motion to breathe (immobilization causes drowning), and they can be killed instantly by a well-placed blunt force blow to their side."
    },
    {
      "name": "Shedu",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "2d4",
      "size": "Large",
      "move": "120 ft; 240 ft flying (AA:IV)",
      "armorClass": 4,
      "hitDice": "9+9",
      "attacks": 2,
      "damage": "1d6/1d6",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "25%",
      "lairProbability": "25%",
      "intelligence": "Exceptional",
      "alignment": "Lawful good",
      "levelXP": "7/1,950 + 14/hp",
      "description": "Shedu are winged bulls with human heads. They wander endlessly battling evil and chaos. They will aid anyone of good alignment, who is in need. They are powerful magic users who cast with a 9th level ability. If attacked, they will defend themselves with their front hooves. Shedu not only travel the material plane but the æthereal and astral planes as well. They can become æthereal at will. Shedu speak their own language, using their telepathy to communicate with others.",
      "treasure": {
        "gp": { "amount": "10d4×1,000", "chance": "50%" },
        "pp": { "amount": "1d20×100", "chance": "50%" },
        "gems": { "amount": "5d4", "chance": "30%" },
        "jewellery": { "amount": "1d10", "chance": "25%" },
        "magic_items": { "amount": "any 4 magic item + 1 scroll", "chance": "35%" }
      }
    },
    {
      "name": "Shrieker",
      "category": "Monster",
      "frequency": "Common",
      "numberAppearing": "2d4",
      "size": "Small to large",
      "move": "10 ft",
      "armorClass": 7,
      "hitDice": 3,
      "attacks": "None",
      "damage": "Nil",
      "specialAttacks": "Nil",
      "specialDefenses": "Noise",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "3/50 + 2/hp",
      "description": "Shriekers are mobile fungi that wander around quietly underground soaking up moisture. They are the favourite food of purple worms and shambling mounds. They give off an ear-piercing shriek whenever they detect light within 30 ft or movement within 10 ft. Shriekers will continue to shriek for 1d3 rounds, with a 50% chance to attract a wandering monster each round.",
      "treasure": "None"
    },
    {
      "name": "Skeleton",
      "category": "Undead",
      "turnResistance": 1,
      "frequency": "Rare",
      "numberAppearing": "3d10",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 7,
      "hitDice": "1",
      "attacks": "1",
      "damage": "1d6",
      "specialAttacks": "None",
      "specialDefenses": "Immune to cold, sleep, charm, hold and other mental based attacks.",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "None",
      "alignment": "Neutral",
      "levelXP": "1/15 +1/hp",
      "treasure": "None",
      "description": "Animated fleshless remains created by evil magic. They mindlessly obey simple commands. All attacks deal 1d6 damage regardless of weapon. Immune to cold and mind-affecting spells. Take half damage from edged/cutting weapons and minimal damage from piercing weapons. Holy water inflicts 2d4 damage per vial."
    },
    {
      "name": "Skeleton Warrior",
      "category": "Monster",
      "frequency": "Very rare",
      "numberAppearing": "1",
      "size": "Man-sized",
      "move": "60 ft",
      "armorClass": 2,
      "hitDice": "9+2 or higher",
      "attacks": 1,
      "damage": "By weapon (+3 to hit)",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "90%",
      "lairProbability": "5%",
      "intelligence": "Exceptional",
      "alignment": "Neutral evil",
      "levelXP": "7/2,000+16/hp",
      "description": "Skeleton Warriors are the unfortunate victims of powerful magic; in life they were fighters of great prowess and likely lords in their own right. In death they have become abominations, compelled by evil sorcery to serve any who possess the golden circlets that contain their souls. Skeleton Warriors desire above all else to gain possession of their own circlet and to be revenged upon any who have possessed and used it in the past. The appearance of a Skeleton Warrior is terrifying and creatures with less than five HD will panic and flee from its presence. A visage of desiccated and decaying flesh hanging from exposed bone is perhaps fearsome enough, but the flame red-eyes that stare forth from black sockets are said to haunt the dreams of those upon whom they look. They are generally armed and armoured with the remains of what they wore in life, or their grave goods. A character in possession of the circlet of a Skeleton Warrior and within 240 ft may attempt to dominate it. The circlet must be worn on the attempting character's head in order to do this; it cannot be used whilst wearing a helmet or similar headgear. On the first attempt at domination, the character has a chance of success equal to his or her Wisdom score × 5, but he or she must be able to see his or her victim and have the freedom to concentrate for one round. If the attempt fails, it may be attempted again on the following round. If concentration is interrupted before domination is achieved, such as by an attack, the character must concentrate for a further three rounds. During this time, the Skeleton Warrior will attempt to kill its would-be master and take possession of the circlet if such is at all possible. In the event of successful domination, the Skeleton Warrior is rendered inert for as long as the character remains in possession of the circlet. Additionally, whenever they are within 240 ft of one another and the character wears the circlet without helmet as described above, the user may take control of the Skeleton Warrior, being able to see through its eyes and direct its actions as he or she desires; whilst controlling the actions of the Skeleton Warrior, the user may not act him- or herself. Should the user lose possession of the circlet for any reason, the Skeleton Warrior will seek him or her out and slay him or her, moving at double its usual movement rate. In the event that the Skeleton Warrior ever regains possession of its circlet, it will place it upon its head and as a result both will turn to dust. Skeleton Warriors are powerful combatants, may use any weapon and always have a +3 bonus to hit; they can only be harmed by magical weapons. The lair of a Skeleton Warrior is normally a richly adorned tomb filled with considerable treasure. However, because they are usually either seeking the current possessor of their circlet or else in the unwilling service of said possessor, they are rarely found in their lairs. Contrary to appearances, the Skeleton Warrior is not undead in the conventional sense. It cannot be turned, is unaffected by a scroll of protection from undead, etc.",
      "treasure": {
        "cp": { "amount": "1d8×1,000", "chance": "50%" },
        "sp": { "amount": "1d6×1,000", "chance": "25%" },
        "ep": { "amount": "1d4×1,000", "chance": "25%" },
        "gp": { "amount": "1d3×1,000", "chance": "25%" },
        "gems": { "amount": "1d8", "chance": "30%" },
        "jewellery": { "amount": "1d4", "chance": "20%" },
        "magic_items": { "amount": "sword, armour, or misc. weapon + 1d4 scrolls + 1 misc. magic item + 1 potion", "chance": "60%" }
      }
    },
    {
      "name": "Slithering Tracker",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1",
      "size": "Small",
      "move": "120 ft",
      "armorClass": 5,
      "hitDice": 5,
      "attacks": "None",
      "damage": "None",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Average",
      "alignment": "Neutral",
      "levelXP": "3/250+5/hp",
      "description": "Slithering trackers live in dungeons, ruins and dark places. They are transparent and if not in natural sunlight are almost impossible to see (1 in 20 chance of spotting). They almost never attack their prey immediately, instead following and waiting until their target is asleep. They can follow through almost anything, being amorphous in shape and capable of seeping through tiny gaps, such as door jambs or cracks in stonework. If a slithering tracker catches its victim asleep, it will touch it, forcing the victim to roll a saving throw vs paralysation or be totally paralysed for 1d6 hours. The tracker will then feed directly on its victim's life energy, killing it in 1 hour.",
      "treasure": {
        "lair": {
          "cp": { "amount": "1d10×1,000", "chance": "20%" },
          "sp": { "amount": "1d6×1,000", "chance": "25%" },
          "ep": { "amount": "1d3×1,000", "chance": "10%" },
          "gems": { "amount": "1d4", "chance": "20%" },
          "jewellery": { "amount": "1d2", "chance": "20%" },
          "magic_items": { "amount": "any two", "chance": "5%" }
        }
      }
    },
    {
      "name": "Slime, Green",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "Small",
      "move": "None",
      "armorClass": 10,
      "hitDice": 2,
      "attacks": "None",
      "damage": "Nil",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "2/20+2/hp",
      "description": "Green slime is an occasional dungeon hazard. Sages debate whether it is vegetable or fungoid in nature. It grows over the ceiling of an area until a pendulous bulb of slime is almost ready to drop. The vibrations from passing creatures cause these bulbs to fall. If a bulb strikes exposed flesh, it will convert the flesh rapidly to green slime. It can also eat through wood (slowly) and metal (quickly—a metal item will be consumed in 1d6 rounds). Only stone can stop it. Green slime is unharmed by most weapons or spells. It does take damage from cold or fire, and can be killed by a cure disease spell. Failing that, a creature with green slime on it must cut away the affected area, amputate the affected limb, or die in 1d4 rounds (after which it will be converted to green slime and cannot be raised or resurrected).",
      "treasure": "None"
    },
    {
      "name": "Slug, Giant",
      "category": "Monster",
      "frequency": "Uncommon",
      "numberAppearing": "1",
      "size": "Large",
      "move": "60 ft",
      "armorClass": 8,
      "hitDice": 12,
      "attacks": 1,
      "damage": "1d12",
      "specialAttacks": "Spit acid",
      "specialDefenses": "See below",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "7/2,000+16/hp",
      "description": "Giant slugs live in dungeons and other underground complexes where they can avoid sunlight. Since these creatures are boneless they can squeeze through narrow openings and navigate around most obstructions. They use their sharp tongues to burrow through wood and hard ground. Giant slugs have a nasty bite, but their most effective weapon is their ability to spit acid up to 100 ft away. The first shot is almost always a miss (only 10% chance to hit), but this attack serves to approximate distance. After the first shot the chance hitting is base 100%, going down 10% for every 10 ft distance from giant slug; thus at 20 ft away the chance to hit is 80%, at 70 ft away 30%, etc. Because of their tough, flexible bodies, non-magical blunt weapons do no damage against giant slugs—only edged, piercing, or magical blunt weapons can harm them. These creatures are usually a pale light grey with a white belly, but can be brown or black.",
      "treasure": "None"
    },
    {
      "name": "Snake, Giant",
      "category": "Monster",
      "variants": [
        {
          "name": "Boa",
          "frequency": "Uncommon",
          "numberAppearing": "1d2",
          "size": "Large",
          "move": "90 ft",
          "armorClass": 5,
          "hitDice": "6 + 1",
          "attacks": 2,
          "damage": "1d4/2d4",
          "specialAttacks": "Constriction",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "Nil",
          "intelligence": "Animal",
          "alignment": "Neutral",
          "levelXP": "5/345+8/hp",
          "description": "Boas will drop on its prey from above, coiling its long body around the chosen target victim and attacking by both biting and squeezing for 2d4 points of damage. Once a snake has a victim within its coils it is quite difficult to release him or her. Several strong creatures creatures can grasp each end of the snake and uncoil the victim in 1d4+1 segments. Four very strong humans, 16 or greater strength each, should be able to accomplish this task. Attacks directed against a snake will also affect the victim trapped within the snake coils, though the GM may allow certain types of attacks to not do so."
        },
        {
          "name": "Adder",
          "frequency": "Uncommon",
          "numberAppearing": "1d6",
          "size": "Large",
          "move": "150 ft",
          "armorClass": 5,
          "hitDice": "4 + 2",
          "attacks": 1,
          "damage": "1d4",
          "specialAttacks": "Poison",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "Nil",
          "intelligence": "Animal",
          "alignment": "Neutral",
          "levelXP": "4/155+4/hp",
          "description": "Adder is the common name for giant poisonous snakes and they come in a variety of species. The poisons are usually negated by a saving throw but some types of adders have a powerful poison which, even if saved against, causes 3d6 points of damage to the victim."
        },
        {
          "name": "Cobra",
          "frequency": "Rare",
          "numberAppearing": "1d4",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 5,
          "hitDice": "4 + 2",
          "attacks": 1,
          "damage": "1d4",
          "specialAttacks": "See below",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "Nil",
          "intelligence": "Animal",
          "alignment": "Neutral",
          "levelXP": "4/190+4/hp",
          "description": "Cobras are hooded giant snakes with the ability to spit poison at a single target up to 30 ft distant. The bite of the giant cobra is also quite poisonous. In either case, the victim gets a saving throw to negate the poison."
        },
        {
          "name": "Amphisbaena",
          "frequency": "Very rare",
          "numberAppearing": "1d3",
          "size": "Medium (6 ft long)",
          "move": "120 ft",
          "armorClass": 3,
          "hitDice": 6,
          "attacks": 2,
          "damage": "1d4/1d4",
          "specialAttacks": "Poison",
          "specialDefenses": "None",
          "magicResistance": "Standard",
          "lairProbability": "Nil",
          "intelligence": "Animal",
          "alignment": "Neutral",
          "levelXP": "5/475+6/hp",
          "description": "Amphisbaena are 6 ft long snakes with a head at both ends of its body. Both heads are capable of delivering a poisonous bite and victims must save vs poison or die instantly. Its method of travel is as bizarre as the creature's appearance, one head of this unusual snake will grab the neck of the other and the creature then rolls like a hoop upon the ground! Amphisbaena are carnivorous and like most other reptiles, are cold-blooded and prefer warmer climes. Oddly enough, the amphisbaena is immune to cold based attacks, though the sages are at a loss as to why this is so."
        }
      ],
      "description": "All giant snakes are carnivorous and can be found in every type of climate except for the coldest. NB: For giant sea snakes see the listing for sea serpent.",
      "treasure": "None (for all giant snakes)"
    },
    {
      "name": "Soldiery",
      "category": "Men",
      "name_variants": "Mercenary Company, Infantry Company",
      "frequency": "Uncommon",
      "numberAppearing": "140+10d6",  // 150–200 total
      "size": "Man-sized",
      "move": "120 ft (afoot), 180 ft (mounted leaders)",
      "armorClass": "2 (commander), 3 (lieutenants), 4 (serjeants), 5–6 (soldiers)",
      "hitDice": "F 0 to F 8",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Coordinated formations, spellcaster support",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Average",
      "alignment": "Lawful Neutral or Neutral",
      "levelXP": "Variable by rank",
      "description": "A disciplined mercenary infantry company of 150–200 soldiers. Most troops are footmen, while leaders and scouts are mounted. Forces are armed according to their region, with a mix of polearms, sidearms, and missile weapons. In hostile regions, they are often accompanied by a cleric or magic-user. Armor Class values exclude Dexterity or magic bonuses.",
      "leaders": {
        "commander": { "level": "6–8", "class": "fighter", "count": 1 },
        "lieutenants": { "level": "3–5", "class": "fighter", "count": 5 },
        "serjeants": { "level": 2, "class": "fighter", "count": "2 per 10 soldiers" },
        "scouts": { "level": 1, "class": "fighter", "count": 10 },
        "soldiers": { "level": 0, "class": "fighter", "count": "140–190" },
        "hostile_area_spellcaster": {
          "options": [
            { "level": "4–6", "class": "cleric", "count": 1 },
            { "level": "3–5", "class": "magic-user", "count": 1 }
          ],
          "condition": "Only present in hostile regions"
        }
      },
      "equipment": {
        "weapon_mix": {
          "polearms": "50%",
          "sidearms": "30%",
          "missile_weapons": "20%"
        },
        "armor_notes": "Commanders and officers wear superior armor (AC 2–4); troops AC 5–6 depending on gear; AC does not include Dex or magic bonuses",
        "mounts": "Commanders, serjeants, and scouts are mounted on light warhorses"
      },
      "magic_item_chance": {
        "reference": "Same as Men, Patrol, Levies",
        "fighters": "5% per level (armor, sword, misc weapon, potion)",
        "clerics": "5% per level (armor, misc weapon, potion, scroll, misc magic)",
        "magic_users": "5% per level (potion, scroll, ring, misc magic)"
      },
      "treasure": {
        "individual": "1d6 sp or ep",
        "lair": {
          "cp": { "amount": "1d6×100", "chance": "15%" },
          "sp": { "amount": "1d4×100", "chance": "25%" },
          "gp": { "amount": "1d3×100", "chance": "25%" },
          "gems": { "amount": "1d6", "chance": "35%" },
          "magic_items": { "amount": 1, "chance": "25%" }
        }
      }
    },
    {
      "name": "Soldiery, Hobgoblin",
      "category": "Humanoids",
      "frequency": "Uncommon",
      "numberAppearing": "90d8+70",
      "size": "Man-sized",
      "move": "90 ft",
      "armorClass": "5 (Serjeants AC 4, Captain/Officers AC 2–4)",
      "hitDice": "Hobgoblins: 1+1 (5–8 hp), Serjeants: 9 hp",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "15%",
      "intelligence": "Average to very",
      "alignment": "Lawful evil",
      "levelXP": "Variable",
      "description": "Hobgoblin soldiery are disciplined, close-order heavy infantry led by human officers. Their morale is excellent as long as leaders remain. Equipment varies but is standardized by unit.",
      "leaders": {
        "captain": { "level": "6-8", "class": "fighter", "count": 1 },
        "lieutenant": { "level": 5, "class": "fighter", "count": 1 },
        "subalterns": { "level": 3, "class": "fighter", "count": 4 },
        "serjeants": { "level": 2, "class": "fighter", "count": 8 },
        "cleric": {
          "chance": "50%",
          "level": "4-7",
          "class": "cleric"
        },
        "magic_user": {
          "chance": "30%",
          "level": "3-6",
          "class": "magic-user"
        },
        "thief": {
          "chance": "70%",
          "level": "5-8",
          "class": "thief"
        }
      },
      "equipment": {
        "hobgoblins": {
          "composite_bow_short_sword": "20%",
          "fauchard_fork_short_sword": "50%",
          "morning_star": "30%"
        },
        "human_leaders": {
          "mounts": "Medium warhorses",
          "weapons": "Lance, whip, long sword, mace"
        }
      },
      "treasure": {
        "individual": "1d6 ep",
        "lair": {
          "gp": { "amount": "2d10×1000", "chance": "50%" },
          "gems": { "amount": "1d8", "chance": "25%" },
          "magic_items": { "amount": 1, "chance": "20%" }
        }
      }
    },
    {
      "name": "Soldiery, Orcs",
      "category": "Humanoids",
      "name_variants": "Orc Soldiery",
      "frequency": "Uncommon",
      "numberAppearing": "120–150",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 6,
      "hitDice": "1d8 (leaders vary)",
      "attacks": 1,
      "damage": "By weapon",
      "specialAttacks": "Organized tactics, potential magic use",
      "specialDefenses": "Poor morale if leaders flee",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Low to Average",
      "alignment": "Lawful evil",
      "levelXP": "Variable",
      "description": "These organized troops of orcs are led by human or half-orc officers, and may include hobgoblins or half-orcs. They fight as well-trained units and have poor morale if their leaders fall. Orcs use standard weapons and armor, while leaders may possess magic.",
      "leaders": {
        "captain": {
          "count": 1,
          "options": [
            {"level": "5-6", "class": "fighter"},
            {"level": "4-5 / 4-5", "class": "fighter/thief", "chance": "20%"},
            {"level": "4-5 / 4-5", "class": "fighter/assassin", "chance": "20%"}
          ]
        },
        "lieutenants": {
          "count": "3d3",
          "options": [
            {"level": "3-4", "class": "fighter"},
            {"level": "2-3 / 2-3", "class": "fighter/thief", "chance": "20%"},
            {"level": "2-3 / 2-3", "class": "fighter/assassin", "chance": "20%"}
          ]
        },
        "cleric": {
          "chance": "100%",
          "level": "3-4 / 3-4",
          "class": "cleric/thief or cleric/assassin",
          "race": "half-orc"
        }
      },
      "equipment": {
        "infantry": {
          "weapon_types": "Standard orc weapons, regional variation",
          "notes": "Includes some hobgoblins or half-orcs"
        }
      },
      "treasure": {
        "individual": "As orc standard",
        "lair": {
          "cp": {"amount": "2d6×1,000", "chance": "25%"},
          "sp": {"amount": "2d6×1,000", "chance": "30%"},
          "gp": {"amount": "2d10×1,000", "chance": "40%"},
          "gems": {"amount": "2d10", "chance": "30%"},
          "jewellery": {"amount": "1d10", "chance": "20%"},
          "magic_items": {"amount": 2, "chance": "20%"}
        }
      }
    },
    
    {
      "name": "Spectre",
      "category": "Undead",
      "turnResistance": 9,
      "frequency": "Rare",
      "numberAppearing": "1d6",
      "size": "Man-sized",
      "move": "150 ft hovering; 300 ft flying (AA: IV)",
      "armorClass": 2,
      "hitDice": "7+3",
      "attacks": "1",
      "damage": "1d8",
      "specialAttacks": "Level drain",
      "specialDefenses": "+1 or better weapon to hit; immune to cold, poison, paralysation, and elemental spells, as well as sleep, charm, hold and other mental attacks",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "High",
      "alignment": "Lawful evil",
      "levelXP": "7/1,815 +10/hp",
      "treasure": {
        "gems": {"amount": "3d4", "chance": "50%"},
        "gp": {"amount": "3d4×1,000", "chance": "70%"},
        "magic_items": {"amount": "1", "chance": "60%"},
        "potions": {"amount": "1d2", "chance": "70%"}
      },
      "description": "Spectres are insubstantial undead that drain two levels of experience with each hit. Victims reduced below level zero become half-strength spectres under their killer's control. They can only be damaged by magic weapons (+1 or better) or spells. Elemental spells and mind-affecting magic have no effect on them. Holy water works normally."
    },
    {
      "name": "Squid, Giant",
      "category": "Aquatic",
      "variants": [
        {
          "type": "Squid",
          "frequency": "Rare",
          "numberAppearing": "1",
          "size": "Large",
          "move": "180 ft swimming",
          "armorClass": "3/7",
          "hitDice": 12,
          "attacks": 9,
          "damage": "1d6 (×8)/5d4",
          "specialAttacks": "Constriction",
          "specialDefenses": "See below",
          "levelXP": "7/2,000 + 16/hp"
        },
        {
          "type": "Octopus",
          "frequency": "Rare",
          "numberAppearing": "1",
          "size": "Large",
          "move": "180 ft swimming",
          "armorClass": 7,
          "hitDice": 8,
          "attacks": 7,
          "damage": "1d4+1(×7)/4d4",
          "specialAttacks": "Constriction",
          "specialDefenses": "See below",
          "levelXP": "5/500+10/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Giant squid attack ships by attaching with two tentacles and using the remaining eight to attack crew. Each tentacle deals 1d6 damage initially, then 2d6 crushing damage in subsequent rounds until the victim dies. Victims have a 25% chance of having both arms held (helpless), 50% one arm held (-3 penalty), or 25% both arms free (-1 penalty). Tentacles require 10 hp damage to sever. The squid's body has AC 3 while tentacles have AC 7. If it loses 3+ arms, it flees, releasing a 60×80 ft ink cloud."
    },
    {
      "name": "Tiger",
      "category": "Animal",
      "variants": [
        {
          "type": "Tiger",
          "frequency": "Uncommon",
          "numberAppearing": "1d4",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 6,
          "hitDice": "5+5",
          "attacks": 3,
          "damage": "1d6/1d6/1d10",
          "specialAttacks": "See below",
          "specialDefenses": "Surprised only on 1",
          "levelXP": "4/250 + 6/hp"
        },
        {
          "type": "Smilodon",
          "frequency": "Rare",
          "numberAppearing": "1d2",
          "size": "Large",
          "move": "120 ft",
          "armorClass": 6,
          "hitDice": "7+2",
          "attacks": 3,
          "damage": "1d8/1d8/2d6",
          "specialAttacks": "See below",
          "specialDefenses": "Surprised only on 1",
          "levelXP": "5/525 + 10/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "7% (Tiger); 15% (Smilodon)",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Tigers are cunning predators that hunt in pairs or family groups. They can climb trees effortlessly, leap 40 ft to attack, move silently at quarter speed, and spring 10 ft vertically. If both claw attacks hit, they gain two additional rear leg attacks at +4 to hit for 1d6+2 damage each. Tigers with cubs (25% chance in lair) fight to the death to protect them. Smilodons (sabretooth tigers) are prehistoric variants with powerful jaws that grant +2 to hit with bite attacks."
    },
    {
      "name": "Toad",
      "category": "Animal",
      "variants": [
        {
          "type": "Giant",
          "frequency": "Common",
          "numberAppearing": "1d12",
          "size": "Medium",
          "move": "60 ft; 60 ft leaping",
          "armorClass": 6,
          "hitDice": "2+4",
          "attacks": 1,
          "damage": "2d4",
          "specialAttacks": "Leap",
          "specialDefenses": "None",
          "levelXP": "2/20+2/hp"
        },
        {
          "type": "Giant Poisonous",
          "frequency": "Uncommon",
          "numberAppearing": "1d8",
          "size": "Medium",
          "move": "60 ft; 60 ft leaping",
          "armorClass": 7,
          "hitDice": 2,
          "attacks": 1,
          "damage": "1d4+1",
          "specialAttacks": "Leap, poison",
          "specialDefenses": "None",
          "levelXP": "2/50+2/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Giant toads hunt all prey including humans. They can leap forward up to 60 ft and attack in the same round. Poisonous giant toads look identical to normal giant toads but have a deadly venomous bite that kills on a failed saving throw."
    },
    {
      "name": "Troglodyte",
      "category": "Humanoid",
      "frequency": "Common",
      "numberAppearing": "10d10",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 5,
      "hitDice": 2,
      "attacks": "3 or 1",
      "damage": "1d3/1d3/1d4+1 or by weapon",
      "specialAttacks": "Odour (save vs poison or lose 1 STR/round, lasts 10 rounds after exposure)",
      "specialDefenses": "Chameleon skin: Surprise on 1-4",
      "magicResistance": "Standard",
      "lairProbability": "15%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "2/20+2/hp",
      "description": "Subterranean lizardfolk. Hate humans. Emit a stench in combat. Surprise prey with camouflaged skin.",
      "leaders": {
        "raiding_party": "1 leader (3 HD)",
        "war_party": "2 leaders (4 HD)",
        "lair": {
          "chief": "6 HD",
          "guards": "2d4 (3 HD)"
        }
      },
      "treasure": {
        "individual": "2d6 ep",
        "lair": {
          "cp": {"amount": "1d6×1,000", "chance": "25%"},
          "sp": {"amount": "1d6×1,000", "chance": "30%"},
          "ep": {"amount": "1d6×1,000", "chance": "35%"},
          "gp": {"amount": "1d10×1,000", "chance": "40%"},
          "pp": {"amount": "1d4×100", "chance": "25%"},
          "gems": {"amount": "4d10", "chance": "60%"},
          "jewellery": {"amount": "3d10", "chance": "50%"},
          "magic_items": {"amount": 3, "chance": "30%"}
        }
      }
    },

    {
      "name": "Troll",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Uncommon",
      "numberAppearing": "1d12",
      "size": "Large (9 ft + tall)",
      "move": "120 ft",
      "armorClass": 4,
      "hitDice": "6+6",
      "attacks": 3,
      "damage": "1d4+4/1d4+4/2d6",
      "specialAttacks": "Detached limbs attack independently",
      "specialDefenses": "Regeneration",
      "magicResistance": "Standard",
      "lairProbability": "40%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "6/525+8/hp",
      "description": "Trolls are vile, putrid creatures found in almost any climate. The hides of trolls are a sickly green or grey and they have cold black eyes.",
      "specialAbilities": {
        "regeneration": {
          "rate": "3 hp per round",
          "startTime": "After three rounds of combat",
          "limbReattachment": true,
          "weaknesses": ["Fire", "Acid"]
        },
        "detachedLimbs": "Continue to attack independently"
      },
      "treasure": {
        "lair": {
          "cp": {"amount": "1d8×1,000", "chance": "10%"},
          "sp": {"amount": "1d12×1,000", "chance": "15%"},
          "ep": {"amount": "1d8×1,000", "chance": "15%"},
          "gp": {"amount": "1d6×1,000", "chance": "50%"},
          "gems": {"amount": "1d10", "chance": "30%"},
          "jewellery": {"amount": "1d6", "chance": "25%"},
          "magic_items": {"amount": 2, "chance": "15%"},
          "potions": {"amount": 1, "chance": "15%"}
        }
      }
    },
    {
      "name": "Troll, Giant",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": "1d12",
      "size": "Large (10 ft tall)",
      "move": "120 ft",
      "armorClass": 4,
      "hitDice": 8,
      "attacks": 1,
      "damage": "2d8",
      "specialAttacks": "Dual claw attacks (1d6 each) when unarmed",
      "specialDefenses": "Regeneration",
      "magicResistance": "Standard",
      "lairProbability": "33%",
      "intelligence": "Low",
      "alignment": "Chaotic evil",
      "levelXP": "6/750 + 10/hp",
      "description": "These horrible creatures are the result of crossbreeding trolls with hill giants, resulting in a monster that looks like a troll combined with the large size and pot-belly of a hill giant. The hide of a giant troll is reddish brown and they have tough wiry black hair, bulbous nose, and red rimmed eyes.",
      "specialAbilities": {
        "regeneration": {
          "rate": "2 hp per round",
          "limitedTo": "Cannot rebond severed limbs",
          "weaknesses": ["Fire", "Acid"]
        },
        "missileDefense": "Can snatch missiles from the air 25% of the time and throw them back",
        "weapon": "Giant spiked club (2d8 damage)",
        "naturalWeapons": "Claws (1d6 each) with ability to attack two targets",
        "senses": {
          "infravision": "90 ft",
          "smell": "Acute"
        },
        "fearless": true
      },
      "treasure": {
        "cp": {"amount": "2d6×1,000", "chance": "20%"},
        "sp": {"amount": "1d6×1,000", "chance": "35%"},
        "ep": {"amount": "1d4×1,000", "chance": "15%"},
        "gems": {"amount": "1d6", "chance": "25%"},
        "jewellery": {"amount": "1d4", "chance": "25%"},
        "magic_maps": {"amount": 2, "chance": "10%"}
      }
    },
    {
      "name": "Troll, Giant Two-Headed",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Very rare",
      "numberAppearing": "1d3",
      "size": "Large (10 ft tall)",
      "move": "120 ft",
      "armorClass": 4,
      "hitDice": 10,
      "attacks": 4,
      "damage": "1d6/1d6/1d10/1d10",
      "specialAttacks": "Multiple attacks",
      "specialDefenses": "Regeneration, rarely surprised",
      "magicResistance": "Standard",
      "lairProbability": "35%",
      "intelligence": "Average",
      "alignment": "Chaotic evil",
      "levelXP": "7/1,750 + 15/hp",
      "description": "Giant two-headed trolls are the vicious offspring of trolls and ettins. In appearance they look most like trolls, though they have two heads like an ettin and prefer wearing filthy animal skins as ettins do. Giant two-headed trolls are nocturnal and prefer underground dwellings such as dungeons or caverns.",
      "specialAbilities": {
        "regeneration": {
          "rate": "1 hp per round",
          "limitedTo": "Cannot rebond severed limbs"
        },
        "dualHeads": "One head can sleep while the other stays alert; surprised only on a 1 in 6",
        "multipleAttacks": {
          "claws": {"damage": "1d6 each", "targets": "Can attack two different opponents"},
          "bites": {"damage": "1d10 each", "targets": "Must be directed at the same opponent"}
        },
        "infravision": "60 ft"
      },
      "treasure": {
        "cp": {"amount": "1d8×1,000", "chance": "20%"},
        "sp": {"amount": "1d10×1,000", "chance": "30%"},
        "ep": {"amount": "1d10×1,000", "chance": "15%"},
        "gp": {"amount": "1d6×1,000", "chance": "60%"},
        "gems": {"amount": "2d6", "chance": "35%"},
        "jewellery": {"amount": "1d6", "chance": "20%"},
        "magic": {"amount": 2, "chance": "25%"},
        "potions": {"amount": 1, "chance": "25%"}
      }
    },
    {
      "name": "Troll, Ice",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Rare",
      "numberAppearing": "1d6",
      "size": "Large (9 ft tall)",
      "move": "90 ft",
      "armorClass": 8,
      "hitDice": 2,
      "attacks": 2,
      "damage": "1d8/1d8",
      "specialAttacks": "Nil",
      "specialDefenses": "Regeneration, impervious to cold, magical weapons to hit",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Semi-",
      "alignment": "Chaotic evil",
      "levelXP": "2/45 + 2/hp",
      "description": "An ice troll has the general form of a troll but its cold, semi-transparent body seems to have been chiselled from blue-tinged ice. Ice trolls prefer underground dwellings such as dungeons or caverns and will always lair near running water if possible.",
      "specialAbilities": {
        "regeneration": {
          "rate": "2 hp per round",
          "limbReattachment": "Only if limb is immersed in water",
          "severedLimbs": "Move toward nearest body of water within 30 ft, will not attack independently"
        },
        "resistances": {
          "cold": "Immune to cold-based attacks",
          "fire": "Takes double damage from fire"
        },
        "weaponResistance": "Can only be hit with magical weapons",
        "senses": {
          "infravision": "90 ft",
          "smell": "Acute"
        },
        "racialTraits": {
          "strength": "Great",
          "fearless": true,
          "persistence": "Attacks until victorious or slain"
        }
      },
      "treasure": {
        "cp": {"amount": "1d10×1,000", "chance": "10%"},
        "sp": {"amount": "1d20×1,000", "chance": "20%"},
        "ep": {"amount": "1d6×1,000", "chance": "10%"},
        "gp": {"amount": "1d8×1,000", "chance": "40%"},
        "gems": {"amount": "1d12", "chance": "25%"},
        "jewellery": {"amount": "1d8", "chance": "25%"}
      }
    },
    {
      "name": "Troll, Spectral",
      "category": "Giants",
      "name_variants": "",
      "frequency": "Very rare",
      "numberAppearing": "1d2",
      "size": "Large (8 ft tall)",
      "move": "150 ft",
      "armorClass": 2,
      "hitDice": "5 + 5",
      "attacks": 3,
      "damage": "1d6/1d3/1d3",
      "specialAttacks": "Strength point drain",
      "specialDefenses": "Regeneration, invulnerable to cold, magical weapons to hit, invisibility",
      "magicResistance": "30%",
      "lairProbability": "Nil",
      "intelligence": "Very",
      "alignment": "Chaotic evil",
      "levelXP": "6/625 + 6/hp",
      "description": "Long ago these creatures were created in some bizarre and perverted arcane ritual merging the life essences of a troll and some extra-planar creature. Spectral trolls are invisible. Anyone able to see invisible will see a monster that appears very much like a shorter-than-normal troll with somewhat indistinct features and glowing amber eyes.",
      "specialAbilities": {
        "invisibility": "Permanently invisible",
        "regeneration": {
          "rate": "3 hp per round",
          "limbReattachment": true,
          "severedLimbs": "Continue to attack independently"
        },
        "resistances": {
          "cold": "Impervious to cold and cold-based attacks",
          "fire": "Takes damage that does not regenerate"
        },
        "weaponResistance": "Can only be hit by magical weapons",
        "specialAttacks": {
          "claws": {
            "damage": "1d3",
            "strengthDrain": "1d3 points from strength score",
            "recovery": "1 point per 2d4 turns",
            "effects": [
              {"strength0": "Death"},
              {"strength1-2": "Comatose until strength reaches 3+"}
            ]
          },
          "bite": {
            "damage": "1d6 plus creature's own hit point value"
          }
        },
        "senses": {
          "infravision": "120 ft (superior)",
          "smell": "Acute"
        },
        "racialTraits": {
          "strength": "Strong",
          "fearless": true,
          "persistence": "Attacks relentlessly until it kills its opponent or is itself slain"
        }
      }
    },

    {
      "name": "Turtle",
      "category": "Animal",
      "variants": [
        {
          "type": "Giant Sea",
          "frequency": "Uncommon",
          "numberAppearing": "1d3",
          "size": "Large",
          "move": "10 ft; 150 ft swimming",
          "armorClass": "2 (shell) or 5 (head and flippers)",
          "hitDice": 15,
          "attacks": 1,
          "damage": "4d4",
          "specialAttacks": "Overturn boats",
          "specialDefenses": "None",
          "levelXP": "7/2,400+ 20/hp"
        },
        {
          "type": "Giant Snapping",
          "frequency": "Uncommon",
          "numberAppearing": "1d4",
          "size": "Large",
          "move": "30 ft; 120 ft swimming",
          "armorClass": "0 (shell) or 5 (head and legs)",
          "hitDice": 10,
          "attacks": 1,
          "damage": "6d4",
          "specialAttacks": "Surprise on a 1-4 on d6",
          "specialDefenses": "None",
          "levelXP": "7/1,500+14/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Giant sea turtles are normally placid but fierce when threatened. They can overturn boats (90%), small ships (50%), or even huge vessels (10%). Giant snapping turtles are aggressive predators that lie in wait in shallow waters. Their lumpy shells provide excellent camouflage, and their disproportionately long necks can snap at enemies up to 10 ft away. Both turtle types can retract vulnerable parts into their shells for protection but cannot attack or move when doing so."
    },
    {
      "name": "Unicorn",
      "category": "Monster",
      "frequency": "Rare",
      "numberAppearing": "1d4+1",
      "size": "Large",
      "move": "240 ft",
      "armorClass": 2,
      "hitDice": "4+4",
      "attacks": "3 (hoof/hoof/horn)",
      "damage": "1d6/1d6/1d12",
      "specialAttacks": "Charge",
      "specialDefenses": "Save as level 11 magic user; immune to charm, hold, death magic, and poison; never surprised within 240 ft; surprise 1-5 on d6; dimension door 1/day (360 ft range)",
      "magicResistance": "Standard",
      "lairProbability": "5%",
      "intelligence": "Average",
      "alignment": "Chaotic good",
      "levelXP": "5/440 + 4 per hit point",
      "treasure": {
        "gems": {"amount": "20d4", "chance": "50%"},
        "magic_items": {"amount": "1 misc. magic item and 1 potion", "chance": "60%"}
      },
      "description": "Unicorns avoid most beings but may assist pure-hearted maidens, allowing themselves to be ridden. They charge into battle for double horn damage on initial attack. Their horn neutralizes poison with a touch."
    },
    {
      "name": "Vampire",
      "category": "Undead",
      "turnResistance": 10,
      "frequency": "Rare",
      "numberAppearing": "1d4",
      "size": "Man-sized",
      "move": "120 ft; 180 ft flying (AA:V)",
      "armorClass": 1,
      "hitDice": "8+3",
      "attacks": "1",
      "damage": "1d6+4",
      "specialAttacks": "Level drain, charm gaze, summon creatures",
      "specialDefenses": "Regeneration; gaseous form; immune to normal weapons, charm, sleep, hold, cold, electricity; affected only by magical/sacred means",
      "magicResistance": "See below",
      "lairProbability": "25%",
      "intelligence": "Exceptional",
      "alignment": "Chaotic evil",
      "levelXP": "8/3,810 +12/hp",
      "treasure": {
        "sp": {"amount": "1d20×1,000", "chance": "10%"},
        "ep": {"amount": "1d12×1,000", "chance": "10%"},
        "gp": {"amount": "1d10×1,000", "chance": "40%"},
        "pp": {"amount": "1d8×100", "chance": "35%"},
        "gems": {"amount": "3d10", "chance": "20%"},
        "jewellery": {"amount": "1d10", "chance": "10%"},
        "magic_items": {"amount": "3", "chance": "30%"}
      },
      "description": "Vampires are powerful undead with immense strength (18.76). Their touch drains two levels. They can assume gaseous form, shape-change into a bat, and summon creatures (rats, bats, wolves). Their charm gaze imposes a -2 save penalty. They recoil from garlic, mirrors, and holy symbols, and are destroyed by sunlight, running water, staking and decapitation. They regenerate 3 hp/round and create new vampires from drained victims."
    },
    {
      "name": "Walrus",
      "category": "Animal",
      "frequency": "Uncommon",
      "numberAppearing": "3d6",
      "size": "Large",
      "move": "60 ft; 180 ft swimming",
      "armorClass": 5,
      "hitDice": 6,
      "attacks": 3,
      "damage": "1d6/1d6/2d12",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "20%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "levelXP": "4/160 + 6/hp",
      "treasure": "The ivory tusks of this animal can be sold for 1d4+1×100 gp on the market.",
      "description": "Walruses are large, flippered marine mammals with long ivory tusks. Territorial and aggressive, they become more dangerous in groups. The largest males can weigh up to 4,400 lbs. They attack with clawed front flippers and tusks. Males primarily defend the herd, though females (also tusked) will fight if necessary."
    },
    {
      "name": "Water Weird",
      "category": "Extraplanar",
      "frequency": "Very rare",
      "numberAppearing": "1-3",
      "size": "Large (10'+ long)",
      "move": "120 ft",
      "armorClass": 4,
      "hitDice": "3+3",
      "attacks": 0,
      "damage": "Nil",
      "specialAttacks": "Drowning",
      "specialDefenses": "See below",
      "magicResistance": "Standard",
      "lairProbability": "50%",
      "intelligence": "Very",
      "alignment": "Chaotic evil",
      "levelXP": "3/100+3/hp",
      "treasure": "I, O, P, Y",
      "description": "Water weirds originate from the elemental plane of water. They form a serpentine shape from water in two melee rounds and strike as 6 HD monsters. Victims must save vs. paralyzation or be dragged into water. Sharp weapons cause only 1 hp damage while blunt weapons do normal damage. Disrupting a weird (damage equal to total hp) only delays it for 2 rounds before reforming. Cold spells slow it, fire spells do half/no damage, but purify water kills it. A water weird can take over a water elemental on a roll of 11+ on d20."
    },
    {
      "name": "Wasp, Giant",
      "category": "Insect",
      "frequency": "Rare",
      "numberAppearing": "1-20",
      "size": "Medium",
      "move": "60 ft/210 ft flying",
      "armorClass": 4,
      "hitDice": 4,
      "attacks": 2,
      "damage": "2-8/1-4",
      "specialAttacks": "Poison",
      "specialDefenses": "Nil",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "3/120+4/hp",
      "treasure": "Q (x20)",
      "description": "Giant wasps are feared hunters that prey on other creatures both for food and as hosts for their eggs. They attack with powerful jaws (2-8 damage) and a poisonous stinger (1-4 damage). Victims stung must save versus poison or become permanently paralyzed, dying in 2-5 days unless treated with neutralize poison or antidote. During this period, paralyzed victims are typically eaten by wasp larvae. While some giant wasps build mud nests, those building paper nests are most dangerous, as their lairs contain 21-40 adults. Their wings are highly vulnerable to fire - exposure to flames renders them flightless but doesn't otherwise harm them."
    },
    {
      "name": "Weasel",
      "category": "Animal",
      "variants": [
        {
          "type": "Huge",
          "frequency": "Uncommon",
          "numberAppearing": "2d6",
          "size": "Small",
          "move": "150 ft",
          "armorClass": 7,
          "hitDice": "1+1",
          "attacks": 1,
          "damage": "1d8",
          "specialAttacks": "Blood drain",
          "specialDefenses": "None",
          "levelXP": "2/40+2/hp"
        },
        {
          "type": "Giant",
          "frequency": "Rare",
          "numberAppearing": "1d8",
          "size": "Medium",
          "move": "150 ft",
          "armorClass": 6,
          "hitDice": "3+3",
          "attacks": 1,
          "damage": "2d6",
          "specialAttacks": "Blood drain",
          "specialDefenses": "None",
          "levelXP": "3/75+3/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Animal",
      "alignment": "Neutral",
      "treasure": "Huge weasel pelts sell for 1d6×100 gp, giant weasel pelts for twice that amount or more.",
      "description": "Huge and giant weasels typically inhabit forests, though some may be found in dungeons. After a successful bite attack, they drain blood continuously (1d8 hp per round for huge weasels, 2d6 hp per round for giant weasels). Their pelts are valuable."
    },
    {
      "name": "Whale",
      "category": "Animal",
      "frequency": "Common",
      "numberAppearing": "1d8",
      "size": "Large",
      "move": "180 ft to 240 ft swimming",
      "armorClass": 4,
      "hitDice": "12 to 36",
      "attacks": "1 bite or 1 tail",
      "damage": "5-15 d4 (bite), 1-5 d8 (tail)",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Low",
      "alignment": "Neutral",
      "levelXP": "Varies according to hit dice",
      "treasure": "Whale ambergris from a single whale is worth 1d20×1,000 gp. Whale meat is worth 100 gp per hit die. Additionally, 1% chance each of finding cp, sp, ep, pp, gems, jewellery, and magic items in stomach.",
      "description": "Whales vary considerably in size between species. Larger specimens can swallow prey whole, with digestive juices causing 1 hp damage per turn. Whales will disgorge prey that attack from inside, though possibly in deep water where escape is difficult."
    },
    {
      "name": "Wight",
      "category": "Undead",
      "turnResistance": 5,
      "frequency": "Uncommon",
      "numberAppearing": "2d8",
      "size": "Man-sized",
      "move": "120 ft",
      "armorClass": 5,
      "hitDice": "4+3",
      "attacks": "1 (claw)",
      "damage": "1d4 + level drain",
      "specialAttacks": "Level drain",
      "specialDefenses": "Silver or magic weapon required to hit; spell immunities",
      "magicResistance": "Standard",
      "lairProbability": "70%",
      "intelligence": "Average",
      "alignment": "Lawful evil",
      "levelXP": "6/590 +4/hp",
      "treasure": {
        "cp": {"amount": "1d8×1,000", "chance": "50%"},
        "sp": {"amount": "1d6×1,000", "chance": "25%"},
        "ep": {"amount": "1d4×1,000", "chance": "25%"},
        "gp": {"amount": "1d3×1,000", "chance": "25%"},
        "gems": {"amount": "1d8", "chance": "30%"},
        "jewellery": {"amount": "1d4", "chance": "20%"},
        "magic_items": {"amount": "1", "chance": "10%"}
      },
      "description": "Wights are undead corpses with twisted intelligence. Their touch drains one level of experience permanently. Although not harmed by sunlight, they avoid daylight. Immune to sleep, hold, cold, and enchantment spells. Holy water deals 2d4 damage per vial, and raise dead destroys them. Victims they kill become wights under their control."
    },
    {
      "name": "Will-O-(The)-Wisp",
      "category": "Monster",
      "frequency": "Uncommon",
      "numberAppearing": "1 (or 1-3)",
      "size": "Small",
      "move": "180 ft",
      "armorClass": -8,
      "hitDice": 9,
      "attacks": 1,
      "damage": "2-16",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "See below",
      "lairProbability": "5%",
      "intelligence": "Exceptional",
      "alignment": "Chaotic evil",
      "levelXP": "6/900+12/hp",
      "treasure": "Z",
      "description": "Will-o-wisps haunt dangerous places like bogs and catacombs, luring victims to hazards to feed on their life force. Their electrical attack causes 2-16 damage. They can glow brightly or dimly to confuse prey, and can extinguish their glow entirely for 2-8 rounds (detectable only by see invisible). Most spells don't affect them except protection from evil, magic missile, and maze. If reduced to 5 or fewer hp, they reveal their lair and surrender treasure. They appear as glowing spheres resembling lanterns or torches, glowing blue, violet, or pale green in combat."
    },
    {
      "name": "Wind Walker",
      "category": "Extraplanar",
      "frequency": "Rare",
      "numberAppearing": "1-3",
      "size": "Large",
      "move": "150 ft/300 ft",
      "armorClass": 7,
      "hitDice": "6+3",
      "attacks": "See below",
      "damage": "3-18",
      "specialAttacks": "See below",
      "specialDefenses": "See below",
      "magicResistance": "See below",
      "lairProbability": "20%",
      "intelligence": "Very",
      "alignment": "Neutral",
      "levelXP": "5/350+6/hp",
      "treasure": "C, R",
      "description": "Wind walkers are air elementals that inhabit high mountains or deep caverns. Their approach can be detected at 100-300 ft as whistling, howling, or roaring sounds. They are telepathic, detecting thoughts at 100-300 ft by working in series. They attack with wind force, causing 3-18 damage per turn to all creatures within 10 ft. Being ethereal, they can only be fought by certain creatures (djinn, efreet, invisible stalkers, aerial servants) or affected by specific spells: control weather (kills if save fails), slow (damages like fireball), ice storm (drives away 1-4 rounds). Haste does half damage but doubles their damage output. Magical barriers stop them, but they pursue for 2-5 rounds minimum."
    },
    {
      "name": "Wolf",
      "category": "Animal",
      "variants": [
        {
          "type": "Normal",
          "frequency": "Common",
          "numberAppearing": "3d10",
          "size": "Small",
          "move": "180 ft",
          "armorClass": 7,
          "hitDice": "2+2",
          "attacks": 1,
          "damage": "1d4+1",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "2/50 + 2/hp"
        },
        {
          "type": "Dire",
          "frequency": "Rare",
          "numberAppearing": "3d4",
          "size": "Medium",
          "move": "180 ft",
          "armorClass": 6,
          "hitDice": "3+3",
          "attacks": 1,
          "damage": "2d4",
          "specialAttacks": "None",
          "specialDefenses": "None",
          "levelXP": "3/75+3/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Semi-",
      "alignment": "Neutral",
      "treasure": "None",
      "description": "Wolves are pack hunters (up to 30), standing 26-30 inches tall at the shoulder with males weighing 80-100 lbs. Their howling may panic horses and other herbivores (50% chance). Packs encircle prey, preferring to attack from behind, and often (75%) follow potential prey waiting for an opportune moment. Dire wolves are massive prehistoric ancestors with similar hunting tactics."
    },
    {
      "name": "Wolverine",
      "category": "Animal",
      "variants": [
        {
          "type": "Normal",
          "frequency": "Uncommon",
          "numberAppearing": "1",
          "size": "Small",
          "move": "120 ft",
          "armorClass": 5,
          "hitDice": 3,
          "attacks": 3,
          "damage": "1d4/1d4/1d4+1",
          "specialAttacks": "Musk, +4 to hit",
          "specialDefenses": "None",
          "levelXP": "3/125+2/hp"
        },
        {
          "type": "Giant",
          "frequency": "Rare",
          "numberAppearing": "1",
          "size": "Medium",
          "move": "150 ft",
          "armorClass": 4,
          "hitDice": "4+4",
          "attacks": 3,
          "damage": "1d6/1d6/2d4",
          "specialAttacks": "Musk, +4 to hit",
          "specialDefenses": "None",
          "levelXP": "4/235+4/hp"
        }
      ],
      "magicResistance": "Standard",
      "lairProbability": "15%",
      "intelligence": "Semi-",
      "alignment": "Neutral Evil",
      "treasure": "None",
      "description": "Wolverines are deadly predators resembling a cross between huge weasels and small bears. These cold-weather hunters spray musk in a 60 ft cone, requiring a save vs poison or causing blindness for 1d8 hours. Regardless of save, victims within the musk cloud have Strength and Dexterity effectively halved. Their savagery and speed grants them +4 on attacks. They are intelligent enough to set ambushes and to have evil alignment."
    },
    {
      "name": "Worg",
      "category": "Animal",
      "frequency": "Rare",
      "numberAppearing": "3d4",
      "size": "Large",
      "move": "180 ft",
      "armorClass": 6,
      "hitDice": "4+4",
      "attacks": "1 bite",
      "damage": "2d4",
      "specialAttacks": "None",
      "specialDefenses": "None",
      "magicResistance": "Standard",
      "lairProbability": "10%",
      "intelligence": "Low",
      "alignment": "Neutral evil",
      "levelXP": "3/75+3/hp",
      "treasure": "None",
      "description": "Worgs are evil wolves of great size, standing 4-5 ft tall at the shoulder and weighing 600-700 lbs. They speak their own language and often cooperate with goblin tribes."
    },
    
    {
      "name": "Wraith",
      "category": "Undead",
      "turnResistance": 7,
      "frequency": "Uncommon",
      "numberAppearing": "2d6",
      "size": "Man-sized",
      "move": "120 ft; 240 ft flying (AA:IV)",
      "armorClass": 4,
      "hitDice": "5+3",
      "attacks": "1",
      "damage": "1d6 + level drain",
      "specialAttacks": "Level drain",
      "specialDefenses": "Only hit by silver or magic weapons; immune to cold, charm, sleep, hold",
      "magicResistance": "Standard",
      "lairProbability": "25%",
      "intelligence": "Very",
      "alignment": "Lawful evil",
      "levelXP": "6/550 +6/hp",
      "treasure": {
        "cp": {"amount": "1d10×1,000", "chance": "5%"},
        "sp": {"amount": "1d12×1,000", "chance": "25%"},
        "ep": {"amount": "1d6×1,000", "chance": "25%"},
        "gp": {"amount": "1d8×1,000", "chance": "25%"},
        "gems": {"amount": "1d12", "chance": "15%"},
        "jewellery": {"amount": "1d8", "chance": "10%"},
        "magic_items": {"amount": "3 + 1 scroll", "chance": "25%"}
      },
      "description": "Wraiths are shadowy undead partially existing in the negative material plane. Their touch drains one level of experience (except in sunlight). Silver weapons do half damage, magical weapons do full damage. They are immune to cold, charm, sleep, and hold spells."
    },
    {
      "name": "Wyvern",
      "category": "Dragon",
      "frequency": "Uncommon",
      "numberAppearing": "1-6",
      "size": "Large (35' long)",
      "move": "60 ft/240 ft flying",
      "armorClass": 3,
      "hitDice": "7+7",
      "attacks": 2,
      "damage": "2-16/1-4",
      "specialAttacks": "Poison",
      "specialDefenses": "Nil",
      "magicResistance": "Standard",
      "lairProbability": "30%",
      "intelligence": "Low",
      "alignment": "Neutral (evil)",
      "levelXP": "6/800+10/hp",
      "treasure": "E",
      "description": "Wyverns are distant dragon relatives that inhabit similar environments - tangled forests and great caverns. Despite low intelligence, they're highly aggressive and always attack. Their primary weapons are a powerful bite (2-16 damage) and a stinger-equipped tail that can reach over their back to strike. The tail's poison kills unless a saving throw is made, and even with a successful save it inflicts 1-6 damage. They appear dark brown to gray with orange or red eyes."
    },
    {
      "name": "Zombie",
      "name_variants": "Normal",
      "category": "Undead",
      "turnResistance": 2,
      "frequency": "Rare",
      "numberAppearing": "3d8",
      "size": "Man-sized",
      "move": "60 ft",
      "armorClass": 8,
      "hitDice": "2",
      "attacks": "1",
      "damage": "1d8",
      "specialAttacks": "None",
      "specialDefenses": "See below",
      "magicResistance": "Standard",
      "lairProbability": "Nil",
      "intelligence": "Non-",
      "alignment": "Neutral",
      "levelXP": "2/30+1/hp",
      "treasure": "None",
      "description": "Zombies are animated corpses that attack last in each round regardless of initiative. Once engaged, they never flee unless turned. Immune to enchantments, hold spells, and cold-based magic."
    },
    {
      "name": "Zombie, Juju",
      "category": "Undead",
      "turnResistance": 9,
      "frequency": "Very rare",
      "numberAppearing": "1d6",
      "size": "Man-sized",
      "move": "90 ft",
      "armorClass": 6,
      "hitDice": "3+12",
      "attacks": "1",
      "damage": "2d6+1",
      "specialAttacks": "See below",
      "specialDefenses": "Can only be hit with magic weapons",
      "magicResistance": "See below",
      "lairProbability": "Nil",
      "intelligence": "Low",
      "alignment": "Neutral (evil)",
      "levelXP": "3/115 +4/hp",
      "treasure": "None",
      "description": "Juju zombies are created through forbidden necromancy, draining all life force from victims. They move faster than regular zombies, have thief-like climbing abilities, attack as 6 HD monsters, and can use missile weapons. They can only be hit by magic weapons (piercing/blunt do half damage)."
    }
    // end of monsters
  ]
}
// end of file
 