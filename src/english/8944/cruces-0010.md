# 8944 — *Glossa ordinaria* on the Song of Songs — cruces for chunks 0010–0013

Range: **cols 1157C–1168A** (CAPUT VI end · CAPUT VII · CAPUT VII cont. · CAPUT VIII),
the last four chunks of the work. One translator, four chunks (4,039 Latin words →
6,197 English, ratios 1.48–1.55).

Apparatus taken in this range: **10 `[var:]` · 3 `[sic:]` · 0 `[cj:]` · 0 `[d:]` ·
0 `[ed:]` · 0 `[nt:]` · 10 `[n:]`** (`[n:]` at exact parity with the Latin twins:
6 + 1 + 0 + 3). Column anchors 11 + 15 + 1 + 12 = **39**, verbatim, in order, each
checked against the word it stands beside in the Latin. Question marks 0/0/0/**5**,
guillemets 0 throughout. `verify-english.mjs 8944` clean.

⚠ This file is the **range file**, not the merge. `cruces.md` is written once at the end
from all three range files.

---

## §1 · THE 7a″ DIVERGENCE LIST — every italic span in the range, checked against
## `sources/vulgate/clementine-flat.txt`

**Method.** I walked the italics out of my own Latin chunks rather than trusting
`data/briefs/8944-lemmata.txt`, then compared each span with the Clementine
(`grep -P "^Ct [678]:"` and the named books). Span counts agreed with the brief's
inventory in all four chunks (44 · 63 · 6 · 61), so for this range the brief's inventory
was complete — the missing-span problem the Apocalypse peers hit did not recur here.
The brief's placeholder `[1125D]` band on the first spans of chunks 0011, 0012 and 0013
is an artefact of the generator, not a column: those spans stand at 1160B/C, 1164A/B and
1164B/C respectively.

Migne's verse numbering agrees with the Clementine's throughout the range: CAPUT VI
VERS. 1–12 = Ct 6:1–12 (VERS. 5 not separately addressed, its words glossed under VERS. 4),
CAPUT VII VERS. 1–13 = Ct 7:1–13 (VERS. 6 not addressed), CAPUT VIII VERS. 1–14 = Ct 8:1–14.
**No verse is out of sequence and none is misnumbered.** Checked, not assumed.

### 1a · Divergences MARKED `[var:]` — ten (4 in 0010, 5 in 0011, 1 in 0013)

| col | Migne prints | Clementine | note |
|---|---|---|---|
| 1157D | *Lilia colligit,* | Ct 6:1 *ut pascatur in hortis, et lilia colligat* | indicative for the purpose-subjunctive. The gloss reads it as an indicative present (*dum … educit et … perducit*), so the mood is load-bearing. |
| 1157D | *Ego nepoti meo et nepos meus mihi, qui pascit inter lilia.* | Ct 6:2 *Ego dilecto meo, et dilectus meus mihi, qui pascitur inter lilia.* | the largest divergence in the range: ***nepos* twice for *dilectus*, and active *pascit* for *pascitur*.** Rendered "nephew", not softened to "beloved" or "kinsman". ⚑ The control is inside the gloss: the lemma four words above is printed *Ego dilecto meo* — Migne prints **both** readings on the same line, and the divergent one is his re-quotation, exactly the shape the launch brief names. Corpus control: `nepo-` occurs **once** in this work (here) and once in all seven other Song commentaries on disk (7914/0016, where it is *abnepos* of Aminadab) — so this is not a house reading and not a digitization tic. No `[sic:]`: *nepos* and *pascit* are real, well-formed words (Addendum A). |
| 1158D | *Quod oculus non vidit nec auris audivi,* | 1 Cor 2:9 *Quod oculus non vidit, nec auris audivit* | ***audivi*, first person, where the subject is *auris*.** Rendered with the person visible ("nor ear, I have heard"), which is the anacoluthon the plate prints. See §3 — also logged as a plate-read candidate, since the loss of a final *t* is the shape a digitization makes. The `[var:]` is safe either way: it asserts only what the Clementine reads. ⚠ Migne's own `[n: (Isa. LXIV.)]` attributes the verse to Isaiah; Is 64:4 in the Clementine reads quite differently (*A saeculo non audierunt…*). His citation passes through verbatim per convention 4 and is **not** corrected. |
| 1159B | *quia omne donum optimum desursum descendit* | Jac 1:17 *Omne datum optimum, et omne donum perfectum desursum est, descendens a Patre luminum* | a conflation: *donum* takes *optimum* from *datum*, and *descendit* replaces *est … descendens*. |
| 1162A | *juncta est canalibus,* | Ct 7:5 *comae capitis tui sicut purpura regis vincta canalibus* | *juncta* for *vincta*. Small, and marked because it is presented in italic as the verse's own words and the gloss builds the humility-image on it. |
| 1162A | VERS. 7.-- *Statuta tua.* | Ct 7:7 *Statura tua assimilata est palmae* | ***Statuta* for *Statura*.*** Rendered "Thy statutes" as printed. ⚑ The control is the gloss's own next sentence: *Haec est **rectitudo** bonae operationis, quae ad terrena despicit **incurvari**, totam se ad coelestia **erigit*** — an exposition of upright STATURE, under a lemma that says "statutes". A real word, so no `[sic:]`; also a plate-read candidate (§3). |
| 1162C–D | *ab ubertate domus Dei [1162D] inebriant* | Ps 35:9 *Inebriabuntur ab ubertate domus tuae* | two changes, both in the same direction: *domus Dei* for *domus tuae* and active *inebriant* for passive *Inebriabuntur*. The gloss requires the active (the *magistri* are the subject). |
| 1162D | *sicut botrus* cypri | Ct 7:8 *et erunt ubera tua sicut botri vineae* | singular *botrus* for plural *botri*, and the un-italicized *cypri* imports Ct 1:13 (*Botrus cypri dilectus meus mihi*). The marker names Ct 7:8, the verse under exposition. |
| 1163B | *qui solveret librum,* | Apc 5:2 *Quis est dignus aperire librum, et solvere signacula ejus?* (cf. 5:4 *nemo dignus inventus est aperire librum*) | the Apocalypse looses the **seals** and opens the book; Migne's clause looses the book. Italicized, so presented as a quotation; Pattern 14 rather than Pattern 18. |
| 1165B–C | *Omnia detrimenta arbitror ut stercora, ut Christum lucrifaciam* | Phlp 3:8 *propter quem omnia detrimentum feci, et arbitror ut stercora, ut Christum lucrifaciam* | *omnia detrimenta* (accusative plural noun) for *omnia detrimentum feci*. The tail of the verse is verbatim. |

(Ten rows, ten markers. Three of them — the *nepos*, the Ps 35 and the *sicut botrus* rows —
carry two divergent words inside one marker, because in each case the two changes belong to
one quotation and pull the same way.)

### 1b · Checked and found to AGREE with the Clementine — no marker

⛔ These are listed because a findings list alone cannot be told apart from a report by an
agent that never looked.

**Chunk 0010 (Ct 6).** *Dilectus meus. Descendit* (6:1; the full stop is Migne's
lemma-splitting punctuation, not a variant) · *Descendit in hortum,* (6:1, cut before
*suum*) · *ad areolam aromatum.* (6:1, verbatim) · *Areola* (the gloss's own nominative of
6:1 *areolam*) · *Ego dilecto meo.* (6:2, verbatim) · *Pulchra es, amica mea.* (6:3) ·
*Terribilis, ut castrorum acies ordinata.* (6:3; Migne's comma after *Terribilis* is
punctuation, not text) · *Averte oculos tuos a me.* (6:4) · *Non enim videbit me homo et
vivet* (**Ex 33:20 verbatim**) · *Quia ipsi me.* + *Avolare fecerunt.* (6:4, the two halves
of *quia ipsi me avolare fecerunt*) · *Magnitudinis ejus non est finis* (**Ps 144:3
verbatim**) · *Capilli tui sicut grex caprarum,* (6:4) · *Omnes gemellis fetibus, et
sterilis non est in eis.* (6:5; *fetibus* / Clementine *foetibus* is orthography, Pattern 9,
no marker) · *Sicut cortex mali punici, sic genae tuae,* (6:6) · *Absque occultis tuis,*
(6:6) · *Sexaginta sunt reginae et octoginta concubinae,* (6:7) · *Una est columba mea,
perfecta mea.* (6:8) · *Viderunt.* / *Praedicaverunt.* (6:8; rendered "They saw." /
"They proclaimed." — ⚠ **NOT** "pronounced her blessed": the Clementine's *beatissimam* is
not inside Migne's span, and importing it would be the 7a″ conformation) · *Quae est ista.*
/ *Quae est ista,* (6:9) · *Quasi aurora consurgens.* (6:9) · *aurora,* ×2, *dies*
(the gloss's own words) · *Pulchra ut luna.* (6:9) · *lunae:* (gloss's own) · *sicut sol*
(**Mt 13:43 verbatim**, *not* Ct 6:9's *electa ut sol* — the gloss has left the lemma) ·
*Terribilis ut castrorum acies ordinata.* (6:9) · *Descendi in hortum nucum,* (6:10) ·
*Nescivi, anima mea.* (6:11) · *Conturbavit me.* (6:11) · *Revertere* ×5 (6:12 prints four;
the gloss's own *quater dicit revertere* accounts for the arithmetic and is correct) ·
*Ut intueamur te,* (6:12).

**Chunk 0011 (Ct 7).** *Quid videbis in Sulamite.* / *Quid videbis.* (7:1) ·
*Quam pulchri sunt gressus.* + *Quam pulchri sunt.* ×2 (7:1) · *Juncturae femorum.* (7:1) ·
*Monilia.* (7:1) · *Quae fabricata sunt.* / *… manu.* (7:1) · *Umbilicus tuus.* /
*Umbilicus.* / *crater,* / *Tornatilis,* (7:2) · *Venter tuus.* ×2 / *acervus* / *tritici,*
/ *Acervus.* / *acervo tritici* / *craterem* (7:2; the case-inflected forms are the gloss's
own syntax, not variants) · *Vallatus liliis.* (7:2) · *Duo ubera.* / *capreae* (7:3) ·
*Collum tuum.* / *turris,* / *ebore* (7:4; *ebore* is the gloss's own noun for the verse's
*eburnea*) · *Oculi tui.* / *in porta* / *Piscinae.* (7:4) · *Hesebon piscinae* (7:4 has
*piscinae in Hesebon*; the order here is the gloss's own sentence, *sicut in civitate
Hesebon piscinae*, not a quotation — no marker) · *filia multitudinis. Nasus.* (7:4 has
genitive *filiae*; the nominative is required by the gloss's own *quae erit filia
multitudinis* — no marker) · *Sicut turris Libani.* / *Contra Damascum.* (7:4) ·
*Caput tuum.* / *Canales,* (7:5) · *Assimilata est palmae.* (7:7) · *Ubera.* (7:7) ·
*Dixi: Ascendam.* / *apprehendam fructus ejus;* / *ubera tua* / *Dixi.* / *Fructus ejus.*
(7:8) · *ascendi in palmam,* (the gloss's own perfect, reporting the lemma's *Ascendam* —
the lemma itself is printed correctly two lines above, which is what shows the shift is
rhetorical and not textual) · *Et odor oris.* (7:8) · *Dignum dilecto meo.* ×2 /
*Ad ruminandum.* (7:9) · *Ego dilecto.* (7:10) · *Veni, dilecte.* / *Veni.* / *agro,* /
*villis,* (7:11) · *vineis,* / *floribus,* / *fructibus,* (7:12, gloss's own ablatives) ·
*Mane surgamus.* / *Videamus.* / *Ibi dabo tibi ubera.* (7:12).
⚠ *cingulo moeroris,* (1162A) is italicized but is **not scripture**: no such phrase in the
Clementine (`grep cingulo`, `grep moeror` — the hits are Is 22:21, Lv 8:8 and a dozen
unrelated *moeror-* verses). It is the gloss's own image and takes no marker.

**Chunk 0012 (Ct 7:13).** *Mandragorae.* ×2 / *dederunt odorem,* / *Servavi tibi.* (7:13,
all verbatim) · *Portae,* (7:13 *in portis nostris*, gloss's own nominative) · *mala,*
(the gloss's own word, picked up from *malis Punicis* below).

**Chunk 0013 (Ct 8).** *Quis mihi.* / *Foris.* / *Deosculer te,* (8:1) ·
*in principio erat Verbum:* (**Jo 1:1 verbatim**) · *Verbum caro factum est* (**Jo 1:14
verbatim**) · *Ibi me docebis.* (8:2) · *Laeva.* / *et dextera:* / *amplexabitur me,* (8:3) ·
*Adjuro vos.* / *Donec ipsa velit.* (8:4) · *Quae est ista?* ×2 / *Sub arbore.* /
*Suscitavi.* (8:5) · *Sanguis ejus super nos, et super filios nostros* (**Mt 27:25
verbatim**) · *Pone me.* / *ut signaculum super cor,* / *Quia fortis est ut mors dilectio.*
/ *Ut mors.* / *Dura sicut infernus,* / *Lampades ejus.* / *ignis:* / *flamma,* (8:6; the
last two are the gloss's own nominatives for the verse's *lampades ignis atque flammarum*) ·
*Aquae multae,* / *Flumina.* / *Si dederit.* / *Si dederit homo.* (8:7) · *Soror nostra,* /
*Soror nostra parva.* / *Quid faciemus sorori,* (8:8) · *Si murus est,* / *Si ostium.* (8:9) ·
*Ego murus.* ×2 / *Ex quo.* / *Quasi pacem reperiens.* (8:10) · *pacifico* /
*Tradidit eam custodibus.* (8:11) · *Mille tui pacifici.* / *mille,* / *argentum,* /
*Mille,* ×2 / *mille* / *centum* / *ducenti,* / *argentei* / *pacifici:* (8:11–12; *centum*
is the gloss's own arithmetic, not a lemma) · *Quae habitas in hortis.* /
*Quae ergo in hortis habitat,* / *vocem suam audire faciat,* / *amici auscultant,* /
*Quae habitas.* / *Amici.* / *Fac me audire.* (8:13; the third-person restatements are the
gloss's own syntax) · *Fuge, dilecte.* ×3 / *Assimilare.* / *montes aromatum,* (8:14).

### 1c · Fragment handling (convention 3), and the one place it collides

Fragments are rendered as the phrase they stand for, per convention 3 and the
"NAME THE CONTROL'S CLASS" ruling (expand the stump, never contract its twin):
*Quis mihi.* → "Who shall give me." · *Quam pulchri sunt.* → "How beautiful are thy steps."
(expanded, and the fuller *Quam pulchri sunt gressus.* rendered identically, so the work has
one voice) · *Suscitavi.* → "I raised thee up." · *Ibi dabo tibi ubera.* → "There will I give
thee my breasts."

⚠ **One collision, and I record it because it is a real cost.** At 1158A–B Migne splits
Ct 6:4's single clause *quia ipsi me avolare fecerunt* into **two consecutive lemmata** —
*Quia ipsi me.* and *Avolare fecerunt.* — and glosses each separately. The Latin halves are
disjoint; the English halves cannot be, because the verb *fecerunt* lives in the second half
and English cannot leave "Because they themselves me" standing. Rendered
"*Because they themselves have made me.*" and "*They have made me to fly away.*" — the
overlap in "have made me" is forced by English, not by Migne. The alternative (a stump)
was rejected under convention 3; contracting the second lemma to match the first was
rejected under the expand-the-stump ruling.

---

## §2 · MARKERS TAKEN — `[sic:]`, three, all Pattern 10 / Pattern 7 non-word type

Each carries the sense in plain English beside it (7a⁗). **Strip-every-marker test run on
all four files:** every sentence reads aloud complete with the brackets deleted.

| col | printed | English | corpus control |
|---|---|---|---|
| 1158C | *fi deles* | "the faithful [sic: *fi deles*] converted from either people" | split type, Pattern 10 (whole run carried, spacing included). `fi deles` occurs **once in all of `src/latin/`** — this file. |
| 1158D | *arden* | "burn [sic: *arden*] with heavenly desires" | truncation of *ardent*. `arden` as a whole word occurs **once in all of `src/latin/`**; `ardent` is common. The marked run is the clause's only verb, so "burn" stands beside it. |
| 1159D | *spon sus* | "the bridegroom [sic: *spon sus*], or the Church herself, proclaims" | split type. `spon sus` occurs **once in all of `src/latin/`**. The marked run is the sentence's subject, so "the bridegroom" stands beside it. |

⚠⚠ **All three are also plate-read candidates, and the three markers should be WITHDRAWN in
favour of a `data/tei-patches/8944.json` entry if the plate reads *fideles* / *ardent* /
*sponsus*.** Addendum A is explicit that a suspicion aimed at a **non-word** has been
confirmed as *our* corruption every time it has been tested (10 for 10), and a `[sic:]`
that turns out to be the digitization's error publicly blames Migne for something he did not
print — the class in which seven markers were withdrawn in the Joshua/Galatians batch. I have
fired them because Patterns 7, 10 and 12 are unambiguous for carried non-word type and
because leaving them unmarked would mean silently reading the typo; but **a plate read of
PL 113 cols 1158 and 1159 is the cheap resolution and I am asking for it here.**

No `[cj:]`, `[d:]`, `[ed:]` or `[nt:]` was taken. All ten `[n:]` in the range are citations
(`(Exod. XXXIII)`, `(Psal. CXLIV)`, `(RAB.)`, `(GREG.)`, `(Isa. LXIV.)`, `(Jac. I)`,
`(Psal. XXXV)`, `(Joan. I)`, `(Matth. XXVII)`, `(Philip. III)`) — none is editorial prose,
so Pattern 15 does not fire.

---

## §3 · PLATE-READ CANDIDATES — real words, rendered as printed, NO marker

Per Addendum A: a real, well-formed word that reads oddly is **Migne's** until a plate says
otherwise. Each of these is rendered as printed and none carries a marker.

1. **1159A · *unum baptista*** — "Although the persons be many and diverse, yet the faith in
   them is one, **one baptist**, one God, one work." The series is Eph 4:5 (*Unus Dominus,
   una fides, unum baptisma*, checked in the Clementine), and the **neuter *unum* agrees with
   *baptisma*, not with masculine *baptista***. Rendered "one baptist". No `[sic:]` (real
   word), and no `[cj:]` either: I weighed Pattern 18 and declined, because "one baptist"
   is merely odd in a list, not a claim the author is arguing against — Pattern 18's bar is
   Wilson's and this does not reach it. The gender disagreement itself is Pattern 9 (no
   English exponent). **Plate candidate.** Corpus: 2 `baptista` against 17 `baptisma` and
   ~140 other `baptism-` forms in the Glossa books — suggestive, and by Addendum A a
   frequency argument cannot settle a real word.
2. **1162A · *Statuta tua*** for *Statura tua* — see §1a. Marked `[var:]` because it is a
   quoted lemma; also a plate candidate, since *Statuta*/*Statura* is a one-letter
   difference of exactly the class Addendum §4 records in both directions.
