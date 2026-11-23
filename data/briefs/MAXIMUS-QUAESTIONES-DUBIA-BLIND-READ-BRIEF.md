# Maximus the Confessor, *Quaestiones et dubia* (PG 90, cols 785–856): blind read brief (2026-11-23)

Adapted from `MAXIMUS-DIVERSA-CAPITA-BLIND-READ-BRIEF.md`. You are one of two blind readers: **R1 = chunks 0001–0003 (Q.1–50), R2 = 0004–0006 (Q.50–79)**.
Work key `maximus-confessor-quaestiones-et-dubia`. Greek: `src/greek/<key>/NNNN.md` · the facing Latin (archive.org OCR, a witness only): `src/pg-latin/<key>/NNNN.md` ·
English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

⛔ **If you open a page image and it does not display, say so and do not report a plate reading; never write a reading you did not see.**

**How the English was made.** The Greek is our own OCR of Migne's plates (Kraken, a rule pass, two lost lines restored from the plate, 288 doubtful readings looked up on the plate
image). Three Opus translators, a consistency sweep, then a fixer who brought the English back to the plate and to Migne's editor's notes. The English passes every mechanical check.
**Your job is the class the checks cannot see:** a meaning reversed, a clause lost, a who-did-what flipped, a question made a statement.

What the text is: seventy-nine questions and answers: the virtues of soul and body, hard sayings of the Old and New Testament read literally and spiritually (a name or an image
«signifies» something: a swap reverses it), the Fathers (Gregory of Nyssa on the restoration, Gregory of Nazianzus, Dionysius), the monastic habit, the liturgy, the passions.
Answers are short: **a single dropped or added negative reverses one.** Traps: the correspondences; who asks and who answers inside a quoted saying; the Christological
contrasts (Q.~66: as God / as man, united / not united); rhetorical questions; the faculties (rational / incensive / desiring).

## The Latin is NOT the text
The facing Latin is learned and paraphrastic: it expands, supplies verbs, and sometimes reads a different word.
**A Greek/Latin disagreement is not a finding on its own**: the English follows the Greek. Report it only where the English
departs from the Greek.

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the text on purpose; the English follows the sense. No `[sic:]` marks are set; 23 of Migne's misprints are listed on the cruces page. Where the English reads a conjecture against Migne's text, its note says "Migne prints X (confirmed on the plate)": not a finding unless the conjecture itself reverses the sense. A Greek word that does not parse may be Migne's misprint: say so and propose the sense only if the sentence demands it.
- `[n: …]` in the Greek is Migne's variant (`[n: al. ins. γάρ.]`). Not a finding. `[b: X]` band letters, `[NNNN]`
  column anchors and ⟦p⟧/⟦s⟧ markers: not findings. ⟨…⟩ in the English = words supplied where the plate lost them; report
  one only if it reverses or distorts the sense. `[?]` = a doubtful reading the translator flagged.
- To check the plate: the chunk's pages are in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/maximus-quaestiones-dubia/pages/p-NNNN.png` (pages 396–431; 600 dpi; the Greek column is LEFT on even pdf pages, RIGHT on odd). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/qd-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms: σωφροσύνη temperance (chastity where sexual, T-noted, Q.30); ἐπιβολή approach; συναρπαγή being carried away; προσβολή assault; ἐνθύμησις/ἐνθύμημα/ἐνθύμιον pondering; διάγνωσις scrutiny;
  ἡγεμονικόν the ruling part; ἄσκησις ascesis; ἀκτημοσύνη poverty; μετάνοια repentance, μεταμέλεια regret; αἰώνιος everlasting; ἀπάθεια passionlessness; ἐγκράτεια self-control; ἔννοια notion, νόημα concept;
  τὸ θυμικόν the incensive power, θυμός anger; σχῆμα garb (the habit, Q.67); ἀνάληψις taking-up; thou for a Greek singular.
