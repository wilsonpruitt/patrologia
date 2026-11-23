# Migne's foot-of-page apparatus: Maximus the Confessor, *Diversa capita* (PG 90), pages p-0656–p-0664 (9 pages: a RE-READ)

Read-only transcription task. Work in `~/patrologia/translate/maximus-diversa-capita/notes/`. Images are in `img/`:
for every page a whole-page thumbnail `<page>-thumb.png` (700 px wide: use it to LOCATE every note block) and tiles
`<page>-t<N>.png` (2100 px wide halves, overlapping, of the layout model's note-block regions; a page the model found
nothing on carries its bottom band instead, listed in `manifest.json` with `model_found_notes`). The full 600 dpi page
is `~/patrologia/raw/kraken/maximus-diversa-capita/pages/<page>.png` (600 dpi). Tiles are halves: a note running across the
page continues from the left tile into the right one (200 px overlap).

**What Migne prints.** Under the two columns (LATIN left, GREEK right, or alternating by page) in small type, full page
width, **notes**: Latin cautions and cross-references keyed to raised marks in either column; Scripture references;
and, under a heading VARIÆ LECTIONES, numbered corrections/variants for the Greek (`²¹ al. Φαρῶν et Φαρῶ.`). Marks may
be numbers, letters (a–z skipping j, w), or asterisks. Note blocks can stand MID-PAGE where a chapter or section
division falls; the editor's notes are keyed by LETTERS (a), (b) … and by NUMBERS (1), (2) … and by superscript numerals in the Greek (variants, the sigla "Fr." and others, conjectures, Scripture locators, learned comments). Do NOT name the editor in `en` (say "the editor"). A page can
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

Write one JSON object per note, one per line, to `~/patrologia/translate/maximus-diversa-capita/notes/result-3b.jsonl`:

    {"page": "p-0062", "series": "numbered", "marker": "23", "markerState": "read", "text": "al. inser. τοῦ.", "where": "foot", "column": "greek", "anchorWord": "ἀπὸ", "anchorLine": "…", "en": null}

`series` = `numbered` | `lettered` | `asterisk` | `notae` (long NOTÆ blocks under that heading, keyed (a), (b) … to a piece). `where` = `foot` | `mid` . For a page with no
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
- p-0383: p-0383-thumb.png, p-0383-t1.png, p-0383-t2.png, p-0383-t3.png, p-0383-t4.png
- p-0388: p-0388-thumb.png, p-0388-t1.png, p-0388-t2.png
- p-0389: p-0389-thumb.png, p-0389-t1.png, p-0389-t2.png, p-0389-t3.png, p-0389-t4.png
- p-0390: p-0390-thumb.png, p-0390-t1.png, p-0390-t2.png
- p-0391: p-0391-thumb.png, p-0391-t1.png, p-0391-t2.png
- p-0392: p-0392-thumb.png, p-0392-t1.png, p-0392-t2.png
- p-0393: p-0393-thumb.png, p-0393-t1.png, p-0393-t2.png
- p-0394: p-0394-thumb.png, p-0394-t1.png, p-0394-t2.png
- p-0395: p-0395-thumb.png, p-0395-t1.png, p-0395-t2.png
- p-0396: p-0396-thumb.png, p-0396-t1.png, p-0396-t2.png, p-0396-t3.png, p-0396-t4.png
- p-0397: p-0397-thumb.png, p-0397-t1.png, p-0397-t2.png, p-0397-t3.png, p-0397-t4.png


**Diversa capita specifics.** Your pages: p-0656 to p-0664 ONLY (other readers have the rest). Five centuries of 100 numbered chapters. Besides Latin
Scripture locators, Migne prints **Greek scholia** at the foot of many pages (a Greek lemma + a Greek gloss, e.g. «Καὶ ἀδιάπτωτος· ἀπαραλλάκτῳ …», «Πάσης παθῶν
ἐπινοίας», «Γνωμικῶς δέ», «Ἠργμένον τὸ κακόν», «Πιῶν ἢ λαλῶν», «Τὴν μὲν σχετικήν», «Ἣν οἶδεν ὁ λόγος») and **Latin editorial notes keyed (a), (b) … or *, often
about a word Migne prints in [square brackets] in the Greek** (whether the editor supplies, deletes or reads otherwise). Transcribe each exactly (Greek with accents and
breathings), give `anchorWord` + `column`, and an `en` for every note that is a sentence. **For every note about a bracketed word, say in `en` which it is: the editor
SUPPLIES the word, would DELETE it, or gives a VARIANT/CONJECTURE.** Notes with no mark are series `scholion`. Count calls against notes on every page; report gaps in your last line.


⛔ **RE-READ — why this task exists.** A first reader's image reads of these pages came back blank and it wrote the notes anyway: those notes were deleted. **You may write a
note ONLY from an image you have actually seen.** If a Read of an image returns no picture (an error, a size tag only, a "request limit"), wait, retry once with a smaller
crop (≤ 1600 px wide), and if it still fails, write `{"page": "p-06NN", "unread": true, "why": "..."}` for that page and go on. An honest gap is acceptable; an unseen note is not.
