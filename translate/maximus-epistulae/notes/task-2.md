# Migne's foot-of-page apparatus: Maximus the Confessor, *Epistulae* (PG 91), pages p-0218–p-0235 (18 pages)

Read-only transcription task. Work in `~/patrologia/translate/maximus-epistulae/notes/`. Images are in `img/`:
for every page a whole-page thumbnail `<page>-thumb.png` (700 px wide: use it to LOCATE every note block) and tiles
`<page>-t<N>.png` (2100 px wide halves, overlapping, of the layout model's note-block regions; a page the model found
nothing on carries its bottom band instead, listed in `manifest.json` with `model_found_notes`). The full 600 dpi page
is `~/patrologia/raw/kraken/maximus-epistulae/pages/<page>.png` (≈3971 × 6331). Tiles are halves: a note running across the
page continues from the left tile into the right one (200 px overlap).

**What Migne prints.** Under the two columns (LATIN left, GREEK right, or alternating by page) in small type, full page
width, **notes**: Latin cautions and cross-references keyed to raised marks in either column; Scripture references;
and, under a heading VARIÆ LECTIONES, numbered corrections/variants for the Greek (`²¹ al. Φαρῶν et Φαρῶ.`). Marks may
be numbers, letters (a–z skipping j, w), or asterisks. Note blocks can stand MID-PAGE where a chapter or section
division falls; Combefis's notes are keyed by LETTERS (a), (b) … and by NUMBERS (1), (2) … and by superscript numerals in the Greek; the Latin notes are Combefis's own (variants from his manuscripts "Reg.", "Fr.", "Marg.", conjectures, Scripture locators, learned comments). A page can
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

Write one JSON object per note, one per line, to `~/patrologia/translate/maximus-epistulae/notes/result-2.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.


Note calls in the text are small raised numerals, letters or asterisks; the OCR often misread them as letters (ʃ, », αι, ς, "(2)"): they are calls, not words. If a page has Latin-only text, `column` is `"latin"`. Notes of kind VARIÆ LECTIONES (variant readings of the Greek) get no `en` if bare `al. X`.

The Greek stands RIGHT on even pdf pages and LEFT on odd (`column` = "greek" / "latin" accordingly). Where one column ends early Migne sets the other across the full width: that is body text, not a note. Note calls in the Greek text are small raised numerals or bracketed letters; the OCR often read them as letters: they are calls, not words.
## Pages
- p-0218: p-0218-thumb.png, p-0218-t1.png, p-0218-t2.png
- p-0219: p-0219-thumb.png, p-0219-t1.png, p-0219-t2.png
- p-0220: p-0220-thumb.png, p-0220-t1.png, p-0220-t2.png
- p-0221: p-0221-thumb.png, p-0221-t1.png, p-0221-t2.png, p-0221-t3.png, p-0221-t4.png
- p-0222: p-0222-thumb.png, p-0222-t1.png, p-0222-t2.png
- p-0223: p-0223-thumb.png, p-0223-t1.png, p-0223-t2.png, p-0223-t3.png, p-0223-t4.png
- p-0224: p-0224-thumb.png, p-0224-t1.png, p-0224-t2.png, p-0224-t3.png, p-0224-t4.png, p-0224-t5.png, p-0224-t6.png, p-0224-t7.png, p-0224-t8.png, p-0224-t9.png, p-0224-t10.png
- p-0225: p-0225-thumb.png, p-0225-t1.png, p-0225-t2.png, p-0225-t3.png, p-0225-t4.png, p-0225-t5.png, p-0225-t6.png
- p-0226: p-0226-thumb.png, p-0226-t1.png, p-0226-t2.png
- p-0227: p-0227-thumb.png, p-0227-t1.png, p-0227-t2.png, p-0227-t3.png, p-0227-t4.png
- p-0228: p-0228-thumb.png, p-0228-t1.png, p-0228-t2.png, p-0228-t3.png, p-0228-t4.png, p-0228-t5.png, p-0228-t6.png
- p-0229: p-0229-thumb.png, p-0229-t1.png, p-0229-t2.png
- p-0230: p-0230-thumb.png, p-0230-t1.png, p-0230-t2.png, p-0230-t3.png, p-0230-t4.png, p-0230-t5.png, p-0230-t6.png
- p-0231: p-0231-thumb.png, p-0231-t1.png, p-0231-t2.png
- p-0232: p-0232-thumb.png, p-0232-t1.png, p-0232-t2.png, p-0232-t3.png, p-0232-t4.png
- p-0233: p-0233-thumb.png, p-0233-t1.png, p-0233-t2.png
- p-0234: p-0234-thumb.png, p-0234-t1.png, p-0234-t2.png
- p-0235: p-0235-thumb.png, p-0235-t1.png, p-0235-t2.png, p-0235-t3.png, p-0235-t4.png
