# *Glossa ordinaria*, **Liber Ruth** (PL 113, 0531D–0540A) — cruces and the Glossa conventions pilot

Translated 2026-08-18, one translator, 3 chunks (2,457 Latin words), on Opus at Wilson's
call. `verify-english.mjs` clean: columns, notes and sections aligned, no duplicate
paragraphs. Apparatus: **1 `[sic:]` · 3 `[var:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 23 `[n:]`** (exact parity with the Latin twins). Structure: CAPUT PRIMUM,
CAPUT II, CAPUT III, CAPUT IV. Zero guillemets in either language.

**This work is the conventions pilot for the whole Glossa block** (62 works, ~783K words,
PL 113–114). What §1 settles binds the books that follow; what §2 records is this book's
own trouble.

---

## §1 · THE GLOSSA CONVENTIONS — SETTLED HERE

### 1. The verse mark stays; the lemma is Englished. **This was precedent, not invention.**

Migne sets each gloss as `VERS. 1.-- *Facta est.*` — a verse address, then the Vulgate
words being glossed, then the comment. The queue note asked whether to keep the Latin
lemma beside the English or go English-only. **The corpus already answered**: work 21413
(Alcuin, *In Cantica canticorum*, PL 100) is shipped and uses exactly this form, and its
English keeps `VERS. n.--` verbatim while translating the lemma —
`VERS. 1.-- Veni in hortum meum` → `VERS. 1.-- Come into my garden`.

So: **`VERS. n.--` is an address and passes through untouched. The lemma is translated.**
The Latin lemma is never lost to a reader — it stands opposite, on the Latin side of the
same page. This is also the shape of Wilson's 2026-08-18 ruling on Migne's conjecture
notes: *"the cj: is for scholars where the english is for all."*

⚑ **Look for the precedent before ruling.** The convention question was live for a day and
was answered in one grep of the shipped English. The corpus is its own control here as much
as it is inside a single work.

### 2. A fragmentary lemma is rendered as the phrase it stands for

Most lemmas survive word-for-word — *Quando hora* → "When the hour", *De vestris* → "Of
your own". A few are fragments that are not English at all: `VERS. 3.-- *Non te.*` (Ruth
3:3, *non te videat homo*). Rendered **"Let no man see thee"** — the phrase the fragment
opens, not a word-for-word stump. The alternative ("Not thee") would be faithful to the
letter and useless to a reader, and the Latin fragment is opposite in the parallel column.

### 3. The attribution sigla need no new convention — they are already `[n: …]`

Migne credits his sources inline: `(RAB.)` for Rabanus, `(ISID.)` for Isidore, and in other
books `(BEDA, ubi supra.)`, `(GREG., lib. 24 cap. 13.)`, `(HIER.)`. These reach us as
ordinary `[n: …]` notes, and the locked register already governs them: **markers pass
through verbatim, Latin abbreviations unanglicized.** Ruth carries three `(RAB.)` and one
`(ISID.)`, all untouched. No sigla convention is needed, and none should be invented.

⚠ **The sigla are Migne's attributions, and the whole recension's attributions are known to
be unreliable** (the "Walafrid Strabo" ascription is a myth; the honesty label on every
Glossa work page says so). Passing a siglum through verbatim is not endorsing it.

### 4. The standard work-page template is sufficient

No lemma-aware layout is needed. The glosses are ordinary paragraphs opening with a verse
mark; the parallel columns, the column anchors and the note styling all behave. Revisit only
if a long book (Psalms, 106 chunks) reads badly at length — not on this evidence.

### 5. Migne prints no conjecture apparatus in this volume — and that is recorded as a
### CHECKED ZERO, not as a skip

All five of Ruth's plate pages were read at 300 dpi before translating (archive.org
`patrologiaecurs04migngoog`, pp. 271–275; **page = (column + 11) / 2**, verified against the
running head). p. 271 carries the Judges/Ruth division *mid-page* — the case that lost three
notes on PL 202 — and was read there. **No foot-of-page notes anywhere.** Five further pages
across two other runs of PL 113 gave the same result. `data/plate-notes/coverage.json`
records Ruth as tier 3, coverage `full`, `notes_recovered: 0`, with the method: a later
reader must be able to tell a book that was checked from a book that was skipped.

---

## §2 · THIS BOOK'S CRUCES

### 0534A · *significaRuth* — the digitization joined two lines and ate a letter. PATCHED.

The TEI reads *quos significaRuth.* **The plate reads *quos significat Ruth.***, broken
across a line at the head of the right-hand column (p. 272, col. 534A, line 1; read at
300 dpi and again magnified). This is Corpus Corporum's transcription, not Migne — so it is
a `data/tei-patches/8968.json` fix, applied before chunking, exactly as the rule provides.
The plate is untouched and unemended.

### 0537D · *VERS.9* — the same class, punctuation only. PATCHED.

The TEI drops the space after `VERS.` at this one verse mark out of twenty-three. The plate
sets it like every other (p. 274). Patched, for the same reason: uncorrected, the Latin side
of the page shows `VERS.9` and the defect reads as ours.

### 0533D · *effoetandi* — Migne's own, and it does not construe. RENDERED LITERALLY.

*et maxime illud, ut superata a veritate infirmam se cognoscit effoetandi:
« Revertimini, filiae meae. »* The genitive gerund has nothing to govern it — *infirmam se
cognoscit* wants an infinitive or *ad* with the gerund. **Checked on the plate: Migne prints
it so** (p. 272, left column). Rendered "she acknowledges herself too weak for
child-bearing" — the gerund taken with *infirmam*, which is the one construction the words
allow. ⛔ **The first draft read "too weak, *and* spent with child-bearing", inventing a
coordinating conjunction that is nowhere on the page; both blind readers caught it
independently** (§3). **No conjecture is offered**: the fault is legible, it is Migne's, and
Pattern 7 governs. A reader who wants to see the difficulty has the Latin opposite.

### 0535B · *sul tectum meum* — broken type. `[sic: *sul*]`.

*Domine, non sum dignus ut intres sul tectum meum* (Matt. 8:8), for *sub*. Legible and
plainly a broken *b*; carried through under Pattern 12 so the oddity reads as the plate's
and not as ours.

### 0534A · *percepta gratia baptismi et societate fieri* — strange, and Migne's

"having received the grace of baptism and its fellowship" renders it; *fieri* sits loose in
the clause and **has no counterpart at all in our English**, because it will not construe
where it stands. **Verified on the plate** (p. 272, left column, VERS. 14) — it is printed
thus. *societate fidei*, the phrase used at 0533C, is the obvious suspect and is deliberately
NOT adopted. Not marked, and the reason is worth stating: nothing here is broken type
(Pattern 12), nothing is missing from the digitization (Pattern 13), and no marker in this
corpus means "Migne prints a word that will not construe". **Saying so here beats inventing
one for a single site** — but a reader comparing the columns will see a Latin word with no
English, so it must be said somewhere, and this is where.

### 0534C, 0535C · Migne's scripture citations are printed as he printed them

`[n: (Marc. VI, XVI; Joan. XVI)]` on *Elegi vos de mundo* and `[n: (Matth. XVI)]` on the
Great Commission (Matt. 28:19) are not our errors and are not corrected in the text.
Citation repair belongs to `data/citation-corrections.json` at index time, never to the
running text — the standing rule, and this book gives two clean instances of it.

### 0534C · *Et alibi-* — a hyphen where a colon belongs

Punctuation only, in the TEI; **not checked against the plate**, and it changes nothing in
the sense. Recorded so a later reader knows it was seen and let alone, not missed.

### 0534B · *quando lex incarnationis suae ordinem … convertit* — an ambiguity kept

*suae* may be taken with *incarnationis* (the order of his incarnation) or read with *lex*.
Rendered "when the law turned the order of his incarnation to the mystery of the passion of
Christ", which the following sentence supports (the barley harvest = the time of the
passion). The other reading is not excluded; nothing in the argument turns on it.

---

## §3 · THE BLIND POLARITY READ (2026-08-18) — 17 sites, 13 of them OURS

Two fenced readers on Opus, neither permitted `cruces.md`, this file, the style rulebook or
any grep of the English directory; each read all three chunks. **Different lenses on purpose**
— polarity and unexpressed subjects for the first, completeness/construction/scripture-
conformation/etymology-pairing for the second. Both reported clean chunks and rejected
candidates with reasons, as required.

⭐⭐ **The work's characteristic fault was NOT polarity. It was SILENT REPAIR of Migne's own
readings — four scripture words quietly conformed to the familiar English Bible.** Not one
negation was dropped or added anywhere in the work; both readers checked the clusters at
0533C–0533D, 0536B and 0537B–0537C and cleared them. The defect class that actually cost us
was the one Pattern 7 exists to forbid, committed by a translator who *was* marking
`[sic: *sul*]` correctly two columns away. **Consistency in using the apparatus is not
evidence that the apparatus was used where it was needed.**

### The readers DISAGREED on the most serious site, and the Vulgate settled it

**0538C** — *Quem scilicet per legem gignere non potuit … et nutricis fungebatur officio, quia
matris carebat privilegio.* Reader A called the unexpressed subject wrong (HIGH); reader B
read the same 46-word chain and reported it "rendered complete and correctly parsed."

**A is right, and the evidence is not a judgement call: the gloss lifts its words from Ruth
4:16 — *susceptumque Noemi puerum … et nutricis ac gerulae fungebatur officio* — where the
subject is NOEMI**, who is the synagogue on every page of this book. Both *susceptum* and
*nutricis fungebatur officio* are that verse. The English had four bare "she"s whose nearest
antecedent was the Gentile Church, which made **the Gentile Church into Christ's nurse rather
than his mother** — the exact inversion of the gloss's argument. Fixed by naming the subject.

⚑ **Two readers agreeing proves nothing and two readers disagreeing proves nothing; the
source text decides.** B's lens (parsing) could not see this, because the sentence parses
perfectly either way. It is settled only by knowing which verse the words come from.

### Fixed — OURS (13)

| col | printed | was | now |
|---|---|---|---|
| 0533B | *Vos date illis manum* | "Give ye them to eat" (Mark's *manducare*) | "Give ye them the hand" + `[var:]` |
| 0533D | *effoetandi* | "too weak, **and** spent with child-bearing" | "too weak for child-bearing" |
| 0534A | *societate fieri* | *fieri* dropped silently | still undropped-able; disclosed below |
| 0534C | *veniunt* | "came" | "come" (his historic present, kept elsewhere in the same paragraph) |
| 0534D | *recordat* | "store up" (*recondat*) | "recall" |
| 0535C | *De vestris manibus* | "handfuls" (*manipulis*) | "hands" + `[var:]` |
| 0536C | *fides gentium Ecclesiae* | "faith of the Gentiles **to the Church**" | "faith of the Church of the Gentiles" |
| 0537B | *Adam filium Dei* | "Adam, who was of God" (Douay Luke 3:38) | "Adam the son of God" |
| 0538A | *sicut Phoenicium* | "as scarlet" (Douay/Vulg. *coccinum*) | "as the Phoenician dye" + `[var:]` |
| 0538A | *Liam* | lemma "Leah", body "Lia" | "Lia" both — Migne's forms are kept everywhere else |
| 0538C | unexpressed subject | four "she"s reading to the Gentile Church | "the synagogue", named |
| 0538D | *Servilis* … *serviens* | "serving" twice | "servile" then "serving" — he glosses it twice, in two words |
| 0539A | *generationes filii Judae* | "the sons of Juda" | "the son of Juda" (Phares; and only that count reaches ten) |

**Three `[var: …]` markers now stand where a Vulgate divergence was being erased** (0533B,
0535C, 0538A). That is what Pattern 14 is for, and it is the right apparatus here: the
printed reading keeps its English, and the received text stands beside it for the reader who
wants to know why the words look strange.

### Migne's own, flagged and left standing (4)

- **0533D** *effoetandi* — a genitive gerund governing nothing; see §2.
- **0534A** *societate fieri* — *fieri* is a whole word on the plate with no counterpart in our
  English, because it cannot be construed where it stands (*societate fidei*, the phrase used
  at 0533C, is the obvious suspect and is NOT adopted). **Recorded here rather than marked:
  no marker in this corpus means "Migne prints a word that will not construe", and inventing
  one for a single site is worse than saying so plainly.**
- **0535B** *sul tectum meum* — broken type, carries `[sic: *sul*]`. Correctly handled.
- **0537A** *cum praecursoris sui adventum **quem** … conspexit* — one accusative too many and
  *quem* with no antecedent it can take. Our English resolves it onto the forerunner and
  supplies the object of *convertit*; the resolution is defensible and is the only one that
  construes. Nothing is emended.

### Rejected, with the reason (both readers proposed these; both were declined)

- ***Aethiopia praeveniet manus ejus Deo*** → "shall soon stretch out her hands" — Douay
  wording, but Migne's Latin is verbatim Vulgate Ps 67:32, so the traditional echo IS the
  literal rendering. The register permits it exactly there.
- ***Lege, scilicet quae…*** read as a nominative heading — the ablative is recovered two
  clauses later at "In this the Church dips her morsel"; no reader is misled.
- ***Imprecatur prospera*** → "He prays" — the singular verb has a singular governing noun
  (*Decem majorum natu benedictio*), and this gloss routinely speaks of a collective in the
  singular (*Agnoscit synagoga*, *Cognoscit mater Ecclesia*).
- ***incarnationis suae*** → "his incarnation" where *lex* is the grammatical subject —
  reflexive *suus* for the logical subject is ordinary here, and "the law's own incarnation"
  is nonsense.
- **`[n: (Matth. XVI)]`** on *Ite, docete omnes gentes* (Matt. 28) — Migne's citation misprint,
  rendered as printed. Citation repair belongs to `citation-corrections.json` at index time.
- ***Non te*** → "Let no man see thee" — the expansion supplies Migne's own printed verse, not
  a foreign one; noted as an inconsistency with the shorter lemmas, kept as §1.2 rules.
