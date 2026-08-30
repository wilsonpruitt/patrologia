# 8986 · *Glossa ordinaria*, **Epistola II ad Corinthios** — cruces

PL 114, cols **0551A–0570C** · 10 chunks · 7,797 Latin words. Attributed by Migne to
Walafrid Strabo; in fact **Anselmus Laudunensis et schola**. Translated 2026-08-30 by two
Opus stints of five chunks each, neither of which could see the other.

**This file is the MERGE LAYER, and it is not a copy of the range files.** `cruces-0000.md`
(chunks 0000–0004, 2 Cor 1–5) and `cruces-0005.md` (chunks 0005–0009, 2 Cor 6–13) stand
beside it and carry the per-site detail — the full lemma collations, the negation tables, the
unexpressed-subject rulings, the plate candidates. This file records only what was
reconciled **across** the two ranges, which is the thing neither stint could do and the thing
a later sweep must not churn.

⚠ **Deliberately not the 8977/8944/9003 form.** Those merges embed their range files, and
because `build-cruces.mjs` concatenates *every* `cruces*.md` in the directory, their published
pages carry the embedded text and the standalone file both — the apparatus appears twice.
Verified 2026-08-30 on `/cruces/pl/114/apocalypsis-b-joannis/`. Keeping this file to the merge
layer alone makes the published page read head → range A → range B, once each.

## §0 · Apparatus, counted from the English

