# 8981 · *Epistola I ad Corinthios* — cruces, chunks 0010–0013 (cols 0543A–0550D)

Third and final stint of this work: **CAPUT XIII–XVI**. Latin twins
`src/latin/8981/0010.md`–`0013.md`. To be merged with `cruces-0000.md` and the middle
stint's file.

**Counts, checked before and after writing each chunk:**

| chunk | cols | anchors | `[n:]` | `?` | italic spans (LA = EN − markers) | ratio |
|---|---|---|---|---|---|---|
| 0010 | 0543A–0543D | 4 | 2 | 2 | 26 = 28 − 2 | 1.55 |
| 0011 | 0544A–0545D | 8 | 0 | 3 | 46 = 46 − 0 | 1.52 |
| 0012 | 0546A–0549C | 15 | 2 | 6 | 77 = 82 − 5 | 1.54 |
| 0013 | 0549D–0550D | 4 | 1 | 1 | 18 = 19 − 1 | 1.59 |

Colon/semicolon bands were compared against the Latin twin per Brief test 3 and brought to
exact parity (markers excluded): five semicolons of mine were converted back to Migne's
commas in 0012, two in 0010, two in 0011, and one semicolon of his that I had softened was
restored in 0012 (@0549A *per charitatem fiet;*) and one in 0013 (@0549D *absorpta es;*).

---

## §0 · ⛔ THE MARKER POLICY AS I APPLIED IT — read this before reading anything below

**No column in 0543A–0550D has been read at Migne's plate.** Our Latin is Corpus Corporum's
transcription. I therefore **fired ZERO `[sic:]`**, and every non-word and every split run I
found is logged below as a **plate request**, not as an accusation against Migne's type.
Three of the four candidates in my range are word-division or letter-loss defects of exactly
the shape Corpus Corporum manufactures, and **two of them stand eleven words apart in the
same paragraph** (@0546C *ves tra*, and *min re* eight lines above at the same column band),
which is the clearest internal evidence I have that the fault is the transcription's rather
than the compositor's — one plate can set a broken sort, but two in one short paragraph is a
scanning signature.

**How the four are handled in the English.** Pattern 13a clause 1 governs — *words lost
mid-sentence, reading certain from context → restore silently, log the crux* — because the
alternative (carrying the broken run in bare italics) would either invent an italic span the
Latin does not have, breaking span parity, or require the `[sic:]` this range may not fire.
Each restoration is named below with the printed run, so nothing is concealed and a plate
read can undo any of them in one edit.

**`[var:]` — four fired, and each stands on an unread column.** `plate-gate.mjs` gates
`[var:]` as well as `[sic:]`, so **this work owes plate reads on 0543A, 0546A, 0548B and
0550C** before it can be marked `ours`. I fired only where the divergence is **multi-word**,
i.e. where no single-character transcription slip could have manufactured it — the class the
gate's own rationale (`judicabit`→`judicavit`, 9003) exists to catch. Every single-letter or
single-word divergence I found is in §2 with no marker, however tempting.

---

## §1 · THE VULGATE COLLATION — every lemma in 0543A–0550D, walked

Source: `sources/vulgate/clementine-flat.txt`. **This is the deliverable.** The launch brief
warned that CAPUT XIII and XV are the two stretches whose English every reader knows by
heart, so each lemma below was rendered from Migne's Latin first and only then compared.

### 1a · DIVERGENT, marked `[var:]` (4)

| col | Migne prints | Clementine | why it is marked |
|---|---|---|---|
| 0543A | *Vos habetis clavem scientiae, sed nec intratis, nec alios intrare sinitis* [n: (Matth. XXIII)] | Mt 23:13 *vos enim non intratis, nec introeuntes sinitis intrare*; the key-of-knowledge clause is Lk 11:52 *tulistis clavem scientiae* | A **conflation of two verses under one siglum**, and the sense turns on it: Migne's Pharisees **have** the key (*habetis*), Luke's have **taken it away** (*tulistis*). Multi-word; unmanufacturable. |
| 0546A | *Post biduum vivificabit nos, et in die tertio resurgemus in conspectu ejus* [n: (Ose. VI)] | Os 6:3 *Vivificabit nos post duos dies ; in die tertia suscitabit nos, et vivemus in conspectu ejus* | Whole-clause divergence, and it is the proof-text for the third-day resurrection: Migne has **we shall rise again** (*resurgemus*), the Clementine **he will raise us up, and we shall live**. |
| 0548B | *Et si resurgent: qualive corpore,* | 1Cor 15:35 *Quomodo resurgunt mortui ? qualive corpore venient ?* | The objector's question is recast as a conditional. ⚠ The marker's content deliberately **omits the Clementine's two question marks** rather than importing marks Migne does not print into a chunk whose `?` parity is checked. |
| 0550C | *Nolite cogitare de crastino.* | Mt 6:34 *Nolite ergo solliciti esse in crastinum* | A different verb entirely, and the gloss **builds on Migne's verb**: *Non est enim* ***cogitare*** *de crastino, si quis humano more ista cogitet.* Rendering Mt 6:34's familiar "be not solicitous" would have destroyed the argument. |

