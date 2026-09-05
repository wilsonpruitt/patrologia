# *Glossa ordinaria*, **Liber Genesis** — cruces, chunks 0019–0023 (PL 113, 0120D–0133C)

Translated 2026-09-05, one stint, 5 chunks (5,245 Latin words by the frontmatter; 5,013 body words with anchors and notes stripped → 7,501 English, 1.50x).
Bands: **0120D–0133C** — CAPUT XV, XVI, XVII, XVIII, XVIII (cont.), XIX.
`verify-english.mjs 8950` reports **no error on 0019–0023** (the only failures in the work are
`MISSING English chunk` for ranges other stints hold).

**SPAN COUNT — 189, of which 3 OPEN-ENDED.** Counted **paragraph-bounded** in my own five Latin
chunks: **115 closed `« … »` spans + 71 `*…*` spans + 3 unclosed `«` = 189**, matching the rebuilt
brief's header exactly. Per chunk: 0019 23+11+0 · 0020 22+38+0 · 0021 27+4+2 · 0022 5+1+1 ·
0023 38+17+0. ⚠ The raw marks are **120 `«` / 115 `»`**, and the five-mark gap is real and
accounted for: three unclosed quotations (0127B, 0127D, 0129D — **all three plate-confirmed as
Migne's**, §3) and **two** *nested* line-head `«` inside closed spans (0121A, 0127D), each of which
pairs into its host and is counted once. A bare `«`/`»` total is not a checkable number on this book.
⚑ The counting method matters: a DOTALL non-greedy `«.*?»` over the whole chunk body runs an
unclosed quote forward across a paragraph break and swallows the next span. Counting
paragraph-bounded is what keeps the two errors from cancelling.

**Apparatus fired: 11 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
Every one stands on a column read at the plate this session.

Per-chunk parity (English / Latin), all exact: column anchors 8/8 · 11/11 · 14/14 · 3/3 · 15/15 ·
`[n:]` notes 14/14 · 12/12 · 18/18 · 3/3 · 20/20 · `«` 24/22/30/6/38 · `»` 23/22/27/5/38 ·
question marks 0/2/4/2/2. EN/LA word ratio (apparatus stripped) 1.48 / 1.46 / 1.52 / 1.45 / 1.51.
**Zero em-dashes supplied in 5,245 words.**

⭐ **THE WHOLE RANGE WAS READ AT THE PLATE before the English was written**: archive.org
`patrologiaecurs04migngoog`, **PDF page = (column + 11) / 2**, corner numbers read first on every
page — pp. 66 (121/122), 67 (123/124), 68 (125/126), 69 (127/128), 70 (129/130), 71 (131/132),
72 (133/134). **Foot-of-page apparatus: CHECKED ZERO on all seven pages, both layers.** Reads are
recorded in `data/briefs/8950-PLATE-READS-0019.json` for the orchestrator to merge; twin/plate
divergences are in `data/briefs/8950-PENDING-TEI-PATCHES-0019.md`.
⚠ Band **0120D** (the two lemmata before the first anchor of chunk 0019) sits on p. 65 and was
**not** read. Nothing fired there; both lemmata agree with the Clementine exactly.

---

## §1 · CONVENTIONS — inherited, and what this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were not re-opened: `VERS. n.--` passes through
verbatim; the lemma is Englished; a fragmentary lemma is rendered as the phrase it stands for;
sigla ride as ordinary `[n: …]` notes with Migne's own internal spacing (`(ISID. in Gen. )`,
`( Glossa Graeca. )`, `(AUG. Quaest in Gen. )`, `(AUG., Q. in Gen.)`); the guillemets are the
plate's, 1:1, and their contents are Englished; `*usque ad*` → ***as far as***, with **no verb ever
supplied**.

The three conventions the earlier 8950 stints settled were adopted, not re-derived:
**(i)** no `[var:]` on a quotation Migne himself labels a rival version — one worked instance here,
§4.3; **(ii)** words follow the plate, punctuation follows the twin — eight instances, patch file
Part A3; **(iii)** unpaired guillemets are mirrored, never tidied, and are usually Migne's — three
here, all his, §3.

### (a) The sense tags are translated in their italic span, and one is ABBREVIATED
`*Tropologice.*` → ***Tropologically.*** (0121B) · `*Allegorice.*` → ***Allegorically.*** (0123C,
0131B) · `*Historice.*` → ***Historically.*** (0124C) · `*Moraliter.*` → ***Morally.*** (0126A,
0129A, 0131A) · `*Mystice.*` → ***Mystically.*** (0129A, 0131A, 0132A). A note inside the tag's
italic span stays inside it (`*[n: (GREG., lib. XVI Moral., c. 20.)] Tropologice.*`).
⚑ **0131C prints the tag ABBREVIATED — `*Moral.*` — where the same tag is spelled out three times
elsewhere in the same range.** Rendered ***Morally.***: English has no exponent for a Latin
abbreviation, and the facing Latin column preserves it, which is exactly Pattern 9's argument for
normalizing a section label. Flagged rather than decided silently, because it is the first
abbreviated tag in this book.

### (b) A gloss word that must NOT be Englished, and three that must
- **`« Tria sata. »` → « Three sata. »** (0126B, 0126C ×2), and `Satum genus est mensurae` → "A
  satum is a kind of measure." ⛔ Rendering *sata* as "measures" would have made the gloss read "A
  measure is a kind of measure" — the tautology trap the 0000 stint met at *sementis/semen*. The
  word is carried in **roman inside the guillemets**, because italicizing it would add an italic
  span the Latin twin does not have and break span parity.
- **`*aedificatio*` → *a building up*** (0122A). Jerome's point is that the Hebrew expresses
  bearing children by the verb "to be built up"; the word is Latin, not Hebrew, so it is translated.
- **`*onager.*` → *a wild ass.*** and **`*rusticus,*` → *a rustic,*** (0122B) — Latin gloss-words.
  The Hebrew beside them (`*phara*`) is kept.
- **`*caecitas,*` → *blindness,*** (0131B) and **`*motus eorum:*` → *their motion:*** (0123A) —
  Latin etymologies of Hebrew place-names, translated in their spans.
- ⚠ **`*avidentia,*` (0130D) is CARRIED, untranslated, in its italics.** It is Augustine's coinage
  for Greek ἀορασία and Migne flags it as one — *si possit dici*, "if it may be so called" — so the
  register's italic-Latin rule for a technical word with no clean English equivalent applies, and
  the flag would be unintelligible beside an ordinary English word. **No `[sic:]`**: the type is
  sound and the coinage is the author's.
- **Hebrew letter-names stay Hebrew**: *scin · res · iod · he · zadich · ain · tau · schin* (0124B),
  and the single letters *h* / *a* / *r* stay letters. `*centum*` → *a hundred* (0124A, the numeral
  value of Greek ρ, a Latin word being mentioned). `*princeps mea,*` → *my princess,* ·
  `*princeps,*` / `*principem,*` → *a princess,* · `*lepram*` → *leprosy,* · `*sarai*` and `*Sara*`
  kept.
