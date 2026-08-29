# *Glossa ordinaria*, **Liber Esther** (PL 113, 0739C–0748C) — cruces

Translated 2026-08-18, one translator, 4 chunks (3,252 Latin words), on Opus.
`verify-english.mjs`: clean except **one expected, pre-announced failure** — see §0.

**Apparatus: 10 `[var:]` · 1 `[sic:]` · 2 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 1 `[nt:]` ·
47 `[n:]`** (18 / 12 / 11 / 6, exact parity with the Latin twins).
Structure: PROLOGUS + CAPUT PRIMUM → CAPUT X, eleven heads, 1:1.
**Guillemets: 107 `«` / 106 `»`, 1:1 with the Latin. Three of Migne's own defects account
for the imbalance and stay uncorrected** (§3).
**Italics: 3 spans (1 `*usque ad*`, 2 guilleted-elsewhere scripture quotations), 1:1.**
**Question marks: ONE in the Latin (0740D), one in the English. None supplied.**
Column anchors: 34, verbatim and in order.

---

## §0 · ⛔ ONE OPEN DEPENDENCY — READ BEFORE SHIPPING

`verify-english.mjs` reports exactly one error and it is **expected**:

> `0000.md: [sic: *convivum*] is not verbatim in the Latin twin`

This is the orchestrator's plate finding at 0739D (§2.2). Migne's plate prints **`convivum`**;
our TEI reads `convivium`. The `[sic:]` is correct against the plate and **cannot pass the
substring check until the pending `data/tei-patches/8948.json` restores `convivum` to the
Latin side.** The orchestrator holds that patch and will apply it after these files close.
**Do not "fix" the marker by deleting it** — that would put back the silent upstream repair
this edition exists to expose.

Every other check passes: columns, notes, sections, guillemets, italics, question marks,
frontmatter verbatim, no duplicate paragraphs.

---

## §1 · CONVENTIONS — INHERITED, NOT RE-DERIVED

