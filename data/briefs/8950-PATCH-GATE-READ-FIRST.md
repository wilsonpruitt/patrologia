# ⛔⛔ GATE — READ BEFORE APPLYING ANY 8950 TEI PATCH

**Five of the six pending patch files in this directory were built on ONE witness, and that witness
is proven to manufacture letter-level divergences.**

`8950-PENDING-TEI-PATCHES-0008.md`, `-0012.md`, `-0019.md`, `-0024.md` and `-0031.md` rest on the
on-disk archive.org copy alone (`raw/scans/pl113/patrologiaecurs04migngoog.pdf`). Only `-0036.md`
was built against a second witness.

## What the 0036–0041 stint measured, 2026-09-05

Reading its range on **both** copies, it found the archive copy's gathering at **pp. 85–88 heavily
over-inked**, manufacturing **twelve letter-level divergences**, every one refuted by Gallica:

    sed → seu · cur → cum · expugnationi → expurgationi · Sanguis → Sanguinis
    italic F → P · tunica → unica · talarem → tularem · id est → in est
    and a 9 blotted into a 6 inside a VERSE ADDRESS

⛔ **Four of the twelve construed**, i.e. they read as sound Latin and would have changed what the
page says. A patch applied from any of them would have altered our Latin permanently, silently, and
in the direction of a reading Migne never printed — the exact harm the plate gate exists to prevent,
arriving through the plate itself.

## The rule this sets for PL 113

**A single-witness letter-level call is worth one Gallica request before it is applied.** One HTTP
fetch. The second witness:

- **Gallica ark `bpt6k5505319w`** — `https://gallica.bnf.fr/iiif/ark:/12148/bpt6k5505319w/f<N>/full/full/0/native.jpg`
- **Leaf map: `f = (column + 1) / 2`**, against the archive copy's `page = (column + 11) / 2`.
  Calibrated on this work by reading the printed corner numbers on sixteen pages, on both copies.

## What must happen before the patch pass

1. Every patch in the five single-witness files whose claim turns on **letters** — a changed,
   doubled, dropped or transposed character — is **UNCONFIRMED** and must be checked at Gallica.
2. Patches that do not turn on letters are unaffected: **a dropped `non`** (0141B), **dropped words**
   (`sancti`, `Dei` at 0170C), **lost Hebrew**, **normalized verse addresses**, and **quotation marks
   supplied or dropped** are structural, and over-inking cannot create or destroy them.
3. ⚑ **Ink is not the only way two copies differ.** At 0171D Gallica prints `Mititte` and the archive
   `Mittite` — a letter *order*, which no amount of ink can produce. That is **two printings, not two
   photographs**, and it takes neither a patch nor a `[sic:]`. Do not assume a disagreement between
   the copies is always the archive's fault.

⭐ This is the same lesson as `reference_plate-read-triage`, one level further out: frequency and
internal corroboration prove an error exists but never whose it is — **and now, a single plate proves
what one photograph of one copy shows, which is not the same as what Migne printed.**
