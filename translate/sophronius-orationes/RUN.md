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
- Fable anchor: launched 2026-11-05 (Synodical opening + Or. II §§1–2, CARD, GLOSSARY, register section).

## Plan
1. Translation: 6 Opus briefs × 3 chunks (A so-001–003 · B 004–006 · C 007–009 · D 010–012 · E 013–015 ·
   F 016–018), three at a time (rule 5), from `kt-scaffold.py sophronius-orationes brief …`.
2. Sweep: section numbering, glossary clashes, seams between chunks.
3. Image check of every flagged row (`kt-sheet` → `kt-verdict` → `kt-apply` → `checked/`).
4. Apparatus: Migne's foot-of-page notes + VARIÆ LECTIONES, every page (Sonnet), `place.py`.
5. Site build (kt-to-site CONF, mark/align, verify, plate-gate, build-site, lookup, preflight).
6. Blind polarity read (Opus), then Wilson: about/bio text, deploy (own OK), push (own OK), `englishState: ours`.
