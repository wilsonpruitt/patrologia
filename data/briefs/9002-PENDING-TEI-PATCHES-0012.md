# 9002 — pending TEI patches, stint 0012–0015 (cols 0096C–0107B)

Sites where the plate was read and **our Corpus Corporum Latin diverges from what Migne printed**.
Per `translation-style.md` §"What the English translates — THE PLATE WHERE READ", the English in
these chunks renders **the plate**; the Latin twin must converge on it when the patch pass lands.

Both entries were read on **BOTH witnesses** (archive `patrologiaecurs06saingoog.pdf`,
PDF page = (col+11)/2, pp. 53–59; Gallica `ark:/12148/bpt6k54939667`, f = (col+1)/2, ff. 48–54),
corner numbers first. Per-page ledger: `data/briefs/9002-PLATE-READS-0012.json`.

⛔ **No `[sic:]` is fireable at either site**, and that is the point: the marker must quote a word
still present in our Latin, and it would accuse Migne of the digitization's error.

**Two patches (one certain, one proposed) out of sixteen candidates.** The other fourteen were
archive-copy over-inking and are listed under "NOT patches" below so that nobody files them later.

---

## 1. @0105C — `eleborata` for `elaborata`, a non-word in our file · **CERTAIN**

| | |
|---|---|
| **our TEI** | `dum timet ne aut possessa dispereant aut eleborata non contingant` |
| **plate** | `dum timet ne aut possessa dispereant aut elaborata non contingant` |
| **witnesses** | archive p.58 **and** Gallica f53 — Gallica sets it line-broken as `ela-borata`; the archive sets it whole. Both read `a` in the second syllable. |
| **class** | Corpus Corporum corruption (`a` → `e`) |
| **marker after patch** | none. Nothing is defective on the plate. |

Chunk 0014. The English renders the plate: *"lest either the things possessed perish or the
things laboured for do not come to hand."* Corpus control, recorded because it agrees with the
plate rather than deciding it: `eleborata` occurs **once** in `src/latin/` (this site);
`elaborata` occurs twice.

---

## 2. @0097D — `fiili` for `filii` inside a verse-lemma · **PROPOSED, NOT CERTAIN — read it again before applying**

| | |
|---|---|
| **our TEI** | `unde sequitur: *Ut sitis fiili.* Adoptio filiorum sola charitate acquiritur.` |
| **plate** | `unde sequitur : Ut sitis filii. Adoptio filiorum sola charitate acquiritur.` |
| **witnesses** | archive p.54, rendered at **600 dpi** for this word: after the `f` the **tall `l` stands in third position** (`f-i-l-i-i`), which is `filii`; `fiili` would put the tall stroke second. Gallica f49 at native resolution is coarser here and reads `fili`/`filii` — **but on neither copy does the tall stroke stand second, which is what our twin's form requires.** |
| **class** | Corpus Corporum corruption (i/l transposition), the same shape as 8970 @0725C `Nephtlali` |
| **marker after patch** | none. Nothing is defective on the plate. |

Chunk 0012. The English renders *filii*: **"That you may be sons."** — which the gloss's own next
sentence (*Adoptio **filiorum** sola charitate acquiritur*) and Mt 5:45 (*ut sitis filii Patris
vestri*) both require.

⚑ **Why it is filed as PROPOSED and not CERTAIN.** Gallica's resolution at this word is at the
limit of what the letterforms can bear, and I would rather a patch to the Latin column rest on
two clean reads than on one clean read plus one that merely fails to contradict it. What is
certain is the negative: **neither witness shows `fiili`.**

⚑ **The corpus control, which points the same way and is not by itself sufficient.** The
`fii`-for-`fil` shape occurs elsewhere in our Latin at **11062 @0427D** — `fiilialem` for
*filialem*, in a four-item list whose fourth item prints *Filialis* correctly two sentences
later. That is a digitization habit, not a PL 114 compositor's. ⛔ But the same argument, run on
`nomo` @0097A (three occurrences in `src/latin/`, two of them corruptions), would have produced a
patch that **both plates refute** — so it is offered as corroboration only.

---

## NOT patches — the fourteen archive-copy readings that Gallica refuted

Recorded so that a later reader of the archive copy does not file them. In every case **our TEI
already agrees with Gallica**; the archive's reading is over-inking, tight setting or a lost
tittle on that press run.

| col | archive copy | Gallica **and our TEI** |
|---|---|---|
| 0096D | `(Math. XI)` | `(Matth. XI)` |
| 0096D | `(Psal VII)` | `(Psal. VII)` |
| 0097A | `victor existas` | `victor exsistas` |
| 0097B | `Da ei,` | `Da ei.` |
| 0098A | `cum et si peccasse` | `cum etsi peccasse` |
| 0100C | `qui fiilius est` | `qui filius est` |
| 0101B | `jure possimus` | `jure poscimus` |
| 0102A | `Quia christus` | `Quia Christus` |
| 0103C | a raised `*` after `abstinentiae` | a plain `:` and no asterisk |
| 0104A | `VERS. 20.` | `VERS 20.` |
| 0105A | `Quiquid facis` (×2) | `Quidquid facis` (×2) |
| 0105D | `Animalitas cibe alitur` · `invenient eam` | `cibo alitur` · `inveniet eam` |
| 0106A | `Et pater vester` | `Et Pater vester` |
| 0106D | `haec invia sua` | `haec in via sua` |
| 0107A | `quae mentem pertubant` | `quae mentem perturbant` |

---

## AND ONE THAT IS NEITHER A PATCH NOR A MARKER — @0099B, the handed-over lead

The archive copy prints **`coram homnibus`** in the Mt 6:1 citation and Gallica prints
**`coram hominibus`**; our TEI has `hominibus`. Two lines above, on the same two lines, the
archive sets `haec sententia, supra dixerat` (comma, lower-case *s*) and Gallica sets
`haec sententia. Supra dixerat` (full stop, capital *S*) — **a difference no ink can produce.**

**These are two printings of PL 114, not two photographs of one**, and our text follows the
Gallica printing. There is nothing to patch (our Latin is right) and nothing to mark (a `[sic:]`
needs two witnesses and has one). Same class as 8950's `Mititte`/`Mittite` and PL 114's own
@0073A `Bethehem`/`Bethlehem`. Recorded in `src/english/9002/cruces-0012.md` §2.
