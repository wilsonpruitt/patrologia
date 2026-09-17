# 9176 Eriugena, *Commentarius in Evangelium secundum Joannem*: pending TEI patches (stint 0013–0014, cols 0340A–0348B)

Sites where this translator read the column at the plate and the type differs from our Corpus
Corporum twin. The English already renders the plate at both. Do not edit
`sources/pl/tei/9176.xml` or `data/tei-patches/9176.json` from here; the orchestrator merges.

Every `find` below was checked and matches **exactly once** in `sources/pl/tei/9176.xml`.

Opened by: stint 0013–0014, 2026-09-16. Working plate: archive.org
`patrologiaecurs113unkngoog/page/n<leaf>.jpg`, leaves n206–n210, corners read first
(n206=339/[340 clipped], n207=341/342, n208=343/[344 clipped], n209=345/346, n210=347/[348 clipped]).
Second witness: Princeton `YkVOAAAAYAAJ` PA339, PA343, PA345, PA347 (corners read on each).

**E11 check:** at both sites the plate is the reading that construes and the twin's is a
non-word, so both patches run toward the plate. None withdrawn.

---

## 0347A: our twin reads `accipiam]us`, the plate reads `accipiamus` — PROPOSED

- **find:** `exemplum accipiam]us` → **replace:** `exemplum accipiamus`
- **Plate:** archive n210, LEFT column, band A, line *et inde exemplum accipiamus, corpus et sanguis*;
  the word is set whole, no bracket.
- **Second witness:** Princeton PA347, same line: `accipiamus`.
- **Why:** a stray `]` inside the word in the twin; no bracket opens anywhere near it. Markup/OCR
  artifact, not Migne.

## 0348B: our twin reads `una ea lemque`, the plate reads `una eademque` — PROPOSED

- **find:** `una ea lemque evangelistae` → **replace:** `una eademque evangelistae`
- **Plate:** archive n210, RIGHT column, band B, line *luti quidam duo pisces, una eademque evan[gelistae]*
  (line-end clipped on archive).
- **Second witness:** Princeton PA347, same line in full: `una eademque evangelistae`.
- **Why:** `ea lemque` is not Latin; *una eademque … theologia* is the only construction the sentence
  has. Word-level, two copies agree.
