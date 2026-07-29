# Translation runbook — PL volume runs

The operational score for translation sessions. Written 2026-07-05 (Fable, post-pilot);
execute on **Opus**. Read alongside `CLAUDE.md` (hard rules) and `translation-style.md`
(the frozen register rulebook). `next-session-resume.md` says what's next; this file
says how any run works.

## Model policy

- **Volume translation = Opus agents.** Conventions are frozen (both pilots done);
  this is playing the score, not writing it.
- **Never Sonnet for translation** (cruces, register, Vulgate variants = live judgment).
  Never Haiku near content.
- **Escalate one tier after two failures** on the same chunk (genuinely corrupt columns
  happen — log a crux first; escalation is for chunks Opus mangles twice, not chunks
  that are hard because Migne is hard).
- **New genre = Fable mini-pilot first.** `translation-style.md` is calibrated on PROSE
  (canons, commentary, chronicle). The first verse/hymn work, first liturgical or
  tabular text, or a new register class gets one Fable session to extend the rulebook
  before Opus takes the volume. None of the current Song-of-Songs queue triggers this.

## Hard-stop ritual (before EVERY launch)

State to Wilson: works, chunk count, estimated burn (rule of thumb: **~20K tokens per
chunk** — calibrated on the overnight run: 33 chunks ≈ 0.66M), and ask
**"which model, and go?"** Do not launch on momentum from a prior approval.

## Per-work pipeline (in order, no skipping)

1. **Latin ready?** `src/latin/<idno>/` exists with `manifest.json` (whole queue is
   pre-chunked). If re-chunking for any reason: `node scripts/chunk-work.mjs <idno>` —
   the validator refuses bad output; never translate against a failed chunk run.
2. **Launch agents** (template below). ≤6 parallel (Acta discipline), ~5 chunks per
   agent. English goes to `src/english/<idno>/NNNN.md`.
3. **Verify:** `node scripts/verify-english.mjs <idno>` — must pass before anything
   downstream. Repair by RESUMING the same agent (SendMessage) with the gap named.
