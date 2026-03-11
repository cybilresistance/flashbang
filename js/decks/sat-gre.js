// SAT / GRE Vocabulary — 200 words across 5 difficulty levels

const cards = [
  // ===== TRANCHE 1 (1-50) =====

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

  // ===== TRANCHE 2 (51-100) =====

  // Level 1
  { word: "ambiguous", definition: "Open to more than one interpretation; not clear", level: 1 },
  { word: "concise", definition: "Giving a lot of information clearly in few words", level: 1 },
  { word: "disdain", definition: "The feeling that someone or something is unworthy; contempt", level: 1 },
  { word: "empathy", definition: "The ability to understand and share another's feelings", level: 1 },
  { word: "fervent", definition: "Having or displaying passionate intensity", level: 1 },
  { word: "gullible", definition: "Easily persuaded to believe something; credulous", level: 1 },
  { word: "hinder", definition: "To create difficulties, resulting in delay or obstruction", level: 1 },
  { word: "impartial", definition: "Treating all rivals or disputants equally; unbiased", level: 1 },
  { word: "kindle", definition: "To arouse or inspire an emotion or feeling", level: 1 },
  { word: "lucid", definition: "Expressed clearly; easy to understand", level: 1 },

  // Level 2
  { word: "meticulous", definition: "Showing great attention to detail; very careful", level: 2 },
  { word: "nonchalant", definition: "Feeling or appearing casually calm and relaxed", level: 2 },
  { word: "pragmatic", definition: "Dealing with things sensibly and realistically", level: 2 },
  { word: "resilient", definition: "Able to recover quickly from difficult conditions", level: 2 },
  { word: "scrutinize", definition: "To examine or inspect closely and thoroughly", level: 2 },
  { word: "tenacious", definition: "Holding firmly to something; persistent and determined", level: 2 },
  { word: "vindicate", definition: "To clear someone of blame or suspicion", level: 2 },
  { word: "whimsical", definition: "Playfully quaint or fanciful; acting on impulse", level: 2 },
  { word: "aesthetic", definition: "Concerned with beauty or the appreciation of beauty", level: 2 },
  { word: "bolster", definition: "To support, strengthen, or prop up", level: 2 },

  // Level 3
  { word: "didactic", definition: "Intended to teach or instruct, often excessively so", level: 3 },
  { word: "equivocal", definition: "Open to more than one interpretation; ambiguous or evasive", level: 3 },
  { word: "furtive", definition: "Attempting to avoid notice or attention; secretive", level: 3 },
  { word: "gratuitous", definition: "Uncalled for; lacking good reason; unwarranted", level: 3 },
  { word: "hackneyed", definition: "Lacking significance through overuse; unoriginal", level: 3 },
  { word: "incorrigible", definition: "Not able to be corrected or reformed", level: 3 },
  { word: "languid", definition: "Displaying a disinclination for physical exertion; slow and relaxed", level: 3 },
  { word: "morose", definition: "Sullen, gloomy, and ill-tempered", level: 3 },
  { word: "nascent", definition: "Just beginning to develop; emerging", level: 3 },
  { word: "opulent", definition: "Ostentatiously rich and luxurious", level: 3 },

  // Level 4
  { word: "parsimonious", definition: "Unwilling to spend money or use resources; stingy", level: 4 },
  { word: "querulous", definition: "Complaining in a whining manner", level: 4 },
  { word: "recondite", definition: "Little known; abstruse; dealing with obscure subject matter", level: 4 },
  { word: "soporific", definition: "Tending to induce drowsiness or sleep", level: 4 },
  { word: "truculent", definition: "Eager or quick to argue or fight; aggressively defiant", level: 4 },

  // Level 5
  { word: "umbrage", definition: "Offense or annoyance, often taken at a perceived slight", level: 5 },
  { word: "vituperate", definition: "To blame or insult someone in strong or violent language", level: 5 },
  { word: "waggish", definition: "Humorous in a playful or mischievous way", level: 5 },
  { word: "apotheosis", definition: "The highest point of development; the perfect example", level: 5 },
  { word: "blandishment", definition: "A flattering or pleasing statement used to persuade", level: 5 },

  // ===== TRANCHE 3 (101-150) =====

  // Level 1
  { word: "advocate", definition: "To publicly support or recommend a particular cause or policy", level: 1 },
  { word: "complacent", definition: "Showing smug or uncritical satisfaction with oneself", level: 1 },
  { word: "debilitate", definition: "To make someone weak or infirm", level: 1 },
  { word: "enhance", definition: "To intensify, increase, or further improve quality or value", level: 1 },
  { word: "fluctuate", definition: "To rise and fall irregularly in number or amount", level: 1 },
  { word: "gratify", definition: "To give someone pleasure or satisfaction", level: 1 },
  { word: "hypothetical", definition: "Based on an imagined situation rather than fact", level: 1 },
  { word: "indifferent", definition: "Having no particular interest or sympathy; unconcerned", level: 1 },
  { word: "jeopardize", definition: "To put someone or something into a situation of danger", level: 1 },
  { word: "lament", definition: "To express passionate grief or sorrow about something", level: 1 },

  // Level 2
  { word: "mitigate", definition: "To make less severe, serious, or painful", level: 2 },
  { word: "nuance", definition: "A subtle difference in meaning, expression, or sound", level: 2 },
  { word: "partisan", definition: "A strong supporter of a party or cause, often with bias", level: 2 },
  { word: "refute", definition: "To prove a statement or theory to be wrong or false", level: 2 },
  { word: "substantiate", definition: "To provide evidence to support or prove the truth of", level: 2 },
  { word: "tangible", definition: "Clear and definite; real; able to be touched or felt", level: 2 },
  { word: "unequivocal", definition: "Leaving no doubt; unambiguous and clear", level: 2 },
  { word: "volatile", definition: "Liable to change rapidly and unpredictably", level: 2 },
  { word: "acquiesce", definition: "To accept something reluctantly but without protest", level: 2 },
  { word: "capitulate", definition: "To cease to resist; to surrender", level: 2 },

  // Level 3
  { word: "disparage", definition: "To regard or represent as being of little worth", level: 3 },
  { word: "exacerbate", definition: "To make a problem or situation worse", level: 3 },
  { word: "facetious", definition: "Treating serious issues with deliberately inappropriate humor", level: 3 },
  { word: "harangue", definition: "A lengthy and aggressive speech; to lecture aggressively", level: 3 },
  { word: "impervious", definition: "Unable to be affected or disturbed by something", level: 3 },
  { word: "juxtaposition", definition: "The fact of placing things close together for contrasting effect", level: 3 },
  { word: "lugubrious", definition: "Looking or sounding sad and dismal", level: 3 },
  { word: "mundane", definition: "Lacking interest or excitement; dull and ordinary", level: 3 },
  { word: "obfuscate", definition: "To render obscure, unclear, or unintelligible", level: 3 },
  { word: "pernicious", definition: "Having a harmful effect, especially in a gradual or subtle way", level: 3 },

  // Level 4
  { word: "quotidian", definition: "Of or occurring every day; ordinary and everyday", level: 4 },
  { word: "sycophant", definition: "A person who acts obsequiously to gain advantage; a flatterer", level: 4 },
  { word: "trepidation", definition: "A feeling of fear or agitation about something", level: 4 },
  { word: "usurp", definition: "To take a position of power or authority illegally or by force", level: 4 },
  { word: "verisimilitude", definition: "The appearance of being true or real", level: 4 },

  // Level 5
  { word: "chicanery", definition: "The use of trickery to achieve a political or legal purpose", level: 5 },
  { word: "dilettante", definition: "A person with a superficial interest in an art or field of knowledge", level: 5 },
  { word: "erstwhile", definition: "Former; of a previous time", level: 5 },
  { word: "fatuous", definition: "Silly and pointless; devoid of intelligence", level: 5 },
  { word: "harbinger", definition: "A person or thing that announces the approach of something", level: 5 },

  // ===== TRANCHE 4 (151-200) =====

  // Level 1
  { word: "meander", definition: "To follow a winding course; to wander aimlessly", level: 1 },
  { word: "novice", definition: "A person new to or inexperienced in a field or situation", level: 1 },
  { word: "obscure", definition: "Not clearly expressed or easily understood; little known", level: 1 },
  { word: "plausible", definition: "Seeming reasonable or probable; convincing", level: 1 },
  { word: "reconcile", definition: "To restore friendly relations; to make compatible", level: 1 },
  { word: "scrutiny", definition: "Critical observation or examination", level: 1 },
  { word: "thrive", definition: "To prosper, flourish, or grow vigorously", level: 1 },
  { word: "undermine", definition: "To gradually weaken or damage something", level: 1 },
  { word: "vigor", definition: "Physical strength and good health; effort and enthusiasm", level: 1 },
  { word: "warrant", definition: "To justify or necessitate a course of action", level: 1 },

  // Level 2
  { word: "contentious", definition: "Causing or likely to cause disagreement; controversial", level: 2 },
  { word: "dogmatic", definition: "Inclined to lay down principles as undeniably true", level: 2 },
  { word: "exonerate", definition: "To absolve someone from blame or fault", level: 2 },
  { word: "frivolous", definition: "Not having any serious purpose or value; carefree", level: 2 },
  { word: "hamper", definition: "To hinder or impede the movement or progress of", level: 2 },
  { word: "indigenous", definition: "Originating or occurring naturally in a particular place", level: 2 },
  { word: "judiciously", definition: "With good judgment or sense; wisely", level: 2 },
  { word: "lethargy", definition: "A lack of energy and enthusiasm; sluggishness", level: 2 },
  { word: "perpetuate", definition: "To make something continue indefinitely", level: 2 },
  { word: "stoic", definition: "Enduring pain or hardship without showing feelings or complaining", level: 2 },

  // Level 3
  { word: "antithesis", definition: "A person or thing that is the direct opposite of something else", level: 3 },
  { word: "conundrum", definition: "A confusing and difficult problem or question", level: 3 },
  { word: "dichotomy", definition: "A division or contrast between two things", level: 3 },
  { word: "endemic", definition: "Native to or regularly found in a certain place or population", level: 3 },
  { word: "flippant", definition: "Not showing proper respect or seriousness; glib", level: 3 },
  { word: "hubris", definition: "Excessive pride or self-confidence; arrogance", level: 3 },
  { word: "intransigent", definition: "Unwilling or refusing to change one's views; uncompromising", level: 3 },
  { word: "mercurial", definition: "Subject to sudden changes of mood or mind; volatile", level: 3 },
  { word: "non sequitur", definition: "A conclusion that does not logically follow from the premise", level: 3 },
  { word: "precipitous", definition: "Dangerously high or steep; done suddenly without careful thought", level: 3 },

  // Level 4
  { word: "risible", definition: "Relating to laughter; laughable or ridiculous", level: 4 },
  { word: "specious", definition: "Superficially plausible but actually wrong; misleading", level: 4 },
  { word: "tendentious", definition: "Expressing a strong opinion, especially a controversial one", level: 4 },
  { word: "venal", definition: "Showing susceptibility to bribery; corrupt", level: 4 },
  { word: "ameliorate", definition: "To make something bad or unsatisfactory better", level: 4 },

  // Level 5
  { word: "calumny", definition: "The making of false statements to damage someone's reputation", level: 5 },
  { word: "desuetude", definition: "A state of disuse; discontinuance of a practice or custom", level: 5 },
  { word: "effulgent", definition: "Shining brightly; radiant and resplendent", level: 5 },
  { word: "insouciance", definition: "Casual lack of concern; indifference or nonchalance", level: 5 },
  { word: "sesquipedalian", definition: "Of or characterized by long words; long-winded", level: 5 },
];

export default {
  id: "sat-gre-vocab",
  name: "SAT / GRE Vocabulary",
  description: "Essential words for standardized tests",
  cards,
};