- **Migne's square brackets** are his apparatus set into the Greek, with Latin sigla («[R. X]», «[Reg. X]», «[Cord. X]», «[vulg. X]», «[Ἴσ. X]» = the editor's conjecture «perhaps X»): the English follows the
  printed word, the bracket is in a T note (one exception, p0400.29 [Ἴσ. πρός], supplied as «[against]» because the accusative is otherwise ungoverned). Not findings unless the English follows a bracket elsewhere or a note misstates it.
- Known and noted: **Q.68, 69, 70** Migne prints rows of points where a question or an answer is wanting (English «[…]»); **Q.79 breaks off** (*The rest is wanting.*); Q.16 ends with a headless sentence on Herod
  (the editor: the question is mutilated in the manuscript); **Q.58** παροδικόν/μονίμῳ are the editor's corrections (his note (l)), English «the abiding has the greater part»; **Q.~66 p0423.14 οὐχ ἤνωτο: the editor ADDED
  the negative** (his note (p), «Necessario addidi negat.»), the English keeps it with a T note; p0403.11 Migne prints οἶμαι for αἷμα («blood»); p0426.18 παλάμην for καλάμην; p0422.20 English follows the printed ἀνώρυξαν «dug up»;
  p0425.07 the question quotes 1 Cor 15:29 without its οὐκ (Migne and the Latin agree; noted).
- Question numbers follow Migne's; 1–79 verified.

## What to hunt, in order of yield
1. **Polarity.** οὐ / οὐκ / οὐχ / μή / οὐδέ / μηδέ / οὐδείς / μηδείς / οὔτε / μήτε / χωρίς / ἄνευ / εἰ μή / πλήν dropped or
   added; a negative moved to the wrong clause; οὐ μόνον… ἀλλὰ καί flattened; a privative (ἀ-) word rendered positively.
   **Check every negative in the Greek of your range against the English.**
2. **Who does what:** speaker and addressee in every nested speech; which person a pronoun or a participle belongs to;
   active vs passive; who gives, who takes, who is cured, who dies.
3. **Mis-parsed grammar:** participles and genitive absolutes attached to the wrong subject; ὡς / ἵνα / ὥστε / ὅτι / εἰ
   clauses inverted; a question rendered as a statement or the reverse (Greek ; is the question mark).
4. **Missing or added text:** a clause or sentence present in one and not the other. Count sentences per paragraph.
5. **Numbers and wrong terms:** a figure changed; a fixed term varied; a place or office rendered so as to change the story.

## Report: `data/briefs/MAXIMUS-QUAESTIONES-DUBIA-BLIND-READ-<R#>.md`
For each finding: **question and column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only"); **the Latin**, if it bears on the point;
**the English as it stands**, exact and unique in the chunk; **the proposed English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable);
**already in the cruces?** (checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and rejected, with reasons. A report of findings alone
cannot be told apart from one whose writer never read. **If you open a page image and it does not display, say so; never report a plate reading you did not see.** Open plates
sparingly (only to settle a finding): the session's image budget is shared.

Read every chapter. Do not stop early. Write the report file progressively (header first, then each finding as you confirm it).

## Cases to judge for yourself (each either way: keep / change)
- **R1:** Q.1 (the lists of virtues); Q.4 τῷ Ἠλιοῦ; Q.~17 «blood» (Migne οἶμαι); Q.19 (μωρός / ῥακά: who is liable to what); p0400.29 «[against]»; Q.~20 Gregory of Nyssa's three restorations; Q.32 God's «regret»; Q.~33 p0409.19 γενεᾶς; Q.34 οὐ δύναται … οὐδέ.
- **R2:** Q.54 οὐ μὴ τελέσωσιν; Q.58 (the editor's emendation; who «has the more»); Q.60 οὐδ᾿ ὅλως; **Q.~66 οὐχ ἤνωτο (the editor's negative: does the English construe the contrast as God / as man without reversing it?)**;
  Q.65 «dug up»; Q.67 (the garments: left/right, the δεξιάν conjecture); Q.68–70 gaps; Q.72 1 Cor 3:12; p0428.15 παραιτήσασθαι («beg for» vs «beg off»: the sense flips); p0429.35 the double negative; Q.79 the faculties.
Everywhere else: **every negative** against the English.