4. **Cruces:** agents log to `src/english/<idno>/cruces.md` (garbled type rendered
   literally + noted; scripture translated as Migne prints it, never substituted).
   **A work split across two agents: each writes `cruces-<firstChunk>.md`, and the
   merge is a REQUIRED step, not a tidy-up.** Concatenating is the easy half; the
   real work is reconciling convention drift, because two agents WILL diverge on
   terminology and neither can see the other. Diff the halves for the work's
   load-bearing vocabulary before merging (2026-07-28: 11551's tail anglicized the
   column's members to "epistyle"/"shaft" while its first half kept
   *stylus*/*epistylium* — which would have shipped a page where Richard's own
   etymological argument at 0233A, *epistylium dici non solet nisi quod stylo
   inhaeret*, explains nothing, since the English pair shares no root; 11063 split
   `ALLEGORICALLY.`/`ALLEGORICAL.` for the same `ALLEGORICE.`). Head the merged
   file with a **work-wide conventions section** recording what was fixed and why,
   so a later sweep does not churn it.
4a. **Polarity check — REQUIRED, and it must be a READING pass.** After verify,
   read the English against the Latin twin hunting one thing: **a sentence that
   contradicts its own immediate neighbour.** Two directions, both real:
   - **Migne's defects** — a dropped or intrusive `non`/`nisi`/`haud`, or a
     sense-reversing letter (`noluit`/`voluit`, `Illic`/`Hic`, `Nec`/`Nam`,
     `induitur`/`exuitur`, `veritatem`/`unitatem`, `azyma`/`zyma`,
     `pater`/`filius`). Render literally, log the crux.
   - **OUR defects** — a negation the Latin prints and the English drops, or a
     word translated as its opposite to make a broken sentence read. See
     `translation-style.md` 7a. These are the serious ones: they leave no trace.

   **Do not try to automate it.** Counting negation particles across the pair was
   tried and fails both ways — it flags faithful paragraphs and misses real
   omissions (the 11536/1085D case scored clean). `verify-english` cannot see this
   class at all.

   **Do not let the checker read `cruces.md` first.** In the 2026-07-28 sweep every
   agent given the cruces file returned "all already logged" and found nothing new;
   blind readers on the same works found four live defects the first pass had
   missed. The cruces file becomes an answer key and caps recall at what is already
   known. Check against it *after* forming findings, not before.

   **Name the chunks you read and found clean.** A report that lists only findings
   cannot be told apart from a report by a checker that never read. Every good unit
   in the corpus sweep closed by naming its clean chunks and its rejected candidates
   with reasons; the bad stage-1 pass of PL 196 closed with a tidy "nothing new".

   **A prior verification pass does not cover this class.** 11057 had all 21 of its
   cruces adjudicated in the 2026-07-03 diff-vs-scan pass and still gave up two new
   sites on a blind polarity read. Different check, different defect.

   **Record the result — `node scripts/polarity-record.mjs <idno> --chunks N --sites N
   [--ours N]`.** A work that was never checked must not be indistinguishable from a
   work that was checked and came back clean; that ambiguity is exactly what let
   11064's 41 sites survive two earlier passes. **`sites: 0` is a real result and the
   record is how it counts.** `node scripts/polarity-record.mjs --gate` lists every
   englished work with no record and exits nonzero — run it before any deploy.

   **Expect yield to track genre, and budget units accordingly.** Lemma-and-gloss
   commentaries are the richest by far: the author quotes his lemma twice (LITTERA,
   then again in the EXPOSITIO with a gloss), so the plate hands you its own
   contradicting neighbour — 11064 gave 41 sites in 80 chunks. Terse aphorism
   collections are next and punch above their length (8195: 7 sites in 3 chunks) —
   a maxim missing its `non` still sounds like a maxim. Annals, charters, regnal
   lists and calendars are nearly immune: independent list items, no neighbour to
   contradict. Do not read a cartulary as slowly as a Victorine commentary.

5. **Author bio:** new author → add `data/author-bios.json` entry (`displayName`,
   `latin`, `dates`, `bio`; `dedicatee:true` for patron names in the author array).
   Without one the byline falls back to the Latin form — fine temporarily, not for deploy.
6. **Build + index:** `node scripts/build-work-page.mjs <idno>` then
   `node scripts/index-work.mjs <idno>`. Curated "On this text" prose goes in
   `data/work-about.json` (NEVER edited into generated HTML) — optional pre-deploy,
   generic fallback is acceptable at stage time.
7. **Stage only.** Deploy belongs to Wilson's deploy session (per-action OK).
   Wilson's read-through gates every work.
7a. **Marking a work shipped:** set `translation.englishState = "ours"` in
   `data/works.json` and **leave `translation.workStatus` exactly as triage left
   it** — including `null`. `workStatus` is the evidence the landing badge reads;
   overwriting it with `ours` is what put a false "First English translation" on
   Abbo's *Canones* (CLAUDE.md rule 8, fixed 2026-07-29). `ours` is now in the
   builder's `NOT_VERIFIED_NONE` set, so a re-introduced flip fails safe to the
   weak claim rather than lying — but it still destroys the triage record.

8. **Deploy checklist — every time, no skipping:** when Wilson gives the OK to deploy,
   **(0) run `node scripts/polarity-record.mjs --gate` first — it exits nonzero if any
   englished work has never had the step-4a read. It caught the site's only PG work
   (`joel-chronographia`) sitting unchecked because both 2026-07-28 sweeps were
   PL-only. Do not ship over a red gate; either read the work or say plainly that it
   ships unchecked.**
   (a) prepend each newly-shipped work to `RECENT` in `scripts/build-landing.mjs`
   (newest first, one-line comment naming the author/work), (b) rebuild the
   generated pages — `build-scripture-index.mjs`, `build-sources.mjs`,
   `build-authors-index.mjs`, `build-queue.mjs`, `build-volume-indexes.mjs` —
   then `node scripts/build-landing.mjs` to rebuild `site/index.html` + resolver
   data, (c) `cd site && npx vercel --prod`, (d) smoke-test the new work URLs
   (`curl -o /dev/null -w '%{http_code}\n'`) and confirm the landing page lists
   them. **The scripture index is not optional either** — it accretes from
   `data/index/`, so a work shipped without rerunning it has invisible citations
   (that index reached no reader at all until 2026-07-28). The
   landing rebuild is NOT optional at deploy time — a work that's live but missing
   from RECENT is a real gap (2026-07-10: two Victorine works were deployed before
   this step was locked in, requiring a follow-up landing rebuild + redeploy).

## Agent prompt template (strict — every element earns its place)

> Translate Latin chunks NNNN–MMMM of `src/latin/<idno>/` into English at
> `src/english/<idno>/NNNN.md` (same filenames).
>
> Context you must read first:
> 1. `translation-style.md` — the frozen register rulebook. Follow it exactly.
> 2. `src/latin/9741/0000.md` + `src/english/9741/0000.md` — the style anchor pair:
>    exact format, marker handling, register.
> 3. Your chunks' frontmatter: copy each Latin chunk's frontmatter VERBATIM into the
>    English chunk — do not invent fields.
>
> Sacred markers (violating any = the work fails verification):
> - Column anchors `[0473A]` (also bare `[1137]`): reproduce VERBATIM, in order, in
>   place. Your chunk's frontmatter `colContext`/`noteCount` tell you what to expect —
>   count your markers before writing each file.
> - Notes `[n: ...]`: reproduce verbatim (contents untranslated — they are Migne's
>   citations). Same count, same order. **Exception — pattern 15:** a note whose
>   content is editorial PROSE rather than a citation is translated and re-marked
>   `[nt: ...]` at the same position. Judge by content, not length.
> - `## ` heads: translate the head text, keep the `## ` line structure 1:1.
> - Italics `*...*` and list `- ` lines: preserve structure.
> - Defect markers, English-only, per patterns 11–13: `[d: ...]` a repetition Migne's
>   plate prints twice; `[sic: ...]` carried type that is the plate's own defect;
>   `[ed: ...]` our own voice, sparingly, only where the DIGITIZATION has lost text
>   the plate carries. Read those patterns before using any of them.
>
> Scripture policy: translate what Migne prints, never substitute a conventional
> version. Garbled type: render literally, log in `src/english/<idno>/cruces.md`
> (column + reading + your note).
>
> **Negation fidelity — read `translation-style.md` 7a before you start.** Every
> `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil` the Latin
> prints appears in your English, and none appears that the Latin does not print —
> **including when carrying it makes the sentence contradict itself.** That
> contradiction is usually a defect in Migne's plate and is exactly what the
> edition exists to show. **Never translate a word as its opposite, or as anything
> other than what it means, to rescue a sentence that will not construe.** If it
> will not construe, render it as closely as the printed words allow and log the
> crux. A repair hidden inside the translation leaves no trace, passes every
> automated check, and is the one error class nobody downstream can find.
>
> **Known false positives — do NOT report these.** Each has been investigated and
> settled; re-raising one costs a session's time and, when acted on, has twice
> nearly broken working data. If you believe you have found a genuine exception,
> say so explicitly as an exception and give the evidence named below — never
> report it as a fresh discovery.
> 1. **Column-band arithmetic.** Migne's A–D marks are positional quarter-guides
>    transcribed where they appear in the plate — **NOT four per column**. So
>    `0350A → 0351A` "missing B–D", or a D-band mark followed by an A-band mark in
>    the next column, is normal, and a column number that recurs (`0241A → 0242A`
>    … `0241 → 0241B`) is normal too — two works can even interleave by band
>    within the same columns. Arithmetic over band letters manufactures phantom
>    gaps; 49 were examined corpus-wide and none was real. **The only real signal
>    is text broken mid-word or mid-construction across an anchor.** Report that,
>    and nothing else in this class. No `[ed:]`, no tei-patch, no plate check.
> 2. **An `Ibid.` resolving to the "wrong" antecedent.** Anaphora resolves against
>    the PRINTED sequence at index time, and a `citation-corrections.json` entry is
>    applied UPSTREAM of it — so "fixing" the antecedent makes the *Ibid.* inherit
>    the corrected key and resolve **wrong**. Never propose a correction to a
>    reference that a following *Ibid.* depends on.
> 3. **`noteCount` off by one against the body.** The frontmatter `heads[]` can hold
>    a duplicate; corpus-wide there are 0 real mismatches. Count `[n:]` in the body
>    only.
> 4. **Inline citation tails / Pattern 4 `[f:]` in a lemma-and-gloss commentary.**
>    Pattern 4's trigger is a work whose citing PRACTICE is inline tails
>    (florilegia, *sententiae*). Commentaries that quote a lemma and expound it are
>    not that, however much inline scripture they carry. 7871, 11064, 11066 and
>    11075 were each checked and none qualifies — do not tag them.
> 5. **Migne's own `( sic )`.** Where he has already flagged the type, reproduce his
>    mark verbatim and do NOT stack a `[sic: …]` of ours on top (10517 col. 1099B).
> 6. **Pattern 9 items are not defects**: attested medieval spellings, gender
>    mismatches with no English exponent, and section labels. Read Pattern 9 before
>    marking any of them.
> 7. **`(cont.)` on a repeated `## ` head.** Chunk boundaries are OUR division; the
>    builder merges these at assembly. Not a defect, and never translate the marker.
>
> Do not stop early. Your batch is N chunks; peer agents complete 5-chunk batches at
> full fidelity routinely. If you find yourself writing "context budget" at chunk 2,
> you are repeating a documented failure pattern — push through your full batch.

First agent of a fresh session additionally gets the permission test (Write
`src/english/<idno>/_test.md`, delete it, proceed; stop if denied). If an agent
self-throttles, relaunch WITH the failure named verbatim in the prompt (this converts
~30% throttle rate to ~0 — Acta data).

**Agents also die of TRANSPORT, which is a different thing from self-throttling and is
recovered the same way.** Three modes hit in one session (2026-07-29): an API connection
closed mid-response, a 600s watchdog stall with no progress, and `529 Overloaded` at
launch. None is a judgment failure and none should be treated as one.

- **Recover by RESUMING the agent (SendMessage), never by relaunching a fresh one.** The
  original brief is still in its transcript, so the message need only (a) name the
  failure, (b) state that it was transport and **not** a limit it hit, so it must not
  shorten its work, and (c) list what is already on disk vs still missing. A long
  re-statement of the brief wastes tokens and risks drifting from what it was actually
  given. Both mid-run failures this way finished their batches with nothing re-done.
- **Check disk before resuming.** A stalled agent may have written some files and no
  apparatus (one wrote all four chunks and no `cruces` file, and `verify-english`
  passed, so the gap was invisible to the verifier — the cruces hole was found by
  eye). Tell the resumed agent exactly which files exist and to re-check the last one
  for truncation.
- **529 at launch means the API is saturated: back off, do not hammer.** Six launches
  and one post-backoff resume all failed instantly. Retrying into it produces more
  instant deaths and no information. Wait, then resume a SMALLER wave than the cap so
  there is room. If it persists, stop and defer the run — a check that keeps getting
  interrupted yields a thin "nothing new" that looks like a pass, which is worse than
  not running it.

## The Song-of-Songs queue (all pre-chunked, verified-none, EN ≈ 1.5× Latin words)

**Shipped as of 2026-07-28** — 7383 (Expositio cantici Magnificat), 11062 (Hugh,
*Explanatio in Canticum B. Mariae*), 21413 (Alcuin), 11321 (William), 7871 (Justus
of Urgell). Ten remain, below. This table does not update itself: **`/queue/` is
the live list**, derived from `src/latin/` minus `src/english/` at build time.

| idno | PL | author | work | Latin words | chunks | est. burn |
|---|---|---|---|---|---|---|
| 10804 | 164 | Bruno of Segni | Expositio in Cantica canticorum | 19,037 | 17 | ~340K |
| 7914 | 70 | Ps.-Cassiodorus | Expositio in Cantica canticorum | 27,573 | 23 | ~460K |
| 9033 | 115 | Angelomus of Luxeuil | Enarrationes in Cantica canticorum | 32,713 | 27 | ~540K |
| 8930 | 112 | Rabanus Maurus | Commentaria in Cantica | 32,975 | 27 | ~540K |
| 11638 | 203 | Philip of Harvengt | Moralitates in Cantica canticorum | 40,356 | 35 | ~700K |
| 6963 | 15 | (Ps.-)Ambrose | Commentarius in Cantica canticorum | 44,936 | 40 | ~800K |
| 11613 | 202 | Gilbert Foliot | Expositio in Cantica canticorum | 66,117 | 53 | ~1.1M |
| 11512 | 195 | Wolbero of St Pantaleon | Commentaria in Canticum canticorum | 109,419 | 81 | ~1.6M |
| 11632 | 203 | Philip of Harvengt | Commentaria in Cantica canticorum | 126,797 | 126 | ~2.5M |
| 11703 | 206 | Thomas the Cistercian | Commentaria in Cantica canticorum | 333,776 | 259 | ~5.2M |

~879K Latin words / 730 chunks / ~14.5M tokens for the whole set — that is MANY
sessions, each with its own hard-stop. Suggested cadence: smallest-first (each finished
work = an announceable first-ever English translation); Gilbert (11613) whenever a
session can supervise a big one. 11703 (Thomas, 334K words) is a campaign, not a
session — split across several runs by chunk ranges.

Note for 7383: bare column numbers (`[1137]`, no A–D band) — pipeline handles them,
but **check the site resolver accepts band-less anchors before its deploy**.
