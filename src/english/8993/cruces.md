# 8993 · *Glossa ordinaria*, **Epistola ad Hebraeos** — cruces

PL 114, cols **0643A–0670D** · 13 chunks · 11,438 Latin words. Attributed by Migne to
Walafrid Strabo; in fact **Anselmus Laudunensis et schola**. Translated 2026-08-30 by three
Opus stints, none of which could see the others.

**This file is the MERGE LAYER, and it is not a copy of the range files.** `cruces-0000.md`
(chunks 0000–0004, Heb 1–4), `cruces-0005.md` (chunks 0005–0008, Heb 5–9) and
`cruces-0009.md` (chunks 0009–0012, Heb 10–13) stand beside it and carry the per-site detail —
the full lemma collations, the negation tables, the unexpressed-subject rulings, the plate
candidates. This file records only what was settled **across** the three ranges, or after them
by the plate: the thing no stint could do for itself.

⚠ Kept to the merge layer alone, per the 8986 finding: `build-cruces.mjs` concatenates every
`cruces*.md` in the directory, so a merge that embeds its range files publishes the apparatus
twice.

## §0 · Apparatus, counted from the English after the plate gate

**14 `[var:]` · 4 `[cj:]` · 3 `[sic:]` · 1 `[d:]` · 0 `[ed:]` · 0 `[nt:]` · 0 `[f:]`** —
counted from `src/english/8993/0*.md` after the plate gate and the polarity repairs, not summed
from the three stints' reports.

The three stints filed **14 `[var:]` · 5 `[cj:]` · 1 `[d:]` · 0 `[sic:]`**. The plate gate
**withdrew two `[cj:]`** (§2) and **added three `[sic:]`** that no stint could have fired,
because firing them required the page (§3); the polarity read added the fourth `[cj:]`, on the
elided negation at 0655C (§5).

`verify-english.mjs 8993` → **OK, 13 chunks**, columns/notes/sections aligned.
`scan-raw-markers.mjs` → no marker rendered as literal bracket text.
✅ **`plate-gate.mjs 8993` PASSES.**

⭐ **All three stints independently declined to fire a single `[sic:]`**, each giving the same
reason: a `[sic:]` accuses *Migne's type*, our Latin is Corpus Corporum's transcription and not
the plate, and no column had been read. That is now the third work running where the stated
marker policy produced zero false accusations — and this time the plate proved the instinct
right in detail, since **four of the non-words they refused to accuse Migne of turned out to be
Corpus Corporum's own** (§2).

## §1 · THE PLATE GATE — 14 pages, and what it returned

Pages **327–340** of `raw/scans/pl114/patrologiaecurs06saingoog.pdf`, read at 150 dpi full
width with 400 dpi crops for every letter-level call, **by the session directly rather than by
fenced agents** — deliberately, per the 8986 finding that briefing several readers on one
suspicion produces convergence rather than corroboration. Map `PDF page = (column + 11) / 2`,
calibrated at the printed corner numbers (p. 327 prints 643/644) **before** the first read.

**14 `[var:]` · 14 STAND · 0 REVISED · 0 FALSE · 0 UNRESOLVED.**

Every one is a multi-word scriptural divergence — the class a single-letter CC misread cannot
manufacture — which is the same policy that returned 36/37 on 9006 and 7/7 on 8986. The
divergences confirmed at the plate include Migne's *Paulo minus minoratus est ab angelis*
(0644B), *Ibunt hi in ignem aeternum* (0645C), *erit omnia in omnibus* (0647D),
*non erubescit fratres vocare* (0647D), *Offensus* (0649B, where Migne then prints *infensus*
himself two lines on), *fixit Deus* (0656C), *Tabernaculum enim sanctum* (0658A),
*Aspersi corde* (0661D), *Fide qui vivit* (0664A), *Vis nos interficere* (0665B),
*Si vos persecuti fuerint in una civitate* (0665C), *Habeamus gratiam* (0669A) and
*Confidentium* (0670A).