- **`*ex patre,*` and `*de patre*` both → *from the father*** (0133B, 0133C). English has one
  preposition for Migne's two; nothing in Jerome's etymology of *Moab* turns on the difference.
  Recorded rather than hidden.

### (c) The *foedus* / *pactum* / *testamentum* triad is kept 1:1, because the gloss distinguishes them
0122D prints the distinction as its whole point — *In Hebraeo* berith *quod non testamentum, sed
foedus, sive pactum significat.* So, fixed for the range: **`testamentum` → testament ·
`foedus` → covenant · `pactum` → compact.** Hence « I will establish my **compact** » (0124C, Gn
17:19) beside « And an everlasting **covenant** » in the next line — Migne's two words, not one
English word twice. Same reason as the *mysterium*/*sacramentum* pair below.

### (d) The vocabulary axes, with the instrument checked first
- **`gentes` — 8 occurrences, split by the axis, and the split is recorded because it is visible on
  one page.** **Gentiles** where the *Judaei*/*gentes* typology is explicit: 0124A *vocatione
  **gentium*** (Isaac the type of the Church against Ismael the type of the Jews) and 0128A *omnes
  **gentes** per fidem*, opposed in the same clause to *gens Judaeorum secundum carnem*.
  **Nations** where the sense is plainly generic, which is the axis's own named exception: 0122B
  *omnes gentes quibus desertum … jungitur*; 0123A *pater multarum **gentium***; 0123C *ne
  misceretur semen ejus **gentibus***; 0123D *pater multarum gentium*; 0124B *omnium … gentium
  princeps futura*.
  ⚠ **The one place the split shows: 0128A.** The lemma « in eo benedicentur omnes **gentes**
  terrae » is the generic verse formula and reads "all the **nations** of the earth"; the
  exposition four words later, *omnes **gentes** per fidem* against *gens Judaeorum*, is the
  typology and reads "all the **Gentiles** through faith". Both are the axis as written; the lemma
  and its re-quotation therefore differ, which is the one thing 7a″ normally forbids. **Flagged
  here rather than decided silently** — if the merge prefers one word for both, it is "nations"
  in both places, and the typology then lives only in *gens Judaeorum* → "the Jewish nation".
- **Singular `gens` of a people → nation**: 0121A *gentem Christianam* → "the Christian nation",
  *gens Judaeorum* → "the nation of the Jews"; 0128A *gens Judaeorum* → "the Jewish nation";
  0128A *in gentem magnam futurus* → "about to be a great nation".
