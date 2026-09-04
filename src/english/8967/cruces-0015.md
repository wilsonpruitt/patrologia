# Cruces — 8967 *Glossa ordinaria*, Liber Psalmorum, chunks 0015–0019 (cols 0870C–0883A)

Psalms XVIII–XXVIII. Stint 0015 of Band A.

⚑ **Every column label in this file was derived from the `[NNNNx]` anchors in my own Latin
chunks, not from the lemma brief.** The brief's column labels were stale when I received it
(corrected on disk 2026-09-04); membership was never affected, so §0's reconciliation stands
unchanged, but any label here that disagrees with an older copy of the brief is mine and is the
one to trust.

---

## 0. SPAN COUNT RECONCILIATION — the brief is CORRECT

`data/briefs/8967-lemmata-0015.txt` declares **330 spans**. Counted in my own Latin:

| chunk | spans |
|---|---|
| 0015 | 72 |
| 0016 | 57 |
| 0017 | 42 |
| 0018 | 84 |
| 0019 | 75 |
| **total** | **330** |

**Exact agreement.** No mis-split at either end of my range: 0015 opens on `VERS. 1.-- *In finem.*`
at 0870C, which is the brief's first line, and 0019 closes on `*Diluvium.*` at 0883A, which is its
last.

English span counts run over the Latin by exactly the number of italic runs inside my own markers
(0015 +1, 0016 +1, 0017 +0, 0018 +0, 0019 +5). Anchors, `[n:]` notes and question marks are at
1:1 parity in all five chunks; `verify-english.mjs` reports no error on any of them.

---

## 1. ⛔⛔ THE HEADLINE, AND IT IS NOT A TRANSLATION QUESTION: OUR LATIN TWIN HAS BEEN SILENTLY
## CORRECTED, AT ROUGHLY ONE SITE PER COLUMN

I read six plates for this range (archive.org `patrologiaecurs04migngoog`, PDF page =
(column + 11) / 2, re-verified against the printed corner numbers on p. 441, which reads **871**
in the left corner). **Eleven places where our chunked Latin does not say what Migne printed** —
and the direction is overwhelmingly one way: our twin is *tidier* than the plate, and tidier in
the direction of the Vulgate and of ordinary Latin.

| col | Migne's plate prints | our Latin twin reads | class |
|---|---|---|---|
| 0871C | ***Anima.** Voluntates* | ***Animas.*** | normalized **toward Vulg. Ps 18:8** (*convertens animas*) |
| 0871C | ***Sapientium** : de divinis* | ***Sapientiam:*** | normalized **toward Vulg. Ps 18:8** (*sapientiam praestans*) |
| 0871D | *Desiderabil**l**ia super aurum* | *Desiderabilia* | normalized (plate is a non-word, doubled sort) |
| 0871D | *Cibus Dei est mel ; **solutus** jam a saeculo* | *…mel; **id est,** solutus…* | **words supplied** by the digitization |
| 0875D | *Prima gratia, **locus** pascuae* | ***ocus** pascuae* | **corrupted** by the digitization (dropped L, the `PSAMUS CXXIV` class) |
| 0876B | *dicitur : **Seb** isti ad mensam divitis* | ***Sed** isti* | normalized (plate is a split non-word) |
| 0876B | ***Impinguisti** : octava* | ***Impinguasti:*** | normalized **toward Vulg. Ps 22:5** |
| 0877A | *eum **commendando** alios invitet* | *com**mm**endando* | **corrupted** by the digitization (trebled m) |
| 0877A | *Et **elevumini**. Contra portas mortis* | *Et elevamini* | normalized toward Vulg. Ps 23:7 |
| 0879B | *cor calore spiri-\|tus* (line break) | ***spiriritus*** | **corrupted** — a join artifact at the break |
| 0879D | *quia **dilexi** me facere decoram domum* | ***lilexi*** | **corrupted** by the digitization |
| 0882D | *ut cervi omne **genuo** ferarum* | ***genus*** | normalized (plate is a non-word) |

⚑ Two further sites are recorded with lower confidence because the italic *a* of this face at this
scan quality is not always separable from *u*: **0878D** *Oculi **supientis** in capite* (twin:
*sapientis*) and **0878D** *De **necessitutibus*** (twin: *necessitatibus*). Both would be
normalizations if real. **I record them as unsettled, not as findings** — a second witness
(Gallica `ark:/12148/bpt6k5505319w`, `f = (column + 1) / 2`) settles either in one HTTP request.
⭐ The control that makes them worth raising at all rather than dismissing as a scan artifact:
unambiguous italic *a*'s on the very same column (*Anima*, *usque ad*, *Semen*) image cleanly.

⚑ **What follows, and it binds any later reader of these chunks:**

1. **This is the same class 9003's stints found in the sibling Glossa Psalter (PL 114), at the
   same order of density.** It is not a local accident and it is not confined to one volume.
