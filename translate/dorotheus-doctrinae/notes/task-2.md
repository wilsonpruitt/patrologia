# Migne's foot-of-page apparatus: Dorotheus, *Doctrinae* (PG 88), 56 pages

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

Write one JSON object per note, one per line, to `~/patrologia/translate/dorotheus-doctrinae/notes/result-2.jsonl`:

    {"page": "p-0940", "series": "numbered", "marker": "23", "markerState": "read", "text": "Leg. ὀκτώ.", "where": "foot", "greekWord": "ἑπτὰ", "greekLine": "…"}

and for a page with no notes one line `{"page": "p-0850", "none": true}`. Use `"markerState": "illegible"` and
`"marker": null` for an unreadable marker. No other files, no web. End with a one-line count: pages, notes by series.

## Pages
- p-0909: p-0909-thumb.png, p-0909-foot1.png, p-0909-bottom.png
- p-0910: p-0910-thumb.png, p-0910-bottom.png
- p-0911: p-0911-thumb.png, p-0911-bottom.png
- p-0912: p-0912-thumb.png, p-0912-foot1.png
- p-0913: p-0913-thumb.png, p-0913-foot1.png, p-0913-bottom.png
- p-0914: p-0914-thumb.png, p-0914-bottom.png
- p-0915: p-0915-thumb.png, p-0915-foot1.png, p-0915-bottom.png
- p-0916: p-0916-thumb.png, p-0916-foot1.png, p-0916-foot2.png, p-0916-foot3.png, p-0916-bottom.png
- p-0917: p-0917-thumb.png, p-0917-foot1.png, p-0917-bottom.png
- p-0918: p-0918-thumb.png
- p-0919: p-0919-thumb.png, p-0919-foot1.png, p-0919-foot2.png, p-0919-bottom.png
- p-0920: p-0920-thumb.png
- p-0921: p-0921-thumb.png, p-0921-foot1.png, p-0921-bottom.png
- p-0922: p-0922-thumb.png, p-0922-foot1.png, p-0922-bottom.png
- p-0923: p-0923-thumb.png, p-0923-foot1.png, p-0923-bottom.png
- p-0924: p-0924-thumb.png, p-0924-foot1.png, p-0924-bottom.png
- p-0925: p-0925-thumb.png, p-0925-bottom.png
- p-0926: p-0926-thumb.png
- p-0927: p-0927-thumb.png, p-0927-foot1.png, p-0927-bottom.png
- p-0928: p-0928-thumb.png, p-0928-foot1.png, p-0928-foot2.png
- p-0929: p-0929-thumb.png, p-0929-foot1.png, p-0929-foot2.png, p-0929-foot3.png, p-0929-foot4.png, p-0929-bottom.png
- p-0930: p-0930-thumb.png, p-0930-foot1.png, p-0930-foot2.png, p-0930-foot3.png, p-0930-bottom.png
- p-0931: p-0931-thumb.png, p-0931-foot1.png, p-0931-bottom.png
- p-0932: p-0932-thumb.png, p-0932-foot1.png, p-0932-foot2.png
- p-0933: p-0933-thumb.png, p-0933-foot1.png, p-0933-bottom.png
- p-0934: p-0934-thumb.png, p-0934-foot1.png, p-0934-bottom.png
- p-0935: p-0935-thumb.png, p-0935-foot1.png, p-0935-foot2.png, p-0935-bottom.png
- p-0936: p-0936-thumb.png, p-0936-foot1.png, p-0936-foot2.png
- p-0937: p-0937-thumb.png, p-0937-foot1.png, p-0937-foot2.png, p-0937-bottom.png
- p-0938: p-0938-thumb.png, p-0938-foot1.png, p-0938-bottom.png
- p-0939: p-0939-thumb.png, p-0939-foot1.png, p-0939-foot2.png, p-0939-bottom.png
- p-0940: p-0940-thumb.png, p-0940-foot1.png, p-0940-foot2.png, p-0940-bottom.png
- p-0941: p-0941-thumb.png, p-0941-foot1.png, p-0941-bottom.png
- p-0948: p-0948-thumb.png
- p-0949: p-0949-thumb.png, p-0949-foot1.png, p-0949-bottom.png
- p-0950: p-0950-thumb.png, p-0950-foot1.png, p-0950-bottom.png
- p-0951: p-0951-thumb.png, p-0951-foot1.png, p-0951-bottom.png
- p-0952: p-0952-thumb.png, p-0952-foot1.png, p-0952-bottom.png
- p-0953: p-0953-thumb.png, p-0953-foot1.png, p-0953-foot2.png, p-0953-bottom.png
- p-0954: p-0954-thumb.png, p-0954-foot1.png, p-0954-bottom.png
- p-0955: p-0955-thumb.png, p-0955-bottom.png
- p-0956: p-0956-thumb.png, p-0956-foot1.png, p-0956-bottom.png
- p-0957: p-0957-thumb.png, p-0957-foot1.png, p-0957-bottom.png
- p-0958: p-0958-thumb.png, p-0958-foot1.png
- p-0959: p-0959-thumb.png, p-0959-bottom.png
- p-0960: p-0960-thumb.png, p-0960-foot1.png, p-0960-foot2.png, p-0960-bottom.png
- p-0961: p-0961-thumb.png, p-0961-foot1.png, p-0961-bottom.png
- p-0962: p-0962-thumb.png, p-0962-foot1.png, p-0962-bottom.png
- p-0963: p-0963-thumb.png, p-0963-foot1.png, p-0963-bottom.png
- p-0964: p-0964-thumb.png, p-0964-foot1.png
- p-0965: p-0965-thumb.png, p-0965-foot1.png, p-0965-bottom.png
- p-0966: p-0966-thumb.png, p-0966-foot1.png
- p-0967: p-0967-thumb.png, p-0967-foot1.png, p-0967-foot2.png, p-0967-foot3.png, p-0967-foot4.png, p-0967-bottom.png
- p-0968: p-0968-thumb.png, p-0968-bottom.png
- p-0969: p-0969-thumb.png, p-0969-bottom.png
- p-0970: p-0970-thumb.png, p-0970-bottom.png
