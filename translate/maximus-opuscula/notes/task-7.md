# Migne's foot-of-page apparatus: Maximus the Confessor, *Opuscula theologica et polemica* (PG 91), pages p-0131–p-0148 (18 pages)

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

Write one JSON object per note, one per line, to `~/patrologia/translate/maximus-opuscula/notes/result-7.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (Combefis's long NOTÆ blocks, which in the Opuscula stand MID-PAGE after many pieces under the heading NOTÆ, keyed (a), (b) … to the piece just ended). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.


Note calls in the text are small raised numerals, letters or asterisks; the OCR often misread them as letters (ʃ, », αι, ς, "(2)"): they are calls, not words. If a page has Latin-only text, `column` is `"latin"`. Notes of kind VARIÆ LECTIONES (variant readings of the Greek) get no `en` if bare `al. X`.

The Greek stands RIGHT on even pdf pages and LEFT on odd (`column` = "greek" / "latin" accordingly). Where one column ends early Migne sets the other across the full width: that is body text, not a note. Note calls in the Greek text are small raised numerals or bracketed letters; the OCR often read them as letters: they are calls, not words.

**Opuscula specifics (coordinator, 2026-11-06):** The BOLD numerals inside the Latin text ("lapsum 76 bene") are Combefis's 1675 page numbers, not calls: never record them. Numbered calls (1), (2) … in a piece ending with SCHOLIA numbered alike key those scholia: record `{"page":…,"scholionCall":…,"anchorWord":…}`. Every other call with no note: check the next page, then the note or an `orphanCall` line. Open EVERY tile; never paraphrase `text`; `en` sentence by sentence. pp. 87–88 carry NO Greek (Opusc. 12 is Latin only): their column notes are `column: "latin"`; the full-width small-type block at the TOP of p-0087 is the continuation of a long note from p-0086 (record it on p-0087 with `"continued": true`). Footnote 91 on p-0088 (*Hæc forte post Theodori papæ excommunicationem …*) is a note, not text. Many pieces end with SCHOLIA (ΣΧΟΛΙΑ / SCHOLIA, numbered α΄ β΄ / 1. 2.): those are BODY text already translated, NOT notes: skip them. Pages 103, 118, 121 lose letters at the gutter edge: say so in `unreadable` where a note is cut.
## Pages
- p-0131: p-0131-thumb.png, p-0131-t1.png, p-0131-t2.png
- p-0132: p-0132-thumb.png, p-0132-t1.png, p-0132-t2.png, p-0132-t3.png, p-0132-t4.png, p-0132-t5.png, p-0132-t6.png
- p-0133: p-0133-thumb.png, p-0133-t1.png, p-0133-t2.png, p-0133-t3.png, p-0133-t4.png, p-0133-t5.png, p-0133-t6.png
- p-0134: p-0134-thumb.png, p-0134-t1.png, p-0134-t2.png, p-0134-t3.png, p-0134-t4.png
- p-0135: p-0135-thumb.png, p-0135-t1.png, p-0135-t2.png, p-0135-t3.png, p-0135-t4.png, p-0135-t5.png, p-0135-t6.png, p-0135-t7.png, p-0135-t8.png
- p-0136: p-0136-thumb.png, p-0136-t1.png, p-0136-t2.png, p-0136-t3.png, p-0136-t4.png
- p-0137: p-0137-thumb.png, p-0137-t1.png, p-0137-t2.png, p-0137-t3.png, p-0137-t4.png
- p-0138: p-0138-thumb.png, p-0138-t1.png, p-0138-t2.png, p-0138-t3.png, p-0138-t4.png, p-0138-t5.png, p-0138-t6.png, p-0138-t7.png, p-0138-t8.png, p-0138-t9.png, p-0138-t10.png
- p-0139: p-0139-thumb.png, p-0139-t1.png, p-0139-t2.png, p-0139-t3.png, p-0139-t4.png, p-0139-t5.png, p-0139-t6.png
- p-0140: p-0140-thumb.png, p-0140-t1.png, p-0140-t2.png, p-0140-t3.png, p-0140-t4.png, p-0140-t5.png, p-0140-t6.png, p-0140-t7.png, p-0140-t8.png, p-0140-t9.png, p-0140-t10.png
- p-0141: p-0141-thumb.png, p-0141-t1.png, p-0141-t2.png, p-0141-t3.png, p-0141-t4.png
- p-0142: p-0142-thumb.png, p-0142-t1.png, p-0142-t2.png, p-0142-t3.png, p-0142-t4.png, p-0142-t5.png, p-0142-t6.png, p-0142-t7.png, p-0142-t8.png
- p-0143: p-0143-thumb.png, p-0143-t1.png, p-0143-t2.png, p-0143-t3.png, p-0143-t4.png
- p-0144: p-0144-thumb.png, p-0144-t1.png, p-0144-t2.png, p-0144-t3.png, p-0144-t4.png
- p-0145: p-0145-thumb.png, p-0145-t1.png, p-0145-t2.png, p-0145-t3.png, p-0145-t4.png
- p-0146: p-0146-thumb.png, p-0146-t1.png, p-0146-t2.png, p-0146-t3.png, p-0146-t4.png
- p-0147: p-0147-thumb.png, p-0147-t1.png, p-0147-t2.png, p-0147-t3.png, p-0147-t4.png
- p-0148: p-0148-thumb.png, p-0148-t1.png, p-0148-t2.png
