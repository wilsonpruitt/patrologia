# Cruces — nicetas-maroneia-dialogi (MERGED)

Merged 2026-08-01 from `cruces-0000.md` (Fable anchor), `cruces-0001.md`
(chunks 0001–0005) and `cruces-0006.md` (chunks 0006–0009). The three source
files follow verbatim below; **this header is the authority where they
disagree.** Runbook step 4: the merge is a required step, and reconciling
convention drift is its substance — concatenation is the easy half.

## WORK-WIDE CONVENTIONS (authoritative)

Carried from the anchor, uncontested: speaker sigla ΓΡ./ΛΑΤ. → GR./LAT., one
paragraph per turn · section letter-numerals as arabic + period · **οὐσία =
essence · φύσις = nature · ὑπόστασις = hypostasis · πρόσωπον = person ·
ἐκπόρευσις = procession** · ὑπερ- compounds take "super-" · mentioned particles
stay in Greek script, quoted credal clauses translated in quotation marks · a
heading the plate carries but Calfa drops is restored as inline `[ed:]`, never
as a `## ` head.

Uncontested additions from the two halves: ἀγένητον = "ingenerate" vs
ἀγέννητον = "unbegotten" (with the orthographic parentheses translated, the
letter kept in Greek) · πρόοδος = "going-forth", never "procession" ·
ἐκπορευτόν = "proceeding" / "that which proceeds" · ἄμεσος/ἔμμεσος =
immediate/mediate · ἀρχή = "principle" (hence ἄναρχος = "without principle",
ὑπεράρχιος = "super-principial") · αἴτιον = "cause", kept distinct from ἀρχή ·
ὕφεσις = "diminution" · ὑπεράριθμος / ὑπερφυής / ὑπερταγής = super-numerical /
super-natural / super-ordered · πατριά = "fatherhood" on the authority of
Migne's own note (y) · *homoousion* carried untranslated in italics ·
γηγενάρχης / ἀγγελάρχης = head of the earth-born / chief of the angels ·
παρόμοιον = "nearly-like" (semi-Arian term, not "similar").

### ⚑ CONFLICTS RULED AT MERGE — the text was edited to match

