# Maximus the Confessor, *Expositio in Psalmum LIX* (PG 90, cols 856–872): blind read brief (2026-11-21)

Adapted from `MAXIMUS-MYSTAGOGIA-BLIND-READ-BRIEF.md`. You are one of two blind readers (R1 = chunk 0001, R2 = chunk 0002). Work key
`maximus-confessor-expositio-psalmi-lix` (2 chunks, all Greek). Greek: `src/greek/<key>/NNNN.md` · the facing Latin (archive.org OCR, a witness
only): `src/pg-latin/<key>/NNNN.md` · English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own OCR of Migne's plates (Kraken, a rule pass, then every reading the translator doubted looked up
on the plate image in two passes). One Opus translator worked from it against the Latin and flagged every reading doubted. The English passes every
mechanical check. **Your job is the class the checks cannot see:** a meaning reversed, a clause lost, a who-did-what flipped, a question made a statement.

What the text is: Maximus's only work on the Psalms: an anagogical exposition of Psalm 59 LXX (60 Heb.). The title (59:1–2) read clause by clause of
Christ («the intelligible David») and of the change «unto the end» (from unbelief to faith now; the resurrection at the last); then each verse (59:3–14)
as an italic lemma followed by its exposition, moral and contemplative (practice/contemplation, virtue/knowledge, passions/demons, the calling of the
nations, the incarnation); a doxology. Traps: **the correspondences** (X signifies Y: a swap reverses the teaching); the etymologies (Soba = «seven»,
Sikima = «shoulder», Idumea = «blood-like clay»: what each name is said to mean, and of what); **the lemma's English must carry the word the
exposition then explains**, the same English word each time; the long participial chains (who is the subject: God, Christ, the soul, the demons);
γνωμικός/προαιρετικός and ἄγνοια/ἀγνωσία kept apart; the psalm's own questions («who will bring me…? or who will guide me…?», «hast not thou…?»).

## The Latin is NOT the text
The facing Latin is learned and paraphrastic: it expands, supplies verbs, and sometimes reads a different word.
**A Greek/Latin disagreement is not a finding on its own**: the English follows the Greek. Report it only where the English
departs from the Greek.

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the text on purpose; the English follows the sense. No `[sic:]` marks are set; 8 of Migne's misprints are listed on the cruces page. Where the English reads a conjecture against Migne's text, its note says "Migne prints X (confirmed on the plate)": not a finding unless the conjecture itself reverses the sense. A Greek word that does not parse may be Migne's misprint: say so and propose the sense only if the sentence demands it.
- `[n: …]` in the Greek is Migne's variant (`[n: al. ins. γάρ.]`). Not a finding. `[b: X]` band letters, `[NNNN]`
  column anchors and ⟦p⟧/⟦s⟧ markers: not findings. ⟨…⟩ in the English = words supplied where the plate lost them; report
  one only if it reverses or distorts the sense. `[?]` = a doubtful reading the translator flagged.
- To check the plate: the chunk's pages are in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/maximus-ps59/pages/p-NNNN.png` (5000 × 6925, 600 dpi; in PG 90 the Greek column is RIGHT on odd pdf pages, LEFT on even). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/ps-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms fixed for this work: ἀλλοίωσις change (τοῖς ἀλλοιωθησομένοις «for those who shall be changed»), μεταβολή transformation; στηλογραφία inscription
  on a pillar; ἀλλόφυλοι the allophyles; πόλις περιοχῆς the fortified city; ἀγνωσία lack of knowledge, ἄγνοια ignorance; νέκρωσις mortification;
  ἀπάθεια passionlessness; ἐνέργεια activity; νοερός noetic, νοητός intelligible; Sikima (not Shechem) in the text.
- The psalmist addresses God as *thou*. Lemmas are italic paragraphs with an S note giving the verse.
- Migne's inline brackets ([erat Σωβάλ], [Fr. Σωβάλ], [etiam Fr. Σωβᾶ· et deinceps], [τετράδι], F. ἁμαρτιῶν) are the edition's apparatus, given in T notes, not in the running English.
- **Known, noted, and not findings unless the note misstates the plate:** col. 861 χρίσεως printed, «judgement» (κρίσεως) followed; Migne's full stop after
  οἰκονομίαν (col. 864) with the English running on (the participles depend on «he speaks»); Migne's full stop after Ἰδουμαίας (col. 869) with the lemma a question.
- **p0438.40 καὶ οὐκ ἐξελεύσῃ … (col. 869)** is rendered as a STATEMENT (Maximus expounds it so; the Latin likewise): judge it below.

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

## Report: `data/briefs/MAXIMUS-PS59-BLIND-READ-<R#>.md`
For each finding: **chunk, column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only");
**the Latin**, if it bears on the point; **the English as it stands**, exact and unique in the chunk; **the proposed
English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?**
(checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and
rejected, with reasons. A report of findings alone cannot be told apart from one whose writer never read.

Read every sentence of your range. Do not stop early. Write the report file progressively (header first, then each
finding as you confirm it) so a stalled read still leaves its work on disk.

## Cases to judge for yourself (report each as a finding either way: keep / change, with the plate read)
- **R2, p0438.40 (col. 869):** Οὐχὶ σὺ ὁ Θεὸς ὁ ἀπωσάμενος ἡμᾶς; καὶ οὐκ ἐξελεύσῃ ὁ Θεὸς ἐν ταῖς δυνάμεσιν ἡμῶν; — the English makes the second
  clause a statement because the exposition does. Does Maximus's exposition really read it so? Is the English's polarity right?
- **R2, p0438.43:** κατὰ τὴν ῥομφαίαν ἐπιγραφομένῳ ἑαυτοῦ σωτήριον construes badly; the English follows the Latin (*gladio suo salutem ascribit*). Read the plate.
- **R2, p0436.39–40:** ἄρχει … παντὸς ἀγαθοῦ «rules over» vs the Latin *auspicatur* «begins». Which does the sentence need?
- **R1, p0433.23–25:** σα-|φῶς ἀριθμόν and τετριάδι [τετράδι]: check the English of the number/tetrad passage against the plate.
Everywhere else: **every negative** in your range against the English.
