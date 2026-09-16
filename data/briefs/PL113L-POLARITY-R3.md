# 8974 — Blind polarity read R3, chunks 0004–0010

Paul of Burgos, *Additiones* (PL 113), textIdno 8974: the end of the scholastic question on the
literal sense (0004–0005), the Franciscan master's letter (0006), and Burgos's reply (0007–0010).
Blind pass: English `src/english/8974/NNNN.md` read sentence by sentence against Latin
`src/latin/8974/NNNN.md`, and the Latin of 0001–0003 read for orientation only. No fenced file
(cruces, `data/briefs/` other than the model brief `8949-POLARITY-0000.md`, tei-patches,
plate-reads) was opened before sections 1–3 were written. No text or apparatus file was edited.

## 1. Coverage — every chunk in range accounted for

| chunk | cols | content | verdict |
|---|---|---|---|
| 0004 | 0045A–0047D | Art. 6 (the answer, by distinction); commendation of Lyra and his three shortfalls; Burgos's apologia; replies to args 1–2 | clean (1 low-confidence force issue) |
| 0005 | 0047D–0050A | Replies to args 3–7 (foundation, parables, *intus et foris*, order of study, Gregory's *cum ordo historiae deficit*) | **1 finding** (F1) |
| 0006 | 0050B–0051C | The friar's letter: praise, then attacks on the determination, the three considerations, and the three shortfalls | clean |
| 0007 | 0051D–0053D | Reply: opening; "useful vs subtle"; "not affirmative but distinctive"; ark; Ezekiel's wheels; faith and sacraments in the literal sense | **1 finding** (F2); ⚑ `[cj:]` @0053A judged — **agree** |
| 0008 | 0054A–0056B | Reply: *Scrutamini Scripturas*; Jewish and Arian error as failure of the literal sense; the five unexplained dissatisfactions; comparability of the senses | clean |
| 0009 | 0056C–0059A | Reply: extension (*sacramentum*, I Cor 10); universality and "incommunicability"; certainty; St Thomas; the three commendations of Lyra | **1 finding** (F3) |
| 0010 | 0059A–0060A | Close of reply | clean |

## 2. Findings

### F1 — chunk 0005, col. 0048C — *potentior* against *latentior* (Migne's or our TEI's; unsure)

Latin as printed:

> etsi liber sacrae Scripturae … dicatur « scriptus foris » ratione sensus litteralis qui dicitur
> esse **potentior**, eo quod per voces immediate significatur; et dicatur « scriptus intus »
> propter sensum mysticum, seu sensum spiritualem, qui est **latentior**

English:

> is said to be « written without » by reason of the literal sense, which is said to be **more
> powerful**, because it is signified immediately by the words; and is said to be « written
> within » on account of the mystical sense … which is **more hidden**

**Why it contradicts.** The sentence is built as a matched pair, *foris / intus* ↔ *X-ior /
latentior*, and the reason given for X is "because it is signified immediately by the words",
which explains why a sense is *open*, not why it is *powerful*. The pair wants *patentior* ("more
open, more manifest"), the standard antonym of *latentior*. "More powerful" also cuts against the
very next clause. Burgos is conceding that the literal sense is *not* the greater sense here
("it does not follow that the literal sense is of lesser worth universally, **but only
particularly**"). So the English has him praise the literal sense as more powerful in the same
breath that grants the objection's point. *potentior* is a real word, so Pattern 18 is the right
tool: the faithful English misleads. The *po-*/*pa-* confusion is one letter. Whether it is the
plate's or Corpus Corporum's needs a plate read. If the plate prints *patentior*, this becomes a
TEI patch and not a `[cj:]`.

**Proposed fix (if the plate prints *potentior*):**
`which is said to be more powerful [cj: *potentior*; read *patentior*, "more open"], because…`

### F2 — chunk 0007, col. 0052D — *vita* bound to the wrong clause (OURS)

Latin as printed:

> Sed dicis, licet in utroque Testamento invenitur sensus litteralis et spiritualis **vita tamen**
> non conceditur nisi spirituali intelligentiae, cum subditur: « Et spiritus vitae erat in rotis. »

English:

> But thou sayest: although in both Testaments **the literal sense and spiritual life** is found,
> **yet it** is not granted except to spiritual understanding

**Why it contradicts.** *tamen* is postpositive. *vita tamen* opens the main clause, and *vita* is
its subject ("yet **life** is not granted except to spiritual understanding"). *spiritualis*
belongs with *sensus* ("the literal and spiritual sense"). The comma is missing on the plate, and
Pattern 8 rightly keeps it missing, but the word order still fixes the construction. The English
moves *vita* into the concessive clause as "spiritual life". That leaves "it" with no possible
antecedent. It also makes Burgos's quotation of the opponent concede that spiritual life is found
in both Testaments, then deny it in the same breath. The quotation stops matching what the
opponent wrote at 0050C: *littera gratiae in littera legis: quibus **non concedit vitam**, sed
spirituali intelligentiae*. The quotation is supposed to replay exactly that claim, which is that
life is granted to spiritual understanding and not to the letter. This is a mis-bound agreement
(7a mechanism 5), in a *dicis* sentence where who holds which view is the whole point.

**Proposed fix:** "But thou sayest: although in both Testaments the literal and spiritual sense
is found, yet life is not granted except to spiritual understanding, when there is added: …"
(no punctuation supplied; the English construction alone carries it).

### F3 — chunk 0009, col. 0058C — *Laudamus seipsos vituperantes* inverted (OURS)

Latin as printed:

> Hoc etiam physica doctrina suadet; ait enim Philosophus: **Laudamus seipsos vituperantes.** Et
> sic **per oppositum** seipsum laudare, seu aliis praeponere, non est commendabile

English:

> for the Philosopher says: **We praise ourselves in blaming.** And so, by the opposite, to praise
> oneself, or to set oneself before others, is not commendable

**Why it contradicts.** *vituperantes* is an accusative plural participle governed by *laudamus*,
and *seipsos* is its object: "we praise **those who blame themselves**." The English takes
*seipsos* as the object of *laudamus* and the participle as adverbial ("we praise ourselves"). So
Aristotle is cited for self-praise in the sentence directly before "*by the opposite*, to praise
oneself … is not commendable." As written, "by the opposite" has nothing to be the opposite of:
the maxim and the conclusion say the same kind of thing, and one approves what the other
condemns. As construed, the argument holds: self-blame is praised, so its opposite, self-praise,
is not. The whole passage argues against self-commendation (II Cor 10, Prov 27). The English
reverses who does the blaming and who is praised (7a mechanism 5, agency mis-bound).

**Proposed fix:** "for the Philosopher says: We praise those who blame themselves. And so, by the
opposite, …"

### Low-confidence (reported, not asserted)

- **0007, col. 0052A — *talia enim quae, ut dicit, mentem elevatam reficiunt*** → "such things
  as, **as he says**, refresh the uplifted mind". The phrase "refresh the uplifted mind" belongs to
  the friar, who is addressed as *tu* throughout (*Dicis enim primo …*), not to the prophet cited
  just before. So *dicit* sits oddly and may be a plate or TEI slip for *dicis*. The English
  follows the print, and a reader will take "he" to be Isaiah. This misattributes who is
  speaking, but it doesn't reverse the argument. Possible `[cj: *dicit*; read *dicis*, "as thou
  sayest"]`, but only after a plate read.
- **0004, col. 0047C — *occasionaliter*** → "concupiscence was increased **occasionally**" / "the
  law of the letter, which kills **occasionally**". The scholastic term means "by way of occasion"
  (as an occasion, not a per se cause). English "occasionally" reads as "sometimes". That weakens
  *Littera occidit* into an intermittent claim, which is not what Burgos concedes. The force is
  wrong but nothing is reversed. Suggested: "as an occasion" / "occasionally, that is, as
  occasion". Ours; minor.
- **0007, col. 0052A — *secundum quarum unam sensus naturalis praeeminet*** → "the natural
  sense". Everywhere else Burgos says *litteralis*, and he means it here. This is lexical, not
  polarity. The English is literal, and the neighbouring "than the spiritual sense" lets a reader
  recover the meaning. Candidate for a plate check.
- **0007, col. 0053D — *secundum sensum litteralem doctorum hujusmodi*** → "according to the
  literal sense of doctors of this kind". The next sentence has *hujusmodi dicti*, which points to
  *dictorum* ("of sayings of this kind"). No doctors are involved. Lexical, not polarity; plate
  check.

### ⚑ The `[cj: *contra*; read *secundum*]` @0053A — verdict: **AGREE, keep it**

Printed: *Primo **contra** auctoritates sacrarum Scripturarum: utrum fides ita se habeat
demonstrandum est, deinde adversus garrulos*.

1. **The sentence argues against itself as printed.** It lays out two stages, first X, then
   *adversus garrulos*. If X is also "against" something, the two stages are the same kind of
   thing, and the first stage makes Scripture's authorities the adversary to be refuted.
2. **It contradicts its neighbours in both directions.** Before it: "the mystery of the Trinity
   … is **founded in** authorities of sacred Scripture understood according to the literal
   sense," with *Unde Augustinus* bringing in the quotation as proof. After it: "the authorities
   … **which oblige us to believe** in the mystery." A proof-text saying the faith must be
   demonstrated *against* those authorities would refute the claim it is cited for.
3. **The source reads *secundum*.** Augustine, *De Trinitate* I.2.4: *Sed primum secundum
   auctoritatem Scripturarum sanctarum, utrum fides ita se habeat, demonstrandum est. Deinde …
   adversus garrulos ratiocinatores*. (This is my recollection of the text, not something checked
   in this pass. Burgos also cites "book IV" and has the plural *auctoritates*. Neither affects
   polarity.)
4. The gloss "according to" is accurate, and the form follows Pattern 18.

Recommendation: keep the marker. Read the plate once to decide `[cj:]` against a TEI patch. If
the plate itself prints *secundum*, the word is Corpus Corporum's error, and the right fix is a
patch with no public marker.

## 3. Candidates considered and rejected

- **0006, 0050C (friar) *attamen non ingeniosa subtilitas mentem reficit elevatam*.** A reader
  could take it as "a *not-ingenious* subtlety refreshes". The English "ingenious subtlety does
  not refresh" matches the parallel *non satiat* that follows, and Burgos's reply at 0052A reads
  it the same way (*quid si non reficiant*). Sound.
- **0006, 0050D *inter quos comparatio non est possibilis … extra quod non contingit
  comparatio*.** Two negations. Both are carried, and the sense holds: comparison happens only by
  degrees within one species. Burgos quotes it back correctly at 0056A.
- **0006, 0050B *pro cujus parte contra, octo rationibus … agitasti, non modicum firmitatem
  ejusdem solidando*.** Shaking the foundation while strengthening it looks paradoxical, but it
  describes the objections serving the determination. Florid, not reversed. ("Eight" against the
  seven objections plus the *sed contra* is a count, not polarity.)
- **0006, 0051B *tibi nunc plus quam viventi in saeculo afficior*.** Rendered "more than toward
  anyone living in the world". It could also mean "more than [toward thee] when living in the
  world", before Burgos's conversion or episcopate. That is an ambiguity of reference, not a
  reversal.
- **0004, 0046C *non videtur fuisse sufficienter eruditus, quasi illam in pueritia
  didicisset*.** The negation's scope covers the *quasi*-clause ("not learned as one who learned it
  in boyhood would be"). The English "as if he had learned it in boyhood" is loose, but the next
  clause, "*but* … as though acquired … in adult age", sets up the contrast. Sound as read.
- **0004, 0046B *communior est caeteris, circa Glossam ordinariam*** → "around the ordinary
  Gloss". Unclear (perhaps "after/besides"), but nothing to reverse.
- **0004, 0045A–D, the distinction scheme** (speculative/practical × universal/particular). Every
  "same worth / more worthy / spiritual more worthy" checked against Burgos's own summary at 0052A
  ("pre-eminent / equal / lesser"). All consistent.
- **0005, 0048D *Sed ex hac consideratione habetur, quod sensus litteralis simpliciter loquendo sit
  dignior*.** The adversative "But" looked at first like it concedes the objection. It correctly
  turns *foris* (open to all) into a point for the literal sense.
- **0005, 0048C *Non ergo cum Scriptura nominat Dei brachium, est litteralis sensus, quasi…***.
  Negation moved within the sentence but kept, with the right scope.
- **0007, 0052B–C, the ark example.** *cui honor debebatur propter contenta in ea, et non
  econtra* matches the friar's *arca propter talia reverenda erat*. The *dicis* attribution is
  kept.
- **0008, 0054A Augustine *Quis autem non imprudentissime nitatur … nisi habeat*.** Double
  negative carried. (Augustine has *impudentissime*. Different word, same direction.)
- **0008, 0055A Hosea *corruerunt*** — already has a `[var:]`. Burgos's own gloss uses *corruent*.
- **0008, 0056A *si ostendisses rationem … forte satisfieret tibi*** → "perhaps thou wouldst be
  satisfied". Impersonal passive, loosely rendered, same direction.
- **0009, 0057D (friar quoted) *rectitudo experientiae*** against the letter's *certitudo
  experientiae*, and *inspirationem* against *spirationem*. The quotation doesn't match the
  letter, but nothing is reversed, and the English follows each print.
- **0009, 0058D *Nec enim adduci possum ut credam quod postponere … commendatione reputes
  dignum*.** Negation and scope correct.
- **0009, 0056B–C *sacramentum* trilemma.** "false / false / true but irrelevant". All three
  branches carried with the right polarity.
- **Citation locators** (0053B *Matth. XII* for Mt 22, 0053C *Marc. XIX* for Mt 19, 0053D *Jac.
  III* for Jas 5). Migne's locator errors, not polarity; out of scope.
- Negations spot-checked and found **intact**: 0004 *non sequitur simpliciter quod … non
  habeantur*; 0004 *quod Scriptura … manifeste non tradat*; 0005 *nunquam potest subesse falsum*;
  0007 *nihil aliud continebatur nisi praecepta decalogi*; 0007 *Non est dubitabile quod per
  litteralem*; 0007 *Quis … audeat dicere quod in sensu litterali non est spiritus vitae*; 0008
  *nunquam reperies … nisi sub sensu litterali*; 0008 *non intelligebant prohiberi, nisi
  occisionem*; 0009 *nec in textu, nec in glossa est sensus nisi litteralis*; 0009 *theologus …
  non est ex hoc commendandus*; 0010 *non judicio proprio deviavi*.

## 4. Post-hoc check against `src/english/8974/cruces.md` (opened only after §§1–3 were written)

- **F1, 0048C *potentior*: ALREADY LOGGED, and declined.** Stint C0 saw the same thing (it points to
  *patentior*, *potentior* is confirmed at the plate) and declined `[cj:]` because "the English isn't a
  claim Burgos argues against." This read disagrees on that one point: "more powerful" contradicts the
  *latentior* antithesis and the stated reason, in a concessive clause where Burgos is giving ground. The
  plate question is settled (Migne's word). What remains is only the Pattern 18 bar, and that is a
  judgment for Wilson or the merge, not new evidence.
- **F2, 0052D *spiritualis vita tamen*: NOT LOGGED.** No 0052D entry and nothing on *vita tamen* or the
  concessive clause. New finding, ours.
- **F3, 0058C *Laudamus seipsos vituperantes*: SITE LOGGED, DEFECT NOT.** The stint kept "We praise
  ourselves in blaming" and read it as the Aristotelian point that self-deprecation is a boast
  (*NE* IV). Stated fairly: on that reading the English is a deliberate rendering, not a slip. This brief
  still holds that *vituperantes* is most naturally the object ("those who blame themselves"). Only that
  reading gives *per oppositum … seipsum laudare non est commendabile* something to be the opposite of.
  The two readings should be adjudicated. This is not a known-and-closed item.
- **Low-confidence *ut dicit* (0052A), *naturalis* (0052A), *doctorum* (0053D): ALL ALREADY LOGGED.**
  Each is recorded as printed and confirmed at the plate. *naturalis* and *doctorum* were considered for
  `[cj:]` and declined. Independent re-derivation, no new information.
- **Low-confidence *occasionaliter* "occasionally" (0047C): NOT LOGGED.** A new force/lexical note, minor.
- **`[cj: *contra*; read *secundum*]` @0053A: ALREADY LOGGED**, fired by C6 as a judgment call and kept at
  merge. *contra* and "book IV" are both plate-confirmed, so it is Migne's word and a `[cj:]` (not a TEI
  patch) is the correct instrument. This blind read reached the same verdict with the same reasons
  (the source reads *secundum*; the proof-text would otherwise refute what it is adduced for). Agreement,
  independently arrived at.
- **Rejected 0046C *quasi … didicisset*: ALREADY LOGGED** with the same counterfactual reading.
