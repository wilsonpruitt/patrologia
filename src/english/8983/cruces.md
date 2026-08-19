# *Glossa ordinaria*, **Epistola I ad Timotheum** (PL 114, 0623C–0632D) — cruces

Translated 2026-08-19, one translator, 3 chunks (3,393 Latin words), on Opus.
`verify-english.mjs` clean: columns, notes and sections aligned, no duplicate paragraphs.

**Apparatus: 17 `[var:]` · 2 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
12 `[n:]`** (exact parity with the Latin twins). Structure: ARGUMENTUM, CAPUT PRIMUM–VI.
**Zero guillemets** in either language. **Italic spans 44 / 56 / 51, 1:1 with the Latin**
(143 lemmata + 8 `*usque ad*` formulae). Three Greek words in chunk 2, carried verbatim.

Conventions applied without re-opening them: `VERS. n.--` verbatim; the lemma Englished;
a fragmentary lemma rendered as the phrase it stands for; sigla ride as `[n:]` with Latin
abbreviations unanglicized; `*usque ad*` → `*as far as*` (8978 §205); heads matched to
Ruth's and 8987's shipped English (`ARGUMENTUM.` → THE ARGUMENT., `CAPUT PRIMUM.` →
CHAPTER ONE., `CAPUT II.` → CHAPTER II., and so on).

## §0 · PLATE STATUS — **NOT READ. This is an unchecked zero, not a checked one.**

No plate read was performed for this work and there is **no `data/plate-notes/8983.tsv`**;
`coverage.json` has no entry for 8983. The Latin twins carry **zero `[cn:]`** markers, which
in this case means only that Migne's foot-of-page apparatus has never been recovered for
these ten columns — **not** that he printed none. Two cruces below (§5.1, §5.9) would be
settled or narrowed by a plate read of PL 114 cols 623–632, and one spelling (§5.12) is a
positive candidate for a digitization alteration. Recorded so a later reader can tell this
from Ruth, where the zero *was* checked.

---

## §1 · THE LEMMA COLLATION — ALL 143 LEMMA SPANS CHECKED AGAINST THE CLEMENTINE

Collated against `sources/vulgate/clementine-flat.txt` (grep) with the faithful
`clementine/<Book>.lat` consulted where a call turned on a word. **The full list is here,
agreements included**, because a list of findings alone cannot be told apart from a list by
someone who did not look.

### 1a. The marking bar I applied, stated so it can be checked

`[var: …]` on every lemma where **Migne's printed words differ from the Clementine by a
word** — a lexical substitution, an addition, an omission, or a different inflected form —
whether or not English shows the difference. **No marker** for (i) pure orthography, (ii)
pure word order, (iii) lemma truncation of the ordinary "head words + *etc.*" kind. Every
member of classes (i)–(iii) is nevertheless listed below. Precedent for the generous bar:
8987 @0621A already ships `[var: Vulg. *in revelatione*, ablative]` on a bare case-form
difference, so a form-level divergence is a markable one in this block.

### 1b. THE DIVERGENCES — 17 marked

