# Cruces — 8967 *Glossa ordinaria*, Liber Psalmorum, chunks 0030–0034 (cols 0901D–0911C)

Psalms XXXIX–XLIV. Band A, stint covering chunks 0030–0034.

## 0. Span reconciliation — MY LATIN AGREES WITH THE BRIEF

`data/briefs/8967-lemmata-0030.txt` heads its inventory **267 spans**. Counted directly off my
own Latin (body only, frontmatter excluded): **0030 = 47 · 0031 = 41 · 0032 = 63 · 0033 = 53 ·
0034 = 63 → 267.** Exact agreement, chunk by chunk and in total. No missing head-of-range spans,
no borrowed tail. The English carries 267 spans in the same order.

⚑ The brief's **column labels** were stale when I began (a line carrying anchors but no spans never
advanced the band, so spans inherited the chunk's opening column) — e.g. VERS. 7 and VERS. 8 of
Psalm XXXIX were filed under 0902C when they stand under 0902D. The coordinator corrected the file
mid-stint. **Membership was never affected**, and I located every span from my own Latin, not from
the labels.

Other parity, all 1:1 against the Latin twin: column anchors (7 · 5 · 9 · 9 · 9, verbatim and in
place beside the same word), `[n:]` notes (35 · 28 · 39 · 34 · 34, byte-identical and in order),
question marks (0 · 1 · 7 · 1 · 0). Zero em-dashes supplied.

## 1. PLATE READS — FOUR NEW PAGES, cols 0903A–0910D

Nobody had read 0903–0910. I read all four leaves before firing anything. Recorded in
`data/plate-reads.json`; PDF page = (column + 11) / 2, corners checked first on each.

| page | cols | left col clipped? |
|---|---|---|
| 457 | 903 / 904 | 903 clean (3 mod 4) |
| 458 | 905 / 906 | **905 CLIPPED** (1 mod 4) |
| 459 | 907 / 908 | 907 clean (3 mod 4) |
| 460 | 909 / 910 | **909 CLEAN — and 909 is 1 (mod 4)** |

⭐ **A third counterexample to the withdrawn mod-4 rule.** Col 909 is congruent to 1 (mod 4) and its
line-openings are whole (*Obdormis. Negligere videris.*). Col 905, also 1 (mod 4), is clipped. The
congruence predicted the risk on one leaf and mispredicted it on the other, in the same range. The
coordinator's ruling — predict with it, never decide with it — is confirmed once more from a leaf
it would have wrongly written off.

Page 456 (cols 901/902) was already recorded as read; I re-opened it anyway at 500 dpi, because the
recorded read carried no findings against my own chunk's words and my chunk opens under 0901D.

## 2. MARKERS FIRED — five `[var:]`, zero `[sic:]`

Every one stands mid-line in a column I opened at the plate. Each is a divergence between what
Migne PRINTS (plate and our TEI agreeing) and the Clementine, cited from
`sources/vulgate/clementine-flat.txt`, never from recollection.

1. **0904D · `*In fine intellectus.*`** (Ps XLI titulus) — Clementine Ps 41:1 `In finem. Intellectus
   filiis Core.` Migne has the **ablative** *fine* for the accusative *finem*, and drops *filiis
   Core*. Material: §2 of the launch brief settles `In finem` as "Unto the end" precisely because
   the Glossa argues from *finis* as a terminus reached; the ablative says "**at** the end," not
   "unto." Plate p. 457, col 904D, mid-line, clean column.
2. **0907D · `*Si vos persecuti fuerint in una civitate, fugite in aliam.*`** — Clementine Mt 10:23
   `Cum autem persequentur vos in civitate ista, fugite in aliam.` Wholly different protasis
   (conditional perfect subjunctive against a temporal future, *una civitate* against *civitate
   ista*). Plate p. 459, col 907, clean.
3. **0908B · `*In similitudinem gentium. [n: (Ibid.)]*`** — Clementine Ps 43:15 `in similitudinem
   gentibus`, **dative**. ⭐ The decisive evidence is internal: the gloss's own paraphrase two words
   later reads *gentibus sunt appositi* — it expounds the DATIVE while the lemma above it prints the
   genitive. That is 7a″'s pattern with the halves reversed, and it makes the divergence material.
   Plate p. 459, col 908, clean.
