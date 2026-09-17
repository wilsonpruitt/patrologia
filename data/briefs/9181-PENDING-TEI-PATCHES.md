# 9181 Eriugena, *Expositiones super Ierarchiam ecclesiasticam S. Dionysii*: pending TEI patches (stint C, cols 0265D–0268A)

Sites where stint C read the column at the plate and the type differs from our Corpus Corporum twin.
Per "What the English translates" and E11, **the English already renders the plate** at both sites
proposed below. Do not edit `sources/pl/tei/9181.xml` or `data/tei-patches/9181.json` from here; the
orchestrator merges. Every `find` below was checked and matches **exactly once** in `sources/pl/tei/9181.xml`.

Working plate: archive.org `patrologiaecurs113unkngoog/page/n<leaf>.jpg`, leaves n169 (corners 265/266,
blotched) and n170 (corners 267/268, clean); map `leaf = (odd column + 73)/2` holds. Second witness:
Google Books Princeton `YkVOAAAAYAAJ` PA265 and PA267 (zoom=3), both sites confirmed there.

---

## 0268A–C: the chapter table, the closing paragraph and *Cetera desiderantur.* are MISSING from our twin — PROPOSED

- **Our twin ends:** `choris, et sensualiter Alleluia concinentibus, liquido\nmanifestat.</p>` (then `</div1>`).
- **The plate continues** (right column of n170, from band A into B and C; line-for-line on Princeton PA267):

      Haec insunt in hoc de ecclesiastica ierarchia totum          [italic]
  [B] capitula VII.                                                [italic; VII in small caps roman]
      I. Quae sit ecclesiasticae ierarchiae traditio, et quae ejusdem speculatio.   [titles italic]
      II. De perficiendis in baptismate.
      III. De perficiendis in synaxi.
      IV. De perficiendis in miro et in ipso offerendis.
      V. De sacerdotalibus confirmationibus.
      VI. De perficiendorum ordinibus.
      VII. De perficiendis in dormientibus ¹⁸.
      Praecumbentium capitulorum doctrinam secundum duplicem perficit modum. Primum enim expo-
      nit hoc : quomodo perficitur mysterium ¹⁹ capituli ; ac deinde theoria quadam traditionem : utputa myste-
  [C] rii illuminationis expositio primum, deinde secunda theoria ejus, iterum ²⁰ mysterii synaxeos expositio,
      deinde theoria ejus, et eodem modo de ceteris.
      Cetera desiderantur.                                         [italic, centred]

- **Proposed find:** `liquido\nmanifestat.</p>`
- **Proposed replace:** `liquido\nmanifestat.</p>\n<p><emph>Haec insunt in hoc de ecclesiastica ierarchia totum\n<pb n="0268B"/>\ncapitula</emph> VII.</p>\n<list><item>I. <emph>Quae sit ecclesiasticae ierarchiae traditio, et quae ejusdem speculatio.</emph></item>\n<item>II. <emph>De perficiendis in baptismate.</emph></item>\n<item>III. <emph>De perficiendis in synaxi.</emph></item>\n<item>IV. <emph>De perficiendis in miro et in ipso offerendis.</emph></item>\n<item>V. <emph>De sacerdotalibus confirmationibus.</emph></item>\n<item>VI. <emph>De perficiendorum ordinibus.</emph></item>\n<item>VII. <emph>De perficiendis in dormientibus.</emph></item></list>\n<p>Praecumbentium capitulorum doctrinam secundum duplicem perficit modum. Primum enim exponit hoc : quomodo perficitur mysterium capituli ; ac deinde theoria quadam traditionem : utputa\n<pb n="0268C"/>\nmysterii illuminationis expositio primum, deinde secunda theoria ejus, iterum mysterii synaxeos expositio, deinde theoria ejus, et eodem modo de ceteris.</p>\n<p><emph>Cetera desiderantur.</emph></p>`
  (The markup shape is a suggestion: the orchestrator should match whatever `list`/`emph` form the chunker
  already handles. ⚑ The plate's C band letter stands against the line beginning `rii illuminationis`,
  i.e. inside the hyphenated *myste-rii*; the pb is placed before the whole word.)
- **Why:** text lost from the digitization, not a reading. After it lands, re-chunk, re-run the injector
  (VL rows 18–20 in `data/plate-notes/9181.tsv` then get anchors: `in dormientibus (18).` ·
  `perficitur mysterium (19) capituli` · `iterum (20) mysterii synaxeos`, flip their column to `yes`),
  and in the English remove the `[ed:]` note and add the `[0268B]`/`[0268C]` anchors at "chapters" /
  "illumination" (the restored translation is already in place).
- ⚑ **Chunk head:** Corpus Corporum's `colLast` will become `0268C`; the frontmatter must be re-copied.

## 0268A: our twin reads `chrismatis, initiatione`, the plate reads `chrismatis initiatione` — PROPOSED

- **Our twin prints:** `In qua videlicet\nchrismatis, initiatione ordinem Seraphim benignum`
- **The plate prints:** `In qua videlicet / chrismatis initiatione ¹³ ordinem Seraphim beni-` (n170 right col,
  band A, line 5). No comma; the raised key ¹³ follows *initiatione*. Princeton PA267: same, no comma.
- **Proposed find:** `chrismatis, initiatione` → **replace:** `chrismatis initiatione`
- **Why it matters:** the twin's comma cuts the genitive *chrismatis* off from the noun it depends on
  (*in qua chrismatis initiatione*, "in which initiation of the chrism"). The plate construes; the twin
  does not. The English follows the plate. ⚠ The VL anchor for key 13 in the TSV reproduces the twin's
  comma (so it places now); drop the comma from the anchor when the patch lands.

## Noted, NOT proposed

- **Sigla table digits** (`Lipsien. 188`, `Sorbonn. 1355`): the archive copy blots them (188 / 1355 or 1353),
  Princeton at 575 px reads `188` and `1353`-or-`1355`. Digit level is not licensed on PL 122 witnesses.
  Twin carried.
- **n169 `Möysen`** (archive) vs twin `Moysen`: a diaeresis-like blot, Princeton clean `Moysen`. No patch.
