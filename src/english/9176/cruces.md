# Cruces — 9176 (Joannes Scotus Erigena, Commentarius in Evangelium secundum Joannem)

**Governed by `translation-style.md` Pattern 7** and by the **Eriugena register rules E1–E9**
(written on this work — Fable mini-pilot, 2026-09-16; chunk 0000 is the anchor). The English
renders what Migne prints, which here is **Floss's 1853 edition from the single Laon codex 81**
(his title block, dropped by Corpus Corporum, names it: *Ex cod. ms. 81 bibl. Laudunensis,
membran., sec. IX, 4°; primus edid. Felix Ravaisson … Paris 1849, p. 505 seqq.*). Floss's
*Variae lectiones* at the foot record the codex's reading against the text he printed; the
English follows the printed text and never the codex. The work survives as three fragments
(Cap. I,11–29 · III,1–IV,28 · VI,5–14) and Floss marks the codex's lacunae with spaced dots,
carried dot for dot.

## Standing decisions for this work

- ***theoria*** is kept as an italic Latin term (E4): Eriugena's word for the spiritual
  reading of a passage, the sense above the letter. *contemplatio* is "contemplation" and the
  two are not merged.
- ***inhumanation*** (E4) renders *inhumanatio*, his calque of the Greek ἐνανθρώπησις, "the
  Word's becoming man"; he uses *incarnatio* ("incarnation") beside it in the same work, and
  the English keeps them apart as he does.
- *ierarchia* → "hierarchy"; the Latin twin keeps Floss's h-less spelling.
- Greek in the running text is carried in Greek script, verbatim, with the twin's spacing
  before punctuation (`ἐρχόμενος ,`), so that the Greek is greppable as one string.
- No `[var:]`, `[sic:]` or `[cj:]` has been fired in chunk 0000. The pilot read the head and
  foot of leaves n185–n186 (the map, the apparatus) and one column region, **not the running
  text column by column** — so no column of this work is recorded in `plate-reads.json`, and
  under the ratchet no marker may stand. Candidates are logged below for the collation stint.
  *(Chunk 0000 only. Cols 0300C–0329B are now read in full, see the merge section below.)*

## Merge, chunks 0001–0009 (2026-09-16)

This section is a merge layer. The three stints' own records stay beside it, unedited:
`cruces-0001.md` (cols 0300D–0309D), `cruces-0004.md` (0309D–0320C) and `cruces-0007.md`
(0320C–0329B). What follows is only what had to be settled across them.

- **Plate reads.** All eighteen read ranges (leaves n186–n201, cols 0300C–0329B, all `full`) are merged
  into `data/plate-reads.json` under `works.9176`. `plate-gate 9176` passes: every `[var:]` in
  0001–0009 stands on a column that was read. Chunk 0000 still records no range.
- **Vocabulary holds across the stints.** It was checked at merge by a per-chunk count:
  *theoria* italic; inhumanation / incarnation / humanation kept apart (E4, with *humanatio* added
  2026-09-16); Elias, Isaias, latchet and forerunner throughout (no Elijah, Isaiah, strap, precursor);
  Pasch (no Passover); Holy Spirit (no Holy Ghost). Nothing was regularised.
- **E4 additions ratified by Wilson:** *theorica scientia* → "theoric knowledge" (0004),
  *humanatio* → "humanation" (0006).
- **E11, two printings.** 0302C *sinum* and 0306D, the line the scanned copies drop, both follow the
  TEI (which construes), and their patches are withdrawn. **Re-adjudicated at merge:** of the 14
  remaining pending patches, 13 stand because the plate is the reading that construes or the two
  readings are neutral. **0318D (John 3:12, the comma after *creditis*) is withdrawn.** The twin's
  comma construes, so the English in 0006 now reads "and you believe not: how, if…". Stint 1's
  header lumped *remote* and the Greek in with the TEI-better sites, but its own entries show the
  plate construing at both (*remota*, φωσφόρος). Those patches stand.
- **E12.** 0319D *quonium* is rendered "that" with a crux and no marker, as already written.
- **E10, the NOTAE layer.** All three stints found it independently: n188, n190, n191 (stint 1);
  n191–n193 (stint 2); three more in 0007–0009. These are Floss's lettered prose notes and go to
  `[fn:]` + `[nt:]`. **Not yet injected.** The texts are in `data/briefs/9176-PLATE-READS-*.json`
  (`notae` / `floss_notae`), next to the `variae_lectiones` owed to `[vl:]`.
