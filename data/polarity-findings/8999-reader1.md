# 8999 (Glossa ordinaria in Joannem, PL 114) — blind reader 1

Range: chunks **0000–0009**, cols 0355B–0380C (Prologue, John 1–5).
Read Latin against English line by line, VERS. entry by VERS. entry.
Cruces file NOT consulted until §4 below was reached.

## 1. Chunks read, with particle tally

Latin counted for `non nec neque nisi haud nunquam/numquam null- nihil ne sine absque`;
English for `not no nor never nothing none neither cannot without`.
The tally is a pointer only — every chunk was read in full regardless of what it said.

| chunk | cols | Latin negations | English negations | read |
|---|---|---|---|---|
| 0000 | 0355B–0356B | absque 1 | without 1 | clean |
| 0001 | 0356B–0360A | non 32, nec 6, nisi 1, nullus 1, nullum 1, nihil 5, sine 5 | not 34, no 8, nor 3, nothing 6, neither 2, without 5 | clean |
| 0002 | 0360A–0363C | non 25, nec 2, nisi 1, nunquam 1, ne 4, sine 1 | not 25, no 1, nor 1, never 1, none 1, neither 1, cannot 1, without 2 | clean on polarity; 1 crux observation (§3) |
| 0003 | 0363D–0366A | non 11, nec 1, nulla 1 | not 15, no 2, nor 1, nothing 1, cannot 1 | clean |
| 0004 | 0366A–0369C | non 28, nec 2, nisi 8, ne 3, absque 2 | not 33, no 3, nor 1, nothing 2, neither 1, cannot 3, without 2 | **FINDING 1** |
| 0005 | 0369C–0370C | non 9, nisi 3, nihil 1 | not 7, no 1, nor 1, nothing 1, cannot 2 | clean |
| 0006 | 0370C–0374B | non 34, neque 1, nisi 4, nullus 1, ne 1 | not 35, no 8, nor 2, nothing 1, neither 1 | **FINDING 3**; 2 crux observations (§3) |
| 0007 | 0374B–0376D | non 27, nec 5, nisi 8, ne 3, sine 2 | not 28, no 3, nor 1, nothing 1, none 1, without 3 | **FINDING 2** |
| 0008 | 0376D–0380B | non 41, nec 5, neque 1, nisi 1, nihil 1, ne 2, sine 1 | not 35, no 4, nor 4, nothing 2, neither 2, cannot 5, without 2 | clean (the 41/35 gap is absorbed by *cannot* ×5 and *nor* ×4 — every site checked) |
| 0009 | 0380C | non 2 | not 2 | clean |

Clean chunks, named: **0000, 0001, 0003, 0005, 0008, 0009** carry no finding.
0002 and 0006 carry only crux observations about Migne's own text (§3), not English defects,
except Finding 3 in 0006.

## 2. Findings, ranked

### FINDING 1 (WORST) — chunk 0004, col 0366C, VERS. 3, *Renatus fuerit.* [n: (CHRYS.)]
**Direction 2 — OUR defect. A negation the Latin's `non` governs, dropped from the second limb,
plus an adverb re-bound to the wrong clause. Sense-reversing; invisible to `verify-english`.**

Latin as printed:
> *Renatus fuerit. [n: (CHRYS.)]* Hoc est, si tu **non** natus fueris desuper, et dogmatum
> susceperis certitudinem **alicubi, extra erras** et longe es a regno coelorum…

English as shipped:
> That is, if thou hast **not** been born from above, **and hast received the certainty of the
> doctrines somewhere**, thou wanderest outside and art far from the kingdom of heaven…

Two faults in one sentence:
1. **Negation scope.** `non` governs both perfect subjunctives — *si non natus fueris … et
   [non] susceperis*. The English negates only the first limb and leaves the second **positive**,
   so the page now says that a man who *has* received the certainty of the doctrines is the one
   wandering far from the kingdom. That is the opposite of the protasis Chrysostom wrote, and it
   contradicts its own apodosis.
2. **`alicubi` re-bound.** `alicubi` belongs to the apodosis — *alicubi extra erras*, "thou
   wanderest **somewhere** outside" (Chrys. *In Jo.* hom. xxiv: ἔξω **που** πλανᾷ καὶ πόρρω εἶ
   τῆς βασιλείας τῶν οὐρανῶν). The English moved it into the protasis as "somewhere" attached to
   *hast received* — which is precisely what made the positive second limb read tolerably, and so
   hid fault 1.

