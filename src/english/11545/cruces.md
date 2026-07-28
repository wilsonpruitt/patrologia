# Cruces — 11545, *De superexcellenti baptismo Christi* (PL 196, 1013A–1018B)

Created 2026-07-28 by the PL 196 polarity sweep. This work had no cruces file
before: it was translated in an earlier batch and nothing was logged for it.

## Attribution — part of the TEXT, not the badge

Only the **prologue** is Richard of St Victor's; the **body is Walter of St
Victor's**, and Migne's byline says Richard. Unlike a landing-page badge, a byline
naming the wrong author is part of the edition. Carried forward from the
2026-07-28 badge audit; not yet fixed.

## 1014B — `veritatem` for `unitatem` in the Ephesians lemma (HIGH confidence)

Migne prints the lemma of Eph. 4:3 as:

> *Solliciti estote servare **veritatem** spiritus in vinculo pacis* [n: (Ephes. IV)]

Eph. 4:3 reads *unitatem spiritus*, and the plate contradicts itself on both sides
of the lemma:

- **Immediately before**, introducing the quotation: *Ad cujus corporis
  **unitatem** nos invitat Apostolus, dicens:*
- **Immediately after**, glossing the quoted word six times: *__Unitatem__ vocat
  spiritus, illam **unitatem** quam facit spiritus in corpore Christi, quod est
  Ecclesia, cujus **unitatis** vinculum est pax ad quam **unitatem** nos invitat*
  … *Ideo **unitatem** spiritus servare debemus.*

So the commentary glosses a word its own lemma does not contain. This is the same
failure mode as `vanitatem` for `unitatem` at 11063/0376D and the wider PL 196
sense-inversion class (see the sweep report at
`data/sweeps/pl196-polarity/REPORT.md`).

**Rendered literally per Pattern 7** — the English reads "keep **the truth** of
the spirit in the bond of peace," and then "He calls **the unity** 'of the
spirit'…". The incoherence is Migne's and is reproduced, not repaired. **This one
reads as our error more than most**, because the gloss immediately supplies the
right word in English: a reader sees "truth" quoted and "unity" expounded, with
nothing to tell them which is the plate's.

Not corrected in the text. No `citation-corrections.json` entry: the reference
(*Ephes. IV*) is correct and resolves correctly — it is the quoted WORDS that are
defective, which that mechanism does not cover.
