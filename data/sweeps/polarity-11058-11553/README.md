# Polarity read — 11058 + 11553 (SET UP 2026-07-29, NOT COMPLETED)

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
