# 8950 *Liber Genesis* — SECOND-WITNESS VERDICTS on `8950-PENDING-TEI-PATCHES-0008.md`

**Cols 0095–0106 · Part A, all 20 rows checked · 2026-09-05**

Second witness: **Gallica ark:/12148/bpt6k5505319w**, `.../f<N>/full/full/0/native.jpg`,
**leaf = (column + 1) / 2**. Leaves opened: **f49, f50, f51, f52, f53**.

⛔ **Printed corner numbers were read first on every leaf, before any word was read:**

| leaf | printed corners | cols |
|---|---|---|
| f49 | **97 / 98** | 0097, 0098 |
| f50 | **99 / 100** | 0099, 0100 |
| f51 | **101 / 102** | 0101, 0102 |
| f52 | **103 / 104** | 0103, 0104 |
| f53 | **105 / 106** | 0105, 0106 |

The leaf map is confirmed correct on all five. Native scans are ~1900 × 3130 at 300 dpi;
every letter-level call below was made on a PIL crop at **3×–7×** of the native pixels
(≈ 900–2100 dpi effective), never off the whole leaf.

## Verdict split — **17 REFUTED · 1 CONFIRMED · 2 STRUCTURAL · 0 two-printings · 0 unsettled**

| col | our TEI twin | archive claim | **Gallica** | verdict | leaf · crop |
|---|---|---|---|---|---|
| 0097A | `Deus enim et aeternus est` | `Deos` | **`Deus`** | **REFUTED** | f49 L·A · 3.0× |
| 0097D | `Remotus est enim Enoch` | `Remotum est` | **`Remotus est`** | **REFUTED** | f49 L·D · 1.0× (unambiguous) |
| 0098A | `sed post in exsilio generata` | `sed potest` | **`sed post`** | **REFUTED** | f49 R·A · 3.5× |
| 0098C | `obtulit, » etc. Quia justus` | `» et. Quia` | **`» etc. Quia`** | **REFUTED** | f49 R·C · 4.0× |
| 0099C | `propter dilicta nostra` | `delicta` (i.e. OUR corruption) | **`dilicta`** | **REFUTED** | f50 L·C · 4.0× |
| 0100A | `« septempliciter; »` | `« septempliciter: »` | **`septempliciter ; »`** | **REFUTED** | f50 R·A · 3.0× |
| 0100A | `« septuplum; »` | `« septulum; »` | **`septuplum ; »`** | **REFUTED** | f50 R·A · 2.6× |
| 0100A | `interpretantur` | `interpretatur` | **`interpretantur`** | **REFUTED** | f50 R·A · 3.0× |
| 0101C | `id est vulnere quod infixi` | `vulnera` | **`vulnere`** | **REFUTED** | f51 L·C · 4.0× |
| 0102C | `intellecta diligeret` | `intellectu` | **`intellecta`** | **REFUTED** | f51 R·C · 4.0× |
| 0103B | `Joan. V:` | `Joan. v :` | **`Joan. v :`** | ⭐ **CONFIRMED** | f52 L·B · 4.5× |
| 0103C | `Seth, *positio* vel *resurrectio;*` | `positio ; vel` | **`positio vel resurrectio;`** | **REFUTED** | f52 L·C · 4.0× |
| 0103C | `Enoch, *dedicatio;* Mathusalam` | `dedicatio Mathusalam` (no `;`) | **`dedicatio; Mathusalam`** | **REFUTED** | f52 L·C · 4.0× |
| 0104B | Hebrew absent before `( *Elohim* )` | `Hebraicum אלהים (Elohim)` | **`Hebraicum אלהים ( Elohim )`** | ⭐ **STRUCTURAL — confirmed** | f52 R·B · 6.0× |
| 0104C | `[n: (HIER., ibid.)]` | `(HIER., Hebr. ibid.)` | **`(HIER., ibid.) Hebr. …`** | **REFUTED** | f52 R·C · 5.0× |
| 0104C | Hebrew absent before `( *loiadon* )` | `Hebr. לאידון (loiadon)` | **`Hebr. לאידון (loiadon)`** | ⭐ **STRUCTURAL — confirmed** | f52 R·C · 5.0× |
| 0104D | `centesimo anno deleti sunt` | `contesimo` | **`centesimo`** | **REFUTED** | f52 R·D · 4.0× |
| 0105D | `Potest in trecentis cubitis` | `Potet` | **`Potest`** | **REFUTED** | f53 L·D · 4.0× |
| 0105D | `Arca quae trecentis cubitis` | `treeentis` | **`trecentis`** | **REFUTED** | f53 L·D · 4.5× |
| 0106A | `Ostium autem arcae, » etc.` | `« Ostium …` (dropped `«`) | **`Ostium autem arcæ, » etc.`** — no opening mark | **REFUTED** | f53 R·A · 4.0× |

## What this means

**Seventeen of twenty.** Every letter-level claim in this file except the `Joan. V:` case-and-spacing
row is an artifact of the archive.org gathering. Our Corpus Corporum twin was right at every one of
those seventeen sites, including four that construed as sound Latin and would have changed what the
page says — `Deos`, `sed potest`, `interpretatur`, `intellectu`. That is the harm the gate exists to
stop, and it was one HTTP fetch away.

**The two that survive are both structural** — recovered Hebrew, which ink cannot invent — plus one
case-and-spacing normalization. Exactly the classes the gate predicted would survive.

⚠ **0099C is worth a line of its own.** The row was filed as "OUR corruption — the twin has the
non-word `dilicta`." Gallica prints `dilicta` too. So the non-word is **Migne's own**, on both
copies, and the correct disposition is the reverse of what was filed: no patch, and `dilicta` is now
a live `[sic:]` candidate rather than a digitization defect. Left for the crux pass; not fired here.

## `[sic:]` consequences

Every `[sic:] OWED after patch` in the source file is **void** — `*Deos*`, `*et.*`, `*septulum*`,
`*vulnera*`, `*contesimo*`, `*Potet*`, `*treeentis*`. None of those forms is on the page. Firing any
of them would have publicly accused Migne of a non-word his plate does not print.

## English reverts made (see report)

- `src/english/8950/0009.md` — 0098A, "but it can [be] begotten in exile" → "but afterwards begotten in exile"
- `src/english/8950/0009.md` — 0100A, "Theodotion renders it « by a week, »" → "Theodotion, « by a week » — so they render it,"
- `src/english/8950/0010.md` — 0102C, "he might love with understanding" → "he might love the things understood"

## Part B (300-dpi impressions, never acted on)

Not in scope, but three of them fell out of leaves that were open anyway, and all three are refuted:
`VERS. 23.--` prints in that order at 0097B (the dash follows the number, as our twin has it);
`CAPUT IV.` carries its period; and the comma after `versatiles sunt` at 0097D is on the plate.
The rest were not looked at and remain 300-dpi impressions.
