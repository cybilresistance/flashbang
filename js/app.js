import { decks } from './decks/index.js';
import { renderBoard } from './chess-renderer.js';

// --- State ---
let currentDeck = null;
let cards = [];
let currentIndex = 0;
let displayMode = 'word'; // 'word' | 'definition' | 'mix'
let selectedLevel = 'all';

// --- DOM ---
const $ = (id) => document.getElementById(id);

const screens = {
  select: $('set-select'),
  config: $('session-config'),
  flash: $('flashcard-screen'),
  end: $('end-screen'),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// --- Helpers ---
function isChessDeck() {
  return currentDeck && currentDeck.cardType === 'chess';
}

// --- Shuffle (Fisher-Yates) ---
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Deck Grid ---
function renderDeckGrid() {
  const grid = $('deck-grid');
  grid.innerHTML = '';
  decks.forEach((deck) => {
    const btn = document.createElement('button');
    btn.className = 'deck-card';
    const levels = [...new Set(deck.cards.map((c) => c.level))].sort();
    btn.innerHTML = `
      <h3>${deck.name}</h3>
      <p class="deck-meta">${deck.description}</p>
      <span class="deck-tag">${deck.cards.length} cards &middot; Levels ${levels[0]}-${levels[levels.length - 1]}</span>
    `;
    btn.addEventListener('click', () => openConfig(deck));
    grid.appendChild(btn);
  });
}

// --- Config ---
function openConfig(deck) {
  currentDeck = deck;
  $('config-deck-name').textContent = deck.name;
  $('config-deck-desc').textContent = deck.description;
  selectedLevel = 'all';
  displayMode = 'word';

  // Show/hide mode selector based on deck type
  const modeSection = $('mode-section');
  if (deck.cardType === 'chess') {
    modeSection.style.display = 'none';
  } else {
    modeSection.style.display = 'block';
    document.querySelectorAll('#mode-select .btn-option').forEach((b) => {
      b.classList.toggle('active', b.dataset.mode === 'word');
    });
  }

  document.querySelectorAll('#level-select .btn-option').forEach((b) => {
    b.classList.toggle('active', b.dataset.level === 'all');
  });

  updateCardCount();
  showScreen('config');
}

function getFilteredCards() {
  if (!currentDeck) return [];
  if (selectedLevel === 'all') return currentDeck.cards;
  return currentDeck.cards.filter((c) => c.level === parseInt(selectedLevel));
}

function updateCardCount() {
  const count = getFilteredCards().length;
  $('config-card-count').textContent = `${count} card${count !== 1 ? 's' : ''} selected`;
  $('start-btn').disabled = count === 0;
}

// Mode & Level selectors
$('mode-select').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-option');
  if (!btn) return;
  displayMode = btn.dataset.mode;
  document.querySelectorAll('#mode-select .btn-option').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
});

$('level-select').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-option');
  if (!btn) return;
  selectedLevel = btn.dataset.level;
  document.querySelectorAll('#level-select .btn-option').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  updateCardCount();
});

// --- Session ---
$('start-btn').addEventListener('click', startSession);

function startSession() {
  cards = shuffle(getFilteredCards());
  currentIndex = 0;

  // Toggle chess-card class on container for layout
  const container = $('card-container');
  container.classList.toggle('chess-card', isChessDeck());

  showScreen('flash');
  renderCard();
}

function renderCard() {
  const card = cards[currentIndex];
  const cardEl = $('card');

  // Remove flip without animation during card switch
  cardEl.style.transition = 'none';
  cardEl.classList.remove('flipped');
  cardEl.offsetHeight; // Force reflow
  cardEl.style.transition = '';

  const frontText = $('card-front-text');
  const backText = $('card-back-text');
  const frontBoard = $('card-front-board');
  const backBoard = $('card-back-board');

  if (isChessDeck()) {
    // Chess card: board on front, move + solution on back
    frontText.style.display = 'none';
    backBoard.style.display = 'none';
    frontBoard.style.display = 'flex';
    backText.style.display = 'block';

    // Render chess board
    frontBoard.innerHTML = '';
    const flipped = card.toMove === 'Black';
    const svg = renderBoard(card.fen, { size: 400, flipped });
    frontBoard.appendChild(svg);

    // Add "to move" label
    const label = document.createElement('div');
    label.className = 'chess-to-move';
    label.textContent = `${card.toMove} to move`;
    frontBoard.appendChild(label);

    // Back: best move + solution + themes
    let backHtml = `<strong>${card.bestMove}</strong>`;
    if (card.solution && card.solution !== card.bestMove) {
      backHtml += `<br><span class="chess-solution">${card.solution}</span>`;
    }
    if (card.themes && card.themes.length > 0) {
      backHtml += `<br><span class="chess-themes">${card.themes.join(' · ')}</span>`;
    }
    if (card.rating) {
      backHtml += `<br><span class="chess-rating">Rating: ${card.rating}</span>`;
    }
    backText.innerHTML = backHtml;
  } else {
    // Text card: word/definition
    frontText.style.display = 'block';
    backText.style.display = 'block';
    frontBoard.style.display = 'none';
    backBoard.style.display = 'none';

    let front, back;
    if (displayMode === 'word') {
      front = card.word;
      back = card.definition;
    } else if (displayMode === 'definition') {
      front = card.definition;
      back = card.word;
    } else {
      if (Math.random() < 0.5) {
        front = card.word;
        back = card.definition;
      } else {
        front = card.definition;
        back = card.word;
      }
    }

    frontText.textContent = front;
    backText.textContent = back;
  }

  $('card-level-front').textContent = card.level;
  $('card-level-back').textContent = card.level;

  // Progress
  $('progress-text').textContent = `${currentIndex + 1} / ${cards.length}`;
  $('progress-bar').style.width = `${((currentIndex + 1) / cards.length) * 100}%`;

  // Nav button states
  $('prev-btn').disabled = currentIndex === 0;
  $('next-btn').textContent = currentIndex === cards.length - 1 ? 'Finish' : 'Next \u2192';

  // Hide flip hint after first card
  $('flip-hint').style.display = currentIndex === 0 ? 'block' : 'none';
}

// Flip
$('card-container').addEventListener('click', () => {
  $('card').classList.toggle('flipped');
});

// Navigation
$('prev-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
});

$('next-btn').addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    renderCard();
  } else {
    $('end-summary').textContent = `You went through all ${cards.length} cards in the ${currentDeck.name} deck.`;
    showScreen('end');
  }
});

// Back buttons
$('back-to-sets').addEventListener('click', () => showScreen('select'));
$('back-to-config').addEventListener('click', () => showScreen('config'));
$('back-to-sets-end').addEventListener('click', () => showScreen('select'));
$('play-again-btn').addEventListener('click', startSession);

// Keyboard
document.addEventListener('keydown', (e) => {
  if (!screens.flash.classList.contains('active')) return;

  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    $('card').classList.toggle('flipped');
  } else if (e.key === 'ArrowLeft') {
    $('prev-btn').click();
  } else if (e.key === 'ArrowRight') {
    $('next-btn').click();
  }
});

// --- Init ---
renderDeckGrid();
