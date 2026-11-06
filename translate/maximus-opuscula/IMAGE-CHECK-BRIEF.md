# Image-check reader brief — Maximus *Opuscula* (kt method, pass 1). Coordinator: Opus, 2026-11-06

You decide, from crops of Migne's plate (PG 91, Combefis's Greek, 600 dpi), what the plate prints at each spot a
translator flagged. Sheets: `/Users/wilsonpruitt/patrologia/raw/kraken/maximus-opuscula/sheets/sheet-NNN.png` (24 slots
each, 3 columns). Each slot's red label = `slot. tag [kind] printed → reading`: *printed* is what the OCR gave, *reading*
what the translator thinks the plate must say. The red underline marks where the tool thinks the word is; the red bar at
the left marks the line. Slot details are in `sheets/ROWS.tsv` (columns: sheet slot chunk tag printed reading kind located);
`located` = word / line / MISSING.

**Verdict per slot, one letter:**
- **R** the plate shows the translator's *reading* (letters, accent, breathing, punctuation as the reading has them).
- **P** the plate shows what the OCR *printed* (the translator was wrong; the row is withdrawn).
- **M** the plate prints a faulty form (Migne's/Combefis's own misprint): the plate agrees with *printed* (or shows a third
  wrong form) AND the *reading* is what the sense needs. Add a comment `plate=<form>` if the plate shows a third form.
- **?** you cannot see it: the crop is on the wrong word, on the Latin column, cut off, or the mark is too blotted.
  Don't guess. A `?` gets a whole-line crop in pass 2. Comment why (`crop_on_Latin`, `wrong_word`, `blotted`).
If the plate shows a form different from BOTH printed and reading but the reading's sense is right, use **R** with
`plate=<form>`. Comments: no spaces (use `_`).

**Calibration (sheet 001, done by the coordinator):** slot 1 Πάτερ visible → R; slot 11 the plate prints the point after
λόγου → P; slot 14 the plate clearly prints τόπον, the translator wants τρόπον → M; slots 16, 20 crop on the Latin → ?;
slot 18 crop on Ἐκεῖνα, not the flagged word → ?.

**Record each sheet as soon as you have read it**, one Bash call per sheet:

    cd /Users/wilsonpruitt/patrologia && python3 scripts/kt-verdict.py maximus-opuscula <N> "1R 2R 3?:crop_on_Latin 4M:plate=τόπον …" --out=translate/maximus-opuscula/IMAGE-CHECK-<YOURLETTER>.tsv

The script refuses a sheet with a slot missing; every slot needs a verdict. Read the sheet image with the Read tool, and
the slot list with `awk -F'\t' '$1=="NNN"' raw/kraken/maximus-opuscula/sheets/ROWS.tsv` when a label is cut off.
No other files, no web, no agents, no edits to anything else. Final message, short: sheets done, counts R/P/M/?, and any
reading that changes the sense of a sentence (an M on a negative, a name, a numeral) with its tag.
