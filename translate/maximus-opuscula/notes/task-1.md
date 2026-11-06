# Migne's foot-of-page apparatus: Maximus the Confessor, *Opuscula theologica et polemica* (PG 91), pages p-0011–p-0028 (18 pages)

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

Write one JSON object per note, one per line, to `~/patrologia/translate/maximus-opuscula/notes/result-1.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (Combefis's long NOTÆ blocks, which in the Opuscula stand MID-PAGE after many pieces under the heading NOTÆ, keyed (a), (b) … to the piece just ended). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.


Note calls in the text are small raised numerals, letters or asterisks; the OCR often misread them as letters (ʃ, », αι, ς, "(2)"): they are calls, not words. If a page has Latin-only text, `column` is `"latin"`. Notes of kind VARIÆ LECTIONES (variant readings of the Greek) get no `en` if bare `al. X`.

The Greek stands RIGHT on even pdf pages and LEFT on odd (`column` = "greek" / "latin" accordingly). Where one column ends early Migne sets the other across the full width: that is body text, not a note. Note calls in the Greek text are small raised numerals or bracketed letters; the OCR often read them as letters: they are calls, not words.

**Opuscula specifics (coordinator, 2026-11-06):** pp. 87–88 carry NO Greek (Opusc. 12 is Latin only): their column notes are `column: "latin"`; the full-width small-type block at the TOP of p-0087 is the continuation of a long note from p-0086 (record it on p-0087 with `"continued": true`). Footnote 91 on p-0088 (*Hæc forte post Theodori papæ excommunicationem …*) is a note, not text. Many pieces end with SCHOLIA (ΣΧΟΛΙΑ / SCHOLIA, numbered α΄ β΄ / 1. 2.): those are BODY text already translated, NOT notes: skip them. Pages 103, 118, 121 lose letters at the gutter edge: say so in `unreadable` where a note is cut.
## Pages
- p-0011: p-0011-thumb.png, p-0011-t1.png, p-0011-t2.png, p-0011-t3.png, p-0011-t4.png, p-0011-t5.png, p-0011-t6.png, p-0011-t7.png, p-0011-t8.png
- p-0012: p-0012-thumb.png, p-0012-t1.png, p-0012-t2.png, p-0012-t3.png, p-0012-t4.png, p-0012-t5.png, p-0012-t6.png, p-0012-t7.png, p-0012-t8.png
- p-0013: p-0013-thumb.png, p-0013-t1.png, p-0013-t2.png, p-0013-t3.png, p-0013-t4.png, p-0013-t5.png, p-0013-t6.png, p-0013-t7.png, p-0013-t8.png, p-0013-t9.png, p-0013-t10.png
- p-0014: p-0014-thumb.png, p-0014-t1.png, p-0014-t2.png
- p-0015: p-0015-thumb.png, p-0015-t1.png, p-0015-t2.png, p-0015-t3.png, p-0015-t4.png
- p-0016: p-0016-thumb.png, p-0016-t1.png, p-0016-t2.png, p-0016-t3.png, p-0016-t4.png
- p-0017: p-0017-thumb.png, p-0017-t1.png, p-0017-t2.png, p-0017-t3.png, p-0017-t4.png
- p-0018: p-0018-thumb.png, p-0018-t1.png, p-0018-t2.png, p-0018-t3.png, p-0018-t4.png, p-0018-t5.png, p-0018-t6.png
- p-0019: p-0019-thumb.png, p-0019-t1.png, p-0019-t2.png
- p-0020: p-0020-thumb.png, p-0020-t1.png, p-0020-t2.png
- p-0021: p-0021-thumb.png, p-0021-t1.png, p-0021-t2.png, p-0021-t3.png, p-0021-t4.png
- p-0022: p-0022-thumb.png, p-0022-t1.png, p-0022-t2.png, p-0022-t3.png, p-0022-t4.png, p-0022-t5.png, p-0022-t6.png, p-0022-t7.png, p-0022-t8.png
- p-0023: p-0023-thumb.png, p-0023-t1.png, p-0023-t2.png, p-0023-t3.png, p-0023-t4.png, p-0023-t5.png, p-0023-t6.png, p-0023-t7.png, p-0023-t8.png
- p-0024: p-0024-thumb.png, p-0024-t1.png, p-0024-t2.png, p-0024-t3.png, p-0024-t4.png
- p-0025: p-0025-thumb.png, p-0025-t1.png, p-0025-t2.png
- p-0026: p-0026-thumb.png, p-0026-t1.png, p-0026-t2.png, p-0026-t3.png, p-0026-t4.png, p-0026-t5.png, p-0026-t6.png, p-0026-t7.png, p-0026-t8.png
- p-0027: p-0027-thumb.png, p-0027-t1.png, p-0027-t2.png, p-0027-t3.png, p-0027-t4.png
- p-0028: p-0028-thumb.png, p-0028-t1.png, p-0028-t2.png, p-0028-t3.png, p-0028-t4.png