| col | Migne prints | Clementine | note |
|---|---|---|---|
| 0623D | *Gratia, **et** misericordia, et pax a Deo Patre.* | 1 Tim 1:2 *Gratia, misericordia, et pax* | an added connective; Migne's triad is explicitly three-fold, and the gloss's own *tria ponit* rests on it |
| 0625A | *…tota lex pendet et prophetae* | Matt 22:40 *universa lex* | lexical substitution; both English as "whole/all" |
| 0625B | *Scientes hoc, quia justo non est lex posita:* | 1 Tim 1:9 *sciens hoc quia lex justo non est posita* | plural participle for singular, plus word order. **English has no exponent for either**; the marker is the only place a reader meets the difference |
| 0626A | *Quia Jesus Christus venit in hunc mundum…* | 1 Tim 1:15 *quod Christus Jesus venit…* | *quia* for *quod*, and the names inverted |
| 0626A | *sermo est fidelis,* | 1 Tim 1:15 *Fidelis sermo* | order plus a supplied copula; the English differs visibly |
| 0626B | *Sed idcirco misericordiam,* | 1 Tim 1:16 *Sed ideo misericordiam* | lexical substitution, same sense |
| 0627A | *ne deterius tibi contingat* | Jo 5:14 *ne deterius tibi **aliquid** contingat* | an omitted word |
| 0627B | *Primo omnium.* | 1 Tim 2:1 *primum omnium* | adverb form; no English exponent |
| 0627C | *Utinam esset nobis arbiter.* | Job 9:33 *Non est qui utrumque valeat arguere* | ⭐ **the largest divergence in the work.** Migne's Job is not the Clementine's at all. Pattern 14 forbids speculating why, so the marker states the two readings and no more |
| 0629A | *Columna veritatis.* | 1 Tim 3:15 *columna **et firmamentum** veritatis* | not an "opening words + etc." truncation but a splice across an omission, so it is marked |
| 0629C | *Quos Deus creavit.* | 1 Tim 4:3 *quod Deus creavit* | masc. pl. relative (agreeing with *cibis*) for the Clementine's neuter singular; English "which" hides it |
| 0629D | *Presbyteri.* | 1 Tim 4:14 *presbyterii* | ⭐ **material**: Migne's whole gloss (*Pro presbyterorum, quia minus tribus esse non possunt*) is an argument about a plural, which the Clementine's *presbyterii* ("of the presbytery") does not offer |
| 0631B | *Manifestata.* | 1 Tim 5:24 *manifesta* | participle for adjective; "made manifest" for "are manifest" |
| 0631D | *Incidunt in tentationem et laqueum diaboli, **quia** radix omnium malorum,* | 1 Tim 6:9 *et **in** laqueum diaboli*; 6:10 *Radix **enim** omnium malorum est cupiditas* | a dropped preposition, and two verses run together with *quia* for *enim* |
| 0632A | *Doloribus multis.* | 1 Tim 6:10 *doloribus **malis*** | ⚠ one word, not one letter, so within this copy's stated precision — but see §5.13 |
| 0632A | *Tu autem, homo,* | 1 Tim 6:11 *Tu autem, **o** homo **Dei*** | two omitted words, one of them from inside the phrase |
| 0632B | *Inaccessibilem quem nullus hominum.* | 1 Tim 6:16 *lucem inhabitat inaccessibilem : quem nullus hominum vidit* | a splice, like *Columna veritatis* |

### 1c. DIVERGENCES FOUND AND **DELIBERATELY NOT MARKED**, each with its reason

- **0626A *Quia Christus Jesus.*** — the same *quia*-for-*quod* as the full quotation eight
  lines above, which already carries the marker. Marked once, cross-referenced here; a
  second marker on the fragment would say nothing new.
- **0627C *Unus,* inquit, *Deus, unus et mediator,*** — the italic words themselves agree
  with 1 Tim 2:5 exactly, so both spans are counted as agreements below; what is missing is
  the Clementine's *Unus **enim** Deus*, and Migne has not changed the text but replaced the
  connective with his own *inquit*, printed **outside** the italics. That is Pattern 5's
  construction, not a variant reading.
- **0628A *per generationem filiorum,*** — Vulg 2:15 *per filiorum generationem*. Word order
  only; identical in English.
- **0629B *Si non venissem, et locutus **eis fuissem**,*** — Jo 15:22 *locutus **fuissem
  eis***. Word order only.
- **0631C *Quicunque.*** — Vulg 6:1 *Quicumque*. Orthography (n/m) only, and Corpus
  Corporum's normalization is not distinguishable from Migne's here.
- **0626C *Deum nemo vidit **unquam**.*** — Jo 1:18 *umquam*. Orthography only.
- **0626A *Ut non dicam divinus,*** — introduced by Migne's own ***Alia littera***. He has
  flagged it as a variant himself; stacking our marker on his would tell the reader twice
  and blur whose observation it is (the same principle as the standing rule on his `( sic )`).

### 1d. CHECKED AND FOUND TO AGREE WITH THE CLEMENTINE EXACTLY — 118 spans, named

**Chunk 0 (1 Tim 1 unless noted).** *Misericordia* · *Pax* · *Gratia* · *Sicut rogavi.* ·
*Rogavi.* · *rogavi,* · *Fabulis et genealogiis.* · *Genealogiis.* · *Finis autem.* ·
*Praecepti.* · *praecepti,* · *Conscientia bona.* · *Et fide non ficta.* · *A quibus.* ·
*Non intelligentes,* · *Scimus autem.* · *Scimus autem,* · *Legitime utatur.* ·
*Gratias ago ei qui,* · *Sed misericordiam Dei.* · *Misericordiam consecutus sum,* ·
*Superabundavit.* · *Omni acceptione,* · *Primus.* · *In me.* · *Invisibili.* ·
*soli invisibili,* · *Soli Deo.* · *Hoc praeceptum.* · *Conscientiam.* · *Quos tradidi.* ·
*Tradidi.*

