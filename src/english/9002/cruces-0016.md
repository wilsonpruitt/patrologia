# 9002 — cruces, stint 0016–0021 (cols 0107C–0123D)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0016–0021: `CAPUT VII.`
through `CAPUT XI.`, 6,577 Latin words, the Sermon-on-the-Mount close and the miracle and
mission chapters.

Companion files from this stint: `data/briefs/9002-PLATE-READS-0016.json` (every page opened, both
witnesses) and `data/briefs/9002-PENDING-TEI-PATCHES-0016.md` (seven sites where our Latin has
departed from Migne).

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Markers.** Zero `[sic:]`, zero `[cj:]`, zero `[d:]`, zero `[ed:]`, **six `[var:]`**.

**2. When a `[var:]` fires.** I inherited the 0000–0005 stint's bar and did not loosen it: Migne's
quoted scripture takes a `[var:]` where his words **assert something different** from the received
text — a *substitution*. It does **not** fire where he merely **shortens** a verse, where he
**splices two verses**, where the difference is **orthographic** (*Nunquid*/*Numquid*,
*quandiu*/*quamdiu*, *patrem familias*/*patremfamilias*), or where the difference is the **form of
a transliterated proper name** (*Gerazenorum*, *Scariothis*).

⚑ **One extension I did make, and it should be argued with if it is wrong.** The 0000 stint's list
is six *lexical* substitutions. Three of my six are **inflectional** — a tense (*Appropinquabit*
for *appropinquavit*), a mood (*conteret … Dominus* for the imperative *contere*), and a stem
(*dicite* for *discite*). I fired them because in each case **the English word on the page changes**:
"shall draw near" for "hath drawn near", "the Lord shall crush them" for "crush thou them", "say ye"
for "learn". A reader who is told nothing would take Migne's Latin for the Vulgate's. The 0000
stint's own @0069A (*invocavit* for *invocabit*) is exactly this class and it fired, so I take the
precedent to be established rather than new.

**3. When a single-word `[var:]` fires.** Launch brief §2 requires a witness of its own, because a
one-word divergence has two possible owners. **Two of my six are single words** (@0116B *dicite*,
@0118A *Appropinquabit*) and for both the second owner is eliminated: **I read the word on both
witnesses.** Ownership is settled by the plate, never by the argument.

**4. Every claim about the type rests on two witnesses.** I read all **nine** pages of my range on
the archive PDF **and** all **nine** leaves on Gallica, corner numbers first on each. **This
changed the answer nine times** — see §(e). Nothing in this file rests on one copy, and in
particular **a verse number I would have altered on the archive alone is refuted at Gallica**
(§(d) 14).

**5. Where the plate and our twin disagree, the English renders the plate** and the site is filed as
a pending TEI patch. Seven sites, all seven Corpus Corporum's, none of them Migne's.

**6. The vocabulary axes bind.** `turba` → **crowd** (5 occurrences; *multitudo* does not occur in
this range at all). `daemonium`/`daemones` → **demons**, `daemoniacus` → **demoniac**;
`diabolus` → **devil**. `gentes`/`gentium` → **Gentiles** in the *Judaei*/*gentes* opposition
(0113B, 0115A, 0116A, 0117D, 0119A, 0121A, 0123B) and **nations** in the one plainly generic
quotation, *Docete omnes gentes* at 0117D, which the axis names explicitly. `gentilis` → **Gentile**
(0113B), `gentilitas` → **the Gentile world** (0116D ×2, 0122D). `ethnicus` → **heathen** (0116A).
`mysterium` → **mystery** (0122B), `sacramentum` → **sacrament** (0108C, 0113B, 0120B).
⚑ **`natio` does not occur in this range.** The grep returns four hits and all four are the
documented false positives — *dignatione*, *incarnationem*, *indignatione*, *venatio*. Recorded
because the brief asks for the instrument check to be stated, not merely run.

**7. The commentator's own voice is not archaised.** `dicit`/`ait` → *says*; `-eth` and `-est`
forms appear **only inside quoted scripture** (*that saith*, *He raineth*, *He that findeth*,
*leadeth*, *knoweth*). `thou` is singular and `you` plural throughout — see §(d) 20.

---

## (b) SPAN COUNT — 335 against 335, paragraph-bounded

`data/briefs/9002-lemmata-0016.txt` declares **335 spans** for chunks 0016–0021, of which 0 are
open-ended.

Counting my own Latin **paragraph by paragraph** (per the file's own warning that a bare total can
agree falsely when two errors cancel):

| chunk | italic `*…*` | guillemet `« … »` |
|---|---|---|
| 0016 | 43 | 0 |
| 0017 | 22 | 0 |
| 0018 | 79 | 0 |
| 0019 | 66 | 0 |
| 0020 | 73 | 0 |
| 0021 | 52 | 0 |
| **total** | **335** | **0** |

**335 = 335, exact.** No paragraph in my range carries an odd number of asterisks, and there is not
one guillemet in 6,577 words, so both failure modes that make a bare total lie are excluded.
Matthew is an **italic-lemma** book, as the 0000 stint found.

⚑ **A note on the brief's own classification, because it changes the arithmetic.** The inventory's
`VERS.` lines are those matching `VERS. n.--`; **two verse lemmata in my range are printed by Migne
WITHOUT the dash** — `VERS. 25. *Suscitaverunt.*` (0114B) and `VERS. 28. *In regionem
Gerazenorum.*` (0114C) — and they are therefore filed among the second lemmata. Counted correctly
my range holds **134 verse lemmata**, not the 132 a mechanical read of the brief gives. Both
irregular addresses are Migne's and are reproduced verbatim under convention 1; both were read on
both witnesses (§(e)).

The 335 split: **134 verse lemmata · 53 `*usque ad*` formula spans · 148 second lemmata, inline
scripture, name-etymologies and technical tags.**

---

## (c) THE LEMMA DIVERGENCE LIST — all 335 spans, collated against `sources/vulgate/clementine-flat.txt`

Migne's citation sigla pass through verbatim under convention 4 and are **not** treated as
divergences; a wrong siglum is his attribution practice. Three in my range are demonstrably wrong
and are recorded, not corrected: **`(Psal. VIII)`** at 0113C on what is **Ps 18:13**;
**`(Luc. IX)`** at 0119C on what is **1 Cor 9:9** (his own sentence says *Apostolus*); and
**`(I Cor. IV)`** at 0123D on what is **2 Cor 4:17**.

### C1. THE SIX THAT FIRED

| col | Migne prints | received text | why it fired |
|---|---|---|---|
| **0114D** | VERS. 32.-- *Et ecce **magno**.* | Mt 8:32 *et ecce **impetu** abiit totus grex* — no *magno* | The word is not in Matthew's verse at all; it is **Mark's** (Mc 5:13 *magno impetu grex praecipitatus est*). Read on both witnesses. A reader who is told nothing takes a harmony reading for Matthew's text. ⚑ Under convention 3 the fragment is rendered as the phrase it stands for, "with great violence", so the divergent word is **in** the English and cannot be passed over silently. |
| **0115C** | *Duplici contritione **conteret** eos **Dominus**.* | Jr 17:18 *duplici contritione **contere** eos* — an imperative, no subject | Mood **and** an added subject: a prophet's imprecation becomes a statement about what the Lord will do, and Migne adduces it as a statement (*unde:*). This is the sharpest of the six. Read on both witnesses. |
| **0116B** | VERS. 13.-- *Euntes autem **dicite**.* | Mt 9:13 *Euntes autem **discite** quid est* | "Go and **say**" for "Go and **learn**" — a different imperative, and the whole point of Mt 9:13 is that the Pharisees are sent to learn. Single word, so §2's bar applies, and it is met on the harder limb: **read on both witnesses** (archive p.63, Gallica f58), so our transcription is eliminated as the second owner. |
| **0118A** | VERS. 7.-- ***Appropinquabit** regnum coelorum.* | Mt 10:7 ***appropinquavit** regnum caelorum* | Future for perfect in the apostles' own commission. Single word; **read on both witnesses**. And the gloss re-quotes it, in roman, at the close of the same paragraph — so the tense stands twice on the page. |
| **0118B** | *…nunquid defuit vobis aliquid? At illi dixerunt: **Non**.* | Lc 22:35 *numquid aliquid defuit vobis?* … (v. 36 answer) *At illi dixerunt: **Nihil**.* | "They said: **No**" for "They said: **Nothing**". The English word on the page changes; the reordering of *defuit vobis aliquid* and the loss of *et calceamentis* are ellipsis and are **not** what the marker names. |
| **0123D** | *…aeternum pondus gloriae operatur **in coelis**.* | 2 Cor 4:17 *aeternum gloriae pondus operatur **in nobis*** | "worketh … **in heaven**" for "**in us**" — a substitution that moves the whole proof-text from the believer to the place. The heavy abridgment of the rest of the verse is ellipsis and is not marked. |

### C2. DECLINED — the fifteen other verse lemmata that are not verbatim in their own Matthew verse

**134 verse lemmata were collated against their own chapter and verse in the Clementine. 118 are
verbatim. Sixteen are not, and three of those sixteen fired (above).** Here are the other thirteen,
with the fourteenth — @0122D — belonging to §(c) C4 because the divergence is ours, not Migne's.

- **0108B Mt 7:4** *Aut quomodo dicis **fratri** tuo.* — ⭐ **the Clementine is the one in error
  here**: `clementine-flat.txt` reads *fratri**s** tuo*, which does not construe with *dicis*.
  Migne is right. Recorded because a mechanical collation reports this as a Migne divergence and it
  is the reverse.
- **0108C Mt 7:6** *Nolite sanctum,* etc. — Migne cuts *dare*; a fragment, and his own `etc.` marks
  the cut.
- **0110C Mt 7:16** *Nunquid.* — orthography only; the Clementine spells *Numquid* throughout and
  therefore every *Nunquid* in this work flags mechanically. Same at **0116C** (Mt 9:15
  *Nunquid possunt*), **0117C** *Nunquid usque in coelum exaltaberis?* (Mt 11:23) and **0119C**
  *Nunquid de bobus cura est Deo* (1 Cor 9:9).
- **0111C Mt 7:23** *Nunquam novi vos.* — same class (*Numquam*).
- **0112B Mt 7:27** *Et cecidit **fuitque** ruina **ejus** magna.* — Mt 7:27 has *et cecidit, et
  fuit ruina **illius** magna*. An enclitic for *et*, and *ejus* for *illius*: two ways of writing
  the same thing, and nothing in the gloss turns on either. ⚠ **The nearest of my declines to one I
  could be argued out of**, since it is a two-word difference inside a whole quoted clause and §2's
  prior favours firing on quoted clauses. It stays declined because neither word changes what the
  sentence asserts, and the gloss expounds *ruina* and *conscientia*, not the pronoun.
- **0113A Mt 8:7** *Ego veniam et curabo eum. Et respondens centurio ait,* etc. — the lemma splices
  across the 8:7/8:8 verse break, which is why the per-verse scan cannot match it. Not a divergence.
- **0114C Mt 8:28** *In regionem **Gerazenorum**.* — Clementine *Gerasenorum*. ⭐ **Re-read on both
  witnesses at the coordinator's request, 2026-09-05, and adjudicated under §2 rather than swept
  under Policy 2 — see §(d) 6a for the ruling.** Both copies print the *z*, twice each; our twin
  agrees; the divergence is Migne's beyond doubt and it is still **declined**, because it is the
  form of a transliterated place-name and nothing any sentence says turns on the letter. The English
  keeps his *z* (Gerazenes / Geraza) rather than normalising to the received English form.
- **0116C Mt 9:15** *Lugere **quandiu** cum illis est sponsus.* — *quandiu* for *quamdiu*;
  orthography.
- **0117D Mt 10:4** *Et Judas **Scariothis**.* — Clementine *Judas Iscariotes*. The ordinary
  medieval form of the name; nothing in the gloss touches the letters (it is about choosing a
  betrayer). Policy 2.
- **0119A Mt 10:25** *Si **patrem familias**.* — the Clementine sets *patremfamilias* as one word.
  A word division in the printing of the comparand, not a reading.
- **0120D Mt 11:9** *Plusquam propheta.* — Mt 11:9 has *plus quam prophetam*. Word division, plus
  the accusative brought to the nominative because the phrase is standing as a lemma head. Declined
  as a lemma-form adaptation; the English reads "More than a prophet."
- **0121A Mt 11:12** *A diebus Joannis.* — Mt 11:12 has *A diebus **autem** Joannis **Baptistae***.
  Ellipsis at both ends of a two-word lemma.
- **0122B Mt 11:21** *Vae tibi,* etc. — verbatim as far as Migne's `etc.`; the ⚠ in the pre-scan is
  the truncation. ✓

### C3. DECLINED — second lemmata and inline scripture that diverge

Thirty-three of the 148 non-verse spans did not match the Clementine verbatim. Six of them are the
`[var:]` sites or the patched site; the rest are these, every one collated word by word:

- **0109A** *Ecce **ego** sto ad ostium et pulso* `[n: (Apoc. III)]` — Apc 3:20 has *Ecce sto*. One
  inserted pronoun in a quotation adduced for the act of knocking. Declined; the gloss argues from
  *pulso*.
- **0109C** *Domini **enim** est terra* `[n: (Psal. XXIII)]`, etc. — Ps 23:1 has *Domini est terra*.
  *enim* is Migne's splice into his own sentence, exactly like the *quia* the 0000 stint declined at
  @0067B.
- **0109D** *Omnia ergo **quaecunque**,* etc. — Mt 7:12 *quaecumque*; orthography.
- **0109D** *Haec est lex et prophetae,* etc. — Mt 7:12 has *haec est **enim** lex, et prophetae*.
  Ellipsis.
- **0111B** *Qui dicit: Domine, Domine.* — Mt 7:21 has *qui dicit **mihi**, Domine, Domine*.
  Ellipsis in a lemma the gloss expounds for the *dicere*, not the *mihi*.
- **0112A** *Inimicus homo hoc fecit, **cujus*** — Mt 13:28 reads *Inimicus homo hoc fecit* exactly;
  the *cujus* is the gloss's own relative, caught inside Migne's italic run. Not a divergence, and
  the English keeps the run: "*An enemy hath done this, whose* works are all unstable".
- **0112D** *Non veni solvere **legem**, sed adimplere,* etc. — Mt 5:17's second clause is *non veni
  solvere, sed adimplere*; *legem* stands in the **first** half of the same verse. A compression of
  one verse into one clause, not a substitution. ⚑ Recorded with care because the gloss around it
  argues about *lex* — but the word it argues from is on the page in the verse either way.
- **0114C** *In regionem Gerazenorum.* — §C2.
- **0115A** *vestitum et sana mente sedere ad pedes **Jesu*** `[n: (Luc. VIII)]` — Lc 8:35 has
  *vestitum **ac** sana mente, ad pedes **ejus***, and *sedentem* where Migne has the infinitive.
  Migne has recast the verse into the indirect construction his own sentence needs
  (*invenerunt hominem … sedere*). Declined as an adaptation; *ad pedes Jesu* for *ad pedes ejus*
  asserts the same thing and the antecedent is Jesus in both.
- **0116A** *In viam gentium ne abieritis. Peccatores venientes discumbebant.* — two verses in one
  italic run: Mt 10:5 verbatim, then Mt 9:10's *peccatores venientes, discumbebant*. Not a
  divergence; the run's composition is why the scan cannot match it.
- **0116A** *quia multi sequebantur [0116B] eum* `[n: (Marc. II)]` — Mc 2:15 reads *erant enim
  multi, qui et sequebantur eum*. Migne compresses to a *quia* clause for his own syntax. Declined;
  and note the **column anchor stands inside the span**, which is a second reason the scan misses it.
- **0116C** *Lugere quandiu cum illis est sponsus.* — §C2.
- **0118B** *non nisi virgam:* — **not a quotation at all.** It is Migne's own summary of Mark, set
  in italic beside *neque virgam* precisely so the two can be contrasted (*Matthaeus et Lucas dicunt
  neque virgam; Marcus non nisi virgam*). Mc 6:8 reads *nisi virgam tantum*. No `[var:]` can be
  written on a paraphrase the author offers as his own.
- **0119A** *In **via** gentium ne abieritis,* — Mt 10:5 has *In **viam** gentium*, and **Migne
  himself prints *viam* at 0116A**. Read on both witnesses at both columns: he prints *viam* in
  the one place and *via* in the other. This is his own orthographic variation inside one work —
  the class the 0000 stint declined for *Nazareus*/*Nazaraeus* — and the English renders "the way
  of the Gentiles" at both, since English has no exponent for the case.
- **0119B** *Sufficit diei malitia sua. Beelzebub.* — Mt 6:34 *sufficit diei malitia sua* verbatim;
  *Beelzebub* is the next lemma, swallowed into the same italic run. Not a divergence.
- **0119C** *Nunquid de bobus cura est Deo* `[n: (Luc. IX)]` — 1 Cor 9:9 *Numquid de bobus cura est
  Deo?* Orthography, plus a wrong siglum which is Migne's and passes through.
- **0119D** *Erunt quinque in una domo divisi, tres in duo et duo in tres **dividentur**.* —
  Lc 12:52 reads *erunt **enim ex hoc** quinque in domo una divisi, tres in **duos**, et duo in
  tres*. Word order, *duo* for *duos*, and a supplied verb to close a sentence the abridgment has
  detached. Declined as quoting practice; nothing in the gloss turns on any of the three.
- **0120C** *Qui ponunt pulvinaria sub cubito,* — closest to Ez 13:18 *quae consuunt pulvillos sub
  omni cubito manus*, but the vocabulary is wholly different and **Migne gives it no siglum and does
  not introduce it as a quotation**: it stands as a second italic lemma beside *Ecce qui mollibus*.
  Declined. ⛔ I record this as **the decline I am least sure of** — if it is a scripture citation it
  is a heavy one, and a `[var:]` naming Ez 13:18 would be defensible. It stays declined on rule B:
  when unsure and unable to settle it from the file, the crux is always available and always safe.
- **0121D** *Convertimini ad me in toto corde vestro in jejunio et fletu et planctu*
  `[n: (Joel. II)]` — Jl 2:12 reads *in jejunio, et **in** fletu, et **in** planctu*. Two dropped
  prepositions; a contraction that asserts nothing new.
- **0121D** *et hujusmodi* — not scripture; Migne's own "and the like". ⚑ Note that he sets it
  **roman** after the Psalm quotation twelve words earlier and **italic** here; our twin has both
  right, and both witnesses confirm it. The English mirrors the change.
- **0122B** *mysterium meum;* · *domus fructuum* · *venatorum. Si in Tyro,* — the first two are
  Jerome's onomastic glosses of Corozain and Bethsaida, not quotations; the third is the tail of an
  etymology with the next lemma (Mt 11:21 *Si in Tyro*) run into the same span.
- **0122C** *villa pulcherrima,* — the etymology of Capharnaum. Not a quotation.
- **0122C** *Justificata est Sodoma soror tua ex te,* — **not in the Clementine anywhere.** The
  nearest is Ez 16:51–52 (*justificasti sorores tuas* … *justificatae sunt enim a te*), which Migne
  has recast into a sentence addressed to Jerusalem. **Declined because a `[var:]` names one
  received reading and there is no single verse here to name** — the 0000 stint's conflation-decline
  at @0068A, applied to the same shape. Recorded so that a later reader does not read the ⚠ as an
  unexamined site.
- **0122D** *Domine coeli et terrae.* — this scores ✓ Mt 11:25 in the pre-scan against the
  *ablative* form, and the reason it fails my stricter per-verse test is that Mt 11:25 spells
  *caeli*. Orthography (*coelum*/*caelum*) throughout this work; not reported again.
