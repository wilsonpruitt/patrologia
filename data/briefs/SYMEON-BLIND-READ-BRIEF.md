# Symeon of Thessalonica, *On the Sacred Rites* (PG 155, cols 175–236): blind read brief (2026-10-05)

You are one of three blind readers (R1–R3). Your launch message names your chunks. Work key
`symeon-thessalonica-de-sacramentis`. Greek: `src/greek/<key>/NNNN.md` · Migne's parallel Latin:
`src/pg-latin/<key>/NNNN.md` · English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

The English was drafted by a Fable anchor (0000) and three Opus stints with **every plate page read**,
and passes every mechanical check. **Your job is the class the checks cannot see:** a meaning
reversed, a clause lost, a who-did-what flipped.

What the text is: the archbishop of Thessalonica (d. 1429) teaching his clergy, in numbered chapters
inside a dialogue (*Bishop.* / *Cleric.*), on the seven mysteries and the rite of baptism step by step.
It is doctrine and rubric at once: negatives, who acts (bishop / priest / deacon / sponsor / the one
being baptized), number of times (thrice, a third time), and direction (east/west, toward/away) carry
the meaning.

## ⚠ The Greek file is NOT the text. Read this before anything else.
`src/greek/` is Calfa OCR and is **heavily damaged**: hundreds of misread letters, garbled words, Latin
column junk inside the Greek, and **whole lines dropped** (column-final lines and full-width lines). The
English was corrected from the plate, silently. So **a difference between the English and the Greek
file is not, by itself, a finding.** Before you report any site where the English departs from our
Greek file, open the plate:
`python3 scripts/pg-plate-crop.py 155 <calfaPage> a` (top half of the Greek column) / `… b` (bottom),
`… lat-a` / `lat-b` for the Latin column. `raw/pg155-plates/index.json` maps Calfa page → columns
(Greek column 2p−10 on odd pages, 2p−11 on even). **View one crop at a time, write your finding, move
on; do not accumulate images.** A finding is about what the PLATE prints versus what the English says.

## Rules of the read
- **Do NOT open any `cruces*.md`, any `symeon-PLATE-READS-*.tsv`, or any brief other than this one before
  your findings are written.** You may check a finding against `cruces.md` AFTER you form it and say
  whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: the **"Catechetical-liturgical exposition"** section, the
  **"Register (PG / Greek)"** section and its Dialogue subsection, Patterns 7/7a, 8, 11–13, 16, 17, 18.

## Fixed by ruling or convention. Do NOT report
- *Bishop.* / *Cleric.* tags; "bishop" for running-text ἀρχιερεύς (Wilson's ruling); "high priest" where
  it means Christ. μυστήριον = mystery (not "sacrament"); τελετή = rite; μύρον = myron (distinct from
  chrism); the work title *On the Sacred Rites*.
- `[b: X]` band letters, `[ed:]` restorations of plate headings, bold Iassy page numbers (**62**–**86**),
  CHAPTER n. heads, Calfa junk omitted from the English, text restored from the plate that our Greek file
  lacks (check it at the plate if you doubt it, but do not report the omission from the file itself).
- `[lat:]` markers: their existence is ruled; report one only if the Greek on the plate does NOT in fact
  say what the English says.
- ἐξομολόγησις and ἐξαγόρευσις both "confession" (open question with Wilson, not yours).
- Scripture as Symeon quotes it, not a conventional version; punctuation as the plate prints it
  (unclosed guillemets, comma-ended questions are deliberate).
- Thou = singular addressee, you = plural, even inside one speech.

## What to hunt, in order of yield
1. **Polarity.** οὐ / οὐκ / οὐχ / μή / οὐδέ / μηδέ / οὐδείς / μηδείς / οὔτε / μήτε / χωρίς / ἄνευ / εἰ μή /
   πλήν dropped or added; a negative moved to the wrong clause; οὐ μόνον… ἀλλὰ καί flattened.
   **Check every one in the Greek of your range against the English.** Where the file's Greek is
   unreadable at a negative, read the plate.
2. **Who does what, how many, which way:** bishop vs priest vs deacon vs sponsor vs the candidate; active
   vs passive (βαπτίζει vs βαπτίζεται); thrice / three / third; east / west; before / after; one mystery's
   effect assigned to another.
3. **Mis-parsed grammar:** genitive absolutes and participles attached to the wrong subject; ὡς / ἵνα /
   ὥστε / ὅτι clauses inverted; a question rendered as a statement or the reverse (check the plate's ;).
4. **Missing or added text:** a clause, a sentence, a quoted prayer line present in one and not the other.
   Count sentences per chapter, plate against English.
5. **Wrong term:** one of the fixed terms varied, or a doctrinal term (οὐσία, φύσις, ὑπόστασις, χάρις,
   ἐνέργεια) rendered inconsistently in a way that changes the claim.

## Report: `data/briefs/SYMEON-BLIND-READ-<R#>.md`
For each finding: **chunk, column (and band if you can)**; **class (1–5)**; **the Greek as the plate
prints it**, exact (say "plate-read" or "file only"); **the Latin**, if it bears on the point; **the
English as it stands**, exact and unique in the chunk; **the proposed English**, exact replacement text;
**why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?** (checked AFTER).

Then name the chunks you found clean, list every plate page you opened, and list the candidates you
considered and rejected, with reasons. A report of findings alone cannot be told apart from one whose
writer never read.

Read every sentence of your range. Do not stop early. Write the report file progressively (header first,
then each finding as you confirm it) so a stalled read still leaves its work on disk.
