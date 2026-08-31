# Richard of St Victor (attrib.), *Explicatio in Cantica canticorum* (PL 196, 0405A–0524A) — work-wide conventions

Translated 2026-08-17 by **ten Opus agents over 48 chunks** (50,355 Latin words), in
two rounds of six and four, each range logging to its own `cruces-NNNN.md`. **Those
ten files are the record and are unabridged; this file is the merge.** It exists
because a work split across ten agents who cannot see one another will drift on its
load-bearing vocabulary, and reconciling that is a required pipeline step
(`translation-runbook.md` step 4), not a tidy-up. Concatenating is the easy half.

Work totals: **46 `[var:]` · 40 `[sic:]` · 20 `[cj:]` · 1 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[f:]` · 183 `[n:]`** (183 in the Latin twins — exact parity).
`verify-english.mjs` clean at 48/48: columns, notes and sections aligned, no
duplicate paragraphs. EN/LA word ratio **1.49** work-wide (75,097 / 50,355).
Structure: PROLOGUS + **CAPUT I–XLII**. Zero guillemets in the whole work, both
languages.

---

## ⭐⭐ THE PLATE READ, 2026-08-31 — ALL 86 `[sic:]`/`[var:]` MARKERS CARRIED TO MIGNE'S PAGE

`node scripts/plate-gate.mjs 11550` was failing on **every marker in the work**. All 86 have now
been read at the plate by four readers working in parallel; `data/plate-reads.json` records the nine
column ranges they covered. **The gate is clean.**

**Witness and map.** The on-disk archive.org Google scan `patrologiaecurs104unkngoog`
(`raw/scans/pl196/`), **PDF page = (column + 41) / 2**, calibrated against the printed corner
numbers and the running head *EXPLICATIO IN CANTICA CANTIC.*, re-checked at least four times inside
each reader's range. **Second witness** where our copy clips the margin — and on this stretch it
clips them systematically, 5–9 characters off the start of every line of the left-hand column on
pp. 259–265: **archive.org `patrologiaecursu0196mign`**, one page image per HTTP request,
`https://archive.org/download/patrologiaecursu0196mign/page/n<N>.jpg`, **leaf n = (column + 43) / 2**,
calibrated at n260 = cols 477/478.

**Result: 60 CONFIRMED, 26 WITHDRAWN.** Every `[var:]` in the work holds — Migne really does print
*Sapientes intelligentiam abscondent*, *Deus a Libano veniet*, *per noctem* singular, *fluent*,
*argumentum* for *argentum*, and the rest. The surviving `[sic:]` are genuine plate defects and
stand: *diliculum* (0420D), *id* and *ac* (0423B), *Pigmen* (0431C), *Ex* (0447B), *possis* and
*benegnitas* (0457C), *dilectis* (0467B), *odotem* (0474C), *ad omnibus* (0477B), *decora* (0478C),
*exhibui se* (0480D), *ipse* (0492A), *emoliescunt* (0506C). The other **26 were Corpus Corporum's
corruption** — every one of them a `[sic:]`, so the work's 46 `[var:]` came through untouched — all
patched in `data/tei-patches/11550.json`, the work re-chunked (48 chunks, no boundary moved), and
the English corrected.

⚠ **One of the 26 was nearly missed, and the way it surfaced is worth keeping.** `0452A
*hos a tendit*` was dispatched to its reader with the other 21 markers in its range and came back
**unreported** — the only marker of 240 across both works that a reader silently dropped. It was
caught by reconciling the *surviving* marker list against the reports (15 `[sic:]` standing, 14
accounted for) and then read separately: the plate prints *hos **attendit*** as two words, and
prints *agentes attendit* solid again lower in the same column. **A reader's silence is not a
verdict; the arithmetic is what caught it.**

### ⛔⛔ THE HEADLINE FINDING: *Fons nortorum* IS NOT MIGNE'S. §2 BELOW IS WRONG ABOUT IT.

§2 opens by calling the lemma of CAPUT XXX "the range's principal defect" and builds the strongest
case in the whole work for it: dense internal corroboration (*hortus* set correctly fourteen times
in the neighbouring chunk alone) **and** an exact corpus control (*Fons hortorum* in 61 of the
5,276 PL TEI files, `nortorum` in **one — this file, this site**).

**The plate prints `Fons hortorum`.** p.266, col. 0491A, corners 491/492 verified. Every piece of
that evidence was sound about the *existence* of a defect and **silent about whose it was**, and the
answer was ours: an h read as an n, in a display-weight lemma at the head of a chapter.

