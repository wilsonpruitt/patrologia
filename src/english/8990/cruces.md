# *Glossa ordinaria*, **Epistola ad Colossenses** (PL 114, 0609A–0616B) — cruces

Translated 2026-08-18, one translator, 3 chunks (2,686 Latin words → 3,957 English, 1.47×), on Opus.
Structure: ARGUMENTUM, CAPUT PRIMUM (chunk 0); CAPUT II (chunk 1); CAPUT III, CAPUT IV (chunk 2).

Apparatus: **8 `[var:]` · 1 `[sic:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` · 2 `[n:]`**
(exact `[n:]` parity with the Latin twin). Marker parity verified after writing: **28 column anchors**
(11 + 10 + 7, verbatim and in order, including the two anchors Migne sets hard against a verse
address with no space — `[0613D]VERS. 23.--`, `[0615A]VERS. 17.--`, `[0616B]VERS. 16.--`),
**126 italic spans** (41 + 57 + 28 — exactly the 126 of the lemma census, marker contents excluded),
**2 question marks** (1 + 1 + 0), **5 `## ` heads**. Zero guillemets in either language. Zero
em-dashes in either language.

Conventions follow `GLOSSA-NT-AGENT-BRIEF.md`: `VERS. n.--` passes through verbatim; the lemma is
Englished; notes ride as ordinary `[n:]`, contents untranslated. Pattern 17: **every second person
in this work is grammatically plural** (*vos, vobis, estis, servatis, facitis*) — the Colossians as a
body — so the English is "you" throughout and carries no *thou*. Checked; there is no singular
address anywhere in the work.

---

## §0 · PLATE STATUS — A CHECKED ZERO, NOT AN UNCHECKED WORK

**Foot-of-page apparatus for cols 0609–0616: a CHECKED ZERO.** Read by the orchestrator this session,
not by the translator. Method: archive.org `patrologiaecurs06saingoog`, **leaf n = (column + 9) / 2**,
verified against the running head. Leaves **n309, n310, n311 and n312** read at full page width across
the whole foot. **No foot rule, no numbered notes — the columns simply end.** n309 was read at the
**mid-page work division** (Philippians ends, `EPISTOLA AD COLOSSENSES` begins below the rule, which is
where this work opens) — the configuration that lost three notes on PL 202, and it is clean here. n312
was additionally read in a previous batch and agrees.

Tier 3, coverage `full`, `notes_recovered: 0`. **Migne answered none of the cruces below.** The single
`[cj:]` of §3 and the single `[sic:]` of §4 therefore stand on our reading alone — they are not
conjectures Migne had already settled on the page.

⚑ **The two plate readings I flagged at 0611A were referred to the orchestrator and are now
ADJUDICATED.** He re-read n310 at full resolution; the result split two ways and both halves are
recorded here because the method is the point.

- ***receperunt quae per Moysen*** — **our twin is right and the crop was wrong.** An earlier reading
  *receperunt eum per Moy…* came from a compressed strip that had overlapped two lines. ⚑ Same
  mechanism as the *jubentur* error of the previous batch: **a plate reading taken from a crop that was
  not seen whole.** No change to the English.
- ***concilio*** — **the plate is right and our twin is wrong.** See the section below.

⭐ The general lesson, and it is the reason this entry is long: **a translator does not emend the
committed twin from a partial crop, and does not adopt the twin against a plate reading seen whole.**
Flagging both and rendering the twin was correct in the interval; acting on either without the
adjudication would have been wrong in one direction or the other.

---

## §0a · A DIGITIZATION ALTERATION OF MIGNE'S SPELLING — 0611A, *concilio* → *consilio*

**A class distinct from anything the marker set was built for**, met twice in one session and named
here because this book is where it first surfaced.

| | reads |
|---|---|
| **Migne's plate**, n310, full resolution | *Alienati et inimici **concilio** ejus, quod idem valet* |
| **Our twin as Corpus Corporum delivered it** (pre-patch) | *Alienati et inimici **consilio** ejus, quod idem valet* |
| ✅ **Our twin now**, patched | *Alienati et inimici **concilio** ejus, quod idem valet* |

**Corpus Corporum silently altered Migne's spelling** — and not by corrupting it, but by *"correcting"*
what it took to be an error. ⚑ **Cross-reference: Esther (8948) @0739D, the batch's other instance**,
where the plate prints *convivum* and our twin prints *convivium*. Two books, two instances, one
session: a pattern, not a curiosity.

**Why it is neither of the two things the apparatus already marks.** `[sic:]` says *Migne's type is
defective*; `[ed:]` says *our digitization lost text Migne carries*. This is a third thing: our
digitization **changed** text Migne carries, leaving a well-formed word that reads perfectly. It is
invisible from the Latin alone, and no marker in the English can carry it, because the fix belongs
upstream in the TEI. ⭐ **The orchestrator is applying a `data/tei-patches` entry restoring *concilio*
after these files close** (patches run before chunking, so it could not be applied while they were
open). Migne's plate is untouched; the patch corrects our transcription back to what he set.

**What I did about it, and it is a rendering decision, not a marker decision.** The English now renders
***concilio***, the word Migne printed:

> *Alienated and enemies* to his council, which comes to the same thing, because they did not receive
> the things which God commanded through Moses, inasmuch as they were devoted to their own idols.

✅ **SETTLED, and the columns agree.** The plate reads *concilio*; the twin has been **restored to
*concilio***; the English renders *concilium*'s own sense. The patch is recorded at
**`data/tei-patches/8990.json`** — it corrects Corpus Corporum's transcription only, and Migne's plate
is untouched.

**No `[sic: *concilio*]`, and here is the reasoning.** Pattern 12 marks type that cannot be rendered *in
place*; *concilio* renders in place perfectly — it is a real word (*concilium*, an assembly or council),
it occupies a real grammatical slot (dative with *inimici*, which governs the dative), and the sentence
it yields is coherent: they were alienated from and hostile to his assembly, and *quod idem valet* says
that being alienated and being an enemy come to the same thing. **I concluded the printed word is
SOUND, not defective**, so it is rendered plainly under Pattern 7 and the marker would be noise.

