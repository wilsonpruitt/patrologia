# *Glossa ordinaria*, **Liber Genesis** (PL 113) — cruces, chunks 0042–0046 (cols 0173D–0182D)

**Stint 9 of 8950, and the range that ENDS THE WORK.** Five chunks, 3,890 Latin body words →
5,607 English (1.44×, markers stripped). `verify-english.mjs` clean on the whole work: column
anchors, `[n:]` notes, guillemets, italic spans, question marks and paragraph structure all 1:1
with the Latin twins; frontmatter copied verbatim, field order included.

**Apparatus fired: 23 `[var:]` · 1 `[ed:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[nt:]`.**
Every `[var:]` stands on a column this stint read at the plate (§2). ⚑ **`plate-gate.mjs`
currently rejects 21 of the 23** because `data/plate-reads.json` carries only p. 92 of my range;
the other four pages are in **`data/briefs/8950-PLATE-READS-0042.json`** and the gate passes as
soon as the orchestrator merges it. Nothing was marked on a column I had not opened.

⛔⛔ **READ §2.1 BEFORE ANYTHING ELSE.** Every column here was read on the archive copy AND at
Gallica, and **thirteen of fifteen single-witness archive calls were refuted, with our TEI twin
right every time.** Six sites in the English had been set from the archive plate and are now
reverted. The patch file is Part-C-first for that reason.

