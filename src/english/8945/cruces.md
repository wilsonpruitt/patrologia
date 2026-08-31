# 8945 — *Liber Deuteronomii* (Glossa ordinaria, PL 113, cols 0445D–0506C)

Merged cruces for the whole work. Translated by five parallel Opus stints
2026-08-31 (chunks 0000–0004, 0005–0009, 0010–0014, 0015–0019, 0020–0023); merged
and plate-gated the same day. Per-stint detail: `cruces-0000.md`, `cruces-0005.md`,
`cruces-0010.md`, `cruces-0015.md`, `cruces-0020.md` — this file is the reconciled
top level, not a replacement for them.

Attributed by Migne to Walafrid Strabo; in fact **Anselmus Laudunensis et schola**
(per `cruces-0000.md` §1, following the corpus's standing correction).

24 chunks, 23,141 Latin words → English at 1.44–1.60×. Apparatus across the whole
work: **3 `[sic:]` · 3 `[var:]` · 1 `[cj:]` · 1 `[d:]` · 2 `[nt:]` · 2 `[ed:]`**,
against 346 `[n:]` notes and 240 column anchors, every count reconciled 1:1
against the Latin twins by `verify-english.mjs`.

---

## §1 · Conventions held across the whole work

Following `src/english/8968/cruces.md` §1 (the Glossa baseline), unbroken by any
stint:

- `VERS. n.--` passes through verbatim; a fragmentary lemma is rendered as the
  phrase it stands for; Migne's attribution sigla (`(RAB.)`, `(ISID.)`, `(AUG.,
  quaest. 6.)`, `(GREG., lib. VII Moral., cap. 10.)`) ride as ordinary `[n: …]`,
  unanglicized.
- `CAPUT N.` → `CHAPTER N.` (spelled-out numerals normalized, per the corpus's
  standing rule — mirror the plate's own form, not a fixed style).
- Greek rides verbatim, untranslated, with its Latin gloss translated as ordinary
  prose: χιλιάρχους, ἐκατοντάρχους, πεντεκοσιάρχους, δεκάρχους, δευτερονόμιον,
  Μετονυμικῶς.
- ***doctor* → teacher, never "doctors"** (8976 §V via 8947). **Checked at merge
  across all five stints: the whole work is uniform** — zero occurrences of
  untranslated "doctor" survive in any English chunk body (one frontmatter
  `incipit:` field quotes the Latin verbatim, correctly untouched).
- ***usque ad*** (the abridgment formula) → ***as far as***, italic, matching
  8947/8976/8978. Censused in 0000–0004: 27 occurrences, 20 the formula and 7
  ordinary prepositions — including one inside an italic scripture run wearing
  the formula's own typography (0452B), which is the shape the census exists to
  catch.
- Second person singular in the Decalogue exposition and scripture lemmata
  renders **thou**; plural renders **you**. No addressee's number was altered
  anywhere in the work (checked stint by stint).
- Etymological glosses keep their Latin lemma beside the English, because the
  gloss *is* the etymology: *avigeria*/*avigaria*, *cartalo* (Pattern 9, an
  attested spelling of *cartallum*, not a defect), the Cassian vice-names
  (*gastrimargia*, *philargyria*, *acedia*, *cenodoxia* kept in Latin;
  *ira*/*tristitia*/*superbia*/*fornicatio* translated).
- Hebrew place- and tribe-names stand as Migne spells them, not normalized to
  familiar English shapes.
- `(Josue XX)` at 0472A is the work's **only** inline italic locator outside the
  `[n:]` system; left untagged (no `[f:]`) per Pattern 4's single-occurrence
  exception, checked at merge — no other stint introduced a second one that
  would force the question.

---

## §2 · ⭐⭐⭐ THE PLATE GATE — closed this session, 9 columns read, 6 markers overturned

Every `[sic:]`/`[var:]` the five stints fired without a plate read (nine
candidates, on cols 0445D, 0452A, 0454C, 0471C, 0476C, 0481A, 0481C ×2, 0496C) was
read against **Gallica `ark:/12148/bpt6k5505319w`** (PL 113 second witness), IIIF
native-resolution crops, page map **f = ceil(column/2)**, calibrated against the
printed corner numbers on f242 (reads 483/484) and reconfirmed at f223 (445/446),
f226 (451/452), f227 (453/454). Full record: `data/plate-reads.json` →
`works["8945"]`. Result:

**3 CONFIRMED as Migne's own printing** (all still stand, still carry a marker):

| col | marker | what the plate shows |
|---|---|---|
| 0445D | `[var:]` | Cant. 1:12 printed *Fasciculus myrrhae delectus mihi*, no *meus* — confirmed |
| 0452A | `[sic: gui]` | *gui* for *qui*, first word of the band — Migne's own type |
| 0454C | `[sic: Cabesbarne]` | *b* for *d*, against *Cadesbarne* correctly two lines above in the same gloss — Migne's own inconsistency |

**6 REFUTED — Corpus Corporum's own corruption, not Migne's — all withdrawn and
patched** (`data/tei-patches/8945.json`), five of them landing in one tight span
(0471C–0481C):

| col | our Latin read | plate reads | class |
|---|---|---|---|
| 0471C | *coversans* | **conversans** | dropped letter |
| 0476C | *magnificam* | **magnificant** | wrong ending (agrees with plural *dilatant*, Matt. 23:5) |
| 0481A | *Catceati* | **Calceati** | *t* for *l* |
| 0481C | *pusillium* | **pusillum** | inserted syllable |
| 0481C | *quo que* | **quoque** | spurious space, one word split in two |
| 0496C | *pli* | **pii** | letter substitution |

⭐ Combined with stint 4's own find at 0492B (*pre*→*per*, also Corpus Corporum's,
caught and correctly left unmarked before this session), that makes **7
corruptions total closed in this one work** — a rate that keeps confirming
9003's finding (`CLAUDE.md` rule 8a): a plate read overturns roughly as often as
it confirms, and corpus frequency or context licenses neither outcome.

**Every withdrawn marker's English was corrected to render the word plainly, no
marker.** `node scripts/plate-gate.mjs 8945` now passes clean: 8 markers stand,
all 16 recorded reads (9 this session + 7 from stint 4's own reading) license
them.

⬜ **Still open, not blocking ship (no marker was fired on these, so rule 8a's
gate does not reach them):** three `[var:]` candidates logged and withheld
pending a plate read — 0468C *explorationis* for *expletionis* (Lev. 23:16),
0468D *habebit*/*(I Cor. V)* for *habemus*/2 Cor. 5:1, 0470A *Supra* for *Super
cathedram* (Matt. 23:2), all in `cruces-0005.md` §9; and 0503D's *prae fulgorem*
case in `cruces-0020.md` §7, which would take a marker under Pattern 12's second
test but was declined because a case ending is exactly what the transcription is
least trustworthy on. A future session may read cols 0468 and 0503 and settle
them; nothing about shipping this work depends on it.

---

## §3 · The one `[d:]`, the one `[cj:]`, and the two `[nt:]`

- **`[d:]` at 0484D–0485A** — a doubled clause plate-verified as Migne's own
  printing (*Carnalis vita polluta ex carnali immunditia* set twice); the
  intrusive copy identified by argument, not position (Pattern 11a). Detail:
  `cruces-0015.md`.
- **`[cj:]` at 0461A** — *damnant* for *damna* (nom. pl.), Migne's word kept, the
  reading offered beside it (Pattern 18, additive). Detail: `cruces-0005.md` §0005.
  A second candidate cj, *terna* for *aeterna* at 0490D–0491A, was plate-verified
  and licensed the same way; detail in `cruces-0015.md`.
- **`[nt:]` at 0475A** — Migne's note on Adam and the tree is editorial prose, not
  a locator (Pattern 15), translated in place. Detail: `cruces-0010.md` §3.
- **`[nt:]`-adjacent: two `[ed:]`s for the SAME digitization hole**, at 0449B
  (*Choreb ( )*, chunk 0001) and 0493B (*Sinai/Seir/Pharan ( )*, chunk 0020) —
  Corpus Corporum dropped the Hebrew type inside empty parentheses in both
  places, the identical class already recovered once for the sibling Glossa
  8944 (`data/hebrew-patches/8944.json`). Both are marked, neither is silently
  rendered, and both stints independently reached for the same marker
  (`[ed:]`) without coordinating — checked at merge and found consistent, no
  reconciliation needed. ⬜ **Open, cheap**: one Gallica page render each (f225
  for 0449, f248 area for 0493) would recover the Hebrew and retire both
  `[ed:]`s into `data/hebrew-patches/8945.json`; not done this session because
  it is new work, not a gate the ship test requires closed.

---

## §4 · Negation audit — full census, both directions, whole work

Every `non · nec · neque · nisi · ne · nemo-family · nullus-family · nihil ·
nunquam · nusquam` in all 24 chunks was located and checked against its English
exponent, chunk by chunk, by the stint that translated it (0000–0004: 125 tokens;
0020–0023: full census by type). **None was dropped, none was added, and no word
was rendered as its opposite to rescue a sentence that would not otherwise
construe** — including the sites where carrying the negation makes the English
harsher or odder than a smoothed reading would (catalogued in
`cruces-0000.md` §5, `cruces-0020.md` §10). Where a printed sentence would not
construe even with its negation carried faithfully, the defect is logged as a
crux and left unrepaired, never patched invisibly into the translation.

---

## §5 · What remains, for a future session

1. Two `[ed:]` holes (§3) — cheap plate recovery, not urgent.
2. Three withheld `[var:]` candidates and one withheld case-ending candidate (§2)
   — cols 0468, 0470, 0503.
3. Nothing else blocks shipping. `verify-english.mjs` and `plate-gate.mjs` both
   pass clean; the polarity read is the next step before this work is marked
   `ours`.