- ⚑ **Instrument checked before reporting.** `natio` matches **once** in 5,245 words (0123B
  *nationibus* → "nations"); the other three hits are *cognatione / incarnationem / peregrinationem*.
  `turb-` fires **nine** times and **every one is *perturbare* / *perturbatio*** — there is **no
  `turba` at all** in this range, so the *turba*/*multitudo* pair is not exercised on the *turba*
  side. `multitudo` fires three times (0121A *multitudine*, 0122A *prae multitudine*, 0124D
  *multitudo*) and is **multitude** in all three.
- **`mysterium` → mystery, `sacramentum` → sacrament**, and the 1:1 pair IS exercised: 0126A
  *mysterium futuri sacramenti* → "the mystery of the sacrament to come".
- **Zero `daemonium`, `diabolus`, `satanas`, `gentilis`, `gentilitas`, `ethnicus`** in range.
- **The commentator's own voice is not archaised** (`dicit`/`ait` → "says"); `-est`/`-eth` forms
  appear only inside quoted scripture and in second-person singular address.
- **Pattern 17.** Singular → *thou*: 0121A *cujus tu pater futurus es* → "whose father thou art to
  be"; 0121C *Scito praenoscens* → "Know thou beforehand"; 0122C *non apparebit tibi* → "shall not
  appear to thee"; 0122D *Nec ultra vocabitur nomen tuum* → "Neither shall thy name any more be
  called"; 0131A *Si vis perfectus esse … quae habes* → "If thou wilt be perfect … that thou hast".
  Plural → *you*: 0123B *ex vobis* → "among you"; 0126D 1 Cor 3:2 *Lac potum dedi vobis* → "Milk I
  gave you to drink"; 0129D *Videte si inveniatis* → "See if you find".
  ⚑ Two plural imperatives are rendered as bare English imperatives, which mark no number:
  0130A « Lavate. » → « Wash. » and 0132B « Mementote uxoris Lot, » → « Remember the wife of Lot, ».
  *Wash ye* / *Be ye mindful* were drafted and withdrawn — Pattern 17 gives the plural **you**, not
  *ye*, and an English imperative supplies no pronoun at all.

### (e) `usque ad` — 10 formulas, 5 ordinary, decided per occurrence by the `etc.` splice test
**Formula (italic, following an `etc.`, 10×):** 0121A, 0121B, 0121C, 0121D ×2, 0122A, 0123C,
0127D, 0131C, 0132C. Every one is preceded by `etc.` and names the point at which the abridgment
resumes; **no verb and no object was supplied to any of them.** Three tails land mid-clause and
stay there: 0121C *as far as* "a disturbance not to be named" (the governing verb is inside the
cut — *non dicendam perturbationem* rendered as the bare accusative phrase it is); 0121D *as far
as* "and they arrive at Solomon"; 0131C *as far as* "whence it is said to Lot:", whose colon is
Migne's and closes on nothing.
⚠ **0131C's formula prints as the non-word `*uque ad*` in our twin. The plate reads `usque ad`**
(600 dpi, p. 71), so the defect is OURS; the English renders the formula and the patch file carries
the repair. **No `[sic:]`** — it would accuse a clean page.
**Ordinary Latin (5×), none italic, none after an `etc.`, each rendered by sense:** 0121B *ab Adam
usque ad Noe, et inde usque ad Abram, deinde usque ad David* → "from Adam **to** Noah, and thence
**to** Abram, and then **to** David" (three in one clause); 0128D *a quo usque ad decem descendit*
→ "from which he descends **down to** ten"; 0128D *Usque ad decem justos non perire Sodomam dixit*
→ "**up to** ten just men". ⚑ The two at 0128D were deliberately **not** given the formula's "as
far as", to keep the abridgment mark distinguishable on a page where it occurs nowhere else.
⚠ Also present and NOT this word: 0122C *Usque hodie* → "To this day", and 0123B *quantum pertinet*
→ "so far as pertains".

### (f) Heads and frontmatter
`CAPUT XV.` → `CHAPTER XV.`, `CAPUT XVI.` → `CHAPTER XVI.`, `CAPUT XVII.` → `CHAPTER XVII.`,
`CAPUT XVIII.` → `CHAPTER XVIII.`, `CAPUT XVIII. (cont.)` → `CHAPTER XVIII. (cont.)`,
`CAPUT XIX.` → `CHAPTER XIX.` **Numerals mirror the plate.** Frontmatter copied VERBATIM from each
Latin chunk, field order included.

### (g) Three addresses Migne prints irregularly, all reproduced as printed
- **`VERS. 27-19.--` at 0127D — the plate's own reading, and our TEI had normalized it.** See §2.
- **`« VERS. 10.--Et habebit filium, »` at 0127A** — Migne sets the verse address **inside** the
  guillemets. Reproduced there, untranslated, exactly as the twin has it.
- **`VERS. 37, 38. «` at 0133B** — no `--` after the period, where every other address in the range
  prints one. Reproduced bare.

---

## §2 · ⭐⭐ 0127D — `VERS. 27-19.` IS WHAT THE PLATE PRINTS, and our twin had tidied it

    twin:   VERS. 17-19.-- « Num celare potero Abrahae quae « gessurus sum. »
    plate:  VERS. 27-19. — « Num celare potero Abrahæ quæ « gessurus sum. »

Read at 600 dpi on p. 69 (corner numbers 127/128 checked first). **The first digit is a 2, not a
1**, and the control is on the same line: the `1` of the adjacent `19` is a plain vertical stroke
with a foot-serif, while the first glyph carries the flat base and curled head of a 2. A second
control sits on p. 71, where Migne sets `VERS. 17-19.` correctly for Gn 19:17–19 — the same two
digits, in the same fount, unmistakably different.

**The English renders the plate: `VERS. 27-19.--`.** Three reasons, and they agree:
1. The locked rule — *where a translator has opened the column at the plate and Migne's type
   differs from our TEI twin, the English renders what Migne printed*, with the pending patch filed.
2. It is not a mark, so it is not covered by the punctuation-follows-the-twin carve-out. It is
   content: a citation address, and this edition's addresses are its citation-resolving apparatus.
3. Migne's own printing is not ours to tidy — the series brief's rule for a verse number out of
   sequence (Jude prints VERS. 23 before VERS. 21) is this case exactly, one step further along.

⛔ **No `[sic:]`**, and it could not have taken one: the marker's content must be verbatim in the
Latin twin, and the twin prints `17-19`. The patch is what makes the two columns agree again.
⚑ **This is the sharpest instance in the range of brief §4 — the digitization "corrects" as well as
corrupts — and nobody could have flagged it from the Latin alone**, because `VERS. 17-19.` is
exactly the address the lemma requires. Only the plate shows it.

---

## §3 · THE THREE UNPAIRED GUILLEMETS — all three MIGNE'S, all plate-read

The rebuilt brief emits these as `⚠ UNCLOSED «` spans running to the end of their paragraph, and
warns the printed span may be short of what Migne quotes. Each was collated at the line, not from
the brief.

| col | Migne opens | what he is quoting | plate |
|---|---|---|---|
| 0127B | `« Quo audito, etc.` | **Gn 18:10** *Quo audito, Sara risit post ostium tabernaculi* — agrees verbatim as far as it runs | p. 69: opens, never closes |
| 0127D | `« Non risi, etc.` | **Gn 18:15** *Negabit Sara, dicens: Non risi, timore perterrita* — agrees verbatim | p. 69: opens, never closes |
| 0129D | `« Videte si inveniatis hominem facientem justitiam [n: (Jer. V)];` | **Jer 5:1**, and it DIVERGES — `[var:]` fired, §4.1 | p. 70: opens, never closes |

**All three are mirrored unclosed** (Pattern 5's corollary). In each the `etc.` or the `quasi:` that
follows shows the quotation is complete for Migne's purpose; the missing `»` is his.
⚠ The fourth apparent anomaly is not one: at **0121A** and **0127D** an inner `«` stands at a
line head inside a closed span (`« Dixitque Abram. [n: …] « Ego vado sine liberis, »`;
`« Num celare potero Abrahae quae « gessurus sum. »`). That is Migne's line-continuation mark, the
class the 0000 stint identified, and it is reproduced in place. **At 0121A the plate actually sets a
CLOSING `»` there** and our twin sets `«` — a mark, so the English follows the twin and the patch
file carries the plate reading.

---

## §4 · ⚠⚠ 7a″ — THE VULGATE COLLATION. This is the deliverable.

Every lemma in these five chunks was collated against `sources/vulgate/clementine-flat.txt` by
grepping the verse, cited book chapter:verse — **never from memory**. Agreements are listed with
divergences, because a list of findings alone cannot be told apart from a report by an agent that
never looked.

### 4.0 ⭐⭐ THE FLAGGED SITE, 0121A — `« Suspice coelum, »` — **NOT a divergence**, and the reason is in OUR comparand

    [0121A] VERS. 5-8.-- « Suspice coelum, »   ⚑ MATCHES ONLY ELSEWHERE — Job 35:5  (lemma is Gn 15)

**Verdict: Migne prints Gn 15:5's own words. No marker. The flag fired on a defect in the
Clementine copy on disk, compounded by orthography.** Walked at the line and settled with the file:

1. **The verse is fixed independently of the words.** The address is `VERS. 5-8.` under
   `## CAPUT XV.`; its neighbours are `VERS. 2.` (Gn 15:2 *Dixitque Abram*) and `VERS. 9-10.`
   (Gn 15:9 *Sume, inquit, mihi*); and the paragraph's own next lemma is
   **« Sic erit semen tuum, »** — the closing words of **Gn 15:5**, which our file carries verbatim.
   So the lemma is Gn 15:5 and cannot be Job.
2. ⛔ **`sources/vulgate/clementine-flat.txt` line 15072 and `clementine/Gn.lat` line 365 both read
   `Suscipe cælum` at Gn 15:5.** The received Sixto-Clementine reads **`Suspice cælum`**, as does
   Weber. **The defect is in our copy, not in Migne** — and `sources/vulgate/README.md` says in
   terms that later upstream corrections are not applied and that a call turning on a single letter
   must say so rather than trust this copy to that precision. This is that case, on the comparand
   side.
3. **`coelum` for `caelum` is Migne's orthography throughout this book** and is not a divergence
   (cruces-0000 settled it). With `Suscipe` in the flat file, a normalized phrase search could match
   neither Gn 15:5 nor anything else in Genesis — so it fell through to **Job 35:5**
   (*Suspice caelum, et intuere*), a different book that the commentary has not reached and does
   not cite. The `⚑` is telling you where the *string* matched, which is exactly what the brief says
   it does.
4. **The plate, read at 600 dpi (p. 66, col 121, band A, corner numbers checked first):**
   `VERS. 5-8. — « Suspice cœlum, » etc. Superius dixit :` — Migne's type reads **Suspice coelum**.
   So there is nothing here to mark against him.

⭐ **AND THE RECURRENCE, which is why the brief tells you to look for one.** The same class fires a
second time nine lines below, at **0121B `« Vaccam triennem, et capram trimam, »`** — marked
`⚠ NOT in Clementine verbatim` on the same grounds. **Our copy reads `vaccam trienem` at Gn 15:9**
(one *n*); the received Clementine reads `triennem`, exactly as Migne prints it. **No divergence
there either.**

⛔ **The finding worth carrying past this stint: the comparand can manufacture a divergence.**
CLAUDE.md 8a records the digitization manufacturing one on the *Latin* side (9003's
`judicabit`→`judicavit`); this is the same failure on the *Vulgate* side, twice in one column, and
no plate read can catch it — only reading the received text can. **Both would have produced a false
public claim against Migne had the ⚠/⚑ been trusted as findings.** Every single-letter divergence in
§4.2 below is therefore reported as a single-letter divergence and declined.

### 4.1 The eleven `[var:]` fired — all on columns read at the plate this session

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0121A | « Ego vado sine liberis, » | **Gn 15:2** *ego **vadam absque** liberis* | present for future in a lemma given bare as the verse; two words of four differ. Old Latin. |
| 0121C | « **Pavor** irruit, » | **Gn 15:12** ***sopor** irruit super Abram* | ⭐ **the gloss rests on it.** Augustine's *quaestio* is *propter eos qui contendunt istas **perturbationes** non cadere in animum sapientis* and the resumption tail is *non dicendam **perturbationem***: the whole question is about a disturbance of mind, which *pavor* is and *sopor* is not. |
| 0122C | « Videbis posteriora mea, **nam facies non apparebit tibi**. » | **Ex 33:23** *videbis posteriora mea: **faciem autem meam videre non poteris*** | a different clause, not an abridgment. Old Latin. And the gloss is built on the face/hinder-parts opposition it states. |
| 0122C | « Non enim **homo videbit faciem meam** et vivet » | **Ex 33:20** *non enim **videbit me homo** et vivet* | *faciem meam* supplied for *me*, and the order changed — and the next sentence expounds precisely the seeing of the face: *Illam enim manifestationem sapientiae Dei nemo potest videre et vivere.* |
| 0124D | « Ascendit Deus **ad** Abraham, » | **Gn 17:22** *ascendit Deus **ab** Abraham* | ⭐ **the direction is reversed** — one preposition, and the *Glossa Graeca* immediately infers *Ergo … descenderat*. The 11535 @1360C shape (*ab* for *ad*), here on quoted scripture, so Pattern 14 and not Pattern 18. |
| 0126A | « Abraham **vidit** diem meum et gavisus est » | **Jo 8:56** *Abraham **pater vester exsultavit ut videret** diem meum: **vidit, et** gavisus est* | not an ellipsis: the two-clause structure is collapsed into one and the governing verb changed. The gloss then reads it as simple foresight — *Praevidit enim mysterium futuri sacramenti.* |
| 0128A | « in eo benedicentur omnes **gentes** terrae. » | **Gn 18:18** *benedicendae sint **in illo** omnes **nationes** terrae* | ⭐⭐ **7a″'s own case: the exposition uses the lemma's word and not the Vulgate's.** Migne's *gentes* is picked up four words later in *omnes **gentes** per fidem*, against *gens Judaeorum secundum carnem* — the whole point of the sentence. Also *benedicentur* (fut. ind.) for the gerundive and *in eo* for *in illo*. |
| 0129D | « Videte si inveniatis **hominem** facientem **justitiam** » | **Jer 5:1** ***an** inveniatis **virum** facientem **judicium*** | three words, and *justitiam* is the load-bearing one: the passage is Abraham's bargain for the **just** men of Sodom, and the gloss glosses it *quasi: Invenite vel unum, et parco eis.* |
| 0130A | « Hospitalitatem nolite oblivisci: per hanc enim **placuerunt quidam Deo**, angelis hospitio receptis. » | **Hbr 13:2** *per hanc enim **latuerunt quidam**, angelis hospitio receptis* | ⭐⭐ **the largest divergence in the range.** The Vulgate says some have entertained angels *unawares*; Migne says some have *pleased God*. A different verb and an added *Deo* — and the sentence is adduced as the proof of *commendatur virtus hospitalitatis*, which Migne's form asserts and the Vulgate's does not. |
| 0130D | « **Ecce duae filiae meae quae non** cognoverunt virum, » | **Gn 19:8** ***Habeo duas filias, quae necdum*** cognoverunt virum | the clause is restructured and *necdum* → *non*. Adduced by Jerome as the proof that the daughters were virgins, against the *generos* of Gn 19:14 — a proof-text, and the wording is what carries it. |
| 0131A | « Si vis perfectus esse, vade **et** vende **omnia** quae habes, » cited ***Marci XIX*** | **Mt 19:21** *Si vis perfectus esse, vade, vende quae habes, **et da pauperibus*** | *omnia* added (from Lc 18:22) and the clause re-jointed. ⚑ **And the citation names Mark 19, which does not exist** — Mark has sixteen chapters and the verse is Matthew's. Plate-confirmed as Migne's type (p. 71); reproduced uncorrected per the sigla rule, and **the marker names the real source**, following the 0008 stint's treatment of `Joan. V` for Job 5:3 at 0103B. |

### 4.2 DIVERGENT and DECLINED ON THE MERITS — every one on a read column, so the marker was available

**These are the ones a blind reader will find, so each says why it was refused.**

- **0121A « Erit semen tuum sicut arena maris, »** — introduced *Superius dixit*. **Not a Vulgate
  verse.** Gn 13:16 has *sicut pulverem terrae*, Gn 22:17 *velut arenam quae est in littore maris*,
  Gn 32:12 *sicut arenam maris* of Jacob. It is the gloss's own summary back-reference. `[var:]` has
  no received reading to name; declined and recorded, as the 0008 stint recorded 0102A.
- **0121A « Sic faciam semen tuum, »** — likewise no Vulgate verse: Rabanus's coined antithesis to
  Gn 15:5's *Sic erit semen tuum*, which stands three lines below with the sand instead of the
  stars. Declined.
- **0122B « Tu laborem et dolorem consideras, et tibi derelictus est pauper, »** — **Ps 9:35**
  *Vides, quoniam tu laborem et dolorem consideras, **ut tradas eos in manus tuas**. Tibi
  derelictus est pauper.* Migne drops the opening *Vides quoniam* and the *ut tradas* clause and
  joins the two halves with *et*. One verse abridged, and the omitted clause is not what the gloss
  adduces it for (*gratuito consulit miseris*). Declined; the joining *et* is recorded.
- **0122B « Vocavit autem Agar. »** — **Gn 16:13** *Vocavit autem **nomen Domini qui loquebatur ad
  eam***. Migne's lemma names Agar, whom the Vulgate leaves as the implicit subject, and cuts the
  object. **Declined as a clipped lemma with the subject supplied for the address**, convention 3's
  shape: the gloss immediately restores what is cut (*Recte **nomen ejus** ita vocavit*), so nothing
  rests on the difference. Recorded because the substitution of a proper name into a lemma is
  unusual.
- **0123A « Daboque tibi et semini tuo. . . .et omnem terram Chanaan. »** — **Gn 17:8** *Daboque
  tibi et semini tuo **terram peregrinationis tuae,** omnem terram Chanaan*. Migne's own four-point
  ellipsis marks the cut, and the *et* before *omnem* is his join. A signalled abridgment, not a
  variant. Declined.
- **0123B « Circumcidetur ex vobis masculinum, »** — **Gn 17:10** *circumcidetur ex vobis **omne**
  masculinum*. One word dropped; nothing in Strabo's three causes turns on it. Rendered without
  "every", literally. Declined.
- **0124B « Cecidit Abraham in faciem suam, et risit in corde suo. »** — **Gn 17:17** *Cecidit
  Abraham in faciem suam, et risit, **dicens** in corde suo*. Dropping *dicens* moves *in corde suo*
  onto *risit*, which makes the laughter interior — and interiority is close to Jerome's point
  (Isaac is named from **Abraham's** laughter, not Sara's). ⚠ **The nearest of the declines to the
  line.** Refused because a single dropped word yields a perfectly natural reading either way, and
  because Jerome's argument is about *whose* laughter, not about where it was.
- **0124C « Et vocabis nomen ejus Isaac: »** — **Gn 17:19** ***vocabisque** nomen ejus Isaac*. A
  connective. Declined.
- **0124C « Et foedus sempiternum, »** — **Gn 17:19** *constituam pactum meum illi **in** foedus
  sempiternum*. A clipped lemma with *in* → *Et*. Declined.
- **0125A « Nos sumus enim circumcisio, qui spiritu Deo servimus. »** cited *Phil. III* — **Phlp
  3:3** *Nos **enim sumus** circumcisio, qui spiritu **servimus Deo***. Word order twice, sense
  identical, citation correct. Declined.
- **0126D « Lac potum dedi vobis, non escam, »** cited *I Cor. III* — **1 Cor 3:2** *lac **vobis
  potum dedi**, non escam*. Word order only; citation correct. Declined.
- **0127B « Laetare sterilis, quae non parturis, »** cited *Isa. LIV et Gal. IV* — **Gal 4:27**
  *Laetare sterilis, quae non **paris**; erumpe et clama, **quae non parturis***; **Is 54:1**
  *Lauda, sterilis, quae non paris*. Migne joins Galatians' opening to Galatians' second relative
  clause, skipping the middle. ⚑ **Declined because Migne cites BOTH sources himself**, so the
  conflated form is a citation-form question, not a text divergence — the 0004 stint's 0082B
  precedent. And nothing in the gloss rests on *paris* against *parturis*. Rendered *parturis* as
  "travailest", keeping the two verbs distinguishable.
- **0127D « Num celare potero Abrahae quae gessurus sum. »** — **Gn 18:17** *Num celare potero
  **Abraham** quae **gesturus** sum*. Two divergences, **both plate-confirmed at 600 dpi**:
  *Abrahae* (dative, the late/medieval construction of *celare*) for the accusative, and *gessurus*
  (a perfect-stem analogical future participle) for *gesturus*. **Declined: neither has an English
  exponent** — both readings give "hide from Abraham" and "what I am about to do", so Pattern 14's
  "in a way that changes the sense" is not met. ⛔ **And no `[sic:]` on *gessurus*:** it is a
  well-formed Latin word-shape, not broken type, and Addendum A's rule is that a real word that
  reads oddly is Migne's until a plate says otherwise — here the plate says it IS Migne's.
- **0128A « in gentem magnam futurus, »** — **Gn 18:18** *cum **futurus sit** in gentem magnam*.
  The verse's own words, re-jointed into Migne's sentence as a participial phrase. Declined.
- **0128A « in quo sunt omnes thesauri sapientiae et scientiae absconditi »** cited *II Cor. II* —
  **the text agrees with Col 2:3 exactly**; it is Migne's citation that is wrong, and the plate
  prints it barer still (`(II Cor)`, no chapter). No `[var:]`, since Pattern 14 marks the text; the
  note rides verbatim per `refDisplay`. Same shape as the 0008 stint's *Psal. LIII* at 0100B.
- **0129A « Memento, Domine, quoniam pulvis sum »** cited *Psal. X* — **no psalm carries these
  words.** The nearest is **Ps 102:14** *recordatus est quoniam pulvis sumus*, third person and
  plural; Ps 10 carries neither the words nor the sense. Gregory's adaptation, cited to a psalm that
  is not its source. `[var:]` has no received reading to name; declined and recorded, with the
  citation logged.
- **0130C « Percusseruntque caecitate. »** — **Gn 19:11** *percusserunt caecitate*. An enclitic
  *-que*. Declined.
- **0132B « Nemo ponens manum in aratro, et respiciens retro, aptus est regno Dei. »** cited
  *Luc. IX* — **Lc 9:62** *Nemo **mittens** manum **suam ad aratrum***. Two words, and the citation
  is correct. **Declined: no sense change** — "putting his hand on the plough" and "putting his hand
  to the plough" assert the same thing, and the gloss is entirely about the looking back. Rendered
  *in aratro* as "on the plough", not conformed to the familiar "to the plough".
- **0132B « Mementote uxoris Lot, »** cited *Luc. XVII* — **Lc 17:32** ***Memores estote** uxoris
  Lot.* A synthetic imperative for the periphrasis; identical sense, correct citation. Declined.
- **0132C « Recordatus est Abrahae. »** — **Gn 19:29** *recordatus Abrahae* (participle). Migne
  makes it finite. Declined.
- **0132D « et nescivit quod dormissent cum eo; »** — **no Vulgate equivalent**: Gn 19:33 reads *at
  ille non sensit, nec quando accubuit filia, nec quando surrexit* and 19:35 *et ne tunc quidem
  sensit*. Migne's clause is the LXX/Old-Latin form. ⚑ **Declined because the sentence around it is
  ITSELF a note on the reading's textual status** — *appungunt enim desuper Hebraei obelo, quasi
  superfluum* — so the divergence is the passage's own subject and a `[var:]` would tell the reader
  twice. Same instinct as §4.3.
- **0133B/0133C the Ammon etymologies** — *filius generis mei*, *benammi*, *filius populi mei*,
  *populus meus*, *de patre* — are Jerome's Hebrew glosses, not quotations. **Gn 19:38** does print
  *id est, Filius populi mei*, which agrees. No marker.

### 4.3 A divergence Migne LABELS as a rival version — no `[var:]` by construction

- **0131A « Egressus est Lot, et locutus est ad sponsos qui accepturi erant filias ejus: »**,
  introduced ***Sed Hebraica veritas habet.*** Gn 19:14 reads *Egressus **itaque** Lot, locutus est
  ad **generos** suos qui accepturi erant filias ejus*. **The divergence is the sentence's whole
  argument** — *sponsi* against *generos*, which is what decides whether the daughters were married
  — and Migne announces the witness in his own voice. Convention (b), settled by the 0008 stint:
  the marker would restate what the text already says. **Declined by construction, and it is the
  only instance of the class in this range** — which is worth recording, since the 0095–0106 range
  carried twelve.

### 4.4 Lemmata collated and found to AGREE with the Clementine — recorded, per 7a″

Gn 15:1 (« His itaque transactis, » · « Noli timere. ») · 15:5 (« Suspice coelum, » — §4.0 ·
« Sic erit semen tuum, ») · 15:9 (« Sume, inquit, mihi, » · « Vaccam triennem, et capram trimam, »
— §4.0) · 15:11 (« Descenderuntque volucres, ») · 15:13 (« Scito praenoscens, » ×2) ·
15:16 (« Generatione autem, ») · 16:1 (« Igitur Sarai uxor Abram, ») · 16:2 (« Ingredere ad
ancillam, ») · 16:12 (« Hic erit ferus homo. ») · 16:13 (« Profecto hic vidi posteriora videntis
me. ») · 16:14 (« Propterea appellavit puteum illum, ») · 17:2 (« Ponamque foedus, ») ·
17:5 (« Nec ultra vocabitur nomen tuum Abram. ») · 17:8 (« In possessionem aeternam. ») ·
17:11 (« Carnem praeputii. ») · 17:14 (« Masculus cujus praeputii caro, ») · 17:15 (« Sarai uxorem
tuam, ») · 17:19 (« Nomen ejus Isaac. » · « Constituam pactum meum, ») · 17:20 (« Super Ismael, »)
· 17:21 (« In anno altero. ») · 17:23 (« Tulit autem Abraham, ») · 18:1 (« Apparuit autem ei
Dominus in convalle Mambre. ») · 18:2 (« Tres viri. » · « Quos cum vidisset. ») · 18:4 (« Sed
afferam. ») · 18:6 (« Tria sata. » ×3 · « Subcinericios. ») · 18:7 (« Vitulum tenerrimum. ») ·
18:8 (« Butyrum et lac ») · 18:9 (« Ecce in tabernaculo est, ») · 18:10 (« VERS. 10.--Et habebit
filium, » · « Quo audito, ») · 18:11 (« Erant autem, ») · 18:12 (« Voluptati operam dabo? » —
**including Migne's question mark, which is the Vulgate's own**) · 18:15 (« Non risi, ») ·
18:20 (« Clamor Sodomorum et Gomorrhae, ») · 18:21 (« Descendam et videbo, ») · 18:24 (« Si
fuerint quinquaginta justi, ») · 18:27 (« Loquar ad Dominum, » clipped · « Loquar ad Dominum meum,
cum sim pulvis, » clipped · « Loquar ad Dominum meum cum sim pulvis et cinis, » **verbatim**) ·
18:28 (« Quinque fuerint. ») · 18:32 (« Quid si inventi, » · « Decem. » · « Dixit. ») ·
19:1 (« Veneruntque duo angeli, » · « vespere, » · « Qui cum vidisset, ») · 19:2 (« Lavate. ») ·
19:3 (« Compulit illos. ») · 19:8 (« Habeo duas filias. ») · 19:10 (« Et introduxerunt ad se
Lot. ») · 19:14 (« Egressus, ») · 19:15 (« Cumque esset mane, ») · 19:17 (« In monte. ») ·
19:19 (« Nec possum in monte: ») · 19:20 (« Est civitas, » · « Est civitas haec juxta, » ·
« Juxta » · « Ad quam possum, ») · 19:21 (« Ecce etiam in hoc suscepi preces tuas, ») ·
19:24 (« Igitur Dominus pluit super Sodomam, ») · 19:25 (« Universos habitatores. ») ·
19:26 (« Respiciensque uxor ejus. ») · 19:29 (« Cum enim subverteret, ») · 19:30 (« Ascenditque, »
· « Ascenditque Lot de Segor, ») · 19:31 (« Dixitque major ad minorem, ») · 19:32 (« Veni,
inebriemus, ») · 19:33 (« Dederunt, ») · 19:36 (« Conceperunt ergo, ») · 19:37 (« Vocavit nomen
ejus Moab, ») · Rom 2:28 (« Non enim qui in manifesto Judaeus est… » — **verbatim, including the
comma placement**) · Lc 8:8 (« Qui habet aures audiendi, audiat; ») · Mt 5:8 (« Beati mundo
corde ») · Act 15:9 (« Fide purificans corda eorum. ») · 1 Cor 7:5 (« Nolite fraudare invicem, »).

⚠ **One near-agreement recorded as such: 1 Cor 7:2 « Propter fornicationem unusquisque uxorem
habeat. » (0131B)** drops *autem* and *suam*. Neither is sense-bearing and the citation is correct;
listed here rather than in §4.2 because the omission is of two function words.
⚠ **`coelum` for *caelum*, `Chanaan`/`Sodomam`/`Gomorrhae` capitalization, and `Samsom` for
*Samson* (0124C) are orthography, not divergence.** The name is rendered by its established English
form; the plate's spelling stands in the facing Latin.

---

## §5 · THE DECLINED LIST — suspect readings, what settles each, and why NO `[sic:]` fired

**Zero `[sic:]` in 5,245 words, and on this book that is now four stints and 22,000+ words.** The
reason is stated once and holds for every entry: a `[sic:]` accuses Migne's type, its content must
be verbatim in our twin, and **every plate defect this range actually contains is one our twin has
already tidied away** — so the marker is owed after the patch, not withheld now. The mirror case is
equally firm: every defect our twin carries is OURS, and a `[sic:]` on one would blame a clean page.
On 9004, translating agents' "probably our-file" calls were right 5 times and wrong 9; here the
plate decided all nine, and it went both ways.

### 5.1 Non-words in the twin — ALL THREE ARE OURS, settled at the plate

| col | twin | plate (600 dpi) | settled on | rendering |
|---|---|---|---|---|
| 0130D | *virginet* | **virgines** | p. 70, lower right | "virgins" |
| 0131C | *uque ad* | **usque ad** | p. 71, col 131 band C | the formula, "*as far as*" |
| 0131B | *agno scebat* (split run) | **agno-scebat**, an ordinary hyphenated line break | p. 71 | "recognized" |

⚑ **The split run is the dangerous shape** (7a⁗-b): quarantining *agno scebat* under Pattern 10
would have taken the clause's only finite verb out of *quem in angelis agnoscebat*. It was not
quarantined, because it is not Migne's. A fourth, *supplicio-ignis* at 0131A, is a spurious hyphen
in the twin (plate: a space) and is likewise ours.

### 5.2 Non-words on the PLATE — three, all normalized away by our twin, none markable

`eic.` for *etc.* (0129B) · `Sodomorm.` for *Sodomorum* (0129C) · `susperstites` for *superstites*
(0133A). All three read at 600 dpi. **These are Migne's, and they are exactly the class brief §4
warns cannot be seen from the Latin alone** — our file prints three perfectly good words. Each
becomes a live `[sic:]` after the patch lands; none is one now, because the guard would reject it
and rightly.

### 5.3 ⭐ A SUSPICION WITHDRAWN AT THE PLATE — 0123B `(RAB. STRAR.)`

Raised at 150 dpi as an obvious `STRAB.` mis-transcribed. **Read at 600 dpi, the plate sets
`STRAR.`** — Migne's own broken small-cap sort, and our twin is faithful. No patch, no marker.
⚠ Migne's `( sic )` rule applies in spirit: this is inside an `[n:]`, whose contents ride verbatim
and untranslated, so nothing of ours goes near it. **Recorded because it is the exact shape of the
8955 @0629D *ulit*-for-*Tulit* finding and went the other way**, and because a checked negative is
worth having beside §5.2's three positives.

### 5.4 Real words that read oddly — rendered as printed, no marker (Addendum A)

- **0123D *pueri circumcisi*** — **this one took a `[cj:]`, see §6.** The plate reads *circumcisi*,
  so it is Migne's and there is nothing to `[sic:]`.
- **0124D *Annus alter … tempora sunt regenerationis*** — a singular subject with a plural
  predicate nominative. Rendered as printed, "The other year … is the times of regeneration".
  English carries the disagreement, so Pattern 12's second test (a defect with no English exponent)
  is not triggered and no marker is needed. Logged.
- **0132A *ne posset adverti impiissimum facinus Sodomitarum*** — Alcuin on why the infants were
  burned. *adverti* will not construe comfortably in any of its senses ("be turned aside", "be
  attended to"); the sense the argument wants is that the crime should be left without trace.
  **Rendered literally — "lest the most impious deed of the Sodomites could be turned aside" — and
  the conjecture is here and not in the text.** Candidates weighed: *animadverti* ("be punished",
  the likeliest, and a haplography of *anim-* is a plausible compositor's slip) and *averti*.
  ⛔ **No `[cj:]`**: the printed word does not make the sentence assert something Alcuin is arguing
  *against* — it makes it assert nothing very clearly, and Pattern 18's own boundary is that a
  sentence too broken to assert is not the marker's business. Plate read (p. 71): Migne's type is
  `adverti`.
- **0127B *mirum est: nisi homines prius arbitratus est, sed in quibus Deum loqui intelligeret*** —
  the roughest sentence in the stint; the *mirum est* has no complement and the *nisi* clause hangs.
  Rendered clause by clause as printed. Plate (p. 69) agrees with the twin word for word. No marker.
- **0130A *ut sciamus Deo benefacere, jucundum et placitum Deo proprie esse ulcisci vero Deo
  ingratum esse*** — the *Glossa Graeca*'s Latin, with no punctuation between *esse* and *ulcisci*.
  Rendered on the reading that *proprie esse* governs *benefacere* ("that to do good is proper to
  God") and that *ulcisci … ingratum esse* is the answering member. Plate agrees with the twin. No
  marker; the alternative construal (*Deo benefacere* = "to do good **to** God") is recorded here.
- **0122A *et omnibus bonis contrarius*** — *bonis* is masculine or neuter and the plate does not
  disambiguate. Rendered **"contrary to all good things"**; "to all good men" construes equally and
  is what the sentence's own subject (the persecuting people) suggests. Nothing in the passage
  decides it. Logged rather than chosen silently.

### 5.5 Unexpressed subjects supplied, with what decided each

- **0122B *Recte nomen ejus ita vocavit*** — supplied **"she" = Agar**, from the lemma directly
  above (« Vocavit autem Agar. »), and *ejus* = the Lord's, from Gn 16:13's *nomen Domini qui
  loquebatur ad eam*. The alternative (an impersonal "one called") would detach the naming from the
  woman the whole gloss is about.
- **0122D *Propterea appellavit puteum illum*** — the Vulgate leaves the subject unexpressed at Gn
  16:14 too. Rendered **"she called"**, continuous with the lemma two paragraphs above, and noted.
- **0129A *Quosdam per tumorem sensus non elevat*** (chunk 0022's opening, mid-sentence from the
  previous chunk) — **the Latin prints no subject at all**, and the chunk boundary cuts off what
  would have supplied it. Rendered with a bare **"it"**, which is as open as the Latin: candidates
  are *abundantia*/wealth (from the *terrenis abundare* two clauses on) and God. ⛔ **Not chosen** —
  this is the 11613 class, and naming the subject here would be a guess wearing Gregory's voice.
