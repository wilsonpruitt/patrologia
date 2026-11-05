# Migne's foot-of-page apparatus: Procopius, *Rhetorica* (PG 87.3), pages p-0011–p-0035 (25 pages)

Read-only transcription task. Work in `~/patrologia/translate/procopius-rhetorica/notes/`. Images are in `img/`:
for every page a whole-page thumbnail `<page>-thumb.png` (700 px wide: use it to LOCATE every note block) and tiles
`<page>-t<N>.png` (2100 px wide halves, overlapping, of the layout model's note-block regions; a page the model found
nothing on carries its bottom band instead, listed in `manifest.json` with `model_found_notes`). The full 600 dpi page
is `~/patrologia/raw/kraken/procopius-rhetorica/pages/<page>.png` (≈3971 × 6300). Tiles are halves: a note running
across the page continues from the left tile into the right one (200 px overlap).

**What Migne prints.** Three pieces: the *Panegyric on Anastasius* (pp. 11–27, Villoison's edition, Greek and Latin
in facing columns, alternating sides by page) with **Villoison's numbered notes (1)…(72+)** at the foot — long
learned notes in Latin quoting Greek (Choricius, Evagrius, Theophanes…), keyed to a bracketed number in the Greek
column; then Combefis's Monitum and his excerpt *On Hagia Sophia* (pp. 27–33) and the *Monody* (pp. 34–35), whose
notes (if any) may be numbered, lettered or under a NOTÆ heading, in Latin. Note blocks can stand MID-PAGE where a
piece ends. A page can have none. **The layout model misses blocks: decide from the thumbnail, never from the tile
list alone.**

**For every page:**
1. Look at the thumbnail first; locate every note block (foot, mid-page, or none).
2. Read every note from the tiles. If a tile is missing, clipped or too small, cut your own from the 600 dpi page
   (`python3 -c "from PIL import Image; Image.open('<page path>').crop((x0,y0,x1,y1)).save('/tmp/c.png')"`) and Read it.
3. Transcribe each note exactly and COMPLETELY (Greek with accents, Latin as printed, abbreviations and references
   as printed), with its marker. A note that continues onto the next page: finish it there and record it once, on
   the page where it starts, with `"continues": true`. A marker you cannot read is `"markerState": "illegible"`,
   `"marker": null`; NEVER complete it from the sequence. Do not guess a note you cannot read: record `"text": null`
   and say why in `"unreadable"`.
4. Find each note's bracketed number in the running text (cut a 600 dpi crop of the Greek column if needed) and give
   the word it follows (`anchorWord`), that line's text as far as you can read it (`anchorLine`), and the column
   (`"greek"` or `"latin"`). If you cannot find it, set `"anchorWord": null`.
5. For every note, add a plain English rendering in `"en"` of its Latin (the Greek it quotes stays Greek, untranslated
   inside the English; a bare reference like `Evagr. III, 29` needs no rendering).

Write one JSON object per note, one per line, to `~/patrologia/translate/procopius-rhetorica/notes/result-1.jsonl`:

    {"page": "p-0012", "series": "numbered", "marker": "1", "markerState": "read", "text": "Eodem sensu Choricius in illa Oratione funebri, qua eumdem Procopium, suum magistrum, celebrat, apud Fabric. Bibl. Graec. t. VIII, p. 862: Νῦν δὲ τίς οὐ κατόπιν χωρήσει τῶν εἰργασμένων, ὧν τί παρεὶς τίνος μνησθῶ;", "where": "foot", "column": "greek", "anchorWord": "δωρεῶν", "anchorLine": "ναι τῶν δωρεῶν (1), ἀμοιβῆς ἀπορεῖ τοῖς ἔργοις", "en": "In the same sense Choricius, in the funeral oration in which he celebrates this same Procopius, his teacher, in Fabricius, Bibl. Graec. vol. VIII, p. 862: Νῦν δὲ …"}

`series` = `numbered` | `lettered` | `asterisk` | `notae`. `where` = `foot` | `mid`. For a page with no notes one
line `{"page": "p-0036", "none": true}`. No other files, no web, no delegation. Work every page in order, append
as you go (so a crash loses nothing). Finish with one line: pages, notes by series, markers illegible, notes continued
across pages.

