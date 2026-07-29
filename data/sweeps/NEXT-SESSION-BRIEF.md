# NEXT SESSION — corpus-wide polarity sweep (Opus, all 68 remaining works)

**Approved by Wilson 2026-07-28.** Set up now, run next session. Model: **Opus
throughout** — the two-tier design was tried on PL 196 and failed (Sonnet missed
38% of sites). Do not economise the finder tier; it is the whole job.

**Fix policy — Wilson's call, 2026-07-28:**
- **OUR errors are FIXED IN PLACE.** A negation the Latin prints and the English
  drops, or a word translated as its opposite to rescue a broken sentence, is an
  unambiguous bug. Fix the English, log a crux, re-run `verify-english`.
- **Migne's defects are REPORTED, never fixed.** Rendered literally per Pattern 7,
  logged as cruces. The plate's contradictions are the edition's evidence.

## Scale

**68 works · 454 chunks · ~510K Latin words · 89 agent units · ~15 rounds of 6.**
Estimated ~5.4M subagent tokens at the observed Opus rate (~12K/chunk). This is
several hours of wall-clock. It does not need to finish in one session — the unit
table below is the checklist; mark units done as they land.

**Start with PL 175/176.** They are the largest and earliest-translated works
(11064 at 80 chunks, 11066 at 61), done under the since-withdrawn "intended
reading" precedent — which is the exact convention that produces silent repairs.
Highest expected yield per token.

## What is being hunted

Read `data/sweeps/pl196-polarity/REPORT.md` first — it has the confirmed defect
inventory and the method findings. In short, a defect where **one word or one
letter reverses the meaning of a sentence**, in either of two places:

- **Migne's plate** — dropped/intrusive `non`, `nec`, `nisi`, `haud`; `noluit` for
  `voluit`; `Nec` for `Nam`; `Illic` for `Hic`; `induitur` for `exuitur`;
  `veritatem`/`vanitatem` for `unitatem`; `azyma` for `zyma`; `pater` for
  `filius`; `invisibilem` for `visibilem`.
- **Our own English** — a printed negation dropped (11536/1085D), or a word
  rendered as its opposite so a broken sentence would read (11547/0260D). See
  `translation-style.md` 7a.

**Signature in both cases: the sentence contradicts its own immediate neighbour.**

## Rules the last sweep proved necessary

1. **BLIND. Agents must not read `cruces.md` or anything under `data/sweeps/`
   before forming findings.** Every stage-1 agent given the cruces file returned
   "all already logged, nothing new"; blind readers on the same works found four
   live defects. Reconcile against cruces *after*.
2. **No mechanical pre-filter.** Counting negation particles fails both ways and
   scored the one confirmed case clean. Do not build it again.
3. **Name the word or do not report it.** Quote the contradicting neighbour.
4. **Do not report:** merely difficult passages; attested medieval spellings;
   gender/number mismatches; column-band observations of any kind; garbles that
   produce nonsense rather than the OPPOSITE claim; numerical/citation
   disagreements; Migne's own bracketed supplements (`homo [non] possit`) or his
   printed `( sic )`.
5. Set `"side": "migne" | "ours"` on every finding. Output one JSON per work to
   `data/sweeps/corpus-polarity/<idno>.json`, same schema as the PL 196 run.

## The agent prompt

Reuse the PL 196 blind-Opus prompt verbatim (any of the `opus-*` launches from
2026-07-28), changing only the assignment and output path, plus the both-sides
clause from the 11534/11542 launch, which is the version that also hunts our own
errors.

## Unit table — 89 units, ~9 chunks each

