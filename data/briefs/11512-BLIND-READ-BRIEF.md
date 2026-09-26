# Wolbero, *Commentaria in Canticum canticorum* (PL 195, text 11512): blind read brief (2026-09-26)

You are one of twelve blind readers (R01–R12). Your launch message names your chunks. Latin: `src/latin/11512/NNNN.md`; English: `src/english/11512/NNNN.md`.

The English was drafted by Opus stints who read every page at the plate. It passes every mechanical check, and its `[sic:]` and TEI corrections have been re-read on a second copy of the volume. **Your job is the class the checks cannot see.**

**What the text is.** A twelfth-century Benedictine abbot's commentary on the Song of Songs, written for a community of nuns (the plural *vos* is them, rendered "you"). It is a lemma-and-gloss commentary: a Song verse (`VERSE n.--`, italic), then allegorical and moral exposition that quotes the lemma again and chains other Scripture. Chunk 0000 is the 1630 editor's front matter; chunks 0079–0080 are Wolbero's closing address to the sisters. **Lemma-and-gloss commentary is the genre where polarity defects cluster** (11064 gave 41 sites in 80 chunks), because the text quotes its own lemma twice and a dropped *non* contradicts its neighbour.

## Rules of the read
- **Do NOT open any `cruces*.md`, or any file in `data/briefs/` other than this one, before your findings are written.** Readers given the cruces found nothing new. After you've formed a finding, you may check whether it was logged, and say so.
- **Edit nothing except your report.**
- Read `translation-style.md`: Patterns 3, 7/7a (negation), 7a″, 8, 9, 11–13, 15, 18, 19 and "The Song of Songs — each commentary stands on its own". Markers: `[n:]`, `[nt:]`, `[var:]`, `[d:]`, `[sic:]`, `[cj:]`, `[ed:]`. `[cn:]` is Latin-only and has no English twin.

## Fixed by ruling. Do NOT report
- Column anchors that step oddly or repeat (split pages at 1243 and 1271 are correct), `(cont.)` heads, em-dashes, and heading forms that mirror the Latin (CHAPTER ONE, CHAP. III.-- *Continuation.*).
- `VERSE n.` labels; bold numbers like *138* (the 1630 edition's pages, kept verbatim); Bride/Bridegroom capitalized exactly where Migne capitalizes *Sponsus/Sponsa* and nowhere else; "Holy Scripture" for *divina/sacra/sancta Scriptura*; *accubitus* "reclining"; *murenulae* in italic Latin; *monilia* "necklaces".
- Scripture rendered as Migne prints it, not a conventional version; an existing `[var:]` on it.
- Literal renderings the Latin forces; garbled type rendered literally; `[sic:]` and `[cj:]` already present; the `[ed:]` diagram note at 1067–68.

## What to hunt, in order of yield
1. **Polarity.** A `non / nec / neque / nisi / haud / nunquam / nullus / nihil / absque / sine / ne / vix` dropped or added. Also a word rendered as its opposite so that a broken sentence reads smoothly (*voluit*/*noluit*, *aperitur*/*operitur*, *justitiae*/*injustitiae*: several such misprints are ALREADY carried with `[cj:]`, so check that the English still says what the Latin prints). A lemma quoted twice, once with *non* and once without, is where to look first. Check every one.
2. **Who does what to whom.** Bride vs Bridegroom vs the daughters of Jerusalem vs the Church vs the soul; the speaker of each lemma; active read as passive; a subject shifted.
3. **Mis-parsed grammar.** Relative clauses on the wrong antecedent; *ut/ne* clauses inverted; comparatives (*quanto… tanto*) lost; *non solum… sed etiam* flattened.
4. **Missing or added text.** A clause, sentence, gloss, lemma or Scripture citation in one column and not the other. Count sentences per paragraph on both sides.
5. **Scripture and numbers.** A lemma or citation whose English departs from what Migne prints (a word dropped, added or swapped) and carries no `[var:]`; numbers in the allegories (sixty strong men, eighty concubines, seven, threefold sense).

## Report: `data/briefs/11512-BLIND-READ-<R##>.md`
⛔ **Write the file's header first, and append each finding as soon as you've formed it.** Earlier agents on this work lost everything to transport stalls because they wrote at the end.

For each finding: **chunk, column**; **class (1–5)**; **the Latin**, exact; **the English as it stands**, exact and unique in the chunk; **the proposed English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?** (checked AFTER).

Then name the chunks you found clean, and list the candidates you considered and rejected, with reasons. A report of findings alone can't be told apart from one whose writer never read.

Read every sentence of both columns. Do not stop early. A transport error is not a limit.