- **0123B** *Nisi Filius, et cui **Filius voluerit**,* etc. — Mt 11:27 has *nisi Filius, et cui
  **voluerit Filius** revelare*. Word order in a two-word span. Declined.
- **0123B** *Tollite super vos.* — the gloss's own re-quotation of its lemma (Mt 11:29 *Tollite
  jugum meum super vos*), a fragment with the governed noun cut. Declined.

### C4. THE ONE DIVERGENCE THAT WAS OURS

- **0116B** *Non enim veni **vocure** justos.* — a non-word. **Both witnesses print *vocare*.**
  Corpus Corporum's corruption, filed as TEI patch 2, and the English renders "to call". ⭐ **Had
  the corruption stood, the 7a″ collation would have reported a Vulgate divergence at Mt 9:13 that
  does not exist** — the class launch-brief §8a names (the digitization *manufacturing* a
  divergence a collation then dutifully finds). This is that class caught in the act, and it is
  what reading the plate inline buys.
- **0122D** *Respodens Jesus.* — same class; both witnesses print *Respondens*; TEI patch 6. Mt
  11:25 agrees exactly once the patch lands.
- **0117A** *canantes* (in the gloss, not a lemma) — both witnesses print *canentes*; TEI patch 7.

### C5. CHECKED AND AGREEING WITH THE CLEMENTINE EXACTLY

