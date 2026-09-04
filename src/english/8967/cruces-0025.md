# Cruces — 8967 *Glossa ordinaria*, Liber Psalmorum, chunks 0025–0029 (cols 0892C–0901D)

Band A, stint covering Psalms XXXIV–XXXVIII. Latin `src/latin/8967/0025.md`–`0029.md`.

## 0. SPAN COUNT RECONCILIATION — the brief is CORRECT

`data/briefs/8967-lemmata-0025.txt` declares **243 spans**. Counted mechanically over the
five chunks' Latin bodies (`\*(?!\*)(.+?)\*`, DOTALL, frontmatter excluded):

| chunk | spans |
|---|---|
| 0025 | 73 |
| 0026 | 31 |
| 0027 | 44 |
| 0028 | 49 |
| 0029 | 46 |
| **total** | **243** |

**243 = 243, and the brief's own line count (`^\[0`) is also 243.** No mis-split. The head
of the range (`VERS. 1.-- *Judica, Domine.*`) and the tail (`*Remitte mihi.*`) are both
present, so the file is not shifted at either end. English span parity is 1:1 in every
chunk after markers are stripped.

## 1. PLATE READS — SIX PAGES, ALL SIX COLUMNS-PAIRS OF THIS RANGE

None of cols 0892–0901 had ever been read. All six pages were read for this stint from the
on-disk PL 113 scan (`raw/scans/pl113/patrologiaecurs04migngoog.pdf`, PDF page =
(column + 11) / 2), corner numbers checked first, full page width, with 500 dpi crops on
every candidate. Recorded in `data/plate-reads.json`. **Zero foot-of-page conjecture
apparatus of either layer on any of the six pages** (consistent with the work's existing
spot coverage; still a sample, not a proof).

### ⚠⚠ THE MOD-4 CLIPPING RULE HAS A COUNTEREXAMPLE IN THIS RANGE

The launch brief §3 states the rule as regular, 5 of 5: a left-hand column congruent to
1 (mod 4) loses 3–5 characters at the inner margin. In my range **893 and 897 are clipped
exactly as predicted** (`VERS.` prints as `s.`), and **895 and 899 are clean** as predicted
(3 mod 4). But **column 901 is 1 (mod 4) and is CLEAN** — page 456's left column opens
`Verumtamen. (AUG.) Diapsalmus.` with the *V* whole, and every line beneath it is entire.

So the rule is a strong tendency, not an invariant. **Render the page before invoking it.**
Had I applied it blind, I would have refused to settle three candidates in col 901 that the
copy in hand answers cleanly (`hahet`, `Iter`, `Diapsalmus`).

## 2. MARKERS FIRED — six, every one on a column read at the plate

| col | chunk | marker | why it is licensed |
|---|---|---|---|
| 0893A | 0025 | `[var: Vulg. *apprehendat eum* …]` | Migne prints *Apprehendat eos.* (Ps 34:8); the Clementine reads *apprehendat eum*. Plate p.452: col 893 is clipped, **but the lemma stands mid-line and is fully legible**, so §3's line-opening bar does not apply. The plural is what the gloss expounds — *Ne scilicet suis sceleribus **relinquantur*** is plural in Migne's own next clause. Sense-changing, so Pattern 14 applies. |
| 0894C | 0025 | `[sic: *super gaudeant*]` | Plate p.452, 500 dpi: Migne sets **`Non super gaudeant.`** in three words at VERS. 24, against **`Non supergaudeant.`** fused nineteen lines above in the *same column* at VERS. 19. The internal control is on the same plate; the split is Migne's type, not CC's. Pattern 10 split-type → Pattern 12. The English carries the sense as well as the marker ("Let them not rejoice over me"), per test 1. |
| 0895A | 0026 | `[var: Vulg. Ps 35:1 *In finem. Servo Domini ipsi David.* …]` | Plate p.453: Migne's titulus reads **`In finem sermo.`** The Clementine has *Servo Domini ipsi David*. A word where the received text has a servant: sense-changing. ⚑ Note the class: *sermo* is a real, well-formed word, so under addendum A it is **Migne's until a plate says otherwise** — and the plate says it is Migne's. That makes the marker `[var:]`, never `[sic:]`. |
| 0896B | 0027 | `[var: Vulg. Ps 36:1 *Psalmus ipsi David.* …]` | Plate p.453: Migne heads Ps 36 **`Psalmus David.`** where the Clementine has *Psalmus ipsi David*. This is the ⚑ the brief pre-scan raised, and launch brief §2.4 rules it a real finding, not a checker fault. The two tituli are different lemmata and stay different in English. |
| 0898B | 0028 | `[var: Vulg. Gn 2:17 *in quocumque … morieris* …]` | Plate p.454: Migne prints **`In quacumque die comederitis, morte moriemini.`** — **plural** — against the Clementine's singular *comederis … morieris*. Material, and the mismatch is visible in Migne's own frame: he introduces it as *Vindictae quas minabaris **Adae*** (singular) and applies it *et **nobis*** (plural). |
| 0898D | 0028 | `[sic: *qualiliter*]` | Plate p.454, 500 dpi: Migne sets **`quali-`** at the end of one line and **`liter`** at the head of the next — a doubled syllable across the break, i.e. *qualiliter* for *qualiter*. A doubled syllable is the non-word class that addendum A records as right every time, and here the plate itself shows the doubling. The English carries the sense ("in what manner") beside the marker. |

