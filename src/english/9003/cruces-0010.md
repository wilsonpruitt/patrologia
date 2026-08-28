# 9003 · *Expositio in XX primos Psalmos* — cruces for chunks 0010–0013 (cols 0774B–0784A)

Range: **IN PSALMUM X** (from 0774B) through **IN PSALMUM XVI** (to 0784A) — Psalms 10, 11,
12, 13, 14, 15 and 16 by the **Vulgate/Septuagint reckoning**, which is what Migne prints and
what `sources/vulgate/clementine-flat.txt` uses. Nothing below renumbers toward the Hebrew,
and the title-as-verse-1 offset is not treated as a divergence anywhere.

Apparatus placed in this range: **16 `[var:]` · 1 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[n:]`** (the work has `noteCount: 0` throughout, as expected). Zero guillemets in
either language. Band-by-band punctuation and italic-span counts are 1:1 with the Latin twins in
all four chunks with **one deliberate exception**, recorded at §4.1.

---

## §0 · WHAT WAS READ AT THE PLATE, AND WHAT IT FOUND

The on-disk scan (`raw/scans/pl114/patrologiaecurs06saingoog.pdf`) was read at 300–600 dpi for
**four pages covering the whole of cols 773–784 that carry my candidates**:
p. 392 (cols 773/774), p. 393 (cols 775/776), p. 395 (cols 779/780), p. 396 (cols 781/782).
Page map used and confirmed against the printed corner numbers on p. 392 (`773` / `774`):
**PDF page = (column + 11) / 2**, the figure `coverage.json` already records for this volume.

⛔ **The single most important finding in this batch is not a translation call. Our Latin for
this work diverges from Migne's plate at a high rate — nine sites in four pages — and it
diverges in BOTH directions (brief §4).** Every one of these was found by reading the whole
line for a different word, exactly as addendum C predicts. None is detectable from the Latin
alone. **Recommend a `data/tei-patches/9003.json` and a re-chunk after the whole work's
agents have filed**; I have not patched, because re-chunking mid-fleet would rewrite the
chunks the other agents are working from.

### 0a. Migne's own defective type, silently NORMALIZED by Corpus Corporum (5 sites)

| col | plate prints | our TEI reads | consequence |
|---|---|---|---|
| **0774B** | ***mentem*** (italic) | ~~*montem*~~ → **patched to *mentem*, 2026-08-28** | **the only one that changes the English** — see §1.1. The compromise described there is **over**: the twin now prints *mentem* and the English now reads "one ***mind*** do I hold". |
| 0774A/B | *apud **ipso** sit Christus* | *apud ipsos* | none (ungrammatical either way; no English exponent) |
| 0774C | ***dextruxerunt*** ×2 (lemma + re-quotation) | *destruxerunt* ×2 | none; a non-word for *destruxerunt*. ⚑ Migne prints *destruxerunt* correctly a third time in the same paragraph, which is what makes the first two visibly his slip |
| 0775B | *proptera* | *proptera* — **agrees** | took the batch's one `[sic:]`; see §1.2 |
| 0780D | ***acceleverunt*** (italic) | *acceleraverunt* | none; a non-word for *acceleraverunt* |

### 0b. Corpus Corporum's OWN corruptions, where Migne is clean (4 sites)

| col | our TEI reads | plate prints | corpus control |
|---|---|---|---|
| 0774B | *appelatus* | ***appellatus*** | — |
| 0774D | ***Dominius*** | ***Dominus*** | 1 occurrence of `Dominius` in the entire `src/latin/` corpus against 60 `Dominus` in this work alone |
| 0775B | *poenas **Juant*** | *poenas **luant*** | `J` for `l`; a non-word |
| 0780D | ***infirmi ates*** (split run) | ***infirmitates*** (one word) | unique in the corpus |
| 0780D | *Herusalem* | ***Hierusalem*** | — |

⛔ **THREE OF THESE WOULD HAVE TAKEN A FALSE `[sic:]`.** *Dominius*, *Juant* and *infirmi ates*
are textbook Pattern 10/12 shapes — a non-word, a J/l substitution, a split run — and a
`[sic: …]` on any of them would have blamed Migne publicly for the digitization's error, which
is the exact class of seven withdrawn markers in the 2026-08-23 batch (brief addendum B). The
addendum's rule held **5 for 5 here**: every non-word suspicion turned out to be a
transcription question, not a plate question. **The rule for a non-word in this work is:
render it for its evident sense, log it here, fire nothing, and ask for the plate — and where
the plate is on disk, as it is for PL 114, just read it.** Cost: four page renders.

⭐ **Recorded negative:** *proptera* at 0775B was suspected on exactly the same grounds as the
four above and came back **agreeing with the plate** — Migne set it. That negative is what
makes the four positives credible, and it is the one candidate in the batch that earned a
marker.

---

## §1 · THE TWO SITES WHERE THE PLATE CHANGED WHAT THE ENGLISH SAYS

### 1.1 · 0774B — ✅ **RESOLVED 2026-08-28. The patch landed; the English now reads Migne.**

**Read this box first; the section beneath it is the record of the compromise, not the current
state.** The tei-patch the section asks for (`montem` → `mentem` at 0774B) was applied in the
full plate collation of 2026-08-28. The Latin twin now prints *Unum enim **mentem** teneo*, and
the English has been changed from "one ***mountain*** do I hold" to **"one *mind* do I hold"**.

⚠ **Two things this section proposed that were NOT done, deliberately:**

1. **No `[sic: *mentem*]` was placed.** §3.1 of `cruces-0014` settles the principle for this
   work: Pattern 12 excludes "a real word that is merely wrong", and *mentem* is a real word.
   A `[sic:]` here would be the same false public claim the collation has just withdrawn four
   times over.
2. **No `[cj:]` either.** Pattern 18 renders Migne and *proposes* the emendation; but here the
   instruction was to render Migne's *mentem* ("mind"), so a marker reading "read *montem*,
   'mountain'" would sit beside an English word that already says something else. The
   incoherence goes in the crux, which is this paragraph.

**What is genuinely wrong on Migne's page, and is now visible in both languages:** *Unum* is
masculine/neuter and *mentem* feminine, and the relative *in quo* two words later demands a
masculine antecedent — the *mons* of the sentence before (*etiam **mons** appellatus est*),
which is what the heretics' Ps 10:2 *Transmigra in montem sicut passer* is about. **The
argument of the gloss wants *montem*; the plate prints *mentem*; we print what the plate prints
and say so here.** The English keeps "in which", which is genderless and therefore neutral
between the two.

---

### 1.1 (superseded) · 0774B — Migne prints *mentem*; our Latin twin prints *montem*. RENDERED FROM THE TWIN, AND THAT IS A COMPROMISE.

Printed on the plate: *Unum enim **mentem** teneo, in quo confido, quomodo dicitis…*
Our TEI: *Unum enim **montem** teneo…*

The gloss's whole argument is that Christ is called *mons* (*etiam mons appellatus est*), and
the heretics quote Ps 10:2's *Transmigra in montem sicut passer*. **Migne's *mentem* does not
construe** — *Unum* is masculine/neuter, *mentem* feminine, and the relative *in quo* demands a
masculine antecedent. So the digitization did not corrupt this word; it **repaired** it.

I have rendered **"one *mountain* do I hold"**, following the Latin twin, and I want the
compromise on the record rather than hidden:

- Pattern 7 says render what Migne prints. Migne prints *mentem*.
- Pattern 12 says a `[sic: …]`'s content must appear verbatim in the Latin twin. *mentem* does
  not, so the marker is not merely unwise here, it is **impossible** — the verifier would
  reject it, and rightly, since that check is what stops us gluing our own conjectures onto
  Migne's page.
- Rendering "one *mind* do I hold" against a Latin column reading *montem* would put an English
  word on the page with no witness anywhere in our files.

⚑ **The fix is a tei-patch, not a translation choice.** Patch `montem` → `mentem` at 0774B with
this crux as provenance, re-chunk, then the English becomes "one *mind* do I hold [sic:
*mentem*]" with the *montem* conjecture in the crux. **Until that happens the English on this
line is faithful to our Latin and not to Migne's, and no reader can tell.** That is the whole
reason the finding is at the top of this file.

### 1.2 · 0775B — *proptera*, and the marker does NOT swallow the force

Plate and TEI agree: *Calicem autem **proptera** puto appellatum, ne quid praeter modum atque
mensuram… fieri arbitremur.* *proptera* is no Latin word (haplography for *propterea*), so it
is carried untranslated under Pattern 10 and marked under Pattern 12:

> *A cup*, however, I think is **for this reason [sic: *proptera*]** so named, that we may not
> judge anything to be done beyond mode and measure…

7a⁗ four-question check, run with the marker's contents deleted:
1. **Verb?** yes — *puto appellatum*, "I think … so named".
2. **Negation?** yes — the *ne* clause, "that we may **not** judge".
3. **Interrogative/conjunction?** ⚠ **this is the one that fires.** *propterea* is the
   forward-pointing half of a *propterea … ne* correlative; quarantine it and the sentence
   loses the pointer to its own reason clause. **So "for this reason" is rendered in plain
   words beside the marker**, which is 7a⁗ obeyed rather than admired.
4. **Object?** (the fourth question 7a⁗ does not ask) — yes, *Calicem*, "a cup", untouched.

Strip-the-marker test: *"A cup, however, I think is for this reason so named, that we may not
judge…"* reads aloud with nothing missing. ✓

---

## §2 · THE 7a″ COLLATION — EVERY LEMMA AND EVERY QUOTED SCRIPTURE IN COLS 0774B–0784A

265 italic spans were listed for this range. What follows names the ones that were checked
against `sources/vulgate/clementine-flat.txt` **and the ones that came back clean**, because a
findings-only list cannot be distinguished from no list at all.

### 2a · READ CLEAN — Migne agrees with the Clementine word for word

These were each collated against the cited verse, not merely against "somewhere in the
Clementine" (which is all the pre-scan's ✓ means). All agree exactly, punctuation apart:

**Psalm 10:** *In Domino confido, quomodo dicitis* (10:2) · *montem* (10:2) · *Quoniam ecce
peccatores* (10:3) · *Quoniam quae perfecisti destruxerunt* / *destruxerunt* / *quid fecit*
(10:4) · *Dominus in templo sancto suo* / *templo sancto suo* / *Oculi ejus in pauperem* /
*Filios* / *hominum* / *palpebrae* / *interrogant* / *coelum* (10:5) · *Dominus interrogat
justum et impium* (10:6) · *Pluet super peccatores* / *Pluet* / *laquei* / *igne* / *pars* /
*calicis eorum* / *Calicem* (10:7) · *Quoniam justus Dominus* / *justitiae* / *aequitatem vidit
vultus ejus* / *aequitas* (10:8).
**Psalm 11:** *Octava* / *octavam* (title, 11:1) · *Salvum me fac, Domine, quoniam* / *Defecit
sanctus* / *veritates* (11:2) · *Vana locuti sunt unusquisque* / *Proximum* / *in corde et
corde* (11:3) · *Disperdat Dominus universa labia* / *Universa* / *Linguam* / *magniloquam*
(11:4) · *Qui dixerunt linguam nostram* (11:5) · *Propter miseriam inopum* / *inopes et
pauperes* / *Ponam in salutari* / *In salutari* / *Fiducialiter* (11:6) · *Eloquia Domini,
eloquia casta* / *Casta* / *probatum terrae* (11:7) · *Tu, Domine, servabis nos* (11:8) · *In
circuitu impii ambulant* / *In circuitu ambulant* / *secundum altitudinem* (11:9).
**Psalm 12:** *Usquequo, Domine, oblivisceris me in finem?* / *Avertere* / *faciem* (12:1) ·
*dolorem in corde meo per diem* (12:2) · *Usquequo exaltabitur inimicus* / *Inimicus* (12:3) ·
*Respice* / *Illumina oculos meos, ne unquam* / *oculos* / *illuminari* (12:4) · *Qui tribulant
me exsultabunt* / *motus* / *motum* (12:5) · *Exsultabit cor meum in salutari* / *In salutari
tuo* / *exsultabit cor meum* / *cantabo* / *psallam* (12:6).
**Psalm 13:** *Dixit insipiens in corde suo* / *in corde* / *Corrupti sunt et abominabiles* /
*Non est Deus* / *abominabiles* / *usque ad unum* (13:1) · *Dominus de coelo prospexit super
filios hominum* / *filios hominum* / *Prospicit* / *Dominus* / *de coelo* / *ut videat* (13:2) ·
*Omnes declinaverunt* / *Sepulcrum patens est* / *Linguis suis dolose agebant* / *Venenum* /
*aspidum* / *Quorum os maledictione* / *Pedes* / *veloces* / *Ad effundendum sanguinem* /
*Contritio et infelicitas in viis eorum* (13:3) · *Nonne cognoscent omnes* / *Omnibus* /
*cognoscere* / *Qui devorant* / *plebem meam sicut escam panis* (13:4) · *Dominum non
invocaverunt* / *invocat* / *ubi non erat timor* (13:5) · *Quoniam Dominus in generatione* /
*Consilium inopis confudistis* (13:6) · *Quis dabit ex Sion* / *Quis dabit?* / *Quis dabit ex
Sion salutare Israel?* / *ex Jacob* / *Israel* / *Exsultabit Jacob* / *laetabitur Israel*
(13:7) · **and Rom 11:26 *et sic omnis Israel salvus fieret* — exact.**
**Psalm 14:** *Domine, quis habitabit in* / *tabernaculum* / *Mons* / *In tabernaculo* / *quis
habitabit?* / *in monte, quis requiescet?* (14:1) · *Qui ingreditur sine macula et operatur
justitiam. Qui loquitur* (14:2) · *veritatem* / *corde* / *locutus est in corde* / *in corde* /
*In lingua* / *dolus* / *Nec fecit proximo suo malum* / *Proximum* (14:3) · *Ad nihilum deductus
est* / *conspectu ejus* / *Timentes autem Dominum glorificat* / *Qui jurat proximo suo et non
decipit* / *loqui veritatem in corde suo* / *dolum in lingua sua* / *et non facere proximo suo
malum* (14:4) · *Qui facit haec, non movebitur in aeternum* (14:5) · **and Ps 138:17 *Mihi autem
nimis honorificati sunt amici tui, Deus* — exact.**
**Psalm 15:** *Conserva me, Domine, quoniam speravi in te. Dixi Domino: Deus meus es tu, quoniam
bonorum meorum non eges* / *bonis meis* (15:1–2) · *Sanctis qui sunt in terra ejus* /
*voluntates meas* (15:3) · *Multiplicatae sunt infirmitates eorum* / *infirmitates* /
*acceleraverunt* / *Non congregabo conventicula eorum de sanguinibus* / *de sanguinibus* (15:4) ·
*Dominus pars haereditatis meae et calicis mei* / *haereditatem* / *calicis mei* / *mei* /
*congregabo conventicula eorum* / *restitues* (15:5) · *Funes ceciderunt mihi in praeclaris* /
*ceciderunt* (15:6) · *Benedicam Dominum qui tribuit mihi intellectum* / *intellectu* (15:7) ·
*Providebam Dominum in conspectu meo semper* / *providens* / *a dextris est* (15:8) · *Propter
hoc laetatum est cor meum* / *Insuper et caro* (15:9) · *Quoniam non derelinques animam meam in
inferno* / *Notas mihi fecisti vias vitae* / *Notas fecisti* / *vias* / *vitam* / *adimplebis* /
*laetitia* / *me adimplebis* (15:10) · **and Jo 19:19 *Jesus Nazarenus rex Judaeorum*, Mt 11:29
*Discite a me, quia mitis sum, et humilis corde* — both exact.**
**Psalm 16:** *Exaudi, Domine, justitiam meam* / *justitiam* / *Non in labiis dolosis* / *in
labiis dolosis* (16:1) · *De vultu tuo judicium meum prodeat* / *de vultu tuo* (16:2) ·
*Probasti cor meum et visitasti nocte* / *nox* / *ignis* (16:3) · *Ut non loquatur os meum opera
hominum* / *opera hominum* (16:4) · *Perfice gressus meos in semitis tuis* / *Perficiatur* /
*vestigia* (16:5) · *Ego clamavi, quoniam exaudisti me* (16:6) · *Mirifica misericordias tuas,
qui salvos facis sperantes in te* (16:7) · *A resistentibus dexterae tuae* / *A resistentibus* /
*custodi me ut pupillam oculi* / *Sub umbra alarum tuarum protege me* (16:8) · *Inimici mei
animam meam circumdederunt* / *Inimici* / *animam* / *circumdantes* (16:9) · *os eorum locutum
est superbiam* (16:10) · *Projicientes me nunc circumdederunt me* / *Projicientes* /
*circumdederunt me* / *statuerunt declinare* (16:11) · *Susceperunt me sicut leo paratus ad
praedam* / *Susceperunt* (16:12) · *Exsurge, Domine, praeveni eum et supplanta eum* / *Exsurge* /
*supplanta eum* / *animam meam* / *framea* (16:13) · *Domine, a paucis de terra divide eos* /
*Pauci* / *divisi* / *a paucis* / *terra* / *in vita* / *absconduntur* / *adimpleta* / *Saturati
sunt filiis, et dimiserunt reliquias suas parvulis suis* (16:14) · *in justitia tua* / *satiabor,
cum apparuerit gloria tua* (16:15) · **and Jo 19:15 *Non habemus regem nisi Caesarem*, Mt 27:40
*qui destruis templum*, Jo 8:44 *Vos ex patre diabolo estis* — all exact.**

⚑ **The clean list is long on purpose, and it is what makes the divergences below mean
something.** The Gallican psalter is what the Clementine prints, so these lemmata *ought* to
collate cleanly; the sixteen places where they do not are correspondingly heavier, not lighter.

### 2b · MARKED `[var: …]` — 16 divergences, each resting on the file, none on recollection

**The firing rule I applied, stated so it can be checked:** a `[var:]` where the divergence is
(a) certain from `clementine-flat.txt` at the verse actually being glossed, (b) **lexical or
grammatical**, not orthographic and not a clipping, and (c) sitting in a lemma or in a
scripture the gloss expounds. Everything failing (b) or (c) is in §2c with its reason.

| col | chunk | Migne prints | Clementine | why it fires |
|---|---|---|---|---|
| 0774B | 0010 | *Tetenderunt arcum* | Ps 10:3 *intenderunt arcum* | different verb in the lemma the gloss expounds. **Plate-confirmed** (p. 392) |
| 0776C | 0010 | *Multiplicantur … filii hominum* | Ps 11:9 *multiplicasti filios hominum* | **agency reverses** — passive of the sons vs. 2nd-sg. active of God |
| 0776C | 0011 | *Quandiu ponam consilium in anima* | Ps 12:2 *quamdiu ponam consilia in anima mea* | singular for plural, and **the gloss rests on the singular** (*Consilio non opus est nisi in adversis*) |
| 0777B | 0011 | *psallam nomini Altissimi* | Ps 12:6 *psallam nomini Domini altissimi* | *Domini* absent from the lemma — and the gloss four lines later argues from it (*nomini autem Domini, quod apud homines innotescit*) |
| 0777D | 0011 | *dedit illos Deus in reprobum sensum* | Rom 1:28 *tradidit illos Deus…* | different verb |
| 0778B | 0011 | *Macta, et manduca* | Act 10:13 *occide, et manduca* | different verb (sacrificial *mactare* for *occidere*) |
| 0778C | 0011 | *…et discite a me… jugum enim meum lene est, et sarcina mea levis est* | Mt 11:29–30 *Tollite jugum meum super vos, et discite a me… Jugum enim meum suave est, et onus meum leve* | a whole clause absent, plus two lexical changes |
| 0778D | 0011 | *tollent nobis et gentem et locum* | Jo 11:48 *tollent nostrum locum, et gentem* | dative for possessive, order reversed |
| 0779A | 0011 | *quoniam Deus in generatione justa est* | Ps 13:6 *Quoniam Dominus…* | **divine name changed — and it disagrees with Migne's own VERS. 6 lemma four lines above, which reads *Dominus*.** Both are in the same chunk; the divergence is internal as well as external |
| 0779A | 0011 | *facta est coecitas ex parte in Israel, ut plenitudo…* | Rom 11:25 *caecitas ex parte contigit in Israel, donec plenitudo…* | different verb, and *ut* for *donec* changes purpose to term |
| 0779B | 0011 | *Veniat ex Sion… ex Jacob* | Rom 11:26 *Veniet ex Sion… a Jacob* | **future indicative becomes jussive subjunctive** — a prophecy turns into a prayer |
| 0780D | 0012 | *miras fecit … voluntates meas* | Ps 15:3 *mirificavit omnes voluntates meas in eis* | periphrasis for the verb, *omnes* absent. **Plate-confirmed** (p. 395) |
| 0782B | 0013 | *Propter verba* [pacis tuae] … *ego custodivi vias laboriosas* | Ps 16:4 *propter verba labiorum tuorum, ego custodivi vias duras* | **plate-confirmed** (p. 396). ⚑ And Migne's own gloss at 0782C, six lines later, writes *posteaquam peregi vias **duras*** — so the work carries both readings and knows the Vulgate's |
| 0782B | 0013 | *Ut non moveantur signa itineris mei* | Ps 16:5 *ut non moveantur vestigia mea* | **plate-confirmed** (p. 396). The gloss then glosses the divergent phrase *with* the Vulgate's word — *quae tanquam **vestigia** … impressa sunt* |
| 0783B | 0013 | *Erue animam meam* | Ps 16:13 *eripe animam meam ab impio* | different verb in a lemma the gloss re-quotes (*Hanc ergo **erue** ab inimicis meis*) |
| 0783D | 0013 | *Ego autem in justitia tua apparebo* | Ps 16:15 *Ego autem in justitia apparebo conspectui tuo* | ***tua* added, and the exposition is built on it** — *in justitia tua videbo faciem tuam* |

### 2c · DIVERGENCES FOUND AND DELIBERATELY NOT MARKED, with the reason for each

⚑ These are the rejected candidates. Each is a real difference from the Clementine; none earned
a public claim.

1. **0774B *Paraverunt sagittas in pharetra*** — Clem Ps 10:3 has *sagittas **suas** in
   pharetra*. Plate-confirmed as Migne's. **Not marked:** an omitted possessive is not
   sense-bearing, and the lemma is clipped (it ends in a comma and the gloss picks it up
   mid-verse), so the omission is as likely a clipping as a text.
2. **0776B *Erat enim docens eos tanquam potestatem habens*** — Mt 7:29 has *sicut*.
   **Not marked:** *tanquam* and *sicut* are synonyms here; no reader takes anything different
   away. (Mc 1:22's *quasi* shows the same slot is fluid.)
3. **0777A/B *Finis legis Christus*** — Rom 10:4 is *Finis **enim** legis, Christus, ad
   justitiam omni credenti*. **Not marked:** it is an incipit used as a chapter motto, not a
   proof-text, and the omissions are the clipping.
4. **0777B *tribuit mihi bona*** — Ps 12:6 has *qui **bona tribuit mihi***. **Not marked:** word
   order only, and the words are woven into the gloss's own syntax.
5. **0777B *egit in eo*** — Ps 12:6 has *fiduciali­ter **agam** in eo* (1st sg. future).
   **Not marked:** the gloss has recast the verse into the third person about Christ throughout
   this sentence; the person and tense are the gloss's grammar, not a variant text.
6. **0778A *Nunc cognovi, quod **timeas** Deum*** — Gn 22:12 has *times*. **Not marked:**
   subjunctive in indirect statement is standard medieval usage and English has no exponent for
   it here (Pattern 9's reasoning). Rendered "that thou fearest God".
7. **0778C *non cognoverunt viam pacis*** — Ps 13:3 has *et viam pacis non cognoverunt*.
   **Not marked:** order only, inside the gloss's *Unde …* clause.
8. **0780B *opprobrium non accipere adversus proximum suum*** — Ps 14:3 has *opprobrium non
   accepit adversus **proximos suos*** (plural). **Not marked:** Migne has recast the whole
   catalogue into infinitives here, and the singular agrees with his own gloss two paragraphs
   above, *Proximum omnem hominem accipi oportere*.
9. **0781D *Delectatio*** — Ps 15:10 has *delectationes*. **Not marked:** the gloss needs a
   singular subject for *est*; this is its syntax.
10. **0783A *Qui adipem suum concluserunt*** — Ps 16:10 begins *adipem suum concluserunt*.
    **Not marked:** the *Qui* carries over the relative of 16:9, which Migne quotes as the
    preceding lemma. Nothing is added to the text.
11. **0783B *et sicut catulus ejus*** — Ps 16:12 has *et sicut catulus **leonis** habitans in
    abditis*. **Not marked, and this was the closest call in the batch.** *ejus* refers to the
    *leo* named four words earlier in Migne's own lemma, so the two readings denote the same
    animal and the gloss (*populus scilicet*) turns on the whelp, not on whose it is. A `[var:]`
    here would report a difference no reader could act on. Logged instead.
12. **0784A *Scimus quia*** — 1 Jo 3:2 has *Scimus quoniam*. **Not marked:** interchangeable
    conjunctions.
13. **Orthography throughout, Pattern 9, no markers and no cruces beyond this line:**
    *Quandiu*/*quamdiu* · *unquam*/*umquam* · *coelo*/*caelo* · *coecitas*/*caecitas* ·
    *Sepulcrum*/*Sepulchrum*.
14. **The two `Hebraica editio` readings are NOT Vulgate divergences and take nothing.**
    0776B *separatum a terra* (against *probatum terrae*) and 0781A *Et tu haereditas speciosa
    mea es* — Migne himself labels both as the Hebrew, and 0783D quotes a third (*Ego in
    justitia videbo faciem tuam; implebor, cum evigilavero, similitudine tua*). A reading the
    page itself identifies as another version is not a divergence in the Gallican lemma.

---

## §3 · THE UNEXPRESSED SUBJECT — every supplied pronoun in this range, and what fixed it

The launch brief named this the dominant defect class for a psalm gloss, where the speaker moves
between psalmist, Christ, the Church and the persecutor inside one sentence. Below is every
place I supplied a subject English cannot leave out, with what decided it. Where two readings
construe, both are named.

1. **0775A/B *Pluet, ad verba praedicantium **retulit**…*** — supplied "**he** referred".
   The subject is **the psalmist**, not the commentator: the sentence explains what *the verse's
   own word* does, and the surrounding formulas (*Quod autem ait*, *Ait enim*, *quod dixit
   veloces*) all take the psalmist as subject. ⚠ **The rival is Augustine**, whose *Enarratio*
   this gloss abridges throughout; on that reading it is "he [Augustine] referred it". I took the
   psalmist because Migne's abridgment nowhere names its source in this range, so a reader has no
   third person to attach it to.
2. **0774D *Quippe **cui** derelictus est pauper*** — "to **him** the poor man is left". The
   antecedent is **God**, carried from *Oculi **ejus*** in the lemma directly above and confirmed
   by Ps 9:35/10:14's *tibi derelictus est pauper*. Not the poor man, and not the psalmist.
3. **0776D *ut perfecte **operetur** misericordiam*** — "that **it** may perfectly work mercy".
   ⚠ **Two readings construe and I say so rather than choosing silently.** The subject is either
   **the soul** (*in anima mea* stands three words earlier, and the whole psalm's frame is the
   soul's deferral) or **God** (the sentence's other actor, who is deferring). I took the soul,
   because the *quandiu ponam consilium* clause it depends on has the soul as its location and
   the speaker as its agent; a reader preferring God loses nothing in the argument.
4. **0780A *certissime **noverit** malignum non esse*** — "let **him** know most certainly".
   The subject is **the perfect man** of *Ista perfectio est, ut nihil in homine valeat
   malignus*, i.e. the *Qui ingreditur sine macula* of the lemma. Third-person jussive, not
   an address to the reader.
5. **0776A *in quo intelligitur **posuisse***** — "in whom **he** is understood to have set".
   **God the Father**, from *Hoc de persona Dei Patris accipiendum, qui … Filium suum misit*
   two sentences above. Not Christ, who is the *in quo*.
6. **0781A *manifestius in Hebraico … sic **exponit**;*** — "**he** sets forth more plainly in
   the Hebrew". ⚠ **Two readings.** Either the psalmist/text (my rendering) or **the Hebrew
   edition as subject**, which is exactly the construction Migne uses at 0776B four columns
   earlier: *manifestius **Hebraica editio** posuit*. That parallel is the strongest argument
   for the rival, and it is why I have named it here rather than settled it in the text; the
   English is unaffected either way except for the pronoun.
7. **0783B *ut per ipsam regna **debellet** iniquitatis*** — "that through it **it** may war
   down". The subject is **thy hand / thy eternal power** (*quam assumpsit manus tua, id est
   aeterna virtus tua*), not the soul, which is the *ipsam* the power acts *through*.
8. **0782A *quae res tacitas intelligentiae **suae** virtute cognoscit*** — rendered "which
   knows silent things by the power of **its own** understanding". ⚠ *quae* is feminine and can
   only attach to *justitiam* or *vocem*; the sense plainly wants **the Lord** as knower. I have
   followed the grammar rather than the sense and logged it, per Pattern 7. A reader who takes
   *quae* as loosely attracted to the Lord reads "by the power of his understanding".
9. **0778B *cogitans de insidiis*** (0783B in chunk 0013) — "**he** devising of the snares".
   Subject is **the adversary/whelp**, i.e. the people, from *catulus ejus, populus scilicet*.
10. **0784A *non solum … **gratulatur** … **confidit**;*** — "**he** not only rejoices … but
    trusts". The subject is **the believer** of *gloria resurrectionis **fidelium***, the topic
    of the whole paragraph, not Christ and not John.

---

## §4 · CONSTRUCTION-LEVEL CALLS

### 4.1 · Pattern 8b was invoked once, and it is the batch's one band mismatch

**0776D:** *In eo etiam, quod subjungit: dolorem in corde meo per diem, subauditur, **quandiu
ponam?*** Migne closes an **indirect** question with `?` (verified on the plate, p. 393, where
the mark is unambiguous). English cannot end *"it is understood how long I should set it?"*, so
8b's recast applies: **"it is understood: how long shall I set it?"** — the colon carries the
*subauditur* frame and the direct question carries the mark. Nothing supplied, nothing deleted.
⚑ **This is the single band where my colon count exceeds the Latin's** (chunk 0011, band 1,
1 → 2), and the excess colon is precisely the one 8b requires. Recorded so a later checker does
not read it as drift.

### 4.2 · Question-mark parity, verified

`?` counts are 1:1 with the Latin twin in every chunk (0010: 3 · 0011: 6 · 0012: 2 · 0013: 0).
Two places tempt a mark that Migne does not print, and neither got one:
- **0779A** *ut sit sensus: Nonne cognoscent omnes… non in eis qui diligunt saeculum.* — a
  *Nonne* clause closed with a **full stop**. Rendered as printed, ending in a period.
- **0784A** *Quid enim est aliud… nisi quod beatus Joannes Apostolus ait: …* — a *Quid enim*
  question closed with a **full stop**. Likewise rendered with a period.

### 4.3 · Sentences Migne leaves without a terminal mark, reproduced as such

**0780B** *Tamen etiam ista minora ita concludit* — no full stop before the VERS. 5 line that
completes it. Carried through unpunctuated in English ("Yet even these lesser things he thus
concludes"), per Pattern 8's "never supply".

### 4.4 · `VERS` printed without its period — TWICE in this work, so it is a class

**0774B** prints `VERS. 2--` (period after VERS, none after the numeral) and **0781B** prints
`VERS 7.--` (no period after VERS). ⚑ **Chunk 0009 carries a third, `VERS 28.--`**, so this is a
recurring feature of the work's transmission and not a one-off. The plate at p. 392 sets
`VERS. 2. —` correctly, so at least the first is our transcription. **Convention 1 says the
verse address passes through VERBATIM**, so all of them are reproduced exactly as our Latin
prints them, unnormalized. Flagged for the assembler: if the work is ever patched, these are
patch candidates alongside §0.

### 4.5 · `usque ad` — five occurrences, NONE of them the abridgment formula

Brief addendum D warns that the formula has look-alikes. Decided per occurrence, from what
stands on either side:
- **0777D ×3** — *usque ad unum* is **Ps 13:1's own words**, an italic lemma, and the gloss
  expounds it at length across four sentences (*vel cum ipso uno … vel praeter unum*). This is
  the exact trap addendum D describes and it is the verse, not an abridgment.
- **0781B** *usque ad mortem me erudivit inferior pars* — the ordinary preposition, "even unto
  death", parallel to Ps 15:7's *usque ad noctem*.
- **0781D** *perducens usque ad finem gloriae conspectus tui* — ordinary preposition. ⚠ Its
  parse is genuinely ambiguous: either "even unto the end, [namely] the beholding of thy glory"
  (my rendering, taking *conspectus* as nominative in apposition) or "unto the end of the glory
  of thy countenance" (*conspectus* genitive). Neither is an abridgment; logged because the
  English commits to one.

### 4.6 · Test 2a — negations resting on a quantifier or correlative, proved from structure

The trigger population (a negative with *solus*/*omnis*/*tantum*/*non solum … sed*/*non … sed*
nearby) fires **eight times** in this range. In every one the host is proved from the
correlative, not from what reads well:
1. **0775C** *quia non se praebet cognoscendum **malis, sed bonis*** — the *sed bonis* answers
   *malis*, so the negation is on **malis**: "he offers himself to be known **not to the evil**,
   but to the good", **not** "he does not offer himself".
2. **0777B** *quod **non illi sed nobis** est utile* — host is *illi*: "useful **not to him**,
   but to us".
3. **0777C** *quia **non tantum** labiis dixerunt, **sed** in corde* — host is *tantum*: "**not
   only** with the lips, but in the heart".
4. **0779A** *in Deo **solo** spem ponerent, **non** in rebus transeuntibus* — host is the
   phrase *in rebus transeuntibus*, answering *in Deo solo*.
5. **0780C** *Non enim **Deo, sed nobis** praestamus* — host is *Deo*: "it is **not to God**,
   but to ourselves, that we render service".
6. **0781A/B** ***Non** enim restitues **mihi** quod non amisi, **sed** restitues **his**…* —
   the pivot is *mihi ↔ his*, so the negation governs **mihi**: rendered "thou wilt *restore*
   **not to me** what I have not lost, but thou wilt *restore* to those who have lost it".
   Rendering it as "thou wilt **not restore** to me" also construes and reads more smoothly —
   which is exactly why 2a says to take the structure, not the smoothness.
7. **0782A/B** ***Non** autem nox **tantum**, quia perturbare assolet, **sed etiam** ignis* —
   host is *tantum* on *nox*: "is to be called **not night only**… but also fire". Putting the
   negative on *vocanda est* would deny that tribulation is night at all, which the previous
   sentence has just asserted.
8. **0783C** ***Non solum** autem ista poena eos consecuta est visibilis, **sed etiam**…* —
   host is *solum*: "**not only** did this visible punishment follow them, but also…".
9. **0784A** ***non solum** de tam excellenti dono gratulatur, **sed insuper**…* — host is
   *solum*.

⚑ Also checked and found to have **no** quantifier in scope, so the verb is the host:
0780C *bono servi **non eget*** — *solus* stands in the previous clause (*solus ille veraciter
Dominus sit*) and does **not** govern the negation; "he alone is truly Lord who has no need"
is right, and "he is not alone in needing" would be the 8990 @0614B error.

### 4.7 · Italic spans — three places where English had to draw a roman word inside a span

Every italic span in the Latin is an italic span in the English, in the same order, and the
counts are 1:1 band by band. Three spans could not be reproduced without absorbing a possessive
that Migne sets in roman, because English cannot separate the possessive from its noun:
- **0779D** *locutus est in corde* suo → *hath spoken in his heart* (Migne's *suo* is roman).
- **0783C** *in vita* ipsorum → *in their life* (Migne's *ipsorum* is roman).
- **0780D** *miras fecit* Pater *voluntates meas* — kept as **two** spans with "the Father"
  roman between them, matching the plate exactly; noted only because the temptation was to
  merge them.
Conversely, four Latin single spans were nearly split into two by English word order and were
kept whole: *quid fecit* (0774C), *Multiplicantur* + *filii hominum* (0776C, kept as **two** as
Migne prints), *Perficiatur* (0782B), *statuerunt declinare* (0783A), *me adimplebis.
Delectatio* (0781D — one span crossing a full stop, reproduced crossing the full stop).

### 4.8 · Real words that read oddly — rendered as printed, no `[cj:]`, per addendum A

1. **0775A *crebra apertio atque **operatio**;*** — the figure is God's **eyelids**, which need
   opening and *shutting*; *opertio* ("covering") would complete it and *operatio* ("working")
   does not. But *operatio* is a perfectly good Latin word that **renders in place**, so
   Pattern 12 has nothing to wrap and Pattern 7 governs: rendered "**this frequent opening and
   working in the holy books**". `[cj:]` declined — the English is odd, not false; it does not
   assert anything the author is arguing against, which is 18a's bar, and 18a's census is
   closed. The conjecture is recorded here and nowhere else, by design.
2. **0779A *et servire creaturae **quam** Creatori*** — a *quam* with no comparative anywhere to
   complete it (cf. Rom 1:25, *servierunt creaturae **potius** quam Creatori*). ⚠ **This is the
   11535 @1231B shape** — a correlative whose answering member is printed and whose own member
   is not — and that shape is admitted to Pattern 18. **Declined anyway**, and the reason is the
   bar rather than the class: nothing false is asserted. My English writes "to serve the
   creature **rather than** the Creator", which supplies in English the comparative force
   *potius* would carry, and every reader takes exactly the sense Migne intends. 11535's *quam*
   earned its marker because the sentence would not otherwise resolve; this one resolves on
   sight.
3. **0777A *Tribulantes sunt **diaboli** et angeli ejus*** — *diaboli* is nominative plural
   ("devils") while *ejus* is singular and wants a singular *diabolus*. Rendered "the **devils**
   and his angels", following the printed form. No marker: a number slip with a singular
   possessive is 18a's declined class (person/number anomalies that merely fail to construe),
   and Job's tempters are plural in the gloss's own argument either way.
4. **0782D** *sic per Christi humanitatem divinitas judicii, discernens inter justos et
   peccatores.* — **a sentence with no finite verb at all.** Migne's ellipsis; rendered
   elliptically ("so through the humanity of Christ the divinity of judgment, discerning
   between the just and sinners"), nothing supplied.
5. **0782A** *Ex illuminatione notitiae tuae verum judicem.* — likewise verbless unless
   *judicem* is read as the 1st-sg. present subjunctive of *judico*. ⚠ **Two readings.** I took
   the subjunctive — "**may I judge what is true**" — because the paragraph is a first-person
   prayer throughout and a bare accusative "a true judge" has nothing to depend on. The rival
   ("[let there come forth] a true judge", supplying the lemma's *prodeat*) is defensible and is
   why this is logged rather than settled in the text.
6. **0782A** *adjuncta Ecclesia, quae corpus, ejus est.* — Migne's comma falls between *corpus*
   and *ejus*, inside the predicate. English cannot carry a comma there; rendered "which is his
   body". Recorded because it is a deleted mark, and Pattern 8 forbids deleting marks silently
   even where English has no slot for one.

### 4.9 · Rendering decisions fixed for the range (drift control)

One voice within the work, per the merge rule. Terms fixed at first occurrence and held:
*conventicula* = **assemblies** · *claritas* = **brightness** (never "glory", which is reserved
for *gloria*) · *framea* = **sword** · *insipiens* = **the fool** · *malignus* = **the malignant
one** · *saeculum* = **the world** (and *saecula* = the ages) · *conversatio* = **conversation**
· *inopes* = **the needy** and *pauperes* = **the poor**, never interchanged, because the gloss
at 0776A distinguishes them (*inopia et paupertate*) · *tabernaculum* = **tabernacle** and *mons*
= **mountain**, held apart because Psalm 14's whole gloss turns on the contrast. ⚠ Chunks
0000–0009 and 0014–0017 are with other agents; these are offered to the merge step, not imposed.

Pattern 17: every second person in this range was checked for number. The plural *vos* of
Mt 11:28 (0778C), Jo 8:44 (0783B) and the *confudistis / contempsistis / vidistis* of 0779A take
**you**; the singular *tu … es … eges* of Ps 15:2 (0780C), the *ieris / eris* of the robber
parable (0779D) and every address to God take **thou**. No archaism is used as reverence.

---

## §5 · WHAT THIS BATCH DID NOT SETTLE

- **The tei-patch for §0 is not written and the work is not re-chunked.** Nine sites across four
  pages; the remaining fourteen chunks of this work have not been collated against the plate at
  all, and on this rate they will carry more. **A full-work plate collation is cheap here** —
  the PDF is on disk, the page map is confirmed, and cols 0751–0794 are 22 pages.
- ~~**§1.1 (*mentem*/*montem*) ships reading from our Latin twin, not from Migne**, and will keep
  doing so until that patch lands. It is the only place in these four chunks where the English
  is knowingly faithful to the transcription rather than to the plate.~~ ✅ **CLOSED 2026-08-28:
  the patch landed, the twin prints *mentem*, and the English now reads "one *mind* do I hold".
  Nothing in these four chunks is now knowingly faithful to the transcription over the plate.**
- **§3.1, §3.3, §3.6, §4.8.5 and §4.5's third item each name a rival reading that also
  construes.** None is marked; all are argued here so a blind reader arrives at them already
  knowing what was weighed.

---

## PLATE COLLATION — English brought to the corrected plate

**2026-08-28.** All 22 pages read at Migne's plate; 61 TEI patches applied. **No marker was
withdrawn in chunks 0010–0013** — but the one open compromise in this file is now closed.

- **0774B · *mentem* — §1.1 RESOLVED.** The patch this file asked for landed. The Latin twin now
  prints *Unum enim **mentem** teneo*, and the English reads **"For one *mind* do I hold, in
  which *I put my trust*"** where it read "one *mountain*". See the resolution box at the head of
  §1.1 for why **no marker was placed** — neither the `[sic: *mentem*]` §1.1 proposed (Pattern 12
  excludes a real word that is merely wrong, which is exactly the ground on which four other
  markers in this work were just withdrawn) nor a `[cj:]` (it would propose *montem*,
  "mountain", beside an English word that now says "mind"). **Migne's gender mismatch — *Unum …
  mentem*, and *in quo* two words later — is recorded here and rendered as printed.**
- **0778D · Jo 11:48 — `[var:]` DECLINED, and the existing one stands.** The collation restored
  Migne's ***dimitimus*** (single *t*) where CC printed *dimittimus*. That is not a divergent
  reading — it is a dropped sort in a word that is not otherwise a Latin form — so it takes no
  `[var:]` and, per the standing out-of-scope ruling, no `[sic:]` either. ⚑ The **real**
  divergence in this same lemma (*et tollent **nobis et gentem et locum*** for Clem. *et tollent
  nostrum locum, et gentem*) was already caught and already carries its `[var:]` in `0011.md`;
  the plate confirms it.
