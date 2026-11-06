# Migne's foot-of-page apparatus: Sophronius of Jerusalem, *Epistola synodica* and *Orationes* (PG 87.3), pages p-0187–p-0205 (RECHECK of 6 pages)

Read-only transcription task. Work in `~/patrologia/translate/sophronius-orationes/notes/`. Images are in `img/`:
for every page a whole-page thumbnail `<page>-thumb.png` (700 px wide: use it to LOCATE every note block) and tiles
`<page>-t<N>.png` (2100 px wide halves, overlapping, of the layout model's note-block regions; a page the model found
nothing on carries its bottom band instead, listed in `manifest.json` with `model_found_notes`). The full 600 dpi page
is `~/patrologia/raw/kraken/sophronius-orationes/pages/<page>.png` (≈3971 × 6300). Tiles are halves: a note running across the
page continues from the left tile into the right one (200 px overlap).

**What Migne prints.** Under the two columns (LATIN left, GREEK right, or alternating by page) in small type, full page
width, **notes**: Latin cautions and cross-references keyed to raised marks in either column; Scripture references;
and, under a heading VARIÆ LECTIONES, numbered corrections/variants for the Greek (`²¹ al. Φαρῶν et Φαρῶ.`). Marks may
be numbers, letters (a–z skipping j, w), or asterisks. Note blocks can stand MID-PAGE where a chapter or section
division falls; some pages (the Latin-only orations I, III, VI, roughly p-0215–p-0264) have only a Latin column: their notes are Latin or Greek-citation notes, same rules. A page can
have none. **The layout model misses blocks: decide from the thumbnail, never from the tile list alone.**

**For every page:**
1. Look at the thumbnail first; locate every note block (foot, mid-page, or none).
2. Read every note from the tiles. If a tile is missing, clipped or too small, cut your own from the 600 dpi page
   (`python3 -c "from PIL import Image; Image.open('<page path>').crop((x0,y0,x1,y1)).save('/tmp/c.png')"`) and Read it.
3. Transcribe each note exactly (Greek with accents, Latin as printed, abbreviations as printed), with its marker.
   A marker you cannot read (inked blob: digits close their counters first) is `"markerState": "illegible"`,
   `"marker": null`; NEVER complete it from the sequence. Do not guess a note you cannot read: record `"text": null`
   and say why in `"unreadable"`.
4. Find each note's raised mark in the running text (cut a 600 dpi crop of the column if needed) and give the word it
   follows (`anchorWord`), that line's text as far as you can read it (`anchorLine`), and the column (`"latin"` or
   `"greek"`). If you cannot find it, set `"anchorWord": null`.
5. For every note that is a SENTENCE that says something (Scripture references and bare variants need none), add a
   plain English rendering in `"en"`. Bare `al. X` variants and Scripture locators: no `en`.

Write one JSON object per note, one per line, to `~/patrologia/translate/sophronius-orationes/notes/result-1b.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.


Note calls in the text are small raised numerals, letters or asterisks; the OCR often misread them as letters (ʃ, », αι, ς, "(2)"): they are calls, not words. If a page has Latin-only text, `column` is `"latin"`. Notes of kind VARIÆ LECTIONES (variant readings of the Greek) get no `en` if bare `al. X`.

⚠ RECHECK: an earlier pass could not see these images properly and guessed. Do NOT reuse any earlier output. If an image comes back blank or without pixels, say so and stop for that page rather than guessing; record `"text": null` for any note you cannot actually read.

## Pages
- p-0187: p-0187-thumb.png, p-0187-t1.png, p-0187-t2.png, p-0187-t3.png, p-0187-t4.png
- p-0188: p-0188-thumb.png, p-0188-t1.png, p-0188-t2.png
- p-0189: p-0189-thumb.png, p-0189-t1.png, p-0189-t2.png
- p-0190: p-0190-thumb.png, p-0190-t1.png, p-0190-t2.png
- p-0191: p-0191-thumb.png, p-0191-t1.png, p-0191-t2.png, p-0191-t3.png, p-0191-t4.png
- p-0192: p-0192-thumb.png, p-0192-t1.png, p-0192-t2.png, p-0192-t3.png, p-0192-t4.png
