# 8963 — pending TEI patches, stint 0023–0025 (cols 0439A–0446D)

Divergences between Migne's plate and our TEI twin that I judge to be **OUR FILE'S**, read on
**both** witnesses (archive `patrologiaecurs04migngoog.pdf` pp. 225–228, Gallica
`ark:/12148/bpt6k5505319w` f220–f223). Nothing here rests on one photograph.

⛔ Every other candidate this stint raised — fourteen of fifteen — was the archive copy's ink and
was refuted at Gallica with our TEI right. See `src/english/8963/cruces-0023.md` §2 for the table.

---

## 1. **@0440C — `Thahath` should read `Thabath`.** Confidence: high. Both witnesses.

    our TEI   Post haec fit mansio in Thahath, quod est confirmatio vel patientia.
    plate     Post haec fit mansio in Thabath, quod est confirmatio vel patientia.

Migne sets the VERS. 26 lemma eleven lines above as **`Thahath`** (both witnesses; = Vulg.
Nm 33:26) and this one, in the Origen gloss, as **`Thabath`** (both witnesses). Our TEI prints
`Thahath` in both places, so the digitization has silently brought Migne's second form into
agreement with his first. This is the normalization class (`GLOSSA-NT-AGENT-BRIEF.md` §4): the
result reads perfectly and is undetectable from the Latin alone.

⭐ **Note for whoever applies this: the lemma at 0440B must NOT be changed.** The archive copy
prints `Thabath` there too, and that one is over-inking — Gallica prints `Thahath` and our TEI is
right. The same apparent defect, twice in one column, once manufactured by ink and once real.

**The English already renders the plate**, per `translation-style.md` "THE PLATE WHERE READ":
`src/english/8963/0023.md` reads *Thahath* at the lemma and **Thabath** in the gloss. Until this
patch lands, the English is ahead of its own Latin at that one word, which is what this file
exists to record.

---

## 2. **@0439B — our TEI supplies a comma neither witness prints.** Confidence: high. Both witnesses.

    our TEI   ...a terrenis et infimis discretio fit, crescente enim intellectu animae...
    archive   ...a terrenis et infimis discretio· fit crescente enim intellectu animae...
    Gallica   ...a terrenis et infimis discretio fit  crescente enim intellectu animae...

Gallica prints no mark at all, with a wide space where a comma would sit; the archive prints a
raised dot after *discretio* which is dirt, not a comma, and no mark after *fit*. Our TEI has a
comma after *fit*. Low stakes — nothing in the English turns on it — but it is our file's mark and
not Migne's, and the pair of witnesses settles it.

---

## 3. **@0445D — our TEI drops a full stop the plate prints.** Confidence: medium. ONE witness.

    our TEI   ...nec habet vitam aeternam [n: (I Joan. III)] Hic secundum Exodum...
    archive   ...nec habet vitam aeternam (I Joan. III). Hic secundum Exodum...

⚠ **Read on the archive copy only** (p. 228, left column). I did not fetch Gallica for a full stop.
It is listed because our TEI leaves two sentences unseparated and the plate does not; the English
carries the stop, since English prose cannot run the two clauses together. **Do not apply this one
without the second witness** — a period is precisely the mark that ink adds and removes most
readily, and this stint's own tally is fourteen refutations out of fifteen.

---

## NOT patches — press variants, recorded so nobody re-raises them

- **@0444B** the archive printing reads *post montana enim **tam** ad campestria Moab*; Gallica and
  our TEI read *post montana enim ad campestria Moab*. A whole word cannot be manufactured by ink,
  so the two copies are two printings here. **Our TEI follows Gallica**, consistent with this run's
  governing finding. No patch, no marker.
- **@0440A** Gallica prints *habitare, **fratres,** in unum*; the archive and our TEI print
  *habitare, fratres in unum*. A comma of the Gallica printing only. No patch, no marker.
- **@0445A** the plate reads *vel Graecorum sed in virtute Israel* where our TEI has *vel
  Graecorum; sed in virtute Israel*; **@0445A** the archive prints a doubled comma
  (*littoribus,,*) and **@0445B** *divisa est. etc ,*. All observed on the archive only and all
  trivial; listed for completeness, not proposed as patches.
