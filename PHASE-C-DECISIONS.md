# Phase C — decisions (step 1), RULED 2026-10-15

## Wilson's rulings (2026-10-15)
1. **BY-SA lexicon layer is acceptable** (separate, attributed layer; Perseus credited).
2. **Du Cange is public domain** — use it; no email to the ENC needed. Still credit the edition used.
3. **Accuracy thresholds: my recs adopted** — single-analysis display only if >=95% correct-in-candidates AND >=90% top-1 on the hand-checked Abbo sample; otherwise ambiguity-only.
4. Still to do: read the actual Perseus LICENSE file at the commit we pull (BY-SA vs BY-NC-SA).

---

Written by Sonnet from web searches, not primary licence files. Items marked ⚠ are **unverified** and must be checked against the actual LICENSE file / terms page before anything ships. Wilson rules on the open questions at the bottom.

## 1. Sources and provenance

| Need | Source | Status |
|---|---|---|
| Latin classical lexicon | Lewis & Short, PerseusDL `lexica_latin_lsj` (XML) | ⚠ Licence conflicting: a third-party dataset card says CC BY-SA 4.0; older Perseus notices say CC BY-**NC**-SA 3.0. Read the repo's LICENSE at the commit we pull. |
| Greek classical lexicon | LSJ, PerseusDL | ⚠ Same ambiguity (Digital Classicist wiki mentions an NC term). |
| Late/medieval Latin | Du Cange (Favre ed.), Sorbonne/ENC online edition | ⚠ Open access to read; **no stated licence found**. Underlying text is PD (1883–87), but the ENC's encoding may be claimed. Fallback: OCR of the archive.org PD print (cost, and OCR noise in a dictionary). Ask ENC. |
| Late Greek | Sophocles 1887 (archive.org scan) | ⚠ No clean digitization located. Likely needs OCR. Greek is second, so defer. |
| Not usable | Lampe, Niermeyer | In copyright. |

## 2. Licensing seam (proposal)

Our rule: CC BY-NC 4.0 on the English + encoding; PD on source ([[wroot-press-licensing]]).

- **Lexicon and morphology data ship as a separate layer** (own files/bundles, own attribution line, own licence statement), never merged into the `.md` translation store or the CC BY-NC export.
- **If L&S/LSJ are BY-SA:** the bundle stays BY-SA and is credited to Perseus; the BY-SA terms bind only that layer, not our English. Popups display it alongside, they don't adapt it into our text. Reasonable, but a lawyerly read of "collection vs adaptation" is Wilson's call.
- **If they are BY-NC-SA 3.0:** compatible with our NC use, same separation applies.
- **Collatinus is GPL-3.** Running it at build time to produce analyses: output is data, not a derivative of the program, so GPL does not attach to `words.json`. We must not ship its lexicon files inside the site; if we do, the GPL attaches to that file. Credit it regardless.
- `words.json` (token → candidate analyses) is part of **our encoding**, so it falls under the existing claim (3) in the licensing memory, with inbound credits to Collatinus and the lexica.
- Add the inbound credits to the dataset card in `open-corpus` and to `/rights`.

## 3. Latin tagger

- **Collatinus** (GPL-3, ~11k-lemma core + extensions, 500k+ forms): rule-based, returns **all** analyses natively. That matches "show ambiguity". Weak where Migne spelling is medieval (ae/e, ci/ti, h-drops) and for words missing from its lexicon (returns nothing, which is honest).
- **LatinCy** (spaCy; ⚠ licence not confirmed): statistical, gives one best tag with a confidence-ish signal. Trained on classical + some later text. Good as a **disambiguator** over Collatinus candidates, not as the display source.
- **Recommendation:** Collatinus for candidate analyses, orthography-normalized first (plan step 1). LatinCy only if the accuracy sample shows Collatinus leaves too many tokens unanalysed or too ambiguous. No tool is installed on this machine yet (checked: no `collatinus`, no `spacy/latincy/cltk`). Disk is tight (13 GB free, 94% full) so a LatinCy model download is a real cost.
- **Gate before any display:** hand-check a sample of ~300 tokens from Abbo *Canones* (9741): % with ≥1 analysis, % where the correct analysis is among the candidates, and the failure classes. Record in this file. Single-analysis display only above a threshold Wilson sets.

## 4. Pilot and order

1. Abbo *Canones* (9741) Latin: normalize → Collatinus → accuracy sample → `words.json` + lemma bundle → popup UI.
2. Latin rollout (Sonnet, pattern work).
3. Greek: Morpheus/greCy accuracy check on Byzantine text first; Sophocles digitization question.