⚑ A second reason to decline, independent of the first: ***concilium*/*consilium* is an attested
medieval orthographic interchange**, so even a reader who wants *consilium* here is not misled by the
facing column — Pattern 9's exemption and the runbook's false-positive item 6 both point the same way.
I record it as a rendering of *concilium*'s own sense because that is what the plate prints and I have
no warrant to read it as a spelling of the other word.

⭐ **The general point, which I am the first in this book to hit and which belongs in the brief: a word
that reads perfectly well may read well because someone upstream fixed it.** That is undetectable from
the Latin alone. The practical rule that follows is cheap: **where a form strikes you as suspiciously
tidy in a passage that is otherwise rough, say so and ask for a plate read.** Both of this batch's
instances surfaced exactly that way.

---

## §1 · THE LEMMA DIVERGENCE LIST — ALL 126 SPANS CHECKED AGAINST THE VULGATE

Every italic span in the work — the verse lemmata, the mid-paragraph second lemmata, and the four
scripture quotations drawn from OTHER books inside the glosses — was checked word by word against the
Clementine Vulgate **before** the English was written, and each rendering then held fixed against every
re-quotation of it in the gloss below. **Agreements are listed too**, so this can be told apart from a
report by someone who only listed findings.

### 1a · The eight that diverge — all marked `[var: …]`

| col | Migne prints | Vulgate | marker + reasoning |
|---|---|---|---|
| 0610D | *Sicut Pater habet vitam in se, sic et Filius qui suscitat et vivificat quos vult,* | John 5:26 *Sicut enim Pater habet vitam in **semetipso**, sic **dedit et Filio habere vitam in semetipso*** | ⭐ **The single most dangerous span in the work, and one of the four flagged in the launch as high-risk ground.** A **conflation**: the first half is John 5:26 with *in se* for *in semetipso* and no *enim*; the second half is not 5:26 at all but a recast of **John 5:21** (*sic et Filius quos vult vivificat*), with *suscitat* imported from 5:21's *Pater suscitat mortuos*. Rendered as printed: *so also the Son, who raises up and quickens whom he will,*. ⛔ The reach here is for the familiar "so hath he given to the Son also to have life in himself" — which would delete *suscitat et vivificat*, the two verbs the gloss's conclusion (*sic ostenditur perfectus Deus esse*) is built on. |
| 0611B | *mihi data est in vobis,* | Col. 1:25 *quae data est mihi **in vos*** | Accusative → ablative: *in vos* is direction ("toward you"), *in vobis* is location ("among you"). **Material, and the gloss is written on the ablative** — Migne introduces it with *Vel* as a second construal precisely because the case has changed, and closes *tantum est enim quod a meis quaeritur, quantum si a meipso*. Note the FIRST lemma of the same verse, *Data est mihi.*, agrees with the Vulgate exactly; the divergence appears only in the re-quotation. |
| 0612A | *secundum philosophiam et inanem,* | Col. 2:8 ***per** philosophiam, et inanem fallaciam* | ⭐ *per* → *secundum*, **and the whole gloss turns on it**: *ideo cum diceret* secundum philosophiam et inanem, *addit,* secundum elementa mundi — the glossator's argument is the repetition of *secundum*, which does not exist in the Vulgate's text of this verse. Restoring *per* would destroy the argument in the sentence that makes it. Rendered *according to philosophy and vain,*. |
| 0612C | *Decretum,* | Col. 2:14 *chirographum **decreti*** | Genitive → nominative. Not scribal headword-normalization: this glossator **preserves case elsewhere** (*Sortis.* at 0610A stays genitive, *Redemptionem.* stays accusative), and here the gloss makes *Decretum* the subject of *est* — *Decretum, est sententia in cunctis hominibus adversa*. Rendered *The decree,* with the comma Migne prints. |
| 0612C | *Morte moriemini,* etc. | Gen. 2:17 *morte **morieris*** (singular) | ⭐ Migne prints the **plural**. The plural *morte moriemini* is a real Vulgate string — but it stands at **Gen. 3:4, in the serpent's mouth and negated there** (*Nequaquam morte moriemini*). So the *decretum* which the gloss calls *sententia in cunctis hominibus adversa* is quoted in the form the serpent used to deny it. Rendered *You shall die the death,* — plural, per Pattern 17, not "thou shalt". |
| 0614B | *Qui enim scit voluntatem Domini, et non facit, plagis vapulabit multis [n: (Luc. XII)]* | Luke 12:47 *Ille autem servus qui **cognovit** voluntatem **domini sui**, et **non praeparavit**, et non **fecit secundum voluntatem ejus**, vapulabit multis* | Four divergences at once: *scit* for *cognovit*, *Domini* for *domini sui*, the whole clause *et non praeparavit* dropped, and ***plagis* added**, which the Vulgate does not have anywhere in the verse. Rendered as printed. ⚑ The note `[n: (Luc. XII)]` sits **inside** the italic span in Migne; reproduced inside it. |
| 0614C | *secundum imaginem Dei,* | Col. 3:10 *secundum imaginem **ejus qui creavit illum*** | ⭐ **The gloss cites this lemma explicitly as the reading of THIS book** — *vel* secundum imaginem Dei, *ut hic legitur*, against *secundum Deum* "as is read in the epistle to the Ephesians" (Eph. 4:24). The whole comparison is between two printed readings, so conforming this one to the Vulgate would leave the glossator contrasting Ephesians with itself. |
| 0614D | *Pax Dei.* | Col. 3:15 *pax **Christi*** | The gloss distinguishes *pax Dei* from a peace that may be so called and *quae non habet charitatem* — a distinction that needs the divine name it has. Marked though the Old Latin and part of the Vulgate tradition read *pax Dei* here; Pattern 14's witness is named as `Vulg.` and the Clementine reads *Christi*. |

### 1b · Divergences examined and deliberately NOT marked, with the reason

Real differences from the Clementine text, each weighed against Pattern 14's bar ("differs … in a way
that changes the sense") and declined. Recorded because a blind reader will meet them and must be able
to tell a decision from an oversight.

- **0609C · VERS. 9 *Impleamini in omni.*** — Col. 1:9 *ut impleamini agnitione voluntatis ejus, **in
  omni** sapientia et intellectu spirituali*. The lemma **splices** two runs three words apart. No word
  is altered; the gloss knows the full verse (*plene scire quid Deus velit* answers *agnitione
  voluntatis ejus*, *in omnibus rebus activae vitae et contemplativae* answers *in omni sapientia et
  intellectu*). Abridgment, not variance. Rendered *That you may be filled in all.*
- **0611D · VERS. 5 *Sed et spiritu.*** — Col. 2:5 *sed spiritu vobiscum sum*. An added *et*; a
  connective, no content word, and nothing in the gloss touches it. Rendered *But also in spirit.*
- **0612D · *Exspolians principatus et potestates.*** — Clementine *expolians*. Orthographic
  (*exsp-*/*exp-*), Pattern 9. No marker, no italic carry.
