# *Glossa ordinaria*, **Liber Ruth** (PL 113, 0531D–0540A) — cruces and the Glossa conventions pilot

Translated 2026-08-18, one translator, 3 chunks (2,457 Latin words), on Opus at Wilson's
call. `verify-english.mjs` clean: columns, notes and sections aligned, no duplicate
paragraphs. Apparatus: **1 `[sic:]` · 0 `[var:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
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
it so** (p. 272, left column). Rendered as it stands — "she acknowledges herself too weak,
and spent with child-bearing" — which follows the sense of *effetus* (worn out with bearing)
without smoothing the grammar. **No conjecture is offered**: the fault is legible, it is
Migne's, and Pattern 7 governs. A reader who wants to see the difficulty has the Latin
opposite.

### 0535B · *sul tectum meum* — broken type. `[sic: *sul*]`.

*Domine, non sum dignus ut intres sul tectum meum* (Matt. 8:8), for *sub*. Legible and
plainly a broken *b*; carried through under Pattern 12 so the oddity reads as the plate's
and not as ours.

### 0534A · *percepta gratia baptismi et societate fieri* — strange, and Migne's

"having received the grace of baptism and its fellowship" renders it; *fieri* sits loose in
the clause. **Verified on the plate** (p. 272, left column, VERS. 14) — it is printed thus.
Left as it stands. Not marked: nothing here is broken type, and the sense of the sentence
(some who are baptized fall back — Orpha; others hold — Ruth) is not in doubt.

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
