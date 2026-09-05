# *Glossa ordinaria*, **Liber Genesis** — cruces, chunks 0024–0030 (PL 113, 0133C–0147C)

Stint 6 of 8950. Seven chunks, 5,994 Latin body words → 8,245 English (1.38×).
`verify-english.mjs` reports **no error on 0024–0030**: column anchors, `[n:]` notes,
guillemets, italics and question marks all 1:1 with the Latin twins. (Its `VERIFY FAILED` is
the unwritten chunks of peer ranges, nothing in mine.)

**Apparatus fired: 16 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
**Every one of the sixteen stands on a column I read at the plate myself** (pp. 72–79, cols
0133–0148, corner numbers read first on all eight). The reads are recorded in
`data/briefs/8950-PLATE-READS-0024.json` for the orchestrator to merge into
`data/plate-reads.json` — **until that merge lands `plate-gate.mjs` reports fifteen of them as
standing on unread columns, which they do not** (0133D already passes on the 0019–0023 stint's
read of p. 72).

Counts, chunk by chunk (Latin = English in every case, body only):
guillemets `«`/`»` — 0024: 18/18 · 0025: 25/25 · 0026: 34/34 · 0027: 6/6 · **0028: 38/37** ·
0029: 2/2 · 0030: 37/37.
`[n:]` notes — 5 / 15 / 17 / 4 / 21 / 1 / 21. Question marks — 0 / 2 / 1 / 0 / 1 / 0 / 2.
Column anchors — 4 / 12 / 9 / 2 / 15 / 1 / 13.

---

## §0 · SPAN COUNT AGAINST THE BRIEF — **219 / 1 open-ended, EXACT, and checked span-for-span**

**My Latin carries 218 paired spans plus 1 open-ended = 219; the brief's header says
`219 spans, of which 1 OPEN-ENDED`.** Counted **paragraph-bounded**, per the launch instruction,
with `«[^«»]*»|\*[^*\n]+\*` run inside each paragraph and the unmatched-`«` residue counted
separately, so an unmatched delimiter cannot run forward across a paragraph break.

Per chunk (paired + italic / open-ended): 0024 **22**/0 · 0025 **35**/0 · 0026 **45**/0 ·
0027 **10**/0 · 0028 **49**/**1** · 0029 **4**/0 · 0030 **53**/0.

⛔ **The totals were not trusted on their own** — the 0004–0007 stint's false 215/215 is the
reason. I diffed my 219 against the brief's 219 **span for span**, normalized, and the two lists
are identical with no residue on either side. The only apparent differences were my own
extractor not stripping the `VERS. n-m.--` prefixes the brief prints, i.e. presentational.

⭐ **The open-ended span is MIGNE'S, confirmed at the plate.** 0141D
`« Si vobis spiritualia seminavimus, magnum est si nos carnalia vestra metamus.` — p. 76,
600 dpi: **the plate carries no closing `»` either.** It stays unclosed in the English
(Pattern 5 corollary). The brief's warning that the shown text may be SHORT of what Migne quotes
does not bite here: I read it at the line and the quotation ends exactly where the paragraph does.

⚠ **One inventory line describes a span Migne did not set.** At 0143C the brief lists a single
enormous span, `« Inclinata, etc. Quia passionum exercitia … sacrificium vespertinum. »`. **The
plate prints TWO spans there** — `« Inclinata, »` closes, and a fresh `»`-marked quotation opens
before *Elevatio manuum* — and our twin has lost both marks. The English mirrors the twin (marks
follow the twin, §1c), and the plate reading is filed as a pending patch. **This does not change
the count**, because the twin's run is closed; it does mean one of the 219 is a TEI artifact.

---

