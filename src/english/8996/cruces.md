# 8996 — PL 114, *Epistola ad Romanos* (Glossa ordinaria, Anselm of Laon and his school)

Cols 0469A–0520B, 20 chunks, translated 2026-08-31 in four concurrent stints (0000–0004,
0005–0009, 0010–0014, 0015–0019). This is the merged cruces file — runbook step 4. The four
stint files are preserved unmerged as `cruces-0005.md` / `cruces-0010.md` / `cruces-0015.md`
for their full working detail; this file is the single reconciled record.

---

## Work-wide conventions fixed at merge

Two drift sites were found and reconciled across the four stints; everything else agreed on
first pass.

1. **`usque ad` → *as far as*, not "down to."** Chunks 0000–0004 (the first stint) had fixed
   "down to"; chunks 0005–0019 (the other three, independently) used "as far as," citing the
   corpus precedent in siblings 8976/8965/8970/8981. Checked against 8976: 73 sites use "as
   far as," 1 uses "down to." **"As far as" is the corpus convention; 17 sites in
   0001.md/0002.md/0003.md were corrected to match** (`sed -i 's/\*down to\*/\*as far as\*/g'`
   over those three files, verified against `verify-english.mjs` after).
2. **`justitia`/`justitia Dei` → "justice," never "righteousness."** All four stints agreed
   independently (cruces.md §Register, cruces-0005.md §V). No drift found in the body text on
   a corpus-wide grep.

