# Maximus the Confessor, *Hymni* (PG 91.1417–1424), queue #3: run log

## 2026-11-15 — step 1 DONE: verified Greek + Latin base (Opus agent, plate-read; Kraken only a typing aid)
Not two hymns but **three** (Daniel, *Thesaur. hymnolog.* III, 97 seqq.): I «Ὕμνος εὐχαριστήριος καὶ ἱκετήριος πρὸς Θεόν» (col 1417 foot → 1420), II «Ὕμνος ἱκετήριος εἰς Χριστόν …»
(1420 l.55 → 1424), III «εἰς τὴν ἁγίαν Τριάδα» (1424 l.9 → end). pdf pp. 771 (foot) – 774 (upper half; the *Thalassius* Notitia below is not ours). **297 Greek / 296 Latin verse lines**
(one Latin line renders two Greek lines at 1423 G19–20). Short verse lines, Latin facing line for line; two printed columns per pdf page, each a Greek block + a Latin block.
Files: `base/NNNN.{greek,latin}.txt` (1417–1424; `#H` headings, `#C` citation), `base/BANDS.tsv`, `base/DOUBTS.tsv` (58; 9 evident Migne misprints kept as printed, flagged MIGNE?), `base/REPORT.md`.
Kraken: `raw/kraken/maximus-hymni/` (4 pages; its layout model splits the columns but the verse blocks drop lines: 1421/1422/1419 short, p. 771 foot garbled: do not use it as a base).
Weakest plate: p. 772 (cols 1419–1420, broken impression, worst at the tops); rough/smooth breathings indistinguishable in this scan (standard breathing written, per REPORT.md).
Costing: far smaller than the Epistulae rate: ≈1,000–1,200 Greek words; est. all-in ≈0.3–0.5M.

## 2026-11-15 — step 2 DONE: the verse pilot (Fable, in session; Wilson: "fable pilot. good point")
`translation-style.md` → new section **"Greek verse (anacreontics, hemiambs)"**, V1–V10, before "## Patterns"; the Sophronius *Anacreontica* inherits it.
`ANCHOR.en.md` = Hymn III entire (17 lines) + Hymn I lines 1–33, worked row by row with T notes; `GLOSSARY.md` seeded. The rule that carries the rest (V1): for each Greek
SENTENCE the English has exactly as many lines as the Greek, words move between lines only inside the sentence and as little as English allows: the model is the facing Latin on the
plate, which keeps the count and reorders. No metre, no rhyme, no padding (V2); metrical dress and filler particles not rendered (V3); epithets stay epithets (V4); a capital on every
line as the plate has (V5); acrostics noted, never imitated (V6); `[lat:]` only for a departure of sense, e.g. l.1 τλήμονα / *beatum* (V7); metre is evidence about the base, never a
licence to emend (V8); one printed line = one file line, blank lines only where Migne divides, the sentence aligner is NOT run on verse (V9).
Found in passing: **Hymn III is an acrostic, ΜΑΞΙΜΟΣ ΤΑΔΕ ΓΡΑΨΕΝ.** Metre: hemiambs (7 syllables).

## ⚑ ATTRIBUTION — probably NOT the Confessor (unverified; do not write the about text until checked)
From memory (Fable), not confirmed: these three hymns are **Maximus Margunius's** (bishop of Cythera, d. 1602), from his *Hymni anacreontici* with Conrad Rittershausen's Latin
(Augsburg 1601), which Daniel reprinted and Migne set under the Confessor. Web check 2026-11-15: the 1601 edition and Rittershausen's Latin are confirmed to exist
(katalog.snk.sk record 960217; Europeana); that PG 91's three hymns are IN it is NOT confirmed (nothing found either way; the Russian azbyka.ru translation prints them as the Confessor's).
Internal evidence fits a humanist, not a seventh-century author: hemiambs with a signature acrostic, a line-for-line Latin verse crib. **To settle: open a digitised copy of the 1601
edition (or Daniel, *Thes. hymn.* III p. 97 and his note) and look for the incipit Λειμών με τλήμον' ἔσχε.** Until then the registry/about text says "printed by Migne among the works of
Maximus the Confessor; the attribution is doubtful" and no more. Same class as the Procopius-of-Caesarea piece in the *Rhetorica*. The queue's "New" badge is unaffected (weak claim by default; rule 8).

