#!/usr/bin/env node
/**
 * Fetch chess puzzles from Hugging Face Lichess dataset and generate a deck file.
 *
 * The HF dataset has FEN directly, so no PGN replay needed.
 * FEN in the dataset is the position BEFORE the opponent's last move.
 * Moves field: first move is opponent's setup move, rest is the solution.
 */

import { Chess } from 'chess.js';
import { writeFileSync } from 'fs';

const HF_API = 'https://datasets-server.huggingface.co/rows';
const DATASET = 'Lichess/chess-puzzles';

const LEVELS = [
  { level: 1, label: "Beginner", min: 400, max: 1000 },
  { level: 2, label: "Intermediate", min: 1000, max: 1400 },
  { level: 3, label: "Advanced", min: 1400, max: 1800 },
  { level: 4, label: "Expert", min: 1800, max: 2200 },
  { level: 5, label: "Master", min: 2200, max: 3000 },
];

function ratingToLevel(rating) {
  for (const l of LEVELS) {
    if (rating >= l.min && rating < l.max) return l.level;
  }
  return rating < 400 ? 1 : 5;
}

function uciToSan(fen, uciMove) {
  const chess = new Chess(fen);
  try {
    const result = chess.move({
      from: uciMove.slice(0, 2),
      to: uciMove.slice(2, 4),
      promotion: uciMove.length > 4 ? uciMove[4] : undefined,
    });
    return result ? result.san : uciMove;
  } catch {
    return uciMove;
  }
}

const THEME_NAMES = {
  'mateIn1': 'Mate in 1', 'mateIn2': 'Mate in 2', 'mateIn3': 'Mate in 3',
  'mateIn4': 'Mate in 4', 'mateIn5': 'Mate in 5+',
  'fork': 'Fork', 'pin': 'Pin', 'skewer': 'Skewer',
  'discoveredAttack': 'Discovered Attack', 'doubleCheck': 'Double Check',
  'sacrifice': 'Sacrifice', 'deflection': 'Deflection', 'decoy': 'Decoy',
  'clearance': 'Clearance', 'intermezzo': 'Intermezzo', 'zugzwang': 'Zugzwang',
  'trappedPiece': 'Trapped Piece', 'hangingPiece': 'Hanging Piece',
  'backRankMate': 'Back Rank Mate', 'smotheredMate': 'Smothered Mate',
  'promotion': 'Promotion', 'kingsideAttack': 'Kingside Attack',
  'queensideAttack': 'Queenside Attack', 'advantage': 'Advantage',
  'crushing': 'Crushing', 'defensiveMove': 'Defensive Move',
  'exposedKing': 'Exposed King', 'quietMove': 'Quiet Move',
  'attackingF2F7': 'Attacking f2/f7', 'capturingDefender': 'Capturing Defender',
  'attraction': 'Attraction', 'xRayAttack': 'X-Ray Attack',
  'operaMate': 'Opera Mate', 'arabianMate': 'Arabian Mate',
};

const SKIP_THEMES = new Set([
  'short', 'long', 'veryLong', 'oneMove', 'opening', 'middlegame',
  'endgame', 'master', 'masterVsMaster', 'superGM',
]);

function formatThemes(themes) {
  if (!themes || !Array.isArray(themes)) return [];
  return themes
    .filter(t => !SKIP_THEMES.has(t))
    .map(t => THEME_NAMES[t] || t.replace(/([A-Z])/g, ' $1').trim())
    .slice(0, 3);
}

