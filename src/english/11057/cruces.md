# Cruces — 11057, Hugh of St Victor, *Adnotatiunculae in Joelem* (PL 175, 0321C–0372B)

Merged from two agent batches (chunks 0000–0007 and 0008–0014), 2026-07-28.

## Work-wide conventions (reconciled at merge)

- **Sense labels are rendered as ADVERBS** — ALLEGORICALLY. / HISTORICALLY. /
  MORALLY. — because Migne's labels in this work are adverbs throughout
  (*Allegorice*, *Historice*, *Moraliter*, in both capital and small-cap forms).
  Both batches agreed. **Note for the reader-facing question:** the adjacent Hugh
  commentary 11063 (*In Abdiam*) prints ADJECTIVES — LITERAL. / MORAL. /
  ALLEGORICAL. — because ITS Latin set is mixed (`LITTERAL.` and `MORAL.` beside
  `ALLEGORICE.`) and had to be normalized to one series. Each work is faithful to
  its own plate, which is what Pattern 9 intends, but two adjacent works by the
  same author will label their senses differently on migne.app. **Wilson's call
  whether that is fidelity or noise.**
- The running head is "Brief Notes on Joel"; continuation chunks carry
  "(cont.)", which `build-work-page.mjs` merges away at assembly.

Chunks **0000–0007** only. Chunks 0008–0014 are covered by a separate agent's
`cruces-0008.md`; the two files are merged afterward.

Conventions: Pattern 7 (render the printed Latin literally, never the intended
reading), Pattern 8 (punctuation follows the plate), Pattern 9 (attested medieval
spellings and gender mismatches are NOT defects), Pattern 10 (carry the whole
broken run), Pattern 12 (carried type is marked `[sic: …]`).

---

## A. Carried type — non-words, marked `[sic: …]` in the English

These have no English exponent; the run is carried untranslated, in italics,
except where it sits inside an already-italic scripture lemma (nested italics are
not expressible, so the asterisks are dropped and only the marker remains).

| Chunk | Column | Printed | Conjecture | Note |
|---|---|---|---|---|
| 0001 | 0326B (pre-anchor) | *diecret* | *diceret* | `Ac si diecret:` — the formula runs *Ac si diceret* a dozen times elsewhere in the work. Metathesis of c/e. |
| 0001 | 0326B (pre-anchor) | *sumno* | *somno* | `Expergiscimini … a sumno lethalis negligentiae`. |
| 0002 | 0330B | verstri | *vestri* | Inside the italic lemma `de domo Dei verstri sacrificium`; the same phrase is printed correctly (`Dei vestri`) twice within ten lines, in the lemma at 0331D and the repeat at 0332C. Asterisks dropped (lemma already italic). |
| 0003 | 0333D | *destructur* | *destruetur* | `A, civitas destructur` — parallel clauses either side read *ducetur* and *evertetur*, both future. |
| 0003 | 0337B | eadent | *cadent* | Inside the italic Joel 2:9 lemma, `Sed et per fenestras eadent`. Migne prints *cadent* correctly at 0341C when Hugh re-quotes the same clause. Asterisks dropped. |
| 0004 | 0339D | *baereticae* | *haereticae* | `pluviam contra ariditatem baereticae perversitatis` — b/h substitution, a common broken-sort defect. |
| 0004 | 0340A | *m ne* | *mane* | Split type (Pattern 10). `Dies autem haec quasi m ne expansum fuit super montes` — *mane* is printed whole in the lemma at 0336B and again in the gloss at 0340A ("mane illuminatio fidei"), so the reading is certain and the defect is a dropped `a` sort. Whole run carried, spacing included. |
| 0006 | 0345C | *Hincvoce* | *Hinc voce* | Run-together type (Pattern 10). `Hincvoce Psalmistae` — the formula *Hinc voce Psalmistae* occurs at 0339C. Both fragments are real words; the run is carried whole. |
| 0006 | 0347A (lemma) | santificate ×2 | *sanctificate* | `santificate jejunium … santificate Ecclesiam`, both inside the italic Joel 2:15–16 lemma. Migne prints *Sanctificate* correctly at 0330B and 0332C. Asterisks dropped. |
| 0007 | 0347C | noxum | *noxam* | Inside the italic Exod. 32:31–32 lemma, `aut dimitte eis hanc noxum`. *hanc* is feminine; *noxum* is not a Latin form. Asterisks dropped. |
| 0007 | 0347D | *expictur* | *expietur* | `ut … sacrificio expictur iniquitas`. |
| 0007 | 0349A | *Del* | *Dei* | `scientiam Del plusquam holocaustum` (Osee 6:6). i/l substitution. |
| 0007 | 0349B | *amplectanda* | *amplectenda* | `o virago, amplectanda, mediatrix peccatorum fidissima!` **Borderline** — a/e in the gerundive stem could be argued an orthographic variant rather than broken type, in which case Pattern 9 would exempt it and the marker should be removed. Flagged for a human. |
| 0007 | 0351A | *ligagavit* | *ligavit* | `ad quatuor aquilarum colla ligagavit` — syllable doubled. |

