# Cruces — 8963 *Liber Numeri*, chunks 0005–0009 (cols 0391B–0404A)

Anselm of Laon and his school, *Glossa ordinaria* on Numbers, PL 113. Chunks 0005–0009 cover
CAPUT VI–XIV, 4,979 Latin words, 246 marked spans.

## 0. What was checked, and how

- **Span count.** My lemma brief (`data/briefs/8963-lemmata-0005.txt`) states **246 spans** for
  chunks 0005–0009. Counted **paragraph-bounded** in my own Latin: 0005 = 49, 0006 = 36,
  0007 = 54, 0008 = 53, 0009 = 54, **total 246, and 0 guillemets** (this book has none). Every
  paragraph's asterisk count is even, so no unmatched delimiter is masking a mis-pairing in either
  direction. **The totals agree.**
- **`⚑ MATCHES ONLY ELSEWHERE`:** **none** in this range. The work carries 13; none falls in
  chunks 0005–0009.
- **Plates.** All seven pages of the range read at the plate, **on two witnesses**, corner numbers
  read first on every one: archive.org `patrologiaecurs04migngoog` pp. **201, 202, 203, 204, 205,
  206, 207** (= cols 391–404, map confirmed at p.201) and Gallica `bpt6k5505319w` ff. **196–202**
  (map confirmed at f196). **No foot-of-page apparatus on any page — seven checked zeroes.**
  Full ledger: `data/briefs/8963-PLATE-READS-0005.json`.
- **Markers fired:** 15 `[var:]`, and nothing else. **Zero `[sic:]`, zero `[cj:]`, zero `[ed:]`,
  zero `[d:]`** — see §3 for why each candidate was declined.

## 1. ⭐ The finding that governed every other call: our TEI's exemplar is the GALLICA printing

Thirteen sites in cols 0391–0404 divide the two copies. **In twelve of them our TEI sides with
Gallica against the archive copy — including in four places where Gallica carries a non-word and
the archive copy prints the sound Latin.** The thirteenth (0401D) runs the other way, which is
what makes this a fact about two *printings* rather than about one bad photograph.

| col | our TEI = | archive copy | sound reading |
|---|---|---|---|
| 0394B | Gallica `digne operantur` | `digni operantur` | either |
| 0394A | Gallica `seminant` | `seminent` | TEI |
| 0396A | Gallica `nos erudit` | `non erudit` | TEI |
| 0397C | Gallica `si agenda` | `sit agenda` | **archive** |
| 0400A | Gallica `exnortantis` | `exhortantis` | **archive** |
| 0401A | Gallica `praecepit` | `praecipit` | **neither** |
| 0402B | Gallica `sputum` | `spiritum` | TEI |
| 0402C | Gallica `profectus` | `perfectus` | TEI |
| 0403C | Gallica `commmatio` | `comminatio` | **archive** |
| 0403D | Gallica `vermanseris` | `permanseris` | **archive** |
| 0396 head | Gallica `CAPUT VIII` | `CAPUT VIII.` | press variant |
| 0399A | Gallica `VERS. 15.` | `VERS. 13.` | TEI (Nm 9:15) |
| 0401D | **archive** `eum glorificemus` | *Gallica* `cum` | TEI + archive |

**What follows, and it decided four calls below:** a non-word our TEI shares with Gallica is
**Migne's own type in the exemplar Corpus Corporum transcribed.** It is not our corruption (so it
takes no TEI patch) and it is not on both printings (so it may take no `[sic:]`, which would
accuse a plate that in one copy is clean). Each is rendered by sense and logged here, with both
witnesses named. **Addendum A's "a non-word is our corruption" heuristic would have produced four
false findings in this range.**

⚑ The single most dangerous archive-only reading was **0396A `non erudit` for `nos erudit`** —
over-inking that manufactures a *negation* in the sentence "or because through both Testaments
with a harmonious voice he instructs us unto the faith of the truth." Read at 1800 dpi on Gallica
f198: `nos`. Had it stood, the English would have said the two Testaments do *not* instruct us.

## 2. The `[var:]` markers — 15, all against the Clementine, all on read columns

Fired where **Migne's printed words differ inside the quotation**. A quotation merely *clipped*
(stopping short, or opening mid-verse) takes **no** marker — otherwise nearly every lemma in an
abridgment would carry one. That line is stated here so a later reader can see it was a rule and
not a mood.

