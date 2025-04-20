export const DMG_SUBTABLES = {
    humanoids: {
      plain: ["Gnoll", "Goblin", "Hobgoblin", "Orc"],
      scrub: ["Gnoll", "Goblin", "Hobgoblin", "Kobold", "Orc"],
      forest: ["Gnoll", "Goblin", "Hobgoblin", "Kobold", "Orc"],
      rough: ["Gnoll", "Goblin", "Hobgoblin", "Kobold", "Orc"],
      desert: ["Goblin", "Hobgoblin", "Orc"],
      hills: ["Gnoll", "Goblin", "Hobgoblin", "Orc"],
      mountains: ["Gnoll", "Goblin", "Hobgoblin", "Orc"],
      marsh: ["Gnoll", "Goblin", "Hobgoblin", "Orc"],
      // Number ranges for each creature type by terrain
      ranges: {
        plain: {
          "Gnoll": "01-05",
          "Goblin": "06-10",
          "Hobgoblin": "11-15",
          "Orc": "16-00"
        },
        scrub: {
          "Gnoll": "01-10",
          "Goblin": "11-15",
          "Hobgoblin": "16-50",
          "Kobold": "51-80",
          "Orc": "81-00"
        },
        forest: {
          "Gnoll": "01-10",
          "Goblin": "11-20",
          "Hobgoblin": "21-30",
          "Kobold": "31-80",
          "Orc": "81-00"
        },
        rough: {
          "Gnoll": "01-20",
          "Goblin": "21-30",
          "Hobgoblin": "31-50",
          "Kobold": "51-55",
          "Orc": "56-00"
        },
        desert: {
          "Goblin": "01-40",
          "Hobgoblin": "41-90",
          "Orc": "91-00"
        },
        hills: {
          "Gnoll": "01-25",
          "Goblin": "26-50",
          "Hobgoblin": "51-75",
          "Orc": "76-00"
        },
        mountains: {
          "Gnoll": "01-15",
          "Goblin": "16-50",
          "Hobgoblin": "51-65",
          "Orc": "66-00"
        },
        marsh: {
          "Gnoll": "01-25",
          "Goblin": "26-35",
          "Hobgoblin": "36-75",
          "Orc": "76-00"
        }
      }
    },
  
    demiHumans: {
      plain: ["Dwarf", "Elf", "Gnome", "Halfling"],
      scrub: ["Dwarf", "Elf", "Gnome", "Halfling"],
      forest: ["Dwarf", "Elf", "Gnome", "Halfling"],
      rough: ["Dwarf", "Elf", "Gnome", "Halfling"],
      hills: ["Dwarf", "Elf", "Gnome", "Halfling"],
      mountains: ["Dwarf", "Elf", "Gnome", "Halfling"],
      // Number ranges for each creature type by terrain
      ranges: {
        plain: {
          "Dwarf": "01-05",
          "Elf": "06-70",
          "Gnome": "71-80",
          "Halfling": "81-00"
        },
        scrub: {
          "Dwarf": "01-05",
          "Elf": "06-60",
          "Gnome": "61-80",
          "Halfling": "81-00"
        },
        forest: {
          "Dwarf": "01-05",
          "Elf": "06-70",
          "Gnome": "71-95",
          "Halfling": "96-00"
        },
        rough: {
          "Dwarf": "01-10",
          "Elf": "11-15",
          "Gnome": "16-85",
          "Halfling": "86-00"
        },
        hills: {
          "Dwarf": "01-20",
          "Elf": "21-30",
          "Gnome": "31-70",
          "Halfling": "71-00"
        },
        mountains: {
          "Dwarf": "01-70",
          "Elf": "71-75",
          "Gnome": "76-95",
          "Halfling": "96-00"
        }
      }
    },
  
    giants: {
      plain: ["Cloud Giant", "Ettin", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant", "Titan"],
      scrub: ["Cloud Giant", "Ettin", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant", "Titan"],
      forest: ["Cloud Giant", "Ettin", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant", "Titan"],
      rough: ["Cloud Giant", "Ettin", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant", "Titan"],
      hills: ["Cloud Giant", "Ettin", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant", "Titan"],
      mountains: ["Cloud Giant", "Ettin", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant", "Titan"],
      // Number ranges for each creature type by terrain
      ranges: {
        plain: {
          "Cloud Giant": "01-02",
          "Ettin": "03-04",
          "Fire Giant": "05-06",
          "Frost Giant": "07-08",
          "Hill Giant": "09-95",
          "Stone Giant": "96-98",
          "Storm Giant": "99",
          "Titan": "00"
        },
        scrub: {
          "Cloud Giant": "01-02",
          "Ettin": "03-05",
          "Fire Giant": "06-07",
          "Frost Giant": "08-09",
          "Hill Giant": "10-94",
          "Stone Giant": "95-98",
          "Storm Giant": "99",
          "Titan": "00"
        },
        forest: {
          "Cloud Giant": "01-02",
          "Ettin": "03-10",
          "Fire Giant": "11-12",
          "Frost Giant": "13-14",
          "Hill Giant": "15-93",
          "Stone Giant": "94-98",
          "Storm Giant": "99",
          "Titan": "00"
        },
        rough: {
          "Cloud Giant": "01-02",
          "Ettin": "03-10",
          "Fire Giant": "11-20",
          "Frost Giant": "21-25",
          "Hill Giant": "26-85",
          "Stone Giant": "86-98",
          "Storm Giant": "99",
          "Titan": "00"
        },
        hills: {
          "Cloud Giant": "01-03",
          "Ettin": "04-10",
          "Fire Giant": "11-15",
          "Frost Giant": "16-20",
          "Hill Giant": "21-81",
          "Stone Giant": "81-98",
          "Storm Giant": "99",
          "Titan": "00"
        },
        mountains: {
          "Cloud Giant": "01-15",
          "Ettin": "16-20",
          "Fire Giant": "21-30",
          "Frost Giant": "31-45",
          "Hill Giant": "46-50",
          "Stone Giant": "51-90",
          "Storm Giant": "91-98",
          "Titan": "99-00"
        }
      }
    },
  
    men: {
      plain: ["Bandit", "Berserker", "Brigand", "Dervish", "Merchant", "Nomad", "Pilgrim", "Tribesman"],
      scrub: ["Bandit", "Berserker", "Brigand", "Dervish", "Merchant", "Nomad", "Pilgrim", "Tribesman"],
      forest: ["Bandit", "Brigand", "Merchant", "Pilgrim", "Tribesman"],
      rough: ["Bandit", "Berserker", "Brigand", "Dervish", "Merchant", "Nomad", "Pilgrim", "Tribesman"],
      desert: ["Bandit", "Brigand", "Dervish", "Merchant", "Nomad", "Pilgrim"],
      hills: ["Bandit", "Berserker", "Brigand", "Dervish", "Merchant", "Nomad", "Pilgrim", "Tribesman"],
      mountains: ["Bandit", "Berserker", "Brigand", "Merchant", "Nomad", "Pilgrim", "Tribesman"],
      marsh: ["Bandit", "Brigand", "Merchant", "Pilgrim", "Tribesman"],
      // Number ranges for each creature type by terrain (with character type handled separately - 10% in all cases)
      ranges: {
        plain: {
          "Bandit": "01-05",
          "Berserker": "06-07",
          "Brigand": "08-10",
          "Dervish": "21-22",
          "Merchant": "23-60",
          "Nomad": "61-90",
          "Pilgrim": "91-95",
          "Tribesman": "96-00"
        },
        scrub: {
          "Bandit": "01-10",
          "Berserker": "11-12",
          "Brigand": "13-15",
          "Dervish": "26-27",
          "Merchant": "28-60",
          "Nomad": "61-80",
          "Pilgrim": "81-85",
          "Tribesman": "86-00"
        },
        forest: {
          "Bandit": "01-10",
          "Brigand": "11-15",
          "Merchant": "26-40",
          "Pilgrim": "41-45",
          "Tribesman": "46-00"
        },
        rough: {
          "Bandit": "01-10",
          "Berserker": "11-12",
          "Brigand": "13-15",
          "Dervish": "26-27",
          "Merchant": "28-50",
          "Nomad": "51-60",
          "Pilgrim": "61-80",
          "Tribesman": "81-00"
        },
        desert: {
          "Bandit": "01-05",
          "Brigand": "06-10",
          "Dervish": "21-50",
          "Merchant": "51-75",
          "Nomad": "76-95",
          "Pilgrim": "96-00"
        },
        hills: {
          "Bandit": "01-10",
          "Berserker": "11-12",
          "Brigand": "13-20",
          "Dervish": "31-40",
          "Merchant": "41-65",
          "Nomad": "66-80",
          "Pilgrim": "81-90",
          "Tribesman": "91-00"
        },
        mountains: {
          "Bandit": "01-05",
          "Berserker": "06-10",
          "Brigand": "11-20",
          "Dervish": "31-35",
          "Merchant": "36-50",
          "Pilgrim": "51-65",
          "Tribesman": "66-00"
        },
        marsh: {
          "Bandit": "01-05",
          "Brigand": "06-10",
          "Merchant": "21-35",
          "Pilgrim": "36-30", // Note: This range seems off in the original (36-30)
          "Tribesman": "31-00"
        }
      }
    },
  
    undead: {
      forest: ["Ghast", "Ghost", "Ghoul", "Lich", "Shadow", "Spectre", "Vampire", "Wight", "Wraith"],
      rough: ["Ghast", "Ghost", "Ghoul", "Lich", "Mummy", "Shadow", "Spectre", "Vampire", "Wight", "Wraith"],
      hills: ["Ghast", "Ghost", "Ghoul", "Lich", "Mummy", "Shadow", "Spectre", "Vampire", "Wight", "Wraith"],
      mountains: ["Ghast", "Ghost", "Ghoul", "Lich", "Mummy", "Shadow", "Spectre", "Vampire", "Wight", "Wraith"],
      marsh: ["Ghast", "Ghost", "Ghoul", "Shadow", "Spectre", "Vampire", "Wraith"],
      // Number ranges for each creature type by terrain
      ranges: {
        forest: {
          "Ghast": "01-10",
          "Ghost": "11-12",
          "Ghoul": "13-55",
          "Lich": "56",
          "Shadow": "57-70",
          "Spectre": "71-79",
          "Vampire": "80-89",
          "Wight": "90-96",
          "Wraith": "97-00"
        },
        rough: {
          "Ghast": "01-15",
          "Ghost": "16-20",
          "Ghoul": "21-55",
          "Lich": "56-60",
          "Mummy": "61-70",
          "Shadow": "71-84",
          "Spectre": "85-87",
          "Vampire": "88-89",
          "Wight": "90-98",
          "Wraith": "99-00"
        },
        hills: {
          "Ghast": "01-10",
          "Ghost": "11-12",
          "Ghoul": "13-35",
          "Lich": "36-40",
          "Mummy": "41-55",
          "Shadow": "56-61",
          "Spectre": "62-64",
          "Vampire": "65-74",
          "Wight": "75-97",
          "Wraith": "98-00"
        },
        mountains: {
          "Ghast": "01-10",
          "Ghost": "11-13",
          "Ghoul": "14-30",
          "Lich": "31-35",
          "Mummy": "36-40",
          "Shadow": "41-50",
          "Spectre": "51-60",
          "Vampire": "61-75",
          "Wight": "76-94",
          "Wraith": "95-00"
        },
        marsh: {
          "Ghast": "01-15",
          "Ghost": "16-18",
          "Ghoul": "19-75",
          "Shadow": "76-81",
          "Spectre": "82-91",
          "Vampire": "92-93",
          "Wraith": "94-00"
        }
      }
    },
  
    lycanthropes: {
      plain: ["Werebear", "Wereboar", "Wererat", "Weretiger", "Werewolf"],
      forest: ["Werebear", "Wereboar", "Weretiger", "Werewolf"],
      rough: ["Werebear", "Wereboar", "Wererat", "Weretiger", "Werewolf"],
      hills: ["Werebear", "Wereboar", "Wererat", "Weretiger", "Werewolf"],
      mountains: ["Werebear", "Wererat", "Weretiger", "Werewolf"],
      // Number ranges for each creature type by terrain
      ranges: {
        plain: {
          "Werebear": "01-02",
          "Wereboar": "03-25",
          "Wererat": "26-30",
          "Weretiger": "31-40",
          "Werewolf": "41-00"
        },
        forest: {
          "Werebear": "01-10",
          "Wereboar": "11-70",
          "Weretiger": "71-90",
          "Werewolf": "91-00"
        },
        rough: {
          "Werebear": "01-02",
          "Wereboar": "03-15",
          "Wererat": "16-90",
          "Werewolf": "91-00"
        },
        hills: {
          "Werebear": "01-02",
          "Wereboar": "03-15",
          "Wererat": "16-20",
          "Weretiger": "21-30",
          "Werewolf": "31-00"
        },
        mountains: {
          "Werebear": "01-75",
          "Wererat": "76-80",
          "Weretiger": "81-90",
          "Werewolf": "91-00"
        }
      }
    },
  
    dragons: {
      plain: ["Black", "Blue", "Brass", "Bronze", "Chimera", "Copper", "Gold", "Green", "Red", "White", "Wyvern"],
      scrub: ["Black", "Blue", "Brass", "Bronze", "Chimera", "Copper", "Gold", "Green", "Red", "White", "Wyvern"],
      forest: ["Black", "Blue", "Brass", "Bronze", "Chimera", "Copper", "Gold", "Green", "Red", "White", "Wyvern"],
      rough: ["Black", "Blue", "Brass", "Bronze", "Chimera", "Copper", "Gold", "Green", "Red", "White", "Wyvern"],
      desert: ["Black", "Blue", "Brass", "Bronze", "Chimera", "Copper", "Gold", "Green", "Red", "White", "Wyvern"],
      hills: ["Black", "Blue", "Brass", "Bronze", "Chimera", "Copper", "Gold", "Green", "Red", "White", "Wyvern"],
      mountains: ["Black", "Blue", "Brass", "Bronze", "Chimera", "Copper", "Gold", "Green", "Red", "White", "Wyvern"],
      marsh: ["Black", "Blue", "Brass", "Bronze", "Chimera", "Copper", "Gold", "Green", "Red", "White", "Wyvern"],
      // Number ranges for each creature type by terrain (base 50% chance of encounter while creature airborne)
      ranges: {
        plain: {
          "Black": "01-02",
          "Blue": "03-04",
          "Brass": "05-06",
          "Bronze": "07-08",
          "Chimera": "09-10",
          "Copper": "11-12",
          "Gold": "13-28",
          "Green": "29-30",
          "Red": "31-32",
          "White": "33-34",
          "Wyvern": "35-00"
        },
        scrub: {
          "Black": "01-02",
          "Blue": "03-04",
          "Brass": "05-06",
          "Bronze": "07-08",
          "Chimera": "09-10",
          "Copper": "11-14",
          "Gold": "15-16",
          "Green": "17-36",
          "Red": "37-38",
          "White": "39-40",
          "Wyvern": "41-00"
        },
        forest: {
          "Black": "01-16",
          "Blue": "17-18",
          "Brass": "19-20",
          "Bronze": "21-22",
          "Chimera": "24-30",
          "Copper": "31-35",
          "Gold": "36-40",
          "Green": "41-80",
          "Red": "81-82",
          "White": "83-84",
          "Wyvern": "85-00"
        },
        rough: {
          "Black": "01-30",
          "Blue": "31-32",
          "Brass": "33-40",
          "Bronze": "41-45",
          "Chimera": "46-50",
          "Copper": "51-55",
          "Gold": "56-57",
          "Green": "58-59",
          "Red": "60-64",
          "White": "65-66",
          "Wyvern": "67-00"
        },
        desert: {
          "Black": "01-02",
          "Blue": "03-20",
          "Brass": "21-65",
          "Bronze": "66-67",
          "Chimera": "68-70",
          "Copper": "71-80",
          "Gold": "81-82",
          "Green": "83-84",
          "Red": "85-88",
          "White": "89-90",
          "Wyvern": "91-00"
        },
        hills: {
          "Black": "01-06",
          "Blue": "07-10",
          "Brass": "11-20",
          "Bronze": "21-25",
          "Chimera": "26-35",
          "Copper": "36-45",
          "Gold": "46-50",
          "Green": "51-52",
          "Red": "53-60",
          "White": "61-65",
          "Wyvern": "66-00"
        },
        mountains: {
          "Black": "01-04",
          "Blue": "05-15",
          "Brass": "16-17",
          "Bronze": "18-25",
          "Chimera": "26-30",
          "Copper": "31-40",
          "Gold": "41-45",
          "Green": "46-47",
          "Red": "48-60",
          "White": "61-95",
          "Wyvern": "96-00"
        },
        marsh: {
          "Black": "01-50",
          "Blue": "51-52",
          "Brass": "53-54",
          "Bronze": "55-56",
          "Chimera": "57-58",
          "Copper": "59-60",
          "Gold": "61-62",
          "Green": "63-75",
          "Red": "76-77",
          "White": "78-79",
          "Wyvern": "80-00"
        }
      }
    },
  
    frogs: {
      marsh: ["Giant Frog", "Killer Frog", "Poisonous Frog"],
      // Number ranges for each creature type by terrain
      ranges: {
        marsh: {
          "Giant Frog": "01-70",
          "Killer Frog": "71-80",
          "Poisonous Frog": "81-00"
        }
      }
    },
  
    snakes: {
      plain: ["Amphisbaena", "Poisonous Snake"],
      scrub: ["Amphisbaena", "Constrictor Snake", "Poisonous Snake", "Spitting Snake"],
      forest: ["Constrictor Snake", "Poisonous Snake", "Spitting Snake"],
      rough: ["Constrictor Snake", "Poisonous Snake", "Spitting Snake"],
      desert: ["Amphisbaena", "Poisonous Snake", "Spitting Snake"],
      hills: ["Amphisbaena", "Constrictor Snake", "Poisonous Snake", "Spitting Snake"],
      mountains: ["Poisonous Snake", "Spitting Snake"],
      marsh: ["Constrictor Snake", "Poisonous Snake"],
      // Number ranges for each creature type by terrain
      ranges: {
        plain: {
          "Amphisbaena": "01-10",
          "Poisonous Snake": "11-80",
          "Spitting Snake": "81-00"
        },
        scrub: {
          "Amphisbaena": "01-05",
          "Constrictor Snake": "06-10",
          "Poisonous Snake": "11-80",
          "Spitting Snake": "81-00"
        },
        forest: {
          "Constrictor Snake": "01-65",
          "Poisonous Snake": "66-95",
          "Spitting Snake": "96-00"
        },
        rough: {
          "Constrictor Snake": "01-05",
          "Poisonous Snake": "06-95",
          "Spitting Snake": "96-00"
        },
        desert: {
          "Amphisbaena": "01-15",
          "Poisonous Snake": "16-90",
          "Spitting Snake": "91-00"
        },
        hills: {
          "Amphisbaena": "01-05",
          "Constrictor Snake": "06-10",
          "Poisonous Snake": "11-90",
          "Spitting Snake": "91-00"
        },
        mountains: {
          "Poisonous Snake": "01-90",
          "Spitting Snake": "91-00"
        },
        marsh: {
          "Constrictor Snake": "01-70",
          "Poisonous Snake": "71-00"
        }
      }
    },
  
    sphinxes: {
      forest: ["Androsphinx", "Criosphinx", "Gynosphinx", "Hieracosphinx"],
      rough: ["Androsphinx", "Criosphinx", "Gynosphinx", "Hieracosphinx"],
      desert: ["Androsphinx", "Criosphinx", "Gynosphinx", "Hieracosphinx"],
      hills: ["Androsphinx", "Criosphinx", "Gynosphinx", "Hieracosphinx"],
      mountains: ["Androsphinx", "Criosphinx", "Gynosphinx", "Hieracosphinx"],
      marsh: ["Androsphinx", "Criosphinx", "Gynosphinx", "Hieracosphinx"],
      // Number ranges for each creature type by terrain
      ranges: {
        forest: {
          "Androsphinx": "01-05",
          "Criosphinx": "06-75",
          "Gynosphinx": "76-80",
          "Hieracosphinx": "81-00"
        },
        rough: {
          "Androsphinx": "01-10",
          "Criosphinx": "11-30",
          "Gynosphinx": "31-50",
          "Hieracosphinx": "51-00"
        },
        desert: {
          "Androsphinx": "01-40",
          "Criosphinx": "41-50",
          "Gynosphinx": "51-90",
          "Hieracosphinx": "91-00"
        },
        hills: {
          "Androsphinx": "01-10",
          "Criosphinx": "11-70",
          "Gynosphinx": "71-80",
          "Hieracosphinx": "81-00"
        },
        mountains: {
          "Androsphinx": "01-15",
          "Criosphinx": "16-35",
          "Gynosphinx": "36-55",
          "Hieracosphinx": "56-00"
        },
        marsh: {
          "Androsphinx": "01-05",
          "Criosphinx": "06-55",
          "Gynosphinx": "56-65",
          "Hieracosphinx": "66-00"
        }
      }
    },
  
    spiders: {
      plain: ["Huge Spider", "Large Spider"],
      scrub: ["Huge Spider", "Large Spider"],
      forest: ["Giant Spider", "Huge Spider", "Large Spider", "Phase Spider"],
      rough: ["Huge Spider", "Large Spider"],
      desert: ["Large Spider"],
      hills: ["Huge Spider", "Large Spider"],
      // Number ranges for each creature type by terrain
      ranges: {
        plain: {
          "Huge Spider": "01-15",
          "Large Spider": "16-00"
        },
        scrub: {
          "Huge Spider": "01-25",
          "Large Spider": "26-00"
        },
        forest: {
          "Giant Spider": "01-55",
          "Huge Spider": "56-75",
          "Large Spider": "76-80",
          "Phase Spider": "81-00"
        },
        rough: {
          "Huge Spider": "01-20",
          "Large Spider": "21-00"
        },
        desert: {
          "Large Spider": "01-00"
        },
        hills: {
          "Huge Spider": "01-20",
          "Large Spider": "21-00"
        }
      }
    }
  };