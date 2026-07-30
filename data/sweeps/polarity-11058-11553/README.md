# Polarity read — 11058 + 11553 — ✅ COMPLETE 2026-07-30

**All 8 units run; both works recorded; `--gate` is GREEN at 88/88.** 41/41 chunks read
(11058: 19 chunks, 9 sites, 1 ours · 11553: 22 chunks, 5 sites, 1 ours).

**Both controls came back clean, which is what makes the two null units trustworthy:**
11553-u2 found the planted @0553A–B unaided, as its first flag. **11553-u4 was
deliberately left BLIND despite its range containing the known @0591B** — an
unannounced second control — and rediscovered it, with better evidence than the
2026-07-29 leaked-prompt attempt could offer (`Notandum` 24× in the work vs `Nondum`
exactly once, here). 11553-u1 and u3 returned `findings: []` and both proved the read
by closing the work's arithmetic chains.

**One live defect found and FIXED: 11058 @0270C** (ours) — a `ne … posset` negative
purpose clause rendered affirmatively while only the two letters *ne* sat inside a
`[sic:]` marker. **Its column was already logged as a crux**, whose justification
("the negative is visibly present in the carried Latin") did not hold. The lesson is
sharper than the fix: *a logged crux can make a live defect look handled.*

One item RECORDED BUT NOT FIXED: 11553 @0551A (clause binding, inverts an inference
rather than a claim; the Latin does not fully construe) — Wilson's call.

The historical note below is kept for the record.

## (historical — as written 2026-07-29, before the read completed)

**Status: the read did not run.** Eight units were designed and six launched; every
launch died instantly on **API 529 Overloaded**, including one resume after a
150-second backoff — seven consecutive failures, no agent read a line, no findings
formed, nothing partial to reconcile. Wilson called a stop to launching. Three
resumed units were still in flight at that point; if their JSON is present here,
those units are done and the rest are not.

**Both works are LIVE on migne.app without this read.** Shipped over a red
`polarity-record.mjs --gate` on Wilson's explicit call, which runbook step 8(0)
permits only if said plainly. This file is the plain saying.

## Do this first next session

Run the units below with the prompt in `PROMPT.md` (complete, reusable — change only
the unit assignment and output path). Then record per work:

```
node scripts/polarity-record.mjs 11058 --chunks 19 --sites N [--ours N]
node scripts/polarity-record.mjs 11553 --chunks 22 --sites N [--ours N]
```

`sites: 0` is a real result and the record is how it counts. Silence is not a pass.

## STATUS 2026-07-29 — 3 of 8 units DONE (all 11058 except u1)

Three resumed units survived the 529 storm and completed. **11058 is one unit short of
recordable** — u1 (chunks 0000–0004) died twice on 529 and was not relaunched (Wilson
stopped the launching). **11553 has had no unit run at all.**

| unit | status | result |
|---|---|---|
| 11058-u1 | **NOT RUN** — died twice on 529 | — |
| 11058-u2 | done | **1 site, 1 NEW** — @0275D `legali` for `regali` |
| 11058-u3 | done | 5 sites, 0 new; 2 refinements carried back |
| 11058-u4 | done | 1 site, 0 new; 1 accuracy fix (ours) |
| 11553-u1…u4 | **NOT RUN** | — |

**Run 11058-u1, then record 11058 as `--chunks 19 --sites 7` (+ any u1 sites).** Do not
record the work before u1 lands; a partial read recorded as a work-level result
reintroduces exactly the ambiguity the ledger exists to prevent.

**The blind read is earning its keep — two results worth knowing before you run the rest:**
- **u2 found a NEW site the translation pass missed** (@0275D, a one-letter change to
  *who the sentence is about*), in a cruces file that otherwise catalogues single-letter
  real-word errors thoroughly. This is the case for doing the read at all.
