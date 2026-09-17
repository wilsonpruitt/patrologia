# 9178 Eriugena, *De egressu et regressu animae ad Deum*: pending TEI patches (stint C, cols 1023A–1024B)

Read at the plate: archive `patrologiaecurs113unkngoog` leaf **n550**, corners **1023/1024** (⚠ the
`(col+73)/2` map fails here: it gives n548 = 1019/1020; at this point `leaf = (col+77)/2`). Second
witness Princeton `YkVOAAAAYAAJ` PA1023. Every `find` checked against `sources/pl/tei/9178.xml`.

---

## 1023A: first rubric, our twin `Alia in idipsum theoria` (no stop), the plate `Alia in idipsum theoria.` — PROPOSED

- **Our twin prints:** `<emph> <hi>Alia in idipsum theoria</hi> </emph>` (the FIRST of two occurrences; the
  second, at 1024A, already has the stop).
- **The plate prints:** `Alia in idipsum theoria.` (n550 left col, centred italic, after *moventur.*).
  Princeton PA1023: same, with the stop.
- **Proposed find** (matches exactly once): `<hi>Alia in idipsum theoria</hi>` → **replace:** `<hi>Alia in idipsum theoria.</hi>`
- **Why:** neutral punctuation; the plate is the sound printing and the two rubrics agree after the patch.
  The English already carries the stop.

## Withdrawn under E11 (twin construes)

- **1024A `eo longius.`**: the plate (both copies) prints `adhuc eo longius Ad ipsam siquidem` with no stop
  closing the Gregory quotation, although *Ad* is capitalized. The twin's `longius.` construes. English follows
  the twin; recorded in cruces; **no patch toward the plate**.

## Noted, NOT proposed

- Floss's title block (`LIBER … FRAGMENTUM.` and the source line `Cod. collect. membran. n° 596, 4°
  bibliothecae Christinae Romae fol. 9. — Cf. Carl. Greith Spicilegium Vaticanum Frauenfeld 1838, p. 80 sq.`)
  is absent from the TEI. It belongs to the owed title-block / sigla-head ruling
  (`PL122-VARIAE-LECTIONES-RULING.md`, front matter), not to a body patch.