function processRow(row) {
  try {
    const { FEN: fen, Moves: movesStr, Rating: rating, Themes: themes, PuzzleId: id } = row;
    if (!fen || !movesStr) return null;

    const moves = movesStr.split(' ');
    if (moves.length < 2) return null;

    // Apply the setup move (opponent's last move) to get puzzle position
    const chess = new Chess(fen);
    const setupMove = moves[0];
    try {
      chess.move({
        from: setupMove.slice(0, 2),
        to: setupMove.slice(2, 4),
        promotion: setupMove.length > 4 ? setupMove[4] : undefined,
      });
    } catch {
      return null;
    }

    const puzzleFen = chess.fen();
    const toMove = puzzleFen.includes(' w ') ? 'White' : 'Black';

    // Best move is the player's first move (moves[1])
    const bestMove = uciToSan(puzzleFen, moves[1]);

    // Full solution line
    const tempChess = new Chess(puzzleFen);
    const solutionSan = [];
    for (let i = 1; i < moves.length; i++) {
      const m = moves[i];
      try {
        const result = tempChess.move({
          from: m.slice(0, 2), to: m.slice(2, 4),
          promotion: m.length > 4 ? m[4] : undefined,
        });
        if (result) solutionSan.push(result.san);
      } catch { break; }
    }

    return {
      id,
      fen: puzzleFen,
      toMove,
      bestMove,
      solution: solutionSan.join(', '),
      rating,
      themes: formatThemes(themes),
      level: ratingToLevel(rating),
    };
  } catch {
    return null;
  }
}

async function fetchBatch(offset, length) {
  const url = `${HF_API}?dataset=${DATASET}&config=default&split=train&offset=${offset}&length=${length}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`HF API error: ${res.status}`);
    return [];
  }
  const data = await res.json();
  return (data.rows || []).map(r => r.row);
}

async function main() {
  // Strategy: fetch from different offsets to get a range of ratings.
  // The dataset is sorted by PuzzleId (roughly by creation time).
  // We sample from different parts of the 5.7M dataset and filter by rating.

  const TARGET_PER_LEVEL = 40;
  const levelBuckets = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  const seen = new Set();
  const BATCH_SIZE = 100;

  // Sample from various offsets across the dataset (~5.7M rows)
  const offsets = [
    0, 5000, 15000, 50000, 100000,
    500000, 1000000, 1500000, 2000000,
    2500000, 3000000, 3500000, 4000000, 4500000, 5000000,
    250000, 750000, 1250000, 1750000, 2250000, 2750000,
    3250000, 3750000, 4250000, 4750000,
  ];

  console.log('Fetching chess puzzles from Hugging Face Lichess dataset...');

  let totalProcessed = 0;
  let totalFetched = 0;

  for (const offset of offsets) {
    const allFull = Object.values(levelBuckets).every(b => b.length >= TARGET_PER_LEVEL);
    if (allFull) break;

    const rows = await fetchBatch(offset, BATCH_SIZE);
    totalFetched += rows.length;

    for (const row of rows) {
      if (seen.has(row.PuzzleId)) continue;
      seen.add(row.PuzzleId);

      const processed = processRow(row);
      if (!processed) continue;

      const bucket = levelBuckets[processed.level];
      if (bucket && bucket.length < TARGET_PER_LEVEL) {
        bucket.push(processed);
        totalProcessed++;
      }
    }

    const counts = Object.entries(levelBuckets).map(([l, b]) => `L${l}:${b.length}`).join(' ');
    process.stdout.write(`\r  ${counts} | Fetched: ${totalFetched} | Offset: ${offset}`);

    await new Promise(r => setTimeout(r, 300));
  }

  const puzzles = [];
  for (const [, bucket] of Object.entries(levelBuckets)) {
    puzzles.push(...bucket);
  }

  puzzles.sort((a, b) => a.level - b.level || a.rating - b.rating);

  console.log(`\n\nGot ${puzzles.length} puzzles:`);
  for (const l of LEVELS) {
    const count = puzzles.filter(r => r.level === l.level).length;
    console.log(`  Level ${l.level} (${l.label}): ${count} puzzles`);
  }

  if (puzzles.length === 0) {
    console.error('No puzzles fetched!');
    process.exit(1);
  }

  const output = `// Chess Tactics — Puzzles sourced from Lichess (CC0)
// Generated ${new Date().toISOString().split('T')[0]}

const cards = ${JSON.stringify(puzzles, null, 2)};

export default {
  id: "chess-tactics",
  name: "Chess Tactics",
  description: "${puzzles.length} tactical puzzles from real games (Lichess)",
  cardType: "chess",
  cards,
};
`;

  const outPath = new URL('../js/decks/chess-tactics.js', import.meta.url).pathname;
  writeFileSync(outPath, output);
  console.log(`\nWrote ${puzzles.length} puzzles to ${outPath}`);
}

main().catch(console.error);
