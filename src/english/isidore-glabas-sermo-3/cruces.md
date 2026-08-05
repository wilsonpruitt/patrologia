# Cruces — Isidore Glabas, Sermon III (On the Annunciation)

Per-batch logs: `cruces-A.md` (chunks 0000–0003) · `cruces-B.md` (0004–0006).
This file is the MERGE and is authoritative where the two disagree.

## WORK-WIDE CONVENTIONS (authoritative)

**The Marian epithet table of `isidore-glabas-sermo-1`'s `cruces.md` governs this
work unchanged**, together with Sermon II's additions, which state that they
govern Sermons III–IV. Everything below is an ADDITION, never a redefinition.

**The ὑμνητ- family — the load-bearing one, and it reconciles exactly.** Both
batches flagged it independently, because Allatius gives one Latin word for all
three members and the distinction survives only in our English:

| Greek | English | count |
|---|---|---|
| πολυύμνητος | much-hymned | 5 (4 clean + 1 Calfa-damaged) |
| πανύμνητος | all-hymned | 1 |
| ὑπερύμνητος | surpassingly hymned | 1 |

**Checked at merge against the Greek, not against either log: 7 Greek members, 7
English renderings, no member rendered as another anywhere in either half.** The
damaged member is Calfa's `κολοὑμνητος` at 0004 §22, third-witness verified as
πολυύμνητος; counting it is what makes the arithmetic close, and a merge that
counted only clean forms would have reported a false 4-vs-5 mismatch.
⚠ Note for any later sweep: `πανυμνήτου` carries its accent on the ETA, so an
accent-sensitive grep for `ύμνητ` MISSES it and manufactures exactly that phantom
conflict. It did during this merge.

**ὑπερφυής = supernatural.** 6 Greek occurrences, 6 renderings, 4 in Batch A and
2 in Batch B, converged on independently by both halves with no coordination.
⚠ **Owed, NOT edited here: the already-shipped Sermon I is internally split**
between "supernatural" and "beyond nature". Sermon III is internally consistent;
Sermon I is not. Flagged for the cross-work sweep, alongside Sermon II's already-
owed θαυμαστ- sweep — do not churn Sermon III to match a work that is itself
unresolved.

**Kept apart, and they must stay apart:** πλαστουργός ‖ πλάστης (A) ·
ζωοπάροχος = life-bestowing ‖ ζωοποιός = life-giving (B) · πολυύμνητος ‖
πανύμνητος (both) · κεχαριτωμένη = "thou that art highly favoured", the shipped
Sermon I rendering — NOT "full of grace", which Sermon I reserves for John 1:14's
πλήρης χάριτος.

**Batch A additions (16):** ὑπερύμνητος = surpassingly hymned · πλαστουργός (kept
distinct from πλάστης, which occurs three times in its own right) — full list in
`cruces-A.md`.

