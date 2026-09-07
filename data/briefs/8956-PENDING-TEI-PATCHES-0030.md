# 8956 — pending TEI patches, stint 0030–0034 (cols 1305C–1316C)

Filed under the locked rule *"What the English translates — THE PLATE WHERE READ"*
(`translation-style.md`). Every site below was read at the plate; the English renders Migne,
and the Latin twin must converge on it when the patch pass runs.

Witnesses: **Gallica `ark:/12148/bpt6k5505319w`**, leaf `f = (column + 1) / 2`, printed corner
numbers read first on all six leaves (f653 = 1305/1306 … f658 = 1315/1316); **archive.org
`patrologiaecurs04migngoog`**, PDF page `= (column + 11) / 2`, corners read on pp. 658, 659,
661, 662, 663.

⚠ **None of these is a `[sic:]` site.** Three `[sic:]` candidates were withdrawn at the second
printing and are recorded at the bottom, because a later pass must not re-raise them.

---

## 1. col 1308D — a word altered: `acris` → `aeris`

- **Our TEI (`src/latin/8956/0031.md`):** `*Ventus.* Commotio acris, ut ibi`
- **The plate:** `*Ventus.* Commotio **aeris**, ut ibi`
- **Witnesses:** **both printings.** Gallica f654 right column, read at native and again on a
  1800 px crop (the second letter is closed with a crossbar, an `e`, matching *aperte* on the
  line above; the open `c` of *cunctis* is visibly different); archive p.659 right column,
  which prints `aeris` unambiguously at 100 dpi.
- **Why it matters:** the lemma is Is 64:6 *Ventus*, and the gloss defines the wind. *Commotio
  aeris* ("a motion of the air") is the standard definition; *commotio acris* is not Latin for
  anything the sentence wants.
- **English as shipped:** "*Wind.* A motion of the air, as there, …"
- **Patch:** `acris` → `aeris`.

## 2. col 1315A — a hyphen lost at a line break: `meridia nam` → `meridianam`

- **Our TEI (`src/latin/8956/0033.md`):** `etc. meridia nam, scilicet plagam in qua Africa est.`
- **The plate:** `etc. **meridianam**, scilicet plagam in qua Africa est.` — set across a line
  break as `meridia-` / `nam`.
- **Witnesses:** the hyphen is **printed on the archive** (p.663 left column, 300 dpi crop) and
  **absent on Gallica** (f658, 1900 px crop). Because one copy carries it, the word is one word
  and the Gallica copy has simply failed to print or scan the rule.
- ⛔ **This was a Pattern 10 split-type candidate and it is REFUTED.** Do not fire a `[sic:]`
  here in a later pass.
- **English as shipped:** "…Africa, etc., the southern, namely, quarter in which Africa is."
- **Patch:** `meridia nam` → `meridianam`.

## 3. col 1315A — a stop supplied inside Migne's own broken bracket: `(HIER.]` → `(HIER ]`

- **Our TEI (`src/latin/8956/0033.md`):** `*In equis.* (HIER.] Sunt adducti`
- **The plate:** `*In equis.* **(HIER ]** Sunt adducti` — open parenthesis, **no stop**, closing
  **square** bracket.
- **Witness:** Gallica f658, 1900 px crop of the line. (The archive's p.663 shows the same
  mismatched bracket at 100 dpi.)
- **Why it matters:** the mismatched bracket is why this attribution alone in the work escaped
  the `[n: …]` transform and rides as plain text — which is correct, and should stay so. But our
  file has quietly added a stop Migne does not print, and the English is now the only place the
  plate's form survives.
- **English as shipped:** `*On horses.* (HIER ] They are brought who believe swiftly…`
- **Patch:** `(HIER.]` → `(HIER ]`. **Do NOT "repair" the bracket to `)`** and do not promote it
  to an `[n: …]`: the defect is Migne's and `noteCount` is right as it stands.

## 4. col 1313B — a mangled entity: `VERS. 10.emdash;` → `VERS. 10.-- `

- **Our TEI (`src/latin/8956/0033.md`):** `VERS. 10.emdash; *Laetamini,* etc.`
- **The plate:** `VERS. 10. — *Laetamini*, etc.` — an ordinary em rule, exactly as at every
  other `VERS.` in the work.
- **Witnesses:** both printings (Gallica f657 left column; archive p.662 left column).
- **This one is unambiguously ours**: `emdash;` is a half-decoded HTML entity, not type.
- **English as shipped:** `VERS. 10.-- *Rejoice ye,* etc.`
- **Patch:** `VERS. 10.emdash;` → `VERS. 10.-- `.