- **u3 found nothing new but sharpened two existing entries** — the polarity direction at
  @0306C, and a better conjecture at @0306B (`super quem`, not `sic`, from the lemma's
  *super murum*). A null-for-new-sites unit still produced value.
- **Our English came out clean of silent repairs in all three units.** 0 findings on the
  `ours` side across 14 chunks. Worth stating as a result: the negation-fidelity clause in
  the translation prompts appears to be working.

⚠ **Two prompts leaked their answer** (see PROMPT.md): 11058-u4 and 11553-u1 had the real
column of a known defect in the schema example. u4's rediscovery of @0317B is therefore
weak evidence. **11553-u1 must be re-prompted with a placeholder before it is run.**

## Units (8) — check which JSONs already exist before launching

| unit | work | chunks | n | output |
|---|---|---|---|---|
| 11058-u1 | Hugh, *Adnotatiunculae in Threnos* (PL 175) | 0000–0004 | 5 | `11058-u1.json` |
| 11058-u2 | " | 0005–0009 | 5 | `11058-u2.json` |
| 11058-u3 | " | 0010–0014 | 5 | `11058-u3.json` |
| 11058-u4 | " | 0015–0018 | 4 | `11058-u4.json` |
| 11553-u1 | Richard, *In visionem Ezechielis* (PL 196) | 0000–0005 | 6 | `11553-u1.json` |
| 11553-u2 | " | 0006–0011 | 6 | `11553-u2.json` |
| 11553-u3 | " | 0012–0016 | 5 | `11553-u3.json` |
| 11553-u4 | " | 0017–0021 | 5 | `11553-u4.json` |

41 chunks, ~0.5M tokens, **Opus**, ≤6 parallel. Hard-stop applies — get "which model,
and go?" before launching.

## Coverage that already exists (do NOT treat as this read)

- **Every translation agent checked negation fidelity on its own output.** That is the
  weakest form of the check — an agent auditing its own translation — and the runbook is
  explicit that a prior pass does not cover this class.
- **11553 chunks 0010–0013 had a genuine independent read** (the audit agent, after the
  original agent stalled): no silent repair found, negation ledger recorded clause by
  clause in `src/english/11553/cruces-0010.md`. Treat that range as done-but-unrecorded.
- Everything else is **unread** for silent repairs.

## Known sites — use 11553-u2 as a CONTROL

Findings already logged in the cruces files, so a blind reader ought to rediscover them:

- **11058 @0317B** — dropped negation: the faithful are virgins *because they corrupt*
  the integrity of faith. Parallel limb (*non cedunt*) and the continuation both require
  *non corrumpunt*. (unit u4)
- **11553 @0553A–B** — dropped `non` in *et tamen hic, ut in superioribus, nihil
  determinationis adjungitur*, after two columns proving the opposite. **7th instance of
  the PL 196 cluster.** (unit 11553-u2 — planted in that unit's prompt as a control:
  a blind reader that misses a known site tells you about the read, not the text)
- **11553 @0591B** — `Nondum` for `Notandum`, against Richard's own formula at 0588A,
  0594B, 0558B. (unit u4)

## Expected yield

**11058 is lemma-and-gloss** — the richest genre in the corpus sweep's own data (11064
gave 41 sites in 80 chunks). Hugh quotes his Lamentations lemma then expounds the very
words quoted, so the plate hands you its own contradicting neighbour; and the MORAL. /
ALLEGORICAL. labels expound the same lemma twice, a second free contradiction check.
**11553 is PL 196**, the volume where this defect now stands at 7 confirmed instances
across 6 works. Neither work is the near-immune class (annals, charters, regnal lists).

## Not for this read

The `[sic:]`/plate-attribution question is settled separately (Wilson, 2026-07-29): our
PL is an OCR-derived 2019 Corpus Corporum transcription, so no defect can be attributed
to Migne's plate from our files alone. Polarity findings should say `side: "migne"` to
mean "not ours / present in the source", not "Migne's compositor did this".
