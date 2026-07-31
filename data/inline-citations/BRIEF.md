# Decision brief — the inline-citation class

**For a Fable session** (Wilson, 2026-07-31). This is a schema/convention decision that
compounds across 5,204 works, so it is written down rather than settled in passing. The
numbers below are measured, not estimated — **do not re-derive them**; regenerate with
`node scripts/scan-inline-citations.mjs` if the corpus has grown.

Fable decides. The harvester, the marker convention and any re-index are Sonnet work off
whatever this session writes.

---

## What the class is

Migne sometimes sets a scripture reference as **running text inside the paragraph**,
in italic parentheses, instead of wrapping it in a note. Our pipeline only harvests
citations from `[n: …]` notes (and `[f: …]` inline locators, Pattern 4). **So these
reach no index at all.** A reader searching `/scripture/` for the verse will not find
the page that quotes it.

Shape, from the corpus:

```
*(Psal. [1265B] LXIII, 7)*        10804 — column anchor INSIDE the citation
(Luc. [0353D] XXII)               11057
(Joan. III [1135A] Isai. V)       11064 — TWO books in one parenthesis
(Aeneid. VI, 688.)                11065 — not scripture at all: Virgil
*(Psal. [1121C] II)*              8930  — and the reference is WRONG as printed (= Ps. 23:2)
```

## Measured scale (2026-07-31)

| | |
|---|---|
| **69** inline citations | across **24 works** |
| **41 of the 69** | have a **column anchor falling inside** the parenthesis |
| **31** | are in **SHIPPED** works — invisible to the live index right now |
| **38** | are in **queue** works — arriving as we translate |
| live index | 3,033 citations, so the shipped loss is **1.02%** |

Shipped works affected: 11065(5) · 11057(3) · 11537(3) · 7914(3) · 10365(2) · 10804(2) ·
11066(2) · 11536(2) · 11542(2) · 7871(2) · 11063 · 11064 · 7020 · 7693 · 8566.
Queue: 11632(9) · 11613(6) · 6963(5) · 11512(4) · 11638(4) · 8930(4) · 11550(3) ·
11535(2) · 11703(1).

**The arithmetic has changed and that is why this is being reopened.** The standing
ruling was "only 1 case, don't build a harvester" (7020, 2026-07-10). It is now 69.

## What is already settled — do NOT relitigate

- **Pattern 4 `[f: …]` does not apply.** Its trigger is a work whose citing PRACTICE is
  inline tails (florilegia, *sententiae*). A commentary that quotes a lemma and expounds
  it is not that, however much inline scripture it carries. 7871, 11064, 11066, 11075 and
  7914 were each checked and none qualifies. Agents have correctly declined to tag these
  ~6 times; that discipline is right and should survive whatever is decided.
- **The text keeps what Migne prints.** Whatever is decided, the printed form stays on
  the page verbatim. This is a question about the INDEX, not about the text.
- **Column anchors are sacred** (CLAUDE.md rule 1). Any solution must not move, drop or
  duplicate an anchor that falls inside a citation.

## The questions Fable must answer

1. **Harvest them at all?** 1.02% of the index. Against: real engineering + a re-index of
   15 shipped works. For: these are invisible in a way a reader cannot detect or work
   around, and the fix is one-time while the corpus runs to 5,204 works.
2. **How are they marked?** Three candidates, and the choice governs every future agent
   prompt:
   - a **new marker** (`[ic: …]`?) applied by translation agents as they meet them —
     costs prompt budget on every work forever, and 41/69 have an anchor inside, which
     makes the marker's boundaries awkward;
   - **derive at index time** from the Latin twin by regex, with no marker at all —
     zero prompt cost, but the regex must survive `(Joan. III [1135A] Isai. V)` and must
     not swallow `(Aeneid. VI, 688.)`, which is a fons, not scripture;
   - **a curated data file** like `citation-corrections.json` — most auditable, least
     scalable.
3. **Where do they land?** `scripture[]` beside the `[n:]` citations, or a distinct
   `inline: true` bucket? Note `index-work.mjs` already carries an `inline: true` flag
   for Pattern 4 `[f:]` records — reuse or keep separate?
4. **What about the non-scripture ones?** `(Aeneid. VI, 688.)` is a classical *fons*.
   Today it lands in `unparsed` with `reason: "unknown-book"` — visible, but filed as a
   failure rather than as the fons it is. Same fix or separate?
5. **Retroactive?** 15 shipped works would need re-indexing. Cheap mechanically
   (`index-work.mjs` per work + rebuild), but it is a live-site change and needs a deploy.

## Things a decision should not overlook

- **The anchor-inside case is the hard one** and it is the majority (41/69). A citation
  that straddles a column boundary belongs to two columns; the index locates citations
  *by column*, so which column wins is a real question, not a detail.
- **Some are wrong as printed.** 8930's `(Psal. II)` is Ps. 23:2. If these are harvested
  they enter the same world as `citation-corrections.json`, and that file's policy
  applies: `refDisplay` verbatim, `refKey` corrected, `refKeyPrinted` retained.
- **The two-book citation is a SEPARATE problem that this decision will meet.** A single
  parenthesis naming two books — `(Joan. III [1135A] Isai. V)` inline in 11064, and
  `(Phil. II, Heb. II)` **inside a proper `[n: …]` note** in 8930 @1113c — defeats the
  indexer either way. The second specimen proves the class is **independent of** the
  inline question: it occurs in well-formed notes too, and today it lands in `unparsed`.
  Decide whether one citation may emit two index records, because the answer governs both.

- **Migne's own inconsistency is the underlying fact.** He notes most references and
  inlines a few, with no discernible rule. Whatever we build should not imply he had one.

## Provenance

Class first noted 2026-07-10 (7020, single instance, harvester declined). Re-flagged
repeatedly through the 2026-07-28→31 translation runs as the count grew — 11057 alone
produced three and changed the arithmetic. Wilson asked for a Fable session on it
2026-07-31, mid-run on 8930.
