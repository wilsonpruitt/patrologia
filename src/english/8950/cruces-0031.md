# *Glossa ordinaria*, **Liber Genesis** — cruces, chunks 0031–0035 (PL 113, 0147C–0160A)

Translated 2026-09-05, one stint, 5 chunks (5,320 Latin words by the frontmatter; **5,151 body words**
with anchors, notes and markers stripped → **7,527 English, 1.46×**).
Bands: **0147C–0160A** — CAPUT XXVI, XXVII, XXVII (cont.), XXVIII, XXIX, XXX, XXXI, XXXII.
`verify-english.mjs 8950` reports **no error on 0031–0035** (the only failures in the work are
`MISSING English chunk` for ranges other stints hold).

**SPAN COUNT — 222, of which 1 OPEN-ENDED.** Counted **paragraph-bounded** in my own five Latin
chunks: **155 closed `« … »` spans + 66 `*…*` spans + 1 unclosed `«` = 222**, matching the brief's
header (`222 spans, of which 1 OPEN-ENDED`) exactly. Per chunk: 0031 27+13+0 · 0032 37+9+0 ·
0033 35+17+1 · 0034 15+10+0 · 0035 41+17+0.

⚠ **And the agreement is NOT the false kind the brief warns of — the three raw-mark asymmetries are
accounted for individually, not netted.** Body marks run **157 `«` / 156 `»`**, and the gap resolves
as: **(a)** an orphan **closing** `»` at 0148D, Migne's (§3); **(b)** a nested line-head `«` inside a
closed span at 0152A, which pairs into its host and is counted once; **(c)** the one genuinely
unclosed `«` at 0154A, Migne's (§3). Chunk by chunk the raw marks are 27/28 · 38/37 · 36/35 · 15/15 ·
41/41 — three chunks unbalanced in two different directions, and each direction has its own cause.
⚑ A DOTALL `«.*?»` over a chunk body runs the 0154A quotation forward across two paragraph breaks and
swallows two spans; counting paragraph-bounded is what keeps that from cancelling against (a).

**Apparatus fired: 6 `[var:]` · 1 `[sic:]` · 1 `[ed:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[nt:]`.**
Columns: `[var:]` 0147D · 0150C · 0152A · 0152B · 0152D · 0160A · `[sic:]` 0152A · `[ed:]` 0148C.
⚑ The Num. 6:27 `[var:]` resolves to band **0152D** in `plate-gate.mjs` because Migne's `[0152D]`
anchor falls inside the quotation it marks; the lemma opens at 0152C. Both columns are on the same
read (p. 81).
**Every one stands on a column read at the plate this session** (`data/briefs/8950-PLATE-READS-0031.json`).

Per-chunk parity (English / Latin), all exact: column anchors 7/14/10/8/11 · `[n:]` notes
14/13/10/14/10 · `«` 27/38/36/15/41 · `»` 28/37/35/15/41 · question marks 0/2/2/3/1 · italic spans
13/9/17/10/17. **Band-by-band punctuation scan (`:` `;` `?` `«` `»` `!` per column anchor, apparatus
stripped): three mismatched bands in five chunks, all `:` +1, all Pattern 8b, and zero elsewhere**
(§7). **Zero em-dashes supplied in 5,151 words** — the one `—` in the files is inside a `[var:]`.

⭐ **THE WHOLE RANGE WAS READ AT THE PLATE**: archive.org `patrologiaecurs04migngoog` on disk,
**PDF page = (column + 11) / 2**, **corner numbers read first on every page** — pp. 79 (147/148),
80 (149/150), 81 (151/152), 82 (153/154), 83 (155/156), 84 (157/158), 85 (159/160). Reads at 200 dpi
full-page with 600 dpi crops at twenty sites and one 1200 dpi crop (§6).
**Foot-of-page apparatus: CHECKED ZERO on all seven pages, all three key shapes** — no numbered
`Forte` notes, no asterisk layer, and no letter-keyed `(a)` notes of the kind found at cols 0068 and
0094. There is no foot rule on any of the seven pages; the columns simply end. A `[cn:]`-anchor grep
over my five Latin chunks (raised letters, per Pattern 19's note that this book's TEI keeps the key
while dropping the note) returns **zero**, which agrees.

Twin/plate divergences are in **`data/briefs/8950-PENDING-TEI-PATCHES-0031.md`**.

---

## §1 · CONVENTIONS — inherited unchanged, and what this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not re-opened**, nor were the earlier stints of
this same work (`cruces-0000.md`, `-0004.md`, `-0008.md`, `-0012.md`, `-0019.md`), which I read before
drafting: `VERS. n.--` passes through verbatim; **the lemma is Englished**; a fragmentary lemma is
rendered as the phrase it stands for; sigla ride as ordinary `[n: …]` notes with Migne's own internal
spacing, contents unanglicized; **the guillemets are the plate's, 1:1**, and their contents are
Englished; `*usque ad*` → ***as far as***, with **no verb and no object ever supplied**; the
`*Historice / Allegorice / Mystice*` tags are translated inside their italic span.

The four conventions the earlier 8950 stints settled were **adopted, not re-derived**:
**(i)** no `[var:]` on a quotation Migne himself labels a rival version — nine instances here, §4.3;
**(ii)** **words follow the plate, punctuation follows the twin** — heavily exercised, patch file
Parts A and C; **(iii)** a Latin gloss giving the **meaning** of a name is Englished inside its span,
a Latin word **mentioned as a word** stays Latin — six of each, §1(b);
**(iv)** unpaired guillemets are mirrored, never tidied, and run both ways — two here, both Migne's, §3.

### (a) The sense tags, and one the twin has DE-ITALICIZED

`*Moraliter.*` → ***Morally.*** (0148A, 0154B) · `*Mystice.*` → ***Mystically.*** (0149B, 0150C,
0151A, 0159A, 0159D) · `*Allegorice.*` → ***Allegorically.*** (0150B, 0155C) · `*Historice.*` →
***Historically.*** (0150C, 0157A, 0158B). A note inside the tag's italic span stays inside it
(`*[n: (HIPP. mart., …)] Mystice.*` at 0149B, `*[n: (GREG. hom. 14, …)] Mystice.*` at 0159D).

⛔ **0154D is the exception, and it is our source's doing, not Migne's.** The twin prints
`etc. Mystice designat mandatum divinitatis` with **no italics**, where the plate italicizes it like
every other sense-tag in the book (read at 200 dpi, p. 82). Italic-span parity against the twin is a
hard `verify-english` check, so **the English renders it roman** — making 0154D the one place in this
work where a sense-tag is not set off. Filed as a patch; **flagged here because a blind reader will
read it as our inconsistency and it is not.**

### (b) Which italic Latin is Englished, and which is not — convention (iii) applied to twelve spans

**Englished, because the span gives the MEANING of a name or of a foreign word:**
- `*contrarium*` → ***contrary*** (0148C) — the meaning of *Satana*, and the sentence is
  *unde patet Satanam contrarium interpretari*.
- `*latitudines.*` → ***breadths.*** (0148C) — the meaning of *Rehobot*; and the lemma
  `« Latitudo. »` is Englished « Breadth. » for the same reason, the gloss being about nothing else.
- `*supplantator*` → ***a supplanter*** (0152D) — the meaning of Jacob, and *Supplantavit enim me*
  stands four words above it.
- `*unctus*` → ***anointed*** (0154A) — *χρίστος enim Graece, unctus Latine*, and the argument runs
  *quem Jacob **unxit**, ut Christus signaretur*. Leaving it Latin would break the chain
  *unxit → unctus → Christus*, which is the whole gloss.
- `*domum Dei,*` → ***the house of God,*** · `*nux*` → ***a nut*** · `*amygdalum.*` →
  ***an almond.*** · `*prius.*` / `*prius*` → ***before.*** / ***before*** · `*ante vestibulum,*` →
  ***before the porch,*** · `*superliminare,*` → ***a lintel,*** · `*postes,*` → ***doorposts,***
  (all 0155B) — Jerome's Latin equivalents of Bethel, Luza and *ulam*.
- `*dealbatio.*` → ***a whitening.*** (0158A) — the meaning of Laban, and the next sentence turns on
  it (*Diabolus vero, **cum tenebrosus sit***, transfigurat se in angelum lucis).
- `*ovis,*` → ***a sheep,*** (0158B) — the meaning of Rachel.

**Kept Latin, because the span is a word MENTIONED as a word:**
- `*valle, torrentem*` (0148B) — *Pro **valle, torrentem** habent in Hebraeo*. The 0012 stint's own
  worked shape at 0118B (*mare* pro *occidente* ponitur), and it is Latin-for-Latin: the sentence is
  about which word stands where, not about what either means. ⚑ **The reader loses nothing**, because
  Migne's very next sentence uses both words unitalicised and the English translates them there —
  *habitare potuit in valle, sed in torrente* → "could dwell in a valley, but in a torrent".
- `*pronubo,*` (0149A) — *Pro « Ochozath, » **pronubo,** in Hebraeo habetur « collegium amicorum
  ejus, »*. The identical frame ("for X, Y, the Hebrew has Z"), so it takes the identical treatment;
  it is a rival rendering being named, not a gloss.
- `*castra*` (0159B) — *Ubi **castra** posita sunt, in Hebraeo **mahanaim***. Same frame again. ⚑ Note
  that Gn 32:2 itself glosses *Mahanaim, id est, Castra*, so the Latin word here is the object of the
  remark, not its content.
- **Hebrew and Greek stay untouched**: `*Rehobot*`, `*rabooth,*` (0148C) · `*ulam,*` / `*ulam*` /
  `*olam*` (0155B, four spans) · `*monim*` (0157C) · `*theraphim*` ×2 (0158A) · `*mahanaim*` (0159B) ·
  `*Phanuel*` (0160A) · `χρίστος` (0154A). The guilleted `« Satana; »` (0148C) is likewise the Hebrew
  word and is carried in **roman inside the guillemets**, because italicizing it would add an italic
  span the twin does not have.

