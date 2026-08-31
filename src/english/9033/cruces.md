# Cruces — 9033 (Angelomus of Luxeuil, *Enarrationes in Cantica canticorum*, PL 115)

Merged from six agent stints (chunks 0–4, 5–9, 10–14, 15–18, 19–22, 23–26) per
translation-runbook.md step 4. Column + printed reading + note, in chunk order.

## ⭐ PLATE READ, 2026-08-31 — 84 of the 106 owed `[sic:]`/`[var:]` markers resolved

This work shipped with **106 `[sic:]`/`[var:]` markers standing on columns nobody had read at
Migne's plate**, which is exactly the exposure `CLAUDE.md` hard rule 8a exists to close: a
`[sic:]` accuses Migne's own type and a `[var:]` asserts Migne's text diverges from a witness,
and our Latin is Corpus Corporum's transcription, not the printed page. This session read the
plate for **84 of them** (cols 0563A–0628D).

**Result: 75 CONFIRMED, 9 WITHDRAWN, 22 still owed.**

### The shape of the result — and why it differs from 8996 / 8945

Every one of the **nine withdrawals is a `[sic:]`**, and **every one of the 75 `[var:]`
divergences read this pass is Migne's own text.** That is the opposite balance from the two
preceding works (8996: 10 of 14 withdrawn; 8945: 6 of 9 withdrawn) and it is not a
contradiction — those two sweeps were `[sic:]`-heavy, and the `[sic:]` class is precisely where
Corpus Corporum's faults live. Angelomus quotes Scripture loosely and from memory throughout;
his divergences from the Vulgate are a fact about the author, and the plate confirms them one
after another. **The lesson stands unchanged: read the plate. It just cuts the other way for
the `[var:]` half, which is itself the finding.**

### The nine withdrawn — Corpus Corporum's corruption, not Migne's type

All nine patched in `data/tei-patches/9033.json`, the Latin re-chunked, and the English
corrected to render the plain word with no marker (word count moved 32713 → 32712 exactly as
the three affected splits/fusions predict; chunk count and boundaries unchanged).

| col | our Latin | Migne prints | fault |
|---|---|---|---|
| 0577A | *sub viti s currebas* | *sub vitiis currebas* | word split (the same word stands whole two clauses earlier) |
| 0581B | *oculus haeai* | *oculus haedi* | d mis-set as a (the sentence above spells *haedis* out) |
| 0586D | *partriarchis* | *patriarchis* | doubled r |
| 0590A | *tertium Spitum sanctum* | *tertium Spiritum sanctum* | dropped *ri* |
| 0597C | *frigus infidelitatiis* | *frigus infi-/delitatis* | doubled i on a line-break rejoin |
| 0600C | *quae demo liuntur vineas* | *quae demoliuntur vineas* | word split — and CC set the SAME word correctly in the lemma eight lines above |
| 0602D | *prophatarum* | *prophetarum* | a for e |
| 0610D | *coufortat* | *confortat* | minim fault, n read as u |
| 0618D | *Et.haec* | *Et haec* | period set where the space belongs |

⚑ Two of these (0600C, 0577A) are **internally detectable in hindsight**: the same word stands
correctly a few lines away in our own file. That is a cheap pre-plate triage signal, not a
licence — the plate is still what settled them.

### Confirmed and now plate-licensed (75)

Every `[var:]` on cols 0563–0628 was read against the plate and prints as our Latin has it —
including the ones most likely to look like a digitization fault: 0565B *pedes ejus* standing
next to the plate's own *pedes meos* in the quotation immediately above; 0574A *Cogitationum
consilia* straddling the 0573D/0574A column break; 0619A's inverted cases *matri suae … electa
genitricis suae*; 0620B *Sunamitis* for the Vulgate's *Sulamitis*; 0627B's singular *super
monte aromatum* against the gloss's own plural two lines later. Also confirmed as Migne's own
printing, not ours: the two `[sic:]`-adjacent readings at 0595B (*exsultabuntur*) and 0616C
(*Electus ut cedrus*).

`data/plate-reads.json` records the read column-range by column-range, with the page and the
corner numbers verified before each.

### ⛔ 22 markers STILL OWED — cols 0551D–0562D — and why the scan cannot settle them

**The archive.org copy of PL 115 (`patrologiaecurs18goog`) is defective across exactly this
span.** Its leaves 279–286 are a **duplicate re-scan of cols 527–542**, which are already
present at pp. 269–276; the leaves that should carry **cols 547–562 are simply absent from the
file.** The page map is therefore not one formula but two:

    pages ≤ 286 : PDF page = (column + 31) / 2
    pages ≥ 287 : PDF page = (column + 11) / 2      ← calibrated at pp. 287 / 300 / 319
                                                       (corners 563/564, 589/590, 627/628)

⚑ **This is exactly the failure mode `CLAUDE.md` warns about, in a new dress.** A single
calibration at one page would have produced a *confidently wrong* map for two thirds of this
work: the very first page rendered (p. 281 under the naive `(col+11)/2`) came up as Angelomus
on *IV Kings* ch. XX, not the *Cantica* preface, and only reading the corner numbers across a
run of pages exposed the duplication. **Calibrate at three points spread across the range, not
one.**

A second witness was hunted for and not found this session: Gallica's SRU index does not
surface PL 115 (the Bibliothèque municipale de Lyon holds the complete PL on numelyo, but T.115
was not locatable through the Gallica records); HathiTrust returns 403; the three Google Books
ids in `data/volumes.json` return the placeholder image, not page content. **The next session
that wants these 22 should start from numelyo, not from archive.org.**

The 22 owed markers, unchanged and still unlicensed:

- **0551D** *appropinquabit* (Matth. III) · **0552B** *propter Dominum* (I Petr. II) · **0552B**
  Marc. II/XI, 24 · **0552D** `[sic: *angustale*]` · **0553C** Cant. IV, 14
- **0555D** *appropinquavit* · **0556C** Prov. V, 1 · **0557C** Exod. XV, 1 · **0557C** Deut.
  XXXII, 1 · **0557D** Psal. XVII, 2 · **0559A** `[sic: *in luta*]` · **0559C** Ezech. XVI, 5 ·
  **0559C** Ezech. XVI, 8–10 · **0560B** Ose. II, 19–20 · **0560B** Isa. LXI, 10 · **0560B**
  Zach. IX, 9 · **0560C** Ephes. V, 27 · **0560C** I Cor. XII, 27 · **0560D** Mal. I, 6 ·
  **0560D** Ose. II, 20 · **0561D** Phil. II, 8 · **0562D** Matth. V, 2

⚠ Note for whoever reads them: **0552D `[sic: *angustale*]` has an internal control.** Col
0553D prints *decus augustale* in the same preface, addressed to the same emperor, so
*angustale opus* at 0552D is a strong candidate for a Corpus Corporum corruption of
*augustale* — but the plate, and only the plate, can say so.

## Blind polarity read (runbook step 4a, 2026-07-31)

All 27 chunks read blind against the Latin twins, hunting for a sentence that
contradicts its immediate neighbor, before this file was consulted. 30 sites found;
22 were already logged below (the collation held up everywhere spot-checked); **8
were new.** Recorded: `node scripts/polarity-record.mjs 9033 --chunks 27 --sites 30
--ours 3`.

**Three were OUR errors and have been corrected in the running text** (not merely
logged — these are not Migne's defects, so Pattern 7's literal-rendering rule does
not protect them):
- **0591B** (chunk 0013) — *nisi stipata mali et fulcita diversis fuerit floribus*
  ("compassed with apples and stayed up with flowers") had its verbs crossed:
  "stayed up with apples and propped with diverse flowers." The correct pairing is
  confirmed three sentences later, where the lemma itself (*Fulcite me floribus,
  stipate me malis*) is rendered correctly as "Stay me up with flowers, compass me
  about with apples" — and repeated correctly again in the same chunk's exposition.
  Fixed to "compassed with apples and stayed up with diverse flowers," matching the
  pairing used everywhere else in the passage.
- **0569C–D** (chunk 0006) — *praevenire* used in two opposite senses eleven lines
  apart (the condemned "run before/outrun" at 0569C vs. the commended "anticipate"
  at 0569D), both originally rendered "run before," which made the second sentence
  commend exactly what the first condemns. The Latin sustains both senses; English
  "run before" does not. Fixed the second instance to "anticipate."
- **0580A** (chunk 0009) — *Deo autem gratias qui semper triumphat nos in omni
  loco* (2 Cor. 2:14) rendered "who always triumphs over us in every place," which
  turns a thanksgiving into a defeat and sits oddly against the following clause
  ("for we are the good odor of Christ"). Fixed to "who always maketh us to
  triumph," the Vulgate's own causative idiom.

**Five are Migne's own plate defects, faithfully carried per Pattern 7 — logged
here, NOT emended:**
- **0593A** — Migne prints *panes* ("loaves") where *Patres* ("Fathers") is
  required; the very next column (0593D) refers back to "where we said... the
  Fathers," so the English's own back-reference now contradicts its own earlier
  rendering. This is the identical error, one column over, to the already-logged
  0590A `panem`/`Patrem` case below — the pattern is now confirmed to recur.
- **0627B** — Migne prints *portis* ("gates") where the passage's own lemma is
  *hortis* ("gardens"); the exhortation lands on a noun the lemma does not contain.
