# SPEC — inline-citation harvest

Ruled by the Fable session of 2026-07-31, off `BRIEF.md` (the evidence base — its
numbers are not restated here except where corrected). **A Sonnet session executes this
spec; every judgment call has been made.** The text of every work keeps what Migne
prints, verbatim — nothing below touches a chunk file.

**One correction to the brief's measurements, found by reading the specimen list:**
the scanner's 69 includes **3 false positives** — `(Ecclesia de Christo dicit)` (10804),
`(Judaeos videlicet)` (11550), `(Joannem Baptistam loquor)` (11703) — prose
parentheticals that merely open with book-like stems. All three lack a numeral. The real
class is **66 across 23 works; 30 in the 15 shipped works**. This is why the harvest
regex below requires a numeral: with that one rule the observed false-positive rate
across all 24 scanned works is zero.

**A second correction:** the brief's fourth specimen, `(Aeneid. VI, 688.)` in 11065, is
**not inline** — it is a `[n: …]` note (chunk 0008), already sitting in that work's
`unparsed[]` bucket. Its fix is note-side routing (ruling 4), not harvesting.

---

## The rulings

### 1. Harvest: YES, and at index time

The index's contract (CLAUDE.md rule 9, and `unparsed[]`'s whole reason for existing) is
that no citation is silently dropped. This class is dropped silently and invisibly — a
reader searching `/scripture/` cannot detect the miss or work around it. At ~2.8 per
affected work, the 5,204-work corpus implies a class in the tens of thousands, not 1% of
anything. The 2026-07-10 decline was correct **at n=1, because a single instance is not
evidence of a class**; 66 measured instances are. The fix is one function in a pipeline
whose output is derived data, re-runnable forever.

### 2. Marking: NO marker. Derive from the Latin twin at index time.

- The citation is a fact of Migne's plate, and the Latin twin is its faithful home.
  Deriving it there is the same move as every other harvest in `index-work.mjs`, whose
  header already states the philosophy: the index is derived; regenerate freely.
- A new `[ic:]` marker costs prompt budget on every one of 5,204 works forever, buys
  nothing a regex doesn't, is awkward across the 41 anchor-inside cases, and **cannot be
  applied retroactively without editing shipped English text**.
- A curated data file does not scale and duplicates the regex; curation stays reserved
  for what genuinely needs judgment — the wrong-as-printed cases, which already have
  `citation-corrections.json`.
- **The agent prompt and style file change NOT AT ALL** (see "Prompt changes" below).

*The principle, for cases nobody anticipated: prefer deriving apparatus from the
committed Latin over asking agents to mark it — agents cost per-work forever and cannot
be re-run over shipped text; a derivation costs once and reaches the whole corpus every
time the index regenerates.*

### 3. Landing: `scripture[]`, beside the `[n:]` records, flagged `inline: true`

The index records facts about **Migne**; note-vs-running-text is typography, not a
different kind of fact, and a reader of `/scripture/` wants one list. `inline: true`
already means exactly this on Pattern-4 fontes records ("this citation is running text,
not a note") — reuse it with the same meaning. How a record was *found* (agent tag vs.
regex) is a fact about **our pipeline**, not about Migne, and gets no field.

Inline records enter the same document-order walk (`ordered`), so they serve as
antecedents for later `(Ibid.)` notes automatically — that is the honest reading of
"nearest preceding non-Ibid. locator" in the printed sequence.

### 4. Non-scripture: one routing mechanism for both sides, grown by evidence

The existing prefix alternation in `handleNote` (`Lib|Cod|Conc|…`) is already a
known-fontes routing list. Treat it as such and grow it the way `BOOKS` grows — by
attestation, never from memory. **Add `Aeneid` now.**

- **Note-side** (the real 11065 case): on re-index, `(Aeneid. VI, 688.)` routes
  `unparsed[]` → `fontes[]`.