⭐ **This is the cleanest demonstration the project has of the rule in
`reference_plate-read-triage`** — *for a non-word, frequency is decisive that an error exists, never
whose it is* — and §2 explicitly names corpus-grepping "the fleet's default" method for confirming a
`[sic:]`. It is a good method for finding candidates and **it cannot attribute one.** Of the seven
markers §2 lists as "confirmed *unique to this file, this site*", the plate withdrew four
(*emavi*, *ordor*, *signarus*, *terestrem*) and upheld two (*emoliescunt* is Migne's, so is
*Pigmen*); *comprenhendere* was ours as well. **A uniqueness result was right about half the time.**

⚑ And the one marker §2 honestly flagged as **weaker than the rest — *desirabilis* at 0520C, six
occurrences across six files — was also Corpus Corporum's.** The self-doubt was well placed; the
confidence was not.

### The mirror pair at 0451C — why frequency cannot settle this class

Within eleven lines of one column the plate does both things at once. At 0451C Migne prints
*experitur **eum** quaerere* and Corpus Corporum gives *cum* — a false `[sic:]`, now withdrawn.
Eleven lines later Migne prints *videbit **cum** sicuti est*, a real plate defect, and Corpus
Corporum silently repairs it to *eum*. **One page, one letter-pair, one corruption and one
undocumented repair in opposite directions.** No frequency test, and no collation against a
scriptural witness, can tell those apart. Only the plate can.

### The split-type list did not survive either

§2 lists four Pattern 10 "split type, carried whole" sites. **Three of the four are ours** —
`hos a tendit` → **attendit** (0452A), `nox a` → **noxia** (0510C), `pot isset` → **potuisset**
(0480D). Only `exhibui se` is Migne's. (The fourth site §2 names, `in perfectione` at 0420D, carries
no marker and was not read.)

### The split-type pair at 0480D came apart

§2 lists `pot isset` and `exhibui se` together as one clause carrying two Pattern 10 defects. **They
are not the same kind of thing.** The plate prints **potuisset** solid — that half was ours — and it
really does print **exhibui se** with the space. The `[sic:]` on the second stands; the first is
withdrawn.

### The 25 withdrawn

| col | ours | Migne prints |
|---|---|---|
| 0406C | *homine* | **homines** |
| 0420D | *exignum* | **exiguum** |
| 0427B | *vineunt* | **vincunt** |
| 0427D | *Die* | **Dic** |
| 0429C | *aceedit* | **accedit** |
| 0441A | *rectractant* | **retractant** |
| 0444D | *rebeus* | **rubeus** |
| 0451C | *cum* | **eum** |
| 0452A | *hos a tendit* | **hos attendit** |
| 0465C | *efficians* | **efficiens** |
| 0471B | *erga cum* | **erga eum** |
| 0472B | *inquitatis* | **iniquitatis** |
| 0480C | *interveveniat* | **interveniat** |
| 0480D | *pot isset* | **potuisset** |
| 0485A | *emavi* | **amavi** (second witness) |
| 0486D | *ordor* | **odor** |
| 0489A | *signarus* | **signatus** |
| 0490C | *quis* | **quia** |
| 0490D | *terestrem* | **terrestrem** |
| 0491A | *nortorum* | **hortorum** |
| 0491B | *exerescere* | **excrescere** |
| 0495C | *acquisitio* | **acquisito** |
| 0499C | *egitur* | **legitur** |
| 0510C | *nox a* | **noxia** |
| 0519D | *comprenhendere* | **comprehendere** |
| 0520C | *desirabilis* | **desiderabilis** |

### ⬜ OPEN FOR WILSON — the *canimus* / *caminus* `[cj:]` at 0436C rests on a false premise

`cruces-0010.md` calls this "the clearest Pattern 18 site in the range", and its argument is that
Richard's *ibi **canimus*** must be a defect for *caminus* **because the Isaiah proof text he quotes
nine words later prints *caminus***.

**The plate prints *canimus* in BOTH places** (p.239, col. 0436D, verified at 8×: three minims and a
dot, not four). Our Latin's *caminus* in the proof text is Corpus Corporum's own silent emendation
toward the Vulgate.

⚑ **Nothing here is decided, and nothing has been changed.** The `[cj:]` and the `[var:]` both stand
as written, and the Latin at 0436D is left carrying Corpus Corporum's *caminus*. But the reasoning
that supports them is now known to be false, and re-deciding it means choosing between three live
readings of a clause that does not construe either way — an editorial call, not a plate call. It is
flagged here so nothing further is built on the old premise.

