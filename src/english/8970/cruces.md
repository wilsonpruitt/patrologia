# *Glossa ordinaria*, **Liber Tobiae** (PL 113, 0725B–0732C) — cruces

Translated 2026-08-18, one translator, 3 chunks (2,567 Latin words), on Opus.
`verify-english.mjs` clean: columns, notes and sections aligned, no duplicate paragraphs.

**Apparatus: 4 `[var:]` · 4 `[sic:]` · 2 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
57 `[n:]`** (29 / 19 / 9, exact parity with the Latin twins).
Structure: CAPUT PRIMUM → CAPUT XIV, all fourteen heads present.
**Guillemets: 76 `«` / 72 `»`, 1:1 with the Latin. Four quotations are UNCLOSED in Migne
and stay unclosed** (§3). **Italics: 17 `*usque ad*` + 2 etymological glosses, 1:1.**
**Question marks: ZERO in the Latin, zero in the English.**

---

## §1 · CONVENTIONS THIS BOOK SETTLES — for 8948, Judith (8960), and the guillemet books to come

Ruth (8968) is the Glossa pilot and its §1 governs everything here unchanged: `VERS. n.--`
passes through verbatim; the lemma is Englished; a fragmentary lemma is rendered as the
phrase it stands for; the attribution sigla are ordinary `[n: …]` notes, contents
unanglicized. **This work re-opened none of that.** What follows is what Ruth did not have
to decide, because Ruth's plate has no guillemets at all.

### (a) The guillemet lemma — marks are the plate's, contents are Englished

Migne sets Tobit's lemmata in **guillemets, not italics** (Ruth's and the PL 114 epistles'
are italic). This changes the typography and nothing else:

- **The marks are sacred and 1:1** — every `«` and `»` stands where Migne sets it, with his
  spacing, and the counts match the Latin twin exactly (Pattern 6, `verify-english` check 7).
- **The contents are Englished**, exactly as an italic lemma is. Corpus precedent is shipped
  work **8930** (*Commentaria in Cantica*, PL 112), where a guilleted scripture quotation
  has its words translated and its marks and spacing untouched. Followed here without
  variation.
- **A note inside a guillemet span stays inside it**, in Migne's position — this book does it
  constantly: `« Omnia primitiva [n: (ID., ibid.)]. »`, `« Latum mandatum tuum nimis
  [n: (Psal. CXVIII)], »`. So do column anchors: **0728A falls INSIDE the Matt. 3:2
  quotation** (*appropinquavit enim [0728A] regnum coelorum*) and is reproduced inside it.
- **Migne's punctuation inside the marks rides as printed**, including the odd ones:
  `« Et factum est. » etc.` sets a full stop inside the guillemets before *etc.*, and the
  English does the same.
- **`« Nolite, pueri, effici, etc. »`-type commas are his, not ours.** Where Migne's commas
  around a word would change its syntax, render the construction the Latin bears and log it
  (§4, 0726B).

### (b) `*usque ad*` → `*as far as*` — settled, not re-opened

Migne's abridgment formula (*etc., usque ad …* = quote the head of Bede's sentence, skip,
resume at these closing words). Englished in its own italic span, per shipped work **8978**
(`cruces.md` §6), which is the site that set it. **17 occurrences here — by far the heaviest
in the Glossa block so far**, and none was varied.

⚠ **The brokenness is the formula working.** *Sic populus Israel, etc.,* **usque ad** *unde:
« Primogenitus meus Israel »* is not a defect, and neither is *Apostolus gentium eos qui ad
fidem venerant, etc., usque ad …*, whose main verb the abridgment has cut out. **No verb was
supplied to any of the seventeen** and none should be in a later book. Where the resumption
lands mid-clause, the English lands mid-clause.

### (c) Tyconius vocabulary — fixed here for the OT Glossa books

0726B cites Tyconius by name and by number: *secundum illam regulam Tyconii, qua tanquam de
eodem agentes, aliquando propter bonos omnes laudamus, aliquando propter malos omnes
vituperamus, quod est secunda regula.*

- ***regula* = "rule"**, throughout, never "canon" and never "principle". The *Liber
  regularum* is the *Book of Rules* in English and the ordinal is load-bearing here.
- ***secunda regula* = "the second rule"** — rendered as the ordinal Migne prints, **not**
  expanded to its traditional title *De Domini corpore bipartito*. Expanding it would supply
  text the plate does not carry.
- ***tanquam de eodem agentes* = "as though treating of the same [subject]"**, with the
  supplied word in brackets (corpus practice for supplied English). *eodem* is masculine or
  neuter and the plate does not disambiguate; "the same body" is what the rule means and is
  precisely what Migne does not print, so it stays out of the text and lives here.

### (d) Sigla with Migne's own internal spacing are reproduced character for character

`(BEDA ubi supra. )`, `(BED., ubi supra. )`, `(BEDA, ex Isid. )`, `(BEDA, in Tobiam. )`,
`(BEDA, in Esdram. )` — the space before the closing parenthesis is his and is carried.
`(BEDA ubi supra. )` at 0725C also lacks the comma its four siblings carry: reproduced bare.

⚠ **Two sigla attribute a Tobit gloss to Bede ON ANOTHER BOOK**: `(BEDA, in Esdr., tom. II.)`
at 0728B and `(BEDA, in Esdram. )` at 0732B. Reproduced verbatim, uncorrected. This
recension's attributions are known to be unreliable and the work page says so; passing a
siglum through is not endorsing it.

### (e) The frontmatter is copied verbatim, including its own defect

Chunk 2's `heads:` field reads `"CAPUT XIV"` without the closing period. **The plate prints
`CAPUT XIV.` with the period** (§2), so the English `## ` head reads `## CHAPTER XIV.` like
every other, while the frontmatter carries the TEI's reading unaltered — because "copy the
Latin chunk's frontmatter VERBATIM" is an unconditional rule and the pending tei-patch will
fix both sides at once.

---

## §2 · PLATE STATUS — READ, AND WHAT IT SETTLED