The Latin here is not defective; the Greek behind it settles the reading. Repair belongs entirely
on our side: negate the second limb and return *alicubi* to *extra erras*.

### FINDING 2 — chunk 0007, col 0374D, VERS. 29, *Venite et videte.*
**Direction 2 — OUR defect. Mechanism 5: an unmarked 3rd-singular re-bound to the contextually
easier subject (Christ) where the sense requires the Samaritan woman.**

Latin:
> *Venite et videte.* Pedetentim **inducit** ad veritatem illos rudes; nec statim **affirmat**
> Christum, ne irascerentur et indignarentur.

English as shipped:
> *Come and see.* Step by step **he** leads those rude ones to the truth; nor does **he** at once
> affirm him to be Christ, lest they should be angered and take offence.

`inducit` / `affirmat` are gender-neutral, so nothing on the Latin surface forces a choice — which
is exactly the mechanism. But Jn 4:29 is the **woman's** speech to the townsfolk (*Venite et videte
hominem … numquid ipse est Christus?*), and the gloss is about why she frames it as a question and
not an assertion — *nec statim affirmat Christum, ne irascerentur* ("lest **they**", the Samaritans,
take offence). The preceding entry (VERS. 28) has just left her running to evangelize. The subject
is **she**.

The English's "he" is the easier reading — the commentary's default "he" is Christ, and two entries
earlier at 0006 VERS. 10 the identical formula *Pedetentim … instruit* genuinely IS Christ and is
rightly rendered "he instructs her". That parallel is what makes the wrong binding here plausible
and undetectable. As shipped, the page has Christ withholding his own messiahship from a crowd he
is not addressing.

### FINDING 3 — chunk 0006, col 0372D, VERS. 17, *Respondit mulier.*
**Direction 2 — OUR defect, lesser class: an untranslated Latin word left standing as an English
noun, plus a silent gender repair in the same sentence.**

Latin:
> Revera haec mulier tunc non habebat virum, sed utebatur **quodum** non legitimo, de quo respondet
> adhuc carnaliter sapiens, **qui** nondum vocaverat virum, id est intellectum.

English as shipped:
> In truth this woman then had no husband, but was making use of a ***quodum*** not lawful, of whom
> she answers, still savouring carnally, **she who** had not yet called her husband, that is, her
> understanding.

(a) *quodum* is left in italics as though it were a thing the woman used. Migne's *quodum* is
plainly *quodam* — "a certain one, not lawful" — and the following *de quo* ("of whom") already
proves the referent is a person, not an object. The English as shipped gives the reader a nonsense
noun where a man should stand. ⛔ I have not seen the plate; whether the plate reads *quodam* and
Calfa/Migne dropped the `a` is a conjecture. Either way the English needs a rendering, with a
marker, not a bare Latin word.

(b) In the same clause the masculine `qui` is silently normalized to "she who". The reading is
certainly right on sense, but it is a silent repair of a Migne gender mismatch, made without a
marker — the same operation that, run the other way, produces mechanism-5 defects.

## 3. Crux observations on Migne's own text (direction 1 candidates — English rendered literally,
   which is correct policy; flagging only for the log)

These are places where the English is faithful and the Latin is what is broken. **All three are
conjectures against a plate I cannot see, and none should be emended without one.**

- **0002, col 0362B, VERS. 42:** *unde a petra Christo dicitur Petrus, **infirmus** in illo* —
  "whence from the rock, that is Christ, he is called Peter, **weak** in him". The argument is that
  Peter takes his name from the rock and is stable *in Christ*, in the figure of the Church founded
  on the rock; *infirmus* fights that. `firmus` would fit the sentence. English correctly printed
  "weak". Log only.
- **0006, col 0372A, VERS. 8:** *qui legis **valle** muniti, et prophetiae sunt telis armati* —
  "fenced by the **valley** of the law". *muniti* + *vallo* ("rampart") is the idiom, and it pairs
  properly with *telis armati*. English correctly printed "valley". Log only.
- **0008, col 0377A, VERS. 8:** *non solum **aetate** de tua erectione* — "not only **in age**
  concerning thine own raising up". *aetate* does no work in the sentence; something is wrong in
  the Latin. English printed it literally. Log only.

## 4. Rejected candidates (sites I looked hard at and cleared, with reasons)

1. **0001, 0358B, *Unde nec ipse Moyses nedum per eum data sit gratia*** → "Whence neither Moses
   himself, much less was grace given through him." Reads oddly, but `nedum` + subjunctive is
   "much less", and the denial of grace through Moses is Jn 1:17 doctrine. English is literal and
   the ambiguity is Migne's. Cleared.
