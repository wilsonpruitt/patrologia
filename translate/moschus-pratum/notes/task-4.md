# Migne's foot-of-page apparatus: John Moschus, *Pratum spirituale* (PG 87.3), pages p-0113–p-0133 (21 pages)

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

Write one JSON object per note, one per line, to `~/patrologia/translate/moschus-pratum/notes/result-4.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.

## Pages
- p-0113: p-0113-thumb.png, p-0113-t1.png, p-0113-t2.png, p-0113-t3.png, p-0113-t4.png
- p-0114: p-0114-thumb.png, p-0114-t1.png, p-0114-t2.png, p-0114-t3.png, p-0114-t4.png
- p-0115: p-0115-thumb.png, p-0115-t1.png, p-0115-t2.png, p-0115-t3.png, p-0115-t4.png, p-0115-t5.png, p-0115-t6.png, p-0115-t7.png, p-0115-t8.png, p-0115-t9.png, p-0115-t10.png
- p-0116: p-0116-thumb.png, p-0116-t1.png, p-0116-t2.png, p-0116-t3.png, p-0116-t4.png
- p-0117: p-0117-thumb.png, p-0117-t1.png, p-0117-t2.png, p-0117-t3.png, p-0117-t4.png
- p-0118: p-0118-thumb.png, p-0118-t1.png, p-0118-t2.png, p-0118-t3.png, p-0118-t4.png, p-0118-t5.png, p-0118-t6.png, p-0118-t7.png, p-0118-t8.png
- p-0119: p-0119-thumb.png, p-0119-t1.png, p-0119-t2.png, p-0119-t3.png, p-0119-t4.png, p-0119-t5.png, p-0119-t6.png, p-0119-t7.png, p-0119-t8.png
- p-0120: p-0120-thumb.png, p-0120-t1.png, p-0120-t2.png, p-0120-t3.png, p-0120-t4.png, p-0120-t5.png, p-0120-t6.png
- p-0121: p-0121-thumb.png, p-0121-t1.png, p-0121-t2.png, p-0121-t3.png, p-0121-t4.png
- p-0122: p-0122-thumb.png, p-0122-t1.png, p-0122-t2.png, p-0122-t3.png, p-0122-t4.png
- p-0123: p-0123-thumb.png, p-0123-t1.png, p-0123-t2.png, p-0123-t3.png, p-0123-t4.png, p-0123-t5.png, p-0123-t6.png, p-0123-t7.png, p-0123-t8.png, p-0123-t9.png, p-0123-t10.png, p-0123-t11.png, p-0123-t12.png
- p-0124: p-0124-thumb.png, p-0124-t1.png, p-0124-t2.png, p-0124-t3.png, p-0124-t4.png, p-0124-t5.png, p-0124-t6.png, p-0124-t7.png, p-0124-t8.png
- p-0125: p-0125-thumb.png, p-0125-t1.png, p-0125-t2.png, p-0125-t3.png, p-0125-t4.png, p-0125-t5.png, p-0125-t6.png
- p-0126: p-0126-thumb.png, p-0126-t1.png, p-0126-t2.png, p-0126-t3.png, p-0126-t4.png
- p-0127: p-0127-thumb.png, p-0127-t1.png, p-0127-t2.png, p-0127-t3.png, p-0127-t4.png
- p-0128: p-0128-thumb.png, p-0128-t1.png, p-0128-t2.png, p-0128-t3.png, p-0128-t4.png
- p-0129: p-0129-thumb.png, p-0129-t1.png, p-0129-t2.png, p-0129-t3.png, p-0129-t4.png
- p-0130: p-0130-thumb.png, p-0130-t1.png, p-0130-t2.png, p-0130-t3.png, p-0130-t4.png
- p-0131: p-0131-thumb.png, p-0131-t1.png, p-0131-t2.png, p-0131-t3.png, p-0131-t4.png
- p-0132: p-0132-thumb.png, p-0132-t1.png, p-0132-t2.png, p-0132-t3.png, p-0132-t4.png
- p-0133: p-0133-thumb.png, p-0133-t1.png, p-0133-t2.png, p-0133-t3.png, p-0133-t4.png
