# Migne's foot-of-page apparatus: Sophronius of Jerusalem, *Epistola synodica* and *Orationes* (PG 87.3), pages p-0244–p-0262 (19 pages)

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

Write one JSON object per note, one per line, to `~/patrologia/translate/sophronius-orationes/notes/result-4.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.


Note calls in the text are small raised numerals, letters or asterisks; the OCR often misread them as letters (ʃ, », αι, ς, "(2)"): they are calls, not words. If a page has Latin-only text, `column` is `"latin"`. Notes of kind VARIÆ LECTIONES (variant readings of the Greek) get no `en` if bare `al. X`.
## Pages
- p-0244: p-0244-thumb.png, p-0244-t1.png, p-0244-t2.png, p-0244-t3.png, p-0244-t4.png, p-0244-t5.png, p-0244-t6.png, p-0244-t7.png, p-0244-t8.png, p-0244-t9.png, p-0244-t10.png, p-0244-t11.png, p-0244-t12.png, p-0244-t13.png, p-0244-t14.png, p-0244-t15.png, p-0244-t16.png, p-0244-t17.png, p-0244-t18.png, p-0244-t19.png, p-0244-t20.png
- p-0245: p-0245-thumb.png, p-0245-t1.png, p-0245-t2.png, p-0245-t3.png, p-0245-t4.png, p-0245-t5.png, p-0245-t6.png
- p-0246: p-0246-thumb.png, p-0246-t1.png, p-0246-t2.png, p-0246-t3.png, p-0246-t4.png, p-0246-t5.png, p-0246-t6.png, p-0246-t7.png, p-0246-t8.png
- p-0247: p-0247-thumb.png, p-0247-t1.png, p-0247-t2.png, p-0247-t3.png, p-0247-t4.png
- p-0248: p-0248-thumb.png, p-0248-t1.png, p-0248-t2.png, p-0248-t3.png, p-0248-t4.png, p-0248-t5.png, p-0248-t6.png
- p-0249: p-0249-thumb.png, p-0249-t1.png, p-0249-t2.png, p-0249-t3.png, p-0249-t4.png, p-0249-t5.png, p-0249-t6.png, p-0249-t7.png, p-0249-t8.png, p-0249-t9.png, p-0249-t10.png
- p-0250: p-0250-thumb.png, p-0250-t1.png, p-0250-t2.png
- p-0251: p-0251-thumb.png, p-0251-t1.png, p-0251-t2.png, p-0251-t3.png, p-0251-t4.png, p-0251-t5.png, p-0251-t6.png
- p-0252: p-0252-thumb.png, p-0252-t1.png, p-0252-t2.png, p-0252-t3.png, p-0252-t4.png, p-0252-t5.png, p-0252-t6.png
- p-0253: p-0253-thumb.png, p-0253-t1.png, p-0253-t2.png, p-0253-t3.png, p-0253-t4.png, p-0253-t5.png, p-0253-t6.png, p-0253-t7.png, p-0253-t8.png
- p-0254: p-0254-thumb.png, p-0254-t1.png, p-0254-t2.png, p-0254-t3.png, p-0254-t4.png, p-0254-t5.png, p-0254-t6.png, p-0254-t7.png, p-0254-t8.png, p-0254-t9.png, p-0254-t10.png, p-0254-t11.png, p-0254-t12.png, p-0254-t13.png, p-0254-t14.png, p-0254-t15.png, p-0254-t16.png, p-0254-t17.png, p-0254-t18.png, p-0254-t19.png, p-0254-t20.png
- p-0255: p-0255-thumb.png, p-0255-t1.png, p-0255-t2.png, p-0255-t3.png, p-0255-t4.png, p-0255-t5.png, p-0255-t6.png, p-0255-t7.png, p-0255-t8.png
- p-0256: p-0256-thumb.png, p-0256-t1.png, p-0256-t2.png, p-0256-t3.png, p-0256-t4.png, p-0256-t5.png, p-0256-t6.png, p-0256-t7.png, p-0256-t8.png, p-0256-t9.png, p-0256-t10.png
- p-0257: p-0257-thumb.png, p-0257-t1.png, p-0257-t2.png, p-0257-t3.png, p-0257-t4.png, p-0257-t5.png, p-0257-t6.png
- p-0258: p-0258-thumb.png, p-0258-t1.png, p-0258-t2.png, p-0258-t3.png, p-0258-t4.png
- p-0259: p-0259-thumb.png, p-0259-t1.png, p-0259-t2.png, p-0259-t3.png, p-0259-t4.png, p-0259-t5.png, p-0259-t6.png
- p-0260: p-0260-thumb.png, p-0260-t1.png, p-0260-t2.png, p-0260-t3.png, p-0260-t4.png, p-0260-t5.png, p-0260-t6.png, p-0260-t7.png, p-0260-t8.png
- p-0261: p-0261-thumb.png, p-0261-t1.png, p-0261-t2.png, p-0261-t3.png, p-0261-t4.png
- p-0262: p-0262-thumb.png, p-0262-t1.png, p-0262-t2.png, p-0262-t3.png, p-0262-t4.png, p-0262-t5.png, p-0262-t6.png, p-0262-t7.png, p-0262-t8.png, p-0262-t9.png, p-0262-t10.png, p-0262-t11.png, p-0262-t12.png