### 1b · DIVERGENT, and I took NO marker — with the reason in each case (13)

These are the ones a `[var:]` would have over-claimed. **Every one is a real divergence and
every one is here so a later reader can overrule me.**

- **0543B · *Tunc cognoscam.*** — Vulg 1Cor 13:12 *tunc autem cognoscam*. A dropped *autem* in
  a clipped lemma; no sense is at stake. No marker.
- **0543B · *sicut ipse est,*** — this is **not** the 1 Cor 13:12 lemma (*sicut et cognitus
  sum*); it is the gloss's own italicised echo of I Jo 3:2 *videbimus eum sicuti est*, with no
  siglum printed. Marking it would assert a divergence in a citation Migne never made.
- **0543A · *non novi vos***. Neither Mt 25:12 (*nescio vos*) nor Mt 7:23 (*numquam novi vos*).
  ⚠ Declined **because Migne prints no siglum here** and the words sit inside the glossator's
  own sentence (*quibus non dicetur … sed* ***non novi vos***) as a paraphrastic allusion, not
  a quoted proof-text. Note that at 0545D the same work quotes *Nescio vos* exactly and then
  glosses it *id est non novi vos esse meos* — which is positive evidence that *non novi vos*
  is the glossator's idiom, not his text.
- **0544A · *Et sine voce.*** — Vulg 1Cor 14:10 *et nihil sine voce est*. ⛔ **The most
  dangerous fragment in my range**, and the reason it is here: convention 3 would expand it to
  the phrase it stands for, and **that expansion supplies a `nihil` Migne does not print**. I
  rendered the printed words only — "*And without a voice.*" — per 7a. No marker.
- **0547D · *Si omnino,*** etc. — same trap. Vulg 15:29 *si omnino mortui non resurgunt*.
  Rendered "*If at all,* etc."; **no negative supplied**.
- **0547D · *Propter vestram.*** — Vulg 15:31 *per vestram gloriam*. A genuine preposition
  divergence, and I declined the marker **because Migne adjudicates it himself on the same
  line**: *Vel:* ***Per vestram gloriam.*** The reader meets both readings without our
  apparatus. Rendered so the divergence survives in English too: "*On account of your glory.*
  Or: *By your glory.*"
- **0546D · *Deinde qui sunt.*** and **the *Alia littera* beside it** — Vulg 15:23 *deinde ii
  qui sunt Christi, qui in adventu ejus crediderunt*. The lemma drops *ii*; Migne then prints
  his own variant notice, *Alia littera:* ***Deinde hi qui sunt Christi in adventu ejus.***
  This is **Migne's apparatus, not a defect** — reproduced, unmarked.
- **0547B · *Novissime autem inimica destruetur mors.*** — Vulg 15:26 *Novissima autem*. ⚠ The
  richest declined candidate in the range and the one I most nearly marked. Migne prints the
  Vulgate form as the verse lemma (*VERS. 26.--* ***Novissima autem.***) and the adverbial form
  in the re-quotation, then expounds the adverb **twice more** (*sed novissime, id est post
  omnia destruetur mors*; ***Novissime.*** *Quia non erit aliquid quod destruat*). Three
  internal attestations. **Declined anyway, on my multi-word rule: `novissima`→`novissime` is
  one letter, and one letter is precisely what the digitization manufactures.** The Vulgate
  form stands four words away on the same line, so the reader is not misled. ⭐ **Plate
  request 0547B is the way to settle it; if the plate reads *Novissime*, this becomes a
  `[var:]`.**
- **0548C · *Quem visurus sum ego ipse, et non alius.*** (Job 19:27) — the Clementine has
  *quem visurus sum ego ipse, et oculi mei conspecturi sunt, et non alius*. An **elision**
  inside a quotation, not a variant reading; the negation is intact. No marker.
- **0548B · *Corrumpunt bonos mores,*** etc. — Vulg 15:33 *corrumpunt mores bonos colloquia
  mala*. Word order only (*bonos mores* / *mores bonos*). No marker.
- **0549C · *Media nocte clamor factus est: ecce sponsus venit.*** — Mt 25:6 *Media **autem**
  nocte … Ecce sponsus venit, **exite obviam ei***. A dropped *autem* and a truncation at the
  point Migne stops. No marker.
- **0548D · *Et eadem caro.*** — Vulg 15:39 *Non omnis caro, eadem caro*. ⛔ **Declined
  deliberately, and this is the one where declining costs most**, because what Migne's lemma
  lacks is the Vulgate's **negation**. I did not fire a `[var:]` because the shape of the
  divergence — an opening *Et* where the verse has *Non omnis caro,* — is exactly what a
  transcription drops or supplies at a lemma head, and a `[var:]` would publish a claim about
  Migne's page on that evidence. **I also did not supply the negative in the English**:
  the lemma reads "*And the same flesh.*", flatly. ⭐ **Plate request 0548D.**
- **0550D · *Spiritum meum et vestrum,*** etc. — Vulg 16:18 *refecerunt enim et meum spiritum,
  et vestrum*. Same words re-ordered into a citation head. No marker.

### 1c · CHECKED AND AGREEING WITH THE CLEMENTINE — named, not summarised

