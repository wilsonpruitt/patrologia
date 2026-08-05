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

---

## Plate look — all 4 items CLOSED (2026-08-05, Opus)

Done against the re-cropped leaves from `scripts/pg-leaf-crops.py`, reading the
plate at 600 dpi. Three of the four were resolved by the new crops alone; the
fourth needed the Latin twin.

**1. leaf 836 `Καὶ τὰ τὸ καὶ` — the plate really does print this. NOT a defect
of ours, and NOT a crop artifact.** Checked twice: at the crop's edge it looked
like a truncated line, so it was re-read across the FULL page width, where the
Greek line ends well short of the gutter with the Latin column far to its right.
Nothing is cut. The four words are printed as transcribed.

The sense rides on the articular infinitive that follows: `τὸ καὶ τὴν εἰκόνα
Βαρσανουφίου … συνίστασθαι ἁγίοις Πατράσιν`, and the facing Latin confirms it —
**`Accedit his quod Barsanuphii imago in Magna ecclesia juxta sanctos Patres
Antonium, Ephraim aliosque…`**. So `quod … imago … consistit` answers to
`τὸ … συνίστασθαι`, and the stray `τὰ` answers to nothing in the Latin.

⚠ **This is a crux, not a repair.** The Latin shows the sentence works without
`τὰ`, but that is not licence to delete it: no conjecture may be entered as the
plate's reading (rulebook 7a″, and see [[feedback_7a-lemma-list-from-plate-not-ocr]]).
`τὰ` stays in the text and gets a `cruces.md` line reading *the plate prints
`Καὶ τὰ τὸ καὶ`; the Latin renders only `Accedit his quod`*. Wilson's call
whether it earns a `[sic:]` marker at translation time.

**2. leaf 843 `ἔβης` — β CONFIRMED, but by the Latin, not by the glyph.**
The letterform at this scan's resolution is genuinely ambiguous: at 7× it reads
as a bowl with a stroke rising to the upper right, which in this face is as much
δ as β, and a same-line comparison against the δ of `ἰδικῶς` did not separate
them. Our own scan cannot settle it — **at that point the Greek column has no
independent witness and the Latin column is the only one there is.**

The facing Latin (leaf 843, first lines) prints:
**`Ut quid peccasti? ut quid transgressus es?`** — answering `Διὰ τί ἥμαρτες;
διὰ τί παρ-|έβης;` across the leaf break, with the footnote's Jerem. ii, 19
pointing the same way. Reading: **`παρέβης`**, β.

⚑ **Method, and it generalises:** the sense alone also predicted β, and had we
stopped there we would have "confirmed" a letter from expectation — the exact
move 7a″ exists to forbid. It is confirmed because a *second column* prints
`transgressus es`, not because `παρέβης` is the word we wanted.

**3. marginals — FIXED by the new crops, as predicted.** leaf 837 `[C]` (before
`δων ἀνώτερον`) and leaf 842 `[A]` are both whole in the re-crops, along with
`[D]` on 837 and `[C]` on 841. The crop fix works; no anchor is lost.

⚑ One correction Batch 1 could not have caught: **`[A]` on leaf 842 sits at the
line break after `Ἐκείνην`, not before `λέγω`** — the transcription placed it a
few words late because the clipped glyph gave no position. A clipped marginal
costs its *address* as well as its identity.

**4. numerals — both CONFIRMED.** leaf 836 `Λ'.` is lambda: pointed apex, no
crossbar, no base, and the Δ of `Δωροθέου` two lines above gives the contrast on
the same plate. leaf 841 `Ϛ'.` is the stigma/episemon ligature, printed clearly.

### Also gained from this pass

Two running heads were read directly off the re-crops and are now recorded in
`data/pg-column-maps/pg088.json` as plate-verified anchors — **leaf 836 = 1613**
and **leaf 842 = 1625**. Both had been interpolated. The map's `+2/leaf` fit is
confirmed at two more points inside Batch 1's own range.

**Nothing is now owed on Batch 1.**

---

## ⛔ Batch 2 (leaves 845–864) — a CROP DEFECT found before adjudication (2026-08-05)

20 leaves transcribed by 5 Sonnet agents under `PG-OCR-PROMPT.md`. Before the
Opus pass, three agents independently reported a truncated line-opening:
`⟨?⟩ύθως` (leaf 861), `⟨?⟩αθεῖν` (leaf 861), and on leaf 849 a bracketed letter
the agent said plainly "isn't actually visible ink". All three declined to
invent the missing letters. **They were right and the crop was wrong.**

**The defect.** `pg-leaf-crops.py` fitted the crop to the Greek column's normal
measure plus 45 px across the gutter for the marginal letters. But **Migne sets
his italic scripture quotations WIDER than the measure**, outdenting them left
across the gutter into space the facing Latin leaves free where it runs short.
The crop sliced their openings off — and the loss falls precisely on quoted
scripture, the one class of line where a conformed reading does the most damage.

Plate-verified on leaf 861: the line reads **`καὶ ἀκολούθως ἐπιφέρει τὸ,
Ζήτησον εἰρήνην…`**. The transcriber saw `ύθως` and, reasoning from sense,
offered **εὐθέως** — fluent, plausible, and wrong. That is 7a″ exactly: the
guess arrives from expectation, the plate is unavailable to contradict it, and
nothing downstream can tell. Had the agent been less disciplined and simply
written εὐθέως, this edition would carry an invented word inside a scripture
quotation. **The `⟨?⟩` convention is what saved it.**

**Fix.** `--overshoot` default raised 45 → **260**, measured: 190 still cut the
`καὶ`, 260 recovers the line whole. Batch 2 re-cropped to `raw/pg088/batch2-wide/`.
The wider crop drags in more facing Latin — an acceptable trade, because layout
rule 4 already has the transcriber exclude and report Latin (every Batch 2 agent
did so correctly), and **a reported Latin bleed is recoverable while a silently
eaten Greek word is not.**

**New tooling, both committed:**
- `scripts/pg-crop-clip-check.py` — flags lines running from the crop edge into
  the text without crossing a gutter-sized gap. Two earlier versions of this
  check were wrong in instructive ways: measuring raw leftmost ink reported all
  ~60 lines per leaf, because the crop deliberately holds Latin fragments; and
  scanning the full row width passed everything, because every line ends short
  of the far edge. Both are documented in the file so they are not reinvented.
- `scripts/pg-ocr-lint.mjs` — file- and sequence-level checks a transcriber
  cannot run on itself: Latin loose in the body, leaked running heads, marginal
  A→B→C→D continuity, section shape, truncated reads. Batch 2 scored 17/20; the
  three flags were formatting, not text.

**Confirmed NOT a defect, by a plate look:** leaf 848's `ἵνα μόρον (sic) εἴπῃ` —
**Migne himself prints "(sic)" in the Greek body**, in italic. Kept, and the
lint now classes a printed `(sic)` as a notable rather than a Latin intrusion.

**Owed:** the 20 leaves must be re-read against the wide crops before Batch 2
is adjudicated. Nothing from Batch 2 has been adjudicated or promoted.