### Migne's own type, where OUR text is the tidy one — recorded, NOT patched

Ten sites where Corpus Corporum has silently normalised a genuine Migne misprint. Listed for the
record; patching them would put the defect back and require a fresh `[sic:]` for each, which is a
new public claim and a separate decision.

*veniemns* for *veniemus*, *diligit* for *diliget*, and *Chistum* for *Christum* (0422B) · *vicentes*
for *vincentes* (0427B) · *labora* for *laborat* (0427D) · *orum* for *horum* (0442C) · *unusque* for
*unusquisque* (0447B) · *gratulatur* for *gratulantur* (0474C) · *menbra* for *membra* (0476B) ·
*sit* for *sic* (0480D) · *acipi* for *accipi* and *plenisssima* (0503C, 0511C) · *venter mens* for
*venter meus* (0503C) · *Invenerunt ne* for *Invenerunt me* (0507B).

⚑ **0489A is worth a separate look:** the plate cites Job 29:19 as ***super* aquas** there and as
***secus* aquas** at 0477B. §2 already records that this edition contradicts itself at Job 29:19;
the plate confirms it does so in Migne's own type at both sites.

### Foot-of-page apparatus: a checked zero across 49 of the work's 60 pages

Every reader inspected the full page width including the foot band. **No numbered *Forte*
conjectures and no asterisk notes anywhere.** Recorded in `data/plate-notes/coverage.json` as
coverage **`"spot"`**, not `"full"`, because eleven pages were never rendered: it licenses shipping
without `[cn:]` recovery and does **not** license the claim that this work has no apparatus.

---

## §1 · WORK-WIDE CONVENTIONS — RULED AND APPLIED. DO NOT RE-DECIDE.

Set down with their reasons so a later sweep does not churn them, and so a reader can
tell a considered choice from an accident.

**The diminutive is load-bearing.** *lectulus* = **"little bed"**, *lectus* = **"bed"**,
everywhere, because the exposition argues the point outright twice — chunk 0002's
*"Et non in lecto, sed in lectulo, quia quies a talibus habita exigua est, et angusta"*
and 0038B's *"nec tam lectus quam lectulus nominatur"*. An English that says "bed" for
both makes Richard's argument say nothing. Held at all three sites the Latin prints
it (0002, 0012, 0013), including **"Solomon's little bed"** at 0012, where the oddity
in English *is* the argument. Same reasoning: *adolescentulae* = "young maidens".

**Bride and Bridegroom.** *sponsa* = the bride · *sponsus* = the Bridegroom
(capitalized: he is Christ throughout) · *dilectus* = the beloved · *amica mea* = my
love. *Canticum canticorum* = "the Song of Songs" against plain *canticum* =
"canticle".

***quies* splits by sense, and the split is in the Latin.** **"rest"** where the sense
is eschatological (CAPUT X's rest of the blessed; 0521A's *quiesce post laborem*),
**"stillness"** where it is the mind's contemplative quiet (0521A's *In sinistra
quievisti*, eight words later). Two agents hit this seam independently before it was
ruled — 0007 @0421C and CAPUT X — which is why it is a distinction and not drift.
*vacare* = to be at leisure/free.

***ferculum* stands in italic Latin at every occurrence** (0016 ×6, 0038 ×4, 0047).
Migne's Cant. 3:9 matches the Vulgate exactly, so this was purely an English question —
and Richard hangs **two incompatible glosses** on the word: *quae pascit et reficit*
(the dish that feeds, which the first half of CAPUT XVI runs on) and *ferculum a
ferendo, quia fertur de loco ad locum* (the litter that is carried). No English word
keeps both hooks, so both reach the reader in his own words. **Decided from this work's
double gloss; 10804 was deliberately not followed as an authority** (`translation-style.md`
§ The Song of Songs — each commentary stands on its own). Same reasoning:
*reclinatorium* = "reclining-place" (the *reclinat se et requiescit* hook runs a full
column), and the *Dei lectio* / *Dei electio* wordplay and *pacatae* / *pacificatae*
contrast (0005 — Richard says *He does not say pacatae … but pacificatae*) stay in Latin,
because the sentence is *about* the Latin words.

***emissiones* = "sendings-forth"** (0034), never Douay's "emissions": Migne re-quotes
it with the verb three times — *Emittit enim cyprum*, *Emissiones quoque ejus*, *Hanc
paradisum emittit hortus* — so the hook must survive in English.

