# Maximus the Confessor, *Capita alia* (PG 90, cols 1401–1461): blind read brief (2026-11-21)

Adapted from `MAXIMUS-THEOPEMPTUS-BLIND-READ-BRIEF.md`. You are one of three blind readers: **R1 = chunks 0001–0002 (chs 1–109), R2 = 0003–0004 (chs 110–210),
R3 = 0005 (chs 210–243)**. Work key `maximus-confessor-capita-alia`. Greek: `src/greek/<key>/NNNN.md` · the facing Latin (archive.org OCR, a witness only):
`src/pg-latin/<key>/NNNN.md` · English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own OCR of Migne's plates (Kraken, a rule pass, then every reading the translators doubted looked up on the plate image:
176 rows). Three Opus translators, a consistency sweep, then a fixer who brought the English back to the printed Greek wherever a translator had followed a conjecture.
The English passes every mechanical check. **Your job is the class the checks cannot see:** a meaning reversed, a clause lost, a who-did-what flipped, a question made a statement.

What the text is: 243 short ascetic and contemplative chapters printed from a Vatican manuscript, opened by four dedicatory verses and with three verse couplets among them.
Each chapter is one or a few sentences: so **a single dropped or added negative reverses a whole chapter**. Traps: the paired terms (voluntary/involuntary temptations,
practice/contemplation, the practical/the man of knowledge, pleasure/pain, passion/passionlessness) — a swap reverses the teaching; the comparisons («as X …, so Y …»);
the conditionals (εἰ μή «unless», ἐὰν μή); rhetorical questions; a scriptural image read of the soul (who stands for what).

## The Latin is NOT the text
The facing Latin is learned and paraphrastic: it expands, supplies verbs, and sometimes reads a different word.
**A Greek/Latin disagreement is not a finding on its own**: the English follows the Greek. Report it only where the English
departs from the Greek.

## The Greek file is close to the plate, and differs from it in known ways
- Migne's misprints are KEPT in the text on purpose; the English follows the sense. No `[sic:]` marks are set; 51 of Migne's misprints are listed on the cruces page. Where the English reads a conjecture against Migne's text, its note says "Migne prints X (confirmed on the plate)": not a finding unless the conjecture itself reverses the sense. A Greek word that does not parse may be Migne's misprint: say so and propose the sense only if the sentence demands it.
- `[n: …]` in the Greek is Migne's variant (`[n: al. ins. γάρ.]`). Not a finding. `[b: X]` band letters, `[NNNN]`
  column anchors and ⟦p⟧/⟦s⟧ markers: not findings. ⟨…⟩ in the English = words supplied where the plate lost them; report
  one only if it reverses or distorts the sense. `[?]` = a doubtful reading the translator flagged.
- To check the plate: the chunk's pages are in `src/greek/<key>/manifest.json` (`pdfPages`). Page image:
  `raw/kraken/maximus-capita-alia/pages/p-NNNN.png` (pages 714–744; 600 dpi; the Greek column is LEFT on even pdf pages, RIGHT on odd). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('/tmp/ca-<R#>.png')"` and Read it.
  **One crop at a time; write your finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your
  findings are written.** You may check a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Register (PG / Greek)"** section, Patterns 7/7a, 8, 12, 16, 17.

## Fixed by ruling or convention. Do NOT report
- Terms: πόθος longing; ἔρως yearning; κίνησις motion, κίνημα movement; ἐνέργεια activity, ἐνέργημα effect; ἔννοια notion, νόημα concept; ἐγκράτεια self-control;
  ἀπάθεια passionlessness; λογισμός thought («reasoning» for the faculty, T-noted); ὁ γνωστικός the man of knowledge; ψυχικός psychic; ἡδυπάθεια voluptuousness;
  θυμός anger / the incensive power; thou for every Greek singular.
- **Migne's square brackets:** some mark a word the editor SUPPLIES (English in [ ], e.g. ch. 125 «[not] fittingly», his note «Addidi negationem»; ch. 238 «[not] having received»;
  ch. 102 «[essence]»; ch. 204 «[full of]»; ch. 239 «[impulses]»), one marks a word he DELETES (ch. 228 «[οὐ] σαλεύονται»: his note (l) «to be deleted»; English «are shaken»
  follows the note), and some give a variant (ch. 175 [καλῶν], ch. 213 [ἔξω], ch. 177 [ὄφεως]: English follows the main reading). Not findings unless the English misstates the bracket.
- Known and noted: ch. 122 `[?]` (Migne's own «....»); ch. 111 the plate prints an οὔτε with no second member; ch. 159 the print does not construe (noted); ch. 4 οὐδ᾿ ἑτέρα read «neither of them»;
  51 misprints listed on the cruces page (those that change the construal are T-noted).
- Chapter numbers (arabic) follow Migne's numerals; the sequence 1–243 is verified.

## What to hunt, in order of yield## What to hunt, in order of yield
1. **Polarity.** οὐ / οὐκ / οὐχ / μή / οὐδέ / μηδέ / οὐδείς / μηδείς / οὔτε / μήτε / χωρίς / ἄνευ / εἰ μή / πλήν dropped or
   added; a negative moved to the wrong clause; οὐ μόνον… ἀλλὰ καί flattened; a privative (ἀ-) word rendered positively.
   **Check every negative in the Greek of your range against the English.**
2. **Who does what:** speaker and addressee in every nested speech; which person a pronoun or a participle belongs to;
   active vs passive; who gives, who takes, who is cured, who dies.
3. **Mis-parsed grammar:** participles and genitive absolutes attached to the wrong subject; ὡς / ἵνα / ὥστε / ὅτι / εἰ
   clauses inverted; a question rendered as a statement or the reverse (Greek ; is the question mark).
4. **Missing or added text:** a clause or sentence present in one and not the other. Count sentences per paragraph.
5. **Numbers and wrong terms:** a figure changed; a fixed term varied; a place or office rendered so as to change the story.

## Report: `data/briefs/MAXIMUS-CAPITA-ALIA-BLIND-READ-<R#>.md`
For each finding: **chapter and column (and band)**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only"); **the Latin**, if it bears on the point;
**the English as it stands**, exact and unique in the chunk; **the proposed English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable);
**already in the cruces?** (checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you considered and rejected, with reasons. A report of findings
alone cannot be told apart from one whose writer never read.

Read every chapter. Do not stop early. Write the report file progressively (header first, then each finding as you confirm it) so a stalled read still leaves its work on disk.

## Cases to judge for yourself (report each either way: keep / change, with the plate read)
- **R1:** ch. 4 «neither of them» (οὐδ᾿ ἑτέρα); ch. 7 εἰ μὴ … μὴ διαλύηται (double negative kept); ch. 15 the negative chain; ch. 81 μήτε … μήτε … ὅτι μὴ … οὐδέν.
- **R2:** ch. 125 «[not] fittingly»; ch. 143 «the soul of knowledge» (γνωστικῆς: is the English the best construal?); ch. 159; ch. 165 οὔτε … οὐ δύναται (one negative rendered); ch. 175 κακῶν [καλῶν]
  (does «not a multitude of evils» say what the Greek says?); ch. 207 οἱ θεωροῦντες μηδέν.
- **R3:** ch. 223 (the Greek has no negative; the Latin has *non*: the English follows the Greek — is that right?); ch. 225 the double negatives; ch. 228 (the editor's deletion);
  ch. 238 «[not] having received».
Everywhere else: **every negative** against the English.
