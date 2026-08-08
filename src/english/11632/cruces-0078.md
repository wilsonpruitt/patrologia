# Cruces — 11632 chunks 0078–0083 (cols 0374A–0386C)

Philip of Harvengt, *Commentaria in Cantica canticorum*, PL 203. Six chunks,
5,313 Latin words, covering **Book IV, *Caput* XIII–XX** — the exposition of
Cant. 4:4b–4:8: *Mille clypei pendent ex ea* → *Duo ubera tua sicut duo hinnuli*
→ *Vadam ad montem myrrhae* → the *alia translatio*'s *Ibo mihi ad montem
myrrhae* → *Tota pulchra es amica mea* → *Veni de Libano, Sponsa mea* →
*Coronaberis de capite Amana*, expounded twice over, first *in malo* (the three
mountains as the wicked spirit, *Caput* XIX) and then *interpretatione dextera*
(the same three as preachers and apostles, *Caput* XX).

**No book head falls in this range.** The `CAPUT` numeration runs XIII → XX
continuously, all in numerals, all with the stop, none tidied.

**Marker totals for this range: 2 `[var:]` · 0 `[sic:]` · 0 `[ed:]` · 0 `[d:]` ·
0 `[nt:]` · 0 `[f:]`.** `verify-english.mjs` reports **no errors** on any of the
six (the run's failure is the 42 not-yet-translated chunks after 0083). One ratio
warning — 0078 at 1.61 — inside the band this work has already shipped (0004
1.64, 0005 1.68, 0046 1.68, 0064 1.66). Ratios: 1.60 / 1.55 / 1.57 / 1.59 /
1.54 / 1.56.

Column anchors (8/9/10/5/9/9), `[n:]` strings (4/1/3/0/1/7 — each matching its
frontmatter `noteCount`, total 16) and guillemet characters were diffed **1:1
against the Latin twins by script, not by eye**: anchors byte-identical in order
and place, `[n:]` contents byte-identical in order.

⚠ **The guillemet asymmetry the extraction flagged in 0083 is real and is
mirrored, not balanced**: the Latin twin prints **5 « and 4 »**, and the English
prints 5 « and 4 ». The unclosed one is the Gal. 1:16 quotation at 0385C — see
§6.1. Chunks 0080 (2/2) and 0082 (1/1) are balanced; 0078, 0079, 0081 carry none.

---

## §1 · ⭐⭐ THE TWO FINDINGS THE MERGE SHOULD CARRY FIRST

### 1.1 · Acts 10:13 at 0384C — *Macta* for the Vulgate's *occide*, and Philip has glossed the divergent verb in the clause before it

Migne prints, guilleted, under a correct siglum:

> « Macta, inquit, et manduca [n: (Act. X)]. » (0384C)

The Vulgate, Acts 10:13, reads *Surge, Petre, **occide** et manduca* (and again
at 11:7). *mactare* is not *occidere*: it is to slaughter as a **sacrifice**, to
immolate.

**Why it is material, and why the `[var:]` fired.** The word is not incidental —
Philip has just used it himself, in the sentence that introduces the quotation:
*cui dum offertur linteum plenum animalibus… **mactare** et manducare non
realiter, sed mysterio mandatur spiritali.* The whole point of the paragraph is
that the command is **not literal butchery but a spiritual mystery**, and
*mactare*, a sacrificial verb, is the word that carries it. Conform the lemma to
*occide* and the gloss five words earlier is expounding a word that is no longer
in the proof-text — precisely the 7a″ mechanism.

The span is **guilleted**, so unlike §8a's class its boundary is printed and a
`[var:]` is available. Fired at 0384C:
`[var: Vulg. Acts 10:13 *occide et manduca*, "kill and eat"]`

⚑ It does **not** elide the divergence (brief §8 warning): both Vulgate words are
inside the marker, and the English renders Migne's verb as "Slay", not "kill".
The marker's content is not a verbatim substring of the Latin twin (Pattern 14's
`[ed:]` mirror test): the twin has *Macta… et manduca*, never *occide*.

### 1.2 · ⭐⭐ 0385A — Virgil quoted VERBATIM, adduced explicitly as an authority, with a note, and Migne prints NEITHER guillemets NOR italics. This is an INTERNAL control on brief §7.

Migne prints, as running text inside Philip's own paragraph:

> Dolus, inquit, an virtus, quis in hoste requirat? [n: (Virgil. II Aeneid.)]
> (0385A — reproduced here without italics and without guillemets, because **the
> plate prints neither**)

It is **Aeneid** ii. 390, word for word (*dolus an virtus, quis in hoste
requirat?*), with Migne's capital *D* and Philip's Pattern 5 *inquit* inserted.
And Philip frames it as an adduced authority in the strongest terms available to
him — *apud antiquos **celebri est sententia promulgatum**, et, ne illud deleret
oblivio, **apud ethnicos litteris est mandatum*** — the same *ethnicorum* frame
brief §7 records for the unmarked Sallust at 0314A.

⭐ **What makes it evidence rather than one more instance: brief §7 records that
Migne GUILLEMETS Virgil at 0251D** (*« Dii, si qua est pietas coelo »*). **Same
poet, same work, one marked and one not.** That needs no appeal to anything
outside 11632 — it is the *(Marc. XV)* / *(Matth. XXVII)* shape of §8b applied to
typography instead of to a siglum. The conclusion the brief already draws is
confirmed a fourth time and now from the inside: **there is no predictive rule to
find here; there is only the plate.** Nothing was tidied in either direction, and
no mark was supplied.

⚑ It is also the range's **only `[n:]`-only hit** (§2a) and the only
non-scriptural citation among sixteen notes.

---

## §2 · THE COLLATION — all 47 listed spans, plus 21 found on the prose pass

Every span in `data/quotations/11632/0078-0083.md` was collated word by word
against the Vulgate. **Spans recorded as AGREES were collated and found to agree;
the absence of a marker on them is a finding, not a silence.**

### 0078 (cols 0374A–0376A) — 6 spans, 4 notes, 0 guillemets

| Span | Verse | Verdict |
|---|---|---|
| *Mille clypei pendent ex ea, omnis armatura fortium.* | Cant. 4:4b | **AGREES** word for word. |
| *Quod enim de femina circumdatura virum longe ante praedixit Jeremias* `[n: (cap. XXXI)]` (`[n:]`-only) | Jer. 31:22 | **Philip's prose.** Vulg. *creavit Dominus novum super terram: **femina circumdabit virum***. His future participle *circumdatura* is governed by his own *praedixit*. **No marker.** Siglum correct. |
| *quod de Virgine conceptura et paritura filium Isaias* `[n: (cap. VII)]` (`[n:]`-only) | Isa. 7:14 | **Philip's prose.** Vulg. *ecce virgo **concipiet et pariet** filium*; the two future indicatives become his two future participles. **No marker.** Siglum correct. |
| *quod de porta non aperta Ezechiel* `[n: (cap. XLIV)]` (`[n:]`-only) | Ezek. 44:2 | **Philip's prose**, and not even near-verbatim: Vulg. *Porta haec **clausa** erit, non aperietur*, where Philip writes *porta **non aperta***. **No marker.** Siglum correct. |
| *quod de virga Aaron Moyses mirabiliter praesignavit* `[n: (Num. XVII)]` (`[n:]`-only) | Num. 17:8 | **Philip's prose** (a bare allusion; no words of the Vulgate survive). **No marker.** Siglum correct. |
| *Duo ubera,* (0376A) | Cant. 4:5 | Lemma cue. |

