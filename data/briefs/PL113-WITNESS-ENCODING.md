# ⛔⛔ THE TWO PL 113 WITNESSES — what each one physically IS, measured 2026-09-06

Written while merging 8963 *Liber Numeri*, when a stint asked for a **1200 dpi render** of two
Hebrew words it had refused to transcribe. The request cannot be satisfied, and finding out why
changed how several of this run's findings should be read.

## The measurement

    archive.org  raw/scans/pl113/patrologiaecurs04migngoog.pdf
                 3892 x 6106 at 600 ppi -- and **jbig2, gray, 1 bit per component**
                 uniform across ALL 34 pages of the Numbers range (pdfimages -list)

    Gallica      ark:/12148/bpt6k5505319w
                 1868 x 3092, **8 bits per sample**, 1 component -- roughly 300 ppi
                 IIIF `full/full/0/native.jpg` IS the ceiling; a larger `size` interpolates

## ⭐ Consequence 1 — there is no higher resolution to go to, on either copy

`pdftoppm -r 1800` on the archive and `/1800,/` on Gallica both **upsample**. Every crop above
600 dpi (archive) or ~300 ppi (Gallica) in this run's cruces is interpolation, not detail.
**A request for a higher-resolution render of a PL 113 plate cannot be met from the sources on
hand.** It would take a new capture of a physical copy.

⚑ This is why the two `[ed:]` markers at 8963 @0427B and @0437C **stand as clause-3 losses**
(text lost and not recoverable), rather than waiting on a render that would add nothing. The
stint that refused to transcribe those Hebrew words by eye was right, and no cheap remedy exists.

## ⭐⭐ Consequence 2 — "OVER-INKING" IS THE WRONG NAME FOR THE ARCHIVE'S FAILURE MODE

A **1-bit-per-pixel** image has no ink gradations. It is already thresholded: every pixel is
black or white, and no amount of care can recover a grey. So the archive copy's divergences are
not a photograph of heavier ink.

**JBIG2 is a lossy SYMBOL-SUBSTITUTION codec.** It clusters visually similar glyph bitmaps and
stores one representative for the cluster, then reuses it. Its documented failure mode is
replacing a character with a *different, visually similar, perfectly well-formed* character —
the Xerox digit-substitution affair is the canonical case.

⭐ **That mechanism predicts exactly the class this run kept finding**, and predicts it better
than ink does: archive-only readings that are **sound Latin**, not noise.

    0386A  Applica / Accipe tribum      "sound Latin anticipating the citation four words later"
    0407B  lux / lex                    a real word, in a column where *lux* is genuinely printed 20 lines on
    0396A  non erudit / nos erudit      a manufactured NEGATION
    0433B  ne fidem / nec fidem         a manufactured change of negation
    0384D  59 / 39   0415C  12 / 42     digits -- the Xerox class precisely
    0438C  VERS. 18 / VERS. 17          a digit that produced plausible internal corroboration

Ink smears toward illegibility. **A symbol-substitution codec smears toward plausibility**, which
is far more dangerous, because the product is a reading that construes.

## ⛔⛔ Consequence 3 — A CORRECTION. "TWO PRINTINGS" IS NOT ESTABLISHED FOR THIS WORK

This run reported, repeatedly and confidently, that archive/Gallica disagreements on 8963 are
**two printings, not two photographs**. That framing must be weakened.

Every 8963 site offered for it is a **single-symbol** difference — `quadripartitum`/`quadripertitum`,
`eum`/`cum`, a present/absent full stop after `CAPUT XXXI`, a present/absent `tam`. **JBIG2 symbol
substitution can produce every one of those.** They are therefore consistent with one printing
photographed twice, once through a lossy codec.

⚑ What DOES still establish two printings is the 8950 site the rule was built on: **0171D
`Mititte` / `Mittite`, a letter TRANSPOSITION.** Symbol substitution swaps a glyph for a similar
glyph; it does not reorder them. That one stands, and so does the corpus-level claim.

**So: two printings exist somewhere in PL 113. WHICH of 8963's divergences are press variants
and which are codec artifacts is UNDETERMINED, and this file does not pretend to sort them.**

## ✅ What is NOT weakened — and is in fact strengthened

1. **Our TEI's exemplar is the Gallica printing.** That finding is about which copy our text
   *matches*, and is untouched by why the other copy differs. Sixteen agreements, one
   disagreement.
2. **The four "Gallica has a non-word, the archive is clean" sites** (`si`/`sit` 0397C,
   `exnortantis` 0400A, `commmatio` 0403C, `vermanseris` 0403D) — plus `putenm` @0417A — are
   now BETTER explained, not worse. A codec that substitutes an odd glyph bitmap for the common
   one **would clean a non-word up**, which is precisely what the archive appears to have done.
   So the archive's cleanliness there is weak evidence, and the conclusion that our TEI carries
   Migne's own type stands.
3. ⭐ **The two-witness gate is vindicated by a MECHANISM, not merely by a tally.** 99 of 105
   archive-only candidates refuted on this work is no longer just an observed rate: it is what a
   lossy symbol-substitution codec is expected to produce. **The archive copy may never be the
   sole witness for a letter, a digit, or a mark of punctuation.** Not "is unreliable in
   practice" — cannot be, by construction.

## The operating rules this sets

- **Never patch, and never fire `[sic:]` or `[var:]`, on the archive copy alone.** Unchanged in
  substance; now unchallengeable in principle.
- **Do not call an archive/Gallica disagreement a "press variant" without a class of evidence
  substitution cannot produce** — a transposition, a whole clause, a difference in setting or
  layout. Otherwise say only: *the copies disagree, and our TEI follows Gallica.*
- **Do not ask for a higher-resolution render of PL 113.** There isn't one.
- ⚑ Gallica is 8-bit grey and therefore the better witness for a **letterform**, at half the
  resolution; the archive has the resolution and no greys and a substituting codec. **Neither
  dominates**, which is the real argument for reading both rather than picking one.
- ⚠ Both have a known under-resolution failure: Gallica's printed `3` reads as `5`, and its
  `illum` as `illam`, when a crop is upscaled past its native size.
