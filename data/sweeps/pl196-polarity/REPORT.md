# PL 196 polarity sweep — report

**Run 2026-07-28.** Scope: all 17 works of PL 196 with English on migne.app —
82 chunks, ~87K Latin words. Target: defects where **one word or one letter
reverses the meaning of a sentence**, so the text asserts the opposite of what its
own context requires.

## Result

**29 distinct sites across 12 of the 17 works.** Five works are clean: 11539,
11546, 11554, 11555, 11556. One flagged site (11543 @1188D) is **not** a defect —
it is Migne's own bracketed supplement `[non]`, faithfully carried.

By type: dropped `non`/`nisi` — 7 · intrusive negative — 8 · sense-reversing
letter — 12 · dropped word — 2. **The class runs in both directions**, which is
why a hunt for missing negatives alone would have found roughly half of it.

Concentration: 11536 (7 sites) and 11551 (7) hold half the volume's total between
them. Whether that reflects worse setting or simply the two longest works is not
determinable from our side of the page.

## The two defects that were OURS, not Migne's

The sweep was aimed at the plate and caught two errors in our own English. Both
were live on the site; both are now fixed.

1. **11536 @1085D — a printed `haud` silently dropped.** Migne: *hoc ipsum mare de
   quo modo loquimur **haud** digne tali nomine censetur*. Our English read "**is**
   worthily reckoned by such a name", asserting the opposite, in a sentence whose
   own next clause denies it (*nec debet dici mortuum nisi…*). Fixed to "is by no
   means worthily reckoned".
2. **11547 @0260D — a word translated as its opposite to rescue a broken
   sentence.** Migne prints *Utrobique **nolebat** eos **azyma** habere* where his
   own preceding clause has *volebat*. Faced with "he did not wish them to have
   unleavened bread", the translator rendered *azyma* as "**leaven**" — the
   opposite word — and the sentence read smoothly. The plate defect was not
   corrected but **concealed**. Fixed to "unleavened bread"; the `nolebat` defect
   is now logged as a crux.

The second is the more serious failure mode and is now written into
`translation-style.md` **7a** and runbook **step 4a**. An open emendation
announces itself; a repair made inside the translation leaves a smooth page, a
clean `verify-english`, and no trace. It survived the corpus-wide emendation sweep
of 2026-07-28 precisely because that sweep read `cruces.md` files, and this repair
had never been logged as a crux.

## Method — what worked and what did not

**Two-tier (cheap finder → expensive verifier) FAILED here, and should not be
reused for defect hunts.** Stage 1 used Sonnet across all 82 chunks; stage 2 was
to be Opus adjudicating candidates. Stage 1 returned "every candidate already
logged, nothing new" for all 17 works — a suspiciously tidy result. A blind Opus
control on four works Sonnet had cleared found **four live defects**, including
two high-confidence ones. The full Opus re-read then found **11 sites Sonnet
missed**, a 38% miss rate.

The design error: cheap-wide-net works when the cheap tier's failure mode is
*false positives*, which the expensive tier filters. Here the failure mode was
*false negatives* — and a verifier can only adjudicate what it is handed.

**Reading `cruces.md` first caps recall at what is already known.** Every stage-1
agent was told to check the cruces file to mark items `alreadyLogged`. Every one
of them returned only already-logged items. The blind readers found new defects in
the same works. **Form findings first, reconcile against cruces after.**

**Mechanical detection does not work.** Counting negation particles across the
Latin/English pair fails in both directions: it flags faithful paragraphs (*nisi* →
"save"; *non moritur* → "dies no more") and it scored the confirmed 11536/1085D
case **clean**, because other negations in the paragraph balanced the count. There
is no substitute for reading the pair. This is why the polarity check is a pipeline
step, not a `verify-english` rule.

## Consequences already applied

- `translation-style.md` **7a — the silent repair**, with both worked cases.
- `translation-runbook.md` **step 4a** — polarity check as a required reading pass,
  with the do-not-read-cruces-first rule.
- Agent prompt template — a negation-fidelity clause.
- Cruces sections appended to all 11 affected works; `11545/cruces.md` created
  (it had none).

## Open

The same sweep is owed corpus-wide: **68 works, 454 chunks, ~510K Latin words.**
See `data/sweeps/NEXT-SESSION-BRIEF.md`. PL 175/176 are the highest-risk volumes —
the largest, earliest-translated works, done under the since-withdrawn "intended
reading" precedent that is the exact convention producing silent repairs.
