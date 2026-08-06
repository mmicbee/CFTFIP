## Site Architecture

## Stack

Plain HTML, CSS, and vanilla JavaScript. No framework, no build step, no dependencies to install. The only external resources are Google Fonts, loaded via `<link>` tags in the HTML.

This project is organized into dedicated directories for stylesheets, scripts, and media assets for clean separation of concerns and easier maintainability.

## File structure

```
cftfip/
├── assets/
│   ├── css/
│   │   └── style.css      # All custom styles, variables, and animations
│   ├── images/            # Project photos, graphics, and placeholder images
│   └── js/
│       └── script.js      # Budget ledger rendering and IntersectionObserver logic
├── docs/                  # Project documentation
├── index.html             # Main site structure and content markup
├── LICENSE
└── README.md              # Quick-start overview for repository visitors

```

HTML structure lives in `index.html`, visual presentation is managed in `assets/css/style.css`, dynamic features are handled in `assets/js/script.js`, and visual media is stored in `assets/images/`.

---

## Section-by-section breakdown

`index.html` is organized top-to-bottom in the same order content appears on the page:

| Section (`<section class="...">`) | Purpose |
| --- | --- |
| `.hero` | Title, mission statement, opening quote, scroll cue |
| `.context` | The problem: narrative + statistics grid |
| `.pillars` / `.plots` | The project pillars/plots, featuring side-by-side cards with image placeholders |
| `.me` | Monitoring & evaluation: plan-building steps + reporting cadence |
| `.budget` | Animated budget ledger, populated dynamically via `script.js` |
| `.location` | Target location narrative + location cards/gallery |
| `.contact` / `footer` | Call to action + contact links |

---

## Data-driven parts

Dynamic interaction and rendering are isolated in `assets/js/script.js`:

1. **Budget ledger** (`budgetItems` array in `assets/js/script.js`) — each entry is `[name, amount]`. The total, percentages, and bar widths are all calculated from this array at runtime and injected into `index.html`. To update the budget, edit this array only.
2. **Scroll reveal animations** — elements with the `reveal` class are animated into view via an `IntersectionObserver`. Simply add `class="reveal"` to any HTML element you wish to animate on scroll.

---

## Adding a new section or asset

1. **Markup:** Add a `<section>` in `index.html` following the existing pattern (eyebrow → heading → content structure).
2. **Styles:** Add any section-specific styling to `assets/css/style.css`, reusing existing CSS custom properties (`--paper`, `--ink`, `--gold`, `--green`, `--clay`, etc. defined in `:root`).
3. **Images:** Store any new images or visual assets under `assets/images/` and reference them relative to `index.html` (e.g., `src="assets/images/my-image.jpg"`).
4. **Scripts:** If the new section requires dynamic rendering or data manipulation, add the underlying data structure and logic to `assets/js/script.js`.
