# Migne's foot-of-page apparatus: John Moschus, *Pratum spirituale* (PG 87.3), pages p-0086–p-0112 (27 pages)

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

Write one JSON object per note, one per line, to `~/patrologia/translate/moschus-pratum/notes/result-3.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.

## Pages
- p-0086: p-0086-thumb.png, p-0086-t1.png, p-0086-t2.png
- p-0087: p-0087-thumb.png, p-0087-t1.png, p-0087-t2.png
- p-0088: p-0088-thumb.png, p-0088-t1.png, p-0088-t2.png
- p-0089: p-0089-thumb.png, p-0089-t1.png, p-0089-t2.png, p-0089-t3.png, p-0089-t4.png, p-0089-t5.png, p-0089-t6.png
- p-0090: p-0090-thumb.png, p-0090-t1.png, p-0090-t2.png, p-0090-t3.png, p-0090-t4.png
- p-0091: p-0091-thumb.png, p-0091-t1.png, p-0091-t2.png, p-0091-t3.png, p-0091-t4.png, p-0091-t5.png, p-0091-t6.png, p-0091-t7.png, p-0091-t8.png
- p-0092: p-0092-thumb.png, p-0092-t1.png, p-0092-t2.png, p-0092-t3.png, p-0092-t4.png
- p-0093: p-0093-thumb.png, p-0093-t1.png, p-0093-t2.png
- p-0094: p-0094-thumb.png, p-0094-t1.png, p-0094-t2.png
- p-0095: p-0095-thumb.png, p-0095-t1.png, p-0095-t2.png, p-0095-t3.png, p-0095-t4.png, p-0095-t5.png, p-0095-t6.png, p-0095-t7.png, p-0095-t8.png
- p-0096: p-0096-thumb.png, p-0096-t1.png, p-0096-t2.png, p-0096-t3.png, p-0096-t4.png
- p-0097: p-0097-thumb.png, p-0097-t1.png, p-0097-t2.png, p-0097-t3.png, p-0097-t4.png
- p-0098: p-0098-thumb.png, p-0098-t1.png, p-0098-t2.png, p-0098-t3.png, p-0098-t4.png
- p-0099: p-0099-thumb.png, p-0099-t1.png, p-0099-t2.png
- p-0100: p-0100-thumb.png, p-0100-t1.png, p-0100-t2.png, p-0100-t3.png, p-0100-t4.png
- p-0101: p-0101-thumb.png, p-0101-t1.png, p-0101-t2.png, p-0101-t3.png, p-0101-t4.png, p-0101-t5.png, p-0101-t6.png, p-0101-t7.png, p-0101-t8.png
- p-0102: p-0102-thumb.png, p-0102-t1.png, p-0102-t2.png, p-0102-t3.png, p-0102-t4.png
- p-0103: p-0103-thumb.png, p-0103-t1.png, p-0103-t2.png, p-0103-t3.png, p-0103-t4.png
- p-0104: p-0104-thumb.png, p-0104-t1.png, p-0104-t2.png, p-0104-t3.png, p-0104-t4.png
- p-0105: p-0105-thumb.png, p-0105-t1.png, p-0105-t2.png, p-0105-t3.png, p-0105-t4.png
- p-0106: p-0106-thumb.png, p-0106-t1.png, p-0106-t2.png, p-0106-t3.png, p-0106-t4.png
- p-0107: p-0107-thumb.png, p-0107-t1.png, p-0107-t2.png, p-0107-t3.png, p-0107-t4.png
- p-0108: p-0108-thumb.png, p-0108-t1.png, p-0108-t2.png
- p-0109: p-0109-thumb.png, p-0109-t1.png, p-0109-t2.png
- p-0110: p-0110-thumb.png, p-0110-t1.png, p-0110-t2.png, p-0110-t3.png, p-0110-t4.png
- p-0111: p-0111-thumb.png, p-0111-t1.png, p-0111-t2.png, p-0111-t3.png, p-0111-t4.png
- p-0112: p-0112-thumb.png, p-0112-t1.png, p-0112-t2.png, p-0112-t3.png, p-0112-t4.png