**Chunk 1 (1 Tim 2–4).** *Obsecro.* · *Obsecrationes.* · *Orationes.* · *Postulationes.* ·
*Gratiarum actiones.* · *Pro omnibus.* · *Ut quietam* · *Hoc enim.* · *Hoc enim bonum est.* ·
*Unus,* · *Deus, unus et mediator,* · *Mediator Dei,* · *Et veritate* · *Volo ergo viros,* ·
*Ira,* · *disceptatione,* · *Non in tortis,* · *Mulier in silentio.* · *Docere,* ·
*Adam non est.* · *Salvabitur.* · *Si permanserit in fide et dilectione et sanctificatione,* ·
*Cum sobrietate.* · *Bonum opus desiderat.* · *Irreprehensibilem.* · *sine crimine.*
(Tit 1:6–7, checked there and agreeing) · *Unius uxoris virum,* · *Sobrium,* ·
*Non cupidum.* · *Ne in superbiam.* · *Oportet autem,* · *Nullum,* · *Ecclesia.* ·
*Apparuit angelis.* · *In mundo.* · *Spiritus autem manifeste dicit.* ·
*Spiritus manifeste dicit.* · *Cauteriatam.* · *Sanctificatur.* · *Nam corporalis.* ·
*Pietas,* · *Praecipe haec.* · *Prophetiam.* · *Quae data est tibi per prophetiam:* ·
*presbyterorum,*

**Chunk 2 (1 Tim 5–6).** *Seniorem ne increpaveris.* · *Ut sorores.* · *In omni castitate.* ·
*Viduas honora quae vere viduae sunt.* · *Parentibus.* · *Desolata, speret.* ·
*Quae in deliciis.* · *Curam non habet.* · *Pedes.* · *Sanctorum.* · *Devita.* ·
*Habentes.* · *Irritam fecerunt.* · *Conversae sunt retro Satanam.* · *Qui bene.* ·
*Adversus presbyterum accusationem noli recipere,* · *Coram omnibus,* ·
*Testor coram Deo.* · *Noli adhuc aquam,* · *Quorumdam hominum peccata,* ·
*Subsequuntur.* · *Superbus.* · *Languens.* · *Quaestiones.* · *Nam qui volunt.* ·
*Cupiditas.* · *Haec fuge.* · *Pietatem.* · *Fidem.* · *Praecipio tibi.* ·
*Et Christo Jesu.* · *Beatus et solus,* · *Qui solus habet immortalitatem* ·
⭐ ***Accedite ad eum, et illuminamini*** (Psal. XXXIII = Ps 33:6) — **word for word,
including the connective**; the one full-verse citation in the work that agrees exactly ·
*Divitibus hujus saeculi.* · *Non sublime.* · *Ad fruendum.* · *Thesaurizare.* ·
*O Timothee.* · *Profanas.* · *Promittentes, circa fidem exciderunt,*

**Not scripture, so not collated (checked as such):** *sine peccato:* (the gloss's own
phrase, not a citation) · *hypostasis,* (the word under discussion) · the eight
*usque ad* formulae.

---

## §2 · THE TWO `[sic: …]` — and neither swallows its word