## Open questions for Wilson

1. Is a BY-SA lexicon layer next to our NC English acceptable, or do we want only PD lexica (Du Cange print OCR, Sophocles, and the PD originals of L&S via archive.org)?
2. OK to email the ENC (Du Cange) about reuse terms? That is an outward-facing send, so it needs your go.
3. Accuracy threshold for single-analysis display (suggest: ≥95% correct-in-candidates and ≥90% top-1 on the sample; otherwise ambiguity-only).
4. Deploy stays held until after Oct 20; nothing here touches the live site.

---

## Pilot result — Abbo *Canones* (9741), Collatinus via pycollatinus, 2026-10-15

Script: `scripts/phase-c-latin-pilot.py`; sample + verdicts: `data/phase-c/abbo-sample.tsv`. Env: `~/.venvs/collatinus` (pycollatinus 3.14 needed a one-line import patch in `util.py`: `Callable` from `collections.abc`; the patch lives only in the venv).

- **Coverage (all 11,150 tokens):** 98.3% get >=1 analysis. The 194 misses are Roman numerals, abbreviations (`cap`, `concil`), proper names (`Tullensi`, `Agapitus`). Spelling-variant fallback fired only twice: Abbo's spelling is near-classical.
- **Hand check, 300 random tokens, judged in sentence context:** correct reading present among the candidates for **296/300 = 98.7%**. The 4 misses are 2 abbreviations + 2 proper names, all returned empty (honest, no wrong answer).
- **Ambiguity:** only 112/300 tokens (37%) have a single analysis; 192/300 (64%) have a single *lemma* (the rest are real ambiguity such as `est` = sum/edo, `quod`/`qui`, `sive` = si/siue). Mixed in are some junk candidates (`Eus`, `sion`, `Ios`).
- **Verdict against the ruled thresholds:** correct-in-candidates **PASS** (98.7% vs >=95%). **Top-1 is NOT MEASURED**: Collatinus does not rank, so there is no top-1 to test. Therefore **Phase C ships ambiguity-only: list all candidate lemmas/parses, no "best guess" tag.** A disambiguator (LatinCy) would be a separate step with its own sample.
- **Caveats:** (1) I checked lemma presence, not the full morphological parse; parse correctness is unverified. (2) One-model hand check by Sonnet, so a spot audit by Wilson is worthwhile. (3) Abbo is classical-spelling; the **medieval-spelling stress test is still owed** on a work with `e` for `ae`, `ci/ti`, etc. before the rollout. (4) The pycollatinus lexicon is Collatinus's core lexicon, not the larger extension set.

## Next
1. Build `words.json` + lemma bundle for 9741 (tokens -> all candidates), with sentence/paragraph keys from the `⟦pN⟧/⟦sN⟧` markers.
2. Lexicon bundles: pull Du Cange (PD) and L&S (BY-SA; read the repo LICENSE first); join on lemma, with a lemma-form mapper (Collatinus `uita`/`canon` vs headwords `vita`).
3. Popup UI in `site/` build; nothing deployed until after Oct 20.

