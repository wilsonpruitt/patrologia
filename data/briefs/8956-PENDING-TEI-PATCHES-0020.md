# 8956 — pending TEI patches, stint 0020–0024 (cols 1281A–1292A)

Filed under the locked rule *"What the English translates — THE PLATE WHERE READ"*
(`translation-style.md`). Every site below was read at the plate; the English renders Migne, and
the Latin twin must converge on it when the patch pass runs.

Witnesses: **Gallica `ark:/12148/bpt6k5505319w`**, leaf `f = (column + 1) / 2` (calibrated against
the printed corner numbers on all six leaves — f641 = 1281/1282, f642 = 1283/1284, f643 =
1285/1286, f644 = 1287/1288, f645 = 1289/1290, f646 = 1291/1292 — before any read was recorded);
**archive.org `patrologiaecurs04migngoog`**, PDF page `= (column + 11) / 2` (calibrated on p.646 =
1281/1282 and p.651 = 1291/1292).

---

## 1. col 1282A — HEBREW TYPE dropped by the digitization

- **Our TEI (`src/latin/8956/0020.md`):** `Hebraice mesuchan , quia genus ligni est imputribile`
- **The plate:** `Hebraice mesuchan (מסכן), quia genus ligni est imputribile`
- **Witnesses:** confirmed on **both printings** — Gallica f641 right column, read at native
  resolution and again on a 4× upscaled crop (four letters, right to left: mem, samekh, kaf, final
  nun); archive.org p.646 right column at 200 dpi, which sets the same parenthesized word.
- **Why it matters:** the gloss on Is 40:20 *Forte lignum* is an etymological note — Jerome names
  the Hebrew word behind *forte* and then explains it. Corpus Corporum has dropped the Hebrew and
  left the orphaned space before the comma, which is the visible scar. This is the same class as
  the lost Hebrew a peer filed elsewhere in this work.
- **English as shipped:** "In Hebrew *mesuchan*, because it is a kind of wood that cannot rot" —
  the Hebrew was **not** inserted into the English alone, which would break the twin pair.
- **Patch:** `Hebraice mesuchan , quia` → `Hebraice mesuchan (מסכן), quia`

## 2. col 1281B — a lost point in a verse address

- **Our TEI (`src/latin/8956/0020.md`):** `VERS. 4-- *Omnis vallis exaltabitur.`
- **The plate:** `VERS. 4. — Omnis vallis exaltabitur.`
- **Witness:** Gallica f641, left column, read at native resolution. The period after the numeral
  is plain, and every other address on the leaf carries it.
- **Why it matters:** the address is the work's structural spine, and a single malformed one will
  read to a later collator as Migne's inconsistency rather than ours.
- **English as shipped:** `VERS. 4.-- *Every valley shall be exalted.*`
- **Patch:** `VERS. 4--` → `VERS. 4.--`

## 3. col 1290A — a doubled point inside a citation

- **Our TEI (`src/latin/8956/0023.md`):** `[n: (I Cor.. X)]`
- **The plate:** `(I Cor. x)`
- **Witnesses:** confirmed on **both printings** — Gallica f645 right column and archive.org
  p.650 right column, each with a single point after the abbreviation.
- **Why it matters:** the note contents are checked verbatim against the Latin twin, so a doubled
  point propagates into the apparatus as though Migne had printed it.
- **English as shipped:** the note is reproduced verbatim as our twin has it, `[n: (I Cor.. X)]`,
  pending this patch.
- **Patch:** `(I Cor.. X)` → `(I Cor. X)`

## 4. col 1291A — a word altered: `docem` → `decem`

- **Our TEI (`src/latin/8956/0024.md`):** `quia docem tribubus captivatis`
- **The plate:** `quia **decem** tribubus captivatis`
- **Witnesses:** confirmed on **both printings** — Gallica f646 left column, read at native
  resolution and again at 4×, and archive.org p.651 left column at 200 dpi. Both read `decem`
  unambiguously.
- **Why it matters:** `docem` is not a word, and the sentence is a historical claim that turns on
  the number: *the ten tribes* were led captive while Juda, Benjamin and the Levites remained.
- **English as shipped:** "because when the ten tribes had been led captive…"
- **Patch:** `docem tribubus` → `decem tribubus`

## 5. col 1291C — a word altered: `plerosquo` → `plerosque`

- **Our TEI (`src/latin/8956/0024.md`):** `ubi ostenditur divitiis et paupertate plerosquo tentari`
- **The plate:** `ubi ostenditur divitiis et paupertate **plerosque** tentari`
- **Witnesses:** confirmed on **both printings** — Gallica f646 left column at 4× and archive.org
  p.651 left column at 200 dpi.
- **Why it matters:** `plerosquo` is not a word; `plerosque` is the accusative subject of the
  infinitive *tentari*, and without it the clause has no subject.
- **English as shipped:** "where it is shown that very many are tempted by riches and by poverty."
- **Patch:** `plerosquo tentari` → `plerosque tentari`

---

## NOT patches — recorded so nobody re-opens them

**Four sites where the two printings differ, and NOTHING is marked or patched.** A word defective
on one printing only does not license a public accusation against Migne's type (the 8956 @1265A
`potet`/`potest` precedent set by the 0010–0014 stint, and 8950's *Mititte*/*Mittite*). In every
case our TEI agrees with Gallica, the English renders the sense, and the twin is left alone.

- **col 1283A — `tunduntur.I` / `tunduntur.`** Gallica sets a stray capital-I-shaped sort after the
  full stop closing *…fluctibus saeculi tunduntur.*; archive p.647 prints the stop clean. The
  English ends the sentence and carries nothing.
- **col 1284D — `vestustate` / `vetustate`.** Gallica sets *in vestustate litterae*; archive p.647
  sets *vetustate*. English: "in the oldness of the letter."
- **col 1286B — `nonhabet` / `non habet`.** Gallica fuses the run; archive p.648 sets the space.
  English: "but does not have the thing itself" — the negation is rendered in plain words, since
  nothing quarantines it (7a⁗).
- **col 1290A — `ob oriente` / `ab oriente`.** Gallica sets *quem Magi ob oriente venientes
  adoraverunt*; archive p.650 sets *ab*. English: "coming from the east."
- **col 1290C — `Curavivimus` / `Curavimus`.** Gallica hyphenates *Curavi- / vimus Babylonem*;
  archive p.650 sets *Curavi- / mus*, and the archive column's left margin was measured against
  three neighbouring lines before this was recorded. English: "We have healed Babylon, and she is
  not healed."

**Two line-end divisions on f644 printed without a visible hyphen** — `Confun / dantur` (1288A) and
`tem / plum` (1288D). Our TEI joins both, which is what the plate means; no patch is proposed and
no marker is fired. Recorded only so that a later reader of that leaf does not mistake them for
Pattern 10 sites.
