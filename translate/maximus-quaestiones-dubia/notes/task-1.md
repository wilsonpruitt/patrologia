⛔⛔ READ THIS FIRST. On an earlier work two readers wrote notes for pages whose images they could not see; everything they wrote was deleted. You may write a note ONLY from an image you have actually seen on screen in this session. If a Read returns no picture («request limit», «media removed», an error, a size tag), wait, retry ONCE with a crop ≤ 1600 px wide; if that also fails, write {"page": "p-0NNN", "unread": true, "why": "..."} and go on to the next page. Never write a note from the OCR, the Latin column, the English, or what the note "should" say.

# Migne's foot-of-page apparatus: Maximus the Confessor, *Quaestiones et dubia* (PG 90.785–856), pages p-0396–p-0404 (9 pages)

Read-only transcription task. Work in `~/patrologia/translate/maximus-quaestiones-dubia/notes/`. Images are in `img/`: for every page a whole-page thumbnail `<page>-thumb.png`
(700 px wide: use it to LOCATE every note block) and tiles `<page>-t<N>.png` (2100 px wide halves, overlapping by 200 px, of the layout model's note-block regions;
a page where the model found nothing carries its bottom band). The full 600 dpi page is `~/patrologia/raw/kraken/maximus-quaestiones-dubia/pages/<page>.png`. A note running across the
page continues from the left tile into the right one. **The layout model misses blocks: decide from the thumbnail, never from the tile list alone.**

**What Migne prints here.** Greek LEFT on even pdf pages, RIGHT on odd (`column` = "greek"/"latin" accordingly). Under the columns, in small type, full width:
(1) **Scripture locators** keyed by small raised NUMBERS (e.g. `⁷² Job xl, 11.  ⁷³ Psal. xxxvii, 8.`), numbered continuously through the work: series `numbered`, no `en`;
(2) the editor's **Latin notes keyed by LETTERS (a), (b) …** (sometimes asterisks), often long, comments on the sense, variants and conjectures (e.g. «Quid si δεξιάν, ad laboris scilicet usum?»):
series `lettered`/`asterisk`, transcribe exactly, `en` sentence by sentence; (3) on some pages **Greek scholia** (a Greek lemma + gloss, no mark, e.g. «Τὸ Μωρὸν ὄνομα λέγουσιν…» type glosses):
series `scholion`, Greek exact with accents and breathings, `en`. Inside the Greek text Migne also prints **bracketed readings with Latin sigla** («[R. …]», «[Reg. …]», «[Cord. …]», «[ἴσ. …]», «[R. non bene …]»):
record each one you see in the Greek column as a note with series `bracket-inline`, its full text exactly, and in `en` whether it is a variant, a supply, a deletion or a conjecture
(and which reading the editor prefers, if his lettered note says). **Do not name the editor in `en`** ("the editor"). Sigla are quoted as printed (R., Reg., Cord.).
BOLD numerals inside the Latin text are the old edition's page numbers, not calls.

**For every page:**
1. Look at the thumbnail first; locate every note block (foot, mid-page, or none).
2. Read every note from the tiles. If a tile is missing, clipped or too small, cut your own from the 600 dpi page
   (`python3 -c "from PIL import Image; Image.open('<page path>').crop((x0,y0,x1,y1)).save('/tmp/qdn.png')"`) and Read it.
3. Transcribe each note exactly (Greek with accents, Latin as printed, abbreviations as printed), with its marker. A marker you cannot read is
   `"markerState": "illegible"`, `"marker": null`; NEVER complete it from the sequence. A note you cannot read: `"text": null` and say why in `"unreadable"`.
4. Find each note's raised mark in the running text (cut a 600 dpi crop of the column if needed) and give the word it follows (`anchorWord`), that line's text as far
   as you can read it (`anchorLine`), and the column. If you cannot find it, `"anchorWord": null`.
5. `en` for every note that is a sentence; none for bare Scripture locators.