Ruth (8968) §1 and **Tobit (8970) §1** govern this book unchanged and **nothing here
re-opened them**: `VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary
lemma is rendered as the phrase it stands for; sigla ride as ordinary `[n: …]` notes with
Migne's own internal spacing; guillemet marks are sacred and 1:1, and notes and column
anchors legitimately sit **inside** guillemet spans (this book does it constantly — e.g.
0742B, where `[0742B]` falls inside the I Cor. 15:9 quotation, and 0740C, where `[0740C]`
falls inside the Matt. 22:2 quotation).

**What Tobit did NOT cover, decided here, for the OT guillemet books still to come:**

### (a) `usque ad` in this book is USUALLY A LEMMA, not the abridgment formula

Tobit ran **17** `*usque ad*` abridgments. Esther runs **one** — at 0739C, in the opening
Rabanus extract, and it is the only italic in chunk 0. But Esther also prints
**`« Usque ad fores. »` at 0744A** — Esther 4:2 — which is a **guilleted lemma**, not an
abridgment, and is Englished as one ("« As far as the doors. »"). ⚑ **The typography is the
test and it is reliable in this recension: the formula is always italic, a lemma is always
guilleted.** An agent working from a word-search rather than the markup will conflate them.

No verb was supplied to the one genuine abridgment; it ends mid-clause and stays there.

### (b) The fragment rule YIELDS to the negation rule where they collide

Ruth's settled rule renders a stump as the phrase it stands for. Twice here that would have
imported a word from the Vulgate, and the two cases were decided **opposite ways on purpose**:

- **0741C · `« Nolentes cogeret ad bibendum, » etc.`** The Vulgate clause is *nec erat qui
  nolentes cogeret ad bibendum*. **Migne prints only the tail, and prints NO negative.**
  Completing the fragment would have added a `nec` the plate does not carry — the exact thing
  7a forbids — so the fragment stands as a stump: **« Should compel the unwilling to drink,
  » etc.** It is awkward English and it is deliberate. (*Nolentes* → "the unwilling" carries
  the only negation Migne actually prints here.)
- **0744A · `« Non enim. »`** (Esth 4:2, *non enim erat licitum … aulam regis intrare*).
  Completed to **« For it was not lawful. »**, because the supplied word is *licitum* and
  supplying it changes no polarity. The negative Migne prints is rendered on the word he
  prints it on.

⚑ **The rule this book adds: complete a fragment freely, EXCEPT where the completion would
supply or move a negative. There the stump wins.**

### (c) ⭐ A BRACKETED SUPPLY BELONGS IN GLOSS PROSE, NEVER INSIDE A GUILLEMETED LEMMA

**The rule, and the remaining OT books inherit it: bracketed supplies belong in gloss prose.
Inside a guilleted lemma a bracket of ours reads as an interpolation into Migne's quoted
scripture, not as a supplied word in our own sentence, and the supply must therefore be made
in the surrounding prose or not made at all.**

The case that set it: at 0747A the lemma `« Et plurimum posse cognoverant. »` has its
antecedent **genuinely off the page** — the *quem* (Mardochaeus) that the abridgment cut off
sits in the previous verse — so bracketing "he" as `[Mardochaeus]` was offered, at nil risk,
because there is no competing candidate. **Declined anyway**, and the ground is the
convention rather than the risk: the supply would sit inside a quoted verse, and a reader
cannot tell our bracket from an editorial insertion into scripture.

Checked before ruling: **every bracketed supply in this work, and in Tobit (8970) and Judith
(8960), is in gloss prose.** The practice was already uniform and undeclared; this states it.
⚑ Where a lemma genuinely needs its referent named, name it in the gloss sentence that
follows — which is what this book does at 0742C (*Hanc… revocavit*, §5.3) — or leave it in
the cruces.

### (d) Migne's own dropped `« ` is not ours to restore

Three lemma-openings in this book lose their opening guillemet **and the space after `--`
with it** (§3). The English reproduces both the missing mark and the missing space, e.g.
`VERS. 8.--Every one what he would, » etc.` **This looks like our typo and is not.**

---

## §2 · PLATE STATUS — READ, AND WHAT IT SETTLED

### 1. Foot-of-page apparatus: **CHECKED ZERO** — tier 3, coverage `full`, `notes_recovered: 0`

Read by the orchestrator during this session, not by the translator, and merged here. Method:
archive.org `patrologiaecurs04migngoog` (on disk at `raw/scans/pl113/`), **PDF page =
(column + 11) / 2**, verified against the running head (p. 376 = cols 741/742, head
`GLOSSA ORDINARIA. — LIB. ESTHER.`). **Pages 375, 376, 377, 378 and 379 read at full page
width across the whole foot. No foot rule and no numbered notes; the columns simply end.**
p. 375 was read **at the mid-page work division**, where Judith ends and `LIBER ESTHER.`
begins below the rule — the case that lost three notes on PL 202.

**Write this down as a checked zero, not a skip.** Third sampling of PL 113; the volume's
"no conjecture apparatus" finding now rests on **fourteen pages across three books**.
⛔ **Therefore the two `[cj:]` markers in this work are MINE, not Migne's** (§5.1, §5.2).

⚑ **Not apparatus, not reported:** p. 378's foot carries the signature line `PATROL. CXIII.`
and the gathering number `24`. Bookbinding.

### 2. ⭐ 0739D · `convivum` — the digitization SILENTLY CORRECTED Migne. A NEW CLASS.

**The plate prints `« Grande convivum cunctis principibus. »` — `convivum`, no second `i`.**
Read at 900 dpi on p. 375; the letters are unambiguous. **Our TEI reads `convivium`.**

⚑⚑ **This runs the OPPOSITE way from every digitization defect the corpus has met.** Tobit's
`Nephtlali` was Corpus Corporum **corrupting** what Migne printed; here Corpus Corporum has
**normalized a defect away**, so our Latin column would print a word Migne did not set. Name
the three classes apart, because the next translator will meet all of them:

| class | plate | our TEI | treatment |
|---|---|---|---|
| plate defect | broken | faithful | `[sic:]`, crux |
| digitization **corruption** (Tobit `Nephtlali`) | correct | broken | tei-patch, **no** `[sic:]` |
| digitization **NORMALIZATION** (this) | broken | tidy | tei-patch **restoring the defect**, **and** `[sic:]` |

Rendered **"« A great banquet [sic: *convivum*] for all the princes. »"** — the sense is
untouched, so the English carries a real word and the bracket only records provenance
(the Tobit failure mode, §0 of the brief, explicitly avoided).

**What makes the defect local and therefore visible: Migne prints `convivii` correctly at
VERS. 5 two lines on** (`« Dies convivii. »`), and `convivium`/`convivio` correctly six more
times in the work. It is one lemma, not his habit.

⚠ **The lesson, and it is uncomfortable: a lemma that looks perfectly correct may look correct
because someone fixed it, and nothing in the Latin can tell you.** I have flagged the one
other word in this book that struck me as suspiciously tidy — *Nochum* at 0739C (§5.5) — for
a plate read, and can offer no systematic detection beyond that.

### 3. The Jerome prologue is a CROSS-REFERENCE, and nothing is missing

p. 375 prints, in order: the rule · `LIBER ESTHER.` · `B. HIERONYMI IN LIBRUM ESTHER
PROLOGUS.` · beneath it, in parentheses, `(Vide inter opera B. Hieronymi, tom. VIII.)` · a
short rule · `CAPUT PRIMUM.` — and only then the text. **Migne prints the head and sends the
reader to Jerome's own works instead of reprinting the prologue.** Our twin has this exactly
right. **No lacuna is logged, none exists**, and the head is translated like any other.

### 4. Corroborated by the plate, not merely inferred

cols 739/740: the opening lemmata and *Susan metropolis est in Perside…* · cols 741/742:
`VERS. 11. — « Ut ostenderet, » etc.` and `VERS. 15. — « Evoluto autem. »` · cols 745/746:
CAPUT VIII and CAPUT IX's `VERS. 4.` · cols 747/748: the close.

⚑ One item in the orchestrator's corroboration list — `« Si negavi quod volebant,
pauperibus… »` (Job 31:16) — **is not in this work at any column**, and is not in our twin.
It belongs to the band of another work sharing cols 747/748. Reported so it is not later read
as text we lost.

---

## §3 · THREE UNBALANCED GUILLEMET SITES — ALL MIGNE'S, ALL REPRODUCED

Guillemets run 107 `«` / 106 `»`. **A naive left-to-right counter reports the wrong sites**,
because one unclosed open at 0741C silently swallows the next close; these are the real four,
found by locating each defect individually:

| col | what Migne prints | class |
|---|---|---|
| **0741C** | `Et: « Qui se humiliat [0741C] exaltabitur [n: (Luc. X)].` | opens, **never closes** |
| **0741D** | `VERS. 8.--Unusquisque quod vellet, » etc.` | **closes with no open**, and no space after `--` |
| **0742A** | `VERS. 12.--Quae renuit. »` | **closes with no open**, and no space after `--` |
| **0742D/0743A** | `VERS. 16.-- « Tebeeth. Apud Hebraeos; Xudimos, apud Graecos; Januarius est apud Latinos.` | opens, **never closes** |
| **0747A** | `« Fiebat enim omni animae timor [n: (Ibid. II)]. Item: « Nemo audebat…` | opens, **never closes**; a second `«` opens inside it |

⚑ **The 0741D and 0742A pair is one defect twice**: both are lemma-openings that lost
`« ` — the mark *and* the following space — so the address reads `VERS. 8.--Unusquisque`
where every sound address reads `VERS. 7.-- « Vinum. »`. **The missing space is the tell**,
and it is preserved. Whether the loss is Migne's compositor or our transcription cannot be
settled from the text; it was **not** on the orchestrator's plate-read list and is offered as
a candidate for a future read.

⚑ **0747A is the one to watch for a span-extractor**, exactly as Tobit's 0728A was: the
unclosed `«` makes the two Acts quotations plus the intervening `Item:` read as a single
40-word "lemma". They are two quotations, Acts 2:43 and Acts 5:13.

---

## §4 · THE LEMMA LIST — ALL 103 SPANS, CHECKED AGAINST THE VULGATE

Esther's Latin is among the least stable in the Vulgate — Jerome translated the Hebrew book
and appended the Greek additions separately — so this section is the deliverable. **Every
span in the work appears below, including the ones that agree exactly.**

### 4a · THE DIVERGENCES — eight `[var:]` fired

| col | Migne prints | Vulgate | why it fired |
|---|---|---|---|
| **0744A** | *Sapientia enim vincit malitiam* (Sap. VII) | Wisd 7:30 *sapientiam autem **non** vincit malitia* | ⭐ **the worst site in the work.** Migne **reverses subject and object AND drops the negative**: "wisdom overcomes malice" for "malice does not overcome wisdom". Both readings serve the argument (God's counsel is not malicious), which is precisely why it would have passed unread. **No negative was supplied.** |
| **0741C** | *vade et vende **omnia** quae habes* (Matth. XIX) | Matt 19:21 *vade, vende quae habes* | *omnia* is Luke 18:22's word, not Matthew's; an **addition**, not an elision — the class Tobit's 0729B `[var:]` covers. |
| **0742C** | *Adolescentulae dilexerunt te **nimis*** | Cant 1:2 *adolescentulae dilexerunt te* | an added adverb, and the span carries **no `[n:]` at all**, so nothing else on the page tells the reader it is a quotation. |
| **0743B** | ***Justitiae** justi super eum, et impietas impii erit super eum* (Ezech. XVIII) | Ezek 18:20 *justitia justi super eum **erit*** | **plural for singular**, and the first clause's verb is gone, so the printed text gaps *erit* backwards, which English cannot do. Rendered with a bracketed supply: "The justices of the just [shall be] upon him". |
| **0744C** | *Propter quod exaltavit illum, et **dedit** illi nomen* (Philip. II) | Phil 2:9 *propter quod et **Deus** exaltavit illum, et **donavit** illi nomen* | **the subject is deleted.** The Vulgate names God as the one who exalts; Migne's clause leaves it unexpressed, and in a book whose subject is Christ throughout that is a live ambiguity, not a tidy elision. |
| **0744C** | *Apparebit mihi cras justitia mea* | Gen 30:33 *respondebitque mihi cras justitia mea* | a different verb — "shall appear" for "shall answer". |
| **0744D** | *Non est in illo, est et fuit, sed est in illo semper est* (II Cor. I) | 2 Cor 1:19 *non fuit Est et Non, sed Est in illo fuit* | rebuilt from the ground up: Migne's clause contrasts **tenses** (*est* vs *fuit*), the Vulgate's contrasts **Yes and No**. The gloss's whole point — that God has no past — depends on Migne's version and not the Vulgate's. |
| **0745A** | *Ascendens super equos tuos, et **equitatus tuus sanitas*** | Hab 3:8 *qui ascendes super equos tuos, et **quadrigae tuae salvatio*** | two nouns changed. The gloss builds on the **horse** (*super populum fidelium*), which survives; the chariots do not. No `[n:]` on this span either. |
| **0745D** | *declinabitis de via quam **ostendi** vobis* (Deut. XXXI) | Deut 31:29 *declinabitis **cito** de via quam **praecepi** vobis* | "shown" for "commanded", and *cito* dropped. The gloss cites Moses as **foretelling** the Jews' crimes, and a way merely *shown* is a weaker charge than a way *commanded*. |
| **0748A** | *qui **residui sumus, resurgemus** cum illis obviam Christo in aera* (I Thes. IV) | 1 Thess 4:16 *qui relinquimur, simul **rapiemur** cum illis **in nubibus** obviam Christo in aera* | **the rapture becomes a resurrection** and the clouds are gone — in a paragraph that is *about* the difference between souls resting before judgment and bodies rising at it. The changed verb is load-bearing for the argument it is cited to prove. |

(Ten rows, ten markers, one per divergent span: 1 in chunk 0, 5 in chunk 1, 3 in chunk 2,
1 in chunk 3. Counted in the files.)

### 4b · DIVERGENCES FOUND, MARKER DECLINED — with reasons, because a blind reader will look

- **0740C · *Simile **est** regnum coelorum*** (Matth. XXII). Matt 22:2 reads *Simile **factum
  est***. A dropped auxiliary; the comparison is unchanged. No marker.
- **0741B · *Columnas fecit argenteas*** (Cant. III). Cant 3:10 has *Columnas **ejus** fecit*.
  A dropped possessive in a lemma the gloss does not build on.
- **0741B · *Beati **enim** pauperes spiritu*** (Matth. V). Matt 5:3 has no *enim*. A
  connective added to fit the sentence frame — the citing author's, not a textual variant.
  Same class: *Fiebat **enim** omni animae timor* (0747A, Acts 2:43 *autem*), *Nemo audebat…
  **et** magnificabat* (0747A, Acts 5:13 *sed*), *Cumque **et** secundo* (0743A, Esth 2:19).
- **0741D · *Ubi venit plenitudo temporis, misit Deus Filium*** (Gal. IV). Gal 4:4 has *At
  ubi…* and *Filium **suum***. Elision, no sense change.
- **0742B · *Ego sum minimus apostolorum*** (I Cor. XV). 1 Cor 15:9 has *Ego **enim** sum*.
- **0742B · *Quia vos indignos judicatis vitae aeternae*** (Act. XIII). Acts 13:46 has
  *quoniam indignos **vos** judicatis **aeternae vitae***. Connective and word order only.
- **0743B · *Historiis et annalibus traditum coram rege*** (Esth 2:23). The Vulgate has
  *traditumque est historiis, et annalibus **mandatum** coram rege*. Recast and compressed
  into a participle; the assertion — that it was entered in the records before the king — is
  identical, and the gloss reads it as the two Testaments either way. **Declined, and this is
  the closest call in §4b**; a reader who thinks it should have fired has the reading here.
- **0743C · *Justus angustia liberatur, et traditur impius pro eo*** (Prov. XI). Prov 11:8
  has *Justus **de** angustia **liberatus est**, et **tradetur** impius*. Perfect and future
  flattened to a gnomic present, and *de* dropped. A proverb asserts the same thing in either
  tense. Declined.
- **0744B · *Omnia quaecunque voluit fecit in coelo et omnibus abyssis*** (Psal. CXIII).
  **A conflation, not a variant:** the head is Ps 113:11 (*omnia quaecumque voluit fecit*),
  which is what the note cites and cites correctly; the tail *et omnibus abyssis* comes from
  Ps 134:6, whose *in terra, in mari* is dropped and whose *in* before *omnibus* is gone
  (rendered "and in all the depths", the preposition governing both members). **No `[var:]`:
  the printed citation is right for the verse it names**, and a marker would have to assert a
  received reading for a line that is two lines joined.
- **0744C · *Nolite solliciti esse **de crastino*** (Matth. VI). Matt 6:34 has *Nolite **ergo**
  solliciti esse **in crastinum***. Same meaning; the semicolon inside the guillemets is
  Migne's and is kept.
- **0745C · *Tunc invocabunt, et non exaudiam **eos*** (Prov. I). Prov 1:28 has *invocabunt
  **me**… et non invenient **me***. Objects moved, not changed.
- **0746A · *Custoditur justo substantia **peccantis*** (Prov. XIII). Prov 13:22 has
  *peccatoris*. Participle for noun, identical sense.
- **0746A · *Auferetur a vobis regnum*** (Matth. XXI). Matt 21:43 has *regnum **Dei***.
  A dropped genitive; the gloss glosses it as the Jews' dignity, which needs no *Dei*.
- **0745D · *Est qui accusat vos, Moyses, in quo speratis*** (Joan. V). John 5:45 has *in quo
  **vos** speratis*. Dropped pronoun.
- **0747A · *Fiebant **prodigia et signa** multa*** (Act. V). Acts 5:12 has *signa et
  prodigia*. Order only.
- **0746B · *Tradidit Mardochaeo*** (Esth 8:2). The Vulgate reads *deditque eum Mardochaeo*.
  A synonym for the verb and the pronoun clipped; the lemma is a stump either way. Declined
  **and flagged** — Esther's transmission is unstable exactly here, and this is the one lemma
  in the book where I would not be surprised to learn Migne's copy-text simply read
  *tradidit*.

### 4c · CHECKED AND AGREEING WITH THE VULGATE — named, not summarized

**Esther lemmata, chunk 0 (0739C–0742B):** `Susan civitas,` (1:2) · `Tertio igitur anno.`
(1:3) · `Grande convivum cunctis principibus.` (1:3 — the words agree; the **spelling** does
not, §2.2) · `Dies convivii.` (1:5) · `Et pendebant.` (1:6) · `Et columnis marmoreis
fulciebantur.` (1:6, word for word) · `Super pavimentum.` (1:6) · `Vinum.` (1:7) ·
`Nolentes cogeret ad bibendum,` (1:8, tail of the clause — §1b) · `Unusquisque quod vellet,`
(1:8) · `In palatio, ubi rex Assuerus,` (1:9) · `Ut ostenderet,` (1:11) · `Quae renuit.`
(1:12) · `Responditque Mamuchan audiente rege atque principibus: Non solum regem laesit
regina,` (1:16, **word for word including the colon**).

**chunk 1 (0742C–0744C):** `Qui fuit.` (2:7) · `Esther.` (2:8) · `Et septem puellas.` (2:9) ·
`Quae noluit.` (2:10) · `Ingredientesque.` (2:13) · `Atque inde.` (2:14) · `Evoluto autem.`
(2:15) · `Cumque et secundo.` (2:19, §4b) · `Duo eunuchi regis,` (2:21) · `Historiis et
annalibus traditum coram rege,` (2:23, §4b) · `Aman filium.` (3:1) · `Missa est sors.` (3:7) ·
`Tulit ergo.` (3:10) · `Usque ad fores.` (4:2 — **a lemma, not the abridgment formula**,
§1a) · `Non enim.` (4:2, §1b) · `Rursumque.` (4:15) · `Virgam auream.` (5:2) · `Si inveni in
conspectu.` (5:8).

⚑ **`Tebeeth.` at 0742D is not a Vulgate divergence and is not marked.** The Vulgate reads
*Tebeth* (Esth 2:16); Migne prints *Tebeeth*, and the same clause prints *Xudimos* for the
Greek month (Ἀυδυναῖος / Audynaeus). **Both are transliterated proper names in a list of
three calendars**, which is exactly the environment in which spellings vary legitimately, and
neither is a non-word. Rendered as printed, no `[sic:]`, no `[var:]`. **Declined, and named
so a reader with the plate can close it** — if the plate reads *Tebeth*, this is a
digitization corruption of the Tobit class and takes a patch, not a marker.

**chunk 2 (0744D–0746D):** `Noctem illam duxit rex insomnem,` (6:1, word for word) ·
`Ventum est.` (6:2) · `Festina.` (6:10) · `Tulit itaque.` (6:11) · `Secunda die,` (7:2 —
**no `VERS.` address**, §5.6) · `Intravit in hortum.` (7:7) · `Et statim.` (7:8) · `Harbona.`
(7:9) · `In domo Aman.` (7:9) · `Die illo.` (8:1) · `Domum Aman.` (8:1) · `Tulitque rex.`
(8:2) · `Tradidit Mardochaeo.` (8:2, §4b) · `Procidit ad pedes,` (8:3) · `Obsecro ut.` (8:5) ·
`Accitisque scribis,` (8:9) · `Qui centum viginti.` (8:9) · `Interficerent,` (8:11) ·
`In Susan,` (8:14).

**chunk 3 (0747A–0748C):** `Et plurimum posse cognoverant.` (9:4 region) · `Itaque
percusserunt Judaei.` (9:5) · `Quorum ista sunt nomina.` (9:6) · `In tantum.` (9:16) ·
`Dies autem.` (9:17) · `Et misit Phur,` (9:24) · `Isti sunt dies.` (9:28) · `Rex vero
Assuerus omnem.` (10:1).

✅ **`Et plurimum posse cognoverant.` at 0747A — CLOSED AT THE BLIND READ: clean, no defect,
no marker.** The lemma is the tail of an accusative-and-infinitive whose head *quem*
(Mardochaeus) the abridgment cuts off, and whose subject — "they", the officials of Esth 9:3
— sits in the **previous verse**. My English is correct as written: "they" for the officials,
"he" for the severed *quem*, *plurimum posse* literal, *cognoverant* pluperfect ("had
learned"). ⚠ **Record the basis honestly: this was settled from the reading agent's own
knowledge of Esther 9:4, with no witness on disk** — the same evidentiary footing as my own
declination, resolved by a second reader rather than by a text. **Bracketing "he" as
`[Mardochaeus]` was offered and DECLINED**: the antecedent is genuinely off-page, but it has
no competing candidate, and the supply would sit **inside a guilleted scripture lemma**,
where a bracket of ours reads as an interpolation into the quoted verse rather than as a
translator's supply. Every bracketed supply in this work is in gloss prose. The convention
holds.

**The open question as I left it, kept because the shape of it is worth a later agent's
time:** No Vulgate text is on disk in this repo, so every check in this section is
against my own knowledge of the Clementine, and for this phrase — which sits at the Esth
9:3/9:4 seam, where the chapter-and-verse division itself varies between editions — that was
not enough to be sure whether Migne's *cognoverant* stands where the Clementine puts it, or
whether his `VERS. 4.` address is one verse high. **Declined rather than fired on a
half-check**, which is the call Tobit's `Exsurgens` vindicated. A reader with the text can
close it in one look. The rendering ("And they had learned that he could do very much") is
right for the printed words either way.

### 4d · NON-ESTHER SCRIPTURE QUOTED INSIDE THE GLOSSES — read word by word

The brief names these as where the reach for a familiar English Bible happens, so each was
checked against Migne's Latin and not against the Douay:

**Exact:** *Homo quidam fecit coenam magnam: et vocavit multos* (Luke 14:16 — the **colon**
is Migne's and rides inside the guillemets) · *Accinxi te et non cognovisti me* (Isa 45:5) ·
*Non sum missus nisi ad oves, quae perierunt domus Israel* (Matt 15:24) · *Ego confirmavi
columnas ejus* (Ps 74:4) · *Discite a me, quia mitis sum* (Matt 11:29) · *Charitas Dei
diffusa est in cordibus nostris* (Rom 5:5; *Charitas* for *caritas* is orthography, Pattern
9) · *Qui potest capere capiat* (Matt 19:12) · *Qui se humiliat exaltabitur* (Luke 14:11) ·
*Alias oves habeo quae non, etc.* (John 10:16) · *Ibunt hi in supplicium aeternum: justi
autem in vitam aeternam* (Matt 25:46) · *Pater tuus Amorrhaeus, et mater tua Cethaea*
(Ezek 16:3) · *Astitit regina a dextris tuis* (Ps 44:10) · *attingit a fine usque ad finem
fortiter: et disponit omnia suaviter* (Wisd 8:1, minus *ergo*) · *Data est mihi omnis
potestas in coelo et in terra* (Matt 28:18) · *Non remanebit ex eo quidquam usque mane*
(Exod 12:10, *Non* for *nec* and reordered — sense identical) · *Deposuit potentes de sede,
et exaltavit humiles* (Luke 1:52) · *Convertetur Libanus in Chermel, et Chermel in saltum
reputabitur* (Isa 29:17) · *Quia omnis qui se exaltat, humiliabitur* (Luke 14:11) · *Cum
fortis armatus custodit atrium suum* (Luke 11:21) · *Confidite, ego vici mundum* (John
16:33) · *Sortes mittuntur in sinum: sed a Domino temperantur* (Prov 16:33) · *Cum judicatur,
exeat condemnatus* (Ps 108:7) · *In matutino interficiebam* (Ps 100:8) · *Si vis ad vitam
ingredi, serva mandata* (Matt 19:17, minus *autem*).

**Divergent:** the eight of §4a and the fourteen of §4b.

**Unidentified, and reported as such:** **0746B · `« Nutrivit corda fidelium. »`** I cannot
place this in the Vulgate. It is guilleted and cited as scripture (*unde:*) and carries **no
`[n:]`**. Rendered literally ("He hath nourished the hearts of the faithful"), unmarked —
a `[var:]` requires a received reading to set against it and I have none. **Named so that a
reader who recognizes it can close it.**

### 4e · ⭐ FIVE WRONG CITATIONS — AND ONE IS AN OFF-BY-ONE CHAIN. NOTHING CORRECTED.

Runbook false positive 2, and Tobit's three wrong locators were all correctly left alone.
Nothing here is corrected either.

- **0741C · `(Luc. X)`** on *Qui se humiliat exaltabitur* — Luke **XIV**:11 (or XVIII:14).
- **0744A · `(Psal. XIV)`** on *Astitit regina a dextris tuis* — Ps **XLIV**:10. An X for
  an XL.
- **0745B · `(Luc. XXIV)`** on *Quia omnis qui se exaltat, humiliabitur* — Luke **XIV**:11.
  ⚑ **The same verse is misattributed twice in this book, to two different wrong chapters**
  (Luc. X at 0741C, Luc. XXIV at 0745B), which is worth recording because it argues the
  errors are compositorial rather than a bad copy-text.

⭐ **The chain at 0744C, and it is the most valuable single finding in the apparatus.**
Three quotations run in a row and **the notes are displaced one place to the right**:

| what Migne prints | the verse actually is | the note attached |
|---|---|---|
| `« Nolite solliciti esse de crastino; »` | Matt 6:34 | **none** |
| `« Apparebit mihi cras justitia mea [n: (Matth. VI)]. »` | Gen 30:33 | `(Matth. VI)` ← belongs to the row above |
| `« Non remanebit ex eo quidquam usque mane [n: (Gen. 30)]. »` | Exod 12:10 | `(Gen. 30)` ← belongs to the row above |

**Every note is right for the quotation before it and wrong for the one it sits on.** The
first quotation is left bare and the last is left holding a locator two books away.
⛔ **Reproduced exactly as printed, all three, including the bare first quotation.**
Correcting even one would break the chain's shape and destroy the evidence that it *is* a
chain — and Migne's own text names Jacob and Genesis in the running prose (*et Jacob in
Genesi ait*), which is how the displacement is detectable at all.

⚑ Note also that `(Gen. 30)` prints an **arabic** numeral where all 46 other notes in the
work print roman. Reproduced. It is consistent with a note set out of sequence in haste.

**A near-miss that is NOT an error:** `(Sap. VII)` at 0744A is correct for Wisd 7:30, and
`(Ibid., VIII)` correctly steps to Wisd 8:1 — Migne's *Ibid.* chain here works perfectly,
which is the positive control for §4e.

---

## §5 · THE BOOK'S OWN CRUCES

### 5.1 ⭐ 0744D · *In se **mobilis** permanens* — the sentence denies its own argument. `[cj:]` FIRED.

> *In se mobilis permanens cursus temporum et actus omnium contemplatur, et nulla eum latet
> cogitatio cui omnia praesentia.*

Rendered literally: **"Remaining movable in himself, he contemplates the course of times and
the acts of all."** The clause it introduces says nothing escapes him *to whom all things are
present* — the standard Boethian contrast between the unmoved contemplator and the moving
times. **The printed word asserts the opposite of the sentence it opens.**

The conjecture is ***immobilis***, two letters away, and it yields exactly the argument:
"Remaining unmoved in himself." Pattern 18's shape precisely — *mobilis* is a real word in a
real case, so Pattern 12 has nothing to wrap and Pattern 7 must render it, **and the English
then asserts something the author did not.** Marked additively:

`Remaining movable [cj: *mobilis*; read *immobilis*, "unmoved"] in himself`

⚑ **The rival construal is recorded because it is not silly.** *mobilis* could be taken with
*cursus* — "abiding in himself, he contemplates the **movable** course of times" — which
construes as sense and needs no conjecture. It fails on form: *cursus* here must be
accusative (object of *contemplatur*), and the accusative plural of *mobilis* is *mobiles*,
not *mobilis*. **The rival reading requires its own emendation**, so it is not the cheaper
one. Both are on the page for a reader who disagrees.

⚠ The `[cj:]` is **mine**, not Migne's — the foot of p. 376 is a checked zero (§2.1).

### 5.2 0741B · *Ex alibi* — a formula this book uses correctly three other times. `[cj:]` FIRED.

Migne prints `Ex alibi: « Columnas fecit argenteas… »` where the book prints **`Et alibi:`**
at 0740D, 0741C and 0744C, and `alibi` alone at 0747A. *Ex* is a real preposition and it
governs nothing here, so it has no slot (Pattern 12 test 1) — but neither is it a non-word,
so it cannot be carried in a `[sic:]`. Rendered **"From elsewhere"** and marked
`[cj: *Ex*; read *Et*, "And elsewhere"]`.

⭐ **Declining this was live and was rejected on Tobit's *notionum* ground:** the faithful
English is merely odd rather than false, so Pattern 18a's bar is not obviously cleared — but
declining would leave the site with **no apparatus at all**, and a reader would meet "From
elsewhere" with nothing to tell him the page is broken. **The reportable defect is the
absence of a marker, not the choice of reading.**

### 5.3 ⭐ THE UNEXPRESSED SUBJECT — every supplied pronoun, and what decided it

This is the brief's dominant defect class and this book's crowded cast (Assuerus, Vasthi,
Esther, Mardochaeus, Aman, the Jews, the Church, the Synagogue, Christ, the devil) is its
worst ground. **Five sites needed a decision. All five took a bracketed supply rather than a
bare pronoun**, because a bare pronoun binds silently in a sentence whose referent changes
mid-clause — Ruth's 0538C failure.

**(i) 0739D · *incarnationis suae sacramentum patefecit*.** → **"he [Christ] laid open the
mystery of his incarnation."** The lemma is *Tertio igitur anno* and the gloss's own next
sentence names the three times, the third *sub gratia*. The banqueting king is Assuerus in
the letter and Christ in the allegory, and *incarnationis suae* can only be Christ's. Not
close.

**(ii) 0740C · *Judaeos… de manu inimicorum liberat, atque **ipsos** juste condemnat*.**
→ **"delivers the Jews… out of the hand of their enemies, and justly condemns those same
[enemies]."**

⚠ **This is the sentence the whole book turns on and both readings parse.** *ipsos* is
adjacent to *Judaeos* and an English reader will bind it there — "and justly condemns them",
i.e. the Jews — which is a theologically loaded claim the gloss does make elsewhere (0743C,
0747A). **It is the wrong reading here.** Two things decide it: the verb *liberat* has just
made the Jews the beneficiaries, so *atque* cannot swing to condemning them without an
adversative; and the Esther story the clause is glossing has Assuerus condemn **Aman and the
enemies**, which is what *inimicorum* names two words earlier. The bracket is there because
the wrong reading is the one that arrives first.

**(iii) 0745B · *Sed ubi Esther petitionem suam aperuit, damnatus ad poenam secessit*.**
→ **"he [Aman], being condemned, withdrew to his punishment."** *damnatus* is masculine and
Esther is the *cum*-clause subject; the paragraph's next sentence names Aman by name and
casts him out of the banquet. No live alternative.

**(iv) 0745C · *reginam pro salute sua deprecari **contendit***.** → **"he [Aman] strove to
beseech the queen for his own safety."** The ablative absolute has just made *rex* the
subject of *properante*, so English reaches for the king — **and the king is exactly who it
is not.** Esth 7:7 has Aman rise to beg Esther for his life, and the following clause (*sed
tempus opportunum non habuit*, and then the Proverbs 1:28 proof-text about calling too late)
is about the doomed man, not the king. *sua* referring to a non-subject is ordinary medieval
Latin.

**(v) 0746B · *Laudante et praedicante instantiam magistrorum, a Domino… accipiunt*.**
→ **"[The king] praising and proclaiming the earnestness of the masters, they receive from
the Lord grace for grace."** The ablative absolute has **no noun at all** — a participle pair
hanging on nothing. The lemma is *Tulitque rex* (Esth 8:2), so the king is the one supplied,
and *magistrorum* being genitive rules the masters out as the praiser. The plural *accipiunt*
is the masters. ⚠ **The BRACKETS were added at the blind read (§7.3): my first version
supplied "The king" bare**, so a reader met a well-formed ablative absolute and could not
learn that the noun is not on the page.

**(vi) ⭐⭐⭐ 0748C · *historialiter, enim non omnem terram tributariam fecit, quia nec
habuit*.** → **"historically, for he [Assuerus] made not all the earth tributary, because
neither did he possess it."**

⚠ **ADDED AT THE BLIND READ (§7.1), and it is the worst site in the work.** My first version
read a bare "he", and the only antecedent the English offered was **Christ**, named three
words earlier and subject of both preceding verbs. **The subject is Assuerus.**
***historialiter* marks the register**, and the register is the whole architecture of the
sentence: allegorically the verse's "all the earth" is true, of Christ, *who filled the whole
world*; **historically** it is not, because the king of Esther 10:1 never possessed all the
earth to tax it. The tell I had in front of me and did not read: ***quia nec habuit* is false
of Christ under this gloss's own premise**, and my English therefore had the page saying
Christ did not make the earth tributary because he did not possess it — **flatly
contradicting *implevit totum mundum* eight words earlier, in the same sentence.**

⛔ **This is Ruth's 0538C in Esther's clothing, and note what did NOT catch it.** The subject
is not ambiguous between two women; it is ambiguous between the **literal and the allegorical
register**, and the marker that disambiguates it (*historialiter*) is an adverb, not a noun.
Every antecedent-hunting habit I had was looking for a name.

⚑ **And the one place a supplied pronoun is deliberately NOT bracketed: 0742C.** *Hanc
Nabuchodonosor… transtulit, sed pietas divina… revocavit* — "called **her** back". The
antecedent is *Hanc*, printed two clauses earlier and referring to Esther, and no second
feminine is in play. Recorded so the absence of a bracket reads as a decision.

⚑⚑ **On the Vasthi/Esther "she" the brief warned about: it does not occur in this book.**
The gloss reads Vasthi's refusal (0742A) and Esther's raising (0742B onward), but **Migne
never runs the two women through unmarked pronouns in one sentence** — each paragraph names
its subject or inherits it from its own lemma. **Checked paragraph by paragraph and reported
as a checked absence, not as a section skipped.**

### 5.4 The negation audit — 61 particles, every one carried, one RELOCATED and caught

Brief test 2 run as specified: for each printed negative, the single Latin word it attaches
to was named, then that word found in the English and the negative checked to be on it.
**Not "are all the negatives present."**

⭐ **It caught one, and count-based checking would not have:** **0742A ·
*Non solum **regem** laesit regina*.** My first version read "The queen hath **not only
injured** the king" — the negative floated onto the verb, where the Latin puts it on
*regem*. The verse's whole force is that the injury reached **beyond** the king (*sed et
omnes populos*), which the misplaced negative blurs. Corrected to **"The queen hath injured
not only the king."** ⚠ Nothing was added and nothing dropped, so every count matched before
and after. This is the 2 Thessalonians mechanism exactly, in a lemma rather than in gloss
prose.

**Every other site, checked and carried** (attachment named in each case): *Neque* on
*necesse* (0740C) · *non* on *in hoc* · *nec* on *Aaron* · *Nec* on *Salomon* · *non* on
*cognovisti* (0740D) · *non* on *demonstrant* — the work's **only question mark**, preserved
· *Non… nisi* on *sum missus* (0741A) · *Nolentes* (0741C, §1b) · *Nemo* on *cogitur* ·
*non* on *servos* · *non* on *necessitatem* · *nulli* on *noceat* (0741D) · *non* on
*augeat* ×2 · *noluit* / *noluerunt* on *introire* / *venire* (0742A) · *non* on *sum
dignus* (0742B) · *absque* on *misericordia* (0742C) · *noluit* (lemma) · *non… ultra* on
*sustinuit* · *nec… ultra* on *habet* (0742D) · *nisi* on *restituatur* · *Non* on *sufficit*
(0743A) · *non* inside the John 10:16 stump · *nolunt* on *consentire* (0743C) · *Non enim*
(0744A, §1b) · *Nullus* on *potest* · *non* on *esse* · *sine* on *intermissione* (0744B) ·
*non* on *deputatur* (0744C) · *Non… sed* on *in praesenti* · *Nolite* on *solliciti esse* ·
*Non* on *remanebit* · *nulla* on *cogitatio* (0744D) · *Non* on *est* · *nunquam* on
*tradentur* · *invitus* (0745A) · *non valentes* on *occultare* · *nihilum* (0745B) · *non*
on *habuit* ×2 (0745B, 0745C) · *non* on *exaudiam* and on *invenient* · *Ne* on *pullularent*
(0746D) · *Nemo* on *audebat* (0747A) · *Non solum* on *alios operarios* · *nec* on *curant*
· *non* on *exquirimus* (0747B) · *nec* on *cogimus* · *non* on *in toto* · *non* on *est
historia* · *nec* on *subsistere* · *nec* on *procedere* · *non* on *humanum* (0748B) ·
*sine* on *manibus* (0748B) · *non* on *fecit* (0748C) · *nec* on *habuit* · *nulla* on
*expositio* (the closing `[nt:]`).

**None dropped, none added.** ⚑ Two are worth naming because carrying them produces strain:

- **0744A · *Sapientia enim vincit malitiam*** (§4a). Migne's Wisdom quotation has **no
  negative where the Vulgate has one.** None was supplied. The `[var:]` is the only thing on
  the page that tells the reader.
- **0748C · *quia nec habuit*** — "because neither did he possess it", of Christ and the
  earth, closing the work on a flat denial that reads oddly beside *implevit totum mundum*
  four words earlier. It is the historical/allegorical distinction the sentence makes, and it
  is Migne's. Rendered as printed.

### 5.5 Proper names and numbers rendered as printed

- **0739C · *post Darium patruum cognomento **Nochum*** — Artaxerxes III is *Ochus*, and
  *cognomento Ochum* → *cognomento Nochum* is the shape of a word-boundary slip. **No
  `[sic:]`**: it is a proper name in its correct case, not a non-word, and Pattern 7 renders
  it ("surnamed Nochus"). ⚑ **This is the one other word in the book I would ask the plate
  about** (§2.2's closing warning), because the alternative is that our TEI made it.
- **0739C · *Susi fluvio*** and **0746D · *Susis equitatio vel evertens interpretatur***. The
  book gives Susan **two incompatible etymologies** eight columns apart — from a river, and
  from "riding/overturning". Both rendered as printed; the contradiction is Migne's and is
  not adjudicated.
- **0742D · *Xudimos*** (§4c). Rendered as printed.
- **0746C · *centum et viginti*** and the arithmetic *denarius × duodenarius = 120*, plus
  *septenarius* → 127. Rendered as printed; the sum is right and the Vulgate's 127 provinces
  is what it is reaching.

### 5.6 Structure and layout as printed

- **CAPUT VII opens with no `VERS.` address at all** — `« Secunda die, » etc.` stands bare
  where every other chapter opens with one. **Reproduced; nothing supplied.**
- **Verse numbers ascend within every chapter. No out-of-sequence verse mark anywhere in
  this book** — checked chapter by chapter and recorded as checked, unlike Jude.
- **Column 0747D is absent**: the sequence runs 0747C → 0748A. Migne's, or the plate's
  column-band arithmetic; **not renumbered, not reported as loss.**
- **Columns 0740A and 0740B are absent** from this work: the sequence runs 0739D → 0740C.
  This is the documented interleaving with Judith (8960), which runs to 0740B in the same
  columns — **runbook false positive 1, not reported as a defect.**
- **The `[nt:]` at 0748C.** The closing note is editorial *prose* — a statement that the old
  copies carry no exposition past this point and that chapters 11–16 are therefore omitted —
  and takes Pattern 15's translation, at the same marker index. **The opening note
  `( Vide inter opera B. Hieronymi, tom. VIII.)` stays `[n:]`**: it is a cross-reference
  locator, not a statement, and §2.3 shows it is doing the work of a *see-under* on the
  plate. Judged by content, not by length; the two are within four words of each other.
- **Migne's internal spacing in the two parenthetical notes is reproduced character for
  character**, including the space after `(` and before `)`.

### 5.7 Punctuation the plate prints and the English keeps

Test 3 (band-by-band comparison, never by total) was run against the column anchors, which
partition both twins identically. **Zero mismatched bands at file close** — but it caught
**seven** sites during drafting, and the totals would have hidden at least three of them:

| band | what I had done | Migne prints |
|---|---|---|
| 0742B pre | a semicolon in *Esther dicitur absconsa, Edissa* | a comma |
| 0743D | dropped the colon after *munire conatur* | a colon |
| 0745A | a colon after *dexterae Excelsi* | a comma |
| 0745D | a comma after *innoxios opprimere volebant* | a semicolon |
| 0747C | a semicolon after *solemnitatem agunt* | a comma |
| 0748A | a semicolon after *quietem animarum perfectam significat* | a comma |
| 0748B | a semicolon after *regit arbitrium* | a comma |

⚠ **In chunk 0 the colon totals matched at 23 against 23 and the bands matched too — that is
a genuine clean, not the Tobit cancellation.** In chunks 1–3 the totals were off by one in
each direction and would have looked like noise; **the bands named the exact sites.**

⛔ **No comma→semicolon sweep was performed and none was considered.** Migne prints
**25 semicolons** in this work's four chunks (7 / 6 / 11 / 1), so Tobit's narrow exception —
which rested on his printing *zero* in that book's first chunk — **does not apply here and
was not invoked.** The plate was counted before the question was asked.

Kept as printed, individually:
- **0740C · a colon inside a quoted verse**: *« Homo quidam fecit coenam magnam: et vocavit
  multos »*. Inside the guillemets, where he sets it.
- **0741B · a full stop inside the guillemets before the note**: *« Beati enim pauperes
  spiritu, quoniam ipsorum est regnum coelorum. [n: (Matth. V)]. »* — **two terminal stops,
  one before the note and one after.** Both kept.
- **0744C · a semicolon inside a quoted verse**: *« Nolite solliciti esse de crastino; »*.
- **0741C · `Item.` with a full stop** where the parallel formulae read *Et:* with a colon.
- **0742A · `Non solum regem laesit regina`** carries **a colon after *principibus*** inside
  the guillemet span, and the span opens with a whole clause of narrative before the quoted
  speech. Both inside, as printed.
- **0748C · `historialiter, enim non omnem terram`** — a comma between *historialiter* and
  *enim*, splitting a postpositive from its clause. Rendered with the comma where he sets it.
- **0740C · ` -- ` standing alone between two guillemet spans** (*« Grande convivum… » -- «
  Simile est regnum coelorum…*). Reproduced. **Not an em-dash of ours and not to be reported
  as one.**

### 5.8 Sentences left broken because the plate breaks them

- **0741A · *In circumcisionis sacramento Dominicae resurrectionis, et Novi Testamenti et
  verae circumcisionis: et octo sunt beatitudines…*** The first limb **has no verb**, and the
  colon before *et octo sunt* leaves it dangling. Rendered as printed, verbless. **Nothing
  supplied.** (The argument wanted is the octave — eighth day, eight beatitudes — and the
  missing predicate is presumably *significatur* or the like. Not supplied, not conjectured:
  what is missing is a verb, and `[cj:]` requires a printed word to gloss.)
- **0741A · *Magnatum vel primitivorum fidelium primi refecti sunt*.** Two genitives before a
  bare *primi*. Rendered "The first of the great ones, or of the primitive faithful, were
  refreshed." **The rival binding — *primitivorum fidelium* as a unit, "of the primitive
  faithful", against *magnatum… primitivorum* as parallel genitives — makes no difference to
  the sense and was not adjudicated.**
- **0746C · *ita decalogi custodia apostolica traditione per totum orbem diffusa, septiformis
  Spiritus gratia in cordibus fidelium infunditur vel est consummata*.** The *ita* clause
  opens with a **nominative absolute that never gets its verb**, and then a second subject
  (*gratia*) takes over. Rendered as printed with the anacoluthon intact. Nothing supplied.
- **0747A · *Non solum alios operarios… damnandos judicat, sed etiam carnales Judaeos…
  sensuros*.** The second limb's *esse* is gapped, which Latin permits and English does not;
  rendered by recasting the second limb as a *that*-clause ("but also the carnal Jews… that
  they shall feel"), which supplies no word and loses no clause. Logged because the asymmetry
  is visible in the English and is Migne's.
- **0745A · *qui **si** videbatur gloriosior, infra alios apparet vilior*.** The *si* is odd
  where sense wants *qui* alone or *quondam*. **Rendered with the *si*** — "he who, if he
  seemed the more glorious, appears beneath others baser and lower". **No `[cj:]`**: the
  printed sentence construes as it stands and asserts nothing false, which is Pattern 18a's
  bar. ⚠ **REPAIRED AT THE BLIND READ (§7.2). My first version silently dropped the *si*
  altogether**, and that entry claimed it had been rendered when it had not. See §7.2.

### 5.9 `[sic:]` and `[cj:]` candidates considered and DECLINED, with reasons

- **0742D · *Tebeeth* / *Xudimos*** — §4c. Proper names in a calendar list. Declined.
- **0739C · *Nochum*** — §5.5. Proper name in its correct case. Declined; plate read wanted.
- **0743B · *Justitiae* for *justitia*** — took a `[var:]` (§4a), **not** a `[sic:]`.
  *Justitiae* is a real word in a real case (nominative plural) with a real slot, so Pattern
  12's boundary excludes it; what is wrong is the agreement with the received text, which is
  Pattern 14's business. **The two markers answer different questions and only one applies.**
- **0746D · *rediviva plantaria*** — *redivivus* of plants is attested; not a defect.
- **0742D · *competentium*** — a genuine technical term (catechumens enrolled for baptism).
  ⚠ **Rendered "the competentes" in ROMAN, not italic Latin**, contrary to the register rule
  for untranslatable technical terms, **because chunk 1's Latin twin prints zero italics and
  an italic span here would break italic parity 1:1.** The register rule and the parity rule
  collide and parity wins; recorded because it is the first time in this block they have
  collided, and a later book will meet it again.

### 5.10 Read clean, and named so

**Chunk 3 carries no `[sic:]` and no `[cj:]`** — one `[var:]` (I Thess.) and one `[nt:]`, and
its guillemet imbalance is Migne's (§3). **CHAPTER III (0743C–0743D), CHAPTER V (0744B–0744C)
and CHAPTER X (0748B–0748C)** were each read with no defect found. The heavy apparatus is
concentrated in chunks 0 and 1 (the banquet allegory) and at 0744D–0745A.

---

## §6 · WHAT A BLIND READER SHOULD OPEN FIRST

**Rewritten after the blind read (§7); items 1–5 of the original list have been adjudicated
and are now closed.** Kept in place so the record shows what was offered and what came back.

1. ✅ **0744A, *Sapientia enim vincit malitiam* (§4a)** — offered because a reader who does
   not open the marker will not notice a negative is missing. **Endorsed; the `[var:]` wording
   was sharpened** ("reversed in what Migne prints, which also has no negative"), because
   "the negative is absent" did not say absent *from what*.
2. ✅ **0740C, *atque ipsos juste condemnat* (§5.3 ii)** — offered as the site where the wrong
   reading arrives first and parses perfectly. **Endorsed, and the bracket explicitly told to
   stay**: *ipsos* sits nearer *Judaeos*, which is exactly why the wrong reading arrives
   first, but Christ cannot in one clause both deliver the confessors and justly condemn
   them.
3. ✅ **0744D, *mobilis* (§5.1)** — **endorsed.** The immobile-God-contemplating-mobile-time
   topos is the sentence's whole point, and the loss is a single-syllable haplography after
   *In se*.
4. ✅ **0741B, *Ex alibi* (§5.2)** — **endorsed**, and on firmer ground than I had: *Ex alibi*
   is not Latin at all, and *Et alibi* is this work's own formula, used verbatim four times
   in these four chunks.
5. ✅ **0747A, *Et plurimum posse cognoverant* (§4c)** — **closed clean**, no defect. Basis
   recorded honestly in §4c: an agent's knowledge, not a witness on disk.

**What is still open, and it is short:**

- **0746B, *Nutrivit corda fidelium* (§4d)** — an unidentified guilleted quotation cited as
  scripture with no `[n:]`. A reader who recognizes it closes it.
- **0739C *Nochum* and 0742D *Tebeeth* (§5.5, §4c)** — two plate-read candidates, live now
  that §2.2 has shown the digitization can tidy Migne as well as break him.
- **0741A, the *magnatum / primitivorum* binding (§5.8)** — deliberately not adjudicated
  because nothing turns on it.
- **0741D / 0742A, the origin of the three dropped `« ` (§3)** — Migne's compositor or our
  transcription; the plate read did not cover it.

---

## §7 · THE BLIND POLARITY READ — a measured ZERO on the class that beat Ruth, and three repairs

A reader that never saw this file read all four chunks.

### 7.0 ⭐⭐ THE HEADLINE IS A NEGATIVE RESULT: the scripture-conformation hunt came back EMPTY

**Every guilleted quotation was checked against the Vulgate, and at all ~15 places Migne
diverges the English follows HIM, not the familiar Bible** — ten carrying a `[var:]`, the
rest silently faithful. Singled out: **Hab 3:8** rendered on Migne's *equitatus* / *sanitas*
rather than the Douay's chariots and salvation, and **1 Thess 4** rendered on his *resurgemus*
/ *residui sumus* with the `[var:]` naming the Vulgate's *rapiemur … in nubibus*, called the
best-executed non-conformation in the work.

⛔ **Record this as a MEASURED ZERO, not as an absence of findings.** Ruth — same volume, same
recension, same testament — gave up **four** silent conformations on exactly this ground, and
all four were made by a translator using `[sic:]` correctly two columns away. **A zero here is
evidence about the method, and it is the only kind of evidence that class ever yields.**
The reader also confirms **no `[sic:]` swallow anywhere**: every marker stripped leaves a
complete sentence.

⚑ **And the zero did NOT generalize.** The three defects it did find are all in **gloss
prose**, none in a lemma — the same distribution as 2 Thessalonians, where all 57 named
lemmata were right and both defects sat in the sentences between them. **The lemma list does
its job; it does not cover the prose.**

### 7.1 ⭐⭐⭐ 0748C · a bare "he" that inverted a theological claim — REPAIRED

Full treatment at §5.3(vi). "he" → **"he [Assuerus]"**. As written, the page had Christ not
making the earth tributary *because he did not possess it*, contradicting *implevit totum
mundum* in the same sentence.

⚑ **A second, smaller repair was taken in the same edit: scope negation.** *non omnem terram
tributariam fecit* negates the **scope**, not the act, and "he did not make all the earth
tributary" reads to many as "he made none of it tributary." Now **"he made not all the earth
tributary."** ⭐ **This is the same class as the `Non solum regem` relocation I caught myself
(§5.4)** — a negation sitting on the wrong side of a quantifier — which means my own test-2
pass found one instance of it and missed another **two columns apart in the same work.**
The rule the pair yields, and it is sharper than "check every negative": **a negative next to
a quantifier (*omnis*, *solus*, *totus*) attaches to the QUANTIFIER, and English word order
must put it there.**

### 7.2 ⭐⭐ 0745A · *si* dropped, and the smoothed English read as an undeclared emendation — REPAIRED

Migne prints *qui **si** videbatur gloriosior*. My English rendered **no particle at all** —
"he who seemed the more glorious appears beneath others baser and lower."

⛔ **The danger is second-order and worth naming precisely: the smoothed clause is exactly
what you would get by translating *qui prius videbatur gloriosior*** — a plausible emendation
that nobody made and nothing on the page declares. A reader could not learn that Migne prints
a particle there at all. Repaired to the concessive conditional: **"he who, if he seemed the
more glorious, appears beneath others baser and lower."** **No `[cj:]`** — the sentence
construes as printed, so the conjecture threshold is not met (§5.8).

⚠ **And the worse half is the record, not the text.** §5.8 already carried an entry on this
*si*, and that entry **asserted the particle had been rendered when it had not.** A cruces
line saying "rendered with the *si*" is exactly the kind of note a later reader trusts instead
of checking. **A note that a call was made is not evidence the call reached the sentence** —
Tobit's §7 lesson (*carrying a number faithfully is not carrying a referent*) in its most
literal form.

### 7.3 ⭐ 0746B · a supplied subject left unbracketed — REPAIRED

"The king" → **"[The king]"** over Migne's noun-less ablative absolute. The supply was right;
it was **bare**, in a work that brackets supplied subjects in five other places (§5.3), so the
one place the noun is genuinely missing from the plate was the one place the English hid it.
Established practice, no new apparatus.

### 7.4 ⚑ A PROJECT GAP, recorded rather than worked around

**Four calls in this batch were declined or hedged for want of a Vulgate on disk, across two
books** — this work's *Et plurimum posse cognoverant* (0747A), *Tebeeth* (0742D), the Ps
113/134 conflation (0744B), and Tobit's *Exsurgens* (0731A). Two were later closed **from an
agent's knowledge rather than from a text we hold**, which is a weaker footing than this
edition's own standards want for a marker decision. Every §4 collation in this file rests on
the same footing. **The orchestrator is recording this as a project gap; it is not a request
for anyone to keep working around it.**


---

## ⛔ PLATE SWEEP, 2026-08-29 — every `[sic:]` in this work read at Migne's plate

This work's `[sic:]` markers stood on columns nobody had read. All were read this session from the on-disk PL 113 scan at 300 dpi (500 dpi where a single letter decided it), full page width, with the volume's page map re-calibrated against the printed corner numbers **before** the read.

**A `[sic:]` asserts a defect in MIGNE'S TYPE, and our Latin is not the printed page — it is Corpus Corporum's transcription of it.** Where the plate disagrees with our file, the fault is ours and the accusation is withdrawn.

### Confirmed — Migne's own defect; the marker stands

| col | the plate prints |
|---|---|
| 0739D | **convivum** — Migne's own defect. Control on the SAME page: "Ibi Assuerus convivium maximum" prints the i. |

Full ledger for all 23 works swept: `data/plate-sweep/2026-08-29-sic-sweep.tsv`.
