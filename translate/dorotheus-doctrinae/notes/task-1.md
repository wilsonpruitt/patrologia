# Migne's foot-of-page apparatus: Dorotheus, *Doctrinae* (PG 88), 57 pages

For each page below you have a whole-page thumbnail (`<page>-thumb.png`, to LOCATE every note block) and readable
crops of the note blocks the layout model found (`-foot1.png`, `-bottom.png`, …), all in
`~/patrologia/translate/dorotheus-doctrinae/notes/img/`. The full 600 dpi page is
`~/patrologia/raw/kraken/dorotheus-doctrinae/pages/<page>.png` (4032 × 6214).

**What Migne prints.** Two note series under the text, in small type, full page width:
- **lettered** (a, b, c … , skipping j and w; continuous across pages, wraps after z): Scripture references, keyed
  to raised letters in the LATIN column (`ᵘ Matth. xxv, 41.`);
- **numbered** (1, 2, 3 …), often under a heading VARIÆ LECTIONES: Migne's corrections and variants for the GREEK
  (`²³ Leg. ὀκτώ.`), keyed to raised numbers in the GREEK column.
Note blocks can stand MID-PAGE where a section or work division falls (see p-0958). A page can have none.

**For every page:**
1. Look at the thumbnail first and decide where every note block is (foot, mid-page, or none).
2. Read every note from the crops. If a crop is missing, clipped or too small, cut your own from the 600 dpi page,
   e.g. `python3 -c "from PIL import Image; Image.open('<page path>').crop((x0,y0,x1,y1)).save('/tmp/c.png')"`, then Read it.
3. Transcribe each note exactly (Greek with accents, Latin as printed), and its marker. A marker you cannot read
   (an inked blob) is `illegible`: never complete it from the sequence.
4. For each NUMBERED note, find its raised number in the Greek column (cut a 600 dpi crop of the Greek column if
   needed) and give the Greek word it follows and that line's text, as far as you can read them. If you cannot find
   it, say so.

Write one JSON object per note, one per line, to `~/patrologia/translate/dorotheus-doctrinae/notes/result-1.jsonl`:

    {"page": "p-0940", "series": "numbered", "marker": "23", "markerState": "read", "text": "Leg. ὀκτώ.", "where": "foot", "greekWord": "ἑπτὰ", "greekLine": "…"}

and for a page with no notes one line `{"page": "p-0850", "none": true}`. Use `"markerState": "illegible"` and
`"marker": null` for an unreadable marker. No other files, no web. End with a one-line count: pages, notes by series.