3. **1158D · *audivi*** for *audivit* — see §1a. The loss of a final *t* is the digitization's
   characteristic shape. Marked `[var:]` (which asserts only what the Clementine reads) and
   flagged here for the plate.
4. **1161A–B · *ut a Deo remuneratore vel terrenam sapientiam exspectet*** — "that from God
   the rewarder he may look for even earthly **wisdom**". The sentence's own tail is *sed
   terrenam **mercedem** requirit*, and the whole point is a man who does a work of mercy for
   an earthly **reward**. *sapientiam* is a real word and construes; rendered as printed, no
   marker, **plate candidate** (*substantiam*? *mercedem*? — I name no preferred conjecture,
   because none of them is better than the plate).
5. **1160D · *perficit*** in *quia per ministerium praedicantium **perficit** unanimis
   conjunctio credentium populorum* — an active verb with a nominative subject and no
   expressed object. Rendered "brings [it] to perfection", with the supplied object in
   square brackets per the corpus's convention for supplied words; I did **not** silently
   read it as a passive, which is the smoothing Pattern 7a forbids.
6. **1161D · *fluenta doctrinae auditoribus non cessant*** — *cesso* with a direct object and
   no infinitive. Rendered "who cease not the streams of doctrine to their hearers", which is
   as close as the printed words allow. The negation is present and sits on *cessant*, which
   is its only possible host.
