# Next session — resume note

## ▶▶▶▶▶ START HERE 2026-09-05 — 8950 *LIBER GENESIS* IS IN FLIGHT (Wilson: Genesis next, not Matthew)

**Wilson's call: Genesis instead of Matthew. Approved Opus + the spot check.** 8967 Psalms shipped,
deployed and pushed earlier the same day, so the queue was genuinely at the next volume.

**8950 = Anselm of Laon and his school, *Glossa ordinaria* on Genesis, PL 113 cols 0067B–0182D,
47,910 Latin words, 47 chunks.** Estimate quoted at the hard stop: **~2.5M tokens** — ~1.9M for
translation at the runbook's recalibrated ~40K/chunk, plus ~0.3–0.5M for the blind polarity read
(budget it: lemma-and-gloss is the richest genre for that class) and ~0.3M for patches, plate reads
and the merge.

### Where the work stands (updated as stints land)
- ✅ Stints 1–3 DONE: **chunks 0000–0011, 16,975 Latin words, verify-clean.** 13 `[var:]`, **zero `[sic:]`**.
- ⬜ Stints 4 (0012–0018) and 5 (0019–0023) RUNNING. Stint 2 resumed for two lemmata its brief lacked.
- ⬜ **Four stints left to launch: 24-30, 31-35, 36-41, 42-46.**
- ✅ `plate-gate.mjs 8950` is **GREEN** — 10 recorded reads covering every marker.
- ⛔ **DEFERRED ON PURPOSE — the TEI patches.** ~20 twin/plate divergences are filed in
  `data/briefs/8950-PENDING-TEI-PATCHES-0008.md` plus `recerunt`→`fecerunt` at 0069B, which I
  confirmed at the plate on p.40. **Do not apply them while stints are running**: applying means
  re-chunking, and re-chunking rewrites every chunk, including the ones agents are reading. Apply
  after the last stint lands, then re-run `inject-plate-notes` and re-verify. **Seven `[sic:]` are
  OWED once the patches land** and are named in that file — the 0008–0011 stint could not fire them
  because our twin had already tidied the plate's defect away, so the marker would fail the
  verbatim-substring guard.

- ✅ Chunked, validated (460 column marks, 722 notes, words conserved).
- ✅ **Plate spot check DONE and it was NOT a checked zero** — see below. `coverage.json` = `partial`,
  2 notes recovered, 1 injected.
- ✅ Lemma inventory rebuilt twice: **1,811 spans, 1,013 ✓ / 2 ⚑ / 391 ⚠ / 405 single-word** (the
  second rebuild recovered 21 spans a pairing bug had been dropping — see below).
- ✅ Split into **nine stints**, balanced by words, all 1,811 spans allocated:
  `0-3 · 4-7 · 8-11 · 12-18 · 19-23 · 24-30 · 31-35 · 36-41 · 42-46`.
- ⬜ Remaining pipeline: `verify-english`, cruces merge, blind polarity read, patch pass, plate gate,
  preflight, deploy.

⛔ Nothing is deployed and nothing is pushed for 8950. `master` is ahead of `origin/master`.

### ⭐⭐⭐ THE HEADLINE: THE LEMMA INSTRUMENT WAS BLIND ON THIS BOOK, AND IT FAILED BY GOING QUIET

`lemma-inventory.mjs` was written for the gospel books, where the lemma is italic, and harvested
`*…*` only. **Genesis sets its verse lemmata in guillemets — 1,207 of them — and italicizes only
second lemmata, Hebrew words and the *Historice/Allegorice* tags.** So the first brief listed 600
spans and missed every verse lemma, i.e. exactly the spans 7a″ exists to collate. **The only symptom
was the ownership test firing 0 times in 600 spans.** Third instance of the class that file already
documents twice (CAPUT PRIMUM, then PSALMUS).

⚑ **It is not a house style and may not be assumed for the next book: 1,277 « in 8950 against 0 in
9000 (Luke).** Whichever book follows gets checked the same way.
⭐ **And the convention was settled for TRANSLATORS years before the instrument knew it** — the
guillemet section in `GLOSSA-NT-AGENT-BRIEF.md` (Tobit 8970 §1) is older than the bug. A tool being
newer than a rule is not the same as a tool knowing it.

Two more fell out of the revived test rather than out of inspection:
- The `VERS.` address regex took a single numeral only; Genesis prints ranges and lists
  (`VERS. 8, 9.--`, `VERS. 11-13.--`) and pads the gap with ellipsis dots. It matched **228 of 487**.
- ⛔ **Migne abbreviates**: one head reads `CAP. XLIV.` among fifty `CAPUT` heads, so the chapter
  counter sat on 43 through all of Genesis 44 and reported three of that chapter's lemmata as
  matching "only elsewhere" at their own correct addresses. Fourth lapse of that regex, and the
  first that failed LOUDLY instead of silently.

### ⭐⭐ THE SPOT CHECK FOUND NOTES, AND OUR TEI KEPT THEIR ANCHORS

Ten pages read at the plate before translation (PDF 39, 40, 46, 52, 53, 60, 67, 74, 82, 89, 96;
page = (col+11)/2, corners checked FIRST every time). Eight feet blank; p.74 carries the signature
line `PATROL. CXIII.` + gathering 5, which is not apparatus. **Two notes recovered, both re-read at
400 dpi**, keyed by a **raised letter** — a third key class beside the numbered and asterisk layers:

    p.39 col 0068B  (a) Revocantur lector ad tomos Patrologiae nostrae. EDIT.
    p.52 col 0094D  (a) In Hebraeo est *gahon*, quod *ventrem* et *pectus* significat.

⭐ **Corpus Corporum drops the note and KEEPS the raised key** (`col. 13 ª`, `« pectus ª »`), which no
previous work's did. So on this book the layer is findable by grep, not by sampling: exactly 2 in
8950, **0 across 8967/9000/9001**. That is what licenses reading two plates instead of 58.
⛑ **The 0068B note is recovered but NOT placed** — its anchor sits inside Migne's own
`[n: (BEDA, Hexaem. …)]` citation, which the injector's search view strips, and marker syntax forbids
nested brackets. Reported as skipped on every run rather than placed by a guess. The 0094D note,
which carries text a reader needs, IS placed and gets a translated `[nt:]` opposite per Wilson's
2026-08-24 ruling.
⚑ **Lead, not a finding:** the plate prints `Revocantur lector` — plural verb, singular subject. The
same standing note in this volume's Prothemata (a different work) OCRs singular, but **that plate is
unread**, so the pair is a lead. Left unadopted for a stint to adjudicate.

Recorded **`partial`, deliberately not tier 3**: a per-page letter layer has no sequence to verify, so
tier 3's guarantee cannot honestly be given, and a note whose anchor glyph the digitization dropped
would still be invisible.

### ⛔ AND A RULE WAS WRITTEN TWICE, WHICH IS HOW THIS PROJECT LOSES THINGS

`split-lemma-brief.mjs` re-derived chunk membership with **its own copy of the harvest rule** —
correct for exactly as long as the harvest was italic-only. On the new inventory it allocated **603 of
1,805 spans** and labelled the last stint's bands `0106D–0109D` for a range that runs to `0182D`.
Same class as the `first-english.mjs` triple failure in CLAUDE.md rule 8. Membership is now computed
once, in `lemma-inventory.mjs`, and READ from `data/briefs/<idno>-lemmata.counts.json`.
⭐ **Nothing downstream could see it except that script's own sum assertion, which is what fired.**
The check earned itself. Keep it.

Tools taught, all committed: `inject-plate-notes.mjs` (letter keys; and because our TEI carries this
key, the glyph stays INSIDE the search window — cutting it out the way a number is cut would have
asked our Latin for `« pectus » tantum` and reported a plate/text divergence that does not exist),
`lemma-inventory.mjs` (strips ALL bracketed apparatus, treats the raised key as apparatus, emits the
membership sidecar), `split-lemma-brief.mjs` (reads it).

### Carried forward
- ⚑ Two `⚑ MATCHES ONLY ELSEWHERE` candidates are live and named in the stint briefs: **0104D**
  `« Videns autem Dominus, »` (gloss is on Gn 6; Gn 6:5 reads *Deus*) in chunk 0011, and **0121A**
  `« Suspice coelum, »` in chunk 0019.
- ✅ The axis-4 `gentilis`/`gentilitas` addition that the Luke session left open **was already made**
  in `GLOSSA-NT-AGENT-BRIEF.md` on 2026-09-04. That open item is closed.
- The `[sic:]`/`[var:]` backlog hunt remains **PAUSED** per Wilson. Do not resume without him asking.
- Volume queue after Genesis: 9002 Matthew (45,922) — still the last gospel — then 8963 Numbers
  (26,336), 8961 Leviticus (32,205), 8956 Isaiah (32,299), 8957 Job (38,206), 8949 Exodus (46,328).


## ▶ HISTORY 2026-09-04 (late) — 8967 *LIBER PSALMORUM* Band C launch brief ✅ **BAND C DONE; 8967 SHIPPED, DEPLOYED AND PUSHED 2026-09-05.** Kept for its method notes only.

**Read `data/briefs/8967-bandC-launch-brief.md` first. It is written, current, and complete.**
Everything below is context for it. ⚑ **The Band A/Band B sections of this file are now HISTORY —
both bands are closed.**

### Where the work stands
**8967 is the Glossa on the Psalms, PL 113 cols 0841A–1080B, 96,646 words, 106 chunks, run in
THREE BANDS.** Wilson's call, 2026-09-04: Opus, split by bands.

- ✅ **BAND A DONE** — chunks 0000–0038, Psalms I–XLIX, 39 chunks, 32,160 Latin words. 43 TEI
  patches, cruces §A–§D, blind polarity read (6 sites, all ours).
  Markers: 37 `[var:]` · 6 `[sic:]` · 2 `[cj:]` · 1 `[d:]`.
- ✅ **BAND B DONE** — chunks 0039–0076, Psalms L–C, 38 chunks, 39,328 words, 8 Opus stints.
  **199 TEI patches**, cruces §F (merge) + §G (stint files verbatim), blind polarity read by four
  fenced readers (**28 sites, 24 ours — and it audited my own patch pass, which failed seven ways**),
  then seven remaining open sites closed on the local scan.
  Markers: 112 `[var:]` · 53 `[sic:]` · 12 `[cj:]` · 2 `[d:]`. ~90 columns read at the plate.
- ⬜ **BAND C READY — the last band.** Chunks 0077–0105, cols 1011B–1080B, Psalms CI–CL,
  **29 chunks, 30,038 words, six stints**: 0077–0081 · 0082–0086 · 0087–0091 · 0092–0096 ·
  0097–0101 · 0102–0105 (357 · 389 · 277 · 329 · 234 · 146 spans).
  ⚑ Lemma briefs verified current — re-chunking with all 192 patches left **Band C's Latin
  byte-identical**, so nothing needs regenerating.
  ⚑ **Only 8 of its ~70 columns have been read at the plate** (1011, 1012, 1043–1048).

**77 of 106 chunks translated. ~29% of the work remains.**

⛔ **NOTHING IS PUSHED AND NOTHING IS DEPLOYED.** Both are protected. `master` is ahead of
`origin/master` by this whole session's commits. **Nothing ships until all three bands are merged.**

### ⚑ THE BURN, MEASURED — quote ~57K/chunk for THIS work, not the runbook's 45K
Band A's eight stints self-reported **2.22M tokens over 39 chunks = ~57K/chunk**. **The note density
is why: 1 note per 28.6 words, against Luke's 1 per 158 and John's 1 per 254** — 3,377 notes here
where Luke had 278. Band C ≈ **1.7M** translation + **~0.5M** blind polarity read + **~0.4M** patch
pass and three-band merge ≈ **2.6M**. ⛔ Each band still needs its own hard-stop statement.

### ⭐⭐⭐ WHAT BAND C MUST INHERIT (all of it is in the launch brief, in full)
1. **OUR LATIN IS NOT MIGNE'S, at ~1.5 sites per column** — 67 sites in A, 149 patches in B, agreeing
   with 9003's independent collation of the sibling PL 114 Psalter. The class runs THREE ways: CC
   moves Migne **onto** the Clementine (invisible to any Vulgate collation *by construction*); CC
   **repairs** Migne's real defects, destroying markers we may fire; and CC **manufactures**
   readings — at 0942A inserting a word whose absence is the gloss's whole point.
2. **NEITHER "TRUST THE TEXT" NOR "SUSPECT THE TRANSCRIBER" IS A RULE. ONLY THE LEAF IS.**
   ⚠ Two imaging hazards, both measured: **italic `e` images as `c`** (withdrew ELEVEN false
   accusations in Band B) and `h`/`b`, which fired in reverse. **The defeater is a same-letter
   control on the same line** — that is how `Nafrubimus` fired and how `omncm` was withdrawn. A
   turned sort is NOT in that class.
3. **A LOGGED COLUMN IS NOT A CHECKED COLUMN**, and **the blind read is the only instrument that
   audits the pass before it.** Seven of Band B's 28 sites were mine — including a `[sic:]` fired on
   the WRONG WORD, a false public accusation against Migne at a word he set correctly.
4. **NO MARKER COUNT MEANS ANYTHING UNTIL THE PATCH PASS HAS RUN** (§F2). Band B looked like
   106 `[var:]`/4 `[sic:]` before the pass and 112/53 after; the suppression was patch ORDERING, not
   Migne's cleanliness. Quoting a count earlier is quoting the digitization's opinion of Migne.
5. **The supplied-completion class (§F8)** — 14 sites where Migne prints the lemma SHORT and the
   English completed it from the Vulgate. **This is the predicted failure profile of verse-by-verse
   commentary.** Render the stump as printed.

### ⭐ WHAT ONLY BAND C HAS
- **The gradual psalms.** 19 `Canticum graduum`, 17 `gradus`; **zero in Bands A and B combined.**
  Ruling recorded (§A1.3, "a canticle of degrees", `gradus` → degree) and **never yet tested at a
  plate.** The gloss numbers the steps in its own voice (`Primus`…`Duodecimus gradus`), which is why
  the ruling is load-bearing rather than stylistic.
- **⭐⭐ Psalm CXVIII is NOT COMMENTED** — chunk 0087 carries the whole psalm as one italic editorial
  sentence in Migne's own voice (*Expositionem hujus psalmi, ut valde prolixam, omittimus…*). It is
  the EDITOR, not the Glossa. Read that column at the plate.
- **The work ENDS** at Ps 150:6, col 1080B, chunk 0105. No colophon in our twin — **check the plate
  for one.** No other band can catch a dropped ending.
- **Book V of the Psalter falls entirely inside the band.**

### Rules settled across A and B that outlive this work
- ⭐ **Compositor errors are Migne's and get restored; INK DAMAGE IS THE COPY'S AND DOES NOT.** A
  damaged `p` imaging as `r` (`possit`→`rossit`) is one leaf's condition, not a reading of the
  edition. This is why `iniquitetem` and `Nocere` were restored and `rossit` was not.
- ⭐ **A TEI patch is not done when the Latin is right — every patched site owes its twin a
  re-read.** Band B's blind read found four such omissions that no gate caught.
- ⭐ **A patch can be a PRECONDITION for an apparatus entry, not a cleanup after it** (0876B).
- ⭐ **`patch-audit.mjs` exists because uniqueness is not location.** `chunk-work.mjs` refuses a
  `find` matching zero or many times; that does not mean the patch is filed at the right column.
  Its first run found 24 Band A patches with no column recorded, one filed at the wrong column, and
  a patch PAIR at 0928B that would have deadlocked the queue.
- ⭐ **English apposition does not inherit a negative across a comma.**
- ⭐ **Quoted scripture is marked TWO ways** (italic lemmata AND « guillemets »), so an italic-only
  archaism check mis-flags.
- ⛔ **A pattern found in a CONTIGUOUS sample is a pattern of that sample.** The "column ≡ 1 (mod 4)
  is clipped" rule came from four consecutive leaves and was refuted twice; Band B opened ~90 columns
  and found exactly one clipped column. Its failure mode is the one nobody audits: applied blind it
  silently **withholds** good markers.
- ⭐ **The local scan answers more than it looks like it does.** Seven sites filed as needing Gallica
  fell to a single re-render at 500–1200 dpi. Open the leaf harder before declaring it unreadable.

### ⬜ OWED BY WILSON — small, and they block nothing
- **Five Gallica sites**, one IIIF request each, and no ruling on spending them:
  `quae non est nisi [inquieta] mente` @0885B (`f443`) · `enumerantur`/`emunerantur` @0898D (`f449`) ·
  `excrescentibus pilis` @0905A (`f453`) · `Misericordia`/`Misericordiam` @0932B · **0981C**, whose
  column is **genuinely clipped** (verified by rendering from x=0; the loss is ragged, which no
  rectangular crop produces).
- Two sites left as parses rather than readings, English unchanged and strain recorded:
  `quidam mundi defecerunt` @0995B and `Non per agentes promissa` @0980D.
- `Desiderabilia`→`Desiderabillia` deferred: two occurrences in col 0871D, the report does not say
  which. Re-read the leaf; do not guess.
- One `In Hebraeo` clause still unread. Two of three closed: 0868A prints `(quod in Hebraeo)` with
  no Hebrew type at all, and 0902B's `In Hebraeol` was CC debris.

### Other 8967 facts worth not rediscovering
- ⭐ **CC drops Hebrew from this work ENTIRELY** — zero Hebrew codepoints in 96,646 words. One site
  recovered from the plate: `nebel (נבל)` @0841B, provenance in `data/hebrew-patches/8967.json`.
- **`PSAMUS CXXIV`** in the TEI is CC's dropped *L*; the plate reads `PSALMUS CXXIV.` Silently
  repaired, no `[sic:]` owed.
- **Migne's running head over this work reads `WALAFRIDI STRABI FULD. MON. OPP.`** The byline is
  Anselm of Laon and his school; that question is closed (9003's correction shipped). Do not reopen.
- **Volume confirmed FROM THE PLATE** (`PATROL. CXIII.` at the foot of PDF 426), not from the
  archive id — whose `04` is the ITEM number.
- Scan on disk: `raw/scans/pl113/patrologiaecurs04migngoog.pdf`. **Page map `PDF page = (col+11)/2`.**
- The `[sic:]`/`[var:]` backlog hunt remains **PAUSED** per Wilson and is unrelated to this work.

---

## ▶ PAUSED 2026-08-31 (Wilson) — the `[sic:]`/`[var:]` backlog hunt

Wilson: *"i want to pause this sic var hunt for now. i just wanted to cut it down a bit."* This
session's fleet (8996 calibration + PL 115/196/203) resolved **565 of the 1,454 uncovered
markers**, all pushed and deployed live on migne.app 2026-08-31. Remaining backlog is **~890
markers across 75 works**, plus 9033's 22 stranded columns (missing scan leaves) and 11632's 68
remaining columns (cols 0318–0486, tooling already in place — see the PL 203 session below).

**Do NOT resume this without Wilson asking for it.** When he does: (1) the model-tier question is
still open — see `feedback_two-agents-same-error-suspect-the-prompt`-adjacent reasoning in this
session's chat, no calibration run has actually been done comparing Sonnet vs Opus on a blind
re-read of an already-resolved batch; run that cheaply before switching tiers. (2) Two open items
need Wilson's own ruling first, independent of the pause: 11550 @0436C (*caminus* vs *canimus*,
see that work's cruces.md) and 9033's 22 unreadable columns (lead: Lyon's numelyo library may hold
PL 115 where Gallica/HathiTrust/Google Books do not).

**Volume translation queue is UNCHANGED and not paused.** Deuteronomy, Mark, John and **Luke**
are done; **Psalms (8967) is IN PROGRESS, Bands A and B of three complete — see the top of this
file.** Remaining after it: 9002
Matthew (45,922) — the last gospel — then 8963 Numbers (26,336), 8961 Leviticus (32,205), 8956
Isaiah (32,299), 8957 Job (38,206), 8949 Exodus (46,328), 8950 Genesis (47,910).

## ▶▶▶▶▶ SESSION 2026-09-04 — 9000 *EVANGELIUM SECUNDUM LUCAM* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE · ✅ PUSHED

Corpus **155 → 156**, `/glossa` **49 → 50 of 58**. `origin/master` = `65f5d4d`. Deployed from
`site/` (`dpl_Cp6rrDpnqsA5mapK4SUAPEN2HG2U`) and smoke-tested on the real domain: work page, cruces
page, `/glossa`, landing, `/authors`, `/scripture`, `/latina`, the resolver at `/pl/114/247a` and
`/pl/114/344b`, and 9003 — all 200, zero raw brackets.

Anselm of Laon and his school, PL 114 cols 0243D–0356A, **44,073 w, 41 chunks, eight Opus stints**,
three blind polarity readers, five plate readers. Badge **New English translation** (workStatus
null; rule 8 forbids hunting to upgrade it). ⚑ **The 9003 byline correction rode this deploy** and
is now live — that long-standing open item is CLOSED.

### ⭐⭐⭐ THE HEADLINE: THE DECLINED LIST IS NOW A MEASURED INSTRUMENT, NOT A HABIT

Every stint was told John's result before writing a line. **Not one fired a `[sic:]` in 44,073
words**; they logged ~140 suspect words instead, most naming the leaf that would settle them.
**Seventeen patches followed and NOT ONE came from a fired marker** — twelve from the declined
lists or from a reader's eye falling elsewhere while a page stood open for another question.

`[var:]` on a quoted clause now stands at **120 of 121 across four Glossa books**.

### ⭐⭐ FIVE SILENT REPAIRS, AND TWO WERE IN NO STINT'S LIST AT ALL

*quator* · *propetiae lectonis* · *invenitur- Qoud* · ***sapipientiae*** · ***astritus***. The last
two nobody had noticed: CC tidied Migne's broken type before any stint saw the text, so the class
is unreachable from our side **by construction** — they exist only because a leaf was open for a
marker. Restored per the 9001 convention; the `[sic:]` each owes deliberately not fired.

### ⭐⭐ 0330A — A FINDING ABOUT THE RECENSION, NOT ABOUT US

The plate prints *Gloria in **excelsis** Deo* at Luke 2:14 **and *gloria in excelsis* again two
lines later at Luke 19:38**, the verse the gloss expounds on that same page. Migne conformed the
nativity song to the entry song. ⚑ The lemma-inventory had scored the span **✓ — off Luke 19:38**.

### ⛔ THE ✓ FAILED SIX TIMES, AND A GOSPEL COMMENTARY IS WHY

A whole-Bible phrase search is defeated by the harmony's own parallels: *Quid cogitatis **mala***
cleared off Mt 9:4 inside a commentary on Lc 5:22; *Gaudete et exsultate* off Mt 5:12; *Supra
terram* cleared although the phrase is **nowhere** in the file. ⚑ **A third mechanism found by a
stint: `lemma-inventory` searches the Clementine as ONE JOINED STRING, so a span can score ✓ by
matching ACROSS A VERSE BOUNDARY.** ⛔ **Fix this before Matthew** — same author, same genre.

### ⭐ THE MERGE COST 3 EDITS, AND THE AXIS THAT DRIFTED WAS ONE NO BRIEF HAD RULED ON

Three stints stated three different `[var:]` thresholds, each before its findings. **Word count is
not what makes a `[var:]` true**: our Latin is CC's transcription, so a one-word divergence has two
owners and the marker names one. **Rule settled: a single-word `[var:]` stands only where the
divergence has a witness of its own** — (a) the gloss argues from the word, or (b) the form is one
letter-level corruption cannot manufacture. ⚑ And a marker was nearly withdrawn **on the strength
of its own apparatus**: 0258B named the Vulgate reading and never said what diverged. The Latin
overturned it (*dilectio* for *caritas*). **A marker that quotes only the witness cannot be audited.**

### The blind polarity read — 13 repairs, ZERO negation defects

Twenty-two of 41 chunks named clean. **Not one dropped or intruded negation in the whole work.**
Worst site: **0323A**, where Migne quotes Luke 18:7 — a question in the Vulgate, stripped of its
mark by the abridgment — and our flat rendering said God **will not** avenge his elect, in a
paragraph whose point is the opposite and whose own twin on the same line stayed interrogative.
⚑ **Three of the thirteen are the John @0409B class: an apparatus entry that is right while the
English carries the opposite.** A logged column is not a checked column.

### Rulings and open items

- ⭐ **WILSON RULED (col 344 verse numbers): restore Migne's wrong `VERS. 2` / `VERS. 14` AND fire a
  `[sic:]` at each** — the only two in the work. Decided on two facts that cut against the obvious
  answer: **nothing machine-readable consumes a `VERS.` number** (the resolver keys on columns,
  `/scripture` on the `[n:]` citations), and **only 39% of the work's columns were read**, so a
  silent restoration buys faithfulness at the sites we happened to open, not in general.
- ⚑ `verify-english` **refused a `[sic:]` carrying prose** — it may wrap only type carried verbatim
  from the plate, so a marker can never be put round our own English.
- ⚑ **`sources/vulgate/README.md` now carries an ERRATA section**: our Clementine prints *repentius*
  at 1Thes 5:3 for *repentinus*, upstream in the 2005 Quasimodo release. A stint refused to cite the
  verse and was right — a marker there would have accused Migne using **our own typo as the standard**.
- ⬜ **`gentilis` and `gentilitas` must be added to axis 4 in the Matthew brief** — two stints hit
  them, both flagged rather than deciding silently.
- ⬜ `(Reg. XII)` @0331C stays **unparsed** by decision: the plate prints it exactly so, and the
  identification (3 Kings 12:16) is ours, not Migne's.
- ⚠ The plate reads are **targeted, not word-by-word**; one reader found *specie*/*species* while
  checking something else and said a full pass would find more.
- ⚠ New volume scan defect: **leaf n153's corner is set `9 5`** (dropped medial sort), beside the
  known n215 where 421 prints twice and 420 never.

### NEXT

**Nine Glossa books left, ~391K Latin words**, smallest first: 8963 Numbers (26,336), 8961
Leviticus (32,205), 8956 Isaiah (32,299), 8957 Job (38,206), 9002 **Matthew (45,922)**, 8949 Exodus
(46,328), 8950 Genesis (47,910), 8967 **Psalms (96,650)**. **Matthew is the last gospel** and should
carry the fixed ✓ checker plus the axis-4 additions.
⚠ **UPDATE 2026-09-04: Psalms was taken next, out of smallest-first order, at Wilson's direction,
and is banded. The ✓ checker fix this section calls for was extended again for Psalms** — a psalter
heads its divisions `PSALMUS CVI.`, never `CAPUT`, so the ⚑ ownership test had gone silent on the
whole work (4 fires in 5,999 spans against Luke's 13 in 1,459). Matthew inherits both fixes. The `[sic:]`/`[var:]` backlog hunt remains
**PAUSED** per Wilson.

---

## ▶▶▶▶▶ SESSION 2026-09-03 — 8999 *EVANGELIUM SECUNDUM JOANNEM* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE · ✅ PUSHED

Corpus **154 → 155**, `/glossa` **48 → 49 of 58**. Commits `dc01fec` → `446fdc3`, **PUSHED**
(`origin/master` = `446fdc3`). Deployed from `site/` and smoke-tested on the real domain: work
page, **cruces page**, `/glossa`, landing, `/authors`, `/scripture`, `/latina`, and the resolver
at both `/pl/114/355b` and `/pl/114/426b` — all 200, zero raw brackets on the page.

⚑ **Mark (9001) was already shipped and live when this session opened** — the previous session
finished it; nothing was owed there. Preflight on it exits 0.

Anselm of Laon and his school, PL 114 cols 0355B–0426B, 29,727 w, 28 chunks. Six Opus stints,
six plate readers, three blind polarity readers. Badge: **New English translation** (workStatus
null, and rule 8 forbids hunting to upgrade it).

### ⭐⭐⭐ THE HEADLINE: 23 OF 23 `[var:]` STOOD, AND ALL 17 CORRECTIONS CAME FROM THE **DECLINED** LIST

**No stint fired a single `[sic:]` in 29,727 words.** The launch brief told them their
attribution guess carries no evidential weight and to log a suspect word unmarked for the plate
instead; they logged nineteen. Every `[var:]` and every `[cj:]` they *did* fire stood at the
plate — 26 for 26.

**So the 23 leaf-reads spent on fired markers produced no corrections at all, and the nineteen
declined oddities produced all seventeen.** A stint that had guessed would have spent its
credibility on exactly the wrong sites.

With 9004 (46/46) and 9001 (19/19) that is **88 of 88 `[var:]` standing across three Glossa
books**.

### ⭐⭐⭐ THE NON-WORD PRIOR DOES NOT HOLD WITHIN A SINGLE WORK

| range | declined non-words read | verdict |
|---|---|---|
| cols 381–390 | 4 (*audit*, *actionem*, *assensionem*, the Jo 4:13–14 clause) | **4 of 4 MIGNE'S** |
| cols 399–415 | 5 (*impieretur*, *Sea*, *liguis*, *manao*, *interrogate*) | **5 of 5 OURS** |
| 9001 | 6 | 6 of 6 ours |

Same author, same recension, same volume, ~200 columns apart. `reference_plate-sweep-rate-varies-by-work`
is too weak: **the rate varies by RANGE inside one work.** No policy may be inherited from a
sibling book — only "log, do not attribute, read the plate" survives.

### ⚑ TWO NEW MECHANISM CLASSES, BOTH WORTH A PASS OVER OTHER WORKS

1. **THE HYPHEN-REJOIN CLASS — 4 of the withdrawals, found independently by four readers who
   could not see each other.** CC mis-rejoins a word Migne broke at a line or column turn:
   `scie-`/`bat` (and CC kept the orphan syllable *as well*, so our file printed it twice),
   `im-`/`pleretur`, `li-`/`gnis`, `inter-`/`rogare`. It manufactures a plausible non-word and
   **no frequency test can tell it from Migne's own.** It is greppable.
2. **SILENT REPAIRS — 5 sites, running the other way.** CC quietly fixed Migne's broken type, so
   a `[sic:]` would have been TRUE and our clean file hid it: *contringitur*, *cupidites*,
   *Redit **sd** patriam*, *fierit*, *sanctificati **iu** veritate*. **The class no Vulgate
   collation can ever reach**, because the digitization removed the evidence first — the mirror
   of 9003's manufactured `judicavit`. Migne's readings restored per the 9001 convention; the
   `[sic:]` each owes deliberately NOT fired. ⛔ A reader argued against restoring two of them
   ("would introduce two non-words") — that is the reasoning the convention overrides, and 9001
   settled it by restoring *Tlbi* and *cruxifixum*. Disagreement recorded in the patch file.

### ⭐ THE MERGE COST 15 EDITS INSTEAD OF 147 — CARRY THE CONVENTIONS IN, DON'T RECONCILE THEM AFTER

First Glossa book where the launch brief handed all six stints Mark's four settled axes **before
they wrote a line**. Merge cost: 9001 = 100+ edits, 9004 = 147, **8999 = 15**, all on `usque ad`,
the one axis Mark had never settled. Each stint was internally consistent; the drift was purely
between stints and split 3–3. Settled on **as far as** (within-work majority 26–15 *and* the form
9001 uses). The other four axes held exactly when measured: *turba* 10/10, *multitudo* 4/4,
*daemon-* 7/7, *mysterium* 13/13, *sacramentum* 19/19, all 13 `saith` inside italic spans.

⚑ **THE MERGE'S OWN LESSON — THREE FALSE DRIFT SIGNALS, EVERY ONE AN ARTIFACT OF THE
INSTRUMENT.** A naïve `\bturba` grep matches the **verb** *turbare* and made four chunks look
like they had five unrendered "crowds" (they contain none); `\bdaemoni` misses *daemones*; BSD
`grep -o '\bnation'` matches inside *incarnation*, *damnation*, *predestination*. Each read
exactly like real drift. **Check the instrument before reporting the drift.**

### ⭐⭐ THE BLIND POLARITY READ OVERTURNED TWO RULINGS THE MERGE HAD ALREADY CLOSED

26 sites, **19 ours**, mechanism 5 again dominant (11 of 19).

⛔ **All three particle tallies found nothing, and the worst site in the book scored CLEAN.** At
0415A the stint correctly diagnosed Migne's `nobis` for `non` and fired a `[cj:]` — but **parked
the negation inside the bracket**, so the running English read *"they to such a degree understand
for us"*. The marker's own text contains "not", so the paragraph looks negative to every counter,
to `verify-english`, and to the reader's own tally, while the sentence a human reads contradicts
itself and **three neighbours on one line**. 7a⁗ in its purest form: **the force is carried in
the running text, never in the apparatus.**

1. **0366C was logged as MIGNE'S and is OURS.** `non` governs both perfect subjunctives and
   Chrysostom's Greek has καί under a single μή. The English negated only the first limb — and
   `alicubi` had been moved out of the apodosis into the protasis, **which is what made the
   un-negated limb read tolerably and hid the fault.** Ruling and its plate-check item struck.
2. **0409B's decline rested expressly on *modo* construing as "only" — and the shipped English
   printed "presently"**, the construal the crux had rejected. The 9001 @0199A class: **a crux
   that records a decision the text does not carry**, invisible to any re-reading of the
   apparatus because the crux says the right thing.

⚑ Reader 2's structural point: the merged file's mechanism-5 census named three sites, **all in
chunks 0010–0011**, and all four of its serious re-bindings sat in **0012–0018**, the range that
never got a census. **A stint's apparatus is a complete record of what it looked for and silent
about the rest.**

### Other things settled here

- ***Panes nostri* (0373B) is MIGNE'S**, read at 12× against the genuine *tr* of *nostri* two
  letters away. The hardest decline in the work, and the stint **had leaned toward *Patres***.
  Fourth measured case in this project of a confident attribution refuted by the page.
- **A `<LACUNA>` that marked no lacuna** — caught at chunking, before any stint saw it. CC lost
  one word (*nos*) at a column break and tagged the rest of the paragraph. ⛔ Worse than a
  visible hole: `chunk-work` strips the tag and KEEPS the text, so the chunk would have read a
  broken clause with nothing to say it was broken.
- **`lemma-inventory.mjs` had a real defect**: the Clementine match was an unanchored substring
  test, so a span whose last word is a **prefix** of the Clementine's word scored ✓ — and at
  0401A the prefix *congregare*/*congregaret* **was** the divergence. Fixed with a word-boundary
  anchor. Measured 23 false ✓ in 8,036 (0.29%) corpus-wide; ⛔ **not a retrofit**, the other 22
  sit in shipped works and were not swept. ⚑ The first measurement said 61 — the detector was
  wrong, because `clementine-flat.txt` glues the Song of Songs' speaker rubrics to the next word
  (`<sponsa>osculetur`).
- **The launch brief is now a COMMITTED FILE** (`data/briefs/8999-launch-brief.md`). 9001's
  cruces cite "addendum A of the brief" eight times and no such file existed.
- ⛔ **Leaf n215's printed corner reads `421`, not `420`.** n216 reads 421/422, so **421 is
  printed twice in PL 114 and 420 never** — a compositor's mis-numbering. Corner numbers alone
  would misfile every finding on that column by one.
- ⚑ **A `<pb>` anchor is not a locator for a phrase near it.** Four sites sit in a different band
  from the anchor before them. Two of those errors were in the readers' briefs and came from
  reading the `<pb>` position instead of the plate.

### NEXT

**Ten Glossa books left, ~435K Latin words**, smallest first: 8963 Numbers (26,336), 8961
Leviticus (32,205), 8956 Isaiah (32,299), 8957 Job (38,206), 9000 Luke (44,075), 9002 Matthew
(45,922), 8949 Exodus (46,328), 8950 Genesis (47,910), 8967 **Psalms (96,650)**. **Luke (9000) is
the next gospel.** The `[sic:]`/`[var:]` backlog hunt remains **PAUSED** per Wilson.

⚑ **2026-09-03 update on 9003: Wilson ruled "fix it now, don't deploy — it rides the Luke deploy."**
The byline correction (`f050aad`) had left two sentences that were false once it landed, both
caught by reading the BUILT PAGE rather than the diff, both fixed in `fba495e` and still
undeployed: (1) the shared key `Auctor incertus (Walafridus Strabo?)` carried a
**work-specific** `attributionFlag` written for 9004 (Martianay, the Jerome manuscripts, *auctor
esse potuerit*) — so the moment 9003 took that byline it inherited a provenance note about a
different book. `author-bios.json`'s own `_note` states the rule: **a shared anonymous key may
carry only what is true of every work under it**; per-work provenance goes in `work-about.json`.
Generalised, and nothing was lost because each editor's own preface is printed and Englished at
the head of its own work. (2) 9003's headnote still read *"That is why the work is filed here
under Anselm of Laon and his school."* ⚑ **The lesson is the retrieval one: a byline lives in
more places than the byline field** — grep the built pages for the old author string after any
attribution change. `9000` (Luke) is chunked and its lemma inventory built (`cebe68f`), fleet
NOT launched.

⬜ **STILL OPEN FOR WILSON, unchanged and carried forward: 9003 (*Expositio in XX primos
Psalmos*) carries the identical wrong Glossa byline that 9004's was corrected off, and is LIVE
with it.** Its correction is committed but **staged, not deployed** (`f050aad`), because it
changes a second live work's public attribution. ⚑ If it goes, add 9003 to `ALSO_PRINTED_HERE`
in `build-glossa.mjs` **in the same commit** or it silently vanishes from `/glossa`.

---

## ▶▶▶▶▶ SESSION 2026-09-01/02 — 9004 *EXPOSITIO IN QUATUOR EVANGELIA* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE · ✅ PUSHED

Corpus **152 → 153**, `/glossa` **46 → 47 of 58**. Commits `7acf335` → `90eaf95`, **PUSHED**
(`origin/master` = `90eaf95`). Deployed twice (`dpl_FWHSDMcge7VuZSWGSErLPRQQTx7E`, then
`5G5EEbjUiGLXUD7JEAXL1zhkykBh` for the byline + badge correction) and smoke-tested on the real
domain each time: work page, cruces page, `/glossa`, landing, `/authors`, and the resolver at
both `/pl/114/861a` and `/pl/114/903c`, all 200.

Walafrid Strabo (attrib.), PL 114 cols 0861A–0916B, 23,255 w, 18 chunks. Four Opus stints
translated it; four blind Opus readers followed (three polarity, one range each). Badge reads
**First English translation** on Wilson's own ruling (below).

### ⭐⭐⭐ THE HEADLINE: THE PLATE READ RAN **BEFORE** THE WORK SHIPPED, AND THE RESULT SPLIT PERFECTLY BY MARKER CLASS

**73 markers, 25 pages, 36 columns. 65 confirmed as Migne's, 8 withdrawn as ours.**

| class | fired | confirmed | withdrawn |
|---|---|---|---|
| `[var:]` — a quoted clause | 46 | **46** | **0** |
| `[sic:]` — a single word | 27 | 19 | **8** |

**Every withdrawal is a single broken WORD. Not one quoted clause was ours.** That is the
11535/11550 asymmetry on a third work and at full strength — 46/46 is the cleanest run of it
yet. ⚑ Two of the eight are the **same letter-pair in opposite directions inside one work**
(0906B *m*→`in`, 0912A `in`→*m*), the same mirror argument the 11550 *eum/cum* pair made.

### ⭐⭐⭐ AND THE FINDING THAT SHOULD CHANGE HOW STINTS ARE BRIEFED: THEIR ATTRIBUTION GUESSES WERE WRONG 9 TIMES IN 14

Stints 3 and 4 classed fourteen readings as probably **our-file**. The plate agreed with **five**
and refuted **nine** (0893A *Fretus alabastrum*, 0897C *prava indirecta*, 0898B *caudes*, 0901D
*Aprima*, 0903B *arbae*, 0907B *divitatem*, 0912D *primum*, 0913A *istis*, 0913D *fagulis*).
⛔ **And the three withdrawals in stint 2's range were fired by the one stint that made no
attribution claim at all** — so across the work, confidence and truth are close to uncorrelated.

⚑ **What failed is identifiable and it is the corpus-as-control argument**: *"the correct form
prints eleven words later"*, *"a non-word, and the sentence is an etymology of that very word"*,
*"a contracted* arbores*"*, *"a stray capital fused to the adjective"*, *"a fusion at a line
break"*. `reference_plate-read-triage` already rules these out — frequency and internal
corroboration prove an error EXISTS, never whose it is — and this work puts the number on it.

⚑ **A FUSED WORD IS NOT AUTOMATICALLY OURS.** 0897C is the worked case: Luke 3:5 *et erunt prava
indirecta*, classed as our fusion on the strength of being a fusion. **Re-read at 400 dpi, the
plate sets it fused**, normal spacing either side. Marker right, class wrong.

### ⚠ A QUALIFICATION TO THE "CORPUS CORPORUM CARRIES NO *FORTE* NOTES" FINDING

**0865A prints an inline bracketed conjecture — *[ Forte, priusquam]* — and our TEI carries it.**
The measured zero across all 5,276 files is about the **foot-of-page layer**. A conjecture Migne
sets **inline in the running text** can survive. **A `Forte` grep over the TEI is not a
guaranteed zero.** Recorded in CLAUDE.md.

### The blind polarity read — 8 defects of ours, 7 repaired, and NOT ONE was a negation

Three readers, disjoint sixes, all 18 chunks, blind to `cruces.md` until findings were written.
**No dropped or added negation anywhere** (~70 printed particles checked in the John range
alone; several self-contradictory sentences carried intact). **The failure profile was
mechanism 5 — a reference silently re-bound to the contextually easier noun — five of eight.**
Worst was **0908B**, where reading *ipsum* as a nominative intensifier made **God** the maker of
man's mortality in a sentence whose whole point is that the devil was. Also **0869A**, where the
Matt 3:15 lemma *sine modo* had been read as prose ("without measure"), leaving its own gloss
floating free of any lemma. 0914C left standing and logged: the plate's clause is **verbless**
and our English supplies the verb; no marker class fits a word Migne never set.

### The cruces merge found real convention drift — three axes, 147 edits

*gentes* was rendered three different ways across four stints (one of them self-inconsistent),
in a work whose whole argument is the *Judaei*/*gentes* typology — the 11551 *epistylium* failure
in milder form. **The corpus had no convention to inherit** (8945 leans *nations*, 8996 and 9003
lean *Gentiles*); settled on **gentiles**, after checking that **no *natio* occurs in the work**
so nothing was flattened. Stint 4 had additionally archaized the **commentator's own voice**
(168 gloss-side *-eth* forms), which `translation-style.md` forbids; the 88 metalanguage verbs
(*ostendit*/*significat*/*figurat*) were normalized and the *-eth* forms sitting inside
**unitalicised scripture quoted in the gloss** deliberately left. Test used: italic membership,
because it is checkable against the twin.

### ⚠⚠ THE BYLINE WAS WRONG, AND THE SAME ERROR IS STILL LIVE ON 9003

Corpus Corporum files 9004 under the Glossa author. **Migne does not print it as Glossa.** PL 114
gives it its own title block — **WALAFRIDI STRABI FULDENSIS MONACHI** — at cols 861–916, past the
end of the Glossa proper, with its own preface, the *Admonitio Martianaei*, saying he found it in
manuscripts ***falso ascriptam Hieronymo*** and printed it *maxime quod Strabus Fuldensis auctor
esse **potuerit***. Byline corrected to **`Auctor incertus (Walafridus Strabo?)`** (the corpus's
existing form, cf. the Bede/Alcuin dubia), rendering as **Anonymous** + attribution flag. The
harvested CC assertion is preserved in `ccAttributions`, not destroyed.

⬜ **9003 (*Expositio in XX primos Psalmos*, cols 751–794) HAS THE IDENTICAL DEFECT AND IS LIVE
WITH IT.** Its plate (p.381) was read this session: same title block **WALAFRIDI STRABI
FULDENSIS MONACHI**, from Pez's *Thesaurus*, with **PEZII MONITUM PRAEVIUM** — and **Pez's own
preface explicitly distinguishes his Walafridian psalms exposition FROM the *Glossa ordinaria***,
inviting the learned to note the *discrimen* between them. **It needs the same correction; it was
not made, because it changes a second live work's public attribution and that is Wilson's call.**

⚑ `/glossa` keeps both works, 9004 now named **explicitly by idno** in `ALSO_PRINTED_HERE` rather
than reached through the author, so the page still shows what Migne prints under this head
(58 books, 47 Englished, unchanged). If 9003's byline is corrected, **add it to that set in the
same commit or it silently vanishes from the page.**

### ⚠ A DATA-SHAPE TRAP, HIT THIS SESSION

`first-english.mjs` reads **work-level** `wk.translation`; every other work carries it there and
its text-level `translation` is `undefined`. The ship flags were first written to the **text**
record, where nothing reads them — and **nothing failed loudly**, because `build-glossa` asserts
"Englished" from the BUILT PAGE and `RECENT` is an explicit list. Corrected. **Write
`translation` on the WORK record.**

### Badge — Wilson's own ruling

*"i am confident to say this is a first english translation. quick search brought nothing close
to it and all the english translations are recent and pop up quickly."* (2026-09-02.) Recorded as
`workStatus: none` **with `workStatusVerified: '2026-09-02'` and a named `workStatusBasis`**, so
the strong claim is traceable — rule 8 forbids tidying a null into a `none` precisely because an
untraceable one cannot be told from evidence. This one can.

### Housekeeping

Plate spot check for foot-of-page notes: **8 pages, checked zero, coverage `"spot"`**, read
BEFORE translation per the 2026-08-19 rule and weighted to the five internal divisions (all five
fall mid-page). ⚑ p.436 carries an asterisk note that belongs to the **preceding** work, above
the rule — recorded in the caveat so nobody inherits it. Indexing: **0 scripture**, which is a
fact about the work (one `[n:]` note in 23,000 words; Walafrid's lemmata are unmarked), not a gap.

### ⛔ THE WORKFLOW IS NOW ENFORCED, NOT REMEMBERED — READ THIS BEFORE THE NEXT WORK

**`node scripts/preflight.mjs <idno>` must exit 0 before any deploy.** One command, seven
checks, each of which either exits non-zero or does not count. Its first is the **RATCHET**:
`data/plate-backlog-baseline.json` freezes the unread-plate backlog at **889**, and a work
**absent from that file must carry ZERO unread markers**. New work ships already read.

**So the per-work order is now fixed, and the plate read moves BEFORE the ship, not after:**
1. `chunk-work.mjs <idno>` → plate **spot check** for foot-of-page notes (2026-08-19 rule).
2. translate (stints), `verify-english.mjs`.
3. **read the plate for every `[sic:]`/`[var:]` the stints fired** — this is the step that keeps
   the number frozen, and on 9004 it cost 25 page renders and withdrew 8 false claims.
4. merge the cruces files, reconciling convention drift (a real step, not a tidy-up).
5. blind polarity read → `polarity-record.mjs`.
6. `index-work.mjs`, build pages, **`preflight.mjs`**, deploy, smoke-test.

⛔ **Never `plate-gate.mjs --freeze` to clear a red ratchet.** The baseline records plates that
were READ; re-freezing over a regression records a claim nobody checked. Freeze only to lock in
a fall, after reading plates.

### NEXT

**Eleven Glossa books left, ~465K Latin words**, smallest first: 9001 Mark (25,718 w), 8963
Numbers (26,336), 8999 John (29,727), 8961 Leviticus (32,205), 8956 Isaiah (32,299), 8957 Job
(38,206), 9000 Luke (44,075), 9002 Matthew (45,922), 8949 Exodus (46,328), 8950 Genesis (47,910),
8967 **Psalms (96,650)**. The `[sic:]`/`[var:]` backlog hunt remains **PAUSED** per Wilson.

---

## ▶▶▶▶▶ SESSION 2026-08-31d — THE `[sic:]`/`[var:]` BACKLOG, PL 196 · ✅ BOTH WORKS GATE-CLEAN · ✅ PUSHED + DEPLOYED (see PAUSED note above)

**11535** *De eruditione hominis interioris* and **11550** *Explicatio in Cantica canticorum*, the
two works Wilson named as carrying the backlog. Commits `1ce533e` and `6758b22`, **pushed and
deployed later the same session** alongside the PL 115/203 work — the "not pushed, not deployed"
state described just below was true when this section was first written but is stale; migne.app
reflects this.

### The numbers

**240 markers carried to Migne's page. 54 of them — 22% — were accusing the wrong party.**

| work | markers | confirmed | withdrawn | of which `[var:]` |
|---|---|---|---|---|
| 11535 | 154 | 126 | **28** | 1 |
| 11550 | 86 | 60 | **26** | 0 |

`plate-gate.mjs` now exits 0 on both; `verify-english.mjs` and `scan-raw-markers.mjs` clean.
54 TEI patches written, both works re-chunked with **no chunk boundary moved** in either.

### ⭐⭐ THE FINDING: THE MARKER CLASS PREDICTS WHOSE THE DEFECT IS

**Of 77 `[sic:]` across the two works, 53 were Corpus Corporum's and 24 were Migne's. Of 92
`[var:]`, exactly ONE was ours.** That asymmetry is mechanical, not luck: a `[sic:]` fires on a
**word** that looks broken, which is precisely what an OCR letter-swap manufactures (c→e a dozen
times, e→o, n→u, u→a, h→n, a dropped or doubled letter, a word split or fused at a line break); a
`[var:]` fires on a **quoted clause**, whose divergence is too long and too semantic for OCR to
invent. **Suspicion of a single word is suspicion of our file. Suspicion of a whole clause is
evidence about Migne.** Worth promoting into `translation-style.md` as a prior for translators.

### ⛔ AND THE COROLLARY: CORPUS-UNIQUENESS CANNOT ATTRIBUTE A DEFECT

11550's `Fons nortorum` (0491A) is the worked example, and it had the strongest case in either
work: dense internal corroboration *and* an exact corpus control — `nortorum` in **one file of
5,276, this site**. **The plate prints `Fons hortorum`.** `cruces.md` §2 names corpus-grepping "the
fleet's default" method for confirming a `[sic:]`; of the seven markers it lists as confirmed
unique-to-this-site, the plate withdrew four. This is `reference_plate-read-triage`'s rule —
frequency is decisive that an error EXISTS, never whose it is — with a number on it at last.

⚑ **The mirror pair at 11550 @0451C settles it mechanically:** within eleven lines of one column,
Corpus Corporum corrupts Migne's *eum* to *cum* **and** silently repairs Migne's own *cum* to *eum*.
One page, one letter-pair, both directions. No frequency test can separate those.

### ⭐ A SECOND WITNESS FOR PL 196 — use it, it costs one HTTP request

Our Google scan `patrologiaecurs104unkngoog` clips **both** margins unpredictably (5–9 chars off the
left column's line-starts, 3–6 off the right column's line-ends), and it defeated seven candidates
outright. **archive.org `patrologiaecursu0196mign`** is a different copy with clean margins:

    https://archive.org/download/patrologiaecursu0196mign/page/n<N>.jpg    # leaf n = (column + 43) / 2

calibrated at n648 = cols 1253/1254, re-verified at n260/n262/n264/n665/n676. **It settled all
seven**, and not all the same way — five CONFIRMED the marker, two WITHDREW it.
(Main scan map, for comparison: **PDF page = (column + 41) / 2**.)

### ⚠ AN AGENT SILENTLY DROPPED A MARKER — the arithmetic caught it, nothing else would have

One of 240 (`11550 @0452A *hos a tendit*`) was dispatched with its batch and came back
**unreported**. It surfaced only by reconciling the *surviving* marker count against the reports —
15 `[sic:]` still standing, 14 accounted for — and then reading the page directly (it was ours).
**Reader silence is not a verdict.** Any future fleet of this shape needs that reconciliation as a
step, not as luck.

### ⬜ OPEN FOR WILSON — one editorial call, nothing changed

**11550 @0436C, the *canimus* / *caminus* `[cj:]`.** `cruces-0010.md` calls it "the clearest
Pattern 18 site in the range", and its whole argument is that Migne's Isaiah proof text prints
*caminus* nine words after Richard's *canimus*. **The plate prints *canimus* in both places**; our
*caminus* is Corpus Corporum's own emendation toward the Vulgate. The `[cj:]`, the `[var:]` and the
Latin are all **left exactly as they were** — re-deciding means choosing among three readings of a
clause that construes under none, which is an editorial call, not a plate call.

### Recorded, deliberately NOT acted on

- **24 sites where Corpus Corporum silently normalises a genuine Migne misprint** (*sommo*, *capis*
  for *lapis*, *sacrumentum*, *conscienta*, *menbra*, *veniemns*, *plenisssima*, *venter mens*, …).
  Restoring each would put the defect back in the Latin and require a **new** `[sic:]` — a fresh
  public claim per site. Listed in both `cruces.md` files. The one worth re-opening is 11535 @1357A,
  where Migne's *obtrectationem* (acc. sg.) does not construe and our text has the easy genitive
  plural: an unadjudicated Pattern 18 candidate nobody knew was there.
- **11535 @1260A: the plate spells the king *Nabuchonosor***, without the *d*, then restores it when
  it re-quotes at 1261A. The work keeps the name in Migne's Latin form *because it is glossed
  etymologically*, so this wants a decision rather than a silent fix.
- **Foot-of-page apparatus: a checked zero on both works** — 63 of 11535's 69 plate pages, 49 of
  11550's 60, every reader inspecting full page width. Recorded in
  `data/plate-notes/coverage.json` as coverage **`"spot"`** for both, deliberately not `"full"`,
  since some pages were never rendered: it licenses shipping without `[cn:]` recovery and does not
  license a claim that these works have no apparatus. It does clear the `⬜ PLATE SPOT CHECK OWED`
  banner that `chunk-work.mjs` prints for them.

### NEXT

1. **Deploy** — `cd site && npx vercel --prod --archive=tgz`. Wilson's per-action OK required.
   Both works' pages, and their cruces pages, currently serve the pre-read text and 54 markers
   that have since been withdrawn.
2. Push `master` (Wilson's per-action OK required).
3. Consider promoting the marker-class prior above into `translation-style.md`, so translators
   carry it before they fire a `[sic:]` rather than after.

---

## ▶▶▶▶▶ SESSION 2026-08-31c — 8945 *LIBER DEUTERONOMII* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE

Corpus **151 → 152**, `/glossa` **45 → 46 of 58**. Commits `787a66a` → `0e113ff`, **PUSHED**
(`origin/master` = `0e113ff`). **Deployed** (`dpl_9p1rbXQtAt2VSjY44YUuoJ798ZH6`, first attempt
returned a transient "Not authorized" `deploy_failed`, immediate retry succeeded) and
smoke-tested on the real domain: work page, cruces page, `/glossa` (confirms Deuteronomy
listed), landing (confirms RECENT entry), `/scripture`, `/authors`, and the resolver at both
`/pl/113/482a` and `/pl/113/445d`, all 200. Badge reads "New English translation" (workStatus
null, fails safe correctly).

Five Opus agents translated 24 chunks in parallel (0000–0004/0005–0009/0010–0014/0015–0019/
0020–0023), merged same session. Apparatus: **3 `[sic:]` · 3 `[var:]` · 1 `[cj:]` · 1 `[d:]` ·
2 `[nt:]` · 2 `[ed:]`**, all reconciled against 346 `[n:]` notes / 240 column anchors.

### ⭐⭐⭐ THE HEADLINE: 6 OF 9 OWED MARKERS WERE CORPUS CORPORUM'S, NOT MIGNE'S — SAME PATTERN AS 8996, EVEN MORE OF THEM

Nine `[sic:]`/`[var:]` candidates went out with the five stints without a plate read (rule 8a).
All nine read this session against **Gallica `ark:/12148/bpt6k5505319w`** (PL 113 second witness),
page map **f = ceil(column/2)**, calibrated at f242 (483/484) and reconfirmed at three more pages.
**3 CONFIRMED as Migne's own printing** (0445D Cant. 1:12 missing *meus*; 0452A *gui* for *qui*;
0454C *Cabesbarne* for *Cadesbarne*, Migne's own inconsistent spelling two lines apart). **6
REFUTED — Corpus Corporum's corruption, not Migne's**, five of them landing in one tight span
0471C–0481C (*coversans*→*conversans*, *magnificam*→*magnificant*, *Catceati*→*Calceati*,
*pusillium*→*pusillum*, *quo que*→*quoque*) plus 0496C (*pli*→*pii*). All six patched
(`data/tei-patches/8945.json`), markers withdrawn, English corrected to render the plain word.
Combined with a seventh corruption a translation stint had already caught and correctly left
unmarked (0492B *pre*→*per*), that's **7 of 10 candidate defects in this one work turning out to
be the digitization's fault, not Migne's** — the same lesson 8996 delivered two sessions ago,
now measured on a second, larger sample. **Read the plate before you accuse Migne of anything.**

### The polarity read: one real fix, two declined, four new candidates logged

Three blind Opus readers, disjoint ranges over all 24 chunks, cruces files unread until findings
were formed. 19/24 chunks clean. **One real translator error**: @0471C, *exspectat* ("awaits")
had been rendered "looks after" with *post* folded into the phrasal verb — the tail left garbled
when this session's own `[sic: coversans]` withdrawal touched the same sentence. Fixed.
**Two proposed "our defect" flags at @0464B (same gloss, two readers, two different claims)
were reviewed and declined** on closer parse — both are grammatically faithful literal
renderings of what Migne prints, not translator errors; full reasoning in `cruces.md` §5.
**Four new Migne-side contradiction candidates logged, none marked** (no plate read for their
columns): 0490B–C VERS. 17 (*coluerunt* for the Vulgate's *non coluerunt*, Deut. 32:17 —
strong candidate for a dropped *non*), 0448B (a station-count arithmetic defect, 20 vs 21,
the passage's own numbers don't reconcile either way), 0475C (*non debemus despicere*, likely a
dropped *propter*), 0473B (*scitur enim* vs a concessive *scitur tamen*, low confidence).

### Plate spot check also closed this session

8 full pages read (the same Gallica session), spanning the whole book — no foot-of-page apparatus
of either layer found on any of them. `data/plate-notes/coverage.json` now carries an 8945 entry,
`coverage: "spot"`.

## ▶ OPEN — FOR WILSON
1. ⬜ Four new polarity candidates + the pre-existing `[var:]`/case-ending candidates from 8996
   and earlier sessions, all logged in their works' cruces.md, none blocking.
2. Carried unchanged from prior sessions: the `[sic:]` backlog (381 pages) and `[var:]` half —
   now positive across **five** works (36/37, 14/14, 7/7, 14/14, and this session's mixed
   3-confirmed/6-refuted result, which is a different and arguably more informative shape);
   `chunk-work.mjs` over-claiming coverage; 8988 `0636A` *aurursus*; 8976 vs Pattern 7; 8986
   `Baruch III @ 0561A`; PL 114 second witness still not properly fetched (PL 113's Gallica
   witness IS now fully proven across two works, 8996 and 8945 — same treatment for PL 114 would
   likely pay off just as well).

## ▶ NEXT — Wilson's call (2026-08-31c): **run the `[sic:]` backlog next session**, ahead of
the volume-translation queue below. 381 pages carried across the shipped corpus, `[var:]`
half (~1,033 markers) alongside it. This session's and 8996's results are the reason to do it
now rather than later: two works in a row came back majority-false (6/9 here, 7/8 on 8996) —
**not because those two works are unusual, but because nothing has ever actually read most of
the backlog's pages.** Before launching: (1) re-derive the recalibrated per-page burn from
this session and 8996's actual token spend (a handful of columns each, quoted at launch, not
the cheap number), (2) decide the reading unit — per-work like this session's Gallica pass, or
per-volume like the original PL 113 8-page zero-apparatus sample — and (3) hard-stop ritual
applies: state works/pages, estimated burn, ask "which model, and go?" before the fleet
launches. `reference_plate-read-triage` and the `CLAUDE.md` 8a section (esp. the 2026-08-28
9003 collation and this session's `data/tei-patches/8945.json`) are the governing precedent.

After the backlog (or alongside it, Wilson's call at the time): the Gospels 24–45K each,
Genesis/Exodus 42–43K, **Psalms 90K** (Deuteronomy is now done; per the prior queue, unchanged
by this session).

## ▶▶▶▶▶ SESSION 2026-08-31b — 8996 *EPISTOLA AD ROMANOS* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE

Corpus **150 → 151**, `/glossa` **44 → 45 of 58**. Commits `d139989` → `a133fb6`, **PUSHED**
(`origin/master` = `a133fb6`). Deployed (`dpl_67UkXY1RQ9BGn4jbrd36JcZMqZHE`) and smoke-tested on
the real domain: work page, cruces page, landing, `/glossa`, `/scripture`, `/authors`, and the
resolver at `/pl/114/469a`, all 200. Badge reads "New English translation" (workStatus null,
fails safe correctly — no hunting was done to earn "First").

### ⭐⭐⭐ THE HEADLINE: 7 OF 8 OWED `[sic:]` CANDIDATES WERE CORPUS CORPORUM'S, NOT MIGNE'S

Two translation stints (chunks 0010–0014, 0015–0019) logged 8 `[sic:]` candidates as owed
pending a plate read (cols 495, 497×2, 500, 504×2, 512×2, 517). All eight were read at the plate
this session (archive.org `patrologiaecurs06saingoog`, plus Gallica `ark:/12148/bpt6k54939667`
for col 517, whose archive.org copy clips the left margin at exactly that word). **Only ONE —
0497B *revela* — is Migne's own printing.** The other seven (*Ambuans*→*Ambulans*,
*meriritum*→*meritum*, *eligutur*→*eligitur*, *lans*→*laus*, *qoud*→*quod*,
*nonlicet*→*non licet*, *cor tempto*→*contempto*, *daban*→*dabant*) are Corpus Corporum's own
corruption — dropped/doubled/transposed letters, one fused word-pair, one split word, one lost
to scan clipping. All seven false `[sic:]` markers withdrawn from the English (the words render
plainly now); `data/tei-patches/8996.json` carries the full record. **This is now the FOURTH
work in this volume (after 8993, 8981, and the 9003 collation) where reading the plate creates
or destroys markers rather than confirming them** — the corpus's older frequency-based estimate
of the false-`[sic:]`-rate keeps being beaten by actually reading the page.

### The polarity read found ONE real defect: a collapsed philosophical distinction

Three blind Opus readers covered all 20 chunks (0000–0006 / 0007–0013 / 0014–0019), ~54,000
words, no sampling. 7 polarity sites raised, 6 already known or low-confidence Migne-side
observations left unmarked; **1 was ours**: col 0510A/B, Augustine's *De natura boni* 27 turns
on *de ipso* (of God's own substance) vs *ex ipso* (from/out of God), and our English had
rendered both "of him," producing "Not all things are of him" flatly contradicting the next
sentence's "all things are of God." Fixed to "Not all things are of his own substance." Also
caught and fixed: an apparatus mislabel in `cruces-0005.md` that filed a finding under col
0484A when it actually sits at 0481C–D (found by the chunk-0000–0006 reader, who diffed against
the cruces file only after forming findings — the discipline worked as designed).

### Convention-drift fix at merge: `usque ad`

Chunks 0000–0004 (first stint) had independently fixed `usque ad` → "down to"; the other three
stints used "as far as," citing sibling-work precedent. Checked against 8976: 73 sites "as far
as," 1 "down to." **"As far as" is the corpus convention** — 17 sites in 0001–0003.md corrected.

### Two low-confidence Migne-side observations, left unmarked, worth a future plate read

**0492B** *Et justum, id est justificans peccatorem* — "justifying" sits oddly against this same
chapter's own *non justificare* (0490A); possibly *judicans* for *justificans*. **0496B**
*Filius Israel non dicitur irae* — nominative singular against the parallel clause's dative
plural pattern; almost certainly *Filiis Israel*. Neither repaired; neither marked without the
plate.

## ▶ OPEN — FOR WILSON
1. ⬜ Still owed on 8996: cols 0471–0480 unread (6 candidates including the misleading 0476C
   *Decem*/*Ducem* lemma), col 0504B (`[var:]` candidate, John 15:3), cols 0509/511/515 (3 more
   `[var:]` candidates from the chunks 0015–0019 stint) — none of these block shipping (they're
   logged as owed, not fired), but are the next plate-read target in this work if a future
   session wants to close them.
2. Carried from prior sessions, unchanged: the `[sic:]` backlog (381 pages), the `[var:]` half,
   8988 `0636A` *aurursus*, 8976 vs Pattern 7, `chunk-work.mjs` over-claiming coverage, 8986's
   `Baruch III @ 0561A` unparsed citation, PL 114 second witness still not fetched beyond the
   two Gallica IDs now in use.

## ▶ NEXT — Deuteronomy 21K, the Gospels 24–45K each, Genesis/Exodus 42–43K, Psalms 90K (per the
prior note's queue, unchanged by this session).

## ▶▶▶▶▶ SESSION 2026-08-31 — 8981 *EPISTOLA I AD CORINTHIOS* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE

Corpus **149 → 150**, `/glossa` **43 → 44 of 58**. Commits `8213923` → `79f8fd8`, **PUSHED**
(`origin/master` = `79f8fd8`). Deployed and smoke-tested on the real domain: work page, **cruces
page**, landing, `/glossa`, `/scripture`, `/authors`, and the resolver at `/pl/114/533a`, all 200.
Badge reads **"First English translation"** (Wilson's triage verdict — searched, no prior English).

Apparatus **0 `[sic:]` · 14 `[var:]` · 7 `[cj:]`**. Burn: **713K translation** (14 chunks, three
Opus stints — **51K/chunk, so the recalibrated 50K holds for a Glossa epistle**), **332K polarity
read** (three blind Opus readers), plate gate read by the session directly.

### ⭐⭐⭐ THE HEADLINE: THE GATE *CREATED* FIVE MARKERS INSTEAD OF DESTROYING ANY

All **14 `[var:]` STAND · 0 revised · 0 false** — in the volume that returned 65% false on a
letter-level sweep in August. Fourth work running where all three stints independently refused to
fire a single `[sic:]`, each giving the same reason unprompted.

**The new result is the other direction.** Five `[cj:]` that no stint and no blind reader could
fire, because firing them required the page — and **every one had been correctly WITHHELD**:
0524A *voluerit*→*violaverit* · 0528C *suo*→*sub* (the plate prints *sub* in the parallel clause
on the same line) · 0541D *Memora*→*membra* · 0542A *honesti*→*inhonesti* (the same gloss prints
*inhonesti* of the same men two lines below) · 0522D *spiritui. Dei subjectus*.

⭐⭐ **0522D is the one neither method reaches alone.** The plate proved the full stop is Migne's,
so Pattern 8 keeps it; a blind reader then showed our English had given the genitive *Dei* a
dative's job to rescue the fragment. **Run the gate and the blind read as a PAIR and compare them
against each other — that pairing is what found it.**

### ⛔ WHAT THE PLATE REFUSED — the marker policy working in both directions
0546C: a reader's proposed `[cj:]` **DECLINED** — Migne prints *minore* whole, so `min re` is
Corpus Corporum's and a conjecture would accuse him of a word he never set (the 8993 withdrawn-
`[cj:]` class, caught before shipping). ⭐ **Stint C had already argued it from the files alone:**
`min re` and `ves tra` eleven words apart is a SCANNING signature, not a compositor's.
0538C *disserentis* **REFUTED**; 0528C-D *Spiritus* and 0527C *veritatis* answered in Migne's
favour. **Of six reader claims about the PRINTED PAGE: 1 confirmed, 3 refuted, 2 declined — while
every reader claim about the ENGLISH stood.** Weight them accordingly.

### ⛔⛔ THERE IS NO SECOND WITNESS FOR PL 114, AND THREE FILES SAID THERE WAS
`raw/scans/pl202/copyB_patrologiaecurs114unkngoog.pdf` is **PL 202 — Peter of Blois, *Epistolae***
(running head "EPISTOLAE. — LIB. II" at cols 593/594; `data/volumes.json` registers that item
under PL 202, and `patrologiaecurs114migngoog` under PL 138). **The "114" is the Internet Archive
ITEM number, not the tome.** `raw/scans/pl202/` was the right directory; the `copyB_` prefix was
the error, and THIS FILE propagated it in three places. It was the stated resolution path for
every marginal crux in the volume. Corrected in place here and in `plate-reads.json`.
⚑ Real unfetched alternatives: Google Books `s_wQAAAAYAAJ`, `4vcUAAAAQAAJ`, Gallica
`ark:/12148/bpt6k54939667`. **Until one is fetched, a marginal PL 114 crux is settled by
MAGNIFICATION on `patrologiaecurs06saingoog`, or not at all.**
⭐ Which is how **0533 `rationē` was settled at 1200 dpi**: a clean deliberate macron — centred,
defined ends, macron height, same ink weight as the surrounding type. Migne sets *rationem*, which
does not construe (*praeditus* governs the ablative) while *ratione* does. It had been HELD for
the witness that does not exist.

### SEVEN HIDDEN DEFECTS, three of them Migne's
`data/tei-patches/8981.json`. **0522A `qni`** (a turned u, with clean-u controls on the same and
next line), **a spurious `et` CC INSERTED at 0522C** which had reached the English, and the 0533
macron. Our Latin read correctly at all three.
⚠ **A trap worth more than the patch it belongs to:** the first 600 dpi crop for `nomines` landed
on a DIFFERENT occurrence eight lines away that our file transcribes correctly. **The control has
to be the line the defect is on, not the nearest line containing the same word.**

### ⚠ NEW ABOUT THE VOLUME — clipping is on BOTH margins
**pp. 274, 276, 278, 280 all clip the LEFT margin**, losing the left column's opening characters
and its corner number (537, 541, 545, 549). PL 114's clipping was on record for p.265/281 (RIGHT)
and p.290/330/340 (LEFT). **Per-page, and now confirmed on both margins inside a single work.**

### Convention drift, and a brief that needs fixing
`Quasi dicat` came back three ways from three stints; settled by the corpus (239 × "as if he
should say", used by every sibling Pauline epistle in this volume), normalized over 16 sites.
**Register needed NO conversion — `ye` 0, `you` 103, the first work in four.**
⬜ **`GLOSSA-NT-AGENT-BRIEF.md` and the runbook template give `CHAPTER SEVEN.` as the head form.
That is WRONG and all three stints correctly ignored it** — the corpus has zero spelled-out forms,
`CHAPTER XIII.` in 26 works, `CHAPTER ONE.` in 61. The rule is to MIRROR THE PLATE: Migne sets
*CAPUT PRIMUM* spelled and *CAPUT XIII* in numerals. **Fix the example before the next launch.**

## ▶ OPEN — FOR WILSON
1. ⬜ **The `[sic:]` backlog** (381 pages) and the **`[var:]` half** — the prior is now positive
   across four works (36/37, 14/14, 7/7, 14/14).
2. ⬜ **`chunk-work.mjs` over-claims coverage** — carried, unfixed, wants your go.
3. ⬜ Carried: 8988 `0636A` *aurursus*; 8976 vs Pattern 7; 8986 `Baruch III @ 0561A`.
4. ⬜ **Fetch a real PL 114 second witness** (Gallica is the easiest of the three) if any future
   crux falls in a clipped margin.

## ▶ NEXT — one Pauline book CHUNKED AND SPOT-CHECKED, 20 chunks ready

| idno | book | words | chunks | est. burn @50K | state |
|---|---|---:|---:|---:|---|
| 8996 | Epistola ad Romanos | 20,688 | **20** | ~1.0M | ✅ ready — see below |

⭐ **ROMANS IS NOT A CHECKED ZERO.** p.240 (cols 469/470) carries an **ASTERISK-LAYER note** keyed
to a raised `*` before the VERS. 2 lemma *Quod ante* at 0470B — Migne's pointer to **Haymo of
Halberstadt** at PL 116–118. Already in `data/plate-notes/8996.tsv` and injected as `[cn: * | …]`.
⛔ **It is owed a translated `[nt: …]` opposite in the English** (2026-08-24 ruling) — tell the
translating agent, or `verify-english` fails on the parity. ⚠ Its first word is transcribed as
printed, *Quiquid*, probably Migne's own setting for *Quidquid*; verify at magnification.
Its coverage entry is `partial`, tier 3 — only 2 of ~26 pages read.

Then Deuteronomy 21K, the Gospels 24–45K each, Genesis/Exodus 42–43K, **Psalms 90K**.


## ▶▶▶▶▶ SESSION 2026-08-30b — 8993 *EPISTOLA AD HEBRAEOS* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE

Corpus **148 → 149**, `/glossa` **42 → 43 of 58**, cruces **145 → 146**. Commits `904562c` →
`14584b9`, **PUSHED** (`origin/master` = `14584b9`). Deployed to `migne.app` and smoke-tested:
work page, **cruces page**, landing, `/glossa`, and the resolver at `/pl/114/670a` all 200,
badge reads "New English translation", `[sic:]` markers rendering.

⚠ **The previous note's "8 commits UNPUSHED" was STALE** — `origin/master` was already at
`42a2a5d`. The note's own trap list warns about exactly this. Check `git status -sb` first.

### ⭐⭐⭐ THE HEADLINE: 14 OF 14 `[var:]` STOOD — AND THE READ WITHDREW TWO `[cj:]` INSTEAD

14 pages read (327–340), by the session directly rather than by fenced agents. **14 STAND ·
0 REVISED · 0 FALSE.** The `[d:]` and three `[cj:]` confirmed as Migne's own printing.

⭐⭐ **The new class, and it is worth carrying: BOTH withdrawn `[cj:]` were RIGHT ABOUT THE
READING and wrong about whose error it was.** 0659A *Ac*→*Ab* and 0661D *vetata*→*velata* are
**our transcription's** corruptions, so Migne never printed the word the conjecture was offered
against. A `[cj:]` accuses nobody — that is why it feels safe — but it still **presupposes the
printed word is his**. Right outcome: TEI patch, **no marker at all**, reader meets clean Latin.
⚑ `verify-english.mjs` caught both the instant the patched Latin landed, unprompted: *"a
conjecture may only be offered against a word Migne actually prints."*

### ⭐⭐ A STINT PREDICTED THE PLATE AND WITHHELD FOUR ACCUSATIONS ON THE STRENGTH OF IT

0667B *sanctur*: the stint grepped the corpus, found the **same e→c fault in a second work**
(11065 @0044, *vel sanctur infirma* beside its own *bene sanatur*), reasoned that one fault
shared across two works indicts the transcription rather than the type, and on that ground
**withheld a `[sic:]` here and on three other non-words**. The plate prints *sanetur*. **Four
false public accusations against Migne, prevented by an argument made from the files alone.**

### ⛔ ADDENDUM A DOES NOT HOLD IN THIS WORK — non-words split THREE ways

The addendum records 10 for 10 (non-word = OUR corruption). **The real-word half held perfectly**
— *absumptam*, *securint*, *accipiunt sacrificium* all proved to be exactly what Migne prints.
**The non-word half did not:** 4 CC corruptions · 2 CC line-break failures · **1 MIGNE'S OWN**
(0669D *serviendium*), plus two more invisible *as* non-words because CC had tidied them away.
⚑ **State the weaker rule the evidence supports: a non-word is always worth raising; what it is
evidence OF, frequency cannot tell you.**

### Nine hidden defects — and two were MIGNE'S, silently tidied

`data/tei-patches/8993.json`. **0650A *dia* for *die*** (he sets *Septima die* in roman two lines
below, so the letters are comparable in his own type) and **0670B *ominibus* beside *omnibus* ON
THE SAME LINE** — both found while reading the column for something else, addendum C earning its
place a fifth time. Our Latin read correctly at both; **no check we own could have found either.**
⚠ 0654A carried **two** faults in one phrase: CC failed to rejoin a line break **and inserted an
*in* the plate does not print.**

### The polarity read — 13 raised, 4 acted on, and FOUR REFUTED AT THE PLATE

`sites: 4 · ours: 4`. The serious one is **0655C VERS. 16**, the no-trace class: Migne's gloss
leans on the lemma's *non* and prints no second one, so our English asserted what the gloss
denies. Resolved per the settled ruling (8954 @0593C) — **text untouched, a `[cj:]` names the
elision.** Three more repairs, all ours (the feminine subject *tribus* at 0655C; the impersonal
*non esset sacerdos* at 0656C; plural *sensus* at 0670A).

⛔ **Four findings were refuted by the plate, three of them the readers' most confident, and every
one was an argument from what the sentence OUGHT to say.** The stints' rule — a real word is
Migne's until a plate says otherwise — beat all four. **Blind readers are strongest on what the
English SAYS and weakest on what the page PRINTS; weight them accordingly.**

### The merge layer's one real find: REGISTER drift

The third stint archaized the gloss's **own voice** with "ye"; the first two used "you". Twelve
sites converted, five kept inside quoted scripture. **Pattern 17's own justification decides it:**
the archaism earns its place by recovering NUMBER, and ye/you recovers **case**, which English
does not need. Sibling epistle 8986 runs 2 "ye" against 100 "you".

### Burn, measured

~652K translation (13 chunks, three stints) against ~585K quoted at 45K/chunk — **~50K/chunk, so
quote 50K for a Glossa epistle, not 45K.** Polarity read ~280K. The plate gate was read by the
session itself, so it is not a separate agent burn but it is 14 pages of reading.

## ▶ OPEN — FOR WILSON

1. ⛔ **A PRE-EXISTING BUILDER BUG, found at the post-deploy smoke test and NOT fixed.** A
   `[sic:]` whose content is italic, placed **inside** an italic lemma span, renders as
   `<span class="sic"></i>dia<i></span>` — an unbalanced `</i>` that leaks into the rest of the
   paragraph. **Live 9006 carries it** (`prophetia-jeremiae`, *"to his brethren
   `</i>fratibus<i>`"*), and that crux file is where the placement was copied from. ⚑
   **`scan-raw-markers.mjs` cannot see it** — nothing renders as literal bracket text; the markup
   only looks well-formed. 8993 was fixed by moving the marker outside the lemma (985/985 balanced,
   verified live). **The builder fix is shared machinery and wants your go**; a cheap detector is
   an `<i>`/`</i>` count per built page, which would have caught it instantly.
2. **✅ Deploy and push both done this session.**
3. **⬜ 0661C unsettled because OUR COPY CLIPS IT.** p.336 clips the left margin;
   *quod non valet ad probationem ___* falls in the clip. Changes nothing in the English. The
   ⛔ **so-called second witness is PL 202, not PL 114 — it closes nothing. See 2026-08-31.**
4. **⬜ 0655D — *Ilic autem* or *Hic autem*?** Raised by the read, by no agent. Italic capital
   whose crossbar may have dropped out at this scan's resolution. Seen, left, not patched.
5. **⬜ 11065 @0044 carries the same *sanctur* fault** and is SHIPPED. Recorded, not swept
   (no-retrofit rule).
6. Carried unchanged: the `[sic:]` backlog (381 pages), the `[var:]` half (~1,033 markers now),
   8988 `0636A` *aurursus*, 8976 vs Pattern 7, `chunk-work.mjs` over-claiming coverage, and
   8986's `Baruch III @ 0561A` unparsed citation.

## ▶ NEXT — two Pauline books CHUNKED AND SPOT-CHECKED, 34 chunks ready

| idno | book | words | chunks | est. burn @50K | state |
|---|---|---|---|---:|---|
| 8981 | Epistola I ad Corinthios | 12,614 | **14** | ~700K | ✅ ready |
| 8996 | Epistola ad Romanos | 20,688 | **20** | ~1.0M | ✅ ready — see below |

⭐ **ROMANS IS NOT A CHECKED ZERO.** Its opening page (p.240, cols 469/470) carries an
**ASTERISK-LAYER note** keyed to a raised `*` before the VERS. 2 lemma *Quod ante* at 0470B:
Migne's pointer that whatever Walafrid's Gloss took from **Haymo of Halberstadt** is to be sought
in Haymo's own works at **PL 116, 117, 118**. Recovered to `data/plate-notes/8996.tsv`, injected
as `[cn: * | …]`. ⛔ **It is owed a TRANSLATED `[nt: …]` opposite in the English** (2026-08-24
ruling) — tell the translating agent, or `verify-english` fails on the parity. ⚠ Its first word is
transcribed as printed, *Quiquid*, probably Migne's own setting for *Quidquid*; verify at
magnification.

⚠⚠ **OUR PL 114 COPY CLIPS A MARGIN on scattered pages in this stretch** — now confirmed on
**p.330 and p.340 (LEFT margin)** as well as p.265/p.281 (RIGHT) and p.290 (LEFT). **Per-page, not
per-volume.** Any marginal crux needs the second witness
⛔ **— THAT FILE IS PL 202 (Peter of Blois, *Epistolae*), NOT a PL 114 copy; there is NO second witness for PL 114 on disk. Established 2026-08-31; see `data/tei-patches/8981.json`.**

Then Deuteronomy 21K, the Gospels 24–45K each, Genesis/Exodus 42–43K, **Psalms 90K**.


## ▶▶▶▶▶ SESSION 2026-08-30 — 8986 *EPISTOLA II AD CORINTHIOS* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE

Corpus **147 → 148**, `/glossa` **41 → 42 of 58**, cruces **144 → 145**. Deployed to `migne.app`
and smoke-tested (work page, **cruces page**, landing, glossa index, and the `[sic:]` markers
rendering). Commits `c50e725` → `de6c09c`, **UNPUSHED — 8 commits ahead of origin/master.**

⚠ **`npx vercel --prod` from `site/` FAILED with "Not authorized" until `--scope
wilson-pruitts-projects` was added.** Auth and project access were both fine (`whoami` and
`project ls` succeeded). Use `npx vercel --prod --yes --scope wilson-pruitts-projects`.

### ⭐⭐⭐ THE PLATE GATE RETURNED 7 OF 7 — AND ELEVEN DEFECTS OUR LATIN HAD BEEN READING CORRECTLY

Eight pages read at 300 dpi (282–290), by the session directly rather than by fenced agents —
deliberately, because briefing several readers on one suspicion produces convergence, not
corroboration. **7 STAND · 0 REVISED · 0 FALSE · 0 UNRESOLVED**, against this volume's own 65%
false rate three days earlier. An **eighth `[var:]` was fired BY the read** at 0570C.

⭐ **The marker policy is the whole variable, and this work is the cleanest demonstration yet:**
both translating stints independently refused to fire a single `[sic:]`, each giving the same
reason unprompted — our Latin is Corpus Corporum's transcription, not the plate, and no column had
been read. Zero letter-level accusations went out, and zero came back false.

**Eleven defects recovered, every one of which read CORRECTLY in our file.** Five were Migne's own
type silently tidied by CC (`nou` · `Vebum` · `ete.` · `Ostendlt` · `VERS. 51`→`21`, the last being
the 9006 @0043A class again); six were CC's own breakage (`quamcredere` · `duasepist.` ·
`Transformantur` · `ego`→`ergo` · `ibenter`→`libenter` · a **dropped `fine`**).

⭐⭐ **0570B — one dropped letter manufactured the work's hardest crux.** The stint called *Istam
ego imitetur* "the worst site in my range", reasoned it through, **declined a `[cj:]`**, named two
conjectures, took neither, and rendered it visibly broken. The plate prints *Istam **ergo**
imitetur*. There was never a crux. **The discipline of not repairing what will not construe is what
kept a wrong emendation out of the text** — this is the strongest evidence yet for Pattern 7a.

⭐⭐ **0555D — three readings existed and ours was nobody's.** Migne *Transformatur*, Clementine
*transformamur*, our file *Transformantur*. The stint declined the `[var:]` and made it its top
plate request; right to decline, wrong about the true reading, and the English had followed the
corruption.

### ⭐ THE POLARITY READ — and the fourth test earning its keep outright

Three blind readers, fenced from the cruces/patches/plate-reads and from each other. **11 raised,
10 acted on, 1 declined.** `sites: 10 · ours: 9`.

⭐ **A reader predicted a MISSING WORD from the English alone.** Our Latin read *Quia in ea **sine**
manebitur*; the English "there shall be abiding without" has no complement; the reader reasoned
*sine* cannot govern nothing, proposed *sine **fine***, and asked for one page. The plate has it.
**No containment check can see that class** — nothing was misaligned, and the English was faithful
to a Latin that was wrong.

⛔ **TWO readers deferred to the plate and were vindicated in OPPOSITE directions**, which is the
result to carry forward: *Ut inopia **illi*** is Migne's (so the lemma stands and now carries a
`[var:]` instead of the proposed repair), and *nolumus **mortem** nobis tolli* is also Migne's (so
that repair was **DECLINED** — it would have emended against the page). A reader that rates its own
confidence and names what would settle it is worth more than one that proposes fixes.

⚑ One reader disclosed that a `grep src/english/8986/*.md` glob leaked cruces lines into its
context and **withdrew the affected item from its own findings**. Scope the glob to `0*.md`.

### Burn, measured

~490K translation (10 chunks, two stints) — against ~450K quoted at 45K/chunk, so **the epistle
rate holds**. The plate gate and polarity read together cost roughly as much again. ⭐ **Quote the
plate gate as its own line item, not an afterthought: it cost eight pages here and returned eleven
defects.**

## ▶ ALSO THIS SESSION

- **`build-cruces.mjs` was publishing every embedded merge TWICE** — eight works, because the
  builder concatenates every `cruces*.md` and eight merges embed their own range files. Worse than
  redundant: 8977 showed a **stale embedded copy claiming 2 `[sic:]` beside a head recording both
  withdrawn**, and oecumenius published a **reversed emendation beside its own reversal**. Fixed by
  measured containment (bimodal 95–100% vs 0%, compared by sentence); skipped files are reported and
  anything not found in the merge is warned by name. Apocalypsis page 316KB → 167KB. `CRUCES_AUDIT=1`
  to audit.
- **8947 Liber Ecclesiasticus: `workStatus` null → `none`** (Wilson, 2026-08-30). It shipped 08-29
  publishing the weaker "New English translation"; it is a **first English of the gloss** and now
  says so. ⚠ **8946 Liber ECCLESIASTES has a prior English and 8947 Liber ECCLESIASTICUS does not** —
  three letters apart, adjacent idnos, same author, same volume. 8946 deliberately left at null.

## ▶ OPEN — FOR WILSON

1. **⬜ PUSH.** 8 commits on `master`, unpushed. `git push origin master` — protected, wants your OK.
2. **⬜ The remaining `[sic:]` backlog** (381 pages, unchanged). 8986 adds a second work's worth of
   evidence that **the marker policy predicts the rate better than the volume does** — a work that
   fires no letter-level accusation returns no false ones.
3. **⬜ The `[var:]` half is still untouched** — now ~1,019 markers. Three works have now returned
   56/56, 36/37 and 8/8 on that class; the prior is strongly positive.
4. **⛔ 8988 `0636A` *aurursus* — UNRESOLVED, unchanged.**
5. **⚠ 8976 still contradicts Pattern 7** (carried, unchanged).
6. **⬜ `chunk-work.mjs` over-claims coverage** (carried from 08-29; small change, shared machinery,
   wants your go).
7. **⬜ 8986 `Baruch III @ 0561A` is an unparsed citation** — Migne's Baruch reference stands one
   quotation early (its words are 2 Cor 6:16 / Lv 26:12). Reproduced as printed. An alias would
   index it; leaving it is also defensible since the reference is genuinely misplaced on the plate.

## ▶ NEXT — three Pauline books CHUNKED AND SPOT-CHECKED, 47 chunks ready

| idno | book | words | chunks | est. burn @45K | state |
|---|---|---:|---:|---:|---|
| 8993 | Epistola ad Hebraeos | 11,441 | **13** | ~585K | ✅ ready |
| 8981 | Epistola I ad Corinthios | 12,614 | **14** | ~630K | ✅ ready |
| 8996 | Epistola ad Romanos | 20,688 | **20** | ~900K | ✅ ready — see below |

⭐ **ROMANS IS NOT A CHECKED ZERO.** Its opening page (p.240, cols 469/470) carries an
**ASTERISK-LAYER note** keyed to a raised `*` before the VERS. 2 lemma *Quod ante* at 0470B: Migne's
pointer that whatever Walafrid's Gloss took from **Haymo of Halberstadt** is to be sought in Haymo's
own works at **PL 116, 117, 118**. Recovered to `data/plate-notes/8996.tsv`, injected as `[cn: * | …]`.
⛔ **It is owed a TRANSLATED `[nt: …]` opposite in the English** (2026-08-24 ruling) — tell the
translating agent, or `verify-english` fails on the parity. ⚠ Its first word is transcribed as
printed, *Quiquid*, probably Migne's own setting for *Quidquid*; verify at magnification.

⚠⚠ **OUR PL 114 COPY CLIPS A MARGIN on some pages in this stretch** — p.265 and p.281 lose the RIGHT
column's closing characters; **p.290 clips the LEFT margin** (confirmed this session). Per-page, not
per-volume. Any marginal crux needs the second witness
⛔ **— THAT FILE IS PL 202 (Peter of Blois, *Epistolae*), NOT a PL 114 copy; there is NO second witness for PL 114 on disk. Established 2026-08-31; see `data/tei-patches/8981.json`.**

**Quote ~45K/chunk for these (epistles), state the polarity read as its own burn, and state the
plate gate as a third.** Then Deuteronomy 21K, the Gospels 24–45K each, Genesis/Exodus 42–43K,
**Psalms 90K**.

## ▶▶▶▶▶ SESSION 2026-08-29c — 9006 *PROPHETIA JEREMIAE* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE

The whole pipeline plus the first FULL marker gate ever run **before** a work shipped.
Corpus **146 → 147**, `/glossa` **40 → 41 of 58**. Pushed (`069ecde`), deployed
(`dpl_3tFj58D8NEfB4DDmbC7TRuTvFGmn`), smoke-tested by body. **The 53 withdrawn `[sic:]` from the
2026-08-29b sweep went live in the same deploy** — that debt is CLEARED.

24 chunks, five Opus agents, **~1.42M burn**. ⭐ **Measured 59K/chunk, against the 45K/chunk this
file has been quoting for a Glossa book.** A prophetic book with heavy Hebrew-name and place-name
traffic costs more than an epistle. **Quote ~60K/chunk for a prophet, ~45K for an epistle.**
Full run including verification and one wasted round: **~2.9M against 1.45–1.65M quoted.**

### ⭐⭐⭐ THE HEADLINE: 36 OF 37 MARKERS STOOD, IN A VOLUME THAT RETURNED 65% FALSE THREE DAYS EARLIER

24 pages read at 300 dpi across three agents. **36 STAND · 1 REVISED · 0 FALSE · 0 UNRESOLVED.**
⛔ **This does not overturn the 93/37 spread — it explains it.** The 2026-08-29b sweep was almost
all *letter-level* `[sic:]` accusations; this run fired **none**. Its markers are `[var:]` on
multi-word scriptural divergences a single-letter CC misread cannot manufacture, under a policy the
translating agents stated and applied uniformly: **fire only where the divergence is multi-word or a
whole distinct word AND changes what the sentence asserts.** Seven markers stood against ~30 recorded
divergences in one agent's range. ⭐ **The marker policy, not the volume, is what predicts the false rate.**

The one `[sic:]` (0047A *sedet*, a fused *sed et*) was the likeliest of all to be false — run-together
is CC's documented class — was read hardest, and **holds**: at 6× the flanking word-spaces are visibly
wider than any gap inside it.

### ⭐⭐ TWELVE HIDDEN DEFECTS OF MIGNE'S, AND OUR LATIN READ CORRECTLY AT EVERY ONE

`fratibus` · `Quos egos` · `multc` · `,umbare` · `pμtantes` · `Nuntlis` · `Jean` · `uo n` ·
`Qomodo` · `erum` · `Scripturae` · `iniquitates`. All restored via `data/tei-patches/9006.json`
(14 patches) and each carried with a `[sic:]`. **No check we own could have found any of them.**

⭐ **The 8991 pattern reproduced on ONE LINE at 0028C:** CC corrupted *tuli* → the non-word *tuh*
**and** silently repaired Migne's broken *,umbare*, in the same breath, with no marker on either —
and our English had been silently emending *tuh* to *tuli*, Pattern 7a's forbidden repair. One
polarity reader caught the *tuh* half from the English side, blind, having never seen the plate.

Two more of the class: **0032D**, where CC's non-word *exores* (plate: *uxores*) was being published
to readers **untranslated**, as though it were Latin — its `[var:]` REVISED, not withdrawn; and
**0043A**, where CC silently *corrected* a verse address (VERS. 5 → VERS. 3) — **correctly on the
merits**, since Jer 28:3 is the *vasa* verse, which is exactly what made it invisible.

### ⛔⛔ THE MISTAKE THAT COST A ROUND — READ THIS BEFORE TRUSTING A BLIND-READ CONVERGENCE

Three fenced polarity readers independently reported a **25-site class**: "the lemma silently
completed from the Vulgate" (*Nunquid?* rendered "Is this man Jechonias a broken earthen vessel?").
I reported the three-way convergence to Wilson as strong evidence and ordered the repair. **It is a
non-defect, and the ruling declining it was already in `GLOSSA-NT-AGENT-BRIEF.md`** (final section):
convention 3 renders a clipped lemma as *the phrase it stands for* — Ruth's *Non te.* → "Let no man
see thee" — and **the defect is CONFORMATION, not expansion**; where a work treats one lemma two
ways, **expand the stump, do not contract its twin.**

The repair contracted all 25 to word-for-word stumps ("Before thee.", "As cold.") before it was
caught. Agents stopped mid-run, all 25 restored, ~350K wasted.

⭐⭐ **THE LESSON, and it generalises past this class: N briefed readers agreeing is not N independent
findings.** All three were pointed at 7a″ and told conformation was the hazard, so all three found
it. **That ruling was itself added after three readers in one batch raised this same non-defect and
all three were declined** — the failure reproduced exactly, convergence and all. ⚑ The check that
would have caught it is in the brief: **NAME THE CONTROL'S CLASS.** The readers' own "proof" — that
dozens of fragments were left short — compared *complete one-word* lemmata against *clipped* ones.
Written up at `src/english/9006/cruces-0000.md` §9a; **third time raised, settled.**

⭐ Two sites WERE genuine conformation and keep their fix: **0016C** (*Sapientes malitiosi* given
Douay's "Wise to do mischief" against Migne's adjective) and **0055D** (*ejus* rendered "their"
against Migne's singular). The class is real; its population was wrong.

### The polarity read proper — negation CLEAN, other classes not

**Zero negation defects in ~440 traced sites.** 17 sites of other classes found and fixed (15 ours).
Sharpest: **0028C**, a `non` attached to the wrong host on a site *the translating agent had itself
flagged as a negation crux* — a flagged passage is not a checked passage; and **0047D**, *Pater est*
given a person when the subject is *nomen Dei*, which detached a whole gloss from the proof-text
adduced *because it says "name."* Recorded `--chunks 24 --sites 17 --ours 15`.

## ▶ OPEN — FOR WILSON

1. **⬜ The remaining `[sic:]` backlog** (was 381 pages; unchanged by this session, which read only
   9006's own columns). The 93/37 spread argues for per-work, not one policy — and 9006 adds the
   refinement that **the marker policy predicts the rate better than the volume does**.
2. **⬜ The `[var:]` half is still untouched** — 1,011 markers. 8947 returned 56/56 CONFIRMED and
   9006 returned 36/37; the prior on that class is now strongly positive across two works.
3. **⛔ 8988 `0636A` *aurursus* — UNRESOLVED, unchanged.** Right-margin ink bleed, no second PL 114
   witness on disk, column deliberately unregistered so the gate keeps flagging it.
4. **⚠ 8976 still contradicts Pattern 7** (carried, unchanged).
5. **⬜ `chunk-work.mjs` over-claims coverage.** It auto-recorded 8996 as `coverage: "full"` /
   `tier: 3` because a note was FOUND, when 2 of ~26 pages were read — and "full" asserts the whole
   numbered sequence was read and verified unbroken. Corrected by hand for 8996; **the script bug is
   general and unfixed.** Small change, shared machinery, wants Wilson's go.
6. **⬜ 0026C *multc* is the one marker in 9006 carrying a stated doubt from its own reader** (worn
   *o* vs *c*; crisp terminals at 12× decided it). It stands. If any `[sic:]` here is ever revisited,
   that is the one.
7. **⬜ Pages 23 and 26 of PL 114 were never read** — no marker depends on them, but three plate-read
   requests in `cruces-0010` are labelled STILL OWED.

## ▶ NEXT — four Pauline books CHUNKED AND SPOT-CHECKED (2026-08-29c), 57 chunks ready

| idno | book | words | chunks | est. burn @45K | state |
|---|---|---:|---:|---:|---|
| 8986 | Epistola II ad Corinthios | 7,797 | **10** | ~450K | ✅ ready — cheapest |
| 8993 | Epistola ad Hebraeos | 11,441 | **13** | ~585K | ✅ ready |
| 8981 | Epistola I ad Corinthios | 12,614 | **14** | ~630K | ✅ ready |
| 8996 | Epistola ad Romanos | 20,688 | **20** | ~900K | ✅ ready — see the note below |

⭐ **ROMANS IS NOT A CHECKED ZERO.** Its opening page (p.240, cols 469/470) carries an
**ASTERISK-LAYER note** — Migne's second foot-of-page apparatus — keyed to a raised `*` before the
VERS. 2 lemma *Quod ante* at 0470B: his pointer that whatever Walafrid's Gloss took from **Haymo of
Halberstadt** on the Pauline epistles is to be sought in Haymo's own works at **PL 116, 117, 118**.
Recovered to `data/plate-notes/8996.tsv`, injected as `[cn: * | …]`, work re-chunked. ⛔ **It is owed
a TRANSLATED `[nt: …]` opposite in the English** (2026-08-24 ruling) — the translating agent must be
told, or `verify-english` will fail on the parity. ⚠ Its first word is transcribed as printed,
*Quiquid*, probably Migne's own setting for *Quidquid*; verify at magnification before quoting it.

The other three checked zero on both apparatus layers. Two divisions fall MID-PAGE and were read at
the division band as well as the foot: **Acts→Romans on p.240**, and **Romans→I Corinthians on p.265**,
where the two works interleave (Romans ends 0520B, I Cor begins 0519C).

⚠⚠ **OUR PL 114 COPY CLIPS THE RIGHT MARGIN on some pages in this stretch** — p.265 and p.281 lose
the right column's closing characters (*per ipsum Ch*, *praedic*, *hominibu*); p.327 is clean and
prints both corners. **Per-page, not per-volume**, same class as the known PL 113 LEFT-margin
clipping, and it falls INSIDE all four works. Any right-column crux needs the second witness in
`data/volumes.json`, never "illegible" from this PDF alone.

**Quote ~45K/chunk for these (epistles, not prophets)** and state the polarity read as its own burn.
Then Deuteronomy 21K, the Gospels 24–45K each, Genesis/Exodus 42–43K, **Psalms 90K**.

## ▶▶▶▶▶ SESSION 2026-08-29b — THE `[sic:]` PLATE SWEEP · ✅ APPLIED · ✅ PUSHED + DEPLOYED 2026-08-29c

Wilson approved ladder step 2 of the marker-backlog survey: read every `[sic:]` standing on an
unread column **in the volumes whose scans are already on disk**. 56 pages, 23 works, 80 markers,
PL 113 / 114 / 202. Three commits on `master`, **unpushed** (`a7bc75d`, `6d6d29e`, `a36b402`).

### ⭐⭐⭐ THE HEADLINE: 53 OF 80 WERE FALSE — AND THE RATE IS NOT UNIFORM

| volume | false | stood | false rate |
|---|---:|---:|---:|
| PL 113 | 26 | 2 (+1 prior) | **93%** |
| PL 114 | 20 | 10 (+1 rev, +1 unres.) | **65%** |
| PL 202 (11613) | 7 | 12 | **37%** |

**8947's 69% was close to the corpus mean and hid a 93/37 spread.** This is the number that should
drive any decision about the remaining 381 `[sic:]` pages: *a marker's prior depends on which book
it is in*, so a blanket policy over the backlog would be wrong in both directions. 11613's markers
are mostly REAL defects of Migne's and withdrawing them wholesale would have destroyed good work;
PL 113's are almost all ours.

### The classes, and they are mechanical
Corpus Corporum's errors fell into a few repeating shapes: **line-break rejoin** (8 sites — a
printed hyphen either lost a half (*cipere* for *percipere*), left a gap (*car nali*), or kept BOTH
halves (*similis milis*)); **space intrusion** (*In icat*, *qui ibet*, *mise unt*); **run-together**
(*aspectusolis*, *nesolius*, *quitenebantur*); and single-letter misreads, of which **t→l alone
appeared five times** (*repulatae*, *nolum*, *prophelae*, *virae*, *saliari*).

### ⭐ Three findings worth carrying
1. **A cruces argument is not evidence.** 8991's `cas` had a careful, considered Pattern-18
   apparatus built on the premise that the type was broken. **The plate prints *eas*.** The
   reasoning was good and the premise was never checked.
2. **A marker can be right about the page and wrong about the word** — 8988 `nutiles`. Migne DOES
   have a defect there (*mutiles* for *inutiles*), but CC misread his *m* as *n*, so our English
   accused him of a form he never set. New verdict class: **REVISED** — patch the Latin, keep the
   marker, fix its quotation. A pure true/false sweep would have gotten this one wrong either way.
3. **Space intrusion is not always ours.** 8979 `hae eticorum` — the gap is on Migne's own plate.

### Also recovered, deliberately NOT patched
Two **hidden Migne defects** that CC had silently tidied, so our Latin reads correctly and no
automated check can see them: 8991 *instrure* (we print *instruere*) and 8960 *potestatm* (we print
*potestatem*). Recorded in `data/plate-sweep/2026-08-29-hidden-defects.md`, not applied, per the
no-retrofit rule. ⭐ **8991's is the whole argument in one line of type: on the SAME line CC
corrupted *eas*→*cas* (which we published as an accusation) and silently repaired Migne's own
*instrure*. Frequency analysis cannot see either.**

## ▶ OPEN — FOR WILSON

1. **✅ DONE 2026-08-29c — pushed (`069ecde`) and deployed with 9006.** The 53 withdrawn markers are
   off migne.app; `/pl/114/epistola-ii-ad-timotheum/` verified live showing the REVISED *mutiles*.
   ~~PUSH + DEPLOY OWED~~ — original note: `cd ~/patrologia/site && npx vercel --prod --archive=tgz`, then smoke-test by body
   `/pl/113/liber-sapientiae/`, `/pl/202/expositio-in-cantica-canticorum/`, their CRUCES urls, and
   `/pl/114/epistola-ii-ad-timotheum/` (the REVISED marker). ⚠ If it 401s, try a plain retry with
   `--scope wilson-pruitts-projects` BEFORE concluding it is the login.
2. **⬜ The remaining 381 `[sic:]` pages** need an archive.org fetch per volume (~40–60k for the
   acquisition sweep; page images are one URL away). **The 93/37 spread is the argument for doing
   it per-work rather than as one policy.**
3. **⛔ 8988 `0636A` *aurursus* — UNRESOLVED and deliberately left flagged.** The word is in the
   extreme right margin where our PL 114 scan has ink bleed; *aut*/*au*/*an* cannot be separated,
   and PL 114 has **no second witness on disk**. Its column is deliberately NOT recorded in
   `plate-reads.json` so the gate keeps flagging it. Fixing it needs a second PL 114 scan.
4. **The `[var:]` half of the backlog is untouched** — 1,011 markers. 8947 returned 56 of 56
   CONFIRMED on that class, so its prior is the opposite of `[sic:]`'s.
5. **⚠ 8976 still contradicts Pattern 7** (carried over, unchanged) — it ruled work-locally that
   non-words are rendered for sense, against Wilson's 2026-07-28 "carry it through, no exceptions".
   ⭐ Note this sweep touched 8976: its `Chistus` is CONFIRMED as Migne's.

## ▶ NEXT — the Glossa remainder, cheapest first

**9006 Jeremiah is now UNBLOCKED** — its plate spot check was done this session (PL 114 pp. 10, 23,
36; checked zero on both apparatus layers; coverage `spot`). 24 chunks, ready to translate.

| idno | book | words | ~chunks | state |
|---|---|---:|---:|---|
| 8986 | Epistola II ad Corinthios | 7,592 | ~9 | not chunked |
| 8993 | Epistola ad Hebraeos | 11,160 | ~13 | not chunked |
| 8981 | Epistola I ad Corinthios | 12,254 | ~14 | not chunked |
| 9006 | **Prophetia Jeremiae** | 18,921 | **24 — CHUNKED + SPOT-CHECKED** | ✅ ready |
| 8996 | Epistola ad Romanos | 19,928 | ~23 | not chunked |

Then Deuteronomy 21K, the Gospels 24–45K each, Genesis/Exodus 42–43K, **Psalms 90K**.
Quote **~40K/chunk** and state the polarity read as its own burn.


## ▶▶▶▶▶ SESSION 2026-08-29 — 8947 *LIBER ECCLESIASTICUS* · ✅ SHIPPED · ✅ DEPLOYED + VERIFIED LIVE

**The whole pipeline in one session, and the plate gate's first full run on a NEW work.**
Corpus **145 → 146**, `/glossa` **39 → 40 of 58**. Pushed (`3967b8e`), deployed, smoke-tested
by body on five URLs including the cruces page.

18 chunks, four Opus agents, **~696K burn against a ~720K estimate** at the runbook's
recalibrated 40K/chunk — the figure held.

### ⭐⭐ THE HEADLINE: 9 OF 13 `[sic:]` MARKERS WERE FALSE ACCUSATIONS AGAINST MIGNE

The gate read **all 22 plate pages** bearing a marker (`data/plate-reads.json`), and it ran
hard in BOTH directions:

- **`[var:]` — 56 of 56 CONFIRMED.** Not one withdrawn. *Noli AMARE mendacium* (Vulg. *arare*),
  *fluvius DORIX* with its Doric gloss, *juxta numerum ANGELORUM DEI*, *EXTOLLE adversarium*,
  and *vapulabit PAUCIS* — whose self-contradiction is confirmed on BOTH plates, since 1206D
  prints *multis* correctly.
- **`[sic:]` — 9 of 13 FALSE**, every one a Corpus Corporum corruption: *misericodia* (plate:
  misericordia), *ex* (plate: **et**), *Possuntt* (plate: Possunt), *Ad monitio* (plate
  hyphenates Ad-/monitio), *Domini* (plate: **Domino**), *cum* (plate: **eum**), *nunde*
  (plate: nunc/de), *jurejarando*, *JesusChristus*. All withdrawn.
- **4 of MIGNE'S OWN defects had been hidden from us** by CC's silent tidying: *loquendeum*,
  *descretur*, *interrogatia*, *orationm*. Restored, now carried with a `[sic:]`.
  ⚑ **The translating agents could not have found these — our Latin already read correctly.**

⭐ **Without the gate, 8947 ships nine false public claims against Migne and conceals four of
his real defects, and every automated check we own passes.** 13 patches, both directions,
in `data/tei-patches/8947.json`.

### The Gallica second witness earned its place

Our PL 113 copy **clips the left margin inside this work** (pp. 598, 604, 620). Three of the
nine withdrawals were unreachable without `ark:/12148/bpt6k5505319w`, **f = (column + 1)/2** —
one HTTP request each, no download.

### Blind polarity read — 5 defects OF OUR OWN

Four fenced readers. **Three of reader 1's findings were already in the cruces it never saw**
(independent rediscovery = evidence it read); the new ones were OURS. Fixed: 1186D
*sustinet* ("bears his mercy" → "patiently awaits"), **1192A–B where `ne` failed to distribute
across a semicolon** and the gloss appeared to ADVISE a man crushed by his faults to seek
judicial office, 1199C (a dropped *praescientiam Dei*), 1205C, 1215D.
⛔ **One finding REJECTED on the rule** — 1207A's supplied negation is *required* by 7a⁗ rule 2.
Recorded in cruces.md so it is not re-raised.

### The merge caught two convention drifts

*usque ad* split down the middle of the work ("down to" 0000–0009 vs "as far as" 0010–0017);
resolved to **as far as** (8976/8985 practice). *impius* had three renderings; normalised to
**ungodly** site by site against the Latin — the other "wicked" render *nequam*/*iniquus* and
are correct.

---

## ▶ OPEN — FOR WILSON

1. **⛔ `[sic:]`/`[var:]` BACKLOG — still paused at Wilson's word (2026-08-29).** 1,587 of 1,650
   markers across 81 shipped works stand on columns nobody has read. **8947 now shows what that
   backlog is likely to contain: 9 of its 13 `[sic:]` were false.** Options were (a) withdraw
   unread markers wholesale, (b) plate-read them work by work, (c) banner them as unverified.
   Not urgent, not retrofitted — his call.
2. **⚠ 8976 contradicts Pattern 7 in the shipped corpus.** It ruled work-locally that non-words
   are *rendered for the evident sense, not carried* — the opposite of Wilson's 2026-07-28
   ruling ("carry it through… no exceptions"). 8947 follows Pattern 7. Flagged, NOT swept.

## ▶ NEXT — the Glossa remainder, cheapest first

19 books left. **The four Pauline epistles are the cheap remainder of the whole gloss** —
~51K words for four books against 90K for Psalms alone, and per-work is what the sponsors see:

| idno | book | words | ~chunks | state |
|---|---|---:|---:|---|
| 8986 | Epistola II ad Corinthios | 7,592 | ~9 | not chunked |
| 8993 | Epistola ad Hebraeos | 11,160 | ~13 | not chunked |
| 8981 | Epistola I ad Corinthios | 12,254 | ~14 | not chunked |
| 9006 | **Prophetia Jeremiae** | 18,921 | **25 — CHUNKED** | ⬜ spot check owed |
| 8996 | Epistola ad Romanos | 19,928 | ~23 | not chunked |

Then Deuteronomy 21K, the Gospels 24–45K each, Genesis/Exodus 42–43K, **Psalms 90K**.

⚠ **9006 is chunked and ready but OWES ITS PLATE SPOT CHECK** — it predates the 2026-08-19 rule.
`chunk-work.mjs` prints the notice. PL 114 map: **PDF page = (column + 11)/2**, calibrate first.


## ▶▶▶▶▶ SESSION 2026-08-28c — THE SHIP-TEST GATE + 8977'S TWO FALSE MARKERS · ✅ DEPLOYED + VERIFIED LIVE 2026-08-28

Items (1) and (2) of the three owed after 9003 are DONE and committed on `master`
(`d130404`, `c57195e`). **Item (3) — sample width across the shipped books — is still
Wilson's, and the gate has now MEASURED it: 1,587 of 1,650 `[sic:]`/`[var:]` markers stand on
columns nobody has read, across 81 of 82 englished works. 9003 is the only clean one.**

- **`scripts/plate-gate.mjs <idno>`** refuses a `[sic:]`/`[var:]` on a column with no recorded
  plate read; `--all` surveys instead of gating and exits zero. Reads live in
  **`data/plate-reads.json`** (seeded with 8977, 8944, 9003 from what the record attests).
  Runbook step **4b**, CLAUDE.md rule **8a**.
- **8977's two `[sic:]` are withdrawn on a fresh plate read**: p. 365 cols 719/720 gives
  *intellexerunt* (ours had *intellexeruut*), p. 368 cols 725/726 gives *haereticorum* (ours
  had *baereticorum*). Both are CC's, both were live accusations against Migne. TEI patched,
  re-chunked (only those two words moved), `verify-english` OK, page + cruces + index rebuilt.

⛔⛔ **DEPLOY IS OWED AND IT IS NOW TWO THINGS AT ONCE:** 9003 has never been deployed (it is
built, indexed and `ours` on disk but 404 on migne.app), and 8977's corrected page is only
local — **the two false markers are still live**. One deploy carries both:
`cd ~/patrologia/site && npx vercel --prod --archive=tgz`, then smoke-test
`/pl/114/expositio-in-xx-primos-psalmos/`, its CRUCES url, `/pl/114/apocalypsis-b-joannis/`
and `/glossa`.


## ▶▶▶▶▶ SESSION 2026-08-28 — APOCALYPSE + CANTICLES · ✅ PUSHED · ✅ DEPLOYED + VERIFIED LIVE

**The pipeline finished in a second pass, same day.** Both works are translated, verified,
plate-read, polarity-read, built, indexed, and shipped. Corpus **142 → 144**, `/glossa`
**36 → 38 of 58**. Commit `a51eaab`, pushed to `origin/master`, deployed and aliased to
migne.app (`dpl_5jXgGsVXvdHKRRmDFcUdVkxCVugR`). Smoke-tested by body on all six URLs: both
work pages, both cruces pages, `/glossa`, and `/` — titles present, correct "New English
translation" badge on both (no false "First" claim).

⚠ **Two things caught in the mechanical pass, both real, both fixed:**
- The "leave workStatus, both are null" line below is **wrong for 8944** — it actually
  carries `workStatus: "copyrighted"` / `englishState: "elsewhere"`, which is CORRECT data:
  Mary Dove's *The Glossa Ordinaria on the Song of Songs* (TEAMS, 2004) is a real prior
  English, confirmed by Wilson, and already logged in `data/briefs/glossa-prior-english.md`.
  The shared fail-safe in `lib/first-english.mjs` handles both values identically (weak
  claim either way), so nothing needed changing — but the resume note's factual claim was
  imprecise and should not be trusted verbatim next time either.
- 8944 @1155B: Migne prints `(Cor. II)` for a quote that is 1 Cor. 11:3 verbatim
  (*caput autem Christi Deus est*) — no book ordinal, `II` for `XI`. Added to
  `citation-corrections.json`, same class as the existing Isa. `II`/`XI` entry.

---

## ▶▶▶▶▶ (superseded) SESSION 2026-08-28 — APOCALYPSE + CANTICLES THROUGH EVERY CORRECTNESS GATE · ⛔ NOT BUILT, NOT INDEXED, NOT PUSHED

**Wilson stopped the session here and will finish the pipeline next time.** Two works are
translated, verified, plate-read and polarity-read; **what remains is mechanical** and is
listed in ▶ NEXT below. Everything is committed on local `master`. **Nothing is pushed and
nothing is deployed.**

**8977 *Apocalypsis B. Joannis*** (PL 114, 0709C–0752B, 20 chunks) and **8944 *Canticum
canticorum*** (PL 113, 1125D–1168A, 14 chunks), both Glossa ordinaria. Corpus 142 → **144**
when they ship; `/glossa` 36 → **38 of 58**.

⛔ **A THIRD BOOK WAS PREPARED AND DELIBERATELY NOT TRANSLATED.** 9003 *Expositio in XX
primos Psalmos* is chunked (18 chunks, 17,231 w), plate-spot-checked, and has its lemma
inventory built with the colContext fix in it. Wilson cut it when the burn estimate was
corrected mid-run (below). **It resumes with zero rework.**

### ⛔⛔ THE BURN ESTIMATE I GAVE WAS WRONG BY ~2× — read this before quoting a number

I quoted **~1.3M** for a three-book slice and the real figure was **~2.7M**. Cause: I used an
old ~25K/chunk average instead of **the runbook's own recalibrated ~40K/chunk for a
lemma-and-gloss commentary** (`translation-runbook.md` line 30), which says in terms *"do not
quote the cheaper number to make a launch easier to approve."* **Measured this session: 45K,
43K, 46K, 51K, 51K per five-chunk stint — slightly ABOVE the runbook rate.**
⭐ **Use ~45K/chunk for a Glossa book. Blind polarity reads run ~15–23K/chunk on top.**
Wilson was told mid-run, dropped the third book, and the two-book slice landed near forecast.

### ✅ Correctness gates — all green

- `verify-english` OK on both (8977 20 chunks, 8944 14 chunks).
- **`polarity-record.mjs --gate` is GREEN CORPUS-WIDE** — every englished work has been read.
- **Blind polarity reads, four fenced readers, 34 chunks: ZERO polarity defects either way.**
  Depth on record: **~576 printed negations traced to a named host** (283 in 8977, ~293 in
  8944) and ~126 supplied pronouns checked in 8944.
- Apparatus after all withdrawals: **8977 = 34 `[var:]` · 2 `[sic:]` · 2 `[cj:]`** ·
  **8944 = 25 `[var:]` · 0 `[sic:]` · 3 `[cj:]`**.
- *deservit*/*deserit*: **checked zero in both books**, verified mechanically over the whole
  Latin, not inherited from stint reports.

### ⭐⭐⭐ SIX PLATE PAGES DID MORE WORK THAN ANY OTHER SPEND THIS SESSION

Page maps calibrated against printed corner numbers first, every time
(PL 113 & PL 114 both `PDF page = (column + 11) / 2`; PDFs on disk under `raw/scans/`).

1. **THE SPOT CHECK PAID FOR ITSELF ON A CLASS IT WASN'T LOOKING FOR.** Zero conjecture
   notes on all five pages read (coverage `"spot"` recorded for 8977/8944/9003) — but PL 113
   p. 568 showed **Corpus Corporum had dropped three HEBREW words** Migne sets in the
   Canticles praefatio (מִשְׁלֵי · קֹהֶלֶת · שִׁיר הַשִּׁירִים, Prov/Eccl/Cant 1:1), each
   leaving the documented doubled-space scar. Recovered as **TEI patches** (not chunk edits,
   so a re-chunk reproduces them); provenance `data/hebrew-patches/8944.json`. The plate also
   fixed which side of the column break the third stands on.
2. **ONE PAGE, TWO IDENTICAL-LOOKING CANDIDATES, OPPOSITE ANSWERS** (PL 114 p. 377).
   0743C *lignis* was **OURS** (Migne prints *ignis*) → `[var:]` withdrawn, TEI patched.
   0744C *vide* is **MIGNE'S** (Clementine *vidi*, and his own gloss re-quotes *vidi* three
   times) → `[var:]` **confirmed**. ⭐ **Indistinguishable from the file. Corpus frequency and
   Vulgate collation cannot separate them; only the plate can. A single-letter difference on
   a real word in a lemma is a plate question, always.**
3. ⭐⭐ **THE LINE-BREAK REJOIN IS NOW A NAMED CLASS AND IT FIRED FOUR TIMES IN TWO BOOKS.**
   Corpus Corporum keeps Migne's line turn and **fails to rejoin a hyphenated word**:
   8977 @0733B *in-/fructuosos* (which had forced a `[cj:]` — **dissolved**), 8944 @1158C
   *fi-/deles*, 8944 @1159D *spon-/sus*. This is the mirror of 8946 *Salomomonis*, where the
   same digitization rejoined and **duplicated** a syllable. ⭐⭐⭐ **RULE: an anchor that
   appears to fall INSIDE a word is a REJOIN candidate before it is a conjecture candidate —
   check the plate for a hyphen before reaching for `[cj:]`.** ⚑ And 8944 @1158D *arden* sits
   between two rejoins and is **not** one (a dropped final *t*), so the class had to be read,
   not assumed from its neighbours.
4. **THE CLASS NO READER CAN CATCH FROM THE FILE, again.** 8944 @1159A *unum **baptista*** is
   Migne's *unum **baptisma*** (Eph 4:5, as neuter *unum* demands) — an alteration to a
   different REAL word, the 8990 *concilio/consilio* class. Found only because the page was
   already open for three other sites. ⭐ The stint had SEEN it and declined a `[cj:]` on the
   bar ("odd, not contrary") — **the decline was correct and the plate supplied what the bar
   would not.**
5. **8944 @1130D *Sicut pedes*** (Ct 1:4 *pelles*) is **Migne's own** — he prints *pelles*
   correctly four lines above. Ruled **`[var:]`, not `[sic:]`** (below).

### ⭐⭐ THE BLIND READS EARNED THEIR KEEP — AND ONE OVERRODE A DOCUMENTED CALL, CORRECTLY

**8977, one defect in twenty chunks, and it was ours and in NO cruces file:** @0710C Migne's
*Quae oportet fieri.* was rendered **"Which must SHORTLY come to pass"** — the Douay,
importing a *cito* the lemma does not contain — **and Migne makes *Cito.* the very next lemma
and glosses it separately, so the conformation swallowed a lemma.** The same stint had
declined the identical move two columns away and written its reasoning down. ⭐ **Using the
rule somewhere is not evidence of using it where it was needed** (Ruth's lesson, third
instance).

**8944, two defects, both the speaker class the Song concentrates:**
- ⭐⭐ **@1157D the Bridegroom was given the Bride's speech.** The reader proposed the fix,
  **met a cruces entry asserting the opposite, and KEPT the repair** — rightly. Three proofs:
  the work says so itself at VERS. 3 (*Hactenus vox Ecclesiae … sequitur quid quaesitus
  respondeat*, **verified at the plate**, p. 584); *eum* not *se* in the acc.+inf.; Ct 6:1 is
  `<Sponsa>`. **The old entry's own reasoning collapsed** — it claimed *eum* "is the same
  person" as the subject, which is what *se* would have been for — **and it contradicted its
  own next bullet**, splitting one continuous speech between two persons. ⭐ **A referent call
  that disagrees with the bullet beneath it is already telling you something.**
- **@1139C the gaze was reversed.** *unde nos prospicere fecit* is causative (he made US look
  out). The reciprocal gets its **own** clause right after, which would be redundant otherwise.

⭐ **THE FENCE IS MEASURED AND IT WORKS.** The 8977 reader proposed four repairs; opening the
cruces at the end cost it three (documented convention-3 calls, all correctly reverted) —
**and the fourth was the only defect the book yielded.** The three "wasted" proposals are the
price of the one. ⚑ **Worth adding to future polarity briefs: name convention 3, because a
blind reader working from `translation-style.md` alone re-flags fragment expansions every
time.** (Done for the 8944 readers; it removed the churn without giving away the key.)

### ✅ RULINGS FROM WILSON THIS SESSION

1. ⭐ **`[sic:]` is for NON-WORDS; a well-formed word gets `[var:]` or nothing.** Applied to
   8944 @1130D *Sicut pedes*. Rationale to reuse: **`[sic:]` DIAGNOSES a defect; `[var:]`
   merely RECORDS that Migne prints A and the Clementine prints B** — both verifiable,
   neither speculative. For a compositor's slip we cannot prove was a slip, the recording
   marker is the honest one. Keeps the seam straight with 8977 @0722B *vivum*/*vinum* and
   @0744C *vide*/*vidi*, both `[var:]`, both the same shape (corrupt lemma, right word in its
   own gloss).
2. ⭐ **The second-position connective particle is CITATION PRACTICE, not a variant.** *enim,
   vero, autem, igitur* added to or dropped from a citation is the commentator welding the
   verse into his sentence. **Decline it.** Two stints reached this independently; the single
   mark (8977 @0739A *enim*) was the outlier and was withdrawn. ⛔ **The boundary is
   connective vs CONTENT** — *proxima*/*amica*, *pedes*/*pelles*, *lignis*/*ignis* stay
   markable.

### ⚑ TOOL FIXES — both affect every future Glossa run

- ⛔⛔ **`lemma-inventory.mjs` was filing every chunk's OPENING spans under the WORK's first
  column**, because `band` reset to `manifest.colFirst` per file instead of the chunk's own
  `colContext`. **Measured: 87 of 836 spans in 8977 — over 10% — sat under `[0709C]`,
  hundreds of lines from the columns an agent is told to read.** They cluster at chunk
  openings, which for a split range means **RANGE openings**, where a fleet that cannot see
  itself is already weakest. **Present in every inventory generated before this session.**
  Span totals identical before and after (836), which is what proved mislabelling not loss.
  ⭐ Found by a translator reporting three spans "missing" — **right about what it SAW, wrong
  about the rule.** Not retrofitted to the 36 shipped books (no reader; Wilson's retrofit
  rule).
- **`lemma-inventory.mjs` now folds `coel-`/`cael-`.** `clementine-flat.txt` has 459 `cael-`
  and **zero** `coel-`; Migne prints `coel-` throughout, so every lemma with
  *coelum/coeli/coelestis* was flagged "NOT in Clementine verbatim" **on spelling alone** —
  ~10% of the whole ⚠ list, pushing toward false `[var:]`, which is a public claim about
  another text. Symmetric fold; cannot mask a real divergence. **Control: Ps 2:4 *Qui habitat
  in coelis* now clears, Ps 2:1 *Cur fremuerunt* (Clementine *Quare*) still flags.**

---

## ▶ NEXT — mechanical, in this order. Nothing here needs a ruling.

1. ⬜ **8944 *lectulus*: expand five sites to "little bed."** Chunks **0002** (3 sites: the
   lemma *Lectulus noster floridus* → "Our little bed is flourishing", "as it were in a bed",
   "the *bed,*") and **0003** (2 sites: "the praises of the *bed:*", and the *Our bed is
   flourishing* re-quote). Chunk 0000 already reads "little bed".
   ⭐ **The reason is NOT a preference for the literal diminutive.** Plain *lectus* also
   occurs — four times, all in chunk 0005, in the same argument — and range 0005–0009 uses
   **"bed" for *lectus* and "little bed" for *lectulus*.** Migne's own gloss counts them:
   ***Utrumque lectum ambiunt fortissimi*** ("**both beds**"). Rendering *lectulus* as "bed"
   collapses the pair in a passage that turns on there being two. ⚑ *couch* is NOT drift — it
   renders *accubitus* (Ct 1:11) and *reclinatorium* (Ct 3:10).
2. ⬜ **Write `src/english/8944/cruces.md`** — the three-way merge of `cruces-0000/0005/0010`.
   Follow the 8977 merge (`src/english/8977/cruces.md`) as the model: a work-wide head
   (§0a apparatus counted from the English not summed from reports · §0b plate reads ·
   §0c vocabulary reconciled · §0d standing checks · §0e what a blind reader hits first ·
   §0f open plate candidates · §0g the polarity read · §0h conventions settled at the merge),
   then the range files preserved unedited with headings demoted. **Record in §0c: the
   *lectulus*/*lectus* pair above, and that *couch* is a distinct word not drift.**
3. ⬜ **Build + index both**: `build-work-page.mjs` then `index-work.mjs`, for 8977 and 8944.
4. ⬜ **Mark shipped**: `translation.englishState = "ours"` in `data/works.json` for both.
   ⛔ **Leave `workStatus` exactly as triage left it — both are `null`**, which earns the
   "New English translation" badge. Overwriting it is CLAUDE.md rule 8.
5. ⬜ **Step 8(a) — add BOTH to `RECENT` in `scripts/build-landing.mjs`**, newest first.
   ⛔ **This was missed for five works on 2026-08-25**: built + marked `ours` + listed in
   RECENT are **three separate steps** and only the third puts a work on the front page.
6. ⬜ **Rebuild the generated pages**, `build-glossa.mjs` INCLUDED (both are Glossa books) and
   **`build-cruces.mjs` INCLUDED** (both have cruces files, and a missing cruces page 404s
   invisibly — the work page still 200s). Then `build-landing.mjs`.
7. ⛔ **Push and deploy are WILSON'S, per action.** `cd site && npx vercel --prod
   --archive=tgz`; smoke-test **by body not status code**, and **smoke-test the cruces URLs**,
   not just the work URLs. Deploy account = `littleeachdayapp-6609` / "Wilson Pruitt's
   projects"; `vercel teams ls` is the diagnostic if "Not authorized" appears.

### ⬜ Open, none blocking

- **9003 attribution — ✅ RULED (Wilson, 2026-08-28): go with what Migne prints.**
  ⛔⛔ **AND THE FACT THE QUESTION RESTED ON WAS WRONG. I wrote that "Pez's own preface argues
  it is distinct from the Glossa ordinaria." Pez argues the OPPOSITE.** The *Monitum praevium*
  is in the TEI (`sources/pl/tei/9003.xml`, before `IN PSALMUM PRIMUM`) and says, in terms:
  Mabillon reported at Reichenau a Walafrid *Expositio in psalmos septuaginta sex*; Pez got a
  full transcript of all 76 and had promised it to his *Thesaurus*; on examining it he found
  **the *nucleus et medulla* of Walafrid's commentary had long since been published in the
  Glossa ordinaria, *"quae itidem Walafridum Strabum auctorem habet"*** — which **likewise**
  has Walafrid Strabo as its author. **That is why only twenty psalms are here**: he printed
  them *velut in reliqui operis specimen*, and invited readers who perceive ***majus
  discrimen*** between the two "than I have perceived" to say so, promising the rest if they
  do. ⭐ **Pez asserts near-identity and merely INVITES a distinction he did not himself find.**
  ⭐⭐ **So there is no tension to disclose away, and the file was never in conflict with the
  plate.** Migne heads it **WALAFRIDI STRABI FULDENSIS MONACHI** because in 1852 the *Glossa
  ordinaria itself* was credited to Walafrid; modern scholarship reassigned the Glossa to
  Anselm of Laon and his school, which is exactly what `works.json` carries
  (`authorStatus: minimal`, `verified: false`). **Same claim, updated name.** Corpus Corporum
  kept the old one in its own `ccCode`, `WalStr.ExInXxP`. Listing it among the 58 on `/glossa`
  is therefore **Pez's position, not a departure from it.**
  ▶ **What to ship:** a short headnote on the work page, in Migne's own terms rather than a
  hedge — Migne heads it Walafrid Strabo, printing Pez's text; Pez holds its core to be the
  Glossa's own and prints twenty psalms as a specimen; the Glossa is now given to Anselm's
  school, under which name we file it. **No `works.json` change, no `/glossa` change.**
  ⚑ Wilson's analogue (his own, and it is the right shape): **PL 79, 471A–548A, *Expositio
  super Cantica canticorum* under Gregorius I (8105)** — Migne prints a received attribution
  over a text whose authorship is contested, Robert of Tombelaine being the usual alternative.
  ⭐ **The corpus already carries Tombelaine's OWN Song commentary, englished: 10379,
  *Commentaria in Cantica canticorum*, PL 150 1361B–1370C, `englishState: "ours"`** — and
  `src/english/10804/cruces.md` already settled how two commentaries on one book may diverge.
  ⛔ **NOT verified: whether Migne prints a note about Tombelaine at PL 79.** The Corpus
  Corporum TEI for 8105 drops all prefatory matter (it opens at `PROOEMIUM`) and **there is no
  PL 79 scan on disk** (`raw/scans/` has pl113, pl114, pl139, pl202 only). That is the known
  lost-apparatus-layer problem, not evidence of absence. 8105 is `copyrighted`/`elsewhere`
  anyway, so nothing depends on it.
- **8944 @1147A** *Coccinea … non cessat* — "she" vs "it" (*vitta*). A blind reader put it at
  65% and declined; left as it stands, recorded rather than churned.
- **Open plate candidates**, all cheap now the maps are calibrated: 8977 @0712D *Ephesas*
  (p. 361), @0725B `VERS. 3--` with no period (p. 368), *tundamentum*/*centecimum*/
  *corrrigitur* (pp. 370–373), @0745B *Vitrum per lucidum* (p. 378); 8944 @1155B *Ude*
  (p. 583), @1165C *foedatur* (p. 588). ⚑ 8977 @0751B is **already answered** — p. 381 was
  read for the spot check and Migne sets no terminal mark there. Do not buy it twice.
- **9003** is chunked, spot-checked and inventoried, waiting. ~18 chunks ≈ **~810K** at the
  corrected rate, plus ~250K for its blind reads.

---


## ▶ (superseded) SESSION 2026-08-26b — EVERY OPEN RULING CLOSED · ✅ PUSHED · ✅ DEPLOYED + VERIFIED LIVE

**Wilson ruled all three carried questions and they are applied** (`5f0b467`, deployed, aliased to
migne.app). **Nothing is now owed on this batch.**

1. ✅ **8966 @1113C — the `[cj:]` stands.** The decline rested on "both readings construe", which is
   false: *deservio* governs the **dative** and Migne's object is **accusative**, which only *desero*
   takes. ⛔ **Not a re-opening of the closed 18a census** — that census covered candidates declined
   **on the bar**; this one was declined on a claim about Latin syntax.
2. ✅ **8954 @0593C — text untouched, `[cj:]` added** on the negative the abridgment swallowed.
   7a forbids supplying a negative **in the text**, and the text is untouched; precedent 7561 @0648.
3. ✅ **Proper names — convention 3 stops at generic fillers.** ⭐ **The criterion is whether the name
   is on MIGNE'S PAGE, not whether it is a name**: five contracted (*Lecha*, *Israel*, *Saba*,
   *Solomon* @10:13, *Samaria*, *Libanus*), **three left standing** because Migne's own gloss on the
   same line names them (*Emath*, *Solomon* @11:1, and *Joatham*, which was never an expansion — the
   name is in the printed lemma).

## ⭐⭐⭐ THE RULING WAS CORRECT AND THE POPULATION WAS WRONG — read this before any future sweep

Wilson ruled **expand the bare stumps**. Applied to the 19 numeral lemmata, it reached **two sites,
not thirty-five**, and the reason is the whole lesson:

⛔ **Six of the fourteen bare numerals are glossed NUMEROLOGICALLY — the gloss expounds the bare
number as a number.** *Et duodecim.* → *Hic **numerus** praesens tempus significat*; *Quadraginta.* →
*Quadragenarius priscae legis tempora significat*; *Triginta et quinque.* → *Hic numerus perfectionem
significat magistrorum*; *Quinquaginta.* → *Quinquagesimo die post Pascha*. **Expanding *Quadraginta*
to "Forty thousand stalls" would have put a counted noun above a gloss that never uses one** — the
8965 *Centum.* error in mirror image. **They stay bare, and that is not inconsistency with their
expanded twins: the twins sit over glosses about the things counted.**

✅ **Only the two clipped SPLIT numerals were expanded, and the test is that they were FALSE as
printed** — "Ten," for a column eighteen cubits high (3Rg 7:15), "Ten." for eighteen thousand
(1Par 18:12). ⭐ **Migne's own gloss supplies the completion in both** (*Ter enim seni **decem et
octo** faciunt*), so nothing is imported. Same precedent as *Centum.* → "A hundred and fifty."

⚑ **This session turned its own lesson three times.** 8965: a reader can be right about the FACT and
wrong about the RULE. 8966 @1113C: a stint can apply the right RULE to a wrong FACT. And here: **a
correct ruling can be applied to the wrong POPULATION.** ⭐⭐ **Read the gloss before expanding the
lemma it glosses.**

## ✅ ALSO CLOSED

- **8952 / 8955 — 54 chapter heads** now mirror what Migne SETS (*CAPUT III.* → CHAPTER III.).
  *CAPUT PRIMUM.* stays "CHAPTER ONE."; the two heads he prints **without** a full stop keep none.
- ⭐ **8976 @0462B — the fourth stint's prediction READ AT THE PLATE AND CONFIRMED.** PL 114 p. 236
  (corner numbers re-read: 461/462) prints ***fuit : ita*** — **a colon.** The mark was ours, exactly
  as at 0435B. TEI patched (third entry in `data/tei-patches/8976.json`, and **this line the TEI does
  NOT break**, so no newline in the find string), English re-synced, boundaries held. ⚑ **A stint
  that flags a punctuation anomaly at a named rhetorical hinge is making a testable claim** — this
  one tested true, which is worth knowing next time one is written and not patched.

---

## ▶ (superseded) SESSION 2026-08-26 — CORPUS 142 · GATE 142/142 · ✅ PUSHED · ✅ DEPLOYED + VERIFIED LIVE

**Wilson gave the OK for both.** Pushed `0d951c8..1427632` to `origin/master`; deployed
`cd site && npx vercel --prod --archive=tgz`, aliased to **migne.app**.

⚠ **`origin/master` was already at the 08-25 session close when this session started** — the 08-25
block's "⛔ NOT PUSHED" was **stale**. Check `git status -sb` before believing a resume note's push
state.

⛔ **Step 8(a) had been missed by the 08-25 session**: all five works were built and marked
`englishState: "ours"`, but **none was in `RECENT`**, so the landing page would have deployed without
listing any of them. ⚑ **Being built and being marked `ours` is not evidence of being listed** — they
are three separate steps and only the third puts a work on the front page. Now added, newest-first.

**Smoke test, by BODY not status code** — all five work pages **and all five cruces pages** 200 with
real bytes (work 208–325 KB, cruces 126–309 KB); the three repairs present and their old wordings
absent; the `⬜ Owed` placeholder gone from the live 8954 cruces page; `/glossa` reads **36
Englished**; the resolver answers `migne.app/pl/113/1091c` and `migne.app/pl/114/0447c`; **zero raw
bracket markers** on either new page.

⭐ **The citation corrections behave exactly as designed on the live index**: `/scripture` files
`/pl/114/actus-apostolorum/#c428a` **under Mark**, carrying a visible `Migne: Matth. XXVIII` badge
and the reason on hover. The index stops propagating the bad numeral without hiding that Migne set
it.

---

## ▶ (superseded) The three deploy blockers — closed 2026-08-26, commit `d5ed527`

**The 08-25 batch is now deployable.** Both missing polarity reads done (zero polarity defects,
three referent repairs), 15 citation corrections entered and indexing at 0 unparsed, the 8954 crux
written. Detail in the block below. **The push and the deploy are Wilson's** —
`cd site && npx vercel --prod --archive=tgz`, step-8 checklist in full, and **smoke-test the cruces
URLs**: five of them are newly built.

---

## ▶▶▶▶▶ SESSION CLOSE 2026-08-25 — FIVE GLOSSA BOOKS · CORPUS 142 · ✅ COMMITTED · ⛔ NOT PUSHED, NOT DEPLOYED

**Paralipomenon II 8965 · III Regum 8954 · Paralipomenon I 8964 · Proverbia 8966 · Actus
Apostolorum 8976.** 68 chunks, 69,547 Latin words, **14 translation stints + 3 blind polarity reads,
all Opus**, three agents at a time throughout per the multi-million-token throttle.
**137 → 142 englished works**; `/glossa` **31 → 36 of 58**. Tree clean, all work committed on local
`master`.

⛔ **The push and the deploy are Wilson's.** Deploy = `cd site && npx vercel --prod --archive=tgz`,
step-8 checklist in full, verify BY BODY not status code.

---

## ✅ THE THREE DEPLOY BLOCKERS ARE CLOSED (2026-08-26, commit `d5ed527`)

**`polarity-record.mjs --gate` is 142/142.** Nothing now blocks the deploy but Wilson's OK.

1. ✅ **8966 and 8976 were read blind**, all 32 chunks, fenced from their cruces. **~350 printed
   negations across both books, not one dropped and not one supplied — zero polarity defects.**
   Three defects of OUR OWN, all **referent**, all repaired: **8966 @1091C** *ad Filium* was "to the
   Son", making Solomon address Christ (control inside the same sentence); **8966 @1099C** *septem
   dierum fame* was "a **famine** of seven days", where Jerome means David's seven-day **fast**;
   **8976 @0447C** *quem* is masc. sg. and can only be Christ, but the English relative bound to "the
   Gentiles" — the 8964 @0648C class again. ⭐ Every other candidate raised blind proved **already
   logged with its reasoning** (0448B, 0452D *domum/donum*, 0459A *Lydda*, all five non-words, 1096D
   *Destruet*, 1084C *palma*): the cruces files held under an independent read.
2. ✅ **Fifteen citation corrections entered, not thirteen.** 8966's exchanged-evangelist pair is
   **two** wrong references in one table row, and 8976 had **seven**, not six. Both works re-index at
   **0 unparsed**. ⚠⚠ **Three column labels in the cruces were off by one column** and were corrected
   from the text, not from the headers — **1087D→1088A, 0439A→0439C, 0427D→0428A**. Derive the column
   by finding the quote in `src/latin/` and taking the last marker before it; do not trust a heading.
   ⛔⛔ **PL 114's four-digit columns must be written WITHOUT the leading zero in
   `citation-corrections.json`** — `index-work.mjs` normalizes to `428a`, so `0428a` matches nothing
   and fails **silently** (the index still reports 0 unparsed). All seven were written wrong the
   first time and only caught by grepping the built index for the corrected refKeys. **Grep the
   index after writing corrections; the script will not tell you.**
3. ✅ **8954 @0599C is written** — *deos suos* for Ps. 30:21's *eos*, rendered as printed, no marker,
   with the Ps. 81:6 *Dii estis* reading that makes the word the **saints** and not idols. ⚑ The
   `⬜ Owed:` placeholder had been **publishing itself as a to-do on the live cruces page**; a
   placeholder in a cruces file is reader-facing, because `build-cruces.mjs` publishes the file as
   written.

⚑ **Five cruces pages did not exist and are now built** (8954, 8964, 8965, 8966, 8976) — the 404
failure mode runbook step 8(b) names. **Smoke-test the cruces URL, not just the work URL.**

## ⚖ A THIRD RULING NOW OWED — 8966 @1113C, and it is a fact, not a taste

**The stint declined the `[cj:]` on *qui viam veritatis deservit* on the stated ground that "both
readings construe". ⛔ They do not.** *deservio* ("serve diligently") governs the **dative**;
*viam veritatis* is **accusative**, which only *desero* takes. So "who **serves** the way of truth"
is not a possible parse of the printed words, and *deserit/deseruit* is not a rival but the only one.
⭐⭐ **This is the exact converse of 8954 @0610D in this same batch** (*deseruit* silently rendered
"has been devoted to"), which makes ***deservit*/*deserit* a live confusion pair in this corpus** —
worth a standing check in every commentary from here. **The English is untouched.**

⭐ **And the lesson generalises the batch's own rule one turn further.** 8965 taught that *a reader's
finding can be right about the fact and wrong about the rule*. This is the mirror: **a stint's ruling
can apply the right rule to a wrong fact.** 18a was applied correctly — to a claim about Latin syntax
that was not true. **Check the fact the rule is standing on.**

## ⚖⚖ TWO RULINGS OWED FROM WILSON — both real, neither urgent, and NOTHING was changed pending them

### 1. The lemma-expansion scope — the big one, and it spans the batch

**How far does convention 3 (expand a fragmentary lemma to the phrase it stands for) reach, and
should a work be made internally consistent when two stints applied it differently?**

Measured this session: **24 sites in 8954** (all in one stint's range — chunks 0006–0010 expand,
0000–0005 keep bare lemmata scrupulously, and the practice changes at col. 0600A and never changes
back); **3 in 8964 against 4 identical shapes left as stumps**; **5 in 8965**.

⭐ **The standing ruling says EXPAND THE STUMP, NOT CONTRACT ITS TWIN**, which would mean expanding
the conservative stints — a change to shipping works' lemmata, hence Wilson's call.

⛔⛔ **READ THIS BEFORE TOUCHING ANY OF IT.** A blind reader flagged all five of 8965's as
conformation, **two were acted on, and both were wrong and are reverted.** *Centum.* and *Ducenti.*
are clips of two-word numerals (2 Par 1:17 *equum centum quinquaginta*, 8:10 *ducenti quinquaginta*),
so both are **fragments**, which convention 3 licenses. And the justification was inverted: the
contraction leaned on Migne's gloss supplying the figure (*Qui sunt ter quinquageni*), **but *ter
quinquageni* is THRICE FIFTY** — the gloss **confirms** 150, it does not withhold it, and contracting
left the lemma saying one hundred above a gloss saying one hundred and fifty.

⭐⭐ **The lesson generalises to every blind read this edition runs: A READER'S FINDING CAN BE RIGHT
ABOUT THE FACT AND WRONG ABOUT THE RULE.** Those English lemmata really did print words the Latin
does not — a correct observation, invisible to every other check. What a fenced reader cannot supply
is whether the convention licenses them. **Check the rule before acting on the fact.**

⚑ A narrower sub-question inside it: how far does convention 3 reach when the supplied word is a
**proper name** rather than a generic slot-filler? 8964 @0640A has *Her pater.* → "Her the father
**of Lecha**", which is new lexical content.

### 2. 8954 @0593C — does 7a reach a negative the ABRIDGMENT swallowed?

*usque ad … **ulla** in parte declinemus.* The blind reader argues the English cannot be affirmative:
*ulla* is negative-polarity, the governing *ne* fell inside what *usque ad* elides, and our page
therefore tells a reader the apostolic *linea* exists **so that** we may stray.

**Not acted on, for three reasons that should be weighed together:** the translating stint
**considered this exact site and declined it deliberately**; **the plate confirms the printed text**
(Gallica f297, read this session for an unrelated citation); and **7a forbids supplying a negative
Migne does not print**, the rule that has protected this edition more than any other. The question is
about the **rule**, not the facts, which is why it is Wilson's.

### ⬜ Also awaiting a word, much smaller

- **8952 and 8955 spell their chapter numerals out** (28 and 23 heads) and are **live on migne.app**
  from the 2026-08-24 deploy. This session ruled the head convention — **render what Migne SETS**, a
  word as a word (*CAPUT PRIMUM.* → CHAPTER ONE.) and a numeral as a numeral (*CAPUT II.* → CHAPTER
  II.) — and normalised 44 heads in 8964 and 8965 accordingly. 8964 had been **internally mixed**.
  The two live works are the last divergence; it is a one-line fix each but needs a redeploy.
- **8964 @0646C** — two participles' objects swapped (*Videntes … ignorantes*). The blind reader's
  parse is the only one compatible with *majorum ruina turbati* six words later, but **Migne's own
  comma favours the other**. Genuinely undecided; left as printed.

---

## ⭐⭐⭐ WHAT THIS BATCH ESTABLISHED — carry these into the next commentary

### THE NEGATIVES ALL HELD. SIX BOOKS RUNNING. THE CLASS IS THE REFERENT.

Three blind reads, 36 chunks, and **every printed negation in all three books was correct and
correctly carried — not one polarity defect.** Every repair was something **English cannot leave
implicit and Latin can**:

- a genitive lifted off its noun, so *the washing of baptism · spiritual grace* became *the grace of
  baptism that is spiritual* — **collapsing the exact distinction between baptism and confirmation
  the paragraph exists to draw**, which its own next sentences spell out (8965 @0672B);
- a relative bound to the nearest noun, which **attributed the Incarnation and the harrowing of hell
  to the company of the saints** and stranded "his own death" in a plural clause — **the English was
  internally incoherent where the Latin is not** (8964 @0648C);
- a supplied "he/his" that **made Athalia a man**, in a sentence naming her in its own middle clause
  (8965 @0686B);
- *Iste … ille* rendered "the one … the other", which in English binds to the **nearest** antecedent
  and put faith and hope on the wrong entrances — **the next sentence is the control** (8954 @0592A);
- *se subditos* read as "themselves as subjects", **removing the subjects from a sentence about
  rulers corrupting them** (8965 @0692A–B — repaired **with a `[cj:]`**, since the printed word
  construes);
- a bare "he" after the wrong name, so **the wrong man pleased God** (8965 @0688A, Ozias not
  Zacharias);
- and **a silent repair that reversed the printed word**: *deseruit potestati* rendered "has been
  devoted to", which is the emendation *deservit* printed with no marker — **the 7a specimen exactly**
  (8954 @0610D).

⛔ **Write the brief for the referent, not the negative.** Hunting only negations would have found
nothing in three books.

### A BLIND READ CATCHES WHAT A SELF-AUDIT STRUCTURALLY CANNOT

8964 @0637C: Migne prints *Absalonem*, our English printed **Absalom**. The work's **other**
occurrence was already correct — the translators caught that very conformation at their final test
and **fixed it at one site**, and their cruces records the fix as done. **A stint's own record of a
repair is not evidence the repair reached every site.**

### "UNREADABLE" AND "OURS" ARE BOTH FACTS ABOUT YOUR COPY — the second witness settled EIGHT questions

Nine plate reads this session, at one HTTP request each (**Gallica `bpt6k5505319w` for PL 113, map
`f = (column + 1) / 2`**; the on-disk `patrologiaecurs06saingoog` for PL 114, **PDF page =
(column + 11) / 2**, re-calibrated against the printed corner numbers before every read).

- **Six misprinted citations in 8954 — ALL SIX MIGNE'S.** The sharpest is @0592D: not a wrong numeral
  but a **wrong BOOK and not even a Testament** — *Aedificavit atrium interius tribus ordinibus*,
  which is III Reg. 6:36, **the verse the gloss is expounding**, cited as I Cor. II. He cites I Cor.
  correctly **twice on the facing page**.
- ⚑ **@0589D is why the quoted-text discipline is not pedantry:** his `(Psal. CXVIII, 72)` points at a
  psalm that really **has** a verse 72. A reader checking the numeral alone finds a real verse and
  stops; only the words (*adhaerere Deo* = Ps. 72:28) show it wrong.
- **8965 @0680C `(Rabac. III)` is MIGNE'S** — caught by the citation index, not by a translator,
  because it sits inside an `[n:]` note. ⭐ **The non-word rule's first counter-instance, and the
  exception has a shape: it was measured on words of the TEXT, and an abbreviated book-name is short
  enough that one wrong sort reads as a plausible abbreviation instead of visible nonsense.**
- **Five crops confirmed five DECLINES unasked** — the unsupplied *ne* at 8954 @0593C, *Rivocorulam*,
  the objectless *capere non poterat*, *usque ab conversionem*, and the Hab. 3:8 divergence.
  **Every refusal to patch was right.**

### TWO NEW DEFECT CLASSES, both found by translators who FLAGGED RATHER THAN FIXED

- ⭐ **An undecoded entity — one occurrence in 5,276 TEI files.** 8966 @1107B carried
  `VERS. 35.emdash;`: the reference `&emdash;` lost its ampersand upstream, so our Latin column
  printed seven literal characters that are **not a word, not Migne's, and not a defect of his** —
  our own pipeline leaking XML at a reader. The stint printed the house form in the English and
  flagged the Latin. Read at the plate (f554 prints the ordinary dash), patched, re-chunked.
- ⭐⭐ **8976 @0435B — three defects in one line, and the first REVERSED our assumption.** A stint
  flagged a full stop before a lower-case word and **declined to capitalize**, saying it would read as
  our build defect. **The plate prints a COLON** — the sentence was never Migne's defect, the mark was
  ours. Reading that same line then produced a second lost colon **and a NORMALIZATION: the plate
  prints *Chistus*, missing its r, tidied to *Christus* in our source.** ⚑ **The normalization class
  reaches SIX and every one has been found while reading the plate for a different question** — it
  cannot be flagged from the file, because a normalized form reads perfectly. The English now carries
  the work's only `[sic:]`.
- ⬜ **A SECOND INSTANCE IS PREDICTED AND UNREAD: 8976 @0462A–B**, *fuit. ita*, at a *sicut … ita*
  hinge — exactly where a colon belongs. The fourth stint wrote the patch text and **did not patch**.
  One crop of PL 114 p. 236 settles it.

### PROCESS THAT PAID

- **Flag, do not harmonize.** Three stints refused to silently conform to a peer and sent the question
  to the merge instead — the divergence-marker form in 8964, the non-word split in 8976, the chapter
  heads in 8966. **A translator that silently conforms leaves no record the two ever differed.**
- **Test 3 (punctuation band by band) is the one stints keep failing, always the same way:** 23, 16,
  30, 13, 7, 4, 3 and 2 mismatched bands on first pass across the batch, **nearly every one a
  semicolon the translator supplied.** In one case **two invented marks cancelled a softened one, so
  the totals matched exactly while three bands were wrong.** Never compare by total.
- **Transport failure is recovered by RESUMING, never relaunching.** The 8976 0010–0013 stint died
  mid-turn with **all four chunks written and passing verify, and no cruces file** — the documented
  trap, invisible to every automated check. One resume message naming the failure as transport (and
  not a limit it hit) closed it; a relaunch would have re-translated four chunks.
- **A patch is written when found and APPLIED when the book is idle.** Both TEI patches were held
  until no agent held their `src/latin`, because restoring a colon changes token counts and can shift
  a boundary. ⚑ The 8976 patch's first find strings were written against the **chunked** text, matched
  zero times, and **`chunk-work.mjs` refused to run rather than proceed** — the TEI breaks both lines
  mid-sentence.
- ⚠ **A citation-correction `note` is READER-FACING** — the work page attaches it to the printed
  number as a hover. `scan-raw-markers.mjs` caught a literal `[var:]` reaching a live page from my own
  prose. Keep notes to the house form; the evidence belongs in the cruces.

---

## ▶ Next
**The Glossa runs on.** 24 Glossa books still unchunked; **Romans / 1–2 Cor / Hebrews still held for
cadence size, and Romans carries the Woodward caveat** (a full scholarly English exists — its page
must never claim a first). ⚠ **Re-run the prior-English check per book BY SERIES NAME** — Emmaus
Academic is publishing the whole Glossa in English. ⚑ **None of this batch's five could claim a first
anyway** (all `workStatus: null` → "New English translation"), so that check guarded nothing here and
cost nothing to skip.

---

## ▶▶▶▶▶ SESSION CLOSE 2026-08-24 — FOUR HISTORICAL BOOKS · CORPUS 137 · ✅ COMMITTED · ⛔ NOT PUSHED, NOT DEPLOYED

**I Regum 8952 · II Regum 8953 · IV Regum 8955 · I Esdrae 8951.** 33 chunks, 31,133 Latin words.
**133 → 137 englished works**; `/glossa` 27 → **31 of 58**. Opus throughout. Gate **GREEN
corpus-wide**. Seven commits on local `master`, tree clean, **ahead of origin by 7**.

⛔ **Both the push and the deploy are waiting on Wilson.** Deploy = `cd site && npx vercel --prod
--archive=tgz`, step-8 checklist in full, verify BY BODY not status code.

### ⭐⭐⭐ SIXTEEN PLATE CANDIDATES, FIFTEEN READABLE, FIFTEEN OURS — and not one had been marked

Every translator raised its non-words as plate candidates and **fired no `[sic:]` anywhere in the
batch**. That was right fifteen times: each would have been a public claim against Migne's plate
for what is our own transcription's error. **The non-word rule is now 19 for 19; the real-word
class was refuted 5 of 5.**

Three NEW classes for the register, all in this batch:

- ⭐⭐ **MIGNE'S OWN FRENCH, normalized away.** 8951 @0691D prints **(Vide *tome* VIII operum.)** —
  *tome*, the French word, in an editorial note by a French editor. Our source reads the Latin
  ablative *tomo*, which construes perfectly. **The normalization class reaches five, this is the
  first in a NOTE rather than the body, and the first where the tidying changes the LANGUAGE of the
  word.** Found while answering a different question (whether Migne prints Jerome's prologue text
  at all — he does not, now a positive read rather than an analogy from 8948).
- ⭐ **AN INTERPOLATED WORD.** 8952 @0539C: the plate prints *quia fuit **de** Ramatha*; our file
  added a spurious *a*. Not a corruption of a word — the insertion of one, and it reads as Migne
  being clumsy.
- ⭐ **A LOST FULL STOP.** 8952 @0561A: the plate prints *…et semis. Polenta est…* and we dropped
  it, fusing two glosses. ⚑ **This is the case that justifies a plate read on punctuation**: Pattern
  8 forbids the translator to supply a mark Migne does not print, so running the sentences together
  and flagging it was the only correct move available — and supplying it would have been right by
  accident.
- Also: a **hyphenless cross-line fusion** (8951 *integra mente* → *integramente*), the inverse of
  the unjoined break.

### ⛔⛔ THIS COPY OF PL 113 CLIPS THE LEFT MARGIN ON SOME PAGES

Confirmed on **p. 320 and p. 354** — the left column's opening characters are cut off while the
right column is clean. **Two candidates are therefore recorded as UNREADABLE and deliberately NOT
guessed**: 8951 @0697A *magistorum* (survives as *rum*) and 8955 @0629D *ulit Saraiam* (survives as
*t Saraiam*). The context points hard at *Tulit* — 4 Rg 25:18, and Migne's own lemma two lines above
reads *Tulit quoque* — **and that is exactly why it is not patched: a contextual reconstruction is a
conjecture, and a conjecture entered as a patch wears Migne's voice.** ⬜ **A second PL 113 scan
settles both in two pages** and is the cheapest open item in the project.

### ⭐⭐ THE BLIND READ'S YIELD WAS NOT NEGATION — it was the REFERENT

Fifteen sites, fourteen new, thirteen repaired. **Every printed negative in all four books was
correct, twice over.** What got through, every time, was a referent English cannot leave implicit:
a supplied "he" convicting Absalom of David's sins (8953 0574C) · a genitive lifted off *fortium
David* (8953 0579A) · a predicate nominative fused into "the water-people" (8953 0568A) · an
indirect reflexive pulled onto the nearest man (8955 0628A) · an unexpressed-antecedent relative
made the subject of its own sentence (8951 0701A) · an acc.+inf. reversed (8951 0696A) · a reflexive
making a man seek himself where he sought God (8951 0701D) · a lemma word dropped out of its own
gloss (8951 0693C) · a verb annexed from the verse leaving *eumdem* pointing at nothing (8952
0543B) · a *Dei* on no construal (8952 0549D). **Counts, parity and negation-host checks passed at
every one.** Carry this into the next brief: name the class as the REFERENT, not the negative.

⛔ **One logged resolution was OVERTURNED**: 8952 @0561C, settled as "he kept himself" because the
paragraph names Phalti five times. Migne prints ***eum***, an accusative — a sentence whose subject
and object are the same man needs *se* — and the subject is God, named in the etymology the clause
exists to explain (*Phaltiel*, *evadens a Deo*). **Frequency lost to structure**, the same split the
plate reads produced. ⬜ **Flagged for Wilson as the one genuinely contested call**; both readings
stand in that work's cruces.

⚑ **8955 @0630A — the two columns disagreed and nothing told the reader.** The Latin declined to
supply the clipped initial of *ulit*; the English printed "He took" anyway, while the same work's two
other conjectures wear `[cj:]`. It now carries `[cj: *ulit*; read *Tulit*, "he took"]` — a claim
about our own printed column, deliberately silent about whose loss the letter is. ⚠ Pattern 18's
founding case is a word that is REAL; this one is not, and `[sic:]` is exactly what must not fire.
**Wilson may want to rule on the shape.**

### ✅ EVERYTHING OWED AT SESSION CLOSE IS NOW CLOSED (2026-08-24, same session)

1. ✅ **Pushed and DEPLOYED** — `dpl_273GoL7oS9V8xyPWYCYtpSq21Mec`, aliased to migne.app, verified
   BY BODY (6 for 6 byte-identical, including both changed work pages, two cruces pages, `/glossa`
   and `/`). Corpus **137**, `/glossa` **31 of 58**.
2. ✅ **The asterisk layer — RULED AND IMPLEMENTED.** Latin `[cn: * | …]` + a **translated
   `[nt: …]`** opposite it in the English; numbered `[cn:]` stays Latin-only and the split is
   enforced in `verify-english.mjs`, not merely written down. Baruch retrofitted: the note is about
   the very phrase its own preface prints, and both columns now carry it. Injector, verifier and
   page builder all had to learn the class; `scan-raw-markers.mjs` caught the builder's miss.
   Full statement in CLAUDE.md and `translation-style.md` Pattern 19.
3. ✅ **0561C ruled** — the overturn stands, *God kept him*. Structure beats frequency. Settled;
   not to be reopened.
4. ✅ **BOTH clipped candidates settled — no second scan needed to be downloaded.** `volumes.json`
   already listed a **Gallica** copy of PL 113 (`bpt6k5505319w`), IIIF, server-side crops, **one HTTP
   request per read**. 8951 @0697A *magistorum* is **Migne's — suspicion withdrawn** (and it was
   never a non-word to begin with, so the 19-for-19 class was never threatened). 8955 @0629D **is
   Migne's own broken sort** — the plate prints *ulit* with *Tulit quoque* clean two lines above —
   **so that work's marker changed from `[cj:]` to `[sic: ulit]`.** ⛔ Method now in CLAUDE.md:
   **check `volumes.json` for another witness BEFORE recording anything as illegible.**
5. ✅ **A live page corrected**: `/glossa` had told readers a 42-word *fragment* of the gloss
   survives under *Threni*. PL 114 p. 37 shows it is a note signed **(EDIT.)** from Migne's own
   editors saying why there is none — the Douai edition had filled the gap with Paschasius
   Radbertus, whom Walafrid (forty years his senior) cannot have known. The better fact, and
   checkable.

### ▶ Next
**The Glossa runs on, smallest first from the prepared queue: Paralip. II 8965 · III Regum 8954 ·
Paralip. I 8964 · Proverbia 8966 · Actus 8976.** All five are chunked and spot-checked. 24 Glossa
books still unchunked; Romans / 1–2 Cor / Hebrews still held for cadence size, **and Romans carries
the Woodward caveat.** ⚠ **Re-run the prior-English check per book by SERIES name** — Emmaus
Academic is publishing the whole Glossa in English (Genesis 2023, Matthew 2025, John 2026, Exodus
announced) and two volumes appeared between the last register and this one.

---


## ▶▶▶▶▶ SESSION CLOSE 2026-08-23 — FOUR GLOSSA BOOKS · CORPUS 133 · ✅ PUSHED · ⛔ NOT DEPLOYED

**Baruch (9005) · Joshua (8958) · Wisdom (8969) · Galatians (8992).** 21 chunks, 19,678 Latin
words. **129 → 133 englished works**; `/glossa` 23 → **27 of 58**. Opus throughout, per Wilson's
call at the hard stop. Gate **GREEN corpus-wide at 133/133**. Pushed through **`c3c7e42`**, tree
clean, in sync with origin.

✅✅ **DEPLOYED 2026-08-23** (`migne-61yksoxat`, aliased to migne.app) — full step-8 checklist run.
**Verified BY BODY, not by status code:** all four work pages, all four cruces pages, and `/`,
`/glossa/`, `/queue/`, `/scripture/`, `/cruces/` fetched live and **byte-for-byte identical to the
local build**, 13 for 13. All four badge **"New English translation"** live (workStatus null on all
four, fail-safe held); zero pages claim priority. Live `/glossa` reads **27 Englished**.

### ⭐⭐⭐ THE RULE THIS BATCH BOUGHT — corpus frequency is decisive for NON-WORDS and worthless for REAL WORDS

**17 plate reads across three works. The split is 10 for 10.**

- Every suspicion aimed at a **non-word** was **CONFIRMED as ours**: *interpetratur* · *per verse* ·
  *nortales* · *eum* (for *cum*) · *Qui dam* · *quorum dam* · *quisbusdam*.
- Every suspicion aimed at a **real, well-formed word** was **REFUTED, with Migne printing it**:
  *credulitatem* · *Homo* · *convenientem* · *dat offensum*.

⭐ **Two of those four refuted arguments were excellent** and it did not matter. 8958's
*credulitatem* was raised because the work's own *crudelitas*/*crudelem* sits two columns away with
Migne arguing that very point in those very words; 8969's *Homo* was raised because *mobilis*
stands in Sap 7:22 and the gloss expounds mobility on both sides of the sentence while *homo* is in
neither the verse nor the argument. **Both readers explicitly said frequency could not settle it
and asked for the plate rather than patching on the argument. That is the behaviour to keep.**

⚑ **The operational consequence for the next batch: skip the real-word plate reads and spend them
on non-words**, where the yield has been total. A real word that reads oddly is Migne's until the
plate says otherwise — except for the one class below, which runs the other way.

### ⭐⭐ THE NORMALIZATION CLASS IS NOW AT FOUR, and BOTH new ones were found looking for something else

The digitization does not only corrupt; **it silently CORRECTS**, and a corrected form reads
perfectly, so nothing downstream can see it. Prior: 8948 *convivum*→*convivium*, 8990
*concilio*→*consilio*. New this batch:

- **8992 @0574A — the plate prints *aemulatores LEGES*; our file read *legis*.** Confirmed at
  1400 dpi (the final `e` carries no dot where *qui* and *timens* beside it show clear ones).
  *aemulator* governs the genitive, so *leges* leaves an accusative with nothing to govern it:
  Migne printed a form that does not construe and Corpus Corporum tidied it. **Nobody flagged it
  and nobody could** — the translator rendered "zealots of the law" smoothly and had no reason to
  look. Found while reading the plate for *Qui dam*, four words away on the same line.
- **8969 @1168B — the plate prints a bare *id Verbi Dei*; our file supplied the *est*.** The
  contrast is twice on the same line (*id est ejusdem est scientiae*). Found while reading the
  plate for *convenientem*.

⚑ **The finding about the finding: both came from reading the WHOLE LINE, not the target word.**
Budget the neighbours into every plate read — that is where this class lives.

### ⛔⛔ SEVEN FALSE `[sic:]` WITHDRAWN — pages were publicly blaming Migne for our own errors

**8958: all four of its `[sic:]` markers.** **8992: three of five.** Each asserted a defect in
Migne's plate that Migne never made. ⭐ **A page that asserts a defect its source never made is
worse than a page with no apparatus at all** — and only the plate can find it, because from the
Latin alone a corrupt-looking form is indistinguishable from a corruption.

⚑ **THE SHIP TEST that follows, now recorded in both works' cruces: an unread candidate is safe to
ship IF AND ONLY IF IT FIRES NO MARKER.** A crux asserts nothing about the plate; a `[sic:]` or a
`[var:]` is a public claim and needs the plate. This is what licenses shipping 8969 with two reads
still owed (below).

### ⚑ Method notes worth more than their size

- ⛔ **A CROP THAT CLIPS A LETTER CORROBORATES A FALSE READING** — exactly as a wrong page produces
  a false checked zero. My first crop of 8958 @0514B rendered the line as *nortales* and appeared
  to **confirm** our file; re-cropped 350px wider, the `m` is unambiguous. **Always crop wider than
  the target word, and distrust a crop that agrees with the file you are testing.**
- ⚑ **A TEI NEWLINE IS NOT A PLATE LINE-END.** It coincides with Migne's hyphen at 8958's *tam
  per\nverse* and at 8992's *Qui\ndam* — and does NOT at 8992's *quorum\ndam*, where the plate
  breaks at *quo-*. Useful as corroboration **after** the plate has spoken; never a substitute, and
  never evidence of where the break fell.
- ⭐ **NEW SUB-CLASS, the UNJOINED LINE BREAK** — the exact inverse of 8946's *Salomo-/nis* rejoin.
  There the digitization joined a hyphenated word and doubled a syllable; here it dropped the hyphen
  and left the halves standing apart (*per verse*, *Qui dam*, *quorum dam*). Both manufacture a word
  Migne never printed.
- ⚠ **`build-glossa.mjs` / division reads: LIBER SAPIENTIAE is a FULL-WIDTH drop title mid-page**
  (PL 113 p. 589), with the work resuming in BOTH columns below it. Cropping without the whole page
  in view made the anchors look misaligned when they were correct. **Render the full page once
  before cropping a division.**

### ⭐⭐ DECLINING BEAT A STRONG CONJECTURE — the case for the standing rule

**8958 @0511D.** The translator refused to fire a `[cj:]` because the sentence as printed asserts
nothing and so misses Pattern 18's bar, and named its conjecture (*cur*) in the crux instead.
**The decline was right and the conjecture was wrong: the plate gives *cum*.** Had it fired, a wrong
reading would have entered our apparatus wearing Migne's voice. ⭐ And the blind reader, fenced from
that crux, **independently demanded a plate read of the same column** on the reasoning that the
displaced word must be the conjunction governing the clause. Two agents converged on the site from
opposite directions and neither guessed the word.

### ⭐ Agents overturned their peers three times, and were right each time

Not privileged, and the repairers were told so explicitly. **8958's repairer** showed five of six
"unmarked divergences" were already in §1 and that a sixth (Jos 14:2 *dividentes*) **does not
exist** — the Clementine and Migne agree. **8969's repairer** overturned the reader's framing at
1172C: it had posed "he" versus "it" as grammar-versus-theology, when the real question was that
*partus* also means **offspring**, settled by *ipsum gentes deprecabuntur* (a childbearing is not
entreated). **8992's repairer** overturned finding 8's precedent — 11632's *signa … ardeat* ruled a
silent repair earns a marker, but *signa* is a noun whose number English shows, where *remanerent*
is a verb ending English cannot carry at all. **Same class, different exponent, and the exponent
decides marker versus crux.**

### ⛔⛔ ROMANS ALREADY HAS AN ENGLISH — recorded before anyone opens the work

`data/briefs/glossa-prior-english.md`, written this session. **The Glossa on Romans has a full
scholarly English: Michael Scott Woodward, TEAMS / Medieval Institute, 2011.** Romans sits in the
deferred large-epistle group (held with 1–2 Corinthians and Hebrews for cadence size), and **its
page must never claim a first English.** Also registered: Revelation, 1–3 John, Jonah (Consolamini,
2015). Joshua, Wisdom, Galatians, Baruch: **none**, checked per book. ⚑ The search that works is the
translator and series names (van der Pas, Litteral, Woodward; Consolamini, TEAMS), not the book name.

### ⬜ Owed, small, all recorded rather than acted on

1. ⛔ **THE DEPLOY** (above) — the only thing blocking four finished works from readers.
2. **Two plate reads owed in 8969** — 1169B *Scintilla … mutat cito arundinetum*, 1170C *flagellum
   collectionis*. Both are real-word suspicions, the class the plate refuted 4/4, and **neither
   fires a marker**, so shipping asserts nothing. Recorded as a debt in that work's cruces §5d.
3. **Four unparsed citations corpus-wide — a NUMERAL-PATTERN gap, not an alias gap.** `Rom. VII 24.`
   · `I Cor. VI 20` · `Isai. LX 8.` · `Exod. XIX, 20, et XX, 21`. Those books are all in the table;
   the parser drops chapter+verse forms lacking the comma. Four real scripture citations invisible
   to the scripture index. (`(Virgil. II Aeneid.)` is the known fifth and is correctly a fons.)
4. **Two aliases added by attestation** — `I Cr.` = I Corinthians (8958/0509D) and bare `Petr.` =
   I Peter (8969/1177D), **both identified from the QUOTED TEXT, never from the numeral** (Migne's
   `I Cr. XVI` is his own slip and stays as printed). ⚠ The bare-`Petr.` hazard is written into
   `citations.mjs`: the corpus prints the prefixed forms 45 times, so a bare `Petr.` meaning II Peter
   would resolve silently and wrongly. Re-verify at any new attestation.
5. **My lemma extractor missed one span** — `data/briefs/8969-lemmata.txt` omitted the Jer 10:14–15
   quotation at 1178A (which carried three substitutions) because the regex caps an italic span at
   200 chars. Raise the cap before the next inventory.
6. **`usque ad` look-alikes**: 8969's Latin has it 62 times and **only ~55 are the abridgment
   formula** — the Sap 8:1 lemma *usque ad finem fortiter pertingit* is the trap. Say so in the next
   OT brief; the translator caught all five ordinary ones, which is not to be assumed.

### ▶ Next
1. ⛔ **Deploy the four** (Wilson's OK, step-8 checklist in full, verify BY BODY not status code).
2. **The Glossa runs on**, smallest first from the prepared queue: Sapientia is done, so next are
   **II Regum 8953 · IV Regum 8955 · I Esdrae 8951 · I Regum 8952**, then Paralip. II 8964/8965,
   III Regum 8954, Proverbia 8966, Actus 8976. 24 Glossa books still unchunked; Romans / 1–2 Cor /
   Hebrews still held for cadence size — **and Romans now carries the Woodward caveat.**
3. **Carry into the next brief:** the non-word/real-word rule, the fires-no-marker ship test, the
   crop-wider warning, and the instruction to **read the whole line, not the target word** — that
   is where both normalizations came from.
4. Wilson's call still open from 2026-08-19: the asterisk-keyed `EDIT.` notes in PL 114.

---

## ▶▶▶▶▶ SESSION CLOSE 2026-08-19b — QUEUE RESTOCKED · SPOT CHECK NOW PART OF CHUNKING · ✅ DEPLOYED + PUSHED

**Queue 8 → 19 prepared works / 577,896 words.** Eleven Glossa books chunked, all validating
(109 chunks, 110,098 Latin words): Baruch 9005 · Sapientia 8969 · II Regum 8953 · IV Regum 8955 ·
I Esdrae 8951 · I Regum 8952 · Paralip. II 8965 · III Regum 8954 · Paralip. I 8964 · Proverbia 8966 ·
Actus 8976. Smallest first; Romans, 1–2 Corinthians and Hebrews still held back for cadence size.
24 Glossa books remain unchunked. ✅ **DEPLOYED `migne-b4qnda4rj`, pushed through `0151b7c`**, all
pages byte-verified against the local build.

### ⭐ THE SPOT CHECK IS NOW PART OF CHUNKING (Wilson's ruling this session)
`chunk-work.mjs` prints `⬜ PLATE SPOT CHECK OWED` while a work's coverage is `none` or unrecorded;
`coverage.json` gained a **`"spot"`** value (weaker than `"full"`: licenses shipping without `[cn:]`
recovery, does NOT license the claim that the work has no notes); runbook step 1a and CLAUDE.md carry
the rule. **19 pages read across PL 113 and PL 114** — full width, 300 dpi, every division examined
mid-page as well as at the foot. **All twelve works checked zero.**

### ⭐⭐⭐ IT PAID FOR ITSELF ON THE FIRST RUN — a LIVE page was asserting a defect Migne never made
**8946 col. 1116D *Salomomonis* is OURS, not Migne's.** The plate breaks the word across the last two
lines as **`Salomo-` / `nis`**; Corpus Corporum rejoined it and duplicated the syllable before the
hyphen. Confirmed on a 3× crop by the orchestrator's own eye before anything was written.
⭐ **New sub-class for the register: the LINE-BREAK REJOIN** — distinct from the normalization class
(8948 *convivum*, 8990 *concilio*) where the digitization CORRECTED a form Migne did print. Here it
manufactured a word that exists nowhere. ⚑ Corroborated from the source side: **the TEI keeps a
newline immediately AFTER the word**, exactly where Migne's break falls.
`data/tei-patches/8946.json` written, work re-chunked, `[sic:]` removed, page rebuilt, re-indexed and
redeployed. ⚑ **Corpus frequency raised it (311 *Salomonis* to one doubled form); only the plate could
settle it, and the translator was right to file it as a candidate, not a finding.**

### ⛔⛔ AN ARCHIVE.ORG LEAF NUMBER IS NOT A PDF PAGE NUMBER — near-miss worth more than the find
Our stored PL 114 map (`leaf = (col+9)/2`) came from `page/nNNN` URLs; **the downloaded PDF's page is
leaf + 1.** Using it would have produced a **FALSE CHECKED ZERO — worse than no check**, because a
zero read off the wrong page is indistinguishable from a real one. Caught by rendering one page and
reading the printed corner numbers. **Verified maps for the on-disk PDFs: PL 113 and PL 114 are both
`PDF page = (column + 11) / 2`** (p. 287 = cols 563/564; p. 217 = cols 423/424) — a coincidence of the
two scans' front matter, not a rule. Rule written into CLAUDE.md: calibrate every volume, every time.
⚠ PL 114's scan is now on disk at `raw/scans/pl114/patrologiaecurs06saingoog.pdf` (36 MB).

### ⚑ Not apparatus — now on record so no reader reports them as such
**Division rules** (these books often open at the HEAD of a page: full-width rule under the running
head, then the drop title; where a division falls mid-page it carries prologue furniture — rule,
Jerome's prologue title, rule, drop-head — and still no notes) · printer signatures (`PATROL. CXIII.`)
· gathering numbers · and **two asterisk-keyed `EDIT.` notes in PL 114**.
⬜ **OPEN, and a real question: the asterisk-keyed `EDIT.` notes are a SECOND apparatus layer our
source also lacks.** They are Migne's editorial cross-references, not numbered conjectures, so `[cn:]`
does not fit. Two seen: p. 037 in the **Baruch preface itself** (*Vulgata editio, de qua fit mentio in
prologo super Baruch, exponitur in prologo super Ezechielem. Cætera plana sunt.*) — which bears
directly on a work now in the queue — and p. 240 (Walafrid's Romans gloss draws on Haymo of
Halberstadt, PL 116–118). **No convention invented; Wilson's call.**

### ⚑ Baruch (9005) is not a stub
Migne prints the **preface only**, and his own bracketed note says why: *antiqua exemplaria Glossae
ordinariae textum tantummodo Baruch exhibent, nulla comitante expositione*. A genuine one-chunk work
(~50 words) whose page must say exactly that. Its single `[n:]` is editorial prose → Pattern 15
`[nt:]`. Its whole page carries six division rules and was checked in one read.

### ▶ Next
1. ▶ **The Glossa runs on**, smallest first from the 6 previously prepared (1 John 8979 · Judges 8959 ·
   Nehemiah 8962 · Ephesians 8991 · Joshua 8958 · Galatians 8992), then the eleven just added.
   **Add to the brief before the next launch: name the control's class before treating it as a
   control** (see 8998's cruces §Adjudication).
2. ⬜ Wilson's call on the asterisk-keyed `EDIT.` notes above.
3. Everything under the previous session's "Next" is unchanged.

---

## ▶▶▶▶▶ SESSION CLOSE 2026-08-19 — FOUR MORE GLOSSA BOOKS · CORPUS 125 · ✅ DEPLOYED + PUSHED

**1 Timothy (8983) · James (8998) · 1 Peter (8980)** — PL 114 — **and Ecclesiastes (8946)** — PL 113.
15 chunks, 15,041 Latin words. **121 → 125 englished works.** Opus throughout, per Wilson's call at
the hard stop. `/glossa` now **19 Englished / 6 prepared**.

✅ **DEPLOYED AND PUSHED 2026-08-19** (`migne-jtminnjtk`, Labs scope) — commits `f62abb6` + `cee8af0`
on `master`, tree clean, in sync with origin. **Verified BY BODY, not by status code:** all four work
pages AND all four cruces pages fetched from migne.app and **byte-for-byte identical** to the local
build, as were `/`, `/glossa/`, `/queue/`, `/scripture/` and `/cruces/`. All four badge **"New English
translation"** live (workStatus null on all four, so the fail-safe held); all four appear in RECENT;
live `/glossa` reads **19 of 58**. `verify-english` clean ×4 · **`polarity-record --gate` GREEN at
125/125** · `scan-raw-markers` clean across 125 pages.
Apparatus: **47 `[var:]` · 9 `[sic:]` · 3 `[cj:]`.** Blind reads: **20 sites, 10 repaired.**

### ⭐⭐⭐ THE BATCH'S FINDING — a class three readers proposed, and it is NOT a defect
**Three of the four blind readers independently proposed contracting an expanded fragmentary lemma
back to Migne's printed catchword** (James 0673C, 1 Peter 0687C, and a six-site cluster in
Ecclesiastes). **All declined.** Convention 3 renders a fragment as *the phrase it stands for* (Ruth's
*Non te.* → "Let no man see thee"), and the boundary settled last batch stands: **the defect is never
expansion or its absence, it is CONFORMATION.**
⚑ **One real inconsistency did exist** — James renders the bare lemma `*Nolite.*` two ways inside one
work — **and it was resolved by EXPANDING the stump (0675C → "Be ye not many masters", Jac 3:1), not
by contracting its twin.** The convention decides the direction; the reader's proposal ran the wrong
way.
⚑⚑ **And the generalizable half: the readers' "control" was not a control.** They contrasted clipped
lemmata (*Multas.* → "Many [cares]") with complete one-word lemmata (*Sepultura.* → "Burial.",
*Bellum.* → "War."). Those are different classes — one has an elided governed word, the other has
nothing missing — and comparing them **manufactures an inconsistency that is not there.** Put this in
the next brief: name the control's class before treating it as a control.

### ⭐⭐⭐ 1 Timothy: five repairs, not one of them a missing word
Its blind read returned **5 sites, all OURS-SIDE, and zero Migne-side polarity defects.** Every one
was a question about what the English SAYS: *prior* read temporally **in the sentence whose own
conclusion denies temporal order** (*non ordine temporis, sed magnitudine iniquitatis* — the gloss
exists to make that distinction and our English reversed it); an ablative read as a nominative
(*imbuat disciplina* — *imbuere* takes acc. of person + abl. of thing, so discipline became the agent
of a directive addressed to Timothy); `a Satana` read as separation where it is agency; *quasi Deo*
detached from its dative *illi* and demoted to a hedge; an ellipsis of *ducit* left dangling.
**Anchors, notes, parity and bands pass all five.**
⚑ **One overturned a deliberate, argued call by the translator** (its cruces §11 read 0631C as an
anacoluthon and kept the dangling nominative). Recorded as a disagreement, not an oversight — sense
is identical under both readings, so the reading that ASSERTS something won.

### ⭐⭐ Ecclesiastes: measured zeros on BOTH polarity and conformation
The book flagged before launch as the batch's highest conformation risk — most familiar verses of any
Glossa book yet done, Jerome's Old-Latin and Hexaplaric readings against the Clementine, the exact
ground where Ruth had four silent repairs. **Zero polarity defects, zero silent scripture-repairs in
the running gloss**, with the two sharpest divergences resolved FOR Migne (*ut epulentur **bibentes***
against the Vulgate's *viventes*; *Impii* against *Viri sanguinum et dolosi*). Its 3 repairs were a
supplied subject that made Solomon the giver of wisdom instead of God (*dederit*, subject established
by *a Deo … boni facti* in the previous clause) and two missing `[var:]` — **the identical Matt. 24:13
divergence carried a marker three columns away and not here.** *Using the apparatus correctly two
columns away is still not evidence it was used where it was needed* — second confirmation.

### ⚠ The transport error, and what it cost (nothing)
1 Peter's translator was killed mid-run by **"the response stopped arriving"** with all four chunks
written and `cruces.md` not yet started. **Recovered by RESUMING the same agent with the gap named
verbatim** — never a fresh relaunch, which would have re-translated four finished chunks. Its blind
reader was then told to treat that agent's final passes as **unconfirmed and re-run them**, because a
resumed agent cannot know which of its own late checks completed before the wire dropped. It re-ran
all three; all clean.

### ⛔ Two `[cj:]`-shaped calls REFUSED for want of a witness — both are plate requests
- **8980 @0687C · *Quia requiescent super vos patientes.*** The reader read the plural against the
  lemma's singular *requiescit* as a plate defect. **It construes with no defect**: *super* takes the
  accusative, so *vos patientes* is "upon you who suffer", and *requiescent*'s subject is unexpressed
  and plural — the septiform gifts of Isa. 11:2, which is what the two limbs describe. A `[cj:]` would
  assert a conjecture with **no witness, and no plate read exists for cols 0679–0688.**
- **8946 @1116D · *Salomomonis*** — 311 *Salomonis* in `src/latin/` against this one form.
  **Indistinguishable from a Corpus Corporum doubling without the plate.** If the plate reads
  *Salomonis*, the `[sic:]` comes out and a `data/tei-patches/8946.json` entry goes in.
⚑ All four works recorded **tier 2 / coverage "none"** in `data/plate-notes/coverage.json`. PL 113's
and PL 114's existing checked-zeros rest on samples for OTHER books and were **deliberately not
imported** onto unread columns.

### ⚑ Smaller things
- **The missing-period `VERS` defect is a block-level property of the plate, not a one-off**: `VERS
  19.--` (8998 @0674D), `VERS 14.--` (8980 @0687C), `VERS. 25--` (8980 @0684D). Three sites, two
  works, reproduced verbatim in all three.
- **8980 @0680D: the note reads `(Matth. XIII)` and the text is Luke 10:24 verbatim.** The text is not
  divergent — the *attribution* is. Logged deliberately so a later reader collating against Matthew
  does not report a phantom.
- Translators' own band-by-band punctuation checks caught and reverted **38 supplied marks** across
  the batch (13 + 5 + 13 + 7). That check only works because marks are matched by POSITION, never
  tallied.
- ⚠ `sources/vulgate/` is the 2005 "Quasimodo" Clementine with its later correction diffs **not**
  applied (see its README). 8983's cruces §13 flags one call that rests on a single word of it.

### ▶ Next, in order
1. ▶ **The Glossa runs on: 6 prepared**, smallest first (1 John 8979 · Judges 8959 · Nehemiah 8962 ·
   Ephesians 8991 · Joshua 8958 · Galatians 8992). Reuse `GLOSSA-NT-AGENT-BRIEF.md`; **add the
   name-the-control's-class rule above before the next launch.** Queue is down to 8 prepared works
   overall — **restocking is due soon**, and the 4 large epistles (Romans, 1–2 Cor, Hebrews) are still
   held back for cadence size.
2. ⬜ **Owed, unchanged, Wilson's ruling:** rule 8 says the First-English claim needs a VERIFIED none,
   and `workStatusVerified` is truthy on **zero** of the 85 PL works claiming First. Enforcing flips
   85 to "New". (Grandfathered 2026-08-17 — do not retract those verdicts unasked.)
3. ⬜ **Owed:** audit whether any OTHER claim is computed in one builder and written in another.
4. Smaller, still open: 11632's plate read on `[sic: *informen t*]` · 3 Glabas sermons indexing 0
   scripture citations · 10083 @0493D / 9604 @1347D · 11550's master cruces §4 lists two LIVE markers
   as declined · 11542 @1042B may have lost a first term · Tobit 0730C undecided by two readers ·
   Tobit 0732A *omnes* recorded both ways · 8960 @0734D *tamen*/*autem* open for want of a Vulgate ·
   8983 @0623D *Tychichum* and 8946 @1120C *Saulis filiae displicens* both want a second look.

---

## ▶▶▶▶▶ SESSION CLOSE 2026-08-18g — FOUR MORE GLOSSA BOOKS · CORPUS 121 · ⛔ UNDEPLOYED

**Colossians (8990) · Philippians (8995)** — PL 114 — **and Judith (8960) · Esther (8948)** — PL 113,
the first guillemet books to inherit Tobit's conventions. 12,079 Latin words, 14 chunks.
**117 → 121 englished works.** Opus throughout, per Wilson's call at the hard stop.
`/glossa` now **15 Englished / 10 prepared**.

✅ **DEPLOYED AND PUSHED 2026-08-19** (`migne-p3q7v1gkj`, Labs scope) — five commits on `master`,
tree clean, in sync with origin. **Verified BY BODY, not by status code:** all eight new pages — four
work pages AND their four cruces pages — fetched from migne.app and **byte-for-byte identical** to the
local build, as were `/`, `/glossa/`, `/queue/` and `/scripture/`. All four carry **"New English
translation"** live; none claims priority. All four appear in RECENT on the live landing, and live
`/glossa` reads **15 Englished**. ⭐ The cruces URLs were smoke-tested, not just the work URLs.
Everything else done: `verify-english` clean ×4 ·
**`polarity-record --gate` GREEN at 121/121** · `scan-raw-markers` clean across 121 pages ·
all four cruces URLs resolve · all four badge **"New English translation"** · RECENT + every
generated page rebuilt. Blind reads found **22 sites, 20 repaired**.

### ⭐⭐⭐ THE BIG FINDING — the digitization ALTERS Migne's spelling, in both directions
Corpus Corporum does not only lose or corrupt; **it also silently "corrects".** Three instances, all
found by plate reads, **none detectable from the Latin alone**:
- **8970 @0725C** `Nephthali` → `Nephtlali` — corruption (h/l metathesis). [prior batch]
- **8948 @0739D** `convivum` → `convivium` — **normalization**: Migne printed a defective form and the
  digitization tidied it, so our Latin column would have printed a word he did not print.
- **8990 @0611A** `concilio` → `consilio` — **substitution of a different word** (assembly → counsel).
All three patched (`data/tei-patches/`), each diff exactly one word, boundaries and word counts unmoved.
⭐ **A fourth candidate came back CLEAN and that is worth as much**: 8995 `circumcicis` — the twin agrees
with the plate, so it is Migne's own type and the `[sic:]` stands. Record negatives.
⚑ **Consequence: a word that reads perfectly may read well because someone upstream fixed it.**
The corpus-frequency move is how to raise it (172 `circumcis-`, no other `circumcic-`).

### ⭐⭐⭐ THE FOURTH TEST — the other three are CONTAINMENT checks
From the Judith translator, and it is the most useful sentence of two batches:
**"Parity, counts, attachment and bands all ask what the English CONTAINS. Every defect that beat them
was a question about what the English SAYS."** Three of Judith's five repairs were invisible to every
check we run and failed the same way — a mis-parse giving plausible English (*ferias*, a subjunctive
demoted to the noun "holidays"), a right conjecture aimed at the wrong lemma, a right negation in an
inverted scope. Nothing was missing in any of them.
▶ **Now in the brief**: run last, counts already clean, read each paragraph back asking only *does it
assert what he asserts*. No mechanical form — that is the point.

### ⚠ TEST 2 HAS A HOLE, found by TWO books from opposite directions in one batch
**Test 2 validates the mapping you PROPOSE, not the mapping the Latin makes.** Colossians hit it as a
wrong *identification* of the host passing cleanly (8990 @0614B, *ne **solus** … habeat*, negative on
the verb where it belongs on the quantifier — **it PASSED test 2**). Esther hit it as a negative
correctly attached and still landing wrong in English word order — **and its own pass had caught the
identical class two columns away.** Trigger condition now in the brief: *a negative resting on a verb
with a quantifier, correlative or predicate nearby; prove the host from the sentence's STRUCTURE.*

### ⚠ Two more holes in checks we trust
- **AN ANCHOR CAN BE PRESENT, VERBATIM, IN ORDER — AND IN THE WRONG PLACE.** 8995 @0601D sat ~55 words
  downstream of its word. **Measured**: the intervening words carry no colon/semicolon/question mark,
  so the band test returned **0 mismatches before AND after** the repair. `verify-english` checks anchor
  presence and order, never position. Anchors are this edition's citation-resolving unit.
- **NOTHING COMPARES THE CRUCES TO THE ENGLISH.** 8948's cruces asserted a `si` had been rendered when
  it had not, and survived its own test-3 pass, its negation audit and the verifier — because none of
  them read the cruces. **A note that a call was MADE is not evidence it reached the sentence.**
  ⬜ Cheap tooling proposal from that translator, not built: *for every cruces line claiming a specific
  word was rendered, check that word's English exponent is in the chunk.*

### ⚑ Measured zeros worth not re-investigating
- **Esther: scripture-conformation hunt EMPTY** across ~15 divergences (Hab 3:8 on *equitatus*/*sanitas*
  not Douay's chariots; 1 Thess 4 on *resurgemus*/*residui sumus*). Ruth's four conformations on the
  same ground in the same volume are the contrast that gives the zero value.
- **Philippians: Carmen Christi zero UPHELD** by independent collation of all twelve lemmata — Migne
  genuinely agrees with the Clementine there, so there was nothing to conform.
- ⚑ **In both 8948 and 8987, ALL defects were in gloss PROSE, none in a lemma.** The lemma list does its
  job; it does not cover the sentences between lemmata.

### ✅ Plate: PL 114 third sampling, PL 113 fourth — all CHECKED ZEROS
PL 114 leaves n305–n311 (+n312 prior); PL 113 pp. 371–379. Three mid-page work divisions read at the
division (Philippians/Colossians n309, Tobit/Judith p371, Judith/Esther p375). PL 113 now rests on
**19 pages across 4 books**. ⚑ p378's foot carries printer signature `PATROL. CXIII.` + gathering `24` —
bookbinding, not apparatus.

### ⛔ MY OWN ERROR RATE ON PLATE CORROBORATIONS — practice STOPPED
Three of my incidental corroborations were wrong this session (`receperunt eum` misread from a
compressed strip; a line attributed to Esther that belongs to **Liber Job, which begins at 0747D**;
plus `debentur`/`jubentur` last batch) against one useful catch. **Each time the translator flagged the
discrepancy instead of deferring — that is the discipline working, and they must keep being told to.**
⭐ **RULE: the head+foot strip technique is for FINDING apparatus, never for TRANSCRIBING words.** Any
word quoted to an agent must come from a full-resolution crop of that line seen whole. I have stopped
issuing incidental corroborations: agents collate their own twin and do not need them.

### ⬜ PROJECT GAP — no Vulgate on disk
**Four calls declined or hedged for want of one, across two books, this batch alone**; two were later
settled only from an agent's memory, which is not a witness. Every lemma collation in the corpus rests
on that footing. ⚑ Judgment: a public `[var:]` asserting what the Vulgate reads should NOT be written
from recollection — 8960's was recorded as cruces prose instead, marked unverified. **Putting a
Clementine text on disk would close a recurring gap cheaply.** Wilson's call whether it is worth doing.

### ⚑ Small things done
- `scripts/lib/citations.mjs`: added `Hier`/`Hierem` → `Jer`. Checked corpus-wide — **only 8960 is
  affected** (5 unparsed entries exist elsewhere, none matching), so no re-index sweep was owed.
- 8948 §1(c) now carries a convention the OT books inherit: **bracketed supplies belong in gloss prose;
  inside a guilleted lemma a bracket reads as an interpolation into Migne's quoted scripture.**

### ▶ Next, in order
1. ⛔ **Deploy + push — Wilson's OK, both.** Command: `cd site && npx vercel --prod --archive=tgz
   --scope wilson-pruitts-projects`; `vercel teams ls` is the diagnostic if "Not authorized".
2. ▶ **The Glossa runs on: 10 prepared**, smallest first (1 Timothy 8983 · 1 Peter 8980 ·
   Ecclesiastes 8946 · 1 John 8979 · Judges 8959 · Nehemiah 8962 · Ephesians 8991 · Joshua 8958 ·
   Galatians 8992 · James 8998). Reuse `GLOSSA-NT-AGENT-BRIEF.md` — now 330 lines and carrying all
   four tests. **Judith's and Esther's cruces are the guillemet inheritance for the OT books.**
3. ⬜ **Owed, unchanged, Wilson's ruling:** rule 8 says the First-English claim needs a VERIFIED none,
   and `workStatusVerified` is truthy on **zero** of the PL works claiming First. Enforcing flips 85 to "New".
4. ⬜ **Owed:** audit whether any OTHER claim is computed in one builder and written in another.
5. Smaller, still open: 11632's plate read on `[sic: *informen t*]` · 3 Glabas sermons indexing 0
   scripture citations · 10083 @0493D / 9604 @1347D · 11550's master cruces §4 lists two LIVE markers
   as declined · 11542 @1042B may have lost a first term · Tobit 0730C undecided by two readers ·
   Tobit 0732A *omnes* recorded both ways · 8960 @0734D *tamen*/*autem* open for want of a Vulgate.

---


## ▶▶▶▶▶ SESSION CLOSE 2026-08-18f — FIVE MORE GLOSSA BOOKS · CORPUS 117 · ⛔ UNDEPLOYED

**1 Thess (8982) · 2 Thess (8987) · 2 Tim (8988) · 2 Pet (8985)** — PL 114 — **and Tobit (8970)** — PL 113,
the first OT Glossa book since Ruth. 10,296 Latin words, 12 chunks, five works in one cadence.
**112 → 117 englished works.** Opus throughout, per Wilson's call at the hard stop.

✅ **DEPLOYED AND PUSHED 2026-08-18** (`migne-naeyppu37`, Labs scope) — commits `bd7a6cb` + `c99ca8a`
on `master`, tree clean, in sync with origin. **Verified BY BODY, not by status code:** all ten new
pages — five work pages AND their five cruces pages — fetched from migne.app and **byte-for-byte
identical** to the local build, as were `/`, `/glossa/` and `/queue/`. All five carry **"New English
translation"** on the live page; none claims priority. All five appear in RECENT on the live landing.
⭐ The cruces URLs were smoke-tested, not just the work URLs — that is how Glabas III once shipped
with a 404 apparatus link. Everything else:
`verify-english` clean on all five · **`polarity-record --gate` GREEN at 117/117** · `scan-raw-markers`
clean across 117 built pages · all five cruces URLs resolve to built files locally (the Glabas III
404 pre-empted) · all five badge **"New English translation"**, none claims priority · `/glossa`
now 11 Englished / 14 prepared.

Deploy command: `cd site && npx vercel --prod --archive=tgz --scope wilson-pruitts-projects`.
`vercel teams ls` is the diagnostic if "Not authorized". **Deploy checklist step 8 still owed at
deploy time**: RECENT in `build-landing.mjs`, then the generated-page rebuilds (`build-scripture-index`,
`build-sources`, `build-authors-index`, `build-queue`, `build-volume-indexes`, `build-commentaries`,
`build-cruces`, `build-glossa`), then `build-landing`, then smoke-test **the cruces URLs too**.

### ⭐⭐⭐ The one new defect class this batch found — read this before the next Glossa book

**A `[sic:]` CAN SWALLOW THE WORD IT MARKS.** All four of Tobit's `[sic:]` sites used the bracket
**instead of** the rendering, so four content words vanished from the English while `verify-english`
saw a well-formed marker and passed: *"Christ laid hold of the [sic: di bolum]"* — the sentence has
no object. Also lost: "spiritually", "incautiously", "cunning". **Invisible to every automated check
we have.** The other three translators in the same batch applied 7a⁗ correctly, so this is not a
house ambiguity.

⚑ **The test that catches it, and it is mechanical:** strip every marker, then look for a stranded
article or preposition sitting on punctuation, or a doubled mark. Returns the four sites instantly
on the pre-repair text. **If the English sentence cannot be read aloud without the bracket, the
rendering is missing.**

⚑⚑ **And the deeper finding: 7a⁗'s three questions are NOT SUFFICIENT.** At 0728C the translator
actually ran them — verb? negation? conjunction? — got three clean answers, and concluded the marker
could stand alone. **The quarantine had taken the OBJECT.** 7a⁗ asks what *governs*; nothing in it
asks whether the clause still has the thing it acts on. Candidate fourth question, worth adding to
`translation-style.md`.

### ⭐⭐ A negation can be RELOCATED — which is why "are all the negatives present?" passes it

**2 Thess 0624B: `velint` ("they wish") was rendered "unwilling."** The `non` of `non solum … sed` was
pressed into double duty, which that correlative does not permit. **Plate-confirmed at n316: Migne
prints `velint`** (Augustine's received text has `nolint`, so the plate is genuinely defective — which
is exactly what the edition exists to show). A second relocation sat four lines away (`sed non ut`
silently reordered to `ut non`). **Nothing was added and nothing dropped, so every count-based check
passed and the false reading read BETTER than the true one.**

⚑ **The replacement test, from 8987's cruces §9.8:** for each printed negative, name the single Latin
word it attaches to, then find that word in the English and check the negative is ON it. **Not** "are
all the negatives present" — that is the test that passed the defect.
⚑ Both defects were in the **gloss prose, not the lemmata**: all 57 named lemmata were right. The
lemma list does its job; it does not cover the sentences between the lemmata.

### ⚑ Punctuation: a SECOND cancelling pair, and the check that finds them

Tobit chunk 0 sat at **19 colons against 19** while one had been supplied (0725C) and another destroyed
(0726D) — the 8989 shape from last batch, repeated. **The fix is not a better total.** 8970's translator
replaced the count with a **per-column-band comparison**: anchors are verified 1:1, so they partition
both twins identically; compare marks band by band. **0 mismatched bands** across three chunks on
colons, semicolons, guillemet-opens and question marks. **Use that check; hand it forward.**

⚠ **The semicolon removal in Tobit is a NARROW exception and must not be generalized.** The corpus
ruling declines this class as *a rate question, not an absence*, because Migne prints plenty himself.
In Tobit he prints **zero** in chunk 0 and one in chunk 1, so four in the English is an absence. **8948
and Judith must have their own plates counted before the exception is reused.** The eight comma→semicolon
sites in 1 Thess and six in 2 Peter were left unchurned under the standing ruling.

### ✅ Plate: PL 114 re-sampled, PL 113 sampled a second time — all CHECKED ZEROS

**PL 114** `patrologiaecurs06saingoog`, **leaf n = (col + 9)/2**, re-verified against the running head
(n312 = cols 615/616). Leaves n312–n316, n321–n323, n349–n351. **PL 113** `patrologiaecurs04migngoog`
(on disk, `raw/scans/pl113/`), **PDF p = (col + 11)/2**, pp. 368–371. No foot rule, no numbered notes
anywhere. **EIGHT mid-page work divisions read at the division** (PL 114: 1Thess/2Thess, 2Thess/1Tim,
1Tim/2Tim, 2Tim/Titus, 1Pet/2Pet, 2Pet/1John; PL 113: Nehemiah/Tobit, Tobit/Judith) — the case that lost
three notes on PL 202. n323 was read independently in both batches and agrees. All five recorded in
`coverage.json` tier 3 / `full` / `notes_recovered: 0`.
⚑ **NOT apparatus, do not re-raise:** n313's foot carries the printer's signature `PATROL. CXIV.` and
gathering number `20`. Bookbinding.

### ✅ Two TEI patches for Tobit — and the trap that nearly produced a third, wrong one

`data/tei-patches/8970.json`: **`Nephtlali` → `Nephthali`** (0725C) and **`CAPUT XIV` → `CAPUT XIV.`**.
Both digitization defects; Migne's plate untouched. Re-chunk diff showed **exactly the two intended
characters**, boundaries and the 2,567-word count unmoved; English frontmatter re-synced by hand.

⛔⛔ **THE TRAP, and it caught the orchestrator, not an agent.** This Google scan **clips line-initial
characters** down the inner column of several leaves. Reading 8987's plate I got `…bentur`, **completed
it from context as *debentur*, and reported that to the translator as settled.** The twin read
*jubentur* — and *jubentur* is what the plate prints, as a widened crop showed. The translator flagged
the one-word gap instead of conforming to me, which is the only reason it was caught.
⭐ **RULE: when a plate transcription and the Latin twin differ by one word, WIDEN THE CROP before
believing the plate.** "The plate settles it" holds only for a plate actually seen whole. Same clipping
is why `Nephthali` needed a 900 dpi read.

### ⚑ Checked zeros and closes worth not re-investigating

- **2 Peter: no Jude contamination, with evidence.** Migne's two plates share almost no wording
  (*Si enim angelis peccantibus non pepercit* against *Si Deus apostatas angelos traditos poenis inferni*;
  the two `Hi sunt` glosses are about different things). The overlap the biblical parallel predicts is
  **not** in this recension. Don't re-run this check on the next epistle pair.
- **2 Tim 0638C** — the conjecture *qui **non** abruperant* is **positively wrong**, not merely unneeded:
  Migne's own next sentence, *Multum enim interest inter eos qui hoc modo et eos qui illo modo peccant*,
  proves **both** groups sin. Closed.
- **2 Tim 0634A** *non confundor, id est deficio* — the asymmetry is Migne's (*deficio* glosses the bare
  verb, *vel non frustra patior* the whole negated phrase). "[I do not] fail" would have been the silent
  repair. Closed.
- **Tobit `Exsurgens`** vs Clementine *consurgens* — synonymous here, "Rising up" serves either, no
  `[var:]` warranted. Closed. (It had been left open for want of a Vulgate on disk; there still is none.)
- **Tobit *Num ignoramus*** — the translator's claim that the "not" is *num*'s own exponent was **tested
  and holds**; no particle was invented.

### ⚑ Rule 8 honesty, run per book as required

Consolamini/van der Pas + Litteral have published **Revelation, the Johannine epistles, and Jonah** —
**none of these five**, so "none found" is accurate for the four epistles. ⚠ **Tobit is the exception**:
a page titled "Glossa Ordinaria on Tobit" exists on a compilation site but is **login-gated**, so its
contents, source edition and translator could not be examined. `work-about.json` says exactly that
rather than a flat "none found". All five keep `workStatus: null`, so the fail-safe gives "New English
translation" and no priority is claimed anywhere.

### ▶ Next, in order

1. ⛔ **Deploy + push — Wilson's OK, both.** Nothing else is owed on this batch.
2. ▶ **The Glossa runs on: 14 prepared and waiting**, smallest first (Colossians 8990 · Judith 8960 · …).
   Reuse `GLOSSA-NT-AGENT-BRIEF.md`; **add the two new tests above to it before launching** (the
   read-aloud/marker-strip test and the per-band punctuation comparison).
   ⚑ **8948 and Judith 8960 are the next GUILLEMET books** — Tobit's cruces §1 carries the conventions
   they need (guillemet lemmata, `*usque ad*` with no verb ever supplied, Tyconius vocabulary). Reuse it.
3. **Plate spot check per book at chunking** — both volumes are now calibrated, so this is cheap.
4. ⬜ **Owed, unchanged, Wilson's ruling:** rule 8 says the First-English claim needs a VERIFIED none,
   and `workStatusVerified` is truthy on **zero** of the PL works claiming First. Enforcing it flips all
   85 to "New".
5. ⬜ **Owed:** audit whether any OTHER claim is computed in one builder and written in another.
6. Smaller, still open: 11632's plate read on `[sic: *informen t*]` · 3 Glabas sermons indexing 0
   scripture citations · 10083 @0493D / 9604 @1347D · 11550's master cruces §4 lists two LIVE markers as
   declined · 11542 @1042B may have lost a first term to the doubling · Tobit 0730C ("the letter of the
   law, the seventy interpreters") undecided by two readers · Tobit 0732A *omnes* recorded both ways.

---


## ▶▶▶▶▶ SESSION CLOSE 2026-08-18e — FIVE GLOSSA BOOKS ENGLISHED · CORPUS 112 · ⛔ UNDEPLOYED

**2 John (8984) · 3 John (8989) · Philemon (8994) · Titus (8997) · Jude (8978)** — PL 114,
3,560 Latin words, five works in one cadence. **107 → 112 englished works.**
✅ **DEPLOYED AND PUSHED 2026-08-18** (`migne-17pc7bhl6`, Labs scope) — commits `401da82`
+ `78b29f1` on `master`, tree clean, in sync with origin.

**Verified BY BODY, not by status code:** all ten new pages — five work pages AND their
five cruces pages — fetched from migne.app and **byte-for-byte identical** to the local
build, as were `/`, `/glossa/` and `/queue/`. All five carry **"New English translation"**
on the live page; none claims priority. The five appear in RECENT on the live landing.
⭐ The cruces URLs were smoke-tested, not just the work URLs — that is how Glabas III once
shipped with a 404 apparatus link.

`scan-raw-markers` clean across all 112 built pages, every page carrying the quiet `/glossa`
line, `/glossa` now 6 Englished / 19 prepared, queue 26 → 21 works (511K words).
**`polarity-record --gate` is GREEN at 112/112.**

**Ruth's conventions held without a single amendment.** `GLOSSA-NT-AGENT-BRIEF.md` (repo
root) now carries them in reusable form for the 56 books still to come — reuse it, don't
re-derive it.

### ⭐⭐ What the blind reads caught — read this before the next Glossa book

25 sites raised across five fenced readers, **14 confirmed and repaired, 11 declined with
reasons recorded**. **Zero polarity defects and zero silent repairs in the whole batch** —
the class that beat Ruth was hunted at every lemma and did not appear. Every confirmed
defect was invisible to `verify-english` and to every count-based check.

1. **⭐⭐⭐ A punctuation defect that NETS TO ZERO (8989, 0705C + 0706B).** Migne prints
   three semicolons; our English printed three semicolons — but one had been softened to a
   comma in one place and a new one supplied in another, and the totals cancel. **Any
   count-based or parity-based check passes it.** Found only because the reader **located
   each mark instead of tallying**. ⚑ **Match marks in ORDER and by position, not by total**
   — the `sentence-mark-sites.mjs` move, applied to the marks nothing scans for.
2. **⭐⭐ A dropped correlative CONCEALING a broken plate (8997, 0642A).** *ita* went
   unrendered in *praemittat eos **ita** solite, **ut** …*. Restored, the sentence visibly
   fails to construe — *solite* is the plate's corruption of ***sollicite***, the Vulgate's
   own word at the very verse glossed (Tit. 3:13). ⚑ **A defect can hide a second defect by
   making the page read smoothly. Fidelity to the words is not fidelity if the connective
   that reveals the trouble is dropped.**
3. **⭐⭐ The unexpressed subject, still the dominant class — and the author's own repetition
   is the witness (8978, 0708B).** *Comparat se* prints no subject; English "he" landed on
   Jude, who then likens himself to the preachers his own *sed haeretici sunt nubes*
   opposes. Settled inside one paragraph: the parallel gloss five lines down **prints its
   subject outright** (*Impii et pseudoapostoli comparant se … sed sunt arbores autumnales*).
4. **Reference mis-bound by word order alone, no word wrong (8994, 0642C).** *cum esset in
   custodia* stranded after "a fugitive running back", so the page said the **runaway slave**
   was in prison — against *profugum recurrentem* and against the work's own two earlier
   statements that Paul was. And **0641D: *ejus*, not *sua***, so the possessor is by
   definition not the subject of *orat*; "the Apostle" standing next to "his working" made
   Paul pray for his own reward.
5. **⛔ A flagged passage is not a checked passage — for the THIRD time (8984, 0706A).** The
   translating agent saw *qui est Creator omnium*, set out both readings, and **deliberately
   declined to resolve it** — then supplied the wrong one anyway, binding a nominative
   subject to a dative and making the man who had just cut himself off from God "become the
   God of someone." **The two readings were not equally good: one answers the preceding
   clause, the other contradicts it.**

### ⚑ The fragment convention got tested from BOTH sides — the boundary, now stated

8984's reader flagged expanded fragments (*Non ego* → "Not I only") **as** silent repairs;
8989's reader flagged an **un**expanded one (*Demetrio testimonium.* → "Testimony to
Demetrius.") as a defect. **Both were adjudicated against convention 1.2, not re-opened.**
The working boundary, now in the brief:

- **Expand** a fragment when the English stump is not a usable phrase (a bare *Non te*, a
  verbless caption) — render the phrase it stands for, **from the Latin verse**.
- **Leave** it when the stump reads as ordinary abbreviated English and Migne's own *etc.*
  marks the abbreviation.
- ⭐ **The defect is never expansion or its absence — it is CONFORMATION**, an English
  Bible's wording arriving where Migne's Latin differs from it.
- ⚑ Expect a lemma's expansion to look inconsistent with the same words re-quoted bare in
  the gloss below (8997, 0640C). That is the convention working, not drift.

### ✅ PL 114 plate: a CHECKED ZERO, and it cost almost nothing

**Leaf n = (column + 9) / 2** on archive.org `patrologiaecurs06saingoog`, calibrated against
the running head at **n330 = cols 651–652**. Full-width foot bands of all seven pages the
five books touch (n323–n325, n356–n359), **including three mid-page work divisions** —
Titus/Philemon at n325, 3 John/Jude at n357, Jude/Apocalypse at n359, the case that lost
three notes on PL 202. **No foot rule, no numbered notes: the columns simply end.**

⛔ **This is the FIRST sampling of PL 114** — the earlier "no apparatus" finding was PL 113
only and did not transfer. Recorded in `coverage.json` as tier 3 / `full` /
`notes_recovered: 0` for all five. ⚠ **Two translators had logged the plate as *unchecked*
in their own cruces**; both corrected — which also settles **Philemon's `[cj:]` at 0642D as
ours**, not a conjecture Migne had already answered.

### ✅ Rusch honesty check found a real hit

**van der Pas & Litteral, *The Glossa Ordinaria: Epistles of St. John 1–3* (Consolamini,
2015), is made from Rusch 1480/81.** So 2 John and 3 John's `work-about.json` entries say
plainly that an English of a **different recension** exists, instead of the generic "none
found". Jude, Titus, Philemon keep "none found". ⚑ **Run this per book at ship time** — the
generic line would have been false on two of five.

All five keep `workStatus: null`, so the rule-8 fail-safe gives **"New English translation"**
and no priority is claimed anywhere.

### ⚑ Checked zeros worth not re-investigating

- **0 scripture citations on all five is CORRECT, not an indexing fault.** Every note in the
  batch is an author siglum (BEDA ×4, CHRYS ×2, AUG, HIERON) and **not one is a scripture
  citation**; Ruth's 21 came from its `[n: (Psal. LXVI)]`-type notes. Density is per-book.
- Jude's "verses out of order" is **not** a reordering: the gloss headed VERS. 21 has the
  lemma *In exsultatione*, which is **Jude 24**; read so, Migne's 19·20·23·24·25 is
  continuous. His numbering stands as printed.

### ▶ Next, in order

1. ~~Deploy + push~~ ✅ done, live and body-verified. **Nothing is owed on this batch.**
   (Deploy command for next time: `cd site && npx vercel --prod --archive=tgz --scope
   wilson-pruitts-projects`; `vercel teams ls` is the diagnostic if "Not authorized".)
2. ▶ **START HERE. The next Glossa books run in cadence** — 19 prepared and waiting, smallest first
   (2 Thess 8987 · 1 Thess 8982 · 2 Peter 8985 · 2 Tim 8988 · Tobit 8970 · Colossians 8990 ·
   Judith 8960 …). Conventions settled; reuse `GLOSSA-NT-AGENT-BRIEF.md`.
3. **Plate spot check per book at chunking** — 1–2 pages. PL 114's mapping is calibrated
   above, so this is now cheap for the whole NT block.
4. ⬜ **Owed, unchanged, Wilson's ruling:** rule 8 says the First-English claim needs a
   VERIFIED none, and `workStatusVerified` is truthy on **zero** of the PL works claiming
   First. Enforcing it flips all 85 to "New".
5. ⬜ **Owed:** audit whether any OTHER claim is computed in one builder and written in
   another (the failure that put a false priority claim on 10 pages).
6. Smaller, still open: 11632's plate read on `[sic: *informen t*]` · 3 Glabas sermons
   indexing 0 scripture citations · 10083 @0493D / 9604 @1347D · 11550's master cruces §4
   lists two LIVE markers as declined · 11542 @1042B may have lost a first term to the
   doubling.

---


## ▶▶▶▶▶ SESSION CLOSE 2026-08-18d — RUTH IS LIVE. GATE GREEN. THE GLOSSA IS OPEN.

**Deployed and verified BY BODY 2026-08-18** (`migne-3vbumc0ee`): work page, **cruces page**,
`/queue` and the landing all byte-identical to the local build; 0 raw markers on the page;
three `[var:]` rendering; badge "New English translation"; landing at **107 englished works**.
The cruces URL was smoke-tested, not just the work URL — that is how Glabas III once shipped
with a 404 apparatus link.

✅ **`migne.app/glossa` is LIVE** (`migne-2bfxzah6r`, verified by body; nav confirmed clean of it).
All 58 books in biblical order, Englished / prepared / not-yet, with the honesty label once at
the top. Reached from a quiet line on each Glossa work page, not from the nav. ⭐ **Two
anti-rot rules to copy for any future collection page: select the set BY AUTHOR, never by a
title grep** (a grep pulls Walafrid's own works in — that is how the wrong 80-work count
happened earlier in this session), **and assert "Englished" from the BUILT PAGE on disk, not
from a flag.** An unplaced title exits nonzero. `build-glossa.mjs` is in the runbook checklist.

**`polarity-record --gate` is GREEN: every englished work in the corpus has now been read for
this class.** 8968 recorded at chunks 3 · sites 17 · ours 13.

⭐⭐ **What the blind read actually caught — read this before the next Glossa book.** Not one
polarity defect in the whole work; both readers checked the negation clusters and cleared
them. **The fault was SILENT REPAIR: four scripture words conformed to the familiar English
Bible against what Migne prints** (*manum* → "to eat", *manibus* → "handfuls", *Adam filium
Dei* → Douay's "who was of God", Old-Latin *Phoenicium* → "as scarlet"). Three now carry
`[var:]`. ⛔ **All four by a translator who was marking `[sic: *sul*]` correctly two columns
away — using the apparatus somewhere is not evidence it was used where it was needed.**
⭐⭐⭐ **The readers DISAGREED on the worst site and the VULGATE settled it**: at 0538C the
gloss lifts *susceptum … nutricis fungebatur officio* from Ruth 4:16, where the subject is
**Noemi** = the synagogue; our bare "she"s read to the Gentile Church and made her Christ's
nurse instead of his mother. One reader called it, the other passed it as correctly parsed —
it parses perfectly either way, and only the source decides. Full account: `src/english/8968/cruces.md` §3.

---

## (superseded) SESSION 2026-08-18d — the state before the deploy

Everything from 2026-08-18c is LIVE and body-verified (`migne-p8i45mot6`): the six works,
11613 with its 69 conjecture notes, `/queue` at 27. Since then:

### ✅ DONE — the blind polarity read on 8968 (kept for its method)

`polarity-record.mjs --gate` was RED on 8968 and it should have been. The work was translated in
session, so the translator cannot be its reader — 11535's lesson stands (two of its three
worst defects had been SEEN and DECLINED by the translating agent). A fenced reader gets the
Latin twin and the English, never `cruces.md`, and must **name the chunks it read clean**.
3 chunks; lemma-and-gloss is the richest genre for this class, so expect real yield.
Then `node scripts/polarity-record.mjs 8968 --chunks 3 --sites N [--ours N]`.

### ✅ Liber Ruth (8968) — englished, built, staged, NOT deployed

3 chunks, 2,457 words, Opus (Wilson's call, over my Fable recommendation). verify OK;
21 scripture / 4 fontes / 4 heads / 0 unparsed; every generated page rebuilt; RECENT updated;
badge "New English translation" (workStatus null → rule-8 fail-safe). Landing builds at
**107 englished works**.

**The three convention questions are SETTLED — and the answer to the biggest one was
PRECEDENT, not invention.** Shipped work 21413 (Alcuin on the Song, PL 100) already prints
`VERS. n.--` + lemma, and its English keeps the verse mark verbatim while translating the
lemma. So: verse mark = address, passes through; lemma Englished; the Latin lemma stands
opposite in the parallel column. ⚑ **One grep of the shipped English closed a question that
had been open since the block was scheduled — look for the precedent before ruling.**
Fragmentary lemmas get the phrase they stand for (*Non te* → "Let no man see thee").
**The sigla need no convention at all**: `(RAB.)`, `(ISID.)` arrive as ordinary `[n: …]` and
the locked register already governs them. Full statement in `src/english/8968/cruces.md` §1 —
**that file binds the other 61 Glossa books.**

⚠ The honesty label lives in `data/work-about.json` (reader-facing), not in the apparatus:
abridged 19th-century recension · marginal glosses only · 58 of ~73 books · the Walafrid
Strabo ascription given up. New author entry: "Anselmus Laudunensis et schola".

**Two digitization defects patched** (`data/tei-patches/8968.json`), both verified at 300 dpi:
`significaRuth` → `significat Ruth` (line-join that ate a letter, 534A) and a missing space
at `VERS.9` (537D). **Migne's own difficulties are NOT patched** — *effoetandi* does not
construe and is rendered as it stands; *sul tectum* carries `[sic: *sul*]`.

### ▶ Then, in order

1. ~~Blind read + record 8968, then deploy~~ ✅ done and live.
2. **The next Glossa books can run in cadence** — 24 are chunked and waiting (queue 26 works
   / 421 chunks after Ruth left it). Smallest first; the conventions are settled.
3. Plate-note spot check, 1–2 pages per book at chunking (the blanket read is off — PL 113
   prints no apparatus on 8 pages sampled across 3 runs).
4. Smaller, still open: 11632's plate read on `[sic: *informen t*]` · 3 Glabas sermons
   indexing 0 scripture citations · 10083 @0493D / 9604 @1347D · 11550's master cruces §4
   lists two LIVE markers as declined · 11542 @1042B may have lost a first term to the
   doubling.


## ▶▶▶▶▶ SESSION CLOSE 2026-08-18c — SIX WORKS DEPLOYED · `[cn:]` BUILT · QUEUE 3 → 17

Tree clean · all commits pushed through the previous session · **3 new commits this
session, unpushed** · ledger 106/106 untouched (no translation ran).

### ✅ The six undeployed works are LIVE and verified BY BODY

`migne-4czipfd24`, production. Verification was not a status-code check: each of the six
work pages and its cruces page was fetched from migne.app and compared **byte for byte**
against the local build — twelve pages, all identical. Landing still reads 106 englished
works. 9033 · 11064 · 11065 · 11542 (Pattern 11a marker moves) · 11535 · 11550 (Pattern 18
promotions).

### ✅ `[cn: …]` is built, end to end — the marker ruled last session

`scripts/inject-plate-notes.mjs` places every recovered note from
`data/plate-notes/<idno>.tsv` beside the word Migne queried, in the **Latin** chunks.
`chunk-work.mjs` runs it as its last step (chunking rewrites chunks from the TEI, so an
injection done earlier is erased silently). `verify-english.mjs` hard-errors on a `[cn: ]`
in the English and strips it from the word-ratio count. `build-work-page.mjs` renders it in
the `.notecite` family — his apparatus, in the maroquin so a conjecture cannot be read as a
citation. `scan-raw-markers.mjs` knows the form. Pattern 19 in `translation-style.md` says
what a translator does with it.

**11613's 71 notes: 69 placed, page rebuilt, verify OK.** ⛔ **That rebuild is UNDEPLOYED.**
No plate was re-read, so this is not the retrofit the ruling forbids.

⭐ **Three findings, all now encoded:**
1. **A gap in the note numbers is the crop detector — but Migne skips numbers himself.**
   11613 never prints (59), and `coverage.json` had said so all along; my checker called it
   a cropping fault until it learned to read the file. Gaps are silenced ONE NUMBER AT A
   TIME (`sequence_gaps_documented`), never by widening the check. *(Same shape as the
   "empty grep ≠ absence" lesson: the apparatus already knew.)*
2. **Marker syntax has no nested brackets.** A row carrying the plate reader's own aside
   (`F. *spr*  [TRUNCATED ON THE PLATE …]`) truncated its marker and stranded a `]` in the
   Latin — **caught only because a second run placed one note fewer than the first.**
   Idempotence is the test that found it; run any injector twice.
3. **A note that will not place is EVIDENCE.** The 2 of 71 that fail are real divergences
   between the plate and Corpus Corporum: at (5) our TEI reads *immortalium* where the plate
   reader has *immortalitas* — and Migne's conjecture *in mortalium* only construes against
   ours. The injector reports and places nothing. ⬜ Both want a look at the page some day;
   neither blocks anything.

⛔ **RULED, and Pattern 19 carries it: the English side does NOT show Migne's conjecture —
the crux plus the parallel Latin is enough.** Wilson, 2026-08-18: *"the cj: is for scholars
where the english is for all."* Closed; do not re-raise.

### ✅ Queue restocked in two batches: 24 Glossa books chunked (3 → 27 prepared)

PL 114 (NT): 2 John 8984 · 3 John 8989 · Philemon 8994 · Titus 8997 · Jude 8978 · 2 Thess
8987 · 1 Thess 8982. PL 113 (OT): Tobit 8970 · Judith 8960 · Esther 8948 · Ecclesiastes
8946 · Nehemiah 8962 · Judges 8959 · Joshua 8958. **40 chunks, ~34K words.**
⛔ Prepared, NOT cleared to run: **Ruth (8968) is still the conventions pilot** and gates
every other Glossa book.

**Second batch (Wilson: "a few more glossa books before we deploy"):** 2 Peter 8985 · 2 Tim
8988 · Colossians 8990 · 1 Tim 8983 · Philippians 8995 · James 8998 · 1 Peter 8980 · 1 John
8979 · Ephesians 8991 · Galatians 8992 — 41 chunks, ~37K words. The four large epistles
(2 Cor, Hebrews, 1 Cor, Romans) are left for later so the queue stays in cadence sizes.
**Queue: 27 works, 424 chunks, 517K words.**

⛔ **A flag from the first batch is WITHDRAWN.** I wrote that the NT gloss books carry almost
no `<note>` where the OT books carry 100+, and wondered whether the attribution sigla apply
to the NT at all. The wider sample kills it: 1 Peter 46, James 34, 2 Peter 32, Galatians 29.
**Density is per-book, not per-testament** — the first seven happened to be the sparse ones.
Nothing was built on it; withdrawn so the pilot does not hunt a pattern that is not there.

### ▶ Next, in order

1. ⛔ **Deploy the 11613 rebuild** (`cd site && npx vercel --prod --archive=tgz --scope
   wilson-pruitts-projects`), verify by body. It is the first page in the corpus to carry
   Migne's own conjecture notes.
2. ⭐ **Plate-note recovery for the restocked queue — still small.** The 25 prepared Glossa
   books sit in **five contiguous runs: PL 113 cols 505–540 · 713–748 · 1115–1126, PL 114
   cols 569–642 · 671–710 — 198 distinct columns ≈ 99 plate pages** (11613 alone was ~79).
   Contiguity is what keeps it cheap: whole runs render in one pass. Scans exist: PL 113 `patrologiaecurs04migngoog` + Gallica
   `bpt6k5505319w`; PL 114 to confirm the same way. Needs one calibration read per volume to
   fix `PDF page = f(column)` against the running head, then the full-page crops.
   **⛔ Hard-stop burn statement before launching: ~99 page reads, est. ~1.3–1.9M, and
   "which model, and go?"** Do it BEFORE Ruth runs, so the pilot meets the apparatus.
3. **Ruth (8968), the Glossa conventions pilot** — 3 chunks, and it decides lemma rendering,
   attribution sigla and page layout for 62 works. Wilson gates the conventions.
4. Smaller, still open: 11632's plate read on `[sic: *informen t*]` · 3 Glabas sermons
   indexing 0 scripture citations · 10083 @0493D / 9604 @1347D · 2 space-for-comma unparsed
   citations · 11550's master cruces §4 lists two LIVE markers as declined (marker count
   right, list wrong) · 11542 @1042B may have lost a first term to the doubling (only a
   non-Migne witness would decide).


## ▶▶▶▶▶ SESSION CLOSE 2026-08-18b — PATTERNS 11a AND 18 DONE. ⛔ 6 WORKS BUILT AND UNDEPLOYED.

**Foliot (11613) is LIVE and verified.** Everything below happened after it shipped.
Tree clean · **5 commits unpushed** · polarity ledger **106/106** · markers clean.

### ⛔ FIRST THING NEXT SESSION: six works are rebuilt, committed and NOT DEPLOYED

`cd site && npx vercel --prod --archive=tgz --scope wilson-pruitts-projects`, then verify BY
BODY. The six: **9033 · 11064 · 11065 · 11542** (Pattern 11a marker moves) and
**11535 · 11550** (Pattern 18 promotions). Nothing else is pending on them.

### Pattern 11a — mark the INTRUSIVE copy, not the second (Wilson, 2026-08-18)

Pattern 11 said wrap "the repeated occurrence only" — a rule about POSITION, correct only
while the two runs are IDENTICAL. Migne also doubles a run WITH VARIATION, and then marking
the second copy can **quarantine the true text and leave the intrusion standing**. All 14
`[d:]` markers audited: 7 fine, **2 were already right without the rule** (11062, 11550 —
the translator could see which copy was the intrusion), **3 mis-marked and fixed** (11065
@0142B inverted its column's argument exactly as 11613 @1230D had; 11542 @1042B had the
marker on the climax of *non solum … sed etiam*; 9033 @0602C).
⛔ **Pattern 11's OWN ILLUSTRATION modelled the marking 11a forbids** (*puro pura* — *pura*
agrees with *revelatione*, so the intrusion is the FIRST copy); rule text and 11064's chunk
both corrected.
⬜ **11542 @1042B is not closed by the marker move** — a first term may have been lost to the
doubling; only a collation against a non-Migne witness would decide.

### Pattern 18 census — CLOSED, 5 promotions. ⛔ DO NOT RE-OPEN (see `translation-style.md` 18a)

11535 promoted 2 of ~55; 11550 promoted 3 of ~40; both declined all four previously-named
"strongest" candidates with stated reasons. Every promotion's opening word verified verbatim
in its Latin twin. **0511A is a consistency promotion paired with the live 0484A — they move
together or not at all.** 0511D was flagged by its own reader as most open to overrule.

⛔ **A third pass over the other ~100 works returned ~93 promotions at 13% — 2–3× its peers —
and is SET ASIDE UNVERIFIED.** Its headline claim (~18 "live silent repairs") was checked
first because that would be a correctness gate, not an audit refinement: **three spot-checks,
three failures** (11066 @0587A and 11064 @0968B are faithful as written; two cited columns do
not resolve at all). ⭐ **Volume is not evidence.** Full disposition and the disqualifying
evidence: `data/plate-notes/PATTERN18-CENSUS-2026-08-18.md`. **Nothing from that pass may be
applied without site-by-site verification.**

⚠ **Known and deliberately not acted on:** the crux files state Pattern 18's bar as
"negations and correlatives only", which is the 2026-08-15 *extension*, not the rule (the
actual test is whether the English asserts something false; the ✅ list includes a verb and a
word substitution). **1360C and 0502B were declined on that misreading.** Wilson ruled against
re-adjudicating — *"we were rigorous with this and that is all we can really seek… a billion
more tokens could move us a few more inches toward faithfulness, but the cost-benefit isn't
there."* **Recorded, argued, decided. Do not re-raise as an oversight.**

### ▶ Open, in the order Wilson set them

1. **Deploy the six works** (above).
2. **Restock the queue.** `/queue/` is auto-generated and accurate at **3 prepared works** —
   Liber Ruth (8968, 3 chunks) · Wolbero (11512, 81) · Thomas Cisterciensis (11703, 259).
   That is thin runway, and Wilson flagged it. ⚠ **Confirm first whether he means restocking
   the pipeline (chunking new works) or something about the page** — the page itself is not
   stale.
3. ⭐ **Build the `[cn:]` conjecture-note marker into the NEXT work's chunker** — Latin only,
   shown in the apparatus, never adopted into the text. Design ruled 2026-08-18; deliberately
   not built, because at chunking time it costs nothing extra. **Do this WITH the restock,
   not separately** — the notes are recovered at chunking time, so the next work carries them
   from the start. Method + crop rules in CLAUDE.md.
4. Smaller, still open: 11632's plate read on `[sic: *informen t*]` · 3 Glabas sermons
   indexing 0 scripture citations · 10083 @0493D / 9604 @1347D · 2 space-for-comma unparsed
   citations (corpus-wide count: 2 — not worth a shared-parser change) · 11550's master cruces
   §4 lists two LIVE markers (*discere* 0430B, *voluptatum* 0450D) as declined; the marker
   count is right, the list is wrong.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-18 — FOLIOT IS LIVE, AND MIGNE'S LOST APPARATUS LAYER IS FOUND

**Gilbert Foliot, *Expositio in Cantica canticorum* (11613, PL 202, 1147A–1304D) is LIVE**
— `migne-hag2hoot6`, production, **verified BY BODY**: work page and cruces page both 200,
badge **First English translation**, six blind-read fixes confirmed present and their
pre-fix readings confirmed absent, **the 72-row notes table live on the cruces page**,
landing at **106 englished works**, `/scripture/` at 106. ⚠ **That verification is DATED.**

53 chunks · 66,297 Latin words · 65 `[var:]` · 19 `[sic:]` · 11 `[cj:]` · 1 `[d:]` · 1 `[nt:]`.
Polarity ledger **106/106**. `master` clean, **~20 commits unpushed**.

### ⛔⛔⛔ THE FIND OF THE SESSION — A WHOLE APPARATUS LAYER IS MISSING FROM OUR SOURCE

**Migne prints numbered conjecture notes at the foot of his pages (`Forte *word*.`), and
Corpus Corporum's TEI contains NONE of them.** Measured across **all 5,276 PL TEI files and
498,774 `<note>` elements: ZERO.** The 413 `<note>` per work we do get are his *inline
parenthetical citations* — a different layer entirely.

⚑ **These are the apparatus that settles cruces, so we have been declining conjectures Migne
already answered.** Worked case: 1254B prints *quanam « Aaron » filiabus Sion consulitur
egredi*, which does not construe; a translating agent weighed two conjectures and rightly
declined for want of a witness — **and Migne's witness, *Forte earum*, was printed at the
foot of that very page.**

**⛔ WILSON'S RULING (2026-08-18): recover notes for NEW works at chunking time; do NOT
re-run the completed corpus until funds justify it.** *"turning out new works helps that keep
going and may increase the funders"* — four monthly sponsors as of this session. **Shipping
new works is the funding lever; retrofits are invisible to a reader.** Full rule + method in
CLAUDE.md; per-work status in `data/plate-notes/coverage.json` (**tier 2** = our apparatus
only, 97 works; **tier 3** = Migne's notes recovered, sequence verified — 11613 alone;
`partial` exists and says outright that absence proves nothing there).

**11613's 72 notes are in `data/plate-notes/11613.tsv`** — 71 rows, every anchor located in
our Latin. Method proven: **PDF page = 600 + (col − 1187) / 2** for `patrologiaecurs139unkngoog`;
copy B `patrologiaecurs114unkngoog` is one page lower and is the second witness.

⚠⚠ **THREE METHOD RULES, EACH PAID FOR:**
1. **Crop the FULL page width.** Notes sit under BOTH columns and, at a work division,
   MID-page. My bottom-strip band lost 3 of the first 10 and was caught only because
   **the numbering runs sequentially and a gap is a detector.** Always check the sequence.
2. **Assign the column from the MARKER, not from where the note is printed** (p. 610's note
   sits under the left column; its marker is in the right).
3. **Three-way distinction:** we cannot read it → `ILLEGIBLE` · **he printed it defectively →
   record as printed** (note 64 is `F. spr`, truncated in BOTH copies) · uncertain →
   **escalate magnification and a second copy before accepting** (note 14's *bona* was argued
   well at 300 dpi and died at 900, where the letter shows no ascender though the `f.` beside
   it does). ⭐ **Sense-plus-letterform reasoning can be excellent and still lose to
   magnification.**

### ⭐⭐⭐ THE BLIND READ — 25 sites, ALL OURS, and the dominant class is structural

Six readers, ~9 chunks each, fenced from cruces.md, the merge notes, the brief,
`data/plate-notes/` **and from grepping `src/english/` at all**. `verify-english` had passed
all 25. **Zero Migne defects wrongly corrected** — every reader rejected the Migne-side
candidates as correct literal renderings.

⭐ **12 of 25 are ONE CLASS: an unexpressed Latin subject or referent that ENGLISH CANNOT
LEAVE UNEXPRESSED, supplied wrongly.** Fluent, self-consistent inside its own sentence,
invisible to every automated check, **and usually settled only by the NEIGHBOURING chunk —
which is exactly what a chunked fleet cannot see.** ⬜ **Add to both briefs permanently.**
Worst site: **1206D/1207A** rendered *botrus cypri* as Douay's "cluster of cypress" against
**Foliot's own gloss that Cyprus is an ISLAND**, collapsing his cluster→vines→wine→martyrs
chain.

⬜ **Wilson: Pattern 11 needs a clause for VARYING doublings.** At 1230D the `[d:]` marker
quarantined the wrong copy and inverted the column's argument. Pattern 11 says mark the
second; it is written for IDENTICAL runs and does not decide a doubling that varies in one
word. **Mark the INTRUSIVE copy.** Two agents reached this independently.

⚠ **One reader's fix was overruled**: a plural at 1277D would have smoothed Migne's printed
singular verbs. **A reader's diagnosis can be right while its remedy silently repairs the
plate — check the remedy against Pattern 7, not just the diagnosis.**

### Still owed
- **Pattern 18 census** — Wilson has scheduled it AFTER Foliot, and the reason is standing:
  pattern work costs HIS time (thirty ratifications), translation runs cost only tokens.
- **The marker class for the notes** (`[cn: …]` in the LATIN only, shown in the apparatus and
  never adopted into the text) — to be built into the NEXT work's chunker, where it costs
  nothing extra. Design ruled this session; not yet implemented.
- 11632's plate read on `[sic: *informen t*]` · 3 Glabas sermons indexing 0 scripture
  citations · 10083 @0493D / 9604 @1347D · the 2 space-for-comma unparsed citations
  (corpus-wide count: 2 — not worth a shared-parser change).

## ▶ 2026-08-18 — GLOSSA ORDINARIA MOVED UP THE QUEUE (Wilson's call); RUTH PREPARED

**PL 113–114 Glossa (62 works, ~783K w) is now a named priority block — see the new
"Priority block — Glossa ordinaria" section in PLAN.md** (and the paired "exhaustive
edition" bullet under Explicitly deferred: Rusch/Gloss-e rights findings, the 1603/1617/1634
received-text option, Klumpenhouwer competition — dossier in memory `glossa-ordinaria.md`).

**Prepared: Ruth (8968, work 3945) — 3 chunks, 2,455 w, validation OK (28 col marks, 23
notes).** It is the CONVENTIONS PILOT: settle lemma rendering (`VERS. n.-- *lemma.*` form),
attribution sigla (`[n: (RAB.)]`), and work-page layout before any other Glossa book runs.
Ruth's `translation.workStatus` is null (not yet adjudicated) — do the per-work English
check at ship time; English of the RUSCH recension exists for other books (never Ruth found).

Foliot ship steps below remain owed and unaffected.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-17e — FOLIOT IS FULLY ENGLISHED AND MERGED. ⛔ NOT READ, NOT BUILT, NOT DEPLOYED.

**Gilbert Foliot, *Expositio in Cantica canticorum* (11613, PL 202, 1147A–1304D): all 53
chunks englished, verified, and the cruces merged.** Eleven Opus agents in three waves.
`verify OK: 53 chunks`. Apparatus **65 `[var:]` · 19 `[sic:]` · 11 `[cj:]` · 1 `[d:]` ·
1 `[nt:]`**, `[n:]` at exact parity (413 LA / 412 EN + the one Pattern 15 conversion).
`master` = clean, **14 commits unpushed**.

⛔ **STILL OWED BEFORE THIS SHIPS, IN ORDER:** the **blind polarity read** (~0.6M, Wilson's
OK pending — six readers, fenced from the cruces, run 3 at a time), then
`index-work.mjs 11613` + `build-work-page.mjs 11613`, an "On this text" note in
`data/work-about.json`, `build-landing.mjs`, and a deploy with its own OK. **Badge will read
First English translation** (`workStatus: none`, `englishState: untranslated` → set `ours`).

### ⚠⚠ THE MACHINE IS THE BINDING CONSTRAINT, NOT THE RUNBOOK

Six parallel agents is inside the runbook's cap and **outside this Mac's**. Mid-run,
`~/bin/strays` read **free 18 MB of 8192, swap 8028M of 9216M**, and three of my own greps
timed out at 120s as a result. Throttled to 3, then 2. ⭐ **CLAUDE.md rule 5 already says
three on multi-million-token fleets — apply it from the FIRST wave next time, not after the
swap fills.** A timing-out grep is the symptom to watch; `strays` is the check.

### ⭐⭐⭐ THE 7a″ RESULT, AND IT IS A CLEAN MEASUREMENT

**Every printed lemma line in the work agrees with the Vulgate. All the divergence is in the
RE-QUOTATIONS** — which is exactly where naming the words told eleven agents to look, and
they had no way to compare notes. That is the 8930 finding reproduced at whole-work scale.

⭐ **The single highest-value line in the brief was naming the *mala* homograph.** *mala* is
apples AND evil in this work, and Foliot **contrasts the two deliberately at 1265B**
(pomegranates = martyrs, apples = confessors). At **1297D apples and evils collide inside one
eleven-word clause**; at 1298D–1299A he slides across the homograph six times in four lines.
An apple rendered "evil" is fluent English that passes every automated check we own.

### ⭐⭐ Cross-range drift is REAL and mostly caught by naming it in advance

- **`amica` = friend.** Three ranges, two answers. Settled on **Foliot's own pun** (*ut amica
  nominum positio*) plus *verbo amicabili* at 1196A — found independently by two ranges that
  could not see each other. Applied work-wide.
- ⛔ ***quem diligit anima mea* was printed THIRTEEN times across four chunks and read two
  ways** (9 "loveth", 4 "loves"). All now **"loves"**: the lemma governs its re-quotations,
  0014 carries the phrase's first lemma, and the corpus register runs modern in prose
  (11550+11066: loves 68/loveth 8, says 480/saith 3).
- The praise-words resolved three ways without anyone yielding a needed word: *decora* =
  comely · *speciosa* = "my fair one" · *pulchra*/*formosa* = beautiful · *species* = fairness.
- **`ferculum`**: both readers reached "litter" independently. ⭐ The reasoning is the keeper —
  11550 keeps it as italic Latin because **Richard etymologizes it** (*ferculum a ferendo*)
  and Foliot does not, so the ground that forced italic Latin there is absent here. **Never
  copy another work's rendering; copy its reasoning and re-run it.**

### ⛔⛔ AN EMPTY GREP NEARLY DELETED A REAL FINDING — SECOND TIME THIS CLASS HAS BITTEN

The merge reported the Cant. I, 6 seam as still divergent. I grepped for "pasturest" and "at
midday", got almost nothing, and **came within one edit of recording that the entry was stale
and the divergence imaginary.** It was real: **1193C abridges *ubi pascas* away entirely** (so
"pasturest" could never appear) and the surviving "at midday" **sat deep inside a 400-word
line that my search window truncated**. ⭐ **The apparatus said the site was there and the
search said it was not; the apparatus was right** — same shape as the *Martyrs of Palestine*
error. Recorded in `cruces.md` as well as here, because the mechanism generalizes.

### ⬜⬜ THREE THINGS WAITING ON WILSON (all in `src/english/11613/cruces.md`)

1. **Three apodosis-less sentences — 1159D, 1269D, 1299C.** Found by three readers blind to
   each other, all rendered ending where Migne ends, all deliberately unmarked (`[ed:]` covers
   only what OUR digitization lost). Three sightings is a measurement: **this plate drops
   limbs.** Options: stay silent · log on the cruces page · open a printed-lacuna marker class
   — ⚠ the last needs a sweep of 105 works, because nothing has ever counted them.
2. **Pattern 14 cannot express "Migne against himself" — 14 sites, each judged on
   materiality.** ⭐ **The 0018 repair bounded this and corrected my framing:** its own marker
   was withdrawn because *Dum*/*Cum* fails Pattern 14's materiality bar anyway, and **"a marker
   that validates is not thereby earned."** So argue the case on **1176B and 1194B**, never on
   1199D. The mechanical blocker is **overlap LENGTH**, not self-quotation (proof: 1270B passed
   because Migne's re-quotation stopped short of the full phrase). Proposed: compare the
   marker's content against the SENTENCE it sits in, not the whole chunk. ⛔ **Do not change
   the validator without Wilson** — it is what stops a marker claiming our prose is Migne's.
3. **Plate-read queue, cheapest-decisive first:** **1303C** (*Centum* vs the lemma's *ducenti*
   — a number, which NO existing pattern reaches) · **1202D** (*pallium* for *pullum*; the
   gloss covers only the she-ass so the work gives no witness) · **1254B** (*quanam* with no
   noun, two good conjectures competing) · **1304D** (the work ends on *conquiescit.* with no
   colophon — verified absent from `sources/pl/tei/11613.xml`, so nothing was lost between
   source and chunk, but a 12th-c. Song commentary ending with no formula is unusual).

⭐ Also worth a line in `translation-style.md` when Wilson rules: **passing the validator is
not evidence a marker is earned.** Every automated check here is a floor, not a warrant —
the same shape as "a flagged passage is not a checked passage," which has now bitten twice.

▶▶ **Also still open from earlier today:** the **Pattern 18 census**, which Wilson has now
scheduled **after Foliot** — and the reason is worth keeping: pattern work costs HIS time
(thirty ratifications), translation runs cost only tokens. Plus 11632's plate read on
`[sic: *informen t*]`, the 3 Glabas sermons indexing 0 scripture citations, and
10083 @0493D / 9604 @1347D.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-17d — THE ?/! REPAIR IS LIVE; THE CLAIM AUDIT FOUND TWO MORE

**Deployed 2026-08-17: `migne-msa0uglci`, production, verified BY BODY** — Pattern 8b's
colon serving on 11066 and 21413, both swaps corrected, and the three pre-repair readings
confirmed *absent* from the live pages (a stale-string check, not just a new-string check).
Cruces URL 200, landing and `/scripture/` both 105 works. `sentence-mark-sites.mjs` prints
**0 dropped marks** corpus-wide. ⚠ **That verification is DATED and expires.**

### ⛔⛔ THE CLAIM AUDIT — the answer is YES, and yesterday's fix had already drifted

The owed question was whether any OTHER claim is computed in one builder and written in
another. **It is the same claim, and the repair made yesterday recreated the defect the
same day.** Found by comparing all 105 pages' badges against their own landing entries —
**3 disagreed:**

1. **The mirrored helper drifted immediately.** The work page's copy of `isFirstEnglish`
   had `PRIOR_ENGLISH = ['full','partial','minimal','some','mostly']` — **five values that
   appear NOWHERE in works.json**, whose entire vocabulary is
   `none / copyrighted / unclear / pd-ingested / null`. **The prior-English test never
   fired once.** 7561 (Vincent of Lérins) and 8715 went live claiming to be the FIRST
   English of texts we knowingly re-translated *because a public-domain English exists*.
   ⭐ **Not merely unsupported — contradicted by our own triage.**
2. **The landing's key collides.** It looked up by `volume/title` under a comment asserting
   that pair is unique. **176 keys collide across 472 texts; 56 collisions hold records
   that DISAGREE on workStatus.** PL 173 *Epistolae* is two works (11031 `none`, 11035
   untriaged); the Map's last write won, so **11031 was denied a claim it had earned.**

**Fixed properly: `scripts/lib/first-english.mjs` holds the rule, the sets and the lookup
ONCE**; landing + both work-page builders import it. **PL is keyed BY IDNO** (unique by
construction; a title never was), and pages emit `<meta name="migne-idno">` so the landing
stops guessing at identity. ⭐⭐ **`build-landing.mjs` now reads every built page's rendered
badge and exits non-zero if it differs from what the landing computes** — the check that
would have caught both, since neither ever showed in a status code. Landing First 89→90,
work pages 92→90, **0 of 105 disagree**. ⛔ **COMMITTED, NOT DEPLOYED — the two false First
claims are LIVE right now.**

### ⬜⬜ THIRD FINDING, MEASURED, NOT ACTED ON — Wilson's to rule

**CLAUDE.md rule 8 and the landing's own comment say the strong claim requires a *verified*
none. The code has never checked the verified flag — only `workStatus === 'none'`.** Of the
**85 PL pages claiming First, `workStatusVerified` is truthy on ZERO.** So either the field
is vestigial for PL and the prose overstates the rule, or 85 public priority claims rest on
an untimestamped verdict. **Enforcing it would flip all 85 badges to "New" in one commit,
which is far too big a change to make on my own reading of a comment.** Same defect class
as the other two — a claim whose stated rule is not the rule the code runs.

### ✅ The `/method` page was ALREADY DONE — the note asking for it was stale

*Why translate this way* has been live since the 2026-07-28 work (`b6c926d` and before),
carrying Wilson's framing intact — *nobody was doing it · not a perfect translation but
unlocking the language gate · the clerk carrying his exemplar's mistake forward* — and
closing with the argument that what matters is that errors be **findable**, which is why
the Latin sits beside the English and the licence permits correction. **All three sites now
link each other**: `/method` → actasanctorum.org + bonaventure.wrootpress.com, and both of
those link back (checked live). `NOTES-method-page.md`'s "still owed: link migne.app back
from Acta" is **also done**. ⚠ **NOW.md and this note both carried it as owed; verify live
state before working a queue item, and never re-do work a stale note claims is open.**
Bonaventure's *What Is Known to Be Wrong* section is the only piece of that trio still
missing, and it lives in another repo.

▶▶ **Front when resumed:** the **deploy of the badge fix** (Wilson's OK; the false claims
are live), the **`workStatusVerified` ruling** above, and **Gilbert Foliot 11613** —
*Expositio in Cantica canticorum*, PL 202, **54 chunks / 66,297 Latin words**, `workStatus:
none`, which Wilson has authorized on **Opus**. Estimate at the corrected ~40K/chunk:
**~2.1M fleet + ~0.6M polarity read.** ⛔ **Pattern 18 is SKIPPED again by Wilson's own
call** — that is now four times; if it matters it needs a scheduled slot, not a queue line.
Still open: 11632's plate read on `[sic: *informen t*]`, the 3 Glabas sermons indexing 0
scripture citations, 10083 @0493D / 9604 @1347D.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-17c — THE ?/! REPAIR IS DONE. 0 DROPS CORPUS-WIDE. ⛔ NOT DEPLOYED.

**All 29 chunks that deleted a mark Migne prints are repaired — 31 sites in 14 shipped
works.** `node scripts/sentence-mark-sites.mjs` now prints **0 dropping a printed mark**
(from 29); total deltas 136 → 109, all of them the softer *supplied*-mark direction, which
stays measured and unswept. Every touched work re-verified, re-built, re-indexed (the
standing job), landing rebuilt (105 englished works), `scan-raw-markers` clean on 105 pages,
polarity gate 105/105. `master` = `a470f65`, tree clean, **3 commits unpushed**, **NOT
deployed** — both are protected and were not asked for.

Works touched: 7561 8566 9245 11031 11058 11064 11065 11066 (10 chunks) 11080 11081 11083
11208 11553 21413.

### ⭐⭐ The census had been measured and left; what it needed was ADDRESSES

The 2026-08-14 finding (29 chunks, named by work) sat un-actioned because a warn that says
"this chunk is wrong" is not a site — 11064/0049's offending paragraph is **113 sentences
long**. `scripts/sentence-mark-sites.mjs` pairs the *marked* sentences of the two twins in
order; where the columns stop describing the same clause, the English list runs one ahead of
the Latin, **and that row is the drop.** All 29 localized; none needed hand alignment.
⚑ **The generalizable move: when a parity COUNT flags a chunk, pair the two sides' marked
units in order — the offset names the site for free.**

### ⭐⭐⭐ Pattern 8b (Wilson, 2026-08-17) — the indirect question takes a colon

**Migne routinely closes an indirect question with `?`** (*Quaeritur quid sit gratia Dei?*),
and English cannot end an indirect construction with a question mark. So the mark got
dropped, silently — **Pattern 8's "never delete" was broken by the one class of sentence
where obeying it looks like a typo.** Wilson's ruling: keep the mark by moving the question
into direct form behind a colon — **"It is asked: what is the grace of God?"** Nothing
supplied, nothing deleted. Bounded in `translation-style.md`: **the test is whether the
English refuses the mark because of English grammar, or because we quietly improved his
sentence.** A `?` Migne prints on a plain statement (11537 1063D–1064A, and 11080/0000's
*Compassio ex vitio, culpabilis est?*) still rides as printed under Pattern 8.

⚑ **~15 of the 31 sites were this one class, and nearly all of them in 11066** — Hugo's
*Quaestiones*, where every article opens *Quaeritur*. **A defect that tracks an author's
formula concentrates in one work and looks like that work being bad.** It was the corpus's
grammar, not Hugo's.

### The other two classes

- **The merged sentence (~10).** The last question of a chain lost its boundary *and* its
  mark. 11066/0032 swallowed Migne's break after *ut iret?*; 7561/0001 merged *Quid
  postremo?* into the question that answers it; **7561/0009 turned a `?` printed INSIDE an
  italic scripture lemma into a comma.** This is the 11632 vanished-sentence class one degree
  down — same mechanism, less text lost.
- **The swap (4).** 11058/0016 and /0017 printed Migne's `?` as `!`; 11066/0031 printed his
  `!` as `?` — the 11537 case the rule was written for; 11031 and 11208 flattened *fugis!*
  and *sed, heu!* to commas.

⚠ **The `?`-surplus direction (109 chunks) is NOT closed and is not a defect claim on its
own** — English legitimately turns some Latin statements into questions. It has never been
sampled the way the em-dashes were. **Do not sweep it.**

▶▶ **Front when resumed:** the **deploy of this repair** (Wilson's OK; 14 works' pages plus
the landing changed — `cd site && npx vercel --prod --archive=tgz --scope
wilson-pruitts-projects`, then the full step-8 checklist, and **verify BY BODY** per the
2026-08-17b lesson, not by status code), the **Pattern 18 corpus census** (~35 new candidates
from 11535; four strongest: 1295A *minus*/*imis*, 1246C *amittere*/*admittere*, 1261A
*praefectis*/*perfectis*, 1360C *ab*/*ad subdiaconatum*), the **`/method` page**'s missing
"why translate this way" argument + sibling links (`NOTES-method-page.md`), the **audit owed
from 2026-08-17b** (is any OTHER claim computed in one builder and written in another?), and
**3 prepared works** (smallest: Gilbert Foliot, 11613, 53 chunks). Still open: the 11632
plate read on `[sic: *informen t*]`, the 3 Glabas sermons indexing 0 scripture citations,
10083 @0493D / 9604 @1347D.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-17b — 11535 RICHARD IS LIVE, AND A CORPUS-WIDE FALSE BADGE IS FIXED

**Richard of St Victor (attrib.), *De eruditione hominis interioris* (11535, PL 196,
1229D–1366A): 58 chunks, twelve agents, merged, blind-read, indexed, deployed and verified
by body.** ✅ **LIVE 2026-08-17**, `migne-f7hou96qg`, Ready. **PUSHED** — `master` =
`cb2d251`, tree clean, 0 unpushed. Corpus is now **105 englished works**; scripture index
5,543 citations / 105 works.

Totals: **118 `[var:]` · 36 `[sic:]` · 5 `[cj:]` · 338 `[n:]` at exact parity**, 117 heads,
index **340 scripture / 117 heads / ZERO unparsed**, `?`/`!` deltas **zero** corpus-wide,
zero undeclared brackets, 6 em-dashes total (0.1/chunk against a corpus median of 5.3).
Badge reads **New English translation** (`workStatus: unclear`, untouched). ⚠ **That
verification is DATED and expires — never restate live state from a note.**

### ⛔⛔ THE FIND OF THE SESSION — READ THIS EVEN IF YOU READ NOTHING ELSE

**`build-work-page.mjs` hardcoded "First English translation" into the meta line of EVERY PL
work page, unconditionally.** `build-landing.mjs` and `build-work-page-pg.mjs` have always
computed the claim from `workStatus`, so **the landing page told the truth while the work
page one click below asserted priority.** Ten works were publicly claiming scholarly
priority with no evidence: **9741 (Abbo's *Canones* — the founding case of the 2026-07-29
repair), 11545, 11546, 11548 (the three downgraded on 2026-07-28 for exactly this reason),
11061, 11065, 11535, 11536, 11551, 11556.**

⭐ **THE FALSE CLAIM SURVIVED BOTH FIXES MADE TO REMOVE IT**, because the claim was written
in two places and only one was known. Fixed at source (helper mirrors `isFirstEnglish`, with
a comment saying why it exists), all 97 PL work pages rebuilt, audited after: **0 pages claim
First against their triage**. Found by a **post-deploy body check** — its landing entry read
New and its own page read First. **Status codes would never have caught it.**
⬜ **Owed: the same audit for any OTHER claim that is computed in one builder and written in
another.** Nobody has checked whether this is the only duplicated assertion.

### ⭐⭐ The blind polarity read found TWELVE our-side defects; `verify-english` passed every one

Six readers, 58 chunks, no cruces opened. **Every finding was checked against the cruces only
AFTER it was formed, and not one of the twelve was logged** — the columns are in the cruces
for other reasons. **A flagged passage is not a checked passage**, second work running.
Archetypes: **1339B/C silently restored the Vulgate's *tuum* onto Migne's bare *Regnum*,
twice**, while our own gloss three lines later printed "The kingdom" · **1333A** flattened
*istud* to "That", dissolving the plate's contradiction in one pronoun · **1288C** supplied a
transitive *vertit* the plate does not print · **1265D** bound *contra Apostoli sententiam* to
the negated verb and inverted Gal. 6:3.

⚠ **Two of the three worst sites were SEEN and DECLINED by the translating agent** — 1356A
(*ut sus* = *ursus* split; the agent called it "the site where the faithful English most
misleads" and left it) and 1357A (*redere*, declined after a corpus control that missed the
plate printing *rodunt* intact 30 lines down the same chunk). **The cruces cannot audit
itself.**

⭐⭐ **The 7a″ protocol worked so well that the failure MIGRATED.** Every launch message named
its lemma words; every lemma chain came through clean (Daniel 4's re-quotations, 1 Cor. 13's
nine negations, Ps. 113's seven, Dan. 2:20 printed three times at three lengths). **All the
damage is in the author's own rhetorical pairs** — morning/evening, *illud*/*istud*, *aula
Babylonis*, distributed genitives — where no prompt pointed. ⬜ **Next lemma-and-gloss work:
name the AUTHOR'S antithesis-words in the prompt too, not only the scripture.**

⚠ **Blind-read prompts must also bar GREPPING the work's English directory.** One reader was
contaminated by a grep hit into `cruces.md`, disclosed it, and voided its own strongest
finding. Barring `open` is not enough; the answer key arrives through search results.

### Method results worth carrying

- **Two plate reads, opposite outcomes** (archive.org Google scan of PL 196,
  `patrologiaecurs104unkngoog`, PDF p. 637 = cols 1233/1234, 450 dpi). `sommia` @1234A
  **confirmed** as Migne's own type. The *angüstiae* diaeresis @1233A is **OURS** — the plate
  prints plain *angustiæ*, and **the mechanism is visible in the image**: two specks of offset
  ink float in the band ABOVE the line, too high and too widely spaced to be a diaeresis,
  which a transcriber attached to the nearest vowel. `data/tei-patches/11535.json` written and
  applied through `chunk-work.mjs`. ⚑ **Where our text carries a diacritic that is a
  corpus-wide hapax, suspect OUR files first — the read cost one PDF and two crops.**
- **A fixed-vocabulary pair earns its rigidity only where the two words actually MEET.** Two
  of my own ratifications were narrowed at the merge: *intellectus*/*intelligentia* never
  collide once in 58 chunks (and the ruling cost 0038 two unreadable phrases);
  *scientia*/*cognitio* collide in exactly one chapter head. **Check for collisions before
  ruling, not after.**
- **Agreement between agents is not evidence.** Three agents reported that Migne's `[n:]`
  notes name the wrong book "repeatedly"; checked one at a time, **two of six collapsed** —
  `(Isai. XL)` because **Richard's own prose says *quod Isaias dixit***, and `(Ephes. I)`
  because Eph. 1:11 reads *qui operatur omnia*. Four genuine ones corrected in
  `citation-corrections.json`, each verified to have no following *Ibid.* depending on it.
- **Pattern 18 bar WIDENED slightly** (Wilson, 2026-08-17): **a stranded correlative whose
  answering member is printed and whose own member is not** is inside the bar
  (`translation-style.md` updated). Mood, voice, number, person and prepositions stay declined.
- **Retained-Latin italics ratified by Wilson** — 7 etymological mentions in 0052–0054 keep
  italics where the plate prints roman; the only 1:1 italic break in the work.

**Burn: ~3.4M** against ~2.7M quoted (fleet ~2.5M, polarity read ~0.85M); the overrun is the
merge and the two plate reads, neither of which was in the estimate. **~40K/chunk holds.**

▶▶ **Front when resumed:** the **Pattern 18 corpus census** (this work alone added ~35 named
candidates; four strongest: 1295A *minus*/*imis*, 1246C *amittere*/*admittere*, 1261A
*praefectis*/*perfectis*, 1360C *ab*/*ad subdiaconatum*), the **29-chunk `?`/`!` repair** in
shipped works, the **`/method` page**'s missing "why translate this way" argument + sibling
links (`NOTES-method-page.md`), and **3 prepared works** in the queue (smallest: Gilbert
Foliot, 11613, 53 chunks). Still open: the 11632 plate read on `[sic: *informen t*]`, the 3
Glabas sermons indexing 0 scripture citations, 10083 @0493D / 9604 @1347D.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-17 — 11550 RICHARD IS DONE, DEPLOYED AND VERIFIED. ⛔ NOT PUSHED.

**Richard of St Victor (attrib.), *Explicatio in Cantica canticorum* (11550, PL 196,
0405A–0524A): all 48 chunks englished, verified, merged, blind-read, indexed and staged.**
**✅ DEPLOYED 2026-08-17** — `migne-f67tmbk1l`, Production, **Ready first try** with
`--scope wilson-pruitts-projects`, and **verified live BY BODY**: work page 200 with the
First badge, 43 sections in both languages (86 heads), `class="sic"` 40 / `varnote` 46 /
`cjnote` 20 / `dittog` 1 all matching source counts, **zero raw brackets**, the *a se* fix
("by herself") live, *ferculum* and *whitening* live, **`CAPUT XXXII` / `CHAPTER XXXII`
serving with NO period in both languages** (Pattern 8 surviving to production), the cruces
URL 200 (smoke-tested per the Glabas lesson), the landing listing Richard, and `/scripture/`
reading **104 works**. ⚠ **That verification is DATED and expires — never restate live state
from a note.** `master` = `f42a8d5`, tree clean, **11 commits unpushed** (push is protected
and was not asked for). Badge will read **First English translation** (`workStatus: none` untouched;
`englishState: ours`). Corpus is now **104 englished works**.

Totals: **46 `[var:]` · 40 `[sic:]` · 20 `[cj:]` · 1 `[d:]` · 183 `[n:]` at exact parity**,
ratio 1.49 (75,097 / 50,355), 43 sections, index **184 scripture / 43 heads / ZERO
unparsed**, apparatus rendering at exactly its source counts, `scan-raw-markers` clean on
all 104 pages, cruces page **already built** (not left for deploy — the Glabas 404).
`polarity-record` gate: **104/104**.

- ⭐⭐ **THE BLIND POLARITY READ FOUND EIGHT OUR-SIDE DEFECTS AND `verify-english` HAD
  PASSED EVERY ONE.** Six readers, 8 chunks each, no cruces file opened. The archetype:
  **0502D's *a se* rendered "by him"**, which transferred the cleansing from the bride to
  Christ and **conformed the gloss to expected doctrine** — it read better than the truth.
  Also *a perficiendo* as location not separation (0428C), *expugnant* given a singular
  subject so faith became the aggressor (0439B), **two `[sic:]` quarantines that had
  swallowed the clause's only verb (0491B) and the earthly half of an antithesis (0490D)**,
  a feminine relative mis-bound to Christ (0493A), a silent person-switch mid-run (0502B–C),
  four co-subjects collapsed to one (0457C). Full account in `src/english/11550/cruces.md`
  §7.
- ⚑⚑ **TWO NEW GENERAL LESSONS, both worth carrying to every future work:**
  **(1) Checking that the LATIN heads are uniform does NOT check ours** — English heads had
  drifted three ways (`CHAPTER NINE`/`TEN`/`ELEVEN` against numerals) while the Latin was
  uniform, and one split chapter's summary read "caution" in one chunk and "wariness" in
  the other. **Heads are an indexed field**, so a split chapter indexes under two titles.
  **(2) `scan-raw-markers.mjs` knows only 10 DECLARED marker forms**, so an *undeclared*
  bracket (`[think]`, `[men]`, `[is occupied]` — 8 of them here) passes it and reaches the
  reader as literal brackets. Grammatical ellipsis supplies must be plain text; a genuinely
  editorial supply needs `[ed:]`.
- ⭐ **The 7a″ protocol was applied properly for the first time and it worked:** the actual
  Song lemma was extracted from every chunk and **named in each agent's launch message**.
  Result: **no conformed lemma anywhere in the work**, in the genre where 7a″ predicts
  conformation as the dominant failure — with four resisted pulls recorded as positive
  evidence (Matt. 23:24's reversed camel/gnat order, 1 John 3:2's printed singular,
  3 Kings 19:12's *aurae levis*, Ps. 33:9's *Gustat*). ⚠ **My first extraction was
  under-inclusive** (it required an `[n: (Cant.)]` note, so a lemma printed without one
  vanished — it mislabelled 0024 as lemma-less and an agent caught it). Extract from the
  italic spans, not the notes.
- ⭐ **The corpus is its own control, and it is now the fleet's reflex.** `Fons nortorum` for
  Cant. 4:15's *Fons hortorum* (0035) settled by `Fons hortorum` in 61 files against
  `nortorum` in one — this one. Same method confirmed *Pigmen* (861 `pigment-` vs one bare
  `pigmen`), *emavi*, *ordor*, *signarus*, *terestrem*, *emoliescunt*, *comprenhendere*.
  ⚠ One marker is honestly weaker and **says so in the entry**: *desirabilis*, 6 occurrences
  across 6 files.
- ⚑ **The merge overturned one of my own mid-flight ratifications**, and that is what a merge
  is for: ***candidatio* is TRANSLATED ("whitening")**, not kept in Latin — all five sites
  stand beside *candidus*/*candet*/*candidat* and English white/whiten/whitening shares the
  root, so §Song case 2's condition for keeping Latin is not met. Two of those sites had also
  **added italics the plate lacks**. Also ruled at the merge: **`[var:]` fires on a
  continuous quotation functioning as proof-text or as the thing glossed, italics or `[n:]`
  or not** — Pattern 14 has no formatting precondition, and its founding case (10083) was
  scripture introduced as proof. Ps. 26:4 @0489A promoted on that ground.
- ⚑ **CAPUT XLII IS RHYMED VERSE printed as prose** (*operta · portendit · referta*;
  *Holoferni · spernis · sternis*) — **not lineated by us**, the plate's layout governs, and
  the rhyme explains both the chapter's ellipses and its *tecum sit Deus* for *Dominus
  tecum*. ⬜ **Wilson's, if he wants it: whether verse in this corpus is ever lineated**
  (a rebuild, not a re-translation), and ***Papae* at 0522B**, left in italic Latin because
  every English guesses at the poem's tone.
- ⚠ **The work has 42 chapters, not the 41 the scouting note claimed** — `CAPUT XLII` is a
  second head inside chunk 0047, the only multi-head chunk. `CAPUT XXXII` (0037) prints with
  **no closing period**; preserved in both languages per Pattern 8.
- ⚠ **Two Pattern 8 defects of OURS were caught by the question-mark parity check** — a
  supplied `?` and `!` in the rhymed chapter where Migne prints commas. The work now has
  **zero** sentence-type punctuation deltas. That check earned its keep for the second time
  (it caught a vanished 46-word sentence in 11632).

### ⬜ NEW CORPUS-WIDE FINDING, MEASURED, NOT SWEPT — Wilson's to schedule

**136 of 1,013 chunks corpus-wide disagree with their Latin twin on `?`/`!`** — 112
supplying a mark, and **29 in the "never delete" direction Pattern 8 calls the live
defect**, concentrated in **11066 (11 chunks)**, then 11081/11065/11064/11058. Some are
outright swaps (11058 turns a printed `!` into a `?` — the 11537 case the rule was written
for). ~29 chunks of genuine repair in already-shipped works. **Semicolons were measured too
and are NOT a defect claim**: English carries 14,241 against Migne's 10,965, but he prints
plenty himself, so unlike em-dashes this is a rate question, not an absence. Do not sweep it.

### ⚠ THE BURN RULE WAS WRONG AND IS NOW FIXED

11550's 48 chunks over ten Opus agents cost **~1.88M against a ~960K estimate** at the old
~20K/chunk rule — ~39K/chunk actual. `translation-runbook.md`'s hard-stop ritual now says
**~40K/chunk for a lemma-and-gloss commentary**, and to state the polarity read as a second
burn in the same breath. The extra cost is the 7a″ and corpus-as-control disciplines, and
they are what produced the 46 `[var:]` and the eight caught defects — **but quote the true
number.**

▶▶ **Front when resumed:** the deploy of 11550 (Wilson's OK; `cd site && npx vercel --prod
--archive=tgz --scope wilson-pruitts-projects` — the scope flag is required, see CLAUDE.md
6a, and run the full step-8 checklist including `RECENT` in `build-landing.mjs`), then the
**Pattern 18 corpus census** (targets in `WITHDRAWN-NET.md`), the **29-chunk `?`/`!` repair**
above, and **4 prepared works** in the queue. Still open from before: the `/method` page's
"why translate this way" argument + sibling links (`NOTES-method-page.md`), the 11632 plate
read on `[sic: *informen t*]`, the 3 Glabas sermons indexing 0 scripture citations, and
10083 @0493D / 9604 @1347D awaiting a decision.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-15c — 9637 SHIPPED, DEPLOYED, AND THE LITURGICAL REGISTER IS WRITTEN. ✅ DEPLOYED.

**Auctor incertus, *Ordo ad regem benedicendum* (9637, PL 138, 1111C–1118C)** — the
corpus's first liturgical work, done as the **Fable mini-pilot the queue skipped five
times**. 2 chunks, 2,391 Latin words, badge **First English translation** (`workStatus:
none`, verified in triage, high confidence — never overwritten). Verify green first try;
polarity read recorded (`--sites 1 --ours 0`); gate green corpus-wide.

- ⭐⭐ **THE PILOT'S REAL PRODUCT: register rules L1–L8** in `translation-style.md` —
  the score every future ordo/rite/benediction plays. L1 italic boundary = rubric vs.
  performed text (structure, not styling) · L2 technical vocabulary (*imponere* =
  intone; *oratio* = Oration never "collect") · L3 **chant incipits are cues — render
  the printed words, stop where they stop; Pattern 14 never fires on chant** (an
  antiphon is its own received text) · L4 **truncated formula cues stop where the plate
  stops** ("Per." → "Through."; mid-word cues like "*Te rog.*" are carried) · L5
  **contraction ≠ truncation** (nomina sacra expand; the test is whether the sentence's
  grammar contains the whole word) · L6 sigla (R., N., ill.) stay as printed · L7
  performative present ("I anoint thee king") · L8 the editor's parenthetical queries
  ride as printed.
- ⭐ **7a⁗-b's textbook case found in the wild: 1113D prints `in offenso` for
  *inoffenso*** — split type whose quarantine would swallow the negating prefix, so the
  prayer would ask that the king walk the path of justice *with stumbling step*. Shipped
  as `with unimpeded [sic: *in offenso*] step`.
- ⭐ **The fresh `[cj:]` ruling fired same-day in a new work: 1114C's *sicut* for *sic***
  (weakened correlative — 11064 @1142D's twin). Also **two more decline-class
  attestations**: *exsecutio* and *pata* both carry Migne's own gloss (edition-already-
  glosses class), and **1118A's `dei` for *det*** — a rubric that loses its verb — is
  the **second site at the ruling's boundary** beside 11064 @1154C (a lost VERB via
  real word; declined because it is not a negation; one line reverses it).
- Cruces: 12 entries + standing-decisions head (name-slot sigla, cue table, chant
  table, medieval spellings). Scripture: the *juxta apostolum* splice (Rom 13:1 +
  1 Pet 2:13 under one "apostle") rendered as printed, no marker; *virga aequitatis* is
  Heb 1:8 / Roman Psalter wording, not a Gallican variant — no `[var:]` anywhere.

✅✅ **DEPLOYED 2026-08-15** (`migne-9ljkhci2y…`, READY, `--scope
wilson-pruitts-projects`) — **verified live BY BODY**: the work page serves the badge,
all 6 `[sic:]` + the `[cj:]` as classed spans, "I anoint thee king", the *dei* rubric;
the cruces URL serves (smoke-tested per the Glabas lesson); the landing lists it;
`/scripture/` reads **103 works**; and **the Pattern 18 backlog RODE THIS DEPLOY as
Wilson ruled** — 11064's page serves 4 `cjnote` spans and 7561's 2. ⚠ That verification
is DATED and expires. ✅ Pushed: `origin/master` = this session's head.

### ▶▶ NEXT SESSION IS RICHARD — Wilson called it 2026-08-15; SCOUTED 2026-08-16

**11550, Richardus S. Victoris, *Explicatio in Cantica canticorum* (PL 196,
0405A–0524A): 48 chunks, 50,151 Latin words, 183 notes, 474 column marks, badge
First.** An Opus volume run — conventions frozen, no new genre; the Song standing rule
applies (**each commentary stands on its own**, `translation-style.md` §Song).
**The hard-stop ritual still runs at launch: ~960K estimated burn at the 20K/chunk
rule; state it and ask "which model, and go?" — Wilson's call named the work, not the
launch.** Fleet: ≤6 parallel Opus agents, ~5 chunks each (48 chunks ≈ 10 agents, two
rounds); per-agent `cruces-<firstChunk>.md`, **merge REQUIRED** with the load-bearing
vocabulary diff (11551's epistyle/stylus drift is the warning) — for this work that
vocabulary is *sponsa/sponsus* (bride/bridegroom), *dilectus* (the beloved),
*lectulus* (**"little bed" — the exposition itself turns on *lectus* vs. *lectulus*,
chunk 0002: "non in lecto, sed in lectulo," so the diminutive is load-bearing**),
*meditatio/contemplatio/compunctio*, *mens/anima*. Then the blind polarity read (4a),
index, ship. Pattern 18 is live corpus-wide — agents' rules file already carries it.

**Scouted 2026-08-16, banked from the chunks' own text:**

- **Structure:** PROLOGUS (chunks 0–1) + CAPUT I–XLI, each head `CAPUT N. *italic
  summary*` (translate heads, 11064 precedent). Lemma in ITALICS + `[n: (Cant. N)]`,
  then exposition re-quoting lemma fragments in italics. **ZERO guillemets in the
  whole work; zero bracketed variants** — the quotation texture is italic-woven.
- ⚠⚠ **This is 7a″'s home genre — "the lemma quietly conformed" is the dominant
  failure in scripture commentary; every agent prompt carries that section.** Lemma
  renderings come from THIS work's printed Latin, never harmonized with the five
  shipped Song commentaries or with the Vulgate.
- ⭐ **A split-type candidate already found: chunk 0020 prints `hos a tendit`** —
  *attendit* split (Pattern 10 + 7a⁗-b), self-corroborated by `bene agentes attendit`
  printed correctly moments later in the same chunk. Hand it to that range's agent.
- ⚠ **Attribution is DISPUTED and the byline question is real** (the 11545 lesson: a
  wrong byline is its own defect). Triage: some manuscripts say Pseudo-Richard; one
  scholarly line gives it to **Tajón of Zaragoza**. Badge unaffected (`workStatus:
  none` — though **confidence: medium**, batch 50; the First claim stands on the
  recorded evidence, do not go hunting). **The citation texture corroborates the
  dispute: 40 of 183 notes are JOB** — a strange spine for a Song commentary, exactly
  what a Tajón/Gregory (*Moralia*) compilation predicts. ⬜ State the dispute in
  `data/work-about.json` ("On this text") before deploy — as a dispute, adjudicating
  nothing.
- Author bio exists (`Richardus S. Victoris`); Latin pre-chunked and validated. Note
  shapes: Cant 47 · Job 40 · Psal 16 · Prov 8 · Joan 7 · Matth 6 · I/II (Cor etc.) —
  standard alias fare; watch `unparsed` at index time. **Commit each agent's range as
  it verifies, BEFORE the polarity read starts** (the 6963 crash lesson).

**Corpus now: 103 englished works. Queue after Richard: 4 prepared.** Then the
Pattern 18 census (targets named in `WITHDRAWN-NET.md`) and item 5, the plate reads
(~12 GB free disk, 2026-08-15).

## ▶▶▶▶▶ SESSION CLOSE 2026-08-15b — THE WITHDRAWN NET IS CLOSED. ⛔ NOT DEPLOYED.

`a6b672e` · `6a39e70` · `b72ed8e`, on `master`, tree clean, **not pushed and not
deployed.** Item 3 of the six-issue plan is finished: **all 44 remaining invisible
mentions read, both questions in view.** Read `WITHDRAWN-NET.md` — it is the report.

- ⭐⭐ **7a⁗ IS CLOSED NEGATIVELY, on the whole population.** 44 sites, **zero** swallowed
  verbs, negations or conjunctions. With the first five works that is every mention the
  net found. **7a⁗ is a marker phenomenon**: where nothing quarantines, a Pattern 7
  rendering keeps its force by construction. Written into `translation-style.md` 7a⁗.
- **Pattern 18: six more sites applied, in four works** — 11064 @1078B (*meditantibus*
  for *mediantibus*, against its own parallel *ita mediante ipsa*), @1142D (*sine* for
  *sive*, fluent English negating the gloss it belongs to), @1125A (*succedens* for
  *succendens*, contradicted by *significat ignitum* in the same sentence), 11083 @0846D
  (*secundum* for *secum*), 7561 @0663 (*conscripsi* for *conscripsit* — it makes Vincent
  the author of Origen's letters). All verified, rebuilt, re-indexed; `verify-english`
  green on all three works and `scan-raw-markers` clean on 102 pages.
- ⭐ **A convention boundary ruled without needing Wilson: 7561 @0664 is PATTERN 14, not
  18.** *modio* for *medio* inside Deut. 13:1 is the Pattern 18 shape exactly — a printed
  real word whose faithful English misleads — but it sits in a **quoted scripture**, which
  is 10083 @0493D's case. **`[var:]` inside scripture, `[cj:]` in the author's own prose.**
  Both new decline classes are now written into Pattern 18's test, which had neither.
- ⭐ **The other new decline class: "the edition already glosses it."** 8715's three
  fluent-and-false sites (*hostia* → "his **victims**") all carry Migne's own bracket in
  the English. **A conjecture the reader already meets does not need ours beside it.**
- ⚠ **Eight of the net's 61 mentions are FALSE POSITIVES** — 11632 ×4 and
  isidore-glabas ×1 match *"the one to withdraw"*, a **marker** a merge might withdraw.
  Real population ~53.
- ⚠ **Method, paid for at the first site:** the cruces files quote the English *as it
  stood when the crux was written*, and the 2026-08-14 force sweep edited the shipped text
  without rewriting them. 11064's `atttendas` crux still shows the pre-sweep rendering;
  the page has read `do not attend [sic: *atttendas*]` for a day. **Never adjudicate from a
  crux's quoted English — open `src/english`.**
- ⚑ The standing re-index job is now in `translation-runbook.md` step 6, not just in a
  resume note.

### ✅ THE RULING CAME THE SAME SESSION: **GLOSS THEM.**

**Incoherence is not a defence where the word that went wrong is a negation or a
correlative** — written into `translation-style.md` 18 (`8c5b91e`). The old test asked
whether the English *asserts* something false, and a sentence too broken to assert
anything passed it; that let the corpus's most dangerous defect class through on a
technicality. Glossed: 11064 @1090B (`among not [cj: *non*; read *nos*, "us"]`), 7561
@0648 (`only [cj: *solum*; read *non solum*, "not only"]`), 11064 @1142D (*si* for *sic*).
⚑ **7561 @0648 proves a DROPPED word is glossable** — the gloss opens on the word Migne
*did* print, so the verbatim-in-the-Latin-twin guard needed no loosening. **Pattern 18 now
stands at 10 sites in 5 works.**

⚠ **Scoped to that class, not read wider.** Mood/voice/number/person anomalies that merely
fail to construe stay declined; **11064 @1154C (*suscepit* for *suscepi*) is the one on the
line** — it misattributes the exposition in the work's closing sentence, and is declined
only because a person slip is not a negation. One line reverses it.

### (superseded) The question as it was put — one ruling, three sites

**Does a real word that makes the English INCOHERENT earn a `[cj:]`, or only one that
makes it FALSE?** Pattern 18 as written says false, and all three below were declined on
that letter — but each is awkward *because a negation went wrong*, which is the defect
class the whole 7a⁗ apparatus exists for, and here it has no marker to live in:
11064 @1090B (*apud non* for *apud nos* — "named angels more fittingly **among not**"),
7561 @0648 (Migne drops the *non* of *non solum … sed etiam*), 11064 @1142D's *si* for
*sic*. Full framing at the end of `WITHDRAWN-NET.md`.

### ▶ The front after that

**The Pattern 18 corpus census** — and the read of the 44 named its highest-yield
targets in advance: **10103, 11031, 11066, 11208, 11436, 11542, 11648, 7508** each carry a
preamble recording that conjectures were applied under the withdrawn 10103 precedent and
then restored to the printed readings wholesale (**33 passages in 11066 alone**). Every
one of those restorations is by construction a real printed word whose faithful English
someone once thought needed fixing. Then item 5, the plate reads (needs a download; free
disk was ~12 GB on 2026-08-15).

⛔ **Still not deployed:** Pattern 18 itself, 11081's page, `site/styles.css`, and now
11064 / 11083 / 7561's pages and the three rebuilt cruces pages. Wilson's standing ruling
holds — **Pattern 18 rides the next deploy**, it does not ship on its own.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-15 — ITEMS 1–3 ARE DONE. ⛔ STILL NOT DEPLOYED.

`0224c45` · `de509c7` · `c6b3f30`, on `master`, tree clean, **not pushed and not
deployed**. The six-issue plan of 2026-08-14 (below) now stands at:

- **1. `et seq.` — DONE.** Parsed as an open-ended range: head verse keyed,
  `openEnded: true` on the ref, `refDisplay` keeps the formula verbatim. Both
  indexers now spread `...r` instead of picking `refKey` off it, so a field the
  parser adds can no longer be dropped at the caller. 6963: 3 unparsed → 0.
  ⚠ The plan said "3 citations, all in 6963" — true **of shipped works**;
  `src/latin/11613` carries two more (`Matth. V, 3 et seq.`, `Prov. I, 1 seq.` —
  the bare form without *et*). 11613 has no English and is not indexed, so it cost
  nothing today and will be right when it ships.
- ⭐ **The regression re-index found EIGHT STALE WORKS, none of them caused by this
  change.** Nothing re-indexes a shipped work when the shared alias table or the
  English moves under it: 11057/11063 were still filing *Nahum* as a fons and 11321
  *Esther* (aliases added for 11632, never backfilled), and 11064/11436/8930/9033
  carried head snippets from before the `[sic:]` sweep restored their force.
  **Standing job worth adding to the runbook: re-index after any alias change or any
  English edit.** PG rebuilt byte-identical.
- **2. Pattern 10 ↔ force — DONE**, as `7a⁗-b` in `translation-style.md`, with a
  cross-pointer from Pattern 10 itself. Also measured: **436 markers in shipped
  English, 52 (12%) in the SPLIT direction a grep can find**; the FUSED direction
  (*interra*, *vovistvirum*) is a well-formed-looking token that no mechanical test
  sees. 7a⁗'s "OPEN, SCOPED JOB" paragraph was stale and now records the sweep's
  actual result.
- **3. The "withdrawn" net — MECHANICAL STEP DONE, FIVE WORKS READ, 44 LEFT.**
  `scripts/withdrawn-net.mjs` + `data/withdrawn-net.txt` + **`WITHDRAWN-NET.md`,
  which is the file to read.** Headlines: **61 mentions across 26 works, not 51/22**;
  **50 invisible, 11 covered**; and **11064 is NOT mostly adjudicated** (8 of 23 at a
  marker column, 15 invisible) — the plan's reasoning that the sweep read it
  marker-by-marker is true and beside the point, since a mention and a marker are not
  at the same column.
  ⭐⭐ **The five zero-marker works returned ZERO 7a⁗ defects.** Nothing swallowed; no
  clause lost a verb, a negation or a conjunction; 11059's "withdrawn" was a withdrawn
  NOTE, not a rendering. **That is a real negative result about the class — 7a⁗ is a
  marker phenomenon, and the net's premise that it also lives outside markers does not
  hold on this sample.**
  ⚑⚑ **What the net caught instead is ISSUE 4's question, four more times** — 10703
  @1126B (*Oro* for *Pro*), 8195 @1250B (Migne's own double negative rendered
  literally, so the page states the opposite of the precept), @1251A ("sit in judgment
  without mercy", which the next section condemns), @1248C (*praediceris* against the
  parallel *laudaris*). Every one is a REAL printed word rendered correctly under
  Pattern 7 — which is precisely why none carries a marker. **So issue 4 is not a
  singleton, and it now gates the useful part of the net: read the remaining 44 ONCE,
  after the ruling, with both questions in view.** Left unread deliberately.
- **4. ✅ RULED 2026-08-15: THE ADDITIVE GLOSS IS ALLOWED.** Shipped as
  **Pattern 18 `[cj: …]`** in `translation-style.md` (`01ef10e`), wired end to end,
  not merely declared: transform in **both** work-page builders (kept identical —
  drift on one marker is what put 47 raw markers on live PG pages), `.cjnote` in the
  generated CSS, `cj` added to `scan-raw-markers.mjs` (10 forms, clean on 102 pages),
  and three `verify-english` guards, **all negative-tested against a real chunk and
  all three firing.** ⭐ **The load-bearing guard INVERTS the `[ed:]`/`[var:]` test:**
  the marker must open with Migne's printed word in italics and that word must appear
  **verbatim in the Latin twin** — so it is impossible to gloss a word the plate does
  not carry, i.e. impossible to smuggle in an emendation of our own invention.
  Applied to **one site only: 11081 @0030B**, the founding case; its crux no longer
  claims the conjecture is absent "by design".
  ⬜ **The census is NOT run**, and the four sites in hand are a biased sample — the
  net finds sites where a rendering was *withdrawn*, and a real word that misleads may
  equally have been left alone from the start. A proper census reads the cruces of all
  102 works for the class, and it should be one read with the 44 remaining withdrawn
  mentions.
- **5. Plate reads — untouched.** Needs a download; ⚠ re-check free disk first.
- **6. ✅ DEPLOYED 2026-08-15** — `dpl_aViWYarur93oQkvHQGfwujtaVrFh`, **READY first
  try** with `--scope wilson-pruitts-projects`. **Verified live BY BODY**, not by the
  status string: 6963's page serves with the **First English translation** badge and
  its `et seq.` citations verbatim; `/scripture/` reads **5,019 citations across 102
  works**; and 11064's `/pl/175/expositio-in-hierarchiam-coelestem-s-dionysii/` serves
  the sweep's most dangerous restored site (`because, lacking [sic: *carons*]`) plus
  the corrected "I will add". ⚠ **That verification is DATED and expires — never
  restate live state from a note.**

✅ **PUSHED 2026-08-15 (Wilson's OK) — `origin/master` = `0b783bf`, 0 ahead, tree
clean.** Nothing is local-only.

⛔ **NOT deployed: everything after the deploy** — Pattern 18, 11081's page and crux,
`site/styles.css`. ⭐ **Wilson ruled 2026-08-15: Pattern 18 RIDES THE NEXT DEPLOY.**
Do not ship it on its own — it is one glossed site and it costs nothing to wait, so
fold it in at whatever the next deploy boundary turns out to be (the census, the next
work, or the plate reads). The batch-deploys rule, applied.

⚑ Minor, noted not fixed: `harvestHeadnotes` in `index-work.mjs` strips column anchors
but no markers, so a `[sic:]`/`[cj:]` inside a headnote segment reaches `data/index`
raw (visible in 11064's index). It reaches no reader — the marker scan is clean on
every built page — so it is cosmetic in a data file, not a leak.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-14 — 6963 IS BUILT AND STAGED. ⛔ NOT DEPLOYED.

**Ambrose of Milan, *Commentarius in Cantica canticorum* (6963, PL 15, 1851A–1962B)**
— 40 chunks, 44,936 Latin words, 381 sections, 359 scripture citations, badge **First
English translation** (`workStatus: none`, verified in triage, never overwritten).
Page built at `site/pl/15/commentarius-in-cantica-canticorum/`; landing, cruces and
marker scan all rebuilt clean; polarity gate **green** — *every englished work has now
been read for this class.*

### ⛔ THE ONE THING OWED: THE DEPLOY

Everything else is done and committed (`990eee8`). Deploy is Wilson's per-action OK:
`cd site && npx vercel --prod --archive=tgz --scope wilson-pruitts-projects`.

### ⚑ THIS SESSION WAS A CRASH RECOVERY — what it cost and what it taught

The 2026-08-14 morning session died mid-flight through the blind polarity read. State
was reconstructed from its transcript (`~/.claude/projects/-Users-wilsonpruitt/61cebffd-*.jsonl`),
not from the repo, because **the 40 translated chunks were still untracked** — a second
crash would have lost the whole translation. **Commit a work as soon as it verifies,
before the read starts.**

Three reader reports were destroyed. Recovered from the transcript: 13 applied fixes,
the finding list, and two rulings that had never reached disk. Re-read from scratch:
0025–0039 (never read) plus 0000–0004 (to recover a lost finding — it did, plus four
more the first pass never reported). **The re-read of an already-read range is what
justified doing it; a returned report does not mean its range is closed.**

### ⭐ WHAT THIS WORK ESTABLISHED

1. **`[sic:]` markers were quarantining the SENSE, not just the type** — six sites in
   one work (*nex*, *car*, *eccidit*, *cupieos*, *attrabatur*, *damnanationem*), each
   leaving a clause with no verb, no negation, or no second term of an antithesis.
   7a′ had ruled this once on one site in July; it is now **7a⁗ in
   `translation-style.md`** with a three-question check. ⚠ **OPEN SCOPED JOB: 435
   `[sic:]` markers across 45 of the 102 shipped works have never been checked for
   it.** ~9–10 Opus readers. Finding them is a grep; ruling them is a read — a lexical
   prefilter here is the negation-counting mistake again. Gates nothing.
2. **Zero dropped negations in 40 chunks.** The damage was speaker and subject
   mis-binding, mis-bound cases, and markers. Budget future reads for that.
3. **The corpus is its own control, again** — *haurire* (7 sites), *poma* (0012's five
   instances), *custodes*, and *nex* settled by §8's own *et non exutus est pallio*.
   Every hard call was settled inside the work, with no appeal outside it.
4. **Em-dashes: 53, at 1.4/chunk against a corpus median of 5.3.** The prompt line
   works. Nothing was scanned, nothing was swept. Keep it that way.
5. **Two agents, each internally consistent, together split one Latin word into two
   English ones** — *custodes* → "guards"/"keepers", inside a single verse, in a
   passage whose whole argument is that the word is the same (*Fortasse sunt et alii
   custodes*). The merge pass is where this has to be caught.

### ⬜ OPEN — the plan to clear it (written 2026-08-14, after the `[sic:]` sweep)

**Ordered by dependency, not by size. Items 1–3 are one short session together;
4 needs a decision from Wilson first; 5 needs a download.**

#### 1. `et seq.` — 20 minutes, and SMALLER THAN PREVIOUSLY RECORDED
⚠ An earlier note in this file called this "unparsed corpus-wide." **That was wrong.**
Measured: **3 citations, all in 6963** (`Matth. XXVIII, 5 et seq.`, `Coloss. II, 20 et
seq.`, `Tob. X, 3 et seq.`). No other shipped work prints the formula. So this is not a
parser project touching 102 indexes — it is three citations in one work.
**Do:** teach the verse-range parser in `scripts/lib/citations.mjs` to stop at `et seq.`
and index the opening verse (the citation is a *range*, and the range's head is the
addressable part). Re-index 6963. If the parser change looks at all risky, the honest
alternative is to leave 3 unparsed — `unparsed` is a recorded state, not a silent drop.

#### 2. Name the Pattern 10 ↔ force interaction in `translation-style.md` — 15 minutes
Two independent readers observed the same thing and it is not yet written down:
**a word-division defect is disproportionately dangerous, because quarantining a split
run takes the WHOLE word out of the English rather than one letter of it.** Five of the
9033/11055 findings and several of the tail's are that shape (*hain domo*, *demo
liuntur*, *in luta*, *Et.haec*, *ac his*, *vovistvirum*, *in elligi*, *interra*).
Pattern 10 is right to quarantine the whole run; 7a⁗ is what keeps the sense outside it.
Add it as a note under 7a⁗ so the next translator meets it before the next sweep does.

#### 3. The "withdrawn" net — 1–2 Opus readers
The sweep's own best lead, and **the marker sweep is structurally blind to it**: where a
withdrawn rendering sat on a *real* word it took no marker, so nothing in `src/english`
flags it. Grep gives the worklist: **51 `withdrawn` mentions across 22 cruces files.**
- **22 of the 51 are in 11064 alone**, which the sweep read marker-by-marker — so most
  of that work's mentions are already adjudicated. Check, don't re-read.
- **The guaranteed-invisible set is small and precise: 5 works with `withdrawn` in their
  cruces and NO markers at all — 10047, 10703, 11059, 8195, 8505. 6 mentions, 13 chunks
  total.** One reader clears all five.
- The remaining ~23 mentions sit in swept works; the ones that matter are those whose
  column has no marker (8715 has 4 mentions against 2 markers; 11083 has 3 against 2).
  **Step one is mechanical:** for each mention, resolve its column and ask whether a
  marker exists there. That yields the exact read-list instead of a guess.

#### 4. ⚖️ 11081 @0030B — a CONVENTION CALL, Wilson's, not a task
`Ideo in nativitate Christi angeli pacem munde nuntiant`. *munde* is a real adverb, so
Pattern 7 renders it "the angels announce peace **purely**" and parks *mundo* ("to the
world") in the crux — which the crux itself admits is "a case where Pattern 7 produces a
genuinely misleading English sentence." **7a⁗ does not reach it** (nothing is in a
marker; the English is wrong, not hollow). But the reader's point stands: the crux's
closing formula there — *the conjecture is here and not in the text by design* — is the
identical formula that proved wrong in all 15 of its other findings.
**The question: may an additive gloss stand beside a printed real word that misleads?**
e.g. `peace purely [*munde*; read *mundo*, "to the world"]`. It removes nothing and
keeps Migne's word visible. If yes, it likely applies to a handful of sites corpus-wide
and wants its own scoped grep. **Do not act without the ruling.**

#### 5. Plate reads — one session, needs a download first
Three sites, all the same shape: our own files cannot settle them.
- **PL 15 @1853B** — TEI prints *cudere*; sense wants *cudi* (6963, §5.1).
- **PL 15 @1854B** — `[sic: *deret*]`, underlying word unrecoverable from the corpus.
- **PL 203 @0428A** — 11632's `[sic: *informen t*]`: if the plate prints *informent*,
  the split is **our own italic markup** and we are blaming Migne for our pipeline.
**Feasible:** PL 15 is in `data/volumes.json` with two archive.org items
(`patrologiaecurs136migngoog`, `patrologiaecurs14unkngoog`). ⚠ Disk is at **4.2 GB
free** — fetch one volume, read it, delete it; do not mirror. Keep a second copy only if
the first clips line-initial characters (the PG 139 lesson).

#### 6. Deploy — Wilson's per-action OK, and it should be ONE deploy
31 works changed in the sweep and are **not deployed**; migne.app currently serves the
pre-sweep English. Per the batch-deploys rule, fold items 1–3 in and ship once:
`cd site && npx vercel --prod --archive=tgz --scope wilson-pruitts-projects`
(⚠ the `--scope` flag is correct; a scope error means the CLI is logged out, not
mis-scoped — that cost time on 2026-08-14.)

## ⬛ 2026-08-14 — Phase 3b free check #1 is DONE. Gap confirmed. Don't re-run it.

Calfa's Zenodo releases have **not** outrun `data/gap-map.json`. Current corpus
release is **`19915273` (2026-04-30, 33 volumes)** and its tome list matches our
gap map exactly — **134 of 167 still uncovered**. The July 2025 record
(`15780625`, 14 volumes) is *older* than our data, not newer; ignore it.
Coverage grew 14 → 33 in ten months ≈ **6 years to finish at that pace**.
Full write-up: **PLAN.md → Phase 3b → "Addendum — Zenodo coverage check."**

⚠ **One thing changed in the plan:** train on **`data-v2.zip` (304 pairs, record
`20008699`)**, *not* `benchmark/greek-gt/task2/` — task2 is the V1 100-page set,
V2 is Calfa's full production training set. Fetch it on the GPU host, not here
(406 MB). Held-out validation on hand-corrected **gap-volume** pages is now
mandatory, not advisory — V2 is confirmed training data, so any CER measured on
it leaks.

**Check #2 is also DONE — and it CLOSED step 1.** There is no free hosted PG
recognizer. Calfa's free tier is **"Annotation only"**; what is freely usable on
their platform is the **layout** model, which we already have on disk as
`REG-YOLOv12s.pt`. Recognition appears only in the **€3,500 / 3,500-page**
Research Plan (~€40k at our scale — out). Both checks that could have killed
Phase 3b came back the other way: **train the recognizer.**

▶ **WHERE TO START in Phase 3b: step 2 — wire up `REG-YOLOv12s.pt`.** No account,
no GPU, no training; it replaces `crops.json` x-coordinate guesswork with trained
region boxes and improves the *existing* Sonnet workflow immediately. Then step 3
(fine-tune on V2, off-machine) → step 4 (validate on **PG 89** plates, already in
`raw/pg089/` — a real gap tome; prefer it over PG 88, which we've stared at).
(PG translation work stays paused per Wilson 2026-08-08 — this is tooling, not PG output.)

⬜ **Two things I did NOT do, both needing Wilson's OK:** register a free Calfa
Vision account to confirm the tier list from inside; and email Calfa to ask
whether the PG recognizer can be shared with an academic project.

## ▶▶▶▶▶ SESSION CLOSE 2026-08-09 — 11632 IS LIVE. THE BIGGEST WORK SO FAR.

**Philip of Harvengt's *Commentaria in Cantica canticorum* (11632, PL 203
181–490) is deployed and verified on migne.app** — 126 chunks, 126,797 Latin
words, 194 sections, 708 scripture citations. Badge reads **First English
translation** and it is earned (`workStatus: none`, never overwritten). Site now
serves **101 englished works · 4,653 scripture citations · 98 cruces pages ·
45 PL volumes + 4 PG**.

✅ **`master` is PUSHED and the tree is clean** — this session ran `0d509d2 →
e276e1d` (21 commits) plus this line. Nothing is local-only, nothing is owed a
deploy.

⚑ **Deploy gotcha, cost 10 minutes:** `npx vercel --prod --archive=tgz` returned
**`Not authorized`** even though the account owns the project and the
commit-author gate was satisfied. **The fix is `--scope wilson-pruitts-projects`.**
Check that before suspecting auth.

### ▶ WHERE TO START: the next PL work. ⏸ PG STAYS PAUSED (Wilson, 2026-08-08).

`/queue/` is live — **7 prepared works, 661,223 words**. Smallest unblocked
first; every one trips the big-burn hard stop, so state work, chunk count and
estimated burn and ask "which model, and go?" **9637 stays blocked** on a Fable
mini-pilot (coronation ordo, a genre `translation-style.md` has never been
calibrated on). Skipped five times now.

### ⬜ OWED on 11632 — not blocking

⛔ **2026-08-14, Wilson: THE READ-THROUGH IS NO LONGER A GATE ON ANY WORK.**
*"it limits scale. we are public enough that others are catching it."* Item 2 below
(his read-through) is struck, here and everywhere. Do not hold a work for it, do not
list it as owed, do not keep a backlog. `translation-runbook.md` step 7 updated.

1. ⛔ **A plate read on `[sic: *informen t*]`, 0100 @0428A.** The **Latin source
   file itself** reads `informen *t*` — italics markup, not Migne's type. If the
   plate prints *informent* (an ordinary word), **we are blaming Migne for our
   own pipeline**, which is the 7a″ error the corpus rules exist to prevent.
2. ~~**Wilson's read-through**, which gates every work.~~ — STRUCK 2026-08-14, above.

### ⭐ WHAT THIS RUN ESTABLISHED — carry it into the next commentary

**1. The corpus is its own best control.** Every hard call was settled by
grepping the other 125 chunks, with no appeal outside the work: *gratia* (21
sites), *noster omnium* (19), *fauces* (13), *dilectam* (3), *necturae* (2),
*castrorum*, *percussura*, *tenere*. **Make this the first move, not the last.**

**2. The blind read's real yield was NOT polarity.** 144 ours-side sites, but
only **one** dropped negation in the whole work, and one flattened *nondum* in
~110. The prose held where it was watched. It gave way in **mis-parsed grammar**
and in **Douay wording arriving over the plate** — *per noctes* → "by night",
*dilectam* → "my beloved", Cant. 6:3 losing *castrorum*, the verse whose
etymology the chapter runs on. Budget the next read for that class.

**3. ⛔ A 46-WORD SENTENCE WENT MISSING and every check passed it** (0091).
Anchors matched, notes matched, ratio 1.61 — dead centre. Caught only because the
Latin had four question marks and the English three. **`verify-english` now
checks question-mark parity**; it found a second real site immediately.

**4. A flagged passage is NOT a checked passage.** A translating agent flagged
0238B in its own cruces as a self-contradiction and named it for the blind read;
the fenced reader found the English there was simply **wrong**. Keep the fence.

**5. Count, don't list.** The em-dash class was invisible for 99 works because
every reader met them one at a time and reasonably called each house style. It
surfaced when one agent **counted**.

### ⚑ EM-DASHES — measured, deliberately NOT swept

Migne prints **zero** in the entire Latin corpus; our English carries **4,694**
across 99 works. A 166-site labelled sample lives at `data/emdash/labels.tsv`
(built with `scripts/emdash-sites.mjs`). **No rule was good enough to ship:**
blanket dash→comma **70.6%** (95% CI 63–77%); dash + *that is*/*namely* **90%**
(CI **70**–97%, 507 sites). ~12% correspond to **nothing** in the Latin because
the English reordered the sentence — the translator's tool, not a defect.
Wilson's ruling: **em-dashes are not wicked; sweep only what is safely
mechanical.** Nothing qualified. `verify-english` now prints a per-work density
note instead. ⚠ The labelling agent's own headline advice (delete closing dashes
of pairs) **contradicted its own labels** — those run COMMA 14 / NONE 8 / COLON 1.

### ⚑ RULED 2026-08-09 — Pattern 12's boundary

**The test is "does it render IN PLACE?", not "is it a Latin word?"** Four
`[sic:]` on real words STAY (*Pecte*, *ama*, *sternis* have no grammatical slot;
*signa* renders only by **hiding** the number defect, since English *may burn* is
number-neutral). Written into `translation-style.md` and `cruces.md` §12. It runs
opposite to Pattern 9 on purpose: **normalize the language; mark the page.**
Consequence applied: *persequenter* and *myrrhoe* now carry `[sic:]`.

# ⚠⚠ EVERYTHING BELOW THIS LINE IS THE 2026-08-08 SESSION AND EARLIER ⚠⚠

## ▶▶▶▶ 2026-08-08 SESSION CLOSE — TWO WORKS SHIPPED. PG PAUSED; PL QUEUE RUNNING.

`master` **pushed through `0da2041`**; four later commits are **local only**.
**migne.app deployed twice on 2026-08-08** — Dorotheus
(`dpl_4Zjbdes8q4u47sRAXaUkprjRHo3J`) and Philip of Harvengt
(`migne-9513ziaqt`). Site now serves **100 englished works · 3,945 scripture
citations · 97 cruces pages · 45 PL volumes + 4 PG**.

### ▶ WHERE TO START: the next PL work. ⏸ PG STAYS PAUSED (Wilson, 2026-08-08).

`/queue/` is the live list — **8 prepared works, 788,020 words** left. Smallest
unblocked first; every one trips the big-burn hard stop, so state the work, chunk
count and estimated burn and ask "which model, and go?" before launching.

| idno | PL | author | work | chunks | est. burn | badge |
|---|---|---|---|---|---|---|
| 9637 | 138 | *Auctor incertus* | Ordo ad regem benedicendum | 2 | ~40K | First |
| 6963 | 15 | (Ps.-)Ambrose | Commentarius in Cantica | 40 | ~800K | First |
| 11550 | 196 | Richard of St Victor | Explicatio in Cantica | 48 | ~960K | First |
| 11535 | 196 | Richard of St Victor | De eruditione hominis interioris | 58 | ~1.16M | **New** |
| 11613 | 202 | Gilbert Foliot | Expositio in Cantica | 53 | ~1.06M | First |
| 11512 | 195 | Wolbero | Commentaria in Canticum | 81 | ~1.6M | First |
| 11632 | 203 | Philip of Harvengt | Commentaria in Cantica | 126 | ~2.5M | First |
| 11703 | 206 | Thomas the Cistercian | Commentaria in Cantica | 259 | ~5.2M | First |

⭐ **11632 is now the best-prepared of these**: same author as the work just
shipped, so `cruces.md` §2 hands it a ruled vocabulary (*tomus* = Tome, *liber* =
book, *charismata* = charisms, the colour triple) and §4 hands it Philip's own
Bible (Zech 4:14 *splendoris*, Gen 3:19 *Terra es*). It is 126 chunks, though.
⚠ **9637 stays blocked** on a Fable mini-pilot: a coronation ordo is a liturgical
genre `translation-style.md` has never been calibrated on. Skipped four times now.

### THE METHOD RESULT FROM 11638 — carry it into every commentary

**Hand each agent a verbatim list of every quotation printed in ITS range**,
extracted mechanically from the Latin, and say the divergence list is the most
valuable thing it will produce. 602 extracted; **138 `[var:]` shipped**, plus
~120 quotations logged as collated-and-unmarked so a missing marker is evidence.
The blind read then found **no dropped negation in 23 of 35 chunks and one in the
rest** — the prose held.

⛔ **The defects were in OUR APPARATUS, and `verify-english` cannot see them.**
A `[sic:]` on a word that was ALSO translated passes (its content is a verbatim
Latin substring). A `[sic:]` missing its italics passes (the verifier strips
asterisks). A `[var:]` can assert a divergence that does not exist, quote a
Vulgate found in no edition, cite the wrong chapter, or sit 60 words from its
quotation — and nothing checks any of it. **Point one blind reader at the MARKERS,
not only the prose, on every future commentary.**

⚑ **And a sweep is only as wide as its pattern list**: the merge's Pattern 3 sweep
matched *divina* and *holy* and missed *sacra* entirely.

### ⬜ OWED on 11638 — none of it blocking

1. **Three plate reads of PL 203**: col. 494D (loss verified upstream in
   `sources/pl/tei/11638.xml`, so a `tei-patches` entry if the plate carries
   more), col. 523C–D (a lost clause), col. 542B (a deleted `ideoque;` that is
   either Migne's or the TEI's).
2. **`[var:]` reference format is split work-wide** — 71 roman, 59 arabic, 8 with
   none. Measured, deliberately not swept; prefer arabic, use a tested script.
3. Three unbracketed English glosses on italic Latin (0015, 0016).

### ⬜ OWED elsewhere
- **`antiochus-epistula-ad-eustathium` violates Pattern 17** — 21 singular
  addresses to Eustathius as "you", and it is LIVE. Convert or rule it stays.
- **Migne's `/method` page** owes a "why translate this way" argument and sibling
  links (`NOTES-method-page.md`). Outward-facing.

# ⚠⚠ EVERYTHING BELOW THIS LINE IS HISTORY ⚠⚠
#
# It is still true *as history*, but every live pointer is in the block above.
# In particular the older blocks quote commit counts, "UNPUSHED" states and
# "next steps" that have since been overtaken. **Do not act on a state claim
# from below without checking it against the block above or against git.**

---


## ▶▶▶ 2026-08-05/06 HANDOFF — steps 1 and 2 are DONE, see the block above

### State: nothing is in flight. Everything below is committed. 27 commits UNPUSHED on master.

**1. Dorotheus Batch 2 (leaves 845–864) is ASSEMBLED** →
`raw/pg088/batch2-assembled/`, 20 leaves, 9,281 body words, lint 19/20 (the one
flag is an empty section header, not text). Eight leaves come from **full-page**
renders — every leaf the crops damaged (845 846 847 849 853 856 857 861) — and
twelve from the crop pass with adjudicated verdicts applied. Apostrophes
normalised to U+2019 throughout.
**149 words were recovered** that both crop passes had lost, including an entire
printed line on leaf 849 (`ἀμεριμνίαν καὶ τὴν ἀνάπαυσιν ἔχει.»`) present in
NEITHER pass — both crops cut in the same place, so the A/B diff was structurally
blind to it.
⚠ **Owed:** the verdicts were adjudicated against the CROP text and were never
re-applied to the eight full-page leaves. The full-page read is the better
witness and should win, but the ~20 verdicts touching those leaves want a
cross-check before the work is chunked.

**2. ⛔ THE HARVEST MODEL CHANGED. Use `scripts/pg-page-segments.py`.**
Whole leaf, native 600 dpi, 8 overlapping segments, margins trimmed.
`pg-leaf-crops.py` is SUPERSEDED (banner in the file) — column cropping lost text
three times in one batch, each time invisibly, because what survived read as
fluent Greek. Wilson's reasoning, and the arithmetic agrees: Batch 2 cost ~107k
tokens/leaf across five passes against ~30k for one full-page pass.
**The deep reason it works:** a full-page transcriber recovered the lost lines
*while reporting that the leaf had none* — it just followed the text across the
page. A defect that must be RECOGNISED will eventually be missed; this one no
longer has to be.

**3. Antiochus (PG 89) audit — the only live work harvested by our crops.**
`benchmark/pg88-pilot/AUDIT-ANTIOCHUS.md`. Greek **body clean**, all four columns,
so **the English feeding church-in-palestine ch. 14 is safe**. But: three footnote
blocks truncated at the crop edge (6 words at 1421; two whole notes at 1424; a
word + two notes at 1425), and `[A]`–`[D]` marginal anchors missing from 1421 and
1424 though present on the plate (hard rule 1 — citation addresses).
⚠ **And a bug bigger than the crop:** `scripts/index-work-pg.mjs` **hardcodes
`scripture: []`**, written when every PG work came from Calfa (no note layer).
Antiochus is the first PG work from our own plate OCR and DOES carry Migne's
notes — so all four of its citations are missing from the site scripture index
(hard rule 9). **This will silently hit every future PG work from our own OCR,
Dorotheus included.**

**4. Latin twins audited — all seven contaminated.**
`benchmark/pg88-pilot/AUDIT-LATIN-TWINS.md`. Greek inside the Latin twins:
antiochus 0.5%, the other six 1.8–4.0%, in blocks of 12–24 tokens.
Dominant cause is NOT full-width lines (my prediction, wrong) but **x-split
leakage**: `split = (medianGreekX + medianLatinX)/2` with each word assigned by
its LEFT EDGE, so words ending a Greek line land on the Latin side.
**A fix was attempted and REVERTED** — there is no empty band between the columns
to detect (head, marginal letters and footnote rules occupy the gutter on every
leaf), so gutter-detection fell through to the old midpoint and the twins got
thinner (ratios 1.08 → 0.2–0.8). Next attempt must take the boundary from the
page IMAGE's ink profile or the column map, never from word-script medians — the
same misOCR that contaminates the twin biases the medians used to find it.
NOT established: whether Latin is MISSING (the more dangerous direction).
No published English is affected; the twin is apparatus.

**5. Method rules earned today, all in `PG-OCR-PROMPT.md`:** crops at native
600 dpi (at 400 this fount's word-final sigma reads as a semicolon and a
circumflex as an iota subscript — both yield well-formed Greek); κ vs χ by the
baseline; comma vs full stop by the tail; Migne's square brackets and ARABIC
superscripts are text; footnote blocks sit under EITHER column; elision
apostrophe is U+2019; **and never quote a recovered reading into a prompt as a
worked example — I did that and an agent reported the match back as confirmation,
which is 7a″ committed in my own instructions.**

---

### ▶ RECOMMENDED NEXT DECISION

**Fix `index-work-pg.mjs` first — before harvesting another leaf.**

It is a small fix with the widest blast radius. Every future PG work sourced from
our own plate OCR silently ships with an empty scripture layer, and **all 87
remaining Dorotheus leaves are exactly that kind of work**. Fixing it now means
Dorotheus indexes correctly from day one instead of needing a retroactive pass —
and rule 9 exists precisely to avoid retroactive index passes.

Bundle it with the Antiochus repairs (three footnote blocks + the two missing
marginal sets), since they touch the same work and end in the same deploy. Then:

1. `index-work-pg.mjs` harvests `[n:]`; lift the reference parser out of
   `index-work.mjs` into `scripts/lib/` so the two cannot drift. Re-index.
2. Antiochus footnotes + marginals re-read from `raw/pg089/audit-pages/`.
3. **Deploy — Wilson's per-action OK required** (`cd site && npx vercel --prod
   --archive=tgz`; run `polarity-record.mjs --gate` first).
4. Then Batch 2's verdict cross-check, then leaves 865+ (87 remain, cols to 1844)
   in one full-page pass.

Leave the Latin twins alone until the boundary can be done from the image; the
cheap safe option (strip Greek runs at build time, logged) is still available and
cannot make a twin thinner.

---

## ▶▶ 2026-08-05 (Opus): DOROTHEUS IS THE NEXT RUN — read this block first

**Wilson's instruction at the end of the 2026-08-05 session: run Dorotheus next.**
Everything below this block is older; the Palestine-block note that used to head
this file is still true in outline but its PG 88 arithmetic was WRONG and is
corrected here.

### What changed today, and why the old numbers in this file are not to be trusted

⛔ **`data/pg-column-maps/pg088.json` was unusable and has been rebuilt.** Its
`colLeft` never interpolated — it stalled, handing 1613 to every leaf from 836 to
850 and 1619 to all 99 leaves from 852 to 950. Nothing consumed it, so nothing
shipped wrong, but Dorotheus could not have been chunked from it.

⛔ **The recorded diagnosis was also wrong.** PG 88 is NOT non-linear. It advances
**+2 columns per leaf, everywhere.** What is irregular is the SCAN: `raw/pg088/
088.pdf` contains **three re-scanned blocks** — after leaf 864 it jumps back
1669→1659, after 892 1713→1695, after 940 1789→1779, all three plate-verified.
Leaf 865 reprints leaf 859's columns 1659|1660 with identical body text. Those 22
duplicated leaves are the whole of the missing 0.379 col/leaf. **139 leaves − 22
duplicates = 117 unique = 234 columns = 1611–1844**, the work's own range. So the
old alarm that the work runs to leaf ~975 and a linear harvest would lose the
*Epistolae* was an artifact. Detail: `pg-paired-pilot.md` **§8a.G**.

**The rebuilt map is trustworthy**: 117/117 columns covered, none uncovered, 22
leaves carry `skipInHarvest: true`. Checks it was NOT fed and passes anyway —
leaf 837 = 1615|1616, leaf 951 = 1799|1800 (the OLD map's own second anchor,
withheld from the fit), leaf 973 = 1843|1844. Rebuild it with
`scripts/pg-column-map-rebuild.py` (+ `scripts/pg-heads-extract.py`) if ever
needed; both are documented and carry the traps.

### ▶ BATCH 2 STATE (2026-08-05) — transcribed twice, adjudication running

Leaves **845–864** (20 leaves) done, `raw/pg088/batch2/out/` (pass A, narrow
crops) and `raw/pg088/batch2-wide/out/` (pass B, wide crops, run BLIND).
**8,773 words read identically by two independent passes.** Diff:
`benchmark/pg88-pilot/batch2-diff.json`, queue in `BATCH2-ADJUDICATION-QUEUE.md`
(30 only-in-A · 118 differs · 135 accent-only). Opus adjudication was running at
session end → `BATCH2-VERDICTS-845-854.md` / `-855-864.md`. **Batch 2 is NOT
adjudicated, NOT spliced, NOT promoted.**

⛔ **TWO CROP DEFECTS FOUND, BOTH NOW FIXED — do not re-harvest with the old settings.**

1. **Outdented lines.** Migne sets some lines wider than the column measure. The
   old 45 px gutter overshoot cut their openings off. `--overshoot` default is
   now **260** (190 still cut leaf 861's `καὶ`). Re-crop anything harvested
   before 2026-08-05.
2. **FULL-WIDTH lines.** When a paragraph's Greek outruns its Latin, Migne ends
   the Latin and sets the Greek tail **across the whole page**. A column crop
   keeps only its right half and the remainder still reads as fluent prose.
   **7 of the 20 leaves.** No geometric detector works (see `pg-fullwidth-lines.py`,
   which documents five failed tests and is marked not-authoritative). The
   workflow is `pg-fullwidth-scan.py` → a reading pass reporting BANDS →
   `pg-fullwidth-crop.py` → transcribe each line whole. **19 lines recovered**;
   text in `benchmark/pg88-pilot/out-845-849.md` and `out-853-861.md`, still to
   be spliced into the leaf files.

⚠ **The mirror case exists too** — leaves 854, 862 run the LATIN full width. Costs
no Greek, but `pg-latin-twin.mjs` splits djvu tokens by x-coordinate and will
tear such a line in half. Check before trusting a PG 88 twin.

⚠ **Applies to EVERY Migne parallel-column volume.** PG works already live were
harvested with column crops and may have lost the left half of a paragraph-final
line, invisibly. **Not audited.** See `pg-paired-pilot.md` §8a.G.2.

⚠ **A scan that skips a leaf looks exactly like a clean one** — one agent silently
omitted leaf 858 while answering for its other six. Check returned lists against
input lists.

**⛔ HARVEST MODEL CHANGED — `scripts/pg-page-segments.py`, NOT `pg-leaf-crops.py`.**
Wilson's call: one full-page run is cheaper than three or four bad crops, and the
arithmetic agrees — Batch 2 cost ~107k tokens/leaf across five passes vs ~30k for
a single full-page pass. Whole leaf, native 600 dpi, 8 overlapping segments,
outer margins trimmed. The transcriber follows the Greek column itself and reads
any escaping line whole. `pg-leaf-crops.py` is superseded (banner in the file);
the full-width scan/crop scripts are no longer needed for new harvest, though
they stay for auditing already-shipped works.

✅ **BATCH 2 IS ASSEMBLED** — `raw/pg088/batch2-assembled/`, 20 leaves, 9,281 body
words, lint 19/20 (the one flag is an empty section header, not text). Sources:
**8 leaves from full-page renders** (845, 846, 847, 849, 853, 856, 857, 861 — every
leaf the crops damaged) and 12 from the spliced crop pass with verdicts applied.
Apostrophes normalised to U+2019 throughout.

**149 words recovered** by the full-page re-reads — text both crop passes had
lost, including an entire printed line on leaf 849 (`ἀμεριμνίαν καὶ τὴν ἀνάπαυσιν
ἔχει.»`) present in NEITHER earlier pass.

**Still owed on Batch 2:** the verdicts were adjudicated against the CROP text, so
they have not been re-applied to the 8 full-page leaves — the full-page read is
the better witness and should win, but the ~20 verdicts touching those leaves are
worth a cross-check against it before the work is chunked. Everything else is done.

**Next:** leaves 865+ (87 remain, cols to 1844) via `pg-page-segments.py` — one
pass, no crop patches. Then the Antiochus repairs (see `AUDIT-ANTIOCHUS.md`).

### Where Dorotheus actually stands

- **Model policy is settled and is not to be relitigated: SONNET transcribes,
  OPUS adjudicates.** `PG-OCR-PROMPT.md` is canonical. Opus as primary transcriber
  silently conforms the plate to the expected text — that is what the pilot
  measured.
- **Batch 1 is done and adjudicated**: 8 columns, leaves 836–844, ~4,300 tokens.
  `benchmark/pg88-pilot/BATCH1-ADJUDICATION.md`. Transcriptions live at
  `raw/pg088/batch1/out/` (gitignored).
- **~109 harvest leaves remain** of the 117.
- **Crops: use `scripts/pg-leaf-crops.py`.** Written today because the hand-rolled
  Batch 1 crops clipped marginal letters on 2 of 8 leaves. Migne's A/B/C/D sit in
  the GUTTER on both parities and their offset varies, so the crop overshoots the
  gutter floor by 45 px (measured need 23; 70 dragged in 2–3 chars of Latin).
  Every run writes `gutter-contact.png` — **look at it before transcribing.**
- **Two prompt amendments already folded in**: Migne prints a GRAVE before a
  comma (this resolved Batch 1's whole ~24-item accent class, and closed the
  Antiochus accent list too), and the marginal-letter position + an instruction to
  report a clipped letter rather than guess it.

### ⛔ Open before the next batch — decide these, don't drift past them

1. **BURN STOP — the ONLY thing still owed.** A batch fleet needs Wilson's
   "which model, and go?" with real numbers. Batch 1 was 8 columns; ~109 leaves
   remain. Items 2 and 3 below are CLOSED (2026-08-05).
2. ✅ **CLOSED — keep the FIRST scan.** All 22 pairs measured with
   `scripts/pg-dup-leaf-compare.py`: no re-shoot is a quality repair (±4%, and
   the plates are bitonal JBIG2 so contrast/focus metrics cannot discriminate at
   all — 254 on every scan). Genuinely different exposures, equally legible; only
   the framing moves. Two false alarms run down: leaf 859's "margin 0" is
   scan-edge dirt, and the tight bottom margins are the *Digitized by Google*
   watermark, present on both members of every pair. Detail: `pg-paired-pilot.md`
   **§8a.G.1**. Do not re-decide this.
3. ✅ **CLOSED — all 4 plate-look items resolved**, full write-up appended to
   `benchmark/pg88-pilot/BATCH1-ADJUDICATION.md`. In short: `Καὶ τὰ τὸ καὶ` is
   **really what the plate prints** (re-read across the full page width, nothing
   clipped) and becomes a CRUX not a repair — the Latin renders only *Accedit
   his quod*, which is evidence, not licence to delete `τὰ`. `ἔβης` is **β**
   (`παρέβης`) — but confirmed by the Latin twin printing *ut quid transgressus
   es?*, NOT by the glyph, which our scan cannot separate from δ. Marginals
   `[C]`/`[A]` are whole in the new crops (and `[A]` on 842 actually sits after
   `Ἐκείνην`, a few words earlier than Batch 1 placed it — a clipped marginal
   costs its address too). `Λ'.` is lambda, `Ϛ'.` is the stigma ligature.
   **Bonus:** two running heads read off the re-crops promoted leaves **836=1613**
   and **842=1625** from interpolated to plate-verified in `pg088.json`.

### ⛔ DEPLOY OWED — apparatus wrapping fix (2026-08-05, `0f5d010`)

Wilson caught the `[nt:]` *laura* gloss on the Antiochus page rendering as its
own full-width line and stretching the line above it. `.notecite` is
`white-space: nowrap` — right for "Prov. v, 22", wrong for a sentence. **The
site-wide scan found 41 more, all plain `[n:]`**, up to 592 chars on the Becket
vita, so the obvious `.prose` fix would have missed every one of them. Builders
now add `.wraps` above 32 chars; `scripts/scan-nowrap-apparatus.mjs` reports the
class clear (77 pages / 7,036 spans) and should be run before any deploy.
✅ **DEPLOYED + VERIFIED LIVE 2026-08-05** (Wilson's OK, `migne-noomcl1gr…`,
aliased to migne.app; polarity gate green 98/98 first). Verified on the live
site, not just in the file: the *laura* gloss flows over 4 line boxes with
`white-space: normal`, and all 5 short locators on that page are still nowrap on
a single line.

### ⚑ Two method findings from today that will bite Dorotheus at TRANSLATION time

Learned the hard way on Glabas Sermon III, and they generalize to every PG work:

1. **Build a 7a″ named-lemma list from the PLATE WITNESS, never from the Calfa
   text.** Today's launch prompt named six readings as "what the source prints"
   that were all Calfa OCR damage, disproved by the third witness and the Latin.
   Naming our own digitization's damage as the plate's reading turns 7a″ from a
   conformation guard into a conformation CAUSE — and the resulting error is
   invisible downstream, because the shipped text would AGREE with the prompt.
   Both agents caught it and refused; a weaker one would have shipped six `[sic:]`
   markers blaming Migne for our defects. **Dorotheus's Greek is OUR OWN OCR, so
   this trap is sharper there than anywhere.**
2. **Name lemmas PER CHUNK, not per work.** The same verse quoted four times had
   different readings at each occurrence.

Also: **the Latin twin is cropped page-atomically** and carries a neighbouring
work's Latin at any seam the Greek truncates. Measured on Sermon III: 263 chars at
the head, 1,539 at the tail. Verifier-only, so it is safe — but say so in the
prompt or a translator will "restore" it.

### Deploy checklist gap, fixed today
`build-cruces.mjs` was missing from `translation-runbook.md` step (b). A work
shipped without it goes live with its apparatus link 404ing while the work page
200s and the landing looks right. **Smoke-test the cruces URL, not just the work
URL.**

---

## ▶▶ 2026-08-04 (Opus): THE PALESTINE BLOCK is top of the PG queue — and it is source-blocked

Wilson put five PG works at the top of the queue for
[[church-in-palestine]]: **Antiochus Monachus's letter to Eustathius (PG 89)** ·
**Dorotheus of Gaza (PG 88)** · **John Moschus, *Pratum Spirituale* (PG 87.3)** ·
**Sophronius, subset only — homilies + synodical letter + anacreontics, NOT the
*Miracles of Cyrus and John* (PG 87.3)** · **Procopius of Gaza, letters +
*Panegyric* only, commentaries excluded (PG 87.1–2)**.

Full ruling, rationale, per-work notes and the path in: **`pg-paired-pilot.md`
§8a.D**. Read it before doing anything with these.

**⛔ The one thing to know: not one of the five has a Greek text.** Calfa's 33
volumes do not include PG 87.2, 87.3, 88, or 89 — and the `PG087_1` file we DO
have is Procopius's OT commentaries, exactly the part Wilson excludes. Scans
exist for all of them (`patrologia-volumes` → `087a/087b/087c/088/089.pdf`), but
scan crops are verifier-only by standing rule, the Greek OCR benchmark has never
been run (`benchmark/greek-gt/` is empty), and if our OCR became the translation
source the three-witness ladder would lose its independence.

**✅ Step 0 source hunt RAN 2026-08-04 — NEGATIVE, and CLOSED BY WILSON.** No
open machine-readable ancient-Greek text exists for any of the five.
First1KGreek is a structural negative (its only name-hits are *Catenae (NT)* and
Dorotheus of **Sidon** the astrologer); DCO has the *Pratum* as a plate scan; TLG
is non-redistributable. The one partial witness — `el.wikisource.org/wiki/Ασκητικά
Δωρόθεου` — was opened and measured: real polytonic Greek, but **8,347 words ≈ a
fifth of PG 88**, sections numbered **Α Β Γ Α Ζ** with Epistles filed under the
Didaskaliai numbering, no edition, no columns, ano teleia replaced by `•` 257×
vs 0 correct. Useful for **Discourse I only** (5,045 w, complete) as a collation
witness. **⛔ Wilson closed the hunt 2026-08-04 — no session may reopen a
transcription search for these five or any non-Calfa PG volume** (§8a.D step 0b).

**⛔ CORRECTION — this note previously said the Greek OCR benchmark had never
run. That was wrong, twice.** It ran **2026-07-04**; `benchmark/RESULTS.md` has
the Greek arm. The empty `benchmark/greek-gt/` dir was mistaken for absence of
the work. **An empty output directory is not evidence a phase never ran.**

**What the benchmark actually says, including on our own volumes** (scored
2026-08-04): it already ruled *"do not vision-OCR Greek at bulk scale with
current Claude models"* — Sonnet 8.59% mean CER vs Calfa's 1.05%. Per-page on
our targets: **PG 89 (Antiochus) Sonnet 3.64% CER**, **PG 87 (Moschus/Sophronius)
7.00%**. Both miss the ~2% bulk bar.

**→ THE BLOCK SPLITS (§8a.D steps 2–4):**
- **Antiochus is VIABLE NOW.** ~2% is a *bulk* bar — the wrong test for a text
  short enough to hand-check whole. A few columns at 3.64% CER is a few dozen
  character errors, all catchable in one read against the plate. The hand-check
  becomes the independent witness the ladder needs. **This is Wilson's "hours,
  not weeks," and the numbers agree. It is the next real piece of work.**
- **Dorotheus · Moschus · Sophronius · Procopius are NOT viable.** At 230–260
  columns, hand-checking 3.6–7% CER costs what translating costs. They **wait on
  Calfa**, whose recognition model we do NOT have (the clone carries only
  `REG-YOLOv12s.pt`, the layout detector). CGPG is an active project and the
  natural ask — but **contacting them is outward-facing: Wilson's call, Wilson's
  send.**

---

## ▶▶ 2026-08-01 (Opus, cont.): §8a.C started — Glabas Sermon II HARVESTED + GATED. Translation not launched.

`isidore-glabas-sermo-2` (the Entry sermon, PG 139 cols 40–72, 17 Calfa pages,
**5 chunks / 4,464 Greek words**) is chunked, twinned, third-witnessed and
gate-green. **It is ready to translate and has NOT been translated** — that
launch needs its own hard stop (chunks + burn + "which model, and go?").

Sermon boundaries taken from the Calfa headings: ΛΟΓΟΣ Αʹ p13 · **Βʹ p27** ·
**Γʹ p43** · Δʹ p66 (the last OCR'd `ΚΟΙΟΣ Δʹ`) · set ends p89. So the remaining
two are **Sermon III (Annunciation) pages 43–66** and **Sermon IV (Dormition)
pages 66–89**, both with full leaf coverage — same recipe, no new tooling.

**Gate:** every chunk non-empty ✓ · **aggregate ratio 1.291**, inside the
0.85–1.6 band ✓ · `greekPlateAbsentPages: [29,30]`. One per-chunk flag (0001 at
1.701) is the known chunk-vs-page artifact — chunk boundaries are not page
boundaries, and the aggregate is the gate stat. Third witness: 5 chunks, no
chunk anomalous after the fix below.

### ⚠⚠ THREE REAL DEFECTS FOUND BY THE GATE — none of them was a crop artifact

The three out-of-band ratios on the first harvest were all genuine. **The band
did its job by being followed rather than explained away.**

1. **⛔ THE COLUMN MAP WAS SILENTLY DUPLICATING PAGES.** Pages 28/29/30 were
   `verified:false` with **parity-filled leaves 18/19/20 — which are pages
   26/27's own leaves.** Both crop scripts have no duplicate check, so they
   cropped a *different page's* columns and emitted them as these pages'
   verifier: twin cols 0039 and 0043 came out **byte-identical**. Re-probed all
   leaves 15–29 with 25 distinctive 9+-char tokens per page (the method
   reproduces every *verified* leaf in the span exactly, so it is trustworthy):
   **page 28's true leaf is 20** (16/25 hits, now verified); **pages 29 and 30
   have no leaf in this scan at all** (1–2 hits = noise) and are now `null`.
   ⚑ **A declared gap is safe; a duplicate is not** — the gap is visible as a
   gap, the duplicate reads as healthy verifier text. **Never parity-fill a
   leaf; prefer `null`.** Caveat written into the map's own note.
2. **The Latin twin had no way to cut its HEAD.** `pg-latin-twin.mjs` supported
   only `cutBefore` (keep the head) — all a *first* work needs. Sermon II sits
   in the middle of a set and shares a printed column at **both** ends, so its
   twin opened with Sermon I's Latin (chunk 0000 ratio 2.227). Added
   **`keepFrom`** (drop the previous work); patch file has both directions.
   Chunk 0000 → 1.043, chunk 0004 → 1.056.
3. **The third witness had no truncation mechanism at all**, so it appended the
   neighbour's Greek. Worse here than on the Latin side: **that file exists to be
   grepped as independent evidence about the plate, so foreign Greek in it reads
   as a genuine plate reading.** Added the same `keepFrom`/`cutBefore` support +
   `data/pg-greek-scan-patches/`. ⚑ **This was live on the shipped pilot too** —
   `sermo-1`'s third witness carried ~Sermon II's opening; patched retroactively
   and re-harvested (its chunk 0003 no longer contains Sermon II's text).
   ⚑ **Markers here match ROUGH SCAN OCR, not clean text:** the plate's
   `ΛΟΓΟΣ Γʹ.` arrives as `Bl,` and `ΛΟΓΟΣ Βʹ.` as `ΑΟΓΟΣ B.`, so a heading is
   useless. Pick a distinctive *content* word from the neighbour's opening
   (`Εὐαγγελισμ`, `ΟΓΟΣ B`) and confirm it occurs exactly once. A miss warns.

### ⚑ And one trap that costs nothing to avoid
**The Calfa source is not NFC-normalized** — it uses legacy *oxia* codepoints
(ή = U+1F75, not U+03AE). Hand-typed Greek in a patch `find` field looks
identical on screen and **silently fails to match**. Every find string in
`data/calfa-patches/isidore-glabas-sermo-2.json` was extracted programmatically
from the source. Never hand-type one.

**NEXT:** the Sermon II translation launch (hard stop first — 5 chunks, the
Marian epithet table and Sermon I's conventions govern it, `translation-style.md`
Register PG/Greek → high rhetorical homily). Then Sermons III and IV by the same
recipe, then the second Oecumenius unit (Gal or Eph, **not** Jude/Colossians).

---

## ▶▶ 2026-08-01 (Opus): §8a.B step 2 **DONE** — Joel's backfill is closed. Deploy owed.

The retroactive twin pass over all 12 Joel chunks is complete. Full write-up at
the end of `src/english/joel-chronographia/cruces.md`; read that, not this
summary. `verify-english-pg` clean 12/12, polarity gate **green 95/95**,
re-indexed (33 columns, 212 cruces).

**The four adjudications:**
1. **0272 `δυσσεβῆ` — the sweep's conjecture *εὐσεβῆ* is REFUTED**, no edit.
   Scan-Greek `δυσσεθῆ` (this scan's β→θ, cf. `θεοδόσιον`/`λαθὼν` in the same
   lines) + Latin *virum impium rusticumque*. Two witnesses independent of
   Calfa, both carrying **δυσ-**. Settled in one look, exactly as specced.
2. **0236 Asa `τὸ πονηρόν` — CLOSED as the plate's reading**, no edit as
   expected. Three concurring witnesses **plus a positive control**: the same
   plate prints `τὸ εὐθές` for Josaphat three lines below, so the alternative
   formula is demonstrably live and `πονηρόν` is not a mechanical default.
3. **Three `[lat:]` markers placed** (spec said two): 0240 Joram `βʹ` ‖ *annos
   duodecim* · 0288 Michael VII `ζʹ` ‖ *annos sex* · 0269 Justinian II `ἔτη ιʹ`
   ‖ *annum unum* (here the LATIN is the outlier — still material).
4. Re-verify / re-gate / re-index: done.

**Polarity read against both columns — ZERO ours-side defects, a corpus first.**
Not luck: the chronicle's polarity rides one fixed formula (`τὸ πονηρόν` /
`τὸ εὐθές`), **35 firings, all concurring across columns, all correct in the
English**, including the three non-finite forms where drift was actually
possible (Joas's imperfect `ἐποίει`, Achaz's `ποιήσας`, Osee's `ποιῶν` — aspect
preserved in all three). Every Latin negation checked concurs too.
**⚑ 7a″ again: genre predicts the failure mode — a king-list chronicle's risk is
the NUMERAL, not the negation.** Every real defect in this work's history has
been one. Put the numeral hunt at the top of any chronicle prompt.

**⚑⚑ THE DURABLE FINDING — the two crops are reciprocal repair kits.**
Written into `pg-paired-pilot.md` §4a and `translation-style.md` Pattern 16.
The x-range split spills each column's edge-words into the *other* crop, and the
two fail at the boundary **independently**. So **a gap in the Latin twin is not
evidence of a gap in Migne's Latin column** — grep the Greek crop first.
It caught a false `[lat:]` one keystroke short: Joel 0236, Greek `ὀγʹ` (73)
against the twin's *anno septuagesimo* (70) — the Greek crop held the dropped
`tertio, sepeliturque cum patre Davide`, so the columns agree and the English was
right. **The truncation that still parses is the dangerous one.** A second false
marker was stopped the same way (a Greek bleed sitting *on* the Latin numeral at
*duo millia εἰ septuaginta*). Cost: one grep.

**Two cruces claims corrected by the twin:** Eli's age — the file said "Latin
verifier drops the number," but the twin prints *annorum 90* (the claim was true
of the old `raw/verifier/` OCR, not of Migne); and Achab `κθʹ`→`κβʹ`, which rested
on the Latin alone, is now **verified** by the third witness reading `κβ`.

### ⚠ LIVE DEFECT FOUND AND FIXED WHILE DEPLOYING — every PG marker rendered raw

Placing the three `[lat:]` markers surfaced a defect that had shipped with the PG
pilot itself: **`build-work-page-pg.mjs`'s `paras()` had no marker transforms at
all.** The PL builder has had them since Pattern 13; the PG builder — generalized
2026-08-01 for bios/badges/about-prose — was never given them. So **all 47 inline
markers across the four PG works were live on migne.app as raw bracket text**
(17 `[ed:]`, 17 `[lat:]`, 13 `[var:]`), e.g. a literal
`[lat: the Latin gives <i>invitus est incarnatus</i>, "unwillingly"]` in
Oecumenius's running English.

Fixed: `paras()` now carries `[sic:]`/`[ed:]`/`[var:]`/`[lat:]`, byte-identical in
behaviour to `build-work-page.mjs` so the two builders cannot drift on the same
pattern, plus a `.latnote` CSS rule grouped with `.varnote` (Pattern 16: "renders
like `[var:]`"). All four PG pages rebuilt; 47/47 markers now render, 0 raw.

⚑ **The lesson generalizes past this bug:** the PG builder was generalized on the
axes the pilot happened to exercise (bios, badge, about-prose) and silently
inherited nothing on the axis it did not. **`[lat:]` was specced, verified, logged
in cruces, and gate-green — and still reached the reader as literal brackets,
because no check anywhere looks at rendered output.** Same shape as the
`build-commentaries.mjs` omission and the Joel-hardcoding: **a PG builder is not
the PL builder minus Latin — assume nothing carried over, diff the two.**

**⛔ OWED: deploy** (Wilson's per-action OK) — `cd site && npx vercel --prod
--archive=tgz`, project `migne`, root `site/`.

**NEXT after that: §8a.C queue additions** — Glabas Sermons II–IV (PG 139, from
col 40; the Marian epithet table travels with them), then a second Oecumenius unit
from PG 118 (**Gal or Eph — NOT Jude/Colossians**, which do not exist in our
Calfa file). Both unblocked. PL queue unchanged (9 prepared works; 9637 still
needs its Fable liturgical mini-pilot).

---

## ▶▶ 2026-08-01: §8 GATE RULED **OPEN** — PILOT BUILT, STAGED, **DEPLOYED + VERIFIED LIVE.**

migne.app now serves **98 English works**. The PG paired pilot is fully live:
Nicetas of Maroneia's *Dialogues on the Procession of the Holy Spirit*, Isidore
Glabas's Nativity sermon, and the Oecumenius Philippians catena (correctly
badged "New," attribution flag rendering on the byline). **Nothing else is
owed on this thread.**

✅ **Condition 1 DONE 2026-08-01 (Sonnet, `d21e2d3`, pushed):**
`scripts/pg-greek-column.mjs` written — mirrors `pg-latin-twin.mjs`, crops the
Greek side of the same x-range split, writes chunk-aligned scan-OCR Greek to
`src/pg-greek-scan/<workKey>/` (verifier-only, third witness, never a
translation source). Re-run on all three pilot works; recovered ἀπερίγραπτος
cleanly. Also folded in condition 2 (`greekPlateAbsentPages` now a required
top-level field in every PG twin manifest, both scripts) and the Q1 band
amendment (0.85–1.6×, sub-0.5× presumptive wrong column) that was ruled but
never applied to the gate code — `pg-latin-twin.mjs` fixed.

✅ **§8a.B step 1 (Sonnet — harvest the twin) DONE 2026-08-01**, committed
`a3ff4b1`+ next: `src/pg-latin/joel-chronographia/` (12 chunks, aggregate ratio
0.939 — within chronicle band, `greekPlateAbsentPages: []`, no leaf gaps) and
`src/pg-greek-scan/joel-chronographia/` (third witness, also full coverage,
no gaps). Registry already carried `latinVerifier` from the earlier pilot note
— nothing to add there.

**⛔ NEXT — §8a.B step 2, assigned to OPUS, not Sonnet:** one session, hard-stop
first, retroactive twin pass over all 12 chunks + polarity read against both
columns. Priority adjudications named in `pg-paired-pilot.md` §8a.B (0272
δυσσεβῆ καὶ ἀπράγμονα vs sweep conjecture εὐσεβῆ; 0236 Asa τὸ πονηρόν —
expect no edit; retrofit Pattern 16 `[lat:]` on 0240/0288/0269). Then
re-verify (`verify-english-pg.mjs`), re-run `polarity-record.mjs`, re-index
(`index-work-pg.mjs`) — markers change English text, work page rebuilds at
next deploy. **Do not run this step on Sonnet** — the spec names Opus
deliberately for the adjudication judgment calls, not just the mechanics.

After that: (c) queue additions per §8a.C (Glabas Sermons II–IV, then a second
Oecumenius unit — Gal or Eph, NOT Jude/Colossians). Unblocked (condition 1 was
the gate), not yet started.

Everything the section below lists as owed is DONE, including the deploy
(`f470595`→`be3a078`, pushed, deployed):

1. ✅ **§8 gate ruling written — `pg-paired-pilot.md` §8a** (read that, not a
   summary). Verdict: **GATE OPEN with five conditions** (generalize
   `pg-greek-column.mjs` before the next volume harvest; `greekPlateAbsentPages`
   mandatory at harvest; prompts name their genre subsection; eye spot-check
   reads for continuous prose; merge discipline as learned). Outputs written:
   **§8a.B Joel Latin backfill spec** (Sonnet harvest + one Opus session,
   priority adjudications incl. retrofitting `[lat:]` on 0240/0288/0269) and
   **§8a.C queue additions** (Glabas Sermons II–IV, then a second Oecumenius
   unit — likely Gal or Eph, NOT Jude/Colossians). **Runbook merged:**
   `translation-runbook.md` now carries the PG section.
2. ✅ **Author bios** — Nicetas of Maroneia, Isidore Glabas, Oecumenius of
   Tricca (with `attributionFlag`: the catena ascription is a 16th-c.
   convention). Joel's bio gained dates.
3. ✅ **Built + indexed all three works.** ⚠ `build-work-page-pg.mjs` was
   **Joel-hardcoded** — it would have shipped "(13th century)" bylines, Joel's
   "On this text" prose, and an unconditional **false "First" on Oecumenius**.
   Generalized: bios + popover card (attributionFlag reaches the reader), badge
   by the same rule-8 test as build-landing (verified none → First, else New),
   about-prose from `work-about.json` under `pg:<workKey>` (Joel's paragraph
   moved there). Registry gained titleEn/slugs (needed — `PG_FIRSTS` matches on
   slug paths). Pages: `/pg/139/dialogi-de-processione-spiritus-sancti/` (First)
   · `/pg/139/sermo-i-in-nativitatem/` (First) ·
   `/pg/118/commentarius-in-epistolam-ad-philippenses/` (**New**, flag renders).
4. ✅ **`englishState: "ours"`** ×3, `workStatus` untouched (Oecumenius stays
   null → New everywhere).
5. ✅ **Both `data/calfa-patches/oecumenius-philippians.json` entries written**
   (col 1325 nine words + subscription), stored Greek chunk 0013 hand-restored
   to match (Joel precedent, no re-chunk), verify clean 14/14.
6. ✅ RECENT + landing + scripture/sources/authors/queue/volumes/commentaries
   all rebuilt and committed. **Gate green 95/95.**

**⛔ THE ONE REMAINING ACTION — deploy, Wilson's per-action OK:**
`cd site && npx vercel --prod --archive=tgz` (project `migne`, deploy root
`site/`, never the repo root), then smoke-test the three URLs above + landing.
Everything is committed and pushed; the working tree is clean.

**After deploy, next moves in order:** (a) Sonnet: generalize
`scripts/pg-greek-column.mjs` (gate condition 1); (b) Joel backfill per §8a.B;
(c) queue additions per §8a.C. PL queue unchanged (9 prepared works; 9637 still
needs its Fable liturgical mini-pilot).

---

## ▶▶ PG PAIRED PILOT — TRANSLATED, MERGED, POLARITY-GATED. NOT BUILT, NOT DEPLOYED. (2026-07-31→08-01) — **superseded by the section above except as history**

**Read this whole section before touching PG.** `pg-paired-pilot.md` is still
the governing spec; this records what executing it actually produced, what it
changed in the rulebook, and exactly what is owed.

### State in one table

| Work | Key | Chunks | Verify | Polarity | Badge on deploy |
|---|---|---|---|---|---|
| Nicetas of Maroneia, *Dialogi* (dial. I + frr. II–VI) | `nicetas-maroneia-dialogi` | 10 | ✅ | 0 sites | **First** (`none`, verified 2026-07-03) |
| Isidore Glabas, *Sermo I* (Nativity) | `isidore-glabas-sermo-1` | 4 | ✅ | 0 sites | **First** (inherited verified `none`) |
| Oecumenius of Tricca, *in Philippenses* | `oecumenius-philippians` | 14 | ✅ | 2 sites, 1 ours (fixed) | **New** — no status in hand, and per rule 8 **do not go hunting** |

**Polarity ledger 95/95 — gate GREEN.** Every englished work in the corpus has
now been read for the silent-repair class.

**18 commits local on `master`, UNPUSHED** (origin still at `c741877`). Nothing
built, nothing deployed, nothing on migne.app. `site/` untouched.

### ⚠ WHAT IS OWED — in order

1. **Author bios — BLOCKING.** All three authors are **MISSING** from
   `data/author-bios.json` (34 entries; schema `displayName`/`latin`/`dates`/
   `bio`). Without them the byline falls back to the Latin form — acceptable
   temporarily, **not for deploy** (runbook step 5).
2. **Build + index:** `build-work-page-pg.mjs` then `index-work-pg.mjs` per
   work. Optional prose in `data/work-about.json` (never edited into generated
   HTML).
3. **§8 GATE QUESTIONS — assign to FABLE.** The spec (§8) says a session must
   answer six questions before Joel's backfill or any PG scale-up, and names
   Fable as the reader of the findings. **All six now have real data** —
   answers sketched below, but they want a session that has read the cruces
   files, not a paraphrase of this note.
4. **Deploy — Wilson's per-action OK, and the full step-8 checklist**, incl.
   `polarity-record.mjs --gate` first, `RECENT` in `build-landing.mjs`, all six
   generated-page rebuilds, `cd site && npx vercel --prod --archive=tgz`, then
   smoke-test. Deploy is `site/`, project `migne` — never the repo root.
5. **`translation.englishState = "ours"`** at ship time, and **leave
   `workStatus` exactly as triage left it** (rule 8; this is what put a false
   "First" on Abbo).
6. **Two `data/calfa-patches/` entries warranted, not written** — both
   plate-checked: col 1325's nine lost words, and the truncated subscription.
   See `src/english/oecumenius-philippians/OPEN-QUESTIONS.md` §4.

### ⚑ RULEBOOK CHANGES MADE — these outlive the pilot

- **`translation-style.md` Pattern 13a — the visible-structure rule (WILSON
  RULED 2026-08-01, corpus-wide, PL included).** Recoverable source loss:
  (1) words lost mid-sentence, plate certain → restore **silently**, log;
  (2) a **reader-visible structural unit** (heading, speaker turn,
  subscription, division mark) → restore **with `[ed:]`**, because its absence
  is otherwise invisible *as an absence*; (3) unrecoverable → `[ed:]` marking
  the hole, supply nothing. **Principle: the marker makes an absence visible
  when it would otherwise be invisible as an absence — it is not a receipt for
  every keystroke of repair.** It passed its first outside test immediately: a
  blind reader independently wrote up five restorations as unmarked holes, then
  withdrew them on finding 13a.
- **`pg-paired-pilot.md` §4a — THE THIRD WITNESS.** The djvu.xml we crop the
  Latin twin from **carries Migne's GREEK column on the same leaves.** Splitting
  the other side of the x-range gives an OCR of the plate's Greek fully
  independent of Calfa, at the cost of a grep instead of a page render. This
  changed the pilot's economics and is now standard practice. **Not yet
  generalized into `scripts/pg-greek-column.mjs`** — worth doing next time a
  session touches PG.
- **`translation-style.md` Register (PG / Greek)** gained three genre
  subsections written from the anchors — **Dialogue**, **High rhetorical
  homily**, **Greek lemma-and-gloss / catena** — each with its own failure mode
  and worked cases. EN/Greek ratios by genre: **chronicle 1.25 · lemma-gloss
  1.35 · dialogue 1.37 · homily 1.49.**

### ⚑ THE FINDINGS WORTH CARRYING FORWARD

- **7a′ got its sharpest example.** Oecumenius col 1300: the English read
  "certain **unprofitable** things" where Migne prints `λυσιτελῶν`, *profitable*
  — shipped on the authority of a crux that had logged the column and argued the
  emendation **with its reasoning backwards** (the neighbour it cited argues the
  other way; `οὐκ … ἀλλὰ μᾶλλον πραγμάτων λυσιτελῶν … ἀποβολήν`, and the
  resolution says `καθ᾽ αὑτὸ, κέρδος αὐτὰ ἐνόμιζεν`). Nothing downstream could
  catch it. **A crux whose reasoning is STATED deserves more scrutiny than a
  bare one** — a stated reason is what stops the next reader from checking. The
  original entry is struck through, not deleted, in the merged cruces.
- **The merge is not concatenation, and it changed the text.** Nicetas's two
  halves split on the προβολ- family (20 "put forth" vs 6 "produce") and on
  προϊέναι. Ruled on principle, not majority: *producere* flattens three Greek
  verbs and "produce" **is** the English of *producere*, so adopting it imports
  Allatius's flattening. Four passages edited.
- **⚠ MERGE TRAP.** A cruces file declared a προΐεσθαι convention citing a
  column where **its own chunks contain no such form** (the site is `προῖεται`,
  circumflex iota; both textbook forms are in the *peer's* chunks). A merge
  trusting the cruces prose would have "reconciled" two correct renderings into
  a convention for a word that agent never translated. **Check the Greek, not
  the cruces claim.** Same lesson, different shape: a cruces method note gave
  the leaf formula as `(2n−7)` while its own worked examples said `(2n+3)` —
  **check arithmetic against its own examples before trusting or passing it on.**
- **Restraint is the pilot's real output.** ~16 `[lat:]` candidates were logged
  **unmarked** with reasons — every one that fell in a leaf gap or rested on
  shaky Latin OCR. Worked cases: Glabas's Ἀχάβ/*Achaz* (textbook name
  divergence, declined because the only Latin witness there is tesseract of a
  second copy); every ἡμεῖς/ὑμεῖς itacism in a gap.
- **Genre predicts the failure mode, again.** Glabas's epithet rule caught what
  it was written for: **πολυύμνητος and πανύμνητος stand three lines apart and
  Allatius gives ONE Latin word for both**; likewise καλλίπαις/πολύπαις, where
  the pair *is* the argument. Luke 1:28 rendered "Rejoice" not "Hail" —
  load-bearing, since the next clause is `δι᾽ ἧς χαίρει πᾶσα ἡ κτίσις`.

### §8 gate questions — data in hand (Fable to rule)

1. **Twin sanity gate:** caught real misalignment, but **the band is not the
   instrument.** It missed a line-interleaved crop (Nicetas 0195–0196) and
   cannot see a Greek-plate blind spot at all. Ratios are genre-dependent
   (dialogue 1.08 aggregate vs homily 1.48). **New field added:**
   `greekPlateAbsentPages` in the twin manifest — where the primary scan has no
   leaf, the Latin may survive via the alt witness while the **Greek plate does
   not**, so §4a verification is unavailable though the twin looks healthy.
2. **What the Latin settled:** most Calfa damage; but the decisive instrument
   turned out to be the **third witness**, not the twin. Plate checks stayed
   common *and* got cheap.
3. **`[lat:]` per work:** 3 / 1 / 10. Classes beyond numerals: **pronoun
   itacism (ἡμεῖς/ὑμεῖς)**, dropped negatives, opposite motives, temporal
   polarity (`οὐκ ἔτι` vs *nondum*). **Two no-marker rules earned:** the
   plate's own apparatus can settle a divergence (Migne's note correcting
   Allatius), and **Vulgate-conformation in the Latin column is convention, not
   divergence.** No marker spam — materiality held.
4. **Register:** all three genres extended it; see above.
5. **Generalization (PG 118):** column constant differs (K=−23 vs PG 139's
   −15), leaf drift steeper (+4→−3 across 34 pages), one genuine side-parity
   exception. `chunk-work-pg.mjs` was generalized to derive K per work.
   **Verdict: it generalizes, but every volume needs its own verification.**
6. **EN/Greek by genre:** the four ratios above.

**Then:** Joel's Latin backfill spec (its two provisional findings and two
scan-found divergences have been waiting), PG queue additions, and folding
§5 into `translation-runbook.md` as a PG section.

### Open questions carried (do not let these evaporate)

`src/english/oecumenius-philippians/OPEN-QUESTIONS.md` — six sections. Highest
value: **§1 Luke 10:20 at col 1316** prints `τὰ δαιμόνια` / `ἐν βίβλῳ ζωῆς`
against the received `τὰ πνεύματα` / `ἐν τοῖς οὐρανοῖς`, **and the exposition
depends on "book of life."** OCR cannot produce word-level substitutions, so it
is likely a real plate reading — but it sits in the p.669 two-witness gap. **If
a leaf for Calfa p.669 ever surfaces, check this first.** Also §5: a possible
Migne `( sic )` at 1272 that would make our `[var:]` a duplicate of his own
mark — needs a leaf image; PG 118's PDF is not held locally.

Glabas has two of its own, in its merged `cruces.md`: the §14 numeral (both
independent OCRs agree on `ΙΑʹ`, so a leaf *render* could turn an OCR fix into
a `[lat:]`) and the Ἀχάβ/*Achaz* candidate pending a leaf for Calfa p. 21.

### Also true, and easy to forget

- **PG 118's Calfa file is Romans→Philippians only** — no Catholic epistles, so
  the spec's suggested Jude unit does not exist in our source. Philippians was
  the smallest complete lemma-and-gloss unit actually in hand.
- **`verify-english.mjs` hard-fails on PG works** (it wants `src/latin/`) —
  `verify-english-pg.mjs` is the one. And **guillemet parity with the twin
  cannot be forced in PG**: that check assumes PL, where the twin *is* the
  source.
- Glabas *Sermon I* ends **mid-column 40**, with Sermon II beginning in that
  same column. The other three sermons are deliberately not in the pilot —
  they are the volume work its conventions now govern.
- New registry entries: `isidore-glabas-sermo-1` (split from the four-sermon
  parent, which is untouched but for a cross-ref) and `oecumenius-philippians`.
  New scripts: `scripts/pg-latin-twin.mjs` (generic), `data/pg-latin-altsource/`.

---

## 9033 Angelomus SHIPPED + DEPLOYED 2026-07-31 (Sonnet, `8ea92da`→`9a9ab99`, pushed) — LIVE, verified

**First English translation** of Angelomus of Luxeuil's *Enarrationes in Cantica
canticorum* (PL 115, 27 chunks, 31,140 words) — the smallest queue-ready work after
9637 (still a Fable mini-pilot, see below) was correctly skipped. Full pipeline run:
6 Opus agents (chunks 0-4/5-9/10-14/15-18/19-22/23-26), verify-english clean, all six
agents' cruces merged into one file with a work-wide conventions section (nard→
spikenard standardized across 3 drifting chunks; one `[var:]` marker's format fixed).
**Required blind polarity read done** (runbook 4a): 30 sites, 22 already caught by the
translating agents' own lemma-vs-Vulgate collation, 8 new — 3 were genuine errors and
are FIXED in the text (0591B verb/noun crossing, 0569C–D same-phrase-opposite-senses,
0580A mistranslated causative idiom), 5 are Migne's own plate defects logged per
Pattern 7, not touched. `polarity-record.mjs --gate` green **92/92**. Author bio added
(Angelomus had none). Two new BOOKS aliases surfaced (`Joann`→John). `englishState:
"ours"` set, `workStatus` left untouched at `none` per rule 8. Scripture index,
sources, authors, queue, volume indexes, commentaries map all rebuilt and staged.

**DEPLOYED 2026-07-31** (`dpl_H6HAL27pJCuzzkuv8vdQnsDABaEm`) — RECENT prepended,
landing + resolver rebuilt, live and smoke-tested: `/pl/115/enarrationes-in-cantica-canticorum/`
200, landing lists it with "First English translation", scripture index at
**3,464 citations**. Nothing owed on this thread. Next in the translation queue
(smallest-first, still respecting the 9637 *Ordo* skip — it needs its own Fable
mini-pilot for the liturgical genre before any Opus batch): re-run
`node scripts/build-queue.mjs` fresh, since 9033 dropping off the "prepared" list
shifts the ranking. Hard-stop ritual before the next launch.

## ▶ SPEC EXECUTED 2026-07-31 (Sonnet, `f89d1b4`, pushed) — ONE deploy still owed

**`data/inline-citations/SPEC.md` is fully implemented and committed. All that's left
is the production deploy, which needs Wilson's per-action OK** (`cd site && npx vercel
--prod --archive=tgz`). Nothing else is open on this thread.

What shipped in the commit: `index-work.mjs` now derives inline (running-text,
un-noted) scripture citations from the Latin twin at index time — no new agent marker,
no prompt/style-file change. BOOKS gained `Exodi`/`Josue`/`Aggaei`/`Heb`; `Aeneid`
joined the known-fontes routing list (11065's specimen turned out to be a `[n:]` NOTE,
not inline — the brief mislisted it); `normSeg` gained comma-after-book normalization;
`parseScripture` gained book-boundary segmentation (one parenthesis, two books — both
11064's inline case and 8930's well-formed-note case now emit two records each) and
roman chapter-range support. The candidate detector is gated on a book-shaped head AND
an actual numeral TOKEN (not a bare letter — verified "Christo"'s capital C never trips
it); anchor-inside citations key on the OPENING column, matching the `[f:]` precedent.
A dedup step was added and needed: 8566 had a pre-existing Pattern-4 `[f:]` tag on this
exact citation, which would have double-counted against the new harvest.

**Re-indexed all 15 shipped works + 8930** (shipped the same day, so folded into the
same batch). Every new record was hand-verified against the Latin source, including
several the brief's own measurement script had missed entirely (ordinal-prefixed books
like "II Tim." and short aliases like "Philip" aren't in that script's simpler regex —
found 36 inline citations total across the 16 works, more than the brief's ~31
estimate, all confirmed genuine). Authored the 8930 correction (`Psal. II` → `Ps.23.2`,
verified against the quoted Latin, the SPEC's worked example 4). Rebuilt
`site/scripture/index.html` (3,289 citations now, up from 3,033). Ran the post-rollout
audit (`scan-inline-citations.mjs`, now rewritten to subtract already-harvested
records) — **zero unharvested inline citations remain on any shipped work.** No chunk
file, Latin or English, was touched anywhere in this session.

Noted in passing, out of scope: `decade-check.mjs`'s Pattern-4 gate flags 11065 for
"untagged locator tails" — pre-existing false positive (it's matching the work's own
homily chapter titles, "Hom. VI." etc.), unrelated to this session's changes and not
touched.

8930 (mid-run) needs nothing special — its 4 inline citations + the `(Psal. II)`
correction + the `(Phil. II, Heb. II)` two-book note are all covered by the spec's
worked examples; the corrections entry is authored during that session, keyed on the
OPENING column.


## 2026-07-30 (thirteenth, Opus) — 7914 SHIPPED + DEPLOYED; gate green 90/90; rulebook gained 7a″

**LIVE**: pushed through `d9f19e1`, deployed, smoke-tested. **90 english works.** All
seven polarity fixes verified in the served HTML. `--gate` green **90/90**.

### 7914 ps.-Cassiodorus, *Expositio in Cantica canticorum* (PL 70) — FIRST English
23 chunks / 27,638 Latin words / 4 Opus agents / badge **"First English translation"**
(`workStatus: none`, verified, preserved). Song of Songs on the commentary map is now
**33 commentaries, 8 in English**.

### ⚑ THE DURABLE FINDING — `translation-style.md` **7a″**, genre predicts failure mode
7914's blind read: **all 7 ours-side defects were lemma-conformations (5) or mis-bound
references (2). NOT ONE dropped negation.** The same day's 11065 (homilies) gave the
opposite: negations and scope errors, zero conformations. **In a verse-by-verse
commentary the risk is not losing a `non` — it is the familiar English of a known verse
arriving before the printed Latin is read.** Nothing looks wrong afterwards: smooth
sentence, correct citation, `verify-english` passes — but the exposition now rests on a
word that is not on the page. **The mechanism was in these prompts only because it was
added for this genre, and it found five.** Put it in every commentary prompt.
Worked case: **@1079C** Migne prints Heb 12:14 as *castimoniam*; we gave the Vulgate's
"holiness" — while our own English rendered *castimonia* "chastity" nine words earlier,
and the text is adduced *precisely for chastity of the flesh*. The argument's keyword
had vanished from its own proof-text.

### The ruling proved itself a principle, not a lookup table
Case 2 ("a gloss depends on the word → Latin stands") was applied **four times by agents
to words nobody pre-set**, each from this plate: *vermiculatas*, *elatae palmarum*,
*malum granatum/punicum*, alongside pre-set *murenulae*. And ***ferculum* → "litter"**
here vs Bruno's "banqueting table" in 10804 — **both right on their own plates, recorded
as not-to-be-reconciled.**
**Boundary recorded: site furniture is NOT a lemma.** `Vers.` → "Verse N." unified
(apparatus, like `CAPUT` → `CHAPTER`). The ruling governs Scripture's words only.
**Deliberate asymmetry kept:** the 7:4 lemma reads "looks **toward** Damascus" while the
gloss reads "**against**" — *respicit contra* is idiomatic facing and the author's gloss
exploits the adversative sense. Do not flatten.

### Also
- **Attribution flag corrected from evidence in hand** — the polarity read surfaced
  Migne's own *Monitum*: *Mihi tamen Cassiodori non esse certissimum videtur*. **The
  edition denies its own attribution in print.** Now quoted on the page. No research
  opened (rule 8).
- Citation correction filed: `(Psal. XV II, 6)` — a space split XVIII; the indexer could
  not parse it at all, so this was the difference between the citation reaching the
  scripture index and vanishing.
- ⚠ **Structural gap named in 7914's cruces:** its per-batch negation audits covered
  chunks 0007–0012 only, and three new source-side findings sat in the unaudited range.
  **A per-batch audit is not a work-wide one.**

### → NEXT
1. **Song queue, now unblocked and smallest-first:** 8930 Rabanus (27 ch) · 9033
   Angelomus (27) · 11638 Philip of Harvengt (35) · 6963 ps.-Ambrose (40) · 11613
   Gilbert Foliot (53) · then the campaign tier — 11512 Wolbero (81), 11632 Philip
   (126), 11703 Thomas the Cistercian (259, a campaign not a session).
   **Every commentary prompt gets 7a″.**
2. **PG paired pilot** — spec written (`pg-paired-pilot.md`), Sonnet executes §2–3.
3. 7914 @0249D-analogue items and the two logged-not-fixed carried forward below.

## 2026-07-30 (twelfth, Opus) — 11065 SHIPPED (53 ch); THE COMMENTARY MAP built

### 11065 done — largest work in the corpus
Hugh, *Homiliae in Ecclesiasten*: 53 chunks / 62,318 Latin words / 6 Opus agents.
verify-english OK, merged, built, indexed, `englishState: ours` (workStatus `unclear`
preserved → badge "New"). Commit `336fc64`. **Site now 89 english pages.**
Merge found two real drifts (both fixed, both checked per instance against the Latin):
*Stultus in tenebris ambulat* split walketh/walks across agents — load-bearing because
0000's argument list forward-references Homily XII, which is BUILT on that reading; and
*arguere*→"reprove" vs *convincere*→"convict" conflated at 4 sites. **Three things that
looked like drift and were left alone** are written into `cruces.md`: the guillemets on
that lemma (Migne prints them in two places and omits them in the third — normalizing
would invent punctuation), *universa vanitas* vs *omnia vanitas*, and Migne's own
repeated lemmata printed differently. Also fixed: `index-work.mjs` had no bare `Eph`
alias (affects queue works 11512, 9033).

### ✅ 11065 POLARITY READ DONE — gate GREEN 89/89 (`ed4a7e6`)
Six blind Opus units, 53/53 chunks. **20 sites: 13 source, 7 ours.** Full write-up at the
end of `src/english/11065/cruces.md`; units in `data/sweeps/polarity-11065/`.
**Six ours-side defects fixed** (@0136C litotes · @0171C *Nec possis* · @0200D *male
secura* · @0211C negation scope · @0241B scope of *male* · @0253A *minus* distributing).
**Every genuinely new finding was ours-side, and three sat in columns already logged for
something else** — the "a logged column is not a checked column" shape. One logged-not-
changed: @0249D (*qui*/*cui* silent normalization, low confidence) — **still owed a
reading; it should not stay silent.**

**Two durable findings, do not re-derive:**
1. **Recall was measured.** Only u3's control was named; u1/u2/u4 rediscovered their
   known sites blind. That is why the clean chunks here can be trusted.
2. **Migne's question marks in THIS work are reliable evidence** — 403 of them, every
   `Nunquid…?` pointed. So @0150A's declarative period is deliberate, the flat English
   stands, and the contradiction is the source's (probably a dropped `nec`). Two agents
   pressed to re-mood it; both were overruled on that measurement. **Do not re-litigate.**

### ▶ DEPLOY OWED (needs Wilson's OK)
Would ship **11065** (89 english pages) **and the commentary map** together. Gate is
green, so nothing blocks it. Remember `build-commentaries.mjs` is now in the step-8
rebuild list. Also still unpushed: everything since `bf3d9e4`.

### ✅ THE COMMENTARY MAP — `/scripture/commentaries/` (built, NOT deployed)
Wilson's call: **a separate page linked off /scripture/, never a section inside it** —
"the scripture page is one of the greatest resources of this project and shouldn't be
muddied," but "seeing the commentaries next to each other would be something special."
Commit `cdc5371`. **239 commentaries · 55 books/groups · 15.5M Latin words · 17 in
English.** Song of Songs alone has **33** (7 English); Psalms 28; Apocalypse and Genesis
12 each. Shows the whole corpus translated or not, per PLAN.md's complete-map principle.
- `scripts/build-commentaries.mjs` + `data/commentary-overrides.json` (hand curation,
  reason recorded per rejected work). **Add it to the deploy rebuild list.**
- Rule: title names a book AND (genre word OR governed by in/super). That excludes the
  biblical TEXTS themselves without a reject list.
- **Traps already paid for — do not re-derive:** `liber` must NOT be a genre word (it
  promoted every biblical text); named canticles must route BEFORE the generic *Cantica*
  pattern (*Canticum Habacuc*→Hab, *Debborae*→Judg, ***B. Mariae*→Luke — Hugh's
  Magnificat was being filed under the Song of Songs**); person-names collide constantly
  (John, Matthew, Peter, an empress Judith) and are rejected by hand; Hebrews and the
  Catholic epistles are absent CORRECTLY — PL carries them only as biblical texts, not
  as commentaries.
- Canonical book order extracted to `scripts/lib/bible-books.mjs`, shared with
  `build-scripture-index.mjs`; refactor **proven byte-neutral**.
- ✅ **RULED (Wilson, 2026-07-30): a multi-book work goes in its AREA of the Bible,
  immediately before its first member — NOT decomposed, NOT in an appendix.** Pauline
  collections before Romans, Kings/Samuel before I Kings, gospel harmonies before
  Matthew. So the page reads in canonical order the whole way down and a reader going
  to Romans passes the whole-corpus commentaries on the way in. Implemented as an
  anchor book per group + `rankOf()` (anchor rank − ½) in `lib/bible-books.mjs`;
  groups render with `.cm-group`. Commit `512fece`. Nothing open here.

## 2026-07-30 (eleventh, Opus) — PUSHED + DEPLOYED; Song-of-Songs question RULED; 11065 launched

### Shipped
**Pushed** through `bf3d9e4` (origin/master) and **DEPLOYED** — `dpl_BjtEEvJFPZt3gcDZ5562x5yUDPxc`,
aliased to migne.app. Smoke-tested: landing, both PL 175/196 works, Joel, /scripture/,
/queue/ all 200; **the 11058 @0270C correction is live and the old affirmative text is
gone** (grep-verified both directions). Joel's pending English fix shipped in the same
deploy. Polarity gate green 88/88 at deploy time.

### ✅ THE SONG-OF-SONGS RULING (Wilson, 2026-07-30) — the queue's biggest blocker
**Each commentary stands on its own. Do NOT harmonize a lemma across works.**
Wilson's reason: harmonizing would be **"editorializing Migne too much"** — sixteen
commentaries are sixteen acts of transmission, and one English imposed across them is
our hand pretending they are one edition.

Recorded in `translation-style.md` ("The Song of Songs — each commentary stands on its
own"), the runbook's Song-queue section, and 10804's cruces head (question closed).
Consequences, all already applied:
- **Nothing is swept.** 10804's *murenulae* and 10379's "chains of gold" are **both
  correct as they stand**. A future sweep must not "fix" either.
- **It is not a new principle** — Pattern 9 already says each work is faithful to its
  own plate (11057 adverbial sense labels vs 11063 adjectival, shipped that way
  deliberately).
- ⚠ **BOUNDARY, written into all three files:** this is ACROSS works only. Merge-time
  reconciliation WITHIN a work stays a required step (runbook 4) — one voice per work.
  Every multi-agent work so far has needed it (11551 *stylus*, 11063 labels, 10804
  *amica mea*, 11536 *turba*). Do not read "let each stand" as licence to skip it.
- **Unblocks the whole small tier**: 7914, 8930, 9033, 11638, 6963 + the big ones.

### 11065 LAUNCHED (in flight at session end — check `src/english/11065/`)
Hugh of St Victor, *Homiliae in Ecclesiasten* (PL 175, 113C–256C). **53 chunks,
62,318 Latin words, 127 notes, 20 units (preface + 19 homilies), 6 Opus agents**
split on homily boundaries and balanced by words: 0000–0008 / 0009–0018 / 0019–0027 /
0028–0036 / 0037–0044 / 0045–0052. ~1.05M tokens. Largest single work the project has
attempted (~93K English words). Badge = **"New"** (`workStatus: unclear`; partial
English exists — 1962 *Selected Spiritual Writings*, VTT selections). Cruces go to
`cruces-0000/0009/0019/0028/0037/0045.md`.

**⚠ THIS WORK'S DEFINING HAZARD, pre-set into every prompt:** Hugh quotes a verse in
one Latin version, then a **second different** version, and builds the exposition on
the difference — `aliam translationem` ×11, `nostra habet` ×11, `aliam
interpretationem` ×5, `Hebraeus` ×12, `LXX` ×3. Homily XII exists to expound *Oculi
stultorum in finibus terrae* against *nostra habet: Stultus in tenebris ambulat*. A
familiar English Ecclesiastes would collapse two versions into one wording and make
whole homilies incoherent. Also pre-set: *vanitas*→"vanity" (387×, the work's spine),
*Ecclesiastes* kept as the name (never "the Preacher"), *occupatio pessima*,
*distendi*→"distended", the sense-vocabulary. **This work prints NO ALLEGORICE./
MORALITER. labels** — checked; that convention question does not arise here.

**On completion:** merge + reconcile the 6 cruces files (required), `verify-english`,
step-4a polarity read, bio (Hugh exists), build + index, `polarity-record.mjs`, then
deploy needs its own OK.

## 2026-07-30 (tenth, Opus) — POLARITY READ COMPLETE: gate GREEN 88/88; one live defect fixed

**All 8 units of `data/sweeps/polarity-11058-11553/` ran blind on Opus.** 41/41 chunks.
11058: 19 chunks, 9 sites, 1 ours. 11553: 22 chunks, 5 sites, 1 ours. Both works
recorded; `polarity-record.mjs --gate` now exits 0 at **88/88 — every englished work
on the site has been read for this class**, the first time that has ever been true.
Commit `55337ca`.

### → DEPLOY IS OWED (needs Wilson's OK)
**11058's live page currently carries a defect that is fixed on disk.** `site/pl/175/
adnotatiunculae-in-threnos/index.html` was rebuilt + reindexed; migne.app still serves
the old text. Deploy per runbook step 8 — the gate (0) is green, so nothing blocks it
but the OK. Also still unshipped from the ninth session: **Joel's English fix**.

### The one live defect — 11058 @0270C, and why it matters more than its size
Migne prints *Quomodo obtexit, texitne superiora, hoc est coelestia videre posset.*
`ne` + subjunctive *posset* is a **negative purpose clause**. Our English quarantined
the garbled run as `[sic: *texitne*]` and then translated everything it governs
**affirmatively** — "it might be able to see" — so the page asserted that the covering
was so the soul MIGHT see the heavenly things, against Hugh's own preceding clause
(*lumen rationis … obscuratum est, non ablatum*) and the frame (*in tenebris
ignorantiae reliquit*). Now: "…[sic: *texitne*] lest it should be able to see…".

**The column was ALREADY logged as a crux.** Its justification — "the negative is
visibly present in the carried Latin" — was false: only the two letters *ne* were
inside the marker. **A crux that describes a repair does not make the repair honest,
and a logged column can look handled while the defect is live.** This is the subtlest
Pattern 7a case found so far and belongs in the rulebook's worked examples.

### Controls — why the two null units are trustworthy
- **11553-u2 found the planted @0553A–B unaided**, as its first flag in the chunk.
- **11553-u4 was deliberately left BLIND** although its range contains the known
  @0591B — an unannounced second control — and rediscovered it with **better evidence
  than the 07-29 leaked-prompt run could offer** (`Notandum` 24× across the work,
  `Nondum` exactly once, here; the *quia* clause has nothing to attach to).
- **11553-u1 and u3 returned `findings: []`** and proved they read by closing the
  work's arithmetic (25+10+25=60 vs *implebant cubitos sexaginta*; 3×8+5+5=34 vs the
  25-cubit breadth; 145+70=215; the 3-4-5 demonstration at 0574–0576).

### Two items RECORDED, deliberately NOT fixed — Wilson's call
1. **11553 @0551A** — our English makes the measuring-order what Scripture hints and
   the location the reason; the argument seems to want the reverse (*quod* clause =
   content of *innuit*), and Richard states the location as settled at 0551C. **Left
   as printed:** *Quam* is unaccounted for on either parse and `cruces-0014.md` has a
   comparable unresolvable *Quam autem …* at 0571D, so re-binding would assert a
   reading of a sentence that does not construe. **It inverts an inference, not a
   claim** — not a polarity defect. Logged in `cruces-0005.md`.
2. **11553 @0536D** — *totum hoc* made a co-subject rather than the object of
   *habere*. Same claim either way; a real mis-parse, in no cruces file before now.

⚠ The ledger's `ours` counter counts sites **found**, and the gate prints "found and
fixed" — 11553's 1 is found-not-fixed. Said so in that work's record note.

## 2026-07-30 (ninth, Fable) — PG PAIRED PILOT DESIGNED: `pg-paired-pilot.md` is the score

**No code, no ingest, no translation ran — by design.** This was the Fable-shaped
item 2 from the eighth session: the spec is written and cheaper sessions execute it.
Committed local. Nothing deployed, nothing on the site changed.

### What was written
1. **`pg-paired-pilot.md`** — the complete spec: verifier artifact
   (`src/pg-latin/<workKey>/`, committed, chunk-aligned 1:1 with the Greek — NOT
   `raw/`, NOT sibling files, for reasons stated in the file), harvest spec with
   sanity gates, **the attribution ladder** (§4 — when a finding is Calfa damage vs
   Greek/Latin divergence vs attributable-to-the-plate-pair; Greek+Latin concurrence
   now counts as two witnesses), pipeline diff vs the runbook, PG agent-prompt
   addendum, pilot slate, and the §8 gate questions that must be answered before
   Joel's backfill or any PG scale.
2. **`translation-style.md`** gained the **"Register (PG / Greek)"** section
   (codified from the Joel English, not invented — names, letter-numerals, LXX
   scripture policy, particles, silent-correction rule for Calfa damage) and
   **Pattern 16 `[lat: …]`** — the Greek/Latin divergence marker (material
   divergence only; Allatius's free rendering is NOT a divergence; numerals need
   the plate first; NOT retroactive — Joel gets its two markers at backfill).

### The pilot slate (three works, three genres, two volumes)
- **P1 Nicetas of Maroneia, Dial. I** + fragments (PG 139, 169–221) — dialogue/
  polemic, negation-dense, and a Filioque dialogue as the first paired work is the
  site's story writing itself. Verified `none` → can earn "First"; page must state
  the fragment situation.
- **P2 Isidore Glabas, Sermon I only** of the four Marian sermons (PG 139) —
  high-style homily. Verified `none`.
- **P3 one short lemma-and-gloss unit from PG 118** (Oecumenius corpus — Jude, or
  2–3 John if oversized) — the genre that dominates the future PG queue AND a
  second volume to prove the harvest generalizes. Unverified → badge "New", no
  hunting.
- Joel backfill + further queue additions stay **outputs** of the pilot (Wilson's
  07-29 ordering), gated on §8.

### Correction to the record — the Joel verifier EXISTS
`raw/verifier/joel-chronographia-latin.txt` (90KB, per-column-pair sections with
leaf + token hits) has been on disk since 2026-07-03. "Persisted nothing" was
wrong: it persisted **in gitignored `raw/`**, invisible and not chunk-aligned.
The format is the precedent for the twin files; the location was the bug. Memory
and CLAUDE.md's "Greek only" note updated accordingly.

### → NEXT (order matters)
1. **Polarity read on 11058 + 11553 — PARTIALLY RUN, 3 of 8 units done**
   (`11058-u2/u3/u4.json` on disk; commits `46724da`/`0f48659` — one NEW site
   found blind, @0275D legali/regali, proving the read earns its cost). The
   eighth session's "did not run" is superseded. Remaining: 11058 u1 + all four
   11553 units (0010–0013 = done-but-unrecorded per the eighth note); Opus,
   hard-stop for the remainder; then `polarity-record.mjs` per work.
2. **Sonnet: execute `pg-paired-pilot.md` §2–3** — harvest PG 139 (Maroneia +
   Glabas ranges) and PG 118 (locate the Jude unit, build its column map +
   registry entry), commit twins. Cheap, no hard-stop; report harvest stats.
3. **Fable: chunk `0000` of each pilot work** (three new genres → three style
   anchors, runbook model policy) — then **Opus takes the remainders**, per-launch
   hard-stops with real numbers computed from the harvest.
4. **Fable reads the pilots' findings against §8**, then: Joel backfill spec, PG
   queue additions, runbook merge.
5. Unchanged from the eighth session: 10083/9604 decisions, Joel's English fix
   built-not-deployed, translation queue at 13 PL works (7914 waits on the
   Song-of-Songs lemma ruling), `9637 Ordo` Fable mini-pilot, real-word-typo
   convention owed by Wilson.

## 2026-07-29 (eighth) — 2 works (41 ch); Knox on "Englishing"; the [sic:] claim softened; badge-integrity defect found and fixed

### → START HERE: the polarity read is OWED on 11058 and 11553 — ATTEMPTED AND DID NOT RUN
`polarity-record.mjs --gate` is **RED** for both, and they were **DEPLOYED ANYWAY**
on Wilson's explicit call (deploy now, blind read later). Per runbook step 8(0) that is
permitted only if said plainly, so: **two works are live that have not had the step-4a
blind polarity read.**

**It was attempted 2026-07-29 and never got off the ground: eight units designed, six
launched, and every launch — plus one resume after a 150s backoff — died instantly on
`API 529 Overloaded`. Seven consecutive failures, no agent read a line, nothing partial.
Wilson stopped the launching.** Three resumed units were still in flight at that moment;
**check `data/sweeps/polarity-11058-11553/` for JSON before relaunching anything** — any
unit file present is done, the rest are not.

**Everything needed to run it is written down:**
`data/sweeps/polarity-11058-11553/README.md` — unit table (8 units), what coverage
already exists and must NOT be mistaken for this read, the known sites to use as
controls, and expected yield by genre.
`data/sweeps/polarity-11058-11553/PROMPT.md` — the complete reusable agent prompt.
**Do not rebuild either. Change only the unit assignment and output path.**

- 41 chunks, ~0.5M tokens, Opus, ≤6 parallel, **hard-stop applies** — get "which model,
  and go?"
- Coverage is NOT zero but it is NOT the step-4a read either. Each translation agent
  checked negation fidelity **on its own output**, the weakest form of the check (the
  runbook's own rule: a prior pass does not cover this class). The ONE range with a
  genuine independent read is **11553 0010–0013**, audited after its agent stalled —
  no silent repair found, negation ledger recorded. Treat 0010–0013 as
  done-but-unrecorded and everything else as unread.
- Expect yield: 11058 is lemma-and-gloss (the richest genre in the sweep's data),
  11553 is measurement-dense exposition in **PL 196, the dropped-negative volume**.

### What shipped
**11058** Hugh, *Adnotatiunculae in Threnos* (PL 175, 19 ch) · **11553** Richard,
*In visionem Ezechielis* (PL 196, 22 ch). 9 Opus agents. verify-english OK on both.
Site now **88 english pages**. Both earn **"First English translation"** honestly
(verified `none`, no hunting).

Defects rendered literally, not smoothed: **11058 @0317B** dropped negation (virgins
*because they corrupt* the faith); **11553 @0553A–B** dropped `non` — **7th of the
PL 196 cluster**; **11553 @0591B** `Nondum` for `Notandum`; **11553 @0559A + @0560B**
`quadraginta` for `sexaginta` — **the corruption PROPAGATES across two adjacent
columns**, so suspect a corrupt exemplar behind that stint, not one slip.

### THE BADGE DEFECT — read this before touching works.json
Shipping used to flip `workStatus` to `ours` as well as `englishState`, and
`build-landing` read `ours` as a First claim. So **the routine act of shipping
overwrote the evidence field rule 8's fail-safe reads, routing around the fail-safe.**
Rule 8 was written against *absence* of evidence; it had no answer to evidence being
*destroyed*, because a destroyed value does not look absent — it looks affirmative.

Audited all 78 First claims against git history (15 commits of works.json) + the
independent `data/triage/perwork/result-*.json` records: **77 earned it, 0 had prior
English, 1 did not** — **Abbo's *Canones* (4712/9741), the pilot work and style
anchor**, `workStatus: null` through six commits then flipped straight to `ours`,
while the author register carries Abbo as `minimal`/unverified. **It was live claiming
priority.** Now reads "New", downgraded by restoring the null per rule 8 (never by
researching); a `badgeNote` says why — **do not tidy that null into a `none`.**
All 49 ever-flipped works restored (48 `none`, 1 null); `ours` added to
`NOT_VERIFIED_NONE`. Verified per-work, not by counts: exactly one already-live badge
moved. Convention now in **CLAUDE.md rule 8** and **runbook step 7a**.

### The `[sic:]` attribution, softened (Wilson's ruling)
Our PL is a **2019 Corpus Corporum transcription**, our PG the Calfa corpus — both
OCR-derived. Measured across all 5,276 PL files: ~95 n/u confusions (`qnod`, `euim`,
`Domiuus`, `antem`) plus 19 that only optics explain (`Eeclesia`, `seeundum`, `cst`,
`aulem`, `esi`). **`Domiuus` is no compositor's sort and no typist's slip; it is a
scanner's.** So a defect in our files cannot be attributed to Migne's plate — the PL
analogue of the standing PG rule. 375 `[sic:]` markers across 36 works were claiming
it. Pattern 12 retitled *"the defect is not ours"*; tooltips now say **"Printed thus
in the source text."** `/method` gained the disclosure that we work from a
transcription, the commitment to re-verify against page images as machine reading
gets cheaper, and Wilson's close: *there will be errors here that are neither ours
nor Migne's, and that is the journey of transcription and translation.*
**The marker's meaning and usage did NOT change — only the provenance claim. Nothing
needs re-marking.**

### Also done
- **Knox on "Englishing"** — `/method` has a section on the word (MED *englishen*,
  15c; Knox, *On Englishing the Bible*, 1949) and, better, Knox's **Acts xvii.6
  `urbem`/`orbem`** case as a precedent for Pattern 7: he knew the true reading,
  printed it at the foot of the page, and translated the corrupt one — *"it is no
  part of the translator's business to alter, on however good grounds, his
  original."* Scan read locally, not committed (Zelzer).
- **`[nt: …]` is Pattern 15**, not a second Pattern 14 (`[var: …]` keeps 14 — 6
  references, 4 of them in code).
- Merge reconciliation: 11058 sense labels → adjective series; **11553 chapter heads
  swept `CAPUT` → `CHAPTER`** across 13 chunks (drift the pre-set vocabulary could
  not pre-empt); *peribolus* → "enclosure", *cathetus* unified.
- **Pre-setting vocabulary WORKS.** Fixing 11553's architectural terms in the launch
  prompts meant five agents produced one consistent building — zero post-hoc
  reconciliation, against 3-of-3 works needing it last week. **Do this every time.**
- Resolver handles **band-less anchors** (`[0533]`); PL 100 col 663 is the shipped
  precedent. Question closed, do not reopen.
- **Two agents died on infrastructure** (API connection drop; 600s watchdog stall) and
  both were recovered by **resuming from transcript with the failure named** — no
  re-translation. The runbook's recovery note only covers *self-throttling*; worth
  generalizing.

### → NEXT
1. **Polarity read on 11058 + 11553** (above). Then `polarity-record.mjs` per work.
2. **Then change tracks: PG PAIRED PILOT — Fable.** Confirmed against the rubric
   (Q1 conventions-govern-future-sessions; Q4 pilot-before-volume; tier map "Press
   pilots… applies to Patrologia"; and it is item 3 on the front-load list).
   **Fable does:** how Greek+Latin ingest as a mutually-confirming pair, the verifier
   contract, what a Greek/Latin divergence note looks like on the page (PLAN.md rule
   6's "scholarly gold" — we can currently produce none), a Greek register section for
   `translation-style.md`, and which works to pilot. **Fable does NOT do:** harvesters,
   column-mapping code, ingest runs, translation batches — all Opus or cheaper, off a
   written spec. **Ordering note for Wilson:** "add PG texts to the queue" must be an
   OUTPUT of the pilot, not an input — only Joel is in hand, there is no Latin twin for
   anything, and chunking Greek-only texts now is exactly the build-against-assumptions
   his 07-29 ruling forbids.
3. `9637 Ordo` — still a Fable mini-pilot, still deliberately skipped, now the 2nd
   Fable-shaped item queued.
4. Translation queue **13 works**; next tier 7914 (23 ch) — **settle the
   Song-of-Songs lemma-harmonization question first**, still undecided.
5. Wilson still owes: the **real-word-typo convention** (11553 @0540B `Ei` for `Et`;
   11081 @0030B `munde` for `mundo`) — Pattern 7 keeps producing English that reads
   as our error in the one case Pattern 12 does not cover.

## 2026-07-28 (seventh) — CORPUS POLARITY SWEEP COMPLETE: 89 units, 178 sites, 24 of our own fixed

**NOT deployed.** Commit `54567ed`. **Deploy is owed and needs Wilson's OK** — it must
carry the 14 works fixed here AND 11536 + 11547 from the sixth session, which were
fixed/rebuilt then and never shipped.

### What ran
Every unit of `data/sweeps/NEXT-SESSION-BRIEF.md`, blind, Opus throughout, 6 agents per
round. **68 works · 454 chunks · 178 sites.** Nothing skipped, sampled, or truncated.
Full write-up: `data/sweeps/corpus-polarity/REPORT.md` and `PROGRESS.md`.

- side: **Migne 152 · ours 26** · confidence: high 55 / medium 92 / low 31
- types: sense-reversing-letter 76 · dropped-word 38 · dropped-non 31 · added-negative 30
- **18 works completely clean**

### The finding is the DISTRIBUTION, not the average
**11064 alone = 41 sites (23% of the total). 11064 + 11066 = 36% of all sites and 10 of
the 26 ours.** Everything else runs 0–9. The brief's hypothesis is confirmed: the
earliest, largest translations done under the withdrawn "intended reading" precedent
carry the damage. **Do not plan future work off the corpus average.**

### The silent repair is a CLASS, not a lapse — 8625 is the proof
**8625 @0940B**: Migne prints `fuscatur` ("is darkened"); our English read "**is
cleansed**." The exact opposite verb, chosen because baptism is the subject. Different
volume, century, and translator's stint from 11547's `azyma`→"leaven". It is what
happens whenever a translator meets a defective plate with no rule to stop and log it.
Now restored to the literal reading + crux. **Undoing a silent repair is a fix.**

Five distinct mechanisms by which OUR English inverts sense, all found blind:
opposite word substituted · printed negation dropped · **connective smoothed** (a second
`sed` rendered "yet", 8777 @0191B — leaves no lexical trace, ungreppable) · comparative
reversed · reference/agency mis-bound (`qui`/`cui` 8708, pronoun binding 11086, ablative
agent 11208).

### TWO of the 26 deliberately NOT edited — need Wilson's call
- **10083 @0493D** — our English is already literal to the plate (`requiescere faciam`).
  Changing it to Hosea's `quiescere` sense would be a silent emendation. Crux logged.
- **9604 @1347D** — the printed Latin is itself corrupt and construes neither way.
  Emend openly or mark `[sic]`?

### Method findings — reusable
1. **Blind works.** 178 sites where PL 196's cruces-first stage-1 returned "nothing new"
   for 17 straight works.
2. **False-positive discipline held across 89 units.** Agents rejected authorial chiasms,
   an attested `nullus`-for-`ullus` idiom, `lux` = "this present life", a passage
   treating BOTH arrangements of Peter and Paul, and a suspected dropped `non` that
   grammar refuted (concessive `sed` needs an affirmative). **Findings not made are as
   much the result as findings made.**
3. **Genre predicts yield.** Lemma-and-gloss commentaries are richest (author quotes his
   lemma twice, so the plate supplies its own contradicting neighbour). Terse aphorism
   collections next — 8195 gave 7 sites in 3 chunks; a maxim missing its `non` still
   sounds like a maxim. Annals/charters/regnal lists are nearly immune.
4. Schema: agents independently needed `inversion` and `misplaced-negative` beyond the
   four original types. Apparatus-supported defects (21413 @0666B, Migne's own `F.` reads
   correctly against his text) deserve their own tier — that is better evidence than a
   conjecture, and it was scored *down* for it.
5. `scripts/build-polarity-report.mjs` is idempotent; `--cruces` refreshes rather than
   stacks. Re-run it after any further fixes.

### → NEXT SESSION

0b. **`[var: …]` (Pattern 14) is NEW and NOT retroactive.** Added 2026-07-29 for
   scripture citations where Migne's text diverges from the received text — the
   category that had no marker (10083 @0493D forced it: `requiescere` for Hosea 1:4's
   `quiescere`, turning a vengeance oracle into a promise of rest inside an argument
   about *vindictam Dei et furorem*). **Applied to 10083 only.** The corpus has NOT
   been swept for the class, and the polarity sweep deliberately excluded scripture
   divergence, so **assume unmarked divergences remain across all 86 shipped works** —
   and never read the absence of a `[var: …]` as evidence that a citation agrees with
   the Vulgate. Wilson's call 2026-07-29: add the category now, do not re-run the
   corpus. A sweep is available whenever wanted; the scripture index (`data/index/`)
   is the obvious feeder, since every `[n: …]` is already keyed by book/chapter.

0. **HARVEST MIGNE'S LATIN COLUMN FOR PG — blocks all further PG work.** `sources/pg/`
   holds only the Calfa Greek corpus; there is no Latin twin for any PG work, so the
   Zelzer inline verifier that PLAN.md rules 4 and 6 both require **does not persist in
   this repo**. The 2026-07-03 pilot read it ad-hoc off the scan `djvu.xml` (Allatius)
   — that worked, but left nothing behind, so the 2026-07-28 polarity sweep of Joel had
   no verifier at all and read Greek against English blind. Two consequences, both live:
   - **No PG finding can be attributed to Migne's plate.** Joel's 0272 (`δυσσεβῆ` for
     `εὐσεβῆ`) and 0236 (`τὸ πονηρόν` for `τὸ εὐθές`) are recorded as provisional; the
     Calfa transcription is heavily OCR-damaged (`Κφιε` for `Κύριε`, `ἐβασθευσε`,
     mangled numerals), so a bad Greek reading is evidence about **our source file**
     first. One look at the Latin column would settle both.
   - **PG translation must not scale until this is fixed** — every future Greek-side
     crux inherits the same provisional attribution, and the Greek-vs-Latin divergence
     notes PLAN.md rule 6 calls "scholarly gold" cannot be produced at all without the
     pair. (The two known PG 139 divergences from the 2026-07-03 pilot — Joram βʹ vs
     *duodecim*, Michael VII ζʹ vs *sex* — were found against a SCAN, not a harvested
     column, and still await Wilson's ratification.)
   **Wilson's call, 2026-07-29 — the order is PILOT, THEN BACKFILL.** Do **not** start by
   backfilling Latin onto the Greek already in hand. **Pilot a few more PG works with
   Greek and Latin ingested TOGETHER, so the two columns confirm each other**, and let
   those pilots surface the problems we cannot predict yet — tooling built now would be
   built against assumptions. Joel/PG 139 gets its Latin backfilled *after* the paired
   pilots, not before; its two provisional findings simply wait.

   Why paired beats backfill: a backfill can only check a corpus already committed to.
   Ingesting both columns makes them mutually corroborating from the start — Calfa's
   OCR damage is caught by the Latin, and a real plate defect surfaces as a Greek/Latin
   **divergence** (the "scholarly gold" of PLAN.md rule 6) rather than an
   unfalsifiable suspicion about our own source file.

   Starting points when it begins: 162 PG volume scans are registered in
   `data/volumes.json`; `scripts/pg-page-column-map.mjs` plus the two `gapfill-pg-*.mjs`
   harvesters exist. Known gotchas from the 2026-07-03 pilot, all still live: Calfa `$8`
   = PDF page not column; Greek and Latin swap sides every page; scan-leaf↔PDF-page
   offset DRIFTS within a volume (PG 139 tail +2), so column-map verification must use
   distinctive tokens.
1. **Deploy** (needs Wilson's OK): 14 works fixed here + 11536/11547 from last session.
2. Decide 10083 and 9604 above.
3. `data/sweeps/corpus-polarity/OUT-OF-SCOPE-NOTES.md` holds real defects outside this
   sweep's class — 11088's bad plate throughout chunks 0000–0007, a "Conrad II" for
   Conrad III heading, `claritatis` for `charitatis`, our own `secus` (= "sex") read as
   an adverb. None fixed; none are polarity.
4. Translation queue untouched at **15 works**; next tier 11058 (19 ch), 11553 (22),
   7914 (23). **Settle the Song-of-Songs lemma-harmonization question before 7914** —
   and note 10379's own prologue defect found here (@1362B `nomine` for `nemine`).
5. `9637 Ordo` still a Fable mini-pilot, not an Opus batch.

## 2026-07-28 (sixth) — PL 196 polarity sweep: 29 sites, TWO of them ours; corpus sweep set up for next session

**NOT deployed.** Commits `162fb80` (rules), `d2a4c7c` (sweep). Site still 86 english pages — but **two published pages changed**, so this needs a deploy.

### → START HERE NEXT SESSION: `data/sweeps/NEXT-SESSION-BRIEF.md`
Wilson approved the **full corpus polarity sweep, Opus throughout**: 68 works, 454 chunks, ~510K Latin words, **89 agent units, ~15 rounds of 6, ~5.4M subagent tokens**. The brief has the complete unit table, the prompt to reuse, and the rules. **Start with PL 175/176** — largest and earliest-translated, done under the withdrawn "intended reading" precedent. **Fix policy (Wilson): our errors are FIXED in place; Migne's are REPORTED and rendered literally.**

### What the PL 196 sweep found — 29 sites across 12 of 17 works (5 clean)
Full inventory: `data/sweeps/pl196-polarity/REPORT.md`; per-work sections appended to 11 `cruces.md` files (11545's was created). Types: dropped `non`/`nisi` 7 · intrusive negative 8 · sense-reversing letter 12 · dropped word 2. **The class runs BOTH directions**, so the negation-only framing I started with would have caught about half. 11536 and 11551 hold 7 sites each — half the volume between them.

### The two that were OURS, not Migne's — both live, both fixed
1. **11536 @1085D** — Migne prints *haud digne tali nomine censetur*; our English read "**is** worthily reckoned by such a name". The `haud` was simply dropped, inverting a sentence whose own next clause denies it.
2. **11547 @0260D** — Migne prints `nolebat` where his own previous clause has `volebat`. Faced with "he did not wish them to have *unleavened bread*", the translator rendered *azyma* as "**leaven**" — the opposite word — and the sentence read smoothly. **The plate defect was concealed, not corrected.**

**#2 is the important one.** An open emendation announces itself; a repair made inside the translation leaves a clean page, a passing `verify-english`, and no trace. It survived the 2026-07-28 corpus-wide emendation sweep because that sweep read `cruces.md` files and this repair had never been logged as a crux. **This is why the corpus sweep is worth 5.4M tokens.**

### Rules locked in (commit `162fb80`) — the durable part
- **`translation-style.md` 7a — "The silent repair"**: a word may not be translated as its opposite to rescue a sentence; every printed negation appears in the English and none that is not printed; a crux does not license an under-rendering; both worked cases written up.
- **`translation-runbook.md` step 4a** — polarity check is a REQUIRED reading pass, with the do-not-read-cruces-first rule.
- **Agent prompt template** — negation-fidelity clause.

### Two method findings — do not re-derive them
1. **Two-tier (cheap finder → expensive verifier) FAILED for defect hunting.** Sonnet swept all 82 chunks and returned "all already logged, nothing new" for every work. A blind Opus control on four works it had cleared found **4 live defects**; the full Opus re-read found **11 sites Sonnet missed (38%)**. Cheap-wide-net assumes the cheap tier over-reports and the expensive tier filters — here the failure mode was false negatives, and a verifier can only adjudicate what it is handed.
2. **A checker that reads `cruces.md` first returns only what is already logged.** Every stage-1 agent did; every one found nothing new. Blind readers on the same works did. **Form findings first, reconcile after.**
3. **Mechanical detection does not work.** Counting negation particles across the pair flags faithful paragraphs (*nisi* → "save", *non moritur* → "dies no more") AND scored the confirmed 11536/1085D case **clean**. Do not build it again.

### Also
- **11543 @1188D is NOT a defect** — `homo [non] possit` is Migne's own bracketed supplement, carried faithfully as `[not]`. Recorded so the next sweep does not re-raise it. It is also evidence *for* the pattern: the 19th-century editors were patching dropped negatives in this volume themselves.
- **Deploy owed**: 11536 and 11547 rebuilt + reindexed; their published pages changed.

### → NEXT SESSION
1. **Run the corpus sweep** — `data/sweeps/NEXT-SESSION-BRIEF.md`. Hard-stop already cleared by Wilson for the full Opus run.
2. **Deploy** the two corrected works (and anything the sweep fixes).
3. Translation queue is untouched at **15 works**; next tier 11058 (19 ch), 11553 (22), 7914 (23). **Settle the Song-of-Songs lemma-harmonization question before 7914.**
4. `9637 Ordo` still a Fable mini-pilot, not an Opus batch.

## 2026-07-28 (fifth) — 3 works (50 chunks) translated + STAGED; false-positive block added to the prompt; verify-english dedupe bug fixed

**NOT deployed** (commits `951dcbf`, `89a6b13`). Site now **86 english pages**. Queue: **15 works** still pre-chunked. decade-check at 86: **nothing blocking**.

### The 3 new works — all Opus, 6 agents, 50 chunks (~1.24M subagent tokens)
11088 PL 176 Hugh *Expositio in regulam S. Augustini* (16) · 11536 PL 196 Richard *De exterminatione mali et promotione boni* (17) · 10804 PL 164 Bruno of Segni *Expositio in Cantica canticorum* (17). Badges: 11088 + 10804 "First" (verified `none`), 11536 "New" (`unclear`). **Bruno of Segni bio added** — c. 1045–1123, dates verified against two independent sources.

### The known-false-positives block WORKS — put it in every prompt from now on
`translation-runbook.md`'s prompt template now carries a **"Known false positives — do NOT report these"** block (7 settled classes). Result this batch, against three band-arithmetic false alarms in the previous one: **zero false alarms in six agents.** Two agents explicitly closed with "investigated and left alone" lists naming anchor recursions they correctly did not report. And the escape hatch worked as intended — the 11088 agent flagged a **genuine** mid-construction break AS an exception with the required evidence (0883A, verified at merge), rather than suppressing it.

### Splitting a work across agents drifted terminology in ALL THREE works
Every one of the three needed a merge-time reconciliation. This is now a required pipeline step (runbook step 4), not a tidy-up:
1. **11088 — *praepositus*: "superior" vs "prior".** Unified to **prior**. Hugh closes ch. XI with *qui inter vos quanto in loco superiori, tanto in majori periculo versatur* (0922D), where an office called "superior" collides with "the higher place" in its own clause; two further ordinary comparatives sit nearby.
2. **10804 — *amica mea*: "my beloved" vs "my friend".** Unified to **friend**. Bruno lists *dilectus meus, sponsus meus, amicus meus* in one phrase, and *dilecta* (13×) owns "beloved"; at 1269C the Song's word is masculine *amicus*, glossed with John 15:13. 11 instances converted per-instance (most "my beloved" in the work correctly render *dilectus* and had to be left).
3. **11536 — *turba*: "crowd" vs "throng".** Unified to **throng**, 13 instances.
**Gotcha for future sweeps:** a substring grep for `turba` in 11536 reports 31 hits in chunks 0000–0005 and **every one is a false positive** — they are the verb *turbare* / noun *turbatio*. Match `\bturb(a|am|ae|is|as)\b`. I got this wrong first pass and reported four-way drift that did not exist.

### `verify-english.mjs` dedupe bug — FIXED, and it was silently mis-shaped
The Latin-side dup map keyed on `new Set(locs).size > 1`, i.e. the set of FILENAMES. A Latin paragraph repeated twice **inside one chunk** collapses to size 1 and never entered `latDupPairs` — while the English side counts raw occurrences and does flag it. Net: cross-chunk repetitions were excused, **within-chunk ones could never be** — and within-chunk is the normal shape of a lemma-and-gloss commentary, which is most of the remaining queue. Found by 11088/0002, where Migne quotes the Rule clause *Omnes ergo unanimiter et concorditer vivite…* three times (full, fragment, full) and the English mirrored it 1:1. Now counts occurrences; regression-checked against 11063/11551/11057/7561.

### Open flags for Wilson
1. **THE SONG-OF-SONGS CONVENTION — needs a ruling before the next Song work.** Bruno keeps ***murenulae*** in italic Latin (he glosses it etymologically from the fish *murena*); 10379 Robert of Tombelaine, already LIVE, renders the same lemma "chains of gold". Fifteen more Song commentaries follow. Settled already: where the printed Latin DIFFERS the English must differ (scripture policy), and where a gloss depends on the word the Latin stands (the *stylus*/*epistylium* precedent). **Undecided: where the printed Latin is identical and no gloss depends on it** — harmonize across commentaries, or let each stand? Deliberately NOT harmonized in either direction pending your call. Full statement at the head of `src/english/10804/cruces.md`.
2. **The PL 196 negation defect is now SIX instances across five works, running BOTH directions** — 11536 @1106D (dropped `non`) and @1097D (`noluit` for `voluit`), after 11534 @1054A, 11537 @1069D, 11531 @1000D, 11551 @0230A. Every one inverts a doctrinal or argumentative claim. It looks like a property of how PL 196 was set. **Worth a targeted sweep** (mechanically findable: a clause whose *nam*/*sed*/*quia* neighbour contradicts its polarity) rather than catching them one work at a time.
3. **11088 @0883A — a genuine displaced line of type, and a strong `tei-patches/11088.json` candidate.** `Sunt quidam in congregatione [0883A] beamus. Et ideo praecipit ut unanimes habitemus obstinati in suo sensu…` — a line sits wedged inside the sentence about the obstinate. It falls **exactly at a column head**, which is characteristic of TRANSCRIPTION line-order error rather than Migne's compositor (the 11085 shape). Needs the PL 176 plate; scan-reading deliberately not attempted per the 11055 precedent. Literal rendering is correct either way.
4. **The inline-citation class keeps growing — now ~6 corpus-wide.** 10804 @1265A–B sets a Psalm citation as inline italic running text with a column anchor *inside* it (`*(Psal. [1265B] LXIII, 7)*`), plus the three in 11057 and the old 7020. They reach no index. The fix is the same shape as the `[f:]` harvest.
5. **10804's type-damage cluster** — *Eeclesia*, *Ecelesia*, *beatitudiuem*, *Sio* (cols 1240–1255) and *augustia* for *angustia* (1285B): five inverted-sort errors that look like ONE damaged case used through the gathering, not five independent slips. Worth a plate check if one is ever made.
6. **10804 @1260B — *lignum vetitum*** ("the forbidden tree, that is, Christ") where the argument requires *lignum vitae*; **@1268A** the lemma drops *aureae* while the gloss *Cur autem aureae* depends on it. Both read as our errors.
7. **`headnotes[]` carries empty entries corpus-wide** — 36 of 10804's 498, 143 of 9076's 598. Pre-existing, not new, and the bucket feeds `build-rights.mjs`; noted only so it is not rediscovered as a fresh bug. NOT investigated.
8. **Bruno's Song commentary is not named in the standard surveys of his exegetical work** (they list Pentateuch, Job, Psalms, Gospels, Apocalypse). No scholarship found either affirming or questioning this attribution; per rule 8 no hunt was opened. We print the byline Migne prints.
9. **Bracket overload still unresolved** (carried forward).

### → NEXT SESSION
1. **Resume smallest-first** — 15 works left. Next: 11058 Hugh *Adnotatiunculae in Threnos* (19 ch), 11553 Richard *In visionem Ezechielis* (22), 7914 ps.-Cassiodorus *In Cantica* (23), 9033 Angelomus (27), 8930 Rabanus (27). **Settle flag 1 before the next Song work (7914).**
2. **`9637 Ordo ad regem benedicendum` — still a Fable mini-pilot, not an Opus batch.** Now the smallest thing in the queue (2 ch), so it will keep surfacing as "next"; deliberately skipped, not overlooked.
3. Run `decade-check.mjs` at the next decade boundary (89 works — 3 away).
4. **Link migne.app back from the Acta methodology page** (carried, still owed).

## 2026-07-28 (fourth) — queue reconciled; 4 works (46 chunks) translated + STAGED; `[nt:]` + tei-patches enter the rulebook

**NOT deployed** (commits `52b29b3`, `c4e8da7`). Site now **83 english pages**. Queue: **18 works** still pre-chunked in `src/latin/`.

### The queue was audited against what has shipped — it is NOT stale
`build-queue.mjs` derives its list from `src/latin/` minus `src/english/` at build time, so it cannot drift from reality: 22 rows on the page, 22 works on disk, and **no mismatch anywhere** between `works.json` `englishState` and the actual English chunks (checked both directions). The 2026-07-10 "triage snapshot goes stale" trap has not recurred. **Two things that WERE stale, both fixed:**
1. This file's standing instruction to *"verify 11556's none-status before it re-enters the queue"* — dead since CLAUDE.md rule 8 was rewritten later that same day. Verification gates the BADGE, not the queue. 11556 was translated this session and correctly badges "New" (its `workStatus` is `unclear`).
2. `translation-runbook.md`'s Song-of-Songs table still listed 7383, 11062, 21413, 11321, 7871 as pending; **all five had shipped.** Trimmed, with a line stating that `/queue/` is the live list and that table is not.

### The 4 new works — smallest-first, all Opus (7 agents, 46 chunks, ~1.27M subagent tokens)
11556 PL 196 Richard *Sermo de missione Spiritus Sancti* (5) · 11063 PL 175 Hugh *Expositio in Abdiam* (11) · 11551 PL 196 Richard *Expositio de tabernaculo* (15) · 11057 PL 175 Hugh *Adnotatiunculae in Joelem* (15).
- **verify-english OK on all 4**; built + indexed; **0 unparsed corpus-wide**. works.json flipped to `ours` BEFORE the page builds. decade-check at 83: **nothing blocking**. Badges verified per work on the built landing: 11057 + 11063 "First" (verified `none`), 11551 + 11556 "New" (`unclear`, fail-safe working).
- Aliases added to `index-work.mjs`: **I/II Paral. + I/II Paralip.** (Chronicles — 11551 alone uses two of the three forms), **II Thes.** (single s), **Osee / Oseae** (the genitive Migne prints for Hosea).

### Two conventions entered `translation-style.md` — they had lived only in this file
**Pattern 14 `[nt: …]`** (a note that is prose is translated; a citation stays `[n:]`; judge by content, not length) and a new **Source patches** section for `data/tei-patches/` (corrects the MARKUP, never the words; prove it before patching; patches fail loudly; a defect in *Migne* is Pattern 7's business and is never patched). Also: the runbook's sacred-marker list had never learned `[d:]`, `[sic:]`, `[ed:]` or `[nt:]` — every agent prompt was silently a rulebook behind. Fixed; this batch was the first to inherit them.

### Splitting a work across two agents produces convention drift — check it at merge, every time
Three of the four works came back from two agents each. **Two disagreed, one materially:**
1. **11551 — the tail anglicized the column's members** to "epistyle"/"shaft" while the first half kept ***stylus* / *epistylium*** in italic Latin. Richard argues that vocabulary *etymologically* at 0233A — *epistylium dici non solet nisi quod stylo inhaeret* — and an English pair sharing no root makes the sentence explaining the name stop explaining anything. **22 instances converted to Latin at merge.** Related distinctions confirmed and documented: *capitellum* → "capital" (standard English, no etymological load), and "shaft" reserved for the LAMPSTAND's shaft in chunk 0000, a different object.
2. **11063 — `ALLEGORICALLY.` vs `ALLEGORICAL.`** for the same `ALLEGORICE.`; unified to the adjective so the three sense labels read as one series.
3. **11057 keeps ADVERB labels** (ALLEGORICALLY. / HISTORICALLY. / MORALLY.) because *its* plate prints adverbs throughout. Each work is faithful to its own plate, which is what Pattern 9 intends — **but two adjacent Hugh commentaries now label their senses differently on the site. Wilson's call whether that is fidelity or noise.** Recorded at the head of both cruces files rather than silently harmonized.

All three merged `cruces.md` files open with a **work-wide conventions section** stating the fixed terminology, so a later sweep does not churn them.

### The band-arithmetic false alarm is these agents' most common error — 3 of 4 works produced one
Agents reported "column band skipped / anchor out of band" and proposed plate checks, `tei-patches` entries, and a Pattern 13 `[ed:]` — **11556 ×2 (1018D, 1031A→1032A), 11063 ×1 (0405A→0406A)**. All overruled as the documented do-not-reopen class (Migne's A–D marks are positional quarter-guides transcribed where they appear, NOT four per column; the column number is what increments). Text continuity was checked in each case — e.g. *quae hominem illecebris captum in [0406A] servitutem redigit*, continuous. All struck through in the cruces files with DO-NOT-FIX and the reasoning.
- **A do-not-report paragraph for this class was added to the launch prompts mid-session** and the two agents that got it produced zero false alarms. **Fold it into the runbook's permanent prompt template.**
- **One anchor anomaly is REAL and was confirmed against the Latin:** 11551's chunk 0010 runs `0240D → 0241A → 0242A`, then 0011 opens `0241 → 0241B → 0241C → 0241D → 0242B`. **Column 241 genuinely recurs** — a table set across the tops of both columns with the prose resuming below. Nothing reordered.

### Open flags for Wilson (none blocking)
1. **A fourth dropped negative in this stretch of PL 196** — 11551 @0230A (a probable dropped `non`, making Richard call superfluous a specification he immediately builds on), after 11534 @1054A, 11537 @1069D, 11531 @1000D. **Four in one stretch of one volume is no longer coincidence** — it may be a property of this printing and may deserve a targeted sweep rather than catching them one work at a time.
2. **11551 @0221B `Nec arula … inferebatur`** — as printed Richard denies what he concludes eight lines later; likely *Nam* for *Nec*. Rendered literally, so the page states the opposite of his argument. Highest-stakes single word in the batch.
3. **11063 @0376D `vanitatem` for `unitatem`** — "I do not confound the *emptiness* of nature" in a sentence warning against dividing the unity of the divine essence. A Trinitarian claim inverted by one letter.
4. **The inline-citation class is now 4 corpus-wide and clustering** — `(Job X)` @11057/0345C, `(Luc. XXII)` @0353D, `(Apoc. XXI)` @0370B (in two of these the column anchor falls *inside* the citation), plus the old 7020/0074D. Migne prints them in running text with no `[n:]` wrapper, so they reach no index. Three in ONE work changes the arithmetic that said "only 1 case, don't build a harvester." **The fix is the same shape as the `[f:]` harvest.**
5. **Sentence-initial lowercase carried literally** — 11057 `tuere` @0330D, `illyricum` @0341C. Pattern 7 governs by the agent's reasoning (English *does* have capitals, so Pattern 9's "no English exponent" exemption fails), but Pattern 8 already puts *punctuation* under "follows the plate" and capitalization is arguably the same species. Reads as our typo. Same family as the `munde`/`mundo` complaint. If normalized, both sweep together.
6. **11551 is overwhelmingly numerical damage** — Jehu "ten and eight years" against his own table's `xxviii` at 0247; `Joas filius Jehu` where the next two sentences say *Joachas*, making Joas his own father; `Achab filius Joathan` ×7 for Achaz. All as printed, which is also the most defensible call: the disagreements ARE the evidence.
7. **11056 `[sic: *amplectanda*]`** — flagged by its own agent: an a/e swap in a gerundive stem may be an attested variant (Pattern 9) rather than broken type. The one marker in that batch worth confirming. *(Recorded on 11057 @0349B.)*
8. **11063 @0396B `Achartumnam`** — a non-word where Jerome on Obad. 19 has the *Daroma*. If recoverable from Jerome, it is a `tei-patches/11063.json` case, not a crux.
9. **11556 @1024B/1024C — a clean citation TRANSPOSITION**: `(Psal. CXVIII)` sits on Ps. 84:9 and `(Psal. XCIII)` on Ps. 118:103. The two notes appear swapped rather than independently wrong. A `citation-corrections.json` candidate — but correcting a *pair* is a different act from correcting one bad key, so it is left for a ruling.
10. ~~**11063's opening anchors run backward**~~ **RESOLVED at deploy — both works are correct, do not reopen.** Joel (11057) and Abdias (11063) really do occupy the same columns 371–372, and they **interleave by BAND, not by column**: Joel holds `371a 371b 372a 372b`, Abdias holds `371c 371d 372c 372d`. Checked against `site/resolver-data.json`: the two works share **zero** anchors, so no citation in either is ambiguous and the resolver never has to disambiguate them. This also explains 11063's "backward" opening run (`0371C → 0372C → 0371 → 0371D → 0372D`) — that is Abdias working across the C band of both columns and then the D. Neither work's Corpus Corporum anchors are wrong; nothing to patch.
11. **Bracket overload still unresolved** (carried forward): a reader cannot tell Migne's brackets from our supplied words.

### → NEXT SESSION
1. **Resume smallest-first** — 18 works still pre-chunked. Next tier: 11088 (16 ch), 11536 (17), 10804 (17), 11058 (19), 11553 (22). Hard-stop ritual before each launch. Stage only.
2. **`9637 Ordo ad regem benedicendum` is STILL a Fable mini-pilot, not an Opus batch** — first liturgical-ordo genre; extend `translation-style.md` before translating it or any ordo. It is now the SMALLEST thing in the queue (2 chunks), so it will keep surfacing as "next" — it is deliberately skipped, not overlooked.
3. ~~Fold the band-arithmetic do-not-report paragraph into the runbook's permanent prompt template~~ **DONE 2026-07-28.** Generalized while there: the template now carries a **"Known false positives — do NOT report these"** block covering all seven settled classes (band arithmetic · *Ibid.* antecedents, where the "fix" would break resolution · `noteCount` off-by-one from the `heads[]` duplicate · Pattern 4 `[f:]` in lemma-and-gloss commentaries · Migne's own `( sic )` · Pattern 9 non-defects · `(cont.)` heads). Pipeline step 4 also now makes **cruces merging a required reconciliation step**, not a tidy-up, with the 11551 *stylus/epistylium* case as the worked example.
4. Run `decade-check.mjs` at the next decade boundary (89 works).
5. **Link migne.app back from the Acta methodology page** (carried, still owed).

> **~~Open item (2026-07-28):~~ CLOSED same day.** `/method` now has its *Why translate
> this way* section (nobody was doing this · unlock the language gate, not perfection ·
> the clerk carrying his exemplar's mistake forward) and links **actasanctorum.org** and
> **bonaventure.wrootpress.com**. See `NOTES-method-page.md`. **Still owed: link migne.app
> back from Acta's page** (`~/acta-sanctorum/NOTES-methodology-page.md`).

## 2026-07-28 (third) — 6–9-chunk tier (6 works) translated + STAGED; /method/ published; two source defects fixed

**NOT deployed.** Site now **79 english pages**. Queue: 22 works still pre-chunked in `src/latin/`.

### The 6 new works — smallest-first, all Opus (6 agents, 44 chunks, ~934K subagent tokens)
11061 PL 175 Hugh *De scripturis et scriptoribus sacris* (6) · 11549 PL 196 Richard *Explicatio aliquorum passuum difficilium Apostoli* (6) · 11085 PL 176 Hugh *De virginitate B. Mariae* (7) · 11055 PL 175 Hugh *Adnotationes in libros Regum* (8) · 11531 PL 196 Richard *De Verbo incarnato* (8) · 11081 PL 176 Hugh *De sacramentis legis naturalis et scriptae* (9).
- **verify-english OK on all 6**; built + indexed; **0 unparsed corpus-wide**. works.json flipped to `ours` BEFORE decade-check. decade-check at 79: **nothing blocking**. ~216 cruces logged across the six.
- **Badges correct without any hunting:** five read "First" (verified `none`); 11061 reads **"New"** — its `workStatus` is `unclear` because a machine-assisted blog translation exists (threepillarsblog.org, 2023). The fail-safe worked exactly as rule 8 intends.
- One alias + one correction closed the last 2 unparsed refs corpus-wide: `Malac` → Mal added to the book table; `(Ezeeh. I)` @ 11061/18b entered in `citation-corrections.json` (→ Ezek.1; the host sentence names Ezekiel and the four living creatures are Ezek. 1). **15 corrections** now.

### `/method/` — the editorial-method page is built and in the nav
`content/editorial-method.md` had two sections and was built into no page at all. It is now **eleven sections**, built by `scripts/build-method.mjs`; nav is 8 items (`chrome.mjs` `NAV_ITEMS`).
- **It states plainly that the English is drafted by large language models under a fixed rulebook and then verified** (Wilson's call: disclose rather than let a reader discover it), then answers paraphrase / theological smoothing / invention with mechanisms — Pattern 7 and why a dropped negative stays dropped, scripture from the plate, the 8 verifier checks, the published cruces, the badge rule including the four works *downgraded* rather than defended.
- Closes with *Why translate this way* + sibling links (see the note at the top of this file).
- Every figure was recomputed against the repo, not lifted from these notes. **If a convention changes in `translation-style.md`, this page must change with it — same policy, differently addressed.**

### Two SOURCE defects found and fixed — both upstream, neither ours
1. **11085 @ 0874A — Corpus Corporum wrapped ~60 words of Hugh's running argument in a `<note>`.** Not a note Migne prints: the host sentence does not construe without it (the `ut` clause's verb, *demonstremus*, is *inside* the marker) and the parens do not balance. **New mechanism: `data/tei-patches/<idno>.json`**, applied to the XML by `chunk-work.mjs` before the transform, so a re-harvest reproduces it — the PL analogue of `data/calfa-patches/`. The patch drops the spurious element only; **not one word of Migne is changed**. Re-chunked: boundaries identical, `noteCount` 7→6. The 60 words are now translated, and a phantom `fontes` record disappeared with them. **A find string matching ≠1 times is a hard error** — patches fail loudly.
2. **11055 @ 0104B–0105A — the names of the mighty men are GONE at Corpus Corporum, and are NOT recoverable from our source.** The TEI reads literally `<item/>` — empty elements; only the tally column was transcribed. Entries 27–31 survive because they were marked up as a `<table>` rather than a `<list>`, which is itself the evidence that this is a markup artifact. **Recovery needs the PL 175 scan** and would land as `tei-patches/11055.json`. Deliberately NOT attempted (scan-reading, not translation); recorded as a gap per the method page. **Open decision: the page shows a bare tally, which reads as our defect and is not — does it want a visible reader note before deploy?**

### New convention: `[nt: …]` — a note that is PROSE, not a citation (Wilson, this session)
"`[n:]` contents untranslated" was written for `(Gen. II)`. Applied to a 64-word explanation of numeral subtraction it left an English reader a Latin paragraph. Pattern 4 already drew this line for `[f:]` tails; it now holds for notes.
- `[n: …]` = citation, verbatim Latin, content-checked against the twin. `[nt: …]` = editorial prose, **translated**, English-only.
- **Only 6 notes in the whole chunked corpus exceed 20 words**, so the class is tiny and now fully handled: 8407 (numeral subtraction), 9519 (scholion on epilepsy), 11436 (the *quadrilogus* note) converted and re-verified; 11064's 23-word citation list correctly stays `[n:]`; 11085 was the mis-scoped one above; **11613 Gilbert Foliot is not yet translated and will be born correct.**
- Wired through `verify-english.mjs` (positional matching; `[nt:]` in a *Latin* chunk is a hard error), `build-work-page.mjs` (`.notecite.prose`), and `index-work.mjs`, which now keeps prose notes **out of `fontes[]`** in a new `proseNotes[]` bucket. **This removed two bogus "sources": 8407 and 9519 each had their scholion indexed as a citation.**

### Agent reports were wrong twice — verify flags before acting on them
Both were confidently argued; both would have caused harm if believed.
1. **11549 "column loss at 0683A→0684A" — FALSE ALARM**, the documented do-not-reopen class. Migne's A–D marks are positional quarter-guides, not four per column; text continuity passes (`Sed a divina excellentia [0684A] omnino alienum est`, continuous mid-sentence). The agent's supporting claim that only one of two announced modes is given is also wrong — the second is the `Item amor gratuitus…` clause right after the anchor.
2. **11549 "the *Ibid.* will resolve to the wrong antecedent" — BACKWARDS, and the proposed fix would have broken it.** Anaphora resolves against the PRINTED sequence, so `(ibid.)` inherits `(Rom. II)` and indexes `Rom.2` — the *true* reference for the quotation it sits on. A corrections entry against `(Rom. II)` is applied *upstream* of anaphora resolution, so the *Ibid.* would inherit the corrected key and resolve **wrong**. **No correction filed; none should be.** Both cruces amended in place with DO-NOT-FIX markers.

### Open flags for Wilson (none blocking)
1. **11055's lost catalogue** — decide whether it wants a reader-visible note.
2. **11531 @ 1000D HIGH-STAKES dropped `nisi`** — as printed the Holy Spirit alone does *not* keep through himself, reversing Richard's descending scheme and contradicted by its own *nam* clause. Rendered literally. **Third instance of this exact failure mode in this stretch of PL 196** (11534 @1054A, 11537 @1069D) — the clustering is itself worth noting.
3. **11531 renders Isa. 21:11 as "keeper", not "Watchman"** — deliberate: Richard hangs the whole tropological chapter on *Samaritanus namque custos interpretatur* and ~40 *custodire* plays around it. The one place this English visibly departs from every familiar version.
4. **11085 @ 0865A — a dropped `non` (twice)** reverses Hugh's own thesis on the conjugal office. Rendered literally.
5. **11081 @ 0030B `munde` for `mundo`** — Pattern 7 forces "the angels announce peace *purely*" where Migne means "to the world". Sharpest case yet of the rule producing English that reads as our error; may deserve a convention for real-word typos whose literal sense actively misleads.
6. **11061's plate has two structural defects a reader will notice** — CAP. XIV announces *septem circumstantiis* and lists six; the six ages at 0024B are enumerated as five. Both rendered as printed.
7. **11531 @ 1007A `veri dici mane`** — translated normally rather than carried through as non-word type (single vowel inside an inflection). Logged so it can be flipped.
8. **Bracket overload still unresolved** (carried forward): a reader cannot tell Migne's brackets from our supplied words.

### → NEXT SESSION
1. **Resume smallest-first** — 22 works still pre-chunked. Hard-stop ritual before each launch. Stage only.
2. **`9637 Ordo ad regem benedicendum` is STILL a Fable mini-pilot, not an Opus batch** — first liturgical-ordo genre; extend `translation-style.md` before translating it or any ordo.
3. Run `decade-check.mjs` at the next decade boundary (89 works).
4. **Add `[nt:]` and the `tei-patches` mechanism to `translation-style.md`** — both are conventions now and neither is in the rulebook yet; they live only here and in code comments.
5. **Link migne.app back from the Acta methodology page.**

---

## 2026-07-28 (later) — Patterns 7–11, corpus-wide literal sweep, badge fail-safe

**DEPLOYED** (through `a02ea40` + the badge fix). Everything below is live on migne.app.

### Rulings written into `translation-style.md` (Wilson, this session)
- **Pattern 7 — render the printed Latin literally.** Supersedes the 10103 "intended reading" precedent, which had spread to 26 works. ~120 emendations undone corpus-wide.
- **Pattern 7 carve-out RULED** — type that is not a word at all is carried into the English untranslated in italics (*bonorem*, *Canetenim*), including inside scripture lemmas.
- **Pattern 8 — punctuation follows the plate.** Preserve, never supply, never delete.
- **Pattern 9 — what is NOT a defect:** attested medieval spellings, gender mismatches with no English exponent, section labels (which normalize in English *because* the Latin column preserves the misprint).
- **Pattern 10 — split type is non-word type** (`ur sam`, `supernatur alis`); carry the whole broken run, even when one fragment is a real word.
- **Pattern 11 — dittography**: print it twice, mark the repeat `[d: …]`, renders with a dotted underline + "Repeated in Migne's plate". Brackets were rejected as the carrier because square brackets are ALREADY overloaded (Migne's own `[securitas]` vs our supplied `[it]`/`[them]`, ~95 instances). **That overload is unresolved and is the next convention worth settling.**

### CLAUDE.md rule 8 REWRITTEN — verification gates the CLAIM, not the QUEUE
The queue is now explicitly flexible (anything may be translated; the goal is completing Migne). The gate moved to the landing badge, and **Wilson's emphasis: do NOT go hunting to earn the strong claim — the text is the product, the badge is garnish.** `build-landing.mjs` now FAILS SAFE: missing/`unclear`/unrecognized status renders "New English translation", never "First".
- **This was a live defect.** The old logic defaulted a missing lookup to "first" and let `unclear` fall through entirely. **Four works were publicly claiming "First English translation" without evidence** — 11545, 11546, 11548 (two with triage notes recording an *unconfirmed* claim that a VTT translation exists) and 11078 `pl/173/epistolae` (`workStatus: null`). All four now read "New". Fixed by downgrading the badge, NOT by researching.
- PG works are hand-listed in `PG_FIRSTS` rather than defaulted, so a PL lookup miss can never inherit the claim.

### Verifier gained three checks (it had none of them)
7. **Guillemet parity** vs the Latin twin — 9852 had shipped with all 10 of its charter quotations silently converted to straight quotes and nothing caught it.
8. **`[d: …]` markers** English-only, never empty, stripped before the word-ratio count.
Plus two dedupe false-positive bugs fixed: `## ` heads exempt, and the Latin-side dup map now uses a lower word floor than the English (both were >15 words, but English runs ~1.5× Latin, so any Latin unit of 11–15 words tripped it one-sidedly).

### `(cont.)` heads were leaking onto published pages — 293 of them, live
The chunker re-emits a section head on every chunk a section spans; chunk boundaries are OUR division and invisible on the assembled page. Readers saw "CHAPTER ONE." then "CHAPTER ONE. (cont.)". Now merged in `build-work-page.mjs`, dropped from `heads[]` in `index-work.mjs`, both accepting `(continued)` too (7383 had an agent *translate* the marker).

### METHOD WARNING — do not phrase-match cruces
The emendation packet keyed on "rendered per the intended reading" and **undercounted by roughly half**: several cruces PREAMBLES declared the old policy as house convention, after which entries applied it silently. True vs briefed: 11066 **33** (5), 11064 **21** (2), 11542 **9** (2), 7561 **7** (1), 8715 **6** (1). Agents were re-scoped mid-flight to read EVERY entry. A sweep that phrase-matches will report itself complete while leaving half the instances in place — worse than not running.

### Also worth knowing
- **The collapse failure mode runs both ways.** 21413 and 11062 had *deleted* a printed dittography (rendering it once), 21413's crux justifying it as avoiding "nonsensical English". Restored. Neither would have been caught by an emendation sweep, because both cruces described the defect accurately and then under-rendered it.
- **11556 attribution CONFIRMED as Richard's** (~80%): MS transmission in a homogeneous Richard codex, no doubtful-attribution asterisk in Feiss/VTT 4, and a corpus-wide grep of all 5,276 PL TEI files showing six distinctive phrases occur only there. NOT a *Liber exceptionum* extract — those were mis-shelved into Hugh's PL 177, the opposite direction. The does-English-exist check was deliberately SKIPPED per rule 8; `englishState` stays `unclear` and honest.
- **11545 has an attribution defect in the TEXT, not the badge**: only the prologue is Richard's, the body is Walter of St Victor's, and the byline says Richard. Unlike a badge, that is part of the edition. Not yet fixed.
- 3 guillemet instances in 11064 remain unresolved and documented rather than guessed (each would require reordering or duplicating English words).

## 2026-07-28 — 4+5-chunk tiers (6 works) translated + STAGED; quotation layer overhauled

**NOT deployed** (commit `f776cdc`). Site now **73 english pages** (72 in works.json + the PG Joel work). Queue: **28 works** still pre-chunked in `src/latin/`.

### The 6 new works — smallest-first, all Opus (3 agents, 27 chunks, ~571K subagent tokens)
10083 PL 145 Peter Damian *De dignitate sacerdotii* · 11083 PL 176 Hugh of St Victor *De sapientia animae Christi* · 11078 PL 176 Hugh *De modo orandi* · 11542 PL 196 Richard of St Victor *De sacrificio David prophetae* · 11534 PL 196 Richard *De differentia sacrificii Abrahae…* · 11537 PL 196 Richard *De gemino paschate*.
- **verify-english OK on all 6**; built + indexed; **0 unparsed corpus-wide**. works.json flipped to `ours` BEFORE decade-check. All three authors already had bios. decade-check at 72 shipped: **nothing blocking**.
- **`11556 Sermo de missione Spiritus Sancti` was HELD BACK** — its works.json `englishState` is `unclear`, not `untranslated`, and rule 8 admits nothing to the queue without a verified none-status. **Verify it before translating.**
- `index-work.mjs`: `Levit` added to the book-alias table (Migne prints both `Lev.` and `Levit.`; only the short form was mapped, stranding 4 refs in 10083).

### The quotation layer — this is the session's real change
- **Pattern 5** written into `translation-style.md`: guillemets open and close exactly where Migne does, 1:1; an interrupting *inquit* stays INSIDE the quotation; an unclosed « stays unclosed and is logged as a crux.
- **Pattern 6 (Wilson's ruling 2026-07-28)** — quotation-mark **provenance**: « » reproduce marks Migne prints; " " are marks WE supply where English needs one and the plate has none. A reader can then tell plate from edition by eye, and the rule is mechanically checkable.
- **`verify-english.mjs` check 7: guillemet parity** against the Latin twin. It had NO quotation check at all, which is how 9852 shipped with all 10 of its charter quotations rendered as straight quotes (repaired, cruces logged).
- **15 of 65 drift instances fixed by script** behind a gate asserting only quotation characters changed. **50 judgment instances remain in 29 chunks of 3 works** (11064 ×22, 9076 ×6, 21413 ×1) — a Sonnet pass was launched against a localized packet; check its result before assuming it is closed.

### Two verifier bugs fixed (both would have kept firing)
1. Dedupe scan flagged `## ` continuation heads as duplicated English. Heads are now exempt, and the **Latin-side dup map uses a lower word floor than the English side** — both were >15 words, but English runs ~1.5× Latin, so any Latin unit of ~11–15 words crossed the threshold on the English side alone with no Latin twin to excuse it.
2. **`(cont.)` heads were leaking onto published pages — 293 of them, live.** The chunker re-emits a section head on every chunk the section spans; chunk boundaries are OUR division and invisible on the assembled page, so readers saw "CHAPTER ONE." then "CHAPTER ONE. (cont.)". Now merged back into one section (`build-work-page.mjs`) and dropped from `heads[]` (`index-work.mjs`); 22 works rebuilt. Both accept `(continued)` too — 7383 had an agent *translate* the marker, slipping every literal-string scan.

### Open flags for Wilson (none blocking)
1. **11537 is two sermons, not one treatise** — Migne heads it `SERMO IN RAMIS PALMARUM` (1059A–1067B) and `SERMO IN DIE PASCHAE` (1067C–1074B). Translated 1:1, `work:` left alone; the TOC will show one work with two sermon heads. Deliberate call owed.
2. **11534 and 11537 overlap in the plate** — 11534's last anchors are 1059A/1060A; 11537 opens at 1059A. A resolver keyed on `pl/196/1059a` will hit two works.
3. **Emend-vs-render policy is inconsistent corpus-wide.** The prompt says render corrupt type literally; `10103/cruces.md` set a precedent of rendering the *intended* reading for pure orthographic slips. The 11534/11537 agent followed the repo precedent and said so atop both cruces files. **This is the place to set one rule.**
4. **Two dropped negatives are the highest-stakes cruces of the batch** — 11534 @1054A and 11537 @1069D. As printed, both sentences assert the doctrinal opposite of their context. 11537's was emended (the *sed* clause is unambiguous), 11534's left literal. Worth a second reader.
5. **11542 cites the same verse two ways**: `Psal. LXX` at the incipit and `Psal. LXV` at 1041D for identical Latin. LXV is right — a `citation-corrections.json` candidate.
6. **10083 @0494D**: Migne's guillemets around a Colossians quotation swallow a clause of Damian's own that is not in Colossians. Left inside the quote, since the guillemets are Migne's.
7. **Inline scripture locators outside `[n:]`** — 11542 prints `(Luc. [1034C] XII.)` with a column anchor *inside* the citation. Not `[f:]`-tagged (pattern 4 feeds fontes, these are scripture, and a tag cannot contain an anchor). They reach neither index. Worth deciding whether they want a marker of their own.
8. **10083 chunk 0000 ends with a head and no body** (`DE DIGNITATE SACERDOTII.`) — confirm it is Migne's running title, not a chunker artifact.

### → NEXT SESSION
1. **Resume smallest-first** — 28 works still pre-chunked. Next tier = the 6-chunk band (11061, 11549), then 7 (11085), 8 (11055, 11531), 9 (11081). Hard-stop ritual before each launch. Stage only.
2. **`9637 Ordo ad regem benedicendum` is still a Fable mini-pilot, not an Opus batch** — first liturgical-ordo genre; extend translation-style.md before translating it or any other ordo.
3. **Verify 11556's none-status** before it re-enters the queue.
4. Run `decade-check.mjs` at the next decade boundary (76 works).

---

## 2026-07-24 — 3-chunk tier (9 works) translated + STAGED

**NOT deployed** (commit `97f71c2`). Site now **67 english pages built** (66 in works.json + the PG Joel work). Queue: 34 works still pre-chunked in `src/latin/`.

### The 9 new works — smallest-first, 3-chunk tier, all Opus (3 agents, ~366K subagent tokens)
10103 PL 145 Peter Damian *De picturis principum apostolorum* · 11031 PL 173 Peter the Deacon *Epistolae* · 11436 PL 190 *Vita et passio S. Thomae Cantuariensis* · 11648 PL 204 *Annales* · 21425 PL 150 Berno *Liber qualiter adventus Domini celebretur* · 6912 PL 13 *Addenda* · 7508 PL 47 ps.-Augustine *Sermones* · 8195 PL 83 *Norma vivendi* · 8715 PL 101 ps.-Alcuin *Dubia alia*.
- **verify-english OK on all 9**; build + index run; **0 unparsed corpus-wide**. `decade-check.mjs` at 66 shipped: **nothing blocking**. works.json flipped to `ours` BEFORE decade-check (untranslated-leak did not recur).
- **author-bios.json**: Peter the Deacon (c.1110–after 1159, with the forger caveat), Berno of Reichenau (d. 1048), plus attribution-flag entries for `Auctor incertus (Augustinus Hipponensis?)` and `Auctor incertus (Alcuinus?)`.
- **`index-work.mjs` alias fix**: bare `Phil.` → Philippians (Migne prints `Philem.` for Philemon; confirmed against the quoted Latin at 8715/1170a, *Optabam dissolvi*). This closed the one unparsed ref.
- **Guillemet discipline enforced post-hoc**: five English quotations had been broken around "he says" where Migne keeps *inquit* inside the quote (10103 ×3, 11436 ×2) — rejoined 1:1, which also cleared both index "quotation count differs" warnings. 10103's Romans quotation at 0594B–C is **unclosed in Migne**; the supplied `»` was removed so the English mirrors the plate, and it is logged as a crux. **This is a recurring class — worth a line in `translation-style.md`** (Pattern: *inquit*/*inquam* interruptions stay inside the guillemets; never re-punctuate to English convention).
- Remaining ratio warnings (21425/0000 1.66, 7508/0002 1.64) spot-checked = genuine Latin unpacking, not padding.

### Open flags for Wilson (none blocking, all pre-deploy decisions)
1. **8715 badge**: set `workStatus: pd-ingested` deliberately, so the landing badge reads "New English translation" rather than claiming a first — the dossier's poem IV is Alcuin's well-known *O mea cella*, which has prior English versions. **work-about.json blurb for 8715 not written**: it should acknowledge the prior versions per the 7561 precedent, but the framing is Wilson's call.
2. **First vernacular-quotation case in the corpus**: 6912 quotes Beuter (0420D) and Flórez (0421A) in **Castilian**, not Latin. The agent translated them to English. `translation-style.md` has NO rule for vernacular quotations — whatever is decided here becomes the convention. (The Saturninus inscription at 0422A–B was correctly left verbatim: which letters are on the stone vs. supplied *is* the argument.)
3. **11436 bracket form**: chapters I and III are stubs (incipit + explicit + a pointer to Edward Grim's *Vita*) in a bracket form that is neither `[n: …]` nor `[ *al.,* …]`. Editorial comment translated, locator kept in locator form. Will recur across Migne's compilation texts — confirm before it hardens into precedent.
4. **11031 rubric**: Migne heads Ep. III "Ad Conradum imperatorem **II**"; it must be Conrad III (Conrad II d. 1039). Migne's rubric, not the letter's text — decide whether it earns a `citation-corrections.json` entry. Also Ep. III's date (*Anno eod.* 1139) is likely a year late: Conrad III was elected March 1138.
5. **8715 citation flag** (not corrected in text): at 1170B Migne cites the cave episode as *I Reg. XXVI, 11*, but *Saul … ventrem purgare* is 1 Sam. 24, not 26.
6. **21425 load-bearing crux**: at 1080C the *Comes* list prints `Dominica quarta` twice where the argument requires *quinta* first. Rendered as printed. Berno's whole five-vs-four-Sundays case rides on it — worth collating against another witness.
7. **Attributions found from internal evidence, left as Migne prints them**: 11436 is the **first *Quadrilogus*** (conventionally Elias of Evesham, c.1198–1200 — the prologue names its four sources); 11648 is the **annals of Saint-Vanne at Verdun** (96–1481, successive hands); 6912 is Migne's editor's addendum reporting Terribilini, containing the Évora Breviary lessons by André de Resende. All logged in cruces, none written into frontmatter.
8. **11031 has no `[n:]` apparatus at all** — its scripture (1 Thess. 4:14, Matt. 11:28, etc.) will never reach the index by the `[n:]` route, and Epp. I–II are heavily centonized from **Seneca's consolations** with no marks. Indexes 0 scripture / 3 fontes despite being full of borrowings. If classical borrowings are ever to be captured, this is the test case.

### → NEXT SESSION
1. **Resume smallest-first** — 34 works still pre-chunked in `src/latin/`. Next tier = the 4-chunk works (10083, 11083, 11542), then the 5-chunk band (11078, 11534, 11537, 11556). Hard-stop ritual before each launch. Stage only.
2. **`9637 Ordo ad regem benedicendum` is still a Fable mini-pilot, not an Opus batch** — first liturgical-ordo genre; extend translation-style.md before translating it or any other ordo.
3. Add the *inquit*-inside-guillemets rule to `translation-style.md` and sweep existing English for the class.
4. Run `decade-check.mjs` at the next decade boundary (76 works).

---

## 2026-07-20 — Set A (10 verified-none works, 2-chunk tier) translated + STAGED

**NOT deployed** (commit `3a28abd`, staged for Wilson's deploy session). Site was 48 englished; now **58 english pages built** (57 in works.json — the 58th is the PG Joel work, which lives outside PL-only works.json). Queue: 43 works still pre-chunked in `src/latin/`.

### The 10 new works — smallest-first across the verified-none frontier, all Opus (4 agents, ~475K subagent tokens)
7017 PL 17 *Philosophorum aliquot epistolae* (Seven Sages letters) · 8253 PL 87 *Analecta* · 8407 PL 90 *De computo* (ps.-Bede numeral dialogue) · 8505 PL 94 *Chronicon breve* · 8566 PL 96 *Tractatus* (descent-to-hell) · 8625 PL 98 *Appendix ad epistolas* · 9436 PL 134 *Testamentum* (Atto of Vercelli et al.) · 9519 PL 137 *Appendix ad transl. corporis S. Hunegundis* · 9604 PL 138 *De prandio monachorum* · 9852 PL 141 *De monasterio Fructuariensi*.
- **verify-english OK on all 10**; build + index run; **0 unparsed corpus-wide**. Roman numerals kept verbatim in *De computo* / *Chronicon breve* (the argument is about the notation); cruces logged per work (garbles rendered literally). Two high-ratio verify warnings (7017 1.61, 9519 1.72) eyeballed = genuine Latin-unpacking, not padding.
- **works.json**: 10 flipped `englishState` untranslated → ours (prior triage note kept as `priorTriageNote`) BEFORE running decade-check, so the untranslated-leak debt did not recur.
- **author-bios.json**: added Atto of Vercelli (verified dates c.885–961, bp. 924) + shared-key `Auctores varii` / `Auctor incertus (Beda?)` (latter carries an attributionFlag — the "Beda?" is Migne's conjecture).
- **`decade-check.mjs` (57 shipped): nothing blocking.** New genre screen held: excluded 9637 *Ordo ad regem benedicendum* (pure liturgical ordo → needs the Fable mini-pilot per runbook, do NOT send to Opus).
- **translation-style.md**: 11208 locator count corrected to the verified **167** (was ~207); sweep marked EXECUTED.

### → NEXT SESSION
1. **Resume smallest-first** — 43 works still pre-chunked in `src/latin/`. Next tier up = the 3-chunk works (10103 Peter Damian *De picturis*, 11031 Petrus diaconus *Epistolae*, 11436 *Vita S. Thomae Cant.*, 11648 *Annales*, 21425 Berno, 6912 *Addenda*, 7508 ps.-Aug. *Sermones*, 8195 *Norma vivendi*, 8715 ps.-Alcuin *Dubia alia*) then the 4+ Victorine/Damian works. Hard-stop ritual before each launch. Stage only.
2. **`9637 Ordo ad regem benedicendum` is a Fable mini-pilot, not an Opus batch** — first liturgical-ordo genre; extend translation-style.md before translating it or any other ordo/liturgical text.
3. Run `decade-check.mjs` at the next decade boundary (67 works).

---

## 2026-07-18/19 — 19 works translated + DEPLOYED; decade blocker built; Pattern 4 executed; citation layer overhauled

**LIVE on migne.app** (commits `df3ff68` → `e58de2f`, two prod deploys, all smoke-tested).
Site now: **48 englished works**, 21 authors, 25 englished PL volumes + 1 PG, queue 53 prepared works.

### The 19 new works (smallest-first across the whole verified-none frontier, not one campaign)
Avitus of Vienne *Sermo in rogationibus* · Hincmar ×2 (*Quae exsequi debeat episcopus*, *Instructio ad Ludovicum Balbum*) · Peter Damian ×3 (*De castitate*, *Passio SS. Florae et Lucillae*, *Vita S. Mauri*) · Lanfranc *De celanda confessione* · Alcuin *Vita S. Martini* · Rabanus *De passione Domini* · Agobard *De modo regiminis ecclesiastici* · Peter of Blois *De divisione* · Anselm of Laon *Epistola* · Odo of Cambrai *Homilia de villico iniquitatis* · Nicholas of Clairvaux *In festo S. Andreae* · ps.-Bernard *Flores seu sententiae* · + 4 anonymous (*De unitate sanctae Trinitatis*, *In parabolam de decem virginibus*, *De primordiis … Hierosolymorum*, *Exhortatio ad monachos*).
Bios added for all new authors. **Queue was deepened first**: 40 substantial verified-none prose works chunked (validator green 40/40), deliberately excluding verse/liturgical/tabular (those need a Fable mini-pilot per the runbook) and sub-1K-word scraps.

### Pattern 4 EXECUTED (the Fable checklist below is now DONE)
`[f: …]` harvesting in `index-work.mjs` (validates each tag as a verbatim substring of the Latin twin — **hard error**), wrapper stripped in `build-work-page.mjs` (`.fonscite`), Ibid. chains resolved. **11208 tagged: 167 locators** (not the estimated ~207 — the work has 171 sentence paragraphs, four sharing a citation; **the ~207 figure in `translation-style.md` is an over-estimate and should be corrected**). 1197B swallowed sentence fixed; full sweep found no other instance.
**Checklist item 4 confirmed empirically**: two agent sweeps examined 7871 / 11064 / 11066 / 11075 and pattern 4 applies to NONE — they are lemma-and-gloss commentaries, not florilegia. **Do not re-flag them.**

### Citation layer — this is the big change
- **`data/citation-corrections.json` is new.** Policy (Wilson, 2026-07-18): *the text and `refDisplay` keep what Migne prints; `refKey` resolves to the TRUE reference.* `refKeyPrinted` retains the bad key so every correction is auditable. **14 corrections** entered, each verified against the quoted Latin first — 5 in 10703/10727, 8 in 7020, 1 in 11066 (`III Cor. VI`, a book that does not exist). Corrections also rescue refs that do not parse at all.
- **Parser overhauled: unparsed 163 → 2.** Most were never alias gaps — they were CHAPTER-ONLY refs (`I Cor. XV`) failing a regex that demanded a verse. Now handles chapter-only, semicolon-compound (one note → several refs), multi-chapter lists, arabic chapters, ` et ` separators, `c.`/`v.` prefixes. Corpus scripture refs: **1,349**.
- **Anaphora (`Ibid.`/`Id.`) resolved on BOTH paths**, 78 corpus-wide. An Ibid. inherits its antecedent's BUCKET — scripture Ibid.s were previously stranded in `fontes[]`. Chained Ibid.s walk back to the nearest NON-Ibid. **No text is rewritten**; resolution lives in `antecedent`/`antecedentColumn`.
- **Citations inside `## ` heads are now indexed** (10 recovered across 5 works). `^## (.*)$` is greedy to end-of-line and was swallowing them — 11325 had lost Rom. X, 10, *the theme of the whole sermon*. Records carry `inHead: true`.

### `scripts/decade-check.mjs` — NEW, run after every 10 shipped works
Bonaventure / Christian-Library cadence. Collects mechanically because flags scroll past in agent reports. Blocking = data-layer debt (exits non-zero); advisory = decisions to batch. **First run found decade-1 debt worse than the per-set flags**: 45 shipped works still carried `englishState: untranslated` — the 2026-07-10 gotcha Wilson caught by eye, shown to be systemic, now cleared.

**Two of my own detectors were wrong and are documented in-code so nobody re-derives them:**
1. **Pattern-4 detector: 4/4 false positives.** Three bugs — italics were pattern-matched rather than PAIRED (a regex cannot tell an opening `*` from a closing one, so it returned the GAP between two italic runs, reading `CAP. II.` and `Num. 3.` as locator tails); frontmatter was not stripped (`heads[]` holds Latin titles); bare `c.`/`n.` matched inside `[n: ]` markers. Validated after fixing: 11208 = 110 runs, all four false positives = 0.
2. **Column-band gaps are NOT text loss — RESOLVED, do not reopen.** All 49 "3+ band" gaps were same-letter (D→D, C→C), zero changed letter; the Latin reads continuously across every junction (`Sacramentis ‖ baptismi`); band census shows 784 columns with all four marks and exactly 49 with only one — the same 49. **Migne's A–D marks are positional quarter-guides transcribed where they appear, not four per column**; arithmetic over them manufactures phantom gaps. The check now tests TEXT CONTINUITY (mid-word break = real dropped line, blocks). Corpus: 163 gaps, 0 mid-word breaks.

### → NEXT SESSION
1. **Resume the two-set rotation** — ~53 works pre-chunked in `src/latin/`, smallest-first, no setup needed. Hard-stop ritual before each launch. Stage only; Wilson deploys.
2. **Run `node scripts/decade-check.mjs` at the next decade** (57 works) before translating further.
   *(Read-through backlog: no longer tracked — Wilson, 2026-07-20. Publish-ahead-of-read-through stands; cruces stay logged per work, but the count is not a metric to surface.)*

### Open flags (none blocking)
- `translation-style.md` says 11208 has ~207 locators; the true count is **167**. Correct when convenient.
- **`(Genes. XXI; Galat. IV)` at 7020/71c deliberately NOT corrected** — placement-irregular rather than wrong; the compound ref plausibly describes the Ishmael/Isaac material following. Correcting it would be guesswork.
- 2 unparsed remain corpus-wide, both correctly classified: `(Id. VI, 24)` anaphoric-with-no-antecedent-shape, and one structural.
- **7020/0074D**: a Luke citation printed as a bare inline parenthesis *split by a column anchor* — invisible to a `[n:]`-only indexer. Only 1 such case corpus-wide, so no harvester was built; the decade blocker counts them, and the fix is the same shape as the `[f:]` harvest if it clusters.
- 11325 chunk 2 declares `colContext: 1055A` but `colFirst: 1056A`; the TEI itself lacks 1050A and 1055B–D. Upstream (Corpus Corporum), not our chunker.
- The reported "11325 noteCount 6 but body has 7" was a **false alarm** — the 7th was the frontmatter `heads[]` duplicate. Corpus-wide: 0 noteCount mismatches.

---

## 2026-07-18 — Florilegium citation policy DECIDED (Fable brief executed) — Opus execution owed

`~/patrologia/fable-brief-florilegium.md` executed. The convention is written; nothing was translated or re-indexed yet. **Deliverables landed:**
- **`translation-style.md` Pattern 4** — inline citation tails: locators stay verbatim Latin wrapped in a new `[f: …]` marker (English chunks only), editorial comments translated outside the tag, `Ibid.` tagged as printed and resolved by the indexer, segmentation guard (finite verb / >~8 words in a tail = split; catches the 1197B swallowed-sentence defect). Trigger is typographic (citations in running text, not `[n:]`), not the genre label. Pattern 2 vs 4 line: attribution *opening* an extract = prose (translate); citation *following* its unit = apparatus (Latin).
- **CLAUDE.md rule 9 amended** — fontes now come from both `[n:]` notes and `[f:]` tags; `inline: true`; *Ibid.* resolved at index time to `antecedent`+`antecedentColumn` (inference, not a correction — no citation-corrections entry); **no `fonsKey` minted yet** — inline locators join the accumulated-raws pool from which the controlled vocab is derived later, unchanged.
- **Ruling on the ~207 opaque Latin tails:** defensible interim — they are citations on the same footing as `[n:]` contents, and the third layer (hover/popover English expansion, generated from the index like the author-byline popover, never edited into HTML) is ratified as the *destination* but blocked on the fonsKey vocab derivation. Verbatim in text → resolved raw in index → expanded on demand in display.

**→ Opus execution checklist (one session, ~11208-sized):**
1. Tag both `src/english/11208/` chunks with `[f: …]` per Pattern 4; fix the 1197B defect (locator tag ends at *c. 3.*; *Hence habit is conquered by habit.* stays translated italic outside it); update the cruces.md "Editorial decision" section to point at Pattern 4 instead of calling itself reversible.
2. Extend `scripts/index-work.mjs`: harvest `[f:]` from English chunks (column-tracked like `[n:]`), validate each tag content as substring of the Latin twin (strip `*`, normalize whitespace; mismatch = exit 1), emit fontes records `{raw, column, chunk, inline: true}`, resolve *Ibid.* chains across chunk boundaries (`antecedent`, `antecedentColumn`; first-locator-is-Ibid. = error). Make renderers (`build-work-page.mjs`) strip the `[f: `/`]` wrapper; verify-english must treat `[f:]` as a sacred marker (count parity la-side n/a — English-only marker, so verify tags against Latin substring instead).
3. Re-run verify → build → `index-work.mjs 11208` — expect ~207 fontes (22 *Ibid.*-resolved), 0 unparsed regressions; rebuild page, confirm rendering unchanged except wrapper removal.
4. Sweep: no other shipped work has inline tails (Haimo 9076 / Vincent 7561 carry inline *scripture* in prose — NOT this pattern; do not tag those).

**Deliberately deferred (do not do speculatively):** `fonsKey` + English work-title vocabulary (derive from accumulated raws once several tail-citing works have shipped; Bernard's SBO numbering is the candidate external anchor at that point, verified not recalled); the popover display layer (blocked on that vocab); Latin-page popover attachment (index has column+raw — attachable later without re-editing chunks); locator-level printer's-error corrections (would go through `citation-corrections.json` at the fonsKey stage if ever needed).

**What would reopen the decision:** Wilson wanting English expansions in the page text itself (violates the verbatim rule — needs his explicit override); the vocab-derivation pass finding accumulated raws too thin to resolve (would force earlier external anchoring); the Latin site layer needing interactive citations before the vocab exists.

---

## 2026-07-17 (later) — Navbar restored + five new site pages built & DEPLOYED

Bug: work-page navbar links were all `href="#"` placeholders (dead in every browser) and the destination pages never existed. Fixed by building them and centralizing the nav.

- **`scripts/lib/chrome.mjs` = single source of truth** for nav/head/footer. `NAV_ITEMS` defined once; landing + both work-page builders now `import { nav }` — no more per-file nav drift (that duplication caused the bug). Nav is 5 links site-wide: Latina · Græca · Authors · The Queue · Migne.
- **Five new generated pages (each has its own `build-*.mjs`, run after shipping a work so they stay current):**
  - `/latina/` + `/graeca/` — `build-volume-indexes.mjs`: bare browsable indexes, PL 1–221 & PG 1–161 (+ ghost 162). PL labels = principal author by word-share from works.json; PG labels = `pg-tome-authors.json`. Englished volumes gilt-marked + work linked inline.
  - `/authors/` — `build-authors-index.mjs`: authors with a live English work (scans built pages → groups by author → bio from `author-bios.json`). 11 now.
  - `/queue/` — `build-queue.mjs`: works chunked in `src/latin/` but not yet Englished, smallest-first (48 now), + the verified-none frontier count (computed live from works.json, 1,387).
  - `/migne/` — `build-migne-essay.mjs`: renders `content/migne-biography.md` (tailored md renderer: frontmatter, #/## heads, *italic*, 64 `[^n]` footnotes; no lists/links/blockquotes in source).
- **Secondary-page CSS** appended to `sketch/styles.css` (regenerated into `site/styles.css` by any work-page rebuild). Added **Richard of Saint Victor** author bio (was missing — queue had shown raw Latin).
- **Rebuild order that works:** work pages first (regenerates `site/styles.css` from sketch + applies nav) → the 4 new-page scripts → `build-landing.mjs`. All 200 live; citation resolver unaffected.
- **DEPLOYED + pushed** (commits `78cd589` badge fix, `905a494` nav/pages; `cd site && npx vercel --prod`). Also this session: landing badge now reads **"New English translation"** (green) for re-translated classics vs. "First English translation" — keyed off `works.json` `workStatus` (pd-ingested/copyrighted → not a first); self-corrects for future classics.
- **Open polish (non-blocking):** the Queue lists not-yet-shipped Song-of-Songs authors by their Latin catalog name (Ambrosius Mediolanensis, Rabanus Maurus, Bruno Astensis, Gilbertus Foliot, Philippus de Harveng, Angelomus Luxovensis, Thomas Cisterciensis, Wolbero, Ps.-Cassiodorus). Per runbook, bios are added when a work ships — so this is by-convention, but Wilson may want them Anglicized now (a `build-queue.mjs` name-map or bio stubs). Landing thesis line still says "for the first time in English" (general banner; flagged, left as-is).

## 2026-07-17 — Vincent of Lérins *Commonitorium* translated + staged (FIRST deliberate untranslated-first departure)

**Doctrine broadened (Wilson, 2026-07-17):** the untranslated-first rule is no longer absolute. The goal is a *complete and accessible Migne* in the next year or two; as verified-untranslated works run dry, **foundational / poignant texts become worth translating afresh even where English already exists** — starting here. The *Commonitorium* is a source-text for the tradition's self-understanding, so it earns a fresh Wroot Press rendering. **When we translate an already-translated work: acknowledge the existing versions openly** (about-blurb names them; never pretend to a "first"). This is a real policy shift — fold into PLAN.md locked decisions when convenient; queue-building can now include high-value translated classics, not only `none`-status works.

**DONE this session (Opus, 3 agents, ~300K subagent tokens — STAGED, NOT DEPLOYED):**
- **Vincent of Lérins (`Vincentius Lirinensis`, authorIdno 1073), *Commonitoria*, textIdno 7561, PL 50 coll. 637C–686B, 12.6K words → 13 chunks.** Commonitorium Primum (I–XXVIII) + Recapitulatio (XXIX–XXXIII, the digest of the lost second book). Page: `site/pl/50/commonitoria/`.
- Pipeline clean: `chunk-work` (validator green, 55 marks), 3 Opus agents (0000–04 / 05–08 / 09–12), `verify-english` **OK**, `build-work-page` + `index-work` run. Index: 0 scripture / 0 fontes — **this printing carries scripture refs inline in the prose, not as `[n:]` notes** (only 1 note, Baluze's editorial line), same as Haimo 9076.
- `author-bios.json`: Vincent entry added (Peregrinus / Lérins / c.434). `work-about.json` 7561: blurb states the canon + **openly acknowledges Heurtley (NPNF) and Morris (FOTC)**. `works.json` 2575: `workStatus: pd-ingested`, `englishState: ours`, with a `note` recording the departure.
- **8 cruces** logged (`src/english/7561/cruces.md`) — printer's garbles rendered per intended reading + noted: `modio/medio` (0664), `conscripsi/conscripsit` (0663), `Scirdentem/Scindentem` (0666), `provincio lae/provinciae` (0645), dropped `non` (0648), `afirmari` (0650), `Apollmaris` (0655), `Xis tus/Xystus`=Sixtus III (0684). Also: Greek christological terms (*Theotocon*/*Christotocon*/*theotocos*) kept in italic Latin per the technical-term convention — **worth Wilson's eye at read-through** (confirm we want them transliterated-Latin, not "God-bearer"). Out-of-numeric-order column back-references in the Recapitulatio (0678 before 0677) preserved verbatim as Migne prints them.

**→ NEXT for this thread:** Wilson read-through of 7561 (esp. the *Theotocon* transliteration call), then it joins the next deploy batch. Deploy steps unchanged (runbook step 8: prepend to `RECENT` in `build-landing.mjs` — note this is a PL 50 work, first in vol 50 — rebuild landing, `cd site && npx vercel --prod`, smoke-test `/pl/50/637`). **band-less anchors** present (`0644` etc.) — resolver already handles them (7383 precedent), but smoke-test `/pl/50/637` after deploy.

---

*Updated 2026-07-10 (Victorine translation session, off-queue): **two Hugh-of-St-Victor-attributed Victorine works translated end-to-end (Opus), DEPLOYED and LIVE on migne.app.** Wilson has a personal stake in Victorine thought — ran a per-work triage (65 works across Hugh + Richard of St Victor) to find genuinely-untranslated pieces, translated the two largest, deployed, and pre-chunked the entire remaining Victorine queue (39 works) for a future session.*

## → NEXT SESSION (Victorine thread): translate the pre-chunked queue below — no setup needed, go straight to translating

**LIVE on migne.app as of 2026-07-10** (commits `622f262`, `7dc92ce`; landing RECENT updated + redeployed):
| idno | author | work | chunks | notes for read-through |
|---|---|---|---|---|
| 11064 | Hugo de S. Victore (attribution: Victorine school, not Hugh personally) | Expositio in Hierarchiam Coelestem S. Dionysii (PL 175.923–1154) | 80 | first-ever English of Hugh's commentary on Ps.-Dionysius's Celestial Hierarchy; ~30 cruces across the run (garbled type, editorial-variant brackets); one running-head wording drift caught and normalized post-hoc ("set forth above" / "whose text has been set out above" → unified to "the text of which has been set out above") |
| 11066 | Hugo de S. Victore (attribution: pseudo-Hugonian, later Victorine-school author) | Quaestiones in Epistolas Pauli (PL 175.431–634) | 61 | first-ever English of this Pauline question-commentary, full run Romans→Hebrews; house terms locked (QUESTION/Solution/Response/"It is asked"); **off-by-one caught**: chunker produced 61 chunks not 60, chunk 0060 was missed by initial batch planning and translated separately — verify-english now passes clean |

- Both works: `verify-english.mjs` passed clean, `build-work-page.mjs` + `index-work.mjs` run, landing RECENT updated, `site/index.html` rebuilt, deployed (`npx vercel --prod`), smoke-tested live.
- Read-through still owed on 11064 + 11066 (Wilson's gate; not blocking — already live per his standing "publish ahead of read-through" call from the 2026-07-05 session).
- **`data/works.json` translation triage is now SAVED and canonical**: Hugh's 34 works were already triaged in an earlier session (batch `33`, discovered mid-session — don't re-triage Hugh). Richard's 31 works were mostly untriaged and got filled in this session (batch `50`). Two entries flagged, not merged: workIdno 6490 (*De gradibus charitatis*) and 6493 (*De quatuor gradibus violentae charitatis*) look like possible duplicate cataloguing of the same text — worth Wilson's eye before trusting both as distinct.
- **Bug fixed in `scripts/index-work.mjs`**: `citeCol()` crashed on a null column (the very first head of a work, before any `[pb]` anchor, has `colContext: null`) — now returns `null` gracefully instead of throwing.
- **Deploy checklist locked into `translation-runbook.md` step 8**: landing RECENT update is now a mandatory pre-deploy step (was missed once this session, caught and fixed same-session).

### Victorine queue — 38 REMAINING WORKS ALREADY CHUNKED (`src/latin/<idno>/`, validated clean), smallest-first

No `chunk-work.mjs` step needed — every work below is ready for step 2 of the runbook (launch translation agents) straight away. `workStatus: "unclear"` rows have partial/uncertain existing coverage (blog excerpts, disputed scope) — treat as untranslated-first candidates same as "none" unless Wilson says otherwise. Total: 378 chunks, ~7.6M tokens at the ~20K/chunk rule of thumb — this is a multi-session campaign, not one run. **Hard-stop ritual applies before every launch** (state chunk count + burn estimate, ask "which model, and go?").

**Gotcha caught 2026-07-10:** 11062 (*Explanatio in Canticum B. Mariae*) was in the original 39-work list from the batch-33 triage ("none" status) but was actually already translated in the 2026-07-05 Song-of-Songs session and is live at `migne.app/pl/175/explanatio-in-canticum-b-mariae/` — Wilson caught it on the landing page. Removed from the table below; `data/works.json` workIdno 6022 updated to `workStatus: "ours"` so this can't recur. **Lesson: cross-check any triage-derived queue against the live site / `site/index.html` RECENT list before trusting "none" status — triage snapshots go stale the moment we ship a work ourselves and the field doesn't auto-update.**

| idno | author | work | chunks | words | status |
|---|---|---|---|---|---|
| 11056 | Hugh | Adnotatiuncula in librum Ruth | 1 | 39 | none |
| 11532 | Richard | De comparatione Christi ad florem et Mariae ad virgam | 1 | 336 | none |
| 11555 | Richard | Quomodo Spiritus Sanctus est amor Patris et Filii | 1 | 617 | none |
| 11079 | Hugh | De potestate et voluntate Dei | 1 | 843 | none |
| 11546 | Richard | De tribus appropriatis personis in Trinitate | 1 | 1,356 | unclear |
| 11554 | Richard | Quomodo Christus ponitur in signum populorum | 1 | 1,594 | none |
| 11548 | Richard | Epistolae et miscellanea | 2 | 1,710 | unclear |
| 11080 | Hugh | De quatuor voluntatibus in Christo | 2 | 1,888 | none |
| 11543 | Richard | De spiritu blasphemiae | 2 | 2,325 | none |
| 11086 | Hugh | Epistolae | 2 | 2,514 | none |
| 11545 | Richard | De superexcellenti baptismo Christi | 2 | 2,526 | unclear |
| 11075 | Hugh | De fructibus carnis et spiritus | 3 | 2,983 | none |
| 11089 | Hugh | Institutiones in Decalogum | 3 | 3,477 | none |
| 11539 | Richard | De judiciaria potestate in finali et universali judicio | 3 | 3,545 | none |
| 11059 | Hugh | Adnotatiunculae in librum Judicum | 3 | 3,670 | none |
| 11547 | Richard | Declarationes nonnullarum difficultatum Scripturae | 4 | 4,127 | none |
| 11078 | Hugh | De modo orandi | 5 | 4,158 | none |
| 11542 | Richard | De sacrificio David prophetae | 4 | 4,386 | none |
| 11083 | Hugh | De sapientia animae Christi | 4 | 4,654 | none |
| 11556 | Richard | Sermo de missione Spiritus Sancti | 5 | 5,468 | unclear |
| 11537 | Richard | De gemino paschate | 5 | 6,227 | none |
| 11531 | Richard | De Verbo incarnato | 8 | 6,509 | none |
| 11534 | Richard | De differentia sacrificii Abrahae a sacrificio B. Mariae Virginis | 5 | 6,529 | none |
| 11061 | Hugh | De scripturis et scriptoribus sacris | 6 | 6,922 | unclear |
| 11055 | Hugh | Adnotationes in libros Regum | 8 | 7,096 | none |
| 11549 | Richard | Explicatio aliquorum passuum difficilium Apostoli | 6 | 7,704 | none |
| 11085 | Hugh | De virginitate B. Mariae | 7 | 8,288 | none |
| 11081 | Hugh | De sacramentis legis naturalis et scriptae | 9 | 10,035 | none |
| 11063 | Hugh | Expositio in Abdiam | 11 | 13,346 | none |
| 11551 | Richard | Expositio de tabernaculo | 15 | 15,657 | unclear |
| 11536 | Richard | De exterminatione mali et promotione boni | 17 | 16,516 | unclear |
| 11088 | Hugh | Expositio in regulam S. Augustini | 16 | 17,882 | none |
| 11057 | Hugh | Adnotatiunculae in Joelem | 15 | 20,035 | none |
| 11553 | Richard | In visionem Ezechielis | 22 | 24,512 | none |
| 11058 | Hugh | Adnotatiunculae in Threnos | 19 | 26,345 | none |
| 11550 | Richard | Explicatio in Cantica canticorum | 48 | 50,151 | none (disputed authorship — some mss "Pseudo-Richard") |
| 11535 | Richard | De eruditione hominis interioris | 58 | 54,433 | unclear |
| 11065 | Hugh | Homiliae in Ecclesiasten | 53 | 61,691 | unclear |

Suggested approach for the next session: work smallest-first like the Song-of-Songs queue (fast wins, house-style conventions lock in early), or let Wilson pick specific titles that matter most to him. Author bios for both Hugh (`Hugo de S. Victore`) and Richard (`Richardus S. Victoris`) already exist in `data/author-bios.json` — no new bio work needed.

## → Prior thread: Wilson read-throughs (on live pages), or translate the next Song-of-Songs queue works

*Prior update, 2026-07-05 (translation + deploy session): **five-smallest Song-of-Songs works translated end-to-end (Opus, commit `43aee86`) AND DEPLOYED. 8 works now live on migne.app** (the 5 new + the 3 prior staged: Robert/Anselm/Haimo). Wilson deployed `cd ~/patrologia/site && npx vercel --prod`; all live smoke tests passed (band-less `/pl/40/1137` resolves, landing shows 10 englished). Read-throughs now happen ON THE LIVE SITE — Wilson chose to publish ahead of read-through.*

**LIVE on migne.app as of 2026-07-05** (10 englished works total, landing RECENT leads with Justus): the 5 new below + Robert (pl/150), Anselm (pl/162), Haimo (pl/117), Joel (pg/139), Abbo (pl/139).

**DONE this session — 5 works translated + staged (commit `43aee86`), 42 chunks / ~0.85M Opus tokens:**
| idno | author | work | chunks | notes for read-through |
|---|---|---|---|---|
| 7383 | Anonymous (ps.-Aug.) | Expositio cantici Magnificat (PL 40) | 2 | bare-column anchors `[1137]`; 2 cruces; "Anonymous" byline (no popover); work-about blurb written |
| 11062 | Hugh of St Victor | Explanatio in Canticum B. Mariae (PL 175) | 6 | 16 cruces; `[respicit Dominus]` left untranslated as a variant reading (agent's call — confirm) |
| 21413 | Alcuin | In Cantica canticorum (PL 100) | 10 | 10 cruces; **index warned EN 9 quotations vs LA 8** — one italic passage to eyeball |
| 11321 | William of St-Thierry | Commentatio ex Bernardo contexta (PL 184) | 12 | 3 cruces; chunker frontmatter `noteCount:17` on 0003 was stale (real 18, EN carries all 18) |
| 7871 | Justus of Urgell | Explicatio in Cantica canticorum (PL 67) | 12 | 15 cruces; earliest surviving Latin Song commentary — the marquee "first" of this batch |

- Pipeline ran clean per `translation-runbook.md`: verify-english / build-work-page / index-work all pass; marker fidelity script-verified every chunk; cruces in each `src/english/<id>/cruces.md`.
- **Assembly gotchas that recurred (fold into runbook if they keep happening):** (1) agents sometimes reorder a frontmatter field (`noteCount` after `incipit`) → verify fails "frontmatter differs"; fix = re-splice the Latin twin's frontmatter onto the EN body (safe, it must be verbatim anyway). (2) Migne inline page-numbers must be **italic** `*392*` (9741 anchor convention) — two agents emitted bare numbers, fixed by resuming them.
- **`author-bios.json` entries added** for all four named authors + a reusable `Auctor incertus → Anonymous` entry; `work-about.json` blurb for 7383.
- Wilson read-throughs still pending from before: Abbo cruces, Joel, Robert/Anselm/Haimo.

## → Post-deploy open items (NOT blocking; all 8 are already live)
1. **Read-throughs still owed** — now done on the live pages. Per-work flags: 7383 (2 cruces), 11062 (16 cruces; `[respicit Dominus]` left untranslated — confirm), 21413 (10 cruces; index warned EN 9 quotations vs LA 8 — eyeball one italic), 11321 (3 cruces; stale chunker `noteCount:17` on 0003), 7871 (15 cruces). Plus the older Robert/Anselm/Haimo + Abbo/Joel read-throughs.
2. ~~Landing RECENT + resolver band-less check~~ **DONE** (commit `801ac66`; landing rebuilt, resolver verified for `/pl/40/1137`).
3. **`Cantic. → Song` alias gap:** these Song commentaries throw many `unparsed` scripture citations because the alias table doesn't map `Cantic.` (11321 alone had 23). Tracked-not-dropped, non-blocking, but a worthwhile one-time alias add before the queue grows.
4. **u/v modern-letterform fix** — still deferred, now shipping live as-is (Wilson's call). Decide when convenient; fix = stop emitting `lang="la"` on rendered Latin (details in the deferred section below).

## Queue remaining (per runbook table)
10 Song-of-Songs works left, smallest-next = 10804 Bruno of Segni (17ch) → 7914 Ps.-Cassiodorus (23ch) → … up to 11703 Thomas the Cistercian (259ch, a multi-run campaign). Gilbert 11613 (53ch) is chunked and ready whenever a session can supervise a bigger one.

## ✅ DONE 2026-07-05: chunker rewritten as partition-based core — scalable, corpus-validated

The 2026-07-04 "NOT corpus-ready" blocker is closed. `scripts/lib/chunk-core.mjs` (new) partitions the whole `<body>` at div boundaries — every byte lands in exactly one unit, so pb/notes/heads can't be silently dropped by construction. `chunk-work.mjs` = thin CLI (same usage, new `--out` flag for scratch runs); `chunk-scan.mjs` (new) = corpus-wide dry-run → `data/chunk-scan.json`.

- **All 14 previously-failing queue works now PASS** (7383, 11062, 21413, 11321, 7871, 10804, 7914, 9033, 8930, 11638, 6963, 11512, 11632, 11703). The whole Song-of-Songs queue is chunkable.
- **Corpus scan: 5,228/5,276 pass (99.09%).** The 48 fails are table/calendar layouts (chronological tables à la 21340 Chronicon; 0.51% of corpus by words) that fail LOUDLY on word-drift — per-work handling if they ever enter the queue, never silent mangling.
- **Regression gate: Abbo 9741 re-chunks byte-identically.** Corpus cases the old extractor couldn't touch, now handled: div2-only/no-div works, structural `<note>` wrapping monita (436 files — transparent translatable content), nested notes (flattened to sibling `[n:]`), pb inside notes/heads/tables (pulled out as sibling markers), bare column numbers ("1137"), literal `[ ]` in prose/notes, verse `<l>` lines (258K were being dropped corpus-wide), multi-head divs. Nonstandard pb values (Roman numerals, OCR typos — 631 marks corpus-wide) chunk verbatim + warn: patch with provenance before translating those works.
- **Downstream colRe extended** (`verify-english` / `index-work` / `build-work-page`, now `[0-9]{3,5}[A-D]?` + generic band parsing) — verified no-op on translated works (verify OK on 9741/10725/10379/9076). Bare-column works can flow the whole pipeline; check the site resolver handles band-less anchors at deploy time.

## → WILSON DECISIONS pending from the chunker rewrite

1. ~~4 div2 works missing chapter headings~~ **RESOLVED 2026-07-05 (Wilson chose re-chunk):** all 4 re-chunked under the new chunker; Robert/Anselm/Haimo English re-mapped deterministically (column markers + 1:1 paragraph parity made it scriptable — old/new Latin proven identical modulo head lines, every body block hard-assert-matched; ~50 formulaic head lines rendered: `CAPUT PRIMUM.`→`CHAPTER ONE.` preserving Migne's mixed word/Roman style, Anselm's `VOX ECCLESIAE.`→`THE VOICE OF THE CHURCH.` dialogue rubrics, numbered heads pass through). **verify-english OK on all 3**; pages + indexes rebuilt (chapter heads now in TOC/search); Gilbert (11613) re-chunked 47→53 chunks ready to translate. Chunk counts: 10379 3→3, 10725 14→17, 9076 19→23 — **cruces.md chunk refs predate the re-chunk** (noted in each file; locate by column). Read-through gate unchanged; still NOTHING deployed.
2. ~~build-work-page clobbers Abbo's curated about-paragraph~~ **RESOLVED 2026-07-05:** curated "On this text" prose now lives in **`data/work-about.json`** (keyed by textIdno, author-bios.json pattern); builder uses it when present, generic fallback otherwise. Abbo's page rebuilt with it — curated paragraph intact + byline/popover now applied (was the last page predating that feature); `data/index/pl/9741.json` regenerated with `authorsDisplay`. Rebuilds are now safe. **Convention: work-page about-blurbs get written into work-about.json at read-through — never edit generated HTML.** Staged only, no deploy.

**Queue status:** 8229 remains EXCLUDED — its "Cantica" is raw Vulgate biblical canticles, not a commentary (violates untranslated-first + scripture policy).

## → DEFERRED at Wilson's request: the u/v modern-letterform fix

Confirmed from Wilson's screenshot: the Latin columns render every u→v, i→j, and ct-ligatures (EB Garamond's historic-Latin forms, switched on by `lang="la"`). The site's `font-feature-settings: "locl" 0` (in sketch `.coltext.latin` AND the `[lang="la"]` rule) provably does NOT suppress it — `locl` is a *language-default* the shaper applies for the tagged language, and CSS can't reliably turn it off. **Reliable fix = stop emitting `lang="la"` on the rendered Latin elements** in both builders (EB Garamond then falls back to modern u); cost is losing Latin hyphenation/screen-reader lang (minor on these non-hyphenated columns). `font-language-override` would keep the tag but Chrome doesn't support it. **Wilson's added constraint:** Migne's PL *plates were not consistent u/v across volumes* — some set v, some u — so a "faithful-to-plate" display would vary by volume; but the Corpus Corporum TEI *text* we translate from is already normalized to modern u regardless, so forcing modern-u display is internally consistent. Decide blanket-modern-u vs per-volume when we return to it.

## DONE this overnight session (uncommitted → committing now, NO DEPLOY)

**Robert of Tombelaine (10379) FINISHED.** Re-translation agent completed 0001/0002 against corrected Latin (all 25 stale `<emph>` leaks gone); verify clean; built; indexed. Page `site/pl/150/commentaria-in-cantica-canticorum/`.

**Byline/popup mechanism built** (was the "author about" feature request). `data/author-bios.json`, keyed by the exact Latin `manifest.authors` string → `displayName` (English, for byline/crumbs/index; falls back to Latin form when absent) · `latin` (shown in the popup + index to disambiguate) · `dates` · `bio` (popup prose) · `dedicatee:true` (filtered from author credit — fixes the Abbo "Robertus Francorum" = King Robert II quirk). Byline now English (Wilson's call: *English name in byline, Latin in popup + index*). Popover uses the **native Popover API — no JS**. `build-work-page.mjs` wired (dedicatee filter + English byline + popover cards); `index-work.mjs` now emits both `authors` (Latin) + `authorsDisplay` (English). Bios in file: Abbo, Robert, Anselm of Laon (full), Haimo (name only + attribution flag), Robert II (dedicatee). Authors w/o a bio render as plain-text English (or Latin) byline, no popover — by design.

**`translation-style.md` Pattern 3 added: "Holy Scripture" capitalized** (both words, for *sacra/sancta Scriptura* = the canon; NOT generic "holy Church"/"holy preaching"). Flagged by Wilson on Robert; swept — 4 instances fixed in Robert, none in Abbo/Joel.

**CSS landmine fixed properly.** Real mechanism: two builders both own `site/styles.css` — PL (`build-work-page.mjs`) rewrites it from `sketch`+appended block; PG (`build-work-page-pg.mjs`) *appends* the Greek block. A PL rebuild after a PG build dropped Joel's Greek styling. Fix: PL builder now also emits the Greek block under the same `/* PG work page */` header the PG builder strips+re-adds → order-independent, no duplication. (My first attempt — cp site→sketch — was WRONG, it duplicated the appended block; reverted.) Also added author-popover CSS. Verified: PG-rebuild-after-PL keeps Greek at exactly 1.

**2 new Song-of-Songs works translated end-to-end** (Opus agents, strict prompt + style anchor 9741/0000 + translation-style.md, ≤6 cap, per-chunk anchor/note counts verified by each agent):
- **Anselm of Laon** — *Enarrationes in Cantica canticorum* (10725, PL 162, 17.6K words, 14 chunks). Byline "Anselm of Laon" + popover. 6 cruces (garbled Migne type, rendered literally: *Aequitatui*→*Equitatui*, *hinnulo servorum*/*cervorum*, etc.) + one load-bearing Vulgate variant (*umbra* for *imber*, Song 2:11, the commentary glosses it — kept as printed). Heads normalized (one agent said "Enarrations", canonical is "Expositions on the Song of Songs"). `site/pl/162/enarrationes-in-cantica-canticorum/`.
- **Haimo** — *Commentarium in Cantica canticorum* (9076, PL 117, 25.9K words, 19 chunks). Byline "Haimo of Halberstadt" (Migne's attribution; **modern scholarship reassigns to Haimo of Auxerre — flagged in author-bios.json for Wilson**). 11 cruces (all clear printer's typos: *Vestamenti*→*Testamenti*, *snae*→*suae*, etc.). No `[n:]` notes in this printing (0 scripture/fontes in index; 598 headnotes — inline lemmata). `site/pl/117/commentarium-in-cantica-canticorum/`.

**Token burn:** ~0.66M subagent tokens across the 6 translation agents + ~0.11M for the Robert re-translation agent. Opus tier per the volume-translation model plan.

## Pre-DEPLOY checklist (Wilson gates each; NOTHING is deployed)

1. **Wilson read-through** of all 3 staged works: Robert (10379), Anselm of Laon (10725), Haimo (9076) — same approval gate as Abbo/Joel. Cruces logged in each `src/english/<id>/cruces.md`.
2. **Landing not yet rebuilt.** New works must be prepended to the `RECENT` list in `scripts/build-landing.mjs` (else `build-landing.mjs` fails loudly) — add 10379, 10725, 9076, then rebuild `site/index.html`. Left for the deploy session so Wilson controls the editorial "recent" framing.
3. **u/v fix** (above) — decide + apply before or alongside deploy.
4. Then deploy: `cd site && npx vercel --prod` (Wilson's per-action OK required — hard stop).
5. `src/latin/11613/` (Gilbert Foliot) is chunked + ready if Wilson wants it translated next.

---

*Prior update, 2026-07-04 (per-work triage session — PL partial/mixed-bucket authors now DONE, 1889/1889).*

## → NEXT SESSION: per-work triage of partial/mixed-bucket PL authors is DONE. Move to queue-building or Wilson's pending read-throughs.
**Per-work triage thread is closed out — don't re-open it without a new reason.**

- Ran the Phase 4 finer-granularity pass: the 400-author-level triage (`data/triage/authors-status.json`) left 105 authors bucketed "partial" (74) or "mixed-bucket" (31) — i.e. known to be a blend of translated/untranslated works but not broken down further. Built `scripts/build-perwork-batches.mjs` → 49 batches (`data/triage/perwork/batch-NN.json`, ~45 works each, big authors split across sequential batches, small ones packed together) covering all 1889 works attributed to those 118 author-idnos (rollup's "105" underclipped a few idno mismatches).
- Dispatched 49 Haiku agents (7 rounds of 7, telemetry-gated per `feedback_haiku-agent-telemetry-gate`) to research each work's English-translation status individually: `pd-ingested` (PD/open-access — ANF/NPNF/CCEL/Fordham-Global Medieval Sourcebook/author-hosted free), `copyrighted` (paywalled modern edition — FOTC/ACW/TTH/Brepols/OUP/CUP/etc), `none` (verified untranslated), `unclear` (ambiguous/fragmentary). Results in `data/triage/perwork/result-NN.json`.
- **`scripts/merge-perwork-triage.mjs`** merged all 49 result files into `data/works.json` (`translation.workStatus` = raw triage category, `translation.englishState` mapped to the canonical ours/pd-ingested/elsewhere/untranslated vocabulary — `unclear` stays `englishState:null` so it can't be mistaken for a verified "untranslated" queue candidate) + wrote `data/triage/perwork/rollup.json`. Normalized 8 entries during merge: blog-only "copyrighted" claims lacking a named press downgraded to `unclear`; Brepols (a commercial press) flipped from mislabeled `pd-ingested` to `copyrighted`; Fordham/Global Medieval Sourcebook (genuinely free public sourcebooks) flipped from `copyrighted` to `pd-ingested`. One dropped entry (workIdno 3543, *De apparitione S. Michaelis*) recovered from its own agent's summary text and patched in by hand before the final merge.
- **Result across 1889 works / ~30.6M words:** 1364 `none` (16.5M words — genuine untranslated-first queue candidates), 241 `copyrighted` (6.1M words — deprioritized per the untranslated-first rule, redundant to translate), 167 `unclear` (5.0M words — needs a closer look before queuing either way), 117 `pd-ingested` (3.0M words — link/ingest candidates, not translate). Largest single verified-untranslated works: Paschasius Radbertus *Expositio in Matthaeum* (411K words), an anonymous *De libro Psalmorum* attributed to "Beda?" (355K words), an anonymous *Breviarium* (263K words), Rabanus Maurus's Ezekiel commentary (243K words).
- Some authors flipped hard from their author-level "partial" label once seen per-work: Ambrose of Milan came back 69% `pd-ingested` (NPNF2-10 covers most of his corpus) — a reminder that the author-level bucket is coarse and the per-work data now supersedes it for queue-building purposes. `data/triage/authors-status.json` itself was NOT rewritten — it stays as the author-level snapshot; `data/works.json`'s per-work `translation.*` fields are now the authoritative granularity for anything downstream (chunking targets, queue ordering).
- **Not done, flagged as future work, no signal it's needed yet:** the 167 `unclear` works got a note explaining the ambiguity but no resolution pass; a follow-up could re-research just that subset with a sharper prompt (name the specific ambiguity type) if the queue ever needs them disambiguated.

## Prior session (2026-07-04, RelTech independent-catalog): PG author resolution COMPLETE, 167/167.

- Last session's archive.org-metadata lead (creator field) topped out at 57/167 and was correctly diagnosed as near-ceiling for that source. The real unlock was a **third, independent catalog**: RelTech's *Electronic PG* volume list (`http://rosetta.reltech.org/PG-list.html`) — a plain-text per-volume author/content line for all 161 tomes, not another archive.org/Google Books pass. New script `scripts/gapfill-pg-reltech.mjs` fetches (plain HTTP — the host's TLS cert doesn't cover `rosetta.`/`www.`, only `phoenix.reltech.org`, so don't try to force HTTPS) and caches it at `raw/html/pg-list-reltech.html`, parses to `data/pg-tome-reltech.json`.
- Cross-checked the source against tomes already trusted before relying on it further: 068/074–076 "Cyril of Alexandria" (archive.org) matches RelTech's own 069–073 entries; 111 "Nikolaos I Mystikos" (last session's archive.org creator-field hit) matches RelTech's 111 almost verbatim; 010's mixed "Gregory Thaumaturgus, ... Hippolytus, etc." matches our existing combined-author note. Source checks out.
- **`resolve-pg-authors.mjs` gained Signal 5** (RelTech, fallback only — signals 1–4 still take priority when they resolve). **Result: 167/167 PG tomes now carry an author signal** (was 57; 20 high-confidence, 147 medium). `build-gap-map.mjs` → **all 134 gap tomes now carry an author** (was 49).
- **This closes item 1 (the 9 fully-bare tomes: 069, 071–073, 097, 110, 125, 126, 150 — all resolved) and item 3 (Epiphanius/Methodius/Theodoret/Zonaras — all pinned) from last session's remainder list.**
- **Caught and fixed a real false-positive bug this surfaced**: `build-gap-map.mjs`'s `CHECKLIST_AUTHORS` used loose whole-string substring regexes (`/epiphanius/i`, `/eusebius/i`, `/methodius/i`). Once RelTech's richer combined-author tomes were in the mix, those regexes started crediting the WRONG same-named person — "Epiphanius of Constantinople" (086-1, a 6th-c. monk) and "Epiphanius Monachus Hierosolymitanus" (120) both matched "Epiphanius of Salamis"; "Eusebius of Alexandria"/"Eusebius of Emesenus" (086-1) matched "Eusebius of Caesarea"; the 13th-c. Patriarch "Methodius" bundled into tome 140 matched "Methodius of Olympus". **Fixed by matching against discrete `'; '`-split fragments with anchored (`^...$`) patterns**, not substring-anywhere on the joined string. Re-verified: Epiphanius of Salamis now correctly 041/042/043 only, Eusebius of Caesarea 019–024 only, Methodius of Olympus 018 only.
- One known source blemish (not our bug): RelTech's PG 135 entry is missing a comma in the original HTML ("Joannis Zonaræ Georgius Xiphilinus, Isaacius Angleus...") so our parser can't split "Joannis Zonarae" from "Georgius Xiphilinus" — they land as one fragment. Harmless here (both are real content of that tome; `/zonar/i` still substring-matches and correctly adds 135 to the Zonaras hits) but worth remembering if this fragment string is ever used for exact-match logic elsewhere.

**Next real thread, in order:**
1. Phase 3 OCR benchmark is done (`benchmark/RESULTS.md`) — Sonnet 5 for Latin bulk gap-OCR (1.48% mean CER), Greek stays on Calfa's pipeline. Per-work triage of partial/mixed PL authors is a separate, unrelated Phase 4 thread — can now write into works.json slots using the completed tome→author map.
2. If a genuine reason arises to keep polishing PG author data: the RelTech text field itself is still a raw, un-normalized string (mixed Latin/English forms, occasional missing-comma artifacts like PG 135) — a future pass could normalize it into a controlled author-name vocabulary, but there's no signal that's needed yet; don't do it speculatively.

Migne biography read-through: APPROVED by Wilson 2026-07-04 — no open decisions remaining from the 2026-07-03/04 pilot+bio thread. (Joel read-through + both Greek-vs-Latin rulings: RATIFIED 2026-07-04, see above.)

## Done 2026-07-04 (PG Google Books gap-fill session, history)
- **Archive.org re-query dead end**: tried `title:(patrologiae graeca)` (247 docs) and `description:("series graeca")` (215 docs), merged with the original 246 to 275 unique items, re-ran the same volume/identifier/title matching against all 35 gap tomes — 0 new matches. These tomes have no individually-cataloged archive.org item, only the `patrologia-volumes` mega-item (no per-file metadata).
- **Google Books titles worked**: `scripts/gapfill-pg-googlebooks.mjs` fetched the plain-HTML `<title>` tag for every `googlebooks` link in `data/volumes.json` (162 requests, 800ms spaced), filtered Migne's boilerplate ("Patrologiae cursus completus...", "Patrologiae Graecae - Jacques-Paul Migne") → `data/pg-tome-googlebooks.json`, 26/35 gap tomes with a real title (e.g. 067 → Socrates Scholasticus/Sozomen *Historia ecclesiastica*; 091 → Maximus Confessor; 131 → Anna Comnena *Alexias*).
- Caught one mismatched-link case (PG 105 credited to Origen via a stray Google Books ID that's actually Origen's own works) — excluded by ID rather than left as a loose flag.

## Done 2026-07-04 (PG tome→author index session)
- **`data/pg-tome-index.json` built** (`scripts/build-pg-tome-index.mjs`): matched 132/167 PG registry tomes to an archive.org item (up from the 47 already linked in `volumes.json`) by cross-referencing a fresh archive.org title search (`data/cache/ia-search-pg.json`, 246 docs matching "patrologiae cursus completus graeca") against three signals — the search doc's `volume` field, `_vol_NNN[a-c]` in its identifier, or "Volume NN" in its title — then pulled each matched item's own `/metadata/<id>` record (its `description` field is archive.org's own catalog note, e.g. tome 010's "S. Gregorius Thaumaturgus, S. Hippolytus Portuensis..." — NOT scraped from a third party, NOT from memory).
- **`data/pg-tome-authors.json` built** (`scripts/resolve-pg-authors.mjs`): turns the raw index into a clean `tome -> author` field. Caught and fixed a real bug en route — several archive.org items (`patrologiaecursu04/10/15/16/36/37/38/45/66/93mignuoft`) share the IDENTICAL multi-volume TOC blurb ("t.3-4. Dionysius...--t.15. Origenis.--t.16. Origenis (3 pts)...--t.35-38. Gregorius Nazianzenus..."); naively substring-matching a checklist author against that blurb would credit e.g. "Origen" to tome 004 (wrong — 004 is Dionysius the Areopagite, t.3-4). The resolver now parses `t. N[-M]. Author` spans and only credits a tome when its own number falls inside the span. 30/167 tomes now have a resolved author (20 high-confidence direct hits, 10 medium-confidence span matches).
- **`firstOneKCandidateAuthors` in `data/gap-map.json` is now computed, not asserted**: 4 of 9 checklist authors pinned to real tome numbers — **Origen → 011, 013, 014, 015, 016-1, 016-2, 016-3, 017**; **Eusebius of Caesarea → 020, 021, 023, 024**; **Gregory of Nazianzus → 036, 037, 038**; **Hippolytus → 010** (combined-author tome, one name among several — not a clean single-work tome). Epiphanius, Methodius, Theodoret, Zonaras, Anna Comnena still unconfirmed (see next-session item 3). 25/134 gap tomes now carry a verified author field total (`gapTomesWithAuthor`).
- Not yet committed to git this session — do that before touching anything else.

## Done 2026-07-04 (Stripe/OG session, earlier)
- **Support tiers now Migne-native Stripe links** (commit `b764b0f`, deployed): were reusing Acta products; created live Wroot Labs products/prices/links — $10 column / $300 work / $10-mo patron, each tagged metadata `project=migne`+`tier`. Old Acta links untouched.
- **OG image + social meta** (commit `e9d5ea7`, deployed, verified live): `site/og.png` (1200×630, shelf + PG 162 ghost); `site/og.html` = regen source; OG/Twitter tags added to `site/index.html` AND `scripts/build-landing.mjs` so rebuilds keep them.

## State

- **LANDING + RESOLVER BUILT 2026-07-03** (commit `8b7cf26`, per `site/landing-resolver-spec.md` — all deliverables + acceptance checklist run in browser).
  - `scripts/build-landing.mjs` → `site/index.html` + `site/resolver-data.json` (13KB). Englished set scanned from built pages; ledger from registries (85,525,824 / 387 / 73); shelf server-rendered with PG 162 ghost; run it after every work ships. **New works must also be prepended to the `RECENT` list at the top of the script** (editorial, newest first — the build fails loudly if a built page is missing from it).
  - `site/resolve/index.html`: path or query params (`s`/`v`/`c`, plus `vc` for the no-JS form), PL nearest-preceding anchor, PG pair normalization (223→#c224 verified), miss/ghost/invalid pages.
  - **`vercel.json` lives in `site/`, NOT repo root** — deliberate deviation from the spec: the deploy root is `site/` (`cd site && npx vercel`) and Vercel reads rewrites from the deploy root only.
  - Both work-page builders now emit the nearest-anchor hash fallback + the analytics snippet; pages rebuilt, verifiers clean. `volumes` map in resolver-data includes ALL volume numbers (scan-less ones as `{}`) so range validation works.
  - **Rewrites don't exist on the local http.server** — citation paths 404 locally; test via `/resolve/?s=…&v=…&c=…`, and re-test path form after first deploy.
  - **DEPLOYED — migne.app IS LIVE (2026-07-03, Wilson's per-action OKs given in-session).** Vercel project `migne` on team wilson-pruitts-projects, prod deployed via `cd site && npx vercel --prod`, domains migne.app + www attached (Cloudflare A/CNAME, DNS-only), Web Analytics toggled ON by Wilson (script serves 200). Citation rewrites verified live: `/pl/139/473a` → Abbo `#c473a`, `/pg/139/223` → Joel `#c224`.
  - **Support section added post-launch same day** (commit `626a5f1`, Wilson authorized): Acta pattern, SAME Stripe payment links as actasanctorum ($10/$300/$10-mo), migne copy ("a column / a work / patron"), queue count interpolated from the rollup. Styles live in `sketch/styles.css` (base) so work-page rebuilds preserve them.

- **DIFF-VS-SCAN DONE FOR BOTH PILOTS 2026-07-03** (commits `3cf8f84` Joel, `c84cdd4` Abbo). This closes the pre-deploy verification debt from both pilot sessions.
  - **Joel: all 21 flagged cruces adjudicated against the plates** (verdict-by-verdict record appended to `src/english/joel-chronographia/cruces.md`; page rebuilt, verifier clean, re-indexed — 202 cruces).
    - **Real corrections landed:** Ozias 52 (was 59 — Calfa νθί = νβʹ), Zambri 12 (was 18 — ιᾔʹ = ιβʹ), Eli's ϟʹ=90 plate-verified (koppa misread as ἱ), βέβηλον (was θέόηλον — broken type), Συνέπων (was Τυνέπων), κοιτωνίσκων (was κοιτώνων), Tzimiskes ἡμέρας λʹ, Seven Sleepers τβʹ=302 plate-verified on BOTH columns.
    - **Two Greek/Latin divergences in Migne himself** (not OCR): Joram ἔτη βʹ vs Latin *duodecim*; Michael VII χρόνους ζʹ vs Latin *sex*. Per the Greek-primary/as-printed policy the English now follows the printed Greek (two / seven) with the Latin noted. **RATIFIED by Wilson 2026-07-04 — Greek stands for both, no policy exception.**
    - **Three NEW lacuna patches (10–12,** all appliedPostChunking): Ochozias's upper-story clause (0240), Nestorius's `(υἱὸς` (0256), Maximinus's wax/bones line (0256→0257 seam). 13 patches total; patches 5/6/7/8 plate-confirmed verbatim en route.
    - **Scan-copy gotcha:** `patrologiaecurs63migngoog` clips line-initial characters on some left margins; a second copy (`patrologicursus73migngoog`, 86MB, now in `raw/scans/pg139/`, offset +4 pp, full margins) settled the two clipped readings (Maximinus γʹ, Συνέπων Σ).
    - **Column-map tail fixed:** leaf values for Calfa pages 146–151 were +2 (token verification had matched generic words — lesson: verify with distinctive tokens only); corrected in `data/pg-column-maps/pg139.json`. The three parity-inferred greekCols (284/285/288) were all CORRECT — chunk 0011's anchors stand.
  - **Abbo: spot check PASS** (`src/english/9741/diff-vs-scan.md`): 3 sample pages, 28 phrases, anchor-placement check — TEI faithful to plates. Known TEI boundary: æ→ae normalization + **Mabillon's footnotes absent** (deliberate; would need OCR from plates if the site ever wants Migne's full apparatus). PL 139 scan in `raw/scans/pl139/` (57MB, gitignored).
- **Joel read-through APPROVED by Wilson 2026-07-04** — register/alignment good; both Greek-vs-Latin divergences (Joram, Michael VII) ratified Greek-stands, no exception. Page: `site/pg/139/chronographia/`.
- **Abbo read-through was already APPROVED**; with diff-vs-scan done, Abbo's remaining pre-deploy items are site-wide, not work-level.
- Pipeline/state detail from the pilot sessions: see the 2026-07-03 pilot entries in git log and `patrologia.md` memory; earlier state (works.json, TEI corpus, triage, biography, sketch) in prior resume-note versions.

## Done 2026-07-04 (Song of Songs per-work triage, evening session)

- Wilson asked to prioritize Song of Songs (Cantica canticorum) commentaries as the next translation queue, smaller works first. First pass over `works.json` surfaced 8 already-verified-`none` works from the existing author-level triage (Alcuin, Ambrose, Anselm of Laon, Anon. Magnificat/Cantica, Cassiodorus?, Rabanus Maurus) — none of these needed re-checking.
- A second tier of 22 more Cantica works had never been individually verified (their authors weren't in the 118-author partial/mixed pool the Phase-4 batches covered) — includes several famous names (Bernard of Clairvaux, Bede, Gregory the Great, Rupert of Deutz, Gilbert of Hoyland) where a translation was plausible. Ran 5 telemetry-gated Haiku agents (~5 works each) to verify each individually.
- **Caught and fixed a real cross-batch error**: two agents in different batches both credited M. Columba Hart's 1970 Cistercian Fathers translation to *different* William of Saint-Thierry texts (PL 184 "ex Bernardo contexta" vs PL 180 "Expositio altera"). Resolved with a direct follow-up search: Hart's translation is of "Expositio super Cantica canticorum" = PL 180 cols 473-546, matching workIdno 6126 exactly. Corrected workIdno 6278 (PL 184) back to `none` — it has no known translation.
- **Results, patched into `data/works.json`, provenance in `data/triage/cantica-secondtier.json`**: 3 pd-ingested (Jerome/Origen homilies — NPNF; Bernard's Sermones — Eales 1893 PD, not the paywalled Cistercian one), 8 copyrighted (Anselm of Laon/Glossa – Dove; Gregory I – DelCogliano; William's two genuine translated texts – Hart/DelCogliano; Rupert of Deutz – brand-new 2024 CUA Press/FOTC; Bede – Paulist Press; Gilbert of Hoyland – Braceland/Cistercian), 2 unclear (Richard of St. Victor and Honorius of Autun — both have only a translated prologue, need a closer look before queuing), 9 confirmed **none** (genuinely untranslated, safe to queue): Robert of Tombelaine (2.9K words), William's "ex Bernardo contexta" (11.6K), Bruno of Segni (17.2K), Haimo of Auxerre (25.9K), Angelomus of Luxeuil (31.1K), Philip of Harvengt's *Moralitates* (38.3K) and *Commentaria* (123.6K), Gilbert Foliot (65.7K), Wolbero of St. Pantaleon (105.8K), **Thomas the Cistercian (314.4K — bigger than any single work translated so far)**.
- **Combined Song-of-Songs untranslated-first queue is now 17 works** (8 from the original tier + 9 from tonight), smallest-first from Anon. *Expositio cantici Magnificat* (2,071 words) up to Thomas the Cistercian (314,396 words). Not yet built into a formal ranked queue file — just verified and ready.

## Next moves (superseded by the top-of-file section — that one is current)

1. ~~Build the Song-of-Songs translation queue~~ — STARTED: Robert of Tombelaine (10379) is the first pilot, see top of file for exact resume point.
2. **Phase 3 OCR benchmark** (unchanged, already done — see `benchmark/RESULTS.md`): Sonnet 5 wins Latin bulk gap-OCR.
3. **PG gap map** (unchanged, already done — `data/gap-map.json`, 167/167 tomes with an author).
4. Optional, no signal yet needed: closer look at the 2 "unclear" Cantica works (Richard of St. Victor, Honorius of Autun) and the 167 unclear works from the earlier per-work triage batch.
5. After Robert of Tombelaine ships: the next 16 confirmed Song-of-Songs works are still queued (see the 2026-07-04 evening section further down), smallest-next is Bruno of Segni (17.2K words) or Haimo of Auxerre (25.9K) depending on whether Alcuin/Anselm/etc. from the original tier-1 list are picked first.

## Open flags / small debts

- Consider a **systematic bottom-line/overhang sweep per Calfa volume** before future PG works: Joel yielded 13 patches, 3 of them found only at diff-vs-scan. The detector (Greek tokens in Latin-column x-range) plus a last-line-of-column check would catch most up front.
- Scan-leaf ≠ PDF-page−1 cannot be assumed constant within a volume (PG 139 drifts by 2 in the tail); column-map verification must use distinctive tokens.
- PG 075 scan series check; author-tail triage; biography read-through — all unchanged.
- Scan artifacts: `raw/scans/pg139/` (~210MB, two copies) + `raw/scans/pl139/` (57MB), all gitignored, re-downloadable.
- No git remote (ask Wilson before creating).

---

## ✅ 8967 *LIBER PSALMORUM* — SHIPPED, DEPLOYED, PUSHED 2026-09-05

Corpus **156 → 157**, `/glossa` **50 → 51 of 58**. `origin/master` = `12c089f` (36 commits).
Deployed from `site/` as `dpl_Fvo76hvrvdCivuNTaPHVVSCFKdJr`, smoke-tested on the real domain:
work page, cruces page, `/glossa` and the landing all 200; badge reads **New English
translation** (correct — `workStatus` stayed `null`); **zero raw brackets, 235 apparatus notes
rendered**; the Psalm CXVIII sentence live with Migne's `et quibus`, and *Praise ye the Lady*
live at 1077A.

⚑ **DEPLOY GOTCHA, and it refines the memory:** `npx vercel --prod --archive=tgz` from `site/`
returned **"Not authorized"** while signed in as the *correct* account. The standing note says
`vercel teams ls` is the diagnostic and that if the linked org is absent no `--scope` will help.
**Here the org WAS present, the project WAS visible (`vercel project ls` showed `migne` bound to
migne.app), and adding `--scope wilson-pruitts-projects` fixed it immediately.** So: "Not
authorized" has (at least) two causes — wrong account, and a missing explicit scope on a CLI
session that can otherwise see the team. **Try `--scope` before concluding it is the account.**

**Marker totals counted from the files at ship time** (⭐ never quote them from a merge section —
see cruces.md §H11): Band A 38 `[var:]` · 7 `[sic:]` · 2 `[cj:]` · 1 `[d:]` · Band B 112 · 56 ·
17 · 1 · Band C 33 · 42 · 33 · 2 · **work 183 · 105 · 52 · 4**.

### ⬜ Left open on this work, none of it blocking
1. **`ferrcis` @1078D** — fired, and flagged in both directions as the one call a second reader
   should re-open: it is the italic-`e`-images-as-`c` hazard's own shape.
2. **Seven Gallica sites**, one IIIF request each, no ruling on spending them: `f443`, `f449`,
   `f453`, 0932B, 0981C, and the two Isaias quotations at 1045C.
3. **1059C `justificaui`** — the twin carries it, the English still renders `justificati`.
4. **1039B `promisit`/`promissit`** — two instances in the column, the report does not say which.
5. **1065C `quia`→`qui`** — ruled no marker; the English still renders CC's `quia`.
6. **1017B `(AUG.)`→`(AU.)`** and six `(CAS.)`/`(CASS.)` sigla — not applied, English edits blocked.
7. **The five `[cj:]` `cj-inversion.mjs` flags in the MERGED bands A and B** — a reading list, at
   least one a demonstrable false positive. Merged bands were not edited on a new tool's say-so.
8. ⚑ **NOT OURS:** `build-cruces` warns a passage of `oecumenius-philippians`' `cruces-0010.md`
   never reached that work's `cruces.md` and is unpublished. Somebody's merge dropped it.

### ⭐ What this work taught that outlives it
- **A per-band marker count is a SNAPSHOT, not a fact** (§H11). §D and §F2 both disagree with the
  files today, because a later band's patch pass reaches columns in earlier bands.
- **NO MARKER COUNT MEANS ANYTHING UNTIL THE PATCH PASS HAS RUN**, now measured twice: Band C
  fired 3 `[sic:]` and reported ~72 unfireable Migne defects; it ended at 42.
- **Compositor errors are Migne's and get restored; ink damage is the copy's and does not** — and
  I broke that rule at 1052C in the very pass that quotes it, importing `cxaltaxit` when the word
  he set is `exaltaxit`.
- **`scripts/patch-build.mjs`** builds a patch pass mechanically and refuses any site that does
  not resolve uniquely in its declared column; **`scripts/marker-reconcile.mjs`** checks every
  "unlocks" claim against the English and distinguishes MISSING from WITHHELD-by-ruling;
  **`scripts/cj-inversion.mjs`** shortlists Pattern 18 inversions and its header says it never
  decides.
- ⛔ **WHEN THE PIPELINE AGREES SOMETHING IS IMPOSSIBLE, CHECK WHETHER IT HAS ALREADY BEEN RULED
  POSSIBLE.** Two stints, three agents and I reported the omitted negative as unreachable; Wilson
  had ruled it on 2026-08-15 and it was written into Pattern 18 with three worked examples.

### ▶ NEXT IN THE GLOSSA QUEUE (smallest first)
9002 Matthew (45,922) — the last gospel — then 8963 Numbers (26,336), 8961 Leviticus (32,205),
8956 Isaiah (32,299), 8957 Job (38,206), 8949 Exodus (46,328), 8950 Genesis (47,910).
⚑ Quote **~57K/chunk** for a Glossa book of this note density, not the runbook's 45K.