## Pages
- p-0836: p-0836-thumb.png, p-0836-foot1.png, p-0836-foot2.png, p-0836-bottom.png
- p-0837: p-0837-thumb.png, p-0837-foot1.png, p-0837-bottom.png
- p-0838: p-0838-thumb.png, p-0838-foot1.png, p-0838-bottom.png
- p-0839: p-0839-thumb.png, p-0839-foot1.png, p-0839-bottom.png
- p-0840: p-0840-thumb.png, p-0840-foot1.png, p-0840-bottom.png
- p-0841: p-0841-thumb.png, p-0841-foot1.png, p-0841-bottom.png
- p-0842: p-0842-thumb.png, p-0842-foot1.png, p-0842-bottom.png
- p-0843: p-0843-thumb.png, p-0843-foot1.png, p-0843-foot2.png, p-0843-bottom.png
- p-0844: p-0844-thumb.png, p-0844-foot1.png, p-0844-bottom.png
- p-0845: p-0845-thumb.png, p-0845-foot1.png, p-0845-foot2.png, p-0845-bottom.png
- p-0846: p-0846-thumb.png, p-0846-bottom.png
- p-0847: p-0847-thumb.png, p-0847-foot1.png, p-0847-bottom.png
- p-0848: p-0848-thumb.png, p-0848-bottom.png
- p-0849: p-0849-thumb.png, p-0849-bottom.png
- p-0850: p-0850-thumb.png
- p-0851: p-0851-thumb.png, p-0851-foot1.png, p-0851-foot2.png, p-0851-bottom.png
- p-0852: p-0852-thumb.png, p-0852-foot1.png, p-0852-bottom.png
- p-0853: p-0853-thumb.png, p-0853-foot1.png, p-0853-foot2.png, p-0853-foot3.png, p-0853-bottom.png
- p-0854: p-0854-thumb.png, p-0854-foot1.png
- p-0855: p-0855-thumb.png, p-0855-bottom.png
- p-0856: p-0856-thumb.png, p-0856-foot1.png, p-0856-bottom.png
- p-0857: p-0857-thumb.png, p-0857-foot1.png, p-0857-bottom.png
- p-0858: p-0858-thumb.png, p-0858-bottom.png
- p-0859: p-0859-thumb.png, p-0859-foot1.png, p-0859-bottom.png
- p-0860: p-0860-thumb.png, p-0860-foot1.png, p-0860-foot2.png, p-0860-foot3.png, p-0860-bottom.png
- p-0861: p-0861-thumb.png, p-0861-foot1.png, p-0861-bottom.png
- p-0862: p-0862-thumb.png, p-0862-bottom.png
- p-0863: p-0863-thumb.png, p-0863-bottom.png
- p-0864: p-0864-thumb.png
- p-0865: p-0865-thumb.png, p-0865-bottom.png
- p-0872: p-0872-thumb.png, p-0872-foot1.png, p-0872-bottom.png
- p-0873: p-0873-thumb.png, p-0873-foot1.png, p-0873-bottom.png
- p-0874: p-0874-thumb.png, p-0874-foot1.png, p-0874-bottom.png
- p-0875: p-0875-thumb.png, p-0875-foot1.png, p-0875-bottom.png
- p-0876: p-0876-thumb.png, p-0876-foot1.png, p-0876-bottom.png
- p-0877: p-0877-thumb.png, p-0877-foot1.png, p-0877-bottom.png
- p-0878: p-0878-thumb.png, p-0878-foot1.png, p-0878-bottom.png
- p-0879: p-0879-thumb.png, p-0879-foot1.png, p-0879-bottom.png
- p-0880: p-0880-thumb.png, p-0880-foot1.png, p-0880-bottom.png
- p-0881: p-0881-thumb.png, p-0881-bottom.png
- p-0882: p-0882-thumb.png, p-0882-foot1.png, p-0882-bottom.png
- p-0883: p-0883-thumb.png, p-0883-foot1.png, p-0883-bottom.png
- p-0884: p-0884-thumb.png, p-0884-foot1.png, p-0884-bottom.png
- p-0885: p-0885-thumb.png, p-0885-foot1.png, p-0885-bottom.png
- p-0886: p-0886-thumb.png, p-0886-bottom.png
- p-0887: p-0887-thumb.png, p-0887-bottom.png
- p-0888: p-0888-thumb.png, p-0888-foot1.png, p-0888-foot2.png, p-0888-bottom.png
- p-0889: p-0889-thumb.png, p-0889-foot1.png
- p-0890: p-0890-thumb.png, p-0890-bottom.png
- p-0891: p-0891-thumb.png, p-0891-foot1.png, p-0891-bottom.png
- p-0892: p-0892-thumb.png, p-0892-foot1.png, p-0892-bottom.png
- p-0893: p-0893-thumb.png, p-0893-bottom.png
- p-0904: p-0904-thumb.png, p-0904-foot1.png, p-0904-bottom.png
- p-0905: p-0905-thumb.png, p-0905-bottom.png
- p-0906: p-0906-thumb.png
- p-0907: p-0907-thumb.png, p-0907-bottom.png
- p-0908: p-0908-thumb.png, p-0908-foot1.png, p-0908-bottom.png
