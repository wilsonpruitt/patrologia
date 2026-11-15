# Migne's foot-of-page apparatus: Maximus the Confessor, *Disputatio cum Pyrrho* (PG 91), pages p-0185–p-0195 (11 pages)

Read-only transcription task. Work in `~/patrologia/translate/maximus-disputatio/notes/`. Images are in `img/`:
for every page a whole-page thumbnail `<page>-thumb.png` (700 px wide: use it to LOCATE every note block) and tiles
`<page>-t<N>.png` (2100 px wide halves, overlapping, of the layout model's note-block regions; a page the model found
nothing on carries its bottom band instead, listed in `manifest.json` with `model_found_notes`). The full 600 dpi page
is `~/patrologia/raw/kraken/maximus-disputatio/pages/<page>.png` (≈3971 × 6331). Tiles are halves: a note running across the
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

Write one JSON object per note, one per line, to `~/patrologia/translate/maximus-disputatio/notes/result-3.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (Combefis's long NOTÆ blocks, which in the Opuscula stand MID-PAGE after many pieces under the heading NOTÆ, keyed (a), (b) … to the piece just ended). `where` = `foot` | `mid` . For a page with no
notes one line `{"page": "p-0080", "none": true}`. No other files, no web, no delegation. Work every page in order,
append as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible.


Note calls in the text are small raised numerals, letters or asterisks; the OCR often misread them as letters (ʃ, », αι, ς, "(2)"): they are calls, not words. If a page has Latin-only text, `column` is `"latin"`. Notes of kind VARIÆ LECTIONES (variant readings of the Greek) get no `en` if bare `al. X`.

The Greek stands RIGHT on even pdf pages and LEFT on odd (`column` = "greek" / "latin" accordingly). Where one column ends early Migne sets the other across the full width: that is body text, not a note. Note calls in the Greek text are small raised numerals or bracketed letters; the OCR often read them as letters: they are calls, not words.

**Disputatio specifics (coordinator, 2026-11-14):** The work is the record of a dialogue; turns are marked ΠΥΡ./ΜΑΞ.
(Latin PYR./MAX.). Most pages carry, under the columns, (1) Combefis's numbered VARIANTS of the Greek (`⁸¹ ἴσ. αὐτῷ.`,
`⁸² al. τῇ συγκλήτῳ.`, `Fr. ἐσήμανον.`) — series `numbered`, `en` only if a sentence — and then (2) his **NOTÆ** under that
heading, lettered (a), (b) … with a lemma in Greek and a Latin comment (p-0182: *(g) Τῆς βασιλίδος. Male quibusdam
additum …*) — series `notae`, `en` sentence by sentence. A NOTÆ note can run on to the next page: record the rest there
with `"continued": true`. BOLD numerals inside the Latin text are Combefis's 1675 page numbers, not calls: never record
them. The Kraken read many Greek calls as `(e)`, `(,`, `»ʹ`, superscripts: they are calls.
**p-0195 is shared:** the Disputatio ends at Ἀμήν (Greek col. 353, upper half); a MONITUM and *De anima* follow. Record
every note on p-0195 as usual, and add `"work": "disputatio"` or `"work": "de-anima"` by where its call stands.

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
- p-0185: p-0185-thumb.png, p-0185-t1.png, p-0185-t2.png
- p-0186: p-0186-thumb.png, p-0186-t1.png, p-0186-t2.png, p-0186-t3.png, p-0186-t4.png
- p-0187: p-0187-thumb.png, p-0187-t1.png, p-0187-t2.png, p-0187-t3.png, p-0187-t4.png, p-0187-t5.png, p-0187-t6.png, p-0187-t7.png, p-0187-t8.png
- p-0188: p-0188-thumb.png, p-0188-t1.png, p-0188-t2.png, p-0188-t3.png, p-0188-t4.png
- p-0189: p-0189-thumb.png, p-0189-t1.png, p-0189-t2.png
- p-0190: p-0190-thumb.png, p-0190-t1.png, p-0190-t2.png, p-0190-t3.png, p-0190-t4.png
- p-0191: p-0191-thumb.png, p-0191-t1.png, p-0191-t2.png
- p-0192: p-0192-thumb.png, p-0192-t1.png, p-0192-t2.png
- p-0193: p-0193-thumb.png, p-0193-t1.png, p-0193-t2.png, p-0193-t3.png, p-0193-t4.png
- p-0194: p-0194-thumb.png, p-0194-t1.png, p-0194-t2.png, p-0194-t3.png, p-0194-t4.png
- p-0195: p-0195-thumb.png, p-0195-t1.png, p-0195-t2.png, p-0195-t3.png, p-0195-t4.png, p-0195-t5.png, p-0195-t6.png
