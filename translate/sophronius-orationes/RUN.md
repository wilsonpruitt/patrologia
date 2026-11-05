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
| 3309–3316 | 269–272 | Or. V *De festo S. Crucis* (Greek begins mid-sentence at 3309) | yes | so-013 |
| 3317–3320 | 273–274 | Or. VI *De SS. Angelis et Archangelis* | **Latin only** | not in this run |
| 3321–3354 | 275–291 | Or. VII *Encomium in S. Joannem Baptistam* (αʹ…) | yes | so-014–017 |
| 3355–3364 | 292–296 | Or. VIII *In SS. App. Petrum et Paulum* (+ 2 excerpts) | yes | so-018 |
| 3365– | 297– | *De peccatorum confessione* | yes | ⚠ runs past the Kraken run (p. 298); not in this run |

⬜ Wilson, later: Or. I (the 634 Christmas sermon), III and VI exist in Migne only in Latin. The Moschus/Dorotheus
precedent leaves Latin-only stretches untranslated. Say if any of them should be done from the Latin instead.
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

## Plan
1. Translation: 6 Opus briefs × 3 chunks (A so-001–003 · B 004–006 · C 007–009 · D 010–012 · E 013–015 ·
   F 016–018), three at a time (rule 5), from `kt-scaffold.py sophronius-orationes brief …`.
2. Sweep: section numbering, glossary clashes, seams between chunks.
3. Image check of every flagged row (`kt-sheet` → `kt-verdict` → `kt-apply` → `checked/`).
4. Apparatus: Migne's foot-of-page notes + VARIÆ LECTIONES, every page (Sonnet), `place.py`.
5. Site build (kt-to-site CONF, mark/align, verify, plate-gate, build-site, lookup, preflight).
6. Blind polarity read (Opus), then Wilson: about/bio text, deploy (own OK), push (own OK), `englishState: ours`.
