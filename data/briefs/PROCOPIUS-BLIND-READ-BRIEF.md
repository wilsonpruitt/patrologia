# Procopius of Gaza, *Rhetorica* (PG 87.3, cols 2793–2841): blind read brief (2026-11-05)

Adapted from `MOSCHUS-BLIND-READ-BRIEF.md`. You are one of two blind readers (R1–R2). Your launch message names your
chunks. Work key `procopius-gazaeus-rhetorica`. Greek: `src/greek/<key>/NNNN.md` · Migne's facing Latin (Villoison's version
for the Panegyric, Combefis's for the two Hagia Sophia pieces; archive.org OCR, a witness only): `src/pg-latin/<key>/NNNN.md` ·
English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own reading of Migne's plates (Kraken OCR, a rule pass, then every flagged
reading looked up on the page image). Opus translators worked from it against the Latin and flagged every reading they
doubted; the opening two sections are the coordinator's style anchor. Villoison's foot-of-page notes are set into the Greek
as `[n: …]`. The English passes every mechanical check. **Your job is the class the checks cannot see:** a meaning reversed,
a clause lost, a who-did-what flipped, a comparison turned the wrong way.

What the text is: chunks 0001–0003 = the *Panegyric on the Emperor Anastasius*, thirty numbered sections of classicizing
Attic epideictic (long balanced periods, μέν/δέ antithesis, rhetorical questions, comparison with Cyrus, Agesilaus,
Alexander, Philip, Eumolpus, Aristides, Pisistratus; the emperor is *thou* throughout). Chunk 0004 = *On Hagia Sophia*, in
fact Procopius of Caesarea, *Buildings* I.1 (historian's Ionic-Attic prose: ξυν-, ἐς are not errors), an architectural
description where WHICH part rests on WHICH (arches on piers, dome on arches) is the sense. Chunk 0005 = the *Monody on
Hagia Sophia*, a lament built of rhetorical questions and Scripture echoes. Where an error hides: a negative inside a long
period; a comparison (X surpasses Y) inverted; a participle hung on the wrong subject; a question made a statement; in
0004 a structural relation (above/below, east/west, inner/outer) reversed.

## The Latin is NOT the text
Villoison and Combefis translate carefully but smooth hard places; Villoison's Latin sometimes follows his own conjecture
(in his notes) rather than the printed Greek. **A Greek/Latin disagreement is not a finding on its own**: the English
follows the Greek as printed, with the Latin's reading in a T note where it differs. Report it only where the English
departs from the Greek.

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the Greek on purpose; the English follows the sense. No `[sic:]` marks are set in this
  work. A Greek word that does not parse may be Migne's misprint: say so and propose the sense only if the sentence demands it.
- `[n: …]` in the Greek is Migne's variant (`[n: al. ins. γάρ.]`). Not a finding. `[b: X]` band letters, `[NNNN]`
  column anchors and ⟦p⟧/⟦s⟧ markers: not findings. ⟨…⟩ in the English = words supplied where the plate lost them; report
  one only if it reverses or distorts the sense. `[?]` = a doubtful reading the translator flagged.
- To check the plate: the chunk's pages are in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/procopius-rhetorica/pages/p-NNNN.png` (3971 × 6300, 600 dpi). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/pr-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section and **"Late-antique panegyric and ekphrasis"** (R1–R7), Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms (`translate/procopius-rhetorica/GLOSSARY.md` is the register; do not open it before your findings): βασιλεύς =
  emperor for Anastasius/Justinian and king for the ancients; ἀρετή virtue; εὐεργέτης benefactor; ἀμοιβή requital;
  φιλανθρωπία humanity; τύχη fortune; τὸ Κρεῖττον the Higher Power; Zeus/Heracles/Ares kept Greek against the Latin's
  Jupiter/Hercules/Mars; θόλος dome, ἀψίς arch, πεσσός pier, λῶροι *loroi*, μηχανικός master-builder.
- Thou = singular addressee (the emperor, the sun, the church), you = plural, even inside one speech.
- Section numbers 1–30 follow the Greek letter-numerals as reconciled to Villoison's Roman numerals. Not findings.
- Greek/Latin disagreements where the English follows the Greek and a note says so (Σολῶν / Selorum, Ῥώμῃ / fortitudine).
- Migne's own attribution of the three pieces to Procopius of Gaza: site about-text, not a finding.

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

## Report: `data/briefs/PROCOPIUS-BLIND-READ-<R#>.md`
For each finding: **chunk, column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only");
**the Latin**, if it bears on the point; **the English as it stands**, exact and unique in the chunk; **the proposed
English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?**
(checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and
rejected, with reasons. A report of findings alone cannot be told apart from one whose writer never read.

Read every sentence of your range. Do not stop early. Write the report file progressively (header first, then each
finding as you confirm it) so a stalled read still leaves its work on disk.
