# Fable session — START HERE

**Task: decide the inline-citation class.** Wilson asked for this session 2026-07-31.
It is a schema/convention decision that governs every one of the 5,204 PL works and the
prompt of every future translation agent, which is why it is Fable's and not Opus's.

## Read, in this order — nothing else is required

1. **`data/inline-citations/BRIEF.md`** — the whole decision: what the class is, the
   measured scale, what is already settled, the five questions, the traps. **It is the
   evidence base. Do not re-derive its numbers.** Regenerate only if the corpus has
   grown: `node scripts/scan-inline-citations.mjs` (add `--json` for the full list).
2. **`scripts/index-work.mjs`** — specifically the `[n:]`/`[f:]` harvest, the dual-key
   `refKey`/`refDisplay` scheme, the existing `inline: true` flag on Pattern 4 records,
   and the `unparsed` bucket. This is the code any answer has to live in.
3. **`data/citation-corrections.json`** — its header states the policy for a reference
   Migne misprints. Some inline citations are wrong as printed, so they land here.
4. **`translation-style.md` Pattern 4** — why `[f: …]` does NOT cover this class. Read it
   so the decision does not accidentally re-open a settled question.
5. **CLAUDE.md rule 9** — the index contract these records would enter.

## Decide the five questions in the brief

Harvest at all · how marked · where they land · the non-scripture ones · retroactive.
Plus the one the brief adds at the end: **may a single printed citation emit two index
records?** (`(Joan. III … Isai. V)` inline in 11064, `(Phil. II, Heb. II)` inside a
well-formed note in 8930 — the two-book problem is independent of the inline problem and
the answer governs both.)

## Produce ONE artifact: `data/inline-citations/SPEC.md`

Written so a **Sonnet** session can execute it without judgment calls. It must contain:

- **The ruling on each question, with the reason** — the reason matters more than the
  ruling, because it is what a later session applies to a case nobody anticipated. This
  project's rulings have repeatedly proved reusable exactly when the reasoning was
  recorded (Wilson's Song-of-Songs ruling was applied four times by agents to words
  nobody pre-set, because the *principle* was written down, not just the outcome).
- **What changes in `index-work.mjs`**, precisely enough to implement.
- **What changes in the agent prompt template** (`translation-runbook.md`), if anything.
  Every added line costs budget on every work forever — say plainly if the answer is
  "nothing", which is a legitimate and probably desirable outcome.
- **The retroactive plan**: which of the 15 shipped works get re-indexed, in what order,
  and whether it needs its own deploy.
- **A worked example for each trap in the brief** — anchor-inside, two-book, non-scripture
  (`(Aeneid. VI, 688.)`), and wrong-as-printed (`(Psal. II)` = Ps. 23:2). If the spec
  cannot say what happens to each of those four, it is not finished.
- **What is deliberately NOT covered**, so the next session does not assume it was.

## Do NOT, in this session

- **Do not write the harvester.** That is Sonnet work off the spec. Fable writes the
  score; cheaper models play it.
- **Do not re-derive the measurements.** They are in the brief and reproducible.
- **Do not re-open Pattern 4.** Agents have correctly declined to tag these ~6 times and
  that discipline should survive whatever is decided.
- **Do not touch the text.** This is a decision about the INDEX. Whatever is ruled, the
  page keeps what Migne prints, verbatim.

## Context worth having

The class was first met 2026-07-10 as a single instance in 7020, and a harvester was
declined on the arithmetic — correctly, at n=1. It is now 69 across 24 works, 31 of them
in works already live. Nothing about the class changed; only the count did. **The
interesting question is not "should we have built it then" but "what does the corpus look
like at 5,204 works", and that is the frame the decision should be made in.**
