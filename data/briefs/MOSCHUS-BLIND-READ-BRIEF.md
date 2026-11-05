# John Moschus, *Pratum spiritale* (PG 87.3, cols 2852–3112): blind read brief (2026-11-04)

Adapted from `DOROTHEUS-DOCTRINAE-BLIND-READ-BRIEF.md`. You are one of six blind readers (R1–R6). Your launch message names your
chunks. Work key `moschus-pratum-spirituale`. Greek: `src/greek/<key>/NNNN.md` · Migne's facing Latin (Lipomanus's version,
archive.org OCR, a witness only): `src/pg-latin/<key>/NNNN.md` · English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own reading of Migne's plates (Kraken OCR, a rule pass, then every flagged
reading looked up on the page image). Opus translators worked from it against the Latin and flagged every reading they
doubted. Migne's foot-of-page variant notes are set into the Greek as `[n: …]`. The English passes every mechanical check.
**Your job is the class the checks cannot see:** a meaning reversed, a clause lost, a who-did-what flipped.

What the text is: ~219 short anecdotes of monks in Palestine, Sinai, Egypt, told in plain late Greek, mostly as "abba X told
us that…". Who is speaking, who is told, who does what to whom (an abba and his disciple, a robber and a dead girl, a
shipmaster and the sailors), numbers, places and a great many embedded direct speeches are where an error hides. A
nested "he said that he said" is the commonest trap.

## The Latin is NOT the text
Lipomanus translated from other manuscripts and abridges, adds and rearranges. **A Greek/Latin disagreement is not a
finding on its own**: the English follows the Greek. Report it only where the English departs from the Greek. Names
differ between the two (Γεώργιος / Gregorius, Παῦλος / Pardus) and the English keeps the Greek: not a finding. Chapters
121, 122 and 132 are in Latin only and are not translated (a note stands at each): not a finding.

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the Greek on purpose; the English follows the sense. No `[sic:]` marks are set in this
  work. A Greek word that does not parse may be Migne's misprint: say so and propose the sense only if the sentence demands it.
- `[n: …]` in the Greek is Migne's variant (`[n: al. ins. γάρ.]`). Not a finding. `[b: X]` band letters, `[NNNN]`
  column anchors and ⟦p⟧/⟦s⟧ markers: not findings. ⟨…⟩ in the English = words supplied where the plate lost them; report
  one only if it reverses or distorts the sense. `[?]` = a doubtful reading the translator flagged.
- To check the plate: the chunk's pages are in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/moschus-pratum/pages/p-NNNN.png` (3971 × 6300, 600 dpi). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/mp-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms: ἀββᾶς abba, γέρων the elder, ἀκηδία acedia, ποίησον ἀγάπην "Do me a kindness", ναύκληρος shipmaster, προσκομιδή
  oblation, εὐλογίαι blessings, διακονητής server, κῦρι "sir" / κῦρι ἀββᾶ "lord abba" or "my lord abba" (a known open choice).
- Thou = singular addressee, you = plural, even inside one speech.
- Chapter numbers: Migne's CAPUT numerals reconciled to the English CHAPTER headings; where a head is unreadable the number
  is counted. Not findings.
- Greek/Latin number clashes (years, days, sums) where the English follows the Greek and a note says so.

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

## Report: `data/briefs/MOSCHUS-BLIND-READ-<R#>.md`
For each finding: **chunk, column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only");
**the Latin**, if it bears on the point; **the English as it stands**, exact and unique in the chunk; **the proposed
English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?**
(checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and
rejected, with reasons. A report of findings alone cannot be told apart from one whose writer never read.

Read every sentence of your range. Do not stop early. Write the report file progressively (header first, then each
finding as you confirm it) so a stalled read still leaves its work on disk.
