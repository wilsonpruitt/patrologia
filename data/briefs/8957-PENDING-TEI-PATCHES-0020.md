# 8957 *Liber Job* — pending TEI patches, stint 0020–0024 (cols 0796D–0811A)

Stint-scoped; the orchestrator merges. One patch proposed. Every claim below rests on a
recorded plate read (`data/briefs/8957-PLATE-READS-0020.json`).

## 1. `0798B` — `mala quae in ferat` is ONE word, *inferat*

**Chunk:** `src/latin/8957/0020.md`, col 0798B, in the VERS. 21 gloss.

**Our TEI:** `quia aut molitur mala quae in ferat, aut metuit, ne sibi haec ab aliis inferantur.`

**The plate:** Migne sets `quia aut molitur mala quæ in-` at the end of a line and `ferat, aut
metuit,` at the head of the next. The mark between them is the compositor's **line-break
hyphen**, not a space. Confirmed twice:

- Gallica `bpt6k5505319w` **f399**, native crop `1000,1080,880,220` — the hyphen is plainly
  visible at the right edge of the line.
- archive.org `patrologiaecurs04migngoog` **p. 404** (page = (col + 11) / 2; corners 797/798
  read) — same setting, same hyphen.

**Proposed patch:** `in ferat` → `inferat`.

**Why it matters, and why no marker was fired.** From our file alone this is a textbook
Pattern 10 split-run and would have taken a `[sic: *in ferat*]` — a public accusation against
Migne's type for a word he set correctly. It is the hyphen-at-a-break class named in
`CLAUDE.md` (8956's `cru-|ceis`, `exal-|tabitur`), and it is invisible without the plate. The
English renders *inferat* ("evils which it may bring in") under the plate-where-read rule; this
patch is what makes the Latin converge on it.

## Nothing else proposed

Seven other candidates in this range were examined at the plate and **withdrawn or declined** —
see `src/english/8957/cruces-0020.md`. In particular:

- `0798B` unclosed `«` and `0798D` unopened `»` — **Migne's own setting**, plate-confirmed;
  no patch, per the standing ruling.
- `0807B` `unde scriptum est.:` — the plate sets **both** marks; our TEI is right.
- `0807D` `vos contra ex me percusso` — the Gallica copy clips the left margin here and reads
  `]os`; the **archive copy sets `vos`**, and our TEI is right. A patch on the Gallica reading
  would have been a defect introduced from a bad photograph.