## ▶ NEXT (each needs Wilson's model + go; est. ≈0.3–0.4M all-in)
1. **Translate** (Opus, ONE agent, the whole 297 lines: too small to split; brief = this RUN.md + the verse section + ANCHOR + GLOSSARY + `base/` + DOUBTS.tsv; output `hy-00N.en.md` per hymn, one
   line per line, T/S notes, `[lat:]` per V7; it re-reads the plate wherever DOUBTS or the metre (V8) raises a question; Hymn III and Hymn I 1–33 are DONE in the anchor: carry them over verbatim).
2. **Build** (Sonnet): the kt chain assumes ONE Greek column per pdf page and prose paragraphs; the Hymni have two columns per page and lines. Needed: a small `hy-to-site.py` (or a verse mode in
   `kt-to-site.py`) writing src/greek, src/pg-latin, src/english with one printed line per line, `[NNNN]` + `[b: X]` (base/BANDS.tsv) at line starts; builder support for line breaks
   (the PL chunker already carries verse `<l>` as an in-block newline: see `scripts/lib/chunk-core.mjs` NL); alignment by line within sentence, no align-sentences run (V9). Check
   `verify-english-pg` ratio and dedupe on short lines. Registry key `maximus-confessor-hymni`, slug `hymni`, citRange PG 91, 1417–1424.
3. **Blind read** (Opus, 1 reader: 297 lines), polarity record, preflight, then Wilson: about text (with the attribution settled), deploy, push.

