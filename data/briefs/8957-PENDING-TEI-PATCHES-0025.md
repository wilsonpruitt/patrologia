# 8957 — pending TEI patches, stint 0025–0029 (cols 0811A–0820C)

Four sites where our Latin (Corpus Corporum) departs from Migne's plate. **All four are OUR
defects, not Migne's** — each was read at native resolution on Gallica `bpt6k5505319w` (page map
`f = (column + 1) / 2`, corner numbers checked first on every leaf). Per the locked rule
(`translation-style.md`, "What the English translates — THE PLATE WHERE READ"), the English renders
the plate at all four; the Latin should converge when the patch pass lands. **No `[sic:]` fired on
any of them** — the type is Migne's only in the fourth's *shape*, and there the defect our file
shows (a non-word) is not on his page.

| chunk | column | our TEI | the plate | evidence |
|---|---|---|---|---|
| 0026 | 0812C | `sed cetat in gutture` | `sed **celat** in gutture` | f406, native crop 1000,1540,880,200. Clear `l` with ascender; mid-line, no line or column break near it. *cetat* is not a word; *celat* is what the sentence needs (`ut nunquam proferat in voce`). |
| 0026 | 0813C | `praevidere comtempsit` | `praevidere **contempsit**` | f407, native crop 140,1700,860,160. |
| 0027 | 0815B | `cum eadem sevientibus deesse conspiciunt` | `cum eadem **servientibus** deesse conspiciunt` | f408, native crop 140,1490,880,160. The plate's reading restores the *servientibus … servire* play the next clause turns on (`ipsi servire contemnunt`), which our reading destroys. |
| 0028 | 0817C | `pro peccatis dicunt retribui er?` | `pro peccatis dicunt retribui **ei**?` | f409, native crop 140,1630,880,180. The second character is a plain vertical stroke with **no r-shoulder**; the `i` is worn or dotless. ⚠ Recorded as "reads *ei*, type worn" rather than as a clean *ei* — the letter is damaged on the plate, but it is certainly not an `r`. |

## Not patches — recorded so nobody re-opens them

- **0815C `Et superveniet eis inundatio. »`** — no opening `«` on the plate (f408, native crop
  140,2100,880,220). Our TEI is faithful. Fourth plate-confirmed site of this book's unopened-lemma
  class, after 0767B, 0781A/0753A and 0819C. No patch, no marker.
- **0819C `VERS. 5.--Ut sciam verba quae, » etc.`** — same class, already recorded; re-confirmed on
  f410 while collating the running text.
- **0815D `exaliqua`** — fused **on the plate**, mid-line, with normal spacing either side (f408,
  native crop 140,2290,880,120). Migne's, not ours: `[sic: *exaliqua*]` in the English, and the
  Latin stays as it is.
- **0813A `non erubescit`** with no terminal stop — the plate ends the sentence unpunctuated. Our
  TEI is faithful; Pattern 8, nothing supplied.
