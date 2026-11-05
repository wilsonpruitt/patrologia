# Migne's foot-of-page apparatus: John Moschus, *Pratum spirituale* (PG 87.3), pages p-0059–p-0085 (27 pages)

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

Write one JSON object per note, one per line, to `~/patrologia/translate/moschus-pratum/notes/result-2.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.

## Pages
- p-0059: p-0059-thumb.png, p-0059-t1.png, p-0059-t2.png, p-0059-t3.png, p-0059-t4.png, p-0059-t5.png, p-0059-t6.png, p-0059-t7.png, p-0059-t8.png, p-0059-t9.png, p-0059-t10.png, p-0059-t11.png, p-0059-t12.png, p-0059-t13.png, p-0059-t14.png, p-0059-t15.png, p-0059-t16.png
- p-0060: p-0060-thumb.png, p-0060-t1.png, p-0060-t2.png
- p-0061: p-0061-thumb.png, p-0061-t1.png, p-0061-t2.png
- p-0062: p-0062-thumb.png, p-0062-t1.png, p-0062-t2.png
- p-0063: p-0063-thumb.png, p-0063-t1.png, p-0063-t2.png
- p-0064: p-0064-thumb.png, p-0064-t1.png, p-0064-t2.png
- p-0065: p-0065-thumb.png, p-0065-t1.png, p-0065-t2.png, p-0065-t3.png, p-0065-t4.png
- p-0066: p-0066-thumb.png, p-0066-t1.png, p-0066-t2.png, p-0066-t3.png, p-0066-t4.png
- p-0067: p-0067-thumb.png, p-0067-t1.png, p-0067-t2.png
- p-0068: p-0068-thumb.png, p-0068-t1.png, p-0068-t2.png, p-0068-t3.png, p-0068-t4.png
- p-0069: p-0069-thumb.png, p-0069-t1.png, p-0069-t2.png
- p-0070: p-0070-thumb.png, p-0070-t1.png, p-0070-t2.png, p-0070-t3.png, p-0070-t4.png
- p-0071: p-0071-thumb.png, p-0071-t1.png, p-0071-t2.png, p-0071-t3.png, p-0071-t4.png, p-0071-t5.png, p-0071-t6.png
- p-0072: p-0072-thumb.png, p-0072-t1.png, p-0072-t2.png, p-0072-t3.png, p-0072-t4.png
- p-0073: p-0073-thumb.png, p-0073-t1.png, p-0073-t2.png, p-0073-t3.png, p-0073-t4.png, p-0073-t5.png, p-0073-t6.png, p-0073-t7.png, p-0073-t8.png
- p-0074: p-0074-thumb.png, p-0074-t1.png, p-0074-t2.png, p-0074-t3.png, p-0074-t4.png, p-0074-t5.png, p-0074-t6.png
- p-0075: p-0075-thumb.png, p-0075-t1.png, p-0075-t2.png, p-0075-t3.png, p-0075-t4.png, p-0075-t5.png, p-0075-t6.png, p-0075-t7.png, p-0075-t8.png
- p-0076: p-0076-thumb.png, p-0076-t1.png, p-0076-t2.png, p-0076-t3.png, p-0076-t4.png
- p-0077: p-0077-thumb.png, p-0077-t1.png, p-0077-t2.png
- p-0078: p-0078-thumb.png, p-0078-t1.png, p-0078-t2.png, p-0078-t3.png, p-0078-t4.png
- p-0079: p-0079-thumb.png, p-0079-t1.png, p-0079-t2.png
- p-0080: p-0080-thumb.png, p-0080-t1.png, p-0080-t2.png
- p-0081: p-0081-thumb.png, p-0081-t1.png, p-0081-t2.png
- p-0082: p-0082-thumb.png, p-0082-t1.png, p-0082-t2.png, p-0082-t3.png, p-0082-t4.png
- p-0083: p-0083-thumb.png, p-0083-t1.png, p-0083-t2.png
- p-0084: p-0084-thumb.png, p-0084-t1.png, p-0084-t2.png, p-0084-t3.png, p-0084-t4.png
- p-0085: p-0085-thumb.png, p-0085-t1.png, p-0085-t2.png