2. **No `[sic:]` or `[cj:]` may be fired anywhere in this range on the strength of the Latin twin
   alone.** The twin has already been cleaned of most of the plate's defects; a marker keyed to it
   would either miss the real defect or, worse, blame Migne for a reading he does not carry. My
   one `[sic:]` and my one `[cj:]` are safe **only** because I read their plate lines.
3. ⛔ **Five `[sic:]` candidates were WITHDRAWN by the plate** — *ocus*, *commmendando*,
   *spiriritus*, *lilexi*, *genus*. Every one of them read as a confident Migne defect from the
   Latin alone, and every one is ours. That ratio (5 withdrawn, 1 confirmed) is the measured
   answer to `CLAUDE.md` 8a's warning that a translating agent's attribution guess is not evidence.
4. **The fix is `data/tei-patches/8967.json` + a re-chunk**, which is outside a translating
   agent's remit and must not be done mid-batch. **I am escalating it, not doing it.**
5. **My English follows the TWIN, not the plate**, on the 9003 precedent — our English sits in a
   parallel column beside the twin — **except at the four sites where the twin is a non-word and
   there is nothing to render**: *ocus* → "a place", *commmendando* → "commending",
   *spiriritus* → "spirit", *lilexi* → "I have loved". Each takes the plate's reading, and each is
   listed here so the call can be overruled.

### 1a. ⭐ THE mod-4 CLIPPING RULE IS REFUTED — two counter-examples in my range