7. **1163B · *quod ille prius orans aliis porrexerit*** — *orans* ("praying") where the
   sense-frame is drinking and holding out a cup. Real word, construes, rendered "first
   praying". No marker; noted for the plate only because it sits four words from the
   *potandum* / *ruminandum* pair.
8. **1165C · *foedatur*** in *quando verbo Dei copulata, sancto repleta Spiritu, per
   praedicationis ministerium in filiorum conceptione **foedatur*** — "she is **defiled**"
   in a sentence whose every other term is honourable (*copulata*, *repleta Spiritu*,
   *parturit*, *parit*). ⛔ **This is the range's closest call and I want to say which reading
   I took and why the other lost.** The rival is *foederatur* ("is bound in covenant"), which
   the context invites and which would be a textbook Pattern 18 `[cj:]`. **I declined it and
   rendered the printed *foedatur* ("is defiled") with no marker**, for two reasons:
   (a) *foedatur* is a real word that occupies its slot and construes, so Addendum A puts it
   on Migne's side of the line until a plate says otherwise; (b) the defilement reading is not
   actually foreign to the tradition — the Church contracting a stain in bearing children
   into the world is a commonplace, so the printed word does not clearly assert something the
   author is arguing against, which is Pattern 18's bar. **Plate candidate**; if the plate
   reads *foederatur* this becomes a tei-patch, not a `[cj:]`.