**Two pomegranates, two words.** *malum punicum* = **"pomegranate"** · *malogranatum* =
**"granate apple"**, which keeps the etymology Richard states (*grana … whence also it
is called a granate apple*). Checked across 0024 and 0034: the mapping holds and is not
drift.

**⚑ *candidatio* is TRANSLATED — "whitening" — and this REVERSES a call made mid-flight.**
The round-1 ratification kept it in Latin on one agent's report; the merge overturned it
on the evidence of all five sites. Every one stands beside *candidus* / *candet* /
*candidat* (0035: *candidatio* … *qui candidus est* · 0045: *nec tantum est candidus, sed
etiam candidatio. Candidat enim*), and English **white / whiten / whitening shares that
root** — so §Song case 2's condition for keeping Latin (no English word shares the root
the gloss needs) is simply not met. Swept at 0016, 0031, 0035, 0045; 0029 already had it.
⚠ **Two of those sites had also added italics the plate does not print** (0031, 0045) —
fixed in the same edit.

**Watchmen and keepers stay distinct** — *vigiles* / *custodes*, because 0507B prints
*vigiles qui circumierunt* where Richard re-quotes *custodes* on the same page.
*vigilare* splits the way both agents independently made it split: **"waketh"** where it
renders Cant. 5:2's lemma (*Ego dormio, et cor meum vigilat*), **"keeps watch"** in the
surrounding prose.

**Further fixed vocabulary:** *pietas* = tenderness (separable from *misericordia* =
mercy and from *compassio*) · *fortium* = "of the strong", never Douay's "valiant" (the
*fortitudo* hook runs through chs. XXI–XXII) · *propugnacula* = bulwarks · *clypei* =
shields · *hinnuli capreae* = "fawns of a roe", mother and young kept distinct ·
*discretio* = discretion · *notitia* = acquaintance · *vitta* = fillet ·
*pigmentarius* = perfumer, *pigmentum* = pigment · *mammae* = paps against *ubera* =
breasts (Cant. 4:10 sets both side by side and 0033 glosses each in turn) · *species*
carries both "beauty" (the *speciosa* chain, 0516–0517) and "by sight" (*per speciem* vs
*per fidem*, 0521A) — both are in the Latin; a sweep must not flatten them.

**Spelling normalized to the corpus's own house form** (US: *savor*, *odor*, *labor*,
*fervor*, *honor* — corpus counts run 66/33, 366/189, 478/159 in that direction).
13 sites in chunks 0016–0019, the only range that used *-our*.

**Heads follow the plate's numeral form**: `CAPUT PRIMUM` → "CHAPTER ONE.", every other
chapter a numeral → "CHAPTER XVI.". Both label and italic summary are translated
(11064 precedent).

---

## §2 · WHAT THE PLATE ITSELF GETS WRONG — the finds that shape the text

**The lemma of CAPUT XXX is defective: Migne prints `Fons nortorum` for Cant. 4:15's
*Fons hortorum*** (0035, @0491B). Marked `[sic: nortorum]` with "of gardens" standing
outside the quarantine per 7a⁗-b, so the fountain of the whole chapter keeps its garden.
Corroboration is dense and internal — *hortus* is set correctly 14× in 0034 alone, in
0035's own *Isti sunt horti*, and in both 0036 and 0037's lemmata — and the corpus
control is exact: across the 5,276-file PL TEI, `Fons hortorum` occurs in **61 files**
and `nortorum` in **one: this file, this site.**

**`## CAPUT XXXII` prints with NO closing period** (0037), where all 41 other heads carry
one. Pattern 8: preserved, in both languages. Not a chunker artifact — checked on the
plate's own text.

**Split type, carried whole** (Pattern 10 + 7a⁗-b), each with the sense supplied in plain
words outside the marker: `hos a tendit` = *attendit* (0020, self-corroborated three
times in the same column — *Qui enim bene agentes attendit*, *semper bonos attendunt*,
*quales attendit*) · `nox a` = *noxia* (0510C) · `pot isset` = *potuisset* and
`exhibui se` = *exhibuisse* in one clause (0480D — quarantining both removes the clause's
only finite verb *and* its only infinitive) · `in perfectione` = *imperfectione* (0420D),
which is the dangerous shape: **a word-division defect that lands as a perfectly valid
phrase**, inside a paragraph entirely about the man's imperfection, invisible to every
mechanical test.

