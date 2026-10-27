# Dorotheus of Gaza, *Doctrinae* (PG 88, cols 1612–1836): blind read brief (2026-10-27)

Adapted from `SYMEON-BLIND-READ-BRIEF.md`. You are one of six blind readers (R1–R6). Your launch message names your
chunks. Work key `dorotheus-gazaeus-doctrinae`. Greek: `src/greek/<key>/NNNN.md` · Migne's parallel Latin (archive.org
OCR, a witness): `src/pg-latin/<key>/NNNN.md` · English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own transcription of Migne's plates, read against the page line by
line. Opus translators worked from it, flagged every reading they doubted, and each flag was looked up on the page
image. Migne's foot notes were read off every page. The English passes every mechanical check.
**Your job is the class the checks cannot see:** a meaning reversed, a clause lost, a who-did-what flipped.

What the text is: a sixth-century abbot near Gaza teaching his monks, plainly and with stories (Dositheus, the
elders, his own novitiate under Barsanuphius and John). Negatives carry the teaching (*not* to judge, *not* to
justify oneself, *without* questioning), and so does who blames whom, who obeys whom, and who is speaking in an
anecdote.

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the Greek on purpose. The English follows the sense and marks the printed form with
  `[sic: *…*]` after the word. A `[sic:]` is not a finding unless the English it follows is wrong.
- `[n: …]` in the Greek is Migne's own variant note (e.g. `[n: Leg. ὀκτώ.]`); in the English it is his Scripture
  reference. Neither is a finding.
- ⟨…⟩ in the English = words supplied where the plate has lost them. Report one only if the supplement reverses or
  distorts the sense.
- To check the plate: the chunk's pages are listed in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/dorotheus-doctrinae/pages/p-NNNN.png` (4032 × 6214, 600 dpi). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/dr-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms: ταπεινοφροσύνη humility, ταπείνωσις lowliness (humility where it stands alone as the virtue), λογισμός
  thought, μνησικακία rancour, θρασύτης insolence, παρρησία boldness, ἀκηδία acedia, προσπάθεια attachment, κόπτειν
  τὸ θέλημα cut off the will, μετάνοια (with βάλλω) prostration, διακονία service, ἀββᾶς abba, τέκνον child.
- Thou = singular addressee, you = plural, even inside one speech. Instruction heads "Instruction II. *On humility.*";
  section numbers arabic.
- `[b: X]` band letters, column anchors, ⟦p⟧/⟦s⟧ markers.
- Scripture as Dorotheus quotes it, not a conventional version.

## What to hunt, in order of yield
1. **Polarity.** οὐ / οὐκ / οὐχ / μή / οὐδέ / μηδέ / οὐδείς / μηδείς / οὔτε / μήτε / χωρίς / ἄνευ / εἰ μή / πλήν
   dropped or added; a negative moved to the wrong clause; οὐ μόνον… ἀλλὰ καί flattened; a privative (ἀ-) word
   rendered as its positive. **Check every negative in the Greek of your range against the English.**
2. **Who does what:** speaker and addressee in the anecdotes (the elder / the brother / Dorotheus / the abbot);
   blame and obedience directions (blaming oneself vs the brother; obeying vs being obeyed); active vs passive.
3. **Mis-parsed grammar:** participles and genitive absolutes attached to the wrong subject; ὡς / ἵνα / ὥστε / ὅτι /
   εἰ clauses inverted; a question rendered as a statement or the reverse (Greek ; is the question mark).
4. **Missing or added text:** a clause or sentence present in one and not the other. Count sentences per paragraph.
5. **Wrong term:** a fixed term varied, or a key term rendered so as to change the claim.

## Report: `data/briefs/DOROTHEUS-DOCTRINAE-BLIND-READ-<R#>.md`
For each finding: **chunk, column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file
only"); **the Latin**, if it bears on the point; **the English as it stands**, exact and unique in the chunk; **the
proposed English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in
the cruces?** (checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and
rejected, with reasons. A report of findings alone cannot be told apart from one whose writer never read.

Read every sentence of your range. Do not stop early. Write the report file progressively (header first, then each
finding as you confirm it) so a stalled read still leaves its work on disk.