- **0127B *illius risus admirationis fuit, hujus dubitationis*** — ⚠ **the one place two readings
  both construe and the choice matters.** The argument requires **Abraham's** laughter to be of
  wonder and **Sara's** of doubt: Sara alone is reproved, she alone denies it, and *Abraham vero
  Deum intelligebat* follows. But the classical pointer runs the other way — the nouns stand in the
  order *Sara … Abraham*, so *illius* (the former) is Sara and *hujus* (the latter) is Abraham.
  **Rendered so as to keep the ambiguity the Latin has: "because the laughter of the one was of
  wonder, that of the other of doubt."** Nothing is decided in the text; the argument for
  Abraham=wonder is recorded here. Augustine's own *Quaest. in Hept.* I.36 has *admirantis* /
  *dubitantis* in that order.
- **0128A *duo illi promittuntur*** — read as dative, "two things are promised **him**". *duo illi*
  as "those two" also construes; the colon that follows lists the two, so the numeral is doing the
  work either way. Logged.

### 5.6 What was checked and found NOT to be a defect

- **0125C the missing colon after *mundabantur*.** The plate prints `mundabantur : unde :`; our twin
  prints `mundabantur unde:`. **The English follows the twin and therefore reads "as before
  circumcision holy men were cleansed whence: « … »"** — abrupt, and deliberately so. A mark, so
  convention (ii) governs. Recorded prominently because a blind reader will meet it and read it as
  ours.
