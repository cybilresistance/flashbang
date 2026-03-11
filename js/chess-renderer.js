/**
 * Lightweight SVG chess board renderer from FEN strings.
 * Zero dependencies — generates inline SVG DOM elements.
 */

// Unicode chess pieces
const PIECES = {
  K: '\u2654', Q: '\u2655', R: '\u2656', B: '\u2657', N: '\u2658', P: '\u2659',
  k: '\u265A', q: '\u265B', r: '\u265C', b: '\u265D', n: '\u265E', p: '\u265F',
};

const LIGHT = '#f0d9b5';
const DARK = '#b58863';
const HIGHLIGHT_LIGHT = '#f7ec5d';
const HIGHLIGHT_DARK = '#dac34a';

/**
 * Parse the piece placement part of a FEN string.
 * Returns a 2D array [row][col] where each cell is a piece char or null.
 */
function parseFen(fen) {
  const placement = fen.split(' ')[0];
  const board = [];

  for (const rank of placement.split('/')) {
    const row = [];
    for (const ch of rank) {
      if (ch >= '1' && ch <= '8') {
        for (let i = 0; i < parseInt(ch); i++) row.push(null);
      } else {
        row.push(ch);
      }
    }
    board.push(row);
  }

  return board;
}

/**
 * Render a chess board as an SVG element from a FEN string.
 *
 * @param {string} fen - FEN string
 * @param {object} options
 * @param {number} options.size - Board size in pixels (default 280)
 * @param {boolean} options.flipped - View from black's perspective (default false)
 * @returns {SVGElement}
 */
export function renderBoard(fen, { size = 280, flipped = false } = {}) {
  const board = parseFen(fen);
  const sq = size / 8;
  const ns = 'http://www.w3.org/2000/svg';

  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.style.maxWidth = `${size}px`;
  svg.style.borderRadius = '8px';
  svg.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';

  // Draw squares
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const displayRow = flipped ? 7 - row : row;
      const displayCol = flipped ? 7 - col : col;

      const isLight = (displayRow + displayCol) % 2 === 0;
      const rect = document.createElementNS(ns, 'rect');
      rect.setAttribute('x', col * sq);
      rect.setAttribute('y', row * sq);
      rect.setAttribute('width', sq);
      rect.setAttribute('height', sq);
      rect.setAttribute('fill', isLight ? LIGHT : DARK);
      svg.appendChild(rect);

      // Draw piece
      const piece = board[displayRow][displayCol];
      if (piece) {
        const text = document.createElementNS(ns, 'text');
        text.setAttribute('x', col * sq + sq / 2);
        text.setAttribute('y', row * sq + sq * 0.82);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', sq * 0.85);
        text.setAttribute('font-family', 'serif');
        text.setAttribute('pointer-events', 'none');
        text.textContent = PIECES[piece];
        svg.appendChild(text);
      }
    }
  }

  // File/rank labels
  const files = flipped ? 'hgfedcba' : 'abcdefgh';
  const ranks = flipped ? '12345678' : '87654321';

  for (let i = 0; i < 8; i++) {
    // File labels (bottom)
    const fileLabel = document.createElementNS(ns, 'text');
    fileLabel.setAttribute('x', i * sq + sq - 3);
    fileLabel.setAttribute('y', size - 3);
    fileLabel.setAttribute('text-anchor', 'end');
    fileLabel.setAttribute('font-size', sq * 0.22);
    fileLabel.setAttribute('font-family', 'Inter, sans-serif');
    fileLabel.setAttribute('font-weight', '600');
    fileLabel.setAttribute('fill', (i + (flipped ? 1 : 0)) % 2 === 0 ? DARK : LIGHT);
    fileLabel.setAttribute('pointer-events', 'none');
    fileLabel.textContent = files[i];
    svg.appendChild(fileLabel);

    // Rank labels (left)
    const rankLabel = document.createElementNS(ns, 'text');
    rankLabel.setAttribute('x', 3);
    rankLabel.setAttribute('y', i * sq + sq * 0.28);
    rankLabel.setAttribute('text-anchor', 'start');
    rankLabel.setAttribute('font-size', sq * 0.22);
    rankLabel.setAttribute('font-family', 'Inter, sans-serif');
    rankLabel.setAttribute('font-weight', '600');
    rankLabel.setAttribute('fill', (i + (flipped ? 1 : 0)) % 2 === 0 ? LIGHT : DARK);
    rankLabel.setAttribute('pointer-events', 'none');
    rankLabel.textContent = ranks[i];
    svg.appendChild(rankLabel);
  }

  return svg;
}
