# Blind polarity-read agent prompt (reusable)

Written 2026-07-29 from the PL 196 + corpus-sweep prompts. Change only the **UNIT**
block and the output path. Everything else is load-bearing and was proven necessary by
the 2026-07-28 runs — do not trim it.

---

Work in `/Users/wilsonpruitt/patrologia`. This is a BLIND POLARITY READ for the
Patrologia project (migne.app) — a defect hunt, not a translation task.

## HARD RULE — BLIND

**Do NOT open `src/english/<IDNO>/cruces-*.md`, any other `cruces*` file, or anything
under `data/sweeps/`, until you have finished forming your findings.** This is not a
formality. In the 2026-07-28 sweep every agent that read the cruces file first returned
"all already logged, nothing new"; blind readers on the same works found four live
defects it had missed. The cruces file becomes an answer key and caps your recall at
what is already known. **Form findings first.** You may reconcile against the cruces
file at the very end, and if you do, distinguish what was already known from what was new.

## YOUR UNIT

Chunks **NNNN–MMMM** of AUTHOR, *TITLE* (PL VOL, idno IDNO).
- Latin: `src/latin/<IDNO>/NNNN.md` … `MMMM.md`
- English: `src/english/<IDNO>/NNNN.md` … `MMMM.md`
Read the English against its Latin twin, paragraph by paragraph. N chunks. Do not sample.

## WHAT YOU ARE HUNTING

A defect where **one word, or one letter, reverses the meaning of a sentence.** The
signature in every case is the same: **the sentence contradicts its own immediate
neighbour.** It occurs on two sides and you are hunting BOTH.

**1. The source text** (render literally, report — never emend): dropped or intrusive
`non` / `nec` / `neque` / `nisi` / `haud` / `nunquam` / `nullus`; and sense-reversing
single letters — `noluit` for `voluit`, `Nec` for `Nam`, `Illic` for `Hic`, `induitur`
for `exuitur`, `veritatem` or `vanitatem` for `unitatem`, `azyma` for `zyma`, `pater`
for `filius`, `invisibilem` for `visibilem`.

**2. OUR English** — the serious ones, because they leave no trace, pass every automated
check, and nobody downstream can find them. Read `translation-style.md` 7a. Five
mechanisms, all found in the last sweep:
- **an opposite word substituted** to rescue a sentence (8625 @0940B: printed
  *fuscatur*, "is darkened"; our English read "is **cleansed**" — chosen because
  baptism was the subject)
- **a printed negation simply dropped** (11536 @1085D: *haud digne tali nomine
  censetur* rendered "**is** worthily reckoned")
- **a connective smoothed** — the hardest, and *ungreppable*: a second adversative
  `sed` rendered "yet" (8777 @0191B), leaving no lexical trace at all
- **a comparative reversed**
- **a reference or agency mis-bound** — `qui`/`cui`, pronoun binding, an ablative
  agent attached to the wrong party

## METHOD

- **No mechanical pre-filter.** Counting negation particles across the pair was tried
  and fails both ways: it flags faithful paragraphs (*nisi* → "save", *non moritur* →
  "dies no more") and it scored the one confirmed 11536 case **clean**. Do not build
  it again. Read.
- **Name the word or do not report it.** Quote the contradicting neighbour — the clause
  before or after that makes the reading impossible.
- **Genre sets your expected yield.** Lemma-and-gloss commentaries are richest (the
  author quotes his lemma twice, so the page supplies its own contradicting neighbour);
  terse aphorism collections punch above their length; annals, charters, regnal lists
  and calendars are nearly immune — independent items, no neighbour to contradict.

## DO NOT REPORT

Merely difficult or obscure passages · attested medieval spellings · gender or number
mismatches · **column-band observations of any kind** (the A–D marks are positional
quarter-guides, not four per column; recurring, backward-running, and bare band-less
anchors are all normal) · garbles that produce nonsense rather than the OPPOSITE claim
· numerical, measurement or citation disagreements · Migne's own bracketed supplements
(`homo [non] possit` is his, carried faithfully as `[not]`) · his printed `( sic )` ·
anything already inside a `[sic: …]` or `[var: …]` marker that is merely carrying
broken type.

Four false positives the last sweep correctly rejected, so you know the shape: an
authorial chiasmus; an attested `nullus`-for-`ullus` idiom; `lux` meaning "this present
life" rather than light; a passage that genuinely treats BOTH alternatives in turn. And
one refuted by grammar: a suspected dropped `non` where a **concessive `sed` requires
the affirmative**.

## OUTPUT

Write `data/sweeps/<SWEEP>/<IDNO>-uN.json`:

**⚠ Use a PLACEHOLDER column in the schema example, never a real one.** On 2026-07-29
two unit prompts illustrated the schema with the actual column of a known defect —
`0317B` for 11058-u4 and `0540B` for 11553-u1 — which told those agents where to look
and silently broke the blindness the rest of the prompt exists to protect. The 11058-u4
agent then "independently" rediscovered 0317B, and that rediscovery is worth much less
as evidence than it appears. Keep the example abstract:

```json
{"agent":"<IDNO>-uN","idno":"<IDNO>","chunks":"NNNN-MMMM","chunksRead":N,
 "findings":[{"chunk":"NNNN","column":"<COLUMN>","side":"migne",
   "printedLatin":"...","englishAsRendered":"...",
   "defectType":"dropped-non|intrusive-negative|sense-reversing-letter|dropped-word|inversion|misplaced-negative|opposite-word|connective-smoothed|comparative-reversed|reference-misbound",
   "conjecture":"...","whyContradiction":"quote the neighbour that makes the printed reading impossible",
   "confidence":"high|medium|low"}]}
```

`side` is `"migne"` (= not ours; present in the source text) or `"ours"`.
`"findings": []` is a real and valuable result. Do not invent findings to look productive.

## RETURN

(1) each finding, one line, with side and confidence; (2) **the chunks you read and
found clean, named individually** — a report listing only findings cannot be told apart
from one by a checker that never read; (3) **candidates you examined and rejected, with
the reason** — findings not made are as much the result as findings made.

---

## Optional: plant a control

Where a unit's range contains an already-confirmed site, name it in that unit's prompt
and ask the agent to find it independently and say plainly if it does not. A blind
reader that misses a known site tells you about the read, not about the text — and
without a control, a tidy null result is indistinguishable from a checker that did not
look. Keep every other unit genuinely blind.
