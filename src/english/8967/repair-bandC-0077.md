# Repair pass — band C, chunks 0077–0086 (cols 1011C–1039B)

*Glossa ordinaria* on the Psalms, PL 113. Written against
`polarity-bandC-0077.md`. Every proposal below was checked against the Latin twin in
`src/latin/8967/` **and** against `data/plate-reads.json` before anything was changed.
No Latin file was touched; no `[sic:]`, no `[var:]`, no `[n:]`, no frontmatter, no column
anchor, no `VERS.` address was touched; 1029B was not touched.

**Gates after the pass:** `verify-english` OK (106 chunks) · `plate-gate` OK · 
`marker-reconcile --band 10` = 65 standing, **0 MISSING**, 1 withheld by ruling. Unchanged
from before the pass.

⭐ **A load-bearing fact the reader could not see, and it decides most of this file:
EVERY column in this range was collated word by word at the plate** (`plate-reads.json`,
runs `1011A–1026D` and `1027A–1040D`), and each of the eleven printed words a `[cj:]`
accuses is **named in a plate-read entry as Migne's own**: `1014D par` · `1015A dilectum`,
`secundam` · `1015C Deus` · `1015D putes` · `1032B glorificatur` · `1034B laudamus` ·
`1036D eum` · `1037D intra` · `1039A Psalmus` · `1039A recipi`. So no marker in the band is
accusing a word Migne did not set, and the whole defect really was on the English side.

---

## 1 · Pattern 18 inversion — the settled class

Repaired at **ten** of the eleven sites. The running English now renders **Migne's printed
word**; the conjecture's sense lives in the marker's quoted gloss. One site has no exponent
and was left alone, as instructed.

| # | chunk | col | printed | English NOW reads | note |
|---|---|---|---|---|---|
| A1 | 0078 | 1014D | *par* | "he admonishes men to bless **like** [cj: *par*; read *per*, "through"] those things which were done for the men of old" | see the caveat below |
| A2 | 0078 | 1015A | *dilectum* | "that **the beloved** [cj: …] might abound" | |
| A3 | 0078 | 1015A | *secundam* | "Or **a second** [cj: …] **other reading**:" | *secundam* agrees with *aliam litteram*; the accusative is left dangling, as on the plate |
| A4 | 0079 | 1015C | *Deus* | "Likewise **God** [cj: …] **admonishes men to bless**, first through heaven and earth" | the exponent is the SYNTAX, not the word — see below |
| A5 | 0079 | 1015D | *putes* | "who **thinkest** [cj: …] not to grow or be lessened" | ⚑ **not in the brief's nine** |
| A6 | 0084 | 1032A | *glorificatur* | "what shall he receive, **he is glorified** [cj: …], in the things to come?" | the intrusive finite verb is now visible; Migne's commas are untouched |
| A7 | 0085 | 1034A | *laudamus* | "how long **we praise** [cj: *laudamus*; read *laudandus*, "**is to be praised**"], namely always" | gloss re-worded per the brief; the stranded *sit* has no English and gets none |
| A8 | 0086 | 1037A | *eum* | "He is loved perfectly**, him** [cj: …] the mind is not moved by adverse things" | also restores Migne's comma after *perfecte*, which the old English had absorbed |
| A9 | 0086 | 1037D | *intra* | "and therefore **enter thou** [cj: …] into the joy of his Lord" | marker KEPT — see §1a |
| A10 | 0086 | 1039A | *Psalmus* | **unchanged** | **no exponent** — see §1b |
| A11 | 0086 | 1039B | *recipi* | "for by reason of its brevity **not to be received** [cj: …] division" | ⚑ **not in the brief's nine** |

### ⚠ 1a. *intra* (A9) — the `[cj:]` STANDS; I did not remove it

The reader's case is real and I nearly took it: Migne's *intra* is an imperative and an
imperative is printed **three words later** in the Matthew 25 tag (*intra in gaudium Domini
**tui***), so "Enter thou into the joy of his Lord, who says: Well done…" construes.