Marginal source-edition number: *215* (0374B–C).

### 0079 (cols 0376A–0378B) — 5 spans, 1 note, 0 guillemets

| Span | Verse | Verdict |
|---|---|---|
| *Duo ubera tua sicut duo hinnuli **gemelli capreae** qui pascuntur in liliis, donec aspiret dies, et inclinentur umbrae.* | Cant. 4:5 + 4:6a | ⚑ Vulg. *Duo ubera tua sicut duo hinnuli **capreae gemelli**, qui pascuntur in liliis* — **the two words are transposed**, nothing else. *donec aspiret dies et inclinentur umbrae* is Vulg. 4:6a, correctly, and the verse is **split by Philip's own chapter division**, its second half becoming the *Caput* XV lemma. Sense untouched (Pattern 14 threshold): *gemelli* qualifies *hinnuli* either way. **Logged, no marker.** |
| *duo* (0376B) · *duo,* (0376B) | — | The word discussed as a word (brief §7 italic class). Not a quotation. |
| *Hic igitur Virgo pascit… ubi juxta prophetiam* `[n: (Jer. XXXI)]` *a minore Deus usque ad maximum cognoscetur* (`[n:]`-only) | Jer. 31:34 | **Philip's prose** — but the closest call in the range. Vulg. *non docebit ultra vir proximum suum… cognosce Dominum: **omnes enim cognoscent me a minimo eorum usque ad maximum***. Philip recasts to a passive future with *Deus* as object and drops *eorum*. ⚠ **And he prints *a minore*, a comparative, for the Vulgate's superlative *a minimo*** — rendered **"from the lesser even to the greatest"**, NOT Douay's "from the least". A 7a″ trap declined. **No marker** (§8a: prose). Siglum correct. |
| *Vadam ad montem myrrhae, et ad collem thuris.* | Cant. 4:6b | **AGREES** word for word. |

Marginal numbers: *216* (0376A) · *217* (0377D).

### 0080 (cols 0378B–0380D) — 4 spans, 3 notes, 2 guillemet pairs

| Span | Verse | Verdict |
|---|---|---|
| *Ibo mihi ad montem myrrhae.* (0378C) | Cant. 4:6b | ⭐ **Not a variant of the lemma — Migne SAYS it is another version**: *Unde **alia translatio** habet: Ibo mihi ad montem myrrhae.* Philip's own apparatus, on the same footing as the `[ *alias* …]` bracket of brief §10.7: **no `[var:]` fires**, the reading is rendered as printed ("I will go for myself to the mountain of myrrh"), and the ethical dative *mihi* is expounded for three lines (*ibo mihi, illi quidem consulere… sed et mihi*) so it must not be smoothed away. **Logged in full; this is the range's one *alia translatio*.** |
| « Ecce, inquit, ancilla Domini `[n: (Luc. I)]`. » | Luke 1:38 | **AGREES word for word** (the Pattern 5 *inquit* displacing nothing). Siglum correct. |
| *Tota pulchra es amica mea, et macula non est in te.* | Cant. 4:7 | **AGREES** word for word, Migne's comma after *pulchra es* apart. ⭐ ***amica mea* = "my friend"**, brief §5's ruled lemma, matched — see §5.1. |
| « Nemo mundus a sorde `[n: (Job XV)]`.--Non est homo qui non peccet `[n: (II Par. VI)]`. » | Job (see §3) · 2 Par. 6:36 | ⭐ **`[var:]` FIRED on the first — see §3.** The second: Vulg. 2 Par. 6:36 reads *si autem peccaverint tibi, **neque enim est** homo qui non peccet*; Migne's *Non est homo qui non peccet* is that clause with the connective changed at the left edge, and it matches **3 Reg. 8:46** (*non est enim homo qui non peccet*) word for word but for *enim*. Nothing is asserted that neither passage asserts, and both printed negations are carried. **Logged, no marker.** Siglum defensible for 2 Par. 6:36. |

⚠ **Two verses inside ONE guillemet run, divided by Migne's own `--`.** Reproduced
exactly, with the second note inside the closing » and the `--` in place; the
`[var:]` is placed *after* the closing », so nothing of ours sits inside Migne's
quotation.

Marginal number: *218* (0379B).

### 0081 (cols 0380D–0382A) — 8 spans, 0 notes, 0 guillemets

| Span | Verse | Verdict |
|---|---|---|
| *Veni de Libano, Sponsa mea, veni de Libano, veni.* | Cant. 4:8a | **AGREES** word for word. |
| *Veni,* · *de Libano, sponsa mea.* · *Veni de Libano sponsa.* · *Veni de Libano,* · *sponsa,* · *de Libano Sponsa,* | Cant. 4:8a | Six re-quotations of the same three-word lemma, all **AGREEING** with the head lemma and with the Vulgate. ⭐⭐ **But the capitalization of *Sponsa* changes under them — see §6.2, which is this range's principal §7a datum.** |
| *Coronaberis,* (0382A) | Cant. 4:8b | Lemma cue. |

Marginal number: *219* (0380D).

### 0082 (cols 0382A–0384B) — 7 spans, 1 note, 1 guillemet pair

| Span | Verse | Verdict |
|---|---|---|
| *Coronaberis de capite Amana, de vertice Sanir, et Hermon, de cubilibus leonum, de montibus pardorum.* | Cant. 4:8b | **AGREES** word for word; Migne's comma after *Sanir* is punctuation only (Vulg. *de vertice Sanir et Hermon*) and is preserved. ⭐ ***cubile* = "couch"** — see §5.2. |
| *dens vigilans,* · *avis nocturna,* · *fetor.* · *exsecratio,* · *anathema ejus.* | — | **Not quotations**: the etymologies of Amana, Sanir and Hermon, italicized by Migne as words discussed as words (brief §7). **All five are translated**, not carried as Latin — they have clean English exponents and the whole of *Caput* XIX and XX is built on them. See §5.3. |
| « Exsecratio autem peccatori sapientia `[n: (Eccli. I)]`, » | Ecclus. 1:25 | Vulg. *…et scientiae religiositas: exsecratio autem **peccatoribus** sapientia.* Migne prints the **dative singular** *peccatori* for the plural *peccatoribus*. The surrounding exposition is about one hardened man throughout (*nequam ille **miserum** amplius cor obdurat*), so the singular is if anything the reading his argument wants; nothing turns on the number, and Pattern 14's sense threshold is not met. **Logged, no marker.** Siglum correct. ⚠ Migne prints the comma **outside** the closing » (`sapientia [n:], »`); reproduced as printed, not moved. |

Marginal numbers: *220* (0382B) · *221* (0384A).

### 0083 (cols 0384B–0386C) — 17 listed spans, 7 notes, 5 «/4 »

