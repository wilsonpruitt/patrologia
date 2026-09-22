# Cruces — 9198 (Usuardus Sangermanensis, Martyrologium, part 1: prologues + January–April)

**Governed by `translation-style.md` Pattern 7 and the Martyrologies rules M0–M2.** The English
renders what Migne prints (PL 123, cols 599A–987): Sollerius's edition, with Bouillart's 1718
readings inline in square brackets. Sollerius's commentary on each day is out of scope (M0).
Bouillart's keyed notes were recovered at the plate: every page was read, and 39 of 40 are placed.
0769's key was found by no reader, so that note is recorded in `data/plate-notes/9198.tsv` and not
placed. Stint working files: `cruces-0000.md` (stint A) and `cruces-0004.md` (stint B).

## Merge, chunks 0000–0006 (2026-09-22)
- **Plate patches:** 43 in `data/tei-patches/9198.json`: two banners, *AUGUSTI.*, and 40 from the stints.
- **Deferred `[sic:]` fired once the patches landed:** *idorum* (0601), *Serapionis* (0793),
  *terterreno* (0929), *pratem* (0951). With the stints' own `[sic:]` *dixerit* (0987), that makes
  five. All are compositor errors (a dropped syllable, a doubled syllable, a transposed pair, a
  case ending, a transposition), not worn sorts.
- **`[cj:]`** on the second prologue's head: *AUGUSTI*, read *AUGUSTINI*.
- **Note garble check** (`data/briefs/USUARDUS-NOTE-GARBLE-VERDICTS.md`). Every odd form in the notes
  was settled at the plate: Migne's print is kept, our slips are corrected.
- **Blind read** (R1, R2; `data/briefs/USUARDUS-BLIND-READ-R{1,2}.md`). Applied:
  - 0707 note: *celebraret* has *Ecclesia* as its subject → "what feasts the Church would celebrate".
  - 0987: *consecratum* agrees with *quem* (Euprobus), not Clement.
  - 0941: *cum aliis pluribus* → "with many others", not "very many".
  - 0905: *Hirenis* → Hirene, matching 9215 (5 May).
