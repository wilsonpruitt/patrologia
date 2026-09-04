# Cruces — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem**, chunks 0015–0019

Stint 4 of six. Cols **0394C–0407A** (chunk `colContext` bands), covering CAPUT IX–XIII: the
man born blind, the good shepherd, the *encaenia*, the raising of Lazarus, the entry into
Jerusalem, and the supper and washing of feet.

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Attribution.** I treat my own guess about whose a defect is as carrying **no evidential
weight** (brief §2; measured wrong 9 times in 14 on 9004). Concretely:

- A **real, well-formed Latin word that merely reads oddly** is rendered as printed, logged in
  §(d), and takes **no marker** — however good the internal argument. Where the argument is
  good I say so and say that it settles nothing.
- A **non-word or broken run** gets the same treatment: carried, logged, **not marked**. I fired
  **zero `[sic:]`** in this range. Two non-words are logged (0399B *impieretur*, 0400C *Sea*).
- A **`[var:]` I can cite** from `sources/vulgate/clementine-flat.txt` by book chapter:verse I
  fired — **three** of them, and every one rests on a **multi-word or lexical** divergence
  inside a quoted clause, never on a single letter.
- I fired **zero `[cj:]`**, **zero `[d:]`**, **zero `[ed:]`**.

**2. The `[var:]` bar I set, and why it is narrower than "any divergence from the Clementine."**
The class split says a quoted clause is evidence about Migne and a single word is suspicion of
our file. I read that as a statement about **what a letter-swap can manufacture**, not about
span length — so my test was: *could an OCR have produced this?* A different verb (*Redi* for
*Vade*), an inserted conjunction that re-shapes a sentence (*nisi Unigenitus*), a clause pulled
in from another verse — no. An inflection (*est* for *es*), a vowel (*quid* for *quod*), a
fusion (*Romam* for *Romani*), word order, an ae/e spelling — yes, and those are all declined
below with the reason given per span. ⛔ The hardest decline is **0395D Jo 9:34 *natus est
totus***, which is a genuine sense change (third person for second) inside a quoted clause and
would have been my fourth marker: it is declined because CLAUDE.md rule 8a records the
digitization **manufacturing** exactly this shape at 9003 (`judicabit`→`judicavit`), and a
Vulgate collation cannot see that class by construction.

**3. Negation and mechanism 5.** Every printed `non`/`nec`/`nisi`/`nullus`/`nihil` is carried,
including where carrying it leaves the sentence at odds with itself (0396D, 0398C). Where a
pronoun or relative could attach to two nouns I checked case and gender rather than sense; the
sites where I had to choose are logged in §(d) with the reading the English actually carries,
and I have re-read each English clause to confirm it carries the reading the crux claims.

**4. Inherited conventions (brief §1).** Applied from the first line. **No exception was
forced by John in this range**; the axes are exercised as follows:

| axis | in my range |
|---|---|
| `turba` / `multitudo` | **neither noun occurs**. Nothing to reconcile. |
| `daemonium` / `diabolus` | *daemones* 0398C → **demons**; *diabolus* 0395B, 0397B, 0402A → **devil**. No *satanas* as a common noun (*Satana* at 0399C is the vocative proper name inside a quotation). |
| `natio` / `gentes` | ***natio* does not occur.** *gentibus / gentium / gentili* 6× → **Gentiles**, all inside the Judaei/gentes typology (0396B, 0397D, 0402B, 0402C ×2, 0403? none). ⚑ The singular *gentem suam* at 0401A, of the Jewish people, → **"their own nation"**, Mark's third class. |
| `mysterium` / `sacramentum` | *mysterii* 0405B → **mystery**; *sacramentis* 0401D, *sacramentum* 0406B, *sacramento* 0406C → **sacrament**. 1:1. |
| gloss voice | *dicit / ait / subdit / dixit* → **says / adds / said**, never *saith*. Every `-eth` form on the page is inside an italic lemma; the italic-membership test was run on each. |

**5. Other standing rules.** Pattern 17: *tu Juda* (0401D) and *Tu quid dicis* (0394C) are
singular → **thou**; *vos / habetis / creditis* → **you**. Pattern 8b fired once, at VERS. 7
(0394D–0395A), where Migne closes an indirect question with `?` — rendered "It is asked: how
did he heal…?" Pattern 8: Migne's marks stand, including the missing terminal stop on the
0405D lemma and the medial commas at 0396C and 0405D. Guillemets: **Migne prints none in this
range and none were supplied**; three straight-quote pairs are ours (0397D "of mine", 0401C
"faithful", 0407A "whither I go"). **Em-dashes: zero.**

