# *Glossa ordinaria*, **Actus Apostolorum** (PL 114, cols 0425C–0470A) — cruces

Anselm of Laon and his school, on the Acts of the Apostles. Translated 2026-08-25 by four
translators working in parallel — **0000–0004** (0425C–0437C), **0005–0009** (0437D–0450A),
**0010–0013** (0450B–0459D) and **0014–0017** (0460A–0470A) — and merged here. 18 chunks,
16,287 Latin words. `verify-english.mjs` clean across all 18.

**Apparatus fired, work-wide: 36 `[var:]` · 1 `[sic:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[cn:]`.** The single `[sic:]` is licensed by a plate read (§P). Zero em-dashes,
zero guillemets, notes at exact parity throughout.

⭐ **This is the most familiar narrative in the batch, and that was the stated danger.** Pentecost,
Ananias and Sapphira, Stephen, the Damascus road, the shipwreck — sentences every translator knows
in English before reading them in Latin. **Conformation is the defect this apparatus exists to
catch**, and it is least visible exactly where the text is best known.

---

## §M · THE MERGE

Four translators. **Each later stint read its predecessors off disk and inherited from them**,
and said where: the second changed four of its own renderings to the first's §V table
(*testamentum* → testament, *Divinitas* → Divinity, lower-case *spiritui* → the spirit,
*sermonis* → discourse); the fourth caught **Isaiah → Isaias** in its own draft from the third's
file and repaired it rather than conforming silently. Measured across the finished work: **six
*Isaias*, zero *Isaiah*.**

### ⚖ Non-words: RULED — render for the evident sense, do not carry the Latin

The first two stints **split** on this, and the second flagged the split for a ruling instead of
harmonizing to its peer: one *renders* a non-word for its evident sense, the other *carries* it in
Latin italics. Six sites, and **neither fired a marker, so nothing asserted anything about the plate
either way.**

**Ruled: render for the evident sense.** It is the practice in every other book of this batch, and
it is what test 1 already requires whenever a marker *does* fire — a `[sic:]` must not swallow the
word it marks, so the rendering and the marker are both required. Consistency demands the same when
no marker fires. Applied from the third stint onward and honoured by the fourth (*Sceno factoriae*,
*Tyrrhenc*, *Thelasson* all rendered, all logged, none marked).

### ⚖ *apostolus* — NOT mirrored, and the plate is the reason

The second stint declined to mirror *apostolus*/*Apostolus*, counting **19 lower-case against 11
capitals, alternating for the same referent inside a single sentence** at 0439A and again at
0446D–0447A. **That is right, and it is the same evidence that settled *In Regum*/*In regum* in a
sister book: where Migne's own casing is inconsistent for one referent, it carries no distinction,
and mirroring it would transcribe an accident as a signal.** The mirror rule applies where the case
is **semantic in English**; *Ecclesia* is mirrored throughout this work accordingly.

⭐ And 0443C's *sidus **Dei** vestri* **is** mirrored, deliberately — Migne capitalizes a pagan
star-god **and the gloss then argues from the capital.** The rule working in both directions.

### The *gentes* seam — checked, and both readings are correct

The fourth stint flagged, without harmonizing, that the first renders *omnes gentes* "all nations"
at 0432D while it has "All the Gentiles" elsewhere. **No change: the series rule already decides
this per occurrence** — *gentes* is **the gentiles** where the contrast is with Israel and
**nations** where the sense is simply peoples. At 0432D the words are Act. 3:25's promise to all
peoples; at the *omnia quadrupedia* gloss the whole point is gentiles against Jews. Both right.

### ⭐ A defect class NEARLY MANUFACTURED, and the check that stopped it

The fourth stint filed 0469A's *unde? patet* beside the punctuation class — then **scanned the whole
work and found eight `? [a-z]` sites, six of them Migne's own.** Continuing in lower case after a
mark is his ordinary habit here. **Recorded as a checked non-defect so that nobody spends a plate
read on it.** That is the corpus-as-its-own-control move, used to kill a candidate rather than
confirm one.

---

## §P · THE PLATE READ AT 0435B — three defects in one line, and one of them reversed our assumption

The first stint flagged a **full stop followed by a lower-case word** and **declined to capitalize**,
on the ground that capitalizing would silently repair the plate's typography — while saying plainly
that it would read to a viewer as *our* build defect. **Both instincts were right, and the answer was
neither of the two we expected.**

**The plate prints a COLON.** (On-disk PL 114 scan `patrologiaecurs06saingoog`, page map
re-calibrated against the printed corner numbers before the read: **p. 223 = cols 435/436**.) A colon
before a lower-case word is ordinary — **so the sentence was never Migne's defect. The mark was
ours.**

⭐⭐ **Reading that same line for that answer produced two more**, which is the addendum's rule working
exactly as written — **the normalization class lives in the NEIGHBOURS of the word you came to read:**

- a **second colon** corrupted, this time into a **spaced hyphen**, a mark Migne uses nowhere in the
  book;
- and a **NORMALIZATION**: the plate prints ***Chistus***, missing its r, and our source had tidied it
  to *Christus*. **Our Latin column was printing a word Migne did not print, in a line where he
  visibly slipped.** The class now stands at six, and as always **nobody could have flagged it from
  the file, because a normalized form reads perfectly.**

**All three patched at the TEI** (`data/tei-patches/8976.json`) and re-chunked. The English now
carries **`[sic: Chistus]`** — the work's only one — because a `[sic:]` asserts a plate defect and
**only a plate can license one.**

⚑ **The patch was written early and deliberately HELD until every stint had finished reading
`src/latin/8976`**, since restoring a colon changes token counts and could have shifted a chunk
boundary under a working agent. It did shift one word count; chunk 0003's English frontmatter was
re-synced and the work re-verified.

⚑ **And the first attempt at the patch failed safe, which is worth recording**: the find strings were
written against the *chunked* text, matched zero times, and **`chunk-work.mjs` refused to run rather
than proceed.** The TEI breaks both lines mid-sentence.

⭐ **The fourth stint then predicted a second instance of the class at 0462A–B** (*fuit. ita*, at a
*sicut … ita* hinge, which is exactly where a colon belongs), wrote the patch text, and **did not
patch.** ⬜ Unread and unpatched — see the resume note.

---

## §Q · THE FLAGGED CRUCES, AND THE VALUE OF A CHECKED NEGATIVE

Three cruces were named in the briefs before anyone opened the book. **All three came back as
checked negatives, and that is a result worth as much as a finding:**

- **The apostolic decree (Act. 15:20, 29)** — agrees with the Clementine exactly as Migne prints it.
  ⚑ But the **negative golden rule is in the range**, at 0458A, in the **gloss prose** (*verum ea quae
  vobis fieri non vultis, alii ne faciatis*) — roman, uncited, grammatically the gloss's own sentence.
  No marker: Pattern 14 covers citations. The rival is named and why it lost.
- **Saul / Paul** — checked at every occurrence; Migne prints *Saulum* at 11:25 and *Saulus / Qui et
  Paulus* at 13:9, all agreeing. No inconsistency in the book.
- **Act. 20:28**, the *ecclesiam Dei / Domini* crux, one of the most contested readings in the New
  Testament — **is not glossed at all.** Chapter XX's lemmata run 2·4·7·9·10·16·31·35; Migne skips
  v. 28. Recorded so the question is not reopened.
- **The shipwreck numerals** — a checked zero. Migne clips *ducentae septuaginta sex* out of Act.
  27:37 and reasons from *animae*, not *viri*; every other number in the range checks.
- **Act. 7:14's numbers** — *In animabus* and *In Hebraeo septuaginta tantum* agree with Act. 7:14
  (75) and Gn. 46:27 (70). The range's likeliest numeral defect, and it is not one.

---

## §R · THE DIVERGENCES THAT CARRY THEIR OWN WITNESS

Several of this book's `[var:]` are **self-witnessing** — Migne's own text elsewhere supplies the
control, so the divergence rests on the plate and not only on the Clementine:

- **0452A** — his Act. 10:31 replaces *in conspectu Dei* with *coram Deo*, and **his very next lemma
  is *In conspectu Dei***. The gloss expounds a phrase its own proof-text no longer contains.
- **0455C** — *dispergimini* for *disperdimini* (scattered, not destroyed), glossed *ab Assyriis et
  Chaldaeis, novissime a Romanis* — and **his own line above prints *disperdimini***.
- **0464B** — Mt. 10:9 *Nolite **accipere** aurum* for *possidere*, in a paragraph proving *beatius
  est dare quam **accipere***; **this work prints *possidere* at 0434B**, so both are his.
- **0458B** — lemma *Viduae filius* where Act. 16:1 reads *filius mulieris Judaeae*, and **the gloss's
  first words are *Vel Judaeae***, offering the Clementine's own word as its alternative.
- **0463D** — *Sosipater* for *Sopater*, and **the gloss etymologizes the name** (*salvans dispersos*
  needs the *Sosi-*). Rom. 16:21 checked: it does read *Sosipater*.

**Six misprinted citations** across the four stints, each identified from the **quoted words and never
from the numeral**, all left exactly as printed. ⬜ **Not yet entered in
`data/citation-corrections.json`** — see the resume note.

---

# PART I — chunks 0000–0004, cols 0425C–0437C

# *Glossa ordinaria*, **Actus Apostolorum** (PL 114) — chunks 0000–0004, cols 0425C–0437C

First stint of four. Translated 2026-08-25, one translator, **5 chunks, 4,480 Latin words**
(frontmatter counts: 8 + 1,529 + 1,587 + 653 + 703). `verify-english.mjs` clean over this
range — the only failures it reports are the peers' still-missing 0006–0017. English/Latin
ratio 1.46–1.55 (0000 excepted: an eight-word file).

**Apparatus fired: 6 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
38 `[n:]`** (exact parity with the Latin twins: 0 + 5 + 14 + 9 + 10). Zero guillemets in
either language. Zero em-dashes in the English. One `?` in the Latin (0427D) and one in the
English.

⚠ **This file is `cruces-0000.md`, not `cruces.md`.** Three peers hold 0005–0017; the merge
is the launcher's.

---

## §V · WORK-WIDE VOCABULARY FIXED HERE — later stints should inherit, not re-invent

Fixed at first occurrence and held for all five chunks. Where the pair is held **apart**
deliberately, a later sweep that collapses it would destroy something the plate makes.

