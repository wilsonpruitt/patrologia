# Open questions — oecumenius-philippians (raised by the 2026-07-31 pilot run)

Not cruces (those are per-agent and get merged); these need a ruling or a
future check, and must not be silently absorbed by the merge.

## 1. Luke 10:20 at col 1316 — the highest-value unadjudicated reading in the work

Our source prints:

> «…ὅτι τὰ **δαιμόνια** ὑμῖν ὑποτάσσεται, ἀλλ᾽ ὅτι τὰ ὀνόματα ὑμῶν γέγραπται
> **ἐν βίβλῳ ζωῆς**»

against the received τὰ **πνεύματα** / ἐν τοῖς **οὐρανοῖς**. **Oecumenius's
exposition depends on "book of life."** OCR cannot produce either substitution
— both are word-level, not letter-level — so this is very likely a genuine
reading of Migne's plate, which would make it a real witness to the catena's
scriptural text.

**It could not be adjudicated:** col 1316 sits inside Calfa p.669, the
two-witness gap — no Latin twin, and (per §2 below) no Greek plate either. No
marker was fired, correctly.

**Action if a leaf for Calfa p.669 ever surfaces: check this first.** A third
scan witness for that one page settles it.

## 2. Greek-plate blind spots are now recorded in the twin manifest

`src/pg-latin/oecumenius-philippians/manifest.json` now carries a top-level
`greekPlateAbsentPages` array (added 2026-07-31, promoted to a manifest-wide
required field 2026-08-01 per `pg-paired-pilot.md` §8a condition 2): Calfa
pages with **no leaf in the primary scan**, whether the Latin was recovered
from the alt witness or not at all. Six pages are affected — **655, 657, 659,
661 (chunks 5–8), 669, 671 (chunks 11–12)**.

Why it matters: the pilot's §4a third witness (the scan's own Greek column)
lives on the primary scan's leaves. Where a leaf is missing, the Latin may
still exist via the alt witness while the **Greek plate does not** — so a
`[lat:]` or a `data/calfa-patches/` entry resting on those columns **cannot be
plate-verified**, even though the twin looks healthy. The manifest previously
recorded only the Latin-side recovery, which reads as "fine."

The 0010–0013 agent found p.671 this way (undocumented on the Greek side) and
correctly declined an ἡμεῖς/ὑμῶν itacism marker at 1320 for exactly this
reason.

## 3. ✅ RULED by Wilson 2026-08-01 — the visible-structure rule

**Resolved.** The rule is now `translation-style.md` **Pattern 13a**, corpus-wide
(PL included): (1) words lost mid-sentence with the plate certain → restore
**silently**, log the crux; (2) a **reader-visible structural unit** — heading,
speaker turn, subscription, division mark → restore **with `[ed:]`**, because its
absence is otherwise invisible *as an absence*; (3) text lost and not recoverable
→ `[ed:]` marking the hole, supplying nothing.

**Applied:** the work's final subscription (0013) now carries an `[ed:]` naming
the truncation and quoting the plate's continuation. Verify clean after the edit.
Nicetas's ΛΟΓΟΣ headings and lost speech were already correct under clause 2;
Oecumenius's nine-word loss at the 1325 column break is correct under clause 1.

The original statement of the conflict is kept below for the record.

## 3-original. CONVENTION CONFLICT the merge must rule (do not let it pass unnoticed)

**How is plate-verified text that Calfa LOST restored?** The pilot's three
works answered differently, in good faith, both defensible:

- **Silently, logged in cruces** — oecumenius 0010–0013 (the truncated
  subscription *Ἐγράφη ἀπὸ Ῥώμης δι᾽ Ἐπαφροδίτου*; nine words lost at the 1325
  column break).
- **Marked `[ed: …]`** — nicetas 0000 anchor (the ΛΟΓΟΣ ΠΡΩΤΟΣ heading) and
  nicetas 0006–0009 (five division heads, Hergenröther's bridges, a whole lost
  speech of the Latin).

