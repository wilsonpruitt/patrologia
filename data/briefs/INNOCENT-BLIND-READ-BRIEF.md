# Innocent I, PL 20 (7089 Decreta · 7090 Epistolae et decreta · 7091 Epistolae): blind read brief (2026-09-24)

You are one of seven blind readers (R1–R7). Your launch message names idno and chunks. Latin: `src/latin/<idno>/NNNN.md`; English: `src/english/<idno>/NNNN.md`.

The English was drafted by Opus stints with plates read, and passes every mechanical check. It carries Coustant's lettered foot notes: `[cn: a | …]` in the Latin, a translated `[nt: …]` twin in the English. **Your job is the class the checks cannot see.**

What the text is: papal decretal letters (Innocent I, 402–417), in Coustant's 1721 edition as reprinted by Migne. Many are canon-law answers, so numbers, procedures, and *non/nisi* clauses carry the whole meaning. Some letters have a Greek version printed after the Latin (translated from the Greek as printed; differences are logged by the stints). 7091 is the pseudonymous letters (Ps.-Innocent I): each has a Greek block and a Latin block, each translated from its own language, except one Latin-only letter.

## Rules of the read
- **Do NOT open any `cruces*.md`, any file in `data/briefs/` other than this one, before your findings are written.** Blind readers given the cruces found nothing new. You may check a finding against the cruces AFTER you form it and say whether it was logged.
- **Edit nothing except your report.**
- Read `translation-style.md`: "Papal letters — Innocent I" P0–P3, Patterns 7/7a, 8, 11–13, 15, 18, 19. Markers: `[n:]`, `[nt:]`, `[var:]`, `[d:]`, `[sic:]`, `[cj:]`, `[ed:]`. `[cn:]` is Latin-only.

## Fixed by ruling. Do NOT report
- Column anchors that step oddly or double (`[0587C]`/`[0588C]` is Migne's own), `(cont.)` heads, em-dashes, "CHAP." vs "CAP." heading variants.
- Coustant's sigla expansion in `[nt:]` twins (Merl.→Merlin, Crab.→Crabbe, Quesn.→Quesnel, Garn.→Garnier, Isid.→the Isidorian collection, Rom.→the Roman edition); bare variant words left in Latin italic; fullwidth ［ ］ in one note at 0574 d.
- Scripture rendered as Migne prints it, not a conventional version.
- Literal renderings the Latin forces; garbled type rendered literally; 7091's two texts per letter.

## What to hunt, in order of yield
1. **Polarity.** A `non / nec / neque / nisi / haud / nunquam / nullus / nihil / absque / sine / ne` dropped or added, including in the notes (a *non* in a manuscript-variant note reverses which witness has the reading). Check every one.
2. **Numbers**: years, counts, canon numbers, days, ages, Scripture references; **who did what to whom**: pope vs bishop vs emperor, which side of a canon-law ruling (may / may not; deposed / restored; admitted / excluded).
3. **Mis-parsed grammar**: relative clauses attached to the wrong antecedent, genitive lists read as nominative, indirect-question or ut/ne clauses inverted, a passive read as active.
4. **Missing or added text**: a clause, sentence, name, or a whole note in one column and not the other. Count sentences per section on both sides. Check that every `[cn:]` has a twin with the same content.
5. **Wrong name or place**: a conventional English form that points at a different person or city (Anysius/Thessalonica, Exuperius/Toulouse, Decentius/Gubbio, etc.), two names collapsed.

## Report: `data/briefs/INNOCENT-BLIND-READ-<R#>.md`
For each finding: **idno, chunk, column**; **class (1–5)**; **the Latin**, exact; **the English as it stands**, exact and unique; **the proposed English**, exact replacement text; **why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?** (checked AFTER).

Then name the chunks you found clean, and list the candidates you considered and rejected, with reasons. A report of findings alone cannot be told apart from one whose writer never read.

Read every sentence of both columns, notes included. Do not stop early. A transport error is not a limit.
