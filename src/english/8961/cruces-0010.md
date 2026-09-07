# 8961 *Liber Leviticus* — cruces, chunks 0010–0014 (cols 0324A–0336A)

Glossa ordinaria on Leviticus 9–13, Anselm of Laon and his school, PL 113.
**Every column in this range was read at the plate** (Gallica IIIF `ark:/12148/bpt6k5505319w`,
f = (column + 1) / 2, f162–f168; corner numbers read first on every leaf), and three sites were
checked on the on-disk archive.org copy as well. The read record is
`data/briefs/8961-PLATE-READS-0010.json`; TEI divergences are in
`data/briefs/8961-PENDING-TEI-PATCHES-0010.md`.

**Lemma-span count:** 205 marked spans in the Latin of chunks 0010–0014, counted both as a
whole-file total and paragraph-bounded, with no unmatched delimiter in either direction. The
brief's figure is 205. **They agree, and the two counting methods agree with each other.** This
work sets its lemmata in italic and carries **no guillemets at all** in this range.

---

## 1. Fixed English equivalents for the leprosy vocabulary (Lv 13, chunk 0014)

Held to one equivalent per Latin word across the whole range, because the same word carries a
literal and an allegorical sense in adjacent sentences and elegant variation would hide that.
**A peer stint owns the neighbouring range and cannot see these.**

| Latin | English | note |
|---|---|---|
| *lepra* | leprosy | never "leprosy/leprous sore" by turns |
| *leprosus* | leper (n.) / leprous (adj.) | |
| *plaga* | plague | *plaga leprae* = "the plague of leprosy"; also *plaga major* = "a greater plague" @0334C, deliberately the same word |
| *macula* / *maculatus* | spot / spotted | *maculae* of avarice and lust @0334A; *Quicunque maculatus* @0335B |
| *cicatrix* | scar | *in cicatrice exustionis* = "in the scar of a burning" |
| *ulcus* | ulcer | |
| *scabies* | scab | |
| *alba* | white | |
| *subrufa* | somewhat reddish | |
| *volatilis* (*lepra volatilis*) | flying | **not** "spreading"; Gregory's homily is about a vice that flits from one place to another, and the metaphor is the whole point |
| *effloruerit* / *efflorentem* / *florens* | flower forth / flowering | ⭐ the gloss at 0333D–0334A is built on the flower (*quasi florente et alba*, *quae ad modicum floret*); rendering *effloruerit* as "break out" would leave the exposition explaining nothing |
| *exustio* / *exurere* | burning / burn up | |
| *recludere* | shut up | |
| *mundus* / *immundus* / *mundare* | clean / unclean / cleanse | |
| *pili*, *capilli* | hairs, hairs of the head | @0333B the gloss needs both in one sentence |
| *pinnula* | fin | Lv 11; kept plain "fins" for the fish and for the *pinnulae virtutum* alike, since the allegory is the identity |
| *squama* | scale | |
| *morticinum* | carrion | one noun, so the gloss *id est participanti mortem inferens* can hang on it |
| *cadaver* | carcass | kept distinct from *morticinum* |
| *gastrimargia* | gluttony | |
| *ingluvies* | voracity | kept distinct from *gastrimargia*, which stands eight columns away |
| *cenodoxia* | vainglory | *vana gloria*, in the very next sentence @0335D, is "vain glory" — two English forms because Migne has two words |

*vitiligo*, *tinea* and *livida* do not occur in this range.

## 2. ⚑ Press variants — two printings, and Gallica drops letters the archive carries

**Both sites were checked on both copies and both copies are clean at both sites.** There is
nobody to accuse, so **no `[sic:]` was fired**, and each is recorded here instead.