9. **1163A · *fragantiam*** for *fragrantiam* — attested medieval orthography, Pattern 9.
   No marker, no crux beyond this line; recorded so a later sweep does not churn it.
10. **1162A · *plenaria introitione*** — *introitio* is a rare but well-formed noun. Rendered
    "full entering-in". No marker.
11. **1161D · *muniunt alias*** — feminine accusative plural where the antecedent (*illi …
    qui*) is masculine. Pattern 9: gender has no English exponent. Rendered "others".
    No marker, no churn.
12. **1163D–1164A · *si flores ad partum fructum convalescant*** — *ad partum fructum* will
    not construe as it stands (Ct 7:12 has *si flores fructus parturiunt*). Rendered "whether
    the flowers grow strong unto the bringing forth of fruit", which is as close as the
    printed words allow; no marker, because both words are real and I cannot tell which is
    the corrupt one. **Named as a candidate, not adjudicated.**

⭐ **Recorded negatives** (Addendum §4 asks for these, and they are worth having): I looked
for the "suspiciously tidy" normalization class and found nothing to raise. In particular
*deservit* / *deserit* — the standing confusion pair for this series — **does not occur at
all in chunks 0010–0013**: `grep -o "deserv[a-z]*\|deser[a-z]*"` returns **zero hits in all
four files.** That is a checked zero, not a skip. `inservio` at 1158D takes its proper
dative (*doctrinae inserviunt*) and is not a member of the pair.