| Latin | English | why it is fixed |
|---|---|---|
| *sermo* | **discourse** | the lemma Act 1:1 *Sermonem feci* is glossed *Totus liber Evangelii unus sermo dicitur* and again *Lucas sermones texuit* @0425D, and *completis illis sermonibus* @0427D. "Treatise" (Douay) would leave three re-quotations explaining nothing. |
| *doctor* | **teacher**, never "doctors" | inherited from 8965 §M and 8954 §M. 3 occurrences (0425D, 0435D, 0437A). |
| *praedicator* | **preacher** | held apart from *doctor* (0431A). |
| *charitas* | **charity** · *dilectio*, *amor* | **love** | inherited from 8965 §M. *charitas* 4× (0430A, 0428C, 0437A); *dilexit*/*amavit*/*amore* rendered "love" throughout. |
| *scientia* | **knowledge** · *sapientia* | **wisdom** | inherited. Both stand in this range (0427C *scientiae Patris*, 0427D *in sapientia praecellebant*). |
| *interpretatur* | **is interpreted** | inherited. 6 occurrences, all in the name-etymologies at 0427D, 0429D, 0437B. |
| *Ecclesia* / *ecclesia* | **capitalization mirrors the plate, word for word** | every occurrence in this range is capitalized in the Latin twin and capitalized in the English. There is no lowercase *ecclesia* in cols 0425C–0437C. |
| *Spiritus* / *spiritus* | **mirrors the plate the same way** | Migne prints lowercase *spiritum* at 0430A (*insufflavit Jesus spiritum*) and lowercase *spiritu* at 0427A (*non aqua, sed spiritu*) against capitalized *Spiritus* everywhere else. Both are rendered lowercase. See §3.1 — this is a deliberate mirror, not our slip. |
| *coenaculum* | **upper room** | 5×. The gloss *Coenaculum dicitur tertium tectum* (0428C) is rendered "The upper room is called the third roof". Held apart from *coenobium* (0437A), which stays **coenobium**/**coenobite** because the gloss is an etymology of the Greek κοῖνα. |
| *pascha* | **pasch**, never "Passover" | 0432A, inherited from 8965 §M. |
| *usque ad* (formula) | **as far as** | inherited from 8970/8965. Censused per occurrence — see §4. |
| *clarifico* | **make renowned** · *glorifico* | **glorify** | 0436B–C sets the two against each other in consecutive sentences (*Clarificantur facta vel dicta … Deus autem glorificatur in factis hominum*). Collapsing both to "glorify" erases the contrast the paragraph is built on. The Act 4:21 lemma therefore reads *They made renowned*, not Douay's "glorified". |
| *Divinitas* | **Divinity** · *Deitas* | **Deity** | held apart: both stand in this range (0426C, 0433C · 0431D, 0432B). |
| *testamentum* | **testament** | 0427B *Novi Testamenti*, 0435A–B *Testamenti*, 0432C *sanguine testamenti*. Never "covenant". |
| *virtus* | decided per occurrence | "power" where it renders δύναμις in a scripture context (0427C, 0433B, 0437A) and "virtue" where it is moral (0428C *scientiae et virtutis*, 0434B *iter virtutum*, 0437A *Virtutes quas possident justi*). Both are logged at each site below. |

**Proper names, form for form as Migne prints them** — this is where Acts is most dangerous,
and every one of these is a place the familiar English Bible would have overwritten him:

- **0429D *Barnabae* / *Barnabas*, not Barsabas.** Act 1:23 reads *Joseph, qui vocabatur
  Barsabas*; Migne's gloss says *In laude **Barnabae** immoratur* and *Barnabae laus
  cumulatur … quia cum Paulo gentium apostolus ordinatur*, which is the Barnabas of Act 4:36.
  He has conflated the two men. **Rendered "Barnabas" both times.** Normalizing to Barsabas
  would have silently repaired his conflation and destroyed the evidence for it.
- **0429D *Matthaeus*, not Matthias.** *quia pro laude **Matthaeus** habet, quod sorte
  eligitur* — the man chosen by lot is *Matthias*, named as *Et Matthiam* eleven words later
  in the same paragraph. Migne prints both forms. **Rendered "Matthew" and "Matthias"
  respectively**, so the plate's two forms stay two forms.
- **0429A–B *Jesus* for Josue.** *Moyse defuncto, **Jesus** successit, qui populum in terram
  promissionis induxit* — this is Joshua. Rendered **"Jesus"**, per the 8965 precedent. And at
  0435A Migne sets the two names side by side himself (*Josue de Ephraim, Jesum de Juda Deus
  suscitavit*), which is the control: he knows the difference and uses both.
- **0427D the apostle list in the order Migne gives it as the Greek's** — *Petrus et Andraeas,
  Jacobus et Joannes, Simon Zelotes et Judas Jacobi*, which is **not** the Vulgate order of
  Act 1:13 (*Petrus, et Joannes, Jacobus, et Andreas…*). Rendered in his order.
  *Judas Jacobi* → **"Judas of James"**, not Douay's "Jude the brother of James": nothing in
  the Latin supplies "brother".
- **0428C *Chananaeus* · *Chana*** kept; the gloss is the etymology (*Chana zelus
  interpretatur*). **0427D *Zelotes*** kept untranslated as the name.
- **0437B *Barjona*** kept.
- **0434A *Joathan filius Oziae*** → "Joathan the son of Ozias" (Migne's Vulgate forms).
- ⚑ **0427D *Andraeas*** is the one name I did NOT keep form for form: it is *Andreas* with
  the ordinary medieval *ae*-for-*e*, the same class as *coelum* for *caelum* and *tanquam*
  for *tamquam*, which stand all over this range. Pattern 9 governs (attested medieval
  orthography, translate normally) and the English is **Andrew**. The Latin spelling is
  recorded here so the decision is visible.
- ⚑ ***Hierosolyma* / *Hierosolymorum* (0427D, 0428C, 0429C) and *Jerusalem*** are both
  rendered **Jerusalem**. English has no exponent for the two Latin name-forms (Pattern 9
  family). Recorded as a class rather than site by site.
- **0427D *Galilaei*** → **Galilaeans**, holding Migne's *ae*.

**Second person (Pattern 17).** 21 archaic second-person tokens in this range (*thou* 4 ·
*thee* 2 · *thy* 6 · *art* 2 · *hast* 5 · *wilt* 1 · *shalt* 1), every one fixed by the
Latin's own morphology and not by who is addressed: 0425C *si **tu sis** amicus Dei, **tibi** scribitur* → "if **thou** art a
friend of God, it is written for **thee**"; 0432D *Non derelinques* · *Notas mihi fecisti* ·
*Replebis me* (2nd sing. futures of Ps 15); 0433C *Sede a dextris*; 0435B *In semine tuo*;
0436D *Unxisti* and Ps 44:8 *Unxit **te** Deus Deus **tuus** … prae consortibus **tuis***.
Every plural stays **you** — 0427A *Vos autem* · *vos baptizabimini*, 0427B–C *Non est
vestrum nosse*, 0427C *non potestis*, 0430B *Sedete hic in civitate*, 0436B *Qui estis
judices, vestrum facite officium*.

---

## §1 · THE LEMMA COLLATION — every italic span in cols 0425C–0437C, walked

The launch brief's rule: **render what MIGNE prints, never what the Vulgate, the Douay or
the AV prints.** Every span in `data/briefs/8976-lemmata.txt` for these bands was read word
by word against `sources/vulgate/clementine-flat.txt`; the verse it actually glosses was
fetched, not the pre-scan's "occurs somewhere" mark. **The agreements are listed as well as
the divergences**, because a list of findings alone cannot be told from a report by an agent
that never looked.

### 1.1 · FIVE `[var:]` FIRED — the divergences that change what the proof-text says

| col | Migne prints | Clementine (verse fetched) | marker |
|---|---|---|---|
| 0425D | *Cum benedixisset, recessit ab eis et ferebatur in coelum* | **Lc 24:51** *Et factum est, **dum benediceret illis**, recessit ab eis, et ferebatur in caelum* | `[var: Vulg. Luc. 24:51 *dum benediceret illis*, "while he was blessing them"]` |
| 0430C | *Non vos relinquam orphanos, **sed mittam Spiritum paracletum*** | **Jo 14:18** *Non relinquam vos orphanos : **veniam ad vos**.* | `[var: Vulg. Jo. 14:18 …]` |
| 0431C | *Non est masculus et femina, **circumcisio et praeputium, Barbarus et Scytha, servus et liber***, cited `[n: (Gal. III)]` | **Gal 3:28** *Non est Judaeus, neque Graecus : non est servus, neque liber : non est masculus, neque femina.* The three clauses in bold are **Col 3:11** *circumcisio et praeputium, Barbarus et Scytha, servus et liber* | `[var: Vulg. Gal. 3:28 reads … the clauses on circumcision and on the Barbarian and the Scythian belong to Col. 3:11, not to Galatians]` |
| 0432C | *In sanguine testamenti **eduxisti** vinctos tuos de lacu*, cited `[n: (Zach. V)]` | **Zach 9:11** *Tu quoque in sanguine testamenti **tui emisisti** vinctos tuos de lacu* | `[var: Vulg. Zach. 9:11 *in sanguine testamenti tui emisisti vinctos tuos*, "thou hast sent forth"]` |
| 0435B | the abridgment tail *in semine tuo benedicentur omnes **gentes*** | **Act 3:25** *Et in semine tuo benedicentur omnes **familiae terrae**.* | `[var: Vulg. Act. 3:25 *in semine tuo benedicentur omnes familiae terrae*, "all the kindreds of the earth"]` |
| 0436C | *Facta est mihi haereditas mea quasi leo in sylva: dedit **super me** vocem*, cited `[n: (Jer. XII)]` | **Jr 12:8** *… quasi leo in silva : dedit **contra me** vocem, ideo odivi eam.* | `[var: Vulg. Jer. 12:8 *dedit contra me vocem*, "gave her voice against me"]` |

⭐ **0435B is the sharpest of the six, and it is self-witnessing.** Migne's Beda abridgment
ends *in semine tuo benedicentur omnes **gentes***, and then, twelve lines later at 0435C, he
prints as his own next lemma ***Omnes familiae***, which is the Clementine's word. The English
must carry both: "in thy seed shall all **nations** be blessed" in the tail, "**All
families**" as the lemma. Conforming either to the other would have made the second lemma
gloss a phrase that is not above it.

**Six divergences, six markers** — 0425D, 0430C, 0431C, 0432C, 0435B, 0436C. Distributed
0001 ×1 · 0002 ×3 · 0003 ×1 · 0004 ×1. The Gal 3:28 / Col 3:11 conflation is a single
`[var:]` because it is a single quotation.

### 1.2 · DIVERGENCES RAISED AND **NO** MARKER FIRED — with the reason each declined

Every one of these is real and checked; none changes what the sentence asserts, and a
`[var:]` is a public claim, so the crux is the right home (ship test B).

- **0427A · *Vos vero baptizabimini Spiritu sancto*** — Act 1:5 reads *vos **autem**
  baptizabimini*. A particle swap with no sense change, and Migne prints his own *Vos autem*
  as the lemma four words earlier, so both forms are already on the page.
- **0427A · *Quia Joannes baptizavit aqua*** (inside the Beda abridgment) — Act 1:5 reads
  *quia Joannes **quidem** baptizavit aqua*. A clip, not a variant.
- **0427C · *sed accipietis virtutem Spiritus sancti*** — Act 1:8 reads *virtutem
  **supervenientis** Spiritus Sancti in vos*. Migne prints *Supervenientis Spiritus sancti*
  as its own lemma in the very next paragraph; this is his own abbreviated re-quotation.
- **0427D · *Cum haec dixisset, elevatus est*** — Act 1:9 reads *Et cum haec dixisset,
  **videntibus illis**, elevatus est*. A clip in a sentence whose whole point is the two
  evangelists' wording, and Migne's own lemma *Et cum haec dixisset* stands unclipped above.
- **0427D · *Galilaei, quid statis…*** — Act 1:11 reads *Viri Galilaei*. A clipped lemma
  opening at the second word (convention 3), not a divergence.
- **0430B · *Sedete hic in civitate*** — Lc 24:49 reads *vos autem sedete in civitate*, with
  no ***hic***. An added deictic; the gloss (*Sessio est indicium humilitatis*) turns on
  *sedete*, not on *hic*, so nothing hangs on it. **Raised, not marked.**
- **0434B · *Nolite possidere aurum et argentum*** — Mt 10:9 reads *aurum, **neque**
  argentum*. Copulative for disjunctive inside a negative; no sense change.
- **0435B · *A Samuele et deinceps*** — Act 3:24 reads *a **Samuel** et deinceps*. Migne
  declines the indeclinable. A form, not a reading.
- **0432D · *Et exsultavit lingua*** and **0433C · *Sede a dextris*** and **0435C · *Venite,
  benedicti Patris*** — each drops a possessive the Clementine prints (*lingua **mea***,
  *dextris **meis***, *Patris **mei***), and each is followed in Migne by *etc.* or stands as
  a clipped lemma. Rendered without the possessive, exactly as printed. **This is the class
  most likely to be quietly "restored" by a later reader; it should not be.**

### 1.3 · THREE READINGS MIGNE HIMSELF ATTRIBUTES TO THE GREEK — no marker, by construction

Pattern 14 is for a quotation that *diverges without saying so*. These three announce the
divergence in their own words, so a `[var:]` would tell the reader twice and blur whose
observation it was (the same logic as Migne's own `( sic )`):

- **0427D** *In Graeco ita ponitur: Cum introissent **civitatem**, in coenaculum ascenderunt,
  ubi erant manentes Petrus* — against Act 1:13 *Et cum introissent **in coenaculum**,
  ascenderunt ubi manebant Petrus*. He is reporting the Greek's order, and the order is the
  point of the note.
- **0432B** *In Graeco sic est: Praescientia sic traditum accipientes* — no Clementine
  counterpart; it is a rendering of Act 2:23's Greek participles.
- **0436C** *In Graeco: Per nomen **pueri** tui Jesu* — Act 4:30 reads *per nomen **sancti
  filii** tui Jesu*. Rendered "**thy child** Jesus" (παῖς), which is the whole reason Migne
  cites it: *quod magis apostolorum votis congruit*.

Also in this class, and also unmarked: **0436B** *In Graeco: Omnes clarificabant in eo, quod
factum est: **et non habetur in eo quod acciderat*** — Migne noting that the Greek lacks the
Vulgate's closing phrase. The English sets that phrase in our own `" "` (Pattern 6) because
it is being **mentioned**, not used: *and "in that which had befallen" is not had.*

### 1.4 · THE LEMMATA CHECKED AND FOUND TO **AGREE WITH THE CLEMENTINE EXACTLY**

Named, because a divergence list without its negatives is not a report. Each was fetched at
its own verse, not matched "somewhere in the Clementine".

**Act 1 (chunk 0001):** *Sermonem feci* · *De omnibus* · *Theophile* · *Quae coepit Jesus
facere* · *usque in diem* · *Praecipiens apostolis* · *per Spiritum sanctum* · *Elegit* ·
*Assumptus* · *Vivum* · *Per dies* · *Convescens* · *Promissionem* · *Patris* · *Quia
Joannes* · *Vos autem* · *Non est vestrum nosse* · *non est* · *Quae Pater* · *In sua
potestate* · *Sed accipietis* · *Supervenientis Spiritus sancti* · *In Jerusalem et in omni
Judaea* · *In Jerusalem* · *Et cum haec dixisset* · *Tunc reversi sunt* · *Et cum introissent*
· *Petrus et Joannes* · *Zelotes* · *Maria* · *In medio fratrum* (Act 1:**15**, glossed under
Migne's `VERS. 14` — see §2.1) · *Possedit agrum* · *possedit* · *Viscera* · *Eorum* ·
*Deserta, et non sit* · *Duos* · *Qui cognominatus* · *Justus*. Also the inline **Jo 3:5**
*Nisi quis renatus fuerit ex aqua et Spiritu sancto* (verbatim to the clip) and **Mc 16:19**
*Et Dominus quidem Jesus postquam locutus est eis, assumptus est in coelum* (verbatim; the
`[n:]` misattributes it — §2.2).

**Act 2 (chunks 0002–0003):** *In eodem loco* · *De coelo* · *Sonus* · *Spiritus* ·
*Vehementis* · *Totam domum* · *Sedentes* · *Dispertitae* · *Tanquam ignis* · *Et coeperunt* ·
*Variis linguis* · *Ex omni natione* · *Confusa* · *Unusquisque* · *Audivimus* · *Cappadociam*
· *Advenae Romani* · *Viri Judaei* · *Effundam* · *De Spiritu* · *Super omnem carnem* · *Et
prophetabunt filii* · *Et prophetabunt* · *Et dabo* · *Prodigia in coelo* · *Sanguinem* ·
*Vaporem fumi* · *Sol convertetur* · *Definito consilio* · *Et praescientia Dei* ·
*Suscitavit* · *Solutis doloribus* · *Providebam Dominum* · *Ne commovear* · *Non derelinques*
· *Notas mihi fecisti* · *Replebis me* · *Quoniam a dextris* · *Et exsultavit* · *In inferno* ·
*Promissione Spiritus sancti accepta* · *Effundam* · *Effudit hunc* · *Sede a dextris* ·
*Dominum eum* · *Et Christum* · *Jesum quem* · *Compuncti* · *In nomine* · *Et omnibus* ·
*Testificatus est* · *Salvamini* · *A generatione*. Also inline **Jo 20:22–23** *Accipite
Spiritum sanctum; quorum remiseritis peccata, remittuntur eis* · **Ps 108:6** *Et diabolus
stet a dextris ejus* · **Mt 26:38** *Tristis est anima mea usque ad mortem* · **Act 2:21**
*Omnis quicunque invocaverit nomen Domini salvus erit* — all four **verbatim**.

**Act 3 (chunk 0003):** *Portam templi* · *Argentum* · *Et exsiliens stetit* · *Stupore et
exstasi* · *Cucurrit* · *Deus Abraham* · *Interfecistis* · *Integram sanitatem* · *Per
ignorantiam* · *Per os omnium* · *Ut deleantur peccata* · *Ut cum venerint* · *ut cum venerint
tempora refrigerii a conspectu Domini* (verbatim, in full) · *Quem oportet* · *Moyses quidem* ·
*Quoniam prophetam* · *De fratribus vestris* · *Exterminabitur de plebe* · *Testamenti* ·
*Patres* · *patres* · *patrem* · *In semine tuo* · *Omnes familiae* · *Benedicentur*. Also
inline **Jo 1:9** *Illuminat omnem hominem venientem in hunc mundum* — verbatim.

**Act 4 (chunk 0004):** *Sacerdotes et magistratus* · *Sadducaei* · *Dolentes* ·
*Resurrectionem* · *Et factus est* · *Hic est lapis* · *Reprobatus* · *Sine litteris* ·
*Idiotae* · *Petrus vero* · *Non enim possumus* · *Clarificabant* · *Annorum enim* ·
*Unanimiter* · *Fremuerunt gentes* · *Meditati sunt inania* · *Convenerunt* · *Unxisti* · *Cum
omni fiducia* · *Per nomen* · *Motus est locus* · *Erat cor unum* · *Nec quisquam eorum* ·
*Communia* · *Reddebant apostoli* · *Joseph* · *filius consolationis* · *Quod est
interpretatum* · *Filius consolationis*. Also inline **1Cor 1:17** *Non in sapientia verbi, ut
non evacuetur crux Christi* · **Ps 44:8** *Unxit te Deus Deus tuus oleo laetitiae prae
consortibus tuis* · **Mt 5:16** *Videant opera vestra bona, et glorificent Patrem vestrum, qui
in coelis est* — all three verbatim (the third clipped of its opening *ut*).

### 1.5 · UNMARKED SCRIPTURE THE GLOSS QUOTES WITHOUT ITALICS — checked, all loose, none marked

Migne sets these in roman, so they are not lemmata and Pattern 14 does not reach them; they
are recorded because a later reader will meet them and wonder.

- **0431A** *In aliis linguis, et labiis aliis, loquar populo huic*, attributed *secundum
  illud Prophetae*. It is **1Cor 14:21**'s form of Is 28:11, not Isaiah's own words
  (*In loquela enim labii, et lingua altera loquetur ad populum istum*). Rendered as printed.
- **0434C** *Qui occiderit hominem volens, et ipse occidetur*, attributed to the law. A loose
  memory of **Lv 24:17** (*Qui percusserit, et occiderit hominem, morte moriatur*).
- **0436C** *Si duo vel tres convenerint in unum in nomine meo, de omni re quam petierint,
  fiet illis* — a conflation of **Mt 18:19** and **18:20**. Rendered as printed.
- **0428D** *duodecim fontes deserti, quos Israel reperit in Elim* agrees with **Ex 15:27**.

---

## §2 · MIGNE'S OWN PRINTING, REPRODUCED AND NOT TIDIED

### 2.1 · Verse numbers that do not match the verse glossed — HIS, reproduced as printed

- **0427D · `VERS. 14.-- *Maria,* etc.`** The chapter's *Maria* is Act 1:14 and agrees. But
  the same paragraph's second lemma ***In medio fratrum*** is **Act 1:15**, and so is the
  *centum et viginti* the gloss goes on to expound at 0429A. Mid-gloss second lemmata are not
  addressed by their own `VERS.`, so this is not strictly a mis-numbering; recorded so the
  merge does not read it as one.
- **0429D · `VERS. 23.`** covers *Duos*, *Qui cognominatus*, *Justus* and *Et Matthiam*, all
  of Act 1:23 — correct.
- **0433C · `VERS. 34.-- *Sede a dextris.*`** Act 2:34 is *Dixit Dominus Domino meo: Sede a
  dextris meis*; correct, clipped.
- **No out-of-sequence verse address anywhere in cols 0425C–0437C.** VERS. 1, 2, 3, 4, 5, 7,
  8, 9, 11, 12, 13, 14, 18, 19, 20, 23 (ch. I) · 1, 2, 3, 4, 5, 6, 8, 9, 10, 14, 17, 19, 23,
  24, 25, 26, 27, 28, 33, 34, 36, 37, 38, 39, 40 (ch. II) · 2, 6, 8, 10, 13, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 25 (ch. III) · 1, 2, 4, 11, 13, 19, 20, 21, 22, 24, 25, 26, 27, 29, 30,
  31, 32, 33, 36 (ch. IV). Every one ascending. **A checked negative.**

### 2.2 · 0427D · *(Matth. XXVIII)* on a quotation of **Mark 16:19** — HIS, and it is inside `[n:]`

The words *Et Dominus quidem Jesus postquam locutus est eis, assumptus est in coelum* are
Mc 16:19 **verbatim**, and Migne's own sentence introduces them *Aliter **Marcus**
commemorat dicens*. The note nevertheless reads `[n: (Matth. XXVIII)]`. **Notes pass through
verbatim**, so it stands as printed. The right home for the repair is
`data/citation-corrections.json` (`refDisplay` verbatim, `refKey` → `Mark.16.19`); no `Ibid.`
depends on it. **Not raised as a plate candidate** — 8965's *(Rabac. III)* precedent shows
an abbreviated book-name in a note is exactly the class where the plate has gone Migne's way.

### 2.3 · 0432C · *(Zach. V)* for **Zach 9:11** — same class, same treatment

The words are Zach 9:11 (with the divergence marked at §1.1). The chapter numeral is Migne's.
Left as printed; referred to `citation-corrections.json`.

### 2.4 · 0435B · **A LOWERCASE SENTENCE-OPENING, MIRRORED — the sharpest plate candidate here**

`…de spirituali exterminantur. **utramque** inobedientiam mors sequitur sive carnalis sive
spiritualis.` A full stop followed by a lowercase word. The English mirrors it:
"…are exterminated from the spiritual. **death** follows either disobedience…".

⚠ **Mirroring is deliberate and I want it re-examined at the merge.** Capitalizing it would
be a silent repair of the plate's typography (Pattern 8's channel), and there is no marker
that reaches it: nothing is carried type, so `[sic:]` cannot wrap it, and it is not our
source's loss, so `[ed:]` cannot either. But it will read to a reader as *our* build defect,
which is the one thing the marker conventions exist to prevent. **This is the cheapest plate
read in the stint**: one crop of PL 114 col. 0435 band B settles whether Migne prints
*Utramque* (then it is our digitization, and a `data/tei-patches/8976.json` fix) or *utramque*
(then the mirror is right and the cruces line is the whole apparatus). ⛔ It is the **only**
`. [a-z]` in all eighteen chunks of this work except one at 0015, so it is not a corpus habit.

### 2.5 · 0435B · a bare hyphen in the Latin — reproduced

`Semen Abrahae Christus est **-** in fide cujus omnibus familiis…` Migne prints no em-dashes
anywhere in the Latin corpus, and this is not one; it is a spaced hyphen. Reproduced in the
English exactly (`The seed of Abraham is Christ - in whose faith…`), on Pattern 8's
never-delete rule. Also worth one look at the same crop as §2.4, since the two sit two lines
apart in the same column band.

### 2.6 · 0437B · a doubled period after a marker — reproduced

`*Filius consolationis. [n: (RAB.)]*.` — the period inside the italic run and a second one
after the note. Carried verbatim.

---

## §3 · PLATE CANDIDATES — RAISED, NEVER PATCHED, **NO MARKER FIRED**

Per the 2026-08-23 addendum: a **non-word** is worth raising and has been our digitization's
error ten times out of ten; a **real, well-formed word that reads oddly is MIGNE'S** until a
plate says otherwise, refuted five times out of five. **Nothing in this section carries a
marker, so the five chunks assert nothing about the plate.**

### 3.1 · Two NON-WORDS, both rendered for their evident sense

| col | printed | read as | why the reconstruction is safe |
|---|---|---|---|
| 0431C | *non autem ad **subtsantiae** imminutionem* | *substantiae*, "of the substance" | *subtsantia* is no Latin word; *ts* for *st* is the ordinary metathesis shape, and the sentence contrasts the *diversa dona* with the undiminished substance of the Spirit. Rendered "**a diminution of the substance**". |
| 0436A | *cui, veluti patriarchae suo, prae caeteris **crediderent*** | *crederent* or *crediderant* | *crediderent* is no form of *credo* (imperf. subj. *crederent*, plupf. *crediderant*, perf. subj. *crediderint*). Rendered "**they believed** before all others" — the tense that stands either way. |

⚠ Both are single-letter-class faults in well-formed neighbourhoods, and **neither is
patchable from the file**: a `tei-patch` needs the plate. The English is readable without one.

### 3.2 · Real words that read oddly — **DECLINED as Migne's**, with the argument that lost

Recorded because the addendum's finding is that the *argument* loses, not that raising it was
wrong.

- **0428B · *conversationem activalem*.** *activalis* is not classical, but it is a
  well-formed medieval adjective and the sentence needs exactly it (*de activa in
  contemplativam ascendens, iterum descendit in conversationem activalem*). Rendered "the
  active manner of life". No marker, no conjecture.
- **0429D · *Merito parvi transcenditur ille laude hominum qui justus erat, inquit Arator*.**
  Every word is real; the sentence construes (*parvi* genitive of value) and yet it asserts
  something odd — that the man who **was** just is *deservedly* passed over. Rendered
  literally: "**Deservedly is he passed over at small worth in the praise of men, who was
  just, says Arator.**" ⛔ I considered a `[cj:]` on *Merito* and **declined it**: Pattern 18's
  bar is a false assertion produced by a *word*, and the word here is not the trouble — Arator
  is being quoted, in verse, out of its own context, and the abridgment has taken whatever
  qualified it. Naming the rival: the reading that loses is *immerito*, which nothing on the
  page supports and which would be our invention rather than a conjecture on his type.
- **0437B · *Auctus Barnabas filius consolationis interpretatur, **actus** incremento et
  profectu spiritualis boni*.** *actus* (from *ago*, "driven") is a real participle and takes
  a plain ablative of means; rendered "**being driven by** the increase and the advance of
  spiritual good". The rival, *auctus* repeated from the sentence's own first word, **loses**
  because it would make the clause say twice what it already said and would leave *Auctus*
  at the head unexplained. Declined.
- **0437A · *Nam multitudo credentium … copula charitatis invicem **jungebantur***.** Plural
  verb on a singular collective subject. English carries a collective plural idiomatically
  ("the multitude … were joined"), so there is no exponent for the disagreement and Pattern 9
  governs. No marker, no crux beyond this line.

### 3.3 · ⭐ THE SUSPICIOUSLY TIDY FORMS — a checked list, and it came back empty

Brief §4 and addendum §C: the digitization silently *corrects* as well as corrupts, and the
only handle is a form that reads too tidy in a rough neighbourhood. I read the whole lines
around both §3.1 sites and around every `[n:]` in the range, and found **nothing** of that
shape. **Recorded as a negative**, because the class is only credible when the zeros are
reported too. The one place I would still ask a reader with the plate to glance is 0430D's
two four-verb catalogues (*Spiritus purgat, illuminat, accendit, urit* / *urit, purgat,
calefacit, illuminat*), where the second reorders the first — but that reordering is the
gloss's own rhetorical point (fire's four natures matched to the Spirit's four works) and
reads as deliberate, not as damage.

---

## §4 · `usque ad` CENSUSED PER OCCURRENCE — 11 tokens, **8 formula, 3 not**

Decided from what stands on either side, never by rule (addendum §D).

**The abridgment formula (8), rendered *as far as*:** 0427A (Beda, *usque ad* quod in
baptismo Joannis non fiebat) · 0430C (Greg.) · 0431B (Beda) · 0433C (Rab.) · 0434A (Beda,
Porta Speciosa) · 0434C (Beda, Cucurrit) · 0434C (Rab., Deus Abraham) · 0435B (Beda,
Testamenti — printed with a comma, ***usque ad,*** *in semine tuo…*).

**NOT the formula (3), and each is a trap the formula reading would have swallowed:**

1. **0425D · *usque in diem*** — Act 1:2's own words, italicized *as a lemma*. Rendered
   "*until the day*".
2. **0431C · *Lex et prophetae usque ad Joannem*** — Lc 16:16's own words, in roman, an
   ordinary prepositional phrase. Rendered "The law and the prophets **until** John".
3. **0432D · *Tristis est anima mea usque ad mortem*** — **Mt 26:38 verbatim**, inside an
   italic scripture run with its own `[n: (Matth. XXVI)]`. Rendered "**even unto death**".
   ⚑ This is the exact shape of the trap 8969 hit at Sap 8:1 and 8954 hit at *A labio usque
   ad labium*: an abridgment formula sitting inside a verse whose own words are *usque ad*.

⛔ **No verb was ever supplied to complete a formula's host sentence.** 0433C is the case:
Migne prints *Manifeste Petrus ex hoc psalmo regnum Christi non terrenum, sed coeleste, etc.,
usque ad…* with **no finite verb at all**, because the abridgment cut it. The English stops
where he stops: "Manifestly Peter, from this psalm, the kingdom of Christ not earthly, but
heavenly, etc." It reads abrupt because the plate is abrupt (the 8970/L4 rule).

---

## §5 · THE UNEXPRESSED SUBJECT — every supplied pronoun, named

The measured dominant defect class. Each site below is a "he/she/it/they" the Latin does not
print. Where two readings both construe I say so rather than choosing silently.

- **0425D · *Bonum doctorem instituit vel instruit, qui faciat quod docet.*** → "**He**
  appoints or instructs a good teacher, one who does what he teaches." ⚠ **The subject is
  genuinely open.** The paragraph is glossing *facere* in *quae coepit Jesus **facere** et
  docere*, so the two readings are (a) **Christ**, who by doing before teaching forms the good
  teacher, and (b) **Luke/the evangelist**, who by writing *facere* first instructs him. The
  gloss's own preceding clause is about Luke (*Lucas sermones texuit*), the lemma is about
  Jesus. Both construe; **I supplied a bare "he", which carries both**, and did not resolve it.
- **0426C · *propter Spiritum praecepit*** → "**he** gave the commandment on account of the
  Spirit" — Christ, from *Praecipiens apostolis* in the lemma above.
- **0426C · *Elegit. Hoc ad laudem apostolorum, quorum actus scribere proponit*** → "whose
  acts **he** purposes to write" — **Luke**, not Christ: the acts written are the book's, and
  Act 1:1 has just named Luke the writer.
- **0426C · *eo quod post mortem vivebat*** → "in that after death **he** was living" —
  Christ, from *Vivum* (Act 1:3 *praebuit seipsum vivum*).
- **0427D · *completis illis sermonibus quos commemoraverat Dominum ascendisse coelos
  ostendit*** → "**he** shows that … the Lord ascended" — **Luke**, named as the subject of
  *adjecit* in the same sentence.
- **0428C · *Hic post Jacobum fratrem suum, rexit Ecclesiam Hierosolymorum*** → "**He**,
  after James his brother, ruled the Church of Jerusalem" — Simon Zelotes, the lemma.
- **0429A · *Filio pereunte perditionis*** → "The son of perdition perishing" — no pronoun
  supplied; the genitive is displaced in Migne's word order and rendered where it stands.
- **0429C · *qui traditionis crimen in se protinus mulctavit*** → "**who** forthwith punished
  in himself the crime of the betrayal" — Judas, named two sentences above.
- **0429D · *In laude Barnabae immoratur*** → "**He** lingers in the praise of Barnabas" —
  **Luke** again (the narrator of Act 1:23), not Peter: Peter's speech ends at v. 22.
- **0432D · *Non iterum movear*** → "Let **me** not again be moved" — the psalmist's voice,
  which Migne has just named (*Vox Christi post resurrectionem exsultantis*). First person,
  not third; the whole 0432C–D sequence is Christ speaking, and the English keeps it so.
- **0433B · *Qui prius Jesum suscitatum a Deo dixit*** → "**He** who before said" — Peter,
  from the sermon the chapter is glossing.
- **0435A · *ut sicut ille … introduxit, ita et Jesus … duxit*** → "as **he** brought the
  carnal Israel … so also Jesus" — *ille* is **Moses**, fixed by *in similitudine Moysi* six
  words earlier.
- **0436C · *quod magis apostolorum votis congruit*** → "**which** agrees better" — the
  Greek reading, not a person.
- **0437C · *quia dignus habitus est qui pro Juda consolaretur apostolos*** → "because **he**
  was held worthy to console the apostles in Judas' stead" — Barnabas, the lemma.

---

## §6 · SENTENCES THAT DO NOT CONSTRUE CLEANLY — rendered as printed, resolved nowhere

- **0427A · *Quando Petrus negavit, non erant apostoli baptizati; non aqua, sed spiritu.***
  Rendered "When Peter denied, the apostles were not baptized; not with water, but with the
  spirit." ⚠ As printed it is self-contradictory: the first clause denies they were baptized,
  the second says with what they were. **Both negatives are carried on their printed hosts**
  (*erant baptizati* and *aqua*), per 7a, and the contradiction stands on the page. The
  neighbouring sentences (*post resurrectionem enim dictum est: Vos vero baptizabimini*)
  suggest the sense is "not yet with water, but [afterwards] with the Spirit", but that is a
  reading, not a repair, and it is not in the text.
- **0427D · *et in his qui se in alienos fecerint a terra praedicaturos eos praedixit, per
  quos quasi rotae radios de medio terrae ubi salutem operatus est…*** Rendered "and he
  foretold that they would preach among those who shall have made themselves strangers from
  the earth, through whom, as through the spokes of a wheel, from the middle of the earth
  where he wrought salvation, spiritual grace and saving doctrine flowed out through the whole
  world." The *quasi rotae radios* is an accusative with no verb governing it in the printed
  sentence; rendered as an appositive comparison, which is as close as the printed words
  allow. **Logged, not repaired.**
- **0428C · *Primus (si fas est dici) plus caeteris dilexit: alium, plurimum Jesus amavit.***
  Rendered "The first (if it is right to say it) loved more than the rest: the other, Jesus
  loved most." *alium* is accusative and takes *amavit*; the asyndeton is Migne's. The
  parenthesis count is 1:1 with the Latin.
- **0434D · *cum virtute resurrectionis mors destruetur novissima*** → "when by the power of
  the resurrection death shall be destroyed last." *novissima* agrees with *mors* and echoes
  1Cor 15:26 (*novissima … inimica destruetur mors*). The rival reading, "the last death
  shall be destroyed", **loses** because the paragraph is about when sins are fully blotted
  out, i.e. about the order of destruction, not about a second death.

---

## §7 · THE TESTS, RUN ON THESE FIVE FILES

**Test 1 — a `[sic:]` must not swallow the word it marks.** **Vacuously clean: zero `[sic:]`
in the range.** The English was nevertheless read once with all markers stripped; no stranded
article or preposition, no doubled mark, every sentence readable aloud.

**Test 2 + 2a — each printed negative named to its single Latin host.** **91 negative
particles** in the four prose chunks (0001 ×34 · 0002 ×31 · 0003 ×10 · 0004 ×16, counting
*non · nec · neque · nisi · nullus · ne · nondum*), extracted mechanically with context and
then **each one located in the English and checked to be ON its host** — not merely present.
The 2a trigger population (a negative resting on a verb with a quantifier, correlative or
predicate nearby) fired **eight times**, and each host was proved from the sentence's own
structure, never from what reads well:

| col | Latin | the host, proved from | English |
|---|---|---|---|
| 0426C | *non uno corporis sensu, **sed** visu, auditu…* | the `sed` answers *uno* with a list of senses | "**not by one** sense of the body, but by sight…" |
| 0427D | *non **solum** Hierosolymam, **sed** omnes fines* | `non solum … sed` | "not only Jerusalem, but all the borders" |
| 0431B | *non **solum** diversitatem eos docuit, **sed etiam** … fecit* | two verbs, the correlative spans both | "not only taught them the diversity, but also made…" |
| 0431C | *non ut olim prophetis et sacerdotibus **tantum**, **sed** omnibus passim* | `tantum` is the host; `sed omnibus` answers it | "not, as of old, to prophets and priests **only**, but to all persons everywhere" |
| 0432A | *ut non **solum** Hierosolymis locus esset orationis, **sed** in omni loco* | `non solum … sed` | "not only at Jerusalem … but … in every place" |
| 0436A | *Non quia litteras **omnino** nescirent, **sed** quia … non haberent* | the `sed quia` shows the `non` governs the whole first *quia*-clause, **not** *omnino* | "These things were said **not because** they were wholly ignorant of letters, but because…" |
| 0432D | *Non solum haec de illo intelliguntur … **sed et** de justis* | `Non solum … sed et` | "Not only are these things understood of him … but also of the just" |
| 0431D | *Non **solum** vulneris, **sed etiam** sudoris* | `non solum … sed etiam`, both genitives depending on *Sanguinem* | "Not only of the wound, but also of the sweat" |

⚑ 0436A is the one that could have gone the 8990 way: *omnino* sits adjacent to the verb
*nescirent* and would have produced the plausible-but-wrong "because they were not wholly
ignorant of letters". The `sed quia` correlative is what settles it, and it is structure, not
sense.

**Test 2b — every anchor against the WORD it stands beside.** All **46** anchors in the range
(15 + 16 + 7 + 8) were printed with 45 characters of Latin context and the matching English
context and compared one by one. **Zero displaced.** Six are deliberate mid-construction
splits, matching Migne's: 0426C (*Spiritus | sanctus* → "the Holy | Spirit"), 0429C
(*non | valuerunt* → "were not | able"), 0429A (*numerus | apostolorum* → "the number | of
the apostles"), 0427D (*non regnum | Israel* → "the kingdom | of Israel"), 0430B (*soli Petro
| prius* → "to Peter alone | beforehand"), 0433D (*Spiritu | sancto* → "the Holy | Spirit").

**Test 3 — punctuation compared BY COLUMN BAND, never by total.** A band-partitioning script
compared colons, semicolons, question marks, guillemets and parentheses across all 46
anchor-delimited bands, plus asterisk counts, `[n:]` counts and paragraph counts.
**First pass returned 2 mismatched bands, both mine, both supplied semicolons** — exactly the
class the brief names:
- **0427D** — I had written "…the power of bearing witness of me**;** and the time…" where
  Migne prints a comma (*praestabit, tantumque*). Repaired to a comma.
- **0430C** — I had written "in pride, dispersion**;** in humility, concord is made" where
  Migne prints *in superbia dispersio, in humilitate fit concordia* with one comma. Repaired.

Two further supplied semicolons were caught during drafting, before the script ran, and both
were the same reflex: 0432B (*eligerent, sed latroni concessa vita*) and 0433A (*rediit, nec
caro est corrupta*). **Final state: 46 bands, zero mismatches, on every mark counted.**
⛔ No comma→semicolon sweep was performed: Migne prints **26 semicolons of his own** in
this range (0001 ×15 · 0002 ×9 · 0003 ×2 · 0004 ×0), so Tobit's narrow exception — which rests
on a book printing **zero** — does not apply here and was not invoked.

**Test 4 (the fourth test) — does the paragraph ASSERT what he asserts?** Run last, with the
counts already clean, on every paragraph. It is what produced §1.1's six divergences (each
found by reading the lemma against the Latin, not against the pre-scan), §3.2's four declines,
and the three name decisions in §V that would otherwise have gone the familiar English Bible's
way — **Barnabas** not Barsabas, **Matthew** not Matthias, **Jesus** not Josue. Those three
are the exact shape the launch brief warned of (*Absalon*, *Scarioth*, *Hebrun*), and all
three arrived over the plate in my own first reading of the paragraph before the collation
caught them.

⚑ Two smooth-where-the-Latin-is-rough suspects were re-examined under this test and both were
**left rough**: 0427D's *quasi rotae radios* (§6) and 0433C's verbless abridgment head (§4).

---

## §8 · WHAT I DECLINED, AND WHY

1. **A `[cj:]` at 0429D on *Merito* (Arator).** Declined — the bar is a false assertion
   produced by a word, and the trouble here is the abridgment, not the type. Rival named and
   rejected in §3.2.
2. **A `[var:]` on the eleven §1.2 divergences.** Declined — each is a particle, a clip, or a
   dropped possessive with no sense change, and a `[var:]` is a public claim. The crux is
   always available and always safe.
3. **A `[var:]` on the four §1.3 Greek-attributed readings.** Declined — the page already
   glosses them, in Migne's own words.
4. **A `[sic:]` on *subtsantiae* and *crediderent*.** Declined — the non-word class has been
   **our** digitization's error ten times out of ten, and a `[sic:]` would publicly blame
   Migne's plate for it. Both rendered for their evident sense, both raised in §3.1.
5. **Capitalizing *utramque* at 0435B.** Declined, and flagged for the merge (§2.4). This is
   the one decision in the stint I would most like a second reader on: mirroring preserves
   evidence, and also makes the page look as though we broke it.
6. **Renaming *Hierosolyma* apart from *Jerusalem*** (§V). Declined — English has no exponent,
   and manufacturing one ("Hierosolyma") would be our editorial hand, not Migne's.
7. **A plate read.** Not attempted: the launch brief records PL 114's spot check for this work
   as a **checked zero**, with both mid-page divisions (John→Acts at 425/426, Acts→Romans at
   469/470) examined. §2.4 and §3.1 are the three candidates I would spend one crop on if the
   merge wants them; none blocks the range.

---

## §9 · READ CLEAN — the sections where I found nothing

Named because a findings list without them is not a report.

- **Chunk 0000** (eight words, one italic span). *Vide inter opera ejus.* is **not scripture
  at all** — it is Migne's own cross-reference standing in for Jerome's prologue, which this
  recension does not reprint. Rendered "*See among his works.*", with no object supplied.
  The pre-scan's ⚠ against it is correct and innocent.
- **Chunk 0003, cols 0434A–0434D** — 15 verse addresses, 25 lemmata, nine `[n:]` notes; the
  only entries are the *usque ad* census (§4) and the §1.2 Mt 10:9 clip. Otherwise clean.
- **The `[n:]` sigla.** All 38 pass through verbatim: `(RAB.)` ×12, `(BEDA.)` ×9, `(GREG.)`,
  `(AUG.)`, `(ID.)`, and 14 scripture locators — `(Joan.)` ×4, `(Matth.)` ×4, `(Psal.)` ×2,
  `(Gal. III)`, `(Jer. XII)`, `(Zach. V)`, `(I Cor. I)`. **None is editorial prose**, so **no Pattern
  15 `[nt:]` fires anywhere in the range** — each was judged by content, not by length, and
  the longest (`(I Cor. I)`) is three tokens.
- **Guillemets: zero in both languages, all five chunks.** Pattern 5 and 6 have nothing to
  govern here.
- **Dittography: none found.** The two four-verb catalogues at 0430D repeat *urit* and
  *illuminat* across two lists, but they are two different lists (fire's natures, then the
  Spirit's works), not a compositor's doubling — see §3.3.
- **Migne's own `( sic )`: none in this range**, so nothing to stack ours on.

---

# PART II — chunks 0005, cols 0437D–0450A

# *Glossa ordinaria*, **Actus Apostolorum** (PL 114) — cruces for chunks 0005–0009

**Stint: chunks 0005–0009, cols 0437D–0450A (4,863 Latin words), CAPUT V – CAPUT IX.**
Ananias and Saphira · the choosing of the seven · Stephen's speech and stoning · Simon Magus ·
Philip and the eunuch · Saul on the Damascus road.

Three peers hold 0000–0004, 0010–0013 and 0014–0017. **This file is a stint file. It is not
`cruces.md`; the merge is the launcher's.**

Marker tally for this stint: **5 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[cn:]` · 115 `[n:]`** (exact parity with the Latin twins). Zero guillemets in
either language, in all five chunks.

Mechanical state, all five chunks: column anchors verbatim and in order and **checked against
the word each stands beside** (test 2b); `[n:]` contents verbatim and in order; paragraph counts
1:1; `verify-english.mjs` reports no error on 0005–0009 (it fails only on peers' unwritten
chunks). Punctuation compared **band by band, never by totals** — see §T3.

---

## §0 · WHAT I INHERITED, AND FROM WHERE

⚑ **Timing, stated because it changes what this file can claim.** When I began,
`src/english/8976/cruces-0000.md` **was not on disk** — the peer holding 0000–0004 had written
`0000.md` only, eight words (*Vide inter opera ejus.*) with no vocabulary in it. **His file
appeared while I was drafting**, and I read it before filing and reconciled against it. §S below
records what changed in my five chunks as a result, and the one place where I did **not**
conform. Everything I settled independently and that turned out to agree with him is marked ✓.

| taken | from |
|---|---|
| `VERS. n.--` verbatim; the lemma Englished; a fragmentary lemma rendered as the phrase it stands for | 8968 (Ruth) `cruces.md` §1 |
| `CAPUT V.` → **CHAPTER V.**, roman kept as Migne sets it | Ruth pilot |
| `[var: Vulg. Bk C:V *word* …]` with book, chapter and verse **always explicit** | 8964 `cruces.md` §M |
| the mirror rule and **its ruled scope** | 8964 §M |
| *doctores* → **teachers** (never "doctors"); *charitas* charity vs *dilectio* love; *scientia* knowledge vs *sapientia* wisdom; *interpretatur* → "is interpreted"; proper names form for form | 8954 `cruces.md` §M — and ✓ all five re-fixed identically in 8976 `cruces-0000.md` §V |
| *signat* → **betokens**, held off *significat* → signifies; *septenarius* → "the septenary number" | 8964 §M |
| `*usque ad*` → ***as far as***, **no verb ever supplied** to complete it | 8970 (Tobit) §1 via the brief; ✓ same in `cruces-0000.md` §4 |
| "says Bede" (not "says Beda") | 8952/0004, the only shipped precedent |
| ***Ecclesia* mirrors the plate word for word** | 8964 §M; ✓ same in `cruces-0000.md` §V |
| *coenaculum* → **upper room** | `cruces-0000.md` §V — ✓ I had reached the same rendering at 0449D independently |
| *praedicator* → **preacher**, held apart from *doctor* | `cruces-0000.md` §V — ✓ same at 0440D |
| *virtus* **decided per occurrence** | `cruces-0000.md` §V; my sites are listed in §X |

**Corpus controls run before inventing anything** (`src/english/`): Moses 148 : Moyses 11 →
**Moses** · Saul 187 : Saulus 1 → **Saul** · Philip 943 : Philippus 168 → **Philip** ·
Stephen 5 : Stephanus 0 → **Stephen** · Sadoch 2 : Zadok 0 → **Sadoch** · "by antiphrasis" and
"anticipation" both attested · "catechumens" attested.

---

## §S · THE SEAM WITH 0000–0004 — three terms changed, one divergence NOT harmonized

### S1 · Changed in my chunks to match the opening stint

Three of my independent choices were **wrong for this work** once his table was on disk, and all
three are repaired. A work that renders one term two ways is incoherent on its own page.

| col | I had written | now reads | his rule |
|---|---|---|---|
| **0441C** | *Testamentum circumcisionis* → "The **covenant** of circumcision" | "The **testament** of circumcision" | *testamentum* → **testament**, never "covenant". ⚑ *Foedus sive signum* in the next clause keeps "**A covenant** or a sign" — that is a different Latin word and his rule does not reach it. |
| **0443C** | *Divinitatis* → "the **Godhead**" | "the **Divinity**" | *Divinitas* → **Divinity**, held apart from *Deitas* → Deity |
| **0444D** | lowercase *spiritui* → "the **Spirit**" | "the **spirit**" | *Spiritus* / *spiritus* **mirrors the plate**, exactly as *Ecclesia* does. His range has two lowercase sites (0430A, 0427A); **mine has exactly one**, and it is Act 7:51's *quod spiritui resisterent*, where Migne prints lowercase against ten capitalized *Spiritus* elsewhere in my five chunks. |
| **0442B** | *principium et finem sermonis* → "of the **saying**" | "of the **discourse**" | *sermo* → **discourse** |

⚑ ***sermo* has two sense-distinct occurrences in my range that I did NOT flatten**, on the
per-occurrence model his own *virtus* entry uses: **0439B** *Prius sunt **sermone** prohibiti,
modo flagellis caesi* → "forbidden by **word**", where the whole contrast is words against whips;
and **0449A** *Implet **sermonem** Domini dicentis* → "the **word** of the Lord who says", a
formula introducing a dominical saying. "Discourse" in either would say something Migne does not.
**Declared, not smuggled.**

### S2 · ⛔ ONE DIVERGENCE DELIBERATELY NOT HARMONIZED — the non-words

**His §3.1 RENDERS its two non-words for their evident sense** (*subtsantiae* → "of the
substance", *crediderent* → "they believed"), with no marker and a crux. **My §W CARRIES its
four into the English untranslated, in italics**, with no marker and a crux.

**I did not conform to him, and I did not conform him to me. The merge should rule.** Both
arguments, so the ruling can be made on them rather than on which file was read second:

- **For carrying (mine).** Pattern 7's non-word class is explicit and closes with *"Reading the
  typo was considered and rejected: it is the same silent correction this pattern exists to
  forbid… **Pattern 7 has no exceptions.**"* A reconstruction leaves the reader no way to know
  the file is defective, and it is the one error class nobody downstream can find.
- **For rendering (his).** Addendum A's finding is that a non-word is **our digitization's**
  error ten times out of ten. If the fault is ours, there is no type of Migne's to carry, and
  carrying it prints **our own corruption** on the page dressed as the plate's — which
  Pattern 13's principle ("a defect in our files is never attributed to Migne's plate") argues
  against as strongly as Pattern 7 argues the other way.

⚑ **Neither of us fired a marker, so neither set of chunks asserts anything about the plate, and
the disagreement is confined to four words in mine and two in his.** Whichever way it goes, the
change is a search-and-replace on six sites; it is not a re-translation. ⭐ **A plate read of
PL 114 pp. 219, 224, 226, 227, 228 and 230 would end it, and would also decide whether the fix is
a `data/tei-patches/8976.json` entry rather than either treatment.**

### S3 · Checked across the seam and sound, needing nothing

- **The `[var:]` marker form** — his §1.1 fires five with book, chapter and verse explicit; mine
  fires five the same way. **Ten markers, one form**, and no repeat of 8964's two-form drift.
- **Misprinted citations left exactly as printed and referred to `citation-corrections.json`** —
  his §2.2 and §2.3 (*(Matth. XXVIII)* for Mark 16:19; *(Zach. V)* for Zach 9:11), my §P
  (*(Matth. VI)* for Matt 5:10; *(II Tim. II, 9)* for 2 Tim 2:19). Same class, same treatment,
  and all four identified **from the quoted words, never from the numeral**.
- **The `[cj:]` bar.** He considered one at 0429D and **declined** it as outside Pattern 18a's
  scope; I fired exactly one, at 0438A, on a **coordinating conjunction** producing a false
  assertion, which is the class the 2026-08-15 extension admits. The two decisions are
  consistent with each other and with 18a; see §R1.
- **His §2.1 records verse numbers that do not match the verse glossed.** **My range has none** —
  every VERS. address in 0437D–0450A is in sequence, and the two that looked displaced
  (Act 7:58/59, Act 9:7) check out against the Clementine's own versification. Recorded as a
  checked negative, since his half of the book has the defect and mine does not.

---

## §V · THE DIVERGENCE LIST — every lemma in 0437D–0450A walked

⛔ **The point of this section is that the agreements are listed too.** A findings-only list
cannot be told apart from no look at all. Every reading below was checked against
`sources/vulgate/clementine-flat.txt`, cited by book chapter:verse, never from recollection.

### V1 · The five that took a `[var:]`

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| **0439A** | *Beati qui persecutionem patiuntur **propter Deum*** | Mt 5:10 *propter **justitiam*** | A different word in the beatitude the gloss adduces to prove the apostles received a gift rather than a labour. Marked `[var: Vulg. Matth. 5:10 *propter justitiam*, "for justice' sake"]`. ⚑ **And Migne's own citation for it reads `(Matth. VI)`** — see §P. |
| **0441D** | *usque ad, **Ferte** ossa mea hinc vobiscum* `[n: (Gen. L)]` | **Ex 13:19** *efferte ossa mea hinc vobiscum*; Gn 50:24 has *asportate ossa mea vobiscum de loco isto* | The quoted words are Exodus 13:19, not Genesis 50. Marked `[var: Vulg. Exod. 13:19 *efferte*, "carry out"]`, which names the true witness; the misprinted citation itself is left exactly as printed — see §P. |
| **0444A/B** | *Firmum fundamentum **Domini** stat* `[n: (II Tim. II, 9)]` | 2 Tim 2:19 *firmum fundamentum **Dei** stat* | The proof-text for the Church's firmness is given a different genitive. Marked `[var: Vulg. 2 Tim. 2:19 *fundamentum Dei*, "the foundation of God"]`. The citation numeral is also wrong — §P. |
| **0444B** | *Si introiero in tabernaculum **Domini*** | Ps 131:3 *si introiero in tabernaculum **domus meae*** | ⭐ **The most material of the four.** The gloss adduces this verse precisely as *testimonium … de tabernaculo quod verius fuit* — a testimony about the tabernacle — and Migne's *Domini* is what makes it one; the psalm's own *domus meae* is David's house, not a tabernacle of the Lord at all. Marked `[var: Vulg. Psal. 131:3 *tabernaculum domus meae*, "the tabernacle of my house"]`. |
| **0445A** | *Christus praedixerat: **Veniet,** inquit, **hora**…* | Jo 16:2 *sed **venit hora**, ut omnis qui interficit vos arbitretur obsequium se praestare Deo* | Migne prints a **future** where the Vulgate has *venit* — and his own frame is *Hoc et Christus **praedixerat*** , "this too Christ had foretold," which the future is doing the work of. Marked `[var: Vulg. Joan. 16:2 *venit hora*, "the hour cometh"]`. The word order *arbitretur se obsequium praestare* against *arbitretur obsequium se praestare* is not marked; nothing turns on it. |

All five `[var:]` contents were checked **not** to occur verbatim in their Latin twin (the
Pattern 14 mirror test): *propter justitiam*, *efferte*, *fundamentum Dei*,
*tabernaculum domus meae*, *venit hora* — none is in the chunk it annotates.

### V2 · Divergences found, **declined a marker**, with the reason

Pattern 14 fires on a divergence that **changes the sense**. These do not, and a marker that
fired on a trimmed *enim* would be spam on every page. All are recorded because a reader is
entitled to know they were seen.

- **0438A** *Utique convenit **inter vos** tentare Spiritum Domini?* — Act 5:9 has *convenit
  **vobis***. This is the gloss's own re-punctuation of the verse (it is arguing about where
  the question begins), and *inter vos* says what *vobis* says.
- **0439D / 0440B** *Omni die non cessabant docentes* — Act 5:42 *Omni **autem** die non
  cessabant **in templo et circa domos**, docentes*. A re-quotation closed with *etc.*; the
  full lemma at VERS. 42 (*Omni autem die,* etc.) agrees exactly.
- **0440D** *Exi de terra et de cognatione tua* — Act 7:3 *Exi de terra **tua**, et de
  cognatione tua*. One *tua* trimmed in a re-quotation; the lemma above it agrees.
- **0441D** *In sepulcro* — Act 7:16 *sepulchro*. Orthographic.
- **0442A** *Rex alius* — Act 7:18 *alius rex*. A transposition; no sense turns on it.
- **0442C** *O homo, quis me constituit…* — Lc 12:14 has bare *homo*. One vocative particle.
- **0443B** *Qui fecerit ea, vivet **in eis*** — Gal 3:12 has *in **illis***, Lv 18:5 has *quae
  faciens homo, vivet **in eis***. **A conflation of the two, and it is unattributed** (no
  `[n:]`), so there is no single host verse for a marker to name. Recorded here instead.
- **0443C** *Nunquid victimas* / *militiae coeli* / *Coelum mihi* — Act 7:42, 7:49 print
  *numquid*, *caeli*, *caelum*. Migne's *coe-* orthography throughout; not divergences.
- **0445A** *Educ **eum foras** extra castra, et lapidet eum populus* — Lv 24:14 *Educ
  **blasphemum** extra castra, et ponant omnes … et lapidet eum populus **universus***.
  An abridged quotation; and Migne's own prose two words earlier supplies *de blasphemante*,
  so nothing the substitution removed is lost to the reader.
- **0445C** *Cum persequentur vos* — Mt 10:23 *Cum **autem** persequentur vos*.
- **0445C** *Benjamin lupus rapax mane **comedet** praedam, **sero** dividet spolia* —
  Gn 49:27 *mane **comedat** praedam, **et vespere** dividet spolia*. *sero* and *vespere* are
  the same evening; the gloss turns on *lupus rapax*, which agrees.
- **0446B** *Spiritus sanctus disciplinae effugiet fictum* — Sap 1:5 opens *Spiritus **enim**
  sanctus*. A trimmed connective.
- **0447B** *humiliavit **se** factus obediens usque ad mortem* — Phlp 2:8 *Humiliavit
  **semetipsum***.
- **0447C** *De quo propheta **dixit**?* — Act 8:34 *de quo propheta **dicit** hoc?* The gloss
  is recalling the eunuch's question, not quoting it as a proof-text.
- **0448A** *Saulus **adhuc** devastabat Ecclesiam* — Act 8:3 *Saulus **autem** devastabat
  ecclesiam*. Migne's back-reference has taken *adhuc* from Act 9:1 (*Saulus autem adhuc
  spirans*), which is the verse he is glossing. Recorded because it is an intelligible
  contamination, not a defect.
- **0448A** *Quandiu uni ex minimis **istis** fecistis, mihi fecistis* — Mt 25:40 *quamdiu
  fecistis uni ex his **fratribus meis** minimis, mihi fecistis*. Reordered, and *fratribus
  meis* dropped; the argument (persecuting the least is persecuting Christ) is untouched.
- **0448B** *Apertis oculis* — Act 9:8 *apertis**que** oculis*. A fragment cut at the enclitic.
- **0449A** ***Qui vult venire post me**, abneget semetipsum* — Lc 9:23 ***Si quis vult post
  me venire**, abneget semetipsum*.
- **0444B** *Fundamentum aliud nemo potest ponere praeter **illud** quod positum est* —
  1 Cor 3:11 *praeter **id** quod positum est*, and *enim* trimmed. ⚑ Worth naming because I
  had *qui est Christus Iesus* in my head from the Greek and **the Clementine reads *quod
  est*, exactly as Migne prints it.** The check overturned my recollection, which is the
  whole reason the file is on disk.

### V3 · Lemmata checked and found to **AGREE with the Clementine exactly**

Named, because the brief requires it. Act 5:3 *Tentavit* · 5:3 *Et fraudare* · 5:4 *Sed Deo* ·
5:5 *Cecidit*, *Et factus est timor* · 5:8 *Dic mihi* · 5:9 *Quid utique* · 5:11 *Et factus
est* · 5:13 *Caeterorum* (Clem. *Ceterorum*, orthographic) · 5:14 *Augebatur* · 5:17
*Haeresis*, *Sadducaeorum repleti* · 5:20 *Vitae hujus* · 5:23 *Carcerem quidem* · 5:24
*Magistratus*, *Ambigebant* · 5:26 *Tunc abiit magistratus cum ministris* · 5:28
*Praecipiendo*, *Replestis Jerusalem*, *Super nos sanguinem* · Mt 27:25 *Sanguis ejus super
nos* · 5:30 *Deus patrum* · 5:32 *Spiritus sanctus*, *Omnibus* · 5:37 *Judas Galilaeus* ·
5:40 *Caesis* · 5:41 *Quoniam digni* · 5:42 *Omni autem die* · 6:1 *Graecorum*,
*Despicerentur* · 6:2 *Non est aequum nos* · 6:3 *Considerate* · 6:4 *Nos vero* · 6:5 *Et
elegerunt*, *Stephanum* · 6:6 *Et orantes*, *Orantes imposuerunt eis manus* · 6:7 *Et
verbum*, *Et verbum Domini crescebat* · 6:8 *Stephanus* · 6:13 *Homo iste* · 7:2 *Viri
fratres et patres* · Lc 6:27 *Diligite inimicos vestros* · 7:2 *In Mesopotamia* · 7:3 *Et
dixit*, *Exi de terra tua* · Gn 12:1 *et de domo patris tui* · 7:4 *Tunc exiit*, *Pater
ejus* · 7:4 *Vos habitatis* · 7:6 *Quia erit semen*, *Annis quadringentis*, *Accola* · 7:7
*Judicabo* · Ps 42:1 *Judica me, Deus, et discerne causam meam* · Ps 5:11 *Judica illos,
Deus* · 7:8 *Testamentum circumcisionis*, *Die octavo* · 7:9 *Vendiderunt in Aegyptum* ·
7:14 *In animabus* · 7:15 *Et descendit* · 7:16 *Translati* · 7:19 *Genus nostrum* · 7:20
*Gratus Deo* · 7:22 *Moyses* · 7:24 *Vindicavit illum* · 7:26 *Apparuit illis* · 7:27 *Quis
te constituit* · 7:28 *Nunquid* · 7:29 *Fugit* · 7:30 *In igne flammae* · Ex 3:14 *Ego sum
qui sum*, *Qui est, misit me ad vos* · 7:33 *Solve calceamentum* (Clem. also *calceamentum* —
checked, they agree) · 7:34 *Videns*, *Vidi afflictionem* · 7:35 *Quem negaverunt*,
*Principem* · 7:37 *Hic est Moyses* · 7:38 *Verba vitae* · 7:40 *Ad Aaron*, *Fac nobis
deos* · 7:43 *Figuras*, *Et transferam* · 7:44 *Tabernaculum*, *Secundum formam* · 7:46 *Ut
inveniret tabernaculum* · 7:48 *Sed non Excelsus* · Mt 18:16 *in ore duorum vel trium testium
stet omne verbum* · 7:49 *Terra autem* · 7:51 *Dura cervice*, *Et incircumcisis* · 7:52
*Patres vestri*, *patres nostri*, *Et occiderunt* · 7:55 *Stantem*, *Video coelos*, *Filium
hominis* · 7:57 *Et ejicientes* · 7:58 *Domine Jesu, suscipe spiritum meum* · Lc 23:46
*Pater, in manus tuas commendo spiritum meum* · 7:59 *Obdormivit*, *Saulus autem* · 8:1 *In
illa die*, *Ecclesia*, *Dispersi sunt* · 8:2 *Curaverunt autem Stephanum viri timorati* ·
8:3 *Saulus*, *Devastabat*, *Trahens*, *Dispersi* · 8:5 *Philippus* · 8:6 *Intendebant* ·
8:11 *Seducens*, *Dementasset* · 8:12 *Philippo*, *Jesu Christi* · 8:13 *Tunc Simon* · 8:14
*Miserunt* · 8:16 *In nomine*, *Jesu* · 8:17 *Imponebant manus* · 8:19 *Potestatem* · 8:20
*Pecunia tua*, *sit tecum*, *Pecunia* · 8:22 *Poenitentiam age*, *Roga Deum* · Ps 72:1 *Quam
bonus Israel Deus* · 8:24 *Precamini*, *Quae dixistis* · 8:26 *Angelus autem*, *Ad viam* ·
8:27 *Aethiops*, *Potens*, *Candacis reginae* · Ps 67:32 *Aethiopia praeveniet manus ejus
Deo* · Ps 44:11 *Audi, filia, et vide et inclina aurem tuam* · 8:28 *Revertebatur* · 8:30
*Putasne intelligis* · 8:31 *Quomodo* · 8:33 *In humilitate*, *Humilitate*, *Tolletur*
(⚑ **checked with care — the Clementine also reads *tolletur*, not *tollitur***) · 8:35
*Aperuit*, *Evangelizavit* · Ps 80:11 *Dilata os tuum, et implebo illud* · 8:36 *Ad quamdam
aquam* · 8:37 *Si credis* · 8:39 *Spiritus Domini* · 8:40 *Inventus est*, *Caesaream* ·
9:1 *Saulus autem*, *Minarum*, *Spirans* · 9:4 *Et cadens*, *Quid me* · 9:5 *Ego sum Jesus* ·
9:7 *Surge*, *Ingredere*, *Et dicetur* · 1 Cor 9:9 *Non alligabis os bovi trituranti* · 9:8
*Apertis oculis* · 9:9 *Et erat*, *Tribus diebus*, *Non videns*, *Non manducavit* · 9:10
*Anania* · 9:11 *In vicum* · 9:15 *Vade* · 9:17 *Introivit* · Is 11:6 *Habitabit lupus cum
agno* · 9:18 *Ceciderunt* · 9:20 *Et continuo* · 9:21 *Nonne* · 9:24 *Custodiebant* · 9:26
*Cum autem venisset* · 9:27 *Barnabas* · 9:29 *Cum Graecis* · 9:30 *Caesaream* · 9:31
*Ecclesia*, *Et consolatione* · 9:33 *Nomine Aeneam* · 9:34 *Surge* · 9:35 *Lyddae et
Saronae* · 9:36 *Nomine Tabitha* · 9:39 *In coenaculo* · 9:40 *Ejectis*, *Aperuit*, *Aperuit
oculos* · 9:41 *Dans autem*.

### V4 · ⚑ THE NUMBERS, because the brief said a number the gloss reasons from is the prize

- **0441D, Act 7:14 — the seventy-five.** Migne's lemma is the bare *In animabus*; his gloss
  is *Hoc secundum editionem Septuaginta interpretum dicitur. In Hebraeo **septuaginta**
  tantum reperiuntur.* **Both numbers check.** Act 7:14 Clem. reads *in animabus septuaginta
  quinque*; Gn 46:27 Clem. reads *fuere **septuaginta***. So the famous divergence is real,
  the gloss states it correctly, and there is nothing to mark. **A checked zero on the one
  number this range was most likely to carry a defect in.**
- **0441C, *Annis quadringentis*** — Act 7:6 Clem. *annis quadringentis*. Agrees.
- **0440A, the seven** (*non sine septenarii numeri mysterio*) and **0448B–C, the three days**
  (*triduum*, *tres dies*, *tertia die*, *tres gradus*) — all internally consistent and all
  agreeing with Act 6:3, 9:9 and Act 7:52's three degrees. No numeral in this stint diverges.

---

## §P · MIGNE'S CITATIONS — two misprinted, both left EXACTLY as printed

Identified **from the quoted words, never from the numeral**, per the standing rule. Neither is
touched in the text; both are referred to `citation-corrections.json` here.

1. **0439A — `[n: (Matth. VI)]`** on *Beati qui persecutionem patiuntur propter Deum*. The
   words are the eighth beatitude, **Matt. 5:10**. Matthew VI is the Lord's Prayer and the
   lilies; it contains no beatitude at all.
2. **0444A — `[n: (II Tim. II, 9)]`** on *Firmum fundamentum Domini stat*. The words are
   **2 Tim. 2:19**. 2 Tim. 2:9 is *usque ad vincula quasi male operans*.

⛔ **Neither is a candidate for a plate read that changes anything**, because both are left as
printed either way; they are recorded so the index resolves `refKey` correctly while
`refDisplay` keeps what Migne set.

**Two references in Migne's PROSE, not in an `[n:]`, that name the wrong book.** These take no
apparatus at all — they are the author's sentences, rendered as written:

- **0449A, Act 9:24** — *Non Judaei, sed cives cum rege suo Aretha, **ut ipse scribit ad
  Galatas***. Paul writes the Aretas episode in **2 Cor. 11:32**; Galatians 1:17 mentions
  Damascus and Arabia but not Aretas. Rendered "as he himself writes to the Galatians."
- **0448B, Act 9:7** — *In lege scriptum est: Non alligabis os bovi trituranti* `[n: (I Cor.
  IX)]`. **The citation is right and the description is loose**: 1 Cor 9:9 does print those
  exact words, and it is itself quoting the law (Deut 25:4, which reads *Non ligabis os bovis
  terentis*). Recorded as a **checked non-defect** so nobody re-raises it.

---

## §W · THE FOUR NON-WORDS — raised as plate candidates, NO MARKER FIRED

⛔ **This is the decision in this stint most likely to be revisited, so here is the whole of the
reasoning rather than the conclusion.**

Four runs in my range are not Latin words at all:

| col | printed | what it stands for | shape |
|---|---|---|---|
| **0441D** | *Et **posili** sunt,* | *positi* (Act 7:16 *et positi sunt in sepulchro*) | one letter, t → l |
| **0444D** | *quia non **ite rum** casurus* | *iterum* | split across a space |
| **0446B** | *in Patrem **credeban** et in Spiritum sanctum* | *credebant* | truncation, final t lost |
| **0449C** | *ut in **quisbusdam** exemplaribus invenitur* | *quibusdam* | metathesis |

**All four are carried into the English untranslated, in italics, with no `[sic: …]`.** Two
rules pull opposite ways here and both were read:

- **Pattern 12** says type carried under Pattern 7 or 10 is wrapped in `[sic: …]`.
- **The ship test (brief addendum B)** says a `[sic:]` is a **public claim that Migne's plate is
  defective**, and that an unread candidate is safe *iff it fires no marker* — seven false
  `[sic:]` were withdrawn in one batch, each publicly blaming Migne for the digitization's
  error.

**Addendum A decides which way the evidence points, and it points away from the marker:** every
suspicion in that batch aimed at a **non-word** was confirmed at the plate as **our** corruption,
ten for ten — and *quisbusdam* is on that very list, found and confirmed in a sibling book. A
`[sic:]` here would therefore very probably be **false**, and false in the direction that
defames the source. **So: carry the run, log the crux, fire nothing.**

⚑ **What a plate read would change, stated so the reader of this file can act on it.** If the
plate prints the sound word in any of the four, the fix is a `data/tei-patches/8976.json`
entry — **not** a `[sic:]`, and the English then renders the word normally. If the plate prints
the broken run, the `[sic:]` becomes correct and should be added. **Either way the change is
cheap, and either way nothing in the running text asserts anything false today.** PL 114 =
archive.org `patrologiaecurs06saingoog`, **PDF page = (column + 11) / 2** — cols 0441, 0444,
0446 and 0449 are pp. 226, 227, 228 and 230.

⚑ **7a⁗ was run on each of the four**, because a carried run takes whatever it governs out of the
English with it:

- *posili* — the run is the participle of a **lemma address**, not of an assertion the gloss
  rests on; the clause keeps *Et … sunt*, and the very next lemma (*In sepulcro*) supplies the
  place. Nothing is negated, nothing is governed.
- *ite rum* — the clause keeps its negative (*non*) **and** its predicate (*casurus*): "because
  he is not *ite rum* to fall." The quarantine takes only the adverb.
- *credeban* — ⚠ **this one takes the verb**, and it is the only one that does. The clause reads
  "they *credeban* in the Father and in the Holy Spirit." It was left this way rather than
  glossed because the run is 90% legible as *credebant* to any reader, because inserting an
  English verb beside it would be the silent repair Pattern 7 exists to forbid, and because
  brackets are already overloaded (Pattern 11's own note). **This is the site to revisit first
  if the treatment is reconsidered.**
- *quisbusdam* — an adjective in an adjective's slot; nothing governed.

⭐ **Recorded as a checked negative as well: I looked for the *other* direction of brief §4 —
a form that reads suspiciously TIDY in a rough passage — and found none in 4,863 words.** The
nearest candidate was *credulitate* at 0446A (*credulitate aliarum duarum carere non potest*),
and **it is the refuted class, by name**: 8958's *credulitatem* was raised on an excellent
argument and the plate said Migne printed it. Rendered "belief", no crux beyond this line.

---

## §R · REAL WORDS THAT READ ODDLY — rendered as printed, one glossed

Per the standing rule, a real, well-formed word that reads oddly is **Migne's** until a plate
says otherwise (refuted five of five). All of these are rendered as printed.

### R1 · The one `[cj:]` — 0438A, *Ananias **a** Saphira … mortui sunt*

> *Prius Ananias **a** Saphira in conspectu Ecclesiae cito **mortui sunt***

*a* is a perfectly good Latin preposition, so Pattern 12 has nothing to wrap. But **the verb is
plural** and there is only one subject: the sentence as printed says Ananias died *by* Saphira,
which the whole book denies — she outlived him by three hours and the gloss two paragraphs above
is explaining exactly that gap. That is Pattern 18's bar: the printed word makes the sentence
assert what the author is arguing against, and the failed word is a **coordinating conjunction**,
which is the correlative family the 2026-08-15 extension admits.

**Marked `First Ananias by [cj: *a*; read *ac*, "and"] Saphira died quickly…`** — additive, with
Migne's word rendered and standing first, so the verbatim-in-the-Latin-twin guard holds.

⚑ **The rival, and why it lost.** The other reading is that this is not Migne's at all but our
digitization dropping the *c* of *ac* — a tei-patch, not a conjecture. It lost **only because I
cannot read the plate**, and `[cj:]` is the marker that survives either outcome: it claims
nothing about the plate, only that *ac* is the sense. **If the plate is read and shows *ac*, the
right fix is the patch and the `[cj:]` comes out.** Named here because the apparatus records only
what the marker says.

### R2 · Rendered literally, marker declined, reasons given

- **0448B, *dehinc **Dominus** jubetur ingredi*.** A nominative *Dominus* against a passive
  *jubetur* whose subject can only be Saul; the sense wants *a Domino*. Rendered as printed —
  "thereafter the Lord is bidden to enter" — and **the `[cj:]` is declined** because 18a scopes
  that ruling narrowly and explicitly leaves *case, person, voice and mood* anomalies that merely
  fail to construe outside it (11064 @1154C is the named parallel). The conjecture is *a Domino*,
  "by the Lord," and it lives here rather than on the page by design.
- **0438C, *sed nec angelum, neque **spirituum ullum** esse credebant*.** A genitive plural with
  a masculine accusative. Rendered "neither an angel nor any of spirits." Migne's.
- **0442C, *Moyses **fuit** in Madian*.** The narrative wants *fugit*, and the lemma four words
  earlier **is** *Fugit*. Rendered "Moses was in Madian." No marker: *fuit* construes, and the
  clause asserts nothing false — Moses **was** in Madian.
- **0442B, *a filiis Emor **filiis** Sichem emit Abraham*.** *filiis* where the same sentence
  prints *filii Sichem* twice more. Rendered as printed. The whole paragraph is about that
  genitive chain, so the variation is visible to a reader without help from us.
- **0440A, the anacoluthon at Act 6:6** — *ut ministri eligerentur, **qui** ut digni inventi
  sunt … **placuit** eosdem ipsos … ordinari*. The relative has no verb of its own and *placuit*
  takes over. **The English is as broken as the Latin, deliberately.**
- **0443B, *Qui licet aliquem tentari permittam…*** — a connecting relative in the first person
  with no main clause to attach to. Rendered "I who, although I permit someone to be tempted,
  yet it is not to be thought that I am ignorant of it." Migne's.

---

## §T · THE FOUR TESTS, AND WHAT EACH RETURNED

### T2a · The negation sites — host proved from STRUCTURE, per the known hole

Every negative in the stint was attached to a named host. These are the sites that fired the
2a trigger condition (a negative on a verb with a **quantifier or correlative** adjacent), and
each was decided from the sentence's own `sed` / `sicut … ita` pivot rather than from what reads
well:

| col | Latin | host | proof |
|---|---|---|---|
| 0438A | *ut **omnes non** possent contingere* | **omnes** | so many were brought that **not all** could touch him — the *Tot erant* clause is the premise |
| 0439A | *Non nobis solis, **sed** omnibus* | **nobis solis** | the *sed* names the true recipient |
| 0439A | *Non putabant se laborare, **sed** … percipere* | **putabant** | the *sed* supplies the second infinitive under the same verb |
| 0440A | *De seipsis non interrogant, **sed** judicant* | **interrogant** | *sed judicant* |
| 0440C | *non vocant eum proprio nomine, **sed** hominem … appellant* | **vocant** | *sed appellant* |
| 0441D | *non enim primo Aegyptiis, **sed** Ismaelitis* | **primo Aegyptiis** | *sed Ismaelitis* |
| 0442B | *Non enim a filiis Emor … emit Abraham, **sed** Jacob* | the whole buying clause | *sed Jacob … emit* |
| 0443C | *non est factus, **sed** omnia fecit* · *nec creatura est, **sed** Creator* | *factus* · *creatura* | both *sed* clauses |
| 0443D | *non voluntate, **sed** metu poenarum* · *non quae offeruntur, **sed** voluntatem* | *voluntate* · *quae offeruntur* | both *sed* clauses |
| **0444B** | *non in **solo** templo Judaeorum eum habitare* | **in solo templo** | ⭐ the quantifier, not the verb: Solomon's point is that God dwells **not in the Jewish temple alone**, which is the opposite of "does not dwell in the temple" |
| 0445B | *Non quidem lapidavit, **sed** … consensit* | *lapidavit* | *sed consensit* |
| 0445C | *non quia **tunc solum** facta, **sed** quia ab illa die coepit* | **tunc solum** | *sed* names the day it began from |
| **0446C** | *Non baptizandi **tantum** in aqua … **sed** cuicunque imponendi manus* | **baptizandi tantum in aqua** | the *sed* names the greater power Simon actually wanted |
| 0448B | *non torpens otio, **sed** illustratus … rimabatur* | *torpens otio* | *sed* clause |
| 0449B | *Non quam cito baptizatus est … **sed** primo abiit in Arabiam* | *quam cito baptizatus est* | *sed* clause |
| 0449C | *non solum torporem discutiat, **sed etiam** opera paret* | *solum torporem discutiat* | *sed etiam* |

⚑ **The one that took real work: 0439A, *qui nec territi minis cessant praedicare*.** The `nec`
stands immediately before *territi*, and the reading it invites — "who, **not terrified** by
threats, cease to preach" — makes the apostles stop, in a sentence whose own main clause says the
council is **praising** them. The host is *cessant*, and the proof is not the sense but **Migne's
own idiom two columns later**: at 0440C he prints *Homo iste **non cessat** loqui verba*, the
same verb, the same negative, the same infinitive complement. Rendered "who, terrified by
threats, cease not to preach." **Test 2 alone would have passed the wrong reading**, which is
exactly 2a's point.

### T2b · Anchors checked against the word each stands beside

All 49 anchors in the five chunks were placed against the Latin word they precede, not merely
reproduced in order. The ones where English word order forced a decision, and what it was:

- **0437D** — Latin *semper [0437D] vindictis commendantur*; English "always commended by
  [0437D] punishments," so the anchor sits on *vindictis*.
- **0441B** — **split inside an italic lemma**, exactly as 8995 @0605B did: *et [0441B] de domo
  patris tui* → "*and [0441B] from the house of thy father:*".
- **0444A** — Latin *quam verbum [0444A] posuit*; the verb fronts in English, so the anchor rides
  immediately after "word" (*verbum*), the word it stands beside, rather than travelling with the
  verb.
- **0444D**, **0446D**, **0448C** — same class, each placed at the Latin word rather than the
  English verb: *malitiae eorum [0444D] ponit*, *commercium [0446D] fieri posse*, *quae
  turbatur, [0448C] excludens*.

### T3 · Punctuation, band by band — TWO of my own supplied marks caught

⛔ Both were found by the band comparison and neither by reading. **Both were mine.**

- **0005, the HEAD band** — I had written "carried on in three ways**:** by persuasion," against
  Migne's *Tribus modis tentatio agitur, suasione*. **A supplied colon.** Removed.
- **0005, band [0439A]** — "They question**;** for there is wont to be doubt" against Migne's
  *Interrogant, solet enim*. **A supplied semicolon.** Removed.

After repair: **all bands in 0005, 0007, 0008 and 0009 match exactly** (colons, semicolons,
question marks, guillemet-opens, exclamations), and 0006 matches in every band **but one**, by
design — see the next item.

⚑ **0006, band [0443C]: one colon in the English that Migne does not print, and it is Pattern 8b.**
*Quaeritur quomodo non obtulerint Deo … non voluntate, sed metu poenarum?* is an **indirect**
question closed with `?`, and English cannot end that construction with a mark. Recast direct
behind a colon: **"It is asked: how did they not offer to God, when it is read that they offered
certain things to God, not of will, but from the fear of punishments?"** The mark is kept, nothing
is deleted, and the extra colon is the convention's own cost. **This is the only band mismatch in
the stint and it is intentional; the merge should not "fix" it.**

Question-mark parity across the stint: **7 in the Latin, 7 in the English**, and each is on the
sentence Migne puts it on. Three of them are worth naming because they look like errors and are
not:

- **0438A** *Increpative dictum?* — a `?` on what reads as a statement. Kept (Pattern 8).
- **0438A** *quid?* — a one-word question inside a discussion of how to punctuate the verse. Kept.
- **0447D** *… usque ad in quos Spiritus descenderat?* — a `?` closing an **abridgment tail**.
  Kept exactly there.

### T4 · The fourth test — does the paragraph ASSERT what he asserts

Run last, with the counts already clean, on all 176 paragraphs. It returned **one repair**, and
the repair was invisible to every other check in this edition:

⛔ **0446C, Act 8:19.** Migne prints *Non baptizandi tantum in aqua et praedicandi, sive virtutes
faciendi **quam** habebat Philippus, sed cuicunque imponendi manus*. My draft read "or of working
**the miracles which** Philip had" — smooth, and **false**: *quam* is feminine singular and cannot
agree with *virtutes*; it reaches back to *potestatem*, the lemma. The draft made Philip's
possession the miracles; Migne's sentence makes it **the power**, which is the entire point of the
paragraph, because what Simon is refused is a *greater* power than the one Philip had. **Nothing
was missing, nothing was added, the band matched, the negation was on its proper host.** Repaired
to "or of working miracles, which Philip had," which leaves the relative as loose in English as it
is in Latin rather than binding it wrongly. This is 7a's fifth mechanism — *reference mis-bound* —
and it is the one no negation-aware check will ever see.

Three further paragraphs were read twice under this test and **stand as written**, with the
reasoning recorded because a blind reader will stop at each:

- **0441A, Act 7:3** — *post mortem patris sui locutus est Dominus Abrahae **qui in Charra
  mortuus est***. The relative sits next to *Abrahae* and belongs to **the father**: the next
  clause is *ubi cum eo **filius** habitavit*, "where the son dwelt with him," which only parses if
  the man who died there is the father, and Gn 11:32 has Thare dying in Haran. The English moves
  the clause to bind it correctly: "after the death of his father, who died in Charra where the son
  dwelt with him, the Lord spoke to Abraham."
- **0448C, Act 9:9** — *suo exemplo instruitur, **qui** tenebras tridui luce reversa mutavit*.
  **Both readings construe** and I did not choose: it is Christ's own example (three days in the
  tomb) or Saul's own (three days blind, then light). The English — "he is instructed by his own
  example, who changed the darkness of the three days by the returning light" — is ambiguous in
  precisely the same way and in the same place. **Said here rather than decided silently.**
- **0438C** — *qui virtute et signis reddebant testimonium resurrectionis Christi* attaches to
  *apostolorum*, not to *principibus*: it is the apostles who witness to the resurrection, and the
  Sadducees are being described as denying it. English word order happens to put the relative
  beside "apostles," so nothing had to be moved.

---

## §M · THE HOUSE CONVENTIONS AS APPLIED, AND ONE DECLARED EXTENSION

### M1 · The mirror rule — *Ecclesia* mirrored, *apostolus* NOT, and the reason

***Ecclesia* is capitalized at every one of its 13 occurrences in my five chunks** (checked
mechanically, plus one lower-case *ecclesiasticae* at 0449B). All render **the Church**; the
adjective renders "the ecclesiastical faith." Nothing to adjudicate.

⚠ ***Apostolus* is where his case demonstrably carries no distinction, and I did not mirror it.**
Mechanical count over the five chunks: **19 lower-case against 11 capitals**, and they alternate
**for the same referent inside a single sentence**:

- **0439A** *Hic erat discipulus **apostolorum** … remanens apud Judaeos consilio **Apostolorum***
  — Gamaliel, one sentence, both casings.
- **0446D–0447A** *sed **apostolos** rogat … **Apostolis** etiam ficte loquitur* — Simon, two
  sentences apart, both casings.

That is 8964 §M's *In regum* / *In Regum* case exactly: **his case is not carrying a signal there,
so mirroring it would transcribe an accident as though it were one.** Rendered lower-case
throughout, **except *Apostolus* used as Paul's title** (0444A, *de qua Apostolus*) → "the
Apostle," which is a title and not a plural.

⛔ **This is an EXTENSION beyond the two cases 8964 §M names, and I am declaring it rather than
smuggling it.** If the merge prefers absolute mirroring, the change is mechanical and the two
sentences above are the evidence either way.

Mirrored where the case is semantic and the plate is consistent: *Scriptura* / *Scripturas* →
the Scripture, the Scriptures · *Gentibus* → the Gentiles · *Propheta* → the Prophet ·
*Divinitatis* → the Divinity. **Not** mirrored where English has no lower-case option:
*Spiritui sancto* → the Holy Spirit, *samaritanae* (0445D) → the Samaritan woman.
**⚑ Except *spiritus* itself**, which the opening stint mirrors like *Ecclesia* and I have followed:
0444D’s lower-case *spiritui* renders **the spirit** — see §S1.

⭐ **One capital that is NOT an accident and does real work — 0443C, *sidus Dei vestri*.**
The Clementine prints *sidus **dei** vestri* at Act 7:43, of a pagan star-god. **Migne capitalizes
it, twice, and the gloss then argues from the capital**: *Quidam sic dicunt sidus Dei vestri, **ut
ad Deum pertineat verbum**, quia non ipsum Dominum, sed ejus sidus susceperunt* — "so that the
word refers to God, because they received not the Lord himself but his star." **Mirrored, in all
three places.** No `[var:]`: capitalization is not a textual variant, and the reading itself
agrees with the Clementine word for word.

### M2 · `usque ad` — censused per occurrence, and the trap was live

**23 occurrences in my range. 22 are the abridgment formula → *as far as*. One is not.**

⛔ **0447B, *humiliavit se factus obediens **usque ad mortem** [n: (Philip. II)]*** — Phil 2:8's
own words, inside a scripture quotation, rendered **"unto death."** This is warning D's exact
shape, and it is the more dangerous because *usque ad* is set in the same italics as the formula
five lines above it. Confirmed mechanically: `grep "as far as"` returns 22 across the five English
chunks, and `grep "usque ad"` returns 23 across the five Latin ones.

⚑ **No verb is ever supplied to complete a formula tail** (Tobit's rule), and each tail was parsed
as strictly as ordinary prose. Two tails needed that discipline:

- **0441D** *…etc., usque ad **quam** pro Hebraica veritate sermonem suum suspectum facere* — a
  comparative *quam* with nothing to complete it. **It is not a stranded correlative and takes no
  `[cj:]`**: the abridgment removed the *maluit* it answers, which is the formula working
  correctly, not a plate defect. Rendered as it stands.
- **0447D** *…usque ad in quos Spiritus descenderat?* — the tail keeps its question mark. See T3.

### M3 · The verse addresses, reproduced as printed

- **⚠ 0443A prints `VERS 34.--`, with no period after `VERS`** — the only one of the 123 verse
  marks in my range set that way. **Reproduced exactly**, the same class as 8964's malformed
  `VERS 9.--`. Not patched, not tidied.
- **The verse numbers are in sequence throughout my five chunks** and match the Clementine's
  versification where I checked it (Act 7:58/7:59, Act 9:7). **No displaced number in this
  range** — recorded as a checked negative, since sibling stints found several.
- **Act 9's `VERS. 7.-- *Surge.*`** looked out of place against Act 9:6 and is **correct**: the
  Clementine puts *Surge, et ingredere civitatem, et ibi dicetur tibi* at **9:7**.

### M4 · Two sentences that simply stop — no terminal mark supplied

Pattern 8, and both are Migne's:

- **0441B** — *et Stephanus, qui jam quasi in morte positus erat* (no full stop).
- **0444A** — *ostendit quod in sanctum locum non est locutus blasphemiam* (no full stop).

The English stops where he stops, in both.

### M5 · Lemma expansion — the class, stated so it is not misread as inconsistency

Per the 2026-08-19 addendum, **a control has to be the same class as the thing it controls**, so
here are both classes:

- **Clipped lemmata left as legible stumps** (nothing is elided that English cannot carry, and the
  Latin stands opposite): *Horarum,* → "*Of hours,*" · *Coelum mihi.* → "*Heaven to me.*" ·
  *Terra autem.* → "*And the earth.*" · *Deus patrum.* → "*The God of the fathers.*" (**not** "our
  fathers" — *nostrorum* is not printed) · *Solve calceamentum.* → "*Loose the shoe.*" (**not**
  "thy shoe" — *tuorum* is not printed).
- **Clipped lemmata expanded, because the stump is not English at all**: *Nunquid,* → "*Wilt
  thou,* etc." (a bare interrogative particle has no English exponent) · *Nonne.* → "*Is not this
  he.*" · *Caesis,* → "*Having beaten them,* etc." · *Translati.* → "*They were carried over.*"

⛔ **Contrasting the two lists would manufacture an inconsistency that is not there** — the first
group has nothing elided that English needs, the second does. Ruth's convention 3 governs both.

### M6 · Two glosses where the Latin word had to survive into the English

The Song-of-Songs case 2 (*where the gloss IS the etymology, an English word sharing no root makes
the gloss explain nothing*):

- **0438D, *magistratus*.** The gloss's whole content is that *magistratus* is to be read as a
  **singular** — a fact with no English exponent, since "magistrate/magistrates" is not what is at
  issue. The Latin word is kept inside the gloss; **the lemma above it is rendered plural**
  ("*The magistrates.*") because the plural is the reading the gloss is correcting, and the gloss's
  own example sentence is rendered singular ("Then the magistrate went away with the ministers"),
  as Migne's argument requires.
- **0449C, *dorcades*.** *unde ab acumine visus **dorcades** Graece vocantur* — the Greek word is
  kept, roman as Migne sets it, untranslated. Englishing it would delete the etymology.

⚑ And one where the Latin word **did not** need to survive: **0442C, *Moyses idem valet quod
aquaticus … vel liniens***. Rendered "*of the water*" and "*daubing*", because the gloss's own
reasons (*quia de aqua est assumptus*, *quia inventus est in fiscella, bitumine lita*) carry into
English intact. Nothing is lost.

### M7 · One deliberate reading, declared: *vicus* at 0448D

Act 9:11's *vicus* is the street called Strait, and every English Bible says "street." **Migne's
gloss defines it as something else**: *Vici dicuntur agri, aut civitatibus, aut sibi intrinsecus in
civitate proximi* — lands lying next to cities or to each other, which is a **village**, not a
street. Rendered "*Into the village.*" and "Villages are called lands lying next…", so that the
gloss explains something. **Rendering "street" would have been conformation to the familiar
English against Migne's own argument** — the 11551 *stylus* failure, in miniature.

---

## §X · VOCABULARY FIXED IN THIS STINT — for the merge to reconcile

Inherited terms are marked ⟵; the rest are this stint's choices, declared rather than assumed.

| Latin | English | note |
|---|---|---|
| *doctores*, *doctor*, *doctrina* | **teachers**, **teacher**, **teaching** | ⟵ 8954 §M. 6 occurrences, zero "doctors" |
| *charitas* / *dilectio* | charity / **love** | ⟵ 8954 §M. Only *dilectio* occurs here (0445B, *sacrificium dilectionis*) |
| *scientia* / *sapientia* | **knowledge** / **wisdom** | ⟵ 8954 §M. Both occur (0438A, 0447C / 0448C) and are held apart |
| *interpretatur*, *interpretantur* | **is interpreted**, **are interpreted** | ⟵ 8954 §M. 5 occurrences |
| *signat* / *significat* | **betokens** / **signifies** | ⟵ 8964 §M. Both occur in 0449 and are held apart |
| *septenarius numerus* | **the septenary number** | ⟵ 8964 §M |
| `*usque ad*` (formula) | ***as far as*** | ⟵ 8970 §1. 22 of 23 — see M2 |
| *capitula* (of the summary passages) | **summaries** | **new.** 0439D and 0440B, the same phrase both times (*talia interponuntur capitula*). "Chapters" was rejected because it collides with the `CAPUT` heads on the same page. ⚠ *capitulo* at 0445D means an ordinary chapter and is rendered "chapter" |
| *scissio* (glossing *haeresis*) | **a division** | **new.** 0438B |
| *testamentum* / *foedus* | **testament** / **a covenant** | ⟵ `cruces-0000.md` §V for *testamentum*; *foedus* is a different word and keeps "covenant" (0441C) |
| *Divinitas* | **Divinity** | ⟵ `cruces-0000.md` §V (0443C) |
| *sermo* | **discourse**, except two sense-distinct sites | ⟵ `cruces-0000.md` §V; the exceptions are named in §S1 |
| *coenaculum* | **upper room** | ⟵ `cruces-0000.md` §V; reached independently at 0449D |
| *praedicator* | **preacher** | ⟵ `cruces-0000.md` §V (0440D) |
| *virtus* | per occurrence | ⟵ `cruces-0000.md` §V. **power**: 0438C *virtute et signis*, 0446B *verbis Philippi et virtute*. **miracles**: 0445D *signa virtutum*, 0446C *virtutes faciendi*, 0449C *fiebant virtutes* |
| *per antiphrasim* / *anticipatio* / *synecdoche* | by antiphrasis / an anticipation / a synecdoche | corpus-attested, all three |
| *magnalia Dei* | the great works of God | 0439A |
| *dementare* | **to bereave of mind** | **new.** 0446A, chosen to keep *Dementare est rationalem mentem absentare* intelligible as a definition |
| *catechumeni* | catechumens | corpus-attested |
| *archisynagogus princeps* | the chief ruler of the synagogue | 0450A |
| *spiritus* (lower-case, 0444D) | **the spirit** | ⟵ `cruces-0000.md` §V — mirrors the plate. The stint's one lower-case site |
| *norma nostra* (glossing *Stephanus*) | **our rule** | 0440C |
| *conjugium* (glossing *Hebron*) | **a marriage** | 0442B |
| *actor* / *auditor* (rhetorical pair) | the pleader / the hearer | 0440D |

**Proper names, form for form, as Migne sets them** — and this range is a genealogy, which is
where conformation is least visible: **Theodas** (not Theudas) · **Aretha** (not Aretas) ·
**Saphira** (not Sapphira) · **Sadoch** (not Zadok) · **Tharsus** (not Tarsus) · **Charra**
(Migne's *Charram* / *Charra*; the Clementine has *Charan*) · **Seor** the **Ethite** (Migne's
*Ethaei*; Gn 23 *Hetheus*) · **Hebron**, **Arbe**, **Sichem**, **Emor**, **Putiphar**,
**Ismaelites**, **Madianites**, **Madian**, **Chanaan**, **Sina**, **Lydda and Sarona**,
**Candace** / **Candaces**, **Tabitha**, **Dorcas**, **Damula**, **Aeneas**, **Oza**, **Lia**,
**Isaias**, **Fadus** the procurator, **Jesus** at 0444B (Act 7:45's Josue, and Migne prints
*Jesu*). Anglicized only where the corpus has already settled it: **Moses**, **Saul**, **Stephen**,
**Philip**, **Ananias**, **Bede**. **Jerusalem** renders both *Jerusalem* and *Hierosolymam*
(0439B), English having no second form.

---

## §Z · WHAT I DID NOT DO, AND WHY

- **No plate was read.** PL 114's spot check for this work is a recorded **checked zero** — no
  numbered `Forte` apparatus, both mid-page work divisions examined — so **no `[cn:]` is owed and
  none is missing.** That zero licenses shipping; it does **not** license the claim that this work
  has no notes, and I make no such claim.
- **No `[sic:]`** — §W and §S2, and the ship test is the reason.
- **No `[ed:]`** — nothing in these five chunks is a hole in the digitization. The four non-words
  are corruptions *of* text, not losses *of* text, and Pattern 13 is for the second.
- **No `[nt:]`** — all 115 notes in my range are attribution sigla (`(RAB.)`, `(ID.)`, `(BEDA.)`)
  or scripture locators. **Not one is editorial prose**, so Pattern 15 never fires. Judged by
  content; the longest is nine characters.
- **No `[f:]`** — runbook false positive 4. This is lemma-and-gloss commentary, not a florilegium.
- **No `[d:]`** — no run is set twice anywhere in the five chunks.
- **`(cont.)` on 0007's `CAPUT VII.` head is left untranslated** — runbook false positive 7; the
  builder merges it at assembly.
- **Column-band arithmetic not reported** — runbook false positive 1. The bands in my range skip
  letters freely (0437D → 0438A → … → 0439D → 0440A) and that is normal.
- **I did not write `cruces.md`, and I touched no file outside 0005–0009.**

---

# PART III — chunks 0010, cols 0450B–0459D

# *Glossa ordinaria*, **Actus Apostolorum** (PL 114) — chunks 0010–0013, cols 0450B–0459D

Third stint of four. Translated 2026-08-25, one translator, **4 chunks, 3,723 Latin words**
(frontmatter counts: 1,216 + 558 + 825 + 1,124) → **5,430 English words** (markers stripped),
**1.46×** — 0010 1.47 · 0011 1.45 · 0012 1.42 · 0013 1.48. In range with the first stint's
1.46–1.55.

Chapters X–XVI: Cornelius and the sheet, Peter's deliverance, the first missionary journey,
the Jerusalem council, the call to Macedonia.

**Apparatus fired: 21 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]` · 107 `[n:]`** (exact parity with the Latin twins: 31 + 12 + 32 + 32).
Distribution of the `[var:]`: 0010 ×8 · 0011 ×2 · 0012 ×5 · 0013 ×6.

Zero guillemets in either language. **Zero em-dashes in the English.** Question marks: Latin
3 / English 3, in the same bands (0450C, 0455B, 0456A). `verify-english.mjs` clean over this
range — its only complaints are the fourth stint's still-missing 0014–0017.

⚠ **This file is `cruces-0010.md`, not `cruces.md`.** Three peers hold 0000–0009 and
0014–0017; the merge is the launcher's.

---

## §V · VOCABULARY — inherited from `cruces-0000.md` and `cruces-0005.md`, and where I extended it

⭐ **Both peer cruces were read off disk before a word of this stint was written**, and the
table in `cruces-0000.md` §V was taken as binding rather than re-derived. Inherited and held:

| Latin | English | where it bites in 0450B–0459D |
|---|---|---|
| *doctor* | **teacher**, never "doctors" | 0450D *doctor Ecclesiae* → "a teacher of the Church"; 0454D *prophetae et doctores* → "prophets and teachers"; 0459A *aliquos doctores* → "certain teachers". 3 occurrences, zero "doctors". |
| *charitas* | **charity** · *dilectio*, *amor* | **love** | 0457D *latitudine charitatis* → "the breadth of charity"; 0451C *in sola Dei dilectione* → "in the love of God alone". Both stand in this range, and they are held apart. |
| *scientia* | **knowledge** · *sapientia* | **wisdom** | 0459C *Propter potentiam et scientiam* → "On account of power and knowledge" (four occurrences in one sentence). No *sapientia* in this range. |
| *interpretatur* | **is interpreted** | 0454D *ascendens interpretatur* · 0454D *Elymas … interpretatur* · 0454D *Saulus interpretatur*. 3 occurrences. |
| *usque ad* (formula) | **as far as** | 17 of the 18 occurrences; censused per occurrence, §4. |
| *coenaculum* | **upper room** | 0451A *in coenaculum* → "into the upper room", against *in superiora* → "into the upper parts" in the same sentence. The gloss is built on the contrast, so the two must not collapse. |
| *Ecclesia* / *ecclesia* | **capitalization mirrors the plate, word for word** | see §5. |
| *Spiritus* / *spiritus* | **mirrors the plate the same way** | see §5. |
| *testamentum* | **testament**, never "covenant" | 0455B–C *testamentum aeternum* → "an everlasting testament", set against *pactum sempiternum* → "an everlasting covenant" in Migne's own next sentence. **Collapsing them would erase the point of his *In Hebraeo*.** |
| *virtus* | decided per occurrence | "power" at 0452B (*virtute signorum*), 0459B (*major virtus … liberantis*), 0459C (*virtus orationis*); no moral *virtus* except 0450B *Non virtutibus ad fidem, sed fide pertingebat ad virtutes* → "virtues", which is unambiguously moral. |
| *pascha* | **pasch** | not in this range; recorded so the merge knows it was looked for. |

**Extensions declared here rather than smuggled** (three, all forced by words the first two
stints did not meet):

- ***designat* → designates**, held apart from *significat* → **signifies** and *signatur* →
  **is betokened**. All three stand in this range and two of them within eight lines:
  0451B *Designat autem in hoc coelos gentibus esse apertos* and *Vas illud **designat**
  Ecclesiam* against 0451C *quam Petrus **significat*** and 0459A *Purpura recte sanguinem
  colore et natura **designat*** against 0455D *Significat autem eos qui natura gentiles
  erant*, with 0459C *Velocitas obedientiae **signatur*** → "is betokened". The *signat*/
  *significat* split is 8964 §M's; *designat* is the third verb and it needed its own word.