Write one JSON object per note, one per line, appending as you go, to `~/patrologia/translate/maximus-quaestiones-dubia/notes/result-1.jsonl`:

    {"page": "p-0401", "series": "lettered", "marker": "k", "markerState": "read", "text": "…", "where": "foot", "column": "greek", "anchorWord": "ὄνομα", "anchorLine": "Τὸ Μωρὸν ὄνομα (k) λέγουσιν…", "en": "…"}

`where` = `foot` | `mid` | `inline`. For a page with no notes one line `{"page": "p-0NNN", "none": true}` (confirmed at 600 dpi). **Call cross-check, every page:** every raised mark in BOTH columns
ends as a note line, a `continued` line, or `{"page":…,"orphanCall":"<mark>","anchorWord":…,"column":…}`. `text` is a transcription, never a paraphrase; a word you can only restore from context is `[...]`.
No other files, no web, no delegation. Finish with one line: pages read, pages unread (if any), notes by series, markers illegible, orphan calls.

**p-0396 is shared:** lines above the title «ΤΟΥ ΑΥΤΟΥ / ΠΕΥΣΕΙΣ…» are the end of the *Ad Thalassium* scholia: a note keyed there gets `"work": "preceding"`.

## Pages
- p-0396: p-0396-thumb.png, p-0396-t1.png, p-0396-t2.png, p-0396-t3.png, p-0396-t4.png
- p-0397: p-0397-thumb.png, p-0397-t1.png, p-0397-t2.png, p-0397-t3.png, p-0397-t4.png, p-0397-t5.png, p-0397-t6.png, p-0397-t7.png, p-0397-t8.png, p-0397-t9.png, p-0397-t10.png, p-0397-t11.png, p-0397-t12.png
- p-0398: p-0398-thumb.png, p-0398-t1.png, p-0398-t2.png, p-0398-t3.png, p-0398-t4.png, p-0398-t5.png, p-0398-t6.png, p-0398-t7.png, p-0398-t8.png, p-0398-t9.png, p-0398-t10.png
- p-0399: p-0399-thumb.png, p-0399-t1.png, p-0399-t2.png, p-0399-t3.png, p-0399-t4.png, p-0399-t5.png, p-0399-t6.png, p-0399-t7.png, p-0399-t8.png, p-0399-t9.png, p-0399-t10.png
- p-0400: p-0400-thumb.png, p-0400-t1.png, p-0400-t2.png, p-0400-t3.png, p-0400-t4.png, p-0400-t5.png, p-0400-t6.png, p-0400-t7.png, p-0400-t8.png, p-0400-t9.png, p-0400-t10.png, p-0400-t11.png, p-0400-t12.png, p-0400-t13.png, p-0400-t14.png
- p-0401: p-0401-thumb.png, p-0401-t1.png, p-0401-t2.png, p-0401-t3.png, p-0401-t4.png, p-0401-t5.png, p-0401-t6.png, p-0401-t7.png, p-0401-t8.png, p-0401-t9.png, p-0401-t10.png
- p-0402: p-0402-thumb.png, p-0402-t1.png, p-0402-t2.png, p-0402-t3.png, p-0402-t4.png, p-0402-t5.png, p-0402-t6.png, p-0402-t7.png, p-0402-t8.png, p-0402-t9.png, p-0402-t10.png, p-0402-t11.png, p-0402-t12.png, p-0402-t13.png, p-0402-t14.png
- p-0403: p-0403-thumb.png, p-0403-t1.png, p-0403-t2.png, p-0403-t3.png, p-0403-t4.png, p-0403-t5.png, p-0403-t6.png, p-0403-t7.png, p-0403-t8.png, p-0403-t9.png, p-0403-t10.png, p-0403-t11.png, p-0403-t12.png
- p-0404: p-0404-thumb.png, p-0404-t1.png, p-0404-t2.png, p-0404-t3.png, p-0404-t4.png