Both are **word-division defects** (Pattern 10), so the whole run is carried, and in both
the English says in plain words what the run carries (7a⁗, and the brief's test 1).

### 2a. 0625A · *serupulus* for *scrupulus*

> *cui malae conscientiae **serupulus** inest.*

Metathesis of *c* and *r*. **Corpus control:** `src/latin/` holds **one** `serupul-`
(this one) against **35** `scrupul-` forms. Not a word; carried.
English: *"in whom the scruple `[sic: *serupulus*]` of an evil conscience is present."*
**Strip the marker and the clause still reads**: subject, verb, and the noun the clause is
about are all outside the quarantine.

### 2b. 0630C · *nesolius* for *ne solius* — the fused direction, and it carries a negative

> *ipse potius ministra, **nesolius** impendii, verum obsequii praemium percipias*

**Corpus control:** one `nesolius` in all of `src/latin/`, and **no** `ne solius` anywhere,
so no control from usage; the reading is from the sentence. ⚠ **This is the dangerous
shape**: the run contains both the purpose particle *ne* and the quantifier *solius*, and
quarantining it silently would take the negation out of the English.

**Host of the negative: *solius*, not *percipias*.** The proof is structural, not a matter
of what reads well — *solius impendii* is answered by *verum obsequii*, a correlative pair,
and reading the *ne* onto the verb would make Augustine tell the bishop **not** to receive
his reward, which the imperative *ipse potius ministra* immediately before it contradicts.

English: *"that thou mayest receive the reward not `[sic: *nesolius*]` of the outlay alone,
but of the service."* **Stripped: "that thou mayest receive the reward not of the outlay
alone, but of the service."** Reads aloud, keeps the negative, keeps the correlative.

---

## §3 · EVERY SUPPLIED SUBJECT AND REFERENT, NAMED — with the evidence

Latin leaves the subject unexpressed where English cannot. Each one below names who it is
and what fixes it. **The two genuinely open ones are marked ⚠ and are the places a blind
reader should go first.**

- **0623D** "**He** instructs Timothy" — the Apostle. Migne prints no subject at all in the
  ARGUMENTUM; the referent is fixed by the work (a gloss on a Pauline epistle) and by the
  sibling argumenta in this block, which name *Apostolus*.
- **0624C–D** "here **he** begins", **0624D** "**He** says *I besought*", **0625B** "he
  adds… he subjoins", **0625D** "here **he** shows", **0626B** "**he** judges", **0626C**
  "**he** says not, to the Father alone", **0626D** "After **he** has recounted… **he**
  shows", **0628A** "**he** not only taught… denied… commanded", **0629D** "**He**
  admonishes him", **0632A** "**He** does not say… **he** knew", **0632C** "Above **he**
  treated… here **he** treats… **he** determines" — all the Apostle, in every case the
  speaker of the lemma standing immediately above.
- **0626A** "because **he** not only forgave sins, but gave faith and love" — **the Lord**,
  from the verse the lemma opens: 1 Tim 1:14 *Superabundavit autem gratia **Domini
  nostri***. Not from the sentence, which would allow "the Apostle".
- **0626C** "**he** is seen when he wills and as he wills" — **God**, named two clauses
  earlier (*Invisibilis est ergo ab hominibus **Deus** in natura*).
- **0626B** "but **it** is not God to us" — **the soul**. *ea* is feminine, agreeing with
  *anima* in the same sentence, and *omnes vires **ejus*** is the soul's powers.
- **0628B** "the Apostle calls **him** a transgressor" — **Adam**, from the lemma above
  (*Adam non est* [seductus]) and from the Augustine excerpt's own subject.
- **0628C** "let **one** be chosen" — **the bishop**, from the lemma *Irreprehensibilem*
  (1 Tim 3:2 *Oportet ergo **episcopum** irreprehensibilem esse*).
- **0628C** "if even before **he** had a wife", **0629A** "that **he** be blameless" — the
  same candidate for the episcopate.
- **0629B** "**he** therefore who was before seen lowly… appeared in majesty" — **Christ**,
  the subject of 1 Tim 3:16 through the lemma *Apparuit angelis*.
- **0630B** "**she** is with her whole mind devoted to God" — the widow (*Desolata*,
  1 Tim 5:5, feminine throughout); **0630B** "since **she** professes religion" — the widow
  in delights (1 Tim 5:6).
- **0630A** "lest **he** be more exasperated" — the *senior* of the lemma.
- **0631C** "reason does not lead **him**… **he** bursts forth" — the proud man
  (*Superbus*, 1 Tim 6:4); **0631D** "whether **he** should be a servant" — the Christian
  slave of 1 Tim 6:1–2.
- **0632A** "he fears this concerning **that man**" — **Timothy**; *de isto* points at the
  addressee of the lemma *Tu autem, homo*.
- **0632B** "**He** has it by nature" — **God**, from the lemma *Qui solus habet
  immortalitatem*.
- **0632B** "Because none comes to **it** of himself" — **the light**; *ad **eam*** is
  feminine and its antecedent is *lucem* at 1 Tim 6:16, which Migne's spliced lemma
  (*Inaccessibilem quem nullus hominum*) has cut away. This is why the `[var:]` at that
  lemma quotes the whole Clementine clause: without it the English pronoun has no visible
  antecedent at all.
- **0631A** "which he [Timothy] himself had entered upon" — **supplied in brackets on
  purpose.** Migne's *ipse* marks a change of subject (the Apostle forbids; Timothy had
  taken up the abstinence, per 1 Tim 5:23, which is addressed to Timothy). Left bare, the
  English "he himself" reads back onto the Apostle — the reference-misbinding class, and it
  would have been invisible to every count-based check.

