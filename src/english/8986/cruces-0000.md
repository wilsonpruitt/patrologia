# Cruces — 8986 (*Glossa ordinaria, Epistola II ad Corinthios*), chunks 0000–0004

Range: PL 114, cols **0551A–0559C**. Anselmus Laudunensis et schola (Migne: Walafrid Strabo).
Chunks 0005–0009 are covered by a second agent in its own file; nothing here touches that range.

Conventions applied without re-derivation: `GLOSSA-NT-AGENT-BRIEF.md` §"The Glossa conventions"
(1 `VERS. n.--` verbatim · 2 lemma Englished · 3 fragment rendered as the phrase it stands for ·
4 sigla pass through as `[n:]`), `translation-style.md` 7, 7a, 7a″, 7a⁗, 8, 8b, 9, 10, 12, 14, 15,
17, 18. Format model: `src/english/8968/` (Ruth); register anchor `src/english/9741/0000.md`.

---

## 0. Markers fired — 3, all `[var:]`

| chunk | col | marker | why it cleared the bar |
|---|---|---|---|
| 0001 | 0554A | *Caupones tui vino aquam miscent.* → `[var: Vulg. Is. I, 22 …]` | Every content word differs from the Clementine (*vinum tuum mistum est aqua*). It **changes what the sentence asserts**: the Clementine states a condition of the wine, Migne's form names **agents** who mix it — and the agents are the whole point of the gloss (*Hic pseudoapostolos tangit, qui corrupta doctrina veritatem violabant*). Migne's form is the LXX/Old-Latin (οἱ κάπηλοί σου μίσγουσι τὸν οἶνον ὕδατι). Not an OCR-manufacturable shape. |
| 0004 | 0559C | *Maledictus omnis qui pendet in ligno* `[n: (Deut. XXI)]` → `[var: …]` | The locator note names Deut. XXI, and Clementine Deut 21:23 reads *maledictus **a Deo est** qui pendet in ligno* — no *omnis*. Migne's form is Gal 3:13 verbatim. Material: the gloss's next sentence **expounds *omnis* by name** (*Quid est quod dicit, omnis?*), a word the cited locator does not contain. |
| 0004 | 0559C | *terra es, in terram ibis* `[n: (Gen. III)]` → `[var: …]` | Clementine Gen 3:19 reads *pulvis es et in pulverem reverteris*. Two of the three content words differ (*terra*/*pulvis*, *ibis*/*reverteris*), and *reverteris* asserts return to an origin where *ibis* asserts only going. An Old-Latin form; not producible by transcription error. |

**No `[sic:]`, `[d:]`, `[ed:]`, `[cj:]`, `[nt:]` fired.** Reasoning for the two candidates that
would have taken one is in §3.

---

## 1. Lemma collation against `sources/vulgate/clementine-flat.txt` (7a″)

Every lemma named in the launch message was grepped against the Clementine. **144 lemmata checked;
125 agree exactly with the Clementine on the words present; 19 diverge.** The agreements are listed
because a list of findings alone cannot be told apart from a report by an agent that never looked.

### 0000 (2 Cor 1) — 31 lemmata, 26 exact

