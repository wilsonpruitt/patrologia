# 8956 — pending TEI patches, stint 0025–0029 (cols 1292B–1305B)

Filed under the locked rule *"What the English translates — THE PLATE WHERE READ"*
(`translation-style.md`). **Every site below was read at the plate**; the English renders Migne,
and the Latin twin must converge on it when the patch pass runs.

Witnesses: **Gallica `ark:/12148/bpt6k5505319w`**, leaf `f = (column + 1) / 2`, calibrated against
the printed corner numbers on **all eight leaves f646–f653** before any collation; **archive.org
`patrologiaecurs04migngoog`** (on disk), PDF page `= (column + 11) / 2`, calibrated on p.652 =
1293/1294 and p.658 = 1305/1306.

⚑ **The dominant class in this range is a LINE-BREAK FUSION on our side, not a defect on Migne's.**
Five of the eleven sites are our digitization mishandling a hyphen at a line or column break, and
three of those five looked exactly like a `[sic:]` or a Pattern 11a dittography until the plate was
opened. **No `[sic:]` was fired anywhere in this stint**, and four separate candidates were
withdrawn at the plate (see the plate-reads file). Read alongside `reference_plate-read-triage`:
frequency and internal corroboration proved these errors existed and said nothing about whose.

---

## 1. col 1293A — a non-word for a real one: `Baptismam` → `Baptistam`

- **Our TEI (`src/latin/8956/0025.md`):** `usque ad Joannem Baptismam.`
- **The plate:** `usque ad Joannem **Baptistam**.`
- **Witnesses:** confirmed on **both printings** — Gallica f647 left column (2× crop) and archive
  p.652 left column, read independently.
- **Why it matters:** *Baptismam* is not a Latin form at all (the accusative of *baptisma* is
  *baptisma*), so under Pattern 7 it would have to be carried untranslated in a `[sic:]` — a public
  accusation against Migne for our own defect.
- **English as shipped:** "until John the Baptist."
- **Patch:** `Baptismam` → `Baptistam`.

## 2. col 1294D — a corrupted column anchor: `[1240D]` → `[1294D]`

- **Our TEI (`src/latin/8956/0025.md`):** `Vox prophetae et fidelis populi [1240D] adventum Christi`
- **The plate:** the **D** band letter stands in the centre gutter of f647 beside `VERS. 9. —
  *Consurge*` in the **right** column, which is col **1294**. Our twin's anchor is in exactly the
  right place; only its digits are wrong (9 → 4).
- **Witness:** Gallica f647, corner numbers 1293 / 1294 read first.
- **⛔ NOT changed in the English.** Column anchors are reproduced verbatim and `verify-english`
  checks them 1:1 against the twin, so the English carries `[1240D]` and this patch must move
  **both** sides in one operation.
- **Patch:** `[1240D]` → `[1294D]`.

## 3. col 1294C — a lost space

- **Our TEI:** `amarissimum antidotum,etc.`  **The plate:** `amarissimum antidotum, etc.`
- **Witness:** Gallica f647 right column. Cosmetic; filed for completeness.

## 4. col 1295D — a MANUFACTURED dittography: `cruceis, crucis` → `crucis`

- **Our TEI (`src/latin/8956/0026.md`):** `et ante scandalum cruceis, crucis, praemisit gloriam resurgentis.`
- **The plate:** `et ante scandalum **cru-** / **cis**, praemisit gloriam resurgentis.` One word,
  hyphenated at a line break.
- **Witnesses:** **both printings** — Gallica f648 left column (wide native crop across the column
  foot) and archive p.653 left column.
- **⭐ Why this one matters most.** Read from our twin alone this is a Pattern 11a doubling with
  variation, and 11a says to mark the intrusive copy — which would have put a `[d:]` or a `[sic:]`
  on Migne's page for a doubling **he never set**. Nothing internal to our file could have told the
  two apart; only the hyphen on the plate could.
- **English as shipped:** "and before the scandal of the cross he sent ahead the glory of him rising again."
- **Patch:** `cruceis, crucis,` → `crucis,`.

## 5. cols 1295D–1296A — a fusion across the COLUMN break: `exallabitur` → `exaltabitur`

- **Our TEI (`src/latin/8956/0026.md`):** `*Elevabitur et exallabitur,* [1296A] etc.`
- **The plate:** col 1295 ends `*Elevabitur et exal-*` and col 1296 opens `*tabitur*, etc.` —
  **exaltabitur**, split by the column boundary our own anchor marks.
- **Witnesses:** **both printings** — Gallica f648 and archive p.653.
- **English as shipped:** "He shall be lifted up and shall be exalted," with a `[var:]` on the
  reversed verb order against Is 52:13. **The `[var:]` is unaffected by this patch** (its content
  does not appear in the twin either before or after).
- **Patch:** `exallabitur` → `exaltabitur`.

## 6. cols 1296D–1297A — a truncated word: `funiculu` → `funiculus`

- **Our TEI (`src/latin/8956/0026.md`):** `etc., *usque ad* qui funiculu.`
- **The plate:** archive p.653 prints `qui **funiculus**.` clean. On Gallica f648 the final **s** is
  worn to a low dot; at 3× the stem is gone but the word ends short of the period's position.
- **Verdict:** the archive reading governs; **no `[sic:]`**, per the standing rule that every
  `[sic:]` must be confirmed on both printings.
