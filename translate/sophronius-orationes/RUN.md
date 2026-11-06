# RUN: Sophronius, *Epistola synodica* + *Orationes* (PG 87.3, 3147–3364) via the kt method

Started 2026-11-05 (Opus coordinator; Wilson: "go, fable anchor and then opus"). Fourth kt-method work, after Dorotheus,
Moschus and Procopius. Same volume and scan as Moschus/Procopius (`raw/pg087c/087c.pdf`, Kraken pages
`raw/kraken/sophronius-orationes/`, pp. 187–298). Burn estimate given at the go: ≈4–4.5M all-in.

## What Migne prints here, and what we translate
| cols | pdf pp. | piece | Greek? | chunks |
|---|---|---|---|---|
| 3147–3200 | 188–214 | *Epistola synodica ad Sergium CP.* | yes | so-001–006 |
| 3201–3212 | 215–220 | Or. I *In Christi natalitia* | **Latin only** | not in this run |
| 3213–3216 | 221–222 | Ballerini's *Monitum* to Or. II (Latin) | — | not translated |
| 3217–3288 | 223–258 | Or. II *In SS. Deiparae Annuntiationem* (Αʹ–Νʹ) | yes | so-007–012 |
| 3289–3300 | 259–264 | Or. III *De Hypapante* | **Latin only** | not in this run |
| 3301–3308 | 265–268 | Or. IV *In exaltationem S. Crucis* | yes | so-013 |
| 3309–3316 | 269–272 | Or. V *De festo S. Crucis* (heading at p-0269:17, after Or. IV's Amen; complete, not a fragment) | yes | so-013 |
| 3317–3320 | 273–274 | Or. VI *De SS. Angelis et Archangelis* | **Latin only** | not in this run |
| 3321–3354 | 275–291 | Or. VII *Encomium in S. Joannem Baptistam* (αʹ…) | yes | so-014–017 |
| 3355–3364 | 292–296 | Or. VIII *In SS. App. Petrum et Paulum* (+ 2 excerpts) | yes | so-018 |
| 3365– | 297– | *De peccatorum confessione* | yes | ⚠ runs past the Kraken run (p. 298); not in this run |

✅ **Wilson, 2026-11-05: "Let's do them in Latin"; "Opus go"** (≈0.75M on top). Or. I, III, VI → so-019, so-020, so-021
from the copyA Latin OCR (`scripts/kt-scaffold-latin.py`, new: column-by-column, tags pNNNN.L|R.LL, line boxes in
`<chunk>.lines.tsv` for the image check). True extents: Or. I pp. 215–220 (ends with Mai's note that the epilogue is
lacking); Or. III p-0258 lower half → top of p-0265 (above Or. IV's Greek title); Or. VI from its heading partway down
p-0272 → top of p-0275 (above Or. VII's Greek). Card supplement `CARD-LATIN.md`; 3 Opus briefs launched together.
⚠ The site builder has never built a PG work with no Greek: build work owed before these ship. Or. I's Greek exists
outside Migne (Usener 1886, if memory serves; not verified): a later option for a note.
- ⚠ **Scaffold defect found + fixed (2026-11-05):** Kraken's column boxes start a few px below the first line, so v1
  of `kt-scaffold-latin.py` dropped words, sometimes WHOLE LINES, at column tops (Or. I: 4 whole lines + 2 partial;
  Or. III: 1 whole + 1 partial + title lines; Or. VI: 2 partial). Fixed with PAD = 70 px (also lets in band letters,
  some running heads and footnote lines, which translators log as stray). v1 scaffolds kept as `so-0NN.v1.md`: the
  so-019/020 OCR tables were written against v1 tags, so remap them by line text before the image check.
- ✅ so-021 Or. VI done (≈0.14M): 320 OCR rows on 2,500 words (the Latin OCR is poor: ≈130 per 1,000). Column-top fix
  patched in by the translator. One doubt: p0274.L.34 `f et aqui`.
- ✅ so-019 Or. I done (≈0.16M): 308 OCR rows; 6 column-top restorations patched in. Doubts: p0216.R.43 `euchobruto`,
  p0217.L.59 `rec enim` → *nec enim* (a NEGATIVE rests on it: image-check first), p0219.L.36, p0218.R.45.
- ✅ so-020 Or. III done (≈0.16M): 403 OCR rows, §§1–23 under 5 chapter heads; restorations + full source line patched in.
  Doubts: p0260.L.15 *nula umbra* (nulla would invert the sense), p0262.L.30, p0263.L.10. *conjunctio* rendered "union"
  (T note: hypostatic union, not the Nestorian word).
- **Latin run total ≈0.47M.** ≈1,030 Latin OCR rows (≈90 per 1,000 words, vs ≈25 for the Greek): the image check for
  these three is mostly æ/œ, u/n, c/e. ⚠ so-019/020 rows near restored lines use v1 numbering (one line off in cols 3204,
  3206, 3209, 3210, 3293): remap by text against `so-0NN.v1.md` before cropping.
⬜ *De peccatorum confessione*: needs its remaining pages run through Kraken (p. 299 on) before it can be scheduled.

Rule 8: the Synodical Letter is already in English (Allen 2009). **Wilson, 2026-11-05: translate it anyway**, with an
`elsewhere` pointer to Allen and the "New" badge.

## Prep (2026-11-05, no translation tokens)
- `kt-lost.py`: p-0242 (§32 opening) and p-0296 (3 lines: Καὶ μετὰ βραχέα + Salome excerpt) restored from the image
  → `RESTORED-LINES.tsv`; p-0246 false alarm. `kt-rules.py` re-run (772 changes).
- Column map `data/pg-column-maps/pg087c.json` extended to pp. 187–298, same linear law (left col = 2·page + 2771),
  plate-verified off the running heads at pp. 189 (3149), 223 (3217), 265 (3301), 297 (3365). greekSide from the
  Kraken regions; 17 pages carry no Greek region (Latin-only orations, Ballerini's Monitum, p. 187).
- 18 scaffolds (`CHUNKS.tsv`, ≈32,900 Greek words incl. leaked running heads), cut at section marks or sentence ends.
- ✅ Fable anchor DONE 2026-11-05 (≈0.16M): `ANCHOR-synodica.en.md` (p-0188:3–p-0189:48) + `ANCHOR-or2.en.md` (p-0223:1–p-0224:8),
  `CARD.md`, `GLOSSARY.md`, `translation-style.md` § "Seventh-century dogmatic letter and festal homily (Sophronius)" R1–R8.
  Decisions for Wilson to see: ἐνέργεια = operation, θέλημα = will / θέλησις = volition; Θεοτόκος = Theotokos vs Θεομήτωρ =
  Mother of God; ὁμοούσιος = consubstantial; Sergius = "you" (honorific plural throughout); μερισμός = partition vs
  διαίρεσις = division. Image-check items from the anchor: p0223.04 `Αντον. ΒΑν.η` (editorial line?), p0223.43 `νοταΕ.` leak.
- Step 1 launched 2026-11-05: briefs A (so-001–003), B (004–006), C (007–009), Opus, 3 at a time; D–F follow.
  - ✅ B done (≈0.22M): so-004 43 OCR rows, so-005 22, so-006 30. Leaked VARIÆ LECTIONES lines (p0202.54, p0203.55,
    p0211.49) logged `stray`. ✅ **p0214.32–34 checked on the image: Migne prints SEVEN ROWS OF DOTS in the Greek column,
    a lacuna in his Greek that only the Latin fills** (*ut discretionis … mercedem munifice recepturi*). Not a Kraken drop;
    the translator's "…" and T note stand. Terms decided by B (sweep against A): κατάθεμα = curse, συνέδριον = session,
    πρόεδρος = president, ἑνάς = henad, ταπείνωσις = humility vs ταπεινότης = lowliness, θεοσημεῖαι = God-showing signs.
  - D (so-010–012) launched when B finished.
  - ✅ A done (≈0.25M): so-001 51 rows (15 = anchor's), so-002 57, so-003 49. New sources: p0194.14–18 = Gregory
    Thaumaturgus *Expositio fidei*; p0198.44–p0199.01 = Leo's Tome (Ep. 28.4). ✅ **Both suspected losses checked on the
    image and both are MIGNE'S PRINTED TEXT, each carrying a note call**: p0197.31 "Ὁμοίως δὲ καὶ ἐν θεότητι τέλειον (7)·"
    (the manhood half is absent from the Greek, present in the Latin) and p0199.23 "ἀπεστέρηντο ¹⁶" (no negative; Latin
    *non erant frustratæ*). Relabel both `print`; the apparatus step reads notes 7 and 16. Glossary clash to sweep:
    δεσποτεία vs κυριότης (both "lordship" in the glossary; A gave δεσποτεία = dominion).
  - ✅ C done (≈0.25M): so-007 41 rows, so-008 39, so-009 59; §§1–29 (so-009 ends inside §29). Section marks repaired
    by sequence (Θʹ, Ιʹ, ΙΓʹ, ΙΔʹ, ΙΕʹ, ΙΘʹ, ΚΓʹ). Image-check the foot-of-column NOTAE leaks p0228.54, p0231.40,
    p0234.47, p0237.31 for lost lines. C changed the anchor's title range to "1–10".
  - E (so-013–015) and F (so-016–018) launched as A and C finished.
  - ✅ D done (≈0.21M): so-010 42 rows, so-011 53, so-012 46; §29 (cont.)–§50, oration complete. ✅ **p0240.42 RESTORED**:
    the column's last line δωρούμενον (band D) was never segmented by Kraken (so kt-lost cannot see it, even with
    KT_LOST_MIN=3, which found nothing new); read on the image, added to text/ + RESTORED-LINES.tsv, kt-rules re-run,
    so-010 English/note/OCR row fixed by the coordinator. Doubts for the image check: p0246.23 ἀπότευξιν, p0250.18
    (noun lost? Latin *carnem*), p0247.43 second glued B, p0255.05 συνόμιλλοι.
  - ✅ E done (≈0.26M): so-013 58 rows, so-014 32, so-015 31; Or. IV + V complete, Or. VII §§1–9. ⚑ **E corrected the
    card**: Or. V is NOT a fragment. p-0269:1–15 ends Or. IV (doxology + Ἀμήν at :15) and Or. V's own heading stands at
    p-0269:17 (confirmed in the Greek by the coordinator; CARD.md and the table above fixed). Doubts for the image check:
    p0270.27 πανόλου, p0270.45, p0271.29 σου/σε, p0277.15 οὐ συνελήφθη, p0279.16 ἄδετον, p0277.56, p0279.39, p0282.52,
    p0283.04.
  - ✅ F done (≈0.27M): so-016 47 rows, so-017 42, so-018 57; Or. VII §§10–20 (Amen) + Or. VIII §§1–6 with the two
    excerpts. ⚑ F reads Or. VIII's heading τῇ δ᾿ ἡμέρᾳ τῶν Γενεθλίων as δʹ = "on the FOURTH day of the Nativity" (§6
    supports it): image-check p0292.03. Band call p0285.26 Γ vs p0285.31 Σ. Latin-only clauses not supplied:
    p0283.47, p0284.28 (δίκαιοι), p0286.12 (ὑπό, Matt 3:14), p0288.36.

## ✅ Step 1 DONE 2026-11-05: all 18 chunks translated (Opus ×6 ≈1.46M + Fable anchor ≈0.16M = ≈1.62M)
≈799 OCR rows across the 18 tables (incl. the anchors' 21, repeated in so-001/so-007). Coordinator image reads done so
far: p0214 lacuna (Migne's dots), p0197.31 + p0199.23 (Migne's text, note calls 7/16), p0240.42 (restored), Or. V
division (Greek). NEXT = step 2 sweep, then step 3 image check of every row (Moschus method: `kt-sheet.py` →
read sheets → `kt-verdict.py` → `kt-apply.py`; ≈800 rows, a fresh session's work).

## ✅ Step 2 DONE 2026-11-05: sweep (coordinator, no agents)
- **δεσποτεία = dominion** (so-005 "lordship" → "dominion"; so-002 lists it beside κυριότης = lordship, which is "lordship" in all 4 chunks). Glossary fixed.
- **συζυγία = pairing** (so-007 + `ANCHOR-or2` "every conjunction" → "every pairing": the generation refuses sexual coupling, and
  "conjunction" is συνάφεια, Nestorius's word; so-018 already sets συζυγία "pairing" beside συνάφεια "conjunction"). All other
  "conjunction"s checked = συνάφεια.
- ταπείνωσις: "humility" (virtue, so-006) vs "humbling" (the act against ὕψωσις, so-018; figura etymologica, so-008): sense-split, kept;
  ταπεινότης = lowliness throughout. ἀγάπησις: "love" in the Letter (×2), "loving" in so-018 (×8, beside ἀγάπη "love"): not a
  technical term, kept, logged in the glossary.
- Θεοτόκος/Θεομήτωρ: every Greek form checked against the English, 001–018; all clean (the surplus = chunk titles; Μήτηρ ἔσῃ Θεοῦ
  p0239.18 = Mother of God). Duplicate Theotokos T note dropped from so-004 (Letter already has it at so-002 [^7]); so-004 notes
  renumbered 1–12, markers verified. Per-oration first-use notes (so-007, so-019, so-020) kept: each oration reads alone.
- Section numbers continuous: Or. II 1–50, Or. VII 1–20, Or. VIII 1–6, Or. III 1–23 under 5 chapters. ⚑ Greek marks **ιαʹ (11) and ιηʹ (18)
  are missing from the Or. VII scaffold** (the English supplies them by sequence): image-check, add to the doubt list.
- Seams: 17 boundaries read, continuous; chunk ranges contiguous in CHUNKS.tsv. No doubling.

## ✅ Step 3 DONE 2026-11-05: image check of every flagged Greek row (coordinator, in session)
All **641** Greek OCR rows of kind ocr/doubt/print/subscript (the Latin-only so-019–021 rows are NOT in this: their
pNNNN.L|R tags need a Latin sheet builder, still owed) read on the plates in three passes: `kt-sheet.py` (27 sheets) →
`--redo` whole lines (19 sheets) → wide full-line crops for the 31 rows cut at the right edge (4 sheets, scale 0.6).
Verdicts in `IMAGE-CHECK.tsv`: **R 408 · M 89 · P 92 · ? 52.** `kt-apply.py` → `raw/kraken/sophronius-orationes/checked/`
(379 applied, 25 applied~, 11 already); **10 cross-line readings patched line-exact in `verify/GREEK-PATCHES.tsv`** (all
found). `verify/PRINT-ERRORS.tsv` = the 89 M rows (the [sic:] layer).
- ⚑ **Translator labels vs the plate: of ≈560 rows labelled `ocr`, 89 are Migne's own misprints** (≈1 in 6, the Moschus
  rate again) and ≈60 more are the plate's real text, which the translator emended (P).
- ⚑ **Note calls read as letters (the class to know):** p0211.13 φησιοις = φησι + calls 34·35 (the doubt is gone: English
  fixed, row → R); p0228.29 », p0239.40 ʃ, p0250.13 ʃ, p0250.39 ς, p0252.24 αι, p0256.18 ʃ, p0292.43 "(2)" = note calls.
  Calls standing beside doubted words: p0197.20 κατ᾿ αὐτὸ (7), p0205.02 ἄφραστον (26), p0205.16 φήσωμεν (28), p0209.56
  Ἑλκεσέως (32), p0211.34 Πιθιανῶν (36·37), p0228.29 ἀμοτρεῖ (10), p0246.23 ἀπότευξιν (51), p0247.54 μητρὸς (57), p0255.05
  συνόμιλλοι (80), p0197.01 φυσικῇ (8). **The apparatus step reads those notes first.**
- Settled doubts: **p0292.03 prints δʹ: "the FOURTH day of the Nativity" stands.** p0296.11: a blank where καὶ should be
  (M). p0228.33: the plate ends ἐναυλίζε- and sets σθαι. on a short line Kraken never segmented (R restores the word).
- ⬜ **52 undecided** stand as `ruled/` reads them: mostly breathings on capitals the 1-bit scan cannot show, and crops
  kt-sheet matched to the wrong line. ⬜ **≈30 P rows change the sense** (e.g. p0209.29 ἡμῶν, p0285.10 ἥνωσε, p0233.17
  τελειωμένη, p0282.49 θάτερον, p0291.13 καταλειψομένην, the so-018 optatives): the English follows the emendation, so
  each needs the English brought to the plate or a T note marking our conjecture against Migne. That is step 3b.

## ✅ Step 3b DONE 2026-11-05: the 36 P rows (Opus agent, coordinator-reviewed)
Each P row (plate = the OCR's form, so the translator's "reading" was an emendation against Migne) resolved: **22 re-Englished from
the printed Greek** (e.g. p0209.29 "our full assurance", p0233.17 "brought to completion", the so-018 optatives "may we gather",
"would wish") or confirmed already following it; **14 kept as our conjecture with a T note naming Migne's printed form** (p0193.45,
p0199.24, p0198.17, p0203.12, p0235.36, p0276.53, p0282.49, p0283.04, p0283.16, p0285.10, p0288.10, p0290.11, p0291.13, p0296.41).
OCR rows relabelled `print`. ⚑ The agent thinks p0235.36, p0286.55, p0276.53 are more likely Migne's misprints (M) than his text
(P), and that p0238.15's "articular infinitive" comment is wrong (the plate has finite προσδέδεξαι). English is right either way;
it only affects the [sic:] layer at build. Every chunk's note markers were verified 1…n.

## ✅ Step 3c DONE 2026-11-05: image check of the LATIN-only orations (so-019–021), coordinator, in session
New `scripts/kt-sheet-latin.py` (crops from `<chunk>.lines.tsv` djvu boxes; finds the line by text, which absorbs the v1/v2
tag offset). `kt-verdict.py` gained `--rows=` / `--out=`. Verdicts in `IMAGE-CHECK-LATIN-so-0NN.tsv`: **949 rows: R 910 · M 21 ·
P 13 · ? 5.** The Latin OCR is noisy but the translators' readings held at ≈96%. **What the plate changed in the English:**
so-019 *Lætam* (not *Piam*: "Joyful … day"); so-020 *Hæc … quæ* (the schools, "which judge"), *nuda umbra* ("a bare shadow",
doubt closed), *rati* ("as they supposed", doubt closed), *naturæ suæ habitu* ("from the condition of its own nature"); so-021
*infanda* ("unspeakable swiftness"), *et aquæ* ("and waters", doubt closed). Row-only corrections: *longe*, *cilicini*, *emi-/
gravit*, *Adamo tantum* (no negative: English already followed the print), *quæ* (p0264.R.17).
⬜ **Open:** p0217.L.59 *(r/nec enim*: the first letter is damaged ON THE PLATE and the English's negative rests on it. **A second
witness is needed**; `data/volumes.json` lists PG 87 copies (087-1/2/3), only copyA is on disk. ⬜ The Latin R rows are recorded
but not yet applied to a "checked" Latin text: kt-to-site's Latin-only build (new work) must take them from these TSVs.

## ✅ Step 4 DONE 2026-11-05: Migne's apparatus read off every page (Sonnet ×7 briefs) + `notes/place.py`
`scripts/mp-note-crops.py sophronius-orationes` (112 pages, 584 tiles, `notes/img/` gitignored) → 6 briefs `notes/task-{1..6}.md`
(3 at a time, ≈1.4M tokens) → `notes/result-{1..6}.jsonl`. Brief 1's agent admitted it guessed pp. 187–190 (images came back empty
for it) → **`task-1b` re-read pp. 187–192 clean; `result-1b.jsonl` REPLACES result-1 for those pages** (done in place.py).
**430 notes** (numbered 4xx, lettered 5, notae 4, asterisk 1, unmarked 1); `APPARATUS.json`: **132 Greek-keyed notes placed
candidates · 298 unplaced** (Latin-column scripture locators etc. → cruces page). 4 Greek anchors not on the checked page
(p228 ἀμαυρεῖ, p237 ἀκίνητον, p241 δηλοῦται, p258 ἀψίχορος) + 15 with no located line → kt-to-site fuzzy match or cruces.
⚑ Weak spots: ≈45 markers illegible (kept null, never completed); thumbnail-only anchors pp. 239–243, 251–262; Or. III has TWO
number series on the same pages (scripture vs parenthesised) so markers collide: tell apart by text; p-0258 "43·1" compound;
p-0221/222/298 notes are in no chunk (Ballerini preface, Mai) → cruces only. Notes 7 & 16 of the Synodica + the Step-3 call
list (p197.20 κατ᾿ αὐτὸ…) are in result-1/-2/-3: read them when editing T notes.

## Plan
1. Translation: 6 Opus briefs × 3 chunks (A so-001–003 · B 004–006 · C 007–009 · D 010–012 · E 013–015 ·
   F 016–018), three at a time (rule 5), from `kt-scaffold.py sophronius-orationes brief …`.
2. Sweep: section numbering, glossary clashes, seams between chunks.
3. Image check of every flagged row (`kt-sheet` → `kt-verdict` → `kt-apply` → `checked/`).
4. Apparatus: Migne's foot-of-page notes + VARIÆ LECTIONES, every page (Sonnet), `place.py`.
5. Site build (kt-to-site CONF, mark/align, verify, plate-gate, build-site, lookup, preflight).
6. Blind polarity read (Opus), then Wilson: about/bio text, deploy (own OK), push (own OK), `englishState: ours`.

## ✅ Step 5 DONE 2026-11-05 (local, nothing pushed or deployed): site build of the GREEK chunks so-001–018 (18 site chunks, preflight 9 of 10)
Registry key `sophronius-hierosolymitanus-orationes` (slug `orationes`, DRAFT; about/bio/RECENT line are DRAFTS for Wilson). `CONF['sophronius-orationes']` in
`kt-to-site.py` has `maxn=18` (so-019–021 are skipped until LATIN-ONLY-SPEC is built: drop `maxn` then) and `unwrap=True` (the so- cards are hard-wrapped; single
newlines had become 139 "paragraphs"). Tables made by `scripts/so-tables.py` (after `MP_WORK=sophronius-orationes MP_RANGES=188-214,223-258,265-272,275-296 python3
scripts/mp-bands.py`): GREEK-BREAKS (a paragraph per section numeral, garbled ones too, + Or. V title), GREEK-DROPS (33 NOTAE headings / leaked variant lines /
lone letters / one Latin siglum line), GREEK-BANDS (glued band letters stripped), and 69 patches appended to GREEK-PATCHES from the OCR-table rows of kind
stray/space/heading (translator readings, not plate-checked). 110 of 132 Greek-keyed Migne notes placed in the Greek, the rest in the cruces. `[sic:]` layer NOT done
(89 rows in PRINT-ERRORS.tsv, as for Moschus). Blind polarity read NOT done (preflight's last gate). Site chunk order is so-order (0001–0018); the Latin-only spec
interleaves them by column later (a renumbering).

## ✅ Latin-only orations built into the site 2026-11-05 (so-019/020/021 = 0007/0014/0016 of 21; local, nothing pushed or deployed)
LATIN-ONLY-SPEC.md steps 1–8 done; preflight 9 of 10 (blind polarity read owed, Wilson's go). New: `scripts/kt-apply-latin.py`
(0 NOT FOUND; R 910, table 80+2, overrides 39, spec drops 13), `scripts/kt-latin-residue.py` (run with system python3 +
`PYTHONPATH=~/.venvs/collatinus/lib/python3.14/site-packages`: that venv has no `bin/python` on this Mac), `verify/LATIN-*.tsv`,
`verify/SIC-MAP.json` (4 [sic:]), place.py Latin pass (97 of 100 Latin-column records placed + Mai's note dropped), builder/mark/align/index
changes per spec. Deviations from the spec, each reported to Wilson: (1) 2 table ocr rows absent from the image check (pipe in the printed
cell) were applied as table rows; stray count is 61 not 60; (2) 8 foot-of-column apparatus lines + unlogged `*`/`“`/`„` marks were dropped/stripped
so the step-3 grep gives 0 (spec drop list had only 13 furniture lines); (3) residue fixes live in `verify/LATIN-RESIDUE-FIXES.tsv`, not in
LATIN-OVERRIDES (keeps M 21 / P 13 / ? 5); (4) gutter-letter rule is position-based (bands ~1330 px apart), the lone `p`/`ç` at p0259.R.45,
p0273.R.45, p0274.R.30 are gutter D/D/C read at the plate; (5) band/anchor id dedupe applies only to pages with Latin-only runs (shipped
Moschus/Procopius pages carry a repeated band id and must rebuild byte-identical); (6) WIDE_PARA applies to the Greek chunks only.