| # | chunks | assignment |
|---|---|---|
| 1 | 9 | 11064 PL175 — Expositio in Hierarchiam Coelestem S. Dionysii (chunks 0000–0008) |
| 2 | 9 | 11064 PL175 — Expositio in Hierarchiam Coelestem S. Dionysii (chunks 0009–0017) |
| 3 | 9 | 11064 PL175 — Expositio in Hierarchiam Coelestem S. Dionysii (chunks 0018–0026) |
| 4 | 9 | 11064 PL175 — Expositio in Hierarchiam Coelestem S. Dionysii (chunks 0027–0035) |
| 5 | 9 | 11064 PL175 — Expositio in Hierarchiam Coelestem S. Dionysii (chunks 0036–0044) |
| 6 | 9 | 11064 PL175 — Expositio in Hierarchiam Coelestem S. Dionysii (chunks 0045–0053) |
| 7 | 9 | 11064 PL175 — Expositio in Hierarchiam Coelestem S. Dionysii (chunks 0054–0062) |
| 8 | 9 | 11064 PL175 — Expositio in Hierarchiam Coelestem S. Dionysii (chunks 0063–0071) |
| 9 | 8 | 11064 PL175 — Expositio in Hierarchiam Coelestem S. Dionysii (chunks 0072–0079) |
| 10 | 9 | 11066 PL175 — Quaestiones in Epistolas Pauli (chunks 0000–0008) |
| 11 | 9 | 11066 PL175 — Quaestiones in Epistolas Pauli (chunks 0009–0017) |
| 12 | 9 | 11066 PL175 — Quaestiones in Epistolas Pauli (chunks 0018–0026) |
| 13 | 9 | 11066 PL175 — Quaestiones in Epistolas Pauli (chunks 0027–0035) |
| 14 | 9 | 11066 PL175 — Quaestiones in Epistolas Pauli (chunks 0036–0044) |
| 15 | 9 | 11066 PL175 — Quaestiones in Epistolas Pauli (chunks 0045–0053) |
| 16 | 7 | 11066 PL175 — Quaestiones in Epistolas Pauli (chunks 0054–0060) |
| 17 | 8 | 9076 PL117 — Commentarium in Cantica canticorum (chunks 0000–0007) |
| 18 | 8 | 9076 PL117 — Commentarium in Cantica canticorum (chunks 0008–0015) |
| 19 | 7 | 9076 PL117 — Commentarium in Cantica canticorum (chunks 0016–0022) |
| 20 | 9 | 10725 PL162 — Enarrationes in Cantica canticorum (chunks 0000–0008) |
| 21 | 8 | 10725 PL162 — Enarrationes in Cantica canticorum (chunks 0009–0016) |
| 22 | 9 | 10804 PL164 — Expositio in Cantica canticorum (chunks 0000–0008) |
| 23 | 8 | 10804 PL164 — Expositio in Cantica canticorum (chunks 0009–0016) |
| 24 | 8 | 11088 PL176 — Expositio in regulam S. Augustini (chunks 0000–0007) |
| 25 | 8 | 11088 PL176 — Expositio in regulam S. Augustini (chunks 0008–0015) |
| 26 | 8 | 11057 PL175 — Adnotatiunculae in Joelem (chunks 0000–0007) |
| 27 | 7 | 11057 PL175 — Adnotatiunculae in Joelem (chunks 0008–0014) |
| 28 | 7 | 7561 PL50 — Commonitoria (chunks 0000–0006) |
| 29 | 6 | 7561 PL50 — Commonitoria (chunks 0007–0012) |
| 30 | 12 | 11321 PL184 — Commentatio in Cantica canticorum ex Bernardo  (all 12) |
| 31 | 12 | 7871 PL67 — Explicatio in Cantica canticorum (all 12) |
| 32 | 11 | 9741 PL139 — Canones (all 11) |
| 33 | 11 | 11063 PL175 — Expositio in Abdiam (all 11) |
| 34 | 10 | 21413 PL100 — In Cantica canticorum (all 10) |
| 35 | 9 | 11081 PL176 — De sacramentis legis naturalis et scriptae (all 9) |
| 36 | 8 | 11055 PL175 — Adnotationes in libros Regum (all 8) |
| 37 | 7 | 11085 PL176 — De virginitate B. Mariae (all 7) |
| 38 | 6 | 11061 PL175 — De scripturis et scriptoribus sacris (all 6) |
| 39 | 6 | 11062 PL175 — Explanatio in Canticum B. Mariae (all 6) |
| 40 | 5 | 11078 PL176 — De modo orandi (all 5) |
| 41 | 4 | 10083 PL145 — De dignitate sacerdotii (all 4) |
| 42 | 4 | 11083 PL176 — De sapientia animae Christi (all 4) |
| 43 | 3 | 8715 PL101 — Dubia alia (all 3) |
| 44 | 3 | 8777 PL104 — De modo regiminis ecclesiastici (all 3) |
| 45 | 3 | 6912 PL13 — Addenda (all 3) |
| 46 | 3 | 10047 PL144 — Passio SS. Florae et Lucillae (all 3) |
| 47 | 3 | 10049 PL144 — Vita S. Mauri (all 3) |
| 48 | 3 | 10103 PL145 — De picturis principum apostolorum (all 3) |
| 49 | 3 | 10379 PL150 — Commentaria in Cantica canticorum (all 3) |
| 50 | 3 | 21425 PL150 — Liber qualiter adventus Domini celebretur (all 3) |
| 51 | 3 | 11031 PL173 — Epistolae (all 3) |
| 52 | 3 | 11059 PL175 — Adnotatiunculae in librum Judicum (all 3) |
| 53 | 3 | 11075 PL176 — De fructibus carnis et spiritus (all 3) |
| 54 | 3 | 11089 PL176 — Institutiones in Decalogum (all 3) |
| 55 | 3 | 7020 PL18 — Exhortatio ad monachos (all 3) |
| 56 | 3 | 11325 PL184 — In festo S. Andreae (all 3) |
| 57 | 3 | 11436 PL190 — Vita et passio S. Thomae Cantuariensis (all 3) |
| 58 | 3 | 11648 PL204 — Annales (all 3) |
| 59 | 3 | 7508 PL47 — Sermones (all 3) |
| 60 | 3 | 8195 PL83 — Norma vivendi (all 3) |
| 61 | 2 | 8708 PL101 — Vita S. Martini Turonensis (all 2) |
| 62 | 2 | 8933 PL112 — De passione Domini (all 2) |
| 63 | 2 | 9245 PL125 — Instructio ad Ludovicum Balbum (all 2) |
| 64 | 2 | 9436 PL134 — Testamentum (all 2) |
| 65 | 2 | 9519 PL137 — Appendix ad translationem corporis S. Hunegund (all 2) |
| 66 | 2 | 9604 PL138 — De prandio monachorum (all 2) |
| 67 | 2 | 9852 PL141 — De monasterio Fructuariensi (all 2) |
| 68 | 2 | 10080 PL145 — De castitate et mediis eam tuendi (all 2) |
| 69 | 2 | 10365 PL150 — De celanda confessione (all 2) |
| 70 | 2 | 10517 PL155 — De primordiis et inventione sacrae religionis  (all 2) |
| 71 | 2 | 10703 PL160 — Homilia de villico iniquitatis (all 2) |
| 72 | 2 | 10727 PL162 — Epistola (all 2) |
| 73 | 2 | 7017 PL17 — Philosophorum aliquot epistolae (all 2) |
| 74 | 2 | 11080 PL176 — De quatuor voluntatibus in Christo (all 2) |
| 75 | 2 | 11086 PL176 — Epistolae (all 2) |
| 76 | 2 | 11208 PL183 — Flores seu sententiae ex S. Bernardo (all 2) |
| 77 | 2 | 11299 PL184 — In parabolam de decem virginibus (all 2) |
| 78 | 2 | 11713 PL207 — De divisione et scriptoribus sacrorum librorum (all 2) |
| 79 | 2 | 7383 PL40 — Expositio cantici Magnificat (all 2) |
| 80 | 2 | 8253 PL87 — Analecta (all 2) |
| 81 | 2 | 8407 PL90 — De computo (all 2) |
| 82 | 2 | 8505 PL94 — Chronicon breve (all 2) |
| 83 | 2 | 8566 PL96 — Tractatus (all 2) |
| 84 | 2 | 8625 PL98 — Appendix ad epistolas (all 2) |
| 85 | 1 | 9249 PL125 — Quae exsequi debeat episcopus (all 1) |
| 86 | 1 | 11056 PL175 — Adnotatiuncula in librum Ruth (all 1) |
| 87 | 1 | 11079 PL176 — De potestate et voluntate Dei (all 1) |
| 88 | 1 | 7427 PL42 — De unitate sanctae Trinitatis (all 1) |
| 89 | 1 | 7693 PL59 — Sermo in rogationibus (all 1) |

## When it finishes

1. Aggregate to `data/sweeps/corpus-polarity/REPORT.md` (dedupe by idno+column;
   note which sites were found by which agent).
2. Append a sweep section to every affected work's `cruces.md`.
3. Re-run `verify-english` on every work whose English was fixed.
4. Rebuild + redeploy — fixes to our own English change published pages.
5. Record the per-volume defect rate. PL 196 ran **29 sites / 17 works / 82
   chunks**; whether that is typical or unusually bad is currently unknown, and
   the corpus sweep is what answers it.
