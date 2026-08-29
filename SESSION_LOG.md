# Session Log — patrologia

Append-only, newest first. Written by /done.

---

## [2026-08-28 22:09] — 9003 shipped to staging; a corpus-wide digitization finding
<!-- written by: MacBookAir.lan at 2026-08-28T22:09:22 -->
SESSLOG:[2026-08-28 22:09]

**9003 *Expositio in XX primos Psalmos*** complete through every gate and staged. 7 commits on local
`master`, **unpushed**. Corpus 145, `/glossa` 39 of 58.

**The finding, which outlives the book:** first work collated against Migne's plate page by page (all
22). Our Corpus Corporum twin departs at **~3 sites/page — 63 patches** — against a brief recording
**three instances corpus-wide**. Cost five false public claims against Migne; one false `[var:]` was
*manufactured* by the digitization (CC moved `judicabit`→`judicavit`, and the Vulgate collation then
"found" a divergence that does not exist — **no Vulgate collation can catch this class**); and eight
real divergences had been **erased** by normalizing Migne toward the Clementine.

**A canary page of live, gate-passed 8977 showed the same rate**, and **both of its live `[sic:]`
markers are plate-disproved**. Both were fired on corpus-frequency evidence that
`reference_plate-read-triage.md` already says means the error is ours; both shipped with the words
"plate-read caveat" in their own cruces. The rule is right and unenforced.

**Owed, Wilson's call:** (1) build the ship-test gate; (2) fix 8977's two false markers; (3) sample
width across the 38 shipped books.

---


## 2026-08-29 — 8947 *Liber Ecclesiasticus* shipped; the plate gate's first full run on a new work

18 chunks, 4 Opus agents, ~696K burn vs a ~720K estimate (40K/chunk held). Corpus 145 → 146,
`/glossa` 39 → 40 of 58. Deployed and verified live by body on five URLs.

**The finding of the session: 9 of 13 `[sic:]` markers were false accusations against Migne** —
every one a Corpus Corporum corruption (misericodia/misericordia, ex/**et**, Possuntt/Possunt,
"Ad monitio"/Admonitio, Domini/**Domino**, cum/**eum**, nunde/"nunc de", jurejarando, JesusChristus).
All 56 `[var:]` confirmed on the plate; none withdrawn. And **4 of Migne's own defects had been
silently repaired out of our text** before we saw them (loquendeum, descretur, interrogatia,
orationm) — invisible to every check we run, because our Latin already read correctly.
22 plate pages read; 13 TEI patches running in both directions.

The Gallica second witness (`ark:/12148/bpt6k5505319w`, f = (col+1)/2) settled three of the nine
withdrawals: our PL 113 copy clips the left margin inside this work.

Blind polarity read, 4 fenced readers, **5 defects of our own fixed** — including 1192A–B, where
`ne` failed to distribute across a semicolon and the gloss appeared to advise a man crushed by his
own faults to seek judicial office. One reader finding rejected on the rule (7a⁗ requires the
supplied negation at 1207A). Three of reader 1's findings independently rediscovered cruces
entries it had never seen, which is the evidence the fencing works.

Merge reconciled two convention drifts: *usque ad* ("down to" vs "as far as", split exactly down
the middle of the work) and *impius* (three renderings → "ungodly").
