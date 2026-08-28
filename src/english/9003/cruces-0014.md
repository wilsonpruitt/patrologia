# *Glossa ordinaria*, **Expositio in XX primos Psalmos** (PL 114) — cruces, chunks 0014–0017

Cols **0784B–0794D**, Psalms XVII–XX (Vulgate numbering), 4,249 Latin words → 6,315 English
(ratio 1.48). This range is the **end of the work**. `verify-english.mjs` clean for these four
chunks. Frontmatter copied verbatim from each Latin twin.

**Apparatus placed in this range: 2 `[sic:]` · 9 `[var:]` · 2 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[n:]`** — ⚠ **revised 2026-08-28**, was 5 `[sic:]` · 9 `[var:]` · 2 `[cj:]`: the
plate collation withdrew three `[sic:]` and one `[cj:]` and placed one new `[cj:]` @0794A. See
**PLATE COLLATION — markers withdrawn** at the foot of this file. (the work carries `noteCount: 0` throughout — no note was written, and
none was expected). Zero guillemets in either language; zero `( sic )` of Migne's own in this
range (checked). Marker/anchor/italic/paragraph parity verified 1:1 against each Latin twin,
and `?` `;` `:` compared **band by band** across the 43 column anchors, zero mismatched bands.

---

## §0 · HOW THE WORK ENDS — not a defect, do not mark it

Chunk 0017 ends at **0794D** with the last words of the gloss on Ps 20:14:
*Nos autem corde et opere celebrabimus, et nota faciemus mirabilia tua.* — "But we with heart and
with work will celebrate, and will make known thy wondrous works."

Two things a merge reader should know and **neither is a hole**:

1. **The work simply stops at the twentieth psalm.** That is Pez's deliberate choice to print
   twenty psalms as a specimen. No closing formula, no subscription, no `FINIS`. Nothing has been
   supplied and nothing marked.
2. **The last gloss also stops short of its own verse.** Migne's lemma is *Exaltare, Domine, in
   virtute tua,* etc.; the Clementine's Ps 20:14 continues *cantabimus et psallemus virtutes tuas*,
   which Migne's `etc.` covers and the gloss then paraphrases in its own words (*celebrabimus … nota
   faciemus*). This is the ordinary lemma-plus-`etc.` shape of the whole book, not a truncation.

---

## §1 · THE VULGATE COLLATION — the deliverable

Method, stated so a later reader can tell a checked lemma from an unchecked one: **every one of the
246 italic spans on the named-lemma list for these columns was searched in
`sources/vulgate/clementine-flat.txt`**, and the four psalms were pulled out whole
(`grep -P "^Ps (17|18|19|20):"`) so that each lemma could be read against **its own verse** rather
than against a match somewhere else in the canon. Non-psalm quotations were searched individually.
Citations below are from `sources/vulgate/clementine/`.

### 1.1 The firing rule I used, stated before the list

The 48 spans the pre-scan marked "⚠ NOT in Clementine verbatim" are overwhelmingly innocent: a
fragment cut mid-phrase, a gloss re-inflecting its own lemma (*commoti sunt*, *humilias*,
*permanet*, *emundabimur*), a gloss supplying a connective (*sed*, *cujus*), or a re-ordering
inside the gloss's own sentence. Those are logged in §1.3 and take no marker.

Where a real divergence stands, I fired `[var: …]` on this rule and no other:

- **A whole-word or multi-word substitution that changes what the sentence asserts → marker.**
- **A one-letter tense/mood shift in a re-quotation → crux only, no marker.** `sources/vulgate/README.md`
  warns that this copy is not to be trusted to single-letter precision, and brief §4 records that the
  digitization alters spelling in both directions; a public claim about the Clementine should not rest
  on one letter of our own file. The one exception is @0792D *Exaudiat*, and §1.2 gives the reason.
- **A synonym substitution that leaves the assertion intact → crux only.** (*aculeus* for *stimulus*,
  *omnes* for *universos*, *viventium* for *vivorum*, *super vos* for *in vos*.)

### 1.2 The nine `[var:]` markers — what was claimed and why

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| **0785B** | *Plenitudo enim legis est **charitas*** | Rom 13:10 *Plenitudo **ergo** legis est **dilectio*** | The gloss's whole point is *charitas* — *nemo ad Dominum veniret nisi per charitatem* stands in the same sentence. Migne's proof-text uses the word the argument uses; the Vulgate's does not. This is 7a″'s class exactly. |
| **0786A** | *Nisi poenitentiam egeritis, omnes **simul moriemini*** | Luc 13:5 *si poenitentiam non egeritis, omnes **similiter peribitis*** (13:3 *habueritis*) | Different assertion: "all die together" vs "all likewise perish". Also conflates 13:3/13:5 in its protasis. |
| **0786B** | *et secundum puritatem ***factorum meorum**,* | Ps 17:21 *secundum puritatem ***manuum mearum**,* | Different noun, and the gloss builds on it: *qui tribuit mihi, **ut bene facerem***. The Vulgate's "hands" would leave that gloss unanchored. Note the lemma at VERS. 24, 25 truncates before this phrase, so this is the only occurrence. |
| **0788A** | *Si dimiserimus eum vivum, saeculum post illum abit.* | Jo 11:48 *si dimittimus eum sic, omnes credent in eum*; Jo 12:19 *ecce mundus totus post eum abiit* | A conflation of two verses in an Old-Latin shape (*saeculum* for *mundus*). Marker names both witnesses. |
| **0792D** | *Exaudi**a**t illum de coelo sancto suo,* | Ps 19:7 *Exaudi**e**t illum de caelo sancto suo* | One letter — **and I fired anyway.** Reason: the psalm's own headnote frames the whole exposition as *figura optandi*, "the figure of wishing," and the optative mood is printed **twice** in the same paragraph (lemma and the re-quotation *Exaudiat illum non de terra tantum*). Two agreeing occurrences plus a governing headnote is not a stray final letter. |
| **0793A** | *In nomine Domini Dei nostri **exsultabimus**.* | Ps 19:8 *in nomine Domini Dei nostri **invocabimus*** | The closing re-quotation of the verse just glossed swaps the verb. Different assertion (exult / call upon), whole word. |
| **0793C** | *pacem meam,* inquit, *relinquo vobis,* | Jo 14:27 *Pacem relinquo vobis, pacem meam do vobis* | The two clauses of the verse fused into one, so that "my peace" is what is **left** rather than what is **given**. |
| **0793D** | *et in misericordia Altissimi non **conturbabitur**,* | Ps 20:8 *et in misericordia Altissimi non **commovebitur*** | Whole word. Marginal in sense; fired because it is clean, checkable, and belongs in a divergence list. Named here as the least forceful of the nine. |
| **0794C** | *Expedit unum **pro omnibus** mori.* | Jo 18:14 *expedit unum **hominem** mori **pro populo*** | Caiaphas's saying universalized ("for all" for "for the people") and *hominem* dropped. |

⚠ Every marker's content was checked **not** to appear verbatim in the Latin twin (the `[ed:]`/`[var:]`
mirror test), programmatically, after the files were written.

### 1.3 Read clean, or diverging but NOT marked — the negatives, which are the point

**Psalm XVII lemmata that collate exactly** (Clementine Ps 17, verse by verse): VERS. 3 *Deus meus
adjutor meus…* and *Protector meus, et cornu salutis meae, et susceptor meus.* · VERS. 4 *Laudans
invocabo Dominum* · VERS. 5 *Circumdederunt me dolores mortis* · VERS. 6 *Dolores inferni
circumdederunt me* · VERS. 7 *In tribulatione mea invocavi Dominum*, *De templo*, *introivit in aures
ejus* · VERS. 8 *Commota est et contremuit terra, fundamenta montium conturbata sunt* · VERS. 9
*Ascendit fumus in ira ejus* · VERS. 10 *Inclinavit coelos et descendit* · VERS. 11 *Et ascendit super
cherubim et volavit* · VERS. 12 *Et posuit tenebras latibulum suum* · VERS. 13 *Prae fulgore in
conspectu ejus nubes* · VERS. 14 *Et intonuit de coelo Dominus* · VERS. 15 *Et misit sagittas suas, et
dissipavit eos, fulgura* · VERS. 16 *Et apparuerunt fontes aquarum*, *Ab increpatione tua, Domine, ab
inspiratione spiritus irae tuae* · VERS. 17 *Misit de summo et accepit me* · VERS. 18 *Eripuit me de
inimicis meis fortissimis* · VERS. 19 *Praevenerunt me in die afflictionis meae*, *factus est Dominus
protector meus* · VERS. 20 *Et eduxit me in latitudinem, salvum me fecit, quoniam voluit me* · VERS.
21 *Et retribuet mihi Dominus secundum justitiam meam* · VERS. 22 *Quia custodivi vias Domini, nec
impie gessi a Deo meo* · VERS. 23 both spans · VERS. 24, 25 *Et ero immaculatus cum eo…* · VERS. 26,
27 *Cum sancto sanctus eris … et cum perverso perverteris* · VERS. 29, 30, 31, 33, 34, 35, 36, 37, 38,
39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 lemma-heads. **Psalm XVIII:** VERS. 2, 3, 4, 5–6 (the
*In sole* half), 8, 9, 10, 11, 12, 13, 14 *Si mei non fuerint dominati*, 15 all collate. **Psalm XIX:**
VERS. 2, 3, 4, 5, 6, 7 (*Impleat Dominus omnes petitiones tuas*), 8, 9, 10 all collate. **Psalm XX:**
VERS. 2, 3, 4, 5, 6, 7, 8 (head), 9, 10, 11, 12 (head), 13, 14 all collate.

**Divergent but deliberately unmarked, with the reason:**

- **0784A–B `*Implebor, cum evigilavero, similitudine tua.*`** (Ps 16:15; Clementine *satiabor cum
  apparuerit gloria tua*). **Not a divergence at all**: chunk 0013 introduces this very wording as
  *juxta editionem Hebraicam* and prints it there twice. Chunk 0014 is quoting back the Hebrew edition
  the work itself named. Rendered "I shall be filled, when I shall have awaked, with thy likeness."
- **0784B `*ubi est, mors, aculeus tuus?*`** — 1 Cor 15:55 reads *stimulus tuus*. Synonym ("sting"
  either way); the argument does not turn on it. Crux only.
- **0784B `*nec laetatur in perditione viventium*`** — Sap 1:13 *vivorum*. Synonym. The companion
  quotation *Impii autem manibus et verbis accersierunt illam* (Sap 1:16) is verbatim.
- **0785A `*accensi*`** — the verse (Ps 17:9) has *carbones **succensi** sunt ab eo*. The italic span
  is a single word inside the gloss's own clause (*rursus accensi et illuminati revixerunt*), with no
  *carbones* anywhere; it is the gloss re-forming the verse's participle, not a citation. Rendered
  "kindled". Crux only.
- **0786A `*Appropinquavit **super** vos regnum Dei*`** — Luc 10:9 *in vos*. Preposition only, sense
  unchanged. Crux only.
- **0786D `*retribuit mihi Dominus*`** against the lemma's own *retribuet* four lines above. **This one
  matters for the English**: I held the divergence and rendered the lemma "the Lord **will** reward me"
  and the re-quotation "the Lord **rewards** me". Conforming the second to the first is precisely the
  silent repair 7a″ item 3 exists to prevent. One letter, so no marker.
- **0786D `*sed in conspectu oculorum ejus*`** — Ps 17:25 has the phrase without *sed*; the connective
  is the gloss's, answering its own *non quod homines vident*. Not a scripture divergence.
- **0787A `*humilias*`** — Ps 17:28 *humiliabis*. The gloss re-inflects to the present in its own
  sentence. Crux only.
- **0787A `*Non est recta via Domini*`** — **checked and exact**: Ez 33:20. (It was worth checking:
  Ez 18:25/29 print *non est aequa via Domini*, and picking the wrong parallel would have manufactured
  a divergence.)
- **0787A `*illuminabit tenebras meas*`** (roman, not italic) — Ps 17:29 has the imperative *illumina*.
  Not set as a citation. Crux only.
- **0788A `*Et praecinxisti me virtute ad bellum, supplantasti…*`** — Ps 17:40 has *et supplantasti*.
  A dropped connective, sense intact.
- **0788A `*Clamaverunt, nec erat qui salvos faceret ad Dominum…*`** — the Clementine's semicolon
  (*qui salvos faceret ; ad Dominum*) is absent, which changes the parse of the lemma. Migne's own
  gloss then reads it the Clementine's way (*Nec ad quemlibet, sed ad Dominum clamaverunt*). Punctuation
  is Pattern 8 territory, not Pattern 14; carried as printed.
- **0789A `*facit misericordiam Christo suo*`** — Ps 17:51 *faciens misericordiam christo suo David*.
  The gloss needs a finite verb for its own *Deus magnificat … et facit*; *David* is outside the span.
  Gloss grammar, not a variant.
- **0789D `*Exsultavit ut gigas ad currendam viam **suam***`** — Ps 18:6 ends *ad currendam viam*. An
  added possessive; the gloss's next sentence drops it again (*non ad habitandum, sed ad currendam
  viam*). Sense unchanged.
- **0789D `*A summo **coeli** egressio ejus*`** — Ps 18:7 *a summo **caelo***. A change of case
  (genitive for ablative), not of orthography. Rendered on the printed genitive, "from the height of
  heaven". Declined because the gloss turns on *a summo* = *a Patre*, not on the case, and because a
  case ending is exactly the precision this copy is not warranted to. Worth a plate read if one is
  going that way anyway.
- **0790B `*testimonium fidele*`** — Ps 18:8 *testimonium **Domini** fidele*; the gloss replaces
  *Domini* with its own *Cujus*. Gloss syntax.
- **0791A `*multa retributio*`** — Ps 18:12 *retributio multa*. Word order inside the gloss's sentence.
- **0791B `*A superbis quoque libera servum tuum; si mei non fuerint dominati, tunc immaculatus ero:*`**
  — diverges wholesale from the Gallican, and **Migne says so in the sentence that introduces it**
  (*ex Hebraeo translata editio*). A `[var:]` here would be reporting as a divergence the very thing the
  text announces. Declined on that ground.
- **0791C `*si mei non fuerint domin**ata**, tunc immaculatus ero*`** — likewise introduced by Migne as
  *ut in quibusdam codicibus habetur*. He is citing a variant, not printing one. See §3.4 for how the
  gender difference was carried into English, which has no exponent for it.
- **0791C `*ipse est rex super **omnes** filios superbiae*`** — Job 41:25 *super **universos** filios
  superbiae*. Synonym.
- **0792B `*Pater, salavifica me ex hac hora*`** — Jo 12:27 *Pater, salvifica me ex hora hac*. Two
  separate things: the word order (*ex hac hora*) is a trivial inversion, logged only; *salavifica* is
  broken type and carries `[sic:]` (§2).
- **0792C `*Et confirmet omne consilium tuum*`** — Ps 19:5 *et omne consilium tuum confirmet*. Word
  order only.
- **0793B `*exsultavit vehementer*`** — Ps 20:2 *exsultabit*. One letter (past for future), in a
  re-quotation. Rendered as printed, "he hath exulted exceedingly", which is what the gloss's
  resurrection reading wants. Crux only, per the rule in §1.1.
- **0793C `*benedictionem dulcedinis*`** — accusative in the gloss's own clause (*hauserat*); the lemma
  above has the Clementine's *in benedictionibus dulcedinis*. Gloss syntax.
- **0793C `*Pater, clarifica Filium tuum*`** — Jo 17:1 *Pater, venit hora: clarifica Filium tuum*.
  An ellipsis of the opening, not a variant.
- **0794C `*Venite, occidamus eum, et habemus haereditatem ejus*`** — Mt 21:38 *habebimus*. Tense in a
  quoted saying; two letters. Crux only. (Note Mc 12:7 gives the same saying in a different form again,
  *et nostra erit haereditas*; Migne's is nearer Matthew.)
- **0786D `*criniculis peccatorum suorum unusquisque constringitur*`** — the allusion is Prov 5:22,
  which the Clementine gives as *funibus peccatorum suorum constringitur*. **Corpus frequency here is a
  negative, and I am recording it as one**: `criniculis` occurs once in the whole `src/latin/` corpus,
  `funiculis` ten times. Per addendum A that argument is worthless against a **real** word, and
  *criniculus* is a regularly formed diminutive of *crinis* used for a plaited cord; it is the Old-Latin
  reading Augustine's text carries here, not broken type. Rendered "cords". No marker (the phrase is
  woven into gloss prose, unitalicized and unattributed — an allusion, not a citation).

---

## §2 · CARRIED TYPE — five `[sic:]`, and what each one would have swallowed

All five are **non-words**, which is the class addendum A says is worth raising and has been right
every time. Each was rendered in plain English **as well as** marked, per test 1; the strip-the-markers
read was run mechanically over all four chunks afterwards and no clause was left without its verb,
object, negation or conjunction.

| col | printed | for | rendering, with the marker |
|---|---|---|---|
| ~~**0787A**~~ | ~~*poputum*~~ | *populum* | ⛔ **WITHDRAWN 2026-08-28 at the plate.** At 1200 dpi Migne prints ***populum***, with a full-height *l* matched against the *l* of *humilem* on the same line; *poputum* was Corpus Corporum's broken word, and the `[sic:]` was a public accusation against Migne for the digitization's error. Marker removed; the English reads `*For thou wilt save the humble people,*` and the reasoning about marker placement recorded here applied to a defect that is not on the page. Ps 17:28 still collates exactly. |
| ~~**0789D**~~ | ~~*cut*~~ | *ut* | ⛔ **WITHDRAWN 2026-08-28 at the plate.** Migne prints ***ut*** (and *Exultavit*, not *Exsultavit*): the gloss reads *Exultavit ut fortissimus*. *cut* was Corpus Corporum's. Marker removed; the English reads `He rejoiced as one most mighty`. The 7a⁗ analysis stands as method and is void as to this site. |
| **0792B** | *salavifica* | *salvifica* | `*Father, save me [sic: *salavifica*] out of this hour:*` — **question 1**: this is the clause's only verb; "save me" stands beside the marker. |
| ~~**0792B**~~ | ~~*cortuum*~~ | *cor tuum* | ⛔ **WITHDRAWN 2026-08-28 at the plate. There is no run-together.** Migne sets ***cor*** at the end of one line and ***tuum,*** at the head of the next, and **the column break falls between them**: the twin now reads `*secundum cor [0792C] tuum,*` with the anchor INSIDE the italic span. Corpus Corporum had welded the two halves of a line-broken phrase into one word and dropped the break. Marker removed and the English anchor moved to the matching position: `but *according to thy own [0792C] heart,*`. ⚠ **The general lesson is bigger than this row: a `[sic:]` for a Pattern 10 run-together should be checked against the line ending, because a transcription that loses line breaks manufactures exactly this defect.** |
| **0792C** | *magnifibabit* | *magnificabit* | `will not only not destroy us, but will even magnify [sic: *magnifibabit*] us` — the clause's only verb again. Both negatives of *non solum non perdet* are present and on their own hosts. |

**Rejected as `[sic:]` candidates, and why** (a blind reader will look at all three):

- **0790B *resisti*** — see §3.1. ⛔ **The whole question is moot as of 2026-08-28: Migne prints
  *resistit*, with a fully formed final *t*.** The `[cj:]` is withdrawn and the English carries the
  plain reading, "since God resisteth the proud, but giveth grace to the humble." The reasoning
  below (a real Latin form, so outside Pattern 12) was correct as reasoning and was answering a
  question the page does not pose.
- **0787B *manducaverint*** — a real word. Took `[cj:]` instead; see §3.2.
- **0786D *criniculis*** — a real word and, I believe, the author's own; see §1.3.

---

## §3 · THE HARD PLACES

### 3.1 0790B · *quoniam Deus superbis **resisti**, humilibus autem dat gratiam* — `[cj:]`

Jas 4:6 / 1 Pet 5:5, woven unitalicized into the gloss. *resisti* is a **real form** (present passive
infinitive of *resisto*) — so Pattern 7 renders it and Pattern 12 has nothing to wrap. But with *Deus*
nominative and *superbis* dative there is **no construction at all**: the clause has no finite verb for
its subject, and the only reading that construes is *resistit*. Note that the same work prints
*resistis* correctly at **0792A** (*qui superbis resistis*, second person, addressing God), so the book
knows the tag.

**Two candidates were weighed and one lost, explicitly:**

1. **Pattern 9, "attested medieval spelling"** — loss of final *-t* is a real medieval orthographic
   habit, which would make *resisti* a spelling of *resistit* and licence "God resisteth the proud"
   with no marker at all. ⛔ **Rejected**: *resisti* is also a perfectly good classical form in its own
   right, so it cannot be dismissed as a spelling of something else; treating it as one is the silent
   repair Pattern 7 exists to forbid, and it leaves no trace.
2. **Pattern 18 `[cj:]`** — **taken.** The marker is additive: Migne's word keeps its English and the
   conjecture stands beside it, and the form's appearance in the Latin twin is what makes the claim
   checkable. Shipped as
   `since God to the proud is to be resisted [cj: *resisti*; read *resistit*, "God resisteth the proud"]`.

⚠ Declared as a borderline firing: 18a's bar is "the English asserts something false", and what the
literal rendering does here is closer to asserting *nothing*. It is filed under 18 rather than left in
the cruces because the un-glossed English ("God … is to be resisted") is actively misleading about who
resists whom, which is the founding *munde* case's shape. **Also a plate-read candidate**: a lost final
*-t* is exactly the brief §4 class, in both its directions.

### 3.2 0787B · *nisi **manducaverint** viam fidei* — `[cj:]`

*Deus meus non venit in homines, nisi manducaverint viam fidei, qua veniat ad eos, quia impolluta est
via ejus.* Rendered "unless they have eaten the way of faith", which is what the printed word says and
is not what the sentence is about. The conjecture is ***mundaverint***, "have cleansed": the clause's
own *quia impolluta est via ejus* is a purity pivot, and the parallel at **0787C** (*sicut impolluta
est fides, qua venit ad me*) makes cleanness the whole figure on both sides of the coming.

**The rival, named and adjudicated**: *manducaverint* could be a eucharistic figure — "unless they have
eaten the way of faith" is not unthinkable in this register. It **loses** because nothing in the
paragraph or its neighbours mentions eating, food, bread or the table, while *impollutus* is printed
twice within four lines. Shipped additively:
`unless they have eaten [cj: *manducaverint*; read *mundaverint*, "have cleansed"] the way of faith`.

### 3.3 0786D / 0787A / 0793A · Migne's *retribuit*, *humilias*, *exsultabimus* — the pressure to conform

Recorded here because it is the class 7a″ was written for and it is invisible in the finished English
if you do it right. In three places the gloss re-quotes its own lemma with the verb changed
(*retribuet* → *retribuit* @0786D, *humiliabis* → *humilias* @0787A, *invocabimus* → *exsultabimus*
@0793A). In each the English follows **the re-quotation as printed**, not the lemma above it. Only the
third took a marker; the first two are one letter.

### 3.4 0791B–C · *dominati* / *dominata* — a gender difference English cannot carry

The gloss's whole VERS. 14 argument is that the verse reads two ways depending on the participle's
gender: with masculine *dominati* the subject is the proud alien spirits; with neuter *dominata* it is
*occulta mea et aliena*, the hidden and alien things. **English participles carry no gender** (Pattern
9), so a literal rendering makes the two readings identical and destroys the argument on the page.

Resolved by putting the difference on the **subject pronoun**, which English does have: *dominati* →
"*If **they** shall not have had dominion over me*"; *dominata* → "*if **those things** shall not have
had dominion over me*". Nothing is added that the Latin does not say — the gloss itself supplies the
neuter subject in the next clause (*si mei non fuerint dominata occulta mea et aliena*). Flagged so a
blind reader does not read the two Englishes as an inconsistency.

Also note *mei* is **genitive** in both readings (*dominari* + gen. = "have dominion over"), not the
nominative "my own" it looks like; the gloss's own paraphrase confirms it.

### 3.5 Unexpressed subjects — the ones I supplied, and what decided each

The launch brief is right that this book shifts speaker constantly. The sites where I supplied a
pronoun the Latin does not print, with the evidence:

- **0784A** *eripiendum se novit* — "**it** [the body of Christ] knew that **it** was to be rescued".
  Subject is *corpus Christi*, printed in the same clause. Then *gratulabitur* (0784A) takes "**she**",
  because the subject has become *Ecclesia Christi*, printed two words earlier. The shift from "it" to
  "she" inside one paragraph is Migne's, not mine.
- **0784B** *Loquitur haec Christus et Ecclesia* — printed subject; no supply needed. The rest of
  Psalm XVII's first person is *totus Christus, caput et corpus*, which the work says outright, and
  says again in its closing paragraph at **0789B**. That closing sentence is the work's own instruction
  for reading every "I" in the psalm and I let it govern the whole of chunks 0014–0015.
- **0784B** *Qui mihi prius adjutorium … praestitisti* — second person singular, God. "Thou who first
  didst furnish me" (Pattern 17: *tu* → thou).
- **0784B** *qui me firmasti, qui refugi ad te* — **two relatives, two different subjects**, one
  second-person (*firmasti*) and one first-person (*refugi*). Rendered "who hast made me firm, I who
  have fled for refuge to thee". Easy to flatten into a single "who"; the verb endings forbid it.
- **0785A** *commoti sunt et contremuerunt* — the subject *peccatores* stands **outside** the italic
  span in Migne, so the English keeps it outside too ("sinners *were moved and trembled*").
- **0788C** *Populus … servivit mihi: neque oculis me vidit* — the subject is *Populus gentium*,
  singular, so "**it** hath served me: neither did **it** see me". Not "they". Named because the
  plural is the natural English reflex and would quietly turn a people into persons.
- **0790A** *et ipsam penetravit verbi calor* — *ipsam* is feminine accusative and its antecedent is
  *umbra mortis* four words back, not *mortalitatem*. Rendered "penetrated **that shadow** itself" and
  the noun named, because a bare "it" would have been ambiguous between the two feminine nouns in the
  sentence and a reader could not recover which.
- **0791D** *ut consentiendo suum faceret* — subject is *homo*, printed; object *suum* is the *alienum*
  of the previous clause. "so that by consenting he made it his own".
- **0794B** *inveniat* — the subject is *claritas*, printed, not the king; the verb is jussive in
  parallel with *Inveniatur*. Rendered "may the brightness … *find*".

**Where two readings both construe**, per instruction rather than choosing silently:

- **0789A** *nec terrenam ipsam salutem sed in excelso de illo sperem* (VERS. 47). The clause has no
  expressed object for *sperem*, and *nec terrenam ipsam salutem* has no verb of its own — it may hang
  on the preceding *sentio* ("nor do I judge that salvation itself to be earthly") or be an object of
  *sperem* ("nor do I hope for that salvation itself as earthly, but on high"). Rendered on the
  first, which keeps the *non … nec* pair on the same verb: "Not after an earthly custom do I judge of
  the God of my salvation; nor that salvation itself as earthly, but on high concerning him may I
  hope." **Neither reading is marked.** The English is deliberately as loose-jointed as the Latin.
- **0794C** *in te occidendum retorserunt* — "they turned back upon thee, to be slain". *occidendum*
  agrees with *te*, so it is "upon thee, who wast to be slain", but it can also be read as a gerundive
  of purpose governing the turning. Rendered on the first; declined a note in the text.

### 3.6 Column anchors — three that had to be placed by hand

Anchors were checked one by one against **the word each stands beside in the Latin**, not merely for
presence and order (test 2b). Three fall inside constructions English reverses, and I record the
choice made:

- **0784C** Migne breaks at *Protector [0784C] meus* — the anchor sits between noun and possessive,
  and English puts the possessive first. Placed after the whole phrase: "My protector, [0784C] because
  I presumed not…". One word downstream, same clause.
- **0785B** *qui terrena [0785B] sapiunt* — same reversal. Placed after the relative clause: "who
  savour of things earthly, [0785B] knew not…".
- **0789B** *bonis operibus [0789B] meis* — placed as "by my good [0789B] works", which keeps the
  anchor one word from the end of the sentence exactly as Migne has it.

Placed **inside** the construction, deliberately, where English allows it (the 8995 precedent):
*in [0787B] te* → "in [0787B] thee" · *non eos [0785C] deserens* → "not [0785C] forsaking them" ·
*Si mei non fuerint [0791C] dominati* → "If they shall not have had [0791C] dominion over me" ·
*quo cecidit [0791D] diabolus* → "by which [0791D] the devil fell".

⚠ **No column-band arithmetic is reported** (runbook false positive 1). The bands in this range run
B–D, A–D and skip freely; nothing is broken mid-word or mid-construction across an anchor.

---

## §4 · REGISTER DECISIONS FIXED FOR THIS RANGE

These are one-work equivalences, chosen once and held. A merge across agents should reconcile them
with chunks 0000–0013.

- ***latitudo* = "breadth"** everywhere (VERS. 20–22 of Ps XVII), including the lemma "*into
  breadth*". "A broad place" reads better in the lemma and would break the gloss, which picks the word
  up three times to build *latitudo fidei* → *latitudo bonorum operum* → *longitudo perseverantiae* →
  *altitudo spei*, a dimensional figure that only works if one English word carries it.
- ***alienus* = "alien"** throughout Ps XVIII (*ab alienis*, *alienum*, *alieni maligni spiritus*).
  The English preposition varies with the syntax ("by alien things" / "from alien" desires) because
  English requires it; the lexeme does not vary.
- ***occultus* = "hidden"**, so *Ab occultis meis munda me* is "From my hidden things cleanse me", not
  "my secret ones" — the gloss depends on *occultum suum* being the same word as the lemma's.
- ***desiderabilis* = "desirable"** across Ps 18:11, so that *desiderabilia*, *desiderentur*,
  *desideret* and *desiderabiliora* stay visibly one family.
- ***dorsum* = "a back"** in both places it is glossed (Ps 17:41 *dorsum mihi eos fecisti esse*;
  Ps 20:13 *pones eos dorsum*), following the gloss's own literal reading rather than the idiomatic
  "make them turn their back".
- ***in saeculum saeculi* = "for ever and ever"**, uniform across Ps XVIII and Ps XX.
- **`VERS. n.--` passes through verbatim; heads are Englished** (`IN PSALMUM XVII.` → `ON PSALM XVII.`,
  Roman numeral kept). `(cont.)` on chunk 0015's repeated head is carried untranslated (runbook false
  positive 7).
- **Pattern 17**: God, Christ and the psalmist are addressed in the singular throughout and take
  *thou/thee/thy*; the only plural addressee in the range is *vobis* at 0793C (*relinquo vobis*),
  which takes "you".
- **Punctuation as printed.** Migne's period **inside** the lemma before `etc.` at 0791D
  (*eloquia oris mei.* etc.) is reproduced, though every other lemma in the range ends in a comma.
  Not a defect and not normalized.

---

## §5 · WHAT I DID NOT DO

- **No `[n:]` anywhere.** The work's `noteCount` is 0 in all eighteen chunks and these four carry no
  attribution siglum at all — unusual for the Glossa, and worth a merge note: this exposition is a
  continuous abridgment of Augustine's *Enarrationes* with no inline sigla, unlike Ruth.
- **No `[ed:]`.** Nothing in this range looks like lost text: the paragraph structure matches the
  Latin twin 1:1 in all four chunks (37/17/16/27 paragraphs) and no sentence stops mid-construction.
- **No `[d:]`.** The repeated *multum* at 0790C is Migne's deliberate three-way construal (*sive
  multum … sive multum … sive multum*), not dittography.
- **No plate was read.** Three sites would repay one if a run is going to PL 114 anyway, in this order:
  **0790B** *resisti* (§3.1, a lost final *-t* is the brief §4 class), **0787B** *manducaverint*
  (§3.2), and **0789D** *coeli* for *caelo* (§1.3, a case ending that could equally be a
  digitization tidy-up). The five `[sic:]` non-words are not on that list: addendum A records that
  suspicion aimed at a non-word has been confirmed ten times out of ten.

---

## PLATE COLLATION — markers withdrawn

**2026-08-28.** All 22 pages read at Migne's plate; 61 TEI patches applied; the Latin twins now
say what Migne printed. Chunk boundaries did not move. **Four of this range's markers were
false public claims against Migne and are gone.** The rows and sections above are struck and
annotated in place, never deleted.

**Withdrawn.**

- **0787A `[sic: *poputum*]` — WITHDRAWN.** At 1200 dpi Migne prints ***populum***, the *l* at
  full height and matched against the *l* of *humilem* on the same line. *poputum* was Corpus
  Corporum's. English: `*For thou wilt save the humble people,*`.
- **0789D/0790A `[sic: *cut*]` — WITHDRAWN.** Migne prints ***Exultavit ut fortissimus***.
  English: `He rejoiced as one most mighty`.
- **0792B/0792C `[sic: *cortuum*]` — WITHDRAWN, and there was never a run-together.** Migne sets
  ***cor*** at the end of a line and ***tuum,*** at the head of the next, **with the column break
  between them**; the twin now reads `*secundum cor [0792C] tuum,*`, the anchor **inside** the
  italic span. The English anchor has been moved to the matching position:
  `but *according to thy own [0792C] heart,*`. ⚑ **Generalizable: a Pattern 10 run-together
  should always be checked against the line ending, because a transcription that loses line
  breaks manufactures exactly this defect.**
- **0790B `[cj: *resisti*; read *resistit*]` — WITHDRAWN; no conjecture is needed.** Migne prints
  ***resistit*** with a fully formed final *t*. English carries the plain reading: "since God
  resisteth the proud, but giveth grace to the humble." §3.1 above stands as method and is void
  as to this site.

⚠ **All four had the same shape:** the marker accused Migne of a defect that the digitization
had introduced. Counting 0770A's withdrawn `[var:]` in `cruces-0005`, **five of this work's
public claims were artefacts of Corpus Corporum.**

**Punctuation corrected at the plate — Pattern 8 in both directions.**

- **0789A (VERS. 48).** Migne prints *…**liberator meus de inimicis meis.** Judaeis,
  clamantibus. Crucifige, crucifige!* — a stop **inside** the italic span, a stop (not a colon)
  after *clamantibus*, and an exclamation at the end. The English had smoothed all three into
  one running sentence with a colon. It now reads: `*my deliverer from my enemies.* The Jews,
  crying out. Crucify him, crucify him!` The fragment is Migne's and is carried as a fragment.

**Sites where the corrected plate changed the sense.**

- **0789D · lemma *ut gigas **ac** currendam viam suam*** (CC: *ad*). The English keeps "**to**
  run his way", which is the evident sense and the reading the gloss itself repeats three lines
  later in Migne's own words (*non ad habitandum, sed **ad** currendam viam*). No marker: this is
  one more of the work's restored one-sort defects, which are out of scope for marking by the
  standing ruling. Recorded here so the reader of the twin is not left to wonder.
- **0785D · *Ut **n** profundo rerum humanarum audirentur coelestia*** — Migne's *in* has lost
  its *i*. The English already rendered the evident sense ("That in the depth of human affairs
  heavenly things might be heard") and is unchanged. Same class, no marker.

### 0788A · *sive signa, quae **impressi** ad imitandum sequentibus* — ⛔ **NO MARKER, and this is a dissent**

The plate collation restored *impressi* (CC had tidied it to *impressa*) and flagged the site as
**the one place in this work where the plate genuinely does not construe**, recommending a
`[sic: *impressi*]` or a `[cj:]` proposing *impressa*. **I decline to fire either, because the
premise is a misparse and the marker would be the sixth false claim against Migne in this work.**

**The reading construes exactly as printed.** *impressi* is not a participle that has failed to
agree with *signa*; it is the **first-person perfect active** of *imprimo*, and *quae* is its
direct object:

> *et non sunt infirmata sive itinera **mea**, sive signa, quae **impressi** ad imitandum
> sequentibus* — "and they are not weakened, whether **my** journeys, or the marks **which I
> impressed** for those who follow to imitate."

The whole sentence is first-person and addressed to God (*Dilatasti gressus **meos***, *latam
fecisti charitatem **meam***), so a first-person verb is not merely possible here, it is the
expected voice.

⭐ **And there is an external witness on disk.** The same passage in the parallel psalm
commentary at `sources/pl/tei/7109.xml` (PL 21, *Commentarius in LXXV psalmos*, the paragraph
marked *(Ex Augustino)*) reads:

> *Et non sunt infirmata vestigia mea. Id est, signa, quae **impressi** ad imitandum te.*

Same clause, same finite verb, an independent book and an independent transcription. **Migne's
page is not defective here; only the parse was.** The English has been changed from the passive
"the marks **which are stamped** for those who follow to imitate" — which was rendering CC's
*impressa* — to the active **"the marks which I impressed for those who follow to imitate."**

⚠ If a later reader wants the marker anyway, the thing to overturn is the 7109 parallel, not
this note.

### 0794A · *sed adhuc *gloria et magnum decorem* addes ei* — `[cj:]` FIRED

The collation restored ***gloria*** (CC had *gloriam*). **Here the plate really does not
construe**, and unlike 0788A there is no reading that rescues it: *addes ei* is transitive and
takes *magnum decorem* in the accusative, so a nominative *gloria* is stranded in a coordinated
pair with an accusative. It is a real Latin word wrongly inflected, which is Pattern 12's
explicit exclusion and Pattern 18's proper territory.

- **Marker: `[cj: *gloria*; read *gloriam*, "glory"]`**, placed immediately after the italic
  span and before the `[0794A]` anchor, mirroring the twin's own order.
- **The compromise, stated plainly:** English has no case endings, so "glory" renders the
  printed *gloria* and the conjectured *gloriam* identically — **the reader cannot see the
  defect in the English at all**, and the marker is the only thing that tells him it is there.
  That is exactly why it takes a marker where the one-sort defects above do not: those are
  invisible in Latin too (*n* for *in*, *ac* for *ad*), whereas this one is a real word that a
  Latin reader will stop on and an English reader would never suspect.
- ⚠ `[cj:]` inverts the `[var:]` content test: *gloria* must appear **verbatim** in the Latin
  twin, and it does. `verify-english.mjs` passes.