- **Inline-side**: an unknown-book candidate checks the same list; hit → `fontes[]` with
  `inline: true`; miss → `unparsed[]` with `inline: true` (an alias gap or a new fons
  prefix, triaged at ship time like every unparsed line).

*Why not harvest fontes wholesale: the fons vocabulary is open — rule 9 derives it later
from accumulated raws. A whitelist cannot find what it has never seen; but once a token
is attested, it is closed-vocabulary and mechanical. Scripture is harvestable precisely
because its book vocabulary is closed.*

### 5. Retroactive: yes — all 15 shipped works, one batch, one deploy

Mechanically: re-run `index-work.mjs` per work, rebuild the consumers of `data/index/`,
deploy once. Order within the batch is irrelevant. The deploy is a production deploy and
**waits for Wilson's per-action OK** (`cd site && npx vercel --prod --archive=tgz`).

### 6. The two-book question: one printed citation MAY emit multiple records

The code already answers this: compound `;`-notes and multi-chapter notes emit one
record **per reference**, each carrying the **full verbatim `refDisplay`** of the
printed object (`index-work.mjs` lines 131, 188). Generalize the rule and apply it to
both sides:

- **Records are per reference; `refDisplay` is per printed object.** Never slice
  `refDisplay` — a sliced display fabricates a citation Migne did not print.
- All records from one parenthesis share one column (the opening-paren column, below):
  the parenthesis is one printed object, and different columns would assert Migne
  printed two citations.
- Applies to `(Joan. III [1135A] Isai. V)` inline in 11064 **and** to
  `(Phil. II, Heb. II)` inside a well-formed note at 8930 @1113c.

### 7. The anchor-inside rule: the citation belongs to the column where it OPENS

`column` = the running column in effect at the opening `(`. Migne's practice is
quotation-then-citation, so the cited text lives where the parenthesis opens. Internal
anchors are stripped from `refDisplay` but **still advance the running column tracker**
for subsequent text — the exact precedent set by `[f:]` handling
(`index-work.mjs:324–327`). No anchor is moved, dropped, or duplicated (rule 1).

`refDisplay` = the parenthesis inner with column anchors and asterisks stripped,
whitespace normalized. This matches how note-side `refDisplay` already looks and makes
`citation-corrections.json` keys (`column|refDisplay`) stable and clean.
**Correction authors must key on the opening column** — e.g. 8930's
`(Psal. [1121C] II)` keys on the column in effect *before* 1121C, not on `1121c`.

---

## Changes to `scripts/index-work.mjs`

1. **`BOOKS` additions** (attested in the specimen list; keep growing by evidence):
   `'Exodi': 'Exod'`, `'Josue': 'Josh'`, `'Aggaei': 'Hag'`, `'Heb': 'Heb'`.

2. **Normalization** (extend `normSeg` / pre-parse cleanup, shared by both paths):
   - strip column anchors `\[[0-9]{3,5}[A-D]?\]` (inline path only — notes never
     contain them) and asterisks; collapse whitespace;
   - comma-after-book: `^((?:I{1,3}V?|IV)\s+)?([A-Z][a-z]+),` → `$1$2.`
     (handles `Levit, XIII` · `Job, X` · `Dan, II` · `Eccles, IV`).

3. **`parseScripture` extensions** (shared, so the note side gets them too):
   - **book-boundary segmentation**: after the `;` split, further split each segment
     before every *subsequent* occurrence of an attested book token (optional ordinal +
     `BOOKS` key + optional `.`) **that is followed by a numeral** — the numeral guard
     keeps verse lists from ever splitting. `Phil. II, Heb. II` → two segments;
     `Joan. III Isai. V` (anchor already stripped) → two segments.
   - **roman chapter ranges**: `VII-XIV` → ONE record, refKey `Exod.7-Exod.14`
     (mirrors the verse-range key shape). Check `build-scripture-index.mjs` renders a
     chapter-range key; if it cannot, **extend the consumer — do not degrade the key**.

