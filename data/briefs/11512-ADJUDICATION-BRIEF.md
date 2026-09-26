# Wolbero 11512: adjudicate and apply the blind-read findings (2026-09-26)

You are the adjudicator. Twelve blind readers (R01–R12) read the Latin and English of `src/latin/11512/` and `src/english/11512/` side by side. Their reports are `data/briefs/11512-BLIND-READ-R01.md` … `-R12.md`. Your job is to decide every finding, apply the ones that stand to the ENGLISH, and write a ledger.

Read first: `translation-style.md` Patterns 3, 7/7a, 8, 9, 11–13, 15, **18 (the whole section, including 18a)**, 19 and "The Song of Songs — each commentary stands on its own"; then `src/english/11512/cruces.md` (the merge layer, which governs), and the per-stint `cruces-*.md` for any site you rule on.

## Already applied by the orchestrator. Do not redo or reverse them
- *monilia* is "necklaces" everywhere (R03 F2); the 0018 `[sic: *proportior*]` is withdrawn and rendered "greater in proportion" (R03 F1); four Bride/Bridegroom capitals lowered in 0016 (R03 F3).
- All fourteen litotes "can not absurdly / unfittingly / unprofitably" are now "can, not absurdly, …" (R04 F1, R08 F6/F6b). 0058's "can not the kingship … ?" is a genuine rhetorical question and stays.
- *lectulus* is "bed" throughout, and *pacificus* is "peaceable" (R06 F8). 0060's "little bed" renders *areola* and is correct.
- *cyprus* is "Cyprus" (0004, 0050 aligned to 0023/0049); *cypressus* is "cypress" (R08 F3).

## The rulings to apply
1. **Pattern 18, `[cj:]`.** The test is whether the faithful English **asserts something false** (a wrong speaker, a reversed argument, a word that makes the author say what he did not). It is NOT limited to negations and correlatives. Several stint cruces stated it that narrowly, and 18a records that as a misstatement. **18a's "census closed" governs the SHIPPED corpus, not this work, which is in progress, so the correct bar applies here.** Promote a declined "crux only" site to `[cj:]` when it meets that test. Leave it a crux when the English is merely odd, elliptical, or still true.
   - The form is fixed: `[cj: *printed*; read *conjecture*, "gloss"]`, placed right after the English of the printed word. The printed word must appear verbatim in the Latin twin (verify-english checks this). The printed word keeps its English, and the conjecture stands beside it.
   - Candidates the readers raised include: R01 F5 (*Dei*/*olei*), R02 F1 (*filiis ancillae*), R02 F5, R03 F4–F7 (*diluerit*, *causa divina*, *judicem*, *de hoc nomine*), R04 F2 (*gratia*/*gravis*), R05 F1/F2/F4 (*adjuvare*, *admirationis* ×3, *sacramenta*), R06 F3/F4/F6/F7, R07 F2/F3 (*materna*, *contrariae … patris*), R08 F5 (*Patri*), R09 F5 (*descendere*), R10 F2 (*quadrigas*: a SILENT REPAIR where the English prints "charioteers"; the English must render *quadrigas* and add the `[cj:]`), R10 F3, R12 F1 (*tertia novem* / *ter tria*: false arithmetic), R12 F3 (*erudit* / *eruditae*: who does what), R12 F4 (*utilitatis* / *humilitatis*), R12 F5 (*tria* / *tristitia*). Decide each one on the test above.
2. **Negation.** R11 F5 (1261B): the English drops a printed *non*. Restore it. If the sentence then strains against *tamen*, add a line to the cruces (not a `[cj:]` unless the English, as corrected, asserts something false).
3. **Grammar and parse errors** (wrong antecedent, active/passive, subject, case): correct the English when the reader's parse is right. Examples: R01 F1/F3/F4, R02 F3, R04 F4, R05 F5, R06 F1/F2/F5, R08 F4, R09 F2/F3/F4/F6, R10 F1/F4, R11 F2/F4.
4. **Scripture conformed to the familiar version**: restore what Migne prints (R04 F3 *injuriam* singular; R05 F3; R08 F7 *Anima liquefacta est ut dilectus locutus est*, without the translator's "my"; R09 F1 *Labia ejus lilia*, without "as"; R09 F7 *una est*).
5. **One voice within the work**: R04 F5 (*filiis* → "sons" at both sites), R10's *consuetudo* ("custom"/"habit"; choose the majority rendering across the work and align), R11 F1 (Migne's bracketed supplements: render them in brackets consistently, e.g. `[felicity]`, as 1117C already does).
6. **Missing text**: R09 F8 (*plerumque*); R01 F2 (the duplicated "to come" at 1012D–1013A: render *venire* once, where the Latin has it).
7. **Punctuation (Pattern 8)**: follow OUR LATIN as it now stands (the plate-verified TEI patches are applied). R02 F2 (the two semicolons at 1039B carry Wolbero's *subdistinctio* argument; restore them), R02 F6. **1027D:** the second copy REJECTED the colon; our Latin's full stop is right, so the English follows the full stop.
8. **Formatting only**: R02 F7 (`[sic:]` without italics). Leave as is where the marker sits inside an italic lemma (cruces-0015 explains it); otherwise add the italics.
9. **Plate-dependent sites**: R07 F1 (1143C *mentem*) and R08 F1 (1166B *bone*). Read the plate before choosing. Scan A is `raw/scans/pl195/patrologiaecursu0195mign.pdf`, page = floor((col+13)/2); scan B is `raw/scans/pl195/patrologiaecur195mign.pdf`, page = floor((col+9)/2). Render ONE tight 600 dpi crop at a time and delete it after. If the plate prints a real Latin word that the English has silently repaired, it's a `[cj:]`; if the plate prints a non-word matching our Latin, it's a `[sic:]` (the column must be in `data/plate-reads.json`, and it is); if the plate differs from our Latin, note a TEI patch in the ledger for the orchestrator (do not edit tei-patches yourself).
10. **Crux-only additions** (R11's 1260B *deficiens*, R07 F5, R01 F6, etc.): add them to the ledger for the cruces; no English change.
11. **Reject** any finding that the rulings in `cruces.md` or the brief's "Fixed by ruling" list already settle, or where the English is a defensible reading of the printed Latin. Say why.

## How to work
- ⛔ Write the ledger's header FIRST, and append each decision as you make it (earlier agents on this work lost everything to transport stalls).
- Edit ENGLISH chunks only (`src/english/11512/NNNN.md`), with exact, unique string replacements. Never touch the Latin, the frontmatter, column anchors, or `[n:]` notes.
- After every chunk you edit, run `node scripts/verify-english.mjs 11512` and fix anything you broke before moving on.

## Output
- **Ledger:** `data/briefs/11512-ADJUDICATION.md`, one row per finding: reader+finding id, chunk, column, verdict (APPLIED / PROMOTED-CJ / CRUX-ONLY / REJECTED / TEI-PATCH-NEEDED), the exact change made, and one line of why.
- A final `verify-english` run must pass.
- Report (under 250 words): counts per verdict; every `[cj:]` added with its column; every TEI patch needed; anything you could not decide.
