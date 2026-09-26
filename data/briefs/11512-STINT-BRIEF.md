# Wolbero of St Pantaleon, *Commentaria in Canticum canticorum*, PL 195 — translating stint brief (Wilson: Opus, go, 2026-09-25)

Your launch message gives: chunk range, page range, stint tag (T01..T16), scratch dir.
Work in `~/patrologia`. Translate Latin chunks of `src/latin/11512/` to `src/english/11512/` (same filenames; mkdir if needed).

## Read first
1. `translation-style.md` — ALL of it, esp. Patterns 9, 11–19, **7a (negation)**, 7a″ (scripture collation), and "The Song of Songs — each commentary stands on its own" (do NOT harmonize lemmata with other Song commentaries; within THIS work, one voice).
2. `translation-runbook.md` lines ~308–420 (agent prompt template: sacred markers, the 7 known false positives, em-dash rule, do-not-stop-early).
3. Style anchor pair: `src/latin/9741/0000.md` + `src/english/9741/0000.md`. Copy each Latin chunk's frontmatter VERBATIM into the English chunk.
4. CLAUDE.md "BIAS TO EXHAUSTIVENESS" and rule 8a: open EVERY page of your range at the plate ONCE, collating the text and reading the page foot in the same visit. No sampling.

## The plate
Scan: `raw/scans/pl195/patrologiaecursu0195mign.pdf`. **PDF page = floor((col + 13) / 2)** (calibrated at pp. 503, 510, 520, 628, 642, 645). Read the printed corner column numbers FIRST on every page.
Render YOUR pages only, one at a time, into your own scratch dir (8 GB Mac — no parallel renders):
`pdftoppm -f N -l N -r 300 -png raw/scans/pl195/patrologiaecursu0195mign.pdf <SCRATCH>/p`
Crop to read closely (full page width for the foot: notes run under both columns). Never fetch anything online. Delete your PNGs when finished.

**Second witness (added 2026-09-25 after T03):** scan A blacks out one-letter words (*a*, *e*, *o*), so they are unverifiable on it. Where a one-letter word matters (a preposition against the Vulgate, *a/e regione*, a vocative *o*), check it on `raw/scans/pl195/patrologiaecur195mign.pdf`, **PDF page = floor((col + 9) / 2)** (calibrated at pp. 506, 520, 630, 640). It is a different copy of the same printing; read its corners first too. Record B-reads in your PLATE-READS file with `"scan": "B"`. ⛔ **MEASURED by T10: on scan A, *c* and *e* are ink-filled and cannot be told apart** (*crubescenti*/*erubescenti*, *eor*/*cor* were our-file errors that A made look like Migne's). **Never fire a `[sic:]` or a TEI patch that turns on c/e (or any ink-filled letter) on scan A alone: confirm it on scan B at 600 dpi first.**

**Work-wide renderings fixed mid-run (2026-09-25) — use them:** Migne's `VERS. n.` lemma labels → **`VERSE n.`** (all caps, as the plate's small caps; the 5 early `VERS.` are normalized at merge). *accubitus* "reclining" · *murenulae* italic Latin · *monilia* "necklaces" · plural *vos* to the sisters = "you" · **capitalization of bride/Bridegroom follows MIGNE'S case at each instance** (*Sponsus* → Bridegroom, *sponsus* → bridegroom; *Sponsa*/*sponsa* likewise; Migne capitalizes 19 of 118 *sponsus* forms) — never impose a house style · **Pattern 3: *divina Scriptura* = "Holy Scripture"** like *sacra/sancta Scriptura* (NOT "divine Scripture"; the early chunks' 21 instances are swept at merge).

Layout facts already checked (do not report them):
- Migne's A–D band letters sit in the gutter and serve both columns. Where a book or section heading spans the full width mid-page (Book IV at p. 628; the epilogue at p. 642), the reading order is left-upper, right-upper, then left-lower, right-lower, so the anchors run e.g. 1243A–C, 1244A–C, [1243], 1243D, 1244D. **That is correct**, not a numbering error.
- **Bold numbers in the text (`*229*`, `249`, `251`, `282`…) are the 1630 Cologne edition's page numbers** (Gravius's edition, which Migne reprints). Keep them verbatim in the English at the same spot (translation-style.md: "Inline edition apparatus … kept verbatim").
- Chunk 0000 holds the editor's front matter (Henricus Gravius's dedicatory epistle, epigram, preface to the reader, 1629–30). Translate it like everything else; it is in Migne.

