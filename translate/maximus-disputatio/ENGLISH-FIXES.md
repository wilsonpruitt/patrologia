# ENGLISH FIXES brief — Maximus *Disputatio cum Pyrrho* (Opus fixer; coordinator 2026-11-14)

The plate has now been read at every spot the translators flagged (`IMAGE-CHECK.tsv`, two passes). In 30 places
(`ENGLISH-FIXES.tsv`) the plate disagrees with the reading the English was built on, or settles a question the
translators left open. Your job: make the English follow the plate, chunk by chunk, with targeted Edits to
`md-00N.en.md` in this directory. The Greek is in the scaffold `md-00N.md` (find the tag `pNNNN.LL`); the facing Latin
is on the same page block. `GLOSSARY.md` §§ VII–IX bind; read `CARD.md` "Your English file" for the note shapes.

For each row:
1. **P** (the plate prints what the OCR gave; the translator's emendation is withdrawn): read the sentence with the
   printed form. **If the print construes, re-translate from it** and drop or rewrite any note that argued for the
   emendation. If it does not construe, keep the English but make its T note say **"Migne prints X (confirmed on the
   plate); the English follows Y"**, with the reason in one clause. Punctuation-only rows: change the English only if
   the plate's point changes the sentence division or a question/statement; otherwise do nothing and say so.
2. **R with a third plate form**: as P, with the plate's form.
3. The named items:
   - **p0166.41 (md-001)**: Migne's own page omits a clause (an eye-skip in the print: τῶν αὐτῶν … τῶν αὐτῶν);
     Combefis's Latin has it. Give the clause in square brackets from the Latin, drop the `[?]`, and rewrite the note:
     "Migne's Greek omits … (confirmed on the plate); supplied from Combefis's Latin …".
   - **POLARITY rows (p0189.32, p0185.35, p0180.55)**: the English must follow the printed negative or its absence
     unless the printed text cannot construe. p0189.32: the plate has NO οὐ (Πλὴν περὶ τῶν ἔργων …): try the sentence
     without the negative first; if it construes, the English loses "not" and the note records that the Latin reads
     *non*. Say exactly what you decided for each, with the Greek.
   - **p0189.46**: the plate clearly prints ἀντιδόντες; the translator read ἀπιδόντες. Does the print construe?
   - **p0174.06**: the plate prints τῇ (not ἡ, not ᾑ).
4. Never touch the `## OCR` tables. If you add or remove a note, renumber so markers run 1..n, each with one
   definition, and check it.

No other files, no images, no web, no agents. Report, short: per row `tag · what you changed (or "no change") · why`,
and the polarity decisions spelled out.
