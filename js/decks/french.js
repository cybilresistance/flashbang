// French to English Vocabulary — 200 words across 5 difficulty levels

const cards = [
  // ===== TRANCHE 1 (1-50) =====

  // Level 1 — Beginner essentials
  { word: "bonjour", definition: "Hello; good morning", level: 1 },
  { word: "merci", definition: "Thank you", level: 1 },
  { word: "s'il vous plaît", definition: "Please (formal)", level: 1 },
  { word: "oui", definition: "Yes", level: 1 },
  { word: "non", definition: "No", level: 1 },
  { word: "au revoir", definition: "Goodbye", level: 1 },
  { word: "bonsoir", definition: "Good evening", level: 1 },
  { word: "excusez-moi", definition: "Excuse me", level: 1 },
  { word: "pardon", definition: "Sorry; pardon me", level: 1 },
  { word: "comment", definition: "How", level: 1 },
  { word: "pourquoi", definition: "Why", level: 1 },
  { word: "combien", definition: "How much; how many", level: 1 },
  { word: "aujourd'hui", definition: "Today", level: 1 },
  { word: "demain", definition: "Tomorrow", level: 1 },
  { word: "hier", definition: "Yesterday", level: 1 },
  { word: "toujours", definition: "Always; still", level: 1 },
  { word: "jamais", definition: "Never", level: 1 },
  { word: "maintenant", definition: "Now", level: 1 },
  { word: "aussi", definition: "Also; too", level: 1 },
  { word: "très", definition: "Very", level: 1 },

  // Level 2 — Elementary
  { word: "cependant", definition: "However; nevertheless", level: 2 },
  { word: "d'accord", definition: "Okay; agreed", level: 2 },
  { word: "environ", definition: "About; approximately", level: 2 },
  { word: "plutôt", definition: "Rather; instead", level: 2 },
  { word: "surtout", definition: "Especially; above all", level: 2 },
  { word: "bientôt", definition: "Soon", level: 2 },
  { word: "dehors", definition: "Outside", level: 2 },
  { word: "partout", definition: "Everywhere", level: 2 },
  { word: "ailleurs", definition: "Elsewhere", level: 2 },
  { word: "ensemble", definition: "Together", level: 2 },

  // Level 3 — Intermediate
  { word: "malgré", definition: "Despite; in spite of", level: 3 },
  { word: "néanmoins", definition: "Nevertheless; nonetheless", level: 3 },
  { word: "auparavant", definition: "Before; previously", level: 3 },
  { word: "davantage", definition: "More; further", level: 3 },
  { word: "désormais", definition: "From now on; henceforth", level: 3 },

  // Level 4 — Advanced
  { word: "quoique", definition: "Although; even though", level: 4 },
  { word: "en revanche", definition: "On the other hand; in return", level: 4 },
  { word: "d'ailleurs", definition: "Besides; moreover; incidentally", level: 4 },

  // Level 5 — Expert
  { word: "nonobstant", definition: "Notwithstanding", level: 5 },
  { word: "dorénavant", definition: "Henceforth; from this point forward", level: 5 },

  // ===== TRANCHE 2 (51-100) — Common Nouns & Daily Life =====

  // Level 1
  { word: "maison", definition: "House; home", level: 1 },
  { word: "travail", definition: "Work; job", level: 1 },
  { word: "école", definition: "School", level: 1 },
  { word: "rue", definition: "Street", level: 1 },
  { word: "magasin", definition: "Store; shop", level: 1 },
  { word: "nourriture", definition: "Food", level: 1 },
  { word: "eau", definition: "Water", level: 1 },
  { word: "argent", definition: "Money; silver", level: 1 },
  { word: "temps", definition: "Time; weather", level: 1 },
  { word: "ami", definition: "Friend", level: 1 },

  // Level 2
  { word: "bibliothèque", definition: "Library", level: 2 },
  { word: "quartier", definition: "Neighborhood; district", level: 2 },
  { word: "cadeau", definition: "Gift; present", level: 2 },
  { word: "clé", definition: "Key", level: 2 },
  { word: "conseil", definition: "Advice; council", level: 2 },
  { word: "endroit", definition: "Place; spot", level: 2 },
  { word: "marché", definition: "Market", level: 2 },
  { word: "paysage", definition: "Landscape; scenery", level: 2 },
  { word: "volonté", definition: "Will; willpower", level: 2 },
  { word: "habitude", definition: "Habit; custom", level: 2 },

  // Level 3
  { word: "épanouissement", definition: "Fulfillment; blossoming; personal growth", level: 3 },
  { word: "patrimoine", definition: "Heritage; legacy; estate", level: 3 },
  { word: "carrefour", definition: "Crossroads; intersection", level: 3 },
  { word: "échéance", definition: "Deadline; due date", level: 3 },
  { word: "enjeu", definition: "Stake; issue at stake; challenge", level: 3 },

  // Level 4
  { word: "engouement", definition: "Craze; infatuation; sudden passion", level: 4 },
  { word: "démarche", definition: "Approach; procedure; formal step", level: 4 },
  { word: "fossé", definition: "Gap; ditch; divide", level: 4 },

  // Level 5
  { word: "bouleversement", definition: "Upheaval; disruption; turmoil", level: 5 },
  { word: "tergiversation", definition: "Evasion; hedging; beating around the bush", level: 5 },

  // ===== TRANCHE 3 (101-150) — Verbs =====

  // Level 1
  { word: "manger", definition: "To eat", level: 1 },
  { word: "boire", definition: "To drink", level: 1 },
  { word: "dormir", definition: "To sleep", level: 1 },
  { word: "parler", definition: "To speak; to talk", level: 1 },
  { word: "écouter", definition: "To listen", level: 1 },
  { word: "regarder", definition: "To watch; to look at", level: 1 },
  { word: "acheter", definition: "To buy", level: 1 },
  { word: "chercher", definition: "To look for; to search", level: 1 },
  { word: "marcher", definition: "To walk; to work (function)", level: 1 },
  { word: "penser", definition: "To think", level: 1 },

  // Level 2
  { word: "se souvenir", definition: "To remember", level: 2 },
  { word: "oublier", definition: "To forget", level: 2 },
  { word: "essayer", definition: "To try; to attempt", level: 2 },
  { word: "réussir", definition: "To succeed; to pass (an exam)", level: 2 },
  { word: "échouer", definition: "To fail", level: 2 },
  { word: "emprunter", definition: "To borrow", level: 2 },
  { word: "prêter", definition: "To lend", level: 2 },
  { word: "se plaindre", definition: "To complain", level: 2 },
  { word: "apercevoir", definition: "To notice; to catch sight of", level: 2 },
  { word: "traduire", definition: "To translate", level: 2 },

  // Level 3
  { word: "s'enfuir", definition: "To flee; to run away", level: 3 },
  { word: "épargner", definition: "To save (money); to spare", level: 3 },
  { word: "déclencher", definition: "To trigger; to set off", level: 3 },
  { word: "atteindre", definition: "To reach; to achieve", level: 3 },
  { word: "nuire", definition: "To harm; to damage", level: 3 },

  // Level 4
  { word: "s'acharner", definition: "To persist relentlessly; to go at furiously", level: 4 },
  { word: "éblouir", definition: "To dazzle; to blind momentarily", level: 4 },
  { word: "bouleverser", definition: "To overwhelm; to turn upside down", level: 4 },

  // Level 5
  { word: "tergiverser", definition: "To hedge; to beat around the bush", level: 5 },
  { word: "ressasser", definition: "To brood over; to keep going over something", level: 5 },

  // ===== TRANCHE 4 (151-200) — Adjectives & Expressions =====

  // Level 1
  { word: "beau / belle", definition: "Beautiful; handsome", level: 1 },
  { word: "grand", definition: "Big; tall; great", level: 1 },
  { word: "petit", definition: "Small; little", level: 1 },
  { word: "nouveau / nouvelle", definition: "New", level: 1 },
  { word: "jeune", definition: "Young", level: 1 },
  { word: "vieux / vieille", definition: "Old", level: 1 },
  { word: "heureux / heureuse", definition: "Happy", level: 1 },
  { word: "triste", definition: "Sad", level: 1 },
  { word: "facile", definition: "Easy", level: 1 },
  { word: "difficile", definition: "Difficult; hard", level: 1 },

  // Level 2
  { word: "fier / fière", definition: "Proud", level: 2 },
  { word: "drôle", definition: "Funny; strange", level: 2 },
  { word: "gentil / gentille", definition: "Kind; nice", level: 2 },
  { word: "étrange", definition: "Strange; odd", level: 2 },
  { word: "pareil / pareille", definition: "Same; similar; such", level: 2 },
  { word: "propre", definition: "Clean; own (before noun)", level: 2 },
  { word: "cher / chère", definition: "Dear; expensive", level: 2 },
  { word: "doux / douce", definition: "Soft; sweet; gentle", level: 2 },
  { word: "étroit", definition: "Narrow; tight", level: 2 },
  { word: "ému", definition: "Moved; touched (emotionally)", level: 2 },

  // Level 3
  { word: "éphémère", definition: "Ephemeral; short-lived; fleeting", level: 3 },
  { word: "redoutable", definition: "Formidable; fearsome", level: 3 },
  { word: "incontournable", definition: "Unavoidable; essential; must-see", level: 3 },
  { word: "déconcertant", definition: "Disconcerting; bewildering", level: 3 },
  { word: "sournois", definition: "Sneaky; underhanded; sly", level: 3 },
  { word: "farfelu", definition: "Eccentric; wacky; hare-brained", level: 3 },
  { word: "tenace", definition: "Tenacious; persistent; stubborn", level: 3 },
  { word: "imprévu", definition: "Unexpected; unforeseen", level: 3 },
  { word: "accablant", definition: "Overwhelming; oppressive; damning", level: 3 },
  { word: "bienveillant", definition: "Benevolent; kind; well-meaning", level: 3 },

  // Level 4
  { word: "revêche", definition: "Surly; crabby; rough-tempered", level: 4 },
  { word: "cocasse", definition: "Comical; funny in an absurd way", level: 4 },
  { word: "dépourvu", definition: "Devoid of; lacking; caught off guard", level: 4 },
  { word: "insouciant", definition: "Carefree; nonchalant; unconcerned", level: 4 },
  { word: "anodin", definition: "Harmless; trivial; insignificant", level: 4 },

  // Level 5
  { word: "ineffable", definition: "Too great or extreme to be expressed in words", level: 5 },
  { word: "sempiternel", definition: "Never-ending; eternal (often used with exasperation)", level: 5 },
  { word: "quintessence", definition: "The purest and most perfect form of something", level: 5 },
  { word: "dépaysement", definition: "The feeling of being in a foreign place; disorientation from the unfamiliar", level: 5 },
  { word: "retrouvailles", definition: "The joy of reuniting with someone after a long separation", level: 5 },
];

export default {
  id: "french-english",
  name: "French → English",
  description: "200 French words and expressions with English translations",
  cards,
};
