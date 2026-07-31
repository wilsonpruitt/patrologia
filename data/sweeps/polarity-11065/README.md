# Polarity read — 11065, Hugh of St Victor, *Homiliae in Ecclesiasten*

Launched 2026-07-30 (Opus, 6 units, one round). 53 chunks / 62,318 Latin words —
the largest single work in the corpus, and the only work on the site with no
step-4a record. `polarity-record.mjs --gate` is RED on 11065 alone until this lands.

Reuses the prompt shape proven on the 11058/11553 read earlier the same day. Record
with `node scripts/polarity-record.mjs --import data/sweeps/polarity-11065 …` when
all six units are in.

## Units

| unit | chunks | n | Latin cols | words | output |
|---|---|---|---|---|---|
| u1 | 0000–0008 | 9 | 0113C–0138D | 10,652 | `11065-u1.json` |
| u2 | 0009–0017 | 9 | 0139A–0159B | 9,038 | `11065-u2.json` |
| u3 | 0018–0026 | 9 | 0159C–0182D | 10,415 | `11065-u3.json` |
| u4 | 0027–0035 | 9 | 0183A–0207B | 11,061 | `11065-u4.json` |
| u5 | 0036–0044 | 9 | 0207C–0233A | 10,963 | `11065-u5.json` |
| u6 | 0045–0052 | 8 | 0233B–0256C | 10,189 | `11065-u6.json` |

## Controls — this read is unusually well controlled, and deliberately so

The six translation agents each flagged printed defects they carried literally, and
every one of those is logged in `cruces.md`, which the polarity agents are forbidden
to open until they have formed their findings. **So every known site is a live recall
test.** At least one falls in every unit:

| unit | known sites the translation pass carried |
|---|---|
| u1 | **0132C** (dropped/inverted `non`, *stat in eo quod non est*) · 0117D (*sive* for *sine*) · 0135D (*diuturno* for *diurno*) |
| u2 | 0150A · 0152A · 0155D — three carried polarity cases |
| u3 | **0175C** (`Hujus non enim Sunamitis…`, intrusive `non`) — **PLANTED as the declared control** |
| u4 | 0198C (`non in perpetuum non erit`, double negative) · 0191D (*invisibilia* twice) · 0187B (`ab` for `ad`) · 0206C (*facilitatem* for *felicitatem*) |
| u5 | 0222D (`ut in tempore non quaerat`) · 0221B (*bene*, connective-smoothing territory) · 0216C (agency mis-bound) |
| u6 | **0245B** (*mullatenus* for *nullatenus*) · 0239D |

**Only u3's is named in its prompt.** The other five units are genuinely blind, so
their rediscovery rate measures the read rather than the prompt. This is the design
that worked earlier today: 11553-u4 was left blind over a known site and found it on
better evidence than the unit whose prompt had leaked the answer.

⚠ **Schema examples use a placeholder column**, never a real one — the 2026-07-29
leak (`0317B` / `0540B` printed in the schema) silently told two agents where to look.

## Expected yield

Homiletic exposition on Ecclesiastes: mid-range. Not lemma-and-gloss (the richest
class, where the author quotes his lemma twice), not annals/charters (nearly immune).
But two features raise it above a plain sermon collection: Hugh repeatedly expounds
the same lemma under successive senses, and he sets competing Latin versions of a
verse side by side — both give the plate its own contradicting neighbour.

## Not for this read

Our PL is an OCR-derived 2019 Corpus Corporum transcription, so `side: "migne"` means
"not ours / present in the source", **never** "Migne's compositor did this".
