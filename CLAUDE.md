# FlashBang

A static flashcard web app. No build step, no backend — pure vanilla HTML/CSS/JS with ES modules.

## Structure

```
index.html          — Single-page app entry
css/style.css       — All styles (summery theme)
js/app.js           — Game engine (shuffle, flip, navigation, screens)
js/decks/index.js   — Deck registry (import all decks here)
js/decks/sat-gre.js — SAT/GRE vocab data (200 words, levels 1-5)
```

## Adding a New Deck

1. Create `js/decks/your-deck.js` following the existing format:
   ```js
   export default {
     id: "unique-id",
     name: "Display Name",
     description: "Short description",
     cards: [
       { word: "...", definition: "...", level: 1 },
     ],
   };
   ```
2. Import and add it to `js/decks/index.js`

## Card Data Format

Each card has: `word` (string), `definition` (string), `level` (1-5 integer).

Level meanings are deck-specific. For SAT/GRE:
- 1 = Common vocabulary
- 2 = Moderately challenging
- 3 = Challenging
- 4 = Advanced
- 5 = Expert/rare

## Dev

No build step. Just open `index.html` in a browser, or:
```bash
npx serve .
```

## Deploy

GitHub Pages — serves from `main` branch root. Push to deploy.