- **0125C the opening guillemet before « Fide purificans corda eorum. »** is **not on the plate** —
  our twin supplied it. The English carries it, because guillemet parity against the twin is a hard
  `verify-english` check. ⭐ **This is the inverse of the 0008 stint's 0106A**, where the twin
  *dropped* an opening mark. Two directions, one class, and only the plate separates them: the
  corollary the 0008 stint drew — never adopt a policy about unpaired marks without reading the
  column — is confirmed from the other side.
- **0128A « in quo sunt omnes thesauri sapientiae et scientiae absconditi »** cited *(II Cor. II)*
  in the twin and **`(II Cor)`** on the plate. The note rides verbatim either way; the patch file
  carries it.
- **0126C `[ *Al.,* rancore]`** — Migne's own bracketed variant, reproduced verbatim and
  untranslated per the register. The word it varies, *angore*, is rendered ("anguish").
- **0129C the paragraph that ends without a period** (*ad exaggerationem iniquitatis Sodomorum*) and
  **0123A** (*in anteriora extenditur*) and **0131A** (*supplicio-ignis aeterni*) — three paragraphs
  the twin leaves unstopped. **Mirrored unstopped** (Pattern 8, never supply). The plate does print
  a period at 0129C; a mark, so the twin governs.
- **0127D « Num celare potero … gessurus sum. » closes with a PERIOD, not a question mark.**
  Rendered as an interrogative sentence closing on Migne's period: *« Can I hide from Abraham what
  « I am about to do. »* ⛔ **The mark is not supplied and not deleted.** Pattern 8b does not apply
  — this is a *direct* question that English can carry; only the terminal mark is odd, and recording
  his oddity is the point (the 11537 1063D–1064A precedent, in the other direction).

