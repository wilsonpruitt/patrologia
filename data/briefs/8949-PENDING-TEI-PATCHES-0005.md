# 8949 *Liber Exodus* — pending TEI patches, chunks 0005–0009 (bands 0193C–0205C)

Sites where this stint opened the column at the plate and Migne's type differs from our Corpus
Corporum twin. Per the locked rule (`translation-style.md`, "What the English translates — THE
PLATE WHERE READ"), **the English already renders the plate**; this file records the divergence so
the Latin converges on it when the patch pass lands.

Do not edit `sources/pl/tei/8949.xml` or `data/tei-patches/8949.json` from here — the orchestrator
merges. Format: one entry per site; `find` must match exactly once in the source XML.

⭐ **All five sites below were candidate `[sic:]` markers against Migne, and all five are ours.**
Nothing in this stint's range turned out to be a defect in Migne's type. That is the 9003 result
repeating, and it is why the plate was read before any marker was fired.

---

## 0195A — `guam` in our twin, **`quam`** on the plate

- **Opened by:** stint 0005–0009, 2026-09-08
- **Plate:** Gallica `bpt6k5505319w`, leaf **f98**, printed corner numbers **195 / 196**, left
  column. Read at native resolution (gutter not crossed). Corroborated by the archive copy,
  `patrologiaecurs04migngoog` **p. 103** (corners 195/196 read first).
- **Our twin prints:** `multo amplius guam apud nos pendens`
- **The plate prints:** `multo amplius quam apud nos pendens`
- **Evidence:** `guam` is not a Latin word, and both witnesses set a clean `q` with its descender.
  The comparative construction (`amplius … quam`) requires it.
- **English as shipped** (`src/english/8949/0005.md`): "…weighing it far more highly than it is
  weighed among us…"
- **Proposed patch:** `find` `multo amplius guam apud nos` → `replace` `multo amplius quam apud nos`
- **Note:** one letter; no marker counts, chunk boundaries or `noteCount` affected.

---

## 0195A — stray point `apud. Deum` in our twin, **no point** on the plate

- **Opened by:** stint 0005–0009, 2026-09-08
- **Plate:** archive `patrologiaecurs04migngoog` **p. 103** (corners **195 / 196** read first), left
  column — **the decisive witness here.** Gallica f98 shows only a faint low speck between the two
  words, ambiguous at 6× between a stray sort and an ink flaw.
- **Our twin prints:** `quod erat in principio apud. Deum [n: (Joan. I)]`
- **The plate prints:** `quod erat in principio apud Deum (Joan. I)`
- **Evidence:** the archive impression is clean between `apud` and `Deum`. The phrase is John 1:2
  quoted straight, where no mark belongs, and Migne's other `apud Deum` twelve lines below on the
  same column (`apud Deum mutum se animal profitebitur`) carries none either.
- **English as shipped:** "…the true Word, which was in the beginning with God…" — no stray stop.
- **Proposed patch:** `find` `in principio apud. Deum` → `replace` `in principio apud Deum`
- **Note:** ⚑ this is the case that shows why one witness is not enough **in the direction of
  firing a marker as well as withdrawing one.** On Gallica alone, Pattern 8 ("never delete a mark
  the plate prints") would have put a stray full stop into the middle of an English sentence.

---

## 0198A — `reunquenqus` in our twin, **`relinquendus`** on the plate

- **Opened by:** stint 0005–0009, 2026-09-08
- **Plate:** archive `patrologiaecurs04migngoog` **p. 104** (corners **197 / 198** read first),
  right column, first text line — the decisive witness. Gallica leaf **f99** (printed corner numbers
  **197 / 198**) shows the same word in a **worn** impression whose `l`-ascender and `d` have
  failed, which is what our transcription appears to have read.
- **Our twin prints:** `ergo de Aegypto: reunquenqus est mundus, non loco, sed animo`
- **The plate prints:** `ergo de Aegypto : relinquendus est mundus, non loco, sed animo`
- **Evidence:** `reunquenqus` is not a word in any register; the archive copy prints `relinquendus`
  with every letter clear, the gerundive is required by `est mundus`, and Gallica's damaged
  impression has the right letter count for `relinquendus`.
- **English as shipped** (`src/english/8949/0007.md`): "We must go out therefore from Egypt: **the
  world must be left behind**, not in place but in mind, if we wish to serve the Lord."
- **Proposed patch:** `find` `reunquenqus est mundus` → `replace` `relinquendus est mundus`
- **Note:** this was the strongest-looking `[sic:]` in the stint's range from the twin alone.

---

## 0202D — `Vers. 9.` in our twin, **`VERS. 9.`** on the plate

- **Opened by:** stint 0005–0009, 2026-09-08
- **Plate:** Gallica `bpt6k5505319w`, leaf **f101**, printed corner numbers **201 / 202**, right
  column.
- **Our twin prints:** `Vers. 9.-- *Cum dixerit vobis Pharao,*`
- **The plate prints:** `VERS. 9. — Cum dixerit vobis Pharao,` — the same small caps as all 22
  other verse addresses in this range.
- **Evidence:** direct comparison on the same column with `VERS. 7, 8.` above it and
  `VERS. 10.` on the facing leaf; the letterforms are identical in height and weight.
- **English as shipped** (`src/english/8949/0009.md`): `VERS. 9.-- *When Pharao shall say to you,*`
- **Proposed patch:** `find` `Vers. 9.-- ` → `replace` `VERS. 9.-- `
- **Note:** ⚑ **case only, and worth the entry for a method reason.** This looked like a Pattern 9
  "section label" case, where the English normalizes and the Latin keeps the misprint. It is not:
  the misprint is *ours*, so normalizing in the English alone would have left the Latin wrong
  permanently. Contrast **0201C `VERS 20.`** (no period after VERS), which the plate DOES print and
  which must **not** be patched.

---

## 0204C — `vasa. et liberandas` in our twin, **`vasa, et liberandas`** on the plate

- **Opened by:** stint 0005–0009, 2026-09-08
- **Plate:** Gallica `bpt6k5505319w`, leaf **f102**, printed corner numbers **203 / 204**, right
  column, native-resolution crop enlarged 12× (inside one column; gutter not crossed).
  **Corroborated by** the archive copy **p. 107** (corners 203/204 read first), where it is
  unambiguous.
- **Our twin prints:** `et ita introeundum ad diripienda vasa. et liberandas animas`
- **The plate prints:** `et ita introeundum ad diripienda vasa, et liberandas animas`
- **Evidence:** the Gallica mark carries a descending tail; the true full stops on the same leaf
  (and the plate-confirmed `dicens .` at 0198D on f99) are round dots seated on the baseline with
  no tail. The archive copy prints a plain comma. Grammatically the two gerundives are a pair
  (`ad diripienda vasa, et liberandas animas`), so a full stop between them breaks one phrase.
- **English as shipped** (`src/english/8949/0009.md`): "…and so we must enter in to plunder the
  vessels, and to free the souls which he had possessed by deception and fraud."
- **Proposed patch:** `find` `ad diripienda vasa. et liberandas` → `replace` `ad diripienda vasa, et liberandas`
- **Note:** punctuation only; not one word of Migne moves.

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0198D `dicens:`** — ⛔ **the two witnesses disagree, and our twin stands.** Gallica f99 shows a
  single baseline point (`dicens . Ne longe abeatis`), which is the 8957 @0758A shape and would have
  been a sixth patch; the archive copy p. 104 prints a clear **colon**. *This same Gallica page is
  the one proved under-inked by the `relinquendus` entry above*, and a dropped upper dot is exactly
  that failure. **No patch.** Do not re-open from the Gallica image alone.
- **0201C `VERS 20.`** — the missing period after VERS is **Migne's**, plate-confirmed on f101 in the
  same small caps. Pattern 7 territory; **must not be patched.**
- **0201D `significat futuros`** with no terminal stop — Migne's, plate-confirmed. Not supplied,
  not patched.
- **0201D `ut quisque, de tribu sua uxorem acciperet`** — the stray comma is Migne's,
  plate-confirmed. Not patched.
- **0197D `[n: (Matth. VI)]`** — Gallica renders `Matih.`, a member of the attested Gallica
  worn-sort class (8956 precedent, where the archive refuted it). Our twin's `Matth.` stands.
  **No patch.**
- **`hom. 32` (0197C), `VERS. 27-31` (0197C), `hom. 3` (0197D, 0199A, 0200B)** — Migne's figure **3**
  renders like a **5** throughout this fount at scan resolution, systematically and on every leaf.
  A rendering artifact, not a reading. Our twin's digits stand. **No patch.**
- **0201C `pater excelsus`** — Gallica's italic `a` reads as `u`. Inking. **No patch.**
- **Guillemets** — my range contains **none** (0 `«`, 0 `»` across chunks 0005–0009), consistent
  with the book-wide statement in the lemma brief that Exodus prints exactly one, at 0192A.
  Nothing to patch, and nothing to supply.