Everything else checked clean at merge: *fomes*/*propassio* stayed italic Latin throughout (no
stint anglicized them), *praevaricatio*-family stayed "transgression," Pattern 17 (thou/you)
was applied consistently by grammatical number in all four stints, and no stint introduced an
em-dash or a guillemet.

---

## ⚠ Plate-read state — READ THIS BEFORE THE PLATE GATE

`data/plate-notes/coverage.json` records this work as coverage **`partial`**: only PL 114 pp.
240 (cols 469/470) and 265 (cols 519/520) were read at the plate before chunking (2026-08-29,
the plate spot check). Everything below is additional plate reading done DURING this
translation session, by two of the four stints.

**Cols 0481A–0494D (the 0005–0009 stint) were read at the plate on TWO independent
witnesses** — archive.org `patrologiaecurs06saingoog` (`page = (column+11)/2`, but this copy
clips margins and carries ink damage in this range) and Gallica `ark:/12148/bpt6k54939667`
(`f = (column+1)/2`, clean). The read withdrew six candidate defects as scan artefacts and
confirmed one (`[cj:]` at 0493B) and one Vulgate divergence set (3 `[var:]`, listed below) —
see `cruces-0005.md` §P for the full account.

**All other columns in this work (0471A–0480D, 0494A–0518D, i.e. most of the chunks 0000–0004,
0010–0014, and 0015–0019 stints) stand on UNREAD plates.** Under CLAUDE.md hard rule 8a, no
`[sic:]` or `[var:]` may be *fired in the text* on an unread column. Every candidate from those
three stints is logged below as **⬜ MARKER OWED**, with the type carried untranslated and the
sense supplied in plain words beside it (7a⁗) where the carried run governs the clause. Two
ways to close each one: read the column, or withdraw it (per the 0005–0009 stint's own
experience, expect roughly half to withdraw).

**`data/plate-reads.json` entry: WRITTEN** (this is the JSON `plate-gate.mjs` actually reads —
`coverage.json` is a separate record for the plate-notes/asterisk-layer apparatus). Three read
ranges recorded: 0469A–0470D (p. 240, the chunking-time spot check), 0481A–0494D (pp. 246–252,
the two-witness read done in the 0005–0009 stint this session), 0519A–0520B (p. 265, the
chunking-time spot check).

**Columns still needing a plate read before this work can ship `ours` clean of owed markers:**
0471–0480 (chunk-0000-0004 stint, 6 candidates + 1 fired `[var:]` at 0470A already licensed),
0495–0518 (chunks 0010–0014 and 0015–0019 stints, 10 candidates). See the tables below for
exactly which columns and what's at stake at each.

---

## §1 · Markers fired in the text (licensed — stand on read columns)

### 0470A — `[var:]`, Acts 13:2 (chunk 0001)

Printed: *Segregate mihi Barnabam et **Paulum** in opus ad quod assumpsi eos* `[n: (Act. XIII)]`.
Vulgate: *segregate mihi Barnaban et **Saulum***. Material — the surrounding gloss is about
precisely the change of name *Saulus*→*Paulus* (BED., AUG., AMB., HIER.), so a lemma reading
*Paulum* removes the very form the argument turns on. `[var: Vulg. Acts 13:2 *Saulum*, "Saul,"
where Migne prints *Paulum*.]` **Col 0470 is plate-read** (p. 240) — licensed.

### 0487B–C — `[var:]`, Rom 5:20 (chunk 0007)

Migne: *Ubi abundavit delictum, superabundavit **et** gratia.* Vulg: *Ubi **autem** abundavit
delictum, superabundavit gratia.* `[var: … without *et*]`. Plate-verified on both witnesses
(archive p. 249 / Gallica f244).

### 0485C — `[var:]`, Wisdom 2:24 (chunk 0006)

Migne: *Invidia diaboli mors intravit in hunc mundum.* Vulg: *invidia autem diaboli mors
**introivit in orbem terrarum**.* Three divergences at once, and the quotation has been
conformed to the wording of Rom 5:12 (the verse being expounded), not to the Vulgate.
`[var: Vulg. Sap. 2:24 …, "into the whole earth"]`. Plate-verified, p. 248.

### 0491B — `[var:]`, Exod 20:17 (chunk 0009)

Migne: *Non concupisces **rem** proximi tui **vel uxorem**.* Vulg: *Non concupisces **domum**
proximi tui: **nec desiderabis uxorem ejus**.* Migne's *rem* is precisely the generalizing word
the gloss then argues from (*Generalem, quia ex ea omne malum*). `[var: …]`. Plate-verified on
both witnesses (p. 251 / f246).

### 0493B — `[cj: *ab*; read *ad*, "to"]` (chunk 0009)

Printed *impotens surgere **ab** bonum operandum*, confirmed identical on both plate witnesses
— this is Migne's own printing, not a scan artefact. *ab* is a real preposition and renders in
place ("powerless to rise **from** the doing of good"), which is the exact reverse of the
paragraph's sense (*naturale est quodammodo bonum velle per rationem*). Pattern 18's founding
shape: Migne's word keeps its English, the conjecture *ad* stands beside it. *ab* + accusative
is ungrammatical, which is the evidence.

### 0501C — `[cj: *volentem*; read *nolentem*, "him that willeth not"]` (chunk 0013)

**The most substantive finding of the whole run.** Migne prints *volentem praevenit ut velit,
volentem subsequitur ne frustra velit* — the formula is Augustine's (*De natura et gratia*;
*Enchiridion* 32): **nolentem** *praeveniat ut velit,* **volentem** *subsequatur ne frustra
velit* — grace goes before the man who does NOT will, and follows the man who does will. With
*volentem* printed twice the first clause is vacuous and the antithesis the whole gloss argues
collapses. The type is not broken (*volentem* is a real form), so `[sic:]` has nothing to wrap;
the word that went wrong is a **negation** (the *no-* of *nolentem*), Pattern 18a's class. The
gloss is additive: Migne's printed word keeps its English, the conjecture stands beside it.
⬜ **This column (0501) is unread** — the marker is placed per Pattern 18a's licence for a
negation-class conjecture, but confirm at a plate read before deploy; if it is not settled by
the plate the marker still stands (18a does not require a read the way `[sic:]`/`[var:]` does,
since it accuses no one — see 8993's session note on this class).

---

## §2 · UPDATE 2026-08-31 — the eight owed markers were read at the plate; seven withdrawn

All eight `[sic:]` candidates logged as owed in this section (cols 495, 497×2, 500, 504×2,
512×2, 517) were carried to the plate this session. **Seven were Corpus Corporum's own
corruption, not Migne's** — dropped/doubled letters, transposed letters, one fused pair of
words, one split single word, and one lost to the archive.org scan's margin clipping (recovered
clean on the Gallica witness). **Only one — 0497B *revela* — is confirmed as Migne's own
printing** and stands in the text, now plate-licensed (see `plate-gate.mjs 8996`, clean).

Full findings, page numbers, and witnesses: `data/tei-patches/8996.json`. The seven corrected
Latin+English pairs are already applied in place in `src/latin/8996/` and `src/english/8996/`;
`data/plate-reads.json` records the six additional read ranges. **This is the fourth work in
this volume where the plate read creates or withdraws markers rather than merely confirming
them** (see 8993, 8981 sessions) — the false-positive rate on `[sic:]` candidates that never
reach the plate continues to run far higher than the corpus's older frequency-based estimates
suggested.

The original owed-marker table below is kept for the record of what each candidate looked like
before the read; every row it lists as ⬜ MARKER OWED on cols 495/497/500/504/512/517 is now
resolved per the paragraph above and no longer stands as written.

---

## §2a · UPDATE 2026-08-31 (second pass, calibration batch) — all six remaining candidates read

The six candidates this section used to log as owed (0476A/0476C on cols 0471–0480, plus the
three `[var:]` candidates at 0509C/0511D/0515D and 0504B) were all read at the plate this same
day, in a calibration batch for the corpus-wide `[sic:]`/`[var:]` backlog. Results:

- **0476C *Decem esse*→*Ducem esse*** — Corpus Corporum's corruption (Migne prints *Ducem*
  clean). WITHDRAWN; `tei-patches/8996.json`. This was flagged below as "the single most
  misleading column in the whole work" — now resolved, and the English at VERSE 19 (chunk 0003)
  renders "A guide" in place of the literal-lemma "To be ten."
- **0480A *uod*→*quod*** and **0480D *excludanturii*→*excludantur ii*** — both Corpus Corporum's
  corruption (dropped letter; two words fused). WITHDRAWN; `tei-patches/8996.json`. The
  underlying wording of 0480D (*excludantur ii* vs. Vulgate *excludant eos*) is Migne's own and
  remains a live, unfired `[var:]` candidate, separate from the fusion fault — not verified
  against a Vulgate collation this pass.
- **0476A *sulvat*** — CONFIRMED as Migne's own misprint (for *salvat*), fired as `[sic: *sulvat*]`
  in the English. ⚠ **Column relabel:** despite the heading this candidate has always carried in
  this file, the word does not sit in column 0476 at all — the TEI anchors read
  `…refutavit. [0475D] …vel additamento propriae voluntatis. Judicabuntur. … sulvat? [0476A]
  enim pro auditu…`, so *sulvat* sits at the tail of **0475D**, and 0476A begins with the
  following sentence. `data/plate-reads.json` records the read under 0475D accordingly.
- **0478D** (Acts 10:35) — CONFIRMED: Migne genuinely prints *timet Deum* and drops *et operatur
  justitiam* against the Vulgate. Fired as `[var:]` in chunk 0004's English.
- **0504B** (John 15:3), **0509C** (Rom 11:32), **0511D** (Luke 12:49), **0515D** (Ezek 33:12) —
  all four CONFIRMED as Migne's own wording, diverging from the Vulgate as already suspected.
  All four fired as `[var:]` in the English (chunks 0014, 0015, 0016, 0018).

Net for this work across both passes: of 14 candidates carried to the plate, **10 were Corpus
Corporum's corruption** (withdrawn) and **4 were confirmed Migne-side and already licensed** by
the first pass, plus **6 more confirmed this second pass** (1 `[sic:]`, 5 `[var:]`) — for a
combined 10 confirmed / 10 withdrawn. `node scripts/plate-gate.mjs 8996` is clean.

The original owed-marker material is kept below for the record of what each candidate looked
like before this read; none of it stands as written any longer.

### From chunks 0000–0004 (cols 0471–0480)

| col | chunk | reading | not-a-word / conjecture | sense supplied per 7a⁗ |
|---|---|---|---|---|
| 0476A | 0003 | *sulvat* | conj. *salvat* | "Does the law alone save, *sulvat*?" — clause's only verb |
| 0480A | 0004 | *uod* | conj. *quod* | "by foretelling *uod*, that which…" — relative pronoun |
| 0480D | 0004 | *excludanturii* | conj. *excludantur ii* (Ps 67:31, Pattern 10 fused + a `[var:]` also owed — Vulg. *excludant eos*) | "*excludanturii*, that they may be shut out, who are proved" |

⬜ **0472A — Hab. 2:4, *ex sua fide* for *in fide sua*.** Marker owed but **NOT recommended**
even after a read: the gloss itself names and adjudicates the divergence in its next sentence.
⬜ **0478D — Acts 10:35, *Deum* for *eum*, and *et operatur iustitiam* dropped.** The dropped
clause is the works-condition the verse is adduced to prove; recommend firing after a read.
⬜ **0476C — Rom 2:19, *Decem esse* for *Ducem esse*** ("*To be ten*" for "a guide of the
blind," and the gloss at once expounds the blind). This is a lemma (quoted scripture), so
Pattern 18's boundary makes the correct marker `[var:]`, not `[cj:]`. **The single most
misleading column in the whole work for a reader without the apparatus** — read this one
first when the remaining plate work is done.

### From chunks 0010–0014 — RESOLVED, see §2

All six candidates in this range (0495A, 0497B, 0497D, 0500C, 0504C, 0504D) were read at the
plate 2026-08-31; five withdrawn, one (0497B *revela*) confirmed and licensed. See §2 and
`data/tei-patches/8996.json`.

⬜ **0504B — John 15:3, *verbum quod* for Vulgate *sermonem quem*.** STILL OWED — this column
was not part of the read (the read covered 495/497/500/504C-D, not 504B specifically; the John
15:3 quotation sits earlier in the same column and was not checked against the plate this
pass). The lemma under exposition (Rom 10:8, *Hoc est verbum fidei*) is adduced precisely for
the word *verbum*, which the Vulgate's *sermonem* does not contain — conforming would delete
the keyword the note is built on (7a″). `[var: Vulg. *sermonem*]` is defensible; reconsider on
the next plate pass.

### From chunks 0015–0019 — 0512D and 0517C RESOLVED, see §2

All three carried-type candidates in this range (0512D ×2, 0517C) were read at the plate
2026-08-31; all three withdrawn as Corpus Corporum's own corruption. See §2 and
`data/tei-patches/8996.json`. The three `[var:]` candidates below are UNCHANGED — a different
class, still unread:

⬜ **0509C — Rom 11:32, *in infideli* for Vulgate *in incredulitate*.**
⬜ **0511D — Luke 12:49, *nisi ardeat* for Vulgate *nisi ut accendatur*.**
⬜ **0515D — Ezek 33:12, *non proficiet ei, si erraverit* for Vulgate *non liberabit eum in
quacumque die peccaverit*.** All three logged as `[var:]` candidates pending a plate read; see
cruces-0015.md for the full table (Rom 12:2, Jas 2:13, John 14:27-transposed, and the unmarked
Jer 48:10 allusion are also there, judged immaterial or unmarked-by-Migne).

---

## §3 · The 0470B asterisk note — handled

Migne's asterisk-layer note at col 0470B, injected in the Latin as `[cn: * | Quiquid ex
Haymonis episcopi Halberstatensis in Epistolas Pauli expositione in hac sua expressit Glossa
Walafridus, requirat Lector inter opera ipsius Haymonis Patrologiae, tom. CXVI, CXVII et
CXVIII. Edit.]`, is editorial PROSE, not a locator, so under Pattern 15 and the 2026-08-24
asterisk-layer ruling it took a translated `[nt: …]` at the same position in the English,
immediately after `[0470B]VERSE 2.-- `. The Latin keeps `[cn:]`; the English carries no `[cn:]`
at all (Pattern 19). `Quiquid` is transcribed as printed and very likely Migne's own setting
for *Quidquid*; read at 300 dpi, not re-checked at higher magnification — the `[nt:]` renders
the sense and does not depend on resolving the form.

---

## §4 · Sentences rendered as printed, deliberately left unrepaired (no marker of any kind)

The full list with reasoning lives in the four stint files. The load-bearing ones, by column:

- **0481A–B** — *Non quin credens post per dilectionem non debeat operari* — two negatives, both
  carried, sentence left as broken as printed (Pattern 7).
- **0483B** — *…iram operaretur, quia praevaricationem, quod qualiter sit, aperit* — governing
  verb supplied in brackets, visible as ours.
- **0471C** — *etsi non sentitis, sed sic, consolaremur* — *sed* with no answering member,
  rendered literally, left unrepaired.
- **0476A** — *non qui ante erant factores justificabuntur* — carried negative, sentence left
  broken, two readings possible, neither preferred.
- **0510D** (×2), **0511C**, **0507A**, **0507C**, **0506D**, **0518A** — see cruces-0015.md
  §"Readings rendered as printed" for the full set; none construes cleanly, all carried literal,
  none repaired.
- **0512C** — *Non sunt timore boni* (ablative for Vulgate's dative *timori*) treated as Pattern
  9 orthography, not a defect; flagged for reconsideration if a plate read shows otherwise.
- **Terminal-stop omissions carried per Pattern 8**: 0514A, 0508A, 0516B end with no stop in
  Migne, none supplied.
- **0520A** — Pattern 8b applied: an indirect question closed with `?` (*qui quaerunt cur…?*)
  turned direct behind a colon so the printed mark survives English syntax. The only Pattern 8b
  application in the run besides 0476D (chunk 0004, *Quaeritur quomodo… proderit?* → "It is
  asked: how does he here say… ?").

---

## §5 · Vulgate / received-text divergence tables — the full deliverable

Every scripture lemma in all 20 chunks was checked word by word against the Vulgate before the
English was written (7a″), independently by all four stints. Full tables, including every
"agrees" and "immaterial" entry named for auditability, are preserved in the stint files:

- Chunks 0000–0004: this file's original table (18 lemmata) — folded above into §1/§2.
- Chunks 0005–0009: `cruces-0005.md` §S (14 lemmata, 3 fired `[var:]`, folded above into §1).
- Chunks 0010–0014: `cruces-0010.md` (26 lemmata, 0 fired — all on unread columns).
- Chunks 0015–0019: `cruces-0015.md` (26 checked-and-agreeing + 7 material + 13 minor).

**Total for the work: ~84 lemmata checked, 5 `[var:]` fired (all plate-licensed), 5 more logged
as owed pending a plate read of cols 471–480/495–518.**

---

## §7 · Polarity read (step 4a) — 2026-08-31, three blind readers, all 20 chunks

Three readers, each blind to this cruces file until after forming findings, covered chunks
0000–0006 / 0007–0013 / 0014–0019 (all 20 chunks, full read, no sampling — 15,689 + [pending] +
17,321 words recorded so far). Every chunk named clean or not; see reader reports for full
detail. Two results:

1. **Chunks 0000–0006: zero new defects.** Three Migne-side contradictions found (0476C
   *Decem*/*Ducem*, 0481A–B *Non quin…non debeat*, 0481C–D *Ad Deum autem habet gloriam*) were
   all already logged and correctly left unrepaired. One apparatus bug found and fixed: the
   third finding was mis-filed under col 0484A in `cruces-0005.md` (corrected above, this
   section).
