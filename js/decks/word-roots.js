// English Word Roots — Latin, Greek, and other origins
// word = the root/prefix/suffix, definition = meaning + origin + example words

const cards = [
  // ===== Level 1 — Common Roots Everyone Encounters =====

  // Latin
  { word: "aud / audit", definition: "To hear (Latin: audīre) — audience, auditorium, audible", level: 1 },
  { word: "bene", definition: "Good, well (Latin: bene) — benefit, benevolent, benediction", level: 1 },
  { word: "dict", definition: "To say, speak (Latin: dictus) — dictate, predict, verdict", level: 1 },
  { word: "duc / duct", definition: "To lead (Latin: dūcere) — conduct, deduce, educate", level: 1 },
  { word: "fac / fact", definition: "To make, do (Latin: facere) — factory, manufacture, artifact", level: 1 },
  { word: "mal", definition: "Bad, evil (Latin: malus) — malice, malfunction, malevolent", level: 1 },
  { word: "mit / mis", definition: "To send (Latin: mittere) — transmit, mission, dismiss", level: 1 },
  { word: "port", definition: "To carry (Latin: portāre) — transport, export, portable", level: 1 },
  { word: "scrib / script", definition: "To write (Latin: scrībere) — describe, manuscript, scripture", level: 1 },
  { word: "vid / vis", definition: "To see (Latin: vidēre) — video, vision, evidence", level: 1 },

  // Greek
  { word: "bio", definition: "Life (Greek: bíos) — biology, biography, antibiotic", level: 1 },
  { word: "graph / gram", definition: "To write, record (Greek: graphein) — autograph, telegram, diagram", level: 1 },
  { word: "log / logy", definition: "Word, study, reason (Greek: lógos) — biology, dialogue, logic", level: 1 },
  { word: "phon", definition: "Sound, voice (Greek: phōnḗ) — telephone, phonetics, symphony", level: 1 },
  { word: "photo", definition: "Light (Greek: phōs, phōtós) — photograph, photosynthesis, photon", level: 1 },

  // Latin prefixes
  { word: "pre-", definition: "Before (Latin: prae) — predict, prevent, prefix", level: 1 },
  { word: "re-", definition: "Back, again (Latin: re-) — return, rebuild, repeat", level: 1 },
  { word: "sub-", definition: "Under, below (Latin: sub) — submarine, subtract,submerge", level: 1 },
  { word: "trans-", definition: "Across, beyond (Latin: trans) — transport, transform, translate", level: 1 },
  { word: "inter-", definition: "Between, among (Latin: inter) — international, interact, interval", level: 1 },

  // ===== Level 2 — Solid Foundations =====

  // Latin
  { word: "ced / cess", definition: "To go, yield (Latin: cēdere) — proceed, access, concede", level: 2 },
  { word: "cred", definition: "To believe (Latin: crēdere) — credit, credible, incredible", level: 2 },
  { word: "fin", definition: "End, limit (Latin: fīnis) — final, infinite, define", level: 2 },
  { word: "flu / flux", definition: "To flow (Latin: fluere) — fluid, influence, fluctuate", level: 2 },
  { word: "junct / jug", definition: "To join (Latin: jungere) — junction, conjugate, adjunct", level: 2 },
  { word: "loc", definition: "Place (Latin: locus) — location, local, allocate", level: 2 },
  { word: "mort", definition: "Death (Latin: mors, mortis) — mortal, mortgage, mortify", level: 2 },
  { word: "nov", definition: "New (Latin: novus) — novel, innovate, renovate", level: 2 },
  { word: "rupt", definition: "To break (Latin: ruptus) — rupture, interrupt, corrupt", level: 2 },
  { word: "vert / vers", definition: "To turn (Latin: vertere) — convert, reverse, versatile", level: 2 },

  // Greek
  { word: "anthrop", definition: "Human (Greek: ánthrōpos) — anthropology, misanthrope, philanthropy", level: 2 },
  { word: "chron", definition: "Time (Greek: chrónos) — chronological, chronic, synchronize", level: 2 },
  { word: "dem / demo", definition: "People (Greek: dêmos) — democracy, demographic, epidemic", level: 2 },
  { word: "morph", definition: "Form, shape (Greek: morphḗ) — metamorphosis, amorphous, morphology", level: 2 },
  { word: "path", definition: "Feeling, suffering (Greek: páthos) — sympathy, pathology, apathy", level: 2 },
  { word: "phil", definition: "Love (Greek: philos) — philosophy, philanthropy, bibliophile", level: 2 },
  { word: "psych", definition: "Mind, soul (Greek: psȳchḗ) — psychology, psychic, psychopath", level: 2 },
  { word: "theo / the", definition: "God (Greek: theós) — theology, atheist, theocracy", level: 2 },
  { word: "poly-", definition: "Many (Greek: polýs) — polygon, polyglot, polymorphic", level: 2 },
  { word: "mono-", definition: "One, single (Greek: mónos) — monopoly, monologue, monotone", level: 2 },

  // ===== Level 3 — Intermediate =====

  // Latin
  { word: "am / amor", definition: "Love (Latin: amāre) — amiable, amorous, enamored", level: 3 },
  { word: "bell", definition: "War (Latin: bellum) — belligerent, bellicose, rebel", level: 3 },
  { word: "cogn / gnos", definition: "To know (Latin: cognōscere) — recognize, cognition, diagnosis", level: 3 },
  { word: "equ", definition: "Equal (Latin: aequus) — equation, equity, equanimity", level: 3 },
  { word: "ferr / fer", definition: "To carry, bear (Latin: ferre) — transfer, fertile, confer", level: 3 },
  { word: "grat", definition: "Pleasing, thankful (Latin: grātus) — grateful, gratitude, ingrate", level: 3 },
  { word: "luc / lum", definition: "Light (Latin: lūx, lūmen) — lucid, luminous, elucidate", level: 3 },
  { word: "man / manu", definition: "Hand (Latin: manus) — manual, manipulate, manuscript", level: 3 },
  { word: "omni-", definition: "All (Latin: omnis) — omniscient, omnipresent, omnivore", level: 3 },
  { word: "pend / pens", definition: "To hang, weigh (Latin: pendēre) — suspend, pension, pendant", level: 3 },

  // Greek
  { word: "arch / archi", definition: "Chief, rule, first (Greek: archḗ) — monarch, architect, anarchy", level: 3 },
  { word: "auto-", definition: "Self (Greek: autós) — autonomy, autobiography, automatic", level: 3 },
  { word: "crypt", definition: "Hidden (Greek: kryptós) — crypt, encrypt, cryptic", level: 3 },
  { word: "dyn / dynam", definition: "Power, force (Greek: dýnamis) — dynamic, dynasty, dynamite", level: 3 },
  { word: "eu-", definition: "Good, well (Greek: eû) — euphoria, eulogy, euphemism", level: 3 },
  { word: "gen / gon", definition: "Birth, origin, race (Greek: génos) — genesis, genocide, polygon", level: 3 },
  { word: "hemi-", definition: "Half (Greek: hēmi-) — hemisphere, hemiplegia", level: 3 },
  { word: "hyper-", definition: "Over, excessive (Greek: hypér) — hyperactive, hyperbole, hypertension", level: 3 },
  { word: "hypo-", definition: "Under, below (Greek: hypó) — hypothesis, hypodermic, hypothermia", level: 3 },
  { word: "neo-", definition: "New (Greek: néos) — neonatal, neologism, neoclassical", level: 3 },

  // ===== Level 4 — Advanced =====

  // Latin
  { word: "anim", definition: "Spirit, life, mind (Latin: animus) — animate, animosity, equanimity", level: 4 },
  { word: "carn", definition: "Flesh (Latin: carō, carnis) — carnivore, incarnate, carnival", level: 4 },
  { word: "corp", definition: "Body (Latin: corpus) — corpse, corporation, corporal", level: 4 },
  { word: "greg", definition: "Flock, herd (Latin: grex) — gregarious, congregate, segregate", level: 4 },
  { word: "loqu / locut", definition: "To speak (Latin: loquī) — eloquent, loquacious, circumlocution", level: 4 },
  { word: "nasc / nat", definition: "To be born (Latin: nāscī) — nascent, natal, innate", level: 4 },
  { word: "pac / pax", definition: "Peace (Latin: pāx) — pacify, pacific, pact", level: 4 },
  { word: "pug / pugn", definition: "To fight (Latin: pugnāre) — pugnacious, repugnant, impugn", level: 4 },
  { word: "sed / sid / sess", definition: "To sit, settle (Latin: sedēre) — reside, session, sediment", level: 4 },
  { word: "voc / vok", definition: "Voice, to call (Latin: vōx, vocāre) — vocal, evoke, advocate", level: 4 },

  // Greek
  { word: "agon", definition: "Struggle, contest (Greek: agṓn) — agony, antagonist, protagonist", level: 4 },
  { word: "aesth / esth", definition: "Feeling, perception (Greek: aisthēsis) — aesthetic, anesthetic", level: 4 },
  { word: "gno / gnomon", definition: "To know, judge (Greek: gnōsis) — agnostic, prognosis, gnostic", level: 4 },
  { word: "helio", definition: "Sun (Greek: hḗlios) — heliocentric, heliograph, helium", level: 4 },
  { word: "iso-", definition: "Equal (Greek: ísos) — isotope, isometric, isosceles", level: 4 },
  { word: "meta-", definition: "Beyond, change (Greek: metá) — metaphor, metabolism, metamorphosis", level: 4 },
  { word: "pan-", definition: "All (Greek: pân) — pandemic, panorama, pantheon", level: 4 },
  { word: "pseudo-", definition: "False (Greek: pseudḗs) — pseudonym, pseudoscience, pseudo", level: 4 },
  { word: "soph", definition: "Wise (Greek: sophós) — philosophy, sophisticated, sophomore", level: 4 },
  { word: "tele-", definition: "Far, distant (Greek: têle) — television, telephone, telepathy", level: 4 },

  // ===== Level 5 — Expert / Rare Origins =====

  // Latin
  { word: "cad / cas / cid", definition: "To fall (Latin: cadere) — cadence, cascade, accident, occident", level: 5 },
  { word: "err", definition: "To wander, stray (Latin: errāre) — error, erratic, aberration", level: 5 },
  { word: "fug", definition: "To flee (Latin: fugere) — fugitive, refuge, fugue", level: 5 },
  { word: "nomen / nomin", definition: "Name (Latin: nōmen) — nominal, nomenclature, denominate", level: 5 },
  { word: "prob / prov", definition: "To test, prove (Latin: probāre) — prove, probation, reprobate", level: 5 },

  // Greek
  { word: "dox / dog", definition: "Opinion, belief (Greek: dóxa) — orthodox, paradox, dogma", level: 5 },
  { word: "epi-", definition: "Upon, above, beside (Greek: epí) — epitome, epidemic, epilogue", level: 5 },
  { word: "heter", definition: "Other, different (Greek: héteros) — heterogeneous, heterodox", level: 5 },
  { word: "kine / cine", definition: "Movement (Greek: kínēsis) — kinetic, cinema, kinesthesia", level: 5 },
  { word: "xen", definition: "Stranger, foreign (Greek: xénos) — xenophobia, xenon, xenograft", level: 5 },

  // Old English / Germanic
  { word: "wer / wor", definition: "Man (Old English: wer) — werewolf, world (wer + eld 'age of man')", level: 5 },
  { word: "wald / wield", definition: "Power, rule (Germanic: waldan) — wield, Oswald ('god-power')", level: 5 },
  { word: "dom", definition: "Judgment, realm (Old English: dōm) — kingdom, freedom, wisdom, doom", level: 5 },

  // Hebrew / Semitic
  { word: "amen", definition: "Truth, certainty (Hebrew: āmēn) — amen ('so be it'), from 'emunah' (faith)", level: 5 },
  { word: "jubil", definition: "Ram's horn, celebration (Hebrew: yōbēl) — jubilee, jubilant", level: 5 },

  // Arabic
  { word: "al-", definition: "The (Arabic: al-) — algebra, algorithm, alchemy, alcohol", level: 5 },
  { word: "ṣifr", definition: "Empty, zero (Arabic: ṣifr) — zero, cipher — gave us the concept of '0'", level: 5 },

  // Sanskrit
  { word: "yug / yok", definition: "To join, unite (Sanskrit: yuj) — yoga, yoke, conjugal", level: 5 },
  { word: "nirvāṇa", definition: "Blowing out, extinguishing (Sanskrit) — nirvana — liberation from suffering", level: 5 },
];

export default {
  id: "word-roots",
  name: "English Word Roots",
  description: "Latin, Greek, Germanic, Hebrew, Arabic & Sanskrit roots that shape English",
  cards,
};