**6. `*usque ad*` → "down to"** (7 occurrences). ⚠ **Flag for the merge, not a finding:** the
work is already inconsistent on this above my range — chunk 0001 renders it **"as far as"**,
chunk 0005 **"down to"**. I follow 0005. One of the three should be swept at merge.

---

## (b) SPAN COUNT — RUN, AND HERE IS THE RESULT

`data/briefs/8999-lemmata-0015.txt` declares **199 spans** for chunks 0015–0019.

**I counted the `*…*` spans in my own Latin: 25 + 47 + 40 + 50 + 37 = 199. The totals agree
exactly, chunk by chunk.** No head-of-range span is missing and no tail span belongs to
another stint.

Two secondary checks, both clean: **column anchors** 6 / 12 / 9 / 13 / 10 and **`[n:]` notes**
1 / 7 / 5 / 4 / 5 reproduce the Latin 1:1, in order and in place. `node scripts/verify-english.mjs 8999`
reports *verify OK: 28 chunks, columns/notes/sections aligned*.

⚠ **One caveat on the brief's own column labels.** The brief attributes most spans to the
chunk's `colContext` band; I attribute each to the last anchor actually preceding it in the
Latin, so the band letters in my list below are finer-grained than the brief's and will not
match it line for line. The **order and the count** match exactly, which is what the check is for.

⚠ **And one substantive finding about the pre-scan itself:** at 0401A the span
`Sed ut filios Dei qui erant dispersi congregare.` is marked **✓ Clementine verbatim**, and a
literal grep of it returns **0 hits** (Jo 11:52 reads *congregaret in unum*). So a ✓ in this
file is not merely "not clearance" — at least one of them **is not a verbatim match at all**.
Walk the ✓ lines as carefully as the ⚠ ones.

---

## (c) THE LEMMA DIVERGENCE LIST — all 199 spans, in order

`=` means: read word by word against the Clementine at **the verse actually being glossed**, and
it conforms (or is a bare incipit/fragment of it, or an `*usque ad*` abridgment marker, which is
apparatus and not scripture). Everything else carries its verdict and, where declined, the reason.

**Markers fired: 3 `[var:]` — 0397C ×2, 0399C ×1. Those three columns need the plate read
before ship (`plate-gate.mjs`). No other marker of any kind was fired in this range.**

#### Chunk 0015 — 25 spans

1. [0394C] `Et praeteriens.` — =
2. [0394C] `Caecum.` — =
3. [0394D] `Neque hic peccavit.` — =
4. [0394D] `ut manifestentur opera Dei in illo.` — =
5. [0394D] `Me oportet operari.` — =
6. [0394D] `Quandiu sum in mundo.` — ⚠ **declined.** Vulg. Jo 9:5 *quamdiu*. Orthographic only, and *quandiu* is this work's own spelling elsewhere (0403C, 0403D). Pattern 9, no marker.
7. [0395A] `Et fecit lutum.` — =
8. [0395A] `Unxit oculos.` — = — but the words stand at **Jo 9:11** (*et unxit oculos meos*), not at 9:6, under which Migne prints them as a second lemma. The recension's `VERS.` addresses cover a span of verses; not a divergence.
9. [0395A] `Et venit videns,` — =
10. [0395B] `Non est hic homo a Deo,` — =
11. [0395B] `Tu quid dicis,` — =
12. [0395B] `Ille autem dixit,` — =
13. [0395B] `Donec vocaverunt,` — =
14. [0395B] `Da gloriam Deo: Nos scimus,` — =
15. [0395C] `Quid iterum,` — ⚠ **declined.** Vulg. Jo 9:27 *quod iterum vultis audire*. One word, and *quod*→*quid* is an o/i substitution of exactly the class an OCR manufactures. The gloss (*Stomachatur contra duritiam eorum*) reads equally on either. Rendered as printed, "Why again". No marker.
16. [0395C] `Maledixerunt ergo ei.` — =
17. [0395C] `Hunc autem nescimus.` — =
18. [0395C] `Hunc scimus:` — = at **Jo 7:27** (*Sed hunc scimus unde sit*), not at 9:29; the gloss's *Superius dixerant* is correct.
19. [0395C] `Nisi esset hic a Deo,` — =
20. [0395D] `In peccatis natus est totus.` — ⚠ **declined — the range's most tempting `[var:]`.** Vulg. Jo 9:34 *In peccatis natus **es** totus* (2nd person); Migne prints *est*. **Reason declined:** a one-letter inflectional difference inside a quoted clause is precisely the class CLAUDE.md rule 8a records the digitization *manufacturing* — 9003's `judicabit`→`judicavit`, which a Vulgate collation then dutifully "found" — and no collation can catch that class. A `[var:]` here would be a public claim against Migne resting on a letter. Rendered as printed ("He was born wholly in sins"); logged for the plate.
21. [0395D] `Et tu doces nos? Et ejecerunt eum foras.` — =
22. [0395D] `Quis est,` — =
23. [0395D] `Et vidisti.` — =
24. [0396A] `Ut qui non vident.` — =
25. [0396A] `Ego non judico quemquam.` — = at **Jo 8:15**, adduced as a cross-reference under VERS. 39.

