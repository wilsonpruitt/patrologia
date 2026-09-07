# 8956 Isaiah — work-wide conventions, reconciled mid-run

Written 2026-09-07 by the orchestrator, while stints were still running. Runbook step 4 says
convention drift between stints is a REQUIRED merge step, not a tidy-up, and that the real work is
reconciling it because two agents will diverge and neither can see the other. This file is that
reconciliation, recorded when it was found rather than at merge, and it must be folded into the
head of the merged `cruces.md`.

## 1. ⛔ DROPPED NON-LATIN TYPE — two stints, two answers, one rule

**The divergence.** Migne sets Hebrew and Greek that Corpus Corporum drops entirely. Both stints
found instances, read them at the plate, and filed them as pending TEI patches — and then treated
the ENGLISH side oppositely:

- **Stint 0000–0004** restored the Hebrew into its English under Pattern 13a clause 1 (lost text,
  plate certain, restore silently and log). `src/english/8956/0001.md` now carries `צדק` after
  *sedek* and `(סגים)` after *siggim* at col. 1235D.
- **Stint 0005–0009** declined to insert, citing `hebrew-recovery.md` step 6, and filed
  `(דבר)` at 1248D as a patch candidate only.

**Both readings of the rulebook are defensible**, which is exactly why it needed settling: Pattern
13a is written about lost *words in the running sentence*, while `hebrew-recovery.md` is the
specific procedure for *this* class and says the Latin chunk and its English twin are patched **in
one operation**, so the pair never diverges.

**Ruled for the rest of the run (stints 0025+ were launched with it):** file the patch candidate,
log the crux, and **do not insert into the English alone.** A translating stint cannot touch the
Latin, so a one-sided insertion breaks the twin.

**⚑ The state on disk right now, which the patch pass must fix rather than assume away:**
`src/english/8956/0001.md` carries Hebrew that `src/latin/8956/0001.md` does not. The convergent
fix is to APPLY the pending patches — Latin 0001 gains `צדק` and `(סגים)`, Latin 0008 gains
`(דבר)` — and then to add the Hebrew to English 0008, which stint 0005 correctly left out.
**Do not resolve it by stripping the English**: the letters were read at the plate and are Migne's.

**⚑ And nothing downstream can see this.** `verify-english` compares markers, notes and word
ratios; a Hebrew word present on one side of the twin and absent on the other trips none of them.
The only handle is this note.

## 2. Settled points of fact, so no later pass re-opens them

- **This work sets NO guillemets at all** — 0 `«`, 0 `»` across every range checked. The whole
  lemma layer is italic (Luke-9000 shape, not Genesis-8950 shape). Span counts therefore agree
  whole-file and paragraph-bounded for a reason, not by two errors cancelling.
- **Band letters print in the centre gutter and mark the RIGHT column** on these pages.
- **No foot-of-page apparatus anywhere read so far** — neither the numbered *Forte* layer nor the
  asterisk cross-reference layer, across cols 1231–1268 and 1243–1256. A checked zero, not an
  inherited one.
- **Migne's `3` prints much like a `5`** in this tome; verify a digit at native resolution.
- **`Ανθρωποσπαθῶς` at 1235A is Migne's own non-word**, reproduced exactly by our twin. No patch,
  no `[sic:]`.
- **`Mercenari.` at 1258C is Migne's own abbreviated lemma**, on both printings — not broken type.
- **Migne's mis-citations in `[n:]` are reproduced verbatim** (three in one five-chunk range).

## 3. The comparand is not clean either

`sources/vulgate/clementine-flat.txt` prints the non-word `cornonabit` at Is 22:18 (upstream in
Tweedale 2005; the post-2005 correction diffs are unapplied). A stint hit it, could not collate,
and correctly declined to fire. Recorded in `sources/vulgate/README.md` and now printed into every
lemma brief by `lemma-inventory.mjs`. **A `[var:]` fired against a corrupt Clementine is a false
public claim about Migne's text.**