**It falls on one word: *sui*.** Migne writes *intra in gaudium Domini **sui***. His own tag
shows what an imperative here takes — ***tui***, second person, because you are being told to
enter **your** lord's joy. A third-person reflexive *sui* has no possible antecedent under an
imperative reading; it needs a third-person subject, and the only one available is the faithful
servant of the preceding clause (*sed fidelis: quod accepit, impendit, et lucratur*), whose
whole sentence is third-person narrative. So the printed *intra* is best explained as exactly
what its neighbourhood predicts — the compositor's eye running ahead to the *intra* of the
quotation he was about to set. **A genuine error, and the emendation stands.** The repair is
therefore the inversion, not the removal: the running text now reads "enter thou", and *intrat*
lives in the marker.

### 1b. *Psalmus* (A10) — no exponent, marker left alone

*audiat sequentem **Psalmus***. English marks the object by position, so *Psalmum* and
*Psalmus* both reach English as "the following psalm". There is nothing in the running text to
invert. The marker is left exactly as it stands — this is the brief's ⚑ case, and it is the
only one in the band.

### ⚠ 1c. A5 and A11 are inversions too, and the brief's mechanical test could not see them

The brief's tell — *the marker's quoted gloss must not be a verbatim echo of the English before
it* — **has a false-negative class: an inflected echo.** Both misses are of that shape:

- **A5**: text "canst", gloss `"thou canst"` — the added pronoun defeats a verbatim match.
- **A11**: text "does not admit", gloss `"it admits"` — person/number inflection defeats it.

Both are the same inversion as the other nine (the running text carried *potes* / *recipit*, and
Migne's *putes* / *recipi* had no English at all), and both printed words are confirmed at the
plate. I repaired them.

⭐ **This matters past my range.** If the corpus-wide count of 19 failures in 43 glossed `[cj:]`
came from the verbatim test, **it is a floor, not a total** — re-run it with the gloss and the
preceding English both lemmatised/case-folded, at minimum stripping a leading pronoun, over the
rest of Band C (0087–0105) before the class is called closed.

### ⚠ 1d. Two sites where the printed word CONSTRUES, flagged not fixed

- **A4 *Deus*.** ⛔ **The brief's ⚑ exemption does NOT apply here** (it names *Deum*/*Deus* → "God"
  as a no-exponent case). The exponent is not the word, it is the sentence: *Deus* nominative
  makes God the one who admonishes, *Deum* accusative makes God the one blessed. Two different
  claims, both renderable, so the inversion was real and is repaired. **But *Item benedicere Deus
  monet* is perfectly good Latin** — "Likewise God admonishes [us] to bless" — and under Pattern
  18's own bar (the printed word must make the sentence say something *the author is arguing
  against*) this marker is arguable. I did not remove it: an inverted marker misleads, a standing
  one merely reports. **Wilson's, if anyone wants the bar applied strictly.**
- **A1 *par*.** *par* is a real word ("equal, like"), so Pattern 7's non-word rule does not reach
  it and it cannot be quarantined as a `[sic:]` — and I would not add a `[sic:]` in any case
  while that class is frozen. It is rendered **"like"**, its nearest lexical value; the sentence
  ("to bless like those things which were done for the men of old") is visibly odd, which is
  Pattern 7 working. If Wilson prefers the reader's instinct here, the alternative is a `[sic:]`
  and it needs his ruling on the frozen class first.

---

## 2 · Sense defects — verified and repaired