4. **Inline candidate detection, inside the existing main walk** — add a fourth
   alternative to `tokenRe`: a parenthetical `\(([^()]{2,60})\)`. A match is a
   *candidate* only if, after normalization (step 2), it opens with
   `(ordinal?) Capitalizedword[.,]?` and contains at least one roman or arabic numeral.
   Routing:
   - `BOOKS` hit → `parseScripture` → `scripture[]` records with `inline: true`;
   - known-fontes prefix hit → `fontes[]` with `inline: true`;
   - book-shaped but unknown token → `unparsed[]` with `inline: true` + reason;
   - not a candidate (no book-shaped head or no numeral) → **ignore silently**: it is an
     ordinary prose parenthesis (`ut ita dicam`), the same shape test the note-side
     unparsed filter already relies on.

   Alternation order: anchor | `[n:]` | head | candidate. Left-to-right scanning means a
   `[n: (Isa. V)]` is consumed by the note branch before its inner paren can match.
   Head lines: run the candidate regex over head text too (as head-borne `[n:]` already
   is, `index-work.mjs:244`), records flagged `inHead: true`.

5. **Known-fontes list**: add `Aeneid` to the alternation at `index-work.mjs:199`;
   comment it as the evidence-grown known-fontes routing list. Inline unknown-book
   candidates consult it per ruling 4.

6. **Corrections**: no mechanism change. Lookup key is `column|refDisplay` after the
   normalization above; opening column per ruling 7.

7. **Document order**: candidate records push into `ordered` at their walk position, so
   Ibid. resolution works unchanged. Inline records are never themselves anaphoric (the
   candidate shape requires a book token).

## Changes to `scripts/scan-inline-citations.mjs` — becomes the audit

1. Require a numeral in `CIT` (kills the 3 prose false positives; the reported numbers
   become the true class).
2. Load `data/index/<series>/<idno>.json` where present and subtract already-harvested
   inline records (match on chunk + anchor-stripped text vs `refDisplay`/`raw`); report
   only the remainder. **Post-rollout invariant: the scan reports zero unharvested
   inline citations on shipped works.** Keep `--json`.

## Prompt changes: NONE

Nothing changes in `translation-runbook.md`, `translation-style.md`, or any agent
prompt. Agents already handle the class correctly — every shipped specimen is preserved
verbatim Latin in the English (`*(Job [0159C] XXX)*`, 11065/0018), and agents have
correctly declined to Pattern-4-tag these ~6 times. An instruction that purchases
behavior already occurring costs budget on every future work and buys zero; and since
the harvest is Latin-side, agent behavior cannot affect the index either way. Pattern 4
stays exactly as settled.

## Retroactive plan

1. Implement; verify first on **11064 and 11065** (they hold the two hard traps).
2. Re-run `node scripts/index-work.mjs <idno>` for all 15 shipped works:
   11065 · 11057 · 11537 · 7914 · 10365 · 10804 · 11066 · 11536 · 11542 · 7871 ·
   11063 · 11064 · 7020 · 7693 · 8566.
3. Rebuild every consumer of `data/index/` (`build-scripture-index.mjs` at minimum —
   grep the build chain for other readers, e.g. per-work pages / sources).
4. Run the scan audit — expect zero remainder on shipped works.
5. `git status` must show only `data/index/` + site build outputs changed — **no chunk
   file, Latin or English, may be touched.**
6. Commit; deploy with Wilson's OK; verify live that `/scripture/` lists Ps 63:7 →
   10804 @1265a.

Expected deltas (check per work against the console counts):