**118 of the 134 verse lemmata are verbatim in Matthew's own chapter and verse.** Rather than print
118 fragments, I record the collation as it was run: each lemma was normalised (markers and column
anchors stripped, punctuation and case ignored) and searched **inside the text of its own verse**,
the chapter taken from the `CAPUT` head and the verse from the `VERS.` address. That is the test
launch brief §3 asks for, and it is the one a bare ✓ cannot pass: it cannot be satisfied by a
harmony parallel in another gospel, because the other gospel's verse is never consulted.

Verse lemmata verbatim in their own verse, in order: **Mt 7:1** *Nolite judicare* · **7:2** *In quo
enim* · **7:3** *Quid autem vides* · **7:5** *Hypocrita, ejice* · **7:7** *Petite* · **7:8** *Omnis
enim* · **7:9** *Aut quis* · **7:10** *Si piscem* · **7:11** *Si ergo vos* · **7:12** *Omnia ergo* ·
**7:13** *Intrate* · **7:14** *Quam angusta* · **7:15** *Attendite* · **7:17** *Sic omnis arbor* ·
**7:18** *Non potest* · **7:19** *Omnis arbor* · **7:20** *Igitur ex fructibus* · **7:21** *Non
omnis qui dicit* · **7:22** *Multi dicent* · **7:24** *Omnis ergo* · **7:25** *Et descendit* ·
**7:26** *Qui audit verba mea* · **7:28** *Turbae* · **8:1** *Cum autem descendisset* · **8:2**
*Adorabat eum dicens: Domine* · **8:3** *Extendens* · **8:4** *Vide, nemini* · **8:8** *Non sum
dignus* · **8:9** *Nam et ego* · **8:11** *Ab oriente et occidente venient et recumbent* · **8:12**
*Filii autem regni ejicientur* · **8:14** *Et cum venisset* · **8:15** *Et tetigit* · **8:16**
*Vespere autem facto* · **8:18** *Videns autem Jesus* · **8:19** *Et accedens* · **8:20** *Vulpes
foveas habent* · **8:21** *Alius autem* · **8:22** *Mortuos suos* · **8:23** *Et ascendente* ·
**8:24** *Ecce motus* · **8:25** *Suscitaverunt* · **8:26** *Modicae* · **8:27** *Qualis est hic* ·
**8:29** *Jesu fili Dei* · **8:31** *Mitte nos* · **8:33** *Pastores autem fugerunt* · **8:34**
*Exiit obviam* · **9:1** *In civitatem* · **9:2** *Offerebant* · **9:5** *Quid est* · **9:6** *Tunc
ait paralytico* · **9:7** *Et surrexit* · **9:9** *Vidit hominem* · **9:10** *In domo* · **9:11**
*Quare cum publicanis* · **9:12** *At Jesus audiens, ait* · **9:14** *Discipuli autem tui non
jejunant* · **9:16** *Nemo autem* · **9:17** *Neque mittunt* · **9:18** *Ecce princeps unus
accessit* · **9:20** *Mulier quae* · **9:21** *Si tetigero* · **9:22** *Confide, filia* · **9:23**
*Vidisset* · **9:24** *Non est* · **9:25** *Et cum ejecta esset* · **9:27** *Transeunte* · **9:32**
*Hominem* · **9:34** *Pharisaei autem* · **10:1** *Et convocatis* · **10:2** *Petrus et Andreas* ·
**10:3** *Thomas* · **10:5** *In viam* · **10:8** *Infirmos curate* · **10:9** *Aurum neque
argentum* · **10:10** *Neque calceamenta* · **10:11** *Interrogate quis* · **10:14** *Excutite
pulverem de pedibus* · **10:16** *Ecce ego mitto* · **10:18** *In testimonium* · **10:19** *Dabitur
enim vobis in illa hora quid loquamini* · **10:21** *Tradet autem frater* · **10:22** *Qui autem* ·
**10:23** *Cum autem* · **10:24** *Non est discipulus* · **10:26** *Ne ergo timueritis eos* ·
**10:27** *Quod dico* · **10:29** *Super* · **10:30** *Numerati* · **10:32** *Qui confitebitur* ·
**10:33** *Qui autem* · **10:34** *Pacem* · **10:35** *Veni enim* · **10:37** *Qui amat patrem* ·
**10:38** *Et qui non accipit* · **10:39** *Qui invenit* · **10:40** *Qui recipit* · **10:42** *Et
quicumque* · **11:2** *Joannes autem* · **11:3** *Tu es* · **11:6** *Qui non fuerit* · **11:7** *De
Joanne* · **11:8** *Ecce qui mollibus* · **11:11** *Major Joanne* · **11:13** *Omnes enim* ·
**11:14** *Et si vultis recipere* · **11:16** *Cui autem* · **11:17** *Cecinimus vobis* · **11:18**
*Venit enim* · **11:19** *Et justificata est sapientia* · **11:20** *Tunc* · **11:23** *Et tu,
Capharnaum* · **11:26** *Ita pater* · **11:27** *Omnia mihi* · **11:29** *Tollite jugum* · **11:30**
*Jugum enim meum*.