- **0613C · VERS. 22 *Quae omnia ipso usu,* etc.** — Col. 2:22 *quae **sunt** omnia **in interitum**
  ipso usu*. Internal elision inside a lemma Migne himself closes with *etc.*, and the gloss restores
  the elided phrase in its own words (*ducunt in mortem*). Abridgment, not variance.
- **0614A · VERS. 3 *Vita vestra abscondita.*** — Col. 3:3 *vita vestra **est** abscondita*. Dropped
  copula in a fragmentary lemma. Nothing at stake.
- **Orthographic throughout, all Pattern 9, none marked:** *charitate/caritate*, *quodcunque/quodcumque*,
  *caeteris/ceteris*, *coelum/caelum*, *Tichicum* (8982's spelling, and Migne's here).
- **Capitalization is not variance.** Migne capitalizes *In Spiritu.* at 0609C where the Vulgate prints
  *in spiritu*, and *Regnum Filii.* where it prints *in regnum filii*. English capitalization of
  "Spirit" and "Son" carries no exponent for the difference and the gloss does not turn on it.

### 1c · The four scripture quotations from OTHER books, inside the glosses — the launch's named risk

These were checked first and hardest, because this is where the reach for a remembered English Bible
happens. Three of the four **agree with the Vulgate exactly** and are recorded as agreements so the
check is visible; the fourth is the conflation of §1a.

- **0610A–B · *Regnum meum non est de hoc mundo;*** (John 18:36) — **agrees verbatim**, semicolon
  included. Rendered *My kingdom is not of this world;*