**`[sic:]` confirmed by the corpus, not by ear.** The method (from 11632, now the fleet's
default): grep the full PL TEI before marking. Confirmed *unique to this file, this site*
— *emavi*, *ordor*, *signarus*, *terestrem*, *emoliescunt*, *comprenhendere*, and
`Pigmen` at 0431C (861 `pigment-` forms corpus-wide against one bare `pigmen`).
⚠ **One marker is honestly weaker and says so: *desirabilis* (0520C)** — 6 occurrences
across 6 files, so not unique to this plate. It is marked because it fails Pattern 9's
actual test (haplography, not an attested orthography) with *desiderabilis* printed
correctly four times in the same sentence. Dropping that one marker changes nothing else.

**The edition contradicts itself, and it is transcribed as printed both times:** Job 29:19
diverges *differently* at two sites (0477B *radix eorum … secus aquas*, 0489A *super
aquas*); *illius* / *ejus* alternate inside one verse of Cant. 5:15 (0515A vs 0518B).

**A clause-length dittography** across the 0470D–0471A column break, `[d:]` placed on the
**first** occurrence because the second carries the grammar.

---

## §3 · SCRIPTURE: 46 `[var:]`, AND THE RULE THAT DECIDES THEM

**The threshold, ruled at the round-1 merge and applied work-wide: `[var:]` fires on a
continuous quotation functioning as a proof-text or as the thing being glossed — whether
or not italics or an `[n:]` mark it — when the divergence changes the sense or a gloss
depends on it. It never fires on pronoun-equivalence, on spelling, or on an allusive
echo.** Worked pair: *per noctem* for *per noctes* **fires** (a chapter-long exposition of
one night hangs on the singular); *tenui illum* for *tenui eum* **does not** (same
referent, nothing hangs on it). Spelling is Pattern 9: *Hierusalem*, *coelorum*,
*genitricis*, *caprae/capreae* — no markers. ⚑ **Ps. 26:4 at 0489A was promoted at the
merge** (*voluntatem* for *voluptatem*): the reading changes the sense and Richard's gloss
*per cujus impletionem* depends on it, and it was declined only for sitting in
unitalicized prose — a precondition **Pattern 14 does not contain.** Its founding case
(10083, Hosea 1:4) was scripture introduced as proof, not a formatted lemma.

**The divergences that would have destroyed an argument if a remembered Bible had been
supplied** — this is what the per-range naming of lemma words bought:

- **Jn 14:23 as *mandata mea servabit*** for *sermonem meum servabit* (0422B). Richard's
  gloss quotes *mandata* on both sides of it; "will keep my word" leaves the proof-text
  proving nothing.
- **Cant. 3:11's *in die solemnitatis et laetitiae*** for *in die desponsationis illius*
  (0445D). He expounds **both** readings in sequence — the printed one as the Ascension,
  then the Vulgate form outright at 0447A for the espousals. A conformed lemma collapses
  a two-part exposition.
- **Hab. 3:3 in an LXX form**, *de monte umbroso et condenso* (0407A), whose *condensus*
  and *umbrosus* the next sentence glosses.
- **Cant. 3:1's singular *per noctem*** (0410B), carrying the whole chapter.
- **Cant. 4:16's *fluent* for *fluant*** (0493D), jussive to future indicative, with four
  of Richard's own glosses reading it as consequence. ⭐ **11632 fired on this same clause
  for the same reason from its own plate** — independent confirmation the threshold is set
  right.
- **Cant. 5:1 lacking *et bibite*** (0497D) — and the dropped verb is the one whose gloss
  occupies the chapter's whole second half (*reficit et potat … inebriat*).
- **Ps. 41:3's *ad Deum fontem vivum*** for *fortem* (0511C), the gloss drawn straight
  from the divergent word (*de illo fonte vivo … ipsum fontem sitiunt*).
- **Eph. 4:26 turned from precept to statement** (0481B), *sol non occidit … ejus* for the
  jussive *occidat … vestram* — and Richard's *id est Christus* only works on the
  statement.
- **The work's last lemma diverges** (0522B): *Quae est ista quae ascendit, et transiens
  deserta?* against Vulg. 8:5's *de deserto* — with **three forms now in evidence**, since
  this work itself prints *per desertum* at 0010 for Cant. 3:6.

**Silence is recorded as evidence.** Every named lemma checked and found to agree is
itemised in its range's file rather than passed over, so a later reader can tell a checked
agreement from an unchecked one. ⚠ And per Pattern 14's own note, the absence of a
`[var:]` in the 102 earlier works is **not** evidence of agreement.