---

## §4 · REFERENTS — every supplied "he / she / it / they", named

The launch brief is right that this matters unusually much here: *sponsus*, *sponsa*,
*Synagoga*, *Judaea*, *Ecclesia*, *gentilis* and the *amici* trade speeches across these
four chunks, and a wrong pronoun reassigns one.

- **1157D · *Respondet piis sanctorum desideriis … eum delectari*.**
  ⛔ **THIS ENTRY WAS WRONG AND IS CORRECTED — the subject is the BRIDE, not the Bridegroom.**
  Rendered "**She** answers that he is delighted…", with the three preceding verbs in the
  same sentence (*Cum dixisset* … *addit* … *cum dicit*) likewise hers. Found by the blind
  polarity reader on chunks 0007–0013, which proposed the change, met this entry asserting
  the opposite, and **kept the repair** — correctly. Three independent proofs, none of them
  "it reads better":

  1. ⭐ **The work says so itself, four verses on.** VERS. 3 opens *«Pulchra es, amica mea.*
     **Hactenus vox Ecclesiae** Dominum suum laudantis et quaerentis; qui quoniam a suis
     amatoribus non longe est, **sequitur quid quaesitus respondeat**»* — "**thus far** the
     voice of the Church praising and seeking her Lord … **there follows** what the
     sought-one may answer." The commentary declares that everything to this point is the
     Church's voice and that the Bridegroom's reply **begins at VERS. 3.** ⚑ Verified at the
     plate, PL 113 p. 584, col. 1158, not merely from our files.
  2. ***eum*, not *se*.** *Respondet … **eum** delectari* takes a NON-reflexive pronoun in
     the accusative-and-infinitive precisely because the subject of the infinitive is not the
     subject of the governing verb. Had the answerer been the one delighted, Latin required
     *se delectari*. **The original entry's own reasoning collapses here**: it asserted *eum*
     "is the same person" as the subject, which is what *se* would have been for.
  3. **The verse.** Ct 6:1 is marked `<Sponsa>` in the Clementine; the lemma glossed
     (*Descendit in hortum … ad areolam aromatum … lilia colligat*) is the Bride answering
     the daughters' *Quo abiit dilectus tuus* of 5:17.

  ⚑ **And this entry contradicted its own next bullet**, which assigns *apponit* at VERS. 2
  to the Bride — splitting Ct 6:1–2, both `<Sponsa>` and one continuous speech, between two
  persons with no speaker change in the text. **The lesson: a referent call that disagrees
  with the bullet beneath it is already telling you something.**