2. **0001, 0359A, *Ecce nec ego Christus, nec a parte potentiae judex*** — both `nec`s present and
   correct in "neither am I the Christ, nor a judge on the side of power." Cleared.
3. **0001, 0359C, *unde nec interrogant, Es tu unus prophetarum? sed solummodo: Es tu propheta?*** —
   the two questions are distinguished, `nec` kept, and the definite article on "the prophet" is
   licensed by the following *ille videlicet qui praefiguravit baptismum*. Cleared.
4. **0002, 0360B, *quod originale, singulaque superaddita **gratia** relaxat*** — the easy error is
   to read *gratia* as ablative ("by grace") and lose the subject. The English has grace as the
   subject that looses. Correctly bound. Cleared, and evidence of care.
5. **0002, 0363B, *ubi prius visus esset a Domino … quam Dominum videret … et ante etiam quam per
   apostolos vocaret*** → "…and even before he called him through the apostles." The subject of
   *vocaret* is the Lord, and an English reader may carry the preceding "he" (Nathanael) into it.
   Ambiguous rather than wrong; the Latin is equally ambiguous. Cleared, but the softest of the
   cleared sites — naming the Lord would remove the risk.
6. **0002, 0361B, *Hic testatur Filium Dei quem superius virum vocabat*** — *quem* correctly bound
   to Christ, not to the testifier. Cleared.
7. **0003, 0364D, *qui non simulate coelestibus, sed aperte terrenis serviunt*** → "who serve, not
   the heavenly things feignedly, but the earthly things openly." The English comma placement is
   awkward but the negation and both limbs are present and in Migne's order. Cleared.
8. **0003, 0363D, *post tempus, id est ante legem et sub lege*** — reads self-contradictorily in
   English ("after the time, that is, before the law and under the law"), but the ellipsis is
   Migne's own (*post tempus [legis naturae et legis]*) and the English is literal. Cleared.
9. **0004, 0367C, *ut superior eo habeatur qui omnibus praeest*** — *qui omnibus praeest* could be
   Christ or Nicodemus (a *magister in Israel*, addressed two lines later as *superbus princeps*).
   The English preserves the Latin's own word order and ambiguity rather than resolving it to the
   easier noun. Cleared.
10. **0004, 0368A, *quem qui fide intuetur, liberatur … qui significant incentiva vitiorum*** — the
    trailing relative is bound to *serpentibus* ("which signify the incitements of the vices"),
    which is right; the easier and wrong binding would be to the men who are freed. Cleared.
11. **0006, 0372A, *quia eos haereditate patris sui Jacob privaverunt abstinendo a cibis et vasis
    eorum*** — who deprived whom is genuinely undecidable in the Latin; the English "they deprived
    them" reproduces the same ambiguity and its default English reading (Jews deprived Samaritans)
    is the one the context at 0371B supports. Cleared.
12. **0006, 0372B, *Sed ne forte alium fontem promittere videretur, subdit*** → "lest perchance
    **he** should seem to promise another fount, **she** adds." Two different subjects in one
    sentence, both correctly assigned. Cleared, and evidence of care.
13. **0006, 0372D, *hunc ego lux et caput viri illuminabo*** — *hunc* correctly bound to the
    *rationalem intellectum* just named, not to the woman. Cleared.
