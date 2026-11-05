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

## Plan
1. Translation: 6 Opus briefs × 3 chunks (A so-001–003 · B 004–006 · C 007–009 · D 010–012 · E 013–015 ·
   F 016–018), three at a time (rule 5), from `kt-scaffold.py sophronius-orationes brief …`.
2. Sweep: section numbering, glossary clashes, seams between chunks.
3. Image check of every flagged row (`kt-sheet` → `kt-verdict` → `kt-apply` → `checked/`).
4. Apparatus: Migne's foot-of-page notes + VARIÆ LECTIONES, every page (Sonnet), `place.py`.
5. Site build (kt-to-site CONF, mark/align, verify, plate-gate, build-site, lookup, preflight).
6. Blind polarity read (Opus), then Wilson: about/bio text, deploy (own OK), push (own OK), `englishState: ours`.
