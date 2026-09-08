# 8949 *Liber Exodus* — pending TEI patches, stint 0025–0029 (cols 0249C–0262B)

Sites where this stint opened the column at the plate and Migne's type or structure differs from
our Corpus Corporum twin. Per the locked rule (`translation-style.md`, "What the English
translates"), the English renders the plate; this file records the divergence so the Latin
converges on it when the patch pass lands. Do not edit `sources/pl/tei/8949.xml` or
`data/tei-patches/8949.json` from here — the orchestrator merges.

Plate: Gallica `bpt6k5505319w`, leaf **f = ceil(column / 2)**, confirmed against the printed
corner numbers on all seven leaves of this range (f125 249/250 … f131 261/262, no quire drift).
Full pages fetched at `/full/full/` and cropped locally; no crop crossed the centre gutter.

**Three items, and the first is not a patch but a recovery task an order of magnitude larger
than the other two.**

---

## ⭐⭐ 0256C — MIGNE HAS A FOOT-OF-PAGE NOTE LAYER IN THIS BOOK AND WE CARRY NONE OF IT

- **Opened by:** stint 0025–0029, 2026-09-08
- **Plate:** leaf **f128**, printed corners **255 / 256**, right column band C **and the whole
  width of the page-foot**; the note continues onto the foot of **f129** (corners **257 / 258**).
- **What the plate has and we do not.** At 0256C Migne closes the Isidore gloss on the unhewn
  stones with a **raised letter key**:

      … omnes unum altare faciunt in unitate fidei et concordia charitatis ª.

  and sets, across the full width of the foot of f128 and continuing across the foot of f129, a
  long editorial note in small type on **the division of the Decalogue** — Augustine's
  enumeration, the scholastic doctors who follow it, and Origen's conjoining of the two
  prohibitions of concupiscence. Legible fragments, read at 2.2×–2.4×:

      … vi Epistolæ ad Ephesios. Augustini autem enumerationem eo sensu sequuntur doctores
      scholastici, quo ipsemet Augustinus, ita scilicet eam priori præferentes, ut tamen priorem
      non reputent incongruam. Et revera repugnantia quam invenit pravus affectus …
      … Rursus illas duas concupiscentiæ duplicis prohibitiones in unum præceptum conjicit
      Origenes, propter consequentiam contextus, qua videntur ad unam pertinere sententiam …
      … non enim ponitur aliquod præceptum ab Augustino quod negatur ab Origene, aut vice versa;
      sed unus præcepta ratione cujusdam subordinationis conjungit, quæ alter ratione verbalis
      connexionis separat, et e converso …
      … aliam tamen diversam judicat aptiorem, ut prohibitionem de idolis ac simulacris
      adorationis causa faciendis, existimet esse primi præcepti explicationem …
      … Non concupisces domum proximi tui, nec desiderabis uxorem ejus, neque, etc. Augustinus
      autem eas in duo præcepta divisit, quia, ut dixi, præceptum de uxore non concupiscenda non
      subordinatur divitiis non concupiscendis … (f129 foot) … proinde diversis legibus
      prohibeantur. Quare tota hæc diversitas in re ipsa consentit: sive enim una lege, sive
      duabus distinctis prohibeantur aliqua, idem est modo fatearis iisdem verbis esse eadem
      prohibita, licet ambigas faciant ne verba illa unam an duas leges.

  ⚠ **That transcription is a reading sample, not an edition.** It is set in the smallest type on
  the page and I have not read every word of it; it must be re-read properly by the recovery pass.
- **Our twin prints:** `…omnes unum altare faciunt in unitate fidei et concordia charitatis.` —
  no raised key, no note, nothing.
- **Class:** Pattern 19, the **letter-keyed** layer (the 8950 *Liber Genesis* shape). It is
  **prose, not a reading**, so under the 2026-08-24 ruling it takes a Latin `[cn: a | …]` **and a
  translated `[nt: …]` at the same point in the English**.
- ⛔ **Why this is filed and not done.** `CLAUDE.md` puts foot-note recovery at **chunking, per
  volume**, never inside a translation stint, and "never guess a conjecture" applies with more
  force to a 300-word note than to a one-word one. Nothing has been invented in the English:
  Migne's raised key is not carried into the English in any case (the 9005/8996 precedent), so
  `src/english/8949/0027.md` is correct as shipped and stays correct after recovery.
- ⛔⛔ **AND IT OVERTURNS AN INHERITED ZERO.** `CLAUDE.md` records PL 113's "no foot-of-page
  apparatus" finding as resting on **19 pages across four books**, with the standing warning
  *"never inherit a sibling book's zero."* This is the case that warning was written for: **8949
  has the layer.** Whatever `data/plate-notes/coverage.json` says for this work, it should not say
  a checked zero. Six of the seven leaves I read carry nothing at the foot, so the layer is
  **sparse, not absent** — which is exactly the distribution a spot check misses.
- **Owed:** a `[cn:]` recovery pass over PL 113 for this work at re-chunking, and a correction to
  this work's coverage record. **Not a patch entry; there is no `find`/`replace` for it.**

---

## 0255B — `(AUG., ubi supra, )` in our twin, **`(AUG., ubi supra.)`** on the plate

- **Opened by:** stint 0025–0029, 2026-09-08
- **Plate:** leaf **f128**, printed corners **255 / 256**, left column, band B.
- **Our twin prints:** `VERS. 16, 17.-- *Non loqueris contra proximum,* etc. [n: (AUG., ubi supra, )] In eo etiam quod dictum est, etc.,`
- **The plate prints:** `VERS. 16, 17. — *Non loqueris contra proximum*, etc. (AUG., *ubi supra*.) In eo etiam quod dictum est, etc.,`
  — a **full stop** closing the parenthetical, in the ordinary form of every other siglum on the
  page (`(AUG., quaest. 71 in Exod.)`, `(AUG., quaest. 72 in Exod.)`, `(AUG., quaest. 73.)`).
  There is no comma and no space before the bracket.
- **Class:** ours. A trailing `, )` inside a note is not a shape Migne sets anywhere on these seven
  leaves; it is the digitization dropping the stop and keeping the comma that precedes *ubi supra*
  in some sibling notes.
- **English as shipped** (`src/english/8949/0026.md`): the `[n:]` rides **verbatim as our twin has
  it**, `[n: (AUG., ubi supra, )]`, because `[n:]` contents are content-checked against the Latin
  twin and changing one side alone breaks that check. The patch converts both sides together.
- **Proposed patch:** `find` `(AUG., ubi supra, )` → `replace` `(AUG., ubi supra.)`
- **Note:** `noteCount` (24 in chunk 0026), marker order and chunk boundaries are all unaffected.

---

## 0262A–B — the attribution is a NOTE on the plate, a bare italic span in our twin

- **Opened by:** stint 0025–0029, 2026-09-08
- **Plate:** leaf **f131**, printed corners **261 / 262**, right column, bands A–B.
- **Our twin prints:** `VERS. 28.-- *Diis non detrahes,* etc. *(AUG., quaest, [0262B] 86 in Exod.)* Quaeritur quos dixerit deos, etc., *usque ad* vel latriae obsequiis honorari.`
- **The plate prints:** `VERS. 28. — *Diis non detrahes* , etc. (AUG., *quæst,* 86 *in Exod.*) Quæritur quos dixerit deos, etc., *usque ad* vel latriæ obsequiis honorari.`
- **Two things are going on and only one of them is ours:**
  1. ⛔ **The comma after `quæst` is MIGNE'S** — plate-confirmed, against `(AUG., loc. 99.)` and
     `(GREG., lib. xvi Moral., cap. 2.)` printing correctly six lines above on the same column.
     **Do not patch it.** Same class as the 0010–0014 stint's `(ORIG.) hom. 4 in Exod.)`.
  2. **What is ours is the markup.** Every other siglum in this chunk is a `[n: …]`; this one alone
     the TEI left as a bare italic span in the running text, which is why it appears in the lemma
     inventory as a marked span and why `noteCount` for chunk 0029 is 11 rather than 12.
- **English as shipped** (`src/english/8949/0029.md`): the italic run is carried **verbatim and
  untranslated**, anchor in place — `*(AUG., quaest, [0262B] 86 in Exod.)*` — so that italic-span
  structure and anchor order match the twin 1:1. When the markup patch lands, both sides convert
  to `[n: (AUG., quaest, 86 in Exod.)]` together and `noteCount` rises to 12.
- **Proposed patch:** structural, not textual — re-tag the parenthetical as a `<note>` in the XML,
  keeping Migne's comma. **The column anchor `[0262B]` falls INSIDE the parenthetical and must
  stay inside it.**

---

## Recorded, NOT patched — Migne's own, all plate-confirmed

Listed so that no later pass re-opens them from the Latin alone. Every one of these reads as a
digitization failure and is not.

| col | our twin, and the plate | verdict |
|---|---|---|
| 0254A | `in futurum. unde Matth. VIII):` — a full stop, a **lowercase** *unde*, and an **unmatched closing parenthesis** | all three are **Migne's** (f127) |
| 0257A | `VERS. 1. 6.--` — a period between the two verse numerals | **Migne's** (f129) |
| 0260A | `[n: (Psl. III)]` — with `(Psal. LVII)` two lines below | **Migne's** (f130) |
| 0261C | the Ex 22:18 gloss ends `moriatur` with **no terminal stop** | **Migne's** (f131) |
| 0249D | `qui eduxi te terra Aegypti` — no `de`, against `de terra` at 0250A | **Migne's** (f125) |
| 0249D | `domus liberalitatis` beside three `domus libertatis` | **Migne's** (f125) |

---

## ⚠ Two open observations — a second witness is needed, and neither was acted on

- **0260C — `crudiet` or `erudiet`.** At 6× native the Gallica plate reads
  `Cor hominis **crudiet** os ejus` with no *e* before the *r*; the archive.org OCR text layer and
  our TEI both read `erudiet`. An *e* losing its crossbar to read as *c* is the classic ink-loss
  shape, the archive copy is 1-bit JBIG2 symbol-substitution and **may never be a sole witness for
  a letter**, and a `[sic:]` is a public accusation against Migne. **No marker, no patch**; the
  English renders `erudiet` ("shall instruct"). Settle it from the second physical copy, not from
  a second look at the same photograph. (Same disposition as the 0010–0014 stint's Greek at 0219B.)
- **0250C — `VERS 3.` without the period after VERS.** Our twin prints `VERS. 3.--`. The plate
  shows no point, but it is a single fine mark on a book that is demonstrably under-inked in
  places, and the 0005–0009 stint's standing warning is that a page under-inked at one site is
  suspect at every site on it. The neighbouring heads on f128 (`VERS. 14.`, `VERS. 15.`) all print
  the period clearly, so the *class* is not systematic. ⚑ Note the asymmetry the 0005–0009 stint
  established: `VERS 20.` at 0201C, missing its period, is **Migne's** and must never be patched —
  so if this one is confirmed, the correct patch runs the OTHER way, removing our period, not
  adding his. **Not acted on in either direction.**