1. **0391B Mt 10:22** — `Qui autem perseveraverit, salvus erit` · Vulg. *qui autem perseveraverit
   usque in finem, hic salvus erit.* An internal omission, and of exactly the words the gloss has
   just supplied for itself (*Sed innocentiam teneat usque ad finem vitae*).
2. **0391C 2 Tim 2** — `Non enim qui inchoat, sed qui consummat, coronabitur` · Vulg. 2 Tim 2:5
   *Nam et qui certat in agone, non coronatur nisi legitime certaverit.* No word in common but
   *coronat-*; printed as scripture with a chapter citation, so a reader will look for it.
3. **0391C Eph 4:30** — `Nolite contristare Spiritum sanctum, in quo signati estis omnes` · Vulg.
   *Spiritum Sanctum **Dei** … in quo signati estis **in diem redemptionis**.* Both witnesses print
   `omnes`.
4. **0392A Ez 18:24** — `Cum conversus fuerit justus a justitia sua et fecerit iniquitatem, omnes
   justitiae ejus oblivioni tradentur` · Vulg. *Si autem averterit se justus … Omnes justitiae ejus
   quas fecerat, non recordabuntur.*
5. **0392B Jo 1:29** — `peccata mundi` · Vulg. *peccatum mundi*. Plural on **both** printings.
6. **0393A Phil 2:13** — `Ipse enim est qui operatur in **nobis** et velle et perficere` · Vulg.
   *Deus est enim, qui operatur in **vobis** et velle, et perficere pro bona voluntate.* A pronoun
   change, which is the class this project treats as load-bearing.
7. **0393D–0394A Jo 10:18** — `Nemo tollit animam meam a me, sed ego pono eam, et iterum sumo eam`
   · Vulg. *Nemo tollit **eam** a me: sed ego pono eam **a meipso**, et potestatem habeo ponendi
   eam, et potestatem habeo iterum sumendi eam.* Migne supplies *animam meam* out of v. 17 and
   drops both *potestatem habeo* clauses.
8. **0394A 1 Cor 9:11** — `Si enim seminant spiritualia, **non est magnum** si metunt temporalia`
   · Vulg. *Si nos vobis spiritualia seminavimus, **magnum est** si nos **carnalia** vestra
   metamus?* Migne turns an affirmative rhetorical question into a negated statement and changes
   *carnalia* to *temporalia* — and the gloss is arguing precisely that temporal support is no
   great return. Rendered as Migne prints it, negation and all.
9. **0396B Is 11:2** — `super quem **requievit** spiritus sapientiae et intellectus` · Vulg. *Et
   **requiescet** super eum **spiritus Domini**: spiritus sapientiae…* Future to perfect, and
   *spiritus Domini* dropped; the tense is the whole christological point of the gloss.
10. **0396C Nm 8:6** — lemma `Tolle Levitas **de me**` · Vulg. *Tolle Levitas **de medio filiorum
    Israel**.* ⚑ Both printings read `de me.`, with a stop. It is very likely the abridger's
    clipping of *de me[dio]*, but *de me* is complete Latin and I will not conform a lemma to a
    guess: rendered "Take the Levites from me," with the Vulgate in the marker.
11. **0396D–0397A 1 Pet 3:18** — `ut nos offerret Deo **Mortificatos** quidem carne,
    **vivificatos** autem spiritu` · Vulg. *mortificatus … vivificatus*, of Christ. Accusative
    plural for nominative singular moves the dying and quickening from Christ to us. Rendered as
    printed.
12. **0397A 1 Cor 6:11** — `Sed abluti estis, sed sanctificati estis in nomine Domini Jesu` ·
    Vulg. adds a third member, *sed justificati estis*, and reads *Domini nostri Jesu Christi*.
    The omission is load-bearing: the gloss's own sentence argues that the one passion obtained
    **two** things, *expiationem … et sanctificationem*.
13. **0398A Mc 13:37** — `Quod **uni** dico, omnibus dico` · Vulg. *Quod autem **vobis** dico,
    omnibus dico: Vigilate.* The one/all contrast is the point of the abridged sentence.
14. **0399C Mt 10:5–6** — `In viam gentium ne abieritis, sed ite ad oves…` · Vulg. inserts *et in
    civitates Samaritanorum ne intraveritis* and reads *sed **potius** ite*.
