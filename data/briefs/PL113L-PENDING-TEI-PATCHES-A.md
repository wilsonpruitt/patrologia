# PL 113 leftovers, stint A (8975 *Ad lectorem*, 8973 Lyra *Prologus in moralitates*) — pending TEI patches

Sites where the plate differs from our Corpus Corporum twin. **The English already renders the
plate.** This file records each difference so the Latin can catch up when the patch pass lands.
Plates: Gallica `bpt6k5505319w` (f = (col+1)/2) and archive.org `patrologiaecurs04migngoog`
(PDF p. = (col+11)/2). Corner numbers were read first on every page cited. `find` strings must
match exactly once in the source XML; verify that before applying.

Foot-of-page notes: **none** on f6–f10 or f17–f18, in either layer (numbered or asterisk/letter).
Nothing to transcribe.

---

## 8975 @0016D — `petulantiz` → `petulantia`

- Gallica f8 (corners 15/16), right column, last line but one: the final sort is worn into a z-like
  shape. Archive p. 13 (corners 15/16) prints `petulantia.` cleanly.
- Twin: `docto homine indigna petulantiz. Sic enim`
- Proposed: `find` `indigna petulantiz.` → `replace` `indigna petulantia.`
- English as shipped (0001): "For that unseemly petulance, unworthy of a learned man, did not befit…"

## 8975 @0017C — `poena` → `poeta`

- Gallica f9 (corners 17/18), left column: `poeta` with a worn **t**. Archive p. 14 (corners 17/18):
  `poeta` clean. The two witnesses agree.
- Twin: `delectatus, poena etiam pro illo aevo non infelix`
- Proposed: `find` `delectatus, poena etiam` → `replace` `delectatus, poeta etiam`
- English (0001): "a poet, too, not unsuccessful for that age."

## 8975 @0018D — `clucidans` → `elucidans`

- Gallica f9, right column, band D: reads `clucidans` (a worn **e** with the bar gone). Archive p. 14:
  `elucidans` clean.
- Twin: `aperiens et clucidans`
- Proposed: `find` `aperiens et clucidans` → `replace` `aperiens et elucidans`
- ⚠ The witnesses split at the letter level. The Gallica sort is the worn one, the same class as the
  8956 worn sorts in CLAUDE.md. Adjudicate before applying if a third copy is available. English
  (0001): "elucidating", with no marker.

## 8975 @0019A — `nonnulis` → `nonnullis`

- Gallica f10 (corners 19/20), left column, line 2: `nonnullis`. Archive p. 15 (corners 19/20): `nonnullis`.
- Proposed: `find` `Nicolaum a nonnulis Anglum` → `replace` `Nicolaum a nonnullis Anglum`

## 8975 @0020A — stop after `consiliis` is not on the plate

- Gallica f10, right column, lines 2–3: `testatur in suis consiliis` / `Navarrus. Ideoque`. There is no
  mark after *consiliis*. Archive p. 15 is the same.
- Twin: `testatur in suis consiliis. Navarrus. Ideoque`
- Proposed: `find` `in suis consiliis. Navarrus.` → `replace` `in suis consiliis Navarrus.`
- English (0001): "as Navarrus testifies in his counsels."
- Punctuation only. No word moves.

## 8975 @0019A — the two distichs are lineated on the plate

- Both witnesses set each distich as two indented lines in smaller type, on lines of their own:
  `…inter caetera distichon :` / `Cui veteris perhumana dabat Brabantia Lirae` / `Cognomen, Lira nam
  fuit urbe satus.` / `Et clauditur hoc disticho epitaphium` / `Hierophanta Deo sedet hinc diademate
  fulgens,` / `Et Brabantiaco gloria digna solo.` / `In editione itidem…`
- Twin (our chunk): the first verse line of each distich is run onto the preceding prose line.
- Proposed: break the line before `Cui veteris` and before `Hierophanta` (markup/lineation only, per
  Pattern 8a). The English (0001) currently mirrors the twin's line structure. Once the patch lands,
  make the same two line breaks in the English.
- Not patched: after `epitaphium`, Gallica shows a mid-dot and the archive nothing. That is
  unresolved, so no mark is proposed.

## 8973 @0034D — `flios` → `filios`

- Gallica f17 (corners 33/34), right column: `filios`, with the **fi** worn but at full width. Archive
  p. 22 (corners 33/34): `filios` clean.
- Proposed: `find` `Abraham duos flios habuit` → `replace` `Abraham duos filios habuit`
- English (0000): "Abraham had two sons".

## 8973 @0033D — the mnemonic is lineated on the plate

- Both witnesses: `…nos in altum ducens ; unde versus :` / (indented, small type) `Littera gesta docet,
  quid credas allegoria,` / `Moralis quid agas, quo tendas anagogia,` / `exemplum in hoc nomine…`
- Twin: `unde versus: Littera gesta docet…` on one line.
- Proposed: break the line before `Littera gesta docet`. The English mirrors the twin until the patch lands.

---

## Examined at the plate and NOT patched (recorded so they are not re-opened)

- **8975 @0014B Greek `ἔσθλα καὶ ὕργα`**: agrees with the plate at 6×. The accent on καὶ is worn and
  cannot be called. Nothing to patch.
- **8975 @0017C Greek `κατ' ἕξοχὴν`**: acute and grave agree with the plate. The breathing is too worn
  to call, so no patch.
- **8975 @0018B `Utraque vera glossa`**: *vera* is Migne's (both witnesses). Pattern 7 territory; do not patch.
- **8975 @0017D `qui ipso Strabo`**: Migne's (both witnesses). Do not patch.
- **8975 @0020B `Francisco Luca Burgensi`** (for Brugensi): Migne's. Do not patch.
- **8975 @0015B `*Glossa ordinaria* )`**: the space is a transform artifact. Whitespace is not a mark.
- **8975 @0014A raised tick after `solebant`**: a speck. The twin's comma is right.
- **8973 @0034C `manum abscindendum`**: Migne's gender mismatch (Pattern 9). Do not patch.