| Span | Verse | Verdict |
|---|---|---|
| *De capite Amana, de vertice Sanir et Hermon,* etc. | Cant. 4:8b | **AGREES**; the head-lemma cue, printed here **without** the comma after *Sanir* that 0082's full lemma carries. Both mirrored. |
| *dens vigilans* · *avem nocturnam* · *exsecratio,* · *anathema* · *ejus* · *anathema ejus,* | — | The etymologies again, and *ejus* discussed as a word. Not quotations. |
| *Dens autem vigilans, praedicator ille… linteum plenum animalibus, vel potius more viventibus animali* `[n: (Judae 19)]` (`[n:]`-only) | Acts 10:11–12 + Jude 19 | **Philip's prose.** The sheet-and-beasts is Acts 10:11–12 narrated, not quoted; the note hangs on the single word *animali*, for which **Jude 19's *animales, Spiritum non habentes*** is exactly right. **No marker.** ⭐ Siglum **correct**, and it is a §8b "log the ones that are RIGHT" item: it names a book the narrative does NOT come from and is nevertheless right, because it is keyed to the word and not to the story. ⚠ It is also the only siglum in the range using an **arabic verse number**; reproduced. |
| « Macta, inquit, et manduca `[n: (Act. X)]`. » | **Acts 10:13** | ⭐⭐ **`[var:]` FIRED — see §1.1.** Siglum correct. |
| « Peccata populi mei comedent `[n: (Ose. IV)]`. » | Hos. 4:8 | **AGREES word for word.** Siglum correct. |
| *Dolus, inquit, an virtus, quis in hoste requirat?* `[n: (Virgil. II Aeneid.)]` (`[n:]`-only) | **Aeneid** ii. 390 | ⭐⭐ **VERBATIM, and unmarked — see §1.2.** The range's only `[n:]`-only hit and its only non-scriptural note. Siglum correct. **No `[var:]`** (§8a: the plate marks it as neither quotation nor lemma, so its boundary is not printed). |
| « Quae mihi, ait, fuerunt lucra, haec arbitror ut stercora `[n: (Philip. 3)]`. » | Phil. 3:7 + 3:8 | ⚑ **A fusion of two verses, every word verbatim.** Vulg. 3:7 *Sed quae mihi fuerunt lucra, haec arbitratus sum propter Christum detrimenta*; 3:8 *…et arbitror ut stercora*. Migne joins 3:7's protasis to 3:8's verb, cutting the intervening clause. **No marker** — the cruces-0000 item-12 conflation precedent, and the same judgment cruces-0066 made on John 3:11 / 1 John 1:3. **Logged.** Siglum correct. ⚠ Arabic chapter numeral, second of two in the range. |
| « Non acquievi, ait Paulus, carni et sanguini `[n: (Galat. I)]`. | Gal. 1:16 | **AGREES word for word.** Siglum correct. ⚠⚠ **This is the UNCLOSED « — see §6.1.** The extraction listed it twice, once as the head of a RUNAWAY span and once as `[n:]`-only; it is neither — it is a guilleted quotation whose » Migne never prints. |
| *Coronaberis de capite Amana, de vertice Sanir et Hermon.* (0385C) | Cant. 4:8b | **AGREES.** ⭐ And it is set against Philip's own **counterfactual, which Migne prints UNITALICIZED**: *Non enim dictum est: Coronaberis de Amana, de Sanir, de Hermon, sed* + the italic lemma. The whole argument is head-and-top against bare names; **the italic/roman split is the argument's punctuation and is mirrored exactly** — no italics supplied on the counterfactual. |
| « Levavi, ait, oculos meos in montes, unde veniet auxilium mihi `[n: (Psal. CXX)]`. » | Ps. 120:1 | **AGREES word for word.** Siglum correct. |
| *Coronaberis,* (0386C) | Cant. 4:8b | Lemma cue. |

Marginal number: *222* (0385D).

### 2a · The `[n:]`-only class — **hit rate 1 of 7, and the hit is Virgil**

The extraction lists **9** `[n:]`-only spans. **Two of the nine are not of the
class at all**: the Gal. 1:16 and Ps. 120:1 spans at 0385C and 0386B *are*
guilleted, and appear as `[n:]`-only only because the unclosed « at 0385C threw
the extractor's bracket-matching (it also emitted the intervening 700 words as a
RUNAWAY). That leaves **seven genuine `[n:]`-only spans**:

- 0374C ×4 (Jeremias, Isaias, Ezechiel, Moyses) — **Philip's prose**, all four:
  each is a *quod… praedixit/prophetavit/praesignavit* clause governed by his own
  finite verb, with the scriptural words recast into participles.
- 0377C (Jer. 31:34) — **Philip's prose**, and the near miss of the range: the
  clause endings are his (*docetur / cognoscetur*), and he prints *a minore* for
  *a minimo*.
- 0384B (Jude 19 / Acts 10:11–12) — **Philip's prose**; the note keys a single
  adjective.
- 0385A (**Aeneid** ii. 390) — ⭐ **A HIT. Verbatim, adduced as an authority, and
  unmarked.**

**Hit rate: 1 of 7.** Running total across the ranges that have reported it:
**1 of 90.** ⚑ Two things the merge should note about this hit. First, it is
the class's first positive since wave 1's Rom. 8:10 — so the class is not empty,
and a null-result argument built on 83 misses would have been wrong. Second, it
is **not scripture**, which is new: the mechanism (a quotation Migne notes but
does not mark) is indifferent to what is quoted, and a `[n:]`-only pass that
looks only for Bible verses will not see the next one either.

### 2b · Found ONLY on the prose pass — unmarked, unnoted, invisible to the extractor

**Twenty-one** scriptural weaves carrying **no guillemets, no italics and no
`[n:]`.** None takes a marker (brief §8a); all are recorded so the merge has the
population.