15. **0401B Jer 8:4** — `Nunquid qui cadit **non adjiciat ut resurgat**?` · Vulg. *Numquid qui
    cadit non resurget?* An Old-Latin-flavoured form; the double negative is carried into the
    English ("Shall he that falleth not add that he should rise again?").

## 2a. Lemmata and quotations collated and found to AGREE with the Clementine

Recorded because a list of findings alone cannot be told from a list by someone who never looked.
Checked against `sources/vulgate/clementine-flat.txt`, verse by verse: **Nm 6:3, 6:5, 6:6, 6:7
(×2), 6:9 (×2), 6:11, 6:12 (×3), 6:13, 6:14, 6:15 (×2), 6:16, 6:17, 6:19 (×2), 6:24, 7:2, 7:3
(×2), 7:10 (×2), 7:11, 7:13, 7:14, 7:84/86, 7:89, 8:2, 8:7, 8:9, 8:10, 8:12, 8:24, 9:6, 9:8, 9:10,
9:12, 9:14, 9:23, 10:2, 10:4, 10:8, 10:33, 10:34, 10:35, 11:1, 11:5, 11:16, 11:17 (×2), 11:21,
11:24, 11:25, 11:29, 12:1, 12:10 (×2), 12:14, 12:15, 13:3, 13:24 (×2), 13:26, 13:27, 14:12 (×2),
14:34**; and **Ps 35:9, Ps 126:1, Rom 8:26, Jo 1:14, Jo 15:5, Gal 4:19, Mal 1:10, 2 Tim 4:2,
Apc 21:5, 2 Cor 6:2** — all verbatim.

## 2b. Divergences collated and deliberately given NO marker, with the reason

- **0392A 1 Jo 2:1** `Advocatus noster apud Patrem` · Vulg. *advocatum habemus apud Patrem*. A
  recasting into a nominal phrase; nothing is asserted that the Vulgate does not assert.
- **0393C Ps 43:24** `Quare avertis faciem tuam, et oblivisceris inopiae nostrae?` · Vulg. *Quare
  faciem tuam avertis? oblivisceris inopiae nostrae et tribulationis nostrae?* Word order, one
  sentence for two, and a terminal clipping.
- **0393C Ps 118** `Respice in me et miserere mei`. ⚑ Worth a reader's eye: those exact words are
  **Ps 24:16** (and Ps 85:16); at Migne's own address, **Ps 118:132**, the Clementine reads
  *Aspice in me*. Migne's citation rides as printed — citations are `refDisplay`, not ours to
  resolve in the text.
- **0393C Ps 79:4** `Ostende faciem tuam, et salvi erimus`, cited *Psal. LXXVII*. Verbatim from
  Ps 79:4, clipped of its opening *Deus, converte nos*.
- **0394B 1 Tim 5:18 / Dt 25:4** `Non alligabis os bovis triturantis` · Vulg. 1 Tim 5:18 *os
  **bovi trituranti*** (dative). Case only.
- **0395A Act 4:32** `**Quia** multitudinis credentium erat cor unum` · Vulg. *Multitudinis
  **autem** credentium*. A connective adapted to the host sentence, which is quotation grammar,
  not a divergence.
- **0396A Gal 3:19** `Lex ordinata per angelos in manu mediatoris`. Verbatim from the verse's
  second half; *Lex* is lifted from its own opening *Quid igitur lex?*
- **0399C Mt 28:19** `Euntes docete omnes gentes`, cited *(Matth. XVIII)*. The wording drops only
  *ergo*. **The citation number is Migne's own error** (the verse is Mt 28:19) and prints
  `xviii` on **both** copies. Left exactly as printed.
- **0400A 2 Tim 4:2** `Praedica verbum, insta opportune importune`, cited *(I Tim. IV)*. Verbatim;
  the book number is Migne's, on both copies.
- **0401A/B Phil 3:20** `Nostra autem conversatio in coelis est`, cited *(II Cor. X)*. Verbatim;
  the citation is Migne's, on both copies.
- **0400D, 0402A** — three quotations Migne himself labels *Alia littera* (`Et requievit super eos
  spiritus…`, `Et respexit Aaron ad Mariam…`, `Et proclamavit Moyses…`). A reading the plate
  declares to be another reading is not a divergence; it is the apparatus doing its job.
