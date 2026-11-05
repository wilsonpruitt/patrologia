# Migne's foot-of-page apparatus: John Moschus, *Pratum spirituale* (PG 87.3), pages p-0160–p-0173 (14 pages)

Read-only transcription task. Work in `~/patrologia/translate/moschus-pratum/notes/`. Images are in `img/`:
for every page a whole-page thumbnail `<page>-thumb.png` (700 px wide: use it to LOCATE every note block) and tiles
`<page>-t<N>.png` (2100 px wide halves, overlapping, of the layout model's note-block regions; a page the model found
nothing on carries its bottom band instead, listed in `manifest.json` with `model_found_notes`). The full 600 dpi page
is `~/patrologia/raw/kraken/moschus-pratum/pages/<page>.png` (≈3971 × 6300). Tiles are halves: a note running across the
page continues from the left tile into the right one (200 px overlap).

**What Migne prints.** Under the two columns (LATIN left, GREEK right, or alternating by page) in small type, full page
width, **notes**: Latin cautions and cross-references keyed to raised marks in either column; Scripture references;
and, under a heading VARIÆ LECTIONES, numbered corrections/variants for the Greek (`²¹ al. Φαρῶν et Φαρῶ.`). Marks may
be numbers, letters (a–z skipping j, w), or asterisks. Note blocks can stand MID-PAGE where a chapter or section
division falls; at pp. 171–173 the NOTÆ are Latin endnotes (transcribe them all, with their numbering). A page can
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

Write one JSON object per note, one per line, to `~/patrologia/translate/moschus-pratum/notes/result-6.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.

## Pages
- p-0160: p-0160-thumb.png, p-0160-t1.png, p-0160-t2.png, p-0160-t3.png, p-0160-t4.png
- p-0161: p-0161-thumb.png, p-0161-t1.png, p-0161-t2.png, p-0161-t3.png, p-0161-t4.png, p-0161-t5.png, p-0161-t6.png, p-0161-t7.png, p-0161-t8.png
- p-0162: p-0162-thumb.png, p-0162-t1.png, p-0162-t2.png, p-0162-t3.png, p-0162-t4.png
- p-0163: p-0163-thumb.png, p-0163-t1.png, p-0163-t2.png, p-0163-t3.png, p-0163-t4.png
- p-0164: p-0164-thumb.png, p-0164-t1.png, p-0164-t2.png, p-0164-t3.png, p-0164-t4.png
- p-0165: p-0165-thumb.png, p-0165-t1.png, p-0165-t2.png, p-0165-t3.png, p-0165-t4.png
- p-0166: p-0166-thumb.png, p-0166-t1.png, p-0166-t2.png, p-0166-t3.png, p-0166-t4.png
- p-0167: p-0167-thumb.png, p-0167-t1.png, p-0167-t2.png, p-0167-t3.png, p-0167-t4.png, p-0167-t5.png, p-0167-t6.png, p-0167-t7.png, p-0167-t8.png
- p-0168: p-0168-thumb.png, p-0168-t1.png, p-0168-t2.png, p-0168-t3.png, p-0168-t4.png, p-0168-t5.png, p-0168-t6.png
- p-0169: p-0169-thumb.png, p-0169-t1.png, p-0169-t2.png, p-0169-t3.png, p-0169-t4.png
- p-0170: p-0170-thumb.png, p-0170-t1.png, p-0170-t2.png, p-0170-t3.png, p-0170-t4.png, p-0170-t5.png, p-0170-t6.png, p-0170-t7.png, p-0170-t8.png, p-0170-t9.png, p-0170-t10.png, p-0170-t11.png, p-0170-t12.png, p-0170-t13.png, p-0170-t14.png, p-0170-t15.png, p-0170-t16.png
- p-0171: p-0171-thumb.png, p-0171-t1.png, p-0171-t2.png, p-0171-t3.png, p-0171-t4.png, p-0171-t5.png, p-0171-t6.png, p-0171-t7.png, p-0171-t8.png, p-0171-t9.png, p-0171-t10.png, p-0171-t11.png, p-0171-t12.png, p-0171-t13.png, p-0171-t14.png, p-0171-t15.png, p-0171-t16.png, p-0171-t17.png, p-0171-t18.png, p-0171-t19.png, p-0171-t20.png, p-0171-t21.png, p-0171-t22.png, p-0171-t23.png, p-0171-t24.png
- p-0172: p-0172-thumb.png, p-0172-t1.png, p-0172-t2.png, p-0172-t3.png, p-0172-t4.png, p-0172-t5.png, p-0172-t6.png, p-0172-t7.png, p-0172-t8.png, p-0172-t9.png, p-0172-t10.png, p-0172-t11.png, p-0172-t12.png
- p-0173: p-0173-thumb.png, p-0173-t1.png, p-0173-t2.png, p-0173-t3.png, p-0173-t4.png, p-0173-t5.png, p-0173-t6.png, p-0173-t7.png, p-0173-t8.png, p-0173-t9.png, p-0173-t10.png, p-0173-t11.png, p-0173-t12.png, p-0173-t13.png, p-0173-t14.png