**The foot-of-page apparatus for these columns was read by the orchestrator during this
session, not by the translator, and the result is merged here.** Method:
archive.org `patrologiaecurs04migngoog` (on disk at `raw/scans/pl113/`), **PDF page =
(column + 11) / 2**, verified against the running head. Columns 0725–0732 are pp. 368–371,
**all four read.**

### 1. Foot-of-page apparatus: **CHECKED ZERO** — tier 3, coverage `full`, `notes_recovered: 0`

No foot rule and no numbered notes on any of the four pages; the columns simply end. This
includes **both mid-page work divisions** — the case that lost three notes on PL 202 — p. 368
carrying the end of Nehemiah above the rule and `LIBER TOBIÆ.` below it, and p. 371 carrying
the end of Tobit and `LIBER JUDITH.` below it. Both were read at the division.

**Write this down as a checked zero, not as a skip.** It is the **second** sampling of
PL 113 (Ruth's five pages were the first), so the volume's "no conjecture apparatus" finding
now rests on **nine pages across two books**.

### 2. ⭐ `« Nephtlali. »` at 0725C is OUR DIGITIZATION'S defect, not Migne's plate

**The plate reads `Nephthali`.** Read at 450 dpi and again at 900 dpi. The scan clips
line-initial characters down the lower left column of p. 368, so the word survives as
`hthali. »` — but the surviving letters are decisive: **h-t-h-a-l-i**, not h-t-l-a-l-i.
`-hthali` cannot yield the TEI's `-htlali`. **Corpus Corporum has metathesized the h and
the l.**

So the English reads **`« Nephthali. »`**, and this is not a silent normalization of a plate
reading — it is the correction of a transcription defect against the plate, exactly Ruth's
`significaRuth` class (8968 cruces §2, 0534A). A `data/tei-patches/8970.json` entry follows,
so the Latin side of the published page shows `Nephthali` too and the defect does not read as
ours. **The plate is untouched and unemended.** The gloss's own etymology — *Latitudo*,
"Breadth", of the tribe Naphtali — corroborates it.

**Two treatments were live before the plate read and both are now moot, recorded because a
blind reader will look here:** `[sic: *Nephtlali*]` (rejected — a `[sic:]` may only mark a
defect Migne's plate HAS, and it does not have this one) and rendering the printed form with
a `[var: Vulg. *Nephthali*]` beside it (rejected for the same reason).

### 3. `CAPUT XIV` — the plate prints `CAPUT XIV.` WITH the period

Read at 450 dpi on p. 371. Our TEI dropped it; every other CAPUT head in the book carries
one. Same digitization class as Ruth's `VERS.9` missing-space patch, **not** Migne setting
his last head differently. The English head therefore reads `## CHAPTER XIV.` like the other
thirteen. Second tei-patch entry pending; see §1(e) for the frontmatter.

---

## §3 · FOUR UNCLOSED QUOTATIONS — Migne's, and they stay unclosed

Pattern 5's corollary: where Migne opens `«` and never closes it, the English mirrors the
plate and supplies nothing. **Four here, which is why the guillemet counts are 76/72 and not
76/76.** All four were checked against the Latin twin individually; none is a transcription
loss of the kind §2.2 describes (each ends at a hard structural boundary the compositor
evidently treated as a close).

| col | opens | never closes — the text runs on into |
|---|---|---|
| 0726B | `« Nolite, pueri, effici, etc. [n: (I Cor. XIV)].` | *Hoc autem secundum illos dictum est…* |
| 0727B | `« Qui parcit virgae, odit filium [n: (Prov. XIII)].` | *Paulus tanquam puer colaphizatur…* |
| 0728A | `« Ego sum, inquit, Azarias Ananiae magni filius, [n: (ID., ibid.)]` | the etymologies *Azarias* adjutor*…* and the whole rest of the gloss |
| 0729B | `« Jam non dicam vos servos, sed amicos meos [n: (Joan. XV)].` | the `## CAPUT VII.` head |

⚑ The 0728A case is the one to watch: the unclosed `«` swallows the two italic etymological
glosses and the two proof-texts that follow, so a span-extractor reports one 60-word "lemma"
there. It is not one. The lemma is *Ego sum, inquit, Azarias Ananiae magni filius,* (Tob 5:18)
and everything after the `[n:]` is gloss.

---

## §4 · THE LEMMA LIST — ALL 73 SPANS, CHECKED AGAINST THE VULGATE

**Every guillemet span in the work, with what the check found — including the ones that agree
exactly.** A list of findings alone cannot be told apart from a report by an agent that never
looked. Tobit's Latin text is genuinely unstable and this is where the value is.

### 4a. THE DIVERGENCES — four `[var:]` fired

| col | Migne prints | Vulgate | marker |
|---|---|---|---|
| **0726C** | *Primogenitus meus Israel* (Exod. IV) | Exod 4:22 *Filius meus primogenitus Israel* | `[var:]` — Migne drops *filius* and re-orders. "My firstborn Israel" vs "Israel is my son, my firstborn". The gloss adduces it for Israel's **primogeniture**, which survives; the sonship does not. |
| **0727D** | *Constitui terminos populorum…* (Deut. LII) | Deut 32:8 **constituit** *terminos populorum…* | `[var:]` — **first person for third**. Migne's God speaks in his own voice; the Vulgate's Moses reports him. A one-letter difference that changes the speaker of the verse. |
| **0729A** | *Num ignoramus astutius ejus* (II Cor. II) | 2 Cor 2:11 *non enim ignoramus cogitationes ejus* | `[var:]` **+ `[sic:]`** — the worst site in the work; see §5.2. |
| **0729B** | *Jam non dicam vos servos, sed amicos meos* (Joan. XV) | John 15:15 *Jam non dicam vos servos… vos autem dixi amicos* | `[var:]` — Migne compresses two clauses into one with *sed*, and adds *meos*, which the verse does not carry. Marker worded to avoid quoting Migne's own words back at him (the `[var:]` mirror test). |

### 4b. DIVERGENCES FOUND, MARKER DECLINED — with the reason, because a blind reader will look

- **0727B · *Qui parcit virgae, odit filium*** (Prov. XIII). The Vulgate reads **odit filium
  suum**. ⚠ **The English therefore reads "hateth THE son", not the Douay's "hateth HIS
  son"** — deliberately, and this is precisely the 7a″ trap the brief names: the familiar
  cadence arrives before the printed Latin is read. No `[var:]`, because dropping a
  possessive does not change what the proverb asserts; recorded here so the un-Douay article
  is visibly a decision and not a slip.
- **0727A · *Caecitas **enim** ex parte contigit in Israel*** (Rom. II). Vulgate Rom 11:25
  has ***quia** caecitas ex parte contigit in Israel*. A connective swapped to fit the new
  sentence frame — the citing author's, not a textual variant. No marker. **The citation
  itself is wrong** (Rom. II for Rom. XI); see §4d.
- **0728A · *Et vidimus gloriam ejus, quasi unigeniti a Patre*** (Joan. I). John 1:14 reads
  *gloriam ejus, **gloriam** quasi unigeniti a Patre*. An elision of the repeated noun, not a
  different reading. No marker.
- **0728C · *Pater, transfer calicem hunc a me*** (Marc. XIV). Mark 14:36 reads *Abba Pater,
  omnia tibi possibilia sunt: transfer calicem hunc a me*. Migne quotes the head and the tail
  and drops the middle — an abridgment of the same family as *usque ad*, not a variant. No
  marker. (Luke 22:42's *Pater, si vis, transfer calicem istum a me* is closer in shape but
  is not what Migne cites; the citation stands as printed.)
- **0732A · *Aperiens autem Tobias os suum*** (Tob 13:1). The Vulgate has *Tobias **senior***.
  A dropped epithet in a lemma the gloss does not build on. No marker.
- **0730A · *Benedicimus te, Domine Deus*** (Tob 8:17). The Vulgate continues *Israel*; the
  lemma simply stops where Migne stops it. Not a divergence.

### 4c. CHECKED AND AGREEING WITH THE VULGATE — named, not summarized

**Tobit lemmata, chunk 0:** `Tobias.` (1:1) · `Cum irent, etc.` (1:5) · `Supra Naasson.`
(1:1) · `Ita ut omnia, etc.` (1:3) · `Nihil tamen puerile.` (1:4) · `Omnia primitiva` (1:6) ·
`Cum vero factus esset vir` (1:9) · `Quem ab infantia timere,` (1:10) · `In conspectu
Salmanasar,` (1:13) · `Cum autem venisset, etc.` (1:16) · `Sepulturam exhibebat, etc.,` ·
`Denique cum reversus esset, etc.` · `Contigit,` (2:10) · `Sed immobilis,` (2:13) ·
`Insultabant reges,` · `Ut Sara, etc.` (3:7) · `Corpus meum sepeli.` (4:3) · `Ex filiis
Israel.` (5:7) · `Tunc ingressus,` (5:10) · `Et dixit ei angelus.` · `Ego sum, inquit,
Azarias Ananiae magni filius,` (5:18) · `Tunc paratis.` (5:22).

**Tobit lemmata, chunk 1:** `Profectus est,` (6:1) · `Et ecce piscis,` (6:2) · `Exivit.` ·
`Quem expavescens,` (6:3) · `Apprehende branchiam,` (6:4) · `Quod cum fecisset.` ·
`Exentera hunc piscem.` (6:5) · `Sunt enim haec necessaria.` · `Assavit carnes ejus,` (6:6) ·
`Et oportet.` (6:12) · `Quo audito verbo Raguel expavit,` (7:11) · `Postquam vero
coenaverunt,` (8:1) · **`Religavit.`** (8:3) · `Et factum est.` (8:11) · `Duas quoque,`
(8:22) · `Quatuor arietes.` · `Occidi fecit.` · `Et adjuravit Raguel Tobiam.` (8:23) ·
`Tamen obsecro te.` (9:3) · `At vero Raguel,` (10:8) · `Tradidit,` (10:10).

⚑ **`Religavit.` at 0729D was a live `[var:]` candidate and is not one.** The active
*religavit* looked like a divergence from a passive *religatus est*, and the gloss's own
*Angelus… in deserto ligavit* seemed to be repairing it. **The Clementine reads
*religavit* too** (Tob 8:3, *Raphael angelus apprehendit daemonium, et religavit illud in
deserto superioris Aegypti*). Checked, agreeing, no marker. Recorded because the shape of the
near-miss is the shape of a false positive a later agent will meet again.

**Tobit lemmata, chunk 2:** `Praecedamus.` (11:3) · `Blandimento.` (11:9) · **`Exsurgens.`**
(11:10) · `Tunc sumens.` (11:13) · `Albugo.` (11:14) · `Ingressa est,` (11:18) · `Et nunc,`
(12:14) · `Et postquam illuminatus est Tobias,` (14:1) · `Quinquaginta namque et sex annorum
lumen oculorum amisit,` (14:3, word for word) · `In hora autem mortis suae vocavit ad se
Tobiam.` (14:5) · `Tobias abscessit ex Ninive cum uxore sua, et filiis et filiorum filiis,`
(14:14) · `Sepelierunt.` (14:16).

⚑ **`Exsurgens.` at 0731A — CLOSED at the blind read: clean, no action, no `[var:]`.** The
two verbs are synonymous in this context and "Rising up" serves either, so nothing was
conformed. The open question as I left it is kept below, because the shape of it is worth a
later agent's time. The Clementine at
Tob 11:10 has ***consurgens*** (*consurgens caecus pater ejus coepit offendens pedibus
currere*); Migne's lemma prints *Exsurgens*, and the gloss picks it up as *exsurgit populus
Judaeorum*. The prefix change is real but the two verbs are near-synonyms, the Tobit
tradition is unstable exactly here, and I do not have a Vulgate text on disk to confirm the
Clementine reading against my memory of it. **Declined rather than fired on a half-check**,
and named so a reader with the text could close it in one look — which is what happened.
⭐ **Declining to fire on an unverifiable half-check was right and produced the right
outcome**: had I fired a `[var:]` from memory, the work would carry a marker asserting a
divergence that is not one.

**Non-Tobit scripture quoted inside the glosses** — the brief names these as exactly where
the reach for a familiar English Bible happens, so each was read word by word:
`Latum mandatum tuum nimis` (Ps 118:96 — **exact**) · `Non potest civitas abscondi supra
montem posita` (Matt 5:14 — **exact, word for word**, Migne's Latin, not the Douay's word
order) · `Nolite, pueri, effici` (1 Cor 14:20, minus *sensibus*, which *etc.* carries) ·
`Surge qui dormis et exsurge a mortuis` (Eph 5:14 — **exact**) · `A sanctuario meo incipite`
(Ezek 9:6, minus the opening *et*) · `Charitas patiens est, benigna est` (1 Cor 13:4 —
**exact**) · `Poenitentiam agite, appropinquavit enim regnum coelorum` (Matt 3:2 — **exact**;
*coelorum* for *caelorum* is orthography, Pattern 9, not a defect) · `Ego sum, inquit, lux
mundi, qui sequitur me non ambulat in tenebris` (John 8:12 — **exact**, the *inquit*
interpolated per Pattern 5 and kept inside the guillemets) · `Adjutor meus et liberator meus
es tu, Domine, ne moreris` (Ps 69:6 — **exact**) · `Serpens erat callidior cunctis animantibus
terrae` (Gen 3:1, minus the opening *Sed et*).

### 4d. THREE CITATIONS ARE WRONG AS PRINTED — reported, NOT corrected

Runbook false positive 2: a following `Ibid.`/`ID., ibid.` chain resolves against the
**printed** sequence, so correcting a reference makes the *Ibid.* inherit the corrected key
and resolve wrong. This book runs eleven `(ID., ibid.)` / `(BED., ibid.)` notes. **Nothing
was corrected.**

- **0725C · `(Matth. XV)`** on *Non potest civitas abscondi supra montem posita* — the
  Sermon on the Mount is **Matt. V**. The brief flags this one by name.
- **0727A · `(Rom. II)`** on *Caecitas enim ex parte contigit in Israel* — Rom. **XI**:25.
- **0727D · `(Deut. LII)`** on *Constitui terminos populorum* — Deuteronomy has 34 chapters,
  so **LII is impossible**; the verse is Deut. **XXXII**:8. This is the clearest of the three
  and still gets no correction in the note.

A fourth is a near-miss and is **not** an error: `(II Cor. XIII)` at 0727B on *Charitas
patiens est* is **I** Cor. 13:4 — printed as II, reproduced as II.

---

## §5 · THE BOOK'S OWN CRUCES

### 5.1 ⭐ 0727A · *fidei lumen non admittit* — the sentence says the opposite of its own argument. `[cj:]` FIRED.

> *Fatigatus a sepultura est caecatus. Qui enim **infatigabilis** in bonis operibus
> persistit, fidei lumen **non admittit**.*

Rendered literally: **"For he who persists UNWEARIED in good works does NOT admit the light
of faith."** The preceding sentence has just said that Tobit was blinded **because he was
wearied** from the burial. So the printed clause asserts that the man who does not weary is
the man who does not receive faith's light — the exact reverse of the paragraph.

**Both negations are carried** (*infatigabilis*, *non*), and *admittit* is rendered as what
it means. **No word was translated as its opposite to rescue the sentence.**

The conjecture is ***amittit*** — "does not **lose** the light of faith" — one letter away,
and it yields precisely what the argument requires: the unwearied man does not lose what the
wearied man lost. This is the Pattern 18 shape exactly: *admittit* is a real Latin word in
its correct person and slot, so Pattern 12 has nothing to wrap and Pattern 7 must render it,
**and the English then asserts something the author did not**. Marked additively, so both
readings stand on the page:

`does not admit [cj: *admittit*; read *amittit*, "does not lose"] the light of faith`

⚠ This is the one site in the work where the printed reading and the argument are in open
contradiction, and it is the site a blind reader should open first.

### 5.2 ⭐ 0729A · *Num ignoramus astutius ejus* — a broken word inside a divergent quotation

Migne prints, for 2 Cor 2:11: `« Num ignoramus astutius ejus [n: (II Cor. II)]. »`
The Vulgate has *non enim ignoramus **cogitationes** ejus*. **Two independent things are
wrong and each takes its own marker**, per Pattern 14's clause that a `[var:]` may sit beside
a `[sic:]`:

1. ***astutius*** cannot be the object of *ignoramus*. It is a real word — the neuter
   comparative of *astutus*, or the comparative adverb — and it has **no grammatical slot**
   here, which is Pattern 12's test 1 (the *Pecte*/*ama*/*sternis* class from 11632). The
   required accusative is ***astutias***, "his crafty designs". So it is **carried
   untranslated in italics inside `[sic: *astutius*]`**, not rendered.
2. ***Num*** for the Vulgate's ***non enim*** inverts the sentence frame from an assertion
   into an interrogative — **and Migne prints a full stop, not a question mark.** Pattern 8:
   the mark rides as printed, and this work prints **zero** question marks, so the English
   prints zero.

**Rendering: `« Surely we are not ignorant of his cunning [sic: *astutius*] [n: (II Cor. II)]. »`**

("cunning" was missing from my first version — "of his ___" is not English. See §7.1.)

⚑ **On the "not":** *num* is an interrogative particle that expects the answer *no*, and
"surely… not" is its own English exponent — the same lexical fact as *nonne* → "is it not".
**No negation particle was added and none was dropped.** The alternative renderings were both
worse and both are recorded: "Are we ignorant of his…" (drops *num* entirely and asserts the
opposite of the gloss's whole point, that Scripture makes the enemy's craft known) and a
recast question (supplies a `?` Migne does not print, breaking Pattern 8).

7a⁗ check, run explicitly: with the marker's contents deleted the clause still has its verb
(*ignoramus*) and its interrogative particle (*num*) — **the quarantine takes the object, not
the force.**

### 5.3 0728C · *di bolum* — split type, and what it takes down with it

> *Apprehendit Christus **di bolum** qui eum capere in cruce voluit, et moriendo vicit.*

Pattern 10: word-division defects are carried as **whole runs**, spacing included, and marked
`[sic:]`. `[sic: *di bolum*]` for *diabolum*, near-certain — the same clause's relative
(*qui eum capere in cruce voluit*) and the sentence before it (*Domino in cruce passo
diabolus… advenit*) both name the devil, and the word appears correctly four more times in
the same paragraph.

**7a⁗-b applies and was worked through**: the quarantine is the size of a whole lexeme, and
here that lexeme is the **object** of *apprehendit*. Checked against the three questions —
the clause keeps its verb (*apprehendit*), carries no negation, and carries no conjunction or
interrogative. **Nothing governing was swallowed** — but the OBJECT was, and that
alone broke the sentence: my first version read "Christ laid hold of the [sic: *di bolum*]",
a dangling article with no noun. Corrected to **"Christ laid hold of the devil
[sic: *di bolum*]"**; see §7.1. ⚠ Note precisely where the reasoning failed: I ran 7a⁗'s
three questions (verb? negation? conjunction?), got three clean answers, and concluded the
marker could stand alone. **7a⁗'s three questions do not ask whether the clause still has an
OBJECT.**

### 5.4 0727A · *spiritualer* and 0727B · *incantus* — two more carried runs

- ***spiritualer*** for *spiritualiter*, in *Ita spiritualer fatigatus dormit*. A non-word;
  carried in `[sic: *spiritualer*]`, **and rendered "spiritually" in the running text beside
  it** — see §7.1. My first version marked it INSTEAD of rendering it, which deleted the
  literal/allegorical hinge of the sentence and left the clause merely repeating "wearied".
- ***incantus*** for *incautus*, in *qui levitati lasciviae, ac superbiae se incantus
  subjicit*. The classic u↔n turned-type confusion. **The `[sic:]` decision was close and the
  reasoning is recorded**: *incantus, -us* is an attested late-Latin noun ("enchantment"), so
  the word is not simply non-existent — but as a nominative singular agreeing with *qui* it
  has no slot, which is again Pattern 12 test 1, and the conjecture *incautus* ("unwary")
  makes the clause construe at once. **Marked AND rendered** — "who incautiously
  [sic: *incantus*] subjects himself" — after the same correction; see §7.1.

### 5.5 The unexpressed subject — every supplied pronoun, and what decided it

The brief names this as the dominant defect class, and this book runs the Tobit-father /
Tobit-son / Israel / Church / Gentiles allegory with the referent switching mid-sentence.
**Three sites needed a decision; all three are recorded, two took a bracketed supply rather
than a bare pronoun.**

**(i) 0726C · *quod nunquam peccatum faceret, sed ipsum timoris Domini spiritu impleret*.**
Rendered **"that [the boy] would never commit sin, but that [God] would fill him with the
spirit of the fear of the Lord."**

⚠ **REVISED at the blind read (§7.2). My first version put [God] on BOTH verbs and is
superseded.** Both readings genuinely construe, so this entry keeps the losing argument in
full rather than quietly replacing it — a reader who thinks I chose wrong should have the
material to say so.

**The reading now in the text:** *faceret* of the SON, *impleret* of the LORD. It follows the
lemma being glossed — *Quem ab infantia timere*, Tob 1:10, the son taught **to fear God and
to abstain from all sin** — so the two limbs of the *sed* are the two halves of the verse,
and the subject of *impleret* is named on the spot by *timoris **Domini***. The decisive
objection to my first version: *peccatum facere* is the New Testament idiom for **committing**
sin (1 John 3:8), so "confessing that God would never commit sin" is a strange article for a
father to teach his son.

**The argument I first took, kept because it is not worthless:** it turns on ***ipsum***,
which is not reflexive — a reflexive would be *se* — so the person it names is **not** the
subject of *impleret*. That still rules out the reading English reaches for first ("that he
would never sin, but would fill **himself**…"). The subject of *impleret* is therefore God and
*ipsum* is the boy, **which the shipped reading also holds**. Where the two part is only
whether *faceret* shares that subject: joined by *sed* under one *quod*, two subjunctives
normally do. Against that stand the idiom and the lemma, and they carry the more weight.

**Both verbs take a bracketed supply rather than a bare pronoun**, because a bare "he" binds
silently in a sentence whose referent changes mid-clause — Ruth's 0538C failure in this
book's clothing.

**(ii) 0728D · *molitus est adhuc electis suis persecutionem commovere*.** Rendered
**"he [the devil] contrived still to stir up persecution against his elect."**

Two readings construe and both are set out here, but I have taken one and it is in the text.
The *cum*-clause subject is *Dominus*; the main clause has none expressed. **For the Lord:**
*suis* is reflexive to the main subject, and "his own elect" then belongs to whoever is
contriving. **For the devil:** *molior* is a scheming verb — one contrives a persecution, one
does not contrive one for one's own people — and the allegory the whole paragraph runs is
that the exposed enemy keeps striking at the feet (the elect) by which Christ walks on earth,
which the very next clause states. **The devil is the subject.** The looser use of *suus* for
a non-subject possessor is ordinary medieval Latin and is the weaker of the two arguments;
the verb is the stronger. Supplied in brackets so the reader sees that the choice was made.

**(iii) 0731A · *tandem, scilicet, se Ecclesiae de gentibus… conjungat*.** Rendered **"at
last, that is to say, [the Jewish people] may join itself to the Church."**

⚠ **The bracketed supply was added at the blind read.** A bare "it" was right as to NUMBER,
and for that reason I thought the site was finished — but the nearest singular noun in the
English sentence was "divine grace", so the pronoun bound to the wrong one anyway.
**Carrying a number faithfully is not the same as carrying a referent**, and this is the same
lesson as §7.1 in a different dress: what is correct in the analysis has still to arrive in
the sentence a reader actually reads.

⚑ **A number shift decides this and it is easy to miss.** The same sentence runs *ut… in
libris suis **cognoscant**… multum **gaudeant*** — plural — and then ***conjungat*** —
**singular**. The plurals are rendered plural ("they may know", "they may rejoice") and the
singular singular ("[the Jewish people] may join itself"), because that singular is *populus
Judaeorum*, the collective the paragraph opened with. Smoothing the singular into a plural to
match its neighbours would erase a shift the plate actually makes. The other candidate
subject, *gratia divina*, is singular too but cannot take *se conjungat* here — grace joining
*itself* to the Church is not what the passage is about; the Jews' incorporation is.

### 5.6 0732A · *Tobias remanet apud Patrem* — Migne's capital is doing the work

The literal figure is Tobias staying with **his father Tobit**; Migne prints ***Patrem***
capitalized, in a sentence whose other half is *Angelus redit ad Deum* and whose sequel is
*Christus… divinitate Patri aequalis*. **The capital is the allegory surfacing**, and it is
reproduced: "Tobias remains with the Father." Lower-casing it to fit the story would be
tidying the plate; the reader can see both senses because the ambiguity is Migne's.

### 5.7 Punctuation the plate prints and the English keeps

- **0729D · a full stop mid-sentence**, followed by a lower-case *quia*: *quae a Deo deserta.
  quia ejus habitatione indigna*. Reproduced, **lower case and all** — Pattern 8 forbids
  deleting a printed mark, and 11542 @1041D is the precedent for exactly this shape.
- **0726D · a paragraph that simply stops.** *et ante faciem ejus non subsistit* — no
  terminal stop. **None supplied.**
- **0729B · a second one.** *tanto certius declinamus* — no terminal stop. **None supplied.**
- **0731B · a semicolon inside a quoted prayer**: *dicunt, Domine Deus, illumina tenebras
  meas; a Domino illuminantur*. Kept where he sets it.
- **0729A · a colon after a verb of saying**: *Aiunt enim physici: quia calore…*. Kept.
- **0730A · `« Et factum est. » etc.`** — a full stop inside the guillemets, before *etc.*
  Kept inside.

### 5.8 Verse and chapter ordering as printed

- **CAPUT II opens at VERS. 10** and CAPUT V at VERS. 7; CAPUT III has a single gloss at
  VERS. 7. **Migne's ordering, reproduced, no reordering, nothing supplied.**
- Within chapters the verse numbers ascend throughout — **no out-of-sequence verse mark
  anywhere in this book**, unlike Jude. Checked, and recorded as checked.

### 5.9 Sentences left broken because the plate breaks them

- **0731A · *sed offendens gressibus operum, donec renatus instructus in Christo… percipiat*
  has no finite verb** after *sed*. Rendered as printed, participle dangling: "but stumbling
  with the steps of its works, until… it may receive the light of faith and of working."
  Nothing supplied.
- **0730C · *qui litteram legis septuaginta interpretes acceperunt*.** *septuaginta
  interpretes* is accusative and stands as a second object of *acceperunt*, so the printed
  sentence says they received "the letter of the law, the seventy interpreters". The sense
  plainly wants ***per** septuaginta interpretes*, "through the Seventy". **`[cj:]` DECLINED**
  — the marker's form requires a printed WORD to gloss, and what is missing here is a
  preposition, not a wrong word; there is nothing to put in the italics. **Rendered as
  printed**, and the conjecture lives here. ⚑ **The blind reader could not decide between
  "through the Seventy" and "received the Seventy interpreters" either; recorded, on his
  instruction, as UNDECIDABLE rather than as a declined conjecture.** ⚠ My first draft of this
  clause read "received the letter of the law FROM the seventy interpreters" — a silent
  repair, caught and undone before the file was written. Recorded because it is the exact
  mechanism 7a describes, and because it is the one instance of that mechanism I caught
  myself.
- **0732A · *Nos autem omnes hujus vitae labores debemus sustinere*.** ***omnes*** agrees
  equally with *nos* and with *labores*. Rendered **"we all ought to endure the labours of
  this life."** ⚑ The blind reader notes that word order and the *quadragenarius numerus
  laboriosus* argument mildly favour the other binding — "**all the labours** of this life" —
  and declined to churn a moderate-confidence ambiguity. **Both readings recorded; the English
  stands as written.**
- **0730A · *Cantus pullorum*** rendered "The singing of the young birds", not "cock-crow".
  *Pullus* is the young of any bird and Migne's word for a cock is not on this page; the
  phrase is the head of an abridged Bede sentence (*usque ad* follows immediately), so the
  context that would license "cock" is precisely what the abridgment removed.

### 5.10 `[cj:]` candidates considered and DECLINED, with reasons

Pattern 18a closed the corpus census and set a high bar: the test is whether the faithful
English **asserts something false**, not whether a better word exists.

- **0727C · *Turbam notionum signat*** (of Sara). ⭐ **DECLINED FIRST, REVERSED AT THE BLIND
  READ — and the reversal, not the reading, is the lesson.** *Nationum* is one letter away and
  is what the book's allegory runs on everywhere else (*Raguel populum gentium signat*;
  *Ecclesiam de gentibus*; *plenitudo gentium*), Sara being the Church from the Gentiles
  throughout. I declined it because *notio* is a real word in its correct case and because the
  ***usque ad*** abridgment removes the body of the sentence, so the referent cannot be
  recovered from the printed text. **That reasoning was sound about the conjecture and wrong
  about the consequence.** Declining the marker left the site with **no apparatus at all**, so
  a reader met "the multitude of notions" with nothing to tell him the page was broken —
  which is worse than either available answer. Now
  `[cj: *notionum*; read *nationum*, "of the nations"]`, exactly as *admittit* is treated two
  columns earlier. **The reportable defect was the absence of a marker, not the choice of
  reading.**
- **0726C · *alibi dicitur Salmanasar*.** Reads oddly, since the lemma being glossed is
  *In conspectu Salmanasar* — one expects *alibi dicitur Sennacherib*. **Declined:** the
  printed sentence construes as it stands ("it is no contradiction that he is elsewhere called
  Salmanasar, who is also Sennacherib"), and the double-name claim it goes on to make is
  coherent either way. Rendered as printed.
- **0726B · Migne's commas in *« Nolite, pueri, effici, etc. »*.** The commas make *pueri*
  look vocative ("be not, O children, made…"). Rendered **"Be ye not made children"** — the
  predicate reading — because 1 Cor 14:20 is *nolite pueri effici **sensibus*** with *pueri*
  predicate nominative, and because the gloss adduces the verse for a boy who did **nothing
  childish**, which needs the predicate. **The commas are Migne's punctuation of a
  construction, not a change to it**, and English has no exponent for them; Pattern 9's
  reasoning. Logged, not marked.

### 5.11 Negation — 19 particles, every one carried

Checked one by one against the Latin. *non solum… sed* (0725D) · *non abstulit* (0725D) ·
*Nihil tamen puerile* (0725D) · *sine querela* (0726B) · *non poterat accedere* (0726C) ·
*nunquam peccatum faceret* (0726C) · *Non obloquitur* (0726C) · *ut **nec** memoria… remaneret*
(0726D) · *non subsistit* (0726D) · *si… **non** liceret* + ***nunquam*** *scriberetur*
(0727A) · *nihilominus* (0727A) · *non admittit* (0727A — see §5.1) · *Qui **non** corripitur
**non** est filius* (0727B) · *non ambulat in tenebris* (0728A) · *ne moreris* (0728A) ·
*cui **nil** debebat* (0728B) · ***nec*** *in eo… quidquam habuit* (0728B) · *non diabolum,
sed mortem* (0728C) · *nec ipsos tantum laedere permittitur* (0729D) · *nondum… susceperunt*
(0730C) · *nemo prohibere potest, quin…* (0730C) · *quos diu **non** viderant* (0731A) ·
***nec** ad sexagenarium… pervenerat* (0732B) · *animi levitatem **non** deserit* (0732B).

**None was dropped and none was added.** Two are worth naming because carrying them produces
strain the English keeps:

- **0727A**, §5.1 — the site where carrying the negation makes the sentence contradict its own
  paragraph. Carried anyway.
- **0732B · *diu vivens animi levitatem non deserit*** — the closing words of an *usque ad*,
  "living long, he does not forsake lightness of mind." Read out of its (absent) context this
  sounds like a criticism where the passage is praising. **Rendered as printed**; the sentence
  it belongs to is not on this page.

### 5.12 Read clean, and named so

**Chunk 2 in its entirety** carries no defect marker: 13/13 guillemets balanced, nine notes,
six anchors, three `*usque ad*`, every lemma checked (§4c) with one declined near-miss
(*Exsurgens*, §4c). The heavy apparatus in this book is all in chunks 0 and 1.
**CAPUT IV (0727C), CAPUT VII (0729B–C), CAPUT IX (0730B–C) and CAPUT XIII (0732A)** are each
a single gloss and each read clean.

---

## §6 · WHAT A BLIND READER SHOULD OPEN FIRST

**Rewritten after the blind read (§7); items 1–3 of the original list have been adjudicated
and are now closed.** Kept in place so the record shows what was offered and what came back.

1. ✅ **0727A, *non admittit* (§5.1)** — offered as the call I most wanted a second eye on.
   **Endorsed: correct and correctly formed**, *amittit* certainly right, since the preceding
   sentence makes weariness the cause of the blinding.
2. ✅ **0729A, *Num ignoramus* (§5.2)** — offered with my reasoning exposed for testing.
   **Tested and holds**: *num* carries its own negative expectation, no particle was invented,
   and II Cor. II requires the affirmative-knowledge sense, so both *Num* and a possible
   underlying *Non* yield the same English. No `[cj:]`.
3. ✅ **0728D, subject of *molitus est* (§5.5 ii)** — offered as devil-or-Lord. **Devil
   endorsed**, on evidence I had not cited: the lemma is Tob. VI, where the fish palpitates
   *before Tobias's feet*, and the gloss's next clause supplies exactly that (*hi enim sunt
   pedes ejus*). The Lord contriving persecution against his own elect is not available.
4. ✅ **0727C, *notionum* / *nationum* (§5.10)** — **reversed**: now carries a `[cj:]`.
5. ✅ **0731A, *Exsurgens* (§4c)** — **closed clean**, no `[var:]`.

**What is still open, and it is short:**

- **0726C, §5.5(i)** — the one genuinely two-sided call left in the work. The text now reads
  *faceret* of the son and *impleret* of the Lord; both readings are set out in full and a
  reader who prefers the other has everything needed to argue it.
- **0730C, §5.9** — recorded as undecidable by two readers.
- **0732A, §5.9** — *omnes* with *nos* or with *labores*; both recorded, English unchanged.

---

## §7 · THE BLIND POLARITY READ — one systematic defect, and it was invisible

A blind reader who never saw this file read all three chunks. **On the classes this book was
most exposed to it came back clean**: no scripture conformation anywhere, and he named the
places the pull was resisted — Migne's omission of *suum* at Prov. XIII preserved against
Douay's "his son", Marc. XIV not conformed to Douay's "chalice", *Domine Deus* left without
*meus*, and the anacoluthon at 0731A reproduced broken with no main verb supplied. Guillemets
1:1 in all three chunks including the four Migne leaves unclosed; zero question marks; 17/17
on `*usque ad*` with no verb ever supplied.

**Nine repairs were required. All nine are applied.** Seven were single sites (§5.5 i, §5.5
iii, §5.10, and the four below); two were systematic.

### 7.1 ⭐⭐⭐ THE MECHANISM — a `[sic:]` does not stand in for the translation. 4 of 4 sites.

**Every `[sic:]` in this work swallowed the word it marked.** The convention is that a corrupt
word is **Englished for its evident sense AND marked** — the marker annotates provenance, the
running text still has to say what the sentence says. I used the marker *instead of* the
rendering, so four content words vanished from the English:

| col | as first written | what was missing |
|---|---|---|
| 0727A | "So he sleeps wearied [sic: *spiritualer*]" | **"spiritually"** — the literal/allegorical hinge; without it the clause merely repeats "wearied" |
| 0727B | "who, [sic: *incantus*], subjects himself" | **"incautiously"** — no adverb at all, brackets set as though parenthetical |
| 0728C | "Christ laid hold of the [sic: *di bolum*]" | **"the devil"** — a dangling article; the sentence had no object |
| 0729A | "we are not ignorant of his [sic: *astutius*]" | **"cunning"** — "of his ___" is not English |

⛔ **Why this is the most damaging shape of error available here: it is invisible to every
automated check we have.** `verify-english.mjs` sees a well-formed marker whose contents are
verbatim in the Latin twin, and passes. Column, note, guillemet and question-mark parity are
all untouched. Nothing counts words. **The four sites survived my own marker audit precisely
because each marker was individually correct** — the defect was in what stood beside it, and
there is nothing to grep for an absence.

⚠ **It was mine, not a house ambiguity**: peers in this same batch applied the rule correctly
(8982 wrote "will not desire" beside `[sic: *de iderabitis*]`; 8985 supplied the sense beside
*monebu*).

⭐ **THE TEST, IN ONE LINE, FOR 8948 AND JUDITH (8960):**

> **A `[sic:]` marks the plate's defect; it does not stand in for the translation. If the
> English sentence cannot be read aloud without the bracket, the rendering is missing.**

Run it on every marker before filing a chunk — delete the bracket and read the clause. It
takes seconds and it is the only thing that finds this class. (Mechanically: after stripping
all markers, an article or preposition left stranded on punctuation, or a doubled mark, is the
signature. Both patterns now return zero across all three chunks.)

⚑ **A second finding, worth carrying forward: 7a⁗'s three questions are not sufficient.** At
0728C I ran them — verb? negation? conjunction? — got three clean answers, and concluded the
marker could stand alone. The quarantine had taken the **object**. 7a⁗ asks what *governs*;
nothing in it asks whether the clause still has the thing it acts on.

### 7.2 The other repairs

- **⭐⭐⭐ 0728C · *et moriendo vicit* had been attached to the wrong subject.** It is a **main**
  clause resuming *Christus*, not a second limb of the *qui* relative; my word order put it
  inside the relative, so the page said **the devil conquered by dying** — the inversion of the
  paragraph's whole argument. Now "…who wished to seize him on the cross, and by dying
  **[Christ]** overcame him." The swallowed *di bolum* above compounded it by removing the noun
  that would have anchored a reader.
- **⭐⭐ 0729C · *quos* is PLURAL and resumes *fidelium*.** "he restrained him, whom, although he
  is sometimes permitted to tempt…" put "whom" straight after singular "him" (the devil), so
  the surface reading was that someone is permitted to tempt **the devil**. Latin morphology
  carried the antecedent; English has to carry it by **position**. Now "he restrained him by
  ceasing from the hurting of **the faithful, whom**, although he is sometimes permitted to
  tempt for a trial, he is nevertheless forbidden to overcome."
- **⭐⭐ 0727C · *notionum* stood with no apparatus at all** — see §5.10.
- **⭐⭐ 0726C · the supplied [God] made God the one who might commit sin** — see §5.5(i).
- **⭐ 0731A · "it may join itself"** bound to "divine grace" — see §5.5(iii).
- **⭐ 0728D · "against his elect"** made the elect the *devil's*. *Suis* is loose for the
  Lord's, as the next clause proves (*hi enim sunt pedes ejus… qui per omnia regnat in
  coelo*). Now "against **[the Lord's]** elect".
- **⭐ 0731A · *statim* sits on *adventuram*, not on *edunt*** — the grace is to come
  straightway, the declaring is not done straightway. Now "they declare that the grace of the
  Holy Spirit is **straightway to come**."

### 7.3 ⭐⭐ Punctuation — and why the totals could not have found it

**Five of Migne's marks had been lost or downgraded, and six of ours supplied.** Restored:
0726D *pertimescit**:*** · 0729A *aperuit**:*** · 0730B *hostia viva**:*** · 0732B
*annuntiant**:*** · 0731C *acceperit**;***. Removed: the supplied colon at 0725C (he prints a
comma) and **eight supplied semicolons** (0725C, 0726B, 0726C, 0728A, 0728C, 0728D, 0730B,
0730C).

⛔ **The trap, and it is the transferable part: in chunk 0 the colon totals CANCELLED EXACTLY,
19 against 19.** One of his destroyed at 0726D, one of ours invented at 0725C. A count-based
check reports that chunk clean. **Only a positional check finds it** — and this is the 8989
defect from the previous batch, repeating.

**So the check is now run per column band, not per chunk.** Splitting both texts on the
column anchors (which are verified 1:1 and therefore partition the twins identically) and
comparing colons, semicolons and guillemet-opens band by band: **0 mismatched bands across all
three chunks.** That is the check that cannot be faked by cancellation, and it is what a later
guillemet book should run instead of a total.

⚠ **On the semicolon removals specifically** — the corpus-wide ruling declining this class
elsewhere in this batch holds that it is *a rate question, not an absence*, because Migne uses
semicolons freely. **That ruling does not reach this book: he prints ZERO in chunk 0 and ONE
in chunk 1.** Against that, four in my chunk 0 was an absence. The exception is narrow, rests
on his own practice in this book, and **should not be generalized to 8948 or Judith without
counting their plates first.**

### 7.4 Post-repair state

`verify-english.mjs` clean. Per-band parity: columns 12/10/6, notes 29/19/9, guillemets
37+34 / 26+25 / 13+13, question marks 0/0/0, prose colons 19/14/3, prose semicolons 0/1/5 —
**every one matching the Latin twin, and matching band by band, not merely in total.**