| Col | Printed | Source | Note |
|---|---|---|---|
| 0375B | *Christum **Dei virtutem et Dei sapientiam** non inveniunt in Scriptura* | 1 Cor. 1:24 | ⭐⭐ **An INTERNAL CONTROL on cruces-0066 §2b, and it should be counted as one.** That range recorded 0352B printing *Christum Dei **sapientiam et virtutem*** — the pair reversed and the second *Dei* dropped. **Here the same phrase is printed in the Vulgate's own order with both *Dei*s intact.** So the 0352B form is a local recasting, not a copy-text reading of Philip's Bible: the work sets it right twenty-three columns later. Prose (governed by his *non inveniunt*), **no marker**. |
| 0375D | *non quaerentibus et non interrogantibus se objecit* | Rom. 10:20 / Isa. 65:1 | Vulg. *Inventus sum a **non quaerentibus** me: palam apparui iis qui me **non interrogabant***. Both negations verbatim; the verb is Philip's. Prose. |
| 0375C | *verbum bonum quod ipsum cor Dei Patris ineffabiliter **eructavit*** | Ps. 44:2 | Vulg. *Eructavit cor meum verbum bonum*. Prose — the subject is changed from the psalmist's heart to the Father's. |
| 0375A | *dies sanctificatus nobis olim caligantibus jam illuxit* | liturgical (*Dies sanctificatus illuxit nobis*) | The Christmas gradual, not a Vulgate verse. Prose; logged because it reads like scripture and is not. |
| 0374D | *nec in ea seris aut vectibus est inclusum* | cf. Job 38:10 / Ps. 147:13 | Faint. Logged for completeness only. |
| 0376D | *manuque sollicita **a turbine et a pluvia** nos abscondit* | Isa. 4:6 | Vulg. *…in securitatem, et absconsionem **a turbine et a pluvia***. Five words verbatim, inside his own clause. Prose. |
| 0376D | *sanat lacte medico quidquid **aspis** venefica superfundit* | cf. Ps. 57:5 / Deut. 32:33 | Prose. The asp returns, noted, at 0383B. |
| 0377B | *candore morum et odore boni testimonii* | cf. 2 Cor. 2:15 | Prose. |
| 0379C | *sanctusque supervenit et obumbrans ei **Spiritus** dat virtutem* | Luke 1:35 | Vulg. *Spiritus sanctus superveniet in te, et virtus Altissimi obumbrabit tibi.* All three key verbs survive, redistributed into his own clause; **and the word order splits *sanctus* from *Spiritus*** — see §6.3. Prose. |
| 0379D | ***Velle** quidem **adjacet**, sed luctam contradictoriam experitur* | Rom. 7:18 | Vulg. *nam **velle adiacet** mihi*. Two words verbatim, and the whole surrounding paragraph (0379D–0380A: the good law willed and not performed, the will knocking and the flesh resisting) is a sustained unnoted paraphrase of Rom. 7:15–23. Prose. |
| 0380A | *cujus caro quieta est, nec **adversus spiritum** insolescit* | Gal. 5:17 | Vulg. *caro enim concupiscit **adversus spiritum***. Prose. |
| 0381C | *quem **filia Jephte** negligens quasi devovet et deplorat* | Judg. 11:37–38 | Narration, no Vulgate words. Prose. |
| 0381C | ***virga Jesse** prudenter eligens* | Isa. 11:1 | Vulg. *egredietur virga de radice Jesse*. Prose. |
| 0382D | *cum ignavus **instar bovis ad victimam ducitur**, imo seducitur* | Prov. 7:22 | Vulg. *statim eam sequitur **quasi bos ductus ad victimam***. Near-verbatim, with *instar* for *quasi* and Philip's own *seducitur* pun. Prose. |
| 0383B | *aurem quoque, **instar claudit aspidis et obturat*** | Ps. 57:5 | Vulg. *sicut **aspidis** surdae et **obturantis** aures suas*. Prose. |
| 0383C | *tanquam **leo insidians de cubili*** | cf. Ps. 9:30 / Lam. 3:10 | Prose; the *cubile* of the lemma pulled into a scriptural image. |
| 0383D | *nunc quasi **leo rugiens quaerit quem devoret** furiosus* | 1 Pet. 5:8 | ⚑ Vulg. *tamquam **leo rugiens** circuit **quaerens quem devoret***. Six words verbatim but for the finite verb; **the strongest unmarked scriptural candidate in the range after §1**, and the sentence Philip builds his lion/leopard antithesis on. Prose (his *nunc… nunc* frame and *furiosus*), **no marker**. |
| 0384A | *ut **lutum platearum** calcat Virgo fortiter et emollit* | Ps. 17:43 / Mic. 7:10 | Vulg. *quasi **lutum platearum** delebo eos*. Two words verbatim. ⭐ ***platea* = "street"**, brief §5's ruled word, rendered "the mire of the **streets**" — see §5.4. Prose. |
| 0384D | *pastor bonus, qui **non dormit** super nostram custodiam **nec dormitat*** | Ps. 120:4 | ⭐ Vulg. *Ecce **non dormitabit neque dormiet** qui custodit Israel.* Both verbs present, both negations carried, the pair reversed and the tense levelled. **And it is Ps. 120 — the same psalm Migne guillemets at 0386B**, two columns later: one printing marked, one not, inside one chapter. Prose, **no marker**; logged as a small internal control of the same shape as §1.2. |
| 0385A | *jam vigiles, **ut aquila pullos provocat ad volandum*** | Deut. 32:11 | ⚑ Vulg. *Sicut **aquila provocans ad volandum pullos** suos*. Every content word verbatim, the participle turned finite. **The second-strongest unmarked candidate**, and it sits four lines from §1.2's Virgil, which Migne DID note — so the two classes are adjacent on one column. Prose. |
| 0385D | *manente sic Joanne, Christum specialiter est secutus* | John 21:19 + 21:22 | Vulg. *Sic eum volo **manere** donec veniam* + *sequere me*. Prose, a fusion of the two. |
| 0386A | *contra **spiritalia nequitiae** pugnaturus* | Eph. 6:12 | Vulg. *adversus **spiritualia nequitiae** in caelestibus*; *spiritalia* is Migne's habitual spelling (Pattern 9). Prose. |
| 0386B | *cum tanquam **vivos lapides** Sponsus ordinet et disponat* | 1 Pet. 2:5 | Vulg. *et ipsi tamquam **lapides vivi** superaedificamini*; the pair inverted inside his own accusative. Prose. |
| 0385D | *quos propheta nominat **optimates, capita populorum*** | **unidentified** | ⚠ **Recorded as unresolved rather than guessed.** Philip attributes it to "the prophet" and Migne notes nothing. *optimates* is Vulgate vocabulary (Num. 21:18; Nah. 3:10) but I can find no verse joining it to *capita populorum*, and the nearest collocation, Ps. 46:10's *principes populorum*, has neither word. **The merge should treat this as an open identification, not as prose I have cleared.** No marker either way. |

---

## §3 · THE SECOND `[var:]`, IN FULL — Job at 0380B

Migne prints « **Nemo mundus a sorde** `[n: (Job XV)]` » as the first half of a
two-verse guilleted run introduced by *De qua scriptum est*.

**No Vulgate verse reads thus.** Job 14:4 — the verse this sentence is
everywhere quoted for — reads *Quis potest facere mundum de immundo conceptum
semine? nonne tu qui solus es?* Job 15:14, the chapter Migne's note names, reads
*Quid est homo ut immaculatus sit, et ut iustus appareat natus de muliere?*
Neither contains *sordes*, and neither is a *nemo* clause.

**Fired, and here is the reasoning, stated so the merge can reverse it.** The
divergence is not a word but the whole shape of the sentence: a universal
negative for a rhetorical question. Philip adduces it, with 2 Par. 6:36, to prove
that a residual *macula* clings to every one of us *dum hic vivimus* — and a
reader who checks Job 14:4 or Job 15:14 in the Vulgate will find neither the
words nor the form. That is exactly the situation Pattern 14 exists for.

`[var: Vulg. has no clause in this form; the nearest is Job 14:4, *Quis potest
facere mundum de immundo conceptum semine?*]`

⚠ **What the marker deliberately does NOT say.** *Nemo mundus a sorde* is the
familiar medieval form of Job 14:4–5 in the Old Latin (*quis enim mundus erit a
sorde? nec unus, etiam si unius diei fuerit vita eius super terram*), and that is
almost certainly its origin. **I did not put it in the marker**, because I cannot
collate a Vetus Latina text from anything committed to this repository, and brief
§8's warning names precisely this failure — a `[var:]` that "quotes a Vulgate
found in no edition." The marker asserts only what is checkable: that the
received text has no such clause, and what its nearest verse is. **The Old Latin
conjecture lives here, in the crux, where it belongs.**

⭐ **And the note is off by exactly one chapter**, which is brief §8b's first named
mechanical profile: `(Job XV)` where the sense-verse is Job **XIV**. Reproduced
verbatim, corrected nowhere (§10.2); no following *Ibid.* depends on it. See §4.

