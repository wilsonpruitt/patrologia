# *Glossa ordinaria*, **Epistola ad Ephesios** (PL 114, 0587C–0602A) — cruces

Translated 2026-08-19, one translator, 6 chunks (5,309 Latin words), on Opus.
Structure: ARGUMENTUM + CAPUT PRIMUM (chunk 0); CAPUT II (1); CAPUT III (2); CAPUT IV (3);
CAPUT V (4); CAPUT VI (5).

Apparatus: **10 `[var:]` · 4 `[sic:]` · 2 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
14 `[n:]`** (exact `[n:]` parity with the Latin twins). `verify-english.mjs 8991`: clean.

Marker parity verified after writing, chunk by chunk, with marker contents excluded from the
italic count:

| chunk | anchors | italic spans | `?` | `:` | `;` |
|---|---|---|---|---|---|
| 0000 | 12 | 44 | 0 | 36 | 5 |
| 0001 | 7 | 34 | 2 | 34 | 6 |
| 0002 | 10 | 29 | 1 | 23 | 10 |
| 0003 | 10 | 45 | 0 | 35 | 10 |
| 0004 | 7 | 25 | 2 | 30 | 4 |
| 0005 | 8 | 20 | 0 | 29 | 7 |

Every figure is identical to its Latin twin's. Colons and semicolons were compared **band by
band, not by total** (brief test 3), and eight English marks were found and removed that Migne
does not print — they are named in §7 so the method can be told from the claim. Zero guillemets
and zero em-dashes in either language.

Conventions follow `GLOSSA-NT-AGENT-BRIEF.md`: `VERS. n.--` passes through verbatim; the lemma
is Englished; `*usque ad*` → `*as far as*` (shipped 8978/8970/8980 convention, one occurrence
here, at 0589C, **with no verb supplied**); notes ride as `[n:]`, contents untranslated.

