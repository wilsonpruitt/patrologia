# Cruces — 11088, Hugh of St Victor, *Expositio in regulam S. Augustini* (PL 176, 0881A–0924D)

Merged from two agent batches (chunks 0000–0007 and 0008–0015), 2026-07-28.

## Work-wide conventions (reconciled at merge)

- ***praepositus* → "prior"** throughout (13 instances), NOT "superior". The two
  batches split on this — the first half had "superior" in 3 places, the second
  "prior" in the rest — and "prior" wins on the text: Hugh closes ch. XI with
  *qui inter vos quanto in loco superiori, tanto in majori periculo versatur*
  (0922D), where an office called "superior" would collide with "the higher
  place" in its own clause. Two further ordinary comparatives stand nearby
  (*superiores sibi invicem arbitrantes* at Phil. 2:3, *locus superior* at 0920B).
  The 3 first-half instances were converted at merge.
- The Rule's own recurring clauses are fixed: *unanimes habitetis in domo*,
  *sit vobis anima una et cor unum*, *quantum valetudo permittit*. Migne prints
  I Cor. XIV as *honeste* at 0893C and *honestate* at 0897D — both preserved,
  not normalized.

## The one genuine mid-construction break: 0883A

Migne prints `Sunt quidam in congregatione [0883A] beamus. Et ideo praecipit ut
unanimes habitemus obstinati in suo sensu, sapientes in oculis suis…` — a line of
type (`beamus. Et ideo praecipit ut unanimes habitemus`) sits wedged inside the
sentence about the obstinate, which resumes at *obstinati*. Verified against the
Latin twin at merge. This is NOT the column-band false-positive class: the text
breaks mid-construction AT the anchor. Rendered exactly as printed, with
`[sic: *beamus*]` on the headless fragment.

**Strong `data/tei-patches/11088.json` candidate.** The displacement falls exactly
at a column head, which is characteristic of lines pulled in the wrong order
during TRANSCRIPTION rather than of Migne's compositor — the same shape as the
11085 case. It cannot be settled without the PL 176 plate, and scan-reading was
deliberately NOT attempted (the 11055 precedent). The literal rendering is
correct either way; a patch would only change whose defect it is.

PL 176, cols 0881A–0901D. Chunks 0008–0015 are logged by the peer agent in its own file;
the two are merged afterward.

## Recurring-lemma renderings (consistency register)

The Rule's own clauses recur, both as lemmata and inside Hugh's exposition. Renderings
fixed here and used throughout chunks 0000–0007; a later agent continuing the work should
keep them.

- *in monasterio constitutis* → "who are established in the monastery" (0881A, and in the
  exposition at 0881B).
- *unanimes habitetis in domo* → "you may dwell of one mind in the house"; *unanimiter …
  concorditer vivite* → "live of one mind and in concord" (0881C, 0889C, 0890D).
- *et sit vobis anima una et cor unum in Deo* → "and let there be for you one soul and one
  heart in God" (0881C, 0884A; *sit nobis* → "for us", 0882A, 0884B).
- *praepositus* / *subditi* → "superior" / "subjects" (0885A, 0885B).
- *victus et vestimentum / tegumentum* → "food and clothing" / "food and covering".
- *quantum valetudo permittit* → "as far as health permits" (0892D, 0893A).
- *nihil fiat quod cujusquam offendat aspectum, sed quod vestram deceat sanctitatem* →
  "let nothing be done that would offend anyone's sight, but what befits your holiness"
  (0897C lemma, 0898A lemma, 0898D echo — all three identical in English).
- *honestas / honeste / honestate* → "honorableness" / "honorably" / "with honorableness".
  Note that Migne prints *omnia honeste et secundum ordinem fiant* at 0893C but *omnia
  honestate et secundum ordinem fiant* at 0897D, both citing I Cor. XIV. The difference is
  preserved, not normalized.
