# 8956 — pending TEI patches, stint 0000–0004 (cols 1231B–1242D)

Filed under the locked rule *"What the English translates — THE PLATE WHERE READ"*
(`translation-style.md`). Every site below was read at the plate; the English renders
Migne, and the Latin twin must converge on it when the patch pass runs.

Witness: **Gallica `ark:/12148/bpt6k5505319w`**, leaf `f = (column + 1) / 2`, calibrated on
the printed corner numbers of all six leaves before any collation (f616 = 1231/1232 …
f621 = 1241/1242). The archive.org jbig2 copy was not consulted; see the plate-reads file for
why it was not needed at any of these sites.

---

## 1. col 1234A — a wrong letter: `Affecta` → `Affectu`

- **Our TEI (`src/latin/8956/0001.md`):** `VERS. 8.-- *Filia Sion,* etc., [n: (ID., ibid.)] Affecta piissimi patris.`
- **The plate:** `Affectu piissimi patris.`
- **Witness:** Gallica f617, right column, the word standing at the right edge of its line and
  broken `Affect-` / `u`. Read at native resolution and again on a 900px upscale of the single
  word: the final glyph has **two stems joined at the foot**, which is a *u*; an *a* in this
  fount carries a closed bowl at the top and this glyph has none.
- **Corroboration, internal and independent of the letter:** the same work writes
  **`Affectu pii patris`** at 1236B (chunk 0001), glossing *Heu ego* — the identical
  construction, ablative of manner, two columns later.
- **Why it matters:** `Affecta` is a nominative/ablative participle with nothing to agree with;
  the sentence has no verb and no construction. `Affectu` gives the phrase its sense — the
  Prophet speaks *with the affection of a most loving father* — which is the point the gloss
  goes on to make (*sed nostro vitio alieni efficimur*).
- **English as shipped:** "With the affection of a most loving father."
- **Patch:** `Affecta piissimi patris` → `Affectu piissimi patris`.

## 2. col 1234D — a dropped mark: the colon after `servandam`

- **Our TEI (`src/latin/8956/0001.md`):** `…putant legem esse servandam audiant hoc eorum socii…`
- **The plate:** `…putant legem esse servandam **:** audiant hoc eorum socii…`
- **Witness:** Gallica f617, right column, last line of the band. Two dots, vertically ranged,
  clearly separated, at native resolution and again on a 900px upscale — a colon, not a comma
  and not dirt.
- **Why it matters:** Pattern 8. Without it the two parallel imperatives *audiant … audiant*
  run into one sentence with no mark at all between them, which is what our twin currently
  prints and which reads as a defect of ours.
- **English as shipped:** the colon is carried — "…think that the law is to be kept: let their
  fellows hear this…"
- **Patch:** insert `:` after `servandam`.

## 3. col 1235D — dropped Hebrew type: `sedek` **צדק**

- **Our TEI (`src/latin/8956/0001.md`):** `Justitia, in Hebraeo *sedek* quod magis justum significat`
- **The plate:** `Justitia, in Hebraeo *sedek* **צדק**, quod magis justum significat`
- **Witness:** Gallica f618, left column, read on a dedicated crop of the line. Three letters,
  right to left tsade–dalet–qoph, and Migne's own transliteration *sedek* stands immediately
  before them, which is what licenses the reading rather than my eye alone.
- **Why it matters:** the gloss is *about* the Hebrew word — it argues that the Hebrew says
  "just" rather than "justice" — so the word the argument turns on is the one our source lost.
  Note also that the plate has a comma after the Hebrew which our twin has absorbed.
- **English as shipped:** the Hebrew is restored in place, silently, per Pattern 13a clause 1
  (words lost mid-sentence, plate certain), and logged as a crux.
- **Patch:** insert `צדק,` after `*sedek*` (and drop the now-doubled comma if the transform
  supplies one).

## 4. col 1235D — dropped Hebrew type: `siggim` **(סגים)**

- **Our TEI (`src/latin/8956/0001.md`):** `Scoria, Hebraice *siggim* : quod est rubigo metallorum`
- **The plate:** `Scoria, Hebraice *siggim* **(סגים)** : quod est rubigo metallorum`
- **Witness:** Gallica f618, left column, dedicated crop. Four letters inside round brackets,
  right to left samekh–gimel–yod–mem sofit; again Migne's own *siggim* stands beside them.
- **Why it matters:** same as (3), and here the loss also leaves our twin with a stranded
  space before the colon (`*siggim* : quod`) — the visible scar of the dropped parenthesis,
  and the reason this one is provably a transcription artifact rather than Migne's setting.
- **English as shipped:** the Hebrew is restored in place, silently, and logged as a crux.
- **Patch:** insert `(סגים)` between `*siggim*` and the colon.

---

### Not filed, and why

- **`Ανθρωποσπαθῶς` (1235A).** Our twin reproduces the plate **exactly**, sigma-pi and all.
  The form is not a Greek word (the word wanted is ἀνθρωποπαθῶς), but that is Migne's setting,
  not our source's loss, so there is nothing to patch. Logged as a crux; carried verbatim into
  the English untranslated, as the Greek-verbatim rule requires.
- **`constabunt` (1237A), `allii` (1238A), `malitiam` (1240A), `sanguis` (1241C).** All four
  read on the plate as our twin has them. They are Migne's readings and belong to the
  apparatus (`[var:]`, `[sic:]`, `[cj:]`), never to a patch.
