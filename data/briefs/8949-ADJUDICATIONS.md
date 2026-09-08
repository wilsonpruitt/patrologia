# 8949 Exodus — orchestrator adjudications

Questions a stint raised and could not close on its own, or that the orchestrator opened.
**Fold the substance into the merged `cruces.md` conventions header; do not leave a ruling only
here.** Written as the run proceeds, settled at merge.

## 1. OPEN — *praeceptum*: "precept" or "commandment"? (raised by stint 0010–0014)

Rabanus's Decalogue series is the spine of chunks 0010–0014. The stint renders *praeceptum*
**"precept"**; peer chunks **0002 and 0009** render it **"commandment"** — and the series is
*enumerated*, so it currently splits across the chunk boundary. This is the 11551
*stylus*/*epistylium* class exactly: two agents diverge on the work's load-bearing vocabulary and
neither can see the other.

**Stint's reason for "precept", and it is a good one:** *mandatum* stands eleven lines away and
needs "commandment". Giving both English words to *praeceptum* and *mandatum* costs the reader
the distinction Migne's Latin draws.

▶ **Ruling owed at merge.** Whichever way it goes, sweep ALL chunks, not only the Decalogue
range, and record it in the conventions header so a later sweep does not churn it.

## 2. ⛔ OPEN, AND IT IS A GAP, NOT A PREFERENCE — the Decalogue's FIRST precept is unmarked

Stint 0010–0014 found **seven of Rabanus's ten precepts diverge from Exodus 20's wording**, two
of them matching **Rom 13:9** and **Dt 5:21** instead — the brief's warned case, a ✓ against the
wrong address. It fired `[var:]` on the ones inside its own range.

**The series' FIRST precept is at 0205B, inside chunk 0009 — a peer's range — it diverges the
same way, and it carries no marker.** The stint flagged it rather than reaching into another
stint's chunk, which is right.

▶ **Owed:** either fire the `[var:]` at 0205B at merge, or resume the 0005–0009 stint
(SendMessage, not a fresh launch) with the site named. An enumerated series that is marked from
its second member onward is worse than one marked nowhere: it reads as though the first agrees
with the Vulgate.

## 3. Recorded, no action — three false claims withdrawn at the plate (stint 0010–0014)

Kept because each is a class that will recur in this book:
- `maechaberis` — **Migne prints the œ ligature**, so the Vulgate divergence vanishes entirely.
  A `[var:]` here would have been an accusation founded on our own transliteration.
- `circum venit` — one word broken at a line end **with no hyphen**; not a Pattern 10 split run.
- `(ORIG.) hom. 4 in Exod.)` — the unbalanced parenthesis is **Migne's own**; a TEI patch had
  been drafted for it and was withdrawn.

## 4. ⛔⛔ OPEN — PL 113 EXODUS HAS A FOOT-OF-PAGE NOTE LAYER, AND WE CARRY NONE OF IT

Raised by stint 0025–0029; **verified independently at the plate by the orchestrator before it
was written into any brief** (the 8957 rule: a stint's self-report must be measured, not
inherited). Gallica f128, cols 255/256: a long editorial note in smaller type runs across the
foot of **both** columns and continues onto f129 — Augustine's enumeration of the Decalogue and
the scholastic doctors who follow it, Athanasius, Gregory Nazianzen, Chrysostom, Jerome and
Ambrose on the other side, and Origen conjoining the two concupiscence prohibitions. **It answers
the question the columns above it are arguing about.**

**What this overturns.** Prep read six leaves and found a clean foot on all six, and recorded
coverage `spot`. That was accurate about those six leaves and too confident as a claim about the
book. **Six of the stint's own seven leaves were also clean** — so the layer is **sparse, not
absent**, which is precisely the distribution a spot check cannot see. `coverage.json` is
corrected: **`spot` → `partial`**, notes known present, sequence unread, absence now means
nothing anywhere in this work.

⚑ **The `[sic:]`/`[var:]` plate reads are unaffected** — those columns were read, and reading a
column is what licenses a marker. Only the foot-apparatus claim was wrong.

▶ **Owed from Wilson, an ENCODING RULING, before recovery can start.** The key in the text is a
**raised LETTER** (`ª`), which is neither layer CLAUDE.md rules on:
- the **numbered** layer (`Forte …` conjectures) → `[cn: n | …]`, **Latin-only**, no English twin;
- the **asterisk** layer (editorial cross-references) → `[cn: * | …]` **plus a translated
  `[nt: …]`**, because those notes are sentences that say something and a Latin-only note strands
  an English-only reader.

**Recommendation: treat the raised-letter key as the asterisk layer** — `[cn: ª | …]` with a
translated `[nt: …]` opposite it. This note is prose that says something, and Pattern 15's
existing prose-vs-locator test is the test being applied; no new marker is invented, only a new
key character admitted to the layer that already exists for prose. But it is Wilson's ruling.

▶ **Then the recovery task:** sweep the work's ~57 leaves for the raised-letter key, recover to
`data/plate-notes/8949.tsv`, **re-chunk** (`chunk-work.mjs` runs `inject-plate-notes.mjs` last, so
an injection before chunking is erased silently), and re-verify. The English already shipped for
0027 stays correct after recovery.

⛔ **Do NOT let this block the translation run.** It is additive: it inserts notes, it does not
change a word of the text or of the English. But the work must not ship claiming a checked-zero
foot, and `preflight` should be run with the corrected coverage in place.
