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

**8 `[var:]` · 5 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` · 0 `[f:]`** — counted
from `src/english/8986/0*.md` after the merge edits AND the plate gate, not summed from the two
stints' reports. (Before the plate read the work stood at 7 `[var:]` and 0 `[sic:]`; the read
confirmed all seven, fired an eighth, and produced the five `[sic:]` — see §5.)

`verify-english.mjs 8986` → **OK, 10 chunks**, columns/notes/sections aligned, no duplicate
paragraphs. `scan-raw-markers.mjs` → no marker rendered as literal bracket text. Word ratios
1.45–1.50×, no ratio warning.

✅ **`plate-gate.mjs 8986` PASSES** (2026-08-30): every marker stands on a column that was read.
Six pages read at 300 dpi — 282, 283, 285, 286, 289, 290 — recorded in `data/plate-reads.json`.

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

1. ✅ **The plate gate — CLOSED 2026-08-30 (§5).** 7 stood, 0 false.
2. ✅ **The polarity read — DONE 2026-08-30 (§6).** 10 sites, 9 ours. Recorded in
   `data/polarity/8986.json`.
3. ✅ **Both held candidates settled at the plate (§5)**, and both against the stint's own guess:
   *Transformantur* was neither Migne's nor the Vulgate's, and *Et Deus pacis erit vobiscum* was
   Migne's own short lemma, not the TEI loss it was taken for.
4. ⚠ **Our PL 114 scan clips the right margin on some pages in this stretch** (p.265, p.281;
   p.327 clean). Any right-column crux above needs the second witness in `data/volumes.json` —
   never "illegible" from this PDF alone.

## §5 · THE PLATE GATE — six pages, 2026-08-30

Read directly by the session rather than by fenced agents, deliberately: briefing several readers
on the same suspicion produces convergence, not corroboration, and that failure is recorded three
times in this project already. `page = (column + 11) / 2`, re-derived here by fitting the six PL 114
rows of the 2026-08-29 sweep ledger *before* it was compared with 9006's identical map. Printed
corner numbers read FIRST on every page.

### ⭐ 7 STAND · 0 REVISED · 0 FALSE · 0 UNRESOLVED — and an eighth marker fired

| col | marker | verdict |
|---|---|---|
| 0554A | `[var:]` *Caupones tui vino aquam miscent* | **STANDS** — the gloss names the *pseudoapostoli* it is aimed at |
| 0559C | `[var:]` *Maledictus omnis qui pendet in ligno* | **STANDS** — Migne's gloss then asks *Quid est quod dicit, omnis?*, which is exactly what the marker claimed |
| 0559C | `[var:]` *terra es, in terram ibis* | **STANDS** |
| 0561A | `[var:]` *Ab omni iniquitate* | **STANDS** — its own lemma, glossed *Scilicet mentis* against the twin lemma *carnis* |
| 0562A | `[var:]` *qui passus est fraudem* | **STANDS** |
| 0567D | `[var:]` *Qui apponit scientiam, apponit et dolorem* | **STANDS** |
| 0568A | `[var:]` *Et ossa mea in frixorio confrixa sunt* | **STANDS** — the gloss stands on *frixorium* |
| 0570C | `[var:]` *Et Deus pacis erit vobiscum* | **FIRED BY THE READ** — see below |

⛔ Against a **65% false rate for PL 114** in the sweep three days earlier. The variable is the
marker policy, not the volume: this work fires no letter-level accusation against Migne's type at
all, and both stints reached that policy independently, without either seeing the other.

### ⭐⭐ NINE DEFECTS IN OUR LATIN THAT NO CHECK WE OWN COULD HAVE FOUND

Every one read *correctly* in our file, which is precisely why nothing caught them. All restored in
`data/tei-patches/8986.json`; the five that are Migne's own type each now carry a `[sic:]`.

**Corpus Corporum silently tidied Migne (5):** `nou`→non (0555B) · `Vebum`→Verbum (0561A) ·
`ete.`→etc. (0562B) · `Ostendlt`→Ostendit (0567B) · **`VERS. 51.`→VERS. 21.** (0559C) — the last is
the 9006 @0043A class exactly: CC corrected the verse address, correctly on the merits, and being
right is what made it invisible.

**Corpus Corporum broke what Migne set correctly (4):** `quamcredere` · `duasepist.` ·
`Transformantur` · **`ego` for `ergo`**.

### ⭐⭐⭐ 0570B — ONE DROPPED LETTER MANUFACTURED THE WORK'S HARDEST CRUX

`cruces-0005.md` §5.2 calls *Istam ego imitetur* "the worst site in my range": a nominative *ego*
governing a third-person *imitetur*. The stint reasoned it through, **declined a `[cj:]`**, named
*imiter* and *imitemur*, took neither, and rendered the sentence visibly broken rather than repair
what would not construe.

**The plate prints *Istam ergo imitetur*.** Verified at 5×. Corpus Corporum dropped one `r` and
invented the whole problem. ⚑ The discipline of rendering literally and logging the crux instead of
emending is what kept a wrong conjecture out of the text: the crux had no answer because it had no
question.

### The two held candidates, both settled against the stint's own guess

- **0555D *Transformantur*** — the plate prints **`Transformatur`**, third person singular, across
  the break `Trans-`/`formatur`. **Three readings existed and ours was nobody's**: Migne
  *Transformatur*, Clementine *transformamur*, our file *Transformantur*. The stint declined the
  `[var:]` and made it its top plate request, reasoning that `-mur`→`-ntur` is a shape CC
  manufactures — right to decline, wrong about the true reading. The English had followed the
  corruption ("They are transformed"); re-rendered singular, its subject taken from the preceding
  lemma *Vir*.
- **0570C *Et Deus pacis erit vobiscum*** — flagged by the stint as a probable **TEI loss** wanting
  a patch, since the Clementine has *et dilectionis* and the gloss expounds *dilectio*. The plate
  shows the short lemma is **Migne's own**. Not a loss but a divergence; `[var:]` fired, and the
  gloss reaching for *dilectio* anyway is the interesting part.

### Negatives recorded, because a checked negative is worth having

- **0555C *Ubicunque autem est spiritus Domini*** — the plate DOES print *est*; the stint's
  suspicion of a supplied word is refuted.
- **0562A *non tantum*** — present on the plate; nothing was lost there.
- **0568 *non est peccatum*** — the `s` is damaged type in this copy; the reading is not in doubt
  and no marker depends on it.

⚠ **p.290 clips the LEFT margin** and its left column has lost its opening characters. No marker
depends on that column. Any future crux at 0569 needs the second witness
(`raw/scans/pl202/copyB_patrologiaecurs114unkngoog.pdf`, a PL 114 copy B filed under `pl202`).

## §6 · THE BLIND POLARITY READ — three readers, 2026-08-30

Three Opus readers over 10 chunks, each fenced from the cruces, the TEI patches and the plate
reads, and from each other. **11 sites raised, 10 acted on, 1 declined.** `sites: 10 · ours: 9`.

⛔ Deliberately fenced from this file: on the 2026-07-28 sweep every agent handed the cruces
returned "all already logged" and found nothing, while blind readers on the same works found four
live defects. One reader here **disclosed that a `grep` glob had leaked six lines of the cruces
into its context, and withdrew the affected item from its own findings** so it could not inflate
recall. ⚑ Scope the glob to `src/english/<idno>/0*.md`; `*.md` matches the apparatus.

### ⭐ What the fourth test found that nothing else could

**0557B — a reader predicted a missing word from the English alone, and the plate had it.** Our
Latin read *Quia in ea **sine** manebitur*; the English, "there shall be abiding without", has no
complement. The reader reasoned that *sine* cannot govern nothing, proposed *sine **fine***, and
asked for one page. The plate prints **`sine fine`** — Corpus Corporum had dropped the word
outright, the only clean text LOSS in this work. No parity, count, band or marker check can see a
class like this: nothing was misaligned, and the English was faithful to a Latin that was wrong.

### The ten, by direction

**OURS (8 in the English):** *Vel passive **ergo*** read as though *ergo* were the word being
glossed, when *ergo* is the inferential particle and *passive* governs *operatur* — which Migne's
own gloss then equates with the passive *efficitur* (0557A) · *per hoc* mis-bracketed so that
"through this life" made *vita* the instrument rather than the subject its own gloss names
(0557A) · **two Pauline sentences attributed to Christ** by a bare "he" standing next to
*Christus*, where *alio loco* is this commentary's formula for another place in the Apostle
(0556D) · the negative left on *ab Evangelio* instead of on *solum*, turning "not on those grounds
alone" into a flat denial that the Gospel commends them at all — the `sed etiam` is the structural
proof (0563C) · *ut dicatur* read as purpose, making the Apostle act **in order that** he be
called negligent, when the lemma is *Devitantes hoc*, "avoiding this" (0563C) · **the subject of
*appareant* given to the Corinthians when it is the apostles** (0570A), which inverted who is
called reprobate at the hinge of the paragraph — settled by *probati enim videntur, dum judicant
peccatores* and by the lemma's own first-person *appareamus reprobi* · *Istam* rendered "this one"
where it is *pax* (0570B) · *patitur*, printed indicative, quietly made subjunctive to harmonize
with *habeat* (0567A).

**OURS (1 in the Latin):** the dropped *fine*, above.

**MIGNE'S (1):** *Ut inopia **illi*** (0563A) — a reader took it for a clipped *illius* and
proposed repairing the lemma. **The plate prints *illi*.** So the English stays as printed and the
divergence is now shown with a `[var:]` against Clementine 2 Cor 8:9 *illius* — which Migne's own
next clause reads. Repairing it would have smoothed away the thing worth seeing.

### The one declined, and why

**0557C *quo tamen nolumus mortem nobis tolli*** — a reader showed the sentence asserts the
reverse of its own paragraph (2 Cor 5:4 is *nolumus expoliari sed supervestiri* throughout) and
proposed reading *morte* for *mortem*. It rated itself "high on the defect, medium on the repair,
needs the plate", which is the right way to raise it. **The plate prints *mortem*.** The difficulty
is Migne's, our English renders it literally, and the proposed repair is declined because it would
emend against the page. Logged, unmarked: a real, well-formed word that reads oddly is Migne's.

### One further defect of Migne's, caught on the same pages

**0563A `abjicicimus`** — the plate prints `abjici-`/`cimus` across the line break, a doubled
syllable for *abjicimus*. A reader saw the malformed word in our file and **declined to call it
Migne's without a plate**, on the ground that our Latin is Corpus Corporum's transcription first.
That was correct, and the plate then made it Migne's. Now carries a `[sic:]`.

### Rejected candidates worth keeping

Between them the readers rejected some two dozen, each with the loser named. The ones a later
sweep is most likely to re-raise: *Peregrinamur non fide, sed specie* reads backwards against
2 Cor 5:7 until the preceding sentence fixes it as a claim about **sight** · *sanctus mundi est,
non Dei* is Migne's own paradox, not a defect · *super invocationem animae* is odd and is what the
plate prints · *minor verbis* is the deponent "I threaten", not the comparative · *ministri
justitiae aeternae* takes *aeternae* with *justitiae*, since it cannot be predicate to masculine
*ministri* · and VERS. 6's *Hoc non ad apostolos pertinet, quia non erant eloquentes*, which reads
backwards at first sight and is right, because the comparison Paul disclaims is with the *pseudo*
precisely on the ground that the apostles were not eloquent either.
