# *Glossa ordinaria*, **Evangelium secundum Matthaeum** (PL 114, cols 0063A–0178D) — cruces

*Anselmus Laudunensis et schola*, in Migne's nineteenth-century abridged recension, attributed by
him to Walafrid Strabo. 42 chunks, 45,922 Latin words, **eight translation stints**, each of which
read its own plates on **two witnesses** as it went.

This file is the merge required by `translation-runbook.md` step 4. **§1 is the work-wide
conventions section**: what one voice this work speaks in, what the eight stints were reconciled
on, and — where they ruled differently on the same class — which ruling stands and why. **§2–§9
are the eight stints' own files, preserved unedited**, because the lemma divergence lists, the
declined-oddity lists and the arguments for the declines are the most valuable thing they contain.
Nothing in them has been summarized away.

⛔ **A later sweep should read §1 before changing anything here.** Every variation §1 records as
*licensed* was measured across all eight ranges before it was licensed, and normalizing it would
undo work, not tidy it.

---

# §1 · WORK-WIDE CONVENTIONS — what was reconciled at the merge, and why

Merged 2026-09-05. Method: the eight files' stated policies were diffed against each other **and
against the English chunks themselves**, mechanically, on every axis
`GLOSSA-NT-AGENT-BRIEF.md` names. The instrument checks the brief demands were run before any
drift was reported (`\bturba` catches *turbare*; `natio` catches *damnatio-*, *generatione-*,
*incarnatione-*; `\bdaemoni` **misses** *daemones*/*daemonum*; a raw `usque ad` grep overcounts the
formula). Where a claim in a stint's file could be checked against the chunks, it was.

## 1.1 The settled Glossa conventions, as this work applies them

1. **`VERS. n.--` passes through VERBATIM, untranslated.** Checked mechanically: the sequence of
   `VERS.` addresses is identical in the Latin and the English of **all 42 chunks**, character for
   character, including the addresses Migne prints without the `--` dash.
2. **The lemma is Englished**; a fragmentary lemma is rendered as the phrase it stands for
   (convention 3). The line between "fragment, expand it" and "complete one-word lemma, render as
   it stands" was drawn by the 0012–0015 stint — *can the printed lemma stand as an English clause
   or phrase on its own?* — and **adopted by name** by the 0027–0031 stint. It is the work's rule.
   ⛔ And its limit, stated by the same stint and binding here: an expansion that restores a word
   **Migne does not print** is 7a″ conformation, not convention 3. *Honora patrem.* is "Honour
   father.", not "Honour thy father"; *Magna est fides.* is "Great is the faith.", not "thy faith";
   *Hic est Filius.* is "This is the Son.", not "my beloved Son"; *Propter incredulitatem.* is
   "Because of unbelief.", not "your unbelief". The slight oddness in English **is the
   information.**
3. **The attribution sigla ride as ordinary `[n: …]` notes**, verbatim, unanglicized, uncorrected.
   285 of them. Migne's attributions in this recension are unreliable and passing one through is
   not endorsing it.
4. **`## ` heads: numerals mirror the plate.** `CAPUT PRIMUM.` → `CHAPTER ONE.`, `CAPUT XIII.` →
   `CHAPTER XIII.` Checked chunk by chunk across all 42: **28 CAPUT heads — one spelled
   (PRIMUM/ONE) and 27 in numerals (II–XXVIII) — and not one stint spelled a numeral out.** `PROLOGUS.` → `PROLOGUE.`
5. **Italic spans are 1:1 with the Latin, in the same place.** Verified mechanically at the merge,
   after markers are stripped: **exact parity in all 42 chunks.** Two supplied spans were found and
   removed — see §1.4.
6. **Greek is reproduced verbatim, not transliterated** (Τέλος @0116A, Κωφὸς @0117C).
7. **There is not one guillemet in the work.** Matthew is an italic-lemma book, like Luke and Mark
   and unlike Genesis; 0 in 45,922 Latin words. `« »` therefore never arises, and every quotation
   mark in the English is ours, per Pattern 6.

## 1.2 The vocabulary axes — measured across all eight ranges, not asserted

Every figure below is a count over the whole work, Latin against English, made at the merge.

**Axis 1 — the commentator's own voice is NOT archaised.** `dicit`/`ait`/`dixit` → *says*/*said*
throughout; no *saith*. Third-person `-eth` forms outside an italic span number **four** in 74,630
English words (*taketh* @0097A, *asketh* @0097C, *believeth* @0135C, *knoweth* @0123B) and **all four sit
inside quoted scripture carried in roman** — Mt 5:42, Lc 6:29, Rom 10:4, Mt 11:27. The `-est` forms
are second-person singular and are Pattern 17's, not archaism.
⚑ **The recorded test is italic membership; the practice is slightly wider, and deliberately so:**
a scripture quotation Migne sets in roman still takes its received English form. A sweep that
strips `-eth` on the italic test alone would damage four faithful quotations.

**Axis 2 — `turba` → crowd, `multitudo` → multitude, never one word for both.** 33 `turba` forms,
2 `multitudo`. The pair stands inside one range twice (0024, 0034) and inside three columns of each
other at 0157A/0152C, and the two words are kept apart at every site. ⚑ Two apparent excesses were
checked and are not drift: "throng" at 0006 renders *frequentia hominum*, not *turba*; the third
"crowd" in 0019 is convention 3's expansion of the clipped lemma *Et cum ejecta esset* (Mt 9:25,
*turba*), so the supplied word is the axis's own.

**Axis 3 — `daemonium` → demon · `diabolus` → devil · `satanas` → Satan.** 19 · 55 · 1, and the
three are never crossed in 42 chunks. The adjective **`diabolicus` → "diabolical"** at all four of
its occurrences (@0105A, @0126D, @0127B ×2) and **`daemoniacus` → "demoniac"** at both (@0113D,
@0114C) — which
is why a naive noun-count reads four devils and two demons short, and why the check has to be run
on the lemma and not on the string. ⚑ One "demon" is supplied and is the axis's own: @0114C
*Duo habentes.* is convention 3's expansion of Mt 8:28 *duo habentes **daemonia***.
⛔ The Douay's "devils" for *daemonia* never once pulled the first word into the second.

**Axis 4 — the *gentes* family. Matthew is the *Judaei*/*gentes* gospel and this is the axis that
earns its keep here.** Measured site by site over the whole work:

| Latin | English | count | rule as applied |
|---|---|---|---|
| `gentes`/`gentium`/`gentibus` | **Gentiles** | 67 | in the *Judaei*/*gentes* typological opposition |
| `gentes` (generic, in a quoted verse) | **nations** | 6 | *omnes gentes terrae* Gn 22 · *super omnes gentes* Ps 112 · *Docete omnes gentes* Mt 28:19 · *Ecce gentes quasi stilla* + *Omnes gentes* Is 40 · *omnium gentium lingua* |
| singular `gens` of a people | **nation** | 10 | *prioris gentis* · *ejusdem gentis* · *unius gentis* · *tota gente* · *in gente eorum* · *excidio gentis* · *suae gentis* ×2 · *de omni gente* · *amissa gente* · *de gente tua* (Dt 18:15) |
| `gentilis`/`gentilem`/`gentilium`/`gentiles` | **Gentile / Gentiles** | 14 | the 9000 addition, applied from chunk 0006 |
| `gentilitas` | **the Gentile world** | 4 | 0116D ×2, 0122D, 0128D |
| `ethnicus` | **heathen** | 2 | 0116A, 0147A (the lemma *Sicut Ethnicus*, Mt 18:17) |
| `natio`/`nationes` | **nation / nations** | 2 | 0147C *exteris nationibus*, 0171A *omnes nationes* |

**Zero crossings.** Every stint ran the `natio` instrument check and said so: the raw grep returns
nine false hits in 0032–0037 alone (*destinatione*, *praedestinati*, *generatione* ×4, *damnatur*,
*indignati*, *contaminatione*), three in 0027–0031, four in 0016–0021, eight in 0038–0041 of which
seven are false. **This is the axis 9004 got wrong three ways across four stints. Matthew got it
right eight times out of eight.**
⛔ One drift was found and repaired — a **ninth** word entering the family from outside it. See
§1.4(a).

**Axis 5 — `mysterium` → mystery, `sacramentum` → sacrament, 1:1.** 19 `mysteri-` → 19
"mystery/mysteries"; 35 `sacrament-` → 33 "sacrament" and **2 "oath"**. One drift repaired (§1.4(b)) and **one declared departure, which stands** (§1.3(a)).

**Axis 6 — `usque ad`, by the `etc.` splice test.** The work prints it **159 times**: **136 are the
formula** (each immediately follows an `etc.,` and names where the abridged father's sentence
resumes) and **23 are ordinary Latin**. Every one of the 136 is **"as far as"**; not one of the 23
is. The per-stint split — 8/4 · 29/5 · 12/0 · 53/2 · 10/1 · 20/0 · 2/6 · 2/4 — was re-derived at
the merge and **agrees with every stint's own reported figure.**

⚑ **The 23 ordinary ones are rendered by SENSE, and the variety is licensed, not drift:** "up to"
(0006:21, 0040:21), "unto" (0010:23, 0010:65), "even unto" (0018:35, the lemma *Usque ad mortem*
@0170A), "even to" (0038:31), "until" (0022:37, 0038:23), "from … to" (0002, 0005, 0011, 0032,
0035, 0036), "as far as" **by sense** at three sites of physical extent (0001:33 *usque ad Deum
ascendit*, 0005:31, 0021:55 *usque ad naves prosequerentur*). ⛔ **Do not normalize these.** Three
of them are the verse's own words — Is 49:6 @0091B, Mt 26:38 @0170A, Mt 28:20 @0167C/@0178C — and
reading them as the formula would destroy the note that glosses them.
⚑ Two formula sites are **not** wrapped `*usque ad*` because Migne's italic run continues past the
formula into the resumed quotation: @0086C `*usque ad, Hoc fecit initium signorum Jesus.*` and
@0089B `*usque ad, Omnis qui audit …*`. The English mirrors the Latin exactly at both. That is why
the English carries 134 `*as far as*` and not 136.

## 1.3 The declared departures — argued in public, and they survive the merge

**(a) @0135B — `sacramentum` is Herod's OATH, and the axis is departed from openly.**
Isidore's sentence is *Non est conservandum **sacramentum** quo malum incaute promittitur … non
implere **sacramentum**, quam manere in stupro*, and the passage's own words are *jurasse*,
*perjurio*, *promittitur*, *stupro*. **Rendered "oath" at both occurrences**, the rival ("hold the
axis, print sacrament") named and rejected in the 0022–0026 stint's §(d) 1, and **every other
`sacramentum` in that range kept to the axis** (0130A, 0133C, 0134B). ⛔ **This is not to be
normalized.** "Sacrament is not to be kept whereby an evil is incautiously promised" would not be
awkward, it would be **false** — it would put the Church's sacraments where Isidore has put a
perjury. A departure the Latin forced, argued where a reader meets it, is exactly what the axis
rules license.
⚑ Verified at the merge: these are the **only two** `sacramentum` in the work not rendered
"sacrament".

**(b) @0125A — the printed `sed` makes the proverb command the opposite, and it rides.** Sir 4:36
joins its members with *et*, so the single negative governs both; Migne prints *sed*, so it does
not. Rendered as printed, `[var:]` fired. Pattern 7a, working.

**(c) @0170B — a `[cj:]` on an intruded negation Migne prints on both witnesses.** *non occidant*
kept in the English, the conjecture *occidant* standing beside it in its marker. The negation is
not repaired inside the translation, which is the one error class nobody downstream can find.

## 1.4 ⛔ THE DRIFT FOUND AT THE MERGE — four English edits, named per site

These are the only changes made to the English chunks. Both gates were re-run after: `plate-gate`
OK, `verify-english` OK (42 chunks), and **italic parity is now exact in all 42**.

**(a) @0080D (chunk 0006) — `pagani` was rendered "the Gentiles", eleven words from `gentiles`.**
Migne writes *alii sunt aridi, id est, **pagani** incendio apti … **Omnis ergo arbor,** ut
**gentiles**, hypocritae*. Both words had come out **"the Gentiles"** in one sentence. That is
axis 4's exact failure mode — one English word for two Latin words, in the gospel whose argument is
that opposition — and it is the *gentes* family's ninth member entering from outside the axis's own
list. `paganus` occurs **once in the whole work**, which is why no stint's own count could show it.
**Changed to "the pagans"**, which collides with nothing: "Gentile", "heathen", "nation" and "the
Gentile world" are all taken, "pagan" was unused in 74,630 words.

**(b) @0120C (chunk 0021) — `sacramenta` was rendered "mysteries".** *An alium ad haec sacramenta
missurus es?* had come out "art thou about to send another for these mysteries?" ⚑ **The stint's
own file names this site and states the opposite rule**: cruces-0016 §(a) 6 reads "`sacramentum` →
**sacrament** (0108C, 0113B, 0120B)". So this is an execution slip against a declared policy, not a
policy divergence, and the fix is the stint's own. **Changed to "sacraments".** With it, axis 5 is
1:1 everywhere in the work except the two declared @0135B sites.

**(c) @0080D (chunk 0006) — a supplied italic span, `*raise up*`.** Migne prints *Suscitare
signanter dicit* with no italic. The English had italicized the mentioned word. ⚑ **The same
stint's own file forbids this** (cruces-0006 §(d), on words-as-words: "rendered with our own
quotation marks (Pattern 6: `« »` is Migne's, `" "` is ours) rather than by adding italic spans the
Latin does not"). **Changed to `"raise up"`** — the stint's own remedy, which keeps the mention
visible and restores the span count.

**(d) @0092B (chunk 0010) — a supplied italic span, `*They do not light,*`.** Migne prints *Non
accendunt, id est,* in roman: it is the gloss picking its lemma back up, not a lemma he sets.
**Italics removed.** With (c), the work's italic spans are now **1:1 with the Latin in every one of
the 42 chunks**, which is the sacred-marker rule and was the one place it had slipped.

⚑ Nothing else in the English was touched. In particular **no `[var:]`, `[sic:]` or `[cj:]` was
added, withdrawn or reworded at the merge**, and no plate claim rests on anything but the two
witnesses the stint that made it read.

## 1.5 ⚖️ WHERE TWO STINTS RULED DIFFERENTLY — the rulings, stated so they can be argued with

**(a) THE CONNECTIVE SUBSTITUTION — @0165B declined, @0156A fired, and @0174B fired on a clip.**
This is the live one the coordinator named, and checking it across all eight ranges **sharpens the
rule rather than overturning either stint.**

The 0032–0037 stint stated its line **in advance** and named the evidence that weakens it: it fired
`autem` for `enim` at @0156A because *Multi enim sunt vocati* **opens Mt 22:14**, and declined
`autem` for `et` at @0165B because Migne's lemma is **clipped out of the middle** of Mt 25:19
(*venit dominus … **et posuit** rationem cum eis*), where *et* cannot stand at the head of a lifted
clause and a postpositive *autem* sits exactly where a clip needs a connective. It then recorded,
against itself, that Migne keeps the verse's own connective in **four** other clipped lemmata in
that same range (@0155A, @0155D, @0165D, @0166C). That is model practice and the decline stands.

⛔ **But as literally worded — "where the lemma starts" — that rule is broken by the 0038–0041
stint**, which fired @0174B: Migne prints *Jesum **vero** flagellatum* where Mt 27:26 reads *Jesum
**autem** flagellatum*, and **that lemma is also clipped from mid-verse.**

**The ruling, and it reconciles all four sites without overruling any stint: the question is not
where the lemma starts, it is WHETHER THE RECEIVED CONNECTIVE COULD HAVE STOOD IN THE CLIPPED
POSITION.**

| site | Vulgate | Migne | position | ruling |
|---|---|---|---|---|
| @0093A | *Dico **enim** vobis* (Mt 5:20) | *Dico **autem** vobis* | opens the verse | **FIRED** — *enim* could stand; only a different text explains the change |
| @0156A | *Multi **enim** sunt vocati* (Mt 22:14) | *Multi **autem** sunt* | opens the verse | **FIRED** — same |
| @0174B | *Jesum **autem** flagellatum* (Mt 27:26) | *Jesum **vero** flagellatum* | clipped mid-verse | **FIRED** — the received connective is **already postpositive** and could have stood; the substitution is textual, not an artefact of clipping |
| @0165B | *… **et** posuit rationem* (Mt 25:19) | *Posuit **autem*** | clipped mid-verse | **DECLINED** — *et* is a coordinator that **cannot** open a lifted clause; Migne's own lemma-forming may have supplied *autem*, and a `[var:]` would be a public claim about his Matthew text resting on a word he may not have found in it |

Two more fire on the same test and were checked: @0106B *Si **enim** foenum agri* for Mt 6:30's
*Si **autem*** (opens the verse) and @0136A *Animalis **enim** homo* for 1 Cor 2:14's *Animalis
**autem*** (opens the verse). **Six sites, one rule, no exceptions.** The @0165B decline remains
the work's one connective decline, and the 0032–0037 stint's §(d) 6 is still the paragraph to
argue from if a later reader wants it fired — the plates are already read.

**(b) "ye" — 0012–0015 declared "no ye", 0022–0026 declared "ye inside a quoted scripture lemma".**
Measured at the merge: **26 occurrences, and every single one is inside quoted scripture** (24 in an
italic lemma, 2 inside a `[var:]`'s English of the Vulgate). ⛔ **So the two declarations do not
actually conflict about the gloss's voice, which is what matters: "ye" never once appears in the
commentator's own prose, in any of the eight ranges.**

Where they do differ is finer, and it is real: a **bare plural imperative lemma** is rendered
**without** "ye" at every site but three (*Petite.* "Ask." · *Attendite.* "Beware." ×3 ·
*Nolite judicare.* "Judge not." · *Sinite.* "Suffer." · *Orate.* "Pray." · *Diligite.* "Love." ·
*Benefacite.* "Do good." · *Nuntiate.* "Tell." · *Docete.* "Teach."), and **with** it at exactly
three (*Intrate.* "Enter ye." @0110A · *Et alligate.* "And bind ye." @0132D · *Vigilate.*
"Watch ye." @0164D). ⚑ **All three of those stints are internally split on it** — 0016–0021 prints
"Ask." and "Beware." beside "Enter ye."; 0022–0026 prints "Suffer." beside "And bind ye.";
0032–0037 prints "Give us of your oil," and "And give it to him," beside "Watch ye." So this is not
one stint's house style against another's; it is the same hand choosing per verse.

**RULING: this is not swept, and the reason is a rule of this edition and not fatigue.** Both forms
are plural and both satisfy Pattern 17, so neither is a defect; and the two available sweeps are
each worse than the variation. Adding "ye" everywhere would import the Douay's phrasing into
lemmata that do not carry it — **7a″ conformation, the defect this edition exists to catch**.
Removing it everywhere would strip the received English from twelve verses that plainly have it
(*Come ye after me* · *Go ye not into the way of the Gentiles* · *Teach ye all nations* · *Be ye
merciful* · *Receive ye the Holy Spirit* · *Have ye not read* · *It is I, fear ye not* · *Hear ye
him* · *Tell ye the daughter of Sion* · *Give ye them* · *Come, ye blessed* · *Watch ye therefore*).
The work's rate — **26 in 74,630 words** — sits inside the corpus band (Mark 28 in 41,831; 9004 57
in 36,250; John 8; Luke 9). **The inventory above is the record that this was measured, not missed.**

**(c) The `[sic:]` marker's own formatting — italic in two, roman in two.** @0097A `[sic: *nomo*]`
and @0158D `[sic: *in est*]` italicize the quoted word; @0131A `[sic: Excaevavit]` and @0135B
`[sic: Constristatus]` do not. **This is not drift and no edit was made.** Checked at the merge:
**both roman ones sit inside an italic run and both italic ones sit in roman prose.** Nesting
`*…*` inside `*…*` is impossible in this dialect and would break the span parity the sacred-marker
rule requires. The convention this work follows, stated here so it is not "fixed" later:
**italicize the quoted word wherever the marker stands in roman prose; leave it plain where the
marker stands inside a lemma.** The corpus majority form is the italic one (1,537 to 366), and
this work uses it wherever it can.

**(d) The `[var:]` threshold — four wordings, one bar.** The 0000–0005 stint stated it
(*substitution* fires; *ellipsis*, and *what Migne's own gloss already discusses*, decline); 0016–0021
adopted it and **extended it to inflectional change** (tense, mood, stem) on the ground that the
English word on the page changes, citing 0000's own @0069A as precedent; 0022–0026 adopted 0006–0011's
worked application of it; 0027–0031 and 0032–0037 say in terms that they inherited the bar and did
not loosen it; 0038–0041 restated it in one line (*substitution or addition fires; elision or
transposition does not*). **Read together these are one bar, and the 73 firings are consistent with
it.** Recorded here because four different wordings of one rule is exactly what a later sweep would
mistake for four rules.

**(e) Orthography and proper names never fire, and all eight ranges agree.** *Esrom/Esron ·
Josaphat/Josophat · Eliachim/Eliacim · Sadoch/Sadoc · Nazareus/Nazaraeus · Gerazenorum · Scariothis ·
Osanna · saba* for *Sabaoth*; *Nunquid/Numquid · quandiu/quamdiu · Quicunque/Quicumque ·
Abscinde/abscide · Dextera/dextra · circumibat/circuibat · Iota/jota · Inexstinguibili/inextinguibili ·
Nummulariis/numulariis · patrem familias/patremfamilias*. Firing on these would bury the 73 real
divergences in noise, which is Pattern 9's own argument.

## 1.6 Pattern 17 — thou is the singular, you the plural

Applied by number and never by reverence, in all eight ranges, and every stint itemized its own
switches (they are preserved below). The switch is visible inside single glosses at @0152B and
@0160A. `you` is the plural throughout the gloss's own voice; `ye` is §1.5(b)'s.

## 1.7 What the English translates: **the plate where read**, and the whole work was read

Every column of cols 0063A–0178D was read on **two witnesses** by the stint that translated it —
the archive PDF (`raw/scans/pl114/patrologiaecurs06saingoog.pdf`, PDF page = (col+11)/2) and
Gallica (`ark:/12148/bpt6k54939667`, f = (col+1)/2), **corner numbers read first on every page**.
Where the plate and our Corpus Corporum twin disagree, **the English renders the plate** and the
site is filed as a pending TEI patch (§1.8). This is `translation-runbook.md` 4a″ applied to a whole
work for the first time, and it is why the apparatus could fire at all.

⭐ **The archive copy of PL 114 is the worse witness, and the eight independent measurements are
now the strongest statement of that in the corpus:** 12 of 13 refuted · 20 of 21 · 11 of 12 ·
9 changed answers · 14 of 16 · 17 of 17 · ~34 · **19 of 19**. ⛔ And it does not follow that Gallica
is right: @0131B the archive prints a terminal stop that Gallica and our twin lack, and Gallica's
own `sni` for `sui` was caught elsewhere. The method that found those is the 0022–0026 stint's —
**read the second witness across the whole range, not only at your candidates** — and it is the
method this work should be cited for.

## 1.8 THE TALLIES

⚠ **These counts are AS OF THE MERGE, and the step-4a polarity pass is running concurrently and is
adding to them.** It has already landed one `[sic:]` this file's own stint files do not have —
@0077D *justitiam* for *tristitiam* (Jn 16:21, *mulier cum parit **tristitiam** habet*, which is the
verse the clause quotes and which its own next words answer). ⭐ That site is worth naming for a
reason bigger than the count: **four earlier readers walked past it**, and it is the class
runbook 4a exists for — *the plate hands a lemma-and-gloss commentary its own contradicting
neighbour.* ⛔ **Re-derive these numbers before deploy; do not read them off this table.**

**Markers, by stint (chunks · `[var:]` · `[sic:]` · `[cj:]` · `[d:]` · `[ed:]` · `[n:]`):**

| stint | cols | var | sic | cj | d | ed | n |
|---|---|---|---|---|---|---|---|
| 0000–0005 | 0063A–0078D | 6 | 0 *(+1 from 4a: @0077D)* | 0 | 0 | 0 | 52 |
| 0006–0011 | 0079A–0096B | 13 | 0 | 0 | 0 | 0 | 58 |
| 0012–0015 | 0096C–0107B | 12 | 1 | 1 | 0 | 0 | 30 |
| 0016–0021 | 0107C–0123D | 6 | 0 | 0 | 0 | 0 | 26 |
| 0022–0026 | 0124A–0137C | 13 | 2 | 0 | 0 | 0 | 42 |
| 0027–0031 | 0137C–0150A | 7 | 0 | 1 | 0 | 0 | 30 |
| 0032–0037 | 0150B–0166D | 7 | 1 | 0 | 0 | 0 | 22 |
| 0038–0041 | 0167A–0178D | 9 | 0 | 1 | 0 | 0 | 25 |
| **work (stints)** | **0063A–0178D** | **73** | **4** | **3** | **0** | **0** | **285** |
| **+ step 4a so far** | | | **+1** | | | | |

Zero `[d:]`, zero `[ed:]`, zero `[nt:]`, zero `[cn:]`. **`plate-gate.mjs 9002` passes on all of
them** — 78 markers standing on 64 recorded reads at the time of writing.

**The `[sic:]` — each on two witnesses and each quoting a word still verbatim in our Latin:**
@0097A *nomo* · @0131A *Excaevavit* · @0135B *Constristatus* · @0158D *in est*, and from the
polarity pass @0077D *justitiam*.
⚑ Four or five in 45,922 words is what this class looks like when it is measured. Four of the eight
stints report **zero**, and each says why: every defect they found was the digitization's, and at
those sites the marker cannot even be written — it would fail the verbatim-substring guard and
would accuse Migne of Corpus Corporum's error.

**The three `[cj:]`:** @0107B *Dei* for *diei* · @0146B *Jesus* for *laesus* · @0170B *non occidant*
for *occidant*. All three keep Migne's word in the English and stand the conjecture beside it.

**TEI patches — 26 sites, and every one of the 26 is Corpus Corporum's. None is Migne's.**

| stint | sites | of which non-words | of which punctuation |
|---|---|---|---|
| 0000–0005 | 3 | 2 (`oerum`, `pesecutio`) | 1 |
| 0006–0011 | 2 | 1 (`maledieta`) | 1 |
| 0012–0015 | 2 | 2 (`eleborata` certain, `fiili` proposed) | 0 |
| 0016–0021 | 7 | 4 (`vocure`, `neguitiam`, `Respodens`, `canantes`) | 3 |
| 0022–0026 | 3 | 1 (`Scaagesimum`) | 2 |
| 0027–0031 | 4 | 3 (`Etiam`→`Eliam`, `enimus`, `eum`→`cum`) | 1 |
| 0032–0037 | 2 | 1 (`oriminis`) | 1 |
| 0038–0041 | 3 | 1 (`Pro quam`→`Pro qua`) | 2 |
| **work** | **26** | **15** | **11** |

⭐ **One of the 26 is the load-bearing one: @0142A `Etiam` for `Eliam`.** With `Eliam` restored the
lemma matches Mt 16:14 word for word — so until the patch lands the phrase search fails, the lemma
looks divergent, and every instinct points at Migne's plate. That is launch-brief §7's **fifth
cause** of a failed ✓, and it is the only one that reads as evidence against Migne while being
evidence against us.

**Press variants left UNMARKED — 20 sites, no `[sic:]`, no patch, crux only.** The two copies are
two *printings*, not two photographs, so where both are clean there is no one to accuse:
@0073A `Bethehem`/`Bethlehem` · @0121D and @0122A terminal stops · @0125A
`accipendum`/`accipiendum` · @0131B a terminal stop · @0153A `aliqui`/`alii` · @0154C
`patrisfamilias`/`patris familias` · @0155D `restitum`/`vestitum` · @0157C `Cujus`/`cujus` ·
@0158B `proselytum`/`Proselytum` and `tollendo. Exemplo`/`tollendo, exemplo` · @0164B
`quinquepertita`/`quinque pertita` · @0172A `rerurrectionis`/`resurrectionis` · @0172C the `VERS. 4.`
dash · and **six further `VERS. n.--` dash disagreements** in cols 0124A–0137C, in **both**
directions. ⛔ **The dash is not stable type and is evidence of nothing** — never mark it, never
patch it, and never let its presence or absence decide whether a span is a verse lemma. The `VERS.`
number and the CAPUT head decide that.

**Plate reads — 64 read records** in `data/plate-reads.json`, covering the whole work on both
witnesses, corner numbers checked first on every page, and **the negatives recorded**: the feet of
every page in cols 0096–0108 and of the last page of the work were inspected on both copies and
found empty. ⛔ That check exists because of @0103C, where the archive copy's raised asterisk and
empty page-foot **fabricated an apparatus layer in Migne's own editorial voice** and Gallica prints
a plain colon. **Never recover a `[cn:]` or an `[nt:]` from one witness.**

**Lemma spans — 1,826 across the work, and all eight counts check.** 204 · 241 · 161 · 335 · 211 ·
217 · 268 · 189 = 1,826, which is `data/briefs/9002-lemmata.counts.json`'s master total, and **every
stint counted its own Latin against its own file's header and reported the number.** The 9001
mis-split does not recur here.

**The eight `⚑ MATCHES ONLY ELSEWHERE` candidates, all adjudicated, none left open:**
@0080B, @0093A, @0095B, @0106B, @0161D **real divergences** (`[var:]` fired) · @0157D a **clipped
lemma** (convention 3, not a divergence) · @0169D a **word division** (`Etsi`/`Et si`, not a
divergence and not a `[sic:]`) · @0165B a **declined** connective (§1.5(a)).

## 1.9 What could NOT be reconciled

**Nothing was left unreconciled that bears on the English.** Two things are recorded as open rather
than settled, and both are open at the source, not at the merge:

1. **@0097D `fiili` for `filii`** is filed by the 0012–0015 stint as **PROPOSED, NOT CERTAIN — read
   it again before applying.** It is the only one of the 26 patches not marked certain, and it must
   not be applied on this file's authority.
2. **The 26 patches are pending.** Until they land, our Latin column prints in fifteen places a word
   Migne did not print, and the English renders the plate at those places. That divergence between
   the two columns is deliberate and documented per site in
   `data/briefs/9002-PENDING-TEI-PATCHES-*.md`; it is not a defect in the English.

---

*The eight stint files follow, preserved unedited. Headings are demoted one level; nothing else is
changed. Where a stint file's ruling has been sharpened or corrected above, §1 says so by column
and the stint's own argument is still here to be argued with.*


---

# §2 · STINT 0000–0005 (cols 0063A–0078D)

*Preserved from `cruces-0000.md`, unedited; headings demoted one level. Companion files: `data/briefs/9002-PLATE-READS-0000.json`, `data/briefs/9002-PENDING-TEI-PATCHES-0000.md`, `data/briefs/9002-lemmata-0000.txt`.*

## 9002 — cruces, stint 0000–0005 (cols 0063A–0078D)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0000–0005: `PROLOGUS.`
through `CAPUT II. (cont.)`, 5,831 Latin words, the opening of the work.

Companion files from this stint: `data/briefs/9002-PLATE-READS-0000.json` (every page opened, both
witnesses) and `data/briefs/9002-PENDING-TEI-PATCHES-0000.md` (three sites where our Latin has
departed from Migne).

---

### (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Markers.** Zero `[sic:]`, zero `[cj:]`, zero `[d:]`, six `[var:]`.

**2. When a `[var:]` fires.** Migne's quoted scripture takes a `[var:]` where his words **assert
something different** from the received text — a *substitution*. It does **not** fire where he
merely **shortens** a verse (an ellipsis, which is what an abridged recension does constantly and
which asserts nothing new), nor where **Migne's own gloss already discusses the divergence**.

That second decline class is Pattern 18a's ❌ *"anything the EDITION already glosses"* carried
across to Pattern 14, and it does real work here: this book twice tells the reader in as many
words that it is not quoting the Vulgate (@0072A, @0078D). A marker there would tell him twice and
blur whose observation it was — exactly the argument Pattern 12 makes about Migne's own `( sic )`.
I would rather be argued out of this than have applied it silently, so both sites are itemized
below with what they would have said.

I have **not** applied the ellipsis decline to the *reverse* case: where Migne shortens a verse and
the abbreviation itself is what the gloss argues from, that is a substitution in effect and it
fires (@0075B *Puer* for *Parvulus*).

**3. When a single-word `[var:]` fires.** Launch brief §2 requires a witness of its own, because a
one-word divergence has two possible owners. Two of my six are single words (@0069A *invocavit*,
@0069B *adjuvit*), and **for both, the second owner is eliminated: I read the word on both
witnesses.** Ownership is settled by the plate, not by the argument, which is the whole point of
reading inline. Both also satisfy the other limb — the gloss leans on the form.

**4. Proper-name orthography is not a divergence.** Migne's *Esrom / Josaphat / Eliachim / Sadoch /
Nazareus* against the Clementine's *Esron / Josophat / Eliacim / Sadoc / Nazaraeus* are spellings
of transliterated Hebrew names, not different readings, and none changes what any sentence says.
All five are listed below as checked and declined. **Firing on these would bury the four real
divergences in noise**, which is Pattern 9's argument, and it would also misrepresent the class:
these are not the Douay-conformation defect 7a″ exists to catch, since nothing in the gloss turns
on the letter.

**5. Every claim about the type rests on two witnesses.** I read all eight pages of my range on the
archive PDF **and** all eight leaves on Gallica, corner numbers first on each. **This changed the
answer twelve times** — see §(e). Nothing in this file rests on one copy.

**6. Where the plate and our twin disagree, the English renders the plate** and the site is filed
as a pending TEI patch. Three sites, all of them Corpus Corporum's error, none of them Migne's.

**7. The vocabulary axes bind, including where they read oddly.** `sacramentum` → sacrament even
where the sense is "sacred sign" (see §(d) 1); `gentes` → Gentiles in the *Judaei/gentes* typology
and *nations* in a generic quoted verse; singular `gens` → nation. The gloss's own voice is not
archaised (`dicit`/`ait` → *says*); `thou` is singular and `you` plural throughout.

---

### (b) SPAN COUNT — 204 against 204, and the count is paragraph-bounded

`data/briefs/9002-lemmata-0000.txt` declares **204 spans** for chunks 0000–0005.

Counting my own Latin **paragraph by paragraph** (per the file's own warning that a bare total can
agree falsely when two errors cancel):

| chunk | italic `*…*` | guillemet `« … »` |
|---|---|---|
| 0000 | 1 | 0 |
| 0001 | 69 | 0 |
| 0002 | 57 | 0 |
| 0003 | 10 | 0 |
| 0004 | 45 | 0 |
| 0005 | 22 | 0 |
| **total** | **204** | **0** |

**204 = 204, exact.** No paragraph in my range carries an odd number of asterisks and no paragraph
carries an unmatched guillemet, so the two failure modes that make a bare total lie are both
excluded. Matthew is an **italic-lemma** book, like Luke and Mark and unlike Genesis: there is not
one guillemet in 5,831 words.

⚑ One note on the file's own header, which says "bands 0065A–0078D" while my range is 0063A–0078D.
That is not a mis-split: the Prologus (0063A–0065A) carries exactly one marked span, the rubric
*Incipit Evangelium secundum Matthaeum.*, and it is listed, at 0065A, which is where it stands.
The inventory is complete for my range.

---

### (c) THE LEMMA DIVERGENCE LIST — all 204 spans, collated against `sources/vulgate/clementine-flat.txt`

Migne's citation sigla (`(Ose. XI)` for what is Mt 12:18, `(Psal. CXXI)` forms, `(Ibid. …)`) pass
through verbatim under convention 4 and are **not** treated as divergences; a wrong siglum is
Migne's attribution practice, and `refDisplay` keeps it while `refKey` resolves it.

#### C1. The six that FIRED — substitutions the gloss builds on

| col | Migne prints | received text | why it fired |
|---|---|---|---|
| **0067D** | *Dabo ipsi Roboam **tribum Judam**, ut remaneat lucerna David cunctis diebus **in Israel*** | 3 Rg 11:36 *filio autem ejus dabo **tribum unam**, ut remaneat lucerna David servo meo cunctis diebus coram me **in Jerusalem*** | Two substitutions, and **the gloss argues from the second one**: *"nec Israel cunctis diebus exstitit, nec de David post Christum dux aliquis **in Israel** fuit … Christus lucerna est aeterna in coelesti **Israel**."* The whole refutation of the literal sense turns on a word the Vulgate does not have there. |
| **0068C** | *Fidelis Dominus in omnibus **viis** suis, qui convocat filios, ut gallina pullos suos* | Ps 144:13 *Fidelis Dominus in omnibus **verbis** suis* | A substitution with a clean witness of its own: *in omnibus viis suis* is **Ps 144:17**'s clause (*Justus Dominus in omnibus viis suis*), four verses down the same psalm, so this is a conflation and nameable as one. The hen-clause is in no psalm at all (cf. Mt 23:37); the marker says so. |
| **0069A** | *Ipse **invocavit** me: pater meus es tu* | Ps 88:27 *Ipse **invocabit** me* | Future → perfect in a messianic proof-text. One letter, so §2's bar applies — and it is met on the harder limb: **read on both witnesses** (archive p.40, Gallica f35), so the second possible owner (our transcription) is eliminated. |
| **0069B** | *Ecce Deus **adjuvit** me, Dominus susceptor est animae meae* | Ps 53:6 *Ecce enim Deus **adjuvat** me, et Dominus…* | Present → perfect. **Read on both witnesses.** And the gloss leans on the aspect: the lemma is *Azor. **Adjutus.*** — "Helped", a perfect participle, which Migne's perfect answers and the Vulgate's present does not. |
| **0074B** | *Rex* injustus *omnes ministros impios habet* | Pr 29:12 ***Princeps qui libenter audit verba mendacii**, omnes ministros **habet impios*** | *Rex* stands where the received text has *Princeps*, and the subject-clause is replaced outright. ⚑ Migne sets *injustus* in **roman between his own italics** — i.e. he is himself flagging that word as supplied, which is why the marker names *Rex*, not *injustus*, as the divergence. |
| **0075B** | *Puer natus est nobis.* | Is 9:6 ***Parvulus** enim natus est nobis* | The purest case in the range. **The gloss expounds the substituted word itself**: *"Saepe **puer** nominatur, ut eum agnoscant, de quo dictum est: Puer natus est nobis."* Conforming this to "a little one" would delete the argument. |

#### C2. DECLINED — Migne shortens the verse (ellipsis), asserting nothing new

Each was collated word by word; the words Migne *does* print agree with the received text.

- **0067B** *quia nihil ad perfectum adduxit lex* — Hbr 7:19 has *nihil **enim***. *quia* is the
  splice into his own sentence; both are causal and the clause is unchanged.
- **0067B** *Egredietur virga de radice Jesse* — Is 11:1 opens *Et egredietur*.
- **0068B** *Non videbo Dominum Deum,* … *non aspiciam hominem ultra,* etc. — Is 38:11 continues
  *in terra viventium*; Migne's own `etc.` marks the cut.
- **0068C** *Omnium iniquitatum ejus non recordabor* — Ez 18:22 has *quas operatus est* between.
- **0068C** *Dirigatur oratio mea sicut incensum*, etc. — Ps 140:2 continues *in conspectu tuo*.
- **0069A** *Pater sancte, serva eos quos dedisti mihi* — Jo 17:11 has *in nomine tuo* after *eos*.
- **0069B** *Justus Dominus et justitias dilexit* — Ps 10:8 opens *Quoniam justus*.
- **0069B** *Omnis qui videt Filium … habebit vitam aeternam, et ego resuscitabo eum*, etc. —
  Jo 6:40 has the purpose-clause *ut … **habeat*** and continues *in novissimo die*. With Migne's
  *ut* gone, the indicative *habebit* is what the free-standing sentence requires; that is quoting
  practice, not a reading.
- **0069C** *Sic Deus dilexit mundum, ut Filium suum daret* — Jo 3:16 has *Sic **enim*** and
  ***unigenitum*** before *daret*. ⚠ **The nearest thing in this range to a decline I could be
  argued out of**, since *unigenitum* is a substantive word to lose from a famous verse. It stays
  declined because the clause Migne prints says what it says: the gloss adduces it for *daret*
  (*Mathan. Donans vel donatus … qui dedit bona hominibus*), and nothing in the argument touches
  the only-begottenness.
- **0069B** *Deus meus ut quid dereliquisti me* — Mt 27:46 doubles *Deus meus*. **The single
  occurrence is deliberate**: the lemma being glossed is *Eliud, id est, Deus meus*, so one is the
  point. Declined on the sense, not merely on the ellipsis.
- **0070B** *Unxit te Deus tuus.* — Ps 44:8 / Hbr 1:9 read *unxit te Deus, **Deus** tuus*. A
  contraction, introduced only as *de quo propheta*, and the argument is on *unxit*.
- **0072C** *Donec ponam inimicos tuos scabellum pedum tuorum* — Ps 109:1 verbatim. No divergence.
- **0075C** *Ego sum via, veritas, et vita.* — Jo 14:6 has *via, **et** veritas, et vita*.
- **0076B** *ingredieturque Aegyptum* — Is 19:1 has *et ingredietur*; a `-que` for an `et-`.
- **0077D** *Vos plorabitis,* etc. — Jo 16:20 has *quia plorabitis, et flebitis **vos***; the
  pronoun is fronted, the person is unchanged.
- **0074D** *si Moysen et prophetas non audiunt: neque si quis ex mortuis,* etc. — Lc 16:31
  verbatim as far as Migne's `etc.`
- **0076A** *In Aegyptum, et erat ibi,* — the lemma splices across the Mt 2:14/2:15 verse break
  (*secessit in Aegyptum : et erat ibi*). That is why the pre-scan marked it ⚠; it is not a
  divergence.
- **0068A** *Ego ero illi in Patrem, quia tanquam Dominus omnia quaecunque voluit fecit* — a
  **conflation**, not a divergence: the first half is 2 Rg 7:14 (*Ego ero **ei** in patrem*), the
  second Ps 113:11 (*omnia quaecumque voluit fecit*), with *quia tanquam Dominus* Migne's own
  splice. **Declined because a `[var:]` names one received reading and there is no single verse
  here to name**; the crux is the right home. Recorded so a later reader does not read the ⚠ in the
  pre-scan as an unexamined site.

#### C3. DECLINED — Migne's own text already glosses the divergence

- **0072A** *Ecce virgo in utero habebit* `[n: (Isa. VII)]`. The words are Mt 1:23's; Is 7:14 reads
  *Ecce virgo **concipiet***. **A `[var:]` would have said exactly what Migne says three lines
  later in his own voice:** *"Sensum Isaiae sequitur, non verba. Pro concipiet, ponit: In utero
  habebit: et vocabunt, pro vocabis, vel vocabitur."* He names the divergence, both halves of it,
  and gives his reason. Declined.
- **0078D** *Nazaraeus de radice ejus ascendet* `[n: (Isa. XI)]`. Is 11:1 reads ***flos** de radice
  ejus ascendet*. This is the sharpest single divergence in the range and it is declined for the
  same reason: **Migne introduces it as *"eisdem verbis in Isaia juxta Hebraicam veritatem"***, i.e.
  he tells the reader in advance that he is quoting the Hebrew and not the Vulgate. ⚑ Note the
  gloss twelve lines above expounds *flos campi* and *unde flos interpretatur*, so an English reader
  meets *flower* and *Nazarene* in the same column with Migne's own explanation between them.

#### C4. CHECKED AND AGREEING WITH THE CLEMENTINE EXACTLY

Verse lemmata, verbatim: **Mt 1:1** *Liber generationis* · *Filii David* · *Filii David filii
Abraham* (Migne prints no comma where the Vulgate has one; punctuation, carried as printed) ·
**1:2** *Abraham genuit Isaac: Isaac autem genuit Jacob* (Migne's colon for the Vulgate's stop) ·
*Judam et fratres* · **1:3** *Judas autem* · **1:4** *Aram autem* · **1:5** *Salmon autem genuit
Booz* · *Booz autem* · *Ex Ruth* · *Jesse autem* · *Regem* · **1:6** *David autem rex* · *Uriae* ·
**1:7** *Salomon autem* · *Roboam* · *Abias* · **1:8** *Josaphat* · *Joram autem genuit* · **1:9**
*Ozias autem* · *Ezechias* · **1:10** *Manasses* · *Amon* · **1:11** *Josias* · **1:12**
*Jechonias* · *Salathiel* · **1:13** *Zorobabel autem genuit Abiud* · *Abiud* · *Eliachim* ·
**1:14** *Azor* · *Sadoch* · *Achim* · *Eliud* · **1:15** *Eleazar* · *Mathan* · **1:16** *Joseph* ·
*Virum Mariae* · **1:17** *Omnes itaque* · **1:18** *Christi autem generatio* · *Sic erat* · *Cum
esset desponsata* · *Antequam convenirent* · *Inventa est in utero habens* · **1:19** *Justus* ·
*Et nollet eam* · **1:20** *Haec autem eo cogitante* · *Ecce angelus Domini* · *Fili David* · *Noli
timere* · *Conjugem* · *In ea natum est* · *De Spiritu sancto est* · **1:21** *Pariet* (×2) · *Et
vocabis nomen ejus Jesum* · *Ipse enim* · **1:22** *Hoc autem* · *Ut adimpleretur* · **1:23** *Ecce
virgo* (×2) · *In utero habebit* · *Emmanuel* · **1:24** *Exsurgens autem Joseph* · *Fecit sicut
praecepit* · *Angelus Domini* · *Et accepit conjugem* · **1:25** *Donec peperit* ·
*Primogenitum* · **2:1** *Cum ergo natus* · *Cum ergo* · *In diebus* · *Venerunt* · **2:2** *Ubi
est, qui natus est rex* · *Vidimus enim stellam* · **2:3** *Audiens autem Herodes* (×2) · *Turbatus
est* · *Cum illo* · **2:4** *Et congregans omnes principes sacerdotum* · *Ubi Christus nasceretur* ·
**2:5** *In Bethlehem Judae* · **2:6** *Et tu, Bethlehem* · **2:7** *Clam vocatis Magis* · **2:8**
*Adorem eum* · **2:9** *Et ecce stella quam viderant* · **2:10** *Gavisi sunt gaudio magno* ·
**2:11** *Et intrantes domum* · *Puerum cum Maria matre ejus* · *Adoraverunt eum* · *Et apertis* ·
**2:12** *Et responso accepto* · *Per aliam viam* · **2:13** *Accipe puerum* · **2:14** *Qui
consurgens* (×2, at 0075D and 0078A) · *Nocte* · **2:15** *Ex Aegypto vocavi* · **2:16** *Tunc
Herodes videns* · *Occidit omnes pueros* · *Et in omnibus finibus ejus* · *A bimatu* · **2:17**
*Tunc adimpletum est* · **2:18** *Vox in Rama* (×2) · *Audita* · **2:19** *Defuncto autem Herode,
ecce* · **2:20** *In terram* · *Defuncti* · **2:22** *Timuit illo ire* · *Secessit in partes* ·
**2:23** *Nazareth* · *Per prophetas*.

Inline scripture, verbatim: *et benedicentur in semine tuo omnes gentes terrae* (Gn 22:18) ·
*Ego hodie genui te* (Ps 2:7) · *Ecce puer meus quem elegi* (Mt 12:18, under Migne's `(Ose. XI)`) ·
*Excelsus super omnes gentes Dominus* (Ps 112:4) · *Voluntarie sacrificabo tibi* (Ps 53:8) ·
*in novissima tuba* (1 Cor 15:52) · *Ecce Dominus Deus in fortitudine veniet* (Is 40:10) · *Emitte
agnum, Domine, dominatorem terrae* (Is 16:1) · *Ecce odor filii mei sicut odor agri pleni*
(Gn 27:27) · *Dominus fortis et potens* (Ps 23:8) · *Speciosus forma prae filiis hominum*
(Ps 44:3) · *Similis ero Altissimo* (Is 14:14) · *Nemo ascendit in coelum…* (Jo 3:13) · *Dispone
domui tuae, quia morieris tu et non vives* (Is 38:1) · *resurrectio et vita* (Jo 11:25) ·
*Nuntiabo nomen tuum fratribus meis* (Hbr 2:12 verbatim, under Migne's Psalm siglum — the wording
is Hebrews', not Ps 21:23's *Narrabo*; his citation, his practice, carried) · *Deus meus sperabo in
eum* (Ps 90:2) · *Ecce Dominus ascendet super nubem levem* (Is 19:1) · *Tristitia vestra vertetur
in gaudium* (Jo 16:20).

⚑ **Two ✓ in the pre-scan that a careless reader would have taken as clearance**, checked and
sound: *Ecce puer meus quem elegi* scores off **Mt 12:18** inside a commentary on Mt 1:4 — it is
Migne's proof-text, correctly quoted, under a wrong siglum; and *in novissima tuba* scores off
**1 Cor 15:52**, which is right, in a gloss on Rahab. Neither is a harmony parallel answering for
the wrong evangelist, which is the failure the brief warns of.

#### C5. NOT SCRIPTURE — name-etymologies and technical tags, not collatable

The single-word spans the pre-scan could not search are, with two exceptions, **Jerome's
onomastic glosses**, not quotations, and no Vulgate collation applies to them: *Genuit* · *genuit* ·
*Qui fuit* (Luke's genealogical formula) · *Christus electus* · *excelsus* · *sensibilis* · *fames* ·
*beatitudo* · *impetus* · *videns* · *festinans* · *lux mea Deus* · *pacificus* · *Judicans* ·
*judicium Dei* · *fidelis* · *nutritius* · *salus Domini* · *incensum* · *resurrectio Domini* ·
*praeparatio Domini* · *pater meus* · *frater meus iste* · *Deus meus adjutor* · *germen novellum* ·
*flos campi* · *flos*. The two exceptions are `*Incipit Evangelium secundum Matthaeum.*` (0065A), a
rubric, and `*usque ad*` ×8 (below).

⚠ `*Deus meus adjutor.*` scores ✓ Ps 17:3 in the pre-scan. **It is not a quotation of Ps 17:3** —
it is the etymology of *Eleazar*, and Migne quotes Ps 90:2 immediately after it as the proof-text.
Recorded because the ✓ invites the opposite reading.

#### C6. `usque ad` — the `etc.` splice test, run per occurrence

**12 occurrences. 8 are the formula, 4 are ordinary Latin.** Every one of the eight formula
occurrences is preceded, immediately, by `etc.,` and stands inside an italic span; all eight are
rendered **"as far as"**:

@0065A (*ut liber Genesis, etc.,*) · @0070C (*et ut per Joseph, etc.,*) · @0072D (*locus et tempus,
etc.,*) · @0073A (*videatur impletum, etc.,*) · @0073A (*praevalet namque, etc.,*) · @0074A (*ad
agnitionem veritatis, etc.,*) · @0075B (*munera aperta, etc.,*) · @0075D (*Dominum majestatis,
etc.,*).

The four ordinary uses carry no `etc.` and stand outside every italic span; each is rendered by
sense and **is named here because the brief requires a departure from the axis to name its Latin**:

- **@0065D** *A baptismo enim incipiens **usque ad Deum** ascendit* — Luke's genealogy ascending;
  rendered "ascends **as far as** God". ⚑ The English words coincide with the formula's, by
  accident of sense and not by application of the axis.
- **@0068D** *Omnes qui a David **usque ad transmigrationem** Babylonis numerantur* — "from David
  **to** the transmigration".
- **@0076D** *a filio unius noctis **usque ad** filium duorum annorum* — temporal, "from a son of
  one night **to** a son of two years".
- **@0077A** *gementis **usque ad** solium superni ascendit judicis* — spatial, "ascends **to** the
  throne".

A fifth, **@0077B** *auditus est **usque** Rama*, is bare *usque* and is rendered "as far as Rama".

---

### (d) CRUCES OF THIS RANGE, BY COLUMN

#### 1. @0063B, @0064A, @0064B, @0065A, @0066A, @0076A — `sacramentum` under the axis, and it reads oddly

The `mysterium`/`sacramentum` 1:1 axis is settled and I applied it without exception. **It is
worth saying plainly what that costs in this work**, because the next Matthew stint will meet the
same thing and should not silently re-open it. Matthew's Prologus and CAPUT I use *sacramentum* in
its patristic sense of a **sacred sign or hidden significance**, not of a rite:

- @0064A *propter virtutem **sacramenti*** → "on account of the power of the sacrament" (why the
  gospels are four and not more);
- @0066A *ne ultra numerum **sacramenti*** → "beyond the number of the sacrament" (the twelve);
- @0064B *scribens **sacramenta** Divinitatis* / @0065A *exprimitur Divinitatis **sacramentum***;
- @0065D *formam **sacramenti** aperit* (Luke's ascending genealogy);
- @0076A *Quod fugit, **sacramenti** fuit non timoris* → "was a matter of sacrament, not of fear".

Set beside them, @0064A *jucundi **mysterii** sibi consciae* and @0074A *tantae visionis
**mysterium*** take "mystery". The distinction the axis preserves is real and visible in the Latin
column; I record the awkwardness rather than smooth it, and I have not invented a third word.

#### 2. @0064A — the unexpressed subject of `nolebant`, and it has no antecedent in the sentence

*unde et aliorum evangelia deciderunt, nec recepta sunt: quia **nolebant** praefinitum numerum
cessari.* Rendered "**they** were unwilling". Naming the "they", as the brief requires: it cannot be
the gospels (neuter plural, and they are the object of the unwillingness), and it cannot be the
authors of the other gospels, which would make the sentence say the apocryphists enforced the canon.
It must be **those who fixed the canon** — the Fathers, the Church. **There is no antecedent
anywhere in the paragraph**, so this is supplied from the argument alone, and I say so here rather
than let a bare "they" pass as though the Latin had named someone.

#### 3. @0065B, @0065C, @0067B, @0070B, @0072B — the evangelist as the unexpressed subject

Repeatedly a third-singular verb has no subject and the subject is **Matthew**, carried from the
head of the chapter: *aperiret* (0065B), *Amplectitur* (0065C), *ponit*/*reservat* (0070B),
*astruit* (0072B), *ponit* (0074C). Each is secure — the paragraphs around them name Matthew
explicitly (*Matthaeus generationem incipit*, *Matthaeus ponit genuit*) — and I record the class
rather than each instance.

⚠ **One in the class is NOT secure and I have not hidden it.** @0067B *Hic autem ideo dicitur
Jesse: **ut sciret** eum venisse.* Rendered "that **he** might know". Two readings construe: the
Jewish reader/hearer (the argument two paragraphs above is about disclosing Christ *Judaeis*), or
Isaac in the following sentence. I took the first, on the run of the argument; the second cannot be
excluded from the words.

#### 4. @0065D — `genuit` against `generavit`, a distinction English has no exponent for

*Matthaeus ponit **genuit**, et non **generavit***. Both are "begot". Rendering both would delete
the sentence's whole point. Migne sets **neither** in italics here (though *genuit* is italic two
clauses earlier), so italicising them in the English would break span parity and put markup on the
page that the plate does not have. **I used our own double quotes** (Pattern 6: `" "` is ours, `« »`
is his) and kept the Latin forms: `Matthew sets down "genuit," and not "generavit,"`. The same
device carries @0072A's *concipiet / vocabunt / vocabis / vocabitur* — there rendered in English
inside our quotes, because Migne's point at that place is about **sense**, not about the Latin
forms as forms.

#### 5. @0067B — a `quae` clause with no verb, and a bracketed supply

*Ruth significat Ecclesiam quae est de Moab … **quae ex patre diabolo et petra deserti** propter
idololatriam de qua Deus suscitavit filios Abrahae.* The second *quae* clause has no predicate.
Read on both witnesses; Migne prints it so. I rendered "which **[was]** of her father the devil",
bracketing the supplied verb, which is the corpus's convention for our own supplied words. The
supply is licensed by Migne's own parallel eleven words earlier: *ex patre diabolo **erat***. No
marker: nothing here is defective type, and an anacoluthon is not a false assertion.

#### 6. @0067C — the negation sits on `solus`, not on the verb (test 2a)

*Non quod **solus** in hac genealogia rex, **sed** quia primus rex de Juda.* The trigger condition
is exactly the launch brief's: a negative, a verb-shaped clause, and a quantifier beside it. **The
`sed` clause proves the host**: David *is* king in this genealogy; what is denied is that he is the
*only* one. Rendered "**Not that he alone is king** in this genealogy, but because he is the first
king of Judah." Recorded as handled, not as a defect — this is the 8990 @0614B class caught rather
than missed.

The same test was run on, and passed by: @0066A *non feminas, sed mares interimebat* (host
*feminas*); @0068B *flevit **non propter longiorem vitam** … sed quia dubitabat* (host is the
cause-phrase — he *did* weep, which is the 8960 @0740B model); @0069D *non Elimelech … sed Obeth
vocavit* (host *Elimelech*); @0070A *non per Mariam, sed per Joseph*; @0071B *non concubitu, sed
affectu*; @0074C *non ex ignorantia, sed ex cordis duritia*; @0076A *sacramenti fuit non timoris*
(host *timoris*); @0076D *non in Judaea tantum, sed ubique*; @0077C *non tam morte translatos, quam
supplicio peremptos*.

#### 7. @0068B — `dubitabat ne` is an indirect question, not a negation

*sed quia **dubitabat ne** promissio Dei impleretur.* Read as a purpose clause this says Hezekiah
feared the promise **would** be fulfilled, which is the reverse of the argument (he is childless and
fears it will fail). **No negative is at stake and none was dropped**: `dubito ne` is the ordinary
"doubt whether" construction, and I rendered "**because he was in doubt whether** the promise of
God would be fulfilled". Recorded explicitly because a negation-counting check will see a `ne` here
and a reader may wonder where it went. It is in "whether".

#### 8. @0068D — `in fide praecedentis` where the parallel wants `in fine`

*unus et idem est **in fide** praecedentis et in principio sequentis*, three lines after *unus …
pater sit **in fine** praecedentis, alter in principio sequentis*. **Read on both witnesses: both
print *fide*.** So it is Migne's, not ours, and Pattern 7 renders it: "one and the same is **in the
faith** of the preceding and at the beginning of the following."

⛔ **A `[cj:]` was weighed and declined, and here is why the rival lost.** *fine* is near-certain on
the parallelism, and the site has the shape Pattern 18 was written for — a real word whose faithful
English is wrong. But 18a's bar is that the English must **assert something false**, and 18a's
explicit ❌ is "a merely awkward or elliptical sentence." "In the faith of the preceding" asserts
nothing the author is arguing against; it is opaque, not false. The ✅ extension for negations and
correlatives does not reach it either: *in principio* is not a correlative whose answering member is
*in fine* in the way 11535 @1231B's *quam* demanded a comparative. **The conjecture lives here, and
in the text stands the printed word.**

#### 9. @0068D — the full stop our twin lost (patch, not marker)

Both witnesses print *sequentis**.** Sed mystice*; our TEI runs the two sentences together. The
English carries the stop, under the plate-where-read rule. Filed as patch 1. Nothing here is
Migne's defect, so no `[sic:]` — and none could be written, since the marker must quote a word that
is in our Latin and the defect is an absence.

#### 10. @0069C — `Heriles` and `libri Dierum`

*viri studiosi ex Judaeis dicti **Heriles**.* Read on both witnesses. A real, well-formed word, and
by the launch brief's own prior a real word that reads oddly is Migne's until a plate says
otherwise — the plate says it is his. (The people usually called *Desposyni*.) Rendered as printed;
no marker. Likewise *ex libris **Dierum*** rendered "from the books of Days", the Hebrew title of
Chronicles, not silently modernised.

#### 11. @0069D — `qui per Mathan descendit de David`

Mathat is said to descend from David *per Mathan*, four words after Mathan has been said to descend
*per Salomonem*; the genealogy wants *per Nathan*. **Both witnesses print *Mathan*.** A real name,
rendered as printed. No `[cj:]`: the sentence is a tangle either way and the reader has the two
lines of descent in front of him.

⚑ The archive copy alone reads *"Mathan, qui per **Solomonen** descendit"* here — a non-word,
refuted by Gallica, and a good illustration of why a one-witness read of this volume is worthless.

#### 12. @0069B — a question Migne closes with a full stop

*Quis alius quam ille qui homo fieri voluit … de quibus **diceret**: Nuntiabo nomen tuum fratribus
meis***.*** Migne prints a **stop**, not a question mark, on a clause that opens *Quis alius quam*.
Pattern 8: **never supply a mark the plate lacks.** The English ends with a stop. Read on both
witnesses. This is the mirror of the class Pattern 8 protects and it costs nothing to obey.

#### 13. @0070C — `Non quod postea convenerint` printed twice, and it is NOT a dittography

> *Non quod postea convenerint: ut si diceremus antequam poenituerit, morte praeventus est. **Non
> quod postea convenerint;** sed ostendit proximum tempus nuptiarum…*

Read on both witnesses; both print both copies. **No `[d: …]` fired**, and the reason matters
because Pattern 11a asks which copy is the intrusion. **Neither is.** The two runs are punctuated
differently and each carries **its own distinct continuation** — the first an analogy (*ut si
diceremus…*), the second the positive explanation (*sed ostendit…*). An eye-skip duplicates a run
*and its tail*; this is the abridgment splicing two glosses on one lemma, which is what the
recension does everywhere. Marking one would quarantine a clause Migne meant.

#### 14. @0071D — `oerum` for `eorum` (patch, not marker), and why the plate decided it

Our twin's *oerum* is a non-word; the same sentence is restated four lines later under a `HIER.`
siglum with *eorum* spelt correctly **in our own twin**. That internal corroboration is textbook,
and by `reference_plate-read-triage` it proves an error exists and says nothing about whose. **Both
witnesses print *eorum*.** Ours. Filed as patch 2, English renders *eorum*, no `[sic:]`.

#### 15. @0074D — an anchor that falls inside a word, and where I put it

Migne's column break at 0074D falls **inside** *promittit* (*Herodes devotionem pro | mittit*).
Splitting an English word is not readable, so the anchor stands one word later: "Herod promises
[0074D] devotion." Recorded because `verify-english` checks anchor presence and order but **not
position** (2b), so a displaced anchor passes silently and only a note like this one makes it
visible. The displacement is one word.

#### 16. @0073A — `Bethehem Judae` is a press variant, and the two copies are two printings

Gallica f37 prints the lemma **`Bethehem`**; the archive p.42 prints **`Bethlehem`**. Both clean,
both normally spaced, and the very next line of **both** copies sets *Bethlehem* correctly three
times. Our twin follows Gallica.

**No `[sic:]`.** A `[sic:]` needs two witnesses and the second witness refutes it. This is 8950
@0171D's *Mititte*/*Mittite* exactly — a difference no ink produces, i.e. **two printings**, which
this volume turns out to have: the line breaks of the two copies diverge from the first page of my
range onward. The English renders the place-name; the fact is here and in the plate-reads file.

#### 17. @0075B — `quem actum esse hominem intelligunt`

Read on both witnesses; both print *actum*. A real word, so Pattern 7 renders it and Pattern 12 has
nothing to wrap: "whom they understand to have been **brought to be** man". The evident reading is
*factum*, and I record the conjecture here rather than in the text. **A `[cj:]` was weighed and
declined**: the rendering is opaque, not false — nobody reads "brought to be man" as a claim the
author is arguing against — and 18a's ❌ covers it. Had I written "made man" I would have made the
repair invisible, which is the 7a class this edition exists to expose.

#### 18. @0076A — two elliptical clauses where I supplied an object

- *nocte ignorantiae his a quibus ipse recessit reliquit incredulis* — *reliquit* has no expressed
  object. Rendered "he left **them** to those unbelieving ones from whom he himself withdrew."
- *Omnigenum Deum monstrat venerantem* — *monstrat* has no expressed object. Rendered "He shows
  **[Egypt]** venerating a God of every kind", bracketing the supply. Egypt is the subject of the
  whole paragraph (*Fugit in Aegyptum*), and the point is Egypt's idolatry against Israel's refusal.
  An alternative parse taking *Deum* as the object and *omnigenum … venerantem* predicatively yields
  nothing the argument uses. Both witnesses print the clause as we have it.

#### 19. @0077D — `Josephus` for Joseph

*ideo **Josephus** intellexit Judaeam.* Both witnesses print *Josephus*, in a paragraph that names
*Joseph* twice in the preceding sentence. A real, well-formed name; rendered as printed; no marker.

#### 20. @0077D — the Pattern 17 payoff, visible without apparatus

*unde dicitur: **Vos** plorabitis, etc., sed additur consolatio: **Tristitia vestra** vertetur in
gaudium.* Both are **plural** (Jo 16:20). Apart from the plural imperative *Nolite timere* at
@0068B, addressed to the apostles, these are the only second-person plurals in 5,831 words —
*vos* once and *vestra* once, both inside this one quotation. Everything else in this range that addresses one person takes **thou** — the angel to Joseph
(*Recognosce … de qua **tu** es*, *Noli timere*, *Et vocabis nomen ejus Jesum*, *eris necessarius*),
the commentator to his reader (*ut eum **cognosceres***, *ut eum **intelligas***, *subaudis*),
Isaiah to Hezekiah (*morieris **tu** et non vives*). So a reader can see, with no apparatus, that
the Church's weeping is addressed to a body and everything else here to an individual.

#### 21. @0075C — `pius` taken two ways, disclosed

*isti **pio** affectu interrogabant* → "with **devout** affection". But at @0070D–0071A *sed et
**pius** dum nollet propalare … ex conscientia castitatis justus, ex timore **pius***, and *nec
**pietas** sine justitia, nec sine **pietate** justitia*, I rendered *pius/pietas* **merciful /
mercy**, because there the word is half of the technical *justitia/pietas* pair on which Joseph's
whole characterisation turns. One Latin word, two English words, in one stint. It is not on any
settled axis; I record the split rather than let it pass, since that is how the axes got made.

#### 22. @0066C — `sensibilis` rendered "perceiving"

*Christus est Salmon, id est, **sensibilis**, quia omnia sentit.* "Sensible" is the traditional
English of the etymology but is now ambiguous in exactly the wrong direction. I rendered
**"perceiving"**, which is what Migne's own *quia omnia sentit* says the name means.

#### 23. Punctuation, band by band — the mechanical test, and what it leaves

Column anchors are verified 1:1, so they partition both twins identically. Comparing marks band by
band across all 66 bands of my six chunks (60 column anchors plus each chunk's head band):

- **question marks: zero mismatched bands** (7 in the Latin, 7 in the English, each in its own band);
- **guillemets: zero, in both** — this book prints none;
- **colons: zero mismatched bands** after I removed four I had supplied (@0065A, @0069C, @0072A, and
  the head band of chunk 0004);
- **semicolons: 10 bands where the English has one more than the Latin, and none where it has
  fewer.** Every one is a comma in Migne that English cannot hold as a comma without splicing.
  **Nothing Migne prints was destroyed anywhere in the range**, which is the direction the test
  exists to catch; and the brief's standing ruling is that comma→semicolon is a rate question, not
  an absence. I have not swept the other way either.

#### 24. Sentence-type marks Migne prints, all carried

Seven question marks, all his, none supplied and none deleted: @0068D (*Sed quare praetermissus est
Joachim…?*), @0069B (*Deus meus ut quid dereliquisti me?*), @0070A (*Quid ad Christum generatio …
cum Christus non ex semine Joseph?*), @0072A (*Sed quomodo tunc est signum?*), @0075B (*Cur non et
Joseph cum Maria inventus est a Magis?*), @0078B (*cur non et Galilaeam…?*), @0078B (*Quaeritur:
quare non timuit Joseph ire in Galilaeam…?*).

⚑ **Pattern 8b was not needed once.** The one *Quaeritur* in the range is already set by Migne
himself as a colon followed by a direct question, so the mark rides as printed with no recasting.

#### 25. Verse addresses — one irregularity, carried

@0075A prints **`VERS. 11.`** with no `.--`, where every other address in the range prints
`VERS. n.--`. Our twin has it so. The archive copy prints a dash there and Gallica does not; a
`.--` is precisely what fading removes, so by the brief's own rule **a verse address may not be
altered on one witness** — and here the witnesses disagree, which is weaker still. Left exactly as
our twin has it. Convention 1 makes the address pass through verbatim in any case, and nothing
machine-readable consumes it.

#### 26. The `⚑ MATCHES ONLY ELSEWHERE` candidates — none in this range

The launch brief lists eight, the first at @0080B. **My range is clean of them**, as the brief
says. I confirm it rather than assume it: no span in cols 0063A–0078D carries that flag in
`9002-lemmata-0000.txt`.

---

### (e) DECLINED-ODDITY LIST — every suspect word I did NOT mark, with its column

**Fourteen of the sixteen entries below are archive-only readings that Gallica refutes.** They are
listed in full because the count is the finding: had I read one witness, this file would carry a
dozen confident claims about Migne's type and **twelve of them would be false**.

| col | the suspicion | why declined |
|---|---|---|
| 0063A | archive prints *ad **memorian** reliquit* (non-word) | **Gallica prints *memoriam***; our twin agrees. Archive ink/press. |
| 0065A | archive prints *Divinitatis **sa cramentum*** (split type) | **Gallica prints *sacramentum***; our twin agrees. |
| 0066C | archive prints *Ipse est **Aminabad*** | **Gallica prints *Aminadab***; our twin agrees, and the correct form stands twice on the same page. |
| 0066C | archive prints *omnes gentes **Domini*** | **Gallica prints *Dominus***, as does Ps 112:4 and our twin. |
| 0065C | archive prints *incipit **ad** exordio promissionis* | **Gallica prints *ab exordio***; our twin agrees. |
| 0066D | archive prints *id est **Eclesiam** de gentibus* (non-word) | **Gallica prints *Ecclesiam***; our twin agrees. |
| 0066D | archive prints *omnes muri corruant, **ei** novissima mors* | **Gallica prints *et***; our twin agrees. |
| 0067A | archive prints *…peccatoribus generandus**.*** with a terminal stop | **Gallica prints none**, nor does our twin. Pattern 8: never supply. The English also stops without a mark. |
| 0068D | Gallica appears to print *tesserat**l**ecadis* | **The archive prints *tesseradecadis***, as our twin does. Ink on the Gallica side this time — the traffic runs both ways. |
| 0069B | archive prints *Dominus **ressuscitans*** | **Gallica prints *resuscitans***; our twin agrees. |
| 0069D | archive prints *qui per **Solomonen** descendit* (non-word) | **Gallica prints *Salomonem***; our twin agrees. |
| 0070D | archive prints *surreperet suspicio **lector.*** | **Gallica prints *lectori***; our twin agrees. |
| 0076B | archive prints *Ex Aegypto**,** vocavi* | **Gallica prints no comma**, nor does our twin. |
| 0077B | archive prints *jam flere **dicat ur*** (split type) | **Gallica prints *dicatur***; our twin agrees. |
| 0077D | archive prints *et Helia et **Henoch*** | **Gallica prints *Enoch***; our twin agrees. |
| 0075A | archive prints `VERS. 11. --`, Gallica prints `VERS. 11.` | Witnesses disagree on a dash; a verse address may not be altered on one witness (§(d) 25). |

#### And the suspicions that were NOT about the archive's ink

| col | the suspicion | why declined |
|---|---|---|
| 0066B | *Phares autem genuit **Esrom*** where Mt 1:3 reads *Esron* | Orthography of a transliterated name (Gk Ἐσρώμ). Nothing in the gloss turns on the letter; the etymology it gives (*sagitta vel atrium*) is of the name, not of the ending. Policy 4. |
| 0068A | *Josaphat* where Mt 1:8 reads *Josophat* | Same class; Migne's is in fact the ordinary form. |
| 0069B | *Eliachim* where Mt 1:13 reads *Eliacim*; *Sadoch* where Mt 1:14 reads *Sadoc* | Same class. |
| 0078B | *quia **Nazareus** vocabitur* where Mt 2:23 reads *Nazaraeus* — and Migne prints *Nazaraeus* himself at 0078C and 0078D | Same class, with the added point that the variation is **within Migne's own column**, i.e. his spelling practice, and both witnesses carry it. |
| 0073A | *Bethehem Judae* — the only real candidate in the range | Press variant, refuted as a plate defect by the archive. §(d) 16, and the pending-patches file. |
| 0068D | *in fide praecedentis* for *in fine* | Real word, both witnesses, `[cj:]` weighed and declined under 18a. §(d) 8. |
| 0069C | *dicti **Heriles*** | Real word, both witnesses, Migne's. §(d) 10. |
| 0069D | *qui per **Mathan** descendit de David* (wants *Nathan*) | Real name, both witnesses, Migne's. §(d) 11. |
| 0075B | *quem **actum** esse hominem intelligunt* (wants *factum*) | Real word, both witnesses; `[cj:]` weighed and declined. §(d) 17. |
| 0077D | *ideo **Josephus** intellexit Judaeam* | Real name, both witnesses. §(d) 19. |
| 0073A | *ut irrationabiles **pastos**, faciat socios angelorum* | Reads roughly, but *pastos* (fed) construes and both witnesses carry it. Rendered "that having fed the irrational he may make them fellows of the angels". |
| 0077D | *cessante persecutione **Ecclesiae** ad coelestia invitatur* | *Ecclesiae* leaves *invitatur* without an expressed subject. Both witnesses. Rendered with "she" supplied from *Ecclesiae* and the class recorded under §(d) 3's rule. |

#### Suspiciously TIDY forms — brief §4's other direction, and a checked negative

The class that leaves nothing to notice is the one where the digitization has **corrected** Migne.
I looked for it deliberately at the places where our Latin reads smoothly in rough surroundings,
and I read whole lines rather than target words. **In this range the answer is: three found, and
all three run the other way** — patches 1–3 are the digitization *corrupting*, not tidying.

⭐ **The negative worth recording** (brief §4 asks for these explicitly): the passage most likely to
have been tidied is @0067B's verbless *quae ex patre diabolo et petra deserti* clause, which is
exactly the shape a transcriber "fixes" — and **both witnesses print it defective, as our twin
has it.** Our transcription is faithful there. Likewise @0068D's *in fide*, @0069D's *per Mathan*
and @0075B's *actum*: four places where our Latin is rough, four places where the plate is rough in
the same way. This volume's digitization drops letters; in my range it did not add any.


---

# §3 · STINT 0006–0011 (cols 0079A–0096B)

*Preserved from `cruces-0006.md`, unedited; headings demoted one level. Companion files: `data/briefs/9002-PLATE-READS-0006.json`, `data/briefs/9002-PENDING-TEI-PATCHES-0006.md`, `data/briefs/9002-lemmata-0006.txt`.*

## 9002 — cruces, stint 0006–0011 (cols 0079A–0096B)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0006–0011: `CAPUT III`
(the Baptist), `CAPUT IV` (the Temptation and the call of the first disciples), and `CAPUT V`
as far as Mt 5:37 — 7,153 Latin words, 15 columns, both plates read.

---

### (a) The policy applied, stated before the findings so it can be argued with

**1. Plates first, and both of them.** Every one of the nine leaves in this range was rendered
from the archive copy at 300 dpi and read column by column with the printed corner numbers checked
first, and **every candidate raised there was then checked at Gallica**. Twenty-one candidates,
twenty refuted, one confirmed. No `[sic:]` is fireable in this range and none is fired. The two
divergences that survived are Corpus Corporum's and are filed as TEI patches
(`data/briefs/9002-PENDING-TEI-PATCHES-0006.md`); the per-page ledger is
`data/briefs/9002-PLATE-READS-0006.json`.

**2. Where the plate was read and our twin diverges, the English renders the plate**
(`translation-style.md` §"What the English translates"). Two sites: @0090D `maledicta` (our twin
prints the non-word `maledieta`) and @0081D the colon after `Ac si dicat`. Both are patched-pending,
and the second is the single deliberate band-level punctuation mismatch in this stint.

**3. `[var:]` threshold — stated, so the declines can be judged against it.** Launch brief §2 rules
that a single-word `[var:]` stands only where the divergence has a witness of its own: either the
gloss argues from the word, or **the form is one that letter-level corruption cannot manufacture.**
I applied the second limb mechanically:

- *fires* — a different word (*Habitantibus*/*sedentibus*, *illi*/*ei*, *autem*/*enim*), a changed
  number carried across two words (*fructus dignos*/*fructum dignum*), an added or restructured
  clause. None of these can be produced by a broken sort.
- *declines* — a one-letter difference in a form that means the same thing (*Abscinde*/*abscide*,
  *Dextera*/*dextra*, *circumibat*/*circuibat*, *supra*/*super*, *Inexstinguibili*/*inextinguibili*,
  *Iota*/*jota*), and a fragment cut at a particle (*enim*, *autem*, *ergo* absent because the
  quotation starts after them).

**13 fired, and every declined span is listed in §c with the reason.**

**4. Vocabulary axes, applied from the first chunk.** `turba` → crowd (0088D *Quadripartitae
turbae* "fourfold crowds"; 0089A *in turba remanere* "in the crowd"); no `multitudo` in the range.
`daemonium` → demon (0095B *incenderent daemoniis*); `diabolus` → devil throughout CAPUT IV;
no `satanas`. `gentes` → **Gentiles** everywhere in this range, because every occurrence sits in the
*Judaei*/*gentes* typology (0080C *excaecatio Judaeorum et gentium*; 0086C the two Galilees;
0086D *in medio gentium*, *vocandi … de gentibus*); `gentiles` → Gentiles (0080D, 0081B);
**the one singular `gens` is the Jewish people and takes "nation"** — 0092B *terminis unius gentis
inclusit*, "within the bounds of a single nation". No `natio`, no `ethnicus`, no `gentilitas`.
`mysterium` → mystery, `sacramentum` → sacrament, 1:1 and never crossed (0081C *incarnationis
mysterium*; 0082A *Evangelii sacramenta*; 0088C *mysterium justitiae*; 0089B *profunditatem …
sacramenti*; 0092C *sacramentis spiritualibus*).

**5. `usque ad` — the `etc.` splice test, applied per occurrence. 34 in the range: 29 formula,
5 ordinary.** The five ordinary ones, each rendered by sense and named here as the axis requires:

| col | Latin | rendered | why not the formula |
|---|---|---|---|
| 0078D | *sed omnes usque ad praedicationem Joannis comprehendit* | "up to the preaching of John" | no `etc.` before it; extent of a span of years |
| 0089A | *quam eadem doctrina usque ad finem saeculi plenius erudiret* | "unto the end of the world" | temporal |
| 0091B | *ut sis salus mea usque ad extrema terrae* | "unto the ends of the earth" | **the verse's own words** (Is 49:6 / Act 13:47), inside a scripture quotation |
| 0095D | *dum a summo usque ad imum* | "from the highest to the lowest" | a *a … ad* range |
| 0095D | *a coelo usque ad capillum* | "from heaven to a hair" | the same range, restated |

**6. Second person by number, not by reverence** (Pattern 17). The range moves between the two
repeatedly and the Latin decides every time: plural **you** for the Pharisees at 0080B
(*deponitis*), for the crowd baptized at 0081B (*baptizo vos*), and for the apostles through
0090D–0092B (*Vos estis sal terrae*, *regite*, *constituatis*); singular **thou** for the individual
worshipper from 0093C to the end (*munus tuum*, *frater tuus*, *tu laesisti*, *reddas*, *jurabis*,
*potes*), for the Son at 0083D (*ut tu … placeas*) and 0082D (*a te*), and inside every singular
scripture address (*Dominum Deum tuum*, *Erue eum*, *angelis suis mandavit de te*).

**7. Nothing supplied.** Where Migne's sentence lacks a word English cannot do without, the English
is left as broken as the Latin and the site is logged in §d — three of them, at 0079B, 0083D-side
0084A, and 0094B. **No bracketed conjecture stands in the running text anywhere in this stint.**

---

### (b) Span count against the brief's total

`data/briefs/9002-lemmata-0006.txt` heads its inventory **241 spans, 0 open-ended**.

Counted in my own Latin, chunks 0006–0011, both whole-file and **paragraph-bounded** (the brief
requires both numbers, because an unmatched delimiter defeats a counter in either direction):

| | 0006 | 0007 | 0008 | 0009 | 0010 | 0011 | **total** |
|---|---|---|---|---|---|---|---|
| italic `*…*`, whole file | 46 | 8 | 63 | 19 | 56 | 49 | **241** |
| italic `*…*`, paragraph-bounded | 46 | 8 | 63 | 19 | 56 | 49 | **241** |
| guillemet `« … »` | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

**241 = 241, on both counts, with 482 asterisks and zero guillemet characters in the range** — so
the two figures cannot have cancelled a pair of errors. Matthew is an italic-lemma book, like Luke
and unlike Genesis. The cut is clean: the file opens at `[0078D] VERS. 1.-- *In diebus autem.*`,
which is chunk 0006's first span, and closes at `[0096B] VERS. 37.-- *Est, est; non, non.*`, which
is chunk 0011's last.

---

### (c) The lemma divergence list — all 241 spans, in order, declines and reasons included

The `✓ / ⚠ / ⚑` column is the brief's mechanical pre-scan; the last column is my verdict after
reading the line. ⛔ **A ✓ was never taken as clearance**: the launch brief's warning that in a
gospel the harmony answers for the wrong verse is the reason §c reads the printed references rather
than the ticks, and it caught @0087A *Habitantibus in regione*, which carries no `VERS.` address
and therefore never showed as ⚑ at all.

| col | span | pre-scan | verdict |
|---|---|---|---|
| 0078D | `VERS. 1.-- *In diebus autem.*` | ✓ 1Par 5:10, Dn 2:44, Mt 3:1, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0078D | `*In diebus.*` | ✓ 1Mcc 1:12, 1Mcc 2:1, 1Mcc 5:55, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0078D | `*Praedicans.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0079A | `*In deserto Judaeae.*` | ✓ Mt 3:1 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079A | `VERS. 2.-- *Poenitentiam.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0079B | `*Poenitentiam agite.*` | ✓ Mt 3:2, Mt 4:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079B | `*Regnum coelorum.*` | ✓ Mt 3:2, Mt 4:17, Mt 5:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079C | `*Appropinquavit enim,*` | ✓ Mt 3:2, Mt 4:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079C | `VERS. 3.-- *Vox clamantis.*` | ✓ Is 40:3, Jo 1:23, Lc 3:4, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079C | `*Paravi lucernam Christo meo [n: (Psal. CXXXI)]*` | ✓ Ps 131:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079C | `*In deserto.*` | ✓ 1Cor 10:5, 1Mcc 2:31, 1Mcc 9:62, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `*Viam Domini.*` | ✓ Act 18:25, Act 18:26, Act 19:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `VERS. 4.-- *Ipse autem Joannes.*` | ✓ Mt 3:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `VERS. 5.-- *Tunc exibat ad eum,*` | ✓ Mt 3:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `*Baptizabantur ab eo in Jordane:*` | ✓ Mt 3:6 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `*descensio*` | — single word, check in place | Not scripture — the gloss's own etymology of *Jordanis*. Rendered "*a going down*". |
| 0080A | `VERS. 6.-- *In Jordane.*` | ✓ 4Rg 5:10, 4Rg 5:14, Mc 1:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080A | `*Confitentes.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0080A | `VERS. 7.-- *Multos Pharisaeorum,*` | ✓ Mt 3:7 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080B | `*Progenies viperarum,*` | ✓ Mt 3:7, Mt 12:34 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080B | `VERS. 8.-- *Facite ergo fructus dignos. [n: (BEDA.)]*` | ⚑ MATCHES ONLY ELSEWHERE — Lc 3:8  (lemma is Mt 3) — CHECK | **⚑ ADJUDICATED — `[var:]` FIRED.** Mt 3:8 reads *fructum dignum* (sing.); Migne prints the plural, confirmed on BOTH witnesses. See §d. |
| 0080C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0080C | `VERS. 9.-- *Dico enim.*` | ✓ Lc 3:8, Lc 7:28, Lc 10:24, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080C | `*De lapidibus.*` | ✓ 3Rg 6:7, 3Rg 7:10, 3Rg 7:12, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080D | `VERS. 10.-- *Jam enim securis.*` | ✓ Lc 3:9, Mt 3:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080D | `*Securis.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0080D | `*Posita est:*` | ✓ Apc 21:16, Gal 3:19, Is 21:4, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081A | `*Ad radicem.*` | ✓ Ex 32:19, Lc 3:9, Mt 3:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081A | `*Ad radicem.*` | ✓ Ex 32:19, Lc 3:9, Mt 3:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `*Omnis ergo arbor,*` | ✓ Lc 3:9, Mt 3:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `VERS. 11.-- *Ego quidem.*` | ✓ 1Cor 1:12, 1Cor 3:4, 1Cor 5:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `*Ego quidem baptizo vos in aqua.*` | ✓ Mt 3:11 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `*Post me venturus est.*` | ✓ Jo 1:15, Jo 1:27, Mt 3:11 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `*Fortior me est.*` | ✓ Mt 3:11, Nm 22:6 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081C | `*Cujus non sum,*` | ✓ Act 13:25, Lc 3:16, Mc 1:7, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082A | `*Et vos mundi estis propter verbum quod locutus sum vobis [n: (Joan. XV)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Jo 15:3 reads *Jam vos mundi estis propter **sermonem quem** locutus sum vobis*. Migne prints *Et … **verbum quod***, and the gloss argues from *verbum* ("baptizat in verbo"). Not letter-level. |
| 0082A | `*Mundans eos lavacro aquae in verbo vitae sanctificatae [n: (Ephes. V)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Eph 5:26 reads *ut illam sanctificaret, mundans lavacro aquae in verbo vitae*; Migne adds *eos* and *sanctificatae*. Two whole words, not letter-level. |
| 0082A | `*In Spiritu sancto.*` | ✓ 1Cor 12:3, 1Thes 1:5, 2Cor 6:6, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082B | `VERS.12.-- *Cujus ventilabrum.*` | ✓ Lc 3:17, Mt 3:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082B | `*In manu,*` | ✓ 1Mcc 2:8, 1Mcc 3:6, 1Mcc 4:30, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082B | `*Permundabit,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0082B | `*Permundabit,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0082B | `*Paleas autem.*` | ✓ Lc 3:17, Mt 3:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082B | `*Qui non credit, jam judicatus est,*` | ⚠ NOT in Clementine verbatim — CHECK | Jo 3:18 *qui **autem** non credit…* — a fragment cut at the connective. Agrees. No marker. |
| 0082B | `*Inexstinguibili.*` | — single word, check in place | Mt 3:12 reads *inextinguibili*; Migne prints *Inexstinguibili*, with the *s*, on **both** witnesses. One inserted letter, orthographic, no sense at stake. **Declined** per the single-word rule. ⚑ Raised on the archive copy as a suspected *loss* of the s and refuted at Gallica — see the plate ledger. |
| 0082C | `*Igne nos examinasti [n: (Psal. LXV)]*` | ✓ Ps 65:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082C | `VERS. 13.-- *Tunc venit.*` | ✓ Mt 3:13, Mt 26:36, Mt 26:45 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082D | `*A Galilaea in Jordanem.*` | ✓ Mt 3:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082D | `VERS. 15.-- *Sine modo.*` | ✓ Mt 3:15 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082D | `*Tunc dimisit.*` | ✓ 1Rg 6:6, Mt 3:15, Mt 27:26 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0083A | `VERS. 16.-- *Baptizatus autem.*` | ✓ Mt 3:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0083A | `*Aperti sunt,*` | ✓ Apc 20:12, Dn 7:10, Ez 1:1, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0083B | `*Sicut columbam.*` | ✓ Mt 3:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0083D | `*Complacui.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0083D | `VERS. 1.-- *Tunc Jesus.*` | ✓ Mt 4:1, Mt 16:24, Mt 21:1, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084A | `*Tunc Jesus ductus est,*` | ✓ Mt 4:1 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084A | `*Spiritui*` | — single word, check in place | Mt 4:1 reads *ductus est … **a Spiritu***, ablative. Migne's lemma is the **dative** *Spiritui*, with only that word in italic and *Sancto* following in roman — confirmed on both witnesses. Rendered "*To the Spirit*, the Holy…", which keeps the printed case and the printed italic boundary. **Declined** as a marker: a case-ending is exactly what letter-level corruption manufactures, and nothing in the gloss argues from the case. |
| 0084A | `*Ut tentaretur a diabolo.*` | ✓ Mt 4:1 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084A | `VERS. 2.-- *Et cum jejunasset. [n: (BEDA.)]*` | ✓ Mt 4:2 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0084B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0084B | `*Postea esuriit.*` | ✓ Mt 4:2 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084B | `VERS. 3.-- *Et accedens.*` | ✓ 3Rg 20:28, Dt 2:19, Mc 1:31, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084B | `*Si Filius [0084C] Dei es.*` | ✓ Lc 4:3, Lc 4:9, Mt 4:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084C | `*Si Filius Dei es.*` | ✓ Lc 4:3, Lc 4:9, Mt 4:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0084D | `VERS. 4.-- *Scriptum est.*` | ✓ 1Cor 1:19, 1Cor 1:31, 1Cor 2:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084D | `*Non in solo pane vivit homo.*` | ✓ Lc 4:4, Mt 4:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084D | `*Sed in omni verbo,*` | ✓ Dt 8:3, Lc 4:4, Mt 4:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085A | `VERS. 5.-- *Tunc assumpsit.*` | ✓ Mt 4:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085B | `*Supra pinnaculum. [n: (RAB.)]*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 4:5 *super pinnaculum templi*. `supra`/`super` differ by one letter and are interchangeable; letter-level corruption could manufacture it. **Declined** per the single-word rule. |
| 0085B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0085B | `*Si filius. [n: (BEDA.)]*` | ✓ Gal 4:7, Jr 31:20, Lc 4:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0085B | `*Mitte.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0085C | `*Si persecuti vos fuerint in civitate ista, fugite in aliam.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mt 10:23 reads *Cum autem persequentur vos in civitate ista, fugite in aliam*. A different construction, not letter-level. Both witnesses. |
| 0085C | `*Quia angelis suis mandavit de te. [n: (BEDA.)]*` | ✓ Mt 4:6 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0085C | `VERS. 8.-- *Iterum assumpsit.*` | ✓ Mt 4:8 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085D | `*Ostendit,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0085D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0085D | `VERS. 9.-- *Haec omnia tibi dabo.*` | ✓ Mt 4:9 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086A | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0086A | `VERS. 10.-- *Scriptum est.*` | ✓ 1Cor 1:19, 1Cor 1:31, 1Cor 2:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086A | `*Dominum Deum tuum.*` | ✓ 1Rg 12:19, 1Rg 15:30, 1Rg 25:29, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086A | `*Non tentabis Dominum Deum tuum,*` | ✓ Dt 6:16, Lc 4:12, Mt 4:7 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086B | `*Servies.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0086B | `*Eritis sicut dii.*` | ✓ Gn 3:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086B | `*Scientes bonum et malum.*` | ✓ Gn 3:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086B | `VERS. 11.-- *Accesserunt.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0086C | `VERS. 12.-- *Cum autem audisset. [n: (RAB.)]*` | ✓ 1Mcc 14:24, 2Rg 13:21, Mt 4:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086C | `*usque ad, Hoc fecit initium signorum Jesus.*` | ⚠ NOT in Clementine verbatim — CHECK | Jo 2:11 verbatim, cut before *in Cana Galilaeae*. Agrees. |
| 0086C | `*Nondum Joannes missus erat in carcerem.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Jo 3:24 reads *Nondum **enim** missus **fuerat** Joannes in carcerem*. Word order, tense and a dropped particle. Both witnesses. |
| 0086C | `*Joannes,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0086C | `*In Galilaeam.*` | ✓ 1Mcc 5:20, 1Mcc 5:21, 1Mcc 12:47, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086D | `VERS. 13.-- *Nazareth. [n: (RAB.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0086D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0086D | `VERS. 15.-- *Terra Zabulon. [n: (ID.)]*` | ✓ Is 9:1, Mt 4:15 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086D | `*Primo tempore alleviata est terra Zabulon et terra Nephtalim [n: (Isa. IX)]*` | ⚠ NOT in Clementine verbatim — CHECK | Is 9:1 verbatim except the name: Vulg *Nephthali*, Migne *Nephtalim* — which is Mt 4:15's own spelling, in a commentary on Mt 4:15. **Declined**: proper-name orthography, and the form is the host verse's. |
| 0086D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0086D | `VERS. 16.-- *Populus. [n: (AUG.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087A | `*Habitantibus in regione.*` | ✓ Is 9:2 | **`[var:]` FIRED — and this one the pre-scan could not flag**, because it carries no `VERS.` address. Mt 4:16 reads *sedentibus in regione*; Migne prints *Habitantibus*. A wholly different participle, and the class 7a″ exists for. |
| 0087A | `*Umbrae mortis.*` | ✓ Is 9:2, Mt 4:16, Ps 22:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087A | `VERS. 17.-- *Exinde.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087A | `*Exinde,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087A | `*Si cui revelatum fuerit, prior taceat.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** 1Cor 14:30 reads *Quod si **alii** revelatum fuerit **sedenti**, prior taceat*. Both witnesses. |
| 0087A | `*Poenitentiam agite.*` | ✓ Mt 3:2, Mt 4:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0087C | `VERS. 18.-- *Qui vocatur Petrus.*` | ✓ Mt 4:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087C | `*Tu vocaberis Cephas [n: (Joan. I)]*` | ✓ Jo 1:42 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087C | `*Petrus:*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087C | `*Tu es Christus Filius Dei vivi,*` | ✓ Jo 11:27, Mt 16:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087C | `*Tu es Petrus et super hanc petram aedificabo Ecclesiam meam [n: (Matth. XVI)]*` | ✓ Mt 16:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087C | `*agnoscens:*` | — single word, check in place | Not scripture — a name etymology (Peter). Rendered "*acknowledging*". |
| 0087C | `*virilis:*` | — single word, check in place | Not scripture — a name etymology (Andrew). Rendered "*manly*". |
| 0087C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0087C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0087D | `*Mittentes rete.*` | ✓ Mt 4:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087D | `*Venite post me, et faciam vos fieri piscatores hominum [n: (Joan. I)]*` | ✓ Mc 1:17, Mt 4:19 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087D | `VERS. 19.-- *Piscatores.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087D | `VERS. 20.-- *Continuo.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0088A | `VERS. 21.-- *Vidit alios duos.*` | ✓ Mt 4:21 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088A | `*Quos vocavit [n: (Rom. VIII)]*` | ✓ Rom 8:30 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088A | `*Multi sunt vocati [n: (Matth. X)]*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 22:14 *Multi **enim** sunt vocati*, cut at the particle. Agrees. ⚑ Migne's own citation *(Matth. X)* is wrong; it passes through verbatim under the sigla rule. |
| 0088A | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0088B | `*Zebedaei et Joannem.*` | ✓ Mc 1:19, Mc 3:17, Mt 4:21 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088B | `*Et vocavit eos. Illi autem,*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 4:21–22 verbatim, but it **crosses a verse boundary**, which is exactly why the per-verse scan could not tick it. Agrees. |
| 0088B | `VERS. 23.-- *Et circumibat Jesus totam Galilaeam.*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 4:23 *Et **circuibat***. One inserted letter, and *circumire*/*circuire* are the same verb. **Declined** per the single-word rule. |
| 0088B | `*Docens in synagogis.*` | ✓ Mt 4:23, Mt 9:35 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088C | `*In synagogis.*` | ✓ Act 9:20, Act 13:5, Act 15:21, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088C | `*Evangelium.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0088C | `*Et sanans.*` | ✓ Mt 4:23 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088C | `VERS. 24.-- *Et abiit opinio. [n: (BEDA.)]*` | ✓ Mt 4:24 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0088D | `VERS. 25.-- *Secutae sunt. [n: (AUG.)]*` | ✓ Gn 24:61, Lc 9:11, Mt 4:25, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0088D | `VERS. 1.-- *Videns autem Jesus. [n: (AUG.)]*` | ✓ Lc 18:24, Mt 5:1, Mt 8:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088D | `*Factum est autem in illis diebus, exiit in montem orare [n: (Luc. VI)]*` | ✓ Lc 6:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0089A | `*Ascendit.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0089A | `*Sedisset.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0089A | `*Et mundus eum non cognovit,*` | ✓ Jo 1:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089A | `*Accesserunt.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0089B | `VERS. 2.-- *Et aperiens.*` | ✓ Dn 10:16, Gn 8:13, Mt 5:2, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089B | `*usque ad, Omnis qui audit verba mea haec et faciat, assimilabo eum viro sapienti [n: (Matth. VII)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mt 7:24 reads *Omnis **ergo** qui audit verba mea haec, et **facit ea, assimilabitur** viro sapienti*. Migne turns the passive future into a first-person *assimilabo eum*. ⚑ Also note the `usque ad` here is the abridgment formula and the whole verse rides inside one italic span — the case the `etc.` splice test was written for. |
| 0089B | `VERS. 3.-- *Beati. [n: (GREG. NYSS.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0089B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0089C | `*Beati pauperes.*` | ✓ Lc 6:20, Mt 5:3 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089C | `*[n: (HIER.)] Beati pauperes spiritu.*` | ✓ Mt 5:3 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0089C | `VERS. 4.-- *Beati mites.*` | ✓ Mt 5:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0089D | `*Possidebunt terram. [n: (AUG.)]*` | ✓ Mt 5:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089D | `*Spes mea es tu, portio mea in terra viventium [n: (Psal. CLXI)]*` | ⚠ NOT in Clementine verbatim — CHECK | Ps 141:6 *Tu es spes mea, portio mea in terra viventium*. Word order only, inside an AUG. citation. **Declined** — no sense turns on it. ⚑ Migne's *(Psal. CLXI)* is his own error for CXLI; both witnesses print CLXI, so it rides. |
| 0089D | `VERS. 5.-- *Beati qui lugent.*` | ✓ Mt 5:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090A | `*Beati qui lugent.*` | ✓ Mt 5:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090A | `VERS. 6.-- *Beati qui esuriunt.*` | ✓ Mt 5:6 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090B | `VERS. 7.-- *Beati misericordes.*` | ✓ Mt 5:7 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090C | `*Estote misericordes sicut et Pater vester misericors est [n: (Luc. VI)]*` | ⚠ NOT in Clementine verbatim — CHECK | Lc 6:36 *Estote **ergo** misericordes…*, cut at the particle. Agrees. |
| 0090C | `VERS. 9.-- *Beati pacifici. [n: (RAB.)]*` | ✓ Mt 5:9 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0090C | `VERS. 10.-- *Beati qui persecutionem.*` | ✓ Mt 5:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090D | `VERS. 11.-- *Beati estis cum maledixerint.*` | ✓ Mt 5:11 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090D | `*Vos estis sal terrae, vos estis lux mundi;*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 5:13 + Mt 5:14 joined into one clause. **Not a wording divergence** — Migne is conflating two verses, and the per-verse scan is why it shows ⚠. Declined. |
| 0090D | `*Maledixerint.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0090D | `*Cum oderint vos homines, et dixerint omne malum, et expulerint.*` | ⚠ NOT in Clementine verbatim — CHECK | ⛔ **Declined on principle.** Migne introduces this with *Antiqua translatio habet* — he is quoting an Old Latin reading and says so. Pattern 14 records a divergence from the received text; it does not mark a citation the author labels as another version. |
| 0091A | `*Mentientes.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0091A | `*Propter me,*` | ✓ 1Rg 23:10, 4Rg 19:34, 4Rg 20:6, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091A | `VERS. 12.-- *Quoniam merces vestra copiosa est in coelis.*` | ✓ Mt 5:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091B | `*Sic enim persecuti,*` | ✓ Mt 5:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091B | `VERS. 13.-- *Vos estis sal terrae.*` | ✓ Mt 5:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091B | `*Posui te in lucem gentium, ut sis salus mea usque ad extrema terrae.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** A conflation: *Posui* and the frame are Act 13:47, *salus mea* is Is 49:6, and *extrema terrae* is neither (both read *extremum terrae*). Both witnesses. ⚑ The `usque ad` here is **the verse's own words**, not the formula — rendered "unto the ends of the earth". |
| 0091B | `*Quod si sal,*` | ✓ Mc 9:49, Mt 5:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091C | `*Hic homo coepit aedificare, et non potuit consummare. Si sal evanuerit [n: (Luc. IV)]*` | ⚠ NOT in Clementine verbatim — CHECK | Two fragments in one span: Lc 14:30 cut before *Quia*, Lc 14:34 cut before *autem*. Both agree. ⚑ *(Luc. IV)* is Migne's error for XIV; it rides. |
| 0091C | `*Ad nihilum valet ultra,*` | ✓ Mt 5:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091C | `*Nisi abundaverit justitia,*` | ✓ Mt 5:20 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091C | `*Et conculcetur ab hominibus.*` | ✓ Mt 5:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091D | `VERS. 14.-- *Vos estis lux mundi.*` | ✓ Mt 5:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091D | `*Lux mundi.*` | ✓ Jo 8:12, Mt 5:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091D | `*Non potest civitas,*` | ✓ Mt 5:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091D | `*Supra montem.*` | ✓ 1Rg 17:3, Apc 14:1, Mt 5:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092A | `VERS. 15.-- *Neque accendunt lucernam.*` | ⚠ NOT in Clementine verbatim — CHECK | ⚠ **The comparand is what diverges here, not Migne.** `sources/vulgate/clementine-flat.txt` AND `sources/vulgate/clementine/Mt.lat` both read `accedunt` at Mt 5:15; Migne and our twin read `accendunt`, which is the standard text. No marker, and the on-disk Clementine should not be trusted at this verse. |
| 0092A | `*Castigo corpus meum,*` | ✓ 1Cor 9:27 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092B | `*Sic luceat,*` | ✓ Mt 5:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092B | `*Candelabrum.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0092B | `VERS. 16.-- *Sic luceat,*` | ✓ Mt 5:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092B | `*Ut videant,*` | ✓ 4Rg 6:20, Dn 12:2, Is 41:20, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092B | `VERS. 17.-- *Nolite putare.*` | ✓ Jo 5:45, Mt 5:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092C | `*Non veni solvere legem, sed adimplere,*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mt 5:17 reads *non veni solvere, sed adimplere* — no object in the second clause. Migne supplies *legem*, and does so **twice** (again at 0094C), which is its own witness. |
| 0092C | `VERS. 18.-- *Iota. [n: (BEDA.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0092C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0092C | `*Omnia fiant.*` | ✓ Lc 21:32, Mt 5:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092D | `VERS. 19.-- *Qui ergo solverit,*` | ✓ Mt 5:19 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092D | `*Minimus vocabitur,*` | ✓ Mt 5:19 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093A | `*Qui autem fecerit.*` | ✓ 1Mcc 14:45, Mt 5:19 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093A | `*Soli enim factores legis justi sunt apud Deum [n: (Rom. II)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Rom 2:13 reads *Non enim **auditores** legis justi sunt apud Deum, **sed factores legis justificabuntur***. Migne collapses the antithesis into a single affirmative with *Soli*. The gloss rests on it ("sed facit quod docet"). |
| 0093A | `VERS. 20.-- *Dico autem vobis.*` | ⚑ MATCHES ONLY ELSEWHERE — Lc 9:27, Lc 12:4, Lc 12:8, …  (lemma is Mt 5) — CHECK | **⚑ ADJUDICATED — `[var:]` FIRED.** Mt 5:20 reads *Dico **enim** vobis*. Both witnesses. See §d. |
| 0093A | `*Nisi,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0093B | `*Justitia vestra.*` | ✓ Mt 5:20 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093B | `VERS. 21.-- *Audistis,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0093B | `VERS. 22.-- *Ego autem,*` | ✓ 1Cor 1:12, 1Cor 7:28, 1Cor 9:15, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093B | `*Omnis qui irascitur.*` | ✓ Mt 5:22 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093C | `VERS. 23.-- *Si ergo offers munus tuum.*` | ✓ Mt 5:23 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093C | `*Si ergo offers.*` | ✓ Mt 5:23 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093C | `*Et ibi,*` | ✓ 1Rg 7:17, 3Rg 17:4, Act 9:7, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093D | `VERS. 24.-- *Relinque ibi,*` | ✓ Mt 5:24 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093D | `*Vade.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0093D | `*Offeres.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0094A | `VERS. 25.-- *Esto consentiens.*` | ✓ Mt 5:25 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094A | `*Si fieri potest quod ex vobis est cum omnibus hominibus pacem habentes [n: (Rom. XII)]*` | ✓ Rom 12:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094A | `*Cito,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0094A | `*Dum es in via,*` | ✓ Mt 5:25 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094A | `*In via cum eo.*` | ✓ Mt 5:25 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094B | `*Viam mandatorum tuorum cucurri, cum dilatasti cor meum [n: (Psal. CXVIII)]*` | ✓ Ps 118:32 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094B | `*Ne forte tradat.*` | ✓ Mt 5:25 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094B | `*Tradat,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0094B | `VERS. 26.-- *Novissimum quadrantem.*` | ✓ Mt 5:26 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094C | `VERS. 27.-- *Audistis. [n: (RAB.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0094C | `*Non veni solvere legem, sed adimplere [n: (Marc. XI)]*` | ⚠ NOT in Clementine verbatim — CHECK | The same divergence as 0092C, re-quoted inside a RAB. tail. Marked once, at its first occurrence. ⚑ *(Marc. XI)* is Migne's own citation for Mt 5:17 and rides verbatim; confirmed on both witnesses. |
| 0094C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0094C | `*Viderit mulierem. [n: (BEDA.)]*` | ✓ Mt 5:28 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0094C | `*Ad concupiscendum.*` | ✓ Mt 5:28 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094D | `VERS. 29.-- *Erue eum.*` | ✓ Mt 5:29, Mt 18:9 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095A | `VERS. 30.-- *Dextera manus tua.*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 5:30 *Et si **dextra** manus tua*. One inserted letter, same word. **Declined** per the single-word rule. |
| 0095A | `*Abscinde eam,*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 5:30 *absc**i**de eam*. **Declined**, and this is the closest call in the range: *abscindere* and *abscidere* are different verbs, but they differ by one inserted letter, are constantly interchanged in the Vulgate tradition, and **the gloss argues from neither** — it uses a third verb, *resecetur*. Under launch-brief §2 a single-word `[var:]` needs a witness of its own and this has none. |
| 0095A | `*In gehennam.*` | ✓ Lc 12:5, Mc 9:42, Mc 9:44, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095B | `VERS. 31.-- *Det illi. [n: (AUG.)]*` | ⚑ MATCHES ONLY ELSEWHERE — 2Tim 1:18  (lemma is Mt 5) — CHECK | **⚑ ADJUDICATED — `[var:]` FIRED.** Mt 5:31 reads *det **ei** libellum repudii*. Both witnesses. See §d. |
| 0095B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0095C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0095C | `VERS. 32.-- *Causa fornicationis.*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 5:32 *excepta **fornicationis causa***. Migne prints the words in both orders in the same column — *Causa fornicationis* here and *Fornicationis causa* eight lines later, the second matching the Vulgate. English cannot carry the difference and both render "By reason of fornication". Declined; recorded because the facing Latin column shows what the English cannot. |
| 0095C | `*Fornicationis causa.*` | ✓ Mt 5:32 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095D | `*Et qui,*` | ✓ 1Cor 3:8, 1Cor 7:29, 1Cor 7:30, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095D | `VERS. 33.-- *Reddes autem.*` | ✓ Mt 5:33 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095D | `*Ego autem,*` | ✓ 1Cor 1:12, 1Cor 7:28, 1Cor 9:15, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0096A | `*Per coelum.*` | ✓ Jac 5:12, Mt 5:34 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0096A | `*Neque per terram.*` | ✓ Jac 5:12, Mt 5:35 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0096A | `*Non est potestas nisi a Deo [n: (Rom. XIII)]*` | ⚠ NOT in Clementine verbatim — CHECK | Rom 13:1 *Non est **enim** potestas nisi a Deo*, cut at the particle. Agrees. |
| 0096B | `*Neque,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0096B | `VERS. 36.-- *Quia non potes,*` | ✓ Apc 2:2, Mt 5:36 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0096B | `VERS. 37.-- *Est, est; non, non.*` | ✓ Jac 5:12, Mt 5:37 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
**Tally: 241 spans. 13 `[var:]` fired · 21 divergences examined and declined with reasons ·
207 checked and found to agree as printed.**

---

### (d) This range's cruces, by column

#### ⚑ THE THREE `MATCHES ONLY ELSEWHERE` CANDIDATES — each adjudicated, with the losers named

The launch brief §3 lists three of its eight live candidates in this range and requires me to say
which of three explanations each is — a real divergence, a harmony parallel Migne has reached for,
or our own file's corruption — **and why the other two lost.**

##### 1. @0080B `VERS. 8.-- Facite ergo fructus dignos.` (matched only Lc 3:8; the lemma is Mt 3)

**It is a real divergence, and the plural is the Lucan form. `[var:]` fired.**

- *Our file's corruption loses first, and decisively.* **Both witnesses print `fructus dignos`** —
  archive p.45 and Gallica f40, at 300 dpi and native resolution respectively, in the italic lemma
  immediately after `VERS. 8. —`. There is nothing for the digitization to have done.
- *"Harmony parallel Migne reached for" and "real divergence" are not rivals here, and the second
  is what the apparatus records.* Mt 3:8 reads *Facite ergo **fructum dignum** poenitentiae*, Lc 3:8
  *fructus dignos poenitentiae*. Migne prints the plural under a Mt 3 address, so the lemma diverges
  from the verse it addresses — which is precisely what Pattern 14 marks. Whether the plural got
  there because a compositor's eye slipped to Luke, or because the glossator's copy of Matthew read
  so, is a transmission question, and Pattern 14 forbids speculating about it in the marker. The
  marker therefore states both readings and names Luke as the place the plural is found, without
  asserting a route.
- ⭐ **The internal evidence pushes the same way and is worth recording**: the work's own prose uses
  the plural twice more in the same two columns, outside any lemma — @0079B *Poenitentiam agere est
  **dignos fructus** poenitentiae facere*, and @0081B *Et si moneo **dignos fructus** poenitentiae
  facere*. Migne's Matthew glossator says the phrase in the plural as a matter of course. That is
  corroboration, not proof of ownership, and the plates are what settled it.

##### 2. @0093A `VERS. 20.-- Dico autem vobis.` (matched only Lc 9:27, Lc 12:4, Lc 12:8 …; lemma is Mt 5)

**It is a real divergence in a single connective. `[var:]` fired.**

- *Our file's corruption loses.* **Both witnesses print `Dico autem vobis`** — archive p.52,
  Gallica f47, in the italic lemma after `VERS. 20. —`.
- *Harmony parallel loses, and this is the one where the pre-scan's own list is misleading.* The
  Lucan verses it matched (Lc 9:27, 12:4, 12:8) are **not parallels of Mt 5:20 at all** — they are
  simply other places in the corpus where the three words *dico autem vobis* happen to stand
  together. There is no Lucan verse corresponding to Mt 5:20's *nisi abundaverit justitia vestra*;
  Luke has no Sermon-on-the-Mount antithesis here. So nothing was reached for.
- *Real divergence wins.* Mt 5:20 reads *Dico **enim** vobis*. The lemma is unmistakably Mt 5:20:
  the very next lemma in the gloss is `*Nisi,* etc.` and the one after it `*Justitia vestra*`, which
  are that verse's own following words. **And it passes the single-word test's second limb**:
  *autem* cannot be manufactured out of *enim* by a broken sort — they share no letter in any
  position. So the marker stands on the form, not on my confidence.

##### 3. @0095B `VERS. 31.-- Det illi.` (matched only 2Tim 1:18; the lemma is Mt 5)

**It is a real divergence in the pronoun. `[var:]` fired.**

- *Our file's corruption loses.* **Both witnesses print `Det illi.`** — archive p.53, Gallica f48.
  (The archive appears to drop the final period; Gallica has it, as our twin does. The period is
  archive ink, and that is in the plate ledger, not here.)
- *Harmony parallel loses, and here the pre-scan's single match is a coincidence rather than a
  parallel.* 2 Tim 1:18 is *det illi Dominus invenire misericordiam* — Paul on Onesiphorus. It has
  no relation whatever to the bill of divorce, it is not in a gospel, and Migne could not be
  "reaching for" it: the gloss underneath is entirely about Deuteronomy's *libellus repudii* and
  Moses' permission. Two words coinciding is not a citation.
- *Real divergence wins.* Mt 5:31 reads *det **ei** libellum repudii*. *illi* for *ei* is a
  different pronoun, not a letter-level slip, so it clears the single-word bar.

#### The rest of the range's cruces, by column

**@0079B — Migne's sentence has no verb, and both plates agree.** The plate prints
*qui vere poenitet, in se praeteritos errores, deinde erigit animum ad coeleste regnum* — there is
**no verb governing *in se praeteritos errores***, and the sense wants one (*damnat*, *plangit*,
*condemnat*). Read on archive p.45 and Gallica f40, at the same line and with the same wording on
both. ⛔ Nothing is supplied: the English reads "he who truly repents, in himself his past errors,
then lifts up his mind to the heavenly kingdom", which is as broken as the Latin. No marker is
available — nothing here is a non-word, so `[sic:]` cannot reach it, and the missing word is not a
printed word that misleads, so `[cj:]` cannot either. This is what Pattern 7 asks for and it is
logged here because a blind reader will stop at it.

**@0084A — the lemma is in the wrong case, and the italic boundary proves it is the lemma.**
Migne prints ***Spiritui*** Sancto (italic on the first word only, roman on *Sancto*), glossing
Mt 4:1's ablative *ductus est … a Spiritu*. Confirmed on both witnesses. Rendered
"*To the Spirit*, the Holy, who sends strong to the battle those whom he fills" — the dative kept,
the italic boundary kept where Migne set it. No marker: a case-ending is the one thing letter-level
corruption manufactures most easily, and nothing in the gloss turns on the case.

**@0087B — *in Jordane organo*, where the argument wants *in Joanne*.** Migne prints
*Christus enim verbum quod clamat **in Jordane** organo et in omnibus qui ab initio aliquid
divinitus dixerunt*. The whole paragraph is the voice/word argument about **John** (*Joannes vox,
Christus verbum, qui clamat in Joanne* at 0079C says it in those words), and *organo* — "by his
instrument" — has no antecedent under *Jordane*. **Both witnesses print `Jordane`**, at normal
spacing, so this is Migne's, not ours. Rendered as printed: "which cries in the Jordan by his
instrument". Logged, not marked: *Jordane* is a real, well-formed word in a construction that
parses, so `[sic:]` is closed to it and `[cj:]` would be a conjecture with no plate behind it.

**@0090D — our twin's `maledieta`, and the plates' `maledicta`.** The only confirmed defect in the
range and it is the digitization's. The English renders the plate ("since revilings come from
hatred of the heart"); patch filed. No `[sic:]`: the marker would accuse Migne of an error he did
not make, and would in any case be quoting a word about to disappear from our Latin.

**@0094B — Migne contradicts himself two clauses apart, on both witnesses.** He prints
*Sic temperavit, ut poenitentiae locum **non** afferret* and then, four lines later,
*Sed et locum poenitentiae reliquit*. Carried as printed — "He so tempered it, that it should not
bring in a place of repentance… But he both left a place of repentance" — because 7a is explicit
that a printed negation rides **including when carrying it makes the sentence contradict itself**,
and that is exactly what this edition exists to show. `afferret` (not `afferet`) confirmed at
Gallica f47 after the archive suggested the shorter form.

**@0094B — *Christus ministro* has no verb.** *Christus ministro, id est angelo, qui colliget
zizania* — the verb (*tradit*, carried over from *Judex tradat te ministro* in the sentence before)
is unexpressed. Rendered "Christ to the officer, that is, to the angel, who shall gather the
cockle." Nothing supplied.

**@0090A — an unexpressed antecedent, named here because two readings construe.** *Pro suis vel
aliorum peccatis, **qui** est ab irriguo inferiori* — the masculine relative has no expressed
antecedent in its own sentence. I take it as *luctus*, "mourning", which the gloss supplies
explicitly six lines later (*Luctus pro peccatis vel pro desiderio coelesti consolationem
meretur*), and rendered "which mourning is from the lower watering". The rival is *qui* = "he who
[mourns]", which also construes; it loses because the following *sed **qui** fit ab irriguo
superiori **est** ex desiderio* has a neuter/abstract predicate that only *luctus* takes.

**@0093D — *offeres*, and why the English follows our twin and not the archive.** The archive prints
*si praesens est, **offeres**. Hoc ex spiritu* — a comma and a lower-case lemma, which would make
*offeres* the tail of the previous sentence rather than the lemma of the next. **Gallica prints
*est. Offeres.*, exactly as our twin has it**, and the archive's comma is a broken period. Recorded
because it is the one refuted candidate in this range that would have changed the English.

**@0093D — *ei prosternas* with the reflexive unexpressed.** *Non pedibus, sed animo humiliter ei
prosternas* — *prosternas* is transitive and its object (*te*) is not printed. Rendered "mayest thou
humbly prostrate thyself before him"; the reflexive is English grammar, not a supplied Latin word.

**@0094A — *pro consentiens ex Graeco habetur benignus vel benevolus*.** Migne discusses three
words as words, none of them italicised on the plate. Rendered with our own quotation marks
(Pattern 6: `« »` is Migne's, `" "` is ours) rather than by adding italic spans the Latin does not
carry, so that the span inventory stays 1:1.

**@0093A — *sed facit quod docet* where the sense wants *nisi*.** *Qui non solverit, et sic docet,
non minimus, non tamen magnus: **sed** facit quod docet.* Carried as "but he does what he teaches";
the connective is Migne's and Pattern 7's third mechanism (a smoothed connective) is exactly what
changing it would be.

**@0096A — one `Non` governing two purpose clauses, and no second negative supplied.**
*Non juremus per creaturas ut veneremur eas ultra quam debemus per eas, ut viles existimemus…* An
English ear wants "nor by them so as to esteem them cheap"; Migne prints no *nec*. Both `ut`
clauses are left under the single printed *Non*.

**Migne's own citations, all confirmed on both witnesses and all riding verbatim** — they are his,
not ours, and correcting one would be an emendation: `(Matth. X)` for Mt 22:14 @0088A;
`(Psal. CLXI)` for Ps 141:6 @0089D; `(Luc. IV)` for Lc 14:34 @0091C; `(Marc. XI)` for Mt 5:17
@0094C; `(Joan. I)` for Mt 4:19 @0087D.

**Verse addresses.** The sequence in this range runs 1–13, 15, 16, 18–21, 23–27, 29–33, 36, 37 —
i.e. it skips 14, 17, 22, 28, 34, 35, and 6–7 fall inside CAPUT IV as 6 and 8. **Nothing is
reordered and nothing is touched.** Per the withdrawn-verse-address rule I checked no number
against the plate as a target and altered none.

---

### (e) Declined-oddity list — every suspect word I did NOT mark, in one place

⚑ **Twenty-one of these were raised from the archive copy and killed by Gallica.** They are listed
in full in `data/briefs/9002-PENDING-TEI-PATCHES-0006.md` under "NOT patches" rather than repeated
here; the summary is that the archive copy of pp. 45–53 is over-inked badly enough to manufacture
turned letters in both directions, lost letters, and false word-splits, and that **it lost 20 of 21
to the second witness.** What follows is the list of oddities that survive *after* the plates —
things that are really on Migne's page and that I chose not to mark.

| col | printed | why it looked wrong | why no marker |
|---|---|---|---|
| 0079B | *qui vere poenitet, in se praeteritos errores, deinde erigit* | no verb for *praeteritos errores* | §d. Nothing is a non-word; no marker class reaches it |
| 0084A | *Spiritui* Sancto | dative lemma for Mt 4:1's ablative | case-ending; letter-level; gloss does not argue from it |
| 0087B | *in Jordane organo* | the argument is about *Joanne* | real well-formed word, both plates; `[cj:]` would rest on no witness |
| 0088B | *circumibat* | Vulg *circuibat* | one inserted letter, same verb |
| 0089D | *(Psal. CLXI)* | Ps 141 is CXLI | Migne's own citation; both plates; rides verbatim |
| 0090D–0091A | *Vos estis sal terrae, vos estis lux mundi;* | two verses joined | conflation, not a wording divergence |
| 0091C | *(Luc. IV)* | Lc 14:34 is XIV | Migne's own; rides |
| 0092A | *accendunt* | flagged ⚠ by the pre-scan | **the on-disk Clementine is what is wrong here** (it reads *accedunt*); Migne is right |
| 0092C | *Iota* | Vulg *jota* | i/j orthography |
| 0093A | *sed facit quod docet* | sense wants *nisi* | connective; Pattern 7 mechanism 3 |
| 0094B | *ut poenitentiae locum non afferret* | contradicts the next clause | 7a: a printed negation rides even into a contradiction |
| 0094B | *Christus ministro* | no verb | ellipsis; nothing supplied |
| 0094C | *(Marc. XI)* | Mt 5:17 | Migne's own; both plates |
| 0095A | *Dextera* | Vulg *dextra* | one inserted letter |
| 0095A | *Abscinde* | Vulg *abscide* | one inserted letter; gloss uses a third verb (*resecetur*) |
| 0095C | *Causa fornicationis* / *Fornicationis causa* | the same words in two orders eight lines apart | English cannot carry the difference; both render alike; the Latin column shows it |
| 0082B | *Inexstinguibili* | Vulg *inextinguibili* | one inserted letter; both plates print the *s* |
| 0085B | *Supra pinnaculum* | Vulg *super pinnaculum* | one letter; interchangeable preposition |
| 0086D | *Nephtalim* | Is 9:1 has *Nephthali* | it is Mt 4:15's own spelling, in a commentary on Mt 4:15 |

⭐ **And the negatives worth recording, because a checked zero is a result.** Three things I went
looking for in this range and did not find: (i) **no `[sic:]` is fireable anywhere in 0079A–0096B** —
twenty-one attempts, twenty refuted at the second witness and the twenty-first belonging to Corpus
Corporum; (ii) **no anchor is displaced by more than two lines** — all 70 column anchors in the range were
checked against the word they stand beside on the plate, and against Migne's marginal band letter
wherever the margin was legible in the render; the largest divergence is a two-line drift at
`[0083D]`, `[0087B]` and `[0091C]`, and the systematic one is that Corpus Corporum sets the `<pb>`
*after* a word broken across the column break where Migne's column begins with its second half
(`bapti-|zando` at 0079A, `praedicatio-|nem` at 0082A, `nesci-|vit` at 0083A, `bapti-|zatos` at
0084A, `su-|perbiam` at 0086A). That is the granularity at which the digitization places an anchor,
not a defect, and it is uniform across the range; (iii) **no `Forte` or foot-of-page conjecture
appears on any of the nine leaves** — the bottoms of pp. 45–53 and f40–f48 carry no apparatus layer
at all, numbered or asterisked, which is consistent with PL 114's recorded sample and is recorded
here as a checked zero for these nine pages.

⚠ **One bookkeeping note for the orchestrator, not a crux:** chunk 0010's frontmatter declares
`noteCount: 16` and the chunk body carries **17** `[n: …]` markers. The frontmatter is copied
verbatim into the English as the brief requires, and the marker sequence itself is 17:17 across the
pair, so nothing is wrong with the text — but the declared count is off by one and something
upstream generated it.


---

# §4 · STINT 0012–0015 (cols 0096C–0107B)

*Preserved from `cruces-0012.md`, unedited; headings demoted one level. Companion files: `data/briefs/9002-PLATE-READS-0012.json`, `data/briefs/9002-PENDING-TEI-PATCHES-0012.md`, `data/briefs/9002-lemmata-0012.txt`.*

## *Glossa ordinaria*, **Evangelium secundum Matthaeum** (PL 114) — cruces, chunks 0012–0015

Stint 4 of 8. **Cols 0096C–0107B**, chunks `0012`–`0015`, 4,593 Latin words (frontmatter counts) → ~6,900 English
words (ratio 1.49–1.54, on the register's expected ~1.5×). `verify-english.mjs` is clean on all
four; column anchors (44), `[n:]` notes (30), italic spans (161), `VERS.` addresses and
paragraph counts are all 1:1 with the Latin twins, and **question marks, colons and semicolons
match paragraph by paragraph** — a finer partition than the column bands (Test 3).

**Apparatus fired: 1 `[sic:]` · 12 `[var:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**
Guillemets: zero in either language, either direction.

**Plates read: 7 pages / 12 columns on BOTH witnesses** — archive `patrologiaecurs06saingoog`
pp. 53–59 at 300 dpi (600 dpi where a letter was in doubt) and Gallica
`ark:/12148/bpt6k54939667` ff. 48–54 at native resolution. Corner numbers read first on every
page; both maps confirmed against them (`(col+11)/2` and `(col+1)/2`).
Details in `data/briefs/9002-PLATE-READS-0012.json`.

---

### §0 · THE POLICY I APPLIED, STATED BEFORE THE FINDINGS

1. **No claim about Migne's type on one witness, in either direction.** Every letter-level
   candidate below was checked on Gallica before it was written down, and **the archive copy
   lost eleven times out of twelve in this range.** (See §1 — this independently reproduces the
   12:1 figure CLAUDE.md now records for Matthew's opening range.)
2. **Where the plate is read and our TEI differs, the English renders what Migne printed**
   (`translation-style.md` §"What the English translates"), and the divergence is filed in
   `data/briefs/9002-PENDING-TEI-PATCHES-0012.md`. One site in this range: `eleborata` @0105C.
3. **A `[sic:]` accuses Migne's type and needs two witnesses.** One fired (`nomo` @0097A).
4. **A `[var:]` states BOTH readings** — what Migne prints and what the Clementine has — so it
   can be audited. Fired only on quoted scripture whose divergence changes the sense, and only
   after the column was read on both plates.
5. **A real word that reads oddly is Migne's** — rendered as printed, logged, no marker. The
   declined list is §4 and it is longer than the fired list.
6. `usque ad`: **all twelve occurrences in this range are the `etc.` splice formula** (each
   follows an `etc.,` and names where the father's sentence resumes) and each is rendered
   "as far as". There is no ordinary temporal or spatial `usque ad` in these four chunks.
7. Vocabulary axes: `gentiles`/`gentilis` → **Gentile(s)** throughout (0099D *gentilium*,
   0106D *gentili* twice, 0106D lemma *Gentes*) — Matthew's *Judaei*/*gentes* opposition is
   explicit here (*facit similem gentili, id est infidelem*), so "nations" was never in
   question; `daemonis` @0105B → **demon**, `diabolus` → **devil** (they stand two lines apart
   at 0105A–B); `turbae phantasmatum` @0099C → **crowds**; no `natio`, no `multitudo`, no
   `mysterium`/`sacramentum` pair in the range. Commentator's voice not archaised (*dicit*,
   *ait*, *inquiunt* → says, say); `-eth` used **only inside italic lemmata** (*He seeth in
   secret*, *For the Father knoweth*, *It sufficeth*).
8. Pattern 17: `thou` for every singular address (0096C *cogeris*, 0097A *repercutias*,
   0099D *intuearis*, 0103C *unge, refice, lava*, 0104D *facis*), `you` for every plural
   (0098C *oraveritis*, 0104A *ponite*, 0105C *sitis*, 0105D *committite*). No "ye": the
   corpus renders *Audistis* "You have heard" (9001 @0002, 9004 @0004), and Pattern 17 makes
   the archaism a number marker, not a register marker.

#### ⭐ The lemma-expansion line I drew, stated so it can be argued with

Convention 3 expands a fragmentary lemma; the "control's class" rule says a *complete* one-word
lemma is rendered as it stands. **My test: can the printed lemma stand as an English clause or
phrase on its own?** If yes, render it as it stands; if it is grammatically headless, expand it
from the verse.

- Rendered as they stand (complete): *Audistis.* "You have heard." · *Diligite.* "Love." ·
  *Benefacite.* "Do good." · *Orate.* "Pray." · *Odio habebis.* "Thou shalt hate." ·
  *Perfecti.* "Perfect." · *Nesciat.* "Let it not know." · *Exterminant.* · *Lucerna.* ·
  *Panem.* · *Nostrum.* · *Sicut.* · *Amen,* · *Dies.* · *Sufficit.* "It sufficeth."
- Expanded (headless): *Qui solem.* → "Who maketh his sun to rise" (Mt 5:45 — the accusative
  has no verb in the lemma, and *Hunc visibilem* glosses the sun) · *Et volenti.* → "And to him
  that would borrow" (Mt 5:42 — the participle has no governing infinitive, and the gloss is
  entirely about lending) · *Aut enim unum odio.* → "For either he will hate the one"
  (Mt 6:24 — *odio* with no *habebit*).
- ⚑ **One deliberate exception, and the reason:** *Praebe illi.* is rendered "Offer to him.",
  NOT expanded to "offer him the other also" — because **the elided word is itself the next
  lemma Migne prints** (*Alteram.*, glossed separately three lines down). Expanding here would
  make the English print the same word twice and would swallow a lemma that has its own gloss.
  This is not conformation and it is not the stump class; it is a collision the general rule
  does not foresee.

---

### §1 · ⛔⛔ THE ARCHIVE COPY LOST 11 TIMES OUT OF 12 IN THIS RANGE

Every candidate I raised from the archive copy was taken to Gallica before it was recorded.
**Eleven were refuted, with our TEI right every time; one was confirmed.** This is the same
result CLAUDE.md records for cols 0063–0080, arrived at independently, on a different seven
pages, by a reader who had not seen that entry when the reads were made.

| col | archive copy reads | Gallica reads | our TEI | verdict |
|---|---|---|---|---|
| 0096D | `(Math. XI)` · `(Psal VII)` | `(Matth. XI)` · `(Psal. VII)` | = Gallica | archive ink |
| 0097A | `victor existas` | `victor exsistas` | = Gallica | archive ink |
| 0097B | `Da ei,` | `Da ei.` | = Gallica | archive ink |
| 0098A | `cum et si peccasse` | `cum etsi peccasse` | = Gallica | archive letterspacing |
| 0099B | **`coram homnibus`** | `coram hominibus` | = Gallica | see §2 |
| 0099B | `sententia, supra dixerat` | `sententia. Supra dixerat` | = Gallica | see §2 |
| 0100C | `qui fiilius est` | `qui filius est` | = Gallica | archive ink |
| 0101B | `jure possimus` | `jure poscimus` | = Gallica | archive ink (c filled) |
| 0102A | `Quia christus` | `Quia Christus` | = Gallica | archive ink |
| 0104A | `VERS. 20.` | `VERS 20.` | = Gallica (`VERS 20.`) | archive ink |
| 0105A | `Quiquid facis` ×2 | `Quidquid facis` ×2 | = Gallica | archive ink |
| 0105C | `elaborata` | `elaborata` | **`eleborata`** | **our corruption — patch** |
| 0105D | `Animalitas cibe` · `invenient eam` | `cibo` · `inveniet` | = Gallica | archive ink |
| 0106A | `Et pater vester` | `Et Pater vester` | = Gallica | archive ink |
| 0106D | `haec invia sua` | `haec in via sua` | = Gallica | archive letterspacing |
| 0107A | `quae mentem pertubant` | `perturbant` | = Gallica | archive ink |
| 0103C | a raised `*` after *abstinentiae* | plain `:` , no asterisk | no mark | **checked zero** for the asterisk foot-note layer |

⚑ **The `*` line is worth its own sentence.** At 300 dpi the archive shows what looks exactly
like Migne's raised asterisk key (Pattern 19's second layer) after *diebus abstinentiae*, and the
foot of that page carries nothing — which is the shape of a lost note. Gallica prints a bare
colon. **A `[cn: * | …]` and its `[nt:]` twin were within one HTTP request of being invented.**
The feet of pp. 53–59 were also inspected on both copies: **no foot-of-page apparatus of either
layer anywhere in cols 0096–0108.** The only mark below the text is a printer's signature `4`
under col 0106.

---

### §2 · THE HANDED-OVER LEAD @0099B — SETTLED, AND IT IS NEITHER OF THE TWO OFFERED ANSWERS

The launch brief (§4) handed this stint *coram **homnibus*** in the Mt 6:1 citation inside the
gloss on VERS. 5, read at 150 dpi on the archive copy alone, and asked whether it is Migne's
broken sort (→ `[sic:]`, two witnesses) or our file's corruption (→ TEI patch).

**Our Latin is not corrupt: it reads `coram hominibus`, correctly** — so the second answer was
never live. And the first fails its own test:

- **Archive p.55, 300 dpi: the reading is real.** `homnibus` — an `m` followed directly by an
  `n`, with no dotted `i` between them, against dotted `i`s in *stitiam* and *faciatis* on the
  same line. It is not a 150 dpi artefact.
- **Gallica f50 (corners 99/100), native resolution: `hominibus`, the `i` plainly there.**
- ⚑ **And the two copies differ TWICE on these two lines, in a way ink cannot produce.** Two
  lines above, the archive prints `haec sententia, supra dixerat :` (comma, lower-case *s*) and
  Gallica prints `haec sententia. Supra dixerat :` (full stop, capital *S*). **Over-inking can
  close a counter; it cannot turn `S` into `s`.** These are two printings of PL 114, not two
  photographs of one — the same finding as 8950's `Mititte`/`Mittite`, and the same finding
  CLAUDE.md now records for this volume.

**Verdict: no marker, no patch, crux only.** A `[sic:]` needs two witnesses and has one; a
patch needs our file to be wrong and it is right. The honest statement is that **one printing
of PL 114 carries `homnibus` at 0099B and the other carries `hominibus`, and our text follows
the second.** Recorded here because it is a fact about the volume that a later reader of the
archive copy will otherwise re-discover as a defect.

⚑ **The general lesson, and it cost this stint nothing because the rule was obeyed:** the
launch brief says a non-word "is the class that has been right every time." **In this range it
was right once in three** — `nomo` @0097A stood, `homnibus` @0099B and `fiilius` @0100C both
fell. A non-word is a reason to *look*, not a reason to *fire*.

---

### §3 · THE APPARATUS FIRED, WITH THE ARGUMENT FOR EACH

#### 3a. The single `[sic:]` — @0097A *nomo* (chunk 0012)

> *Alteram.* (CHRYSOST.) Primum indigna res est ut **nomo** fidelis stet in judicio ante
> conspectum judicis infidelis.

Sense requires *homo*. **Both witnesses print a word that is not *homo*:** the archive at
300 dpi reads `nomo` (initial `n`, unambiguous, no ascender); Gallica's initial letter is
blotted into a closed bowl and reads `n` or `o`, but **carries no ascender and cannot be `h`**.
Our TEI carries `nomo` verbatim, so the marker's substring guard is satisfied and the accusation
is against type that both copies show to be defective.

Rendered per the 2026-09-05 amendment to Pattern 7 — the marker discloses, so the sense is
rendered beside it: **"that a faithful man [sic: *nomo*] should stand in judgment"**.
7a⁗ check, all four questions: the clause keeps its verb (*stet* → "should stand"), its
negation (none present), its conjunction (*ut* → "that"), and **its subject** — which is what
the marker would otherwise have taken.

⚠ **A corpus control I record because it argues the other way and lost.** `nomo` occurs three
times in `src/latin/`: here, at 9000 @0314C inside *oeconomo* (a false hit), and at **8991
@0599D**, *ut nomo homini conditionis vinculo subderetur*, where the word wanted is *nemo*.
Two Glossa books printing the same non-word for two different targets looks like a Corpus
Corporum OCR habit, and on the frequency argument alone I would have filed a patch. **The
plates overrule it**: this is exactly `reference_plate-read-triage`'s rule — frequency proves an
error exists, never whose it is. 8991 @0599D is not in my range and I make no claim about it,
but it is worth a plate read by whoever holds that work.

#### 3b. The single `[cj:]` — @0107B *malitia Dei* (chunk 0015)

> *Sufficit.* Et quia cura praesenti mentes obruitur, non debet germinari **malitia Dei**.

`Dei` is a perfectly good word, so Pattern 12 has nothing to wrap and Pattern 7 renders it —
and the page then says **"the malice of God ought not to be made to sprout."** The lemma being
glossed is *Sufficit*, i.e. Mt 6:34 ***sufficit diei malitia sua***, and the preceding lemma is
*Dies*. The conjecture is *diei*, and it is not ours to invent: **it is printed on the same
page, twice, as the lemma this sentence exists to gloss.**

`the malice of God [cj: *Dei*; read *diei*, "of the day"]`

Read on **both** witnesses (archive p.59, Gallica f54): `malitia Dei` on each. So this is
Migne's own text, not the digitization's, and the marker is additive — nothing is removed.

⚑ **Why this clears Pattern 18's bar and the rival reading loses.** The bar is that the printed
word makes the sentence assert something the author is not arguing. "The malice of God" is not
merely awkward: it predicates *malitia* of God in a gloss whose whole subject is the anxiety of
the human mind. The rival treatment — leave it to the crux, per 18a's decline classes — loses
because 18a's declines are **mood, voice, number and person anomalies that merely fail to
construe**, and this is none of those: it is a noun substitution that construes perfectly and
says something false, which is the ✅ side of the list (10703 @1126B, *Oro* for *Pro*).

#### 3c. The twelve `[var:]`, each with the printed reading and the Clementine's

Every one is a **quoted scripture** (the class that stands 120 times in 121 across four Glossa
books), and every one was read on **both** plates before firing.

| col | chunk | Migne prints | Clementine | why material |
|---|---|---|---|---|
| 0096D | 0012 | *Et maxillam dedi percutienti* (Thren. III) | Lam 3:30 *Dabit percutienti se maxillam* | 3rd-person future → **1st-person perfect**: Migne makes it the sufferer's own utterance, in a series (*ipse idem* · *Et David* · *Jerem.*) that is entirely first-person. |
| 0098B | 0012 | *Sol justitiae non illuxit nobis* (Sap. V) | Sap 5:6 *justitiae lumen non luxit nobis* | *lumen* → *sol*, and the gloss is expounding ***Qui solem***. The word the argument turns on is the one that diverges. |
| 0098B | 0012 | *Super unam civitatem pluit, et non super alteram* (Amos. IV) | Am 4:7 *et plui super unam civitatem, et super alteram civitatem non plui* | 1st person → 3rd, and the negation is relocated to the second clause's front. |
| 0100C | 0013 | *Filios genui et exaltavi* (Isa. I) | Is 1:2 *Filios enutrivi, et exaltavi* | *enutrivi* (brought up) → *genui* (begot). Single word, but §2's test is met: **the gloss argues from it** — the whole passage is about why Israel was never told to say *Pater noster* — and *genui* is not a letter-level corruption of *enutrivi*. |
| 0101B | 0013 | *Percipite regnum quod vobis paratum* (Matth. XXV) | Mt 25:34 *possidete paratum vobis regnum* | different verb, different order. |
| 0102A | 0013 | *Hic est panis vivus qui de coelo descendit* (Joan. VI) | Jo 6:51 *Ego sum panis vivus, qui de caelo descendi* | **the speaker changes**: first person → third. (Jo 6:50's *Hic est panis de caelo descendens* is the other half of the conflation; the Clementine has no verse in these words.) |
| 0102C | 0014 | *Cum oratis, remittite si quid habetis adversus aliquem: aliter enim Pater vester non dimittet vobis peccata vestra.* | Mc 11:25 *dimittite si quis habetis adversus aliquem : ut et Pater vester, qui in caelis est, dimittat vobis peccata vestra* | a **positive purpose clause is turned into a negative consequence**, and a `non` appears that Mark does not print. This is the largest divergence in the range and the gloss builds on it (*Culpae veniam non debemus negare*). |
| 0104A | 0014 | VERS 20. *Thesaurizare autem.* | Mt 6:20 *Thesaurizate autem* | imperative → infinitive, in a verse-lemma with its own `VERS.` address. **Not in the brief's ⚑ list** (the pre-scan cleared it), and it is the find I would most want a second opinion on. Both plates read *Thesaurizare*; the previous lemma *Nolite thesaurizare* (Mt 6:19, infinitive, correct) is the obvious source of assimilation, but that is a *why*, and Pattern 14 forbids speculating about *why*. |
| 0106B | 0015 | *Et de vestimentis.* | Mt 6:28 *Et de vestimento* | see §5 — this is the brief's ⚑ candidate. |
| 0106B | 0015 | *Si enim fenum agri.* | Mt 6:30 *Si autem foenum agri* | *autem* → *enim*: the connective is reversed from adversative to causal in a verse-lemma. (*fenum*/*foenum* is orthography and takes no marker, Pattern 9.) |
| 0106C | 0015 | *Exaudiet me cras justitia mea* (Gen. XXX) | Gn 30:33 *Respondebitque mihi cras justitia mea* | different verb; the gloss is adducing the verse purely for *cras*, and the verb is what makes the tomorrow a promise rather than an answer. |
| 0107B | 0015 | *Nocte ac die operabamur ne quem gravaremus* (I Thes. II) | 1Thes 2:9 *nocte ac die operantes, ne quem vestrum gravaremus* | participle → finite verb, and *vestrum* dropped. |

---

### §4 · THE FULL LEMMA WALK — 161 spans, and the count checks

**Count check first (7a″ addendum).** `data/briefs/9002-lemmata-0012.txt` declares **161 spans**
for chunks 0012–0015. Counting the marked spans in my own Latin, **paragraph-bounded**, gives
**38 + 55 + 45 + 23 = 161**, with **zero paragraphs carrying an odd number of `*`** and
**zero guillemets in any of the four chunks**, so the paragraph-bounded and whole-file counts
are the same number and cannot have cancelled. The file's first entry (`[0096C] *A malo est.*`)
and last (`[0107B] *Sufficit.*`) are the first and last spans of my Latin. **The cut is right.**

Of the 161: **12 diverge from the Clementine materially and are marked `[var:]` (§3c) —
one of them, 0104A, was not flagged by the pre-scan.** The rest are set out below by class.
⛔ Nothing on this list is a report of a search; every span was read against
`sources/vulgate/clementine-flat.txt` by hand.

#### 4a. The eight `⚠ NOT in Clementine verbatim` flags that are INNOCENT, with reasons

| col | span | why it is not a divergence |
|---|---|---|
| 0097D | *Ut sitis fiili.* | Mt 5:45 *ut sitis filii Patris vestri* — the words agree; the only issue is our twin's `fiili`, which is §6's patch, not a Vulgate matter. |
| 0099A | *Recedite a me, operarii dolosi…* | Migne prints **no reference** and introduces it with *de quibus dicitur*. It is not a Vulgate quotation at all: the nearest texts are Mt 7:23 *discedite a me, qui operamini iniquitatem* and Lc 13:27 *discedite a me omnes operarii iniquitatis*, and it agrees with neither. **`[var:]` declined:** Pattern 14 compares a citation with its received text, and there is no verse here to be the comparand. Logged, not marked. |
| 0100C | *Vado ad Patrem meum* (Joan. VII) | Jo 16:10 and 14:12 both print *ad Patrem vado*; Migne adds *meum*, which Jo 20:17 supplies (*Ascendo ad Patrem meum*). **`[var:]` declined** — the divergence is *vado*/*ascendo* in a sentence the gloss uses only for *meum … et vestrum*, and a marker that named Jo 20:17 as "the" comparand would assert a verse identification I cannot make. ⚠ Migne's own reference `(Joan. VII)` matches none of the three; passed through per convention 4. |
| 0100C | *Pater noster dicitur,* | the span carries Migne's own verb *dicitur* inside it; the scripture is *Pater noster*, which agrees. |
| 0100D | *Si dimiseritis,* | clipped from Mt 6:14 *Si enim dimiseritis*; a fragment cut at a word boundary. |
| 0102C | *Dimitte nobis debita nostra. Et ne nos,* | Mt 6:12 + 6:13 in one span; the per-verse scan cannot match across the boundary. Both halves agree exactly. |
| 0103A | *Cum jejunatis.* | clipped from Mt 6:16 *Cum autem jejunatis*. |
| 0104C | *Si fuerit oculus,* etc. | clipped and reordered from Mt 6:22 *Si oculus tuus fuerit simplex*; the `etc.` marks the cut, and no word differs. |
| 0105C | *Quia non potestis Deo servire et mammonae.* | Mt 6:24 *Non potestis Deo servire et mammonae* with the gloss's own *Quia* prefixed. |
| 0106A | *Qui sunt hi, qui ut nubes volant?* | Is 60:8 has *Qui sunt **isti*** — a real one-word divergence, but *hi*/*isti* are the same demonstrative and no sense turns on it. **`[var:]` declined as immaterial** (Pattern 14 fires "in a way that changes the sense"); recorded here so the decline is visible. |

#### 4b. The spans that agree with the Clementine EXACTLY — checked, not assumed

⛔ These are the ones a report of findings alone would hide, and in a gospel a bare ✓ is the
weakest mark in the corpus, so each address below was **read**, not trusted.

Mt 5:37 *A malo est.* · Mt 5:39 *Non resistere.* ×2, *Praebe illi.*, *Alteram.* · Mt 11:29
*Discite a me, quia mitis sum, et humilis corde* · Ps 7:5 *Si reddidi retribuentibus mihi mala*
· Mt 5:40 *Et ei qui,*, *Tunicam tuam.*, *Et pallium;* · Mt 5:41 *Mille passus.*, *Alia duo.* ·
Mt 5:42 *Da ei.* ×2, *Et volenti.*, *Ne avertaris,* · 2Cor 9:7 *Hilarem enim datorem diligit
Deus* · Mt 5:43 *Audistis.*, *Odio habebis.* · Mt 5:44 *Diligite.*, *Benefacite.*, *Orate.* ·
Mt 5:45 *Filii.*, *Patris.*, *Qui solem.* · Mt 5:46 *Publicani.* · Mt 5:47 *Et si
salutaveritis.* · Mt 5:48 *Perfecti.* · Mt 6:1 *Attendite,*, *Apud Patrem vestrum.*,
***Attendite ne justitiam vestram faciatis coram hominibus;*** · Mt 6:2 *Cum ergo,*, *Tuba
canere.*, *Ante te.*, *Receperunt.* ×2 · Mt 6:3 *Nesciat.* · Mt 6:4 *In abscondito.*, *Videt in
abscondito.* · Mt 6:5 *Et cum oratis.* ×2, *In angulis.* · Mt 6:6 *Tu autem.*, *Clauso ostio.*,
*Patrem.* · Ps 41:9 *Apud me oratio Deo vitae meae* · Mt 6:7 *Orantes autem.*, *Putant enim.* ·
Mt 6:8 *Nolite ergo assimilari eis.*, *Scit enim pater.* · Mt 6:9 *Pater noster.* ×3,
*noster,*, *In coelis.*, *Sanctificetur nomen tuum.*, *Sanctificetur,* ×2 · Mt 6:10 *Adveniat
regnum tuum.*, *Fiat voluntas tua.*, *Sicut in coelo.* · Ps 83:3 *Cor meum et caro mea
exsultaverunt in Deum vivum.* · Mt 6:11 *Panem.*, *Nostrum.*, *Supersubstantialem.* · Sir 24:29
*qui edunt me adhuc esurient* · Mt 6:12 *Et dimitte,*, *Dimitte nobis debita nostra:*,
*Sicut.* · Mt 6:13 *Et ne nos inducas.*, *Et ne nos,*, *Sed libera nos a malo.*, *Sed libera
nos.*, *A malo,* · Mt 6:14 *Si enim dimiseritis.* · Mt 6:15 *Si autem non dimiseritis.* ·
Mt 6:16 *Nolite fieri.*, *Exterminant.*, *Facies suas.* · Ps 50:19 *Cor contritum et
humiliatum, Deus, non despicies* · Mt 6:17 *Unge caput tuum.* ×2 · Mt 6:18 *Et Pater tuus.* ·
Mt 6:19 *Nolite thesaurizare.* · Mt 6:20 *In coelo.* ×2 · Lc 21:33 / Mc 13:31 *Coelum et terra
transibunt: verba autem mea non transibunt.* · Mt 6:21 *Ubi enim est thesaurus.* · Mt 6:22
*Lucerna.* · Mt 6:23 *Si autem oculus.*, *Tenebrosum erit.*, *Si ergo lumen.* · Mt 6:24 *Nemo
potest,*, *Aut enim unum odio.*, *Aut unum sustinebit.*, *Alterum contemnet.*, *Et mammonae.* ·
Ps 73:23 *Superbia eorum qui te oderunt* · Mt 6:25 *Ideo dico vobis,*, *Animae vestrae.*,
*Nonne anima?* · Jo 12:25 *Qui amat animam suam, perdet eam* · Mt 6:26 *Respicite.*, *Et Pater
vester.* · Mt 6:27 *Quis autem vestrum,* · Mt 6:28 *Considerate lilia agri.* · Mt 6:29
*Quoniam nec Salomon,* · Mt 6:30 *In clibanum mittitur.*, *Quanto magis vos,*, *Modicae
fidei.* · Mt 6:31 *Nolite ergo solliciti,*, *Nolite,*, *Solliciti esse.* · Mt 6:32 *Haec enim
omnia.*, *Gentes.*, *Scit enim.*, *Pater vester.* · Mt 6:33 *Quaerite ergo.*, *Et haec
omnia.* · Mt 6:34 *Solliciti.*, *In crastinum.*, *Dies.*, *Sufficit.* — and the twelve
*usque ad* spans, which are Migne's formula and not scripture at all.

⭐ **Two of these deserve a line, because the gospel trap runs both ways.**
- **0096D *oculum pro oculo, dentem pro dente:*** — Mt 5:38 prints *Oculum pro oculo, **et**
  dentem pro dente*, so against Matthew this looks like a dropped *et*. It is not a divergence:
  **Lv 24:20 and Dt 19:21 print exactly Migne's form**, and the gloss's own frame is *Lex modum
  ultionis instituit* — he is quoting the **law**, not the evangelist. A `[var:]` here would
  have accused Migne of mis-citing a verse he is not citing.
- **0104B *Coelum et terra transibunt: verba autem mea non transibunt.*** — printed with no
  reference. Mt 24:35 has *non **praeteribunt***; **Lc 21:33 and Mc 13:31 have *non
  transibunt*, exactly as printed.** Inside a commentary on Matthew, the Matthaean parallel is
  the one that diverges and the non-Matthaean ones agree. No marker.

---

### §5 · ⚑ THE `MATCHES ONLY ELSEWHERE` CANDIDATE IN MY RANGE — @0106B, ADJUDICATED

    0106B  VERS. 28.-- Et de vestimentis.      only Tob 4:17   (lemma is Mt 6)

**Verdict: (1) a real divergence. `[var: Vulg. Mt 6:28 *Et de vestimento*, singular]`.**

- **(3) our file's corruption — refuted at the plate, and this had to go first.** Archive p.58
  and Gallica f53 both print `Et de vestimentis.` in the italic lemma of `VERS. 28.` A
  `-o`→`-is` ending is well within OCR's reach, so this was the live rival, and only the two
  plates could kill it. They did.
- **(2) a harmony parallel Migne has reached for — loses on the evidence, not on plausibility.**
  This is the explanation the brief warns is the commonest in a gospel, so I looked for the
  parallel and there is none: Lc 12:22–23 reads *neque corpori quid vestiamini* / *corpus plus
  quam vestimentum*; **no gospel verse anywhere prints *de vestimentis*.** The Tob 4:17 hit
  (*et de vestimentis tuis nudos tege*) is a three-word phrase collision in a work about
  almsgiving, with no thematic or textual route into a gloss on Mt 6:28 — the gloss below it
  expounds *sollicitudo* and *lilia agri*, i.e. Matthew, and nothing else.
- **(1) therefore stands.** Migne's lemma prints the plural where the Clementine prints the
  singular. The divergence is small and I say so plainly; what makes it markable rather than
  orthographic is that it is a **number change in a verse-lemma carrying its own `VERS.`
  address**, confirmed on two witnesses, and Pattern 14 exists precisely so that a reader can
  see it without opening a cruces file.

---

### §6 · THE PENDING TEI PATCH — @0105C `eleborata`

> dum timet ne aut possessa dispereant aut **eleborata** non contingant.

Our twin prints `eleborata`, which is no Latin word. **Both plates print `elaborata`** (Gallica
f53 line-broken as `ela-borata`; archive p.58 the same). This is the digitization's error, not
Migne's, so what is owed is a patch and **not** a `[sic:]` — the marker would publicly accuse
the plate of a defect neither copy carries.

Per `translation-style.md` §"What the English translates — THE PLATE WHERE READ", the English
renders what Migne printed: **"the things laboured for"**. Filed in
`data/briefs/9002-PENDING-TEI-PATCHES-0012.md`.

⚠ **A second patch is proposed there and I mark it LESS certain deliberately:** @0097D our twin
reads `Ut sitis **fiili**` where the sense and both plates want `filii`. The archive at 600 dpi
puts the tall `l` in third position (`f-i-l-i-i`); Gallica's native resolution is coarse there
and reads `fili`/`filii` but certainly not `fiili`. **Neither witness shows our twin's form**,
and the same `fii`-for-`fil` shape occurs at 11062 @0427D (`fiilialem` for *filialem*, with
*Filialis* printed correctly two sentences later) — a Corpus Corporum habit, not a PL 114
compositor's. The English renders *filii*, "sons". I would still like a third look before the
patch lands, and the patch file says so.

---

### §7 · THIS RANGE'S OWN CRUCES, BY COLUMN

- **@0096C** *dum veritati non credit* — the subject of *credit* is unexpressed. I supplied
  **"he"** = the *alter* whose *infirmitas* compels the oath (*sed alterius infirmitas id
  cogit*). The rival, "so long as it [the weakness] does not believe", makes *infirmitas* the
  believer, which the sentence's own contrast (thy oath is not from thy evil but from his)
  does not support. Named because the brief's dominant defect class is exactly this.
- **@0097A** *Praebe illi.* / *Alteram.* — see §0. Migne splits one clause of Mt 5:39 into two
  lemmata and glosses each; the English does not expand either into the other.
- **@0097D** `fiili` — §6.
- **@0098A** *qui dicit eum hujusmodi nec cibum sumere* — the sentence alludes to 1Cor 5:11
  *cum ejusmodi nec cibum sumere*, and `eum` for `cum` is an obvious guess. **Declined:** `eum`
  is a real word, it construes as printed (*dicit* + accusative + infinitive, *hujusmodi*
  attributive to *eum*), and both plates print `eum`. Rendered as printed, "that such a one is
  not even to take food". No marker on a corpus argument, however good.
- **@0098B** *Solem suum* stands inside the italic run of the Amos quotation, followed by
  Migne's `(Amos. IV)` and `etc.` — but the words are Matthew's (*qui solem suum oriri facit*),
  not Amos's. Migne's italic run has run two quotations together. Reproduced exactly as
  printed, including where the note falls; no marker, because nothing is defective — the
  divergence marked at this column is the Amos wording (§3c), not the join.
- **@0099C** *ut … oret Deum* — a third-person subjunctive in a passage whose lemma is
  *Tu autem* (second person singular). I rendered the impersonal **"that one should pray to
  God"** rather than "that thou shouldst pray", because Migne's verb is third person and
  Pattern 17 makes person a thing we track, not smooth.
- **@0100D** *ne a sanctificatione nominis **primus** in aliquo discrepemus* — a nominative
  singular *primus* inside a first-person-plural clause. Rendered as printed ("that we may not,
  first, in anything depart…"), which is as close as the words allow. The natural conjecture is
  *primum* (adverbial), an ordinary medieval spelling; **declined for a `[cj:]`** because the
  English is awkward, not false, which is the wrong side of Pattern 18's bar. Both plates print
  `primus`.
- **@0101D** *Vel sicut justis, ita in peccatoribus conversis* — Migne prints no *in* before
  *justis* though the three parallel members all have one. An ellipsis carried from the
  preceding member, not a defect; rendered "Or as in the just".
- **@0102C** *et peccantibus in se veniam promittit, et nobis et per nos aliis veniam
  promittit* — *veniam promittit* twice. **`[d:]` declined:** Pattern 11 marks a compositor's
  doubling, and this is not one — each clause has its own dative (*peccantibus in se* / *nobis
  et … aliis*) and each says something the other does not. Both copies print both. Recorded
  because a later reader will see the repetition and wonder.
- **@0102D** *Et ne nos, etc., deserens in tentatione sinas vinci* — the `ne` that governs
  *sinas vinci* is printed **inside the quoted lemma**, and the clause it governs is Migne's own
  prose. A first draft rendered it "deserting us in temptation, suffer us to be overcome", which
  an English reader parses as a positive command: **7a′ exactly — quarantining a fragment does
  not quarantine what it governs.** The English now reads "**do not** suffer us to be overcome".
  Supplying that negative is not an emendation; it renders the `ne` Migne prints, which was
  being dropped.
- **@0103B** *Demoliri est quasi dissipare* — a definition of *demoliri* inside a gloss whose
  lemma is *Exterminant*, with no *demolitur* anywhere near it (Mt 6:19–20's *demolitur* is
  eleven lines below, in a different verse). Rendered as printed; the abridgment has plainly
  spliced a note from another lemma. No marker: nothing is defective, and the `usque ad` formula
  removes words without suspending grammar.
- **@0104A** `VERS 20.--`, without the period after *VERS* that every other address in the
  range carries. **Both plates print `VERS 20.`** — the archive's apparent period is ink. Left
  exactly as printed, in the Latin and in the English. ⛔ This is the class 8950 proved cannot
  be corrected from one witness, and it is the reason I fetched Gallica before touching it.
- **@0104B** *Si etenim illa in genere suo munda tamen sordescit res dignior* — *illa … munda*
  has no verb; English cannot supply one without inventing it, so the rendering keeps the
  ellipsis ("For if those things are clean in their own kind, yet the worthier thing grows
  foul"). Both plates agree.
- **@0104A** *charitatem **amplectantes*** — not a form of *amplector* (*amplectentes*
  expected). **Both plates print `amplectantes`**, so it is Migne's, and corpus frequency is 1
  against 3 for the correct form. Treated under Pattern 9 as an ordinary medieval a/e
  participle spelling and rendered normally ("embracing"): no italics, no `[sic:]`, no crux
  status beyond this line. Recorded because it is the strongest non-word candidate in the range
  that I did **not** fire on.
- **@0105A** *Quidquid facis, vel ex amore Dei, vel servitute diaboli* is repeated four
  sentences later as *Quidquid enim facis, aut ex amore Dei, vel ex servitute diaboli*. Two
  different paragraphs, two different conjunction sets; not a doubling, and no marker. Both
  clauses are verbless in the Latin and are rendered verbless.
- **@0105B** *Superbia eorum qui te oderunt* is keyed `(Psal. III)` and is **Ps 73:23**. The
  words agree with the Clementine exactly, so no `[var:]`; Migne's number is passed through
  under convention 4 (his attributions and locators are not ours to correct). Same class:
  **@0102A** *qui edunt me adhuc esurient* keyed `(Eccl. XLIV)`, which is **Sir 24:29**; and
  **@0100C** `(Joan. VII)` on a sentence found in Jo 14/16/20.
- **@0106D** *qui novit nobis haec **in via sua** esse necessaria* — "his way" or "our way"?
  *sua* is reflexive to *qui novit*, i.e. God's, and I rendered "on his way". The rival ("on
  our journey") reads better and has no morphology behind it. Both plates print *in via sua* as
  three words; the archive's apparent `invia` is letterspacing.
- **@0107A** *Quid ergo amplius habet a gentili* — the subject of *habet* is unexpressed and I
  supplied **"he"** = the solicitous man of the preceding lemma (*facit similem gentili*), not
  the Gentile.
- **@0107B** *cura praesenti **mentes** obruitur* — plural subject, singular verb, on both
  plates. I rendered **"minds are overwhelmed by present care"**, which carries Migne's plural
  noun into the English and loses only the verb's number, for which English has no exponent
  (Pattern 9). ⚑ **The rival I weighed and rejected: a `[sic: *mentes*]` on the 11632 @0304A
  precedent** (*ut signa prius ardeat*, where a number disagreement took a marker because
  rendering it hid the defect). It loses because the two cases are not the same shape: at
  11632 the English could show nothing at all, whereas here the reader meets the plural
  "minds" opposite Migne's plural *mentes*, and only the concord — which no English sentence
  can carry — is lost. Marking it would put a `[sic:]` on a sound word to record a fact the
  facing Latin column already shows.
- **@0107B** *malitia Dei* — §3b, the one `[cj:]`.

#### ⚑ The ship test, and what the gate will say

`plate-gate.mjs` will flag all fourteen markers in this range until the orchestrator merges
`data/briefs/9002-PLATE-READS-0012.json` into `data/plate-reads.json` — every one of them stands
on a column read on **both** witnesses, and none was written before that read was made. This
stint did **not** touch the shared file (peers run concurrently).

---

### §8 · DECLINED-ODDITY LIST — every suspect word I did NOT mark, in one place

Ordered by column. On John and Luke this list produced nearly every correction those works got.

| col | printed | why declined |
|---|---|---|
| 0097A | *nomo* | **NOT declined — fired**, §3a. Listed for completeness. |
| 0097A | *exsistas* | archive reads `existas`; **Gallica and our twin read `exsistas`**. Archive artefact. |
| 0097D | *fiili* | our twin's corruption, not Migne's → patch, §6. No marker available. |
| 0098A | *eum hujusmodi* | real word, construes, both plates. §7. |
| 0099B | *hominibus* | the handed-over lead. §2. Two printings; no marker, no patch. |
| 0100D | *primus* | real word; awkward, not false. Pattern 18 bar not met. |
| 0102C | *veniam promittit* ×2 | not a compositor's doubling; each clause has its own dative. |
| 0103B | *Demoliri* | a spliced definition, not defective type. |
| 0103C | raised `*` after *abstinentiae* | archive ink; Gallica prints a plain colon. **No asterisk foot-note marker.** |
| 0104A | `VERS 20.` | both plates print it without the period. A verse address may not be altered on one witness — and here two witnesses say leave it. |
| 0104A | *amplectantes* | Migne's, on both plates; Pattern 9 medieval spelling. |
| 0104B | *illa … munda* verbless | ellipsis, rendered as such. |
| 0105A | *Quidquid … / Quidquid enim …* | rhetorical repetition across paragraphs, not dittography. |
| 0105B | `(Psal. III)` for Ps 73:23 | Migne's locator; convention 4. Same for `(Eccl. XLIV)` @0102A and `(Joan. VII)` @0100C. |
| 0105C | *eleborata* | our twin's corruption → patch, §6. |
| 0106A | *hi* for *isti* (Is 60:8) | real divergence, immaterial; `[var:]` declined. |
| 0106B | *fenum* for *foenum* | orthography (Pattern 9); the `[var:]` at this column is fired on *enim*/*autem* only. |
| 0106D | *in via sua* | not fused; archive letterspacing. |
| 0107A | *pertubant* | archive ink; Gallica and our twin read *perturbant*. |
| 0107B | *mentes obruitur* | concord error with no English exponent; §7. |

**Test 1 (strip every marker and read what is left)** was run mechanically over all four
chunks: the two markers that sit inside a sentence — `[sic: *nomo*]` @0097A and `[cj: *Dei*]`
@0107B — leave "that a faithful man should stand in judgment" and "the malice of God ought not
to be made to sprout". No stranded article, no stranded preposition, no doubled mark, and both
clauses keep their subject as well as their verb.

**Test 2 (name the host of every printed negative)** was run clause by clause. The sites where
it bites in this range are all in gloss prose, not in the lemmata: *Non tantum non repercutias*
(0097A, two negatives, two hosts), *non probantur … opera* (0098D, on the verb, not on
*simplici*), *ne non sit simplex ad Deum* (0103B, a deliberate double negative kept double),
*Non vero precatur non tentari, sed nec ad modicum vinci* (0102C, three), *Haec exempla non
prohibent providentiam **ne** laboret* (0106A, two, and the second belongs to *laboret*, not to
*prohibent*), and *Non quod laborare et providere hoc **non** deceat* (0106B, two). ⚑ The
trigger condition in 2a — a negative on a verb with a quantifier or correlative nearby — fires
at **0099B** (*non solum vera merces … sed vitium … augetur*, where the *non* governs *solum*
and the `sed` clause proves it) and at **0106A** (*non prohibent … ne laboret, sed
sollicitudinem*, where the `sed` shows *non prohibent* governs *providentiam* and the *ne*
governs *laboret*). Both were resolved from the sentence's own structure, not from what reads
well.

**Test 4 (does the English ASSERT what he asserts?)** was run last, paragraph by paragraph,
with the counts already clean. It is what produced §3b, §7's @0107B entry and §7's @0099C
entry; nothing else in the range changed under it.


---

# §5 · STINT 0016–0021 (cols 0107C–0123D)

*Preserved from `cruces-0016.md`, unedited; headings demoted one level. Companion files: `data/briefs/9002-PLATE-READS-0016.json`, `data/briefs/9002-PENDING-TEI-PATCHES-0016.md`, `data/briefs/9002-lemmata-0016.txt`.*

## 9002 — cruces, stint 0016–0021 (cols 0107C–0123D)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0016–0021: `CAPUT VII.`
through `CAPUT XI.`, 6,577 Latin words, the Sermon-on-the-Mount close and the miracle and
mission chapters.

Companion files from this stint: `data/briefs/9002-PLATE-READS-0016.json` (every page opened, both
witnesses) and `data/briefs/9002-PENDING-TEI-PATCHES-0016.md` (seven sites where our Latin has
departed from Migne).

---

### (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Markers.** Zero `[sic:]`, zero `[cj:]`, zero `[d:]`, zero `[ed:]`, **six `[var:]`**.

**2. When a `[var:]` fires.** I inherited the 0000–0005 stint's bar and did not loosen it: Migne's
quoted scripture takes a `[var:]` where his words **assert something different** from the received
text — a *substitution*. It does **not** fire where he merely **shortens** a verse, where he
**splices two verses**, where the difference is **orthographic** (*Nunquid*/*Numquid*,
*quandiu*/*quamdiu*, *patrem familias*/*patremfamilias*), or where the difference is the **form of
a transliterated proper name** (*Gerazenorum*, *Scariothis*).

⚑ **One extension I did make, and it should be argued with if it is wrong.** The 0000 stint's list
is six *lexical* substitutions. Three of my six are **inflectional** — a tense (*Appropinquabit*
for *appropinquavit*), a mood (*conteret … Dominus* for the imperative *contere*), and a stem
(*dicite* for *discite*). I fired them because in each case **the English word on the page changes**:
"shall draw near" for "hath drawn near", "the Lord shall crush them" for "crush thou them", "say ye"
for "learn". A reader who is told nothing would take Migne's Latin for the Vulgate's. The 0000
stint's own @0069A (*invocavit* for *invocabit*) is exactly this class and it fired, so I take the
precedent to be established rather than new.

**3. When a single-word `[var:]` fires.** Launch brief §2 requires a witness of its own, because a
one-word divergence has two possible owners. **Two of my six are single words** (@0116B *dicite*,
@0118A *Appropinquabit*) and for both the second owner is eliminated: **I read the word on both
witnesses.** Ownership is settled by the plate, never by the argument.

**4. Every claim about the type rests on two witnesses.** I read all **nine** pages of my range on
the archive PDF **and** all **nine** leaves on Gallica, corner numbers first on each. **This
changed the answer nine times** — see §(e). Nothing in this file rests on one copy, and in
particular **a verse number I would have altered on the archive alone is refuted at Gallica**
(§(d) 14).

**5. Where the plate and our twin disagree, the English renders the plate** and the site is filed as
a pending TEI patch. Seven sites, all seven Corpus Corporum's, none of them Migne's.

**6. The vocabulary axes bind.** `turba` → **crowd** (5 occurrences; *multitudo* does not occur in
this range at all). `daemonium`/`daemones` → **demons**, `daemoniacus` → **demoniac**;
`diabolus` → **devil**. `gentes`/`gentium` → **Gentiles** in the *Judaei*/*gentes* opposition
(0113B, 0115A, 0116A, 0117D, 0119A, 0121A, 0123B) and **nations** in the one plainly generic
quotation, *Docete omnes gentes* at 0117D, which the axis names explicitly. `gentilis` → **Gentile**
(0113B), `gentilitas` → **the Gentile world** (0116D ×2, 0122D). `ethnicus` → **heathen** (0116A).
`mysterium` → **mystery** (0122B), `sacramentum` → **sacrament** (0108C, 0113B, 0120B).
⚑ **`natio` does not occur in this range.** The grep returns four hits and all four are the
documented false positives — *dignatione*, *incarnationem*, *indignatione*, *venatio*. Recorded
because the brief asks for the instrument check to be stated, not merely run.

**7. The commentator's own voice is not archaised.** `dicit`/`ait` → *says*; `-eth` and `-est`
forms appear **only inside quoted scripture** (*that saith*, *He raineth*, *He that findeth*,
*leadeth*, *knoweth*). `thou` is singular and `you` plural throughout — see §(d) 20.

---

### (b) SPAN COUNT — 335 against 335, paragraph-bounded

`data/briefs/9002-lemmata-0016.txt` declares **335 spans** for chunks 0016–0021, of which 0 are
open-ended.

Counting my own Latin **paragraph by paragraph** (per the file's own warning that a bare total can
agree falsely when two errors cancel):

| chunk | italic `*…*` | guillemet `« … »` |
|---|---|---|
| 0016 | 43 | 0 |
| 0017 | 22 | 0 |
| 0018 | 79 | 0 |
| 0019 | 66 | 0 |
| 0020 | 73 | 0 |
| 0021 | 52 | 0 |
| **total** | **335** | **0** |

**335 = 335, exact.** No paragraph in my range carries an odd number of asterisks, and there is not
one guillemet in 6,577 words, so both failure modes that make a bare total lie are excluded.
Matthew is an **italic-lemma** book, as the 0000 stint found.

⚑ **A note on the brief's own classification, because it changes the arithmetic.** The inventory's
`VERS.` lines are those matching `VERS. n.--`; **two verse lemmata in my range are printed by Migne
WITHOUT the dash** — `VERS. 25. *Suscitaverunt.*` (0114B) and `VERS. 28. *In regionem
Gerazenorum.*` (0114C) — and they are therefore filed among the second lemmata. Counted correctly
my range holds **134 verse lemmata**, not the 132 a mechanical read of the brief gives. Both
irregular addresses are Migne's and are reproduced verbatim under convention 1; both were read on
both witnesses (§(e)).

The 335 split: **134 verse lemmata · 53 `*usque ad*` formula spans · 148 second lemmata, inline
scripture, name-etymologies and technical tags.**

---

### (c) THE LEMMA DIVERGENCE LIST — all 335 spans, collated against `sources/vulgate/clementine-flat.txt`

Migne's citation sigla pass through verbatim under convention 4 and are **not** treated as
divergences; a wrong siglum is his attribution practice. Three in my range are demonstrably wrong
and are recorded, not corrected: **`(Psal. VIII)`** at 0113C on what is **Ps 18:13**;
**`(Luc. IX)`** at 0119C on what is **1 Cor 9:9** (his own sentence says *Apostolus*); and
**`(I Cor. IV)`** at 0123D on what is **2 Cor 4:17**.

#### C1. THE SIX THAT FIRED

| col | Migne prints | received text | why it fired |
|---|---|---|---|
| **0114D** | VERS. 32.-- *Et ecce **magno**.* | Mt 8:32 *et ecce **impetu** abiit totus grex* — no *magno* | The word is not in Matthew's verse at all; it is **Mark's** (Mc 5:13 *magno impetu grex praecipitatus est*). Read on both witnesses. A reader who is told nothing takes a harmony reading for Matthew's text. ⚑ Under convention 3 the fragment is rendered as the phrase it stands for, "with great violence", so the divergent word is **in** the English and cannot be passed over silently. |
| **0115C** | *Duplici contritione **conteret** eos **Dominus**.* | Jr 17:18 *duplici contritione **contere** eos* — an imperative, no subject | Mood **and** an added subject: a prophet's imprecation becomes a statement about what the Lord will do, and Migne adduces it as a statement (*unde:*). This is the sharpest of the six. Read on both witnesses. |
| **0116B** | VERS. 13.-- *Euntes autem **dicite**.* | Mt 9:13 *Euntes autem **discite** quid est* | "Go and **say**" for "Go and **learn**" — a different imperative, and the whole point of Mt 9:13 is that the Pharisees are sent to learn. Single word, so §2's bar applies, and it is met on the harder limb: **read on both witnesses** (archive p.63, Gallica f58), so our transcription is eliminated as the second owner. |
| **0118A** | VERS. 7.-- ***Appropinquabit** regnum coelorum.* | Mt 10:7 ***appropinquavit** regnum caelorum* | Future for perfect in the apostles' own commission. Single word; **read on both witnesses**. And the gloss re-quotes it, in roman, at the close of the same paragraph — so the tense stands twice on the page. |
| **0118B** | *…nunquid defuit vobis aliquid? At illi dixerunt: **Non**.* | Lc 22:35 *numquid aliquid defuit vobis?* … (v. 36 answer) *At illi dixerunt: **Nihil**.* | "They said: **No**" for "They said: **Nothing**". The English word on the page changes; the reordering of *defuit vobis aliquid* and the loss of *et calceamentis* are ellipsis and are **not** what the marker names. |
| **0123D** | *…aeternum pondus gloriae operatur **in coelis**.* | 2 Cor 4:17 *aeternum gloriae pondus operatur **in nobis*** | "worketh … **in heaven**" for "**in us**" — a substitution that moves the whole proof-text from the believer to the place. The heavy abridgment of the rest of the verse is ellipsis and is not marked. |

#### C2. DECLINED — the fifteen other verse lemmata that are not verbatim in their own Matthew verse

**134 verse lemmata were collated against their own chapter and verse in the Clementine. 118 are
verbatim. Sixteen are not, and three of those sixteen fired (above).** Here are the other thirteen,
with the fourteenth — @0122D — belonging to §(c) C4 because the divergence is ours, not Migne's.

- **0108B Mt 7:4** *Aut quomodo dicis **fratri** tuo.* — ⭐ **the Clementine is the one in error
  here**: `clementine-flat.txt` reads *fratri**s** tuo*, which does not construe with *dicis*.
  Migne is right. Recorded because a mechanical collation reports this as a Migne divergence and it
  is the reverse.
- **0108C Mt 7:6** *Nolite sanctum,* etc. — Migne cuts *dare*; a fragment, and his own `etc.` marks
  the cut.
- **0110C Mt 7:16** *Nunquid.* — orthography only; the Clementine spells *Numquid* throughout and
  therefore every *Nunquid* in this work flags mechanically. Same at **0116C** (Mt 9:15
  *Nunquid possunt*), **0117C** *Nunquid usque in coelum exaltaberis?* (Mt 11:23) and **0119C**
  *Nunquid de bobus cura est Deo* (1 Cor 9:9).
- **0111C Mt 7:23** *Nunquam novi vos.* — same class (*Numquam*).
- **0112B Mt 7:27** *Et cecidit **fuitque** ruina **ejus** magna.* — Mt 7:27 has *et cecidit, et
  fuit ruina **illius** magna*. An enclitic for *et*, and *ejus* for *illius*: two ways of writing
  the same thing, and nothing in the gloss turns on either. ⚠ **The nearest of my declines to one I
  could be argued out of**, since it is a two-word difference inside a whole quoted clause and §2's
  prior favours firing on quoted clauses. It stays declined because neither word changes what the
  sentence asserts, and the gloss expounds *ruina* and *conscientia*, not the pronoun.
- **0113A Mt 8:7** *Ego veniam et curabo eum. Et respondens centurio ait,* etc. — the lemma splices
  across the 8:7/8:8 verse break, which is why the per-verse scan cannot match it. Not a divergence.
- **0114C Mt 8:28** *In regionem **Gerazenorum**.* — Clementine *Gerasenorum*. ⭐ **Re-read on both
  witnesses at the coordinator's request, 2026-09-05, and adjudicated under §2 rather than swept
  under Policy 2 — see §(d) 6a for the ruling.** Both copies print the *z*, twice each; our twin
  agrees; the divergence is Migne's beyond doubt and it is still **declined**, because it is the
  form of a transliterated place-name and nothing any sentence says turns on the letter. The English
  keeps his *z* (Gerazenes / Geraza) rather than normalising to the received English form.
- **0116C Mt 9:15** *Lugere **quandiu** cum illis est sponsus.* — *quandiu* for *quamdiu*;
  orthography.
- **0117D Mt 10:4** *Et Judas **Scariothis**.* — Clementine *Judas Iscariotes*. The ordinary
  medieval form of the name; nothing in the gloss touches the letters (it is about choosing a
  betrayer). Policy 2.
- **0119A Mt 10:25** *Si **patrem familias**.* — the Clementine sets *patremfamilias* as one word.
  A word division in the printing of the comparand, not a reading.
- **0120D Mt 11:9** *Plusquam propheta.* — Mt 11:9 has *plus quam prophetam*. Word division, plus
  the accusative brought to the nominative because the phrase is standing as a lemma head. Declined
  as a lemma-form adaptation; the English reads "More than a prophet."
- **0121A Mt 11:12** *A diebus Joannis.* — Mt 11:12 has *A diebus **autem** Joannis **Baptistae***.
  Ellipsis at both ends of a two-word lemma.
- **0122B Mt 11:21** *Vae tibi,* etc. — verbatim as far as Migne's `etc.`; the ⚠ in the pre-scan is
  the truncation. ✓

#### C3. DECLINED — second lemmata and inline scripture that diverge

Thirty-three of the 148 non-verse spans did not match the Clementine verbatim. Six of them are the
`[var:]` sites or the patched site; the rest are these, every one collated word by word:

- **0109A** *Ecce **ego** sto ad ostium et pulso* `[n: (Apoc. III)]` — Apc 3:20 has *Ecce sto*. One
  inserted pronoun in a quotation adduced for the act of knocking. Declined; the gloss argues from
  *pulso*.
- **0109C** *Domini **enim** est terra* `[n: (Psal. XXIII)]`, etc. — Ps 23:1 has *Domini est terra*.
  *enim* is Migne's splice into his own sentence, exactly like the *quia* the 0000 stint declined at
  @0067B.
- **0109D** *Omnia ergo **quaecunque**,* etc. — Mt 7:12 *quaecumque*; orthography.
- **0109D** *Haec est lex et prophetae,* etc. — Mt 7:12 has *haec est **enim** lex, et prophetae*.
  Ellipsis.
- **0111B** *Qui dicit: Domine, Domine.* — Mt 7:21 has *qui dicit **mihi**, Domine, Domine*.
  Ellipsis in a lemma the gloss expounds for the *dicere*, not the *mihi*.
- **0112A** *Inimicus homo hoc fecit, **cujus*** — Mt 13:28 reads *Inimicus homo hoc fecit* exactly;
  the *cujus* is the gloss's own relative, caught inside Migne's italic run. Not a divergence, and
  the English keeps the run: "*An enemy hath done this, whose* works are all unstable".
- **0112D** *Non veni solvere **legem**, sed adimplere,* etc. — Mt 5:17's second clause is *non veni
  solvere, sed adimplere*; *legem* stands in the **first** half of the same verse. A compression of
  one verse into one clause, not a substitution. ⚑ Recorded with care because the gloss around it
  argues about *lex* — but the word it argues from is on the page in the verse either way.
- **0114C** *In regionem Gerazenorum.* — §C2.
- **0115A** *vestitum et sana mente sedere ad pedes **Jesu*** `[n: (Luc. VIII)]` — Lc 8:35 has
  *vestitum **ac** sana mente, ad pedes **ejus***, and *sedentem* where Migne has the infinitive.
  Migne has recast the verse into the indirect construction his own sentence needs
  (*invenerunt hominem … sedere*). Declined as an adaptation; *ad pedes Jesu* for *ad pedes ejus*
  asserts the same thing and the antecedent is Jesus in both.
- **0116A** *In viam gentium ne abieritis. Peccatores venientes discumbebant.* — two verses in one
  italic run: Mt 10:5 verbatim, then Mt 9:10's *peccatores venientes, discumbebant*. Not a
  divergence; the run's composition is why the scan cannot match it.
- **0116A** *quia multi sequebantur [0116B] eum* `[n: (Marc. II)]` — Mc 2:15 reads *erant enim
  multi, qui et sequebantur eum*. Migne compresses to a *quia* clause for his own syntax. Declined;
  and note the **column anchor stands inside the span**, which is a second reason the scan misses it.
- **0116C** *Lugere quandiu cum illis est sponsus.* — §C2.
- **0118B** *non nisi virgam:* — **not a quotation at all.** It is Migne's own summary of Mark, set
  in italic beside *neque virgam* precisely so the two can be contrasted (*Matthaeus et Lucas dicunt
  neque virgam; Marcus non nisi virgam*). Mc 6:8 reads *nisi virgam tantum*. No `[var:]` can be
  written on a paraphrase the author offers as his own.
- **0119A** *In **via** gentium ne abieritis,* — Mt 10:5 has *In **viam** gentium*, and **Migne
  himself prints *viam* at 0116A**. Read on both witnesses at both columns: he prints *viam* in
  the one place and *via* in the other. This is his own orthographic variation inside one work —
  the class the 0000 stint declined for *Nazareus*/*Nazaraeus* — and the English renders "the way
  of the Gentiles" at both, since English has no exponent for the case.
- **0119B** *Sufficit diei malitia sua. Beelzebub.* — Mt 6:34 *sufficit diei malitia sua* verbatim;
  *Beelzebub* is the next lemma, swallowed into the same italic run. Not a divergence.
- **0119C** *Nunquid de bobus cura est Deo* `[n: (Luc. IX)]` — 1 Cor 9:9 *Numquid de bobus cura est
  Deo?* Orthography, plus a wrong siglum which is Migne's and passes through.
- **0119D** *Erunt quinque in una domo divisi, tres in duo et duo in tres **dividentur**.* —
  Lc 12:52 reads *erunt **enim ex hoc** quinque in domo una divisi, tres in **duos**, et duo in
  tres*. Word order, *duo* for *duos*, and a supplied verb to close a sentence the abridgment has
  detached. Declined as quoting practice; nothing in the gloss turns on any of the three.
- **0120C** *Qui ponunt pulvinaria sub cubito,* — closest to Ez 13:18 *quae consuunt pulvillos sub
  omni cubito manus*, but the vocabulary is wholly different and **Migne gives it no siglum and does
  not introduce it as a quotation**: it stands as a second italic lemma beside *Ecce qui mollibus*.
  Declined. ⛔ I record this as **the decline I am least sure of** — if it is a scripture citation it
  is a heavy one, and a `[var:]` naming Ez 13:18 would be defensible. It stays declined on rule B:
  when unsure and unable to settle it from the file, the crux is always available and always safe.
- **0121D** *Convertimini ad me in toto corde vestro in jejunio et fletu et planctu*
  `[n: (Joel. II)]` — Jl 2:12 reads *in jejunio, et **in** fletu, et **in** planctu*. Two dropped
  prepositions; a contraction that asserts nothing new.
- **0121D** *et hujusmodi* — not scripture; Migne's own "and the like". ⚑ Note that he sets it
  **roman** after the Psalm quotation twelve words earlier and **italic** here; our twin has both
  right, and both witnesses confirm it. The English mirrors the change.
- **0122B** *mysterium meum;* · *domus fructuum* · *venatorum. Si in Tyro,* — the first two are
  Jerome's onomastic glosses of Corozain and Bethsaida, not quotations; the third is the tail of an
  etymology with the next lemma (Mt 11:21 *Si in Tyro*) run into the same span.
- **0122C** *villa pulcherrima,* — the etymology of Capharnaum. Not a quotation.
- **0122C** *Justificata est Sodoma soror tua ex te,* — **not in the Clementine anywhere.** The
  nearest is Ez 16:51–52 (*justificasti sorores tuas* … *justificatae sunt enim a te*), which Migne
  has recast into a sentence addressed to Jerusalem. **Declined because a `[var:]` names one
  received reading and there is no single verse here to name** — the 0000 stint's conflation-decline
  at @0068A, applied to the same shape. Recorded so that a later reader does not read the ⚠ as an
  unexamined site.
- **0122D** *Domine coeli et terrae.* — this scores ✓ Mt 11:25 in the pre-scan against the
  *ablative* form, and the reason it fails my stricter per-verse test is that Mt 11:25 spells
  *caeli*. Orthography (*coelum*/*caelum*) throughout this work; not reported again.
- **0123B** *Nisi Filius, et cui **Filius voluerit**,* etc. — Mt 11:27 has *nisi Filius, et cui
  **voluerit Filius** revelare*. Word order in a two-word span. Declined.
- **0123B** *Tollite super vos.* — the gloss's own re-quotation of its lemma (Mt 11:29 *Tollite
  jugum meum super vos*), a fragment with the governed noun cut. Declined.

#### C4. THE ONE DIVERGENCE THAT WAS OURS

- **0116B** *Non enim veni **vocure** justos.* — a non-word. **Both witnesses print *vocare*.**
  Corpus Corporum's corruption, filed as TEI patch 2, and the English renders "to call". ⭐ **Had
  the corruption stood, the 7a″ collation would have reported a Vulgate divergence at Mt 9:13 that
  does not exist** — the class launch-brief §8a names (the digitization *manufacturing* a
  divergence a collation then dutifully finds). This is that class caught in the act, and it is
  what reading the plate inline buys.
- **0122D** *Respodens Jesus.* — same class; both witnesses print *Respondens*; TEI patch 6. Mt
  11:25 agrees exactly once the patch lands.
- **0117A** *canantes* (in the gloss, not a lemma) — both witnesses print *canentes*; TEI patch 7.

#### C5. CHECKED AND AGREEING WITH THE CLEMENTINE EXACTLY

**118 of the 134 verse lemmata are verbatim in Matthew's own chapter and verse.** Rather than print
118 fragments, I record the collation as it was run: each lemma was normalised (markers and column
anchors stripped, punctuation and case ignored) and searched **inside the text of its own verse**,
the chapter taken from the `CAPUT` head and the verse from the `VERS.` address. That is the test
launch brief §3 asks for, and it is the one a bare ✓ cannot pass: it cannot be satisfied by a
harmony parallel in another gospel, because the other gospel's verse is never consulted.

Verse lemmata verbatim in their own verse, in order: **Mt 7:1** *Nolite judicare* · **7:2** *In quo
enim* · **7:3** *Quid autem vides* · **7:5** *Hypocrita, ejice* · **7:7** *Petite* · **7:8** *Omnis
enim* · **7:9** *Aut quis* · **7:10** *Si piscem* · **7:11** *Si ergo vos* · **7:12** *Omnia ergo* ·
**7:13** *Intrate* · **7:14** *Quam angusta* · **7:15** *Attendite* · **7:17** *Sic omnis arbor* ·
**7:18** *Non potest* · **7:19** *Omnis arbor* · **7:20** *Igitur ex fructibus* · **7:21** *Non
omnis qui dicit* · **7:22** *Multi dicent* · **7:24** *Omnis ergo* · **7:25** *Et descendit* ·
**7:26** *Qui audit verba mea* · **7:28** *Turbae* · **8:1** *Cum autem descendisset* · **8:2**
*Adorabat eum dicens: Domine* · **8:3** *Extendens* · **8:4** *Vide, nemini* · **8:8** *Non sum
dignus* · **8:9** *Nam et ego* · **8:11** *Ab oriente et occidente venient et recumbent* · **8:12**
*Filii autem regni ejicientur* · **8:14** *Et cum venisset* · **8:15** *Et tetigit* · **8:16**
*Vespere autem facto* · **8:18** *Videns autem Jesus* · **8:19** *Et accedens* · **8:20** *Vulpes
foveas habent* · **8:21** *Alius autem* · **8:22** *Mortuos suos* · **8:23** *Et ascendente* ·
**8:24** *Ecce motus* · **8:25** *Suscitaverunt* · **8:26** *Modicae* · **8:27** *Qualis est hic* ·
**8:29** *Jesu fili Dei* · **8:31** *Mitte nos* · **8:33** *Pastores autem fugerunt* · **8:34**
*Exiit obviam* · **9:1** *In civitatem* · **9:2** *Offerebant* · **9:5** *Quid est* · **9:6** *Tunc
ait paralytico* · **9:7** *Et surrexit* · **9:9** *Vidit hominem* · **9:10** *In domo* · **9:11**
*Quare cum publicanis* · **9:12** *At Jesus audiens, ait* · **9:14** *Discipuli autem tui non
jejunant* · **9:16** *Nemo autem* · **9:17** *Neque mittunt* · **9:18** *Ecce princeps unus
accessit* · **9:20** *Mulier quae* · **9:21** *Si tetigero* · **9:22** *Confide, filia* · **9:23**
*Vidisset* · **9:24** *Non est* · **9:25** *Et cum ejecta esset* · **9:27** *Transeunte* · **9:32**
*Hominem* · **9:34** *Pharisaei autem* · **10:1** *Et convocatis* · **10:2** *Petrus et Andreas* ·
**10:3** *Thomas* · **10:5** *In viam* · **10:8** *Infirmos curate* · **10:9** *Aurum neque
argentum* · **10:10** *Neque calceamenta* · **10:11** *Interrogate quis* · **10:14** *Excutite
pulverem de pedibus* · **10:16** *Ecce ego mitto* · **10:18** *In testimonium* · **10:19** *Dabitur
enim vobis in illa hora quid loquamini* · **10:21** *Tradet autem frater* · **10:22** *Qui autem* ·
**10:23** *Cum autem* · **10:24** *Non est discipulus* · **10:26** *Ne ergo timueritis eos* ·
**10:27** *Quod dico* · **10:29** *Super* · **10:30** *Numerati* · **10:32** *Qui confitebitur* ·
**10:33** *Qui autem* · **10:34** *Pacem* · **10:35** *Veni enim* · **10:37** *Qui amat patrem* ·
**10:38** *Et qui non accipit* · **10:39** *Qui invenit* · **10:40** *Qui recipit* · **10:42** *Et
quicumque* · **11:2** *Joannes autem* · **11:3** *Tu es* · **11:6** *Qui non fuerit* · **11:7** *De
Joanne* · **11:8** *Ecce qui mollibus* · **11:11** *Major Joanne* · **11:13** *Omnes enim* ·
**11:14** *Et si vultis recipere* · **11:16** *Cui autem* · **11:17** *Cecinimus vobis* · **11:18**
*Venit enim* · **11:19** *Et justificata est sapientia* · **11:20** *Tunc* · **11:23** *Et tu,
Capharnaum* · **11:26** *Ita pater* · **11:27** *Omnia mihi* · **11:29** *Tollite jugum* · **11:30**
*Jugum enim meum*.

Second lemmata and inline scripture verbatim in the Clementine (79 spans; the reference given is
the one the gloss is using, not merely the first hit): *In qua mensura* ×2 (Mt 7:2) · *Et conversi*
(Mt 7:6) · *Nostis bona* · *Dabit bona* · *Petentibus se* (Mt 7:11) · *Ut faciant vobis homines*
(Mt 7:12) · *Per angustam* · *Et spatiosa* (Mt 7:13) · *Et pauci* (Mt 7:14) · *Ad vos in vestimentis
ovium* (Mt 7:15) · *A fructibus eorum* (Mt 7:16) · *Nemo potest dicere: Dominus Jesus, nisi in
Spiritu sancto* (1 Cor 12:3, under Migne's own correct siglum) · *Multi dicent* (Mt 7:22) · *Qui
operamini iniquitatem* (Mt 7:23) · *Qui autem* (Mt 7:26) · *Assimilabitur* · *Viro* · *Qui
aedificavit* · *Supra petram* (Mt 7:24) · *Pluvia* (Mt 7:25) · *Viro stulto* · *Super arenam*
(Mt 7:26) · *Cum autem descendisset* · *Secutae sunt* (Mt 8:1) · *Si vis, potes me mundare*
(Mt 8:2) · *Tetigit* ×2 · *Volo* · *Mundare* (Mt 8:3) · *Nemini dixeris* (Mc 1:44, Migne's siglum
correct) · *Vade* · *Ostende te sacerdoti* · *Offer* · *In testimonium* ×2 (Mt 8:4) · *vir justus et
timens Deum* (Act 10:22) · *Pluit super justos et injustos* (Mt 5:45) · *In tenebras exteriores* ·
*Fletus* (Mt 8:12) · *Et febricitantem* (Mt 8:14) · *Delicta quis intelligit: ab occultis meis munda
me* (Ps 18:13) · *Et surrexit* (Mt 8:15) · *ambulantibus illis in via* (Lc 9:57) · *Magister* ×2
(Mt 8:19) · *Filius autem hominis non habet* (Mt 8:20) · *Domine* (Mt 8:21) · *Dormiebat* (Mt 8:24)
· *Imperavit* (Mt 8:26) · *Duo habentes* · *Saevi* (Mt 8:28) · *Jesu fili Dei* · *Ante tempus* ·
*Torquere nos* (Mt 8:29) · *Et invenerunt hominem* (Lc 8:35) · *Rogabant eum* (Mt 8:34) · *Fidem* ·
*Confide, fili, remittuntur tibi* (Mt 9:2) · *Surge* · *Tolle lectum tuum et vade in domum tuam*
(Mt 9:6) · *In telonio* · *Matthaeum* · *Surgens* (Mt 9:9) · *Ecce multi publicani* (Mt 9:10) ·
*Publicanis et peccatoribus* (Mt 9:11) · *Non est opus valentibus medicus, sed male habentibus*
(Mt 9:12) · *Et tunc jejunabunt* · *Jejunabunt* (Mt 9:15) · *Tollit enim* (Mt 9:16) · *Duodecim
annis* · *Accessit* (Mt 9:20) · *Et turbam* (Mt 9:23) · *Et tenuit manum* (Mt 9:25) · *Duo caeci*
(Mt 9:27) · *Duodecim* (Mt 10:1) · *Docete omnes gentes* (Mt 28:19) · *Regnum Dei intra vos est*
(Lc 17:21) · *Gratis accepistis* ×2 (Mt 10:8) · *Neque pecuniam in zonis vestris* (Mt 10:9) ·
*Neque virgam* ×2 (Mt 10:10) · *Dignus est* · *Dignus sit* · *Ibi manete* (Mt 10:11) · *Excutite*
(Mt 10:14) · *Sicut serpentes* (Mt 10:16) · *praedicate* (Mt 10:27) · *Nonne duo passeres?* ·
*Et unus ex illis* (Mt 10:29) · *Nonne quinque passeres veneunt dipondio* (Lc 12:6) · *Separare*
(Mt 10:35) · *Et sequitur me* (Mt 10:38) · *Uni ex minimis* (Mt 10:42) · *qui venisti* (Migne's own
counterfactual, not a quotation — see below) · *Lamentavimus* (Mt 11:17) · *Exsultate Deo adjutori
nostro, jubilate Deo Jacob* (Ps 80:2) · *angustia* · *venatio* (etymologies) · *exstitisti* ·
*Parvulis* (Mt 11:25) · *Quoniam sic fuit placitum ante te* (Mt 11:26) · *Et nemo novit Filium*
(Mt 11:27) · *Discite a me* (Mt 11:29) · *Arcta via est quae ducit ad vitam* (Mt 7:14, quoted back
in CAPUT XI with Migne's own *supra dicitur*).

⚑ **Three ✓ in the pre-scan that a careless reader would have taken as clearance**, checked and
recorded:
- **0120B** *qui venisti,* scores ✓ **3 Rg 13:14**. It is not a quotation of 3 Kings at all: the
  sentence is *Non ait qui venisti*, Migne saying that the text does **not** read those words
  (Mt 11:3 has *qui venturus es*). A mention, not a use.
- **0113B** *Pluit super justos et injustos* scores ✓ **Mt 5:45** inside a gloss on Mt 8:12. That is
  correct — Migne is adducing the Sermon on the Mount as a proof-text, three chapters back in his
  own gospel. Not a harmony parallel answering for the wrong evangelist.
- **0123D** *Arcta via est quae ducit ad vitam* scores ✓ **Mt 7:14** inside CAPUT XI. Also correct,
  and Migne signposts it himself (*cum supra dicitur*).

#### C6. NOT SCRIPTURE — name-etymologies and technical tags

Of the 38 single-word non-verse spans, most are ordinary Vulgate words re-quoted from the lemma
above and are covered in C5. The genuinely non-collatable ones are Jerome's onomastics — *angustia*
(Tyre) · *venatio* (Sidon) · *mysterium meum* (Corozain) · *domus fructuum* / *venatorum*
(Bethsaida) · *villa pulcherrima* (Capharnaum) — together with the Greek words Migne prints in
Greek, **Τέλος** at 0115D and **Κωφὸς** at 0117C, both reproduced verbatim and not transliterated.

#### C7. `usque ad` — the `etc.` splice test, run per occurrence

**55 occurrences of the words in my range. 53 are the formula; 2 are ordinary Latin.**

**All 53 formula occurrences stand inside an italic span AND follow an `etc.,` immediately** — the
`etc.` splice test is satisfied 53 times out of 53, with no borderline case anywhere in the range.
Two of the 53 have a **column anchor between the `etc.,` and the `usque ad`** (@0109A, @0117B); a
raw adjacency grep misses both, and they are the formula. All 53 render **"as far as"**.

The two ordinary uses carry no `etc.`, stand outside every italic span, and are rendered by sense.
The brief requires a departure from the axis to name its Latin:

- **@0113B** *occidens, qui passiones **usque ad mortem** tolerant* — temporal, rendered "who bear
  sufferings **even unto death**".
- **@0122B** *ut Paulum Tyro abeuntem omnes cum uxoribus et liberis **usque ad naves**
  prosequerentur* — spatial, rendered "followed Paul **as far as** the ships". ⚑ The English words
  coincide with the formula's, by accident of sense and not by application of the axis; the same
  coincidence the 0000 stint recorded at @0065D.

---

### (d) CRUCES OF THIS RANGE, BY COLUMN

#### 1. @0107C — a mark Migne prints and our twin has lost (the one band-test mismatch)

`temere judicant haec judicia prohibet` in our Latin; **both witnesses print a mark**, the archive
an unambiguous colon and Gallica the upper point of one. The English carries a colon: "they judge
rashly: these judgments he forbids." Filed as **TEI patch 1**, and this is the single band in my
range where the punctuation test reports a mismatch against the twin (`[0107C]`, colons 2 vs 3). It
is expected and it should clear when the patch lands. No `[sic:]` — nothing on the plate is
defective, and none could be written for an absence in any case.

#### 2. @0108B — `Salutem in eo quod temere judicant in oculo habent trabem`

Read on **both witnesses**, both clean: an accusative *Salutem* governed by nothing at all, standing
as its own one-line paragraph between two well-formed ones. Migne prints it so. Pattern 7 renders it
as literally as English can hold: **"Salvation, in that they judge rashly they have a beam in the
eye."** No marker — a real word, both witnesses, and the sentence is opaque rather than false, which
is 18a's explicit ❌. I record it because it is the roughest sentence in the range and a reader will
stop at it.

#### 3. @0112D — `Non quia sine tactu sanare posset`, and no second `non` on either copy

> *Tetigit. **Non quia sine tactu sanare posset**, sed ut indicet se non subjectum esse legi…*

The argument plainly wants *non quia sine tactu sanare **non** posset* — "not because he could
**not** heal without touching". **Both witnesses print exactly what our twin prints**, at normal
letter spacing, with no room for a lost word: archive p.61, Gallica f56. So the English carries what
is printed: **"Not because he could heal without touch, but that he might show himself not subject
to the law."**

⛔ **A `[cj:]` was weighed and declined, and here is why the rival lost.** 18a's ✅ extension does
reach a **dropped** negation (7561 @0648, where Migne's setting loses the *non* of *non solum … sed
etiam*). But that extension opens the gloss **on a word Migne did print**, and here there is no such
word: the clause reads *non quia … posset*, and the conjecture would have to be attached to *posset*
while asserting that a different word is missing beside it. More decisively, the printed clause is
**not false** — "he touched, not for the reason that he could heal without touch, but in order to
show…" construes, awkwardly, as a denial of one motive. Opaque, not false; 18a's ❌ covers it. The
conjecture lives here and the printed word stands in the text.

#### 4. @0112A — `quae sensum rigorem fidei emollit`, a double accusative

Read on both witnesses. Two accusatives with one verb and no conjunction. Rendered as apposition —
"which softens the sense, the rigour of faith" — which is the closest English the printed words
allow. No marker; both words are real and the defect (if it is one) has no English exponent beyond
the apposition. The reader has the Latin opposite.

#### 5. @0112C — the orphaned pluperfect subjunctive `fecisset`

*Secundum Lucam, et in campestri loco sermonem quem jam forsitan supra habuerat ei **fecisset**.*
The governing clause has been cut away by the abridgment; `fecisset` has nothing to depend on.
Rendered as an indicative main verb, "he had delivered to him the discourse which perhaps he had
already held above", which is as close as English gets without supplying a conjunction. Both
witnesses print it. Logged rather than smoothed.

#### 6. @0113A — `discendat`, and which reading I took

*In testimonium. Id est, Domino credant, si impietatis lepra **discendat**.* Read on both witnesses;
both print *discendat*. Under Pattern 9 this is an **attested medieval spelling**, not broken type —
the *de-/di-* interchange is a convention of the period — so no `[sic:]` and no italics.

⚑ **Two readings, and I say which I took and why the other lost.** *discendat* stands either for
*discedat* ("depart") or for *descendat* ("come down"). I rendered **"if the leprosy of impiety
depart"**, i.e. *discedat*. The rival loses on two grounds: the clause is the *condition on which
the priests are to believe*, and it is the removal of the leprosy that is the sign, not its
descending; and Migne uses *apparet* elsewhere in this very chunk (@0112D) rather than *paret*, so
he is not a writer who drops prefixes casually. The reading is recorded rather than concealed.

#### 6a. @0114C — `Gerazenorum`, the span the ownership test never saw, adjudicated

⚑ **Added 2026-09-05 at the coordinator's request, after `lemma-inventory.mjs` was found to require
the address form `VERS. n.--`.** My range holds two lemmata Migne prints **without** the dash, and
the inventory therefore filed both as second lemmata — which I reported in §(b) as an arithmetic
correction. **What I could not see from my own file is the consequence: the ⚑ `MATCHES ONLY
ELSEWHERE` ownership test fires only on a span carrying a `VERS.` address, so it silently skipped
both.** The count was right and the instrument was wrong.

⭐ **The per-verse collation in §(c) C5 was not blind to it.** That collation takes its chapter from
the `CAPUT` head and its verse from the `VERS.` address **in my own Latin**, not from the brief, so
both dashless lemmata were in its 134 and this one is already among its sixteen misses. That is the
argument for rebuilding the check rather than reading the pre-scan: a tool bug in the brief did not
propagate into the collation, because the collation did not consume the brief.

**The read.** Archive **p.62** and Gallica **f57** — col. 114, not p.63/f58; corner numbers 113/114
confirmed on both, as in my original pass.

| | |
|---|---|
| **archive p.62** | `VERS. 28. *In regionem Gerazenorum.* Geraza urbs est Arabiae` |
| **Gallica f57** | `VERS. 28. *In regionem Gerazenorum.* Geraza urbs est Arabiae` |
| **our twin** | `VERS. 28. *In regionem Gerazenorum.* Geraza urbs est Arabiae` |

**All three agree, and the `z` stands twice on each copy** — once in the italic lemma, once in the
roman gloss four words later. Both copies also print the address as the bare `VERS. 28.` with no
dash, so the dashless form is Migne's and not an artefact either.

**What the read settles, and what it does not.** It settles **ownership** completely: two witnesses
eliminate Corpus Corporum, and `s`→`z` is a different sort, not a filled counter or a thickened
stroke, so it is not the over-inking class that produced my @0122B verse number. **The divergence is
Migne's.** What it does not settle is whether the divergence is worth a public claim, and that is
§2's question.

⛔ **DECLINED, and here is why the rival lost.** §2 lets a single-word `[var:]` stand on either of
two limbs, and it fails both:

1. **The gloss does not argue from the word.** It says only *Geraza urbs est Arabiae* — it names the
   city and spells it the same way. There is no etymology, no play on the letter, nothing the *z*
   carries. Contrast the 0000 stint's @0069B, where the lemma *Adjutus* is the etymology that
   answers the verb's aspect and the marker fired on one letter; here the second occurrence is
   corroboration of Migne's spelling, not an argument from it.
2. **It is the form of a transliterated proper name**, which the 0000 stint's Policy 4 declined
   across five instances (*Esrom · Josaphat · Eliachim · Sadoch · Nazareus*) on the ground that such
   spellings "are not different readings, and none changes what any sentence says." Γερασηνῶν has no
   settled Latin transliteration; the Clementine's uniform *s* across its four occurrences is
   evidence about **that edition's** normalising hand, not about Migne being wrong. The English is
   the same word either way.

⚑ **The one consideration that cuts the other way, stated so it can be argued with.** *Nazareus* was
declined partly because **Migne varied within his own column** (*Nazaraeus* twice on the next two
columns), which made it visibly his own loose practice. Here he does **not** vary: he is uniform in
*z*. Uniformity is the harder case, because a consistent spelling looks more like a deliberate
reading than a slip. I take it the other way — **a consistent orthography is house style, not a
reading** — and I would rather be argued out of that than have applied it silently. Firing here
would also breach the standing reason for the class: five name-spellings marked in this work would
bury the six substitutions that are the range's real payload.

**No `[var:]` fired; `0018.md` is unchanged.** The English continues to render Migne's own
transliteration, "Into the country of the Gerazenes … Geraza is a city of Arabia".

⚑ **The other span the bug hid in my range clears.** `VERS. 25. *Suscitaverunt.*` @0114B is verbatim
in Mt 8:25 and is already listed among §(c) C5's 118; it was read on both witnesses in my original
pass (the archive prints a dash before it, Gallica and our twin do not — §(d) 15).

#### 7. @0114D — `Et ecce magno`, and how far convention 3 expanded it

The lemma is a three-word fragment of Mt 8:32 as Migne's text reads it, *et ecce magno impetu abiit
totus grex*. Convention 3 renders a fragment as the phrase it stands for, so the English reads
**"And behold with great violence"**, supplying *impetu*'s English from the verse the fragment
opens — exactly the move Ruth's *Non te.* → "Let no man see thee" licenses. The `[var:]` then names
what the Clementine has. ⚑ Stated explicitly because the expansion and the marker interact: without
the expansion the divergent word *magno* would be the only word on the page and the marker would
have nothing to sit beside.

#### 7a. Convention 3 — every fragmentary lemma I expanded, and how far

Convention 3 renders a fragment as the phrase it stands for, and the launch brief's own control
warns that contrasting an expanded fragment with a complete one-word lemma manufactures an
inconsistency that is not there. So: the **complete** one-word lemmata in my range are rendered as
they stand (*Ask.* · *Beware.* · *Enter ye.* · *Thomas.* · *Peace.* · *Then.* · *Numbered.* ·
*Weeping.* · *Master.* · *Lord.* · *Faith.* · *Arise.* · *Twelve.* · *Matthew.* · *Rising up.*),
and the **clipped** ones are expanded from the verse each opens. Named in full, since only a list
can be audited:

- **@0110C** *Nunquid.* → "**Do they gather.**" (Mt 7:16 *Numquid colligunt de spinis uvas*), on
  Luke's precedent at 9000 @0265A where *Nunquid potest.* became "Can he."
- **@0111A** *Non potest.* → "**A good tree cannot.**" (Mt 7:18), the subject supplied because
  English cannot leave a finite verb bare.
- **@0109B** *Si piscem.* → "**If he ask a fish.**" (Mt 7:10 *si piscem petierit*).
- **@0108C** *Nolite sanctum,* etc. → "**Give not that which is holy,** etc." (Mt 7:6 *Nolite dare
  sanctum canibus*).
- **@0108D** *Et conversi.* → "**And turning upon you.**" (Mt 7:6 *et conversi dirumpant vos*).
- **@0114B** *Modicae,* etc. → "**O ye of little faith,** etc." (Mt 8:26 *modicae fidei*).
- **@0114C** *Duo habentes.* → "**Two having demons.**" (Mt 8:28 *duo habentes daemonia*), and
  *Saevi.* → "**Exceeding fierce.**" (*saevi nimis*).
- **@0114D** *Et ecce magno.* → "**And behold with great violence.**" — §(d) 7, and the one where the
  expansion and a `[var:]` interact.
- **@0117B** *Et cum ejecta esset.* → "**And when the crowd was put forth.**" (Mt 9:25 *cum ejecta
  esset turba*).
- **@0120B** *Tu es.* → "**Art thou he.**" (Mt 11:3 *Tu es qui venturus es*).
- **@0120C** *Qui non fuerit.* → "**He that shall not be scandalized.**" (Mt 11:6 *qui non fuerit
  scandalizatus in me*).
- **@0113D** *Et accedens.* → "**And there came.**" — deliberately *not* expanded to "one scribe",
  because the gloss immediately names him and the addition would be redundant rather than clarifying.

⚑ Where a fragment's continuation is a **second lemma Migne is about to gloss separately**, I did
not swallow it: *Et descendit.* stays "And there came down" and does not take *pluvia*, because
*Pluvia.* is the next lemma four words later.

#### 8. @0115C — the `[var:]` sits after the span, not inside it

Migne's italic run is `*Duplici contritione conteret eos Dominus. [n: (BED.)] Quid est facilius,*` —
one span carrying a quotation, a siglum, and the **next** lemma. Nested markup is not expressible,
so the `[var:]` stands immediately after the run closes and names its verse (Jer 17:18) so that a
reader cannot mistake which of the two quotations it is about. Recorded because a marker that
floated to the wrong lemma is the 8995 @0601D failure mode with a different marker.

#### 9. @0117B — `in tuam domum` against `sua domus` four words later

*Id est, de domo principis **in tuam domum**. Domus principis Synagoga est, **sua** domus coelestis
Jerusalem.* A second-person possessive in a sentence whose next clause uses the third. **Both
witnesses print *tuam*** (archive p.64, Gallica f59). A real word occupying its slot; rendered as
printed, "from the ruler's house into thy house". No marker: the sentence is not false, only
inconsistent, and Migne addresses his reader in the second person freely elsewhere in this range
(*Ne putes*, *Etsi difficile sit ut aliis facias*, *si juxta fragilitatem nostram accipis*).

#### 10. @0119C — `Dipondio enim est ex duobus assibus`, an ablative as subject

Both witnesses. Rendered literally, "For a dipondius is out of two asses", keeping the coin-names as
Migne prints them (*as*, *dipondius*) rather than converting to farthings, since the whole gloss is
an arithmetical argument about the two of them and a conversion would delete it. The Douay's
"farthings" appears only inside the quoted Lc 12:6, where Migne quotes *dipondio* himself and the
English carries "two farthings" for the received phrase — the two words stand three lines apart on
the page and the Latin column shows why.

#### 11. @0121D — `cum et jejunium et saturitatem petitur spernunt`

Read on both witnesses; both print *petitur*, a third-person passive with two accusatives beside it
and no grammatical slot of its own. Rendered **"when they spurn both fasting and the fullness that
is sought"**, which renders every printed word and attaches *petitur* to the nearer accusative. A
`[sic:]` is impossible (the form is a real word) and a `[cj:]` fails 18a's bar (the English asserts
nothing the author is arguing against). Logged; the conjecture *petitam* is the obvious one and it
is here, not in the text.

#### 12. @0123A — `coomnipotentem`, a coinage, and the punctuation I supplied

*…incipiet non habere qui dedit **per omnia coomnipotentem nota**, per tradita, Filium…* Both
witnesses print *coomnipotentem*, closed up at normal letter spacing. It is a **coinage**, not a
non-word — *co-omnipotens*, "co-omnipotent" — and it is renderable, so Pattern 7's main rule governs
and no marker fires.

⚠ **Migne prints no mark at all between *qui dedit* and *per omnia*, and English cannot hold that.**
I supplied **a comma**, not a colon or a semicolon, and used our own double quotes (Pattern 6:
`" "` is ours) round the two words Migne is glossing as words: *"by "all things" note the
co-omnipotent, by "delivered", the Son"*. The comma keeps the punctuation band test clean; the
supply is recorded here because it is a supply.

#### 13. @0121A, @0122D — the two anacolutha of CAPUT XI, and what I supplied

- **@0122D** *Respondens **tacitae objectionis** quasi quaereretur…* — a genitive where the sense
  wants an accusative or a dative. Rendered "Answering of a tacit objection, as though it were asked
  what the reason was…", keeping the genitive visible.
- **@0121C** *Coaequales contribules quos solebant exprobrare…* — two nominatives in apposition with
  no verb, the sentence carried over from *Similis est pueris*. Rendered as apposition.

#### 14. ⛔ @0122B — THE VERSE NUMBER, and why it stands untouched

The archive copy prints **`VERS. 24. — Vae tibi`**. Our twin prints **`VERS. 21.`**, which is the
correct address for Mt 11:21, the verse the gloss expounds. **Gallica f61 prints `VERS. 21.`** — the
archive's `4` is a `1` whose counter has been filled by over-inking.

⚑ This is the 8950 episode reproduced in my own range: a digit, on one witness, in the direction
that reads like a printer's habit. Under the standing rule a verse address may not be altered on one
witness, and here the second witness settles it in our twin's favour. **No change, no marker, and
the English carries `VERS. 21.--` verbatim** under convention 1.

#### 15. Verse addresses Migne prints irregularly — three, all carried

- **@0114B** `VERS. 25.` with no `.--`, where every neighbour has the dash. Our twin has it so;
  **Gallica agrees**; the archive prints a dash. Witnesses disagree on a dash, which is exactly the
  case the brief says may not be adjudicated on one copy. Left as our twin has it.
- **@0114C** `VERS. 28.` with no `.--`. **Both witnesses agree** — no dash on either.
- **@0112B** our twin's `VERS. 27.--` against the archive's `VERS. --27.` (dash before the number).
  **Gallica prints the normal form** and our twin follows it.

Convention 1 makes the address pass through verbatim in any case, and nothing machine-readable
consumes it.

#### 16. @0121D, @0122A — two press variants, both terminal stops

The archive prints a full stop after *et hujusmodi* (@0121D) and after *sed praedicit ventura*
(@0122A); **Gallica prints neither**, and our twin has neither. Both copies are clean at both sites.
That is a press variant in the 8950 *Mititte*/*Mittite* class and the 0000 stint's
*Bethehem*/*Bethlehem* class: **two printings, no `[sic:]`, no patch, crux only.** The English
paragraphs end without a mark, per Pattern 8's "never supply".

#### 17. Sentence-type marks Migne prints — all sixteen carried, none supplied, none deleted

Sixteen question marks in my Latin and sixteen in my English, band for band: @0114C (*cur non
creditis etiam in mari?*), @0118B (*nunquid defuit vobis aliquid?*), @0118C (*Unde ergo
necessaria?*), @0119B (*Nonne duo passeres?*), @0119C (*Nonne quinque passeres veneunt dipondio?*,
*Nunquid de bobus cura est Deo?*), @0120C (*an alium ad haec sacramenta missurus es?*), @0121C (*qui
noluistis credere ei?*), @0121D (*cur Joannes displicet?*, *cur Filius hominis?*), @0122C (*Nunquid
usque in coelum exaltaberis?*, *superbissime restitisti?*), @0122D (*quem gentilitas tam prona
recepit?*), @0123C (*Et quid jugo ejus suavius?*, *quid onere levius?*), @0123D (*hic et
concupiscentia damnatur?*).

⚑ **Pattern 8b was not needed once.** The two indirect questions in the range — *quis ordinem rei
gestae teneat, non apparet* (@0120C) and *Quando hoc sit factum non expressit Matthaeus* (@0113C) —
are both closed by Migne with a **full stop**, so nothing had to be recast and nothing was dropped.

#### 18. Punctuation, band by band — the mechanical test, and what it leaves

Column anchors are verified 1:1, so they partition both twins identically. Comparing marks band by
band across all **72** bands of my six chunks (66 column anchors plus each chunk's head band), with
`[var:]` contents stripped:

- **question marks: zero mismatched bands** (16 in the Latin, 16 in the English);
- **guillemets: zero, in both** — this book prints none;
- **colons: one mismatched band, and it is the TEI patch** (@0107C, §(d) 1). Every other band is
  exact, after I removed **thirteen** colons I had supplied and restored **seven** that Migne prints
  and I had softened — the destructive direction, and the one this test exists to catch. The seven:
  @0110B (*adjecit: Attendite:*), @0113D (*trans fretum: Lucas vero … in via: non est contrarium:*,
  two of the three), @0114B (*et rogent: et rogantibus*), @0118B (*illud unde emuntur:*, which I had
  softened to a semicolon), @0120C (*descensurus sum: debeo*), @0121C (*Joannis moti sunt: vel*).
- **semicolons: zero mismatched bands**, after removing **seventeen** I had supplied and restoring
  one Migne prints (@0110B, *possit accipi; tamen*). ⚑ I have **not** applied the standing
  comma→semicolon licence at all in this range: Migne prints **35 semicolons** of his own here, so
  the Tobit exception (which rests on a book printing zero) does not apply, and every semicolon in
  my English stands where he prints one.

#### 19. `pietas` — one Latin word, two English words, disclosed

*pietas* is not on any settled axis and the 0000 stint recorded that it splits. In my range it
occurs three times and I rendered it **twice as "mercy"** and **once as "piety"**:

- @0112C *non quasi **pietatis** incredulus* → "not as one incredulous of his **mercy**" — the leper
  doubts the *will*, not the power, so the word is Christ's compassion;
- @0116B *ad humilitatis et **pietatis** gratiam provocat* → "the grace of humility and of
  **mercy**" — the Pharisees are being provoked toward the sinners Christ has just received;
- @0120A *odium in suos, **pietas** est in Deum* → "hatred toward one's own is **piety** toward
  God" — here the word is dutifulness toward God and "mercy" would be simply wrong.

The related *pium affectum* at @0120B is rendered **"the devout affection"**, matching the 0000
stint's *pio affectu* → "devout affection" at @0075C. I record the split rather than let it pass,
since that is how the axes got made.

#### 20. Pattern 17 — where the singular and the plural change hands

The range moves between them constantly and a reader can see it with no apparatus. **Singular
(thou)**: the whole of CAPUT VII's second person — *benefeceris*, *liberaberis*, *punieris*,
*tuleris*, *incurras*, *quid autem vides*, *fratri tuo*, *corde tuo*, *ejice*, *si difficile sit ut
aliis facias quod tibi vis fieri*; and in CAPUT XI *Tu es*, *debeo te nuntiare*, *exaltaberis*,
*restitisti*, *soror tua ex te*, *exstitisti ingrata*, *si juxta fragilitatem nostram accipis*,
*quod pati non vis*. **Plural (you)**: the apostolic commission throughout CAPUT X — *Gratis
accepistis*, *in zonis vestris*, *Excutite pulverem de pedibus*, *Ecce ego mitto*, *Dabitur enim
vobis*, *Quod dico*, *Ne ergo timueritis eos* — and in CAPUT VII *si petieritis patrem vestrum*,
*Intrate*, *Attendite*, *Nolite*, *Ut faciant vobis homines*, and in CAPUT XI *Cecinimus vobis*,
*Convertimini ad me in toto corde vestro*, *ut minus excusabiles sitis*.

⚑ **The visible payoff is at 0109B–0110A**, where Migne moves from *si petieritis patrem vestrum*
(plural, the crowd) to *Etsi difficile sit ut aliis facias quod tibi vis fieri* (singular, the
individual reader) and back to *Intrate* within four lines. Under a flat "you" that is invisible.

#### 21. Supplied subjects and objects — every one named

The brief requires that each supplied pronoun be named. Mine are:

- **@0108A** *praeventus majoribus, alium non judicet* — the subject is the participle itself;
  rendered "one who is himself forestalled". Nothing supplied.
- **@0113B** *Per istas duas partes mundi ex quibus gentes vocandae erant designantur* — the
  subject of *designantur* is unexpressed and cannot be *gentes* (which is the antecedent of
  *quibus*). Rendered "they are designated", i.e. the two quarters. Both readings construe; I say so
  rather than choose silently.
- **@0114C** *Marcus dicit quod nullus jam daemoniacum, etc.* — the verb has been cut away by
  Migne's `etc.`; I supplied **[could bind]** in brackets, from Mc 5:3 (*nemo poterat eum ligare*),
  which is the sentence Mark's own text supplies.
- **@0112B** *Vel aliqui in turba, quia infideles, vel potius omnes de excellentia sapientiae* — no
  verb; supplied **[wondered]** in brackets, from the lemma's own verse (Mt 7:28 *admirabantur*).
- **@0107D** *Ita facit Deus, et non inique ut illi in aeternum* — no verb in the *ut* clause;
  supplied **[it be]** in brackets. The paragraph below (*aeternam poenam et inveniunt*) fixes the
  sense.
- **@0117B** *Quia Synagoga laetitiam Dominicae inhabitationis, etc.* — the verb is inside Migne's
  cut; supplied **[lost]** in brackets, from *laetitiam* being accusative and the Synagogue being
  the losing party throughout the paragraph.
- **@0120C** *Beatus Joannes, despectis quoque ovium pilis … pilos camelorum, etc.* — same shape;
  supplied **[chose]** in brackets.
- **@0120C** *hoc non contra Joannem dixisse **putandus est*** — the subject is Christ, not the
  *qui* clause that precedes it; rendered with a resumptive "he". Both parses construe and I record
  it.
- **@0117B** *paruit in susceptione* — rendered "**it was obedient** in the receiving". ⚑ The rival
  is *pareo* = "appear", and it lost on Migne's own usage: he writes *apparet* for "appear" eleven
  columns earlier (@0112D, *Apparet supra legem … esse gratiam*), so the bare *paruit* is the
  obedience verb.

#### 22. Test 2a — negatives resting on a verb with a quantifier or correlative beside them

The trigger population in my range, each with the host proved from the sentence's own structure:

- **@0122C** *Non solum Corozaim et Bethsaidae vae erit, **sed** et tibi Capharnaum* — host is
  *Corozaim et Bethsaidae*, proved by the `sed et tibi`. Rendered "**Not** to Corozain and Bethsaida
  **only** shall there be woe, but to thee also".
- **@0110D** *non hoc faciunt mali, sed fit de illis consilio Dei* — host is the agency, not the
  verb; and the next clause *quia non **eorum** fructus est, sed vitis* puts the second negative on
  *eorum*, which the English keeps ("it is not **their** fruit, but the vine's").
- **@0111A** *Arbor bona vel mala **non natura** … **sed voluntas**;* host *natura*.
- **@0110C** *Non a veste, sed ab operibus*; host *a veste*.
- **@0118B** *viderentur **non causa salutis** praedicare, **sed lucri***; host *causa salutis*.
- **@0118D** *mala inferre non debet, sed tolerare*; host *inferre*.
- **@0119A** *quod persecutiones non debeant timere, sed declinare*; host *timere*.
- **@0122A** *quibus **non optat mala**, sed praedicit ventura*; host *optat mala*.
- **@0122D** *non opponit insipientes et hebetes, sed parvulos*; host *insipientes et hebetes*.
- **@0123A** *Tradita autem omnia **non coelum et terra** … sed hi qui*; host *coelum et terra*.
- **@0116C** *A mundi amore, **non solum** a cibis*; host *a cibis*.
- **@0119D** *non quod **non** sint honorandi pater et mater, **sed post Deum*** — both negatives
  carried, and the *sed* shows the second is a real denial and not a scope error.

**And the one that is not a negation at all, recorded because a negation-counting check will see
it:** @0112C *De voluntate **non quasi pietatis incredulus**, dubito; sed quasi meae colluvionis
conscius **non praesumo***. The first *non* is on the *quasi* phrase, not on *dubito* — the leper
**does** doubt, and says so. Rendering it "I do not doubt" would reverse the sentence and read
better, which is the tell.

---

### (e) DECLINED-ODDITY LIST — every suspect word I did NOT mark, with its column

**Eight of the eighteen entries below are archive-only readings that Gallica refutes; one is a
Gallica-only reading the archive refutes.** They are listed in full because the count is the
finding: read on one witness this file would have carried eight or nine confident claims about
Migne's type, and every one of them would have been false — including a **changed verse number**.

| col | the suspicion | why declined |
|---|---|---|
| 0112D | archive prints *prodantur inviti**,** Nemini dixeris* (comma for a full stop) | **Gallica f56 prints a full stop**; our twin agrees. Archive ink. |
| 0112D | archive prints *factus sit**,** Vade* (comma for a full stop) | **Gallica prints a full stop**; our twin agrees. |
| 0112D | Gallica prints *ut **sni** in magnis* (non-word) | **The archive prints *sui***, as our twin does. Gallica ink this time — the traffic runs both ways. |
| 0113A | archive prints *Ego veniam et curabo **cum*** | **Gallica prints *eum***, as does Mt 8:7 and our twin. |
| 0112B | archive prints `VERS. --27.` | **Gallica prints `VERS. 27. —`**; our twin agrees. |
| 0114B | archive prints `VERS. 25. — Suscitaverunt` | **Gallica prints the bare `VERS. 25.`**; our twin agrees. A dash is precisely what ink adds and fading removes. |
| 0121D | archive prints *et hujusmodi**.*** with a terminal stop | **Gallica prints none**, nor does our twin. Press variant; Pattern 8 forbids supplying it. |
| 0122A | archive prints *sed praedicit ventura**.*** with a terminal stop | **Gallica prints none**, nor does our twin. Press variant. |
| 0122B | archive prints `VERS. 24.` for `VERS. 21.` | **Gallica prints `VERS. 21.`**, our twin has 21, and 21 is the right address. Over-inking filled the counter of a `1`. §(d) 14. |

#### And the suspicions that were NOT about either copy's ink

| col | the suspicion | why declined |
|---|---|---|
| 0108B | *Salutem in eo quod temere judicant…* — an accusative governed by nothing | Real word, **both witnesses**, Migne's. Opaque, not false: 18a's ❌. §(d) 2. |
| 0112D | *Non quia sine tactu sanare posset* — the argument wants a second *non* | **Both witnesses**, no room for a lost word. `[cj:]` weighed and declined. §(d) 3. |
| 0112A | *quae sensum rigorem fidei emollit* — two accusatives, one verb | **Both witnesses.** Rendered as apposition. §(d) 4. |
| 0112C | *sermonem … habuerat ei fecisset* — an orphaned pluperfect subjunctive | **Both witnesses.** The abridgment cut its governing clause. §(d) 5. |
| 0113A | *si impietatis lepra **discendat*** | Pattern 9: an attested medieval *de-/di-* spelling, not broken type. **Both witnesses.** §(d) 6. |
| 0117B | *de domo principis in **tuam** domum*, beside *sua domus* | Real word, **both witnesses**, Migne's. §(d) 9. |
| 0119C | *Dipondio enim est ex duobus assibus* — an ablative as subject | Real word, **both witnesses**. §(d) 10. |
| 0121D | *cum et jejunium et saturitatem **petitur** spernunt* | Real word with no grammatical slot; **both witnesses**; `[cj:]` fails 18a's bar. §(d) 11. |
| 0123A | *per omnia **coomnipotentem** nota* | A coinage, not a non-word; closed up at normal spacing on **both witnesses**; renderable, so no marker. §(d) 12. |
| 0122D | *Respondens **tacitae objectionis*** — a genitive where the sense wants a case-object | Both witnesses; rendered with the genitive visible. §(d) 13. |
| 0114C | *Gerazenorum* / *Geraza* against the Clementine's *Gerasenorum* — **a verse lemma proper, and the one span in my range the brief's ⚑ ownership test never ran on** | **Both witnesses print the *z*, twice each**, and our twin agrees: the divergence is Migne's, not ours, and not either copy's ink. Declined all the same, under §2's own bar. Full ruling at §(d) 6a. |
| 0117D | *Judas **Scariothis*** against Mt 10:4's *Iscariotes* | Name form; the ordinary medieval one. Policy 2. |
| 0116B | *Euntes autem **dicite*** | **Not** declined — this one FIRED. Listed here only so the two *dicite/discite*-shaped calls are not confused. |
| 0121A | *Christi opera non **auctorisantur*** | A medieval formation (*auctorizare*), attested; Pattern 9. Rendered "are given no authority". |
| 0117A | *carmen lugubre **canantes*** | A non-word — **and it is OURS**: both witnesses print *canentes*. TEI patch 7, not a marker. |
| 0118A | *neguitiam ejus supprimit* | Same class; both witnesses print *nequitiam*. TEI patch 3. |
| 0116B | *Non enim veni **vocure** justos* | Same class; both witnesses print *vocare*. TEI patch 2. |
| 0122D | *Respodens Jesus* | Same class; both witnesses print *Respondens*. TEI patch 6. |

#### Suspiciously TIDY forms — brief §4's other direction, and the checked negatives

The class that leaves nothing to notice is the one where the digitization has **corrected** Migne. I
looked for it deliberately at the places where our Latin reads smoothly in rough surroundings, and I
read **whole lines**, not target words. **In this range the answer is: none found. All seven defects
run the other way** — the digitization corrupting, not tidying.

⭐ **The negatives worth recording**, because the brief asks for them explicitly and because a
checked negative is only worth having when the positives have been counted. The five passages in my
range where our Latin is *rough enough that a transcriber might have tidied it* are @0108B
(*Salutem* with no verb), @0112C (*fecisset* with no governing clause), @0112A (*sensum rigorem*),
@0117B (*in tuam domum*) and @0121D (*petitur*). **All five are printed exactly as rough on both
witnesses as they are in our twin.** Our transcription is faithful at every one of them. This
volume's digitization drops and swaps letters; in my range it added nothing and repaired nothing.

#### The `⚑ MATCHES ONLY ELSEWHERE` candidates — none in this range

The launch brief lists eight; the nearest are @0106B (the previous stint) and @0157D (a later one).
**My range is clean of them**, and I confirm it rather than assume it: no span in cols 0107C–0123D
carries that flag in `9002-lemmata-0016.txt`, and the per-verse collation in §(c) C5 is the stronger
check that would have caught one had the flag missed it.


---

# §6 · STINT 0022–0026 (cols 0124A–0137C)

*Preserved from `cruces-0022.md`, unedited; headings demoted one level. Companion files: `data/briefs/9002-PLATE-READS-0022.json`, `data/briefs/9002-PENDING-TEI-PATCHES-0022.md`, `data/briefs/9002-lemmata-0022.txt`.*

## 9002 — cruces, stint 0022–0026 (cols 0124A–0137C)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0022–0026: `CAPUT XII`
(the ears of corn, the withered hand, the Beelzebub controversy, the sin against the Spirit, Jonas,
the true kindred), `CAPUT XIII` (the parables) and `CAPUT XIV` (the Baptist's death, the five
loaves, the walking on the sea) — 5,551 Latin words, 16 columns, **both plates read on every one
of them.**

Companion files from this stint: `data/briefs/9002-PLATE-READS-0022.json` (every page opened, both
witnesses, corner numbers first) and `data/briefs/9002-PENDING-TEI-PATCHES-0022.md` (three sites
where our Latin has departed from Migne).

---

### (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Plates first, both of them, and on every column.** All eight archive pages (pp. 67–74, 300 dpi)
and all eight Gallica leaves (f62–f69) were read column by column, **corner numbers checked before
anything else on each**. This was not a candidate-driven second-witness check: I read every Gallica
column whether or not the archive raised anything, because a candidate-driven check can only see
divergences the *archive* manufactures and is blind to the ones it hides. That is how @0125A
surfaced.

**Sixteen candidates raised on the archive; fourteen refuted at Gallica.** The 12:1 measured by the
0000–0005 stint and the 20:1 by the 0006–0011 stint hold on pp. 67–74 as well.

**2. Markers.** **13 `[var:]`, 2 `[sic:]`, zero `[cj:]`, zero `[d:]`, zero `[ed:]`.**
Both `[sic:]` stand on two witnesses and quote a word still verbatim in our Latin (@0131A
*Excaevavit*, @0135B *Constristatus*); each was re-fetched from Gallica at native resolution before
it was written. This is the first stint of Matthew to fire one, and the reason is not boldness: it
is that these two are non-words **that our transcription faithfully carries**, which is exactly the
narrow class the corrected one-witness rule leaves open.

**3. When a `[var:]` fires, and it is the previous stint's threshold, not a new one.** Launch brief
§2 requires a single-word `[var:]` to have a witness of its own — the gloss argues from the word, or
the form is one letter-level corruption cannot manufacture. I applied that mechanically, and I
adopted the 0006–0011 stint's own worked application of it so that the two ranges can be read
together:

- *fires* — a different word (*Macta*/*occide*, *plurimis*/*Psalmis*, *sed*/*sic*, *sed*/*et*,
  *enim*/*autem*, *autem*/*enim*), a changed construction (*Si vos persecuti sunt* for *Cum autem
  persequentur vos*), an added or substituted phrase (*ad vos*, *de semine vestro*, *inter vos* for
  *vestrum*), a finite verb for a participle inside a quotation that stands on its own.
- *declines* — a one-letter difference in a form that means the same or better
  (*appropinquabit*/*appropinquavit*, *Simile*/*Similis*, *fructum*/*fructus*, *quicunque*), word
  order alone (*Dominus est enim*, *Fulgebunt justi*), an ellipsis, a word division (*Ne quando*),
  and a divergence that is **exactly what Migne's own host syntax requires** (@0136C *venturi
  erant*, @0136D *Volens praeterire*).

⚑ **The last of those is a test I had to state, because the range forced it twice in one column.**
A divergence fires where Migne introduces the words *as a quotation standing on its own* — @0136D
*Unde Marcus ait: Vidit eos laborantes remigando.*, closed by a full stop before his comment — and
declines where the words are woven into a clause of his own, so that the indicative or the
participle is his construction and not a reading. That is the 0000–0005 stint's @0069B ruling
(*habebit* for *habeat* once *ut* is gone) applied to a harder pair of cases.

**4. Where the plate was read and our twin diverges, the English renders the plate.** Three sites,
all three Corpus Corporum's, all three filed as pending patches: @0130C `Scaagesimum` → **plate
`Sexagesimum`**; @0134A a comma our file inserts in `ad, coelum`; @0134C a semicolon where both
plates print a colon. **The third is this stint's single deliberate band-level punctuation
mismatch** and is declared as such in §(d) 12.

**5. Vocabulary axes, applied from the first chunk.** `turba` → **crowd** (0123D *pro turbis*,
0130A *Turba stabat*, 0133C/0135C/0136B *turbas*); no `multitudo` except the AUG. note at 0132C
(*Multitudo non est excommunicanda*) → **multitude**, so the two words do stand in one range and
are kept apart. `daemonium` → **demon** (0125D, 0126A–D, 0129B, 0130B), `diabolus` → **devil**
(0126C, 0127B, 0128A, 0129A, 0132A), `satanas` → **Satan** (0129A) — three words, never crossed.
`mysterium` → **mystery** / `sacramentum` → **sacrament**, 1:1 (0130A *mysteriis*, 0130D
*mysticarum*, 0134A *mysteria*, 0136B *mysteria legis*; 0130A *sacramenta*, 0133C *sacramenta*,
0134B *sacramenti*) — **with one declared exception at 0135B, argued in §(d) 1.**
The *gentes* family: `gentes` → **Gentiles** in the *Judaei*/*gentes* typology (0125D, 0129B,
0134C ×2, 0135D *Fastidiunt Judaei gentes recipi*, 0135D *In viam gentium*); **nations** in the two
plainly generic quoted Isaiah verses at 0135D; singular `gens` → **nation** (0126C and 0132D
*genti facienti fructum ejus*, 0128D *genti incredulae*, 0129B *in hac tota gente*);
`gentilitas` → **the Gentile world** (0128D). No `natio`, no `ethnicus`, no `gentilis`.
The gloss's own voice is not archaised: `dicit`/`ait` → **says** throughout.

**6. `usque ad` — the `etc.` splice test, run per occurrence. 11 in the range: 10 formula, 1
ordinary.** Every one of the ten is preceded immediately by `etc.,` and every one is rendered
**"as far as"**: @0127A, @0128A, @0129C, @0130A, @0131C ×2, @0131D, @0135A, @0135B, @0136C.
**The one ordinary use carries no `etc.` and is named here as the axis requires:** @0124D
*manus … arida erat **usque ad tempus Christi***, temporal, rendered "**until** the time of Christ".
⚑ A twelfth occurrence is bare *usque*, not *usque ad*: @0134A *quae **usque hodie** trahitur*,
rendered "which is drawn **even to this day**".
⚑ And @0130A is worth a line of its own: the formula there is followed by a resumption tail that
itself begins *ad quae* — `etc., usque ad ad quae Judaei non intraverunt`. **Both witnesses print
the doubled *ad*, and it is not a dittography**: the first belongs to the formula, the second to the
resumed sentence. No `[d:]`.

**7. Second person by number, not by reverence** (Pattern 17). The range moves between the two and
the Latin decides every time: plural **you** for the Pharisees (0124B *probatis*, 0128A *vos qui
… dicitis*), for the disciples (0130D *Vobis datum est*, 0131B *Vos ergo audite*, 0134A–B
*intelligitis … faciatis*), and for the Jews addressed at 0128D–0129A (*Vos non estis similes …
non poenituistis … non didicistis*); singular **thou** for the individual reader (0128C *habes tres
dies*) and for Peter to Christ (0137A *Domine, si tu es … ad tuam imitationem*).
⚑ **"ye" is used only inside a quoted scripture lemma**, following this work's shipped practice
(0009, 0019): *Have ye not read*, *Ye shall not do any servile work therein*, *Go ye not into the
way of the Gentiles*, *It is I, fear ye not*, *And bind ye*. The scripture-echo licence covers the
quoted words and stops where they stop.

**8. Nothing supplied but one bracketed word, and it is named.** No bracketed **conjecture** stands
in the running text anywhere in this stint, and where Migne's sentence lacks a word English cannot do
without, the English is left as broken as the Latin and the site is logged in §(d). **The single
exception is @0132B `[good]`**, argued in §(d) 24 — a supplied English complement in the corpus's
bracket convention, not a reading.

---

### (b) SPAN COUNT — 211 against 211, paragraph-bounded, and 0 guillemets

`data/briefs/9002-lemmata-0022.txt` heads its inventory **211 spans, of which 0 open-ended**.

Counted in my own Latin both whole-file and **paragraph-bounded** (the brief requires both, because
an unmatched delimiter defeats a counter in either direction):

| | 0022 | 0023 | 0024 | 0025 | 0026 | **total** |
|---|---|---|---|---|---|---|
| italic `*…*`, whole file | 62 | 25 | 51 | 15 | 58 | **211** |
| italic `*…*`, paragraph-bounded | 62 | 25 | 51 | 15 | 58 | **211** |
| paragraphs with an ODD number of asterisks | 0 | 0 | 0 | 0 | 0 | **0** |
| guillemet `« … »` | 0 | 0 | 0 | 0 | 0 | **0** |

**211 = 211 on both counts**, with 422 asterisks and not one guillemet character in 5,551 words, so
the two failure modes that let a bare total agree falsely are both excluded. Matthew is an
italic-lemma book. The cut is clean at both ends: the file opens at
`[0123D] VERS. 1.-- *In illo tempore.*`, which is chunk 0022's first span, and closes at
`[0137C] VERS. 36.-- *Fimbriam vestimenti,*`, which is chunk 0026's last.

---

### (c) THE LEMMA DIVERGENCE LIST — all 211 spans, in order, declines and reasons included

The `✓ / ⚠` column is the brief's mechanical pre-scan; the last column is my verdict after reading
the line and the verses the pre-scan names. ⛔ **A ✓ was never taken as clearance.** Two entries
below exist only because I read the printed references rather than the ticks: @0124C
`Dico autem vobis` (whose reference list leads with three Lucan verses and whose true match, Mt 12:6,
is fourth on the line — and which is the very span that fired a `[var:]` at @0093A under a Mt 5
address) and @0132D `Simile est regnum` (whose ✓ points at Mt 13:44/45, not at the Mt 13:31 the
address names).

**Migne's own citation sigla pass through verbatim under convention 4 and are not treated as
divergences.** In this range that covers `(Isa. VI)` for Jo 12:40 @0127A, `(Joan. X)` for Jo 12:39
@0127A, `(Matth. III)` for Mc 3:30 @0127B, `(Joan. XI)` for Jo 12:39–40 @0131A, `(Matth. XXI)` for
Mt 3:2/4:17 @0126C, `(Joan. IV)` for Mt 14:2 @0134C, `(I Cor. I)` for 1 Cor 2:14 @0136A, and
`(Eccl. IV)` for Sir 4:36 @0125A. A wrong siglum is Migne's citing practice; `refDisplay` keeps it
and `refKey` resolves it.

| col | span | pre-scan | verdict |
|---|---|---|---|
| 0123D | `VERS. 1.-- *In illo tempore.*` | ✓ 2Par 5:11, Dt 4:14, Gn 14:1, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0123D | `*Esurientes,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0124A | `*manibus confricasse [n: (Luc. VI)]*` | ⚠ NOT in Clementine verbatim — CHECK | **Not a quotation, so not collatable.** Migne reports the other evangelists in indirect speech (*Alii Evangelistae addunt: manibus confricasse*); Lc 6:1 has *manducabant confricantes manibus*. No quoted clause, no `[var:]`. This is why the pre-scan marked it ⚠. |
| 0124A | `*Macta et manduca [n: (Act. X)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Act 10:13 reads *occide, et manduca*. `Macta` is a whole-word substitution, not letter-level. Both witnesses. |
| 0124A | `VERS. 2.-- *Non licet.*` | ✓ 2Cor 12:4, Act 16:21, Dn 6:12, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0124A | `*Misericordiam malo quam sacrificium [n: (Ose. VI)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Os 6:6 reads *misericordiam volui, et non sacrificium*. Migne turns a negated pair into a comparison, **and the gloss argues from the comparison** (*melius fuit … quam sacrificium Deo offerre*). Both witnesses. |
| 0124A | `VERS. 3.-- *At ille dixit,*` | ✓ 3Rg 22:34, 4Rg 4:19, 4Rg 4:42, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0124A | `*Non legistis.*` | ✓ Gal 4:21, Mc 12:26, Mt 12:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0124B | `VERS. 4.-- *Panes propositionis.*` | ✓ 1Par 23:29, 1Rg 21:6, 2Mcc 10:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0124B | `VERS. 5.-- *Quia sabbatis sacerdotes.*` | ✓ Mt 12:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0124C | `VERS. 6.-- *Dico autem vobis.*` | ✓ Lc 9:27, Lc 12:4, Lc 12:8, … | Agrees with the Vulgate as printed — **Mt 12:6 reads *Dico autem vobis* exactly.** ⚑ Recorded because the pre-scan's reference list leads with three Lucan verses and the true match is fourth on the line; this is the same span that fired a `[var:]` at @0093A under a Mt 5 address, and it is innocent here. **Read the address.** |
| 0124C | `VERS. 7.-- *Si autem.*` | ✓ 1Cor 4:7, 1Cor 7:28, 1Cor 9:17, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0124C | `*Si autem sciretis,*` | ✓ Mt 12:7 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0124C | `VERS. 8.-- *Dominus est enim.*` | ⚠ NOT in Clementine verbatim — CHECK | **Declined — word order only.** Mt 12:8 reads *dominus **enim est** Filius hominis*. Migne transposes *est* and *enim*; English has no exponent, and nothing in the gloss turns on it. Same class as the 0006–0011 stint's @0089D decline. |
| 0124C | `VERS. 10.-- *Et ecce homo.*` | ✓ Lc 2:25, Lc 14:2, Mt 12:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0124D | `*Ecce homo manum,*` | ✓ Mt 12:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0124D | `*Interrogabant.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0124D | `*Sabbatis,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0125A | `VERS. 11.-- *Quis erit.*` | ✓ Jdc 20:18, Jr 49:19, Jr 50:44, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125A | `*Omne opus servile non facietis in eo [n: (Levit. XXIII)]*` | ✓ Lv 23:7, Lv 23:21, Lv 23:25, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125A | `VERS. 13.-- *Extende.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0125A | `*Non sit manus tua ad accipendum porrecta, sed ad dandum collecta [n: (Eccl. IV)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Sir 4:36 joins the two members with *et*; Migne prints *sed*, so the single negative no longer reaches the second. Rendered as printed. (`accipendum` itself is a press variant — §d.) |
| 0125B | `*Sicut altera.*` | ✓ Mt 12:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125B | `VERS. 15.-- *Recessit inde.*` | ✓ Mt 12:15 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125B | `*Si vos persecuti sunt in una civitate, fugite in aliam [n: (Matth. X)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mt 10:23 reads *Cum autem persequentur vos in civitate ista, fugite in aliam*. A different construction through the whole protasis. Both witnesses. |
| 0125B | `*Secuti sunt.*` | ✓ 1Mcc 9:16, 1Rg 25:13, 3Rg 9:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125B | `VERS. 16.-- *Et praecepit.*` | ✓ 1Mcc 5:19, 1Mcc 5:49, 1Mcc 5:58, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125C | `VERS. 18.-- *Animae meae.*` | ✓ 1Mcc 13:5, 1Rg 24:12, 1Rg 28:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125C | `VERS. 20.-- *Arundinem.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0125C | `*Arundinem quassatam.*` | ✓ Mt 12:20 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125D | `*Linum fumigans.*` | ✓ Is 42:3, Mt 12:20 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125D | `*Donec.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0125D | `*Fiat voluntas tua, sicut in coelo et in terra.*` | ✓ Mt 6:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0125D | `VERS. 22.-- *Et curavit.*` | ✓ Mc 1:34, Mt 4:24, Mt 12:15, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126A | `VERS. 24.-- *In Beelzebub.*` | ✓ Lc 11:15, Lc 11:18, Lc 11:19, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126A | `VERS. 25.-- *Omne regnum.*` | ✓ 3Rg 11:34, Dn 6:4, Jdt 2:5, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126A | `VERS. 26.-- *Et omnis civitas.*` | ✓ Mt 12:25 | Agrees as printed. ⚑ The words are **Mt 12:25**'s (*et omnis civitas vel domus divisa*) under Migne's `VERS. 26.` address. That is his verse numbering, not a divergence; convention 1 passes the address through and nothing machine-readable consumes it. |
| 0126B | `VERS. 27.-- *Et si ego in Beelzebub.*` | ✓ Mt 12:27 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126B | `*Ipsi,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0126B | `VERS. 28.-- *Si autem ego.*` | ✓ 1Rg 17:9, Lc 11:19, Mt 12:28 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126B | `*Si ego in Beelzebub ejicio daemones,*` | ✓ Mt 12:27 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126B | `*Si autem ego in spiritu Dei.*` | ✓ Mt 12:28 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126B | `*in digito [n: (Luc. XI)]*` | ✓ Lc 11:20, Lv 4:30 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126C | `*Medius inter vos stetit, quem vos nescitis [n: (Luc. XI, Joan. I)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Jo 1:26 reads *medius autem vestrum stetit*. A substituted prepositional phrase for a genitive; not letter-level. Both witnesses. |
| 0126C | `*Poenitentiam agite: appropinquabit enim regnum coelorum [n: (Matth. XXI)]*` | ⚠ NOT in Clementine verbatim — CHECK | **Declined — one letter, and it is *b* for *v*.** Mt 3:2 / 4:17 read *appropinquavit*; Migne prints the future *appropinquabit*. Betacism is the commonest orthographic interchange in this Latin, it is exactly what letter-level corruption manufactures, and the gloss argues from neither tense. Both witnesses print the *b*. ⚑ **The closest decline in the range**, recorded rather than buried. |
| 0126C | `VERS. 29.-- *Aut quomodo potest.*` | ✓ Mt 12:29 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126D | `*Qui non est mecum,*` | ✓ Lc 11:23, Mt 12:30 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126D | `*Domum illius.*` | ✓ Dt 6:22, Gn 19:3, Mt 12:29, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126D | `VERS. 30.-- *Qui non est mecum,*` | ✓ Lc 11:23, Mt 12:30 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126D | `VERS. 31.-- *Omne peccatum et blasphemia.*` | ✓ Mt 12:31 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0126D | `*[n: (HIER.)] Omne peccatum.*` | ✓ 1Cor 6:18, Mt 12:31 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0127A | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0127A | `*Spiritus autem.*` | ✓ 1Rg 16:14, 1Tim 4:1, 2Cor 3:6, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0127A | `*Propterea non poterant credere [n: (Joan. X)]*` | ✓ Jo 12:39 | Agrees as printed (Jo 12:39). Migne's siglum *(Joan. X)* rides verbatim under convention 4. |
| 0127A | `*Excaecavit oculos eorum [n: (Isa. VI)]*` | ✓ Jo 12:40 | Agrees as printed — and it is **the internal control for @0131A**: the same phrase, correctly spelt, four columns before the defective one. Migne's siglum *(Isa. VI)* for what is Jo 12:40 rides verbatim. |
| 0127B | `*Quoniam dicebant, spiritum immundum habet [n: (Matth. III)]*` | ✓ Mc 3:30 | Agrees as printed (Mc 3:30); Migne's *(Matth. III)* is his own citation for a Marcan verse and rides verbatim. |
| 0127B | `VERS. 32.-- *Et quicunque. [n: (AMBR.)]*` | ⚠ NOT in Clementine verbatim — CHECK | **Declined — orthography.** Mt 12:32 reads *quicumque*; *quicunque* is the ordinary medieval spelling and Pattern 9 exempts it. |
| 0127B | `*Qui autem.*` | ✓ 1Cor 3:8, 1Cor 4:4, 1Cor 6:17, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0127C | `*Neque in hoc saeculo.*` | ✓ Mt 12:32 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0127C | `*Neque in futuro.*` | ✓ Mt 12:32 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0127C | `*Aut facite.*` | ✓ Mt 12:33 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0127C | `*Aut facite,*` | ✓ Mt 12:33 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0127D | `VERS. 34.-- *Progenies viperarum,*` | ✓ Mt 3:7, Mt 12:34 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0127D | `*Ex abundantia.*` | ✓ Lc 6:45, Mt 12:34 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0127D | `VERS. 35.-- *Bonus homo.*` | ✓ Lc 6:45, Mt 12:35 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0128A | `VERS. 36.-- *Verbum otiosum.*` | ✓ Mt 12:36 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0128A | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0128A | `*Ex verbis.*` | ✓ Mt 12:37 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0128A | `VERS. 38.-- *Tunc responderunt.*` | ✓ Mt 12:38 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0128B | `VERS. 39.-- *Nisi signum Jonae.*` | ✓ Lc 11:29, Mt 12:39, Mt 16:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0128B | `VERS. 40.-- *Sicut enim fuit Jonas.*` | ✓ Mt 12:40 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0128B | `*Tribus diebus.*` | ✓ 1Par 12:39, 1Par 21:12, 1Rg 30:12, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0128C | `*Tres dies,*` | ✓ 1Mcc 10:34, 2Par 10:5, 2Par 20:25, … | **Not a lemma here.** It is the gloss's own *Mystice* tag re-quoting the verse's words; the ✓ addresses are Old-Testament coincidences of two common words. Agrees with Mt 12:40 as printed. |
| 0128C | `VERS. 41.-- *Viri Ninivitae.*` | ✓ Jon 3:5, Lc 11:32, Mt 12:41 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0128D | `*speciosa:*` | — single word, check in place | **Not scripture.** Jerome's onomastic gloss on *Ninive*; no Vulgate collation applies. Rendered "*comely:*", keeping Migne's colon inside the italic span. |
| 0128D | `VERS. 43.-- *Cum autem,*` | ✓ 1Cor 13:10, 1Cor 15:26, 1Cor 15:28, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129A | `*Ambulat per loca.*` | ✓ Lc 11:24, Mt 12:43 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129A | `VERS. 44.-- *Revertar in domum.*` | ✓ Lc 11:24, Mt 12:44 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129A | `VERS. 45.-- *Septem alios spiritus.*` | ✓ Lc 11:26, Mt 12:45 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129A | `*Nequiores.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0129B | `*Sic erit,*` | ✓ Act 27:25, Gn 15:5, Hab 2:5, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129C | `VERS. 46.-- *Ecce mater ejus. [n: (RAB.)]*` | ✓ Mt 12:46 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0129C | `VERS. 47.-- *Dixit autem ei.*` | ✓ 2Rg 13:20, 4Rg 2:6, Act 5:8, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129C | `VERS. 48.-- *Quae est mater mea?*` | ✓ Mc 3:33, Mt 12:48 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129D | `*Qui amat patrem aut matrem plus quam me, non est me dignus [n: (Matth. X)]*` | ✓ Mt 10:37 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129D | `*Ecce mater mea,*` | ✓ Mc 3:34, Mt 12:49 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0129D | `VERS. 1.-- *In illo die.*` | ✓ 1Par 16:7, Dt 31:17, Gn 15:18, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130A | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0130A | `VERS. 2.-- *Turba stabat.*` | ✓ 2Par 6:3, Mt 13:2 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130A | `VERS. 3.-- *Locutus est multa.*` | ⚠ NOT in Clementine verbatim — CHECK | **Declined — ellipsis, and the cause of the ⚠.** Mt 13:3 reads *et locutus est **eis** multa in parabolis*. The per-verse phrase search fails because one word stands between Migne's two halves: launch brief §7's "elided word". |
| 0130A | `*Qui seminat.*` | ✓ 2Cor 9:6, Gal 6:8, Jo 4:36, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130A | `VERS. 4.-- *Secus viam.*` | ✓ 1Mcc 11:4, Lc 8:5, Lc 8:12, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130B | `*Et venerunt.*` | ✓ 1Mcc 2:15, 1Mcc 3:40, 1Mcc 3:41, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130B | `*Et comederunt.*` | ✓ 1Par 29:22, 2Par 30:22, 3Rg 19:21, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130B | `VERS. 5.-- *In petrosa.*` | ✓ Mt 13:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130C | `*Fulgebunt justi sicut sol [n: (Matth. XIII)]*` | ⚠ NOT in Clementine verbatim — CHECK | **Declined — word order only.** Mt 13:43 reads *Tunc justi **fulgebunt** sicut sol*; Migne fronts the verb and drops *Tunc*. Nothing asserted differently. |
| 0130C | `*Altitudinem terrae.*` | ✓ Mc 4:5, Mt 13:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130C | `VERS. 8.-- *Scaagesimum.*` | — single word, check in place | ⛔ **NOT A DIVERGENCE — OUR FILE'S CORRUPTION.** Both witnesses print the lemma **`Sexagesimum`** (Mt 13:8, verbatim); `Scaagesimum` is no Latin word and is Corpus Corporum's. Filed as TEI patch 1; the English renders the plate, "*Sixtyfold.*". No `[sic:]` — the marker would accuse Migne of our error, and after the patch there is no word left in the Latin for it to quote. |
| 0130C | `VERS. 9.-- *Qui habet aures audiendi.*` | ✓ Lc 8:8, Lc 14:35, Mc 4:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130C | `VERS. 10.-- *Et accedentes discipuli,*` | ✓ Mt 13:10, Mt 14:12, Mt 15:23 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130D | `VERS. 11.-- *Vobis datum est.*` | ✓ Lc 8:10, Mc 4:11, Mt 13:11 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130D | `VERS. 12.-- *Qui enim habet.*` | ✓ Lc 8:18, Mc 4:25, Mt 13:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130D | `*Auferetur ab eo.*` | ✓ Is 33:24, Lc 19:26, Mc 4:25, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0130D | `VERS. 13.-- *Ideo in parabolis.*` | ✓ Mt 13:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0131A | `*Propterea non poterant credere, quia iterum dixit Isaias: Excaevavit oculos eorum, ut non videant [n: (Joan. XI)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[sic: Excaevavit]` FIRED; the `[var:]` DECLINED.** The type defect is Migne's, confirmed on both witnesses (Gallica f66 re-fetched at native resolution), and our twin carries it verbatim — the same work prints *Excaecavit* correctly at 0127A. What else diverges from Jo 12:39–40 is an **ellipsis** (*et induravit cor eorum* cut), which asserts nothing new. |
| 0131A | `*Videntes non vident.*` | ✓ Mt 13:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0131B | `VERS. 14.-- *Auditu audietis.*` | ✓ Mt 13:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0131B | `VERS. 15.-- *Oculos suos.*` | ✓ 1Mcc 4:12, 1Mcc 5:30, 1Mcc 9:39, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0131B | `*Ne quando.*` | ⚠ NOT in Clementine verbatim — CHECK | **Declined — a word division, not a divergence.** Mt 13:15 prints *nequando* as one word; Migne splits it. Launch brief §7's catalogued cause, the same as @0169D *Etsi omnes*. |
| 0131B | `VERS. 16.-- *Beati.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0131B | `VERS. 17.-- *Et justi.*` | ✓ 2Rg 15:3, Mt 13:17, Os 14:10, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0131B | `VERS. 18.-- *Vos ergo audite.*` | ✓ Jr 29:20, Mt 13:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0131C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0131C | `VERS. 20.-- *Super petrosa.*` | ✓ Mc 4:5, Mc 4:16, Mt 13:20 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0131C | `VERS. 22.-- *Fallacia divitiarum. [n: (CHRYSOST.)]*` | ✓ Mt 13:22 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0131C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0131D | `VERS. 23.-- *Aliud quidem centesimum. [n: (RAB.)]*` | ✓ Mt 13:23 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0131D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0131D | `VERS. 24.-- *Aliam parabolam.*` | ✓ Mt 13:24, Mt 13:31, Mt 13:33, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0132A | `VERS. 25.-- *Homines.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0132A | `VERS. 28.-- *Vis, imus.*` | ✓ Mt 13:28 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0132B | `VERS. 29.-- *Et ait: Non,*` | ✓ 1Rg 28:23, 2Rg 20:1, Gn 18:28, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0132B | `*Ne forte.*` | ✓ 1Cor 8:9, 1Cor 9:27, 1Mcc 4:45, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0132C | `VERS. 30.-- *Sinite.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0132C | `*Auferte malum ex vobis [n: (I Cor. V)]*` | ✓ 1Cor 5:13 | **Declined — ellipsis.** 1 Cor 5:13 continues *ex vobis **ipsis***. Migne cuts; the words he prints agree. |
| 0132C | `*Et in tempore.*` | ✓ Dn 11:40, Dn 12:1, Joel 3:1, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0132D | `*Et alligate.*` | ✓ Mt 13:30 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0132D | `VERS. 31.-- *Simile est regnum,*` | ✓ Lc 13:18, Mt 13:44, Mt 13:45, … | **Declined — one word, and it is the tidier form.** Mt 13:31 reads *Similis est regnum caelorum grano sinapis*; Migne prints *Simile*, which is the Vulgate's own form at 13:24, 13:44 and 13:45. One letter, grammatically the better reading, nothing in the gloss turning on it. ⚑ **This is also why the pre-scan's ✓ points at Mt 13:44/45 and not at 13:31 — read the address.** |
| 0132D | `*Auferetur a vobis regnum Dei, et dabitur genti facienti fructum ejus [n: (Matth. XXI)]*` | ⚠ NOT in Clementine verbatim — CHECK | **Declined — a single letter, `fructum` for the Vulgate's `fructus` (Mt 21:43).** Launch brief §2 needs a witness of its own for a one-word `[var:]`: the gloss does not argue from the number, and *s*→*m* is precisely a letter-level change. Migne prints the singular a second time in his own prose at @0126C, which is corroboration of his practice and not one of the two limbs. Both witnesses; declined. |
| 0132D | `*Grano sinapis.*` | ✓ Lc 13:19, Mt 13:31 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133A | `VERS. 32.-- *Cum autem creverit.*` | ✓ Mt 13:32 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133A | `*Oleribus et fit arbor.*` | ✓ Mt 13:32 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133B | `VERS. 33.-- *In farinae satis.*` | ✓ Mt 13:33 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133B | `*Donec fermentatum.*` | ✓ Mt 13:33 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133B | `VERS. 34.-- *In parabolis ad turbas.*` | ✓ Mt 13:34 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133C | `VERS. 44.-- *Thesauro abscondito in agro.*` | ✓ Mt 13:44 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133C | `*Abscondit et prae gaudio illius.*` | ✓ Mt 13:44 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133C | `VERS. 45.-- *Negotiatori.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0133D | `*Bonas margaritas.*` | ✓ Mt 13:45 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133D | `VERS. 46.-- *Inventa autem.*` | ✓ Mt 13:46 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133D | `VERS. 47.-- *Sagenae missae.*` | ✓ Mt 13:47 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0133D | `*Ecce ego mitto ad vos piscatores multos [n: (Jer. XVI)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Jr 16:16 reads *Ecce ego mittam piscatores multos*. Tense changed and *ad vos* added. Both witnesses. |
| 0133D | `*Sequimini me, faciam vos piscatores hominum:*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mt 4:19 reads *Venite post me, et faciam vos fieri piscatores hominum*. A substituted verb and a dropped *fieri*. Both witnesses. |
| 0134A | `*Sic erit in consummatione saeculi,*` | ✓ Mt 13:40, Mt 13:49 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134A | `VERS. 48.-- *Et secus littus.*` | ✓ Mt 13:48 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134A | `VERS. 52.-- *Ideo omnis Scriba doctus,*` | ✓ Mt 13:52 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134B | `VERS. 54.-- *Ut mirarentur.*` | ✓ Mc 2:12, Mt 13:54 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134B | `VERS. 55.-- *Fabri filius.*` | ✓ Mt 13:55 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134C | `VERS. 57.-- *Propheta.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0134C | `*Prophetam suscitabit vobis Dominus de semine vestro [n: (Deut. XVIII)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Dt 18:15 — Migne's own siglum — reads *Prophetam de gente tua et de fratribus tuis, sicut me, suscitabit tibi Dominus Deus tuus*. The wording tracks Act 3:22 except *de semine vestro*, which stands in neither. Both witnesses. |
| 0134C | `*In patria.*` | ✓ Lc 4:23, Lc 4:24, Mc 6:4, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134C | `VERS. 58.-- *Et non fecit.*` | ✓ 2Par 21:19, Jon 3:10, Mt 13:58, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134C | `VERS. 1.-- *In illo tempore audivit Herodes.*` | ✓ Mt 14:1 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134C | `*Audivit autem Herodes tetrarcha [n: (Luc. IX)]*` | ✓ Lc 9:7 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134C | `*Hic est Joannes [n: (Joan. IV)]*` | ✓ Mt 14:2 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134D | `VERS. 2.-- *Et ait.*` | ✓ 1Mcc 3:14, 1Mcc 3:18, 1Mcc 3:58, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134D | `*Et ideo.*` | ✓ 1Cor 14:13, 2Cor 5:9, Gn 20:6, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134D | `VERS. 3.-- *Herodes enim.*` | ✓ Mc 6:20, Mt 14:3 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134D | `*Herodiadem uxorem.*` | ✓ Mc 6:17, Mt 14:3 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0134D | `VERS. 4.-- *Non licet.*` | ✓ 2Cor 12:4, Act 16:21, Dn 6:12, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135A | `VERS. 5.-- *Timuit populum.*` | ✓ Mt 14:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135A | `VERS. 7.-- *Cum juramento.*` | ✓ 2Mcc 7:24, 2Mcc 14:32, Mt 14:7, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135A | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0135B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0135B | `VERS. 9.-- *Constristatus.*` | — single word, check in place | **`[sic: Constristatus]` FIRED.** Mt 14:9 reads *contristatus*; Migne's form has an intruded *s* and is no Latin word. Both witnesses (Gallica f68 re-fetched at native resolution). Sense rendered beside the marker per Pattern 7's 2026-09-05 amendment. |
| 0135B | `VERS. 10.-- *Et decollavit.*` | ✓ Mc 6:27, Mt 14:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135B | `*Illum oportet crescere, me autem minui [n: (Joan. III)]*` | ✓ Jo 3:30 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135C | `VERS. 13.-- *Quod cum audisset Jesus.*` | ✓ Mt 14:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135C | `*Secessit.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0135C | `*secessit,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0135C | `*Et cum audissent turbae,*` | ✓ Mt 14:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135C | `*Pedestres.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0135C | `VERS. 15.-- *Vespere autem facto,*` | ✓ Mc 1:32, Mc 14:17, Mt 8:16, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135D | `*Discipuli ejus.*` | ✓ Jo 2:2, Jo 2:11, Jo 2:12, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135D | `*In viam gentium ne abieritis [n: (Matth. X)]*` | ✓ Mt 10:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135D | `*Ecce gentes quasi stilla situlae.*` | ✓ Is 40:15 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135D | `*Omnes gentes quasi non sint, sed sunt coram eo.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED — the most material in the range.** Is 40:17 reads *sic sunt coram eo*; Migne's *sed* turns "so are they before him" into "**but** they are before him", reversing what the verse concedes. Both witnesses. |
| 0135D | `*Jesus autem,*` | ✓ Jo 5:17, Jo 8:1, Jo 8:6, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0135D | `*Dimitte turbas.*` | ✓ Lc 9:12, Mt 14:15 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136A | `VERS. 16.-- *Date illis.*` | ✓ Lc 9:13, Mc 6:37, Mt 14:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136A | `VERS. 17.-- *Quinque panes et duos pisces.*` | ✓ Mt 14:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136A | `*Animalis enim homo non percipit ea quae sunt spiritus Dei [n: (I Cor. I)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** 1 Cor 2:14 reads *Animalis **autem** homo*. The same pair and direction the 0006–0011 stint fired at @0093A; *autem* and *enim* share no letter in position and no broken sort makes one from the other. |
| 0136A | `*Quae scripta sunt in lege et prophetis plurimis de me [n: (Luc. XXIV)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Lc 24:44 reads *in lege Moysi, et prophetis, et Psalmis de me*. `plurimis` for `Psalmis` is a whole-word substitution, and **the gloss's own argument is the psalms** (*Per duos pisces, prophetae et psalmi*). Both witnesses. |
| 0136A | `VERS. 19.-- *Acceptis quinque,*` | ✓ Mc 6:41, Mt 14:19 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136B | `*Benedixit.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0136B | `VERS. 20.-- *Reliquias.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0136B | `*Et infirma mundi elegit Deus, ut confundat fortia [n: (I Cor. I)]*` | ✓ 1Cor 1:27 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136B | `VERS. 21.-- *Exceptis mulieribus et parvulis.*` | ✓ Mt 14:21 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136B | `*Et statim compulit,*` | ✓ Mt 14:22 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136C | `*venturi erant ut facerent eum regem [n: (Joan. VI)]*` | ⚠ NOT in Clementine verbatim — CHECK | **Declined — the divergence is what Migne's host syntax requires.** Jo 6:15 reads *venturi **essent** ut **raperent eum, et** facerent eum regem*. He weaves the clause into a relative of his own (*Qui, ut ait Joannes, venturi erant…*), where the indicative belongs to his sentence. Same ruling as the 0000–0005 stint's @0069B (*habebit* for *habeat* once *ut* is gone). The missing *raperent eum et* is an ellipsis. |
| 0136C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, preceded immediately by `etc.,` — rendered "as far as". |
| 0136C | `VERS. 23.-- *Ascendit.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0136C | `*Vespere autem.*` | ✓ Mc 1:32, Mc 14:17, Mt 8:16, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136C | `VERS. 24.-- *Navicula autem.*` | ✓ Mt 14:24 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136D | `*Vidit eos laborantes remigando [n: (Marc. VI)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mc 6:48 reads *videns eos laborantes **in** remigando*. Introduced as a quotation (*Unde Marcus ait:*) and closed by a full stop before Migne's comment; a finite verb for a participle plus a dropped preposition. Both witnesses. |
| 0136D | `VERS. 25.-- *Quarta autem.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mt 14:25 reads *Quarta **enim** vigilia noctis*. Same *autem*/*enim* pair and the same reasoning as @0136A. Both witnesses. |
| 0136D | `*Venit ad eos.*` | ✓ Esr 5:3, Jr 36:14, Mc 6:48, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0136D | `*Volens praeterire eos,*` | ⚠ NOT in Clementine verbatim — CHECK | **Declined, and here is the test stated once.** Mc 6:48 reads *et **volebat** praeterire eos*; Migne's sentence runs *Marcus ait: Volens praeterire eos, pro quibus tamen liberandis venit* — the participle is the subject of *venit*. ⚑ **A divergence fires where Migne introduces the words as a quotation that stands on its own** (so @0136D, closed by a stop before his comment) **and declines where the divergence is exactly what his host construction demands** (here, and @0136C). |
| 0136D | `VERS. 26.-- *Et videntes,*` | ✓ 1Mcc 6:47, 1Mcc 12:51, Act 8:6, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0137A | `VERS. 27.-- *Ego sum, nolite timere.*` | ✓ Jo 6:20, Lc 24:36, Mc 6:50, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0137A | `*Qui est misit me ad vos [n: (Exod. III)]*` | ✓ Ex 3:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0137A | `VERS. 28.-- *Domine, si tu es.*` | ✓ Mt 14:28 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0137A | `VERS. 29.-- *Et descendens.*` | ✓ Act 10:11, Act 18:22, Jdc 15:8, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0137A | `*Ambulabat,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0137B | `VERS. 30.-- *Et cum coepisset,*` | ✓ Act 21:37, Mt 14:30, Mt 18:24 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0137B | `VERS. 32.-- *Cessavit ventus.*` | ✓ Mc 4:39, Mc 6:51, Mt 14:32 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0137B | `VERS. 33.-- *Et adoraverunt,*` | ✓ 1Mcc 4:55, 1Par 29:20, 1Rg 1:19, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0137B | `VERS. 34.-- *In terram Genesar.*` | ✓ Mt 14:34 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0137B | `*hortus principum.*` | ⚠ NOT in Clementine verbatim — CHECK | **Not scripture.** The etymology of *Genesar*; no Vulgate collation applies. Rendered "*the garden of princes.*" That is why the pre-scan marked it ⚠. |
| 0137C | `VERS. 36.-- *Fimbriam vestimenti,*` | ✓ Lc 8:44, Mc 6:56, Mt 9:20, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |

**Tally: 211 spans. 13 `[var:]` fired · 2 `[sic:]` fired · 21 divergences and near-misses examined
and adjudicated with reasons · 175 checked and found to agree as printed.**

---

### (d) THIS RANGE'S CRUCES, BY COLUMN

#### 1. ⚑⚑ @0135B — `sacramentum` means AN OATH here, and I have departed from the axis, openly

The `mysterium`/`sacramentum` 1:1 axis binds and I applied it everywhere else in the range without
exception (§a 5). **At 0135B it is wrong and I did not apply it**, and this is the declared
departure the standing brief asks for rather than a silent one.

Migne's ISID. note reads:

> *Non est conservandum **sacramentum** quo malum incaute promittitur, velut si, etc., usque ad
> tolerabilius enim est non implere **sacramentum**, quam manere in stupro.*

The whole passage is Herod's oath. The lemma three paragraphs above is `*Cum juramento.*`; the BEDA
note beside it reads *si quid nos forte incaute **jurasse** contigerit … nec aliquid culpae se tali
**perjurio** contraxisse doluit*; the ISID. note's own verbs are *promittitur* and *implere*.
`sacramentum` here is the classical and canonical sense **oath**, and it is the only sense the
sentence can carry. Rendering "the sacrament is not to be kept whereby an evil is incautiously
promised … more tolerable not to fulfil the sacrament than to remain in defilement" would not be
awkward, it would be **false** — it would put the Church's sacraments where Isidore has put a
perjury. That is Pattern 7a's "a word may not be translated as anything other than what it means",
running in the direction the axis does not anticipate.

**Rendered "oath", twice, and the Latin stands opposite in the parallel column.** The rival reading
(hold the axis, print "sacrament") is named and rejected here so a reader can see which lost and
why. ⚑ I have **not** touched any other `sacramentum` in the range: 0130A *sacramenta loquebatur*,
0133C *occulta sunt sacramenta* and 0134B *hujus sacramenti Judaei ignari* are all the patristic
"sacred sign" sense, all read oddly, and all take **sacrament** exactly as the 0000–0005 stint's
§(d) 1 ruled.

#### 2. @0125A — `accipendum`, and why it is a press variant and not a defect

| | |
|---|---|
| archive p.68 | *Non sit manus tua ad **accipiendum** porrecta* |
| Gallica f62 | *Non sit manus tua ad **accipendum** porrecta* |
| our twin | `accipendum`, following Gallica |

Both settings are clean, both normally spaced, neither line over-inked. This is launch brief §6's
`Bethehem`/`Bethlehem` and 8950's `Mititte`/`Mittite`: **two printings, not two photographs.**
**No `[sic:]`** — the marker is a public claim about Migne's type and the second witness refutes it;
**no patch** — our twin agrees with one of the two settings. The English renders the sense ("to
receive"), and the fact is here and in the plate-reads file.

#### 3. @0125A — the printed `sed` makes the proverb command the opposite, and it rides

*Non sit manus tua ad accipendum porrecta, **sed** ad dandum collecta.* Sir 4:36 has *et*, under
which the one negative governs both members: "let not thy hand be stretched out to receive **and**
shut to give." With Migne's *sed*, the English is "let not thy hand be stretched out to receive,
**but** closed to give" — which commands the closed hand.

**Carried as printed**, with the `[var:]` naming the received conjunction. 7a is explicit that a
printed reading rides *including when carrying it makes the sentence contradict itself*, and the
contradiction is visible on the page: Migne's own next clause is *qui has ad pauperes pro posse
**non extendit***, which condemns exactly the hand his quotation has just commended.
⛔ **A `[cj:]` was weighed and lost on a rule, not on taste:** Pattern 18a's explicit ❌ is "a
divergence inside a QUOTED SCRIPTURE — that is Pattern 14, not this", and the rule that separates
the two conventions is *where* the divergence sits, not how it reads.

#### 4. @0124C — `Et vos ostenderet`, where the sense requires `ut`

*Et vos ostenderet omnia futuri temporis speciem continere, adjecit: Si autem sciretis…* The verb is
subjunctive and there is no conjunction to govern it; *ut* is near-certain. **Both witnesses print
`Et`**, at normal spacing, so it is Migne's and not ours. Rendered as closely as the printed words
allow — "And that he might show you that all things contain the figure of the time to come, he
added" — which keeps the subjunctive and supplies no Latin word.

⛔ **`[cj:]` weighed and declined, and the rival named.** *Et* is a real word occupying its slot;
18a's bar is that the English must **assert something false**, and its explicit ❌ is "a merely
awkward or elliptical sentence". "And that he might show you" asserts nothing the author argues
against — it is loose, not false. The conjecture lives here and the printed word stands in the text.

#### 5. @0124A — a singular verb with two subjects, and English has an exponent for it

*Si David et Abimelech **non reprehenditur**.* Both witnesses. I rendered "**are** not reproved".
⚠ This is a place where I have normalized and I say so, because English *is/are* does carry the
distinction and Pattern 12's second test warns that rendering a number disagreement can hide it.
I decided it under Pattern 9 rather than Pattern 12: **a Latin verb agreeing with the nearer of two
subjects is ordinary Latin usage, not a fact about this printing** — the class the plate would be
evidence for is a disagreement Latin does not license, and this is not one. "David and Abimelech is
not reproved" would read as our error, which is Pattern 9's own argument.

⚑ **The same construction recurs at @0135C** — *Postquam apud Judaeos lex et propheta caput **perdit**
et vocem* — and is rendered the same way ("the law and the prophet lose their head and their voice"),
on both witnesses, for the same reason. Recorded so the pair is visible as a class rather than as two
unrelated normalizations.

#### 24. @0132B — the one bracketed word in the stint

*ideo eos non esse tollendos, **ne forte interficiantur, qui forte futuri sunt***. The relative
clause has no complement: *futuri sunt* is "are going to be", and Latin leaves what they are going
to be to the argument. English cannot. Rendered "lest perhaps they be slain **who perhaps are yet to
be [good]**", in the corpus's square-bracket convention for our own supplied words.

Naming the supply, as the brief requires: it is **good**, and Migne's own next clause fixes it —
*vel ne bonis obsit, quibus prosunt*, and the paragraph before it *Non nosse hominem in hac vita
**qualis futurus sit** qui modo errat*. The whole argument is that today's tares may be tomorrow's
wheat. The rival supply ("who perhaps are yet to be **such**", i.e. still tares) inverts the reason
for sparing them and is rejected on that ground. **Nothing else in five chunks is bracketed.**

#### 6. @0126B — the unexpressed reference of `in se`, named

*quod innuit eos sibi elegisse, dum **in se** non credunt.* Rendered "while they do not believe **in
him**." Naming it as the brief requires: the reflexive is inside indirect statement governed by
*innuit*, whose subject is Christ, so *se* is Christ and not the Jews. The rival ("while they do not
believe in themselves") construes grammatically and is rejected because it makes the sentence say
nothing the paragraph is arguing — the whole dilemma is about believing *him*, and the preceding
clause is *a regno ejus recedant*.

#### 7. @0129A — `opera mea qui polluta mundo`, a first-person verb inside a relative clause

*Distat inter opera mea **qui polluta mundo**, et Satanae, qui mundata gravius contaminat.* The
relative is masculine and the verb first-person singular, against neuter plural *opera*; the
sentence does not construe as written. **Both witnesses print it so.** Rendered as closely as the
words allow — "There is a difference between my works, who cleanse the things that are polluted, and
Satan's, who more grievously defiles the things that have been cleansed" — with the incoherence
preserved. No marker: nothing is a non-word, so `[sic:]` cannot reach it, and *mundo* is a real word
in its own slot, so `[cj:]` cannot either. Logged because a blind reader will stop here.

#### 8. @0135D — the unexpressed subject of `sequitur`, named

*Dimitte turbas. Diu est quod **idola sequitur**, ideoque non est a nobis pascenda pane verbi Dei.*
A feminine singular subject is required by *pascenda* and none is printed. Rendered "**she** has
followed idols … she is not to be fed". Naming her: it is **the Gentile world**, the subject of the
paragraph immediately above (*Fastidiunt Judaei **gentes** recipi*, and *gentilitas* at 0128D is the
work's own feminine for it). The rival, *turba*, also construes; it loses because the disciples'
*Dimitte turbas* is plural and the gloss's *a nobis* puts the sentence in the Jews' mouth about the
Gentiles, not in the disciples' about the crowd.

#### 9. @0134D — whose grief, and whose enemy

*Herodias filia Arethae regis, quam ipse pater tulit Philippo, et **in dolorem ejus** dedit Herodi
inimico **illius**.* Both pronouns are unexpressed as to person. Both are **Philip**: the father
took her from Philip, so the grief is Philip's and the enemy is Philip's enemy. Rendered "to
Philip's grief, gave to Herod his enemy", naming him once so the second pronoun has an antecedent in
English. Recorded rather than left as a bare "his".

#### 10. @0132A — `aliam parabolam et non alteram`, a distinction English cannot carry

*Unde et dixit **aliam** parabolam et non **alteram**, ut plures sequi intelligantur.* The whole
point is *alius* (another of many) against *alter* (the other of two), and English "another"/"the
other" only half carries it. Rendered "another parable and not the other", which is as close as the
words allow, and the sequel (*ut plures sequi intelligantur*) tells the reader what the distinction
was for. No marker; logged because the sentence reads as a tautology otherwise.

#### 11. @0137B — `creaturam esse perducat`

*Viso signo Filium Dei confitentur: cur ergo Arius creaturam esse **perducat**?* A subjunctive of
*perducere* with no obvious object. Both witnesses. Rendered "why then should Arius bring it about
that he is a creature?" — as close as the printed words allow. No marker: *perducat* is a real word
in a construction that parses, so `[sic:]` is closed to it, and the English is opaque rather than
false, which 18a's ❌ covers. **Migne's question mark rides**, as it does at every one of the range's
seven interrogatives.

#### 12. @0134C — the one deliberate band-level punctuation mismatch

Our twin prints *Quod ergo ait**;*** where **both witnesses print a colon**, with Migne's usual space
before it. Under `translation-style.md` §"What the English translates — THE PLATE WHERE READ" the
English carries the colon ("What therefore he says: *This is John*"), and the site is filed as
pending patch 3. That single change is why chunk 0026's head band (col 0134C) shows one colon more
and one semicolon fewer than the Latin twin. It is declared, not swept.

#### 13. @0131B — a terminal stop the archive has and Gallica has not

*Lucas justos reges dicit, quia motus suos bene **regunt*** — our twin ends the sentence with **no
mark**, Gallica prints none, the archive prints a period. Pattern 8: **never supply a mark the plate
lacks**, and here the plate that agrees with our twin is the better witness of the two. **The
English ends without a stop.** ⚑ Recorded prominently because a reader will take it for our error,
and because a translator working from the archive copy alone would have supplied it.

#### 14. Verse addresses — six dash disagreements between the two printings, all left alone

`VERS. 33.` @0127C · `VERS. 37.` @0128A · `VERS. 2.` @0130A · `VERS. 13.` @0130D ·
`VERS. 22.` @0136B · `VERS. 28.` @0137A — plus a transposed `VERS. -- 28.` on the archive at
@0132A. In every case the two copies disagree about the presence or the position of the `.--`, and
**our twin follows Gallica at all six.** Per the withdrawn verse-address rule a `VERS.` address may
not be altered on one witness, and where the witnesses *disagree* the case is weaker still.
Nothing was touched; convention 1 passes the address through verbatim in any case, and nothing
machine-readable consumes it. Our twin's two dashless forms (`VERS. 33.` @0127C, `VERS. 37.` @0128A,
and also `VERS. 22.` @0136B, `VERS. 33.` @0127C) are reproduced exactly in the English.

#### 15. @0130A — `usque ad ad quae`, and why no `[d:]` fired

*Non solum facta et dicta Domini, sed et itinera, **etc., usque ad ad quae** Judaei non intraverunt,
foris in littera fixi.* Both witnesses print the doubled *ad*. Pattern 11a asks which copy is the
intrusion; **neither is.** The first *ad* belongs to the abridgment formula *usque ad*, the second
opens the resumption tail (*ad quae Judaei non intraverunt*), which is a relative clause requiring
its own preposition. Marking one would quarantine a word Migne needs. Rendered "as far as *to which
the Jews did not enter in*".

#### 16. @0125C, @0126A, @0126D — the negation-host test (2a), run and passed

The trigger population is a negative on a verb with a correlative or quantifier beside it. Every one
in the range was checked and the host proved from the sentence's structure, never from what reads
well:

- @0125C *Non **timore**, ne proditus occideretur, **sed** parcendo Judaeis* — host is *timore*, and
  the `sed parcendo` correlative proves it: he *did* charge them, and what is denied is the motive.
- @0127B *quia **non invidia diabolica**, sed humana ignorantia hoc faciunt* — host is the
  cause-phrase; they *do* do it.
- @0133B *non nos **ad triplicem Deum**, sed unius deitatis notitiam perducit* — host is the goal
  phrase; it *does* lead us somewhere.
- @0132B *et tunc **non ab hominibus**, sed ab angelis dicit fieri* — host is the agent.
- @0134B *non **illius quem putant**, sed fabricatoris omnium* — host is the genitive.
- @0134B *Non enim **considerant praesentia** ejus opera, sed fragilem recordantur infantiam* —
  host is the object-phrase, and the `sed` clause supplies what they *do* attend to.
- @0135D *Hoc **non mane vel meridie**, sed vespere* — host is the time-phrase.
- @0136C *Non **quod omnia non habens in potestate**, sed ut formam hominis impleret* — **two
  negatives, both carried**, and the second sits on the participle inside the first's scope.
  Rendered "Not as one not having all things in his power, but that he might fulfil the form of a
  man", which supplies no verb and keeps both.
- @0127A *Non **omnia** peccata omnibus remittuntur, sed his* — host is *omnia*, not the verb: this
  is the 8990 @0614B shape (a negative on a quantifier beside a plausible verb) and it is the one in
  the range most likely to have floated. It did not.

#### 17. @0128B — `nisi poeniteant`, a negative that is not one

*Ostendit Judaeos ad instar Ninivitarum criminosos, et **nisi poeniteant** subversioni proximos.*
Rendered "and, unless they repent, near to overthrow." Recorded because a negation-counting check
will see a `nisi` here and look for it: it is in "unless".

#### 18. Punctuation, band by band — the mechanical test and what it leaves

Column anchors are verified 1:1 across all five chunks (16 · 8 · 15 · 4 · 12 = 55, in order and in
place), so they partition both twins identically. Comparing marks band by band across all 60 bands
of my five chunks:

- **question marks: zero mismatched bands** — 7 in the Latin, 7 in the English, each in its own band.
  All seven are Migne's; none supplied, none deleted.
- **guillemets: zero, in both** — this book prints none.
- **colons: zero mismatched bands**, after I removed five I had supplied (@0128C, @0128D, @0131D,
  @0133B, @0134B) and restored two I had destroyed (@0126C *Neque enim possunt esse concordes**:***,
  and @0127D, the head band of chunk 0023, *Ostendit eos malam arborem**:***). ⚑ **The two restorations are
  the finding**, not the removals: both were marks of Migne's that my first draft had quietly
  swallowed, and only the band comparison found them. **One deliberate exception stands**, @0134C,
  declared in §(d) 12.
- **semicolons: 11 bands where the English has one more than the Latin, and none where it has
  fewer** (@0125B, @0126B, @0129A, @0130D, @0131A, @0132B ×2, @0134A, @0135A, @0136A, @0136C,
  @0136D). Every one is a comma in Migne that English cannot hold as a comma without splicing.
  **Nothing Migne prints was destroyed anywhere in the range**, which is the direction the test
  exists to catch, and the standing ruling is that comma→semicolon is a rate question, not an
  absence. I have not swept the other way either.

#### 19. Anchor position — checked against the word, not merely for presence

All 55 anchors were checked against the word they stand beside on the plate (test 2b), not merely
for presence and order. **The largest displacement in the range is one word**, at @0127A, where the
Latin sets *Non omnia peccata omnibus [0127A] remittuntur* and English word order puts the anchor
after "to all" rather than before "remitted": "Not all sins are remitted to all [0127A], but to
these". Recorded because `verify-english` checks presence and order and **not** position, so nothing
else would make it visible.

#### 20. Sentence-type marks Migne prints, all carried

Seven question marks, all his, none supplied and none deleted: @0124B (*cur non idem probatis in
apostolis?*), @0124C (*cur spirituale non potest defendere discipulos sibi credentes?*), @0124C
(*qui verus est rex et sacerdos et dominus sabbati?*), @0126B (*quare in me idem opus eamdem non
habet causam?*), @0130C (*Quomodo accedunt discipuli cum Dominus in navi sederet?*), @0129C (*Quae
est mater mea?* — inside the lemma), @0137B (*cur ergo Arius creaturam esse perducat?*).
⚑ **Pattern 8b was not needed once**: there is no *Quaeritur* in the range, and every interrogative
Migne marks is already direct.

#### 21. @0128A — a statement where an English ear wants a question

*Si de otioso verbo reddet homo rationem in die judicii, quanto magis **vos** qui opera sancti
Spiritus dicitis esse Beelzebub.* Migne prints a **full stop**. Pattern 8: never supply a mark the
plate lacks. The English ends with a stop, and the sentence is left without its apodosis exactly as
he leaves it.

#### 22. @0128C — `accipe` and `habes`, a singular address inside an arithmetical aside

*Partem diei … pro nocte et die **accipe** … et ita **habes** tres dies et tres noctes.* Second
person singular, so **thou** under Pattern 17 — "and so **thou hast** three days and three nights."
The imperative *accipe* carries no number in English and is rendered "Take". This is the only
singular address in three chunks otherwise addressed to a plural, and it is visible without
apparatus.

#### 23. The `⚑ MATCHES ONLY ELSEWHERE` candidates — none in this range, confirmed rather than assumed

The launch brief lists eight; none falls in cols 0124A–0137C. **I confirm it rather than assume it:
no span in my range carries that flag in `9002-lemmata-0022.txt`.** The two ✓ that a careless reader
would have taken as clearance are named at the head of §(c) and both were run down.

---

### (e) DECLINED-ODDITY LIST — every suspect word I did NOT mark, with its column

**Fourteen of the twenty-eight entries below are archive-only readings that Gallica refutes.** They
are listed in full because the count is the finding: had I read one witness, this file would carry
fourteen confident claims about Migne's type and **all fourteen would be false** — including one
(@0133A *accendit* for *ascendit*) that is a real, well-formed Latin word in a sentence that wants
the other, i.e. a textbook Pattern 18 site with nothing behind it at all.

| col | the suspicion | why declined |
|---|---|---|
| 0124A | archive prints `(Ose. iv)` | **Gallica prints `(Ose. vi)`**; our twin agrees. |
| 0124B | archive prints *omnes **saderdotes** sumus* (non-word) | **Gallica prints `sacerdotes`**; our twin agrees. |
| 0124D | archive prints ***trangressor** majori subjacet culpae* (non-word) | **Gallica prints `transgressor`**; our twin agrees. |
| 0125C–D | archive prints *linum fumigans **extinguit***, *ardore fere **extincto***, *quas non **extinxit*** | **Gallica prints `exstinguit`, `exstincto`, `exstinxit`**; our twin agrees at all three. |
| 0126B | archive prints *Si autem ego **spiritu Dei*** — the `in` gone | **Gallica prints `in spiritu Dei`**; our twin agrees. A lost word, which is the class one witness cannot adjudicate. |
| 0126C | archive prints *Unde alibi **;*** | **Gallica prints a colon**, as our twin does. |
| 0126D | archive prints ***Domum illus.*** (non-word) | **Gallica prints `Domum illius`**; our twin agrees. |
| 0128A | archive prints *et dicit esse **Beelzebud*** | **Gallica prints `Beelzebub`**; our twin agrees. |
| 0130A | archive prints `(RAB).` | **Gallica prints `(RAB.)`**; our twin agrees. |
| 0130B | archive prints *Quia **mentibus** hominum illud surripuerunt* | **Gallica prints `a mentibus`**; our twin agrees. |
| 0130C | archive prints *probitas **a nimi*** (split type) | **Gallica prints `animi`**; our twin agrees. |
| 0131A | archive prints *et sic **cruxiferunt*** (non-word) | **Gallica prints `crucifixerunt`**; our twin agrees. |
| 0131B | archive prints *motus suos bene **regunt.*** with a terminal stop | **Gallica prints none**, nor does our twin. Pattern 8: never supply. §(d) 13. |
| 0133A | archive prints *quia surrexit et **accendit** in coelum* | **Gallica prints `ascendit`**; our twin agrees. ⚑ **The most dangerous of the fourteen**, because *accendit* is a real word and the site would have read as a genuine `[cj:]` candidate. |
| 0133D | archive prints *carnis **testitudine***, *Petrus et **Andraeas*** | **Gallica prints `testudine`, `Andreas`**; our twin agrees at both. |
| 0134A, 0134B | archive prints ***quiquid*** twice (non-word) | **Gallica prints `quidquid`** twice; our twin agrees. |
| 0136D | archive prints *subito **duitinae** tribulationis* (non-word) | **Gallica prints `diutinae`**; our twin agrees. |

#### And the suspicions that were NOT about the archive's ink

| col | the suspicion | why declined |
|---|---|---|
| 0124C | *Et vos ostenderet* where the sense wants *ut* | Real word, both witnesses, `[cj:]` weighed and declined under 18a. §(d) 4. |
| 0124A | *Si David et Abimelech **non reprehenditur*** | Latin agreement with the nearer subject; Pattern 9, not Pattern 12. §(d) 5. |
| 0125A | *ad **accipendum** porrecta* (a non-word in our twin) | **Press variant**: the archive prints `accipiendum`, both settings clean. No `[sic:]`, no patch. §(d) 2. |
| 0126C | *appropinquabit* where Mt 3:2 / 4:17 read *appropinquavit* | One letter, and it is *b* for *v*; both witnesses print the *b*; the gloss argues from neither tense. §(c). |
| 0128D | Gallica prints *Viri Ninivitae**,*** where the archive and our twin print a period | Witnesses disagree on a terminal mark; the twin is left alone. |
| 0129A | *opera mea **qui polluta mundo*** — a first-person verb in a relative clause | Both witnesses; nothing is a non-word, so no marker class reaches it. §(d) 7. |
| 0132A | *aliam parabolam et non **alteram*** | Both witnesses; English has only half an exponent for *alius*/*alter*. §(d) 10. |
| 0132D | *genti facienti **fructum** ejus* where Mt 21:43 reads *fructus* | One letter; the gloss does not argue from the number; both witnesses. §(c). |
| 0133C | archive prints `Israël`, Gallica and our twin `Israel` | A diaeresis; witnesses disagree; the twin is left alone. |
| 0135A | *Ad hoc **forte** juravit* | A real adverb reading perfectly; raised only because *forte* is the keyword of Migne's own conjecture layer. **It is not one**: no foot-of-page note stands on any of the sixteen columns, and the word is ordinary prose here. Recorded as a checked negative. |
| 0136C | *venturi **erant** ut facerent eum regem* where Jo 6:15 has *essent* | The indicative is Migne's own relative construction, not a reading. §(c), and the test in §(a) 3. |
| 0136D | *Volens praeterire eos* where Mc 6:48 has *volebat* | Same, and the participle is the subject of Migne's *venit*. §(c). |
| 0137B | *creaturam esse **perducat*** | Real word, both witnesses; opaque, not false. §(d) 11. |
| 0130C | *Scaagesimum* (non-word) | **Not Migne's**: both witnesses print `Sexagesimum`. TEI patch 1, no marker. §(c) and the patches file. |

#### Suspiciously TIDY forms — brief §4's other direction, and four checked negatives

The class that leaves nothing to notice is the one where the digitization has **corrected** Migne. I
looked for it deliberately at the places where our Latin reads smoothly in rough surroundings, and I
read whole lines rather than target words. **In this range the answer is: none found, and the three
patches all run the other way** — @0130C, @0134A and @0134C are the digitization corrupting, not
tidying.

⭐ **The negatives are worth more than the search**, and the brief asks for them explicitly. The four
places in my range where our Latin is roughest are exactly the four a transcriber would smooth, and
**both plates print the rough reading at every one**: @0124C's conjunctionless *Et vos ostenderet*,
@0129A's *opera mea qui polluta mundo*, @0132A's *aliam … et non alteram*, and @0137B's
*creaturam esse perducat*. Our transcription is faithful there. This volume's digitization drops and
alters letters and moves punctuation; in my range it did not tidy anything.


---

# §7 · STINT 0027–0031 (cols 0137C–0150A)

*Preserved from `cruces-0027.md`, unedited; headings demoted one level. Companion files: `data/briefs/9002-PLATE-READS-0027.json`, `data/briefs/9002-PENDING-TEI-PATCHES-0027.md`, `data/briefs/9002-lemmata-0027.txt`.*

## 9002 — cruces, stint 0027–0031 (cols 0137C–0150A)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0027–0031: `CAPUT XV.`
through `CAPUT XIX.` — Mt 15:1 to Mt 19:30, 4,998 Latin words (5,077 by my own count of the chunk
bodies), 14 columns, **both plates read on every page**.

Companion files from this stint: `data/briefs/9002-PLATE-READS-0027.json` (every page opened, both
witnesses, findings and negatives) and `data/briefs/9002-PENDING-TEI-PATCHES-0027.md` (four sites
where our Latin has departed from Migne, all four Corpus Corporum's).

**Apparatus fired: 7 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]`.** Guillemets: zero in either language, either direction — Matthew is an italic-lemma
book. `verify-english.mjs` is clean on all five chunks: column anchors (50), `[n:]` notes (30),
`VERS.` addresses, paragraph counts and question marks all 1:1 with the Latin twins.

---

### (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. No claim about Migne's type on one witness, in either direction.** Every candidate raised from
the archive copy was taken to Gallica before it was written down. **Twenty-one candidates,
seventeen refuted, four confirmed — and all four confirmed ones turned out to be OUR file's error,
not Migne's.** The archive copy of PL 114 lost 17 times out of 17 in this range. That is a third
independent reproduction of the 12:1 figure CLAUDE.md records for cols 0063–0080.

**2. Where the plate was read and our twin diverges, the English renders the plate**
(`translation-style.md` §"What the English translates"). Four sites, all filed as pending patches:
@0142A `Etiam`→`Eliam`, @0143D `enimus`→`erimus`, @0148D `eum`→`cum`, @0142A a supplied comma.

**3. Zero `[sic:]`, and that is a measurement, not timidity.** A `[sic:]` accuses Migne's type and
must quote a word still standing in our Latin. Every defect I found is the digitization's, so the
marker cannot even be written at the sites that have one. This is the same result the 0000, 0006 and
0012 stints reported for their ranges.

**4. When a `[var:]` fires.** Migne's quoted scripture takes a `[var:]` where his words **assert or
substitute something the received text does not**. It does **not** fire where he merely shortens a
verse (an ellipsis — what an abridged recension does constantly, and which asserts nothing new),
nor on orthography, nor on a transposition that leaves the sense untouched. For a **single-word**
divergence I applied launch brief §2's bar exactly: it stands only where the gloss argues from the
word, **or** where the form is one that letter-level corruption cannot manufacture. Both limbs are
named at each firing below, and every decline is itemized in §(c) with its reason.

**5. `[cj:]` once, on the gloss's own prose** — @0146B `Jesus` for `laesus`. Pattern 18, not
Pattern 14, because the divergence sits in the commentator's sentence and not inside a quoted
scripture; the marker is additive, Migne's word keeps its English, and the conjecture stands beside
it. Argued in §(d).

**6. Vocabulary axes, applied from the first chunk.** `turba` → **crowd** (0139D *Misereor turbae*,
"Turba triduo sustinet"; 0140C "communis turba", *Et dimissa turba*, "ministrato turbae verbo";
0143A "tam eos quam turbas"; 0149C "major turba pauperum") — **no `multitudo` anywhere in the
range**, so the pair never had to be separated here. `daemonium` → **demon** (0145B *Et exiit ab eo
daemonium*, the range's only occurrence); `diabolus` → **devil** (six occurrences, 0138C–0145C);
no `satanas`. The *gentes* family: **`gentes`/`gentium`/`gentibus` → Gentiles** at all twelve
occurrences, because every one of them sits inside the *Judaei*/*gentes* typology this chapter is
built on (0138D *iturus ad gentes* against *perfidiam Judaeorum*; 0139A *gentium autem salus*
against *calumniam Judaeorum*; 0139B *catelli gentes humiles*, *fides gentium*; 0139C *plenitudo
gentium … omnis Israel*; 0147D *spernis gentes*); **`gentilis` → Gentile** (0138D *gentilis
feminae*, 0147C *Gentilem populum*); **`natio` → nation** at its single occurrence (0147C *tradidit
exteris nationibus*, "delivered over to foreign nations"); **`ethnicus` → heathen** (0147A lemma
*Sicut Ethnicus*, Mt 18:17). ⚑ The `natio` grep fires three times in these chunks and **two of the
three are *incarnation-*** — the instrument trap the standing brief names; checked before reporting.
`mysterium` → **mystery** and `sacramentum` → **sacrament**, 1:1 and never crossed (0139A
*sacramentum mei adventus* "the sacrament of my coming"; 0139B *interna mysteria*; 0140B *altiora
mysteria*; 0142A *mysterium fidei*; 0144B *mysterium sanctae Trinitatis*).

**7. `usque ad` — the `etc.` splice test, applied per occurrence. Twenty occurrences, twenty
formula, zero ordinary.** Every one of the twenty follows an `etc.,` and names where the father's
sentence resumes, so every one is rendered **"as far as"**. There is no temporal, spatial or
lemma-internal `usque ad` anywhere in these five chunks — the cleanest split any stint in this work
has reported, and I say so explicitly because a bare "all formula" is what a stint that never
checked would also write.

**8. Second person by number, not by reverence** (Pattern 17). The range swings between the two
repeatedly and the Latin decides every time. Plural **you** for the Pharisees (0137D *contemnitis*,
*arguitis*), for the apostles (0141A *potestis*, 0141A *vobis*, 0141B *cogitatis*, 0145B *fides
vestra*, 0146C *praecipio vobis … potestis*, 0147A *vestra sententia*, 0147B *sciatis*, 0148D
*vetatis, profertis, honorate, miseremini*, 0149D *eritis et vos*). Singular **thou** for the son
addressing his father (0138A *in tuos cibos, tibi, acciperes*), for Peter (0142A *tu es … ordinabis,
abjicies*; 0142B *ligaveris, adjudicaveris, absolveris*; 0142D *tibi dabo claves*, *Non placet tibi
… sapis*; 0145D *Quid tibi videtur*), for the individual believer (0146C *manus tua … pateas*,
*Bonum tibi est*; 0146D *peccaverit in te*; 0147A *Corripe, Dic*), and for the wicked servant
(0147D *dimisi tibi, rogasti, habuisti, persequeris, spernis, tua societate*). No "ye" outside
italic lemmata (*Hear ye him*, *Receive ye the Holy Spirit*, *Go ye not*, *Come, ye blessed*).

**9. Nothing supplied.** Where Migne's sentence lacks a word English cannot do without, the English
is left as broken as the Latin and the site is logged in §(d) — four of them, at 0138A, 0146B,
0146D–0147A and 0148D. **No bracketed conjecture stands in the running text anywhere in this
stint**; the one conjecture I hold is inside its `[cj:]` marker, where a reader meets it.

**10. Lemma expansion — the line I drew, which is the 0012 stint's and I adopt it deliberately
rather than re-deriving one.** The test: *can the printed lemma stand as an English clause or
phrase on its own?* If yes, render it as it stands; if it is grammatically headless, expand it from
the verse (convention 3).

- Rendered as they stand: *Edissere.* "Expound." · *Caecos.* "The blind." · *Clamavit,* "She cried
  out," · *Absit.* "Far be it." · *Vade.* "Go." · *Petrus.* "Peter." · *Tu es.* "Thou art." ·
  *Signa.* "Signs." · *Expedit.* "It is expedient." · *Talium.* "Of such." · *Deum.* "God." ·
  *Mirabantur.* "They wondered." · *Centuplum.* "A hundredfold." · *Barjona.* "Barjona."
- Expanded (headless): *Quare et vos.* → "Why do you also transgress." (Mt 15:3 — the pronoun has
  no verb) · *Non lotis.* → "With unwashen hands." (Mt 15:20 — a bare ablative plural) ·
  *Tunc accedentes.* → "Then the disciples, drawing near." (Mt 15:12 — a participle with no
  subject) · *Quia non.* → "Because thou savourest not." (Mt 16:23 — a negative with nothing to
  negate) · *Ergo liberi,* → "Then the sons are free," (Mt 17:25) · *Ut signum de coelo,* → "That
  he would show a sign from heaven," (Mt 16:1) · *Homines esse.* → "That men say he is."
  (Mt 16:13 — a bare accusative-and-infinitive; the gloss then expounds *homines*, which is why the
  word had to survive the expansion).
- ⛔ **And the expansions I refused, because they are 7a″ conformation and not convention 3.** Four
  lemmata clip a possessive or an intensifier that the Douay restores by reflex, and in each the
  restored word is *not on Migne's page*: *Honora patrem.* is **"Honour father."**, not "Honour thy
  father" (Mt 15:4 prints no *tuum*; *tuum* is Exodus's and Douay's) · *Magna est fides.* is
  **"Great is the faith."**, not "thy faith" (no *tua*) · *Hic est Filius.* is **"This is the
  Son."**, not "my beloved Son" (no *meus dilectus*) · *Propter incredulitatem.* is **"Because of
  unbelief."**, not "your unbelief" (no *vestram*). Each of the four reads slightly oddly in
  English, and that oddness is the information: it is what a clipped lemma looks like when it is
  not quietly completed from a Bible.
- ⚑ One more of the same class inside a gloss, not a lemma: at 0149C the lemma is *Quis poterit
  salvus esse?* and Mt 19:25 reads *Quis **ergo** poterit salvus esse?* The English is **"Who shall
  be able to be saved?"** — the Douay's "Who then can be saved?" would have restored the *ergo*
  Migne does not print, in the one clause the gloss's whole argument rests on.

---

### (b) SPAN COUNT — 217 against 217, whole-file and paragraph-bounded

`data/briefs/9002-lemmata-0027.txt` heads its inventory **217 spans, of which 0 open-ended**, for
chunks 0027–0031.

Counted in my own Latin, **both ways** (the file's own warning is that a bare total can agree
falsely when two errors cancel, so both numbers are required):

| | 0027 | 0028 | 0029 | 0030 | 0031 | **total** |
|---|---|---|---|---|---|---|
| italic `*…*`, whole file | 48 | 51 | 44 | 41 | 33 | **217** |
| italic `*…*`, paragraph-bounded | 48 | 51 | 44 | 41 | 33 | **217** |
| guillemet `« … »` | 0 | 0 | 0 | 0 | 0 | **0** |

**217 = 217 on both counts**, with 434 asterisk characters and zero guillemet characters in the
range, and **not one paragraph in the five chunks carries an odd number of asterisks**. The two
failure modes that make a bare total lie — an unmatched `«` running forward across a paragraph and
an unmatched `»` shifting the pairing back — are therefore both excluded, not merely unobserved.

---

### (c) THE LEMMA DIVERGENCE LIST — all 217 spans adjudicated, fired and declined alike

#### c.1 · The seven `[var:]` that stand

| col | Migne prints | Clementine | why it fires |
|---|---|---|---|
| **0138B** | *Haereticum hominem post **primam** et secundam **correctionem** devita* [n: (Tit. III)] | Tit 3:10 *post **unam** et secundam **correptionem*** | a quoted clause with **two substitutions**, neither producible by letter-level corruption: *primam* for *unam* changes what is counted, and *correctionem* for *correptionem* changes correction into rebuke. Both plates. |
| **0141D** | *Joannes quem ego decollavi **surrexit** a mortuis: et **ideo** virtutes operantur **in eo*** [n: (Marc. VI)] | Mc 6:16 *Quem ego decollavi Joannem, hic a mortuis **resurrexit***; and the second half is **Mc 6:14**, *et **propterea** virtutes operantur **in illo*** | a quoted clause, restructured and conflated across two verses, with three word substitutions. Both plates. |
| **0143A** | *Vivo autem **ego**, jam non ego.* | Gal 2:20 *Vivo autem, jam non ego* | Migne **adds** the emphatic *ego*. A whole added word is not a broken sort, and the gloss leans on exactly this contrast (*Quod erat per vetustatem, abnegaverat ille qui dicebat*). Both plates. |
| **0144D** | *Nemini dixeritis **nisi**,* etc. | Mt 17:9 *Nemini dixeritis **visionem*** | a different word, not a letter-level variant of *visionem*. Both plates, read at 300 dpi and at native IIIF resolution. |
| **0146D** | *Gaudebit,* etc. | Mt 18:13 *gaudet super eam magis* | tense: future for present. `gaudet`→`Gaudebit` inserts two letters and cannot be a broken sort; **and the gloss's own next words revert to the present**, *Magis Dominus **gaudet** de nostra reparatione*. Both plates. |
| **0147B** | *Ibi sum **in me**.* | Mt 18:20 *ibi sum **in medio eorum*** | a quoted clause, and **the gloss quotes the received words the lemma does not have** — *ut dicat Deum **in medio esse eorum***, four lines below. Both plates. |
| **0149B** | *Dicit **ei** adolescens.* | Mt 19:20 *Dicit **illi** adolescens* | a different word (*ei*/*illi*), which letter-level corruption cannot manufacture — the limb the 0006 stint fired on for this exact pair. **⚠ Note for the auditor: the archive copy prints `et` here and Gallica prints `ei`; the marker rests on Gallica plus our twin, and the archive's reading does not construe.** |

#### c.2 · The `⚠ NOT in Clementine verbatim` spans, every one adjudicated

The brief flagged 25 spans in this range. Not one is a divergence I have left unaccounted:

**Orthography and word division — not divergences (launch brief §7's third cause).**
*Quicunque dixerit.* @0138A and *Quicunque ergo humiliaverit,* @0146A against Clementine
*Quicumque* (·*cunque*/·*cumque*, twice) · *Et quodcunque ligaveris.* @0142B and *Et quodcunque
ligaveris super terram.* @0142B against *quodcumque* (twice) · *maechatur* @0148B against
*moechatur* (ae/oe) · *Barjona.* @0141D against Mt 16:17 *Bar Jona* — **a word division, nothing
more**, exactly §7's `Etsi omnes` case, and not a `[sic:]` either.

**Ellipsis and clipping — the recension's own habit, which asserts nothing new.**
*Aedificabo Ecclesiam meam, et tibi dabo claves,* @0142D (Mt 16:18 + 16:19 joined across the verse
seam) · *Quia non sunt condignae passiones…* @0143B (Migne's *Quia* stands where Rom 8:18 has
*Existimo enim quod* — his own connective, opening the quotation) · *Castigo corpus meum…* @0143A
(1 Cor 9:27's opening *sed* cut) · *Cavete a fermento Pharisaeorum.* @0141C (*et sadducaeorum* cut)
· *Quis poterit salvus esse?* @0149C (*ergo* cut) · *Et audientes discipuli ceciderunt in faciem.*
@0144C (*suam* cut) · *Et erunt duo in carne.* @0148A (*una* cut, and the gloss supplies *una caro*
itself in its next clause) · *Venite, benedicti Patris mei: Esurivi enim et dedistis mihi
manducare.* @0149D (Mt 25:34a + 25:35a, spliced across a verse) · *Si vis perfectus esse. Omnia
haec.* @0149B (two clipped lemmata, Mt 19:21 and 19:20, set side by side).

**Transposition — a real difference in order, but the sense is identical, so no `[var:]`.**
*Quod signum facis, ut videamus et credamus tibi?* @0140D (Jo 6:30 *Quod ergo tu facis signum*),
with *manducarunt* @0140D for Jo 6:31's *manducaverunt* — a syncope, not a word · *quam
commutationem dabit homo,* @0143B (Mt 16:26 *aut quam dabit homo commutationem pro anima sua*) ·
*Afferte illum huc ad me.* @0145B (Mt 17:16 *Afferte huc illum ad me*) · *Qui adulteram tenet
stultus et impius est* @0148C (Pr 18:22 *qui autem tenet adulteram stultus est et impius* — Migne's
reference `(Prov. XVIII)` is **correct**, and the ⚠ fired on the order alone) · *Centies tantum nunc
in tempore hoc cum persecutionibus fratres et sorores, et in futuro vitam aeternam* @0149D–0150A
(Mc 10:30, compressed and reordered, *in futuro* for *in saeculo futuro*).

**Two spans that are not scripture citations at all, and therefore have no comparand.**
*Labiis me honorat. Magister, scimus quia verax es* @0138A is **two lemmata run into one italic
span** — Mt 15:8 and Mc 12:14, and each agrees with its own verse exactly. *Non enim judicabit Deus
bis in idipsum.* @0146B is an unattributed patristic tag from **Nah 1:9 in the LXX**
(οὐκ ἐκδικήσει δὶς ἐπὶ τὸ αὐτό); the Vulgate renders that verse *non consurget duplex tribulatio*,
which shares no words with it. ⛔ **I declined a `[var:]` here deliberately**: Migne prints no
reference, the tag is not offered as a Vulgate quotation, and a marker naming Nah 1:9 as "the
received text" would assert a relation the page does not make. Logged instead.

**And one that was our own file's corruption, not a divergence at all** — *Alii Joannem Baptistam,
alii autem **Etiam**,* @0142A. Both plates print `Eliam`; with the patch the span matches Mt 16:14
word for word. See the patch file; this is a **fifth cause** for a failed phrase search, alongside
§7's four.

#### c.3 · The spans that agree with the Clementine exactly — checked, and recorded as checked

**A list of findings alone cannot be told apart from a report by an agent that never looked**, so:
the remaining spans were collated verse by verse and agree. In `CAPUT XV`: *Tunc accesserunt*
(15:1) · *Non enim lavant* (15:2) · *Quare et vos* (15:3) · *Honora patrem* (15:4) · *Vos autem
dicitis* (15:5) · *Proderit* / *Vel tibi proderit* (15:5) · *Bene prophetavit* (15:7) · *Non quod
intrat* (15:11) · *Tunc accedentes* / *Scandalizati sunt* (15:12) · *Sinite* (15:14) · *Edissere*
(15:15) · *De corde* (15:19) · *Non lotis* (15:20) · *Lavamini, mundi estote* (Is 1:16) · *Et
egressus* (15:21) · *Clamavit* (15:22) · *Qui non respondit* (15:23) · *In viam gentium ne
abieritis* (Mt 10:5) · *Non sum missus* (15:24) · *Panem filiorum* (15:26) · *Etiam, Domine* /
*Nam et catelli* (15:27) · *Magna est fides* / *Et sanata est* (15:28) · *Non inveni tantam fidem in
Israel* (Mt 8:10) · *Et cum transisset* / *In montem* (15:29) · *Caecos* (15:30) · *Jesus autem* /
*Misereor turbae* (15:32) · *In deserto panes* (15:33) · *Et accipiens* / *Septem panes* (15:36) ·
*Et quod superfuit* / *Septem sportas* (15:37) · *Et dimissa turba* / *In fines* (15:39) · *Hortus
conclusus, fons signatus* (Ct 4:12). In `CAPUT XVI`: *Et accesserunt* / *Ut signum de coelo* (16:1)
· *Facto vespere* (16:2) · *Rutilat enim* (16:3) · *Signa* / *Signa autem* / *Non dabitur ei* (16:4)
· *Obliti sunt panes accipere* (16:5) · *A fermento* (16:6) · *Quid cogitatis* (**16:8** — see
below) · *In partes Caesareae Philippi* / *Homines esse* / *Filium hominis* (16:13) · *Alii Joannem
Baptistam* (16:14) · *Respondens Simon Petrus* / *Dei vivi* (16:16) · *Tu es* / *Petrus* / *Et
portae* (16:18) · *Vos estis sal terrae* (Mt 5:13) · *Accipite Spiritum sanctum* (Jo 20:22) · *Ut
nemini* / *Jesus Christus* (16:20) · *Exinde* (16:21) · *Absit* (16:22) · *Vade* (16:23) · *Si quis
vult* / *Abneget semetipsum* / *Tollat crucem* (16:24) · *Quid enim prodest* / *Aut quam* (16:26) ·
*Calicem salutaris accipiam…* (Ps 115:4) · *Quis infirmatur, et ego non infirmor* (2 Cor 11:29) ·
*Filius enim* (16:27) · *Sunt quidam* / *In regno* (16:28). In `CAPUT XVII`: *Et post dies* (17:1) ·
*Transfiguratus est* / *Resplenduit facies* / *Vestimenta autem* (17:2) · *Et ecce* (17:3) · *Visi
in majestate…* (Lc 9:31, **exact**) · *Adhuc eo loquente* / *Ecce nubes lucida* / *Et ecce vox* /
*Hic est Filius* / *Ipsum audite* (17:5) · *Surgite* (17:7) · *Levantes autem oculos* / *Nisi solum
Jesum* (17:8) · *Quod Eliam oporteat* (17:10) · *Tunc intellexerunt* (17:13) · *Et cum venisset* /
*Quia lunaticus est* (17:14) · *Et obtuli* (17:15) · *Respondens* (17:16) · *Et increpavit* / *Et
exiit ab eo daemonium* (17:17) · *Propter incredulitatem* / *Sicut granum sinapis* (17:19) · *Hoc
autem genus* / *Nisi per orationem* (17:20) · *Sine intermissione orate* (1 Thes 5:17) · *Filius
hominis* (17:21) · *Et contristati* (17:22) · *Et cum venissent Capharnaum* (17:23) · *Quid tibi
videtur* / *Reges terrae* (17:24) · *Ergo liberi* (17:25). In `CAPUT XVIII`: *Quis putas* / *In
regno coelorum* (18:1) · *Et advocans* / *Parvulum* ×2 (18:2) · *Quicunque ergo humiliaverit* /
*Sicut parvulus iste* (18:4) · *Qui autem scandalizaverit* / *Expedit* (18:6) · *Vae homini* (18:7)
· *Si autem manus tua* / *Bonum tibi est* (18:8) · *Videte ne contemnatis* / *Quia angeli eorum* /
*Semper vident* (18:10) · *Si fuerint alicui centum* / *Nonne relinquet* (18:12) · *seipsum
exinanivit formam servi accipiens* (Phil 2:7, see below) · *Si autem peccaverit in te* / *Corripe
eum* (18:15) · *Dic Ecclesiae* / *Sicut Ethnicus* (18:17) · *Amen dico* (18:18) · *Si duo* (18:19) ·
*Ideo assimilatum* (18:23) · *Et uxorem* (18:25) · *Misertus autem* / *Dimisit ei* (18:27) ·
*Invenit unum* (18:28) · *Serve nequam* (18:32). In `CAPUT XIX`: *Et accesserunt* (19:3) · *Et
feminam* (19:4) · *Adhaerebit uxori* (19:5) · *Homo non separet* (19:6) · *Quid ergo Moyses* (19:7)
· *Et aliam duxerit … Et qui dimissam* (19:9) · *Non expedit* (19:10) · *Sunt enim* / *Qui facti
sunt* / *Qui potest* (19:12) · *Sinite parvulos* / *Talium* (19:14) · *Et cum imposuisset* (19:15) ·
*Et ecce unus* (19:16) · *Quid me interrogas de bono?* / *Serva mandata* (19:17) · *Dives difficile*
(19:23) · *Quam divitem* (19:24) · *Mirabantur* (19:25) · *Deum* (19:26) · *In regeneratione* /
*Filius hominis* / *Super sedes duodecim* (19:28) · *Centuplum* (19:29) · *Multi autem erunt primi*
(19:30). The twenty `*usque ad*` spans are the abridgment formula and carry no verse.

⚑ **`Quid cogitatis.` @0141B is launch brief §3's gospel trap, and it resolves innocently.** The
brief's own line prints `✓ Lc 5:22, Mc 8:17, Mt 9:4, …` — three parallel verses and an ellipsis, and
the lemma stands under `CAPUT XVI` addressing `VERS. 8`. **I read the verse rather than the
reference list**: Mt 16:8 is *Quid cogitatis intra vos modicae fidei*, so the words are Matthew's
own and are hidden inside the `…`. A reference list is not a parallel — and it is not a refutation
either.

---

### (d) THIS RANGE'S CRUCES, BY COLUMN

**@0138A — an unexpressed subject that two readings both construe, and I did not choose silently.**
Migne prints *quod Deo oblaturus eram in tuos consumo cibos, tibique prodest, o pater, ut **timeat**
consecrata comedere.* The father is addressed in the second person (*tuos*, *tibi*, *o pater*) and
then *timeat* is third singular. Two readings construe: (a) the father, referred to in the third
person after his own vocative — a shift Migne prints; (b) an impersonal "one". I rendered **"that he
should be afraid to eat what has been consecrated"**, which keeps the third person the Latin prints
and commits to neither antecedent by name. Nothing in the gloss decides it.

**@0138A — a verbless sentence, left verbless.** *In spiritu simulationem Judaeorum, quod in dolo
repugnarent Evangelio.* has no finite verb; the accusative *simulationem* hangs. Rendered as it
stands ("In the spirit, the dissembling of the Jews, that in guile they would fight against the
Gospel"). No verb supplied — this is §9's discipline, and a supplied *praevidit* would have been
invisible as ours.

**@0139A — a rough splice tail, rendered rough.** *et hoc de signo petitionem hujus differendo* does
not resolve cleanly: *de signo* attaches to nothing certain. Rendered **"and this by deferring, in
the matter of the sign, the petition of this woman"**. The abridgment removes words, it does not
suspend grammar, so the oddity is Migne's and is left visible.

**@0139B — a number shift inside one sentence, preserved.** *Magna est fides gentium, quae in auditu
auris **obediunt**: et in Deo salutem sibi suisque **impetrat**.* Plural relative on *gentes*, then
a singular verb for the woman. Rendered as printed ("who at the hearing of the ear obey: and in God
she obtains salvation for herself and for her own"). Migne's, not tidied.

**@0139D — a negation on a verb with an unexpressed second subject.** *et vicini quinque sensuum et
eorum non recordatur Dominus, sed discipuli in vespera jam inclinato sole.* The `non` sits on
*recordatur*, whose subject is *Dominus*; the `sed` clause supplies a second subject (*discipuli*)
with no verb of its own. Rendered **"and the Lord does not remember them, but the disciples do, at
evening, the sun being now declined"** — the negative stays on the Lord's remembering, where the
`sed` correlative puts it, and the elided verb is carried by English "do". Checked under test 2a
because a negative on a verb beside a correlative is exactly that test's trigger population.

**@0140A — an unexpressed generic subject.** *ad quod tendens reficitur in via* — no subject.
Rendered "toward which, as he presses on, a man is refreshed on the way"; the antecedent is the
penitent of the preceding sentence, not the Lord, because *reficitur* answers *reficiuntur* of the
crowd fed in the desert.

**@0142A — the sentence the TEI patch repairs.** Our Latin prints *alii autem Etiam*, which is a
non-word inside a scripture lemma; both plates print *Eliam*. The English renders the plate. Full
argument in `data/briefs/9002-PENDING-TEI-PATCHES-0027.md` §1, including why this matters beyond
one word: it is a **fifth cause** for a lemma failing the Clementine phrase search, and the only one
of the five that reads as evidence against *Migne*.

**@0143D — `enimus`, and the corroboration that proves nothing.** Our Latin prints the non-word
*enimus*; the correct *erimus* stands six words later in the same sentence, which is the shape
CLAUDE.md names as decisive-feeling and worthless. Both plates read *erimus* at the first site too:
ours, patched, English follows the plate.

**@0144D — the sentence with no question mark, and I did not supply one.** *Si jam venisti in
gloria, quomodo praecursor tuus non apparet, maxime quia et Eliam viderant recessisse.* This is
direct speech that turns into narration mid-sentence (*venisti*, *tuus* → *viderant*), and it reads
as a question. **Migne prints a full stop, on both witnesses.** Pattern 8: never supply. Rendered
with a comma and a full stop, and the person-shift left standing.

**@0146B — ⭐ THE ONE `[cj:]`, AND WHY THE RIVAL LOST.** Migne prints, on **both** witnesses:

> *Innocens erit sicut iste parvulus, qui non perseverat in ira: **Jesus** non meminit: visam
> mulierem non cupit.*

Three members describing the innocence of a child: he does not persist in anger; *Jesus* does not
remember; having seen a woman he does not desire. **The middle member's subject is wrong**, and the
third member then attaches its predicate to Jesus as well. *Jesus* is a real word occupying a real
slot, so Pattern 12 has nothing to wrap and Pattern 7 renders it — and the English then asserts
something the author is plainly not arguing, which is Pattern 18's bar exactly.

Two conjectures were weighed. **The one the marker takes is *laesus***: "when hurt, he does not
remember", one word for one word in the same slot, supplying the participial subject the third
member's *visam mulierem non cupit* needs, and differing from *Jesus* by the shape of two letters.
**The rival, *injuriae* ("he does not remember an injury"), lost** on two counts: it is a noun in
the wrong case to replace a nominative subject, and it leaves the third member without the
participial subject the parallel requires. The marker reads `Jesus [cj: *Jesus*; read *laesus*,
"when hurt"] does not remember`, additive per Pattern 18 — Migne's word keeps its English and the
conjecture stands beside it, so a reader meets both.

⚑ **This is not a `[sic:]` and could not be one.** Both copies print *Jesus* cleanly at 300 dpi and
at native IIIF resolution; the type is not broken, the word is not a non-word, and there is nothing
to accuse the compositor of.

**@0146D — `Nonne relinquet` and `Gaudebit`, one class, two verdicts, and the reason.** Both are
futures where Mt 18:12–13 has presents (*relinquit*, *gaudet*), both confirmed on both plates, and
they stand nine words apart. I fired on **`Gaudebit`** and declined **`relinquet`**, and the split
is the §2 bar, not a hunch: *gaudet*→*Gaudebit* inserts two letters and cannot be a broken sort,
and the gloss's own next clause reverts to *gaudet*, so the lemma has a witness against itself.
*relinquit*→*relinquet* is **one letter** and nothing in the gloss leans on it, so it fails both
limbs. ⚑ **The honest statement of the rival I rejected:** their agreeing direction is real evidence
that Migne's copy-text futurizes here rather than that a sort broke twice, and on that reading
*relinquet* would fire too. I declined it because that argument is an inference from one neighbour,
and §2's bar is written precisely to keep a one-letter form from riding into the apparatus on an
argument. It is logged here so the call can be reversed by someone who disagrees.

**@0146B–C — two abridgment tails that read badly, and are left reading badly.** *usque ad nos
oportet consulere expedit, etc.* and *usque ad damnantur humanam sententiam divina sententia
corroborari* are both resumption points where the splice has cut mid-construction. Rendered as
closely as the printed words allow ("as far as we ought to take counsel, it is expedient, etc."; "as
far as they are condemned, that a human sentence is confirmed by the divine sentence"). ⚑ The
standing brief's warning applies and I obeyed it: **a tail that reads oddly is not evidence the
abridgment made it odd** — I parsed each as ordinary prose first and found it genuinely broken, not
merely elliptical.

**@0147C — the `non solum … sed etiam` correlative, and where its negative belongs.** *Eum non solum
populum, sed etiam praelatos et subditos … tradidit exteris nationibus.* Test 2a's trigger fires
here (a negative beside a correlative), so the host is proved from the structure and not from what
reads well: the `non` attaches to **`solum`**, not to `tradidit`, and the `sed etiam` limb names the
second member. Rendered "Him, not only the people, but also the prelates and the subjects … he
delivered over to foreign nations". The same correlative recurs at @0147C (*non solum captivitatem
Judaicam absolvit, sed etiam … promisit*) and @0147D (*non modo persuasionibus, sed etiam
tormentis*), and both are attached the same way.

**@0147D — an unexpressed subject named.** *fatigabat* and *exspectabat* have no expressed subject.
The antecedent is **the wicked servant of the parable**, whom the gloss identifies as the Jewish
people and addresses in the second person at VERS. 32 (*spernis gentes*); the object is *Gentilem
populum*. Rendered with "he", and the identification recorded here rather than assumed.

**@0148D — a compressed sentence rendered compressed.** *Nam quales sunt modo, meum quidem est, quod
honorate: quales post futuri sunt, ipsorum est, quod miseremini.* Rendered "For as to what sort they
now are, that indeed is mine, in that you honour them: as to what sort they are afterwards to be,
that is their own, in that you have pity on them." This is the passage that carries chunk 0031's
ratio to 1.61 — the expansion is the unpacking of a doubly elliptical Latin correlative, not
padding, and it is named here so the verifier's warning has an answer.

**@0150A — Migne's reference is wrong, and it rides as printed.** *Multi autem erunt primi*
[n: (Luc. XV)]. The words are **Mt 19:30**, repeated at Mc 10:31; the Lucan parallel is **Lc 13:30**,
not Luke XV, which is the prodigal son. Both witnesses print `(Luc. XV)`. Passed through verbatim
under the `refDisplay` rule — the reference is Migne's editorial act and correcting it would erase
evidence about his citing practice. Logged so a reader is not left thinking we missed it.

**Sections read clean.** Cols 0137C–0138D, 0139A–0140C, 0141A–0141C, 0144A–0144C, 0145A–0145D and
0148A–0148C were read word by word against both plates and returned nothing: no defect, no
divergence, no apparatus at the foot. **A checked zero is a result**, and six clean bands out of
fourteen columns is what this range actually looks like.

---

### (e) THE DECLINED-ODDITY LIST — every suspect word I did NOT mark, in one place

On John and Luke this list produced nearly every correction those works got, so it is exhaustive
rather than selective.

| col | reading | why declined |
|---|---|---|
| 0137D | `VERS. 3 —` without the point (archive) | archive ink; Gallica prints `VERS. 3. —`, our TEI right. **And a verse address may not be altered on one witness in any case.** |
| 0138A | *tibique prodest, o pater, ut timeat* | real words, both plates; a person shift, not a defect. See §(d). |
| 0138A | *In spiritu simulationem Judaeorum* — no finite verb | Migne's, both plates. Verbless sentences are not a Pattern 7 defect; nothing supplied. |
| 0138B | *idolothitum* | a real transliterated technical term, not a non-word. Rendered "meat offered to idols". |
| 0139B | `Israel` (ours) against Gallica's `Israël` | a diacritic. Not a divergence in either direction. |
| 0139B | *quae … obediunt* with singular *impetrat* | a number shift in one sentence; both plates; rendered as printed. |
| 0140B | `palman` (archive) | archive ink; Gallica `palmam`. |
| 0140B | `utriu sque`, `pr acceptorum` (archive) | archive letterspacing; Gallica sets both whole. ⚑ Split type is the shape §10 quarantines, and it was one HTTP request from being quarantined here. |
| 0140C | `interpratur` (archive) | archive ink; Gallica `interpretatur`. |
| 0140D | *manducarunt* for *manducaverunt* | a syncopated perfect, a real and attested form. Pattern 9. |
| 0141C | `Qnid` (archive) | archive ink; Gallica `Quid`. |
| 0142B | `quodcumque` ×2 (archive) against `quodcunque` (Gallica + ours) | two printings, both clean at this word; ·*cunque*/·*cumque* is orthography either way. **No `[sic:]`, no patch** — the @0073A `Bethehem`/`Bethlehem` class. |
| 0142C | `Jesus-Christus` (archive) | a compound hyphen at a line break in that printing; Gallica sets it open. Not a divergence. |
| 0143C | `debet esset` (archive) | archive ink; Gallica `debet esse`. |
| 0144A | `Spiritus sanctis` (archive) | archive ink; Gallica `Spiritus sancti`. |
| 0144D | `recessisset` (archive) | archive ink; Gallica `recessisse`. |
| 0145C | `VERS. 24.` without the em-dash (archive) | archive ink; Gallica prints it. |
| 0146B | *Non enim judicabit Deus bis in idipsum* | not a Vulgate citation and carries no reference; LXX Nah 1:9. A `[var:]` would assert a relation Migne does not make. |
| 0146C | `condemnatis` (archive) | archive ink; Gallica `contemnatis`, agreeing with Mt 18:10 and with our TEI. |
| 0146C | `(HIER)` without the point (archive) | archive ink. |
| 0146D | *Nonne relinquet* (future for *relinquit*) | **both plates, so Migne's** — but one letter, and the gloss does not lean on it: fails §2's bar for a single-word `[var:]`. The rival argument is stated in §(d) and rejected there. |
| 0146D | *seipsum* for Phil 2:7's *semetipsum* | a form of the same pronoun meaning the same thing; one limb of §2's bar fails and the other is not reached. |
| 0147A | `vel ab abjiciendum` (archive) | archive ink; Gallica `vel ad`. |
| 0148B | `Disciplicet` (archive) | archive ink; Gallica sets `Dis-|plicet`. ⚑ **A non-word, and it is the archive's** — launch brief §8's correction, reproduced. |
| 0148D | `etiam hic qui` (archive) | archive ink; Gallica `etiam hi qui`. |
| 0149A | `Contra` capitalised (archive) | archive ink; Gallica lowercase, with our TEI. |
| 0149B | `Dicit et adolescens` (archive) | archive ink; Gallica `Dicit ei`, which is what the `[var:]` at c.1 rests on. |
| 0149C | `In generatione` (archive) | archive ink; Gallica `In regeneratione`. ⚑ **The most dangerous refutation in the range**: read on one witness this is not a broken word at all but a *scripture divergence* against Mt 19:28, and it would have produced a false `[var:]` in a gloss whose next words are *Duae sunt regenerationes*. |
| 0150A | `[n: (Luc. XV)]` on Mt 19:30's words | Migne's own reference, both plates. `refDisplay` rule: passed through verbatim, logged, never corrected. |
| — | *Magedan*, *Dalmanuta*, *Gerasam*, *Chananitidis*, *Barjona* | proper-name orthography; nothing in any gloss turns on a letter. Not divergences. |

**Nothing else in cols 0137C–0150A struck me as suspiciously tidy** in the sense of standing-brief
§4 — i.e. a form too clean for a rough passage, which is the only handle we have on the
digitization's *silent-correction* direction. The four sites where our file departs from the plate
all depart in the rough direction (`Etiam`, `enimus`, `eum`, a supplied comma), and I record the
negative on the other direction deliberately, because a checked negative is worth having when three
of the four known normalizations elsewhere came back positive.


---

# §8 · STINT 0032–0037 (cols 0150B–0166D)

*Preserved from `cruces-0032.md`, unedited; headings demoted one level. Companion files: `data/briefs/9002-PLATE-READS-0032.json`, `data/briefs/9002-PENDING-TEI-PATCHES-0032.md`, `data/briefs/9002-lemmata-0032.txt`.*

## 9002 — cruces, stint 0032–0037 (cols 0150B–0166D)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0032–0037: `CAPUT XX.`
through `CAPUT XXV.`, 6,703 Latin words — the labourers in the vineyard, the entry into Jerusalem,
the marriage feast, the woes on the Pharisees, the eschatological discourse and the last judgment.

Companion files from this stint: `data/briefs/9002-PLATE-READS-0032.json` (every page opened, both
witnesses) and `data/briefs/9002-PENDING-TEI-PATCHES-0032.md` (two sites where our Latin has
departed from Migne).

---

### (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Markers.** **One `[sic:]`**, **seven `[var:]`**, zero `[cj:]`, zero `[d:]`, zero `[ed:]`,
zero `[cn:]`/`[nt:]`.

**2. When a `[var:]` fires.** I inherited the 0000–0005 and 0016–0021 bar and did not loosen it:
Migne's quoted scripture takes a `[var:]` where his words **assert something different** from the
received text — a *substitution*. It does **not** fire where he merely **shortens** a verse, where
he **splices or conflates** two verses, where the difference is **word order**, where it is
**orthographic** (*Nunquam*/*Numquam*, *Quicunque*/*Quicumque*, *Quandiu*/*Quamdiu*,
*Nummulariis*/*numulariis*, *Circumitis*/*circuitis*), or where it is the **form of a
transliterated Hebrew word or proper name** (*Osanna*, *saba* for *Sabaoth*).

⚑ **One boundary I drew that is new, and it is the load-bearing one in this file.** Two of my
spans are the *same* substitution — a connective swapped for the verse's own (`autem` for `enim`
at @0156A, `autem` for `et` at @0165B) — and **I fired one and declined the other.** The line I
drew is **where the lemma starts**: at @0156A Migne's lemma *begins the verse itself* (Mt 22:14
opens *Multi enim sunt vocati*), so nothing but a different text explains the connective; at
@0165B the lemma is **clipped out of the middle** of Mt 25:19 (*venit dominus servorum illorum,
et posuit rationem cum eis*), and a postpositive *autem* sits exactly where a clip needs a
connective and *et* cannot stand. I checked Migne's own practice in this range against that
argument before I used it: he keeps the verse's own connective in four other clipped lemmata
(@0155D *Et missis,* · @0165D *Et date ei,* · @0166C *Non dedistis,* · @0155A *Et qui ceciderit,*),
which is the fact that **weakens** my decline, and I record it here rather than only the fact that
helps it. Full ruling at §(d) 6.

**3. When a single-word `[var:]` fires.** Launch brief §2 requires a witness of its own. **Three of
my seven are single words** (@0155D *videret*, @0161D *posset*, @0162C *stabit*). All three meet
the **second** limb outright — **I read all three on both witnesses**, so our transcription is
eliminated as the other owner — and all three meet the **first** as well, though not equally:
@0155D and @0161D are re-argued by the gloss in its own next words, while @0162C's case is the
weaker one, that the verse is adduced by *unde dicitur* to prove a **future** state and the tense
is what makes it prove it. Ownership is settled by the plate, never by the argument.

**4. Every claim about the type rests on two witnesses.** I read all **nine** pages of my range on
the archive PDF **and** all **nine** leaves on Gallica, corner numbers first on each. **This changed
the answer about thirty-four times** — see §(e). Nothing in this file rests on one copy, and in
particular **a verse number I would have altered on the archive alone is refuted at Gallica**
(§(d) 8), and a lemma that reads perfectly on the archive is a non-word on Gallica (§(d) 3).

**5. Where the plate and our twin disagree, the English renders the plate** and the site is filed as
a pending TEI patch. Two sites, both Corpus Corporum's, neither Migne's.

**6. The vocabulary axes bind.** `turba`/`turbae` → **crowd/crowds** (0152C ×2, 0156B, 0160B);
**`multitudo` → multitude** (0157A, *Ut multitudine vincerent* → "that by their multitude they
might overcome"), and the two stand three columns apart, so the axis is doing real work here.
`daemonibus` → **demons** (0166D); `diabolus`/`diaboli` → **devil** (0152C, 0159C, 0160A).
`gentes`/`gentibus`/`gentium` → **Gentiles** in the *Judaei*/*gentes* opposition (0150C, 0150D,
0151C ×2, 0152A ×2, 0152B, 0153D, 0154D, 0155A, 0158B) — Matthew is that gospel and this range is
thick with it. Singular `gens` of the Jewish people → **nation** (0156D *in gente eorum*, 0160C
*excidio gentis*, 0161B–C *suae gentis* ×2), and the one plainly generic plural, *de omni gente
collectos* at 0161C, → **nation** as well. `mysterium`/`mysteria` → **mystery/mysteries**
(0153B, 0158A, 0165D); **`sacramentum` → sacrament** (0152A *sacramentum geminae dilectionis*,
0155D *omne sacramentum incarnationis*), 1:1 with the above.
⚑ **`natio`, `ethnicus`, `gentilis` and `gentilitas` do not occur in this range.** The `natio`
grep returns nine hits and **all nine are the documented false positives** — *destinatione*,
*praedestinati*, *generatione(m)* ×4, *damnatur*, *indignati*, *contaminatione*. Recorded because
the brief asks for the instrument check to be **stated**, not merely run.

**7. The commentator's own voice is not archaised.** `dicit`/`ait`/`dixit` → *says*/*said*
throughout; `-eth` and `-est` forms appear **only inside quoted scripture** (*sojourneth*,
*cometh*, *standeth*, *believest*, *knewest*, *wouldst*). `thou` is singular and `you` plural
throughout — the switch is visible inside a single gloss at 0152B (*Tibi.* → "*To thee.* If thou
believest") and at 0160A, where Jerusalem is addressed *tu* ("I would, and thou wouldst not") four
words after the plural *Rei estis sanguinis* ("You are guilty of blood").

**8. Punctuation is checked band by band, not by total** (brief §3's third test). All 71 column
bands in my six chunks now match their Latin twin **exactly** on `?`, `:` and `;`. Every band that
differed was repaired against the Latin: **six carried a *deleted* mark**, restored (0150C ×2,
0156C ×2, 0157D, 0159D ×2, 0162B, 0166C), and the rest carried a **supplied** one, softened to the
comma or full stop the Latin actually prints. Question marks: 9 in the Latin, 9 in the English,
band for band, and the three at 0160C are Pattern 8b's — §(d) 12.

---

### (b) SPAN COUNT — 268 against 268, paragraph-bounded

`data/briefs/9002-lemmata-0032.txt` declares **268 spans** for chunks 0032–0037, of which 0 are
open-ended.

Counting my own Latin **paragraph by paragraph** (per the file's own warning that a bare total can
agree falsely when two errors cancel):

| chunk | italic `*…*` | guillemet `« … »` | paragraphs with an odd asterisk count |
|---|---|---|---|
| 0032 | 23 | 0 | 0 |
| 0033 | 64 | 0 | 0 |
| 0034 | 41 | 0 | 0 |
| 0035 | 37 | 0 | 0 |
| 0036 | 56 | 0 | 0 |
| 0037 | 47 | 0 | 0 |
| **total** | **268** | **0** | **0** |

**268 = 268, exact**, and the whole-file total and the paragraph-bounded total agree at every
chunk. Not one paragraph in my range carries an odd number of asterisks, and there is not a single
guillemet in 6,703 words, so both failure modes that make a bare total lie are excluded. Matthew
is an **italic-lemma** book throughout.

**The 268 split: 147 verse lemmata · 2 `*usque ad*` formula spans · 119 second lemmata, inline
scripture, glossed words and name-etymologies.**

⚑ **On the dashless-address bug the coordinator warned of: my range has NONE.** I counted the
verse addresses in my own Latin rather than from the brief's marks, and **all 147 are printed
`VERS. n.-- `, with the dash**; a regex over the chunk bodies that accepts `VERS. n.` with *or*
without the dash returns 147 and 147. (A naïve `grep -c 'VERS\.'` returns 153 because it also
catches the six `incipit:` lines in the frontmatter — worth saying, because that is the shape of
error the count exists to catch.) So the coordinator's hand-check of the eight work-wide spans is
confirmed from this end: none of the remaining dashless addresses falls in cols 0150–0166, and the
⚑ ownership test did not silently skip anything here.

---

### (c) THE LEMMA DIVERGENCE LIST — all 268 spans collated against `sources/vulgate/clementine-flat.txt`

Migne's citation sigla pass through verbatim under convention 4 and are **not** treated as
divergences; a wrong siglum is his attribution practice. **Five in my range are demonstrably wrong
and are recorded, not corrected**: `(cap. IV)` at 0154C on what is **Is 5:7**; `(Luc. XX)` at 0155A
on a quotation his own sentence attributes to **Marcus** and which is **Mc 12:8**; `(Joan. II)` at
0154D on what is **Jo 11:48**; `(II Col. II)` at 0162C on what is **Col 2:3**; `(I Thess. III)` at
0164B on what is **1 Thess 5:2**. All five were read at the plate and all five are Migne's.

#### C1. THE SEVEN THAT FIRED

| col | Migne prints | received text | why it fired |
|---|---|---|---|
| **0152A** | *Omnes enim peccaverunt et egent **gratia** Dei* `[n: (Rom. III)]` | Rom 3:23 *omnes enim peccaverunt, et egent **gloria** Dei* | **Grace for glory** — a different noun in a proof-text Migne cites by chapter, and the one word the sentence turns on. The gloss is arguing that the Gentile colt "was itself also ensnared in the bonds of sins", so *gratia* reads as though Paul had written what the argument needs. The strongest of my seven: multi-word quoted clause, cited siglum, one substituted content word. |
| **0155B** | *Ite in ignem aeternum.* | Mt 25:41 ***Discedite a me maledicti** in ignem aeternum* | The clause is put in the Lord's mouth by *cum dicit*, and the verb he is made to say is not the verb of the verse. *Ite* is not an abbreviation of *Discedite a me maledicti*; it is a word the verse does not contain, supplied to govern the surviving phrase. The English on the page changes from "Depart from me, ye cursed" to "Go". |
| **0155D** | VERS. 11.-- *Ut **videret** discumbentes.* | Mt 22:11 *Intravit autem rex ut **viderent** discumbentes* | Singular for plural: **who does the seeing** changes, from the guests to the king. The gloss argues from it in the next four words — *videri faciat judicandorum merita, et discernat*, both singular, both of the king. Single word, so §2's bar applies and is met on **both** limbs: the gloss leans on it, and I read it on both witnesses. ⚠ **The call turns on one letter, so `sources/vulgate/README.md`'s caution applies and is stated: our Clementine copy is not authoritative to that precision.** The marker names the reading, not a verdict. |
| **0156A** | VERS. 14.-- *Multi **autem** sunt vocati, pauci vero electi.* | Mt 22:14 *Multi **enim** sunt vocati, pauci vero electi* | *autem* for *enim* at **the verse's own opening**, so no clipping explains it. This is the class launch-brief §7 adjudicated work-wide at @0093A (*Dico autem vobis* for *Dico enim vobis*) and confirmed on both plates there; I read it on both plates here. ⚑ The gloss re-quotes the lemma four lines later, still with *autem*, so the reading stands twice on the page. |
| **0159A** | *Stulte, qui fecit quod deforis est etiam id quod intus est, fecit* `[n: (Luc. XI)]` | Lc 11:40 ***Stulti nonne** qui fecit quod deforis est, etiam id quod **deintus** est fecit **?*** | Three changes at once and two of them are structural: **plural vocative to singular** (*Stulti* → *Stulte*) and **an interrogative made declarative** by the loss of *nonne*, so a rhetorical question put to many becomes a statement made to one. The third, *intus* for *deintus*, is not what the marker names. This is the only span in my range where the **sentence type** of the received text differs. |
| **0161D** | VERS. 24.-- *Si fieri **posset**.* | Mt 24:24 *ita ut in errorem inducantur **(si fieri potest)** etiam electi* | Imperfect subjunctive for present indicative. **The gloss argues from it explicitly**: *Id est, si aliquo modo fieri **posset**, ut Dei praefinitio mutaretur* — the whole exposition is that the clause is counterfactual, which is what the subjunctive gives and the indicative does not. Read on both witnesses. ⚑ Per the coordinator's instruction I checked the **surrounding clause** too: Migne's words are the verse's own parenthesis, and the next lemma he glosses is *Electi*, which is the verse's next word — so the tense is the only divergence, not a symptom of a different verse. |
| **0162C** | *Terra in aeternum **stabit**.* | Ecl 1:4 *terra autem in aeternum **stat*** | Future for present in a proof-text adduced by *unde dicitur* for a claim **about the future**: heaven and earth *innovabuntur*, the form laid aside and the substance remaining. The future is what makes the verse prove the point, and a reader who is told nothing takes Migne's Ecclesiastes for the Vulgate's. |

⚑ **The three that are single words all satisfy the harder limb**, and I say so because §2 warns
that confidence and truth are close to uncorrelated on ownership: in each case what settles
ownership is that **both copies print it**, not that the argument is good.

#### C2. THE NINE VERSE LEMMATA THAT ARE NOT VERBATIM IN THEIR OWN VERSE

I collated **all 147 verse lemmata** against their own Matthew chapter and verse — chapter taken
from the `CAPUT` head in my own Latin and verse from the `VERS.` address in my own Latin, never
from the brief's pre-scan. **138 agree word for word. Nine do not**, and here they all are.
Three fired (above); six are declined, each with its reason.

| col | verse | Migne | Clementine | verdict |
|---|---|---|---|---|
| 0155D | Mt 22:11 | *Ut videret discumbentes.* | *ut viderent* | **FIRED** (C1) |
| 0156A | Mt 22:14 | *Multi autem sunt vocati…* | *Multi enim* | **FIRED** (C1) |
| 0161D | Mt 24:24 | *Si fieri posset.* | *si fieri potest* | **FIRED** (C1) |
| 0157D | Mt 23:1 | *Tunc locutus est.* | *Tunc **Jesus** locutus est ad turbas* | **DECLINED — an artifact, not a divergence.** Launch-brief §7 rules it and the plate confirms the ruling: the lemma is **clipped**, and the phrase search fails only because one word stands between Migne's two halves. This is convention 3's ordinary fragment. See §(d) 1. |
| 0158B | Mt 23:15 | *Circumitis.* | *circuitis* | **DECLINED — orthographic.** Both are real forms of *circumeo*; the uncontracted *circum-* is the regular one. Nothing in the gloss turns on the syllable and the English is "You go about" either way. |
| 0158B | Mt 23:16 | *Quicunque.* | *Quicumque* | **DECLINED — orthographic**, the *-cunque*/*-cumque* pair the 0016–0021 stint declined across *Nunquid*/*Numquid*. |
| 0165B | Mt 25:19 | *Posuit autem.* | *et posuit* | **DECLINED, and argued rather than asserted** — the coordinator's third ⚑. Full ruling at §(d) 6. |
| 0165D | Mt 25:27 | *Nummulariis.* | *numulariis* | **DECLINED — orthographic**, a doubled *m*. Migne prints the same word with **one** *m* at 0153A (*Mensas numulariorum*) and at 0153A again (*posuerunt numularios*), both confirmed at the plate, so this is his own loose practice inside three columns, not a reading. |
| 0166C | Mt 25:40 | *De his fratribus.* | *uni **ex** his fratribus meis minimis* | **DECLINED.** *de* for *ex* is a preposition of identical force here, and the lemma reads as a **topic head** rather than a quotation — the gloss under it quotes not Mt 25:40 at all but **Mt 12:50** (*Fratres mei et mater sunt qui faciunt voluntatem Patris mei*), so Migne is naming the subject, not citing the words. Read on both plates. |

#### C3. THE ⚠ SPANS — every failed Clementine search in my range, with the CAUSE of each named

Launch-brief §7 asks that, before a ⚠ is called a divergence, I say **which of the five causes** I
have excluded: (i) a real divergence, (ii) an elided word, (iii) a word division, (iv) a defect in
our own Clementine copy, (v) a defect in our own TEI twin. Here is every one, with its cause.

| col | span | cause |
|---|---|---|
| 0150C | *Advena qui tecum moratur, ascendet super te: ille erit in caput, et tu eris in caudam.* | **Conflation + substitution.** Migne splices **Dt 28:43** (*Advena, qui tecum **versatur in terra**, ascendet super te*) to **Dt 28:44** (*Ipse erit in caput, et tu eris in caudam*), dropping *eritque sublimior : tu autem descendes, et eris inferior. Ipse foenerabit tibi…* between them, and prints *moratur* for *versatur in terra* and *ille* for *Ipse*. **Declined:** the splice is ellipsis, which the bar excludes; *moratur*/*versatur* are near-synonyms that render identically in English; *ille*/*Ipse* is "he" either way. **The gloss's own keywords — *caput* and *caudam* — agree with the Vulgate exactly**, which is the test that matters, since the whole gloss is built on them. Read on both plates. |
| 0151A | *Non enim personarum acceptio est apud Deum:* | **Word order.** Col 3:25 *non est personarum acceptio apud Deum*; Rom 2:11 *non enim est acceptio personarum apud Deum*. Migne's clause is those two words re-ordered and carries no siglum. Declined. |
| 0151D | *Non potest civitas abscondi super montem posita.--Ad montem Oliveti: tunc Jesus,* | **Two quotations inside one span**, which is why the phrase search fails: **Mt 5:14** (*supra* → Migne's *super*) followed by Migne's own em-rule and then **Mt 21:1** (*ad montem Oliveti : tunc Jesus*, verbatim). *super*/*supra* renders "upon a mountain" either way. Declined. |
| 0152D | *Benedictus. Osanna,* | **Elision + transliteration.** Mt 21:9 *benedictus, qui venit in nomine Domini : hosanna in altissimis*; Migne clips the relative clause and prints *Osanna* without the *h*. ⚑ **The gloss argues from the form** (*Osi*, *id est, salva* + *Anna*), so §2's first limb is met — and I still decline, because the divergence is the **spelling of a transliterated Hebrew acclamation**, which the 0000 stint's Policy 4 excludes, and because the English keeps *Osanna* as printed, so the reader meets the form the etymology needs. Declined. |
| 0152D | *In excelsis.* (×2) | **Substitution, declined.** Mt 21:9 reads *in **altissimis***; *in excelsis* is Luke's word (Lc 2:14) and the liturgy's. The English is "in the highest" for both, so nothing on the page changes; a reader loses nothing. Recorded because it is a real harmony/liturgy pull and the next reader should not have to re-derive it. |
| 0153C | *Infantium et lac.* | **Migne's own abbreviation.** Mt 21:16 *ex ore infantium et **lactentium***; the plate prints `lac.` with the stop, on both copies, and the gloss immediately expounds *Lactentes quasi lacte*. Rendered per convention 3 as the phrase it stands for, "Of infants and sucklings". Declined. |
| 0153D | *Nunquam ex te fructus.* | **Orthographic** (*Numquam*). Declined. |
| 0154B | *Habeo multa vobis dicere, sed non potestis portare modo;* | **Elision + word order.** Jo 16:12 *Adhuc **multa habeo** vobis dicere*. Declined. |
| 0154B | *Nolite sanctum dare canibus.* | **Word order.** Mt 7:6 *Nolite **dare sanctum** canibus*. Declined. |
| 0154C | *Vinea Domini saba,* etc. | **Transliteration + clipping — my closest call.** Is 5:7 reads *Vinea enim Domini **exercituum** domus Israel est*; Migne prints the Hebrew title untranslated and cut short by his own *etc.*, and mis-cites it *(cap. IV)*. **Declined** because *Sabaoth* and *exercituum* are the same word in two languages and assert the same thing, and because the class — a transliterated Hebrew form standing where the Vulgate translates — is the 0016 stint's *Gerazenorum* class. ⛔ **The argument that nearly carried it, so the next reader can weigh it:** the English word on the page really does change ("of Sabaoth" for "of hosts"), and that was the 0016 stint's own test for firing its three inflectional markers. What decided it against firing is that **nothing in the gloss touches the title at all** — the exposition runs entirely on *Fodit in ea torcular* — so there is no witness of the kind §2 requires. Read on both plates. |
| 0155D | *Non restitum veste nuptiali.* | **A PRESS VARIANT, not a divergence.** Mt 22:11 *non **vestitum** veste nuptiali*. Gallica f78 prints *restitum*; archive p.83 prints *vestitum*; **both clean at 400 dpi.** Full ruling at §(d) 3. No `[var:]`, no `[sic:]`, no patch. |
| 0156A | *Multi autem sunt vocati.* (second lemma) | **The same divergence as the verse lemma above**; the marker fires once, on the first occurrence, per Pattern 14's "a note beside the faithful rendering". |
| 0157B | *Non longe es a regno Dei.* | **Word order.** Mc 12:34 *Non **es longe** a regno Dei*. Declined. |
| 0157B | *Deus tuus unus est. Non assumes nomen Dei tui in vanum. Observa diem sabbati.* | **An abridged three-clause conflation of the first table**, which is why no single verse matches: Dt 6:4 (*Dominus Deus noster, Dominus unus est* → Migne's *Deus tuus unus est*), Ex 20:7 (*Non assumes nomen **Domini** Dei tui in vanum*, Migne dropping *Domini*), and Dt 5:12 (*Observa diem sabbati*, **verbatim**). Declined: shortening and conflation, both excluded by the bar. |
| 0157D | *Venite ad me qui laboratis et onerati estis.* | **Elision.** Mt 11:28 *Venite ad me **omnes** qui laboratis*. Declined. |
| 0159A | *Qui mundatis.* | **A single function word.** Mt 23:25 *quia mundatis*; Migne prints *Qui*. Read on both plates, so it is his. **Declined**: the gloss makes nothing of it, and Migne forms his lemma-heads as relatives elsewhere in the same series of woes where the Vulgate has one (*Qui decimatis* at 0158C, *Qui aedificatis* at 0159B, both verbatim), so *Qui mundatis* is his house form for the address rather than a reading. |
| 0159A | *Stulte, qui fecit…* | **FIRED** (C1). |
| 0161D | *Ecce hic Christus.* | **Elision of the copula.** Mt 24:23 *Ecce hic **est** Christus*. Read on both plates; the English is "Behold, here is Christ" either way. Declined. |
| 0161D | *Ecce in cubilibus, ecce in deserto.* | **Not in the Clementine at all, in any book** — this is Migne's own formation on the two halves of Mt 24:26 (*Ecce in deserto est* … *Ecce in penetralibus*), with *cubilibus* for *penetralibus*. Declined as a paraphrase rather than a quotation: it is introduced by *unde dicitur* in a list of what heresy says, not adduced as a proof-text, and the gloss quotes the real *in penetralibus* correctly nine lines later at 0162A. |
| 0161D | *hic aut illic.* | **A fragment of Mt 24:23** (*Ecce hic est Christus, **aut illic***). Agrees. |
| 0162C | *Terra in aeternum stabit.* | **FIRED** (C1). |
| 0162C | *In eo esse absconditos thesauros sapientiae et scientiae* `[n: (II Col. II)]` | **Recast into indirect speech**, which is why the search fails: Col 2:3 *in **quo sunt omnes** thesauri sapientiae et scientiae absconditi*; Migne turns it into an accusative-and-infinitive governed by *sicut Apostolus ait*. **Declined** — the recast is a grammatical consequence of the frame, and *omnes* is the only word lost. |
| 0162D | *Cum enim dixerint pax et securitas, tunc repentinus eis superveniet interitus* `[n: (I Thess. V)]` | ⛔ **CAUSE (iv): A DEFECT IN OUR OWN CLEMENTINE COPY.** `sources/vulgate/clementine-flat.txt` line 3391 prints 1 Thess 5:3 as *tunc **repentius** eis superveniet interitus* — **`repentius` is not a Latin word.** The true reading is *repentinus*, which is what **both plates** print, what our TEI twin prints, and what the sense requires. **Migne agrees with the Vulgate exactly here and the ⚠ is entirely the comparand's**; the only real difference is that Migne drops the punctuation before *Pax*. See §(d) 9 — this is a fifth entry for the README's list of defects in our Clementine copy, and it is the second time in this work that a ⚠ has been traced to that file rather than to Migne. |
| 0163B | *Simile est regnum coelorum decem virginibus.* | **Tense, declined.** Mt 25:1 *Tunc simile **erit** regnum caelorum decem virginibus*. Read on both plates. ⛔ **Why this declines where @0162C fires, since they are the same class:** here the clause is not adduced as a proof of anything. It is one of **three back-references in a row** naming where each of three parables begins (*quod est ubi dicit:* …), and the other two — *Vigilate ergo* and *Sicut enim homo peregre proficiscens* — are verbatim. A locator is not a proof-text, and nothing in the gloss rests on whether the kingdom *is* or *shall be* like the ten virgins. |
| 0164A | *servos vel ancillas* `[n: (Luc. XII)]` | **A single connective.** Lc 12:45 *percutere servos **et** ancillas*. Declined: *vel* for *et* asserts nothing different in a list of two, the gloss's point is the weakness of age and sex in both, and it is a clipped fragment where a connective is doing the work of the clip. |
| 0164B | *Dies Domini sicut fur in nocte veniet* `[n: (I Thess. III)]` | **Elision of the correlative.** 1 Thess 5:2 *quia dies Domini, sicut fur in nocte, **ita** veniet*. Declined. (The siglum is wrong — 5, not 3 — and passes through as printed.) |
| 0166B | *Sedebitis et vos super sedes duodecim judicantes tribus Israel.* | **Elision.** Mt 19:28 *judicantes **duodecim** tribus Israel*; Migne drops the second *duodecim* while keeping the first. Declined. |
| 0166B | *Esurivi et dedistis mihi manducare.* | **Elision.** Mt 25:35 *esurivi **enim**, et dedistis mihi manducare*. Declined. |
| 0166B | *Esurivi, et non dedistis mihi manducare,* | **Elision.** Mt 25:42 *esurivi **enim**, et non dedistis mihi manducare*. Declined. |
| 0166C | *De his fratribus.* | See C2. |
| 0166D | *Quandiu non fecistis uni,* | **Orthographic.** Mt 25:45 *Quamdiu*; the 0016–0021 stint declined this exact pair. Declined. |

#### C4. THE REST — every span not listed above, checked and found to agree

Every remaining span was read against the Clementine in place: **the 138 verse lemmata of C2's
"agree" column, and every second lemma, inline quotation, glossed word and name-etymology not
itemized in C3.** They match the received text word for word, allowing only *ae*/*e* and
*coe*/*cae* orthography, which is Corpus Corporum's expansion convention and not Migne's. Among the ones worth naming because a reader might expect trouble and
there is none: *Phlp 2:10* at 0152D (*ut in nomine Jesu omne genu flectatur coelestium, terrestrium
et infernorum*) is **exact**; *Ps 57:7* at 0154B (*Deus conteret dentes eorum in ore ipsorum*) is
**exact**; *Ps 2:8* at 0154D (*Postula a me, et dabo tibi gentes haereditatem tuam*) is **exact**;
*Jo 11:48* at 0154D and *Jo 19:15* at 0152B are **exact**; *Mc 12:8* at 0155A is **exact** despite
being cited as Luke; *Rom 8:18* at 0166C (*Non sunt condignae passiones hujus temporis ad futuram
gloriam*) is **exact**; *Lc 17:34* at 0163A (*in illa nocte*, *Duo in lecto*, *Unus assumetur*) is
**exact** three times; *Mc 13:27* at 0162B (*A summo terrae usque ad summum coeli*) is **exact**.

**Recording the negatives is the point of this section**: a list of findings alone cannot be told
apart from a report by an agent that never looked.

#### C5. THE `usque ad` AUDIT — 2 formula spans, 5 ordinary occurrences, and the `etc.` splice test applied to each

The raw grep returns **eight** hits in my range and **one is a false positive** (*necatusque* at
0159D, and *cujusque* at 0164D is a ninth that the `\busque` form catches). The seven real ones:

| col | text | formula? | rendering |
|---|---|---|---|
| 0150B | *Denarius habet imaginem regis,* **etc.,** *usque ad* vel in ultimis resipiscite | **YES** — follows `etc.` and names where the quotation resumes | **as far as** |
| 0150D | *Ecce ascendimus,* etc. … Hoc saepe eis dixerat, **etc.,** *usque ad* resurrecturum non dubitent | **YES** | **as far as** |
| 0150A | quae ab Abel **usque ad** ultimum electum | no — ordinary extent, no `etc.` anywhere near it | "from Abel **to** the last of the elect" |
| 0150A | a mundi hujus initio **usque ad** finem | no — ordinary extent | "from the beginning of this world **to** its end" |
| 0159C | *Usque ad sanguinem.* | no — **the verse's own words** (Mt 23:35 *a sanguine Abel justi usque ad sanguinem Zachariae*), and a `VERS. 35` lemma at that | "**Even to** the blood." |
| 0160A | a primo parricida **usque ad** ultimum perditionis filium | no — ordinary extent | "from the first parricide **to** the last son of perdition" |
| 0162A–B | *A summo terrae **usque ad** summum coeli,* … ab extremis terrae finibus per directum **usque ad** ultimos terminos | no ×2 — the first is **Mc 13:27's own words** inside the lemma, the second is the gloss expounding it | "**to** the utmost part of heaven"; "straight on **to** its uttermost limits" |

⚑ **The `etc.` splice test separates them cleanly here and italic membership would not have**: both
formula instances sit inside an italic span *and so does the Mt 23:35 lemma at 0159C*, which is not
the formula at all. That is 8967 col 0953C's exact trap, met again. Per the brief's instruction the
five exceptions are named here **with the Latin that forced them**, so that a silent departure and
a reasoned one can be told apart.

---

### (d) THIS RANGE'S CRUCES, BY COLUMN

#### 1. @0157D — `VERS. 1.-- *Tunc locutus est.*`, the first ⚑, adjudicated as §7 rules it

Launch-brief §7 rules this **an artifact of the instrument, not a divergence**, and instructs that
no `[var:]` fire. I confirm the ruling from my own side and record what I checked, because a flag
declined without a reason is indistinguishable from a flag missed.

Mt 23:1 reads *Tunc **Jesus** locutus est ad turbas, et ad discipulos suos*. Migne's lemma is
*Tunc locutus est* — his two halves are contiguous in the Clementine **except for one word
standing between them**, which is exactly what a phrase search cannot see. The ⚑'s only other
match, **Jos 10:12**, is *Tunc locutus est Josue Domino*: three common words in a different book,
not a harmony parallel, and — following §7's own warning that *a reference list is not a parallel*
— I read it rather than trusting the reference. It has nothing to do with Matthew 23.

Read at **archive p.84 and Gallica f79**, corner numbers 157/158 confirmed on both: both print
`VERS. 1. — *Tunc locutus est.*` with the dash, agreeing with our twin. Rendered per convention 3
as the fragment it is: **"Then he spoke."** No marker.

#### 2. @0158D — `in est` for *id est*: the one `[sic:]` in 6,703 words, and why it is fireable

    Colunt ergo Judaei culicem, in est, minima observant

**Both witnesses print `in est`** — archive p.84 and Gallica f79, corner numbers first on both, at
normal letter spacing with clean commas either side. Our twin carries it verbatim. So the two
owners a one-word defect can have are reduced to one: **it is Migne's**, and the `[sic:]` is
fireable without the patch-first problem that made the class unfireable for the 0000 and 0016
stints.

It passes Pattern 12's test on the first branch: **`in est` has no grammatical slot.** It stands
where *id est* must stand, between an accusative object and its gloss, and no English can carry
"in is". Per Pattern 7's **2026-09-05 amendment** the English renders the sense and Migne's type
sits inside the marker:

> The Jews therefore strain the gnat, **that is [sic: *in est*]**, they observe the least things…

⚑ **Test 1 run on it** (strip every marker and read what is left): *"The Jews therefore strain the
gnat, , they observe the least things"* — the sentence keeps its subject, its verb and **its
object**, which is 7a⁗'s missing fourth question. Nothing is hiding inside the bracket.

#### 3. @0155D — `restitum` / `vestitum`: THE TWO COPIES DIVERGE, AND THE ARCHIVE IS THE GOOD ONE

| | |
|---|---|
| **Gallica f78** | *Non **restitum** veste nuptiali.* |
| **archive p.83** | *Non **vestitum** veste nuptiali.* |
| **our twin** | *Non **restitum** veste nuptiali.* |
| **Mt 22:11** | *vidit ibi hominem non **vestitum** veste nuptiali* |

Read at **400 dpi on both copies**, on the letter itself: Gallica's is an unambiguous italic `r`,
with the shoulder and the dot terminal of the face's `r` and nothing of the `v` that stands four
letters later in *veste*; the archive's is an unambiguous italic `v`, identical to the `v` of its
own *veste*. Neither letter is broken, over-inked or ambiguous. Corner numbers 155/156 confirmed
on both pages before either reading.

**This is launch-brief §6's press variant** — `Bethehem`/`Bethlehem` at 0073A, 8950's
`Mititte`/`Mittite` — and it takes:

- **no `[sic:]`**, because a `[sic:]` needs two witnesses and there is one;
- **no TEI patch**, because our twin faithfully follows one of the two printings and I have no
  ground for preferring the other;
- **no `[var:]`**, because on the archive's printing there is no divergence from Mt 22:11 at all.

**The English renders "Not clothed with a wedding garment"** — the sense the archive's *vestitum*
and the verse both give — and this crux is the whole of the disclosure. ⛔ I record that this is a
rendering **against** our twin's word, made deliberately and not silently: our twin prints a
non-word, and Pattern 7's untranslated-carry is available only with a `[sic:]`, which I may not
fire.

⚑ **What this site adds to the work's structural finding, and it cuts against the trend.** Five
stints have now measured the archive as much the worse witness. Here it is the **better** one, and
the direction matters: read on the archive alone, this lemma would have looked **completely clean**
and nothing would have been raised at all. **A single-witness read can produce a false clearance as
easily as a false finding**, and a clearance leaves no trace for anyone to check.

#### 4. @0153C — a stop our twin supplies, and it changes what the sentence says

See `9002-PENDING-TEI-PATCHES-0032.md` §2. Recorded here because it is the crux, not merely the
patch: with the supplied stop the English reads *"Witnesses of the miracles. They are called
Christ's infants…"*; against the plate it reads *"Witnesses of the miracles of Christ, they are
called infants…"*. **Both construe**, which is why nothing downstream could have caught it, and
only the plate decides. It was found while reading that line for `oriminis` four lines above —
addendum C's rule.

#### 5. @0166C — `quid` for *qui*, a real word rendered as printed

    Quid meretur qui aliena rapuit, si aeternaliter damnatur quid de suo non dedit?

**Both witnesses print `quid`** (archive p.88, Gallica f83, read at 3× magnification on the word
itself). The sense wants the relative *qui*: "if he **who** has not given of his own is eternally
damned". As printed, *quid* is the indefinite that regularly follows *si*, and it is rendered as
what it means:

> What does he deserve who has seized what belongs to another, if he is eternally damned who has
> not given **anything** of his own?

Pattern 12 excludes it from `[sic:]` — it is a real word that occupies a slot and can be rendered.
⛔ **`[cj:]` considered and declined.** Pattern 18 fires where the faithful English **misleads**;
here it does not: with *quid* read as the indefinite object of *dedit*, the sentence asserts what
the gloss needs (that not giving is damnable, so seizing is worse). The English supplies the
relative pronoun that Latin may elide and English may not, which is the ordinary work of
translation, not an emendation of *quid*. ⚑ The plate's question mark is preserved.

#### 6. @0165B — `Posuit autem`, the coordinator's third ⚑: DECLINED, and here is why the rival lost

Mt 25:19 reads *Post multum vero temporis venit dominus servorum illorum, **et posuit** rationem
cum eis*. Migne's lemma is `VERS. 19.-- *Posuit autem.*`

**The read.** Archive **p.88** and Gallica **f83**, corner numbers 165/166 confirmed on both.
Both print *Posuit autem*, in italic, with the B band beside the line on both copies. Our twin
agrees. ⛔ **So ownership is settled and it is not ours**: `et`→`autem` is a different word, not a
filled counter or a thickened stroke, and ink cannot manufacture it — which is precisely why the
coordinator flagged our twin as the thing to check, and the twin is right.

**What §2 asks next.** A single-word `[var:]` stands on either of two limbs.

1. **Does the gloss argue from the word?** No. The gloss is *Coepit singulorum actus discutere
   accusante conscientia unumquemque vel excusante* — it expounds the **reckoning**, and there is
   nothing in it that the connective carries. Contrast @0161D four columns earlier, where the gloss
   re-quotes *fieri posset* by name.
2. **Is the form one that letter-level corruption cannot manufacture?** Yes. But that limb settles
   **ownership**, which two plates have already settled, and it does not by itself make the
   divergence material.

**And the reason for declining, which is the argument and not the absence of one.** Migne's lemma
is **clipped out of the middle of the verse**. *Et posuit* cannot open a lemma without dragging in
the clause it coordinates; a postpositive *autem* is the ordinary Latin way to open a sentence
lifted from a *cum*-clause, and it stands exactly where the clip needs something. A `[var:]` here
would be a **public claim about Migne's Matthew text** resting on a word that his lemma-forming may
have supplied, and §2's own warning — *a marker that quotes only the witness cannot be audited* —
tells against it.

⛔ **The rival, and it is a good one, stated so a reader can overrule me.** Migne keeps the verse's
own connective in **four** other clipped lemmata in this same range — *Et missis,* (0155D, Mt 22:7),
*Et date ei,* (0165D, Mt 25:28), *Non dedistis,* (0166C, Mt 25:42), *Et qui ceciderit,* (0155A,
Mt 21:44) — all four verbatim and all four read at the plate. So the "a clip needs a connective"
account is **not** his uniform practice, and on that evidence @0165B is anomalous within his own
habits. What holds me to the decline is that the alternative is a marker on a function word that
changes no assertion, in a work that already carries seven `[var:]` from my range; §2's bar exists
to keep exactly that from happening. **If a later reader wants it fired, this is the paragraph to
argue from, and the plates are already read.**

⚑ The distinction I am relying on is stated once more in §(a) 2 with its cost, because it is the
same substitution I **did** fire at @0156A and a rule that fires one and declines the other must be
statable in advance.

#### 7. @0156D — `Unde` capitalized after a comma, and it is Migne's

    *Erratis.* Ideo quia nescitis Scripturas, Unde sequitur, ut nesciant virtutem Dei.

Confirmed on **both** copies (archive p.84, Gallica f79). A capital in mid-sentence after a comma,
where the clause also has no main verb of its own. Rendered literally — *"For this reason, because
you know not the Scriptures, Whence there follows, that they know not the power of God."* — capital
and all, under Pattern 7 and Pattern 8. No marker: nothing here is a non-word, nothing is a
divergence, and the capital is the printed page's.

#### 8. @0154D — the verse number I would have changed on one witness, and did not

The archive p.82 prints **`VERS. 27.`** where Gallica f77 and our twin print **`VERS. 37.`** The
context settles which is right — the lemma is *Novissime,* and the gloss is *Vide patrisfamilias
patientiam*, which is Mt 21:37 (*Novissime autem misit ad eos filium suum*) and not Mt 21:27 — but
**that is not why I left it alone.** I left it alone because a verse address may not be altered on
one witness, ever, and because the second witness agrees with our twin.

⚑ This is the 8950 class reproduced on a sixth range: over-inking closing the counter of a `3`.
And it is worth recording that **the sense-argument and the second witness happened to agree here**;
the standing rule is written for the case where they do not, and it holds either way. Nothing
machine-readable consumes a `VERS.` number.

#### 9. @0162D — a ⚠ whose cause is OUR OWN CLEMENTINE COPY, not Migne

`sources/vulgate/clementine-flat.txt` line 3391 prints 1 Thess 5:3 with **`repentius`**, which is
no Latin word. Migne prints *repentinus* on **both** copies, our TEI twin prints *repentinus*, and
the received Vulgate reads *repentinus*. **The lemma agrees with the Vulgate exactly and the ⚠ is
the comparand's alone.**

⛔ **This is the fifth cause launch-brief §7 names, and the second time it has fired in this
work** (after `Mt 5:15 accedunt/accendunt`). It is worth a line in `sources/vulgate/README.md`, and
it is worth saying plainly why: **a defect in the comparand manufactures a divergence that looks
exactly like Migne's, and no plate read is triggered by it, because nothing about the Latin looks
wrong.** It was caught only because the whole span was collated word by word rather than trusted to
the pre-scan's ⚠.

#### 10. @0165A — `Christi carnem nostram`, a genitive with no head

    Locus carnis terra est, ergo Christi carnem nostram ad peregrina duxit, quando coelum ascendit.

**Both witnesses print `Christi`** (archive p.88, Gallica f83). The sense wants the nominative —
*ergo **Christus** carnem nostram ad peregrina duxit*, "therefore Christ led our flesh into a far
country" — and with *Christi* the sentence has a genitive attached to nothing and an unexpressed
subject. Rendered as printed, with the genitive kept and the subject supplied as English requires:

> The place of the flesh is the earth, therefore he led the flesh of Christ, our own, unto foreign
> parts, when he ascended into heaven.

**Who "he" is**, per the brief's unexpressed-subject rule: Christ, from *coelum ascendit* in the
same clause and from the lemma *Peregre proficiscens vocavit servos suos* above it — the man going
into a far country is Christ ascending, which the gloss states outright. No marker: `[sic:]` is
excluded (a real word in its slot), and `[cj:]` is declined because the faithful English asserts
what the gloss asserts and misleads nobody.

#### 11. @0164A — `*Fletus*` with no stop after the lemma

Gallica f82 prints *diversae voluntatis apparuit. **Fletus** Per similitudinem membrorum magnitudo
ostenditur tormentorum*, with **no point after the italic lemma**, and our twin agrees. The archive
p.87 prints *Fetus.* — a broken word **and** a supplied stop, its two departures cancelling into a
reading that looks plausible. Rendered as Gallica and our twin have it, with no stop:
*"**Weeping** By a likeness of the members the greatness of the torments is shown."* Pattern 8:
never supply a mark the plate lacks, even where the English reads oddly for want of it.

#### 12. @0160C — three indirect questions behind one colon (Pattern 8b)

    Tria quaerunt: quo tempore destruenda Jerusalem sit? quo venturus Christus? quo consummatio
    saeculi ventura sit?

Migne closes three **indirect** questions with `?`, which English syntax cannot take. Pattern 8b's
ruling applies exactly: the *quaerunt* frame goes in front of the colon and the questions go direct
behind it, so all three marks survive.

> They ask three things: at what time is Jerusalem to be destroyed? when is Christ to come? when is
> the consummation of the world to come?

Three marks in, three marks out, in the same band. Both copies print all three.

#### 13. Negation — the sites I walked slowly, per test 2 and 2a

Test 2a's trigger fires on a negative resting on a **verb** with a quantifier, correlative or
predicate nearby. Four sites in my range meet it and each is recorded with **the single Latin word
the negative attaches to**:

- **@0150C** *Quaerendum esset, **non** si daret quod **non** deberet: sed si **non** quod deberet.*
  Three negatives, and the `non … sed` correlative pivots on the **whole conditional**, not on the
  verb: the first `non` is on *si daret*, the second on *deberet*, the third on the elided *daret*.
  The English keeps all three on those hosts and keeps the ellipsis: "not whether he gave what he
  did not owe: but whether he did not give what he did owe." ⚑ The trap here is that an English
  ear wants "not *whether* he gave" to collapse into "whether he did not give", which would move
  the first negative onto the verb and destroy the *sed* pivot.
- **@0150D** *nec omnes primi nec omnes novissimi ad numerum electorum pertinent* — the negatives
  are on **omnes**, not on *pertinent*: "neither **all** the first nor **all** the last belong",
  not "the first do not belong". This is 8990 @0614B's class precisely; the quantifier is the host.
- **@0155D** *supponit **non omnes** qui sunt in Ecclesia, esse dignos regno* — the negative is on
  **omnes**, not on *esse dignos*: "he adds that **not all** who are in the Church are worthy of the
  kingdom", never "that those who are in the Church are not worthy". The whole point of the gloss is
  the clause that follows, *ne torpeant sui* — the warning is aimed at the many who ARE worthy, and
  the wrong host destroys it. 8990 @0611D's class exactly (*quia non omnibus patent*).
- **@0154C** *nolunt dicere quod sentiunt* — on *nolunt*, rendered "they are unwilling to say".
  No relocation: *velle*/*nolle* is lexical here and the 8987 @0624B trap (pressing a `non solum …
  sed` into double duty) does not arise, since there is no correlative.
- **@0166A** *Sed qui in fide **non** habet etiam virtutes quas naturaliter habet, perdit sine qua
  non sunt virtutes.* The first `non` is on *habet* (the faith), the second on *sunt*; *etiam* is
  the quantifier-like word and it belongs to *virtutes*, not to the negative. Rendered: "But he who
  has it not in faith loses **even** the virtues which he has naturally, without which there are no
  virtues." The *sine qua* refers back to **fides**, and that is the antecedent I supplied.

**The gloss-prose negatives elsewhere** (*non desistit* 0150A; *non voluntas, non propositum
culpatur, sed ignorantia* 0151A; *nemo potest cum Christo regnare, nisi passionem ejus sit imitatus*
0151A; *non in una via fidei, sed in diversis erroribus* 0152B; *nec ubi offendat* 0152C; *non
patet calumniae, non, ait, bene faciunt* 0153C; *nondum erat tempus* 0153D; *nisi per patientiam*
0154A; *nullus fuit in illo contumaci populo* 0154D; *non per ignorantiam, sed per invidiam* 0154D;
*non judicabuntur* 0166B) were each checked host by host and none moved.

#### 14. Test 5 — the reading-back pass, and the two paragraphs it changed

Run last, with the counts already clean: **does the English assert what he asserts?**

- **@0151A** *et si impetrare non debet simplicitas, non meretur confundi.* My first pass had "if
  simplicity ought not to obtain **its request**"; the Latin's *impetrare* is absolute and the
  object is the mother's petition from the lemma above, so the English now reads "if simplicity
  ought not to obtain what it asks", which keeps the object where Migne left it — inferable, not
  stated.
- **@0164C** *Ne forte* is a **bare lemma** followed by roman prose (*unusquisque pro suis operibus
  mercedem suscipiet*). My first pass punctuated it *"Lest perhaps:"* with the colon **inside** the
  italic span, which turns Migne's lemma into a lemma-plus-mark he does not print. Repaired to
  *"Lest perhaps each one shall receive a reward for his own works"*. ⚑ Caught by the band test,
  not by reading — the supplied colon showed as a band mismatch — which is the argument for running
  both.

---

### (e) THE DECLINED-ODDITY LIST — every suspect I did NOT mark, in one place

#### e1. Suspects in our Latin, adjudicated at the plate

| col | suspect | verdict |
|---|---|---|
| 0153B | `oriminis` — a non-word | **OURS.** Both copies print *criminis*. TEI patch 1; no `[sic:]` is writable until it lands. |
| 0153C | the full stop after `Testes miraculorum` — suspiciously tidy in a rough passage | **OURS, and SUPPLIED.** Neither copy prints it. TEI patch 2. |
| 0158D | `in est` for *id est* — a non-word | **MIGNE'S.** Both copies. `[sic:]` fired — §(d) 2. |
| 0154C | `saba` — a clipped Hebrew title, on the face of it a broken word | **MIGNE'S**, both copies, and it is an abbreviation, not breakage: his own *etc.* follows it. No marker. |
| 0166C | `quid` for *qui* | **MIGNE'S**, both copies. Real word, rendered as printed — §(d) 5. |
| 0165A | `Christi` for *Christus* | **MIGNE'S**, both copies. Real word, rendered as printed — §(d) 10. |
| 0156D | `Unde` capitalized after a comma | **MIGNE'S**, both copies — §(d) 7. |
| 0158B | `proselytum` set lower-case as a lemma | **A PRESS VARIANT.** Gallica lower-case, archive capital, both clean; our twin follows Gallica. Rendered lower-case as our twin and Gallica print it. No marker. |
| 0164A | `*Fletus*` with no stop | **MIGNE'S** on Gallica and our twin; the archive's *Fetus.* is that copy's — §(d) 11. |
| 0150A | *quotquot sanctos protulit, tot palmites misit* — a correlative that reads oddly | **NOT A DEFECT.** Ordinary *quot…tot*. Rendered "has sent forth as many branches as it has brought forth saints." |
| 0158D | *Ne eleemosynas fructum terrae videretur respuere* — a double accusative with no conjunction | **MIGNE'S**, both copies (the archive's *videreretur* is a dittography of that copy alone). Rendered literally, "Lest he should seem to spurn alms, the fruit of the earth". Declined: a real construction, harshly compressed, and Pattern 9's rule against burying real defects in noise applies. |
| 0160B | *omnia legis aedificia et compositio mandatorum ista destructa est* — plural subject, singular verb | **MIGNE'S**, both copies. Pattern 9: English has no exponent for the disagreement once the nearest subject is singular. Rendered "all the buildings of the law and that framing of the commandments was destroyed"; no marker, logged so a later sweep does not churn it. |
| 0157B | *malevolentia et livor nutrit impudentiam* — two subjects, singular verb | **MIGNE'S**, both copies. Ordinary Latin agreement with the nearer subject; no exponent in English. Rendered "ill-will and spite nourish shamelessness". |
| 0159A | *Lucas ita.* — a two-word sentence with no verb | **MIGNE'S**, both copies. Rendered as it stands: "Luke thus." |
| 0156D | *turpitudinem fabulae fingunt, quae deliramenti eos arguat* | **NOT A DEFECT.** *quae* agrees with *fabulae*/*turpitudinem*; subjunctive of purpose. Rendered "they invent the foulness of a fable to convict of raving those who assert the resurrection." |
| 0163A | *Duae differentiae sequentium orbem rerum mobilium, qui feminino genere designantur* — masculine *qui* on a feminine antecedent | **MIGNE'S**, both copies. Pattern 9: grammatical gender has no English exponent. |

#### e2. Archive-only readings, every one refuted at Gallica

Recorded because launch-brief §6 asks for the number and because **each of these would have been a
false claim about Migne's type** had the second witness not been fetched. Our twin agrees with
Gallica at every one.

**Punctuation and address (17):** the comma after *essent* (0150B) · an intrusive comma inside
*usque ad,* (0150B) · the comma after *interrogante* (0151A) · `VERS 24.` for `VERS. 24.` (0151A) ·
the comma after *Vel* (0151B) · **`VERS. 30.` without the dash** (0151B) · the comma after *ait*
(0151C) · `, *super eos.*` for `. *Super eos.*` (0152C) · the comma after *facta est* (0156B) ·
`*Vos autem*` without its stop (0154C) · the comma displaced in *Postula, a me* (0154D) ·
`*Verebuntur..*` doubled (0154D) · **`VERS. 27.` for `VERS. 37.`** (0154D) · `*Fetus*.` with a
supplied stop (0164A) · `*Oves ad,*` for `*Oves ab,*` (0166A) · `VERS. 33 —` without its stop
(0166B) · `Sed` for `sed` after a colon (0151B).

**Letters (10):** `monte` for `montis` (0151D) · `Israël` for `Israel` (0152C) · `offerent` for
`offerrent` (0153A) · `iu` for `in` (0153B) · `Pharisiaes` for `Pharisaeis` (0155D) · `gnotis`
(left margin clipped, 0156B) · `sociatem` for `societatem` (0158B) · `videreretur` for `videretur`
(0158D) · `secundnm` for `secundum` (0157C) · `occureret` for `occurreret` (0163C) · `quoquot` for
`quotquot` (0160A).

#### e3. Gallica-only readings, refuted at the archive

Fewer, and worth naming because the trend does not make them impossible: `Chritum` for `Christum`
(0158B) · `.ructum` for `fructum` (0158D) · `adoptivo.` for `adoptivo,` (0162D) · `moaum` for
`modum` (0166A). Our twin agrees with the archive at all four.

#### e4. Press variants — both copies clean, no one to accuse

`aliqui` / `alii` (0153A) · `patrisfamilias` / `patris familias` (0154C) · `restitum` / `vestitum`
(0155D, §(d) 3) · `*proselytum.*` / `*Proselytum.*` (0158B) · `tollendo. Exemplo` / `tollendo,
exemplo` (0158B) · `Cujus` / `cujus` (0157C) · `quinquepertita` / `quinque pertita` (0164B). Our
twin follows Gallica at all seven. **No `[sic:]`, no patch, crux only** — launch-brief §6's
corollary.

#### e5. Sections read clean

Cols **0159A–0160D** (archive p.85 / Gallica f80) are a **checked zero on both columns and both
copies** — the Zacharias-son-of-Barachias excursus, both printed question marks, the Nazaraean
Gospel note and all of `CAPUT XXIII`'s close agree with our twin line for line. Col **0150** is a
checked zero against our twin on Gallica. The **feet of all nine pages** were inspected on both
copies across the full page width: **zero numbered notes, zero raised asterisks, no apparatus
anywhere in cols 0149–0166.** Per launch-brief §8, a `[cn:]` or an `[nt:]` may never be recovered
from one witness, and this zero is recorded from two.


---

# §9 · STINT 0038–0041 (cols 0167A–0178D)

*Preserved from `cruces-0038.md`, unedited; headings demoted one level. Companion files: `data/briefs/9002-PLATE-READS-0038.json`, `data/briefs/9002-PENDING-TEI-PATCHES-0038.md`, `data/briefs/9002-lemmata-0038.txt`.*

## 9002 — cruces, stint 0038–0041 (cols 0167A–0178D)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0038–0041: `CAPUT XXVI.`
through `CAPUT XXVIII.` — the passion, the crucifixion and the resurrection, Mt 26:1 to Mt 28:20.
4,719 Latin words, 12 columns, **both plates read on every page, corner numbers first.**
**This is the end of the work, and the end of the last gospel in the Glossa.**

Companion files from this stint: `data/briefs/9002-PLATE-READS-0038.json` (every page opened, both
witnesses, findings and negatives, including the two page-foot checks) and
`data/briefs/9002-PENDING-TEI-PATCHES-0038.md` (three sites where our Latin has departed from
Migne; all three are Corpus Corporum's).

**Apparatus fired: 9 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]`.** Guillemets: zero in either language, either direction — Matthew is an italic-lemma
book. `verify-english.mjs` is clean on all four chunks: 48 column anchors, 25 `[n:]` notes, 106
`VERS.` addresses, paragraph counts and question marks all 1:1 with the Latin twins; and the
band-by-band punctuation test (colons, semicolons, question marks, exclamation marks, guillemets,
partitioned by the 48 verified anchors) returns **zero mismatched bands** in all four.

---

### (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. No claim about Migne's type stands on one witness, in either direction.** Every candidate
raised from the archive copy was taken to Gallica before it was written down. **Nineteen candidates
raised on the archive copy, nineteen refuted at Gallica, none confirmed.** That is a sixth
independent reproduction of the ratio this work has now measured five times (12 of 13, 20 of 21,
15 of 16, 8 of 9, 17 of 17). The archive copy of PL 114 lost **19 times out of 19** in these six
pages. Every one of the nineteen is itemized in §(e) with what Gallica prints instead; the
non-words among them (`uque`, `omino`, `potesta`, `contexereunt`, `homnes`, `constristatus`,
`Munierum`, `domun`, `compendi`) are exactly the class `GLOSSA-NT-AGENT-BRIEF.md`'s CORRECTION TO
ADDENDUM A says is a reason to fetch the second witness and never a substitute for it. It was
right nine times out of nine here.

**2. Where the plate was read and our twin diverges, the English renders the plate**
(`translation-style.md` §"What the English translates"). One site in this range changes a word:
@0175A our Latin prints `Pro quam`, both plates print **`Pro qua`**; the English renders the plate.
Two more are punctuation and are filed as patches but leave the English unchanged (@0171B a comma
our twin supplies after *perdiderunt*; @0178A a full stop our twin drops inside `[n: (Joan XX)]`).

**3. Zero `[sic:]`, and that is a measurement rather than timidity.** A `[sic:]` accuses Migne's
type and must quote a word still standing in our Latin. Nothing in this range survived two
witnesses as a defect of Migne's; the only defects found are the digitization's, and at those sites
the marker cannot even be written until the patch lands. Same result as the 0000, 0006, 0012 and
0027 stints reported for their ranges.

**4. When a `[var:]` fires.** I applied a rule I can state in one line, and I applied it both ways:
**a substitution or an addition of words takes the marker; an elision or a transposition does not.**
An abridged recension shortens verses constantly and a shortened verse asserts nothing new;
a transposition (*animam meam ponam pro te* for *animam meam pro te ponam*) changes no claim, and
English cannot show it anyway. A substituted word does change what stands on the page, and every
substitution in this range is marked. For a **single-word** divergence I applied launch brief §2's
bar exactly — it stands only where the gloss argues from the word, **or** where the form is one that
letter-level corruption cannot manufacture — and both limbs are named at each firing in §(c).

**5. `[cj:]` once, on Migne's own prose** — @0170B `non occidant`, an intruded negation, confirmed
on **both** witnesses. Argued at length in §(d).

**6. The ⚑ flag in my range is an ARTIFACT and I checked it at the plate anyway.** @0169D
`VERS. 33.-- *Etsi omnes.*` — Mt 26:33 reads *Et si omnes scandalizati fuerint in te*. The
difference is **a word division and nothing else**: the phrase search fails on the space. Both
plates print `Etsi` closed up (Gallica f85 col. 0169D, archive p.90 col. A — and note that the
archive copy prints `homnes` here, an ink defect Gallica refutes, which would have manufactured a
second and entirely false "divergence" on the same three words). **No `[var:]`, and no `[sic:]`
either.** Cause excluded: word division, the second of the five causes launch brief §7 names.

**7. The span the tool bug hid.** @0172D `VERS. 4. *Peccavi tradens,*` is addressed without the
`--` dash, so `lemma-inventory.mjs` filed it as an ordinary second lemma and the ⚑ ownership test
skipped it. Mt 27:4 reads *Peccavi**,** tradens sanguinem justum*: **a comma-only artifact**, not a
divergence. ⚑ And the plate has something to add that the brief could not know: **the archive copy
DOES print the dash (`VERS. 4. — Peccavi tradens`) and Gallica does not.** Our twin follows Gallica.
A `VERS.` address may not be altered on one witness, the two witnesses disagree only about a dash
and not about a digit, and nothing machine-readable consumes it — so the twin is left exactly as it
stands and the English carries `VERS. 4.` verbatim, dashless.

**8. Vocabulary axes, applied from the first line.** `turba` → **crowd** (0176C *comparatione
turbae propioris*, *a densitate turbae*) — **no `multitudo` anywhere in the range**, so the pair
never had to be separated here. `daemonium`: none; **`daemones` → demons** (0175B *hoc daemones
immiserunt*); **`diabolus` → devil** (0168C, 0173C, 0173D, 0174B, 0175B); no `satanas`. The
*gentes* family: **`gentes`/`gentium`/`gentibus` → Gentiles** at 0170B (*ut gentes intrent*, the
Rom 11 typology), 0174C (*opera gentium cruenta*), 0176A (*ad gentes transeant*, *pateret
gentibus*) — every one inside the *Judaei*/*gentes* opposition the passion narrative is built on;
**`gentiles` → Gentiles** (0170B *credant gentiles*); **`gentilis` → Gentile** (0173D *uxor viri
gentilis*, 0174A *Gentilem populum*, 0176A *corda gentilium*); no `gentilitas`, no `ethnicus`;
**`natio` → nation** at its one true occurrence (0171A *omnes nationes insurgant*), and singular
`gens` of the Jewish people → **nation** (0174A *amissa gente et loco et libertate*). ⚑ **I checked
the instrument before reporting any of this**, as the brief requires: the raw `natio` grep returns
**eight** hits across my four chunks and **seven are false** — *damnatione* (0173C), *indignati*
(0167C), *narrationis* (0167A), *narrationem*/*narrandam* (0172C), *resurrectionem* is not one but
*imprecatio* and *damnatione* are, and only 0171A's `nationes` is a `natio` at all. Likewise
`\bdaemoni` returns **zero** in this range while `daemones` stands at 0175B, exactly the miss the
brief predicts; and `\bturba` catches *turbantur* at 0174C (the elements being troubled), which is
*turbare* and not a crowd.

**9. `usque ad` — the `etc.` splice test, applied per occurrence.** Seven occurrences of `usque`
in the range and **only two are the abridgment formula.** Both are in chunk 0041 and both follow an
`etc.`: @0177B *Quod diversa tempora istarum mulierum, **etc.,** usque ad adire non potuerunt* and
@0178D *Prima sabbati diluculo, **etc.,** usque ad dicente eis angelo* — rendered **"as far as"**,
and both are italicized in the Latin, which here agrees with the test. The other five are ordinary
Latin and are rendered by sense, and I name them because a silent departure and a ruled one cannot
be told apart afterwards: @0167A *ab initio Evangelii usque ad passionem* → "**until** the passion"
(temporal); @0167C *usque ad consummationem saeculi* → "**even to** the consummation of the world"
— this is **Mt 28:20 itself**, the verse's own words, and it recurs as the work's closing lemma at
@0178C/D; @0170A the lemma *Usque ad mortem* → "**Even unto death**" — Mt 26:38's own words, and
Hilary's note glosses precisely that phrase, so reading it as the splice formula would have
destroyed the note; @0172C *usque ad mane* and *usque ad negationem Petri narrandam* → "**up to**
the morning", "**back to** the telling of Peter's denial" (Migne describing how the evangelists
weave their narrative, with no `etc.` anywhere near). ⚑ Note the trap in the last pair: they sit
four words apart in one sentence, exactly the shape 8967 col 0953C is recorded for, and neither is
the formula.

**10. Pattern 8, and it was worked band by band, not by total.** The two totals cancelled once in
my first draft — a supplied semicolon in one band against a destroyed colon in another — which is
the failure the brief records for 8989 and Tobit. Sixteen sites were repaired against the Latin's
own marks before filing. Two are worth naming because they read as errors and are Migne's:
@0171C *quod idem est: Et est similis* keeps its colon before a capital; @0175A the paragraph on
*Blasphemabant* **ends in a colon** (*et caput agitant:*), and that colon is on both plates.

**11. Second person, Pattern 17.** Singular addressees take *thou* (@0167D *Ubi vis*, @0168C/0171C
*Tu dixisti*, @0168D *tu es sacerdos*, @0170A *Animam meam ponam pro te*, @0170B *quid me
persequeris* and *sicut tu*, @0172D *tu videris · tu scias · tu istud probaveras · tu inde fac quod
vis*, @0173D *Nihil tibi*, @0175D *Ne mireris … videas*, @0177D *intelligeres … comprobes*,
@0178A *Noli me tangere*); plural ones take *you* (@0167C *vobiscum sum · vos putatis*, @0167D
*Quid vultis*, @0169B *Vobiscum*, @0170B *dedistis*, @0171B *Existis · potestas vestra*, @0171C
*judicatis*, @0175B *non creditis · non crederetis*, @0177C *vestros concives videtis*, @0178D
*vobiscum sum*). Archaic verb forms appear only inside quoted scripture; the commentator's own
`dicit`/`ait` is **says**, never *saith*.

**12. Migne's own printing is not mine to tidy.** Three things are reproduced as printed and
argued in §(d): the citation `(Zac. II)` on a quotation of **Mt 22:21** (@0173B); the citation
`(Marc. XXIV)` on a gospel with sixteen chapters (@0173B); and **Jupiter and Apollo** at @0171D for
Acts 14's Jupiter and Mercury. None is corrected, none is queried in the text.

---

### (b) MY SPAN COUNT AGAINST THE BRIEF'S TOTAL

`data/briefs/9002-lemmata-0038.txt` heads its inventory **189 spans, of which 0 open-ended**.

**My own count of the marked spans in my four Latin chunks: 189, paragraph-bounded** — 0038: 65 ·
0039: 22 · 0040: 63 · 0041: 39. Counted paragraph by paragraph as the brief requires, so an
unmatched delimiter running forward across a paragraph could not swallow a span or shift the
pairing backwards; **no paragraph in the range carries an odd number of asterisks**, and the
guillemet count is **zero in all four chunks**, which is the right answer for an italic-lemma book.
**The totals agree: 189 = 189.**

I also counted the thing the brief warns the instrument gets wrong. **`VERS.` addresses in my own
Latin: 106** — 0038: 31 · 0039: 17 · 0040: 34 · 0041: 24. Of these **105 are the `VERS. n.--`
dash form and exactly one is the bare `VERS. n.` form**: @0172D *Peccavi tradens*, the span the
launch message names. So the tool's blind spot costs exactly one span in this range, it is the one
already adjudicated, and there is no second hidden one.

---

### (c) THE LEMMA DIVERGENCE LIST — every span, declines and reasons included

All 189 spans were walked against `sources/vulgate/clementine-flat.txt`, and the ✓ addresses were
**read** rather than trusted: launch brief §3's warning that a gospel harmony answers for the wrong
evangelist is acute in a passion narrative, where all four evangelists run parallel. Nothing in
this range cleared off the wrong gospel undetected; where Migne himself cites another evangelist
(*Marcus: in catino*, *Marcus: Ego sum*, *noluit bibere*, *non accepit*) the ✓ correctly points at
Mark, and that is the gloss's own comparison rather than a mis-clearance.

#### The nine that took a `[var:]`

| col | Migne prints | Vulgate | why it fires |
|---|---|---|---|
| 0168A | *Invenerunt coenaculum grande stratum* | Mc 14:15 *Et ipse vobis demonstrabit coenaculum grande, stratum* | **substitution**, and of the governing verb: "they found" for "he will show you". The three nouns are Mark's exactly; the clause is not. Read on both plates. |
| 0169C | *Omnes vos scandalum pati* | Mt 26:31 *Omnes vos scandalum patiemini* | **substitution**: an infinitive for a finite future, which changes the construction of the whole lemma. Read on both plates (archive p.90 col. A, Gallica f85 col. A). Launch brief §2's second limb: an inflected ending three letters shorter is not what ink does to a word in the middle of a line. |
| 0170B | *Sed non sicut ego volo, sed sicut tu* | Mt 26:39 *verumtamen non sicut ego volo, sed sicut tu* | **substitution**: *Sed* for *verumtamen*. Ambrose is quoted saying the words, so the words are the point. |
| 0170D | *Dedit eis signum* | Mt 26:48 *dedit illis signum* | **substitution**, single word — and it passes §2's bar on the second limb: `illis`→`eis` is a different pronoun of a different length and shape, not a letter-level accident. It is also the same class as @0095B *Det illi* for *det ei*, which the 0006–0011 stint confirmed on both plates in this work. Read on both plates. |
| 0173B | *Et non erant convenientia testimonia eorum* | Mc 14:56 *et convenientia testimonia non erant* | **addition** (*eorum*) as well as transposition. The addition is what fires it; the transposition alone would not. |
| 0174A | *Quid ergo faciam de Jesu, qui dicitur Christus?* | Mt 27:22 *Quid igitur faciam de Jesu, qui dicitur Christus?* | **substitution**: *ergo* for *igitur* — and this one has an internal witness of its own, because **Migne prints the verse correctly with *igitur* as the lemma nine words above** and then re-quotes it with *ergo*. Both readings on both plates. English can only carry it as "therefore"/"then", so the marker does the disclosing. |
| 0174B | *Jesum vero flagellatum* | Mt 27:26 *Jesum autem flagellatum* | **substitution**, single word; same class as @0093A *Dico autem vobis* for *Dico enim vobis*, confirmed in this work. Read on both plates. |
| 0175A | *Morte turpissima condemnemus eum. Erit enim respectus in sermonibus illius. Si enim vere Filius Dei est, suscipiet illum et liberabit illum de manu contrariorum* | Sap 2:20 *…erit enim ei respectus ex sermonibus illius*; Sap 2:18 *Si enim est verus filius Dei, suscipiet illum, et liberabit eum de manibus contrariorum* | five substitutions in one quotation (*in* for *ex*, *vere*+adverb for *verus*+adjective, *illum* for *eum*, singular *manu* for plural *manibus*, and *ei* dropped), plus the two verses quoted in reverse order. `de manu contrariorum` read letter by letter on both plates. |
| 0175B | *Et credemus ei* | Mt 27:42 *et credimus ei* | **substitution** of tense — and **the gloss argues from it**: Migne's next two words are *Fraudulenta promissio*, "a fraudulent promise", and a promise needs the future that Migne prints and the Vulgate does not. This is §2's first limb, and it is the strongest single-word `[var:]` in the range. Read letter by letter on both plates. |

#### The ⚠ spans I checked and declined, with the reason for each

- **@0168A `Et fecerunt discipuli sicuti`** — Mt 26:19 has *sicut*. `sicuti` is on **both** plates
  (zoomed on archive p.89 col. B and Gallica f84 col. B). Declined: *sicuti* is the same lexeme with
  its enclitic, an orthographic variant and not a substitution, in the same class as *quemcunque*
  below. Rendered "even as".
- **@0170A `Animam meam ponam pro te`** — Jo 13:37 has *animam meam pro te ponam*. **Transposition
  only**, no word added, removed or changed, and English word order cannot show it. Crux, no marker.
- **@0170B `Esurivi et dedistis mihi manducare. Et quid me persequeris?`** — Mt 25:35 has *esurivi
  **enim**, et dedistis*; Act 9:4 has *quid me persequeris* without *Et*. **Elision** in the first,
  and the *Et* in the second is Migne's own connective joining two proof-texts, not part of the
  quotation. Declined on both counts.
- **@0170D `Quemcunque osculatus`** — Mt 26:48 spells *Quemcumque*. Nineteenth-century orthography,
  Pattern 9. Declined.
- **@0172C `Respexit Dominus Petrum`** — Lc 22:61 has *Et conversus Dominus respexit Petrum*.
  Transposition plus elision, no substitution. Declined.
- **@0173B `Reddite quae sunt Caesaris Caesari`** — Mt 22:21 has *Reddite **ergo** quae sunt
  Caesaris, Caesari*. **Elision** of a connective. Declined. (Migne's citation `(Zac. II)` on it is
  a separate matter and is in §(d).)
- **@0173C `Qui dicebatur Barabbas`** — this ⚠ is **the comparand's, not Migne's**: our Clementine
  copy spells the name **`Barrabas`** at Mt 27:16 and `Barabbam` at 27:17, 21 and 26. The phrase
  search fails on the double r. This is launch brief §7's third cause (a defect in our own
  Clementine copy) and it should be added to `sources/vulgate/README.md`'s list.
- **@0173C `filius patris` · `magister eorum` · `os malleatoris`** — Hebrew etymologies, not
  scripture. ⚠ is correct and means nothing.
- **@0174B `Jesum vero flagellatum` / `Jesum vero`** — one divergence, quoted twice; the marker
  stands at the first and the rendering is held fixed at the second, per 7a″ step 3.
- **@0174D `mirrhatum`** — Mc 15:23 spells *myrrhatum*. Orthography. Declined. (Migne prints
  *myrrhae* with the y four words later, in the same sentence, on both plates — his own
  inconsistency, reproduced.)
- **@0176D `Discipulus erat Jesu. Hic accessit ad Pilatum.`** — two clipped fragments of Mt 27:57
  and 27:58, each verbatim; the search fails only because they cross a verse boundary and the scan
  is per verse. Not a divergence.
- **@0176D `In syndone munda`** — Mt 27:59 spells *sindone*, and so does Migne himself two words
  later (*Sindone munda Jesum involvit*), on both plates. Orthography, and his own. Declined.
- **@0177A `Munierunt sepulcrum`** — Mt 27:66 spells *sepulchrum*. Orthography. Declined. (The
  archive copy prints `Munierum`, a non-word; Gallica prints `Munierunt`. See §(e).)
- **@0177B `Terrae motus`** — Mt 28:2 sets *terraemotus* as one word. **Word division**, the same
  cause as the ⚑ at @0169D. Not a divergence.
- **@0178A `Nuntiate`** — our Clementine copy reads *ite, **nuntiare** fratribus meis* at Mt 28:10.
  A one-letter difference against a single-word lemma, and the comparand is the suspect party here:
  the imperative is what the sentence wants and what Migne prints. Declined explicitly, and flagged
  for `sources/vulgate/README.md` as a possible fifth entry beside `Mt 5:15 accedunt/accendunt`.
- **@0169D `Etsi omnes`** and **@0172D `Peccavi tradens`** — the two pre-checked artifacts; see
  §(a) 6 and 7.

#### The spans I checked and found to agree with the Clementine exactly

Recorded because a list of findings alone cannot be told apart from a report by an agent that never
looked. **Mt 26**: *Et factum est cum consummasset* (26:1, clipped before *Jesus sermones hos
omnes*) · *Cum autem* · *tunc abiit unus de duodecim* (26:14) · *Simonis* · *Mulier habens* ·
*Unguenti pretiosi* · *Discipuli indignati* (26:8, clipped) · *Me autem* · *Ecce ego vobiscum sum
omnibus diebus usque ad consummationem saeculi* (28:20, verbatim, and correctly cleared off
**Matthew's own** last verse rather than a parallel) · *Mittens enim* · *Quid vultis* · *Ubi vis* ·
*Ad quemdam* ×3 · *Ite in civitatem* · *Quia unus* · *Coeperunt singuli* · *Qui intingit* · *In
paropside* · *in catino* (Mc 14:20) · *Bonum erat ei* · *Rabbi* · *Tu dixisti* ×2 · *Coenantibus
autem* · *juravit Dominus et non poenitebit eum: tu es sacerdos* (Ps 109:4) · *Accepit* · *Et
benedixit ac fregit* · *Fregit* · *Gratias egit* · *Non bibam* · *Novum in regno Patris* (clipped
before *mei*) · *novum* · *Vobiscum* · *De hoc genimine* · *Et hymno* · *Edent pauperes et
saturabuntur* (Ps 21:27) · *Exierunt in montem* · *Postquam* · *Praecedam vos* · *Et orem* ·
*Coepit contristari* ×3 · *Tristis* · *Usque ad mortem* · *Si possibile est* ×2 · *iste* · *Non
sicut ego volo* · *Caro autem* · *Iterum secundo* · *Oravit tertio* · *Cum gladiis et fustibus* ·
*Et osculatus est* · *Cum his qui oderunt pacem, eram pacificus* (Ps 119:7) · *Gladio peribunt* ·
*An putas quia* · *Existis cum gladiis* · *Ad Caipham* · *A longe* · *Ego sum* (Mc 14:62) · *Filium
hominis* · *Scidit vestimenta* · *Tunc exspuerunt* · *Prophetiza* · *Una ancilla* · *Non novi
hominem* · *Qui stabant* · *Et continuo gallus cantavit* · *Recordatus est* · *Et egressus*.
**Mt 27**: *Mane autem* · *Quid ad nos* · *tu videris* · *Et projectis* · *Et abiens* · *Et oratio
ejus fiat in peccatum* (Ps 108:7) · *Non licet eos* · *Per Jeremiam* · *A filiis Israel* · *Tu es
rex Judaeorum* · *Vos ex patre diabolo estis* (Jo 8:44) · *Quem vultis* · *Qui dicitur Christus* ·
*Pro tribunali* · *Uxor ejus* · *Nihil tibi* · *Barabbam* · *Quid igitur faciam de Jesu* ·
*crucifigatur* · *Quid enim mali fecit* · *Lavit manus* · *Crucifige, crucifige eum* (Lc 23:21) ·
*Sanguis ejus* · *Tunc dimisit illis Barabbam* · *Chlamydem coccineam* · *Cyrenaeum* · *Golgotha* ·
*Calvariae* · *Cum felle mistum* · *Et cum gustasset noluit* · *noluit bibere* · *non accepit*
(Mc 15:23) · *Diviserunt* · *Causam* · *Unus a dextris* · *Blasphemabant* · *Si Filius Dei es* ·
*Idipsum autem et latrones* · *A sexta autem hora* · *Et circa horam nonam* · *Eli, Eli, lamma* ·
*Quidam autem* · *Sine videamus* · *Et ecce velum templi* · *Terra mota est* · *Petrae* · *Et
monumenta* · *Corpora sanctorum* · *In sanctam civitatem* · *Centurio autem* · *Mulieres multae* ·
*Ministrantes ei* · *Jacobi* · *Homo dives* · *In monumento suo novo* · *Erant autem ibi* · *Post
tres*. **Mt 28**: *Vespere* · *Maria Magdalene, et altera Maria* · *Revolvit lapidem* · *Sicut
fulgur* · *Nolite timere* ×2 · *Et cito euntes* · *Cum timore et gaudio* · *Et ecce Jesus* · *Et
tenuerunt* · *Noli me tangere, nondum enim ascendi ad Patrem meum* (Jo 20:17) · *Fratribus meis* ·
*Pecuniam copiosam* · *Furati sunt eum nobis dormientibus* · *Et divulgatum est* · *Abierunt* · *In
montem* · *Quidam autem dubitaverunt* · *Et accedens* · *Data est* · *Euntes* · *Docete* · *Et ecce
ego vobiscum sum* · *Ecce ego vobiscum sum* · *Sic veniet quemadmodum vidistis eum euntem in
coelum* (Act 1:11) · and the two `usque ad` formula spans.

⚑ **Two ✓ marks in the brief point at the wrong verse and I say so rather than leaving it silent.**
*Nolite timere* clears off 1 Rg 12:20 and a dozen other places before Mt 28:5 and 28:10; *Data est*
clears off 1 Cor 1:4 before Mt 28:18. In a gospel the harmony and the common formulae both answer,
and reading the printed addresses is the only thing that separates them. Both are Matthew's own
here.

---

### (d) CRUCES, BY COLUMN

**@0167B — *Diligenter observa, quae de duabus super caput.*** Elliptical: no verb governs *quae*
and no noun governs *duabus*. Rendered "Observe diligently what is said of the two women concerning
the head", supplying *is said* and *women* from the sentence that follows (*Siquidem peccatrix,
super pedes, et ea quae dicitur non fuisse peccatrix, super caput*), which distinguishes exactly two
women. Read clean on both plates: this is Migne's compression, not a defect. **The supplied words
are named here because the brief's dominant defect class is the unexpressed subject supplied
silently.**

**@0167B — πίστις.** Migne's Greek is reproduced verbatim, untransliterated, and it is on both
plates. *fides Latine* is rendered "faith in Latin" in roman: the Latin twin sets no italics there,
and adding a span would break the 1:1 italic rule for the sake of a typographic nicety.

**@0168B — *paropsis* and *catinum*.** Two vessel-words the gloss is defining, so they cannot be
Englished away; they are carried in **roman**, not italics, because the Latin sets no italic span
around them and the register's licence for technical Latin does not outrank the 1:1 italic rule.
The two lemmata they gloss are rendered **"in the dish"** (Mt) and **"in the bowl"** (Mc) so that a
reader can see which is which, which is the distinction the whole paragraph is about.

**@0168C — *An diabolo dicit non nasci ad peccatum: an etiam bonum illi erat…?*** The first limb
has no construable governing sense: *dicit* takes a dative *diabolo* and then an unattached
infinitive phrase. Rendered as closely as the printed words allow — "Or does he say to the devil,
not to be born unto sin:" — and **not smoothed**. The colon and the single question mark at the end
of the second limb are Migne's, both on both plates. No marker: nothing is defective type, and
under Pattern 18 the English asserts nothing false, only something obscure.

**@0168C — *Alii dicunt, Domine, iste, rabbi.*** Migne separates the two speakers with commas only,
which in English reads as a list. Rendered with his commas ("The others say, Lord, this man,
Rabbi") rather than the semicolon my first draft supplied: Pattern 8 forbids supplying a mark, and
the band test caught it.

**@0169C — *ut post eum tum non desperent*.** *tum* is redundant beside *post eum*, and *post eum*
can be read as "afterwards" or as "of him". Rendered "that afterwards they may not then despair",
carrying both. Both readings construe; the negative is on *desperent* in either, so nothing turns
on the choice. Read clean on both plates.

**@0169D–0170A — *propassio*.** Jerome's technical term, and the whole point of the paragraph
(*non passio ejus animo dominatur: verum propassio est*). Rendered **"a propassion"** rather than
translated away, in roman for the reason given at 0168B. ⚑ Our twin sets it closed up and **the
archive copy prints it split, `pro passio`** — refuted at Gallica f85, which sets it closed. Had
that stood on one witness it would have been a Pattern 10 split-type `[sic:]` swallowing a lexeme,
which is 7a⁗-b's most dangerous shape.

**@0170B — *ne Judaei, qui excusationem ignorantiae non habent, non occidant* — the one `[cj:]`.**
Both `non`s are on **both** witnesses; I zoomed the line on archive p.90 col. B and on Gallica f85
col. B before writing anything. The sentence as printed says he prays out of mercy **lest the Jews
should NOT kill him** — the opposite of everything around it. The scope is fixed by the sentence's
own structure and not by what reads well: the next clause is *ut sine interitu Judaeorum credant
gentiles, passionem recuso*, "that the Gentiles may believe **without the destruction of the Jews**,
I refuse the passion", and the clause after that makes the alternative explicit (*Sin autem illi
excaecandi sunt ut gentes intrent*). The mercy asked for is mercy **to the Jews**, so the thing to
be prevented is their killing him. One `non` is intruded.

Rendered faithfully — "should not kill him" — with the conjecture beside it, additive, per
Pattern 18: `should not kill him [cj: *non occidant*; read *occidant*, "should kill him"]`.
⛔ **Why `[cj:]` and not a crux alone.** Pattern 18a rules that incoherence is not a defence where
the word that went wrong is a negation: a lost or intruded negative is the class the whole 7a⁗
apparatus exists for, and where no `[sic:]` can reach it — and none can here, because the type is
sound and the word is real — the conjecture has nowhere else to live but this marker.
⛔ **The rival I rejected, and why.** The rival reading is that *ne … non* is emphatic rather than
doubled, i.e. "lest they should by no means kill him". It loses because it makes the mercy fall on
the wrong party: the passage's mercy is for the Jews, twice over, and on that reading Christ would
be asking that they be *sure* to kill him, which is the reading `Sin autem illi excaecandi sunt` is
set against. The marker takes the intruded-`non` reading.

**@0170C — *a poenitentibus malis tutelam*.** Read on **both** plates; the word is Migne's. The
triad is *a praeteritis peccatis · a poenitentibus malis · a futuris periculis*, and the obvious
conjecture is *praesentibus*. **Declined, and this is a decline with a rule behind it**: Addendum A
is 10 for 10 that a real, well-formed word which reads oddly is Migne's, and the plates have now
said so directly. *poenitentibus* also construes without emendation — "the evils we repent of" —
which is how it is rendered, and a construable printed word does not meet Pattern 18's bar.

**@0170C — *timor utilitatis*.** Same treatment, same reasoning, and read on both plates: *utilitas*
is a real word, the conjecture (*vilitatis*) is attractive and unprovable, and the printed word is
rendered — "the fear of advantage". Crux, no marker.

**@0170C — *ut me occidat*.** The Jonah allegory ends with a purpose clause whose subject is the
withered gourd and whose object is *me*: "so that it may kill me". Odd but printed, on both plates,
and rendered as it stands.

**@0171A — *Gladio illo quo igneus vertitur ante paradisum*.** *igneus* is masculine nominative
with no noun; Gn 3:24's *flammeum gladium atque versatilem* stands behind it. Rendered "that sword
which, being of fire, is turned before paradise" — a gender mismatch has no English exponent
(Pattern 9), so there is nothing to mark and nothing to emend. Logged so a later sweep does not
churn it.

**@0171B — *cum Tito et Vespasiano perdiderunt, homicidas illos*.** Our twin sets a comma after
*perdiderunt*; **neither plate has it** (the word is hyphenated across a line break on both, so the
comma could not have stood there). Filed as a pending patch. The English is unaffected — English
punctuation cannot show it — and no marker is owed.

**@0171C — *Caiphas, id est, investigator vel sagax ad implendam, scilicet doli sui nequitiam*.**
Migne defers the noun *nequitiam* behind a *scilicet*, leaving *ad implendam* momentarily
governing nothing. Reproduced with his comma exactly. Both plates agree, including the comma after
*id est* that the archive copy appears to lack.

**@0171D — Jupiter and Apollo.** Acts 14:11 has Jupiter and **Mercury**. Migne prints *Apollo*, on
both plates. Reproduced; not corrected, not marked. It is neither defective type nor a quotation
from scripture, so neither Pattern 12 nor Pattern 14 reaches it, and Pattern 18 does not apply
because the English asserts exactly what Migne asserts.

**@0172A — *in necem Domini peccasse: et per passionem redemptus*.** *redemptus* is a nominative
participle where the construction wants an accusative to match *peccasse*. No English exponent;
rendered "to have sinned unto the death of the Lord: and redeemed through the passion", with
Migne's colon. Pattern 9, logged not marked. ⚠ **And note what Migne does NOT print here: a
question mark.** *Cur prima ancilla prodit… nisi ut…* is a direct question in Latin and he closes it
with a full stop. Both plates agree. The English closes with a full stop too — Pattern 8 forbids
supplying the mark, and chunk 0039's question-mark count is zero in both columns.

**@0172A — *mulier prima rerurrectionis mysterium accepit* — a press variant, not a defect.**
Our twin prints the non-word `rerurrectionis`. **Gallica f86 prints `rerurrectionis` too** (split
`re-` / `rurrectionis` across a line), and **the archive copy prints `resurrectionis`**. The two
copies simply differ, exactly as at @0073A (`Bethehem`/`Bethlehem`) and 8950 @0171D
(`Mititte`/`Mittite`): two printings, not two photographs. **No `[sic:]`** — it would need two
witnesses and the second refutes it — **and no TEI patch**, because our twin faithfully reproduces
the copy it was made from. The English renders the sense both copies intend, "the mystery of the
resurrection", and this crux is the whole of the record. ⚑ It is worth noticing that this is the
first site in six pages where the **archive** copy is the cleaner of the two.

**@0172C/D — *VERS. 4.* without the dash.** See §(a) 7. Archive prints the dash, Gallica does not,
our twin follows Gallica, and the twin is left alone.

**@0173B — *(Zac. II)* on Mt 22:21 and *(Marc. XXIV)* on a sixteen-chapter gospel.** Both citations
are Migne's, both are on both plates, both pass through verbatim and untranslated as `[n:]`
contents. Passing a siglum through is not endorsing it.

**@0173C — *et ad ultimum conterit, quando in extrema damnatione confringet*.** Both verbs have an
unexpressed object. The subject is *Dominus* from the preceding clause (*per quem Dominus vasa sua
permittit probari*), and the object is the devil, not the vessels: the devil is what the sentence is
about (*Pilatus … diabolum significat*) and the vessels are what he is permitted to try, not what
is crushed at the last. Rendered "at the last he grinds him down… he shall break him in pieces".
Named here because it is supplied and both readings construe.

**@0173D — *Nihil tibi*, expanded.** Mt 27:19 reads *Nihil tibi, et justo illi*. A bare "Nothing to
thee" is not English and stands for nothing a reader can use, so convention 3 applies and the lemma
is rendered as the phrase it opens: "Have thou nothing to do with that just man." The stump was
expanded rather than its twin contracted, per the ⚑ ruling in `GLOSSA-NT-AGENT-BRIEF.md`.

**@0174B — the `[n: (ISID.)]` sentence has no main verb.** *Diabolus qui jam olim ob superbiam a
patria lucis expulsus, et in tenebrarum carcerem fuerat missus.* Rendered as the fragment it is;
both plates agree; no marker.

**@0174D — *in libro Jesu*.** The book of Josue, called by Migne after its Latin title's first
element. Rendered "in the book of Josue", which is what the Latin names; "the book of Jesus" would
be a different claim about the page. Logged as a naming decision, not a silent normalization.

**@0175A — *Pro quam* → *Pro qua*: the one word in this range where the English follows the plate
and not our Latin.** Our twin prints *Pro quam eum Judaei Pilato tradiderunt*; **both plates print
*Pro qua***, read at the foot of Gallica f87 col. B and archive p.92 col. B. The English renders the
plate ("For which the Jews handed him over to Pilate"). Filed as a pending patch; a marker becomes
available only after the patch lands, and none is owed even then, since with *qua* restored there
is no defect at all.

**@0175A — *et caput agitant:*** The paragraph ends in a colon on both plates, with a new `VERS.`
address after it. Preserved, per Pattern 8: never delete a mark he prints.

**@0176B — *quod nulla alia*.** Elliptical: "which no other". Rendered "which no other city has",
supplying the verb English requires and naming it here.

**@0176B — *Arius … praedicat creaturam, quem caeci Judaei nec tot miraculis credunt*.** *quem* is
masculine and cannot refer to *creaturam*; the antecedent is Christ. Rendered "preaches a creature,
whom the blind Jews do not believe even for so many miracles", keeping the relative where Migne
puts it. Both readings of the antecedent were weighed; only Christ construes with the masculine.

**@0177A — *Tertius dies a parte prima, id est, nocte totius cum suo diurno*.** *totius* has no
noun. Rendered "from its first part, that is, from the night, for the whole with its own daytime",
as closely as the printed words allow, and not smoothed. Both plates agree.

**@0178C — *Euntes. Qui jam in lucem venit, quod hactenus quibusdam de causis dubium hominibus
fuerat*.** *Qui* is masculine singular and *quod* neuter: two different antecedents in one sentence,
neither expressed. Rendered "He who has now come into the light, which until now had for certain
causes been doubtful to men", carrying both as Migne sets them. The commission to the nations is
the likelier referent of *quod*; that is a reading and it is here rather than in the text.

**Sections read clean.** Cols 0167A, 0168D–0169A, 0172B, 0173A, 0174C–0174D, 0175C, 0176A–0176C and
0177B–0177D, 0178B–0178C were read line by line against both plates and returned nothing: no divergence from our
twin, no defect, no apparatus at the page feet. **A checked zero is a result and it is recorded as
one.**

---

### (e) THE DECLINED-ODDITY LIST — every suspect word I did NOT mark, in one place

#### The nineteen archive-copy readings, all refuted at Gallica

Nineteen raised, **nineteen refuted, zero confirmed.** Each was read on the archive copy at 300 dpi
first and taken to the Gallica leaf before being written down; had I stopped at one witness, this
stint would have shipped nineteen false claims about Migne's type, nine of them non-words.

| col | archive reads | Gallica reads | our twin |
|---|---|---|---|
| 0167B | `domun` | `domum` | `domum` ✓ |
| 0167C | `uque ad` | `usque ad` | `usque ad` ✓ |
| 0167D | `compendi` | `compendio` | `compendio` ✓ |
| 0168A | `littera egrediens` | `litterae egrediens` | `litterae` ✓ |
| 0168B | `specialiter ne,` | `specialiter, ne` | `specialiter, ne` ✓ |
| 0168C | `omino` | `omnino` | `omnino` ✓ |
| 0169B | `Ethymno` (fused) | `Et hymno` | `Et hymno` ✓ |
| 0169D | `Etsi homnes` | `Etsi omnes` | `Etsi omnes` ✓ |
| 0169D | `orant` | `orat` | `orat` ✓ |
| 0169D | `constristatus` | `contristatus` | `contristatus` ✓ |
| 0169D | `pro passio` (split) | `propassio` | `propassio` ✓ |
| 0170B | `justa divinam` | `juxta divinam` | `juxta` ✓ |
| 0170C | `Tribus viribus` | `Tribus vicibus` | `vicibus` ✓ |
| 0170D | `cum non meum palam tradidit` | `cum non eum` | `eum` ✓ |
| 0171B | `potesta vestra` | `potestas vestra` | `potestas` ✓ |
| 0172C | `contexereunt` | `contexerent` | `contexerent` ✓ |
| 0173D | `pro filio Dei` | `pro Filio Dei` | `Filio` ✓ |
| 0174A | `Crucifige, crucifige eum !` | `… eum.` | `eum.` ✓ |
| 0178D | `Et ecce ego vobiscum suum` | `… sum` | `sum` ✓ |

⚑ **Three of these deserve naming separately, because each is a documented trap firing exactly as
documented.** `Etsi homnes` @0169D is the `homnibus` @0099B defect reproduced — the archive copy's
ink adds an initial *h* — and it fell on the one span in my range the launch brief had already
flagged, so a reader who trusted the archive would have found "corroboration" for a divergence that
does not exist. `pro passio` @0169D is a **word division**, the shape 7a⁗-b calls the most dangerous
under Pattern 10, because quarantining it would take a whole lexeme out of the English. And
`Tribus viribus` @0170C is a **well-formed real word** in place of another — "with three powers"
for "three times over" — which no non-word heuristic would ever have caught and which changes what
the sentence says.

#### Non-plate declines

- **@0170C `a poenitentibus malis`** — real word, on both plates, construes; *praesentibus* declined
  (see §(d)).
- **@0170C `timor utilitatis`** — real word, on both plates; *vilitatis* declined (see §(d)).
- **@0169C `post eum tum`** — redundant *tum*; both plates; rendered as printed.
- **@0172A `redemptus`**, **@0171A `igneus`** — case and gender mismatches with no English exponent;
  Pattern 9, no marker, logged so a sweep does not churn them.
- **@0171D Apollo for Mercury**, **@0173B `(Zac. II)`**, **@0173B `(Marc. XXIV)`** — Migne's own
  errors of fact and of citation, on both plates, reproduced verbatim.
- **@0177A `nocte totius`**, **@0174B the verbless `(ISID.)` sentence**, **@0168C `An diabolo dicit
  non nasci`**, **@0167B `quae de duabus super caput`** — elliptical or unconstruable as printed;
  rendered as closely as the words allow, no marker, no conjecture in the text.
- **The running head on archive p.93 prints `THOLOGICA`** for THEOLOGICA; Gallica f88 prints it
  correctly. Recorded only because it is a twentieth measurement of that copy's condition — running
  heads are not part of our TEI and nothing is owed.

#### Page feet — the checked zero, and the last page of the work

⚑ **Feet of all six pages inspected on both copies at full resolution: no apparatus anywhere in
cols 0167–0178.** No numbered note, no asterisk, no editorial line. Neither the raised asterisk of
@0103C (ink, refuted) nor anything of the kind occurs here.

⚑ **p.94 / f89 is the last page of the work**, and it was re-read on both copies at 300 dpi as the
launch message required, because a work's closing page is where Migne sets a note mid-page and the
earlier spot check was single-witness and at 150 dpi. **It is empty.** Matthew closes at
`Sic veniet quemadmodum vidistis eum euntem in coelum (Act. I).` in col. 0178D, a short centred rule
stands below it, and the remaining two-fifths of the leaf is blank paper on **both** copies. The
single-witness spot check is now confirmed by a second witness. There is no closing apparatus, no
colophon and no note to recover: **the Glossa's Matthew, and with it the last gospel in the
Glossa, ends where our chunk 0041 ends.**

---

# §10. THE BLIND POLARITY READ (step 4a) — four fenced readers, 42 chunks, 17 sites, 13 ours

Run after the merge, by four readers who were fenced from this file, from the pending-patch and
plate-read files, and from each other. **That fence is why the pass is worth its cost**: in the
2026-07-28 sweep every agent given the cruces file returned "all already logged" and found nothing,
while blind readers on the same works found four live defects.

**Yield by range: 3 sites / 11 chunks · 5 / 11 · 1 / 10 · 8 / 10.** The last range is the passion
and it is the richest, which is what the genre predicts. **Thirteen of the seventeen were OURS**,
and — the point of the whole step — **not one was visible to any mechanical check this pipeline
runs.** In every case nothing was added and nothing dropped, so parity, marker counts, band
punctuation and the ratio all passed; several times **the false reading was the smoother English**.

## The one marker the pass added

**`[sic: justitiam]` @0077D.** Migne prints *dum parit, **justitiam** habet* where the allusion is
Jo 16:21 *mulier cum parit **tristitiam** habet* — and his own next clause, four words later in his
own type, prints *Tristitia vestra vertetur in gaudium (Joan. XVI)*. Read at the plate before
firing, both copies, corners first (archive p.44 at 400 dpi, Gallica f39 at native resolution):
**both print `justitiam`**, so it is Migne's, and our Latin carries it verbatim, which is what makes
the marker writable at all.
⚑ **That column had already been read by the translating stint**, which found and refuted `Henoch`
on the same page. **A read column is not a read word.**

## The thirteen repairs, by class

**Mis-construal, nothing added or dropped (8):** @0085A *media … historialiter ultima fuit* — the
middle temptation was HISTORICALLY the last, against an English that contradicted its own clause six
words earlier · @0164C *aliorum virtutes, aliorum vitia sublevare* — *aliorum vitia* is the object,
not a second subject, so our page had vices doing the lifting · @0166A *sine qua non sunt virtutes*
— *qua* is feminine singular and is *fides*, so the English said "the virtues … without which there
are no virtues", self-contradictory in six words and with faith deleted from the sentence · @0151D
*Has Dominus pergens, Jerusalem … sublimat* — the object is *has*, the two towns whose etymologies
(*domus buccae*, *domus obedientiae*) the *quia*-clause then expounds as confession and obedience ·
@0155B *sicut de praesenti Ecclesia* attached to *repellitur*, not to *Lucas dicit* · @0154A *debuit
… signare* rendered "ought to have marked", which in English asserts he did not, against *unde et
mirabantur* · @0153C *Christi* pulled back onto *miraculorum*, so that "Christ's infants" — the very
phrase the sentence defines — vanished · @0176C "so great an interval" for *tanto intervallo*, which
made the clause explain *a longe* when it is explaining *juxta*.

**Negation relocated or mis-hosted (2):** @0130A *necdum … cum Christo ascendunt* — the `necdum` was
hung on the participle and the finite verb left affirmative, so the page said the newly-arrived
crowd **does** ascend with Christ, against the lemma itself (Mt 13:2, the crowd on the shore) and
against Migne twice more on the same plate · @0119C the splice tail *parva otiosaque dicta eum
lateant*, whose `lateant` is subjunctive, had become a flat assertion reversing the gloss.

**A case ending read wrong (1):** @0121A *Christus **aliis** praedicatur, et **ab aliis** recipitur*
— "preached **by** some" for "**to** some". The dative is fixed by the deliberate *ab* on the second
member and by the next clause, *sui respuunt, inimici accipiunt*.

**An invented supply carrying a polarity (1):** @0117A *Quia Synagoga laetitiam Dominicae
inhabitationis, etc.* — the verb is inside what the `etc.` cut away, and our English had supplied
"**[lost]**", while the surviving tail (*paruit in susceptione*) points the other way. **No verb is
ever supplied to complete the splice.**

**A subject supplied without warrant (1):** @0089A *idem utriusque … factus* had become "the same
**day**"; `factus` is masculine and the subject is *sermo*.

## ⛔ ONE FINDING DECLINED, AND IT IS THE DOCUMENTED FALSE POSITIVE

**@0173D `*Nihil tibi.*` rendered "Have thou nothing to do with that just man"** was reported as an
over-expansion, on the ground that every other lemma in the chunk is at Migne's length. **Declined.**
Mt 27:19 reads *Nihil tibi et justo illi*, so the lemma is **clipped**, and convention 3 renders a
clipped lemma as the phrase it stands for — Ruth's *Non te* → "Let no man see thee" is the precedent
the convention was written on. ⚑ The controlling ruling: **the defect is never expansion or its
absence, it is CONFORMATION**, and where a work treats the same stump two ways it is resolved **by
expanding, never by contracting its twin**. Three readers in one earlier batch raised this same class
and all three were declined; a control has to be the same class as the thing it controls, and a
complete one-word lemma is not the same class as a clipped one.

## Deliberately left alone

⚑ **No negative was supplied at @0119C**, although the Glossa on Luke in this repo prints the same
sentence as *NEC parva NEC otiosa dicta eum lateant* and our `otiosaque` does look like the fused
residue of *nec otiosa*. **A rendering found in another BOOK is a hint, never an authority** — each
book is its own plate, and this plate prints no negative.

⚑ **The lemma `*Infantium et lac*` @0153C is left as it stands** and the question recorded rather
than decided: Ps 8:3 reads *infantium et **lactentium***, so "sucklings" may be convention 3 doing
its job on a clip, or may be conformation against a *lac* Migne meant — and the gloss argues from
BOTH words (*Lactentes quasi lacte … quae dicuntur lac*). Two readings both construe; per the
standing rule that is a crux, not a silent choice.

⚑ **Three readers each flagged "silently normalised" plate defects with no `[sic:]`** (fifteen
instances between them). **All are the filed TEI-patch class**, where the marker cannot be written
until the patch lands because it would have to quote a word no longer in our Latin. A fenced reader
cannot know that, and each said so. **Re-deriving a settled question is the price of blindness and
it is worth paying.**

⚑ One reader ran the corroborating count and recorded that **every chunk carries more English
negatives than Latin, with no deficits anywhere** — logged so the counts could never later be read
as a clean bill of health.