- **0610B · *non est hinc,*** (John 18:36, the verse's own close) — **agrees verbatim**. Rendered *it is
  not hence,* ⚑ **And the contrasting phrase beside it, *Non est hic*, is ROMAN in Migne, not italic** —
  it is the glossator's counterfactual, not a quotation, and it is not in John. The English keeps it
  roman: *he did not say: It is not here, but,* it is not hence. Three negatives in that one clause
  (*non ait · Non est hic · non est hinc*), all present, each on its own verb.
- **0610B · *De mundo non estis, sed ego elegi vos de mundo.*** (John 15:19) — **agrees verbatim** with
  the Vulgate's *quia vero **de mundo non estis, sed ego elegi vos de mundo**, propterea odit vos
  mundus*; the lemma simply opens after *quia vero*. Rendered *You are not of the world, but I have
  chosen you out of the world.* — plural *estis*, plural "you", Pattern 17.
- **0612B · *Verbum caro factum est [n: (Joan. I)]*** (John 1:14) — **agrees verbatim**. The note sits
  inside the italic span and is reproduced inside it.

### 1d · Scripture the gloss uses WITHOUT italics — checked, and correctly unmarked

Roman-set scriptural matter is the glossator's prose, not a quotation, and Pattern 14 does not reach it.
Named here so a blind reader can see they were noticed and not silently conformed:

- **0610A** *apud quem non est iniquitas* (after 2 Chr. 19:7 / Rom. 9:14) — roman, rendered as prose.
- **0614B** *radix omnium malorum* (1 Tim. 6:10) — roman.
- **0614A** *tempus terrena amantium semper est paratum* — a **re-cast** of John 7:6 (*tempus autem
  vestrum semper est paratum*), with the possessive replaced by a genitive phrase. Roman, so no `[var:]`;
  rendered as the glossator recast it, not as John.
- **0614D** *vestis Domini inconsutilis desuper contexta* (John 19:23) and *eminentior via* (1 Cor.
  12:31, where the Vulgate has *excellentiorem viam*) — both roman, both rendered as printed.

---

## §2 · THE UNEXPRESSED SUBJECT — every supplied pronoun, named

Fifteen places where English had to print a pronoun the Latin does not. Each is named with what decides
it. Where two readings construe, both are set out — and the one adopted is stated, because a flagged
passage is not a checked passage.

| col | Latin | supplied | what decides it |
|---|---|---|---|
| 0609C | *coepit Archippum adjuvare* | "he began to help Archippus" | **The lemma above decides it, not the sentence.** *Pro vobis,* opens Col. 1:7, whose subject is **Epaphras** (*sicut didicistis ab Epaphra … qui est fidelis pro vobis minister*). The rival reading is Paul, and it is not absurd — the ARGUMENTUM makes Archippus the one who preached, and Paul the one who writes. **Adopted: Epaphras**, because the verse the lemma opens supplies him and the glossator's *Quorum salutem desiderans* answers *pro vobis* in the same verse. English prints only "he", so the ambiguity survives intact either way; nothing was silently chosen in the text. |
| 0609D | *Quod bene potest ille qui est claritas Patris* | "he can well do who is the brightness of the Father" | Migne supplies the antecedent himself: *id est Filius*. No judgment needed. |
| 0609D | *Vel secundum quod claram cognitionem vobis dedit* | "he has given you clear knowledge" | The Son, carried from the immediately preceding *id est Filius*. |
| 0610B | *hos per eum merito dimitteret* | "he might justly let these go" | **The devil.** The clause is *quia diabolus illos merito tenebat … hos … merito dimitteret*: the same subject holds and releases, which is the whole symmetry of the sentence (*merito … merito*, *reos … reum*, *conditione mortis … poena mortis*). Reading it of God or Christ breaks the antithesis. |
| 0610D | *sic ostenditur perfectus Deus esse* | "he is shown to be perfect God" | The Son, subject of the John 5 quotation immediately above and of *Quia omnia potest ex se* immediately before. *ostenditur … esse* is nominative-with-infinitive, so the subject is the person, not "it is shown that". |
| 0610C | *quia super fidem humanitatis **ejus** fundata est* | "it is founded upon the faith of **his** humanity" | ⚑ **The `ejus` case the launch names.** *ejus*, not *sua*: the possessor is **not** the subject of *fundata est*. Subject = *Ecclesia* ("it"); possessor = Christ ("his"). Rendering *sua* here would have made the Church founded on the faith of its own humanity. |
| 0611A | *quia non receperunt quae per Moysen mandavit Deus* | "they did not receive" | The *alienati et inimici* of the lemma — i.e. the addressees in their former state. Migne shifts from the verse's second person (*Et vos cum essetis aliquando alienati*) to the third; the English keeps his third person and does not repair it to "you". |
| 0611A | *in ipso auctore vivunt* | "live in him their author" | Christ; *Omnia per eum facta* is the subject and *ipso* the agent of *per eum*. |
| 0612B | *in templo manufacto … habitavit* | "he dwelt" | God — *Non quia corporeus sit **Deus*** two clauses earlier. |
| 0612D | *longe ab hoc regno ad coelum duxit* | "he led **them** far from this kingdom" | Object supplied, not subject: **the just just named** (*Abraham, Isaac et caeteros justos*, the object of *Auferendo* in the previous sentence). The subject is Christ, from *Traduxit*. |
| 0613A | *interior quae nos tenebat potestas **ejus** occisa est* | "**his** inner power … was slain" | ⚑ A second `ejus` of the same class, and it decides the sentence. Subject of *occisa est* is *potestas*; possessor is the **devil**, named as subject of *accepit* in the same period. "Its own inner power was slain" would lose the devil entirely. |
| 0613B | *amans ea quae non vidit … quarum rationem ignorat* | "loving those things which **he** has not seen … **he** does not know" | The *quis* of Col. 2:18 (*Nemo vos seducat, **volens** in humilitate*), third singular throughout. |
| 0612D | *Ut jam cesset* | "That **it** may now cease" | *illud* of the lemma *Affigens illud.* — the *chirographum*/*decretum*. |
| 0615A | *ne coarctati ab illis, delinquant in illos, et Deum offendant* | "lest **the sons**, hemmed in by them, transgress against them" | ⭐ **REPAIRED after the blind read (§8, repair 3) — this entry previously claimed the English required no choice, and that was wrong.** The subject of *delinquant* is the **sons**: they are the ones *coarctati ab illis* (hemmed in by the fathers) and they transgress *in illos* (against the fathers). The antecedent sits in the lemma's verse, Col. 3:21, and in *Modestos praecipit patres esse **filiis*** two words earlier — not in the *ne* clause. ⛔ **Why the first rendering failed**: a bare "they" sitting between "by them" and "against them" resolves to **the fathers** on the default English parse, which makes the gloss incoherent as counsel (fathers told to be moderate lest the fathers transgress). Latin morphology leaves *coarctati* free to take the remoter noun; English word order does not. The English now names the sons, which is recovery of a printed antecedent, not a supplied one. |
| 0616A | *Apertum est, quando multa et magna dicit* | "It is open, when **it** speaks" | *os* (neuter), carried from *Apertum est* which is itself neuter and agrees with *os*. The rival reading is "when **he** speaks" (Paul); it is possible, and declined only because the neuter *Apertum* in the same clause fixes *os* as the running subject. Logged rather than settled. |
| 0616A | *quod rediit ad me* | "because **he** has returned to me" | **Mark** — Col. 4:10 *Marcus consobrinus Barnabae, de quo accepistis mandata: si venerit ad vos*, and the gloss's own *et ideo si venerit* quotes that clause. |

---

## §3 · THE ONE `[cj: …]` — 0613A, *Ego* for *Ergo*

Migne prints **`Ego Scriptura quae tunc fuit exactrix operum significantium, nunc testis est rerum
significatarum`**. *Ego* is a real, perfectly good Latin word, so Pattern 12 has nothing to wrap — but
it has **no grammatical slot**: every verb in its clause is third singular (*fuit*, *est*), and the
sentence next to it is third singular too (*quae tunc observabatur … nunc recitatur*). Read as *Ergo*
the period construes without remainder and gives the gloss the connective its argument needs (it is
drawing the conclusion from *Tunc fuerunt hujusmodi praecepta … nunc testimonia*).

Applied under Pattern 18 **additively**, Migne's word keeping its English:

> I `[cj: *Ego*; read *Ergo*, "therefore"]` the Scripture which then was the exactor of the works that
> signify, is now the witness of the things signified:

**Why the bar is met, and the precedent.** The nearest ruled case is **10703 @1126B — *Oro* ("I pray")
for *Pro*, leaving a stranded ablative** — ✅ on Pattern 18a's list. This is the same shape: a real word
substituted for a short function word, leaving a syntactic stranding that no English can carry, and the
false English ("I, Scripture, …") asserts a first-person speech act the glossator never makes. The
verbatim-in-the-Latin-twin guard is satisfied by *Ego*.

⚠ **Weighed against 18a's decline classes and it survives them:** it is not inside a marker (nothing is
defective enough for `[sic:]`), it is not inside a quoted scripture (that would be Pattern 14), and
Migne glosses nothing here himself — §0 records the foot of these columns as a checked zero, so this
conjecture is ours and is disclosed as ours. **The nearest decline is 11064 @1154C** (*suscepit* for
*suscepi*, a person slip, declined); the difference is that 11154C's sentence has no main clause in
either language, while this one has a complete main clause with a pronoun stranded outside it.

⛔ The `[sic: *Ego*]` alternative was considered and **rejected**: a `[sic:]` would take the connective
out of the English altogether, which is exactly the 7a⁗ swallowing this edition has spent a corpus-wide
sweep undoing. Pattern 18's additive form keeps both the printed word and the conjecture on the page.

---

## §4 · THE ONE `[sic: …]` — 0614C, *me morat* for *memorat* (word division, Pattern 10)

Migne prints **`Hoc me morat ut se evasisse gaudeant et de caetero caveant`**. *me morat* will not
construe: *morat* (late for *moratur*, "delays") with *me* leaves a first-person object governing a
purpose clause about a third-person plural, and the clause has no other finite verb.

This is the **split direction** of Pattern 10's word-division class — the shape 7a⁗-b names as the most
dangerous, because quarantining a split run removes a whole lexeme and this lexeme is the sentence's
only predicate. *me morat* is *memorat*, the Glossa's commonest formula for "he mentions/recalls this,
so that …".

> *In which you also walked.* He mentions `[sic: *me morat*]` this, that they may rejoice that they have
> escaped, and may beware for the rest.

**Test 1 run on it, all four questions.** Strip the marker and read: *"He mentions this, that they may
rejoice that they have escaped, and may beware for the rest."* — (1) the clause still has its verb
("mentions", supplied in plain words beside the marker per 7a⁗, not left inside it); (2) no negation was
in the run; (3) no interrogative or conjunction was in the run; (4) ⭐ **the fourth question, the one
7a⁗ does not ask — the clause still has its object** ("this"). Nothing is stranded on punctuation and
nothing is doubled.

⚑ Rival readings weighed and rejected: *monet* ("he admonishes") gives the same sense but is not a word
division and would be a bare emendation; *movet* ("this moves me") leaves *ut … gaudeant* unattached.
*memorat* is preferred because it accounts for the printed **spacing**, which the other two do not.

---

## §5 · Sections read clean, and cruces declined with reasons

**Read clean and reported as clean** (a checked zero is not a skip): the ARGUMENTUM; the whole of
CAPUT IV; VERS. 3, 8, 10, 15, 22 of CAPUT PRIMUM; VERS. 1, 2, 4, 12, 19 of CAPUT II; VERS. 1, 2, 8, 16,
23 of CAPUT III. **Verse addresses run in ascending order in all four chapters with no dislocation** —
1, 3, 6–15, 18–25, 28/29 · 1, 2, 4, 5, 7–9, 12, 14, 15, 17–20, 22, 23 · 1–3, 5, 7, 8, 10, 14–17, 21, 23 ·
3, 5, 8, 10, 16, 18. Nothing renumbered, nothing reordered; there is no Jude-type dislocation in this
work, and its absence was checked, not assumed.

**Declined, each with its reason:**

- **0609B · *Nota omnibus dignitate recte hic apostolum se nominat.*** The obvious conjecture is
  ***Notus** omnibus dignitate* — "known to all by his dignity" — which construes the whole sentence
  and answers the *quia* clause perfectly. **Declined for a `[cj:]`**: *Nota* as an imperative is the
  Glossa's single commonest opening formula (*Nota quod …*), so the printed word is not merely a real
  word but the *expected* word in this position, and the sentence it yields is elliptical rather than
  false — 18a's ❌ "a merely awkward or elliptical sentence". Rendered *Note that to all in dignity he
  here rightly names himself an apostle,* with "that" as the English complementizer *Nota* + indicative
  takes, and no punctuation supplied (Migne prints none between *Nota* and *omnibus*).
- **0611A · *concilio ejus, quod idem valet.*** ⚑ Plate-confirmed as ***concilio***; see §0a for the
  digitization-alteration class and for why no marker was taken. **No `[var:]` either**: the italic
  lemma is *Alienati et inimici* alone and it agrees with the Vulgate exactly — the Vulgate's *sensu*
  is not in the lemma at all, and *concilio ejus* is **roman**, i.e. Migne's own typography already
  marks it as gloss rather than quotation. So Pattern 14 has nothing to fire on. The *ejus* has no
  antecedent in its own sentence and is rendered "his" without resolution.
- **0612A · *quasi admonens ne qualescunque adoratores simulacrorum, sed et quasi doctores … cavendos
  esse.*** The construction wants ***non solum*** where Migne prints ***ne***, and the temptation is to
  render "not **only** any sort of worshippers". **The "only" was not supplied.** Rendered *as if
  admonishing that not worshippers of images of whatever kind, but also, as it were, teachers and
  interpreters of the signs, are to be guarded against* — the negative sits on *adoratores*, where
  Migne's *ne* sits, and the sentence is left as broken as he prints it. Declined for a `[cj:]`
  because the correlative's answering member (*sed et*) IS printed and the shortfall is a mood particle,
  not a lost negation: nothing is asserted falsely, the sentence is merely un-Latin.
- **0612C · *non autem solum alia.*** Elliptical: *alia* has no verb and the *non … solum* has no
  answering *sed*. Rendered *yet not that alone, others as well* — "as well" is the English exponent of
  the asyndeton, and it is the only word in this work supplied to a Latin ellipsis. Flagged so a blind
  reader can weigh it. The negative sits on *solum*, and the following *quia nisi hoc **et alia**
  tolleret* confirms that both Adam's sin and the others are meant.
- **0613D · *In honore* Dei, cujus consilium, irritum dicitur.** ⚑ **Migne prints a comma between
  *consilium* and *irritum dicitur* — subject severed from its verb.** Under Pattern 8 it is
  **preserved**, and the English reads *whose counsel, is called void*. This will look like our typo and
  it is not; the Latin twin carries it in the facing column. Not marked (a comma is not carried type),
  logged here because it is the one place in this work where a printed mark makes the English read
  wrongly.
- **0613D · the *sunt* / *non sunt* series.** ⭐ **The single passage most likely to be mis-rendered in
  this work, and it is not marked because it is not defective.** Migne alternates *et sunt: Non ad
  parcendum corpori* (**affirmative** *sunt*, the negative living inside the quoted lemma) with *et non
  sunt: In honore* and *et non sunt: Ad saturitatem carnis* (**negative** *sunt*). All three preserved
  exactly as printed. Collapsing the first into a negative — which reads more smoothly, since the eye
  expects three parallel denials — would reverse the glossator's claim about *non ad parcendum corpori*,
  which is that the observances **do** answer that phrase of the verse.
- **0613D–0614A · *Sagina enim carnalis est sensus traditio humana.*** *est* stands between *carnalis*
  and *sensus*, which is hyperbaton, not corruption: *carnalis* is the genitive agreeing with *sensus*.
  Rendered *For the fattening of the carnal sense is human tradition.* No marker.
- **0610C · *usque ad*.** This work's **only** occurrence (*qui ab Abel usque ad ultimum justum
  generantur*) is **ordinary prose, not the abridgment formula**: it is roman in Migne, sits inside a
  gloss rather than a lemma, and elides nothing. Rendered *as far as* — the settled English — but
  **roman, with no italics added**, because adding italics Migne does not print would break span parity
  to honour a convention that does not apply here.
- **0616B · VERS. 18 *Antequam salutationem ponat, praemittit exhortationem.*** In the Vulgate the
  salutation (*Salutatio, mea manu Pauli*) stands **before** *Memores estote* in the same verse, so the
  glossator's "before he sets down the salutation" reverses the printed order of Col. 4:18. **His
  reading, reproduced; not corrected.**

---

## §6 · THE THREE TESTS FROM THE BRIEF, RUN ON THESE FILES

**Test 1 — a `[sic:]` must not swallow the word it marks.** Both markers stripped and the residue read
aloud, plus a mechanical scan for stranded articles/prepositions sitting on punctuation and for doubled
marks. **Clean.** The `[sic:]` site keeps its verb *and its object* (§4, where the fourth question is
asked explicitly); the `[cj:]` site is additive by construction and keeps Migne's own word in the text.
The one doubled-mark hit was *etc., not of God* at 0613C, which is Migne's own *etc., non Dei*.

**Test 2 — a negation can be RELOCATED.** All **90** negation-bearing tokens in the Latin (28 + 40 + 22)
were listed, and for each the **single Latin word it attaches to** was named and then found in the
English with the negative on it. Counts also compared band by band and match everywhere. The correlative
sites — the 2 Thessalonians shape — were checked one at a time and **all six hold**: *Non solum dico …
sed ut* (0611D), *Non solum vobis gentibus … sed et nobis Judaeis* (0612C), *non autem solum alia*
(0612C), *Non solum quae facitis … sed omnia* (0615A), *Non enim minus … quam* (0611D-open), *Non minus
… quam* (0609C). The scope traps checked individually: *quae **non** servare peccatum erat* (0613A —
the negative is on the infinitive, not on "was sin"); *qui timore **non** peccat* (0615B — on *peccat*,
not on *timore*, so "he who, through fear, does not sin"); *ne solus nomen deitatis habeat* (0614B — ⚑ **corrected after the
blind read, §8 repair 2: the negative is on *solus*, NOT on *habeat*** — idolatry's aim is that God
should not have the title *alone*, and the answering limb *ut **solus** usurpet* affirms of the covetous
man exactly what *ne **solus*** denies of God); *ne haec putentur **non** periculosa* (0614C)
and *ne videatur salus **non** esse promissa* (0611B) — **two true double negatives, both carried
double**, where dropping one yields the smoother and false "lest these be thought harmless" / "lest
salvation seem to have been promised only to the Jews". Not one negative was pressed into double duty.

**Test 3 — punctuation compared BY COLUMN BAND, never by total.** The 28 verified anchors partition
both twins identically; colons, semicolons, question marks, exclamation marks, guillemets, quotation
marks and parentheses were counted in each of the 31 bands. **The first pass returned 19 mismatched
bands and every one was a real site** — the totals would have hidden most of them, since supplied and
destroyed marks were cancelling across bands exactly as the brief warns. All 19 fixed: 14 semicolons
and 2 colons **supplied** where Migne prints a comma or nothing (0609A, 0609B, 0610C, 0611D, 0612A,
0612B, 0612C, 0613A, 0613B, 0613C, 0613D×2, 0614-open, 0614C, 0614D, 0615A), and 3 colons **destroyed**
where he prints one (0609D *confugerunt:*, 0610A *a diabolo:*, 0613A *exstinxit:* — the last needing the
English clause reordered so the colon fell on the correct side of the `[0613A]` anchor, as it does in
the Latin). **Final state: zero mismatched bands, all marks, all chunks.**

⚠ Per the brief, **no comma→semicolon sweep was attempted**: this book prints semicolons freely (five in
the Latin), so Tobit's narrow exception does not apply and was not invoked.

**Also verified after writing:** 28 column anchors 1:1 and in order; 126 italic spans 1:1 and in place;
2 `[n:]` in the same positions with contents untranslated (both are citations — *(Joan. I)*, *(Luc. XII)*
— so neither takes Pattern 15's `[nt:]`); 2 question marks, both Migne's (*quomodo caput eorum?* at
0610C, a direct question needing no recasting; *quare legem servatis?* at 0613C, rendered as the direct
question Migne's *dicite* introduces — *but do you say to others, Why do you keep the law?* — so the mark
rides with a comma rather than Pattern 8b's colon, which was not needed here and would have been a
supplied mark); 5 `## ` heads; zero em-dashes on either side.

---

## §7 · What a blind reader should look at hardest

1. **0610D, the John 5 conflation.** The `[var:]` is long and the rendering is deliberately un-familiar.
   Check *suscitat et vivificat* survives in the English, since the remembered verse has neither verb.
2. **0613D, the *sunt* / *non sunt* series.** Three parallel clauses of which only the first is
   affirmative. If one of the three has drifted, it is here.
3. **0613A, the `[cj:]` on *Ego*.** The most arguable judgment in the work; §3 sets out the precedent it
   rests on and the two decline classes it had to survive.
4. **0609C, *coepit Archippum adjuvare*.** The one unexpressed subject where the rival reading (Paul
   rather than Epaphras) is genuinely live and the English cannot show which was meant.
5. **0612B, *quia ille caput in quo omnes sensus, insistit; quasi solus tactus*.** The hardest sentence
   in the work to construe, and **repaired after the blind read** (§8, repair 1). *insistit* governs
   *omnes sensus*, and the verbless second limb **gaps it**. No verb is supplied anywhere in these three
   chunks — the English gaps in the second limb exactly as the Latin does.
6. **0611A, *concilio ejus*** — the digitization-alteration site of §0a, now settled: plate, twin and
   English all read *concilio* / "council", patch at `data/tei-patches/8990.json`. Worth a reader's eye
   only as the **class**, not as an open question — a word that reads perfectly may read perfectly
   because someone upstream tidied it.

---

## §8 · THE BLIND POLARITY READ — 4 sites, 3 repaired, 1 declined

A blind reader that **never saw this cruces file** read all three chunks. It returned 4 sites and
independently decided all five of the sites flagged above. **Three repairs were made; one finding was
declined on Pattern 18 grounds.** All repairs are folded into the sections above and into the running
text; this section records what changed and why, so a later reader is not left comparing versions.

⭐ **What the read confirms about the method, and it is the most reusable line here.** The reader named
**five separate opportunities to conform a quotation to a familiar English Bible** — John 5:26, Col.
2:8, Gen. 2:17, Luke 12:47, Col. 3:15 — and found **all five logged rather than silently corrected**
(§1a). It then said that is precisely why it looked hardest **where no marker appears at all**. That is
the 7a″ apparatus working as designed: a divergence list does not merely record findings, it tells the
next reader where the translator's attention has *already* been, and so redirects the hunt to the
gloss prose between the lemmata. **All four of its sites are in gloss prose. None is in a lemma.**

### Repair 1 — 0612B, `insistit` mis-parsed, and a number defect smoothed away

*ille caput in quo omnes sensus, insistit; quasi solus tactus, quibus datus est spiritus ad mensuram.*

| | |
|---|---|
| **was** | "because he, the head in which **are** all the senses, **stands firm**; as it were touch alone **is in** those to whom…" |
| **now** | "because he is the head in which all the senses, **reside**; as it were touch alone, in those to whom…" |

The first rendering gave *insistit* to *ille*, supplied an unmarked "are" for *omnes sensus*, and then
supplied a **second, independent** verb for the verbless second limb. *insistit* belongs to **omnes
sensus**: the Augustinian figure is a two-term comparison — the head has *all* the senses, the members
*touch alone* — and *quasi solus tactus* is verbless **precisely because it gaps *insistit***. Read the
old way, "stands firm" had no work to do and no counterpart in the second limb, which then had to be
given a verb out of nothing. **The English now gaps in the second limb exactly as the Latin does, so
the count of supplied verbs in this work is zero** (only the copula of *ille caput*, which Latin gaps
routinely).

⚠ **Why the wrong reading was tempting, and it is the tell:** *insistit* is **singular against plural
*omnes sensus***. Re-assigning the subject made the English read perfectly and left no trace that
anything in the Latin was odd — **a sentence that reads too well where the plate is rough.** That is
the same signature as §0a's *concilio*, arriving from the opposite direction: there an upstream hand
had tidied the Latin; here the translator's own parse tidied the English.

**Marker: DECLINED, and the reasoning, since the orchestrator left the call to me.**
- Not `[sic:]`. Pattern 12 marks type that cannot render *in place*; *insistit* has a real slot and a
  real sense, and only its **number** is at issue. Pattern 12's second failure test — *"it renders only
  by HIDING the defect"*, the 11632 @0304A case — was the live argument for marking, since any
  grammatical English must pick a number and thereby conceal the mismatch.
- ⭐ **It was declined because the singular is EXPLICABLE, not broken.** Under the gapped reading the
  one verb serves two subjects: plural *omnes sensus* in the first limb and **singular *solus tactus***
  in the second. *insistit* stands between them and agrees with the nearer — ordinary Latin
  nearest-subject agreement, and it is the very structure the corrected parse posits. Marking it would
  assert that Migne's type is defective about a form I judge sound, which is the same conclusion, on
  the same grounds, that declined `[sic: *concilio*]` at §0a. **Consistency between those two calls is
  deliberate.**
- The mismatch is not thereby concealed: the singular form stands in the facing Latin column, and this
  entry states it.

### Repair 2 — 0614B, the negative floated off *solus*

*ut ne solus nomen deitatis habeat.*

| | |
|---|---|
| **was** | "that he alone may **not have** the name of deity" |
| **now** | "**lest he alone should have** the name of deity" |

⭐ **The 2 Thessalonians / Esther class exactly: nothing added, nothing dropped, every count matching,
and the false reading grammatical.** The *ne* attaches to ***solus***, not to *habeat*. Idolatry's aim
is not that God should fail to have the name of deity — it is that he should not have it **alone**,
that others should share the title. **The proof is inside the sentence:** the gloss is a *sicut … ita*
parallel pivoting on *solus*, **affirmed** of the covetous man (*ut **solus** usurpet quae Deus omnibus
fecit*) and **denied** of God. The old word order also read most naturally as "he, and he only, may not
have it" — a third sense, and the wrong one.

⚑ **This site had been checked under test 2 and passed.** The negative was present, on a plausible
host, and the band count matched. **Naming the host word is not sufficient if the wrong host is
named** — the check must be run against the sentence's own argument, which here is the *sicut … ita*
pivot. Recorded because test 2's own statement ("name the single Latin word it attaches to") assumes
the naming is right.

### Repair 3 — 0615A, wrong antecedent

Folded into §2's table above, which previously claimed the English required no choice and was wrong.
"lest **the sons**, hemmed in by them, transgress against them." A bare "they" between "by them" and
"against them" resolves to the fathers on the default English parse; Latin morphology permits the
remoter noun and English word order does not.

### Repair 4 — 0611D, same mechanism as repair 2

*quia non omnibus patent, sed his qui petunt et pulsant.*

| | |
|---|---|
| **was** | "because they **do not lie open** to all, but to those who ask and knock" |
| **now** | "because they **lie open not to all**, but to those who ask and knock" |

The *non* attaches to *omnibus*, and the *sed his* contrast proves it. The sense survived the old
rendering because the *but*-clause recovered it, which is why the reader rated it minor — but it is
repair 2's class, and the two together say something worth keeping: **this work's characteristic
polarity risk is not a dropped negative but a negative resting on the verb when it belongs on a
quantifier or a correlative.** Both of this book's polarity repairs are that shape.

### DECLINED — the `[cj:]` on *Ego* at 0613A stands unchanged

The reader argued the running text should carry the accepted conjecture ("Therefore") with *Ego* moved
into the bracket, on the ground that stripping the marker leaves "I the Scripture … is", which is not
English. **Pattern 18 rules the other way, explicitly, and the treatment is not changed:**

> *"The rule: the gloss is ADDITIVE. Migne's word keeps its English, and our conjecture stands beside
> it. Nothing is removed, nothing is replaced, and the reader sees both."*

Its worked example is `the angels announce peace purely [cj: *munde*; read *mundo*, "to the world"]` —
**printed word in the running text, conjecture in the bracket.** Putting *Ergo* in the text would
replace Migne's word with our conjecture, which is the one thing the pattern forbids; and
`verify-english`'s substring check on the bracketed word exists precisely to make that substitution
impossible. The un-English residue is not a fault in the rendering — **it is the defect, visible.**

✅ **The conjecture *Ergo* is confirmed correct** by the reader's own independent reasoning: the verb is
*est*, third person; the *Tunc … nunc* contrast supplies the connective the sentence needs; and there is
**no first-person prosopopoeia of Scripture anywhere else in the commentary**. That third argument is
new and is worth recording — it is a survey of the whole work, which §3 did not have.

### ⭐ THE `[sic:]` / `[cj:]` BOUNDARY — why this work carries one of each

The reader called 0614C's `[sic: *me morat*]` "the better model" and read the two markers as **two
conventions for one operation**. They are not. **They are two conventions because they are two
situations**, and the distinction is stated here because this is the second time in two batches that the
boundary has been queried and the answer should be findable in the work itself:

| | 0614C, *me morat* | 0613A, *Ego* |
|---|---|---|
| **what is on the plate** | broken **type** — a word-division defect; *me morat* is **not a Latin word** | a **real Latin word**, correctly formed |
| **can it render in place?** | **No** — there is nothing to render | **Yes** — "I" is its English, exactly |
| **governing pattern** | Pattern 10 (carry the whole run) + Pattern 12 (`[sic:]`) | Pattern 18 (`[cj:]`) |
| **what the convention requires** | 7a⁗: the **sense in plain English beside the marker**, because the quarantine took the clause's only verb | additive gloss: **Migne's word keeps its English**, conjecture beside it |
| **strip the marker and you get** | "He mentions this, that they may rejoice…" — complete | "I the Scripture … is" — **broken, and meant to be** |

**The test that separates them is not how wrong the Latin looks; it is whether what the reader sees is
our translation or his type.** Where the type is broken, the marker holds the type and the English must
carry the sense beside it. Where the word is real, the English must carry **the word**, and the
conjecture goes in the marker. Reversing either one hides something: a `[sic:]` on a real word deletes a
word Migne printed, and a `[cj:]` that puts the conjecture in the text deletes it just as surely while
looking tidier.

### Confirmed clean by the blind read, and not to be churned

0610D (*suscitat et vivificat* survives; the conflation logged, not conformed) · **0613D's `et sunt:` /
`et non sunt:` series — the trap was avoided**, one affirmative followed by two denials reproduced
exactly where the eye wants three parallel denials · 0614C's `[sic:]` passing the swallow test · both
true double negatives, at 0611B and 0614C, with correct scope · the John 18:36 sequence at 0610A–B,
both negatives placed and the *Non est hic* / *non est hinc* distinction preserved word for word ·
0613D's comma between subject and verb (**Migne's, carried deliberately** — his marks ride as printed;
raised by the reader only as typographic and settled house practice) · 0609C, where the reader
independently confirms the unexpressed subject is **Epaphras** (from Col. 1:7, the verse the lemma
*Pro vobis,* opens; **Archippus is accusative and is therefore the one helped, not the helper**) and
finds **no defect**, since the Latin leaves the subject unexpressed and the English leaves it
unexpressed identically. **Nothing was decided wrongly there because nothing was decided.**


---

## ⛔ PLATE SWEEP, 2026-08-29 — every `[sic:]` in this work read at Migne's plate

This work's `[sic:]` markers stood on columns nobody had read. All were read this session from the on-disk PL 114 scan at 300 dpi (500 dpi where a single letter decided it), full page width, with the volume's page map re-calibrated against the printed corner numbers **before** the read.

**A `[sic:]` asserts a defect in MIGNE'S TYPE, and our Latin is not the printed page — it is Corpus Corporum's transcription of it.** Where the plate disagrees with our file, the fault is ours and the accusation is withdrawn.

### Withdrawn — Corpus Corporum's error, not Migne's

| col | we printed | THE PLATE PRINTS |
|---|---|---|
| 0614C | *me morat* | **memorat** |

The Latin is corrected in `data/tei-patches/8990.json` and each marker is removed from the English.

Full ledger for all 23 works swept: `data/plate-sweep/2026-08-29-sic-sweep.tsv`.
