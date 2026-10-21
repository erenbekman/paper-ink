# Principles

Paper & Ink should feel like a well-kept ledger, not a dashboard. Five rules carry the whole system; when in doubt, re-read these.

## 1. Paper, not panels

Most content sits directly on `--paper`, separated by 1px `--line` hairlines. Use `--surface` cards only for things that float: a detail sheet, a popover, a notice that interrupts. If a screen has more than three cards, it has too many.

- Do: a list of rows on paper, each row with a hairline below.
- Don't: every list item in its own white card with a shadow.

## 2. One hero number

Every screen leads with a single figure in `.figure-xl` (72px, weight 300, tight tracking): this month's total, today's streak, open invoices. Everything else is smaller and quieter. Decimals and units sit in `--ink-3` (`<span class="fraction">`).

- Do: "1.248,50" with ",50" in `--ink-3`, a `.caption` label above it.
- Don't: four equal stat cards in a row.

## 3. Ink acts, positive confirms

The only filled button is `.btn-primary` (ink on Paper, mint on Ink). There is at most one per screen. `--positive` (mint) means *done / paid / succeeded*; it is never decoration.

- Do: one "Save" in primary; "Cancel" quiet.
- Don't: a row of coloured buttons; a mint header.

## 4. Time runs left to right

Anything that happens over time is drawn on a horizontal line (the **River**) or listed by date with the past faded and a "Today" rule between past and upcoming. Relative dates near now, absolute dates beyond two weeks.

## 5. Colour carries meaning only

Category hues (`--cat-1` … `--cat-6`) appear as soft tiles with a coloured letter and as chart series. `--pending` (lilac) and `--attention` (clay) are the only state colours, always with a label. No gradients, photos, glow or coloured text blocks.

## The check before you finish

Count these on every screen you produce:

| Check | Limit |
|---|---|
| Cards (`--surface` + shadow) | ≤ 3 |
| Filled buttons | ≤ 1 |
| Hero figures | exactly 1 |
| Font sizes in one row | ≤ 3 |
| Text set in a colour other than `--ink`, `--ink-2`, `--ink-3`, `--brand` or a state colour on its soft ground | 0 |
| Numbers without `tabular-nums` | 0 |
