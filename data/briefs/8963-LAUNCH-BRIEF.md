# 8963 *Liber Numeri* — shared stint brief (2026-09-06)

Glossa ordinaria on Numbers, Anselm of Laon and his school. **PL 113 cols 0379B–0446D, 26,336
Latin words, 26 chunks, six stints.** Wilson approved Opus and the run on 2026-09-06.

## What you read first, in this order

1. **`GLOSSA-NT-AGENT-BRIEF.md`** — the Glossa conventions, the four vocabulary axes, the four
   tests, the addenda. It binds you from your first chunk. Read it whole; it is current.
2. **`translation-style.md`** — the frozen register rulebook, especially **7a** (negation) and
   **7a″** (lemma collation).
3. **`src/latin/9741/0000.md` + `src/english/9741/0000.md`** — the style anchor pair.
4. **`data/briefs/8963-lemmata-NNNN.txt`** — *your own* lemma file, named in your launch message.

## This book's own conventions — CHECKED, not assumed

- ⚑ **Lemmata are ITALIC `*…*`. This book has ZERO guillemets** (1,172 spans, not one `«`).
  It is a gospel-book-shaped Glossa, not a Genesis-shaped one. Do not go looking for `« »`.
- ⚑ **Every chapter head spells `CAPUT` in full** (78 of them, plus 2 `CAPUT PRIMUM`). There is no
  abbreviated `CAP. XLIV.` in this work, so the chapter counter is sound throughout.
- Verse addresses print as `VERS. n.--`, and also as **ranges and lists** (`VERS. 8, 9.--`,
  `VERS. 11-13.--`). Both are normal.
- Migne sets chapter numerals in **lowercase small caps** (`Rom. x`, `Joan. iv`, `Gen. xxiv`,
  `Apoc. iii`, `Isa. l.`) and the digitization uppercases them. **This is declared on `/method` and
  is NOT retrofitted.** Do not patch it, do not mark it, do not report it.

## ⭐ Your lemma file, and why the count matters

`data/briefs/8963-lemmata-NNNN.txt` lists every marked span in YOUR chunks, in order, with its
column band, phrase-searched against the Clementine. Your file prints its own span total.
**Count the spans in your own Latin and check the total against it, and say in your report that
you did.** That check is the only handle there is on a mis-allocated brief — it is what caught
9001's five briefs being off by −0/+13/−11/+15/−17. If your count disagrees, say so and name the
spans; do not treat a mismatch as clearance either way.

**A ✓ is not clearance — READ THE ADDRESS.** If you are glossing Numbers 21 and the mark says
`✓ Ex 17:6`, the mark has just told you the lemma matches a different verse. **13 spans in this
work carry `⚑ MATCHES ONLY ELSEWHERE`** — those are verse lemmata proper that occur in the
Clementine but not at their own address. Adjudicate every one that falls in your range.

**7a″ is a DELIVERABLE, not an exhortation.** Name the words. The measured difference (8930, and
again on 8950) is between a range that returned 11 `[var:]` with zero defects found by the later
blind read, and a range given a generic "be careful" that returned 1 marker and seven defects.

## ⛔⛔ 4a″ — YOU READ YOUR OWN PLATES, INLINE, WHILE THE WORDS ARE STILL IN VIEW

**This work's plates are unread except for three pages.** Recorded in `data/plate-reads.json`:

    p.195 = cols 379/380   p.213 = cols 415/416   p.228 = cols 445/446

**No foot-of-page apparatus was found on any of the three.** Every other page of this work is
unread, and **a `[sic:]` or `[var:]` standing on an unread column cannot ship** — `plate-gate.mjs`
will refuse the work. So read your range's pages as you go. Do not collate divergences you cannot
fire and leave them for a second pass: that was measured on 8950 at **57% more expensive** than
doing it inline, because the second pass has to reload the whole range's context to recover which
words were at stake.