⚑ Class split for this range: **4 `[var:]` and 2 `[sic:]`, and both `[sic:]` rest on a
plate-visible defect rather than on a corpus argument.** Every one of the eight suspicions
I raised against a *real, well-formed* word was refuted or declined; every one I raised
against a *non-word* was settled at the plate — and **five of those seven non-words turned
out to be Corpus Corporum's, not Migne's** (§3). That is the reverse of what a
corpus-frequency argument would have predicted, and it is the whole reason for reading.

## 3. ⛔⛔ SIX SITES WHERE **OUR LATIN IS NOT MIGNE'S** — no marker owed, TEI patches wanted

**This is the highest-value finding of the stint.** In every one of these, firing the marker
the Latin file invites would have publicly blamed Migne for Corpus Corporum's defect.
Recommend `data/tei-patches/8967.json` entries; I have not written them, because a patch
rewrites the chunk under a translation that has already been filed.

| col | our Latin | THE PLATE | class |
|---|---|---|---|
| 0894B | `Iniracundia` | **`In iracundia.`** (two words, 500 dpi) | CC **fusion**. Rendered "*In wrath.*" No `[sic:]`. |
| 0894D | `spemagna` | **`In spe / magna fidelium finis`** (line break) | CC **fusion** at a hyphenless break. Rendered "In great hope". No `[sic:]`. |
| 0895C | `inquitatem` | **`iniquitatem`** | CC **drop**. Rendered "the iniquity". No `[sic:]`. |
| 0899A | `pro rumpit` | **`pro-/rumpit`** (ordinary line-break hyphenation) | CC **split**. Rendered "breaks forth". No `[sic:]`. |
| 0901C | `hahet` | **`habet`** (500 dpi) | CC **corruption** (b→h). Rendered "has". No `[sic:]`. |
| 0899B | `audiebam` | **`audiebant`** | CC **NORMALIZATION** — see below. |
| 0895A | `populis` | **`populus`** (500 dpi) | CC **NORMALIZATION** — see below. |

### 3a. ⭐ TWO NEW MEMBERS OF THE NORMALIZATION CLASS (brief §4), and neither is detectable from the Latin

Both were found by reading the whole line for a *different* word — exactly the mechanism
addendum C describes.

- **0899B, VERS. 14.** Migne prints *Tanquam surdus non **audiebant**, et sicut mutus non
  aperiens os suum.* Our TEI prints **`audiebam`** — which is the **Clementine's** reading
  at Ps 37:14. The digitization has silently conformed Migne's lemma to the Vulgate. This is
  the fourth instance of the class in the series and the first where the tidied form is
  *the received biblical text itself*, which is the worst possible case for 7a″: **a
  divergence that a Vulgate collation cannot see, because the collation was run against the
  text the corruption produced.** Our English renders our Latin ("I heard not"); the plate
  wants "they heard not".
