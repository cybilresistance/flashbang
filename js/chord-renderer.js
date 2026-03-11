/**
 * Lightweight SVG guitar chord diagram renderer.
 * Zero dependencies — generates inline SVG DOM elements.
 *
 * Data format per chord:
 *   strings: [lowE, A, D, G, B, highE]
 *     - null = muted (X)
 *     - 0    = open (O)
 *     - n    = fret number
 *   fingers: [lowE, A, D, G, B, highE] (optional, 1-4 or null)
 *   barres: [{ fret, fromString, toString }] (optional)
 *   baseFret: starting fret (1 = nut position, default 1)
 */

const FRETS_SHOWN = 5;
const STRINGS = 6;

export function renderChord(chord, { width = 200 } = {}) {
  const ns = 'http://www.w3.org/2000/svg';

  // Layout constants
  const padLeft = 30;
  const padRight = 15;
  const padTop = 35;
  const padBottom = 20;
  const fretboardW = width - padLeft - padRight;
  const stringSpacing = fretboardW / (STRINGS - 1);
  const fretSpacing = stringSpacing * 1.2;
  const fretboardH = fretSpacing * FRETS_SHOWN;
  const totalH = padTop + fretboardH + padBottom;

  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', `0 0 ${width} ${totalH}`);
  svg.setAttribute('width', '100%');
  svg.style.display = 'block';

  const baseFret = chord.baseFret || 1;
  const isNutPosition = baseFret === 1;

  // --- Nut or fret indicator ---
  if (isNutPosition) {
    const nut = document.createElementNS(ns, 'rect');
    nut.setAttribute('x', padLeft - 1);
    nut.setAttribute('y', padTop - 4);
    nut.setAttribute('width', fretboardW + 2);
    nut.setAttribute('height', 5);
    nut.setAttribute('fill', '#2d2a24');
    nut.setAttribute('rx', 1);
    svg.appendChild(nut);
  } else {
    const fretLabel = document.createElementNS(ns, 'text');
    fretLabel.setAttribute('x', padLeft - 10);
    fretLabel.setAttribute('y', padTop + fretSpacing / 2 + 5);
    fretLabel.setAttribute('text-anchor', 'middle');
    fretLabel.setAttribute('font-size', 12);
    fretLabel.setAttribute('font-family', 'Inter, sans-serif');
    fretLabel.setAttribute('font-weight', '600');
    fretLabel.setAttribute('fill', '#2d2a24');
    fretLabel.textContent = `${baseFret}fr`;
    svg.appendChild(fretLabel);
  }

  // --- Fret lines ---
  for (let f = 0; f <= FRETS_SHOWN; f++) {
    const y = padTop + f * fretSpacing;
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', padLeft);
    line.setAttribute('y1', y);
    line.setAttribute('x2', padLeft + fretboardW);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', '#8a8477');
    line.setAttribute('stroke-width', f === 0 && !isNutPosition ? 1 : 1);
    svg.appendChild(line);
  }

  // --- String lines ---
  for (let s = 0; s < STRINGS; s++) {
    const x = padLeft + s * stringSpacing;
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', x);
    line.setAttribute('y1', padTop);
    line.setAttribute('x2', x);
    line.setAttribute('y2', padTop + fretboardH);
    line.setAttribute('stroke', '#8a8477');
    line.setAttribute('stroke-width', 1.5 - s * 0.1);
    svg.appendChild(line);
  }

  // --- Barres ---
  if (chord.barres) {
    for (const barre of chord.barres) {
      const fretPos = barre.fret - baseFret + 1;
      const y = padTop + (fretPos - 0.5) * fretSpacing;
      const x1 = padLeft + barre.fromString * stringSpacing;
      const x2 = padLeft + barre.toString * stringSpacing;

      const rect = document.createElementNS(ns, 'rect');
      rect.setAttribute('x', Math.min(x1, x2));
      rect.setAttribute('y', y - 7);
      rect.setAttribute('width', Math.abs(x2 - x1));
      rect.setAttribute('height', 14);
      rect.setAttribute('rx', 7);
      rect.setAttribute('fill', '#2d2a24');
      svg.appendChild(rect);
    }
  }

  // --- Finger dots + open/muted markers ---
  const dotRadius = stringSpacing * 0.32;

  for (let s = 0; s < STRINGS; s++) {
    const fretVal = chord.strings[s];
    const x = padLeft + s * stringSpacing;

    if (fretVal === null) {
      // Muted — draw X
      const size = 5;
      const y = padTop - 16;
      for (const [dx1, dy1, dx2, dy2] of [[-size, -size, size, size], [-size, size, size, -size]]) {
        const line = document.createElementNS(ns, 'line');
        line.setAttribute('x1', x + dx1);
        line.setAttribute('y1', y + dy1);
        line.setAttribute('x2', x + dx2);
        line.setAttribute('y2', y + dy2);
        line.setAttribute('stroke', '#b58863');
        line.setAttribute('stroke-width', 2);
        line.setAttribute('stroke-linecap', 'round');
        svg.appendChild(line);
      }
    } else if (fretVal === 0) {
      // Open — draw O
      const circle = document.createElementNS(ns, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', padTop - 16);
      circle.setAttribute('r', 5);
      circle.setAttribute('fill', 'none');
      circle.setAttribute('stroke', '#2d2a24');
      circle.setAttribute('stroke-width', 1.5);
      svg.appendChild(circle);
    } else {
      // Fretted — draw filled dot
      const fretPos = fretVal - baseFret + 1;
      const y = padTop + (fretPos - 0.5) * fretSpacing;

      const circle = document.createElementNS(ns, 'circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', dotRadius);
      circle.setAttribute('fill', '#2d2a24');
      svg.appendChild(circle);

      // Finger number inside dot
      if (chord.fingers && chord.fingers[s]) {
        const text = document.createElementNS(ns, 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', y + 4);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', 10);
        text.setAttribute('font-family', 'Inter, sans-serif');
        text.setAttribute('font-weight', '600');
        text.setAttribute('fill', '#ffffff');
        text.setAttribute('pointer-events', 'none');
        text.textContent = chord.fingers[s];
        svg.appendChild(text);
      }
    }
  }

  return svg;
}