- **0324C** — Gallica (our TEI's exemplar, and our TEI) prints ***tranferente***; the
  archive.org copy prints *transferente*. Rendered "transferring", which is the sister
  printing's own reading and not our conjecture.
- **0327D** — Gallica and our TEI print ***ministare***; the archive.org copy prints
  *ministrare*. Rendered "to minister", same reasoning.

⛔ A stint working PL 113 from Gallica alone will read both of these as Migne's defects and
mark them. They are not. Conversely, two archive-only readings in this range (*condendum* for
*comedendum* @0324C, *Moyes* for *Moyses* @0327C) are jbig2 artefacts and are **not**
reportable: the codec substitutes a visually similar, well-formed character, so its errors
construe.

## 3. The one `[sic:]`

- **0327B** — ***sacricium*** for *sacrificium*, in *Debet autem comedi hoc sacricium in loco
  sancto*. **Confirmed on BOTH printings** and present in our twin, so the defect is Migne's.
  The English renders the sense with the type inside the marker, per Pattern 7 as amended
  2026-09-05: "But this sacrifice [sic: *sacricium*] ought to be eaten in the holy place."

## 4. Scripture divergences — the `[var:]` markers, twelve in all

Each was collated word for word against `sources/vulgate/clementine-flat.txt` **and confirmed
on the Gallica plate** before firing.

1. **0324B** *Convertimini et agite poenitentiam*, put in Peter's mouth at Pentecost. The words
   are Ez 18:30 verbatim; Acts 2:38 reads *Poenitentiam agite*, Acts 3:19 *Poenitemini igitur
   et convertimini*.
2. **0324C** *Hic est panis quem dedit vobis Dominus ad comedendum, hic est sermo quem
   constituit Dominus* (Exod. XVI). Vulg. Ex 16:15 *Iste est panis quem Dominus dedit vobis ad
   vescendum*, Ex 16:16 *hic est sermo quem praecepit Dominus*. Four separate departures in one
   quotation, and the gloss turns on *sermo* being the thing appointed.
3. **0325C** *Dominus Deus noster ignis consumens est* (Deut. IV). Vulg. Dt 4:24 has *tuus*;
   the form with *noster* is Heb 12:29. Fired because the gloss makes the fire the Spirit given
   to *us*.
4. **0326A** *Deus meus et Dominus meus* (Joan. XX). Vulg. Jo 20:28 *Dominus meus, et Deus
   meus* — **the order reversed**, in a gloss whose whole point is the two things Thomas
   touched and saw, *carnem et divinitatem*, in that order.
5. **0330A** *Crura eorum recta, et pennati pedes eorum* (Ezech. I). ⭐ The strongest of the
   twelve: **no received verse reads *crura eorum recta*.** Vulg. Ez 1:7 is *et pedes eorum,
   pedes recti, et planta pedis eorum quasi planta pedis vituli*, and the whole gloss is built
   on the contrast of *crura* with *pedes* (*Habere nos oportet crura sublimiora pedibus*).
6. **0330B** *ut in ore duorum testium stet omne verbum* (Matth. XVIII). Vulg. Mt 18:16 reads
   *duorum, vel trium testium*. Material: the gloss immediately draws the two witnesses as the
   two laws (*et in utraque lege laudes Deum*), which three witnesses would spoil.
7. **0332D** *ipse loquetur ad populum, et erit os tuum, tu autem eris in his quae ad Deum
   pertinent* (Exod. IV). Vulg. Ex 4:16 has *pro te* after *loquetur* and *ei* after *eris*;
   both are dropped, and the passage is precisely about who stands to whom.
8. **0333B** *capilli capitis vestri omnes numerati sunt*, cited as **(Matth. X)**. Mt 10:30
   reads *Vestri autem capilli capitis omnes numerati sunt*; **the word order printed here is
   Lc 12:7's.** The pre-scan's bare tick against Luke was the tell.
9. **0334A** *Date eleemosynam et omnia munda erunt vobis*. Vulg. Lc 11:41 *et ecce omnia munda
   **sunt** vobis* — future for present, in a sentence promising that avarice *can be* cut away.
10. **0334C** *Ignis adversarios consumet* (**Isa. LXXIV**). No verse reads thus. Is 26:11 has
    *ignis adversarios tuos devoret*; Heb 10:27 *ignis aemulatio, quae consumptura est
    adversarios*. **Isaiah has sixty-six chapters**, so the address is impossible as well.
    Confirmed on the plate, chapter number and all.
11. **0335A** *Qui peccat in Spiritum sanctum, non remittetur ei*. Vulg. Mt 12:32 *qui autem
    dixerit contra Spiritum sanctum, non remittetur ei* — sinning against, for speaking against.
12. **0335C** *Qui hanc doctrinam non affert, non recipiatis eum in domum, et ave ei non
    dixeritis* (II Joan. 10). Vulg. *Si quis venit ad vos, et hanc doctrinam non affert, nolite
    recipere eum in domum, nec ave ei dixeritis*. ⭐ **Migne quotes this same verse at 0326B in
    a third form** (*Si quis venit ad vos … nolite eum recipere in domum*), and both forms are
    on the plate. The 0326B form differs from the Vulgate only in word order and took no marker.

## 5. Divergences examined and DECLINED, with the reason

- **0326B** *nolite eum recipere in domum* (2 Jn 10) — word order only against the Vulgate's
  *nolite recipere eum*; no sense at stake. Recorded at §4.12 as the companion of a marker that
  did fire.
- **0325C** *Et egressus est ignis a Domino* (Lv 9:24). Vulg. *Et ecce egressus ignis a Domino,
  devoravit holocaustum*. An added *est*, a dropped *ecce* and an abridgment; the Pentecost
  parallel the gloss draws is untouched.
- **0328B** *Vidit Deus cuncta quae fecerat* (Gn 1:31). Vulg. *Viditque*. One enclitic.
- **0327C** *Voluntarie enim peccantibus non relinquitur hostia pro peccato* (Heb 10:26). A
  heavy abridgment of *Voluntarie enim peccantibus nobis post acceptam notitiam veritatis, jam
  non relinquitur pro peccatis hostia*, with the sense entire. Both negations carried.
- **0327C** *quia Spiritus sanctus disciplinae effugiet fictum* (Sap 1:5). Migne's *quia* stands
  where the Vulgate has *enim*; that is the commentator's connective, not a variant reading.
- **0331A** *Scripsi vobis non commisceri fornicariis*, cited **(I Cor. III)** — the words are
  1 Cor 5:9–10 and the reference is wrong by two chapters, but the reference is inside an `[n:]`
  and passes verbatim; the wording turns the Vulgate's *Ne commisceamini* into an infinitive
  without touching the sense.
- **0331A** *Moab olla spei meae*, cited **(Rom. II)** — the words are Ps 59:10 **verbatim**.
  Nothing diverges but the address, which is Migne's and rides in the note.
- **0332A** *In loco sancto edent ea*. Nearest are Lv 6:16 *comedetque illam in loco sancto* and
  Lv 10:13 *Comedetis autem eam in loco sancto*; the point being made is only that a court can
  be called a holy place.
- **0333C** **(Joan. XI)** for the Lord asking Peter a third time — the scene is Jo 21:15–17.
  Migne's, on the plate, inside a note, so it passes verbatim.
- **0335C/0335D** *Qui praedicas non furandum, furaris; peccatori autem dixit Deus: Quare tu
  enarras justitias meas?* under one **(Rom. II.)** — a conflation of Rom 2:21 with Ps 49:16,
  but **both halves are quoted accurately**. Only the single address is short.
- **0335D** *Sicut olera herbarum cito decident* (Ps 36:2, which has *quemadmodum*). One
  connective.

## 6. Printed readings rendered as they stand (Pattern 7), with the conjecture here

- **0330C** *Si naturaliter essent immunda, immundus esset viventia etiam qui tangeret.* The
  clause will not construe: *viventia* is an accusative with nothing to govern it. Rendered as
  closely as the words allow — "he would be unclean who touched them even living" — and the
  hole is left visible. Confirmed on the plate.
- **0335C** *quae cum tentationis fuso in **filiorum** tenuitatem torquetur* — "into the
  fineness of sons", in a sentence about a spindle twisting the warp. *filorum*, "of threads",
  is what the image needs and is one letter away. ⛔ **`[cj:]` DECLINED**: Pattern 18's bar is
  whether the English *asserts something false*, and "the fineness of sons" is baffling rather
  than false — it does not put a claim in the author's mouth. Recorded here per 18a. Confirmed
  on the plate.
- **0335B** *Calvus ac mundus est.* **Simplex, non stultis** — "Simple, not to the foolish".
  The dative has no obvious governor. Rendered literally. Confirmed on the plate.
- **0333B** *sanctas autem deponere sanctum, damnum est* — *sanctum* read as the dative-less
  masculine ("a loss to a holy man"); it may equally be a neuter predicate ("to lay aside holy
  ones, holy though it be, is a loss"). Rendered on the first construal; the second is here.
- **0328C** *quicunque enim pisces pinnati sunt et squamosi.* — a sentence with no main verb of
  its own. Rendered as it stands.
- **0328C** *qui autem tales non sunt, cum his nec cibum sumere.* — bare infinitive, no
  governing verb. Rendered as it stands, with both negations.
- **0332D** *Corinthiani* for *Corinthii*. An attested-enough formation and no English exponent
  distinguishes them; Pattern 9, no marker.
- **0330D** Migne prints **VERS. 34 twice**, the second time for what is Lv 11:38. His, on the
  plate, carried.
- **0335C** **VERS. 48** is printed with **no period after the numeral**, alone in the range.
  His, carried.
- **0326A** Migne glosses Elisaphan twice and with two different words — ***Dei speculum***
  ("the mirror of God") at 0325D–0326A, then ***specula Dei mei*** ("the watchtower of my God")
  at 0326A. Both are on the plate and both are rendered as they stand rather than harmonized;
  the following clause's *speculari* leans on the second.

## 7. Notes on the digitization, filed as patches rather than marked

- **0325D** — Migne prints **מישאל** before *Misael* and **אלצפן** before *Elisaphan*; our TEI
  has lost both. MT-verified against Ex 6:22. The loss leaves the sentence sound, so **no
  `[ed:]`** (Pattern 13a clause 1); filed in `8961-PENDING-TEI-PATCHES-0010.md` for a
  `data/hebrew-patches/8961.json` entry.
- **0330B** — the plate reads *Falsa dicendo testimonia**,** dignum dicendo indignum*; our TEI
  prints a full stop before the lowercase *dignum*. **The English follows the plate.**

## 8. Truncated lemmata — stop where Migne stops

**0328D** *Quidquid pinnulas,* etc. (Lv 11:10) — the printed lemma breaks off before the
negation, so the English breaks off with it: "*Whatsoever fins,* etc." An earlier draft read
"Whatsoever hath not fins", which supplies a *non* the plate does not print at that point and
is exactly the 7a failure the rule names. The full verse is *Quidquid autem pinnulas et squamas
non habet*, and the gloss that follows carries the negation for itself.