`translation-style.md` Pattern 13 says `[ed:]` is "our own voice, sparingly,
only where the DIGITIZATION has lost text the plate carries" — which describes
both cases. The attribution ladder's row 1 says certain corrections of Calfa
damage are made **silently** and logged.

**Proposed resolution (needs ratification, and it is a rulebook change either
way):** the distinction is not certainty but **reader-visible structure**. A
lost unit a reader would notice as missing — a heading, a speaker turn, a
subscription — is restored with `[ed:]` because its absence would otherwise be
invisible *as an absence*. A lost run of words inside a sentence, where the
plate is certain and the sentence does not construe without it, is restored
silently and logged, like any other Calfa damage. Under that rule both works
above were right except the oecumenius subscription, which is reader-visible
structure and should gain `[ed:]`.

**Do not apply this unilaterally at merge time** — it changes Pattern 13 for
the whole corpus, PL included. Wilson's call.

## 4. Two `data/calfa-patches/` entries are warranted and NOT yet written

Both plate-checked by the 0010–0013 agent (the check Pattern-13/ladder row 1
requires before changing stored Greek):
- col 1325 — nine words lost at the column break (`ταῦτα λέγω, ἀλλ᾽ ἐπιζητῶ
  τὸν καρπὸν ὑμῶν, τὸν εἰς`); what remains does not construe.
- the work's final subscription, truncated mid-phrase (see §3).

They were restored in the English; the stored Greek is still damaged.

## 5. The 1272 `( sic )` query — needs a leaf image (added 2026-08-01)

The blind read of 0000–0006 found that the scan's OCR of **leaf 650** prints a
Roman-type `sic` exactly where Phil 1:20's first `εἴτε` belongs, in the lemma
whose `στόματί μου` we have marked `[var:]`. Calfa has `εἴτε` and no `sic`.

**Why it matters:** if the plate prints `( sic )` there, **Migne flagged
`στόματι` himself**, and known-false-positive #5 applies — his mark is
reproduced verbatim and we do not stack our own note on top. The `[var:]` would
need re-examining. If it does not, the `[var:]` stands as it is.

**Blocked on:** the leaf image. Only `patrologiaecurs14migngoog_djvu.xml` is
held locally for PG 118; the item's PDF was not downloaded. A future session
wanting to settle it should pull the PDF directly (archive.org direct-file rule)
and render leaf 650.

**Not blocking anything.** The `[var:]` is defensible on either outcome — this
is a question of whose note the reader sees, not of what the text says.

## 6. Blind-read record (added 2026-08-01)

All 14 chunks read blind by two Opus agents (0000–0006, 0007–0013), neither
permitted to open `cruces.md` until its findings were final.

- **1 defect of OURS, found and fixed:** the 1300 `λυσιτελῶν` 7a′ inversion
  (see `cruces.md`) — the English had shipped a word rendered as its opposite,
  on the authority of a crux whose stated reasoning was backwards.
- **1 new Migne-side site**, logged, no edit: the 1281 `οὐ` (§A of the cruces
  addition), undecidable inside the scan gap.
- **1 plate-image query:** §5 above.
- **Christ-hymn verdict: clean**, checked word by word — `ἁρπαγμός` on the
  "seizure" root so Oecumenius's own etymological gloss still works, `ἐκένωσε`
  as "emptied", no AV cadence anywhere in the hymn or in the eleven short
  lemmata that re-quote it. ⚠ But the hymn's block-lemma page (cols 1279–1280)
  **has no leaf in the scan**, so the hymn is clean against Calfa, the received
  Greek and the Latin — and is **not plate-verifiable**.
- Five silent column-break restorations were independently plate-verified by
  the reader and then **withdrawn as candidates** once Pattern 13a was applied
  — including the 1284 one, which *supplies a negation* (`οὐκ ὀφείλομεν`) and
  says so in its crux.