- ***gentes* / *gentibus* / *gentium* → the Gentiles**, and ***gentilis* → gentile** (adj.),
  throughout. Fixed at 0450C and held for all four chunks. The reason is that this range is
  *about* the Gentile mission and the same noun is re-quoted across chapters; the first stint's
  *gentium apostolus* → **"apostle of the Gentiles"** (0429D) is the anchor and 0453C
  reproduces that exact phrase, so the seam is checkable. ⚠ **Note for the merge:** the first
  stint renders *omnes gentes* "all nations" at 0432D in a Pentecost-tongues context. I have
  not touched it and do not think it should be swept — the sense there is peoples-with-tongues,
  not the Gentile church — but the divergence is real and is flagged rather than hidden.
- ***quadragenarius* → quadragenary** (0452C, *in illo quadragenario dierum numero* → "in that
  quadragenary number of days"), after 8965's substantival number-names (the senary, the
  quaternary, the octonary) as carried into 8964 §M. The neighbouring ***quaternio*** is
  **kept as "quaternion"** at 0453D–0454A for the same reason the *coenaculum* pair is kept
  apart: *Quaternio dicitur princeps quatuor militum. Sicut enim centurio centum, ita quaternio
  quatuor sub se milites habet* **is an etymology**, and "a file of four soldiers" would leave
  the centurion parallel explaining nothing. The lemma therefore reads *To four quaternions,*
  not Douay's "to four files of soldiers".