| # | chunk | col | was | now | why it holds |
|---|---|---|---|---|---|
| B1 | 0078 | 1014C | "*from destruction*" | "*from corruption*" | Migne prints *de corruptione*; "destruction" is the Douay's word for the Vulgate's *de interitu*, which is not on this plate. 7a″ exactly. |
| B2 | 0079 | 1017C | "*in their dens*" | "*in the dens*" | plate and twin print the lemma short, *in cubilibus*; "their" is finished in from the Vulgate's *suis*. |
| B3 | 0079 | 1017D | "*To play with him.*" | "*For mocking.*" | Migne prints two words, *Ad illudendum*; the dative *ei* is the Vulgate's, not his. Also re-joins the lemma to its own gloss, which reads *illudi* as "mocked". |
| B4 | 0084 | 1031D | "does not **forbid** it" | "does not **prevent** it" | *prohibet* = hinder. "Forbid" contradicts its own protasis (*si vult, ut non pecces*) and destroys the Augustinian point the rest of the paragraph makes. |
| B5 | 0086 | 1037A | "**he notes** that" | "**note** that" | *nota* is the imperative, confirmed at the plate (`@1037A nota for notat`), and the gloss addresses the reader throughout. |
| B6 | 0083 | 1031B | "fill **them** *as ruins,* not as men upright" | "fill *ruins,* not the upright" | *ruinas*/*erectos* are the accusative objects of *impleat*; one *ut* was doing duty twice and "them" was supplied. Italic-span count preserved. |
| B7 | 0077 | 1011D | "whose frying-pan **they are**, who are scandalized" | "whose frying-pan **are they that are scandalized**" | *sunt* is plural against the singular predicate *frixorium*, so its subject can only be *qui scandalizantur*. Agency was inverted. |
| B8 | 0082 | 1027C | "is **of a great household**, of many churches" | "is **many households, many churches**: yet **he** is also one Church, one sheep" | see the partial rejection below |
| B9 | 0080 | 1021C | "**Egypt** feared Israel" | "**They** feared Israel" | see the partial rejection below |
| B10 | 0077 | 1013D | "**unto** generation of generations" | "**in** generation of generations" | same three Latin words eleven lines from their twin, which already reads "in"; the divergent one was the Douay's cadence. |
| B11 | 0086 | 1038C | "*I am thy servant, the son…*" | "*I am thy servant. The son of the handmaid.*" | Migne prints a full stop between two lemma units and the AUG. note glosses the second alone. Pattern 8. |
| B12 | 0086 | 1038C | "for **her lord**" | "for **the Lord**" | Migne capitalises *Domino*, and the continuation (*aliquos **tibi** parturiam*) needs the capital. |

**B8 — finding accepted, proposed rendering examined and then adopted with one extra change.**
I first read *multae familiae, multae Ecclesiae* as genitives of quality ("of a numerous
household"), which would have made the reader's plural wrong. What settles it is the second
limb: *tamen et **est** una Ecclesia, una ovis* uses predicate nominatives **of the poor man**,
so the first limb is parallel and nominative too. The antithesis is many-yet-one, and the
sentence's own subject carries it. That forced one change the reader did not propose: "yet
**there** is also one Church" → "yet **he** is also one Church", because on this construal *est*
has the same subject throughout. Flagged because it is mine, not the reader's.

**B9 — finding accepted, proposed rendering REJECTED.** "Egypt" is indeed nowhere on the plate
and had to go. But the reader's "Israel was feared" is a passive the Latin does not have either
(*Timebat Israel* is active, and *reliquias **eorum*** points at the Egyptians as the fearers).
English cannot render a subjectless finite verb, so a subject must be supplied; **"They"** is
the minimum supply, takes its antecedent from the lemma's own *super eos*, and keeps exactly the
ambiguity Migne keeps.

---

## 3 · The silent-repair class — TWO accepted, THREE rejected

⭐ **The reason three fall is one fact about our sources, and it is recorded in this work's own
plate reads: our twin does not carry Migne's commas reliably.** The 1017A–1018D collation says
in terms that the twin agrees with the plate "**apart from commas**." So a finding of the form
*"the English moved a word across Migne's comma"* is, at a comma, **a claim about Corpus
Corporum's punctuation, not Migne's** — and none of the three comma sites is named in any plate
read. A charge against the English cannot rest on a layer we know is not the plate's.

**Accepted (both are sentence-level marks, which do transmit):**

- **0080 @1019B** — Migne prints a full stop after *de qua sequitur*; the English had a colon and
  a lowered capital, which fused the sentence he broke and quietly supplied an apodosis to a *si*
  clause that has none. Restored: "…of which it follows**. How** is it everlasting…". The
  fragment is now visible, which is the point.
- **0083 @1030C** — the converse: a printed comma had been raised to a full stop, splitting
  *In potioribus meis bonis et occultis, donec regnes manifestus* into two. Restored to
  "…hidden goods**,** until thou reign manifest."

**Rejected:**

- **0083 @1030B (*Deus*).** The finding misreads the punctuation. Migne's comma stands **after**
  *Deus*, not before it, so *Deus, cum benedicit, facit quod dicit* is the ordinary
  comma-around-a-subordinate-clause shape and **the English matches Migne's commas exactly**.
  The only English supply is the sentence break between *malorum* and *Deus*, where Migne prints
  **no mark at all** — English cannot run two clauses together without one, and the alternative
  ("the cursing of the wicked God, when he blesses…") would assert something false.
- **0082 @1028C (*supra*).** Rests on a comma, per the caveat above. On the substance the
  English is also right: *hic … supra* is a here/earlier contrast (the *supra* is Ps 59:11's
  *deducet me*), and attaching *supra* to *patitur* would have Christ suffering "above".
- **0081 @1023B–C (*Laus Dei*).** The English does **not** assert anything the Latin does not:
  the proposition — the quality of the punishment declares God's praise — is identical under
  either construal, and *Laus Dei* fronted as a *nominativus pendens* is ordinary gloss Latin.
  What differs is **case**, and English marks none. This is the reader's own accepted principle
  at 0078 @1015A–B (*conversus*/*figmentum*): a defect no rendering can expose and none can
  conceal is not reportable in this instrument. Restoring the fronting would also have cost a
  supplied pronoun and a supplied colon, both of which Migne does not print.
