# Components

Class names refer to `paper-ink.css`. In Tailwind projects use the same tokens through `tailwind.preset.js` (v3) or `tailwind.css` (v4); the anatomy and rules are what matter.

---

## Button

Pill-shaped actions in three weights. **At most one `primary` per screen.**

| Variant | Use for | Style |
|---|---|---|
| `.btn .btn-primary` | the main action (Add, Save, Import) | `--primary` fill, `--on-primary` text, 40px, pill |
| `.btn` (quiet) | secondary actions (Edit, Pause, Share, Cancel) | transparent, 1px `--line-strong`, `--ink` text |
| `.btn .btn-text` | links and inline actions | `--brand`, 600, arrow suffix for navigation |

Disabled: `--line` border, `--ink-3` text. Focus: 2px `--brand` ring, 2px offset. Destructive actions are quiet buttons with `--attention` text, confirmed in a sheet.

```html
<button class="btn btn-primary">Add invoice</button>
<button class="btn">Cancel</button>
<a class="btn btn-text" href="#">See all →</a>
```

## Badge

A short state label on its soft ground: `.badge-positive`, `.badge-pending`, `.badge-attention`, `.badge-muted`. 22px tall, pill, 11px/700. Always words, never colour alone.

```html
<span class="badge badge-pending">Trial</span>
<span class="badge badge-attention">+12%</span>
```

## Tile

The list marker for any entity (a service, a person, a project, a category): a 36px `--radius-md` square on `--cat-N-soft` with the first letter in `--cat-N`, bold. `data-cat="1…6"` picks the hue; keep a stable mapping per entity. `.tile-pending` is a dashed `--pending` outline for things not yet real (a trial, a draft). The user may replace a tile with their own image at the same size.

```html
<span class="tile" data-cat="3" aria-hidden="true">F</span>
```

## LedgerRow

One record in a statement-style list: when · tile · name and meta · dotted leader · badge · value. The whole row is a button that opens the detail sheet.

- Rows before today get `.past` (50% opacity); a `.ledger-today` rule ("TODAY") separates past from upcoming.
- Value in `figure` style, tabular, right-aligned. A secondary value (original currency, count) goes in the meta line in `--ink-3`.
- Hover: `--sunken` wash. Focus: the global ring.

```html
<ul class="ledger">
  <li><button class="ledger-row past">
    <span class="when">Oct 2</span>
    <span class="tile" data-cat="2" aria-hidden="true">F</span>
    <span><span class="name">Figma</span><br><span class="meta">Design · monthly</span></span>
    <span class="leader"></span>
    <span></span>
    <span class="value">$15.00</span>
  </button></li>
  <li class="ledger-today caption">Today</li>
  <li><button class="ledger-row">
    <span class="when">Oct 24</span>
    <span class="tile tile-pending" aria-hidden="true">L</span>
    <span><span class="name">Linear</span><br><span class="meta">Dev tools · trial ends</span></span>
    <span class="leader"></span>
    <span class="badge badge-pending">Trial</span>
    <span class="value">$8.00</span>
  </button></li>
</ul>
```

## Hero figure

The one number a screen is about. `.caption` label above, `.figure-xl` value, decimals or unit in `<span class="fraction">`, one quiet line of context below in `.meta`. Optionally a thin progress line under it (4px, `--positive` for done, `--line` for remaining, gaps of 2px between segments).

```html
<div class="caption">This month</div>
<div class="figure-xl">1.248<span class="fraction">,50</span></div>
<div class="meta">₺982,10 paid · ₺266,40 still to come</div>
```

## Segmented control

Switches between views of the same data. `--sunken` track, `--surface` thumb with a 1px shadow, 28px items, pill. Two to five options; more than five is a select.

```html
<div class="segmented" role="tablist">
  <button role="tab" aria-selected="true">Overview</button>
  <button role="tab" aria-selected="false">Calendar</button>
</div>
```

## Field and input

Label above (12px/700, `--ink-2`), 40px input on `--surface` with a 1px `--line-strong` border and `--radius-md`, optional hint below in `--ink-3`. One column of fields; related short fields may share a row. Errors: the hint turns `--attention` and says how to fix it.

```html
<div class="field">
  <label for="amount">Amount</label>
  <input id="amount" class="input" inputmode="decimal" placeholder="0.00">
  <span class="hint">In your main currency.</span>
</div>
```

## Switch

On/off settings that apply immediately. 36×22, `--line-strong` off, `--brand` on. The label is the row's text, never "Enable X".

```html
<label class="ledger-row" style="grid-template-columns:1fr auto;cursor:default">
  <span><span class="name">Renewal reminders</span><br><span class="meta">A day before each charge</span></span>
  <input type="checkbox" class="switch" checked>
</label>
```

## Card and sheet

`.card`: `--surface`, `--radius-lg`, `--shadow-card`, `--space-6` padding. Only for floating content (a notice, a summary that must stand apart). `.sheet`: the detail panel that slides in from the right (or a centred dialog), `--shadow-dock`. A sheet has one title, the hero value of the item, its ledger of history and at most one primary action.

## Dock

The navigation: a floating dark pill centred at the top of the window, replacing a sidebar. Stays dark in both themes, the one constant object of the app.

- `--dock` ground, pill, `--shadow-dock`, 6px inner padding, 36px items.
- Active item: translucent light pill, `--on-dock` label and a 6px `--leaf` dot. Inactive: `--on-dock-2`.
- Ends with a hairline separator, a ⌘K search trigger and a circular `.add` button in `--positive`.
- Keyboard: ⌘1–⌘4 switch sections, ⌘K search, ⌘N add.

```html
<nav class="dock" aria-label="Main">
  <a href="#" aria-current="page">Overview</a>
  <a href="#">Calendar</a>
  <a href="#">Invoices</a>
  <span class="sep"></span>
  <button>⌘K Search</button>
  <button class="add" aria-label="Add">+</button>
</nav>
```

## River

The signature view for anything scheduled: the next 30–60 days as a horizontal line, each item a disc whose diameter grows with the square root of its value (`18px + 0.6 × √value`, capped at 72px).

- Discs alternate above and below the line so neighbours never collide; the value sits on the far side of the disc.
- Done: `--positive` fill. Upcoming: the item's category colour. Pending (a trial, a draft): dashed `--pending` ring, no fill.
- Today: a 1px `--brand` vertical rule with a `TODAY` caption.
- Hover or focus a disc to show name, date and value; click opens the detail sheet. Scrolls horizontally on narrow windows.
- Draw it as inline SVG (a `<line>` plus `<circle>`s), not a chart library.

## Empty state

Centred in the content column: one `.heading`, one sentence in `--ink-2`, one primary action. See `voice.md`.

```html
<div class="empty">
  <p class="heading">No invoices yet</p>
  <p>Invoices you send will show up here, newest first.</p>
  <button class="btn btn-primary">Create invoice</button>
</div>
```

## Charts

Prefer the River for time and a single horizontal stacked bar for parts of a whole (4px tall, 2px gaps, category colours, a legend of tiles and values below). Line charts: 2px `--brand` line, no fill, no grid except a `--line` baseline. No pies, donuts, 3D or gradients.