14. **0007, 0375D, *et hi multi solo verbo praedicationis, illi per miracula et pauci*** —
    *hi*/*illi* rendered "these"/"those" in Migne's order, mapping to Samaritans/Jews. Cleared.
15. **0007, 0376C, *ad servum centurionis ire promittit qui naturam hominis non despicit*** — *qui*
    bound to Christ, not to the centurion or the servant; the negation is kept. Cleared.
16. **0008, 0379A, *ut cognoscant te quem misi Jesum Christum esse unum verum Deum*** — the English
    apposition ("thee, Jesus Christ whom I sent, to be one true God") follows Migne's word order
    exactly. Note that the same verse quoted at 0001/0358B carries a `[var:]` and this one does
    not, though Migne's text here diverges from the Vulgate further (*quem misi* for *quem
    misisti*). Not a polarity defect; a marker-parity observation for the merge.
17. **0008, 0379B, *usque ad vita et ipsa est vita corporis*** — the *usque ad* tag should be a
    verbatim tail-quotation and the English half-translates it into running prose ("as far as it is
    life, and it is itself the life of the body"). Cosmetic, not a sense defect. Cleared.
18. **0000 (whole prologue)** — checked the Trinitarian and eagle passages for mis-bound pronouns;
    *cui matrem virginem virgini commendavit* → "to whom, a virgin, he commended his virgin
    mother" binds *virgini* to John correctly, which is the site most likely to go wrong in the
    chunk. Cleared.

## 5. Check against `cruces.md` (opened only after §§1–4 were written)

### Already known there
- **All three of my §3 crux observations are already logged, and logged well.**
  `cruces.md` 594 (= `cruces-0000.md` 357) carries 0362B *infirmus* with *firmus?* as the
  conjecture and the decision to render "weak in him" with the conjecture withheld;
  `cruces.md` 988 / `cruces-0005.md` 315 carries 0372A *legis valle muniti* with *vallo* as the
  wanted word, no marker fired, and it is item 1 on that stint's plate-check list;
  `cruces.md` 1105 carries 0377A *aetate*. Nothing to add to any of the three.
- **Finding 3(a), the untranslated *quodum*, is known** — `cruces.md` 1006 ("*quodum*, a non-word,
  CARRIED WITH NO MARKER") states the decision, the Pattern 7 reasoning, and the 7a⁗ check behind
  it. **I withdraw it as a defect**; it is a stated policy, not an oversight. The stated ground
  (a non-word is not automatically ours; cf. 9001 @0203A *magnitudino*) is sound. Finding 3(b),
  the silent `qui` → "she who" in the same clause, is **not** discussed there and stands as new,
  though it is minor.
- **The 0366C site of Finding 1 is known, but as a different problem.** `cruces.md` 598 logs it
  as a *Latin* question — *et* possibly standing for *nec* — and rules that "the printed *et* is
  rendered as *and*", repair being mechanism 3. It appears again on that stint's plate-check list
  (item 5) as "a connective, and mechanism 3 leaves no trace."
- My rejected candidates 9 (0367C *qui omnibus praeest*), 11 (0372A *privaverunt*) and the
  0370B *In hoc se distinguit a Christo* site are all already adjudicated at `cruces.md` §0.3 and
  951/1018, and my independent readings agree with the recorded decisions.

### New
1. **Finding 1 is new in substance, and it changes the 0366C ruling.** The cruces frames 0366C as
   a defect in Migne's connective that we must not smooth. I think that framing is what let the
   English error through: `non` in *si tu **non** natus fueris desuper, et … susceperis* already
   governs both perfect subjunctives, so **the printed *et* is correct Latin and needs no
   emendation at all** — Chrysostom's Greek (*In Jo.* hom. xxiv, εἰ μὴ ἄνωθεν γεννηθῇς **καὶ**
   τῶν δογμάτων λάβῃς τὴν ἀκρίβειαν) has καὶ in exactly that place under a single μή. What is
   defective is the **English**, which negated one limb and not the other. This is direction 2,
   not direction 1, and the entry at `cruces.md` 598 and its plate-check item 5 should be struck
   rather than carried to the plate.
2. **The `alicubi` mis-binding in the same sentence is new** — the word appears nowhere in
   `cruces.md`. It belongs to *extra erras* ("thou wanderest **somewhere** outside"), and moving
   it into the protasis is what made the un-negated second limb readable.
3. **Finding 2 (0374D, VERS. 29 *Venite et videte*) is entirely new.** The string `0374D` does not
   occur in `cruces.md`; the entry is listed at line 851 only as a conforming lemma
   ("69. [0374C] VERS. 29.-- *Venite et videte.* — conforms, Jo 4:29"), i.e. checked for lemma
   conformation and never for who the subject of *inducit*/*affirmat* is. It is not among the four
   mechanism-5 sites recorded at §0.3, nor among the mechanism-5 sites at 951, 1018, 1075, 1115.
   This is the one finding of mine that is both new and a sense reversal on the page.
4. Finding 3(b) (silent `qui` → "she who" at 0372D) — new, minor.
5. Rejected candidate 16 (0379A *quem misi*, `[var:]` present at 0358B and absent here) — a
   marker-parity observation I did not find recorded; offered to the merge, not as a defect.

### Ranking as it stands after the check
**Finding 2 (0374D) is the worst**, because it is new, unlogged, and puts a sentence on the page
that says the wrong person withheld the messiahship, with no trace any automated check can find.
**Finding 1 (0366C) is second and more urgent to act on**, because a repair is already queued
against the wrong side of the page: the cruces would have us take *et* to the plate when the
sentence needing repair is ours.
