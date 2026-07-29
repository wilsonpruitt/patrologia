# Corpus polarity sweep — the agent prompt (reuse VERBATIM, change only the assignment block)

You are reading a Latin↔English translation pair for a single class of defect: one
where **a single word or a single letter reverses the meaning of a sentence**, so the
text asserts the opposite of what its own immediate context requires.

**ASSIGNMENT:** work `<IDNO>` — <TITLE> (PL <VOL>), chunks `<RANGE>`. Unit `<UNIT#>`.

Files: Latin `~/patrologia/src/latin/<IDNO>/<NNNN>.md`, English
`~/patrologia/src/english/<IDNO>/<NNNN>.md`. Same chunk number = same text.
Read every assigned chunk in full, in both languages, paragraph against paragraph.

**BLIND RULE — mandatory.** Do NOT open `src/english/<IDNO>/cruces.md`, anything under
`data/sweeps/`, or any prior report or sweep output, at any point. Reading what is
already logged caps recall at what is already known — this was measured on PL 196:
every agent given the cruces file returned "nothing new"; blind readers on the same
works found live defects. Reconciliation against cruces happens afterwards, outside
your unit.

**Where the defect lives — two sides, report both:**

- **Migne's plate** (`"side": "migne"`) — dropped or intrusive `non` / `nec` / `nisi` /
  `haud`; `noluit` for `voluit`; `Nec` for `Nam`; `Illic` for `Hic`; `induitur` for
  `exuitur`; `veritatem` or `vanitatem` for `unitatem`; `azyma` for `zyma`; `pater`
  for `filius`; `invisibilem` for `visibilem`. Word-division defects count
  (`nonnulli` set as `non novelli`).
- **Our own English** (`"side": "ours"`) — a negation the printed Latin carries and the
  English drops; or a word rendered as its **opposite** so that a broken sentence
  would read smoothly (the "silent repair", `translation-style.md` 7a). Both worked
  cases: 11536 @1085D (`haud` dropped), 11547 @0260D (`azyma` rendered "leaven" to
  rescue a defective `nolebat`).

**Signature in both cases: the sentence contradicts its own immediate neighbour.**
If you cannot quote the contradicting neighbour, you do not have a finding.

**Do NOT report:** merely difficult or obscure passages; attested medieval spellings;
gender/number mismatches; column-band or page-band observations of any kind; garbles
that produce nonsense rather than the OPPOSITE claim; numerical or citation
disagreements; Migne's own bracketed supplements (`homo [non] possit`) or his printed
`( sic )`.

**Do not build a mechanical detector.** Counting negation particles across the pair was
tried and fails both ways — it flags faithful renderings (`nisi` → "save", `non
moritur` → "dies no more") and scored the confirmed 11536/1085D case clean. Read the
pair.

**Fix nothing.** Report only; fixes and cruces are applied centrally afterwards.

**Output** → `~/patrologia/data/sweeps/corpus-polarity/<IDNO>-u<UNIT#>.json`:

```json
{"agent":"<IDNO>-u<UNIT#>","idno":"<IDNO>","chunks":"<RANGE>","chunksRead":0,"findings":[
  {"chunk":"0003","column":"1054A","side":"migne","printedLatin":"…","englishAsRendered":"…",
   "defectType":"dropped-non|added-negative|sense-reversing-letter|dropped-word",
   "conjecture":"…","whyContradiction":"…quote the contradicting neighbour…",
   "confidence":"high|medium|low"}
]}
```

`column` = the nearest column anchor printed in the chunk. An **empty findings array is
a legitimate and expected result** — five of PL 196's seventeen works were clean; do
not manufacture a finding to have one. Your final message: the output path and a
one-line count.
