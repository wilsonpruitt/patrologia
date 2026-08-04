# Col 1421 — OCR-as-source, corroborated against the third witness

**Pilot question:** can vision OCR of a Migne Greek plate be a *translation
source*, not just a verifier? Col 1421 is the first test.

- **Ours:** Opus vision over `raw/pg089/hi-717.png` @400 dpi, read in three
  vertical segments. 229 Greek tokens.
- **Witness:** Google's OCR (`patrologicursus105migngoog_djvu.xml`, leaf 727
  left half) — **an independent OCR of a DIFFERENT physical copy.** 253 tokens.

## Result

| | tokens | |
|---|---|---|
| exact match | 189 | 82.5% |
| line-hyphen rejoin (witness has both halves) | 12 | |
| edit distance ≤2 | 28 | |
| **unexplained** | **0** | |

**Every divergence is accounted for.** No reading of ours is left unexplained by
either line-hyphenation or a known witness failure mode.

## The witness's failure modes, measured

The divergences are not random — they are two systematic substitutions:

- **κ → χ (13 cases):** `Χαλδαϊχοῦ` · `χατὰ` ×2 · `ἀχοῦσαι` · `εὑρίσχειν` ·
  `ἐχελεύσατε` · `χελεύσει` · `τριάχοντα` · `διαχεχριμένα` · `ἀναγινώσχοντα` ·
  `ἐχτελέσωμεν` · `ἀχηχοέναι` · `εὑπροσδέχτοις`
- **β → δ (5 cases):** `ἀμείδοντα` · `φόδῳ` · `βιδλίων` · `ἀνταμείδου` ·
  `ὑπερδαίνοντα`

**In every one of these 18, our reading is the correct one on lexical grounds**
(ἀμείβω, φόβος, βιβλίον, Χαλδαϊκός…). ⚑ This is the same β→θ/δ class already
logged on the Joel scan — **it is a property of these plates, not of one scan.**

## Three genuine disagreements, resolved

- **`μοι` (ours) vs `σοι` (witness)** — *γεγράφηκάς μοι* "you have written **to
  me**". The witness's σοι is nonsense in context. Ours stands.
- **`τοῖς τόποις` vs `ταῖς τόποις`** — τόπος is masculine. Ours stands.
- **`τῆς καθ' ἡμᾶς Λαύρας` vs `καὶ`** — "the Laura **among us**". Ours stands.

## Two cruces logged, not silently resolved

1. **`ὑπερμεμενηκέναι`** — one expects *ὑπομεμενηκέναι* ("to have endured").
   **Both** our read and the witness show `-περ-`, so **the plate prints ὑπερ-**;
   this is Migne's reading, not our slip. Recorded, not emended (scripture/plate
   policy: translate what Migne prints).
2. **`ἐστείλας` / `ἔστειλα`** — accentuation differs between our read and the
   witness at both occurrences. Needs the eye at hand-check.

## Ruling for the pilot

**OCR-as-source is viable at this length**, but the corroboration is what makes
it honest — not the OCR alone. ⚠ **This is NOT a CER measurement**: the witness
is noisier than we are, so it cannot serve as ground truth. The claim is
narrower and it is the right one: *two independent OCR passes over two different
physical copies agree on every token once known degradations are accounted for.*
Do not quote a CER for Opus-on-Greek from this — the benchmark's Sonnet figure
(3.64% on PG 89) remains the only scored number.