Verified verbatim against `clementine-flat.txt` at the verse glossed, allowing only Migne's
standing orthography (*charitas*/*caritas*, *coelestis*/*caelestis*, *nunquam*/*numquam*,
*spirituale*/*spiritale*, *Hierosolymis*/*Jerusalem*), which is Pattern 9 and not a divergence:

**1 Cor 13** — *Si linguis* (13:1) · *Charitatem autem* (13:1) · *Velut aes sonans* (13:1) ·
*Et si habuero prophetiam* (13:2) · *Noverim mysteria* (13:2) · *Scientiam* (13:2) ·
*Charitas patiens est* (13:4) · *Non aemulatur* (13:4) · *Non inflatur* (13:4) · *Non quaerit*
(13:5) · *Omnia credit* · *Omnia sperat* · *Omnia sustinet* (13:7) · *Charitas* · *Nunquam
excidit* (13:8) · *Evacuabitur quod* (13:10) · *Nunc* · *Tunc autem facie ad faciem* ·
*Speculum* · *Aenigma* (13:12) · *Fides, spes* · *Major autem horum est charitas* (13:13).

**1 Cor 14** — *Qui enim loquitur lingua* (14:2) · *Nunc autem* (×2) · *linguis loquens* · *Aut
in revelatione* · *Aut in scientia* · *Aut in prophetia* · *Aut in doctrina* (14:6) · *Tamen
quae sine* (14:7) · *Etenim si incertam* (×2, 14:8) · *Si ergo nesciero* (14:11) · *Sic et vos*
(14:12) · *Spiritus meus orat* · *Sine fructu* (14:14) · *Orabo spiritu* · *Orabo* (14:15) ·
*Amen* (14:16) · *Gratias ago Deo* (14:18) · *Sed malitia parvuli estote* (14:20) · *In lege* ·
*Aliis linguis* · *Et nec sic exaudient* (14:21) · *Itaque linguae in signum* · *linguae sunt
in signum* (14:22) · *Si ergo conveniat* (14:23) · *Quid ergo* · *Unusquisque* · *Psalmum
habet* · *Doctrinam* (14:26) · *Aut ut multum tres* (14:27) · *Sibi autem loquatur* (14:28) ·
*Prophetae duo* (14:29, *autem* dropped — clipping) · *Quod si alii* (14:30) · *Non enim est
dissensionis Deus* · *Sicut in omnibus* (14:33) · *Turpe est* (14:35) · *Si quis videtur
propheta* · *Cognoscat* (14:37) · *Si quis autem ignorat* (14:38) · *Nescio vos* (Mt 25:12,
**exact**).

**1 Cor 15** — *Per quod et salvamini* · *Nisi frustra credidistis* (15:2) · *Resurrexit tertia
die* (15:4) · *Visus est Cephae* (15:5) · *Abortivo* (15:8) · *Non sum dignus* (15:9) · *Gratia
autem Dei* · *Abundantius* · *Non ego, sed gratia* (15:10, *autem* dropped) · *Et sic
credidistis* (15:11) · *Si autem Christus* (15:14) · *Invenimur autem* · *Adversus Deum*
(15:15) · *Quod si Christus non* (15:17) · *Quoniam quidem per hominem* (15:21) · *Et sicut* ·
*sicut* (15:22) · *Unusquisque* · *Qui in adventu ejus crediderunt* (15:23) · *Deinde finis* ·
*Cum evacuaverit* (15:24) · *Oportet autem illum regnare* · *donec* (15:25) · *Oculi nostri ad
Dominum Deum nostrum, donec misereatur* (**Ps 122:2, exact**) · *Novissima autem* · *Inimica*
(15:26) · *Praeter eum qui subjecit ei omnia* (15:27) · *Ut sit Deus omnia* · *Ut sit Deus* ·
*Omnia* · *In omnibus* (15:28) · *Pro mortuis* (15:29) · *Per vestram gloriam* (15:31) · *Si
secundum hominem* · *pugnavi* · *Manducemus et bibamus, cras enim moriemur* (15:32, **exact**)
· *Nolite seduci* (15:33) · *Evigilate* · *evigilate* · *justi* · *Nolite peccare* (15:34) ·
*Sed dicet aliquis* · *Insipiens* (15:35–36) · *Insipiens tu: quod seminas* (15:36, Migne's
colon for the Clementine's comma) · *Deus autem dat* · *Unicuique seminum* (15:38) ·
*Coelestia* (15:40) · *Stella enim a stella differt* (15:41) · *In domo Patris mei mansiones
multae sunt* (**Jo 14:2, exact**) · *Seminatur* (15:42) · *Corpus animale* · *Surget
spirituale* (15:44, *corpus* elided) · *Si est corpus* · *si* · *animale est* (15:44) · *Homo*
(15:45) · *Sed non* · *Sed non prius* · *quod est spirituale, sed quod est animale, deinde
spirituale* (15:46, word order + supplied *est*) · *Primus homo* · *Secundus homo* · *de
coelo* · *coelestis* · *Coelestis* (15:47) · *Hoc autem dico* · *Quia caro* · *Neque corruptio
incorruptelam possidebit* (15:50, **exact**) · *Omnes quidem* (15:51) · *Immutabimur* (15:52) ·
*Absorpta est* (15:54) · *Ubi est, mors, victoria tua?* (15:55 — **same words**, Migne merely
setting *mors* between commas; the `?` is his and the Clementine's alike).

**1 Cor 16** — *De collectis* · *Ita et vos* (16:1) · *Per* (16:2) · *Manebo vel etiam
hiemabo* (16:6) · *Obsecro autem vos, fratres, nostis domum Stephanae et Fortunati* (16:15,
truncated at *etc.* before *et Achaici*) · *ut et vos subditi sitis* (16:16).

**Two lemmata declined expansion on the 7a″ ground, and only those two:** *Et sine voce* and
*Si omnino* (§1b). Every other clipped lemma was expanded per convention 3 to the phrase it
stands for (*Si linguis* → "If I speak with tongues"; *Evacuabitur quod* → "That which is in
part shall be done away"; *Tamen quae sine* → "Yet the things which are without life";
*Prophetae duo* → "Let two prophets speak"; *Sicut in omnibus* → "As in all the churches").
⚠ **Complete one-word lemmata were NOT expanded** — *Scientiam* → "Knowledge", *Speculum* →
"A glass", *Aenigma* → "An enigma", *Homo* → "Man", *Omnia* → "All things", *Inimica* → "The
enemy", *Coelestia* → "Heavenly" — because a complete one-word lemma and a clipped fragment
are **different classes** (Brief, "NAME THE CONTROL'S CLASS"), and contrasting them
manufactures an inconsistency that is not there.

⭐ **The one place this work does treat the same bare lemma twice: *Etenim si incertam*
@0544A, once bare and once with *etc.*** Resolved per the standing ruling by **expanding the
stump, not contracting its twin**: both read "*For if the trumpet give an uncertain sound*",
the second carrying Migne's *etc.*

---

## §2 · PLATE REQUESTS — column, printed reading, why, and what would settle it

**None of these fires a marker.** All four in 2a are restored silently in the English per
Pattern 13a clause 1 and named here so the restoration is reversible.

### 2a · Non-word / split-type candidates (4) — corpus frequency says "an error exists", never whose

| col | printed in our Latin | read as | why | English as shipped |
|---|---|---|---|---|
| 0546C | *Non **min re**, sed majore fortassis scelere* | *minore* | A word split across a space; the *sed majore* correlative fixes the comparative beyond doubt. **Split-type is the class the Brief's addendum A calls confirmed-ours 10 times out of 10.** | "Not by a lesser, but perhaps by a greater wickedness" |
| 0546C | *et sic est vana fides **ves tra*** | *vestra* | The same defect shape **eleven words later in the same paragraph**. ⭐ Two word-splits in one short paragraph is a scanning signature, not a compositor's. | "and so your faith is vain" |
| 0549A | *Vere surget corpus **spituale*** | *spirituale* | A dropped syllable; *spirituale* stands twice in the same sentence (*erit spirituale*, *spiritualis*). Corpus check: no other `spitual-` form anywhere in `src/latin/8981/`. | "Truly a spiritual body will rise" |
| 0547A | *angeli angelis praesunt, daemones daemonibus, **nomines** hominibus* | *homines* | ⚠ **A REAL FORM** (*nomines*, "thou mayest name"), so addendum A's rule applies: a real word that reads oddly is Migne's until a plate says otherwise. **But it has no grammatical slot** — a 2nd-person subjunctive among three nominative plurals in a tricolon whose third limb must be *homines hominibus*. Flagged as the weakest of the four. | "men over men" |

**What would settle all four: one page.** All are on PL 114 pp. 278–280 by the volume map in
CLAUDE.md (`patrologiaecurs06saingoog`, PDF page = (column + 11) / 2 — **0546 → p. 278·5, so
pp. 278–279; 0547 → p. 279; 0549 → p. 280**; calibrate against the printed corner numbers
before reading, per the standing rule). A second witness for PL 114 is not recorded in
`data/volumes.json` the way PL 113's Gallica copy is; if our copy clips, look for one.

### 2b · Suspiciously TIDY forms — brief §4, the normalization class (recorded negatives)

The digitization also silently *corrects*. I looked for forms that read too well in rough
company and found **none I would raise** in 0543A–0550D. Two I examined and cleared:

- **0549C · *septemvira muliere*** ("the woman of seven husbands", of the Sadducees' riddle).
  A rare coinage, not a normalization; *septemvir-* is well formed and the sense is exact.
- **0546A · *Incassum est fides*** — masculine/neuter adverbial *incassum* with feminine
  *fides* reads oddly, but *incassum* is an indeclinable adverb here ("in vain"), not an
  adjective. Nothing tidied. No crux.

### 2c · Punctuation Migne prints that I carried against the grain of English

Reproduced exactly, per Pattern 8; each is a candidate for a plate read only if someone
doubts the transcription.

- **0542D/0543A · *si adsit, habentur omnia?*** — a **`?` closing a plain statement**
  ("if it be present, all things are had?"). Carried. This is his mark, and recording it is
  the point.
- **0546C · *quod est causa mortis Et si in peccato tenetur*** — **no stop before a capitalised
  *Et***. Carried: "which is the cause of death And if he is held in sin". Not repaired.
- **0543C · *quod modo est secretum, **Speculum.** Est anima*** — a **comma where a full stop
  belongs**, immediately before a new lemma. Carried.
- **0544A · *…prolationem et non significationem sciret*** — the paragraph **ends with no
  terminal mark at all**. Carried; my English ends unpunctuated too.
- **0546B · *Gratia autem Dei* Primum sola gratia** and **0546B · *Non ego, sed gratia,* etc**
  — a missing stop after an italic lemma, and an *etc* with no point. Both carried.
- **0544C · *ut videret imagines mens Joseph illuminata est*** — **no mark between *imagines*
  and *mens***, so two clauses run together. Carried: "that he might see the images the mind
  of Joseph was enlightened, that he might understand." ⚠ Reads as a defect in English
  because it is one in Latin.
- **0544D · *VERS 20.--* and 0544B · *VERS. 10--*** — Migne's own irregular verse addresses
  (missing point after *VERS*, missing point after *10*). **Passed through verbatim**, per
  the settled convention that `VERS. n.--` is an address, not prose.

### 2d · Column-anchor placement (Brief 2b) — every anchor checked against the WORD it stands beside

All 31 anchors are verbatim and in order; I additionally checked position, not presence.
The mid-construction ones and where they landed in English:

- 0543B before *portat* → "Patience, with an even mind, **[0543B]** bears the evils…"
- 0543C before *sperando* → "If by believing and **[0543C]** hoping we love…"
- 0543D before *quamvis* → "he understands a likeness, **[0543D]** albeit an obscure one"
- 0544A before *prophetat* → "he who **[0544A]** prophesies is greater"
- 0544B before *linguam* → "By myself I have shown **[0544B]** that a tongue avails not"
- 0544C before *similitudines* → "where the **[0544C]** likenesses of bodily things"
- 0544D before *interpres* → "Neither the Greek nor the Latin **[0544D]** translator"
- 0545A before *qua* → "not in revelation, **[0545A]** of which they are unworthy"
- 0545B before *quo modo* → "he begins to determine **[0545B]** in what manner"
- 0545C before *verbum* → "stands every **[0545C]** word"
- 0545D before *tamen* → "to glory **[0545D]** nevertheless attain" (English inverted so the
  anchor keeps its Latin neighbour)
- 0546A before *non tenetis* → "Which is, if **[0546A]** you do not hold"
- 0546B before *labore* → "not in dignity, **[0546B]** in labour and in preaching"
- 0546C before *pseudoapostoli* → "The **[0546C]** false apostles were denying" (split inside
  the noun phrase, the 8995 @0605B precedent, because Latin puts the verb first)
- 0547B before *regni* → "not a longer **[0547B]** continuance of the kingdom"
- 0547C before *esse subjectus* → "so by no reason can he **[0547C]** be subject to any"
- 0547D before *Si omnino* → placed before the lemma
- 0548A **inside an italic span**, before *et bibamus* → "*Let us eat **[0548A]** and drink*"
- 0549A before *quia* → "God is all in all, **[0549A]** because God is charity"
- 0549B before *esse* → "it is established **[0549B]** to be so"
- 0549C before *factus est* → "as if to say, **[0549C]** he was made"
- 0549D before *de resurrectione* → "the seven husbands, **[0549D]** for these men were
  thinking carnally about the resurrection"
- 0550A before *quia corruptio* → "shall not possess the kingdom of God: **[0550A]** because"

The remaining eight (0543A, 0546D, 0547A, 0548B, 0548C, 0548D, 0550C, 0550D) stand at
paragraph or `VERS.` heads and are reproduced there.

⚠ **Band gaps are not defects** (runbook false positive 1): 0550 prints A, C, D in our text
with no B, and 0546–0549 run A–D cleanly. Not reported as a hole, and no arithmetic was done
over band letters.

---

## §3 · SUPPLIED SUBJECTS AND PRONOUNS — every "he/she/it/they" the Latin does not print,
## where two readings construe

The Brief calls this the dominant defect class. Named sites, with what decided each:

1. **0543B · *Quia non eam aliena felicitas contristat*** — *eam* is *charitas*, from the lemma
   *Non aemulatur* above. Rendered "it". Decided by the lemma, not the sentence.
2. **0543B · *Non dicit omnibus credit*** — "He does not say, it believes all men". The
   unexpressed subject of *dicit* is **the Apostle** (the work's standing subject for *dicit /
   ait / subdit*); of *credit*, **charity**, from the lemma *Omnia credit*. Both fixed by the
   lemma above.
3. **0544A · *quando lingua loquens se non intelligebat*** — "when one speaking with a tongue
   did not understand himself". Indefinite; no person supplied beyond the participle's own.
4. **0544C · *Ratio quare non debet quaerere linguas*** (0545A) — impersonal *debet*, rendered
   "the reason why **one** ought not to seek after tongues". ⚠ A second reading is available
   ("why **he** ought not", i.e. the Corinthian): both construe, and the choice is invisible
   in the English's force. Named here rather than chosen silently.
5. **0546B · *Vel similis abortivo, quia **sum** minimus*** — ⭐ **first person, and I kept
   it.** The gloss slips out of *dicitur / accepit* into Paul's own voice mid-sentence. The
   easy English would have been "because he is the least", and it would have concealed the
   shift. Rendered "because I am the least".
6. **0547B · *Quia non erit aliquid quod destruat*** — "there will not be anything which **it**
   may destroy". The subject of *destruat* is **death**, from the lemma *Novissime* and from
   *postquam hoc mortale induat immortalitatem*. ⚠ *quod destruat* also construes as "which
   may destroy [death]" — i.e. nothing left to do the destroying. **Both readings work
   grammatically; I took the first because the paragraph's whole point is that death is
   destroyed *last*, which requires that it still had work to do until then.** Named, not
   chosen silently.
7. **0547B · *Inimica. Cui inimicamur: vel ipsa nobis*** — *ipsa* is feminine agreeing with
   *mors*. English has no exponent for that (Pattern 9), and rendering "or **she** to us"
   would personify Death on our authority. Rendered "or **it** to us".
8. **0547A · *Sed hominibus collectis in angelis et hominibus omnis praelatio cessabit*** —
   parsed as *hominibus collectis* (ablative absolute) ∥ *in angelis et hominibus … praelatio
   cessabit*: "when men have been gathered in, among angels and men every prelacy will cease."
   ⚠ The rival parse takes *collectis in angelis* together ("men gathered among the angels"),
   which then strands *et hominibus*. **The rival loses because it leaves a dative with
   nothing to govern it**; recorded so the reader can weigh it.
9. **0548A · *et non credis jam immortalis*** — the parallel *Crederes **patri** iterum
   morituro* requires a dative, and *immortalis* is not one. Rendered "and thou dost not
   believe **one** who is now immortal", supplying the pronoun the case cannot supply. Not
   marked: this is a case defect with no English exponent worth a `[cj:]`, and Pattern 9
   governs.
10. **0548B · *a pseudo*** — Migne uses the Greek stem absolutely, where the work elsewhere
    writes *pseudoapostoli* (0546C, 0546B). Rendered "by the false one", **not** expanded to
    "false apostles": the plural would supply a number the Latin does not print.
11. **0549C · *unde sadducaeis quidam non poterant respondere*** — *quidam* nominative
    ("certain men"), *sadducaeis* dative of the persons answered. Rendered "certain men could
    not answer the Sadducees". The rival ("certain of the Sadducees could not answer") needs
    *sadducaeorum* and is refused by the case.

---

## §4 · NEGATION — test 2 and 2a, run site by site

Every printed `non · nec · neque · nisi · nihil · nullus · nunquam · ne` in 0543A–0550D was
located, its **host word named**, and the host found in the English with the negative on it.
The sites where a quantifier, correlative or predicate stood next to the verb — 2a's trigger
population — are these, and each was resolved **from the sentence's structure, not from what
read well**:

1. **0543D · *Est autem aenigma non omnis, sed obscura allegoria.*** Host = ***omnis***, not
   *est*. The `sed` correlative pivots on it. English: "an enigma is **not every** allegory,
   but an obscure one." (The wrong host gives "an enigma is not an allegory", which the next
   clause denies.)
2. **0546B · *quia sum minimus, vel tempore et vocatione, **non** dignitate, labore et
   praedicatione.*** Host = the ablative group ***dignitate, labore et praedicatione***, not a
   verb. English keeps the negative on the nouns: "whether in time and calling, **not** in
   dignity, in labour and in preaching."
3. **0546B · *cum **non** praecederent **nisi** mala merita.*** *non … nisi* is a single
   exceptive. English: "since **no** merits went before **save** evil ones" — both negatives
   accounted for, none doubled.
4. **0547A · ***nihil** horum aliquos terrenos vel coelestes habuisse ex se, sed ab illo.***
   ⛔ **The hardest site in the range.** Host = ***nihil***, the *object* of *habuisse*;
   *aliquos terrenos vel coelestes* is the accusative **subject**. The `sed ab illo`
   correlative proves the scope. English: "that **none** of these things did **any** earthly
   or heavenly beings possess of themselves, but from him from whom are all things." ⚠ The
   plausible-and-wrong reading floats the negative onto the subject — "that **no** earthly or
   heavenly beings had any of these" — which reverses what the sentence asserts (the point is
   that they *had* them, from another).
5. **0547B · *excludit majorem manifestationem, **non** ampliorem regni permanentiam.*** Host =
   ***ampliorem … permanentiam***, correlative with *majorem manifestationem*. Kept on the
   noun phrase.
6. **0547C · ***non** tantum in omnibus … **sed et** omnis creatura fatebitur.*** Host =
   ***tantum***; the *sed et* correlative fixes it. English: "**not only** in all … **but**
   every creature **also**."
7. **0545D · *quia **non** perit **unus** de pusillis.*** Host = *perit*, with the quantifier
   *unus* adjacent — 2a's exact trigger. Checked: the negative belongs on the verb here (*not
   one perishes*), because there is no correlative pivoting on *unus*. English: "because
   **not one** of the little ones perishes."
8. **0548C · *Sicut **non omnis** caro est ejusdem dignitatis.*** Host = ***omnis***. English:
   "As **not all** flesh is of the same dignity" — deliberately not "all flesh is not", which
   English hearers read as universal denial.
9. **0549D · ***non omnes** vivi reperti immutabuntur, sed **soli** sancti.*** Host =
   ***omnes***, with *sed soli* pivoting. English: "**not all** who are found alive will be
   changed, but **only** the saints."
10. **0550C · *ut in operibus suis **non** regnum Dei, sed istorum acquisitionem intueatur.***
    Host = ***regnum Dei***, correlative *sed*. English: "so that in his works he looks **not**
    to the kingdom of God, but to the getting of them."
11. **0545A · *quibus … **non** patet **vel** placet veritas.*** One *non* over two verbs joined
    by *vel*. English: "the truth **neither** lies open **nor** is pleasing" — the negative
    distributed, not doubled.

**No negative in this range was relocated, dropped, or supplied.** In particular, the two
places where expanding a clipped lemma would have *added* one (§1b: *Et sine voce*, *Si
omnino*) were left unexpanded for that reason.

---

## §5 · MARKERS FIRED, AND THE ONE `[cj:]`

- **`[sic: …]` — none.** See §0.
- **`[var: …]` — four**, §1a. All four owe plate reads (0543A, 0546A, 0548B, 0550C).
- **`[ed: …]` — none.** Nothing in this range is a demonstrated hole in the digitization
  rather than a corruption inside it; the four corruptions are §2a and are restored under
  Pattern 13a clause 1.
- **`[nt: …]` — none.** All five `[n:]` notes in my range (*(Matth. XXIII)*, *(ORIG.)*,
  *(Ose. VI)*, *(THEODOR.)*, *(AMBROS.)* — five in total) are **citations or attribution
  sigla**, not editorial prose. Passed through verbatim, untranslated, Latin abbreviations
  unanglicized. ⚠ Two of them sit **inside** an italic lemma (0543A, 0550C) and are reproduced
  inside the span, with **no asterisks inside the marker**.
- **`[cn: …]` — none present.** This range carries no recovered foot-of-page note. ⚠ **The
  plate spot check for 8981 is owed or already recorded elsewhere; I could not verify it from
  my range and did not assume a sibling book's zero.**

### The one `[cj:]` — @0546B, *Inveni*

    he says: *I have found,* etc. [cj: *Inveni*; read *Invenimur*, "we are found"]

**Why a `[cj:]` and not silence, an expansion, or a `[sic:]`.** *Inveni* is a perfectly good
Latin form, so Pattern 12 has nothing broken to wrap and the `[sic:]` question does not
arise. But the faithful English — "I have found" — **asserts something Paul does not**: the
lemma being resumed is *Invenimur autem* ("but we are found"), printed eight words earlier at
the head of the same VERS. 15, and the whole paragraph is about the Corinthians being *found*
false witnesses. That is Pattern 18's founding case exactly: real word, misleading English,
gloss additive.

**The rival I rejected:** treating *Inveni,* etc. as a **clipped resumption cue** and
rendering it by convention 3 as "*We are found,* etc." That is very likely what it is — but
convention 3 governs a *phrase* cut short, not a *word* cut short, and taking it would have
put a first-person-plural verb on the page where Migne prints a first-person singular, with
nothing to show for it. **The `[cj:]` keeps Migne's word and puts the conjecture beside it,
which is what the pattern exists to do.** If a plate read shows *Invenimur* in full, the
marker comes out and the reading is simply restored.

---

## §6 · REGISTER, AND WHAT THE MERGE LAYER SHOULD CHECK

- **"you", never "ye", in the gloss's own voice.** ⛔ **Zero occurrences of "ye" in chunks
  0010–0013** — checked by grep, not by memory. This is the site where 8993's third stint
  drifted and twelve sites had to be converted; it did not happen here.
- **"thou" is used, and only where the Latin is grammatically singular** (Pattern 17), in
  exactly five places, all of them singular address: **0548A** *si pater tuus surgeret,
  crederes? … et non credis … Crederes patri* (the interlocutor); **0548B** *Insipiens … qui
  non attendis quod quotidie vides* and **0548C** *Insipiens tu: quod seminas* (Paul's
  singular fool); **0550A** *Ne putares* (the reader); **0549C–0550B** *Ubi est, mors,
  victoria tua? … Vicisti … victa es … Victoria tua* (Death, addressed singular). Every plural
  *vos / estis / vestra* is "you" — 0545D *Per quod et salvamini*, 0546A *si non tenetis*,
  0546C *peccata vestra … estis in peccatis vestris*, 0544A *quid vobis prodero*, 0544A *ne
  sitis barbari*, 0550D *ut et vos subditi sitis*.
- **`VERS. n.--` passes through verbatim**, including Migne's two irregular forms (§2c).
- **`## CAPUT XIII.` → `## CHAPTER XIII.`** ⚠ **The launch message asked for "CHAPTER
  THIRTEEN"; I did not do that, deliberately.** Ruth's shipped English — which the same
  bullet binds me to — renders `CAPUT II.` as `CHAPTER II.`, spelling out the numeral only
  where Migne spells it (`CAPUT PRIMUM.` → `CHAPTER ONE.`). A corpus grep confirms: **zero
  occurrences of "CHAPTER THIRTEEN / FOURTEEN / FIFTEEN" anywhere in `src/english/`**, against
  `## CHAPTER XIII.` in eleven Glossa books including four in this same volume. Spelling out
  the numerals here would have made this the only work in PL 113–114 to do so, and would have
  broken the head-index vocabulary. **If the orchestrator wants the spelled forms, the change
  is one sed per file and should be made across the whole work, not in my stint alone.**
- **`(cont.)` on 0013's `CAPUT XV.` head is our chunk division, not a defect, and is not
  translated** (runbook false positive 7).
- **Em-dashes: zero** in all four chunks.
- **`*usque ad*` (Brief addendum D) occurs TWICE in my range and only ONE is the formula.**
  ⭐ **0550C · *etc.,* usque ad *nec grave est, et multum invenitur*** — the abridgment
  formula, closing the Ambrose extract; rendered "***as far as*** nor is it burdensome, and
  much is found", in its own italic span, **with no verb supplied** to complete it (8946/8978
  precedent). ⛔ **0548D · *homo ex quo concipitur* usque ad *dissolutionem*** — **NOT
  the formula**: these are the gloss's own words ("from the time he is conceived **until** his
  dissolution"), and reading them as the formula would have swallowed the sentence's subject.
  Decided per occurrence, from what stands on either side.

---

## §7 · READ CLEAN — named, so this report can be told from one by an agent who did not look

The following were examined line by line and carry **no crux, no marker, and no open
question**. Naming them is the point: a findings list alone is indistinguishable from a
fabrication.

- **0010 · the whole of CAPUT XIII** apart from the four sites in §1a/§1b/§2c that are listed
  above by column. In particular **0543B in full** (the *patiens/benigna* armour paragraph and
  the three *Omnia* lemmata) — the densest Vulgate stretch in my range and **entirely
  agreeing**, orthography aside.
- **0011 · CAPUT XIV, verses 6–19 (0544A–0544D)**, including the whole *Amen* paragraph, whose
  five italic spans and their internal punctuation are reproduced 1:1. Clean.
- **0011 · verses 26–38 (0545B–0545D)** — clean, including the *pusilli in cruce gloriantes*
  paragraph, which I checked twice because it reads smoothly where the Latin is rough (Brief
  test 5's "a sentence that reads smoothly is a suspect"): it is genuinely smooth Latin.
- **0012 · 0547A–0547C in full** — the *evacuaverit / regnare / Ut sit Deus omnia in omnibus*
  stretch, four consecutive 2a-trigger negations (§4 nos. 4–6), all resolved from structure.
  No corruption, no divergence.
- **0012 · 0548C–0549C** — the seed, the star, the natural-and-spiritual-body sequence. One
  non-word (*spituale*, §2a) and otherwise clean; every one of its fourteen lemmata agrees
  with the Clementine.
- **0013 · CAPUT XVI in full (0550C–0550D)** apart from the Mt 6:34 `[var:]`. Six lemmata, all
  agreeing; the Ambrose *usque ad* handled per §6.

### Candidates I raised against myself and rejected, with reasons

- **0549C · *In novissimo.*** for Vulg 15:52 *in novissima **tuba***. A gender/agreement
  divergence, and the gloss immediately reads it as *in novissimo **signo***. ⛔ **Rejected as
  a `[var:]`** because a clipped lemma whose ending the glossator has attracted to his own
  noun is not clean evidence of a divergent text — and the same paragraph goes on to expound
  *Haec **tuba*** and *Tubae nomine*, so the trumpet is plainly in his text. Rendered "*At the
  last.*" / "at the last sign". Logged, unmarked.
- **0549B · *quandoque **erit** spirituale*** against Vulg 15:44 *est et spiritale*. ⛔
  Rejected: the future is the **glossator's own construal**, italicised as part of his
  argument (*si modo est, animale est … quandoque erit spirituale*), not a quotation claiming
  to be the verse. No divergence to mark.
- **0546C · *quod est causa mortis*** — considered whether the missing stop after *mortis*
  might be a lost word rather than lost punctuation (which would make it an `[ed:]`). ⛔
  Rejected: the sentence is complete on both sides of the join; only the point is missing.
  Carried, §2c.
- **0547D · *Ita ut nec Christus surrexerit?*** — considered as a possible indirect question
  needing 8b's colon recasting. ⛔ Rejected: it is already **direct** ("So that not even Christ
  has risen?"), so the mark rides as printed with no recasting. 8b was not invoked anywhere in
  this range; **all twelve question marks are direct questions in both twins.**
- **0543C · *praesentem ad Deum esse*** — reads as though a word were missing. ⛔ Rejected as
  a defect: *praesentem esse ad Deum* ("to be present with God") construes as printed, and
  addendum A forbids a marker on well-formed words. Rendered literally.
