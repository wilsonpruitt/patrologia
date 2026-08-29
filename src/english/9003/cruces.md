# 9003 · *Expositio in XX primos Psalmos* — cruces

PL 114, cols **0751C–0794D** · 18 chunks · 17,261 Latin words. Attributed by Pez and by Migne to
Walafrid Strabo; in fact **Anselmus Laudunensis et schola**, and through Ps XX largely Augustine's
*Enarrationes* abridged. Translated 2026-08-28 by four Opus stints, none of which could see the
others.

**This file is the four-way MERGE.** The range files (`cruces-0000.md`, `cruces-0005.md`,
`cruces-0010.md`, `cruces-0014.md`) are preserved below, unedited, each under its own heading.
This head is the work-wide layer: what was reconciled ACROSS the four ranges, and what a later
sweep must not churn.

⛔ **Read §0b before anything else in this file.** 9003 is the **first work in the corpus collated
against Migne's plate page by page — all 22 pages** — and that changed almost every part of the
apparatus. A reader who does not know it will misread the whole thing: markers that a range file
argues at length are gone; markers the range files do not mention are here; and several sentences
of English mean the opposite of what the same range file quotes.

## §0a · Apparatus, counted from the English and not summed from four reports

**48 `[var:]` · 12 `[cj:]` · 4 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` · 0 `[n:]`** — counted
from `src/english/9003/0*.md` after the plate collation, the blind polarity read, and this merge.
**Do not sum the four range files.** Every one of their headline counts is stale: `cruces-0000`
says 1 `[cj:]` where its own register then fires a second; `cruces-0005` says ten `[var:]` before
one was withdrawn and two more were recovered from the plate; `cruces-0014` says five `[sic:]`,
three of which are withdrawn.

| range | cols | `[var:]` | `[cj:]` | `[sic:]` |
|---|---|---|---|---|
| 0000–0004 | 0751C–0762A | 12 | 2 | 1 |
| 0005–0009 | 0762B–0774A | 11 | 3 | 0 |
| 0010–0013 | 0774B–0784A | 16 | 4 | 1 |
| 0014–0017 | 0784B–0794D | 9 | 3 | 2 |
| **work** | | **48** | **12** | **4** |

The work carries `noteCount: 0` in every chunk and none was invented.

`verify-english.mjs 9003` → **OK, 18 chunks**, columns/notes/sections aligned, no duplicate
paragraphs. `scan-raw-markers.mjs` → no marker rendered as literal bracket text.

⚑ **One marker is in the English and in no range file:** `0767B [cj: *cedere*; read *credere*,
"to believe"]` (chunk 0007), on *omnes, qui vetant **cedere** incognita*. It is right — Augustine
writes *vetant credere incognita*, and the sentence is about men who forbid believing what is not
yet known — and it rests on collated plate (p. 389 was read; there is no patch at 0767). It is
recorded here because `cruces-0005`'s register does not list it, and a later reader auditing that
register against the text would otherwise find an orphan.

## §0b · ⛔ THE PLATE COLLATION — all 22 pages, and it is the spine of this work

**2026-08-28. Every page of the work was read at Migne's plate** (archive.org
`patrologiaecurs06saingoog`, PDF page = (column + 11) / 2, corner numbers verified before each
read; 300 dpi, one site at 1200). Five agents and the session lead read pp. 381–402 between them.
**63 TEI patches** were applied (`data/tei-patches/9003.json`) — ⚠ the four range files each say
"61 patches"; they were written before the last two landed. The patches run in **two directions
on purpose**:

- **45 `normalized`** — Corpus Corporum had silently tidied **Migne's own defective type**, or
  moved his lemma toward the Clementine. **Reverted to what Migne printed**, so the defect is
  visible and can take an honest marker or an honest entry in the register.
- **18 `corrupted`** — Corpus Corporum broke a word Migne set correctly. **Repaired.**

**Rate: ~2 sites per page, against a standing corpus estimate of THREE INSTANCES IN TOTAL for
this class.** The rate, not the class, is the finding.

### What the plate did to the apparatus

**Five public claims against Migne were WITHDRAWN, all of them artefacts of the digitization.**

| site | marker withdrawn | what Migne actually prints |
|---|---|---|
| 0787A | `[sic: *poputum*]` | ***populum*** — the *l* at full height at 1200 dpi, matched against *humilem* on the same line |
| 0789D/0790A | `[sic: *cut*]` | ***ut*** — *Exultavit **ut** fortissimus* |
| 0792B/C | `[sic: *cortuum*]` | ***cor*** at a line end and ***tuum*** at the next line's head, **with the column break between them** — there was never a run-together |
| 0790B | `[cj: *resisti*; read *resistit*]` | ***resistit***, final *t* fully formed |
| 0770A | `[var: Vulg. Ps 9:9 *judicabit*]` | ***judicabit*** — the Clementine's own reading |

⛔ **0770A is the one to carry away, and it is a class no procedure we had could catch.** CC had
written *judicavit* for Migne's *judicabit*. The lemma collation, run against that twin, duly
"found" a divergence from the Clementine **that does not exist on Migne's page**, and the English
went into the perfect tense to match. **No collation against a Vulgate file can catch this**,
because the twin is already off the plate before the check begins: the check compares our
transcription with the Vulgate and both of its inputs are innocent of the error. Only the plate
can. The marker is gone and the English reads "*shall judge the world in equity*".

⚑ **Two more were avoided only because a translator declined to fire and asked for the plate
instead** — `0763D *potet*` (a real form with no grammatical slot) and `0769D *misus*` (one
dropped letter inside a scripture lemma), both logged in `cruces-0005` §4 as plate candidates
rather than marked. Both were **CC's**. Migne prints *potest* and *missus*. Had those two fired,
this work would have shipped **seven** false accusations against Migne.

⭐ **One marker was declined AGAINST the collation's own recommendation, and the decline was
right.** At **0788A** the restored plate reads *sive signa, quae **impressi** ad imitandum
sequentibus*, and the collation flagged it as the one place in the work where Migne does not
construe, asking for a `[sic:]` or a `[cj: impressa]`. **It construes exactly as printed**:
*impressi* is the **first-person perfect active** of *imprimo* and *quae* is its object, in a
sentence that is first-person throughout (*itinera **mea***, *gressus **meos***, *charitatem
**meam***). The independent witness is on disk — the same clause in PL 21 at
`sources/pl/tei/7109.xml` reads *signa, quae **impressi** ad imitandum te*. **It would have been
the sixth false claim against Migne.** If a later reader wants the marker, the thing to overturn
is the 7109 parallel, not this note.

### ⭐ Eight real Vulgate divergences RECOVERED, which CC had erased by normalizing toward the Vulgate

This is the collation's positive yield, and it is the mirror image of the withdrawals: where the
digitization had quietly conformed Migne's lemma to the Clementine, the divergence Migne actually
prints came back.

**Four now carry a `[var:]`:** 0758C *Domine est salus* (Ps 3:9, for *Domini*) · 0764B *si **fecit**
istud* (Ps 7:4, for *si feci* — a change of person inside a first-person psalm) · 0771C
***Comprehendantur*** (Ps 9:23, subjunctive for indicative — a wish, not a fact) · 0755C *…non
erunt, **ut** in scriptura* (Ez 13:9, for *et*).

⚠ **0755C is a contradiction inside `cruces-0000` and this is its resolution: the marker STANDS.**
The plate-collation section of that file DECLINED it, on the ground that *ut* + future indicative
construes as nothing and is therefore Pattern 12's business; the blind polarity read, working
later and independently, FIRED it, on the ground that the English still read "and" and was
therefore silently carrying CC's conformation. The blind reader is right about the English: a
`[var:]` is the only marker that shows the reader both that Migne departs from the Vulgate here
and that his departure does not construe. Both sections are preserved below; where they conflict,
**this paragraph governs**.

**Four were weighed and DECLINED**, on a rule worth keeping: *fire where the printed reading
construes in place and yields a different sense; decline where it yields no sense, because that is
broken type and not a divergent citation.* — 0760C *oribus* for *auribus* (Ps 5:2) · 0764A *rapiat
**at** leo* for *ut leo* (Ps 7:3) · 0778D *dimitimus* for *dimittimus* (Jo 11:48) · 0789D *ut gigas
**ac** currendam viam* for *ad currendam* (Ps 18:6).

**And one interpolation was removed rather than translated.** At **0760D** CC had **supplied**
*corde* from Mt 5:8; Migne prints *qui **mundo** conspicitur* alone, and our English had rendered
the supplied word ("with a clean heart"). It now reads "who is beheld **by the pure**". Never
translate what the plate does not print.

### Wilson's marker ruling of this session, and the 31 sorts it tables

Pattern 12 read literally would put a `[sic:]` on every typographic defect the collation restored
and bury the two or three sites that matter under a crowd of notes about broken type. **The
ruling:** *mark where the plate's reading does not construe, or where a reader could not recover
the intended word with confidence, or where the defect could be mistaken for a real variant; do
NOT mark a plainly battered, turned, dropped or wrong sort whose intended word is not in doubt —
record it in the register and disclose the count in the work-level page note.*

**31 sorts are tabled that way**, in four `PLATE COLLATION · REGISTER OF RESTORED TYPE` tables in
the range files below — 6 in 0751C–0762A, 10 in 0762B–0774A, 4 in 0774B–0784A, 11 in 0784B–0794D.
Each row gives Migne's printed form, the intended word, and why the reading is not in doubt. The
four tables are the single register for the work; nothing is duplicated between them and nothing
in the English points at them.

**Six sites cleared the bar and DID take a marker**, and they share one shape — **the defective
sort leaves behind a real Latin word in a real position, so nothing on the page tells the reader
to stop, and our English had been rendering CC's repair**: 0753B `[cj: *quod si*]` (for *quod
sit*, an indirect question) · 0761A `[cj: *operantur*]` (for *operantem*) · 0766A `[cj:
*Providentia*]` (for the dative *Providentiae*) · 0771A `[cj: *Filium homines*]` (for *Filium
hominis*) · 0774B `[cj: *apud ipso*]` (for *apud ipsos*) · 0794A `[cj: *gloria*]` (for the
accusative *gloriam*). ⭐ **0794A states the general reason best:** English has no case endings, so
"glory" renders the printed *gloria* and the conjectured *gloriam* identically — **the reader
cannot see the defect in the English at all**, and the marker is the only thing that tells him it
is there.

⭐ **Two generalizable lessons the plate produced**, both worth carrying to the next work:
- **A Pattern 10 run-together should always be checked against the line ending** (0792B/C): a
  transcription that loses line breaks manufactures exactly that defect out of nothing.
- **`VERS` printed without its period is not a class in this work — it was CC's, three times.**
  See §0h.

## §0c · VOCABULARY RECONCILED ACROSS THE FOUR RANGES — the merge's real work

The four ranges were diffed for this work's load-bearing vocabulary before the merge, by grepping
the English and the Latin twins directly and not by reading the range reports. A lemma-and-gloss
psalter commentary recurs on a small set of words across all four bands, and two of them had
genuinely drifted.

### ⛔ 1. *impius* — the drift, and it is the work's key word. RECONCILED.

*impius* occurs ~47 times across thirteen chunks and it was being rendered **three ways**:
**"ungodly"** in 0000–0004 and part of 0014–0017, **"impious"** in 0005–0009, **"wicked"** in
0010–0013. Worse, the three collided **inside single chunks**. The demonstrative case is
**0769C–0769D**, where Migne glosses his own lemma: the lemma *periit **impius*** was Englished
"the **wicked** one perished", and his gloss four words later — *Non enim appellantur **impii**,
qui Domino vero credunt* — was Englished "they are not called **impious**". **The gloss no longer
explained the lemma it was written for**, which is exactly the 11551 *stylus*/epistyle failure.

**Settled on "ungodly", and 35 English sites were changed.** The reading is fixed by the work's own
opening: at Ps 1:1 Migne argues the distinction between *impii* and *peccatores* (*Si aliqua hic
differentia accipienda est inter **impios et peccatores***), and chunk 0001 built that argument in
"ungodly" against "sinners". Every later band now says the same word. Specifically:

- ***impius*** (noun and adjective) → **"ungodly"** — changed at 0005 ×3, 0006 ×4, 0008 ×7,
  0009 ×3, 0010 ×4, 0011 ×2, 0013 ×3, 0014 ×1, 0016 ×1.
- ***impietas*** → **"ungodliness"** — changed at 0006, 0008 ×2, 0011 ×2, 0014, 0017. It had been
  uniformly "impiety", which is fine on its own but severs the tie Migne draws at 0765D
  (*persecutores **impios** … ab illa **impietate***) and mismatches the Douay at Rom 11:26,
  *avertat impietatem a Jacob*, "shall turn away **ungodliness** from Jacob".
- ***impie*** (adverb, 0786C) **keeps "wickedly"** — English has no usable adverb from "ungodly",
  and *nec impie gessi* is a lemma. Recorded so the exception is not read as a survivor of the
  drift.
- **"wicked" is now reserved** for *malus* (0771A, *cum **mali** florent*), *sceleratus* (0757C,
  0778B), *nefandus* (0772C) and *iniquus* (0766A). Those were checked one by one and left.

⚠ The preserved range files quote the **pre-merge** English at several of these sites — e.g.
`cruces-0005` quotes "*Let them be caught,* however, the impious" for 0771C. The text is right;
the quotation is a snapshot.

### ⛔ 2. *psallere* vs *canere* — the distinction Migne argues. RECONCILED.

*psallere* occurs three times in the work and *canere/cantare* three, and at **0777B** the whole
gloss turns on the difference: *Si autem aliqua hic **differentia** consideranda est, **cantabo**
corde, **psallam** operibus*. The 0010–0013 stint caught its own half of this and fixed it
(*psallam* → "I will play", against *cantabo* → "I will sing"). But the verb's only other
occurrence is in another band — **0770B, *Psallite Domino*** — where it was "**Sing** ye to the
Lord", the very English the gloss reserves for *cantabo*. **Changed to "Play ye to the Lord."**
*Canam* at 0769B ("I will sing", Ps 9:3, the Hebrew edition's reading) is *canere* and stays.

### 3. *speculatio* — a split, and BOTH READINGS STAND. Do not level it.

Three occurrences, in three different bands, and all three are about the Church:

- **0756C** (band 1) *Sion **speculationem** quidam interpretantur* → "Some interpret Sion as
  ***watching***"
- **0770B** (band 2) *habitat in Sion, quae interpretatur **speculatio*** → "which is interpreted
  ***watching***"
- **0792B** (band 4) *quae te tanquam de **speculatione** exspectat* → "which awaits thee as from
  a ***watchtower***"

The first two are Migne **naming what the Hebrew name means**, and the gloss on a name has to be
the abstract noun. The third is the place one watches from, and "as from her watching" is not
English. A sweep that levels these will either turn the etymology into a claim about the Hebrew
that Migne does not make in that form, or make 0792B unreadable. **Recorded, not changed.**

### Checked across the bands and found ALREADY consistent — the negatives, which count

- ***occultum*** — substantival *occulta / occultis / occultum* → "hidden (things / thing / man)"
  in every band; adverbial *occulte* and *in occulto / in occultis* → "secretly / in secret" in
  every band. The adverb/substantive split is uniform across bands 2 and 4 and needs no work.
  ⚠ **0791A is settled and NOT to be re-opened:** *ipsum occultum* is deliberately "hidden **man**"
  at VERS. 13 (two dative relatives requiring a person, picking up the man of VERS. 11) and
  "hidden **thing**" at VERS. 14 (one of the two origins of sin). **The inconsistency is Migne's,
  and levelling it would make one of them false.** The blind reader raised it; it was adjudicated
  and declined; see `cruces-0014`.
- ***tabernaculum*** → "tabernacle" in both bands that carry it (0779C ×4, 0785A, 0791A); the
  *tabernaculum* / *mons* and *habitatio* / *habitaculum* distinctions of Ps XIV are preserved on
  both sides of the band boundary.
- ***differentia*** → "difference" in both bands, and in both it introduces the same formula
  (*Si aliqua hic differentia accipienda / consideranda est*).
- ***in conspectu*** → "in … sight" everywhere; "presence" renders only *praesentia*. No drift.
- ***gentes*** — the four bands **independently converged on a rule**, which is worth recording as
  a rule rather than flattening: "**nations**" inside a lemma or a scripture quotation, "**the
  Gentiles**" in the gloss wherever the Jew/Gentile antithesis is in play. 0789A (VERS. 50) shows both in one
  breath (*confitebor … in gentibus* → "among the nations", glossed "the Gentiles will confess to
  thee for me"), which is Migne's own move.
- ***praesumptio*** does not occur in this work. Checked mechanically over all 18 Latin chunks,
  because the brief named it.
- **0774B *mentem* is deliberately UNMARKED** (`cruces-0010` §1.1) and is not to be re-opened:
  Migne prints *Unum enim **mentem** teneo … in **quo***, a real word with the wrong gender, which
  Pattern 12 cannot wrap and which a `[cj: montem]` would contradict, since the English already
  says "mind".

## §0d · STANDING CHECKS — the negatives, recorded so they count

- ***deservit* / *deserit*: CHECKED ZERO** across all 18 chunks, mechanically over the whole Latin
  work. Neither spelling, nor any *deservi-* / *deseru-* form, occurs in 0751C–0794D. The pair has
  fired in both directions elsewhere in the series, so the zero is worth having.
- **Migne's own `( sic )` does not occur in this work.** All four `[sic:]` are ours, all four on
  non-words, all four now standing on collated plate: 0751D *partiorem* (Pez's *monitum*), 0775B
  *proptera*, 0792B *salavifica*, 0792C *magnifibabit*.
- **Every `[cj:]` and `[sic:]` in this work now rests on a page that was read.** After the
  collation there is no marker in 9003 whose ground is the Corpus Corporum transcription alone.
- **`noteCount: 0`** in all 18 chunks; Migne prints no footnotes in this work and none was
  invented.
- **`VERS.12.--` and `VERS.13.--` at 0756C–D** (chunk 0002) are set without the space in the
  Latin twin and in the English alike, on a page that was collated (p. 383). Migne's spacing,
  carried; **not** the same phenomenon as §0h's missing periods.

## §0e · WHAT A BLIND READER SHOULD GO TO FIRST

Merged from the four range files, because each named its own. **This section is NOT to be given to
that reader** — the runbook forbids showing the cruces before findings are formed; it is for
whoever adjudicates afterwards.

1. **0788A *impressi*** — the one deliberate dissent in the work. A first-person perfect that the
   collation itself read as a defect. If a reader raises it, the answer is `sources/pl/tei/7109.xml`.
2. **0774B *mentem … in quo*** — a real word, wrong gender, no marker, by decision.
3. **0791A *ipsum occultum*** — "hidden man" at VERS. 13 and "hidden thing" at VERS. 14. Settled;
   see §0c.
4. **0755C *ut* + future indicative** — carries a `[var:]`, does not construe, and is meant not to.
5. **0779D `[cj: *in corde*; read *sed non in corde*]`** — a lost negation on the plate, in a
   simile that exists to distinguish lips from heart. Our English had *also* smoothed the
   connective around it; both are repaired.
6. **0764B *reddidit mala pro nobis*** — almost certainly Migne's slip for *pro bonis*. Rendered as
   printed, deliberately unmarked, because the intended word is not in doubt.
7. **0794A `[cj: *gloria*]`** — the defect is invisible in English; the marker is the only signal.
8. **0789A, VERS. 50** — the lemma reads *confitebor* and Migne's own gloss reads *confitebuntur gentes*.
   Carried as printed on both sides.
9. **The 31 tabled sorts** — a reader collating the English against the twin will meet restored
   defects (*fremueruut*, *populii*, *poehas*, *snperbia*, *jnstitia*) that carry no marker at all.
   That is the ruling, not an oversight.

## §0f · PLATE-READ CANDIDATES STILL OPEN

**None. That is the finding, and it is the first time in the corpus.** All 22 pages are collated;
`data/tei-patches/9003.json` carries an empty `unread` list and an empty `refuted` list. Every
plate candidate any of the four stints logged — 0763D *potet*, 0769D *misus*, 0762B *justorum*,
0774B *mentem*, 0788A *impressi*, the *VERS* periods, the *cortuum* run-together — has been read
and decided, and the decisions are in §0b and in the range files.

What a challenger would have to do, rather than what is left to buy: **re-read a specific column at
higher dpi.** Only one site in the work was read above 300 dpi (0787A *populum*, at 1200), and only
one carries a reading that a re-read could in principle overturn — **0788A *impressi***, where the
question is not the sort but the parse, and where the PL 21 parallel would have to fall first.

## §0g · THE BLIND POLARITY READ — and its headline is a negative

Four fenced readers took the work in four bands (0000–0004, 0005–0009, 0010–0013, 0014–0017),
each reading Latin against English in full, with no `cruces*.md` file and no collation report open
before or after, and with a mechanical negation-token count per chunk as backstop. Adjudicated
2026-08-28, after the plate collation, under Wilson's marker ruling.

**Whole-work result across all 18 chunks: 13 confirmed sites.** Ten carried a defect in **our
English** and were re-rendered; four sat on **Migne's plate** and took a marker with the English
left literal. The two figures overlap by one — 0779D is a lost *sed non* on the plate **and** a
connective our English had smoothed, so it was both re-rendered and marked. **Four new `[cj:]`,
one new `[var:]`.** Eight further candidates were adjudicated and declined, with reasons, under
their own ranges. Per range, ours / Migne's: **0000–0004: 5 / 0** · **0005–0009: 1 / 0** ·
**0010–0013: 3 / 3** · **0014–0017: 1 / 1**.

⭐ **The headline is what the readers did NOT find, and in this genre that is the result.** 7a″ —
a lemma quietly conformed to the familiar English Bible — is the **predicted dominant failure mode
of a lemma-and-gloss scripture commentary**, and it is the reason a psalter commentary gets a blind
read at all. **Two of the four readers reported the profile ABSENT from their ranges**, each
having checked it positively rather than merely failing to notice it:

- **0005–0009** read every quoted verse in five chunks word by word against the plate and found
  **no lemma conformed**: wherever Migne diverges, the English diverges with him and the divergence
  is marked — *Miserere mei, **Deus***, *si **fecit** istud*, *terram **manducabis***,
  *Consu**mm**etur nequitia*, *Templum **Domini***, *Comprehend**antur***, *humili**avit***, *ut
  tradat eos in manus **suas***.
- **0010–0013** checked all fifteen `[var:]` in its four chunks against the printed Latin and
  found each recording a real divergence and **none concealing a conformation**.

The other two ranges returned the same shape from the other side: 0000–0004 found the work's
sharpest 7a″ trap **not fallen into** (0760C/0761A, where Migne prints *quae **veritatem**
consequitur* in the lemma and *quae **haereditatem** consequitur* in the gloss, and the English
carries **both** as printed); 0014–0017 returned zero unaided defects on our side and confirmed
three counter-intuitive negations carried where a smoothing repair was most tempting, including
*non foras mittit consummata dilectio timorem hunc* against the familiar 1 Jo 4:18.

⚠ **The one conformation that did exist was not the readers' to find.** It was CC's, not ours,
and it lived in the Latin: 0755C, where the digitization had moved Migne's *ut* to the Vulgate's
*et* and our English had followed the twin. The plate found it; the blind reader then found that
the English had never been brought across. **Both halves were needed.**

## §0h · CONVENTIONS SETTLED AT THE MERGE

1. ***impius* → "ungodly"; *impietas* → "ungodliness"; *impie* stays "wickedly"; "wicked" is
   reserved for *malus*, *sceleratus*, *nefandus*, *iniquus*.** 35 English sites changed. §0c.1.
2. ***psallere* → "play"; *canere / cantare* → "sing".** One English site changed (0770B). §0c.2.
3. ***speculatio*** is **not** levelled, and *ipsum occultum* at 0791A is **not** levelled. §0c.3
   and §0c. Both are closed.
4. **`[var:]` citation form is the compact one** — `Vulg. <Book> <ch>:<v>`, with the corpus's
   abbreviations (Ps, Mt, Mc, Lc, Jo, Act, Rom, 1Cor, Gn, Ex, Ezech, Apc, Sap). The 0014–0017
   stint had used Migne's own roman-numeral style (*Vulg. Joan. XI, 48*, *Vulg. Ps. XIX, 8*) and
   three of its markers carried **no reference at all**. **Nine markers were normalized**, and the
   three bare ones were given the references they were missing: `Ps 17:21` (*secundum puritatem
   manuum mearum*), `Ps 19:7` (*Exaudiet illum*), `Ps 20:8` (*non commovebitur*).
5. ⛔ **`VERS` without its period is NOT a class in this work — the claim is WITHDRAWN.**
   `cruces-0005` §0a records it at 0772B as Migne's and rides it as printed; `cruces-0010` §4.4
   says it happens "TWICE in this work, so it is a class". **The plate says otherwise at all three
   sites**: Migne prints `VERS. 28.--` (0772B), `VERS. 2.--` (0774B) and `VERS. 7.--` (0781A), and
   Corpus Corporum dropped the period each time. The Latin twins were patched at the collation but
   **two English chunks were left behind** — `0010.md` still read `VERS. 2--` and `0012.md` still
   read `VERS 7.--`. **Both were corrected at this merge.** Where those two range-file sections
   conflict with this one, this one governs.
6. **The patch count is 63** (45 `normalized`, 18 `corrupted`), not the 61 the four range files
   report. They were written before the last two landed.
7. **The range files below are preserved unedited and therefore quote pre-merge English** at the
   sites changed under 1, 2, 4 and 5. Where a range file quotes an English sentence that the text
   no longer contains, the text is right.

---

# RANGE FILE — chunks 0000–0004 · cols 0751C–0762A

*Preserved unedited from `cruces-0000.md`; headings demoted one level. Where it
conflicts with the head above, the head governs.*

## 9003 · *Expositio in XX primos Psalmos* — cruces, chunks 0000–0004 (cols 0751C–0762A)

Translator's range: chunks **0000–0004**, PL 114 cols **0751C–0762A**, 4,154 Latin words.
Apparatus fired: **1 `[sic:]` · 12 `[var:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` · 0 `[n:]`**
— ⚠ **revised twice on 2026-08-28**: the blind polarity read added one `[var:]` @0755C (the
Ezekiel *ut*) — see **THE BLIND POLARITY READ** at the foot of this file — and before that, was 10 `[var:]`: the plate collation added one @0758C (Ps 3:9
*Domine* for *Domini*), which the digitization had erased. See **PLATE COLLATION — markers
withdrawn** at the foot of this file.
(the work carries `noteCount: 0` throughout, as the launch brief states, and none was invented).
`verify-english.mjs` clean for these five chunks; column anchors, `?`, `«»`, `:` and `;` all at
band-by-band parity with the Latin twins (see §5); italic spans 1:1 in every chunk.

---

### §0 · ⛔ THE HEADLINE FINDING: OUR LATIN TWIN DIVERGES FROM MIGNE'S PLATE AT ~ONE SITE PER COLUMN

**This is the most important thing in this file and it is not a translation question.**

I read the plate for my whole column range (archive.org `patrologiaecurs06saingoog`, PDF page =
(column + 11) / 2 — re-verified against the printed corner numbers on p. 384, which reads **757**
in the left corner, and on p. 386, which reads **761**; renders at 300 dpi). I read pp. 381, 382,
383, 384, 385, 386. **Thirteen places where our chunked Latin does not say what Migne printed.**
They run in *both* directions — some are corruptions introduced by the digitization, more are
silent *normalizations* of Migne's own defective type — which is brief §4's class, at a density
nobody has yet reported for a Glossa book.

| col | Migne's plate prints | our Latin twin reads | direction |
|---|---|---|---|
| 0753B | *quod **si** consilium impiorum* | *quod **sit*** | normalized (plate does not construe) |
| 0753B | ***Cathera** autem pestilentiae* | ***Cathedra*** | normalized (plate is a non-word) |
| 0755D | *Quare **fremueruut** gentes* | *fremuerunt* | normalized (broken sort) |
| 0755D | *et **populii** meditati sunt* | *populi* | normalized (doubled sort) |
| 0755C | *In concilio populi mei non erunt, **ut** in scriptura…* | *…, **et** in scriptura…* | normalized **toward the Vulgate**, which reads *et* |
| 0756D→0757A | *…ne idipsum **ver-** \| **geret** in effusionem…* (word split across the column break) | *vergeret [0757A] geret* — **both halves, plus the join** | duplication artifact |
| 0758B | *Non **inconvenienter** animadverti potest* | *incovenienter* | **corrupted** by the digitization |
| 0758C | *et quasi **incorpora-\|litur** male viventibus* | *incorporatur* | normalized (plate is a non-word) |
| 0758C | VERS. 8.-- ***Domine** est salus* | *Domini est salus* | normalized toward Vulg. Ps 3:9 |
| 0759C | *Aut: **Agite** poenitentiam* | *Agile* | **corrupted** by the digitization |
| 0760C | VERS. 2.-- *Verba mea **oribus** percipe* | *auribus* | normalized toward Vulg. Ps 5:2 |
| 0760D | *qui **mundo** conspicitur* | *qui **mundo corde** conspicitur* | **word supplied** (from Mt 5:8) |
| 0761A | *Virum sanguinum **operantur** iniquitatem* | *operantem* | normalized (plate does not construe) |

⚑ **What follows from it, and it binds any later reader of this work:**

1. **No `[sic:]` or `[cj:]` may be fired anywhere in 9003 on the strength of the Latin twin alone.**
   The twin has already been cleaned of most of the plate's defects; a marker keyed to it would
   either miss the real defect or, worse, blame Migne for a reading he does not carry. My single
   `[sic:]` (§1) is safe **only** because I read its plate line.
2. **The fix is a `data/tei-patches/9003.json` + re-chunk**, on the 8968 *significaRuth* precedent.
   That is outside a translating agent's remit and it must not be done mid-batch (re-chunking
   rewrites the Latin from TEI and can move chunk boundaries). **I am escalating it, not doing it.**
3. **Until it is done, my English follows the TWIN, not the plate**, everywhere except the one site
   where the twin is nonsense (0757A, below). I made that call deliberately and I record the
   reasoning so it can be overruled: our English sits in a parallel column beside *the twin*, every
   marker's safety check is a substring test against *the twin*, and an English column that
   contradicts its facing Latin misleads the reader worse than one that matches it. Pattern 7's
   "render the plate" is satisfied instead by this table, which names every place the two part.
4. **A second witness is available and was not needed here** — the on-disk PDF is legible at 300 dpi
   at every one of the thirteen sites. Nothing in my range is recorded as illegible.
5. ⚠ **The rate should not be assumed to stop at col 0762A.** I read six pages; thirteen sites is
   ~2.2 per page. Chunks 0005–0017 have not been collated and **must not be assumed clean.**

#### The one site where the English departs from the twin: 0756D→0757A, *vergeret geret*

The twin reads `…ne idipsum vergeret [0757A] geret in effusionem temeritatis…`. **The plate settles
it: col. 756 ends `…ne idipsum ver-` and col. 757 opens `geret in effusionem temeritatis` (p. 384,
left column, first line — read at 300 dpi and again magnified).** So Migne prints ONE word,
*vergeret*, split across the column break, and our source has transcribed the fragment twice and
joined it once.

- It takes **no `[d:]`**: that marker's tooltip says "Repeated in Migne's plate," and Migne repeats
  nothing. Firing it would be one of the seven false-`[sic:]` class the brief's Addendum B records.
- It takes **no `[sic:]`**: *geret* is not in Migne's text at all.
- English: *"lest that same thing should incline [0757A] into an outpouring of rashness"* — one verb,
  and the anchor placed exactly where Migne's column break falls, i.e. before *in effusionem*.
  This is Pattern 13a clause 1 (source damage, plate certain → restore silently, log the crux),
  applied to an *added* word rather than a lost one.

---

### §1 · THE ONE `[sic:]` — 0751D *partiorem*, and it is Migne's own

Migne prints, in Pez's preface: *qui me aliunde in propinandis theologicis non nihil **partiorem**
esse cupiunt*. **Plate-verified (p. 381, left column): the plate reads *partiorem*, and our twin
agrees** — this is one of the few places in my range where twin and plate do not part.

*partiorem* is no Latin form: there is no positive *partis* to give a comparative *partior*, and the
deponent verb *partior* has no such accusative. It occupies a predicative comparative slot
(*me … partiorem esse*) that only an adjective can fill, so Pattern 12's first test applies — **it
has no grammatical slot** — and it is carried type, not a real word merely misused.

- Marker: `not inconsiderably more sparing [sic: *partiorem*] in the serving up of theological matters`.
- **7a⁗ satisfied: the sense is in plain words OUTSIDE the marker.** Strip the bracket and the
  sentence still reads and still asserts what Pez asserts. This was checked mechanically (§5).
- **The conjecture is *parciorem*, "more sparing," and it lives here, not in the text.** The argument
  fixes it: the very next clause is *gravior essem, decrevi non nisi primorum viginti psalmorum
  expositionem … inserere* — he cuts the edition down because these men want *less* theology from
  him, not more. The rival reading, taking *partiorem* from *partior* ("more given to sharing"),
  would make them ask for **more**, which the sentence's own purpose clause refutes. **That rival is
  named and rejected on that ground; the marker takes neither reading into the text.**

---

### §2 · 7a″ — THE VULGATE COLLATION. Every lemma in cols 0751C–0762A, checked.

Collated against `sources/vulgate/clementine-flat.txt`, cited from the Clementine by book chapter:verse.
**226 italic spans were listed for the work; 221 of them fall in my columns and every one was walked.**
Ten took a `[var:]`. The rest are recorded below as checked — including the ones that came back clean,
because a findings-only list cannot be told from a list nobody made.

#### 2a · The ten `[var:]` markers, with the Clementine reading each rests on

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0753B | *Dixerunt **impii** apud se non recte cogitantes* | Sap 2:1 *Dixerunt enim cogitantes apud se non recte* | ⭐ Migne **inserts *impii***, and *impii* is the word the whole paragraph is glossing (*consilium impiorum*). The proof-text has been made to contain the term it is adduced to prove. |
| 0753B | *Spatiosa via est quae ducit ad **mortem*** | Mt 7:13 *…quae ducit ad **perditionem*** | a different noun, and "death" against "perdition" is a change a reader would take away. |
| 0757B | *Non possunt filii sponsi **jejunare*** | Mt 9:15 *Numquid possunt filii sponsi **lugere*** | ⭐ Matthew's clause with **Mark's verb** (Mc 2:19 *jejunare*), and Migne's statement where the Vulgate has a question. Plate-verified p. 384. |
| 0757C | *Filius primogenitus **inter** Israel* | Ex 4:22 *Filius **meus** primogenitus Israel* | ⭐ *meus* dropped, *inter* inserted: "a firstborn son **among** Israel" instead of "Israel is **my** firstborn son." A different assertion. Plate-verified p. 384. |
| 0757C | *Pater, **ignosce** illis* | Lc 23:34 *Pater, **dimitte** illis* | a different verb in the most familiar sentence in the passage — exactly where 7a″ says the remembered English arrives first. |
| 0758B | *…et **continget** te Christus* | Eph 5:14 *…et **illuminabit** te Christus* | ⭐ "Christ shall **touch** thee" for "shall **enlighten** thee." Plate-verified p. 384: the plate reads *continget*. |
| 0758D | ***Gaudemus** in tribulationibus* | Rom 5:3 *…**gloriamur** in tribulationibus* | a different verb; the twin's *scientes quoniam* for *scientes quod* is not marked (conjunction only). |
| 0759C | *… longe est a me. **Cubicula** autem ipsa sunt corda* | Ps 4:5 *…in **cubilibus** vestris compungimini* | ⭐ Migne glosses **chambers** where the psalm has **couches**, and builds Mt 6:6's *cubiculum* on it (*ut intus oremus clausis ostiis*). The gloss depends on the divergent word. |
| 0760A | *…erat **anima et cor unum*** | Act 4:32 *…erat **cor unum et anima una*** | order reversed and the pair collapsed to one adjective. Plate-verified p. 385. The *cinis et pulvis* class from 7a″. |
| 0760B | VERS. 1.-- *In finem pro ea quae **veritatem** consequitur* | Ps 5:1 *pro ea quae **haereditatem** consequitur* | ⭐⭐ **The most consequential divergence in my range.** Migne's psalm title says "she that obtaineth **the truth**"; the Vulgate says "**the inheritance**". And Migne's own gloss on that same verse is entirely about *haereditas* (*accipit haereditatem in vitam aeternam … ut ipsa fiat haereditas Dei*), and at 0761A he **re-quotes his own title correctly**: *Hic autem psalmus pro ea est quae **haereditatem** consequitur.* So the plate contradicts itself one column later. Plate-verified p. 385 (both occurrences). |

⚠ **Why the 0760B site took a `[var:]` and not a `[cj:]`.** Pattern 18's decline list is explicit:
*a divergence inside a QUOTED SCRIPTURE is Pattern 14, not this* (the 7561 @0664 *modio/medio*
ruling). A psalm title is quoted scripture. The `[cj:]` shape was weighed — the internal
contradiction at 0761A is exactly the kind of evidence 18 wants — and **rejected on where the
divergence sits, not on how strong the argument is.**

#### 2b · Lemmata checked and found to AGREE with the Clementine (no marker, and that is the finding)

Ps 1: *Beatus vir qui non abiit…* (1:1–2, verbatim, including the *sed in lege Domini* tail) ·
*Et erit tanquam* (1:3) · *in tempore suo* · *et folium ejus non defluet* · *Non sic impii* ·
*Sed tanquam pulvis* · *Ideo non resurgent* · *in judicio* · *in concilio justorum* ·
*Quoniam novit Dominus* · *iter peribit*.
Ps 2: *Quare fremuerunt gentes…* · *Astiterunt reges* · *Dirumpamus vincula* · *dirumpamus vincula
eorum* · *Qui habitat in coelis* (both) · *Tunc loquetur* · *ira Dei* · *Ego autem constitutus* ·
*Dominus dixit ad me* · *Postula a me* · *Reges eos in virga* · *In virga ferrea* · *Et nunc, reges* ·
*Servite Domino* · *cum tremore* · *Apprehendite disciplinam* · *de via justa* · *Cum exarserit in
brevi* · *in brevi*.
Ps 3: *Domine, quid multiplicati sunt* (both) · *Multi dicunt* · *Non est salus ipsi in Deo ejus* ·
*Tu autem, Domine, susceptor* · *Voce mea ad Dominum* · *De monte* · *Ego dormivi* · *Ego dormivi et
soporatus sum* · *Non timebo millia* · *Quoniam tu percussisti omnes* · *dentes peccatorum*.
Ps 4: *Cum invocarem exaudivit me* · *Deus justitiae meae* · *Miserere mei et exaudi* · *Filii
hominum* · *gravi corde* · *Et scitote quoniam* · *Irascimini et nolite* · *quae dicitis in cordibus
vestris* · *Sacrificate sacrificium* · *sacrificium justitiae* (both) · *Signatum est super nos* ·
*A fructu frumenti* · *frumentum et vinum et oleum* · *In pace in idipsum* · *Quoniam tu, Domine,
singulariter* · *Quis ostendit nobis bona?*
Ps 5: *Verba mea auribus percipe* (the twin's reading; the plate's *oribus* is §0) · *Intende voci* ·
*rex meus* · *Deus meus* · *Quoniam ad te orabo, Domine* · *Mane astabo* · *exaudies vocem meam* ·
*Neque habitabit* · *Odisti omnes qui operantur* · *Virum sanguinum et dolosum* · *Virum sanguinum* ·
*quae haereditatem consequitur* · *Introibo in domum* · *Introibo in domum tuam* · *in templo* ·
*ad templum* · *in timore tuo* · *Domine, deduc me* · *In conspectu tuo* · *viam meam* ·
*Quoniam non est in ore* · *Judica illos, Deus* · *Et laetentur* · *Et gloriabuntur* ·
*Domine, ut scuto bonae voluntatis*.
Inline scripture, agreeing verbatim: Jo 12:26 · Lc 23:31 · Apc 2:7 · Jo 7:38 · Jo 7:39 (truncated) ·
Mt 1:20 · Lc 24:44 · Lc 24:45 · Is 12:3 · Pr 18:4 · Lc 24:19 · Gal 4:4–5 (opening *At* dropped) ·
Pr 1:10–11 · Pr 9:13–14 (stopped at *sellam*, which is the word glossed) · Pr 9:17 · Job 21:14 ·
Jac 1:21 (*Propter quod* dropped) · Ez 13:9 (but see §0 for *ut/et*) · Pr 31:31 · Mt 7:22 · Mt 25:12 ·
Mt 7:23 (*nunquam*/*numquam* orthography only) · Mt 25:41 · Is 65:25 · Ps 48:14 · Ps 35:7 · Ps 50:19 ·
Ps 15:5 · Jo 12:36 · 1Cor 3:17 · Jo 2:19 · Mt 6:9 · Rom 8:33 · Jo 10:17–18 (see 2c).

#### 2c · Divergences found, WEIGHED, and deliberately left unmarked — with the reason for each

A `[var:]` is a public claim, so the ones I declined are itemized rather than dropped:

- **0752D · 1 Jo 3:2 *scimus **quia*** for Vulg *scimus **quoniam***.** A conjunction; no reader takes
  anything different away. (Also *Charissimi*/*Carissimi*, orthography.)
- **0752D · *tanquam lignum plantatum secus decursus aquarum*** against Ps 1:3 *tamquam lignum **quod**
  plantatum **est** secus decursus aquarum*. A relative clause compressed to a participle inside the
  gloss's own sentence — grammar, not a different text.
- **0753A · Jos 1:8**, recast into indirect discourse by its own frame (*Dominus praecepit ut … non
  deserat, sed meditetur*), so *ut dirigat viam suam, et intelligat cuncta quae ait* against
  *tunc diriges viam tuam, et intelliges eam*. Person and mood follow the frame. ⚠ *cuncta quae ait*
  for *eam* is a real difference and I record it here rather than marking it, because the clause is
  visibly the gloss's own paraphrase, not a citation offered as verbatim.
- **0753B · Sap 2:6** drops *ergo*; **Sap 2:10** silently omits *et non parcamus viduae* mid-verse.
  Ellipsis inside a quotation, of the kind Migne marks elsewhere with *etc.* Recorded, not marked.
- **0753D · Jac 4:7–8: *appropiate **Domino***** for Vulg *Appropinquate **Deo***, with the Old-Latin
  *appropiate/appropiabit* forms and *Subditi ergo estote Deo* dropped. *Domino* for *Deo* changes no
  assertion in a sentence that has just named the devil as the other term. Declined, recorded.
- **0754A · Rom 6:4: *resurrexit Christus*** for *Christus surrexit*, and **Migne drops *vitae***
  (*in novitate ambulemus*, "walk in newness," not "in newness of life"). Weighed as the closest
  decline in my range. Left unmarked because *surgere*/*resurgere* is a synonym pair and the missing
  genitive removes a word without reversing anything; **but it is the site a later reader should
  re-open first if the bar is ever restated.**
- **0755A · Mt 24:35 *non **transibunt**** for Vulg *non **praeteribunt***, plate-verified (p. 383).
  A synonym: both are "shall pass away," and the gloss turns on the firmness, which survives either.
- **0755A · Is 65:22** *Secundum dies **enim**…* — particle position only.
- **0755B · Eph 2:2 *in filii**s** diffidentiae*** for Vulg *in filio**s***. Ablative for accusative;
  no English exponent worth a public claim, and Pattern 9's spirit covers it.
- **0755B · *Aquilo ventus durus*, cited *sicut scriptum est*, IS NOT IN THE CLEMENTINE AT ALL.**
  Searched the whole flat file for *aquilo*/*ventus durus*: no such verse (Sir 43:21's *frigidus
  ventus aquilo* is the nearest, and it is not this). Plate-verified as Migne's own (p. 383), so it is
  not our corruption. **A `[var:]` needs a received reading to name and there is none**, so the
  finding is recorded here instead: the gloss adduces as Scripture a sentence the Clementine does not
  contain. Recording a checked negative, per brief §4's instruction to keep them.
- **0755B · Jo 3:18 *Qui non credit **in Filium***** — the Vulgate has a bare *qui autem non credit*
  and supplies the object only in the following clause. Migne pulls it forward; nothing is asserted
  that the verse does not assert.
- **0757A/0757B · Ps 2:13 *confidunt in **Domino**** for Vulg *confidunt in **eo***. Same referent,
  named instead of pronominalized.
- **0757B · Ps 3:1 *a facie **filii sui Absalom**** for Vulg *a facie **Absalom filii sui***. Word
  order inside a title; plate-verified (p. 384) as Migne's.
- **0758B · Jo 10:17–18** is a conflation: *nemo **tollet** eam a **meipso*** welds 10:18's *Nemo
  tollit eam a me* to its own *ego pono eam a meipso*, and *quoniam*/*et iterum sumam* replace
  *quia*/*ut iterum sumam*. A conflation has no single "received reading" for a marker to name.
  Plate-verified (p. 384) as Migne's, and recorded here instead.
- **0758B · Is 2:2** word order (*Erit mons domus Domini praeparatus*) — reordered, nothing added.
- **0759C · Mt 15:8 *Labiis me honora**nt**** for *Populus hic labiis me honora**t***: the subject is
  dropped and the verb follows it into the plural. Grammar following an ellipsis.
- **0759D · *Quis novit si vera sunt, aut quis venit ab inferis, ut ista nuntiaret?*** is introduced
  *qui saepe dicunt* — the gloss putting words in the mouth of the foolish, echoing Sap 2:1's *non est
  qui agnitus sit reversus ab inferis* without quoting it. **Not a citation, so Pattern 14 does not
  reach it**; recorded so a later reader does not mistake the echo for a divergence.
- **0760C · Jo 14:6 *Per me itur ad Patrem*** for *Nemo venit ad Patrem, nisi per me*. An impersonal
  compression introduced by *secundum illud quod dictum est*; it asserts what the verse asserts, from
  the other side of the negative. Recorded, declined.
- **0761A · Ps 5:7 *Perdes **eos**, qui loquuntur mendacium*** for Vulg *perdes **omnes** qui…*.
  ⚠ This is the 2a trigger shape (a quantifier swapped out), so it was checked against the sense
  rather than the sound: the gloss's next clause is *quia recedentes ab eo quod est … declinant*,
  which is about the class, not about how many. Same referent. Declined, recorded.
- **0762A · Rom 5:10** as Migne prints it — *Si enim cum **adhuc** inimici essemus, Christus pro nobis
  mortuus est, multo magis reconciliati salvi erimus **ab ira per ipsum*** — is three verses woven
  into one: *adhuc* and *Christus pro nobis mortuus est* from 5:8–9, *ab ira per ipsum* from 5:9, the
  frame from 5:10 (whose own tail is *in vita ipsius*). **A `[var:]` must name one received reading
  and there is no one verse to name**, so it is recorded here. It is not our corruption: the weave is
  coherent and reads as a quotation from memory.

---

### §3 · MIGNE'S OWN PRINTING, NOT TIDIED

- **0755C · The gloss contradicts the verse it glosses, and that stands.** The lemma is Ps 1:5
  *Ideo **non** resurgent* (impii in judicio), and the gloss then says *Qui **resurgent** quidem in
  judicio, sed non in concilio justorum.* Rendered as printed — "Who indeed *shall rise in judgment,*
  but not *in the council of the just*" — with both negatives where the Latin puts them. The
  exposition is reading the psalm's *non* as governing only the second member; that is the author's
  argument, not a defect, and smoothing it either way would destroy it.
- **0762A · The chunk ends on a verbless sentence.** *Hoc invictissimum scutum, quo pellitur inimicus,
  desperationem salutis suggerens multitudine tribulationum et tentationum.* There is no finite verb
  in either language. Rendered as printed and stopped where Migne stops (Pattern 8: never supply).
- **0755B · Two construals, and I chose neither silently.** *projiciuntur a soliditate et stabilitate
  terrae in ventum praesentis, scilicet Ecclesiae et futurae* (plate-verified p. 383, punctuation and
  all). Either (i) *praesentis … et futurae* depend on *ventum* — "into the wind of the present, that
  is, of the Church, and of that which is to come" — or (ii) they depend on the distant *terrae*,
  giving "cast out from the solidity of the earth, present (that is, the Church) and to come, into the
  wind," which yields the better theology. **I rendered (i), because it keeps Migne's word order and
  therefore keeps both readings visible to a reader with the Latin beside him**; (ii) is recorded here
  and is the reading I would take if forced to choose.
- **0752C/0756B · *hominis Jesu Christi* in Pez's quotation of the incipit, *hominis Christi Jesu* in
  the body at 0752C.** Migne's own inconsistency between the preface and the text it prefaces;
  plate-verified in the preface (p. 381). Both rendered as printed.
- **Orthography left alone throughout** (Pattern 9): *tanquam*, *coelum*, *Charissimi*, *nunquam*,
  *sepulcrum*, *quanquam*, *spiritales*, *aenigmata*. None is a defect and none is marked.
- **Migne prints no `( sic )` anywhere in my range**, so nothing is stacked on one.
- **Band-letter arithmetic**: 0751D is followed by 0752C (the work's drop-title occupies 752A–B);
  0755D by 0756A; 0758D by 0759A. All normal per runbook false positive 1. **Not reported as gaps.**
- **Pattern 4 `[f:]` was NOT used.** This is a lemma-and-gloss commentary, not a florilegium
  (runbook false positive 4). No inline citation tails exist here in any case.

---

### §4 · CHUNK 0000 — PEZ'S LITOTES, AND WHAT EACH RENDERING DECIDED

The brief flags this preface as unusually dense in double negatives for 263 words. Negation fidelity
(7a) requires every printed negative in the English; the construal decisions are these, and each one
carries **both** printed negatives rather than collapsing to a bare positive:

| printed | rendered | rejected, and why |
|---|---|---|
| *nullam **non** operam … dedi* | "I left **no** effort **un**spent" | "I made every effort" — a bare positive, and it prints neither negative. |
| ***non nihil** … commodaretur* | "something **not inconsiderable** would be of service" | "some benefit would accrue" (drops both); "no small measure" (carries one negative and turns *nihil* into "small," which is not what it means). |
| ***Nec** … **unquam** … mutassem, **nisi*** | "**Nor** would I **ever** have changed my mind, had I **not**…" | all three carried; the *unquam* is inside the negative's scope, as in the Latin. |
| ***non nihil** partiorem* | "**not inconsiderably** more sparing" | see §1 for *partiorem* itself. |
| *decrevi **non nisi** primorum viginti* | "I determined to insert … **nothing but** the … first twenty" | "only the first twenty" — smooth, and it prints neither word. |
| *ne … **omnino** depereat* | "should **not utterly** perish" | — |

Two further calls in this chunk:

- **The guillemets are 1:1**, one open and one close, exactly where Migne sets them (plate-verified,
  p. 381). The Mabillon quotation ends at *tomus alter amissus videtur*, and *Huc usque Joannes
  Mabillonius* is outside it, as on the plate.
- **The Mabillon incipit is not a scripture citation and took no `[var:]`.** *Omnis Scriptura
  divinitus inspirata Veteris ac Novi Testamenti…* opens on 2 Tim 3:16's words and then becomes
  Walafrid's own sentence; the Vulgate's continuation (*utilis est ad docendum*) is not what is
  being quoted. **The whole span was rendered and stopped at Migne's *etc.***, supplying no verb to
  complete it (the *usque ad* discipline, applied to a truncated incipit).
- **Titles are NOT italicized in the English**, because Migne sets *Analectorum*, *Thesauro* and
  *Glossa ordinaria* in roman. Pattern 2's title-casing governs attribution headnotes, not running
  prose, and italic-span parity is 1:1 in this chunk as a result.

---

### §5 · THE TESTS, RUN, AND WHAT EACH RETURNED

- **Test 1 (strip every marker and read).** Run mechanically over all ten markers: each surrounding
  sentence reads aloud without its bracket, with no stranded article or preposition. The site that
  could have failed is §1's `[sic: *partiorem*]`, where the sense word "sparing" is deliberately
  **outside** the marker. ⚑ And the fourth question — *does the clause still have its object?* —
  asked at that site: yes, *me … esse* is the object clause and it is intact.
- **Test 2 / 2a (name the host of every negative).** Walked every printed negative in all five
  chunks. Three sites fall in 2a's declared trigger population — a negative on a verb with a
  correlative or quantifier next to it — and each was proved from the sentence's structure, not from
  what read well:
  - **0757A · *non solum eos non attinget … sed etiam*** — two negatives, two hosts: the first on
    *solum*, the second on *attinget*. Rendered "shall **not only not** touch." The `sed etiam`
    clause proves the split.
  - **0756A · *Astiterunt autem **non praesentiam** significat, sed voluntatem*** — the *sed* pivot
    puts the negative on *praesentiam*, not on *significat*. Rendered "signifies **not presence**,
    but will," never "does not signify presence."
  - **0760A · *Non ergo **foris** quaerenda est laetitia, sed intus*** — the same shape, and the
    same answer: the negative belongs on *foris*. Rendered "it is **not without** that gladness is to
    be sought, but within." This is the 8990 @0614B *solus* class exactly, and it was the site I
    most expected to get wrong.
  - Also checked and found NOT to be of that class: *non perturbationem … sed vim* (0756B, negative
    correctly on the predicate noun), *non optat ut eveniat, sed cernit* (0761D, correctly on the
    verb), *non quidem ubique, sed ubi* (0758C).
- **Test 2b (anchor position, not mere presence).** Every anchor in all five chunks was checked
  against the WORD it stands beside in the Latin, not merely that it was present and in order.
  **Six had drifted and were moved**: 0753C (belongs before *peccatores*, had migrated past it),
  0755D (before *dicit*), 0760A (before *foris*), 0760B (between *sperandum* and *est*), 0760D
  (before *tenebris*), 0761D (between *se* and *recipiunt*). All six now stand beside their Latin
  word. 0757A is a deliberate mid-construction split, per §0.
- **Test 3 (punctuation BY BAND, never by total).** Column anchors partition both twins identically,
  so `:`, `;`, `?`, `!`, `«`, `»` were counted band by band across all 42 bands of the five chunks.
  **The first pass returned 30 mismatched bands and they did not cancel — they were 21 colons
  softened to full stops or commas and 9 semicolons supplied.** Every one was restored to Migne's
  mark (including the odd-looking *…retribueret: Legimus enim:* at 0758B, and the full stop Migne
  prints before *Amen dico vobis* at 0755D where an English ear wants a colon). **Final: zero
  mismatched bands, on all six marks.** ⚑ This test earned its place in my range: nothing else I ran
  would have found a single one of those thirty.
- **Test 4 (§4 normalization / suspiciously tidy forms).** This is what produced §0. The trigger was
  brief §4's own instruction — a form that reads *too* well in a rough passage — fired at 0758B's
  *incovenienter* (a non-word, so Addendum A said raise it) and answered by the plate in the
  *opposite* direction: the plate is clean and **our file** is corrupt. That one page read then
  yielded four more sites within four inches of it, exactly as Addendum C predicts.
- **Test 5 (does it ASSERT what he asserts?).** Read each finished paragraph back against the Latin
  with the counts already clean. Three sites were re-worked on this pass and none of them was
  findable by any count: the Ps 1:5 contradiction (§3) where the first draft had softened *resurgent*
  toward the Vulgate's *non resurgent*; *Solent vero abominati dici exhaeredati* at 0761A, where the
  case endings and not the sense decide which noun is subject; and the verbless close at 0762A, which
  a smooth English would have quietly completed.

---

### §6 · WHAT I DID NOT DO, SO THE NEXT READER KNOWS

- **I did not patch the Latin.** §0's thirteen sites are escalated, not fixed. Re-chunking is the
  merge step's call and would rewrite chunk boundaries mid-fleet.
- **I did not collate cols 0762A–0794D.** Chunks 0005–0017 belong to other agents; §0's rate applies
  to my six pages only and **must not be inherited as either a clean or a dirty verdict** there.
- **I read the plate for every page in my range** (pp. 381–386) but not every *column inch* of pages
  382, 383 and 386 — on 382 and 383 I read the full left column and the lemmata I was firing on;
  on 386 the full left column (col. 761) and not col. 762, of which my range holds only five lines.
  A complete collation of this work is a separate, cheap job (six page renders) and I recommend it
  before ship.
- **No `[cj:]` anywhere.** Two candidates were weighed and both declined: *partiorem* (already inside
  a `[sic:]`, which Pattern 18 excludes explicitly) and 0760B's *veritatem* (quoted scripture, so
  Pattern 14's territory, not 18's — §2a).
- **No `[nt:]`, `[n:]`, `[ed:]` or `[d:]`.** The work has `noteCount: 0` in all eighteen chunks and I
  wrote none; `data/plate-notes/coverage.json` records 9003 as `spot`, checked zero, and my own six
  pages saw no foot rule, no numbered *Forte* apparatus and no raised-asterisk layer — **which is a
  sixth and seventh page of evidence for that zero, recorded here because a checked negative is worth
  having.**

---

### PLATE COLLATION — markers withdrawn

**2026-08-28.** All 22 pages of the work were read at Migne's plate and 61 TEI patches applied,
so the Latin twins for these chunks now say what Migne printed rather than what Corpus Corporum
transcribed. **No marker was withdrawn in chunks 0000–0004** — the withdrawals fall in
`cruces-0005` (one `[var:]`) and `cruces-0014` (three `[sic:]`, one `[cj:]`). What changed here:

**Fired — one new `[var:]` the digitization had erased.**

- **0758C · Ps 3:9 · `[var:]` FIRED.** Migne prints ***Domine** est salus* (vocative); the
  Clementine (`sources/vulgate/clementine/Ps.lat`) has *Domini est salus*, "salvation is the
  Lord's". Corpus Corporum had silently moved the lemma to the Clementine's genitive, and the
  English had duly rendered "*Salvation is the Lord's*". Both readings construe — *Domine, est
  salus* is good Latin ("O Lord, there **is** salvation"), and it answers v. 3 in the same
  chunk, *Non est salus ipsi in Deo ejus*. **Migne is now rendered** — "*O Lord, there is
  salvation,* etc." — with `[var: Vulg. Ps 3:9 *Domini est salus*, "salvation is the Lord's"]`
  beside it. ⚑ Note that Migne's own gloss two words later goes the other way (*quoniam
  **Domini** est salvos facere*), which is precisely the tension a `[var:]` exists to make
  visible rather than to smooth away.

**Declined, and why — a `[var:]` is a public claim about the Clementine and must not be spent
on broken type.** The rule I applied, stated so it can be checked: *fire where the printed
reading construes in place and yields a DIFFERENT SENSE; decline where it yields NO sense,
because that is Pattern 12's business (type the plate got wrong), not Pattern 14's.*

- **0755C · Ez 13:9 — DECLINED.** Migne prints *…non erunt, **ut** in scriptura domus Israel non
  scribentur*; Clem. *et in scriptura*. But *ut* + future indicative construes as nothing at
  all: it is not a purpose clause and not a comparison. This is a broken sort (the same class as
  this work's *fremueruut* and *populii* at 0755D), not a divergent citation. English keeps
  "and", unmarked, per the standing ruling that the work's restored typographic defects are out
  of scope.
- **0760C · Ps 5:2 — DECLINED.** Migne prints *Verba mea **oribus** percipe*; Clem. *auribus*.
  *oribus* is a form (*os, oris*, "mouths") but "receive my words with mouths" is not a sense,
  it is a dropped sort. English keeps "Give ear to my words." Same class as above.
- **0760D · Mt 5:8 — DECLINED as a `[var:]`, but the ENGLISH WAS CORRECTED.** Migne prints
  *Deum videre, qui **mundo** conspicitur* — unitalicized, in the glossator's own prose, an echo
  of *Beati mundo corde* and not a lemma; Pattern 14 governs citations, so no marker. ⚠ **What
  did have to change is that Corpus Corporum had SUPPLIED *corde*, and our English had
  translated the supplied word** ("who is beheld with a clean heart"). The plate carries no
  *corde*. The English now reads **"who is beheld by the pure"** — Pattern 8, never supply what
  the plate does not print.

---

### PLATE COLLATION · REGISTER OF RESTORED TYPE, cols 0751C–0762A

**Wilson's ruling, 2026-08-28.** Pattern 12 read literally would put a `[sic:]` on every one of
the ~31 typographic defects the plate collation restored to this work, and would bury the two or
three sites that matter under a crowd of notes about broken type. **The ruling is: mark only
where the reading is in doubt; record the rest here and disclose the count in the work-level page
note.** The operative test, applied site by site: *mark it where the plate's reading does not
construe, or where a reader could not recover Migne's intended word with confidence, or where the
defect could be mistaken for a real variant; do not mark a plainly battered, turned, dropped or
wrong sort whose intended word is not in doubt.*

**MARKED in this range — two.**

- **0753B · *quod si* for *quod sit* — `[cj: *quod si*; read *quod sit*, "what the counsel is"]`.**
  Migne prints *Si autem apertius quis requirit **quod si** consilium impiorum, multipliciter
  Scriptura loquitur*. The indirect question needs *sit*; CC had supplied the *t*. This is the
  dangerous shape: **the dropped sort leaves behind a perfectly idiomatic Latin phrase**
  (*quod si*, "but if"), so nothing on the Latin page tells the reader anything is wrong, and
  our English had silently rendered the conjecture ("what the *counsel of the ungodly* is").
  Marker placed after the rendering; the rendering stands.
- **0761A · *operantur* for *operantem* — `[cj: *operantur*; read *operantem*, "him that
  worketh"]`.** Migne prints ***Virum sanguinum** operantur iniquitatem, **dolosum** autem
  diligentem mendacium intellige* — a third-person plural finite verb where the clause, governed
  by *intellige*, requires an accusative participle in parallel with *diligentem*. It has no
  grammatical slot, it is not a one-sort slip, and the English ("as him that worketh iniquity")
  was rendering CC's repair.

**Already marked, and standing:** 0758C `[var: Vulg. Ps 3:9 *Domini est salus*, …]`, argued above.

**CRUCES ONLY — recorded here, unmarked in the text.** Migne's printed form → intended word.

| Col | Migne prints | Intended | Why the reading is not in doubt |
|---|---|---|---|
| 0753B | *Cathera* | *Cathedra* | Dropped *d* in a non-word; the same lemma (*sedere in cathedra pestilentiae*) is set correctly at 0753A, five lines above. |
| 0755D | *fremueruut* | *fremuerunt* | Turned sort, *n* set as *u*, in the opening lemma of Ps 2. A non-word. |
| 0755D | *populii* | *populi* | Doubled *i* in the same lemma. A non-word. |
| 0755C | *ut in scriptura* | *et in scriptura* | Ez 13:9. *ut* + future indicative is neither purpose nor comparison, and the clause stands third in a series of plain futures (*non erunt … non scribentur … non ingredientur*). Wrong sort; see the DECLINED note above. |
| 0758C | *incorporalitur* | *incorporatur* | Intruded *li* across the line turn (*incorpora-\|litur*); a non-word, and the passive parallel with *praeciditur* plus the dative *male viventibus* fixes the verb. |
| 0760C | *oribus percipe* | *auribus percipe* | Ps 5:2. *oribus* is a form of *os*, but "receive my words with mouths" is not a sense; the psalm's opening formula is not in doubt. See the DECLINED note above. |

**Not a defect, recorded for completeness:** 0760D, where Corpus Corporum had **supplied** *corde*
from Mt 5:8. The plate prints *qui **mundo** conspicitur* alone; the interpolation is gone and the
English reads "who is beheld by the pure" (see the note above). Nothing of Migne's is wrong here.

---

### THE BLIND POLARITY READ

Four fenced readers took the work in four bands (0000–0004, 0005–0009, 0010–0013, 0014–0017),
each reading Latin against English in full, with no `cruces*.md` file and no collation report
open before or after. Their reports were adjudicated on 2026-08-28, after the 22-page plate
collation, under **Wilson's marker ruling of the same session**: *mark where the plate's
reading does not construe, or where a reader could not recover the intended word with
confidence, or where the defect could be mistaken for a real variant; do NOT mark a plainly
battered, turned or dropped sort whose intended word is not in doubt.*

**Whole-work result across all 18 chunks: 13 confirmed sites.** Ten carried a defect in **our
English** and were re-rendered; four sat on **Migne's plate** and took a marker with the English
left literal. (The two figures overlap by one: 0779D is a lost *sed non* on the plate *and* a
connective our English had smoothed, so it was both re-rendered and marked.) **Four new `[cj:]`
markers, one new `[var:]`.** Eight further candidates were adjudicated and declined; they are
listed under their own ranges, with reasons.

Per range — ours / Migne's: **0000–0004: 5 / 0** · **0005–0009: 1 / 0** · **0010–0013: 3 / 3**
· **0014–0017: 1 / 1**.

#### Repaired in this range (chunks 0000–0004)

1. **0755B — the Church was identified with the devil's wind.** Migne: *projiciuntur a
   soliditate et stabilitate **terrae** in ventum **praesentis**, scilicet Ecclesiae **et
   futurae***. The genitives depend on *terrae*, not on the accusative *ventum*; Migne's
   hyperbaton drops *in ventum* between them. Our English had read "into the wind of the
   present, that is, of the Church, and of that which is to come" — and the very next sentence
   is *Ventus autem ipse diabolus intelligitur*. Now: "cast forth from the solidity and the
   stability of the earth **of the present, that is, of the Church, and of that which is to
   come, into the wind**". 7a mechanism 5 (reference mis-bound), and the page had been
   contradicting its own neighbour.

2. **0755C — a 7a″ conformation the plate collation exposed.** Migne prints *In concilio populi
   mei non erunt, **ut** in scriptura domus Israel non scribentur*; the Clementine has *et*, and
   Corpus Corporum had normalized Migne toward it. The Latin was corrected to *ut* in the
   collation, but the English still read "and". Now rendered "**that** in the writing of the
   house of Israel they shall not be written", with a `[var:]` recording the Vulgate's *et* and
   the fact that *ut* + future indicative does not construe. ⚠ The failure to construe is
   Migne's; nothing has been smoothed to hide it.

3. **0761C, VERS. 10 — the lemma had lost the word its own gloss expounds.** Migne prints
   *Quoniam non est in ore,* etc.; our English gave "For there is no," etc., with **no exponent
   at all for *in ore***, in a stump whose gloss turns on precisely that phrase (*Quomodo potest
   esse in ore eorum veritas…*). Completed to "*For there is no truth in their mouth,*" etc.,
   on this work's settled fragmentary-lemma convention (cf. 0769D *Inimici defecerunt* →
   "The enemy's swords have failed").

4. **0760A, VERS. 9 — *speratur a talibus* was read as a source, not an agent.** "hoped for
   **from** such men" → "hoped for **by** such men". *a* + ablative with a passive is the agent,
   and *tales* are the *vir fidelis* of the sentence that introduces the verse ("The faithful
   man therefore rejoices and says"); the source reading detached the clause from its own cue.

5. **0756B — who foreknows.** *per quas utique **praescientes** quid futurum sit, deridebit Deus
   et subsannabit*: *praescientes* is accusative plural agreeing with *quas*, the holy souls,
   not with *Deus*. The paragraph's whole argument is that God's derision **is** the force of
   foreknowledge *he gives to his saints* (*ea vis accipienda est, quam dat sanctis suis, ut
   futura cernentes… intelligant*). Now "through whom, **since they indeed foreknow** what shall
   come to pass, God will deride and mock."

#### Adjudicated and DECLINED in this range

- **0762A — *desperationem salutis suggerens* attaching to the shield rather than to
  *inimicus*** (reader's confidence: medium-high). **Declined.** The reader's stated ground —
  that *suggerens* "is nominative and agrees with *inimicus*" — is only half right: the present
  participle's nominative singular is identical in all three genders, so *scutum* and *inimicus*
  are **equally available in the Latin**, and Migne's sentence is anacoluthic with no finite
  verb to settle it. Our English reproduces the same ambiguity with the same nearest-noun
  default (*inimicus* / "the enemy"). Nothing is asserted in English that the Latin does not
  equally assert, so a re-binding would be our disambiguation of Migne's, not a repair.

#### Positive results worth recording

- **0000 (the Pezian *monitum*) is clean at every one of its six litotes** — `nullam non operam
  … dedi`, `non nihil … commodaretur`, `non nihil partiorem`, `non nisi primorum viginti
  psalmorum`, `Nec … unquam mutassem, nisi … deprehendissem`, `ne … omnino depereat`. Both
  printed negatives survive in all six; the double-negative idiom is nowhere smoothed.
- **0760C / 0761A — the psalm title, this work's 7a″ trap, was not fallen into.** Migne prints
  *pro ea quae **veritatem** consequitur* in the lemma and *quae **haereditatem** consequitur*
  in the gloss; the English carries **both** as printed, with a `[var:]` on the first.
- **0760D *qui mundo conspicitur*** — taken as the adjective ("beheld by the pure"), which is
  right; the alternative ("by the world") would have contradicted the preceding clause outright.
  Noted because it is exactly the seat a silent reversal would take.

# RANGE FILE — chunks 0005–0009 · cols 0762B–0774A

*Preserved unedited from `cruces-0005.md`; headings demoted one level. Where it
conflicts with the head above, the head governs.*

## *Glossa ordinaria*, **Expositio in XX primos Psalmos** (PL 114) — cruces, chunks 0005–0009

Cols **0762B–0774A** (Ps VI, VII, VIII, and Ps IX to v. 39), 5 chunks, ~4,930 Latin words.
One translator, 2026-08-28.

`verify-english.mjs`: my five chunks pass (the run's only failures are chunks 0011–0013 and
0017, not yet filed by other agents). Frontmatter copied verbatim from each Latin twin and
diffed. Column anchors: **48 across the five chunks, verbatim, in order, and each placed
against the same word it stands beside in the Latin** (test 2b — checked one by one, not
merely for presence). `[n: …]` in my English: **0**, matching `noteCount: 0` in all five
twins, as the launch brief requires. Guillemets: **zero in either language.**
Question marks: 2 · 1 · 1 · 7 · 2 — exact parity with the Latin twins, band by band.
Em-dashes: **0** (three were written and all three removed; Migne prints none).

Punctuation was compared **band by band, not by total** (test 3), using the column anchors as
the partition: colons, semicolons, question marks, exclamation marks, guillemets and italic
asterisks, in all 53 bands of the five chunks. All bands now match. Six real mismatches were
caught this way and repaired — five softened or supplied colons and two comma↔semicolon
swaps — plus **three merged italic spans** (§6 below), which nothing else would have found.

**Apparatus fired: 11 `[var:]` · 3 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
(⚠ `[cj:]` count corrected 2026-08-28 from 1 to 3; the three stand at 0766A, 0767B and 0771B.
The blind polarity read added none in this range — see its section at the foot of this file.)
⚠ **Revised 2026-08-28**, was 10 `[var:]`: the plate collation **withdrew** the one @0770A (it
was an artefact of the transcription, §2f) and **added two** the digitization had erased, @0764B
and @0771C. See **PLATE COLLATION — markers withdrawn** at the foot of this file.

---

### §0 · THE NUMBERING IS MIGNE'S AND I HAVE NOT TOUCHED IT

Migne numbers by the Vulgate/Septuagint reckoning and counts the title as verse 1, so his
`VERS. 2.--` on Psalm VI addresses what a modern English Bible prints as 6:1. The Clementine
uses the same reckoning and agrees with him throughout. **Nothing here is renumbered and the
offset is not reported as a divergence.** Three places where his own count runs off the
Clementine's *within* that reckoning are recorded as his ordering, not corrected:

- **Ps VI** — he prints `VERS. 9.-- *Discedite a me,*` and then takes *Exaudivit Dominus*
  (Clem. 6:10) as a **second lemma inside the same address**, so his `VERS. 10.--
  *Erubescant,*` sits on Clem. 6:11. From v. 10 on, his count is one behind.
- **Ps VIII** — his `VERS. 7.-- *Omnia subjecisti*` is Clem. 8:8 (Clem. 8:7, *et constituisti
  eum*, is not glossed); his `VERS. 8.-- *Volucres coeli*` is Clem. 8:9; there is no VERS. 9,
  and `VERS. 10.-- *Domine, Dominus noster*` lands back on Clem. 8:10.
- **Ps IX** — *Narrabo omnia mirabilia tua* (Clem. 9:2) is glossed under his `VERS. 3.--`.

### §0a · `VERS 28.--` at 0772B — the period after VERS is missing, and it rides as printed

Chunk 0009 opens `VERS 28.--` where every other one of the 72 verse marks in my range prints
`VERS. n.--`. It is in the Latin twin's `incipit` field as well. Under the settled Glossa
convention the address passes through **verbatim, untranslated**, so the English prints
`VERS 28.--` too. ⚑ This is the exact class of Ruth's `VERS.9` at 0537D, which turned out to
be a **Corpus Corporum** slip and was fixed by `data/tei-patches/8968.json`, not by a marker.
**Plate candidate**, p. (0772+11)/2 ≈ 391 of the PL 114 scan: if Migne prints `VERS. 28.--`,
this is a tei-patch for 9003 and the English should follow the patch. I have fired nothing.

---

### §1 · THE LEMMA COLLATION — every italic span in cols 0762B–0774A

Collated against `sources/vulgate/clementine-flat.txt`; readings cited from
`sources/vulgate/clementine/Ps.lat`, `Mt.lat`, `Jo.lat`, `Gn.lat`, `Apc.lat`, `1Cor.lat`,
`Rom.lat`, `2Cor.lat`, `Jac.lat`, `Gal.lat`, `1Ptr.lat`, `Zach.lat`, `Phlp.lat`, `2Thes.lat`.
**A lemma named here with no comment agrees with the Clementine at its own verse, verbatim, or
is a clean clip of it** — that is why they are named. The psalter here is the Gallican, which
is what the Clementine prints, so the clean run is expected and a genuine divergence is
correspondingly *more* significant.

#### Psalm VI (0762A–0763D) — chunk 0005

*In finem in carminibus pro octava psalmus David.* (6:1 — Clem. punctuates and orders as
*In finem, in carminibus. Psalmus David. Pro octava.*; Migne runs it as one clause and moves
*pro octava* forward. Order and punctuation only, no word gained or lost) · *Domine, ne in
furore tuo,* (6:2) · *arguuntur,* · *Corripiuntur* (both 6:2, the gloss's own third-person
forms of *arguas*/*corripias*) · ***Miserere mei, Deus,*** (6:3 — **Clem. *Miserere mei,
Domine*. `[var:]` FIRED**, §2a) · *ossa* (6:3) · *Et anima mea,* (6:4) · *Convertere,
Domine,* (6:5) · *Convertimini ad me, et convertar ad vos, dicit Dominus.* (Zach 1:3 — Clem.
*Convertimini ad me, ait Dominus exercituum, et convertar ad vos, dicit Dominus exercituum*;
Migne drops both *exercituum* and the interposed *ait Dominus exercituum*. **Omission only**,
nothing substituted, and the argument turns on the reciprocity, not on the title of hosts.
No marker; see §5a) · *Quoniam non est,* (6:6) · *mortem* · *infernum* (6:6) · *Laboravi,* ·
*Lectus* · *lacrymis lavat,* (6:7 — the gloss's own third-person recasting of *lacrimis meis
stratum meum rigabo* / *lavabo … lectum meum*; not a fresh citation) · *mente servio legi
Dei,* · *carne autem legi peccati,* (Rom 7:25, verbatim) · *mane adstabo tibi.* (Ps 5:5 —
Clem. *Mane astabo tibi*; *adstabo*/*astabo* is orthography, no marker) · *stratum,* ·
*rigabo* · *lavabo:* (6:7) · *Turbatus est,* (6:8) · *oculum* · *turbatum.* (6:8) ·
*inveteravi inter omnes inimicos meos,* (6:8, **verbatim**) · ***inveteravi. In omnibus*** ·
*inimicis meis,* (see §3a — the re-quotation does not match the lemma Migne has just printed)
· *prope est Dominus obtritis corde,* (Ps 33:19 — **Clem. *Juxta est Dominus iis qui tribulato
sunt corde*. Candidate weighed and DECLINED**, §5b) · *Discedite a me,* (6:9) · *Discessuri
enim sunt,* (not scripture — the gloss's own prophetic paraphrase of *Discedite*) · *Exaudivit
Dominus,* (6:10) · *Erubescant,* (6:11, printed under his VERS. 10) · *valde velociter,*
(6:11, verbatim).

#### Psalm VII (0763D–0766C) — chunk 0006

*Chusi* · *filius Jemini,* (7:1) · *Domine Deus meus, in te speravi,* (7:2) · *Ne quando
rapiat,* · *ne quando rapiat ut leo animam meam.* · *ne quando rapiant;* (7:3 — Clem. sets
*nequando* as one word throughout; word-division only, and the third is the gloss's own
counterfactual plural, expressly marked as such by *Non enim ait*) · *Adversarius vester
diabolus tanquam leo rugiens circuit, quaerens quem devoret.* (1Ptr 5:8 — Clem. *tamquam*;
orthography only, the rest verbatim) · *salvum me fac ex omnibus persequentibus me,* (7:2) ·
*dum non est qui redimat,* (7:3) · *Domine Deus meus,* · *si feci istud,* · *si est iniquitas
in manibus meis.* (7:4) · *Si reddidi,* · *si reddidi facientibus,* (the gloss's own
counterfactual, again marked *Non ait*) · *retribuentibus mihi mala.* · *decidam merito ab
inimicis meis inanis.* · *inanis* (7:5) · *Persequatur inimicus,* · *Inimicum* · *leonem* ·
*terram* (7:6) · ***terram manducabis.*** (Gn 3:14 — **Clem. *terram comedes*. `[var:]`
FIRED**, §2d) · *in pulverem deducit,* (7:6 — Clem. *in pulverem deducat*, subjunctive; here
indicative because the gloss has taken the phrase into its own sentence. No marker) ·
*Exsurge, Domine,* · *iram* · *fines,* · *exaltari* · *Exsurge, Domine Deus meus,* (7:7) ·
*Synagoga* · *populorum,* · *circumdedit,* (7:8 — Clem. *circumdabit te*, future; Migne's
perfect. **Candidate weighed and DECLINED**, §5c) · *Caecitas ex parte contigit in Israel,
donec plenitudo gentium intraret.* (Rom 11:25, verbatim) · *Et propter hanc,* (7:8) ·
*Dominus judicat populos,* · *Judica me, Domine,* · *secundum innocentiam* · *super me,*
(7:9) · *si reddidi retribuentibus mihi mala.* (7:5, verbatim re-quotation) ·
***Consummetur nequitia,*** and ***Consummetur,*** (7:10 — **Clem. *Consumetur nequitia
peccatorum*. `[var:]` FIRED; the single most consequential divergence in my range**, §2b) ·
*sordescat* (Apc 22:11, verbatim) · ***justus justior fiat,*** (Apc 22:11 — **Clem. *qui
justus est, justificetur adhuc*. `[var:]` FIRED**, §2c) · *diriges justum, scrutans corda et
renes Deus.* (7:10, verbatim but for a comma before *Deus*) · *dirigitur* · *cordis* ·
*renium* · *Scrutans* · *cor* · *dirigit justum* (7:10, the gloss's own indicative for
*diriges*) · *Justum adjutorium,* (7:11) · *Justum auxilium* ×2 (§3b — Migne re-quotes his own
lemma with a synonym; kept distinct in the English as **help** / **aid**) · *quoniam, si cum
adhuc peccatores essemus, Christus pro nobis mortuus est, quanto magis nunc justificati salvi
erimus ab ira per ipsum.* (Rom 5:8–9 — **candidate weighed and DECLINED**, §5d) · *Deus judex
justus,* · *Justus,* · *fortis,* · *patiens,* · *irascitur per singulos dies,* (7:12 — Clem.
*numquid irascitur per singulos dies?*; Migne turns the rhetorical question into a flat
negation by putting a roman *Non* in front of the italic. That is his gloss doing the work,
not a variant text: the italic span itself is verbatim. No marker) · *Nisi conversi,* · *Et in
eo paravit,* (7:13–14) · *Judex justus* · *Arcum* · *sagittae* · *ardentibus effecit,* (7:14)
· *Vasa* · ***mortis vel*** (§6a — the italic span runs one word past the verse) · *Vel* ·
*aliis* · *odor vitae in vitam, aliis odor mortis in mortem.* (2Cor 2:16 — Clem. prints the
two clauses in the **reverse order**, *aliis quidem odor mortis in mortem: aliis autem odor
vitae in vitam*, and has *quidem*/*autem*. **Candidate weighed and DECLINED**, §5e) ·
*Ecce parturiit,* · *concepit dolorem,* (7:15) · *parturit injustitiam,* · *parit
iniquitatem;* (7:15 — the gloss's own present tenses for *parturiit*/*peperit*, expounding
generically; no marker) · *peccatum, cum consummatum fuerit, generat mortem.* (Jac 1:15 —
Clem. *peccatum vero cum consummatum fuerit*; the dropped *vero* is a clip) · *Lacum
aperuit,* (7:16) · *in operibus manuum suarum comprehensus est peccator.* (Ps 9:17, verbatim)
· *Convertetur dolor,* (7:17) · *iniquitates meae supergressae sunt caput meum; sicut onus
grave, gravatae sunt super me.* (Ps 37:5 — Clem. *caput meum, et sicut onus grave*; the
dropped *et* and Migne's semicolon, nothing more) · *Confitebor Domino,* (7:18).

#### Psalm VIII (0766C–0768C) — chunk 0007

*Torcularia* · *torcularia* (8:1, *pro torcularibus*) · *Domine, Dominus noster,* · *Domine,*
· *Dominus noster,* (8:2) · *Ex ore infantium,* · *infantes* · *lactentes* (8:3) · *Tanquam
parvulis in Christo, lac vobis potum dedi, non escam.* (1Cor 3:1–2 — Clem. *tamquam*;
orthography only, the rest verbatim across the two verses) · *Inimicos* · *ultor* (8:3) ·
*Quoniam videbo coelos,* · *Videbo,* (8:4) · *coelos opera digitorum tuorum:* (8:4 — Clem.
*videbo caelos tuos, opera digitorum tuorum*; Migne drops *tuos* and the comma. Clip, no
marker) · *Luna* · *stellae* · *stellarum* (8:4) · *Quid est homo,* (8:5) · *homines et filium
hominis* (the gloss's own accusative pairing, not a citation) · *aut filius hominis,* (8:5,
verbatim) · *Homo* · *memor* · *Filium* · *hominis,* · *visitat* (8:5) · *Minuisti eum,*
(8:6) · *Minues eum paulo minus a Deo:* (**not the Vulgate and not offered as such** — Migne
says *in Hebraico legitur*, i.e. Jerome *iuxta Hebraeos*. Not collated as a Vulgate lemma;
see §5f) · *Omnia subjecisti,* · *omnia.* (8:8) · *Excepto eo qui ei subjecit omnia.*
(1Cor 15:27 — Clem. *sine dubio praeter eum qui subjecit ei omnia*. **Candidate weighed and
DECLINED**, §5g) · *Oves et boves,* · *oves et boves* (8:8) · *nonaginta novem oves in
montibus,* (Mt 18:12 — Clem. *nonne relinquit nonaginta novem in montibus*; Migne's *oves* is
an addition, but the whole is inside the gloss's own indirect statement, *Dominus dicit
reliquisse se*. No marker) · *bubus* · *boves* · *Pecora* · *campi* · *Campus* (8:8) ·
*Volucres coeli,* · *volucres coeli* (8:9) · *posuerunt in coelum os suum:* (Ps 72:9 — Clem.
*caelum*, orthography) · *Linguam nostram magnificabimus, labia nostra a nobis sunt, quis
noster Dominus est?* (Ps 11:5, verbatim; Clem.'s lower-case *dominus* only) · *pisces maris* ·
*qui perambulant semitas maris,* · *Perambulant* (8:9) · *Domine, Dominus noster,* (8:10).

#### Psalm IX to v. 39 (0768C–0774A) — chunks 0008 and 0009

*De occultis filii* (§6b — the italic span swallows the gloss's own *De*) · *Si vos Filius
liberaverit, vere liberi eritis.* (Jo 8:36 — Clem. *Si ergo vos filius liberaverit*; the
dropped *ergo* is a clip) · *occulta filii,* ×2 (the gloss's own nominative/accusative) ·
*Victori super morte filii.* · *victori pro morte filii,* (**not the Vulgate and not offered
as such** — *ex Hebraeo translata editio*, §5f) · *in finem pro occultis filii,* (9:1,
verbatim) · *Confidite, ego vici mundum,* (Jo 16:33, verbatim) · *finis,* · *Non veni solvere
legem, sed adimplere.* (Mt 5:17 — Clem. *Nolite putare quoniam veni solvere legem aut
prophetas: non veni solvere, sed adimplere*; Migne conflates the two halves, carrying *legem*
down into the second. A conflation of the verse's own words, adding nothing. No marker) ·
*Confitebor tibi, Domine,* (9:2) · *Non in toto corde confitetur* · *Narrat* · *omnia
mirabilia* (9:2, the gloss's own negated and third-person forms) · *Laetabor et exsultabo,* ·
*in te,* (9:3) · *Narrabo* · *omnia mirabilia tua,* (9:2, verbatim) · *Omnia quaecunque audivi
a Patre meo nota feci vobis:* (Jo 15:15 — Clem. *quaecumque*, orthography; verbatim otherwise)
· *In convertendo,* · *Inimicum meum,* (9:4) · *Redi retro, Satanas.* (Mt 16:23 — **Clem.
*Vade post me Satana*. Candidate weighed and DECLINED**, §5h) · *quae retro sunt obliviscens,
et se ad ea quae ante sunt extendens.* (Phlp 3:13 — Clem. *quae quidem retro sunt obliviscens,
ad ea vero quae sunt priora, extendens meipsum*. **Candidate weighed and DECLINED**, §5i) ·
*Canam nomini tuo, Altissime,* · *Cum ceciderint inimici mei retrorsum, et corruerint, et
perierint a facie tua.* (**not the Vulgate and not offered as such** — *sicut Hebraica docet
editio*, §5f) · *Quoniam fecisti judicium,* · *meum* · *causam* · *meam* (9:5) · *Increpasti
gentes,* (9:6) · *increpavit gentes, et periit impius,* · *periit impius,* · *Deletumque* ·
*nomen* (9:6, the gloss's own third-person and passive recastings) · *Inimici defecerunt,* ·
*frameae defecerunt,* (9:7 — Clem. *Inimici defecerunt frameae in finem*; Migne's second span
reorders the verse's own two words. No marker) · *In finem* (9:7) · *civitates ejus
destruxit,* (9:7 — Clem. *civitates eorum destruxisti*; the gloss recasts to third singular
with *ejus* because it has made Christ the subject. Recasting, not a variant text. No marker)
· ***Princeps hujus saeculi misus est foras.*** (Jo 12:31 — **Clem. *nunc princeps hujus mundi
ejicietur foras*. `[var:]` FIRED**, §2e; and *misus* is a plate candidate, §4a) · *Periit
memoria,* (9:7) · *Paravit in judicio thronum,* (9:8) · *judicio sedem suam.* (9:8 — Clem.
*thronum suum*; Migne's re-quotation substitutes *sedem* for the *thronum* he has just
printed. **Candidate weighed and DECLINED**, §5j) · ***Et ipse … judicavit orbem terrae in
aequitate.*** (9:9 — ⛔ **`[var:]` WITHDRAWN 2026-08-28**; Migne prints *judicabit* with the
Clementine, the twin was corrupt, §2f) · *Et factus est Dominus
refugium pauperi,* · *adjutor in opportunitatibus,* · *in tribulatione.* (9:10) · *Et sperent
in te,* (9:11) · *cognitio nominis* ×2 (the gloss's own noun for *qui noverunt nomen tuum*) ·
*Psallite Domino,* · *habitat in Sion,* · *speculatio,* (9:12; the last an etymology, not a
citation) · ***Templum Domini sanctum est, quod estis vos.*** (1Cor 3:17 — **Clem. *Templum
enim Dei sanctum est*. `[var:]` FIRED**, §2g) · *Quoniam requirens,* (9:13) · *Domine, quis
credidit auditui nostro?* (Rom 10:16, verbatim — Is 53:1 has no *Domine*, so Migne is quoting
Paul, not Isaiah) · *Propter te mortificamur tota die.* (Ps 43:22, verbatim) · *quoniam
requirens sanguinem eorum recordatus est.* (9:13, verbatim) · *Miserere mei, Domine,* (9:14) ·
*Non est oblitus clamorem pauperum.* (9:13, verbatim) · *Qui exaltas me,* · *Exaltatur* ·
*portae mortis,* (9:15) · *portae filiae Sion* ×2 (9:15, Clem. *in portis filiae Sion*; the
gloss's nominative) · *Exsultabo in salutari tuo,* ×2 · *salutari tuo,* (9:16 — Clem.
*exultabo*, orthography) · *In laqueo isto,* · *Laqueus* · *pes* · *comprehensus est pes
eorum,* (9:16) · *Cognoscetur Dominus,* · *judicia* (9:17) · *Convertantur peccatores,* (9:18)
· *Quoniam non in finem oblivio,* · *Pauperes* · *patientia* · *non peribit,* (9:19) ·
*Exsurge, Domine, non confortetur,* · *in conspectu tuo,* (9:20) · *Constitue, Domine,* ·
*quoniam homines sunt.* (9:21) · *Cum revelabitur homo peccati,* (2Thes 2:3 — Clem. *et
revelatus fuerit homo peccati*. **Candidate weighed and DECLINED**, §5k) · *Utquid, Domine,
recessisti,* (9:22 — Clem. sets *Ut quid* as two words; word-division only) · *Dum superbit
impius,* · *Comprehenduntur* · *in consiliis,* (9:23) · *Quoniam laudatur peccator,* (9:24) ·
*Exacerbavit Dominum,* (9:25) · *Non est Deus in conspectu ejus,* · *in omni tempore,* ·
*Auferuntur judicia tua,* · *Omnium inimicorum suorum dominabitur,* (9:26, all verbatim) ·
*in templo Dei sedebit; extollens se super omne quod colitur et quod dicitur Deus.* (2Thes 2:4
— **candidate weighed and DECLINED**, §5k) · *Dixit enim in corde suo,* (9:27) · *Loquitur in
corde suo: Non movebor: in generatione et generatione ero sine malo.* (**not the Vulgate and
not offered as such** — *Hebraica translatio*, §5f) · *Cujus maledictione os plenum est,* ·
*maledictione os* · *plenum est.* (9:28) · *Cum amaritudine et dolo,* (9:28 — Clem. *et
amaritudine, et dolo*. **Candidate weighed and DECLINED**, §5l) · *Sub lingua ejus labor et
dolor,* · *sub lingua ejus,* (9:28, verbatim) · *Non movebor,* (9:27) · *Sedet in insidiis,* ·
*in insidiis* · *sedere* · *In occultis* · *Innocentem* · *interficere* (9:29) · *Oculi ejus
in pauperem respiciunt,* (9:30) · *Beati pauperes spiritu.* (Mt 5:3, verbatim — note the span
runs on into *Leonem*, §6c) · *Leonem* · *in spelunca* · *Leo:* · *in spelunca sua.* ·
*Insidiatur ut rapiat,* · *insidiae* · *rapere* (9:30) · ***In laqueo suo humiliavit,***
(9:31 — **Clem. *In laqueo suo humiliabit eum*. `[var:]` FIRED**, §2h) · *Laqueus* ·
*inclinabit et cadet,* (9:31 — Clem. *inclinabit se, et cadet*; the dropped *se* is a clip) ·
*Dixit enim in corde suo,* (9:32) · *Exsurge, Domine Deus, exaltetur,* (9:33) · *Propter quid
irritavit impius Deum,* (9:34) · *Vides quoniam tu laborem,* (9:35) · *non requiret Deus,*
(9:34 — Clem. *Non requiret.* stops there; Migne supplies the subject *Deus* inside the
italic. **Candidate weighed and DECLINED**, §5m) · ***ut tradat eos in manus suas,*** (9:35 —
**Clem. *ut tradas eos in manus tuas*. `[var:]` FIRED**, §2i) · *Tibi derelictus est,* ·
*Orphanum* (9:35) · *Mihi mundus crucifixus est, et ego mundo.* (Gal 6:14, verbatim clip) ·
***Ne dicatis vobis patrem in terris.*** (Mt 23:9 — **Clem. *Et patrem nolite vocare vobis
super terram*. `[var:]` FIRED**, §2j) · *Contere brachium peccatoris,* (9:36) · *omnium
inimicorum suorum dominabitur.* (9:26, verbatim re-quotation) · *Brachium* · *Quaeretur* ·
*peccatum ejus,* (9:36 — Clem. *quaeretur peccatum illius*; *ejus*/*illius* is a pronoun
synonym, no marker) · *nec invenietur,* (9:36 — Clem. *et non invenietur*; *nec* for *et non*
is the same negation in one word. **Explicitly checked as a negation-fidelity site**: the
English carries the negative, §3c) · *Dominus regnabit in aeternum,* · *Gentes* (9:37) ·
*Desiderium pauperum,* (9:38) · *Praeparatio* · *cordis* (9:38, the gloss's nominative for
*praeparationem*) · *Paratum cor meum, Deus, paratum cor meum:* (Ps 56:8, verbatim) · *si
autem, quod non videmus, speramus, per patientiam exspectamus.* (Rom 8:25, verbatim) · *aurem
Dei* (9:38, the gloss's own for *auris tua*) · *Judicare pupillo et humili,* (9:39, verbatim) ·
*judicare pupillum,* · *judicare pupillo.* · *Judicat pupillum* · *judicat* · *pupillo,*
(the gloss's own constructed contrast) · *Homines* · *homo* (9:39) · *Constitue, Domine,
legislatorem super eos, ut sciant gentes, quoniam homines sunt;* (9:21, verbatim) · *ut non
apponat ultra magnificare se homo super terram,* (9:39, verbatim).

---

### §2 · THE TEN `[var:]` MARKERS — each one a claim resting on the file, not on memory

Every one below was read off `clementine-flat.txt` and confirmed in the per-book `.lat`.
**In every case Migne's reading is what the English prints**; the marker stands beside the
faithful rendering and never in place of it (Pattern 14).

#### 2a · 0762B/C · Ps 6:3 — *Miserere mei, **Deus***, where the Clementine has *Domine*

`Ps 6:3  Miserere mei, Domine, quoniam infirmus sum ; sana me, Domine, quoniam conturbata sunt
ossa mea.` Migne prints `VERS. 3.-- *Miserere mei, Deus,* etc.` **A different divine name in
the psalm's own opening address.** English: "*Have mercy on me, O God,*"
`[var: Vulg. Ps 6:3 *Miserere mei, Domine*, "Have mercy on me, O Lord"]`.

#### 2b · 0765A/B · Ps 7:10 — ***Consummetur*** for *Consumetur*, and **the whole gloss turns on it**

`Ps 7:10  Consumetur nequitia peccatorum, et diriges justum, scrutans corda et renes, Deus.`
*Consumetur* is from *consumo*: the wickedness of sinners **shall be consumed**. Migne prints
*Consummetur* (from *consummo*, to complete) **and then expounds precisely that**:
*Consummetur, inquit, perficiatur, id est perveniat ad summam nequitiam, ut possit istud jam
venire judicium* — "let it be completed … let it come through to the *height* of wickedness,
that this judgment may now be able to come." ⚑ **This is the highest-value site in my range**,
because the exposition is unintelligible on the Clementine's word and exact on Migne's: a
translator who reached for the familiar "shall be consumed" would leave the next sentence
arguing from a word no longer on the page (7a″). Migne also drops *peccatorum*.
English: "*Let wickedness be consummated,*" `[var: Vulg. Ps 7:10 *Consumetur nequitia
peccatorum*, "the wickedness of sinners shall be consumed"]`, and *Consummetur* is rendered
"consummated / brought to completion" wherever it recurs.

#### 2c · 0765A/B · Apc 22:11 — ***justus justior fiat*** for *qui justus est, justificetur adhuc*

`Apc 22:11  Qui nocet, noceat adhuc : et qui in sordibus est, sordescat adhuc : et qui justus
est, justificetur adhuc : et sanctus, sanctificetur adhuc.` ⚑ **The two halves of Migne's own
sentence behave differently, which is what makes this decisive rather than a stylistic
impression**: *sordescat adhuc* is the Clementine verbatim, and the very next clause,
introduced by his *sed etiam*, is not — a different verb (*fiat* for *justificetur*) and a
comparative (*justior*) the Vulgate does not have. English: "*let the just become more just,*"
`[var: Vulg. Apc 22:11 *qui justus est, justificetur adhuc*, "he that is just, let him be
justified still"]`.

#### 2d · 0764B/C · Gn 3:14 — ***terram manducabis*** for *terram comedes*

`Gn 3:14  … super pectus tuum gradieris, et terram comedes cunctis diebus vitae tuae.`
A different verb, not a form of the same one. English: "*thou shalt eat earth,*"
`[var: Vulg. Gn 3:14 *terram comedes*, "thou shalt eat earth"]` — the note gives the received
reading; the sense of the two is the same, which is why the marker states the words and
argues nothing (Pattern 14's "never speculate about why they differ").

#### 2e · 0769D · Jo 12:31 — ***Princeps hujus saeculi misus est foras***

`Jo 12:31  Nunc judicium est mundi : nunc princeps hujus mundi ejicietur foras.` **Two
divergences at once**: *saeculi* for *mundi*, and a **perfect** for the Clementine's future
*ejicietur*. The gloss needs the perfect — Christ *exclusit inde principem*, already. English:
"*The prince of this world was sent forth.*"
`[var: Vulg. Jo 12:31 *princeps hujus mundi ejicietur foras*, "the prince of this world shall
be cast out"]`. On *misus* itself see §4a.

#### 2f · 0770A · Ps 9:9 — ⛔ **WITHDRAWN 2026-08-28. THE DIVERGENCE NEVER EXISTED.**

**Not corrected — withdrawn.** The plate collation of 2026-08-28 read col. 0770A and Migne
prints ***judicabit***, exactly the Clementine's own reading at Ps 9:9. Corpus Corporum had
changed it to *judicavit*, and this collation, run against a twin that had already been moved
off the plate, "found" a divergence that is not on the page. The `[var: Vulg. Ps 9:9
*judicabit*, "shall judge"]` has been removed from `0008.md`, **and the English tense corrected
with it**: "*hath judged the world in equity*" → "***shall judge** the world in equity*".

⚠ The reasoning printed above — the perfect against v. 8's *in occulto* — was constructed to
explain a reading Migne never printed. No lemma collation could have caught it; only the plate
could. Recorded, not deleted, because the failure mode is the finding: **a `[var:]` fired off a
transcription is a public claim about Migne resting on Corpus Corporum.**

#### 2g · 0770B · 1Cor 3:17 — ***Templum Domini*** for *Templum enim Dei*

`1Cor 3:17  Si quis autem templum Dei violaverit, disperdet illum Deus. Templum enim Dei
sanctum est, quod estis vos.` *Domini* for *Dei*, in a proof-text adduced for the Church as
God's dwelling. English: "*The temple of the Lord is holy, which you are,*"
`[var: Vulg. 1Cor 3:17 *Templum enim Dei sanctum est*, "for the temple of God is holy"]`.

#### 2h · 0772D/0773A · Ps 9:31 — ***humiliavit*** for *humiliabit eum*

`Ps 9:31  In laqueo suo humiliabit eum ; inclinabit se, et cadet cum dominatus fuerit
pauperum.` Perfect for future, and the object *eum* dropped, in the verse address itself.
English: "*In his net he hath humbled,* etc."
`[var: Vulg. Ps 9:31 *In laqueo suo humiliabit eum*, "in his net he shall humble him"]`.

#### 2i · 0773B · Ps 9:35 — ***ut tradat eos in manus suas*** for *ut tradas eos in manus tuas*

`Ps 9:35  Vides, quoniam tu laborem et dolorem consideras, ut tradas eos in manus tuas.` The
Clementine is **second person addressed to God**; Migne prints **third person with a
reflexive**, and the gloss reads it that way throughout (*quasi laborare et dolere timeat, et
propterea illis parcat*). Two words changed consistently, which is what makes it a text and
not a slip. English: "*that he may deliver them into his own hands,*"
`[var: Vulg. Ps 9:35 *ut tradas eos in manus tuas*, "that thou mayest deliver them into thy
hands"]`.

#### 2j · 0773C · Mt 23:9 — ***Ne dicatis vobis patrem in terris***

`Mt 23:9  Et patrem nolite vocare vobis super terram : unus est enim pater vester qui in caelis
est.` A different verb (*dicatis* for *vocare*), a different negation construction (*ne* +
subjunctive for *nolite*), and *in terris* for *super terram*. English: "*Call not to
yourselves a father upon earth,*"
`[var: Vulg. Mt 23:9 *Et patrem nolite vocare vobis super terram*, "and call none your father
upon earth"]`.

---

### §3 · SITES INSIDE THE GLOSS PROSE — where the lemma list does not reach

The brief is explicit that a named-lemma list does not cover the sentences between the
lemmata (test 2's own worked case, 8987 @0624B). These are the ones I stopped on.

#### 3a · 0763B · Migne re-quotes his own lemma in a form he did not print

The verse address prints `*inveteravi inter omnes inimicos meos,*` — the Clementine verbatim.
Four lines later the gloss picks the phrase up again as `*In omnibus* autem *inimicis meis,*`
— **a different preposition and a different case**, *in omnibus* for *inter omnes*. Nothing
in the plate is broken and both are good Latin. ⚑ **The danger here is 7a″ in its purest
form**: the natural move is to render the second occurrence with the same English as the
first ("among all my enemies") and let the divergence vanish. **The English keeps them
apart** — "I have grown old **among all my enemies**" for the lemma, "by **in all my
enemies** he means…" for the re-quotation — so the reader can see that Migne's gloss is
expounding a wording his own lemma does not carry. No marker: this is Migne against Migne,
not Migne against the Vulgate, and Pattern 14 is for the latter.

#### 3b · 0765C · *Justum adjutorium* glossed by *Justum auxilium*

The verse address prints `VERS. 11.-- *Justum adjutorium,*` (Ps 7:11, verbatim). The gloss
then expounds it twice as `*Justum auxilium*` / `*justum auxilium*` — a synonym, italicised
as though it were the lemma. **Kept distinct in the English (help / aid)** for the same reason
as §3a. No marker.

#### 3c · Negation fidelity — the sites I named a host for (test 2 and 2a)

Every printed negative was traced to **the single Latin word it attaches to**, and the English
checked to carry it on that word — not merely to contain a negative. The sites where a
quantifier, correlative or predicate sat next to a plausible verb, which is 2a's trigger
population, were:

- **0762B** *ut **non solum** mortem non timeat, sed nec urentis … manus sustineat* — the
  first *non* is on *solum*, the second on *timeat*, the third (*nec*) on *sustineat*. Three
  negatives, three hosts. English: "may **not only not** fear death, but may **not even** have
  to bear the hand…".
- **0763C** *usque adeo **non** erubescunt impii, ut nobis insultare **non** desinant* — on
  *erubescunt* and on *desinant*. English keeps both ("so far from being ashamed … do not
  cease").
- **0764A** *tanquam cui **non** resistat jam perfecto **nisi** invidus diabolus* — on
  *resistat*, restricted by *nisi*. English: "none resists but the envious devil".
- **0765A** *quoniam **non solum** dictum est sordibus … **sed etiam*** — on *solum*, and the
  `sed etiam` is the structural proof of it (§2c).
- **0765C** *in renibus **nullas** inferiores delectationes* — on *delectationes*, a
  quantifier, not on the participle *prospiciens*. English: "in the reins **no** lower
  delights".
- **0766B** *ut **non** tua, **sed** sua malitia puniantur* — ⚑ **the sharpest 2a site in my
  range.** The negative stands before nothing but the possessive *tua*, and the `sed sua`
  correlative proves the host from structure: the claim is not that sinners go unpunished by
  God, but that the malice that punishes them is theirs and not his. English: "punished **not
  by thy** malice, **but by their own**", with the negative on the possessive.
- **0767D** *quamvis **non omnis** homo Filius hominis possit intelligi* — on *omnis*, not on
  *possit*. English: "although **not every** man can be understood as the Son of man". Putting
  it on the verb would make the sentence deny what the next line affirms of Christ.
- **0768B** *ipsi homines **non** ob aliud *boves* dicti sunt, **nisi** quod…* — on *ob
  aliud*. English: "for **no other** reason **than** that".
- **0768C** *non hominum **tantum**, sed etiam angelorum* — on *tantum*.
- **0770B** *Non enim convertitur anima … **nisi** cum* / *Nec opportunus … avertitur, **nisi***
  — on the two verbs, each restricted by *nisi*.
- **0770C** ⚑ ***non** sine magno fructu aeternitatis morituros … Christianos* — a litotes,
  and the host is the prepositional phrase *sine magno fructu*, **not** the participle
  *morituros*. English: "Christians will die **not without** a great fruit of eternity",
  which keeps the negative on the phrase; "will not die … with a great fruit" would invert it.
- **0771C** *in quibus **non solum non** metuitur reprehensor, sed etiam laudator auditur* —
  two negatives, on *solum* and on *metuitur*, with `sed etiam` fixing the scope.
- **0774A** *Homines autem sunt **non solum** de quibus … **sed etiam** ille* — on *solum*.

#### 3d · The unexpressed subject — every supplied pronoun, and what fixed it

The brief names this the dominant defect class, and a psalm gloss changes speaker constantly.
The ones that were genuinely open:

- **0762D–0763A** — *deprecatur … molitur … contexit … conatur … cogitur*. The subject is
  **anima**, printed at *tutam se praeberi **anima** deprecatur*, so the English says "she"
  from there to the end of the verse, and switches to "he" at *quem lacrymis lavat, **qui**
  se ab illo conatur extrahere* where Migne prints a masculine relative. **The switch is
  Migne's, not mine.**
- **0763D** — *quia gementem et tam saepe diuque flentem Deus exaudivit, intelligatur
  liberata … orare*. Both participles and *liberata* are **feminine**, so the subject is the
  *anima pia* of 0763B and not the *impii* who are the nearest plural. English: "**she** is
  understood, being set free from her sins, to pray even for her enemies".
- **0763D/0764A** — *qui licet vitio suo **ceciderint** … tamen in natura sua boni a Deo
  creati sunt*. The relative before it is **singular** (*Qui etiam filius Jemini … scribitur*)
  and the verbs here are **plural**. Migne's own number shift, carried: "Who is also written
  *son of Jemini* … who, although **they** fell by their own fault". Rendered as printed and
  not smoothed in either direction.
- **0764D** — *quibus poena est, cum aufertur ab eis ista possessio, in qua dominari
  desiderant*. The datives and *desiderant* are the **devil and his angels**, not the sinners
  who are the possession: it is the possessors who want to lord it. English names them by
  keeping "to whom" attached to *diabolum et angelos ejus*.
- **0765D** — *qui ipsos, qui persecuti sunt, **non statim post resurrectionem** ad supplicium
  rapuit*. Subject = God the *judex patiens*; object = the persecutors. English holds both.
- **0771D** — ⚑ *Multum **irascitur**, dum non exquirit, dum quasi obliviscitur…*. The subject
  is **God**, and the sentence is Augustine's paradox: God's anger *consists in* not
  punishing. Read with the Antichrist as subject it becomes nonsense, and it construes either
  way at a glance. The closing clause *Sed quanta ista **ira Dei** sit docent sequentia* names
  the subject explicitly and settles it.
- **0773A** — *dum animus humanus … parci sibi putat, cum excaecatur*. Subject = *animus
  humanus*, printed. English: "the human mind … thinks itself spared, when it is blinded".

---

### §4 · PLATE CANDIDATES — logged, and NOT marked

⛔ **Zero `[sic:]` in these five chunks, and that is a decision.** Brief addendum A measured
the split 10 for 10: a suspicion aimed at a **non-word** came back as *our digitization's*
corruption, not Migne's, every time — which is the class that made seven false `[sic:]`
withdrawable in the 2026-08-23 batch, each publicly blaming Migne for Corpus Corporum's error.
The two sibling Glossa OT books settled the practice for this series (8951 §, 8952 §2): **render
the evident word, log the crux, fire nothing**, exactly as Ruth's *significaRuth* was handled
by a tei-patch and never by a marker. I have followed that. All three below are worth the
read; none is asserted on the page.

#### 4a · 0769D · ***misus*** for *missus* — one dropped letter inside a scripture lemma

*Princeps hujus saeculi **misus** est foras.* *misus* is no Latin word. The reading *missus
est foras* is the form Augustine quotes throughout, and it is what the gloss needs
(*exclusit inde principem*). ⚑ **Doubly worth the read because it sits inside a lemma that is
independently divergent** (§2e): if the plate reads *missus*, the `[var:]` stands unchanged
and the defect is ours; if the plate reads *misus*, this is a `[sic:]` site and the `[var:]`
should say so. Rendered "was sent forth", which keeps *missus* visibly distinct from the
Clementine's *ejicietur* that the marker quotes.

#### 4b · 0763D · ***potet*** for *potest* — a real form with no grammatical slot

*quod sine confusione et conturbatione fieri non **potet***. *potet* is a real word — third
singular present subjunctive of *poto*, "let him drink" — which is exactly why it is
dangerous: nothing looks broken. But *poto* cannot govern the infinitive *fieri*, so the form
**has no slot in its own clause** (Pattern 12's first test), and the clause's only possible
verb is *potest*. Rendered "cannot be done", crux logged, nothing fired. ⭐ Recorded here
rather than passed over precisely because addendum A's finding runs the other way for real
words: a real word that reads oddly is Migne's until a plate says otherwise. This one does not
read oddly — it does not *read* — which is what separates it from the refuted cases.

#### 4c · 0762B · ***justorum*** in *septem dierum justorum repetitione* — suspiciously placed

*Et quoniam omnia tempora septem dierum **justorum** repetitione volvuntur.* The sentence says
all times revolve by the repetition of seven days; *justorum* has no work to do there and no
antecedent in the clause (the just have been named in the previous sentence, *animae
justorum*, which is how an eye-skip of exactly this shape happens). Rendered as printed —
"the repetition of the seven days of the just" — under Pattern 7. **Real word, so no marker
and no conjecture in the text**, per addendum A. Worth one line of a plate read while the
column is open.

#### 4d · Three roughnesses rendered literally, no candidate raised

- **0764B** *qui acceptis beneficiis reddidit mala **pro nobis*** — the antithesis wants *pro
  bonis* ("evil for good"), and *pro nobis* is odd in a clause about a private injury.
  **Real words, and the sentence construes**, so it is rendered as printed ("rendered evils
  for us") and nothing is fired. Raised here so a blind reader does not think it unseen.
- **0766B** *Verus justus es, Domine* where *Vere justus es* is the expected idiom. *Verus* is
  a real word and the phrase construes as "Thou art the true just one", which is what the
  English prints. No marker.
- **0768C** *quo **tritus** idem sermo referendus est.* Rendered "the same discourse, now
  threshed out" — which is not merely tolerable but apt, since the whole chunk has been
  expounding threshing-floor and winepress. No candidate.
- **0770B** *Nec **opportunus** ab hoc saeculo avertitur* — a nominative adjective where an
  adverb (*opportune*, which Migne uses four lines earlier) would be expected. Rendered "Nor
  is one seasonably turned away". Gender/case oddity with no clean English exponent; no
  marker, and Pattern 9's reasoning applies.
- **0769A** *Siquidem et victoriam feret de mundo, finis est futurorum bonorum.* The two
  clauses do not join cleanly. Rendered literally, unsmoothed.

---

### §5 · CANDIDATES WEIGHED AND REJECTED — with the reason each lost

⛔ Brief §5's rule: naming a rival is not adjudicating between them. Each of these was a real
divergence from the Clementine that I considered marking and did not.

- **5a · Zach 1:3 @0762C.** Migne drops *exercituum* twice and the whole interposed *ait
  Dominus exercituum*. **Rejected: omission, not substitution.** Nothing is said that the
  Clementine does not say, and the gloss adduces the verse for the reciprocity of turning,
  which both texts carry identically. A `[var:]` here would report an ellipsis as a variant.
- **5b · Ps 33:19 @0763B, *prope est Dominus obtritis corde*.** The Clementine reads *Juxta est
  Dominus iis qui tribulato sunt corde* — **wholly different wording**, and this was the
  strongest rejected candidate. It lost because it is **not the psalm under exposition**: it
  is adduced in passing to license the claim that the prayer was heard, and the sense of the
  two forms is the same ("the Lord is near to the broken-hearted"). ⚑ The reading Migne
  prints is the Roman/Old-Latin form of the verse, and **Pattern 14 forbids speculating about
  why two texts differ**, so a marker here would either say nothing useful or say more than I
  can support. Recorded in full instead, which is where the finding belongs.
- **5c · Ps 7:8 @0764D, *circumdedit* for *circumdabit te*.** Perfect for future. **Rejected:
  the word has been absorbed into the gloss's own syntax** — *ita eum circumdedit, ut
  verissime diceretur* — where a future indicative could not stand. Contrast §2f and §2h,
  where the tense change sits in a lemma quoted as the verse, not in a clause of the gloss's
  own making. **That is the line I drew between the fired and the rejected tense cases**, and
  it is the same line as §3a's: Migne recasting his own citation is not Migne's text
  diverging.
- **5d · Rom 5:8–9 @0765C.** Migne adds *si*, drops *secundum tempus* and *in sanguine
  ipsius*, and reads *quanto magis* for *multo igitur magis*. **Rejected: the divergences are
  a clip and a connective**, and the *a fortiori* the gloss is arguing from survives all of
  them untouched. The dropped *in sanguine ipsius* is the one I hesitated over; it is a real
  loss, but nothing in the gloss touches the blood, and Pattern 14 asks for a divergence that
  changes the sense of *this* argument.
- **5e · 2Cor 2:16 @0766A.** Migne prints *aliis sunt odor vitae in vitam, aliis odor mortis
  in mortem*; the Clementine has death **first**. **Rejected: order only, both members
  present.** ⚠ Order reversal *is* a real class (7914 @1079B's *cinis et pulvis*), and it was
  weighed on that ground; it lost because that case turned on a gloss that expounded ashes,
  and here the gloss expounds neither member — it uses the pair whole, to explain how one bow
  shoots both apostles and heretics. The English keeps Migne's order.
- **5f · The *ex Hebraeo* citations @0767D, 0768C–D, 0769B, 0772A.** *Minues eum paulo minus a
  Deo* · *Victori super morte filii* · *victori pro morte filii* · *Canam nomini tuo,
  Altissime* · *Cum ceciderint inimici mei retrorsum…* · *Loquitur in corde suo: Non
  movebor…* — **not collated as Vulgate lemmata at all, and no `[var:]` is possible on any of
  them.** Migne labels every one (*in Hebraico legitur*, *ex Hebraeo translata editio*, *sicut
  Hebraica docet editio*, *Hebraica translatio*): they are Jerome *iuxta Hebraeos*, adduced
  precisely **because** they differ from the Gallican he is expounding. ⚑ Firing a Vulgate
  variant on a reading the author has just told you is not the Vulgate would be the marker
  asserting as a divergence what the page already prints as one.
- **5g · 1Cor 15:27 @0768A, *Excepto eo qui ei subjecit omnia*** for *praeter eum qui subjecit
  ei omnia*. **Rejected: a synonymous prepositional phrase and a word-order swap.** The
  exception clause is the whole point and it is identically made.
- **5h · Mt 16:23 @0769B, *Redi retro, Satanas*** for *Vade post me Satana*. A different verb
  and a different adverbial. **Rejected because the gloss's argument is about the *retro*, and
  the *retro* is Migne's own word here** — *retrorsum conversus est*, *retro factus est*,
  *retro esse facit*, three times in four lines. A `[var:]` would be true, but the reading it
  reports is not the reading the argument uses, and the Clementine's *Vade post me* is itself
  a "behind me". Logged rather than marked; ⚠ I record it as the closest call of the four
  rejected NT citations, and a later reader may reasonably reopen it.
- **5i · Phlp 3:13 @0769B.** Migne has *et se ad ea quae **ante** sunt extendens* for the
  Clementine's *ad ea vero quae sunt **priora**, extendens **meipsum***. **Rejected: this is a
  quotation woven into the gloss's own third-person sentence** (*qui … portaverit imaginem
  coelestis, ea scilicet, quae retro sunt obliviscens*), so *se* for *meipsum* is required by
  the syntax the gloss has built, and *ante* for *priora* follows it.
- **5j · Ps 9:8 @0770A, *judicio sedem suam*** where the address four words earlier prints
  *thronum*. Same class as §3a and §3b — Migne re-quoting himself with a synonym. **Kept
  visible in the English ("throne" / "seat"), not marked.**
- **5k · 2Thes 2:3 and 2:4 @0770D, 0772A.** *Cum revelabitur homo peccati* for *et revelatus
  fuerit homo peccati*; and *in templo Dei sedebit; extollens se super omne quod colitur et
  quod dicitur Deus* for *qui adversatur, et extollitur supra omne, quod dicitur Deus, aut
  quod colitur, ita ut in templo Dei sedeat ostendens se tamquam sit Deus*. The second is a
  substantial reworking. **Both rejected: Migne flags them as paraphrase himself** — *de quo
  Apostolus dicit*, *etiam secundum Apostolum* — and the second reorders and compresses rather
  than reading a different text. Recorded in full so a reader can see how far it travels.
- **5l · Ps 9:28 @0772B, *Cum amaritudine et dolo*** for the Clementine's *et amaritudine, et
  dolo*. **Rejected: this is the gloss picking the phrase up as a phrase**, and *cum* + the
  ablative is how it must be picked up once detached from *plenum est*. The verse address
  three lines above prints *Cujus maledictione os plenum est,* which is verbatim.
- **5m · Ps 9:34 @0773B, *non requiret Deus*** for the Clementine's bare *Non requiret.*
  **Rejected: Migne supplies the subject inside the italic**, which is an expansion for
  clarity in a sentence that has been about God for a page, not a variant reading.
- **5n · Ps 9:36 @0773C, *nec invenietur*** for *et non invenietur*, and *peccatum **ejus***
  for *peccatum illius*. **Rejected: one negation written as one word instead of two, and a
  pronoun synonym.** Both flagged only because the brief asks for the negation sites to be
  named; the English carries the negative either way.

⭐ **Two negatives worth recording as negatives** (addendum §4's point that a checked negative
is worth having): I looked for the normalization class — a form suspiciously *tidy* in a rough
passage — and found no candidate in these five chunks; and I ran addendum D on `usque ad`, which occurs
**five times** in cols 0762B–0774A and is **the abridgment formula in none of them**: two are
*usque adeo* ("so far", 0763C *usque adeo non erubescunt* and 0771D *usque adeo beatus
videbitur*), and three are ordinary prepositional uses with a real object — 0763A *fletum
usque ad cordis intima*, 0767A *ut sonus usque ad aures valeat*, 0767C *Scripturae praedicatae
usque ad infantium tarditatem*. Each was decided from what stands on either side of it, per
occurrence, and none was allowed to swallow a lemma's own words. Both checks were run and both
came back negative.

---

### §6 · ITALIC-SPAN BOUNDARIES — three spans in the digitization do not fall where the verse does

All three are reproduced **in the same place** in the English, per the brief's rule that every
italic span in the Latin is an italic span in the English. None is patched, none is marked.
They are logged because the resulting English reads oddly and a reader is entitled to know the
oddity is in the file and not in the translation.

- **6a · 0766A · *Vasa* vero *mortis vel* haeretici intelliguntur.** The span runs one word
  past the verse: *vel* is not part of Ps 7:14 but the first limb of the gloss's own
  **vel … vel** ("either heretics … *Vel* the same apostles"). English: "But by *vessels*
  *of death, either* heretics are understood … *Or* the same apostles". ⚑ Reading *vel* as
  part of the lemma instead of as the correlative would break the sentence's structure, and
  the second *Vel*, italicised alone four lines later, is what proves the pairing.
- **6b · 0768C · *De occultis filii* quaeri potest.** The span opens with the gloss's own
  preposition *De*; the psalm title (9:1) reads *in finem **pro** occultis filii*, and Migne
  prints exactly that, unitalicised *pro* and all, ten lines later. English: "*Concerning the
  hidden things of the son* it can be asked."
- **6c · 0772C · *Beati pauperes spiritu. Leonem* autem *in spelunca*.** One span runs across
  a full stop, joining the end of a Matthew quotation to the first word of the next sentence.
  Reproduced as one span. The same shape recurs at **0773C**, *omnium inimicorum suorum
  dominabitur. Brachium* ergo ejus dixit potentiam ejus, and at **0774A**, *judicare pupillo.
  Judicat [0774A] pupillum*. **Three instances of one class**, which is what makes it a
  markup artifact rather than three accidents.
- **6d · Two spans were split by English word order and one merged**, all recorded because
  band-level asterisk parity is how they were found: *secundum innocentiam* **suam** (0765A)
  is rendered "*according to the innocence* that is his own" so that the roman *suam* stays
  outside the span; *Filium* autem *hominis* (0767D) keeps its two spans as "*the Son* of
  *man*"; and *maledictione os* / *plenum est* (0772B) is rendered "*cursing* … *mouth is
  full*", which moves *os* from the first span into the second because English cannot put
  "mouth" anywhere else. **That last one is the only span whose contents I redistributed**,
  and it is stated here rather than left to be discovered.

---

### §7 · PUNCTUATION CARRIED AS PRINTED

- **0765C** · *prospiciens, non nos acquiescere carni et sanguini**,** sed delectari in
  Domino* — ⚠ **CORRECTED 2026-08-28 at the plate: Migne prints a COMMA here, not a full
  stop.** The full stop was Corpus Corporum's. The note printed here in the original crux —
  "a full stop in the middle of a *non … sed* correlative" — was therefore an observation
  about the transcription, not about the page, and the English had duly broken the sentence in
  two ("…flesh and blood. but are delighted…"). The English now runs on: "…that we do not
  acquiesce in flesh and blood, [0765C] but are delighted in the Lord". The column anchor still
  falls at the same point, now inside a comma-joined clause. **Pattern 8 cuts both ways: never
  supply a mark Migne does not print.**
- **0763C** · *quia etiamsi pariter atque iisdem conventiculis continentur**;** tamen* — a
  semicolon where a comma would be expected; carried.
- **0766B** · *sed justitiae Dei**,** ita loquimur:* — a comma splice; carried as a comma.
- **0765B** · *quod anima justa est**:** Et inquam* — a capital after a colon; carried.
- **0770C** · *cum infidelitas gentium saevitura sit**?** convenienter sequitur* — a question
  mark closing an indirect question, with a lower-case word after it. ⚑ **Pattern 8b was
  considered and is NOT needed here**: the question the mark falls on (*quomodo
  annuntiabitur…?*) is already **direct**, standing behind the colon of *quaereret dicens:*,
  so English can take the mark exactly where Migne puts it. The 8b recasting is for a mark
  that English grammar refuses, and this one it does not refuse. No colon was inserted and
  nothing was moved.
- Question-mark counts per chunk (2 · 1 · 1 · 7 · 2) match the Latin twins band for band. The
  seven in chunk 0008 include the two one-word interrogatives *Quare?* (0769C) and *Sed
  quare?* (0771C), both carried as printed.

---

### §8 · TEST 5 — does the English assert what he asserts

Run last, with the counts already clean, paragraph by paragraph against the Latin. Three
readings were changed as a result, all of them cases where my first draft read more smoothly
than the Latin does:

1. **0765C** — *Scrutans ergo cor nostrum, et **prospiciens**, non nos acquiescere carni…*
   My draft read "and looking upon **it**", supplying an object for *prospiciens* that the
   Latin does not have; *prospiciens* governs the accusative-and-infinitive that follows.
   Changed to "and looking forward, that we do not acquiesce…". **Nothing was missing in the
   draft** — that is the point of the test.
2. **0762D** — *In qua morte, hoc est, esse immemorem Dei … **ut** infernum dixerit* is an
   anacoluthon: the *ut* clause has no main verb to depend on. My draft had quietly supplied
   one by turning the parenthesis into a dash-bounded aside. Rewritten with commas, and the
   broken join left broken.
3. **0771D** — *Multum irascitur, dum non exquirit…* was drafted with the Antichrist as
   subject, which construes perfectly and inverts the paragraph. Repaired from the sentence's
   own closing clause (*quanta ista **ira Dei** sit*). See §3d.

The remaining paragraphs were read back and assert what Migne asserts. **The two places where
I would send a reader first if I am wrong** are §4a (*misus*, inside a lemma that already
carries a `[var:]`) and §5b (Ps 33:19, the largest divergence in my range on which I fired
nothing).

---

### PLATE COLLATION — markers withdrawn

**2026-08-28.** All 22 pages read at Migne's plate; 61 TEI patches applied; the Latin twins for
these chunks now say what Migne printed. Chunk boundaries did not move.

**Withdrawn — one, and it is the worst class of error this collation found.**

- **0770A · Ps 9:9 · `[var: Vulg. Ps 9:9 *judicabit*, "shall judge"]` — WITHDRAWN.** ⛔ **The
  divergence never existed.** The plate prints ***judicabit***, exactly the Clementine's reading;
  Corpus Corporum had written *judicavit*, and the collation of §2f, run against that twin,
  reported a departure from the Vulgate that is not on Migne's page. Marker removed from
  `0008.md` **and the English tense corrected with it**: "*hath judged the world in equity*" →
  "*shall judge the world in equity*". §2f above is rewritten in place, not deleted, because the
  failure mode is the lesson: **a `[var:]` fired off a transcription is a public claim about
  Migne resting on Corpus Corporum, and no amount of lemma collation can catch it — only the
  plate can.**

**Punctuation corrected — §7's first bullet.**

- **0765C.** Migne prints a **comma** after *carni et sanguini*, not a full stop; the sentence
  runs on into *sed delectari in Domino*. The full stop was the digitization's. The English had
  faithfully carried a mark Migne does not print, breaking one *non … sed* correlative into two
  sentences ("…flesh and blood. but are delighted…"). It now runs on: "…that we do not acquiesce
  in flesh and blood, [0765C] but are delighted in the Lord." The anchor sits at the same point.
  ⚑ **Pattern 8 has two halves and only one of them was being enforced here.**

**Sense changed by the corrected Latin.**

- **0764D.** Migne prints *ut desinat possidere **quod** possidet* (CC: *quos*). The English said
  "that he may cease to possess **those whom** he possesses"; it now reads "**what** he
  possesses" — which is also what the surrounding gloss requires, since the thing possessed is
  the *possessio* / *fines* of the next clause, not the sinners as persons.

**Recovered Vulgate divergences weighed in this range.** Rule applied: *fire where the printed
reading construes in place and yields a different sense; decline where it yields no sense at
all, because that is Pattern 12's business, not Pattern 14's.*

- **0764B · Ps 7:4 · `[var:]` FIRED.** Migne prints *si **fecit** istud* against the Clementine's
  *si feci istud* — a whole change of person, in a psalm spoken throughout in the first person,
  and Migne's own next clause is *si est iniquitas in **manibus meis***. CC had normalized it to
  *feci*. **Migne is rendered**: "What he says: *if he hath done this,*" with
  `[var: Vulg. Ps 7:4 *si feci*, "if I have done"]`. The strain between the third person of the
  lemma and the first person of its explanation is Migne's, and is now visible.
- **0771C · Ps 9:23 · `[var:]` FIRED.** Migne sets ***Comprehendantur*** in italic — subjunctive
  — where Clem. Ps 9:23 has the indicative *comprehenduntur*. CC had supplied the indicative.
  The word is italicized as the psalm's, so it is a citation and Pattern 14 reaches it; the mood
  is construable and changes what is asserted (a wish, not a fact). English:
  "*Let them be caught,* however, the impious, *in the counsels,*
  `[var: Vulg. Ps 9:23 *comprehenduntur*, "they are caught"]` because their thoughts become bonds
  to them." ⚠ Italic parity with the twin is preserved: two spans, *autem impii* outside them,
  as Migne sets it.
- **0764A · Ps 7:3 — DECLINED.** Migne prints *ne quando rapiat **at** leo animam meam*; Clem.
  *ut leo*. *at* is a real word but produces no clause here, and Migne prints the same lemma
  correctly (*Ne quando rapiat,* etc.) three lines above. Broken type, not a variant reading;
  English keeps "as a lion", unmarked, per the standing out-of-scope ruling on this work's
  restored typographic defects.

---

### PLATE COLLATION · REGISTER OF RESTORED TYPE, cols 0762B–0774A

Wilson's ruling of 2026-08-28 governs (stated in full at the head of the matching section in
`cruces-0000.md`): **mark only where the reading is in doubt; record the rest here and disclose
the count in the work-level page note.**

**MARKED in this range — two.**

- **0766A · *Providentia* for *Providentiae* — `[cj: *Providentia*; read *Providentiae*, "to the
  Providence"]`.** Migne prints *et ob hoc divinae **Providentia** etiam ista disposito tribuenda
  est*. *tribuenda est* takes a dative, and *divinae* is already dative and left stranded by a
  nominative. The dropped *e* leaves a clean, ordinary Latin nominative behind, so the Latin page
  gives the reader no signal; the English ("must be ascribed to the divine Providence") was
  rendering CC's repair. Marker placed after the sentence, before *Or the same apostles*.
- **0771A · *Filium homines* for *Filium hominis* — `[cj: *Filium homines*; read *Filium
  hominis*, "the Son of man"]`.** Migne prints *qui nolunt liberari a Filio Dei, et pertinere ad
  **Filium homines**, et esse filii hominum*. A nominative/accusative plural where the genitive
  singular is required; it does not construe, and *homines* is a real word standing in a real
  position (the same sentence ends *quoniam homines sunt*), so nothing marks it as broken.

**Already marked, and standing:** 0764B `[var: Vulg. Ps 7:4 *si feci*, …]` and 0771C
`[var: Vulg. Ps 9:23 *comprehenduntur*, …]`, both argued above.

**CRUCES ONLY — recorded here, unmarked in the text.**

| Col | Migne prints | Intended | Why the reading is not in doubt |
|---|---|---|---|
| 0763A | *flectum* | *fletum* | Intruded *c*; a non-word, and *rigatio … ad interiora* fixes "weeping". |
| 0763C | *Cebra* | *Crebra* | Dropped *r* at the head of a sentence; a non-word. |
| 0764A | *rapiat at leo* | *rapiat ut leo* | Ps 7:3. *at* produces no clause, and Migne sets the same lemma correctly three lines above. Wrong sort; see the DECLINED note above. |
| 0765C | *proscipiens* | *prospiciens* | Metathesis; a non-word, and Migne sets *prospicit* correctly in the next line of the same sentence. |
| 0766A | *disposito* | *dispositio* | Dropped *i*; a non-word, and *ista … tribuenda est* requires the feminine noun. |
| 0766C | *ouia* | *quia* | Broken/wrong sort for the *q*; a non-word opening a causal clause. |
| 0768D | *adimptere* | *adimplere* | *t* for *l*, split across the column break (*adim-\|ptere*); a non-word inside Mt 5:17, whose text is not in doubt. |
| 0770B | *momen* | *nomen* | *m* for *n*; a non-word, and *cognitio nominis* stands twice in the same sentence. |
| 0770C | *porte filiae Sion* | *portae filiae Sion* | Dropped *ae*; the same phrase is set correctly two lines above and two below. |
| 0772B | *Non novebor* | *Non movebor* | *n* for *m*; a non-word, and the first occurrence of the same lemma at 0772A/B is set correctly. |

**Orthography, not defective type — no marker and no conjecture.** 0771A ***Inploratur*** is
Migne's unassimilated spelling of *imploratur*: correct Latin for its period, Pattern 9 exempt,
and recorded here only so that a reader collating the twin is not left to wonder.

**Punctuation** in this range is dealt with above (0765C, the comma Migne prints where the
digitization had a full stop).

---

### THE BLIND POLARITY READ

Fenced reader on chunks **0005–0009** (Pss VI–IX, cols 0762B–0774A), reading Latin against
English in full with no crux file and no collation report open. Adjudicated 2026-08-28 under
Wilson's marker ruling of the same session (stated in full in `cruces-0000.md`). Whole-work
figures are in that file.

**Result for this range: 1 site, ours; 0 markers placed.**

#### Repaired

- **0774A, VERS. 39 — *extulit patrem* is a burial, not an exaltation.** Migne: *qui exuit
  veterem hominem, atque hoc modo tanquam **extulit patrem***. Our English read "as it were
  **exalted** the father". *Efferre* here is the funeral idiom (*funus efferre*, *patrem
  efferre*) — **carried his father out to burial** — and the control is two paragraphs back in
  the same run at 0773C, where the expositor defines the *pupillus*: *Orphanum autem dixit,
  **cui moritur pater hic mundus**, per quem carnaliter genitus est*, and *Talibus enim orphanis
  pater fit Deus*. The clause is supplying the reason this man qualifies as the orphan the Son
  of man judges for. *Tanquam* is the tell: there is a metaphor to flag in burying a father one
  never literally had, none at all in exalting one — and the old reading made *exuit veterem
  hominem* a stripping-off and an elevation at once. Now: "and in this way as it were **carried
  his father out to burial**." 7a mechanism 1; no lexical trace, and `verify-english` cannot
  see it.

#### Adjudicated and DECLINED

- **0769C *Princeps hujus saeculi missus est foras* → "was sent forth".** Momentarily ambiguous
  in English (it can read as commissioning), but the governing clause immediately before —
  *cum exclusit inde principem*, "when he shut out thence the prince" — fixes the direction for
  the reader before he reaches it. A clarity question, not a polarity one.
- **0770A *paravit in occulto judicio sedem suam*.** Our distribution ("prepared **in secret**
  his seat **in judgment**") and the reader's ("his seat **in the hidden judgment**") assert the
  same thing, which is the sentence's own contrast with *palam manifesteque venturus est*.
- **0764B *reddidit mala **pro nobis***** — almost certainly Migne's slip for *pro bonis*, the
  reading the maxim needs. Our English renders what is printed and does not repair it, which is
  7a-correct. **No marker:** the intended word is not in doubt (*mala pro bonis* is the maxim's
  own shape and *acceptis beneficiis* stands three words earlier), so it falls on the
  cruces-only side of Wilson's ruling.

#### Positive results worth recording

- ⭐ **The 7a″ profile is ABSENT from this range.** Every quoted verse in five chunks was read
  word by word against the plate, and **no lemma was found conformed to the familiar English**.
  Where Migne diverges, the English diverges too and the divergence is already marked:
  *Miserere mei, **Deus*** (0762C), *si **fecit** istud* (0764B), *terram **manducabis***
  (0764D), *Consu**mm**etur nequitia* and *justus justior fiat* (0765B), *Templum **Domini***
  (0770B), *Comprehend**antur*** (0771C), *humili**avit*** (0773A), *ut tradat eos in manus
  **suas*** (0773B), *Ne dicatis vobis patrem in terris* (0773C). For a scripture commentary —
  the genre whose predicted dominant failure mode 7a″ **is** — that is the notable finding of
  the read, not an absence of one.
- **Every printed negation in the five chunks is carried**, including where carrying it leaves
  the sentence odd: *usque adeo non erubescunt … ut … non desinant* keeps the idiom's double
  negation rather than smoothing it. No negation appears in the English that the Latin does not
  print.
- **0769C *Convenientius hoc Domino Jesu Christo **dici**, quam **ipsum dicere*** — passive to
  the Lord, active by him — is rendered in the right direction ("said **to** the Lord … than
  said **by** him"). This is the exact 7a mechanism-5 shape, verified rather than assumed.

# RANGE FILE — chunks 0010–0013 · cols 0774B–0784A

*Preserved unedited from `cruces-0010.md`; headings demoted one level. Where it
conflicts with the head above, the head governs.*

## 9003 · *Expositio in XX primos Psalmos* — cruces for chunks 0010–0013 (cols 0774B–0784A)

Range: **IN PSALMUM X** (from 0774B) through **IN PSALMUM XVI** (to 0784A) — Psalms 10, 11,
12, 13, 14, 15 and 16 by the **Vulgate/Septuagint reckoning**, which is what Migne prints and
what `sources/vulgate/clementine-flat.txt` uses. Nothing below renumbers toward the Hebrew,
and the title-as-verse-1 offset is not treated as a divergence anywhere.

Apparatus placed in this range: **16 `[var:]` · 1 `[sic:]` · 4 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[n:]`** — ⚠ **`[cj:]` count revised 2026-08-28**, was 0 at filing: the plate
collation placed one @0774B (*apud ipso*) and the blind polarity read three more (@0779D,
@0781A, @0775A); see **THE BLIND POLARITY READ** at the foot of this file. (the work has `noteCount: 0` throughout, as expected). Zero guillemets in
either language. Band-by-band punctuation and italic-span counts are 1:1 with the Latin twins in
all four chunks with **one deliberate exception**, recorded at §4.1.

---

### §0 · WHAT WAS READ AT THE PLATE, AND WHAT IT FOUND

The on-disk scan (`raw/scans/pl114/patrologiaecurs06saingoog.pdf`) was read at 300–600 dpi for
**four pages covering the whole of cols 773–784 that carry my candidates**:
p. 392 (cols 773/774), p. 393 (cols 775/776), p. 395 (cols 779/780), p. 396 (cols 781/782).
Page map used and confirmed against the printed corner numbers on p. 392 (`773` / `774`):
**PDF page = (column + 11) / 2**, the figure `coverage.json` already records for this volume.

⛔ **The single most important finding in this batch is not a translation call. Our Latin for
this work diverges from Migne's plate at a high rate — nine sites in four pages — and it
diverges in BOTH directions (brief §4).** Every one of these was found by reading the whole
line for a different word, exactly as addendum C predicts. None is detectable from the Latin
alone. **Recommend a `data/tei-patches/9003.json` and a re-chunk after the whole work's
agents have filed**; I have not patched, because re-chunking mid-fleet would rewrite the
chunks the other agents are working from.

#### 0a. Migne's own defective type, silently NORMALIZED by Corpus Corporum (5 sites)

| col | plate prints | our TEI reads | consequence |
|---|---|---|---|
| **0774B** | ***mentem*** (italic) | ~~*montem*~~ → **patched to *mentem*, 2026-08-28** | **the only one that changes the English** — see §1.1. The compromise described there is **over**: the twin now prints *mentem* and the English now reads "one ***mind*** do I hold". |
| 0774A/B | *apud **ipso** sit Christus* | *apud ipsos* | none (ungrammatical either way; no English exponent) |
| 0774C | ***dextruxerunt*** ×2 (lemma + re-quotation) | *destruxerunt* ×2 | none; a non-word for *destruxerunt*. ⚑ Migne prints *destruxerunt* correctly a third time in the same paragraph, which is what makes the first two visibly his slip |
| 0775B | *proptera* | *proptera* — **agrees** | took the batch's one `[sic:]`; see §1.2 |
| 0780D | ***acceleverunt*** (italic) | *acceleraverunt* | none; a non-word for *acceleraverunt* |

#### 0b. Corpus Corporum's OWN corruptions, where Migne is clean (4 sites)

| col | our TEI reads | plate prints | corpus control |
|---|---|---|---|
| 0774B | *appelatus* | ***appellatus*** | — |
| 0774D | ***Dominius*** | ***Dominus*** | 1 occurrence of `Dominius` in the entire `src/latin/` corpus against 60 `Dominus` in this work alone |
| 0775B | *poenas **Juant*** | *poenas **luant*** | `J` for `l`; a non-word |
| 0780D | ***infirmi ates*** (split run) | ***infirmitates*** (one word) | unique in the corpus |
| 0780D | *Herusalem* | ***Hierusalem*** | — |

⛔ **THREE OF THESE WOULD HAVE TAKEN A FALSE `[sic:]`.** *Dominius*, *Juant* and *infirmi ates*
are textbook Pattern 10/12 shapes — a non-word, a J/l substitution, a split run — and a
`[sic: …]` on any of them would have blamed Migne publicly for the digitization's error, which
is the exact class of seven withdrawn markers in the 2026-08-23 batch (brief addendum B). The
addendum's rule held **5 for 5 here**: every non-word suspicion turned out to be a
transcription question, not a plate question. **The rule for a non-word in this work is:
render it for its evident sense, log it here, fire nothing, and ask for the plate — and where
the plate is on disk, as it is for PL 114, just read it.** Cost: four page renders.

⭐ **Recorded negative:** *proptera* at 0775B was suspected on exactly the same grounds as the
four above and came back **agreeing with the plate** — Migne set it. That negative is what
makes the four positives credible, and it is the one candidate in the batch that earned a
marker.

---

### §1 · THE TWO SITES WHERE THE PLATE CHANGED WHAT THE ENGLISH SAYS

#### 1.1 · 0774B — ✅ **RESOLVED 2026-08-28. The patch landed; the English now reads Migne.**

**Read this box first; the section beneath it is the record of the compromise, not the current
state.** The tei-patch the section asks for (`montem` → `mentem` at 0774B) was applied in the
full plate collation of 2026-08-28. The Latin twin now prints *Unum enim **mentem** teneo*, and
the English has been changed from "one ***mountain*** do I hold" to **"one *mind* do I hold"**.

⚠ **Two things this section proposed that were NOT done, deliberately:**

1. **No `[sic: *mentem*]` was placed.** §3.1 of `cruces-0014` settles the principle for this
   work: Pattern 12 excludes "a real word that is merely wrong", and *mentem* is a real word.
   A `[sic:]` here would be the same false public claim the collation has just withdrawn four
   times over.
2. **No `[cj:]` either.** Pattern 18 renders Migne and *proposes* the emendation; but here the
   instruction was to render Migne's *mentem* ("mind"), so a marker reading "read *montem*,
   'mountain'" would sit beside an English word that already says something else. The
   incoherence goes in the crux, which is this paragraph.

**What is genuinely wrong on Migne's page, and is now visible in both languages:** *Unum* is
masculine/neuter and *mentem* feminine, and the relative *in quo* two words later demands a
masculine antecedent — the *mons* of the sentence before (*etiam **mons** appellatus est*),
which is what the heretics' Ps 10:2 *Transmigra in montem sicut passer* is about. **The
argument of the gloss wants *montem*; the plate prints *mentem*; we print what the plate prints
and say so here.** The English keeps "in which", which is genderless and therefore neutral
between the two.

---

#### 1.1 (superseded) · 0774B — Migne prints *mentem*; our Latin twin prints *montem*. RENDERED FROM THE TWIN, AND THAT IS A COMPROMISE.

Printed on the plate: *Unum enim **mentem** teneo, in quo confido, quomodo dicitis…*
Our TEI: *Unum enim **montem** teneo…*

The gloss's whole argument is that Christ is called *mons* (*etiam mons appellatus est*), and
the heretics quote Ps 10:2's *Transmigra in montem sicut passer*. **Migne's *mentem* does not
construe** — *Unum* is masculine/neuter, *mentem* feminine, and the relative *in quo* demands a
masculine antecedent. So the digitization did not corrupt this word; it **repaired** it.

I have rendered **"one *mountain* do I hold"**, following the Latin twin, and I want the
compromise on the record rather than hidden:

- Pattern 7 says render what Migne prints. Migne prints *mentem*.
- Pattern 12 says a `[sic: …]`'s content must appear verbatim in the Latin twin. *mentem* does
  not, so the marker is not merely unwise here, it is **impossible** — the verifier would
  reject it, and rightly, since that check is what stops us gluing our own conjectures onto
  Migne's page.
- Rendering "one *mind* do I hold" against a Latin column reading *montem* would put an English
  word on the page with no witness anywhere in our files.

⚑ **The fix is a tei-patch, not a translation choice.** Patch `montem` → `mentem` at 0774B with
this crux as provenance, re-chunk, then the English becomes "one *mind* do I hold [sic:
*mentem*]" with the *montem* conjecture in the crux. **Until that happens the English on this
line is faithful to our Latin and not to Migne's, and no reader can tell.** That is the whole
reason the finding is at the top of this file.

#### 1.2 · 0775B — *proptera*, and the marker does NOT swallow the force

Plate and TEI agree: *Calicem autem **proptera** puto appellatum, ne quid praeter modum atque
mensuram… fieri arbitremur.* *proptera* is no Latin word (haplography for *propterea*), so it
is carried untranslated under Pattern 10 and marked under Pattern 12:

> *A cup*, however, I think is **for this reason [sic: *proptera*]** so named, that we may not
> judge anything to be done beyond mode and measure…

7a⁗ four-question check, run with the marker's contents deleted:
1. **Verb?** yes — *puto appellatum*, "I think … so named".
2. **Negation?** yes — the *ne* clause, "that we may **not** judge".
3. **Interrogative/conjunction?** ⚠ **this is the one that fires.** *propterea* is the
   forward-pointing half of a *propterea … ne* correlative; quarantine it and the sentence
   loses the pointer to its own reason clause. **So "for this reason" is rendered in plain
   words beside the marker**, which is 7a⁗ obeyed rather than admired.
4. **Object?** (the fourth question 7a⁗ does not ask) — yes, *Calicem*, "a cup", untouched.

Strip-the-marker test: *"A cup, however, I think is for this reason so named, that we may not
judge…"* reads aloud with nothing missing. ✓

---

### §2 · THE 7a″ COLLATION — EVERY LEMMA AND EVERY QUOTED SCRIPTURE IN COLS 0774B–0784A

265 italic spans were listed for this range. What follows names the ones that were checked
against `sources/vulgate/clementine-flat.txt` **and the ones that came back clean**, because a
findings-only list cannot be distinguished from no list at all.

#### 2a · READ CLEAN — Migne agrees with the Clementine word for word

These were each collated against the cited verse, not merely against "somewhere in the
Clementine" (which is all the pre-scan's ✓ means). All agree exactly, punctuation apart:

**Psalm 10:** *In Domino confido, quomodo dicitis* (10:2) · *montem* (10:2) · *Quoniam ecce
peccatores* (10:3) · *Quoniam quae perfecisti destruxerunt* / *destruxerunt* / *quid fecit*
(10:4) · *Dominus in templo sancto suo* / *templo sancto suo* / *Oculi ejus in pauperem* /
*Filios* / *hominum* / *palpebrae* / *interrogant* / *coelum* (10:5) · *Dominus interrogat
justum et impium* (10:6) · *Pluet super peccatores* / *Pluet* / *laquei* / *igne* / *pars* /
*calicis eorum* / *Calicem* (10:7) · *Quoniam justus Dominus* / *justitiae* / *aequitatem vidit
vultus ejus* / *aequitas* (10:8).
**Psalm 11:** *Octava* / *octavam* (title, 11:1) · *Salvum me fac, Domine, quoniam* / *Defecit
sanctus* / *veritates* (11:2) · *Vana locuti sunt unusquisque* / *Proximum* / *in corde et
corde* (11:3) · *Disperdat Dominus universa labia* / *Universa* / *Linguam* / *magniloquam*
(11:4) · *Qui dixerunt linguam nostram* (11:5) · *Propter miseriam inopum* / *inopes et
pauperes* / *Ponam in salutari* / *In salutari* / *Fiducialiter* (11:6) · *Eloquia Domini,
eloquia casta* / *Casta* / *probatum terrae* (11:7) · *Tu, Domine, servabis nos* (11:8) · *In
circuitu impii ambulant* / *In circuitu ambulant* / *secundum altitudinem* (11:9).
**Psalm 12:** *Usquequo, Domine, oblivisceris me in finem?* / *Avertere* / *faciem* (12:1) ·
*dolorem in corde meo per diem* (12:2) · *Usquequo exaltabitur inimicus* / *Inimicus* (12:3) ·
*Respice* / *Illumina oculos meos, ne unquam* / *oculos* / *illuminari* (12:4) · *Qui tribulant
me exsultabunt* / *motus* / *motum* (12:5) · *Exsultabit cor meum in salutari* / *In salutari
tuo* / *exsultabit cor meum* / *cantabo* / *psallam* (12:6).
**Psalm 13:** *Dixit insipiens in corde suo* / *in corde* / *Corrupti sunt et abominabiles* /
*Non est Deus* / *abominabiles* / *usque ad unum* (13:1) · *Dominus de coelo prospexit super
filios hominum* / *filios hominum* / *Prospicit* / *Dominus* / *de coelo* / *ut videat* (13:2) ·
*Omnes declinaverunt* / *Sepulcrum patens est* / *Linguis suis dolose agebant* / *Venenum* /
*aspidum* / *Quorum os maledictione* / *Pedes* / *veloces* / *Ad effundendum sanguinem* /
*Contritio et infelicitas in viis eorum* (13:3) · *Nonne cognoscent omnes* / *Omnibus* /
*cognoscere* / *Qui devorant* / *plebem meam sicut escam panis* (13:4) · *Dominum non
invocaverunt* / *invocat* / *ubi non erat timor* (13:5) · *Quoniam Dominus in generatione* /
*Consilium inopis confudistis* (13:6) · *Quis dabit ex Sion* / *Quis dabit?* / *Quis dabit ex
Sion salutare Israel?* / *ex Jacob* / *Israel* / *Exsultabit Jacob* / *laetabitur Israel*
(13:7) · **and Rom 11:26 *et sic omnis Israel salvus fieret* — exact.**
**Psalm 14:** *Domine, quis habitabit in* / *tabernaculum* / *Mons* / *In tabernaculo* / *quis
habitabit?* / *in monte, quis requiescet?* (14:1) · *Qui ingreditur sine macula et operatur
justitiam. Qui loquitur* (14:2) · *veritatem* / *corde* / *locutus est in corde* / *in corde* /
*In lingua* / *dolus* / *Nec fecit proximo suo malum* / *Proximum* (14:3) · *Ad nihilum deductus
est* / *conspectu ejus* / *Timentes autem Dominum glorificat* / *Qui jurat proximo suo et non
decipit* / *loqui veritatem in corde suo* / *dolum in lingua sua* / *et non facere proximo suo
malum* (14:4) · *Qui facit haec, non movebitur in aeternum* (14:5) · **and Ps 138:17 *Mihi autem
nimis honorificati sunt amici tui, Deus* — exact.**
**Psalm 15:** *Conserva me, Domine, quoniam speravi in te. Dixi Domino: Deus meus es tu, quoniam
bonorum meorum non eges* / *bonis meis* (15:1–2) · *Sanctis qui sunt in terra ejus* /
*voluntates meas* (15:3) · *Multiplicatae sunt infirmitates eorum* / *infirmitates* /
*acceleraverunt* / *Non congregabo conventicula eorum de sanguinibus* / *de sanguinibus* (15:4) ·
*Dominus pars haereditatis meae et calicis mei* / *haereditatem* / *calicis mei* / *mei* /
*congregabo conventicula eorum* / *restitues* (15:5) · *Funes ceciderunt mihi in praeclaris* /
*ceciderunt* (15:6) · *Benedicam Dominum qui tribuit mihi intellectum* / *intellectu* (15:7) ·
*Providebam Dominum in conspectu meo semper* / *providens* / *a dextris est* (15:8) · *Propter
hoc laetatum est cor meum* / *Insuper et caro* (15:9) · *Quoniam non derelinques animam meam in
inferno* / *Notas mihi fecisti vias vitae* / *Notas fecisti* / *vias* / *vitam* / *adimplebis* /
*laetitia* / *me adimplebis* (15:10) · **and Jo 19:19 *Jesus Nazarenus rex Judaeorum*, Mt 11:29
*Discite a me, quia mitis sum, et humilis corde* — both exact.**
**Psalm 16:** *Exaudi, Domine, justitiam meam* / *justitiam* / *Non in labiis dolosis* / *in
labiis dolosis* (16:1) · *De vultu tuo judicium meum prodeat* / *de vultu tuo* (16:2) ·
*Probasti cor meum et visitasti nocte* / *nox* / *ignis* (16:3) · *Ut non loquatur os meum opera
hominum* / *opera hominum* (16:4) · *Perfice gressus meos in semitis tuis* / *Perficiatur* /
*vestigia* (16:5) · *Ego clamavi, quoniam exaudisti me* (16:6) · *Mirifica misericordias tuas,
qui salvos facis sperantes in te* (16:7) · *A resistentibus dexterae tuae* / *A resistentibus* /
*custodi me ut pupillam oculi* / *Sub umbra alarum tuarum protege me* (16:8) · *Inimici mei
animam meam circumdederunt* / *Inimici* / *animam* / *circumdantes* (16:9) · *os eorum locutum
est superbiam* (16:10) · *Projicientes me nunc circumdederunt me* / *Projicientes* /
*circumdederunt me* / *statuerunt declinare* (16:11) · *Susceperunt me sicut leo paratus ad
praedam* / *Susceperunt* (16:12) · *Exsurge, Domine, praeveni eum et supplanta eum* / *Exsurge* /
*supplanta eum* / *animam meam* / *framea* (16:13) · *Domine, a paucis de terra divide eos* /
*Pauci* / *divisi* / *a paucis* / *terra* / *in vita* / *absconduntur* / *adimpleta* / *Saturati
sunt filiis, et dimiserunt reliquias suas parvulis suis* (16:14) · *in justitia tua* / *satiabor,
cum apparuerit gloria tua* (16:15) · **and Jo 19:15 *Non habemus regem nisi Caesarem*, Mt 27:40
*qui destruis templum*, Jo 8:44 *Vos ex patre diabolo estis* — all exact.**

⚑ **The clean list is long on purpose, and it is what makes the divergences below mean
something.** The Gallican psalter is what the Clementine prints, so these lemmata *ought* to
collate cleanly; the sixteen places where they do not are correspondingly heavier, not lighter.

#### 2b · MARKED `[var: …]` — 16 divergences, each resting on the file, none on recollection

**The firing rule I applied, stated so it can be checked:** a `[var:]` where the divergence is
(a) certain from `clementine-flat.txt` at the verse actually being glossed, (b) **lexical or
grammatical**, not orthographic and not a clipping, and (c) sitting in a lemma or in a
scripture the gloss expounds. Everything failing (b) or (c) is in §2c with its reason.

| col | chunk | Migne prints | Clementine | why it fires |
|---|---|---|---|---|
| 0774B | 0010 | *Tetenderunt arcum* | Ps 10:3 *intenderunt arcum* | different verb in the lemma the gloss expounds. **Plate-confirmed** (p. 392) |
| 0776C | 0010 | *Multiplicantur … filii hominum* | Ps 11:9 *multiplicasti filios hominum* | **agency reverses** — passive of the sons vs. 2nd-sg. active of God |
| 0776C | 0011 | *Quandiu ponam consilium in anima* | Ps 12:2 *quamdiu ponam consilia in anima mea* | singular for plural, and **the gloss rests on the singular** (*Consilio non opus est nisi in adversis*) |
| 0777B | 0011 | *psallam nomini Altissimi* | Ps 12:6 *psallam nomini Domini altissimi* | *Domini* absent from the lemma — and the gloss four lines later argues from it (*nomini autem Domini, quod apud homines innotescit*) |
| 0777D | 0011 | *dedit illos Deus in reprobum sensum* | Rom 1:28 *tradidit illos Deus…* | different verb |
| 0778B | 0011 | *Macta, et manduca* | Act 10:13 *occide, et manduca* | different verb (sacrificial *mactare* for *occidere*) |
| 0778C | 0011 | *…et discite a me… jugum enim meum lene est, et sarcina mea levis est* | Mt 11:29–30 *Tollite jugum meum super vos, et discite a me… Jugum enim meum suave est, et onus meum leve* | a whole clause absent, plus two lexical changes |
| 0778D | 0011 | *tollent nobis et gentem et locum* | Jo 11:48 *tollent nostrum locum, et gentem* | dative for possessive, order reversed |
| 0779A | 0011 | *quoniam Deus in generatione justa est* | Ps 13:6 *Quoniam Dominus…* | **divine name changed — and it disagrees with Migne's own VERS. 6 lemma four lines above, which reads *Dominus*.** Both are in the same chunk; the divergence is internal as well as external |
| 0779A | 0011 | *facta est coecitas ex parte in Israel, ut plenitudo…* | Rom 11:25 *caecitas ex parte contigit in Israel, donec plenitudo…* | different verb, and *ut* for *donec* changes purpose to term |
| 0779B | 0011 | *Veniat ex Sion… ex Jacob* | Rom 11:26 *Veniet ex Sion… a Jacob* | **future indicative becomes jussive subjunctive** — a prophecy turns into a prayer |
| 0780D | 0012 | *miras fecit … voluntates meas* | Ps 15:3 *mirificavit omnes voluntates meas in eis* | periphrasis for the verb, *omnes* absent. **Plate-confirmed** (p. 395) |
| 0782B | 0013 | *Propter verba* [pacis tuae] … *ego custodivi vias laboriosas* | Ps 16:4 *propter verba labiorum tuorum, ego custodivi vias duras* | **plate-confirmed** (p. 396). ⚑ And Migne's own gloss at 0782C, six lines later, writes *posteaquam peregi vias **duras*** — so the work carries both readings and knows the Vulgate's |
| 0782B | 0013 | *Ut non moveantur signa itineris mei* | Ps 16:5 *ut non moveantur vestigia mea* | **plate-confirmed** (p. 396). The gloss then glosses the divergent phrase *with* the Vulgate's word — *quae tanquam **vestigia** … impressa sunt* |
| 0783B | 0013 | *Erue animam meam* | Ps 16:13 *eripe animam meam ab impio* | different verb in a lemma the gloss re-quotes (*Hanc ergo **erue** ab inimicis meis*) |
| 0783D | 0013 | *Ego autem in justitia tua apparebo* | Ps 16:15 *Ego autem in justitia apparebo conspectui tuo* | ***tua* added, and the exposition is built on it** — *in justitia tua videbo faciem tuam* |

#### 2c · DIVERGENCES FOUND AND DELIBERATELY NOT MARKED, with the reason for each

⚑ These are the rejected candidates. Each is a real difference from the Clementine; none earned
a public claim.

1. **0774B *Paraverunt sagittas in pharetra*** — Clem Ps 10:3 has *sagittas **suas** in
   pharetra*. Plate-confirmed as Migne's. **Not marked:** an omitted possessive is not
   sense-bearing, and the lemma is clipped (it ends in a comma and the gloss picks it up
   mid-verse), so the omission is as likely a clipping as a text.
2. **0776B *Erat enim docens eos tanquam potestatem habens*** — Mt 7:29 has *sicut*.
   **Not marked:** *tanquam* and *sicut* are synonyms here; no reader takes anything different
   away. (Mc 1:22's *quasi* shows the same slot is fluid.)
3. **0777A/B *Finis legis Christus*** — Rom 10:4 is *Finis **enim** legis, Christus, ad
   justitiam omni credenti*. **Not marked:** it is an incipit used as a chapter motto, not a
   proof-text, and the omissions are the clipping.
4. **0777B *tribuit mihi bona*** — Ps 12:6 has *qui **bona tribuit mihi***. **Not marked:** word
   order only, and the words are woven into the gloss's own syntax.
5. **0777B *egit in eo*** — Ps 12:6 has *fiduciali­ter **agam** in eo* (1st sg. future).
   **Not marked:** the gloss has recast the verse into the third person about Christ throughout
   this sentence; the person and tense are the gloss's grammar, not a variant text.
6. **0778A *Nunc cognovi, quod **timeas** Deum*** — Gn 22:12 has *times*. **Not marked:**
   subjunctive in indirect statement is standard medieval usage and English has no exponent for
   it here (Pattern 9's reasoning). Rendered "that thou fearest God".
7. **0778C *non cognoverunt viam pacis*** — Ps 13:3 has *et viam pacis non cognoverunt*.
   **Not marked:** order only, inside the gloss's *Unde …* clause.
8. **0780B *opprobrium non accipere adversus proximum suum*** — Ps 14:3 has *opprobrium non
   accepit adversus **proximos suos*** (plural). **Not marked:** Migne has recast the whole
   catalogue into infinitives here, and the singular agrees with his own gloss two paragraphs
   above, *Proximum omnem hominem accipi oportere*.
9. **0781D *Delectatio*** — Ps 15:10 has *delectationes*. **Not marked:** the gloss needs a
   singular subject for *est*; this is its syntax.
10. **0783A *Qui adipem suum concluserunt*** — Ps 16:10 begins *adipem suum concluserunt*.
    **Not marked:** the *Qui* carries over the relative of 16:9, which Migne quotes as the
    preceding lemma. Nothing is added to the text.
11. **0783B *et sicut catulus ejus*** — Ps 16:12 has *et sicut catulus **leonis** habitans in
    abditis*. **Not marked, and this was the closest call in the batch.** *ejus* refers to the
    *leo* named four words earlier in Migne's own lemma, so the two readings denote the same
    animal and the gloss (*populus scilicet*) turns on the whelp, not on whose it is. A `[var:]`
    here would report a difference no reader could act on. Logged instead.
12. **0784A *Scimus quia*** — 1 Jo 3:2 has *Scimus quoniam*. **Not marked:** interchangeable
    conjunctions.
13. **Orthography throughout, Pattern 9, no markers and no cruces beyond this line:**
    *Quandiu*/*quamdiu* · *unquam*/*umquam* · *coelo*/*caelo* · *coecitas*/*caecitas* ·
    *Sepulcrum*/*Sepulchrum*.
14. **The two `Hebraica editio` readings are NOT Vulgate divergences and take nothing.**
    0776B *separatum a terra* (against *probatum terrae*) and 0781A *Et tu haereditas speciosa
    mea es* — Migne himself labels both as the Hebrew, and 0783D quotes a third (*Ego in
    justitia videbo faciem tuam; implebor, cum evigilavero, similitudine tua*). A reading the
    page itself identifies as another version is not a divergence in the Gallican lemma.

---

### §3 · THE UNEXPRESSED SUBJECT — every supplied pronoun in this range, and what fixed it

The launch brief named this the dominant defect class for a psalm gloss, where the speaker moves
between psalmist, Christ, the Church and the persecutor inside one sentence. Below is every
place I supplied a subject English cannot leave out, with what decided it. Where two readings
construe, both are named.

1. **0775A/B *Pluet, ad verba praedicantium **retulit**…*** — supplied "**he** referred".
   The subject is **the psalmist**, not the commentator: the sentence explains what *the verse's
   own word* does, and the surrounding formulas (*Quod autem ait*, *Ait enim*, *quod dixit
   veloces*) all take the psalmist as subject. ⚠ **The rival is Augustine**, whose *Enarratio*
   this gloss abridges throughout; on that reading it is "he [Augustine] referred it". I took the
   psalmist because Migne's abridgment nowhere names its source in this range, so a reader has no
   third person to attach it to.
2. **0774D *Quippe **cui** derelictus est pauper*** — "to **him** the poor man is left". The
   antecedent is **God**, carried from *Oculi **ejus*** in the lemma directly above and confirmed
   by Ps 9:35/10:14's *tibi derelictus est pauper*. Not the poor man, and not the psalmist.
3. **0776D *ut perfecte **operetur** misericordiam*** — "that **it** may perfectly work mercy".
   ⚠ **Two readings construe and I say so rather than choosing silently.** The subject is either
   **the soul** (*in anima mea* stands three words earlier, and the whole psalm's frame is the
   soul's deferral) or **God** (the sentence's other actor, who is deferring). I took the soul,
   because the *quandiu ponam consilium* clause it depends on has the soul as its location and
   the speaker as its agent; a reader preferring God loses nothing in the argument.
4. **0780A *certissime **noverit** malignum non esse*** — "let **him** know most certainly".
   The subject is **the perfect man** of *Ista perfectio est, ut nihil in homine valeat
   malignus*, i.e. the *Qui ingreditur sine macula* of the lemma. Third-person jussive, not
   an address to the reader.
5. **0776A *in quo intelligitur **posuisse***** — "in whom **he** is understood to have set".
   **God the Father**, from *Hoc de persona Dei Patris accipiendum, qui … Filium suum misit*
   two sentences above. Not Christ, who is the *in quo*.
6. **0781A *manifestius in Hebraico … sic **exponit**;*** — "**he** sets forth more plainly in
   the Hebrew". ⚠ **Two readings.** Either the psalmist/text (my rendering) or **the Hebrew
   edition as subject**, which is exactly the construction Migne uses at 0776B four columns
   earlier: *manifestius **Hebraica editio** posuit*. That parallel is the strongest argument
   for the rival, and it is why I have named it here rather than settled it in the text; the
   English is unaffected either way except for the pronoun.
7. **0783B *ut per ipsam regna **debellet** iniquitatis*** — "that through it **it** may war
   down". The subject is **thy hand / thy eternal power** (*quam assumpsit manus tua, id est
   aeterna virtus tua*), not the soul, which is the *ipsam* the power acts *through*.
8. **0782A *quae res tacitas intelligentiae **suae** virtute cognoscit*** — rendered "which
   knows silent things by the power of **its own** understanding". ⚠ *quae* is feminine and can
   only attach to *justitiam* or *vocem*; the sense plainly wants **the Lord** as knower. I have
   followed the grammar rather than the sense and logged it, per Pattern 7. A reader who takes
   *quae* as loosely attracted to the Lord reads "by the power of his understanding".
9. **0778B *cogitans de insidiis*** (0783B in chunk 0013) — "**he** devising of the snares".
   Subject is **the adversary/whelp**, i.e. the people, from *catulus ejus, populus scilicet*.
10. **0784A *non solum … **gratulatur** … **confidit**;*** — "**he** not only rejoices … but
    trusts". The subject is **the believer** of *gloria resurrectionis **fidelium***, the topic
    of the whole paragraph, not Christ and not John.

---

### §4 · CONSTRUCTION-LEVEL CALLS

#### 4.1 · Pattern 8b was invoked once, and it is the batch's one band mismatch

**0776D:** *In eo etiam, quod subjungit: dolorem in corde meo per diem, subauditur, **quandiu
ponam?*** Migne closes an **indirect** question with `?` (verified on the plate, p. 393, where
the mark is unambiguous). English cannot end *"it is understood how long I should set it?"*, so
8b's recast applies: **"it is understood: how long shall I set it?"** — the colon carries the
*subauditur* frame and the direct question carries the mark. Nothing supplied, nothing deleted.
⚑ **This is the single band where my colon count exceeds the Latin's** (chunk 0011, band 1,
1 → 2), and the excess colon is precisely the one 8b requires. Recorded so a later checker does
not read it as drift.

#### 4.2 · Question-mark parity, verified

`?` counts are 1:1 with the Latin twin in every chunk (0010: 3 · 0011: 6 · 0012: 2 · 0013: 0).
Two places tempt a mark that Migne does not print, and neither got one:
- **0779A** *ut sit sensus: Nonne cognoscent omnes… non in eis qui diligunt saeculum.* — a
  *Nonne* clause closed with a **full stop**. Rendered as printed, ending in a period.
- **0784A** *Quid enim est aliud… nisi quod beatus Joannes Apostolus ait: …* — a *Quid enim*
  question closed with a **full stop**. Likewise rendered with a period.

#### 4.3 · Sentences Migne leaves without a terminal mark, reproduced as such

**0780B** *Tamen etiam ista minora ita concludit* — no full stop before the VERS. 5 line that
completes it. Carried through unpunctuated in English ("Yet even these lesser things he thus
concludes"), per Pattern 8's "never supply".

#### 4.4 · `VERS` printed without its period — TWICE in this work, so it is a class

**0774B** prints `VERS. 2--` (period after VERS, none after the numeral) and **0781B** prints
`VERS 7.--` (no period after VERS). ⚑ **Chunk 0009 carries a third, `VERS 28.--`**, so this is a
recurring feature of the work's transmission and not a one-off. The plate at p. 392 sets
`VERS. 2. —` correctly, so at least the first is our transcription. **Convention 1 says the
verse address passes through VERBATIM**, so all of them are reproduced exactly as our Latin
prints them, unnormalized. Flagged for the assembler: if the work is ever patched, these are
patch candidates alongside §0.

#### 4.5 · `usque ad` — five occurrences, NONE of them the abridgment formula

Brief addendum D warns that the formula has look-alikes. Decided per occurrence, from what
stands on either side:
- **0777D ×3** — *usque ad unum* is **Ps 13:1's own words**, an italic lemma, and the gloss
  expounds it at length across four sentences (*vel cum ipso uno … vel praeter unum*). This is
  the exact trap addendum D describes and it is the verse, not an abridgment.
- **0781B** *usque ad mortem me erudivit inferior pars* — the ordinary preposition, "even unto
  death", parallel to Ps 15:7's *usque ad noctem*.
- **0781D** *perducens usque ad finem gloriae conspectus tui* — ordinary preposition. ⚠ Its
  parse is genuinely ambiguous: either "even unto the end, [namely] the beholding of thy glory"
  (my rendering, taking *conspectus* as nominative in apposition) or "unto the end of the glory
  of thy countenance" (*conspectus* genitive). Neither is an abridgment; logged because the
  English commits to one.

#### 4.6 · Test 2a — negations resting on a quantifier or correlative, proved from structure

The trigger population (a negative with *solus*/*omnis*/*tantum*/*non solum … sed*/*non … sed*
nearby) fires **eight times** in this range. In every one the host is proved from the
correlative, not from what reads well:
1. **0775C** *quia non se praebet cognoscendum **malis, sed bonis*** — the *sed bonis* answers
   *malis*, so the negation is on **malis**: "he offers himself to be known **not to the evil**,
   but to the good", **not** "he does not offer himself".
2. **0777B** *quod **non illi sed nobis** est utile* — host is *illi*: "useful **not to him**,
   but to us".
3. **0777C** *quia **non tantum** labiis dixerunt, **sed** in corde* — host is *tantum*: "**not
   only** with the lips, but in the heart".
4. **0779A** *in Deo **solo** spem ponerent, **non** in rebus transeuntibus* — host is the
   phrase *in rebus transeuntibus*, answering *in Deo solo*.
5. **0780C** *Non enim **Deo, sed nobis** praestamus* — host is *Deo*: "it is **not to God**,
   but to ourselves, that we render service".
6. **0781A/B** ***Non** enim restitues **mihi** quod non amisi, **sed** restitues **his**…* —
   the pivot is *mihi ↔ his*, so the negation governs **mihi**: rendered "thou wilt *restore*
   **not to me** what I have not lost, but thou wilt *restore* to those who have lost it".
   Rendering it as "thou wilt **not restore** to me" also construes and reads more smoothly —
   which is exactly why 2a says to take the structure, not the smoothness.
7. **0782A/B** ***Non** autem nox **tantum**, quia perturbare assolet, **sed etiam** ignis* —
   host is *tantum* on *nox*: "is to be called **not night only**… but also fire". Putting the
   negative on *vocanda est* would deny that tribulation is night at all, which the previous
   sentence has just asserted.
8. **0783C** ***Non solum** autem ista poena eos consecuta est visibilis, **sed etiam**…* —
   host is *solum*: "**not only** did this visible punishment follow them, but also…".
9. **0784A** ***non solum** de tam excellenti dono gratulatur, **sed insuper**…* — host is
   *solum*.

⚑ Also checked and found to have **no** quantifier in scope, so the verb is the host:
0780C *bono servi **non eget*** — *solus* stands in the previous clause (*solus ille veraciter
Dominus sit*) and does **not** govern the negation; "he alone is truly Lord who has no need"
is right, and "he is not alone in needing" would be the 8990 @0614B error.

#### 4.7 · Italic spans — three places where English had to draw a roman word inside a span

Every italic span in the Latin is an italic span in the English, in the same order, and the
counts are 1:1 band by band. Three spans could not be reproduced without absorbing a possessive
that Migne sets in roman, because English cannot separate the possessive from its noun:
- **0779D** *locutus est in corde* suo → *hath spoken in his heart* (Migne's *suo* is roman).
- **0783C** *in vita* ipsorum → *in their life* (Migne's *ipsorum* is roman).
- **0780D** *miras fecit* Pater *voluntates meas* — kept as **two** spans with "the Father"
  roman between them, matching the plate exactly; noted only because the temptation was to
  merge them.
Conversely, four Latin single spans were nearly split into two by English word order and were
kept whole: *quid fecit* (0774C), *Multiplicantur* + *filii hominum* (0776C, kept as **two** as
Migne prints), *Perficiatur* (0782B), *statuerunt declinare* (0783A), *me adimplebis.
Delectatio* (0781D — one span crossing a full stop, reproduced crossing the full stop).

#### 4.8 · Real words that read oddly — rendered as printed, no `[cj:]`, per addendum A

1. **0775A *crebra apertio atque **operatio**;*** — the figure is God's **eyelids**, which need
   opening and *shutting*; *opertio* ("covering") would complete it and *operatio* ("working")
   does not. But *operatio* is a perfectly good Latin word that **renders in place**, so
   Pattern 12 has nothing to wrap and Pattern 7 governs: rendered "**this frequent opening and
   working in the holy books**". `[cj:]` declined — the English is odd, not false; it does not
   assert anything the author is arguing against, which is 18a's bar, and 18a's census is
   closed. The conjecture is recorded here and nowhere else, by design.
2. **0779A *et servire creaturae **quam** Creatori*** — a *quam* with no comparative anywhere to
   complete it (cf. Rom 1:25, *servierunt creaturae **potius** quam Creatori*). ⚠ **This is the
   11535 @1231B shape** — a correlative whose answering member is printed and whose own member
   is not — and that shape is admitted to Pattern 18. **Declined anyway**, and the reason is the
   bar rather than the class: nothing false is asserted. My English writes "to serve the
   creature **rather than** the Creator", which supplies in English the comparative force
   *potius* would carry, and every reader takes exactly the sense Migne intends. 11535's *quam*
   earned its marker because the sentence would not otherwise resolve; this one resolves on
   sight.
3. **0777A *Tribulantes sunt **diaboli** et angeli ejus*** — *diaboli* is nominative plural
   ("devils") while *ejus* is singular and wants a singular *diabolus*. Rendered "the **devils**
   and his angels", following the printed form. No marker: a number slip with a singular
   possessive is 18a's declined class (person/number anomalies that merely fail to construe),
   and Job's tempters are plural in the gloss's own argument either way.
4. **0782D** *sic per Christi humanitatem divinitas judicii, discernens inter justos et
   peccatores.* — **a sentence with no finite verb at all.** Migne's ellipsis; rendered
   elliptically ("so through the humanity of Christ the divinity of judgment, discerning
   between the just and sinners"), nothing supplied.
5. **0782A** *Ex illuminatione notitiae tuae verum judicem.* — likewise verbless unless
   *judicem* is read as the 1st-sg. present subjunctive of *judico*. ⚠ **Two readings.** I took
   the subjunctive — "**may I judge what is true**" — because the paragraph is a first-person
   prayer throughout and a bare accusative "a true judge" has nothing to depend on. The rival
   ("[let there come forth] a true judge", supplying the lemma's *prodeat*) is defensible and is
   why this is logged rather than settled in the text.
6. **0782A** *adjuncta Ecclesia, quae corpus, ejus est.* — Migne's comma falls between *corpus*
   and *ejus*, inside the predicate. English cannot carry a comma there; rendered "which is his
   body". Recorded because it is a deleted mark, and Pattern 8 forbids deleting marks silently
   even where English has no slot for one.

#### 4.9 · Rendering decisions fixed for the range (drift control)

One voice within the work, per the merge rule. Terms fixed at first occurrence and held:
*conventicula* = **assemblies** · *claritas* = **brightness** (never "glory", which is reserved
for *gloria*) · *framea* = **sword** · *insipiens* = **the fool** · *malignus* = **the malignant
one** · *saeculum* = **the world** (and *saecula* = the ages) · *conversatio* = **conversation**
· *inopes* = **the needy** and *pauperes* = **the poor**, never interchanged, because the gloss
at 0776A distinguishes them (*inopia et paupertate*) · *tabernaculum* = **tabernacle** and *mons*
= **mountain**, held apart because Psalm 14's whole gloss turns on the contrast. ⚠ Chunks
0000–0009 and 0014–0017 are with other agents; these are offered to the merge step, not imposed.

Pattern 17: every second person in this range was checked for number. The plural *vos* of
Mt 11:28 (0778C), Jo 8:44 (0783B) and the *confudistis / contempsistis / vidistis* of 0779A take
**you**; the singular *tu … es … eges* of Ps 15:2 (0780C), the *ieris / eris* of the robber
parable (0779D) and every address to God take **thou**. No archaism is used as reverence.

---

### §5 · WHAT THIS BATCH DID NOT SETTLE

- **The tei-patch for §0 is not written and the work is not re-chunked.** Nine sites across four
  pages; the remaining fourteen chunks of this work have not been collated against the plate at
  all, and on this rate they will carry more. **A full-work plate collation is cheap here** —
  the PDF is on disk, the page map is confirmed, and cols 0751–0794 are 22 pages.
- ~~**§1.1 (*mentem*/*montem*) ships reading from our Latin twin, not from Migne**, and will keep
  doing so until that patch lands. It is the only place in these four chunks where the English
  is knowingly faithful to the transcription rather than to the plate.~~ ✅ **CLOSED 2026-08-28:
  the patch landed, the twin prints *mentem*, and the English now reads "one *mind* do I hold".
  Nothing in these four chunks is now knowingly faithful to the transcription over the plate.**
- **§3.1, §3.3, §3.6, §4.8.5 and §4.5's third item each name a rival reading that also
  construes.** None is marked; all are argued here so a blind reader arrives at them already
  knowing what was weighed.

---

### PLATE COLLATION — English brought to the corrected plate

**2026-08-28.** All 22 pages read at Migne's plate; 61 TEI patches applied. **No marker was
withdrawn in chunks 0010–0013** — but the one open compromise in this file is now closed.

- **0774B · *mentem* — §1.1 RESOLVED.** The patch this file asked for landed. The Latin twin now
  prints *Unum enim **mentem** teneo*, and the English reads **"For one *mind* do I hold, in
  which *I put my trust*"** where it read "one *mountain*". See the resolution box at the head of
  §1.1 for why **no marker was placed** — neither the `[sic: *mentem*]` §1.1 proposed (Pattern 12
  excludes a real word that is merely wrong, which is exactly the ground on which four other
  markers in this work were just withdrawn) nor a `[cj:]` (it would propose *montem*,
  "mountain", beside an English word that now says "mind"). **Migne's gender mismatch — *Unum …
  mentem*, and *in quo* two words later — is recorded here and rendered as printed.**
- **0778D · Jo 11:48 — `[var:]` DECLINED, and the existing one stands.** The collation restored
  Migne's ***dimitimus*** (single *t*) where CC printed *dimittimus*. That is not a divergent
  reading — it is a dropped sort in a word that is not otherwise a Latin form — so it takes no
  `[var:]` and, per the standing out-of-scope ruling, no `[sic:]` either. ⚑ The **real**
  divergence in this same lemma (*et tollent **nobis et gentem et locum*** for Clem. *et tollent
  nostrum locum, et gentem*) was already caught and already carries its `[var:]` in `0011.md`;
  the plate confirms it.

---

### PLATE COLLATION · REGISTER OF RESTORED TYPE, cols 0774B–0784A

Wilson's ruling of 2026-08-28 governs (stated in full at the head of the matching section in
`cruces-0000.md`): **mark only where the reading is in doubt; record the rest here and disclose
the count in the work-level page note.**

**MARKED in this range — one.**

- **0774B · *apud ipso* for *apud ipsos* — `[cj: *apud ipso*; read *apud ipsos*, "with them"]`.**
  Migne prints *haereticos, qui nos ab uberibus matris Ecclesiae avertere moliuntur, affirmantes
  quod **apud ipso** sit Christus*. *apud* governs the accusative, so the ablative does not
  construe; and the defect is not confined to case — *ipso* is singular where the whole sentence
  is about the heretics in the plural, which our English ("that Christ is with **them**") had
  silently supplied. A dropped *s* that leaves a real pronoun in a real position: the Latin page
  gives the reader nothing to stop on. Marker placed after the rendering.

**Already settled, and not re-opened:** 0774B ***mentem*** carries **no** marker — the reasoning
is at §1.1 and in the section above.

**CRUCES ONLY — recorded here, unmarked in the text.**

| Col | Migne prints | Intended | Why the reading is not in doubt |
|---|---|---|---|
| 0774C | *dextruxerunt* (lemma, Ps 10:4) | *destruxerunt* | *x* for *s*; a non-word. |
| 0774C | *dextruxerunt* (the re-quotation, same paragraph) | *destruxerunt* | The same defective sort firing twice — and Migne sets ***destruxerunt*** correctly a third time in the same paragraph (*vel legem Dei destruxerunt*), which is what proves the first two his own slip. That third occurrence is deliberately not patched. |
| 0780D | *acceleverunt* | *acceleraverunt* | Dropped *ra*; a non-word. |
| 0783D | *in jnstitia tua* | *in justitia tua* | Turned sort, *u* set as *n*. Wilson's own example of the class that stays unmarked. |

**Orthography, not defective type:** 0778D ***dimitimus*** (single *t*) for *dimittimus*, Jo 11:48
— argued in the section above, where the `[var:]` was declined.

---

### THE BLIND POLARITY READ

Fenced reader on chunks **0010–0013** (Pss X–XVI, cols 0774B–0784A), Latin against English in
full, with a mechanical negation-token count per chunk as backstop (0010 15/16, 0011 45/44,
0012 39/38, 0013 21/22; the 0013 shortfall is `nisi` collocations, checked by hand). No crux
file and no collation report was open. Adjudicated 2026-08-28 under Wilson's marker ruling of
the same session (stated in full in `cruces-0000.md`). Whole-work figures are in that file.

**Result for this range: 5 confirmed sites — three carried a defect in our English, three sit
on Migne's plate; 0779D is both, which is why the two figures overlap. Three new `[cj:]`
markers.** The reader
found **no dropped negation anywhere in the range and no word translated as its opposite**.

#### Marked — Migne's own defects, our English literal and unchanged

1. **0779D · `[cj: *in corde*; read *sed non in corde*, "but not in the heart"]`.** Migne:
   *Verum ille **locutus est in corde** suo, aliud enim putabat, et nesciens verum dixit.* The
   whole simile exists to show a man who speaks truth **with the lips and not in the heart** —
   that is the lemma under exposition (*qui loquitur veritatem in corde suo*), it is stated
   three lines up (*in labiis habent veritatem, in corde non habent*), and the next sentence
   draws the moral (*parum est verum loqui, **nisi** etiam in corde ita sit*). The line has lost
   its *sed non*.
   ⚠ **Our English changed here too, and it is not a repair.** It had taken *Verum* as the
   adversative connective ("But that man hath spoken in his heart"), which leaves the clause
   with no object and reads as smooth prose — 7a mechanism 3, connective smoothing: the
   contradiction survives but loses its visible edge. *Verum* is now taken as the object it most
   likely is, matching *nesciens **verum** dixit* four words later: "**Truth** that man *hath
   spoken in his heart*". The clash with *aliud enim putabat* is now on the surface, where the
   marker can name what fell out. A dropped word is glossable under Pattern 18 (7561 @0648):
   the gloss opens on words Migne **did** print, so the verbatim-in-the-Latin-twin guard holds.
2. **0781A · `[cj: *amici*; read *inimici*, "enemies"]`.** *nec a me jam et peccatores, et
   **amici**, et homines, sed justi et fratres mei, et filii Dei vocabuntur.* A three-term
   before/after list — *peccatores→justi*, X*→fratres mei*, *homines→filii Dei* — whose middle
   term sits on the wrong side of the ledger: as printed they will no longer be called
   *friends*, but **will** be called brethren. A single lost *in-*, in a gloss about their being
   made better. Marked because the printed word is real, in a real position, and **a reader
   would take it for a variant rather than a defect**.
3. **0775A · `[cj: *operatio*; read *opertio*, "covering"]`.** *ista in sanctis libris crebra
   **apertio atque operatio** tanquam palpebrae sunt Dei*, in a sentence built out of *clausis
   oculis* and *apertis oculis*. Eyelids are named precisely because they do two opposite
   things; "opening and working" is not one of them.
   ⛔ **This REVERSES the decline at §4.8.1 above, and deliberately.** That decline was argued
   on 18a's bar — *the English is odd, not false* — and 18a's census was closed. **Wilson's
   ruling of 2026-08-28 states a different test**: mark where a reader **could not recover the
   intended word with confidence**, or where the defect could pass for a real variant.
   *opertio* is a rare word; nothing on the page lets a reader reach it, and *operatio* reads as
   a genuine reading. Under the new test it is marked. §4.8.1 stands as the record of the
   earlier reasoning; the text now follows this paragraph.

#### Adjudicated and DECLINED

- **0774B *mentem*.** Re-raised by the reader as a high-confidence site. **Not open** — it is
  settled at §1.1 above and deliberately carries no marker: *mentem* is a real word (so
  Pattern 12 has nothing to wrap), and a `[cj: read *montem*, "mountain"]` would sit beside an
  English word that already says "mind". The incoherence lives in §1.1, which is its home.
- **0777A *Tribulantes sunt **diaboli** et angeli ejus*.** Already adjudicated at §4.8.3 and
  unchanged: a number slip beside a singular possessive, 18a's declined class, and the intended
  *diabolus* is not in doubt.
- **0780A — three unanchored "he/his"** in *Et ut nihil sit in **conspectu ejus**, certissime
  noverit malignum non esse…* (reader's confidence: low). **Declined.** *in conspectu ejus* is
  a verbatim re-quotation of the lemma (Ps 14:4, *ad nihilum deductus est in conspectu ejus
  malignus*), and the pronoun is unglossed in the psalm as it is in Migne; supplying an
  antecedent inside a lemma re-quotation would put our gloss on the page in the psalm's own
  italics. Our English disambiguates it correctly ten lines later ("in whose sight the malignant
  one is brought to nothing"), which is where the disambiguation belongs.

#### Repaired on our side

4. **0777B — the *cantabo* / *psallam* distinction was half-collapsed.** The gloss announces the
   distinction itself (*Si autem aliqua hic **differentia** consideranda est, cantabo corde,
   psallam operibus*), and our lemma gave *psallam* the very English word the gloss reserves for
   *cantabo*, so the reader met "*I will sing* … that is, I use my body in the most ordered
   way". Lemma and its `[var:]` now read "**I will play** to the name of the Most High", the
   same English the gloss already gives *psallam*. Not the fragmentary-lemma convention: this is
   a whole clause, not a stump.
5. **0777B — the relative bound to the wrong antecedent.** *In salutari tuo, hoc est in Christo
   Jesu, exsultabit cor meum, **qui** tribuit mihi bona spiritalia*: *qui* is masculine and can
   only be Christ, but the English put it against "my heart", where an English reader binds it.
   Re-ordered to "*In thy salvation,* that is, in Christ Jesus, who *hath bestowed good things
   upon me* that are spiritual … *shall my heart rejoice.*" Three italic spans before, three
   after. 7a mechanism 5.

#### Positive results worth recording

- ⭐ **The 7a″ profile is ABSENT from this range too.** All fifteen `[var:]` notes in the four
  chunks (Ps 10:3, 12:2, 12:6, Rom 1:28, Act 10:13, Mt 11:29-30, Jo 11:48, Ps 13:6, Rom 11:25,
  Rom 11:26, Ps 15:3, Ps 16:4, 16:5, 16:13, 16:15) were checked against the printed Latin: each
  records a real divergence and none conceals a conformation. **No lemma in the range was found
  quietly conformed to the familiar English Bible** — which, in the genre where 7a″ is the
  predicted dominant failure, is the second independent negative result of the read.
- **Ps XIV's *tabernaculum*/*mons* and *quis habitabit*/*quis requiescet* contrasts are fully
  preserved**, as is Ps XV's *humanitas meae divinitatis* / *divinitas humanitatis* chiasmus,
  and Ps XV:5's *congregabo* against v.4's *Non congregabo* — an opposition the Latin builds
  deliberately, not a dropped negative.

# RANGE FILE — chunks 0014–0017 · cols 0784B–0794D

*Preserved unedited from `cruces-0014.md`; headings demoted one level. Where it
conflicts with the head above, the head governs.*

## *Glossa ordinaria*, **Expositio in XX primos Psalmos** (PL 114) — cruces, chunks 0014–0017

Cols **0784B–0794D**, Psalms XVII–XX (Vulgate numbering), 4,249 Latin words → 6,315 English
(ratio 1.48). This range is the **end of the work**. `verify-english.mjs` clean for these four
chunks. Frontmatter copied verbatim from each Latin twin.

**Apparatus placed in this range: 2 `[sic:]` · 9 `[var:]` · 3 `[cj:]` (the third @0790D, from the
blind polarity read — see its section at the foot of this file) · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[n:]`** — ⚠ **revised 2026-08-28**, was 5 `[sic:]` · 9 `[var:]` · 2 `[cj:]`: the
plate collation withdrew three `[sic:]` and one `[cj:]` and placed one new `[cj:]` @0794A. See
**PLATE COLLATION — markers withdrawn** at the foot of this file. (the work carries `noteCount: 0` throughout — no note was written, and
none was expected). Zero guillemets in either language; zero `( sic )` of Migne's own in this
range (checked). Marker/anchor/italic/paragraph parity verified 1:1 against each Latin twin,
and `?` `;` `:` compared **band by band** across the 43 column anchors, zero mismatched bands.

---

### §0 · HOW THE WORK ENDS — not a defect, do not mark it

Chunk 0017 ends at **0794D** with the last words of the gloss on Ps 20:14:
*Nos autem corde et opere celebrabimus, et nota faciemus mirabilia tua.* — "But we with heart and
with work will celebrate, and will make known thy wondrous works."

Two things a merge reader should know and **neither is a hole**:

1. **The work simply stops at the twentieth psalm.** That is Pez's deliberate choice to print
   twenty psalms as a specimen. No closing formula, no subscription, no `FINIS`. Nothing has been
   supplied and nothing marked.
2. **The last gloss also stops short of its own verse.** Migne's lemma is *Exaltare, Domine, in
   virtute tua,* etc.; the Clementine's Ps 20:14 continues *cantabimus et psallemus virtutes tuas*,
   which Migne's `etc.` covers and the gloss then paraphrases in its own words (*celebrabimus … nota
   faciemus*). This is the ordinary lemma-plus-`etc.` shape of the whole book, not a truncation.

---

### §1 · THE VULGATE COLLATION — the deliverable

Method, stated so a later reader can tell a checked lemma from an unchecked one: **every one of the
246 italic spans on the named-lemma list for these columns was searched in
`sources/vulgate/clementine-flat.txt`**, and the four psalms were pulled out whole
(`grep -P "^Ps (17|18|19|20):"`) so that each lemma could be read against **its own verse** rather
than against a match somewhere else in the canon. Non-psalm quotations were searched individually.
Citations below are from `sources/vulgate/clementine/`.

#### 1.1 The firing rule I used, stated before the list

The 48 spans the pre-scan marked "⚠ NOT in Clementine verbatim" are overwhelmingly innocent: a
fragment cut mid-phrase, a gloss re-inflecting its own lemma (*commoti sunt*, *humilias*,
*permanet*, *emundabimur*), a gloss supplying a connective (*sed*, *cujus*), or a re-ordering
inside the gloss's own sentence. Those are logged in §1.3 and take no marker.

Where a real divergence stands, I fired `[var: …]` on this rule and no other:

- **A whole-word or multi-word substitution that changes what the sentence asserts → marker.**
- **A one-letter tense/mood shift in a re-quotation → crux only, no marker.** `sources/vulgate/README.md`
  warns that this copy is not to be trusted to single-letter precision, and brief §4 records that the
  digitization alters spelling in both directions; a public claim about the Clementine should not rest
  on one letter of our own file. The one exception is @0792D *Exaudiat*, and §1.2 gives the reason.
- **A synonym substitution that leaves the assertion intact → crux only.** (*aculeus* for *stimulus*,
  *omnes* for *universos*, *viventium* for *vivorum*, *super vos* for *in vos*.)

#### 1.2 The nine `[var:]` markers — what was claimed and why

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| **0785B** | *Plenitudo enim legis est **charitas*** | Rom 13:10 *Plenitudo **ergo** legis est **dilectio*** | The gloss's whole point is *charitas* — *nemo ad Dominum veniret nisi per charitatem* stands in the same sentence. Migne's proof-text uses the word the argument uses; the Vulgate's does not. This is 7a″'s class exactly. |
| **0786A** | *Nisi poenitentiam egeritis, omnes **simul moriemini*** | Luc 13:5 *si poenitentiam non egeritis, omnes **similiter peribitis*** (13:3 *habueritis*) | Different assertion: "all die together" vs "all likewise perish". Also conflates 13:3/13:5 in its protasis. |
| **0786B** | *et secundum puritatem ***factorum meorum**,* | Ps 17:21 *secundum puritatem ***manuum mearum**,* | Different noun, and the gloss builds on it: *qui tribuit mihi, **ut bene facerem***. The Vulgate's "hands" would leave that gloss unanchored. Note the lemma at VERS. 24, 25 truncates before this phrase, so this is the only occurrence. |
| **0788A** | *Si dimiserimus eum vivum, saeculum post illum abit.* | Jo 11:48 *si dimittimus eum sic, omnes credent in eum*; Jo 12:19 *ecce mundus totus post eum abiit* | A conflation of two verses in an Old-Latin shape (*saeculum* for *mundus*). Marker names both witnesses. |
| **0792D** | *Exaudi**a**t illum de coelo sancto suo,* | Ps 19:7 *Exaudi**e**t illum de caelo sancto suo* | One letter — **and I fired anyway.** Reason: the psalm's own headnote frames the whole exposition as *figura optandi*, "the figure of wishing," and the optative mood is printed **twice** in the same paragraph (lemma and the re-quotation *Exaudiat illum non de terra tantum*). Two agreeing occurrences plus a governing headnote is not a stray final letter. |
| **0793A** | *In nomine Domini Dei nostri **exsultabimus**.* | Ps 19:8 *in nomine Domini Dei nostri **invocabimus*** | The closing re-quotation of the verse just glossed swaps the verb. Different assertion (exult / call upon), whole word. |
| **0793C** | *pacem meam,* inquit, *relinquo vobis,* | Jo 14:27 *Pacem relinquo vobis, pacem meam do vobis* | The two clauses of the verse fused into one, so that "my peace" is what is **left** rather than what is **given**. |
| **0793D** | *et in misericordia Altissimi non **conturbabitur**,* | Ps 20:8 *et in misericordia Altissimi non **commovebitur*** | Whole word. Marginal in sense; fired because it is clean, checkable, and belongs in a divergence list. Named here as the least forceful of the nine. |
| **0794C** | *Expedit unum **pro omnibus** mori.* | Jo 18:14 *expedit unum **hominem** mori **pro populo*** | Caiaphas's saying universalized ("for all" for "for the people") and *hominem* dropped. |

⚠ Every marker's content was checked **not** to appear verbatim in the Latin twin (the `[ed:]`/`[var:]`
mirror test), programmatically, after the files were written.

#### 1.3 Read clean, or diverging but NOT marked — the negatives, which are the point

**Psalm XVII lemmata that collate exactly** (Clementine Ps 17, verse by verse): VERS. 3 *Deus meus
adjutor meus…* and *Protector meus, et cornu salutis meae, et susceptor meus.* · VERS. 4 *Laudans
invocabo Dominum* · VERS. 5 *Circumdederunt me dolores mortis* · VERS. 6 *Dolores inferni
circumdederunt me* · VERS. 7 *In tribulatione mea invocavi Dominum*, *De templo*, *introivit in aures
ejus* · VERS. 8 *Commota est et contremuit terra, fundamenta montium conturbata sunt* · VERS. 9
*Ascendit fumus in ira ejus* · VERS. 10 *Inclinavit coelos et descendit* · VERS. 11 *Et ascendit super
cherubim et volavit* · VERS. 12 *Et posuit tenebras latibulum suum* · VERS. 13 *Prae fulgore in
conspectu ejus nubes* · VERS. 14 *Et intonuit de coelo Dominus* · VERS. 15 *Et misit sagittas suas, et
dissipavit eos, fulgura* · VERS. 16 *Et apparuerunt fontes aquarum*, *Ab increpatione tua, Domine, ab
inspiratione spiritus irae tuae* · VERS. 17 *Misit de summo et accepit me* · VERS. 18 *Eripuit me de
inimicis meis fortissimis* · VERS. 19 *Praevenerunt me in die afflictionis meae*, *factus est Dominus
protector meus* · VERS. 20 *Et eduxit me in latitudinem, salvum me fecit, quoniam voluit me* · VERS.
21 *Et retribuet mihi Dominus secundum justitiam meam* · VERS. 22 *Quia custodivi vias Domini, nec
impie gessi a Deo meo* · VERS. 23 both spans · VERS. 24, 25 *Et ero immaculatus cum eo…* · VERS. 26,
27 *Cum sancto sanctus eris … et cum perverso perverteris* · VERS. 29, 30, 31, 33, 34, 35, 36, 37, 38,
39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51 lemma-heads. **Psalm XVIII:** VERS. 2, 3, 4, 5–6 (the
*In sole* half), 8, 9, 10, 11, 12, 13, 14 *Si mei non fuerint dominati*, 15 all collate. **Psalm XIX:**
VERS. 2, 3, 4, 5, 6, 7 (*Impleat Dominus omnes petitiones tuas*), 8, 9, 10 all collate. **Psalm XX:**
VERS. 2, 3, 4, 5, 6, 7, 8 (head), 9, 10, 11, 12 (head), 13, 14 all collate.

**Divergent but deliberately unmarked, with the reason:**

- **0784A–B `*Implebor, cum evigilavero, similitudine tua.*`** (Ps 16:15; Clementine *satiabor cum
  apparuerit gloria tua*). **Not a divergence at all**: chunk 0013 introduces this very wording as
  *juxta editionem Hebraicam* and prints it there twice. Chunk 0014 is quoting back the Hebrew edition
  the work itself named. Rendered "I shall be filled, when I shall have awaked, with thy likeness."
- **0784B `*ubi est, mors, aculeus tuus?*`** — 1 Cor 15:55 reads *stimulus tuus*. Synonym ("sting"
  either way); the argument does not turn on it. Crux only.
- **0784B `*nec laetatur in perditione viventium*`** — Sap 1:13 *vivorum*. Synonym. The companion
  quotation *Impii autem manibus et verbis accersierunt illam* (Sap 1:16) is verbatim.
- **0785A `*accensi*`** — the verse (Ps 17:9) has *carbones **succensi** sunt ab eo*. The italic span
  is a single word inside the gloss's own clause (*rursus accensi et illuminati revixerunt*), with no
  *carbones* anywhere; it is the gloss re-forming the verse's participle, not a citation. Rendered
  "kindled". Crux only.
- **0786A `*Appropinquavit **super** vos regnum Dei*`** — Luc 10:9 *in vos*. Preposition only, sense
  unchanged. Crux only.
- **0786D `*retribuit mihi Dominus*`** against the lemma's own *retribuet* four lines above. **This one
  matters for the English**: I held the divergence and rendered the lemma "the Lord **will** reward me"
  and the re-quotation "the Lord **rewards** me". Conforming the second to the first is precisely the
  silent repair 7a″ item 3 exists to prevent. One letter, so no marker.
- **0786D `*sed in conspectu oculorum ejus*`** — Ps 17:25 has the phrase without *sed*; the connective
  is the gloss's, answering its own *non quod homines vident*. Not a scripture divergence.
- **0787A `*humilias*`** — Ps 17:28 *humiliabis*. The gloss re-inflects to the present in its own
  sentence. Crux only.
- **0787A `*Non est recta via Domini*`** — **checked and exact**: Ez 33:20. (It was worth checking:
  Ez 18:25/29 print *non est aequa via Domini*, and picking the wrong parallel would have manufactured
  a divergence.)
- **0787A `*illuminabit tenebras meas*`** (roman, not italic) — Ps 17:29 has the imperative *illumina*.
  Not set as a citation. Crux only.
- **0788A `*Et praecinxisti me virtute ad bellum, supplantasti…*`** — Ps 17:40 has *et supplantasti*.
  A dropped connective, sense intact.
- **0788A `*Clamaverunt, nec erat qui salvos faceret ad Dominum…*`** — the Clementine's semicolon
  (*qui salvos faceret ; ad Dominum*) is absent, which changes the parse of the lemma. Migne's own
  gloss then reads it the Clementine's way (*Nec ad quemlibet, sed ad Dominum clamaverunt*). Punctuation
  is Pattern 8 territory, not Pattern 14; carried as printed.
- **0789A `*facit misericordiam Christo suo*`** — Ps 17:51 *faciens misericordiam christo suo David*.
  The gloss needs a finite verb for its own *Deus magnificat … et facit*; *David* is outside the span.
  Gloss grammar, not a variant.
- **0789D `*Exsultavit ut gigas ad currendam viam **suam***`** — Ps 18:6 ends *ad currendam viam*. An
  added possessive; the gloss's next sentence drops it again (*non ad habitandum, sed ad currendam
  viam*). Sense unchanged.
- **0789D `*A summo **coeli** egressio ejus*`** — Ps 18:7 *a summo **caelo***. A change of case
  (genitive for ablative), not of orthography. Rendered on the printed genitive, "from the height of
  heaven". Declined because the gloss turns on *a summo* = *a Patre*, not on the case, and because a
  case ending is exactly the precision this copy is not warranted to. Worth a plate read if one is
  going that way anyway.
- **0790B `*testimonium fidele*`** — Ps 18:8 *testimonium **Domini** fidele*; the gloss replaces
  *Domini* with its own *Cujus*. Gloss syntax.
- **0791A `*multa retributio*`** — Ps 18:12 *retributio multa*. Word order inside the gloss's sentence.
- **0791B `*A superbis quoque libera servum tuum; si mei non fuerint dominati, tunc immaculatus ero:*`**
  — diverges wholesale from the Gallican, and **Migne says so in the sentence that introduces it**
  (*ex Hebraeo translata editio*). A `[var:]` here would be reporting as a divergence the very thing the
  text announces. Declined on that ground.
- **0791C `*si mei non fuerint domin**ata**, tunc immaculatus ero*`** — likewise introduced by Migne as
  *ut in quibusdam codicibus habetur*. He is citing a variant, not printing one. See §3.4 for how the
  gender difference was carried into English, which has no exponent for it.
- **0791C `*ipse est rex super **omnes** filios superbiae*`** — Job 41:25 *super **universos** filios
  superbiae*. Synonym.
- **0792B `*Pater, salavifica me ex hac hora*`** — Jo 12:27 *Pater, salvifica me ex hora hac*. Two
  separate things: the word order (*ex hac hora*) is a trivial inversion, logged only; *salavifica* is
  broken type and carries `[sic:]` (§2).
- **0792C `*Et confirmet omne consilium tuum*`** — Ps 19:5 *et omne consilium tuum confirmet*. Word
  order only.
- **0793B `*exsultavit vehementer*`** — Ps 20:2 *exsultabit*. One letter (past for future), in a
  re-quotation. Rendered as printed, "he hath exulted exceedingly", which is what the gloss's
  resurrection reading wants. Crux only, per the rule in §1.1.
- **0793C `*benedictionem dulcedinis*`** — accusative in the gloss's own clause (*hauserat*); the lemma
  above has the Clementine's *in benedictionibus dulcedinis*. Gloss syntax.
- **0793C `*Pater, clarifica Filium tuum*`** — Jo 17:1 *Pater, venit hora: clarifica Filium tuum*.
  An ellipsis of the opening, not a variant.
- **0794C `*Venite, occidamus eum, et habemus haereditatem ejus*`** — Mt 21:38 *habebimus*. Tense in a
  quoted saying; two letters. Crux only. (Note Mc 12:7 gives the same saying in a different form again,
  *et nostra erit haereditas*; Migne's is nearer Matthew.)
- **0786D `*criniculis peccatorum suorum unusquisque constringitur*`** — the allusion is Prov 5:22,
  which the Clementine gives as *funibus peccatorum suorum constringitur*. **Corpus frequency here is a
  negative, and I am recording it as one**: `criniculis` occurs once in the whole `src/latin/` corpus,
  `funiculis` ten times. Per addendum A that argument is worthless against a **real** word, and
  *criniculus* is a regularly formed diminutive of *crinis* used for a plaited cord; it is the Old-Latin
  reading Augustine's text carries here, not broken type. Rendered "cords". No marker (the phrase is
  woven into gloss prose, unitalicized and unattributed — an allusion, not a citation).

---

### §2 · CARRIED TYPE — five `[sic:]`, and what each one would have swallowed

All five are **non-words**, which is the class addendum A says is worth raising and has been right
every time. Each was rendered in plain English **as well as** marked, per test 1; the strip-the-markers
read was run mechanically over all four chunks afterwards and no clause was left without its verb,
object, negation or conjunction.

| col | printed | for | rendering, with the marker |
|---|---|---|---|
| ~~**0787A**~~ | ~~*poputum*~~ | *populum* | ⛔ **WITHDRAWN 2026-08-28 at the plate.** At 1200 dpi Migne prints ***populum***, with a full-height *l* matched against the *l* of *humilem* on the same line; *poputum* was Corpus Corporum's broken word, and the `[sic:]` was a public accusation against Migne for the digitization's error. Marker removed; the English reads `*For thou wilt save the humble people,*` and the reasoning about marker placement recorded here applied to a defect that is not on the page. Ps 17:28 still collates exactly. |
| ~~**0789D**~~ | ~~*cut*~~ | *ut* | ⛔ **WITHDRAWN 2026-08-28 at the plate.** Migne prints ***ut*** (and *Exultavit*, not *Exsultavit*): the gloss reads *Exultavit ut fortissimus*. *cut* was Corpus Corporum's. Marker removed; the English reads `He rejoiced as one most mighty`. The 7a⁗ analysis stands as method and is void as to this site. |
| **0792B** | *salavifica* | *salvifica* | `*Father, save me [sic: *salavifica*] out of this hour:*` — **question 1**: this is the clause's only verb; "save me" stands beside the marker. |
| ~~**0792B**~~ | ~~*cortuum*~~ | *cor tuum* | ⛔ **WITHDRAWN 2026-08-28 at the plate. There is no run-together.** Migne sets ***cor*** at the end of one line and ***tuum,*** at the head of the next, and **the column break falls between them**: the twin now reads `*secundum cor [0792C] tuum,*` with the anchor INSIDE the italic span. Corpus Corporum had welded the two halves of a line-broken phrase into one word and dropped the break. Marker removed and the English anchor moved to the matching position: `but *according to thy own [0792C] heart,*`. ⚠ **The general lesson is bigger than this row: a `[sic:]` for a Pattern 10 run-together should be checked against the line ending, because a transcription that loses line breaks manufactures exactly this defect.** |
| **0792C** | *magnifibabit* | *magnificabit* | `will not only not destroy us, but will even magnify [sic: *magnifibabit*] us` — the clause's only verb again. Both negatives of *non solum non perdet* are present and on their own hosts. |

**Rejected as `[sic:]` candidates, and why** (a blind reader will look at all three):

- **0790B *resisti*** — see §3.1. ⛔ **The whole question is moot as of 2026-08-28: Migne prints
  *resistit*, with a fully formed final *t*.** The `[cj:]` is withdrawn and the English carries the
  plain reading, "since God resisteth the proud, but giveth grace to the humble." The reasoning
  below (a real Latin form, so outside Pattern 12) was correct as reasoning and was answering a
  question the page does not pose.
- **0787B *manducaverint*** — a real word. Took `[cj:]` instead; see §3.2.
- **0786D *criniculis*** — a real word and, I believe, the author's own; see §1.3.

---

### §3 · THE HARD PLACES

#### 3.1 0790B · *quoniam Deus superbis **resisti**, humilibus autem dat gratiam* — `[cj:]`

Jas 4:6 / 1 Pet 5:5, woven unitalicized into the gloss. *resisti* is a **real form** (present passive
infinitive of *resisto*) — so Pattern 7 renders it and Pattern 12 has nothing to wrap. But with *Deus*
nominative and *superbis* dative there is **no construction at all**: the clause has no finite verb for
its subject, and the only reading that construes is *resistit*. Note that the same work prints
*resistis* correctly at **0792A** (*qui superbis resistis*, second person, addressing God), so the book
knows the tag.

**Two candidates were weighed and one lost, explicitly:**

1. **Pattern 9, "attested medieval spelling"** — loss of final *-t* is a real medieval orthographic
   habit, which would make *resisti* a spelling of *resistit* and licence "God resisteth the proud"
   with no marker at all. ⛔ **Rejected**: *resisti* is also a perfectly good classical form in its own
   right, so it cannot be dismissed as a spelling of something else; treating it as one is the silent
   repair Pattern 7 exists to forbid, and it leaves no trace.
2. **Pattern 18 `[cj:]`** — **taken.** The marker is additive: Migne's word keeps its English and the
   conjecture stands beside it, and the form's appearance in the Latin twin is what makes the claim
   checkable. Shipped as
   `since God to the proud is to be resisted [cj: *resisti*; read *resistit*, "God resisteth the proud"]`.

⚠ Declared as a borderline firing: 18a's bar is "the English asserts something false", and what the
literal rendering does here is closer to asserting *nothing*. It is filed under 18 rather than left in
the cruces because the un-glossed English ("God … is to be resisted") is actively misleading about who
resists whom, which is the founding *munde* case's shape. **Also a plate-read candidate**: a lost final
*-t* is exactly the brief §4 class, in both its directions.

#### 3.2 0787B · *nisi **manducaverint** viam fidei* — `[cj:]`

*Deus meus non venit in homines, nisi manducaverint viam fidei, qua veniat ad eos, quia impolluta est
via ejus.* Rendered "unless they have eaten the way of faith", which is what the printed word says and
is not what the sentence is about. The conjecture is ***mundaverint***, "have cleansed": the clause's
own *quia impolluta est via ejus* is a purity pivot, and the parallel at **0787C** (*sicut impolluta
est fides, qua venit ad me*) makes cleanness the whole figure on both sides of the coming.

**The rival, named and adjudicated**: *manducaverint* could be a eucharistic figure — "unless they have
eaten the way of faith" is not unthinkable in this register. It **loses** because nothing in the
paragraph or its neighbours mentions eating, food, bread or the table, while *impollutus* is printed
twice within four lines. Shipped additively:
`unless they have eaten [cj: *manducaverint*; read *mundaverint*, "have cleansed"] the way of faith`.

#### 3.3 0786D / 0787A / 0793A · Migne's *retribuit*, *humilias*, *exsultabimus* — the pressure to conform

Recorded here because it is the class 7a″ was written for and it is invisible in the finished English
if you do it right. In three places the gloss re-quotes its own lemma with the verb changed
(*retribuet* → *retribuit* @0786D, *humiliabis* → *humilias* @0787A, *invocabimus* → *exsultabimus*
@0793A). In each the English follows **the re-quotation as printed**, not the lemma above it. Only the
third took a marker; the first two are one letter.

#### 3.4 0791B–C · *dominati* / *dominata* — a gender difference English cannot carry

The gloss's whole VERS. 14 argument is that the verse reads two ways depending on the participle's
gender: with masculine *dominati* the subject is the proud alien spirits; with neuter *dominata* it is
*occulta mea et aliena*, the hidden and alien things. **English participles carry no gender** (Pattern
9), so a literal rendering makes the two readings identical and destroys the argument on the page.

Resolved by putting the difference on the **subject pronoun**, which English does have: *dominati* →
"*If **they** shall not have had dominion over me*"; *dominata* → "*if **those things** shall not have
had dominion over me*". Nothing is added that the Latin does not say — the gloss itself supplies the
neuter subject in the next clause (*si mei non fuerint dominata occulta mea et aliena*). Flagged so a
blind reader does not read the two Englishes as an inconsistency.

Also note *mei* is **genitive** in both readings (*dominari* + gen. = "have dominion over"), not the
nominative "my own" it looks like; the gloss's own paraphrase confirms it.

#### 3.5 Unexpressed subjects — the ones I supplied, and what decided each

The launch brief is right that this book shifts speaker constantly. The sites where I supplied a
pronoun the Latin does not print, with the evidence:

- **0784A** *eripiendum se novit* — "**it** [the body of Christ] knew that **it** was to be rescued".
  Subject is *corpus Christi*, printed in the same clause. Then *gratulabitur* (0784A) takes "**she**",
  because the subject has become *Ecclesia Christi*, printed two words earlier. The shift from "it" to
  "she" inside one paragraph is Migne's, not mine.
- **0784B** *Loquitur haec Christus et Ecclesia* — printed subject; no supply needed. The rest of
  Psalm XVII's first person is *totus Christus, caput et corpus*, which the work says outright, and
  says again in its closing paragraph at **0789B**. That closing sentence is the work's own instruction
  for reading every "I" in the psalm and I let it govern the whole of chunks 0014–0015.
- **0784B** *Qui mihi prius adjutorium … praestitisti* — second person singular, God. "Thou who first
  didst furnish me" (Pattern 17: *tu* → thou).
- **0784B** *qui me firmasti, qui refugi ad te* — **two relatives, two different subjects**, one
  second-person (*firmasti*) and one first-person (*refugi*). Rendered "who hast made me firm, I who
  have fled for refuge to thee". Easy to flatten into a single "who"; the verb endings forbid it.
- **0785A** *commoti sunt et contremuerunt* — the subject *peccatores* stands **outside** the italic
  span in Migne, so the English keeps it outside too ("sinners *were moved and trembled*").
- **0788C** *Populus … servivit mihi: neque oculis me vidit* — the subject is *Populus gentium*,
  singular, so "**it** hath served me: neither did **it** see me". Not "they". Named because the
  plural is the natural English reflex and would quietly turn a people into persons.
- **0790A** *et ipsam penetravit verbi calor* — *ipsam* is feminine accusative and its antecedent is
  *umbra mortis* four words back, not *mortalitatem*. Rendered "penetrated **that shadow** itself" and
  the noun named, because a bare "it" would have been ambiguous between the two feminine nouns in the
  sentence and a reader could not recover which.
- **0791D** *ut consentiendo suum faceret* — subject is *homo*, printed; object *suum* is the *alienum*
  of the previous clause. "so that by consenting he made it his own".
- **0794B** *inveniat* — the subject is *claritas*, printed, not the king; the verb is jussive in
  parallel with *Inveniatur*. Rendered "may the brightness … *find*".

**Where two readings both construe**, per instruction rather than choosing silently:

- **0789A** *nec terrenam ipsam salutem sed in excelso de illo sperem* (VERS. 47). The clause has no
  expressed object for *sperem*, and *nec terrenam ipsam salutem* has no verb of its own — it may hang
  on the preceding *sentio* ("nor do I judge that salvation itself to be earthly") or be an object of
  *sperem* ("nor do I hope for that salvation itself as earthly, but on high"). Rendered on the
  first, which keeps the *non … nec* pair on the same verb: "Not after an earthly custom do I judge of
  the God of my salvation; nor that salvation itself as earthly, but on high concerning him may I
  hope." **Neither reading is marked.** The English is deliberately as loose-jointed as the Latin.
- **0794C** *in te occidendum retorserunt* — "they turned back upon thee, to be slain". *occidendum*
  agrees with *te*, so it is "upon thee, who wast to be slain", but it can also be read as a gerundive
  of purpose governing the turning. Rendered on the first; declined a note in the text.

#### 3.6 Column anchors — three that had to be placed by hand

Anchors were checked one by one against **the word each stands beside in the Latin**, not merely for
presence and order (test 2b). Three fall inside constructions English reverses, and I record the
choice made:

- **0784C** Migne breaks at *Protector [0784C] meus* — the anchor sits between noun and possessive,
  and English puts the possessive first. Placed after the whole phrase: "My protector, [0784C] because
  I presumed not…". One word downstream, same clause.
- **0785B** *qui terrena [0785B] sapiunt* — same reversal. Placed after the relative clause: "who
  savour of things earthly, [0785B] knew not…".
- **0789B** *bonis operibus [0789B] meis* — placed as "by my good [0789B] works", which keeps the
  anchor one word from the end of the sentence exactly as Migne has it.

Placed **inside** the construction, deliberately, where English allows it (the 8995 precedent):
*in [0787B] te* → "in [0787B] thee" · *non eos [0785C] deserens* → "not [0785C] forsaking them" ·
*Si mei non fuerint [0791C] dominati* → "If they shall not have had [0791C] dominion over me" ·
*quo cecidit [0791D] diabolus* → "by which [0791D] the devil fell".

⚠ **No column-band arithmetic is reported** (runbook false positive 1). The bands in this range run
B–D, A–D and skip freely; nothing is broken mid-word or mid-construction across an anchor.

---

### §4 · REGISTER DECISIONS FIXED FOR THIS RANGE

These are one-work equivalences, chosen once and held. A merge across agents should reconcile them
with chunks 0000–0013.

- ***latitudo* = "breadth"** everywhere (VERS. 20–22 of Ps XVII), including the lemma "*into
  breadth*". "A broad place" reads better in the lemma and would break the gloss, which picks the word
  up three times to build *latitudo fidei* → *latitudo bonorum operum* → *longitudo perseverantiae* →
  *altitudo spei*, a dimensional figure that only works if one English word carries it.
- ***alienus* = "alien"** throughout Ps XVIII (*ab alienis*, *alienum*, *alieni maligni spiritus*).
  The English preposition varies with the syntax ("by alien things" / "from alien" desires) because
  English requires it; the lexeme does not vary.
- ***occultus* = "hidden"**, so *Ab occultis meis munda me* is "From my hidden things cleanse me", not
  "my secret ones" — the gloss depends on *occultum suum* being the same word as the lemma's.
- ***desiderabilis* = "desirable"** across Ps 18:11, so that *desiderabilia*, *desiderentur*,
  *desideret* and *desiderabiliora* stay visibly one family.
- ***dorsum* = "a back"** in both places it is glossed (Ps 17:41 *dorsum mihi eos fecisti esse*;
  Ps 20:13 *pones eos dorsum*), following the gloss's own literal reading rather than the idiomatic
  "make them turn their back".
- ***in saeculum saeculi* = "for ever and ever"**, uniform across Ps XVIII and Ps XX.
- **`VERS. n.--` passes through verbatim; heads are Englished** (`IN PSALMUM XVII.` → `ON PSALM XVII.`,
  Roman numeral kept). `(cont.)` on chunk 0015's repeated head is carried untranslated (runbook false
  positive 7).
- **Pattern 17**: God, Christ and the psalmist are addressed in the singular throughout and take
  *thou/thee/thy*; the only plural addressee in the range is *vobis* at 0793C (*relinquo vobis*),
  which takes "you".
- **Punctuation as printed.** Migne's period **inside** the lemma before `etc.` at 0791D
  (*eloquia oris mei.* etc.) is reproduced, though every other lemma in the range ends in a comma.
  Not a defect and not normalized.

---

### §5 · WHAT I DID NOT DO

- **No `[n:]` anywhere.** The work's `noteCount` is 0 in all eighteen chunks and these four carry no
  attribution siglum at all — unusual for the Glossa, and worth a merge note: this exposition is a
  continuous abridgment of Augustine's *Enarrationes* with no inline sigla, unlike Ruth.
- **No `[ed:]`.** Nothing in this range looks like lost text: the paragraph structure matches the
  Latin twin 1:1 in all four chunks (37/17/16/27 paragraphs) and no sentence stops mid-construction.
- **No `[d:]`.** The repeated *multum* at 0790C is Migne's deliberate three-way construal (*sive
  multum … sive multum … sive multum*), not dittography.
- **No plate was read.** Three sites would repay one if a run is going to PL 114 anyway, in this order:
  **0790B** *resisti* (§3.1, a lost final *-t* is the brief §4 class), **0787B** *manducaverint*
  (§3.2), and **0789D** *coeli* for *caelo* (§1.3, a case ending that could equally be a
  digitization tidy-up). The five `[sic:]` non-words are not on that list: addendum A records that
  suspicion aimed at a non-word has been confirmed ten times out of ten.

---

### PLATE COLLATION — markers withdrawn

**2026-08-28.** All 22 pages read at Migne's plate; 61 TEI patches applied; the Latin twins now
say what Migne printed. Chunk boundaries did not move. **Four of this range's markers were
false public claims against Migne and are gone.** The rows and sections above are struck and
annotated in place, never deleted.

**Withdrawn.**

- **0787A `[sic: *poputum*]` — WITHDRAWN.** At 1200 dpi Migne prints ***populum***, the *l* at
  full height and matched against the *l* of *humilem* on the same line. *poputum* was Corpus
  Corporum's. English: `*For thou wilt save the humble people,*`.
- **0789D/0790A `[sic: *cut*]` — WITHDRAWN.** Migne prints ***Exultavit ut fortissimus***.
  English: `He rejoiced as one most mighty`.
- **0792B/0792C `[sic: *cortuum*]` — WITHDRAWN, and there was never a run-together.** Migne sets
  ***cor*** at the end of a line and ***tuum,*** at the head of the next, **with the column break
  between them**; the twin now reads `*secundum cor [0792C] tuum,*`, the anchor **inside** the
  italic span. The English anchor has been moved to the matching position:
  `but *according to thy own [0792C] heart,*`. ⚑ **Generalizable: a Pattern 10 run-together
  should always be checked against the line ending, because a transcription that loses line
  breaks manufactures exactly this defect.**
- **0790B `[cj: *resisti*; read *resistit*]` — WITHDRAWN; no conjecture is needed.** Migne prints
  ***resistit*** with a fully formed final *t*. English carries the plain reading: "since God
  resisteth the proud, but giveth grace to the humble." §3.1 above stands as method and is void
  as to this site.

⚠ **All four had the same shape:** the marker accused Migne of a defect that the digitization
had introduced. Counting 0770A's withdrawn `[var:]` in `cruces-0005`, **five of this work's
public claims were artefacts of Corpus Corporum.**

**Punctuation corrected at the plate — Pattern 8 in both directions.**

- **0789A (VERS. 48).** Migne prints *…**liberator meus de inimicis meis.** Judaeis,
  clamantibus. Crucifige, crucifige!* — a stop **inside** the italic span, a stop (not a colon)
  after *clamantibus*, and an exclamation at the end. The English had smoothed all three into
  one running sentence with a colon. It now reads: `*my deliverer from my enemies.* The Jews,
  crying out. Crucify him, crucify him!` The fragment is Migne's and is carried as a fragment.

**Sites where the corrected plate changed the sense.**

- **0789D · lemma *ut gigas **ac** currendam viam suam*** (CC: *ad*). The English keeps "**to**
  run his way", which is the evident sense and the reading the gloss itself repeats three lines
  later in Migne's own words (*non ad habitandum, sed **ad** currendam viam*). No marker: this is
  one more of the work's restored one-sort defects, which are out of scope for marking by the
  standing ruling. Recorded here so the reader of the twin is not left to wonder.
- **0785D · *Ut **n** profundo rerum humanarum audirentur coelestia*** — Migne's *in* has lost
  its *i*. The English already rendered the evident sense ("That in the depth of human affairs
  heavenly things might be heard") and is unchanged. Same class, no marker.

#### 0788A · *sive signa, quae **impressi** ad imitandum sequentibus* — ⛔ **NO MARKER, and this is a dissent**

The plate collation restored *impressi* (CC had tidied it to *impressa*) and flagged the site as
**the one place in this work where the plate genuinely does not construe**, recommending a
`[sic: *impressi*]` or a `[cj:]` proposing *impressa*. **I decline to fire either, because the
premise is a misparse and the marker would be the sixth false claim against Migne in this work.**

**The reading construes exactly as printed.** *impressi* is not a participle that has failed to
agree with *signa*; it is the **first-person perfect active** of *imprimo*, and *quae* is its
direct object:

> *et non sunt infirmata sive itinera **mea**, sive signa, quae **impressi** ad imitandum
> sequentibus* — "and they are not weakened, whether **my** journeys, or the marks **which I
> impressed** for those who follow to imitate."

The whole sentence is first-person and addressed to God (*Dilatasti gressus **meos***, *latam
fecisti charitatem **meam***), so a first-person verb is not merely possible here, it is the
expected voice.

⭐ **And there is an external witness on disk.** The same passage in the parallel psalm
commentary at `sources/pl/tei/7109.xml` (PL 21, *Commentarius in LXXV psalmos*, the paragraph
marked *(Ex Augustino)*) reads:

> *Et non sunt infirmata vestigia mea. Id est, signa, quae **impressi** ad imitandum te.*

Same clause, same finite verb, an independent book and an independent transcription. **Migne's
page is not defective here; only the parse was.** The English has been changed from the passive
"the marks **which are stamped** for those who follow to imitate" — which was rendering CC's
*impressa* — to the active **"the marks which I impressed for those who follow to imitate."**

⚠ If a later reader wants the marker anyway, the thing to overturn is the 7109 parallel, not
this note.

#### 0794A · *sed adhuc *gloria et magnum decorem* addes ei* — `[cj:]` FIRED

The collation restored ***gloria*** (CC had *gloriam*). **Here the plate really does not
construe**, and unlike 0788A there is no reading that rescues it: *addes ei* is transitive and
takes *magnum decorem* in the accusative, so a nominative *gloria* is stranded in a coordinated
pair with an accusative. It is a real Latin word wrongly inflected, which is Pattern 12's
explicit exclusion and Pattern 18's proper territory.

- **Marker: `[cj: *gloria*; read *gloriam*, "glory"]`**, placed immediately after the italic
  span and before the `[0794A]` anchor, mirroring the twin's own order.
- **The compromise, stated plainly:** English has no case endings, so "glory" renders the
  printed *gloria* and the conjectured *gloriam* identically — **the reader cannot see the
  defect in the English at all**, and the marker is the only thing that tells him it is there.
  That is exactly why it takes a marker where the one-sort defects above do not: those are
  invisible in Latin too (*n* for *in*, *ac* for *ad*), whereas this one is a real word that a
  Latin reader will stop on and an English reader would never suspect.
- ⚠ `[cj:]` inverts the `[var:]` content test: *gloria* must appear **verbatim** in the Latin
  twin, and it does. `verify-english.mjs` passes.

---

### PLATE COLLATION · REGISTER OF RESTORED TYPE, cols 0784B–0794D

Wilson's ruling of 2026-08-28 governs (stated in full at the head of the matching section in
`cruces-0000.md`): **mark only where the reading is in doubt; record the rest here and disclose
the count in the work-level page note.**

**MARKED in this range — one, and it was already argued above:** 0794A
`[cj: *gloria*; read *gloriam*, "glory"]`. **Nothing further is marked here.** In particular
0788A ***impressi*** stays unmarked — it construes, and the dissent is set out above.

**CRUCES ONLY — recorded here, unmarked in the text.**

| Col | Migne prints | Intended | Why the reading is not in doubt |
|---|---|---|---|
| 0785D | *Ut n profundo* | *Ut in profundo* | The *i* of *in* is simply absent. Recorded above as well. |
| 0786C | *poehas* | *poenas* | *h* for *n*. Wilson's own example of the class that stays unmarked. |
| 0786D | *constringit ur* | *constringitur* | A quad of space driven into the word; a split run whose halves are not both words. |
| 0787C | *immaeulatam* | *immaculatam* | Italic *e* for *c*; SECOND occurrence only — the lemma immediately above it is set correctly. |
| 0787D | *doeebit* | *docebit* | The same damaged italic *e*-for-*c* sort firing again in the same column, which is what shows it a sort in the case and not a reading. Wilson's own example. |
| 0789D | *evangelistarum, eum* | *evangelistarum, cum* | *e* for *c* again. It leaves a real word, but the clause is then left with a bare subjunctive (*praedicaretur*) and no conjunction at all, so *cum* is the only candidate — the reader is not in doubt, only the sort is. |
| 0789D | *ut gigas ac currendam viam suam* | *ad currendam* | *c* for *d*; and Migne's own gloss repeats *ad currendam viam* three lines later. Recorded above as well. |
| 0790C | *quemquem* | *quemquam* | *e* for *a*; a non-word, and *quemquam* is set correctly four lines above. |
| 0790D | *lapisque pertiosus* | *pretiosus* | Metathesis; *lapides pretiosi* is correct at 0793C. |
| 0791C | *opressit* | *oppressit* | Dropped *p*. |
| 0791D | *snperbia* | *superbia* | Turned sort, *u* set upside down as *n*. Wilson's own example. |

**Orthography and case, not defective type — no marker and no conjecture.**

- **0789D · *Exultavit*** for *Exsultavit* in the gloss (the lemma two words earlier keeps the
  *s*). An accepted spelling, not broken type. ⚑ This is the site whose neighbour produced the
  withdrawn `[sic: *cut*]`, above.
- **0792B · *Mittat tibi auxilium de sancto*** — Migne sets the lemma lower-case where the
  digitization had capitalized it. A compositor's case decision with no English exponent beyond
  capitalization, which the facing Latin column already shows.

**Punctuation** in this range is dealt with above (0789A, three marks).

---

### THE BLIND POLARITY READ

Fenced reader on chunks **0014–0017** (Pss XVII–XX, cols 0784B–0794D — the end of the work),
clause by clause against the Latin twin, with a mechanical negation-token count as backstop.
No crux file and no collation report was open. Adjudicated 2026-08-28 under Wilson's marker
ruling of the same session (stated in full in `cruces-0000.md`). Whole-work figures are in that
file.

**Result for this range: 2 sites — 1 ours, 1 Migne's. One new `[cj:]`.** The reader returned
**zero confirmed defects on our side** unaided; the one repair below came out of a low-confidence
candidate that survived adjudication.

#### Marked — Migne's own defect, our English literal and unchanged

- **0790D, VERS. 11 · `[cj: *relinquetur*; read *eliquetur*, "shall be pressed out"]`.**
  *…cui opus sit aliqua pressura, non opprimentis, sed **exprimentis** manus Dei, qua de
  temporali vita in aeternum **relinquetur***. The whole sentence is the wax-and-honeycomb
  image, built on a hand that does not crush but **presses out**; *relinquetur* ("shall be
  left") nearly reverses the movement its own neighbour describes, and *de … in …* hangs on it
  awkwardly. Our English is correctly literal and stays ("by which he shall be left … from a
  temporal life unto eternity"); the marker carries the conjecture. It sits beside the `[cj:]`
  this chunk already had at VERS. 6 (*gloria* → *gloriam*, 0794A).

#### Repaired on our side

- **0787C, VERS. 34 — the gloss overshot its own lemma's preposition.** Lemma *et **super**
  excelsa statuens me*, rendered "setting me **upon** high places"; the gloss re-quotes the same
  preposition — *et **super** coelestem habitationem figit intentionem meam, ut implear in omnem
  plenitudinem Dei* — and our English gave "fixes my purpose **above** the heavenly habitation",
  which makes the aim overshoot heaven and is not what the purpose clause supports. Now
  "**upon** the heavenly habitation". The translator's default "above" is right nine columns
  earlier at VERS. 11 (*Exaltatus est super plenitudinem scientiae*) and appears to have been
  carried across.

#### Adjudicated and DECLINED

- **0791A, VERS. 13 — *Quae ipsum **occultum** claudunt, cui suavitas est veritas*, rendered
  "that very hidden **man**", against the next gloss's *occultum suum* / *alienum* rendered
  "hidden **thing**" twice** (reader's confidence: low; the reader flagged the inconsistency
  across two adjacent glosses, not either rendering). **Declined — both renderings are right,
  and the inconsistency is Migne's (Augustine's), not ours.** At VERS. 13 the two dative
  relatives (*cui suavitas est veritas, cui desiderabiliora et dulciora sunt judicia Dei*)
  require a person, and they pick up the man of VERS. 11 (*dulciora **illi** sunt judicia Dei,
  quam sibi ipsi est*); "the hidden man" is the standing idiom (*absconditus cordis homo*,
  I Pet. III, 4). At VERS. 14 the same word is doing an entirely different job — *Non enim est
  tertia origo peccati praeter **occultum** suum … et **alienum*** — where it names one of the
  two origins of sin and can only be a thing. Levelling the two would make one of them false.

#### Positive results worth recording

- **Every counter-intuitive negation in the range is carried**, and these are precisely the
  seats where a smoothing repair would have been tempting: 0790C, VERS. 10, *non foras mittit
  consummata dilectio timorem hunc* — perfect love does **not** cast out this fear — carried
  against the familiar I Joan. IV, 18; 0789D, VERS. 4, *Per quas **non** auditae sunt voces
  evangelistarum*, the double negative of Ps XVIII, 4, not "fixed" into an affirmative; 0794B,
  Ps XX VERS. 12, three negatives in one clause, all three present.
- **0788C, VERS. 31 *nisi manducaverint viam fidei*** — the printed *manducaverint* is kept and
  the conjecture carried in a `[cj:]`, not substituted. That is the shape 7a exists to prevent,
  handled right.
- **0789B, VERS. 44 — Migne's conflation of Joan. XI, 48 and XII, 19** is rendered literally with
  the divergence in a `[var:]`; **0789C, VERS. 50 — the lemma *confitebor* against the gloss's
  *confitebuntur gentes*** is a real lemma/gloss mismatch and it is **Migne's**, carried as
  printed on both sides. Two more 7a″-shaped seats, neither conformed.
