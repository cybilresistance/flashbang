// SAT / GRE Vocabulary — 200 words across 5 difficulty levels
// Tranche 1: Words 1-50

const cards = [
  // Level 1 — Common but important
  { word: "aberration", definition: "A departure from what is normal or expected", level: 1 },
  { word: "benevolent", definition: "Well-meaning and kindly; generous", level: 1 },
  { word: "candor", definition: "The quality of being open, honest, and sincere", level: 1 },
  { word: "diligent", definition: "Showing careful and persistent effort", level: 1 },
  { word: "eloquent", definition: "Fluent, persuasive, and expressive in speech or writing", level: 1 },
  { word: "frugal", definition: "Sparing or economical with money or resources", level: 1 },
  { word: "gregarious", definition: "Fond of company; sociable", level: 1 },
  { word: "harmony", definition: "Agreement or concord; a pleasing combination", level: 1 },
  { word: "innate", definition: "Inborn; natural rather than learned", level: 1 },
  { word: "jubilant", definition: "Feeling or expressing great happiness and triumph", level: 1 },

  // Level 2 — Moderately challenging
  { word: "laconic", definition: "Using very few words; terse and concise", level: 2 },
  { word: "malleable", definition: "Easily influenced or shaped; flexible", level: 2 },
  { word: "nebulous", definition: "Vague, unclear, or ill-defined", level: 2 },
  { word: "obsequious", definition: "Excessively obedient or attentive; servile", level: 2 },
  { word: "penchant", definition: "A strong habitual liking or tendency", level: 2 },
  { word: "quandary", definition: "A state of perplexity or uncertainty", level: 2 },
  { word: "reticent", definition: "Not revealing one's thoughts readily; reserved", level: 2 },
  { word: "sanguine", definition: "Optimistic or positive, especially in a difficult situation", level: 2 },
  { word: "taciturn", definition: "Reserved or uncommunicative; saying little", level: 2 },
  { word: "ubiquitous", definition: "Present, appearing, or found everywhere", level: 2 },

  // Level 2 continued
  { word: "verbose", definition: "Using more words than needed; wordy", level: 2 },
  { word: "wary", definition: "Feeling or showing caution about possible danger", level: 2 },
  { word: "zealous", definition: "Having or showing great energy and enthusiasm", level: 2 },
  { word: "alacrity", definition: "Brisk and cheerful readiness", level: 2 },
  { word: "brevity", definition: "Concise and exact use of words; shortness of time", level: 2 },

  // Level 3 — Challenging
  { word: "capricious", definition: "Given to sudden changes of mood or behavior; unpredictable", level: 3 },
  { word: "deleterious", definition: "Causing harm or damage", level: 3 },
  { word: "ephemeral", definition: "Lasting for a very short time", level: 3 },
  { word: "fastidious", definition: "Very attentive to detail; meticulous and demanding", level: 3 },
  { word: "garrulous", definition: "Excessively talkative, especially on trivial matters", level: 3 },
  { word: "hegemony", definition: "Dominance or leadership, especially by one state over others", level: 3 },
  { word: "iconoclast", definition: "A person who attacks cherished beliefs or institutions", level: 3 },
  { word: "juxtapose", definition: "To place close together for contrasting effect", level: 3 },
  { word: "kowtow", definition: "To act in an excessively subservient manner", level: 3 },
  { word: "loquacious", definition: "Tending to talk a great deal; talkative", level: 3 },

  // Level 3 continued
  { word: "magnanimous", definition: "Very generous or forgiving, especially toward a rival", level: 3 },
  { word: "nefarious", definition: "Wicked, villainous, or criminal", level: 3 },
  { word: "ostentatious", definition: "Designed to impress; showy and pretentious", level: 3 },
  { word: "perfunctory", definition: "Carried out without real interest or care; cursory", level: 3 },
  { word: "quixotic", definition: "Extremely idealistic; unrealistic and impractical", level: 3 },

  // Level 4 — Advanced
  { word: "recalcitrant", definition: "Having an obstinately uncooperative attitude; defiant", level: 4 },
  { word: "sagacious", definition: "Having keen mental discernment and good judgment; shrewd", level: 4 },
  { word: "temerity", definition: "Excessive confidence or boldness; audacity", level: 4 },
  { word: "unctuous", definition: "Excessively flattering or ingratiating; oily", level: 4 },
  { word: "vicissitude", definition: "A change of circumstances, typically unwelcome", level: 4 },

  // Level 5 — Expert
  { word: "abnegation", definition: "The act of renouncing or rejecting something; self-denial", level: 5 },
  { word: "bellicose", definition: "Demonstrating aggression and willingness to fight", level: 5 },
  { word: "circumlocution", definition: "The use of many words where fewer would do; evasion in speech", level: 5 },
  { word: "desultory", definition: "Lacking a plan or purpose; occurring randomly", level: 5 },
  { word: "enervate", definition: "To cause someone to feel drained of energy; to weaken", level: 5 },
];

export default {
  id: "sat-gre-vocab",
  name: "SAT / GRE Vocabulary",
  description: "Essential words for standardized tests",
  cards,
};