---

## §4 · `[cj:]` — 20 APPLIED, AND A CENSUS OF WHAT WAS DECLINED

The bar (Wilson, 2026-08-15) glosses only where the printed word is real and the faithful
English misleads **and** the wrong word is a **negation or a correlative**. Applied here
at 20 sites, the clearest being: *canimus* for *caminus* (0436C — the blessed *sing* where
the contrast is a little fire here against a **furnace** there, and Migne's own proof-text
prints *caminus* nine words later) · *vitae* for *vittae* (0461D) · *se* for *si* (0461B,
a conjunction governing a whole protasis) · *qua* for *quam* in a *non tam … quam*
correlative (0498D) · *munditiae* for *immunditiae* (0484A, "the stench of cleanness" —
⚠ this one turns on treating a lost privative *im-* as a negation, and its entry says so,
so the class can be withdrawn without argument) · an **intruded** negation at 0475C/D,
flatly contradicted by the next sentence (*Non possunt haec ante te silere*) · *ignoscit*
for *ignescit*, three sites together (0004, 0040 ×2 — withdraw them as one or not at all).

**Declined, rendered literally, and named for the corpus census** (`WITHDRAWN-NET.md`'s
targets): *excusso jam tempore* for *tepore* (0448D — **the strongest**: this work prints
*tepor* / *teporis* / *tepidus* six times elsewhere, and "time shaken off" parallels
nothing while lukewarmness shaken off parallels the weakened passions in the same clause) ·
*fabulantur* for *tribulantur* (0498C, "while the good tell tales" — a confident wrong
reading rather than a visible hole) · *ascendit* for *accendit* (0456C/0457C) · *instat*
for *inflat* (0457A) · *argumentum* for *argentum* (0498A, all 7 corpus witnesses read
*argentum*) · *effectum* for *affectum* (0421B) · *spem* for *sepem* (0451C) · *gemina*
for *germina* (0487D) · *ad indigenas* for *indigentes* (0515A) · *accessit* for *recessit*
(0518D) · *a toto* for *auro* (0522D) · *areolam* for *aureolam* (0512C) · *discere* for
*deserere* (0430B) · *voluptatum* for *voluntatum* (0450D) · *Sponsus … non dormit* at
0502B, where every following pronoun is feminine and the lemma is the bride's, so the
plate makes Christ the sleepless one and then prays for *her*.

⚠ **CAPUT IX's head prints *De spirituali assensu animae*** where the chapter expounds
*quae ascendit* throughout — very likely *ascensu*. Declined: it sits inside a `## ` head,
and a structural label does not meet Pattern 18's bar. If it is ever glossed, 0010 and 0011
change together.

---

## §5 · CAPUT XLII IS RHYMED VERSE, PRINTED AS PROSE

Not scouted, found in the text: the final chapter is a rhymed Marian *laus* —
*operta · portendit · referta*, *Holoferni · spernis · sternis*, *ferus · Assuerus* — and
Migne prints it as continuous prose with no lineation.

- **It is NOT lineated by us.** The plate's layout governs, as everywhere else in this
  corpus. The rhyme is recorded here and belongs in the "On this text" note, not in a
  silent re-typesetting. ⬜ If verse in this corpus is ever to be lineated, that is a
  conventions decision above this work's level, and it would be a rebuild, not a
  re-translation.
- The rhyme **explains** two things that would otherwise look like defects: the chapter's
  ellipses, and *Ave Maria … tecum sit Deus* for *Dominus tecum* — a **rhyme-driven**
  divergence, correctly declined as a `[var:]` because it is a rhyme line, not a
  proof-text.
- ⚠ **Two Pattern 8 defects of OURS were found here and fixed at the merge**: a supplied
  `?` and a supplied `!` where Migne prints plain commas (*mulier Hebraea, quid Judaeos
  Aman spernis, Esther est Judaea*). Caught by `verify-english`'s question-mark parity
  check — the same check that caught a vanished 46-word sentence in 11632. The work now
  has **zero** sentence-type punctuation deltas against its Latin twin across all 48
  chunks.
- ✅ ***Papae* (0522B) STANDS in italic Latin — ruled by Wilson, 2026-08-17.** Every English
  equivalent ("Wonderful!", "Ha!", "Bless me!") guesses at the tone of a rhymed poem, and the
  guess would be invisible to the reader as ours. **Do not re-open it**, and do not
  translate it in a later sweep.