### 5.7 The three licensed Pattern 8b colons, and the band scan that found them

A band-by-band comparison (colons, semicolons, question marks, guillemets, per column anchor,
apparatus stripped) returned **exactly three mismatched bands in five chunks**, all `:` +1, all the
same class, and **zero elsewhere**:

| column | Migne | English |
|---|---|---|
| 0123D | *Quaeritur quomodo pueri circumcisi … perire debeant?* | It is asked**:** how ought circumcised … boys … to perish? |
| 0125C | *Quaeri solet quomodo feminae salvabantur, quae non circumcidebantur?* | It is wont to be asked**:** how were women saved, who were not circumcised? |
| 0130B | *Utrum admittenda sit compensatio … an perturbationi Lot, non sit consilio tribuendum, merito quaeritur?* | It is deservedly asked**:** is a balancing … to be admitted … or is it to be attributed to Lot's disturbance, and not to his counsel? |

Migne's `?` is kept in all three; English cannot end an indirect construction with it.
⚑ **The scan also found four unlicensed marks that had crept into the draft and were repaired**: a
supplied semicolon at 0125B (*ne mala faciant, pedes* — his comma), one at 0126A (*solis
necessariis intenta, nesciat* — his comma), one at 0131D (*Sulphur, fetor carnis, ignis* — his
comma), and a semicolon standing where Migne prints a **colon** at 0130B (*ne fiant graviora:*).
Totals had not cancelled here, but the sites were invisible until the bands were compared.
⛔ **No comma→semicolon sweep was made.** Migne prints 48 semicolons in these five chunks; Tobit's
narrow exception rests on his printing zero and does not apply.