4. **0910B · `*Pro his qui commutabuntur ex filiis Core.*`** — Clementine Ps 44:1 `pro iis qui
   commutabuntur. Filiis Core`. Migne's added **ex** turns the sons of Core from the addressees of
   the psalm into the source out of which the change is made, and the gloss beside it is arguing
   exactly about who is changed (*multi de suis inimicis supponent se sibi*). `his`/`iis` alone
   would not have earned a marker; the preposition does. Plate p. 460, col 910B, clean.
5. **0911B · `*Virgines et proximae.*`** — Clementine Ps 44:15 `virgines post eam ; proximae ejus`,
   with a semicolon and no connective. The gloss turns on the connective: *post enumeratio partium
   est distincta, cum dicitur: Virgines et proximae* — the *et* is what makes the enumeration
   "distinct," so this is the gloss arguing from the word. Plate p. 461 (read by another stint,
   col 911 clean), confirmed against my own re-read of the page.

**No `[sic:]` is owed anywhere in this range.** Every non-word and every unconstruable form in my
Latin turned out at the plate to be Corpus Corporum's, not Migne's — see §3. Conversely, every
defect Migne actually prints in these ten columns has already been tidied away by CC before it
reached us, so there is nothing left in our Latin to carry.

## 3. ⛔ CORPUS CORPORUM NORMALIZATION — 28 SITES IN TEN COLUMNS, AND THE CLASS RUNS BOTH WAYS

This is the largest finding of the stint and it is not a translation matter. Reading the plate
word for word against our TEI over cols 0902–0910 turned up **28 places where our Latin is not what
Migne prints**. None is a marker; all are TEI-patch candidates in the sense of
`translation-style.md` § "Source patches" and of the `sordescat`→`sordescet` patch already in
`data/tei-patches/8967.json`. I have NOT patched them: eight stints are running on this work
concurrently and `chunk-work.mjs` rewrites every chunk, so the patch must be applied once, after the
band merges, and the chunks re-cut then.

⚠ **Our English mirrors the Latin twin in every one of these, not the plate** — except the two
marked ⭐ below, where our Latin holds no word at all to render. When the patch lands, these
sentences must be re-read against it.

### 3a. CC changed a word Migne prints (15)

| col | leaf | Migne prints | our TEI reads | note |
|---|---|---|---|---|
| 0902C | p. 456 | `Haec sunt **miro** Dei` | `mira` | CC supplies the concord Migne lacks |
| 0902C | p. 456 | `post **locutos** egomet` | `locutus` | |
| 0902D | p. 456 | `enumerare **rossit**` | `possit` | broken *p* on the plate |
| 0902D | p. 456 | `fecisti **qui** velles` | `quid` | |
| 0903C | p. 457 | `de secundis : Qui **dicant** mihi` | `dicunt` | conformed to the VERS. 16 lemma above |
| 0903C | p. 457 | `VERS. 17.-- Et **dicunt**.` | `dicant` | ⚑ **the same pair swapped the OTHER way**, this one toward the Clementine (Ps 39:17 `et dicant`) |
| 0903D | p. 457 | `ne **qui** gloriam` | `quis` | |
| 0903D | p. 457 | `unius **homini** vox` | `hominis` | |
| 0903D | p. 457 | `VERS. 3.-- **Dominum** conservet.` | `Dominus` | ⛔ the Clementine's own form at Ps 40:3 |
| 0904A | p. 457 | `infirmitas **durio** superetur` | `duris` | |
| 0905A | p. 458 | `fontem **ad** bibendum` | `ab` | mid-line, legible in the clipped column |
| 0906A | p. 458 | `quod **notantur** in modico` | `notatur` | |
| 0904C | p. 457 | `alii fratres **in aliquid** sperabant` | `in illum aliquid` | CC supplies an object Migne does not print |
| 0908D | p. 459 | `**Nocere** dicitur Deus` | `Noscere` | ⭐ **CC REPAIRED a genuine Migne defect** — the sentence needs *noscere*, and CC gave it |
| 0910C | p. 460 | `odit Deus **iniquitetem**` | `iniquitatem` | ⭐ a NON-WORD, with *iniquitatem* correctly set nine words earlier in the same sentence. **Had CC not tidied this, it is a `[sic:]` on Migne's own type.** |

