import { decks } from './decks/index.js';

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

  // Reset button states
  document.querySelectorAll('#mode-select .btn-option').forEach((b) => {
    b.classList.toggle('active', b.dataset.mode === 'word');
  });
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
  showScreen('flash');
  renderCard();
}

function renderCard() {
  const card = cards[currentIndex];
  const cardEl = $('card');

  // Remove flip without animation during card switch
  cardEl.style.transition = 'none';
  cardEl.classList.remove('flipped');
  // Force reflow then restore transition
  cardEl.offsetHeight;
  cardEl.style.transition = '';

  // Determine which side shows what
  let front, back;
  if (displayMode === 'word') {
    front = card.word;
    back = card.definition;
  } else if (displayMode === 'definition') {
    front = card.definition;
    back = card.word;
  } else {
    // Mix: random per card
    if (Math.random() < 0.5) {
      front = card.word;
      back = card.definition;
    } else {
      front = card.definition;
      back = card.word;
    }
  }

  $('card-front-text').textContent = front;
  $('card-back-text').textContent = back;
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
    // End of deck
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