**Biblical name forms — Douay-shaped, and consistent across all four chunks**, matching the
peers: **Isaias · Ezechiel · Chanaan · Jonas · Judaea · Moses · Jerusalem**. (*Judea* was
written twice in draft and corrected to the peers' **Judaea** before filing; recorded because
a silent conformation to a peer's form leaves no trace that the two ever differed — 8964 §M.)

**Proper names form for form as Migne prints them**, and these are the places the familiar
English Bible would have overwritten him — every one was checked against the Latin, not
against the Acts I know in English:

- **0454D *Salamina*, not Salamis.** *Abierunt Seleuciam, quae est Salamina.* Rendered
  **"Salamina"**.
- **0454D *Niger* kept untranslated as the name**, because the gloss *is* the etymology
  (*A colore, si Latinum est*): "Niger" is the only English in which "From the colour" explains
  anything.
- **0454D–0455A *Sergius* and *Paulus* for the proconsul, *Paul* for the apostle.** Migne
  prints *Paulus* for both and the gloss turns on their being the same word
  (*A Sergio Paulo … sortitus est nomen Pauli*), so the English keeps **Sergius Paulus** as
  the man's name and **Paul** as the apostle's, which is the received English of each. The
  identity is not lost: "From Sergius Paulus the proconsul … he obtained by lot the name of
  Paul."
- **0455B *Chanaan*** (not Canaan) · **0455B–C *Isaias*** (not Isaiah) · **0457C *Ezechiel***
  (not Ezekiel) · **0450C *Jonas*** (not Jonah) · **0453C *Caesarea*** for Migne's *Caesaraeam*
  (the ordinary medieval *ae*, Pattern 9, the class the first stint ruled on at *Andraeas*).
- ⭐ **0459A *Lydda*, not Lydia** — see §2.4. This is the sharpest conformation trap in the
  range and it is the reason the fourth test is run.
- **0459A *Thracia*** kept as printed, although the lemma two words earlier is *Samothraciam*.
  Migne's own shortening; not normalized.
- **0452A *Ananias and Sapphira*** · **0454A *Herod*** · **0458B *Silas*, *Mark*, *Judas*** ·
  **0458C *Timothy*, *Titus*** — the received English of Migne's forms, no divergence in any.

**Second person (Pattern 17)** — 5 archaic tokens in this range, every one fixed by the Latin's
own morphology: 0450C *misereatur **tui*** → "have mercy on **thee**" and *qui misericors est*
→ "**thou** art merciful"; 0451C *ut hostias Deo **facias*** → "that **thou** mayest make";
0455C *Eris caecus* → "**Thou** shalt be blind"; 0458C *quod non **feceris*** → "what **thou**
hast not done". **Every plural stays *you***: 0452B *Vos scitis* → "You know", 0452D *Vos
venistis … ut testes sitis* → "You have come … that you may be witnesses", 0453A *Vos autem
baptizabimini* → "you shall be baptized", 0458A *quae vobis fieri non vultis* → "which you
would not have done to you", 0455C *Non credetis* → "You will not believe".

---

## §1 · THE LEMMA COLLATION — every italic span in cols 0450B–0459D, walked

`data/briefs/8976-lemmata.txt` was walked line by line for these bands. **Every reading below
was fetched at its own verse in `sources/vulgate/clementine-flat.txt`, cited by book
chapter:verse — never from the pre-scan's "occurs somewhere" mark and never from
recollection.** The agreements are listed as well as the divergences, because a findings-only
list cannot be told apart from a report by an agent that never looked.

### 1.1 · THE TWENTY-ONE `[var:]` FIRED

All in the house form — `[var: Vulg. <Book> <ch>:<v> *word* …]`, book, chapter and verse
explicit, per 8964 §M's ruling against the bare form.

| col | Migne prints | Clementine (verse fetched) | why it fired |
|---|---|---|---|
| **0450C** | *Cur introisti ad viros praeputium habentes* `[n: (Act. XI)]` | **Act 11:3** *Quare introisti ad viros praeputium habentes* | A word replaced in a quotation Migne formally cites. Sense unchanged; marked because the reader can look it up and a re-quotation of the Jerusalem objection is exactly what a reader of Act 11 will come here to check. |
| **0450C** | *Beati misericordes, quoniam misericordiam,* etc. `[n: (Matth. V)]` | **Mt 5:7** *Beati misericordes : quoniam **ipsi** misericordiam consequentur* | A word dropped **inside** the quotation, before the *etc.*, not at the cut. |
| **0451C** | *usque ad, **Sanctorum vero** conversatio **est in coelis*** `[n: (Philipp. III)]` | **Phlp 3:20** ***Nostra autem** conversatio **in caelis est*** | ⭐ Subject and word order both changed: Paul's *our* becomes *of the saints*. The abridgment tail is Migne's own printed text and it asserts something the apostle does not. |
| **0452A** | *eleemosynae tuae **in memoria habitae sunt coram Deo*** | **Act 10:31** *eleemosynae tuae **commemoratae sunt in conspectu Dei*** | ⭐⭐ **The most load-bearing divergence in the range.** Two clauses replaced — and Migne's **very next lemma is *In conspectu Dei***, the phrase his own quotation has just displaced with *coram Deo*, glossed *In Graeco, In conspectu Dei adsumus*. The gloss expounds a phrase its own proof-text no longer contains. Conforming the quotation would have destroyed the evidence for that. |
| **0452C** | ***Donec** illud bibam vobiscum in regno Patris mei* `[n: (Matth. XXVI)]` | **Mt 26:29** ***cum** illud bibam vobiscum **novum** in regno Patris mei* | Conjunction replaced and *novum* dropped, in a proof-text adduced for the fact of drinking. |
| **0452D** | *Spiritus **enim** ubi vult spirat* `[n: (Joan. III)]` | **Jo 3:8** *Spiritus ubi vult spirat* | A connective added inside a cited quotation. |
| **0453A** | *Vos autem baptizabimini **in** Spiritu sancto* `[n: (Act. XI)]` | **Act 11:16** *vos autem baptizabimini Spiritu Sancto* | ⭐⭐ **A one-word addition that carries the argument.** The sentence is *ut rationi copuletur auctoritas, etiam **in** Spiritu baptizatur, secundum illud* — the whole appeal is to baptism **in** the Spirit, and the preposition Migne supplies is the one the Clementine does not print. Its partner proof-text (*In uno Spiritu*, 1 Cor 12:13) does have it. |
| **0453A** | *In uno Spiritu baptizati sumus* `[n: (I Cor. XII)]` | **1Cor 12:13** *Etenim in uno Spiritu **omnes nos in unum corpus** baptizati sumus* | Four words excised from the middle of the quotation with no *etc.* |
| **0453B** | *Ab Aquilone aurum **veniet*** | **Job 37:22** *Ab aquilone aurum **venit*** | Present made future in a verse the gloss then reads as *already* fulfilled (*prius … splendor fidei **exortus est***). |
| **0453D** | *Nolite solliciti esse **de crastino*** `[n: (Matth. VI)]` | **Mt 6:34** *Nolite **ergo** solliciti esse **in crastinum*** | The dominical precept the whole paragraph is a defence of. |
| **0455A** | *usque ad, Ego sum minimus apostolorum* `[n: (I Cor. XV)]` | **1Cor 15:9** *Ego **enim** sum minimus Apostolorum* | Connective dropped in the abridgment tail. Marked for symmetry with the Jo 3:8 addition: the same class in the other direction, and marking one while logging the other would be arbitrary. |
| **0455B** | ***Non veni** nisi ad oves quae perierunt domus Israel* `[n: (Matth. XV)]` | **Mt 15:24** ***Non sum missus** nisi ad oves, quae perierunt domus Israel* | ⭐ A different verb in the proof-text for the *Vobis*, i.e. to the Jews first: *I came not* for *I was not sent*. |
| **0455C** | *Constituam vobis testamentum aeternum sancta David fidelia*, ascribed to *Isaias* | **Is 55:3** *et feriam vobiscum pactum sempiternum, misericordias David fideles*; **Act 13:34** *Quia dabo vobis sancta David fidelia* | ⭐ The quotation Migne puts in Isaias's mouth stands in neither place: it is Acts' predicate on Isaias's frame. **And Migne prints the true Isaias two lines later under *In Hebraeo*,** which is what makes the conflation legible instead of invisible. |
| **0455C** | *Admiramini et **dispergimini*** | **Act 13:41** *Videte contemptores, et admiramini, et **disperdimini*** | ⭐⭐ **A divergence the gloss then argues from.** Migne's own line above prints *disperdimini* (in his report of the Greek); here he prints *dispergimini* — *be scattered* for *be destroyed* — and glosses it **of the scatterings**: *ab Assyriis et Chaldaeis, novissime a Romanis*. The English holds the two apart, "be destroyed" above and "be scattered" here. Collapsing them would leave the gloss expounding a word not on its page. |
| **0456A** | *Posui te in **lumen gentibus*** `[n: (BEDA.)]` | **Act 13:47** *Posui te in **lucem gentium*** (Is 49:6 *dedi te in lucem gentium*) | Noun and case both changed in the lemma the paragraph is built on. |
| **0457B** | *Invocabunt **sacerdotes** nomen meum super filios Israel* `[n: (Num. VI)]` | **Nm 6:27** *Invocabunt**que** nomen meum super filios Israel* | ⭐⭐ **The inserted word is the argument.** The gloss adduces this verse, and Ps 98:6 immediately after it, to explain *super quas invocatum est nomen meum* — and both quotations are made to say **priests**. The Clementine's Numbers has no *sacerdotes* at all. |
| **0457B** | *Moyses et Aaron sacerdotibus ejus* `[n: (Psal. XCVIII)]`, etc. | **Ps 98:6** *Moyses et Aaron **in** sacerdotibus ejus* | The preposition dropped. Rendered **"Moses and Aaron his priests"** — a bare apposition, which is what the printed words are; supplying "among" would have restored *in* silently. Latin case has no English exponent here (Pattern 9 family) and the marker carries the difference. |
| **0457C** | *Omne morticinum et captum a bestia de avibus et pecoribus, **sacerdotes non comedant*** `[n: (Ezech. IV)]` | **Ez 44:31** *Omne morticinum, et captum a bestia, de avibus et **de** pecoribus, **non comedent sacerdotes*** | Second *de* dropped, and the indicative future turned to a jussive subjunctive in a sentence adduced as a **precept** (*Hoc praeceptum convenit servare*). ⚠ The citation numeral is also wrong — §P. |
| **0458B** | ***Viduae** filius* | **Act 16:1** *filius mulieris **Judaeae fidelis*** | ⭐⭐ **Self-witnessing, like the first stint's 0435B.** Migne's lemma reads *the son of a widow*, and his gloss's very first words are *Vel **Judaeae*** — he offers the Clementine's word as the alternative to his own lemma, then argues from it (*Eam vero fuisse genere Judaeam, apparet ex hoc quod ait patre gentili*). Conforming the lemma would have made the gloss's "Or" gloss nothing. |
| **0458C** | *Sed propter subintroductos **fratres falsos*** | **Gal 2:4** *sed propter subintroductos **falsos fratres*** | A transposition inside a quotation cited as Paul's own words. Marked rather than logged only because the run is short enough that the inversion is the whole difference. |
| **0459B** | *Misit in interiorem carcerem, et pedes eorum strinxit ligno* | **Act 16:24** *misit **eos** in interiorem carcerem, et pedes eorum strinxit ligno* | The object dropped. ⚠ **The English is rendered objectless too** — "*He put into the inner prison, and made their feet fast in the stocks*" — because supplying "them" is exactly the silent repair 7a forbids, and the marker is what makes the hole legible rather than a typo. See §3.6. |

**Every `[var:]` content was checked against the Pattern 14 mirror test** — none of the
Clementine readings quoted inside a marker occurs verbatim in the Latin twin of the chunk it
annotates. Checked individually for the eight in 0010, the two in 0011, the five in 0012 and
the six in 0013.

### 1.2 · DIVERGENCES FOUND, MARKER **DECLINED**, with the reason each lost

Pattern 14 fires on a divergence that changes the sense, and Addendum B's ship test says the
crux is always available and always safe. These are real, checked, and recorded here because
a reader is entitled to know they were seen.

- **0450C · *Nunquid aquam*** — Act 10:47 prints *Numquid*. Migne's *nunqu-* orthography
  stands all over the corpus (with *coelum*, *tanquam*, *sylva*). Pattern 9: not a divergence.
- **0450C · *Joppen*** — Act 10:5 has *in Joppen*; the lemma is clipped at the noun
  (convention 3). Englished "Joppa".
- **0450D · *Hospitatur*** — Act 10:6 *hic hospitatur apud Simonem quemdam coriarium*. A
  one-word lemma clipped at the verb; nothing elided within it.
- **0451A · *Apparentibus illis*** — this is Migne's **own** *alia littera*, introduced as
  such. He is reporting a variant, not misquoting the Vulgate; a `[var:]` would tell the
  reader twice and blur whose observation it is (first stint §1.3, same ruling).
- **0451A · *in coenaculum*** — likewise an *alia littera* Migne names as one.
- **0452D · *In nomine Christi*** (Act 10:48 *in nomine Domini Jesu Christi*) — a compressed
  lemma, and the gloss's own next sentence prints the fuller form (*Lucas tamen testatur in
  nomine Jesu Christi illum dari*), so both are on the page already.