- **0895A, VERS. 28.** Migne prints *quando Novum Testamentum **populus** praedicavit* — an
  ungrammatical nominative, since the subject is *lingua ejus*. Our TEI prints **`populis`**,
  the dative that makes the clause construe. Our English renders our Latin ("to the
  peoples"). Migne's page says "when the people preached the New Testament".

⚠ **Weaker, NOT settled: 0898D `enumerantur`.** The plate at *Narratio, in qua … miseriae*
appears to read **`emunerantur`** (m/n transposed), a non-word, where our TEI reads
`enumerantur`. The inking on that line is heavy and I could not separate `m` from `nu` with
confidence at 500 dpi. **Recorded as unsettled, not as a finding.** A single Gallica IIIF
crop (`ark:/12148/bpt6k5505319w`, `f = (column + 1) / 2`, so f449) would close it.

## 4. DECLINED — every candidate raised and not marked, with the reason

⚑ Listed because on Luke 12 of 17 corrections came from declined lists rather than from
fired markers. Nothing below is a marker; several are places a later reader should look.

### 4a. Declined SCRIPTURE divergences (checked against `sources/vulgate/clementine-flat.txt`)

1. **0892D `*Tanquam pulvis ante faciem venti.*` vs Ps 34:5 `tamquam`.** Orthographic only
   (*tanquam*/*tamquam*); Migne uses the -n- form throughout. Plate-confirmed as Migne's.
   Pattern 9. No marker.
2. **0893C `*Pax vestra ad vos revertetur*` (Migne cites *Matth. X*) vs Mt 10:13 `pax vestra
   revertetur ad vos`.** **Word order only** — the verb agrees exactly. Pattern 14 requires
   a change of sense; the gloss's point is the *returning*, which both orders give. Plate
   read (col 893 is clipped, but the divergent words sit mid-line). No marker.
3. **0894D `*Devoramus.*` vs Ps 34:25 `Devoravimus eum`.** Present for perfect, plate-confirmed
   (p.452). Declined as tense-only: the psalm asserts the same thing either way, and **Migne's
   own gloss is present-tense too** (*Devorantur incorporati*), so the tense is not idle.
   ⚑ This is the closest call in the range; a later reader who thinks Pattern 14's bar is
   lower than I have taken it should look here first.
4. **0896B `*in tuo lumine*` vs Ps 35:10 `in lumine tuo`.** Word order only, plate-confirmed.
   No marker.
5. **0896D `*Miseretur et retribuet*` vs Ps 36:21 `miseretur et tribuet`.** A real divergence
   (*retribuet*, "shall repay", for *tribuet*, "shall give") and arguably sense-changing —
   **but it stands at a LINE OPENING in column 897, which is 1 (mod 4) and is clipped on this
   copy** (the plate shows `*Miseretur et*` ending one line and the clipped `…et,` opening the
   next). §3 forbids the marker on this witness. **⛔ Owed: one Gallica IIIF crop at f449.**
   Rendered as our Latin has it; no marker fired.
6. **0898A `*Psalmus David in rememoratione de sabbato.*` vs Ps 37:1 `in rememorationem`.**
   Ablative for accusative, plate-confirmed. Case only; the titulus says the same thing.
   Declined. (Contrast the two tituli that **were** marked, at 0895A and 0896B, where a
   different *word* is at stake, not a different case of the same word.)
7. **0898C `*livores mei;*` vs Ps 37:6.** **Migne himself flags it** — *alia littera* — so it
   is his own apparatus, not an unannounced divergence. Pattern 18a's ❌ class ("anything the
   edition already glosses"). No marker.
8. **0898C `*Currentes cum sponso post odorem unguentorum.*` vs Ct 1:3.** Declined because it
   is **not offered as a quotation**: the gloss says *gemamus:* and then weaves the verse into
   its own sentence (the Clementine has *Trahe me, post te curremus in odorem unguentorum
   tuorum*; there is no *sponso* and no *currentes* in it). A `[var:]` here would assert a
   divergence in a citation that was never made.
9. **0899B `*Quia dixi: Ne quando supergaudeant…*` vs Ps 37:17 `Nequando`.** Word-division of
   an orthographic compound; the Clementine's own printing of *nequando* varies. Pattern 9.
   ⚑ Deliberately NOT treated as the 0894C class: there the split produces `super gaudeant`,
   two independently meaningful words that destroy the verb, and there was a fused control
   *in the same column*. Here nothing is destroyed and there is no control.
10. **0899D `*Ut quid me dereliquisti?*`, referred by Migne to *supra*, i.e. Ps 21:2
    `quare me dereliquisti`.** *Ut quid* and *quare* both mean "why"; the form Migne gives is
    the Old-Latin/Mt 27:46 one. No change of sense. Declined; recorded because a reader
    hunting Old-Latin survivals in this book will want it.
11. **0901B `*Et tabescere fecisti sicut araneam animam.*` vs Ps 38:12 `…animam ejus`.**
    Migne drops *ejus*. A clipped lemma, not a divergence — convention 3 territory. No marker.
12. **0900D `*Verum tamen.*` split vs `*Verumtamen.*` fused, both plate-confirmed on p.455/456
    within a few lines of each other.** Declined: *verum tamen* as two words is perfectly good
    Latin ("but yet"), so there is no non-word and nothing for `[sic:]` to wrap. Rendered
    identically ("But yet") in both places, deliberately.
13. **Verse numbering.** Migne addresses Ps 36:19 as `VERS. 18.` (0896D) and Ps 38:11/12/13/14
    as `VERS. 10./11./12./14.` (0901B–D). **His numbering, reproduced verbatim, never
    corrected.** The psalm numbers themselves are the Vulgate's throughout and none was touched.

### 4b. Declined CONJECTURES (`[cj:]`)

14. **0901C `Iter mala saeculi petit sibi adesse`.** Plate-confirmed at 500 dpi: Migne prints
    **`Iter`**, not *Inter*. *Inter mala saeculi* ("amid the evils of the world") is the
    near-certain reading and is what the surrounding gloss requires. **The `[cj:]` is
    DECLINED and *Inter* is the conjecture that lost only in the sense that no marker carries
    it**: Pattern 18a's bar is that the printed word must make the sentence *assert something
    the author is arguing against*, and a bare nominative *Iter* with no verb does not assert
    anything — it fails to construe, which 18a explicitly keeps in the decline class. The
    English renders the printed words as they stand ("A journey. He asks for himself the
    evils of the world to be at hand…"), which reads as strangely as the Latin does.
15. **0894A `Intende … ut ego intensus immerito`.** Elliptical: the apodosis is missing.
    Rendered literally ("that I, undeservedly stretched out") with nothing supplied. The
    pun is on *Intende*/*intensus* and the *stretching* is the cross. Not a defect;
    Migne's abridgment. No marker.
16. **0901D `Hic sibi petit dimitti, ut certus dijudicium perveniat`.** *perveniat* wants
    *ad*; rendered "may come to the judgment" without supplying a preposition in the Latin's
    voice. Real word, plate-confirmed. Crux only.

### 4c. Not defects at all — recorded so a blind reader does not re-raise them

17. **`VERS 5.--` without the period, twice** (0025 at Ps 34:5, 0029 at Ps 38:5). The plate
    prints `VERS. 5.` correctly in **both** places (pp. 451, 455). **CC's dropped period.**
    Reproduced as our Latin twin has it, per convention 1's verbatim rule; no `[sic:]`, since
    the defect is not Migne's.
18. **`[0901A]-- *Verumtamen.*`** — a bare `--` where a `VERS. n.--` address would stand.
    Plate-confirmed: Migne runs the paragraph on without a verse number. Reproduced.
19. **Siglum spelling varies: `(CASS.)`, `(CAS.)`, `(Cass.)`, `(ID.)`, `(Ibid.)`, `(HIER.)`.**
    Passed through verbatim and unanglicized, and **no `(ID.)` or `(Ibid.)` was expanded**
    (launch brief §4). 148 notes across the five chunks (0025: 42 · 0026: 14 · 0027: 28 · 0028: 30 · 0029: 34), order and count 1:1.
20. **`(ID).` at 0895C is bare text, not a `[n: …]` note** — CC failed to tag that one
    attribution. Left exactly as it stands in the Latin twin; not our error to fix in English.
21. **`Diapsalmus.` at 0901A and 0901C.** Migne sets it **roman, not italic**, and in the
    masculine *Diapsalmus* rather than *Diapsalma*. Kept **unanglicized and roman**, mirroring
    the plate — launch brief §2.2 rules the word untranslatable ("a word the text explains
    cannot be replaced by its explanation"); it says italic *as Migne sets it*, and here he
    does not.
22. **`In finem` → "Unto the end"** at 0895A and 0900A, per launch brief §2.1. No exception
    was needed or taken.
23. **`usque ad` → "as far as"**, 29 occurrences of the abridgment splice formula (0025:1 · 0026:5 · 0027:8 · 0028:4 · 0029:11), all rendered *as far as*.
    ⚑ Checked per occurrence against addendum D: **none of the 29 is a lemma's own words** in
    this range — every one stands between an `etc.` and a resumption tail, and every tail was
    parsed as ordinary prose. The nearest look-alike, `*Usque ad nubes.*` at 0895D, **is a
    lemma** (Ps 35:6) and is rendered "Even to the clouds", not with the formula.
24. **`*Non supergaudeant.*` (0894A) and `*Non super gaudeant.*` (0894C) both render "Let them
    not rejoice over me".** Identical English by design; the `[sic:]` is what distinguishes
    them, and the launch brief's rule on bare lemmata (expand the stump, never contract its
    twin) forbids differentiating them by mutilating one.

## 5. THE FOUR TESTS, run on the finished files

- **Anchor position (2b).** All 37 column anchors present, verbatim, in order — and each was
  checked against the *word* it stands beside in the Latin, not merely for presence. Three sit
  mid-construction and were split identically in English: `Loosed [0893A] by God`,
  `pressed him [0898D] that he should not now be raised up`, `who was crucified [0900A] with
  him`. The two anchors that fall inside an italic span in the Latin
  (`*Amat judicium et non derelinquet [0897C] sanctos suos.*`) keep the anchor inside the span
  in English.
- **Punctuation by band (test 3).** Colons, semicolons, question marks and guillemets compared
  band by band across all 42 bands of the five chunks, with our own markers stripped. **Zero
  mismatched bands.** Five sites were repaired to reach that: an invented colon at 0893D
  (*Alii interpretes,* takes Migne's comma), an invented semicolon at 0895A, an invented colon
  at 0896D, an invented semicolon at 0900A, and an invented colon at 0900C. All five were
  mine, all were smoothing, and **the totals would have hidden two of them.**
- **Question marks.** Latin 1, English 1 in 0025 (`o Domine, quis? etc.`); Latin 1, English 1
  in 0028 (`Ut quid me dereliquisti?`). No mark supplied and none deleted. ⚑ Two places invite
  a mark Migne does not print and did **not** get one: `*Domine, quando respicies.*` (0894A) and
  `Quando videbimus vindictam de eis qui nobis insultant.` (0894A) both end in a full stop on
  the plate, and both end in a full stop in English, however interrogative they read.
- **Negation attachment (tests 2 / 2a).** Every printed negative was named to its host word.
  The four that fire 2a's trigger condition (a negative on a verb with a quantifier or
  correlative nearby) and how each was resolved from **structure**, not from what reads well:
  - 0894A `Dissoluti … *nec* tamen prae duritia *compuncti.*` — the `nec` governs *compuncti*,
    not *dissoluti*; the `tamen` is the pivot. Kept as two italic spans in order, with the
    negative on the participle.
  - 0894A `*nec* tamen *compuncti sunt,* id est, poenituerunt.` — the appositive *poenituerunt*
    glosses the **verb**, and therefore stands **under** the negative. It is rendered as such,
    and it was tempting to render "that is, they did not repent", which would have moved
    Migne's negation from his word onto mine.
  - 0895C `Non quod non potuit; perniciosius agit contra seipsum qui quod potest non vult.`
    Three negatives, three hosts: *quod*, *potuit*, *vult*. All three carried.
    ⚠ The *sed*-less correlative here is `potest … non vult`, and the negative belongs on
    *vult*, not on *potest* — "does not will what he can", never "cannot will".
  - 0895C `Sunt enim quaedam quae, etsi volunt, non intelligere homines possunt … et ut tamen
    bene agerent, intelligere possunt.` The `non` governs *possunt* and the `etsi volunt` is
    concessive; the second clause is **affirmative** and had to stay so.
  - 0894C `Nemo enim malus, qui non prius sibi noceat.` — *nemo* + *non*, both carried,
    producing the double negative Migne prints.
- **Test 5 (does it ASSERT what he asserts).** Read back paragraph by paragraph with the counts
  already clean. It moved three renderings:
  - 0892D `ne habeant quid oblatrent` had been smoothed to "that they may have nothing to bark
    at", which quietly moves the negative onto *quid*. Restored to "that they may not have what
    to bark at".
  - 0893B `nec defecit, qui omnia fecit` had "nor did he fail"; the perfect is a standing state
    here (*nihil suavius* … *ipsum ergo pete*), so "nor has he failed".
  - 0901C `Iter mala saeculi petit sibi adesse` had been smoothed into "he asks that the evils
    of the world be present to him", which reads fluently and is **false** — it makes the
    psalmist petition for the world's evils. Rebuilt as the printed words stand (§4b.14).

## 6. UNEXPRESSED SUBJECTS — every supplied pronoun, and what fixed it

The dominant defect class. Sites where two readings both construe:

- **0894C `*Tuam, Domine Deus.* Quae in se est, vel quam ei dedit.`** *Quae* is *justitia*.
  **Both the subject of *dedit* and the referent of *ei* are unexpressed and neither is
  recoverable from the sentence.** Rendered "Which is in himself, or which he gave to him" —
  deliberately as underdetermined in English as in Latin. The likeliest reading is God's
  justice, given to Christ, but Ps 34:24 (*Judica me secundum justitiam tuam*) does not settle
  it and I have not settled it silently.
- **0893A `quos divina gratia non humectat`** — *quos* are the *dissoluti*, from the lemma
  above (*Fiant tanquam pulvis*), not from the sentence. "they whom".
- **0894D `ut his illa curent`** — *his* = *pudor* and *reverentia*, *illa* = *audacia* and
  *impudentia*, both from the two preceding clauses. Rendered "that by these they may cure
  those", keeping the demonstratives rather than resolving them.
- **0894D `Illi dicunt, euge animae suae quae laetitia fugit`** — *quae* may be nominative
  with *laetitia* ("from which gladness flees") or agree with *laetitia*. Rendered "from which
  gladness flees"; the contrast with *isti … suam laetitiam ponunt … quae est perpetua* is
  what decided it, since the point is that **their** gladness does not last. Flagged rather
  than settled.
- **0897C `Vel, non permittit damnari justum cum judicabitur ille ab impio; vel, illi impio,
  scilicet ad malum ejus.`** *ille* is the just man in the first limb and the impious man in
  the second; *ejus* in the second is the impious man's. Rendered so.
- **0900A `Vox est veteris hominis qui cum eo crucifixus, hic autem in persona propria
  loquitur.`** *hic* is Christ, not the old man — the sentence turns on the contrast. Rendered
  "but here he speaks in his own person".

## 7. VOCABULARY AXES — instrument checked before reporting

Greps run with the brief's warnings applied (the `natio`/`damnatio-` trap, `\bdaemoni`
missing oblique cases, the raw `usque ad` overcount):

- `turba` / `multitudo`: **zero occurrences of either noun.** ⚑ The instrument fires anyway:
  `\bturb` returns *turbata* at 0899B (`ratio nuper **turbata**`), which is the verb, exactly the
  trap the brief names. Nothing to report.
- `daemonium` / `diabolus` / `satanas`: two sites, 0898D `sed et **diabolus**, qui corpus
  affligit` and 0901D `Non in **diaboli** civitate` → **devil** in both. No *daemoni-* and no
  *satan-* of any case in the range.
- `natio` / `gentes` / `gens` / `gentilis` / `ethnicus`: one site, 0897B `quia per omnes
  **gentes** dilatata`, of the Church spread through the whole world — **generic, not the
  *Judaei*/*gentes* opposition**, so **"nations"** per axis 4's second limb. (The raw grep also
  returns *damnari*, *dilatata* noise; checked by eye.)
- `mysterium` / `sacramentum`: zero of either.
- Commentator's voice **not archaised**: `dicit`/`ait` → "says"; the `-eth` forms in this stint
  appear **only inside italic lemmata** (`*He loveth judgment*`, `*He sheweth mercy*`,
  `*He hath said*`, `*Thou that preachest*`), which is the italic-membership test axis 1 names.
- `gradus`: zero (no gradual psalms in this range).

## 8. SECTIONS READ CLEAN

- **0025 (Ps 34)** — read clean apart from the sites named above; the VERS. 12 *retribuebant*
  antithesis (*ego … ipsi …*, four limbs) checked limb by limb for a reversed comparative.
- **0026 (Ps 35)** — clean; the *coelum*/*nubes*/*montes* chain at 0895D was checked for a
  dropped `non` at `quae post, de eis et si non ab eis` and it is present.
- **0027 (Ps 36)** — clean; 8 of the chunk's 44 spans are abridgment splices and every tail was
  parsed as ordinary prose per addendum D's warning.
- **0028 (Ps 37)** — the densest negation block in the range (`Non est sanitas` / `Non est pax`
  / `non est absconditus` / `non aperiens`, ten printed negatives across 0898C–0899C). All ten
  named to a host and all ten present. Clean.
- **0029 (Ps 38)** — clean apart from 0901C.