## 5. cols 1305D and 1307A — the em rule dropped after `VERS. 5.`

- **Our TEI:** `[1305D]VERS. 5. *Et gaudebit,* etc.` (0030) and `VERS. 5. *Et non fuit,* etc.` (0030)
- **The plate:** `VERS. 5. — *Et gaudebit*, etc.` and `VERS. 5. — *Et non fuit*, etc.`
- **Witnesses:** both printings (Gallica f653/f654; archive p.658/p.659).
- Both are the only two `VERS.` addresses in this range that lack the rule in our file, and the
  plate has it in both places. Same class as item 4.
- **English as shipped:** `VERS. 5.-- ` in both places.
- **Patch:** insert `-- ` after `VERS. 5.` at 1305D and at 1307A.

## 6. col 1312D — spacing lost: `VERS.5--` → `VERS. 5.-- `

- **Our TEI (`src/latin/8956/0033.md`):** `VERS.5-- *Odientes vos.*`
- **The plate:** `VERS. 5. — *Odientes vos.*`, spaced and stopped like its neighbours.
- **Witnesses:** both printings (Gallica f656 right column; archive p.661 right column).
- **English as shipped:** `VERS. 5.-- *That hate you.*`
- **Patch:** `VERS.5--` → `VERS. 5.-- `.

## 7. col 1312A — a spelling normalised: `Caelum` → `Coelum`

- **Our TEI (`src/latin/8956/0032.md`):** `*Haec dicit Dominus: Caelum sedes mea, terra autem…*`
- **The plate:** `*Haec dicit Dominus: **Coelum** sedes mea, terra autem…*`
- **Witnesses:** both printings (Gallica f656 right column; archive p.661 right column).
- Migne sets `Coelum`/`coelis` everywhere else in this work, and our file follows him everywhere
  else; this single `Caelum` is ours. **The English is unaffected** ("Heaven"), so this is a
  tidy-up, not a text change — but it is the sort of silent normalisation the patch discipline
  exists to catch.
- **Patch:** `Caelum sedes mea` → `Coelum sedes mea` at 1312A.

---

## ⛔ NOT patches — three `[sic:]` candidates withdrawn at the second printing

Recorded here so that a later pass does not re-raise them as findings, and so that no one
"fixes" the Latin toward the Gallica copy's broken sorts.

| col | Gallica (our TEI agrees) | archive.org | verdict |
|---|---|---|---|
| 1312C | `a **Chrito** Christiani dicti` | `a **Christo** Christiani dicti`, clean at 300 dpi | broken sort in the Gallica copy; **no `[sic:]`**, English renders "from Christ" |
| 1313D | `Obsecro vos, **fatres**` | `Obsecro vos, **fratres**`, clean at 300 dpi | same class; **no `[sic:]`**, English renders "brethren" |
| 1315A | `meridia nam` (no hyphen) | `meridia-` / `nam` **with** the hyphen | ordinary line break; **no `[sic:]`** — see patch 2 above |

The Latin twin may reasonably keep the Gallica readings at 1312C and 1313D (it is a faithful
witness to the exemplar it was made from) **or** be brought to the archive's; what it must not do
is keep them while an English `[sic:]` accuses Migne of them. No such marker was fired.

## ⛔ Also NOT a patch — Migne's own readings, confirmed on both printings

- **1306C `Videtur tamen AUGUSTUS dicere super Genesim`** — *Augustus*, not *Augustinus*, on
  Gallica f653 and archive p.658. A real Latin name, so the English renders it and carries a
  `[cj: *Augustus*; read *Augustinus*, "Augustine"]`. **Never emend the Latin here.**
- **1309C `Omnis haereticus Deum ad iracundiam PROCAT`** — hyphenated `pro-`/`cat` across a line
  on Gallica, so no letters are concealed. English renders "solicits" with a `[cj:]`.
- **1310B–C `Achor filius Charmi`** — the man Jos 7 calls *Achan*. Migne's, on the plate.
- **1313A `reddentis reddentes retributionem`** — the doubling is on **both** printings; marked
  `[d:]` in the English on the first copy (Pattern 11a), never repaired in the Latin.
- **1312C `…praeponentes Pars autem populi`** — no stop before the capital, on the plate.
- **1314A `scripsere naturis`** and `per quem omnia operatur` — no terminal stop, on the plate.
