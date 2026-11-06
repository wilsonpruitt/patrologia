# Maximus the Confessor, *Opuscula theologica et polemica* 1–27 (PG 91, cols 9–286): blind read brief (2026-11-06)

Adapted from `MAXIMUS-BLIND-READ-BRIEF.md` (the *Epistulae*). You are one of six blind readers (R1–R6). Your launch message names your
chunks. Work key `maximus-confessor-opuscula`. Greek: `src/greek/<key>/NNNN.md` · Combefis's facing Latin (archive.org
OCR, a witness only): `src/pg-latin/<key>/NNNN.md` · English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own OCR of Migne's plates (Kraken, a rule pass, then every reading the
translators doubted looked up on the plate image, in two passes; three over-inked pages, pdf 110, 111, 114, transcribed by eye). Opus translators
worked from it against the Latin and flagged every reading they doubted. Combefis's variant notes are set into the Greek
as `[n: …]`; his Scripture locators stand in the English as `[n:]` where a translator's note agrees. The English passes
every mechanical check. **Your job is the class the checks cannot see:** a meaning reversed, a clause lost, a who-did-what
flipped, a Christological or ascetic term turned.

What the text is: the twenty-seven *Opuscula* of Maximus (c. 580–662) against monenergism and monothelitism (c. 640–655):
letters to Marinus, Theodore, Nicander, the Sicilians, Peter; tomes; chains of definitions (of will, choice, inclination,
nature, hypostasis, the demarcations); chapters; florilegia of patristic testimonies (Opusc. 15, 23, 26, 27); scholia.
**Opusc. 12 (chunk 0015) is LATIN ONLY** (Anastasius's Latin; no Greek printed): there the Latin IS the text. Traps:
the will-chain definitions (θέλησις, βούλησις, βουλή, βούλευσις, ζήτησις, σκέψις, κρίσις, προαίρεσις, γνώμη: one English word
each); the syllogisms and dilemmas (εἰ γάρ … ἄρα; ἤτοι … ἤ …), where a dropped "not" or a swapped "either/or" reverses the
argument; "one … two" (nature, hypostasis, operation, will); κατά / παρὰ φύσιν; natural vs gnomic will; who acts in a
clause about the Word and the flesh; the opponents' formulas (one composite nature, one operation, one will, theandric
operation) quoted to be refuted; the addressee's number (honorific plurals: the English follows the Greek pronoun, T-noted).

## The Latin is NOT the text
Combefis's Latin (1675) is learned and paraphrastic: it expands, supplies verbs, and sometimes reads a different word.
**A Greek/Latin disagreement is not a finding on its own**: the English follows the Greek. Report it only where the English
departs from the Greek.

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the text on purpose; the English follows the sense. No `[sic:]` marks are set; 194 of Migne's misprints are listed on the cruces page. Where the English reads a conjecture against Migne's text, its note says "Migne prints X (confirmed on the plate)": not a finding unless the conjecture itself reverses the sense. A Greek word that does not parse may be Migne's misprint: say so and propose the sense only if the sentence demands it.
- `[n: …]` in the Greek is Migne's variant (`[n: al. ins. γάρ.]`). Not a finding. `[b: X]` band letters, `[NNNN]`
  column anchors and ⟦p⟧/⟦s⟧ markers: not findings. ⟨…⟩ in the English = words supplied where the plate lost them; report
  one only if it reverses or distorts the sense. `[?]` = a doubtful reading the translator flagged.
- To check the plate: the chunk's pages are in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/maximus-opuscula/pages/p-NNNN.png` (≈3992 × 6332, 600 dpi; Greek column right on even pdf pages, left on odd). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/me-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms fixed in the glossary: γνώμη inclination, διάθεσις disposition, ἕξις habit, σχέσις relation, ἐνέργεια operation,
  θέλημα will / θέλησις volition, βούλησις wish, βουλή counsel, βούλευσις deliberation, ζήτησις inquiry, προαίρεσις choice,
  θελητικός volitive, ἰδιότης property / ἰδίωμα idiom, συμφυΐα growing-together, σύννευσις convergence, οἰκείωσις
  appropriation (Christological) / kinship (affective), ἀναίρεσις destruction, ἐνούσιος enousial, ἐνυπόστατος enhypostatic,
  διαστολή demarcation, ἐπίνοια conception, ἔννοια concept, συγγένεια kindredness, ἡγούμενος abbot, θεϊκός divine.
- Thou = singular addressee, you = plural, even inside one speech.
- Piece numbers: the modern numbering (OPUSCULUM n headings), reconciled by the coordinator. The six `[?]` (0015, 0016,
  0020 ×2, 0021, 0026) are known cruces. Scholia are body text. Not findings.
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

## Report: `data/briefs/MAXIMUS-OPUSCULA-BLIND-READ-<R#>.md`
For each finding: **chunk, column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only");
**the Latin**, if it bears on the point; **the English as it stands**, exact and unique in the chunk; **the proposed
English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?**
(checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and
rejected, with reasons. A report of findings alone cannot be told apart from one whose writer never read.

Read every sentence of your range. Do not stop early. Write the report file progressively (header first, then each
finding as you confirm it) so a stalled read still leaves its work on disk.