**7 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` · 0 `[f:]`** — counted
from `src/english/8986/0*.md` after the merge edits, not summed from the two stints' reports.

`verify-english.mjs 8986` → **OK, 10 chunks**, columns/notes/sections aligned, no duplicate
paragraphs. `scan-raw-markers.mjs` → no marker rendered as literal bracket text. Word ratios
1.45–1.50×, no ratio warning.

⛔ **`plate-gate.mjs 8986` FAILS: 7 markers, 0 recorded plate reads.** All seven are `[var:]`
resting on six unread columns (0554A · 0559C ×2 · 0561A · 0562A · 0567D · 0568A). The work
does **not** ship until each is read at the plate and recorded in `data/plate-reads.json`, or
withdrawn. This is the gate working as designed, not a defect in the translation.

⭐ **Both stints independently declined to fire a single `[sic:]`**, and both gave the same
reason without having seen the other say it: a `[sic:]` accuses *Migne's type*, our Latin is
Corpus Corporum's transcription and not the plate, and no column of this work has been read.
Every suspicious form was carried as printed with a crux and a plate request instead. Given
that the 2026-08-29b sweep found PL 113's `[sic:]` 93% false and PL 114's 65% false, that is
the correct instinct and it should be read as evidence the stated marker policy transfers.

## §1 · What was reconciled across the ranges — two sites, both applied

The runbook's merge step exists because two agents *will* diverge on terminology and neither
can see the other. Two divergences were found; both are recorded here with the losing reading
named, because a later sweep that cannot see the argument will otherwise churn them back.

### 1a · Bare *pseudo* → **"the false apostles"** (was "the false ones" once, at 0552A)

Migne prints the clipped noun *pseudo* eight times and the full *pseudoapostol-* four times.
`cruces-0005.md` §1 rendered every bare *pseudo* as "the false apostles"; `cruces-0000.md`
rendered its one instance (0552A, *ut pseudo faciebant*) as "the false ones".

**Settled for "the false apostles", and the proof is Migne's own antithesis at 0566A:**
*Hoc non ad apostolos pertinet … sed ad pseudo, qui componebant verba.* The clipped noun is
carrying "apostles" there — the sentence contrasts the true apostles with the false ones *as
apostles*, and "the false ones" would dissolve the antithesis into a vague slur. 0565C
(*non sumus similes pseudo, qui usurpant sibi potestatem*) and 0564C (*qui pseudo sequebantur*)
read the same way.

⚑ Resolved by **expanding the stump, not by contracting its twin** — the settled rule from
`GLOSSA-NT-AGENT-BRIEF.md`, applied here to a clipped noun in gloss prose rather than to a
lemma. Recording that extension explicitly, because the rule as written speaks of lemmata and
someone will otherwise re-derive it. One edit, `0000.md`.

### 1b · *consol-* → **console / consolation** throughout (was "comfort" in four places)

*Consolatio* is the theme word of this epistle and it straddles the split: chapters 1–2 are in
range A, chapter 7 in range B, and they are the same argument. A rendered the root
console/consolation/consolatory in its gloss prose (nine sites) but "comfort" in one lemma;
B rendered all five of its sites "comfort"/"comforted".

**Settled for console/consolation, on three grounds:**

1. **The gloss at 0551C argues on the word.** *Non solum ut consolaretur, sed etiam
   exhortaretur: et ita nostra consolatio valet etiam ad alios exhortari.* The passage turns on
   *consolatio* against *exhortatio*, and "console / exhort" keeps the pair distinct in English
   where "comfort / exhort" blurs which of the two the argument is about.
2. **One Latin root, one English root**, across a work where a reader tracking the theme from
   chapter 1 to chapter 7 is doing exactly what the gloss asks.
3. ⭐ **"Comfort" is the Douay and AV word here, and conforming the lemma to the familiar
   English Bible is the CONFORMATION defect this brief exists to prevent.** Standardizing on
   *consolation* moves away from conformation, not toward it. This is the one direction of the
   two that no later sweep can call a Bible-conforming drift.

Four edits: `0001.md` (lemma *Donetis et consolemini* → "You should forgive and console"),
`0005.md` (*Repletus sum consolatione* → "I am filled with consolation"; *Qua consolatus est
in vobis* → "Wherewith he was consoled in you"; and its gloss, "Because I saw Titus consoled
in you, I also have been consoled").

## §2 · Vocabulary compared across the ranges and found ALREADY in agreement

⚑ **Naming the control's class:** the comparison below is of Latin roots that occur in *both*
halves — those are the only ones that could have drifted. A term confined to one half cannot
diverge and is not evidence of anything either way. Seven roots qualified:

| root | ranges | rendering | verdict |
|---|---|---|---|
| *tribulat-* | A 0000/0003/0004 · B 0005/0006/0008/0009 | tribulation(s) | agree |
| *commend-* | A 0000/0002/0003/0004 · B 0006/0007/0009 | commend / commendation | agree |
| *gloriari, glorian-* | A 0000/0004 · B 0007/0008/0009 | glory, glorieth, glorying | agree |
| *conscienti-* | A 0000 · B 0006/0009 | conscience(s) | agree |
| *simplicit-/simplicit-* | A 0000 · B 0005 | simplicity (A) / adverbial (B) | not comparable |
| *consolat-* | A 0000/0001 · B 0005 | **reconciled — see §1b** | drifted |
| *pseudo* | A 0000/0001/0002 · B 0005/0007/0008/0009 | **reconciled — see §1a** | drifted |

⭐ **A rejected candidate, recorded because it looks like drift and is not.** "Boasting" appears
once, at 0568A in range B, against "glory/glorying" everywhere else. It renders ***jactantia***
(*et jactantia vitatur*), not *gloriari* — a different Latin word, correctly given a different
English one. The two stints agree on *gloriari* at every site. Do not "fix" this.

## §3 · What the two ranges did the same way without being told to

Recorded because agreement reached independently is worth more than agreement imposed, and
because a later reader will otherwise wonder whether these were coordinated. They were not.

- **`VERS. n.--` passed through verbatim, untranslated** (convention 1) at every occurrence in
  both halves.
- **Verse numbers out of sequence reproduced as printed**, never reordered — A found three
  (VERS. 2 for 1:3; VERS. 23 printed twice; `VER. 1.--` at 0554B), B found the Baruch citation
  at 0561A standing one quotation early. Both logged, neither touched.
- **Run-together non-words rendered for sense with a crux and a plate request, never a
  `[sic:]`** — A's *quamcredere* (0554C) and *duasepist.* (in a note), B's *abjicicimus*,
  *cum-tua* and *ibenter* (0563–0564). Both stints cited the same measured ground: that class
  runs 10-for-10 as *our* corruption, and a `[sic:]` would misattribute it to Migne.
- **Migne's stray and missing punctuation preserved** — A carried two sentences ending with no
  stop and one missing mid-sentence stop; B preserved the stray full stop in *in prima.
  Epistola* at 0562A.
- **Band-by-band punctuation comparison run by both, and it paid both times:** A found 10
  mismatches that had very nearly cancelled on totals; B found 8 (one deleted colon at 0569B
  restored, seven supplied marks removed). Zero mismatched bands in all 10 chunks at filing.
  ⭐ That is 18 punctuation defects in one short work that a totals comparison would have
  passed. The band test is not optional and this work is the second measurement saying so.

## §4 · Open against this work

1. ⛔ **The plate gate (§0).** Seven `[var:]` on six unread columns. Read and record, or
   withdraw. Nothing else blocks the work.
2. **The polarity read (step 4a) has not been run.** Required before ship, and it must be a
   blind reading pass — the checkers must NOT be given this file or the range files first.
3. ⬜ **`[var:]` candidates the stints declined, held for the plate reader** — chiefly
   *Transformantur* (0555D, Clementine *transformamur*: third person against first, materially
   different, declined because `-mur`→`-ntur` is the verb-ending shape CLAUDE.md 8a records the
   digitization *manufacturing*); and B's *Et Deus pacis erit vobiscum* (0570C, missing *et
   dilectionis* where the gloss expounds *dilectio*), flagged as probable **TEI loss wanting a
   patch, not a marker**. Range files carry the full lists with reasons.
4. ⚠ **Our PL 114 scan clips the right margin on some pages in this stretch** (p.265, p.281;
   p.327 clean). Any right-column crux above needs the second witness in `data/volumes.json` —
   never "illegible" from this PDF alone.
