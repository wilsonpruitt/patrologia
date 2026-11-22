# Maximus the Confessor, *Ad Theopemptum scholasticum* (PG 90, cols 1393–1400): blind read brief (2026-11-21)

Adapted from `MAXIMUS-PS59-BLIND-READ-BRIEF.md`. You are the one blind reader (R1). Work key `maximus-confessor-ad-theopemptum` (1 chunk, 0001,
all Greek). Greek: `src/greek/<key>/0001.md` · the facing Latin (archive.org OCR, a witness only): `src/pg-latin/<key>/0001.md` · English:
`src/english/<key>/0001.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own OCR of Migne's plates (Kraken, a rule pass, then every reading the translator doubted looked up
on the plate image). One Opus translator worked from it against the Latin. The English passes every mechanical check. **Your job is the class the
checks cannot see:** a meaning reversed, a clause lost, a who-did-what flipped, a question made a statement.

What the text is: a short letter of Maximus to Theopemptus the scholasticus answering three questions: the unjust judge (Luke 18:1–8), «if anyone strikes
thee on the right cheek» (Matt 5:39 / Luke 6:29), «Touch me not, for I have not yet ascended to the Father» (John 20:17). A dense opening on the Word,
practice, knowledge and deification, then the three answers, each contemplative. Traps: **the correspondences** (the judge = our reasoning, the widow = …,
the city = sense; the right cheek = right action, the left = …: a swap reverses the teaching); the long participial chains (who is the subject: God, the
Word, the soul, reasoning, the evil one); the comparison of Son and Father in the first answer (a Christological polarity: who is said to be greater or
less, and of what); motion/rest, desire/inclination; the rhetorical questions.

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
  `raw/kraken/maximus-theopemptus/pages/p-NNNN.png` (pages 710–713; 600 dpi; in this stretch the Greek column is LEFT on even pdf pages, RIGHT on odd). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/th-R1.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Thou/thee for the singular addressee; *you/your* where Maximus uses a plural of respect (ὑμέτερον, ἐκελεύσατε), T-noted.
- Terms: ἀδικία unrighteousness; δέσποτα master; ἔφεσις desire; γνώμη inclination; ῥοπή leaning; κίνησις motion, κίνημα movement; οἰκείωσις kinship,
  ἀγχιστεία near-kinship; ἐκδίκησις vindication; περίληψις compass; νοερός noetic, νοητός intelligible.
- **Known and noted, not findings unless the note misstates the plate:** p0710.39 αὐτὸν printed, αὑτὸν read (undecidable on this 1-bit scan; Latin *te*),
  in the passage Migne's editor marks «Locus obscurus, ac forte mendosus» (note 7); p0712.20 the Latin's *aut per Filium* has no Greek (plate checked; note 21);
  p0713.04 ἃ μὴ printed for ἢ μὴ (noted); p0713.50 «τῆς δωρεᾶς τῆς» (second τῆς left out of the English; noted). The apparatus prints «Joan. xx, 27» for John 20:17
  (Migne's misprint, plate-checked): not a finding.
- **p0712.9 οὐ μὴ ποιήσῃ** is kept a QUESTION (Migne prints ;), the Latin a statement: judge it below.

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

## Report: `data/briefs/MAXIMUS-THEOPEMPTUS-BLIND-READ-R1.md`
For each finding: **column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only");
**the Latin**, if it bears on the point; **the English as it stands**, exact and unique in the chunk; **the proposed
English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?**
(checked AFTER).

Then say whether the chunk is clean, list every plate page you opened, and list the candidates you considered and
rejected, with reasons. A report of findings alone cannot be told apart from one whose writer never read.

Read every sentence. Do not stop early. Write the report file progressively (header first, then each finding as you
confirm it) so a stalled read still leaves its work on disk.

## Cases to judge for yourself (report each as a finding either way: keep / change, with the plate read)
- **p0712.9 (col. 1397):** οὐ μὴ ποιήσῃ τὴν ἐκδίκησιν: a question (Migne's ;, the Gospel's «shall not God…?») or a statement (the Latin)? Is the English's polarity right?
- **p0712.18–20 (col. 1397):** οὐ γὰρ μείων μὲν Υἱοῦ· μείζων δὲ Πατρός, ἡ ἐκδίκησις· ἢ δι᾿ ἄλλου, καὶ ἄλλη τὸ σύνολον, πλὴν τοῦ Υἱοῦ. Does the English carry the
  negative over the right clauses, and say who is greater/less of what?
- **p0711.24–25 (col. 1396):** μὴ προορωμένην / οὐκ εἰργομένην: the second rendered «not keeping itself from the torment» (Latin *non avertat*). Right?
- **p0713.18–20 (col. 1400):** εἰ μή τι ἄλλο … τὸ μηδαμῶς ἀντιτείνειν: who is shamed by what?
- **p0710.38–41 (col. 1393):** the comparison the editor calls obscure: is the English a defensible construal, and does note 7 say honestly that it is uncertain?
Everywhere else: **every negative** against the English.
