# Migne's foot-of-page apparatus: Maximus the Confessor, *Mystagogia* (PG 91), pages p-0363–p-0372 (10 pages)

Read-only transcription task. Work in `~/patrologia/translate/maximus-mystagogia/notes/`. Images are in `img/`:
for every page a whole-page thumbnail `<page>-thumb.png` (700 px wide: use it to LOCATE every note block) and tiles
`<page>-t<N>.png` (2100 px wide halves, overlapping, of the layout model's note-block regions; a page the model found
nothing on carries its bottom band instead, listed in `manifest.json` with `model_found_notes`). The full 600 dpi page
is `~/patrologia/raw/kraken/maximus-mystagogia/pages/<page>.png` (≈3971 × 6331). Tiles are halves: a note running across the
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

Write one JSON object per note, one per line, to `~/patrologia/translate/maximus-mystagogia/notes/result-1.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (Combefis's long NOTÆ blocks, which in the Opuscula stand MID-PAGE after many pieces under the heading NOTÆ, keyed (a), (b) … to the piece just ended). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.


Note calls in the text are small raised numerals, letters or asterisks; the OCR often misread them as letters (ʃ, », αι, ς, "(2)"): they are calls, not words. If a page has Latin-only text, `column` is `"latin"`. Notes of kind VARIÆ LECTIONES (variant readings of the Greek) get no `en` if bare `al. X`.

The Greek stands RIGHT on even pdf pages and LEFT on odd (`column` = "greek" / "latin" accordingly). Where one column ends early Migne sets the other across the full width: that is body text, not a note. Note calls in the Greek text are small raised numerals or bracketed letters; the OCR often read them as letters: they are calls, not words.

**Mystagogia specifics (coordinator, 2026-11-15):** Under the columns most pages carry (1) Scripture locators keyed by
LETTERS or asterisks to the Greek or the Latin (`ᵃ Prov. ix, 9.`) — series `lettered`/`asterisk`, no `en` — and (2) under the
heading VARIÆ LECTIONES, **numbered** variants of the Greek, numbered continuously through the work (p-0363 starts at 1, p-0397
reaches the 60s): manuscript sigla as printed (`Cod. Reg.`, `Scoriacensis`, `A.`, `C.`, `Fr.`, `Hœsch`, `ut edita`), e.g.
`⁶⁷ τὸ καλὸν C. A. et Fr.` — series `numbered`, `en` only when the note is a sentence. These variants are the point of this read:
**transcribe the Greek of every variant exactly, accents included.** BOLD numerals inside the Latin text are the old edition's page
numbers, not calls. The Kraken read many Greek calls as letters, `(e)`, superscripts or `¹`: they are calls.
**p-0363 is shared:** the top of col. 657 is the END of the preceding piece (a dedicatory letter, dated at Venice, 1599); the
Mystagogia title and Proem follow. Record every note on p-0363, with `"work": "mystagogia"` or `"work": "preceding"` by where its call
stands. **p-0397** ends the work at Ἀμήν (col. 717): every note on it is the Mystagogia's.
**Duplicate leaves:** pdf pp. 384–387 are re-scans of 380–383 and are NOT in your list: never open them.

**Completeness rules (every Opuscula brief had to be resumed for one of these; do them the first time):**
- Open EVERY tile listed, and the thumbnail of every page. A page with no notes is confirmed at 600 dpi before you write
  `none`.
- **Call cross-check, every page:** every raised mark in BOTH columns must end as a note line, a `continued` line, or
  `{"page":…,"orphanCall":"<mark>","anchorWord":…,"column":…}` (a call with no note anywhere on this or the next page).
- `text` is a transcription, never a paraphrase; a word you can only restore from context is written `[...]`, never
  supplied. `en` renders the note sentence by sentence.
- If a tile image is not visible to you (an empty or stripped image), cut your own crop from the 600 dpi page and read
  that; never record a note you have not seen.
## Pages
- p-0363: p-0363-thumb.png, p-0363-t1.png, p-0363-t2.png
- p-0364: p-0364-thumb.png, p-0364-t1.png, p-0364-t2.png
- p-0365: p-0365-thumb.png, p-0365-t1.png, p-0365-t2.png, p-0365-t3.png, p-0365-t4.png
- p-0366: p-0366-thumb.png, p-0366-t1.png, p-0366-t2.png, p-0366-t3.png, p-0366-t4.png
- p-0367: p-0367-thumb.png, p-0367-t1.png, p-0367-t2.png
- p-0368: p-0368-thumb.png, p-0368-t1.png, p-0368-t2.png, p-0368-t3.png, p-0368-t4.png
- p-0369: p-0369-thumb.png, p-0369-t1.png, p-0369-t2.png
- p-0370: p-0370-thumb.png, p-0370-t1.png, p-0370-t2.png, p-0370-t3.png, p-0370-t4.png
- p-0371: p-0371-thumb.png, p-0371-t1.png, p-0371-t2.png, p-0371-t3.png, p-0371-t4.png
- p-0372: p-0372-thumb.png, p-0372-t1.png, p-0372-t2.png
