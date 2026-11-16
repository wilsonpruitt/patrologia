# Maximus the Confessor, *Mystagogia* (PG 91, cols 657–717): blind read brief (2026-11-15)

Adapted from `MAXIMUS-DISPUTATIO-BLIND-READ-BRIEF.md`. You are one of three blind readers (R1–R3). Your launch message names your
chunks. Work key `maximus-confessor-mystagogia` (6 chunks, my-001–006, all Greek; no Latin-only chunk). Greek: `src/greek/<key>/NNNN.md` ·
Combefis's facing Latin (archive.org OCR, a witness only): `src/pg-latin/<key>/NNNN.md` · English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own OCR of Migne's plates (Kraken, a rule pass, then every reading the translators doubted looked up
on the plate image in two passes). Opus translators worked from it against the Latin and flagged every reading they doubted. Combefis's variant notes
are set into the Greek as `[n: …]`; his Scripture locators stand in the English as `[n:]` where a translator's note agrees. The English passes every
mechanical check. **Your job is the class the checks cannot see:** a meaning reversed, a clause lost, a who-did-what flipped, a Christological term turned.

What the text is: Maximus's *Mystagogy* (c. 628–630): a Proem to one friend, then 24 chapters reading the church building (as image of God, of the
world, of man, of the soul) and the liturgy in order (entrance, readings, Gospel, dismissal, closing of the doors, entrance of the mysteries, kiss, Creed,
Trisagion, Lord's Prayer, «One is Holy», communion), then the soul's own reading of the rite, and a close. Traps: **the correspondences** (A signifies B for
the faithful, C for the practical, D for the knowers: a swap of the pair reverses the teaching); the long participial chains (who is the subject of each
participle: the soul, the Word, God, the Church); θέσις/ἀφαίρεσις (positing/removal of God's names); κατ᾿ οὐσίαν / κατ᾿ ἐνέργειαν; ἕνωσις/διάκρισις; what
belongs to the sensible vs the intelligible; the address (thou to the friend, you to a plural, T-noted).

## The Latin is NOT the text
Combefis's Latin is learned and paraphrastic: it expands, supplies verbs, and sometimes reads a different word.
**A Greek/Latin disagreement is not a finding on its own**: the English follows the Greek. Report it only where the English
departs from the Greek.

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the text on purpose; the English follows the sense. No `[sic:]` marks are set; 26 of Migne's misprints are listed on the cruces page. Where the English reads a conjecture against Migne's text, its note says "Migne prints X (confirmed on the plate)": not a finding unless the conjecture itself reverses the sense. A Greek word that does not parse may be Migne's misprint: say so and propose the sense only if the sentence demands it.
- `[n: …]` in the Greek is Migne's variant (`[n: al. ins. γάρ.]`). Not a finding. `[b: X]` band letters, `[NNNN]`
  column anchors and ⟦p⟧/⟦s⟧ markers: not findings. ⟨…⟩ in the English = words supplied where the plate lost them; report
  one only if it reverses or distorts the sense. `[?]` = a doubtful reading the translator flagged.
- To check the plate: the chunk's pages are in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/maximus-mystagogia/pages/p-NNNN.png (pages 384–387 are duplicate leaves: never use them)` (≈3992 × 6332, 600 dpi; Greek column right on even pdf pages, left on odd). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/my-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms fixed for this work: ἐνέργεια activity (operation only where Christological, T-noted); νοερός noetic, νοητός intelligible, αἰσθητός sensible,
  λογικός rational; νοῦς mind; ἱερατεῖον sanctuary, ναός nave, ἄδυτα inner shrines; σύναξις synaxis; ἱεράρχης hierarch / ἀρχιερεύς high priest;
  πρακτικοί/γνωστικοί the practical/the knowers; θέσις/ἀφαίρεσις positing/removal; οἰκειότης intimacy, οἰκείωσις kinship; ἄληστος unforgetting;
  φρόνημα way of thinking; Τρισάγιον Trisagion (here the Sanctus).
- Thou = singular addressee, you = plural, even inside one passage.
- Scripture verbatim in italics; Migne prints no « » except in the ch. 20–21 titles.
- **One `[?]`** (my-005, col. 701, p0391.17: the plate has no verb for the Church; the Latin supplies a clause): not a finding unless the English distorts.
- **Two places where the English follows a variant on purpose** (notes say so): col. 680/681 «sold» (Migne παθοῦσαν; codex A and Fr. πραθεῖσαν) and col. 672
  the etymology of ἀγαθόν «running» (Migne θέσιν; codex A θέειν). Not findings unless the note misstates the evidence.

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

## Report: `data/briefs/MAXIMUS-MYSTAGOGIA-BLIND-READ-<R#>.md`
For each finding: **chunk, column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only");
**the Latin**, if it bears on the point; **the English as it stands**, exact and unique in the chunk; **the proposed
English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?**
(checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and
rejected, with reasons. A report of findings alone cannot be told apart from one whose writer never read.

Read every sentence of your range. Do not stop early. Write the report file progressively (header first, then each
finding as you confirm it) so a stalled read still leaves its work on disk.

## Cases to judge for yourself (report each as a finding either way: keep / change, with the plate read)
- **p0371.40** (my-002, col. 672): the plate prints ἀλλὰ τὴν **μὴ** ἀλήθειαν; the English reads μὲν (answered by τὸ δὲ ἀγαθόν; Latin *quidem*). Is the
  negative Migne's misprint, or does it construe?
- **p-0374** (my-003, col. 680): Migne's text has ἆρα τὰ θεῖα οὐ πάσχει; Combefis's variant 27 (Fr.) reads it without οὐ. Check the English against the printed Greek.
- **p-0396** (my-006, col. 713–716): συμπαθῶς μᾶλλον, ἀλλ᾿ οὐ μὴ ἐμπαθῶς; codex A reads ἀσυμπαθῶς for ἐμπαθῶς (variant 66). Check the English's polarity.
Everywhere else: **every negative** in your range against the English.