#### Chunk 0016 — 47 spans

1. [0396A] `Amen, amen dico vobis.` — =
2. [0396B] `Per ostium.` — =
3. [0396B] `Fur.` — =
4. [0396B] `Pastor est ovium.` — =
5. [0396C] `Huic ostiarius aperit.` — =
6. [0396C] `Et oves,` — =
7. [0396C] `usque ad` — =
8. [0396D] `Illi autem non cognoverunt.` — =
9. [0396D] `Omnes,` — =
10. [0397A] `Si quis.` — =
11. [0397A] `Et ingredietur.` — =
12. [0397A] `Ut vitam habeant.` — =
13. [0397A] `Nisi ut furetur,` — =
14. [0397A] `Mercenarius autem,` — =
15. [0397B] `Et lupus rapit.` — =
16. [0397B] `Quia mercenarius est,` — =
17. [0397B] `Ego sum pastor.` — =
18. [0397C] `Ego sum pastor bonus et animam pono pro ovibus.` — ⚠ **`[var:]` FIRED.** Vulg. Jo 10:11 *Ego sum pastor bonus. **Bonus pastor animam suam dat pro ovibus suis.*** Migne's span joins 10:11a to a form of **10:15** (*et animam meam pono pro ovibus meis*), possessives dropped. Multi-word and structural: a letter-swap cannot manufacture it, and the gloss that follows (*Quod non ipse unus fecit*) expounds the joined clause.
19. [0397C] `Et ego.` — =
20. [0397C] `Deum nemo vidit unquam, nisi Unigenitus qui est in sinu Patris, ipse enarraverit [n: (Matth. XI)]` — ⚠ **`[var:]` FIRED.** Vulg. **Jo 1:18** *Deum nemo vidit umquam: **unigenitus Filius**, qui est in sinu Patris, ipse **enarravit**.* Migne prints *nisi Unigenitus … ipse **enarraverit***: a conjunction inserted, *Filius* dropped, the verb out of the perfect indicative. That re-shapes the sentence, not a letter of it. (Migne's note reads `(Matth. XI)` on a John quotation; reproduced verbatim per §2, not queried.)
21. [0397C] `nemo novit Filium nisi Pater, neque Patrem quis novit nisi Filius, et cui Filius voluerit revelare [n: (Matth. XI; Luc. X)]` — ⚠ **declined.** Vulg. Mt 11:27 *et cui **voluerit Filius** revelare*; Migne *et cui **Filius voluerit** revelare*. Word order only. Pattern 14's bar is a change of sense, and there is none.
22. [0397C] `Et animam meam pono.` — =
23. [0397C] `Pro ovibus.` — =
24. [0397D] `Oportet me.` — =
25. [0397D] `Et vocem meam.` — =
26. [0397D] `Quia ego,` — =
27. [0397D] `usque ad` — =
28. [0397D] `Facta sunt autem encaenia,` — =
29. [0398A] `In porticu.` — =
30. [0398A] `Circumdederunt ergo eum Judaei.` — =
31. [0398A] `Quousque animam nostram tollis?` — = verbatim Jo 10:24 — ⚑ **but a 7a″ near-miss worth recording.** The familiar English ("hold our soul in suspense") is not what *tollis* says, and the gloss turns on *tollere animas*. Rendered "take away".
32. [0398A] `Si tu es Christus, dic nobis palam.` — =
33. [0398B] `Et nemo potest rapere de manu Patris mei.` — =
34. [0398B] `Ego et Pater unum sumus.` — =
35. [0398B] `Sustulerunt ergo lapides.` — =
36. [0398C] `Facis teipsum.` — =
37. [0398C] `Ego et Pater unum sumus,` — =
38. [0398C] `Nonne scriptum est,` — =
39. [0398C] `Quia ego.` — =
40. [0398C] `Ego dixi: Dii` — =
41. [0398C] `Si illos dixit deos.` — =
42. [0398D] `Operibus credite.` — =
43. [0398D] `Quia in me est Pater.` — ⚠ **declined.** Vulg. Jo 10:38 *quia **Pater in me est***; Migne *quia in me est Pater*. Word order only.
44. [0398D] `Ego et Pater unum sumus.` — =
45. [0398D] `qui videt me, videt et Patrem;` — =
46. [0398D] `Et multi venerunt.` — =
47. [0398D] `Quia Joannes,` — =

#### Chunk 0017 — 40 spans

1. [0399A] `Erat autem.` — =
2. [0399A] `Languens Lazarus.` — =
3. [0399A] `Ecce quem amas,` — =
4. [0399B] `Pro gloria Dei,` — =
5. [0399B] `Diligebat.` — =
6. [0399B] `Duobus diebus.` — =
7. [0399B] `Eamus in Judaeam.` — =
8. [0399B] `Dicunt ei discipuli.` — =
9. [0399C] `Absit a te, Domine,` — = Mt 16:22 (the italic stops at *Domine,*). ⚑ The roman continuation Migne sets after it, *non fiet tibi istud*, diverges from the Vulgate's *non erit tibi hoc* — outside the italic, so outside 7a″. Logged, no marker.
10. [0399C] `Beatus es, Simon Barjona, quia Pater revelavit tibi,` — ⚠ **declined.** Vulg. Mt 16:17 *quia **caro et sanguis non revelavit tibi, sed** Pater meus, qui in caelis est.* Migne's span is an **abridgment**, not an altered reading: every word retained agrees with the Vulgate and the retained clause's sense is unchanged. ⚑ The dropped material contains a *non*, but no negation is dropped from anything the English renders — the span is shorter, not negated differently.
11. [0399C] `Redi post me, Satana, quia sapis non quae Dei, sed quae hominis sunt.` — ⚠ **`[var:]` FIRED.** Vulg. Mt 16:23 ***Vade** post me Satana, **scandalum es mihi**: quia **non sapis ea quae Dei sunt, sed ea quae hominum**.* Migne prints ***Redi** post me* — a different verb, not a letter-swap — and omits *scandalum es mihi*. (The *non* is displaced but not lost, and *hominis* for *hominum* is a single letter; the marker rests on *Redi*, which is what makes it a claim about wording rather than about type.)
12. [0399C] `Nonne duodecim sunt horae. [n: (HIER.)]` — =
13. [0399D] `usque ad` — =
14. [0399D] `Ut credatis.` — =
15. [0399D] `Et invenit. [n: (AUG.)]` — =
16. [0399D] `usque ad` — =
17. [0399D] `Sed et nunc scio.` — =
18. [0399D] `Etiam si mortuus fuerit.` — =
19. [0400A] `Vivet.` — =
20. [0400A] `Silentio.` — =
21. [0400A] `Et vocat te.` — =
22. [0400A] `Secuti sunt.` — =
23. [0400B] `Infremuit spiritu.` — =
24. [0400B] `Ubi posuistis eum?` — =
25. [0400B] `Non novi vos [n: (Matth. VII)]` — ⚠ **declined.** Vulg. Mt 7:23 *numquam novi vos*; cf. Mt 25:12 *nescio vos*. A loose citation of a proverbially quoted clause; sense unchanged.
26. [0400B] `Ubi est Adam? [n: (Gen. III.)]` — ⚠ **declined.** Gen 3:9 reads *Ubi **es**?* Migne gives the traditional third-person paraphrase. The gloss's point — God asking as though he did not know — is unaffected either way.
27. [0400C] `Jesus ergo,` — =
28. [0400C] `Erat autem spelunca.` — =
29. [0400C] `Domine, jam fetet.` — ⚠ **declined.** Vulg. Jo 11:39 *foetet*. ae/e orthography, Pattern 9.
30. [0400C] `Sea propter populum,` — ⚠ **NON-WORD — logged, NO MARKER.** Migne's span opens *Sea* where Jo 11:42 reads ***sed** propter populum*. Carried untranslated inside the italic lemma (nested italics are not expressible, Pattern 10). The conjecture *Sed* is certain in sense and **unattributable in origin**: d→a is an ordinary OCR shape and an ordinary broken sort alike. The span governs no translated clause, so nothing is quarantined (7a⁗ qq. 1–3 all pass).
31. [0400D] `Voce magna.` — =
32. [0400D] `Et statim prodiit.` — =
33. [0400D] `Solvite eum.` — =
34. [0400D] `Credent in eum. Et venient Romani.` — =
35. [0401A] `Et venient Romam.` — ⚠ **declined, and see §d.** Vulg. Jo 11:48 *et venient **Romani***, which Migne's own lemma four lines above prints correctly. *Romam* is a real Latin word (acc. of *Roma*), and *ni*→*m* is a textbook OCR fusion. ⛔ "The correct form prints a few lines earlier" is the reasoning §2 names as a **failed** attribution test: it corroborates that an error exists and says nothing about whose. Rendered as printed. No marker.
36. [0401A] `Hoc a semetipso. [n: (AUG.)]` — = fragment of Jo 11:51 (*Hoc **autem** a semetipso non dixit*); the lemma incipit drops *autem*.
37. [0401A] `usque ad` — =
38. [0401A] `Pro gente.` — =
39. [0401A] `Sed ut filios Dei qui erant dispersi congregare.` — ⚠ **declined — and the brief's ✓ on this span does not reproduce.** Vulg. Jo 11:52 *sed ut filios Dei, qui erant dispersi, **congregaret in unum***; Migne has the infinitive *congregare* and drops *in unum*. A literal grep of the span against `clementine-flat.txt` returns **0 hits**, so this ✓ is a pre-scan artifact — reported per the brief's own warning that ✓ is not clearance. Declined because the span is a truncated lemma and an abridgment cannot be told from a transcription slip.
40. [0401B] `Proximum autem.` — =

#### Chunk 0018 — 50 spans

1. [0401B] `Venit in Bethaniam.` — ⚠ **declined.** Vulg. Jo 12:1 *venit Bethaniam* (no preposition). ⚑ Migne's own gloss on the next line prints *prius **Bethaniam venit***, without the preposition — the two forms stand five words apart, which corroborates that they differ and says nothing as to whose the *in* is. One particle. No marker.
2. [0401B] `Maria ergo.` — =
3. [0401B] `Dixit ergo unus.` — =
4. [0401C] `Non quia,` — =
5. [0401C] `Loculos habens,` — =
6. [0401C] `Sinite illam.` — =
7. [0401D] `praevenit ungere corpus meum in sepulturam.` — =
8. [0401D] `Me autem non semper habetis.` — =
9. [0401D] `Et venerunt.` — =
10. [0401D] `Cogitaverunt.` — =
11. [0402A] `In crastinum.` — =
12. [0402A] `Clamabant. [n: (AUG.)]` — =
13. [0402A] `Rex Israel.` — =
14. [0402A] `Noli timere, filia.` — =
15. [0402B] `Ecce totus.` — ⚠ **declined.** Vulg. Jo 12:19 *ecce **mundus** totus post eum abiit*. An incipit taking the first and third words; the recension abridges lemmata this way throughout.
16. [0402B] `Hi ergo accesserunt.` — =
17. [0402B] `Jesus autem.` — =
18. [0402B] `Benedictus qui venit in nomine Domini;` — =
19. [0402B] `Venit hora ut clarificetur.` — =
20. [0402C] `Amen, amen dico vobis,` — =
21. [0402C] `Qui amat animam suam,` — =
22. [0402C] `Nisi granum frumenti. [n: (AUG.)]` — =
23. [0402C] `Qui amat. [n: (AUG.)]` — =
24. [0402D] `Qui odit animam,` — =
25. [0402D] `Si quis mihi ministrat.` — =
26. [0402D] `si quis mihi ministrat.` — =
27. [0402D] `Nunc anima mea turbata est. Et quid dicam?` — =
28. [0403A] `Pater, clarifica.` — =
29. [0403A] `Non propter me vox.` — ⚠ **declined.** Vulg. Jo 12:30 *Non propter me **haec** vox **venit***. Lemma abridgment.
30. [0403A] `Nunc judicium est.` — =
31. [0403B] `Ejicietur.` — =
32. [0403B] `Et quomodo tu,` — =
33. [0403B] `si exaltatus fuerit Filius hominis. Quis est iste Filius hominis?` — ⚠ **declined.** Vulg. Jo 12:34 *Oportet exaltari Filium hominis?*; Migne's first clause instead echoes **Jo 12:32** *si exaltatus fuero a terra*. The gloss argues that the crowd remembered his habitual self-designation rather than this sentence, and that argument stands on either wording.
34. [0403B] `Ambulate.` — =
35. [0403C] `Nescit quo vadat.` — =
36. [0403C] `Dum lucem habetis.` — =
37. [0403C] `Ab eis.` — =
38. [0403C] `Ut sermo Isaiae impleretur.` — ⚠ **declined.** Vulg. Jo 12:38 *ut sermo Isaiae **prophetae** impleretur*. One word dropped from a lemma incipit.
39. [0403D] `Non poterant. [n: (AUG.)]` — =
40. [0403D] `Gloriam Dei.` — =
41. [0403D] `Jesus.` — =
42. [0404A] `Qui credit in me.` — =
43. [0404A] `Et qui me videt, videt et eum qui,` — ⚠ **declined.** Vulg. Jo 12:45 *Et qui **videt me**, videt eum qui misit me*; Migne *Et qui **me videt**, videt **et** eum qui*. Word order plus one added *et* — and *videt **et** Patrem* is genuine Vulgate at Jo 14:9, which Migne quotes at 0398D, so contamination in either direction cannot be told apart.
44. [0404A] `Qui videt me.` — =
45. [0404A] `qui credit in me, non credit in me, sed in eum qui misit me,` — =
46. [0404B] `Ego lux.` — =
47. [0404B] `Sermo quem locutus sum.` — =
48. [0404B] `Mandatum.` — =
49. [0404C] `Et scio.` — =
50. [0404C] `Quae ergo ego loquor sicut dixit mihi Pater, sic loquor.` — =

#### Chunk 0019 — 37 spans

1. [0404C] `Ut transeat.` — =
2. [0404D] `In finem dilexit.` — =
3. [0404D] `Et coena facta.` — =
4. [0405A] `accepit vestimenta,` — =
5. [0405A] `Surgit a coena.` — =
6. [0405A] `Et ponit vestimenta.` — =
7. [0405A] `Deinde mittit.` — =
8. [0405B] `Dicit ei Petrus,` — =
9. [0405B] `Respondit.` — =
10. [0405B] `Dicit ei Simon.` — =
11. [0405B] `Qui lotus.` — =
12. [0405B] `Qui lotus.` — =
13. [0405C] `Et cum recubuisset, iterum dixit eis: Scitis quid fecerim vobis? Vos vocatis me,` — ⚠ **declined — the divergence is a COMMA.** Vulg. Jo 13:12 *cum recubuisset **iterum**, dixit eis*; Migne *cum recubuisset**,** iterum dixit eis*, which moves *iterum* from the reclining to the saying. Punctuation follows the plate (Pattern 8): rendered "when he had sat down, he said to them **again**". Migne's marks are his editors' work, and recording them is the point. No marker.
14. [0405D] `Non de omnibus.` — = Jo 13:18. ⚑ Migne's roman gloss beside it reads *qui manducat **meum** panem* where Jo 13:18 has *mecum panem* — outside the italic, so outside 7a″. Logged, no marker.
15. [0405D] `levabit contra me calcaneum suum,` — =
16. [0405D] `Amodo dico vobis.` — =
17. [0405D] `Amen, amen dico vobis.` — =
18. [0406A] `Cum haec dixisset Jesus` — = Jo 13:21 — ⚑ the span carries **no terminal stop** in Migne, and none was supplied (Pattern 8).
19. [0406A] `Et cum intinxisset panem.` — =
20. [0406B] `Dedit Judae Simonis Scariothis,` — ⚠ **declined.** Vulg. Jo 13:26 *Judae Simonis **Iscariotae***. *Scariothis* is a widely attested medieval form of the name; Pattern 9 — translate normally, no italics, no marker.
21. [0406B] `Quod facis.` — =
22. [0406B] `Quia loculos habebat.` — =
23. [0406C] `Erat autem.` — =
24. [0406C] `Nunc clarificatus est Filius hominis. [n: (AUG.)]` — =
25. [0406C] `Non estis mundi omnes,` — =
26. [0406C] `usque ad` — =
27. [0406C] `Filioli. [n: (ID.)]` — =
28. [0406C] `usque ad` — =
29. [0406C] `Quo ego vado vos non potestis venire.` — =
30. [0406D] `Mandatum novum do. [n: (AUG.)]` — =
31. [0406D] `Diliges proximum tuum sicut teipsum,` — =
32. [0406D] `usque ad` — =
33. [0406D] `Ut diligatis invicem sicut dilexi vos.` — =
34. [0406D] `Domine, quo,` — =
35. [0407A] `Sequeris autem postea.` — =
36. [0407A] `Animam meam.` — =
37. [0407A] `Non cantabit gallus,` — =
---

## (d) THIS RANGE'S OWN CRUCES, BY COLUMN

Nothing below is marked in the running text unless it says so. Where I name a conjecture I am
naming a conjecture, not an attribution.

### 0394D — *vitium propter naturam inolevit*

Real, well-formed words that read oddly: the idiom the sentence wants is *in naturam inolevit*,
"grew ingrained **into** nature," which is what makes the clause explain hereditary blindness.
*propter naturam* says "by reason of nature," which is close enough that the argument survives
and different enough to notice. Rendered as printed. **No marker; I do not know whose it is.**

### 0396A — VERS. 39: the antithesis of Jo 9:39 collapses, and the same gloss serves both halves

Migne prints: *Ut qui non vident. Id est, **qui se videre putant**, quaerunt ut videant, et qui
vident, id est, **qui se videre putant**, et medicum non quaerunt…*

The verse is an antithesis — *ut qui non vident videant, et qui vident caeci fiant* — and the
gloss glosses **both** of its halves with the identical phrase. The second occurrence is right
(*qui vident* = those who think they see); the first is glossing *qui non vident* with the
description of its opposite. As printed, the English says the same thing of both members.

⛔ **Not marked as dittography.** Pattern 11 governs a run the plate sets **twice adjacently**;
here the two copies are separated by a full clause each and each is syntactically at home. So
this is either an eye-skip in Migne's copy-text, a compositor's, or a loss in transcription, and
**I cannot tell which** — which is exactly why 11a's "mark the intrusive copy" cannot be applied:
under 11a I would have to identify an intrusion, and the first copy is not intruded matter, it is
a wrong gloss standing where a right one belongs. Rendered as printed; the broken antithesis
stays visible on the page, which is the evidence.

⚑ The same sentence has **no apodosis**: *caeci fiant* is never supplied, so the *et qui vident…*
member trails off into *et hoc est judicium*. Rendered elliptically, as printed. **Best plate
candidate in chunk 0015.**

### 0396D — the wolves persevere too: *sed in fine perseverant* twice

*Praedestinatae oves … in fine perseverant, e contra lupi ad tempus audiunt, sed in fine
perseverant.* The sheep's clause and the wolves' clause **end in the identical three words**, so
*e contra* ("on the contrary") contrasts nothing at all and the sentence asserts that the
reprobate persevere to the end. Every word is well formed. Conjecture: the wolves' verb wants a
negative, or *pereunt* / *deficiunt*. **Rendered as printed, no marker** — a plate read settles
whether Migne's page says this. ⭐ **This is the strongest single plate candidate in my whole
range**, and it is a *sense* defect with no lexical trace, so nothing mechanical will find it.

### 0396D–0397A — *Nec talis dicendus est mercenarius, ideo lupo veniente non resistit*

The *ideo* has no protasis, and Migne's comma after *mercenarius* leaves the two clauses merely
juxtaposed. It does not construe as printed. Rendered as closely as the printed words allow,
with the comma kept (Pattern 8). No conjecture I would put my name to.

### 0396C — *quia si aliud, praedicat, non audiunt oves*

Migne sets a comma **inside** the protasis, between *aliud* and *praedicat*. English word order
cannot carry a comma at that point without producing nonsense ("because if something else, he
preaches, the sheep do not hear"), so the English reads "because if he preaches something else,
the sheep do not hear." ⚠ **Recorded as a deliberate departure from Pattern 8's letter**: a
medial comma whose position has no English counterpart. Pattern 8's "render as printed and log
a crux where a printed mark makes the English genuinely unreadable" is the clause I am invoking.
Nothing is added or removed; only the comma's position is not reproducible.

### 0397A — *Unde post et abundantius habeat vitam et pascua inveniet*

Subjunctive and future indicative coordinated under one *et … et*. No English exponent for the
mismatch in a way that shows; rendered as printed ("and may have life more abundantly, and …
shall find pastures"). Pattern 9 family. No marker.

### 0399B — ***impieretur*: a non-word, carried, NOT marked**

*Ut quatriduum **impieretur**.* There is no such Latin verb; *impleretur* ("might be fulfilled")
is near-certain, and l→i is one of the commonest OCR shapes — **which is an argument that an
error exists and no argument at all about whose it is** (§2). **No `[sic:]` fired**, per the
brief.

⚠ **How it is rendered, and why the handling needed a decision.** The carried run was the
clause's **only predicate**, so 7a⁗ question 1 bites: quarantining it (or here, merely carrying
it) leaves the English verbless. Since no marker is available to hold the sense beside it, the
English reads:

> That the four days might *impieretur* [be fulfilled].

The printed run stands in italics, untranslated, per Pattern 7; the supplied sense sits in
**square brackets**, which is the corpus's existing convention for our own supplied English
(`[it]`, `[them]`), so nothing on the page claims the bracketed words are Migne's. **Flagged
for the merge** in case the plate read prefers to convert this to a `[sic:]` with the sense
beside it in the 7a⁗ form.

### 0400A — VERS. 28: *non sequeretur*, a singular where the paragraph needs a plural

*Quia si audissent Judaei eam vocatam fuisse a Jesu, **non sequeretur**, et ita **non viderent**
miraculum.* The very next verb is plural and the next sentence is *secuti sunt* — the paragraph
plainly means **the Jews** would not have followed. The printed verb is singular, and the only
singular subject available is Mary (*eam*), of whom the statement makes no sense.

**Rendered with the printed singular** ("she would not follow"), and **declined for `[cj:]`**
under Pattern 18a: a person/number anomaly that merely fails to construe stays declined, and the
English here does not assert something false so much as something incoherent, which 18a's own
examples (*suscepit* for *suscepi*) put outside the bar. No marker. ⚑ Logged as a mechanism-5
site because the *contextually easier reading is the plural* — which is precisely why I did not
take it.

### 0400C — ***Sea*: a non-word inside a lemma, carried, NOT marked**

Detailed in §(c). *Sea* for *sed* at Jo 11:42. Carried untranslated **inside** the italic span
(nested italics are not expressible, Pattern 10). Nothing translated stands under the missing
conjunction, so no force is quarantined.

### 0401A — ***Et venient Romam***, with *Romani* printed correctly four lines above

Migne's VERS. 48 lemma prints *Et venient **Romani*** (= Jo 11:48); the second lemma, in the
same column, prints *Et venient **Romam***. The gloss beside it is about the loss of place and
nation, and turns on neither.

⛔ **I decline to attribute this, and the reason is the interesting part.** *Romam* is a real
Latin word; *ni*→*m* is a textbook OCR fusion; and the correct form standing a few lines earlier
is **the exact reasoning §2 records as a failed attribution test on 9004** ("the correct form
prints eleven words later"). All three observations together establish that the two readings
differ and **nothing whatever** about which of Migne's type or Corpus Corporum's transcription
produced the second. Rendered as printed: "And they will come to Rome." **No marker.**

### 0401B — *hoc tantum Caiphas*

Elliptical; the verb is not printed. The English supplies it in square brackets, "this only did
Caiphas [say]", per the supplied-English convention. No marker.

### 0403B — *qui olim a paucis etsi extra tentetur, non laedit intus*

Does not construe: *a paucis* has no verb to govern it, and the passive *tentetur* has no
expressed subject in a clause whose sense wants an active ("though he tempt from without").
⛔ **I did not render *tentetur* actively** — that is Pattern 7a's mechanism 1, a word translated
as something other than what it means to rescue a sentence. The English reads "who of old by few,
even though he be tempted without, does not hurt within," which is as close as the printed words
allow and is visibly broken. No marker; no conjecture I would defend.

### 0404C — *ut est nata veritas **ex Pater***

*ex* governing a nominative. A real word in the wrong case — and **English has no exponent for
the case**, so "born of the Father" renders it in place and the defect is *invisible* in the
English. That is the shape Pattern 12's second test was written for (a defect that renders only
by hiding itself), and under the brief's rule it still takes **no marker**, because I cannot say
whether the *e* is Migne's sort or the transcription's. ⚑ **Named here explicitly as a marker
candidate for the plate read**, since it is the one site in my range where the English alone will
never show a reader that anything is wrong.

### 0405A — *Praetermisit altitudinem, suppositurus **ejus** humilitatem*

Mechanism 5. *ejus* can attach to **Christ** or to the *altitudinem* just named. I take it as
Christ's own lowliness, on the strength of the clause that follows in the same sentence — *cum
tam altus sic **se** humiliaverit* — and **the English carries that reading**: "being about to
place **his** lowliness beneath it." Recorded so that the choice is visible and reversible.

### 0399C, 0400B, 0405D — three quotations whose divergence sits OUTSIDE the italics

Migne quotes scripture in roman type within the gloss as well as in italic lemmata. Three of
those roman quotations diverge from the Clementine: *non fiet tibi istud* for Mt 16:22's *non
erit tibi hoc* (0399C); *Ubi est Adam?* for Gen 3:9's *Ubi es?* (0400B, though this one is
italic); and *qui manducat **meum** panem* for Jo 13:18's *mecum panem* (0405D). **None is a
lemma**, so none falls under 7a″ and none is marked. Logged because a later 7a″ pass that reads
only the italic spans will not see them, and *meum* for *mecum* is a one-letter change that
turns "eateth **with me**" into "eateth **my** bread" — a real difference of sense in a verse
about betrayal at table.

### Not reported, per brief §6

No column-band gap, no `Ibid.` antecedent, no `noteCount` mismatch, no Pattern 4 `[f:]` tail, no
Pattern 9 item is raised above as a defect. The `<LACUNA>` at 0416D is outside this range. No
bracketed *Forte* occurs in these five chunks.

---

## Summary of markers fired

| marker | count | columns |
|---|---|---|
| `[var: …]` | **3** | 0397C ×2 (Jo 10:11 conflation, Jo 1:18), 0399C ×1 (Mt 16:23 *Redi*) |
| `[sic: …]` | **0** | two non-words logged instead: 0399B *impieretur*, 0400C *Sea* |
| `[cj: …]` | **0** | 0400A *sequeretur* declined under 18a; 0404C *ex Pater* declined under §2 |
| `[d: …]` · `[ed: …]` | **0** | 0396A's doubled gloss declined under 11a (see above) |

**Plate-read debt created by this stint: three columns — 0397C and 0399C.** The seven sites
named above as candidates (0396A, 0396D, 0399B, 0400A, 0400C, 0401A, 0404C) carry **no** marker
and create no debt; they are handed to the plate read as questions, which is what the brief asks.
