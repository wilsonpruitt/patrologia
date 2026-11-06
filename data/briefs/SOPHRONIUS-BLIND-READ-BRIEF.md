# Sophronius of Jerusalem, *Epistola synodica* + *Orationes* (PG 87.3, cols 3147–3364): blind read brief (2026-11-05)

Adapted from `MOSCHUS-BLIND-READ-BRIEF.md`. You are one of six blind readers (R1–R6). Your launch message names your
chunks. Work key `sophronius-hierosolymitanus-orationes`. Source: `src/greek/<key>/NNNN.md` (Greek, EXCEPT chunks 0007,
0014, 0016 whose front matter says `language: "la"`: Or. I, III, VI survive in Migne only in LATIN, and that Latin IS the
text for them) · Migne's facing Latin version for the Greek chunks (archive.org OCR, a witness only): `src/pg-latin/<key>/NNNN.md`
· English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek (and the Latin of 0007/0014/0016) is our own reading of Migne's plates (Kraken OCR,
then every flagged reading looked up on the page image). Opus translators worked from it and flagged every reading they
doubted. Migne's foot-of-page notes are set in as `[n: …]` (variants, Scripture locators) and `[nt: …]` (editors' prose notes).
The English passes every mechanical check. **Your job is the class the checks cannot see:** a meaning reversed, a clause
lost, a who-did-what flipped, a Christological term turned.

What the text is: the Synodical Letter of 634 (a long dogmatic confession: Trinity, two natures, two energies, the councils,
anathemas of heretics) and festal homilies (Annunciation, Nativity, Hypapante, Baptism/Epiphany, the Cross, John the Baptist,
Peter and Paul). The traps here are DOCTRINAL polarity: ἀσυγχύτως / ἀδιαιρέτως / ἀτρέπτως / ἀχωρίστως and the like (one privative
lost reverses a council); "one … two" (μία / δύο: nature, hypostasis, energy, will); κατά / παρά; who acts in a phrase about the
Word and the flesh (the Word assumes, the flesh is assumed); anathemas aimed at the right heretic; and long periodic sentences
whose negatives sit far from their verbs.

## The Latin is NOT the text
For the Greek chunks the facing Latin is an older version made from other manuscripts. **A Greek/Latin disagreement is not a
finding on its own**: the English follows the Greek. Report it only where the English departs from the Greek. For 0007, 0014,
0016 the Latin in `src/greek/` is the source: read the English against it with the same care (Latin negatives: non, ne, nec,
neque, nihil, nullus, nemo, nunquam, haud, sine, nisi, quin, quominus; in-/im- privatives).

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the text on purpose; the English follows the sense. Only four `[sic:]` marks are set (all in the
  Latin chunks). A Greek word that does not parse may be Migne's misprint: say so and propose the sense only if the sentence demands it.
- `[n: …]` in the Greek is Migne's variant (`[n: al. ins. γάρ.]`). Not a finding. `[b: X]` band letters, `[NNNN]`
  column anchors and ⟦p⟧/⟦s⟧ markers: not findings. ⟨…⟩ in the English = words supplied where the plate lost them; report
  one only if it reverses or distorts the sense. `[?]` = a doubtful reading the translator flagged.
- To check the plate: the chunk's pages are in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/sophronius-orationes/pages/p-NNNN.png` (4019 × 6310, 600 dpi). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/so-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms fixed in the glossary: δεσποτεία dominion, κυριότης lordship, συζυγία pairing, ταπείνωσις humility (the act: humbling),
  ταπεινότης lowliness, Θεοτόκος Theotokos / Mother of God per note, ἐνέργεια energy (operation where the translator notes it).
- Thou = singular addressee, you = plural, even inside one speech.
- Section numbers: Migne's numerals reconciled to the English; two Greek marks in Or. VII (11, 18) are missing and supplied
  by sequence. Not findings.
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

## Report: `data/briefs/SOPHRONIUS-BLIND-READ-<R#>.md`
For each finding: **chunk, column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only");
**the Latin**, if it bears on the point; **the English as it stands**, exact and unique in the chunk; **the proposed
English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?**
(checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and
rejected, with reasons. A report of findings alone cannot be told apart from one whose writer never read.

Read every sentence of your range. Do not stop early. Write the report file progressively (header first, then each
finding as you confirm it) so a stalled read still leaves its work on disk.