| work | scripture | notes |
|---|---|---|
| 11065 | +5 | `Josue` alias; `Eccles,` comma; **unparsed −1, fontes +1** (Aeneid) |
| 11057 | +3 | |
| 11537 | +3 | |
| 7914 | +3 | `Aggaei` alias |
| 10365 | +2 | `Levit,` comma |
| 11066 · 11536 · 11542 · 7871 | +2 each | 11536 needs `Josue` |
| 10804 | **+1** | scan shows 2; `(Ecclesia de Christo dicit)` is the false positive |
| 11064 | **+2** | ONE parenthesis, two records (two-book) |
| 11063 · 7020 · 7693 · 8566 | +1 each | 8566 `Job,` comma |
| **total** | **+31 scripture, +1 fontes, −1 unparsed** | |

Queue works (11632·11613·6963·11512·11638·8930·11550·11535·11703) need nothing — their
citations are captured by the normal per-work `index-work.mjs` run at ship time. 8930 is
mid-run; its `(Psal. II)` correction is authored during that session (worked example 4).

## Worked examples — the four traps

**1. Anchor-inside** — 10804 chunk 0009:
`« Accedet homo ad cor altum, et exaltabitur Deus *(Psal. [1265B] LXIII, 7)*. »`
Running column at `(` is `1265a`. Record:
`{ refKey: "Ps.63.7", refDisplay: "Psal. LXIII, 7", column: "1265a", chunk: 9, inline: true }`.
After the citation the running column is `1265b` — the internal anchor advanced it.

**2. Two-book** — 11064 chunk 0073: `(Joan. III [1135A] Isai. V)` → TWO records, both
`refDisplay: "Joan. III Isai. V"`, refKeys `John.3` and `Isa.5`, both at the opening
column (the anchor preceding the paren in chunk 0073 — confirm the literal at
implementation), both `inline: true`. Note-side sibling `(Phil. II, Heb. II)`
(8930 @1113c) → two records, refKeys `Phil.2` and `Heb.2` (`Heb` alias), shared verbatim
`refDisplay`, no `inline` flag.

**3. Non-scripture** — 11065 chunk 0008: `[n: (Aeneid. VI, 688.)]` — a NOTE, not inline
(the brief mislisted it; verified 2026-07-31). With `Aeneid` in the known-fontes list it
moves `unparsed[]` → `fontes[]`: `{ raw: "Aeneid. VI, 688.", column: "136d", chunk: 8 }`.
A future *inline* classical citation follows the same list into `fontes[]` with
`inline: true`.

**4. Wrong-as-printed** — 8930 chunk 0011: `*(Psal. [1121C] II)*` parses to chapter-level
`refKeyPrinted: "Ps.2"`. The correction is authored during 8930's session, keyed on the
**opening column** and normalized display:
`{ "idno": "8930", "column": "<column in effect before 1121C — read the chunk>",
"refDisplay": "Psal. II", "refKey": "<VERIFY: brief says Ps. 23:2 — check whether that is
Vulgate or modern numbering against the quoted Latin; refKey follows the CITED (Vulgate)
numbering per the corrections standard>", "quote": "<the quoted Latin>", "note": "…" }`.
The existing mechanism then emits `refKey` corrected, `refDisplay` verbatim,
`refKeyPrinted` retained.

## Deliberately NOT covered

- **Inline `(Ibid.)` as running text** — no specimen exists; the candidate shape
  requires a book token, so one would not be caught. If met: log in `cruces.md`; the
  scan audit's remainder will also surface it.
- **Classical/patristic inline citations whose token is not yet in the known-fontes
  list** — they land in `unparsed[]` if numeral-shaped, nowhere if not. Grown by
  evidence, never pre-populated from memory.
- **A suppression file for prose noise in `unparsed[]`** — observed noise rate is zero
  once numerals are required; build it only when real noise appears, not before.
- **English rendering** — already settled practice (verbatim Latin, italics as printed);
  no convention changes here.
- **`fonsKey` / source-name normalization / theme tags** — rule 9's deferrals stand.
- **PG works** — governed by `pg-paired-pilot.md`. This harvester runs on any committed
  Latin twin, so PG inherits it once twins exist; nothing PG-specific was decided here.