---

## §4 · MIGNE'S SIGLA — sixteen, fifteen correct

Reproduced verbatim, none corrected (brief §10.2). Together with cruces-0066's
thirteen-of-fourteen this range further supports §8b's revised statement:
**no siglum in this work is systematically wrong.**

| Col | Printed | Verdict |
|---|---|---|
| 0374C | `[n: (cap. XXXI)]` | **Correct** — Jer. 31:22. ⚑ Note the bare `cap.` with no book name, because *Jeremias* stands in the sentence; four such in one column. |
| 0374C | `[n: (cap. VII)]` | **Correct** — Isa. 7:14. |
| 0374C | `[n: (cap. XLIV)]` | **Correct** — Ezek. 44:2. |
| 0374C | `[n: (Num. XVII)]` | **Correct** — Num. 17:8. ⚑ The book IS named here, in the same series, because *Moyses* is the subject and *Numeri* is not. |
| 0377C | `[n: (Jer. XXXI)]` | **Correct** — Jer. 31:34. |
| 0379B | `[n: (Luc. I)]` | **Correct** — Luke 1:38. |
| 0380B | `[n: (Job XV)]` | ⚠ **The one problem — off by one chapter (§3).** |
| 0380B | `[n: (II Par. VI)]` | **Correct** — 2 Par. 6:36. |
| 0383C | `[n: (Eccli. I)]` | **Correct** — Ecclus. 1:25. |
| 0384B | `[n: (Judae 19)]` | ⭐ **Correct** — Jude 19, keyed to the word *animali*, not to the Acts narrative it sits inside. A §8b "right one" worth logging. ⚠ Arabic verse number. |
| 0384C | `[n: (Act. X)]` | **Correct** — Acts 10:13 (the `[var:]` is about the wording, not the reference). |
| 0384C | `[n: (Ose. IV)]` | **Correct** — Hos. 4:8. |
| 0385A | `[n: (Virgil. II Aeneid.)]` | ⭐ **Correct** — *Aeneid* ii. 390. The only non-scriptural siglum in the range, and the only one naming an author. |
| 0385B | `[n: (Philip. 3)]` | **Correct** — Phil. 3:7–8. ⚠ Arabic chapter number, second of two. |
| 0385C | `[n: (Galat. I)]` | **Correct** — Gal. 1:16. |
| 0386B | `[n: (Psal. CXX)]` | **Correct** — Ps. 120:1. |

⚑ **A numeral-style observation worth the merge's tally.** Fourteen of sixteen
sigla use Roman numerals; **two use arabic — `(Judae 19)` and `(Philip. 3)`** —
and they sit twenty lines apart in one chunk, beside eleven Roman ones. Not a
defect; recorded because a siglum-normalizing sweep would erase it.

---

## §5 · CONVENTIONS SET OR HELD IN THIS RANGE

1. ⭐ **`amica mea` = "my friend" — HELD at Cant. 4:7, brief §5's ruled recurrence.**
   The brief names 1:8, 2:10, 2:13, 4:1, 4:7, 5:2 and 6:3; **4:7 falls here**, at
   0379C, and is rendered *Thou art all fair, **my friend**, and there is not a
   spot in thee.* ⚑ And Philip supplies a second, unforced confirmation eight
   lines earlier, at 0376A: *agit quod agere proprium est **amici**, qui pariter
   arbitratur quidquid de **amica** commendabile potest dici* — masculine and
   feminine of the same noun in one clause, glossing the lemma before it arrives.
   "My love" would sever that sentence from its lemma. **Rendered "friend" in
   both.**
2. ⭐ **`cubile` = "couch" — HELD from cruces-0060 §5.1, and Cant. 4:8's
   *de cubilibus leonum* is where the hold costs something.** Douay renders it
   "from the **dens** of the lions", and "dens" is the natural English. But
   cruces-0060 fixed *cubile* = couch against *lectulus* = little bed and *lectus*
   = bed, on Isa. 57:8's *dilatasti cubile tuum*, and within a work there is one
   voice. **It also turns out to be the better reading here**, which is worth
   recording: Philip's whole apostolic exposition at 0386A is *cubilia… in quibus
   se **deponunt** reges* and *quid nisi leo **stratus** in cubiculi apostolico
   **requiescit***. Kings lay themselves down; the lion lies stretched out and
   rests. A den is entered, a couch is lain on, and every verb in the sentence is
   a lying-down verb. **Rendered "couches" at all five occurrences** (0382A lemma,
   0382B, 0383C, 0383D, 0386B) — and *lectulo* at 0383A, in the same chunk, keeps
   its ruled **"little bed"** (*in **lectulo** caliginis sub lodice*), so the two
   words stay apart exactly as brief §5 requires. *cubiculum* = "chamber" (0381D,
   0386A).
3. ⭐ **The three mountain etymologies are TRANSLATED, not carried as Latin**, on
   the brief §5 *candidatio* principle (italic Latin is for words with no English
   exponent; these have clean ones, and the argument is unreadable without them).
   Fixed for the range and for any later recurrence:
   - *dens vigilans* = **a watching tooth** (Amana) — held through the
     *praedicator… vigili… dentem mordacius* exposition of 0384C.
   - *avis nocturna* / *avem nocturnam* = **a night bird**; *nocturna avis* at
     0385C likewise.
   - *fetor* = **a stench**, with *fetidus* = "fetid" and *fetoribus* =
     "stenches", kept apart from *sentina* = **bilge** (0383A, 0385B).
   - *exsecratio* = **execration**, with the verb *exsecratur* = "execrates" and
     *exsecrandum* = "execrable" — **the root is kept visible in English at all
     nine occurrences**, because *Caput* XIX turns on the hardened man execrating
     what religion holds and *Caput* XX on the preacher execrating what he
     preaches against. "Abomination"/"curse" would break the chain.
   - *anathema* = **anathema**, and *anathema ejus* = **his anathema**, with the
     gloss *anathematis anathema* = "the anathema of an anathema" and *separatio
     separationis* = "the separation of separation".
   ⚠ *ejus* at 0385B is Migne's italic **word-discussed-as-a-word**, and is
   rendered as the English word it is (*his*) inside the italics, not carried.
4. **Brief §5 vocabulary held:** ***platea* = "street"** (0384A, *lutum
   platearum* → "the mire of the streets"), matched to chunk 0051 and to
   cruces-0060 §5.2, **not** to Douay · ***Scriptura* = "Holy Scripture"** — see
   §5.5 · *Sponsus* = Bridegroom, *Sponsa* = Bride, *Virgo* = Virgin, with §6.2's
   and §6.3's lower-case instances mirrored · ***fortes* = "the valiant"** and
   *fortitudo* = "valour", held from cruces-0066 §7.2 at Cant. 4:4's *omnis
   armatura **fortium*** and through *Caput* XIII's eight re-uses ·
   ***caprea* = "roe" · *hinnulus* = "fawn"**, held from cruces-0060 §5.4 at
   Cant. 4:5 · ***aspirare* = "to breathe" · *inclinari* = "to be bowed down"**,
   held from cruces-0060 §5.3: Cant. 4:6a reads "until the day **breathe**, and
   the shadows **be bowed down**", matching 0060 and 0061 exactly, and Philip's
   own *dies suavior **aspirabit*** at 0377B reads "a sweeter day shall breathe"
   so that the pun with *exspirabit* ("shall breathe its last") survives ·
   *thus/thuris* = **frankincense**, matched to 0069 · *charitas*, *clementia*,
   *misericordia*, *muraenula*, *vermiculatas*, *cancelli*, *nigra/fusca/formosa*,
   *recti*, *torcular*, *cellaria*, *adolescentulae*, *moralitas*, *candidatio*,
   *vicus*, *tomus* **do not occur in this range**.
