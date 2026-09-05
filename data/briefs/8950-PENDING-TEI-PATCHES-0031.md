# 8950 *Liber Genesis* — pending TEI patches, stint 0031–0035 (cols 0147C–0160A)

Found by reading **PDF pages 79–85** of `raw/scans/pl113/patrologiaecurs04migngoog.pdf`
(page = (column + 11) / 2; **corner numbers read first on every page**) against the Corpus Corporum
twin in `src/latin/8950/0031.md`–`0035.md`. **None of these is repairable from the English side.**
Each needs a `data/tei-patches/8950.json` entry so the Latin column converges on the plate.

**Reads recorded in `data/briefs/8950-PLATE-READS-0031.json`.** Apparatus that rests on these reads:
6 `[var:]` · 1 `[sic:]` · 1 `[ed:]`.

⛔ **The `[sic:]` this stint fired is the FIRST on this work, and it is the one case the class
allows: the plate and the twin AGREE on the defect.** Every other plate defect in this range is one
our twin has already tidied away (five sites, Part A2), so a `[sic:]` on any of them would fail the
verbatim-substring guard; and every twin defect is OURS (Part A1), so a `[sic:]` there would
publicly accuse a clean page. Same result as the 0008–0011 and 0019–0023 stints, on new columns.

---

## Part A — WORDS. Confirmed at 600 dpi (one site at 1200 dpi).

### A1. Defects that are OURS — the twin is wrong, the plate is clean

**The English renders the PLATE at every one of these** (locked rule: the plate where read).

| col | twin reads | plate reads | class | English renders |
|---|---|---|---|---|
| 0148B | `Fodit **alio** puteos` | **`Fodit alios puteos`** | dropped `s`; and the plate agrees with Gn 26:18 | "He dug **other** wells" |
| 0148C | `et **quosque** verae intelligentiae aqua redeat` | **`et quousque verae…`** | dropped `u`; `quosque` does not construe | "and **until** the water of true understanding return" |
| 0155A | `nihil fecit **idolol triae** simile` | **`nihil fecit idololatriae simile`** | ⚠ **SPLIT RUN** (Pattern 10 shape) — ours, not Migne's | "he did nothing like to **idolatry**" |
| 0151A | `benedic**i**tur` | **`benedicetur`** | i↔e normalization | "**shall be** blessed" |
| 0151B | `benedic**i**tur` | **`benedicetur`** | the same, eleven lines later | "**shall be** blessed" |
| 0151B | `Alter **ad** venandum mittitur` | **`Alter venandum mittitur`** | our twin **supplies** *ad* | "The one is sent to hunt" (no exponent for the missing *ad*) |
| 0154A | `**Grece**` | **`Graece`** | ligature lost | "in Greek" (no exponent) |
| 0155B | `verbum Hebraicum ***ulam,***` | **`verbum Hebraicum *olam,*`** | o→u at the first of six occurrences | the span reads ***olam,*** |
| 0158C | `remiss**ae**` | **`remisse`** | ae↔e normalization, inside Ps 31:1 | "are forgiven" (no exponent) |

⚑ **`idolol triae` is the dangerous shape** (7a⁗-b): quarantining it under Pattern 10 would have taken
the whole lexeme out of *nihil fecit idololatriae simile* and left the sentence saying that Jacob did
nothing like to nothing. It was **not** quarantined, because it is not Migne's.

⚑ **`benedicitur` twice for `benedicetur` is a CLASS, not an accident** — two sites in one column
band, both a present indicative standing where the plate has a future. This is brief §4's
"digitization corrects as well as corrupts", and it is invisible from the Latin alone because the
present reads perfectly well beside the neighbouring *dicitur*.

### A2. Defects that are MIGNE'S — the plate is defective and our twin has tidied it away