---

## §6 · THE ONE `[cj:]` — 0123D *pueri circumcisi*

    [n: (ISID.)] Quaeritur quomodo pueri circumcisi (qui pactum Dei irritum non fecerunt,
    sed qui eos circumcidere neglexerunt) perire debeant?

**Fired: `circumcised [cj: *circumcisi*; read *incircumcisi*, "uncircumcised"] boys`.**

The printed word is a real Latin form, so Pattern 7 renders it and Pattern 12 has nothing to wrap —
and the English then asserts what Isidore is arguing against. That is Pattern 18's founding shape.

**Why the conjecture, from the sentence's own structure and not from what reads well:**
1. **The parenthesis assigns the guilt away from the boys** — *qui pactum Dei irritum **non**
   fecerunt, **sed qui eos circumcidere neglexerunt***. The boys did not void the covenant; their
   parents did, by neglecting to circumcise them. A **circumcised** boy has no parents who neglected
   anything, and the parenthesis has nothing to distinguish.
2. **The lemma is Gn 17:14** — *Masculus cujus praeputii caro **circumcisa non fuerit**, delebitur
   anima illa* — whose whole subject is the **un**circumcised male. The question is asked of the
   verse's own class.
3. **Isidore's answer is about those not freed**: *Ideo pereunt omnes qui per regenerationem **non**
   liberantur.* The perishing class is defined by the absence of the sign, not its presence.