## Progress 2026-10-15 (later)
- **Licence closed:** PerseusDL/lexica `license.md` = CC BY-SA 4.0, and the L&S XML header says the same. Source on disk (gitignored): `sources/lexica/ls/ls.xml` + LICENSE.md.
- **Built for 9741:** `site/pl/139/canones.words.json` (4,280 forms, 3,513 lemmas, ~100 KB gz; morph labels translated from Collatinus's French to English abbreviations) and `canones.lex-ls.json` (L&S entries, first 500 chars, max 3 homographs per lemma). Scripts: `scripts/build-words.py`, `scripts/build-lexicon-ls.py`. L&S covers 91% of lemmas; the misses are Roman numerals, medieval words (`abbatia`, `episcopium`, `degradatio`, `sacerdus`) and a few Collatinus oddities: exactly the gap Du Cange fills.
- **Du Cange is the open item.** No clean digitization exists on GitHub. Route: archive.org OCR of the Favre ed. (10 vols), entry-split on the headword pattern, validate by headword sequence (alphabetical order is the detector, like note numbering). That is its own sub-project; needs a separate session and a hard-stop burn estimate (OCR text is free from archive.org's djvu; the cost is the parser + QA).
- **Then:** popup UI in the work-page builder (wrap tokens, lazy-load words + lexicon, show ALL candidates, label automatic, credit Collatinus + Perseus BY-SA).

## Du Cange, route B (full entry split), 2026-10-15 — Sonnet

**Sources (all archive.org Google/Phaidra OCR of Favre ed. 1883–87, PD; on disk gitignored under `sources/lexica/ducange/`, split output in `.../split/v*.jsonl`):** vol I `bub_gb_GjpmqIRiyCMC` (poor) + `glossariummedia00favrgoog` (good, use first), II `bub_gb_rfItAAAAIAAJ` + `glossariummedia01adelgoog` (C read as G), III `glossariummedia00canggoog` + `glossariummedia00welsgoog`, IV `Glossarium-…-vol-4-PHAIDRA_o_109008` (single scan), V `glossariummedia00adelgoog` + `glossarium-mediae-et-infimae-latinitatis`, VI `glossariummedia01welsgoog` + `dominoducange00iigoog` + `bub_gb_b1AJAAAAQAAJ`, VII `glossariummedia01canggoog` + `bub_gb_2_UtAAAAIAAJ`, VIII `Glossarium-…-vol-8-PHAIDRA_o_102345` (single). Vols IX–X (supplement/index) NOT used. Do not use the 1937 reprint items (rights unclear).

**Method (`scripts/ducange-split.py`):** headwords are set in CAPITALS, often behind OCR debris (`* `, `1 2.`, `° `, a glued `l`/`T`), with 0/1 for O/I. Candidate line = caps word at line start; then the **longest alphabetical chain per volume** (LIS) keeps true headwords and drops stray caps lines. Alphabetical order is the detector, as with note numbers. Entry = candidate line to next chain line; running heads/page numbers stripped, line-break hyphens joined.

**Result:** ~128K entry records across 15 scans, **77K distinct headword keys** after folding OCR confusions (c/g, i/l, h/b, rn/m).
- **Headword correctness (hand check, 45 random entries):** 45/45 are genuine Du Cange headwords; ~10/45 carry OCR errors in the headword itself (`ESGOLITHA`, `AB0MINATI0`, `EXOGHAS`…); occasional merged boundary when a headword is mid-line (`FREOBORGES` + `FREDDO`).
- **Recall (gold list of 75 ecclesiastical/legal headwords I know):** 56/75 = **75%** with all scans merged. Per-scan recall by a two-scan overlap estimate was 64–86%. The rest are headwords whose OCR is garbled beyond the fold, or sit mid-line. Further parser tuning showed diminishing returns, so stopped.
- **Abbo 9741 coverage:** Du Cange entry for 1,254 lemmas; of 289 non-numeral L&S misses 47 now covered (most of the remaining 242 are Collatinus junk lemmas or inflected forms, not real gaps). Probes found: `abbatia`, `episcopium` (as an OCR'd cross-reference stub), `regulariter`, `excommunicatio`, `fidelitas`.
- **Matching (`scripts/build-lexicon-dc.py`):** exact normalised key, else OCR-folded key, but never to a headword that is itself a real Latin word (Collatinus check), so `carum` does not land on `GARUM`. The popup shows the headword AS OCR'd, with "(OCR spelling matched)". Entries whose first 200 characters are <80% letters are dropped as garbage; text capped at 420 characters; <=3 entries per lemma. Residual false matches exist (`magia`→`MAGLA`, `Talius`→`TALLUS`), visible to the reader.
- **Not done:** no LLM cleanup of text (flagged "uncorrected OCR"); vol IV and VIII have a single scan so no cross-fill; no spot audit by Wilson yet.
- **Size for 9741 (gzip):** words 100 KB, L&S 563 KB, Du Cange 216 KB, lazy-loaded on first click.

## Stress test on a second work + credits, 2026-10-15 — Sonnet
- **Credits done:** `/rights` has a new section "Word lookup: analysis and dictionaries" (Collatinus GPL-3, Perseus L&S CC BY-SA 4.0 as a separate layer, Du Cange PD uncorrected OCR); work pages that carry lookup get a footer line linking to it. Not yet in the `open-corpus` dataset card.
- **Second work: PL 162, Anselm of Laon, *Enarrationes in Cantica canticorum* (10725)**, chosen as the shipped work with the highest density of medieval-spelling markers (`ecclesie`, `celum`, `ymago`…). Result: **99.5% of 17,532 tokens analysed**, **300/300 (100%)** of a random hand-checked sample (`data/phase-c/sample-10725.tsv`, judged in context, lemma presence only) have the correct reading among the candidates. Top-1 still not measurable (no ranking), so ambiguity-only stands.
- **Finding that matters:** Migne's printed Latin is already orthographically regularised (classical `ae`, `j/v` aside), so the feared medieval-spelling problem did not appear. The real residual risk is **vocabulary and proper names** (`hierusalem`, `Hermon`, `sunamite`) and **clitic fusions** (`seipsum`), plus `ch-` spellings (`charitate`), which I fixed by adding `ch→c` and `th→t` to the spelling-variant fallback (Abbo and 10725 both rebuilt: spelling-variant hits 2 → 20 on 10725). Caveat: two works from Migne's regularised orthography, both Sonnet-judged. A work with a genuinely non-regularised edition (e.g. a later critical-spelling text) was not tested.
- **Verdict:** rollout cleared for the Latin PL works, on the ambiguity-only display.

## Storage architecture: RECOMMENDATION for Wilson's approval (not built), 2026-10-15
**Measured:** two unrelated works (Abbo 9741, Anselm 10725) share 43% of their lemmas (1,503 of 3,514 / 3,329; union 5,340) and 21% of their word forms. Per-work bundles for Abbo are ~880 KB gz (words 100 + L&S 563 + Du Cange 216). Times 172 shipped works that is ~150 MB of mostly duplicated data, and every new work adds another bundle.

**Proposal: one global, sharded lookup layer, not per-work files.**
- `/lex/forms/<first2>.json` — normalised form → candidate analyses (lemma + parse). Analysis is context-free, so it belongs to the language, not the work.
- `/lex/ls/<first2>.json` and `/lex/dc/<first2>.json` — dictionary entries by lemma initial pair (shortened as now).
- Popup fetches the form shard, then the lemma shard(s) for the lemmas it names: 2–3 small cacheable requests per first click, browser-cached across every work.
- One build script (`build-lookup.py`) walks all shipped works' Latin, analyses each distinct form once (cached), and writes the shards. **Shipping a new work = re-run it; it only adds forms.** No per-work lexicon step, which also removes the rollout (steps 4's 171 per-work builds) as a task.
- Estimated size: ~25–30K distinct lemmas -> roughly 10 MB gz for everything, versus ~150 MB; shard file count ~1–2K, well under Vercel's upload cap with `--archive=tgz`.
- Cost of the choice: popup needs network for 2–3 shard fetches (not one); a global build must run before any deploy that adds a work; Greek gets its own parallel namespace (`/lex/grc/...`).
- **Alternative (keep per-work files):** simpler and works today, but ~150 MB duplicated, and every future work repeats the build.
**Recommend the sharded global layer.** Existing Abbo per-work files become throwaway once it exists.

## Global sharded lookup BUILT, 2026-10-15 (Wilson: "keep going", read as approval of the recommendation)
- `scripts/build-lookup.py` -> `site/lex/` (gitignored, regenerable, 775 files, 22.6 MB raw / **5.5 MB gz total**, largest shard 110 KB gz). 172 shipped Latin works -> **98,351 distinct forms, 23,470 lemmas**; L&S for 19,345 lemmas, Du Cange for 6,365. 7 big form shards and 2 L&S shards are re-cut to 3 letters (listed in `site/lex/manifest.json`). Runs in ~1.5 min.
- `word-lookup.js` reads the manifest, fetches `forms/<k>`, then `ls/<k>` and `dc/<k>` per lemma; browser-cached across works. Tested in a browser on a split shard (`concilio` -> forms/con), an unsplit one, and a fuzzy Du Cange match.
- **All 172 PL work pages rebuilt** with the lookup script + footer credit (the per-work Abbo files and the three per-work scripts are deleted).
- **Preflight gained check 3b:** `site/lex` must exist, cover every shipped Latin work (count) and be newer than the newest chunk. Preflight: 8/8 OK.
- **Ship routine now:** `node scripts/build-site.mjs <idno>` -> `~/.venvs/collatinus/bin/python scripts/build-lookup.py` -> `node scripts/preflight.mjs` -> deploy. ⚠ The deploy uploads from `site/`, so `site/lex/` must be present locally at deploy time (it is gitignored).
- **Still open:** PG/Greek lookup (own namespace, needs its own accuracy check + Sophocles); Wilson's spot audit; `open-corpus` dataset-card credits; nothing deployed (hold until after Oct 20, own OK).

## Greek lookup (PG) BUILT, 2026-10-15 — Sonnet
**Tools.** Morpheus (Perseus, **MPL-2.0**, `github.com/perseids-tools/morpheus`) built from source at `~/.local/src/morpheus` (macOS, `make` with `-std=gnu89` flags per its README; outside the repo). Returns **all** analyses, so it fits the ambiguity-only display. LSJ from PerseusDL/lexica (same repo/licence as L&S: **CC BY-SA 4.0**), on disk gitignored at `sources/lexica/lsj/`. Driver: `scripts/lib/morpheus.py`; beta-code converter `scripts/lib/greek_beta.py`; layer builder `scripts/build-lookup-grc.py` -> `site/lexg/` (gitignored, 648 files, 4.5 MB raw); `word-lookup.js` is now bilingual (`lang: 'grc'`).
**Traps found (all fixed or handled):** (1) Morpheus's `cruncher` dies with SIGILL on some inputs (`ῤῥ` = `r)r(`) and then returns NOTHING for the whole batch: the driver runs chunks and bisects failures; `ῤῥ` is rewritten to `ρρ`. (2) Migne marks elision with U+00B4 AFTER the word (`ἐφ´`); the tokenizer keeps it and Morpheus gets `'`. (3) Pass order: A exact accents -> B initial capital -> C accents ignored (flagged "accents ignored in matching" in the popup). (4) LSJ headwords are beta code and capitals put the marks BEFORE the letter (`*)a`); `from_beta` handles it and keeps spaces/punctuation.
**Coverage (9 shipped PG works, 17,300 distinct forms, 16,587 form keys, 6,021 lemmas; LSJ for 5,515):** tokens analysed 82.7–99.1% per work after elision handling (Joel *Chronographia* lowest at 82.7% exact + 3.0% capital + 1.0% accent-ignored; unanalysed 13.3% there, mostly proper names).
**Accuracy (hand check, 300 random tokens across the 9 works, in context; `data/phase-c/sample-greek.tsv`):** one numeral excluded; **correct reading among the candidates for 274/299 = 91.6%** (Latin was 98.7% / 100%, i.e. Greek is meaningfully worse). The 25 misses: **15 source-OCR damage** (accents/breathings dropped, `οἱκίαν`, `Θεοῖ` for `Θεοῦ`), **6 proper names** (`Ζαμβρῆ`, `Ἀδὰμ`, `Ἰὼβ`, `Βαασσά`, `Πικάτος`, `Βασίλεων`), **4 Byzantine vocabulary** (`πανυπέραγνον`, `ἀπλουστάτη`, `ἀνεῴγνυντο`, `τουτέστιν`). So only ~3% is the tool's own gap; ~5% is our Calfa OCR text, which is a separate, known problem. Two of the 25 show a WRONG lemma rather than nothing (`Θεοῖ` -> `θεάω`, `Βασίλεων` -> `βασιλεύς`): both are OCR/name cases, but it is the risk of showing candidates for damaged text.
**Verdict against the ruled thresholds:** the >=95% correct-in-candidates bar is **NOT MET (91.6%)**, as was the case for single-analysis display anyway (no top-1). Shipped here as ambiguity-only, with a popup note that names and later vocabulary may be missing and the `/rights` text saying a misprinted word can be analysed as a different word. **Wilson to rule whether 91.6% is acceptable for Greek or whether the Greek layer should hold until Sophocles (Byzantine vocabulary) is added.** Strong argument for the latter: none of the 25 misses would be fixed by Sophocles except the ~4 vocabulary ones, so waiting buys little; the dominant cost is OCR.
**Not done:** Sophocles (E. A. Sophocles, *Greek Lexicon of the Roman and Byzantine Periods*, 1887) — needs a Du Cange-style OCR split; Greek OCR headwords are riskier than Latin and it covers only ~4/300 tokens' worth of gaps here; not recommended until the OCR-damaged source text itself is improved. Preflight gained check 3c (`site/lexg` covers every `src/greek` work). `/rights` and the PG footer credit Morpheus and LSJ. All 9 PG pages and all 172 PL pages rebuilt with the shared script.

## Wilson's ruling on Greek (2026-10-15)
**Greek lookup accepted as it stands** (ambiguity-only, 91.6% correct-in-candidates, warnings in popup and `/rights`). Sophocles is NOT being built; revisit only after the Calfa OCR text improves. Phase C is built locally for all 172 PL + 9 PG works. Remaining before deploy: Wilson's spot audit (optional), `open-corpus` dataset-card credits, then the deploy itself (held until after Oct 20, own OK).
