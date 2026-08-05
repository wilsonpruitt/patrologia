# Batch 1 — Sonnet transcription + Opus adjudication (2026-08-04)

8 Greek columns, PG 88 leaves 836–844 (leaf 838 and 835 excluded: Latin-only and
title-page layout). **~4,300 Greek tokens. 24 UNCERTAIN, 6 LATIN-EXCLUDED.**

## ✅ THE CONTROL PASSED — the prompt amendment works

Leaf 840 is pilot column 1621, re-run on the identical crop under the canonical
prompt. **Both readings that Opus had conformed away are now preserved, and
Sonnet cited the rule while doing it:**

| | old prompt | canonical prompt |
|---|---|---|
| `Γρηγορίας` (plate form) | mangled to `Ι ρηγορίας` | **correct, and flagged** |
| `ἔγγυται` (plate form) | correct | **correct, and flagged** |
| footnote's `Γρηγόριος` pulled into body | no | **no — explicitly refused, citing the rule** |

Token counts across the three runs are within 3 of each other (415 / 417 / 414),
so the amendment cost nothing in coverage.

## ⚑ FINDING 1 — Migne footnote-corrections are COMMON, and each one is a trap

Three of eight columns carry a footnote correcting a word in the body:

- leaf 840 — body `Γρηγορίας`, footnote `Γρηγόριος.`
- leaf 842 — body `ἀνειδεῖαν`, footnote `ἀναιδείαν.`
- leaf 844 — body `ἀκτημοζύνη`, footnote `ἀκτημοσύνη.`

**That is one every 2.7 columns — extrapolating, ~50 across Dorotheus.** Every
one is a place a fluent transcriber silently "corrects" and destroys the
evidence. **This settles the model choice on its own**: it is not a marginal
quality difference, it is ~50 defects that would have been invisible downstream.
Adjudication: **all three correctly transcribed as printed. Body keeps the error;
the footnote is recorded separately.**

## ⚑ FINDING 2 — Latin bleed is systematic, ~0.75 per column

6 exclusions in 8 columns (leaf 836 ×3 lines, leaf 844 ×2, plus one correctly
*re-classified*). Extrapolating: **~100 Latin intrusions across Dorotheus.**
Sonnet also discriminated correctly on leaf 842, identifying *Inclusa desunt in
Graeco.* as **footnote apparatus rather than bleed** and saying so. That is the
right call and the right level of care.

## ⚑ FINDING 3 — Migne prints GRAVE before a comma. The whole accent class resolves.

The pilot left ~24 acute/grave disagreements unadjudicated. **Two plate checks
settle them:** `μοι κακὰ, ἀποπέση` (PG 88) and `τὸν Θεὸν, ᾧ πρέπει` (PG 89) both
print a **grave immediately before a comma**, contrary to strict modern practice
(which retains the acute before punctuation).

**This is a typographic convention of the edition, and Sonnet reproduces it while
Opus overrides it from grammatical knowledge.** It explains the entire class in
one stroke, it means Sonnet was right on essentially all ~24, and it means the
Antiochus accent list flagged as "presumed suspect" is now **presumed wrong on
our side**. → fold into `PG-OCR-PROMPT.md` and re-check Antiochus's remaining 8.

## Adjudication of the 24 UNCERTAIN entries

**Ruled CORRECT AS PRINTED — plate variants, keep, no emendation** (Pattern 7);
each gets a `cruces.md` line when the work is chunked:
`προβαλόμενος` (single λ) · `γεγομένην` for γενομένην · `οἱ Πάτρες` for Πατέρες
(twice — a consistent contraction, so a compositor's habit, not a slip) ·
`ἡ καταστάσεις` (article/number mismatch) · `ἀντέρει` · `διωρθώθη` ·
`σόν σου ὑπάρχοντα` (omitted τὰ) · the three footnote-corrected forms above.

**Ruled NOT DEFECTS — normal Greek, no action:** `ηὐξήθη` (regular augment of
αὐξάνω) · `φιλοδοξίᾳ` · `σώας` (fem. acc. pl. of σῶς, correct) ·
`Παραπέμπει… αὐτῷ` (dative is fine with this verb) · `Οὖν` sentence-initial
(ordinary in this author's paratactic style).

**Ruled NEEDS A PLATE LOOK — 4 items, carried forward:**
1. leaf 836 `"Καὶ τὰ τὸ καὶ"` — syntactically opaque; likely a mis-segmented
   line or type damage. **Highest priority: this is unintelligible as it stands.**
2. leaf 843 `ἔβης` — first glyph ambiguous, completing `παρ-` hyphenated across
   the leaf boundary. Resolve with the previous leaf in hand.
3. leaf 837 marginal `[C]` and leaf 842 marginal `[A]` — both partly cut at the
   crop edge. ⚑ **These are column anchors (hard rule 1); a cut marginal letter
   is a lost citation address. Widen the crop past the gutter on the marginal
   side.**
4. leaf 836 `Λ'.` and leaf 841 `Ϛ'.` — section numerals; stigma/episemon is
   plausible for 6 but both need confirming against the sequence.

## Verdict

**The division of labour works and should be kept.** Sonnet's literalism caught
three footnote traps and six Latin intrusions in eight columns; Opus's judgement
cleared 12 of 24 flags as non-issues in one pass and resolved the accent class.
The residual needing plate work is **4 items in ~4,300 tokens (0.09%)**.

One process fix before scaling: **the crop must extend past the gutter on the
marginal-letter side**, or subdivision anchors get clipped.