- **English as shipped:** "as far as who a cord." (an *usque ad* tail, abrupt because Migne's is.)
- **Patch:** `funiculu.` → `funiculus.` ⚠ Confidence: high on the archive reading, medium on the
  Gallica one. If the patch pass wants a third look, the word is at the foot of f648's right column.

## 7. col 1297A — a dropped dash: `VERS. 16.` → `VERS. 16.--`

- **Our TEI (`src/latin/8956/0026.md`):** `VERS. 16. *Ecce ego.*`
- **The plate:** `VERS. 16. **—** *Ecce ego.*`, on **both printings** (Gallica f649, archive p.654).
- The English preserves our twin's form so the two sides stay parallel until the patch lands.
- **Patch:** insert `--` after `VERS. 16.`

## 8. col 1302C — a fusion at a line break: `supereum` → `super eum`

- **Our TEI (`src/latin/8956/0028.md`):** `*Requiescit supereum Spiritus Domini [n: (Isa. XI)]*`
- **The plate:** `*Requiescit **super-** / **eum** Spiritus Domini*` — Gallica f651, right column.
- **English as shipped:** "The Spirit of the Lord resteth upon him," with a `[var:]` on Is 11:2's
  future *requiescet*.
- **Patch:** `supereum` → `super eum`.

## 9. col 1302C — a fusion at a line break, the other way: `me moriter` → `memoriter`

- **Our TEI (`src/latin/8956/0028.md`):** `et me moriter teneant et hoc est,`
- **The plate:** `et **me-** / **moriter** teneant et hoc est,` — Gallica f651, right column, the
  last lines of the column.
- **Why it matters:** *moriter* is not a word, and the split leaves a stranded `me` that reads as a
  pronoun — so the clause looks like "and they hold me …" with the predicate missing. The plate's
  *memoriter teneant* ("and hold it in memory") is a fixed idiom.
- **English as shipped:** "and hold me in memory" — the accusative *me* is inside *memoriter* on the
  plate, so the English renders the idiom with the object the sentence supplies.
- **Patch:** `me moriter` → `memoriter`.

## 10. col 1303A — a stray column number fused into a word: `1304est` → `est`

- **Our TEI (`src/latin/8956/0029.md`):** `ex omni natione quae sub coelo 1304est [n: (Act. II)]`
- **The plate:** `ex omni natione quae sub coelo **est**` — Gallica f652, left column, with nothing
  in the margin at that point. The digits are out of sequence besides: they stand between our own
  `[1303A]` and `[1303B]`, and col 1304 does not begin until the right-hand column of the same leaf.
- **English as shipped:** "out of every nation which is under heaven" (silent restore, Pattern 13a
  clause 1).
- **Patch:** `1304est` → `est`.

## 11. col 1302D — an attribution swallowed by the lemma's italics

- **Our TEI (`src/latin/8956/0029.md`):** `VERS. 1.-- *Surge, illuminare. (HIER)*. Haec referunt`
- **The plate:** `VERS. 1. — *Surge, illuminare.* (HIER). Haec referunt` — Gallica f651, right
  column. Migne's `(HIER.)` stands **outside** the italic lemma, as it does everywhere else in this
  work, where our chunker renders it `[n: (HIER.)]`.
- **⛔ NOT changed in the English.** Moving the attribution out of the span would change this chunk's
  marked-span count, and the stint's span reconciliation (352 = 352) depends on it. The English
  keeps `*Arise, be enlightened. (HIER)*.` and the patch must move both sides together — ideally
  re-marking it `[n: (HIER.)]` so the note sequence matches the rest of the work.
- **Patch:** `*Surge, illuminare. (HIER)*.` → `*Surge, illuminare.* [n: (HIER.)]`
  ⚠ This one changes `noteCount`; do not apply it without re-running the chunk's frontmatter.

## 12. col 1303D — a dropped dash: `VERS. 10.` → `VERS. 10.--`

- **Our TEI (`src/latin/8956/0029.md`):** `VERS. 10. *Filii peregrinorum.*`
- **The plate:** `VERS. 10. **—** *Filii peregrinorum.*` — Gallica f652, left column.
- **Patch:** insert `--` after `VERS. 10.`

---

## Recorded and deliberately NOT patched

**col 1301A — `irruguus` / `irriguus` is a PRESS VARIANT.** The Is 58:11 lemma prints *Hortus
irruguus* on Gallica f651 and *Hortus irriguus* on archive p.656; the second occurrence a few lines
later prints *irriguus* on both. Our twin follows the Gallica setting faithfully, which is what a
witness to that printing should do. Same class as 8950's *Mititte*/*Mittite* and 9002's
*Bethehem*/*Bethlehem*: **crux only, no `[sic:]`, no patch.**

**col 1293B — `Matih.` is a Gallica-copy broken sort.** The note on Mt 16:19 prints `(Matih. XVI)`
on Gallica and `(Matth. XVI)` clean on archive p.652. Our twin has `Matth.` and is right; nothing
to patch.

**col 1297B — `tribuatus` is a Gallica-copy broken sort.** Gallica f649 prints `tribu-` / `atus`
across the line break; archive p.654 prints `tribu-` / `latus` clean over the same break. Our twin
agrees with Gallica. ⚑ **This is worth a decision the patch pass should make, not a translator:**
our TEI descends from a setting that reads *tribuatus*, and patching it to *tribulatus* would make
the twin a witness to neither printing. The English renders *tribulatus* ("lest the just man, being
afflicted, fail") because the archive printing is sound and the Gallica one is not. **Left
unpatched, flagged.**

**col 1305B — `lauaem` is a Gallica-copy broken sort.** Gallica f653 prints the Is 61:11 lemma
*Et lauaem*, with *laudis* clean two lines below; archive p.658 prints *Et laudem*. Our twin has
*laudem* and is right; nothing to patch.