## 2026-11-15 — step 3 DONE: translation (Opus, one agent, the whole work)
`hy-001.en.md` (Hymn I), `hy-002.en.md` (Hymn II), `hy-003.en.md` (Hymn III): one English line per printed Greek line, column anchors `[NNNN]` at the first line of each column
(and on each card's heading line), no blank lines inside a hymn; band letters NOT written in the English (the builder takes them from `base/BANDS.tsv`). Hymn III and Hymn I ll. 1–33 carried
over verbatim from the anchor, notes renumbered from 1 in hy-003. **One addition to an anchor line:** Hymn I l.1 now carries the inline `[lat: the Latin has *beatum*, blessed]` that the
anchor's own note 1 says "stands here" but its table row did not print.
**Line counts (English = Greek, every column; self-check script):** I: 1417 2, 1418 6, 1419 60, 1420 54 = 122 · II: 1420 2, 1421 55, 1422 66, 1423 27, 1424 8 = 158 · III: 1424 17 · total 297.
V1 check (sentence ends coincide line for line; no sentence ends mid-line): clean after one fix (a colon at II, 1421 G35 where the Greek has a comma).
**Notes:** hy-001 17 (5 anchor), hy-002 21, hy-003 3 (anchor). `[lat:]` fired 6 times: I *beatum* (l.1), *Cladem exterorum* (1420 G9), *egisti* (1420 G43); II *damnosos hospites*
(1421 G38), *Consciente agno* (1422 G23), *Angelicum … Cibum* (1422 G28).
**Plate:** 16 checks, `PLATE-CHECKS.tsv`. **One base fix:** 1420 G25 `Θερμὸν` → `Θερμὴν` (η plain at 600 dpi against Σὴν in the same column; logged in DOUBTS.tsv as PLATE-FIX;
sense unchanged). Everything else stands as printed: ἤρυξας (clear; NOT emended to ἤνυσας), ἀνάγκης; (the question mark is printed), βροτόν (not βρωτόν), Οἰκέτριβας, αἱμορούσης.
Metre (V8): a syllable count over all 297 lines finds every line at 7; the metre raised no lead.
**Decided:** I l.31 ἀγνῶς (anchor note 5's open question): the breathing is an indeterminate blob at the plate, so the Latin's *invisibiliter* may read ἀγνώς from the same print: NO `[lat:]`,
"purely" kept. Anchor note 5's last sentence ("the translator … decides") is an instruction left in a published note: Wilson to replace it (suggested: "The breathing cannot be told at
the plate; the Latin may read the other one, so no `[lat:]`.").
**Open for the blind reader:** ἤρυξας "ward off" vs the Latin's sense (I, 1420 G43); οἰκέτριβας "house-slaves" vs "house-wreckers" (II, 1421 G38); ἦν taken as ἤν "if" (II, 1422 G31);
τυφῶνα as "the Typhon" in apposition to the Morning-star (II, 1421 G41); ἡ/ἣ at 1422 G1 (the soul); 1421 G2's printed `;` rendered as a pause; πνοή and ἄημα both "breath" (glossary ⚑);
the card-1 title line renders Migne's "S. MAXIMI CONFESSORIS HYMNI" as printed (attribution flag above: notes never call the hymns the Confessor's).
**Glossary:** +28 rows (ἄναρχος, πόλος/πόλονδε "sky/skyward", πνοή, πνεῦσις, κακόφρων, ἄναγνος, ἐρείπια/ὄλεθρος, θυμός, ἄκραντος/ἄπειρος/ἄπλετος, σωφροσύνη, εὐσπλαγχνία, συνεργός/συνεργάστης,
Ἑωσφόρος/φαεσφόρος, μοναί, ὑμνῳδός, etc.).
NEXT is step 2 above ("Build", Sonnet), then the blind read.

## 2026-11-15 — step 4 DONE: local site build (Sonnet; nothing deployed or pushed)
New `scripts/hy-to-site.py` (verse builder; CONF-driven, the Sophronius *Anacreontica* can reuse it): cards + `base/` -> `src/greek|english|pg-latin/maximus-confessor-hymni/` (3 chunks hy-001..003: 125/159/18 lines
incl. headings, 26/28/4 sentences), manifests, `cruces.md` (41 notes keyed by column + band). One paragraph (⟦pN⟧) per Greek SENTENCE, every printed line carries ⟦sK⟧ (so the parallel view pairs line
with line); sentence ends are the ENGLISH ones applied to the Greek at the same line index; the one place Greek punctuation disagrees (1421 line 4, Greek `;` mid-sentence) is listed by the script. Band letters
([b: X], base/BANDS.tsv file-line numbers) Greek only. The sentence aligner is NOT run (V9); `mark-sentences` is not run either (markers written directly). Column anchors repeat across chunks where a hymn begins
mid-column (1420 in hy-001 and hy-002, 1424 in hy-002 and hy-003), as in the cards; the page builder's id logic tolerated it (first `id="c1420"` wins).
`scripts/build-work-page-pg.mjs`: new `work.verse` mode (registry flag `"verse": true`): a newline inside a paragraph renders `<br>`; rows are cut AT the column anchor's line (not at a "sentence end": in verse every
line starts with a capital and the heading numeral "I." read as one, cutting Greek and English at different places). Every other work rebuilds unchanged (guarded by `work.verse`; not re-run for the others).
Registry entry `maximus-confessor-hymni` (slug `hymni`, `verse: true`, greekSource ours-vision-ocr, translationStatus unclear: not researched, rule 8), DRAFT about text (attribution doubtful; "Wilson to read"), DRAFT RECENT line.
verify-english-pg OK · plate-gate OK (0 [sic:]/[var:]) · index 8 columns / 41 cruces · Greek lookup rebuilt · **preflight 9 of 10 (only the blind polarity read).**
⬜ NEXT: blind read (Opus, 1 reader; briefs pattern `data/briefs/`; the five hard spots listed in step 3) -> fixes -> `polarity-record.mjs maximus-confessor-hymni` -> rebuild -> preflight 10/10 -> Wilson: about text, deploy, push.
