# Design System

## Concept

The visual language is built around **soil and cultivation** — a direct nod to the project's agricultural focus — rendered in an editorial, earthy palette rather than a typical "NGO blue and green" template look. Furrow-line motifs in the hero section reference tilled fields.

## Color palette

| Token | Hex | Use |
|---|---|---|
| `--soil` | `#141d12` | Primary background |
| `--soil-2` | `#1d2818` | Alternating section background |
| `--card` | `#212c1c` | Callout / card backgrounds |
| `--line` | `#37452e` | Borders, dividers |
| `--maize` | `#d9a441` | Primary accent — headings, highlights, key numbers |
| `--maize-dim` | `#a67d34` | Secondary accent |
| `--brick` | `#9c4429` | Secondary accent — callouts, links, warmth |
| `--cream` | `#ece4d1` | Primary text |
| `--muted` | `#a6a48c` | Secondary / supporting text |

Change these in the `:root` block at the top of `index.html` to re-theme the entire site.

## Typography

| Font | Role |
|---|---|
| **Fraunces** (serif) | Headings, display text, the pull-quote — gives the page warmth and editorial weight |
| **Work Sans** | Body copy — clean and highly readable at small sizes |
| **IBM Plex Mono** | Labels, eyebrows, data (budget figures, indicator tags) — signals "this is a fact/number" vs. narrative text |

## Layout principles

- Generous whitespace (`6rem` vertical section padding) so the page reads as a slow, deliberate scroll rather than a dense info-dump.
- Two-column grids on desktop (context stats, M&E, location) collapse to single column under 800px.
- The eyebrow + horizontal rule pattern (`.eyebrow::before`) is used consistently to label every section — it's the page's main visual signature besides color.

## Motion

- Sections fade/slide in on scroll via `IntersectionObserver` (`.reveal` class).
- Budget bars animate their width from 0 to their real percentage when the budget section scrolls into view — this is the one place motion carries actual information (relative cost of each budget line).
- All motion respects `prefers-reduced-motion: reduce`.

## Design principles to keep if extending the site

1. **No stock-photo aesthetic.** Everything is typographic, color, and simple SVG — no generic imagery.
2. **Data gets monospace.** Numbers, tags, and labels use IBM Plex Mono; narrative prose never does.
3. **One accent does the highlighting.** Maize gold marks the single most important word/number per section; brick is reserved for warnings, callouts, and links. Don't introduce a third accent color.
4. **Motion explains, it doesn't decorate.** Only animate things where the animation itself conveys information (e.g., a bar filling to show proportion) or smooths a state change — not motion for its own sake.