5. ⚑ **Pattern 3 fires SIXTEEN times in this range, and fourteen of them are on
   BARE forms** — by a wide margin the densest cluster the work has produced, and
   all of it in *Caput* XIII, whose subject IS Holy Scripture. Recorded in full,
   because brief §5's ⚑ warns that a sweep matching *divina* / *sacra* / *sancta*
   would catch **none of them**:
   - accusative *Scripturam* (0374A) · genitive singular *Scripturae* (0374C
     *Scripturae veteris*, 0375B *Scripturae facies*, 0375C *Scripturae
     beneficium*) · genitive plural *Scripturarum* (0374D, 0375A ×4, 0375C) ·
     ablative *in Scriptura* (0375B ×3, 0383A) · nominative *Scriptura* (0383A,
     *non admittitur commonitio, **non Scriptura***).
   - **All rendered "Holy Scripture"**, matching cruces-0060 §5.5's treatment of
     the bare genitives at 0334C and 0339B. The work's bare-form tally is now:
     *in Scripturis* (0260A) · *Scripturae* gen. sg. (0307D, 0339B, 0374C, 0375B,
     0375C) · *Scriptura* nom. (0294A, 0383A) · *Scripturarum* (0334C, 0374D,
     0375A ×4, 0375C) · *Scripturam* acc. (0374A) · *in Scriptura* abl. (0375B ×3,
     0383A).
   - ⚠ **ONE exception, and I flag it as a judgment.** At 0374C Migne prints
     *seriem **Scripturae veteris***, with Philip's own adjective. Pattern 3 names
     the Bible **as a whole**; *Scriptura vetus* names a part of it, and "the
     sequence of the old Holy Scripture" both reads badly and asserts something
     the Latin does not. **Rendered "the old Scripture"**, capital S, without the
     fixed name. If the merge prefers uniformity it should change this one and
     nothing else in the list.
6. **Pattern 17 — checked against the morphology, not the addressee.**
   - **Singular → *thou*:** the whole of Cant. 4:5's *Duo ubera **tua***, Cant.
     4:7's *Tota pulchra **es**… in **te***, Cant. 4:8's *Veni… **Coronaberis***,
     and Philip's expansion of the last, which is a sustained second-person
     singular address to the Virgin: *Tu, ait, **quae** montem Libanum novo munere
     **candidasti**, quae candorem virgineum… **sublimasti**, **veni*** (0381C) ·
     *ut **quae gaudes**… **exsultes*** (0381D) · *non ut a virginitatis proposito
     jam **desistas**, sed ut mihi largitori **jungaris**… et **assistas*** ·
     *te averte… te converte… **jucunderis**… **coroneris*** (0382A). Every one
     morphologically singular; rendered *thou / thee / thy* without exception,
     roughly thirty tokens in chunk 0081 alone.
   - **Plural → *you*:** exactly once, at 0380B — *ut **vobis** verum fatear* —
     Philip addressing his readers. Rendered "that I may confess the truth to
     **you**", inside a paragraph whose surrounding first person plural (*nostri
     similis*, *dum hic vivimus*, *nostris oculis*) is unaffected.
   - The Bridegroom's *Vadam / Ibo mihi* speech (0377D–0378C) is **first person**
     throughout and takes neither.
