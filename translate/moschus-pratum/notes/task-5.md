# Migne's foot-of-page apparatus: John Moschus, *Pratum spirituale* (PG 87.3), pages p-0134–p-0159 (26 pages)

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

Write one JSON object per note, one per line, to `~/patrologia/translate/moschus-pratum/notes/result-5.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.

## Pages
- p-0134: p-0134-thumb.png, p-0134-t1.png, p-0134-t2.png
- p-0135: p-0135-thumb.png, p-0135-t1.png, p-0135-t2.png, p-0135-t3.png, p-0135-t4.png
- p-0136: p-0136-thumb.png, p-0136-t1.png, p-0136-t2.png, p-0136-t3.png, p-0136-t4.png
- p-0137: p-0137-thumb.png, p-0137-t1.png, p-0137-t2.png, p-0137-t3.png, p-0137-t4.png
- p-0138: p-0138-thumb.png, p-0138-t1.png, p-0138-t2.png, p-0138-t3.png, p-0138-t4.png, p-0138-t5.png, p-0138-t6.png
- p-0139: p-0139-thumb.png, p-0139-t1.png, p-0139-t2.png, p-0139-t3.png, p-0139-t4.png, p-0139-t5.png, p-0139-t6.png
- p-0140: p-0140-thumb.png, p-0140-t1.png, p-0140-t2.png, p-0140-t3.png, p-0140-t4.png
- p-0141: p-0141-thumb.png, p-0141-t1.png, p-0141-t2.png
- p-0142: p-0142-thumb.png, p-0142-t1.png, p-0142-t2.png, p-0142-t3.png, p-0142-t4.png
- p-0143: p-0143-thumb.png, p-0143-t1.png, p-0143-t2.png, p-0143-t3.png, p-0143-t4.png
- p-0144: p-0144-thumb.png, p-0144-t1.png, p-0144-t2.png, p-0144-t3.png, p-0144-t4.png
- p-0145: p-0145-thumb.png, p-0145-t1.png, p-0145-t2.png, p-0145-t3.png, p-0145-t4.png
- p-0146: p-0146-thumb.png, p-0146-t1.png, p-0146-t2.png, p-0146-t3.png, p-0146-t4.png
- p-0147: p-0147-thumb.png, p-0147-t1.png, p-0147-t2.png, p-0147-t3.png, p-0147-t4.png
- p-0148: p-0148-thumb.png, p-0148-t1.png, p-0148-t2.png, p-0148-t3.png, p-0148-t4.png
- p-0149: p-0149-thumb.png, p-0149-t1.png, p-0149-t2.png, p-0149-t3.png, p-0149-t4.png
- p-0150: p-0150-thumb.png, p-0150-t1.png, p-0150-t2.png, p-0150-t3.png, p-0150-t4.png
- p-0151: p-0151-thumb.png, p-0151-t1.png, p-0151-t2.png, p-0151-t3.png, p-0151-t4.png
- p-0152: p-0152-thumb.png, p-0152-t1.png, p-0152-t2.png, p-0152-t3.png, p-0152-t4.png
- p-0153: p-0153-thumb.png, p-0153-t1.png, p-0153-t2.png, p-0153-t3.png, p-0153-t4.png
- p-0154: p-0154-thumb.png, p-0154-t1.png, p-0154-t2.png, p-0154-t3.png, p-0154-t4.png
- p-0155: p-0155-thumb.png, p-0155-t1.png, p-0155-t2.png, p-0155-t3.png, p-0155-t4.png
- p-0156: p-0156-thumb.png, p-0156-t1.png, p-0156-t2.png, p-0156-t3.png, p-0156-t4.png
- p-0157: p-0157-thumb.png, p-0157-t1.png, p-0157-t2.png, p-0157-t3.png, p-0157-t4.png, p-0157-t5.png, p-0157-t6.png
- p-0158: p-0158-thumb.png, p-0158-t1.png, p-0158-t2.png, p-0158-t3.png, p-0158-t4.png
- p-0159: p-0159-thumb.png, p-0159-t1.png, p-0159-t2.png, p-0159-t3.png, p-0159-t4.png