**The `[d:]` at 0661A stands**: the plate prints *ad implendam tuam voluntatem tuam*.

**The three surviving `[cj:]` stand as Migne's own printing** — *Confessus* twice (0644B, 0646A,
where *consessus* is what the sense of the session at the Father's right hand requires) and
*ligna* for *signa* (0646D). Each is additive under Pattern 18: Migne's word keeps its English.

## §2 · ⭐⭐ TWO `[cj:]` WITHDRAWN — the conjecture was right and the CLASS was wrong

Both stints that fired a letter-level `[cj:]` were **right about the reading and wrong about
whose error it was**, and the plate says so in both directions:

| col | our Latin | plate | was | now |
|---|---|---|---|---|
| 0659A | ***Ac** operibus mortuis* | ***Ab*** | `[cj:]` against Migne | CC corruption — patched, marker withdrawn |
| 0661D | *Fides nostra est **vetata*** | ***velata*** | `[cj:]` against Migne | CC corruption — patched, marker withdrawn |

⛔ **This is the class to carry forward.** A `[cj:]` is milder than a `[sic:]` — it accuses
nobody, it only offers a reading — but it still *presupposes that Migne printed the word it
conjectures against*. Where the printed word is actually our transcription's error, the right
outcome is a TEI patch and **no marker at all**, and the reader meets clean Latin instead of an
apparatus note about a word Migne never set. Both sites read perfectly as conjectures and could
have shipped that way forever.

⚑ `verify-english.mjs` caught both the moment the patched Latin landed — *"a conjecture may only
be offered against a word Migne actually prints"* — which is the check doing exactly the job it
was written for, without anyone pointing it at these two.

## §3 · NINE HIDDEN DEFECTS, and the two that were MIGNE'S

Full list and evidence: `data/tei-patches/8993.json`. Two directions, as in 9006:

**NORMALIZED — Migne's own defect, silently tidied by Corpus Corporum. Our Latin read
CORRECTLY, so no check we own could have found either.** Each is now restored and carries a
`[sic:]`:
- **0650A — *Et requievit **dia** septima***. Migne prints *dia*, a non-word; he sets *Septima
  **die*** in roman two lines below on the same plate, so the two letters are comparable in his
  own type. Found while reading the column for a different marker.
- **0670B — *Sicut generaliter **ominibus** scribit, ita generaliter **omnibus** praelatis***.
  The defective sort and the correct one **on one line**, which is what makes it certain rather
  than a reading of worn type. Found while reading the line for *propositos*, four words away —
  addendum C earning its place a fifth time.

**A THIRD defect of Migne's needed no patch** — our text already agreed with the plate:
**0669D *serviendium*** for *serviendum*. The stint had carried it untranslated pending a read;
it now takes its `[sic:]` **and its English**, per test 1 (a marker must not swallow the word it
marks).

**CORRUPTED — Corpus Corporum broke what Migne set correctly.** Four letter-level
(0665A *padebat*→*pudebat*, 0667B *sanctur*→*sanetur*, plus the two withdrawn-marker sites in
§2) and two line-break failures (0654A, 0655D). ⚠ **0654A carried two faults in one phrase**:
CC failed to rejoin *genu | erunt* **and inserted an *in* the plate does not print**
(*qui eos **in** fide genuerunt*). Nobody could have seen the insertion.

⭐ **The two line-break sites are not the same fault**, and the difference is worth recording:
0655D prints *Christus **per-*** with a hyphen that CC dropped; 0654A prints *genu* at the line
end **with no hyphen at all**, so there Migne set none. Same repair, different cause.

## §4 · ⛔ ADDENDUM A DOES NOT HOLD IN THIS WORK — non-words split THREE ways