### The two open ones

- ⚠ **0627A · *Sed volens facit cum illa quod bonum est.*** Rendered "But **willing, he**
  does with it that which is good", taking the subject to be **God**. Evidence: the
  paragraph's whole argument is that no creature escapes divine providence, the very next
  sentence is impersonal (*fit quod justum est*) with the same agent, and the paragraph
  closes naming him (*Deus negavit… sibi retinuit*). **The rival reading, and why it lost:**
  *volens* is nominative and could agree with an implied *creatura*, giving "But the
  willing creature does with it what is good" — grammatically clean, but it makes the
  creature the agent in a sentence-pair whose second member has no creature-subject
  available, and it leaves *cum illa* pointing at the creature twice over. Taken, not
  declined; the rival is recorded so a reader can weigh it.
- ⚠ **0629B · *non tacet dicens futuros pestiferae doctrinae viros.*** Rendered "**he**
  keeps not silence, saying…". The subject may be **the Apostle** (who has just been told
  *Quae sibi… Spiritus sanctus revelaverit*, and who is the one writing) or **the Holy
  Spirit** (the lemma is *Spiritus autem manifeste dicit*, and *non tacet dicens* echoes
  *manifeste dicit* exactly). **English "he" preserves the ambiguity the Latin has, so
  nothing was decided in the text** — deliberately, and this line is the notice.

---

## §4 · CRUCES PROPER — Migne's own roughness, rendered literally

**Nothing below was smoothed, and no word was translated as anything but what it means.**

1. **0624C–D · *Post salutationem prius de pseudo repellendis: incipit hic legem adhuc
   tenendam docentibus.*** Two ellipses in one sentence. *de pseudo* is Migne's clipped
   form for the false apostles — **the corpus is its own control here: three columns later
   at 0627B he writes *de pseudo-apostolis* of the same men**, so the English reads "the
   false [apostles]" with the supply bracketed. *incipit … docentibus* has a dative with no
   verb of speaking to govern it; rendered "here he begins with those teaching…", which
   supplies nothing. A plate read would say whether the abridgment or the compositor made
   the gap.
2. **0625D · *Bona vero ea; dimissa, quod fidelis est, et positus in ministerio, unde et
   fortis:*** The semicolon and the hanging *dimissa* are Migne's; both are carried.
   *dimissa* is neuter plural with no expressed noun, and *mala* in the sentence before is
   its only available agreement, so the English reads "[the evils] forgiven" with the supply
   bracketed. **The punctuation is exactly as printed** — semicolon, then comma, then colon.
3. **0626A · *Super majora bona quam olim mala.*** ⚠ **The roughest sentence in the work and
   the one to look at hardest.** *Super* governs nothing: the abridged gloss has no verb,
   and the phrase is left as a bare comparison. Rendered "Over greater goods than formerly
   evils", which is as close as the printed words allow. **No conjecture is offered and none
   is smuggled in**; the sense the passage plainly wants (grace superabounded in goods
   greater than the former evils) is stated here and not in the text.
4. **0627C · *ut omnes homines salvari nunquam fiat nisi per mediatorem…*** *salvari* as
   subject of *fiat* is not construable Latin. Rendered "that all men be saved may never
   come to pass save through the mediator", carrying both *nunquam* and *nisi*.
5. **0627D · *Quaeris, mercedem?*** The comma between verb and object is Migne's, and it is
   kept: "Dost thou ask, the reward?" The mark is his; Pattern 8 forbids deleting it and
   forbids tidying the comma away.
6. **0627D · *Veritas, quae credidisti videre.*** No verb. Rendered "Truth, to see what thou
   hast believed", supplying nothing and keeping the comma.
7. **0628A · *sint promittentes et indicantes extra pietatem animi.*** *extra* read as the
   adverb ("outwardly"), which is an attested sense and yields "showing outwardly the piety
   of the mind" — outward works declaring inward piety, which is what 1 Tim 2:10 is about.
   The preposition reading ("outside the piety of the mind") was rejected: it inverts the
   verse. **Declared, because the adverb reading is the less common one.**
