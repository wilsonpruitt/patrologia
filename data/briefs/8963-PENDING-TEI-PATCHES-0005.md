# 8963 — pending TEI patches, stint 0005–0009 (cols 0391B–0404A)

Divergences I judge to be **OUR FILE'S**, not Migne's, found by reading every page of this
range on **both** witnesses (archive.org `patrologiaecurs04migngoog` pp. 201–207 and Gallica
`ark:/12148/bpt6k5505319w` ff. 196–202). The English already renders the plate at these sites,
per the locked rule "what the English translates is the PLATE WHERE READ"; the Latin needs to
converge.

**One patch only.** Everything else in this range that differs between our TEI and a printing
turned out to be a **press variant** — see the note at the bottom, which is the more important
finding.

---

## 1. 0398C — a comma neither printing has

    our TEI      Azyma comedit, qui recta, opera sine corruptione vanae gloriae facit
    archive p.204 (col 398C)   … qui recta opera sine corruptione vanae gloriae facit
    Gallica f199  (col 398C)   … qui recta opera sine corruptione vanae gloriae facit

`recta opera` is a single noun phrase ("right works"), and the comma splits it into a stranded
neuter plural adjective plus a bare `opera`. **Both printings agree and neither prints the
comma.** The English reads "who does right works without the corruption of vain glory."

Patch: in the `<div>` for CAPUT IX, VERS. 11, find `qui recta, opera sine corruptione` and
replace with `qui recta opera sine corruptione`. One occurrence in the work.

---

## ⚑ NOT patches — our TEI's exemplar is the GALLICA printing, not the archive one

The single most useful thing this range produced, and it should be checked by the next stint
before anyone files a patch off the archive copy alone. **At every site in cols 0391–0404 where
the two printings differ, our TEI follows Gallica — including where Gallica carries a defect and
the archive copy is clean:**

| col | our TEI = Gallica | archive copy | which is sound |
|---|---|---|---|
| 0394B | `digne operantur` | `digni operantur` | both construe |
| 0394A | `seminant spiritualia` | `seminent` | TEI/Gallica |
| 0396A | `nos erudit` | `non erudit` | TEI/Gallica (archive over-inking) |
| 0397C | `si agenda` | `sit agenda` | **archive** |
| 0400A | `exnortantis` | `exhortantis` | **archive** |
| 0401A | `praecepit Domini` | `praecipit Domini` | neither (sense wants `praecepti`) |
| 0402B | `sputum reputantur` | `spiritum` | TEI/Gallica |
| 0402C | `profectus est` | `perfectus est` | TEI/Gallica |
| 0403C | `commmatio` | `comminatio` | **archive** |
| 0403D | `vermanseris` | `permanseris` | **archive** |
| 0396 head | `CAPUT VIII` (no period) | `CAPUT VIII.` | press variant |
| 0399A | `VERS. 15.-- Nubes` | `VERS. 13.` | TEI/Gallica (Nm 9:15) |
| 0401D | `eum glorificemus` | *Gallica* `cum` | **TEI + archive** |

Twelve of the thirteen have our TEI siding with Gallica; the thirteenth (0401D) is the one place
Gallica alone is corrupt and our TEI has the archive's reading, which is what keeps this an
observation about a shared **printing** rather than about a shared **photograph**.

**Consequence, and it is a rule not a curiosity:** on this work, a reading our TEI shares with
Gallica against the archive is **Migne's own type in the exemplar Corpus Corporum transcribed** —
so it takes no patch and no `[sic:]`, and firing one would accuse the digitization of a defect the
press made. Four such non-words (`exnortantis`, `commmatio`, `vermanseris`, `si` for `sit`) were
raised in this range and all four were **declined** on exactly this ground; they are rendered by
sense with a crux naming both witnesses. Addendum A's "a non-word is our corruption" heuristic
would have produced four false patches here.
