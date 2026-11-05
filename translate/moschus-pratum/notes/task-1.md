# Migne's foot-of-page apparatus: John Moschus, *Pratum spirituale* (PG 87.3), pages p-0039–p-0058 (20 pages)

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

Write one JSON object per note, one per line, to `~/patrologia/translate/moschus-pratum/notes/result-1.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.

## Pages
- p-0039: p-0039-thumb.png, p-0039-t1.png, p-0039-t2.png
- p-0040: p-0040-thumb.png, p-0040-t1.png, p-0040-t2.png
- p-0041: p-0041-thumb.png, p-0041-t1.png, p-0041-t2.png, p-0041-t3.png, p-0041-t4.png
- p-0042: p-0042-thumb.png, p-0042-t1.png, p-0042-t2.png, p-0042-t3.png, p-0042-t4.png, p-0042-t5.png, p-0042-t6.png
- p-0043: p-0043-thumb.png, p-0043-t1.png, p-0043-t2.png
- p-0044: p-0044-thumb.png, p-0044-t1.png, p-0044-t2.png, p-0044-t3.png, p-0044-t4.png, p-0044-t5.png, p-0044-t6.png, p-0044-t7.png, p-0044-t8.png
- p-0045: p-0045-thumb.png, p-0045-t1.png, p-0045-t2.png
- p-0046: p-0046-thumb.png, p-0046-t1.png, p-0046-t2.png, p-0046-t3.png, p-0046-t4.png, p-0046-t5.png, p-0046-t6.png, p-0046-t7.png, p-0046-t8.png, p-0046-t9.png, p-0046-t10.png
- p-0047: p-0047-thumb.png, p-0047-t1.png, p-0047-t2.png, p-0047-t3.png, p-0047-t4.png
- p-0048: p-0048-thumb.png, p-0048-t1.png, p-0048-t2.png, p-0048-t3.png, p-0048-t4.png, p-0048-t5.png, p-0048-t6.png, p-0048-t7.png, p-0048-t8.png, p-0048-t9.png, p-0048-t10.png
- p-0049: p-0049-thumb.png, p-0049-t1.png, p-0049-t2.png, p-0049-t3.png, p-0049-t4.png, p-0049-t5.png, p-0049-t6.png
- p-0050: p-0050-thumb.png, p-0050-t1.png, p-0050-t2.png, p-0050-t3.png, p-0050-t4.png
- p-0051: p-0051-thumb.png, p-0051-t1.png, p-0051-t2.png
- p-0052: p-0052-thumb.png, p-0052-t1.png, p-0052-t2.png, p-0052-t3.png, p-0052-t4.png, p-0052-t5.png, p-0052-t6.png, p-0052-t7.png, p-0052-t8.png, p-0052-t9.png, p-0052-t10.png
- p-0053: p-0053-thumb.png, p-0053-t1.png, p-0053-t2.png, p-0053-t3.png, p-0053-t4.png, p-0053-t5.png, p-0053-t6.png
- p-0054: p-0054-thumb.png, p-0054-t1.png, p-0054-t2.png, p-0054-t3.png, p-0054-t4.png, p-0054-t5.png, p-0054-t6.png, p-0054-t7.png, p-0054-t8.png
- p-0055: p-0055-thumb.png, p-0055-t1.png, p-0055-t2.png, p-0055-t3.png, p-0055-t4.png, p-0055-t5.png, p-0055-t6.png, p-0055-t7.png, p-0055-t8.png, p-0055-t9.png, p-0055-t10.png
- p-0056: p-0056-thumb.png, p-0056-t1.png, p-0056-t2.png, p-0056-t3.png, p-0056-t4.png, p-0056-t5.png, p-0056-t6.png
- p-0057: p-0057-thumb.png, p-0057-t1.png, p-0057-t2.png, p-0057-t3.png, p-0057-t4.png, p-0057-t5.png, p-0057-t6.png
- p-0058: p-0058-thumb.png, p-0058-t1.png, p-0058-t2.png, p-0058-t3.png, p-0058-t4.png, p-0058-t5.png, p-0058-t6.png
