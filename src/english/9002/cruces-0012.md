# *Glossa ordinaria*, **Evangelium secundum Matthaeum** (PL 114) — cruces, chunks 0012–0015

Stint 4 of 8. **Cols 0096C–0107B**, chunks `0012`–`0015`, 4,593 Latin words (frontmatter counts) → ~6,900 English
words (ratio 1.49–1.54, on the register's expected ~1.5×). `verify-english.mjs` is clean on all
four; column anchors (44), `[n:]` notes (30), italic spans (161), `VERS.` addresses and
paragraph counts are all 1:1 with the Latin twins, and **question marks, colons and semicolons
match paragraph by paragraph** — a finer partition than the column bands (Test 3).

**Apparatus fired: 1 `[sic:]` · 12 `[var:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
Guillemets: zero in either language, either direction.

**Plates read: 7 pages / 12 columns on BOTH witnesses** — archive `patrologiaecurs06saingoog`
pp. 53–59 at 300 dpi (600 dpi where a letter was in doubt) and Gallica
`ark:/12148/bpt6k54939667` ff. 48–54 at native resolution. Corner numbers read first on every
page; both maps confirmed against them (`(col+11)/2` and `(col+1)/2`).
Details in `data/briefs/9002-PLATE-READS-0012.json`.

---

## §0 · THE POLICY I APPLIED, STATED BEFORE THE FINDINGS

1. **No claim about Migne's type on one witness, in either direction.** Every letter-level
   candidate below was checked on Gallica before it was written down, and **the archive copy
   lost eleven times out of twelve in this range.** (See §1 — this independently reproduces the
   12:1 figure CLAUDE.md now records for Matthew's opening range.)
2. **Where the plate is read and our TEI differs, the English renders what Migne printed**
   (`translation-style.md` §"What the English translates"), and the divergence is filed in
   `data/briefs/9002-PENDING-TEI-PATCHES-0012.md`. One site in this range: `eleborata` @0105C.
3. **A `[sic:]` accuses Migne's type and needs two witnesses.** One fired (`nomo` @0097A).
4. **A `[var:]` states BOTH readings** — what Migne prints and what the Clementine has — so it
   can be audited. Fired only on quoted scripture whose divergence changes the sense, and only
   after the column was read on both plates.
5. **A real word that reads oddly is Migne's** — rendered as printed, logged, no marker. The
   declined list is §4 and it is longer than the fired list.
6. `usque ad`: **all twelve occurrences in this range are the `etc.` splice formula** (each
   follows an `etc.,` and names where the father's sentence resumes) and each is rendered
   "as far as". There is no ordinary temporal or spatial `usque ad` in these four chunks.
7. Vocabulary axes: `gentiles`/`gentilis` → **Gentile(s)** throughout (0099D *gentilium*,
   0106D *gentili* twice, 0106D lemma *Gentes*) — Matthew's *Judaei*/*gentes* opposition is
   explicit here (*facit similem gentili, id est infidelem*), so "nations" was never in
   question; `daemonis` @0105B → **demon**, `diabolus` → **devil** (they stand two lines apart
   at 0105A–B); `turbae phantasmatum` @0099C → **crowds**; no `natio`, no `multitudo`, no
   `mysterium`/`sacramentum` pair in the range. Commentator's voice not archaised (*dicit*,
   *ait*, *inquiunt* → says, say); `-eth` used **only inside italic lemmata** (*He seeth in
   secret*, *For the Father knoweth*, *It sufficeth*).
8. Pattern 17: `thou` for every singular address (0096C *cogeris*, 0097A *repercutias*,
   0099D *intuearis*, 0103C *unge, refice, lava*, 0104D *facis*), `you` for every plural
   (0098C *oraveritis*, 0104A *ponite*, 0105C *sitis*, 0105D *committite*). No "ye": the
   corpus renders *Audistis* "You have heard" (9001 @0002, 9004 @0004), and Pattern 17 makes
   the archaism a number marker, not a register marker.

### ⭐ The lemma-expansion line I drew, stated so it can be argued with

Convention 3 expands a fragmentary lemma; the "control's class" rule says a *complete* one-word
lemma is rendered as it stands. **My test: can the printed lemma stand as an English clause or
phrase on its own?** If yes, render it as it stands; if it is grammatically headless, expand it
from the verse.

- Rendered as they stand (complete): *Audistis.* "You have heard." · *Diligite.* "Love." ·
  *Benefacite.* "Do good." · *Orate.* "Pray." · *Odio habebis.* "Thou shalt hate." ·
  *Perfecti.* "Perfect." · *Nesciat.* "Let it not know." · *Exterminant.* · *Lucerna.* ·
  *Panem.* · *Nostrum.* · *Sicut.* · *Amen,* · *Dies.* · *Sufficit.* "It sufficeth."
- Expanded (headless): *Qui solem.* → "Who maketh his sun to rise" (Mt 5:45 — the accusative
  has no verb in the lemma, and *Hunc visibilem* glosses the sun) · *Et volenti.* → "And to him
  that would borrow" (Mt 5:42 — the participle has no governing infinitive, and the gloss is
  entirely about lending) · *Aut enim unum odio.* → "For either he will hate the one"
  (Mt 6:24 — *odio* with no *habebit*).
- ⚑ **One deliberate exception, and the reason:** *Praebe illi.* is rendered "Offer to him.",
  NOT expanded to "offer him the other also" — because **the elided word is itself the next
  lemma Migne prints** (*Alteram.*, glossed separately three lines down). Expanding here would
  make the English print the same word twice and would swallow a lemma that has its own gloss.
  This is not conformation and it is not the stump class; it is a collision the general rule
  does not foresee.

---

## §1 · ⛔⛔ THE ARCHIVE COPY LOST 11 TIMES OUT OF 12 IN THIS RANGE

Every candidate I raised from the archive copy was taken to Gallica before it was recorded.
**Eleven were refuted, with our TEI right every time; one was confirmed.** This is the same
result CLAUDE.md records for cols 0063–0080, arrived at independently, on a different seven
pages, by a reader who had not seen that entry when the reads were made.

| col | archive copy reads | Gallica reads | our TEI | verdict |
|---|---|---|---|---|
| 0096D | `(Math. XI)` · `(Psal VII)` | `(Matth. XI)` · `(Psal. VII)` | = Gallica | archive ink |
| 0097A | `victor existas` | `victor exsistas` | = Gallica | archive ink |
| 0097B | `Da ei,` | `Da ei.` | = Gallica | archive ink |
| 0098A | `cum et si peccasse` | `cum etsi peccasse` | = Gallica | archive letterspacing |
| 0099B | **`coram homnibus`** | `coram hominibus` | = Gallica | see §2 |
| 0099B | `sententia, supra dixerat` | `sententia. Supra dixerat` | = Gallica | see §2 |
| 0100C | `qui fiilius est` | `qui filius est` | = Gallica | archive ink |
| 0101B | `jure possimus` | `jure poscimus` | = Gallica | archive ink (c filled) |
| 0102A | `Quia christus` | `Quia Christus` | = Gallica | archive ink |
| 0104A | `VERS. 20.` | `VERS 20.` | = Gallica (`VERS 20.`) | archive ink |
| 0105A | `Quiquid facis` ×2 | `Quidquid facis` ×2 | = Gallica | archive ink |
| 0105C | `elaborata` | `elaborata` | **`eleborata`** | **our corruption — patch** |
| 0105D | `Animalitas cibe` · `invenient eam` | `cibo` · `inveniet` | = Gallica | archive ink |
| 0106A | `Et pater vester` | `Et Pater vester` | = Gallica | archive ink |
| 0106D | `haec invia sua` | `haec in via sua` | = Gallica | archive letterspacing |
| 0107A | `quae mentem pertubant` | `perturbant` | = Gallica | archive ink |
| 0103C | a raised `*` after *abstinentiae* | plain `:` , no asterisk | no mark | **checked zero** for the asterisk foot-note layer |

⚑ **The `*` line is worth its own sentence.** At 300 dpi the archive shows what looks exactly
like Migne's raised asterisk key (Pattern 19's second layer) after *diebus abstinentiae*, and the
foot of that page carries nothing — which is the shape of a lost note. Gallica prints a bare
colon. **A `[cn: * | …]` and its `[nt:]` twin were within one HTTP request of being invented.**
The feet of pp. 53–59 were also inspected on both copies: **no foot-of-page apparatus of either
layer anywhere in cols 0096–0108.** The only mark below the text is a printer's signature `4`
under col 0106.

---

## §2 · THE HANDED-OVER LEAD @0099B — SETTLED, AND IT IS NEITHER OF THE TWO OFFERED ANSWERS

The launch brief (§4) handed this stint *coram **homnibus*** in the Mt 6:1 citation inside the
gloss on VERS. 5, read at 150 dpi on the archive copy alone, and asked whether it is Migne's
broken sort (→ `[sic:]`, two witnesses) or our file's corruption (→ TEI patch).

**Our Latin is not corrupt: it reads `coram hominibus`, correctly** — so the second answer was
never live. And the first fails its own test:

- **Archive p.55, 300 dpi: the reading is real.** `homnibus` — an `m` followed directly by an
  `n`, with no dotted `i` between them, against dotted `i`s in *stitiam* and *faciatis* on the
  same line. It is not a 150 dpi artefact.
- **Gallica f50 (corners 99/100), native resolution: `hominibus`, the `i` plainly there.**
- ⚑ **And the two copies differ TWICE on these two lines, in a way ink cannot produce.** Two
  lines above, the archive prints `haec sententia, supra dixerat :` (comma, lower-case *s*) and
  Gallica prints `haec sententia. Supra dixerat :` (full stop, capital *S*). **Over-inking can
  close a counter; it cannot turn `S` into `s`.** These are two printings of PL 114, not two
  photographs of one — the same finding as 8950's `Mititte`/`Mittite`, and the same finding
  CLAUDE.md now records for this volume.

**Verdict: no marker, no patch, crux only.** A `[sic:]` needs two witnesses and has one; a
patch needs our file to be wrong and it is right. The honest statement is that **one printing
of PL 114 carries `homnibus` at 0099B and the other carries `hominibus`, and our text follows
the second.** Recorded here because it is a fact about the volume that a later reader of the
archive copy will otherwise re-discover as a defect.

⚑ **The general lesson, and it cost this stint nothing because the rule was obeyed:** the
launch brief says a non-word "is the class that has been right every time." **In this range it
was right once in three** — `nomo` @0097A stood, `homnibus` @0099B and `fiilius` @0100C both
fell. A non-word is a reason to *look*, not a reason to *fire*.

---

## §3 · THE APPARATUS FIRED, WITH THE ARGUMENT FOR EACH

### 3a. The single `[sic:]` — @0097A *nomo* (chunk 0012)

> *Alteram.* (CHRYSOST.) Primum indigna res est ut **nomo** fidelis stet in judicio ante
> conspectum judicis infidelis.

Sense requires *homo*. **Both witnesses print a word that is not *homo*:** the archive at
300 dpi reads `nomo` (initial `n`, unambiguous, no ascender); Gallica's initial letter is
blotted into a closed bowl and reads `n` or `o`, but **carries no ascender and cannot be `h`**.
Our TEI carries `nomo` verbatim, so the marker's substring guard is satisfied and the accusation
is against type that both copies show to be defective.

Rendered per the 2026-09-05 amendment to Pattern 7 — the marker discloses, so the sense is
rendered beside it: **"that a faithful man [sic: *nomo*] should stand in judgment"**.
7a⁗ check, all four questions: the clause keeps its verb (*stet* → "should stand"), its
negation (none present), its conjunction (*ut* → "that"), and **its subject** — which is what
the marker would otherwise have taken.

⚠ **A corpus control I record because it argues the other way and lost.** `nomo` occurs three
times in `src/latin/`: here, at 9000 @0314C inside *oeconomo* (a false hit), and at **8991
@0599D**, *ut nomo homini conditionis vinculo subderetur*, where the word wanted is *nemo*.
Two Glossa books printing the same non-word for two different targets looks like a Corpus
Corporum OCR habit, and on the frequency argument alone I would have filed a patch. **The
plates overrule it**: this is exactly `reference_plate-read-triage`'s rule — frequency proves an
error exists, never whose it is. 8991 @0599D is not in my range and I make no claim about it,
but it is worth a plate read by whoever holds that work.

### 3b. The single `[cj:]` — @0107B *malitia Dei* (chunk 0015)

> *Sufficit.* Et quia cura praesenti mentes obruitur, non debet germinari **malitia Dei**.

`Dei` is a perfectly good word, so Pattern 12 has nothing to wrap and Pattern 7 renders it —
and the page then says **"the malice of God ought not to be made to sprout."** The lemma being
glossed is *Sufficit*, i.e. Mt 6:34 ***sufficit diei malitia sua***, and the preceding lemma is
*Dies*. The conjecture is *diei*, and it is not ours to invent: **it is printed on the same
page, twice, as the lemma this sentence exists to gloss.**

`the malice of God [cj: *Dei*; read *diei*, "of the day"]`

Read on **both** witnesses (archive p.59, Gallica f54): `malitia Dei` on each. So this is
Migne's own text, not the digitization's, and the marker is additive — nothing is removed.

⚑ **Why this clears Pattern 18's bar and the rival reading loses.** The bar is that the printed
word makes the sentence assert something the author is not arguing. "The malice of God" is not
merely awkward: it predicates *malitia* of God in a gloss whose whole subject is the anxiety of
the human mind. The rival treatment — leave it to the crux, per 18a's decline classes — loses
because 18a's declines are **mood, voice, number and person anomalies that merely fail to
construe**, and this is none of those: it is a noun substitution that construes perfectly and
says something false, which is the ✅ side of the list (10703 @1126B, *Oro* for *Pro*).

### 3c. The twelve `[var:]`, each with the printed reading and the Clementine's

Every one is a **quoted scripture** (the class that stands 120 times in 121 across four Glossa
books), and every one was read on **both** plates before firing.

| col | chunk | Migne prints | Clementine | why material |
|---|---|---|---|---|
| 0096D | 0012 | *Et maxillam dedi percutienti* (Thren. III) | Lam 3:30 *Dabit percutienti se maxillam* | 3rd-person future → **1st-person perfect**: Migne makes it the sufferer's own utterance, in a series (*ipse idem* · *Et David* · *Jerem.*) that is entirely first-person. |
| 0098B | 0012 | *Sol justitiae non illuxit nobis* (Sap. V) | Sap 5:6 *justitiae lumen non luxit nobis* | *lumen* → *sol*, and the gloss is expounding ***Qui solem***. The word the argument turns on is the one that diverges. |
| 0098B | 0012 | *Super unam civitatem pluit, et non super alteram* (Amos. IV) | Am 4:7 *et plui super unam civitatem, et super alteram civitatem non plui* | 1st person → 3rd, and the negation is relocated to the second clause's front. |
| 0100C | 0013 | *Filios genui et exaltavi* (Isa. I) | Is 1:2 *Filios enutrivi, et exaltavi* | *enutrivi* (brought up) → *genui* (begot). Single word, but §2's test is met: **the gloss argues from it** — the whole passage is about why Israel was never told to say *Pater noster* — and *genui* is not a letter-level corruption of *enutrivi*. |
| 0101B | 0013 | *Percipite regnum quod vobis paratum* (Matth. XXV) | Mt 25:34 *possidete paratum vobis regnum* | different verb, different order. |
| 0102A | 0013 | *Hic est panis vivus qui de coelo descendit* (Joan. VI) | Jo 6:51 *Ego sum panis vivus, qui de caelo descendi* | **the speaker changes**: first person → third. (Jo 6:50's *Hic est panis de caelo descendens* is the other half of the conflation; the Clementine has no verse in these words.) |
| 0102C | 0014 | *Cum oratis, remittite si quid habetis adversus aliquem: aliter enim Pater vester non dimittet vobis peccata vestra.* | Mc 11:25 *dimittite si quis habetis adversus aliquem : ut et Pater vester, qui in caelis est, dimittat vobis peccata vestra* | a **positive purpose clause is turned into a negative consequence**, and a `non` appears that Mark does not print. This is the largest divergence in the range and the gloss builds on it (*Culpae veniam non debemus negare*). |
| 0104A | 0014 | VERS 20. *Thesaurizare autem.* | Mt 6:20 *Thesaurizate autem* | imperative → infinitive, in a verse-lemma with its own `VERS.` address. **Not in the brief's ⚑ list** (the pre-scan cleared it), and it is the find I would most want a second opinion on. Both plates read *Thesaurizare*; the previous lemma *Nolite thesaurizare* (Mt 6:19, infinitive, correct) is the obvious source of assimilation, but that is a *why*, and Pattern 14 forbids speculating about *why*. |
| 0106B | 0015 | *Et de vestimentis.* | Mt 6:28 *Et de vestimento* | see §5 — this is the brief's ⚑ candidate. |
| 0106B | 0015 | *Si enim fenum agri.* | Mt 6:30 *Si autem foenum agri* | *autem* → *enim*: the connective is reversed from adversative to causal in a verse-lemma. (*fenum*/*foenum* is orthography and takes no marker, Pattern 9.) |
| 0106C | 0015 | *Exaudiet me cras justitia mea* (Gen. XXX) | Gn 30:33 *Respondebitque mihi cras justitia mea* | different verb; the gloss is adducing the verse purely for *cras*, and the verb is what makes the tomorrow a promise rather than an answer. |
| 0107B | 0015 | *Nocte ac die operabamur ne quem gravaremus* (I Thes. II) | 1Thes 2:9 *nocte ac die operantes, ne quem vestrum gravaremus* | participle → finite verb, and *vestrum* dropped. |

---

## §4 · THE FULL LEMMA WALK — 161 spans, and the count checks

**Count check first (7a″ addendum).** `data/briefs/9002-lemmata-0012.txt` declares **161 spans**
for chunks 0012–0015. Counting the marked spans in my own Latin, **paragraph-bounded**, gives
**38 + 55 + 45 + 23 = 161**, with **zero paragraphs carrying an odd number of `*`** and
**zero guillemets in any of the four chunks**, so the paragraph-bounded and whole-file counts
are the same number and cannot have cancelled. The file's first entry (`[0096C] *A malo est.*`)
and last (`[0107B] *Sufficit.*`) are the first and last spans of my Latin. **The cut is right.**

Of the 161: **12 diverge from the Clementine materially and are marked `[var:]` (§3c) —
one of them, 0104A, was not flagged by the pre-scan.** The rest are set out below by class.
⛔ Nothing on this list is a report of a search; every span was read against
`sources/vulgate/clementine-flat.txt` by hand.

### 4a. The eight `⚠ NOT in Clementine verbatim` flags that are INNOCENT, with reasons

| col | span | why it is not a divergence |
|---|---|---|
| 0097D | *Ut sitis fiili.* | Mt 5:45 *ut sitis filii Patris vestri* — the words agree; the only issue is our twin's `fiili`, which is §6's patch, not a Vulgate matter. |
| 0099A | *Recedite a me, operarii dolosi…* | Migne prints **no reference** and introduces it with *de quibus dicitur*. It is not a Vulgate quotation at all: the nearest texts are Mt 7:23 *discedite a me, qui operamini iniquitatem* and Lc 13:27 *discedite a me omnes operarii iniquitatis*, and it agrees with neither. **`[var:]` declined:** Pattern 14 compares a citation with its received text, and there is no verse here to be the comparand. Logged, not marked. |
| 0100C | *Vado ad Patrem meum* (Joan. VII) | Jo 16:10 and 14:12 both print *ad Patrem vado*; Migne adds *meum*, which Jo 20:17 supplies (*Ascendo ad Patrem meum*). **`[var:]` declined** — the divergence is *vado*/*ascendo* in a sentence the gloss uses only for *meum … et vestrum*, and a marker that named Jo 20:17 as "the" comparand would assert a verse identification I cannot make. ⚠ Migne's own reference `(Joan. VII)` matches none of the three; passed through per convention 4. |
| 0100C | *Pater noster dicitur,* | the span carries Migne's own verb *dicitur* inside it; the scripture is *Pater noster*, which agrees. |
| 0100D | *Si dimiseritis,* | clipped from Mt 6:14 *Si enim dimiseritis*; a fragment cut at a word boundary. |
| 0102C | *Dimitte nobis debita nostra. Et ne nos,* | Mt 6:12 + 6:13 in one span; the per-verse scan cannot match across the boundary. Both halves agree exactly. |
| 0103A | *Cum jejunatis.* | clipped from Mt 6:16 *Cum autem jejunatis*. |
| 0104C | *Si fuerit oculus,* etc. | clipped and reordered from Mt 6:22 *Si oculus tuus fuerit simplex*; the `etc.` marks the cut, and no word differs. |
| 0105C | *Quia non potestis Deo servire et mammonae.* | Mt 6:24 *Non potestis Deo servire et mammonae* with the gloss's own *Quia* prefixed. |
| 0106A | *Qui sunt hi, qui ut nubes volant?* | Is 60:8 has *Qui sunt **isti*** — a real one-word divergence, but *hi*/*isti* are the same demonstrative and no sense turns on it. **`[var:]` declined as immaterial** (Pattern 14 fires "in a way that changes the sense"); recorded here so the decline is visible. |

### 4b. The spans that agree with the Clementine EXACTLY — checked, not assumed

⛔ These are the ones a report of findings alone would hide, and in a gospel a bare ✓ is the
weakest mark in the corpus, so each address below was **read**, not trusted.

Mt 5:37 *A malo est.* · Mt 5:39 *Non resistere.* ×2, *Praebe illi.*, *Alteram.* · Mt 11:29
*Discite a me, quia mitis sum, et humilis corde* · Ps 7:5 *Si reddidi retribuentibus mihi mala*
· Mt 5:40 *Et ei qui,*, *Tunicam tuam.*, *Et pallium;* · Mt 5:41 *Mille passus.*, *Alia duo.* ·
Mt 5:42 *Da ei.* ×2, *Et volenti.*, *Ne avertaris,* · 2Cor 9:7 *Hilarem enim datorem diligit
Deus* · Mt 5:43 *Audistis.*, *Odio habebis.* · Mt 5:44 *Diligite.*, *Benefacite.*, *Orate.* ·
Mt 5:45 *Filii.*, *Patris.*, *Qui solem.* · Mt 5:46 *Publicani.* · Mt 5:47 *Et si
salutaveritis.* · Mt 5:48 *Perfecti.* · Mt 6:1 *Attendite,*, *Apud Patrem vestrum.*,
***Attendite ne justitiam vestram faciatis coram hominibus;*** · Mt 6:2 *Cum ergo,*, *Tuba
canere.*, *Ante te.*, *Receperunt.* ×2 · Mt 6:3 *Nesciat.* · Mt 6:4 *In abscondito.*, *Videt in
abscondito.* · Mt 6:5 *Et cum oratis.* ×2, *In angulis.* · Mt 6:6 *Tu autem.*, *Clauso ostio.*,
*Patrem.* · Ps 41:9 *Apud me oratio Deo vitae meae* · Mt 6:7 *Orantes autem.*, *Putant enim.* ·
Mt 6:8 *Nolite ergo assimilari eis.*, *Scit enim pater.* · Mt 6:9 *Pater noster.* ×3,
*noster,*, *In coelis.*, *Sanctificetur nomen tuum.*, *Sanctificetur,* ×2 · Mt 6:10 *Adveniat
regnum tuum.*, *Fiat voluntas tua.*, *Sicut in coelo.* · Ps 83:3 *Cor meum et caro mea
exsultaverunt in Deum vivum.* · Mt 6:11 *Panem.*, *Nostrum.*, *Supersubstantialem.* · Sir 24:29
*qui edunt me adhuc esurient* · Mt 6:12 *Et dimitte,*, *Dimitte nobis debita nostra:*,
*Sicut.* · Mt 6:13 *Et ne nos inducas.*, *Et ne nos,*, *Sed libera nos a malo.*, *Sed libera
nos.*, *A malo,* · Mt 6:14 *Si enim dimiseritis.* · Mt 6:15 *Si autem non dimiseritis.* ·
Mt 6:16 *Nolite fieri.*, *Exterminant.*, *Facies suas.* · Ps 50:19 *Cor contritum et
humiliatum, Deus, non despicies* · Mt 6:17 *Unge caput tuum.* ×2 · Mt 6:18 *Et Pater tuus.* ·
Mt 6:19 *Nolite thesaurizare.* · Mt 6:20 *In coelo.* ×2 · Lc 21:33 / Mc 13:31 *Coelum et terra
transibunt: verba autem mea non transibunt.* · Mt 6:21 *Ubi enim est thesaurus.* · Mt 6:22
*Lucerna.* · Mt 6:23 *Si autem oculus.*, *Tenebrosum erit.*, *Si ergo lumen.* · Mt 6:24 *Nemo
potest,*, *Aut enim unum odio.*, *Aut unum sustinebit.*, *Alterum contemnet.*, *Et mammonae.* ·
Ps 73:23 *Superbia eorum qui te oderunt* · Mt 6:25 *Ideo dico vobis,*, *Animae vestrae.*,
*Nonne anima?* · Jo 12:25 *Qui amat animam suam, perdet eam* · Mt 6:26 *Respicite.*, *Et Pater
vester.* · Mt 6:27 *Quis autem vestrum,* · Mt 6:28 *Considerate lilia agri.* · Mt 6:29
*Quoniam nec Salomon,* · Mt 6:30 *In clibanum mittitur.*, *Quanto magis vos,*, *Modicae
fidei.* · Mt 6:31 *Nolite ergo solliciti,*, *Nolite,*, *Solliciti esse.* · Mt 6:32 *Haec enim
omnia.*, *Gentes.*, *Scit enim.*, *Pater vester.* · Mt 6:33 *Quaerite ergo.*, *Et haec
omnia.* · Mt 6:34 *Solliciti.*, *In crastinum.*, *Dies.*, *Sufficit.* — and the twelve
*usque ad* spans, which are Migne's formula and not scripture at all.

⭐ **Two of these deserve a line, because the gospel trap runs both ways.**
- **0096D *oculum pro oculo, dentem pro dente:*** — Mt 5:38 prints *Oculum pro oculo, **et**
  dentem pro dente*, so against Matthew this looks like a dropped *et*. It is not a divergence:
  **Lv 24:20 and Dt 19:21 print exactly Migne's form**, and the gloss's own frame is *Lex modum
  ultionis instituit* — he is quoting the **law**, not the evangelist. A `[var:]` here would
  have accused Migne of mis-citing a verse he is not citing.
- **0104B *Coelum et terra transibunt: verba autem mea non transibunt.*** — printed with no
  reference. Mt 24:35 has *non **praeteribunt***; **Lc 21:33 and Mc 13:31 have *non
  transibunt*, exactly as printed.** Inside a commentary on Matthew, the Matthaean parallel is
  the one that diverges and the non-Matthaean ones agree. No marker.

---

## §5 · ⚑ THE `MATCHES ONLY ELSEWHERE` CANDIDATE IN MY RANGE — @0106B, ADJUDICATED

    0106B  VERS. 28.-- Et de vestimentis.      only Tob 4:17   (lemma is Mt 6)

**Verdict: (1) a real divergence. `[var: Vulg. Mt 6:28 *Et de vestimento*, singular]`.**

- **(3) our file's corruption — refuted at the plate, and this had to go first.** Archive p.58
  and Gallica f53 both print `Et de vestimentis.` in the italic lemma of `VERS. 28.` A
  `-o`→`-is` ending is well within OCR's reach, so this was the live rival, and only the two
  plates could kill it. They did.
- **(2) a harmony parallel Migne has reached for — loses on the evidence, not on plausibility.**
  This is the explanation the brief warns is the commonest in a gospel, so I looked for the
  parallel and there is none: Lc 12:22–23 reads *neque corpori quid vestiamini* / *corpus plus
  quam vestimentum*; **no gospel verse anywhere prints *de vestimentis*.** The Tob 4:17 hit
  (*et de vestimentis tuis nudos tege*) is a three-word phrase collision in a work about
  almsgiving, with no thematic or textual route into a gloss on Mt 6:28 — the gloss below it
  expounds *sollicitudo* and *lilia agri*, i.e. Matthew, and nothing else.
- **(1) therefore stands.** Migne's lemma prints the plural where the Clementine prints the
  singular. The divergence is small and I say so plainly; what makes it markable rather than
  orthographic is that it is a **number change in a verse-lemma carrying its own `VERS.`
  address**, confirmed on two witnesses, and Pattern 14 exists precisely so that a reader can
  see it without opening a cruces file.

---

## §6 · THE PENDING TEI PATCH — @0105C `eleborata`

> dum timet ne aut possessa dispereant aut **eleborata** non contingant.

Our twin prints `eleborata`, which is no Latin word. **Both plates print `elaborata`** (Gallica
f53 line-broken as `ela-borata`; archive p.58 the same). This is the digitization's error, not
Migne's, so what is owed is a patch and **not** a `[sic:]` — the marker would publicly accuse
the plate of a defect neither copy carries.

Per `translation-style.md` §"What the English translates — THE PLATE WHERE READ", the English
renders what Migne printed: **"the things laboured for"**. Filed in
`data/briefs/9002-PENDING-TEI-PATCHES-0012.md`.

⚠ **A second patch is proposed there and I mark it LESS certain deliberately:** @0097D our twin
reads `Ut sitis **fiili**` where the sense and both plates want `filii`. The archive at 600 dpi
puts the tall `l` in third position (`f-i-l-i-i`); Gallica's native resolution is coarse there
and reads `fili`/`filii` but certainly not `fiili`. **Neither witness shows our twin's form**,
and the same `fii`-for-`fil` shape occurs at 11062 @0427D (`fiilialem` for *filialem*, with
*Filialis* printed correctly two sentences later) — a Corpus Corporum habit, not a PL 114
compositor's. The English renders *filii*, "sons". I would still like a third look before the
patch lands, and the patch file says so.

---

## §7 · THIS RANGE'S OWN CRUCES, BY COLUMN

- **@0096C** *dum veritati non credit* — the subject of *credit* is unexpressed. I supplied
  **"he"** = the *alter* whose *infirmitas* compels the oath (*sed alterius infirmitas id
  cogit*). The rival, "so long as it [the weakness] does not believe", makes *infirmitas* the
  believer, which the sentence's own contrast (thy oath is not from thy evil but from his)
  does not support. Named because the brief's dominant defect class is exactly this.
- **@0097A** *Praebe illi.* / *Alteram.* — see §0. Migne splits one clause of Mt 5:39 into two
  lemmata and glosses each; the English does not expand either into the other.
- **@0097D** `fiili` — §6.
- **@0098A** *qui dicit eum hujusmodi nec cibum sumere* — the sentence alludes to 1Cor 5:11
  *cum ejusmodi nec cibum sumere*, and `eum` for `cum` is an obvious guess. **Declined:** `eum`
  is a real word, it construes as printed (*dicit* + accusative + infinitive, *hujusmodi*
  attributive to *eum*), and both plates print `eum`. Rendered as printed, "that such a one is
  not even to take food". No marker on a corpus argument, however good.
- **@0098B** *Solem suum* stands inside the italic run of the Amos quotation, followed by
  Migne's `(Amos. IV)` and `etc.` — but the words are Matthew's (*qui solem suum oriri facit*),
  not Amos's. Migne's italic run has run two quotations together. Reproduced exactly as
  printed, including where the note falls; no marker, because nothing is defective — the
  divergence marked at this column is the Amos wording (§3c), not the join.
- **@0099C** *ut … oret Deum* — a third-person subjunctive in a passage whose lemma is
  *Tu autem* (second person singular). I rendered the impersonal **"that one should pray to
  God"** rather than "that thou shouldst pray", because Migne's verb is third person and
  Pattern 17 makes person a thing we track, not smooth.
- **@0100D** *ne a sanctificatione nominis **primus** in aliquo discrepemus* — a nominative
  singular *primus* inside a first-person-plural clause. Rendered as printed ("that we may not,
  first, in anything depart…"), which is as close as the words allow. The natural conjecture is
  *primum* (adverbial), an ordinary medieval spelling; **declined for a `[cj:]`** because the
  English is awkward, not false, which is the wrong side of Pattern 18's bar. Both plates print
  `primus`.
- **@0101D** *Vel sicut justis, ita in peccatoribus conversis* — Migne prints no *in* before
  *justis* though the three parallel members all have one. An ellipsis carried from the
  preceding member, not a defect; rendered "Or as in the just".
- **@0102C** *et peccantibus in se veniam promittit, et nobis et per nos aliis veniam
  promittit* — *veniam promittit* twice. **`[d:]` declined:** Pattern 11 marks a compositor's
  doubling, and this is not one — each clause has its own dative (*peccantibus in se* / *nobis
  et … aliis*) and each says something the other does not. Both copies print both. Recorded
  because a later reader will see the repetition and wonder.
- **@0102D** *Et ne nos, etc., deserens in tentatione sinas vinci* — the `ne` that governs
  *sinas vinci* is printed **inside the quoted lemma**, and the clause it governs is Migne's own
  prose. A first draft rendered it "deserting us in temptation, suffer us to be overcome", which
  an English reader parses as a positive command: **7a′ exactly — quarantining a fragment does
  not quarantine what it governs.** The English now reads "**do not** suffer us to be overcome".
  Supplying that negative is not an emendation; it renders the `ne` Migne prints, which was
  being dropped.
- **@0103B** *Demoliri est quasi dissipare* — a definition of *demoliri* inside a gloss whose
  lemma is *Exterminant*, with no *demolitur* anywhere near it (Mt 6:19–20's *demolitur* is
  eleven lines below, in a different verse). Rendered as printed; the abridgment has plainly
  spliced a note from another lemma. No marker: nothing is defective, and the `usque ad` formula
  removes words without suspending grammar.
- **@0104A** `VERS 20.--`, without the period after *VERS* that every other address in the
  range carries. **Both plates print `VERS 20.`** — the archive's apparent period is ink. Left
  exactly as printed, in the Latin and in the English. ⛔ This is the class 8950 proved cannot
  be corrected from one witness, and it is the reason I fetched Gallica before touching it.
- **@0104B** *Si etenim illa in genere suo munda tamen sordescit res dignior* — *illa … munda*
  has no verb; English cannot supply one without inventing it, so the rendering keeps the
  ellipsis ("For if those things are clean in their own kind, yet the worthier thing grows
  foul"). Both plates agree.
- **@0104A** *charitatem **amplectantes*** — not a form of *amplector* (*amplectentes*
  expected). **Both plates print `amplectantes`**, so it is Migne's, and corpus frequency is 1
  against 3 for the correct form. Treated under Pattern 9 as an ordinary medieval a/e
  participle spelling and rendered normally ("embracing"): no italics, no `[sic:]`, no crux
  status beyond this line. Recorded because it is the strongest non-word candidate in the range
  that I did **not** fire on.
- **@0105A** *Quidquid facis, vel ex amore Dei, vel servitute diaboli* is repeated four
  sentences later as *Quidquid enim facis, aut ex amore Dei, vel ex servitute diaboli*. Two
  different paragraphs, two different conjunction sets; not a doubling, and no marker. Both
  clauses are verbless in the Latin and are rendered verbless.
- **@0105B** *Superbia eorum qui te oderunt* is keyed `(Psal. III)` and is **Ps 73:23**. The
  words agree with the Clementine exactly, so no `[var:]`; Migne's number is passed through
  under convention 4 (his attributions and locators are not ours to correct). Same class:
  **@0102A** *qui edunt me adhuc esurient* keyed `(Eccl. XLIV)`, which is **Sir 24:29**; and
  **@0100C** `(Joan. VII)` on a sentence found in Jo 14/16/20.
- **@0106D** *qui novit nobis haec **in via sua** esse necessaria* — "his way" or "our way"?
  *sua* is reflexive to *qui novit*, i.e. God's, and I rendered "on his way". The rival ("on
  our journey") reads better and has no morphology behind it. Both plates print *in via sua* as
  three words; the archive's apparent `invia` is letterspacing.
- **@0107A** *Quid ergo amplius habet a gentili* — the subject of *habet* is unexpressed and I
  supplied **"he"** = the solicitous man of the preceding lemma (*facit similem gentili*), not
  the Gentile.
- **@0107B** *cura praesenti **mentes** obruitur* — plural subject, singular verb, on both
  plates. I rendered **"minds are overwhelmed by present care"**, which carries Migne's plural
  noun into the English and loses only the verb's number, for which English has no exponent
  (Pattern 9). ⚑ **The rival I weighed and rejected: a `[sic: *mentes*]` on the 11632 @0304A
  precedent** (*ut signa prius ardeat*, where a number disagreement took a marker because
  rendering it hid the defect). It loses because the two cases are not the same shape: at
  11632 the English could show nothing at all, whereas here the reader meets the plural
  "minds" opposite Migne's plural *mentes*, and only the concord — which no English sentence
  can carry — is lost. Marking it would put a `[sic:]` on a sound word to record a fact the
  facing Latin column already shows.
- **@0107B** *malitia Dei* — §3b, the one `[cj:]`.

### ⚑ The ship test, and what the gate will say

`plate-gate.mjs` will flag all fourteen markers in this range until the orchestrator merges
`data/briefs/9002-PLATE-READS-0012.json` into `data/plate-reads.json` — every one of them stands
on a column read on **both** witnesses, and none was written before that read was made. This
stint did **not** touch the shared file (peers run concurrently).

---

## §8 · DECLINED-ODDITY LIST — every suspect word I did NOT mark, in one place

Ordered by column. On John and Luke this list produced nearly every correction those works got.

| col | printed | why declined |
|---|---|---|
| 0097A | *nomo* | **NOT declined — fired**, §3a. Listed for completeness. |
| 0097A | *exsistas* | archive reads `existas`; **Gallica and our twin read `exsistas`**. Archive artefact. |
| 0097D | *fiili* | our twin's corruption, not Migne's → patch, §6. No marker available. |
| 0098A | *eum hujusmodi* | real word, construes, both plates. §7. |
| 0099B | *hominibus* | the handed-over lead. §2. Two printings; no marker, no patch. |
| 0100D | *primus* | real word; awkward, not false. Pattern 18 bar not met. |
| 0102C | *veniam promittit* ×2 | not a compositor's doubling; each clause has its own dative. |
| 0103B | *Demoliri* | a spliced definition, not defective type. |
| 0103C | raised `*` after *abstinentiae* | archive ink; Gallica prints a plain colon. **No asterisk foot-note marker.** |
| 0104A | `VERS 20.` | both plates print it without the period. A verse address may not be altered on one witness — and here two witnesses say leave it. |
| 0104A | *amplectantes* | Migne's, on both plates; Pattern 9 medieval spelling. |
| 0104B | *illa … munda* verbless | ellipsis, rendered as such. |
| 0105A | *Quidquid … / Quidquid enim …* | rhetorical repetition across paragraphs, not dittography. |
| 0105B | `(Psal. III)` for Ps 73:23 | Migne's locator; convention 4. Same for `(Eccl. XLIV)` @0102A and `(Joan. VII)` @0100C. |
| 0105C | *eleborata* | our twin's corruption → patch, §6. |
| 0106A | *hi* for *isti* (Is 60:8) | real divergence, immaterial; `[var:]` declined. |
| 0106B | *fenum* for *foenum* | orthography (Pattern 9); the `[var:]` at this column is fired on *enim*/*autem* only. |
| 0106D | *in via sua* | not fused; archive letterspacing. |
| 0107A | *pertubant* | archive ink; Gallica and our twin read *perturbant*. |
| 0107B | *mentes obruitur* | concord error with no English exponent; §7. |

**Test 1 (strip every marker and read what is left)** was run mechanically over all four
chunks: the two markers that sit inside a sentence — `[sic: *nomo*]` @0097A and `[cj: *Dei*]`
@0107B — leave "that a faithful man should stand in judgment" and "the malice of God ought not
to be made to sprout". No stranded article, no stranded preposition, no doubled mark, and both
clauses keep their subject as well as their verb.

**Test 2 (name the host of every printed negative)** was run clause by clause. The sites where
it bites in this range are all in gloss prose, not in the lemmata: *Non tantum non repercutias*
(0097A, two negatives, two hosts), *non probantur … opera* (0098D, on the verb, not on
*simplici*), *ne non sit simplex ad Deum* (0103B, a deliberate double negative kept double),
*Non vero precatur non tentari, sed nec ad modicum vinci* (0102C, three), *Haec exempla non
prohibent providentiam **ne** laboret* (0106A, two, and the second belongs to *laboret*, not to
*prohibent*), and *Non quod laborare et providere hoc **non** deceat* (0106B, two). ⚑ The
trigger condition in 2a — a negative on a verb with a quantifier or correlative nearby — fires
at **0099B** (*non solum vera merces … sed vitium … augetur*, where the *non* governs *solum*
and the `sed` clause proves it) and at **0106A** (*non prohibent … ne laboret, sed
sollicitudinem*, where the `sed` shows *non prohibent* governs *providentiam* and the *ne*
governs *laboret*). Both were resolved from the sentence's own structure, not from what reads
well.

**Test 4 (does the English ASSERT what he asserts?)** was run last, paragraph by paragraph,
with the counts already clean. It is what produced §3b, §7's @0107B entry and §7's @0099C
entry; nothing else in the range changed under it.
