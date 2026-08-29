# *Glossa ordinaria*, **Epistola I B. Petri** (PL 114, 0679B–0688D) — cruces

Translated 2026-08-19, one translator, 4 chunks (3,650 Latin words by the frontmatter count; 3,681 by whitespace), on Opus.
`verify-english.mjs` clean: frontmatter, columns, notes and sections aligned 1:1, no
duplicate paragraphs. Apparatus: **10 `[var:]` · 3 `[sic:]` · 2 `[cj:]` · 0 `[d:]` ·
0 `[ed:]` · 0 `[nt:]` · 46 `[n:]`** (exact parity with the Latin twins). Structure:
ARGUMENTUM, CAPUT PRIMUM, CAPUT II, CAPUT III, CAPUT IV, CAPUT V. Zero guillemets in
either language.

The Glossa conventions were settled on **Liber Ruth (8968) §1** and are reused here, not
re-derived: `VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary
lemma is rendered as the phrase it stands for; attribution sigla ride as ordinary
`[n: …]`; `*usque ad*` → `*as far as*` with no verb supplied to complete the abridgment.

---

## §1 · VULGATE COLLATION — the deliverable

Collated mechanically **and** by eye against `sources/vulgate/clementine-flat.txt`
(Clementine, ligatures expanded). Every italic lemma in the work — 141 spans, out of 155 italic spans in all (the
remainder being the `*usque ad*` and `*etc.*` formulae) — was put
through a normalizing substring test against the whole of 1 Peter, and every span the
test did not clear was then resolved by hand against its own verse. Orthographic
variants were normalized before comparison and are **not** treated as divergences:
`tanquam`/`tamquam`, `Charissimi`/`Carissimi`, `charitas`/`caritas`, `coel-`/`cael-`,
`haered-`/`hered-`, `ae`/`e`.

### 1a. Divergences that took a `[var: …]` — 10

| col | Migne prints | Clementine | note |
|---|---|---|---|
| 0681C | *Estote **et** vos perfecti* | Mt 5:48 *Estote **ergo** vos perfecti* | "you also" for "therefore" — a different connective, and the gloss leans on the comparison |
| 0681C | *Beatus **enim** qui semper est pavidus* | Pr 28:14 *Beatus **homo** qui semper est pavidus* | the maxim's subject replaced by a connective |
| 0682C | *Vobis igitur credentibus est honor non credentibus,* | 1 Pe 2:7 *Vobis igitur honor credentibus **: non credentibus autem lapis*** | Migne's run-together drops the colon and *autem*, so as printed the honour appears to fall on the unbelievers. Rendered faithfully; this is the sharpest sense-divergence in the work |
| 0683D | *facientes obmutescere imprudentium hominum **ignorantium*** | 1 Pe 2:15 *ut bene**facientes** obmutescere **faciatis** imprudentium hominum **ignorantiam*** | *faciatis* gone and the accusative object turned genitive, leaving *obmutescere* with nothing to govern (see §2c) |
| 0685B | *Venite, benedicti Patris mei, **possidere regnum*** | Mt 25:34 *Venite benedicti Patris mei, **possidete paratum vobis regnum a constitutione mundi*** | imperative → infinitive, and the clause cut |
| 0685C | *In sapientia ambulate **propter** eos qui foris sunt, **scientes quomodo oporteat singulis responderi*** | Col 4:5 *In sapientia ambulate **ad** eos, qui foris sunt* + 4:6 *ut sciatis quomodo oporteat **vos unicuique respondere*** | a conflation of two verses, with *propter* for *ad* |
| 0685D | *Sed cum modest**iae*** | 1 Pe 3:16 *Sed cum modest**ia*** | genitive for ablative. ⚠ English has **no exponent** for the case (Pattern 9), so the rendering is unchanged and the divergence is recorded **only** in the marker — which is why the marker was fired rather than left to this file |
| 0686C | *interrogatio **purae** conscientiae* | 1 Pe 3:21 *conscientiae **bonae** interrogatio* | "pure" for "good". ⭐ Migne's own gloss two lines later reads *exigitur a baptista **bona** conscientia* — his prose keeps *bona* while his lemma prints *purae*, which is evidence the lemma, not the gloss, is the divergent witness |
| 0687D | *ducunt in bonis **suis** dies suos, et in puncto ad inferna **descendent*** | Job 21:13 *Ducunt in bonis dies suos, et in puncto ad inferna **descendunt*** | added *suis*; present → future |
| 0688A | *Homo videt **in facie**, **Deus** autem intuetur cor* | 1 Rg 16:7 *homo **enim** videt **ea quae parent**, **Dominus** autem intuetur cor* | three substitutions in eleven words; the sense ("sees the face" vs "sees what appears") is the pivot of Augustine's argument here |

### 1b. Divergences DELIBERATELY left unmarked, with the reason

Pattern 14 fires where the divergence **changes the sense**. These do not, and marking
them would bury the ten above in noise.

- **0682A** *Estote prudentes sicut serpentes* — Mt 10:16 has *Estote **ergo** prudentes*.
  A dropped connective inside a citation Migne himself truncates with "etc."
- **0682B** *Aedificamini* — Vulg 2:5 prints the compound *super**aedificamini***.
  ⚠ The mechanical test scored this AGREE **as a substring**, which it is; it is logged
  here as a divergence, not as a clean agreement, so the count is honest.
- **0682C** *est factus in caput anguli* — Vulg 2:7 *hic factus est*. Word order, and
  *hic* is supplied by Migne's own gloss (*et ille lapis hic*) immediately before.
- **0682D** *Nec credunt in quo positi sunt* — Vulg 2:8 *in quo **et** positi sunt*.
- **0683B** *Ex bonis operibus considerantes* — Vulg 2:12 *ex bonis operibus **vos**
  considerantes*.
- **0684A** *Servi subjecti* — Vulg 2:18 *Servi, sub**diti** estote*. A synonym.
- **0684B** *Si propter conscientiam Dei* — Vulg 2:19 *si propter **Dei conscientiam***.
  Word order only.
- **0685C** *ne timueritis timorem eorum* — Vulg 3:14 *Timorem autem eorum ne timueritis*.
  Word order only; the lemma is a re-quotation inside the gloss.
- **0686B** *Quod et vos similis formae* — Vulg 3:21 *Quod et vos **nunc** similis formae*.
  Lemma truncation, the ordinary Glossa practice.
- **0686C** *depositio sordium carnis* — Vulg 3:21 *carnis depositio sordium*. The gloss's
  own re-quotation of the lemma it printed correctly four words earlier.
- **0686C** *ut **et nos** vitae aeternae haeredes efficeremur* — Vulg 3:22 *ut vitae
  aeternae haeredes efficeremur*; and Migne's *Subjectis sibi angelis* omits the Vulgate's
  intervening *profectus in caelum*.
- **0687C** *Spiritus ejus super vos requiescit* — Vulg 4:14 *et qui est ejus Spiritus,
  super vos requiescit*. A condensation to lemma length.
- **0684A** *Non tantum bonis et modestis: sed etiam difficilioribus* — **not a divergence
  at all.** Migne labels it *Alia translatio* himself: he is quoting a second version
  against the Vulgate's *dyscolis*, which he then prints and glosses. Nothing to mark.
- **0687D** *Si justus in terra recipit, quanto magis impius et peccator**?*** — the
  **words** agree with Pr 11:31 exactly; the Clementine closes with **`!`** where Migne
  closes with **`?`**. Under Pattern 8 the printed mark rides as printed. Not a `[var:]`:
  Pattern 14 is about the received *text*, and Migne is here expressly contrasting the
  *vetus editio* with the *Hebraica veritas* — the punctuation is his editors', not a
  variant reading.

### 1c. ⭐ A note that points at the wrong Gospel — reported, not marked

**0680D.** Migne prints *Multi prophelae et reges voluerunt videre quae vos videtis, et
non viderunt* with the note `[n: (Matth. XIII)]`. Against **Mt 13:17** that is a heavy
divergence (*prophetae et **justi cupierunt** videre quae videtis*). But against
**Lc 10:24** the lemma is **verbatim** — *multi prophetae et reges voluerunt videre quae
vos videtis, et non viderunt* — down to the *vos*. So the **text is not divergent at
all**; the **attribution** is. No `[var:]` was fired, because there is no divergence from
the verse actually quoted, and the note passes through verbatim per the settled rule
(the recension's attributions are known unreliable and the work page says so). This is
recorded here because a blind reader collating the lemma against Matthew will otherwise
report a divergence that does not exist.

### 1d. Lemmata checked and found to AGREE EXACTLY — named

⭐ Recorded because a list of findings alone cannot be told apart from a list by someone
who did not look. **109 of the work's 141 lemma spans cleared the mechanical test
against 1 Peter**; the ones checked by hand against a non-Petrine verse and found exact
are named first.

**Non-Petrine citations, exact against the Clementine:**
*Et dedistis mihi manducare* (Mt 25:35) · *Venite, benedicti Patris mei* (Mt 25:34, at
0680D — the truncation at 0685B is the divergent one) · *Beati qui esuriunt et sitiunt
justitiam* (Mt 5:6) · *Visitavit nos oriens ex alto* (Lc 1:78) · *oculi Domini super
justos, et aures ejus in preces eorum* (1 Pe 3:12, quoted at 0684D) · *omnia subjecisti
sub pedibus ejus* (Ps 8:8) · *Si justus in terra recipit, quanto magis impius et peccator*
(Pr 11:31, words exact — see the punctuation note above) · *Multi prophelae et reges…*
(Lc 10:24, exact but for the broken type — see §1c).

**1 Peter lemmata, exact:** *Advenis* · *Charissimi, obsecro vos tanquam advenas et
peregrinos* · *Dispersionis* · *Ponti* · *Gratia* · *Et pax multiplicetur* · *Regeneravit*
· *Incorruptibilem* · *In vobis* · *In virtute* · *Nunc, si oportet* · *si oportet
contristari* · *Ut probatio* · *in laudem* / *In laudem* · *Pretiosior auro* ·
*Inveniatur* · *in revelatione* · *Et honorem* · *Salutem animarum* · *Prophetaverunt* ·
*In quod vel* · *Spiritus Christi* · *Posteriores glorias* · *Vobis autem ministrabant* ·
*Spiritu sancto* · *Propter quod* · *Sperate* · *Filii* · *Sanctum* · *In timore* ·
*Incolatus vestri* · *Sed pretioso sanguine* · *Deponentes igitur omnem malitiam* ·
*Sicut modo geniti* · *Rationabile* · *Lac concupiscite* · *Ut in eo crescatis* · *Si
tamen gustastis* · *Per Jesum Christum* · *quem reprobaverunt aedificantes* · *lapis
offensionis et petra scandali* · *Et lapis offensionis* · *Offendunt verbo* · *Vos autem
genus electum* · *Regale sacerdotium* · *Acquisitionis* · *Annuntietis* · *Qui aliquando*
· *Charissimi* · *Tanquam advenas* · *Subjecti igitur estote omni humanae creaturae
propter Deum, sive regi* · *Tanquam ab eo missis* · *Ad vindictam* · *Laudem vero
bonorum. Quia sic est* · *Non quasi velamen* · *Sed sicut servi Dei* · *Fraternitatem
diligite* · *Non tantum bonis* · *Patiens injuste* · *In hoc enim vocati* · *Quia et
Christus* · *Tradebat autem judicanti se injuste* · *Et episcopum* · *Quarum non sit* ·
*Viri* · *Non reddentes* · *Quia in hoc* · *Ut benedictionem* · *Et quis est* · *Timorem
autem* · *Dominum autem* · *Omni poscenti* · *Melius est* · *Offerret Deo* · *In carcere*
· *Quando exspectabant Dei patientiam* · *Noe* · *Cum fabricaretur arca* · *similis
formae* · *Non carnis depositio* · *Deglutiens mortem* · *Quia qui passus* ·
*Blasphemantes* · *Omnium* · *Vigilate in orationibus* · *Charitatem continuam habentes*
· *Si quis loquitur* · *Si quis ministrat* · *Charissimi, nolite* · *Beati eritis* ·
*Quoniam tempus* · *Et si justus* · *Commendent animas suas* · *in benefactis* ·
*Seniores* · *Non coacte* · *sed spontanee secundum Deum* · *Similiter adolescentes* ·
*Omnes autem invicem humilitatem insinuate* · *Humiliamini* · *Tanquam leo rugiens* ·
*Scientes* · *Scripsi* / *scripsi* · *In Babylone*.

---

## §2 · BROKEN TYPE AND CONJECTURES

Corpus-frequency controls were run over all **1,493** files of `src/latin/`.
⭐ The negatives are recorded too: a checked control is worth having.

### 2a. 0680D · *prophelae* — non-word. `[sic: *prophelae*]`

`prophelae` **1** occurrence corpus-wide (this one) against `prophetae` **220**. A t/l
substitution. Rendered **"Many prophets [sic: *prophelae*] and kings…"** — the sense is
carried in plain words and the marker records the plate; the bracket does **not** stand
in for the rendering, and the sentence reads aloud without it.

### 2b. 0684B · *inducamim* — non-word. `[sic: *inducamim*]`

`inducamim` **1** occurrence corpus-wide (this one); `inducamini` **0** — recorded as a
checked negative, i.e. the frequency control is *inconclusive here* and the call rests on
morphology, not on the count: there is no Latin form `inducamim`, and the required 2nd
plural passive subjunctive is *inducamini*. Rendered **"you may be led [sic: *inducamim*]
to obey"**.

### 2c. 0687A · *evangelixatum* — non-word. `[sic: *evangelixatum*]`

`evangelixatum` **1** (this one); `evangelizatum` **1** elsewhere — again a thin control,
so the call rests on the letter: `x` for `z` in *evangelizatum est*, the Vulgate's own
word at 1 Pe 4:6. Rendered **"was the gospel [sic: *evangelixatum*] preached also to the
dead"**.

### 2d. 0682B · *Tanquam lapides **viri*** — a REAL word, wrong word. `[cj: *viri*; read *vivi*]`

Vulg 2:5 reads *lapides **vivi***, "living stones". *viri* is perfectly good Latin (273
occurrences corpus-wide; *vivi* 39), so `[sic:]` cannot reach it — this is Pattern 18.
**The evidence is internal, not statistical:** Migne's own gloss on the lemma runs *per
discretionem eruditi **vivificantur** et apti sunt* — the gloss expounds *vivi*. Rendered
literally as **"*As stones, men.*"** with the conjecture standing beside it, additively.
The rival reading (that *viri* is a genuine variant meaning "stones of men") **loses**,
because nothing in the gloss addresses "men" and *vivificantur* addresses "living"
directly.

### 2e. 0685B · *debitis* for *debetis* — `[cj: *debitis*; read *debetis*]`

*Ideo **debitis** a malo declinare et facere bonum.* As printed the clause has no finite
verb: *debitis* is the dative/ablative plural of *debitum*, "to/by debts". Controls:
`debitis` **2** corpus-wide, and the other one (11632/0073, *hominum debitis non tenetur*)
is a genuine noun — so `debitis` as a verb is **unattested in 1,493 files**, while
`debetis` runs **43**, ⭐ including four verses later **in this very chunk** (0685D, *Ita
**debetis** calumniatores pati*). Rendered **"you are bound [cj: …] to turn aside from
evil"**. The rival — that this is a medieval e/i orthographic variant and so Pattern 9
territory, taking no marker — **loses** on that in-chunk control: the same scribe/plate
spells the same verb correctly a few lines down.

### 2f. Suspiciously TIDY forms — a checked zero

Per the digitization-alters-spelling class (brief §4), the work was read for forms that
look *cleaner* than their surroundings. **None found.** The three defective forms above
are all rough, and no smooth form sits inside a rough passage. **No plate read was
performed for PL 114 cols 0679–0688**, so this is a judgment from the Latin alone and
cannot exclude an upstream silent "correction"; recorded as such rather than as a pass.

---

## §3 · MIGNE'S OWN PRINTING, REPRODUCED NOT TIDIED

- **0684D · `VERS. 25--`** — the period after the numeral is missing. Reproduced verbatim.
- **0687C · `VERS 14.--`** — the period after `VERS` is missing. Reproduced verbatim.
  ⭐ Confirmed against the peer report from **James (8998) @0674D**, which prints
  `VERS 19.--` with the same defect: the class recurs across the Glossa NT block and is
  the plate's, not ours. Neither was normalized.
- **0679D–0681D** — Migne prints **no VERS. 8, 16 or 18** in CAPUT PRIMUM, and skips
  from VERS. 19 straight to CAPUT II; CAPUT III jumps 3 → 7 → 9 → 13; CAPUT V runs
  1, 2, 5, 6, 8, 9, 12, 13. This is the abridgment, not an omission, and the sequence is
  everywhere **ascending** — the Jude-style out-of-order case does not occur here.
- **0687A · `*Quia qui passus. [n: (BEDA.)]*.`** — the full stop falls *outside* the
  italic span, after the note. Reproduced in place.
- **0680C** — *Cum judex laudans vestram fidem, dicet: …* is a subordinate clause with no
  main clause; Migne closes it with a full stop. Rendered as printed
  ("When the judge, praising your faith, shall say: …"), anacoluthon intact.
- **0682D** — *Offendit verbo qui eo quod verbum audivit;* — the relative clause has no
  verb of its own. Rendered "He stumbles at the word who **does so** by this, that he has
  heard the word", the pro-verb standing for the elided *offendit*; the conjecture
  (a haplography of *offendit*) is left here and **not** in the text.
- **0687B** — *quamvis in publicum non semper ostendi, potest.* Migne sets a comma between
  the infinitive and its governing *potest*. Under Pattern 8 the mark is preserved in
  position: "although in public it is not always, able to be shown." The English is odd
  because the plate is odd.
- **0683D** — *qui etiamsi bonos damnat; non minus…* Migne's semicolon breaks the
  conditional. Preserved.
- **0684B** — *a Domino* is capitalized where the argument (a slave beaten by his owner,
  *cum ei bene serviat*) requires the human *dominus*. Rendered **"his lord"**, which is
  the same word and prejudges neither; the capital is not carried into English, where
  capitalization would be a claim the Latin's typography does not make.
- **Ellipsis of the copula and of a gapped verb** occurs at 0682A (*Adulatio linguam.*),
  0684C (*Cum supra specialiter servos, nunc totam Ecclesiam instruit*), 0687A (*jam
  similis Christo crucifixo*), 0687C (*Qui patitur pro nomine Christi, beatus*), 0687D
  (*In nostra quae secundum Hebraicam veritatem*), 0684B (*Dyscoli indocti et agrestes*).
  English cannot gap these, so the verb is supplied **from the finite verb Migne prints in
  the same sentence**, never from elsewhere. Listed so the supply is visible.
- **Em-dashes: none used.** Migne prints none.

---

## §4 · SUPPLIED SUBJECTS — the register, with the evidence for each

Every "he/she/it/they" the Latin does not print, and what decides it. This is the class
that has cost this edition most.

| col | Latin | supplied | evidence |
|---|---|---|---|
| 0679C | *monstrat … suadet … exhortatur* | "them" (the objects) | *Discipulos* stands in the accusative at the head of the same sentence |
| 0680D | *multum exquisierunt* | "they" | ⭐ **1 Pe 1:10, the verse the lemma comes from**: *De qua salute **exquisierunt** … **prophetae***. The subject is the prophets, not the readers — the sentence alone does not decide it |
| 0681A | *vocat spiritus* | "he" | the epistle's speaker, Peter; the gloss's *dicit / instruit / tangit* subjects throughout the work are the Apostle |
| 0682C | *Hoc ad omnia refertur* | impersonal, no subject supplied | |
| 0683A | *gentes adunavit* | "who" (the corner stone) | *veluti lapis angularis* is the printed subject |
| 0683C | *Et creaturam per partes exponit* | "he" | the Apostle, as above |
| 0684B | *ut … inducamini* | "you" | printed in the verb ending |
| 0684C | *quid … suus auctor pertulerit* | "their author" printed | no supply |
| 0687C | *Quia requiescent super vos* | "they" | ⭐ **1 Pe 4:14**: the plural subjects are *quod est honoris, gloriae, et virtutis Dei, et qui est ejus Spiritus*. A singular "it" (the Spirit alone) would be the natural guess from the lemma *Spiritus ejus super vos requiescit* and is **wrong** — Migne's verb is plural |
| 0688B | *purget … beatificet* | "he" (God) | *secundum quod Deus vult* printed two clauses earlier, resumed by *secundum quod vult* |
| 0684B | *Ecce quomodo supra monebat subdi* | **no subject supplied** — "that men be subject" | Migne prints *subdi* with no accusative subject. The lemma at 0683C addresses *vos*, so "that you be subject" also construes. ⚠ **Declined**: rendered impersonally because the plate prints no subject, and the choice is recorded here rather than made silently |

---

## §5 · NEGATION — every printed negative, its host, and the attachment check

A mechanical scan for the negation vocabulary (*non · nec · neque · nisi · ne · nihil ·
nil · null- · nunquam · nusquam · haud*) returns **88 tokens** across the four chunks.
Each was checked by naming the single Latin word it attaches to and confirming the
negative sits on **that** word in the English — not merely that the count matched. The sites below are the ones meeting the **trigger condition** (a negative
on a verb with a quantifier, correlative or predicate adjacent), which is where the
procedure has failed before.

- **0679D** *nulla adversitas retrahat* — host is **the noun** *adversitas*, not *retrahat*:
  "let **no adversity** draw you back". Confirmed by the parallel *omnis tribulatio
  invitet* in the next clause, which pivots on the quantifier.
- **0680A** *Naturaliter non est anima incorruptibilis, **sed** gratia Dei…* — the *sed*
  clause proves the host is **naturaliter**, not *est*: "not **naturally** incorruptible,
  but by the grace of God". Rendered so.
- **0680C** *Nullus … custodiri valet … **nisi** ille perficiat* — host is *Nullus*, the
  subject; the *nisi* correlative confirms it.
- **0681C** *Non vere Deum invocatis, **nisi** solliciti sitis* — host is *vere*, carried
  as "You do not **truly** call upon God".
- **0682A** *nec ratio **aliqua** … vos trahat* — host is the quantified noun phrase *ratio
  aliqua*: "let **no reasoning** draw you", not "let reasoning not draw you".
- **0683C** *non resistatis **alicui** dignitati* — host is *resistatis* with *alicui* in
  its scope: "resist not **any** dignity". Rendered with the quantifier under the negative.
- **0683C** *non est potestas **nisi** a Deo* — Rom 13:1 verbatim; *nisi* correlative fixes
  the scope.
- **0683C** *non tamen ita quod semper fiat* — host is the *ita quod* clause, not the verb.
- **0683D** *non | minus* — ⚠ **the column anchor [0683D] falls between the two words.**
  Split deliberately in the English to match: "pertains no [0683D] less to their praise".
- **0685B** *Non **solum** cessetis reddere … **sed etiam*** — ⭐ the 8987 defect class
  exactly. Host is ***solum***, never *cessetis*: "**Not only** cease ye to render evil for
  evil, but also…". Rendering it "do not cease" would invert the sentence and would have
  passed every count-based check.
- **0685C** *ut non a memoria, non ab amore recedat* — two negatives, each on **its own
  prepositional phrase**, both preserved separately ("not from the memory, not from the
  love"); collapsing them into "nor" would merge two hosts into one.
- **0685D** *non in passionibus desiderii, **sed** sicut Deum intelligimus velle* — host is
  the phrase, fixed by the *sed*. The 8960 @0740B model.
- **0687A** *Ne animus **aliquid** cogitet praeter id **solum*** — host is *cogitet* with
  *aliquid* under it; *solum* belongs to the exception, not to the negation.
- **0687B** *Deum **non sono vocis, sed sensu animi** oret* — host is the phrase *sono
  vocis*, not *oret*; the *sed* proves it.
- **0687B** *non vestris meritis, **sed** gratiae ejus attribuatis* — same shape, same host
  test.
- **0687C** *non **ideo** putetis* — host is *ideo*: "do not **for that reason** think".
- **0687D** *ut **nec justi quidem** … transeant* — host is ***justi***, with *quidem*
  marking it: "not even **the just** pass through it without tribulations". Attaching the
  negative to *transeant* would say the just do not pass through at all, which the
  parenthesis (*qui in coelo coronandi sunt*) contradicts.
- **0688A** *non vult **facile** … liberare* — host is *facile*: God does not will to free
  **easily**, not that he does not will to free.
- **0688C** *pudeat vos **solos** prae omnibus **non posse** pati* — trigger condition met
  (*solos* adjacent). Host is *posse*: the shame is that they alone **cannot** suffer.
  *solos* is the subject accusative and is **not** the host — checked explicitly, because
  8990 @0614B failed on exactly this shape.
- **0688D** *non est in **alio aliquo** salus* — host is the quantified phrase: "there is
  salvation **in no other**". Act 4:12 (Migne prints *oportet vos* for the Clementine's
  *oporteat nos* — gloss prose, not an italic lemma, so no marker; logged here).
- **0688D** *Qui gratiam spernit **non gratiam minuit, sed** hanc **non suam**, id est
  **non sibi utilem** reddit* — three negatives in one sentence. The *sed* fixes the first
  on *minuit* (not on *gratiam*); the second and third sit on the predicates *suam* and
  *utilem*. All three rendered on their own hosts.

---

## §6 · PUNCTUATION — band-by-band, and one deliberate addition

The column anchors are verified 1:1, so they partition the twins identically. Colons,
semicolons, question marks and exclamation marks were compared **band by band** across all
42 bands, with markers stripped symmetrically from both sides. **Seven mismatched bands
were found and repaired** (0000 band 8; 0001 bands 2, 3, 9; 0002 bands 1, 3 — every one a
colon or semicolon supplied in English where Migne prints a comma). Final state: **zero
mismatched bands except one, which is deliberate.**

⚑ **The one remaining delta — 0003 band 5, one colon in English that Migne does not
print — is Pattern 8b and is correct.** Migne closes an *indirect* question with `?`:
*Quaeritis causam quare justus vix in Dei judicio salvus esse possit, et quare?* English
cannot end that construction with a mark, so it is recast into direct form behind a colon:
**"You ask the cause: why can the just man scarcely be saved in the judgment of God, and
why?"** Nothing is supplied or deleted; the plate's sentence type survives.

- Question marks: **13** in the Latin, **13** in the English, and in the same bands. Ten of
  them are the *Quid est malitia? nisi nocendi amor?* catechism at 0681D–0682A, whose
  elliptical *nisi* answers are rendered "what but…" so that both the exceptive and the
  mark survive.
- The single exclamation (0688A, *…perpetuae exitium spectant!*) is preserved.
- **0687D** — Migne's `?` where the Clementine prints `!` (Pr 11:31) rides as printed.
- ⚠ **No comma→semicolon sweep was performed.** Migne prints semicolons himself in this
  book (8 of them), so the Tobit exception does not apply. Commas were left exactly where
  the register put them and are **not** claimed to be at parity; the named
  sentence-type marks are.

---

## §7 · THE FOURTH TEST — read for what the English SAYS

Run last, with the counts already clean: every paragraph read back against the Latin
asking only *does it assert what he asserts*. Four passages were changed on this pass and
are named so a blind reader can see they were looked at:

1. **0679D** — "the peace of reconciliation **with him**" → "the peace of **his**
   reconciliation" (*reconciliationis ejus*: the genitive is Christ's, not the sinner's).
2. **0680C** — "unless **he perfect it** from whom you have the beginning" was ambiguous as
   to which clause *ille* governs → "unless **he from whom you have the beginning of a good
   action** bring it to perfection".
3. **0688C** — *Omnes autem invicem humilitatem insinuate* had been inverted into "be ye all
   one to another insinuating humility", which turns an imperative into a participle →
   "**And all of you insinuate humility one to another**".
4. **0687C** — *Charissimi, nolite* had been left as the stump "Dearly beloved, be not" →
   "**Dearly beloved, be ye not as strangers**", the phrase the fragment opens
   (*nolite peregrinari*, 1 Pe 4:12), per the Ruth §1.2 convention.

**Marker-strip test:** every `[sic:]`, `[cj:]`, `[var:]` and `[n:]` was stripped and the
residue read for a stranded article or preposition sitting on punctuation, or a doubled
mark. **All five bracket sites read aloud without their brackets**: "Many prophets … and
kings", "you may be led to obey", "was the gospel preached also to the dead", "As stones,
men.", "Therefore you are bound to turn aside from evil". No clause lost its object.

---

## §8 · WHAT WAS **NOT** DONE

- **No plate read.** PL 114 cols 0679–0688 were not opened at 300 dpi, so Migne's
  foot-of-page notes (`[cn:]`) have **not** been recovered for this work, and the three
  defective forms in §2 are conjectured from the Latin alone. A later reader must be able
  to tell an unchecked book from a checked one: this one is **unchecked** on that axis.
- **No interleaving reported.** 8998 (James) runs 0671A–0680B and this work opens at
  0679B. That overlap is Migne's own by-band layout and is a documented false positive;
  no `[ed:]`, no report.
- **No band arithmetic reported.** CAPUT PRIMUM runs 0679B → 0679C → 0679D → **0680B**
  (no 0680A) and CAPUT III runs 0685D → 0686A. Positional quarter-guides, not gaps.

---

## §Adjudication — blind polarity read (2026-08-19)

⚠ Context: this work's translating agent was killed mid-run by an API transport error and resumed to
finish its apparatus, so the blind reader was told to treat its final passes as **unconfirmed and
re-run them**. It did: marker-strip on all five markers (three `[sic:]`, two `[cj:]` — none had
swallowed its word), the full negation-attachment pass, and punctuation by position. **All clean.**
Chunks 0000, 0001 and 0002 read and named clean; **2 sites in 0003, both DECLINED, 0 repairs.**

1. **DECLINED · 0687C · *Charissimi, nolite.* rendered "Dearly beloved, be ye not as strangers."**
   The reader is right that *peregrinari* is not on the plate — Migne prints a two-word cue and
   stops. But Glossa convention 3 renders a fragmentary lemma as **the phrase it stands for** (Ruth's
   *Non te.* → "Let no man see thee"), and the settled boundary is that **expansion is never the
   defect; CONFORMATION is** — following the familiar English where Migne's Latin diverges. This is
   not that: "as strangers" renders *peregrinari* literally and is not Douay's "think it not
   strange", and Migne's own gloss reads the word both ways (*exsules a membris Christi* **and**
   *nolite mirari*). The out-of-pattern observation is real but stylistic. See the batch ruling in
   8998's cruces §Adjudication.
2. **DECLINED as a `[cj:]`, RECORDED as an open crux · 0687C · *Quia requiescent super vos
   patientes.*** The reader read the plural *requiescent* against the lemma's singular *Spiritus …
   requiescit* as a plate defect (*requiescent* for *requiescet*) hidden behind a bare English
   "they". **It construes without any defect:** *super* takes the accusative, so *vos patientes* is
   "upon you who suffer", and *requiescent*'s subject is simply unexpressed and plural — most
   naturally the septiform gifts of Isa. 11:2, which is exactly what the two limbs describe (*in
   praesenti ex parte* … *in futuro perfecte*). The English supplies nothing and keeps the ambiguity,
   which is the correct handling.
   ⛔ **A `[cj:]` was refused on principle here:** it would assert a conjecture with **no witness**,
   and **no plate read exists for cols 0679–0688**. This is precisely the case Migne's own
   foot-of-page apparatus is likely to settle, and we have not looked. Never guess a conjecture.
   ▶ **Plate request: col. 0687C**, alongside 8946's *Salomomonis* at 1116D.

⚑ Reader's own most useful negative: `pius pastor` at 0684C was held open a long time as a possible
conformation to John 10's *bonus pastor* and then rejected with reasons — the near-miss is evidence
the pass was actually run.


---

## ⛔ PLATE SWEEP, 2026-08-29 — every `[sic:]` in this work read at Migne's plate

This work's `[sic:]` markers stood on columns nobody had read. All were read this session from the on-disk PL 114 scan at 300 dpi (500 dpi where a single letter decided it), full page width, with the volume's page map re-calibrated against the printed corner numbers **before** the read.

**A `[sic:]` asserts a defect in MIGNE'S TYPE, and our Latin is not the printed page — it is Corpus Corporum's transcription of it.** Where the plate disagrees with our file, the fault is ours and the accusation is withdrawn.

### Withdrawn — Corpus Corporum's error, not Migne's

| col | we printed | THE PLATE PRINTS |
|---|---|---|
| 0680D | *prophelae* | **prophetae** |
| 0684B | *inducamim* | **inducamini** |
| 0687A | *evangelixatum* | **evangelizatum** |

The Latin is corrected in `data/tei-patches/8980.json` and each marker is removed from the English.

Full ledger for all 23 works swept: `data/plate-sweep/2026-08-29-sic-sweep.tsv`.
