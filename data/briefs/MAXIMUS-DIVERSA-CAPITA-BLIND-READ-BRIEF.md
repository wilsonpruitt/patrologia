# Maximus the Confessor, *Diversa capita* (PG 90, cols 1177–1392): blind read brief (2026-11-22)

Adapted from `MAXIMUS-CAPITA-ALIA-BLIND-READ-BRIEF.md`. You are one of five blind readers: **R1 = chunks 0001–0004 (I.1–II.15), R2 = 0005–0008 (II.15–III.31),
R3 = 0009–0012 (III.31–IV.34), R4 = 0013–0016 (IV.34–V.32), R5 = 0017–0019 (V.32–100)**. Work key `maximus-confessor-diversa-capita`. Greek: `src/greek/<key>/NNNN.md` · the facing
Latin (archive.org OCR, a witness only): `src/pg-latin/<key>/NNNN.md` · English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own OCR of Migne's plates (Kraken, a rule pass, lost lines restored from the plate, then 791 doubtful readings looked up on the
plate image). Ten Opus translators, a consistency sweep, then a fixer who brought the English back to the plate and to Migne's own editor's notes. The English passes every
mechanical check. **Your job is the class the checks cannot see:** a meaning reversed, a clause lost, a who-did-what flipped, a question made a statement.

What the text is: five centuries of 100 chapters: the Trinity and the divine names, the logoi of beings, providence and judgement, the incarnation and deification, the Law and
the Gospel read anagogically (one Scripture image after another, each said to signify something), practice and contemplation, the passions, virtue and vice. **Long stretches come
from Maximus's *Quaestiones ad Thalassium*.** Each chapter is short and dense: **a single dropped or added negative reverses it**. Traps: the correspondences (X signifies Y: a swap
reverses); paired terms (practice/contemplation, nature/inclination, essence/activity, the active/the knowers, pleasure/pain, motion/rest, λόγος/τρόπος); the Christological terms
(nature, hypostasis, person, activity, will — one nature/two natures is a polarity class too); the comparisons and the conditionals; who is the subject of a participle chain.

## The Latin is NOT the text
The facing Latin is learned and paraphrastic: it expands, supplies verbs, and sometimes reads a different word.
**A Greek/Latin disagreement is not a finding on its own**: the English follows the Greek. Report it only where the English
departs from the Greek.

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the text on purpose; the English follows the sense. No `[sic:]` marks are set; 42 of Migne's misprints are listed on the cruces page. Where the English reads a conjecture against Migne's text, its note says "Migne prints X (confirmed on the plate)": not a finding unless the conjecture itself reverses the sense. A Greek word that does not parse may be Migne's misprint: say so and propose the sense only if the sentence demands it.
- `[n: …]` in the Greek is Migne's variant (`[n: al. ins. γάρ.]`). Not a finding. `[b: X]` band letters, `[NNNN]`
  column anchors and ⟦p⟧/⟦s⟧ markers: not findings. ⟨…⟩ in the English = words supplied where the plate lost them; report
  one only if it reverses or distorts the sense. `[?]` = a doubtful reading the translator flagged.
- To check the plate: the chunk's pages are in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/maximus-diversa-capita/pages/p-NNNN.png` (pages 602–709; 600 dpi; the Greek column is LEFT on even pdf pages, RIGHT on odd). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/dc-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms: φρόνημα way of thinking; ἀΐδιος eternal, αἰώνιος everlasting; ἐπίγνωσις full knowledge; σύνεσις intelligence, διάνοια understanding; θεώρημα object of contemplation; οἴησις conceit,
  τῦφος arrogance; ὅρος limit; οἰκειότης intimacy, οἰκείωσις kinship; δικαιοσύνη justice (righteousness in Scripture); ἄπτωτος unfalling, ἄπταιστος infallible, ἀδιάπτωτος unfailing; ἐγκράτεια self-control;
  ἀπάθεια passionlessness; ἔννοια notion, νόημα concept; κίνησις motion, κίνημα movement; πόθος longing, ἔρως yearning; λόγοι of beings = principles; οἰκονομία economy; thou for a Greek singular.