**Pattern 17.** The second person in this work is overwhelmingly plural (*vos, vobis, estis,
scitis, sciatis, impleamini, redarguite, obedite*) — the Ephesians as a body — and is "you".
Six passages address a single hearer and take **thou**: 0588D *distingue … intelligas*;
0590A *cognosce … audis … vides … tuo* (Augustine's inner-man passage, where *cognosce* is
singular and *putetis … audite* three words later is plural — Migne's own shift, reproduced);
0591C *dicas … putes … promerui … emisti*; 0594B *facis*; 0594C *operaris … tribuis …
perseveras … facias … amas*; 0596D *te maculat … consentis … redarguis* (0598A). The number
changes are Migne's, not ours, and none was smoothed.

---

## §0 · PLATE STATUS — a SPOT-CHECKED zero, and it is not a proof

Per the launch: cols 587/588 (p. 299, the Galatians→Ephesians division) and 593/594 (p. 302,
full width, 300 dpi) were read at the plate this session by the orchestrator. **No foot-of-page
apparatus and no asterisk-keyed EDIT. note.** So **no `[cn:]` is expected in this work and no
conjecture of Migne's was available to settle anything below.** The two `[cj:]` of §3 and the
four `[sic:]` of §4 therefore stand on our reading alone.

⚑ **It is a sample of two openings out of eight, not the whole work.** Three of the sites below
are exactly the kind an editor would have queried, and if a fuller plate read is ever cheap,
these are the columns to read:

- **0595B, *mancida*** — a hapax in the whole corpus (§4a). A nineteenth-century editor querying
  anything in this work would have queried this.
- **0600C, *rectus* for *tectus*** (§3b) — the conjecture is forced by the gloss's own next
  clause, and it is the sort of one-letter slip Migne's *Forte* notes are made of.
- **0599C, *nomo* for *homo*** (§4c).

## §0a · A form that is suspiciously TIDY, raised per brief §4 and left unmarked

**0596B · *indolorii*.** Migne glosses *Desperantes* with *Vel indolorii, quod ex Graeco
trahitur* — a transliteration of ἀνάλγητοι that exists nowhere else in this corpus and in no
lexicon I can appeal to. It is **not** flagged as broken type: it is offered by the glossator
*as* a Greek-derived coinage and immediately explained (*id est de peccato non dolentes*), so
it is doing precisely what a technical term does. Carried into the English roman and untranslated,
as Migne sets it roman. **No `[sic:]`** — the register rule for untranslatable technical Latin
covers it, and marking it would say the plate is broken where the glossator is coining.

I record it here as a **checked negative** of the opposite kind to brief §4's three positives:
nothing here reads too tidy for its context; the rough passages (0595B, 0599C, 0600C, 0598D)
are rough on the page and stayed rough in the English.

---

## §1 · THE LEMMA DIVERGENCE LIST — every italic span collated against the Clementine

**197 italic spans** across the six chunks: **196 lemmata** (the launch's list, in order) plus
the one `*usque ad*` at 0589C, which is Migne's abridgment formula and not a lemma. ⚠ The launch
states 202 spans; the list it supplied contains 196, and the Latin files contain 197 italic
spans in total. I report the count I can verify against the files. Every one of the 196 was read
word by word against `sources/vulgate/clementine-flat.txt` **before** its English was written,
and each rendering was then held fixed against every re-quotation of it in the gloss below.

**Agreements are listed as well as divergences** (§1c), because a list of findings alone cannot
be told apart from a report by someone who never looked.

### 1a · The ten that diverge — all marked `[var: …]`

| col | Migne prints | Clementine | reasoning |
|---|---|---|---|
| 0590B | *Sed differt stella a stella in claritate [n: (I Cor. XV)]* | 1 Cor. 15:41 *Stella **enim** a stella differt in claritate* | The connective is the **explanatory** *enim* in the Vulgate and the **adversative** *Sed* in Migne, and the gloss is built on the adversative: *Habebunt enim omnes eumdem denarium.* **Sed** *differt stella…* — all get the same penny, BUT the stars differ. Restoring *enim* would flatten the one turn the paragraph makes. Word order is also inverted (*differt* fronted); recorded, not separately marked. Rendered *But star differeth from star in brightness*. ⛔ *claritate* is rendered **brightness**, not the Douay's "glory" — the gloss is about degrees of light, and "glory" is the remembered English arriving before the printed word. |
| 0590B | *Et erunt diversae mansiones in domo Patris [n: (Joan. XIV)]* | John 14:2 *In domo Patris **mei** mansiones **multae sunt*** | ⭐ The largest divergence in the work and the one the argument most needs. Three changes at once: **future** *erunt* for present *sunt*; ***diversae*** for *multae*; and *Patris* without *mei*. The whole paragraph argues that *summi doctores* get an increment **beyond** what all have in common — which *diversae* asserts and *multae* does not. Rendered *And there shall be diverse mansions in the house of the Father*. |
| 0590D | *Nam de plenitudine ejus omnes accepimus [n: (Joan. X)]* | John 1:16 ***Et** de plenitudine ejus **nos** omnes accepimus* | *Nam* for *Et*, and *nos* dropped. Marked for the same reason as the 1 Cor. span above and for consistency with it: the connective is what binds the proof-text to the gloss (*Caput … quia omnes ab ipso facti* — **for** of his fullness we all received). The lost *nos* changes nothing (*accepimus* is already first plural) and is recorded inside the marker rather than argued. ⚑ Migne's note reads **(Joan. X)** for a verse in John I; the note rides verbatim per the locked register, and the mis-numbering is recorded in §5, not corrected. |
| 0596C | *Deponite.* | Eph. 4:22 ***deponere vos*** | ⭐ Infinitive → **imperative**, and the gloss is written on the imperative: *Non **jubet** ut corpus deponatur* — "he does not **command**". *deponere vos* is not a command at all, it is the object of *edocti estis* two verses up. Rendered *Put ye off.* |
| 0596D | *Novum faciet Dominus super terram: Mulier circumdabit virum **in gremio uteri sui*** [n: (Jer. XXXI)] | Jer. 31:22 *quia **creavit** Dominus novum super terram : **femina** circumdabit virum* | ⭐⭐ **Future for perfect**, *Mulier* for *femina*, and a clause — *in gremio uteri sui* — that stands **nowhere in the verse**. The gloss depends on the added clause: *Conceptus est enim **in utero** virginali*. This is the site at which conforming to the Vulgate would have deleted the very words the sentence above it expounds. |
| 0597A | *Noli esse nimis justus qui perit justitia sua [n: (Eccl. VII)]* | Eccles. 7:17 *Noli esse justus **multum***; Eccles. 7:16 *justus **perit in** justitia sua* | ⭐ A **conflation of two verses one line apart**, with *nimis* for *multum* and the preposition *in* dropped, which converts Qoheleth's observation (*the just man perishes **in** his justice*) into a relative clause attached to the imperative (*be not too just, **who** perishes **by** his own justice*). Rendered as printed; the marker names both verses. |
| 0598B | *Omne enim quod manifestantur.* | Eph. 5:13 *omne enim, quod **manifestatur*** | Singular → **plural** verb against singular *omne*. English **has** an exponent for the disagreement, so it is rendered and shows: *For every thing which are made manifest.* Under Pattern 12's second test, smoothing it to "is" would be the silent repair; a `[sic:]` is not available because the word is a real form in its own right, so the `[var:]` carries the Vulgate reading and the disagreement stands in the English. |
| 0598D | *Non habentem **nunc** maculam, aut rugam, sed ut sit sancta,* | Eph. 5:27 *non habentem maculam, aut rugam, **aut aliquid hujusmodi**, sed ut sit sancta **et immaculata*** | ⭐ An inserted ***nunc*** and a dropped *aut aliquid hujusmodi*. The *nunc* is load-bearing: the gloss immediately opposes it — *hic per bona opera* … *Vel hoc **erit in futuro***. The temporal contrast the paragraph turns on exists only because the lemma says *now*. |
| 0600D | *Non veni pacem mittere **in terram**, sed gladium [n: (Matth. X)]* | Matt. 10:34 *non veni pacem mittere, sed gladium* | *in terram* belongs to the **first** half of the verse (*Nolite arbitrari quia pacem venerim mittere in terram*) and Migne carries it into the second, which the Vulgate leaves bare. A conflation within one verse. Rendered as printed. |
| 0600D | *In apertionem,* etc. | Eph. 6:19 *in **apertione** oris mei* | Ablative → **accusative**. Marked, and only because the gloss answers the accusative: *Id est **ut** aperte **possim** reserare* — a purpose clause, which is what *in* + accusative gives and what *in* + ablative does not. Compare 8990 @0611B, where the same class (*in vobis* for *in vos*) was marked on the same test and for the same reason. |

### 1b · Divergences examined and deliberately NOT marked, with the reason

Real differences from the Clementine, each weighed against Pattern 14's bar and declined. A
blind reader will meet all of them and must be able to tell a decision from an oversight.

- **0588C · *Sanctis omnibus.*** — Eph. 1:1 *omnibus sanctis*. **Word order only, and English has
  no exponent for it**: "To all the saints" is the only natural rendering of either order. This
  is the Pattern 9 principle (a Latin feature with no English exponent, logged not marked), not
  a conformation — no word is altered, added or lost. ⚑ Same class, same decision: **0589C
  *Omnia operatur*** for Eph. 1:11 *operatur omnia*.
- **0589A · *In dilecto Filio.*** — Eph. 1:6 *in dilecto Filio **suo***. Terminal clipping of a
  lemma; nothing at stake. Same class: **0589C *In quo et nos*** (Vulg. *in quo **etiam** et
  nos*), **0589C *In quo vos*** (Vulg. *in quo **et** vos*), **0592D *ipse est pax nostra***
  (Eph. 2:14 *Ipse **enim** est pax nostra*, a back-reference, not a proof-text), **0595D *Et in
  aedificationem*** (Eph. 4:12, an added *Et*), **0597B *Spiritum sanctum,*** (Eph. 4:30
  *Spiritum Sanctum **Dei***), **0599A *Ego dico in Christo,*** (Eph. 5:32 *ego **autem** dico*).
  In none does the gloss touch the missing or added word. The precedent is 8990 @0611D, where an
  added *et* was weighed and declined on exactly this test.
- **0589C · *Omnia, quae in coelis.*** — Eph. 1:10 *instaurare **omnia in Christo**, quae in
  caelis*. The lemma splices across an elided *in Christo* which the gloss supplies four words
  later in its own voice (*In ipso. Id est per Christum*). Abridgment, not variance.
- **0592A · *vos qui gentes eratis,*** — this string is **in no verse of Ephesians**, and that is
  the point: it is the reading the glossator is **reporting** (*In quibusdam codicibus reperitur
  scriptum esse:* qui, *ibi:* vos qui gentes eratis). A `[var:]` here would report as a textual
  divergence the very thing the sentence exists to describe. Declined, and it is the clearest
  decline in the work.
- **0596C · *In exspoliatione corporis carnis,*** — Col. 2:11 *in **exp**oliatione*. Orthographic
  (*exsp-*/*exp-*), Pattern 9, and **the identical call was made and declined in the Colossians
  work at 0612D** (§6 below).
- **0597B · *Et nolite contristare.*** — the Clementine on disk prints ***constristare*** at
  Eph. 4:30 (and again at 2 Rg. 13:21), which is the source's own oddity, not Migne's; the
  ordinary form *contristare* stands at Jer. 22:3 and Mk. 6:26 in the same file. A `[var:]`
  turning on this would be a claim about a typo in the comparand. Declined, and flagged here so
  a later collator does not re-raise it.
- **0599D · *Contra spiritalia.*** — Eph. 6:12 *contra **spiritualia** nequitiae*. The syncopated
  *spiritalia* is attested medieval orthography, Pattern 9.
- **Orthographic throughout, all Pattern 9, none marked:** *charitate/caritate*, *coelis/caelis*,
  *coelestibus/caelestibus*, *caetero/cetero*, *unquam/umquam*, *quodcunque/quodcumque*,
  *Tychicum* (Migne's spelling here; 8990 has *Tichicum*).
- **Capitalization is not variance.** Migne capitalizes *In dilecto Filio.*, *Spiritum sanctum,*
  and *Mundi rectores.* variously against the Clementine's lower case. English has no exponent.

### 1c · The eleven scripture quotations from OTHER books — checked first and hardest

This is where the reach for a remembered English Bible happens. **Six agree with the Clementine
exactly and are recorded as agreements**; five diverge and are in §1a. Named individually:

- **0589C–D · *Non vos me elegistis, sed ego vos,* etc.** (John 15:16) — **agrees**, with the
  verb gapped: the Vulgate has *sed ego **elegi** vos*, and Migne's *etc.* closes an abridged
  quotation of exactly the kind §1b covers. English gaps it too — *but I you* — which English
  syntax permits and which keeps the elision visible. No marker.
- **0591D · *Surgam, et ibo ad patrem meum [n: (Luc. XV)]*** (Luke 15:18) — **agrees verbatim**.
- **0594A · *Fili, dimittuntur tibi peccata tua [n: (Matth. II)]*** — ⭐ **the words agree
  verbatim with the Clementine, but at MARK 2:5, not at the Matthew the note cites.** Matt. 9:2
  reads *Confide fili, **remittuntur** tibi peccata tua*. **No `[var:]` was taken**, and the
  reason is that Pattern 14 measures the printed words against the received text, and these words
  ARE the received text — of another Gospel. ⚑ And the note's own numeral is evidence for that
  reading: **II is Mark's chapter, not Matthew's**, so what is wrong on the plate is the book
  abbreviation, not the quotation. The note rides verbatim; the observation lives here. See §5.
- **0598C · *Omnium me servum feci [n: (I Cor. IX)]*** (1 Cor. 9:19) — **agrees verbatim**.
- **0599D · *Et mundus eum non cognovit [n: (Joan. I)]*** (John 1:10) — **agrees verbatim**,
  opening *Et* included.
- **0596C · *In exspoliatione corporis carnis,*** (Col. 2:11) — agrees but for the orthography of
  §1b. ⚑ **This is a quotation of the parallel epistle inside my own work**; see §6.
- Diverging, in §1a: 1 Cor. 15:41 · John 14:2 · John 1:16 · Jer. 31:22 · Eccles. 7:16–17 ·
  Matt. 10:34.

### 1d · Scripture the gloss uses WITHOUT italics — checked, and correctly unmarked

Roman-set scriptural matter is the glossator's prose, not a quotation, and Pattern 14 does not
reach it (the ruling is 8990 §1d). Named so a blind reader can see they were noticed:

- **0599C** *apud quem non est iniquitas* (Rom. 9:14 / 2 Chr. 19:7) — roman. ⚑ The identical
  phrase is roman in the Colossians work at 0610A and was left roman there.
- **0599B** *Non jam duo, sed una caro sunt* — a recast of Matt. 19:6 (*jam non sunt duo, sed una
  caro*) with the negative and the verb both moved. Roman; rendered as the glossator recast it.
- **0599B** *Sicut sponso alligavit mihi mitram, et sicut sponsam ornavit me ornamento* — offered
  as Isaias (61:10), where the Clementine reads *quasi sponsum decoratum **corona**, et quasi
  sponsam ornatam **monilibus suis***. A very large difference, and **still no `[var:]`**,
  because the span is roman: this is the glossator quoting from memory or from an Old Latin text,
  in his own prose. Rendered as printed. ⚠ If any single decline in this work deserves a second
  opinion it is this one — the divergence is bigger than several I did mark — and it is declined
  on the *form of the span*, not on the size of the difference.
- **0598D** *vestis ejus in monte tanquam nix dealbata effulsit* (after Mark 9:2) — roman.
- **0592C** *Ipse enim est lapis angularis* — the glossator's own prose, roman.

---

## §2 · THE UNEXPRESSED SUBJECT — every supplied pronoun, named with its evidence

Sixteen places where English had to print a pronoun the Latin does not. Where two readings
construe, both are set out and the one adopted is stated.

| col | Latin | supplied | what decides it |
|---|---|---|---|
| 0588C | *More suo salutationem praemittit* | "he sets" | The lemma above: *Paulus Apostolus*, Eph. 1:1. Paul is the subject of the whole ARGUMENTUM-style précis that follows, through *describit*. |
| 0589A | *Diligens Deus Pater unigenitum suum … Filius divina largitur* | "whom **he** loves and to whom **he** wills" | Migne supplies the subject of *largitur* himself (*Filius*), but leaves *diligit*/*vult* bare. Both the Father and the Son construe. **Adopted: left as bare "he", exactly as the Latin leaves it** — English "he" is as ambiguous as the Latin, so nothing was chosen silently. |
| 0589B | *quia et redemit, et peccata nostra non imputavit* | "he … redeemed" | Eph. 1:7, *In quo habemus redemptionem per sanguinem ejus* — Christ. |
| 0589B | *Hactenus de his quae toti humano generi: modo de his quae … dedit, loquitur* | "[he gave] … he speaks" | *loquitur* is Paul; the elided verb of the first half is *dedit* from the second, and is supplied in **square brackets** so the reader sees it is ours. |
| 0589C | *ostendit eos ita gratis vocatos* | "he shows" | Paul, continuously through chapter I. |
| 0590A | *Ad hoc autem illuminet oculos* | "may **he** enlighten" | Eph. 1:18, *illuminatos oculos cordis vestri* — God, the subject of *det vobis* in v. 17, the verse the lemma *Ut Deus* opens. |
| 0590D | *quia adimpletur per eos* | "**he** is filled up" | Eph. 1:23, *plenitudo ejus, qui omnia in omnibus adimpletur* — Christ. Confirmed three clauses later by *videntur evacuare **eum***, which requires a masculine personal antecedent, not *plenitudo*. |
| 0591A | *Caput est omnis Ecclesiae et vestrum* | "**He** is the head" | Christ — from chunk 0's own *Caput* gloss at 0590C (*ipse est caput, et nos corpus*) and from *quia vos convivificavit* in the same sentence. |
| 0591A | *Principem erroris dicit spiritum aeris, in quo dominatur* | "**he** calls … **he** bears rule" | *dicit* is Paul; *dominatur* is the prince of Eph. 2:2, the subject of the lemma being glossed. Two different unexpressed subjects in one sentence, and the verse decides both. |
| 0591D | *qui putavit sine ejus adjutorio se posse custodire quod dedit* | "without **his** help … what **he** had given" | God, from *de viribus arbitrii **sui** non praesumat* immediately before and from the parable that follows (Luke 15). The rival — that *ejus* is the prodigal's own — makes *sine ejus adjutorio* say "without his own help", which is not a thing anyone lacks. |
| 0595D | *ut eos consummaret … ut eos aedificent* | "**he** might consummate … **they** may build" | Migne's own number change: *consummaret* is singular (Christ, the *dedit* of Eph. 4:11), *aedificent* plural (the apostles, prophets, evangelists and pastors just given). Reproduced, not harmonized. |
| 0594C | *altitudinem non habet* | "**it** has not height" | Charity — the subject of the whole four-dimensions passage, resumed by name three sentences later (*ipsa charitas*). Note the clause shifts from second singular (*facias*) to third singular in Migne; the shift is his. |
| 0596D | *Conceptus est enim in utero virginali* | "**he** was conceived" | Christ, the *novus homo* of Eph. 4:24, the lemma directly above. |
| 0598D | *munda est a macula … vestis ejus in monte* | "**she** is clean … **his** garment" | Two different antecedents one clause apart: *munda est* is the **Ecclesia** of Eph. 5:27 (named explicitly two lines later, *Ecclesiam omni macula peccati mundatam*); *vestis ejus* is **Christ's**, the Transfiguration garment. |
| 0600D | *quia eum quem fecit a mundo dividit* | "**it** divides … **it** has made" | The sword (*Iste gladius*) is the subject of *dividit*; *fecit* is left as "it" because both the sword and God construe and nothing in the sentence decides. **Declined deliberately** — the ambiguity is Migne's and English carries it. |
| 0602A | *Pacem optat eis* | "**he** wishes them" | Paul; Eph. 6:23 is his closing salutation. |

---

## §3 · THE TWO `[cj: …]` — the printed word is REAL and the faithful English misleads

### 3a · 0590A, *voluntas* for *vocatio*

Migne prints, in the second construal of Eph. 1:18:

> *Et sensus est: Ut sciatis quae sit, scilicet **voluntas** ejus, id est quantum valet spes
> vitae aeternae **ad quam vocat**.*

The lemma is *Ut sciatis*, and the verse it opens is *ut sciatis quae sit spes **vocationis**
ejus*. The gloss is supplying the noun the lemma elides — and the noun the verse supplies is
*vocatio*, not *voluntas*. **The control is inside the same sentence**: *ad quam **vocat*** picks
up *vocationis* and answers nothing in *voluntas*. Rendered as printed ("namely his will") with
the gloss beside it: `[cj: *voluntas*; read *vocatio*, "calling"]`.

⚠ **The rival considered and rejected**: that *voluntas* is right and looks back to Eph. 1:9
(*sacramentum voluntatis suae*). It loses because the whole "Vel ita" is announced as a re-reading
of ***spes*** (*ut spes proprie accipiatur*) and because *ad quam vocat* has no work to do under
it. Naming the rival without adjudicating is what the brief forbids; this is the adjudication.

### 3b · 0600C, *rectus* for *tectus*

> *Marcus dicit apostolos calceatos sandaliis, vel soleis, ut neque pes sit **rectus**, nec nudus
> ad terram, id est nec occultetur Evangelium, nec terrenis commodis innitatur.*

*rectus* is a perfectly good adjective, so Pattern 12 has nothing to wrap and Pattern 7 renders
it — and the English then says the apostles were shod so that the foot should not be **straight**,
which is not a hazard anyone was guarding against. **The gloss decodes its own figure in the
next clause**, and the decoding is a strict pair: *neque pes … [1] · nec nudus ad terram [2]* ↔
*nec occultetur Evangelium [1] · nec terrenis commodis innitatur [2]*. Term [1] is
**concealment**, which is *tectus*, "covered"; and *tectus/nudus* is the standing opposition that
*rectus/nudus* is not. Rendered as printed with `[cj: *rectus*; read *tectus*, "covered"]`.

⚠ **The rival considered and rejected**: *rectus* in the sense "upright, unbent", i.e. the foot
not rigid. It loses on the decoding, which says nothing about rigidity and everything about
hiding, and it leaves *nec occultetur Evangelium* answering no member of the pair.

⛔ Neither `[cj:]` removes anything. Migne's word keeps its English in both; the conjecture stands
beside it, per Pattern 18's additive form, and both printed words appear verbatim in the Latin
twin as the verifier requires.

---

## §4 · THE FOUR `[sic: …]` — carried type, with the sense kept OUTSIDE the quarantine

Every one was closed against the brief's fourth question — *does the clause still have the thing
it acts on?* — as well as 7a⁗'s three. The mechanical strip test was run on all six files: with
every marker deleted, no stranded article, preposition or doubled mark remains, and every
sentence can be read aloud.

### 4a · 0595B, *mancida*

> *Talis actio nec frangitur negotio, nec turbulenta est, **nec mancida**, nec audax, nec fugax,
> nec praeceps, nec jacens*

*mancida* is a **hapax in the entire corpus** — one occurrence, this one — against a neighbouring
family of 30-odd `mancip-` forms and no other `mancid-` anywhere. It is not a Latin word.
Carried untranslated in italics, **with its *nec* outside the marker**: `nor [sic: *mancida*]`.
The negation is one of seven in a list and it is present and on its own member; nothing is
governed by the quarantined run, so nothing left the English with it.

**Conjecture**: *mancipata*, "enslaved" — the reading the *mancip-* family supports and the only
one that fits a list of things an action can be. *manca*, "maimed", is the alternative and is
palaeographically closer; it loses only because *mancip-* is what this corpus actually writes.
Recorded as a conjecture in both directions rather than settled, because the plate would settle it
and the plate for col. 595 was not read.

⚑ Note the paragraph **ends with no terminal stop** (*nec jacens*). Pattern 8: never supply one.
The English stops where he stops. Same at 0596C (*haec vetustas et novitas*) and at 0599B, the
work's last sentence of chunk 4 (*ad litteram dicitur*).

### 4b · 0598D, *cas* for *eas*

> *debent mori pro salvandis uxoribus, et verbo vitae eas instruere, ut exhibeant **cas** Deo.*

A one-letter non-word, and — this is the point — **it is the clause's OBJECT**. This is exactly
the shape that took four content words out of Tobit's English. Rendered *that they may present
**them** [sic: *cas*] to God*: the object is in the English in plain words, the broken type is
marked, and neither stands in for the other. The conjecture is *eas*, which the same sentence
prints correctly eleven words earlier (*eas instruere*).

### 4c · 0599C, *nomo* for *homo*

> *ut **nomo** homini conditionis vinculo subderetur*

One occurrence corpus-wide against 1,785 of *homo*, and it is the clause's **subject**. Rendered
*that **man** [sic: *nomo*] should be subjected to man by the bond of condition* — subject in the
English, type marked. Conjecture *homo*, near-certain, and confirmed by *homini* in the same
four words.

### 4d · 0590D, *ab ipse* for *ab ipso*

> *Secundum deitatem: quia omnes **ab ipse** facti*

A nominative governed by *ab*. This one sits on the Pattern 9 / Pattern 12 boundary and the call
is argued rather than assumed: Pattern 9 exempts Latin features with **no English exponent**
(gender, section labels), and English case after a preposition has none either — "by him" is the
only rendering there is. But Pattern 12's second test decides it the other way: *where the English
has no exponent for the defect, rendering it silently repairs it*, and a preposition governing a
nominative is **a fact about this printing**, not a systemic feature of Latin. So: rendered
("because all were made **by him**") **and** marked (`[sic: *ab ipse*]`), which is the only
treatment that leaves both the sense and the evidence on the page.

⚠ **The rival I rejected**: leaving it to a crux line with no marker, on the Pattern 9 analogy.
It loses because a reader of the English would have no way to know anything was wrong, and the
facing Latin — which is what makes normalization safe for gender and section labels — shows only
two letters that a reader would take for our transcription slip rather than Migne's.

---

## §5 · MIGNE'S OWN PRINTING — reproduced, not tidied

- **0590D · (Joan. X)** on a quotation of **John 1:16**. Note verbatim, unaltered.
- **0594A · (Matth. II)** on words that are **Mark 2:5** (§1c). Note verbatim, unaltered.
- **0595D · *septemque filiae Philippi*** — Acts 21:9 gives Philip **four** daughters. Migne
  prints *septem*. Rendered *the seven daughters of Philip*. Roman prose, so no `[var:]` reaches
  it; and it is a real word in its slot, so no `[sic:]` either. Pattern 7, straight: the English
  says seven because the plate says seven.
- **0598D · *quae significabat. Ecclesiam omni macula peccati mundatam*** — a **full stop
  breaking the middle of a construction**, leaving *Ecclesiam* an accusative with no governing
  verb. Pattern 8's founding class (11534 @1050D). **The stop is preserved and the accusative is
  rendered as it stands**: *which signified. The Church cleansed from every spot of sin, which…*
  ⛔ Merging the two into one sentence is precisely the deletion Pattern 8 forbids, and it is the
  single most tempting repair in this work.
- **0594C · *quare isti dat, non vero illi*** and, eleven lines later, ***quare autem illi det,
  isti non det*** — Migne **reverses the demonstratives** between the two statements of the same
  question. Both rendered as printed (*why he gives to this man, but not indeed to that* /
  *why he should give to that man, and not give to this*). Not a defect of ours to fix; the reader
  can see the reversal only if we carry it.
- **0600B · *Recte lorica justitiae comparatur*** followed by *Aliter: **Justitia loricae** potest
  comparari*. Migne compares the breastplate **to justice** first and justice **to the
  breastplate** second — the terms are genuinely swapped, and the *Aliter* announces that
  something has changed. Rendered in Migne's direction both times. Reversing the first to match
  the second would be the tidy reading and would delete the point of *Aliter*.
- **0593D · *Hujus rei gratia.* twice**, the second re-quoting the first inside the gloss.
  Reproduced twice; not a dittography (Pattern 11 does not reach a deliberate re-quotation), so
  **no `[d:]`**.
- **0597A · *Sol non occidat.* twice** — two separate glosses on the same lemma, as Migne sets
  them. Not a doubling.

## §5a · One word rendered two ways, declared

**0593A–B · *investigabiles*.** The lemma is Eph. 3:8's *investigabiles divitias*, where the
prefix is privative: **unsearchable**. The gloss then writes *sed per gratiam et revelationem
sancti Spiritus **investigabiles** sunt fidelibus* — and under the privative sense that sentence
denies what its own *sed* asserts. Latin *investigabilis* genuinely carries both senses, and the
*sed* fixes the second as the positive one. So: lemma **Unsearchable**, gloss **searchable**.

⚑ This is declared here rather than buried because rendering one word two ways is the shape a
silent repair takes. It is not one: no word is translated as its opposite to rescue anything —
the Latin word is lexically ambiguous, the correlative disambiguates it, and the alternative
(rendering both "unsearchable") would make Migne assert that grace leaves the riches exactly as
unsearchable as nature does, which is the reverse of the sentence.

---

## §6 · THE COLOSSIANS PARALLEL — where it was consulted, and what it decided

The launch names 8990 as the nearest precedent and warns that the parallel is a hazard as well as
a help. Four consultations, all recorded:

1. ⭐ **0596D · Eph. 4:24, *Qui secundum Deum creatus est*.** The Colossians work carries, at
   0614C, a gloss that **cites this book by name**: *The renewal of the mind is said to be
   according to God, **as is read in the epistle to the Ephesians**, or* secundum imaginem Dei, *as
   is read here.* So the Colossians glossator's cross-reference is a witness to what Ephesians
   ought to print — and Migne prints exactly ***secundum Deum***. **The two books agree, and the
   check is worth more as an agreement than a divergence would have been**: it confirms both the
   Colossians `[var:]` at 0614C and this book's lemma at once. No marker taken here; none needed.
2. **0596C · *In exspoliatione corporis carnis*** (Col. 2:11), quoted inside this book's gloss on
   Eph. 4:23. The Colossians cruces declined a `[var:]` on the identical *exsp-/exp-* orthography
   at 0612D. **The same call is made here, for the same reason**, rather than re-derived.
3. **0597D · Eph. 5:5, *Avarus*** — the covetousness-is-idolatry gloss, which runs parallel to
   Colossians 0614B (*Et avaritia*). ⚠ **The two glosses are NOT the same text and were not
   allowed to lend each other wording.** Colossians argues from *solus* (*ne **solus** nomen
   deitatis habeat* … *ut **solus** usurpet*) — the site whose negation attachment is the brief's
   worked example. **Ephesians has no *solus* anywhere in its version** and argues instead from
   *praefert*: the covetous man prefers God's goods before God, *sicut idololatria Dei
   honorificentiam*. Rendered from the Ephesians text alone.
4. **0599C · Eph. 6:5, *Servi, obedite*** ‖ Col. 3:22. Checked because the household code is where
   the pull toward familiar wording is strongest. Migne's Ephesians lemma stops at *obedite* and
   the gloss is a servitude-and-sin argument with no Colossians counterpart. Nothing imported.

⚑ **The general point.** Every one of the four came back "no import needed" — which is the result
a check should usually produce, and is the reason to record it. The one place the parallel
actually did work was (1), and there it worked as **confirmation**, not as a source of wording.

---

## §7 · THE TESTS FROM THE BRIEF, RUN — including what they caught

- **Test 1 (`[sic:]` must not swallow).** Run mechanically on all six files. Four markers, all
  four with their content word or particle present in plain English outside the bracket (§4).
  Zero stranded articles or prepositions.
- **Test 2 / 2a (negation attachment).** Every printed `non · nec · neque · nisi · ne · nemo ·
  nihil · nullus · nunquam · nusquam · non solum` was listed with **the single Latin word it
  attaches to**, and the host was proved from the sentence's structure — the `sed` correlative,
  the `sicut … ita` pivot — never from what read well. The trigger population (a negative resting
  on a verb with a quantifier, correlative or predicate nearby) fired at these sites, and at each
  one the host is a **phrase, not the verb**, which is where a fluent English rendering would have
  put it:
  - 0589C *Sors … quia **non** est **hominis electio**, sed voluntatis Dei* → "not the choice of
    man, but of the will of God" (host: *hominis electio*, not *est*).
  - 0589D *Ad impetrandum **non** obtendo **merita**, sed quod Deus et Pater Christi* → "I put
    forward **not merits**, but that he is God…" (host: *merita*, the object the *sed* replaces).
  - 0590B *Nulla enim **forma corporis** Deus finitur* → "**by no form of body** is God bounded"
    (host: the quantified ablative; putting it on the verb would say God is not bounded, full
    stop).
  - 0591C *Gratia praecessit meritum tuum: **non gratia ex merito, sed meritum ex gratia*** →
    rendered as the bare correlative pair, "not grace from merit, but merit from grace", because
    the *sed* replaces the whole phrase and any verb we supplied would move the negative onto it.
  - 0591C *emisti, **non gratis** accepisti* → host *gratis*, contrasted with *emisti*.
  - 0591D *Non hoc **ideo** dicit, quia … sed quia* → host *ideo*, the reason, not *dicit*.
  - ⭐ 0592B *Non enim **regionibus** longe est **quisquam** a Deo, sed affectibus* — **the sharpest
    site in the work, and the Esther-class trap.** *quisquam* is a negative-polarity item and the
    fluent English is "no one is far from God by regions" — which puts the negative on the
    quantifier. The `sed affectibus` is an elliptical ablative and shows the scope is on
    ***regionibus***. Rendered **"For it is not by regions that anyone is far from God, but by
    affections"**, which keeps *quisquam* as "anyone" and the negative where the correlative puts
    it.
  - 0593A *Non enim est **meum** sed Dei* → host *meum*; and beside it *nullae **mihi** gratiae
    reddendae, sed Deo*, where *nullae* quantifies *gratiae* but the *sed* pivots on *mihi*/*Deo*
    — the two coincide in English ("no thanks are to be rendered **to me**, but to God") and the
    coincidence is stated rather than assumed.
  - 0593B *easque implet, **non illo opere providentiae**, quo … sed eo quo* → host the ablative
    phrase, not *implet*.
  - 0594D *fides **nec in solo Patre** integra est, **nec in Filio solo** perfecta* — two negatives,
    both on phrases containing ***solo***, which is the pivot. "neither entire in the Father
    **alone**, nor perfect in the Son **alone**". Attaching either to the verb would deny that
    faith is entire in the Father at all.
  - 0594D *Non ut **sint (plenus Deus)** … sed ut perfecte sint pleni Deo* → host the first *ut*
    clause; the *sed* supplies a second one.
  - 0598C *Non solum **auditores praelatis**, sed etiam praelati subditis* → host the whole first
    phrase. Textbook *non solum … sed etiam*; recorded because it is the exact construction the
    brief's 8987 case mishandled.
  - 0599A *non **corpus**, sed corruptiones et pondus ejus odit* → host *corpus*, the object.
  - 0599D *non timore subdolo, sed fideli dilectione* · 0599D *Non ideo sic appellantur … sed* ·
    0600A *Non dominantur daemones **mundo** … sed peccatoribus* · 0600A *non **pro parva re**, sed
    pro coelesti haereditate* · 0600B *non simulatorie, sed in veritate* · 0600D *non **casu**, sed
    de proposito* — all hosts are the phrase the *sed* replaces, and none is the verb.
- **Test 2b (anchor position, not merely presence).** All 54 anchors were placed against **the
  word they stand beside in the Latin**, not merely in order. Three were moved during the pass
  after checking: 0588C (stands before *describit*, so before "describes"), 0589D (stands before
  *me* inside the John 15 lemma, so *You have not chosen [0589D] me*), 0590B (stands before
  *aperit*, so before "discloses"). 0597A splits a phrase mid-construction to match Migne — *be
  indignant with your [0597A] own selves* for *indignamini vobis [0597A] ipsis* — which is
  deliberate and is the 8995 @0605B precedent.
- **Test 3 (punctuation by band).** Colons and semicolons compared band by band against each
  Latin twin. **Eight English marks were found that Migne does not print and were removed**:
  0589B (a supplied `;` at *non reciperent Christum*, where he prints a comma), 0591A and 0591B
  (two supplied `:` after "Or", where he prints *Vel* bare), 0592A (a supplied `;` at *sub peccato
  fuissent*), 0593A (a supplied `:` after *Scilicet, ibi*), 0594D (a supplied `;` at *Existit vero
  ex occulto illa charitas*, where he prints a comma), 0595B (a supplied `;` at *gratiae
  attribuenda*), 0598A (a supplied `:` after *Sicut et Judas*). Every band now matches at zero.
  ⚑ **This is the check that earns its keep**: the totals for three of those chunks would have
  been off by exactly one, and two of the eight sat in chunks whose other bands were already
  clean.
- **Test 4 (does it ASSERT what he asserts).** Run last, with the counts known clean, paragraph by
  paragraph. It produced three changes that no containment check would have seen:
  1. **0591C, *ut dona Dei consequantur merita mea*.** *dona Dei* and *merita mea* are both
     neuter plural and either can be the subject. "that the gifts of God may follow my merits" is
     the fluent reading and is **the exact reverse of the paragraph's thesis**, stated in the
     previous sentence: *Omnia merita praecedit gratia*. Rendered "so that **my merits may follow
     the gifts of God**". Nothing was missing in the wrong version; only the sense was.
  2. **0597D, *justa et vera convenienter loquamini*.** *loquamini* is second plural, not first —
     the paragraph is an address, and "let **us** speak" would have quietly moved the imperative
     onto the glossator. Rendered "do **you** speak".
  3. **0593A, *investigabiles*** (§5a), where the smooth reading is the one that contradicts the
     *sed*.
  ⚑ And the habit that made it bite: **0597B's *Quod non debetis in quo vos quasi cera signati
  estis*** reads roughly in English and was left rough. A sentence that reads smoothly where the
  Latin is rough is a suspect; this one is not smoothed.

---

## §8 · READ CLEAN — named, so a blind reader can tell checked ground from unexamined

- **0587D, the ARGUMENTUM** — one sentence, 27 words, the standard Marcionite prologue. Nothing
  at stake; *Tychicum diaconem* rendered "Tychicus the deacon" (Migne's spelling with *y*; 8990
  spells it *Tichicum* and neither was made to follow the other).
- **0591A–0592C, CAPUT II entire** — 34 lemmata, **zero `[var:]`, zero `[sic:]`, zero `[cj:]`**.
  This is the cleanest chapter in the work and the collation is a genuine string of agreements,
  not an unexamined stretch: every one of the 34 was checked, including *Surgam, et ibo ad patrem
  meum* (Luke 15:18, verbatim). The only thing in it worth a second look is the *hospes ~ ostii
  pes* etymology at 0592A, which is set **roman** in Migne and therefore carries **no added
  italics** in our English either.
- **0592D–0595A, CAPUT III entire** — 29 lemmata, **zero `[var:]`**. Its trouble is prose, not
  apparatus: the *investigabiles* pair (§5a), the four-dimensions passage at 0594B–D with its
  reversed demonstratives (§5), and the *(Matth. II)* note (§1c).
- **The four-dimensions passage, 0594B–0594D** — read three times, because it is the longest
  continuous argument in the work and the launch named continuous close-packed argument as this
  book's real difficulty. *sublimitas* and *altitudo* are Migne's two words for the same
  dimension; rendered **"sublimity"** and **"height"** respectively, kept distinct so a reader can
  see that he used two, with the identification left where he leaves it (*habes latitudinem …
  altitudinem non habet*).
- **Chapters V and VI, the household code and the armour of God** — the launch's named
  high-risk ground, and it produced four of the ten `[var:]` (0598B, 0598D, 0600D, 0600D) plus
  both remaining `[sic:]`. Every lemma in the armour passage (0600B–0600D) was collated
  individually: *Succincti lumbos vestros* · *Induti loricam justitiae* · *Calceati* · *Pedes* ·
  *Scutum fidei* · *Et galeam* · *Et gladium spiritus* — **all seven agree with the Clementine
  exactly**, and are recorded as agreements. The divergence in that stretch is not in the armour
  lemmata at all but in the **Matthew** quotation attached to the sword (§1a).

## §9 · What a blind reader should hit hardest

1. **0599B, the Isaias quotation (§1d).** Declined for a `[var:]` on the ground that the span is
   roman, while the divergence from Isa. 61:10 is larger than several I did mark. If the roman/
   italic rule is the wrong test for a quotation this far from its source, this is the site that
   shows it.
2. **0598B, *Omne enim quod manifestantur*.** I took a `[var:]` and rendered the number
   disagreement into English ("which are made manifest"). The alternative was a `[sic:]`, on the
   ground that the disagreement is a fact about this printing — the same argument I used to take
   the marker at 0590D (§4d). I did not take it here because *manifestantur* renders in place and
   English **does** carry the disagreement; but the two calls are close enough that they should be
   checked together.
3. **0590A, the *voluntas*/*vocatio* conjecture (§3a).** A `[cj:]` on a word that construes.
4. **0594C–D, the four-dimensions passage.** Long, dense, and where a relocated negative would be
   hardest to see.
5. **0598D, the full stop mid-construction (§5).** Preserved. It reads like our error and is his.

---

## §Adjudication — blind polarity read (2026-08-19)

Blind reader, fenced from this file, all six chunks read: **3 sites, 2 repaired, 1 declined.** Its
negation-host audit ran on every negative in the work and found **the Colossians failure pattern does not
recur here** — including the hard case at 0592B, *Non enim regionibus longe est quisquam a Deo, sed
affectibus*, where the negative is correctly clefted onto the phrase and not parked on the verb.

1. **REPAIRED · 0595B · `[sic: *mancida*]` HAD SWALLOWED THE WORD IT MARKS.** The marker stood in the
   slot where the rendering belongs, so one member of a seven-term asyndetic list vanished: *nec
   frangitur negotio, nec turbulenta est, **nec mancida**, nec audax…* read "nor is it turbulent,
   **nor** , nor bold." Now "nor **languid** [sic: *mancida*]".
   ⚑ **The reader proved it structurally rather than by taste:** every other `[sic:]` in this work — and
   ~40 sampled corpus-wide — stands AFTER an English rendering; only this one did not. **That is the
   right way to establish the class**, and it is the third consecutive batch in which it has appeared.
   *marcida* ("languid, withered") is the form suspected under the printed letters; it is NOT asserted —
   the printed *mancida* stays in the marker.
2. **REPAIRED · 0599C · *novit*** — rendered "knew", now "**knows**". The perfect-form present is
   coordinated with the present *non est*, so "knew" put God's discernment in the past beside a present
   predicate about him. Small, and no count could see it.
3. **DECLINED · 0594A · the missing `[var:]` against Matt. 9:2 — THIS IS A PHANTOM, and a predicted one.**
   Migne's note reads `[n: (Matth. II)]`; **the words are verbatim Mark 2:5**, confirmed against
   `clementine-flat.txt`: *Fili, dimittuntur tibi peccata tua*. Matt. 9:2 reads *Confide fili,
   remittuntur…*, so a reader collating against Matthew manufactures a divergence that does not exist.
   No `[var:]` is owed; what is wrong is Migne's book abbreviation, not his text.
   ⭐⭐ **This is exactly the trap 8980's translator logged deliberately on the same day** (its 0680D note
   cites Matthew over a sentence of Luke's, and it recorded the fact "so a blind reader collating against
   Matthew doesn't report a phantom"). **The precaution worked in one work and the absence of it cost a
   finding here.** ⚑ Standing rule for the next brief: **when a note's book and its words disagree,
   collate against the WORDS, and say in the cruces which book they came from.**

⚑ Plate: cols 587/588 and 593/594 carry no foot-of-page apparatus and no asterisk-keyed EDIT. note;
`coverage: "spot"`. Three sites still want a fuller read and the cruces names them: 0595B *mancida*,
0600C *rectus*, 0599C *nomo*.


---

## ⛔ PLATE SWEEP, 2026-08-29 — every `[sic:]` in this work read at Migne's plate

This work's `[sic:]` markers stood on columns nobody had read. All were read this session from the on-disk PL 114 scan at 300 dpi (500 dpi where a single letter decided it), full page width, with the volume's page map re-calibrated against the printed corner numbers **before** the read.

**A `[sic:]` asserts a defect in MIGNE'S TYPE, and our Latin is not the printed page — it is Corpus Corporum's transcription of it.** Where the plate disagrees with our file, the fault is ours and the accusation is withdrawn.

### Withdrawn — Corpus Corporum's error, not Migne's

| col | we printed | THE PLATE PRINTS |
|---|---|---|
| 0590D | *ab ipse* | **ab ipso** |
| 0595B | *mancida* | **marcida** |
| 0598D | *cas* | **eas** |

The Latin is corrected in `data/tei-patches/8991.json` and each marker is removed from the English.

### Confirmed — Migne's own defect; the marker stands

| col | the plate prints |
|---|---|
| 0599C | **nomo** — Migne's defect for homo; control homini in the same clause |

Full ledger for all 23 works swept: `data/plate-sweep/2026-08-29-sic-sweep.tsv`.