- The coda reuses the commentary's own vocabulary (*singulare ferculum*, *reclinatorium*,
  *turris eburnea*). Recorded as **weak**: these are standard Marian-Song commonplaces and
  are **not** evidence about the attribution question.

---

## §6 · OPEN — nothing here blocks the ship

**Wanting the plate, not our TEI** (no `[cj:]` fired, rendered literally):
- **0406C `quasi ex terra homines esse debemus`**, which says the opposite of the next two
  sentences. Two repairs fit — `quasi extra terram` (matching the same chunk's *quasi extra
  corpus fieri*) or a dropped *non* — and neither is secure.
- **0517C `sublimata est sicut Christus, et si tantum quantum Christus`** — no apodosis, and
  as printed it concedes exactly what the paragraph's last sentence denies (*Sublimis igitur
  Maria, sed sublimior Christus*). A dropped *non* makes it construe. **The crux most
  wanting a second reader**; it is the polarity read's business.
- **0511D `Unde juxta fluenta haec resident, quia hanc quietem mentis nondum habent`** —
  two sentences after Richard equates sitting with stillness, the page says the imperfect
  do sit. *juxta* may itself be the concession.

**Wanting an apparatus we do not have:**
- **0443A** *Populus meus saturavit me vocibus, implevit me odoramentis*, introduced as
  scripture, uncited, answering to no known reading (Isa. 43:23–24 is negative in both
  limbs). No `[var:]`: Pattern 14 needs a received reading to name.
- **0499C** *Cum sapientia bibe vinum* (`Eccli. IX`) — occurs **once in the entire PL TEI**,
  here. Needs a Vetus Latina apparatus.

**Will not construe, rendered as closely as the printed words allow:** 0461A *Si vero imo…* ·
0486B/C, a 40-word run with no governing verb · 0472A *omnis armatura fortium esse
adjungitur*.

**For the indexer, reproduced verbatim as required — misattributed `[n:]` citations:**
`(Psal. XLII)` for Isa. 42:15 (0425A) · `(Job I)` for Job 18:10 (0416C) · `(Job LVI)` for
Job 36:16 · `(II Par. XVII)` for 2 Par. 20 · `(I Machab. III)` for 1 Macc. 5 ·
`(Cant. IV)` at 0447D for words that are Cant. 1:15's · `(Cant. III)` at 0522B for Cant.
8:5's. ⚠ Weigh each against known false positive 2 before any `citation-corrections.json`
entry: a correction applied upstream of anaphora makes a following *Ibid.* resolve wrong.

**Protected from future sweeps, not defects:** *rependi* at 0484B is the gerund of *repere*,
"of creeping", not a form of *rependere* · *vasa … fuerit*'s number mismatch at 0479B is
Pattern 9 · the 0523A → 0524A band gap is known false positive 1, and the text construes
across the anchor.

---

## §7 · THE BLIND POLARITY READ (step 4a) — 6 readers, 48 chunks, 8 OUR-SIDE DEFECTS FIXED

Recorded: `--chunks 48 --sites 15 --ours 8`. Six Opus readers, eight chunks each, **none
permitted to open any cruces file** (the 2026-07-28 finding: every agent given the cruces
returned "all already logged" and found nothing, while blind readers on the same works
found four live defects). Every chunk was named clean or with findings, and every rejected
candidate was named with its reason — the discipline that distinguishes a report from a
reader who never read.

**The eight our-side defects, all fixed. Not one was visible to any automated check, and
`verify-english` had already passed the work.**

1. **0502D — agency reversed.** *immaculatam, id est a peccatorum sordibus **a se** mundatam*
   was "cleansed **by him**". *a se* is reflexive to the bride, the subject of the whole
   gloss-series; "by him" transferred the cleansing to Christ and **conformed the gloss to
   expected doctrine.** The archetype of the class: it reads better than the truth.
2. **0428C — separation read as location.** *quibus se extenuari vel implicari **a
   perficiendo*** was "entangled **in** the perfecting of herself" — the opposite motion,
   and it dissolved the reason she withdraws at all.
3. **0439B — plural verb given a singular subject.** *quanto spiritualius **eos expugnant***
   was "it storms them", making faith the aggressor in a sentence whose point is that the
   enemy concentrates his fire on the shield of faith.
4. **0491B — a `[sic:]` swallowed the clause's only verb.** *ad proprium **exerescere***
   left an English infinitive with no predicate between two translated infinitives. Now
   "to grow up [sic: *exerescere*]", the sense fixed by *semper excrescit* six lines later.
