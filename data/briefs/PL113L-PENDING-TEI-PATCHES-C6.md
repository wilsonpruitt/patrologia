# 8974 *Additiones* (Paul of Burgos), chunks 0006–0010 — pending TEI patches (stint C6)

Sites where this stint opened the column at the plate and Migne's type differs from our Corpus
Corporum twin. Per the locked rule, **the English already renders the plate**; this file records
each divergence so the Latin converges on it when the patch pass lands.

Every `find` below was checked against `sources/pl/tei/8974.xml` on 2026-09-16 and matches
**exactly once**. None moves a column anchor, a note, or a chunk boundary.

Plate: Gallica `bpt6k5505319w`, `f = (column + 1) / 2`, corner numbers read first on every leaf.
Second witness: archive `patrologiaecurs04migngoog`, PDF page `(column + 11) / 2`, 300 dpi.
**All four patches below stand on BOTH witnesses.**

---

## 0051A — `sed pene mysticus` → `sed bene mysticus`
- **Plate:** f26, corners 51 / 52, left column, line 1: *-tur, sed bene mysticus multiplicatur.* Gallica's
  sorts are worn here (*seu oene* at a glance); archive p. 31 prints *sed bene* cleanly.
- **Internal control:** the reply quotes the same sentence at 0057A as *sed bene mysticus multiplicatur*.
- **find** `sed pene mysticus` → **replace** `sed bene mysticus`
- **English** (0006): "but the mystical is indeed multiplied".

## 0057B — `capiunt spritualia` → `capiunt spiritualia`
- **Plate:** f29, col 57, band B: *capiunt spiri-|tualia* (hyphenated at the line end). Archive p. 34: *spiri-|tualia*.
- **find** `capiunt spritualia` → **replace** `capiunt spiritualia`

## 0058A — `seu spritualem, sacrae` → `seu spiritualem, sacrae`
- **Plate:** f29, col 58, band A, line 4: *verum sensum mysticum, seu spiritualem, sacrae*. Archive p. 34 the same.
- **find** `seu spritualem, sacrae` → **replace** `seu spiritualem, sacrae`

## 0058B — `sacrae Sripturae et divinae` → `sacrae Scripturae et divinae`
- **Plate:** f29, col 58, above the C band: *vero intellectu sacrae Scripturae et divinae curo*. Archive p. 34 the same.
- **find** `sacrae Sripturae et divinae` → **replace** `sacrae Scripturae et divinae`

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

The two copies of PL 113 are different printings in this range, and where they differ and both are
clean there is no one to accuse and nothing to patch (CLAUDE.md, press-variant converse).

- **0050A `Alme praesul. ut`** — Gallica prints a comma (*Alme praesul, ut*); archive p. 30 prints the
  full stop our twin has. Press variant. **No patch**; the English follows the twin's stop.
- **0050D `sempliciter`** — Gallica prints *simpliciter* cleanly; archive p. 30 prints *sempliciter*, as
  our twin does. The archive is 1-bit JBIG2 and may have substituted the vowel, but a letter never stands
  on that copy alone, and neither does it fall on Gallica alone. **No patch, no `[sic:]`**; English "simply".
- **0050B `et si magna exuberat`** — Gallica sets *etsi* as one word (the reply's quotation at 0051D is
  *etsi* in the twin and on both copies). Spacing only, sense identical. Archive not checked at this word.
  **No patch.**
- **0060A `divina, semper`** — Gallica shows a full stop (*divina. semper*); archive p. 35 a comma, as the
  twin. Press variant or a worn comma. **No patch**; English follows the comma.
- **0051B `immiscendo illam habitui`** — a comma-like speck after *illam* on Gallica only. Not a mark. **No patch.**
- **0052A `sensus naturalis praeeminet`**, **0053A `Primo contra auctoritates`**, **0053D `doctorum hujusmodi`**,
  **0057D `Attribuis enim sensus spirituali`**, **0057D `rectitudo experientiae`** — each confirmed as
  Migne's type on BOTH copies. Pattern 7 territory (see `src/english/8974/cruces-0006.md`). **Must not be patched.**