- **1157D · *apponit*** (VERS. 2): **the bride/Church**, who is the speaker of *Ego dilecto
  meo*. Rendered "She sets this little verse beside it".
- **1157D · *in me potes habere formam ejus, quem quaeritis*.** ⚠ Migne prints a **singular
  *potes* and a plural *quaeritis* in the same clause.** Both are rendered as printed
  ("thou canst have the form of him whom you seek"), per Pattern 17, which makes number a
  marker and not a matter of taste. This is Migne's inconsistency, not ours, and the reader
  can see it. No marker (there is nothing broken to carry).
- **1159D · *Habent tales praelatos … qui … fidem nostram evacuant, et terrorem nobis
  incutiunt*.** ⛔ The "our" and "us" here are **not the Church's**. The sentence is a
  prosopopoeia in the mouth of the *aeris potestates* / heretics against whom the Church is
  *terribilis*, as its own next sentence proves: *eo terribilior est Ecclesia aeris
  potestatibus*. Rendered literally, first person kept, no smoothing. Had I bound *nostram*
  to the Church, the page would have said the Church's prelates destroy the Church's faith.
- **1159D–1160A · *dicantur esse verba Ecclesiae, quae annuit Synagogae se laudanti*.**
  *quae* = the Church; *Synagogae … laudanti* = the Synagogue praising **her**. Rendered
  "the Church, who assents to the Synagogue that praises her".
- **1163C–D · *ab ipso mane resurrectionis laboremus, in inspirando, et ego praedicando*.**
  Migne prints no subject for *in inspirando*; the contrastive *ego* implies the Beloved.
  ⚠ **I did not supply "thou".** Rendered "let us labour from that very morning of the
  resurrection, in inspiring, and I in preaching" — the ellipsis is on the page and stays
  there. Named here because a reader may reasonably want the antecedent, and it is the
  Beloved addressed in *Veni, dilecte* eleven lines above.
- **1162D · *quod tales habet doctores … non est tui meriti*.** Migne shifts from third
  person (*habet*) to second (*tui*) inside one sentence, addressee being the Church.
  Both rendered as printed.
- **1165A · *Quia nullis hostium tentamentis a nostrae salutis cura revocari potuit*.**
  ⚠ **Two readings both construe and I did not choose silently.** The unexpressed subject is
  either **the *dilectio* / *aemulatio* of the lemma above** (*fortis est ut mors dilectio*,
  *dura sicut infernus*) or **the Lord**, whose *affectus* the next sentence names
  (*zelantis nos Domini*). I rendered the neutral **"it"**, which carries the first reading
  and does not exclude the second; "he" would have closed the question in the text, which is
  the thing this edition should not do.