The 2026-08-23 addendum records 10 for 10: every non-word suspicion confirmed as **our**
corruption, every real-word suspicion refuted. **The real-word half held perfectly here** —
*absumptam* (0652B), *securint* (0663A) and *accipiunt sacrificium* (0655A) were each suspected,
each argued well, and each proved to be exactly what Migne prints. **The non-word half did
not.** This work's non-words came back:

- **CC's corruption** — *sanctur*, *padebat*, *vetata*, *Ac* (4)
- **CC's line-break failure** — *genu erunt*, *per manet* (2)
- **⭐ MIGNE'S OWN** — *serviendium* (1), and two more that were *invisible as non-words*
  because CC had already tidied them away (*dia*, *ominibus*)

⚑ **So the rule to state is the weaker one the addendum's own evidence supports: a non-word is
worth raising as a plate candidate, and raising it is right every time. What it is evidence
*of* — our transcription or Migne's type — the frequency argument cannot tell you, and this
work is the counter-example that proves it.** The ship test is unaffected and did its whole job:
every one of these was carried with a crux and no marker, so nothing false went out while they
were unresolved.

⭐⭐ **The strongest single result of the run is 0667B *sanctur*, where the stint predicted the
plate without seeing it.** It grepped the corpus, found the *same* e→c fault at a second site in
another work (11065 @0044, *vel **sanctur** infirma* sitting beside its own *bene **sanatur***),
reasoned that one fault shared across two works indicts the transcription rather than the type,
and on that ground **withheld a `[sic:]` here and on three other non-words**. The plate prints
*sanetur*. Four false public accusations against Migne, prevented by an argument made from the
files alone.

## §5 · THE POLARITY READ — three blind readers, 13 sites raised, 4 acted on

`sites: 4 · ours: 4`, recorded via `polarity-record.mjs`. Every reader named its clean chunks.

**⭐ The one serious finding, and it is the class that leaves no trace — 0655C VERS. 16.**
Migne prints *Non secundum legem. Id est secundum carnalem intellectum legis…* — the gloss
leans on the lemma's *non*, and prints no second one. Our English put a full stop after the
lemma and then read as a **positive assertion**: that he acted according to the carnal
understanding. The reader proved the host structurally from Heb 7:16's own *non … sed*, and
proved the house practice from this same work, which carries an elided lemma word into the
gloss at 0660A.
**Resolved per the settled ruling (8954 @0593C; precedent 7561 @0648): the text is NOT
touched — 7a forbids supplying a negative — and a `[cj:]` names the elision.** The marker names
what Migne elided, not a fault of his.

The other three, all ours, all repaired: **0655C VERS. 14**, where *eadem*/*facta est* are
feminine and the subject is the **tribe**, not the priesthood — our bare "it" made the sentence
contradict its own previous clause; **0656C VERS. 4**, where "he would not be a priest" attached
*non esset sacerdos* to the hypothetical earthly man, and the sentence is impersonal — "there
would be no priest"; and **0670A VERS. 12**, where *in quorum nullo* is plural, so *sensus* is
"the **senses** of the body" and our singular left the relative with no antecedent.

**⛔ Four of the readers' findings were REFUTED by the plate, and three of those were their most
confident.** *absumptam* (0652B), *accipiunt sacrificium* (0655A) and *id est non olim* (0653B)
are all exactly what Migne prints, as is *pro illis* at 0644C, which a reader flagged as a
*prae*/*pro* letter-slip. ⭐ **Every one of the four was an argument from what the sentence
*ought* to say.** The stints' rule — a real word is Migne's until a plate says otherwise — beat
all four.

**Declined, with the reason recorded so they are not re-raised:** the *ibi* at 0665B (the
referent is Egypt, from Heb 11:27, but **Migne's own *ibi* is equally ambiguous**, so the
literal English mirrors it); the four unexpressed "he"s at 0656D (the subject is **Moses**, from
Heb 8:5, and the Latin names him no more than we do); and the lemma at 0669B, where
*quidam latuerunt* is Migne's own calque of Heb 13:2 and both readings construe.

