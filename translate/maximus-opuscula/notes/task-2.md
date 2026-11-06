# Migne's foot-of-page apparatus: Maximus the Confessor, *Opuscula theologica et polemica* (PG 91), pages p-0029–p-0050 (18 pages)

Read-only transcription task. Work in `~/patrologia/translate/maximus-opuscula/notes/`. Images are in `img/`:
for every page a whole-page thumbnail `<page>-thumb.png` (700 px wide: use it to LOCATE every note block) and tiles
`<page>-t<N>.png` (2100 px wide halves, overlapping, of the layout model's note-block regions; a page the model found
nothing on carries its bottom band instead, listed in `manifest.json` with `model_found_notes`). The full 600 dpi page
is `~/patrologia/raw/kraken/maximus-opuscula/pages/<page>.png` (≈3971 × 6331). Tiles are halves: a note running across the
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

Write one JSON object per note, one per line, to `~/patrologia/translate/maximus-opuscula/notes/result-2.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (Combefis's long NOTÆ blocks, which in the Opuscula stand MID-PAGE after many pieces under the heading NOTÆ, keyed (a), (b) … to the piece just ended). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.


Note calls in the text are small raised numerals, letters or asterisks; the OCR often misread them as letters (ʃ, », αι, ς, "(2)"): they are calls, not words. If a page has Latin-only text, `column` is `"latin"`. Notes of kind VARIÆ LECTIONES (variant readings of the Greek) get no `en` if bare `al. X`.

The Greek stands RIGHT on even pdf pages and LEFT on odd (`column` = "greek" / "latin" accordingly). Where one column ends early Migne sets the other across the full width: that is body text, not a note. Note calls in the Greek text are small raised numerals or bracketed letters; the OCR often read them as letters: they are calls, not words.

**Opuscula specifics (coordinator, 2026-11-06):** pp. 87–88 carry NO Greek (Opusc. 12 is Latin only): their column notes are `column: "latin"`; the full-width small-type block at the TOP of p-0087 is the continuation of a long note from p-0086 (record it on p-0087 with `"continued": true`). Footnote 91 on p-0088 (*Hæc forte post Theodori papæ excommunicationem …*) is a note, not text. Many pieces end with SCHOLIA (ΣΧΟΛΙΑ / SCHOLIA, numbered α΄ β΄ / 1. 2.): those are BODY text already translated, NOT notes: skip them. Pages 103, 118, 121 lose letters at the gutter edge: say so in `unreadable` where a note is cut.
## Pages
- p-0029: p-0029-thumb.png, p-0029-t1.png, p-0029-t2.png, p-0029-t3.png, p-0029-t4.png
- p-0030: p-0030-thumb.png, p-0030-t1.png, p-0030-t2.png, p-0030-t3.png, p-0030-t4.png
- p-0031: p-0031-thumb.png, p-0031-t1.png, p-0031-t2.png, p-0031-t3.png, p-0031-t4.png, p-0031-t5.png, p-0031-t6.png, p-0031-t7.png, p-0031-t8.png
- p-0032: p-0032-thumb.png, p-0032-t1.png, p-0032-t2.png, p-0032-t3.png, p-0032-t4.png, p-0032-t5.png, p-0032-t6.png
- p-0033: p-0033-thumb.png, p-0033-t1.png, p-0033-t2.png, p-0033-t3.png, p-0033-t4.png
- p-0034: p-0034-thumb.png, p-0034-t1.png, p-0034-t2.png, p-0034-t3.png, p-0034-t4.png
- p-0035: p-0035-thumb.png, p-0035-t1.png, p-0035-t2.png, p-0035-t3.png, p-0035-t4.png, p-0035-t5.png, p-0035-t6.png
- p-0036: p-0036-thumb.png, p-0036-t1.png, p-0036-t2.png, p-0036-t3.png, p-0036-t4.png, p-0036-t5.png, p-0036-t6.png
- p-0037: p-0037-thumb.png, p-0037-t1.png, p-0037-t2.png
- p-0040: p-0040-thumb.png, p-0040-t1.png, p-0040-t2.png, p-0040-t3.png, p-0040-t4.png
- p-0041: p-0041-thumb.png, p-0041-t1.png, p-0041-t2.png, p-0041-t3.png, p-0041-t4.png, p-0041-t5.png, p-0041-t6.png, p-0041-t7.png, p-0041-t8.png, p-0041-t9.png, p-0041-t10.png
- p-0042: p-0042-thumb.png, p-0042-t1.png, p-0042-t2.png
- p-0043: p-0043-thumb.png, p-0043-t1.png, p-0043-t2.png, p-0043-t3.png, p-0043-t4.png
- p-0046: p-0046-thumb.png, p-0046-t1.png, p-0046-t2.png, p-0046-t3.png, p-0046-t4.png, p-0046-t5.png, p-0046-t6.png, p-0046-t7.png, p-0046-t8.png
- p-0047: p-0047-thumb.png, p-0047-t1.png, p-0047-t2.png, p-0047-t3.png, p-0047-t4.png, p-0047-t5.png, p-0047-t6.png, p-0047-t7.png, p-0047-t8.png, p-0047-t9.png, p-0047-t10.png, p-0047-t11.png, p-0047-t12.png
- p-0048: p-0048-thumb.png, p-0048-t1.png, p-0048-t2.png, p-0048-t3.png, p-0048-t4.png
- p-0049: p-0049-thumb.png, p-0049-t1.png, p-0049-t2.png, p-0049-t3.png, p-0049-t4.png, p-0049-t5.png, p-0049-t6.png, p-0049-t7.png, p-0049-t8.png
- p-0050: p-0050-thumb.png, p-0050-t1.png, p-0050-t2.png