The two halves settled the same vocabulary differently, and **both renderings
were live in the shipped English until this merge**. This is the 11551
*stylus*/*epistylium* failure class: neither agent could see the other.

1. **The προβολ- family — RULED "put forth".**
   - 0001–0005 had: προβάλλεσθαι = put forth · προβολεύς = putter-forth ·
     προβλητικόν/πρόβλησις = putting-forth.
   - 0006–0009 had: προβάλλεσθαι = produce · προβολεύς = producer.
   - **Ruling: the "put forth" family, throughout.** Not by majority (20 vs 6)
     but on principle: **Latin *producere* flattens three distinct Greek verbs
     here, and "produce" is simply the English of *producere*.** Adopting it
     would import Allatius's flattening into our English through the back door
     — the precise thing PLAN.md rule 4 forbids. "Put forth" answers to no
     single Latin word.
   - **Edited in the text:** `0006.md` — "producer/producer" → "putter-forth/
     putter-forth" (the *τίς ἡ διαφορὰ προβολέως καὶ προβολέως* question, where
     the repetition IS the argument), "producing…produces" → "putting
     forth…puts it forth", and "not to beget or to produce" → "…or to put
     forth" (Greek: οὐ τὸ γεννᾷν ἢ προβάλλεσθαι).

2. **The προϊέναι family — RULED "send forth".**
   - 0001–0005 had "emit" (2 sites); 0006–0009 had "send forth" (1 site).
   - **Ruling: "send forth".** Same principle: Allatius's own word here is
     *emittere*, and "emit" mirrors it. "Send forth" also keeps the author's
     deliberate near-synonymy with προβάλλεσθαι visible without collapsing the
     two verbs (0206 sets them in the same sentence: the Father *puts forth*
     mediately, the Son immediately *sends forth* the same).
   - **Edited in the text:** `0001.md` "to put forth or to emit" → "…or to send
     forth"; `0002.md` "he emits the Spirit" → "he sends forth the Spirit".

   ⚠ **Trap recorded for future merges.** `cruces-0006.md` states the
   προΐεσθαι convention citing col 0201 — but chunks 0006–0009 contain **no**
   προΐε- form under that spelling; the site is `προῖεται` (circumflex iota, no
   diaeresis), and both textbook `προΐε-` forms are in the *peer's* chunks. A
   merge that trusted the cruces prose without checking the Greek would have
   "reconciled" two correct renderings into a convention declared for a word
   the declaring agent never actually translated. **Check the Greek, not the
   cruces claim.**

### Verified after merge

`node scripts/verify-english-pg.mjs nicetas-maroneia-dialogi` → 10 chunks,
anchors + frontmatter + ratios + dedupe clean. No `producer`/`produce` or
`emit` survives in the work; the προβολ- family reads 36 instances of the
put-forth root, προϊέναι 4 of send-forth.

---

# ── SOURCE FILE: cruces-0000.md (Fable anchor) ──

# Cruces — nicetas-maroneia-dialogi, chunk 0000 (Fable anchor)

## Work-wide conventions (anchor session, 2026-07-31 — merge into the work-wide section)

- **Speaker sigla as printed:** ΓΡ. → GR., ΛΑΤ. → LAT.; every turn its own paragraph, however short.
- **Section letter-numerals** used as section marks (αʹ, βʹ …) render as arabic
  numerals with a period ("1.", "2."), matching the plate's own Latin column
  ("1. GR."). In-prose letter-numerals remain English words (Joel rule, unchanged).
- **Fixed technical equivalences — never varied within this work:** οὐσία =
  essence · φύσις = nature · ὑπόστασις = hypostasis · πρόσωπον = person ·
  ἐκπόρευσις = procession. The dialogue's whole argument runs on these
  distinctions; an elegant-variation synonym is a doctrinal error here.
- **Dionysian ὑπερ- compounds take "super-"** (super-divine, super-existence),
  after the traditional English "superessential."
- **Mentioned prepositions stay in Greek script:** where the TEXT discusses the
  particles themselves (τῆς ἐξ προθέσεως… καὶ τῆς διά), keep ἐξ / διά as
  printed. Quoted credal CLAUSES are translated in quotation marks ("from the
  Son", τὸ ἐκ τοῦ Υἱοῦ). The plate itself prints the mention-form ἐξ (leaf 84,
  col 172D, verified) — Calfa's ἑξ is a breathing slip, not a dropped ἐκ.
- **The Trinity takes "its":** ἡ Τριάς is feminine; no English exponent
  (Pattern 9, not a defect).

## Latin-twin pass (pilot §6): result for chunk 0000 — FINDINGS (not clean)

Read against src/pg-latin/nicetas-maroneia-dialogi/0000.md (cols 0170–0175)
after drafting. Sites follow. No chunk in this batch was clean; this batch is
chunk 0000 only.

### Ladder row 1 — Calfa OCR damage, corrected silently in the English, Latin/plate cited

- **0169** διομένων → δεομένων ("questions REQUIRING more exact consideration"; Lat. *indigentium*).
- **0169** τυνεξετάσει → συνεξετάσει (Lat. *disquisitio/disputatio* context).
- **0169** ἰεοπαλής → ἰσοπαλής (Lat. *paris ponderis*).
- **0169** ὑποκειμένην ὄλην → ὕλην (Lat. *propositam materiam*).
- **0172** ἐπι. δείκνυσθαι → ἐπιδείκνυσθαι; δι' ἔνδει. ξιν → ἔνδειξιν (Calfa split type).
- **0172** πεοὶ → περί · συνἡθης → συνήθης · δείκννσιν → δείκνυσιν · ἐπαγόμεναν ῇ → ἐπαγόμενα ἢ (routine OCR, bundled).
- **0172** ἀδύνατονὐδὲ → ἀδύνατον (οὐδὲ… — **Calfa dropped the opening parenthesis; plate prints it** (leaf 84, col 172C, verified): (οὐδὲ γὰρ ἂν συνέβαινον ἑκατέρωθεν).
- **0172** παριστῶσι. διαμάχης — stray period splitting the clause; read παριστῶσι διαμάχης καὶ διαστάσεως together (Lat. *causam esse aiunt … certaminis atque discidii*).
- **0173** Intrusive-Κ artifact class, recurring in this volume's Calfa file: ΠνενύΚματος → Πνεύματος · Κγμνῶσκον → γινώσκον · ἐγκαινιζόΚμενον → ἐγκαινιζόμενον.
- **0173** θωτισμός → φωτισμός (**plate-verified**, leaf 85: φωτισμός).
- **0173** ὡλίνω → ὠδίνω ("in travail with"; Lat. *anhelo*; **plate-verified**, leaf 85).
- **0173** άραγγας → φάραγγας (Lat. *valles*; **plate-verified**, leaf 85; Isa 40:4 allusion, see twin notes (9)–(11)).
- **0173** Speaker tag ΓΙʹ → ΓΡ. (**plate-verified**, leaf 85: ΓΡ.).
- **0176** ἕτεροι → ἕτερον · ὑποστάσιις → ὑποστάσεις · υμφωνεῖν → συμφωνεῖν · μικοὰν → μικράν · ἕτεραε → ἕτερα; (routine OCR).
- **0176** **Calfa truncation, completed from the twin:** the Greek breaks mid-word — "ὁ Πατὴρ καὶ ὁ Υἱὸς καὶ τὸ Πνεῦμα ὑπο[ΛΑΤ.]" — dropping the end of GR.'s speech. Twin (col 0175): *et rursum Pater et Filius et Spiritus sunt hypostases et personae divinitatis.* English completes: "…are hypostases and persons of the Godhead." Sense certain from the Latin; exact Greek wording not recoverable from our files.

### Pattern 13 — [ed:], digitization lost text the plate carries

- **0173** Between the proem's end and section αʹ the plate prints a centered
  cross-column heading **ΛΟΓΟΣ ΠΡΩΤΟΣ. / DIALOGUS PRIMUS.** (leaf 85,
  plate-verified by render). Calfa omits it. Restored as an inline [ed:] — NOT
  as a `## ` head, which would break Greek↔English marker parity.

### Borderline Pattern-16 case — logged, NO marker (§8 Q3 calibration datum)

- **0172 / twin 0171–0174:** Greek "(οὐδὲ γὰρ ἂν συνέβαινον ἑκατέρωθεν)" ("for
  then they would not arise on both sides") vs Allatius "(secus enim nunquam
  concordassent)" ("otherwise they would never have agreed") — a real sense
  difference, but Migne's own note (c) on the Latin column corrects Allatius:
  *"Equidem mallem: Secus enim non ab utraque parte acciderent vel resultarent;
  nimirum voce συμβαίνω ut paulo ante accepta."* The Latin page corrects itself
  in its own apparatus, so a [lat:] would report as live a divergence the plate
  already adjudicates. English follows the Greek; no marker. Logged because the
  materiality boundary ("does the plate's own apparatus settle it?") is exactly
  what the pilot exists to calibrate.

### Plate-apparatus notes carried by the twin (not ours to mark; future fontes/scripture harvest)

The plate's notes for this span, visible in the twin and on leaf renders:
(2) Laur. ἐπιεικείᾳ · (3) Laur. διαλύειν · (4) Sic Laur., Maius omittit τοῦ
λόγου · (5) Apud Maium: καὶ ἀλληλότερα · (6) I Cor. II, 10 · (7) Laur: περί ·
(8) Cod. V: λέγε; fort. λεγεις · (9) Isa. XL, 4 · (10) Psal. LI (Vulg. L.) 10 ·
(11) Isa. l.c. · (b)–(e) editorial (Maius, Etherianus cross-refs). Calfa strips
all note anchors from the Greek, so the English carries no [n:] markers — the
identifications survive in the committed twin.

# ── SOURCE FILE: cruces-0001.md (chunks 0001–0005) ──

# Cruces — nicetas-maroneia-dialogi, chunks 0001–0005 (Opus, 2026-07-31)

Work-wide conventions of `cruces-0000.md` are in force and are not restated.
This file adds only what chunks 0001–0005 forced. Scan used for every plate
check below: `raw/scans/pg139/patrologiaecurs63migngoog_djvu.xml`, leaf index =
position in the file's `<OBJECT>` sequence; for this span **leaf n carries Migne
cols (2n+3)/(2n+4)** (leaf 89 = 181/182 … leaf 97 = 197/198), verified against
the running heads. ⚠ **Formula corrected 2026-08-01** — this file originally
wrote it as (2n−7)/(2n−6), which contradicts its own worked examples (2·89−7 =
171, not 181). The examples were right, the formula wrong; a blind reader caught
it while using it. Arithmetic in a method note gets checked against its own
examples before it is trusted.

## Conventions this batch had to decide (anchor did not cover)

- **ἀγένητον vs ἀγέννητον is a live distinction in this work and the Latin
  column cannot carry it.** Migne's Greek prints both, each with the author's
  own parenthetical gloss on its spelling: `τὸ ἀγένητον (δι᾿ ἑνὸς ν
  γραφόμενον)` among the *essential/natural* attributes (0177), and `τὸ
  ἀγέννητον (διὰ δύο γραφόμενον ν)` among the *hypostatic* ones (0177).
  Allatius renders **both** *ingenitum*. English fixes **ἀγένητον =
  "ingenerate", ἀγέννητον = "unbegotten"**, and the orthographic parentheses
  are translated with the letter kept in Greek script ("written with a single
  ν" / "written with two ν") — mention-not-use, per the anchor's ἐξ/διά rule.
- **The προβάλλεσθαι family, fixed:** προβάλλεσθαι = "put forth" · προβολεύς =
  "putter-forth" · προβλητικόν = "the putting-forth" · πρόβλησις =
  "putting-forth" · προΐεσθαι = "emit". Allatius uses *spirator / spiratio /
  producere / emittere* interchangeably; we do not import that variation.
- **πρόοδος = "going-forth", never "procession".** ἐκπόρευσις is reserved for
  "procession" by the anchor's fixed-equivalence rule, and 0180 sets πρόοδος
  and ἐκπόρευσις in explicit contrast (`πρόοδός τίς ἐστιν ἀπ᾿ αὐτοῦ … καλεῖται
  δὲ καὶ οὗτος ἐκπόρευσις`). Latin *progressio / processio* keeps the same
  split.
- **ἐκπορευτόν = "proceeding"** (verbal adjective, substantivized as "the
  proceeding"), parallel to γεννητόν "begotten" / ἀγέννητον "unbegotten".
- **ἄμεσος/ἔμμεσος = "immediate"/"mediate"** throughout (Latin *immediata /
  mediata*). Note that Migne's own Latin-column note (p) at col 0196 attacks
  this very pair — *"voces mediate et immediate, prout in hac materia
  usurpantur, non recte explanant"* — i.e. the plate's editor is unhappy with
  Allatius's Latin here, not with the Greek. Logged, no marker.

## `[lat:]` markers fired — 2

1. **0185 (twin col 0186) — a NEGATION the two columns do not share.**
   Greek: `ἀλλ᾿ οὐ σύνθεσις ἐκεῖ, ἀλλ᾿ ἁπλότης ὑπὲρ πᾶσαν ἁπλότητα, ὅτι μέρη
   ταῦτα τῆς θεότητος (ἀμερὴς γὰρ ὑπὲρ πᾶσαν ἀμέρειαν), ἀλλ᾿ ἰδιότητες…`
   Latin: *"Verum non est compositio ibi, sed simplicitas super omnem
   simplicitatem, **quia nec partes Divinitatis ista sunt** quum ea sit super
   omnem indivisibilitatem indivisibilis, verum proprietates…"*
   **PLATE-VERIFIED on the Greek side** (leaf 91): the scan's independent OCR
   reads `ὅτι µέρη ταῦτα τῆς θεότητος (ἀμερὴς γὰρ ὑπὲρ πᾶσαν ἀμέρειαν)` — no
   `οὐ`, parenthesis present. So the Greek plate prints the sentence without
   the negative that its own `ἀλλ᾿ ἰδιότητες` requires; the Latin column
   supplies it. English follows the printed Greek ("because these are parts of
   the Godhead") and marks the Latin. **Corroboration that the omission is the
   plate's and not a Calfa drop:** the exactly parallel sentence at col 0188
   (chunk 0003) *does* print the negative — `ἀλλ᾿ οὐκ οὐσία ταῦτα … οὐδὲ μέρη
   τῆς οὐσίας· ἡ θεότης γὰρ ἀμερής` — so the author's formula normally carries
   it. This is the dropped-negative class Pattern 7 exists to expose.
2. **0189/0190 (twin col 0190) — the reciprocal-ratio terms.**
   Greek (plate-verified, leaf 93): `νῦν μὲν γινομένη τὸ ἥμισυ καὶ τὸ
   ὑποδιπλάσιον, νῦν δὲ τρίτον καὶ ὑποτριπλάσιον, νῦν δὲ τέταρτον καὶ
   ὑποτε[τρα]πλάσιον`.
   Latin: *"nunc quidem fit dimidium et duplum, nunc vero tertium et triplum,
   nunc quartum et quadruplum."*
   Allatius drops the ὑπο-, which turns each pair from two names for the *same*
   ratio (half = subduple) into two *opposite* ratios (half and double). A
   reader of the Latin column takes away a different mathematical claim, so
   this clears Pattern 16's materiality bar. Numeral-class, so the Greek was
   plate-checked before the marker fired, per `pg-paired-pilot.md` §4.

## Logged, NO marker — the plate's own apparatus or column concurrence settles it

- **0185 (twin 0184) — Migne flags the Greek himself.** `τὸ Πνεῦμα ἐξ ἑαυτοῦ
  ἀμέσως ὡς **μέση** προβάλλεσθαι` — feminine, agreeing with nothing. The plate
  (leaf 91) prints `ὡς μέση (15)`, and the numeric note reads *"Ita scriptum.
  Quod tamen mendum exhibere videtur."* The page has already adjudicated it.
  Rendered "as being intermediate" (gender has no English exponent, Pattern 9);
  Allatius simply omits the phrase.
- **0184 (twin 0183) — the μὲν/δέ that reverses the doctrine.** `ὅτι καὶ
  ἀμέσως καὶ ἐμμέσως ἐκπορεύεται, τὸ μὲν ἐκ τοῦ Πατρός, τὸ δὲ ἐκ τοῦ Υἱοῦ`
  — taken positionally this gives *immediately from the Father, mediately from
  the Son*, the exact reverse of the position argued three lines earlier and
  again eight lines later (`ἐμμέσως δηλαδὴ καὶ ἀμέσως`, of Father then Son).
  **Plate-verified, leaf 91**, same order. Latin declines to map at all
  (*"scilicet tum ex Patre, tum ex Filio"*) — so no material divergence and no
  marker. Rendered in the printed order. NB the author's μὲν/δέ pairs are
  demonstrably non-positional here: col 0181 (leaf 89, verified) prints `ὡς μὲν
  ἐκ τοῦ Πατρός, ὡς δὲ ἐκ τοῦ Υἱοῦ, τουτέστιν ἀμέσως μὲν ἐκ τοῦ Υἱοῦ` — the
  gloss crosses its own μέν/δέ. Recorded because it is exactly the kind of
  reading a later reader will suspect us of having smoothed.
- **0195 (twin 0194) — "second" for "third", both columns.** `καὶ πρὸς μὲν τὴν
  πρώτην νοεῖται … τὸ δεξιὸν ἔχουσα μέρος, πρὸς δὲ τὴν **δευτέραν** τὸ
  εὐώνυμον` — the middle of three monads cannot be left of the *second*; the
  parallel sentence immediately above correctly has `πρὸς μὲν τὴν πρώτην …
  πρὸς δὲ τὴν τρίτην`. **Plate-verified, leaf 95**, and Allatius prints *"relate
  vero ad secundam"* — the two columns concur. Ladder row 3 (attributable to
  the plate pair). Rendered literally.
- **0184 (twin 0183) — Migne's Latin flagged in its own apparatus.** Greek
  `ἀλλ᾿ ἐκεῖνό γε ἄτοπον`; Latin *"Attamen illud certe absurdum ostendit, quod
  non dicam"*, carrying note *"Ita scriptum. Quod tamen mendum exhibere
  videtur."* The Latin, not the Greek, is what the page doubts. No marker.
- **0197 note (p), col 0196 (leaf 96)** — Migne's own criticism of Allatius's
  *mediate/immediate*, quoted under Conventions above. Apparatus, not ours.

## Ladder row 1 — Calfa OCR damage, corrected silently in the English

**Negations and lost parentheses (the load-bearing class — every one checked
against the plate before it was restored):**

- **0196 (chunk 0005), plate-verified leaf 96 — a DROPPED NEGATION in our
  file, not Migne's.** Calfa: `οὐχ ὡς χρόνου τινὸς μεσιτεύοντος γὰρ πρῶτον μὲν
  γεννᾷ τὸν Υἱόν…`. Plate: `οὐχ ὡς χρόνου τινὸς μεσιτεύοντος **(οὐ γὰρ** πρῶτον
  μὲν γεννᾷ τὸν Υἱόν, εἶτα διὰ τοῦ Υἱοῦ τὸ Πνεῦμα προβάλλεται)`. Calfa lost
  `(οὐ` as one unit — opening parenthesis plus negative, the anchor's 0172
  class. Latin concurs (*"neque enim Pater prius generat Filium…"*). Restored.
  Recorded prominently: this is a case where the negation is missing from OUR
  file and the standing PG rule (never attribute to the plate from our files
  alone) was the thing that kept it from becoming a false `[lat:]`.
- **0189/0190 (chunk 0003), plate-verified leaf 93** — Calfa `τὸ Πνεῦμαὐ γὰρ
  μέρη τοῦ Πατρὸς ταῦτα`; plate `τὸ Πνεῦμα **(οὐ** γὰρ μέρη τοῦ Πατρὸς ταῦτα,
  οὐδὲ κατὰ τομήν τινα καὶ ῥοὴν ἡ ἑκάστου γνωρίζεται πρόοδος**)**`. Same
  `(οὐ`-loss. Restored.
- **0196 (chunk 0004), plate-verified leaf 94** — Calfa `ἐμμέσως δὲ ἐκ τοῦ
  ἡλίου τῶν ἀκτίνων γὰρ`; plate `ἐμμέσως δὲ ἐκ τοῦ ἡλίου **(διὰ** τῶν ἀκτίνων
  γάρ)`. A dropped `διά` inside a lost parenthesis — in this work, the work
  whose whole dispute is ἐξ vs διά. Restored; Latin concurs (*"videlicet per
  radios"*).
- **0192/0193 (chunk 0004)** — parentheses lost, no negation at risk, restored
  from sense + Latin: `ἡ ἐκπόρευσις (διὰ τοῦ Υἱοῦ γάρ)`; `τοῦτο γὰρ καὶ οἱ
  Πατέρες φασί…` ; `πρὸς ἄλληλα (ὑπὲρ σύνθεσιν γὰρ ἡ ἑνότης αὐτῶν)`; `σύνταξις
  (ἦν γὰρ ἂν καὶ ἡ τῆς ὅλης Τριάδος σύνταξις σύνθεσις)`. Latin prints all four
  parentheses.

**Lost speaker tags, section marks and lost text (structural):**

- **0181 (chunk 0001) — a whole speech-opening lost.** Calfa prints
  `…ἵνα γνῶ καὶ αὐτός. [0181] Πνεῦμα] ἐκπορεύεται καὶ ἐκ τοῦ Υἱοῦ,
  συγκέχυται…` — section mark, speaker tag and the protasis opening all gone,
  leaving a stray `]`. **Plate (leaf 89, verified):** `δʹ. ΓΡ. Εἰ ἐκ τοῦ
  Πατρὸς ἐκπορευόμενον τὸ Πνεῦμα ἐκπορεύεται καὶ ἐκ τοῦ Υἱοῦ, συγκέχυται…`
  Restored silently per the anchor's 0176 precedent. Section number: the scan's
  own OCR renders the letter-numeral "5." there, but the Latin column prints
  **4. GR.** and the printed sequence is 2 (0176) → 3 (0180) → [this] → 5
  (0184, `εʹ` present in Calfa), so it is **δʹ = 4**; the djvu "5." is OCR noise
  for δʹ. English prints "4. GR."
- **Speaker sigla mangled, all restored** (each is the anchor's ΓΙʹ→ΓΡ. class):
  0176 `ΙΡ.`→ΓΡ. · 0177 `ΜΑΤ.`→ΛΑΤ., `ΚΓΡ.`→ΓΡ., `ΠΡ.`→ΓΡ. · 0181 `ΛΓΤ.`→ΛΑΤ.
  · 0184 `Κσʹ. ΓΡ.`→`ϛʹ. ΓΡ.` (intrusive-Κ class; = 6, Latin *6. GR.*) · 0197
  `ΛΔΤ.`→ΛΑΤ. · 0200 `ΚΛΑΤ.`→ΛΑΤ. · 0200 `ΓΡ.(`→ΓΡ. (the `(` is note-anchor
  residue; the plate carries note (29)/(s) there).
- **0176 (chunk 0001)** — `ἀλλ᾿ οὐ σύνθετος… τηἐκπρευτὸν` → `τὸ ἐκπορευτόν`;
  `μόον`→μόνον; `ἀγγέννητος`→ἀγέννητος (0184).

**Intrusive-Κ artifact class** (the anchor's ΠνενύΚματος class, still running):
0177 `Κτὴν ὑπεράγαθον`→τὴν · 0184 `Κγεννητὸς`→γεννητός · 0189 `περὶ
Καὐτήν`→αὐτήν, `τῷ λόγῳ Κδιακέκριται`→διακέκριται, `Κγινομένη`→γινομένη,
`σχεΚδόν`→σχεδόν, `ἄγνωστόν Κτε`→τε · 0193 `Κφῶς`→φῶς · 0200 `Κφαινόμενα`→
φαινόμενα.

**Routine OCR, bundled (no sense at issue):** 0176 `Οὔτω γὰρἔδοξε`, `ἐοτιν`,
`ταύτόν`, `Πατοὶ καὶ ἰἵῷ`, `υσικά`, `κατ᾿ οὐείαν`, `ἁλλά`, `ἑπί`, `ἀτδιον`,
`ἀπερίγοαπτον`, `φυσικἀ`, `κοινῷς`, `Ὑπόσασιν`, `δηλαόή`, `ἀνυπἑλάκτως`→
ἀνυπαλλάκτως, `Υἱνῦ`, `ἷέννησιν`, `Πατοὸς`, `τοῦΓἰνεύαατος`, `Ἑνος`→μόνος
(Lat. *solus … Unigenitus*), `ἔκν τινος`, `Υὸς`, `καθ᾿ δν`, `Υἱλν`, `εἰαί`→εἰμί,
`ἐξεκάλυύε`→ἐξεκάλυψε, `Υλοῦ`, `Ινεύματος` · 0184 `χεννῶν`, `πρυνθάλλεται`,
`Πεῦμα`, `ἐκπορεύόται`, `Ποῦ`→Υἱοῦ, `Γίοῦ`, `μόναν`→μόνον, `Κυρίον`,
`λατήρ`→Πατήρ, `ἐχόντοιν οὐδ᾿ Ἀν ἀνομάτων`→οὐδ᾿ ἐν ὀνομάτων, `Κἰ γάρ`→Εἰ γάρ,
`παναγίευ`, `ἐσὶ`→ἐπί, `Σὲ`→δέ, `Ἰδιότης` · 0188–0192 `σύνθισιν`, `λἱός`,
`ἐκπορετόν`→ἐκπορευτόν, `παριληπτικον`→περιληπτικόν, `ψποστάσεων`, `ἰὸιότητας`,
`προῖοῦτοα Κἐ ἐογειαν`→προϊοῦσαν ἐνέργειαν, `ἀλλδμως ὅλλο`→ἀλλ᾿ ὅμως ἄλλο,
`ἀριθμοῖς`, `τρίο ναὶ ὑποτοιπλάσιον`→τρίτον καὶ ὑποτριπλάσιον, `τετράγωνες`,
`ποντάγωνος`, `φεινομένη`, `ἄπλουστάηη`, `ὑποσπτάσεων`, `ἐνυΤαρχούσης`,
`συνθςτοις`, `τὸ!] εῦμα`→τὸ Πνεῦμα · 0193–0196 `ἐκπρρελόμενον`, `Πεὖμα`,
`Ιρῶτον`, `ῦτο γάρ`→τοῦτο γάρ, `Ιἱός`, `Θ γάρ`→Ἢ γάρ, `ἐκτοῦ ΥΙοῦ`,
`ακρων`, `τριων`, `νεύματος`→Πνεύματος, `κ τοῦ ΙΙατρὸς`→ἐκ τοῦ Πατρός ·
0197–0200 `ἡ οὲ`→ἡ δέ, `ατελής`, `ἐκπύρευσις`/`ἐκπίρευσιν`, `τοῦΠατρός`,
`διαροράν`, `παρεμφαίνουσ`, `Ὁμὲν`, `Ιατρός`/`Γατρός`, `Οίοῦ`, `χωοίζονται`,
`ἐκ τοῶ Πασοός`, `Ὥοπερ`, `ἕκαστυν`, `Υἱλς`, `δτι`, `συνορῷ`, `Ἱσως`,
`Πνεῦρα το ἅγιον`, `εἴῷ`, `λἱοῦ`, `υἱωνὸςὲ`→υἱωνὸς δέ, `φθέγγεσθνι`,
`ἐκατερα`, `ἐν τῷ αὐτῳ`, `αὐτων`, `ποὸς`.

**One correction taken on plate authority against Calfa:** 0196 (chunk 0004)
Calfa `Τῆς γὰρ **μονᾶς** ὁποτερασοῦν οὔσης τελείας`; plate (leaf 96, verified)
`Τῆς γὰρ **μιᾶς** ὁποτερασοῦν οὔσης τελείας`, Latin *"Si enim una…"*. Rendered
"the one of them, whichever it be". Left unmarked because the plate settles it;
worth noting only because μονάς is a live technical term four lines earlier and
a reader might expect it here.

## Pattern 7 non-word type carried into the English

- **0181 — *προεκτικόν*.** `τὸ γεννητικὸν καὶ προβλητικὸν ἤτοι **προεκτικόν**,
  εἰ οὕτω χρὴ λέγειν`. Not an attested Greek word (προετικός, from προΐημι, is
  what the sense and the Latin *sive emissio* want). Both OCRs of the plate —
  Calfa and the scan's own (leaf 89) — read `προεκτικόν`, and the author's own
  `εἰ οὕτω χρὴ λέγειν` ("if one must so speak") shows he knows he is coining.
  Carried in italics untranslated per Pattern 7's non-word rule rather than
  silently read as προετικόν. Conjecture recorded here.

## Scripture quoted in these chunks — divergences from the received text: NONE

Two only, both verbatim against the received Greek text, both matching the
Latin column:
- **0184** John 10:30 — `Ἐγὼ καὶ ὁ Πατὴρ ἕν ἐσμεν` (Calfa `λατήρ`, OCR; plate
  leaf 91 clean). Lat. *Ego et Pater unum sumus.*
- **0193** John 14:11 — `Ἐγὼ ἐν τῷ Πατρὶ καὶ ὁ Πατὴρ ἐν ἐμοί`. Lat. *Ego in
  Patre et Pater in me.*
There is one non-scriptural named authority: **0196**, `κατὰ τὸν σοφὸν
Διονύσιον` (ps.-Dionysius, *De div. nom.*), where the plate carries variant
note (24) *"Cod. ἀδύνατον"* against our `ἀδύναμον` — apparatus, not a
divergence. The florilegium of patristic testimonies is later in the work; the
first five chunks reach it only through this one Dionysian tag.

## Latin-twin pass (pilot §6) — per-chunk result

Every chunk got the deliberate post-draft pass against its twin. Outcome:

- **0001 — findings** (twin cols 0178–0182): the lost section-4 opening
  (restored from the plate + twin); the `ἐκπορευτόν`-list where Allatius
  collapses ἀγένητον/ἀγέννητον to a single *ingenitum*; twin's own OCR lacunae
  at cols 0179 (`Filii generationem, qua neque genitus` — words dropped) and
  (`ritus sanctus est procedens` — head of *solus enim Spiritus* dropped),
  which are defects in the VERIFIER and are not divergences.
- **0002 — findings**: `[lat:]` #1 (the 0185 negation) + three
  no-marker adjudications (μέση, the μὲν/δέ reversal, the *quod non dicam*
  note). Also the `Ἰμεῖς`→ἡμεῖς restoration at 0184, settled by the twin's
  first-person *dicimus* (itacism class; no marker fired, so no plate check was
  required, and none was taken).
- **0003 — findings**: `[lat:]` #2 (the ὑπο- ratios); the lost `(οὐ γὰρ μέρη`
  parenthesis; the corroborating negated parallel at col 0188 that made the
  0185 finding attributable. Also `καθά φατε καὶ ὑμεῖς` (0188) — the other
  pronoun-itacism class — confirmed by the twin's *secundum quod et vos
  dicitis*; no marker, no plate check needed.
- **0004 — findings**: the plate-verified `(διὰ τῶν ἀκτίνων γάρ)` restoration;
  the `πρὸς δὲ τὴν δευτέραν` concurrence; `μονᾶς`→μιᾶς. The twin for cols
  0195–0196 is **line-interleaved by the column crop** (the run beginning
  *"neque enim simplicibus simplicitas essentia … qui vero circa essentiam
  sunt, licet unius … reddunt"* is not continuous prose) and was treated as
  unusable for that stretch rather than read as divergence — flagging this for
  pilot §8 Q1: the twin's sanity gate is word-count-based and would not catch
  an interleave.
- **0005 — findings**: the plate-verified `(οὐ γὰρ` restoration at col 0196.
  Otherwise the columns run together closely.

**No chunk in this batch came back clean.** Reporting that plainly, since the
pilot asks for it: 0/5 clean, and in four of the five the finding was a defect
in *our* file rather than a divergence between Migne's columns — which is the
result the standing PG attribution rule predicts and the reason the twin plus
the plate were both needed.

## Plate apparatus visible in the twin for this span (not ours to mark)

Numeric notes (Greek column): (15) *Ita scriptum. Quod tamen mendum exhibere
videtur.* [on μέση, 0184] · (16) *Cod. Vat. f. 5,6, mendose, ὑπόθεσις* · (18)
*Cod. Vat. Ἐκπορεύεται* · (19) marginal, Gk: *Ἐνταῦθα εἰσαγωγὴ ἑτέρου ἀτόπου
ὅτι διπλῆ ἔσται ἡ τοῦ Πνεύματος ἐκπόρευσις…* · (21) *Frequen[ter]…* · (23)
marginal, Gk: *Ἕτερον ἄτοπον ὅτι ἐκ τοῦ Πατρὸς καὶ ἐκ τοῦ Υἱοῦ ἐκπορευομένου
τοῦ Πνεύματος, ἢ ἀτελὴς ἡ ἐκπόρευσις ἑκατέρα ἢ περιττὴ ἡ ἑτέρα* · (24) *Cod.
ἀδύνατον* · (26) *Vat. εἰ* · (28) *Vat. τελείων* · (29) marginal, Gk: *Ἕτερον
ἄτοπον, ὅτι εἰ ἐκ τοῦ Υἱοῦ τὸ Πνεῦμα υἱὸς ἔσται τοῦ Υἱοῦ*.
Letter notes (Latin column): (f) Elias of Crete on Greg. Naz. or. 11 + Arist.
*Metaph.* IV · (k) *S. Maximus, Opusc. theol. et polem.* II p. 155 ed.
Combefis; ps.-Justin *Expos. rectae fidei* n. 3 · (m)/(4) on προβάλλεσθαι
being middle, not passive · (n)/(o) the two marginal *aliud absurdum* notes,
(o) adding the cross-reference to **Photius, *De Spiritus sancti mystagogia*
c. 7** and **Nicholas of Methone c. 11** for the Greek's fourth argument ·
(p) *Haec sane non satis accurate dicta sunt* + the attack on *mediate /
immediate* · (q), (r) (*imitatur Gregorii Nazianzeni responsum* or. 27) ·
(s) *Quintum argumentum*.
Calfa strips all note anchors from the Greek, so the English carries no `[n:]`
markers; the identifications survive in the committed twin and are listed here
for the eventual fontes/scripture harvest.

# ── SOURCE FILE: cruces-0006.md (chunks 0006–0009) ──

# Cruces — nicetas-maroneia-dialogi, chunks 0006–0009 (Opus, 2026-07-31)

Second half of the work (chunks 0006–0009 of 10). Chunks 0001–0005 were held by a
peer agent who could not see this file; **the merge is a required later step**, not
done here. Conventions below are the anchor's (`cruces-0000.md`) unless flagged as
**decided fresh**.

## Method note — what "plate-verified" means in this batch

The Latin twin was cropped from `raw/scans/pg139/patrologiaecurs63migngoog_djvu.xml`
by x-range split. **The same leaves carry Migne's GREEK column in that XML**, and its
OCR is independent of Calfa's. Every reading marked *plate-verified* below was checked
against the Greek column of the named leaf (leaves 98–108 = cols 0201–0221), so the
evidence is a second witness to the plate, not a second reading of our own file.
Where the scan OCR is itself illegible at the point at issue, that is said.

## Conventions carried from the anchor (unchanged)

Speaker sigla ΓΡ./ΛΑΤ. → GR./LAT., one paragraph per turn · section letter-numerals
as arabic + period · οὐσία = essence, φύσις = nature, ὑπόστασις = hypostasis,
πρόσωπον = person, ἐκπόρευσις = procession · ὑπερ- compounds take "super-" ·
mentioned particles stay in Greek script, quoted credal clauses translated in " ".

## Conventions decided fresh (flag for the merge)

These terms first fall due in this half of the work; the peer's half may have settled
some of them differently.

- **ἀρχή = "principle"** throughout, including where English would prefer "beginning"
  or "origin" — the whole of §§2–4 turns on ἀρχή/ἄναρχος/ὑπεράρχιος being one word.
  Consequently **ἄναρχος = "without principle"** (Lat. *principii expers*) and
  **ὑπεράρχιος = "super-principial"**.
- **αἴτιον = "cause"** (never "principle"), kept distinct from ἀρχή because 0213 sets
  them side by side: *καὶ ἀρχὴ καὶ ἀρχή, καὶ οὐ δύο ἀρχαί, οὐδὲ δύο τὰ αἴτια*.
- **προβολεύς = "producer" · προβάλλεσθαι = "to produce" · προΐεσθαι = "to send
  forth"** — three distinct words for the Latin's single *producere*; kept apart
  because 0201 contrasts *οὐδὲν ἐξ ἑαυτοῦ τὸ Πνεῦμα προΐεται* with *τὸ ἑτέρας
  ὑποστάσεως προετικόν*.
- **ὕφεσις = "diminution"** (Lat. *minoratio*).
- **γεννητόν = "that which is begotten" · ἐκπορευτόν = "that which proceeds"**, and
  ἐκπορευτόν predicatively = "capable of proceeding" (0212: *οὐδὲ ἐκπορευτὸν ὅλως*).
- **ὑπερ- compounds coined in this half:** ὑπεράριθμος = "super-numerical",
  ὑπερφυής = "super-natural" (hyphenated, to keep it visibly a compound and not the
  ordinary English word), ὑπερταγής = "super-ordered".
- **πατριά = "fatherhood"** at 0209, on the authority of **Migne's own note (y)** on
  that column: *Πατριὰ hic non est genus, gens, origo, sed paternitas, ut Ephes. III,
  15, ad quem textum alluditur.* The plate settles it; no conjecture of ours.
- **ὁμοούσιον** carried untranslated in italics as *homoousion* at 0217 — the word is
  the subject of the sentence *as a word* ("which is one single word of the creed"),
  so an English equivalent would dissolve the argument. Mention-vs-use rule, extended
  from particles to this one term.
- **γηγενάρχης = "head of the earth-born" · ἀγγελάρχης = "chief of the angels"**
  (Lat. *terrigenarum generis princeps*, *angelorum princeps*).
- **παρόμοιον rendered "nearly-like"** at 0205 — the semi-Arian term in a list of
  words the heretics use; "similar" (Lat. *simile*) would lose that it is a technical
  slogan.

## Latin-twin pass (pilot §6) — result by chunk

Performed after drafting, against `src/pg-latin/nicetas-maroneia-dialogi/000[6-9].md`.

- **0006 — findings** (one [var:], one numeral candidate logged unfired, OCR class).
- **0007 — findings** (one [lat:] fired; one polarity repair on our side).
- **0008 — findings** (three lost headings, one lost editorial bridge, OCR class).
- **0009 — CLEAN on the divergence test.** Every fact, name, negation and clause in
  col. 0221 is asserted alike by both columns; the only Latin departures are
  Allatius's routine looseness (*et confitemur* added to the closing sentence, which
  the Greek does not print) and readings Migne's own notes (78)–(79) already record.
  No `[lat:]`, no crux beyond the OCR list below.

**No chunk in this batch was clean of Calfa OCR damage.** The twin pass found no
"Greek made no sense and the Latin explains why" case that the plate's own Greek
column did not settle more directly.

## Pattern 16 — `[lat: …]` fired: ONE

- **0212 / twin col. 0211.** Greek: *Οὗτος ὁ λόγος δείκνυσιν **οὐχ ὅτι μὴ** ἐκ τοῦ
  Υἱοῦ, ἀλλ' ὅτι μηδὲ ἐκ τοῦ Πατρὸς ἐκπορεύεται, μηδὲ ὅλως ἐκπορευτόν ἐστι.*
  Allatius: *Hec ratiocinatio ostendit, **non quod procedit ex Filio**, sed quod neque
  ex Patre procedit, neque omnino procedens est.* The Latin has no equivalent of the
  Greek's μή. **Plate-verified**: leaf 103, Greek column, reads *δείκνυσιν οὐχ ὅτι μὴ
  ἐκ τοῦ Υἱοῦ* — the negative is on the plate, not a Calfa intrusion. The divergence
  is material and doctrinal: on the Greek the Latin speaker concedes that the Greek's
  reductio disproves the *denial* of procession from the Son as much as the assertion
  of it (μηδέ then escalates: "nor from the Father either"); on Allatius he concedes
  only that it fails to prove procession from the Son. English follows the Greek;
  marker fired. Migne prints no note adjudicating this column, so the plate's own
  apparatus does not settle it (contrast the anchor's *concordassent* case).

## Pattern 16 — candidates LOGGED, marker NOT fired

- **0205 / twin col. 0206 — section numeral εʹ vs Latin "6."** Greek plate-verified
  as **εʹ** (leaf 100, Greek column: *ε'. Ἡ τοίνυν τάξις*), and Calfa agrees. The
  Latin column's numeral OCRs as "6." at 85% confidence in a typeface where 5 and 6
  are confusable, on a rough crop. Per the standing rule that numerals need the
  *Greek* plate-verified before a marker fires, the Greek side is clean — but the
  **Latin** side here is the unverified one, and firing on it would manufacture a
  divergence out of crop noise. The Latin column also drops the δʹ mark entirely two
  sections earlier, which is enough to explain a one-off numbering slip. Logged; no
  marker; a leaf render would settle it in a minute if anyone wants it.
- **0216 / twin col. 0215 — Ἐπίσχες vs *Retinuisti*.** Greek imperative "Hold back,
  O Greek" (plate leaf 105: *Ἐπίσχε*, imperative); Allatius gives the aorist
  indicative, "You have held back, O Greek." A real construal difference, but it is
  Allatius reading an ambiguous form one letter differently, which is the far end of
  his ordinary freedom rather than a different fact about the transmission. Logged;
  no marker. This is a **materiality-boundary datum for pilot §8 Q3**: mood/person
  shifts on an ambiguous form are being treated as looseness, not divergence.
- **0221 / twin col. 0222 — the closing sentence.** Migne's note (79) records that
  Allatius's own version read *quod satis utrisque, nobis et vobis, amorem
  conciliabit* against the printed *Satis … consensio in unum … erit*. The plate has
  already adjudicated its own Latin, per the anchor's rule; logged, no marker. The
  printed Latin agrees with the Greek.

## Pattern 14 — `[var: …]` fired: TWO (the divergence list)

Both are quotations Migne prints in a form the received text does not carry. These
are the most valuable findings in the batch, and the search for them was word-by-word
against the plate, not against memory.

- **0204, John 14:28.** Migne's Greek prints **Ὁ Πατήρ ΜΟΥ μείζων μου ἐστίν** — with
  the possessive on *Father* as well as on the comparative. **Plate-verified**: leaf
  98, Greek column, *Ὁ Πατήρ μου μείζων μου ἐστίν (33)*, note (33) = *Joan. xiv, 28*.
  The received NT text is ὁ πατὴρ μείζων μού ἐστιν, with one μου only. Allatius's
  column carries the doubled possessive too (*Pater meus major me est*), so both
  columns concur against the received text — ladder row 3, the two-witness case.
  Rendered as Migne prints it ("My Father is greater than I"); `[var: Gk. …]`.
- **0221, the creed.** Migne prints the clause the Greek speaker urges on the Latins
  as **τὸ σὺν Πατρὶ καὶ Υἱῷ συνδοξαζόμενον** — one verb. The Nicene-Constantinopolitan
  text has two, συμπροσκυνούμενον καὶ συνδοξαζόμενον. **Plate-verified**: leaf 108,
  Greek column, *τὸ σὺν Πατρὶ καὶ Υἱῷ συνδοξαζόμενον εἴπατε*; the Latin column
  likewise gives only *qui cum Patre et Filio simul glorificatur*. Both columns
  concur; rendered as printed; `[var: …]`. Worth noting for whoever merges: the
  anchor's chunk 0000 uses the full doubled formula in the proem (*συμπροσκυνούμενον
  … καὶ συνδοξαζόμενον*), so this is a divergence **inside the work**, not a house
  style — do not harmonize the two at merge time.

## Pattern 13 — `[ed: …]`, text the DIGITIZATION lost that the plate carries

This work is Hergenröther's set of fragments of dialogues II–VI, and its structural
furniture is exactly what Calfa strips. Five centered division headings and two
editorial bridges are gone from our Greek. All are restored as `[ed: …]`, never as
`## ` heads (marker parity with the Greek chunk), following the anchor's ΛΟΓΟΣ
ΠΡΩΤΟΣ precedent.

- **0201 (leaf 98)** — ΛΟΓΟΣ ΔΕΥΤΕΡΟΣ / DIALOGUS SECUNDUS, plus the section mark
  **αʹ** that follows it and governs *ΛΑΤ. Ἐπηγγείλω*. The heading is set as two
  centered lines spanning the gutter, which is why the crop split it (ΛΟΓΟΣ +
  DIALOGUS on the Greek side, ΔΕΥΤΕΡΟΣ (30) + SECUNDUS on the Latin). The αʹ is
  restored silently as "1." — routine, plate-verified, and the Latin column prints
  "1." too.
- **0204 (leaf 99)** — editorial bridge before *Τὸ μεῖζον ἄρα*: our Greek runs the
  two speeches together across the column anchor. The Latin twin at col. 0203 carries
  it (*Sequitur prolixa de hoc argumento tractatio … deinde in Vatic., cod. 1115
  f. 11 b. med. Latinus*). `[ed:]` describes the loss; nothing of the Latin's wording
  is imported into the running text.
- **0205 (leaf 100)** — the clause **καὶ τὸ πρῶτον καὶ τὸ πρότερον…** is truncated by
  Calfa to *καὶ τὸ πρῶτον καὶ τὸ α*, which then fuses with the initial **Ἵν**- of the
  next sentence: Calfa reads *καὶ τὸ πρῶτον καὶ τὸ α δὲ ὁ λόγος ἐξεταστικώτερος
  γένηται*, a non-sentence. Plate: *καὶ τὸ πρῶτον καὶ τὸ πρότερον… [ed. bridge] …Ἵνα
  δὲ ὁ λόγος ἐξεταστικώτερος γένηται*. πρότερον restored silently; the bridge marked
  `[ed:]`.
- **0212 (leaves 102–103)** — the closing speech of the Latin, **ΛΑΤ. Ἔστω καὶ
  ταῦτα, καθά σοι δοκεῖ· ἐχέτω πέρας ὡδὶ ἡ παροῦσα διάλεξις**, is dropped whole by
  Calfa, and with it ΛΟΓΟΣ ΤΡΙΤΟΣ / DIALOGUS TERTIUS. The speech is **plate-verified
  in the Greek column** (leaf 102) and corroborated by the twin (*LAT. Sint et hec,
  ut tibi videtur, et habeat hic disputatio finem presens*), so it is rendered in the
  running text — ladder row 1, as the anchor did at 0176 — and an `[ed:]` says
  plainly that our source drops it, so no reader meets a restored speech unmarked.
- **0213 (leaf 103)** — ΛΟΓΟΣ ΤΕΤΑΡΤΟΣ / DIALOGUS QUARTUS.
- **0216 (leaf 105)** — ΛΟΓΟΣ ΠΕΜΠΤΟΣ / DIALOGUS QUINTUS.
- **0217 (leaf 105)** — ΛΟΓΟΣ ΕΚΤΟΣ / DIALOGUS SEXTUS.
- **0217 (leaf 106)** — editorial bridge between the Greek's two consecutive speeches
  (*Deinde Latinus multa profert pro sua sententia … Postea Graecus ita prosequitur*).
  Marked because without it the page shows GR. answering GR., which reads as our bug.

**Fragment boundaries as found:** dialogue II opens at col. 0201/0202 and the work
runs to a stop at col. 0221 in mid-argument, where PG 139 turns to the next author
(Joannes of Citrus). Ellipses (*…*) inside the Greek are Hergenröther's own and are
reproduced as printed; no gap anywhere was bridged with invented connective prose.

## Ladder row 1 — Calfa OCR damage, corrected silently in the English

Itemized inline these would drown the text (register rule). Grouped by column.
Unless marked otherwise, the correction is confirmed by the plate's Greek column on
the leaf named in the section head above.

**Polarity- and sense-bearing (these are the ones that mattered):**

- **0209** *περίγραπτος* → **ἀπερίγραπτος**. Calfa prints *οὐδὲ τοπικὴν θέσιν —
  περίγραπτος γὰρ ἡ Τριὰς καὶ ὑπὲρ πάντα τόπον*, i.e. "**circumscribed**, for the
  Trinity is circumscribed and above every place" — the exact opposite of the
  argument, and self-contradicting within its own parenthesis. Calfa has swallowed
  the opening **(ἀ**. Plate (leaf 102): *(ἀπερίγραπτος ἡ Τριὰς καὶ ὑπὲρ πάντα
  τόπον)*; twin: *incircumscripta est enim Trinitas et super omnem locum*. Two
  independent witnesses; corrected. **This is the single most dangerous defect in the
  batch** — it is invisible once translated, it makes a grammatical English sentence,
  and it inverts a doctrinal predicate.
- **0201** *οὐκ ἀλίνα δείέομεν* → **οὐκ ὀλίγα δείξομεν**, "we shall show not a few."
  The scan's Greek OCR drops the *οὐκ* (reads *ὀλίγα*), so on the plate side alone
  the sense would be "a few"; Calfa and the twin (*eaque non pauca*) both carry the
  negation, and it is the negation that makes the sentence a threat rather than a
  concession. Kept. Recorded here because it is a case where the *plate* OCR is the
  witness that dropped a negative.
- **0201** *ὄφεσις* → **ὕφεσις** ("diminution"). Both OCRs read *ὄφεσις*, which is not
  a Greek word; the twin gives *minoratio*, and the same word recurs correctly as
  *ἡ ὕφεσις* four columns later (0205, both witnesses). Corrected as a non-word, not
  as a reading we prefer.
- **0209** *τοῖς τρισίν* → **ταῖς τρισίν** (plate); no English exponent, recorded only
  so the merge is not surprised.
- **0209** *διαφορά* → **διαφοράς** (plate; twin *secundum differentias*).
- **0220** Calfa's **column-break hole**: it prints *πολλαὶ ἀμφιβολίαι μετὰ [0220]
  συμβόλου λέξις ἐστί*, having lost the run that bridges leaves 106→107. Plate: *…
  μετὰ **ταῦτα περὶ τοῦ ὁμοουσίου γεγόνασιν, ὅπερ μία** συμβόλου λέξις ἐστί*; twin:
  *multa postmodum de homousio quae una tantummodo symboli dictio est, dubia essent
  exorta*. Restored silently from the plate (not from the twin); the whole clause
  about the *homoousion* — the analogy on which the speaker's entire argument against
  additions rests — was absent from our Greek.
- **0221** Calfa prints *εἰς τὸ μέδιαιρέσεως αἴτιον*, fusing across a lost run.
  Plate (leaves 107–108): *εἰς τὸ **μέσον κοινόν, καὶ σχίσματος τοσούτου καὶ**
  διαιρέσεως αἴτιον*; twin: *neque scandalum commune in medium introducere, quod
  tanti schismatis et divisionis causa sit*. Restored from the plate.

**Speaker sigla mangled by Calfa** (all restored, all plate-verified): 0201 *ΠΡ.* →
ΓΡ.; 0201 *ΑΑΤ.* → ΛΑΤ.; 0201 *ΤΡ.* → ΓΡ.; 0204 *ΛΛΤ.* → ΛΑΤ.; 0213 *λΑΤ* → ΛΑΤ.;
0216 *ΕΡ.* → ΓΡ.; 0216 *ΛΑΤ.θ* → ΛΑΤ.; 0212 *ΑΑΤ.* → ΛΑΤ. **0213: Calfa drops the
ΓΡ. tag entirely** before *Πάραγε δή μοι καὶ ταῦτα*, silently handing the Greek's
speech to the Latin; the plate (leaf 104) and the twin (*GR. Profer jam mihi*) both
carry it. Restored.

**Section marks:** 0205 *νʹ* → **γʹ** ("3.") — plate leaf 99 reads *γ'.*, twin reads
*3.*; Calfa's ν is an OCR of γ, and left standing it would have printed "50." in the
English. 0201 *αʹ* restored (lost with the heading, above).

**The intrusive-Κ class** (already named in the anchor's cruces for chunk 0000, and
still running at this end of the volume): 0209 *Κθεοί* → θεοί · 0209 *Κγὰρ* → γάρ ·
0213 *Κἵκα* → ἵνα · 0213 *Κἐμφαῖνον* → ἐμφαῖνον · 0217 *Κῥνωθεν* → ἄνωθεν · 0217
*Κἐτράνωσεν* → ἐτράνωσεν · 0220 *Κσυμβόλῳ* → συμβόλῳ.

**Dropped opening parenthesis class** (same defect as the anchor's 0172 *ἀδύνατονὐδὲ*):
0209 *ἁπασῶνπὲρ φύσιν* → *ἁπασῶν (ὑπὲρ φύσιν* · 0209 *ἁπασῶνκὲρ τάξιν* → *ἁπασῶν
(ὑπὲρ τάξιν* · 0209 *διαίρεσιν παρεισάγουσαα γὰρ ἡ φύσις* → *διαίρεσιν παρεισάγουσα
(μία γὰρ ἡ φύσις* · 0209 *θέσινπερίγραπτος* → *θέσιν (ἀπερίγραπτος* (see above) ·
0209 *τὸ ἅμαν οἷς γὰρ* → *τὸ ἅμα (ἐν οἷς γὰρ*.

**Routine letter-level damage, bundled** (correction ← Calfa): 0201 **ἀναλαβόντες kept**
(Calfa's reading; the scan's Greek OCR gives only *λαβόντες*, but the twin's
*disputationem resumentes* wants the ἀνα-) · 0201 ἑτοπα → ἄτοπα · 0201 ἐκτοῦ → ἐκ τοῦ · 0201
ατρὸς → Πατρὸς · 0201 ἐχόντοιν **kept** (genitive dual, both witnesses — not an
error) · 0201 Πατοὸς → Πατρὸς · 0204 θΗατήρ → Ὁ Πατήρ · 0204 εἴῃνε → εἴληχε · 0204
φατὲ/φατέ as printed · 0205 ὁ ὸς → ὁ Υἱὸς · 0205 Ἀ δὲ Πατὴρ → ὁ δὲ Πατὴρ · 0205 Ιει
→ ἕξει · 0205 Μακεἐόνιος → Μακεδόνιος · 0205 ποοὸν → ποσόν · 0208 ποότερον →
πρότερον · 0208 λέ, εται → λέγεται · 0208 **τὰ κῶ γράμματα → τὰ κδʹ γράμματα**
(twenty-four; plate *κδ'*, twin *Viginti quatuor* — a letter-numeral, verified on
both sides before rendering) · 0209 Δδάμ → Ἀδάμ · 0209 Ἀιχαὴλ → Μιχαὴλ · 0209 ἀν
οὐρανοῖς → ἐν οὐρανοῖς · 0209 θεαρχκῆς → θεαρχικῆς · 0209 όῦτως → οὕτως · 0209 Τίοῦ
→ Υἱοῦ · 0212 τίθεαμεν → τίθεμεν · 0213 Ἰ δὲ → Ἡ δὲ · 0213 Παῆρὸς → Πατρὸς · 0213
δονματιζόμενον → δογματιζόμενον · 0213 Ιατέρα → Πατέρα · 0213 ἀυδρῶς → ἀμυδρῶς ·
0213 Γοαφῆς → Γραφῆς · 0213 *ἐξ αὐτῆς τῆς Ὃν πραγμάτων* → *ἐξ αὐτῆς τῶν πραγμάτων
καὶ νοημάτων φύσεως* · 0213 συσκεόώνεθα → συσκεψώμεθα · 0213 Αέγω → Λέγω · 0213
καυσις → καῦσις · 0213 βύλει → βούλει · 0213 ἠ ἐνέργεια → ἡ ἐνέργεια · 0213 Γρας ῆς
→ Γραφῆς · 0216 *ἕτερος. ὧ Λατήα τοῦ δόγματος* → *ἕτερος, ὦ Λατῖνε, τοῦ δόγματος* ·
0216 ἀσθενής ἐστε → ἐστι · 0216 παραοειγμάτων → παραδειγμάτων · 0217 Τκῦτα → Ταῦτα ·
0217 τοὐτὰ → ταὐτὰ · 0217 πρὸ τούτν → πρὸ τούτων · 0217 σύνοδ ν → σύνοδον · 0217 τὸ
δὲ ἄγιος σύμβολον → τὸ δὲ ἅγιον σύμβολον · 0220 προΐντο → προΐεντο · 0220
συνεγράψαντότε → συνεγράψαντό τε · 0221 βίόλοι → βίβλοι · 0221 ιοοονοῦντες →
φρονοῦντες · 0221 Γνεῦμα → Πνεῦμα · 0221 οὕτιο → οὕτω · 0221 κλέος πὸ → κλέος τὸ ·
0221 λένετε → λέγετε · 0221 ἐκπορευεσίλαι → ἐκπορεύεσθαι · 0221 συγγοαφῶν →
συγγραφῶν · 0221 ικπόρευσιν → ἐκπόρευσιν · 0221 Καμασκηνός → Δαμασκηνός · 0221 δίᾳ
→ ἰδίᾳ · 0221 τὸ κ τοῦ → τὸ ἐκ τοῦ · 0221 τὸ νεῦμα → τὸ Πνεῦμα · 0221 νοῦμεν →
νοοῦμεν · 0221 Πιτρός → Πατρός · 0221 προσθρκν → προσθήκην · 0221 *τὸ ἐκ τοῦ ἰατρὸς
καὶ ἐκ τοῦ λἱρῶ ἐν σορευόμενον* → *τὸ ἐκ τοῦ Πατρὸς καὶ ἐκ τοῦ Υἱοῦ ἐκπορευόμενον*
(plate leaf 108; twin *Qui ex Patre Filioque procedit*) · 0221 Πἱῷ → Υἱῷ.

**One reading kept against the plate:** 0221 *δρῶντας* (Calfa) where the scan's Greek
column OCRs *δρῶντος*. The twin construes plural (*Patrum vestigia sequentes … in
symbolo … pronuntiare*) and the whole address is to the Latins in the plural; the
scan's singular is very likely its own OCR slip on a final letter. Rendered plural,
logged so the choice is visible.

## Negation audit (7a) — the doctrinal core

Every οὐ/οὐκ/οὐχ/μή/μηδέ/οὔτε/μηδὲ ὅλως in these four chunks was checked one by one
against Calfa, the plate's Greek column and the twin before drafting, and again after.
The dense sites, all carried through unaltered:

- **0212** *οὐκ ἐκ τοῦ Πατρὸς καὶ τοῦ Υἱοῦ μόνον … ἀλλὰ καὶ ἐξ ἑαυτοῦ … ὅπερ οὐκ
  ἔστιν* — the reductio; both negatives kept though the second flatly contradicts the
  clause it governs.
- **0212** *Ἢ οὖν οὐδὲ ἐκπορευτὸν ὅλως, ἢ … ὅπερ οὐδέποτε.*
- **0212** *οὐχ ὅτι μὴ … ἀλλ' ὅτι μηδὲ … μηδὲ ὅλως* — four negatives in one clause;
  see the `[lat:]` above.
- **0209** *ἀλλ' οὐ κατὰ τὴν οὐσίαν* · *οὐ φύσεως διαίρεσιν … οὐδὲ τοπικὴν θέσιν …
  οὐδὲ χρονικῆς κινήσεως* · *ἄναρχος … καὶ οὐκ ἄναρχος* · *ἀλλ' οὐ τρεῖς ἀρχαί* ·
  *ἀλλ' οὐ τρεῖς Θεοί*.
- **0208** *οὐκ ἀγνοῶ γε οὐδὲ τὰς αἰτίας … οὔτε μὴν εἰδὼς αὐτὰς ἀποπροσποιοῦμαι* —
  a double negative plus a privative verb; rendered "I am not indeed ignorant … nor,
  knowing them, do I disown them."
- **0217** *οὐδεμία σύνοδος … οὐδὲ ἓν ῥῆμα οὔτε ἀφεῖλεν οὔτε προσέθηκεν οὔτε τι …
  ἠλλοίωσεν* — five negatives; the sentence is the argument.
- **0220** *οὐκ ἠθέλησαν … προσθεῖναί τινα* · *οὐδόλως ἐποίησαν*.
- **0221** *οὔτε τὸ διὰ τοῦ Υἱοῦ οὔτε τὸ ἐκ τοῦ Υἱοῦ ἢ μὴ ἐκ τοῦ Υἱοῦ … δέον
  ἡγούμεθα* · *ὡς μὴ δοθείη πρόφασις* · *καὶ οὐχ ὡς διὰ τοῦ Υἱοῦ* · *προσέθηκαν
  οὐδέν* · *οὐ λέγεται ἐκ τοῦ Υἱοῦ* · *ὅμως οὐ λέγομεν ἐν τῷ συμβόλῳ*.

**Pronoun-itacism audit (ἡμεῖς/ὑμεῖς).** Every first/second-person plural in these
chunks was checked across all three witnesses before drafting, because Calfa confuses
the pair and this dialogue's whole rhetoric turns on who is being accused. All agree:
0204 *κατὰ τὸν ὑμέτερον λόγον … οὐχ ἡμῖν μᾶλλον … ἀλλ' ἑαυτοῖς συνηγάγετε* (twin
*vestram … non magis nobis, quam potius vobis ipsis*); 0212 *τῆς μεθ' ὑμῶν …
συζητήσεως*; 0217 *ἡμῖν τε ἐναντιόφρονες … ὑμεῖς*; 0221 *καὶ ἡμῖν καὶ ὑμῖν ἔχει τὸ
ἀναμφίβολον* (twin *et apud nos et apud vos*), *ἀρκέσει δὲ ὑμῖν καὶ ἡμῖν*. **No
`[lat:]` candidate in this class.**

**Not repaired to make sense:** nothing. The one place where the printed Greek does
not construe on its own is 0221, *Ἐν γὰρ τῇ ἀποδόσει τῆς πίστεως τὸ ἐκ τοῦ Πατρός,
οὐκ ἐκ τοῦ Υἱοῦ ἐκπορευόμενον, ἰδίᾳ δὲ ἐπισημαίνεται* — the first limb has no finite
verb (the twin supplies *exprimit*). Rendered with a bracketed supplied "[it is]"
rather than borrowing Allatius's verb into the English; the crux is here.

## Ellipses, anchors, ratio

The Greek's own *…* marks (Hergenröther's elisions) are reproduced 1:1; column
anchors are 1:1 with the Greek chunks ([0201][0204][0205] · [0208][0209][0212] ·
[0213][0216][0217][0220] · [0221]). EN:GK ratio 1.39 / 1.36 / 1.41 / 1.36 — at the
dialogue anchor's 1.37×.

## For the merge

1. Diff the fresh-decided vocabulary above against chunks 0001–0005, especially
   **ἀρχή/αἴτιον**, **προβολεύς/προβάλλεσθαι/προΐεσθαι**, and the **ὑπερ-** coinages.
2. Do **not** harmonize the two forms of the creed's glorification clause (anchor
   0000 doubled, 0221 single) — see the `[var:]` note; that divergence is Migne's.
3. The anchor's `[ed:]` for ΛΟΓΟΣ ΠΡΩΤΟΣ and the five in this half should end up
   phrased alike; they were written to the same template but not against each other.