Second lemmata and inline scripture verbatim in the Clementine (79 spans; the reference given is
the one the gloss is using, not merely the first hit): *In qua mensura* ×2 (Mt 7:2) · *Et conversi*
(Mt 7:6) · *Nostis bona* · *Dabit bona* · *Petentibus se* (Mt 7:11) · *Ut faciant vobis homines*
(Mt 7:12) · *Per angustam* · *Et spatiosa* (Mt 7:13) · *Et pauci* (Mt 7:14) · *Ad vos in vestimentis
ovium* (Mt 7:15) · *A fructibus eorum* (Mt 7:16) · *Nemo potest dicere: Dominus Jesus, nisi in
Spiritu sancto* (1 Cor 12:3, under Migne's own correct siglum) · *Multi dicent* (Mt 7:22) · *Qui
operamini iniquitatem* (Mt 7:23) · *Qui autem* (Mt 7:26) · *Assimilabitur* · *Viro* · *Qui
aedificavit* · *Supra petram* (Mt 7:24) · *Pluvia* (Mt 7:25) · *Viro stulto* · *Super arenam*
(Mt 7:26) · *Cum autem descendisset* · *Secutae sunt* (Mt 8:1) · *Si vis, potes me mundare*
(Mt 8:2) · *Tetigit* ×2 · *Volo* · *Mundare* (Mt 8:3) · *Nemini dixeris* (Mc 1:44, Migne's siglum
correct) · *Vade* · *Ostende te sacerdoti* · *Offer* · *In testimonium* ×2 (Mt 8:4) · *vir justus et
timens Deum* (Act 10:22) · *Pluit super justos et injustos* (Mt 5:45) · *In tenebras exteriores* ·
*Fletus* (Mt 8:12) · *Et febricitantem* (Mt 8:14) · *Delicta quis intelligit: ab occultis meis munda
me* (Ps 18:13) · *Et surrexit* (Mt 8:15) · *ambulantibus illis in via* (Lc 9:57) · *Magister* ×2
(Mt 8:19) · *Filius autem hominis non habet* (Mt 8:20) · *Domine* (Mt 8:21) · *Dormiebat* (Mt 8:24)
· *Imperavit* (Mt 8:26) · *Duo habentes* · *Saevi* (Mt 8:28) · *Jesu fili Dei* · *Ante tempus* ·
*Torquere nos* (Mt 8:29) · *Et invenerunt hominem* (Lc 8:35) · *Rogabant eum* (Mt 8:34) · *Fidem* ·
*Confide, fili, remittuntur tibi* (Mt 9:2) · *Surge* · *Tolle lectum tuum et vade in domum tuam*
(Mt 9:6) · *In telonio* · *Matthaeum* · *Surgens* (Mt 9:9) · *Ecce multi publicani* (Mt 9:10) ·
*Publicanis et peccatoribus* (Mt 9:11) · *Non est opus valentibus medicus, sed male habentibus*
(Mt 9:12) · *Et tunc jejunabunt* · *Jejunabunt* (Mt 9:15) · *Tollit enim* (Mt 9:16) · *Duodecim
annis* · *Accessit* (Mt 9:20) · *Et turbam* (Mt 9:23) · *Et tenuit manum* (Mt 9:25) · *Duo caeci*
(Mt 9:27) · *Duodecim* (Mt 10:1) · *Docete omnes gentes* (Mt 28:19) · *Regnum Dei intra vos est*
(Lc 17:21) · *Gratis accepistis* ×2 (Mt 10:8) · *Neque pecuniam in zonis vestris* (Mt 10:9) ·
*Neque virgam* ×2 (Mt 10:10) · *Dignus est* · *Dignus sit* · *Ibi manete* (Mt 10:11) · *Excutite*
(Mt 10:14) · *Sicut serpentes* (Mt 10:16) · *praedicate* (Mt 10:27) · *Nonne duo passeres?* ·
*Et unus ex illis* (Mt 10:29) · *Nonne quinque passeres veneunt dipondio* (Lc 12:6) · *Separare*
(Mt 10:35) · *Et sequitur me* (Mt 10:38) · *Uni ex minimis* (Mt 10:42) · *qui venisti* (Migne's own
counterfactual, not a quotation — see below) · *Lamentavimus* (Mt 11:17) · *Exsultate Deo adjutori
nostro, jubilate Deo Jacob* (Ps 80:2) · *angustia* · *venatio* (etymologies) · *exstitisti* ·
*Parvulis* (Mt 11:25) · *Quoniam sic fuit placitum ante te* (Mt 11:26) · *Et nemo novit Filium*
(Mt 11:27) · *Discite a me* (Mt 11:29) · *Arcta via est quae ducit ad vitam* (Mt 7:14, quoted back
in CAPUT XI with Migne's own *supra dicitur*).

⚑ **Three ✓ in the pre-scan that a careless reader would have taken as clearance**, checked and
recorded:
- **0120B** *qui venisti,* scores ✓ **3 Rg 13:14**. It is not a quotation of 3 Kings at all: the
  sentence is *Non ait qui venisti*, Migne saying that the text does **not** read those words
  (Mt 11:3 has *qui venturus es*). A mention, not a use.
- **0113B** *Pluit super justos et injustos* scores ✓ **Mt 5:45** inside a gloss on Mt 8:12. That is
  correct — Migne is adducing the Sermon on the Mount as a proof-text, three chapters back in his
  own gospel. Not a harmony parallel answering for the wrong evangelist.
- **0123D** *Arcta via est quae ducit ad vitam* scores ✓ **Mt 7:14** inside CAPUT XI. Also correct,
  and Migne signposts it himself (*cum supra dicitur*).

### C6. NOT SCRIPTURE — name-etymologies and technical tags

Of the 38 single-word non-verse spans, most are ordinary Vulgate words re-quoted from the lemma
above and are covered in C5. The genuinely non-collatable ones are Jerome's onomastics — *angustia*
(Tyre) · *venatio* (Sidon) · *mysterium meum* (Corozain) · *domus fructuum* / *venatorum*
(Bethsaida) · *villa pulcherrima* (Capharnaum) — together with the Greek words Migne prints in
Greek, **Τέλος** at 0115D and **Κωφὸς** at 0117C, both reproduced verbatim and not transliterated.

### C7. `usque ad` — the `etc.` splice test, run per occurrence

**55 occurrences of the words in my range. 53 are the formula; 2 are ordinary Latin.**

**All 53 formula occurrences stand inside an italic span AND follow an `etc.,` immediately** — the
`etc.` splice test is satisfied 53 times out of 53, with no borderline case anywhere in the range.
Two of the 53 have a **column anchor between the `etc.,` and the `usque ad`** (@0109A, @0117B); a
raw adjacency grep misses both, and they are the formula. All 53 render **"as far as"**.

The two ordinary uses carry no `etc.`, stand outside every italic span, and are rendered by sense.
The brief requires a departure from the axis to name its Latin:

- **@0113B** *occidens, qui passiones **usque ad mortem** tolerant* — temporal, rendered "who bear
  sufferings **even unto death**".
- **@0122B** *ut Paulum Tyro abeuntem omnes cum uxoribus et liberis **usque ad naves**
  prosequerentur* — spatial, rendered "followed Paul **as far as** the ships". ⚑ The English words
  coincide with the formula's, by accident of sense and not by application of the axis; the same
  coincidence the 0000 stint recorded at @0065D.

---

## (d) CRUCES OF THIS RANGE, BY COLUMN

### 1. @0107C — a mark Migne prints and our twin has lost (the one band-test mismatch)

`temere judicant haec judicia prohibet` in our Latin; **both witnesses print a mark**, the archive
an unambiguous colon and Gallica the upper point of one. The English carries a colon: "they judge
rashly: these judgments he forbids." Filed as **TEI patch 1**, and this is the single band in my
range where the punctuation test reports a mismatch against the twin (`[0107C]`, colons 2 vs 3). It
is expected and it should clear when the patch lands. No `[sic:]` — nothing on the plate is
defective, and none could be written for an absence in any case.

### 2. @0108B — `Salutem in eo quod temere judicant in oculo habent trabem`

Read on **both witnesses**, both clean: an accusative *Salutem* governed by nothing at all, standing
as its own one-line paragraph between two well-formed ones. Migne prints it so. Pattern 7 renders it
as literally as English can hold: **"Salvation, in that they judge rashly they have a beam in the
eye."** No marker — a real word, both witnesses, and the sentence is opaque rather than false, which
is 18a's explicit ❌. I record it because it is the roughest sentence in the range and a reader will
stop at it.

### 3. @0112D — `Non quia sine tactu sanare posset`, and no second `non` on either copy

> *Tetigit. **Non quia sine tactu sanare posset**, sed ut indicet se non subjectum esse legi…*

The argument plainly wants *non quia sine tactu sanare **non** posset* — "not because he could
**not** heal without touching". **Both witnesses print exactly what our twin prints**, at normal
letter spacing, with no room for a lost word: archive p.61, Gallica f56. So the English carries what
is printed: **"Not because he could heal without touch, but that he might show himself not subject
to the law."**

⛔ **A `[cj:]` was weighed and declined, and here is why the rival lost.** 18a's ✅ extension does
reach a **dropped** negation (7561 @0648, where Migne's setting loses the *non* of *non solum … sed
etiam*). But that extension opens the gloss **on a word Migne did print**, and here there is no such
word: the clause reads *non quia … posset*, and the conjecture would have to be attached to *posset*
while asserting that a different word is missing beside it. More decisively, the printed clause is
**not false** — "he touched, not for the reason that he could heal without touch, but in order to
show…" construes, awkwardly, as a denial of one motive. Opaque, not false; 18a's ❌ covers it. The
conjecture lives here and the printed word stands in the text.

### 4. @0112A — `quae sensum rigorem fidei emollit`, a double accusative

Read on both witnesses. Two accusatives with one verb and no conjunction. Rendered as apposition —
"which softens the sense, the rigour of faith" — which is the closest English the printed words
allow. No marker; both words are real and the defect (if it is one) has no English exponent beyond
the apposition. The reader has the Latin opposite.

### 5. @0112C — the orphaned pluperfect subjunctive `fecisset`

*Secundum Lucam, et in campestri loco sermonem quem jam forsitan supra habuerat ei **fecisset**.*
The governing clause has been cut away by the abridgment; `fecisset` has nothing to depend on.
Rendered as an indicative main verb, "he had delivered to him the discourse which perhaps he had
already held above", which is as close as English gets without supplying a conjunction. Both
witnesses print it. Logged rather than smoothed.

### 6. @0113A — `discendat`, and which reading I took

*In testimonium. Id est, Domino credant, si impietatis lepra **discendat**.* Read on both witnesses;
both print *discendat*. Under Pattern 9 this is an **attested medieval spelling**, not broken type —
the *de-/di-* interchange is a convention of the period — so no `[sic:]` and no italics.

⚑ **Two readings, and I say which I took and why the other lost.** *discendat* stands either for
*discedat* ("depart") or for *descendat* ("come down"). I rendered **"if the leprosy of impiety
depart"**, i.e. *discedat*. The rival loses on two grounds: the clause is the *condition on which
the priests are to believe*, and it is the removal of the leprosy that is the sign, not its
descending; and Migne uses *apparet* elsewhere in this very chunk (@0112D) rather than *paret*, so
he is not a writer who drops prefixes casually. The reading is recorded rather than concealed.

### 6a. @0114C — `Gerazenorum`, the span the ownership test never saw, adjudicated

⚑ **Added 2026-09-05 at the coordinator's request, after `lemma-inventory.mjs` was found to require
the address form `VERS. n.--`.** My range holds two lemmata Migne prints **without** the dash, and
the inventory therefore filed both as second lemmata — which I reported in §(b) as an arithmetic
correction. **What I could not see from my own file is the consequence: the ⚑ `MATCHES ONLY
ELSEWHERE` ownership test fires only on a span carrying a `VERS.` address, so it silently skipped
both.** The count was right and the instrument was wrong.

⭐ **The per-verse collation in §(c) C5 was not blind to it.** That collation takes its chapter from
the `CAPUT` head and its verse from the `VERS.` address **in my own Latin**, not from the brief, so
both dashless lemmata were in its 134 and this one is already among its sixteen misses. That is the
argument for rebuilding the check rather than reading the pre-scan: a tool bug in the brief did not
propagate into the collation, because the collation did not consume the brief.

**The read.** Archive **p.62** and Gallica **f57** — col. 114, not p.63/f58; corner numbers 113/114
confirmed on both, as in my original pass.

| | |
|---|---|
| **archive p.62** | `VERS. 28. *In regionem Gerazenorum.* Geraza urbs est Arabiae` |
| **Gallica f57** | `VERS. 28. *In regionem Gerazenorum.* Geraza urbs est Arabiae` |
| **our twin** | `VERS. 28. *In regionem Gerazenorum.* Geraza urbs est Arabiae` |

**All three agree, and the `z` stands twice on each copy** — once in the italic lemma, once in the
roman gloss four words later. Both copies also print the address as the bare `VERS. 28.` with no
dash, so the dashless form is Migne's and not an artefact either.

**What the read settles, and what it does not.** It settles **ownership** completely: two witnesses
eliminate Corpus Corporum, and `s`→`z` is a different sort, not a filled counter or a thickened
stroke, so it is not the over-inking class that produced my @0122B verse number. **The divergence is
Migne's.** What it does not settle is whether the divergence is worth a public claim, and that is
§2's question.

⛔ **DECLINED, and here is why the rival lost.** §2 lets a single-word `[var:]` stand on either of
two limbs, and it fails both:

1. **The gloss does not argue from the word.** It says only *Geraza urbs est Arabiae* — it names the
   city and spells it the same way. There is no etymology, no play on the letter, nothing the *z*
   carries. Contrast the 0000 stint's @0069B, where the lemma *Adjutus* is the etymology that
   answers the verb's aspect and the marker fired on one letter; here the second occurrence is
   corroboration of Migne's spelling, not an argument from it.
2. **It is the form of a transliterated proper name**, which the 0000 stint's Policy 4 declined
   across five instances (*Esrom · Josaphat · Eliachim · Sadoch · Nazareus*) on the ground that such
   spellings "are not different readings, and none changes what any sentence says." Γερασηνῶν has no
   settled Latin transliteration; the Clementine's uniform *s* across its four occurrences is
   evidence about **that edition's** normalising hand, not about Migne being wrong. The English is
   the same word either way.

⚑ **The one consideration that cuts the other way, stated so it can be argued with.** *Nazareus* was
declined partly because **Migne varied within his own column** (*Nazaraeus* twice on the next two
columns), which made it visibly his own loose practice. Here he does **not** vary: he is uniform in
*z*. Uniformity is the harder case, because a consistent spelling looks more like a deliberate
reading than a slip. I take it the other way — **a consistent orthography is house style, not a
reading** — and I would rather be argued out of that than have applied it silently. Firing here
would also breach the standing reason for the class: five name-spellings marked in this work would
bury the six substitutions that are the range's real payload.

**No `[var:]` fired; `0018.md` is unchanged.** The English continues to render Migne's own
transliteration, "Into the country of the Gerazenes … Geraza is a city of Arabia".

⚑ **The other span the bug hid in my range clears.** `VERS. 25. *Suscitaverunt.*` @0114B is verbatim
in Mt 8:25 and is already listed among §(c) C5's 118; it was read on both witnesses in my original
pass (the archive prints a dash before it, Gallica and our twin do not — §(d) 15).

### 7. @0114D — `Et ecce magno`, and how far convention 3 expanded it

The lemma is a three-word fragment of Mt 8:32 as Migne's text reads it, *et ecce magno impetu abiit
totus grex*. Convention 3 renders a fragment as the phrase it stands for, so the English reads
**"And behold with great violence"**, supplying *impetu*'s English from the verse the fragment
opens — exactly the move Ruth's *Non te.* → "Let no man see thee" licenses. The `[var:]` then names
what the Clementine has. ⚑ Stated explicitly because the expansion and the marker interact: without
the expansion the divergent word *magno* would be the only word on the page and the marker would
have nothing to sit beside.

### 7a. Convention 3 — every fragmentary lemma I expanded, and how far

Convention 3 renders a fragment as the phrase it stands for, and the launch brief's own control
warns that contrasting an expanded fragment with a complete one-word lemma manufactures an
inconsistency that is not there. So: the **complete** one-word lemmata in my range are rendered as
they stand (*Ask.* · *Beware.* · *Enter ye.* · *Thomas.* · *Peace.* · *Then.* · *Numbered.* ·
*Weeping.* · *Master.* · *Lord.* · *Faith.* · *Arise.* · *Twelve.* · *Matthew.* · *Rising up.*),
and the **clipped** ones are expanded from the verse each opens. Named in full, since only a list
can be audited:

- **@0110C** *Nunquid.* → "**Do they gather.**" (Mt 7:16 *Numquid colligunt de spinis uvas*), on
  Luke's precedent at 9000 @0265A where *Nunquid potest.* became "Can he."
- **@0111A** *Non potest.* → "**A good tree cannot.**" (Mt 7:18), the subject supplied because
  English cannot leave a finite verb bare.
- **@0109B** *Si piscem.* → "**If he ask a fish.**" (Mt 7:10 *si piscem petierit*).
- **@0108C** *Nolite sanctum,* etc. → "**Give not that which is holy,** etc." (Mt 7:6 *Nolite dare
  sanctum canibus*).
- **@0108D** *Et conversi.* → "**And turning upon you.**" (Mt 7:6 *et conversi dirumpant vos*).
- **@0114B** *Modicae,* etc. → "**O ye of little faith,** etc." (Mt 8:26 *modicae fidei*).
- **@0114C** *Duo habentes.* → "**Two having demons.**" (Mt 8:28 *duo habentes daemonia*), and
  *Saevi.* → "**Exceeding fierce.**" (*saevi nimis*).
- **@0114D** *Et ecce magno.* → "**And behold with great violence.**" — §(d) 7, and the one where the
  expansion and a `[var:]` interact.
- **@0117B** *Et cum ejecta esset.* → "**And when the crowd was put forth.**" (Mt 9:25 *cum ejecta
  esset turba*).
- **@0120B** *Tu es.* → "**Art thou he.**" (Mt 11:3 *Tu es qui venturus es*).
- **@0120C** *Qui non fuerit.* → "**He that shall not be scandalized.**" (Mt 11:6 *qui non fuerit
  scandalizatus in me*).
- **@0113D** *Et accedens.* → "**And there came.**" — deliberately *not* expanded to "one scribe",
  because the gloss immediately names him and the addition would be redundant rather than clarifying.

⚑ Where a fragment's continuation is a **second lemma Migne is about to gloss separately**, I did
not swallow it: *Et descendit.* stays "And there came down" and does not take *pluvia*, because
*Pluvia.* is the next lemma four words later.

### 8. @0115C — the `[var:]` sits after the span, not inside it

Migne's italic run is `*Duplici contritione conteret eos Dominus. [n: (BED.)] Quid est facilius,*` —
one span carrying a quotation, a siglum, and the **next** lemma. Nested markup is not expressible,
so the `[var:]` stands immediately after the run closes and names its verse (Jer 17:18) so that a
reader cannot mistake which of the two quotations it is about. Recorded because a marker that
floated to the wrong lemma is the 8995 @0601D failure mode with a different marker.

### 9. @0117B — `in tuam domum` against `sua domus` four words later

*Id est, de domo principis **in tuam domum**. Domus principis Synagoga est, **sua** domus coelestis
Jerusalem.* A second-person possessive in a sentence whose next clause uses the third. **Both
witnesses print *tuam*** (archive p.64, Gallica f59). A real word occupying its slot; rendered as
printed, "from the ruler's house into thy house". No marker: the sentence is not false, only
inconsistent, and Migne addresses his reader in the second person freely elsewhere in this range
(*Ne putes*, *Etsi difficile sit ut aliis facias*, *si juxta fragilitatem nostram accipis*).

### 10. @0119C — `Dipondio enim est ex duobus assibus`, an ablative as subject

Both witnesses. Rendered literally, "For a dipondius is out of two asses", keeping the coin-names as
Migne prints them (*as*, *dipondius*) rather than converting to farthings, since the whole gloss is
an arithmetical argument about the two of them and a conversion would delete it. The Douay's
"farthings" appears only inside the quoted Lc 12:6, where Migne quotes *dipondio* himself and the
English carries "two farthings" for the received phrase — the two words stand three lines apart on
the page and the Latin column shows why.

### 11. @0121D — `cum et jejunium et saturitatem petitur spernunt`

Read on both witnesses; both print *petitur*, a third-person passive with two accusatives beside it
and no grammatical slot of its own. Rendered **"when they spurn both fasting and the fullness that
is sought"**, which renders every printed word and attaches *petitur* to the nearer accusative. A
`[sic:]` is impossible (the form is a real word) and a `[cj:]` fails 18a's bar (the English asserts
nothing the author is arguing against). Logged; the conjecture *petitam* is the obvious one and it
is here, not in the text.

### 12. @0123A — `coomnipotentem`, a coinage, and the punctuation I supplied

*…incipiet non habere qui dedit **per omnia coomnipotentem nota**, per tradita, Filium…* Both
witnesses print *coomnipotentem*, closed up at normal letter spacing. It is a **coinage**, not a
non-word — *co-omnipotens*, "co-omnipotent" — and it is renderable, so Pattern 7's main rule governs
and no marker fires.

⚠ **Migne prints no mark at all between *qui dedit* and *per omnia*, and English cannot hold that.**
I supplied **a comma**, not a colon or a semicolon, and used our own double quotes (Pattern 6:
`" "` is ours) round the two words Migne is glossing as words: *"by "all things" note the
co-omnipotent, by "delivered", the Son"*. The comma keeps the punctuation band test clean; the
supply is recorded here because it is a supply.

### 13. @0121A, @0122D — the two anacolutha of CAPUT XI, and what I supplied

- **@0122D** *Respondens **tacitae objectionis** quasi quaereretur…* — a genitive where the sense
  wants an accusative or a dative. Rendered "Answering of a tacit objection, as though it were asked
  what the reason was…", keeping the genitive visible.
- **@0121C** *Coaequales contribules quos solebant exprobrare…* — two nominatives in apposition with
  no verb, the sentence carried over from *Similis est pueris*. Rendered as apposition.

### 14. ⛔ @0122B — THE VERSE NUMBER, and why it stands untouched

The archive copy prints **`VERS. 24. — Vae tibi`**. Our twin prints **`VERS. 21.`**, which is the
correct address for Mt 11:21, the verse the gloss expounds. **Gallica f61 prints `VERS. 21.`** — the
archive's `4` is a `1` whose counter has been filled by over-inking.

⚑ This is the 8950 episode reproduced in my own range: a digit, on one witness, in the direction
that reads like a printer's habit. Under the standing rule a verse address may not be altered on one
witness, and here the second witness settles it in our twin's favour. **No change, no marker, and
the English carries `VERS. 21.--` verbatim** under convention 1.

### 15. Verse addresses Migne prints irregularly — three, all carried

- **@0114B** `VERS. 25.` with no `.--`, where every neighbour has the dash. Our twin has it so;
  **Gallica agrees**; the archive prints a dash. Witnesses disagree on a dash, which is exactly the
  case the brief says may not be adjudicated on one copy. Left as our twin has it.
- **@0114C** `VERS. 28.` with no `.--`. **Both witnesses agree** — no dash on either.
- **@0112B** our twin's `VERS. 27.--` against the archive's `VERS. --27.` (dash before the number).
  **Gallica prints the normal form** and our twin follows it.

Convention 1 makes the address pass through verbatim in any case, and nothing machine-readable
consumes it.

### 16. @0121D, @0122A — two press variants, both terminal stops

The archive prints a full stop after *et hujusmodi* (@0121D) and after *sed praedicit ventura*
(@0122A); **Gallica prints neither**, and our twin has neither. Both copies are clean at both sites.
That is a press variant in the 8950 *Mititte*/*Mittite* class and the 0000 stint's
*Bethehem*/*Bethlehem* class: **two printings, no `[sic:]`, no patch, crux only.** The English
paragraphs end without a mark, per Pattern 8's "never supply".

### 17. Sentence-type marks Migne prints — all sixteen carried, none supplied, none deleted

Sixteen question marks in my Latin and sixteen in my English, band for band: @0114C (*cur non
creditis etiam in mari?*), @0118B (*nunquid defuit vobis aliquid?*), @0118C (*Unde ergo
necessaria?*), @0119B (*Nonne duo passeres?*), @0119C (*Nonne quinque passeres veneunt dipondio?*,
*Nunquid de bobus cura est Deo?*), @0120C (*an alium ad haec sacramenta missurus es?*), @0121C (*qui
noluistis credere ei?*), @0121D (*cur Joannes displicet?*, *cur Filius hominis?*), @0122C (*Nunquid
usque in coelum exaltaberis?*, *superbissime restitisti?*), @0122D (*quem gentilitas tam prona
recepit?*), @0123C (*Et quid jugo ejus suavius?*, *quid onere levius?*), @0123D (*hic et
concupiscentia damnatur?*).

⚑ **Pattern 8b was not needed once.** The two indirect questions in the range — *quis ordinem rei
gestae teneat, non apparet* (@0120C) and *Quando hoc sit factum non expressit Matthaeus* (@0113C) —
are both closed by Migne with a **full stop**, so nothing had to be recast and nothing was dropped.

### 18. Punctuation, band by band — the mechanical test, and what it leaves

Column anchors are verified 1:1, so they partition both twins identically. Comparing marks band by
band across all **72** bands of my six chunks (66 column anchors plus each chunk's head band), with
`[var:]` contents stripped:

- **question marks: zero mismatched bands** (16 in the Latin, 16 in the English);
- **guillemets: zero, in both** — this book prints none;
- **colons: one mismatched band, and it is the TEI patch** (@0107C, §(d) 1). Every other band is
  exact, after I removed **thirteen** colons I had supplied and restored **seven** that Migne prints
  and I had softened — the destructive direction, and the one this test exists to catch. The seven:
  @0110B (*adjecit: Attendite:*), @0113D (*trans fretum: Lucas vero … in via: non est contrarium:*,
  two of the three), @0114B (*et rogent: et rogantibus*), @0118B (*illud unde emuntur:*, which I had
  softened to a semicolon), @0120C (*descensurus sum: debeo*), @0121C (*Joannis moti sunt: vel*).
- **semicolons: zero mismatched bands**, after removing **seventeen** I had supplied and restoring
  one Migne prints (@0110B, *possit accipi; tamen*). ⚑ I have **not** applied the standing
  comma→semicolon licence at all in this range: Migne prints **35 semicolons** of his own here, so
  the Tobit exception (which rests on a book printing zero) does not apply, and every semicolon in
  my English stands where he prints one.

### 19. `pietas` — one Latin word, two English words, disclosed

*pietas* is not on any settled axis and the 0000 stint recorded that it splits. In my range it
occurs three times and I rendered it **twice as "mercy"** and **once as "piety"**:

- @0112C *non quasi **pietatis** incredulus* → "not as one incredulous of his **mercy**" — the leper
  doubts the *will*, not the power, so the word is Christ's compassion;
- @0116B *ad humilitatis et **pietatis** gratiam provocat* → "the grace of humility and of
  **mercy**" — the Pharisees are being provoked toward the sinners Christ has just received;
- @0120A *odium in suos, **pietas** est in Deum* → "hatred toward one's own is **piety** toward
  God" — here the word is dutifulness toward God and "mercy" would be simply wrong.

The related *pium affectum* at @0120B is rendered **"the devout affection"**, matching the 0000
stint's *pio affectu* → "devout affection" at @0075C. I record the split rather than let it pass,
since that is how the axes got made.

### 20. Pattern 17 — where the singular and the plural change hands

The range moves between them constantly and a reader can see it with no apparatus. **Singular
(thou)**: the whole of CAPUT VII's second person — *benefeceris*, *liberaberis*, *punieris*,
*tuleris*, *incurras*, *quid autem vides*, *fratri tuo*, *corde tuo*, *ejice*, *si difficile sit ut
aliis facias quod tibi vis fieri*; and in CAPUT XI *Tu es*, *debeo te nuntiare*, *exaltaberis*,
*restitisti*, *soror tua ex te*, *exstitisti ingrata*, *si juxta fragilitatem nostram accipis*,
*quod pati non vis*. **Plural (you)**: the apostolic commission throughout CAPUT X — *Gratis
accepistis*, *in zonis vestris*, *Excutite pulverem de pedibus*, *Ecce ego mitto*, *Dabitur enim
vobis*, *Quod dico*, *Ne ergo timueritis eos* — and in CAPUT VII *si petieritis patrem vestrum*,
*Intrate*, *Attendite*, *Nolite*, *Ut faciant vobis homines*, and in CAPUT XI *Cecinimus vobis*,
*Convertimini ad me in toto corde vestro*, *ut minus excusabiles sitis*.

⚑ **The visible payoff is at 0109B–0110A**, where Migne moves from *si petieritis patrem vestrum*
(plural, the crowd) to *Etsi difficile sit ut aliis facias quod tibi vis fieri* (singular, the
individual reader) and back to *Intrate* within four lines. Under a flat "you" that is invisible.

### 21. Supplied subjects and objects — every one named

The brief requires that each supplied pronoun be named. Mine are:

- **@0108A** *praeventus majoribus, alium non judicet* — the subject is the participle itself;
  rendered "one who is himself forestalled". Nothing supplied.
- **@0113B** *Per istas duas partes mundi ex quibus gentes vocandae erant designantur* — the
  subject of *designantur* is unexpressed and cannot be *gentes* (which is the antecedent of
  *quibus*). Rendered "they are designated", i.e. the two quarters. Both readings construe; I say so
  rather than choose silently.
- **@0114C** *Marcus dicit quod nullus jam daemoniacum, etc.* — the verb has been cut away by
  Migne's `etc.`; I supplied **[could bind]** in brackets, from Mc 5:3 (*nemo poterat eum ligare*),
  which is the sentence Mark's own text supplies.
- **@0112B** *Vel aliqui in turba, quia infideles, vel potius omnes de excellentia sapientiae* — no
  verb; supplied **[wondered]** in brackets, from the lemma's own verse (Mt 7:28 *admirabantur*).
- **@0107D** *Ita facit Deus, et non inique ut illi in aeternum* — no verb in the *ut* clause;
  supplied **[it be]** in brackets. The paragraph below (*aeternam poenam et inveniunt*) fixes the
  sense.
- **@0117B** *Quia Synagoga laetitiam Dominicae inhabitationis, etc.* — the verb is inside Migne's
  cut; supplied **[lost]** in brackets, from *laetitiam* being accusative and the Synagogue being
  the losing party throughout the paragraph.
- **@0120C** *Beatus Joannes, despectis quoque ovium pilis … pilos camelorum, etc.* — same shape;
  supplied **[chose]** in brackets.
- **@0120C** *hoc non contra Joannem dixisse **putandus est*** — the subject is Christ, not the
  *qui* clause that precedes it; rendered with a resumptive "he". Both parses construe and I record
  it.
- **@0117B** *paruit in susceptione* — rendered "**it was obedient** in the receiving". ⚑ The rival
  is *pareo* = "appear", and it lost on Migne's own usage: he writes *apparet* for "appear" eleven
  columns earlier (@0112D, *Apparet supra legem … esse gratiam*), so the bare *paruit* is the
  obedience verb.

### 22. Test 2a — negatives resting on a verb with a quantifier or correlative beside them

The trigger population in my range, each with the host proved from the sentence's own structure:

- **@0122C** *Non solum Corozaim et Bethsaidae vae erit, **sed** et tibi Capharnaum* — host is
  *Corozaim et Bethsaidae*, proved by the `sed et tibi`. Rendered "**Not** to Corozain and Bethsaida
  **only** shall there be woe, but to thee also".
- **@0110D** *non hoc faciunt mali, sed fit de illis consilio Dei* — host is the agency, not the
  verb; and the next clause *quia non **eorum** fructus est, sed vitis* puts the second negative on
  *eorum*, which the English keeps ("it is not **their** fruit, but the vine's").
- **@0111A** *Arbor bona vel mala **non natura** … **sed voluntas**;* host *natura*.
- **@0110C** *Non a veste, sed ab operibus*; host *a veste*.
- **@0118B** *viderentur **non causa salutis** praedicare, **sed lucri***; host *causa salutis*.
- **@0118D** *mala inferre non debet, sed tolerare*; host *inferre*.
- **@0119A** *quod persecutiones non debeant timere, sed declinare*; host *timere*.
- **@0122A** *quibus **non optat mala**, sed praedicit ventura*; host *optat mala*.
- **@0122D** *non opponit insipientes et hebetes, sed parvulos*; host *insipientes et hebetes*.
- **@0123A** *Tradita autem omnia **non coelum et terra** … sed hi qui*; host *coelum et terra*.
- **@0116C** *A mundi amore, **non solum** a cibis*; host *a cibis*.
- **@0119D** *non quod **non** sint honorandi pater et mater, **sed post Deum*** — both negatives
  carried, and the *sed* shows the second is a real denial and not a scope error.

**And the one that is not a negation at all, recorded because a negation-counting check will see
it:** @0112C *De voluntate **non quasi pietatis incredulus**, dubito; sed quasi meae colluvionis
conscius **non praesumo***. The first *non* is on the *quasi* phrase, not on *dubito* — the leper
**does** doubt, and says so. Rendering it "I do not doubt" would reverse the sentence and read
better, which is the tell.

---

## (e) DECLINED-ODDITY LIST — every suspect word I did NOT mark, with its column

**Eight of the eighteen entries below are archive-only readings that Gallica refutes; one is a
Gallica-only reading the archive refutes.** They are listed in full because the count is the
finding: read on one witness this file would have carried eight or nine confident claims about
Migne's type, and every one of them would have been false — including a **changed verse number**.

| col | the suspicion | why declined |
|---|---|---|
| 0112D | archive prints *prodantur inviti**,** Nemini dixeris* (comma for a full stop) | **Gallica f56 prints a full stop**; our twin agrees. Archive ink. |
| 0112D | archive prints *factus sit**,** Vade* (comma for a full stop) | **Gallica prints a full stop**; our twin agrees. |
| 0112D | Gallica prints *ut **sni** in magnis* (non-word) | **The archive prints *sui***, as our twin does. Gallica ink this time — the traffic runs both ways. |
| 0113A | archive prints *Ego veniam et curabo **cum*** | **Gallica prints *eum***, as does Mt 8:7 and our twin. |
| 0112B | archive prints `VERS. --27.` | **Gallica prints `VERS. 27. —`**; our twin agrees. |
| 0114B | archive prints `VERS. 25. — Suscitaverunt` | **Gallica prints the bare `VERS. 25.`**; our twin agrees. A dash is precisely what ink adds and fading removes. |
| 0121D | archive prints *et hujusmodi**.*** with a terminal stop | **Gallica prints none**, nor does our twin. Press variant; Pattern 8 forbids supplying it. |
| 0122A | archive prints *sed praedicit ventura**.*** with a terminal stop | **Gallica prints none**, nor does our twin. Press variant. |
| 0122B | archive prints `VERS. 24.` for `VERS. 21.` | **Gallica prints `VERS. 21.`**, our twin has 21, and 21 is the right address. Over-inking filled the counter of a `1`. §(d) 14. |

### And the suspicions that were NOT about either copy's ink

| col | the suspicion | why declined |
|---|---|---|
| 0108B | *Salutem in eo quod temere judicant…* — an accusative governed by nothing | Real word, **both witnesses**, Migne's. Opaque, not false: 18a's ❌. §(d) 2. |
| 0112D | *Non quia sine tactu sanare posset* — the argument wants a second *non* | **Both witnesses**, no room for a lost word. `[cj:]` weighed and declined. §(d) 3. |
| 0112A | *quae sensum rigorem fidei emollit* — two accusatives, one verb | **Both witnesses.** Rendered as apposition. §(d) 4. |
| 0112C | *sermonem … habuerat ei fecisset* — an orphaned pluperfect subjunctive | **Both witnesses.** The abridgment cut its governing clause. §(d) 5. |
| 0113A | *si impietatis lepra **discendat*** | Pattern 9: an attested medieval *de-/di-* spelling, not broken type. **Both witnesses.** §(d) 6. |
| 0117B | *de domo principis in **tuam** domum*, beside *sua domus* | Real word, **both witnesses**, Migne's. §(d) 9. |
| 0119C | *Dipondio enim est ex duobus assibus* — an ablative as subject | Real word, **both witnesses**. §(d) 10. |
| 0121D | *cum et jejunium et saturitatem **petitur** spernunt* | Real word with no grammatical slot; **both witnesses**; `[cj:]` fails 18a's bar. §(d) 11. |
| 0123A | *per omnia **coomnipotentem** nota* | A coinage, not a non-word; closed up at normal spacing on **both witnesses**; renderable, so no marker. §(d) 12. |
| 0122D | *Respondens **tacitae objectionis*** — a genitive where the sense wants a case-object | Both witnesses; rendered with the genitive visible. §(d) 13. |
| 0114C | *Gerazenorum* / *Geraza* against the Clementine's *Gerasenorum* — **a verse lemma proper, and the one span in my range the brief's ⚑ ownership test never ran on** | **Both witnesses print the *z*, twice each**, and our twin agrees: the divergence is Migne's, not ours, and not either copy's ink. Declined all the same, under §2's own bar. Full ruling at §(d) 6a. |
| 0117D | *Judas **Scariothis*** against Mt 10:4's *Iscariotes* | Name form; the ordinary medieval one. Policy 2. |
| 0116B | *Euntes autem **dicite*** | **Not** declined — this one FIRED. Listed here only so the two *dicite/discite*-shaped calls are not confused. |
| 0121A | *Christi opera non **auctorisantur*** | A medieval formation (*auctorizare*), attested; Pattern 9. Rendered "are given no authority". |
| 0117A | *carmen lugubre **canantes*** | A non-word — **and it is OURS**: both witnesses print *canentes*. TEI patch 7, not a marker. |
| 0118A | *neguitiam ejus supprimit* | Same class; both witnesses print *nequitiam*. TEI patch 3. |
| 0116B | *Non enim veni **vocure** justos* | Same class; both witnesses print *vocare*. TEI patch 2. |
| 0122D | *Respodens Jesus* | Same class; both witnesses print *Respondens*. TEI patch 6. |

### Suspiciously TIDY forms — brief §4's other direction, and the checked negatives

The class that leaves nothing to notice is the one where the digitization has **corrected** Migne. I
looked for it deliberately at the places where our Latin reads smoothly in rough surroundings, and I
read **whole lines**, not target words. **In this range the answer is: none found. All seven defects
run the other way** — the digitization corrupting, not tidying.

⭐ **The negatives worth recording**, because the brief asks for them explicitly and because a
checked negative is only worth having when the positives have been counted. The five passages in my
range where our Latin is *rough enough that a transcriber might have tidied it* are @0108B
(*Salutem* with no verb), @0112C (*fecisset* with no governing clause), @0112A (*sensum rigorem*),
@0117B (*in tuam domum*) and @0121D (*petitur*). **All five are printed exactly as rough on both
witnesses as they are in our twin.** Our transcription is faithful at every one of them. This
volume's digitization drops and swaps letters; in my range it added nothing and repaired nothing.

### The `⚑ MATCHES ONLY ELSEWHERE` candidates — none in this range

The launch brief lists eight; the nearest are @0106B (the previous stint) and @0157D (a later one).
**My range is clean of them**, and I confirm it rather than assume it: no span in cols 0107C–0123D
carries that flag in `9002-lemmata-0016.txt`, and the per-verse collation in §(c) C5 is the stronger
check that would have caught one had the flag missed it.