**Exact:** *Paulus apostolus.* (1:1) · *Paulum* · *apostolum* · *Paulus,* (gloss-internal
re-quotations of the same lemma) · *Benedictus.* · *Deus.* · *Pater Domini.* · *Pater
misericordiarum.* · *Et Deus.* · *totius* … *consolationis:* (split by the glossator's *perfectae*;
both fragments Clementine) · *Qua exhortamur.* (1:4) · *Ipsi.* (1:9) · *Et eruit.* (1:10) · *Nam
gloria nostra.* (1:12) · *Testimonium.* ×2 (1:12) · *Sinceritate Dei.* (1:12) · *Spero autem.*
(1:13) · *Hac confidentia.* (1:15) · *Prius,* (1:15, pickup) · *Ut sit apud me, est et non.* (1:17;
Migne lowercases the Clementine's *Est et Non* and closes with a stop, not the Clementine's `?` —
orthography and Migne's own pointing, not a textual divergence) · *Fidelis autem Deus, quia sermo
noster, qui fuit apud vos non est,* etc. (1:18) · *Ad gloriam nostram.* (1:20) · *Vobiscum in
Christo.* (1:21) · *Ego autem,* etc. (1:23) · *Non quia dominamur.* (1:24) · *parcens vobis non
veni, subdit: Non quia dominamur,* (1:23; the italic span runs over the glossator's own *subdit:* —
preserved as one span in the English).

**Divergent (all declined):**
1. **0551D · *in nobis,*** — Clem. 1:9 *in nobismetipsis*. One word, intensive for simple; assertion
   unchanged. Declined.
2. **0552A · *Non in carnali sapientia.*** — Clem. 1:12 *et non in sapientia carnali*. Word order
   only; English has no exponent for it. Declined.
3. **0552B · *Quia gloria vestra sumus.*** — Clem. 1:14 *quod gloria vestra sumus*. *Quia* for
   *quod*; synonymous in medieval Latin. Declined.
4. **0552B · *ut secundam gratiam,*** — Clem. 1:15 *ut secundum gratiam haberetis*. ⚠ This is a real
   divergence of construction (adjective *secundam* agreeing with *gratiam*, "a second grace," vs
   the preposition *secundum*). **Declined, and this is the reason:** it is a one-letter difference
   in a verb-adjacent inflection, which is exactly the shape CLAUDE.md 8a records the digitization
   **manufacturing** (`judicabit`→`judicavit`), and our Latin is not the plate. Rendered as printed
   ("that a second grace"). **Plate candidate.**

### 0001 (2 Cor 2) — 19 lemmata, 15 exact

**Exact:** *Statui autem.* (2:1) · *ne iterum venirem:* (2:1) · *Si enim ego contristo.* (2:2) ·
*Non ut contristemini.* (2:4) · *Si quis autem contristavit.* (2:5) · *Sed ex parte, ut non onerem,*
etc. (2:5) · *Objurgatio haec, quae fit a pluribus ita ut e contrario magis.* (2:6–7, spanning the
verse break with no mark, as Migne prints) · *Donetis et consolemini.* (2:7) · *Ideo enim et
scripsi.* (2:9) · *Ut non circumveniamur.* (2:11) · *Cum venissem autem Troadem,* etc. (2:12) ·
*Eo quod non.* (2:13) · *Odorem notitiae,* etc. (2:14) · *Bonus odor.* (2:15) · *Odor mortis.*
(2:16) · *Sicut plurimi.* (2:17).

**Divergent:**
5. **0553A · *sed statui hoc idem:*** — Clem. 2:1 *hoc ipsum*. *idem* for *ipsum*, near-synonyms;
   the opening *sed* is the glossator's own connective inside the italics. Declined.
6. **0554A · *Nomen Domini per vos blasphematur inter gentes.*** — Clem. Rom 2:24 *Nomen enim **Dei**
   per vos blasphematur inter gentes*. *Domini* for *Dei*, *enim* dropped. A divine-name
   substitution, but the assertion is unchanged and the gloss does not turn on it. **Declined** —
   noted here because a divine name is the class 7a″ warns about, and it was checked, not assumed.
7. **0554A · *Caupones tui vino aquam miscent.*** — **`[var:]` fired**, see §0.

### 0002 (2 Cor 3) — 30 lemmata, 25 exact

**Exact:** *Incipimus iterum.* (3:1) · *Scripta non.* (3:3) · *Non in tabulis.* (3:3) ·
*Carnalibus.* (3:3) · *Fiduciam.* (3:4) · *Non quod sufficientes.* (3:5) · *Sed sufficientia.*
(3:5) · *Qui et idoneos.* (3:6) · *Multo magis abundat.* (3:9) · *Nam nec.* (3:10) · *Quod
claruit.* (3:10) · *hac* / *parte,* (3:10, split round the glossator's *praedicta*) · *Habentes.*
(3:12) · *Multa fiducia.* (3:12) · *Idipsum.* (3:14) · *Sed usque,* etc. (3:15) · *cum,* ·
*legitur,* · *Moyses.* (3:15) · *Cum autem conversus fuerit.* (3:16) · *Auferetur velamen.* (3:16) ·
*Dominus autem spiritus est.* (3:17) · *ibi libertas:* (3:17) · *Nos revelata facie.* (3:18) ·
*In eamdem imaginem.* (3:18).

**Divergent:**
8. **0555B · *Quod in Christo evacuatur.*** — Clem. 3:14 *(quoniam in Christo evacuatur)*. *Quod*
   for *quoniam*; probably attracted from the *quod evacuatur* of 3:13 standing just above.
   Conjunction swap, assertion unchanged. Declined.
9. **0555B · *sed super cor eorum est velamen,*** — Clem. 3:15 *velamen **positum** est super cor
   eorum*. Word order rearranged and *positum* dropped. Multi-word, but the assertion is identical
   ("a veil is on their heart"). Declined under the stated bar (multi-word **and** changes the
   assertion — the second condition fails).
10. **0555C · *Ubicunque autem est spiritus Domini,*** — Clem. 3:17 *ubi autem Spiritus Domini*
    (no copula). Two divergences: *Ubicunque* for *ubi*, and a supplied *est*. ⚠ **This was my
    strongest declined candidate and I want the reason on record.** *Ubicunque* is a whole distinct
    lexeme with a quantifying force and is **not** OCR-producible from *ubi*, so it clears the
    "whole distinct word" half of the bar cleanly. It fails the other half: in a gnomic statement
    *ubi* is already generalizing, and the gloss below (*et ideo Judaei qui non habent spiritum, non
    possunt libere intelligere ut nos*) does not rest on universality. Declined to keep the marker
    set to claims I can stand behind. The supplied *est* is separately the named
    "digitization silently normalizes" class (brief §4: *supplying an* est *Migne prints bare*).
    **Plate candidate for the copula.**
11. **0555D · *Vir quidem imago Dei est, et gloria Dei.*** — Clem. 1 Cor 11:7 *Vir quidem non debet
    velare caput suum : quoniam **imago et gloria Dei est***. Migne drops the first clause and splits
    the single predicate into two (*imago Dei est, et gloria Dei*). The gloss needs exactly the two
    predications the Clementine also makes. Assertion unchanged. Declined.
12. **0555D · *Transformantur.*** — Clem. 3:18 ***transformamur*** (1st pl.). ⚠ **The most
    interesting site in the range and it is declined on principle, not on merit.** The divergence is
    material — third person against first — and the gloss's own next words are first person
    (*Transimus de forma in formam*), which means the printed lemma and the printed gloss disagree.
    But `-mur` → `-ntur` is a **verb-ending change**, the precise shape CLAUDE.md 8a names as the
    class where the digitization **manufactures** a Vulgate divergence that a collation then
    dutifully "finds." A `[var:]` here would be a public claim about Migne's page resting on a
    two-letter difference in a file that is not his page. **Rendered as printed ("They are
    transformed"), so the disagreement with *Transimus* is visible to a reader. Plate candidate,
    highest priority in this range.**

### 0003 (2 Cor 4) — 17 lemmata, 12 exact

**Exact:** *Commendantes.* (4:2) · *Coram Deo.* (4:2) · *In quibus.* (4:4) · *Deus hujus saeculi.*
(4:4) · *Non enim.* (4:5) · *Lucem splendescere.* (4:6) · *Scientiae claritatis.* (4:6) ·
*Habemus.* (4:7) · *Thesaurum.* (4:7) · *Semper mortificationem,* etc. (4:10) · *Manifestetur.*
(4:10) · *Ergo mors,* etc. (4:12) · *Vobiscum.* (4:14).

**Divergent:**
13. **0556A · "Ut luceat lux vestra coram hominibus"** — Clem. Mt 5:16 ***Sic** luceat*. Not
    italicized by Migne, so not a lemma; one-word connective. Declined.
14. **0556A · "Non ut videantur ab hominibus"** — a negated construction built by the glossator out
    of Mt 23:5 / 6:1, not a quotation of either. Not italicized. Declined.
15. **0556B · *fuistis aliquando tenebrae, nunc autem lux in Domino*** `[n: (Ephes. V)]` — Clem.
    Eph 5:8 ***Eratis enim** aliquando tenebrae*. *fuistis* (perfect) for *eratis* (imperfect),
    *enim* dropped. English has no exponent that changes the assertion. Declined.
16. **0556B · *In faciem Jesu.*** — Clem. 4:6 *in **facie Christi** Jesu*. Accusative for ablative
    (one letter) and *Christi* dropped. Neither changes the assertion. Declined; the *faciem*/*facie*
    half is the manufactured-inflection class again.
17. **0556D · *Cum infirmor, tunc potens sum,*** — Clem. 2 Cor 12:10 *cum **enim** infirmor*.
    Connective dropped. Declined.
18. **0556D · *Per tribulationes,* etc.** — Clem. Act 14:21 *per **multas** tribulationes*. One word
    dropped inside a clip that already ends in *etc.* Declined.

### 0004 (2 Cor 5) — 47 lemmata, 40 exact

**Exact:** *Scimus enim quoniam si terrestris domus nostra hujus habitationis dissolvatur quod
aedificationem,* etc. (5:1) · *Aeternam.* (5:1) · *Nam.* (5:2) · *in hoc,* (5:2) · *ingemiscimus.*
(5:2) · *De coelo.* (5:2) · *Nam et qui,* etc. (5:4) · *Si tamen vestiti* / *non nudi.* (5:3) ·
*Gravati eo* (5:4) · *ingemiscimus* (5:4) · *Eo.* (5:4) · *Ut absorbeatur,* etc. (5:4) ·
*Audentes.* (5:6) · *Peregrinamur a Domino.* (5:6) · *Ut referat unusquisque.* (5:10) ·
*Suademus.* (5:11) · *Deo autem manifesti sumus,* (5:11) · *Sive enim mente.* (5:13) · *Sive
excedimus,* (5:13) · *Sive sobrii:* (5:13) · *Sive enim mente excedimus.* (5:13) · *Sive enim
sobrii sumus.* (5:13) · *Vobis.* (5:13) · *Charitas enim Christi,* (5:14; *ch-* is orthography) ·
*Si unus pro omnibus.* (5:14) · *Qui vivunt* (5:15) · *Neminem novimus.* (5:16) · *Secundum
carnem.* (5:16) · *Et si cognovimus secundum carnem.* (5:16) · *Vetera.* ×2 (5:17) · *Nova.*
(5:17) · *Deus erat.* (5:19) · *Reconciliamini.* (5:20) · *Pro nobis peccatum fecit.* (5:21) ·
"Absorpta est enim mors in victoria" (1 Cor 15:54, unitalicized, *enim* is the glossator's) ·
"Videbitis coelum apertum…" (Jo 1:51, unitalicized; drops *Dei*, *super* for *supra*) ·
"irriguum superius et irriguum inferius" (Jdc 1:15, unitalicized, verbatim — note it matches
**Judges**, not the Josue 15:19 doublet, which reads *superius et inferius*).

**Divergent:**
19. **0557B · *Non manufactam, sed aeternam.*** — Clem. 5:1 *domum non manufactam, aeternam in
    caelis* (no *sed*). One connective added. Declined.
20. **0557D · *Qui sumus in tabernaculo.*** — Clem. 5:4 *qui sumus in **hoc** tabernaculo*. One
    demonstrative dropped from a phrase Migne has already quoted once as *Nam et qui,* etc. Declined.
21. **0557D · *Quod nolumus exspoliari,*** — Clem. 5:4 *expoliari*. Attested orthographic doublet;
    Pattern 9 exempts it. Declined.
22. **0557D · *Deus autem hoc effecit.* / *Deus tamen effecit*** — Clem. 5:5 *Qui autem efficit nos
    in hoc ipsum, Deus*. Multi-word recast: God fronted, present → perfect, *nos in hoc ipsum* → *hoc*.
    Declined because it is **paraphrastic compression that leaves the agent and the act identical**
    (God is the one who brings this about, in both), and the second form (*tamen* for *autem*) is
    plainly the glossator re-quoting himself to head a second reading, not a second citation.
23. **0558A · *In ipso vivimus, movemur et sumus?*** `[n: (Act. XVII.)]` — Clem. Act 17:28 *In ipso
    **enim** vivimus, **et** movemur, et sumus*. Two connectives dropped. Declined. (The `?` is
    Migne's, closing the question *Quomodo?* two clauses earlier; preserved.)
24. **0558A · *prout gessit in corpore,*** — Clem. 5:10 *prout gessit* (the "of the body" sits
    earlier, as *propria corporis*). Migne moves it into the clause. The gloss does lean on it
    (*non ut gesturus erat si viveret*), but the Clementine already predicates the body of the deeds,
    so the assertion is unchanged. Declined.
25. **0558C · *Deo est:*** — Clem. 5:13 *mente excedimus **Deo*** (no copula). A supplied *est*
    again — the named normalization class. Declined; **plate candidate.**
26. **0558D · *Cum exaltaveritis Filium hominis…*** `[n: (Joan. VIII)]` — Clem. Jo 8:28
    ***exaltaveris*** (2nd **sg.**). ⚠ Worth naming: here it is very likely **the Clementine** that
    is the odd witness — its own following verb *cognoscetis* is plural, and the received Vulgate
    text elsewhere reads *exaltaveritis*. `sources/vulgate/README.md` warns that later upstream
    corrections are not applied and that a call turning on a couple of letters should say so rather
    than trust this copy. **Declined**, and it would have been the wrong marker to fire.
27. **0559A · *Neminem non secundum carnem.*** — **no Clementine counterpart at all.** 2 Cor 5:16
    reads *neminem novimus secundum carnem … sed nunc jam non novimus*. This italic run is the
    glossator's own reconstitution of the verse's sense, not a quotation; declined as not a
    scripture-citation divergence. Its parsing is at §2.4.
28. **0559C · *De peccato delevit vel damnavit peccatum,*** — Clem. Rom 8:3 *de peccato **damnavit**
    peccatum in carne*. The *delevit vel* is the glossator offering an alternative verb inside the
    italics (his own *vel*, not a variant reading), and *in carne* is clipped. Declined.
29. **0559C · *quia misit Deus Filium suum in similitudinem carnis peccati.*** — Clem. Rom 8:3 *Deus
    Filium suum **mittens** in similitudinem carnis peccati*. Finite verb for participle, *quia*
    supplied to attach it. Assertion unchanged. Declined.
30. **0559C · *Maledictus omnis…*** and **0559C · *terra es…*** — **`[var:]` fired**, see §0.

---

## 2. Cruces — passages read, and what was decided

### 2.1 Verse numbering (reproduced as printed, never reordered)
- **0551B, VERS. 2.-- *Benedictus.*** — *Benedictus Deus et Pater Domini* is **2 Cor 1:3**, not 1:2.
  Migne's address is one short. Reproduced verbatim.
- **0552D–0553A, VERS. 23 printed twice.** The second (*Non quia dominamur*) is **1:24**. Migne's
  ordering; reproduced, not renumbered.
- **0554B, `VER. 1.--`** (not `VERS.`) opens CAPUT III. Convention 1 makes the address verbatim, so
  the English prints `VER. 1.--` too. Not normalized.

### 2.2 Defective and doubtful type
- **0554C · `quamcredere`** in *Quis non videat prius esse cogitare quamcredere?* — a **run-together
  non-word** (*quam credere*), Pattern 10's class. **Rendered for its evident sense ("that thinking
  is before believing") and NO `[sic:]` fired.** The reason, stated so it is auditable: Addendum A
  measures this class 10-for-10 as **our** corruption, and a `[sic:]` accuses **Migne's type**.
  CLAUDE.md 8a records live works shipping false `[sic:]` against Migne on exactly this reasoning.
  **Plate candidate: one look converts this crux into a marker or closes it.** The Latin twin carries
  the broken run unmarked and visible, so nothing is concealed.
- **0554C · `contra duasepist.`** inside `[n: (AUG., lib. II, contra duasepist. Pelag., c. 8.)]` — a
  second run-together (*duas epist.*), inside a note. Notes pass verbatim and take no marker of ours.
  Logged. **Plate candidate.**
- **0557B · *Quia in ea sine manebitur.*** — ⛔ ***sine* is a preposition with no object.** Almost
  certainly *sine **fine*** ("because in it there will be abiding **without end**"), which is what
  the lemma *Aeternam.* is being glossed to mean. **The conjecture is NOT in the text**: the English
  reads "Because in it there shall be abiding without," and the hole is visible to the reader.
  No `[cj:]` — Pattern 18 requires Migne's printed word to be a real word whose faithful English
  *asserts* something false, and here nothing is asserted at all; the defect is a missing word, which
  is `[ed:]`'s territory only if source loss can be **demonstrated**, and it cannot be from our files.
  **Plate candidate, second priority.**
- **0557C · *cupimus super invocationem animae, quam jam accepimus.*** — *invocationem* is a real,
  well-formed word that reads oddly; ***innovationem*** ("the renewal of the soul, which we have
  already received") construes the sentence perfectly and matches the passage's whole argument
  (the body's glory still awaited, the soul's already had). **Rendered as printed**, per Addendum A:
  a real word that reads oddly is Migne's until a plate says otherwise, and a corpus-frequency
  argument, however good, cannot settle whose the reading is. No marker. **Plate candidate.**
- **0557D · *quo tamen nolumus mortem nobis tolli, sed superindui.*** — *mortem* (acc.) as subject of
  the passive *tolli* gives "we do not wish death to be taken from us," which is not what the
  passage wants; ***morte*** (abl., "to be taken from us **by death**") construes with the whole
  figure of being stripped rather than over-clothed, and with *non ut superveniat* four words later.
  **Rendered as printed**, one-letter inflection, no marker (§1.4's reasoning). Logged.
- **0558C · *Isti sunt angeli de quibus Dominus ait in Evangelio…*** — ⚠ **a non sequitur**: no
  angels have been mentioned anywhere in this chapter, and the sentence introduces them with a
  back-reference (*Isti*) that has no antecedent, then runs on into the Jo 1:51 and Jacob's-ladder
  material and stops. This looks like an intrusion into the recension, not a defect of type.
  Rendered exactly as printed; **nothing supplied, nothing marked.** Flagged here because a blind
  reader will stop at it and should know it was seen.
- **0551D · *Deus praesidia sua non negat suis in necessitate positis*** and **0558B · *…dies Domini
  in dubium venit*** — both end **with no terminal stop**. Pattern 8: never supply. The English
  sentences stop without a stop too.
- **0552B · *…debetis orare pro nobis Vel ideo orationes vestrae…*** — Migne prints **no stop**
  between *nobis* and *Vel*. Carried through as printed; the English reads "…ought to pray for us Or
  therefore your prayers…".

- **0556B · *post accedente luce quod factum est; melius redditur.*** — Migne's **semicolon** falls
  inside the construction. Two parses: (a) *quod factum est* is parenthetical ("afterwards, the
  light being added, which was done; it is rendered better"), which respects the printed mark; or
  (b) *quod factum est melius redditur* ("what was made is rendered better"), which requires the
  semicolon to be misplaced. **(a) was taken**, because Pattern 8 makes the mark evidence and
  (b) can only be reached by overriding it. The English is rough at that point; so is the Latin.
- **0557A · *per vos multos abundet gratiarum actione*** — Clem. 4:15 reads *per **multos** in
  gratiarum actione*; Migne inserts *vos*, leaving *vos multos* ("you many"). Rendered "through
  you many it may abound in thanksgiving." Suspiciously the shape of an intruded word; logged, no
  marker. **Plate candidate.**

### 2.3 Punctuation (Pattern 8 / band test)
Bands compared 1:1 across all five twins for `:` `;` `?` `«` `»` after stripping English-only
markers: **zero mismatched bands in all five chunks.** Nine supplied semicolons and one softened one
were found by the band test and repaired before filing — they had cancelled to near-parity on totals
(0000: 6/6, 0002: 5/5), which is the failure the band test exists to catch.
Question marks: 0002 has one (*quamcredere?*), 0004 four (*Quomodo?* · *…et sumus?* · *maledictus?* ·
*omnis?*); all four are **direct** questions, so 8b's colon recast was not needed anywhere in this
range and was not used.

### 2.4 Negation — the sites where the host was proved from structure, not from what reads well
Every printed negative was mapped to its host word and the host checked in the English. The
test-2a population (a negative on a verb with a quantifier / correlative / pivot adjacent) is
enumerated here in full, with the structural proof:

| col | Latin | host proved by | English |
|---|---|---|---|
| 0552D | *non enim **tantum** nobis tribuo, sed Deo* | the `sed Deo` correlative pairs with `nobis`, not with `tribuo` | "I ascribe it **not only** to ourselves, but to God" |
| 0552D | *Pro levitate vel terreno commodo **non** dimisi, sed parcens* | `sed parcens` pairs with the prepositional phrase, so the negative scopes it, not the verb (the 8960 @0740B model) | "**Not** for fickleness or for earthly advantage did I let it go, but sparing you" |
| 0553B | *Non omnibus onus tristitiae impono, propter illos qui de peccatis doluerunt* | the causal clause proves the scope is `omnibus`: some are exempt because they have already grieved | "I lay the burden of sorrow **not upon all**" |
| 0553D | *Quia **solus** non poterat fideles instruere, et simul … repugnare* | `et simul` shows the point is doing **both at once**, so `solus` is circumstantial and `non` is on `poterat` | "Because **being alone** he **could not** instruct … and at the same time withstand" |
| 0554C | *non se commendat, sed Christum* | `sed Christum` is an accusative pairing with `se` | "he commends **not himself**, but Christ" |
| 0554D | *praeferens se **non solum** pseudoapostolis … sed et ipsi Moysi* | explicit `non solum … sed et` | "**not only** to the false apostles … but even to Moses himself" |
| 0555B | *non **aliter** modo intelligunt **quam** ante adventum Christi* | the `quam` correlative fixes the negative on `aliter` | "they now understand **no otherwise than** before" |
| 0556A | *quod **non** facit malitia, sed justitia* | `sed justitia` is nominative, pairing with `malitia` | "which malice does **not** do, but justice does" |
| 0556A | *Deus qui **non solum** bonos regit, sed et malos … praecipitat* | explicit `non solum … sed et` | "**not only** rules the good, but also casts down the evil" |
| 0558D | *si Christus pro omnibus quantum ad se, etsi **non omnibus** profuit* | the contrast is intent (`quantum ad se`) against effect, so the negative is on `omnibus` | "although he **profited not all**" |
| 0558D | *Qui vivunt … **non sibi** vivant, **sed** voluntati Dei* | `sed voluntati Dei` is a dative pairing with `sibi` | "should live **not to themselves, but** to the will of God" |
| 0558D | *quasi Deo, **non homini solum** pro eis passo* | the `quasi Deo` pivot: the contrast is God vs man, and `solum` qualifies `homini` | "as to God, **not to a mere man** who suffered for them" |
| 0559A | ***Neminem non** secundum carnem* | ⭐ settled by the gloss's own words three lines down — *quae **non est secundum carnem*** — which show the negative is on the phrase `secundum carnem`, not doing double duty with `neminem`. The double-negative reading ("everyone we know we know according to the flesh") would contradict the gloss outright. | "**No man not according to the flesh**" |
| 0554A | *Peregrinamur ergo **non fide**, sed specie* | `sed specie` is ablative, pairing with `fide` | "We are absent therefore **not by faith**, but by sight" — and note this is **not** a defect: the sense is that our absence from the Lord is one of sight, not of faith. It inverts 2 Cor 5:7's own phrasing and reads oddly for a moment, which is why it is logged. |

Non-quantifier negatives (verb-hosted, no correlative) were checked one by one and are correct:
*non ait* · *nullus praesumat* · *non est judicandus* · *nec est liber* · *nesciens* · *non esse
verum* · *in nullo alio* · *non implet* · *nil nisi* · *nunquam*-class absent · *non condolet* ·
*non venit* · *non profecit* · *non poterat* · *non egere* · *non est ex nobis, nec credere* ·
*non datur* · *non celamus* · *ut non intelligeretur* · *non intellecto Christo* · *non habent
spiritum, non possunt* · *non immisit* · *nollent* · *non praebuit* · *non est inutilis* · *non
faceremus, nisi* · *ne illi de se minus sentiant* · *ne … nudi inveniantur* · *non est curandum,
cum non sit tabernaculum nisi ad tempus* · *nusquam* + *Non infra, non supra, non intra, non
extra* · *non tamen hic videtur* · *si non per se* · *vel non crediderunt* · *non secundum quod
gesturi erant* · *ut non alta de nobis dicamus* · *non vobis, qui non potestis capere* · *non est,
sed apparet* · *nec hoc debet facere aliquis* · *non quin … sed quod non* · *non jam … nunc ita
esse credit* · *nulla diversitas* · *non ficta*.
**Count: every negative printed in the Latin is present in the English, and none is present that
the Latin does not print.**

### 2.5 Unexpressed subjects — supplied pronouns, and what decided each
- **0551B *Per quem est et nobis.*** — the elided predicate is *Pater*, from the lemma directly
  above (*Pater Domini*); *quem* is Christ. "Through whom he is the Father of us also."
- **0551C *non solum ut consolaretur, sed etiam exhortaretur*** — both verbs are **deponent
  actives** ("console", "exhort"), not passives, and the following clause (*nostra consolatio valet
  etiam ad alios exhortari*) is active in the same way. Subject: the one who has received the
  *exhortatio*. Rendered "that he might console… but also exhort". The passive reading ("be
  consoled… be exhorted") also construes; **it lost** because the deponent morphology and the
  parallel active infinitive both point the other way.
- **0555B *non aliter modo intelligunt*** — subject is the Jews, from 3:14's *obtusi sunt sensus
  eorum*, not from anything in the sentence.
- **0555C–0555D**, the Moses/veil stretch: *Moyses*, *Dominus*, *spiritus* and the *filii Israel*
  all compete. Resolved as: *cum … legitur … Moyses* → Moses is what is read (the gloss supplies
  *exponitur*, "expounded to them"); *Cum autem conversus fuerit* → the subject is *eorum animus*,
  which the gloss itself prints; *ad quem convertuntur* → the Jews, same antecedent. No pronoun in
  this stretch is supplied without a printed antecedent.
- **0555A *illa nec dicenda est gloria*** — *illa* is the old glory / the ministration of death,
  against *ejus* (the new) in the same clause. Rendered "that other," not "she" or "it."
- **0559A *Vitam futuram ita certa spe tenet*** — third singular with no printed subject. Taken as
  **the man born again new in Christ**, because the nearest printed third-singular subject is
  *si quis novus … et novam habet* in the immediately preceding sentence. The rival is **the
  Apostle** (whose *Neminem novimus* is the lemma); it lost on nearness and on the fact that the
  intervening sentence changed the subject to *quis*. Both construe — recorded rather than chosen
  silently.
- **0559B *dum infidelis … intellexit*** — Paul, self-evidently (*dum infidelis*, and 5:16 is his
  own before-and-after). Named, not assumed.
- **0556A *quod non facit malitia, sed justitia*** — subjects printed; no supply needed.

### 2.6 Fragmentary lemmata — what class each belongs to before it was expanded (⚑)
The controls here are of two different classes and were kept apart:
- **Complete one-word lemmata** (nothing elided): *Testimonium.* · *Habemus.* · *Thesaurum.* ·
  *Fiduciam.* · *Carnalibus.* · *Idipsum.* · *Habentes.* · *Aeternam.* · *Audentes.* ·
  *Suademus.* · *Vobis.* · *Vobiscum.* · *Nova.* · *Vetera.* ×2 · *Reconciliamini.* ·
  *Manifestetur.* · *Commendantes.* · *Moyses.* — **rendered as they stand.**
- **Clipped lemmata whose governed words are elided** — convention 3, rendered as the phrase they
  stand for, **and only where the continuation is not itself picked up elsewhere in the gloss**:
  - *Nam nec.* → "**For neither was it glorified**" (3:10; the continuation *glorificatum est* is
    picked up nowhere, and the gloss turns on the *nec*).
  - *Eo quod non.* → "**Because I found not Titus my brother**" (2:13; the Ruth *Non te.* precedent).
  - *Non enim.* → "**For we preach not ourselves**" (4:5; the gloss glosses the whole clause).
  - *Deus erat.* → "**God was in Christ**" (5:19; the gloss's whole argument is *Pater esse in
    Filio*, which needs *in Christo*).
- **Word-pickups inside the glossator's own sentence**, where the continuation *is* supplied by the
  gloss's further italic pickups, so expansion would duplicate: *Prius,* · *hac* / *parte,* ·
  *cum,* / *legitur,* · *Nam.* (continued by *in hoc,* and *ingemiscimus.*) · *Eo.* (continued by
  the next lemma *Quod nolumus exspoliari*) · *Sive excedimus,* · *totius* / *consolationis:*.
  **Rendered as the words they are.** This is a third class, not an inconsistency with either of
  the two above; naming it is the point of the ⚑ rule.

### 2.7 `usque ad` and its look-alikes (Addendum D)
Three occurrences in the range, **none of them the abridgment formula**, all decided from what
stands on either side:
- 0555B *et hoc **usque in** hodiernum tempus* — the verse's own words (3:15).
- 0555B *Sed usque,* etc. — the lemma for 3:15 *sed usque in hodiernum diem*; its own words.
- 0558D *etsi Christus **usque ad mortem** fuit infirmus* — ordinary idiom, "even unto death."
No resumption tail in this range, and no verb supplied anywhere to complete one.

### 2.8 Vocabulary settled from the corpus
- **0552A · bare *pseudo*** (*ut pseudo faciebant*) — the Glossa's substantival use. The corpus
  already renders it "**the false ones**" (8990's cruces, *propter pseudo qui vobis se ingerunt*);
  taken as a hint, checked against this work's own *pseudoapostolos* two paragraphs above, and used.
- **0558B · *praviloquio*** — rare but regularly formed; rendered "perverse speech." Real word,
  no marker (Pattern 9).

---

## 3. Read clean / candidates rejected

**Read clean and nothing found:** the whole ARGUMENTUM (0551A); 0551A–0551D (CAPUT I opening,
*Benedictus* through *Et eruit*); 0553B–0553C (CAPUT II, *Si enim ego contristo* through
*Donetis*); 0554B–0554D (CAPUT III opening); 0555A (*Quod claruit*); 0556B–0556D (CAPUT IV);
0558A–0558C (*Audentes* through *Sive enim sobrii sumus*); 0559A–0559B (*Neminem novimus*
through *Et si cognovimus*).

**Rejected with reasons (each was raised against itself and lost):**
1. **A `[sic:]` on `quamcredere`** — rejected: the class is measured 10-for-10 as the digitization's,
   and the marker accuses Migne. Crux + plate request instead. §2.2.
2. **A `[var:]` on *Transformantur*** — rejected: verb-ending change, the manufactured-divergence
   shape. §1.12. This is the one I would most like a plate read on.
3. **A `[var:]` on *Ubicunque autem est spiritus Domini*** — rejected on the second half of the bar
   (the assertion does not change); the lexical half was clean. §1.10.
4. **A `[var:]` on *secundam gratiam*** — rejected: one-letter inflection. §1.4.
5. **A `[var:]` on *Cum exaltaveritis*** — rejected, and it is probably the **Clementine** that
   diverges here, not Migne. §1.26.
6. **A `[cj: *sine*; read *sine fine*]`** at 0557B — rejected: Pattern 18 needs a printed **real
   word** whose faithful English asserts something false; a stranded preposition asserts nothing.
   §2.2.
7. **A `[cj: *invocationem*; read *innovationem*]`** at 0557C — rejected under Addendum A and 18a
   (the census is closed and the bar is assertion-falsity, which this does not reach). §2.2.
8. **A `[cj: *mortem*; read *morte*]`** at 0557D — rejected, same class. §2.2.
9. **Reordering VERS. 23 / VERS. 2** — rejected outright: Migne's numbering, reproduced. §2.1.
10. **Normalizing `VER. 1.--` to `VERS. 1.--`** — rejected: convention 1 makes the address verbatim.
11. **Column-band arithmetic** (0552D→0553A, 0554A→0554B, etc.) — not raised; runbook false
    positive 1. No text is broken mid-word or mid-construction across any anchor in this range.
12. **Pattern 4 `[f:]` tags** — not applied; runbook false positive 4, this is a lemma-and-gloss
    commentary.

## 4. Plate-read requests, in priority order
1. **0555D · *Transformantur*** (against Clem. *transformamur*) — decides a `[var:]`.
2. **0557B · *sine* in *Quia in ea sine manebitur*** — decides whether *fine* is Migne's loss or ours.
3. **0554C · `quamcredere`** — decides a `[sic:]`.
4. **0557C · *invocationem*** (v. *innovationem*).
5. **0555C · the copula in *Ubicunque autem **est** spiritus Domini*** and **0558C · *Deo **est***** —
   both the "digitization supplies an *est* Migne prints bare" class; one look at each settles both.
6. **0552B · *secundam*** (v. *secundum*) and **0557D · *mortem*** (v. *morte*).
⚠ Cols 0551–0559 fall in the stretch where our PL 114 scan clips the right margin on some pages
(p.265, p.281); a truncated right column is not evidence of anything, and a second witness from
`data/volumes.json` is required for any right-column reading.
