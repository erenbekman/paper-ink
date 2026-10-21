# Voice

The interface talks like a calm friend who keeps good records.

## Words

- Plain and short. "Renews in 3 days", not "Upcoming renewal scheduled".
- Verbs on buttons: "Add invoice", "Save", "Import statement". Never "Submit" or "OK".
- Suggest, don't scold. "Worth a look" rather than "Wasted money". "3 tasks waiting" rather than "You are behind".
- Sentence case everywhere except `.caption` labels, which are uppercase by style (write them in sentence case in the markup).

## Numbers

- Every number uses tabular numerals (`font-variant-numeric: tabular-nums`, already set on `body`).
- The user's unit first, the original second in `--ink-3`: "$16.00 · ≈ ₺672".
- Amounts right-aligned in lists; the hero figure left-aligned.
- Decimals and units in `--ink-3` on hero figures.

## Dates

- Relative near the present: "today", "yesterday", "in 3 days".
- Absolute beyond two weeks: "Nov 8", "Mar 2027".
- Times only when they matter, 24h or the user's locale.

## Empty states

One sentence on what will appear here, one primary action to make it appear. No illustrations of people; a single line icon at most.

> **No invoices yet**
> Invoices you send will show up here, newest first.
> [Create invoice]

## Errors

Say what happened and what to do, in that order, without blame: "Couldn't reach the bank. Your data is safe; try again in a minute." Errors use `--attention` text on `--attention-soft`, never a red banner.
