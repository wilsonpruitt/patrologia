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

## ⛔ CORRECTION 2026-08-04 — one claim in this file was WRONG

This file originally listed **`θλῖψιν` (ours) vs `θλίψιν` (witness)** among the
readings where ours stands, on the reasoning that *θλῖψις* is the standard
accentuation. **Re-checked against the plate at 400 dpi: Migne prints `θλίψιν`
with an ACUTE. The witness was right and we were wrong.** Corrected in `1421.md`.

A second instance was found in col 1428: the plate prints **`τὸν Θεὸν,`** with a
grave; we had written `Θεόν`. Also corrected.

⚑ **Why this matters more than two accents.** Both errors are the same class the
PG 88 OCR pilot exposed on 2026-08-04 (`benchmark/pg88-pilot/`): **a fluent reader
normalising the plate toward the form it knows.** This file's original claim of
"no divergent reading on our side" was reached by comparing our OCR with another
OCR — and **two OCRs cannot catch conformation-to-expectation, because a fluent
transcriber and a scholar's expectation drift the same way.** The corroboration
number (96.8%) was real; it was measuring the wrong thing for this class.

**✅ CLOSED 2026-08-05 — all of them read off the plate, and the class is now
closed by construction rather than by sampling.** See the section below. The
remaining witness disagreements are demonstrably witness damage (dropped
breathings on capitals `Αποστόλου`/`Αμήν`, impossible double accent `ἅγίον`,
`Ἴουστίνῳ`, and `ἕξω` for `ἔξω`).

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

## ✅ THE ACCENT CLASS, CLOSED BY CONSTRUCTION (2026-08-05)

The PG 88 Batch 1 adjudication resolved what these disagreements were:
**Migne prints a GRAVE immediately before a comma**, against strict modern
practice. A fluent transcriber normalises it to the acute. That is one
convention, not eight coincidences.

So the class was closed by enumeration instead of by sampling. **The exposed
positions are exactly those where a word carries an acute on its FINAL syllable
and is immediately followed by a comma** — anywhere else in Greek a grave cannot
occur, so nowhere else can this error. There are **7 such positions in the whole
letter**, and all seven were read off the plate at 400 dpi. **All seven were
wrong on our side. All seven are fixed** (in `src/greek/` and in the `1421/1424/
1428` transcriptions alike):

| was | plate | where |
|---|---|---|
| `εἰκός,` | `εἰκὸς,` | 1421, *Εἰ δέ τι, ὡς εἰκὸς, εὕροις* |
| `ἐπείρασεν αὐτούς,` | `αὐτοὺς,` | 1424 |
| `προσεδέξατο αὐτούς,` | `αὐτοὺς,` | 1424 |
| `ἀγαθοί,` | `ἀγαθοὶ,` | 1424 |
| `ἀληθινοί,` | `ἀληθινοὶ,` | 1424 |
| `αὐτά,` | `αὐτὰ,` | 1428 |
| `ναούς,` | `ναοὺς` — **and no comma at all** | 1428 |

`ναούς` is the worst of them: we had both the wrong accent and a comma the plate
does not print. A grep confirms **0 exposed positions remain**.

**Two flagged readings were checked and OURS STANDS**, and they are what fix the
rule's boundary:

- **`ζωήν·`** (1425) — acute, before an **ano teleia**. The convention is about
  the COMMA. Do not extend it to `·`.
- **`Εἰ δέ τι,`** (1421) — acute, and `δέ` is not before the comma; `τι` is.
  Position, not proximity.

⚑ **The finding that outlives these seven words: two of the seven — `ἀγαθοί,` and
`ναούς,` — were NEVER on the flagged list**, because the witness OCR made the
same error we did. This is the sharpest evidence yet for what this file already
concluded: **corroboration between two OCR passes cannot see a
conformation-to-expectation class at all**, because a mechanical transcriber and
a fluent one drift toward the same familiar form. The 96.8% figure was real and
was measuring the wrong thing. **Only enumerate-and-read closes a class like
this. Do not sample it, and do not trust a flag list to be its extent.**

⚠ **Still open, deliberately untouched:** the `ἐστείλας`/`ἔστειλα` crux. The
plate at 1421 appears to read `Ταῦτα ἔστειλα` and `καὶ τοῦτο ἔστειλας` — accent
on the epsilon, where our text has `ἐστείλας` at the second. It was not resolved
here because it needs a proper zoom, not a glance, and it is an accent-POSITION
question rather than the grave/acute class above. Left as the crux it already is.

⛔ **These are reader-facing corrections to a LIVE work — `migne.app/pg/89/
the-letter-of-antiochus-the-monk-to-eustathius/`. Fixed in source, NOT yet
deployed. Deploy needs Wilson's OK.**
