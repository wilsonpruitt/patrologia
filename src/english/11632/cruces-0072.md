# Cruces — 11632 chunks 0072–0077 (cols 0360C–0374A)

Philip of Harvengt, *Commentaria in Cantica canticorum*, PL 203. Six chunks,
5,532 Latin words, covering **Book IV, *Caput* V–XII**: the end of the exposition
of the Song's third chapter (Cant. 3:9–11, *Ferculum fecit sibi rex Salomon* →
*Egredimini, filiae Sion*), then the opening of the Song's **fourth** chapter,
Cant. 4:1–4 (*Quam pulchra es amica mea* → *Capilli tui sicut grex caprarum* →
*Omnes gemellis fetibus* → *Sicut vitta coccinea labia tua* → *Sicut fragmen mali
Punici* → *Sicut turris David collum tuum*).

⚑ **No book head falls in this range**; the chapter numeration runs `CAPUT V.` →
`CAPUT XII.` continuously. ⚠ **But the Song's own chapter division does fall
here**, printed as a bracketed locator *inside* the italic lemma at 0366A —
`[CAP. IV.]` — and reproduced verbatim, after the `[CANT. I.]` precedent of chunk
0003 and the `[CAP. III.]` precedent of 0341D (cruces-0060 §6).

**Marker totals for this range: 3 `[var:]` · 4 `[sic:]` · 0 `[ed:]` · 0 `[d:]` ·
0 `[nt:]` · 0 `[f:]`.** `verify-english.mjs` reports **no errors** on any of the
six (the run's `VERIFY FAILED` is the 48 not-yet-translated chunks after 0077).
Ratios 1.57 / 1.58 / 1.44 / 1.59 / 1.65 / 1.57 — one warning (0076 at 1.63 by the
verifier's own count), inside the band this work has already shipped (0004 1.64,
0005 1.68, 0046 1.68, 0064 1.66).

Column anchors (13/10/4/10/7/11), `[n:]` strings (2/4/1/7/6/0 — each matching its
frontmatter `noteCount`) and guillemet counts (2/2/0/7/6/0 pairs) were diffed
**1:1 against the Latin twins by script, not by eye**: anchors byte-identical in
content, order and place; `[n:]` contents byte-identical in content and order;
`«`/`»` counts equal in every chunk. **No guillemet asymmetry anywhere in this
range** — every « has its », none stray, none unopened.

---

## §1 · ⭐⭐ THE FINDINGS THE MERGE SHOULD CARRY FIRST

### 1.1 · ⭐⭐⭐ Eccles. 9:1 — **the pair is reversed in SIX of the work's seven printings, and no single range could see it**

This is the range's principal find and it is **work-wide**, not local. At **0367A**
Migne prints, inside Philip's own rhetorical question and under `[n: (Eccle. IX.)]`:

> *quis est, inquam, qui non sollicitus occultorum, Domino serviat in timore,
> timens, quia nesciens, utrum **odio** dignus sit an **amore**?*

The Vulgate, Eccles. 9:1, reads *nescit homo utrum **amore** an **odio** dignus
sit.* **The pair is reversed.** Taken alone that is a shrug — it is exactly the
class cruces-0066 §2b logged without comment for 1 Cor. 1:24 (*sapientiam et
virtutem* for *virtutem… et sapientiam*).

⭐ **What makes it a finding is the tally, and the tally required grepping the
whole work.** Eccles. 9:1 is printed **seven times** in 11632:

| Chunk | Col | Printed | Order |
|---|---|---|---|
| 0029 | — | *utrum **odio** dignus sit an **amore*** | reversed |
| 0042 | — | *utrum **odio** dignus sit an **amore*** | reversed |
| 0049 | — | *utrum **amore** an **odio*** | **Vulgate order** |
| 0062 | — | *utrum **odio** digna sit an **amore*** | reversed |
| 0070 | 0358D | *utrum **odio** digni sint an **amore*** | reversed (logged by cruces-0066 §2b) |
| **0074** | **0367A** | *utrum **odio** dignus sit an **amore*** | **reversed — mine** |
| 0125 | — | *utrum dignus **odio** vel **amore*** | reversed |

**Six reversed, one Vulgate.** That is precisely the shape brief §6 names for
Zech. 4:14 and Gen. 3:19 and §8c for Cant. 1:12's *Cum*: a reading that recurs
across many independent settings is copy-text or authorial memory, not a
compositor. And it has the additional feature none of those have — **Migne's own
text contradicts itself once**, at 0049, which is an internal control needing no
appeal outside the work (brief §8b's preferred evidence shape).

**No `[var:]` fired**, and none should have been: at 0367A the words carry no
guillemets and no italics, only the trailing `[n:]`, so §8a's ruling governs and
the boundary cannot be established. **The merge should rule the class once, on
all seven printings.** My own view, offered and reversible: this is a §6-class
attestation of Philip's Bible and belongs in that list, not a defect.

⚠ **And note what it cost to see.** Four ranges have now met this verse and each
logged (or did not log) a single instance. The pattern is invisible from inside
any one range and visible in one grep across all 126 Latin chunks.

### 1.2 · ⭐⭐ 1 Cor. 2:9 at 0372D — three clauses near-verbatim, the middle verb changed, and **nothing marks it at all**

Migne prints, as running text in Philip's own sentence:

> *sed quod oculus non videt, **auris non sustinet**, in cor hominis non ascendit,
> ad exponendum illud praesens locutio non intendit.* (0372D)

The Vulgate, 1 Cor. 2:9, reads *quod oculus non vidit, **nec auris audivit**, nec
in cor hominis ascendit.* Three clauses reproduced almost word for word, with the
tense moved to the present throughout and — the point — **the middle verb replaced:
*sustinet*, "beareth", for *audivit*, "heard".**

**Why it matters.** The substituted verb is the one the argument needs. Philip's
whole paragraph is about *incapacity to take a thing in*: *nos ad capiendum
invalidos*, *si dictum ab hominibus **caperetur***, *ad proferendum ea quae **capi**
poterunt*, *quod nondum **capere** mortalium praevalet intellectus* — four
*capere*-words in eight lines. An ear that has not *heard* is a fact about
history; an ear that cannot *bear* it is the argument. Conform the quotation and
the sentence stops arguing.

**It carries no guillemets, no italics AND no `[n:]`** — invisible in all three of
the extraction's channels, and therefore absent from
`data/quotations/11632/0072-0077.md`. It reached me only on the mandatory second
prose pass. **Ruling applied: logged in full, `[var:]` NOT fired** (brief §8a).
The English renders what is printed: "but what the eye seeth not, **the ear
beareth not**, what ascendeth not into the heart of man, the present speech
purposes not to expound."

### 1.3 · ⭐⭐ Cant. 4:1–2 prints ***grex*** where the Vulgate has ***greges*** — and Philip's chapter is an argument about the singular

The head lemma of *Caput* VIII (0367A, before the first anchor):

> *Capilli tui sicut **grex** caprarum, quae ascenderunt de monte Galaath. Dentes
> tui sicut **grex** tonsarum quae ascenderunt de lavacro.*

The Vulgate reads *capilli tui sicut **greges** caprarum… Dentes tui sicut
**greges** tonsarum…* — plural in both clauses.

⭐ **The divergent word is the one expounded, explicitly and at once:**

> *Et signanter **non capris, sed gregi caprarum** capillos Virginis comparavit, in
> quo sedulum auditorem ad intelligendam **collectionem sensuum** invitavit, quia
> eos ab invicem vaga discursio vel furtiva dissolutio non abegit, sed **in gregem**
> casta confoederatio sub pastoris cura et baculo sic redegit…* (0367D–0368A)

The chapter's whole point is that ONE flock is named, not goats at large: the
gathering-together of the senses. A plural would leave *collectionem sensuum*
arguing from nothing. **`[var:]` FIRED**, placed immediately after the lemma and
covering both clauses.

⚑ **Two further facts, both checkable inside the work, and both belong with it:**

1. **The Vulgate's own parallel at Cant. 6:4–5 IS singular** — *capilli tui sicut
   **grex** caprarum… Dentes tui sicut **grex** ovium.* So the 4:1–2 lemma as Migne
   prints it has the form of its own later parallel. The `[var:]` says so; it does
   not speculate why (Pattern 14).
2. **Philip glosses the teeth with *ovium*, the word of 6:5 and not of 4:2** —
   *Qui dentes non incongrue **gregi ovium** comparantur* (0368D–0369A), where his
   lemma had *tonsarum*. Recorded, unmarked.

⭐⭐ **And this is an INTERNAL CONTROL on cruces-0024's marker, which should be
recorded as one.** That range fired a `[var:]` at 0244B where Migne prints
« Capilli tui sicut caprarum, dentes tui sicut **grex** ovium `[n: (Cant. VI)]` » —
*grex* **dropped** from the first clause — and noted that "the singular *grex*
Philip's argument turns on is absent." The two markers are the same argument from
opposite directions, sixty columns apart, and they corroborate each other:
**Philip's exposition depends on the singular at Cant. 4 and at Cant. 6 alike**,
and Migne's settings damage it once by dropping it and once by importing it.
Chunk 0109 (a later range, Cant. 6:4–5 proper) prints *grex* twice and will need
to match.

### 1.4 · ⭐ Luke 6:17 at 0368A prints ***de monte*** for the Vulgate's *cum illis* — and *de monte* is the proof

Migne, guillemeted:

> « Descendens, ait, Jesus **de monte** stetit in loco campestri `[n: (Luc. VI)]`. »

The Vulgate reads *et descendens **cum illis** stetit in loco campestri.* The
mountain is not in the verse.

**It is adduced for exactly the missing words.** The two sentences before it are
*cum magis, sicut de campo ad montis sublimia fit ascensus, sic **de monte** ad
campestria significatione verborum propria sit **descensus***; and the sentence
after it, *Cum igitur **de monte** non ascensio, sed descensio rectius dici possit*.
Philip is proving that one goes DOWN from a mountain, and the proof-text as the
Vulgate prints it names no mountain at all. **`[var:]` FIRED** — the span is
guillemeted, so a marker is available (contrast §1.2, which is not).

⚑ **It is printed a second time in the work, and that strengthens it.** At 0239D
(chunk 0023) Philip writes in his own prose, under `[n: (Luc. VI)]`, *the
Bridegroom, coming down from the mountain, stood in a plain place* — the same
addition, unmarked and unnoted there. **Two printings** puts it in the class of
§6's repeated readings rather than a single slip; the merge may want it in that
list. The siglum `(Luc. VI)` is **correct** for Luke 6:17.

### 1.5 · ⚠ *(Job. II)* at 0370A is wrong — **and the verse it points at is a QUESTION where Migne prints a negative statement**

Migne prints: « Vir, inquit, verbosus non justificabitur `[n: (Job. II)]`. »

The words are **Job 11:2** — *numquid qui multa loquitur non et audiet? aut **vir
verbosus iustificabitur**?* — the only place in the Vulgate where *vir verbosus*
occurs.

Two separate defects, and they must be told apart:

- **The siglum is wrong**: `(Job. II)` for Job XI. ⚑ **A shape not yet in brief
  §8b's list**: not off-by-one-chapter, and not book-cited/words-elsewhere. It is
  a *numeral* defect — `II` for `XI`, an X lost — which is the sigla analogue of
  the truncation class Pattern 7 names (`vul` for *vult*). Reproduced verbatim,
  corrected nowhere; no following *Ibid.* depends on it.
- **The wording carries a *non* the Vulgate does not print in that clause.** The
  Vulgate's clause is an interrogative expecting the answer "no"; Migne's is a
  declarative with the negative supplied. The assertion is materially the same,
  which is why this was a close call — **but §9's negation discipline is the
  reason it got a `[var:]`**: a reader who checks Job 11:2 will find no negative
  particle there, and the difference between "shall a wordy man be justified?" and
  "a wordy man shall not be justified" is exactly the kind of thing this edition
  exists to make visible. **`[var:]` FIRED**, naming the witness and quoting the
  interrogative in full so nothing is elided.
  ⚠ **Stated so the merge can reverse it:** if the merge holds that a rhetorical
  question and its negative answer are the same assertion (Pattern 14's
  sense-threshold), delete the marker and keep the log. The divergence itself is
  not in doubt.

---

## §2 · THE COLLATION — all 49 listed spans, plus 22 found on the prose pass

Every span in `data/quotations/11632/0072-0077.md` was collated word by word
against the Vulgate. **Spans recorded as AGREES were collated and found to agree;
the absence of a marker on them is a finding, not a silence.**

### 0072 (cols 0360C–0363C) — 4 spans, 2 notes, 2 guillemet pairs

| Span | Verse | Verdict |
|---|---|---|
| *Ferculum fecit sibi rex Salomon de lignis **Libam**, columnas ejus fecit argenteas, reclinatorium aureum: ascensum purpureum, media charitate constravit propter filias Hierusalem.* | Cant. 3:9–10 | ⭐ **`[sic:]` FIRED on *Libam* — see §4, item 1.** Everything else **AGREES** word for word with the Vulgate, orthography apart (*charitate* for *caritate*, *Hierusalem* for *Ierusalem*, both Pattern 9). The two verses run together with no division printed. |
| *candidatio,* (0361A) | — | **Not scripture**: the etymology of *Libanus*, displayed as a word. **Translated with the italics kept** ("*a whitening*"), per brief §5's explicit ruling — and **this is the passage that ruling was written for**: see §5.2. |
| « Charitas enim et vinculum perfectionis est `[n: (Col. IV)]`; » | **Col. 3:14** | Vulg. *super omnia autem haec caritatem habete, **quod est vinculum perfectionis***. Migne turns the relative clause into an independent sentence with *enim* and *et* ("for charity is ALSO the bond of perfection"), and *vinculum perfectionis* is verbatim. Recasting, not a variant reading; sense untouched. **Logged, no marker.** ⚠ **Siglum WRONG — `(Col. IV)` for Col. III. Off by exactly one chapter**, brief §8b's first attested shape. See §5.1. |
| « operit multitudinem peccatorum `[n: (I Petr. IV)]`. » | 1 Pet. 4:8 | **AGREES word for word** (Vulg. *quia caritas operit multitudinem peccatorum*; Migne quotes from *operit*, letting the preceding *Charitas* serve both). ⭐ **Siglum correct** — a §8b "log the ones that are RIGHT" item, and worth counting because it sits eight words from a wrong one. |

Marginal source-edition numbers: *207* (0361B) · *208* (0363A).

### 0073 (cols 0363D–0366A) — 5 spans, 4 notes, 2 guillemet pairs

| Span | Verse | Verdict |
|---|---|---|
| *Egredimini, filiae Sion, et videte regem Salomonem in diademate quo coronavit **eum** mater sua, in die desponsationis **ejus**, et in die laetitiae cordis ejus.* | Cant. 3:11 | Vulg. *Egredimini **et videte, filiae Sion**, regem Salomonem in diademate quo coronavit **illum** mater sua in die desponsationis **illius**, et in die laetitiae cordis eius.* Three divergences, **all sense-neutral**: the vocative is moved inside the pair of imperatives, and *illum/illius* become *eum/ejus* with the same referents. Pattern 14's threshold not reached. **Logged, no marker.** Compare cruces-0060 §1.1, where a transposed vocative in Cant. 2:17 was likewise logged and not marked. |
| *Diadema Salomonis… cum novum quid Dominus fecit, et femina virum circumdedit, juxta vaticinium Jeremiae* `[n: (Jer. XXXI)]` (`[n:]`-only) | Jer. 31:22 | **Philip's own prose.** Vulg. *quia **creavit** Dominus novum super terram: femina **circumdabit** virum* — Migne has *fecit* for *creavit*, drops *super terram*, and turns the prophetic future *circumdabit* into a perfect. All three changes are forced by his own *cum*-clause frame. **No marker**, per §8a. Siglum **correct**. ⚑ Note *circumdat virum femina* recurs in his own voice at 0365B, present tense — a third form of the same clause inside one chunk. |
| *Virgo tamen concipiens et pariens, testimonio nihilominus Isaiae* `[n: (Isa. VII)]` (`[n:]`-only) | Isa. 7:14 | **Philip's own prose.** Vulg. *ecce virgo **concipiet et pariet** filium*; the two futures become his participles and the object is dropped. **No marker.** Siglum **correct**. |
| « Videmus, ait Paulus, Jesum propter passionem mortis gloria et honore coronatum `[n: (Hebr. II)]`. » | Heb. 2:9 | **AGREES word for word** with the Vulgate's second half (*…**videmus Iesum propter passionem mortis gloria et honore coronatum***), truncated at the opening (*eum autem qui modico quam angeli minoratus est*), with *ait Paulus* as the Pattern 5 interruption. Siglum **correct**. |
| « Exsultavit, inquit, spiritus meus in Deo salutari meo `[n: (Luc. I)]`. » | Luke 1:47 | **AGREES word for word** (Vulg. *et exsultavit spiritus meus in Deo salutari meo*; the *et* is displaced by the interrupting *inquit*, the class cruces-0066 §2 recorded at Isa. 28:20). Siglum **correct**. |

Marginal number: *209* (0364D).

### 0074 (cols 0366B–0367A) — 11 spans, 1 note, 0 guillemets

| Span | Verse | Verdict |
|---|---|---|
| *[CAP. IV.] Quam pulchra es amica mea, quam pulchra es, oculi tui columbarum, absque eo quod intrinsecus latet.* | Cant. 4:1 | **AGREES word for word.** Migne's punctuation is commas where modern editions print exclamations; preserved (Pattern 8). The printed locator `[CAP. IV.]` stands inside the italic run and is reproduced verbatim. ⭐ ***amica mea* = "my friend"**, brief §5's starred rule — see §5.1. |
| *Ecce tu pulchra es, ecce tu pulchra;* (0366B) | Cant. 1:14 (Vulg. 1:15) | ⚑ Vulg. *Ecce tu pulchra es, **amica mea**, ecce tu pulchra.* Migne omits *amica mea* — **and the omission is Philip's argument, not a defect**: he is quoting the earlier verse *in order to contrast its opening particle with this one's*, and prints the two openings stripped to what differs (*ecce* against *quam*). Truncation for the sake of the comparison. **Logged, no marker.** |
| *Quam pulchra es, quam pulchra.* · *Quam pulchra es,* / *amica mea, quam pulchra.* (0366B) | Cant. 4:1 | Re-quotations of the head lemma, the second broken around *inquit* (Pattern 5). **AGREE.** |
| *ecce* · *quam* (0366B) | — | **Not quotations: words discussed AS words**, brief §7's named italic class. **Kept in Latin, italic**, exactly as Migne prints them; the sentence they stand in is a comparison of two Latin particles and Englishing them would dissolve it. |
| *Absque eo,* / *quod intrinsecus latet.* (0366C) | Cant. 4:1 | Lemma re-quoted, broken around *ait*. **AGREES.** See §5.3 for the rendering decision. |
| *Quis ille est sanctorum qui absque eo quod latet, se esse glorietur… utrum odio dignus sit an amore?* `[n: (Eccle. IX.)]` (`[n:]`-only) | Ps. 18:13 + Ps. 2:11 + **Eccles. 9:1** | **Philip's own prose** — two rhetorical questions in his own voice, weaving Ps. 18:13 (*delicta quis intelligit? ab occultis meis munda me*), Ps. 2:11 (*servite Domino in timore*) and Eccles. 9:1. Every verb has been moved into his subjunctive. **No marker**, per §8a. Siglum **correct** for the last clause. ⭐⭐ **But see §1.1: this is the range's principal find.** |
| *Capilli tui,* (0367A) | Cant. 4:1b | Lemma cue for the next chapter. |

Marginal number: *210* (0366B).

### 0075 (cols 0367B–0369C) — 14 spans, 7 notes, 7 guillemet pairs

| Span | Verse | Verdict |
|---|---|---|
| *Capilli tui sicut **grex** caprarum, quae ascenderunt de monte **Galaath**. Dentes tui sicut **grex** tonsarum quae ascenderunt de lavacro.* | Cant. 4:1–2 | ⭐⭐ **`[var:]` FIRED on *grex* — see §1.3.** ⚠ ***Galaath* for the Vulgate's *Galaad***: a name-form, sense untouched, **no marker** — but see §5.4, because Migne prints *Galaad* correctly at 0109 and the aspirated form is confined to this one chapter. |
| « Pepigi foedus cum **occulis** meis `[n: (Job XXXI)]`; » | Job 31:1 | **AGREES word for word** apart from the broken *occulis* for *oculis*. ⭐ **`[sic:]` FIRED — see §4, item 2.** Siglum **correct**. |
| « Averte, ait, oculos meos ne videant vanitatem `[n: (Psal. CXVIII)]`. » | Ps. 118:37 | **AGREES word for word** (Vulg. *Averte oculos meos ne videant vanitatem*), the *ait* interrupting after the first word. Siglum **correct**. |
| « Respexit, inquit, humilitatem ancillae suae `[n: (Luc. I)]`. » | Luke 1:48 | **AGREES word for word** (Vulg. *quia respexit humilitatem ancillae suae*, the *quia* dropped with the frame). Siglum **correct**. |
| « Descendens, ait, Jesus **de monte** stetit in loco campestri `[n: (Luc. VI)]`. » | Luke 6:17 | ⭐ **`[var:]` FIRED — see §1.4.** Siglum **correct**. |
| « Ascendit Moyses in montem, et fuit ibi quadraginta diebus `[n: (Exod. XXIV)]`. » | Exod. 24:18 | Vulg. *ingressusque Moses medium nebulae **ascendit in montem**, et fuit ibi **quadraginta diebus et quadraginta noctibus***. Migne abridges at both ends and fronts the verb (*Ascendit Moyses in montem*); every printed word is the Vulgate's. Abridgment, not a variant. **Logged, no marker.** Siglum **correct**. |
| « Descende, inquit, peccavit populus tuus `[n: (Exod. XXXII)]`. » | Exod. 32:7 | **AGREES**; truncated at the opening (Vulg. *Vade, descende: peccavit populus tuus*). Siglum **correct**. |
| *acervum testimonii* (0368B) | Gen. 31:47 | **Verbatim Vulgate** (*et Iacob **acervum Testimonii***), displayed in italics as the interpretation of *Galaath*. Not marked; the italics are Migne's and are kept. |
| « Fecit, inquit, mihi magna qui potens est `[n: (Luc. I)]`. » | Luke 1:49 | **AGREES word for word** (Vulg. *quia fecit mihi magna qui potens est*). Siglum **correct**. |
| *Dentes,* inquit, *tui sicut grex tonsarum quae ascenderunt de lavacro.* (0368D) | Cant. 4:2 | Re-quotation, carrying the same `[var:]`-worthy *grex* already marked at the head lemma (not re-marked; one marker per divergence, at the lemma). ⚠ **Migne breaks the italics between the noun and its possessive** — *Dentes,* inquit, *tui…* — see §3.1 for why the break point could not be reproduced here and how cruces-0066's stricter precedent was departed from, deliberately and with the reason. |
| *Omnes gemellis,* / *Omnes gemellis fetibus, et **sternis** non est inter eas.* (0369A) | Cant. 4:2b | ⭐ **`[sic:]` FIRED on *sternis* for *sterilis* — see §4, item 3.** The rest **AGREES** word for word. |
| *Sicut vitta,* (0369C) | Cant. 4:3 | Lemma cue. |

Marginal numbers: *211* (0368A) · *212* (0369C, at the very end of the chunk).

### 0076 (cols 0369D–0371B) — 9 spans, 6 notes, 6 guillemet pairs

| Span | Verse | Verdict |
|---|---|---|
| *Sicut vitta coccinea labia tua; et eloquium tuum dulce.* | Cant. 4:3a | **AGREES word for word.** (Migne's semicolon where modern editions print a comma; preserved.) |
| « Maria conservabat, inquit, omnia haec conferens in corde suo `[n: (Luc. II)]`. » | Luke 2:19 | Vulg. *Maria autem conservabat **omnia verba haec**, conferens in corde suo.* ⚠ ***verba* is dropped.** The demonstrative still carries the reference and nothing in the exposition turns on the noun (Philip's next sentence is about the lips being unbarred, not about words kept). Below Pattern 14's threshold. **Logged, no marker.** Siglum **correct**. |
| « Pone, inquit, Domine, ostium circumstantiae labiis meis `[n: (Psal. CXL)]`. » | Ps. 140:3 | **AGREES word for word** with the verse's second half (Vulg. *Pone, Domine, custodiam ori meo, et ostium circumstantiae labiis meis*); the first half is not quoted, and the vocative is displaced one place by the interrupting *inquit*. Siglum **correct**. See §5.5 for *ostium circumstantiae*. |
| « Vae mihi, ait Isaias, quia tacui `[n: (Isa. VI)]`. » | Isa. 6:5 | **AGREES word for word.** Siglum **correct**. |
| « Vir, inquit, verbosus non justificabitur `[n: (Job. II)]`. » | **Job 11:2** | ⭐ **`[var:]` FIRED, and the siglum is WRONG — see §1.5.** |
| *Et eloquium tuum dulce.* (0370C) | Cant. 4:3a | Lemma re-quoted. **AGREES.** |
| « Quam magna, inquiunt, multitudo dulcedinis tuae, Domine, quam abscondisti timentibus te `[n: (Psal. XXX)]`. » | Ps. 30:20 | **AGREES word for word.** ⚑ Note the plural *inquiunt* — the speakers are the Virgin's *labia*, not a person; rendered "they say". Siglum **correct**. |
| « Propter fratres meos, ait ille, et proximos meos loquebar pacem de te `[n: (Psal. CXXI)]`. » | Ps. 121:8 | **AGREES word for word.** Siglum **correct**. |
| *Sicut,* (0371B) | Cant. 4:3b | Lemma cue. |

Marginal number: *213* (0371B).

### 0077 (cols 0371C–0374A) — 6 spans, 0 notes, 0 guillemets

| Span | Verse | Verdict |
|---|---|---|
| *Sicut fragmen mali Punici, ita genae tuae, absque eo quod intrinsecus latet.* | Cant. 4:3b | **AGREES word for word.** |
| *Absque eo,* / *quod intrinsecus latet.* (0372C) | Cant. 4:3b | Lemma re-quoted, broken around *inquit*. **AGREES.** ⭐ See §5.3: *absque eo* is glossed **differently here from *Caput* VII**, and the rendering had to serve both. |
| *Sicut turris David collum tuum, quae aedificata est [0373A] cum propugnaculis.* | Cant. 4:4a | **AGREES word for word.** ⚠ The column anchor falls **inside the lemma**, between *est* and *cum*; reproduced in place. |
| *manu fortis,* (0373B) | — | **Not scripture**: the etymology of *David*, displayed as a phrase. **Translated with the italics kept** ("*strong of hand*"), per the *candidatio* rule — the next clause is *cujus manum inexpugnabilem*, so the hand must be visible in English. |
| *Mille,* (0374A) | Cant. 4:4b | Lemma cue for the next chapter. |

Marginal number: *214* (0372D).

### 2a · The `[n:]`-only class — **hit rate 0 of 3 on the listed spans**

All three listed `[n:]`-only spans (0364B *Diadema Salomonis… juxta vaticinium
Jeremiae*; 0364B *Virgo tamen concipiens et pariens… testimonio Isaiae*; 0367A
*Quis ille est sanctorum…*) are **Philip's own prose**, by the mechanism the
previous four ranges measured: he absorbs the scriptural words into his rhymed
clause-endings and his own subordination, which forces a change of person, tense,
mood or subject. **Hit rate: zero.**

**Running total across the five ranges that have reported it: 0 of 86.**

⛔ **And, exactly as cruces-0066 said, that null is why the separate prose pass is
not optional.** The `[n:]`-only class caught nothing here; **the unmarked,
unnoted class caught the range's two strongest finds** (§1.1's Eccles. 9:1 tally,
which begins from a listed `[n:]`-only span but is only visible work-wide, and
§1.2's 1 Cor. 2:9, which carries nothing at all) **and twenty more spans below.**

### 2b · Found ONLY on the prose pass — unmarked, unnoted, invisible to the extractor

Twenty-two scriptural weaves carrying **no guillemets, no italics and no `[n:]`**.
None takes a marker (§8a); all are recorded so the merge has the population.

| Col | Printed | Source | Note |
|---|---|---|---|
| 0372D | *quod oculus non videt, **auris non sustinet**, in cor hominis non ascendit* | **1 Cor. 2:9** | ⭐⭐ **§1.2 — the range's second principal find.** Three clauses near-verbatim; the middle verb replaced by the word the argument needs. |
| 0371D–0372A | *quo beatum [sic: *lore*] spondet eum qui **ad petram parvulos** nunc **allidit*** | **Ps. 136:9** | ⚑ Vulg. *Beatus qui tenebit et **allidet parvulos** tuos **ad petram***. Near-verbatim, recast into an accusative-and-infinitive with *nunc*, and **the sentence also carries this range's fourth `[sic:]`** (§4, item 4). The strongest unmarked candidate after §1.2. |
| 0373A | *instar **vitulae quae docta est** jugum **diligere** vel **trituram*** | **Hos. 10:11** | ⚑ Vulg. *Ephraim **vitula docta diligere trituram***. Five of six words verbatim, with *jugum* added from Matt. 11:29–30 (*Tollite iugum meum*), which the same sentence is also weaving (*onus grave… ut suave*). Unnoted, unmarked. **Second-strongest candidate.** |
| 0365D | *etsi nomine Christianus **pietatis specie** dealbescit, ejus tamen **virtutem abnegans*** | 2 Tim. 3:5 | ⚑ Vulg. *habentes **speciem** quidem **pietatis**, **virtutem** autem eius **abnegantes***. Both halves near-verbatim inside his own concessive; the participle is made singular to agree with *Christianus*. |
| 0366C | *pulchra superficies, et **ovina**, **intrinsecus autem lupi** rapacitas* | Matt. 7:15 | ⚑ Vulg. *veniunt ad vos in vestimentis **ovium**, **intrinsecus autem** sunt **lupi rapaces***. *intrinsecus autem lupi* is verbatim; the adjective is abstracted to *rapacitas* to match his *fraudulentia serpentina*. |
| 0364D | *speciosum forma prae filiis hominum intuetur* | Ps. 44:3 | ⚑ Vulg. *Speciosus forma prae filiis hominum* — **verbatim except for the case**, pulled into the accusative by his own *intuetur*. Prose. ⚑ Compare chunk 0006, where a range fired a `[var:]` on a Ps. 18:6 / Ps. 44:3 **fusion**; here the verse stands alone and unmarked. |
| 0364C | *non habere putat **speciem vel decorem*** | Isa. 53:2 | Vulg. *non est **species** ei, **neque decor***. Near-verbatim, turned into indirect statement. |
| 0361A | *mons domus Domini praeparatur* | Isa. 2:2 | ⚑ Vulg. *erit **mons domus Domini praeparatus** in vertice montium* — four words verbatim, the participle turned into a present passive to fit his relative clause. |
| 0361A | *qui candor lucis aeternae* | Wisd. 7:26 | Vulg. *candor est enim lucis aeternae*. Near-verbatim, the copula dropped. |
| 0361A | *ligna cujus plantata **secus aquas** Siloe non arescunt* | Ps. 1:3 + Isa. 8:6 | A **fusion** (Vulg. *lignum quod plantatum est **secus decursus aquarum*** with Isaias's *aquas Siloe*), so no marker on the cruces-0000 item-12 conflation precedent. |
| 0360C | *cibum qui non perit, sed qui permanet* | John 6:27 | ⚑ Vulg. *operamini non **cibum qui perit, sed qui permanet** in vitam aeternam* — seven words verbatim, with *non* moved so that it negates the perishing rather than the working, and the eternal-life tail dropped. |
| 0362A | *caput suum **a conturbatione hominum** reclinavit* | Ps. 30:21 + Matt. 8:20 | Two verses fused: the Psalm's *a conturbatione hominum* (verbatim) with the Gospel's *ubi caput reclinet*, which Philip has already used in his own voice at 0361C. |
| 0363A | *cui **diffusa charitas** non sit necessaria superponi* | Rom. 5:5 | *charitas… diffusa* is the epistle's word-pair, and it is the whole chapter's keyword. Prose. |
| 0360D | *amaros in dulcorem precis suae **farinula** nos convertit* · *silvestri prius amaritudine* | 4 Kings 4:38–41 | ⚑ **An allusion with no verbatim words** — Eliseus's pot of death, the *herbas silvestres* and the meal that takes the bitterness away. Recorded because the two halves sit eight words apart and are unmistakable, not because anything is quotable. |
| 0361A | *bona cujus arbor cujus fructum nonnisi bonum facere comprobatur* | Matt. 7:17–18 | Prose. |
| 0361C | *cum virtute Altissimi verbum Patris Virgo permanens est enixa* | Luke 1:35 | Prose. |
| 0362A | *cum Petrus crepuit, Joannes resiliit, fugerunt omnes* | Matt. 26:56 / John 19:25 | Prose; the note-less report of the Passion narrative. |
| 0364A | *in his quae sunt retro, non est vobis diutius remanendum* | Phil. 3:13 | Prose. |
| 0365D | *cujus regni finis, cujus imperii terminus non habetur* | Luke 1:33 | Prose. ⚠ The Latin prints **one** *non* governing both genitive phrases; the English carries one negative ("of whose kingdom the end, of whose empire the term, is not had"), deliberately not two (§9). |
| 0365D | *abscondendum sub modio non putant* | Matt. 5:15 | Prose. |
| 0369B | *mandatum primum et secundum simile venerantur* | Matt. 22:38–39 | ⚑ Vulg. *Hoc est maximum et **primum mandatum**. **Secundum** autem **simile** est huic.* Four words verbatim, collapsed into one accusative object. Prose. |
| 0369D | *cum sapiens usque ad tempus taceat* | Ecclus. 20:7 | ⚑ Vulg. *Homo **sapiens tacebit usque ad tempus***. Near-verbatim, the future turned into his subjunctive. Prose. |

⚑ **Also present and deliberately not tabulated**, being single-word or
formulaic: *aures habentibus audiendi* (0369D, Matt. 11:15) · *quadam peccati
lege* (0366D, Rom. 7:23) · *de virtute in virtutem*, inverted to *in virtutem de
virtute* to match *de monte in montem* (0368B, Ps. 83:8) · *de vivis et electis
lapidibus* (0368C, 1 Pet. 2:4–5) · *sermonem durissimum de incarnato Verbo*
(0368D, John 6:61) · *substantiam gigantis geminam* (0369B, Ps. 18:6) · *velut in
camino aurum purificat* and *quae urit nec comburit* (0371A, Prov. 17:3 / Exod.
3:2) · *pati oportere omnem qui pie vivere non fastidit* (0372A, 2 Tim. 3:12) ·
*ad infirma et egena mundi transitoria* (0373A, Gal. 4:9) · *qui omnium colla
praesentium colaphizat* (0373A, 2 Cor. 12:7) · *impulsu ventorum sive illisione
fluminum non movetur* (0373B, Matt. 7:25).

⭐ **One of these deserves naming: Luke 2:35 at 0372B** — *nec tam corpus quam
animam **gladius** vel tribulatio **transeat** insuavis*, against Vulg. *et tuam
ipsius **animam pertransibit gladius***. Three words of the Simeon prophecy inside
a sentence about the Virgin being broken like a pomegranate, and Philip does not
flag it. Unmarked, and recorded here because it is the one place in the range
where an unmarked weave carries doctrinal freight.

---

## §3 · TYPOGRAPHY — brief §7 and §7a

### 3.1 · ⚠ A Pattern 5 break that could NOT be reproduced at Migne's point — and the reason

At **0368D** Migne prints *Dentes,* inquit, *tui sicut grex tonsarum…* — the
italics broken **between the noun and its possessive**. cruces-0066 §2 met the
same device at 0348C (*Cum pertransissem,* inquit, *eos…*) and reproduced the
break exactly, on the Pattern 5 principle that the typography is a fact of the
page. **Here that is not available.** Latin can front *Dentes* and defer *tui*;
English cannot ("*Teeth,* he says, *thy are as a flock*" is not a sentence).

**Rendered "*Thy teeth,* he says, *are as a flock of the shorn…*"** — the *inquit*
kept inside the printed run and at the earliest point English admits, one word
later than Migne's. **Logged as a departure, not smuggled**: the guillemet/italic
structure and the interruption are both preserved; only the break's exact index
moves. ⚑ **Offered to the merge as a boundary case for Pattern 5**: the rule holds
1:1 for quotation MARKS; for the *position* of an interrupting verb inside a
run it can only hold where the two languages' word orders allow.

### 3.2 · The marks divide by FUNCTION here exactly as brief §7 says — a fifth confirming range

- **Guillemets « »** carry, in all seventeen instances, scripture **adduced as a
  proof-text** (Col. 3:14, 1 Pet. 4:8, Heb. 2:9, Luke 1:47, Job 31:1, Ps. 118:37,
  Luke 1:48, Luke 6:17, Exod. 24:18, Exod. 32:7, Luke 1:49, Luke 2:19, Ps. 140:3,
  Isa. 6:5, Job 11:2, Ps. 30:20, Ps. 121:8). Never the running lemma.
- **Italics `*…*`** carry the running Song lemma and its cues, the two Hebrew-name
  etymologies (*candidatio*, *manu fortis*), the two Latin particles discussed as
  words (*ecce*, *quam*), the printed locator `[CAP. IV.]` **inside** an italic
  lemma run, and the eight marginal source-edition numbers.
- ⚑ **Every `[n:]` that belongs to a guillemeted span prints INSIDE the closing
  »** — seventeen of seventeen, with no exception of the 0235B/0239B kind (the
  remaining three notes are the `[n:]`-only class and stand in running prose). Recorded as a null so the
  merge's count of that variation is complete.
- ⚑ **The `[n:]`-only class here carries a note in the ordinary parenthesis form**
  and there is no bare-locator-inside-a-run case (the 0232D/0236D shape). Null
  recorded.

**No `( sic )` of Migne's own occurs in this range. No `[ *alias* …]` bracket
occurs** (brief §10.7's singleton is at 0321B and stays a singleton).

### 3.3 · ⚑ §7a mirroring — the drift point — held word by word

Counted against the Latin twins by script; **nothing regularized in either
direction.**

- **0363C, three lower-case forms in one clause, in a chunk that capitalizes
  elsewhere:** *Tale quippe ferculum Salomon, **sponsus sponsam**, Christus
  Virginem sibi voluit exhibere* — lower-case *sponsus* AND *sponsam* beside
  capital *Virginem*, in a chunk that prints *Sponsi* (0360C), *Sponsus* (0360C)
  and *Sponsa* (0360D) with capitals. All mirrored.
- **0360D–0362A, *sponsum / sponso / sponsae* lower-case six times** — *quia
  **sponsum** rogans* · *solum **sponsum** amplectatur* · *Denique **sponso**
  adhaerere* · *nec amare destitit **sponsum sponsae** intuitu morientem* · *0363A
  **sponso et sponsae** colloquentibus*. Against capital *Sponsi convivium* and
  *idem **Sponsus** voluit* in the same chunk. Mirrored.
- **0363D, lower-case *sponsae* and *sponso* in one clause** — *ne in hoc
  **sponsae** quam **sponso** viderentur amplius contulisse* — in a chunk whose
  other three are capitals (*Ingresso quippe **Sponso***, *factus est **Sponsus**
  ejus*, *suam diu **Sponsus** praesentiam*). Mirrored.
- **0369C, lower-case *sponsum*** — *quem **sponsum** et filium Virgo diligit se
  habere* — in a chunk with three capital *Sponsus* and one capital *Sponsa*.
  Mirrored.
- ⭐ **0366B, lower-case *virginis*** — *et laus ista **virginis** alia hic
  particula praevenitur* — the **only** lower-case *virgo*-form in the whole range,
  in a chunk that capitalizes *Virginem* twice and *Virginis* once. Rendered "this
  praise of the virgin". **Do not regularize.**
- ⭐⭐ **The *sancti Spiritus* question gets a THIRD and FOURTH instance here, and
  both fall on cruces-0066's side.** Migne prints **`sancto Spiritui`** — lower-case
  adjective, capital noun — **twice in chunk 0075** (0368B *cura fuit **sancto
  Spiritui** disputare*; 0369C *non est **sancto Spiritui** multa cura*), and
  **`sanctus … Spiritus`** at 0365C (*quam singularem **sanctus** fecundare
  **Spiritus** usurpavit*). All three **mirrored with lower-case "holy"** — "the
  holy Spirit" — matching cruces-0066 §6a's 0356C decision and differing from
  cruces-0048's 0305B, which did not mirror.
  ⚑ **The work's tally is now: lower-case *sanctus/sancti/sancto* + capital
  *Spiritus* at 0356C, 0365C, 0368B, 0369C; capital *Spiritus sanctus* at 0305B.
  Four to one.** That is enough for the merge to settle it, and the majority
  practice is mirroring. Also in this range: capital *artifex **Spiritus*** (0364C)
  and *obumbrante **Spiritu*** (0365B) with no adjective, and lower-case *matris
  **spiritus** hilarescit* (0365C) of the Virgin's own spirit — all mirrored.
- ⭐ **0365D, capital `Sodales`** — *Ideo **Sodales** vel angeli quibus datum
  fuerat…* — against lower-case *sodales* five times elsewhere in the range (0361A,
  0363C, 0365B, and twice in 0072). **Rendered "the Companions" with a capital**,
  which looks odd in English and is meant to. Mirrored, not tidied.
- **0365D, lower-case *filius* / *filio* / *filii*** — *quidquid in **filio**
  carnis assumptio* · *ex qua idem **filius** voluit incarnari* (0366A) · *imperans
  **filio*** (0360D). All rendered "son", lower case, beside capitalized
  "Bridegroom" and "Virgin".
- **`CAPUT` heads mirrored as printed:** `CAPUT V.` through `CAPUT XII.`, all
  numerals, **all with the full stop except `CAPUT IX`, which has none** (0075's
  second head). ⚑ **The missing stop is reproduced**: the English head reads
  `## CHAPTER IX` with no stop, against `## CHAPTER VIII.` eight lines above it in
  the same file. This is the §7a discipline applied to punctuation, and it is
  mechanically checkable against `heads[]` in the frontmatter, which carries the
  same asymmetry.

### 3.4 · Punctuation — Pattern 8, four live cases, all preserved

- ⭐ **0366B, a full stop in mid-sentence with a lower-case word after it.** *Quia
  verba haec, ut potestis meminisse, retro sunt **posita. et** in secundo hujus
  operis libro utcunque exposita.* The stop belongs nowhere and the *et* that
  follows it is lower case. **Brief §5 is explicit that Migne's lower case after a
  misplaced stop stands.** Preserved exactly: "…are set down further back. and in
  the second book of this work are in some fashion expounded". ⚠ **This is the
  sentence in my range most likely to be quietly tidied by a later editor**, and
  the tidying is one keystroke.
- **0366B, no punctuation where a sentence ends.** *hic vero *quam* ponitur,
  exaggeratio scilicet admirantis **illic** intelligitur testificatio tantum
  pulchritudinis ostensiva…* — a new clause begins at *illic* with no stop, no
  comma, nothing. **Not supplied** (Pattern 8); the English runs on identically.
- **0366D, a missing comma before *tamen*.** *etsi eos intrinsecus non inficit
  assiduitas **virulenta tamen** dum tenentur in corpore…* Preserved.
- **0371C, a missing comma inside a two-limbed comparison.** *speciosis vilia
  **mansoriis** transitoria similari* — Migne prints no comma between the two
  pairs. Preserved: "mean things be likened to beautiful, transitory things to
  abiding". ⚑ *mansorius* is a late formation on *maneo*; Pattern 9, unmarked.

---

## §4 · PATTERN 7 AND PATTERN 10 — four `[sic:]`, and what was NOT marked

**None of the four carried runs is ALSO translated in the running text** (brief
§8's named failure — checked word by word on a separate pass, and each content
string re-verified as a verbatim substring of its Latin twin by script).

1. ⭐⭐ **0360C `[sic: Libam]`** — *Ferculum fecit sibi rex Salomon de lignis
   **Libam***. The Vulgate and every edition read *Libani*, and **Migne's own next
   sentence but four prints it right**: *Est enim facta de lignis **Libani**.
   **Libanus** mons est…*, followed by *Libanus autem interpretatur candidatio* and
   nine more lines on the mountain. So the lemma is a broken setting of a word the
   plate gets right three times within twenty words — the strongest internal
   control of any `[sic:]` in the range. *Libam* would be a form of *libo*, which
   cannot stand in a genitive-of-material slot; it is a non-word here and is
   **carried untranslated**. The English reads "of the wood of [sic: Libam]" and
   does **not** also say "Libanus" at that point.
   ⚠ **A formatting decision, recorded because the merge may want it uniform:** the
   run sits **inside an already-italic lemma**, so per Pattern 10 it takes **no
   second italic marker** — the tag is written `[sic: Libam]` with no inner
   asterisks, exactly as Pattern 10 prescribes for this position. The other three
   `[sic:]` in this range are in roman context and take the asterisks
   (`[sic: *occulis*]`, `[sic: *lore*]`); `[sic: sternis]` is the second
   inside-a-lemma case and is written the same way as *Libam*. **Two conventions in
   one range, and the difference is the surrounding italics, not a lapse.**
2. **0367B `[sic: *occulis*]`** — « Pepigi foedus cum **occulis** meis ». A
   non-word, doubled *c* in *oculis* — the same doubling class cruces-0066 carried
   at `[sic: *praeccurrentes*]` (0355D), which is the governing precedent in this
   work. Carried; the English reads "I made a covenant with my [sic: *occulis*]"
   and does **not** also say "eyes". ⚠ **The word "eyes" DOES appear nine words
   later**, in the next guillemeted quotation (Ps. 118:37 *oculos meos*), where the
   Latin prints it correctly — that is not a violation of brief §8's rule, which
   forbids translating *the carried run*, but it is exactly the shape that would
   look like one to a grep, so it is named here.
3. ⚠ **0369A `[sic: sternis]`** — *Omnes gemellis fetibus, et **sternis** non est
   inter eas*, for the Vulgate's *sterilis*. **A judgment, and I record it as one.**
   *sternis* is a real word (2nd sing. of *sterno*, "thou strewest") and Pattern 12
   exempts "a real word that is merely wrong" — **but it cannot fill this slot at
   all**: the verb is third-person *est*, the subject slot wants a feminine
   nominative singular, and Philip's exposition supplies the word four times in
   twelve lines (*et **sterilitatis** aliqua non damnetur* · *non capra, non ovis
   **sterilis** est inventa* · *hoc est esse **non sterilem***). It is a single
   changed letter yielding a word, which is the accident cruces-0066 met at
   `[sic: *ama*]` (0350A) and cruces-0048 at `[sic: *signa*]`. **If the merge reads
   it as Pattern 12 instead, the fix is to delete the marker and render "and thou
   strewest is not among them"**, which construes no better. Carried inside the
   italic lemma, no inner asterisks, per §4, item 1.
4. **0371D `[sic: *lore*]`** — *quo beatum **lore** spondet eum qui ad petram
   parvulos nunc allidit*. A non-word: *lore* is no form of any Latin word in this
   position, and the slot wants ***fore***, the future infinitive after *spondet*
   — an `l`/`f` confusion, the same single-letter class as cruces-0066's
   `[sic: *eomparatur*]` (*e* for *c*) and `[sic: *discipliuae*]` (*u* for *n*).
   **The conjecture is near-certain** because *spondere* + accusative demands an
   infinitive and none is otherwise present. Carried; the English reads "whereby he
   promises him blessed [sic: *lore*] who now dashes the little ones against the
   rock" — and the future "shall be" is **not** supplied, which is the point of the
   marker.

### Rendered as printed, no marker — conjectures live HERE and not in the text

- ⛔ **0368B, *invenire* for *invenit / invenitur*.** *…nisi quod profectus magni
  capillorum, id est sensuum indicantur, ad quos relata litteralis illa contextio
  dignam convenientiam **invenire**, quae capris materialibus non videtur
  litteraliter convenire?* The relative clause has an infinitive where a finite
  verb is wanted, and the sentence therefore does not close. A real word, so
  Pattern 12 keeps it on the English side: **rendered as the anacoluthon it is** —
  "to which that literal context, being referred, to find a worthy fitness, which
  does not seem literally to fit material goats?" **Conjecture *invenit*, not
  supplied.** ⚠ **This is the sentence in my range most likely to be quietly
  smoothed**, and the smoothing is two letters.
- **0373D, *reddunt sui prominentiam conscientiam Virginis inconcussam*.** Two
  accusatives where the sense wants an ablative of means (*sui prominentia*).
  Rendered with both accusatives kept in apposition — "render the Virgin's
  conscience — their own jutting-forth — unshaken" — rather than silently demoted
  to an ablative phrase. Conjecture *prominentia*, not supplied.
- **0373D, *varioque provectu operum, quaeque noxia longius prohibere*.** A second
  infinitive hanging on *constat* four clauses back, across an intervening finite
  verb. Rendered as printed ("and, by a manifold advance of works, keep off
  further whatsoever things are hurtful"), the strain left visible.
- **0369C, *quarum diversa quidem et dissimilis (utpote Dei et hominis est
  natura), quae tamen unum Christum, personam unam constituunt in junctura*.** The
  subject slips from singular *natura* inside the parenthesis to plural
  *constituunt* outside it. Rendered as printed, parenthesis in place; no
  concord supplied.
- **0370D, *at quod proferendum prius labia non obtinent vicem vittae*.** The
  gerundive is left without a governing preposition. Rendered literally ("but for
  that which is to be brought forth the lips do not first hold the office of a
  fillet"); **the printed *non* is carried**, though it makes the clause fight its
  own *at*.
- **0369D, *pulsat obediens*.** The lips are the subject two clauses back and the
  Virgin is the subject here; *pulsat* ("knocks") reverses the agency of the
  *manu pulsantis* of the previous sentence. Rendered as printed ("she, obedient…
  knocks in her turn") rather than repaired to *patet* or a passive; the reversal
  is Philip's, or the plate's, and is left visible.
- **0364C, *unde et diadema divisionem demens signare perhibetur*.** *demens* here
  is the present participle of *demere*, "taking away", not the adjective "mad";
  but *signare* is then left without an object. Rendered "whence also the diadem,
  taking division away, is said to signify", the object not supplied.
- **Attested medieval forms left alone, unmarked (Pattern 9):** *tanquam*,
  *nunquam*, *nusquam*, *nonnunquam*, *quandiu*, *quibuscunque*, *quantumcunque*,
  *eumdem*, *quamdam*, *quemvis*, *Hierusalem*, *charitas*, *coelum*, *coena*-class
  *oe*, *spiritalis*, *haeresum*, *Haebraeorum* (0368B — the aspirated *Hebraeorum*,
  ⚑ unique in the range), *Isaias/Isaiae*, *Moyses/Moysen*, *Joannes*, *inpraesentiarum*
  (0372C), *mansorius* (0371C), *aforis* (0373C), *praeoptato*-class formations,
  *lippitudo*, *gurgustium*, *loramentum*, *redimiculum*, *farinula*, *mortariolum*
  (not in range), *dulcor*, *tinnulus*, *conspicuare*, *subrutilare*, *fragrescere*,
  *tenebrescere*, *dealbescere*, *amarescere*, *indulcescere*, *inanescere*,
  *juvenescere* — the *-escere* inchoatives are Philip's signature and are all
  real formations, none marked.

### Negation audit (brief §9)

Every printed *non / nec / neque / nisi / nihil / nil / nullus / nunquam /
nusquam / nequaquam / necdum / ne / nolint* in the six Latin chunks was matched
against the English on a **separate second pass**, after the prose was drafted.
The dense clusters are **0360C–0361A** (*cibum qui **non** perit* · *quae per se
**non** poterant praesentari* · *si **non** Virginis interventu* · ***nec** est qui…
**nisi** quem offerri*), **0361B–0361D** (***non** sensit vermiculum, **non**
admisit… **non** est laesa… **non** disrupta* · *ut **nunquam** sive **nusquam** ex
parte aliqua se inclinet* · ***non** tripodes instabiles, sed columnas* · *auro
melius **nil** habetur* · *earum tamen **nulla** dilectioni potest* · *ut **non**
flexa mobilitate… **non** discurrat, **non** fluctuet… **non** prorumpat…
amplexusque amborum tertius **non** abrumpat* — five in one period),
**0362A–0362B** (*adversis **non** frangitur, tribulationis malleo **non** fatiscit*
· *fugerunt omnes **non** ferentes* · ***nisi** cum labore, **nisi** conatu plurimo
**non** venitur* · ***non** pertingit, **nisi** qui ascensurus* · ***non** obscuras
fuligine* · *purpura quemquam **nisi** principem **non** vestitum* — the double
particle carried whole, "no one was clothed in purple save the prince" ·
***non** saltu praesumptorio*), **0362C–0362D** (*sanguinem manu carnificis **non**
effusum* · *virginei vas corporis **non** pertusum* · ***non** femineis, sed
purpureis* · *lenocinia corporis **non** sentire* · *quod **nulli** satis est
compertum* · ***non** confusa* · *per ascensum **nonnisi** purpureum* · ***non**
tapetibus ex Aegypto, **non** florum novitate* · *ut in eo aliquid **nusquam
penitus** appareret*), **0363A–0363C** (***Nihil** enim sufficiens* · *cui diffusa
charitas **non** sit necessaria* · ***non** digne colligantur, si caemento
charitatis **non** illorum media suppleantur* · ***ne** ab invicem dissiliant* ·
***non** tam propter Virginem, quam propter filias* · ***ne**… **non** praesumerent
arbitrari* · *cujus **nulla** vel modica similitudine* · ***non** diffidunt quin* ·
*quae **non** satis nostri similibus* · *alienum procul dubio **non** habetur* ·
***non** inefficax spes* · ***non** videretur… prohibere* · *etsi **non** prorsus
per omnia*), **0363D–0364B** (***ne** in hoc… viderentur* · ***ne** scilicet…
velint tenebris remanere* · *quia **non** sunt ad videndum idonei* · ***non** est
vobis diutius remanendum* · *quem suo videre **nequeunt**… **nisi** sancti*),
**0364C–0365A** (*quaevis turpia **non** digna Salomone* · ***non** ignominiae sed
honoris, **non** dedecoris sed coronae* · ***nonnisi** spinas aestimat* · ***non**
habere putat speciem* · ***non** solum quia Deus est* · *hominum debitis **non**
tenetur* · *a se dividi **non** permittit* · ***nulla** prorsus abrumpit divisio* ·
***nescit** dividi* · *ab honore et gloria **non** disjungit* · *Quis… **non**
deferat, quis **non** dignam… faciat*), **0365A–0365D** (*tenebras **non** induxit*
· ***nec** alius admittitur, **nullisque** exterioribus patet porta* · ***non** est
nostrum eloqui* · *qui… **non** meruimus introire* · *vix potuit vel ad modicum* ·
***noctem nescit*** · *oculus **non** clarescit* · ***Neque enim vel** ista est
Bersabee* · ***nec** iste est Salomon* · *cujus imperii terminus **non** habetur* ·
***non** Judaeus, **non** Gentilis, **non** potest quilibet anathema* · ***ne**
videantur… invidere* · *abscondendum sub modio **non** putant, **non** silentio
contegendum*), **0366A–0366D** (*gloria **non** aufertur* · *praesentiam **non**
avertit* · *pulchritudinem **non** deesse* · ***non** sunt in isto vel loco vel
tempore iterum exponenda* · ***nulla** inest subdola turpitudo* · *etsi **non**
dealbantur foris* · *etsi eos intrinsecus **non** inficit* · ***nonnunquam velint
nolint*** — the polar pair carried whole · ***non** quidquid mali… statim potest
aliis apparere* · ***nec**… **non solum** ab evidentibus, sed a culpis quoque
latentibus* · ***non** magis delicta **non** intelligens* — two in four words ·
*qui **non** sollicitus occultorum* · *timens, quia **nesciens***), **0367A**
(***nequaquam** erat sibi conscia* · ***non nescia** suorum occultorum* — the
double negative carried whole and NOT resolved into an affirmative ·
*intrinsecus dedecens **nihil** erat*), **0367A–0367D** (***nisi** forte
revocentur* · ***ne** videant vanitatem* · *grata caesaries jam **non** restat* ·
***non** solum ipsum caput* · *si **non** manu apposita… restringuntur* · ***non**
permittit vaga licentia*), **0368A–0369A** (***non** abegit* · ***non** auderet* ·
***nec** expertis faucibus* · ***non** descendere sed ascendere* — the antithesis
that is the chapter's whole point, carried both times · ***Neque enim** de ascensu
caprarum cura fuit* · ***non** juga montium, sed excelsa profectuum* · ***non**
suam ipsius gloriam* · ***non** solum in capillis* · ***non** litteraliter, sed
spiritaliter* · ***ne** falsitatis germina… contradicant* · ***non** incongrue* ·
***non** illarum quae velleris… praegravantur* · ***nil** jam superfluum*),
**0369A–0369C** (***non** capra, **non** ovis sterilis* · ***nulla** fertilium est
contenta* · *contentae **non** habentur* · ***nec** Deum propter hominem, **nec**
propter Deum hominem aspernantur* · *hoc est esse **non** sterilem* · ***non** est
sancto Spiritui multa cura*), **0369D–0370D** (*argui **non** meretur* · ***non
nisi** disciplinam profert* · ***ne** vel immoderato silentio* · *culpa **non**
minore* · ***nec** clausa sint ad tacendum, **nec** ad loquendum tempore **nisi**
congruo resolvantur* — three in one clause · ***ne** superflua loquerentur* ·
***ne** licenter effluant* · ***ne** vagetur* · ***ne** haec vel tempore illicito*
· *si tamen illius sepositae **nunquam desinat** reminisci* · ***non**
reprehenditur, **non** vilescit* · *quod sub labiis **non** formatur, **nec** in
silentio coalescit* · *labia **non** obtinent vicem vittae*), **0370D–0371B**
(***nonnisi** coccineae* · ***non** coccum, sed forte lutum* · *quae urit **nec**
comburit* · *quae luti **nescia**… **non** pallescunt* · ***nec tamen** dissoluta* ·
*amaritudinis umbram **nescit***), **0371C–0372D** (*nostra **non** facile capiat
hebetudo* · *etsi **nulla** aestimari potest* · ***non** privilegio roboratum* ·
***neuter** alteri contradicat* · *a minoribus maxima **non** discernit* · *qui pie
vivere **non** fastidit* · ***non** aegrescit* · *si **non** premitur, si **non**
frangitur* · *defectu lurido **non** pallescit* · *fractum vero **non** minuit* ·
***non** depressa, **non** concussa* · ***non** nigredo sordet* · *decor alius
gratiae **non** minoris* · ***non** dente, sed potius mente* · ***non** solum
candore vel rubore* · ***non** solum opera* · ***nonnisi** virtutum collectio* ·
***non** dat Virgini* · ***non** exponit* · *quod oculus **non** videt, auris
**non** sustinet, in cor hominis **non** ascendit… praesens locutio **non**
intendit* — **four in one sentence, §1.2** · *quod adhuc absconditum **non**
videtur* · *quod **nondum** capere… praevalet*), and **0372D–0374A** (***non**
inflectit* · ***non** deflectit* · *a statu **non** excutit, **nec** more
infirmantium scandalizat* · ***non** laesuram* · ***non** movetur* · *locum suum
**non** dimittat* · ***nec** solum sibi ipsi* · ***non** indecens ornamentum* ·
***non** curat* · ***non** perdurat* · ***non** contemptibili*).

**No negation was dropped and none was supplied.** Three places deserve naming
because carrying the printed reading is what makes the English awkward, and the
awkwardness is the point:

1. **0367A, *non nescia suorum fuerat occultorum*** — a double negative which
   English idiom would resolve into "was well aware". **It is not resolved**:
   "and yet had **not** been **ignorant** of her own hidden things", because
   Philip's whole antithesis is *nequaquam sibi conscia* against *non nescia*, and
   flattening the second destroys the pair.
2. **0362B, *purpura quemquam nisi principem non vestitum*** — *nisi* + *non*
   round a single accusative-and-infinitive. Rendered "that no one was clothed in
   purple save the prince", carrying the *non* in "no one" and the *nisi* in
   "save"; the alternative ("that anyone, unless the prince, was not clothed") is
   not English.
3. **0365D, one *non* governing two genitive phrases** — *cujus regni finis, cujus
   imperii terminus **non** habetur*. English wants two negatives ("no end… no
   bound"); **only one is carried** — "of whose kingdom the end, of whose empire
   the term, is not had" — because supplying the second would be the invented-
   negation half of §9's rule.

---

## §5 · CONVENTIONS SET OR HELD IN THIS RANGE

### 5.1 · ⭐⭐ ***ferculum* STAYS LATIN, italic — the biggest lexical call in this range, and it is offered to the merge with the case stated both ways**

Cant. 3:9's *ferculum* occurs **seventeen times, and only in chunks 0072 and
0073** — nowhere else in the work's 126 chunks (grepped). So no earlier range
constrains it and no later range will meet it. It is mine to set, which is
precisely why it is set out here for reversal.

**The case for translating it.** Douay reads "litter"; brief §5's *candidatio*
ruling says italic Latin is reserved for words with no English exponent, and
"litter" is an exponent.

**The case for keeping it, which is what I did.** *Caput* V is an argument that
the word means a **table**, and it runs the noun against its own plural:

> *Quem lectulum dixerant, dicunt et **ferculum**, in quo multa Salomoni **fercula**
> deferuntur, et epulanti cibum qui non perit… opponuntur.* (0360C)
> *Est enim tanti meriti praedictum **ferculum sive mensa**…* (0360D)
> *…in **mensam et ferculum** est redacta.* (0361B)
> *velut **mensa offertoria*** … *velut a **mensa propitiatoria*** … ***Mensam**
> quippe virgineam praesentavit Salomoni* … *alieni vero **a mensa***…

"Litter" makes *multa fercula deferuntur* unintelligible (a litter has no
courses) and makes *ferculum sive mensa* a non-sequitur. "Table" throws away the
lemma's own word and leaves *columnas, reclinatorium, ascensum* — pillars, a
back, an ascent — describing a piece of furniture no English "table" has. English
has **no word that is both**, which is the *muraenula* test exactly (brief §5:
"'chains of gold' makes seventeen paragraphs explain nothing").

**So: *ferculum* / *fercula* kept in Latin, italic, everywhere** — and the reader
meets Philip's own gloss *ferculum sive mensa* four lines in, which is the
gloss the plate itself supplies. ⚑ **If the merge reverses this, the substitution
is mechanical (17 sites, two chunks) and the crux is here.**

**The three companion lemma-words, fixed with it:** ***reclinatorium* =
"reclining-place"** (not Douay's "back"; the gloss is *ubi caput suum velit aut
valeat **reclinare***, and the root has to survive) · ***ascensus* = "ascent"**,
with *gradus sive scalae* = "steps or stairs" · ***media… constravit* = "the midst
he strewed"**, with *media* kept as the plural neuter Philip re-uses at 0362D
(*Hujus autem ferculi **media***) and 0363A (*in omnium… **medio***).

### 5.2 · Brief §5 vocabulary held — with two starred rules firing here

- ⭐ ***amica mea* = "my friend"** — **fires at Cant. 4:1, one of the six recurrences
  brief §5 names.** Printed three times in chunk 0074 (0366A lemma, 0366B ×2) and
  rendered "my friend" every time. ⭐ **And this range supplies fresh confirmation
  of the rule from the plate**: Philip's own gloss on the word is *tu quae mea es
  amica, et **secreti mei conscia** comprobaris* (0366B) — the sharer of the
  secret, which is John 15:15's *quia omnia quaecumque audivi a Patre meo, nota
  feci vobis* — the very argument brief §5 says was made from John 15:14 at *Caput*
  V of Book I. **The lemma is glossed as friendship twice, ninety columns apart.**
- ⭐ ***candidatio* is TRANSLATED** — and **0361A is the passage the ruling names.**
  *Libanus autem interpretatur *candidatio,* Christum significans, **qui candor
  lucis aeternae***. Rendered "*a whitening*", italics kept, and the very next
  word is *candor* → "brightness"; leaving the Latin standing would put the
  argument's hinge (white → Christ → the wood of the *ferculum*) out of an English
  reader's reach. ⚑ **Recorded emphatically because this is where the rule pays,
  and a later reader who meets italic Latin here will think it a lapse.**
- ⭐ ***lectulus* = "little bed"** — held at 0360C (*Quem **lectulum** dixerant*) and
  0363D (*nunc **lectulum**, nunc ferculum*), continuous with cruces-0066 §7.1's ten
  occurrences. *lectus*, *stratum*, *cubile* do not occur in this range.
  ⚠ **A drift the merge must resolve, spotted while reading the two preceding range
  files:** cruces-0060 §5.1 fixes ***cubile* = "couch"** (Cant. 3:1's argument) and
  cruces-0066 §7.1 renders *cubile / cubili* at 0357C as **"bed"**. Both are inside
  the same work, eleven columns apart, and one of them has to move. **Not my
  range's word, reported because no one else is positioned to see both files.**
- ***charitas* = charity**, kept strictly distinct from *amor* / *dilectio* /
  *diligere* = **love** — and 0362D–0363B is the densest test of that rule in the
  work so far: *media charitate constravit* · *insertae **charitatis**… ornamentum*
  · *cui diffusa **charitas*** · *caemento **charitatis*** · *in omnium medio
  **charitas*** · « **Charitas** enim et vinculum perfectionis » · *quod in illorum
  medio poni **charitas** perhibetur* — **seven in twenty lines**, against
  *dilectionem Virginis* at 0361D and *si **diligant** et eligant **diligenti
  diligentius** adhaerere* at 0363B, which is a four-fold play on *diligere* alone.
  Collapsing them would erase both.
- ***Sponsus* = Bridegroom, *Sponsa* = Bride, *Virgo* = Virgin**, subject always to
  §3.3's case-mirroring.
- **Not in this range:** *tomus*, *muraenula*, *vermiculatas*, *cancelli*,
  *nigra / fusca / formosa*, *clementia*, *misericordia*, *recti*, *torcular*,
  *cellaria*, *moralitas*, *adolescentulae*, *vicus / platea*. ⚑ ***nigredo* does
  occur**, at 0372B (*non **nigredo** sordet interius*), and is rendered
  **"blackness"** — the noun of brief §5's *nigra*, and deliberately not "swarthiness",
  which belongs to *fusca*.

### 5.3 · ⭐ *absque eo quod intrinsecus latet* = "without that which lieth hid within" — Douay's "besides" declined, **because Philip glosses the phrase two DIFFERENT ways and one English has to serve both**

The phrase is printed seven times in this range (0366A, 0366C ×2, 0366D, 0371C,
0372C ×2)
and Douay renders it "besides that which lieth hid within". That would have been
the natural choice. It was declined because the two chapters read it in opposite
directions:

- ***Caput* VII (0366D) reads it privatively** — the Virgin has no hidden fault:
  *cum **absque eo quod intrinsecus latet** Sponsus Virginem dicit esse, **immunem
  eam non solum ab evidentibus, sed a culpis quoque latentibus** probat esse.*
- ***Caput* XI (0372C) reads it as praeteritio** — the Bridegroom is leaving the
  hidden thing unsaid: ***Absque eo**, hoc est **eo tacito** quod adhuc absconditum
  non videtur.*

"Besides" carries only the second; "apart from" carries only the second; **"without"
carries both**, and is what the English prints at all seven sites. ⚑ **Offered to the
merge as a decision, not asserted** — and note that whatever it settles on must
work in both chapters, which is the constraint that is easy to miss when only one
of them is in front of you.

### 5.4 · ⚠ *Galaath* / *Galaad* — an internal inconsistency in Migne, and a warning for a later range

Migne prints **`Galaath` six times in chunk 0075** (the lemma and five
re-quotations, cols 0367A–0368C) and **`Galaad` once, at chunk 0109** — the only
two places the name occurs in the work. The Vulgate has *Galaad* at Cant. 4:1 and
at Cant. 6:4 alike.

**No marker**: an aspirated name-form changes nothing that is asserted, and
*Galaath* is attested in the Old Latin tradition. **But it is logged as a §8b-shaped
internal control** — the same setting-house prints both forms of one proper name
inside one work — and **the range that translates 0109 should be told, because it
will meet the correct form and may take the earlier one for a defect.**

### 5.5 · New fixed equivalences this range had to set, offered to the merge

- ***vitta* = "fillet"** (Cant. 4:3), against Douay's "lace". *Caput* X is entirely
  about a hair-band that binds and is loosed (*qua capilli capitis ne licenter
  effluant revocantur* · *manu sedula tenuem **vittam** solvit* · *tanquam **vittae**
  depositio*), and a "lace" binds nothing. ⚑ The companion ***redimiculum*** at
  0367C is likewise "fillet" (*disciplinae **redimicula** mox imponit*) — the two
  words are the same object in the same argument and were deliberately not split.
- ***coccus / coccineus* = "scarlet"** · ***ruber / rubor / rubeus* = "red /
  redness"** · ***rubicundus* = "ruddy"** · ***candor / candidus* = "whiteness /
  white"** · ***niveus* = "snowy"** · ***lutum* = "mire"**. *Caput* X and *Caput* XI
  run all six against each other (*digne… **non coccum, sed** forte **lutum**
  potius repraesentant* · *rubore **coccineo** modeste **subrutilant*** · *foris
  **rubeus**, intus **niveus*** · ***candore vel rubore***), and any two collapsed
  dissolves a comparison.
- ***fragmen* = "fragment"** (Cant. 4:3b), with *frangere / fractum / fractura* =
  "break / broken / breaking". English happens to preserve the root here as Latin
  does (fragment / fracture), which is why "piece" was declined: *Caput* XI is
  built on *cum **frangitur*** · ***fracta** vero et contrita* · ***necdum
  fractum**… ***fractum** vero* (four matched pairs) · *pressuris et **fracturis***.
- ***propugnacula* = "bulwarks"** (Cant. 4:4), held with *turris* = "tower",
  *munimen / munimentum* = "defence", *civitas* = "city".
- ***eloquium* = "speech"** · ***locutio* = "utterance"** · ***sermo* = "word"** ·
  ***multiloquium* = "much-speaking"** · ***silentium* = "silence"**. *Caput* X runs
  all five in six lines (*et **sermo** in vacuum obscuratur, et **eloquium**
  amarescit* · *placet **locutio** temporiva, et **eloquium** audientibus
  indulcescit*). ⚑ **Note for the merge:** chunk 0032 fired a `[var:]` on the
  **singular *eloquium*** at Ps. 11:7 and expounded it of Peter and John; the
  lemma-noun here is the same word in the same work, and "speech" is what both
  need.
- ***speculum* = "mirror" · *speculari / speculantes* = "to gaze"**. 0363D–0364B
  puns the two (*egressus merito efficimini filiae **speculantes*** · *proposito
  veluti **speculo** tergite maculas* · *hoc **speculandi** studio, et **speculo**
  disciplinae*). English keeps the pun only half; recorded rather than forced.
- ***puella* = "girl" · *juvencula* = "young girl"**, kept clear of
  ***adolescentulae* = "maidens"** (brief §5), which does not occur here. 0363D–0364B
  and 0370B and 0371C are the sites.
- ***officina* = "workshop"** (0364B *reprehensibilis **officinae***, 0370C
  *natalem deserit **officinam***) — the same metaphor twice, six columns apart.
- ***drama* = "drama"** (0372D, *quos in hujus **dramatis** auditorium introducam*).
  ⚑ Recorded because it is **Philip's own name for the Song**, and I have not seen
  it in an earlier range file; the merge may want it in the work's vocabulary.
- ***agon* = "contest"** (0364C ×2), ***conversatio* = "conversation"** (0372A),
  ***discussa conscientia* = "conscience sifted"** — the last held from cruces-0060's
  *discussio* = "sifting".

### 5.6 · Pattern 3 — **fires three times in this range, all in chunk 0077, and two of them on a BARE form**

- **0373D, bare genitive plural *Scripturarum*** — *praecepta vel monita
  **Scripturarum***. Rendered "the precepts or admonitions of **Holy Scripture**".
- **0373D, bare genitive plural *Scripturarum* again** — ***Scripturarum** quippe
  subtilitas et intelligentia spiritalis*. Rendered "the subtlety of **Holy
  Scripture**".
- **0373D, *Scripturae sanctae*** — *gaudet apposito **Scripturae sanctae**
  patrocinio confortari*. Rendered "the patronage of **Holy Scripture**".

⚑ **All three inside eleven lines, and the third is the only one a *sancta*-matching
sweep would catch.** The work's bare-form tally is now: *in Scripturis* (0260A) ·
*Scripturae* gen. sg. (0307D, 0339B) · *Scriptura* nom. (0294A) · *Scripturarum*
gen. pl. (0334C, **0373D ×2**) — **seven bare instances against however many
adjectival ones.** A sweep that matches only *divina / sacra / sancta* misses all
seven. ⚑ **And chunk 0025 has *Scripturae sonat nonnunquam praedicatio*, another
bare genitive singular**, noticed while checking the *grex* control and reported
here because it is outside every range that has yet filed.

### 5.7 · Pattern 17 — checked against the morphology, not the addressee

- **Plural → *you*:** Philip's own frame to his readers (*ut **potestis** meminisse*,
  0366A) and **the whole of chunk 0073's exhortation**, which is addressed to the
  *filiae Sion*: *Egredimini… videte… **Vos** igitur, aiunt, quas invitamus…
  **scitote**… non est **vobis** diutius remanendum… volumus **vos** exire,
  **vestros** exeuntium pedes… **Exite**… **exite**… **exite**… **proficite**…
  **habetote**… **Egredimini**… **purgate**… **tergite**… **impendite**…
  **obtinebitis**… **vobis** dabitur* — **nineteen plural forms in one paragraph**,
  every one rendered "you / your".
- **Singular → *thou*:** the Bridegroom to the Virgin, throughout the Cant. 4
  lemmata and their expositions — *Quam pulchra **es**… oculi **tui**… Quantum ait,
  pulchra **es**, quanta pulchritudine **decoraris**, **tu** quae mea **es** amica*
  (0366B) · *Capilli **tui**… Dentes **tui*** (0367A) · *labia **tua**; et eloquium
  **tuum*** (0369C) · *genae **tuae**… collum **tuum*** (0371C, 0372D) · *Virgo
  **debes** laudanda praedicari… Ex quo **tibi** digne praecipua laus daretur…
  **tuas** laudes disseram* (0372C–0372D). All morphologically singular; rendered
  *thou / thee / thy* without exception.
- **First person takes neither:** the psalmists' and the Virgin's quoted speech
  (*Pepigi foedus*, *Averte oculos meos*, *Exsultavit spiritus meus*, *Fecit mihi
  magna*, *Pone Domine*, *Vae mihi*, *loquebar pacem*), and Philip's own
  *aestimo / arbitror / video / volo*.

---

## §6 · THINGS DELIBERATELY NOT REPORTED (brief §10, checked once each)

- **Column-band arithmetic.** Checked as §10.1 requires, **on the only real signal:
  no anchor in any of the six chunks is followed by text broken mid-word or
  mid-construction.** Two anchors fall *inside* a scripture lemma (0373A between
  *est* and *cum*; and 0367A inside the `[n:]`-only weave, between *odio* and
  *dignus*) and both are reproduced in place with the construction intact. Chunks
  0074–0077 each open with the lemma before their first anchor, which is normal for
  this work. **No `[ed:]`, no patch, no plate check, nothing reported.**
- **`noteCount` matches the body `[n:]` count in all six chunks** (2/4/1/7/6/0),
  verified by script against the Latin twins.
- **No `[f:]`.** 11632 is lemma-and-gloss, not a florilegium (§10.4).
- **No `[d:]`:** no dittography anywhere in the range. ⚑ The near-miss is 0361B's
  *mansit et permansit* and 0372D's *venit et pervenit* / *Absque eo… Absque eo* —
  all deliberate figures of Philip's, not doubled type.
- **No `[nt:]`:** all twenty notes are bare citations, none editorial prose.
- **No `[ed:]`:** nothing in the digitization is lost.
- **Migne's own `( sic )`** does not occur here.
- **Cant. 1:12's *Cum*/*Dum* (brief §8c) does not occur in this range** — the lemma
  has moved to Cant. 3:9–4:4. **Recorded as a null.**
- **Brief §6's three attested Philip readings** (Zech. 4:14 *splendoris*, Gen. 3:19
  *Terra es*, Cant. 2:17 *Bethel*) **do not occur here.** Null recorded for the
  same reason. ⚑ **But §1.1 proposes a fourth candidate for that list**, on
  seven-printing evidence.
- **The gender mismatch at 0369C** (*quarum **diversa** quidem et **dissimilis**…
  natura*) is Pattern 9's no-English-exponent class: adjectives carry no gender in
  English, there is nothing to render either way. Logged in §4, unmarked, and
  flagged so a later sweep does not churn it.

---

## §7 · WHAT A LATER BLIND READ SHOULD LOOK AT FIRST

1. ⭐⭐⭐ **Eccles. 9:1, six reversed printings against one (§1.1).** The claim to
   test is arithmetical and reproducible: `grep "utrum.*odio\|utrum.*amore"
   src/latin/11632/*.md`. If it holds, the class belongs in brief §6 and four range
   files have each logged a fragment of it.
2. ⭐⭐ **0372D, *auris non sustinet* (§1.2).** The strongest §8a candidate in my
   range: 1 Cor. 2:9 with the verb the argument needs, and **no mark of any kind**.
   If the merge decides the §8a class the other way, this is what it fires on.
3. ⭐⭐ **0367A/0367D, the *grex* `[var:]` (§1.3).** The divergence is certain and
   the exposition's dependence on it is explicit. The judgment to test is whether
   citing the Vulgate's own singular at Cant. 6:4–5 inside the marker is help or
   speculation under Pattern 14; I judged it a statement of witness, not of cause.
4. **0370A, the Job 11:2 `[var:]` (§1.5).** Materiality is the question, not
   existence: a rhetorical question against a negative statement. §1.5 states the
   case both ways and says how to reverse it.
5. ⛔ **0368B, *invenire* for *invenit* (§4).** The English is deliberately
   unclosable because the Latin is. **The likeliest silent repair in the range**,
   and it is two letters.
6. **0369A, `[sic: sternis]` (§4, item 3).** The one marker whose *class* is arguable
   (Pattern 7 truncation vs Pattern 12's real-word exemption), exactly as
   cruces-0066's `[sic: *ama*]` was.
7. ⭐ **§5.1, *ferculum* left in Latin.** Eighteen sites, two chunks, mechanically
   reversible, and the whole argument for and against is in §5.1. This is the one
   decision in my range that a reader will notice on the page.
8. **§5.2's *cubile* drift between cruces-0060 and cruces-0066.** Not my word and
   not my range; reported because it is a live within-work inconsistency and the
   two files that carry it were both read for this batch.

---

## §8 · FOR THE MERGE'S RUNNING COUNTS

- **Sigla: 18 of 20 correct.** Wrong: `(Col. IV)` at 0363A for Col. III
  (**off by exactly one chapter** — brief §8b's first attested shape) and
  `(Job. II)` at 0370A for Job XI (**a numeral defect, a third shape**, see §1.5).
  Correct and worth counting because they use sigla other ranges have seen go
  wrong: `(I Petr. IV)`, `(Jer. XXXI)`, `(Isa. VII)`, `(Hebr. II)`, `(Luc. I)` ×3,
  `(Eccle. IX.)`, `(Job XXXI)`, `(Psal. CXVIII)`, `(Luc. VI)`, `(Exod. XXIV)`,
  `(Exod. XXXII)`, `(Luc. II)`, `(Psal. CXL)`, `(Isa. VI)`, `(Psal. XXX)`,
  `(Psal. CXXI)`. ⚑ **Note `(Job XXXI)` at 0367B is correct and `(Job. II)` at
  0370A is wrong, three columns apart** — the same siglum family right once and
  wrong once, which is the `(Psal. XCII)` shape brief §8b already records.
  ⚑ Note also the **inconsistent stop**: `(Job XXXI)` without, `(Job. II)` with;
  `(Eccle. IX.)` with, `(Psal. XXX)` without. All reproduced.
- **`[n:]`-only hit rate: 0 of 3.** Running total across five reporting ranges:
  **0 of 86.**
- **Unmarked/unnoted prose weaves found on the separate pass: 22** (§2b), plus
  eleven single-word ones named but not tabulated.
- **Marginal source-edition numbers: *207* (0361B) · *208* (0363A) · *209* (0364D)
  · *210* (0366B) · *211* (0368A) · *212* (0369C) · *213* (0371B) · *214* (0372D).**
  Continuous with cruces-0066's *206*.
- **Book/chapter structure: no `LIBER` head in this range**; `CAPUT V.` → `CAPUT
  XII.`, all numerals, **`CAPUT IX` alone without its stop** (§3.3).
- **Guillemet asymmetries: none.** 17 pairs, all balanced. Of the 20 `[n:]`, **17
  print inside the closing »** and 3 are `[n:]`-only (0364B ×2, 0367A).
