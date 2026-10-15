# migne.app 2.0 — reader tools

Drafted 2026-10-15. **Status: SKETCH — no phase started.** Wilson's open calls are in the last section; nothing below is decided until he rules on them.

## Origin

Reader feedback via the Wroot Labs contact form (Rabira Dame, 2026-10-14):

1. *"a built in grammar/syntax and lexicon so that when you click a word or highlight a sentence you can see the word, as sometimes the translation can mistranslate a word or translate a word differently."*
2. *"a tool to where we can make a account and highlight texts and make notes."*
3. Browse models he pointed to: syriaccorpus.org/browse.html, aquinas.cc, mlat.uzh.ch/browser.
4. A mobile app (iOS/Android, Catena-like: commentaries, texts, liturgical calendar). **DEFERRED** — Wilson: that app would be holistic across the whole Press corpus, not migne.app alone. Out of scope here, but it constrains #2 (see Phase D).

The underlying need in #1 is **verification**: a reader who distrusts a rendering wants to check it against the Latin/Greek without leaving the page. Every design choice below should serve that, which is why honesty about ambiguity outranks polish.

## What the repo already gives us (verified 2026-10-15)

- **Paragraph alignment is already 1:1.** `src/latin/<id>/NNNN.md` and `src/english/<id>/NNNN.md` carry the same paragraph count (spot-checked 10047, 10080), sharing column anchors `[1025A]` and `## ` heads. `scripts/verify-english.mjs` already runs parity checks (guillemets, question marks) against the Latin twin. This is the spine every 2.0 feature hangs on.
- **The site is static** (`site/`, Vercel, built by `scripts/build-*.mjs`). Phases A–C keep it static by precomputing at build time. Only Phase D needs a backend.
- ~181 works have English in `src/english/` (PL + PG). PG English lives in `src/greek/` / PG pipeline (`build-work-page-pg.mjs`).
- `scripts/build-greek-lexicon.py` exists but is a **form-frequency list** from Calfa OCR (for OCR triage), not a lexicon. Don't mistake it for Phase C groundwork.

## Phase 0 — convention change (do FIRST, before the next translated work)

**Why it can't wait:** this is the same failure as the un-anchored notes on *The Church in Palestine* (CLAUDE.md, 2026-08-14). Which English sentence renders which Latin sentence is known for certain only at translation time. Every work shipped without sentence anchors becomes a retrofit-by-inference later.

