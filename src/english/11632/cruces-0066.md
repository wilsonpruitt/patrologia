# Cruces — 11632 chunks 0066–0071 (cols 0348A–0360B)

Philip of Harvengt, *Commentaria in Cantica canticorum*, PL 203. Six chunks,
5,342 Latin words, covering the **end of Book III and the opening of Book IV**:
*Caput* XXIV–XXVI on Cant. 3:4–5 (*Paululum cum pertransissem eos* → *Tenui eum,
nec dimittam* → *Adjuro vos, filiae Hierusalem*), then `LIBER QUARTUS.` and its
*Caput* I–IV on Cant. 3:6–8 (*Quae est ista quae ascendit per desertum* → *En
lectulum Salomonis* → *Omnes tenentes gladios* → *Uniuscujusque ensis super femur
suum*).

⭐ **A book boundary falls inside this range** — `LIBER QUARTUS.` at col. 0354C,
at the very end of chunk 0068, with nothing after it. See §6.

**Marker totals for this range: 1 `[var:]` · 7 `[sic:]` · 0 `[ed:]` · 0 `[d:]` ·
0 `[nt:]` · 0 `[f:]`.** `verify-english.mjs` reports **no errors** on any of the
six (the run's `VERIFY FAILED` is the 54 not-yet-translated chunks after 0071).
Three ratio warnings — 0066 1.63, 0067 1.62, 0068 1.61 — all inside the band this
work has already shipped (0004 1.64, 0005 1.68, 0046 1.68, 0064 1.66); 0069, 0070
and 0071 warn at nothing.

Column anchors (7/14/5/10/12/2), `[n:]` strings (0/7/0/1/6/0 — each matching its
frontmatter `noteCount`) and guillemet counts (0/5/0/0/3/0 pairs) were diffed
**1:1 against the Latin twins by script, not by eye**: identical in content, order
and position in all six chunks. **No guillemet asymmetry anywhere in this range** —
every « has its », none stray, none unopened.

---

## §1 · ⭐⭐ THE FINDING THE MERGE SHOULD CARRY FIRST

### 1.1 · 2 Paral. 23:11 at 0359B — a quotation with *inquit*, no guillemets, no italics, NO note, and the divergent word is the one Philip glosses

Migne prints, as running text in Philip's own paragraph:

> *Dederunt, inquit, in manu **regis** tenendam legem, et constituerunt eum regem.*
> (0359B — reproduced here without italics, because **the plate prints none**)

The Vulgate, 2 Paral. (2 Chron.) 23:11, reads *dederunt**que** in manu **ejus**
tenendam legem, et constituerunt eum regem.* Migne's *regis* stands where the
Vulgate has the pronoun *ejus*.

**Why it matters, and why it is exactly the Lam. 4:20 class of brief §8a.** The
sentence Philip has just written is *ut omnibus ostenderet quia divinae legis
cognitio decet **regem**, imo **rex** non tam scire quam tenere manu, hoc est,
opere debet legem* — the whole gloss turns on the word *rex*, twice, and then the
proof-text arrives carrying *regis* where the received text carries a pronoun.
Conforming it would leave two clauses arguing about the **king** from a
proof-text that names none.

**It carries an *inquit*, so Migne presents it as a quotation — and marks it with
nothing at all**: no « », no italics, no `[n:]`. It was therefore **invisible to
the extraction in every one of its three channels** and did not appear in
`data/quotations/11632/0066-0071.md`. It reached me only on the mandatory second
prose pass.

⚑ **Note the near miss that makes it sharper.** Eleven words earlier the SAME
verse is paraphrased in Philip's own voice under a note — *quem sacerdos Joiada in
manu dare voluit Joas regis* `[n: (II Paral. XXIII)]` — and that clause *is* in the
extraction list. The listed span is prose; the verbatim quotation ten words later
is the unlisted one. **A range that had worked only from its list would have
collated the paraphrase and missed the quotation.**

**Ruling applied: logged in full, `[var:]` NOT fired** (brief §8a — where Migne
marks the words as neither quotation nor lemma we cannot establish the
quotation's boundary, and marking would assert a boundary the plate does not
print). The English renders *regis*: "They gave, he says, into the king's hand the
law to be held, and made him king."

⭐ **And the siglum on the neighbouring note is CORRECT.** `[n: (II Paral. XXIII)]`
is right for 2 Chron. 23:11 — see §5, because brief §8b names *(II Paral. III)*
as an attested thirty-two-chapter miss and this is the same siglum family used
correctly.

---

## §2 · THE COLLATION — all 26 listed spans, plus 14 found on the prose pass

Every span in `data/quotations/11632/0066-0071.md` was collated word by word
against the Vulgate. **Spans recorded as AGREES were collated and found to agree;
the absence of a marker on them is a finding, not a silence.**

### 0066 (cols 0348A–0349C) — 3 spans, 0 notes, 0 guillemets

| Span | Verse | Verdict |
|---|---|---|
| *Paululum cum pertransissem eos, inveni quem diligit anima mea.* | Cant. 3:4a | **AGREES** word for word. |
| *Cum pertransissem,* inquit, *eos, inveni quem diligit anima mea.* (0348C) | Cant. 3:4a | **AGREES.** ⚠ Migne breaks the italics around *inquit* **between the verb and its object** (*Cum pertransissem,* / *eos, inveni…*). English cannot take that break gracefully; it is nonetheless **reproduced 1:1** — "*When I had passed by,* she says, *them, I found him whom my soul loveth.*" — on the Pattern 5 principle that the typography is a fact of the page and English comma habits do not outrank it. Same device cruces-0052 recorded at *Flores,* inquit, *apparuerunt*, where English happened to fit. |

Marginal source-edition number: *200* (0349B).

### 0067 (cols 0349D–0353A) — 9 spans, 7 notes, 5 guillemet pairs

| Span | Verse | Verdict |
|---|---|---|
| *Tenui eum, nec dimittam donec introducam **eum** [0349D] in domum matris meae, et in cubiculum genitricis meae.* | Cant. 3:4b | Vulg. *…donec introducam **illum** in domum matris meae…* — **the second pronoun only**, *eum* for *illum*, with the same referent. Sense untouched (Pattern 14 threshold). *genitricis*/*genetricis* is orthography. **Logged, no marker.** |
| « Cerno, inquit ad Moysen, quod populus iste durae cervicis sit: dimitte me ut irascatur furor meus contra eos et deleam eos `[n: (Exod. XXXII)]`. » | Exod. 32:9–10 | **AGREES word for word**, the two verses run together with the Vulgate's *rursumque ait Dominus ad Mosen* replaced by the Pattern 5 interruption *inquit ad Moysen*. Siglum correct. |
| *Vult furorem suum adversus idololatras durius effrenare, sed obsistit Moyses, et furentem nititur refrenare* `[n: (Jud. X)]` (`[n:]`-only) | — | **Philip's own prose**, and it is not a quotation of anything: it is his narration of Exod. 32:11–14. **No marker.** ⚠ **But the siglum is a live problem — see §5.** |
| « Aut dimitte eis, inquit, hanc noxam, aut si non facis, dele me [0350C] de libro tuo quem scripsisti `[n: (Exod. XXXII)]`. » | Exod. 32:32 | **AGREES word for word**; truncated at the opening (*obsecro, peccavit populus iste…* not quoted). Siglum correct. ⚠ The column anchor falls **inside** the guillemets, between *me* and *de libro*; reproduced in place. |
| « Dimitte me, ait, jam enim ascendit aurora `[n: (Gen. XXXII)]`. » | Gen. 32:26a | **AGREES** word for word. Siglum correct. |
| « Non dimittam, inquit, te, nisi benedixeris mihi `[n: (ibid.)]`. » | Gen. 32:26b | **AGREES**; the *te* is displaced one place by the interrupting *inquit* (Pattern 5). The `(ibid.)` resolves correctly to Gen. XXXII and was not touched. |
| « Et benedixit, inquit, **eum** in eodem loco `[n: (Gen. XXXII)]`. » | Gen. 32:29 | Vulg. *et benedixit **ei** in eodem loco* — **accusative for dative** after *benedico*, the ordinary Christian-Latin construction. Nothing is asserted that the Vulgate does not assert. **Logged, no marker.** Siglum correct. |
| *Deus quidem, ut legistis, ab antiquo notus fuerat in Judaea* `[n: (Psal. LXXV)]` (`[n:]`-only) | Ps. 75:2 | **Philip's prose.** Vulg. *Notus in Iudaea Deus* — a nominal clause turned into his own pluperfect with *ab antiquo* added and *ut legistis* as his own second-person frame. **No marker.** Siglum correct. |
| *Adjuro vos,* (0353A) | Cant. 3:5 | Lemma cue for the next chapter. |

Marginal numbers: *201* (0351B) · *202* (0353A).

### 0068 (cols 0353B–0354C) — 1 span, 0 notes, 0 guillemets

| Span | Verse | Verdict |
|---|---|---|
| *Adjuro vos, filiae Hierusalem, per capreas, cervosque camporum, ne suscitetis neque evigilare faciatis dilectam, donec ipsa velit.* | Cant. 3:5 | **AGREES word for word**, including both negatives. |

⭐⭐ **This lemma is an INTERNAL CONTROL on cruces-0042 §1.2, and it should be
recorded as one.** That range found the head lemma at 0299D printing ***Adjuvo***
for *Adjuro* at Cant. 2:7 — the identical formula. **At 0353A the cue prints
*Adjuro*, and at 0353B the full head lemma prints *Adjuro*, correctly, twice.**
So the 0299D reading is an isolated defect of that setting and not a copy-text
form: the same six-word formula is set right three times inside sixty columns.
That is the shape of evidence brief §8b asks for (an internal control needing no
appeal outside the work), applied here to a lemma rather than a siglum.

### 0069 (cols 0353D–0356D) — 3 spans, 1 note, 0 guillemets

| Span | Verse | Verdict |
|---|---|---|
| *Quae est ista quae ascendit per desertum sicut virgula fumi ex aromatibus **myrrhoe** et thuris et universi pulveris pigmentarii?* | Cant. 3:6 | **AGREES**, orthography apart. Vulg. *…ex aromatibus **murrae** et **turis**…*; *thuris* is Migne's habitual aspirated form, and ***myrrhoe* is his habitual *oe*-for-*ae***, the same interchange as *coelum*, *coena*, *foenum*. **Pattern 9, no marker, no `[sic:]`** — and note that Philip himself sets *myrrha* and *thure* correctly eight lines later (0356B), which is what settles it as orthography rather than broken type. |
| *Jacob cum caput ejus lapis suppositus visus est sustinere, somno sopitus mystico hujusmodi scalam meruit vix videre* `[n: (Gen., XXVIII)]` (`[n:]`-only) | Gen. 28:11–12 | **Philip's prose** (Vulg. *supposuit capiti suo, et dormivit… viditque in somnis scalam*, recast into his own rhymed *sustinere / videre*). **No marker.** Chapter correct. ⚠ **Migne prints a comma inside the parenthesis** — `(Gen., XXVIII)` — where every other siglum in the range has none. Reproduced verbatim, not tidied. |
| *En lectulum,* (0356D) | Cant. 3:7 | Lemma cue. |

⭐ **A 7a″ trap declined at the head lemma: *virgula* is "a little rod", NOT
Douay's "pillar".** Douay renders Cant. 3:6 "as a pillar of smoke", and that is
the familiar cadence the rule warns about. *Caput* I's entire exposition is built
on the word's **slenderness**: *subtilis et gracilis… attollens se in auras tenues
et ipsa tenuatur* … *instar **virgulae** restringens se in angustum* … *terrenis
abrasis faecibus… **tenuata***. A pillar is the one thing a *virgula* is not, and
"pillar" would leave four sentences arguing thinness from an image of mass.
**Rendered "a little rod of smoke" at the lemma and at all three re-uses.**

Marginal numbers: *203* (0353D) · *204* (0356B).

### 0070 (cols 0357A–0359D) — 9 spans, 6 notes, 3 guillemet pairs

| Span | Verse | Verdict |
|---|---|---|
| *En lectulum Salomonis sexaginta fortes ambiunt [0357A] ex fortissimis Israel.* | Cant. 3:7 | **AGREES** word for word. ⚠ The column anchor falls **inside the lemma**, between *ambiunt* and *ex*; reproduced in place. ⭐ ***lectulum* = "little bed"** — see §4.1, where this chunk supplies the work's decisive text. |
| « Coangustatum est, inquit, stratum, ut alter decidat: et pallium breve utrumque operire non potest `[n: (Isa. XXVIII.)]` » | Isa. 28:20 | Vulg. *Coangustatum est **enim** stratum, **ita** ut alter decidat…* — *enim* displaced by the interrupting *inquit* (Pattern 5, the class cruces-0050 recorded for Ps. 119:5's *mihi*), and *ita* dropped. Sense untouched. **Logged, no marker.** Siglum correct. ⚠ **Migne prints NO terminal punctuation after the closing »**; not supplied (Pattern 8). |
| « Dilatasti, ait, cubile tuum, suscepisti adulterum `[n: (Isai. LVII.)]` » | Isa. 57:8 | ⚑ **Every printed word is the Vulgate's, but the two clauses are REVERSED.** Isa. 57:8 runs *…quia iuxta me discoperuisti, et **suscepisti adulterum**… **dilatasti cubile tuum**, et pepigisti cum eis foedus.* Migne prints the enlarging first and the receiving second, with the intervening matter cut. Both clauses assert the same thing of the same person and the argument (a widened bed admits an adulterer) is served either way, so this is abridgment-plus-reordering, not a variant reading. **Logged, no marker** — recorded in full so a later reader can reverse the judgment on the evidence. Siglum correct. ⚠ Again **no terminal punctuation after »**; not supplied. ⚠ And note Migne spells the prophet **`Isai.`** here and **`Isa.`** two columns earlier, inside one chunk. Both reproduced. |
| *Quia enim sex diebus opera sua Deus creator omnium adimplevit, qui, sicut nostis scriptum, ab operibus quae patrarat, die septimo requievit* `[n: (Gen. II)]` (`[n:]`-only) | Gen. 2:2 | **Philip's prose**, and the closest call in the chunk: *die septimo requievit* and *quae patrarat* are both verbatim Vulgate. But the frame *sicut nostis scriptum* is his own second-person address, the subject is his own *Deus creator omnium*, and the Vulgate's *ab universo opere* becomes his plural *ab operibus*. **No marker**, per §8a. Siglum correct. |
| « Qui non peccat, inquit, in verbo, hic perfectus est vir `[n: (Jacob. III)]`. » | **James 3:2** | ⭐ **`[var:]` FIRED — see §3.** Siglum correct. |
| *Omnes tenentes gladios et ad bella doctissimi.* | Cant. 3:8a | **AGREES** word for word. |
| *…quia sermo Dei vivus et efficax et penetrabilior omni gladio praedicatur, quo recessus animae, et interior conscientia penetratur* `[n: (Heb. IV)]` (`[n:]`-only) | Heb. 4:12 | **Philip's prose.** Vulg. *Vivus est **enim** sermo Dei, et efficax, et penetrabilior omni gladio **ancipiti**, et **pertingens usque ad divisionem animae ac spiritus***. Migne drops *ancipiti* (which Philip has just used in his own voice, *gladium bis acutum*), replaces the participial chain with his own *quo… penetratur*, and governs the whole by his own *praedicatur*. **No marker.** Siglum correct. The neighbouring *gladius est spiritus, quem esse Apostolus asserit verbum Dei* is Eph. 6:17 in reported speech, unnoted and unmarked — likewise prose. |
| *Gladius est testimonium fidele, praeceptum lucidum, liber legis, quem sacerdos Joiada in manu dare voluit Joas regis* `[n: (II Paral. XXIII)]` (`[n:]`-only) | 2 Chron. 23:11 | **Philip's prose**; and *testimonium fidele, praeceptum lucidum* is Ps. 18:8–9 absorbed unnoted into his apposition. **No marker.** ⭐ Siglum **correct** (§5) — and see **§1.1** for the verbatim quotation of this very verse ten words later, which the plate marks with nothing. |
| *Uniuscujusque,* (0359D) | Cant. 3:8b | Lemma cue. |

Marginal number: *205* (0358A).

### 0071 (cols 0360A–0360B) — 1 span, 0 notes, 0 guillemets

| Span | Verse | Verdict |
|---|---|---|
| *Uniuscujusque ensis super femur suum, propter timores nocturnos.* | Cant. 3:8b | **AGREES** word for word. |

Marginal number: *206* (0359D–0360A, printed immediately after the lemma).

### 2a · The `[n:]`-only class — **hit rate 0 of 6 on the listed spans**

All six listed `[n:]`-only spans (0350B *Vult furorem suum*; 0352B *Deus quidem…
notus fuerat in Judaea*; 0355C *Jacob cum caput ejus lapis*; 0358A *Quia enim sex
diebus*; 0359B *Gladius hic non ferreus*; 0359B *Gladius est testimonium fidele*)
are **Philip's own prose**, by the same mechanism cruces-0048 measured at 38/38
and cruces-0042 at 0/20: he absorbs the scriptural words into his rhymed clause
endings (*sustinere / videre*, *adimplevit / requievit*, *praedicatur /
penetratur*), which forces a change of person, tense, voice or subject. **Hit
rate: zero. Running total across the four ranges that have reported it: 0 of 83.**

⛔ **And that null result is exactly why the separate prose pass is not
optional.** The `[n:]`-only class caught nothing here; **the unmarked, unnoted
class caught the range's principal find** (§1.1) and thirteen more spans below.

### 2b · Found ONLY on the prose pass — unmarked, unnoted, invisible to the extractor

Fourteen scriptural weaves carrying **no guillemets, no italics and no `[n:]`**.
None takes a marker (§8a); all are recorded so the merge has the population.

| Col | Printed | Source | Note |
|---|---|---|---|
| 0359B | *Dederunt, inquit, in manu **regis** tenendam legem, et constituerunt eum regem.* | 2 Chron. 23:11 | ⭐⭐ **§1.1 — the range's principal find.** Carries *inquit*; diverges; the divergent word is the one glossed. |
| 0348B | *quam nescit **immutatio** vel vicissitudinis obumbratio successurae* | James 1:17 | ⚑ Near-verbatim (*nec vicissitudinis obumbratio*), inside the watchmen's speech, with ***immutatio* for the Vulgate's *transmutatio***. Philip's own relative clause and his own *successurae*. **The second-strongest candidate in the range** and the one I would look at next after §1.1. |
| 0348B | *quod vidimus et audivimus hoc testamur* | John 3:11 / 1 John 1:3 | In the watchmen's mouth; Vulg. *quod scimus loquimur, et quod vidimus testamur* fused with *quod vidimus et audivimus, annuntiamus vobis*. A fusion, so no marker (the cruces-0000 item-12 conflation precedent). |
| 0348D · 0355A | *angeli qui, missi in ministerium salutis, haeredibus administrant* · *qui sunt administratorii spiritus* | Heb. 1:14 | Two printings, both prose. cruces-0048 collated the **guilleted** printing of the same verse at 0305A as agreeing; here it is twice unmarked. |
| 0351B | *eo contenta solo in pace dormiam in idipsum* | Ps. 4:9 | Vulg. *In pace in idipsum dormiam et requiescam* — the verb is verbatim and first-person as in the Psalm, but it is spoken by the Virgin inside her own sentence. Prose. |
| 0351D | *sub divo libera tanquam onager invenitur* | Job 39:5 / Jer. 2:24 | Prose. |
| 0352A | *in profundum fodiens petram satagit invenire, supra quam aedificium firmo gradu valeat stabilire* | Luke 6:48 | Prose (Vulg. *fodit in altum, et posuit fundamentum supra petram*). |
| 0352A | *illisione fluminum ventorumque impulsu ruinae subjacet graviori* | Matt. 7:25–27 | Prose. |
| 0352B | *cum temporis adfuit plenitudo* | Gal. 4:4 | Vulg. *ubi venit plenitudo temporis*; the genitive is inverted into his own clause. Prose. |
| 0352B | *infirmari Dei voluit fortitudo* | 1 Cor. 1:25 | Prose. |
| 0352B | *crederent Christum Dei **sapientiam et virtutem*** | 1 Cor. 1:24 | ⚑ Vulg. *Christum Dei **virtutem, et Dei sapientiam*** — **the pair is reversed** and the second *Dei* dropped. Inside Philip's accusative-and-infinitive, unnoted and unmarked; nothing in the exposition turns on the order. Prose, **no marker** — recorded because a reversed pair is the class 7a″ names (cf. the *cinis et pulvis* case). |
| 0352B | *ante luciferum ex utero genitum Dei Patris* | Ps. 109:3 | Vulg. *ex utero ante luciferum genui te*; reordered into his own participle. Prose. |
| 0352C | *illam scilicet petram, quae Christus est* | 1 Cor. 10:4 | Prose. |
| 0357A · 0359C | *duobus dominis non servire* · *non habentibus, sed facientibus intellectum* | Matt. 6:24 · Ps. 110:10 | Prose. The second inverts Vulg. *Intellectus bonus omnibus facientibus eum* into an antithesis of his own. |
| 0358B | *ipsum paterfamilias laborantibus in vinea jubet dari* | Matt. 20:1–16 | Prose; the note-less report of the whole parable. |
| 0358D · 0360A | *nondum tamen plene sciunt utrum odio digni sint an amore* · *caro autem infirma est* | Eccles. 9:1 · Matt. 26:41 | Prose. ⚑ The Eccles. 9:1 weave is the **third** printing in the work — cruces-0048 recorded it at 0309D under `[n: (Eccle. IX)]`; here it is unnoted. Philip recasts it every time. |

---

## §3 · THE `[var:]`, IN FULL — James 3:2 at 0358C

Migne prints « **Qui non peccat**, inquit, **in verbo**, hic perfectus est vir »
under `[n: (Jacob. III)]`. The Vulgate reads *Si quis **in verbo non offendit**,
hic perfectus est vir* — a **conditional clause with *offendit***, where Migne has
a **relative clause with *peccat***.

**Fired, and here is the reasoning, stated so the merge can reverse it.** The
clause-type change alone would not clear Pattern 14's threshold — cruces-0051
correctly declined a marker on Apoc. 22:17's *audiens* for *qui audit*, which is
the same grade of recasting. **What clears it is the verb.** *offendere* is to
stumble or give offence; *peccare* is to sin. The three sentences around the
quotation are a graded scale of imperfection — *in cavendis nequam operibus satis
provide circumspecti, in verbo tamen adhuc minus debito sunt perfecti* … *etsi
custodiunt vias suas ut in lingua labili non **delinquant*** — and Philip's own
word for the failure is *delinquere*, a sin-word, not a stumble-word. The
proof-text as Migne prints it supplies exactly that word; as the Vulgate prints it
it does not.

The marker names the witness and the received reading and **does not speculate
about why they differ** (Pattern 14). It does not elide the divergence: both
halves of the Vulgate clause are inside it, negation included, so brief §8's
`quo minus cessem orare` failure cannot occur here.

⚠ **Its whole content is *si quis in verbo non offendit*** — deliberately trimmed
short of *hic perfectus est vir*, which is the one part of the verse Migne and the
Vulgate share, so that no word of the marker's content is a verbatim substring of
the Latin twin (Pattern 14's `[ed:]` mirror test).

---

## §4 · PATTERN 7 AND PATTERN 10 — seven `[sic:]`, and what was NOT marked

**None of the seven carried runs is ALSO translated in the running text** (brief
§8's named failure — checked word by word on a separate pass, and each content
string re-verified as a verbatim substring of its Latin twin by script).

1. **0348C `[sic: *desideriam*]`** — *Videns quippe angelos meum mihi
   **desideriam** non supplere.* A **non-word**: *meum* is neuter and *desiderium*
   is what the slot wants (Philip uses *desiderii* correctly nine words later,
   *mei… desiderii suppletores*). Carried untranslated; the English reads "did not
   supply me my [sic: *desideriam*]" and does **not** also say "desire".
2. **0350A `[sic: *ama*]`** — *eo **ama** fortius, et amare praeter illum quidpiam
   non intendit.* ⚠ **A judgment, and I record it as one.** *ama* is a real word
   (the imperative of *amo*) and Pattern 12 exempts "a real word that is merely
   wrong" — but it cannot fill this slot at all: the subject is the Virgin, the
   parallel verb is *deprehendit*, and the correlative *quo… eo* wants an
   indicative. It is a **lost final letter for *amat***, which is precisely the
   class `translation-style.md` Pattern 7 names by name (`vul` for *vult*), and
   the accident that the truncation happens to be a word is the same accident
   cruces-0048 met at `[sic: *signa*]`. **If the merge reads it as Pattern 12
   instead, the fix is to delete the marker and render the imperative "love"**,
   which construes no better.
3. **0355A `[sic: *susciten*]`** — *dicunt tamen ut in nobis affectum **susciten**
   audiendi.* A non-word, final *-t* lost from *suscitent*. The English does not
   also say "stir up".
4. **0355D `[sic: *praeccurrentes*]`** — *proficientem festivis laudibus
   **praeccurrentes***. A non-word, doubled *c* in *praecurrentes*. ⚠ Note the
   English word order had to place the carried run before its object ("[sic:
   *praeccurrentes*] with festal praises her that advances") because the run is
   the participle governing it; nothing outside the marker renders it.
5. **0356A `[sic: *eomparatur*]`** — *cujus virgulae Virgo proficiens
   **eomparatur***. A non-word, *e* for *c* — the same *c*/*e* confusion
   cruces-0042 carried at `[sic: *reete*]` (0294C), which is the governing
   precedent in this work.
6. **0356C `[sic: *discipliuae*]`** — *in corde Virginis tanquam in mortariolo
   **discipliuae***. A non-word, *u* for *n* in *disciplinae*.
7. **0360B `[sic: *verb*]`** — *ut et defectus causas tanquam femur **verb**
   comprimat disciplina.* A non-word, truncated *verbi* — and the certain reading,
   because Philip's own preceding sentence has *cum **verbo Domini** lucido quod
   penetrabilius omni gladio perhibetur* and *rigore firmat **verbi***. Carried;
   the English reads "with the discipline of the [sic: *verb*]".

**Rendered as printed, no marker (real words, merely wrong or merely odd) —
conjectures live here and NOT in the text:**

- ⛔ **0351B, *donec **cum** in domum matris meae, imo et in cubiculum
  intromittam*.** The slot wants ***eum***, near-certain: the head lemma four
  columns earlier prints *donec introducam **eum** in domum matris meae*, and
  *intromittam* is left without an object. *cum* is a real word, so Pattern 12
  keeps it on the English side: rendered as the conjunction, **"until, when I
  bring [him] into my mother's house, nay, and into her chamber, I let him in"** —
  the object supplied in square brackets, per the corpus's existing supplied-word
  convention, so that the printed *cum* is carried and nothing is silently
  repaired. ⚠ **This is the sentence in my range most likely to be quietly
  smoothed**, and the smoothing is one letter.
- **0351D, *nescit domum, **plaudi** non sustinet, pariete vel maceria non
  sepitur*.** *plaudi* ("to be applauded") in a sentence about a wild ass that
  knows no house and is fenced by no wall wants ***claudi***, "to be shut in" —
  another *c*/*e*-family confusion, here *p* for *c*. A real word, so **rendered
  as printed**: "it knows no house, it endures not to be applauded, it is hedged
  in by no wall or dike." It is meant to read wrong. ⚠ **Second most repairable
  sentence in the range.**
- **0355B, *internae mentis species tam gratiae quam industriae manibus **et**
  exculta nullam harum huic similem possumus invenire*.** The clause does not
  construe: *species* is nominative, *exculta* agrees with it, and *et* stands
  where ***est*** is needed, after which the sentence changes subject to *possumus*
  without a break. Rendered as an anacoluthon with dashes so the broken
  construction survives — "the beauty of the inner mind, by the hands of grace as
  well as of industry, and cultivated — none of these can we find like to her" —
  rather than being smoothed into a subordinate clause. Conjecture *est*, not
  supplied.
- **0357B, *cum in se mansionem, locum, spatium alteri non **consedit***.** Three
  accusatives with an intransitive perfect; the slot wants ***concedit***,
  "grants". A real word, so rendered as printed: "when it has not settled in
  itself a dwelling, a place, a space for another."
- **0357D, *quae illi ex una tantum parte sine altera non assistunt, **se**
  prudenter dispositae ordinato ambitu circumsistunt*.** *se* stands where the
  antithesis wants ***sed*** — Pattern 10's *sedet* / *sed et* class in reverse, a
  lost letter yielding a real word. **Rendered as the reflexive**, and the
  adversative deliberately NOT supplied: "which stand by her not on one side only
  without the other; themselves prudently disposed, they stand round about her in
  an ordered circuit." Supplying "but" would be the connective-smoothing mechanism
  (Pattern 7a, mechanism 3), which leaves no lexical trace.
- **0350A, *non nectura ferrea, sed complexu alligat fortiore*.** *nectura* is not
  classical but is a medieval formation on *necto*; cruces-0042 met it at 0290A
  and left it. **Held: rendered "fastening", Pattern 9, unmarked.**
- **0350A, *non gumphis, non glutino*.** *gumphus* = γόμφος, a bolt or peg.
  Attested; rendered "bolts", unmarked.
- **0349D, *vigiles **lincaeo** visa est oculo praeterire*.** The adjective from
  Lynceus. Rendered "with a lynx's eye", unmarked.

### Punctuation — Pattern 8, three live cases, all preserved

- **0354A, a comma splice preserved.** *…quam constat penitus nunquam velle,
  **apostoli** quidem contra vetitum deserente gratia voluerunt.* A full stop
  belongs where Migne prints a comma, and the lower case follows it. Brief §5 is
  explicit that Migne's lower case after a misplaced stop stands; the same
  reasoning covers a missing stop. **Nothing changed** — the English reads "…who,
  it is agreed, never wills at all, the apostles indeed, grace forsaking them,
  willed against the prohibition…".
- **0356B, a comma where a full stop belongs, with a CAPITAL after it.** *ex
  universo pigmentarii pulvere sunt confecta, **Myrrha** mirabilem mortuorum
  corporibus dat medelam.* The mirror image of 0354A and of cruces-0048's 0317B
  case. Preserved exactly: "…and of all the powder of the perfumer, Myrrh gives a
  marvellous remedy…".
- **0357B and 0357C, no terminal punctuation after the closing guillemet** of
  either Isaias quotation (`… non potest [n: (Isa. XXVIII.)] » Stratum profecto…`
  and `… suscepisti adulterum [n: (Isai. LVII.)] » Virgo autem…`). **Not
  supplied**, per Pattern 8 and the 0306A precedent.

### Negation audit (brief §9)

Every printed *non / nec / neque / nisi / haud / nunquam / nullus / nihil / nil /
nemo / ne* in the six Latin chunks was matched against the English on a
**separate second pass**, after the prose was drafted. The dense clusters are
**0348A** (*non esse aliquem angelorum, nec ostendi posse… ut non eam videat nisi
cui voluerit*), **0348B** (*non stare, non haerere, sed potius transire… habentis
initium etsi finem non similiter habiturae*), **0348D–0349A** (*neutros… non solum
invalidum ordinem, sed naturam, meoque desiderio **nullam** sufficere penitus
creaturam* · *non a seipsis, sed ab alio* · *non seipsum, non quemvis alium* ·
*sine ipso… penitus **nihil** posse*), **0349A** (***non nisi** pertransiens digne
praevalet experiri* — the double particle carried whole), **0349B–C** (*non
tamen… nisi oculo tantum fidei* · ***nullo** carnis onere contradici; si **non**
fide, sed re, **non** spe, sed specie* · ***nulla** perturbatio* · *regio jure
**non** injurio*), **0350A** (*non gumphis, non glutino, non tenet vinculo… non
nectura ferrea* · *non remittit, non amorem, non affectum, non intensum… non
dimittit*), **0350C–D** (*non evertit… non abrasit… non delevit* · ***nullo modo**
convenire* · ***nihil** impunitum… vult remitti* · *non se sustinet praeveniri*),
**0351A** (*non vult dimittere **nisi** pretio redimatur, **nisi** victus victori…
sine qua **nulla** victoria* — three carried in one period), **0351B** (*non nisi
propter ipsum… non sufficiunt praeter ipsum* · ***Nec** soli mihi… **nec enim**
morbo avaritiae*), **0351C–D** (*non munitur, non umbra, non culmine, non fidei
tegulis* · *nescit domum, plaudi non sustinet… non sepitur* · ***nullo** fixa
pondere*), **0352A** (*quia petrae **non** innititur firmiori* · *ruere **non**
permittit*), **0352B** (*necdum noverat* · *personaliter **non** vestivit* · ***non
venturos** esse deinceps ad salutem, **nisi** eos qui crederent* — the *non…nisi*
pair carried whole), **0353B–0354A** (*ne parvipendant* · *ne… tonet, ne… sonet,
ne… feriantur* · *jam **non** cum illo… gradiantur* · ***Nec** solum ii apostatae*
· *ut… **non** fatiscant* · ***non** est conveniens… **necdum** illam velle…
**nec** est vobis liberum… quam constat penitus **nunquam** velle* — a four-fold
chain · *ad unguem **non** resistere valuerunt* · ***nil** tale voluit* · ***non**
suo, sed suorum strepitu*), **0354A–B** (*ne affligatur poena, cujus culpae
conscia **non** habetur* · ***non** praesumerent suscitare* · ***ne** repellant
gratiam* · ***non** duxi necessarium… **ne**, si quod ante dictum est…*),
**0354D–0355A** (***nec** alii quilibet… **non tamen** ab ejus facie prohibentur*
· ***neque** digne sufficiunt admirari, **nec** inveniunt* · ***ne** quid dicant…
si penitus **nihil** dicant* — with *revocat **ne*** carried as a negative purpose
clause, the 7a′ hazard · ***nequaquam** desiderio satisfacit*), **0355A–B**
(***Neque enim quisquam** nostrum… si… velut sibi **non** satis conscia penitus
refutaret* · ***non** ut dignitas Virginis expetit* · ***necdum** satis… **non**
intendunt*), **0355B–C** (***nullam** harum huic similem* · ***nulla** prior,
**nulla** ei posterior* · ***non** egere* · ***non** natura, sed gratia* ·
***non** incedit* · ***nescit** multitudo **neque** terit ungula* · ***non**
tangitur, **non** respergitur* · ***non** attaminat, **non** operit*), **0356A**
(*oculos intuentium **non** admittat*), **0356B** (***non** de abyssi puteo* ·
***nihil** in eo molle, **nihil** fluidum*), **0357A–B** (***non** permittat…
**non** admittat* · ***non** lectus, sed lectulus* · ***non** extenta* ·
*plurimos **non** amplecti, duobus dominis **non** servire* · *utrumque operire
**non** potest* · ***nonnisi** legitimo meditatur* · ***non** consedit* · ***non**
accedit*), **0357C–D** (***non** texit dissolutio, superfluitas **non** orditur* ·
***nullatenus** operitur, **nec**… **nec**…* · ***non** arctavit… **neque**
pallium breviavit* · ***non** admisit… **non** permisit* · ***non** muris, **non**
turribus, **non** propugnaculis* · *hostes **nihil** inferunt*), **0357D–0358A**
(*qui **non nisi** fortes merentur appellari* · ***non** assistunt*), **0358A–D**
(***non** debere perfectum ideo judicari* · ***nihil** timet, **nihil** dubitat* ·
*majora **nequeunt** adimplere* · ***non** peccat in verbo* · *in lingua labili
**non** delinquant… **nondum** satis… **nondum** tamen plene sciunt* ·
***nullus** quippe similium*), **0359A–D** (***ne**… **non** armati* · ***non**
ferreus* · ***non** habere sed tenere* · ***non** qui habent… habere **non**
negantur* · *parum, sive **nihil** prodest… si **non** illum exerit manus* ·
***non** laesionem illa sufferat, **non** jacturam* · ***non** novella… **necdum**
facere* · ***non** habentibus, sed facientibus* · *sine scientia **non** satis
eruditur* · ***non** solum docti, sed et doctissimi* · *manus a gladio **non**
recedit*), and **0360A–B** (***non** deponens* · *ut sui **non** sit negligens* ·
***non** habet a seipsa* · *gradu stabili **non** tenetur* · ***non** solum se
infirmam* · *a nocturnis timoribus **non** timere*).

**No negation was dropped and none was supplied.** Two places deserve naming
because carrying the printed reading is what makes the English awkward, and the
awkwardness is the point: **0354A**'s *quam constat penitus nunquam velle* (the
absolute "who never wills at all", left without the object the sense wants) and
**0355A**'s *consideratio… revocat **ne** quid dicant*, a negative purpose clause
of exactly the shape Pattern 7a′ was written for — the whole clause it governs is
carried negative ("calls them back that they say nothing"), not affirmatively.

---

## §5 · MIGNE'S SIGLA — thirteen of fourteen correct, and the one that is not

Reproduced verbatim, none corrected (brief §10.2). This range is the **cleanest
of any reported so far**, which is itself worth the merge's count against
cruces-0012's five-in-six and cruces-0048's six-in-six:

| Col | Printed | Verdict |
|---|---|---|
| 0350B | `[n: (Exod. XXXII)]` | **Correct** — Exod. 32:9–10. |
| 0350B | `[n: (Jud. X)]` | ⚠ **The one problem. See below.** |
| 0350C | `[n: (Exod. XXXII)]` | **Correct** — Exod. 32:32. |
| 0350D | `[n: (Gen. XXXII)]` | **Correct** — Gen. 32:26. |
| 0350D | `[n: (ibid.)]` | **Correct**; resolves to Gen. XXXII. Untouched (§10.2). |
| 0351A | `[n: (Gen. XXXII)]` | **Correct** — Gen. 32:29. |
| 0352B | `[n: (Psal. LXXV)]` | **Correct** — Ps. 75:2. |
| 0355D | `[n: (Gen., XXVIII)]` | **Correct** — Gen. 28:12. ⚠ Note the **comma inside the parenthesis**, unique in the range; reproduced. |
| 0357B | `[n: (Isa. XXVIII.)]` | **Correct** — Isa. 28:20. |
| 0357C | `[n: (Isai. LVII.)]` | **Correct** — Isa. 57:8. ⚠ Second spelling of the prophet's name in one chunk. |
| 0358A | `[n: (Gen. II)]` | **Correct** — Gen. 2:2. |
| 0358C | `[n: (Jacob. III)]` | **Correct** — James 3:2 (the `[var:]` is about the wording, not the reference). |
| 0359B | `[n: (Heb. IV)]` | **Correct** — Heb. 4:12. |
| 0359B | `[n: (II Paral. XXIII)]` | ⭐ **Correct** — 2 Chron. 23:11. |

⭐ **The `(II Paral. XXIII)` row is a §8b "log the ones that are RIGHT" item and
should be counted as one.** Brief §8b names ***(II Paral. III)*, off by thirty-two
chapters**, as the range-outlier of the misnamed class. Here the same siglum
family is used **correctly**, precisely placed on 2 Chron. 23:11. Together with
cruces-0048's two correct `(I Cor. II)` and one correct `(II Cor. IX)`, this
further supports §8b's revised statement: **no siglum in this work is
systematically wrong.**

⚠ **The one problem, and it belongs to neither established shape.** At **0350B**
Migne prints `[n: (Jud. X)]` on the clause *sed obsistit Moyses, et furentem
nititur refrenare* — Moses's intercession, which is **Exod. 32:11–14**, in a
paragraph whose two guilleted quotations are both from Exodus 32 and both
correctly labelled *(Exod. XXXII)*. Judges 10 has no Moses; it has Israel's
idolatry and the Lord's relenting (Judg. 10:16), which is a thematic parallel at
best. This is **not** the off-by-one-chapter profile (five of seven in
cruces-0048) and **not** the cited-one-book/worded-another profile (three attested
instances), because the clause is Philip's prose and quotes nothing. It is closest
to *(II Paral. III)*: a reference that names an unrelated place. **Reproduced
verbatim; nothing corrected**, and no following *Ibid.* depends on it.

---

## §6 · TYPOGRAPHY — the Book III/IV boundary is crossed, and there is NO SEAM

⭐ **`LIBER QUARTUS.` at col. 0354C, at the very end of chunk 0068** — the third
book boundary in this work, after `LIBER SECUNDUS.` (0246C) and `LIBER TERTIUS.`
(0303A), and the first to fall inside a range since the question was closed. **The
brief's §7 result holds a third time:**

- The chunk **before** the head (0068) carries **one italic run and nothing else**:
  the Cant. 3:5 lemma. No guillemets, no notes.
- The chunk **after** the head (0069) carries **four italic runs**: the Cant. 3:6
  lemma, the two marginal numbers *203* and *204*, and the *En lectulum,* cue.
  One `[n:]`, no guillemets.
- Two chunks later (0070) the guillemets return in exactly their pre-boundary
  function — three runs, all scripture adduced as proof (Isa. 28:20, Isa. 57:8,
  James 3:2), identical in kind to 0067's five Exodus/Genesis runs on the far side
  of the head.

**No change of practice at the boundary in either direction.** The question is
closed and this range adds a third confirming instance; nothing was tidied.

⚑ **Head rendering:** `## LIBER QUARTUS.` → `## BOOK FOUR.`, matching 0047's
`LIBER TERTIUS.` → `BOOK THREE.` The head stands at the end of 0068 with no text
after it, exactly as the Latin chunk has it (the chunker's split, not a defect).

⚑ **`CAPUT` numeration mirrored as printed**, per brief §7a: `CAPUT XXIV.`,
`CAPUT XXV.`, `CAPUT XXVI.` (numerals, with the stop) → "CHAPTER XXIV." etc.;
then, after the book head, **`CAPUT PRIMUM.` spelled in words** → "CHAPTER THE
FIRST." (the cruces-0042 §5.5 form), and `CAPUT II.`, `CAPUT III.`, `CAPUT IV.`
back to numerals. **Every head in the range carries its full stop; none was
added or removed.** This is the same word-then-numeral restart Migne made at Book
III (0303A) and it is preserved, not regularized.

### 6a · ⚑ §7a mirroring — the drift point — held word by word

Migne's mixed case runs hard through this range and none of it was regularized:

- ⭐ **0354D, both cases inside ONE sentence, and the lower case is the odd one
  out in its own chunk:** *attendentes quo affectu **Sponsus** erga **virginem**
  teneatur, qua gratia, quo merito supra omnes **virgo** mulieres provehatur* —
  capital *Sponsus*, then lower-case *virginem* AND lower-case *virgo*, in a chunk
  that capitalizes *Virgo* / *Virginis* nine times elsewhere. Rendered "the
  virgin" twice, "the Bridegroom" once. **Do not regularize.**
- ⭐ **0357A and 0357C–D, lower-case *sponsus* three times in a chunk that also
  capitalizes it:** *soli **sponso** placere nititur* (0357A) · *ipse **sponsus**
  per eumdem Isaiam invenitur gravius accusare* (0357C) · *et **sponso** fidem
  servans* (0357D) — against *nec communem accipit **Sponsus** cum adultero
  portionem* (0357C), **eleven words from the second of them**. All four mirrored.
- **0348A, lower-case *filius* twice** — *certum habens **Sponsum** et **filium**,
  suam Dei faciem sic velare, ut non eam videat nisi cui voluerit idem **filius**
  revelare* — capital *Sponsum* beside lower-case *filium* in the same phrase;
  and again at 0349C *Sponsam matrem **filio** singulari quodam privilegio
  cohaerere*. Mirrored; rendered "son" throughout, "Bridegroom" and "Bride"
  capitalized.
- **0356C, lower-case *sancti* with capital *Spiritus*** — *igne **sancti
  Spiritus** concrematur.* English has no exponent for the split (it is "the holy
  Spirit" either way); **rendered lower-case *holy*** to mirror what is printed,
  and noted here rather than silently normalized. Compare cruces-0048's converse
  case at 0305B (*Spiritus **sanctus** superveniet*), which that range noted and
  did not mirror. ⚑ **The merge should settle this one way for the work.**
- **0353B–0354C, *Sponsus* / *Sponsa* / *Virgo* capitalized without exception**
  through the whole of 0068 — sixteen instances, no lower case at all. The
  variation is chunk-local, which is itself the argument for mirroring rather than
  regularizing.
- **0354C, lower-case *liber* twice** — *secundus **liber** hujus operis sumpsit
  finem* and *praesenti **libro*** — in the same paragraph that is immediately
  followed by the display head `LIBER QUARTUS.` Rendered "the second book of this
  work" and "the present book", lower case, against the capitalized head.

### 6b · Marginal source-edition numbers

*200* (0349B) · *201* (0351B) · *202* (0353A) · *203* (0353D) · *204* (0356B) ·
*205* (0358A) · *206* (0359D–0360A). Continuous with cruces-0048's *174*–*182*.
All italic as printed; **0068 carries none**, which is normal for a 505-word chunk.

⚑ **The *206* at the head of 0071 sits between the lemma and the first sentence of
Philip's prose**, i.e. *inside* the paragraph rather than at a break; reproduced in
place.

---

## §7 · CONVENTIONS SET OR HELD IN THIS RANGE

1. ⭐⭐ **`lectulus` = "little bed" vs `lectus` = "bed" — and 0357A is the text
   the rule exists for.** Brief §5 rules the distinction and names 0279B; **this
   range carries the second and more explicit proof.** Philip writes: *quod
   propter et ipsa **non lectus, sed lectulus** meruit appellari, ut **hoc
   diminutivo** quaedam videatur ipsius **angustia** designari, quae ad capiendum
   pariter alterum **non extenta**…* — the whole argument is that the diminutive
   means a bed too narrow for two, and it then runs straight into Isa. 28:20's
   *coangustatum est stratum* and Isa. 57:8's *dilatasti cubile tuum*. **"Bed" for
   *lectulus* would delete the sentence.** Rendered "little bed" at **all ten
   body occurrences** — three in 0069 (*in lectulo* and *eumdem lectulum* at
   0356D, plus the *En lectulum,* cue), six in 0070 (the lemma, 0357A ×3, 0357C,
   0357D), one in 0071 (0360B) — counted 1:1 against the Latin twins by script;
   and "bed" for *lectus* (0357A), *stratum* (0357B ×2) and *cubile / cubili*
   (0357C ×2).
2. **New fixed equivalences this range had to set**, offered to the merge:
   - ***transire* = "to pass by" · *pertransire* = "to pass QUITE by"**, held
     rigidly. *Caput* XXIV is built on the compound: *Transivi… Pertransivi…
     Transivi… Pertransivi…* in four matched pairs, where the simple verb is the
     first, incomplete movement and the compound the completed one (*Transivi, cum
     attendi vigiles factos esse. Pertransivi considerans non a seipsis…*).
     Rendering both "pass by" would collapse the chapter's only structure.
   - ***vigiles* = "the watchmen"** (the Cant. 3:3 *custodes*, carried over from
     the previous range's lemma) · ***custodes* = "the keepers"** at 0357D, where
     the sixty *fortes* are meant and the word must not be confused with the
     watchmen of Chapter XXIV.
   - ***fortes* = "valiant ones" · *fortissimi* = "the most valiant" ·
     *fortitudo* = "valour" · *firmitas* = "firmness"**, fixed at Cant. 3:7 and
     held through *Caput* II–IV, where *fortes ex fortissimis* is expounded as a
     superlative within a class (*fortes illas esse constat et praecipua
     fortitudine commendari*).
   - ***doctissimi* = "most expert" (in war) · *docti* = "expert" · *doctrina* =
     "doctrine" · *eruditio* = "learning" · *scientia* = "knowledge" ·
     *conscientia* = "conscience" · *intellectus* = "understanding"** — *Caput*
     III's last paragraph runs all seven against each other in four sentences
     (*non solum docti, sed et doctissimi* · *scientia sine conscientia* ·
     *Intellectus… non habentibus, sed facientibus intellectum*), and any
     elegant variation dissolves the argument.
   - ***senarius* = "the six" · *denarius* = "the ten" · *sexagenarius* = "the
     sixty"**, as substantives, kept apart from ***denarius* the coin** at 0358B
     (*ipsum paterfamilias laborantibus in vinea jubet dari*), where the pun is
     Philip's whole reason for choosing the number — rendered "that very sum" so
     that the English does not have to choose between the two senses.
   - ***pigmentarius* = "the perfumer" · *pigmenta* = "pigments" · *aromata* =
     "aromatical spices" · *species* = "kinds"**, fixed at Cant. 3:6 and held
     through the *mortariolum* passage (0356B–D).
   - ***sodales* = "the companions"**, fixed at 0353D and held to the end of the
     range; distinguished from *amici* = "friends" at 0360B, where Migne prints
     both together (*angeli qui **amici et sodales** Sponsi… appellantur*).
3. **Brief §5 vocabulary held:** ***charitas* = charity** (0353A, *dum charitate
   flagrans bonis proficientium hilarescit*) kept distinct from *amor* / *dilectio*
   / *diligere* = **love**, which run beside it through 0348A–0350A ·
   ***adolescentulae* = maidens** (0353D) · *Sponsus* = Bridegroom, *Sponsa* =
   Bride, *Virgo* = Virgin (with §6a's lower-case instances mirrored) ·
   ***tomus*, *muraenula*, *vermiculatas*, *cancelli*, *nigra/fusca/formosa*,
   *clementia*, *misericordia*, *recti*, *torcular*, *cellaria*, *moralitas*,
   *candidatio* do not occur in this range.**
4. ⚑ **Pattern 3 does NOT fire anywhere in this range — recorded as a null.**
   Grepped: **no `Scriptura`, `Scripturae`, `Scripturis`, `divina`- or `sacra`-
   form occurs in any of the six chunks.** The nearest approaches are Philip's own
   *ut legistis* (0352B) and *sicut nostis scriptum* (0358A), which are frames, not
   the noun. So the bare-form hazard cruces-0042 §5.3 and cruces-0048 §4.7 flagged
   has nothing to bite on here; the null is reported so the eventual sweep's
   coverage count is complete.
5. **Pattern 17 — checked against the morphology, not the addressee.**
   - **Plural → *you*:** Philip's own frame throughout (*ut legistis* 0352B, *quam
     **nostis** esse propriam electorum* 0352D, *sicut **nostis** scriptum* 0358A,
     *in **nostris** partibus* 0351D, *in **nobis** affectum… **nobisque**
     auditoribus* 0355A), and the whole of the Cant. 3:5 lemma and its exposition,
     which is addressed to the *filiae Hierusalem*: *Adjuro **vos**… ne
     **suscitetis** neque evigilare **faciatis***, and Philip's expansion *non est
     conveniens ut **velitis**… nec est **vobis** liberum* (0353D–0354A).
   - **Singular → *thou*:** only inside the watchmen's speech to the Virgin at
     0348B — *quem **diligis*** · *si vere **desideras** ut ejus aeque visio **te**
     confortet* · *non stare, non haerere, sed potius transire **te** oportet* ·
     ***transi et invenies***. Every one is morphologically singular; rendered
     *thou / thee* without exception.
   - The Virgin's own long speech (0348C–0349A, 0351A–B) is **first person**
     throughout and takes neither.
6. **Philip cites his own work at 0358C, and Migne prints the title with NO
   italics** — *quia **in Responsione de Obedientia** aggressus sum plenius
   expedire, hic brevitatis gratia silentio volui praeterire.* Under brief §7
   italics carry book titles **where Migne prints them**; here he does not, and
   Pattern 6's rule forbids supplying a mark the plate lacks. **Rendered
   title-cased but unitalicized: "in the Response on Obedience"** (Pattern 2's
   locator capitalization, without the italics Pattern 2 would otherwise give). ⚑
   **Offered to the merge as a decision, not asserted:** this is the first
   self-citation to appear in a range file, and if the merge prefers italics it
   must accept that the English then carries a mark the plate does not.

---

## §8 · THINGS DELIBERATELY NOT REPORTED (brief §10, checked once each)

- **Column-band arithmetic.** ⚠ This range contains the most striking-looking
  instance in the work and **it is brief §10.1's class, not a defect**: chunk 0068
  runs `0353B → 0353C → 0354A → 0354B → 0354C` while chunk 0069 opens at
  **`0353D`** and then jumps to `0354D` — i.e. the two chunks **interleave by
  band**, and 0069's `colFirst` (0353D) is *earlier* than 0068's `colLast`
  (0354C). Its `colContext` (0354C) is likewise later than its `colFirst`.
  **Checked as §10.1 requires, on the only real signal: no anchor in any of the
  six chunks is followed by text broken mid-word or mid-construction.** 0067 opens
  with the lemma before its first anchor and 0068 and 0070 and 0071 likewise; all
  normal. **No `[ed:]`, no patch, no plate check, nothing reported.**
- **`noteCount` matches the body `[n:]` count in all six chunks** (0/7/0/1/6/0),
  verified by script against the Latin twins.
- **Attested medieval spellings left alone, unmarked** (Pattern 9): *tanquam*,
  *quandiu*, *quantumcunque*, *quaecunque*, *qualemcunque*, *quovis*, *coelum*,
  *unquam*, *nunquam*, *nonnunquam*, *eumdem*, *quemdam*, *Hierusalem*, *Judaea*,
  *Idumaea*, *haeredibus*, *charitas*, *spiritales*, *thus/thure/thuris*,
  *myrrhoe* (see §2, 0069), *lacrym*-class forms, *coena*-class *oe*, *extimo*
  for *aestimo* (0354C), *cherubin*, *seraphim*, *adgaudebo*, *subfulcitur*,
  *praeoptato*, *deopertam*, *repulsorio*, *mortariolo*.
- **No `[f:]`.** 11632 is lemma-and-gloss, not a florilegium (§10.4).
- **No `[d:]`, no `[nt:]`, no `[ed:]`:** no dittography anywhere in the range, and
  all fourteen notes are bare citations, none editorial prose.
- **Migne's own `( sic )`** does not occur here.
- **Cant. 1:12's *Cum*/*Dum* (brief §8c) does not occur in this range** — the
  lemma has moved to Cant. 3. **Recorded as a null so the merge's count over all
  twenty-one ranges is complete.**
- **Brief §6's two attested Philip readings** (Zech. 4:14 *splendoris*, Gen. 3:19
  *Terra es*) **do not occur here.** Null recorded for the same reason.