⚠ **`*olam,*` at 0155B is the PLATE'S reading; our twin prints `*ulam,*`.** See §2 and the patch file.
Jerome's sentence is *Unde ridicule quidam verbum Hebraicum **olam**, nomen urbis esse putant: cum
**ulam** interpretetur prius* — two forms of one word, which the next sentence explicitly pairs
(*verbo ulam vel olam plenae sunt*). The plate's reading is the harder one and it construes.

### (c) `usque ad` — 23 formulas, 5 ordinary, decided per occurrence by the `etc.` splice test

**Formula (italic, immediately following an `etc.`), 23×**, all → ***as far as***, with **no verb, no
object and no antecedent supplied anywhere**: 0147C · 0147D · 0148A · 0148D · 0149A ×2 · 0150C ·
0151B · 0151C · 0154A · 0156C ×3 · 0156D ×3 · 0157A · 0157B · 0159A · 0159D ×2 · 0160A.

**Ordinary Latin (5×), none italic, none after an `etc.`, each rendered by sense:**

| col | Latin | English |
|---|---|---|
| 0147C | *A tempore Christi **usque ad** Constantini tempora* | "**until** the times of Constantine" |
| 0154C | *a terra **usque ad** coelum, a carne **usque ad** spiritum* | "from earth **to** heaven, from flesh **to** spirit" (two in one clause) |
| 0156B | *obediens Patri **usque ad** mortem* (Phil 2:8's words) | "obedient to the Father **unto** death" |
| 0157C | *sic **usque ad** decem vices mutata est conditio* | "**up to** ten times" |

⚑ **0156B is addendum D's trap and it was not swept**: the words are Philippians' own, four lines
below a formula at 0156C, in a paragraph otherwise thick with the abridgment.
⚠ Also present and NOT this word: 0151B *eum **usque in finem** bonis operibus placare* → "unto the
end", and 0148C *et **quousque** verae intelligentiae aqua redeat* → "until", which is the plate's
reading against the twin's non-word *quosque* (§2).

⛔ **0156D's formula prints as `*usque ab*` ON THE PLATE**; our twin reads `*usque ad*`. Read at
600 dpi, p. 83. The tail is unmistakably the formula — it follows `etc.,`, it is italic, and it names
the resumption (*ad unum ergo tendendum*). **Rendered as the formula, "*as far as*"**, with the plate
reading in the patch file. ⛔ **No `[sic:]`**: the marker's content must be verbatim in the twin, and
the twin prints the good word. This is the mirror of the 0019–0023 stint's `uque ad` at 0131C, where
the twin was defective and the plate clean — the same class, running the other way.

### (d) The vocabulary axes — every instance, with the instrument checked before reporting

- **`gentes` family — 20 real occurrences, split by the axis.** **Gentiles** where the
  *Judaei*/*gentes* opposition is live and usually explicit in the same clause: 0149D *populus
  **gentilium*** and *Jacob **gentilem** populum significat* (against *populum Hebraicum*); 0150A
  *electi de **gentibus*** and *praesciens populum **gentium** multo meliorem* (against *populum
  Judaeorum*); 0150B *mater gratia **gentiles** fidem avide suscipientes* (against *Judaei*) and
  *confessionem peccatorum **gentilis** populi*; 0150C *Per unum peccatorem populum **gentium**, per
  nonaginta novem justos, **Judaeos*** ; 0151A *id est **gentiles** conversi*; 0152A *cum intraverit
  plenitudo **gentium**, tunc omnis Israel* and 0153A the same in the Rom 11 quotation; 0153A
  *relicta **Judaea**, transirent ad **gentes***; 0153D *relictis parentibus … id est **Judaeis** …
  abiit in **gentes***; 0158B *Ecclesiam ex **gentibus** conjunxit*; 0159A *tam **Judaeos** quam
  **gentiles***; 0159C *paries de **gentibus**, ei qui ex **Judaeis***.
  **Nations** where the sense is plainly generic — the axis's own named exception: 0148D
  *baptizantes omnes **gentes** in nomine Patris* (Mt 28:19, the axis's own exemplar); 0155A Ps 2:8
  *dabo tibi **gentes** haereditatem tuam*; 0156B *Christus diversarum **gentium** varietatem sibi
  congregavit*.
  **Singular `gens` of a people → nation**: 0148C *apud alienigenam **gentem**  puteos fodit* → "among
  a foreign nation".
  ⚑ **Instrument checked before reporting**, per the series brief: a raw `gent` grep returns 22 hits
  and **two are false** — *intelli**gent**iae* (0148C) and *in**gent**i crimine* (0156C).
- **`natio` — ZERO in this range.** ⚑ A raw `natio` grep returns **six** hits and every one is
  *peregri**natio**ne* (0148C), *ve**natio**ne* ×2 (0150A, 0150B), *alie**natio*** (0152B),
  *machi**natio**nem* / *machi**natio**ne* (0153B, 0153C). There is no `natio` here at all.
- **`turba` — ONE, and it is a real one**: 0149A *amicorum **turbam*** → **"the crowd of friends"**,
  per the axis. ⚑ Instrument checked: it is the only `turb-` in 5,151 words, and there is no
  *turbare* / *perturbatio* in the range — the reverse of the 0019 stint's finding, where nine
  `turb-` hits were *every one* the verb. **So this range exercises the `turba` side and the 0019
  range exercised neither.**
- **`multitudo` ×4 → multitude** in all four (0151A ×2, 0151D, 0159A). The `turba`/`multitudo` pair
  is genuinely exercised here, in one work and one book, and was kept 1:1.
- **`daemonium` — zero; `daemonum` ×1 → demons** (0148A). **`diabolus` ×5 → devil** (0154C, 0158A ×2,
  0158B, 0158B). **`Satanas` → Satan** (0148C the Hebrew word and its accusative, 0159B *post
  Satanam*). ⚠ **0149B prints `zabuli`**, a late form of *diabolus*; rendered **"of the devil"** per
  the axis, no italics and no crux-worthy defect (Pattern 9 — an attested medieval spelling).
  **`ethnicus`, `gentilitas` — zero.**
- **`mysterium` ×1 → mystery** (0151C *prophetiae **mysteria*** → "the mysteries of prophecy");
  **`sacramentum` ×9 → sacrament** (0147C, 0147D, 0148B, 0151A ×2, 0152A, 0152C, 0155D, 0159D). The
  1:1 pair is not exercised in a single phrase here, but both words occur and neither was varied.
- **The commentator's own voice is not archaised** (`dicit` / `ait` / `dicat` → "says", never
  *saith*); `-est` / `-eth` forms appear **only** inside quoted scripture and in second-person
  singular address.
- **Pattern 17.** Singular → *thou*: 0150A *« Sume arma [tua], »* → "Take thy arms"; 0150D
  *« tam cito invenire potuisti, fili mi? »* → "couldst thou find it so quickly, my son?"; 0151D
  *« Det tibi Deus de rore coeli, »* → "God give thee"; 0152A *erit benedictio **tua***; 0152B
  *« Vives in gladio »*, *« Et servies fratri tuo minori »*, *« cum excutias et solvas jugum ejus de
  cervicibus **tuis** »* and the gloss's *deposueris · non servies · vocaberis*; 0152D *« Et fratri
  tuo servies »*; 0153C *Si diligis vitam meam, mitte eum*; 0155A Ps 2:8 *« dabo **tibi** … possessionem
  **tuam** »*; 0158B *« Obliviscere populum **tuum** »*; 0158D *« Timui ne violenter auferres filias
  **tuas** … furti me arguis »* and *non **tibi** manifestavi, ne … superares*; 0159D
  *« appellabitur nomen **tuum** »*.
  Plural → *you*: 0150A *« Si custodieritis mandata mea, dabo **vobis** pluvias »*; 0150C
  *« Ut quid justificatis **vos** coram hominibus »*; 0154C *« In quacunque die comederitis,
  aperientur oculi **vestri** »*; 0153B *poterit esse quod ambo **eritis** interfecti*.
  ⚑ **0153B is worth naming because it mixes them inside one sentence, as the Latin does**:
  *Si invadat **te**, poterit esse quod ambo **eritis** interfecti* → "If he assail **thee**, it may be
  that **you** shall both be slain." Rebecca turns from Jacob to the two brothers mid-clause, and
  Pattern 17 is what makes that visible.
  ⚑ Three plural imperatives are rendered as bare English imperatives, which mark no number, per the
  0019 stint's ruling that Pattern 17 gives *you* and never *ye*: 0148A « Declinate a me, maligni, »
  → « Depart from me, O malignant ones, »; 0152C « Ponite nomen meum super filios Israel. » → « Put my
  name upon the children of Israel. »; 0158C « Surgite postquam sederitis. » → « Rise up after you
  have sat. » *Depart ye* / *Put ye* / *Rise ye* were drafted and withdrawn.

### (e) Heads and frontmatter

`CAPUT XXVI.` → `CHAPTER XXVI.` · `CAPUT XXVII.` → `CHAPTER XXVII.` · `CAPUT XXVII. (cont.)` →
`CHAPTER XXVII. (cont.)` · `CAPUT XXVIII.` → `CHAPTER XXVIII.` · `CAPUT XXIX.` → `CHAPTER XXIX.` ·
`CAPUT XXX.` → `CHAPTER XXX.` · `CAPUT XXXI.` → `CHAPTER XXXI.` · `CAPUT XXXII.` → `CHAPTER XXXII.`
**Numerals mirror the plate**, per the corpus measurement, and all eight heads carry their terminal
period on the plate as in the twin (read at 200 dpi; `CAPUT XXXI.` re-checked at 600 dpi).
**Frontmatter copied VERBATIM from each Latin chunk, field order included**, `words:` figures (which
count the Latin) unaltered. Chunks 0034 and 0035 open with a **bare column anchor on its own line**
(`[0155C]`, `[0157C]`) between the head and the first paragraph; mirrored as its own line.

---

## §2 · ⭐⭐ THE HEADLINE FINDING — our twin has silently NORMALIZED FOUR VERSE ADDRESSES

**This is the largest thing in the stint, it is a class rather than four accidents, and nobody could
have flagged any of it from the Latin alone.**

| col | twin prints | plate prints | the lemma's own verse |
|---|---|---|---|
| 0150B | `VERS. 6-13.` | **`VERS. 5-13.`** | Gn 27:6, *Dixit filio suo Jacob* |
| 0150C | `VERS. 15-19.` | **`VERS. 16-19.`** | Gn 27:15, *Et vestibus Esau* |
| 0150D | `VERS. 20-24.` | **`VERS. 19-24.`** | Gn 27:20, *Quomodo, inquit, tam cito* |
| 0155D | `VERS. 11-16.` | **`VERS. 11-19.`** | Gn 29:11, *Osculatus est eam* |

All four read at 600 dpi with the page's corner numbers checked first (pp. 80 and 83). The digits are
not marginal: on p. 80 the `5` of `5-13` and the `9` of `19-24` are unambiguous against the adjacent
`3-5` and `16-19` set in the same fount on the same page.

⭐ **The direction is uniform, and that is what makes the class credible rather than four misreadings.
In every one of the four, Migne's range OVERLAPS its neighbour or skips a verse, and the twin's is
the tidy, non-overlapping one.** On p. 80 the plate's sequence runs `1,2 · 2 · 3-5 · 5-13 · 14 ·
16-19 · 19-24 · 25,26`; our twin's runs `1,2 · 2 · 3-5 · 6-13 · 14 · 15-19 · 20-24 · 25,26`. On p. 83
the plate runs `11-19 · 16-19`; the twin runs `11-16 · 16-19`. And in three of the four the twin's
number is also the *righter* one against the lemma it heads — which is exactly what an editorial tidy
looks like from the inside.

**The English renders the plate in all four**, on the 0019–0023 stint's ruling at `VERS. 27-19`
(cruces-0019 §2), and for its three reasons unchanged: the locked "plate where read" rule; a verse
address is **content**, not a mark, so the punctuation-follows-the-twin carve-out does not reach it;
and Migne's own printing is not ours to tidy — the series brief's rule for a verse number out of
sequence (Jude printing VERS. 23 before VERS. 21) is this case exactly.

⛔ **No `[sic:]` was available on any of them** — the marker's content must appear verbatim in the
Latin twin, and the twin prints the other numeral. The patch is what makes the two columns agree.

⚑ **What a later stint should carry forward: the cheap detector is an OVERLAPPING or verse-skipping
range in the plate's own sequence.** Our twin never leaves one. Where the twin's addresses partition
the chapter neatly and Migne's neighbours in this book do not, suspect a tidy and read the leaf.
⚠ **Nine other addresses in my range were checked against the plate and AGREE** — 0147C `1-7`,
`8-11`, `12,13`; 0148A `14-16`; 0148B `17`, `18,19`; 0148C `20,21`, `22-25`; 0148D `26-31`; 0149A
`32-35`; 0149B `1,2`; 0149D `2`; 0150A `3-5`; 0150C `14`; 0152A `33-35`; 0152D `36-39`, `40`; 0153A
`41`; 0153B `42`; 0153C `1-9`; 0153D `10`; 0154A `11`, `12`; 0154D `13-15`; 0155A `16,17`, `18`,
`19-21`; 0155B `22`; 0155C `1-10`; 0155D `16-19`; 0156A `20-35`; 0156D `26`, `14-31`; 0157B `32-43`;
0157C `1-11`; 0157D `12`, `13-31`; 0158A `32-39`; 0158D `40-45`, `46-52`; 0159A `53,54`, `55`; 0159B
`2-6`, `7-9`; 0159C `10`, `11-19`, `20-27`; 0159D `28,29`; 0160A `30-32`. **Forty-six checked, four
divergent** — the negatives are what size the finding.

---

## §3 · THE TWO UNPAIRED GUILLEMETS — both MIGNE'S, both plate-read, neither tidied

The brief warns that an open-ended span "may be SHORT of what Migne quotes — read it at the line."
Both were collated at the line, not from the brief.

| col | our twin | the plate | verdict |
|---|---|---|---|
| **0148D** | an orphan **CLOSING** `»`: *…baptizantes omnes gentes in nomine Patris, et Filii et Spiritus sancti [n: (Matth. XVIII)]. » Puteos Abraham,* | the same: `Spiritus sancti (Matth. xviii). » Puteos Abraham,` — **no opening mark anywhere before *baptizantes*** | **MIGNE'S.** Reproduced unopened (Pattern 5's corollary). Read at 600 dpi, p. 79. |
| **0154A** | an unclosed **OPENING** `«`: *« Caput enim viri Christus, caput Christi Deus [n: (I Cor. XI.)]* running to the paragraph's end | the same, and the paragraph ends there: `« Caput enim viri Christus, caput Chrisri Deus (I Cor. xi.)` | **MIGNE'S.** Reproduced unclosed. Read at 600 dpi, p. 82. |

⭐ **0154A is the stint's one open-ended span, and the brief's warning does NOT apply to it: the plate
stops exactly where the twin stops.** The paragraph ends on the siglum, mid-quotation; the next
paragraph opens `VERS. 12.--`. So the brief's rendering of the span is complete, not short. **The
`[n: (I Cor. XI.)]` sits inside the unclosed quotation and is reproduced there.**

⚠ **Both directions occur in one stint, which is the corollary the 0008 and 0019 stints drew from
opposite ends and it is now confirmed a third time**: 0148D is a close without an open, 0154A an open
without a close, and **only the plate separates "Migne's" from "our twin's".** Six further sites in
this range are the other kind — marks our twin **supplies** or **drops** — and every one of those is
OURS (patch file, Part C1/C2). ⛔ **Nothing was repaired**; guillemet parity is checked against the
twin, so the English mirrors the twin at all eight sites.

⚑ **Migne's repeated line-head `«` is dense here — thirteen sites across the five chunks, and our
twin drops every one** (patch file C2). The class the 0000 stint identified; it is not two accidents
in this book, it is his normal practice at a turned line.

---

## §4 · ⚠⚠ 7a″ — THE VULGATE COLLATION. **This is the deliverable.**

Every marked span in these five chunks was collated against `sources/vulgate/clementine-flat.txt` by
grepping the verse, cited **book chapter:verse** — never from memory and never from the brief's
pre-scan. **The spans that AGREE are listed in §4.4**, because a list of divergences alone cannot be
told apart from a report by an agent that only chased the ⚠ marks.

### 4.0 ⛔ THE COMPARAND WAS CHECKED FIRST — the errata class, and what it did and did not touch here

`sources/vulgate/README.md` records that our 2005 *Quasimodo* copy carries typos which **manufacture
divergences shaped exactly like real ones**, and that two were found in a single column of this very
work. **Every one of my six `[var:]` was tested against that class before it was fired**, by the
README's own cheap control — grep the *phrase*, not the word, and look for a correctly-spelled twin
elsewhere in the file:

| marker | could our copy have manufactured it? | control run |
|---|---|---|
| 0147D *Seminavit* / **Sevit** | **No.** Not a single-letter shape — two different verb stems. | *sevit* occurs once (this verse), *seminavit* three times elsewhere; the frequency is the *trienem* shape, **but a slip cannot turn *seminavit* into *sevit***, and the Douay's "sowed" confirms a *serere* form is the Clementine's text. |
| 0150C *Ut quid justificatis* / **Vos estis qui justificatis** | **No.** Three words for two. | `justificatis vos` occurs exactly once in the whole file, at Lc 16:15, in the form quoted. |
| 0152A *et benedictus est* / **et erit benedictus** | **No.** A whole clause. | `erit benedictus` occurs once, at Gn 27:33, well-formed; and **Migne prints the Vulgate's own form himself at 0152D**, eleven lines below. |
| 0152B *Et servies fratri tuo minori* / **et fratri tuo servies** | **No.** Word order plus an added word. | **Migne prints the Vulgate's form himself at 0152D.** |
| 0152C *Ponite* / **Invocabuntque** | **No.** A whole clause. | the formula *invocatum sit / est nomen meum super* recurs twice elsewhere in the file, so the verb family is not a transcription artifact. |
| 0160A *Vidi Dominum* / **Vidi Deum** | **No.** A lexical substitution, not a letter. | `facie ad faciem` occurs **six** times in the file; Gn 32:30 reads *Deum*, and — ⚑ **the `⚑ MATCHES ONLY ELSEWHERE` shape in miniature** — Jdc 6:22 reads *vidi angelum **Domini** facie ad faciem*, which is where Migne's word does live in the Clementine, in another book. |

⭐ **Two of the six carry their control INSIDE MIGNE'S OWN COLUMN** (0152A and 0152B, where he prints
the Vulgate form of the same verse at 0152D), which is stronger evidence than any grep: the
divergence is demonstrably a fact about his two settings of one verse, not about our comparand.

### 4.1 The six `[var:]` fired — all on columns read at the plate this session

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| **0147D** | « **Seminavit** autem Isaac in terra illa, » | **Gn 26:12** ***Sevit** autem Isaac in terra illa* | ⭐⭐ **7a″'s own case: the exposition uses the lemma's word and not the Vulgate's.** Jerome's very next clause is *Licet in aliena terra **seminaverit** Isaac* — the gloss is built on Migne's verb. Plate-confirmed (p. 79). |
| **0150C** | « **Ut quid** justificatis vos coram hominibus, » cited *Luc. XVI* | **Lc 16:15** ***Vos estis qui** justificatis vos coram hominibus* | a whole clause replaced, and it changes the sentence type: Christ's identification of the Pharisees becomes a reproach put as a question. The citation is correct. Plate-confirmed (p. 80). |
| **0152A** | « **Et benedixi eum, et benedictus est.** » | **Gn 27:33** ***benedixique ei, et erit benedictus*** | construction and **tense**: the perfect for the future, in the sentence the gloss calls *confirmabat benedictionem*. ⭐ **And Migne prints the Vulgate's future himself at 0152D** — *ait, « Benedixi, et **erit benedictus**. »* — in the very paragraph that reads the blessing as prophecy (*per spiritum prophetiae*). Two settings of one verse, eleven lines apart, and the argument turns on the futurity. |
| **0152B** | « Et servies fratri tuo **minori**, » | **Gn 27:40** *et **fratri tuo servies*** (no *minori*) | ⭐ **the added word is the allegory.** Migne glosses it *id est, populo Christiano*, and *minori populo Christianorum* stands nine lines above. And he prints the bare Vulgate form at 0152D. |
| **0152C–D** | « **Ponite** nomen meum super filios Israel. **Ego Dominus** benedicam **eos**. » | **Nm 6:27** ***Invocabuntque** nomen meum super filios Israel, **et ego** benedicam **eis*** | ⭐ **the gloss rests on the imperative.** Migne introduces it *in Numeris **ad Mosen et Aaron sacerdotes** dicitur*, and draws from it *Sacerdotis est benedicere, Dei effectum tribuere* — a command to the priests, which the Vulgate's future indicative about the priests is not. |
| **0160A** | « Vidi **Dominum** facie ad faciem? » | **Gn 32:30** *Vidi **Deum** facie ad faciem* | ⭐ **it sits at the pivot of the *quaestio*.** Gregory's question is built on the clash with *« Deum nemo vidit unquam »* two clauses earlier — which Migne quotes with **Deum** — so his own paragraph sets the two words side by side and the verbal clash the argument needs is blunted by the lemma. |

### 4.2 DIVERGENT and DECLINED ON THE MERITS — every one on a read column, so the marker was available

**These are the ones a blind reader will find, so each says why it was refused.**

- **0148A « Ob haec invidentes, »** — **Gn 26:14** *Ob **hoc** invidentes ei Palaestini*. One
  demonstrative, neuter plural for neuter singular; no English exponent worth the name ("for these
  things" / "for this") and nothing in Isidore's Christ-and-the-wells allegory rests on it. Declined.
- **0148A « Puteos et obstruxerunt, »** — **Gn 26:15** *omnes **puteos**, quos foderant servi patris
  illius Abraham, illo tempore **obstruxerunt***. A clipped lemma with the two ends spliced by *et*;
  convention 3's own shape. Declined, and the English renders the splice as printed.
- **0148A « Declinate a me, maligni, et scrutabor mandata Domini. »** cited *psal. CXVIII* —
  **Ps 118:115** *…et scrutabor mandata **Dei mei***. A divine name for a divine name, and the
  possessive dropped. **Refused on the merits**: Gregory adduces the verse for the *turning away of
  the malignant*, and neither *Domini* nor *Dei mei* does any work in the sentence. Firing here would
  spend the marker on noise. ⚠ The nearest of this stint's declines to the line **in the fired
  direction** — a real, two-word difference in a directly adduced proof-text — and it is recorded at
  length for that reason.
- **0148C « Ipse aedificavit Niniven »** — **Gn 10:11** *…egressus est **Assur**, et aedificavit
  Niniven, **et plateas civitatis***. Migne's *Ipse* stands for *Assur*. **Declined because it is not
  offered as the text**: he introduces it *Unde probatur illud quod **supra cap. X dictum est***, so
  it is the gloss's own back-reference to its own earlier exposition, not a proof-text. The stint 1
  precedent at 0081A, exactly.
- **0149C « Vade ad gregem et affer mihi duos haedos optimos; »** — **Gn 27:9** *et ***pergens** ad
  gregem*, affer mihi duos haedos optimos*. An imperative for a participle. Identical sense, and
  Hippolytus's point is only that Rebecca commands. Declined.
- **0149D–0150A « Si custodieritis mandata mea, dabo vobis pluvias temporibus suis, »** —
  **Lv 26:3–4** *Si **in praeceptis meis ambulaveritis, et** mandata mea custodieritis, **et feceritis
  ea**, dabo vobis pluvias temporibus suis*. Two clauses cut out of the protasis. **Declined**: Migne
  introduces it with a bare *sed:* and no citation at all, closes it with *etc.*, and the omitted
  clauses are not what he adduces it for (*quae pertinent ad carnis delicias*). A signalled
  abridgment.
- **0150A « Jacob simplex habitabat in tabernaculis, »** — **Gn 25:27** *Jacob **autem vir** simplex
  habitabat in tabernaculis*. A connective and a noun. Nothing rests on either. Declined.
- **0151D–0152A « Convertentur ad vesperam … et **circumibunt** civitatem. »** cited *psal. LVIII* —
  **Ps 58:7 and 58:15** (the Clementine prints the verse twice, identically) *…et **circuibunt**
  civitatem*. **Two attested forms of one verb** (*circumeo*), not a divergence; recorded as
  orthography, like *coelum* for *caelum*.
- **0152A « Aperuerunt ora sua, sicut comedens in abscondito. »** introduced *Et alibi:* — ⛔ **no
  Vulgate verse carries these words.** The nearest are **Ps 21:14** *Aperuerunt super me os suum,
  sicut leo rapiens et rugiens* and **Hab 3:14** *sicut ejus qui devorat pauperem in abscondito*; the
  sentence is a conflation of the two. **`[var:]` has no single received reading to name**, and Migne
  gives no citation. Declined and recorded — the 0019 stint's *Psal. X* precedent.
- **0152C « magnum sacramentum in Christo et in Ecclesia. »** — **Eph 5:32** *Sacramentum hoc magnum
  est, ego autem dico in Christo et in Ecclesia*. The verse's own words re-jointed into Migne's own
  clause (*quod est …*), not a quotation offered as the text. Declined.
- **0153A « plenitudo gentium intraverit, omnis Israel salvus fiet »** cited *Rom. XI* —
  **Rom 11:25–26** *donec plenitudo gentium **intraret**, et sic omnis Israel salvus **fieret***. The
  moods are re-jointed into the host *ut cum* construction. Declined; the same words appear
  unquoted at 0152A in a third form (*intraverit … salvus erit*), which is Migne paraphrasing himself.
- **0153A « dixit Esau in corde suo, »** — **Gn 27:41** *dixit**que** in corde suo* (the subject is
  implicit). Migne's second lemma supplies *Esau* and drops the enclitic. **Declined as a clipped
  lemma with the subject supplied for the address** — the 0019 stint's *« Vocavit autem Agar. »*
  shape; and Diodorus's gloss is entirely about the *heart*, not about who. Recorded.
- **0153C « Dixit quoque Rebecca, »** — **Gn 27:46** ***Dixitque** Rebecca ad Isaac*. A connective and
  a dropped prepositional phrase. Declined.
- **0153D « Profectus vero. »** — ⛔ **no Vulgate verse.** Gn 28:5, which the lemma heads, reads
  *Cumque dimisisset eum Isaac*; the nearest words are **Gn 29:1** *Profectus **ergo** Jacob*, which
  is the next chapter's opening and this same stint's own lemma at 0155C. Migne uses it as a
  catchword. `[var:]` has no received reading to name. Declined and recorded.
- **0154A « Caput enim viri Christus, caput Christi Deus »** cited *I Cor. XI* — **1 Cor 11:3**
  ***omnis** viri caput, Christus **est** : **caput autem mulieris, vir** : caput vero Christi, Deus*.
  Migne drops *omnis* and *est*, reorders the first limb, and cuts the *mulieris* clause out of the
  middle. **Declined**: the omission is an abridgment of a clause Isidore has no use for — his
  argument needs only *caput Christi Deus*, which stands verbatim — and *enim* shows the quotation
  has been jointed into his own sentence. ⚠ **This is the open-ended span (§3)**, so the reader meets
  it unclosed; recorded prominently for that reason.
- **0154C « In quacunque die comederitis, aperientur oculi vestri »** cited *Gen. III* — **Gn 3:5**
  *quod in **quocumque** die comederitis **ex eo**, aperientur oculi vestri*. *dies* is common gender,
  so *quacunque* is not an error; *-cunque* for *-cumque* is Migne's orthography throughout; and the
  dropped *ex eo* is what the *etc.*-less clip cuts. Declined on all three counts.
- **0154C « Vidit in somnis, »** — **Gn 28:12** *Vidit**que** in somnis*. An enclitic, in a second
  lemma picking up the verse lemma four paragraphs above (which carries it). Declined — the 0019
  stint's *Percusseruntque* shape, running the other way.
- **0155A « lapidem quem capiti supposuerat »** — **Gn 28:18** *tulit lapidem quem **supposuerat
  capiti suo***. Word order and a dropped possessive. Declined; Augustine's *quaestio* is about the
  anointing, not about whose head.
- **0155B « quam terribilis est locus iste, »** — **Gn 28:17** *Quam terribilis est, **inquit**, locus
  iste!* A parenthetic speech-tag dropped, and Migne quotes it under *Ab eo quod dictum est* — i.e.
  expressly as a report of what was said, where a speech-tag is redundant. Declined.
- **0155B « Et lapis iste, vocabitur domus Dei, »** — **Gn 28:22** *et lapis iste, **quem erexi in
  titulum**, vocabitur Domus Dei*. An inner clause cut with no ellipsis printed. **Declined**: the
  cut clause is the one Migne has just expounded at length at 0155A (*Quod « erexit » Jacob,
  « lapidem quem capiti supposuerat » in titulum*), so nothing is concealed and nothing rests on it.
- **0156D « Zelabat Rachel sororem suam. »** cited *infra XXX* — **Gn 30:1** *Cernens autem Rachel
  quod infecunda esset, **invidit sorori suae***. A different verb and a different construction
  (accusative for dative); probably the Old Latin. ⚠ **The nearest of the declines to the line in this
  chunk, and it is refused on the 0019 stint's own bar: the sense is identical** — *zelare* and
  *invidere* both give "was jealous of / envied her sister" — and the argument that would rest on it
  is inside the abridgment's cut, so it cannot be shown to rest on it. Recorded.
- **0158C « Juxta consuetudinem feminarum accidit mihi. »** — **Gn 31:35** *quia juxta consuetudinem
  feminarum **nunc** accidit mihi*. One adverb. Declined.
- **0158D « Ut oscularer filios meos ac filias. »** — **Gn 31:28** *ut oscularer filios meos **et**
  filias*. A connective. Declined.
- **0158D « Dixitque Jacob fratribus suis: Afferte lapides. »** — **Gn 31:46** *dixit**que** fratribus
  suis : Afferte lapides* (the subject is implicit). Migne supplies *Jacob*, and does so **in a
  sentence whose whole point is that Scripture calls kinsmen brethren** — so the supplied name is
  serving his argument, not replacing the text's. Declined and recorded.
- **0158D « Die noctuque aestu urebar, et gelu. Fugiebat somnus ab oculis meis. »** — **Gn 31:40**
  *die noctuque aestu urebar, et gelu, **fugiebatque** somnus ab oculis meis*. An enclitic, and a full
  stop where the Vulgate has a comma. Both declined (the mark is Migne's and rides as printed).
- **0159A « Juravit Jacob, »** — **Gn 31:53** *Juravit **ergo** Jacob*. A connective. Declined.
- **0160A « et benedixit eum, vocavitque Jacob nomen loci illius Phanuel, dicens, »** —
  **Gn 32:29–30** *et benedixit **ei in eodem loco**. Vocavitque Jacob nomen loci illius Phanuel,
  dicens*. Migne joins the two verses, cuts *in eodem loco*, and puts *eum* for *ei*. **Declined**:
  he introduces it *Illud quoque quod sequitur*, i.e. expressly as a continuation being summarized,
  and the gloss is entirely about the name *Phanuel*, which is verbatim.
- **0160A « Nemo videbit faciem meam; »** attributed only to *Veritas* — **Ex 33:20** reads *Non
  poteris videre faciem meam : non enim videbit me homo et vivet*. Migne's clause is a conflation of
  that verse's two limbs. **Declined**: he prints no citation at all, so a `[var:]` would have to name
  a verse he does not cite — the 0019 stint's *Psal. X* precedent again. ⚠ **Recorded at length
  because the clause is the pivot of Gregory's *quaestio***, and because the neighbouring lemma in the
  same sentence DID take a marker (§4.1, 0160A): the two were weighed together and separated on
  whether Migne names the source.
- **0160A « Tunc cognoscam sicut et cognitus sum. »** cited *I Cor. XIII* — **1 Cor 13:12** *tunc
  **autem** cognoscam sicut et cognitus sum*. One function word, and the citation is correct.
  Declined.

### 4.3 Divergences Migne LABELS as a rival version — no `[var:]` by construction

Convention (i), settled by the 0008 stint. **Nine instances in this range**, which is the second
heaviest concentration in the work after the 0095–0106 block's twelve:

- **0147D « Invenit in illo anno centuplum aestimatum. »** — *quod habetur in Hebraeo, et **quod
  Aquila transtulit***. (Gn 26:12 has *invenit in **ipso** anno centuplum*, without *aestimatum*.)
- **0148C « adversum et contrarium, »** — ***Aquila et Symmachus … transtulerunt***.
- **0148C « Satana; »** — ***sed in Hebraeo habetur***.
- **0149A « collegium amicorum ejus, »** — ***in Hebraeo habetur***.
- **0149A–B « et venerunt pueri Isaac … Non invenimus aquam. Et vocavit nomen ejus Juramentum. »** —
  ***Nescio quomodo in LXX***. ⭐ **The divergence IS the sentence's subject**: the Vulgate has
  *Invenimus aquam* and *appellavit eum Abundantiam*, and Jerome's whole complaint is that the LXX's
  negative will not yield the etymology (*non congruit ut Isaac aquam non inveniret*). A `[var:]`
  would tell the reader what the paragraph already argues.
- **0153D « Vade in Mesopotamiam in domum Bathuel, »** — ***Quod habent Latini codices***.
- **0153D « Fuge in Mesopotamiam, »** — ***Graeci habent***. (Gn 28:2 reads *sed vade, et proficiscere
  in Mesopotamiam Syriae, ad domum Bathuel patris matris tuae*, so both of Migne's forms diverge; he
  is comparing the two witnesses and both are announced.)
- **0157C « decem annis: »** — ***Septuaginta posuerunt***.
- **0158A « figuras, » / « imagines »** — ***quod Aquila … interpretatur***.

⚑ **And one that is not scripture at all: 0157D « Bis gravidae pecudes. »** is **Virgil**,
*Georgics* II.150, and Migne says so in the same breath (*sed lege Virgilium, in quo dicitur*). No
Vulgate comparand exists and none was sought.

### 4.4 Lemmata collated and found to AGREE with the Clementine — recorded, per 7a″

**Gn 26**: 26:1 (« Orta autem fame super terram, ») · 26:8 (« Cumque pertransissent, » ·
« Vidit eum jocantem, ») · 26:17 (« Et ille discedens, ») · 26:18 (« Fodit **alios** puteos, » —
the **plate's** reading agrees verbatim; the twin's *alio* is our corruption, §6) · 26:20
(« Adversus pastores, ») · 26:22 (« Latitudo. » · « Nunc dilatavit, ») · 26:26 (« Ad quem locum, » ·
« Ochozath, » · « Abimelech, et Ochozath, ») · 26:32 (« Ecce autem venerunt. »).
**Gn 27**: 27:1 (« Senuit autem Isaac, » · « Vocavitque Esau. ») · 27:3 (« Sume arma, ») · 27:6
(« Dixit filio suo Jacob: Audivi patrem tuum loquentem, ») · 27:14 (« Paravit illa cibos, ») · 27:15
(« Et vestibus Esau, ») · 27:20 (« Quomodo, inquit, tam cito invenire potuisti, fili mi? » —
**verbatim, including Migne's question mark, which is the Vulgate's own**) · 27:25 (« Quos cum
oblatos comedisset, ») · 27:27 (« Benedicens, ait, » clipped of *illi* · « Ecce odor filii mei sicut
odor agri pleni. ») · 27:28 (« Det tibi Deus de rore coeli, » · « Abundantiam frumenti, ») · 27:30
(« Venit Esau, ») · 27:33 (« Expavit Isaac. » ×2 · « Benedixique ei, » · « Benedixi, et erit
benedictus. ») · 27:39–40 (« In pinguedine terrae, et in rore coeli desuper erit benedictio tua. » —
**exact, and it spans the verse division** · « et in rore coeli, ») · 27:40 (« Vives in gladio: » ·
« Tempusque veniet, cum excutias et solvas jugum ejus de cervicibus tuis; » **verbatim** · « Et fratri
tuo servies, » **verbatim** · « Tempusque veniet, cum excutias et solvas jugum ejus. » ·
« Tempusque veniet, ») · 27:36 (« Juste vocatum est nomen ejus Jacob: Supplantavit enim me, ») ·
27:41 (« Dixitque in corde suo. » · « Venient dies luctus, ») · 27:42 (« Nuntiata sunt haec
Rebeccae, » · « Nuntiata sunt haec. » · « Quae mittens et vocans Jacob, ») · 27:45 (« Cur utroque
orbabor filio? » — **including the Vulgate's own question mark**) · 27:46 (« Taedet me, » · « Si
acceperit Jacob uxorem, »).
**Gn 28**: 28:1 (« Vocavit itaque Isaac, ») · 28:10 (« Igitur egressus Jacob, ») · 28:11 (« Tulit de
lapidibus, ») · 28:12 (« Viditque in somnis, ») · 28:13 (« Ego sum Dominus Deus Abraham, ») · 28:16
(« Cumque evigilasset, ») · 28:18 (« Surgens ergo, » · « erexit ») · 28:19 (« Appellavitque nomen
urbis Bethel, » — the twin's extra period is ours, §6).
**Gn 29**: 29:1 (« Profectus ergo Jacob, ») · 29:2 (« Vidit puteum in agro, » · « Lapidem. ») ·
29:11 (« Osculatus est eam. ») · 29:16 (« Nomen majoris Lia, ») · 29:20 (« Servivit ergo Jacob pro
Rachel septem annis. » **verbatim** · « Et videbantur illi pauci dies, ») · 29:26 (« Non est in loco
nostro consuetudinis, »).
**Gn 30**: 30:14 (« Egressus autem Ruben, » ×2, the second with Migne's *etc.* inside the guillemets) ·
30:32 (« Gyra omnes greges tuos, »).
**Gn 31**: 31:1 (« Postquam autem audivit, ») · 31:7 (« Mutavit mercedem, » · « mutavit mercedem meam
decem vicibus, » **verbatim**) · 31:12 (« Vidi enim omnia, ») · 31:13 (« Nunc ergo surge. ») · 31:19,
31:32 (« idola ») · 31:21 (« Contra montem Galaad, ») · 31:23 (« Qui, assumptis fratribus suis,
persecutus, ») · 31:31 + 31:32 (« Timui ne violenter auferres filias tuas, quod autem furti me
arguis, » — **both halves verbatim; the join across the verse division is Migne's**) · 31:32
(« Ignorabat quod Rachel furata esset idola. » **verbatim**) · 31:42 (« Et timor, ») · 31:46
(« Afferte lapides, ») · 31:55 (« Laban vero de nocte, etc. »).
**Gn 32**: 32:2 (« Castra Dei sunt haec. » **verbatim**) · 32:7 (« Timuit Jacob, ») · 32:9 (« Deus
patris mei Abraham, ») · 32:10 (« Transivi Jordanem, ») · 32:11 (« Erue me de manu, ») · 32:20
(« Placabo illum, ») · 32:24 (« Et ecce vir, ») · 32:28 (« Nequaquam, inquit Jacob, appellabitur
nomen tuum, sed, » — ⭐ **the WORDS agree with Gn 32:28 exactly; only Migne's commas differ**, see
§5.3) · 32:30 (« Vocavitque Jacob, » · « Phanuel, »).
**New Testament and Psalms**: Gn 2:24 (« duo in carne una, » · « Erunt duo in carne una, ») ·
Gn 25:23 (« major serviet minori: ») · Ps 109:7 (« De torrente in via bibet. ») · Ps 18:5 (« in omnem
terram exivit sonus eorum, » **exact**) · Mt 2:5 (« In Bethlehem. » clipped of *Judae*) · Lc 15:7
(« Gaudium erit in coelo super uno peccatore poenitentiam agente, » clipped of *Dico vobis quod
ita*) · Rom 9:25 (« Vocabo non plebem meam, » **exact as far as it runs**) · Ps 33:9 (« quoniam
suavis est Dominus. ») · Gal 4:4 (« factum ex muliere, factum sub lege, » **exact**) · Jo 14:6
(« Ego sum via, ») · Ps 2:8 (« Postula a me, et dabo tibi gentes haereditatem tuam, et possessionem
tuam terminos terrae. » **exact**) · Mt 20:28 (« filius hominis non venit ministrari, sed
ministrare » clipped of *Sicut*) · Jo 10:11 (« Ego sum pastor bonus. » **exact**) · Act 8:33
(« generationem ejus quis enarrabit? » **exact, with the mark**) · 2 Cor 11:14 (« transfigurat se in
angelum lucis. ») · Ps 44:11 (« Obliviscere populum tuum, ») · Ps 126:2 (« Surgite postquam
sederitis. » **exact**) · Ps 31:1 (« Beati quorum remissae sunt iniquitates, et quorum tecta sunt
peccata. » **exact**) · Jo 1:18 (« Deum nemo vidit unquam, » — *unquam* for *umquam* is orthography).

⚠ **`coelum` for *caelum* is orthography, not divergence**, throughout, and is not listed as one; so
are *Hierosolyma*, *Mesopotamia*, *Idumaei*, *Chanaan* and the `-cunque` / `-cumque` alternation.

### 4.5 Three citation sigla that point elsewhere — reproduced verbatim, uncorrected

Pattern 14 marks the **text**, not the citation; `refDisplay` keeps what Migne prints. Recorded here
so the index's `unparsed` bucket has an account of them:

- **0148D `[n: (Matth. XVIII)]`** on *baptizantes omnes gentes in nomine Patris, et Filii et Spiritus
  sancti* — the words are **Mt 28:19**. Matthew XVIII carries nothing of the kind.
- **0153D *secundum illud Oseae II*** on « Vocabo non plebem meam, » — the wording is **Rom 9:25**'s
  verbatim (Paul quoting Hosea); **Os 2:24** reads *Et dicam Non populo meo : Populus meus es tu*, and
  Os 1:9 *Voca nomen ejus, Non populus meus*. Migne cites the ultimate source and quotes the
  proximate one.
- **0158C *Unde psal. XIII*** on « Beati quorum remissae sunt iniquitates » — the verse is **Ps 31:1**
  (also Rom 4:7). Ps 13 carries neither the words nor the sense.

Same treatment as the 0008 stint's *Joan. V* for Job 5:3 at 0103B and the 0019 stint's *Marci XIX*
at 0131A. **No marker**; the note rides verbatim.

---

## §5 · THE DECLINED LIST — suspect readings, what settles each, and the page that settles it

**Twenty-six suspect readings. One fired; twenty-five declined.** The rule this stint worked to, stated once: a
`[sic:]` accuses Migne's type, its content must be verbatim in our twin, and **our Latin is not the
printed page.** On 9004 translating agents' "probably our-file" calls were right 5 times and wrong 9;
here **the plate decided every one, and it went both ways — nine ours, seven his, one shared, three
neither.** No call in this section rests on a corpus-frequency argument.

### 5.1 Non-words in the TWIN — all NINE are OURS, settled at the plate

| col | twin reads | plate reads (600 dpi) | settling page | English |
|---|---|---|---|---|
| 0148B | *Fodit **alio** puteos* | **`alios`** | p. 79 | "other wells" |
| 0148C | *et **quosque** verae intelligentiae* | **`quousque`** | p. 79 | "until" |
| 0155A | *nihil fecit **idolol triae** simile* | **`idololatriae`** | p. 83 | "like to idolatry" |
| 0151A | *benedic**i**tur* | **`benedicetur`** | p. 81 | "shall be blessed" |
| 0151B | *benedic**i**tur* | **`benedicetur`** | p. 81 | "shall be blessed" |
| 0151B | *Alter **ad** venandum mittitur* | **`Alter venandum mittitur`** | p. 81 | "The one is sent to hunt" |
| 0154A | *Gr**e**ce* | **`Graece`** | p. 82 | "in Greek" |
| 0155B | *verbum Hebraicum **ulam,*** | **`olam,`** | p. 83 | the span reads ***olam,*** |
| 0158C | *remiss**ae*** | **`remisse`** | p. 84 | "are forgiven" |

⚑ **`idolol triae` is 7a⁗-b's dangerous shape and it very nearly cost the sentence its subject.**
Quarantining it under Pattern 10 would have taken the whole lexeme out of *nihil fecit **idololatriae**
simile* and left the English asserting that Jacob did nothing like to nothing — a page with a hole
exactly the size of the thing Augustine is denying. **It was not quarantined, because it is not
Migne's**, and the plate settles that in one look.

⚑ **`benedicitur` twice for `benedicetur` is the tidiest instance of brief §4 in the range**: a present
indicative standing where the plate has a future, twice in one column band, in a passage where the
neighbouring *dicitur* makes the present read perfectly. **No corpus check could have raised it and
none did** — it was found by reading the plate for a different word four lines away, which is
addendum C exactly.

⚑ **`Alter ad venandum` is the other direction of the same class**: our twin has **supplied** a
preposition Migne does not print. Nothing about the English changes; the Latin column does.

### 5.2 Non-words on the PLATE — SEVEN, all normalized away by our twin, none markable

`pertradsissent` for *pertransissent* (0147C) · `phi-`/`sophi` for *philosophi* (0148D) ·
`mediatabatur` for *meditabatur* (0149C) · `Chrisri` for *Christi* (0154A) · `menbra` and `illus` for
*membra illius* (0154B) · `*usque ab*` for the formula (0156D) · `apperuit` for *aperuit* (0148D,
arguably an attested medieval doubling rather than a defect — Pattern 9).

All read at 600 dpi on pp. 79, 80, 82 and 83. **These are Migne's, and they are exactly the class
brief §4 warns cannot be seen from the Latin alone** — our file prints seven perfectly good words.
**Each becomes a live `[sic:]` after the patch lands; none is one now**, because the
verbatim-substring guard would reject it and rightly.

### 5.3 What was checked and found NOT to be a defect

- **0156A *cooperata*** — *quia lex per Mosen data **cooperata** est et signata*, of Lia's blear eyes.
  A real word (from *cooperari*) that will not construe with *signata*; the sense the argument wants
  is plainly *cooperta*, "covered", which pairs with "sealed" and with "blear-eyed". **Read at 600 dpi
  on p. 83: the plate reads `cooperata`, agreeing with the twin.** Addendum A's rule is that a real
  word that reads oddly is Migne's until a plate says otherwise, and here the plate says it IS his.
  **Rendered as printed — "was wrought together and sealed" — and the conjecture is here, not in the
  text.** ⛔ **No `[cj:]`**: Pattern 18's bar is that the printed word make the sentence assert
  something the author is arguing *against*, and this one makes it assert very little; 18a's own
  boundary (a sentence too vague to assert is not the marker's business) governs.
- **0154A *Caput autem Christus Deus.*** — both nominatives, where the quotation two lines later has
  the genitive *caput Christi Deus*. **Rendered "But the head is Christ God"**, which is what the
  words say and what the argument needs (the stone is the humanity; the head is Christ as God; hence
  *humanitatem Christi conjunctam Deo assumenti*). Plate agrees with the twin. Logged because the
  parallel invites a silent slide into "the head of Christ is God", which would be a different claim.
- **0149B *Teneri scilicet et humani, docibiles scilicet et innocentis animae.*** — a verbless
  apposition in which *docibiles* is nominative or accusative plural among three genitive singulars.
  **Rendered as printed**, "That is, of a tender and human, that is, of a teachable and innocent
  soul." English adjectives carry no case, so Pattern 9 governs and there is nothing to mark. Plate
  agrees.
- **0149B *Sermo Dei, repromissionis benedictio, et spes regni futuri, in quo cum Christo sunt
  regnaturi, et verum sabbatum celebraturi.*** — a sentence with no main verb. Rendered as the
  verbless apposition it is; the abridgment, not a defect. Plate agrees.
- **0158C *quae avaritiae immunditia **non** viriliter currentes impedit, sed effeminate gradientes …
  resolvuntur*** — a singular active verb answered by a plural passive across the *sed*. **Rendered
  as printed**, anacoluthon intact. Plate agrees with the twin.
- **0159D–0160A the *Nequaquam, inquit Jacob* commas.** ⚠ **The one place in the stint where Migne's
  pointing and Migne's words pull in opposite directions.** Gn 32:28 makes *Jacob* the predicate —
  "thy name shall not be called **Jacob**, but Israel" — and Migne's **words agree with the Vulgate
  exactly**. But his commas enclose *inquit Jacob*, which reads "**says Jacob**", making Jacob the
  speaker of a sentence the angel speaks. **The English renders the words on the verse's construal —
  « By no means, he says, shall thy name be called Jacob, but, »** — and keeps four commas against
  his four, in the same slots. ⛔ **No `[var:]`**: Pattern 14 marks the text, and the text is not in
  dispute. ⛔ **No emendation either**: nothing is added, moved or dropped, and Latin word order does
  not bind *Jacob* to *inquit* — only the 19th-century pointing suggests it. **The rival construal is
  named here, and it loses because the verse, the speaker and the following gloss (Jerome on why the
  ANGEL named him Israel) all decide against it.**
- **0155B « Appellavitque nomen urbis Bethel., »** — our twin prints a **spurious extra period**
  before the comma; the plate prints `Bethel,`. A **mark**, so convention (ii) governs and the
  English follows the twin: « And he called the name of the city **Bethel.,** ». ⚠ **Recorded
  prominently because a blind reader will meet it and read it as ours.** It is ours, but the English
  is right to carry it. Patch filed.
- **0159B *in Hebraeo `*mahanaim*` ;*** — the floating space before the semicolon is where Corpus
  Corporum has dropped Migne's Hebrew (§7). Mirrored.
- **0152B — a bracket-shaped sort on the plate before *de cervicibus tuis***, one of five such marks
  across pp. 81–84 (also 0157C, 0157D, 0158C ×2). **Not carried by our twin and not carried by us.**
  Almost certainly broken furniture in this printing rather than intended brackets; recorded as a
  class in the patch file so a later reader is not surprised by them.
- **0157A *fecunditatem. pariat*** on the plate (a period mid-clause) and **0159C *facienda !sunt***
  (a stray exclamation). Marks; the twin carries neither; the English follows the twin.

### 5.4 Unexpressed subjects supplied — every one named, with what decided it

- **0148D *et aqua omnibus ostenderunt*** — *ostenderunt* has no object. **Rendered "and by water
  showed [it] to all"**, with the supplied word in brackets (corpus practice). The candidates were
  *aquam* (an accusative lost, giving "showed the water to all") and taking the participial clause as
  the object. ⛔ **Neither was chosen silently**: the bracket marks the supply, and *aqua* is rendered
  as the ablative Migne prints. Plate agrees with the twin.
- **0148D *Puteos Abraham, quos aperuit, sic vocavit sicut pater ejus*** — supplied **"he" = Isaac**,
  from Gn 26:18's own subject and from the paragraph's *Dilatatus est **Isaac***. The alternative
  ("Abraham") is excluded by *sicut pater ejus*.
- **0150A *Rebecca diligebat Jacob, Isaac Deum;*** — supplied **"[signifies]"**, in brackets, not a
  pronoun: *Isaac Deum* is verbless and must be read as the allegorical equation, because the
  paragraph's own scheme two columns earlier is *Isaac vero **Deum** [significat], qui utrumque
  populum … sibi filios fecit* (0149D). Reading it as "Isaac loved God" would break the parallel with
  *Rebecca autem praescientiam Dei figurat* in the next clause.
- **0150C *peccata praeterita ante oculos mentis saepe producit*** — the resumption tail of an
  abridgment whose subject is inside the cut. **Rendered with a bare "it"**, which is as open as the
  Latin. ⛔ **Not named** — the 11613 class, and naming it would be a guess wearing Isidore's voice.
- **0151A *virtutem resurrectionis et regni aperte pronuntiat*** — supplied **"he" = Isaac**, from
  *Quia post esum sequitur benedictio, et **ejus** odore perfruitur* and from *Quaerit **Isaac** a
  Jacob* four lines above. The rival (Christ) is excluded because the enjoying of the odour is
  Isaac's act in Gn 27:27.
- **0151D *per quosdam in contemplationem surgit, per quosdam in activae vitae opera pinguescit*** —
  again a resumption tail. **Bare "it"**; the likeliest antecedent is the Church, but Gregory's
  sentence is inside the cut. Not chosen.
- **0152D *allusit ad nomen*** — supplied **"he" = Esau**, who speaks Gn 27:36 (*Juste vocatum est
  nomen ejus Jacob: Supplantavit enim me*), and whose grievance the whole sentence explains.
- **0155A *nihil fecit idololatriae simile*** — supplied **"he" = Jacob**, named as the subject of
  *erexit* in the same sentence.
- **0158D *More Scripturae filios ac filias Jacob suos appellat*** — supplied **"he" = Laban**, from
  the lemma directly above (« Ut oscularer filios meos ac filias. », Laban's own speech at Gn 31:28).
  The rival subject, *Scriptura*, is excluded because *quae … appellat* immediately follows with
  Scripture as its own subject — Migne distinguishes the two in one sentence.
- **0159B *et pulchre ad fratrem inimicum iturus … excipitur*** — **"he" = Jacob**, from the lemma.
- **0159C *et tunc post illam afflictionem adesset, et quem promisit, impleret*** — ⚠ **the one place
  two readings both construe.** The subject of *adesset* and *impleret* could be God (who would be
  present after the affliction and fulfil his promise) or Jacob. **Rendered "he" throughout, so the
  ambiguity the Latin has is the ambiguity the English has**; the argument for God is that *quem
  promisit* takes up *promissis Dei* from the sentence before, and it is recorded here rather than
  decided in the text.
- **0159A *quem commendavit supra, dicens, « Et timor, »*** — **"he" = Jacob**, from Gn 31:42, where
  Jacob is the speaker of *et timor Isaac*.

### 5.5 Negation — the hosts, named (tests 2 and 2a)

Every printed negative was traced to the single Latin word it attaches to. **The trigger population
for 2a — a negative resting on a verb with a quantifier, correlative or predicate nearby — fired
eight times, and every one was proved from the sentence's own structure, never from what reads well:**

- **0149D *ipse enim in corpore suo, **non** sua, **sed** aliena peccata portabat*** — the negative is
  on *sua*, and the `sed` correlative proves it. English: "bore **not his own**, but others' sins."
- **0152A *Sed **nec** major filius **omnino** despectus*** — the trigger shape exactly (a negative
  beside *omnino*). The negative belongs on *omnino*, **not** on *despectus*: the whole clause exists
  to say that the elder son is not *altogether* rejected, and its own *quia* proves it (*cum
  intraverit plenitudo gentium, tunc omnis Israel salvus erit*). English: "neither is the elder son
  **altogether** despised."
- **0152C *quid est quod Isaac **non** Esau quem voluit, **sed** Jacob quem noluit, benedixit?*** — the
  negative is on *Esau*, not on *benedixit*; the `sed` names the one he did bless. English: "blessed
  **not Esau** whom he wished, but Jacob whom he wished not."
- **0152C *ut **non** hominis ostenderet esse benedictionem, **sed** Dei*** — on *hominis*, by the
  same correlative. English: "to be **not of man**, but of God."
- **0153B *Esau mortem fratris **non** subita ira, **sed** perfecto mentis consensu exoptasse*** — on
  *subita ira*, not on *exoptasse*: Diodorus's point is that Esau *did* long for it, and deliberately.
- **0154B *qui **non solum** caput Ecclesiae … **sed** ad membra illius miserando descendunt*** — on
  *solum*, per the axis's own worked shape.
- **0154D *quia **non** possunt eis loqui quasi spiritualibus, **sed** quasi carnalibus*** — the
  negative is on the manner (*quasi spiritualibus*), not on the ability to speak at all.
- **0157A *perscrutatus sum, **non** aliqua a communi sensu remotiore scientia … **sed** quantum
  renuntiat visus, olfactus et gustus*** — on *aliqua … scientia*, and the `sed` names the means he
  did use. English: "**not by any knowledge** further removed from the common sense … but so far as
  sight, smell and taste report."
- **0157D *Jacob **nullo** malo dolo fecit, **sed** divina dispositione*** — on *dolo*.

**The remaining printed negatives, each on its own host and each carried**: 0147C *nec dari posse,
nec prosperari debere, **nisi** ab uno Deo* (three) · 0148C *non torpescat* · 0149B *neglectum* ·
0149D *cui non est dictum* · 0148B *Nunquam enim Isaac … habitare potuit* ·
0149B/0151B–C the Isaac-and-the-Jews passage's eight (*nesciens · nescivit · ignorabant · ignorantia ·
nesciebat · caecos · non vidit · non valuit*) · 0152B *jam tunc **non** servies minori, **sed** per
fidem frater vocaberis* · 0153A *ne essent sub Juda* · 0153A *Nolebat … ne incurreret* · 0153B *non
sic celavit … **quin** appareret* · 0153C *non poterat … sine scitu* · 0153C *non autem dixit … ne …
affligeretur* · 0155A *nihil fecit … **non** vel tunc vel postea* · 0156C *crimen non erat … quia mos
non est … **nisi** concupiscentiae flagrantia* · 0156C *vult parere, et **non** potest* · 0156C *hoc
**non** potest in terra morientium* · 0156D *non quia numen* · 0157A *quod ego **non** arbitror, **nec**
sic tunc concepisset* · 0157A *nihil est quod … **in nulla** femina experti sumus* · 0157A *nescio,
**nisi** forte* · 0157C *virgas in canalibus **non** ponebat* · 0158A *nec reperit* · 0158B *idolum
**non** reperit … vestigia concupiscentiae **non** reperit … quae Jacob **non** habuit* · 0158B *Non
quod eo tempore mons Galaad diceretur, **sed** per anticipationem* · 0158D *non tibi manifestavi, ne
… superares* · 0159C *non deest timor* · 0159D *Non est enim prudentis* · 0159D *ne ultra jam generare
possit* · 0160A *Nemo videbit · Deum nemo vidit* · 0157B *non arguitur … nec credendum est … sine
spirituali revelatione*.

⛔ **None was relocated and none was dropped.** The stint's densest sites — 0151B–C (eight negatives
in nine lines, on the Jews' foreknowledge and later ignorance) and 0157A (Augustine on the mandrake,
seven) — were each checked twice.

---

## §6 · THE ONE `[sic:]` — 0152A `pinguedidine`, and it is the FIRST on this work

    « In pinguedine terrae, et in rore coeli desuper erit benedictio tua. « In pinguedidine
    terrae, » id est, in fecunditate rerum, et potentia regni…

**Fired: `In the fatness [sic: *pinguedidine*] of the earth`.**

**Why it is markable when nothing else in 5,151 words was.** Zero `[sic:]` had stood on this book
across five stints and ~28,000 words, and the reason each of those stints gave was structural, not
timid: **every plate defect they met was one our twin had already tidied away** (so the
verbatim-substring guard would reject the marker) **and every twin defect was ours** (so the marker
would accuse a clean page). ⭐ **0152A is the third case, and it is the one the class allows: the
plate is defective AND our twin carries the defect verbatim.**

**Read at 1200 dpi, p. 81, corner numbers 151/152 checked first.** Migne breaks the line
`« In pinguedi-` / `dine terrae, »`, and the join is a doubled syllable. It cannot be read any other
way: the hyphen is at the line end and `dine` opens the next line, so the word on the page is
`pinguedidine`.

**Three things make it safe:**
1. **It is a non-word** — addendum A's decisive class, right ten times out of ten, and specifically a
   *doubled syllable*, which the addendum names.
2. ⭐ **The internal control is on the same plate, eleven words earlier**, where Migne sets
   `« In pinguedine terrae, et in rore coeli desuper erit benedictio tua.` correctly. The same phrase,
   the same column, one setting right and one wrong — a compositor's doubling, not a word.
3. **The guard is satisfied**: `pinguedidine` appears verbatim in `src/latin/8950/0032.md`.

**The English renders the sense with Migne's type inside the marker**, per Pattern 7's 2026-09-05
amendment — not the older untranslated carry, because the marker now does the disclosing. Running the
7a⁗ test with the marker's contents deleted, the clause reads "In the fatness of the earth", which
has its noun, its preposition and its sense; **nothing is quarantined but the type.**

⚑ **No `[d:]`.** Pattern 11 governs a repeated *run*, and what is doubled here is a syllable inside
one word — there is no second copy to mark and no eye-skip source in a neighbouring phrase.
⛔ **And no patch is owed**, which is what distinguishes this site from all seven in §5.2: the two
columns already agree.

---

## §7 · THE ONE `[ed:]` — 0148C, and the four Hebrew losses that did NOT take one

Corpus Corporum drops Migne's Hebrew square script throughout this book; the 0012–0018 stint measured
eight words lost across cols 0104–0118, and **five more are lost in my range**, all present on the
plate:

| col | plate | twin | scar visible in our own Latin? |
|---|---|---|---|
| **0148C** | `*Rehobot* (רחבות), *latitudines.*` | `*Rehobot* **( )**, *latitudines.*` | **YES — an EMPTY pair of parentheses** |
| 0155B | `verbo *ulam* vel *olam* ולאם plenae sunt` | the Hebrew simply gone | no — the sentence construes |
| 0157C | `verbum Hebraicum *monim* מנים numerum` | gone | no |
| 0158A | `in Hebraeo *theraphim* תרפים scriptum est` | gone | no |
| 0159B | `in Hebraeo *mahanaim* מהנים ; ut sciamus` | gone, leaving a space before the `;` | marginal |

**Only 0148C is marked, and the line is Pattern 13a's own, drawn by the 0012 stint at these very two
shapes.** Clause 2 gives the marker to a loss that would otherwise be **invisible as an absence**;
clause 1 leaves an ordinary mid-sentence loss to a silent patch and a crux. An empty `( )` in a
reading page is a hole a reader will read as ours — it is the 0115C case exactly, and before that the
11055 case that forced Pattern 13 into existence. The other four leave sentences that are sound and
say nothing false.

    In the Hebrew *Rehobot* ( ) [ed: Migne prints a Hebrew word within these parentheses; our
    digitized source has lost it and left them empty. Recovery requires the plate.], *breadths.*

⛔ **The marker supplies nothing.** Pattern 13's rule holds: the recovered Hebrew is in this file and
in the patch file, never in the running English. ⛔ **And it is not a `[sic:]` or a `[var:]`** — the
plate is perfectly legible and it is our transcription that has the hole.

**Twelve Hebrew words are now known lost across cols 0104–0159**, in four stints' ranges. This is a
standing behaviour of the source on this book, not a local accident.

---

## §8 · PUNCTUATION — compared BAND BY BAND, and the only added marks are three Pattern 8b colons

A band-by-band comparison (colons, semicolons, question marks, guillemets and exclamations per column
anchor, apparatus stripped) returned **exactly three mismatched bands in five chunks, all `:` +1, all
the same class**, and **zero elsewhere**:

| column | Migne | English |
|---|---|---|
| 0155D | *Sed quaeri potest quomodo illa ab ignoto osculum acceperit, si postea indicavit Jacob propinquitatem?* | But it may be asked**:** how did she receive a kiss from one unknown, if Jacob afterwards declared the kinship? |
| 0156B | *Quomodo hoc dictum sit quaerendum est, cum et breve tempus longum videatur amantibus?* | It is to be asked**:** how was this said, since even a short time seems long to them that love? |
| 0160A | *Quaeritur, cum Veritas dicat: « Nemo videbit faciem meam; » … quomodo testatur Jacob: « Vidi Dominum facie ad faciem? »* | It is asked**:** since Truth says: « … » … how does Jacob testify: « … ? » |

**Migne's `?` is kept in all three**, and English cannot end an indirect construction with it (8b).
⚠ **0160A is the least obvious of the three and is recorded as such**: the `?` there sits *inside* the
guillemets, so no mark was stranded — but *Quaeritur … quomodo testatur Jacob: «…?»* is still an
indirect frame that English cannot carry, and the alternative ("It is asked, since Truth says …, how
Jacob testifies: «…?»") is the un-English form 8b exists to forbid.

⚑ **The scan also found four unlicensed marks that had crept into the draft and were repaired**: a
supplied semicolon at 0149D (*Esau venator, et agricola Jacob vero simplex* — his comma), one at
0151A (*veraciter dicitur, sed a Judaeis alius* — his comma), one at 0151D (*Ros desuper et subtiliter
cadit, et toties* — his comma), and one at 0157A (*ut hoc acciperet, quod ego non arbitror* — his
comma). **Totals had not cancelled here**, but three of the four sat in bands whose other marks
matched, so they were invisible until the bands were compared. **A dropped column anchor at 0149C was
caught by the same pass** (`anchors 13 against 14`) — the 2b class, since a present-but-displaced
anchor would have passed `verify-english` silently.

⛔ **No comma→semicolon sweep was made.** Migne prints **42 semicolons** in these five chunks, so
Tobit's narrow exception (which rests on his printing zero in that book) does not apply and was not
invoked.

⚠ **Three paragraphs the twin leaves unstopped are mirrored unstopped** (Pattern 8, never supply):
0150A (*Per tabernacula, diversas per orbem Ecclesias vel diversos ordines intelligimus*), and
Migne's own odd stops are carried as printed — the mid-construction period at 0151B (*Post cibum et
potum. Jacob benedicetur*), and the `» , etc.` with a space before the comma at 0152D.

---

## §9 · SECTIONS READ CLEAN (Test 4 — does the English ASSERT what he asserts?)

Run last, with counts, bands and anchors already known clean, paragraph by paragraph against the
Latin, asking one question only.

- **0147C–0149B** — the whole of CAPUT XXVI. Gregory on the wells and the Allophyli, and Jerome on
  the torrent and the LXX's etymology of *Juramentum*. ⚑ The closing paragraph carries three negatives
  in eleven words (*Non invenimus aquam … non congruit … non inveniret*) and the argument only works
  if all three stand; checked twice.
- **0149B–0149D** — Hippolytus's *Mystice*, the densest allegory in the stint and the one most exposed
  to smoothing: eleven equations in a row, several verbless. Every one rendered as the apposition it
  is; nothing supplied but the bracketed "[signifies]" at 0150A, which is named in §5.4.
- **0150A–0150C** — Isidore on Esau the husbandman and hunter, and the two-peoples allegory. The
  *gentes* axis is exercised six times in two columns and the split is recorded in §1(d).
- **0151B–0151D** — Gregory on Isaac's darkened eyes. **The heaviest negation in the range** and the
  passage where a slip would be least visible: the Jews *knew* the coming of Christ and *did not know*
  him present, and the sentence turns on which verb takes which negative. Both limbs traced
  individually, twice.
- **0152A–0152D** — the two blessings, the `[sic:]`, three of the six `[var:]`, and Alcuin's
  *quaestio*. ⚑ The 2a trigger fires three times in this column band alone (*nec … omnino despectus* ·
  *non Esau … sed Jacob* · *non hominis … sed Dei*) and each was proved from its correlative.
- **0153A–0153C** — Rebecca's counsel. Six negatives, four of them purpose clauses with *ne*.
- **0154A–0154D** — Isidore and Gregory on the ladder. The *ascendentes / descendentes* structure is
  mirrored clause for clause, including the final chiasmus (*per illum se erigunt … et humiliant*),
  which was drafted flat and re-ordered so each limb keeps its own verb.
- **0155C–0156B** — Victorinus on Lia and Rachel, and the seven years' service. Clean.
- **0156C–0157B** — Augustine on the four wives and on the mandrake. ⚑ **The mandrake paragraph is the
  most negation-dense prose in the stint** (seven negatives in nine lines, including *quale in nulla
  femina experti sumus* and the *non aliqua … sed quantum* correlative) and it is also the one whose
  smooth English would most easily hide a slip. Checked twice.
- **0157C–0159B** — Jerome on the ten changes of wage, and Gregory on Laban as the devil. Clean.
- **0159B–0160A** — the whole of CAPUT XXXII to the chunk's end. Augustine on Jacob's fear, Jerome on
  Phanuel, Gregory's *quaestio* on seeing God. ⚑ The last paragraph sets *Deum nemo vidit* against
  *Vidi Dominum* four words apart; the `[var:]` at §4.1 is placed where a reader meets both.

**Candidates rejected, with reasons, so a blind reader knows they were looked at:** §5.1–5.5 above,
plus — *zabuli* for *diaboli* at 0149B (an attested late form; Pattern 9, translated normally, no
crux-worthy defect) · *Allophyli* at 0148A and 0148C (Migne's name for the Philistines, kept as he
prints it and capitalized, not Englished) · `« Latitudo. »` at 0148C Englished « Breadth. » while the
place-name *Bethel* at 0155B is kept — the difference is that Migne glosses the first and only names
the second · the four- and five-dot ellipsis runs at 0157C and 0158A, reproduced with Migne's own
spacing (the twin sets four dots at 0158A where the plate sets five; a mark, twin followed) · the
`» , etc.` with its space at 0152D, mirrored · `« Ochozath, »` and `« Satana; »` kept unEnglished
inside their guillemets as the Hebrew and proper names they are · the twin's `VERS. 33-35.` and
`VERS. 5-13.` printing no `--` where every other address in the range prints one (the plate agrees;
reproduced bare).
