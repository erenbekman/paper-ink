---
name: paper-ink
description: Calm, paper-like UI for apps. Use when building or restyling any application screen — dashboards, lists, tables, forms, settings, detail panels, empty states — in HTML, Vue, React, Svelte or Tailwind, and the user wants a calm, minimal, "paper and ink" look, says "paper-ink" or "paper ink", asks to make a UI less generic or less like default AI output, or the project already uses paper-ink tokens. Not for landing pages, posters, slides or brand identity.
---

# Paper & Ink

A design language for application UI: mint-white paper, deep green ink, hairlines instead of boxes, one big number per screen. It should feel like a well-kept ledger, not a dashboard. Extracted from [Subbrook](https://subbrook.com), a shipping desktop app.

## When to use

- Building a new app screen, or restyling an existing one, when the user asked for this look.
- The project already imports `tokens.css` from paper-ink, or has `--paper` / `--ink` variables: keep using them.

Not for marketing pages, posters, decks or logos.

## Set up once per project

Copy the files from this skill's directory into the project; do not link to the skill folder.

| Stack | Do this |
|---|---|
| Plain HTML, Vue, React, Svelte (no Tailwind) | Copy `tokens.css` and `paper-ink.css` into the styles folder and import both, tokens first. |
| Tailwind v4 | Copy `tokens.css` and `tailwind.css`; `@import "./tailwind.css";` after `@import "tailwindcss";`. Utilities: `bg-paper`, `text-ink-2`, `border-line`, `text-figure-xl`, `rounded-pill`, `shadow-card`. |
| Tailwind v3 | Copy `tokens.css` (import it globally) and add `presets: [require('./tailwind.preset.js')]` to `tailwind.config.js`. |

Load Manrope: `<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300..800&display=swap" rel="stylesheet">`.

Theme: light ("Paper") by default, dark ("Ink") follows the system; force one with `data-theme="light|dark"` on `<html>`.

## The five rules

1. **Paper, not panels.** Content sits on `--paper`, rows separated by 1px `--line`. Cards (`--surface` + `--shadow-card`) only for floating things; three per screen at most.
2. **One hero number.** Each screen leads with one `.figure-xl` value (72px, weight 300); decimals and units in `--ink-3`.
3. **Ink acts, positive confirms.** One filled `.btn-primary` per screen. `--positive` (mint) only means done or succeeded.
4. **Time runs left to right.** Scheduled things on the River or in a date-ordered ledger with the past faded and a "Today" rule.
5. **Colour carries meaning only.** Category colours on tiles and charts; `--pending` and `--attention` are the only state colours, always with words. No gradients.

Details and examples: `references/principles.md`.

## Tokens

| Role | Variable | Use |
|---|---|---|
| Ground | `--paper` | window background |
| Floating | `--surface` | cards, sheets, popovers, inputs |
| Recessed | `--sunken` | segmented tracks, hover wash, empty cells |
| Hairlines | `--line`, `--line-strong` | row dividers; control borders and dotted leaders |
| Text | `--ink`, `--ink-2`, `--ink-3` | primary; metadata and labels; captions, placeholders, decimals |
| Action | `--primary`, `--on-primary` | the one filled button |
| Brand | `--brand` | links, focus ring, today marker, text on `--positive-soft` |
| States | `--positive(-soft)`, `--pending(-soft)`, `--attention(-soft)` | done; trial, draft, waiting; increase, overdue, error |
| Categories | `--cat-1` … `--cat-6` (+ `-soft`) | tiles and chart series, stable per entity |
| Navigation | `--dock`, `--on-dock`, `--on-dock-2` | the dock, dark in both themes |
| Space | `--space-1,2,3,4,6,8,12,16` | 4–64px, 8px grid |
| Radius | `--radius-sm,md,lg,pill` | 8, 14, 24, pill |
| Shadow | `--shadow-card`, `--shadow-dock` | cards; dock and popovers |

Type scale (classes in `paper-ink.css`, Tailwind `text-*`): `figure-xl` 72/300, `figure-l` 34/300, `figure` 15/600, `title` 26/600, `heading` 16/700, `body` 14/500, `meta` 13/500, `caption` 11/700 uppercase.

Never write a hex value in a component; use a variable.

## Components

Button · Badge · Tile · LedgerRow · Hero figure · Segmented control · Field · Switch · Card and sheet · Dock · River · Empty state · Charts. Anatomy, states and markup: `references/components.md`. Page structure, sidebar variant and small screens: `references/layout.md`. Words, numbers, dates and errors: `references/voice.md`. Full screens to copy from: `examples/habit-dashboard`, `examples/settings`, `examples/invoices`.

## How to build a screen

1. Decide the one number this screen is about; it becomes the hero figure.
2. Lay out on paper: dock on top, hero, then a ledger, a River or a form. Reach for a card only if something must float.
3. Use the components as written; extend with tokens, never with new colours.
4. Write the copy with `references/voice.md`.
5. Run the check below, fix, and only then present the result.

## Check before you finish

- [ ] ≤ 3 cards, exactly 1 hero figure, ≤ 1 filled button
- [ ] no hex values or Tailwind default colours (`blue-500`, `gray-100`…) in the markup
- [ ] no gradients, coloured left borders, emoji icons, or 4-up stat cards (`references/dont.md`)
- [ ] every number tabular; amounts right-aligned in lists
- [ ] states have words (badges), not colour alone; text contrast holds in both themes
- [ ] looks right with `data-theme="dark"` too