- **Migne's square brackets** in this work are his apparatus set into the text («[Regii duo X]», «[unus Reg. X]», «[male edita X]» = the earlier edition's bad reading, «[qu. N ad Thalass. X]», «[fort. X]»):
  the English follows the printed word, the bracket is in a T note. Not findings unless the English follows the bracket or a note misstates it.
- Known and noted: col. 1181 (I.5–I.11, p-0604): our scan clips the line openings, supplied from another transcription (one `[?]`, I.8); I.77 ἀνύπαρκτον (on the plate); III.55 «is absent» (the plate is
  a blot; Latin + witness); IV.39 «the suffering nature» (Migne prints ἀπαθοῦς, his editor's notes say read παθούσης); V.95/V.99 privative brackets (earlier edition's errors, English keeps the privatives);
  42 misprints listed on the cruces page (those that change the construal are T-noted).
- Chapter numbers follow Migne's numerals; each century 1–100, verified (III prints «οϛʹ» twice: the second is 77, noted).

## What to hunt, in order of yield## What to hunt, in order of yield## What to hunt, in order of yield
1. **Polarity.** οὐ / οὐκ / οὐχ / μή / οὐδέ / μηδέ / οὐδείς / μηδείς / οὔτε / μήτε / χωρίς / ἄνευ / εἰ μή / πλήν dropped or
   added; a negative moved to the wrong clause; οὐ μόνον… ἀλλὰ καί flattened; a privative (ἀ-) word rendered positively.
   **Check every negative in the Greek of your range against the English.**
2. **Who does what:** speaker and addressee in every nested speech; which person a pronoun or a participle belongs to;
   active vs passive; who gives, who takes, who is cured, who dies.
3. **Mis-parsed grammar:** participles and genitive absolutes attached to the wrong subject; ὡς / ἵνα / ὥστε / ὅτι / εἰ
   clauses inverted; a question rendered as a statement or the reverse (Greek ; is the question mark).
4. **Missing or added text:** a clause or sentence present in one and not the other. Count sentences per paragraph.
5. **Numbers and wrong terms:** a figure changed; a fixed term varied; a place or office rendered so as to change the story.

## Report: `data/briefs/MAXIMUS-DIVERSA-CAPITA-BLIND-READ-<R#>.md`
For each finding: **century.chapter and column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only"); **the Latin**, if it bears on the point;
**the English as it stands**, exact and unique in the chunk; **the proposed English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable);
**already in the cruces?** (checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and rejected, with reasons. A report of findings alone
cannot be told apart from one whose writer never read. **If you open a page image and it does not display, say so; never report a plate reading you did not see.** Open plates
sparingly (only to settle a finding): the session's image budget is shared.

Read every chapter. Do not stop early. Write the report file progressively (header first, then each finding as you confirm it).

## Cases to judge for yourself (each either way: keep / change)
- **R1:** I.4–I.13 (col. 1181, supplied openings: does the English construe and say nothing the Latin contradicts?); I.77; I.89 (the editor's conjecture kept out of the running text).
- **R2:** II.18 οὐ λήψεται; II.55 [Regii duo ὀδύνης] (the English omits «pain»: right?); III.12–14 «limit».
- **R3:** III.55 «is absent»; III.88 (no word lost); IV.22, IV.26 (brackets removed); IV.29 αἴσθησιν [male edita, ἔφεσιν].
- **R4:** IV.36 (the restored line); IV.39 «suffering nature»; IV.96 «vice»; IV.98 οὐ δύναται; V.4.
- **R5:** V.51 «motion» (editor conjectures κένωσιν); V.65–67 οὐδεμία ἐμφέρεια; V.95 ἀμετάθετος, V.99 ἀπροσδεής.
Everywhere else: **every negative** against the English.
