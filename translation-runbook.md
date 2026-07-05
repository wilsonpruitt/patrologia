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
5. **Author bio:** new author → add `data/author-bios.json` entry (`displayName`,
   `latin`, `dates`, `bio`; `dedicatee:true` for patron names in the author array).
   Without one the byline falls back to the Latin form — fine temporarily, not for deploy.
6. **Build + index:** `node scripts/build-work-page.mjs <idno>` then
   `node scripts/index-work.mjs <idno>`. Curated "On this text" prose goes in
   `data/work-about.json` (NEVER edited into generated HTML) — optional pre-deploy,
   generic fallback is acceptable at stage time.
7. **Stage only.** Landing RECENT update + deploy belong to Wilson's deploy session
   (per-action OK). Wilson's read-through gates every work.

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
>   citations). Same count, same order.
> - `## ` heads: translate the head text, keep the `## ` line structure 1:1.
> - Italics `*...*` and list `- ` lines: preserve structure.
>
> Scripture policy: translate what Migne prints, never substitute a conventional
> version. Garbled type: render literally, log in `src/english/<idno>/cruces.md`
> (column + reading + your note).
>
> Do not stop early. Your batch is N chunks; peer agents complete 5-chunk batches at
> full fidelity routinely. If you find yourself writing "context budget" at chunk 2,
> you are repeating a documented failure pattern — push through your full batch.

First agent of a fresh session additionally gets the permission test (Write
`src/english/<idno>/_test.md`, delete it, proceed; stop if denied). If an agent
self-throttles, relaunch WITH the failure named verbatim in the prompt (this converts
~30% throttle rate to ~0 — Acta data).

## The Song-of-Songs queue (all pre-chunked, verified-none, EN ≈ 1.5× Latin words)

| idno | PL | author | work | Latin words | chunks | est. burn |
|---|---|---|---|---|---|---|
| 7383 | 40 | Auctor incertus | Expositio cantici Magnificat | 2,131 | 2 | ~40K |
| 11062 | 175 | Hugh of St Victor | Explanatio in Canticum B. Mariae | 7,487 | 6 | ~120K |
| 21413 | 100 | Alcuin | In Cantica canticorum | 10,581 | 10 | ~200K |
| 11321 | 184 | William (of St-Thierry) | Commentatio ex Bernardo contexta | 12,070 | 12 | ~240K |
| 7871 | 67 | Justus of Urgell | Explicatio in Cantica canticorum | 12,931 | 12 | ~240K |
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
