# Layout

## Page

- Content column `max-width: 1180px`, centred, side padding `--space-12` (48px) on desktop, `--space-4` (16px) under 640px.
- Navigation is the **Dock**: a floating dark pill centred at the top. No sidebar by default; content gets the full width.
- `--space-16` (64px) between the dock and the first content; `--space-12` between the hero figure and what follows; `--space-8` between sections.

## Grid and rhythm

- 8px grid: use `--space-*` only (4, 8, 12, 16, 24, 32, 48, 64).
- Rows: `--space-3` (12px) vertical padding, a 1px `--line` below. The last row of a list keeps its hairline.
- Section heading: `.heading` (16px/700) or a `.caption` label; never both for the same section.

## Corners

| Radius | Use |
|---|---|
| `--radius-sm` 8px | badges' inner chips, calendar cells |
| `--radius-md` 14px | inputs, tiles, non-pill buttons |
| `--radius-lg` 24px | cards and sheets |
| `--radius-pill` 999px | primary and quiet buttons, the dock, segmented controls, badges, River discs |

## Elevation

Two shadows only. `--shadow-card` for cards and sheets (barely there), `--shadow-dock` for the dock and popovers. Everything else is flat on paper.

## Sidebar variant

If the app genuinely needs a sidebar (more than six destinations, or nested navigation), use a 240px column on `--paper` with a 1px `--line` on its right, items 36px tall, the active item on `--sunken` with `--ink` text. Never a dark sidebar; the dock is the only dark object.

## Small screens

Under 640px: hero figure drops to `.figure-l`, the dock becomes a bottom bar with the same styling, ledger rows hide the leader and the date column moves under the name.