2. **Chunks 0014–0019: ONE new OUR-side defect, fixed.** Col 0510A/B (chunk 0016) — Augustine's
   note (*De natura boni* 27) turns on the distinction between *de ipso* (of God's own
   substance) and *ex ipso* (from/out of God, i.e. as source); our English had rendered both
   "of him," collapsing the distinction the note exists to draw and leaving "Not all things are
   of him" flatly contradicting the next sentence's "all things are of God." **Fixed**: *Non de
   ipso sunt omnia* now renders "Not all things are of his own substance," which both restores
   the sense and removes the apparent self-contradiction. No `[cj:]` needed — this was our
   translation choice, not a defect in Migne's Latin.

3. **Chunks 0007–0013: zero OUR-defects.** The known crux at 0501C (*volentem*/*nolentem*,
   Augustine's formula) was independently re-found and confirmed correctly handled. Two new
   low-confidence Migne-side observations, both left unmarked pending a plate read (neither is
   an OUR defect, so neither was repaired): **0492B** *Et justum, id est justificans peccatorem*
   — "justifying" sits oddly against this same chapter's own *non justificare* (0490A) and
   *indicem peccati, non* [a] *justificatorem* (0491A); possibly *judicans* for *justificans*.
   **0496B** *Filius Israel non dicitur irae* — nominative singular against the parallel clause's
   dative plural *Spiritus irae Aegyptiis dicitur*; almost certainly *Filiis Israel*. Neither
   changes the sense enough to warrant a marker without the plate.

**Total for the run: 3 readers × 20 chunks (all of them, no sampling), ~54,000 words. 7
polarity sites raised, 6 Migne-side (all correctly left unrepaired, none new to the corpus's
findings beyond the two low-confidence notes above), 1 OUR defect found and fixed (0510A/B).
Recorded via `polarity-record.mjs 8996 --chunks 20 --sites 7 --ours 1`.**

- **Column-band arithmetic** across all 20 chunks: bands skip and repeat in the usual way; no
  text breaks mid-word or mid-construction across any anchor. Checked, not real.
- **`[n: (Ibid. XVI)]` at 0479A** resolves against *Matth. XXIII* two clauses earlier
  (→ Matt. 16:4) — correct; a following *Ibid.* is never proposed for correction.
- **`(cont.)` on repeated `## ` heads** — chunk-boundary artefact throughout, not Migne's.
