# 8957 — pending TEI patches, stint 0010–0014 (cols 0772B–0785A)

Divergences where the plate was read, Migne's type differs from our TEI twin, and the ENGLISH
therefore renders the plate (`translation-style.md`, "What the English translates"). The Latin
must converge on the English when the patch pass lands.

**One site, and it is the only one in eight leaves.**

| chunk | column | our TEI | the plate (Gallica f387, corners 773/774) | action |
|---|---|---|---|---|
| 0011 → 0010 | 0773C | `VERS. 10.--Et haec mihi sit consolatio ut affligens. » ] [n: (Ibid.)]` | `VERS. 10. — Et hæc mihi sit consolatio ut affligens. » (Ibid.)` — **no `]`** | drop the stray `]`; markup noise, not a word |

The bracket is a transform artifact, not Migne's type: it stands alone after the closing
guillemet, it is not one of Migne's own bracketed variants, and nothing else on the leaf carries
its opening mate. The English at 0773C renders the plate and carries no bracket.

⛔ **Not a patch, and deliberately so:** the missing OPENING guillemets at 0773C (VERS. 10) and
0773D (VERS. 11), and the unclosed openings at 0780B, 0780D and 0781B, are all Migne's own
setting, confirmed on the plate this session at four separate leaves. Our TEI has them right.
Do not "balance" them.