⛔ **Two of these are undetectable by any check this edition runs**, and they are the reason this
section is long. `Dominum`→`Dominus` (0903D) and the VERS. 17 `dicunt`→`dicant` (0903C) both move
Migne's text **onto** the Clementine's reading — so a Vulgate collation sees agreement where the
plate has divergence, exactly the `judicabit`→`judicavit` mechanism recorded in CLAUDE.md 8a. A
`[var:]` on either was made impossible, not merely wrong, before I ever saw the file.

⭐ And the class runs in **both** directions on one leaf-pair: at 0902C CC manufactured a concord
Migne does not print (*miro*→*mira*), and at 0908D it repaired a real corruption (*Nocere*→
*Noscere*). Neither direction is detectable from our Latin, because both leave a well-formed word.

### 3b. CC changed the words Migne sets, not just their spelling (2)

- **0904A** — Migne: `haec bona temporalia : quasi, facit haec doloribus plena, ne eis spes
  habeatur.` Our TEI: `haec bona temporalia: sed Deus facit haec doloribus plena, ne in eis spes
  habeatur.` CC has replaced Migne's second `quasi,` with **`sed Deus`** and inserted **`in`**. This
  is much larger than the ordinary letter-level class and I flag it as the one entry here that
  deserves a second eye before patching: it is the only site in the ten columns where our Latin
  carries words the plate does not carry at all. The English follows our twin ("but God makes them
  full of sorrows"); on the plate the clause is verbless and elliptical.
- **0902D** — Migne: `*Multiplicati sunt numerum.*` Our TEI: `*Multiplicati sunt super numerum.*`
  CC has **added `super`**, which is the Clementine's reading at Ps 39:6. Another member of the
  invisible class: the addition creates agreement with the Vulgate where the plate diverges.

### 3c. CC changed Migne's punctuation (9)

0903B `bona dicit malo, animo` (comma dropped) · 0903C `professio in aeternum. gaudentes` (full stop
dropped) · 0903D the head `PSALMUS XL.` **with** a final period, dropped, so our head reads
`PSALMUS XL` and my English head reads `PSALM XL` to match · 0904C `malus ingressus. malus egressus.`
(full stop → comma) · 0906A `nemo. confitetur` (Migne's own mid-sentence full stop, dropped) ·
0907B `Deus auribus.` (comma inserted, giving `Deus, auribus.`) · 0910A `vel de populo ad populum.`
(terminal stop dropped, so my English paragraph also ends without one) · 0911B `idolorum
cultoribus.` (full stop → comma) · 0904D `Hieronymum..` (double stop reduced to one).

⚑ The `PSALMUS XL.` case is worth naming separately: **a head is not a spelling.** Our Latin prints
`## PSALMUS XL` and Migne prints `PSALMUS XL.`, and the heads array in the frontmatter carries the
period-less form. I have mirrored our twin rather than the plate, because heads are checked against
it, but the plate reading is the one to restore.

### 3d. ⭐ Two sites where our Latin holds nothing to render — the English follows the PLATE

These are the only two places where I have not mirrored the twin, and I say so here because a
silent departure is exactly what this file exists to prevent.

- **0902B — `In Hebraeol`.** Our TEI prints a non-word. **The plate prints `In Hebraeo`**, clean,
  mid-line, in a clean column (p. 456). Pattern 7's non-word rule would carry it in italics under a
  `[sic:]`, but a `[sic:]` accuses Migne's type and I have seen that his type is sound: firing one
  would be a false public claim of exactly the kind CLAUDE.md 8a exists to stop. The English reads
  **"In the Hebrew."** ⚑ This is one of the three unread `In Hebraeo` clauses named in launch brief
  §3; it is now read, and no Hebrew type stands at this site on the plate — Migne prints the Latin
  phrase only, so there is nothing for CC to have dropped and nothing to recover.
- **0902D — `ἀποπομπάιohgr;ι`.** Our TEI carries an unconverted SGML entity: `&ohgr;` is Greek
  small omega, so CC's rendering of the single character `ῳ` (omega with iota subscript) has broken
  into `ohgr;ι`. **The plate prints `ἀποπομπάιῳ`**, read at 500 dpi on p. 456. The word is
  untranslated Greek in both columns either way, so nothing is gained by printing markup debris at
  the reader; the English carries the plate's `ἀποπομπάιῳ`. It is the dative of ἀποπομπαῖος, the
  LXX's word for the scapegoat at Lev 16, which is precisely what Migne's own gloss says next
  (*id est, emissario*).

## 4. RENDERINGS AND WHY — the calls a reader will want argued

### 4a. The settled axes, and the instrument check before reporting anything

`gentes` family: **9 occurrences, all rendered Gentiles.** 0902A `gentes idola colentes` · 0908A
`traditi gentibus in servitutem` · 0908B `gentium` / `gentibus sunt appositi` · 0908D `fides tua
gentibus` · 0908D `sed gentibus, quae putant mortuum` · 0910D `gentes designantur`, `Tyri, gentium`,
`gentes scilicet`. Every one stands in a plain Judaei/gentes opposition — three of them name the
Jews or Judaea in the same sentence — so none is the generic "nations" case. Singular `gens` at
0906D (`Gens non sancta`) → **nation**, per the axis. `pagani` at 0904D → **pagans**, a fourth word.

⚑ **Instrument checked before reporting, as the shared brief requires.** A raw `\bturb` grep returns
3 hits in my range and **not one is `turba`**: they are *turbatur* (×2) and *turbari*, the verb
*turbare* — the exact false positive the brief names. Zero `turba`, zero `multitudo`, zero `natio`
(and zero of its *-natio* look-alikes), zero `daemoni-`, zero `mysterium`/`sacramentum`. One
`diabolo` (0908C) → **devil**.

`usque ad`: **23 occurrences, and I decided each one from what stands on either side.** All 23
follow `etc.,` and open an italic span — every one is the abridgment formula, rendered **"as far
as"**. There is no Sap-8:1-style look-alike in this range (addendum D checked, not assumed). Two
carry Migne's comma inside the span (`*usque ad,*` at 0905A and 0905C) and are rendered
`*as far as,*`, comma inside the italics.

`In finem` → **"Unto the end"** (0901D, 0903C, 0906C, 0909B), never "for the choirmaster".
`In fine` at 0904D → **"At the end"**, because Migne prints the ablative; see marker 1.
`Diapsalmus` at 0907D → **"Diapsalmus"**, roman and unanglicized. ⚑ Note the FORM: Migne prints the
Latinised nominative *Diapsalmus*, not *Diapsalma*, and prints it in **roman, not italic**. The
launch brief's rule ("italic as Migne sets it") therefore yields roman here, and italicising it
would have added a 268th span. The stint at 0911A–0912D independently confirmed the same form one
column later.
`Psalmus David` at 0906C → **"a psalm of David"**; no `Psalmus ipsi David` falls in this range.

### 4b. Unexpressed subjects — every supplied pronoun, named

- **0905B `dilatavi super seipsam`** — "I have spread **it** out above itself." *It* = **animam
  meam**, from the lemma `Effudi` above (Ps 41:5 *effudi in me animam meam*), not from the sentence.
  `seipsam` is feminine and fixes it.
- **0906A `Qua ad me turbatur anima`** — "*Whereby* the soul is troubled toward me." Rendered
  literally on *Qua*. The obvious conjecture is **Quia** ("because"), and the plate prints `Qua`
  (p. 458, col 906A, clean), so this is Migne's and not ours. I did **not** take the conjecture: it
  would be a silent repair, and the sentence construes after a fashion as printed.
- **0908C `quod a circumstantibus irrogat`** — active singular verb with no expressed subject.
  Rendered "which **one** inflicts from among those standing round." The subject is the *vicinus* of
  the previous clause. Flagged rather than smoothed.
- **0910A `Et quia deducet te inoffense`** — "And because **it** shall lead thee on without
  stumbling." *It* = **dextera tua**, from Ps 44:5 (*deducet te mirabiliter dextera tua*), which is
  the verse the whole *Regna* gloss is expounding. Nothing in the sentence names it.
- **0908B `quando eos comparibus poenis affecerunt`** — "when **they** afflicted them." *They* = the
  **gentes** of the lemma; *eos* = the martyrs.
- **0910B `supponent se sibi`** — "shall put themselves under **him**," *sibi* reflexive to the
  psalm's *te*, the bridegroom, not to the enemies.

### 4c. Negation — each printed negative, and the word it sits on

Test 2 run word by word; the trigger population of 2a (a negative on a verb with a quantifier or
correlative nearby) fires at three sites and all three are resolved from the sentence's own
structure, not from what reads well:

- **0909C `Non sono, qui transit, comparat Verbum: sed scripto, quod manet.`** The `non` sits on
  **sono**, not on *comparat* — proved by the `sed scripto` correlative, which supplies the
  alternative term of the comparison, not an alternative verb. English: "He compares the Word **not
  to sound**, which passes away, **but to writing**." Had it floated onto the verb ("he does not
  compare") the *sed* clause would have nothing to attach to.
- **0909C `quia non aliud post aliud, sed omnia simul in uno Verbo aeterno`** — `non` on **aliud
  post aliud**, again fixed by `sed omnia simul`.
- **0910B `Nemo sibi multum de misericordia praesumat, blandiatur`** — Migne prints **no negative**
  on *blandiatur*; `Nemo` governs both jussives asyndetically. English: "Let **no one** presume much
  to himself concerning mercy, **or** flatter himself." The "or" carries *Nemo*'s scope across; it
  is not a supplied negation, and writing "let him not flatter himself" would have added a `non`
  Migne does not print.

Not in the trigger population, resolved as printed: **0909D `quae non sub cruciatu humano cogitat
quod ... divulgat`** — I kept the printed order ("which does not under human torment devise what it
divulges") rather than resolving the scope, because there is no correlative to settle whether the
`non` governs *cogitat* or the prepositional phrase. The English preserves the ambiguity that the
Latin has; naming it here is the honest treatment. Carried without smoothing elsewhere:
`non hominem` (0901D) · `non me` (0901D) · `non turpe, non theatrale` (0902B) · `qui non temporalia
sperat` (0902B) · `non est quod putatur` (0902C) · `Nulli auctores` (0902C) · `noluisti` /
`noluit` / `non audit` (0902C–D) · `non petisti` (0902D) · `non parva` / `non prohibebit` /
`non sim piger` (0903A) · `Non abscondi` (0903A) · `non diffidens` (0903B) · `non sufficit` /
`Ne tardaveris` / `Nisi breviati` (0903C) · `non petentibus` (0903C) · `Ne putes` / `ne ... superetur`
/ `ne ... spes habeatur` / `ne ... deserti` (0904A) · `Non solum aperti inimici` (0904B) ·
`Non audent` (0904B) · `nonne habet` (0904C) · `nondum ad damnationem` (0904C) · `Non amaritudo`
(0905B) · `non extra` (0905B) · `Deum non videam` (0905B) · `nihil est in mundo` / `si non modo`
(0905C) · `non obsistam` (0905D) · `nisi vitia carnis essent` (0905D) · `Nemo currit ... nisi ...
nisi` / `nemo confitetur nisi` (0906A) · `non in superbis` (0906A) · `Non petit peccata sua`
(0906C) · `Gens non sancta` (0906D) · `ne ab eis corrumpatur` (0906D) · `non curat` (0906C) ·
`et non patitur` (0907A) · `non amentur` (0907B) · `ne putetur ambigua` (0907B) · `Non juvenes`
(0907B) · `auctor non mutatur` (0907C) · `Non enim in arcu meo sperabo` / `gladius meus non
salvabit me` / `ne nos traherent` (0907C) · `non tamen obliti Dei` (0907D) · `nullus acquirit` /
`vel nullus pro eis` (0908A) · `quia non transitorie` (0908A) · `non erant in nobis` (0908A) ·
`Non recessit` (0908A) · `non permisisti` (0908C) · `non obliviscuntur` (0908C) · `Non pro
criminibus` (0908D) · `non dormire` / `non sibi` / `non persequerentur` (0908D) · `Hactenus non
obliti` (0908D) · `etsi nesciamus` (0909A) · `non das spiritum` (0909A) · `non habet ultra`
(0909B) · `nihil sit in opere quod non prius fuit` (0909C) · `non aliud` (0909C) · `Non deauratis`
(0911B) · `Vel non in circumcisione` (0911A). **Every one is on the page, and none was added.**

### 4d. Lemmata I checked against the Clementine and found in AGREEMENT — the negative list

A findings list alone cannot be told from a report by an agent that never looked, so: these are the
multi-word lemmata I collated verbatim and found identical to the Clementine, spelling variation
apart. `Exspectans exspectavi` (Ps 39:2) · `Mirabilia tua` (39:6) · `Multiplicati sunt super
numerum` (39:6, but see §3b — our text agrees only because CC made it agree) · `Sacrificium et
oblationem noluisti` (39:7) · `Aures autem perfecisti mihi` (39:7) · `In capite libri scriptum est
de me` (39:8) · `Domine, tu scisti` (39:10) · `Non abscondi` (39:11) · `Misericordia tua` (39:12) ·
`Qui volunt mihi mala` (39:15) · `Ne tardaveris` (39:18) · `Intellectus filiis Core` (41:1) ·
`Qui intelligit` (40:2) · `Dominus conservet` (40:3 — agrees only because CC made it agree, §3a) ·
`Et vivificet` (40:3) · `Dominus opem` (40:4) · `Inimici mei dixerunt` (40:6) · `Et si
ingrediebatur` (40:7) · `Egrediebatur foras` (40:7) · `In idipsum` (40:8) · `Et retribuam eis`
(40:11) · `Quemadmodum desiderat` (41:2) · `Quando veniam` (41:3) · `Fuerunt mihi lacrymae meae
panes` (41:4) · `Haec recordatus sum` (41:5) · `In locum tabernaculi` (41:5) · `In voce
exsultationis` (41:5) · `Quare tristis` / `Quare conturbas` (41:6) · `Ad meipsum` (41:7) ·
`Propterea memor` (41:7) · `De terra Jordanis` (41:7) · `Abyssus abyssum` (41:8) · `Apud me oratio`
(41:9) · `Quare oblitus` (41:10) · `Dum confringuntur ossa` (41:11) · `Judica me` / `Et discerne`
(42:1) · `Quare tristis incedo` (42:2) · `Emitte lucem tuam` (42:3) · `Et introibo` (42:4) ·
`Confitebor tibi in cithara` (42:4) · `Salutare vultus mei` (42:5) · `Ad intellectum` (43:1) ·
`Deus auribus` (43:2) · `Sed dextera tua` (43:4) · `Tu es ipse rex meus et Deus meus` (43:5) ·
`Non enim in arcu meo sperabo` / `gladius meus non salvabit me` (43:7) · `Nunc autem repulisti`
(43:10) · `Vendidisti populum tuum sine pretio` (43:13) · `Opprobrium vicinis` (43:14) ·
`Venerunt super nos` (43:18) · `et declinasti` / `a via tua` (43:19) · `humiliasti nos` (43:20) ·
`Si obliti sumus nomen Dei` (43:21) · `Propter te mortificamur` (43:22) · `Et tribulationis`
(43:24) · `In terra venter` (43:25) · `Speciosus forma` (44:3) · `Populi sub te cadent` (44:6) ·
`dilexisti justitiam` / `Et odisti` (44:8) · `Myrrha et gutta` (44:9) · `Filiae regum` (44:10) ·
`Astitit regina` (44:10) · `Audi, filia` (44:11) · `Et concupiscet rex` (44:12) · `Omnis gloria` /
`Ab intus` (44:14) · `Adducentur regi` (44:15) · `Pro patribus tuis nati sunt tibi filii` (44:17).
Outside the Psalter: `nomen quod est super omne nomen` (Phlp 2:9) · `Semel locutus est Deus`
(Ps 61:12) · `Quod factum est in ipso vita erat` (Jo 1:3–4) · `eructat verbum` (Ps 18:3) — all four
verbatim.

### 4e. Divergences from the Clementine that I DECLINED to mark, with the reason

⛔ Twelve of Luke's seventeen corrections came off a declined list, so this section is not filler.

1. **0902C `*Non est qui similis tibi.*`** — Clementine Ps 39:6 `non est qui similis **sit** tibi`.
   Declined: an **ellipsis in a clipped lemma**, not a change of reading. The Glossa cuts lemmata
   mid-phrase constantly (`Lacu.`, `Carmen.`, `Nomen.`), and nothing in the gloss under it turns on
   the copula. Marking it would put a `[var:]` on the abridgment's habit.
2. **0908A `*Derisum his qui in circuitu.*`** — Clementine Ps 43:14 `derisum his qui **sunt** in
   circuitu **nostro**`. Declined for the same reason: the lemma simply stops. The gloss expounds
   *derisus* and *contemptus*, neither of which is at issue.
3. **0909A `*Quare oblivisceris?*`** — Clementine Ps 43:24 runs `Quare faciem tuam avertis?
   oblivisceris inopiae nostrae et tribulationis nostrae?` Migne **splices two clauses into one**.
   Declined: a conflation of adjacent words of the same verse is the abridgment cutting, and the
   gloss immediately treats `Et tribulationis.` as its own lemma, exactly as the Clementine
   divides. Nothing is asserted about another text.
4. **0908D `*Exsurge, quia propter te mortificamur.*`** — a conflation of Ps 43:23 and 43:22, both
   verbatim. Declined: the gloss says outright that it is joining them (*et ut perseveremus:*).
5. **0908A `*Dedisti nos tanquam oves escarum.*`** — Clementine `tamquam`. Declined: `tanquam` is
   an attested orthography of the same word, Pattern 9's exempt class. Same for `lacrymae`/
   `lacrimae` at 0905B, `coelum`/`caelum`, `charitas`/`caritas`.
6. **0903C `*Qui dicunt mihi: Euge, euge.*`** — Clementine Ps 39:16 closes `Euge, euge **!**` with
   an exclamation. Declined: Pattern 8 governs the plate's own marks and Migne prints a full stop;
   a difference in a received text's punctuation is not a divergence of reading.
7. **0910B `*Pro his ...*` — the `his`/`iis` half.** Fired the marker on `ex`, declined it on
   `his`. `his` for `iis` is a routine orthography of the period; `ex` is a preposition that changes
   the relation. The marker names only what it can stand behind.
8. **0906C `*Modicum quidem contristavi illum,*` attributed to Isaias.** Not in the Clementine
   verbatim under that name (nearest is Is 57:17, which shares no wording). Declined: this is the
   Glossa quoting a father's paraphrase, and `[var:]` compares Migne's scripture with the received
   text of the verse he cites — here I cannot identify the verse he cites, and Pattern 14 forbids
   speculating. Crux, not marker.
9. **0904D `*vere, vere,*` as Aquila's rendering.** Not in the Clementine, and should not be: it is
   a report of a translator's version, not a citation.
10. **0902D `*Ecce venio*` (Apc 3:11 etc.).** Verbatim in several places; the psalm's own Ps 39:8
    also reads `ecce venio`. No divergence.
11. **0905A `*Filii Core,*` glossed `filii calvi`.** An etymology, not a citation.
12. **0907D `*Salvasti,*`, 0910A `*Regna.*`, and the other 96 single-word spans.** Checked in place
    against the verse each stands in; all are the verse's own word.

### 4f. Passages read clean, and hard calls where two readings both construe

- **0902D `vel, possunt esse duae dictiones pro peccato.`** Two readings: (a) "*pro peccato* may be
  two words" — the phrase just discussed is a pair, not a compound; (b) "there may be two words for
  sin." **I took (a)**, because the sentence's whole context is the lemma `Pro peccato.` and its
  relation to `oblationem` two clauses above, and because Migne prints `pro peccato` **unitalicized**
  here where he italicised it as a lemma four words earlier — which is why the English could not
  set it in italics without adding a 268th span. (b) loses because nothing in the passage is
  counting synonyms. Recording the rival because the apparatus never shows the reader what was
  weighed.
- **0903B `Et qui bona dicit malo animo, et qui mala dolose laudando, uterque malus est.`** The
  second member has a **gerund where a finite verb is wanted** (*laudando* for *laudat*). The plate
  prints it so (p. 457, col 903B, clean). Rendered with the anacoluthon visible — "and he who evil
  things by praising them deceitfully" — rather than repaired to "and he who praises evil things
  deceitfully," which would smooth away a fact about this printing. No `[sic:]`: *laudando* is a
  real word in its own grammatical slot, which Pattern 12 explicitly exempts.
- **0907D `Enumerat mala quae hic fecerunt boni, non tamen obliti Dei.`** *fecerunt* — "which the
  good **did** here." The sense the passage wants is plainly "suffered" (the whole psalm is the
  martyrs' complaint), and *pertulerunt* or *passi sunt* is the obvious conjecture. **The plate
  prints `fecerunt`** (p. 459, col 907D, clean column, mid-line), so it is Migne's, and Pattern 7
  forbids reading the conjecture into the English. Rendered literally, conjecture recorded here.
- **0905C `Qui, si investigas, nihil est in mundo quare hoc debeas.`** *Qui* stands where *Quia* is
  wanted. Rendered literally ("Who, if thou searchest, there is nothing..."). Real word, occupying a
  slot, so no marker; the conjecture is *Quia*.
- **0903B `Complaceat, Trinitatem personarum; tibi, singulariter unitatem essentiae signat.`**
  ⚑ **The argument does not survive translation and the reader should know it.** Cassiodorus reads
  the Trinity out of the *com-* prefix of *complaceat* and the unity out of the singular *tibi*.
  English "May it be pleasing" carries no prefix, so the first half of the argument is invisible in
  our column and legible only in the Latin one opposite. I have not glossed it in the text — that
  would be an editorial act — but it is the clearest case in this range of an argument that lives in
  the Latin word.
- **0902B `Haec falsa, sed opera tua mirabilia, coelum, terra, elidit superstitiones.`** Singular
  `elidit` against a plural subject. Rendered with the singular kept ("dashes superstitions to
  pieces"), because English has an exponent for verb number and normalising it would hide a fact
  about the plate. No marker: this is not carried type, it is our English rendering his reading.
- **0904A the `*Universum* enim *stratum,*` pair.** Two italic spans with `enim` between them.
  English word order wants "for" first, which would leave the two spans adjacent and read as one
  run. I kept a word between them — "*The whole* indeed *couch,*" — so the two lemmata stay visibly
  distinct. `lectum` → **bed** and `stratum` → **couch** throughout, kept apart because Ps 40:4 sets
  them in one verse and the gloss glosses each separately.
- **0906A `*modico. Jordanis. [n: (Ibid.)]*`** — one italic run in our TEI containing two lemmata
  and a note. **The plate sets `in modico Jordanis` as a single italic phrase with no interior
  stops** (§3a). Our English mirrors the twin's structure, so it reads "in *the little one.
  Jordan.*", which is odd; when the patch lands it should become one phrase.
- **0904C the stray full stop after `[n: (AUG.)].`** Reproduced verbatim. Migne's compositor, not
  ours.
- **Migne's verse numbering skips**, all reproduced as printed and none reordered: Psalm XXXIX runs
  14 → 16 (no VERS. 15) and prints `VERS. 12.` without the `--` every other address carries; Psalm XL
  skips 5 and 12; Psalm XLIII skips 3, 6, 9, 16 and 25; Psalm XLIV skips 16.
- **0903C `## PSALMUS XL`** — the only head in the range without a final period. Mirrored as
  `## PSALM XL`; the plate has the period (§3c).

## 5. UNREADABLE ON THIS COPY — one site, logged for the second witness

**0905A `excrescentibus pilis et cornibus`.** Column 905 is clipped at the inner margin, and the
line break falls exactly at the clip: the plate shows `excrescentibus` ending one line and
`t cornibus` opening the next, so whether Migne sets `pilis` cannot be settled here. Our TEI's
reading is probably right — the same sentence ends `cornua et pilos deponit` — but "probably right"
is not a plate read, and no marker rests on it either way. Second witness: Gallica
`ark:/12148/bpt6k5505319w`, **f = (column + 1) / 2 → f453**, one IIIF request.

## 6. NOT DEFECTS — raised, checked, and closed

- **`amicabus`** at 0911B (`laudatur sponsa ab amicabus`). Looks like a slip for *amicis*.
  **The plate prints `amicabus`** (p. 461, col 911, clean) — the archaic feminine dative-ablative
  plural on the *filiabus*/*deabus* pattern, and exactly right here, since the friends of the bride
  are women. Migne's, correct Latin, no marker, no conjecture.
- **`Diapsalmus`** for *Diapsalma* at 0907D — plate-confirmed, and confirmed again by the
  neighbouring stint at 0912A. Migne's form, not a corruption.
- **`non declinasti (alia littera)`** at 0908C — **Migne's own variant note**, printed inline in his
  voice. Reproduced as printed; no marker of ours is stacked on it, per the shared brief's rule
  about Migne's own apparatus.
- **`In labiis`, `Dico opera`, `Lingua, calamus`** at 0909C — flagged by the pre-scan as not in the
  Clementine. All three are fragments of Ps 44:2–3 cut at a word boundary (*diffusa est gratia in
  labiis tuis*; *dico ego opera mea regi*; *lingua mea calamus scribae*). No divergence.
- **`(ID.)` and `(Ibid.)`** — 39 of the 175 sigla in this range. Passed through verbatim and
  **not expanded** to the names they point at, per launch brief §4.