- **0453B · *dispersi erant, pertransibant evangelizantes verbum*** — **not** Act 11:19 at all
  but **Act 8:4**, which Migne says himself (*Revertitur ad id quod dixerat*). Clementine
  Act 8:4 reads *Igitur qui dispersi erant pertransibant, evangelizantes verbum **Dei***; the
  *Dei* falls after Migne's stop. A clip, not a variant.
- **0453D · *Et prophetabunt filii vestri*** `[n: (Joel. II)]` — Joel 2:28 continues *et
  filiae vestrae*. Migne stops where the argument stops.
- **0455C · *In Graeco: Audite contemptores, et respicite et disperdimini*** — Migne's own
  report of the Greek, announced as such. Unmarked by construction; and it is the control that
  makes the *dispergimini* marker four lines later worth firing, because it shows he can print
  *disperdimini* when he means it.
- **0455D · *colentium Deum, sicut in Graeco habetur*** — again his own textual note against
  Act 13:43's *colentium advenarum*. He is doing the criticism; we are not.
- **0456A · *Posui vos*** — the gloss's own counterfactual (*Non ait, Posui vos*), not a
  quotation.
- **0456A · *Religiosas mulieres*** — Act 13:50 prints *mulieres religiosas*. A transposition
  in a two-word lemma with no sense change; **logged, not marked**, and this is the one place
  I am aware my line sits close to the Gal 2:4 marker two chunks later. The difference I acted
  on: Gal 2:4 is a quotation of Paul introduced by *quod dicit*, where the wording is the
  point; this is a bare lemma address, where the order of an adjective is not.
- **0456B · *Deus autem pacem fecit*** — Migne's own note that the Greek has a clause *quidam
  Latini codices minus habent*. His observation, unmarked.
- **0458A · *Solus autem Judas abiit Jerusalem*** — Act 15:34 *Judas autem solus abiit
  Jerusalem*. Word order only.
- **0458C · *Custodire dogmata, quae erant*** — Act 16:4 reads *custodi**ri***. ⛔ **Declined
  deliberately, and the reason is the file, not the reading:** `sources/vulgate/README.md`
  records that later upstream corrections are not applied, so a call turning on a single
  letter has to say so rather than trust this copy to that precision. Nothing in the gloss
  turns on active against passive. **Raised, not marked.**
- **0459D · *Cumque perduxisset, apposuit eis mensam*** — Act 16:34 *Cumque perduxisset **eos
  in domum suam***. An ellipsis in the lemma; and the gloss under it names what was elided
  (*ingressus domus, et mensae appositio*), so nothing is concealed.

### 1.3 · THE LEMMATA CHECKED AND FOUND TO **AGREE WITH THE CLEMENTINE EXACTLY**

Named, because the brief requires the negatives. Each was fetched at its own verse.

**Act 10 (chunk 0010):** *Vir autem* (10:1) · *Cornelius* · *Religiosus* (10:2) · *Is vidit*
(10:3) · *Angelum Dei* · *Introeuntem* · *Corneli* · *Et nunc mitte viros* (10:5) ·
*Hospitatur* (10:6) · *Et cum discessisset* (10:7) · *Militem* · *Appropinquantibus* (10:9) ·
*in superiora* · *Cum esuriret* (10:10) · *Coelum apertum* (10:11, Clem. *caelum*) · *Vas
quoddam* · *Linteum* · *De coelo in terram* (Clem. *de caelo*) · *Omnia quadrupedia* (10:12) ·
*Occide* (10:13) · *Descendens* (10:21) · *Ecce ego* · *Quae causa est* · *Responsum accepit*
(10:22) · *In domum* · *Introducens* (10:23) · *Convocatis cognatis* (10:24) · *Et loquens*
(10:27) · *Et ecce vir* (10:30) · *In conspectu Dei* (10:31) · *Non est personarum acceptor*
(10:34) · *Vos scitis* (10:37) · *Qui pertransiit* (10:38) · *Et bibimus* (10:41) · *Spiritus*
(10:45). Also the inline **Job 1:1** *Vir erat in terra Hus, nomine Job* — verbatim.

**Act 11–12 (chunk 0011):** *Quadrupedia terrae* (11:6) · *Ergo et gentibus* (11:18) · *Et
illi quidem* (11:19) · *Erant autem quidam* (11:20) · *Multusque numerus* (11:21) · *Et
miserunt Barnabam* (11:22) · *Et hortabatur* (11:23) · *Tarsum* (11:25) · *Ut quaereret
Saulum* (11:25) · *Discipuli, Christiani* (11:26) · *In his* (11:27) · *Prophetae* (11:27) ·
*Quatuor quaternionibus* (12:4) · *Volens* · *Milites, vinctus* (12:6) · *Lumen* (12:7) ·
*Percussoque* (12:7) · *Ad se reversus* (12:11) · *Processit puella* (12:13) · *Angelus ejus
est* (12:15) · *Tacerent* (12:17) · *Confestim* (12:23).

**Act 13–14 (chunk 0012):** *Erant autem in Ecclesia* (13:1, and see §5 on the capital) ·
*Niger* · *Missi a Spiritu sancto* (13:4) · *Abierunt Seleuciam* · *Sergio Paulo* (13:7) ·
*Elymas* (13:8) · *Avertere* · *Saulus* (13:9) · *Qui et Paulus* · *Et nunc* (13:11) · *Eris
caecus* · *Antiochiam Pisidiae* (13:14) · *Sederunt* · *Terra Chanaan* (13:19) · *Dedit*
(13:20) · *Vobis* (13:26) · *Judicantes* (13:27) · *Sancta David fidelia* (13:34) · *Non
dabis* (13:35) · *Videte contemptores* (13:41) · *Admiramini* · *Non credetis* · *Et
colentium* (13:43) · *Primum* (13:46) · *Aeternae vitae* · *Sic enim* (13:47) · *Posui te* ·
*Praeordinati* (13:48) · *Excusso pulvere* (13:51) · *Confugerunt* (14:6) · *Et universam* ·
*Levaverunt* (14:10) · *Coronas* (14:12) · *Implens cibo* (14:16) · *Traxerunt* (14:18) · *Ut
permanerent in fide* (14:21) · *Quoniam per multas tribulationes* (14:21). Also the inline
**Ps 1:4** *pulvis quem projicit ventus a facie terrae* · **2Cor 11:25** *Semel lapidatus sum*
· **Act 9:4** *Saule, Saule, quid me persequeris?* · **Is 55:3** *Et feriam vobiscum pactum
sempiternum misericordias David fideles* (Migne's *In Hebraeo* quotation — **verbatim**, which
is what convicts the quotation above it).

**Act 15–16 (chunk 0013):** *Seditione* (15:2) · *Statuerunt* · *Conveneruntque apostoli*
(15:6) · *Per os meum* (15:7) · *Fide purificans* (15:9) · *Tacuit autem omnis multitudo*
(15:12) · *Et postquam* (15:13) · *Revertar et reaedificabo* (15:16) · *Super quas invocatum*
(15:17) · *Invocatum est* · *Ego judico* (15:19) · ⭐ ***Et suffocatis*** **(15:20)** ·
⭐ ***Et sanguine*** **(15:20)** · *Tunc placuit* (15:22) · *Apostoli et seniores* (15:23) ·
*Fratribus ex gentibus* · *Salutem* · *Evertentes animas* (15:24) · *Visum est* (15:28) ·
*Spiritui sancto* · *Et nobis* · *Quam haec necessaria* · ⭐ ***Ut abstineatis vos*** **(15:29)**
· *Visum est autem* (15:34) · *Visum est autem Silae ibi remanere* (15:34) · *Dissensio*
(15:39) · *Assumpto Marco* · *Electo Sila* (15:40) · *patre gentili* (16:1) · *Et circumcidit*
(16:3) · *Et ecclesiae quidem* (16:5) · *Tentabant ire* (16:7) · *Vir Macedo* (16:9) · *Adjuva
nos* ×2 · *Samothraciam* (16:11) · *Aliquot, conferentes* (16:12) · *Purpuraria* (16:14) ·
*Coegit nos* (16:15) · *Subsecuta Paulum* (16:17) · *Miserunt eos in carcerem* (16:23) · *Media
autem nocte* (16:25) · *Terrae motus factus est magnus* (16:26) · *Procidit* (16:29) · *Lavit
plagas eorum* (16:33) · *Continuo* (16:33).

### 1.4 · ⭐⭐ THE APOSTOLIC DECREE — the crux the brief named, and what the check actually found

The brief flagged Act 15:20 and 15:29 as a place where Migne and the received text may part.
**They do not part in the lemmata, and that is the finding.**

- **Act 15:20.** Clementine: *sed scribere ad eos ut abstineant se a contaminationibus
  simulacrorum, et fornicatione, et suffocatis, et sanguine.* Migne glosses two clauses of it,
  ***Et suffocatis*** and ***Et sanguine***, **both verbatim**. He prints no *et a fornicatione*
  lemma and no golden-rule clause here. The four-clause Clementine decree is what stands.
- **Act 15:29.** Clementine: *ut abstineatis vos ab immolatis simulacrorum, et sanguine, et
  suffocato, et fornicatione : a quibus custodientes vos, bene agetis.* Migne's lemma is
  ***Ut abstineatis vos,* etc.** — agreeing exactly as far as it is printed, and the gloss
  under it is a Tertullian abridgment about food.

⭐ **But the Western decree is in the range — in the GLOSS PROSE, not in a lemma.** At
**0458A**, glossing *Quam haec necessaria*, Migne writes: *Haec necessaria sunt sine quibus non
est salus, sed circumcisio necessaria non est: **verum ea quae vobis fieri non vultis, alii ne
faciatis.*** That is the **negative golden rule**, the clause the Western text adds to the
decree at 15:20 and 15:29, and the gloss plainly knows it as part of *haec necessaria* — it
supplies the fourth item where the Clementine's fourth item is *fornicatione*.

⛔ **No `[var:]` fired, and the reason is the pattern's own scope.** Pattern 14 marks *Migne's
scripture **citation*** diverging from the received text. This is not printed as a citation: it
is roman, not italic, carries no `[n:]`, and is grammatically part of the gloss's own sentence
(*verum … ne faciatis*, continuing *sed circumcisio necessaria non est*). Firing a `[var:]` on
it would be asserting that Migne quotes Acts here, which he does not — he *reasons* from a form
of the decree he has. **The rival I weighed and rejected** was marking it against Act 15:29
with a note naming the Western reading; it lost because the marker would misdescribe the
typography, and because the crux can say the whole thing and a marker cannot.