**Batch B additions:** ὑπεράγνος = surpassingly pure · ὑπεράμωμος = surpassingly
blameless · ὑπερένδοξος = surpassingly glorious (all three derived from the
table's own πάναγνος/πανυπέραγνος arithmetic) · συμπλάστης = fellow-Fashioner ·
θεουργέω = be God-wrought · ζωοπάροχος = life-bestowing · ἐξανθουργέω ·
ἀνθουργικά · ἐξιστουργέω · συμποικιλτός · συγκαλλοποιός.

## ⛔ THE PROMPT WAS WRONG, AND BOTH AGENTS REFUSED IT — record this above all

The launch prompt's 7a″ named-lemma list was built by grepping the **Calfa** text
and presented to both agents as "what the source prints". **Calfa is our
digitization, not Migne's plate.** The standing PG rule is that no finding may be
attributed to the plate from our files alone, and the prompt broke it six times
inside the instruction the runbook calls the most important one:

| lemma | prompt claimed the plate prints | actually |
|---|---|---|
| Luke 1:38 | `ῥῆρά` | Calfa damage — Latin *verbum*; Calfa itself prints `ῥῆμά` at 0003 |
| Luke 1:29 | `ἰδοῖσα`, `λότω` | Calfa damage — witness `ἰδοῦσα`, `λόγῳ`; Latin *cum vidisset … in sermone* |
| Luke 1:30 | `Θεᾷ` | Calfa damage — witness `Θεῷ`, Latin *apud Deum* |
| Luke 2:14 | `ὰνβρώποις εὐδορκία` | Calfa damage — witness `ἀνθρώποις εὐδοκία` |
| Isa 61:10 | `ἐλέδυσε … περιέβα λεν ἡχεᾶς` | Calfa damage — witness `ἐνέδυσε … περιέβαλεν ἡμᾶς` |

Both batches independently caught it, corrected under ladder row 1, and declined
to fire `[sic:]` — which would have blamed Migne's type for our file's defects.

**Two lessons, and the second is not obvious:**

1. **Build a 7a″ lemma list from the PLATE witness (third witness + Latin), never
   from Calfa.** Naming Calfa's damage as the plate's reading converts 7a″ from a
   conformation guard into a conformation CAUSE — and the resulting error is
   invisible downstream, because the shipped text would AGREE with the prompt.
2. **Name lemmas PER CHUNK, not per work.** Luke 1:38 is quoted four times here
   and the readings differ by occurrence: 0001 prints `ῥῆρά` with `φησὶ`, 0004
   prints `ῥᾶμά` with `Κυρίοι` and no `φησὶ`. The prompt gave both agents one
   work-level reading belonging to one chunk, so Batch B was told to expect a
   word its own passage does not contain.

## Markers, merged

`[var:]` 6 · `[sic:]` 1 · `[ed:]` 3 · `[lat:]` **0** · `[d:]` 0.

`[var:]` — plate divergences from the received text, each two-witness verified:
Jer 38:34 `τῶν ἀνθρώπων` for `αὐτῶν` · Isa 55:12 `ἡμᾶς` for LXX `ὑμᾶς` (itacism
class, third witness checked first) · Matt 8:29 singular `ἐμοὶ … με` · Luke
1:26–28 with `ὑπὸ τοῦ Θεοῦ` fronted and Nazareth dropped (the homilist re-quotes
the fronting) · Luke 1:34 with an added `μοι` that chunk 0004 opens by re-quoting
· **Luke 1:49 `Μεγαλεῖα` for the received `μεγάλα`** — material, because
μεγαλεῖον/μεγαλεῖα is the very word §27 and §§28, 31 expound. Luke 1:31–33, the
longest scripture block, diverges nowhere.

`[sic:]` — 0004 §22 `ἐπαρνόρθωσιν`, a non-word printed identically by BOTH Greek
witnesses, which is the two-witness bar Sermon II's adjudication 2 set. One other
non-word (`περὸν`, Batch A) was carried in italics WITHOUT `[sic:]` because no
second witness exists for it — the same rule, applied in the other direction.

`[lat:]` **zero across all seven chunks**, and the null is itemized site by site
in both logs rather than merely asserted: ~90 negation pairs collated in A, nine
ἡμεῖς/ὑμεῖς sites and all numerals third-witness checked in B. Two candidates
were raised and rejected with reasons — Luke 1:35 `ἐκ σοῦ`, settled on the plate
by **Migne's own note** (*Codex omittit voces ἐκ σοῆ*, the Nicetas rule), and
`εἰ καὶ μὴ γῆς … ἐδεήθη` ‖ *nisi et terra ipsa indiguisset*, particle force
rather than fact. One near-miss declined in A: the Latin crop numbers a section
*XI* where the Greek has `Θʹ`, but the crop has two elevens and no nine, so it is
OCR of the crop, not a column divergence.

## Silent corrections (ladder row 1) — logged, not hidden

Calfa damage repaired against third witness + Latin, which is repair of OUR
digitization and not emendation of Migne: the six lemma readings above ·
`Κυρίοι`→Κυρίου (0004) · four section numerals in B (`Ιʹ`→18, `ΚΙΟʹ`→19,
`ΚΟʹ`→29, `Αʹ`/`ΑΓʹ`→30/33, Α↔Λ twice in one chunk) · `κτίσιν` (0006 §29) and
`Υἱός` (0006 §33), plate-certain · an eleven-word loss at 0001 @0085 where Calfa
printed Latin-column glyph bleed. ⚠ That last one's tail is carried AS PRINTED
(`ὅταν` where the Latin needs `ὄντα`) and flagged — **do not tidy it.**
Section-numeral sequence 18→33 is complete and unbroken after repair.

`[ed:]` fired only where substance was certain but letters were not (13a clause
3, nothing supplied): 0004 @0105 at the column turn, and two lost section heads
in A (ΙΓʹ, Ιϛʹ), both third-witness + Latin confirmed.

## Latin seam bleed — confirmed as briefed

From char 6,434 the twin leaves Sermon III (*EDITORIS PATROLOGIAE MONITUM*, then
*SERMO IV*). Nothing restored or translated; the Greek ends correctly at the
doxology inside col. 0117, with Sermon IV beginning below it on the same leaf.