8. **0628C · *sed eligatur, cujus comparatio caeteri grex dicantur.*** Two faults in five
   words: *comparatio* is nominative with nothing to govern it, and plural *caeteri* takes
   singular *grex*. Rendered "but let one be chosen, by whose comparison the rest may be
   called a flock" — the nominative has no English exponent (Pattern 9), and the number
   disagreement likewise vanishes in English "the rest… a flock". **No `[sic:]`**: both are
   real words in real slots, and Pattern 12's own boundary keeps the marker off them.
9. **0629C · *Cauterium est ferrum a cavendo dictum.*** ⚠ **An etymology that English
   cannot carry.** Migne derives *cauterium* from *cavere*, "to beware". Rendered "A cautery
   is an iron so called from taking heed" — the pun is simply lost, and **no second italic
   span was invented to preserve it**, because italic parity with the Latin twin is 1:1 and
   an added `*cavendo*` would break it. The reader has the Latin opposite; this line is the
   explanation.
10. **0629D · *ut actus ejus excusarent - et non quasi juvenis…*** The spaced hyphen is in
    the source and is reproduced as printed. *excusarent* has no object; rendered "that his
    acts might excuse [him]" with the supply bracketed.
11. **0631C · *Superbia quippe, non eum ratio ducit…*** An anacoluthon: *Superbia* is a bare
    nominative that never becomes the subject of anything. Rendered "Pride assuredly, reason
    does not lead him, since…", keeping the comma and the dangling nominative.
12. **0623D · *Tychichum*** — ⚠ **raised as a possible digitization alteration, per the
    brief's fourth test.** `src/latin/` holds *Tichicum* ×2 and *Tychicum* ×1 against this
    single *Tychichum*. It is legible and renders in place ("Tychicus"), so it takes no
    marker under Pattern 9 — proper-name spellings vary freely in this period. **But the
    corpus-frequency shape is exactly the one that surfaced 8970's *Nephtlali*, and a plate
    read of col. 623 would settle it in one glance.** Recorded as a candidate, not a finding.
13. **0632A · *Doloribus multis* against the Clementine's *doloribus malis*.** ⚠ The on-disk
    Clementine is the 2005 "Quasimodo" release with its later correction diffs **not**
    applied (`sources/vulgate/README.md`), and this call rests on one word of it. It is a
    word and not a letter, so it is inside the precision that copy is warranted to; but a
    reader who needs 1 Tim 6:10 decided to the letter should check a second witness rather
    than this file. **The marker states both readings and nothing about why they differ.**
14. **0625A · *in qua non quisque sibi quodlibet fingit, sed catholica duntaxat.*** The
    negative sits before the quantifier *quisque*, so the 2a trigger fires. **Host: the verb
    *fingit*, with *quisque* as its subject** — "in which no one feigns for himself whatever
    he pleases". Proof from structure: the *sed … duntaxat* correlative opposes the **kind**
    of faith (catholic, not private), not one person against another, so a "not everyone"
    reading has nothing to answer it. Recorded because the rejected reading is grammatical.
15. **0626C · *quod de ipsa Trinitate intelligitur, non de solo Patre.*** Same trigger.
    **Host: the whole phrase *de solo Patre*, not *solo*** — Migne's own next clause proves
    it (*quia non ait, soli Patri, sed soli Deo*): the phrase "to the Father alone" is
    rejected outright, not merely narrowed. English "not of the Father alone" is therefore
    right, and "not only of the Father" would have been the inversion.
16. **Our double quotation marks at 0625A** (`for "of the commandments,"`). Pattern 6's
    " " is ours by convention and is the only supplied punctuation anywhere in these three
    chunks; it distinguishes the mentioned word from the glossing prose where Migne's
    unitalicized *pro praeceptorum* would otherwise run into the sentence. Declared because
    a band-by-band punctuation check will find it.

### Lemma completions made under convention 3 (fragment → the phrase it stands for)

Each supplies from the verse the fragment opens, and each is listed because the supply is
ours and invisible on the page: **0627D *Non in tortis,*** → "Not in plaited **hair**,"
(1 Tim 2:9 *tortis crinibus*) · **0628A *Adam non est.*** → "Adam was not **seduced**."
(2:14 *seductus*) · **0629A *Nullum,*** → "No **crime**," (3:10 *nullum crimen habentes*) ·
**0631A *Noli adhuc aquam,*** → "Do not still **drink** water," (5:23 *bibere*). Held back
deliberately at **0632B *Inaccessibilem quem nullus hominum*** — the completion there would
have had to import *lucem* and *vidit* across a splice, and the `[var:]` does that work
instead, in our own voice.

