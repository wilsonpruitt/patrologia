# 8957 *Liber Job* — pending TEI patches, stint 0035–0037 (cols 0833A–0840D)

Stint-scoped; the orchestrator merges. **One patch proposed.** Every leaf in the range
(f417–f420 = cols 833–840) was collated word by word at the plate; the corner numbers were read
first on each. Reads are filed in `data/briefs/8957-PLATE-READS-0035.json`.

## 1. 0840D — the closing editorial note: a period standing where the plate has a comma

| | |
|---|---|
| our TEI (`src/latin/8957/0037.md`, last line) | `… Vide Greg., Moralium in Job. lib. XXIII, cap. 7 et seq., Opp. tom. II. )` |
| the plate | `… Vide Greg., Moralium in Job, lib. XXIII, cap. 7 et seq., Opp. tom. II.)` |
| proposed | `in Job.` → `in Job,` |

**Provenance:** Gallica `ark:/12148/bpt6k5505319w` f420 (corners 839/840 read first), right column,
**native-resolution crops** `1000,2590,890,180` and `1000,2700,890,110`. The comma is unambiguous
at native resolution; the 1400px render is exactly where a period and a comma stop being
distinguishable, which is the class the peers logged at 0758A and at `unde scriptum est.:`.

**Whose defect it is:** OURS. Corpus Corporum's transcription, not Migne's type — so no `[sic:]`
was fired and no claim about the plate was made. The English (`src/english/8957/0037.md`) renders
the note under Pattern 15 as `[nt: …]` **with the plate's comma**, per the plate-where-read rule;
this patch is what makes the Latin converge on it.

## NOT filed, deliberately

- **0833B — the interior `«` the plate has and our TEI lacks.** The plate prints
  `« Qui rodebant in solitudine, « etc. Hæretici qui ab universalis, etc., …`; our TEI carries only
  the first mark. Confirmed at native resolution (f417 crops `150,1230,830,120`, `150,1255,560,45`),
  and confirmed to be an *opening* mark by direct comparison of its direction with the closing `»`
  on the `Quocum virtus manuum erat. »` line (crop `150,795,700,60`). **No patch, because the
  standing rule for this book forbids one:** a missing, unmatched or interior guillemet is never
  patched, never `[sic:]`-ed, and never read as opening a second span. Recorded in
  `src/english/8957/cruces-0035.md` as site 12 of the class and as its first *interior* instance.