5. **0490D — a `[sic:]` swallowed half an antithesis.** *Primi parentes **terestrem**
   habebant paradisum* left the reader "a paradise … the heavenly one after it", opposing
   nothing. Now "an earthly [sic: *terestrem*] paradise".
6. **0493A — a feminine relative mis-bound.** *Fide mulier tetigit **quae retro accessit***
   made Christ the one approaching from behind, and then made *him* the one not pressing
   bodily.
7. **0502B–C — the person switched mid-run, unmarked.** The plate prints *Sponsus* where the
   subject is plainly the bride (*pro ipsa*, two clauses later, is feminine). Our English
   carried "he" for four clauses and then became "she" with no marker, so a reader met two
   people inside one sentence-run **and could not tell which was Migne and which was us.**
   The printed *Sponsus* is now carried throughout and the contradiction is visible.
8. **0457C — four co-subjects collapsed to one.** *hanc plenius ascendit cordis levitas,
   naturalis benegnitas, prosperitas, vel orta aliqua causa laetitiae* promoted one subject
   and stranded three after a colon.

**Two further classes the read turned up, both ours, both fixed:**

- ⚑ **Chapter heads had drifted three ways in English while the Latin was uniform** —
  `CHAPTER NINE` / `TEN` / `ELEVEN` against numerals everywhere else, and chapter XI's
  summary was "caution" in 0014 and "wariness" in 0015. **Heads are an indexed field**
  (CLAUDE.md rule 9), so a chapter spanning two chunks would have indexed under two
  different English titles. ⚠ **The lesson: checking that the LATIN heads are uniform does
  not check ours.** All five split chapters now match exactly; `CHAPTER ONE` is the only
  spelled-out head, because `CAPUT PRIMUM` is the only spelled-out Latin one.
- ⚑ **Eight undeclared bare-bracket supplies** (`[think]`, `[men]`, `[is occupied]`,
  `[do they suffer]`, `[each]`, `[it]`, `[and]`, `[seedlings]`). **`scan-raw-markers.mjs`
  scans for 10 declared marker forms only**, so an undeclared bracket passes it and reaches
  the reader as literal brackets on the built page — the failure that hit PG pages twice.
  These were grammatical ellipsis supplies, not editorial content, so they are now plain
  text. ⬜ If a supply is ever genuinely editorial, it needs `[ed:]`, not naked brackets.

**Left unrepaired, deliberately, and named here so the next reader starts ahead:**
*infractus* at 0468B (from *infringo* = "broken", against our "unbroken" — the *se
fregerit* / *infractus* figure nine words apart is the argument, and the corpus prints 37
*infractus* to weigh; **wants the plate**) · the undisclosed *quam* → *quae* at 0483C (a
conjecture adopted silently, below Pattern 18's bar, so disclosure belongs here not in a
marker) · *experte* for *ex parte* at 0522A, where 1 Cor 13:12's *perfecte* / *ex parte*
antithesis is what the clause exists to make · *Si vero imo* at 0461A, half-translated
with no cue that the plate is broken.

**Migne-side cruces the read added:** **0517C prints *Ecclesia triumphans* where every
predicate in the sentence denies triumph** (*inferior est*, *defectum patitur*, *non
aequaliter vestiri*) — the moon under Mary's feet is the Church *militans*, and Richard
prints the militans/triumphans pair himself at 0512C · 0423C, where *cognito periculo suo
hanc recipit* credits the negligent man with receiving the grace, against the next
sentence's *ne in vacuum hanc recipiat* · 0459D–0460A, where the protasis names *levis /
remissus* but the apodosis needs a severe-vs-slack pair.

**Positive evidence, recorded because absence of a finding must be distinguishable from
absence of a reading:** across all 48 chunks **not one dropped or intrusive negation
particle was found on our side.** The 7a″ sweep checked over sixty lemmata individually and
found **no conformed lemma anywhere in the work** — including four places where the pull
toward the remembered English is strongest and was resisted: Matt. 23:24 keeps Migne's
reversed camel-then-gnat order · 1 John 3:2 keeps the printed singular *similis ei erit*
against the Vulgate's *similes ei erimus* · 3 Kings 19:12 keeps *aurae levis* against the
familiar *tenuis* · Ps. 33:9 keeps the adapted indicative *Gustat*. **In the genre where
7a″ predicts conformation as the dominant failure, this work has none** — which is what
naming the lemma words per range bought.