1. **Stable paragraph IDs.** Each paragraph gets an ID that survives re-chunking and text corrections (plate patches, polarity fixes). Proposal: `<textIdno>.<chunk>.<para>` assigned once at chunk time and carried in both files; never renumbered after a work ships — a later split takes a suffix (`.4a`). Needed by Phases B and D.
2. **Sentence anchors at translation time.** The translation prompt (`translation-runbook.md` template) asks the agent to emit a sentence-segment marker in the Latin and the matching marker in the English, e.g. `⟦s3⟧`, many-to-one allowed (two Latin sentences → one English is fine; record it, don't force 1:1).
3. **`verify-english.mjs` gains a check:** marker sets match per paragraph; no orphans; order monotonic.
4. **Build strips markers** from the plain reading view; Phase B consumes them. ⚠ Markers reach the reader as raw brackets unless a builder transforms them (has happened twice on PG pages — CLAUDE.md, band letters). Teach `scan-raw-markers.mjs` the new marker in the same commit that introduces it.
5. **Cost check:** markers add a little to every translation stint. Measure on the first work; it must not slow the ship rate, since new works are the funding lever (CLAUDE.md, 2026-08-18).

Acceptance: next translated work ships with markers in both languages and passes the new check. Retrofit of shipped works is Phase B's job, not Phase 0's.

## Phase A — browse tree (small, visible, static)

Rabira's three links are all *navigation* models: syriaccorpus and mlat.uzh.ch are dense author → work trees; aquinas.cc is paragraph-paired Latin|English (which migne.app already does).

- New page (e.g. `site/browse/`) built from `data/works.json`: collapsible series → author → work tree, one line per work, English-available works marked (gilt, matching the shelf), counts at each level, client-side filter box.
- Must work at phone width; no framework — follow the existing build-script pattern.
- Before building, look at the existing `site/authors/`, `site/latina/`, `site/graeca/` pages — this may be a re-presentation of data already there, not new data.

Acceptance: every shipped work reachable within two clicks from `/browse/`; page weight reasonable on mobile.

## Phase B — sentence highlighting

Hover/tap a sentence in either column → its counterpart highlights in the other.

- **New works:** consume Phase 0 markers directly.
- **Shipped works (retrofit):** ⚖ this touches the completed corpus, which the 2026-08-18 no-retrofit ruling protects. That ruling is about plate passes (re-reading Migne), and this is a cheap machine pass over files we hold that leaves the text untouched, but it is Wilson's call (open call 5). If approved, align sentences *within each already-aligned paragraph* — the problem is a handful of sentences per paragraph, not a document. Options, cheapest first:
  - embedding aligner (Bertalign / LaBSE) locally — mind the 8 GB RAM; one process at a time;
  - per-paragraph cheap API call (Haiku) returning index pairs — see [[reference_api-vs-agent-cost]]: direct API, not agents.
  - Pilot both on 2–3 works, compare against a hand-checked paragraph sample, pick one.
- **Low-confidence paragraphs fall back to paragraph-level highlighting.** A wrong sentence pairing is worse than none — it tells a verifying reader the wrong Latin is behind the English.
- **Explicit non-goal: word-to-word alignment.** Free translation makes it unreliable; don't build it, don't promise it.

Acceptance: pilot work live with sentence highlighting; measured alignment accuracy on the hand-checked sample stated in the work's build notes.

## Phase C — click a word: lemma, morphology, lexicon

Precomputed at build time; nothing runs in the reader's browser but a lookup.

**Pipeline per work:**
1. Normalize Migne orthography for analysis only (display text untouched): accents (`quàm`, `prò`), j/v, u/v, æ/œ, ligatures.
2. Tokenize the source paragraphs; analyze each token.
3. Emit `site/<series>/<vol>/<work>.words.json` (token → candidate analyses) and a per-work lexicon bundle holding only the lemmas that work uses. Expect a few hundred KB per work; lazy-load on first click.
4. Popup shows: form, **all** candidate analyses (lemma + parse), and the lexicon entry(ies). Labelled as automatic.

**Tools and lexica:**

| | Latin (PL) | Greek (PG) |
|---|---|---|
| Morphology | Collatinus (returns all analyses natively) or LatinCy | Morpheus or greCy/OdyCy (weaker on Byzantine Greek) |
| Classical lexicon | Lewis & Short (Perseus XML) | LSJ (Perseus XML) |
| **Late/medieval lexicon** | **Du Cange**, *Glossarium mediae et infimae latinitatis* (Favre ed. 1883–87, PD text) | **E. A. Sophocles, *Greek Lexicon of the Roman and Byzantine Periods*** (1887, PD) |

- **The late/medieval column is not optional.** Much PL/PG vocabulary is absent from L&S/LSJ or carries a later sense; a classical-only lookup misleads on precisely the words a verifying reader cares about.
- **Show ambiguity, don't resolve it.** No single "best guess" tag unless the tagger's confidence is high and the alternatives are still one click away.
- **Latin first, one PL work as pilot**; Greek after, because Byzantine morphology tooling is weaker and needs its own accuracy check.
- Lampe's *Patristic Greek Lexicon* and Niermeyer are in copyright — not usable.

**To verify before building (not yet checked):**
- Licences: Perseus L&S and LSJ XML are CC BY-SA; Collatinus is GPL-3. Against the CC BY-NC on our English ([[wroot-press-licensing]]), the lexicon layer must stay a separately-licensed, separately-attributed data layer. Settle with the licensing memory and [[open-corpus-plan]] before shipping.
- Digital source for Du Cange (the École des chartes online edition's terms vs. OCR of the PD print) and for Sophocles (archive.org scans; is there a clean digitization?).
- Measure tagger accuracy on Migne Latin (medieval, Migne spelling) on a hand-checked sample before trusting any single-analysis display.

Acceptance: pilot work live with word popups; tagger accuracy on a hand-checked sample recorded; licensing ruled on.

## Phase D — accounts, highlights, notes

The only phase that needs a backend (auth + annotation store) and robust anchoring: our texts change after shipping (plate patches, polarity repairs), so a note anchored to a character offset drifts. Anchor = stable paragraph ID (Phase 0) + quoted-text selector with fuzzy re-anchoring (W3C Web Annotation model).

**Recommendation: do NOT build accounts for migne.app.**
- Accounts belong to the deferred Press-wide app — one login across migne.app, Acta, Wesley, etc. Building migne-only accounts now means building them twice.
- **Interim: embed Hypothesis** (one script tag). Free accounts, highlights, private/group/public notes, quote-based re-anchoring. Also measures whether readers actually annotate before we invest.
- **Fallback if Hypothesis is unwanted:** browser-local highlights/notes + an export button. No accounts, no data we hold.
- Either way, Phase 0's paragraph IDs make a later migration into a Press-wide system possible.

Acceptance (interim): annotation available on all work pages; a short note on the method/about page saying notes are held by Hypothesis, not by us.

## Order

1. **Phase 0** — runbook + verifier change. Blocks nothing, but every day without it adds retrofit work.
2. **Phase A** — browse tree. Small; the quickest visible reply to the feedback.
3. **Phase B** — sentence highlighting, pilot then roll out.
4. **Phase C** — word lookup, Latin pilot → Latin rollout → Greek.
5. **Phase D** — Hypothesis interim; own accounts only with the Press-wide app.

Model tiers ([[reference_model-prudence-rubric]]): Phase 0's convention wording and Phase C's licensing/lexicon-source choice are judgment calls; Phases A, B rollout, and C rollout are pattern-following volume work for a cheaper session working from this file.

## Open calls for Wilson

1. Phase 0 marker syntax and paragraph-ID scheme — accept the proposals above or amend?
2. Hypothesis embed (third-party, their branding) vs. browser-local notes vs. nothing until the app?
3. Pilot work for Phases B and C — which PL work?
4. Reply to Rabira — and whether to say what's coming.
5. Phase B retrofit of shipped works — does a machine-only sentence alignment fall under the no-retrofit ruling, or is it outside it?
6. Priority against translation: none of Phases A–D produces a new public work. Where do they sit in the queue relative to shipping works?