## Pages
- p-0011: p-0011-thumb.png, p-0011-t1.png, p-0011-t2.png
- p-0012: p-0012-thumb.png, p-0012-t1.png, p-0012-t2.png, p-0012-t3.png, p-0012-t4.png, p-0012-t5.png, p-0012-t6.png, p-0012-t7.png, p-0012-t8.png
- p-0013: p-0013-thumb.png, p-0013-t1.png, p-0013-t2.png, p-0013-t3.png, p-0013-t4.png, p-0013-t5.png, p-0013-t6.png, p-0013-t7.png, p-0013-t8.png, p-0013-t9.png, p-0013-t10.png, p-0013-t11.png, p-0013-t12.png, p-0013-t13.png, p-0013-t14.png
- p-0014: p-0014-thumb.png, p-0014-t1.png, p-0014-t2.png, p-0014-t3.png, p-0014-t4.png, p-0014-t5.png, p-0014-t6.png, p-0014-t7.png, p-0014-t8.png, p-0014-t9.png, p-0014-t10.png, p-0014-t11.png, p-0014-t12.png, p-0014-t13.png, p-0014-t14.png, p-0014-t15.png, p-0014-t16.png, p-0014-t17.png, p-0014-t18.png, p-0014-t19.png, p-0014-t20.png
- p-0015: p-0015-thumb.png, p-0015-t1.png, p-0015-t2.png, p-0015-t3.png, p-0015-t4.png, p-0015-t5.png, p-0015-t6.png, p-0015-t7.png, p-0015-t8.png, p-0015-t9.png, p-0015-t10.png, p-0015-t11.png, p-0015-t12.png
- p-0016: p-0016-thumb.png, p-0016-t1.png, p-0016-t2.png, p-0016-t3.png, p-0016-t4.png, p-0016-t5.png, p-0016-t6.png
- p-0017: p-0017-thumb.png, p-0017-t1.png, p-0017-t2.png, p-0017-t3.png, p-0017-t4.png, p-0017-t5.png, p-0017-t6.png
- p-0018: p-0018-thumb.png, p-0018-t1.png, p-0018-t2.png, p-0018-t3.png, p-0018-t4.png, p-0018-t5.png, p-0018-t6.png, p-0018-t7.png, p-0018-t8.png, p-0018-t9.png, p-0018-t10.png
- p-0019: p-0019-thumb.png, p-0019-t1.png, p-0019-t2.png, p-0019-t3.png, p-0019-t4.png, p-0019-t5.png, p-0019-t6.png
- p-0020: p-0020-thumb.png, p-0020-t1.png, p-0020-t2.png, p-0020-t3.png, p-0020-t4.png, p-0020-t5.png, p-0020-t6.png
- p-0021: p-0021-thumb.png, p-0021-t1.png, p-0021-t2.png, p-0021-t3.png, p-0021-t4.png, p-0021-t5.png, p-0021-t6.png, p-0021-t7.png, p-0021-t8.png, p-0021-t9.png, p-0021-t10.png, p-0021-t11.png, p-0021-t12.png
- p-0022: p-0022-thumb.png, p-0022-t1.png, p-0022-t2.png, p-0022-t3.png, p-0022-t4.png, p-0022-t5.png, p-0022-t6.png, p-0022-t7.png, p-0022-t8.png, p-0022-t9.png, p-0022-t10.png
- p-0023: p-0023-thumb.png, p-0023-t1.png, p-0023-t2.png, p-0023-t3.png, p-0023-t4.png
- p-0024: p-0024-thumb.png, p-0024-t1.png, p-0024-t2.png, p-0024-t3.png, p-0024-t4.png, p-0024-t5.png, p-0024-t6.png
- p-0025: p-0025-thumb.png, p-0025-t1.png, p-0025-t2.png, p-0025-t3.png, p-0025-t4.png, p-0025-t5.png, p-0025-t6.png, p-0025-t7.png, p-0025-t8.png, p-0025-t9.png, p-0025-t10.png
- p-0026: p-0026-thumb.png, p-0026-t1.png, p-0026-t2.png, p-0026-t3.png, p-0026-t4.png, p-0026-t5.png, p-0026-t6.png, p-0026-t7.png, p-0026-t8.png
- p-0027: p-0027-thumb.png, p-0027-t1.png, p-0027-t2.png, p-0027-t3.png, p-0027-t4.png, p-0027-t5.png, p-0027-t6.png, p-0027-t7.png, p-0027-t8.png, p-0027-t9.png, p-0027-t10.png, p-0027-t11.png, p-0027-t12.png, p-0027-t13.png, p-0027-t14.png
- p-0028: p-0028-thumb.png, p-0028-t1.png, p-0028-t2.png, p-0028-t3.png, p-0028-t4.png, p-0028-t5.png, p-0028-t6.png
- p-0029: p-0029-thumb.png, p-0029-t1.png, p-0029-t2.png, p-0029-t3.png, p-0029-t4.png, p-0029-t5.png, p-0029-t6.png
- p-0030: p-0030-thumb.png, p-0030-t1.png, p-0030-t2.png, p-0030-t3.png, p-0030-t4.png, p-0030-t5.png, p-0030-t6.png, p-0030-t7.png, p-0030-t8.png
- p-0031: p-0031-thumb.png, p-0031-t1.png, p-0031-t2.png, p-0031-t3.png, p-0031-t4.png, p-0031-t5.png, p-0031-t6.png, p-0031-t7.png, p-0031-t8.png
- p-0032: p-0032-thumb.png, p-0032-t1.png, p-0032-t2.png, p-0032-t3.png, p-0032-t4.png
- p-0033: p-0033-thumb.png, p-0033-t1.png, p-0033-t2.png, p-0033-t3.png, p-0033-t4.png, p-0033-t5.png, p-0033-t6.png, p-0033-t7.png, p-0033-t8.png, p-0033-t9.png, p-0033-t10.png
- p-0034: p-0034-thumb.png, p-0034-t1.png, p-0034-t2.png
- p-0035: p-0035-thumb.png, p-0035-t1.png, p-0035-t2.png, p-0035-t3.png, p-0035-t4.png
