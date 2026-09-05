# 9002 — pending TEI patches, stint 0006–0011 (cols 0079A–0096B)

Sites where the plate was read and **our Corpus Corporum Latin diverges from what Migne printed**.
Per `translation-style.md` §"What the English translates — THE PLATE WHERE READ", the English in
these chunks renders **the plate**; the Latin twin must converge on it when the patch pass lands.

Both entries were read on **BOTH witnesses** (archive `patrologiaecurs06saingoog.pdf`,
PDF page = (col+11)/2; Gallica `ark:/12148/bpt6k54939667`, f = (col+1)/2), corner numbers first.

⛔ **No `[sic:]` is fireable at either site**, and that is the point: the marker must quote a word
still present in our Latin, and it would accuse Migne of the digitization's error.

**Two patches out of twenty-one candidates.** The other nineteen were archive-copy over-inking and
are listed under "NOT patches" below so that nobody files them later. See
`data/briefs/9002-PLATE-READS-0006.json` for the per-page ledger.

---

## 1. @0090D — `maledieta` for `maledicta`, a non-word in our file

| | |
|---|---|
| **our TEI** | `Idem tamen sensus in nostra, cum maledieta ex odio cordis fiant` |
| **plate** | `Idem tamen sensus in nostra, cum maledicta ex odio cordis fiant` |
| **witnesses** | archive p.50 **and** Gallica f45 — both print `maledicta` at normal letter spacing |
| **class** | Corpus Corporum corruption (`c` → `e`) |
| **marker after patch** | none. Nothing is defective on the plate. |

Chunk 0010. The English reads "since revilings come from hatred of the heart", rendering the
plate's `maledicta`. ⚑ Note what the internal evidence would have said on its own: the paragraph's
own lemma is *Maledixerint* and the sentence is glossing it, so `maledicta` is obvious from
context alone — which is exactly the kind of corroboration `reference_plate-read-triage` says
proves an error **exists** and never **whose**. Two plates settled the ownership, and they settled
it against us.

## 2. @0081D — a colon Migne prints and our twin has turned into a full stop

| | |
|---|---|
| **our TEI** | `Non sum dignus, etc. Ac si dicat. Ego redemptoris vestigia non valeo denudare` |
| **plate** | `Non sum dignus, etc. Ac si dicat : Ego redemptoris vestigia non valeo denudare` |
| **witnesses** | archive p.46 **and** Gallica f41 — both set a colon, in Migne's usual spaced form |
| **class** | Corpus Corporum normalised a mark (the class the brief records as running in *both* directions) |
| **marker after patch** | none |

Chunk 0006. Lower value than (1) — no sense turns on it — but it is a real two-witness divergence
in the layer Pattern 8 governs, and Pattern 8 is enforced by band-level mark counts, so leaving it
unrecorded costs a later checker a false positive. The English carries the colon ("As if he were
to say: I cannot uncover the footsteps of the Redeemer"), which is **the one deliberate band-count
mismatch in this stint**: `[0081D]` shows 2 colons in the Latin against 3 in the English.

---

## NOT patches — the nineteen archive-only candidates, recorded so nobody files them

Every one was raised from the archive copy at 300 dpi and **refuted at Gallica**. Our twin is right
at all nineteen. Listed with the archive's misreading so a later reader meeting the same ink knows
it has already been adjudicated.

| col | archive appears to print | Gallica / our twin | class of the archive artifact |
|---|---|---|---|
| 0080B | `jebemur` | `jubemur` | filled counter, u → e |
| 0080D | `hnmanitate` | `humanitate` | u → n |
| 0081D | `n on` | `non` | loose spacing read as a split |
| 0082C | `Inextinguibili` | `Inexstinguibili` | lost `s` |
| 0083C | `cum in quem` | `eum in quem` | e → c |
| 0084D | `hoc non e st` | `hoc non est` | loose spacing read as a split |
| 0085A | `infirmatas` | `infirmitas` | blotted `i` |
| 0088A | `(ARG.)` | `(AUG.)` | filled counter, U → R |
| 0088A | `Mathaeus` | `Matthaeus` | blotted `tt` ligature |
| 0089A | `virtutem` | `virtutum` | u → e |
| 0089C | `(CHRYSOS.)` | `(CHRYSOST.)` | lost `T` |
| 0091B | `dootrina` | `doctrina` | c → o |
| 0092B | `candelabrun` | `candelabrum` | m → n |
| 0092C | `signifi cantia` | `significantia` | loose spacing read as a split |
| 0093C | `homieidium` | `homicidium` | c → e |
| 0093D | `est, *offeres*` | `est. *Offeres*` | broken period read as a comma + blotted capital |
| 0094B | `afferet` | `afferret` | lost `r` |
| 0094C | `quadranten` | `quadrantem` | m → n |
| 0095A | `silicet` | `scilicet` | lost `c` |
| 0095D | `jura quilibet` | `jurat quilibet` | lost `t` |
| 0096A | `ili debet` | `illi debet` | lost `l` |
| 0096A | `po-estas` (t lost at the break) | `potestas` | lost `t` at a line break |

(Twenty-two rows, twenty-one candidates: `(ARG.)`/`Mathaeus` were one site and `0088A` is listed
twice for clarity.)

⛔⛔ **The one worth reading twice is @0088A.** The archive prints what reads unmistakably as
`(ARG.) Quaeritur quomodo Mathaeus et Marcus`, and the *same page* prints two clean `(AUG.)` a
few inches away — an internal control that looked decisive, and that made the reading feel proved.
Gallica prints `(AUG.) … Matthaeus`. **An internal control drawn from the same photograph is not
a second witness**, which is the launch brief's own lesson arriving in a new disguise.
