# Image-check reader brief — Maximus *Ad Theopemptum scholasticum* (kt method, PASS 2: the rows pass 1 left as ?). Coordinator: Opus, 2026-11-21

You decide, from crops of Migne's plate (PG 90, 600 dpi), what the plate prints at each spot a
translator flagged. Sheets: `/Users/wilsonpruitt/patrologia/raw/kraken/maximus-theopemptus/sheets3/sheet-NNN.png` (10 slots
each, one per row: the whole Greek half-page width over the target line, with one line above and below; the black bar at
the left marks the target line). Each slot's red label = `slot. tag [kind] printed → reading`: *printed* is what the OCR gave, *reading*
what the translator thinks the plate must say. There is no underline in pass 2: FIND the printed token in the marked line (it may be the last word of the line above if
the tag points at a hyphenated continuation). Slot details are in `sheets3/ROWS.tsv` (columns: sheet slot chunk tag printed reading kind located);
`located` = half / MISSING. These rows were undecidable on tight crops; most are breathings, accents, subscripts, line
starts squeezed into the gutter (the letters are usually on the plate: read them), or crops that hit the
wrong word. Use ? only if the mark is still not decidable at this size.

**Verdict per slot, one letter:**
- **R** the plate shows the translator's *reading* (letters, accent, breathing, punctuation as the reading has them).
- **P** the plate shows what the OCR *printed* (the translator was wrong; the row is withdrawn).
- **M** the plate prints a faulty form (Migne's own misprint): the plate agrees with *printed* (or shows a third
  wrong form) AND the *reading* is what the sense needs. Add a comment `plate=<form>` if the plate shows a third form.
- **?** you cannot see it: the crop is on the wrong word, on the Latin column, cut off, or the mark is too blotted.
  Don't guess. A `?` gets a whole-line crop in pass 2. Comment why (`crop_on_Latin`, `wrong_word`, `blotted`).
If the plate shows a form different from BOTH printed and reading but the reading's sense is right, use **R** with
`plate=<form>`. Comments: no spaces (use `_`).

**Note:** if a line start is smeared or the scan clips letters, answer ? with `line_start_damaged_in_scan` / `scan_clipped_right_edge`: never supply a letter the damage hides.
**Comment format:** a `plate=<form>` is the LAST thing in its comment; other words go before it.
**Punctuation and convention rule (set by the coordinator after pass 1):** where the plate prints Migne's own convention
(ταυτὸν without coronis, lower-case θεοτόκος, a raised point) and the reading only normalises it, the verdict is **P**,
not M: M is for a form that is WRONG (a wrong letter, a wrong word, a lost negative).

**Record each sheet as soon as you have read it**, one Bash call per sheet:

    cd /Users/wilsonpruitt/patrologia && python3 scripts/kt-verdict.py maximus-theopemptus <N> "1R 2R 3?:crop_on_Latin 4M:plate=τόπον …" --rows=raw/kraken/maximus-theopemptus/sheets3/ROWS.tsv --out=translate/maximus-theopemptus/IMAGE-CHECK2-<YOURLETTER>.tsv

The script refuses a sheet with a slot missing; every slot needs a verdict. Read the sheet image with the Read tool, and
the slot list with `awk -F'\t' '$1=="NNN"' raw/kraken/maximus-theopemptus/sheets3/ROWS.tsv` when a label is cut off.
No other files, no web, no agents, no edits to anything else. Final message, short: sheets done, counts R/P/M/?, and any
reading that changes the sense of a sentence (an M on a negative, a name, a numeral) with its tag.

