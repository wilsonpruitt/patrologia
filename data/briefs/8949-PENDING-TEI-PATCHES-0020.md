# 8949 *Liber Exodus* — pending TEI patches, chunks 0020–0024 (bands 0234D–0249C)

Sites where this stint opened the column at the plate and Migne's type differs from our Corpus
Corporum twin. Per the locked rule (`translation-style.md`, "What the English translates — THE
PLATE WHERE READ"), **the English already renders the plate**; this file records the divergence so
the Latin converges on it when the patch pass lands.

Do not edit `sources/pl/tei/8949.xml` or `data/tei-patches/8949.json` from here — the orchestrator
merges. Format: one entry per site; `find` must match exactly once in the source XML.

⭐ **Six sites, and all six are OURS.** Every one began as a candidate `[sic:]` against Migne and
every one was withdrawn at the plate. Three further candidates were refused a patch in the other
direction (§ "Refused", below) — two because the two copies split on a comma tail, one because the
two copies are a genuine press variant.

---

## 0237C — `ut surpra` in our twin, **`ut supra`** on the plate

- **Opened by:** stint 0020–0024, 2026-09-08
- **Plate:** Gallica `bpt6k5505319w`, leaf **f119**, printed corner numbers **237 / 238**, left
  column. Read at native resolution; gutter not crossed.
- **Our twin prints:** `[n: (ORIG., ut surpra. )]`
- **The plate prints:** `(ORIG., ut supra.)`
- **Evidence:** `surpra` is not a Latin word. The plate sets a clean italic *supra*, and the same
  work prints *ubi supra* correctly at 0238C, 0241B, 0242D and 0244D.
- **English as shipped** (`src/english/8949/0020.md`): the note rides verbatim as the twin has it,
  because `[n: …]` contents are checked against the Latin twin as a substring; the correction
  belongs on the Latin side, in this patch.
- **Proposed patch:** `find` `ORIG., ut surpra.` → `replace` `ORIG., ut supra.`
- **Note:** note content only; no marker counts, chunk boundaries or `noteCount` affected.

---

## 0238A — `languores tues omnes` in our twin, **`languores tuos omnes`** on the plate

- **Opened by:** stint 0020–0024, 2026-09-08
- **Plate:** Gallica **f119**, corners **237 / 238**, right column, read at 9×. Corroborated by the
  archive copy's OCR text layer (`patrologiaecurs04migngoog_djvu.txt`), which prints
  `Dominus sanat languores tuos`.
- **Our twin prints:** `Dominus sanat languores tues omnes [n: (Matth. IV)]`
- **The plate prints:** `Dominus sanat languores tuos omnes (Matth. IV)`
- **Evidence:** `tues` is not a Latin word in this construction; at 9× the vowel is a closed round
  **o**, not the open **e** the same fount sets elsewhere on the line, and the second witness agrees.
- **English as shipped** (`src/english/8949/0020.md`): "*The Lord healeth all thy diseases*".
- **Proposed patch:** `find` `languores tues omnes` → `replace` `languores tuos omnes`
- **Note:** one letter inside an italic scripture span; span count unaffected.

---

## 0241A — `postia` in our twin, **`posita`** on the plate

- **Opened by:** stint 0020–0024, 2026-09-08
- **Plate:** Gallica **f121**, corners **241 / 242**, left column, first line.
- **Our twin prints:** `qui describuntur in Numeris circa tabernaculum Domini postia`
- **The plate prints:** `qui describuntur in Numeris circa tabernaculum Domini posita`
- **Evidence:** `postia` is not a Latin word; the plate's letters are unambiguous, and *posita*
  is what the participle requires with *castris … quae describuntur*.
- **English as shipped** (`src/english/8949/0022.md`): "…which are described in the book of Numbers
  as placed round about the tabernacle of the Lord."
- **Proposed patch:** `find` `tabernaculum Domini postia` → `replace` `tabernaculum Domini posita`

---

## 0242A — `petrum ex qua` in our twin, **`petram ex qua`** on the plate

- **Opened by:** stint 0020–0024, 2026-09-08
- **Plate:** Gallica **f121**, corners **241 / 242**, right column, first line, read at 8×.
- **Our twin prints:** `ideo jubet Deus ut ostendat eis petrum ex qua bibant`
- **The plate prints:** `ideo jubet Deus ut ostendat eis petram ex qua bibant`
- **Evidence:** at 8× the final letter is an unmistakable **a**. The relative *ex qua* is feminine
  and requires it, and the parallel sentence eleven lines above at 0241C prints *ostendat eis
  petram* — as does the same clause repeated at 0242A itself, *ostendit ei Moyses petram*.
- **English as shipped** (`src/english/8949/0022.md`): "…therefore God commands that he show them
  the rock whereof they may drink."
- **Proposed patch:** `find` `ostendat eis petrum ex qua` → `replace` `ostendat eis petram ex qua`
- **Note:** ⚑ this one would have read as a gender defect of Migne's under Pattern 9 and been
  declined on the wrong ground. It is not his at all.

---

## 0244C — `VERS. 12-25.` in our twin, **`VERS. 12-15.`** on the plate

- **Opened by:** stint 0020–0024, 2026-09-08
- **Plate:** Gallica **f122**, corners **243 / 244**, right column, read at 8×. Corroborated by the
  archive OCR text layer, which prints `Vkrs. 12-15. — Obtulit ergo Jethro`.
- **Our twin prints:** `VERS. 12-25.-- *Obtulit ergo Jethro,* etc.`
- **The plate prints:** `VERS. 12-15. — *Obtulit ergo Jethro*, etc.`
- **Evidence:** three independent checks agree. (a) At 8× the second number's digits are 1 and a
  3/5-form, never a 2. (b) The archive layer, which distinguishes the two figures on this very leaf
  (it prints `Vers. 12, 13` for *Sumentes igitur lapidem* at 0243D where the Gallica fount renders
  that 3 as a 5), gives `12-15`. (c) **The sequence settles it without either scan:** the next
  address in the same column is `VERS. 16-18`, which `12-25` would swallow whole.
- **English as shipped** (`src/english/8949/0023.md`): the address is rendered `VERS. 12-15.--`,
  per the plate-where-read rule.
- **Proposed patch:** `find` `VERS. 12-25.` → `replace` `VERS. 12-15.`
- **Note:** ⚠ this is the only site in the stint where the English and the Latin twin currently
  disagree on a **visible structural label**. Until the patch lands, the parallel page shows
  `12-25` beside `12-15`.

---

## 0247A — `crubescens` in our twin, **`erubescens`** on the plate

- **Opened by:** stint 0020–0024, 2026-09-08
- **Plate:** Gallica **f124**, corners **247 / 248**, left column, first line.
- **Our twin prints:** `sapientissimus, non crubescens a minori et gentili doceri`
- **The plate prints:** `sapientissimus, non erubescens a minori et gentili doceri`
- **Evidence:** `crubescens` is not a Latin word, and the plate prints *erubescant erudiri* cleanly
  two lines later in the same sentence.
- **English as shipped** (`src/english/8949/0023.md`): "…not blushing to be taught by a lesser man
  and a Gentile…"
- **Proposed patch:** `find` `non crubescens a minori` → `replace` `non erubescens a minori`

---

## Refused — three sites where a patch was NOT filed, and why

These are recorded so they are not re-opened from one witness.

- **0236A `panis coelestis, qui est sermo Dei`.** Gallica's mark after *coelestis* is a squared blob
  with no descending tail and reads as a full stop at 6×, against a clearly tailed comma after
  *coelo* on the same line. **The archive copy (p. 123, rendered at 400 dpi) prints an unambiguous
  comma**, and our twin has a comma. Two witnesses split, our twin sides with the archive: no patch.
  It also means **f118 under-inks a comma tail**, and every other call made on that leaf was
  re-weighed accordingly.
- **0238A `sed abscondit, vermes ex eo ebulliunt`.** The identical shape on f119: Gallica shows a
  tailless point, the archive layer prints a comma, our twin has a comma. No patch. Two instances of
  one class on two consecutive leaves is why neither was filed.
- **0249A `audientes nos intelligant` — A PRESS VARIANT, and it is the stint's most consequential
  reading.** Gallica prints *ut videntes **non videant**, et audientes **nos** intelligant*; the
  archive copy, **read as a rendered image at 500 dpi and not merely as OCR**, prints *ut videntes
  **non vident**, et audientes **non** intelligant*. The two copies differ at **two words on one
  line**; both impressions are clean and unworn (at 9× the Gallica *nos* is a fully formed italic
  **s**), and our twin agrees with Gallica at both words. Under the standing rule — where two clean
  copies differ, that is a press variant and there is no one to accuse — **no patch and no
  `[sic:]`**. The English renders the reading our twin and Gallica share, and a `[var:]` carries the
  received text. ⚑ This is the PL 114 *two printings, not two photographs* finding appearing for the
  first time in PL 113, and it should be weighed before any future letter-level call on this tome is
  settled by a single copy.

## Markup only — noted, not proposed

Two source attributions in this range survive into the twin as **body italic** rather than as
`[n: …]` notes, exactly as Migne sets them but not as the rest of the work is tagged: `*(AUG.,
ibid., quaest. 62.*` at 0240C (which the plate genuinely leaves unclosed) and `*(ID., [0245C]
quaest. 68.)*` at 0245B–C. Both are reproduced verbatim and untranslated in the English. **No patch
is proposed**, because moving them into `[n: …]` would change `noteCount` and the marker positions
the verifier matches across the pair; it is recorded here so a later structural pass can decide.
