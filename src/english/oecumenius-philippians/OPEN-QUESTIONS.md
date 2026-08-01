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

`src/pg-latin/oecumenius-philippians/manifest.json` chunks now carry
`greekPlateAbsentPages` (added 2026-07-31): Calfa pages with **no leaf in the
primary scan**, whether the Latin was recovered from the alt witness or not at
all. Six chunks are affected — **5 (p.655), 6 (p.657), 7 (p.659), 8 (p.661),
11 (p.669), 12 (p.671)**.

Why it matters: the pilot's §4a third witness (the scan's own Greek column)
lives on the primary scan's leaves. Where a leaf is missing, the Latin may
still exist via the alt witness while the **Greek plate does not** — so a
`[lat:]` or a `data/calfa-patches/` entry resting on those columns **cannot be
plate-verified**, even though the twin looks healthy. The manifest previously
recorded only the Latin-side recovery, which reads as "fine."

The 0010–0013 agent found p.671 this way (undocumented on the Greek side) and
correctly declined an ἡμεῖς/ὑμῶν itacism marker at 1320 for exactly this
reason.

## 3. CONVENTION CONFLICT the merge must rule (do not let it pass unnoticed)

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