**Why the marker and not a silent repair or a bare crux.** Pattern 7 forbids the repair; and a crux
alone puts the reading where the reader does not meet it, which is 11081 @0030B's exact failure.
The gloss is **additive** — Migne's word keeps its English and the conjecture stands beside it — and
the verbatim-in-the-Latin-twin guard is satisfied by *circumcisi*, so nothing is smuggled in.
**The class is 18a's admitted one: a lost negation** (here the privative *in-*), which is the defect
class the whole 7a⁗ apparatus exists for and which has nowhere else to live when no type is broken.
The 7561 @0648 precedent is exact — the gloss opens on the word Migne *did* print and supplies what
fell out.

⭐ **Plate-read (p. 67, 600 dpi, corner numbers checked first): Migne's type reads `circumcisi`,
with no prefix.** So the reading is his and not the digitization's — which is what makes this a
`[cj:]` and not a patch. Had the plate read *incircumcisi*, the entry would have moved to the patch
file and no marker would stand.

---

## §7 · SECTIONS READ CLEAN (Test 4 — does the English ASSERT what he asserts?)

Run last, with counts, bands and anchors already known clean, paragraph by paragraph against the
Latin.

- **0121A–0121D** — the Rabanus stars/sand antithesis and the two Augustine *quaestiones*. The
  densest negation in the stint sits at 0121D (*Non sic accipiendum est, tanquam … quadringentos
  annos populus Dei fuerit*), where the whole point is that the four hundred years are not the
  years of the servitude. Checked twice.
- **0122C** — the Ex 33 face/hinder-parts passage, six negations in five lines
  (*non apparebit · Non enim … et vivet · nemo potest videre et vivere*), each traced to its host.
- **0123B–0124B** — Strabo's three causes and Jerome's Hebrew letters. The letter-names and the
  three empty `( )` were checked span by span against the brief's inventory.
- **0125A–0125C** — the circumcision-of-the-senses catalogue. ⚑ **The site test 2a exists for:**
  *non solum se ab illicitis temperat, sed etiam a concessis* — the negative is on *solum*, not on
  *temperat*, and the `sed etiam` correlative proves it. The English puts "not only" on "from things
  unlawful". Same check run on *Qui autem **non** obscoenis desideriis … moechatur, **sed** fidei
  puritatem … custodit*.
- **0127C** — the physicians' passage, five negations turning on *senior*/*senex*/*juvencula*.
  ⚑ *Emortuum enim corpus **non omnino** ad generationem erat* is the trigger shape (a quantifier
  beside a verb): the negative belongs on *omnino*, because the next clause has Abraham begetting of
  Cethura. English reads "was not altogether dead for generation".
- **0128B–0128D** — Augustine on God's anger and Hilary on God's not-knowing, the heaviest double
  negation in the range (*Habemus nescientem Deum, quod tamen non nesciat*; *non ea tunc scire, quia
  prius nesciat*). ⚑ *non est ignorantiae diminutio* was drafted as "a diminution of knowledge" and
  **corrected to "a diminution of ignorance"** — the genitive is *ignorantiae* and reversing it
  would have made Hilary say the opposite about what is being diminished.
- **0130C–0131B** — Gregory on the blinded Sodomites and Strabo on Segor, and the *avidentia*
  passage, whose four negations (*non videri, non omnia, sed quod non est opus … ut nihil viderent*)
  were traced individually.
- **0132A–0133C** — Alcuin on the infants, Isidore on Lot's wife and on the law, Jerome's Ammon
  etymologies. *Est etiam qualecunque beneficium, non reum esse, qui gloriosus non est* was
  re-ordered in English so that each negative sits on its own host.

**Candidates rejected, with reasons, so a blind reader knows they were looked at:** §5.1–5.6 above,
plus — *Samsom* at 0124C (Migne's spelling of Samson, rendered by the established English name,
logged, no marker) · *frater Abraham* at 0131A of Lot, who is Abraham's nephew (the Latin idiom, and
the Vulgate uses it; rendered "brother") · *Marci XIX* at 0131A (a book with sixteen chapters; the
citation rides as printed and the `[var:]` names Mt 19:21) · the four-dot ellipsis runs at 0122D
(`. . . . . .`) and 0123A (`. . . .`), reproduced with Migne's own spacing · `[n: ( Glossa Graeca. )]`
at 0124D and 0130A, reproduced with his internal spaces · the double blank line the twin prints at
0123B before `VERS. 10.`, mirrored.