- **Open for a human look (unchanged):** 0326D *audit cum* (c/e can't be settled on the archive copy; HathiTrust
  would settle it); 0313B *humana natura* with Floss's unplaced *forte leg. humanae naturae?*;
  0323B VL note ¹ with no visible key; n186 *Ariopagitam* / *Ariovagitam*.

## Merge, chunks 0010–0014 (2026-09-16, run stints A and B)

Stint records kept unedited beside this: `cruces-0010.md` (cols 0329B–0340A) and `cruces-0013.md` (0340B–0348B).
- **9176 fully translated, 15 of 15 chunks; verify clean.** Leaves n201–n210 read, corners first; reads merged
  into `works.9176` (0300C–0348B now continuous). The work ends at 0348B with *Cetera desunt*; nothing
  below the rule on n210 (Floss's *De praedestinatione* preface) was collated.
- **TEI patches landed:** 18, all in `data/tei-patches/9176.json` (the 13 that stood at re-adjudication, plus
  0330D, 0336A, 0338A, 0347A and 0348B). **0338A *coutuntur*** rests on one letter (n/u), but both copies agree, and it is
  the Vulgate's own word at John 4:9 (*non enim coutuntur Judaei Samaritanis*), where the twin's
  *contuntur* is a non-word. Withdrawn, as before: 0302C, 0306D, 0318D. Re-chunked: 202 anchors, words conserved.
- **Floss's apparatus:** 51 rows, **48 placed**. The n201 ³ key was found by A (*Nonne ³ et apostoli*), and B's
  n206 ¹ was placed by A (*spiritus* at 0339A). Still unplaced (no key found at the plate): n186 ¹, n193 ¹, n198 ¹.
- **Vocabulary held** (per-chunk counts at merge): no Elijah/Isaiah/strap/precursor/Passover/Holy Ghost.
  *adorare* → "adore" and *colere* → "worship" (John 4); *vir* → "husband" through the Samaritan dialogue.
- **For Wilson:** 0347A `[cj:]` on the transposed *facti, non autem dicti* (keep it, or demote to a crux); A's
  n204 VL 2–3 codex words, unreadable on both copies.

## Blind read (2026-09-16): fixes applied and cruces added

Readers' reports are in `data/briefs/PL122-BLIND-READ-R*.md`.
- **R3 (0006–0008):** applied 0319C *ad quem intendebat* → "toward whom he was gazing" (was "directing them", which read as the
  onlookers); 0319B *divina Scriptura* → "Holy Scripture" (Pattern 3); 0322D Floss note b *interpretatur aquis* →
  "interprets *waters*". **Crux, no marker:** 0319C *Dominum surrexisse in caelum* is carried as "rose into heaven",
  though the next sentences speak only of raising his eyes (*suspexisse* would fit). The column was collated at the plate
  (n196) with no divergence, so the plate prints *surrexisse*; a conjecture would be ours, and none is fired.
- **R2 (0003–0005):** applied **0316C, a dropped *non*** (*spiritum … non perceperit* → "and do not perceive the spirit");
  0312C *ipsum depellit* → "that Christ himself is a rational mind" (the next sentence's *ipsius anima* makes *ipsum*
  Christ); 0316C *Sed et hoc dicendum* → "But this also must be said" (no *ad*); 0310A lemma *Altera die* → "On the second
  day" (Douay's "The next day" hid the gloss); 0311A *debitores sumus* → "all of us men"; 0314C *conformans eos* →
  "conforming those". **Rejected:** 0310B *Agnus dicitur Christus Dei* as "The Christ of God is called Lamb"; the split
  *Agnus … Dei* against the lemma *Ecce Agnus Dei* supports the reading as it stands.
- **R4 (0009–0011):** applied 0327B–C, the solstice figure misparsed: *luce inchoante crescere … tenebris autem
  decrescere natus sit* → "born with the light beginning to increase, but the darkness to decrease" (the infinitives go
  with *inchoante*, not *natus*: Christ is born as the days lengthen, John as they shorten). 0326D *audit cum* stays open
  for a better witness (already logged). R4 adds: if a witness still shows *cum*, fire `[cj: *cum*; read *eum*, "him"]`.
  0010 and 0011 clean.
- **R5 (0012–0014):** applied 0345B/0345C *divinae Scripturae* → "Holy Scripture" ×2 (Pattern 3); 0337A *de eo dicitur* →
  "said of him"; 0346A the double dative → "Before this multitude … are set five loaves"; 0341B *adhuc* restored ("has
  still not"). **E4, *intellectus* as a reading:** 0013–0014 had rendered it "meaning(s)" at all 15 sites (each checked
  against the Latin: all *intellectus*). Normalized to "understanding(s)" per E4 and chunks 0000–0012; "sense" was not used,
  because the argument there also turns on the bodily *sensus*. R5's F5 (*tentator*) was withdrawn by the reader: both
  copies print it.
- **R1 (0000–0002 + plate collation of 0297A–0300B, the columns the pilot had not collated):** applied 0297A *omnes homines
  eum non recepisse* → "that all men had failed to receive him" ("all men did not" reads as "not all"); 0302D *pro suis
  meritis et ipsius gratia* → "his own merits and Christ's grace"; 0302B *in eis quaerentibus et diligentibus* → "in them,
  as they seek and love him". **Plate:** VL ¹ on n186 is keyed after ***habitat*** (`habitat ¹?`), not after *possideo*, so the
  pilot's table above was wrong. Now placed, **49/51**. Patched toward the plate: 0300B *secundam* (agrees with *unam …
  traditam*), 0298A *fieret?*, 0297A **16** leader dots (was 17). **Crux only (E11):** 0299D plate *ipse est veritatis*; the
  TEI's *veritas* construes and stands. `[var:]` fired at 0299A (Jn 1:29 splice). Chunk 0002 clean.