- **1164D–1165A · *Gentilibus admirantibus respondet, ille, qui est pax nostra*.** *ille* is
  **Christ** (Eph 2:14, *qui fecit utraque unum*), not the Synagogue; *ipsa erepta est* and
  *mater tua* below are **Judaea** and **the Synagogue** respectively.
- **1165C–D · *O vos ministri … Quid ergo tibi videtur, o Synagoga*.** Pattern 17 in one
  paragraph and in both directions: plural *vos* → **"you ministers and fellow soldiers"**;
  singular *tibi* to one addressee named in the vocative → **"what then seems to thee, O
  Synagogue"**. The same rule gives *thou* throughout 1166D–1168A (*Exigo a te*, *habites*,
  *facias*, *Quandiu vis*, *abesto*, *differ*, *praeceperis*, *Tu quidem*, *fuge*,
  *appareas*), all singular in the Latin.
- **1167A · *quis enim oportet eum, quem diligit, fugere?*** Read as *oportet* used
  **personally**, with *quis* as its subject and *eum quem diligit* as the object of
  *fugere*: "for who ought to flee him whom he loves?" That construes with every printed
  word in its own force and needs no emendation. The rival — impersonal *oportet* with an
  acc.+inf., which would require *cui* for *quis* — **loses because it needs a word the plate
  does not print.** No marker; recorded because the sentence looks defective at first glance
  and a later reader will stop on it.

---

## §5 · NEGATION — tests 2 and 2a, run on the population they name

Every printed negative in the four chunks is in the English and none is in the English that
is not printed. The sites where a quantifier, correlative or pivot stands near the negative —
the population test 2a says to fire on — were proved from structure, not from what reads
well:

- **1158A · *In Ecclesia nec terror suavitatem, nec suavitas terrorem aufert*.** Chiastic
  double *nec*, each on its own subject. English keeps both and keeps the chiasmus.
- **1158B · *Non a desiderio cognoscendi desistas, sed de cognoscendi facultate ne
  praesumas*.** Two separate prohibitions with a `sed` pivot; the first negative is on
  *desistas*, the **second on *praesumas*** — not one negative doing double duty, which is
  the 8987 defect. Both rendered.
- **1158C · *sed non pigeat nos … quod auctorem non piguit …*** Two *non*, two hosts, both
  kept, including the one that makes the sentence self-referential.
- **1158D · *sed non utraeque diadema regni habent*** (1158D–1159A): the negative is on
  ***utraeque***, not on *habent* — "**not both** have the diadem", not "both do not have".
  This is exactly the 8990 `solus` shape and the structure decides it: queens and concubines
  *pariter accedunt, pariter generant*, and the *sed* marks the one thing that is **not**
  shared.
- **1159A · *non alia ante legem, alia sub lege, alia sub gratia: sed in una pace*.** The
  negative governs the whole distributive series, and the `sed` clause (*in una pace, uno
  timore*) proves it. Rendered "not one before the law, another under the law, another under
  grace: but established in one peace".
- **1160C–D · *habebit tamen membra superioribus non imparia*** — negative on *imparia*
  (a litotes), not on *habebit*. "will nevertheless have members **not unequal** to the
  higher."
- **1160C–D · *quia non in otio futura, sed ad certamen processura*** — negative on
  *in otio*, with the `sed` correlative naming the true host.
- **1161A · *hujus crater non est torno factus, quia opus misericordiae … non causa suae
  fragilitatis erigendae ad Deum fecit, sed terrenam mercedem requirit*.** The second *non*
  sits on ***causa … erigendae***, and the `sed` clause (*sed terrenam mercedem requirit*)
  proves it: he did the work, and did it for the wrong reason. Rendering it on *fecit*
  ("did not do the work of mercy") would contradict *quod fecit* three words earlier.
- **1166B · *Quae pax non unam tantum gentem Judaeorum continet, sed habet multos populos …
  non aliquibus hominum meritis, sed sola pace*.** Two `non … sed` pairs, hosts *unam tantum
  gentem* and *aliquibus meritis* respectively; both proved from their own *sed* clause.
  ⚠ The first is the *tantum* shape test 2a names, and English word order was the hazard:
  "contains **not one nation of the Jews only**, but has many peoples" keeps the *tantum*
  inside the negative's scope.
- **1165A · *sicut infernus nullis miserorum cruciatibus mitigatur, nec a severitate suae
  sententiae mutatur*** — *nullis* on *cruciatibus*, *nec* on *mutatur*, both kept.
- **1167A · *Non optando loquitur*** — negative on *optando*, not on *loquitur*: she does
  speak, and what she does not do is wish. The following *sed memor suae conditionis …
  consentit* proves it.

