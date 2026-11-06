# SWEEP brief — Maximus *Epistulae*, step 2 (Sonnet; written by the coordinator 2026-11-06)

All 28 chunks `me-001 … me-028.en.md` are translated (ten Opus briefs, in parallel, so the choices drift). Make them one
work. Read `CARD.md` §§ "One voice, two registers" and "Your English file", `GLOSSARY.md` (all of §§ I–V; **§ V is the
rulings list you enforce**), and `CHUNKS.tsv` / `LETTERS.json` (which chunk holds which letter). The Greek of each
chunk is in `me-0NN.md` (the scaffold): open it only where you need the Greek to decide a spot. Edit the `.en.md`
files with targeted Edits (never rewrite a file; never touch the OCR tables except in task 7; never renumber a note
unless you add or remove one, and then verify markers run 1..n with no gap).

1. **Rulings (§ V).** For each ruled term, grep every chunk for the rejected renderings and the ruled one; fix the
   rejected ones. Known: ἰδικός "particular"→"specific" (me-016–018); σύνοδος "concurrence"→"concourse" (me-013–015);
   συνδιάθεσις "fellow-disposition"→"co-disposition"; "of another essence/nature/hypostasis"→"of other …";
   ἀπαράλλακτος "unvarying"→"invariant", ἀπαραλλαξία "unvarying likeness"→"invariance" (me-004–006); φιλανθρωπία →
   "love for man" everywhere; Δημιουργός/κτίστης → both "Creator", ποιητής → "Maker" (I: check A–H use the same).
   Forbidden strings anywhere in the English (check the Greek before fixing): "energy", "activity" (ἐνέργεια =
   operation), "gnomic", "monadic", "subsistence", "divinity" for θεότης (Godhead), "opinion"/"judgement"/"mind" for
   γνώμη (inclination), "love of mankind", "dispensation" (οἰκονομία = economy), "substance" for οὐσία (essence).
2. **Headings.** Every letter opens with `LETTER n` in capitals (Letter 1 with its added title) and the printed
   heading's address clause in italics on the next line; numbered 1–45 in order across the chunks (the table in
   CARD.md); a chunk continuing a letter has neither. "Of the same, to the same" as printed. Fix any miss.
3. **Seams.** Read across each boundary inside a letter (me-001|002|003, 004|005, 010|011|012|013|014, 015|016|017,
   019|020|021, 024|025 at the foot of col. 608): no sentence doubled or dropped, mid-word splits joined (the agents
   carried "—" across some), the column anchor `[NNN]` present at the chunk start and at every new page.
4. **[?] marks.** 36 in all (26 in me-027 are Migne's own dotted gaps where Combefis says the manuscript is eaten:
   those stay). Every [?] must have a T note that says what the Latin has; list them all in your report with the
   page.line and the note number — the coordinator reads them on the plate.
5. **Second person.** Within one letter the number must be consistent with the Greek (Letter 12 plural throughout;
   13–14 plural; 1, 4, 20 singular …). Flag any sentence where the English switches without the Greek doing so; fix
   only clear slips.
6. **Notes.** A P note on an addressee or a heretic should appear once per LETTER (first chunk of the letter), not
   in every chunk; a repeated one in a later chunk of the same letter becomes "(see Letter 12, note 1)" or is dropped
   with renumbering. Check the Scripture S notes use book chapter:verse (LXX numbering for Psalms).
7. **COORD-ROWS.tsv.** Append its row (p0282.46 ἀπιώσατο → ἀπεώσατο) to me-015's OCR table in text order; then
   delete the file.
8. **Report** (short): every edit as `chunk · what · why`, counts per task, and anything you could not decide (with
   the Greek) for the coordinator.
Do not open `translation-style.md` or anything under `data/`; no web; no image reading.