- **The lower-grade punctuation-supply list** (0081 @1024B, 0082 @1026C/@1027C, 0084
  @1032D×2/@1033C, 0085 @1036A, 0086 @1037C). Left, deliberately. Each is a comma read as a
  colon before a quotation or a semicolon between clauses; none asserts anything the Latin does
  not, and all of them stand on the comma layer that our twin is known not to carry faithfully.

---

## 4 · Not touched, by instruction — and one that still wants Wilson

- **All twelve `[sic:]`** — untouched, and the English around them untouched. The reader
  judged them sound and I did not re-open them; the Pattern 7 non-word question is Wilson's and
  the class is frozen.
- **1029B** (the omitted *non*) — untouched.
- **No `[var:]` added.** B1's suggested one (Migne's *de corruptione* is the Old Latin/Romanum
  reading, and materially so) is recorded here and not fired.
- ⬜ **The misplaced `[var:]` at 0081 @1024D — VERIFIED, NOT MOVED, needs one word from
  Wilson.** The reader is right: the marker reports Migne's lemma against the Vulgate's *Et
  infecta*, the whole gloss (*continens pro contento*) exists to explain that lemma, and the
  marker sits ~230 characters downstream on *et contaminati sunt in operibus*, a clause that
  answers to Ps 105:**39**. Moving it is a one-line edit inside the same column, so no gate is
  affected. I left it because my brief fenced the `[var:]` class and did not assign this site.
  ⚠ **And there is a second thing in it:** the plate read for that column records Migne printing
  **`Et INTERFECTUS`** where our twin has *interfecta* — so the marker's own Latin side may need
  the pending-TEI-patch treatment (§A6) before it is moved. **Recommend: settle the patch, then
  move the marker to sit immediately after "*And slain.*"**
- ⬜ **A4 *Deus* and A1 *par*** (§1d) — both stand repaired but both raise a question of marker
  policy rather than of English, and both are noted there for a ruling.