**⭐ 0649D — the dittography, settled at the plate and left standing.** Migne prints
*omnes audierunt, sed non omnes audierunt, sed non omnes pervenerunt* — vacuous, and **his**.
The English renders it literally with **no marker**: not `[d:]` (the run is not a doubled
setting), not `[sic:]` (all real words in real slots), not `[cj:]` — because *obedierunt*
(Num 14:22's idiom) and *crediderunt* (Heb 4:2's argument, which the very next chapter makes)
are **both** available and nothing in the file or on the page chooses between them. Naming a
rival is not adjudicating between them; where neither wins, the crux is the honest place for
both.

## §6 · WORK-WIDE CONVENTIONS RECONCILED ACROSS THE THREE STINTS

So that a later sweep does not churn them:

1. **Heads follow Migne's own FORM, not a single house form.** `CAPUT PRIMUM.` → **CHAPTER
   ONE.** (spelled, because he spells it); `CAPUT II.`–`CAPUT XIII.` → **CHAPTER II.**–**XIII.**
   (Roman, because he sets Roman). The third stint reasoned this out independently and
   correctly: the work's own precedent governs, not Ruth's.
2. **Vocabulary held across all three ranges with no drift**: *pontifex* → "high priest",
   *testamentum* → "testament" (never "covenant"), *sacrificium* → "sacrifice",
   *hostia* → "victim", *figura* → "figure". ⚠ Note the one collision, which is the English
   language's and not a drift: *hostia* and *victima* both render "victim" (0005 has the only
   *victimam*). No passage contrasts the two, so nothing is lost.
3. **`VERS. n.--` passes through verbatim** — 218 occurrences, no "VERSE" anywhere.
4. ⭐ **The one real drift, and it is REGISTER: the third stint archaized the gloss's own voice
   with "ye" where the first two used "you".** Twelve sites converted to "you" at the merge.
   **Pattern 17's justification is what decides it**: the archaism earns its place because it
   *recovers number*, a distinction the source marks and modern English cannot — and "ye" versus
   "you" recovers **case**, which English does not need, so it is archaism without the warrant.
   Pattern 17's own boundary is explicit that the scripture-echo licence "never licenses archaism
   in the author's own voice." **Five "ye" remain, all inside quoted scripture** — the lemmata
   *For whereas ye ought* (0653A) and *Call ye to mind* (0663A), and the Chrysostom and
   Augustine quotations at 0663A/0663B/0670A — where the licence does cover the quoted words.
   The sibling epistles corroborate the house voice: 8986 runs 2 "ye" against 100 "you".
5. **No `[nt:]` anywhere** — all 27 notes in the work are bare citations or sigla, not editorial
   prose, so Pattern 15 is not triggered. **No `[f:]`** — runbook false positive 4: a
   lemma-and-gloss commentary is not a florilegium.
6. **`deservit`/`deserit`, the standing check, is discharged for the whole work**: zero
   occurrences in chunks 0000–0004, clean in 0005–0008 (*deserant* only, correct), five
   instances checked correct in 0009–0012.

## §7 · WHAT REMAINS OPEN

- **0661C — unsettled because our copy clips it.** *quod non valet ad probationem ___*: the word
  our file reads as *nostram* falls inside p. 336's left-margin clip. It changes nothing in the
  English. The second witness (`raw/scans/pl202/copyB_patrologiaecurs114unkngoog.pdf`) would
  close it in one page.
- **0655D — *Ilic autem* or *Hic autem*?** Raised by this read, by no agent. The plate's italic
  capital may simply have lost its crossbar at this scan's resolution. **Not patched and not
  marked**: it is precisely the worn-sort-versus-real-defect ambiguity that 9006's reader flagged
  as its least certain class, and the honest record is that it was seen and left.
- **11065 @0044 carries the same *sanctur* fault** and is a **shipped** work. Per the no-retrofit
  rule (Wilson, 2026-08-18) this is recorded, not swept.
