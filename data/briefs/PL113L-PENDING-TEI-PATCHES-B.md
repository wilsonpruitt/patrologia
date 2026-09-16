# 8971 / 8972 Lyra's two prologues: pending TEI patches (stint B)

These are sites where the plate was read and our Corpus Corporum twin differs from Migne's type.
Format follows `8957-PENDING-TEI-PATCHES-0000.md`. `find` strings were checked against
`sources/pl/tei/<idno>.xml`, and each matches exactly once. That TEI is line-wrapped, so each find
stays within one line.

⚑ **Read this first: on these leaves the two scans are TWO PRINTINGS.** Gallica `bpt6k5505319w` and
archive `patrologiaecurs04migngoog` set these pages differently (the display titles are
typographically different). Our twin agrees with the **archive printing** at every point where the
printings disagree. Those disagreements are press variants, not transcription errors, so they are
**not patched**. They are listed at the foot so nobody re-opens them. The three patches below are
the only sites where the twin departs from **both** printings.

---

## 8971 @0026D: `duo decimo` is one word on the plate

- **Opened by:** stint B, 2026-09-16
- **Plate:** Gallica f13 (corners 25 / 26), right column, native crop. The archive, PDF p. 18, is the
  second witness.
- **Our twin prints:** `sicut Philosophus` ⏎ `duo decimo Metaphys. probat ejus unitatem,`
- **The plate prints:** archive `duodecimo Metaphys.`, fused, mid-line. Gallica shows a worn
  hairline mark between *duo* and *decimo* but no word space.
- **English as shipped** (`src/english/8971/0000.md`): "in the twelfth book of the *Metaphysics*",
  with no marker (this is our file's split, not Migne's).
- **Proposed patch:** `find` `duo decimo Metaphys. probat` → `replace` `duodecimo Metaphys. probat`
- **Note:** word-division only. No marker count moves.

---

## 8971 @0029A: the opening « before *Vidi* is lost

- **Opened by:** stint B, 2026-09-16
- **Plate:** Gallica f15 (corners 29 / 30), left column, native crop. Archive PDF p. 20. Both printings
  agree.
- **Our twin prints:** `Et Apocalypsis` ⏎ ` « quinto: Vidi in dextera sedentis super thronum`
- **The plate prints:** `Et Apocalypsis` ⏎ `« quinto : « Vidi in dextera sedentis super thronum` ⏎
  `« librum scriptum intus et foris. »`. The « before *quinto* is a stray line-start continuation mark
  (the Ezekiel quotation has already closed), and the « before *Vidi* is the real opening. The
  « before *librum* is a continuation mark, which the TEI habitually drops. That one is not patched,
  following the 8957 ruling.
- **English as shipped** (`src/english/8971/0001.md`): mirrors the twin's single « ("And in Apocalypse
  « five: I saw …"), because the verifier checks guillemet parity against the twin.
  ⚠ **When this patch lands, add « before "I saw" in the English in the same commit**, or
  `verify-english` will fail on guillemet count.
- **Proposed patch:** `find` `quinto: Vidi in dextera` → `replace` `quinto: « Vidi in dextera`
- **Note:** guillemet count in 8971/0001 goes up by one on the Latin side. No other marker moves.

---

## 8972 @0032A: the mark after *simpliciter* is lost

- **Opened by:** stint B, 2026-09-16
- **Plate:** Gallica f16 (corners 31 / 32), right column, native crop: `simpliciter, secunda ta-`. The
  archive, PDF p. 21, shows `simpliciter. secunda ta-`: a point, which on that 1-bit JBIG2 copy may
  be a comma.
- **Our twin prints:** `sit litteralis simpliciter secunda tamen`
- **English as shipped** (`src/english/8972/0000.md`): "Now although both expositions are literal
  simply, the second nevertheless…" (the comma is carried).
- **Proposed patch:** `find` `simpliciter secunda tamen` → `replace` `simpliciter, secunda tamen`
- **Note:** Gallica's comma is proposed because it is the clean witness, and the archive's point may
  be a codec artifact. Punctuation only.

---

## Sites examined at the plate and NOT patched (press variants: twin = archive printing)

In each entry the Gallica reading comes first and the archive/twin reading second. The English follows the twin.

- **8971 0027B** `ex illis.` / `ex illis,`. Probably a worn comma on Gallica.
- **8971 0027B** `verum judicatur;` / `verum judicatur. ;`. English "judged true.; but".
- **8971 0028B** `decimo tertio Sed` / `decimo tertio. Sed`. A worn stop on Gallica.
- **8971 0028C** `illustrati non sumus. non` / `sumus, non`.
- **8971 0028C** `sed speciale est huic libro` / `sed speciale et huic libro`. **Word-level**; both construe.
- **8971 0028D** `per Salomonem dilatata` / `per Salomonem dilata`. **Word-level**; *dilata* renders
  ("spread abroad").
- **8971 0028D** twin `Secundum Vero sensum`: both printings have lower-case *vero*. It is a trivial
  twin capital with no English exponent. Not worth a patch.
- **8971 0029A** `mater nostra. »` / `mater nostra, »`.
- **8971 0029A** `in una oratione . et` / `in una oratione: et`. A worn colon on Gallica.
- **8971 0025B** `Homil. 35`: both printings read **35**. Prep's "55" was a low-resolution misread.
  Not a variant.
- **8972 0029B** `sacra Scriptura. qui` / `sacra Scriptura, qui`.
- **8972 0029D** `in libro de Hebraicis quaestionibus` / `in libro: de Hebraicis, quaestionibus`.
- **8972 0031D** `historicus et mysticus . quia` / `mysticus: quia`. A worn colon on Gallica.
- **8972 0032A** `secundi Regum XII. Praedicta` / `secundi Regum XII Praedicta`.
- **8972 0032C** `Abrahae, Gen. XII` / `Gen XII`.
- **8972 0032D** `locum, nisi in prophetiae praedestinationis` / `nisi prophetiae`. **Word-level**; both construe.
- **8971 0026C `processis`**: both printings print it. It is Migne's defect and is marked
  `[sic:]`. Never patch it.
- **8972 0031C `filia Jerusalem`, 0032B `super vos Medos`**: both printings print these. They are
  Migne's text, marked `[var:]`. Never patch them.

## Foot-of-page notes

None on f13, f14, f15, f16, or on the 8972 portion of f17, in either the numbered layer or the
asterisk/letter layer.