---

## B. Real words, wrong form — rendered as ordinary English, no marker

Per Pattern 12's closing boundary: these *can* be rendered, so the English on the
page is ours even though the reading is Migne's.

- **0001, 0327A** — `fortis est victoria sceleris innumerabilis, instantia suggestionis.`
  The comma falls one word late. The preceding sentence sets the pattern
  (*Fortis est gens ista in expugnatione virtutum, innumerabilis assiduitate
  tentationum*), so the intended reading is almost certainly *fortis victoria
  sceleris, innumerabilis instantia suggestionis*. Rendered with *innumerabilis*
  attached to *sceleris*, which is the only construable reading of the printed
  punctuation ("strong it is by the victory of wickedness without number, by the
  insistence of suggestion").
- **0001, 0329B** — `messis agris` for *messis agri*. The lemma four lines above
  prints *periit messis agri* correctly. Rendered "the harvest for the fields."
- **0002, 0330A** — `hostiam vivam, sanctum, Deo placentem` (Rom. 12:1). Gender
  mismatch, **Pattern 9**: no English exponent. Rendered "holy." No marker, and
  no churn on a later sweep.
- **0002, 0331B** — `Praefatum infortunium sub alio typo verborum ostendat.`
  Subjunctive where the indicative *ostendit* is required by the sequence of
  HISTORICE/ALLEGORICE paragraphs. Rendered as printed ("Let him show…").
- **0003, 0335A** — `dissipatae sunt hypothecae` for Vulgate *apothecae*. Hugh's
  own gloss thirty lines later reads `Apothecae, expositorum volumina`, so the
  plate is inconsistent with itself. Rendered "the pledges are scattered" —
  i.e. the literal sense of *hypotheca* — while the gloss reads "storehouses."
- **0003, 0337A** — `usque in anno generationis` for *in annos*. The same clause
  is printed *usque in annos* at 0340C. Rendered "even unto the year."
- **0003, 0337A** — `et post cum exurens flamma` for *post eum*; *eum* is printed
  correctly at 0340D when Hugh re-quotes. Rendered "and after with a burning
  flame," which is the printed words and is broken English. Deliberate.
- **0004, 0339A** — `sed disparem potestatem in aequalem dignitatem`. Probably
  *inaequalem* run apart, but *in aequalem* is two real words and construes
  (badly). Rendered "but an unlike power into an equal dignity."
- **0005, 0341A** — `super capita montium exsiliet` (singular) against *exsilient*
  in the lemma at 0337A. Rendered singular.
- **0005, 0341A** — `velut populus fortis praeparatur ad praelium` for
  *praeparatus*. Rendered "is prepared."
- **0005, 0341C** — `in virtutes Spiritus sancti` (Rom. 15:18–19) for *in virtute*.
  Rendered "in the powers of the Holy Ghost."
- **0005, 0343B** — `Vox Domini intercedentis flammam ignis` (Psal. 28:7) for
  *intercidentis*. Rendered "coming between the flame of fire" rather than the
  Vulgate's "divideth."
- **0006, 0347A** — `in manum Dei viventis incidere` (Hebr. 10:31) for *in manus*.
  Rendered singular.
- **0007, 0350A** — `contra incursionem et credulitatem hostium`. The antithesis
  series demands *crudelitatem* (and *crudelitas hostium* is Hugh's own phrase at
  0336B). *credulitatem* is a real word and is rendered as printed, "the
  credulity of the enemies."

---

## C. Punctuation and capitalization carried per Pattern 8

- **0000, 0324D** — `Sed hanc gens praefata decorticavit, nudavit projecit.` The
  serial comma before *projecit* is absent; the same clause is printed with it
  four lines later (`decorticavit, nudavit, projecit`). No mark supplied: the
  English reads "barked it, stripped it cast it away." **Not** dittography — two
  sentences of exposition intervene, and the repetition is Hugh's resumptive
  lemma, so no `[d: …]`.
- **0000, 0324D** — `ficus, propter dulcedinem gaudiorum aeternorum` (nominative
  in a run of accusatives, *terram … vineam … ficus*). Case has no English
  exponent here; rendered normally.
- **0000, 0323C** — `ficum meum decorticavit` (Joel 1:7). Gender mismatch,
  **Pattern 9**, no exponent, no marker.
- **0002, 0330D** — `tertio rationi, Conditioni creator` — comma where a full stop
  is wanted, followed by a capital. Both carried.
- **0002, 0330D** — `lumen rationis. tuere in sensuali munus formae` — lowercase
  after a full stop. **Carried**: the English reads "…the light of reason. guard
  in the sensual…". English *does* have a capitalization exponent, so Pattern 9's
  "no exponent" exemption does not apply and Pattern 7 governs. Worth a human's
  eye: this is the first instance in the corpus, as far as I can find, of
  sentence-initial case being carried, and it will look like our error.
- **0002, 0330D** — `sensum tantum habentia [0330D] deinde captivata` — no mark
  before *deinde*. None supplied.
- **0004, 0339C** — `alii, quod divisum est, insane confuderunt, Haec fuit
  haereticorum caligo` — comma before a capital. Carried.
- **0004, 0340C** — `*Beati oculi, qui vident quae vos videtis?*` — question mark
  closing a statement (Matth. 13:16). Carried.
- **0005, 0341C** — `usque ad illyricum` — proper noun lowercase. **Carried**
  lowercase in the English ("as far as illyricum"), same reasoning as 0330D
  above, and flagged with it: if Wilson prefers capitalization to be normalized
  as a structural convention (the way Pattern 9 normalizes section labels), both
  this and *tuere* should be swept together.
- **0005, 0343C** — `Vel quis poterit sustinere, pondus irae` — comma between verb
  and object. Carried.
- **0006, 0345B** — `quae prorsus ad salutem sufficit, Sequitur conversio operis.`
  Comma before a capital. Carried.
- **0006, 0345C** — `Vestimenta sunt sanctorum exempla, Jubemur itaque` — same.
  Carried.
- **0006, 0346A** — `Quis, in hoc loco non dubietatem significat, sed charitatem.`
  The comma isolates the lemma word *Quis*; carried as printed ("Who, in this
  place does not signify doubt, but charity"). Separately, *charitatem* is odd
  in sense — one expects *certitudinem* — but it is a real word and is rendered.
- **0007, 0347C** — `*…in die ultionis visitabo [n: (Ibid.)]* Hinc frequenter…`
  — no terminal stop after the closing italics. **None supplied** (Pattern 8);
  the English runs on into "Hence it is frequently read" the same way.
- **0007, 0349B** — `afflictionem senum squalorem virginum` — no comma between the
  two members. None supplied.

---

## D. Migne's own bracketed matter and his own *sic* — reproduced, not translated

- **0003, 0334D** — `[pastorum vel porcorum]` in the Joel 1:18 lemma, and
  **0003, 0335C** — `[pecora]` in the gloss. Migne's variants; reproduced
  verbatim, untranslated, per the register rule on `[ *al.,* …]`.
- **0006, 0345C** — `accedunt [ *an* accendunt?]`. Migne's editorial query;
  reproduced verbatim, untranslated. The body word *accedunt* is translated
  ("approach") — i.e. the printed reading, not Migne's conjecture.
- **0006, 0345D** — `multus misericordia [multae misericordiae]`. Same; the
  bracket is reproduced and the body reading translated ("much in mercy").
- **0002, 0333A** — `ex affectu plangentis ( sic )`. **Migne's own *sic*.**
  Reproduced verbatim as `( *sic* )`; per Pattern 12 no `[sic: …]` of ours is
  added on top — he flagged it himself.

---

## E. Cases needing a human's judgment

1. **0006, 0345C — a citation that never became a note.** Migne prints
   `*Instauras, inquit, testes tuos contra me, et multiplicas iram tuam adversum
   me, et poenae militant in me (Job X)*` — the locator sits **inside the italic
   quotation** with no `[n: …]` wrapper, unlike the ~110 other citations in this
   work. Reproduced verbatim in place, untranslated. I did **not** tag it
   `[f: (Job X)]`: Pattern 4's trigger is a work whose citing *practice* is
   inline tails, which is not true here — this is a one-off. But it means one
   genuine fons will not reach the index unless someone decides otherwise.
   **This is the entry most worth a decision.**

2. **0003, 0336A — displaced punctuation collapses four glosses into two.**
   `bestiae, simplices, et idiotae fontes aquarum; doctores populorum ignis,
   cupiditas, flamma, luxuria.` The series demands
   *bestiae, simplices et idiotae; fontes aquarum, doctores populorum; ignis,
   cupiditas; flamma, luxuria* — four lemma/gloss pairs. As printed, the pairs
   run together and the English necessarily reads oddly ("the beasts, the simple
   and the unlettered the fountains of waters; the teachers of the peoples a
   fire, covetousness, a flame, lust"). Rendered as printed per Patterns 7–8.

3. **0004, 0337D — `facies, erat exercitus, ordo, cultus, …`.** Same class: the
   comma after *facies* and the one after *exercitus* between them destroy the
   lemma/gloss boundary. Intended almost certainly *facies erat exercitus: ordo,
   cultus, splendor, ritus, forma, modus*. Rendered as printed.

4. **0005, 0343A — `Etham diabolus … ejus flamma perversarum sunt sectarum
   genera.`** *flamma* (singular) with *sunt* (plural), and the sense wants
   *flumina* — Hugh is glossing `tu siccasti fluvios Etham` (Psal. 73:15), where
   *fontes* has just been glossed and the *fluvii* are the natural next member.
   Rendered as printed, "his flame are the kinds of perverse sects."

5. **0005, 0342C — `conscientias singulorum, spiritum gratiae et precum
   obtineant`.** Two accusatives under one verb where the second is likely
   ablative (*spiritu gratiae et precum obtineant* — "obtain… by the spirit of
   grace and of prayers"), which is what the parallel *spiritu fortitudinis
   dissolvant* immediately before suggests. Rendered as printed.

6. **0007, 0347C — `in veteri rota`.** `Hinc frequenter legitur in veteri rota,
   propter Isaac, propter Jacob…`. *rota* ("wheel") is a real word and is
   rendered, but the sense plainly wants *in veteri lege* or *in veteri
   Testamento*. Possibly *nota*. Rendered "in the old wheel."

7. **0007, 0349D — `Obmutescat canina facundia saecularis eloquentia`.** Two
   nominatives in apposition where a genitive is wanted (*saecularis
   eloquentiae*). Rendered as printed, "Let the dogged fluency, secular
   eloquence, be struck dumb."

8. **0007, 0348C — `utrumlibet a te ponendo`.** Unconstruable as printed; the
   series is *a te condito, a te redempto, [a te] …ndo*, so a passive participle
   or gerundive of possession (*possidendo*?) is wanted. Rendered "in either case
   to be set by thee," which is as close as the printed words allow.

9. **0004, 0340D — `quia vanitatem deserti ipsius redegerunt in contemptum
   mundi`.** *deserti* has no antecedent that yields sense — the apostles are
   turning the *hortus voluptatis* into a *solitudo deserti*, so what they reduce
   is the vanity of the **garden**, not of the desert. Possibly *horti*.
   Rendered as printed.

---

## F. Deliberate lexical choices (recorded so a sweep does not churn them)

- **The four plagues of Joel 1:4** are rendered *eruca* → caterpillar,
  *locusta* → locust, *bruchus* → grub, following 9741's English of the same
  verse. Migne prints **two** words for the fourth plague — *aerugo* in the
  lemma, *rubigo* in every gloss — and the distinction is preserved in English as
  **rust** (*aerugo*) / **mildew** (*rubigo*), so that a reader can see which word
  the plate has where. They denote the same thing; the split is typographic
  fidelity, not a claim about sense.
- ***cenodoxia*** and ***gastrimargia*** (0000, 0325B–C) stay in italic Latin per
  the register rule on technical terms. Hugh glosses the first himself
  (*id est vana gloria*), so the English carries his gloss and not ours; the
  second he leaves unglossed, and so do we.
- **praestabilis super malitia** (0006, 0343D and the eight glosses at
  0345D–0346A) is rendered "prevailing over malice" rather than Douay's "ready to
  repent of the evil," because Hugh's glosses build on *praestare* as
  superiority — `barathrum desperationis in gratiam provehit`,
  `desperationem trahit ad poenitentiam` — and the conventional English would
  cut the argument out from under him.
- **Section labels normalized** per Pattern 9: `ALLEGOR.` (0004, 0337D) and
  `Historice.` (0007, 0350C) are rendered ALLEGORICALLY / HISTORICALLY like their
  fully-spelled and fully-capitalized neighbors. The Latin column preserves both
  forms, so nothing is concealed.
- **`JOEL. XI.`** (0003, 0336A) is a running chapter label for Joel **II**.
  Reproduced as printed; not a Pattern 12 case, since it is a numeral, not type.
- **Attested medieval spellings translated normally, no marker, per Pattern 9:**
  *spiritalis* (0000, 0326A), *maechandum/maecharis* (0001, 0328C),
  *penitentiae* (0007, 0347C), *Hierusalem* (0003, 0333D), *Isai./Isa.* varying
  in the notes (verbatim either way).

Chunks **0008–0014** only. Chunks 0000–0007 are covered by `cruces-0000.md`;
the two files are merged afterward.

Conventions: Pattern 7 (render the printed Latin literally, never the intended
reading), Pattern 8 (punctuation follows the plate), Pattern 9 (attested medieval
spellings and gender mismatches are NOT defects), Pattern 10 (carry the whole
broken run), Pattern 12 (carried type is marked `[sic: …]`).

---

## A. Carried type — non-words, marked `[sic: …]` in the English

Carried untranslated, in italics, except where the run sits inside an
already-italic scripture lemma (nested italics are not expressible, so the
asterisks are dropped and only the marker remains).

| Chunk | Column | Printed | Conjecture | Note |
|---|---|---|---|---|
| 0008 | 0353B | *Rubignem* | *Rubiginem* | `Rubignem dicens: Beati pacifici.` Migne prints *rubigo* in the Joel 2:25 lemma at 0352A and *rubiginem* correctly in the parallel gloss eight lines earlier ("Contra rubiginem, perfectam patientiam"). Syllable dropped. |
| 0009 | 0357A | sculum | *scutum* | Inside the italic Thren. 3:65 lemma, `Dabis eis, Domine, sculum cordis laborem tuum`. Asterisks dropped. |
| 0010 | 0360B | *culturom* | *culturam* | `ad culturom idolorum compulerunt`. Not a Latin form; o/a substitution. |
| 0010 | 0361A | *pucilam* | *puellam* | `Tunc pucilam, id est, cordis innocentiam vendunt pro vino`. *puellam* is printed correctly in the Joel 3:3 lemma at 0359A and twice in the gloss at 0360C. |
| 0010 | 0361A | *dic* | *die* | `cum in dic salutis et in tempore placito visitare dignatur oriens ex alto` (II Cor. 6:2). **Borderline** — *dic* is a real Latin form (imperative of *dico*), so Pattern 12's closing boundary would send it to section B; but it admits of no construction whatever in the slot (`in` + accusative singular imperative), so there is nothing to render and it is carried. Flagged for a human: if the ruling is that any real-word form goes to section B, the marker should be removed and the phrase rendered as broken English. |
| 0010 | 0361B | faceritis | *faceretis* | Inside the italic Joel 3:6 lemma, `ut longe faceritis eos de finibus suis`. Asterisks dropped. |
| 0011 | 0362B | *intepretatur* | *interpretatur* | `Saba siquidem intepretatur captivitas.` The verb is printed whole at 0362A (*interpretantur*), 0364D and 0369D. Dropped `r`. |
| 0012 | 0365B | *gloriossima* | *gloriosissima* | `gloriosi certaminis gloriossima praemia` — the superlative syllable is contracted, and *gloriosi* stands correctly in the same phrase. |
| 0013 | 0371A | *transcunt* | *transeunt* | `Non transcunt, inquam, per eam alieni amplius`. *transeunt* is printed correctly two sentences earlier in the same column and in the lemma at 0367D. |

No split-type (Pattern 10) defects occur in this half of the work.

---

## B. Real words, wrong form — rendered as ordinary English, no marker

Per Pattern 12's closing boundary: these *can* be rendered, so the English on the
page is ours even though the reading is Migne's.

- **0008, 0352C** — `Torcularia … constantiam inferius, patientiam superius
  habentia`, flatly contradicted four lines later by `Constantia siquidem premit,
  et desuper arcet; patientia inferius jacet et pondus sustinet.` The second
  passage is certainly right (constancy presses from above, patience bears from
  below); the first is printed with the two adverbs exchanged. **Both rendered as
  printed** — this is exactly the class Pattern 7 exists to preserve, since the
  self-contradiction is visible only if neither half is smoothed.
- **0009, 0355B** — `Quid est omnis generis universae? scilicet aetatis, omnis
  conditionis, omnis professionis, universi ordinis.` A feminine genitive
  *universae* stranded with no noun; the closing member (*universi ordinis*)
  shows the construction, so the intended reading is *universae scilicet
  aetatis*. Rendered as printed ("What is *of every kind*, universal? namely of
  age…").
- **0009, 0356D** — `Sanguinem dedit, quando Christus ante passionem prolixius
  orans, et in agonia factus guttae sanguinis decurrebant in terram.`
  Anacoluthon: *Christus* is left without a finite verb when the clause switches
  subject to *guttae*. Rendered as printed.
- **0009, 0357D** — `Magnus est Dominus, quia cuncta terrena despicit`. The whole
  paragraph expounds the adjectives of *dies Domini magnus et horribilis*, and
  three sentences later `Magnus non pro vitio, sed pro virtute dicitur` is
  plainly about the epithet on *dies*, not about God. *Dominus* is a real word;
  rendered "Great is the Lord."
- **0010, 0358C** — `nihil aliud est nomini Domini invocatio` for *nominis*.
  Dative for genitive. Rendered "the calling upon the name of the Lord."
- **0010, 0359A** — `Capitulum hoc prius moraliter discutiamus; deinde ad opaca
  allegoriae, et tropologiae jucunda transeamus.` What actually follows is the
  Jewish literal reading and the historical sense; the MORALITER treatment does
  not arrive until 0360D, and the promised order (allegory then tropology) is the
  order of the rest of the chapter. *historialiter* is the near-certain intended
  reading. Rendered "morally."
- **0010, 0360B** — `alii Minervam, Rubiginem, Anubim` — in this list *Rubigo* is
  the Roman mildew-goddess, not the crop-disease glossed in the Joel lemmas.
  Rendered as the divine name "Rubigo," deliberately breaking with the "mildew"
  used for *rubigo* elsewhere in the work.
- **0011, 0362A** — `Graeci mendaces, falsiloqui homines scilicet, vel motus
  animi.` Nominative plural in apposition inside a run of glosses otherwise built
  on bare predication. Rendered as printed.
- **0011, 0362B** — `quia praefatos praefate purificatos odio peccati, abjectioni
  sui contemptui mundi applicant.` Three datives with no conjunction between the
  second and third, and the adverb *praefate* is rare to the point of being
  suspect. Rendered as printed.
- **0012, 0365C** — `Populi, populi in valle concisionis id est in humilitate
  judicii, in discretione fidei, vita est quaerenda salutis causa, justitiae
  summa.` *vita* stands where the sense wants *ibi* ("there is to be sought the
  cause of salvation, the sum of righteousness"). Rendered as printed, with
  *vita* as the subject of *quaerenda*.
- **0012, 0366B** — `Coeptam sequamur ultionem, et de ultimo adventu
  explanationem.` The paragraph resumes an *exposition*, not a vengeance; the
  parallel member (*explanationem*) suggests something like *editionem* or a
  dropped word. Rendered "Let us follow up the vengeance begun."
- **0013, 0369A** — `evangelica doctrina gentilem populum ad finem initiavit, ad
  credulitatem convertit, ad baptismi gratiam perduxit.` The triad wants *ad
  fidem*; *ad finem* is a real phrase and is rendered ("initiated the Gentile
  people unto the end").
- **0013, 0369B** — `pro eo quod inique in filios Judaei egerint` (Joel 3:19) for
  the Vulgate's *in filios Juda*. Rendered "against the children of the Jew,"
  taking *Judaei* as genitive singular — the only reading the printed words
  allow after *in filios*.
- **0010, 0360A** — Migne's locators `[n: (Galat. VI)]` on Rom. 6:3 and
  `[n: (Ibid.)]` on Gal. 6:17, and **0012, 0364D** `[n: (Joel. IX)]` on Joel 3:12.
  Note contents are verbatim per the marker rule; recorded here only so that the
  indexer's `refKey` resolution is not surprised by three misfires in one work.

---

## C. Punctuation carried per Pattern 8

- **0011, 0364B** — `Per devotionem: compunctionis potestatem et gratiam
  comminationis Sequitur: Infirmus dicat:` — the colon falls after *devotionem*
  where it belongs after *compunctionis*, and there is no stop at all before
  *Sequitur*. Both carried; the English reads "Through devotion: the power of
  compunction and the grace of threatening There follows:".
- **0012, 0365D** — `stellae, caeterae potestates Sol vero et luna in humilitate
  judicii obtenebrati sunt` — no stop before the capitalized *Sol*. **None
  supplied**: "the stars, the other powers The sun and the moon indeed…". This is
  the ugliest instance in my half and the one most likely to be read as our
  error.
- **0012, 0365C** and the lemma at **0011, 0362D** — `in valle concisionis id est`
  and `in valle concisionis quia juxta est dies Domini`, both without the comma
  the construction wants. None supplied.
- **0014, 0371B** — `demum ad contemplationis avolat, dicens. *Quid enim mihi est
  in coelo?*` — a full stop where the formula everywhere else in the work takes a
  colon before the quotation. Carried.
- **0014, 0372B** — `Qui trinus et unus vivit, et regnat Amen.` — no stop before
  *Amen*. Carried; the doxology ends "liveth and reigneth Amen."
- **0010, 0359C** — `Quia ecce in diebus illis, et in tempore illo,--et iste
  versiculus praecedentibus inferiora connectens` — Migne's dash, reproduced as
  the source prints it (`--`).

---

## D. Migne's own bracketed matter — reproduced, not translated

- **0013, 0369C** — `Et mundabo sanguinem eorum, quem non mundaverant [quem non
  mundaveram]` in the Joel 3:21 lemma. Migne's variant reading; reproduced
  verbatim, untranslated, per the register rule on `[ *al.,* …]`. The body
  reading *mundaverant* is the one translated ("which they had not cleansed"),
  and Hugh's own gloss twelve lines later confirms it (`quem mundare non
  potuerant`).

---

## E. Cases needing a human's judgment

1. **Citations printed inside the quotation with no `[n: …]` wrapper — two more
   instances, both split by a column anchor.** `cruces-0000.md` §E.1 flags the
   first (0345C, Job X). My half has:
   - **0008, 0353D** — `*…sicut disposuit mihi Pater meus, regnum (Luc. [0353D]
     XXII)*, etc.`
   - **0013, 0370B** — `*…quoniam priora transierunt (Apoc. [0370B] XXI)*.`

   Both reproduced verbatim in place, untranslated, and **not** tagged `[f: …]`,
   on the same reasoning the peer gives: Pattern 4's trigger is a work whose
   citing *practice* is inline tails, which this is not. But there are now three
   in one work, all of them genuine fontes that will not reach the index. Note
   also that in both cases the anchor falls **inside** the citation, between the
   book abbreviation and the numeral — this is the one anchor placement in my
   seven chunks that breaks a construction, and it is Migne's own line break, not
   a chunking artifact.

2. **0008, 0354C — `Unde infula dicitur quasi intus fula`.** *fula* is not a
   Latin word, which by the letter of Pattern 12 would make it carried type. It
   is not: it is Hugh's own etymological splitting of *infula*, the second half
   of a deliberate nonce-division, and marking it `[sic: …]` would blame Migne
   for the author's wordplay. Left in italics with **no** marker, alongside the
   *infula* it explains. The rulebook does not state this boundary (author's
   nonce-form vs. compositor's non-word) and probably should.

3. **0013, 0368B — the Greek etymology of *agios*.** `Quod sanctum dicitur
   Latine, ἄγιος, id est agios dicitur Graece. Agios nomen est compositum ex α et
   γῆ, id est gi *Gi,* dicitur terra, *a* sine.` The Greek is reproduced verbatim;
   the etymological Latin words are left untranslated; and the typography is
   carried exactly as printed — `gi` roman, then `*Gi,*` italic, with no stop
   between them, which is why the English sentence runs together. No `[sic: …]`:
   *gi* is Hugh's transliteration, not broken type. Same class as item 2.

4. **0014, 0371B — `demum ad contemplationis avolat`.** A genitive with no
   governing noun. The sentence's own opening gloss supplies the obvious word
   (*contemplationum sublimia*, five lines above), so the intended reading is
   near-certain — but a dangling genitive has **no English exponent**: any
   rendering either supplies the noun (silent emendation) or produces a phrase
   English cannot form. Rendered "at last she flies away to those of
   contemplation," which is the least-supplied option I could find. Worth a
   ruling, because the class (Latin genitive with elided head noun) will recur.

5. **0010, 0361A — the `*dic*` marker.** See section A. The only place in my half
   where I put a `[sic: …]` around a form that is technically a real Latin word.
