# 8961 — pending TEI patches, stint 0005–0009 (cols 0309A–0323D)

Filed under the locked rule *"What the English translates — THE PLATE WHERE READ"*
(`translation-style.md`). Both sites below were read at the plate; the English renders
Migne, and the Latin twin must converge on it when the patch pass runs.

Witnesses: **Gallica `ark:/12148/bpt6k5505319w`**, leaf `f = (column + 1) / 2` (calibrated
on f155 = 309/310 and f162 = 323/324 before either read); **archive.org
`patrologiaecurs04migngoog`**, PDF page `= (column + 11) / 2` (calibrated on p.164 = 317/318).

---

## 1. col 0315C — a dropped word: `salutare`

- **Our TEI (`src/latin/8961/0007.md`):** `Sacrificium jubetur fieri in oleo etc.`
- **The plate:** `Sacrificium **salutare** jubetur fieri in oleo etc.`
- **Witnesses:** confirmed on **both printings** — Gallica f158 left column and archive p.163
  left column, read independently. This is not a one-copy reading.
- **Why it matters:** the lemma under exposition is Lv 7:10, and Origen's distinction in this
  homily is between the *sacrificium salutare* (peace offering) and the other kinds; the
  dropped adjective is the one word that names which sacrifice is meant. Two paragraphs later
  the same work glosses *Sacrificium quod dicitur salutare* (0317B).
- **English as shipped:** "The saving sacrifice is commanded to be made in oil, etc."
- **Patch:** insert `salutare` after `Sacrificium`.

## 2. col 0320A — a Greek word altered: ὑπωρίς → ὑπωμίς

- **Our TEI (`src/latin/8961/0008.md`):** `quia ὑπωμίς poderis est`
- **The plate:** `quia **ὑπωρίς** poderis est`
- **Witness:** Gallica f160, right column, read at native resolution and again on a 3× crop of
  the single word. The fourth letter carries a **full descender below the baseline with the
  bowl to its right — a rho.** A mu in this fount sits on the baseline. Archive p.165 not
  consulted; it is the jbig2 copy and may never be the sole witness for a letter, and it is
  not needed, because the Gallica reading is unambiguous at 3×.
- **Why it matters:** ὑπωρίς is not a Greek word; the word the gloss wants is ἐπωμίς (the
  shoulder-piece), and *ὑπωμίς* looks like a transcriber's half-correction toward it. Our TEI
  therefore prints a form Migne did not set, which would make any future `[sic:]` on this word
  an accusation the plate cannot license.
- **English as shipped:** the Greek rides untranslated, in the plate's form — "because ὑπωρίς
  is the *poderis*."
- **Patch:** `ὑπωμίς` → `ὑπωρίς`. **Do NOT "correct" it to ἐπωμίς** — that is Migne's defect to
  keep, and a `[sic:]` becomes available on it once the twin carries what he printed.