## Migne's footnotes — RECOVER THEM (our Latin has none)
Migne prints a SPARSE numbered foot layer on this work, e.g. p. 613 `(3) Deest aliquid.` and p. 638 `(4) Locus obscurus.`; the preface (p. 509) has its own. Corpus Corporum dropped the whole layer: neither the note nor its key `(3)` is in our Latin.
For every note on your pages:
- Find the printed key in the text by eye, with the page open. Insert into the LATIN chunk ONLY, at that exact spot, `[cn: <number as printed> | <note text verbatim>]`.
- ⛔ **The ENGLISH chunk carries NOTHING for a numbered note: no `[cn:]` (verify-english rejects it, check 9a) and no `[nt:]` twin** (a numbered `[cn:]` does not join the positional note sequence, so a twin would break the note count). This is the 11613 precedent, ruled in `scripts/verify-english.mjs` ~l.92. (Corrected 2026-09-25 after T01/T03 hit it; the first version of this brief said the opposite.) If a note is an ASTERISK- or LETTER-keyed prose note instead, stop and report it: that class DOES take an `[nt:]` twin.
- Append a row to YOUR OWN TSV `data/briefs/11512-NOTES-<firstChunk>.tsv`, header
  `page	col	note_no	note_text	anchor_words	anchor_in_our_latin	layer` (layer = `cn`; anchor_words = ~6 Latin words around the key; anchor_in_our_latin = `yes — placed by eye by <tag>`).
- Record the numbering you see (per page? running?) and report any gap in the sequence across your range. A note you cannot place: do NOT guess, log it in your cruces file.
- A note like `Deest aliquid` / `Locus obscurus` is Migne's own judgment on his text: it is an obvious crux site. Log it in cruces with what the passage prints.

## Scripture — 7a″, a DELIVERABLE
Your lemma list is `data/briefs/11512-lemmata-<firstChunk>.txt`: every italic span in your range with its column band, phrase-searched against the Clementine Vulgate (✓ found / ⚠ not found / single = one word). **First, count the italic spans in your Latin and check the total against the figure at the top of your file; say in your report whether they agree.**
Then for every ⚠ span that is scripture: collate it word by word against the Vulgate verse. **The list of divergences is the most valuable thing you produce.** Each divergence gets one of:
- `[var: …]` per the pattern in translation-style.md, ONLY if you read that column at the plate and the plate prints it (the digitization can manufacture divergences: 9003's `judicabit`→`judicavit`);
- a TEI-patch note in your cruces file if the plate differs from OUR Latin (the plate wins; record plate reading, our reading, column);
- nothing, if it is paraphrase/allusion rather than quotation (say so in cruces in a line).
Translate what Migne prints, never the conventional version.

## Plate reads and cruces
- Write `src/english/11512/cruces-<firstChunk>.md` (column + reading + your note) for garbled type, divergences, TEI/plate differences, and notes you could not place. Render literally; never repair a sentence into sense (7a).
- Record every page you read in `data/briefs/11512-PLATE-READS-<firstChunk>.json` — your OWN file, never `data/plate-reads.json`. Copy the format of `data/briefs/7089-PLATE-READS-0000.json` (top key `"11512"`, series pl, volume 195, scan path, page_map, reads[] with page, cols, from, to, depth "full", date, corners_checked, found).
- TEI divergences where the plate differs from our Latin: list them in a section at the end of your cruces file headed `## TEI patches (plate vs our Latin)`, one line each: column · our reading → plate reading · page. Do not edit `data/tei-patches/` yourself; the orchestrator applies them.
- `[sic:]` / `[var:]` only on columns you read at the plate. Your guess about whose error it is (ours or Migne's) is not evidence: the plate is. Measured: agents' "probably our file" calls were right 5 times in 14.

## Finish
- Count column anchors, `[n:]` notes and `## ` heads in each English chunk against the Latin; run `node scripts/verify-english.mjs 11512` and report the lines for your chunks (other stints' chunks may be missing; ignore those).
- Do NOT run build, deploy, index-work, chunk-work or git. Do not touch other stints' chunks or files.
- Report (under 250 words): chunks done, pages read, footnotes found/placed/unplaced (with numbering pattern), lemma count agreement, `[var:]`/`[sic:]` fired, TEI-patch lines, cruces count, anything you could not do.
- Do not stop early. Five chunks of ~1,500 words at full fidelity, plates included, is routine for this pipeline.