Counts, chunk by chunk (Latin = English in every case):
guillemets `«`/`»` — 0042: 15/15 · 0043: 24/24 · 0044: 10/**9** · 0045: 43/43 · 0046: 17/**15**
(frontmatter included; the unpaired openers are Migne's, §3).
`[n:]` notes — 6 / 6 / 8 / 21 / 8. Column anchors — 6 / 8 / 4 / 11 / 8.
Italic spans — 9 / 5 / 6 / 15 / 2, matched span for span.
Question marks — 1 / 1 / 4 / 3 / 0, exact.

---

## §0 · SPAN COUNT AGAINST THE BRIEF — 140 against 140, and the lists are IDENTICAL

**My Latin carries 140 marked spans, counted PARAGRAPH-BOUNDED; the brief prints 140, of which
0 open-ended.** Both numbers agree. But a bare total is not a checkable number on a guillemet
book, so the lists were **diffed span for span** (the 0024–0030 stint's method):

- Counted with `«[^«»]*»|\*[^*\n]+\*` applied **within each paragraph**, never DOTALL over a
  chunk body — the bug the launch brief names.
- The two lists are **identical in 139 of 140 entries, in order**, with **no residue on either
  side**.
- The single presentational difference is at **0181A**, and it is the unmatched-`«` shape
  itself: Migne opens `« Adhuc quadraginta dies, et Ninive subvertetur …` and never closes it,
  so the brief's harvester ran the span forward through four sentences to the closing mark of
  the inner `« Triduum, et Ninive subvertetur: »`, while my paragraph-bounded regex isolates the
  inner span alone. **One site, counted once either way**, and the underlying fact — an
  unclosed opener — is confirmed at the plate (§3.1).
- **One paragraph in my range is unbalanced**, 0046's second (`5 «` / `4 »`). It is the site
  just named, and the plate shows the imbalance is **Migne's**, not the digitization's.

---

## §1 · CONVENTIONS — inherited unchanged, one RETRACTION, and two this stint settled

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not** re-opened, nor were the six earlier
stints of this work (`cruces-0000.md`, `-0004.md`, `-0008.md`, `-0012.md`, `-0019.md`,
`-0024.md`), all of which I read before drafting. Adopted without re-derivation:
`VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary lemma is rendered as
the phrase it stands for; sigla ride as ordinary `[n: …]` notes with Migne's own internal
spacing, contents unanglicized; **the guillemets are the twin's, 1:1**, and their contents are
Englished; `*usque ad*` → ***as far as***, with **no verb and no object ever supplied**; the
`*Historice / Allegorice / Mystice*` tags are translated inside their italic span; **no `[var:]`
on a quotation Migne labels himself** as a rival version; **words follow the plate, punctuation
follows the twin**; a Latin gloss giving the MEANING of a name is Englished inside its span, a
Latin word MENTIONED as a word is not; `usque ad` is decided per occurrence by the `etc.` splice
test.

### (a) ⛔⛔ NEW, AND IT IS A RETRACTION — a finding this stint made, wrote up, and then killed

**Drafted:** "our twin prints an `etc.` the plate does not carry, twice (0175A, 0176D), so the
`etc.` splice test's own diagnostic token is sometimes the digitization's." Read at 400 dpi with
the whole line in view, on both sites, and written into the patch file as a new class.

**Retracted.** `data/briefs/8950-PATCH-GATE-READ-FIRST.md` landed mid-stint; every letter- and
mark-level call in this range was then re-checked at **Gallica ark `bpt6k5505319w`, `f = (column
+ 1) / 2`**, and **Gallica prints both `etc.` exactly where our twin has them.** The archive
copy's ink had swallowed them. The English has been corrected to carry both.

⚑ **The reason this belongs in the conventions section and not merely in the errata:** the false
finding was *about an instrument this series depends on*, it construed, it survived a careful
self-audit, and it was written up as a warning to future stints. **It died on one HTTP fetch.**
The `etc.` splice test is undamaged and no stint should be told otherwise.

### (b) ⭐ NEW — the ONE place the English follows the PLATE on a MARK, and why

Convention (ii) — punctuation follows the twin — rests on its own stated reason: an English that
follows the plate on a mark "manufactures a mismatch in exactly the instrument that exists to find
real ones, **for a difference no reader can act on**." **One site in this range is a difference a
reader can act on**, and its mark is not in the verifier's checked set (guillemets, colons,
semicolons, question marks):

**0178D — `rex alienigena fuit Herodes`.** Our twin prints `fuit. Herodes,`, which cuts one
sentence into a claim ("the first foreign king in the nation of the Jews existed") plus a verbless
fragment. Both plates print no period, and the sentence reads "the first foreign king in the nation
of the Jews was **Herod**, when Christ was already born" — which is the whole point of the
paragraph, since the argument is that the sceptre had passed from Juda by the Nativity.
**Confirmed on both witnesses** (archive p. 94, Gallica f89), at the line end with clean white
after the `t`. **The English follows the plate.**

⛔ **A second such site was drafted and withdrawn.** The archive copy shows `VERS. — « Non
auferetur sceptrum de Juda, »` with no verse number at all, and the English was set with a bare
`VERS.--`. **Gallica prints `VERS. 10.`** The archive's ink had swallowed the whole numeral — the
0036–0041 stint's "9 blotted into a 6 inside a verse address", one step worse. Restored.

⛔ Everywhere else the English follows the twin, and the band-by-band comparison is clean (§1e).

### (c) The gloss-word calls, decided by the 0012 test (is the italic word a TRANSLATION, or the SUBJECT?)

**Englished inside their spans, because each is the meaning of something else:**
*imbrem* → ***rain*** (0174A — Jerome's point is that Hebrew *Gessem* means rain, and the
previous clause's *complutam*, "rained upon", is the argument for it) · *confessio,* →
***confession,*** and *confessio* / *laus* → ***confession*** / ***praise*** (0174C, 0178B, the
interpretation of *Juda*) · *lectulum* → ***a bed***, *virgam* → ***a rod*** (0177B — the LXX's
two renderings of one Hebrew word, and the whole sentence is about their disagreement) ·
*venatio:* → ***hunting:*** (0179B, the meaning of *Sidon*, and the *venatores* of Jer. XVI two
lines later turn on it) · *requies* → ***rest*** (0181D, the meaning of *sabbatum*) ·
*Allegorice.* → ***Allegorically.*** ×2 (0175B, 0180A) · *vel* → ***or*** (0176D, an ordinary
connective inside a quoted variant, used and not mentioned).

**Kept as printed:** *mittha* (0177B) — the Hebrew word itself, the subject of the sentence;
*m* (0174A) — a single letter discussed as a letter (*per extremum m scribitur Gessem*).

⚑ **Not italic in the twin and therefore not italicised by me, though the corpus often sets them
so:** `Mystice autem significat` (0175D) and `Allegorice emptio Joseph` (0176B) are **roman** on
both plate and twin, and ride as roman prose. The tag class is italic only where Migne sets it
as a standing label; here he folds it into the sentence.

### (d) The vocabulary axes, with the instrument checked before reporting

- **`gentes` / `gentilis` / `gentilitas` — 11 occurrences, and the instrument was checked
  first**: a raw `gent-` grep also returns *argentei* (0174A), *indigentia* (0174A) and
  *intelligentia* (0174B), none of them the axis.
  **Gentiles** where the *Judaei*/*gentes* opposition is live: 0174A *gentilis populi* ("the
  Gentile people", set against *conversione Judaeorum* in the same clause) and *Ecclesiae
  gentium* ("the Church of the Gentiles", against *Israeliticus populus*); 0174B *gentiles,
  inutiles et laboriosi*; 0174C *plenitudo gentium* (Rom 11:25, against *Israel*); 0178A
  *possessurus gentes … diis patrum suorum renuntiantes*; 0178D *Gentes quas sibi subjunxit*
  (of the colt tied to the vine); 0179A *usque ad gentes pervenit* (Zabulon's border reaching
  Sidon, expounded of the Church's reach).
  **the Gentile world**: 0179C *simplex gentilitas ad robur operis se erexit*.
  **nations**, the axis's generic exception: 0179D *ipse erit exspectatio gentium* — Gn 49:10's
  own closing words, inside an abridgment tail, with no opposition stated.
  **nation**, singular *gens* of the Jewish people: 0178D *in gente Judaeorum* ×2.
- **`natio` — ONE occurrence, and only one.** ⚑ Instrument checked: a raw `natio` grep returns
  four hits, of which *peregrinationis* ×2 (0175A, 0175B) and *venatio* (0179B) are noise. The
  one real hit is **0180A `dans nationi pulchritudinem`** → "giving beauty to **the nation**".
- **`ethnicus` ×1 → heathen** (0181C *Ethnici novem diebus mortuos suos flebant*), the axis's
  fourth word, kept distinct from *gentes*.
- **`turba` — ZERO**, and there is no *turbare* either: the `turb-` pattern returns nothing at
  all in 3,890 words, so the *turba*/*multitudo* pair is not exercised on the *turba* side.
  **`multitudo` ×2 → multitude** (0180C *sed populus multitudo est*, 0182B *multitudo filiorum
  Israel murmurans*).
- **`daemonium` — ZERO** (checked with the pattern that does not miss *daemones/daemonum/
  daemone*). **`diabolus` ×1 → devil** (0176A *propter avaritiam se subjicit diabolo*);
  **`satanas` ×1 → Satan** (0176A *Satanae tradit*). The two stand nine words apart and were
  kept distinct.
- **`sacramentum` ×1 → sacrament** (0177D *Latet ergo hic propheticum sacramentum*).
  **`mysterium` — ZERO.** The 1:1 pair is **not exercised** in this range; the single word was
  rendered by its own English and never by the other's.
- **The commentator's own voice is not archaised**: *dicit / ait / aiunt* → "says / say", never
  *saith*. `-eth` forms appear **only** inside quoted scripture (Ezech. XVIII *dicit Dominus* →
  "saith the Lord"; 2 Cor 3:6 *occidit / vivificat* → "killeth / quickeneth"; Joan. X *tollit* →
  "taketh").
- **Pattern 17.** Singular → *thou*: 0176A Ex 20:2 *« qui eduxi te de Aegypto »*; 0176D
  *« Adoravit super caput virgae suae »* is third person and untouched; 0177C Gn 48:22
  *« Ego dedi tibi Sichimam »*; 0178B Gn 49:3 *« tu fortitudo mea »*; 0178C Gn 49:9
  *« ad praedam, fili mi, ascendisti … accubuisti »*; 0179D Gn 49:18 *« Salvatorem tuum
  exspectabo »*; 0182A Gn 50:5 *« ibi me sepelies »*; 0182D Ps 15 *« Adimplebis me laetitia cum
  vultu tuo »*. Plural → *you*: 0173D *« Misit enim me Deus ante vos … reliquias vestras »*;
  0174B 1 Cor 2:2 *« inter vos »*; 0175C Gn 47:16 *« Adducite pecora vestra, et dabo vobis »*
  and Gn 47:4 *« puerorum tuorum »* (singular, addressed to Pharao, inside a plural-speaking
  paragraph — the distinction Pattern 17 exists to keep); 0176A Rom 6:12 *« in vestro mortali
  corpore »* and Rom 6:16 *« Servi estis ejus cui obedistis »*; 0176B Gn 47:23 *« Accipite
  semina … possitis »*; 0179B Jer. XVI *« venabuntur vos »*; 0180D Hebr. XII *« Accessistis »*.

### (e) Punctuation — Test 3 run band by band, and it caught six of my own marks

Colons, semicolons, guillemets, question marks and exclamation marks were compared **per column
band**, markers stripped, across all five chunks. The first pass returned **six mismatched
bands, every one an unlicensed mark of mine**: supplied semicolons at 0174A, 0177D, 0179B and
0182A, and — the two that remain — the licensed Pattern 8b colons. All four semicolons were
reverted to the commas Migne prints. **Second pass: zero mismatches apart from the two 8b
colons.** ⚑ Worth recording that the four were spread across four chunks and would each have
read perfectly well; nothing but the band comparison would have found them.

⭐ **The two supplied colons are Pattern 8b and are the ONLY punctuation added in the range:**

| column | Migne | English |
|---|---|---|
| 0180B–C | *Quaeritur cur Jacob omnes … aequali honore filios et haeredes constituerit?* | It is asked**:** why did Jacob appoint … with equal honour? |
| 0180C | *Quaerendum de quo populo dicatur?* | It must be asked**:** of what people is this said? |

⚠ **The first of these lands in a different band from the `?` it licenses** — the colon falls in
band 0180B and the question mark in band 0180C, because Migne's anchor cuts the sentence. That
is why band 0180B reports `:` 4 vs 5 and band 0180C reports 3 vs 4; both are the same single
licensed recast. Recorded so a blind reader does not read two defects where there is one device.

⛔ **No comma→semicolon sweep was made.** Migne prints 15 semicolons himself in these five
chunks, so Tobit's narrow exception does not apply and was not invoked.

### (f) Heads — numerals mirror the plate

`CAPUT XLV.` → `CHAPTER XLV.` · `CAPUT XLVI.` → `CHAPTER XLVI.` · `CAPUT XLVII.` →
`CHAPTER XLVII.` · `CAPUT XLVIII.` → `CHAPTER XLVIII.` · `CAPUT XLIX.` → `CHAPTER XLIX.` ·
`CAPUT L.` → `CHAPTER L.` — numerals throughout, per the corpus measurement (26 works print
`CHAPTER XIII.`, none spells a numeral above ONE). All six carry their terminal period on both
sides, and all six were checked against the plate.

### (g) Frontmatter copied VERBATIM from each Latin chunk, field order included

Every field in the Latin twin's own order, including the `words:` figures, which count the
Latin. Chunks 0042's and 0046's `colContext` runs one band behind `colFirst`; that is the
chunker's and is copied unaltered. Chunk 0044's `incipit` breaks mid-ellipsis
(`« His ita transactis . .`) and chunk 0046's likewise; both are copied exactly.

---

## §2 · PLATE READS — FIVE PAGES ON TWO WITNESSES, AND THE SECOND ONE KILLED THIRTEEN CALLS

Method: the on-disk archive copy, `raw/scans/pl113/patrologiaecurs04migngoog.pdf`, **PDF page =
(column + 11) / 2**, both columns at 400 dpi read line against line with the twin, 1200 dpi crops
at contested words. **The printed corner numbers were read FIRST on every one of the five pages**
and confirm the map: p. 92 = 173/174, p. 93 = 175/176, p. 94 = 177/178, p. 95 = 179/180,
p. 96 = 181/182. Verso pages carry *GLOSSA ORDINARIA. — LIB. GEN.*, recto *WALAFRIDI STRABI FULD.
MON. OPP. PARS I. — THEOLOGICA.*

⭐ **Then, because `data/briefs/8950-PATCH-GATE-READ-FIRST.md` landed mid-stint, every letter- and
mark-level call was re-checked at the second witness** — **Gallica ark `bpt6k5505319w`,
`f = (column + 1) / 2`**, leaves 87–91, corner numbers read on f87 and f91.

### 1. ⛔⛔ THE RESULT: fifteen single-witness calls, TWO survived, THIRTEEN were the photograph

**In every one of the thirteen, our TEI twin was right and the archive plate was wrong.** Full
table in `data/briefs/8950-PENDING-TEI-PATCHES-0042.md` Part C. The refuted set:

`Corinth. I.` → `Corinth. II` · `exicrunt` → `exierunt` · `iuvaluisset` → `invaluisset` ·
`capnt` → `caput` · `Dei deditus` → `Deo deditus` · `allis` → `aliis` · `quia traditus` →
`qui traditus` · `Pater maus` → `Pater meus` · `Tanto ergo luctus` → `Tanto ergo luctu` ·
a `VERS.` with no number → **`VERS. 10.`** · two `usque ad` standing without their `etc.` → both
`etc.` present · a `»` read for a `«` · an unclosed quotation that is closed.

⚑ **Nine of the thirteen construed**, and four of them had been written up as *findings about the
digitization* — that the twin supplies an `etc.` Migne does not print (twice), that it supplies a
verse number, and that it corrects `quia` to `qui`. **That is a false discovery with a thesis, and
it survived my own audit.** Six sites in the English had been set from the archive plate and are
now reverted to the twin: the chapter numeral at 0174B, both `etc.`, `Deo deditus` at 0176D, the
verse address at 0178D, and `qui traditus est` at 0181B.

⛔ **The over-inking is NOT confined to the archive copy's pp. 85–88 gathering** that the 0036–0041
stint identified. My refuted sites are spread across **all five** of my pages, pp. 92–96, ending on
the last page of the work. **Any single-witness archive call anywhere in PL 113 should now be
treated as unconfirmed.** And the cost is one HTTP fetch: it took five.

⚑ **What survived, on both witnesses:**
- **0175C `Quaeritur, cum Joseph frumenta colligeret`** — here **our twin** is the corrupt one
  (`eum`, a `c`→`e`), and the English renders the plate: "since Joseph was gathering the corn."
- **0178D `rex alienigena fuit Herodes`**, no period — §1(b).
- **0173D the Hebrew after *Gosen*** is on both plates and gone from our twin (Gallica reads three
  pointed consonants). The `[ed:]` stands. Hebrew is structural; ink cannot make or unmake it.

### 2. Foot-of-page apparatus: **CHECKED ZERO on all five pages** — tier 3, coverage `full`

No foot rule and no notes of either layer — neither the numbered nor the **letter-keyed** layer this
book uses at cols 0068 and 0094 — on pp. 92, 93, 94 or 95: the columns simply end and the lower
third of each page is blank.

⚑ **p. 96 is the last page of the work, and this is what stands at its foot.** The text closes at
0182D with `« Adimplebis me laetitia cum vultu tuo. »`. Below it, after a blank of about two lines,
stands **one short centred rule**, roughly a third of a column wide, set under the gutter between
the two columns. **Below that rule there is nothing at all**: no numbered note, no letter-keyed
note, no catchword, no signature, no *FINIS*, no colophon, and no head of a following work. The
remaining lower third of the page is blank. **Write this down as a checked zero.** The book ends
without a conjecture apparatus.

### 3. ⭐ Cols 0179–0180 are clean

A full page read line by line with no word divergence at all — the only such page in the range, and
the only one on which Gallica had nothing to adjudicate. Worth recording as a negative: the
digitization's error rate in this book is not uniform, and neither is the archive photograph's.

---

## §3 · THE UNPAIRED GUILLEMETS — one is Migne's and confirmed; the others were the photograph

Pattern 5's corollary: where Migne opens `«` and never closes it, the English mirrors the plate and
supplies nothing. **Our twin has exactly one unpaired opener in this range, at 0181A, and the plate
confirms it is Migne's.**

| col | chunk | opens | never closes — runs on into |
|---|---|---|---|
| 0181A | 0046 | `« Adhuc quadraginta dies, et Ninive subvertetur [n: (Jon. III)], ut per tot dies …` | ⭐ **the twin is FAITHFUL here.** Archive p. 96 at 400 dpi: the plate leaves it open, and so does our Latin; the run continues through four sentences to the inner `« Triduum, et Ninive subvertetur : »`, whose closer is the one a counter pairs with the first opener. **The English mirrors it unclosed**, which is why chunk 0046's counts are 17/15 and not 17/17. |

⛔ **Two further "Migne leaves it unclosed" readings were drafted and are WITHDRAWN.** The archive
copy appeared to show the Sichem quotation at 0177C–D unclosed and then re-opened, and the CAPUT L
lemma at 0180D unclosed; the parallel case at 0176C–D was checked at Gallica and **is closed
there**, exactly as our twin has it. After thirteen refutations (§2.1) neither drafted reading is
evidence of anything, and neither was ever going to change the English, since guillemet parity is a
hard check and the English follows the twin.

⚑ **So the launch brief's warning survives with its sign reversed for this range.** It said a
balanced pair in our Latin is no evidence Migne's was balanced. That remains true in principle —
but here the only *confirmed* finding is the opposite one: **an unbalanced pair in our Latin turned
out to be Migne's own**, and every apparent imbalance in the plate turned out to be ink. **Neither
direction can be settled from one photograph.**

⚑ Separately, the archive copy appears to repeat the opening `«` line-initially at six sites
(0174D, 0175C, 0177A, 0177C, 0178C, 0180D) — a compositor's convention for a quotation crossing a
line, not a second quotation. Our twin drops every one and so does the English, so nothing turns on
it; not re-checked at Gallica.

---

## §4 · 7a″ — THE DIVERGENCE LIST. Every lemma collated against `sources/vulgate/`

⛔ Collated span by span against `sources/vulgate/clementine-flat.txt`, never from memory, and
**the ERRATA section of `sources/vulgate/README.md` was read before a single letter was cited.**
Book abbreviations were checked and one of them bit: **Joel is `Joel`, not `Jl`** — my first
lookup of Joel 2:28 returned an empty line and would have read as "not in the Clementine" if
taken at face value. The empty line is the *versification* of our copy (`Jl` is not a key at
all), not an absence, and the verse is there under `Joel 2:28`. Same class as the `Suscipe
cælum` trap, different mechanism: **an empty result is evidence about the query first.**

### The criterion actually applied, stated so it can be checked

**A `[var:]` fires where a CONTENT WORD differs, is absent, or is added.** It does **not** fire
where the only difference is a connective particle (*enim*, *ergo*, *autem*, *-que*), word order,
or an abridgment the `etc.` already announces. Twenty-three fired; fourteen divergences were
found and left unmarked under this rule and are listed at §5. No marker rests on the brief's
pre-scan; every one names its verse and quotes the Clementine.

### 4.1 · The twenty-three markers

| col | chunk | Migne prints | the Clementine reads | why it is material |
|---|---|---|---|---|
| 0174C | 0042 | *Quia caecitas ex parte **in Israel facta est*** | Rom 11:25 *quia caecitas ex parte **contigit** in Israel* | a different verb, and the word order with it |
| 0174D | 0042 | *« **exierunt de femoribus ejus**, »* | Gn 46:26 *et **egressae sunt de femore illius*** | three words, and Augustine's whole *quaestio* is what "part" the phrase names |
| 0175B | 0043 | *« Hi sunt fratres mei, qui faciunt voluntatem Patris mei, »* | Mt 12:50 *Quicumque enim fecerit voluntatem Patris mei, qui in caelis est, ipse meus frater…* | the sentence is rebuilt; ⚠ Migne's siglum *Matth. II* is also wrong for it and rides as printed |
| 0175C | 0043 | *« Non sunt **pascua pecoribus puerorum** tuorum, »* | Gn 47:4 *non est **herba gregibus servorum** tuorum* | three content words |
| 0176A | 0043 | *« qui eduxi te **de Aegypto**, »* | Ex 20:2 *qui eduxi te **de terra Aegypti*** | a content word absent |
| 0176A | 0043 | *« Servi estis ejus cui **obedistis**, sive peccati **in** mortem »* | Rom 6:16 *servi estis ejus, cui **obeditis**, sive peccati **ad** mortem* | perfect for present |
| 0177C | 0044 | *« Ego **dedi** tibi Sichimam praecipuam **super** fratres tuos, quam **accepi de manibus Amorrhaeorum** in gladio meo et **sagitta**. »* | Gn 48:22 *Do tibi partem unam **extra** fratres tuos, quam **tuli de manu Amorrhaei** in gladio et **arcu** meo* | five content words; Jerome's rendering, and given under a bare siglum (§5.1) |
| 0178B | 0045 | *et principium **filiorum** meorum* | Gn 49:3 *et principium **doloris** mei* | the word the blessing turns on |
| 0178C | 0045 | *« Potestatem habeo ponendi **animam meam**, et nemo tollit eam a me, sed ego pono eam »* | Jo 10:18 *Nemo tollit eam a me : sed ego pono eam **a meipso**, et potestatem habeo ponendi eam* | words added and dropped, and the order reversed |
| 0178C | 0045 | *« et ut **catulus leonis**, »* | Gn 49:9 *et quasi **leaena*** | ⭐ the gloss's next clause is *quia die tertia resurrexit*, expounding the whelp; on the Vulgate's word the argument has nothing to expound |
| 0178D | 0045 | *« Vivo ego, dicit Dominus, **nisi hos homines induam sicut vestimentum**. »*, cited *Ezech. XVIII* | Is 49:18 *Vivo ego, dicit Dominus, **quia omnibus his velut ornamento vestieris***; Ez 18:3 has nothing of the kind | the words are Isaiah's, not Ezechiel's, and they are not Isaiah's words either |
| 0179B | 0045 | *« Terra Zabulon, et terra Nephthali, via maris trans Jordanem, »* under *Isa. IX* | Is 9:1 *Primo tempore alleviata est terra Zabulon…* | the wording Migne prints is **Mt 4:15's** |
| 0179B | 0045 | *« Mittam venatores multos, et venabuntur **vos** in omni monte. »* | Jr 16:16 *mittam **eis** multos venatores, et venabuntur **eos** de omni monte* | second person for third — the gloss applies it to the reader |
| 0179D | 0045 | *« … sicut **unum de sceptris** Israel … **regulus** in semita … **et** cadat ascensor ejus **retrorsum**. **Salvatorem** tuum exspectabo, Domine. »* | Gn 49:16-18 *sicut **et alia tribus** in Israel … **cerastes** in semita … **ut** cadat … **Salutare** tuum expectabo* | four divergences in three verses, the last of them christological |
| 0179D | 0045 | *Latrunculus latrocinabitur ante eum* | Gn 49:19 *Gad, accinctus praeliabatur ante eum* | a different sentence; bare siglum (§5.1) |
| 0180A | 0045 | *Virgultum dissolutum, dans nationi pulchritudinem* | Gn 49:21 *Nephthali, cervus emissus, et dans eloquia pulchritudinis* | a different sentence; bare siglum (§5.1) |
| 0180A | 0045 | *« Filius accrescens **super fontem**, »* | Gn 49:22 *filius accrescens **et decorus aspectu*** | a different predicate |
| 0180B | 0045 | *« Mane **comedet** praedam et **ad vesperam** dividet **escam**. »* | Gn 49:27 *mane **comedat** praedam, et **vespere** dividet **spolia*** | ⭐ the gloss expounds *escam* twice (*tunc dividet escam, intelligens a spiritu litteram esse dividendam*); on *spolia* it expounds nothing |
| 0180C | 0045 | *« Non est enim ibi discretio an Judaeus sit an **Graecus**, Barbarus an Scytha, servus an liber: quia per omnia et in omnibus »* | Col 3:11 *ubi non est gentilis et Judaeus, **circumcisio et praeputium**, Barbarus et Scytha, servus et liber : **sed** omnia, et in omnibus Christus* | a pair dropped, a word added, the connective changed |
| 0180C | 0045 | *« Effundam **de spiritu meo** super omnem carnem. »* under *Joel. II* | Joel 2:28 *effundam **spiritum meum** super omnem carnem* | the wording is **Act 2:17's**, under a Joel siglum |
| 0180D | 0045 | *« Accessistis ad montem Sion, et ad Hierusalem coelestem, et ad frequentiam angelorum, »* | Hbr 12:22 *accessistis ad Sion montem, et **civitatem Dei viventis**, Jerusalem caelestem, et **multorum millium** angelorum frequentiam* | two phrases dropped |
| 0181C | 0046 | *« Luctus mortui septem dies: **luctus autem fatui omne tempus vitae ejus**. »* | Sir 22:13 *Luctus mortui septem dies : **fatui autem et impii omnes dies vitae illorum*** | rebuilt, and singular for plural |
| 0182A | 0046 | *« Pater meus adjuravit me dicens: In **monumento** quod ego **feci** mihi in terra Chanaan, ibi me sepelies; »* | Gn 50:5 *eo quod pater meus adjuraverit me dicens : En morior : in **sepulchro meo**, quod **fodi** mihi in terra Chanaan, sepelies me* | ⭐⭐ see 4.2 |

### 4.2 · ⭐⭐ The best site in the range: 0182A, where the gloss argues from a word its own lemma does not print

Migne's lemma has Joseph report that Jacob said *In **monumento** quod ego **feci** mihi* — "in
the monument which I **made** for myself". Four sentences later the same gloss says
***Fodisse** autem sibi Jacob sepulcrum nusquam superius legitur, sed certe, nisi **fodisset**,
non modo diceretur* — "that Jacob **dug** himself a sepulchre is nowhere read above; yet
assuredly, unless he had **dug** it, it would not now be said."

**The argument is entirely about the verb *fodere*, and *fodere* is not in the lemma it is
arguing from.** Gn 50:5 reads *in sepulchro meo, quod **fodi** mihi*; Augustine's *quaestio*
takes its force from that word. The English renders Migne — "made" in the lemma, "dug" in the
argument — and the `[var:]` puts the Clementine's *fodi* on the page where a reader meets the
seam. **This is 7a″'s own shape**: had the lemma been quietly conformed to the familiar verse,
the seam would have closed and the paragraph would have read as a smooth piece of exegesis
instead of a visible one.

### 4.3 · The lemmata collated and found to AGREE with the Clementine exactly

Named because a list of findings alone cannot be told apart from a report by an agent that never
looked. All verbatim, allowing for the fragment the `etc.` marks:

Gn 45:10 *« Habitabis in terra Gessen »* · Gn 45:16 *« Et gavisus est Pharao »* · Gn 45:22
*« Benjamin vero dedit »* · Gn 46:26 *« Cunctae animae quae ingressae sunt cum Jacob in
Aegyptum »* · Gn 46:27 *« Filii autem Joseph »* and *Omnes animae domus Jacob* · Gn 46:28
*« Misit autem Judam »* · Gn 46:32 *« Et sunt viri pastores »* · Gn 47:9 *« Dies
peregrinationis »* · Gn 47:12 *« Praebens cibaria, singulis »* · Gn 47:16 *« Adducite pecora
vestra, et dabo vobis »* · Gn 47:20 *« Emit igitur »* · Gn 47:22 *« Praeter terram
sacerdotum »* · Gn 47:25 *« Salus nostra in manu tua est »* · Gn 47:29 *« Cumque appropinquare
cerneret diem mortis suae »* · Gn 47:31 *« Quo jurante »* · Gn 48:1 *« His ita transactis …
assumptis duobus filiis Manasse et Ephraim »* · Gn 48:2 *« Qui confortatus »* · Gn 48:12
*« Cumque tulisset eos Joseph de gremio patris »* · Gn 48:16 *« Invocetur super eos nomen
meum »* · Gn 48:22 *« Do tibi partem unam »* · Gn 25:23 *« Major serviet minori »* · Gn 49:5
*« Simeon et Levi »* · Gn 49:6 *« in consilium eorum non veniat anima mea »* · Gn 49:8
*« Juda, te laudabunt »* · Gn 49:9 *« Catulus leonis Juda: ad praedam, fili mi, ascendisti:
requiescens accubuisti ut leo »* and *« Quis suscitabit eum? »* · Gn 49:10 *« Non auferetur
sceptrum de Juda »* · Gn 49:11 *« Ligans ad vineam pullum suum »* · Gn 49:12 *« Pulchriores
oculi »*, *« Lacte »*, *« candidiores »*, *« candidiores lacte »* · Gn 49:13 *« Zabulon in
littore »* · Gn 49:14 *« Issachar »* and *« Accubans inter terminos »* · Gn 49:16 *« Dan
judicabit populum suum »* · Gn 49:19 *« Gad »* · Gn 49:21 *« Nephthali »* and *« Nephthali
cervus emissus »* · Gn 49:22 *« Filius accrescens Joseph »* · Gn 49:27 *« Benjamin lupus
rapax »* ×2 · Gn 49:28 *« Omnes hi in tribubus »* · Gn 49:32 *« Appositusque »* ·
Gn 50:3 *« Septuaginta diebus »* · Gn 50:4 *« Et expleto planctus tempore »* · Gn 50:10
*« Veneruntque ad aream Atad »* · Gn 50:22 *« Vixitque centum decem annis »* · Gn 50:24
*« Asportate ossa »* · Gn 50:25 *« Conditus aromatibus »* · Ps 26:13 *« Credo videre bona
Domini in terra viventium »* · Ps 15:10 *« Adimplebis me laetitia cum vultu tuo »* ·
Gn 47:23-24 *« Accipite semina, et serite agros ut fruges habere possitis »* (⚑ Migne runs the
end of v. 23 into the head of v. 24; the words are the Clementine's on both sides of the seam) ·
Dt 33:20-21 *« Benedictus in latitudine Gad, quasi leo requievit: cepitque brachium et verticem,
et vidit principatum suum »* (same shape, a verse boundary crossed, every word the Clementine's).

⚠ **Gn 45:5 / 45:7 — checked, and it is not a divergence.** The address is `VERS. 7-9.` and the
lemma *« Misit me Deus, »* matches **Gn 45:5** (*misit me Deus ante vos*), not Gn 45:7
(*Praemisitque me Deus*). The brief's `✓ Gn 45:5` is telling the truth. But no marker fires:
Augustine's whole *quaestio* here is the difference between the copies (*Quid est quod juxta
alia exemplaria ita legitur*), the rival wording is announced as such, and the settled convention
withholds a `[var:]` from a version Migne labels himself.

---

## §5 · THE DECLINED LIST — what was raised, weighed and NOT marked, with the settling page

### 5.1 · Three bare-siglum Jerome renderings that DID take a marker, and the argument that lost

At 0177C, 0179D and 0180A, Migne prints Jerome's own rendering of a Genesis verse — *Ego dedi
tibi Sichimam*, *Latrunculus latrocinabitur*, *Virgultum dissolutum* — under a bare
`(HIERON.)`/`(HIERON. in Gen.)` siglum, with no *alia translatio*, no *in Hebraeo*, no announced
version. **A serious argument says these should be declined**: each is the incipit of Jerome's
*comment*, cut short by the abridgment, and in each case Migne prints the Vulgate-shaped form of
the very same verse in the adjacent paragraph (`« Gad accinctus praeliabitur »` beside
*Latrunculus*, `« Nephthali cervus emissus »* beside *Virgultum*), so the juxtaposition is itself
a kind of label.

**That argument was rejected and the markers stand.** The settled convention withholds a
`[var:]` for an **explicit** label — *Alia translatio*, *quidam codices*, *secundum Hebraeum*, an
announced LXX/Aquila/Symmachus/Theodotion reading — and the 0008–0011 stint's worked pair is
exactly this case decided the other way: Jerome's first quotation there, "given bare, under a
naked `(HIERON.)`, **took** the marker"; his second, introduced *Melius in Hebraeo habetur*, did
not. A juxtaposition is not a label, and reading one as a label would let any commentator's
second thought silently disable the apparatus. **Said here with the Latin that forced it, and
with the rival named, per the series brief.**

⛔ **By the same rule, three quotations in this range took NO marker because Migne DOES label
them**: the *alia exemplaria* version of Gn 45:5-7 at 0173D; the `LXX:` reading of Gn 49:5 at
0178B; and the whole *Adoravit super caput virgae* apparatus at 0176C-D, where Migne sets out
*Quod habent Latini codices … nonnulli emendatius habent … vel … vel …* and Jerome's *cum in
Hebraeo multo aliter legatur*. Four rival readings on one column, all announced, none marked.

### 5.2 · Fourteen real divergences left unmarked, each with its reason

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 0174B | *Non judicavi me aliquid scire … nisi Christum Jesum* | 1 Cor 2:2 *Non **enim** judicavi me **scire aliquid** … nisi **Jesum Christum*** | a dropped *enim* and two transpositions; no content word differs |
| 0174B | *Omnes domestici ejus vestiti duplicibus* | Pr 31:21 *omnes **enim** domestici ejus vestiti **sunt** duplicibus* | particle and copula only |
| 0175B | *« … Ramesse. »* | Gn 47:11 *Ramesses* | one letter, and Migne's own gloss two words later spells *Ramesses* correctly; the errata note in `sources/vulgate/README.md` is squarely about calls of this size |
| 0176A | *Non regnet peccatum in vestro mortali corpore* | Rom 6:12 *Non **ergo** regnet…* | particle; the rest is cut by Migne's own *etc.* |
| 0177B | *« Duo **igitur** filii qui nati »* | Gn 48:5 *Duo **ergo** filii **tui**, qui nati **sunt tibi*** | *igitur*/*ergo* is a particle; the absent words fall inside the fragment the *etc.* announces |
| 0177B | *« Mihi enim quando veniebam de Mesopotamia, mortua est Rachel et sepelivi eam »* | Gn 48:7, which has *in terra Chanaan in ipso itinere… et sepelivi eam juxta viam Ephratae* between them | an abridged citation, not a divergent reading — Migne joins the head and the tail of one verse |
| 0178B | *super montem posita* | Mt 5:14 *supra montem posita* | a preposition, and the pair is interchangeable in this Latin |
| 0179A | *Perfectorum est solidus cibus* | Hbr 5:14 *Perfectorum **autem** est solidus cibus* | particle |
| 0179D | *« Gad accinctus **praeliabitur** ante eum. »* | Gn 49:19 *Gad, accinctus **praeliabatur** ante eum* | ⚑ **one letter**, and the frequency check was run: *praeliabitur* stands twice elsewhere in the Clementine and *praeliabatur* once, so both forms are attested and our copy's reading is not suspect — but a marker resting on a single letter of a 2005 transcription is exactly what the errata note forbids. The gloss does build on the future (*Christus ante et retro praeliabitur*), which is why it was raised at all |
| 0180B | *littera occidit, spiritus autem vivificat* | 2 Cor 3:6 *littera **enim** occidit, Spiritus autem vivificat* | particle |
| 0181A | *« Adhuc quadraginta dies, et Ninive subvertetur »* | Jon 3:4, verbatim | no divergence at all — checked and clean |
| 0181B | *« qui traditus est propter delicta nostra »* | Rom 4:25, **verbatim** | ⛔ **WITHDRAWN, and it is the sharpest cautionary tale in the range.** The archive plate reads `quia`, which turns Paul's relative clause into a causal one; I wrote it up as a real divergence, rendered it "because he was delivered up", and recorded the `[var:]` as *owed but blocked* by the verifier's mirror test. **Gallica f91 reads `qui`, agreeing with our twin and with the Clementine — there is no divergence here at all.** The English is corrected. Settling leaf: **Gallica f91** |
| 0181D | *« Flevit eum Aegyptus septuaginta diebus »* | Gn 50:3 *flevit**que** eum Aegyptus…* | an enclitic |
| 0182B | *aream Atad* … *area Arad* | Gn 50:10 *Aream Atad* | Migne spells the place two ways nine lines apart; both stand as printed. Not a Vulgate divergence but Migne's own inconsistency, and it is not ours to tidy |

### 5.3 · Three plate readings raised as candidates and NOT given a marker

- **0176A `Aegyptii autem violenter in servitutem redacti sunt, Hebraei vero violenter in
  servitium.`** The sentence draws a contrast and then uses the same adverb for both halves, so
  it draws nothing; the very next sentence (*Vendiderunt autem Aegyptii semetipsos*, "the
  Egyptians sold their own selves") shows the **first** *violenter* is the suspect one, since
  selling oneself is not violence. **Read on the archive plate (p. 93, 400 dpi): both
  words are there, well formed and normally spaced** — though after §2.1 an archive-only reading
  proves less than it did, and here it does not need to prove anything, since our twin carries both
  *violenter* too and the English simply renders what both have. Rendered literally, "by violence" twice.
  **No `[cj:]`**: Pattern 18 requires naming the right reading, and two candidates are open
  (*voluntarie* for the first, or a different noun in the second) with nothing on the page to
  choose between them. Crux only.
- **0182C `Nos quosque moraliter instruit`.** *quosque* is a real form (acc. pl. of *quisque*)
  and will just bear its slot beside *nos*, so Pattern 7's main rule governs and the English
  reads "He instructs us each morally also." **Read on the archive plate (p. 96), where it agrees with our twin — and this is one
  of the very few defective-looking forms in this book that our twin did NOT tidy**, which is
  itself worth recording. Migne's evident intention is *quoque*. No marker; brief addendum A's
  rule that a real, well-formed word is Migne's until a plate says otherwise is satisfied here in
  the strongest way, because the plate says it IS Migne's.
- **0182B `Si dicit aliquis quia bella timebant, sicut filii Israel circumducti…`** — a
  protasis with no apodosis; the sentence simply stops and the next begins *Sed majoris
  significantiae causa factum est hoc*. **Read on the archive plate (p. 96), agreeing with our twin.** Rendered as printed,
  anacoluthon and all. No marker: nothing is missing from our text that Migne prints.

### 5.4 · Sections read clean

Chunk 0044's four question marks (0177D–0178A) were compared one by one against the plate and
all four are Migne's, on four consecutive direct questions; none was supplied and none dropped.
The negation walk (Test 2, hosts named individually) was run over all 53 printed negatives in the
range — ⚑ instrument checked first: a `\bnihil\b` pattern returns **zero** here and misses the
one real occurrence, 0179C's *nihil**que** de mundanis quaerere*, exactly as `\bdaemoni` misses
*daemones*; the walk used the unbounded forms — and returned **one defect, mine**: at 0174C I had rendered *qui ante non putavit esse
credendum* as "who before thought there was **nothing** to be believed", moving the negative off
*putavit* and onto the gerundive. Repaired to "who before did **not think** that it was to be
believed." ⚑ It had read perfectly well, which is the point of the test.

---

## §6 · FOR THE MERGE ACROSS NINE STINTS — this range ends the work

1. ⛔⛔ **THE HEADLINE, and it is not about my range.** This stint read its five columns on TWO
   witnesses and **thirteen of its fifteen single-witness archive calls were refuted, our TEI twin
   being right every time** (§2.1). Nine of the thirteen construed; four had been written up as
   findings about the digitization's behaviour. **The archive copy's over-inking is therefore not
   confined to its pp. 85–88 gathering** — it reaches p. 96, the last page of the work. Every
   letter- and mark-level claim in the five single-witness patch files (`-0008`, `-0012`, `-0019`,
   `-0024`, `-0031`) should be assumed to have this failure rate until each is fetched from
   Gallica. **At one HTTP request per page, confirming all of them is cheap; applying any of them
   is not.**
2. **The `[sic:]` count for the whole book should still be ZERO, but for a smaller reason than I
   first wrote.** Zero `[sic:]` fired here. My draft owed seven of them to a later patch pass;
   **six of those seven are now withdrawn** (`exicrunt`, `iuvaluisset`, `capnt`, `allis`, `maus`,
   `luctus` are all the photograph), and the seventh — `Corinth. I.` — with them. What survives
   from this range is **one patch in the opposite direction** (0175C, where OUR twin reads `eum`
   for the plates' `cum`), one mark (0178D's absent period), and two dropped Hebrew words. ⚑ The
   earlier stints' finding that "every plate defect is one CC had already tidied away" may be
   partly an artifact of the same over-inking, and their `[sic:]`-owed lists need the same
   treatment before anyone reads the corpus-wide zero either as timidity or as measurement.
3. **The `usque ad` tally for this range: 22 formula, 3 ordinary, 0 the verse's own words.**
   All 22 italic `*usque ad*` follow an `etc.` — on the plate as well as in the twin, once the two
   apparent exceptions at 0175A and 0176D were checked at Gallica and refuted (§1a) — and are
   rendered `*as far as*` with no verb, object or antecedent supplied anywhere:
   0173D · 0175A ×3 · 0175B · 0176C · 0176D · 0177B · 0177C · 0177D · 0178B ×3 · 0179B · 0179C ·
   0179D ×2 · 0180A ×2 · 0180B ×2 · 0182C. ⛔ The **three ordinary** ones, none italic and none
   after an `etc.`, each rendered by sense: 0179A *Pertingit autem **usque ad** Sidonem* →
   "reaches as far as Sidon"; 0179A *id est, **usque ad** gentes pervenit* → "comes as far as the
   Gentiles"; 0177D *Mausoleum ejus ibi **usque** hodie cernitur* → "to this day" (bare *usque*,
   the 0024 stint's Gn 25:18 shape). Not one of the three sits inside an italic span.
   ⚑ Instrument checked: a raw `usque` grep also returns **`non usquequaque consonat`** at 0173D,
   which is neither — and it stands four words in front of a real formula on the same line.
4. **Two renderings a merge may want to reconcile across stints, flagged rather than decided:**
   *Ecclesia gentium* is **the Church of the Gentiles** here (0174A) on the strength of the
   *Judaeorum* in the same clause; a stint that met it in a generic context may reasonably have
   written "of the nations". And *exspectatio gentium* at 0179D is **"the expectation of the
   nations"** because it is Gn 49:10's own closing formula inside an abridgment tail — a stint
   expounding the same verse typologically would write "Gentiles". Both are the axis as written;
   both read as inconsistencies and are not.
5. **The unexpressed subject at 0179B is a live ambiguity and was not resolved silently.**
   *Contra omnes terminos saeculi **solidata** exspectat naufragium Judaeorum* — the participle is
   **feminine**, so the subject is not Zabulon (masculine) but the *Ecclesia* the whole gloss is
   about, or possibly *terra*. The English reads "Made firm against all the ends of the world,
   **she** awaits the shipwreck of the Jews", which follows the morphology. A reader who takes the
   tribe as subject will find the pronoun odd; the Latin, not the sense, decided it.
6. **The work ends at 0182D with nothing after it but a short centred rule** (§2.2). Anyone
   assembling the work page can state, on a read plate, that Migne prints no colophon, no *FINIS*
   and no closing apparatus to the *Liber Genesis*.