The launch brief's §3 stated that a left-hand column congruent to **1 (mod 4)** loses 3–5
characters at the inner margin, verified 5 of 5. **That rule is now WITHDRAWN work-wide** (the
coordinator's correction of 2026-09-04, on counterexamples from three stints). In my range:

| col | mod 4 | predicted | actual |
|---|---|---|---|
| 871 | 3 | clean | **clean** |
| 873 | 1 | clipped | **clipped** (*infirmis* prints as *firmis*) |
| 875 | 3 | clean | **clean** |
| 877 | 1 | clipped | **CLEAN** |
| 879 | 3 | clean | **clean** |
| 881 | 1 | clipped | **CLEAN** |

⛔ **Two of the three predicted-clipped columns in my range are whole.** Other stints found the
same at cols 853, 857 and 901. Work-wide tally after my six pages: **clipped** 841, 849, 873, 893,
897, 1045 · **clean** 853, 857, 871, 875, 877, 879, 881, 895, 899, 901, 1043, 1047. The clipping is
real but it is **per leaf, not arithmetic** — the rule was derived from five pages and generalized
past its evidence.

⚑ **The failure mode runs in the direction nobody audits.** Applied blind, the rule does not
produce false markers; it silently *withholds true ones* on columns this copy answers perfectly
well, and a withheld marker leaves no trace anywhere. **My `[var:]` at 0881C is exactly such a
case**: it stands on a line-opening word in a column the rule would have disqualified, and the
page shows the line whole. Predict with the rule if you like; never decide with it. Where a column
genuinely IS clipped and the marker rests on a line opening, the second witness (Gallica) is still
required — that part stands.

---

## 2. MARKERS FIRED — six, every one on a column I read at the plate

`node scripts/plate-gate.mjs 8967` reports ✓ on all six. My nine plate reads are recorded in
`data/plate-reads.json` with honest band-level `from`/`to`: I read parts of six pages, not six
whole pages, and the entries say which parts.

| col | chunk | marker | why it is licensed |
|---|---|---|---|
| 0871C | 0015 | `[sic: *Quaecunquae*]` | Plate p. 441 sets **Quæcunquæ testimonia dedit Israel** — the doubled *ae* is Migne's own, not CC's ligature expansion. A non-word; *quaecunque* is what the sentence needs. Column 871 is 3 (mod 4) and clean, and the word stands mid-line. **7a⁗:** the sense is rendered beside the marker — "Whatsoever [sic: …] testimonies he gave" — the clause keeps its subject, its verb and its object with the bracket deleted. |
| 0873D | 0016 | `[var: …]` on Ps 21:3 | Plate p. 442 confirms *Clamabo et non exaudies. Per diem, et non exaudies, et nocte et non ad insipientiam.* The Clementine has *Deus meus, clamabo per diem, et non exaudies ; et nocte, et non ad insipientiam **mihi***. Migne **doubles** the *et non exaudies* and drops *mihi*. Sense-changing: the doubling is what Cassiodorus's *non auditur ad salutem corporalem* answers. Column 873 IS clipped, but the lemma stands mid-line and is fully legible, so §3's line-opening bar does not apply. |
| 0880A | 0019 | `[var: …]` on the Ps 26 titulus | Plate p. 445 confirms **PSALMUS XXVI. / VERS. 1. — *In finem.* (AUG., CASS)**. The Clementine heads Ps 26 *Psalmus David, priusquam liniretur.* — no *In finem* at all. Material, and the gloss proves it material: it expounds *De prima unctione per quam certificatur secunda*, which answers to *priusquam liniretur* and to nothing in *In finem*. Right-hand column, never clipped. |
| 0880B | 0019 | `[cj: *corruptionem*; read *incorruptionem*]` | Plate p. 445 confirms *Quem trepidet, caro, cum induerit **corruptionem***. Pattern 18 exactly: the word is real, correctly set, unbroken, and the faithful English ("when it shall have put on corruption") asserts the opposite of the consolation the sentence is making — the flesh has nothing to fear once it has put on **in**corruption (1 Cor 15:53–54, and Augustine's own text). Migne's word keeps its English and the conjecture stands beside it. ⭐ Chosen over `[var:]` deliberately: the phrase is unitalicized gloss prose, not a marked scripture citation, so Pattern 14's population does not include it; and over `[sic:]`, because the type is not broken at all. |
| 0881C | 0019 | `[var: …]` on the Ps 27 titulus | Plate p. 446 confirms **PSALMUS XXVII. / *Psalmus huic.*** The Clementine heads Ps 27 *Psalmus ipsi David.* Material, and again the gloss shows it: the very next clause is *Per David aliquando intelligitur caput* — the exposition depends on a *David* that Migne's own titulus no longer prints. Column 881 is 1 (mod 4), and the lemma opens its line — **but the column is CLEAN on this copy** (see §1a), which is what licenses it. |
| 0882D | 0019 | `[var: …]` on Lc 10:19 | Plate p. 446 confirms *Dedi, enim ait, vobis potestatem **conculcare super** serpentes.* The Clementine has *Ecce dedi vobis potestatem **calcandi supra** serpentes*. A different verb in a different construction, and the gloss's whole image is the trampling. Right-hand column. |

⚠ Per Pattern 14 none of these say **why** the readings differ. Migne's compositor, his copy-text,
an Old Latin reading and the glossator's memory are all live, and telling them apart is research.

---

## 3. 7a″ — THE VULGATE COLLATION. This is the deliverable, and it includes the clean ones.

Every lemma in my range was read word by word against `sources/vulgate/clementine-flat.txt` before
its English was written. **Six divergences took a marker (§2). The rest are below, INCLUDING the
ones that agree exactly** — a list of findings alone cannot be told apart from a report by an
agent that never looked.

### 3a. Divergences found, marker DECLINED, with the reason

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 0872A | *Delicta **enim** quis intelligit?* | Ps 18:13 *Delicta quis intelligit?* | Plate p. 441 CONFIRMS the *enim*. But it is a connective the gloss supplies to hinge its own sentence (*nec mirum:*), and it changes no sense whatever. Not material; Pattern 14's bar is "in a way that changes the sense." |
| 0872C | *caecitas ex parte contigit in Israel, et sic omnis Israel salvus fieret* | Rom 11:25 + 11:26 | Not a divergence at all: the words are exact, and the omitted *donec plenitudo gentium intraret* is an **elision across the verse boundary**, the ordinary abridgment move. Nothing to mark. |
| 0874A | *Dicentes: **Spera** in Domino* | Ps 21:9 *Speravit in Domino* | A deliberate recast into direct address — the gloss is quoting what the Jews **say**, in irony. Not a textual divergence, and 0874A is a column I did not read: the ship test forbids the marker either way. |
| 0874C | *Tanquam cera* · 0874D *Aruit **tanquam** testa* | *tamquam* | Orthography only (*tanquam*/*tamquam*), and Migne's normal spelling throughout the volume. Never material. |
| 0874C | *De ventre matris meae, Deus meus* | Ps 21:11 *de ventre matris meae **Deus meus es tu*** | A clipped lemma, not a variant; the copula is simply cut. Convention 3, no marker. |
| 0876A | *Nam et si* | Ps 22:4 *Nam etsi* | Word division only. |
| 0876B | *Qui manducat et bibit indigne* | 1Cor 11:29 *Qui **enim** manducat* | Plate p. 443 confirms Migne drops *enim*. A dropped connective at the head of a quotation introduced by *de qua Apostolus*; no sense turns on it. Declined for the same reason as 0871D — and recorded so the two are visibly decided the same way. |
| 0876B | *capite descendit unguentum in barbam barbam Aaron, et in oram* | Ps 132:2 *Sicut unguentum **in capite**, quod descendit in barbam, barbam Aaron, **quod descendit** in oram* | A compression, not a variant. ⚑ **The doubled *barbam barbam* is the Clementine's own reading and is NOT dittography** — I checked it specifically because it looks exactly like a Pattern 11 `[d:]` candidate. Declined, and recorded as a checked negative. |
| 0876C | *Psalmus David.* (Ps 23) | Ps 23:1 *Prima sabbati. Psalmus David.* | Migne prints the second half of the titulus only. Not a divergence — and the gloss quotes the missing half in its own voice (*In prima sabbati mundus conditus*), which proves he had it. |
| 0878D | *Oculi sapientis in capite, id est, in corde ejus* | Ecl 2:14 *Sapientis oculi in capite ejus* | Word order inverted and *id est, in corde ejus* is the glossator's own, printed inside the italic. Attributed on the plate to *Sal.* (Solomon), which is a memory quotation by construction. Inversion changes no sense; declined. |
| 0879A | *Psalmus.* (Ps 25) | Ps 25:1 *In finem. Psalmus David.* | A bare one-word titulus. ⚑ Deliberately **not** contrasted with the Ps 22/23 tituli: per the shared brief's closing section, a clipped lemma and a complete one-word lemma are different classes, and manufacturing an inconsistency between them is the error three readers made in one batch. Column 879A not read; no marker available regardless. |
| 0882B | *Psalmus David in consummatione* | Ps 28:1 *Psalmus David, in consummatione **tabernaculi*** | Clipped before *tabernaculi*, and the gloss puns on *consummatione* alone (*ut se offerant tali consummatori*). Convention 3, no marker. |
| 0880B | *quaeritur* — see §2 | | the `[cj:]`; listed there. |

### 3b. Lemmata checked and found to AGREE with the Clementine exactly

Recorded because a checked negative is worth having. Ps 18: *Coeli enarrant* (18:2), *Dies diei*
(18:3), *In sole*, *Tabernaculum suum*, *De thalamo*, *Gigas ad currendam* (18:6), *Nec est qui se
abscondat* (18:7), *Lex Domini* (18:8), *Justitiae Domini* (18:9), *Timor Domini* (18:10),
*Desiderabilia super aurum* (18:11 — the twin's spelling; see §1), *Ab occultis* (18:13). Ps 19:
*Exaudiat*, *In die tribulationis*, *Dei Jacob* (19:2), *Mittat*/*Auxilium* (19:3), *Memor*,
*Sacrificii* (19:4), *Tribuat*, *Omne* (19:5), *Laetabimur* (19:6), *In potentatibus*, *Salus
dexterae* (19:7). Ps 20: *Domine in virtute tua laetabitur* (20:2), *Quoniam praevenisti*,
*Coronam* (20:4), *In salutari tuo: gloriam et magnum decorem*, *super eum* (20:6), *In gaudio cum
vultu tuo*, *Quoniam rex sperat in Domino* (20:7), *Inveniatur manus tua* (20:9), *Fructum eorum
de terra perdes, et semen eorum* (20:11), *Quoniam pones* (20:13), *Exaltare* (20:14). Ps 21:
*Deus, Deus*, *Respice in me*, *Quare me dereliquisti*, *Longe a salute mea* (21:2), *In sancto
habitas*, *Laus Israel* (21:4), *In te speraverunt patres nostri, speraverunt* (21:5), *Ego autem*,
*Vermis et non homo, opprobrium* (21:7), *Ab uberibus*, *De ventre* (21:10–11), *Ne discesseris a
me*, *Tu extraxisti*, *Spes mea ab uberibus*, *In te projectus sum* (21:11–12), *Circumdederunt*
(21:13), *Aperuerunt*, *Sicut leo* (21:14), *Sicut aqua*, *In medio ventris mei* (21:15), *Aruit …
testa virtus mea*, *Lingua mea* (21:16), *Foderunt* (21:17), *Dinumeraverunt omnia ossa mea*,
*Inspexerunt me* (21:18), *Diviserunt sibi vestimenta mea* (21:19), *Unicornium, humilitatem meam*
(21:22), *Qui timetis Dominum, laudate eum* (21:24), *Timeat eum omne semen Israel, quoniam non
sprevit*, *Pauperis* (21:25), *Apud te laus mea in Ecclesia magna* (21:26), *Laudabunt Dominum qui
requirunt eum: vivent* + *Corda eorum … convertentur ad Dominum* (21:27–28, continuous across the
verse boundary and exact on both sides), *Manducaverunt et adoraverunt*, *In conspectu ejus cadent*
(21:30), *Annuntiabitur* (21:32). Ps 22: *Psalmus David*, *Dominus regit me* (22:1), *In loco
pascuae*, *Super aquam* (22:2), *Animam meam*, *Deduxit*, *Super semitas* (22:3), *Mecum es*,
*Virga tua* (22:4), *Parasti in conspectu*, *In conspectu meo mensam*, *Et calix meus* (22:5), *Et
misericordia* (22:6), *Et ut inhabitem* (22:7). Ps 23: *Domini est terra* (23:1), *Et super flumina*
(23:2), *Quis ascendet* (23:3), *Quis stabit*, *Innocens*, *Qui non accepit*, *In vano* (23:4),
*Attollite*, *Et elevamini*, *Portae aeternales* (23:7), *Quis est* (23:8), *Dominus fortis*,
*Fortis*, *Potens*, *Potens in praelio*, *Virtutes* (23:10). Ps 24: *In finem*, *Ad te, Domine,
levavi* (24:1), *Confido*, *Neque irrideant me inimici*, *Supervacue*, *Vias tuas, Domine,
demonstra* (24:2–4), *Doce*, *Deus salvator meus* (24:5), *Reminiscere*, *Miserationum*, *Quae a
saeculo* (24:6), *Delicta*, *Juventutis*, *Ignorantias*, *Memento mei, tu*, *Secundum
misericordiam* (24:7), *Dulcis*, *Rectus*, *Propter hoc*, *In via* (24:8), *In judicio* (24:9),
*Misericordia et veritas*, *Testamentum* (24:10), *Propter nomen tuum, Domine* (24:11), *Quis est
homo* (24:12), *Anima*, *Semen*, *Firmamentum est* (24:13–14), *Unicus* (24:16), *De
necessitatibus* (24:17), *Respice* (24:19), *Innocentes et recti adhaeserunt* (24:21), *Israel*
(24:22). Ps 25: *Judica*, *In innocentia* (25:1), *Proba me*, *Ure renes* (25:2), *Misericordia*,
*Complacui in veritate* (25:3), *Non sedi*, *Odivi*, *Vani* (25:4–5), *Malignantium* (25:5),
*Lavabo*, *Et altare*, *Inter innocentes* (25:6), *Vocem laudis* (25:7), *Domine*, *Dilexi decorem*
(25:8), *Ne perdas*, *cum impiis* (25:9), *Dextera eorum* (25:10), *Pes*, *stetit*, *in directo*
(25:12). Ps 26: *Dominus illuminatio*, *Dominus protector vitae meae*, *A quo trepidabo* (26:1),
*Super me nocentes*, *edant*, *carnes*, *Infirmati sunt* (26:2), *Castra*, *In hoc ego* (26:3),
*Unam petii*, *Omnibus diebus vitae meae*, *Ut videam* (26:4), *In abscondito* (26:5), *Circumivi*
(26:6), *Exaudi, Domine, vocem meam* (26:7), *Tibi dixit*, *Cor* (26:8), *Ne avertas*, *Ne
declines*, *Salutaris meus* (26:9), *Quoniam pater*, *patrem*, *Matrem* (26:10), *Legem pone mihi*
(26:11), *Tribulantium* (26:12), *Credo videre*, *Bona* (26:13), *Exspecta* (26:14). Ps 27: *Ad te,
Domine*, *Ne sileas*, *et assimilabor* (27:1), *Ad templum* (27:2), *Da illis* (27:4), *Quoniam
non*, *Destrues*, *Benedictus*, *Dominus* (27:5–7), *Salvum*, *Et rege*, *Extolle* (27:9). Ps 28:
*Afferte Domino*, *Filios arietum*, *Vox Domini* (28:1–3), *Libani*, *Cedri Libani* (28:5),
*Desertum* (28:7), *Dominus* (28:10), *Diluvium* (28:10).

⚑ **Two spans in the brief carry a `⚠ NOT in Clementine verbatim` that is answered by Migne
himself, not by us.** At **0880D** the gloss prints *Alia littera: **Ut contempler delectationem
Domini*** — Migne is announcing his own variant against Ps 26:4's *ut videam voluptatem Domini*,
so a `[var:]` would be re-asserting what the text has just said. And at **0880D** *avertat vultum*
is the glossator paraphrasing Ps 26:9's *Ne avertas faciem tuam*, inside his own sentence, and
italicized as a catchword rather than quoted. Neither is a divergence in Migne's scripture.

---

## 4. THE HARD READINGS — where I chose, and what decided it

### 4a. 0876B `Sed isti ad mensam divitis` — the most interesting crux in the range, and it is DECLINED

Our twin prints *De hac dicitur: **Sed isti** ad mensam divitis, id est, Christi, scito et te
similia debere praeparare*. That does not construe: *Sed isti* has no verb and no antecedent, and
the sentence then swings to a second-person imperative.

**The plate (p. 443) reads `Seb isti`** — a non-word in italic, and the *b* is unmistakable at 300 dpi.

⚑ The conjecture I believe is right, and the reason it is in the crux and not in the text:
**`Sedisti`** — "thou hast sat at the table of a rich man; know that thou too must prepare the
like," which is the well-attested school form of Prov 23:1–2 and supplies exactly the verb and the
person the sentence is missing. The plate's *Seb* + *isti* is then a broken *d* plus a word division
at the wrong place — Pattern 10's split-run shape.

⛔ **I did not fire anything.** A `[sic:]` may only wrap type carried verbatim from the plate, and
our twin does not carry *Seb*; a `[cj:]` requires Migne's printed word to appear verbatim in the
twin, and *Sedisti* appears in neither. The honest state is: the twin is wrong, the plate is
broken, the conjecture is strong, and **the repair belongs in `data/tei-patches/8967.json`**, after
which a `[sic: *Seb isti*]` with the conjecture beside it becomes both possible and correct.
My English renders the twin as it stands — "*But these at the table of the rich man,*" — which is
deliberately as rough as the Latin.

⭐ The rival I weighed and rejected: reading *isti* as a dative ("but to that man, at the table of
a rich man…"). It loses because it still leaves the clause verbless and it does not explain the
plate's *b*.

### 4b. `usque ad` — the formula, and one look-alike

The italic `*usque ad*` splice formula occurs **44 times** in my range (45 occurrences of the
words in all) and is rendered **"as far as"** in every one — the English carries exactly 44 — including the three that carry Migne's own punctuation into the span
(`*usque ad,*` at 0871D, `*usque ad: Dirige,*` at 0877C, `*usque ad Dulcis,*` at 0878A — the
punctuation and the extra word ride as printed).

⚑ **One occurrence is NOT the formula and is not italicized, and I checked it rather than
assuming:** 0870D *haec doctrina diebus et noctibus continuatur **usque ad** posteros* — this sits
inside the resumption tail of a formula that has already fired, it is unitalicized, and its sense
is extent in time. Rendered **"down to those who come after."** Per axis 6, the axis governs the
formula, not the words wherever they occur.

### 4c. `Diapsalma` / `Diapsalmus` — unanglicized, and ROMAN, and here is why

Three occurrences: *Diapsalma* at 0872C (Ps 19:5) and 0872D (Ps 20:4), *Diapsalmus* at 0877A
(Ps 23:7). All three pass through **unanglicized** per launch brief §2.2 — never "Selah," never
"pause."

⚑ **But all three are set ROMAN in my Latin, not italic, and the plate agrees** (p. 444 confirms
*Attollite. Diapsalmus.* with the term in roman while *Attollite* is italic). The brief's phrasing
is "italic **as Migne sets it**"; Migne does not set it italic here. I have kept them roman, which
also preserves the sacred 1:1 italic-span parity — italicizing them would have introduced three
English spans with no Latin twin. ⚑ **Flagging it for the merge**: if the other stints in this
band italicized theirs, the band is inconsistent and mine is the one that follows the plate.

⚑ Note also that Migne prints **two forms** of the word, *Diapsalma* and *Diapsalmus*, within four
columns. Both ride as printed; neither is normalized to the other.

### 4d. `In finem` — 5 occurrences, all "Unto the end."

0870C (Ps 18), 0872B (Ps 19), 0872D (Ps 20), 0877B (Ps 24), 0880A (Ps 26). ⚑ Two further
occurrences are **lowercase and not the lemma** and are rendered as ordinary prose: 0870C
*respicit in finem, id est, Christum* and 0882B *per totum hoc saeculum usque in finem*. Never "for the
choirmaster." ⭐ Psalm 18's own gloss in my very first line is the argument in miniature:
*hic propheta respicit **in finem**, id est, Christum, vel in ultima tempora* — the commentary
glosses the lemma as END and as Christ, and a "choirmaster" rendering would leave that sentence
expounding a word not on the page.

### 4e. The *gentes* axis — two occurrences, decided opposite ways

- **0871A** *qui **omnes gentes** in unum erat congregaturus* — Pentecost, all tongues, no
  Jew/Gentile opposition in view. **Generic → "all nations."**
- **0882C** *spiritum timoris dedit **Judaeis et gentibus*** — the opposition is printed in the
  sentence itself. **→ "to the Jews and to the Gentiles."**

⚠ **I checked the instrument before reporting either.** A raw `natio` grep over my range returns
zero true hits; `\bgentes` catches nothing else. There is no `natio`, no `gentilis`, no
`gentilitas`, no `ethnicus`, no `turba`, no `multitudo`, and no `daemonium` anywhere in cols
0870C–0883A. **`diabolus` occurs twice** (0876C *a principe diabolo*, 0881B *saeculum pater vel
diabolus*) and is "devil" in both. `mysterium` occurs **twice** (0874C *legis mysteria*, 0877B *novo mysterio*) and `sacramentum`
**five times** (0871A, 0872A, 0874C, 0876B, 0880A); they are 1:1 throughout, and 0874C carries
both **in adjacent sentences** — *sacramentum ablutio peccatorum* and *legis mysteria comparat
cerae* — which is where the axis is settled mechanically.

### 4f. The unexpressed subject — every supplied pronoun, and what decided it

| col | Latin | supplied | what decided it |
|---|---|---|---|
| 0870C | *de gloria Christi in qua Patris aequalis* | "**he** is equal to the Father" | *Christi* stands in the same clause; nothing else is masculine nominative. |
| 0871C | *Omnes in illo recte* | "**All** are right in him" | The subject is *Justitiae* from the lemma above, feminine plural. English takes the bare "All" rather than "they," which would float. |
| 0871D | *cujus voluntatem suae praeponit* | "**whose** will **he** sets before his own" | The one who desires — the psalmist of *Desiderabilia*, from the lemma above. |
| 0872B | *quae tempore tribulationis vult **ei** fieri* | "to be done **for her**" | *Ecclesiae* in the immediately preceding paragraph, and the psalm is read of the Church throughout. ⚠ *ei* is ambiguous in gender; the antecedent is not. |
| 0872B | *ut sicut **illi**, ita tibi … det* | "as to **him**, so to thee" | Dative singular answering *Dei **Jacob*** in the same clause. ⚑ A nominative plural *illi* ("as they did") also parses; I record it as a rival and take the dative because the lemma is *Dei Jacob* and the sentence is about what God gives. |
| 0874B | *ab uberibus enim facit, quod vix maturus* | "**one** scarcely come of age" | *vix maturus* has no noun; the comparison is to a man, from *vera humanitas* two clauses earlier. |
| 0877D | *non ergo in me fallat* | "let **him** not fail in me" | God, the addressee of *Reminiscere miserationum tuarum*. |

### 4g. Negation fidelity — the sites where carrying the printed word makes the sentence odd

⭐ **0870D–0871A is the one that would have been repaired silently.** Migne prints:

> *Planius diceret, in quibus **non** audiantur voces eorum, vel, omnium sermonum audiantur voces
> eorum: illud idem facit per relativum.*

The first limb has the *non*; **the second does not**, and the two limbs are offered as
alternatives (*vel*). Read straight, the gloss offers "in which their voices are not heard" and
"the voices of all their words are heard" as the same thing, which they are not. **I carried both
exactly as printed** and did not supply a *non* in the second limb. Column 871A was read at the
plate (p. 441) and it prints exactly this. It is Migne's, and it is the kind of thing this edition
exists to show.

⚑ Test 2a sites — a negative resting on a verb with a correlative nearby — fired twice, and both
were re-hosted from the sentence's structure rather than from what read well:

- **0879D** *quia **non eis**, sed concordat domui Dei*. The *non* looks as though it sits on
  *concordat*. The `sed` correlative shows it governs *eis*. Rendered "**because it is not with
  them, but with the house of God, that he agrees**," not "because he does not agree with them."
- **0880B** *ut maledico dente **non me**, sed carnalia desideria consumant*. Same shape, same
  resolution: the negative is on *me*, and the English puts it there — "so that with their cursing
  tooth they consume **not me**, but my carnal desires."

Other negatives carried without incident and checked individually: 0871C *qui non docuit quod non
fecit* (two), *non serviliter* · 0871D *non foras mittitur* · 0872A *Non est majus delictum* ·
0873C *non justitiae, sed delictorum* · 0873D *non exaudies* (twice), *non ad insipientiam*,
*nullae in eo tenebrae*, *non auditur* · 0874A *Vermis et non homo* · 0874B *non vir*, *non in
peccata hominis*, *Nec conceptio sine Deo, nec in peccato* · 0874C *non ad sapientiam reseratum* ·
0874D *Non ut fenum* · 0875A *ne in majorem numerum crescerent* · 0875B *sed non tunica desuper*,
*quam nemo potest dividere* · 0875C *Non ejus qui*, *non tumentis*, *non praesumi* · 0875D *non
prohibeat*, *non pro instructione* · 0876C *qui non permanent* · 0876D *non deputavit animam rebus
non permanentibus* (two), *non juravit in dolo*, *nullis eam fecibus* · 0877D *non erubescam*, *in
nullo sustinente patienter fallit* · 0878A *Non pro aetate*, *quae mala esse non scimus*, *nemo
bonus nisi Deus* · 0878B *non ex crudelitate* · 0879B *Non angelorum* · 0879C *non merita, sed
misericordiam*, *ne quid delicti remaneat*, *non asperitas*, *non sedi* · 0879D *non est locus veri
sacrificii extra* · 0880A *Ne perdas* (twice), *quibus hic non communico* · 0881A *non aliud quam
doces* · 0881A *non nisi unam*, *non putat iram, nisi si avertat vultum* · 0881B *Non in ira
declinat* · 0882A *non optare*, *non secundum quod* · 0882B *nec etiam visibilia*, *ut nihil mihi
noceat, nec post*, *ne laedantur*, *Ne declinent*.

⚑ **Every one of these is present in the English, on the word it attaches to in the Latin** — the
test run was Test 2's, not "are all the negatives present."

⭐ **And it was also checked mechanically, band by band**, which is the shared brief's test 3 applied
to negation rather than to punctuation: 105 negative tokens in the Latin, partitioned by the
column anchors (which are verified 1:1), against the English's. **No band anywhere in my range has
Latin negatives and zero English negatives** — the direction that would betray a lost negation.
⚠ Five bands flagged the other way (0870C, 0872B, 0872D, 0876C, 0882D: Latin 0, English >0) and
**all five are the instrument, not the text** — an `un\w+` pattern catching *unto*, *unicorn*,
*unheard* and *unlettered* (the last rendering *illiterati*, whose negative is real and Latin).
Checked before reporting, per the shared brief's standing warning that every one of these greps
manufactures a number that reads like a violation.

### 4h. Punctuation ridden as printed

- **0873A** the gloss breaks off: *Ideo **super eum,** quoniam dabis . . . . .* — **five spaced
  points, reproduced verbatim.** Migne's ellipsis, not ours, and not a lost passage.
- **0879C** *vel ipsa ustio est misericordia, non asperitas* — **our twin prints no closing
  period**, and the English carries none. ⚑ The plate (p. 445) DOES print one; this is a
  twelfth CC departure, of the punctuation class, and it is listed here rather than in §1 because
  it changes no word.
- **0874D** `[n: (CASS.)]: foderunt.` — the colon stands **after** the note. Carried in place.
- **0873A / 0880A** `[n: (ID.)].` and `[n: (AUG.)],` — the note's own trailing mark rides with it.
- **0882A** `[n: ( Ibid. )]` — Migne's internal spacing inside the siglum, carried verbatim.
- Question marks: 3 / 1 / 5 / 1 / 3 across the five chunks, at parity with the Latin, and **none
  supplied.** ⚑ The one place I wanted to supply one and did not: `VERS. 13.-- *Delicta quis.*` at
  0872A is the fragment of Ps 18:13 *Delicta quis intelligit?*, and convention 3 expands a fragment
  to the phrase it stands for — but Migne prints a **period**, so the English reads
  "*Who understandeth sins.*" with a period. Four lines later the same words return as a full
  quotation with Migne's own `?`, and there the English has one.

### 4i. `(ID.)` and `(Ibid.)` never expanded

**38 `(ID.)` and 13 `(Ibid.)`** in my five chunks, every one passed through verbatim and
unexpanded, per launch brief §4. Note that the sigla vary in case and form across my range —
`(CAS.)` at 0871B, `(CASS.)` everywhere else; `(Hier.)`, `(HIER.)` and `(Hier., AUG.)` all within
two columns; `(AUG., CASS.)` and `(CASS., AUG.)` both occur. **All ride exactly as our twin sets
them.** Migne's attributions in this recension are unreliable and passing one through is not
endorsing it.

---

## 5. WHAT I READ CLEAN, AND WHERE A BLIND READER SHOULD GO FIRST

**Read clean:** the whole of Ps 19 (0872B–0872D) and Ps 20 (0872D–0873B) — short, formulaic, and
every lemma agreeing with the Clementine; Ps 22's ten-graces sequence (0875D–0876C) apart from the
*Seb isti* crux; Ps 24's *Reminiscere*/*Delicta juventutis* stretch (0877D–0878B).

**Go here first:**

1. **§1's table.** It is the finding with consequences beyond this range, and eleven of its twelve
   rows can be confirmed or refuted from one Gallica request each.
2. **0876B `Sed isti`** (§4a) — the one place where our Latin column prints a sentence that cannot
   be construed and the English is deliberately rough.
3. **0880B `corruptionem`** (§2) — the only `[cj:]`, and the only place a reader could believe the
   Glossa asserts the opposite of what it means.
4. **0870D–0871A**, the *non* that appears in one limb and not its twin (§4g). If someone later
   "repairs" it, the repair will read better than the truth, which is the signature of the class.
5. **0870D** *et ipsi eidem facti nox, tenebrosis scientiam quae de humanis* — an abridgment
   resumption tail that I rendered as closely as the words allow ("and these same are made night to
   him, giving to the darkened the knowledge which is of things human") and do not claim to have
   fully construed. *scientiam* is an accusative with no governing verb in the surviving text.
   ⚑ Per the shared brief's §5: the splice removes words, it does not suspend grammar — the tail is
   genuinely defective here, not merely elliptical, and I am naming it rather than smoothing it.
6. **0877C** *usque ad qui non per omnes, minus perfectos* — a second tail of the same kind,
   rendered flat ("who not through all, the less perfect") because no reading of it is secure.

## 6. WHAT I DID NOT DO

- **No `data/tei-patches/8967.json`.** Twelve entries are owed (§1) and re-chunking mid-batch would
  rewrite every stint's Latin. Escalated.
- **No second-witness check at Gallica** for the two low-confidence italic *a*/*u* sites (§1) or
  for the eleven confirmed ones. One request each; it is the cheapest open item in this range.
- **No expansion of `(ID.)`/`(Ibid.)`**, no reordering of anything, no Hebrew invented — the one
  *In Hebraeo* clause in my range (0881D, *Minus est in Hebraeo*) asks for nothing.
