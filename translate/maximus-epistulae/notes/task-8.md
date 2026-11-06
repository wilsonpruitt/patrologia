# Migne's foot-of-page apparatus: Maximus the Confessor, *Epistulae* (PG 91), pages p-0342–p-0359 (18 pages)

Read-only transcription task. Work in `~/patrologia/translate/maximus-epistulae/notes/`. Images are in `img/`:
for every page a whole-page thumbnail `<page>-thumb.png` (700 px wide: use it to LOCATE every note block) and tiles
`<page>-t<N>.png` (2100 px wide halves, overlapping, of the layout model's note-block regions; a page the model found
nothing on carries its bottom band instead, listed in `manifest.json` with `model_found_notes`). The full 600 dpi page
is `~/patrologia/raw/kraken/maximus-epistulae/pages/<page>.png` (≈3971 × 6331). Tiles are halves: a note running across the
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

Write one JSON object per note, one per line, to `~/patrologia/translate/maximus-epistulae/notes/result-8.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (pp. 171–173 endnotes). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.


Note calls in the text are small raised numerals, letters or asterisks; the OCR often misread them as letters (ʃ, », αι, ς, "(2)"): they are calls, not words. If a page has Latin-only text, `column` is `"latin"`. Notes of kind VARIÆ LECTIONES (variant readings of the Greek) get no `en` if bare `al. X`.

The Greek stands RIGHT on even pdf pages and LEFT on odd (`column` = "greek" / "latin" accordingly). Where one column ends early Migne sets the other across the full width: that is body text, not a note. Note calls in the Greek text are small raised numerals or bracketed letters; the OCR often read them as letters: they are calls, not words.
## Pages
- p-0342: p-0342-thumb.png, p-0342-t1.png, p-0342-t2.png, p-0342-t3.png, p-0342-t4.png, p-0342-t5.png, p-0342-t6.png, p-0342-t7.png, p-0342-t8.png, p-0342-t9.png, p-0342-t10.png, p-0342-t11.png, p-0342-t12.png, p-0342-t13.png, p-0342-t14.png
- p-0343: p-0343-thumb.png, p-0343-t1.png, p-0343-t2.png, p-0343-t3.png, p-0343-t4.png
- p-0344: p-0344-thumb.png, p-0344-t1.png, p-0344-t2.png, p-0344-t3.png, p-0344-t4.png, p-0344-t5.png, p-0344-t6.png
- p-0345: p-0345-thumb.png, p-0345-t1.png, p-0345-t2.png, p-0345-t3.png, p-0345-t4.png
- p-0346: p-0346-thumb.png, p-0346-t1.png, p-0346-t2.png, p-0346-t3.png, p-0346-t4.png
- p-0347: p-0347-thumb.png, p-0347-t1.png, p-0347-t2.png
- p-0348: p-0348-thumb.png, p-0348-t1.png, p-0348-t2.png
- p-0349: p-0349-thumb.png, p-0349-t1.png, p-0349-t2.png
- p-0350: p-0350-thumb.png, p-0350-t1.png, p-0350-t2.png
- p-0351: p-0351-thumb.png, p-0351-t1.png, p-0351-t2.png
- p-0352: p-0352-thumb.png, p-0352-t1.png, p-0352-t2.png, p-0352-t3.png, p-0352-t4.png
- p-0353: p-0353-thumb.png, p-0353-t1.png, p-0353-t2.png
- p-0354: p-0354-thumb.png, p-0354-t1.png, p-0354-t2.png
- p-0355: p-0355-thumb.png, p-0355-t1.png, p-0355-t2.png, p-0355-t3.png, p-0355-t4.png, p-0355-t5.png, p-0355-t6.png
- p-0356: p-0356-thumb.png, p-0356-t1.png, p-0356-t2.png
- p-0357: p-0357-thumb.png, p-0357-t1.png, p-0357-t2.png, p-0357-t3.png, p-0357-t4.png
- p-0358: p-0358-thumb.png, p-0358-t1.png, p-0358-t2.png
- p-0359: p-0359-thumb.png, p-0359-t1.png, p-0359-t2.png, p-0359-t3.png, p-0359-t4.png, p-0359-t5.png, p-0359-t6.png, p-0359-t7.png, p-0359-t8.png