7. **New fixed equivalences this range had to set**, offered to the merge:
   - ***clypeus* = "shield" · *scutum* = "buckler"**, kept distinct. Migne uses
     the second to gloss the first at 0374D–0375A (*amantibus obtulit quasi
     **scuta**. **Scuti** cava planities civem protegit*), so a single English
     word would make the gloss say "she offered them shields; a shield's hollow
     surface…" and lose the fact that Philip has changed nouns. ⚠ **This is the
     reverse of Douay**, which gives "a thousand **bucklers**" at Cant. 4:4;
     the lemma word takes the commoner English so that the glossing word can take
     the rarer.
   - ***millenarius* = "the thousand" · *centenarius* = "the hundred" ·
     *denarius* = "the ten" · *unitas* = "unit"**, as substantives — the same
     construction cruces-0066 §7.2 fixed for *senarius* / *denarius* /
     *sexagenarius*, and the arithmetic of 0374B (*ex decem unitatibus denarius,
     ex decem denariis centenarius… ex totidem centenariis millenarius*) is
     unreadable if any two collapse.
   - ***affectus* = "affection" · *effectus* = "effect"**, held rigidly through
     *Caput* XIV, where the two breasts ARE the pair (*Ex his ergo duobus
     uberibus videlicet **affectu et effectu***) and Philip rhymes them nine
     times. Neither may become "feeling" or "result".
   - ***candor* = "whiteness" · *candidare* = "to whiten" · *decor* =
     "comeliness" · *pulchritudo* = "beauty" · *pulchra* = "fair"**, fixed at
     *Caput* XVII–XVIII, where *Tota pulchra es* runs straight into Libanus's
     *candor* and the two must not blur (*mirum in modum ipsa **candidior**
     Libanum **candidaret**, **decorem**que virgineum ipsa sui merito
     **decoraret***). This also keeps faith with brief §5's *candidatio* ruling —
     the whiteness words are Englished, never carried.
   - ***macula* = "spot"** at the lemma and through its whole exposition (0379C–
     0380C, eleven occurrences), **but "mesh" where the word is a net's**:
     0378B *amoris tamen **maculas** non evadit* ("escapes not the **meshes** of
     love") and 0383D *ad texendas fraudium **maculas*** ("to the weaving of the
     **meshes** of frauds"), both governed by escape- and weave- verbs. ⚠ The
     split is deliberate and is logged as a judgment: Philip plays on both senses,
     and *maculosus* of the leopard (0383D, 0386A) is a third, "spotted".
   - ***vertex* = "top" · *summitas* = "summit" · *caput* = "head"**, fixed at
     Cant. 4:8b, because 0385D distinguishes all three in one sentence (*vertex
     vero, ipsius capitis **summitas** appellatur*).
   - ***dolus* = "guile" · *fraus* = "fraud"/"fraudulence" · *virtus* = "valour"
     (in the Virgil context) / "virtue" (elsewhere)**. ⚠ The last is a genuine
     split inside one chunk: 0385A's *sola **virtutis** praestantia* and *Dolus…
     an **virtus*** are military and take "valour" (matching cruces-0066's
     *fortitudo*); 0386A's *virtute propria non securus* is moral and takes
     "virtue". Logged because a mechanical check would read it as drift.
   - ***praelati* = "prelates" · *ordo apostolicus* = "the apostolic order" ·
     *chorus apostolicus* = "the apostolic choir" · *optimates* = "chief men"**,
     fixed at 0385D.

---

## §6 · TYPOGRAPHY, PATTERN 7 AND PATTERN 8

### 6.1 · ⚠ The unclosed « at 0385C — mirrored, not balanced

Migne opens « before *Non acquievi, ait Paulus, carni et sanguini* `[n: (Galat.
I)]` at 0385C **and never closes it.** The next » on the plate belongs to the
Ps. 120:1 quotation at 0386B, roughly 470 words later. Under Pattern 5's
corollary and brief §7a the asymmetry is Migne's: **the English opens « at the
same word and supplies no », so the twin counts match exactly at 5 « / 4 »**
(diffed by script).

⚑ **The practical consequence, and it is what the extraction warned about.** The
missing » made the script treat everything to 0386B as one RUNAWAY span and
re-list two real quotations as `[n:]`-only. **Nothing inside that stretch is a
quotation except the two guilleted ones at its ends** — I read the whole of it as
Latin, and it is continuous exposition (head/top, prelates/apostles, Peter,
kings, leopards). The three unmarked weaves it does contain (John 21, 1 Pet. 2:5,
Eph. 6:12) are in §2b.

### 6.2 · ⭐⭐ §7a's drift point: the Cant. 4:8 lemma prints *Sponsa* twice and *sponsa* three times, in ninety words

This is the range's principal mirroring datum and it is **mechanically checkable
against the Latin twin**, which is why it is worth stating exactly:

| Col | Printed | Rendered |
|---|---|---|
| 0380D (head lemma) | *Veni de Libano, **Sponsa** mea* | "my **Bride**" |
| 0381C | *Veni, inquit, de Libano, **sponsa** mea.* | "my **bride**" |
| 0381D | *Veni de Libano **sponsa**.* | "**bride**" |
| 0381D | *nec additur **sponsa**,* | "**bride**" |
| 0381D | *nec apponit, de Libano **Sponsa**,* | "**Bride**" |

Five printings of one lemma word inside one chapter, capital–lower–lower–lower–
capital. **Do not regularize in either direction.** ⚑ And note the trap: the
argument of *Caput* XVIII is precisely that the word *sponsa* is **dropped** at
the second repetition and again at the third, so a translator tidying the case is
one keystroke from tidying the presence.

### 6.3 · §7a elsewhere in the range — mirrored word by word

- ⭐⭐ **A chapter-level shift, counted rather than eyeballed. *Caput* XIV (0376A–
  0377D) prints 14 capitals (*Virgo* ×8, *Virginis* ×4, *Sponsus*, *Sponsi*) and
  3 lower case; *Caput* XV (0377D–0378B), the very next chapter, prints 13 tokens
  and NOT ONE capital** (*virginem* ×3, *virgine* ×3, *virginis* ×2, *virgini*
  ×2, *sponsus* ×2, *sponso*). All 30 mirrored — "the Virgin"/"the Bridegroom" in
  XIV, "the virgin"/"the bridegroom" in XV. ⚑ **And the shift begins BEFORE the
  chapter head**, which is the part worth having: XIV's three lower-case tokens
  are its last three (*largo **virginis** beneficio* at 0377B, then *Laudatis vero
  **sponsae** uberibus, **sponsus** tanquam subtrahens* at 0377C), so the plate
  slides into the new practice across the head rather than at it. **A range-level
  regularizer would have flattened all of this**, and it is the strongest support
  in my range for brief §7a's "mirror per instance". *(An earlier draft of this
  entry claimed XIV was capitalized without exception; the counts above are from
  a script over the twin and supersede it.)*
- ⭐ **0381A–0381B, both cases inside ONE sentence:** *non tam locus **virginem**,
  quam locum **Virgo** sacrare videatur, neque **virgo** a monte, sed mons a
  **virgine** commendabilis habeatur* — one capital among four. Mirrored.
- **0376C, lower-case *filio* beside capital *Mater* and *Filio* in the next
  clause:** *quos redemptos a **filio** velle considerat* … *certum habens
  **Mater** sancta redemptori **Filio** non placere* … *habet Virgo a **Filio***.
  Mirrored; "her son" then "the Son" twice.
- **0379B, capital *Virgo* beside lower-case *mater*:** *quanta humilitate
  **Virgo** devotissima se depressit, quae jam dicta Dei **mater***. Mirrored.
- **0379C, lower-case *sanctus* with capital *Spiritus*, and the two words
  SPLIT:** *sanctusque supervenit et obumbrans ei **Spiritus** dat virtutem.*
  ⚑ **This is a third data point on the question cruces-0066 §9.6 asked the merge
  to settle** (cruces-0048 at 0305B *Spiritus **sanctus** superveniet*;
  cruces-0066 at 0356C ***sancti** Spiritus*). Here Migne prints a third
  arrangement again, and it is the same Luke 1:35 verse as 0305B. **Rendered "the
  holy Spirit", lower-case *holy*, mirroring the plate** — the same decision
  cruces-0066 made, and I record it so that the merge is choosing among three
  attested printings and not two.
- **0379C, capital *Angelus* / *Angeli* against lower-case *angelus* at 0379A**
  — *Quam cum solam in conclavi… **angelus** inveniret* (0379A) vs *ad verbum
  **Angeli*** (0379B) and ***Angelus** Virgini nuntiat* (0379C). Three
  occurrences, two capital, in fifteen lines. Mirrored.
- ⚠ **0386A and 0386A, capital *Excelsi* mid-sentence, twice:** *et **Excelsi**
  principes regionum* and *sunt et montes meritis **Excelsi***. Migne capitalizes
  an ordinary adjective in both. **Mirrored** — "the **Lofty** princes of the
  regions", "mountains **Lofty** in merits" — which reads oddly in English,
  because a capitalized adjective there looks like a proper name. **Logged as the
  one mirroring decision in this range I would most expect a reader to query.**
  Regularizing it is a one-line change if the merge prefers.

### 6.4 · Pattern 7 — real words that are merely wrong. THREE, all rendered as printed, NO `[sic:]`

**No `[sic:]` fires anywhere in this range** — there is no non-word type in any of
the six chunks (checked word by word). All three defects below are real Latin
words in the wrong slot, which Pattern 12 explicitly exempts, so the English word
on the page is ours and the conjecture lives here.