Both negatives are rendered on their printed hosts: *non* on *vultis* ("which you would **not**
have done to you"), *ne* on *faciatis* ("**do not** to another"), with *alii* dative singular
kept singular.

---

## §2 · PLATE CANDIDATES — five raised, **ZERO markers**, following 8964 §W

Addendum A's split governs: **a non-word is worth raising and has been right every time; a
real, well-formed word that reads oddly is MIGNE'S until a plate says otherwise** — render as
printed, log, fire nothing. None of these blocks the work, which is the point of the ship test.

### 2.1 · 0451C · *Mundacavi* — a NON-WORD, and the likeliest of the five

`VERS. 14.-- *Mundacavi,* etc.` Act 10:14 reads *numquam **manducavi** omne commune et
immundum*, and **Migne's own gloss underneath is built on *manducare***: *Qui **manducat**
cibum foris positum in suum trajicit corpus.* *Mundacavi* is no Latin word at all — a
metathesis of *manducavi*. **Rendered for its evident sense, "*I have eaten,* etc.", logged,
no marker.** A `[sic:]` would blame Migne's plate for what Addendum A says has been the
digitization six times out of six; the corpus-frequency argument is exactly the argument that
loses on real words and wins on non-words, and this is a non-word.

### 2.2 · 0453A · *paritet* — the second non-word

*qui etiam Patrem dicit, et Filium et Spiritum **paritet** ostendit.* For *pariter*. Rendered
**"alike"**, logged, no marker, same reasoning.

### 2.3 · 0455A · *e c.* — split type in the abridgment formula

*A Sergio Paulo dictus est apostolus, Paulus, **e c.,** usque ad, Ego sum minimus apostolorum.*
Every other resumption in this range is introduced by *etc.*; this one is broken across a
space. Pattern 10 would carry the whole run in a `[sic:]`, and **I declined that**: the run is
*etc.* and nothing else, the class is the digitization's per Addendum A, and 8964 §W's
thirteen candidates took zero markers for the same reason. **Rendered "etc.", logged.**

### 2.4 · ⭐ 0459A · *Lydda* — a REAL word, and it stays

*Lydda apostolum, cum sociis suis domum intrare coegit.* The woman of Act 16:14 is **Lydia**;
*Lydda* is the town of Act 9:32–38, a different place and a real, well-formed name. Addendum A
is decisive: **a real word that reads oddly is Migne's.** Rendered **"Lydda"**, logged, no
marker. ⛔ **This is the conformation trap of the range** — "Lydia" is what the English Acts
supplies before the Latin is read, it would have parsed perfectly, and nothing mechanical
would have seen it. It is the same class as the peer batch's *Absalom*→*Absalon*.

### 2.5 · 0458D · *Hoc es* — where the evidence points at OUR file, and I say so

*Hoc **es** [0458D] superioribus capitulis saepius expositum.* *es* is a real word ("thou
art") and cannot stand here; *est* is what the sentence needs. ⚑ **The reverse rule the brief
names applies, and I am naming it:** the defect sits **immediately before the column-break
anchor**, which is where our archive copy's transcription is weakest, and Migne prints *Hoc
est* correctly in the ordinary way everywhere else in the work. **On that evidence this is
more likely ours than his, so I decline any marker and do not attribute it to the plate.**
Rendered for its evident sense ("This has been more often expounded"), logged, and offered as
a `data/tei-patches/8976.json` candidate for whoever reads PL 114 p. 231 — not as a `[sic:]`.

### 2.6 · Suspiciously TIDY forms — a checked negative

Brief §4 and Addendum C ask for forms that read *too well* in a rough passage. I looked at the
neighbours of every line I examined closely and found **none to raise**. Recorded as a checked
negative, because the class is invisible from the Latin alone and a silent pass is
indistinguishable from not looking. The forms I considered and cleared: *praeposteravit*
(0452D, rare but well formed and exactly right), *effoetandi*-class gerunds (none here),
*conchyliorum* (0459A), *feminalibus* (0458C — the priests' linen breeches, Ex 28:42's word).

### 2.7 · The `. [a-z]` class the first stint found at 0435B — **ZERO in my range**

Searched all four chunks for a full stop followed by a lower-case word (the shape that turned
out to be our punctuation rather than Migne's colon). **No occurrences in 0450B–0459D.**
Recorded as a checked negative so the merge does not have to re-run it.

---

## §3 · MIGNE'S OWN TROUBLE — rendered as printed, logged, nothing repaired

### 3.1 · ⚠ 0452D · A SENTENCE WITH NO TERMINAL MARK, and the English has none either

*nunquid quod minus est, potest prohibere **Vos venistis** ad hoc ut testes sitis, ergo
judicate.* The capital *V* shows a sentence boundary; **no mark stands before it in our Latin.**
Pattern 8 forbids supplying one, so the English reads *"can he forbid what is less You have
come for this, that you may be witnesses, therefore judge."* ⛔ It reads as a defect because it
**is** one, and it is visible in the facing column. A plate read of PL 114 p. 228 would settle
whether Migne prints a `?` there (the sense wants one) or whether the digitization dropped it;
on the first stint's 0435B precedent — where the plate turned out to print a colour our file
had flattened — **our file is the likelier culprit**, and that is why nothing was supplied and
no `[ed:]` was fired (Pattern 13 wants demonstrated loss, and this is inferred loss).

Same paragraph: **the unexpressed subject of *potest prohibere*.** Two readings construe.
(a) *Deus*, the nearest subject, carried on from *Quasi Deus … prius dedit* — "can **he**
forbid what is less". (b) An indefinite *quis*, as Act 10:47 itself prints (*Numquid aquam
**quis** prohibere potest*) — "can **anyone** forbid". **(a) was taken**, because it is the
subject the sentence prints and (b) requires importing a word from the verse the gloss is
abbreviating. The rival is named here because a reader will weigh it.

### 3.2 · 0452A · *zelus ultionis ejus aperuit potestatis* — a bare genitive with nothing to govern it

*Communionem aequalitatis meruit sanctitas actionis, sicut in Ananiae et Sapphirae culpa zelus
ultionis ejus aperuit **potestatis**.* *potestatis* has no head noun. Real words throughout, so
Addendum A holds and nothing is marked. **Rendered by taking *potestatis* with an elided
*zelum* carried over from the same sentence — "the zeal of his vengeance laid open that of his
power" — which is the one construction the printed words allow.** ⛔ **The rival, and why it
lost:** *[magnitudinem] potestatis aperuit*, "disclosed the greatness of his power", is the
smoother conjecture and is probably what a modern editor would print; it lost because it
requires supplying a noun that is nowhere in the sentence, whereas *zelum* is four words back.
**No conjecture is put in the text.**

### 3.3 · 0450C · *vocantem cum* — *cum* standing where the object must

*Introeuntem, ad se forsitan, vocantem **cum**.* A preposition with no object, in the accusative
slot of *vocantem*; *eum* is the evident reading. Rendered **"calling him"** for the evident
sense, on 8964 §W's precedent (a stranded *est* handled the same way), logged, **no marker and
no patch**. ⚠ It is a real word, so Addendum A's presumption is Migne's; the reason I rendered
the sense rather than "calling with" is that *cum* here is not *odd*, it is syntactically
impossible, and Pattern 7's "render as closely as the printed words allow" allows nothing else.
Flagged as a plate candidate.

### 3.4 · 0453D–0454A · *catenae carcer* — a missing comma inside a list of four

*Quatuor difficultates cumulant custodiam: milites, catenae carcer, custodes.* The gloss counts
**four** and prints three commas' worth of separation for four items. Rendered exactly:
*"soldiers, chains prison, guards"*. Pattern 8: never supply. Logged; a plate read would settle
it and nothing depends on the answer.

### 3.5 · 0452D · *Spiritus, domum Dei est* — the accusative where a nominative belongs

*Spiritus, **domum** Dei est, inquantum eis datur qui per eum diligunt Deum.* Two sentences
later Migne prints the word the argument needs: *Ita enim datur sicut **donum** Dei.* **Rendered
as printed — "The Spirit is the house of God"** — because *domum* is a real, well-formed word
and Pattern 7 renders what is printed; Latin case has no English exponent in a predicate
nominal, so nothing else was normalized. ⛔ **The rival, and why it lost:** *donum*, "the gift
of God", which the same paragraph prints and which is plainly the sense. It lost the *text*
under Pattern 7 and it is recorded here, which is where a conjecture belongs. **No marker:**
Addendum A refutes the corpus argument on real words, and the reverse rule cuts the other way
too — Migne's own next clause printing *donum* correctly makes an *n*→*m* misreading by the
digitization at least as likely as a defect on his plate, which is a reason to decline, not to
fire.

### 3.6 · 0459B · The objectless *Misit in interiorem carcerem*

Already marked at §1.1. Recorded again here because it is the one place in the range where the
English is deliberately ungrammatical: *"He put into the inner prison."* Supplying "them" would
have been the silent repair — the sentence would have read perfectly and the divergence would
have vanished — and the `[var:]` is what tells the reader the object is missing from Migne, not
from us.

### 3.7 · 0455B · *Sancta David fidelia* glossed under `VERS. 27.`

The lemma is **Act 13:34**; the address above it is **VERS. 27**, and `VERS. 35.` follows
immediately. Migne's own placement. **Reproduced exactly as printed, not moved** (the Jude
precedent in the brief). ⚑ Recorded as a checked datum for the merge: the first stint's §2.1
found displaced verse numbers in cols 0425C–0437C, the second stint found **none** in
0437D–0450A, and my range has **exactly this one**.

### 3.8 · 0459A · *aliquos doctores coepisse doceri*

*Ostendit Macedones vel angelos a Deo inspirari, vel aliquos doctores coepisse **doceri***. A
passive infinitive where an active (*docere*, "to teach") would be expected of teachers.
Rendered as printed — "or that certain teachers had begun **to be taught**" — real words,
logged, no marker. It is not nonsense: the gloss has just made the Macedonians and their angels
the ones being inspired, so teachers being taught is intelligible, if odd.

---

## §4 · THE `usque ad` CENSUS — decided per occurrence, never by rule

**18 occurrences in the four chunks. 17 are the abridgment formula; 1 is not.**

- **0010 — 8 occurrences, 7 the formula** (0450B ×2, 0450B, 0451B, 0451C, 0451C, 0452B) and
  **one that is not**: **0452C *docens per hoc quod nobiscum est usque ad consummationem
  saeculi***. Those are **Matt 28:20's own words**, inside the gloss's own sentence, with no
  italics and no resumption after them. Rendered "**until** the consummation of the world".
  ⛔ This is Addendum D's trap exactly, and it is the only one in the range.
- **0011 — 3 occurrences, all 3 the formula** (0453A, 0453B, 0454B).
- **0012 — 2 occurrences, both the formula** (0455A, 0455B). ⚑ Note that **0455A's is the
  comma form, *usque ad,* followed by the resumption inside the same italic span** —
  `*usque ad, Ego sum minimus apostolorum [n: (I Cor. XV)]*` — as is 0010's at 0451C. The
  italic structure is preserved 1:1 in both.
- **0013 — 5 occurrences, all 5 the formula** (0457A, 0457A, 0457C, 0458A, 0458C).

**No verb is ever supplied to complete a resumption tail** (Tobit §1(b), inherited). Four tails
are left with an unexpressed subject rather than an invented one: 0451C *sed in sola Dei
dilectione constringat* → "but may bind fast in the love of God alone"; 0452B *sed omnes
credentes acciperent* → "but that they should receive all that believe"; 0455B *et ideo
maledici meruit* → "and therefore he deserved to be accursed"; 0457A *ad fidem venisse
probatur* → "he is proved to have come to the faith". Each is named in §6.

---

## §5 · THE MIRROR RULE, within its ruled scope

8964 §M's boundary was applied and not re-opened: **mirror the plate where the case is semantic
in English; do not mirror where English has no lower-case option for the referent.**

- ***Ecclesia*** is capitalized at every occurrence in this range and is **"the Church"** at
  every one: 0450D, 0451A, 0451B ×2, 0451C, 0454D (*Erant autem in Ecclesia* — where the
  **Clementine prints lower-case *ecclesia*** and Migne's capital is his own), 0457A, 0459A.
  ⚑ **0458D *Et ecclesiae quidem*, lower case, is the one exception, and it is rendered "the
  churches"** — mirrored, verified at the source, not taken on trust. That is the pair the
  founding case is about.
- ***Spiritus*** mirrors the plate the same way, per the first stint. Lower-case *spiritu* at
  0452B (*sed **spiritu** et virtute signorum*) and lower-case *spiritus* at 0451D
  (*prophetiae **spiritus***) are rendered lower-case; every capitalized *Spiritus* is "the
  Spirit"/"the Holy Spirit".
- ***Synagoga*** capitalized at 0451A → **"the Synagogue"**, set against *gentilis populus*.
- ***Aquilone*** capitalized at 0453B → **"the North"**. English has a lower-case option for a
  cardinal direction, so this one is inside the mirror's scope.
- ***Gentiles*** capitalized at 0450B (*quia **Gentiles** grosso sensu*) and lower-case
  *gentilis*/*gentiles* elsewhere. The English holds "the Gentiles" as the fixed rendering of
  the noun (§V) and "gentile" for the adjective, which is a vocabulary decision, not a mirror
  one; recorded so the two are not confused.
- **Not mirrored, by the ruled exception:** the divine name and *Deus*/*Dominus* forms. There
  is no lower-case *dominus* or *deus* in this range, so the exception was not needed.

**Chapter heads mirror what Migne SETS**, per the house convention: `CAPUT X.` → **CHAPTER X.**
· `CAPUT XI.` → **CHAPTER XI.** · `CAPUT XII.` → **CHAPTER XII.** · `CAPUT XIII.` →
**CHAPTER XIII.** · `CAPUT XIV.` → **CHAPTER XIV.** · `CAPUT XV.` → **CHAPTER XV.** ·
`CAPUT XVI.` → **CHAPTER XVI.** Seven heads, all numerals, none spelled out.

---

## §6 · EVERY SUPPLIED PRONOUN OR SUBJECT, NAMED — the dominant defect class

The brief's rule: every "he", "she", "it" or "they" the Latin does not print is named here with
what fixes it. Where two readings construe, both are stated.

**Fixed by a printed antecedent or by the verb's own morphology — no judgment:**

- 0450D *contemnunt* → "**they** despise" = the *obedientes* of the preceding clause (3 pl.).
- 0451C *facias* → "**thou** mayest make" = Peter, from the lemma *Occide* addressed to him.
- 0451D *jubetur* → "**he** is bidden" = Peter (lemma *Descendens*, Act 10:21).
- 0452A *descenderat* → "**he** had gone down" = Peter (lemma *Introducens*, Act 10:23).
- 0452A *alienus erat* → "so far was **he** from disdain" = Cornelius, the speaker of Act 10:30
  whom *Non dicit angelum* is about.
- 0452C *nobiscum est* → "**he** is with us" = Christ, the subject of the whole paragraph.
- 0455A *subegit* → "whom **he** subdued to the faith" = Paul.
- 0455D *praeripuit sanitatem* → "snatched the healing before **her**" = the ruler's daughter,
  from *filiam principis* in the same sentence.
- 0456B *solverent* → "**they** would loose their feet" = the subject of the printed protasis
  *Si vero apostolos reciperent*.
- 0458B *conjunctus* → "**He** was joined to Barnabas" = Mark (lemma *Assumpto Marco*).
- 0458B *remanere eum fecit* → "made **him** remain" = Silas (lemma *Electo Sila*).
- 0458C *videretur* → "lest **he** should seem" = Paul, subject of *circumcidit*.
- 0459B *obviasset* → "although **she** had met them" = *femina*, printed in the same sentence.
- 0459C *illis … canentibus* → "while **they** sing hymns" = Paul and Silas (Act 16:25).
- 0459C *cur se vellet interficere* / *procidit* → "**he** wished to kill **himself**" and "**he**
  fell down" = the jailer (Act 16:27, 29).
- 0459D *amisit* → "**he** lost the stripes of his crime" = the jailer.

**Supplied with a stated reason, where English could not leave it unexpressed:**

- 0450C "occasion is given to Peter of excusing **himself**" — *excusandi* is a bare gerund;
  the reflexive comes from *excusantur apostoli* two clauses above.
- 0450C "calling **him**" — the object *cum* stands where *eum* must; §3.3.
- 0451A *significavit* → "**he** signified" = **the writer of *in superiora***, i.e. Luke, not
  Peter. Fixed by the sentence's own frame: *Dicens in superiora* is about the word chosen, and
  the *alia littera* sentence before it is about copies of the text.
- 0451C *Praecepit* → "**He** commanded therefore" = the voice of the vision, Act 10:13's
  *facta est vox ad eum*, not Peter. ⚠ Peter is the nearer noun (*quam Petrus significat*) and
  would be the wrong choice: Peter is the one commanded.
- 0451C "that thou mayest make **them** victims" — object of *facias*, from the *omnia
  quadrupedia* of the lemma two paragraphs above.
- 0451D "By this **they** persuade **him**" — *suadent* 3 pl. = Cornelius's messengers; the
  object is Peter, from the narrative and from *quia angelus jussit introire in domum **ejus***
  (Cornelius's house).
- 0456B "some Latin copies have **it** not" — "it" = the Greek clause *Deus autem pacem fecit*,
  named in the same sentence.
- 0456C *imponeret* → "or might set **them** upon **them**" — the crowns upon the victims, or
  upon the apostles. ⚠ **Both construe** and the Latin's *eis* does not decide: *quasi diis
  immolaturus* points at the apostles-as-gods of Act 14:12, while *victimis simul coronatis*
  in the next sentence points at the victims. **The English keeps both pronouns bare, which is
  as undecided as the Latin.** Named rather than resolved.
- 0457B *Domino revelante* → "when the Lord revealed **it**" — object supplied: the shadow of
  the law, subject of the sentence.
- 0457D *ut … intelligantur* → "so that **they** may be understood to wish **them** all good
  things" — the apostles (printed two clauses back) wishing the brethren.
- 0458C "But that **she** was by race a Jewess … that **he** says **he** was sprung of a gentile
  father" — three: the mother (from *Vel Judaeae*), the speaker of *ait* (the text of Acts),
  and Timothy. All three are forced by the sentence.
- 0459A *Ostendit* → "**He** shows that the Macedonians …" — ⚠ **two readings.** (a) the
  passage/the evangelist, continuing the impersonal exposition; (b) the angel of the previous
  paragraph. **(a) was taken**, because *Ostendit* opens a fresh gloss on a re-quoted lemma
  (*Adjuva nos* a second time) and every other gloss-opening third singular in this range is
  the expositor's. (b) is named because *Vel hoc dicit angelus* stands eight words earlier.
- 0459D "when he had brought **them**" — from *eis* in the same clause; Migne's lemma has
  dropped Act 16:34's *eos in domum suam* (§1.2).

**Left unexpressed on purpose** — the four abridgment tails in §4, where the subject is off the
page and inventing one would be the silent repair.

---

## §7 · THE TESTS, AND WHAT EACH RETURNED

**Test 1 — a `[sic:]` must not swallow the word it marks.** ✅ **Vacuous here: zero `[sic:]`
fired.** Ran the mechanical form anyway (strip every marker, read what is left) across all four
chunks: no stranded article or preposition sitting on punctuation, no doubled mark, and every
sentence reads aloud without its brackets. The 21 `[var:]` are all *additive* notes standing
after a complete sentence, never inside one, so nothing of Migne's is quarantined anywhere in
the range.

**Test 2 + 2a — name the host of every printed negative, then find it in the English.** Ran on
every `non · nec · neque · nisi · ne · nihil · nullus · nunquam · minus`. **Six sites fired 2a's
trigger condition** (a negative resting near a quantifier, correlative or predicate) and each
was proved from the sentence's own structure, never from what read well:

1. **0450B *Non virtutibus ad fidem, sed fide pertingebat ad virtutes.*** Host is
   ***virtutibus***, not *pertingebat* — the *sed fide* correlative pivots on the ablative.
   English: "**Not by virtues** did he attain to faith, but by faith he attained to virtues."
2. ⭐ **0453C *qui **non solus** praesumit docere plebem, sed apostolatus quaerit consortem.***
   **This is the 8990 @0614B class exactly** — a negative on a verb with *solus* adjacent. Host
   is ***solus***: the *sed* clause says he **seeks a partner**, so the point is not that
   Barnabas refuses to teach but that he will not teach **alone**. English: "who does **not
   alone** presume to teach the people, but seeks a partner of the apostleship." Rendering it
   "does not presume to teach the people" would have passed every count and asserted the
   opposite of the *sed*.
3. **0453C *non solum Judaeis, sed etiam gentibus.*** Host ***Judaeis***.
4. **0457A *haec **non** dicunt **solum** pro gentibus … sed etiam illos a lege abducere
   cupientes.*** Host is ***solum pro gentibus***, not *dicunt*.
5. **0458B *quia **non omnis** commotio est peccatum, sed irrationabilis.*** Host is
   ***omnis***, the 8990 @0611D and 8960 @0734B class. English: "**not every** commotion is a
   sin, but the unreasonable one."
6. **0458C *Permittuntur apostoli velle, sed **non** ire.*** Host is ***ire***. ⛔ This is the
   2 Thessalonians @0624B shape — a *sed non* beside a verb of willing — and the temptation is
   to press the negative onto *velle* ("they are unwilling"). It is not on *velle*; they **are**
   permitted to will. English: "permitted to will, but not to go."

**Comparatives checked separately** (7a mechanism 4): **0456B *Fuga apostolorum **non plus**
fuit ex timore, **quam** amore verbi Dei*** → "was **not more** out of fear **than** out of love"
— not reversed; **0456B *altior erat sententia quam sua lingua barbara*** → "higher than";
**0452D *minor est illis*** → "is less than they"; **0458A *quorum munditia **magis** ad Deum
pertinet, **quam** intestinorum*** → "pertains more to God than that of the entrails".

**Every other negative carried on its printed host**, including where it makes the sentence
awkward: 0450B *Non in nocte, non in somnis* · 0450C *Non Satanae* · 0450D *nec per somnium,
nec in exstasi* · 0451D *ex parte non tangit* · 0452B *non quod quotidie … non est … non
indigens* · 0452C *non assidue* · 0452D *etiamsi nulli datur* · 0453C *Nihil mutavit vel
addidit* · 0453D *non servasse · non hoc eum improbare · sed non pro eis · non regnum Dei, sed
temporalia · ista non cogitemus* · 0454A *nec aliis refulgebat* · 0454C *non exhorreret* ·
0455B *Non veni nisi* · 0455C *non moritur · non dominabitur · Non credetis · non credere* ·
0455D *Non quia scirent* · 0456A *Non ait* · 0457A *Non alterius · nullus apostolorum · nondum
dicunt* · 0457C *non comedant · ne comedant · non est effusus* · 0457D *ne aliqua … relinquatur
· nullum verbum ponitur* · 0458A *non est salus · necessaria non est · non vultis · ne
faciatis* · 0458B *Non in hoc delinquebant · quae juste non fit* · 0458C *ne … videretur · quasi
non necessariam · non imponere · non circumcidit · ne … acciperent · Non praedicabant · quod non
feceris · non autem tanquam facturi* · 0459A *non enim
angeli … indigent* · 0459B *non in facie, sed post eos* · 0459D *Nescit tarda molimina*.
**Nothing was added that Migne does not print.**

**Test 2b — each anchor checked against the WORD it stands beside**, not merely present. **39
anchors, all 39 verified in place**, and four were repositioned in draft after this check
rather than left where the English fell naturally: **0450B** (moved to stand before *illud*,
matching *secundum [0450B] illud*), **0453C** (moved to stand before "not only to the Jews",
matching *civitates [0453C] non solum Judaeis*), **0456A** (moved to stand before "said",
matching *quod Christo [0456A] dicitur*), **0457D** (English reordered to "Of the apostles the
[0457D] common title", matching *Apostolorum [0457D] communis titulus*). No anchor was split
mid-construction; none needed it.

**Test 3 — punctuation compared BY COLUMN BAND, never by total.** Colons, semicolons, question
marks, exclamation marks, guillemets and parentheses, band by band across the 39 anchor-bounded
bands. ⛔ **First pass returned FOUR mismatched bands in 0010** (0451A colon 3/2 and semi 0/1;
0451D semi 0/1; 0452B semi 0/1; 0452D colon 1/2 and semi 1/3), **one in 0011** (0453B semi 0/1)
and **two in 0012** (0456B colon 1/0; and one supplied colon in the same sweep). Every one was
mine: a colon of Migne's softened to a semicolon at 0451A, three semicolons supplied where he
prints commas, an "As if:" colon invented at 0452D, and one colon of his dropped at 0456B.
**All repaired. Final state: 0010 0 mismatched · 0011 0 · 0012 0 · 0013 0.** Commas were
deliberately excluded from the comparison — English syntax requires different comma placement,
and the corpus ruling closed comma→semicolon sweeping as a rate question.

Totals for the record, and note that they would have hidden three of the seven: Latin/English
question marks 3/3 (0450C, 0455B, 0456A — all direct questions keeping their marks with no
recasting; **Pattern 8b was not needed in this range, there being no indirect question closed
with `?`**), guillemets 0/0, em-dashes 0 in the English.

**Structural parity, re-checked after every edit:** column anchors 39/39 verbatim, in order and
in place (12 + 6 + 9 + 12); `[n:]` notes 107/107 at parity and in order (31 + 12 + 32 + 32);
paragraph counts 1:1 in every chunk (39 + 23 + 38 + 47); italic spans 1:1 — the English's
asterisk surplus is exactly the internal italics of the `[var:]` markers, verified pair by pair
(0010 +11 pairs, 0011 +3, 0012 +8, 0013 +11).

**Notes pass through verbatim, contents untranslated. Zero were converted to `[nt:]`** —
Pattern 15 was tested against all 107 and **every one is a citation or an attribution siglum**
(`(RAB.)` 44 · `(ID.)` 30 · `(BEDA.)` 11 · `(BED.)` 1 · `(CHRYS.)` 2 · `(GREG.)` 1 ·
`(HIER.)` 1 · `(TERT.)` 1 — 91 sigla — plus 16 scripture references). None is editorial prose.
Judged by content, not by length; the longest, `(Psal. XCVIII)`, is still a locator.

### ⭐ Test 4 — does the paragraph ASSERT what he asserts?

Run last, with the counts already clean. It returned **four things nothing mechanical would
have seen**, and all four are conformations or mis-parses that read better than the truth:

1. ⭐⭐ **0459A *Lydda* → "Lydia".** The familiar name arrived over the plate in draft. §2.4.
2. ⭐ **0455C *dispergimini* → "be destroyed".** The Clementine's word had been carried into
   Migne's, flattening the very distinction the next six words gloss (*ab Assyriis et
   Chaldaeis, novissime a Romanis*). Now "be scattered", with the `[var:]`.
3. ⭐ **0454D *Salamina* → "Salamis".** The received English form of the city, in a sentence
   whose whole content is *duo autem sunt nomina unius civitatis* — the names are the subject.
4. **0451A *quem … quaerere et salvare venit*.** *quem* is masculine and its antecedent is
   ***mundum***, not the feminine *salutem* standing next to it: Jesus came to seek and save
   **the world**, not the salvation. A draft "which Jesus came to seek and to save" bound to
   the wrong noun; the morphology decided it.

**Sections read clean under the fourth test and named as such:** 0010's VERS. 6, 7, 9, 10, 11,
12, 13 (the sheet and the fourfooted beasts, 0450D–0451C) — dense allegory, no scripture
re-quotation, nothing to conform; 0011's CAPUT XII entire (0453D–0454C, Peter's deliverance) —
eight glosses, all narrative, the only trouble in it being the *catenae carcer* comma of §3.4;
0012's VERS. 46–51 and CAPUT XIV entire (0455D–0456D); 0013's VERS. 22–29 (0457C–0458A, the
council's letter) and VERS. 25–34 (0459B–0459D, the jailer). ⚑ Named because "a flagged passage
is not a checked passage" cuts both ways: a reader is entitled to know which stretches were
read and found sound.

---

## §P · MIGNE'S CITATIONS — one misprinted, left EXACTLY as printed

Identified **from the quoted words, never from the numeral**, per the standing rule. Not touched
in the text; referred to `citation-corrections.json` here, for the merge to enter.

1. **0457C — `[n: (Ezech. IV)]`** on *Omne morticinum et captum a bestia de avibus et pecoribus,
   sacerdotes non comedant*. The words are **Ezech. 44:31**, the priestly food law. Ezechiel IV
   is the siege-tile and the barley cake; **its only contact with the quotation is 4:14's
   *morticinum … non comedi*, which is Ezechiel speaking of himself and contains no *sacerdotes*
   and no prohibition addressed to priests.** The clinching words are *sacerdotes non comedant*,
   which stand only at 44:31. `refDisplay` keeps *(Ezech. IV)*; `refKey` should resolve to
   Ezek.44.31.

**The other fifteen scripture citations in this range were checked against their quoted words
and are CORRECT:** *(Act. XI)* ×2 (Act 11:3, 11:16) · *(Matth. V)* (5:7) · *(Philipp. III)*
(3:20) · *(Matth. XXVI)* (26:29) · *(Joan. III)* (3:8) · *(I Cor. XII)* (12:13) · *(Matth. VI)*
(6:34) · *(Joel. II)* (2:28) · *(I Cor. XV)* (15:9) · *(Matth. XV)* (15:24) · *(Psal. I)* (1:4)
· *(II Cor. XI)* (11:25) · *(Num. VI)* (6:27) · *(Psal. XCVIII)* (98:6). ⚑ Recorded as checked
negatives: the first stint found two misprints and the second two, so a range with only one is
worth being able to tell apart from a range nobody read.

---

## §8 · THE PLATE — a checked zero, and what a read would still settle

**No `[cn:]` anywhere in this range**, and that is a *checked* zero rather than a skip: PL 114's
plate spot check for this work found no numbered `Forte` apparatus, and both mid-page work
divisions were examined, which is what makes the zero cover these columns. `[cn:]` is
Latin-only in any case and none is in the Latin twins.

**Four questions a read of PL 114 pp. 228–232 would close, none of which blocks the work**
because none of them fired a marker (Addendum B):

1. **p. 228, col. 0452D** — is there a `?` (or any mark) after *potest prohibere*? §3.1.
2. **p. 228, col. 0451C** — does the plate read *Manducavi* or *Mundacavi*? §2.1.
3. **p. 231, col. 0458D** — *Hoc es* or *Hoc est*? §2.5, where I have argued it is ours.
4. **p. 232, col. 0459A** — *Lydda* or *Lydia*? §2.4. ⚑ **This one I expect to go Migne's way**,
   on Addendum A's 5-for-5 record on real words, and I want the negative recorded either way.

Also worth one look while those pages are open, per Addendum C's rule that the normalization
class is found four words from the word you went for: **0453A *paritet*** (§2.2), **0455A
*e c.*** (§2.3), **0452A *aperuit potestatis*** (§3.2) and **0450C *vocantem cum*** (§3.3).

---

## §9 · FOR THE MERGE

- **`[var:]` marker form is the house form throughout** — book, chapter and verse explicit in
  all 21. No re-run of 8964's two-form drift; the first two stints use the same form.
- **One vocabulary seam is flagged and NOT harmonized:** *omnes gentes* → "all nations" at the
  first stint's 0432D against my "the Gentiles" throughout 0450B–0459D. §V. I judged the two
  senses genuinely different and did not sweep a peer's file; the merge should rule.
- **One displaced verse address**, 0455B, reproduced as printed. §3.7.
- **One misprinted citation** for `citation-corrections.json`. §P.
- **Five plate candidates, zero markers.** §2. Three are non-words or split type (Addendum A's
  winning class); two are real words rendered as printed.
- **Nothing outside 0010–0013 was touched**, and `cruces.md` was not written.

---

# PART IV — chunks 0014, cols 0460A–0470A

# *Glossa ordinaria*, **Actus Apostolorum** (PL 114) — cruces for chunks 0014–0017

**Stint: chunks 0014–0017, cols 0460A–0470A (3,553 Latin words), CAPUT XVII – CAPUT XXVIII.**
The Areopagus · Ephesus and Diana · the Miletus farewell · the arrest and the defences before
Felix, Festus and Agrippa · the shipwreck · Rome. **This is the tail of the book**, and the
Acts→Romans division at cols 469/470 falls inside it.

Three peers hold 0000–0004, 0005–0009 and 0010–0013. **This is a stint file. It is NOT
`cruces.md`; the merge is the launcher's.** I wrote only my four chunks and this file.

Marker tally for this stint: **4 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[cn:]` · 92 `[n:]`** (exact parity with the Latin twins: 22 + 22 + 32 + 16).
Zero guillemets in either language, all four chunks. Zero em-dashes in the English.
EN/LA ratio 1.41 · 1.43 · 1.50 · 1.45.

`verify-english.mjs` reports **OK on all 18 chunks of the work** — the three peers are on disk
and the whole book now verifies.

---

## §0 · WHAT I INHERITED, AND FROM WHERE — read before writing a word

Both earlier stint files were on disk when I began and I read them first, as instructed.
**Nothing below was re-derived.** ⟵ marks an inheritance; the few new decisions are marked
**new** and declared rather than smuggled.

| taken | from |
|---|---|
| `VERS. n.--` verbatim; the lemma Englished; a fragmentary lemma rendered as the phrase it stands for | 8968 (Ruth) `cruces.md` §1 |
| `CAPUT XVII.` → **CHAPTER XVII.** — a numeral stays a numeral, as Migne sets it | Ruth pilot + launch ruling |
| `[var: Vulg. Bk C:V *word* …]`, book **chapter and verse always explicit** | 8964 §M, and both peers' practice in this book |
| the mirror rule **and its ruled scope** (semantic-in-English only) | 8964 §M |
| *sermo* → **discourse** · *doctor* → **teacher** (never "doctors") · *praedicator* → **preacher** · *charitas* charity / *dilectio*, *amor* love · *scientia* knowledge / *sapientia* wisdom · *interpretatur* → "is interpreted" · *testamentum* → **testament** · *Divinitas* Divinity / *Deitas* Deity · *coenaculum* → **upper room** · *pascha* → **Pasch** · *virtus* **decided per occurrence** | `cruces-0000.md` §V |
| ***Ecclesia*/*ecclesia* and *Spiritus*/*spiritus* mirror the plate word for word** | `cruces-0000.md` §V |
| *clarifico* make renowned / *glorifico* glorify — held apart | `cruces-0000.md` §V (no *clarifico* in my range; *glorificat* at 0464B renders **glorifies**) |
| *signat* betokens / *significat* signifies — held apart | 8964 §M (only *significat* occurs here, 0463C) |
| `*usque ad*` → ***as far as***, censused per occurrence, **no verb ever supplied** | 8970 §1 via the brief; `cruces-0000.md` §4; `cruces-0005.md` §M2 |
| ***apostolus* NOT mirrored** (his casing alternates for one referent inside a sentence); ***Apostolus* as Paul's title** → "the Apostle" | `cruces-0005.md` §M1 — I extend the same finding, see §M1 below |
| Jerusalem renders *Jerusalem*, *Hierosolyma* and *Jerosolyma* alike | `cruces-0000.md` §V |
| a misprinted citation left **exactly as printed** and referred to `citation-corrections.json`, identified **from the quoted words, never the numeral** | `cruces-0000.md` §2.2–2.3, `cruces-0005.md` §P |
| a **non-word rendered for its evident sense**, logged as a plate candidate, **no marker** | the launch ruling, which settles the split between `cruces-0000.md` §3.1 (render) and `cruces-0005.md` §W (carry) **in favour of rendering** |

⚑ **On that last row: my range has three non-words and they are RENDERED, not carried.** The
launcher ruled the peers' disagreement (§S2 of `cruces-0005.md`) and I followed the ruling
rather than either peer. Sites in §W below.

**Corpus controls run before inventing anything** (`src/latin/`, `src/english/`): *Atheniensis*
2 : *Athenienses* 2 (both attested — see §W4) · *Sceno* 1 (mine alone) · *Tyrrhenc* 1 (mine
alone) vs *Tyrrheno* 1 elsewhere · *dithalassum* 0 : *Bithalassum* 1. "by antiphrasis" attested
(8976/0466C, peer's §X).

---

## §S0 · THE SEAM WITH 0010–0013 — its cruces landed while I was drafting, and I checked it

`cruces-0010.md` was **not on disk when I began** (only `cruces-0000.md` and `cruces-0005.md`
were, which is what the launch message named). It appeared while I was drafting, I read it
before filing, and **it found one real drift in my chunks, now repaired.**

⛔ **0461A — *Isaiae* had been rendered "Isaiah".** The third stint fixes the work's biblical
name forms as Douay-shaped and consistent — **Isaias · Ezechiel · Chanaan · Jonas · Judaea ·
Moses · Jerusalem** — and records that it corrected its own *Judea* to the peers' *Judaea*
before filing for exactly this reason. My *Isaiah* was the AV form, and the only occurrence of
the name in my range. **Repaired to "not of Isaias".** ⚑ Recorded rather than silently
conformed, per 8964 §M: a translator that quietly matches a peer's form leaves no trace that
the two ever differed.

**Checked across the seam and sound, needing nothing:**

- ***gentes* / *gentilis* → the Gentiles / gentile** (its declared extension) holds through my
  five sites: 0460C *de colentibus gentilibusque* and *gentiles permanserant* · 0461C *gentes
  sine circumcisione salvari* · 0465D *evangelizare gentibus* · 0467C *Philosophi gentium*.
  **Reached independently and identical.**
- ***designat* → designates**, its third verb held off *significat*. **No *designat* in my
  range**, so the extension is untested here; *significat* occurs twice (0463C *Sacrum … mundum
  et profanum **significat*** → "signifies", 0465A *ascensionis in castra **significat*** → "It
  signifies") and both take **signifies**, per 8964 §M. Consistent.
- ***Eutichus* → Eutychus** (0463D) — I did **not** keep the form, and the ruling is the first
  stint's, not a lapse: *Eutichus*/*Eutychus* is the ordinary medieval i-for-y, the same class
  as *Andraeas* → **Andrew** (`cruces-0000.md` §V), not the class of *Salamina*, *Lydda* or
  *Barnabas*, which are different **names**. My §Q lists it among the Pattern 9 items.
- **Its §2.7 records "the `. [a-z]` class the first stint found at 0435B — **ZERO** in my
  range."** ⭐ **Mine has one** (§M4), which together with 0435B is the whole population of the
  work, and its zero is what makes that count trustworthy.
- **Its §P has one misprinted citation, mine has two** (§P), and all three are treated
  identically: left exactly as printed, identified from the quoted words, referred to
  `citation-corrections.json`. **Four stints, six misprinted citations, one treatment.**
- **The `[var:]` marker form.** Its 21 markers, the first stint's six, the second's five and my
  four all carry **book, chapter and verse explicit**. **Thirty-six markers, one form**, and no
  repeat of 8964's two-form drift.
- **Its §2.5 declines a divergence because the evidence points at OUR file.** ⚑ **I met the same
  question at 0467B and came down the other way, with the reasoning written out** — see §D1.
  The two decisions are not in conflict: its *Hoc es* is a single occurrence with a sound twin
  nearby, mine is printed twice against one sound occurrence.

---

## §V · THE DIVERGENCE LIST — every italic span in cols 0460A–0470A walked

⛔ **The agreements are listed too.** A findings-only list cannot be told apart from no look at
all. Every reading was fetched **at its own verse** in `sources/vulgate/clementine-flat.txt`,
never matched "somewhere in the Clementine" and never from recollection.

### V1 · The four that took a `[var:]`

| col | Migne prints | Clementine, verse fetched | why it fired |
|---|---|---|---|
| **0463D** | `VERS. 4.-- *Sosipater.*` and the gloss *In Hebraeo **Sosipater** interpretatur idem esse quod narrans dispersionem, vel **salvans** dispersos* | **Act 20:4** *Comitatus est autem eum **Sopater** Pyrrhi Beroeensis* | ⭐ **The gloss is an etymology of the name, so the name is the argument.** Migne's *Sosi-* is what carries *salvans* (σῴζω); the Clementine's *Sopater* does not. Marked `[var: Vulg. Act. 20:4 *Sopater*; the form here glossed stands at Rom. 16:21]` — and Rom 16:21 was checked: it does read *Sosipater*, so Migne has the New Testament's other form of the name, not an invention. |
| **0464B** | *Nolite **accipere** aurum,* etc. | **Mt 10:9** *Nolite **possidere** aurum, neque argentum* | ⭐ **Self-witnessing, and the word is load-bearing.** The paragraph proves *Beatius est magis dare quam **accipere*** from two dominical sayings, and *accipere* is the very word of the maxim it is proving. ⚑ **This work prints the Clementine's word elsewhere**: at 0434B (peer's §1.2) Migne sets *Nolite **possidere** aurum et argentum*. Both forms are his. Marked `[var: Vulg. Matth. 10:9 *Nolite possidere aurum*, "do not possess gold"]`. |
| **0467B** | `VERS. 10.-- *Cum occiderentur **detulit** sententiam.*` | **Act 26:10** *et cum occiderentur, **detuli** sententiam* | Third person where Paul's own speech has the first. It is material: the gloss's exposition is first-person throughout (*ipse sententiam dedi*; *Judicavi illos occidendos*). Marked `[var: Vulg. Act. 26:10 *detuli sententiam*, "I brought the sentence," in the first person]`. **See §D1 — I weighed the OUR-FILE explanation and it loses on the evidence, and I say why.** |
| **0468B** | `VERS. 41.-- *Bithalassum.*` | **Act 27:41** *in locum **dithalassum*** | Migne's *Bi-* against the Clementine's Greek *di-*. Material because the gloss is an etymology (*Graeci Thalassan vocant mare*) and the numeral prefix is half of it. Marked `[var: Vulg. Act. 27:41 *dithalassum*, "having two seas"]`. |

All four `[var:]` contents were checked **not** to occur verbatim in their Latin twin (Pattern
14's mirror test, which `verify-english.mjs` enforces): *Sopater*, *Nolite possidere aurum*,
*detuli sententiam*, *dithalassum* — none of the four marker strings is in the chunk it annotates.

### V2 · Divergences found and a marker **DECLINED**, each with its reason

Pattern 14 fires on a divergence that **changes the sense**. These do not, and a `[var:]` is a
public claim; the crux is always available and always safe (ship test B).

- **0460B · *Quod ignorantes colitis, hoc annuntio.*** — Act 17:23 *Quod **ergo** ignorantes
  colitis, hoc **ego** annuntio **vobis***. Three trimmed words, no sense change.
- **0460B · *Nova quaedam infers,*** — Act 17:**20** *nova **enim** quaedam infers **auribus
  nostris***, and it is glossed under Migne's `VERS. 22, 23`. A trimmed connective; the verse
  displacement is §M3.
- **0460B · *vivimus, movemur et sumus,*** — Act 17:28 *vivimus, **et** movemur, **et** sumus*.
  Trimmed conjunctions in a re-quotation whose own lemma (*In ipso enim vivimus*) agrees exactly.
- **0460A · *Omnis qui se regem facit, contradicit Caesari*** — Jo 19:12 *Omnis **enim** qui se
  regem facit*. One connective. ⚑ The **citation** on it is misprinted — §P1.
- **0460C · *Viri Atheniensis,*** — Act 17:22 *Viri **Athenienses***. A morphological form, not a
  reading. §W4 gives the whole argument and why no marker fires.
- **0461C · *Sceno factoriae artis.*** — Act 18:3 *scenofactoriae artis*: the same word, divided
  across a space. That is §W1's plate candidate, not a textual variant.
- **0461D · *Apprehendentes omnes Graeci Sosthenem,*** — Act 18:17 *Apprehendentes **autem**
  omnes Sosthenem*. **Migne announces it himself** (*In Graeco*), so it is §V3's class.
- **0462B · *Ego baptizo in aqua, ille baptizabit in Spiritu sancto.*** — a **conflation**:
  *Ego baptizo in aqua* is Jo 1:26 verbatim; *ille … baptizabit in Spiritu sancto* is the sense
  of Jo 1:33 / Mc 1:8. **Unattributed** (no `[n:]`), so there is no single host verse for a
  marker to name. Recorded here instead, exactly as the peer did with Gal 3:12/Lv 18:5 at 0443B.
- **0462C · *Judicia Dei abyssus multa*** — Ps 35:7 *judicia **tua** abyssus multa*. **Roman, not
  italic**, so it is not a lemma and Pattern 14 does not reach it (peer's §1.5 class).
- **0460B · *Si vobis seminavimus, etc.*** — 1 Cor 9:11 *Si nos vobis **spiritualia**
  seminavimus*. Roman, same class.
- **0463A · *Capite nobis **vulpeculas** quae **devastant** vineas*** `[n: (Cant. II)]` — Ct 2:15
  *Capite nobis **vulpes parvulas** quae **demoliuntur** vineas*. ⚠ **The one I came closest to
  marking**, because two content words differ rather than a particle. Declined: *vulpecula* is
  the ordinary diminutive of *vulpes parvula* and *devastant*/*demoliuntur* are the same act, so
  the proof-text proves exactly what it proves in the Clementine — the guardians of the vineyard
  catching the foxes. Nothing the gloss argues turns on either word. **Named here so a reader
  can disagree with me from the evidence.**
- **0463A · *Multi autem ex eis qui **curiosa fuerant sectati*.*** — Act 19:19 *qui **fuerant
  curiosa** sectati*. A transposition.
- **0463C · *Vox facta **est una** omnium*** — Act 19:34 *vox facta **una est** omnium*. A
  transposition of the copula. ⚑ The **numeral in the same lemma agrees**: *quasi per horas
  duas* is Act 19:34's own reading.
- **0464C · *Huic autem erant filiae.*** — Act 21:9 *Huic autem erant **quatuor** filiae
  **virgines prophetantes***. A clipped lemma that drops a number. ⚠ **Checked with care because
  a dropped numeral is the prize this brief names: the gloss does not reason from the four.** It
  argues only whether these were the daughters of Philip the apostle or of Philip the deacon.
- **0464D · *Cum autem septem dies,*** — Act 21:27 ***Dum** autem septem dies consummarentur*.
  *Cum* for *Dum*, and the verb clipped — but the gloss's first words are *Nondum consummati
  erant*, which shows he had the clipped verb in view. Same sense.
- **0465B · *Aemulator legis Dei existentis*** — announced *In Graeco*, §V3's class.
- **0465B · *Testimonium **illis perhibeo**, quod aemulationem Dei habent*** `[n: (Rom. X)]` —
  Rom 10:2 *Testimonium **enim perhibeo illis** quod*. A transposition and a trimmed connective;
  the citation itself is **correct** and was checked (§P3).
- **0466C · *Tremefactus,* etc., *et sperans.*** — *tremefactus* is Act 24:25, *et sperans* is
  Act 24:**26** (*simul et sperans quod pecunia ei daretur a Paulo*). Both agree with the
  Clementine; the verse address is §M3.
- **0467D · *Ut autem judicatum est **eum navigare**,*** — Act 27:1 *Ut autem judicatum est
  **navigare eum** in Italiam*. A transposition, and the gloss's whole point is the **Greek's**
  *nos* against the Latin's *eum*, which he states himself.
- **0468B · *Eramus universae animae.*** — Act 27:37 *Eramus **vero** universae animae **in navi
  ducentae septuaginta sex***. ⭐ **The shipwreck's number is clipped away, and the gloss does not
  reason from it** — it reasons from *animae* against *viri* (*Non ait viri, quia fortasse erant
  et mulieres*). A checked zero on the numeral the brief singled out. See §N.
- **0468D · *Salvavit eum.*** — Act 28:8 agrees exactly; recorded here only because the
  neighbouring *Dysenteria* vel *dysin* is §W3's candidate.

### V3 · Readings MIGNE HIMSELF ATTRIBUTES to another witness — no marker, by construction

Pattern 14 is for a quotation that diverges **without saying so**. These announce the divergence
in their own words, so a `[var:]` would tell the reader twice and blur whose observation it was —
the same logic as Migne's own `( sic )`, and the same treatment the opening stint gave its four.

- **0460A** *in Graeco: *Jasonem et **quosdam alios** fratres** — Act 17:6 *quosdam fratres*. The
  gloss's conclusion (*Unde intelligendum est Jasonem fratrem et fidelem fuisse*) rests on the
  Greek's *alios*, which is exactly why he cites it.
- **0460D** *In Graeco: *ex uno **sanguine*** — Act 17:26 *ex uno omne genus hominum*, no
  *sanguine*. He is reporting the Greek (ἐξ ἑνὸς αἵματος) and glosses it as such.
- **0461D** *In Graeco: *Apprehendentes omnes **Graeci** Sosthenem*.*
- **0465B** *In Graeco: *Aemulator legis Dei **existentis***.* Rendered "*A zealot of the law of
  the God that is,*" — see §R2 for the parse and its rival.
- **0465C** *Quaedam exemplaria habent: *Saul, Saul***, against his own lemma *Saule, Saule*. See
  §M2: **both forms are kept in the English**, because the gloss exists to distinguish them.
- **0461D / 0462A** *Alia translatio:* / *Alia editio:* — 0462A *Profuit multum credentibus*
  (against Act 18:27 *contulit multum his qui crediderant*), 0467D *ventus tempestuosus* for
  *Typhonicus*, 0465D *Ego multa summa*'s fuller edition, 0467B *Occidendisque detulit
  sententiam*, 0466C *servus* "as is had in other codices". **Six announced variants, none marked.**

### V4 · Lemmata checked and found to **AGREE with the Clementine exactly**

Named, because the brief requires it, and each fetched at its own verse.

**Act 17 (0014):** *Et de colentibus gentilibusque* · *Trahebant Jasonem* · *Regem alium* ·
*A Paulo* · *Profecti* · *Epicurei* · *Quid vult seminiverbius* · *Alii vero* · *Ad Areopagum* ·
*Ignoto Deo* (both occurrences) · *Deus, qui fecit mundum* · *Ex uno omne genus hominum* ·
*In ipso enim vivimus* · *Sicut et quidam vestrorum poetarum* · *Ipsius enim* · *Genus ergo* ·
*non debemus* · *Despiciens Deus* · *Fidem praebens omnibus* · *Dionysius*.
**Act 18 (0014):** *Eo quod praecepisset Claudius discedere omnes* · *Sanguis vester* ·
*Titi Justi, colentis Deum* · *Si vero quaestiones sunt de verbo* · *et nominibus* ·
*Qui sibi totonderat* · *Caesaream* · *Contulit multum*.
Also inline **Rom 11:36** *Ex ipso, et per ipsum, et in ipso sunt omnia* (verbatim — the
citation on it is misprinted, §P2) and **1 Cor 3:6** *Ego plantavi, Apollo rigavit* (verbatim).

**Act 19 (0015):** *Joannes baptizavit* · *Erant autem omnes* · *Quotidie disputans in schola* ·
*In schola tyranni* · *Per biennium* · *Semicinctia* · *Exorcistis* · *Septem filii* ·
*His autem expletis* · *Romam videre* · *In Macedoniam* · *Magna Diana Ephesiorum* (both) ·
*Alii autem aliud clamabant* · *Vox facta … quasi per horas duas clamantium* (but for the
copula, §V2) · *Neque sacrilegos, neque blasphemantes deam vestram* · *Et cum haec dixisset*.
**Act 20 (0015):** *Ad Graeciam* · *Una autem sabbati* · *Eutichus* (Clem. *Eutychus*,
orthographic) · *Cum descendisset Paulus, incubuit* · *Anima enim ipsius in ipso est* ·
*Pentecosten* · *Memoria retinentes* · *Beatius est*. Also inline **Mt 9:24** *Non est mortua
puella, sed dormit* (verbatim but for a trimmed *enim*).

**Act 21 (0016):** *Cum autem* · *Coum, Rhodum, inde Pataram* · *Philippi evangelistae* ·
*Haec dicit Spiritus sanctus* · *Dicens non debere* · *Neque secundum* · *Quia quae de te* ·
*Et cum venisset ad gradus* · *Graece nosti?* (his `?` included) · *A Tarso*. Also **Ex 20:17**
*Non concupisces*.
**Act 22 (0016):** *Natus in Tarso* · *Aemulator legis* · *Saule, Saule* · *Audierunt* ·
*Et ibi* · *Saule frater, respice* · *Praeordinavit te* · *Fieri me in stupore mentis* ·
*Consentiebam* · *Ego multa summa* · *Civilitatem*.
**Act 23 (0016):** *Percutiet te* · *Nesciebam, fratres* · *Quid si spiritus?* ·
*Ne discerperetur Paulus ab ipsis* · *Devoverunt se dicentes* · *Parate milites ducentos*.
**Act 24 (0016):** *Patri et Deo meo* · *Nisi de una hac* · *De suis ministrare* ·
*Tremefactus* · *et sperans* (at 24:26, §M3) · *Reliquit Paulum vinctum*.
**Act 25 (0016):** *Festus ergo cum venisset in provinciam* · *De quibus* · *Sua superstitione* ·
*Cum multa ambitione*.
**Act 26 (0016):** *Quid incredibile?* · *Detuli sententiam* · *Puniens eos* ·
*et amplius insaniens* · *Contra stimulum* · *Insanis, Paule* · *Multae te* · *Ad insaniam*.
Also **Ps 39:5** *Non respexit in vanitates et insanias falsas* — **verbatim, and the citation
`(Psal. XXXIX)` is correct**, which is worth saying in a book with three misprinted ones.

**Act 27 (0017):** *Adrumetinam* · *Venimus Lystram* (⚑ **checked with care: the Clementine also
reads *Lystram*, not Myra** — the gloss's *Pro Lystra, in Graeco Smyrna* is a note on the Greek,
not a divergence from the Latin) · *Jejunium* · *Portum* · *Ad Africum* · *Asson* ·
*Typhonicus* · *Euroaquilo* · *Syrtim* · *Oportebat quidem* ·
*In insulam autem quamdam oportet nos devenire* (verbatim, in full) · *In Adria* ·
*Sumere cibum*.
**Act 28 (0017):** *Pyra* · *Dysenteria* · *Salvavit eum* · *Puteolos* · *Audissent fratres* ·
*Conductu* · *Sine prohibitione*.

---

## §P · MIGNE'S CITATIONS — two misprinted, both left EXACTLY as printed

Identified **from the quoted words, never from the numeral**, per the standing rule. Neither is
touched in the text; both are referred to `citation-corrections.json` here. `refDisplay` keeps
what Migne set; only `refKey` resolves. **No `Ibid.` chain depends on either** (runbook false
positive 2 checked: there is no `Ibid.` anywhere in my four chunks).

1. **0460A — `[n: (Joan. XVIII)]`** on *Omnis qui se regem facit, contradicit Caesari*. The words
   are **Jo 19:12**, verbatim but for a trimmed *enim*. John XVIII is the arrest and the first
   interrogation and contains no such sentence; the words stand in the trial before Pilate, one
   chapter later. → `refKey` John.19.12.
2. **0460D — `[n: (Rom. II)]`** on *Ex ipso, et per ipsum, et in ipso sunt omnia*. The words are
   **Rom 11:36**, verbatim. Romans II is the judgment of the Gentiles and the inward Jew.
   → `refKey` Rom.11.36.

⛔ **Neither is a plate candidate.** The peers found the same class twice each in this book
(*(Matth. XXVIII)* for Mc 16:19, *(Zach. V)* for Zach 9:11, *(Matth. VI)* for Mt 5:10,
*(II Tim. II, 9)* for 2 Tim 2:19) and every one read at the plate this session proved Migne's
own. An abbreviated book-name or numeral in an `[n:]` is exactly the class where the plate goes
his way. **Four in the book, and mine make six.**

3. **Checked and CORRECT, recorded so nobody re-raises them:** `(Rom. X)` on Rom 10:2 ✓ ·
   `(Psal. XXXIX)` on Ps 39:5 ✓ · `(I Cor. III)` on 1 Cor 3:6 ✓ · `(Cant. II)` on Ct 2:15 ✓.

**One reference in Migne's PROSE, not in an `[n:]`, that is loose** — the author's own sentence,
rendered as written, no apparatus: **0461C**, *Non fuit hic Titus discipulus Pauli … cum quo et
Barnabas ascendens Jerosolymam, contulit Evangelium cum apostolis*. The episode is Gal 2:1–2,
where **Paul**, not Barnabas, is the subject and Titus is taken along. Migne makes Barnabas the
nominative. Rendered as printed; see §S for the unexpressed subject that follows from it.

---

## §W · PLATE CANDIDATES — RAISED, NEVER PATCHED, **NO MARKER FIRED**

Nothing in this section carries a marker, so **my four chunks assert nothing about the plate.**
Addendum A's split governs: a **non-word** is worth raising and has been our digitization's error
ten times out of ten; a **real, well-formed word that reads oddly is MIGNE'S** until a plate says
otherwise, refuted five of five.

### W1–W3 · Three NON-WORDS, all **rendered for their evident sense** per the launch ruling

| col | printed | read as | why the reconstruction is safe | rendered |
|---|---|---|---|---|
| **0461B** | *Sceno factoriae artis* (a lemma) | *scenofactoriae artis* | Word division. *sceno* is no Latin word standing alone, *Sceno* occurs **once in the whole corpus** (here), and the Clementine's Act 18:3 reads *scenofactoriae* as one word. The gloss expounds tent-making (*tentoria sibi … aedificant*). | "*Of the tentmaking craft.*" |
| **0468B** | *nomen cujusdam freti in **Tyrrhenc** mari* | *Tyrrheno* | A truncated adjective with no possible slot: *in … mari* wants the ablative. Corpus: *Tyrrhenc* 1 (here), *Tyrrheno* 1 elsewhere. | "in the Tyrrhene sea" |
| **0468B** | *et mare a Graecis dicitur **Thelasson*** | *Thalassan* | ⭐ **Self-controlled: the same gloss prints *Thalassan* eleven words earlier** (*Graeci Thalassan vocant mare*), and the lemma it is explaining is *Bithalassum*. One transliteration, two spellings, inside one abridged note. | "the sea is called by the Greeks Thelasson" — **both spellings kept as printed**, because the doubling is the evidence |

⚠ **None is patchable from the file**; a `data/tei-patches/8976.json` entry needs the plate.
⚑ **7a⁗ was run on each**: none of the three is a verb, a negation or a conjunction, and none
governs anything. Nothing is quarantined, because nothing was carried — under the launcher's
ruling the English says what Migne evidently meant and the crux says what he printed.

⛔ **What a plate read would change, stated so a reader can act on it.** If the plate prints the
sound word in any of the three, the fix is a tei-patch and the English is already right. If the
plate prints the broken run, a `[sic:]` becomes correct and should be added — and under
`cruces-0005.md`'s treatment the run would be carried instead. **Either way nothing in the
running text asserts anything false today.** PL 114 = archive.org `patrologiaecurs06saingoog`,
**PDF page = (column + 11) / 2** — cols 0461, 0468 are pp. 236 and 239 (0468 covers both W2 and
W3, so **one crop settles two of the three**).

### W4 · *Viri Atheniensis* (0460C) — a REAL word, no marker, and the reason is Pattern 9

Migne sets `VERS. 22, 23.-- *Viri Atheniensis,* etc.` where Act 17:22 reads *Viri **Athenienses***.
*Atheniensis* is a perfectly good form — the corpus has it as a true singular at 7017/0000
(*Solon Atheniensis*) — so it is a real word in an odd slot, not a non-word, and the standing
ruling is that it is **Migne's** until a plate says otherwise.

⚑ **And it takes no defect marker for a second, independent reason: English has no exponent for
it.** "Men of Athens" and "Athenian men" are both number-neutral in the adjective, so a rendering
cannot show the disagreement either way — Pattern 9's gender/number class exactly. Rendered
**"*Men of Athens,*"**, no italic Latin, no crux beyond this line.

### W5 · *Dysenteria* vel *dysin* (0468D) — kept as printed, and it is a NAME not a word

*dysin* is offered by Migne as an alternative **name** for the affliction, alongside
*Dysenteria*, and both are Greek in Latin dress. It is kept as printed and italic (Migne
italicizes it), on the same footing as *Adrumetis*, *Bithalassum*, *Euroaquilo* and *Asson* —
transliterated names are carried, not Englished. **Not raised as a non-word candidate**, because
a name has no "evident sense" for the launcher's rendering ruling to recover; if a plate reader
is at col. 0468 for W2/W3, a glance at band D would settle whether he prints *dysin* or
*dysenteria* a second time.

### W6 · ⭐ THE SUSPICIOUSLY TIDY FORMS — a checked list, and it came back **EMPTY**

Brief §4 and addendum §C: the digitization silently *corrects* as well as corrupts, and the only
handle is a form that reads too tidy in a rough neighbourhood. **I read the whole line around
each of W1–W3 and around all 92 `[n:]` sites** (addendum §C's discipline: examine the neighbours
in the same look), and found nothing of that shape in 3,553 words. **Recorded as a negative**,
because the class is only credible when the zeros are reported.

The two forms I looked hardest at and cleared:
- **0467B *interrogando*** in *etc., [0467B] interrogando, quasi dicat* — a bare gerund after an
  abridgment tail. It construes ("by way of questioning") and it is the ordinary ablative of
  manner. Not tidy, just terse.
- **0466A *civilitatem*** — a late but well-attested noun which the gloss then defines at length
  (*Id est socialem inter cives conversationem*). The definition is the control: he knew the word.

---

## §D · WHERE THE EVIDENCE POINTS AT **OUR FILE** RATHER THAN HIS PLATE — one candidate, weighed

The brief invites this reasoning explicitly, so here is the one place it was live, and why I
came down the other way rather than declining.

### D1 · 0467B, *detulit* for *detuli* — the OUR-FILE reading considered and REJECTED

The peer's model case is a divergence declined *because Migne's own next clause printed the word
correctly, making the dropped letter likely ours*. That shape is present here: **four lines below
the lemma Migne prints ***Detuli sententiam*** as his own second lemma**, in the first person,
and glosses it *Judicavi illos occidendos*.

**It loses, on two counts, and both are on the page.**
1. ***detulit* is printed TWICE, not once** — in the lemma and again in the *Alia editio* he
   quotes (*Occidendisque **detulit** sententiam*). A digitization that adds the same letter to
   the same word twice, eight words apart, and leaves the third occurrence alone, is a much
   worse account of the page than an editor printing what his copy had.
2. **The gloss's own work is to reconcile the two persons.** He quotes a third-person text, then
   paraphrases it in the first (*qualiter occiderentur **ipse sententiam dedi***), then
   re-lemmatizes the first-person form. That is a discussion of the variant, not a slip: the
   paraphrase exists precisely because the printed form does not say what Paul says.

**So the `[var:]` fires on the Clementine, which is a true and checkable claim, and nothing in
the English or the apparatus claims the plate is defective.** ⚑ **The rival is named because a
reader never sees the reading I rejected**: if a plate read shows *detuli* in the lemma, the fix
is a tei-patch and this `[var:]` comes out with it.

---

## §N · THE NUMBERS — every one checked, and they all hold

The brief named the shipwreck's numerals and place-names as the highest-value target in this
range. **The result is a checked zero, and here is the whole of it rather than the conclusion.**

- **0468B, Act 27:37 — the two hundred and seventy-six.** ⭐ **Migne clips the number away**
  (*Eramus universae animae*, no *ducentae septuaginta sex*) **and the gloss does not reason from
  it**: it reasons from *animae* against *viri*. There is nothing to diverge and nothing to mark.
- **0462C — the twelve and the hundred and twenty, with the arithmetic stated.** *in duodecim
  discipulos, et supra in centum et viginti (**qui numerus perficitur duodenario decies ducto**)*.
  12 × 10 = 120. ✓ **The gloss reasons from the multiplication and the multiplication is right.**
  Both numbers agree with Act 19:7 and Act 1:15.
- **0462C — the hours of Paul's day.** *Ab hora quinta usque ad horam nonam et decimam … horas
  operi quinque, alias quinque doctrinae, duas dabat cibo et orationi.* 5 + 5 + 2 = 12, and the
  teaching hours (the fifth to the tenth) are the five the sentence claims. ✓ Internally sound,
  and Migne himself flags that it rests on nothing (*quod nulla tamen auctoritate firmatur*).
- **0463A — the seven sons of Sceva** ✓ Act 19:14. **0463C — the two hours' shouting** ✓ Act
  19:34. **0462D — the two years at Ephesus** ✓ Act 19:10. **0466B — the two hundred soldiers** ✓
  Act 23:23. **0464D — the fourfold synod**, and four are actually enumerated ✓.
- **0464C, Act 21:9 — the four daughters**, clipped out of the lemma and not reasoned from (§V2).
- **0468C — the four virtues** of Bede's allegory (*sapientiae, fortitudini, temperantiae et
  justitiae*): four named ✓.
- **0468D — the fasts.** *jejunium septimum … in quo occisus erat Godolias* ✓ (Gedaliah is killed
  in the seventh month, 4 Rg 25:25 / Jer 41:1) and *dies jejunii decimi in Januario, quando
  cognoverunt in Babylone captivi templum esse destructum* ✓ (the tenth-month fast, and the news
  reaching the exiles, Ez 33:21). **Both attach to the right month.** Nothing to mark.
- **0461B — Josephus's *nono anno Claudii*** for the expulsion of the Jews. Not resolvable from
  anything on disk, and the gloss does not compute with it. Rendered as printed, raised here.
- ⚠ **0470A — *Post passionem Domini vigesimo quinto anno*, the LAST gloss in the book.** It sits
  in an abridgment head (*etc., usque ad Petrus et Paulus martyrio coronati sunt*), so the words
  that would have reasoned from it are the ones the formula removed. **Rendered as printed, and
  flagged**: this is the one numeral in my range I cannot check against anything, and it is the
  one a reader is most likely to query, since the received chronology puts the two martyrdoms
  more than thirty years after the passion. **No marker: there is no witness to compare it to,
  and `[var:]` is for scripture.**

**Place-names of the voyage, form for form as Migne sets them, none normalized:** *Adrumetis*
(not Adrumetum) · *Lystram* (not Myra — and it is the Clementine's own word) · *Smyrna* and
*Myrrham*, the two names the gloss reports from the Greek and from Jerome · *Asson* · *Syrtis* ·
*Adria* · *Puteoli* · *Coum, Rhodum, Pataram* → Cos, Rhodes, Patara · *Phoenice* · *Creta*.
**Wind-names kept Latin** — *Africus*, *Corus*, *Euroaquilo*, *Boreas*, *aquilo* — see §M6.

⚠ **Two geographical claims of Migne's that are simply wrong are rendered as printed and marked
nowhere**, because they are what he asserts and the fourth test's question is whether the English
asserts it too: **0461D** *Caesarea metropolis est Cappadociae* (Act 18:22's Caesarea is the
maritime one, in Palestine) and **0469A** *Puteoli locus est ultra Romam* (Puteoli is south of
Rome, not beyond it). **0464C** *Cous et Patara insulae sunt* is a third: Patara is a Lycian city,
not an island. None is a textual defect and none takes a marker.

---

## §M · THE HOUSE CONVENTIONS AS APPLIED

### M1 · The mirror rule — its ruled scope, and the two words that tested it

- ***Ecclesia*** stands **capitalized at all three of its occurrences** in my range (0461B
  *rexit Ecclesiam*, 0463A *custodibus Ecclesiae*, 0466B *Christi et Ecclesiae*) and all three
  render **the Church**. There is no lower-case *ecclesia* in cols 0460A–0470A. Nothing to
  adjudicate — recorded as a checked negative.
- ⭐ ***spiritum* at 0462C is LOWER-CASE and is mirrored.** *In quo ostenditur illos tantum …
  **spiritum** replere, qui sunt in catholica unitate* — against *Spiritus sanctus* capitalized
  two lines above in the same paragraph. Rendered "**the spirit** fills only those … who are in
  catholic unity". ⚠ **It reads oddly and it is deliberate**, on `cruces-0000.md` §V's ruling
  (which found the same alternation at 0430A and 0427A) and `cruces-0005.md` §S1's (0444D). **My
  range has exactly this one lower-case site**, against ten capitalized *Spiritus*; a later
  sweep that capitalizes it would destroy something the plate makes. Also lower-case and
  mirrored: **0466A–B** *sadducaeos **spiritum** non confiteri* and *Pharisaei **spiritum**
  nominant* → "a spirit", where English would take the indefinite article anyway.
- ***apostolus* NOT mirrored**, following `cruces-0005.md` §M1 and on fresh evidence of my own:
  my range prints lower-case *apostoli* (0460A, *Apostoli vero contradicebant* is
  sentence-initial), *apostolis* (0461C, 0464B), *apostolos* (0463A) against capitalized
  **Apostolus as Paul's title** at 0462A and 0466A (*sed inspiratione divina dixit Apostolus*).
  **The title is capitalized and rendered "the Apostle"; the plural is not.** That is the same
  distinction the peer drew, reached independently here.
- **Mirrored where the case is semantic and his practice is consistent:** *Propheta* (0467C) →
  the Prophet · *Scripturarum* (0463D) → the Scriptures · *Judaei*, *Graeci*, *Christiani*,
  *Sadducaei*, *Pharisaei* → capitalized as printed · *Testamenta* (0463D), *Novi Testamenti*
  (0464D) → the Testaments, the New Testament · *Evangelio* (0460A, 0464B) → the Gospel.
- **NOT mirrored where English has no lower-case option**: *Spiritu sancto* → the Holy Spirit,
  *Deum*, *Dominus*, *Trinitatis*.

### M2 · ⭐ *Saule, Saule* — the ONE lemma left in Latin, and why the convention requires it

`VERS. 7.-- *Saule, Saule.* … Quaedam exemplaria habent: *Saul, Saul,* ut ostendatur de nomine
Saulis Saulum nominatum esse.` **The gloss exists to distinguish two forms of one name**: the
declinable *Saulus* (vocative *Saule*) against the indeclinable Hebrew *Saul*. Englishing the
lemma collapses both into "Saul, Saul" and the sentence explains nothing.

So the lemma is rendered **"*Saule, Saule.*"**, the variant **"*Saul, Saul,*"**, and the
conclusion "that it may be shown that **Saulus** was named from the name of **Saul**". This is
the Song-of-Songs case 2 exactly (*where the gloss IS the etymology, an English word sharing no
root makes the gloss explain nothing*), and it overrides the corpus control the peer ran
(Saul 187 : Saulus 1) **for this paragraph only** — every other *Saulus* in my range is **Saul**.
⚠ **Declared, not smuggled**: if the merge prefers a fully Englished lemma here, the cost is the
paragraph.

### M3 · The verse addresses, reproduced as printed

- **Every VERS. number in my four chunks is in ascending sequence**, chapter by chapter:
  XVII 4·6·7·13·15·18·19·22,23·24·26·28·29·30·31·34 · XVIII 2·3·6·7·15·18·22·27 ·
  XIX 4·7·9·10·12·13·14·19·21·22·28·32·34·37·40 · XX 2·4·7·9·10·16·31·35 ·
  XXI 1·8·9·11·21·24·27·35·37·39 · XXII 3·7·9·10·13·14·17·20·28 · XXIII 3·5·9·10·12·23 ·
  XXIV 14·21·23·25·27 · XXV 1·18·19·23 · XXVI 8·10·14·24 ·
  XXVII 1·2·5·9·12·13·14·17·21·26·27·34·37·41 · XXVIII 2·8·13·15·30·31.
  **No displaced number in this range** — a checked negative, since a sibling stint found several.
- **`VERS. 22, 23.--` at 0460C is a double address**, and both lemmata under it are correct
  (*Viri Atheniensis* is 17:22, *Quod ignorantes colitis* is 17:23). The third lemma in that
  paragraph, *Nova quaedam infers*, is **Act 17:20** — a mid-gloss second lemma reaching back,
  which convention does not address by its own `VERS.` Not a mis-numbering; recorded so the
  merge does not read it as one.
- **`VERS. 25` at 0466C** covers *Tremefactus* (24:25) and *et sperans* (24:**26**), and Migne's
  own gloss joins them deliberately (*Sic junge: tremefactus et sperans*). Same class.
- **`VERS. 4` at 0463D**, *Sosipater*, is Act 20:4 ✓. **`VERS. 30` at 0470A**, *Conductu*, is Act
  28:30 ✓ — and it is the last verse address in the book.
- **Every `VERS.` is well formed** (`VERS. n.-- `), with none of the malformed `VERS 34.--` the
  peer found at 0443A.

### M4 · ⭐⭐ THE SITE THE OPENING STINT PREDICTED — found, mirrored, and **the plate has since answered its twin, which changes what I think mine is**

⚠ `cruces-0000.md` §2.4 raised a full stop followed by a lower-case word at 0435B, mirrored it,
and recorded that it is **"the only `. [a-z]` in all eighteen chunks of this work except one at
0015."** ⭐ **That one is here, and this is it:**

**0462A–B** — *sicut circumcisio in patriarchis signaculum fidei quam habebant **fuit. ita** et
hoc lavacrum populus poenitens quasi signaculum suae devotionis accepit.* Mirrored: "…was a seal
of the faith which they had. so also the penitent people received this washing as a seal of
their devotion."

⛔⛔ **AND THE TWIN HAS NOW BEEN READ AT THE PLATE, AND IT WAS NOT WHAT ANYONE GUESSED.**
`data/tei-patches/8976.json` (commit `ae9ea49`, written this session and **deliberately not yet
applied** because agents were reading `src/latin/8976`) records the answer at 0435B: **Migne
prints a COLON there, not a full stop.** A colon before a lower-case word is ordinary, so **the
sentence was never his defect — the mark is OURS**, and the same read turned up a second lost
colon (become a spaced hyphen) and a normalization (*Chistus* tidied to *Christus*) in the same
line.

⚑ **The consequence for my site, stated as a prediction so it can be checked cheaply:** *fuit.
ita* is very probably **the identical class — a colon of Migne's that our transcription turned
into a full stop** — and not a lower-case sentence opening at all. Three things point that way,
and none of them is the resemblance alone:

1. **A colon is exactly what the sentence wants.** *sicut circumcisio … fuit **:** ita et hoc
   lavacrum … accepit* is a *sicut … ita* correlative, and Migne's colon before the answering
   member is his ordinary practice — my range prints 22 colons of his in 0014–0015 alone.
2. **His habit of continuing lower-case after a mark is documented right here**, in M4a below:
   eight `? [a-z]` sites in this work, six of them mine. Lower case after a mark is unremarkable
   in this book; **a full stop before one is the thing that is odd**, which is why the odd item
   is the mark and not the capital.
3. **The two sites are the entire population** of `. [a-z]` in eighteen chunks. A defect class
   with exactly two members, both at a *sicut … ita*-shaped hinge, in one transcription, is one
   mechanism, not two coincidences.

**So: the English stays mirrored and NOTHING is repaired here** — I have no plate, and a
translator patching a Latin chunk on a resemblance is precisely what the patch file's own
"prove it before patching" rule forbids. **What I am handing over is a one-crop question with the
answer already half-known**: PL 114 **p. 237 = cols 461/462** (re-calibrated the same way the
existing patch was, `page = (column + 11) / 2`, and the patch file's own p. 223 = cols 435/436
confirms the map). If the plate prints *fuit : ita*, the fix is a second entry in
`data/tei-patches/8976.json`:

```
"find":    "quam habebant fuit. ita et hoc lavacrum",
"replace": "quam habebant fuit : ita et hoc lavacrum",
```

…and **my English full stop must become a colon in the same commit**, which is a one-character
edit to `src/english/8976/0015.md`. ⚠ **Note the ordering constraint the patch file already
states**: applying a patch means re-chunking, so this belongs with the existing 0435B entry,
after the last Acts stint lands — **and I am the last Acts stint, so that gate is now open.**

⚑ **And addendum C says to read the neighbours in the same look.** When someone crops col. 0462
for this, the same page carries §W1's *Sceno factoriae* (col. 0461) and §R1's *aurum ex argentum*
(col. 0461) — **three of my open questions on one crop** — and the 0435B read is the reason to
expect a fourth nobody has flagged: **I searched my four chunks for the spaced-hyphen tell that
read turned up and there is none** (zero ` - ` in cols 0460A–0470A), which is a checked negative
worth having.

#### ⛔ M4a · AND THE `? [a-z]` CASES ARE **NOT** THE SAME CLASS — I nearly filed them as one

My first draft of this section named a second site, **0469A** *Christiani Romae habitantes
**unde? patet** Paulum non primo praedicasse Romanis*, as a companion anomaly. **It is not one,
and the control is what shows it.**

⚑ **A control has to be the same class as the thing it controls.** Scanning the work for
`? [a-z]` returns **eight** sites, six of them in my own four chunks: 0015 *baptizaretur**? cum***
· 0016 *te esse**? ego*** · *apud vos**? etc.*** · *quid dicis**? incredibile*** · 0017
*relinquat**? nisi*** · *unde**? patet***, plus two in the peer's range at 0005. **Continuing
lower-case after a question mark is Migne's ordinary practice in this book, not a defect** — and
against it, `. [a-z]` stands at **two sites in eighteen chunks**, which is what makes that one an
anomaly worth a crop.

**All eight are mirrored in the English anyway**, because Pattern 8 governs the marks and nothing
licenses recasting the sentence that follows one. But **they are recorded here as a checked
NON-defect**, so that nobody spends a plate read on them and nobody reads the mirroring as our
slip. ⚑ **Had I filed them beside the `. [a-z]` case, I would have manufactured an inconsistency
that is not there** — the 2026-08-19 addendum's exact failure, and three readers made it in one
batch.

### M5 · Two mid-italic oddities, reproduced

**0460A** — `*Trahebant Jasonem. [n: (BED.)]* in Graeco: …`. The note sits **inside** the italic
run and the sentence that follows it opens with a lower-case *in*. Reproduced exactly:
"*They dragged Jason. [n: (BED.)]* in the Greek: …". Same class as M4, smaller — and here too the lower-case is mirrored rather than tidied.
**0462D** — `*Semicinctia [n: (RAB.)]*`, with **no period** before the note where every other
lemma in the range has one. Reproduced exactly.

### M6 · `usque ad` — CENSUSED PER OCCURRENCE, and the census is 16 tokens, **15 formula, 1 not**

Decided from what stands on either side, never by rule (addendum §D).

**The abridgment formula (15), rendered *as far as*:** 0460C · 0460D · 0461C (0014, three) ·
0463A ×2 · 0463D ×3 · 0463D/0464A (0015, five) · 0464D · 0465A · 0465B · 0466A · 0467B (0016,
five) · 0468B · 0470A (0017, two).

⛔ **NOT the formula (1), and it is the trap:** **0462C**, *Ab hora quinta **usque ad** horam
nonam et decimam* — an ordinary prepositional phrase in **roman**, inside a gloss about how Paul
divided his day, and the sentence goes on to compute from it. Rendered "**From the fifth hour
until the ninth and the tenth**". ⚑ Confirmed mechanically: `grep "as far as"` returns **15**
across the four English chunks and `grep "usque ad"` returns **16** across the four Latin ones.

⚑ **No verb was ever supplied to complete a formula tail**, and each tail was parsed as strictly
as ordinary prose (the *ferias* discipline). Three needed it:
- **0461C** *…etc., usque ad et a ventis insidiarum verbo et opere **defendit*.** The verb has no
  expressed object; the abridgment took it. Rendered "and by word and deed **protects from** the
  winds of snares" — an intransitive English construction, so **nothing is supplied**.
- **0460D** *…usque ad quia quid non ex ipso de quo dicitur: Ex ipso… omnia**?*** The tail keeps
  its question mark, and it is the tail's own. See §T3.
- **0470A** *…usque ad Petrus et Paulus martyrio coronati sunt.* A complete clause; the head
  (*Post passionem Domini vigesimo quinto anno*) is the fragment. Rendered as it stands, abrupt.

### M7 · Lemma expansion — both classes stated, so the contrast is not misread

Per the 2026-08-19 addendum, **a control has to be the same class as the thing it controls.**

- **Clipped lemmata left as legible stumps** (nothing elided that English needs; the Latin stands
  opposite): *A Paulo.* → "*By Paul.*" · *Profecti.* → "*They departed.*" · *Alii vero.* →
  "*But others.*" · *Genus ergo,* etc. → "*Being therefore,* etc." · *Ipsius enim,* etc. →
  "*For his,* etc." · *Erant autem omnes.* → "*And they were all.*" · *Contulit multum.* → "*He
  helped much.*" · *De quibus,* etc. → "*Of whom,* etc." · *Neque secundum.* → "*Neither
  according to.*" · *Oportebat quidem,* etc. → "*It behoved indeed,* etc." · *Portum,* etc. →
  "*A haven,* etc." · *Cum autem,* etc. → "*And when it came to pass,* etc."
- **Clipped lemmata expanded, because the stump is not English at all**: *Quia quae de te,* etc.
  → "*That the things which they have heard of thee,* etc." (a bare relative with no verb) ·
  *Multae te.* → "*Much learning doth turn thee.*" (a bare adjective and pronoun; the verb
  supplied is Act 26:24's own *convertunt*, which is what convention 3 means by "the phrase it
  stands for") · *Ad Areopagum.* → "*To the Areopagus.*" · *Sine prohibitione.* → "*Without
  prohibition.*"

⛔ **Contrasting the two lists manufactures an inconsistency that is not there** — the first
group has nothing elided that English needs, the second does. Ruth's convention 3 governs both.

### M8 · Four glosses where the Latin word had to survive into the English

The Song-of-Songs case 2 (*where the gloss IS the etymology, an English word sharing no root
makes the gloss explain nothing*). Each adds one italic span the Latin does not have, and each
is declared here rather than left to look like drift:

- **0460B, *sermologus*.** *vel seminiverbius, id est **sermologus*** — a Greek-formed coinage
  offered as a synonym for *seminiverbius*. Kept Latin. The lemma itself is **rendered**:
  *seminiverbius* → "**word-sower**", because the gloss's own definition (*qui verbum seminat*)
  carries into English intact and Douay's "babbler" would delete it. ⚑ **That is a conformation
  refused**, in miniature.
- **0461B, *pagus*.** *Areopagus … nomen trahens a Marte, qui Graece Arios dicitur, **pagus**,
  villa.* The word being decomposed cannot be its own translation; *villa* is rendered "a
  village". So: "…who in Greek is called Arios, *pagus*, a village."
- **0463C, *sacrum*.** *Sacrilegi dicuntur a profana diligentia. **Sacrum** enim mundum et
  profanum significat.* Kept, because the whole sentence is about the Latin word's double sense.
- **0467A, *ambitio* / *phantasia*.** *Pro **ambitione** in Graeco ponitur **phantasia***. Both
  kept — a statement about which word each language sets.

⚑ **And the four places where the Latin did NOT need to survive**, recorded so the treatment
does not look arbitrary: *Typhonicus* → "*Typhonic.*" with *ventus tempestuosus* → "a tempestuous
wind" (the second is a description, not an etymology) · *Syrtim* → "*Syrtis*" with *angustia sive
tribulatio* Englished · *amens*/*fortunatus* (0463D, glossing *Eutichus*) → "*out of his mind*" /
"*fortunate*" · *caedens*/*occidens* (0465D) → "**he that strikes**" / "**him that kills**",
because English carries that distinction with no help from us.

### M9 · Three lemmata rendered AGAINST the familiar English Bible, deliberately

The 11551 *stylus* failure in miniature, three times. Each is a place where Douay's word would
have made the gloss explain nothing.

1. **0462D, *Semicinctia*** → "***Half-girdles***", not Douay's "aprons". The gloss's second
   definition is *vel **zonae*** — "or girdles" — and only a rendering that keeps the girdle in
   the lemma lets the alternative be an alternative.
2. **0467A, *Cum multa ambitione*** → "***With much ambition***", not Douay's "with great pomp".
   The gloss defines it as *multa turba **ambiente** eos*, "a great crowd **going about** them",
   which is the *ambi-* root doing the work; and *pompa* is a different word in the same
   sentence (*pompa regalis officii*), which "pomp" would have collided with.
3. **0470A, *Conductu*** → kept as "***Conductu***", not "in his hired lodging". Migne glosses it
   *in libera custodia per quam **conducebatur***, reading the noun from *conducere* "to lead" —
   and "hired" shares nothing with "conducted". The one lemma besides *Saule, Saule* that stays
   Latin, and for the same reason.

⚑ Also resisted, and recorded because the familiar English arrived first in my own reading before
the collation caught it: **0460B *Quid vult seminiverbius*** wanted Douay's "babbler" (see M8);
**0468B *Eramus universae animae*** wanted "we were in all two hundred threescore and sixteen
souls", which is a number Migne does not print (§N).

---

## §S · THE UNEXPRESSED SUBJECT — every supplied pronoun, named

The measured dominant defect class. Each site is a "he/she/it/they" the Latin does not print.
Where two readings both construe I say so rather than choosing silently.

- **0460A · *Apostoli vero contradicebant Christum regem esse Judaeorum*** → "But the apostles
  spoke **against it**, that Christ was king of the Jews". ⚠ **Both the object and the verb's
  force are open, and I did not resolve them.** (a) *contradico* + acc.-inf. normally means "to
  deny that", which would make the apostles deny Christ's kingship — and the appositive *id est
  confitentium* then explains nothing and the closing *unde et Judaei ipsum Christum accusabant*
  has nothing to follow from. (b) Migne is playing on the *contradicit Caesari* he has just
  quoted, and the apostles are **answering back**, asserting a kingship over the confessing
  rather than over the nation — which is what makes the Jews' accusation of Christ follow. **I
  supplied a bare "it" and the neutral "spoke against", which carry (b) without excluding (a).**
- **0460D · *docet esse*** → "**he** teaches" — Paul, from *Nota ordinem hujus disputationis*.
- **0461A · *loquitur*, *conservat et confirmat*, *ne nova videatur inferre*** → "**he** speaks",
  "**he** preserves and confirms", "lest **he** should seem" — Paul throughout; the paragraph is
  the Areopagus speech and *Sicut et quidam vestrorum poetarum* is his sentence.
- **0461A · *statuit judicare*** (0461B) → "**he** has appointed to judge" — God, from *Despiciens
  Deus* two lemmata above.
- **0461C · *contulit Evangelium cum apostolis, inquirens … an recte praedicaret*** → "**Barnabas**
  … conferred the Gospel with the apostles, inquiring … whether **he** preached rightly". ⚠
  **Migne makes *Barnabas* the nominative**, so *contulit* is his; but Gal 2:1–2, which he is
  summarizing, makes Paul the one who goes up and lays out his gospel, and *praedicaret* has no
  expressed subject at all. **Both construe; I followed the printed nominative and left
  *praedicaret* to take it, and did not resolve the second.** See §P's closing note.
- **0461D · *Nondum enim in Syriam Phoenicis venerat*** → "**he** had not yet come" — Paul.
- **0462A · *Hanc prius non viderat forsitan*** (0463B) → "Perhaps **he** had not seen **it**" —
  Paul, and *Hanc* is Rome, from the lemma *Romam videre*.
- **0462B · *quia in fide Trinitatis*** → "because **it is** in the faith of the Trinity". The
  Latin has no verb; English cannot leave the clause verbless. **Named because it is a supply.**
- **0463A · *ostendit de quibus custodibus Ecclesiae praecipitur*** → "**he** shows" — Bede, whose
  siglum opens the note.
- **0463B · *Transire volebat*** → "**He** wished to pass" — Paul, from *In Macedoniam*.
- **0463C · *Hoc loquitur quasi Judaeus … aut quasi Christianus locutus est*** → "**He** speaks
  this as a Jew … or **he** spoke as a Christian" — the town clerk of Act 19:35, who is the
  subject of *Et cum haec dixisset* in the lemma. ⚠ Not Paul: the whole point is that the
  speaker is the Ephesian *scriba*.
- **0463D · *transit autem a Macedonia et Achaia ire Jerusalem*** → "**he** passes" — Paul.
- **0464A · *redivivus adducitur*** → "**he** is brought back alive" — Eutychus, from the lemma.
- **0464B · *Non illis … praeponit … sed illos maxime glorificat*** → "**He** does not prefer …
  but **he** chiefly glorifies" — Paul, whose *Beatius est* is the lemma; the note's own closing
  address (*Vos igitur episcopi*) is a second voice inside the same abridged extract and is left
  as printed.
- **0464C · *meruit vocari*** → "**he** deserved to be called" — Philip, the lemma.
- **0465A · *Non enim ita reprobas … si autem ideo celebraret … non hoc diceret Jacobus*** →
  "**thou** dost not reject … but if **he** celebrated … **James** would not say this". ⚠ **The
  person shifts inside the sentence and it is Migne's**: *reprobas* is second singular (James
  speaking to Paul, which is the situation of Act 21:24), *celebraret* third. Rendered with the
  shift intact; see §T4.
- **0465B · *Quo captus cum parentibus commigravit*** → "Whither, having been taken captive,
  **he** migrated with his parents" — Paul.
- **0465D · *notat quia non occidit*** → "**he** notes that **he** did not kill" — Paul, the
  speaker of *Consentiebam*, in both places.
- **0466A · *stipabatur*** → "**she** was thronged on every side" (0467A) — **Bernice**, from
  *illam* in the same ablative absolute and from Act 25:23's *Agrippa et Bernice*. ⚠ *illam* is
  accusative, so the passive's subject is genuinely unexpressed; the feminine of *illam* and
  *ambiente* is what fixes it.
- **0466B · *quia hoc noverant contrarium esse illis*** → "because **they** knew this to be
  contrary to them" — the Pharisees, the nearest nominative.
- **0466C · *dimisit eum liberae custodiae*** → "**he** dismissed him" — Felix.
- **0467B · *Suscitavit quidem ante mortuos … vel suscitat*** → "**he** raised up the dead
  before … or **he** raises them up" — God, from *si Deus mortuos suscitat* in Act 26:8, which is
  the clause the lemma clips.
- **0468B · *quod supra hortabatur eos Paulus*** — **no pronoun supplied**; Migne names Paul.
- **0468C · *portum salutis consequitur*, *quaerat*** → "**he** attains … **he** may seek" — the
  *qui* of *nisi qui pane vitae pascitur*, carried through the whole period.
- **0469A · *destruxerunt, et aedificia mutilaverunt*** → "**the men of Salerno** … destroyed" —
  Migne names them (*Salernitani*).
- **0470A · *contra Judaeos disputabat*** → "**he** disputed" — Paul; the book's last clause.

---

## §R · REAL WORDS THAT READ ODDLY — rendered as printed, **every marker declined**

Per the standing rule (refuted five of five), a real, well-formed word that reads oddly is
**Migne's** until a plate says otherwise.

### R1 · 0461A · *aurum **ex** argentum* — the one that came nearest a `[cj:]`, and it is declined

> *Homo in medio est, habens Deum superiorem, **aurum ex argentum**, cum caeteris hujusmodi
> inferiora, quae non debent ei comparari.*

*ex* is a real preposition and it governs the ablative; *argentum* is accusative, so **the phrase
cannot construe as printed**. The conjecture is *et* — "gold and silver" — and it is near-certain
from the sense (man in the middle, God above, metals below).

⛔ **Declined, and here is the bar it fails.** Pattern 18a's test is whether the printed word
makes the sentence **assert something the author is arguing against**. *aurum ex argentum*
asserts nothing at all: it fails to construe, which 18a explicitly leaves outside the ruling
("mood, voice, number and person anomalies that merely fail to construe stay declined", 11064
@1154C the named parallel). A preposition governing the wrong case is that class, not the
negation-or-correlative class the 2026-08-15 extension admits.
**Rendered as closely as the printed words allow**: "gold from silver, with the rest of this kind
as lower". ⚑ **The rival, named because a reader never sees what I rejected:** the other reading
is that our digitization lost the *t* of *et* — a tei-patch, not a conjecture — and it loses only
because I cannot read the plate. Col. 0461 is page 236, the same crop W1 wants.

### R2 · 0465B · *Aemulator legis Dei **existentis*** — rendered, marker declined, rival named

*existentis* is a genitive singular participle and the only genitives near it are *legis* and
*Dei*, so it must agree with one: "a zealot of the law of the **God that is**". **The rival is
that it is a calque of the Greek's nominative ὑπάρχων** ("being a zealot for the law of God"),
which the Latin's case forbids but which the Greek behind Migne's own *In Graeco* would support.
**It loses because the case is printed and the case decides**; rendering it as a nominative
would be reading through the Latin to a Greek the page does not print. Rendered as printed, no
marker.

### R3 · Rendered literally, no marker, reasons given

- **0466A, *Non enim tribunus … civis esse **non** posset, sed…*** A double negative that
  construes perfectly ("it is not that he could not be"), and both negatives are carried on their
  own hosts. **Not a defect**; recorded because a count-based check will flag the pair.
- **0468D, *hoc autem **non indigebant***.** A plural verb with *hoc* accusative, where *indigere*
  usually takes the genitive or ablative. Attested with the accusative in later Latin; rendered
  "but these did not need this". Pattern 9 (attested medieval usage), no crux beyond this line.
- **0461D, *Nunc nimirum declarato et narrato, id est Evangelio*.** An ablative absolute with no
  expressed noun; the antecedent is *verbo*, carried over from the lemma *de verbo* four words
  earlier. Rendered as elliptically as it stands ("Now indeed declared and narrated, that is, the
  Gospel"), **nothing supplied**. ⚑ The alternative — supplying "the word" — was rejected as the
  kind of quiet completion the abridged books invite.
- **0466C, *jussit non prohibere quemquam ministrare ei de suis rebus*.** *quemquam* is the object
  of *prohibere*, not its subject; rendered "he commanded that no one be forbidden to minister to
  him", which keeps the negation on *prohibere* where Migne prints it.
- **0463D, *ut sit praeparatio virtutis faciendae et dicendae*.** *virtus* here is the moral one,
  so **"virtue"**, per `cruces-0000.md` §V's per-occurrence rule. (The other three *virtus*-family
  words in my range: 0463A *signa faciunt* is not one; there is no *virtus* meaning "miracle" in
  cols 0460A–0470A. A checked negative on the one term this work varies.)

---

## §T · THE TESTS, AND WHAT EACH RETURNED

### T1 · A `[sic:]` must not swallow the word it marks

**Vacuously clean: zero `[sic:]` in the range**, and zero `[cj:]`, `[d:]`, `[ed:]`, `[nt:]`.
The English was nevertheless read once **with every marker stripped**, which is the mechanical
form of the test: no stranded article or preposition sitting on punctuation, no doubled mark,
every sentence readable aloud. ⚑ The four `[var:]` were checked against the fourth question 7a⁗
does not ask — **does the clause still have the thing it acts on?** — and all four sit **beside**
complete renderings (*Sosipater*, *Do not receive gold*, *he brought the sentence*,
*Bithalassum*), none inside one.

### T2 + T2a · Every printed negative named to its single Latin host

**Eighty-six negative particles** across the four chunks (0014 ×18 · 0015 ×18 · 0016 ×41 ·
0017 ×9, counted per occurrence and not per line, taking *non · nec · neque · nisi · nullus · nihil · ne · nondum · nemo*), extracted
mechanically with context and then **each located in the English and checked to be ON its host**,
not merely present.

The 2a trigger population — a negative resting on a verb with a **quantifier, correlative or
predicate** adjacent — fired **twelve** times. Each host was proved from the sentence's own
structure, never from what reads well:

| col | Latin | the host, proved from | English |
|---|---|---|---|
| 0460D | *ut **non solum** pro luce et vita, **sed etiam** pro cognatione generis* | `non solum … sed etiam` | "not only for light and life, but also for the kinship of race" |
| 0461A | *His qui prophetas non recipiebant, **non Moysi, non Isaiae** … **sed** auctorum suorum loquitur testimonium* | the `sed auctorum suorum` answers the **genitives**, not the verb | "he speaks the testimony, **not of Moses, not of Isaias** … but of their own authors" |
| 0461A | *non de divina pagina, ne nova videatur inferre* | *de divina pagina*, answered by *De Arato poeta hoc sumptum est* in the same sentence | "not from the divine page" |
| 0461C | *ut **non solo verbo** terreat* | ⭐ **the quantifier, not the verb**: *solo* is what the sentence limits, and *vehementius disserit* follows as the second means | "that he may terrify **not by word alone**" |
| 0461C | *non quia ipse de hoc dubitaret, **sed ut** mentes … confirmaret* | the whole `quia`-clause, named by `sed ut` | "not because he himself doubted of this, but that he might confirm" |
| 0462A | *Non peccata Joannes suo baptismate remisit, **sed** poenitentiam docuit* | the whole *peccata … remisit*, named by `sed … docuit` | "John did not remit sins by his baptism, but taught penance" |
| 0463B | ***videre tantum** dicit, non autem multa pati* | *multa pati*, answered by *tantum dicit* | "he says only *to see,* and not to suffer many things" |
| 0464A | *Id est **non ex toto** discessit, vel rediit* | ⭐ **the quantifier *ex toto***: the gloss's point is that the soul **partly stayed** — *Anima enim ipsius in ipso est* is the lemma | "it did not wholly depart" (scoped, **not** "it wholly did not depart") |
| 0464B | ***non enim omnia** scripta sunt* | ⭐ *omnia*: the argument is that the Gospel is not exhaustive | "**not all things** are written" |
| 0464B | *Non illis qui relictis omnibus secuti sunt Dominum … praeponit, **sed** illos maxime glorificat* | *praeponit*, named by `sed … glorificat` | "He does not prefer … but he chiefly glorifies" |
| 0465A | *Non enim **ita** reprobas legalia **sicut** dictum est* | ⭐ the `ita … sicut` correlative: the denial is of the **manner**, not of the rejecting | "thou dost not reject the legal observances **in the manner that** has been said" |
| 0469A | *patet Paulum **non primo** praedicasse Romanis* | ⭐ **the adverb *primo***: the sentence's own premise is the question *Christiani Romae habitantes unde?* — there **were** Christians at Rome before him | "Paul was **not the first** to preach to the Romans" |

⚑ **0469A is the one that would have beaten test 2 on its own.** The plausible wrong reading is
"Paul did not preach to the Romans at first", which is grammatical, reads better, and asserts
something the paragraph denies: the gloss's whole work is to explain how there were Christians at
Rome already. The host is proved by the question, which is structure, not sense.
⚑ **0464A is the Esther shape** — a negative correctly attached and still liable to land in the
wrong place in English word order. "It wholly did not depart" and "it did not wholly depart" are
both English and only one of them is what *Anima enim ipsius in ipso est* says.

### T2b · Every anchor checked against the WORD it stands beside

All **39** anchors (9 + 9 + 13 + 8) were printed with their Latin context and the matching English
context and compared one by one. **Zero displaced.** Seven are deliberate mid-construction splits
matching Migne's, and one was **repaired during drafting**:

- **0460C** *vel Judaei sunt [0460C] qui hoc dicunt* → "or it is the Jews [0460C] who say this".
- **0460D** *unum Deum auctorem [0460D] mundi omnium* → "one God is the author [0460D] of the
  world, of all things".
- **0461B** *fidem praebens omnibus quod [0461B] resurgent* → "giving faith to all that [0461B]
  they shall rise again".
- **0462C** *Judicia [0462C] Dei abyssus multa* → "The judgments [0462C] of God are a great deep".
- **0465D** *audit ex ore [0465D] ipsius* → "hears from his own [0465D] mouth". ⚠ **English
  reverses the two words**, so the anchor sits inside the same two-word construction but on the
  other side of it. Named because it is the only one where the order could not be preserved.
- **0466B** *spiritum non confiteri [0466B] et angelos* → "do not confess a spirit [0466B] and
  angels".
- **0469A** *contra [0469A] quam, scilicet valerent aegritudinem* → "against [0469A] which
  sickness, namely, they availed".
- ⛔ **0461A, repaired.** Migne splits *loquitur [0461A] testimonium*. My first draft had fronted
  "a testimony" and left the anchor eleven words downstream, at *versum Arati ponens* — the 8995
  failure shape in miniature. The sentence was **restructured** so the anchor stands where he
  puts it: "he speaks the [0461A] testimony, not of Moses…". **Found by this test and by nothing
  else.**

### T3 · Punctuation compared BY COLUMN BAND, never by total

A band-partitioning script compared colons, semicolons, question marks, exclamations, guillemets
and parentheses across all **41 anchor-delimited bands**. ⛔ **First pass returned ten mismatched
bands, and every one was mine, and nine of the ten were a supplied semicolon** — precisely the
class the brief names.

| chunk | band | what I had written | what Migne prints |
|---|---|---|---|
| 0014 | [0460A] | "of them that confess**;** whence" | *id est confitentium,* **comma** |
| 0014 | [0461A] | "a verse of Aratus**;** and out of" | *versum Arati ponens,* **comma** |
| 0014 | [0461B] | "called Arios**;** *pagus*" | *Arios dicitur,* **comma** |
| 0014 | [0462A] | "by grace**;** this is what" | *per gratiam,* **comma** |
| 0015 | [0462C] | "by certain men**;** because he gave" | *sicut traditur a quibusdam**:*** — a **colon**, not a comma |
| 0015 | [0464A] | "kept in memory**;** for the memory" | *memoria retinendum,* **comma** |
| 0015 | [0464B] | "are written**;** but Paul" · "Holy Spirit**;** or it may" | two **commas** |
| 0016 | [0464C] | "prophetesses**;** but the truth" | *leguntur fuisse,* **comma** |
| 0016 | [0464D] | "New Testament**;** but they that" | *salutem habituri,* **comma** |
| 0016 | [0465A] | "has been said**;** but if he celebrated" | *sicut dictum est,* **comma** |
| 0016 | [0465B] | "Greek tongue**;** or, lest" | *loquebatur, vel,* **comma** |
| 0016 | [0466B] | "and angels**;** and therefore" | *et angelos,* **comma** |
| 0017 | HEAD | "according to some**;** but it is better" | *secundum quosdam,* **comma** |

**After repair: 41 bands, and every band matches on every mark counted — with ONE exception,
which is deliberate.**

⚑ **0015, band [0462B]: one colon in the English that Migne does not print, and it is Pattern
8b.** *Quaestio est, **utrum** ille qui per ignorantiam forte a non baptizato … debeat
rebaptizari**?*** is an **indirect** question closed with `?`, and English cannot end that
construction with a mark. Recast direct behind a colon: **"The question is: ought he who through
ignorance has perchance been baptized by one not baptized, but nevertheless of right faith, to be
rebaptized?"** The mark is kept, nothing is deleted, and the extra colon is the convention's own
cost. ⛔ **This is the only band mismatch in the stint, it is intentional, and the merge should
not "fix" it.** (The peer declared the identical thing at 0443C; two 8b recasts now stand in this
book.)

⛔ **No comma→semicolon sweep was performed.** Migne prints **33 semicolons of his own** in my
range (0014 ×9 · 0015 ×8 · 0016 ×10 · 0017 ×6), so Tobit's narrow exception — which rests on a
book printing **zero** — does not apply and was not invoked.

**Question-mark parity: 12 in the Latin, 12 in the English** (0014 ×2 · 0015 ×2 · 0016 ×6 ·
0017 ×2), each on the sentence Migne puts it on. Five are worth naming because they look like
errors and are not:
- **0460D** *…usque ad quia quid non ex ipso de quo dicitur: Ex ipso… sunt omnia?* — a `?`
  closing an **abridgment tail**. Kept exactly there.
- **0461D** *fuere tamen Paulus vel Aquila; vel timore Judaeorum, vel aviditate convertendi eos?*
  — a `?` on what reads as a statement with alternatives. Kept (Pattern 8).
- **0465B** *Graece nosti?* and **0466A** *Quid si spiritus?* and **0467B** *Quid incredibile?* —
  question marks **inside italic lemmata**, carried into the English lemmata unchanged.
- **0465D** *tam facile dicis civem Romanum te esse?* — a direct question, and Pattern 17 makes it
  singular ("dost **thou** so easily say that **thou** art").

### T4 · The fourth test — does the paragraph ASSERT what he asserts

Run last, with the counts already clean, on all 134 paragraphs. It is what produced §V1's four
divergences, §M9's three refused conformations, §M2's *Saule, Saule* decision and §R1's decline.
Four paragraphs were read twice under it and the reasoning is recorded, because a blind reader
will stop at each:

1. ⛔ **0464B, Act 20:35 — repaired.** My draft rendered *Nolite accipere aurum* as "Do not
   possess gold", from the familiar Mt 10:9 and from this work's own 0434B. **It read perfectly
   and it was false**: the paragraph proves *beatius est dare quam **accipere***, and *accipere*
   is the word it proves it with. Repaired to "Do not receive gold" and marked. **Nothing was
   missing, no count changed, the band matched.** This is the conformation the brief warned would
   arrive over the plate, and it did.
2. ⛔ **0463C, Act 19:40 — the speaker.** *Hoc loquitur quasi Judaeus, nolens Judaeos ab idolorum
   cultoribus occidi.* My first reading took the subject to be Paul; it is the **town clerk** of
   Act 19:35, who is the subject of the lemma *Et cum haec dixisset* and the only person in the
   chapter who could speak "as a Jew … or as a Christian" about protecting the Jews. Repaired
   before filing; §S records it.
3. **0465A, Act 21:24 — the person shift, left standing.** *Non enim ita reprobas legalia … si
   autem ideo **celebraret**, ut actione simulata suam occultaret sententiam, non hoc diceret
   Jacobus.* Second person to third inside one sentence. **It asserts what he asserts**: James is
   addressing Paul (*reprobas*) and then speaking of him in the third person as the subject of
   James's own hypothetical. Rendered with the shift intact, no marker, no repair.
4. **0468C, Act 27:34 — a long period that reads smoothly, and it is Bede's.** *Nemo saeculi
   tempestates evadit, nisi qui pane vitae pascitur, et qui … innititur, auxilio Domini
   coruscante portum salutis consequitur, ita ut saeculo expeditus, flammam dilectionis … quaerat.*
   ⚑ **A sentence that reads smoothly where the Latin is rough is a suspect, not a success**, so
   it was re-parsed: *consequitur* is the main verb of the second *qui*-clause, not a third
   parallel, and *auxilio Domini coruscante* is an ablative absolute, not an instrument of
   *innititur*. The English reproduces that structure. **Left as written.**

⚑ Two further smooth-where-rough suspects were re-examined and **left rough**: 0461D's verbless
ablative absolute (§R3) and 0470A's headless abridgment (§M6).

---

## §Z · WHAT I DID NOT DO, AND WHY

1. **No `[sic:]`.** The three non-words (§W1–W3) are **rendered**, per the launcher's ruling on
   the peers' split, and a `[sic:]` on any of them would publicly blame Migne's plate for what
   addendum A says is our digitization's error ten times out of ten. Ship test B.
2. **No `[cj:]`.** One candidate, *aurum ex argentum* at 0461A, **declined with the bar stated
   and the rival named** (§R1). A preposition governing the wrong case is 18a's declined class.
3. **No `[ed:]`.** Nothing in my four chunks is a hole in the digitization. The three non-words
   are corruptions **of** text, not losses **of** text, and Pattern 13 is for the second.
4. **No `[nt:]` — and I did not force one.** All **92** notes in my range are attribution sigla
   (`(RAB.)` ×37, `(ID.)` ×26, `(BED.)` ×19, `(AUG.)` ×2, `(CHRYS.)` ×2) or scripture locators
   (`(Joan. XVIII)`, `(Rom. II)`, `(I Cor. III)`, `(Cant. II)`, `(Rom. X)`, `(Psal. XXXIX)`).
   **Not one is editorial prose**, judged by content and not by length; the longest is thirteen
   characters. **Pattern 15 never fires**, exactly as the peer found for its 115.
5. **No `[f:]`** — runbook false positive 4. Lemma-and-gloss commentary, not a florilegium.
6. **No `[d:]`** — no run is set twice anywhere in the four chunks. *Ignoto Deo* appears twice at
   0460C but they are lemma and re-quotation, twenty words apart, with *usque ad* between them;
   *Magna Diana Ephesiorum* twice at 0463B–C in two different verses' lemmata. **Neither is a
   compositor's doubling**, and Pattern 11a's "which copy is the intrusion" question does not
   arise because neither copy is intrusive.
7. **No `[cn:]`, and none is owed.** PL 114's spot check for this work is a recorded **checked
   zero** — no numbered `Forte` apparatus, both mid-page work divisions examined, and **one of
   them is the Acts→Romans division at cols 469/470, which is inside my range and is the reason
   the zero covers this tail.** That zero licenses shipping; it does not license the claim that
   the work has no notes, and I make none.
8. **No plate was read by me**, and none blocks the range. ⭐ **But one of my questions is now
   half-answered by a read someone else already did** — the 0435B crop behind
   `data/tei-patches/8976.json` — and §M4 turns that into a prediction with a written patch.
   **If the merge will spend crops, spend two, in this order:**
   **(a) cols 461/462, p. 237** — the highest-yield page in the range, and it closes **three**
   entries at once: §M4's *fuit. ita* (predicted to be a lost colon, exactly as 0435B was),
   §W1's *Sceno factoriae*, and §R1's *aurum ex argentum*.
   **(b) col. 0468 band B/D, p. 239** — settles §W2 *Tyrrhenc* and §W3 *Thelasson* together, with
   §W5's *dysin* on the same page. **Two crops close six entries.**
   ⚠ **And the patch file's own ordering gate is now open**: it says the 0435B patch is held back
   until the last Acts stint lands, because applying it re-chunks `src/latin/8976` under any agent
   still reading. **I am the last Acts stint and I am done reading.**
9. **Column-band arithmetic not reported** — runbook false positive 1. My bands skip letters
   freely (0466D → 0467A → 0467B → 0467C, then 0467D → 0468A) and 0469A → 0470A jumps a whole
   column at the work division. **Normal, and the 469/470 jump is the book ending.**
10. **`(cont.)` handling: not applicable.** No `## ` head repeats across my chunk boundaries —
    0014 ends inside CAPUT XVIII and 0015 opens CAPUT XIX, 0015 ends inside CAPUT XX and 0016
    opens CAPUT XXI, 0016 ends inside CAPUT XXVI and 0017 opens CAPUT XXVII. **Checked, not
    assumed.**
11. **I did not write `cruces.md`, and I touched no file below 0014.**

---

## §Q · READ CLEAN — the sections where I found nothing

Named, because a findings list without its negatives is not a report.

- **Chunk 0017, cols 0468D–0470A (CAPUT XXVIII, the last chapter of the book)** — six verse
  addresses, thirteen lemmata, eight notes. The only entries anywhere in it are §N's *vigesimo
  quinto anno*, §W5's *dysin*, §M4's *unde? patet*, and §N's note that Puteoli is not beyond
  Rome. **The lemmata all agree with the Clementine.**
- **CAPUT XXIII and CAPUT XXV entire (0466A–0467A)** — eleven lemmata, all agreeing; two
  supplied pronouns, both named in §S; no divergence, no candidate, no marker.
- ***Ecclesia*: three occurrences, all capitalized, all rendered "the Church."** Checked at the
  source, not taken on trust.
- **Guillemets: zero in both languages, all four chunks.** Patterns 5 and 6 have nothing to govern.
- **Migne's own `( sic )`: none in this range**, so nothing to stack ours on (runbook false
  positive 5).
- **Pattern 9 items met and left alone**: *coelum/coelis* for *caelum* throughout · *tanquam* ·
  *nunquam*/*Nunquid* · *Jerosolymam* · *sylva*-class spellings · *Eutichus* for *Eutychus* ·
  *Ismaelites*-class name forms. **None marked, none italicized**, per runbook false positive 6.