---

## §9 · WHAT A LATER BLIND READ SHOULD LOOK AT FIRST

1. ⭐⭐ **0359B, *Dederunt, inquit, in manu regis tenendam legem*** (§1.1). If the
   merge decides the §8a class the other way, this is the strongest candidate in
   my range for a `[var:]` — it carries an *inquit*, the divergence is a single
   word, and Philip glosses that word twice in the sentence before it. The check
   is whether *in manu regis* is absent from every edition of 2 Chron. 23:11 and
   *in manu ejus* is the reading; it is.
2. ⛔ **0351B, *donec cum… intromittam*** (§4). The English is deliberately
   awkward because the Latin is; one letter (*eum*) makes it smooth, which is
   exactly why it must not be changed. **The likeliest silent repair in the
   range.**
3. **0358C, the James 3:2 `[var:]`** (§3). If it is wrong it is wrong on the only
   marker of its kind here. The claim to test is materiality, not existence: the
   divergence is certain, the judgment that *peccat*-vs-*offendit* clears Pattern
   14's threshold is mine, and §3 states the case both ways.
4. **0350A, `[sic: *ama*]`** (§4.2). The one marker in the range whose *class* is
   arguable (Pattern 7's `vul` truncation vs Pattern 12's real-word exemption).
5. **0348B, *quam nescit immutatio vel vicissitudinis obumbratio*** (§2b). The
   second-strongest unmarked candidate: near-verbatim James 1:17 with
   *immutatio* for *transmutatio*, in the watchmen's mouth, carrying nothing at
   all. I judged it Philip's prose because the governing relative and *successurae*
   are his; a reader who disagrees has the evidence here.
6. **§6a's lower-case *sancti Spiritus* at 0356C.** The one mirroring decision in
   this range that another range (cruces-0048 at 0305B) answered the other way.
   It should be settled once for the work, and the two instances are now both on
   record.