## §1 · CONVENTIONS — inherited unchanged, and the one this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not** re-opened, nor were the four earlier
stints of this work (`cruces-0000.md`, `-0004.md`, `-0008.md`, `-0012.md`), all of which I read
before drafting: `VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary lemma
is rendered as the phrase it stands for; sigla ride as ordinary `[n: …]` notes with Migne's own
internal spacing, contents unanglicized; the guillemets are the plate's, 1:1, and their contents
are Englished; `*usque ad*` → ***as far as***, with **no verb and no object ever supplied**; the
`*Historice / Allegorice / Mystice*` tags are translated inside their italic span; **no `[var:]`
on a quotation Migne labels himself** as a rival version; **words follow the plate, punctuation
follows the twin**; a Latin gloss giving the MEANING of a name is Englished inside its span, a
Latin word MENTIONED as a word is not; `usque ad` is decided per occurrence by the `etc.` splice
test.

### (a) ⭐ NEW — how a plate/twin WORD divergence is rendered, stated as a rule

Twelve sites in this range have the plate and the twin printing different words, which is far more
than any earlier stint of this work met at once. The English was set by one rule, uniformly, and it
is set out with every site in **`data/briefs/8950-PENDING-TEI-PATCHES-0024.md` §"The convention
this stint applied"**. In brief:

1. **Twin defective, plate clean → render the PLATE** (the locked rule's founding case). Five
   sites: *probare* (0137C), *haesitavit* (0138D), *praedicator* (0141C–D), *animale* (0145A),
   *quam* (0136C, no English exponent).
2. **Plate defective and its type CANNOT render in place** — a non-word, a form with no
   grammatical slot, a dropped word → **render the sense the type is defective for** (Pattern 7 as
   amended 2026-09-05), **with no marker**, because the `[sic:]` guard requires the twin to carry
   the type verbatim and the twin has been tidied. Eight sites: *sonorem* (0133C), *par quem*
   (0136D), *accdperat* (0137C), *incanationem* (0139C), *est.* for *etc.* (0140A), the dropped
   *sub* (0140C), *electorem* (0141A), *caanem* (0141C). **Precedent: the 0008–0011 stint's "four
   non-words whose SENSE the English renders."**
3. **Plate defective but its type DOES render in place** — a real word in a real slot → Pattern 7's
   main rule is untouched and the English renders **the plate's word**. **One site: `« plenius. »`
   at 0145A**, where the English reads *« more fully. »* against an argument that requires the bare
   *plenus*. That oddity on the page is the disclosure, and it is deliberate.
4. **Negation is the exception to (2).** Pattern 7a is unconditional, so at 0141B the plate's
   `non` is carried into the English even though our twin lacks it. §5.1.
5. **A form CARRIED untranslated follows the TWIN**, not the plate (`*seyr,*` at 0146C), because
   the English there *is* the Latin and a divergence would be indistinguishable from our own typo.
   A form that is TRANSLATED follows the plate.

⚑ **Why no marker fires at any of the twelve**, stated once: a `[sic:]` may only wrap type our
Latin twin carries, and in every case here the twin has been tidied; a `[cj:]` may only open on a
word Migne prints AND that our twin carries, and its form (`*printed*; read *conjectured*`) cannot
express a deletion. **Each of the eight sites in (2) is a `[sic:]` OWED**, markable the moment the
TEI patch lands. This is the 0008–0011 stint's finding reproduced exactly: *every plate defect in
this range is one our twin had already tidied away.*

### (b) `usque ad` — 21 formulas, 11 ordinary, 1 the verse's own words

**Formula (italic `*usque ad*`, immediately after an `etc.`), 21×**, all → `*as far as*`, no verb,
no object and no antecedent supplied anywhere: 0024 @0133D · 0025 @0136A, 0136D, 0137A ·
0026 @0139D ×3 · 0027 @0140A ×4 · 0028 @0140D, 0141A, 0142C ×2, 0143A, 0143C ·
0030 @0144C ×2, 0146A.

⛔ **Eleven ORDINARY, non-formula `usque ad`, none italic, none after an `etc.`, each rendered by
sense** (brief addendum D):

| col | Latin | English |
|---|---|---|
| 0138B | *de Geraris **usque ad** montem Moria* | "from Gerara as far as mount Moria" |
| 0138B | *ab Abraham **usque ad** Mosen* | "from Abraham to Moses" |
| 0138B | *a Mose **usque ad** Joannem* | "from Moses to John" |
| 0138B | *inde **usque ad** Dominum* | "thence to the Lord" |
| 0142A | *si non **usque ad** opera* | "if not so far as works" |
| 0142A | *tamen **usque ad** fidem suscipiendam* | "yet so far as the receiving of the faith" |
| 0143C | *passionem **usque ad** mortem* | "his passion … even unto death" |
| 0144A | *__usque ad__ thorum contemplationis perducitur* | "is brought to the couch of contemplation" |
| 0145B | *ab Euphrate **usque ad** mare Rubrum* | "from the Euphrates to the Red Sea" |
| 0145D | *extendens desertum **usque ad** mare Rubrum* | "stretching the desert as far as the Red Sea" |
| 0146C | *quod diu fuerunt **usque ad** regem Joram* | "which they were for a long time, until king Joram" |

⭐ **And one that is the LEMMA'S OWN WORDS, the 8967 col 0953C shape that must not be swept:**
0145C `« Habitavit autem ab Hevila **usque** Sur, quae respicit Aegyptum, »` — Gn 25:18 verbatim,
bare `usque` without `ad`, rendered **"from Hevila as far as Sur"**. It sits four lines from an
ordinary *usque ad* and eleven from a formula. **Said here explicitly, with the Latin that forced
it**, per the series brief's requirement.

### (c) The vocabulary axes — every instance, with the instrument checked before reporting

- **`gentes` / `gentilis` / `gentilitas` — 9 occurrences, and the instrument was checked first.**
  A raw `gent-` grep in this range also returns *gentem magnam* (0136C) and nothing spurious; there
  is no *indigentia*/*ducentorum* noise here, but the check was run.
  **Gentiles** where the *Judaei*/*gentes* opposition is live: 0134C *de **gentili** conversatione*
  ("out of Gentile converse", the `gentilis` rule added on 9000); 0138C *« plenitudo **gentium**
  intraret »* and *« ubi plenitudo **gentium** intraverit »* (Rom 11:25, set against *Israel* in the
  same sentence); 0138C *sacrificium crucis per **gentes** fuerit praedicatum*; 0147B *« dabitur
  **gentibus** »* (the whole gloss opposes *Judaicum populum*).
  **the Gentile world**: 0144A *Ecclesia ex **gentilitate** veniens*.
  **nation(s)** where the sense is plainly generic: 0136C *futurum in **gentem** magnam*;
  0146B *« Duae **gentes** »* and *__gentem__ quam propagavit Esau*; 0146D *« Duae **gentes** et duo
  populi »*.
  ⚠ **0146B–D reads as an inconsistency and is not one:** Gn 25:23's *Duae gentes* is the axis's
  generic exemplar shape (two peoples in one womb, expounded of Israel/Edom and then of
  vices/virtues) → **nations**; the *gentibus* of Mt 21:43 at 0147B is the typological opposition
  → **Gentiles**.
- **`natio` — ZERO in this range.** ⚑ Instrument checked before reporting: a raw `natio` grep
  returns **six** hits and every one is *incarnationem* (0139C ×2), *cognatione* (0140D, 0144A) or
  *praedestinatione* (0140D, 0144A). There is no `natio` here at all.
- **`turba` — ZERO.** No `turb-` of any kind, and no verb *turbare*, in the seven chunks.
  **`multitudo` ×1 → multitude** (0139A *in multitudine prophetarum*).
- **`daemonium` — ZERO. `diabolus` / `satanas` — ZERO.** ⚑ Checked with the pattern that does
  **not** miss *daemones/daemonum/daemone*; nothing.
- **`sacramentum` ×1 → sacraments** (0138A *quae portabat omnia **sacramenta*** — of the ass that
  bore them and knew them not). **`mysterium` ×3 → mystery** (0135C *prophetiae **mysterio**
  compulsa* and *Significabatur ergo hoc **mysterio***; 0143D *quanto Christi **mysteria**
  penetrat*). The two words stand five columns apart and were kept 1:1; **neither was ever
  rendered by the other's English.**
- **The commentator's own voice is not archaised**: *dicit / ait / aiunt / inquit* → "says / say",
  never *saith*. `-eth` forms appear **only** inside quoted scripture (Jo 7:37 *sitit* →
  "thirsteth"; Eph 5:29's *habuit* is a perfect and takes "hated"; Rom 12:3's *oportet* →
  "behoveth" inside the woven Pauline clause at 0141B) and in second-person singular address.
- **Pattern 17.** Singular → *thou*: 0133D Chrysostom to Abimelech (*Scias autem quod illius preces
  **tibi** vitam praebebunt* → "know **thou** … grant **thee** life"); 0135A *Unde cresce, et
  manducabis me* → "grow, and **thou** shalt eat me"; 0141A *voluntatem **tuam** persuasioni meae
  inclinem* and *Humilia saecularem facundiam* → "Humble **thy** worldly eloquence";
  0143D *Quem enim fructum habuisti tunc in illis in quibus nunc erubescis?* → "hadst **thou** …
  **thou** art now ashamed"; 0146A *Ne putes* → "Think not **thou**" (rendered "Think not").
  Plural → *you*: 0133D Mt 23:9 *« unus est enim Pater **vester** »*; 0137D Dt 13:3
  *« Tentat **vos** Deus **vester** »*; 0141C Rom 13:14 *« Carnis curam ne **feceritis** »*;
  0142A 2Cor 6:12 *« Non **angustiamini** in nobis, sed in visceribus **vestris** »*;
  0143C Lc 21:19 *« In patientia **vestra** possidebitis animas **vestras** »*;
  0147B Mt 21:43 *« Auferetur a **vobis** regnum Dei »*.

### (d) Heads — numerals mirror the plate

`CAPUT XX.` → `CHAPTER XX.` · `CAPUT XXI.` → `CHAPTER XXI.` · `CAPUT XXII.` → `CHAPTER XXII.` ·
`CAPUT XXIII.` → `CHAPTER XXIII.` · `CAPUT XXIV.` → `CHAPTER XXIV.` ·
`CAPUT XXIV. (cont.)` → `CHAPTER XXIV. (cont.)` · `CAPUT XXV.` → `CHAPTER XXV.` — numerals
throughout, per the corpus measurement (26 works `CHAPTER XIII.`, zero spelled forms above ONE).
All seven carry their terminal period on both sides.

### (e) Frontmatter copied VERBATIM from each Latin chunk, field order included

Every field in the Latin twin's own order, including the `words:` figures, which count the Latin.
Chunk 0029's `colFirst`/`colLast` are both `0144B` and chunks 0024/0028/0030's `colContext` runs
one band behind `colFirst`; both are the chunker's and are copied unaltered.

### (f) Two mentioned-word sites, decided by the 0012 test (translation, or subject?)

- **0137C** *sed usualiter, **tentare**, pro eo quod est **probare**, dicimus.* Neither word is in
  an italic span in the twin, so italics were unavailable (span parity), and the 0000 stint's
  straight-quote device applies: rendered **`we say "to tempt" for that which is "to prove"`**.
  These are the SUBJECT of the sentence in one sense — but the sentence is about the two verbs'
  *usage*, not about their letters, and leaving them Latin would tell an English reader nothing.
  Recorded because it is the borderline case of the 0012 rule.
- **0143D** `« teristrum, »` is left **untranslated inside its guillemets** — the one place a
  guillemet span is not Englished in this range. The clause exists to explain what a *teristrum*
  is (*quod etiam nunc genus est Arabici vestimenti*), so the word is mentioned, not used; this is
  0012 §1a's *sidera* class carried into a guillemet span. Same footing as *Bersabee*, *sabee*,
  *sabaa*, *Alon*, *debir*, *Beka*, *Schekel*, *siclus*, *alma*, *seyr*, *Edom*, all left as
  printed.
- ⚑ Their opposites, Englished inside their spans per the meaning rule: *fons judicii* → *the
  fountain of judgment* · *angustia* → *narrowness* · *illuminans* / *lucens* → *illuminating* /
  *shining* · *veprem* / *spinetum* → *a briar* / *a thorn-brake* · *negotiatores* → *merchants* ·
  *copulata* → *joined* · *risus* / *patientia* → *laughter* / *patience* · *medius* / *fluvius* →
  *middle* / *a river* · *Rubeum* / *fulvum* → *Red* / *tawny* · *juramentum* → *an oath* ·
  *quercus* → *an oak* (inside `( *Alon* Hebraice Latine *quercus* )`, rendered
  `( *Alon* in Hebrew, in Latin *an oak* )`).

---

## §2 · PLATE READS — EIGHT PAGES, ALL EIGHT NEW, CORNERS FIRST

⭐ **My range was entirely unread when the stint opened.** `data/plate-reads.json` covered
cols 0067–0070, 0081–0082, 0093–0106 and (from a peer's merge) 0121–0133; **cols 0134–0147 had no
read at all.** All eight pages were rendered and read: **PDF pp. 72–79 = cols 0133/0134, 135/136,
137/138, 139/140, 141/142, 143/144, 145/146, 147/148.**

⛔ **The printed corner numbers were read FIRST on every one of the eight pages, before anything
else on the page**, and each confirmed the map `PDF page = (column + 11) / 2`. 200 dpi for the full
page, 500–900 dpi crops at 22 contested sites.

### The foot apparatus: **CHECKED ZERO on all eight pages** — a real result

No foot rule and no notes of either layer on any of the eight — not numbered, not asterisk-keyed,
and **not letter-keyed**, which is the layer this book is known to carry (cols 0068 and 0094).
p. 74's foot carries only `PATROL. CXIII.` and the signature `5`; the rest simply end.
**Recorded as a checked zero, not a skip.** With the earlier stints' pages this puts PL 113's
"no conjecture apparatus in these columns" finding on 33 pages across five books — and it is still
a sample, not a licence to claim the volume has none.

### What the plates found: 21 twin/plate divergences, filed in full

`data/briefs/8950-PENDING-TEI-PATCHES-0024.md` carries every one with its column, both readings,
the dpi it was settled at, and which marker it will take once the patch lands. The headline
numbers: **13 are MIGNE'S defect tidied by Corpus Corporum · 4 are OUR corruption of a clean plate
· 4 are mark-, address- or Hebrew-level.** Two deserve naming here:

- ⭐⭐⭐ **0141B — our twin has DROPPED a printed `non`.** §5.1 below.
- ⭐ **0145A — the plate prints the ADDRESS `VERS 13.`** (no period after `VERS`, a clear 3 at
  900 dpi) where our twin prints `VERS. 12.--`, and the next address on the plate is `VERS. 13-15.`
  So Migne's page repeats the number and **CC silently corrected the first to 12**. This is the
  most substantive normalization I found and **it is invisible from the Latin alone** — brief §4's
  class, at the level of a structural address rather than a word. The English carries the twin's
  `VERS. 12.--`, because the address is copied verbatim rather than translated and a divergence
  there would misalign the two columns' addresses; the patch is the right instrument.

---

## §3 · ⚠⚠ 7a″ — THE VULGATE COLLATION. **This is the deliverable.**

Every one of the 219 marked spans was collated against `sources/vulgate/clementine-flat.txt`, by
book chapter:verse, never from memory. The `✓` addresses in the brief were **read**, not taken as
clearance: three of the fires below are spans the brief ticked against a *different* verse.

### 3a. FIRED — 16 `[var:]`, every one on a column I read at the plate

| col | chunk | Migne's lemma | Clementine | why it is material |
|---|---|---|---|---|
| 0133D | 0024 | *Et peperci tibi ne peccares in me* | Gn 20:6 *custodivi te ne peccares in me* | a different verb: God **spared** vs God **kept**; the gloss then argues about *in Deum peccatur* |
| 0134C | 0025 | *Visitavit autem **Deus** Saram* | Gn 21:1 *Dominus* | divine name in the verse lemma; the same swap the 0008 and 0011 stints fired at 0102B and 0104D |
| 0136A | 0025 | *__Sumpsit__ panem et utrem aquae* | Gn 21:14 *tollens panem et utrem aquae* | a finite verb for a participle — and **Migne's own lemma two lines above prints *Tollens*** |
| 0136C | 0025 | *projecit puerum subter unam **abietem**, et abiens sedit contra longe quasi **jactus sagittae*** | Gn 21:15–16 *abjecit puerum subter unam **arborum*** … *seditque e regione procul quantum potest **arcus jacere*** | a fir tree for "one of the trees", and a bowshot as a noun |
| 0136D | 0025 | *__Angelus Domini__* | Gn 21:17 *angelus **Dei*** | ⭐ **the gloss's whole argument** — *prius angelum, postea **Dominum** Scriptura pronuntiat* — rests on the word Migne has here and the Vulgate has not. The brief ticked this span against 1Par/2Rg/3Rg, i.e. it matched *elsewhere* |
| 0136D | 0025 | *__Qui__ sitit, veniat ad me et bibat* | Jo 7:37 *__Si quis__ sitit* | a relative for a conditional |
| 0136D | 0025 | *Ecce ego mittam vobis Eliam, qui convertat **corda patrum in filios*** | Mal 4:5 *Eliam **prophetam**, antequam veniat dies Domini* + 4:6 *convertet **cor** patrum **ad** filios* | two verses joined, *prophetam* dropped |
| 0137D | 0026 | *Tentat vos Deus vester, **ut sciat si diligatis eum*** | Dt 13:3 *tentat vos **Dominus** Deus vester, **ut palam fiat utrum diligatis eum an non*** | *Dominus* dropped and the purpose clause rewritten — and the gloss's own tail (*id est, vos scire faciat*) is answering **Migne's** wording |
| 0138A | 0026 | *__Coeperunt__ aedificare **templum** mense secundo, **secunda die mensis**, in monte Moria* | 2Par 3:1–2 *coepit **Salomon** aedificare **domum Domini*** … *mense secundo, **anno quarto regni sui*** | a day of the month for a regnal year |
| 0138C | 0026 | *__adversatrix__ Israel, et **praevaricatrix Juda*** | Jr 3:11 *__aversatrix__ Israel, comparatione **praevaricatricis Judae*** | *aversatrix* (backslider) → *adversatrix* (adversary) is a different word; and the genitive comparison becomes a second nominative |
| 0138D | 0026 | *Fide Abraham **non haesitavit**, cum unicum offerret, in quo acceperat repromissionem* | Hbr 11:17 *Fide **obtulit** Abraham Isaac, **cum tentaretur**, et unigenitum offerebat, qui susceperat repromissiones* | ⭐ the opening words **are not in Hebrews at all** — they echo Rom 4:20 — yet the gloss cites Hebr. XI and builds *Laudandus in constantia offerendi et in fide suscitandi* on them |
| 0142A | 0028 | *Non angustiamini in nobis, **sed** in visceribus vestris* | 2Cor 6:12 *Non angustiamini in nobis : **angustiamini autem** in visceribus vestris* | ⭐ **a polarity reversal**: the Vulgate says they ARE straitened in their own bowels; Migne's *sed* carries the negative across. The gloss (*locum mentis dilatate, ad cogitanda carnalia coarctate*) follows Migne |
| 0145B | 0030 | *Primogenitus Ismaelis Nabajoth, deinde Cedar, et **Abel*** | Gn 25:13 *et **Adbeel*** | a name |
| 0145C | 0030 | *__Ponatur__ coram fratribus meis, et fratribus tuis, et **dijudicent inter nos*** | Gn 31:37 *__pone hic__ coram fratribus meis, et fratribus tuis, et **judicent inter me et te*** | passive for imperative, and the parties generalized |
| 0146A | 0030 | *Qui exaudivit **eam*** | Gn 25:21 *qui exaudivit **eum*** | ⭐⭐ **an agency reversal** (7a mechanism 5): the Vulgate has God hearing **Isaac, who prayed**; Migne's *eam* makes it Rebecca — and Chrysostom's gloss immediately below is about **Isaac's** twenty years of prayer and **Isaac's** age. Read at 900 dpi; *eam* is unambiguous |
| 0147B | 0030 | *Auferetur a vobis regnum Dei et dabitur **gentibus*** | Mt 21:43 *dabitur **genti facienti fructus ejus*** | plural "the Gentiles" for a singular nation bearing fruit — the substitution the gloss's whole Judaei/gentes argument needs |

### 3b. DIVERGENT AND DECLINED ON THE MERITS — Migne labels the version himself

Per the 0008–0011 stint's §1(b), settled and not re-opened: where Migne announces the version, its
divergence from the Clementine **is the sentence's own subject**, and a `[var:]` restates what the
text already says. **Eight sites, and this range is dense with them:**

- **0134A** `« soror mea est, filia patris mei, **sed** non filia matris meae, »` — Gn 20:12 reads
  *et non filia*. Introduced *in Hebraeo habetur vegam … id est, etiam vere*. Labelled.
- **0134A** `« a patre, et non ex matre; »` — introduced *Alia translatio, apertius*. Labelled.
- **0136C** `« Non videbo mortem pueri mei. »` — Gn 21:16 reads *Non videbo morientem puerum*.
  Introduced *In Hebraeo enim prius hoc scriptum est*. Labelled.
- **0143B** `« Egressus est Isaac, ut loqueretur in agrum, inclinata jam vespera; »` — Gn 24:63
  reads *egressus fuerat ad meditandum in agro, inclinata jam die*. Introduced *In Hebraeo
  legitur*. Labelled.
- **0143D** `« teristrum, »` — introduced *Alia editio*. Labelled.
- **0144D** `« Deficiens mortuus est Abraham, »` — introduced *male in LXX additum est*. Labelled,
  and Migne is condemning the reading in the same breath.
- **0145A** `« in senectute bona senex »`, `« plenus dierum; »`, `« plenus. »` — Jerome comparing
  the Greek codices with his own. Labelled.
- **0145B** `« contra faciem omnium fratrum suorum habitabat, »` (*juxta LXX legimus*) and
  `« coram omnibus fratribus suis occubuit, »` (*verius est quod posuimus*) — Gn 25:18 reads
  *coram cunctis fratribus suis obiit*. Both labelled, and the sentence exists to prefer the second.
- **0145D** `« ludebant »` · `« recalcitrabant: »` (LXX) · `« confligebant filii in utero ejus. »`
  (Aquila) · `« in similitudine navis in superficie ferebantur. »` (Symmachus) — four announced
  versions in one sentence. Labelled.
- **0146C** `« pilosum »` — *Ubi nos « pilosum » posuimus*, Jerome's own rendering against the
  Hebrew *seyr*; Gn 25:25 reads *hispidus*. Labelled.

⚠ **Worked pair inside this range**, which is why the rule earns its keep: at **0136C** the same
paragraph carries **both** classes. *Quod sequitur: « Et projecit puerum subter unam abietem … »* is
offered as **the text** and took the marker; *« Non videbo mortem pueri mei. »* is introduced
*In Hebraeo* and did not. What Jerome is comparing there is the **order** of the clauses; the word
divergences (*abietem*, *jactus sagittae*) are not the sentence's subject and are not disclosed by it.

### 3c. DIVERGENT AND DECLINED AS IMMATERIAL — the bar is "changes the sense"

Recorded because a findings list alone cannot be told from a report by an agent that never looked.

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 0133D | *Nolite vocare patrem super terram* | Mt 23:9 *Et patrem nolite vocare **vobis** super terram* | word order and a dropped *vobis*; the sense is unchanged |
| 0134A | *Quicunque fecerit … ipse frater meus … et mater.* | Mt 12:50 *Quicumque **enim** … ipse **meus frater** … et mater **est**.* | a dropped connective and an inverted possessive |
| 0135D | *Non filii carnis, sed filii promissionis **aestimabuntur** in semine* | Rom 9:8 *non **qui** filii carnis, **hi filii Dei** : sed **qui** filii **sunt** promissionis, **aestimantur** in semine* | a compressed citation; the future for the present is one letter-cluster and the argument (*qui non filius carnis, sed promissionis*) turns on the nouns, not the tense |
| 0138C | *Caecitas ex parte **contingit** in Israel* | Rom 11:25 *contigit* | present for perfect, **one letter**, and `sources/vulgate/README.md` warns against a call that turns on one letter in this copy |
| 0138C | *et sic omnis Israel salvus **fiet*** | Rom 11:26 *fieret* | the indicative is the ordinary citation form of this verse; not a sense change |
| 0139B | *« Non peperceris, »* | Gn 22:12 *non pepercisti* | a lemma stump; the person and reference are unchanged |
| 0139C | *__Et vocavit__ angelus Domini* | Gn 22:15 *Vocavit **autem*** | a connective |
| 0139C | *Pluit Dominus a Domino* | Gn 19:24 *Dominus pluit … a Domino* | word order inside a three-word fragment quoted to make a grammatical point about *Dominus … a Domino*, which survives |
| 0141D | *Si vobis spiritualia seminavimus* | 1Cor 9:11 *Si **nos** vobis spiritualia seminavimus … metamus **?*** | a dropped pronoun; the closing `?` is Migne's own truncation, and the quotation is unclosed. ⚑ **The 0000–0003 stint DID fire on this verse at 0081A**, where Migne's wording differs much further (*Seminavimus spiritualia vobis*); flagged for the merge so the two are not read as inconsistent |
| 0143A | *Eo tempore Isaac* | Gn 24:62 *Eo **autem** tempore **deambulabat Isaac*** | a lemma stump |
| 0144C | *Lathusim … Laomim … Henoc* | Gn 25:3–4 *Latusim … Loomin … Henoch*, and *et Eldaa* follows | orthographic variants of transliterated names; the truncation is the lemma's own cut |
| 0145C | *anni vitae **Ismael*** | Gn 25:17 *Ismaelis* | declension of a name |
| 0145D | *sed collidebantur in utero parvuli* | Gn 25:22 *Sed collidebantur in utero **ejus** parvuli* | a dropped pronoun in a lemma printed with an ellipsis |
| 0146D | *« Duae gentes et duo populi »* | Gn 25:23 *Duae gentes **sunt in utero tuo**, et duo populi **ex ventre tuo dividentur*** | Bede quotes a clipped pair as one unit; the elision is visible on the page |
| 0139B | *« Spinis peccatorum suorum circumdedit me populus hic »* [n: (Jer. XXXVIII.)] | **the sequence is nowhere in the Clementine**, and Jer 38 does not contain it | an Old Latin or patristic reading with no received text to name — a `[var:]` must give the received reading and I could not locate one. Logged, not marked |

### 3d. COLLATED AND FOUND TO AGREE — recorded, per 7a″

Exact, or a clean whole-word fragment of, the Clementine: **0133C** *Profectus inde* (Gn 20:1) ·
*Dixitque de Sara* (20:2) · **0133D** *Orabit pro te* (20:7) · *Alias autem* (20:12) ·
**0134A** *Filia patris* (20:12) · *Postquam autem eduxit me Deus de domo patris mei, dixi ad eam*
(20:13, **exact**) · **0134B** *Tulit igitur* (20:14) · *Ubicunque tibi* (20:15, *ubicumque*
orthographic) · *Mille argenteos* (20:16) · *Mirabilis Deus in sanctis suis* (Ps 67:36, **exact**) ·
**0134C** *Orante autem* (20:17) · **0135A** *Circumcidit* (21:4) · *Crevit igitur puer* (21:8) ·
**0135B** *Lac vobis potum dedi, non escam* (1Cor 3:2, **exact**) · *Cumque vidisset Sara* (21:9) ·
*Sedit populus manducare et bibere, et surrexerunt ludere* (Ex 32:6, **exact**) ·
*Ejice ancillam hanc* (21:10) · **0135C** *Dure accepit* (21:11) · **0135D** *Quia semen tuum*
(21:13) · *Tollens panem* (21:14) · **0136B** *Imposuit scapulae ejus* (21:14) · *Abjecit puerum*
(21:15) · **0136D** *Exaudivit autem* (21:17) · **0137A** *Eodem tempore* (21:22) · *Jura ergo*
(21:23) · *Idcirco vocatus est* (21:31) · **0137B** *Abraham vero* (21:33) · **0137C**
*Ne forte tentaverit vos is qui tentat* (1Th 3:5, **exact**) · **0137D** *Tolle filium* (22:2) ·
*Quem diligis* (22:2) · **0138A** *In Isaac vocabitur tibi semen* (21:12, **exact**) ·
*Vade in terram* (22:2) · *Asinum suum ducens* (22:3) · **0138B** *Die autem tertio* (22:4) ·
*Exspectate hic* (22:5) · **0138C** *cum asino* · *plenitudo gentium intraret* (Rom 11:25) ·
*postquam adoraverimus* (22:5) · *Ego et puer* (22:5) · **0138D** *Erunt duo in carne una*
(Gn 2:24, **exact**) · **0139A** *Cumque alligasset* (22:9) · **0139B** *Cornua in manibus ejus*
(Hab 3:4, **exact**) · **0139C** *Dominus dixit ad me* (Ps 2:7, **exact**) · *Dixit Dominus Domino
meo* (Ps 109:1, **exact**) · **0139D** *Arietem inter vepres* (22:13) · *Appellavitque nomen*
(22:14) · **0140A** *Vixit autem Sara* (23:1) · *Et mortua est in civitate Arbee* (23:2) ·
*Surrexit Abraham* (23:7) · *Quod cum audisset* (23:16) · *Confirmatusque est ager* (23:17) ·
**0140C** *Erat autem Abraham senex … Dixitque ad servum seniorem: Pone manum* (24:1–2, with
Migne's own ellipsis) · *Ut non accipias* (24:3) · **0140D** *Posuit ergo* (24:9) ·
*Ex omnibus bonis ejus* (24:10) · **0141A** *Juxta puteum* (24:11) · *Igitur puella* (24:14) ·
*Inclina hydriam tuam* (24:14) · **0141B** *Occurritque ei servus, et ait: Pauxillum* (24:17) ·
**0141C** *Sapientibus et insipientibus debitor sum* (Rom 1:14, **exact**) · *Carnis curam ne
feceritis in desideriis* (Rom 13:14, **exact**) · *Nemo enim unquam carnem suam odio habuit*
(Eph 5:29, **exact**; *unquam*/*umquam* orthographic) · *Protulit vir* (24:22) · **0141D**
*Palearum quoque* (24:25) · *Locus spatiosus* (24:25) · **0142A** *Habebat / Habebat autem*
(24:29) · **0142B** *Non comedam* (24:33) · *Et adjuravit* (24:37) · **0142C** *Veni ergo hodie*
(24:42) · *Prolatisque* (24:53) · *Dedit ea Rebeccae* (24:53) · **0142D** *Et nutricem illius*
(24:59) · *Igitur Rebecca* (24:61) · **0143A** *Qui festinus* (24:61) · *Habitabat* (24:62) ·
**0143B** *Et egressus fuerat* (24:63) · *Egressus es in salutem populi tui* (Hab 3:13, **exact**) ·
**0143C** *In patientia vestra possidebitis animas vestras* (Lc 21:19, **exact**) · *Elevatio
manuum mearum sacrificium vespertinum* (Ps 140:2, **exact**) · *Descendit de camelo* (24:64) ·
**0143D** *Quis est ille homo* (24:65) · *At illa* (24:65) · **0144A** *Qui introduxit eam* (24:67) ·
*Et intantum dilexit eam* (24:67; *intantum*/*in tantum* orthographic) · **0144B** *Spe gaudentes,
in tribulatione patientes* (Rom 12:12, **exact**) · *Abraham vero aliam duxit uxorem* (25:1) ·
**0144C** *Una est columba mea* (Ct 6:8, **exact**) · **0144D** *Deditque Abraham* (25:5) ·
*Et deficiens mortuus est in senectute bona, provectaeque aetatis, et plenus dierum, congregatusque
est ad populum suum. Et sepelierunt eum* (25:8–9, **exact but for one comma**) · **0145A**
*Hae sunt generationes* (25:12, *autem* dropped) · **0145C** *Duodecim principes tribuum suarum*
(25:16) · *Habitavit autem ab Hevila usque Sur, quae respicit Aegyptum* (25:18, **exact**) ·
**0145D** *De Mesopotamia sororem Laban* (25:20) · **0146A** *Perrexitque* (25:22) ·
*Sexagenarius, inquit, erat quando nati sunt parvuli* (25:26, Chrysostom's *inquit* inserted) ·
**0146B** *Qui respondens ait: Duae gentes* (25:23, **exact**) · **0146C** *Jam tempus* (25:24) ·
*Protinus alter* (25:25) · **0146D** *et major serviet minori* (25:23, **exact**) ·
*Factus est Esau* (25:27) · **0147A** *Simplex* (25:27) · *Coxit autem Jacob* (25:29) ·
*Cui dixit Jacob* (25:31) · **0147B** *Juravit Esau* (25:33).

### 3e. TWO CITATION SIGLA THAT POINT ELSEWHERE — reproduced verbatim, uncorrected

- **0137C** `Unde I Thess. I:` — the words are **1 Thess 3:5**. Migne's chapter number.
- **0139C** `Quod autem dictum est ibidem, c. 9:` introducing *« Dixit Dominus Domino meo »* — the
  verse is **Ps 109:1**, not psalm 9. Migne's own back-reference.
- **0147B** `dicitur Matth. XII:` introducing *Auferetur a vobis regnum Dei* — the verse is
  **Matt 21:43**. Migne's book-and-chapter.
- **0139B** `[n: (Jer. XXXVIII.)]` on a sequence that is in no chapter of Jeremias.

All four ride as printed. Passing a siglum through is not endorsing it (series brief, convention 4),
and this recension's citations are known to be unreliable.

---

## §4 · THE DECLINED LIST — suspect readings, what settles each, and the page it was settled on

**Zero `[sic:]` fired, and the reason is structural, not timid:** every plate defect in this range
is one our twin has already tidied away, so a `[sic:]` would have failed the verbatim-substring
guard and would have accused Migne of the digitization's work. That is the 0008–0011 finding
reproduced. Each candidate below names the page that settled it.

| # | col | the suspicion | settled on | verdict |
|---|---|---|---|---|
| 4.1 | 0133C | `dixit sororem` reads correctly — is the plate tidier than it should be? | **p. 72, 500 dpi** | ⛔ **MIGNE PRINTS `sonorem`.** Suspicion inverted: the tidy word was ours. `[sic:]` owed after the patch |
| 4.2 | 0137C | `pro eo quod est **pro are**` — a split non-word, the Pattern 10 shape | **p. 74, 600 dpi** | ⛔ **OURS.** The plate prints `probare` across a normal line wrap. No marker; a `[sic:]` here would have accused a clean page |
| 4.3 | 0138D | `non **hae sitavit**` — the same split shape, and in a scripture quotation | **p. 74, 900 dpi at the line end** | ⛔ **OURS.** The plate prints `non hæ-` **with the hyphen**. No marker |
| 4.4 | 0141C–D | `Quia **praedicato:**` — a colon where a word should be, and the sentence has no subject | **p. 76, 600 dpi** | ⛔ **OURS.** The plate prints `praedi-cator` across the column break; CC lost the `r` and set a colon. No marker, and the English gains the subject |
| 4.5 | 0145A | `quod **animae** est, deinde quod spirituale` — 1Cor 15:46 has *animale* | **p. 78, 600 dpi** | ⛔ **OURS.** The plate prints `animale`. No marker |
| 4.6 | 0139D | *Aries qui pro Isaac immolatus est, **non putavimus**, sed verus est* — the clause has no object | **p. 75, 200 dpi; twin and plate agree** | **MIGNE'S**, and the abridgment's. Rendered as closely as the words allow, with the supplied English pronoun bracketed: "we have not imagined [it], but it is true." No marker: the type is sound, and 7a⁗ has nothing to quarantine. Logged |
| 4.7 | 0136C | *dixit angelus ad Agar: **Nullum moveat.*** — will not construe | **p. 73, 200 dpi; twin and plate agree** | **MIGNE'S.** Rendered literally, "Let nothing move." Conjecture (*nihil te moveat*) recorded here and **not** in the text. No marker: real words, and Pattern 18's bar is not met — the clause asserts nothing false, it asserts nothing at all |
| 4.8 | 0146A | `Qui exaudivit **eam**` — is the *eam* ours? | **p. 78, 900 dpi** | **MIGNE'S.** `[var:]` fired (§3a) |
| 4.9 | 0145A | `« plenus. »` — the argument wants the bare word, but the plate? | **p. 78, 600 dpi** | ⛔ **MIGNE PRINTS `plenius`.** English renders the plate (§1a rule 3); the crux carries the conjecture that it is an eye-skip from the *plenius* eight words above. `[sic:]` NOT owed — the type is a real word in a real slot |
| 4.10 | 0141A | `electorum Ecclesia` — Gregory's phrase, and it construes | **p. 76, 600 dpi** | ⛔ **MIGNE PRINTS `electorem`.** `[sic:]` owed after the patch |
| 4.11 | 0146C | `[n: (IV Reg. VIII)]` — Edom revolts at IV Reg 8:20, so VIII is right; is it Migne's? | **p. 78, 600 dpi** | ⛔ **MIGNE PRINTS `VII`.** CC corrected him. `[n:]` contents are verbatim from the twin, so the English carries VIII; filed as a patch |
| 4.12 | 0147B | `qua induti` — feminine, agreeing with *vestis* | **p. 79, 600 dpi** | ⛔ **MIGNE PRINTS `quo`.** Pattern 9: gender has no English exponent. No marker, no edit, filed as a patch |
| 4.13 | — | Migne's foot-of-page apparatus for cols 0133–0148 | **pp. 72–79, foot of every page** | **CHECKED ZERO**, all three key shapes. Recorded as a result |

⛔ **Three suspicions I raised and the plate refuted** (4.2, 4.3, 4.4) — all three aimed at
non-words, all three came back **ours**, exactly as addendum A predicts. **And two came back the
other way** (4.1, 4.9): a *real, well-formed word* that reads perfectly was the defective one, and
only the plate could say so. Addendum A's rule holds in both directions here, and it is the reason
nothing was marked on argument alone.

---

## §5 · NEGATION — the hosts, named (tests 2 and 2a)

### 5.1 ⭐⭐⭐ 0141B — **THE HEADLINE. Our twin has dropped a printed `non`, and the English carries it.**

> **plate (p. 76, 600 dpi):** *Vel aquam praebuit, quia **non** in eo quod credidit, vacua non remansit.*
> **our twin:** *Vel aquam praebuit, quia in eo quod credidit, vacua non remansit.*

Rendered: **"Or she supplied water, because it was not in that which she believed that she did not
remain empty."**

Hosts, named: the first `non` stands on the prepositional phrase *in eo quod credidit* (constituent
negation, fronted before it); the second on *remansit*. Both sit on those hosts in the English.
The result is a self-contradiction against the next sentence (*Mox enim praedicavit quod audivit*),
and **that is the point** — Pattern 7a is unconditional and a printed negation is carried "including
when carrying it makes the sentence contradict itself."

⛔ **This is the one place in the stint where the English asserts something its own Latin column
does not, with no marker able to say so.** A `[cj:]` was weighed and rejected: its fixed form
(`*printed*; read *conjectured*`) cannot express a **deletion**, and the verbatim-in-the-twin guard
would be satisfied only by the *other* `non` in the same sentence, which is gaming it.
**The TEI patch must land before this work ships**, or a reader will meet an English negative with
no Latin exponent and read it as ours. Filed in the patch file, Part D.

### 5.2 Test 2a fired and checked — negatives on a verb with a quantifier, correlative or pivot near

Six sites in the range meet the trigger. Each host was proved from the sentence's own structure,
not from what reads well:

- **0140C** *Verumtamen **non** super femur, sed sub femore manum ponere jubet.* The `non` stands
  before the verb-adjacent *super femur*, and the **`sed sub femore` correlative proves the host is
  the prepositional phrase, not *jubet***. Rendered "he bids him put his hand **not upon** the thigh
  **but under** the thigh." (This is the 8960 @0740B model case.)
- **0140D** *quia Christo **nullae** reproborum animae conjunguntur.* Quantifier host: *nullae* is
  on *animae*, not on the verb. "no souls of the reprobate are joined."
- **0141C** *Studet enim **non plus** sapere quam oportet sapere.* The comparative *quam* fixes the
  host on *plus sapere*. "studies not to be more wise than it behoveth to be wise."
- **0141C** *quia verbum vitae **non solum** prudentibus, sed etiam stultis praedicatur.*
  `non solum … sed etiam`; host *prudentibus*. Carried as "not only … but also."
- **0142C** *quod in aliquibus verbis **non omnino** conveniunt.* ⚠ The 8960 @0734B shape exactly —
  *omnino* with a negation, where English word order can reverse the scope. *non omnino* is
  "not altogether", i.e. partial disagreement, and English "do not altogether agree" holds the same
  scope. Checked, correct.
- **0147B** *__non solum__ primatus sui honorem amisit, sed et coelestis regni praemium … adipisci
  **non** meruit.* Two negations, two hosts (*amisit* under *non solum*; *meruit*). Both carried.
- **0143A** *quos **non** corporis frigus, **sed** fervor charitatis tenuit.* The `sed` pivot proves
  the host is *corporis frigus*. "whom **not** the cold of the body **but** the fervour of charity
  held."

### 5.3 Four relocations found and undone in my own pass

Recorded because they are the class that passes every count-based check:

- **0133D** *quae putant homines vel **non esse** peccata* — first drafted "either to be **no** sins",
  which moves the negative onto *peccata*. Restored to "either **not to be** sins."
- **0140D** *jam extraneam **non habebat*** — first drafted "already held **for no** stranger",
  the same relocation. Restored to "**did not** already hold as a stranger."
- **0142B** *si … fructum **non inveniunt*** — first drafted "find **no** fruit". Restored to
  "**do not find** fruit."
- **0142C** *cum veritas narrationis **non** exigit, **nisi** ut …* — first drafted "requires
  **nothing but** that", which merges the `non` and the `nisi` into one word. Restored to
  "**does not require** anything **except** that."

---

## §6 · UNEXPRESSED SUBJECTS SUPPLIED — every one named, with what decided it

The dominant defect class, and in a gloss the antecedent is usually in the lemma above or in the
verse the lemma comes from.

- **0133C–D** *Tacuit uxorem, dixit sororem … certus quod a Deo inviolata servaretur* → **Abraham**
  throughout, from the lemma *« Dixitque de Sara »* and Gn 20:2. *inviolata* is feminine and fixes
  **Sara** as the one kept.
- **0134C** *Orante Filio Patrem, sanatur infecunditas* → "When **the Son** prays the Father"; both
  are printed, nothing supplied.
- **0135C** *Quod **non facit** zelo accensa* → **Sara**, from *zelo accensa* (feminine) and from
  the lemma she speaks.
- **0135D** *per Saram nescientem prophetizatum est cum muliebri animo **mota est*** → **Sara**,
  named in the same clause.
- **0136A** *sed subaudiendum est, **dedit** puerum suum* → **Abraham**. Decided from Gn 21:14
  (*tradiditque puerum*), which is the verse the whole paragraph is arguing about, and from the
  fact that Agar is the one being loaded, not the loader. ⚠ Both readings construe in the Latin;
  named here rather than chosen silently. Rendered "he gave over her boy."
- **0136C** *__Dixit__ enim: Non videbo mortem parvuli mei, et **sedit** contra eum* → **Agar**.
  Decided by the paragraph's own closing sentence — *Mater enim non suam mortem, sed filii deplorat*
  — and by Gn 21:16, where the speaker is Agar. Rendered "**she** said … **she** sat."
  Likewise *Quod sequitur: « Et **projecit** puerum … et **abiens sedit** »* → "**she** cast … going
  away sat." (*abiens* is common gender and decides nothing on its own.)
- **0136D** *__illa__ fontem aspicit* → **Agar**, printed.
- **0139C** *Erat enim in angelo Deus, et ex ejus persona **loquebatur*** → **God**, from the
  preceding clause; the gloss's argument is that the speaker is the Son.
- **0139D** *__non putavimus__, sed verus est* → **first person plural, the commentator**, printed.
- **0142B** *sed **illi** nisi prius obtineant aeterna, **recipere nolunt*** → **the teachers**
  (*doctores*), from *doctores ex temporalibus stipendiis retinere parati sunt* — ⚠ **not** the
  people who are ready to retain them. Decided by *pedes non lavant*, which is the teachers' act
  (Gn 24:32).
- **0143D** *Quae se mox pallio **cooperuit*** → **Rebecca**, from Gn 24:65 and from *Rebecca viso
  Isaac* two clauses above.
- **0146A** *Quaeritur quo **ierit*** → **Rebecca**. Decided from the lemma *« Perrexitque »*
  (Gn 25:22, *perrexitque ut consuleret Dominum*, of Rebecca) and from the paragraph's own close,
  *Rebecca tamen secundum Scripturam Dominum interrogavit*. Rendered "whither did **she** go".
  ⚠ *cum orando allegassent … dormiebant* in the same paragraph is **plural** and is rendered
  "they", which is Migne's own shift and not ours.
- **0146A** *Ne putes … nam viginti annis **mansit** orans* → **Isaac**, named four words later
  (*quot annorum fuerit Isaac*). ⭐ This is the site where Migne's own lemma (*exaudivit **eam***)
  points the other way; the gloss decides it, and the divergence took the `[var:]` at §3a.
- **0146D** *__Praecedit__ Esau … deinde **exit** Jacob* → both printed.

---

## §7 · PUNCTUATION — compared BAND BY BAND, and the only added marks are three Pattern 8b colons

Test 3 run mechanically over all seven chunks: colons, semicolons, question marks, `«`, `»` and `!`
counted per column-anchored band (markers stripped), Latin against English. **Four mismatched bands
in 63, all accounted for, and none of them a supplied or destroyed mark of any other class:**

| band | Migne | English | class |
|---|---|---|---|
| 0135B | *Quaeritur cur antea Sara voluit … aut cur cum matre eum nunc jubet expelli?* | It is asked**:** why did Sara before wish … or why does she now bid him be cast out with his mother**?** | **8b** — the `?` is kept; English cannot end an indirect construction with it |
| 0136A | *Quaeritur quomodo imposuit in humeris puerum tam grandem?* | It is asked**:** how did he lay upon her shoulders a boy so great**?** | **8b** |
| 0146A | *Quaeritur quo ierit, cum nondum essent prophetae … Domini?* | It is asked**:** whither did she go, since there were as yet no prophets …**?** | **8b** |
| 0141C | *(GREG.) Quia praedicato**:** [0141D] auditum Ecclesiae* | Because the preacher adorns the hearing of the Church | ⛔ **one colon FEWER**, and deliberately: the plate prints `praedi-cator` and the twin's colon is Corpus Corporum's (§4.4). The English has no exponent for a colon that is not on the plate |

⚑ **The scan that found these also found six unlicensed marks I had introduced and repaired**: a
supplied colon at 0135A (*Unde cresce* — Migne prints a comma), a colon for Migne's full stop at
0136C (*et statim jungitur.*), a supplied semicolon at 0136D (after *fontem aspicit*), a supplied
colon at 0138B (*tres aetates significat, ante legem*), a supplied semicolon at 0138C (*non errore
impietatis,*) and a supplied semicolon at 0138D (*Deus autem non senescit,*). **Test 3 earning its
place again** — none of them showed in any total.

⛔ **The second `?` of chunk 0030 is Migne's own and is preserved as a direct question**:
*an per aliquem sacerdotem?* → "was it through some priest?" It is not recast, because it needs no
recasting; only the indirect ones take the 8b colon.

⛔ **Not one comma→semicolon sweep was made.** Migne prints semicolons freely in this range (55 in
the seven chunks), so Tobit's narrow exception does not apply and was not invoked.

**Em-dashes: two, both inside `[var: …]` markers** (our own apparatus voice), none in the running
prose. The verifier's corpus note reports 0.3/chunk for the work against a median of 5.3.

---

## §8 · TEST 4 — sections read back against the Latin asking only *does it assert what he asserts?*

Run last, with the counts already clean. Read clean, paragraph by paragraph:

- **0024 entire** (0133C–0134C). The Abimelech chapter. The Sara/Church allegory at 0134B and the
  thousand-pieces-of-silver arithmetic at 0134C both assert what Migne asserts.
- **0025 @0134C–0135A**, the circumcision-and-eighth-day paragraph — the longest single sentence in
  the stint, with four subordinate chains; every clause is rendered and the *octavo die / octava
  aetas* figure survives intact.
- **0025 @0135C**, the Agar/Sara allegory, where three negations run in series
  (*non manere … nec esse … nec … possidere*). Read twice; all three are on their own verbs.
- **0026 @0138B–C**, the Isidore passage of nested quotations. ⚠ **This is the hardest paragraph in
  the range**: seven guillemet spans alternating scripture and gloss with *hoc est* between them,
  and it is easy to render as though the gloss were the quotation. Checked span for span against
  the twin; the alternation is preserved and no span moved.
- **0026 @0139A**, the Abraham/God-the-Father typology. The *Abraham senex … Deus autem non senescit*
  antithesis is carried, including the concessive *sed promissio … quodammodo senuerat*.
- **0027 @0140B**, the *Spelunca* paragraph — one 90-word Gregorian period with a *non aliter …
  nisi* frame. Rendered as one sentence with both negatives in place.
- **0028 @0141B–C**, the Rebecca-as-Church allegory. ⚠ Contains §5.1's site; read three times.
- **0028 @0142C**, Augustine on the evangelists' verbal disagreement — the paragraph whose whole
  subject is *whether words differ*, so a smoothed rendering would be self-refuting. The *non
  omnino conveniunt* and the *non exigit, nisi ut* frames are both literal.
- **0030 @0146A–B**, Augustine's chain of *Forsitan … an … vel … Vel forte* conjectures. Every one
  of the five is a conjecture in the English too; none was hardened into a statement.
- **0030 @0146D**, Bede on the two peoples within us. The *iste minor, ille major* / *plures … mali
  quam boni* inversions are carried without smoothing.

⚑ **Two paragraphs that read more smoothly in English than the Latin does, flagged as suspects and
then cleared:** 0136A's Augustinian arithmetic of Ismael's age (the Latin's *Sed ut … accipiamus*
concessive is genuinely elliptical; the English keeps the ellipsis) and 0139D's
*non putavimus, sed verus est* (§4.6 — **not** cleared, and rendered with a bracketed pronoun
rather than made to read well).

---

## §9 · WHAT THIS STINT OWES DOWNSTREAM

1. **Merge `data/briefs/8950-PLATE-READS-0024.json`** into `data/plate-reads.json` (append, do not
   substitute). Until then `plate-gate.mjs` fails on fifteen of my sixteen `[var:]`.
2. **Apply `data/briefs/8950-PENDING-TEI-PATCHES-0024.md`, Part D first.** 0141B is the one site
   where the English outruns its Latin.
3. **At the merge, reconcile with the 0000–0003 stint on 1Cor 9:11** — it fired at 0081A, I declined
   at 0141D, and the two Migne printings genuinely differ (§3c). The two calls are consistent; they
   should not be swept into agreement.
4. **`[sic:]` markers owed** once the patches land, at eight columns: 0133C (*sonorem*),
   0136D (*par quem*), 0137C (*accdperat*), 0139C (*incanationem*), 0140A (*est.*), 0140C (the
   dropped *sub*), 0141A (*electorem*), 0141C (*caanem*).