**The scan, and the page map:**

    archive copy   raw/scans/pl113/patrologiaecurs04migngoog.pdf     page = (column + 11) / 2
    render         pdftoppm -f N -l N -r 300 -png <pdf> out
                   add -x -y -W -H (device pixels at that -r) to crop; go to 600–1800 dpi on a letter

⛔ **READ THE PRINTED CORNER NUMBERS FIRST, every page, before reading anything else on it.**
A page map asserted but not calibrated is not a source.

⛔⛔ **SECOND WITNESS, and it is not optional — `data/briefs/8950-PATCH-GATE-READ-FIRST.md`.**

    Gallica ark:/12148/bpt6k5505319w    leaf f = (column + 1) / 2
    https://gallica.bnf.fr/iiif/ark:/12148/bpt6k5505319w/f<N>/full/full/0/native.jpg
    crop+zoom:  .../f<N>/<x>,<y>,<w>,<h>/1800,/0/native.jpg

**NOTHING STANDS ON ONE WITNESS.** The archive copy is proven to manufacture letter-level
divergences by over-inking — twelve in one gathering of 8950, **four of which construed as sound
Latin.** And the very first candidate this work produced was refuted: at **0379B the archive prints
`quadripartitum`, Gallica prints `quadripertitum`, and our TEI reads `quadripertitum` and is right**
— a clean `a` against a clean `e` is **two printings, not two photographs**. One Gallica fetch per
letter-level call. Of the structural classes only **lost non-Latin type** (whole Hebrew/Greek words)
survives a single read, and even those get checked.

⚑ **A press variant is not a defect and takes neither a patch nor a marker.** Where the two copies
genuinely differ in letter *order* or in a *different letterform*, say so and stop there.

## What you write

    src/english/8963/NNNN.md                        the English, frontmatter copied VERBATIM
    src/english/8963/cruces-NNNN.md                 your cruces (NNNN = your FIRST chunk)
    data/briefs/8963-PLATE-READS-NNNN.json          your plate reads — STINT-SCOPED
    data/briefs/8963-PENDING-TEI-PATCHES-NNNN.md    divergences you judge to be OUR file's, not Migne's

⛔ **Never write `data/plate-reads.json` itself** — your peers would race you. The orchestrator
merges. Your JSON is a list of `{from,to,depth,date,page,source,found}`, `depth` = `"read"` unless
you collated the column word by word, in which case `"full"`.

**Record a checked ZERO.** A page you read and found nothing on is a result and must appear in your
file. A report that lists only findings cannot be told apart from a report by an agent that never
read.

## Markers — the short form; the long form is in the Glossa brief

- `[var:]` asserts **Migne's text diverges from a witness** (usually the Clementine Vulgate).
- `[sic:]` carries **Migne's own type defect** into the English.
- `[ed:]` our own voice, sparingly, **only where the DIGITIZATION has lost text the plate carries**.
- `[d:]` a repetition Migne's plate prints twice. `[nt:]` a translated editorial note (pattern 15).
- ⛔ **Both `[var:]` and `[sic:]` are public claims about the printed page, and our Latin is not the
  printed page.** Neither may stand on a column you have not read.
- ⛔ **Your guess at WHOSE defect it is carries no weight.** Measured on 9004: stints' "probably our
  file" calls were right 5 times and wrong 9 — confidence and truth close to uncorrelated. Frequency
  and internal corroboration prove an error **exists**, never **whose it is**. Read the plate.
- ⛔ **Pattern 18 — a `[cj:]` prints MIGNE'S word in the text and OUR conjecture in the marker, not
  the other way round.** 19 of 28 were inverted on 8967 and the English printed our conjecture while
  Migne's own word reached the reader nowhere. If you fire one, state in your cruces which word is
  in the running text and which is in the bracket.

## Do not stop early

Your batch is 3–5 chunks; peer agents complete 5-chunk batches at full fidelity routinely. If you
find yourself writing "context budget" at chunk 2, you are repeating a documented failure pattern —
push through your full batch. If you die of transport, you will be RESUMED, not replaced; do not
shorten your work on account of it.