- No guillemets anywhere in these eight chunks: Migne marks every quotation by italics or
  by a bare *inquit*. All quotation marks in the English are therefore " " (Pattern 6),
  supplied only at 0897A (Augustine's *Fateor quia de pretiosa veste erubesco*) and at
  0884B ("mine" / "ours") and 0893B ("outside the hour"), where English needs a mark and
  the plate has none. Guillemet parity with the Latin twin is 0 = 0.

## Carried type — `[sic: …]` (Patterns 7, 10, 12)

| Col | Printed | Carried as | Note |
|---|---|---|---|
| 0882A | `omnes hain domo` | `[sic: *hain domo*]` | Non-word run-together. Almost certainly *habeamus in domo* — the exposition is quoting its own lemma (*unanimes habitetis in domo*), and the sentence has no finite verb without it. Whole run carried per Pattern 10, since the defect is the division (*ha*|*in*), not either fragment. |
| 0882B | `alterius veluntatem` | `[sic: *veluntatem*]` | Non-word; *voluntatem*, o/e set wrong. The same word is set correctly three lines above and twice below. |
| 0883A | `beamus` | `[sic: *beamus*]` | See the transposition entry below. Carried alone; the remaining words of the displaced run are real Latin and are rendered. |
| 0888C | `si in saecuto fruentur` | `[sic: *saecuto*]` | Non-word; *saeculo*, l set as t. The same lemma is re-quoted at 0890A with *fruerentur* and without the misprint, which confirms the reading. |
| 0891B | `Pretiosa et desirabilis merces` | `[sic: *desirabilis*]` | Non-word; *desiderabilis*, with -ide- dropped. |
| 0893A | `debet quisquae carnem suam domare` | `[sic: *quisquae*]` | Non-word; *quisque*. |
| 0894C | `qui nihil delicatum quaerit, it superfluum` | `[sic: *it*]` | Non-word. Sense requires a negated coordinator — *nec* or *aut non*; *it* is not a possible reading of any of them, so it is carried, not read. |
| 0895A | `quanto abjectores et pauperioris fuerunt` | `[sic: *abjectores*]` | No noun or comparative *abjector* exists; *abjectiores* is intended (it answers *nobiliores et delicatiores* in the preceding sentence). `pauperioris` is NOT marked: it is a real form (gen. sg.) and construes, barely, as a predicative genitive, so it is rendered as printed under Pattern 7 ("of poorer condition"). |
| 0895B | `site per arctam et angustam viam` | `[sic: *site*]` | Non-word; *iste*, answering *ille* in the same sentence. |
| 0900B | `Dominus justus concidet cer vices peccatorum` | `[sic: cer vices]` | Split type for *cervices* (Psal. CXXVIII). It sits inside an already-italic scripture lemma, so per Pattern 10 it takes no second italic marker — the `[sic: …]` content is bare there. |
| 0901C | `si eam perdimus, totuin perdimus` | `[sic: *totuin*]` | Non-word; *totum*. |

## Rendered literally, not carried (Pattern 7 / Pattern 12 boundary)

Real words that are simply the wrong word. These are rendered as ordinary English and take
no marker; the conjecture is here.

- **0883A — displaced line of type.** Migne prints `Sunt quidam in congregatione [0883A]
  beamus. Et ideo praecipit ut unanimes habitemus obstinati in suo sensu, sapientes in
  oculis suis; nam, quod in animo conceperint…`. A run of about a line — *…beamus. Et ideo
  praecipit ut unanimes habitemus* — has been set inside the sentence about the obstinate,
  which continues in the plural (*conceperint*, *defendunt*, *contendunt*). The displaced
  run evidently closed the preceding paragraph (*…debeamus*, or *habeamus*, followed by the
  transition back to the lemma). Rendered exactly as printed, so the seam is visible in the
  English: "There are some in the congregation [sic: *beamus*]. And therefore he commands
  that we dwell of one mind, obstinate in their own opinion…". **This is the one place in
  these eight chunks where text is broken across a column anchor, so it is offered as a
  genuine exception to the column-band false-positive rule — the break is mid-construction
  at 0883A, not a band-arithmetic inference. It is a compositor's transposition, not a
  chunking artifact: the Latin twin carries it.** Worth a human's eye.
- 0885A — `sed quasi sacerdos et levita vive decimis; et altari serviens, altaris oblatione
  sustentor`. *vive* is a real word (imperative) and is rendered as one ("live by tithes"),
  which leaves the sentence swapping person mid-clause (*sustentor*, *ero*). Jerome's
  first-person *vivo* is what the surrounding verbs require.
- 0889A — `Per vitia enim et virtutes exterminat humanam mentem`. Rendered literally ("For
  through vices and virtues it drives out the human mind"). Unconstruable as it stands: the
  subject can only be *superbia*, which appears as the subject of the NEXT clause, and
  pride's working "through virtues" is the argument (it lies in wait for good works), so
  *et virtutes* may be sound and *per vitia* an intrusion. Not emended.
- 0891C — `si ad illum sedula montis voce clamemus`. *montis* is a real word and is
  rendered ("with the assiduous voice of the mountain"). *mentis* is near-certain — the
  whole passage is about praying with the mind and not merely the mouth.
- 0894A — `Gratulari quisque sibi debet qui domo gratiae divinae tam sanus est et validus`.
  *domo* rendered as printed ("by the house of divine grace"). *dono* is near-certain.
- 0893D — `Ille esuriunt Dei verbum qui desiderant audire`. Singular demonstrative with two
  plural verbs. Rendered so that the mismatch survives in English ("That man hunger for the
  word of God who desire to hear"); *Illi* is intended.
- 0893D — `nullum ubi affectum habent`. *ubi* rendered as "where"; *ibi* is what the
  sentence wants ("they have no feeling there"). The literal rendering happens to read, so
  it is left.
- 0896C — `Ipsae sunt verae divinae quibus ditantur animae continentium`. Rendered "These
  are the true divine ones…". *divitiae* is certain: the sentence is about riches, answers
  *ditiores* in the lemma above, and supplies the antecedent of *quibus ditantur*.
- 0896D — `initium omnium honorum`, immediately answered by `initium omnium malorum`.
  Rendered "the beginning of all honors"; *bonorum* is what the antithesis requires. A real
  word, so no marker — but this is exactly the *bonorem*/*honorem* pair that forced Pattern
  7's non-word ruling, here landing on the readable side of the line.
- 0893B — `Non jejunantibus nec tamen infirmantibus rectam reficiendi intelligimus ab hora
  tertia usque ad sextam`. *rectam* has no noun; *horam* is required (and is the word used
  in the same sentence's second half). Rendered with a supplied bracketed English word,
  "the right [time] for taking refreshment", per the existing `[it]`/`[them]` convention.
- 0895C — `Exposita autem aegritudine sic tractandi sunt`. Rendered "when the sickness has
  been laid aside". *Expulsa* or *deposita* is likelier; *exponere* in this sense is a
  stretch but not impossible.
- 0896D — `quem exterius gestavit` (perfect) against `quem exterius gestamus` (present)
  eight words earlier, of the same thing. Rendered as printed ("whom he has borne
  outwardly").

## Punctuation carried per Pattern 8

- 0890D — `si ea semper in humilitate custodimus Et tunc veraciter sumus pauperes Christi`.
  No stop after *custodimus*; none supplied in the English either ("…if we always guard
  them in humility And then we are truly the poor of Christ").
- 0889D — the paragraph ends `…illustrare per gratiam` with no terminal stop before the
  next lemma. Not supplied.
- 0896D — `Melius est aliquid egestatis propter Dominum sustinere., quam superabundare.`
  A full stop followed by a comma. Both reproduced in the English, ugly as it looks: this
  is the plate's, not ours.
- 0897D and 0898A — `Sed valde notandum est quod dicitur` has no colon or stop before the
  lemma it introduces, and the lemma at 0898A closes with a comma rather than a period.
  Both preserved.
- 0900D — the last lemma of chapter VI prints `ubi scriptum est. Abominatio est domino
  defigens oculum.` — a full stop where a colon is wanted, inside an italic run. Preserved.

## No English exponent (Pattern 9) — logged, English untouched, do not churn

- 0898D — `jam maechatus est in corde sua` (Matth. V): *sua* for *suo*. English possessives
  carry no gender.
- 0897A — `ad debitam ministerium servire sufficiat`: *debitam* for *debitum*. Same.
- 0889A — `Ex hoc apparet quia caeteris, vitiis major est superbia`: a comma set between
  *caeteris* and *vitiis*, which belong to one phrase. Its position depends on Latin word
  order and cannot be reproduced in an English clause that reorders them; the English reads
  "greater than the other vices" with no stray comma. Recorded here so a later sweep does
  not read this as a deleted mark.
- 0901D — `quae vivit et regnat Deus`: feminine relative for *qui*. Rendered "who lives and
  reigns God"; no exponent in English.

## Not defects — checked and dismissed

- `preparavit` for *praeparavit* (0891B), `cocorum` for *coquorum* (0896B): attested
  medieval orthography, Pattern 9. Translated normally.
- `extollentia`, `delicationes` (0895A): late but real formations. Translated normally.
- The lemma *Nec extollantur…* and *Et quid prodest dispergendo…* are each printed TWICE,
  at 0888C/0889B and again at 0890A/0890C, with a second, fuller exposition. This is
  Migne's page, not a duplication in our chunking: the second pass is abbreviated at 0890A
  (`etc., usque fruerentur`) exactly as a re-lemma would be. Both are translated in full.
- The chapter head at 0897A prints without a terminal period (`CAPUT VI. DE HABITU
  EXTERIORI ET INTERIORI`) where every other head has one. Reproduced; not emended.
- `Verba sunt Hier.:` (0884D) — Migne's abbreviation for *Hieronymi* in running prose, not
  a `[n:]` note. Rendered "The words are Jerome's:" per Pattern 2 (attribution is a
  citation, translated and title-cased); the abbreviation is not preserved because it is
  prose, not apparatus.

## Marker counts (verified against the Latin twins)

| Chunk | `[n:]` | anchors | `## ` heads | guillemets |
|---|---|---|---|---|
| 0000 | 21 | 15 | 1 | 0 |
| 0001 | 21 | 10 | 1 | 0 |
| 0002 | 15 | 14 | 1 | 0 |
| 0003 | 8 | 10 | 1 | 0 |
| 0004 | 3 | 7 | 1 | 0 |
| 0005 | 4 | 7 | 1 | 0 |
| 0006 | 15 | 15 | 1 | 0 |
| 0007 | 2 | 4 | 1 | 0 |

All eight match the Latin `noteCount` in frontmatter. No `[f:]` tags (Pattern 4 does not
apply to lemma-and-gloss commentary), no `[d:]`, no `[ed:]`, no `[nt:]` — every note in
these chunks is a bare scripture citation, none is editorial prose.

Hugh of Saint Victor, *Expositio in regulam S. Augustini*, PL 176. This file
covers the second half of the work only (chunks 0008–0015); chunks 0000–0007
were translated concurrently and carry their own crux file. Merge afterwards.

## Standing conventions adopted for this half

Recurring Rule vocabulary, fixed here so that the lemma wording stays constant
wherever the Rule's own phrasing recurs across chunks:

- *praepositus* → **the prior**. The exposition at 0920D itself distinguishes
  him from the *presbyter*, glossed by Hugh as the abbot (or, where there is
  none, the bishop), so *presbyter* → **the priest** throughout, and
  *praelatus* → **prelate**, *abbas* → **abbot**.

  **MERGE CONFLICT — needs one decision before the work ships.** The concurrent
  first-half agent renders *praepositus* as **"superior"** (0000 col. 0884D
  lemma, *a praeposito vestro*; 0001 col. 0885A, *praepositos … praepositorum*
  — 2 occurrences there against ~15 here). Whichever wins, it must be applied
  across all sixteen chunks. The argument for "prior": it keeps *praelatus* →
  "prelate" distinct, and ch. XI turns on *quanto in loco superiori, tanto in
  majori periculo* (0922D), where "superior" as the officer's title collides
  head-on with "the higher place" in the same clause. The argument for
  "superior": it is the first-half agent's choice and the smaller edit.
- *emendatoria vindicta* → **corrective punishment** (0903B, 0903B exposition).
- *societas* (of the community) → **fellowship** (0903C).
- *cellarium* → **storeroom**, *vestiarium* → **clothes-room** (0905A, 0911A).
- *codices* → **books** (0911D, 0912A).
- *charitas* → **charity**; *dilectio* → **love**; *mansuetudo* → **meekness**;
  *lenitas* → **gentleness**, including in the thrice-recurring Gal. VI lemma
  *in spiritu lenitatis* → "in the spirit of gentleness" (0902A, 0904A, 0917A) —
  kept identical at all three occurrences.
- *satisfactio / satisfacere* → **satisfaction / to make satisfaction** (ch. X
  passim), not "apology", since Hugh builds the argument on the sacramental
  sense.
- *festuca / trabs* → **mote / beam** (0913A, 0913C, 0915D), matching the
  Gospel lemma the Rule is quoting.

## Carried type (Pattern 7 / 10 / 12 — marked `[sic: …]` in the English)

- **0908B** — printed *Dum sitit lucrum pervenit ad loqueum.* `loqueum` is not a
  Latin word; *laqueum* ("the snare") is certain from the sense and from the
  *laqueus* imagery Hugh uses at 0907D (*Laqueus contritus est*). Carried
  untranslated inside the already-italic scripture run, so it takes no second
  italic marker: `comes to the [sic: loqueum]`. One instance; the only carried
  non-word in these eight chunks.

## Real words that are merely wrong (Pattern 7 — rendered as English, NO marker)

Per Pattern 12's boundary, these are construable Latin words in the wrong place;
they are rendered literally in English and the conjecture lives here only.

- **0904A** — *Magis aut ad vindictam pertinet quam ad disciplinam.* Printed
  *aut* ("or"); *autem* is near-certain (the sentence is an adversative
  following "And this is not according to God"). Rendered literally as
  "Rather, or, it pertains to vengeance than to discipline," which is the
  closest English the printed words allow. **Worth a human's eye** — this is the
  ugliest sentence in the eight chunks, and if Pattern 12's boundary were ever
  moved to cover truncated function words, this is the case that would move it.
- **0906C** — *nullus nostrum debet operari sibi Et si Christi charitas…* No
  terminal stop, and the following word is capitalised. Preserved per Pattern 8
  (never supply a mark the plate lacks): the English reads "…ought to work for
  himself And if the charity of Christ…".
- **0911B** — *ne infirmitas quae data est ei ad purgationem animae, vertatur ad
  augmentum culpa* — sentence ends with no punctuation at all, and *culpa* is
  nominative where the sense wants the genitive *culpae* ("to an increase of
  guilt"). Rendered by taking the printed form as an ablative of cause: "be
  turned, by fault, to an increase", and the terminal stop is not supplied.
  Both defects are the plate's.
- **0912A** — *Perfectionem sensus et intellectus augentur.* An accusative
  subject with a passive plural verb; unconstruable as printed. *Per lectionem*
  ("through reading") is near-certain: the surrounding sentences are all about
  *lectio* ("Frequently the servant of God ought to read… Reading instructs us
  for prayer"), and *Per lectionem* → *Perfectionem* is a one-space compositor's
  slip. Rendered literally, "Perfection, sense and understanding are increased."
  **Worth a human's eye** — the conjecture is strong enough that a reader will
  assume the English is broken.
- **0914B** — *quod si debitoribus nostris, id est eis qui in nos peccant nos
  dimittimus… ipsa nostra oratione inculpamur.* The argument requires *non
  dimittimus*; the plate prints *nos dimittimus*. This is the dropped-negative
  class Pattern 7 exists to expose: as printed, Hugh says we are accused by our
  own prayer precisely *because* we forgive. Rendered literally ("and if we
  ourselves forgive our debtors… we are accused by our very prayer"). **Worth a
  human's eye.**
- **0915A** — *hoc magnum bonum tantae multitudinis non est quantum nos creamus
  exaudiri.* *creamus* ("we create") for *credamus* ("we believe"); the source
  (Augustine, *Enchiridion*) reads *credimus*. Rendered literally, "as we create
  to be heard".
- **0915C** — *Per iram justitiam relinquitur.* Accusative subject with an
  impersonal passive; *justitia* is wanted. Rendered "Through anger justice is
  abandoned" — the only English available, since English has no case exponent to
  carry the error.
- **0916A** — *ad nos Deus suos negatos prior misit.* *negatos* ("denied ones")
  for *legatos* ("legates"), confirmed by the same sentence's close, which does
  print *legatis intervenientibus*. Rendered literally, "God first sent to us
  his denied ones."
- **0918C** — *cum nec de profectu addicimur nec de ruina laetamur.* Gregory's
  text reads *affligimur*. Rendered "when we are neither condemned over his
  advancement", the nearest sense the printed verb allows.
- **0922B** — *Timorem iis qui superbi hac rebelles et durae mentis sunt.* *hac*
  for *ac*. Rendered literally, "who are proud, by this rebellious, and of hard
  mind."
- **0923A** — *Quod cum faciunt non sui, sed etiam ipsius magis obediendo
  miserentur.* *solum* has dropped after *non* — the two following sentences
  ("On themselves, namely, because they save their own souls… They show mercy
  also on him who presides") require it, and the lemma at 0922D prints *non
  solum vestri, sed etiam ipsius* in full. Rendered as printed, "they show mercy
  not on themselves, but also on him."

## Punctuation preserved against English habit (Pattern 8)

- **0902B** — *…stet omne verbum [n: (Matth. XVIII)]*, Summa quidem diligentia…*
  A comma where a full stop is wanted, followed by a capital. Both kept.
- **0902D** (lemma) — *…ne deterius putrescat in corde* ends with no punctuation
  at all, mid-question. Not supplied.
- **0909A** — *Si mihi non creditis; vel operibus credite.* Semicolon inside the
  scripture lemma; kept.
- **0911A** — *Ipse etenim dicturus est in judicio.* A full stop where a colon
  introducing the quotation is wanted; kept.
- **0911C** — *Jacobus.: Lingua inquietum malum…* Migne prints a full stop and a
  colon together after the attribution. Reproduced as "James.:".
- **0923B** — *…qui in agro sui cordis semina verbi. Dei psallendo, legendo,
  praedicando, asperserint…* A full stop between *verbi* and *Dei* breaks
  "the seeds of the word of God" in half and leaves the following clause without
  a subject. Rendered as printed ("the seeds of the word. Of God, by psalming,
  by reading, by preaching, unless afterwards…"). **Worth a human's eye** — this
  is the one place in these chunks where the printed punctuation makes the
  English genuinely hard to follow.

## Pattern 9 — looks like a defect, is not (no marker, no change)

- **0905D** — *cum quaeritur aliquis se deterius accepisse.* *quaeritur* for
  *queritur* ("complains") is the ordinary medieval *ae*/*e* orthography, not a
  corruption; the accusative-and-infinitive that follows fixes the verb.
  Translated normally as "complains".
- **0914A** — Isidore, *Qui fratrem suam tardius reconciliat.* Masculine noun
  with a feminine possessive. Latin gender has no English exponent — "his
  brother" is the only rendering either way. Logged so a later sweep does not
  churn it; no emendation to make.
- **0919D** — *si mentem plene coeperit* for *ceperit*. Attested medieval
  spelling; translated normally ("has fully taken hold of the mind").

## Not raised

Column-band sequences in this half (0902A–0924D) run continuously with no text
broken across an anchor, so nothing in the band arithmetic is reported. No
`[ed: …]` was needed: the TEI carries every element of these eight chunks. No
`[f: …]` tags: this is a lemma-and-gloss commentary, outside Pattern 4's scope.
No `[d: …]`: no dittography found. The single guillemet pair in these chunks
(0906C, the *charitas non quaerit quae sua sunt* lemma inside a lemma) is
reproduced 1:1; every other quotation in the eight chunks is marked by Migne
with italics alone and is left so.

<!-- corpus-polarity-sweep 2026-07-28 -->
## Corpus polarity sweep — 2026-07-28

Blind Opus read of the Latin/English pair for sense-reversing defects (one word or
one letter asserting the opposite of what the context requires). 5 site(s).
Migne's defects are recorded here and rendered literally in the English; our own
errors were fixed in place. Full context: `data/sweeps/corpus-polarity/REPORT.md`.

### 0896C — sense-reversing-letter (ours, medium confidence)

Printed: *Melius est minus egere quam plus habere.*

Conjecture: **minus egere = "to need LESS"; render "It is better to need less than to have more." The comparative in the English has been flipped from minus to "more," which is the one word the sentence turns on.**

The gloss Hugh immediately attaches reads the lemma as a counsel of wanting less, not of wanting more: "Servus ergo Dei ut voluntatem atque appetitum carnis possit reprimere, semper debet ad MINUS tendere ut ipsorum alimentorum et vestimentorum MINUS velit habere" — "ought always to tend toward the less, so that he may wish to have less." As printed in English the maxim also compares "more" with "more," which is no comparison at all; the Latin minus/plus antithesis is what makes it one.

### 0900D — sense-reversing-letter (migne, low confidence)

Printed: *Ille ergo vir sanctus timeat displicere, ne velit feminae malae placere. Illum cogitet omnia videre, ne velit feminae male videri.*

Conjecture: **feminae MALE placere (adverb), not feminae MALAE placere — "lest he wish to please a woman wickedly." One added letter turns a blanket prohibition into a conditional one about a particular (evil) woman.**

The twin clause printed in the very next breath keeps the adverb — "ne velit feminae MALE videri" — so the two halves of the same balanced sentence do not agree; and the rule this comments on forbids fixing on ANY woman, not on wicked ones only: "Oculi vestri, etsi jaciantur in aliquam feminarum, in NULLA figantur" (0899-lemma, same chapter). As Migne prints it, pleasing a woman who is not "mala" would fall outside the precept, which the chapter explicitly denies.

### 0914B — dropped-non (migne, high confidence)

Printed: *Quotidie dicimus Deo: Dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris, quod si debitoribus nostris, id est eis qui in nos peccant nos dimittimus, cum dicimus Deo: Dimitte nobis debita nostra, sicut et nos dimittimus, ipsa nostra oratione inculpamur, et Deum adversum nos ad iracundiam incitamus, et ipsi super nos inducimus maledictionem potius quam benedictionem.*

Conjecture: **Read 'id est eis qui in nos peccant NON dimittimus' — Migne's 'nos' is a one-letter corruption of 'non' (the preceding 'nos' in 'sicut et nos dimittimus' invited the assimilation). Sense: 'but if we do NOT forgive our debtors ... we are accused by our own prayer.'**

As printed, forgiving one's debtors is what makes the Lord's Prayer an accusation and a curse — the exact reverse of the argument. The next sentence says so: 'Sicque fit ut oratio quae debebat nobis esse salubris, sit noxia, et peccata nostra quae debuimus minuere, orando augeamus' — the prayer is harmful only when the petitioner has NOT forgiven. Same paragraph, just above: 'si hoc quod in nobis delinquitur ex corde non dimittimus, et illud rursum exigitur quod nobis jam per poenitentiam dimissum fuisse gaudebamus'; and below at 0915B: 'Quisquis autem roganti et peccata sua poenitenti ex corde non dimittit, nullo modo existimet a Domino peccata sua dimitti.'

### 0920A — dropped-word (migne, medium confidence)

Printed: *Sed quia nonnunquam nec jubentur adversa, sciendum summopere est quod obedientia aliquando si de suo habeat aliquid, nulla est, aliquando autem si de suo non habeat aliquid, minima est.*

Conjecture: **Gregory's antecedent (Moral. XXXV) distinguishes what is commanded in prosperity from what is commanded in adversity; read 'quia nonnunquam prospera, nonnunquam vero jubentur adversa'. Migne's 'nec' stands where the prosperity member has fallen out, and negates the adversity member instead.**

Two sentences later the same paragraph states that adverse things ARE commanded, and builds the whole distinction on it: 'Rursum cum mundi despectus praecipitur, cum probra et contumeliae adipisci jubentur' — and then 'Debet ergo et obedientia in adversis aliquid ex suo habere.' If adversity were never commanded there would be no 'in adversis' case to discuss.

### 0923A — dropped-word (migne, high confidence)

Printed: *Quod cum faciunt non sui, sed etiam ipsius magis obediendo miserentur. Sui videlicet; quia animas suas salvant.*

Conjecture: **Read 'non SOLUM sui, sed etiam ipsius ... miserentur' — 'solum' has dropped out, turning 'not only ... but also' into a flat denial.**

The very next clause asserts what the sentence has just denied: 'Sui videlicet; quia animas suas salvant' ('On themselves, namely, because they save their own souls'). The lemma being expounded, printed two paragraphs earlier at 0922C-D, also has the 'solum': 'Unde vos magis obediendo non solum vestri, sed etiam ipsius miseremini.'