- **0570C** — *quanto patens est cubiculum, tanto major est reverentia* ("the more
  open the bedchamber, the greater the reverence") inverts the surrounding
  argument, which is about the chamber's *hiddenness*. Conjecture: *latens* for
  *patens* (one letter). Printed reading rendered as printed.
- **0572B** — *Nigra quidem vero judicio* ("black indeed by **a true** judgment")
  where the passage's own frame (both immediately before and after) is "black by
  **their** judgment, comely by the truth." Conjecture: *vestro* for *vero* — which
  Migne's own plate prints five lines later (*judicio vestro*) for the same phrase.
- **0558C** — flagged, not emended, low confidence: *nec corde ad montem paradisi
  reascendit* is genuinely ambiguous between "had not, in heart, fallen" and "does
  not ascend again in heart"; the English's construal is almost certainly right
  (the alternative would contradict the gloss's own conclusion) but nothing marks
  the ambiguity in the Latin itself.

## Work-wide conventions (fixed at merge, 2026-07-31)

- **spikenard, not "nard".** The Cant. IV, 14 lemma (*nardus et crocus*) is quoted
  twice in the work — once in the dedicatory preface (chunk 0000) and once in the
  verse-by-verse commentary itself (chunk 0020) — and a third passage (chunk 0009)
  glosses the plant at length in prose. All three now read "spikenard" throughout,
  matching the KJV/Douay convention already used in most instances; the bare "nard"
  variants (chunk 0000's lemma quote, and five prose instances in chunk 0009) were
  the only drift and have been corrected. No other chunk uses either word.
- **A `[var: …]` marker in chunk 0006 (I Cor. VIII, 1) opened with the citation
  reference before the witness name** ("I Cor. VIII, 1; Vulg. …"), which
  `verify-english.mjs` correctly rejects — the pattern requires the marker to open
  by naming the witness. Fixed by dropping the leading citation (the note beside it
  already carries the reference).
- **cypri / Cypri / Cyprus (chunk 0010) — NOT drift, do not harmonize further.**
  Migne himself prints the Song 1:13 lemma lowercase at first occurrence and
  capitalized at its second (cols 0581B, 0582B), and the gloss that follows reads
  the capitalized form as the island (*Cyprus vero tristitia interpretatur*). The
  English follows Migne's own capitalization exactly — "cluster of cypress" /
  "cluster of Cyprus" — preserving his pun rather than resolving it. Logged in
  detail in its chunk-0010 section below.
- **murenulae kept in italic Latin** (chunk 0009, "golden *murenulae*, inlaid with
  silver," glossed "or little chains"). Per the Song-of-Songs ruling
  (translation-style.md), this is this work's own choice and is not to be
  harmonized against 10379's "chains of gold" for the same lemma — each commentary
  stands on its own.
- ***amica*** renders consistently as "my friend" / "O friend" across every chunk
  that uses it (0002, 0004, 0008, 0010–0013, 0021, 0022, 0026) — checked at merge,
  no drift found.
- **Psal. CVI @0569B has no locatable Vulgate parallel** (nearest is Hab. 3:6,
  *stetit et mensus est terram*). Not corrected — no received reading can be named
  with the confidence `citation-corrections.json` requires. Rendered as printed,
  flagged here for whoever indexes citations or reads the work through.


## Cruces — 9033 (Angelomus of Luxeuil, *Enarrationes in Cantica canticorum*), chunks 0000–0004

Agent stint: chunks 0–4 (PL 115, cols 0551B–0566A). Column + printed reading + note.
Scripture divergences that received a `[var: …]` marker in the running text are listed
separately at the end.

### Carried type (`[sic: …]`)

**0552D — *angustale*.** Migne prints *ut angustale opus, et spirituale decus quomodo
quivissem aggredi non abnuissem.* *angustale* is not an attested Latin form; the author's
own word elsewhere in this same preface and at the head of the book proper is *augustale*
(0553D *supplex exoro decus augustale*; 0555 *Priusquam augustale decus*), and the whole
sentence concerns the emperor's commission. Carried into the English untranslated, in
italics, under Patterns 7/12. Conjecture: *augustale*, "imperial."

**0559A — *in luta*.** Migne prints *et stola sacrosancti baptismatis semel in luta,
immaculate vivendo, ultra se non maculavit.* The run *in luta* is split type for *induta*
("having put on"), which is what the clause requires (the robe of baptism once put on).
Carried whole under Pattern 10, spacing included, marked `[sic: …]`. Note that *luta* is
also a real word (*lutum*, mud), which is exactly why the split must not be silently
rejoined: the plate as it stands invites the wrong reading.

### Printed readings rendered literally (Pattern 7 — no marker, English is ours)

**0551B — *divinatum* for *divinarum*.** *enucleationumque divinatum scilicet
Scripturarum.* *divinatum* cannot agree with *Scripturarum*; the intended form is
*divinarum*. A Latin inflectional mismatch of this kind has no English exponent
(Pattern 9), so the English reads "of Holy Scripture" and nothing is emended.

**0552B–C — *nullo apologetico anfractuque excusationis praesumpsi*.** *temerario ore
refragare nullo apologetico anfractuque excusationis praesumpsi.* The *nullo* is carried
("I presumed to gainsay by no apologetic and no winding of excuse"); on this reading the
ablative carries the negation and the sentence construes with the argument, which is that
Angelomus did **not** refuse the commission. No emendation made or needed.

**0552C — *quo auribus, hausto non solum renuit*.** The clause requires a second negative
(*non solum non renuit*, "he not only did not refuse"), because the following *verum …
imperavit* reports that Drogo *did* command the work, and warmly. As printed, the page
says Drogo "not only refused, but … commanded." Rendered exactly as printed under Pattern
7a; the contradiction stands on the page and the conjecture lives here. The run *quo
auribus, hausto* is itself disordered (probably *quo auribus hausto*, "which having been
drunk in by his ears"); rendered as the printed words allow, with the printed comma kept
per Pattern 8.

**0554A — *descendet*.** *usque ad turpis amoris … verba descendet.* Future where the
Gregorian source and the surrounding present-tense verbs (*operatur*, *nominat*) want
*descendit*. Rendered as the printed future, "will descend."

**0554D — *Qui enim non solummodo regnat terrarum … noverunt, reges sunt*.** Two
problems in one clause: *regnat* is 3rd singular beside a plural *qui … noverunt … sunt*,
and *terrarum* is a bare genitive with no governing noun. The conjecture that resolves
both is *regna terrarum* as the first object of *regere et investigare noverunt* ("who
have known how to rule and search out not only the kingdoms of the earth, but their own
bodies"). Since no English rendering can carry both the singular verb and the orphan
genitive without reading as our own grammatical error, the English follows the plural
verbs of the clause ("For they who not only reign over lands…") and the printed defect is
recorded here rather than mimicked.

**0556B — *ethnicam, physicam, et theoriam*.** *quas Graeci ita ethnicam, physicam, et
theoriam nominaverunt.* The triad is ethics / physics / theoria; *ethnicam* ("heathen") is
a misprint for *ethicam*. Because rendering *ethnicam* by an English word would be
actively misleading and rendering it as "ethics" would be a silent repair, all three
Greek-derived discipline names are kept in italic Latin exactly as printed, on the
register rule for technical terms. Conjecture: *ethicam*.

**0556C — *quod omnia ad fidem tendant*.** In the gloss on Ecclesiastes, "all things
tend toward faith" where the argument (vanity, transience, *caduca et brevia universa*)
wants *ad finem*, "toward an end." Rendered as printed.

**0558A — *de conversione Hierusalem*.** Of Jeremiah's Lamentations; the sense required is
the destruction of the city (*subversione*). Rendered literally, "concerning the
conversion of Jerusalem."

**0558A — *futurae reprobationis nuntia*.** *qui a Dei Filio Ecclesiae futurae
reprobationis nuntia deferebant.* The prophets and angels are elsewhere in this passage
messengers of the coming espousal, not of reprobation; *reparationis* is the likely
reading. Rendered as printed, "tidings of the reprobation to come."

**0558C — *ex eadem materia videndi*.** In the gloss on *soror*: *cum ex eadem materia
videndi nascitur terris, de qua et Ecclesia generatur.* *videndi* for *vivendi* is near
certain (the same matter of *living*, i.e. flesh, out of which the Church is begotten).
Rendered as printed, "the same matter of seeing."

**0559D — *fuerit oblita improbari, probatur increpatione*.** The long sentence beginning
*Quod quamvis plebs Judaeorum arguatur contumax* does not construe: the participial chain
has no finite main clause until *probatur*, and *fuerit oblita improbari* has no
governing construction. Rendered as closely as the printed words allow, with the printed
punctuation kept; no emendation attempted.

**0560A — *prostibuli traditione salitur*.** "salted … by the handing over of the
brothel," in a description of baptism. Rendered literally; the phrase may be corrupt or
may be a compressed reference to the soul's former fornication (cf. the Ezekiel 16 lemma
just above), but neither can be shown from the plate.

**0560C — *mores quoque cantantium*.** In the list of nuptial offices, beside *amici
sponsi* and *sodales sponsae*, *mores* ("manners") where *chori* ("choirs") is what the
following relative clause requires (*qui dulci modulamine … canant*). Rendered as
printed, "the manners as well of the singers."

**0561A — *Et quid est apud Deum, quando, et quando non est*.** Unconstruable as it
stands; probably a truncated or doubled clause. Rendered as closely as the printed words
allow — "And what is there with God of 'when,' and when it is not" — and left unemended.

**0561A–B — *Cum se patrem nominat, indicat quod conjuncti*.** The three-term scheme just
established is Lord = created, father = adopted, bridegroom = joined; and the very next
sentence names all three (*conjunctos … quam creatos et adoptatos*). The plate therefore
appears to have lost a clause (*Cum se sponsum nominat, indicat quod conjuncti*) or to
have set *patrem* for *sponsum*. Rendered as printed.

**0562A — *lapsum in corporis foveam*.** The craftsman's ring falls into "a pit of the
body"; the simile needs a pit of filth or mire (*coeni*, *sordium*), and the same
sentence's *paulisper deposita stola* confirms that the craftsman is going down into
something foul. Rendered as printed.

**0562A–B — *Nam quae immensa potentia … nisi Dominus ancillam vere pauperculam, ut
externus mortalem …*.** The interrogative period is heavily disordered: the appositions
(*Dominus Jesus Christus*, *Dei sermo*, *Ecclesiam*, *animam*) cannot all be governed by
*copularet*, and *ut externus mortalem* has no clear referent. Rendered as closely as the
printed words allow, with *nisi* carried; no emendation attempted.

**0563D — *datum est, Tanto quippe amplius …*.** A comma where the plate then sets a
capital *T* and begins a new period. Both marks preserved under Pattern 8, so the English
reads "…given through the presence of the bridegroom, For by so much the more…"

**0565D — *per fidem scitur « Et odor unguentorum tuorum …*.** No terminal stop before
the next lemma. Not supplied (Pattern 8).

**0566A — *animae sic amenti*.** Beside *sic aestuanti amorem sponsi sui*, the expected
form is *amanti* ("loving"); *amens* ("out of one's mind") is what is printed and is not
impossible as hyperbole for the soul's love. Rendered as printed, "thus out of her
senses."

### Non-defects, recorded so a later sweep does not churn them

- **0551C — τοῖς βιβλοῖς.** Migne's Greek in the running Latin, kept verbatim.
- **0552B — `[ *minitando* ]`.** Migne's own bracketed variant on *intentando*, kept
  verbatim and untranslated per the register rule.
- **0551D, 0552B — *solitarius ingemiscens, atque poenitens*.** Masculine participles
  after the feminine *turtur*; a gender mismatch with no English exponent (Pattern 9).
- **0553A–B, 0553C — *Sic nimirum sic* and *Scimus namque scimus*.** Deliberate
  rhetorical geminatio, not plate dittography; no `[d: …]`.
- **0561C — *qui adhuc novellas viam bonorum sequitur*.** Gender mismatch
  (*novellas*/*viam*); Pattern 9, no exponent.
- **Column bands.** 0552A is absent between 0551D and 0552B, and 0555A is followed
  directly by 0556A at the end of chunk 0; chunk 1's bare `[0555]` precedes chunk 2's
  `[0555B]`. Normal Migne banding; no text is broken across any of these anchors.
- **Citation labels.** Several of Migne's `[n: …]` locators point elsewhere than the
  verse quoted (Marc. II for Mark 11:24; Prov. V for Prov 25:2 and Prov. I for Prov 5:1;
  Isa. XXVIII for Deut 32:1; Ezech. XVIII for Ezek 16; Cant. III for Cant 4:10; Eccli.
  for Ecclesiastes). Reproduced verbatim; resolution is the indexer's business.

### Scripture divergences marked `[var: …]` in the text

Every scripture lemma and quotation in chunks 0, 2 and 4 was read word by word against
the Vulgate before translating. 47 quotations were checked; 26 diverge materially and
carry a `[var: …]`. The rest agree with the received text and are listed at the end.

Chunk 0 (4):
1. **0551D, Matth. III, 2** — *appropinquabit* (fut.) for Vulg. *appropinquavit*.
2. **0552B, I Petr. II, 13** — *propter Dominum* for Vulg. *propter Deum*.
3. **0552B, "Marc. II" (= Marc. XI, 24)** — *Amen dico vobis, quidquid orantes petitis …
   et fiet vobis* for Vulg. *Propterea dico vobis, omnia quaecumque orantes petitis … et
   evenient vobis*.
4. **0553C, Cant. IV, 13–14** — *nardus cum croco* for Vulg. *nardus et crocus*. Marked
   because the gloss immediately following turns on the virtues being *permistae*,
   mingled *with* one another — the printed *cum* is load-bearing.

Chunk 2 (15):
5. **0555D, Matth. III, 2** — *appropinquabit* again.
6. **0556C, "Prov. I" (= Prov. V, 1)** — *Audi, fili mi, sapientiam meam* for Vulg.
   *Fili mi, attende ad sapientiam meam*.
7. **0557C, Exod. XV, 1** — *honorificatus est … projecit* for Vulg. *magnificatus est …
   deiecit*.
8. **0557C, "Isa. XXVIII" (= Deut. XXXII, 1)** — *Attende coelum et loquar, et audiat
   terra verba ex ore meo* for Vulg. *Audite, caeli, quae loquor; audiat terra verba oris
   mei*.
9. **0557D, Psal. XVII, 2** — *virtus mea* for Vulg. *fortitudo mea*. Rendered "my might"
   so the divergence survives into the English.
10. **0559B–C, Ezech. XVI, 3–7** — *oculus meus* for Vulg. *oculus*, and *sed jacebas
    nuda plenaque ignominia conculcata in sanguine tuo* for Vulg. *sed proiecta es super
    faciem terrae in abiectione animae tuae*.
11. **0559C, Ezech. XVI, 8–13** — *misi amictum meum* for Vulg. *expandi amictum meum
    super te*; *vestimento multicolorio* for *discoloribus*; *calciavi te hyacintho* for
    *ianthino*. The third is load-bearing: the gloss at 0560A expounds *hyacintho* as the
    Hebrew *color praeparans*.
12. **0560B, Ose. II, 19–20** — *desponsabo* five times where Vulg. has *sponsabo* three
    times, and *in miserationibus* is absent.
13. **0560B, Isa. LXI, 10** — the opening *Posuit mihi mitram sicut sponsae* is not in
    the Vulgate, which instead reads *et indumento iustitiae circumdedit me*.
14. **0560B, Zach. IX, 9** — *Noli timere, filia Sion, ecce Rex tuus venit tibi mitis et
    mansuetus, sedens super pullum asinae* for Vulg. *Exsulta satis, filia Sion … ecce
    rex tuus veniet tibi iustus et salvator; ipse pauper, et ascendens super asinam et
    super pullum filium asinae*.
15. **0560C, Ephes. V, 27** — *immaculatam Ecclesiam* for Vulg. *gloriosam Ecclesiam*.
    The most consequential divergence in the batch: *immaculata* is one of the names of
    the Church that Angelomus has just expounded at length (0559A), and Migne's reading
    plants that keyword in the Pauline proof-text.
16. **0560C, I Cor. XII, 27** — *et caro de carne ejus* for Vulg. *et membra de membro*.
17. **0560D, Mal. I, 6** — the *Dominus* and *pater* clauses in reverse order from the
    Vulgate, which matters because Angelomus builds a fear → honour → love ladder on the
    printed sequence.
18. **0560D, Ose. II, 20 / Jerem. II, 2** — *Desponsavi te mihi in justitia, et fide, vel
    certe recordatus sum diei desponsationis tuae in deserto*: the first clause is
    Hosea in the perfect (Vulg. future *sponsabo*), the second answers to Jeremiah.
19. **0561D, Phil. II, 8** — *Humiliavit se, ut nos exaltaret*; the final clause is not in
    the received text (*factus oboediens usque ad mortem*).

Chunk 4 (7):
20. **0562D, Matth. V, 2** — *Aperiens hic Jesus os suum dixit* for Vulg. *et aperiens os
    suum, docebat eos dicens*.
21. **0563A, Joan. III, 29** — *gaudio gaudet ad vocem sponsi*, omitting Vulg. *qui stat
    et audit eum* and reading *ad* for *propter*.
22. **0563A, Matth. III, 15** — *sic enim oportet nos* for Vulg. *sic enim decet nos*.
23. **0564A, Num. XII, 6–8** — *Si fuerit propheta in somnio loquor ad eum et non sicut
    famulo meo Moysi* for Vulg. *Si quis fuerit inter vos propheta Domini, in visione
    apparebo ei, vel per somnium loquar ad illum. At non talis servus meus Moyses*.
24. **0564C, I Cor. I, 25** — the *infirmum* and *stultum* clauses in reverse order, and
    *quam homines* for Vulg. *hominibus*.
25. **0565B, Luc. VII, 45** — *non cessavit osculari pedes **ejus***, where both the
    Vulgate and Migne's own quotation of the verse eleven lines earlier (0565A) read
    *pedes meos*. The gloss that follows is built on this second, divergent form.
26. **0565B, Psal. CXVII, 27** — *in confrequentationibus* for Vulg. *in condensis*.
    Load-bearing: the gloss immediately expounds *in confrequentatione*.

### Checked and found to agree with the received text (no marker)

Cant. I, 1 *Osculetur me osculo oris sui* (all occurrences, chunks 2 and 4) · Cant. I, 2
*Quia meliora sunt ubera tua vino* (all occurrences) · Cant. IV, 10 *Et odor unguentorum
tuorum super omnia aromata* (all occurrences) · Cant. II, 12 *Vox turturis audita est in
terra nostra* (0551D) · Prov. XXV, 2 *Gloria Dei celare verbum…* (0554D; Migne drops only
*est*) · Psal. II, 10 *Et nunc, reges, intelligite…* (0554D) · Joan. XIV, 27 *Pacem
relinquo vobis…* (0555C) · Isa. IX, 7 *Multiplicabitur ejus imperium…* (0555C) · Matth.
III, 17 *Hic est Filius meus dilectus…* (0555C, and again 0563A with *inquit*) · Eccle.
XII, 13 *Finem loquendi…* (0555D; word order *omnes pariter* only) · Eccle. I, 2 *Vanitas
vanitatum…* (0556C) · I Reg. II, 1 *Exsultavit cor meum in Domino* (0557C) · I Reg. II, 5
*Sterilis peperit plurimos…* (0557C) · II Cor. XI, 2 *Despondi enim vos uni viro…*
(0560C) · Joan. I, 29 *Ecce Agnus Dei…* (0563A; Migne drops the second *ecce* only) ·
Matth. III, 14 *Ego a te debeo baptizari…* (0563A) · Psal. XLIV, 8 *Unxit te Deus…*
(0563C) · Luc. VII, 44–45 *Intravi in domum tuam…* (0565A; *ex quo ingressa est* for *ex
quo intravit*, not a change of sense) · II Cor. II, 15 *Christi bonus odor sumus Deo*
(0565D; Migne appends *in omni loco* from v. 14) · Ephes. II, 14 *medio pariete
destructo* (0555D; an allusive fragment too short to collate, cf. Vulg. *medium parietem
maceriae solvens*) · Cant. I, 9 *pulchrae sunt genae tuae ut turturis* (0551D; *ut* for
*sicut*, woven into Angelomus's own prose and unmarked by Migne).

## Cruces — 9033 (Angelomus of Luxeuil, *Enarrationes in Cantica canticorum*), chunks 0005–0009

Agent stint: chunks 0005–0009 (cols 0566B–0581A). To be merged with the other
agents' crux files at assembly.

---

### A. Scripture divergences marked `[var: …]` in the text (Pattern 14)

Fourteen in all. Each renders **Migne's printed wording** and notes the received
reading beside it; nothing was substituted.

1. **0566A–B (chunk 0005), Cant. I, 2** — Migne prints the lemma ***Unguentum
   effusum nomen tuum*** throughout (six occurrences in this chunk). The Vulgate
   has ***oleum* effusum nomen tuum**. The divergence is load-bearing: the whole
   exposition turns on *unguentum* (ointment in a vessel, poured out; the
   *unguentum* of the Old Testament used for anointing kings; the ointment-vessel
   broken by nails and lance), and the passage would be incoherent on *oleum*.
   Marked once, at first occurrence.
2. **0566C (0005), Zach. I, 9** — Migne prints *Et dixit **ad Angelum** « qui
   loquebatur in me »*; the Vulgate has *dixit ad me angelus qui loquebatur in
   me*. Migne reverses the direction of address (Angelomus's frame words; the
   guillemeted portion agrees with the Vulgate). Rendered as printed — "And he
   said to the Angel « who spoke in me »" — since Pattern 7a mechanism 5
   (mis-bound agency) is exactly what a silent repair here would create.
3. **0569A (0006), Cant. I, 3** — *post te curremus **in odore** unguentorum
   tuorum* (ablative) against Vulg. *in odore**m*** (accusative). The commentary
   builds on the ablative (*In odore unguentorum Dei currimus*), so the case is
   not incidental.
4. **0569C (0006), Matth. XVI, 23** — ***Redi** post me, Satanas* against Vulg.
   *Vade post me, Satana*.
5. **0569D (0006), Cant. I, 3** — *Introduxit me rex **in cubiculum suum***
   against Vulg. *in **cellaria sua***. Material: the entire following gloss is an
   architecture of the king's house — gate, ascent, *triclinia*, *cubicula* — and
   the fourth stage is expressly the *cubiculum regis*. Note that at 0577C the
   same author quotes Cant. II, 4 as *Introduxit me rex in cellam vinariam*, so
   both readings stand in this work.
6. **0570A (0006), II Cor. XII, 4** — ***Audivi** arcana verba* (first person)
   against Vulg. ***audivit*** (third). Changes who heard.
7. **0571B (0006), I Cor. VIII, 1** — Migne prints *Ista scientia inflat, **quia
   charitas non aedificat***. The received text is *scientia inflat, caritas vero
   aedificat*. **The printed negation is carried** ("because charity does not
   build up"), per Pattern 7a, even though it contradicts the Apostle and does not
   serve Angelomus's own argument (which is that the humble knower excels the
   proud one). Not marked as a quotation by Migne — no guillemets, no `[n:]` — so
   the `[var:]` names the verse. This is the most likely candidate in the stint
   for a plate defect (*vero* → *non*); it is not emended.
8. **0571D (0006), Ps. XXX, 20** — *et perfecisti **ea** sperantibus in te*
   against Vulg. *perfecisti **eis qui sperant** in te*.
9. **0571D–0572A (0006), II Tim. IV, 8** — Migne's *Quae praeparavit Deus non
   solum mihi, sed omnibus qui diligunt adventum ejus* conflates the verse with I
   Cor. II, 9 (*quae praeparavit Deus*); the Vulgate reads *reddet mihi Dominus …
   non solum autem mihi, sed et his qui diligunt adventum eius*.
10. **0572A (0007), Cant. I, 4** — *formosa **filia** Hierusalem* (singular)
    against Vulg. *formonsa **filiae** Hierusalem* (plural vocative). Angelomus's
    own gloss at 0573B pluralizes (*quas et filias Hierusalem vocat*), so the
    singular is not his consistent reading.
11. **0573A (0007), Act. XIII, 46** — *Vobis **missum fuerat** verbum Dei, sed
    quia vos indignos judicastis* against Vulg. *vobis **oportebat primum loqui**
    verbum Dei; sed quoniam repellitis illud et indignos vos iudicastis aeternae
    vitae*. Migne loses "of eternal life" and turns Paul's "we had to speak" into
    "had been sent."
12. **0574A (0007), II Cor. X, 5** — ***Cogitationum** consilia destruentes*;
    the Vulgate has simply *consilia destruentes*. (Migne's note reads *II Thess.
    II*; the reference is not corrected here — `refDisplay` rule.)
13. **0576C (0008), Habac. III, 15** — *Misisti in mare equos tuos, turbantes
    aquas multas* against Vulg. *viam fecisti in mari equis tuis, in luto aquarum
    multarum*. Migne's reading follows the Old Latin / LXX (ἐπεβίβασας εἰς
    θάλασσαν τοὺς ἵππους σου ταράσσοντας ὕδωρ πολύ). The proof-text is adduced
    precisely for God's *horses in the sea*, which the Vulgate wording does not
    give as directly — this is the divergence doing argumentative work.
14. **0580B (0009), Matth. XXVIII** — *Ite, nuntiate fratribus meis, **quia
    praecedit vos in Galilaeam, ibi eum videbitis*** conflates 28:10 (*ite
    nuntiate fratribus meis ut eant in Galilaeam, ibi me videbunt*) with 28:7.

### B. Scripture divergences checked and deliberately NOT marked

All are same-sense or trivial; recorded so a later sweep does not re-open them.

- **0566C (0005)** *flagrantia unguentis optimis* for Vulg. *fraglantia* —
  metathesis, standard medieval orthography (Pattern 9). No mark.
- **0569B (0006)** *« Pedes ejus steterunt, et mota est terra »*, cited *Psal.
  CVI*. **No Vulgate parallel located** in Ps. 105/106 or elsewhere; nearest is
  Habac. III, 6 (*stetit et mensus est terram*). Because no received reading can
  be named with confidence, no `[var:]` was added. Rendered as printed. Flagged
  for whoever indexes the scripture citations.
- **0570A (0006)** *Ascensus in corde suo disposuit* (Ps. LXXXIII, 6) for Vulg.
  *ascensiones*. Same sense.
- **0572D (0007)** *Quod si **volentes** in Christo justificari* (Gal. II, 17) for
  Vulg. *quaerentes*. Same sense; also unmarked as a quotation in Migne.
- **0573B (0007)** *Fuistis aliquando tenebrae* (Eph. V, 8) for Vulg. *eratis
  enim*. Same sense.
- **0574C (0007)** *Vobis autem timentibus nomen meum orietur sol justitiae*
  (Mal. IV, 2; Migne cites *Matth. IV*) — word order differs from Vulg. *et
  orietur vobis timentibus nomen meum sol iustitiae*; sense identical. The
  citation itself is Migne's and is not corrected.
- **0573A / 0574A / 0574D / 0575A (0007)** Cant. I, 5 is printed four ways —
  *custodem vineis*, *custodem in vineis*, *vineam non custodivi*, *vineam meam
  non custodivi*. Each rendered as printed at its own occurrence; the variation is
  Migne's, not smoothed.
- **0575D / 0576A (0008)** Cant. I, 7 printed first as *post vestigia gregum
  **tuorum***, then twice without *tuorum* (Vulgate lacks it). Rendered as
  printed each time.
- **0577C (0008)** I Petr. V, 8–9 *fortes **in** fide* for Vulg. *fortes fide*;
  and the omission of *sobrii estote*. Trivial.
- **0577C (0008)** *Introduxit me **rex** in cellam vinariam* (Cant. II, 4) —
  Vulgate has no *rex*. Carried over from the *Introduxit me rex* of I, 3 above.
- **0578A/0578B/0579A (0009)** Cant. I, 9 printed as *ut turturis*, then *sicut
  turturis*, then *Quam pulchrae sunt genae tuae sicut turturis* (Vulgate has no
  *Quam*). Each rendered as printed.
- **0578C (0009)** Ps. LXXXIII, 4 *ubi **reponat** pullos suos* for Vulg.
  *ponat*. Same sense.
- **0580A / 0580C (0009)** II Cor. II, 14–15 compressed (*Deo autem gratias qui
  semper triumphat nos in omni loco*, dropping *in Christo Iesu et odorem
  notitiae suae manifestat per nos*), and at 0580C *in omni loco* is attached to
  v. 15. Obvious authorial compression; rendered as printed.
- **0579C/0580A (0009)** Cant. I, 11 printed once as *Dum esset rex* and twice as
  *Cum esset rex*; Vulgate has *dum*. Each rendered as printed.

### C. Carried type — `[sic: …]` (Patterns 10, 12)

- **0577A (0008)** — *sub **viti s** currebas*. Split type for *vitiis*; the
  broken run is carried untranslated in italics inside `[sic: *viti s*]`, and
  the sentence reads "thou wast running under [sic: *viti s*]". Conjecture:
  *vitiis*, near-certain (the same clause has *vitiis deserviebas* eight words
  earlier). This is the only carried run in the stint.

### D. Lexical and syntactic cruces — rendered as printed, no emendation

- **0566C (0005)** *lampabili sermone*. *Lampabilis* is a rare formation (from
  *lampare*, to shine); it is construable and was rendered "in shining discourse"
  rather than carried as non-word type. Possible but unproven: *laudabili*.
- **0566D–0567A (0005)** *tamen non erit inconveniens, duo ubera Christi
  Baptistam et Evangelistam duos Joannes **intelligit** proprie* — the impersonal
  frame is completed by a third-singular indicative with no expressed subject.
  Rendered with the shift intact ("yet it will not be unfitting: he understands
  properly…"). Not emended to *intelligi*.
- **0567B (0005)** *qui de terrenis levatam ad Patris consortium **ducunt**
  Ecclesiam* — plural verb after a chain of singular relatives referring to
  Christ; the nearest plural antecedent is *potestatibus*. Rendered with the
  plural as printed.
- **0567B (0005)** The long sentence *Hujus ergo lacte doctrinae … quotidie
  porrigit* is anacoluthic: an ablative *lacte* with no governing verb, an
  accusative *praedicta ubera* left hanging, and a *quae si* clause resuming
  something not previously nominative. Rendered clause by clause with the breaks
  preserved by dashes; nothing supplied.
- **0567B (0005)** *per lactis naturam, id est **casti** liquorem*. Genitive of
  *castum*; rendered literally, "the liquid of what is chaste." Likely intended:
  *casei* (the liquid of cheese), which suits the butter-making figure that
  follows. Not emended.
- **0567D (0005)** *cujus virtute pinguedinis … absconsam **flagrantiam**, quae …
  docetur versiculo* — accusative with no governing verb. Rendered as printed
  with the anacoluthon visible.
- **0568C (0005)** *Quia ergo neque hi flagrant … neque hi qui jam fidem
  coeperunt, sed friguerunt, postposita puerili vel senili vita.* — a *quia*
  clause with no apodosis. Both *neque*s carried; the sentence stops where Migne
  stops it (Pattern 8).
- **0571A (0006)** *Ubera in **arcta** pectoris fixa sunt, et **externo**
  nutrimentum trahunt* — *arcta* used substantivally ("the narrow parts"),
  possibly for *arcano*; *externo* a bare dative/ablative. Rendered literally.
- **0571A (0006)** *Habet iste sponsus ubera, qui etiam rex propter reverentiam
  vocatur **habet ubera**, sanctos viros…* The phrase *habet ubera* stands twice.
  It is **not** marked `[d: …]`: the two occurrences are separated by a relative
  clause and read as rhetorical resumption, not as an adjacent compositor's
  doubling (Pattern 11 covers the latter). Recorded here so the judgment is
  visible.
- **0571C (0006)** *Vinum est scientia quae inebriat memoriam uberum, quae
  inebriat quem ad cognitionem donorum revocat.* — the second *quae inebriat* has
  no clean antecedent and *quem* is unbound. Rendered as printed.
- **0573C (0007)** *Macerati sumus per poenitentiam, mortificati vero per
  poenitentiam quasi pellis in obsequium regis **adducitur*** — nominative plural
  participles with a singular passive verb. Rendered with the number mismatch
  intact.
- **0574A–B (0007)** *Vinea Ecclesiae antiqua consuetudo erroris est. **Quem** dum
  custos ad virtutes ponitur, deserit vineam…* — masculine relative for the
  feminine *vinea*, and the relative has no verb of its own. Rendered as printed
  ("Which, while one is set as keeper unto the virtues, he forsakes — that
  vineyard…").
- **0574B (0007)** *Et non est justum ut aliquis ex praeterita vita pensetur, et
  **non magis attendatur quod fuit, sed quod est**.* As printed, the second
  negation makes the clause say the opposite of the argument (which is that what
  a man *is* should be regarded). **The `non` is carried** — "and that there be
  not more regarded what he was, but what he is" — per Pattern 7a; the intended
  reading is almost certainly with *quod fuit* and *quod est* transposed, or
  *magis* attaching to *quod est*. Not emended.
- **0574D (0007)** *Ecce dum pugnant isti spiritus **rationes**, spiritus isti
  filii matris dum pugnant contra animam…* — *rationes* is a nominative/accusative
  plural noun where an adjective (*rationales*, matching *duae creaturae
  rationales* at 0574C) is required; the sentence then restarts. Rendered
  literally ("these spirits, reasons"). *Rationes* is a real word and so takes no
  `[sic: …]` (Pattern 12's boundary), but the restart may be a compositor's false
  start.
- **0576A (0008)** *Si vero non cognoscis, aliquid facta es, egredere et abi…* —
  three clauses joined by commas with no subordinator; rendered with the
  punctuation as printed (Pattern 8).
- **0576B (0008)** *Ecce increpasti, ecce redarguisti. **Quid enim non dicis.**
  Quid tu benigne in ea operatus es?* The full stop after a *quid* clause is
  preserved, not converted to a question mark (Pattern 8).
- **0577B (0008)** *ut eamdem sanctam Ecclesiam in subjectis ab internorum
  videlicet malignorum spirituum **ancilibus** Evangeliorum munitus, gladiis …
  accinctus…* The parse is genuinely ambiguous: *ancilibus* (sacred shields) may
  govern *Evangeliorum* ("fortified with the shields of the Gospels") or belong
  to *spirituum* ("from the shields of the malignant spirits"). The second was
  taken, because *Evangeliorum munitus* then parallels *gladiis … accinctus* and
  *spiculis … ornatus*; the first is defensible. Nothing emended.
- **0577B (0008)** The Lothair address (*Quocirca suadere, imo suggerere …
  defendere possis*) is a single sentence with two *ut* clauses and a *quia*
  clause that never resolves; rendered as one long period with the joins visible.
  Note the address shifts between *vestrae/vestra* and *tui/tu* mid-sentence —
  preserved.
- **0578A–B (0009)** *Sic nimirum sancti Patres, sic anima sancta et fidelis …
  quo utique fugiendo … eo modo cognoscitur coelestem facere prolem … transmittit
  ad coelum.* — the double subject never receives a single verb, and *quo* /
  *quidquid pretiosum* are left unattached. Rendered clause by clause.
- **0579A–B (0009)** *per quem Novi et Veteris Testamenti verba … cum catenata
  quasi una veritatis catenula sermo effectus … Ecclesiae collum **decorat*** —
  plural subject *verba* with singular *decorat*, and a parenthetic *cum* clause
  whose subject changes to *sermo*. Rendered as printed.
- **0579B (0009)** *Et quia sancti doctores … verbum praedicationis, ornati
  virtutibus **aliis** administrant* — *aliis* read as "to others" (dative)
  rather than as an adjective with *virtutibus*; the following *Quae opera* has no
  main clause of its own. Rendered as printed.
- **0580D (0009)** *Unde semper habens in memoria recordationis **quam propinqua
  est** uberibus pectoris, et qualiter passus est pro ipsa…* — *quam propinqua* is
  an indirect question dependent on nothing expressed. Rendered "how near he is to
  the breasts of the bosom."

### E. Editorial decisions on lemma wording

- **0579A / 0579B (0009), *murenulae*.** Cant. I, 9 *Murenulas aureas faciemus
  tibi* is kept in **italic Latin** rather than Englished, because Angelomus
  himself glosses the word: at 0579B he prints *« Collum tuum sicut monilia.
  Murenulas » vel **catenulas** « aureas faciemus tibi… »*. An English "chains" in
  the lemma would make the gloss ("or little chains") say nothing. This follows
  the case-2 rule of the Song-of-Songs ruling (a gloss depends on the word →
  the Latin stands in italic) and matches 10804's *murenulae*; it does **not**
  imply that 10379's "chains of gold" should be swept — each commentary stands.
- **0575A / 0577C, *hinnulus*.** Migne prints the word plain at 0575A (*qui
  subter hinnulus vocatur*) and italic at 0577C (*qui subter *hinnulus*
  appellatur*). The English mirrors the plate exactly: "a fawn" plain in the
  first, *a fawn* italic in the second. Not normalized.
- **Quotation marks.** Per Pattern 6's corollary, only the lemmata Migne marks
  with « » carry guillemets. Every chunk's guillemet count matches its Latin twin
  1:1 (15 / 27 / 26 / 20 / 17 pairs); no gloss-internal quotation was added, so
  no `" "` appears in the stint.
- **Pattern 3.** *in Scriptura sacra* (0574C), *divinarum Scripturarum* (0577B,
  twice), *sacrarum Scripturarum* (0577D), *Scripturam utriusque Testamenti*
  (0579B) all take the capitalized form.

## Cruces — 9033 (Angelomus Luxoviensis, *Enarrationes in Cantica canticorum*), chunks 0010–0014

Agent stint: chunks 0010–0014 (cols 0581B–0596B). A later merge step reconciles this
file with the other agents' crux files for this work.

---

### Carried type (`[sic: …]`)

### 0581B — *oculus haeai* for *oculus haedi*
Migne prints `Quod autem *oculus haeai* interpretatur`. Two lines earlier the same
etymology is printed correctly twice (*fons haedi,* *oculus haedi*), and the whole
gloss turns on the kid (*haedus*). `haeai` is not a word; carried untranslated in
italics inside `[sic: *haeai*]`, with the real word *oculus* rendered ("eye").
Conjecture: *haedi*, near-certain.

### 0586D–0587A — *partriarchis* for *patriarchis*
`Salvator in angeli persona partriarchis et prophetis loquendo`. The same word is
printed correctly as *patriarchae/patriarchas* five times in the neighbouring columns
(0587A, 0587B, 0590A). Non-word; carried as `[sic: *partriarchis*]`.
Conjecture: *patriarchis*.

### 0590A — *Spitum sanctum* for *Spiritum sanctum*
`tertium Spitum sanctum, qui vera ratione de voce et verbo de Patre et Filio procedere
comprobatur`. Non-word; carried as `[sic: *Spitum*]`, with *sanctum* translated
("Holy"), so the page reads "the Holy *Spitum*". Conjecture: *Spiritum*, certain from
the following relative clause.

---

### Real words that are merely wrong — rendered as printed (Pattern 7 / Pattern 12 boundary)

### 0590A — *panem* where the argument requires *Patrem*
`quid aliud credendum est primum imbui, nisi ut credat et agnoscat primum debere panem
nominari, in quo Filius semper, ut Verbum invocet; secundum Filium in quo semper Pater,
tertium Spitum sanctum`. The three-term series is plainly Father–Son–Spirit, and the
second member (*in quo semper Pater*) presupposes that the first member was the Father.
*panem* is nevertheless a real word and is rendered as printed: "that first the bread
ought to be named, in whom the Son always is". No `[sic:]` (Pattern 12: only carried,
untranslated type is marked). Conjecture: *Patrem*.

### 0595B — *exsultabuntur* for *exaltabuntur* (Ps. LXXIV, 11)
`Tunc « exsultabuntur cornua justi »`. *exsulto* is not normally passive; the Vulgate
reads *exaltabuntur*. Rendered as printed, "shall be exulted", and additionally marked
`[var: …]` since it is a scripture divergence. Conjecture: *exaltabuntur*.

### 0583C — *qua* for *quae*
`Quod multis animabus evenisse probatur, qua se ab una verissima praedicta confessione
fidei evulsae et arefactae gehennae pabulum praebuerunt.` *qua* cannot govern the plural
*praebuerunt*; the participles *evulsae, arefactae* are feminine plural agreeing with
*animabus*. Rendered as though relative to *animabus* ("which, torn away … offered
themselves"), which is the only reading the printed words allow.

---

### Unconstruable or strained passages, rendered as closely as the printed words allow

### 0582D — *vitam conferentem aeternam Ecclesiae genuit*
`Qui usque hodie per tristitiam moeroremque vitam conferentem aeternam Ecclesiae genuit,
ut praedictum est, in eis qui …`. The word order will not resolve cleanly: *aeternam*
sits outside *vitam … conferentem*, which it should modify (*vitam aeternam conferentem*,
"conferring eternal life"). Rendered "has begotten for the Church a life conferring
eternity". No emendation made.

### 0583D–0584A — *Post genarum et colli decoram sponsae vicem reddendo … et geminato praeconio absconso*
`Post genarum et colli decoram sponsae vicem reddendo oculorum pulchritudo laudatur in
doctorum simplicitate suorum, et geminato praeconio absconso.` *decoram* has no
governing noun (*decorem*, "comeliness", would construe with *genarum et colli*), and
*absconso* is a dangling ablative with no evident head. Rendered "After the comeliness of
the cheeks and of the neck, by rendering the bride her turn, the beauty of the eyes is
praised in the simplicity of her doctors, and by a doubled proclamation kept hidden."
Conjecture: *decorem*; *absconso* perhaps for *abscondito* or for a lost noun.

### 0587A — *Omnis scientia, per prophetas, per signorum virtutes …*
The whole sentence lacks a finite main verb: `Omnis scientia, per prophetas, per signorum
virtutes interficiendo impios per aquas diluvii, vel Sodomitas per ignem, per quod
insipientes intelligerent sapientiam, et stulti superbi aliquando saperent super se
commorari excelsiorem judicem, justam exsolventem vindictam.` Rendered as the printed
anacoluthon, with no verb supplied.

### 0586C–0586D — *et lilia integritati per suam poenitentiam …*
`gloriosae domus Christo parantur flores sapientiae coelestis, et lilia integritati per
suam poenitentiam ad magnam jucunditatem honoris ipse Dominus praedictarum domorum
impendit.` *integritati* is dative where the sense wants a genitive (*integritatis*),
and *domorum* is genitive where *impendit* wants a dative. Rendered "and the flowers of
heavenly wisdom, and lilies of integrity, through their penance, the Lord himself
bestows upon the aforesaid houses unto the great delightfulness of honor."

### 0591C — *quia nullum quem desiderat videre adhuc non permittitur* — double negation carried
Twelve lines earlier the same clause is printed `sed quia illum quem desiderat videre
prout est adhuc non permittitur` ("him whom she desires"). Here *illum* has become
*nullum*, producing a double negative with *non permittitur*. **Both negations are
carried**: "because she is still not permitted to see none whom she desires."
Conjecture: *illum*. No repair made in the text (Pattern 7a).

### 0595C — *lateret ex passionibus … cerneretur ex passionibus*
`quasi per cancellos et fenestras ad homines venit ut Deus, ut appareret ex miraculis,
sicut dictum est, et lateret ex passionibus, et homo cerneretur ex passionibus.`
The source of the sententia (Gregory) has *Deus appareret ex miraculis, homo cerneretur
ex passionibus*; here *ex passionibus* is printed twice with two different verbs, and
the clause *lateret ex passionibus* contradicts nothing but is redundant. This is **not**
a straight dittography of a run (the verbs differ), so no `[d: …]` was used; both clauses
are rendered.

### 0594C — *et ad nihilum redacta humiliatur*
`omnem superbiam sapientiae mundi extollentem se adversus Creatorem liquefecit, et ad
nihilum redacta humiliatur.` Active *liquefecit* is followed by a passive *humiliatur*
with a shifted subject and a change of tense. Rendered as printed.

---

### Scripture divergences from the received text

**23 `[var: …]` markers were added across the five chunks.** Each is listed here with the
column, Migne's printed reading, and the received reading.

| Col | Ref | Migne prints | Received text |
|---|---|---|---|
| 0582A | John 14:23 | *Ego et Pater veniemus, et mansionem apud eum faciemus* | Vulg. *ad eum veniemus et mansionem apud eum faciemus* |
| 0582A | Matt 18:19 | *Si duobus vel tribus convenerit super terram, quidquid petierint in nomine meo fiet eis* | Vulg. *si duo ex vobis consenserint super terram de omni re quamcumque petierint fiet illis a Patre meo* |
| 0582B | Hab 3:2 | *In medio duorum animalium cognosceris* (unattributed) | Vulg. *in medio annorum vivifica illud*; Migne's is the Vet. Lat./LXX reading |
| 0582C | Matt 5:5 | *Beati qui lugent nunc, quia ipsi consolabuntur* | Vulg. *Beati qui lugent, quoniam ipsi consolabuntur* (no *nunc*) |
| 0584C | 1 Cor 12:3 | *nullus dicit Dominum Jesum* | Vulg. *nemo potest dicere Dominus Iesus* |
| 0585B | Col 3:1 | *Si mortui estis cum Christo … in dextera Dei Patris* | Vulg. *si consurrexistis cum Christo … in dextera Dei sedens* |
| 0587D | Matt 16:6 | *Cavete a fermento Pharisaeorum* | Vulg. *a fermento Pharisaeorum et Sadducaeorum* |
| 0587D | 2 Cor 6:16 (Migne's note reads *I Cor. VI*) | *qui est sensus templo Dei cum idolis* | Vulg. *qui consensus templo Dei cum idolis* |
| 0587D | Isa 52:11 | *Exite de medio eorum, et qui portatis vasa Domini, mundamini* | Vulg. *exite de medio eius … mundamini qui fertis vasa Domini*; *de medio eorum* is 2 Cor 6:17 |
| 0588B | Heb 1:1 | *Dei Filius locutus est patribus nostris* | Vulg. *olim Deus loquens patribus in prophetis* |
| 0588D | Matt 11:28 | *et ego vos requiescere faciam* | Vulg. *et ego reficiam vos* — **and Migne himself prints the Vulgate form at 0596A**, so the divergence is local to this citation |
| 0589C | Song 2:4 | *Introduxit me rex in cellam vinariam* | Vulg. *introduxit me in cellam vinariam* (no *rex*) |
| 0589D | John 6:27 | *Operamini cibum qui non perit, sed qui permanet in aeternum* | Vulg. *operamini non cibum qui perit sed qui permanet in vitam aeternam* — the negation sits on *cibum* in the received text |
| 0590D | Rom 13:7 (Migne's note reads *Rom. XII*) | *Reddite singulis debita, cui honorem … cui vectigal, vectigal* | Vulg. *reddite omnibus debita*, order *tributum … vectigal … timorem … honorem* |
| 0591A | Eccl 1:18 | *Qui addit scientiam, addit dolorem* | Vulg. *qui addit scientiam addit et laborem*. **Material**: the whole following gloss turns on *dolor* (*De quo dolore beatus amor nascitur Christi*) |
| 0591D | Phil 1:24 | *Permanere autem in carne, necessarium existimo propter vos* | Vulg. *permanere autem in carne magis necessarium est propter vos* |
| 0592A | Ps 41:3 | *Sitivit anima mea ad Deum fontem vivum … ante faciem Domini* | Vulg. *ad Deum fortem vivum … ante faciem Dei*. *fontem* is a widely attested variant and is what the surrounding baptismal imagery wants |
| 0594A | Matt 24:4-5, 24 | *Videte ne seducamini a pseudoprophetis* + *dabunt signa* | Vulg. 24:4 *videte ne quis vos seducat*; *a pseudoprophetis* absent; 24:24 *dabunt signa magna et prodigia* |
| 0594B | Luke 12:36 | *Similes estote servis exspectantibus dominum suum* | Vulg. *similes hominibus expectantibus dominum suum* |
| 0595B | Ps 74:11 | *exsultabuntur cornua justi* | Vulg. *cornua iusti exaltabuntur* (see carried-type section above) |
| 0595B | Song 2:9 | *respiciens per fenestras* | Vulg. *despiciens per fenestras*. **Material**: the gloss repeats *respicit* four times (0596A) |
| 0595D | Isa 50:2 + 59:2 | *Nunquid non valet manus mea ad liberandum? Sed peccata vestra murum fecerunt inter vos et Deum* | Vulg. 50:2 *numquid adbreviata et parvula facta est manus mea ut non possim redimere*; 59:2 *iniquitates vestrae diviserunt inter vos et Deum vestrum*. The *murum* is the commentator's own — the whole exposition of the *paries* depends on it |
| 0596B | Eph 2:14-16 | *Qui tulit parietem maceriae de medio, et reconciliavit nos Deo Patri per sanguinem ipsius* | Vulg. *medium parietem maceriae solvens … ut reconciliet ambos in uno corpore Deo per crucem* |

### Divergences checked and deliberately NOT marked (logged only)

These were read word by word against the Vulgate; the difference does not change the
sense, so no `[var: …]` was added.

- **0582A, Matt 18:20** — *Ubi congregati fuerint duo vel tres in nomine meo, ego in medio
  eorum sum* / Vulg. *ubi enim sunt duo vel tres congregati in nomine meo ibi sum in medio
  eorum*. Word order and tense only.
- **0582A, 1 Cor 3:2** — *Lac vobis potum dedi non escam*. Exact Vulgate.
- **0585D, Ps 91:13** — *Justus ut palma florebit, et sicut cedrus Libani multiplicabitur*.
  Vulgate lacks the connective *et*; nothing else.
- **0585C / 0585D, Song 1:16** — the lemma is printed first as *Tigna domorum nostrarum
  cedrina, laquearia cypressina* and then, twelve lines later, as *laquearia **nostra**
  cypressina* (the Vulgate form). Migne prints the verse both ways on the same page; both
  are rendered as printed.
- **0588B / 0589A, Song 2:3** — the lemma is printed *Sicut **malus** inter ligna silvarum*
  (feminine, "apple tree") and later *Sicut **malum** inter ligna silvarum* (neuter,
  "apple", the Vulgate form). Rendered "apple tree" and "apple" respectively, following
  the printed forms; the intervening gloss supports both (*arborem malum vel granatum eum
  appellat Ecclesia* … *Sicut malum visu, odore et gustu antecedit*).
- **0588B / 0589B, Song 2:3** — *sub umbra illius quem **desiderabam** sedi* (imperfect) /
  Vulg. *desideraveram* (pluperfect); and the second citation at 0589B reads *Sub umbra
  **quam** desiderabam*, with the relative referred to *umbra* rather than to the beloved.
  Both rendered as printed.
- **0589A, Ps 118:103** — *Quam dulcia faucibus meis eloquia tua! **Domine**, super mel ori
  meo*. The vocative *Domine* is not in the Vulgate; rendered as printed.
- **0589B, Ps 95:12-13** — *ante faciem Domini quoniam venit* / Vulg. *a facie Domini quia
  venit*.
- **0590B, Deut 6:5** (Migne's note reads *Exod. XX*) — *in toto corde tuo … in tota virtute
  tua* / Vulg. *ex toto corde tuo … ex tota fortitudine tua*; *virtute* agrees with Mark
  12:30. The exposition turns on the three *ordines*, not on the wording.
- **0591A, Phil 3:8** — *omnia arbitratus sum ut stercora* / Vulg. *arbitror ut stercora*.
- **0591A, Song 1:3** — *Exsultabimus et laetabimur in te*. Exact Vulgate.
- **0591D, Phil 1:23** — *Desiderium **habeo** dissolvi et cum Christo esse* / Vulg.
  *desiderium habens dissolvi et esse cum Christo*.
- **0593A, 2 Tim 2:20** (Migne's note reads *II Thes. II*) — not set as a quotation; *vasa
  aurea et argentea, sed et fictilia et lignea* reverses the Vulgate's final pair.
- **0594B, Luke 21:34** — *Videte ne graventur corda vestra crapula aut ebrietate* / Vulg.
  *adtendite autem vobis ne forte graventur corda vestra in crapula et ebrietate*.
- **0594B, Hab 3:6** — *confregerit montes violentiae, et liquefecerit colles aeternales*.
  Not set as a quotation (introduced only by *secundum Habacuc prophetam*); the Vulgate has
  *dissoluti sunt montes saeculi, incurvati sunt colles mundi*. Left unmarked because Migne
  does not present it as a citation.
- **0594C, Song 2:8** — *Ecce venit saliens in montibus* / Vulg. *ecce iste venit*.
- **0595A, Ps 67:14** — *Pennae columbae deargentatae **in** posteriora dorsi ejus* / Vulg.
  *et posteriora dorsi eius in pallore auri*. The clause is truncated where the commentator
  stops; rendered as printed.
- **0596A, Matt 11:28 and Matt 25:34**; **0596B, Luke 24:36** — all three agree with the
  Vulgate verbatim.
- All Song of Songs lemmata not listed above (1:12, 1:13, 1:14, 1:15, 2:1, 2:2, 2:5, 2:6,
  2:7, 2:9a) agree with the Vulgate word for word.

---

### Notes on rendering decisions

- **cypri / Cypri.** Migne prints the lemma word lowercase at 0581A–0581B (*Botrus cypri*,
  the henna/cypress of Song 1:13) and capitalized from 0582B onward (*Botrus Cypri*), where
  the gloss reads it as the island (*insula Cyprus mirae magnitudinis botros uvarum gignere
  comprobatur*; *Cyprus vero tristitia vel moeror interpretatur*). The English follows the
  printed capitalization: "cluster of cypress" where Migne prints *cypri*, "cluster of
  Cyprus" where he prints *Cypri*. The pun is Migne's own typography and is preserved
  rather than harmonized. (At 0583B *Cyprino oleo* is rendered "oil of cyprus", the printed
  adjective.)
- **ὀρὴ (0583B).** `Caverna enim Graeco sermone ὀρὴ dicitur.` The Greek word for a hole is
  ὀπή; ὀρὴ is what the plate prints. Reproduced verbatim, untranslated, per the marker rule
  — no `[sic: …]` was stacked on it since it is Greek script carried through, not broken
  Latin type.
- **Column anchor inside a word (0591A).** Migne breaks *omnibus* across the column: `Amplius
  om [0591A] nibus laboravi`. English cannot split the corresponding word at the same point;
  the anchor is placed at the nearest word boundary ("I have labored more than [0591A] all").
- **Quotation marks.** Guillemets are placed 1:1 with the Latin twin throughout, including
  the several places where Migne opens a quotation for one clause of a proof-text and leaves
  the rest of it unquoted (0587D, the 2 Cor 6 series; 0591A, *Amplius omnibus laboravi*;
  0595B, *Tunc « exsultabuntur cornua justi »*). No gloss-internal quotation required
  supplied `" "` marks in these chunks except the two repeated adjectives at 0584B
  ("fair" and "fair"), which Migne prints unquoted.
- **ex superfluo** (0586D, 0589C, 0592C) rendered "by way of surplus" throughout.
- **amica / amica mea** rendered "friend" / "my friend" throughout this stint, matching
  *amicae suae Ecclesiae* at 0582C where the gloss makes the friendship explicit. Flag for
  the within-work merge reconciliation.

## Cruces — 9033 (Angelomus Luxovensis, *Enarrationes in Cantica canticorum*), chunks 0015–0018

Agent stint: chunks 0015–0018 (cols 0596C–0606C). A later merge step will reconcile this
file with the other agents' crux files for this work.

---

### Carried type (`[sic: …]`, Patterns 7 / 10 / 12)

**0597C — *infidelitatiis*.** Migne prints *Jam frigus infidelitatiis et imber iniquitatis
recesserunt.* No such word; *infidelitatis* is near-certain (the parallel genitive
*iniquitatis* follows immediately). Non-word type, carried untranslated in italics inside
`[sic: …]`.

**0600C — *demo liuntur*.** The lemma Song 2:15 is printed correctly the first time
(*quae demoliuntur vineas*, 0600C) and split the second time in the gloss's re-quotation:
*« Capite nobis vulpes parvulas quae demo liuntur vineas, »*. Split type per Pattern 10;
the whole broken run is carried, spacing included. That the same word stands whole nine
lines earlier is the proof it is a compositor's division, not a form.

**0602D — *prophatarum*.** *Vicos vero atque plateas, libros legis et prophatarum vocat.*
For *prophetarum*; a single-vowel non-word, carried.

### Repetition (`[d: …]`, Pattern 11)

**0602C — *Et quicunque deitatem non credit in Christo* printed twice.** The plate reads:

> *Quicunque solum hominem credit Christum, non inveniet eum. Et quicunque deitatem non
> credit in Christo, non inveniet eum. Et quicunque deitatem non credit in Christo, vocat
> quidem in noctibus perversorum sensuum suorum Dominum Dei Filium, sed non respondet ei…*

The clause *Et quicunque deitatem non credit in Christo* is set twice, with different
continuations. **Judgment: compositor's doubling by eye-skip**, not authorial anaphora —
the two continuations belong to two different sentence shapes, and the first of them
(*non inveniet eum*) merely repeats the tail of the sentence before it. The `[d: …]`
marker wraps the **second** occurrence per Pattern 11. Flagged as a judgment call: an
editor who preferred to treat the *first* sentence as the intrusion would mark the other
one, and the plate does not settle it. Both occurrences are printed either way.

### Scripture divergences carrying a `[var: …]` marker

Eleven, all rendered as Migne prints them and noted beside, never substituted.

| Col | Lemma | Migne prints | Received text |
|---|---|---|---|
| 0596B–C | Mal. 4:2 | *timentibus **Deum*** | Vulg. *timentibus **nomen meum*** |
| 0597D | Matt. 10:35 | *separare **filium a patre**, et nurum **a socru sua**, et filiam **a matre sua*** | Vulg. *hominem **adversus** patrem suum … filiam adversus matrem suam … nurum adversus socrum suam* |
| 0597D–0598A | 1 Cor. 13:12 | …*facie ad faciem, **et videbimus eum sicuti est*** | Vulg. 1 Cor. 13:12 ends at *facie ad faciem*; the added clause is 1 John 3:2 |
| 0598D | Matt. 3:2 | *appropinq**ab**it* (future) | Vulg. *appropinq**uav**it* (perfect) |
| 0601C | Song 2:17 | *super montes **Bethel*** | Vulg. *super montes **Bether*** |
| 0601D | Ps. 8:2 | ***Quam** elevata est magnificentia tua* | Vulg. ***Quoniam** elevata est* |
| 0600D | 2 Cor. 10:5 | *Corripientes **omnem hominem** in captivitatem redigimus omnem **scientiam*** | Vulg. *omnem **altitudinem** … in captivitatem redigentes omnem **intellectum in obsequium Christi*** |
| 0603A | Ps. 126:1 | *in vanum **vigilant** qui **custodiunt eam*** | Vulg. *frustra **vigilat** qui **custodit eam*** (sing.) |
| 0603B | Song 3:4 | *Tenui **manum ejus** … in domum **patris mei*** | Vulg. *Tenui **eum** … in domum **matris meae*** |
| 0604D | Song 3:7 | *sexaginta **ambiunt*** | Vulg. *sexaginta **fortes** ambiunt* |
| 0606A | Song 3:11 | *filiae **Hierusalem*** | Vulg. *filiae **Sion*** |

Three of these are load-bearing and worth naming:

- **0601C, *Bethel* for *Bether*.** The gloss depends entirely on the divergent reading —
  *montes Bethel, quae domus Dei dicitur* — and repeats the etymology twice. The Vulgate's
  *Bether* would leave the whole exposition without a foothold.
- **0604D, *sexaginta ambiunt* without *fortes*.** The lemma drops the very word the gloss
  four lines later expounds (*Sexaginta fortes praedicatores sunt sancti, et fortissimi
  bellatores*). The lemma is short one word its own commentary needs.
- **0603B, *domum patris mei* for *domum matris meae*.** The gloss then glosses the verse's
  *genitrix* as the Synagogue *quae me genuit* — i.e. it construes the maternal half of the
  verse while the lemma printed above it has become paternal.

### Scripture divergences logged but NOT marked (below the `[var: …]` threshold)

Each was checked word by word; none changes the sense, so none took a marker.

- **0596C, John 16:33** — Migne *Confidite, **quia** ego vici mundum*; Vulg. *sed confidite,
  ego vici mundum*. A supplied connective.
- **0598B, Luke 1:34** — *quia virum non cognosco* for Vulg. *quoniam*.
- **0598C, Matt. 3:3 / John 1:23** — *«**Ego** vox clamantis in deserto, parate viam
  Domini»* cited to (Matth. V): the *Ego* is John's, *Parate* is Matthew's; a conflation of
  the two forms of the same verse. The citation's chapter number is also off, which is
  index-time business, not ours.
- **0598C, Luke 3:8** — *Facite fructus dignos poenitentiae*, Vulg. *Facite **ergo** fructus*.
- **0597A, 0599C, Song 2:13** — *Surge, **propera**, amica mea, speciosa mea, et veni*; Vulg.
  2:13 has no *propera*, which belongs to 2:10. Assimilation of the two verses, and
  Angelomus quotes both forms within a page. Also **0597A *Exsurge*** where 0596B and
  0597C print *Surge*; the English keeps the distinction ("Rise up" / "Arise").
- **0600A, Isa. 2:10** — *Ingredere in petram, abscondere in fossa humo*, Vulg. *et
  abscondere*.
- **0602C, Ps. 48:8** — *Frater non **redemit**, redimet homo*; Vulg. *non **redimit***.
  Perfect for present; the argument does not turn on the tense.
- **0603B, Song 3:4** — *Paululum cum pertransissem*, Vulg. *pertransissem **eos***.
- **0604A, Ps. 140:2** — *in conspectu tuo, **Domine*** — supplied vocative.
- **0605A, Song 3:9** — *Ferculum **sibi fecit** rex Salomon*, Vulg. *Ferculum **fecit sibi***.
- **0602B, Song 3:1** — *per **noctem*** for Vulg. *per **noctes***. The gloss picks the
  singular up (*Per noctem quaerimus*), so the reading is at least consistent with itself;
  singular/plural here does not shift the sense enough for a marker.

### Readings rendered literally under Pattern 7 (no emendation in the text)

**0601D — *Nec moralis siquidem admittendus est sensus.*** "Nor indeed is the moral sense
to be admitted." The printed negation **contradicts the sentence that follows it**, which
proceeds immediately to give the moral sense (*Unusquisque enim credentium Deo, ipse se
fecit montem Dei…*). Conjecture: *Nunc* for *Nec*, or a lost *non… non*. The negation is
carried per Pattern 7a — this is precisely the class where a silent repair would leave a
smooth page and destroy the evidence.

**0606A — *per **filios** Hierusalem infirmantium mentes significat***, three words after
*Filias dicunt, **non filios***. The plate denies "sons" and then expounds "sons."
*Filias* is near-certain in the second clause. Both are rendered as printed.

**0598A — *Ut tempus putationis est, vocatio e mundo animae coelestium.*** Will not
construe cleanly: *coelestium* (gen. pl.) has no evident head, and there is no main verb
for the second member. Rendered as closely as the printed words allow ("As is the time of
pruning, so is the calling out of the world of the soul of the heavenly ones"). A likely
intent is *vocatio e mundo animae **ad** coelestia*, but that is conjecture and stays here.

**0602B — *Quem quaerens ob hoc minime invenit, ut amore illius accensa ardentius
quaerens.*** The *ut* clause has no finite verb (*quaerens*, participle, where *quaerat* is
wanted). Rendered as an unfinished clause, as printed.

**0604B — *ut hanc nec ipse animus comprehendere qui illuminatus meruit habere.*** The
*ut* clause again lacks its verb (*valeat* / *possit*). Rendered with the supplied modal
bracketed by sense only — "[can] comprehend it" — the negation *nec* carried in full.

**0602C — *Sine causa igitur laborem impendit quaerendo, qui aequalem hominibus absque
peccato et coaeternam Patri, non fuerit utraque natura confessus Deum, qui redemit, et
hominem per quem redemit perditos Deus.*** Word order and case make the two accusatives
(*aequalem*, *coaeternam* — the latter feminine) float free of *Deum* and *hominem*.
Rendered following the sense the clause plainly intends, without altering any word;
*coaeternam* has no English exponent for its gender (Pattern 9).

**0601C — *ut laborem peregrinationes meae speculatione aeterna releves.*** *peregrinationes*
(acc. pl.) where *peregrinationis* (gen. sg.) is required by *laborem*. English carries no
case exponent here, so the phrase renders identically either way ("the labour of my
pilgrimage"); logged, no edit — the Pattern 9 gender/case precedent.

**0605D — *Habet quippe charitatem, et ibi sine dubio **praevenis***.** Second-person
singular in a run of third-person clauses (*Habet … erigitur … tenetur*). Rendered as
printed ("thou dost come beforehand"); *praevenit* is the obvious conjecture.

**0601A–B — *quae nulla peccati nigredine sit maculata, non turpium verborum mendaciique
absconsa, vel blasphemiarum raucedine voce horrida, sed dulcedinem suis laudibus
resonantem **reddit vicem***.** The relative chain governed by *faciem* breaks at *reddit*,
which is indicative and takes a new subject. Rendered with the break visible.

**0601A — *Conjuncta itaque Ecclesia Christo … ut eam abundantiore gaudio cumulet per
omnia, et in quibus ipse per laetitiam pascitur, et quid ille delectetur in ea ostendit, et
quid illa respondere debeat … docetur.*** Anacoluthon: the opening ablative absolute never
receives its main clause, and *ostendit* / *docetur* change voice mid-sentence. Rendered
clause by clause as printed.

**0599C — *Sed ubi passiones Christi sacramenta sunt celebrata per apostolorum
doctrinam.*** *passiones* (nom./acc. pl. fem.) beside *sacramenta … celebrata* (n. pl.).
Rendered "the sacraments of Christ's passions were celebrated"; no English exponent for
the mismatch.

**0600C — *Sed calliditate insidiisque vulpium maturitatem fructus exspectantium ad
demoliendam devorandamque parata, quae sunt … dogmata ait Jesus suis doctoribus.*** *parata*
has no subject after the preceding sentence's *paratam*, and *quae sunt … dogmata* is a
parenthesis wedged between *parata* and *ait*. Rendered with the parenthesis marked by
dashes; nothing supplied.

**0604A — *per thus **paritas** orationum*.** *paritas*, "equality," is a real word and is
rendered as such under Pattern 7 (so it takes no `[sic: …]`, per Pattern 12's boundary for
real-words-merely-wrong). *puritas*, "purity of prayers," is near-certain — it is the
standard partner of *mortificatio carnalium voluptatum* in the myrrh/frankincense pairing,
and Angelomus's own next sentences develop purity, not equality.

**0604D — *Qui per senarium multiplicatus fuerit, sexaginta **complent**.*** Singular
relative, plural verb. No English exponent worth marking; rendered "Which, when it has been
multiplied by six, they make up sixty."

**0596C — *quia nobis umbra sua obstabat sol justitiae*.** *sol justitiae* is the subject of
*obstabat*, so the sun of justice is what stands in our way — the reverse of the figure the
sentence is building (Song 2:9, *stat post parietem nostrum*). Rendered as printed.

### Not defects (checked and left alone, per Pattern 9 / the standing false-positive list)

- *decalogium* (0604D) for *decalogum* — attested medieval form.
- *Hierusalem* throughout for *Jerusalem* — orthographic convention of the plate.
- *Nocturnae … timores* (0604D) — gender mismatch with no English exponent.
- *(Matth. XI)* on Matt. 10:28, *(Matth. V)* on Matt. 3:3, *(Psal. CXXVI.)* attached to
  Song 3:3 at 0602D — Migne's own citation numbering, resolved at index time, not here.
- The `(cont.)` on the repeated `## CAPUT II. / CAPUT III.` heads — our chunk division;
  untranslated, merged at assembly.
- Column band 0596B is the `colContext` of chunk 0015 but its first printed anchor is
  0596C; no text is broken across the boundary.

## Cruces — Angelomus, *Enarrationes in Cantica canticorum* (9033), chunks 0019–0022

Agent stint: chunks 0019, 0020, 0021, 0022 (cols 0606D–0617B). To be merged with the
other agents' crux files at assembly.

### Printed readings carried literally (Pattern 7)

**0606D — *inoptabilior*.** *Magna est quippe gloria aperti operis, sed longe
inoptabilior aeternae retributionis, quae necdum videri potest.* Rendered as printed,
"but far more undesirable is that of the eternal recompense." The argument requires the
opposite (the unseen reward is the greater glory), so the printed *in-* is almost
certainly a plate defect for *optabilior*, or the sentence has lost a word. *inoptabilior*
is a formable Latin word, so it is rendered as ordinary English under Pattern 7/12 rather
than carried in italics; no `[sic:]`.

**0607A — *videntibus* for (probably) *in dentibus*.** *In capillis fragiliores,
videntibus vero perfectiores quique sanctarumque Scripturarum expositores…* The
antithesis is between the lemma's hairs (4:1) and its teeth (4:2), which the sentence is
glossing; *videntibus* leaves the clause without its counterpart to *In capillis*.
Rendered literally, "but to those seeing, all the more perfect…". Conjecture: *in
dentibus*. Real word, so no `[sic:]`.

**0607A–B — the myrrh parenthesis.** *Coccum color est sanguinis vitta coccinea (myrrha
dicitur) cruorem designat beatorum martyrum.* Two clauses run together with no
punctuation between *sanguinis* and *vitta*, and the parenthesis *(myrrha dicitur)* has no
antecedent — nothing in Song 4:3 mentions myrrh. Rendered as printed, with a semicolon
supplied nowhere; the parenthesis is carried in English as "(it is called myrrh)".
Possibly a stray gloss migrated from 4:6 (*montem myrrhae*).

**0606D — *designari hi ascenderunt*.** *Possunt per capillos specialiter ipsi qui ex
circumcisione crediderunt designari hi ascenderunt de monte Galaad.* No connective
between the two clauses (expected *…designari, qui* or a full stop). Rendered as two
clauses joined by a semicolon; no word added or removed.

**0607D — *sacra eloquio* for *sacra eloquia*.** *Quid per collum sanctae Ecclesiae, nisi
sacra eloquio designantur?* Gregory (*Moralia*) reads *sacra eloquia*; the printed
*eloquio* agrees with nothing in the clause. Rendered by sense of the printed words,
"the sacred utterances"; the case defect has no English exponent (Pattern 9).

**0609B — *induplicatae fidei*.** Migne's gloss on Eph. 5:27 (*nec rugam* "induplicatae
fidei"). Rendered "of a doubled faith". *induplicatus* is unattested classically; the
sense required — a fold, hence duplicity — is what a *ruga* is, so it is rendered rather
than carried.

**0611A — *coufortat*.** *cum divina gratia coufortat nos Christo compati.* Non-word type
for *confortat*. Carried into the English untranslated, in italics, marked
`[sic: *coufortat*]` (Patterns 7, 12).

**0611A — *cassa* for *casia*.** *Fistula, quae et cassa dicitur, arbor aromatica est.*
The tree meant is cassia (*casia*); *cassa* is a real Latin word ("empty"), and here
functions as a name, so it is kept as the printed name in italics rather than translated.

**0611A — *qui seipsos decipiunt*.** *Item cinnamomum, qui seipsos decipiunt, signat.*
Rendered as printed, "signifies those who deceive themselves" — which contradicts the
following sentence, where the low, fragrant tree stands for humility and earns "great
praise". Conjecture: *despiciunt*, "those who despise themselves". Rendered literally per
Pattern 7a; no substitution made.

**0611D — *facit illam id diversis germinare virtutibus*.** *id* has no antecedent and
displaces the expected *in*. The word is carried in the English ("makes her to bud it
forth in divers virtues"); it is a real word, so no `[sic:]`.

**0613A — *mortalitatis hujus vicus*.** *quia plerumque mortalitatis hujus vicus, vel
tenebrarum operibus obfuscantur.* Nominative *vicus* ("village") cannot govern the
ablative construction the clause requires. Rendered as printed, "by the village of this
mortality". Conjecture: *visco*, "by the birdlime of this mortality" — the standard
patristic image for what clings and darkens.

**0613D — *puram confusionem proferre*.** *Aperire est verbum Dei praedicare, vel puram
confusionem proferre.* Rendered as printed, "or to bring forth pure confusion", which the
context (opening the heart to Christ) contradicts. Conjecture: *confessionem*. Real word,
so rendered rather than carried; no silent repair.

**0613D — no terminal stop.** *…vel continentia fit, vel passiones fiunt* ends the
paragraph with no punctuation. Not supplied (Pattern 8).

**0613B — *Exspoliavi* / *Spoliavi*.** Song 5:3 is quoted twice within a column of itself,
first as *Exspoliavi me tunica mea* (0613A), then as *Spoliavi me tunica mea* (0613B). Both
are rendered as printed and distinguished in the English ("I have put off" / "I have
stripped off"); the plate's own variance is not levelled.

**0613B — *Nunquid aequum est … me patiar*.** *Nunquid aequum est rursum per eorum
exempla male vivendo inquinari a pristinis me patiar malis?* Two finite constructions
(*est* … *patiar*) share one clause. Rendered as closely as the printed words allow
("Is it right that I should suffer myself again to be defiled by my former evils, by
living ill after their examples?"); no word supplied or dropped.

**0614D — full stop before *quoniam*.** *…manifestes. quoniam « perfecta charitas foras
mittit timorem. »* The lowercase *quoniam* after a full stop is preserved (Pattern 8);
the English likewise reads "…make manifest. since «…»".

**0616B — *donum Ecclesiae, velut donum columnae*.** *Crura … illi sunt qui donum
Ecclesiae, velut donum columnae sustinent.* *donum* stands twice where the sense wants
*domum* ("the house of the Church") the first time and probably nothing the second; the
parallel a few words later is *qui fabricam Ecclesiae sustentant*. Rendered as printed,
"who uphold the gift of the Church, as it were the gift of the pillars." Not marked
`[d:]`: the two occurrences are not a contiguous repeated run.

**0615C — *Labia, quia claritate coelestis regni promittunt*.** In the gloss on *Labia
illius lilia distillantia myrrham primam*, the second sentence repeats *Labia* where the
whiteness-argument requires *Lilia*. Rendered as printed ("Lips, because by their
brightness they promise the heavenly kingdom"). Not marked `[d:]`: not a contiguous
doubling — the intervening sentence lies between.

**0615C — *Areolae aromatum … designatur*.** Singular verb with a plural compound
subject. No English exponent; no edit (Pattern 9).

### Scripture divergences from the Vulgate

Every lemma and proof-text in these four chunks was collated word by word against the
Vulgate before translation. Divergences found:

**Marked with `[var:]` in the English:**

- **0607D, Exod. XX** — Migne: *Non concupisces **rem** proximi tui.* Vulg.: *non
  concupisces domum proximi tui*. The gloss it answers is *Res alienas concupiscit*, so
  the divergent noun is the word the argument turns on. `[var: Vulg. *domum proximi tui*…]`
- **0610D–0611A, Cant. IV, 14** — Migne: *nardus **cum** croco.* Vulg.: *nardus et
  crocus*. The gloss depends on the preposition: *Item nardus cum croco conjungitur, cum
  per charitatem Christi mortem libenter suscipimus.* `[var: Vulg. *nardus et crocus*…]`
- **0616B–C, Cant. V, 15** — Migne: *Electus ut **cedrus**.* Vulg.: *electus ut cedri*.
  The gloss reads a single tree (*Sicut cedrus alias arbores … superat*).
  `[var: Vulg. *ut cedri*…]`

**Divergences recorded but not marked** (rendered as printed; sense unaffected, or the
gloss does not turn on them):

- 0607C, Cant. IV, 4 — *cum propugnaculis **suis*** (Vulg. *cum propugnaculis*). The
  possessive is glossed as printed at 0608C (*aedificata cum propugnaculis suis dicitur*),
  so the English carries "its own bulwarks" throughout.
- 0608A, Levit. XIX — *Non **quaeras** ultionem* (Vulg. *non quaeres*): subjunctive for
  future indicative, same prohibitive force.
- 0608A, Matth. V — *Qui viderit mulierem…* (Vulg. *omnis qui viderit*): the quotation is
  shortened, not altered.
- 0608B, Luc. XIV — *Qui non **renuntiaverit*** … *non potest **esse meus** discipulus*
  (Vulg. *qui non renuntiat … non potest meus esse discipulus*).
- 0609A, Eph. V — *Ut exhiberet sibi gloriosam Ecclesiam non habentem maculam … **nec**
  rugam* (Vulg. *ut exhiberet ipse sibi … maculam aut rugam*). Migne's *nec* is required
  by the interpolated gloss and is rendered "nor".
- 0610D, Cant. IV, 13 — ***Cyprus** cum nardo* (Vulg. *cypri cum nardo*): nominative for
  genitive; the gloss treats it as a tree-name, which the printed case supports.
- 0611C–D, Cant. IV, 16 — *et **fluent** aromata illius* (Vulg. *fluant*): future
  indicative for subjunctive. Rendered "shall flow".
- 0611C, Joan. VII — *Qui credit in me, flumina de ventre ejus fluent aquae vivae* — Vulg.
  interposes *sicut dixit scriptura*; omission only.
- 0612A–B, Cant. V, 1 — *et **bibi** vinum meum* and *Comedite, amici, **et** bibite*
  (Vulg. *bibi vinum meum*, *comedite amici bibite*): added connectives only.
- 0612D, Cant. V, 2 — *cincinni **capitis** mei guttis noctium* (Vulg. *cincinni mei*).
- 0613D, Cant. V, 5 — *Manus meae **distillaverunt** myrrham* (Vulg. *stillaverunt*).
- 0614A, Cant. V, 6 — *Anima mea liquefacta est, ut **dilectus** locutus est* (Vulg. *ut
  locutus est*); *Quaesivi **illum et non inveni*** (Vulg. *quaesivi et non inveni illum*).
- 0614B, Cant. V, 7 — *percusserunt me **et** vulneraverunt me* (Vulg. asyndeton).
- 0615A, Phil. III — *Conversatio nostra in coelis est* (Vulg. *nostra autem conversatio
  in caelis est*).
- 0615A, Joan. I, 14 — *Verbum caro factum est* (Vulg. *et Verbum caro factum est*).
- 0615C, 0616A, Cant. V, 13–14 — *Labia **illius*** and *Venter **illius*** (Vulg. *labia
  eius*, *venter eius*): *illius*/*eius* are equivalent and have one English exponent.

## Cruces — Angelomus, *Enarrationes in Cantica canticorum* (PL 115), chunks 0023–0026

Agent stint covering cols 0617C–0628D (chunks 23, 24, 25, 26). A later merge step
reconciles this with the other agents' crux files for this work.

---

### Printed readings rendered literally (Pattern 7)

**0618B — `quia hanc nos timemus in terra quam ipse nolens tenere amisit in coelo.`**
Rendered "because we fear this on earth which he himself, unwilling to hold it, lost
in heaven." The argument requires *tenemus* ("we hold on earth the concord he lost in
heaven") — the whole sentence is about the devil envying a concord *we possess*. The
plate prints *timemus*. Rendered as printed; conjecture *tenemus*, near-certain.

**0618A — `quia quaelibet in nobis bona opera fuerint, si charitas desit?`**
An incomplete sentence closed with a question mark. Rendered as printed and with the
mark preserved (Pattern 8): "for whatever good works there shall have been in us, if
charity be wanting?" Something on the order of *quid prosunt* has dropped out; not
supplied.

**0618C — `Idcirco etenim in coelum ascendi, ut semper tibi localis appaream.`**
Rendered "For this cause indeed I ascended into heaven, that I might always appear to
thee as bound to a place." The context requires the opposite (Christ ascends so as
*not* to be locally circumscribed for the seeker). No negation is printed, so none is
supplied — Pattern 7a. Conjecture: *ne … localis appaream*.

**0618D — `Et.haec magna sunt valde quae videntur in ea`**
`Et.haec` is a run-together with an intruded full stop and is not a word; carried into
the English untranslated in italics under Patterns 10 and 12: `[sic: *Et.haec*]`.
Intended reading plainly *Et haec*.

**0619C — `Ait namque.: « Quae est ista … »`**
`namque.:` prints a full stop immediately followed by a colon. Both marks preserved
(Pattern 8): "For she says.: « … »". Same class as `Et.haec` above and `Id est.`
at 0627A; three instances of a stray full stop in this stint suggests a transcription
artifact rather than three independent compositor slips, but nothing in our files
proves it, so all three stand as printed.

**0627A — `Id est. argentei his qui custodiunt fructus ejus`**
Stray full stop after *Id est* preserved: "That is. the pieces of silver to those who
keep the fruits thereof."

**0620C — `Qui ob hoc qui Christi sanguine decoratur, coccinea in Latino sonat`**
Doubled relative (*Qui … qui*) with no antecedent that construes, and a masculine
relative for the feminine *Sunamitis*/*coccinea*. Rendered as literally as the words
allow: "Which for this cause, which is adorned with the blood of Christ, sounds in the
Latin *scarlet*." No emendation attempted. (The etymology *Sunamitis* = *coccinea* is
the point of the gloss, so the interpretation-word is rendered in English italics, on
the same footing as *cingulum moeroris* and *sanguinem bibens* below.)

**0621B — `Hi enim tanquam hinnuli in Christo renascuntur atque ex his duobus
Testamentis lac sapientiae sugentes.`**
Anacoluthon: the participle *sugentes* has no finite verb. Rendered as printed: "For
these are born again in Christ as fawns, and sucking from these two Testaments the milk
of wisdom." Nothing supplied.

**0621A — `in ventri similitudinem deputantur`** — *ventri* for *ventris*; no English
exponent for the case error (Pattern 9). Rendered "in the likeness of the belly." No
edit, no marker; flagged so a later sweep does not churn it.

**0623A — `si Ecclesia flores fide et parturiat`**
Construes as printed if *flores* is taken as the accusative object of *parturiat* and
*et* as adverbial: "if the Church also brings forth flowers by faith." Rendered so; no
emendation needed. Noted because the run reads at first sight like a defect for
*floreat*.

**0623B — `His enim singulis sponsa dilecti sui poenitentiam quaerit.`**
Rendered "For in each one of these the bride seeks the penitence of her beloved."
*poenitentiam* of the *beloved* is theologically impossible in context; the likely
reading is *praesentiam*. Rendered as printed, per Pattern 7.

**0623C — `sanctorum virtutibus comparantur, quae more medicorum ad salutem animarum a
vitiorum infirmitatibus sanentur, ostenduntur`**
Two finite verbs with no connective; rendered as closely as the words allow: "are
compared to the virtues of the saints, which, after the manner of physicians, are shown
to be healed from the infirmities of the vices unto the health of souls." Probably
*sanentur* stands for an infinitive (*sanari*) governed by *ostenduntur*.

**0623C — `hanc poetae ἀνθροπόμορφον appellant`**
Greek carried verbatim, including the plate's spelling: ἀνθροπόμορφον for
ἀνθρωπόμορφον. Not marked `[sic: …]` — the run is reproduced in the Greek, so the
reader sees the form itself.

**0624D — `quomodo Ecclesia de deserto gentilitatis in sponsis subito amplexus
ascendisset`** — *in sponsis … amplexus* does not agree (*sponsi* expected). Rendered
"into the embraces of the bridegroom"; the plural of *sponsis* has no defensible
English rendering that keeps the phrase intelligible. Conjecture *sponsi*.

**0624D — `Suscitavi te sub arbore malo. Respondit sponsa pro Synagoga. Ipse sponsus
… liberavi te`** — a nominative *Ipse sponsus* with a first-person verb, and the
speaker labelled *sponsa* while the words are the bridegroom's. Rendered as printed:
"The bride answered on behalf of the Synagogue. I, the bridegroom himself, … freed
thee." Not repaired.

**0626C — `qui est fructus violae, cuncta quae mundis reliquit`**
Rendered "which is the fruit of the violet, all the things which he left to the
worlds." *violae* is almost certainly *vineae* (the whole passage is about the vineyard
and its fruit), and *mundis* almost certainly *mundi*. Both rendered as printed.

**0627D, 0628A — `calcetenus`** (twice). A rare adverb, "as far as the heel"; rendered
literally "down to the very heel" in both places rather than smoothed to "to the end."
Attested word, so no `[sic: …]` (Pattern 9).

**0628A — `angelica salpix` / `per oroma somnii`**
Two Graecisms (σάλπιγξ, ὅραμα) latinized by the author. Both have clean English
exponents and are rendered "trumpet" and "vision"; no italic Latin, since the italic
signal is reserved for terms with no equivalent. Logged so the Graecisms are not lost
to a reader of the English alone.

---

### Scripture divergences from the received text (Pattern 14)

Every lemma and proof-text in these four chunks was read word by word against the
Vulgate. Those that diverge materially carry a `[var: …]` in the English; the rest are
listed below the rule as immaterial.

| Col | Migne prints | Received text | Marked |
|---|---|---|---|
| 0618C | Cant. 6:4 *Capilli tui sicut greges caprarum, quae ascenderunt de monte Galaad* | Vulg. 6:4 *grex caprarum quae apparuerunt de Galaad* (the printed wording is Cant. 4:1) | `[var:]` |
| 0618D | Cant. 6:6 *absque oculis tuis* | Vulg. *absque occultis tuis* | `[var:]` |
| 0619A | Cant. 6:8 *una est matri suae, electa genitricis suae* | Vulg. *una est matris suae, electa genetrici suae* (cases inverted) | `[var:]` |
| 0619B | Cant. 6:8 *Viderunt eam filiae Sion* | Vulg. *Viderunt eam filiae* | `[var:]` |
| 0619B | Cant. 6:9 *Quae est ista quae ascendit* | Vulg. *quae progreditur* | `[var:]` |
| 0620B | Cant. 6:12 *Sunamitis* | Vulg. *Sulamitis* | `[var:]` |
| 0620B | Cant. 7:1 *in Sunamite, nisi castrorum choros* | Vulg. *in Sulamite, nisi choros castrorum* | `[var:]` |
| 0623B | Cant. 7:13 *Mandragorae dederunt odorem suum in portis nostris* | Vulg. *Mandragorae dederunt odorem*; *in portis nostris* opens the next clause | `[var:]` |
| 0623D | Cant. 8:1 *Quis mihi dat fratrem meum sugentem ubera mea* | Vulg. *Quis mihi det te fratrem meum sugentem ubera matris meae* | `[var:]` |
| 0624D | Cant. 8:5 *Innixa super dilectum meum* | Vulg. *super dilectum suum* | `[var:]` |
| 0625C | Cant. 8:8 *Soror mea parvula est* | Vulg. *Soror nostra parva* | `[var:]` |
| 0626B | Cant. 8:10 *coram te* | Vulg. *coram eo* | `[var:]` |
| 0626B | Cant. 8:11 *quae habet populus* | Vulg. *quae habet populos* | `[var:]` |
| 0626D | Cant. 8:12 *Et ducenti his custodiunt fructus ejus* | Vulg. *et ducenti his qui custodiunt fructus ejus* | `[var:]` |
| 0627B | Cant. 8:14 *super monte aromatum* | Vulg. *super montes aromatum* | `[var:]` |
| 0627C | Ps. 46:6 *in jubilatione* | Vulg. *in jubilo* | `[var:]` |
| 0627C | Mark 16:19 *ascendit in coelum* | Vulg. *assumptus est in caelum* | `[var:]` |
| 0628B | *Deus a Libano veniet, et sanctus de monte umbroso et condenso* | Vet. Lat./LXX form of Hab. 3:3; Vulg. *Deus ab austro veniet, et Sanctus de monte Pharan* | `[var:]` |

**Notes on individual entries.**

- **0618D (*oculis*/*occultis*)** is the strongest case in the stint and the pure
  Pattern 7a″ trap: the gloss immediately following turns on things *not seen* and
  *reserved for the future* (*multo majora quae non videntur*), which is the Vulgate's
  *occultis*, not the printed *oculis*. The English renders the printed *oculis*
  ("besides thy eyes") and the marker carries the received reading.
- **0619B (*ascendit*/*progreditur*)**: Migne's own gloss two lines later reads
  *Progreditur Ecclesia quasi aurora* — the Vulgate verb — while both quotations of the
  lemma print *ascendit*. Rendered as printed in both places; the gloss keeps "goes
  forward."
- **0620B / 0620C (*Sunamitis*)**: the exposition depends on the divergent form — the
  commentary identifies her with the Shunammite of the book of Kings and etymologizes
  her as *coccinea*. The English keeps *Sunamitis* (as "Sunamitess") throughout rather
  than the Vulgate's *Sulamitis* or an English "Shulamite"; conforming the name would
  have destroyed the gloss.
- **0627B (*monte*/*montes*)**: the lemma prints the singular, but the re-quotation
  inside the same gloss prints *supra montes aromatum*, and the exposition that follows
  is entirely plural (*Montes aromatum, angeli intelliguntur*). Both rendered as
  printed — singular in the lemma, plural in the gloss.
- **0628B (Hab. 3:3)**: not a defect but an Old Latin / LXX reading, the form Gregory
  the Great quotes and the one the whole "mountain" peroration is built on (*condensus
  per sententias, umbrosus per allegorias*). No `[n: …]` accompanies it in the plate.

**Divergences judged immaterial — rendered as printed, not marked.** Cant. 6:1
*aromatum* for Vulg. *aromatis*; 6:10 *si floruissent vineae* for *si floruisset
vinea*; 7:2 *sicut crater tornatilis* (Vulg. has no *sicut*); 7:6 *Quam pulchra es et
decora* (Vulg. repeats *quam*); 7:8 *apprehendam* without *et*; 7:8 *sicut odor
malorum* (Vulg. *sicut malorum*); 7:12 *Ibi tibi dabo* for *ibi dabo tibi*; 8:1
*deosculer* without *te*; 8:2 *ducam te* (Vulg. *ducam*); 8:6 *et sicut signaculum*
(Vulg. *ut signaculum*); 8:7 *despicient* for *despiciet*; 8:9 *super eam* for *super
eum*; 8:13 *auscultant te* (Vulg. *auscultant*); Gal. 5:24 *Qui enim sunt Christi* for
*Qui autem*; 1 Cor. 13:3 *charitatem autem non habeam* for *non habuero*; Ps. 56:12
*super omnem terram* for *in omnem terram*; Eph. 4:8 with *Christus* added; Heb. 12:20
*Quia si bestia* for *Et si bestia*; Matt. 25:21 *Euge, serve bone, fidelis* (Vulg.
*bone et fidelis*) and *supra multa* for *super multa*; Josh. 1:8 at 0628A, a free
citation (*Liber legis non recedat de ore tuo, meditare in eo die ac nocte*) against
Vulg. *Non recedat volumen legis hujus ab ore tuo, sed meditaberis in eo diebus ac
noctibus*; John 17:24 at 0626D, compressed to *Volo, Pater, ut ubi ego sum et illi sint
mecum*; and 1 Cor. 13:12 at 0624B, paraphrased inside guillemets as *ut jam non in
aenigmate per specula, sed facie ad faciem videat*.

**Migne's own citation labels left untouched** (never corrected in the text, per the
standing rule): `[n: (I Cor. XI)]` at 0625C points to 1 Cor. 13:3; `[n: (Joan. I)]` at
0626D points to John 17:24; `[n: (Marc. XVI)]` at 0627C is attached to a sentence
introduced *Hinc Lucas ait*; `[n: (Deut. XXXII)]` at 0628C points to Deut. 33:2.
