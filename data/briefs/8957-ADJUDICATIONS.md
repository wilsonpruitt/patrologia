# 8957 Job — orchestrator adjudications

Written at merge time. These settle questions a stint raised and could not close on its own,
or that the orchestrator opened. **Fold the substance into the merged `cruces.md` conventions
header; do not leave a ruling only here.**

## 1. The three `[sic:]` fired by the 0030–0034 stint on the Gallica witness alone

The stint declared, correctly and unprompted, that it had used only Gallica and that the
archive check was one fetch each. It was run. **PL 113 archive copy `patrologiaecurs04migngoog`,
page = (column + 11) / 2, printed corner numbers read FIRST on every page** (p416 = 821/822,
p418 = 825/826, p419 = 827/828 — the map holds).

**`[sic: *haeritici*]` @0822A — CONFIRMED, double-witnessed. Marker stands.**
The archive prints `ita hæ-|ritici, cum fidelem animam…`, with `hæreti-cis` set correctly three
lines above in the same column. The break also confirms the stint's own reasoning: a hyphenation
of *hæretici* gives `hæ-retici`, never `hæ-ritici`.

**`[sic: *haeritici*]` @0827C — CONFIRMED, double-witnessed. Marker stands.**
The archive prints `Hoc loco hæritici, etc.,` mid-line, with `hæretici de justitia gloriari`
correct two lines below. Two copies, two sites five columns apart, each with the correct form on
its own column. The class is settled and the break hypothesis is retired for it.

**⚠ `[sic: *congnosci*]` @0825A — THE TWO WITNESSES DISAGREE. Marker stands, on Gallica, and the
disagreement is on the record.**
Gallica f413 prints `qui modo non plene possunt **congnosci**; vel`, the `n` a distinct, normally
spaced sort, with `cognitionem` correct three lines below. **The archive copy prints `cognosci`**
— clean — at the same place, and prints `ut co-|gnosci a districto judice` correctly at 0822A.
Two photographs of two copies of one setting of type cannot both be right, so one scan is at
fault, and we know which way that fault runs: per `data/briefs/PL113-WITNESS-ENCODING.md` the
archive copy is **1-bit JBIG2, a symbol-substitution codec whose errors are well-formed words
that construe**. A defective `congnosci` normalised to `cognosci` is precisely the artefact that
codec produces; a continuous-tone photograph adding a whole letter is not. Gallica is preferred
**for this letter**, and the marker is kept.

⭐ **The finding worth carrying out of this work:** the standing worry about the archive copy has
been that it manufactures defects. Here it did the opposite — **it silently repaired one of
Migne's**, and had it been the only witness the defect would have been invisible and unmarkable.
That is the same rule (`never a sole witness for a letter`) biting from the other side, and it is
the first measured instance in this corpus.

⛔ This ruling is about one letter on one page. It does **not** make Gallica the privileged
witness: at 0807D of this same book Gallica clips the left margin and shows `]os` where the
archive sets `vos` plainly, and in 8956 the archive was the better copy across fourteen columns.
Where a single letter is at stake, open both — which is now the demonstrated practice in Job at
both 0807D and 0825A, in opposite directions.

## 2. Lemma text inside `« … »` is TRANSLATED — orchestrator error, corrected mid-run

One stint reported that Job's `« … »` spans were byte-identical to the Latin twin ("lemmata stay
Latin, this book's convention"). **That reading is wrong, and the orchestrator propagated it into
four later stint briefs as an instruction without checking the corpus.** The shipped convention is
settled: 8950 Genesis, the reference guillemet book, prints
`VERS. 23.-- « And the evening and the morning were made, etc.` against its Latin
`« Et factum est vespere et mane, etc.` Twenty-two of the twenty-seven English chunks then on disk
for Job already did the same.

**Ruling: the guillemets stay in place, 1:1 with the twin; the words between them are translated**,
as Migne prints them and never replaced with a conventional English version. Chunks 0015–0019 were
the only ones affected and were sent back to their own stint for repair in place; the final stint
was corrected mid-run.

⚑ The mechanism, which is the part worth keeping: **a single agent's self-report became a briefing
instruction.** Nothing downstream could see it — `verify-english` is silent on it, guillemet counts
are unaffected, and the chunks it produced were internally consistent. It was caught only because a
later stint checked the instruction against the other chunks on disk and **said so instead of
complying**. Ask for that, and do not let one stint's description of a convention become the next
stint's rule without a corpus check.