---

## §5 · THE FOUR TESTS, RUN ON THESE FILES

1. **A `[sic:]` must not swallow its word.** Both markers stripped and the residue read
   aloud: §2a and §2b. Both clauses keep verb, object, negation and conjunction outside the
   quarantine. Mechanically re-run over the whole work: no stranded article or preposition
   on punctuation, no doubled mark, in any of the three chunks.
2. **Negation attachment, host by host.** Every printed negative was named to its Latin host
   and the host found in the English. Twenty-two sites fired the 2a trigger (a negative with
   *solus / solum / tantum / omnis / penitus / adeo / simpliciter*, or a `non … sed` or
   `sicut … ita` pivot nearby) and each was proved from the correlative rather than from
   what read well: 0625A, 0625B, 0626A ×2, 0626B, 0626C, 0628A, 0628C, 0628D, 0629A ×2,
   0629C, 0630C ×2, 0631C, 0631D, 0632A ×2, 0632B, 0632C ×3.
   ⭐ **This test caught the one real defect in the drafts**: at 0625B *vel de quibus* had
   been rendered "**nor** of what things", importing a negative Migne does not print there
   (and the Clementine's *neque … neque* at 1 Tim 1:7 is exactly what makes that slip easy).
   Repaired to "**or** of what things".
3. **Punctuation, band by band, never by total.** The column anchors partition both twins
   identically (13 / 11 / 12, verified in order and against the word each stands beside).
   `?` `!` `:` `;` `«` `»` `(` `)` compared band by band: **zero mismatched bands** in all
   three chunks, with the single declared exception of the two quotation marks at 0625A
   (§4.16). Question marks: 1 / 2 / 1, matching, all of them direct questions — **Pattern 8b
   never fired**, and no `?` was supplied or deleted. Four semicolons supplied in the first
   draft of chunk 0 and one in chunk 2 were found by this test and removed; Migne's own
   semicolons (1 / 5 / 1) all stand in their own bands.
   ⚑ **Anchor position, not merely presence** (2b): every anchor was placed beside the word
   it stands beside in the Latin, splitting a construction where Migne splits it — e.g.
   *legem adhuc tenendam [0624D] docentibus* → "with those [0624D] teaching that the law is
   still to be kept", and *Justus tamen, et si ea non eget, [0625C] utitur* → "even if he
   needs it not, [0625C] uses it".
4. **The fourth test — does the English *assert* what he asserts.** Each paragraph read back
   against the Latin with the counts already clean. The passages where smooth English is
   most likely to be hiding a mis-parse are §4.2, §4.3, §4.4 and §4.8, and each is disclosed
   rather than resolved. The `usque ad` tails (eight of them) were parsed as strict prose,
   not excused as abridgment noise; all eight resume grammatically.

---

## §6 · READ CLEAN — named, so a later reader can tell checked ground from unexamined

- **Chunk 1, CAPUT II 0627B (the *ordo missae* paragraph)** — seven lemmata in ten lines,
  every one collated, no divergence, no supplied subject, no negation at risk.
- **Chunk 2, CAPUT V 0630A–0630B (VERS. 1–8)** — eight lemmata, all agreeing with the
  Clementine word for word; the only thing to notice is that **two paragraphs end with no
  terminal stop** (*auxilium vitae et salutis*, *cum profiteatur religionem*) and the
  English ends without one too, under Pattern 8. A third does the same at 0632D
  (*aliae non sunt vitandae*), as does *Qui solus habet immortalitatem* at 0632B, which
  Migne closes with no point before the gloss begins. **None of these is a defect of ours
  and none should be reported as one.**
- **Chunk 2, CAPUT VI 0632C (the paragraph on riches)** — the densest negation cluster in
  the work (seven negatives in eleven lines, three of them 2a-shaped) and it came back
  clean on both the count and the attachment pass.
- **All 12 `[n:]` notes are citations, not prose** — sigla and locators only, the longest
  being `(AUG., lib. II contra adversarios legis et Proph., c. 1.)`. **Pattern 15 never
  fired; there is no `[nt:]` in this work and that is a checked zero.**
- **One siglum is NOT an `[n:]` and was left as printed:** at 0628A the attribution
  `(AUG., lib. II de Gen. [0628B] ad litteram, c. ult.)` stands **inside the italic lemma**
  as ordinary parenthetical text, with a column anchor inside it. It is reproduced verbatim,
  unanglicized, exactly as the `[n:]` sigla are, and the anchor keeps its place inside the
  parenthesis. Treating it differently from its twelve marked siblings would have been an
  invention.
- **Three Greek words** (0632A φιλαργυρία, 0632D Τίμιος, Θεὸς) carried verbatim with their
  Latin glosses Englished beside them, following 11064's practice. No transliteration was
  added, because Migne supplies the Latin equivalent himself.

## §7 · WHAT A BLIND READER SHOULD LOOK AT HARDEST

In order: **0626A** *Super majora bona* (§4.3, an unconstruable sentence rendered as closely
as the words allow) · **0627A** the subject of *Sed volens facit* (§3, taken not declined) ·
**0629B** the subject of *non tacet* (§3, deliberately left ambiguous) · **0630C** the
*nesolius* attachment (§2b) · **0628A** *extra* read adverbially (§4.7) · **0623D**
*Tychichum* (§4.12, wants a plate).

---

## §Adjudication — blind polarity read (2026-08-19)

Blind reader, fenced from this file: **5 sites, all OURS-SIDE, no Migne-side polarity defect.**
Every printed negative was present and correctly hosted, including the two double negatives
(*Nulla enim creatura … non serviat*; *Non est genus mali quod non ex cupiditate … proveniat*).
**All five accepted and repaired.**

1. **0626A–B · *quo prior non erat* / *nemo prior inter peccatores*** — "earlier" → **"greater"**
   (twice). The gloss exists to say Paul's *primus* is rank, not chronology, and says so in its
   own last clause (*non ordine temporis, sed magnitudine iniquitatis*). Rendering *prior*
   temporally made the premises deny the conclusion **inside one sentence**. The inference from
   *acrior inter persecutores* only licenses the comparative of rank.
2. **0626C · *quomodo populum imbuat disciplina ecclesiastica ostendit*** — *imbuere* takes
   accusative of person + **ablative** of thing, so *disciplina* is not the subject: "he shows how
   he is to imbue the people with ecclesiastical discipline." Making discipline the agent turned a
   directive to Timothy into a general observation. The Argumentum at 0623D frames the epistle the
   same way (*Timotheum instruit et docet de … omnis ecclesiasticae disciplinae*).
3. **0626D · *excludatur a Satana regnum Satanae*** — "from Satan" → **"by Satan"**. `a` + ablative
   of a person with a passive verb is agent, and the whole remaining gloss is built on Satan as the
   unwilling instrument (*procuratores … divinae providentiae*). "Satan's kingdom shut out from
   Satan" is close to incoherent.
4. **0629A–B · *genu illi flectentes quasi Deo gratias agant*** — *quasi Deo* picks up the dative
   *illi*: "bending the knee to him **as to God**, might give thanks." The prior rendering attached
   *quasi* to the verb as a hedge ("might as it were give thanks to God"), which loses the
   christological identification the sentence is making. ⚑ **Rival recorded:** *Deo* can be read as
   the dative of *gratias agant* (*gratias agere Deo* is idiomatic). It lost because a *quasi*
   hedging the angels' thanksgiving asserts nothing, while *quasi Deo* answering *illi* is the point
   of the passage.
5. **0631C · *Superbia quippe, non eum ratio ducit*** — now "Pride assuredly, **not reason**, leads
   him." ⚑⚑ **This overturns a deliberate, argued call by the translator** (§11 above read it as an
   anacoluthon and kept the dangling nominative). Recorded as a disagreement, not an oversight: the
   sense is identical under both readings, and the ellipsis of *ducit* is the ordinary discourse
   shape after *quippe* explaining the lemma *Superbus*, so the reading that ASSERTS something wins
   over the one that leaves *Superbia* predicated of nothing in English.

⚑ **The pattern across 1–5: not one is a missing word.** Every defect was a question about what the
English SAYS — a comparative read in the wrong dimension, an ablative read as a nominative, an agent
read as separation, a dative reattached, an ellipsis left dangling. Counts, parity and band checks
cannot see any of them, and the blind reader found all five while reporting no polarity defect at
all. **That is the fourth test earning its place for the second batch running.**

⬜ Unchanged and still owed: the plate read of col. 0623 that would settle *Tychichum* (§12), and
the unchecked plate status of §0 — no `[cn:]` recovery for cols 0623–0632.
