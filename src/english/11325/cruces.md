# Cruces — 11325, Nicholas of Clairvaux, *In festo S. Andreae*

Garbled or irregular printed readings in Migne (PL 184), rendered literally in
the English per the register rules, and logged here.

## 1052A (chunk 0) — misattributed citation

- **Printed:** *Confitebor adversum me injustitiam meam Domino [n: (Psal. XXXI, 5)]*
- **Note:** Correct as printed (Vulg. Ps. 31:5 = Heb. 32:5); logged because the
  continuation quoted at 1052B (*remittes tu, Domine…* / *Pro hac orabit ad te
  omnis sanctus in tempore opportuno*) is Ps. 31:5–6 and carries no note of its
  own. Index should key both to Ps. 31.

## 1055A (chunk 1) — misattributed citation

- **Printed:** *peccator cum venerit in profundum malorum, contemnit [n: (Prov. XVIII, 5)]*
- **Note:** The verse is Prov. 18:3, not 18:5. Reproduced verbatim per the
  marker rule; flagged here so the scripture index is not keyed to 18:5.

## 1054C (chunk 1) — loose citation

- **Printed:** *Haec est confusio adducens peccatum [n: (Eccle. IV)]*
- **Note:** Ecclesiasticus (Sirach) 4:25, not Ecclesiastes. Migne's *Eccle.*
  is ambiguous between the two books and the chapter alone is given.
  Reproduced verbatim; needs a human decision at index time.

## 1054D (chunk 1) — citation and sense

- **Printed:** *qui timet pruinam, irruet super eum nix [n: (Job. VI, 16)]*
- **Note:** The sentence is Job 6:16 in substance but Nicholas has recast it as
  a maxim ("he who fears the frost — the snow shall rush upon him"), which the
  Vulgate does not say in that form. Translated as Migne prints it, not
  conformed to the Vulgate of Job. This is exactly the case the scripture
  policy covers: the argument is built on the recast wording.

## 1053C (chunk 1) — quotation attributed to Cain

- **Printed:** *Major est iniquitas mea quam ut veniam merear [n: (Gen. IV, 13)]*
- **Note:** Gen. 4:13 as printed reads, in the Vulgate, *maior est iniquitas mea
  quam ut veniam merear* — so the quotation is verbatim and the reference
  correct. Logged only because the immediately preceding Judas reference
  [n: (Matth. XXVII)] gives no verse (Matt. 27:5).

## 1049D–1050B (chunk 0) — anchor gap

Chunk 0's anchor run is 1049B, 1049C, 1049D, 1050B, 1050C, 1050D, 1051A–D,
1052A, 1052B. There is no 1050A: Migne's plate gives that quarter-column to
the editorial apparatus. Reproduced as printed; no anchor invented.

## Chunk 2 — colContext / colFirst discontinuity

Chunk 2's frontmatter gives `colContext: "1055A"` but `colFirst: "1056A"`, and
the chunk carries the single anchor [1056A]. Columns 1055B–1055D are absent
from the text stream. This is a chunker-visible gap at a chunk boundary and
should be checked against the TEI (CLAUDE.md hard rule 1) — it is reproduced,
not repaired, here.

## Chunk 0 — frontmatter `noteCount` undercounts by one (chunker issue, not Migne)

Chunk 0's frontmatter declares `noteCount: 6`, but the chunk body carries 7
`[n: …]` markers. The uncounted one is `[n: (Rom. X, 10)]`, which sits inside
the sermon's opening `## ` head (the Rom. 10:10 theme-verse) rather than in a
paragraph — the chunker evidently tallies body notes only. The English
reproduces all 7 markers verbatim and copies the frontmatter verbatim as
required, so the discrepancy is preserved rather than silently repaired.
Worth a fix in the chunker so head-level notes reach the scripture index;
otherwise this sermon's own theme verse is the one citation that never gets
indexed. (Chunk 1's `noteCount: 14` matches its body exactly.)

## Inline Migne page numbers

*714*, *715* (chunk 0), *716* (chunk 0), *717* (chunk 1) are reproduced in
italic in place.

## Register note (not a crux)

At 1049C Migne's *ludus / luditur / illuditur* wordplay ("a game… the play is
ours, the mockery yours") cannot be carried by one English root; rendered with
"game / play / mockery" and flagged for the read-through.

<!-- corpus-polarity-sweep 2026-07-28 -->
## Corpus polarity sweep — 2026-07-28

Blind Opus read of the Latin/English pair for sense-reversing defects (one word or
one letter asserting the opposite of what the context requires). 1 site(s).
Migne's defects are recorded here and rendered literally in the English; our own
errors were fixed in place. Full context: `data/sweeps/corpus-polarity/REPORT.md`.

### 1053A — dropped-word (ours, low confidence)

Printed: *Haec pure facienda est: quia non est pars una peccatorum dicenda, et altera reticenda; neque levia confitenda, et gravia diffitenda.*

Conjecture: **The Latin negation governs the whole pair (non [una dicenda et altera reticenda]); English needs the scope carried explicitly, e.g. "because it is not the case that one part of one's sins should be told and another kept silent" or "because one part of one's sins is not to be told while another is kept silent".**

As rendered, the clause most naturally reads as prescribing that one part is NOT to be told and another is to be kept silent — i.e. partial concealment — which is the opposite of its own governing sentence "Haec pure facienda est" / "This must be made purely," and of the immediately following "Nec alter accusandus et ipse excusandus" ("Nor is another to be accused and oneself excused"), the whole point of which is that nothing be held back.

