# Image-check reader brief — Maximus *Quaestiones et dubia* (kt method, pass 1). Coordinator: Opus, 2026-11-23

⛔ **STOP RULE — READ FIRST.** Every verdict must come from an image you have actually SEEN in this conversation. If a Read of a sheet or a crop returns no image,
an error, or "[media removed]"/"request limit", do NOT write verdicts for that sheet: stop at once and say in your final message which sheet failed and why.
A verdict written from the label text, the OCR, the Latin or the sense alone is a fabrication, and it has happened before on this project.

You decide, from crops of Migne's plate (PG 90, 600 dpi; in this stretch the Greek column is the LEFT on even pdf pages, the RIGHT on odd), what the plate prints at each spot a
translator flagged. Sheets: `/Users/wilsonpruitt/patrologia/raw/kraken/maximus-quaestiones-dubia/sheets/sheet-NNN.png` (24 slots
each, 3 columns). Each slot's red label = `slot. tag [kind] printed → reading`: *printed* is what the OCR gave, *reading*
what the translator thinks the plate must say. The red underline marks where the tool thinks the word is; the red bar at
the left marks the line. Slot details are in `sheets/ROWS.tsv` (columns: sheet slot chunk tag printed reading kind located);
`located` = word / line / MISSING.

**Verdict per slot, one letter:**
- **R** the plate shows the translator's *reading* (letters, accent, breathing, punctuation as the reading has them).
- **P** the plate shows what the OCR *printed* (the translator was wrong; the row is withdrawn).
- **M** the plate prints a faulty form (Migne's own misprint): the plate agrees with *printed* (or shows a third
  wrong form) AND the *reading* is what the sense needs. Add a comment `plate=<form>` if the plate shows a third form.
- **?** you cannot see it: the crop is on the wrong word, on the Latin column, cut off, or the mark is too blotted.
  Don't guess. A `?` gets a whole-line crop in pass 2. Comment why (`crop_on_Latin`, `wrong_word`, `blotted`).
If the plate shows a form different from BOTH printed and reading but the reading's sense is right, use **R** with
`plate=<form>`. Comments: no spaces (use `_`).

**Calibration:** about a third of whole-line crops (`located` = line) land on the wrong line; a `?` is fine, a guess is not. A raised point (·) after a word is punctuation: if the reading adds or drops one, look for it.

**Comment format:** a `plate=<form>` is the LAST thing in its comment (a script reads every Greek token after `plate=`
as the plate's text, and stops at the first Latin letter); any other words go BEFORE it: `blotted_but_plate=ὅλως·`.

**Record each sheet as soon as you have read it**, one Bash call per sheet:

    cd /Users/wilsonpruitt/patrologia && python3 scripts/kt-verdict.py maximus-quaestiones-dubia <N> "1R 2R 3?:crop_on_Latin 4M:plate=τόπον …" --out=translate/maximus-quaestiones-dubia/IMAGE-CHECK-<YOURLETTER>.tsv

The script refuses a sheet with a slot missing; every slot needs a verdict. Read the sheet image with the Read tool, and
the slot list with `awk -F'\t' '$1=="NNN"' raw/kraken/maximus-quaestiones-dubia/sheets/ROWS.tsv` when a label is cut off.
No other files, no web, no agents, no edits to anything else. Final message, short: sheets done, counts R/P/M/?, and any
reading that changes the sense of a sentence (an M on a negative, a name, a numeral) with its tag.


*Quaestiones et dubia* specifics: 79 numbered questions («ΕΡΩΤ. Αʹ» …, often abbreviated), each answered «Ἀπόκρ.»; Kraken mangles the question numerals: a `heading` row
about a numeral is settled by reading the numeral on the plate. Migne's own square brackets are printed text. Pages 396–431, Greek LEFT on even pdf pages, RIGHT on odd.
Several pages carry Greek foot scholia under the body text: a row's crop on a scholion line is `?:crop_on_scholion` unless the row is about it.
The sheet's whole-line crops often land 1–3 lines off: where a slot is undecidable on the sheet, cut your own crop from the 600 dpi page
`raw/kraken/maximus-quaestiones-dubia/pages/p-NNNN.png` (PIL, save under /tmp) and READ it before giving a verdict or `?`.
Reserve M for a form the plate really prints wrong; a print convention the reading only normalises (an acute for a circumflex, a raised point) is P.
**Rows that bear on the sense — look hardest:** any row on a negative (οὐ/μή/οὐκ), on a question numeral, p0403.11 οἶμαι/αἷμα, p0409.19, p0421.04 δεδοικότας/δεδωκότας, p0418–0419 (Q.58).