**None is markable now**; each becomes a live `[sic:]` **after** the patch lands. The English renders
the sense (which is what the twin's tidy word already gives).

| col | plate reads | twin reads | class |
|---|---|---|---|
| 0147C | **`pertradsissent`** | `pertransissent` | non-word, intruded `d` |
| 0148D | **`phi-` / `sophi`** (= `phisophi`) | `philosophi` | non-word, dropped `lo` across a line break |
| 0149C | **`mediatabatur`** | `meditabatur` | non-word, intruded `a` |
| 0154A | **`Chrisri`** | `Christi` | non-word, `r` for `t` |
| 0154B | **`menbra illus`** | `membra illius` | two defects in three words |
| 0156D | **`*usque ab*`** | `*usque ad*` | the abridgment formula, with `b` for `d` |
| 0148D | **`apperuit`** | `aperuit` | doubled `p` (arguably an attested medieval spelling — Pattern 9) |

### A3. The defect BOTH columns carry — and it is the stint's one `[sic:]`

**0152A `pinguedidine`.** Read at **1200 dpi** on p. 81: the plate breaks the line
`« In pinguedi-` / `dine terrae, »`, and the join is a doubled syllable. **Our twin carries it
verbatim.** No patch is owed. ⭐ The internal control is on the same plate, eleven words earlier,
where Migne sets `« In pinguedine terrae, et in rore coeli desuper erit benedictio tua.` correctly —
so this is a compositor's doubling, not a word. English: `In the fatness [sic: *pinguedidine*] of the
earth`, per Pattern 7's 2026-09-05 amendment (the marker discloses, so the sense is rendered).

---

## Part B — ⭐⭐ VERSE ADDRESSES. Our twin has silently NORMALIZED FOUR of them.

**This is the largest single finding of the stint and it is a class, not four accidents.**

| col | twin prints | plate prints | the lemma's actual verse |
|---|---|---|---|
| 0150B | `VERS. 6-13.` | **`VERS. 5-13.`** | Gn 27:6 (*Dixit filio suo Jacob*) |
| 0150C | `VERS. 15-19.` | **`VERS. 16-19.`** | Gn 27:15 (*Et vestibus Esau*) |
| 0150D | `VERS. 20-24.` | **`VERS. 19-24.`** | Gn 27:20 (*Quomodo, inquit, tam cito*) |
| 0155D | `VERS. 11-16.` | **`VERS. 11-19.`** | Gn 29:11 (*Osculatus est eam*) |

⭐ **The direction is uniform and it is what makes the class credible: in every one of the four,
Migne's range OVERLAPS its neighbour or skips a verse, and the twin's range is the tidy,
non-overlapping one.** On p. 80 the plate runs `3-5 · 5-13 · 14 · 16-19 · 19-24`; the twin runs
`3-5 · 6-13 · 14 · 15-19 · 20-24`. On p. 83 the plate runs `11-19 · 16-19`; the twin runs
`11-16 · 16-19`. Three of the four twin readings are also the "righter" one against the lemma's own
verse, which is exactly the shape of an editorial tidy.

**The English renders the plate in all four**, following the 0019–0023 stint's `VERS. 27-19` ruling
(cruces-0019 §2): a verse address is **content**, not a mark, and this edition's addresses are its
citation-resolving apparatus. ⛔ **No `[sic:]` is possible** — the marker's content must be verbatim
in the twin, and the twin prints the other numeral.

⚑ **Nobody could have flagged any of these from the Latin alone**, because the twin's numbers are the
ones the lemmata call for. Only the plate shows it. **A later stint on this book should expect more,
and the cheap detector is an overlapping or verse-skipping range in the plate's own sequence.**

⚠ Also spacing, not worth its own patch line: the plate sets `VERS.11-19.` at 0155D and
`VERS. 46-52. — Afferte` at 0158D with no space / no opening mark respectively.

---

## Part C — MARKS. The English follows the TWIN at every one of these.

Convention (ii), settled by the 0008–0011 stint: **words follow the plate, punctuation follows the
twin**, because `verify-english` compares guillemets against the twin as a hard check and the
band-by-band colon/semicolon scan partitions on the twin's anchors.

### C1. Guillemets our twin SUPPLIES that the plate does not print

| col | plate | twin |
|---|---|---|
| 0149A | `VERS. 32-35. — Ecce autem venerunt. »` — no opening mark | `« Ecce autem venerunt. »` |
| 0150A | `Deum placabat. » Jacob simplex habitabat in tabernaculis, »` — an orphan CLOSE after *placabat*, no opening before *Jacob* | `Deum placabat. « Jacob simplex … tabernaculis, »` — the orphan close deleted, an opener supplied |
| 0150C | `VERS. 16-19. — Et vestibus Esau, » etc.` — no opening mark | `« Et vestibus Esau, »` |
| 0154A | `« Viditque in somnis, etc.` — no closing mark | `« Viditque in somnis, » etc.` |
| 0157C | `Pro eo quod posuimus, mutavit mercedem meam decem vicibus, »` — no opening mark | `« mutavit mercedem meam decem vicibus, »` |
| 0158D | `VERS. 46-52. — Afferte lapides, « etc.` — no opening mark, and `«` where the twin closes | `« Afferte lapides, » etc.` |

### C2. Migne's repeated line-head `«` that our twin DROPS

The class the 0000 stint identified. Confirmed here at **eight** sites: 0147D (`in terra « illa`),
0151A (`comedis- « set`), 0152D (`nomen ejus « Jacob` and `jugum « ejus.`), 0155B
(`nomen urbis « Bethel,` and `domus « Dei`), 0156A (`pro Rachel « septem annis`), 0156D
(`consuetu- « dinis`), 0158A (`quod Rachel « furata esset`), 0158D (`quod « autem furti` and
`et « gelu.`), 0159D (`ap- « pellabitur`), 0154D (`Deus Abra- « ham`).

### C3. Migne's own unpaired marks, mirrored and NOT tidied

- **0148D — an orphan closing `»`**, and it is HIS: `…Spiritus sancti (Matth. xviii). » Puteos
  Abraham,` with no opening mark anywhere before *baptizantes*. Read at 600 dpi. Our twin carries it,
  and so does the English. This is the one raw-mark asymmetry in chunk 0031.
- **0154A — an unclosed opening `«`**, and it is HIS: `« Caput enim viri Chrisri Deus (I Cor. xi.)`
  runs to the end of the paragraph with no `»`. This is the stint's **one open-ended span**, and the
  brief's warning that the printed span "may be SHORT of what Migne quotes" does not apply — the
  plate stops exactly where the twin stops.

### C4. Other marks the plate and the twin differ on

| col | plate | twin |
|---|---|---|
| 0147C | `« Orta autem fame super terram. »` (period) | `terram, »` (comma) |
| 0149B | `*Mystice,*` (comma) | `*Mystice.*` (period) |
| 0152B | a bracket-shaped sort before `de cervicibus tuis` | nothing |
| 0155B | `Bethel,` | `Bethel.,` — a **spurious extra period**, ours. ⚠ The English therefore reads `« And he called the name of the city Bethel., »`, which will look like our typo and is not. |
| 0155C | `celabat, ;` | `celabat;` |
| 0156A | `dicitur'` | `dicitur,` |
| 0157C–D | bracket-shaped sorts before `ad decem vices` and `in contrarium` | nothing |
| 0158C | a bracket-shaped sort before `psal. cxxvi` and after `psal. xiii :` | nothing |
| 0159A | `dicens.` (period) | `dicens,` (comma) |
| 0159C | a stray `!` before `sunt in salutis praesidium` | nothing |
| 0152D | `benedicam eos (Num. vi) »` — no period before the mark | `benedicam eos [n: (Num. VI)]. »` |

⚑ **The bracket-shaped sorts are a recurring artifact of this printing** (five sites across
pp. 81–84), not five accidents. They are marks, our twin carries none of them, and nothing of ours
goes near them.

---

## Part D — MARKUP. Corpus Corporum's element choices, not Migne's typography.

1. **Sigla transcribed as ITALIC SPANS rather than `[n:]` notes** — 0153C (`*(AUG., [0153D] Q. in
   Gen.)*`), 0153D (`*(GREG., [0154A] lib. V Moral., c. 11, tom. I.)*`), and 0159A, where
   `(HIERON. [0159A] *de Loc. Hebr.* )` is plain text with an italic span inside it. The plate sets
   all three as ordinary roman parentheses with only the work-title italic. Same class as the 0000
   stint's 0077B–C. Treated exactly as `[n:]` would be — Latin verbatim, unanglicized, italics and
   anchors 1:1. **This book's `fontes` index will silently lose these citations until they are
   patched.**
2. **A siglum and its sense-tag fused into ONE italic span** — 0149B
   (`*[n: (HIPP. mart., …)] Mystice.*`) and 0159D (`*[n: (GREG. hom. 14, …)] Mystically.*`). The
   plate italicizes only *epist. ad Damasum* / *hom. 14, in Evang.* and *Mystice*.
3. ⛔ **An italic span the twin has LOST: `Mystice` at 0154D.** The plate sets it italic like every
   other sense-tag in the book; our twin sets it roman. The English follows the twin (italic parity
   is a hard check), so **0154D is the one place in this work where a sense-tag is not italicized**,
   and that is our source's doing.
4. **Migne's internal spacing inside sigla** — the plate sets `tom. V. )` at 0149A and 0149D with a
   space before the parenthesis; the twin sets `tom. V.)`. The English carries the twin's form.

---

## Part E — HEBREW dropped by Corpus Corporum. Four more sites.

The class the 0012–0018 stint measured (eight words lost across cols 0104–0118). **Four more here**,
all present on the plate and absent from our twin:

| col | plate | twin | scar visible in our Latin? | marker |
|---|---|---|---|---|
| 0148C | `*Rehobot* (רחבות), *latitudines.*` | `*Rehobot* **( )**, *latitudines.*` | **YES — an empty pair of parentheses** | **`[ed:]` FIRED** |
| 0155B | `verbo *ulam* vel *olam* ולאם plenae sunt` | `verbo *ulam* vel *olam* plenae sunt` | no — the sentence construes | none |
| 0157C | `verbum Hebraicum *monim* מנים numerum` | `verbum Hebraicum *monim* numerum` | no | none |
| 0158A | `in Hebraeo *theraphim* תרפים scriptum est` | `in Hebraeo *theraphim* scriptum est` | no | none |
| 0159B | `in Hebraeo *mahanaim* מהנים ; ut sciamus` | `in Hebraeo *mahanaim* ; ut sciamus` | marginal — a floating space before the `;` | none |

**The split follows Pattern 13a exactly, and it is the 0012 stint's own line**: clause 2 gives the
marker to a loss that would otherwise be invisible *as an absence*; clause 1 leaves an ordinary
mid-sentence loss to a silent patch and a crux. Only 0148C leaves a scar a reader would read as ours.

⛔ **The `[ed:]` supplies nothing.** Pattern 13's rule holds: the recovered Hebrew is recorded here
and in the patch file, never in the running English.

**Twelve Hebrew words are now known lost across cols 0104–0159.**
