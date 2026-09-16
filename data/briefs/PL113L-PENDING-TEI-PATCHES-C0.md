# 8974 *Additiones* (Paul of Burgos), chunks 0000–0005 — pending TEI patches (stint C0)

Sites where this stint opened the column at the plate and Migne's type differs from our Corpus
Corporum twin. Per the locked rule, **the English already renders the plate**; this file records
each divergence so the Latin converges on it when the patch pass lands.

Format: one entry per site. Every `find` below was checked against `sources/pl/tei/8974.xml` on
2026-09-16 and matches **exactly once**. None moves a column anchor, a note, or a chunk boundary.

Plate: Gallica `bpt6k5505319w`, `f = (column + 1) / 2`, corner numbers read first on every leaf.
Second witness where named: archive `patrologiaecurs04migngoog`, PDF page `(column + 11) / 2`, 400 dpi.

---

## 0038A — `III Cor. III` → `II Cor. III`
- **Plate:** f19, corners 37 / 38, right column, line 2: *Nam secundum Apostolum II Cor.* III.
- **find** `secundum Apostolum III Cor` → **replace** `secundum Apostolum II Cor`
- **English** (0001): "For according to the Apostle, II Cor. III". The twin's `III Cor.` would cite a non-existent epistle; this is transcription, not Migne. The same verse is cited `(II Cor. III)` at 0047B.

## 0038A — `viviticat` → `vivificat`
- **Plate:** f19, col 38, line 3: *spiritus autem vivificat.* »
- **find** `spiritus autem viviticat` → **replace** `spiritus autem vivificat`

## 0038C — `reperfuntur` → `reperiuntur`
- **Plate:** f19, col 38, band C: *in sensu spirituali non reperiuntur: ergo*
- **find** `non reperfuntur` → **replace** `non reperiuntur`

## 0038D — `toris` → `foris`
- **Plate:** f19, col 38, band D: *librum scriptum intus et foris;* »
- **find** `intus et toris` → **replace** `intus et foris`

## 0038D — `diguitatis` → `dignitatis`
- **Plate:** f19, col 38, band D: *sit minoris di-|gnitatis respectu*
- **find** `minoris diguitatis` → **replace** `minoris dignitatis`

## 0040A — `aliquisita` → `aliquis ita`
- **Plate:** f20, corners 39 / 40, right column: *nulli expositioni aliquis ita praecise inhaereat*. Gallica sets a narrow space between *aliquis* and *ita*, the same width as the space in *praecise inhaereat* on the same tight line; the archive copy (p. 25) sets the two words clearly apart.
- **find** `aliquisita praecise` → **replace** `aliquis ita praecise`
- **English** (0001): "let no one so precisely cling to an exposition".

## 0040D — `praecipius` → `praecipuis`
- **Plate:** f20, col 40, band D: *quae una de praecipuis partibus*
- **find** `una de praecipius partibus` → **replace** `una de praecipuis partibus`

## 0043D — `pluralitus` → `pluralitas`
- **Plate:** f22, corners 43 / 44, left column, band D. Gallica has a broken sort between *t* and *s* (unreadable alone; its remains fit *a*). Archive p. 27 prints *pluralitas* cleanly.
- **find** `ubi pluralitus sensuum` → **replace** `ubi pluralitas sensuum`

## 0045A — `dignitati` → `dignitate`
- **Plate:** f23, corners 45 / 46, left column: *uno modo ex dignitate materiae;*
- **find** `ex dignitati materiae` → **replace** `ex dignitate materiae`

## 0046C — `sufficientur` → `sufficienter`
- **Plate:** f23, col 46, band C: *non videtur fuisse sufficienter erudi-|tus*
- **find** `fuisse sufficientur eruditus` → **replace** `fuisse sufficienter eruditus`

## 0049A — dropped word: `ad aliqua probanda` → `ad aliqua alia probanda`
- **Plate:** f25, corners 49 / 50, left column, line 7: *proceditur ad aliqua alia probanda : sicut*
- **find** `proceditur ad aliqua probanda` → **replace** `proceditur ad aliqua alia probanda`
- **English** (0005): "one proceeds to proving some other things". ⚠ This one adds a word, so the chunk's `words` count rises by one on re-chunking.

## 0049C — misplaced comma: `in aliquo, loco sic ut` → `in aliquo loco, sic ut`
- **Plate:** f25, col 49, band C: *deficiat in aliquo loco, sic ut vel falsum includat*
- **find** `deficiat in aliquo, loco sic` → **replace** `deficiat in aliquo loco, sic`
- Punctuation only.

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0035B–0037D (f18, f19 col 37):** collated word by word, no divergence. The rubric's missing stop after *MCCCCXXIX* is Migne's. `praeelegisse` (0037A) is on the plate. `a caliginosa turbine` is on the plate.
- **0039B `posset summi efficax argumentum`:** Gallica prints *summi*, archive prints *sumi*, both clean. A press variant between two copies, not a transcription error: our twin matches Gallica. **No patch.** Crux only.
- **0045B `a certitudine sensu litteralis`:** *sensu* on both Gallica and archive. Migne's type, not ours. **Must not be patched.** English carries `[sic: *sensu*]`.
- **0042C `impassibiles`**, **0048C `potentior`**, **0049D `Isa. XVIII`**, **0038C `Descendit Deus`**, **0043A `Est Deus mortuorum vel vivorum`** (no *non*), **0042A II Esdr. VIII wording**: all on the plate as the twin has them. Migne's text. **Never patch.**
- **0038A `digniores: tenet` / 0039D `essent falsa: ut`:** Gallica shows what looks like a single low dot followed by lower case. At 0039D the archive p. 25 was not decisive. A worn colon is the likelier reading, and a stop before lower case would be odd. **Not patched.**
- **0037D heading `SEQUITUR ADDITIO SUPER UTRUMQUE PROLOGUM.`:** roman small capitals on the plate, italic in the twin. Markup, not words. **Not patched.**
- **Hebrew:** no Hebrew type stands anywhere in cols 35–50A. No gap for Hebrew in our Latin. Nothing to transcribe.
- **Foot of col 49 (f25):** lettered note *(a) Id est in eadem arbore nascentem in qua ramusculus.*, keyed at 0050B. Already recovered as `[cn: a | …]` in chunk 0006. Not this stint's range, and nothing to add.