⚠ **Anchors falling inside a word** (the *in [0733B] fructuosos* hazard): checked all 39.
None splits a word. Two split a **construction** and are reproduced split, which is correct:
*sic genae [1158D] tuae* → "so [1158D] thy cheeks"; *Quasi pacem [1166B] reperiens* →
"*As one [1166B] finding peace*". Two more sit inside an italic span and stay inside it:
*ab ubertate domus Dei [1162D] inebriant* and *vocem suam audire [1166D] faciat*.
⚠ For the last of these, English word order forced the anchor to the end of the short span
rather than immediately before the word rendering *faciat*; the span is six words long and I
judged that within tolerance, but it is recorded because 2b says position is unchecked by
machine.

⚠ **The closed-up anchor form is reproduced as printed**: `[1158A]VERS. 3.--` (chunk 0010)
and `[1167A]VERS. 14.--` (chunk 0013) carry no space, exactly as the Latin sets them.

---

## §6 · PUNCTUATION — the band-by-band test, run and closed

Test 3 (compare marks band by band, never by total) was run mechanically over all four
pairs, partitioning both twins by the verified column anchors and counting `:` `;` `?` `!`
`« »` in each band. **First pass returned 27 mismatched bands across the four chunks**
(almost all of them my own semicolons where Migne prints commas, plus five of his colons
softened or moved). All 27 were repaired against the plate. **Final state: zero mismatched
bands in all four chunks**, question marks 0/0/0/5 exactly as printed, guillemets 0/0.

Marks kept as printed, against the English ear:
- **1160D · *quis enim novit quare Deus usque ad illud tempus Judaeos excaecaverit.*** — an
  interrogative clause that Migne closes with a **full stop**. Preserved as a full stop
  ("for who knows why God blinded the Jews until that time."). Pattern 8b was considered and
  does **not** apply: 8b rescues a `?` that English syntax cannot hold, and here there is no
  `?` to rescue. Supplying one would be the defect.
- **1164D–1165A · *Quae est ista?*** twice, and 1165D's two long `?`-closed indirect
  questions (*coepero?*, *possit capax esse virtutum?*): all five marks kept. The two long
  ones are direct in form behind *Quid ergo tibi videtur* and take the mark without
  recasting, so 8b is not needed there either.
- **1166C · *et idem valet *ducenti,* quam si diceret duo millia*** — the comma after
  *ducenti* falls inside the italic span, and the English was reordered ("and it is the same
  with *two hundred,* as if he had said two thousand") so the mark could stay where he
  prints it rather than migrating out of the span.
- **1166C · *Idem est *argentei* et *pacifici:* quia…*** — same problem, same solution: the
  English was put in Latin order ("The same thing is *pieces of silver* and *peaceable ones:*
  because money…") so the colon stays inside the second span.

Em-dashes: none introduced. None marked, none reported.

---

## §7 · CANDIDATES EXAMINED AND REJECTED

1. **The 1167A → 1168A anchor jump** (no B or C band in that column). **Not reported** —
   runbook false positive 1, column-band arithmetic. The text is continuous across it and
   breaks no word or construction.
2. **Pattern 4 `[f:]` inline citation tails.** Not tagged anywhere: this is a
   lemma-and-gloss commentary, runbook false positive 4.
3. **`usque ad` as the abridgment formula** (Addendum D). It occurs **twice** in my range and
   **neither is the formula**: 1160D *usque ad illud tempus* and 1166A *usque ad novissima
   tempora* are both the ordinary preposition with the verse's or the gloss's own words.
   Decided per occurrence, as the addendum requires. No abridgment span in this range.
4. **Harmonizing a lemma to another Song commentary.** Not done anywhere. The site carries
   seven other expositions of these same verses (7871, 10379, 11321, 21413, 10804, 7914,
   9033); I consulted 7914 and the others only as a corpus **control on a word's frequency**
   (the *nepos* check in §1a), never as an authority on a rendering. Locked rule, three cases,
   and case 3 applies to most of this range: printed Latin identical, no gloss depends on it,
   each stands.
5. **`[cj:]` at 1165C (*foedatur*) and 1159A (*baptista*).** Both weighed against Pattern 18's
   bar and both declined; see §3 items 8 and 1 for which reading won and why the rival lost.
6. **`[sic:]` on *Statuta* (1162A), *audivi* (1158D), *sapientiam* (1161A), *foedatur*
   (1165C).** All declined: every one is a real, well-formed word that occupies its slot,
   and Pattern 12 reserves the marker for carried, untranslated type. Rendered as printed,
   logged above.
7. **Migne's `(Isa. LXIV.)` on a 1 Cor 2:9 quotation** (1158D). His attribution, reproduced
   verbatim; convention 4 and runbook practice put the printed reference beyond our reach.
   Not a defect, not corrected, recorded in §1a so a reader is not left thinking we missed it.
8. **`fetibus` for `foetibus`, `fragantiam` for `fragrantiam`.** Pattern 9 orthography, not
   defects.