## Col 0297C (chunk 0000) — *vir* / *homo*: a lexical point English cannot carry

*Saepe sapientes viri vocabulo hominem solent appellare.* The lemma *neque ex voluntate viri*
has been rendered "nor of the will of man" (the received wording), and *totius hominis* "of
the whole man" — so Eriugena's point, that wise men use the word for the *male* (*vir*) to
name the *human being* (*homo*), collapses in English. Rendered with both Latin words shown:
"call the human being, *homo*, by the word *vir*, man." Explicit by design (the
general-reader rule); no marker.

## Col 0298A (chunk 0000) — *proloquiorum more recurrit*

*Proloquium* is the old Latin logicians' word for a proposition (Varro apud Gellius XVI.8),
and Eriugena means that the evangelist repeats *Et Verbum caro factum est* the way an axiom is
restated before it is built on. Rendered "recurs in the manner of propositions." Not "prologues"
— the word is not *prologus*.

## Col 0298A (chunk 0000) — *habitavit in nobis* rendered "dwelt **in** us"

The received English is "dwelt among us", and Eriugena gives that sense first (*conversatum est
inter nos homines*) — but his second gloss, *naturam nostram possedit*, only works on the
literal *in nobis*. Rendered literally so both glosses stand (E6).

## Col 0299A (chunk 0000) — `[var:]` CANDIDATE for the collation stint

✅ **FIRED 2026-09-16** after R1's full plate collation of 0297A–0300B.

*Ecce Agnus Dei qui post me venturus est.* The Vulgate has *Ecce agnus Dei, ecce qui tollit
peccatum mundi* (John 1:29) and *Hic est de quo dixi: Post me venit vir* (1:30); Eriugena's
lemma splices 1:29's opening onto 1:27/1:15's *qui post me venturus est*, and he himself notes
the other codices' *qui post me venit*. A `[var: Vulg. …]` is warranted **once the column has
been read at the plate**; not fired by the pilot.

## Col 0299B (chunk 0000) — *primus mei erat*

"he was first of me" is kept as the calque of πρῶτός μου that Eriugena is pointing at (*ut
significantius in Graeco*); smoothing it to "before me" would erase the contrast he draws with
*prior me erat* two lines earlier.

## Col 0300A (chunk 0000) — anchor placed inside a genitive chain

The Latin sets `[0300A]` between *inhumanationis* and *ejus*; English word order puts the
anchor after "inhumanation". Position is approximate by one word, as the runbook allows.

## Floss's *Variae lectiones* on this chunk's leaves (read at the plate, 2026-09-16)

Recorded here pending the marker ruling (`data/briefs/PL122-VARIAE-LECTIONES-RULING.md`);
nothing injected.

| leaf | cols | key | Floss's note | anchor in the text | our TEI reads |
|---|---|---|---|---|---|
| n185 | 297/298 | ¹ | *Cod. ei.* | *credunt, notitiam ejus¹ et intelligentiam* (0297B) | *ejus* — Floss's text |
| n186 | 299/300 | ¹ | *Cod. possidet.* | *Quidquid gratia possideo¹* (0299B/C) | *possideo* |
| n186 | 299/300 | ² | *Cod. Ariopagitam.* | *sanctum Dionysium Areopagitam²* (0300C) | *Areopagitam* |

⚑ The numbering restarts on every page (n186 begins again at ¹). The keys are absent from our
TEI, as every foot-of-page key is.