- **0402B Is 40:15** `Omnes gentes sicut gutta situlae, et sicut sputum reputatae sunt`, and Migne
  prints its own witness — *(Isa. XL, **secundum LXX**)*. Same reason. The Clementine has *quasi
  stilla situlae … quasi momentum staterae*.
- **0391C Nm 6:8** lemma `Omnes dies separationis` · Vulg. *Omnibus diebus separationis suae*.
  Case and number of the same words; no assertion moves.
- **0401A Nm 11:26** lemma `Remanserant` (plural) · Vulg. *Remanserat* (singular, with a plural
  subject — the Vulgate's own oddity). No English exponent for the difference either way.
- **0403C Nm 14:9** lemma `quia sicut panem ita possumus` · Vulg. *…ita **eos** possumus
  **devorare***. A terminal clipping; the lemma simply stops.
- **0403A Nm 13:18** lemma `Ascendite **ad** meridianam plagam` · Vulg. *Ascendite **per***.
- **0402A Nm 12:13** lemma runs on into v. 14's opening (*Cui respondit Dominus*). Migne's span,
  not a divergence.

## 3. Candidates raised at the plate and DECLINED, with the reason for each

**Every one of these is a non-word or a broken construction that a corpus-frequency argument would
have convicted.** All were carried to the second witness first.

1. **0397C `si agenda` for `sit agenda`** (`ut sive poenitentia si agenda, sive studia virtutum
   exercenda, efficaciter perficiant`). Gallica f199 and our TEI print `si`; the archive copy
   prints `sit`, which construes. **Divided witness → no `[sic:]`** (it would accuse a plate that
   is clean in one copy) and **no TEI patch** (our file agrees with a printing). Rendered by the
   sense the archive's `sit` gives: "whether penance is to be done, or the pursuits of the virtues
   to be exercised."
2. **0400A `exnortantis` for `exhortantis`** (`inde se verbis exnortantis inclinaret`). Gallica
   f200 + TEI `exnortantis`, archive `exhortantis`. Same treatment; rendered "by the words of one
   exhorting him."
3. **0403C `commmatio` for `comminatio`** (`Fit commmatio haec a Domino`). Gallica f202 + TEI
   carry the three-`m` form; the archive prints `comminatio`, and **`Comminatio` prints correctly
   six lines above on both copies** — which is exactly the internal corroboration that has been
   measured to be worthless about *whose* an error is. Same treatment; rendered "This threat is
   made by the Lord."
4. **0403D `vermanseris` for `permanseris`** (`usque ad si vermanseris in bonitate`). Gallica f202
   + TEI `vermanseris` (a clean italic `v`, no descender); archive `permanseris`. Same treatment;
   rendered "if thou shalt remain in goodness." (Pattern 17: singular addressee, so *thou*.)
5. **0401A `praecepit` / `praecipit` for `praecepti`** — `Non negligentia praecepit Domini, sed
   devotione humilitatis indignos se judicantes perceptione tanti muneris.` **Both printings set a
   finite verb** (Gallica + TEI *praecepit*, archive *praecipit*), and neither construes: the
   participle *judicantes* is left with no main verb and *Domini* with no head noun. The sense
   plainly wants the genitive **`praecepti Domini`** — "not from negligence *of the Lord's
   precept*, but from the devotion of humility" — and the `non … sed devotione` correlative fixes
   the negation on the ablative of cause, not on the verb, so the English carries it there.
   **`[cj:]` declined** on two grounds: 18a scopes out anomalies that merely fail to construe, and
   printing our conjecture in the running text would invert the marker (the pattern-18 failure
   measured on 8967). Rendered literally, with the stranded verb visible: "Not by negligence did
   the Lord command, but by the devotion of humility…"
6. **0401C `non solum Judaei haeretici`** — *Mystice, non solum Judaei haeretici, qui non recipiunt
   legem et prophetas, detrahunt Moysi.* The `non solum` has **no answering `sed etiam`** on either
   copy. Rendered literally ("Mystically, not only Jews, heretics, who do not receive the law and
   the prophets, detract from Moses"), which keeps the negation on *solum* where the correlative
   puts it and leaves the missing member visible. `[cj:]` declined: 11535's admitted class is a
   correlative whose *answering* member is printed and whose own is not, and this is the inverse.
7. **0394B `digne` / `digni` operantur** and **0394A `seminant` / `seminent`** — press variants,
   both construing; our TEI = Gallica. No marker, no patch, per the standing rule that a press
   variant is not a defect.
8. **0396 head `CAPUT VIII` (Gallica, TEI) / `CAPUT VIII.` (archive)** — press variant. The
   English head mirrors the Latin twin and prints **`CHAPTER VIII`** with no period, against
   `CHAPTER IX.` etc. That asymmetry is Migne's, not ours.
9. **0399A `VERS. 15.` (Gallica, TEI) / `VERS. 13.` (archive)** — a verse digit, which is the one
   thing over-inking alters most readily and the one thing with no internal control. Nm 9:15 is
   *Nubes operuit tabernaculum*, so the TEI is right; **left alone regardless**, per the withdrawn
   verse-address rule.
10. **0398B/0404 various commas and periods** differing between the copies — recorded in the plate
    ledger, not adjudicated. Migne's punctuation is his editors' and the two printings differ
    freely.

## 4. Migne's own printing, reproduced and not tidied

- **0402A: a `VERS.` with no number.** Migne prints `VERS.-- Clamavitque Moyses ad Dominum
  dicens…` on **both** copies, between VERS. 10 and VERS. 14. Reproduced as printed.
- **0403A/B: `VERS. 24.` twice in succession**, the second glossing *De malis quoque granatis*
  (Nm 13:24 is a long verse). On both copies. Order and numbering reproduced.
- **0397D–0398A: the chapter's verse addresses run 12, then 6, 8, 10, 11, 12, 13, 14, 15, 23.**
  CAPUT IX opens on VERS. 12 and then goes back to VERS. 6. That is Migne's ordering; not
  reordered.
- **0402D: `usque ad usque ad tricesimam secundam`** — the abridgment formula immediately followed
  by an ordinary temporal *usque ad*. Both are on both copies. Rendered "*as far as* these things
  are contained up to the thirty-second."

## 5. `usque ad` — the `etc.` splice test, applied per occurrence

The formula (`etc., *usque ad* …`) occurs **70** times in these five chunks and is rendered "as
far as" throughout. **Seven occurrences are ordinary Latin** and are rendered by sense; they are
named here because a silent departure from the axis is indistinguishable from drift:

- 0391B `Sed innocentiam teneat **usque ad** finem vitae` → "unto the end of life".
- 0391D `et **usque ad** consensum descenderit` → "and shall have gone down as far as consent"
  (spatial-metaphorical, not the splice).
- 0397B `et **usque ad** finem perseveraverint` → "and have persevered unto the end".
- 0398A `testes esse **usque ad** ultimum terrae` (Act 1:8) → "unto the uttermost part of the
  earth" — inside a resumption tail, but the words are the verse's own.
- 0402D `**usque ad** finem septimanae mundi, id est **usque ad** resurrectionem` → "until the end
  of the week of the world, that is, until the resurrection" (two occurrences).
- 0402D the second half of `usque ad usque ad tricesimam secundam` → "up to the thirty-second".

## 6. Unexpressed subjects supplied, and what decided each

- **0392D `praesentans … perducit`** ("he brings him to the entrance of the heavenly life"). The
  subject is **the priest**, from the lemma's own verse: Nm 6:16 *Quae offeret **sacerdos** coram
  Domino*. Both readings construe grammatically; only the verse decides.
- **0392A `Et deprecabitur` … `faciet nos deprecari`** — the subject through the paragraph is
  **Christ**, named two sentences earlier (*offerat vero sacerdoti, id est, Christo*), and confirmed
  by the two proof-texts (1 Jo 2:1, Rom 8:26).
- **0393A `facit summus sacerdos sanctum suum offerre`** — subject printed; no supply needed.
- **0401A `judicantes … judicavit`** — the subject of *judicantes* is the **two men who remained
  in the camp** (Eldad and Medad, Nm 11:26), from the lemma; the subject of *judicavit* is printed
  (*judex cordium Deus*).
- **0402D `transiit, et venit ad eum quem Verbum carnem factum ante non credidit`** — the subject
  is the **people** of the preceding clause (*erga illum populum*), and *eum quem … non credidit*
  is Christ. Rendered "then he passed over, and came to him who had not before believed the Word
  made flesh," which keeps the printed order and the printed negation.
- **0396C `quomodo rite provehatur ad dignitatem sacerdotii`** — impersonal passive; rendered "how
  one is duly advanced", not "how he is advanced", because no antecedent is printed.

## 7. Vocabulary axes as applied here

- **`gentes`.** *Gentiles* in the typological opposition — 0399C Mt 10:5 (*In viam gentium*),
  0399D (*post de cunctis orbis nationibus gentes ad fidem convocari*, where `nationibus` = nations
  and `gentes` = Gentiles in one sentence), 0402B Rom 11:25 (*plenitudo gentium*), 0398C
  `Gentiles` = "the Gentiles". *Nations* where generic — 0399C Mt 28:19 (*omnes gentes*, the axis's
  own named case), 0402B Is 40:15 (*Omnes gentes sicut gutta situlae*) and the *caeterae gentes*
  four words later, which the quotation governs.
- **`multitudo` → multitude** (0395A *multitudinis credentium*; 0401A *Coturnicum multitudinem*).
  **`turba` → crowd** (0398B *relictis turbis*). Both occur; neither borrows the other's word.
- **`daemonibus` → demons** (0398C). No *diabolus*/*satanas* in this range.
- **`mysterium` → mystery** (0394D *legis mysteria*; 0397A *talibus mysteriis*; 0399A
  *ecclesiasticis mysteriis*) against **`sacramentum` → sacrament** (0397A *Sacramentum passionis*;
  0399A *Christi quoque sacramentum*). 1:1 throughout.
- **`natio` → nation** (0399D *nationibus*; 0401C *locorum et gentium nomina*, rendered "of places
  and of nations").
- **Pattern 17.** Three second-person singulars, all rendered *thou*: 0393C *Benedictionem quam
  **percepisti*** ("which thou hast received"); 0402B *Si enim **consideres**…* ("if thou shouldst
  consider"); 0403D *si **vermanseris** in bonitate* ("if thou shalt remain"). One plural, rendered
  *you*: 0402A Gal 4:19 *donec formetur Christus **in vobis***; and Eph 4:30 *in quo signati estis
  omnes* likewise plural.

## 8. Mechanical checks run on the finished files

- **Column anchors** 1:1, verbatim, in order, and each checked against **the word it stands
  beside** in the Latin (test 2b), not merely for presence. 0005 = 10, 0006 = 10, 0007 = 12,
  0008 = 8, 0009 = 11.
- **`[n: …]` notes** 1:1 and byte-identical to the Latin twin's, in order: 29 / 23 / 32 / 27 / 34.
  None was converted to `[nt:]`: every one is a citation or a siglum, none is editorial prose.
- **Italic spans** 1:1 with the Latin twin after marker-stripping: 49 / 36 / 54 / 53 / 54.
- **Question marks** at parity: 2 / 0 / 0 / 2 / 3.
- **Colons and semicolons compared BAND BY BAND, not by total** (test 3). Twelve mismatches were
  found this way and all twelve repaired. **One deliberate excess remains and is declared here:**
  0400D carries one English colon more than the Latin, because Pattern 8b requires it —
  *Quaeritur utrum hoc Moses diffidendo dixerit an quaerendo?* is recast as "It is asked: did Moses
  say this out of distrust or out of inquiry?" so the printed `?` survives in a sentence English
  can hold.
- **Em-dashes: zero.** Four were written and all four were replaced by the comma, colon or full
  stop the Latin prints at that point.
- **Word ratio** 1.51 / 1.49 / 1.51 / 1.50 / 1.38.
- **Marker-strip read-back** (test 1): every `[var:]` deleted, and each host sentence read aloud.
  No stranded article, preposition or doubled mark; no marker stands in place of a rendering,
  because `[var:]` never wraps Migne's words in the first place.
- **Negation attachment** (tests 2 and 2a): each printed `non`/`nec`/`neque`/`nisi`/`nunquam`/
  `nullus`/`nihil` was traced to the single Latin word it attaches to and checked on that word in
  the English. Two sites are the reason the test exists here — 0401A (`non negligentia … sed
  devotione`, §3.5) and 0401C (`non solum` with no answering member, §3.6) — and both have a
  quantifier or correlative beside a grammatically plausible verb, which is the named trigger
  condition.