1. ⛔ **0384C — *Post **mentem** vero Amana, montem Sanir Sponsus voluit
   nominare.*** The slot wants ***montem***, and the certainty is total: the same
   sentence prints *montem Sanir* five words later, and the whole chapter is
   *mons* … *mons* … *mons*. *mentem* is a real word (and a *c*/*e*-family
   neighbour of nothing — this is *o*→*e*), so Pattern 12 keeps it on the English
   side. **Rendered as printed: "But after the **mind** of Amana, the Bridegroom
   willed to name mount Sanir."** ⚠ **This is the likeliest silent repair in my
   range** — one letter makes it smooth, and the smoothed version is what every
   reader expects.
2. ⛔ **0374B — *ut cum hostes **non** impetunt, non solum ad dependentes clypeos
   recurramus…*** The slot wants ***nos*** ("when the enemies assail **us**"),
   and the sentence as printed says the opposite of what the paragraph argues:
   one runs to shields when one IS attacked. But it is a printed negation, and
   brief §9 is unconditional. **Rendered with the negation carried: "so that when
   the enemies do not assail, we may not only run back to the hanging shields…"**
   The English is self-contradictory because the Latin is. ⚑ **This is the range's
   one live negation-fidelity case and the second-likeliest silent repair.**
3. **0386A — *quid nisi leo stratus in **cubiculi** apostolico requiescit?***
   A genitive where the ablative *cubiculo* is wanted by *apostolico*. Pattern 9:
   a case mismatch has no English exponent — there is no way to render "of the
   chamber" that the preposition will take. **Rendered "in the apostolic
   chamber", unmarked**, and logged so a later sweep does not churn it.

**Also rendered as printed, no marker, no conjecture needed:** *extimo* for
*aestimo* (0381D — the same form cruces-0066 §8 lists as attested) · *spiritalis*
/ *spiritali* / *spiritalia* throughout · *foecibus* (0383B) · *nevus* (0380C) ·
*versipellis* (0383D) · *aucupium* (0383C) · *immulgere* (0376C) · *vermescentes*
(0378D) · *candidatis* (0377B) · *tripudialiter* (0377B) · *superefferens*
(0378D) · *lodice* (0383A) · *subsannat* (0382D) — all attested medieval or
classical forms, Pattern 9, no italics, no `[sic:]`.

### 6.5 · Pattern 8 — punctuation. Four live cases, all preserved

1. ⭐ **0384D–0385A, NO terminal stop at all**, and the next word capitalized:
   *…daretur victoria bellatori **Porro** apud antiquos celebri est sententia
   promulgatum.* Migne prints nothing between *bellatori* and *Porro*. **Not
   supplied** (Pattern 8's "never supply, including a terminal stop"), so the
   English reads "…the victory were given to the warrior **Moreover** among the
   ancients it was published…". It is meant to look wrong.
2. ⭐ **0386A, a full stop in mid-clause followed by lower case:** *virtute propria
   non securus**. et** de victoria non confidens.* Brief §5 is explicit that
   Migne's lower case after a misplaced stop **stands**; the stop is preserved
   too. Rendered "not secure in his own virtue. and not trusting in victory".
3. **0377D, a comma between subject and verb:** *Porro mons, est hujus nostrae
   virginis celsitudo.* Preserved: "Now the mountain, is the loftiness of this our
   virgin."
4. **0384A, a semicolon where a comma belongs**, splitting a participial phrase
   from its main verb: *et miserans quos hostilis fere malitia jam peremit;
   interpellat filium.* Preserved.

Also preserved: 0383C's **comma outside the closing »** (§2, Eccli. 1:25); 0375B's
missing comma before *quia* (*armaturam utilem in Scriptura quia nescientibus*);
0375B's **semicolon before the main verb** of the *gentiles… et Judaei* period
(*partus Virginis scandalizat; Christum Dei virtutem… non inveniunt*).

### 6.6 · The one place I ADDED italics, declared

**0375D, *turris a tuendo*.** Migne prints *Denique turris a tuendo (ut nonnulli
asserunt) nominatur* with no italics. The etymology is the sentence's whole
content and English shares no root ("tower" / "guard"), so the two Latin words
are carried, **in italics**, inside Migne's own parenthetical structure: "Lastly
*turris*, a tower, is named from *tuendo*, guarding (as some assert)…". This is
the register's carried-Latin convention (italic Latin = a word with no English
exponent) applied to words **we** add, not to Migne's own text, so Pattern 6's
never-supply rule is not engaged — but it is the only asterisk pair in the range
that has no counterpart in the twin (0078 runs 6 asterisks Latin / 10 English;
every other difference in the six chunks is inside a `[var:]`). ⚑ **Declared here
so the merge can strike it if it prefers cruces-0066 §7.6's stricter answer**,
which declined italics on Philip's self-citation at 0358C.

---

## §7 · THINGS DELIBERATELY NOT REPORTED (brief §10, checked once each)

- **Column-band arithmetic.** Two chunks in this range look irregular and neither
  is: 0080 opens its `## CAPUT XVI.` head with a **bare `[0378C]` on its own
  line** before any text and does the same for `## CAPUT XVII.` at `[0379C]`, and
  0081's `colContext` (0380D) is the previous chunk's `colLast`. **Checked on the
  only real signal: no anchor in any of the six chunks is followed by text broken
  mid-word or mid-construction.** Every chunk's lemma opens cleanly before its
  first anchor. **No `[ed:]`, no patch, no plate check, nothing reported.**
- **`noteCount` matches the body `[n:]` count in all six chunks** (4/1/3/0/1/7),
  verified by script against the Latin twins.
- **No `[f:]`.** 11632 is lemma-and-gloss, not a florilegium (§10.4).
- **No `[d:]`:** no dittography anywhere in the range. **No `[nt:]`:** all sixteen
  notes are bare citations, none editorial prose. **No `[ed:]`:** nothing lost.
- **Migne's own `( sic )`** does not occur here. **Migne's `[ *alias* …]` bracket**
  does not occur here (§10.7 — it is a work-wide singleton at 0321B).
- **Cant. 1:12's *Cum*/*Dum* (brief §8c) does not occur in this range** — the
  lemma has moved to Cant. 4. **Recorded as a null.**
- **Brief §6's three attested Philip readings** (Zech. 4:14 *splendoris*, Gen.
  3:19 *Terra es*, Cant. 2:17 *Bethel*) **do not occur here.** Nulls recorded so
  the merge's coverage count over twenty-one ranges is complete.
- **No book boundary falls in this range**, so brief §7's crossed-seam question
  has nothing to add from here. Recorded as a null.

---

## §8 · WHAT A LATER BLIND READ SHOULD LOOK AT FIRST

1. ⭐⭐ **0384C, the Acts 10:13 `[var:]`** (§1.1). The divergence is certain
   (*Macta* ‖ *occide*); the judgment that it clears Pattern 14's threshold is
   mine, and the case rests on Philip's own *mactare et manducare* five words
   earlier. If the marker is wrong it is wrong on materiality, not on fact.
2. ⭐⭐ **0385A, Virgil unmarked** (§1.2). The claim to test is the internal
   control: that brief §7's guilleted Virgil at 0251D and this unguilleted,
   unitalicized one are the same author in the same work. Both columns are named.
3. ⛔ **0384C, *Post **mentem** vero Amana*** (§6.4.1). **The likeliest silent
   repair in the range** — one letter, and the repaired sentence is the one every
   reader expects. The English deliberately says "mind".
4. ⛔ **0374B, *cum hostes **non** impetunt*** (§6.4.2). The one negation in the
   range whose faithful carrying makes the sentence contradict its own paragraph.
   Brief §9 requires exactly that; a blind read should confirm the negation is
   still there.
5. **0380B, the Job `[var:]`** (§3). Test two things separately: that no Vulgate
   verse reads *Nemo mundus a sorde* (certain), and that the marker was right to
   name Job 14:4 as nearest rather than the Job 15 that Migne's note gives. The
   Old Latin conjecture is deliberately outside the marker.
6. **0385D, *optimates, capita populorum*** (§2b, last row). An unresolved
   identification, flagged as unresolved rather than guessed. If it is a real
   prophetic verse I have missed it.
7. **§6.3's capital *Excelsi* at 0386A** — the mirroring decision in this range
   most likely to read as an error to someone who has not seen the plate.
