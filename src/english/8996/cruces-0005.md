# *Glossa ordinaria*, **Epistola ad Romanos** (PL 114) — cruces, chunks 0005–0009 (cols 0481B–0493D)

Anselm of Laon and his school, on Romans. This file covers **one stint only** — chunks
**0005–0009**, cols **0481B–0493D**, 5,402 Latin words → 7,971 English (**1.48×**, apparatus
stripped). Three other stints hold the rest of the 20 chunks; the merge step reconciles this file
with theirs. Filename is `cruces-0005.md` by instruction, to avoid clobbering a peer.

**Apparatus fired in this stint: 3 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]`.** `verify-english.mjs` clean across all 20 chunks. Column anchors, `[n:]` notes,
paragraph counts and `## ` heads all at exact 1:1 parity with the Latin twins. Zero guillemets
(Migne prints none in this range), zero em-dashes.

---

## §P · THE PLATE READ — TWO WITNESSES, AND IT CHANGED FIVE VERDICTS

⭐ **This is the most important section in the file.** Every column of this stint (0481–0494) was
read at the plate before any marker was fired, on **two independent witnesses**. Six of the seven
things this stint would otherwise have marked as defects in Migne's type turned out **not to be
Migne's at all** — five were ink/scan damage in one particular copy, one was an ordinary line
break. Nothing here reached the English as a `[sic:]`.

### The two witnesses and their page maps (both calibrated against the printed corner numbers)

| witness | address | map | verified on |
|---|---|---|---|
| archive.org `patrologiaecurs06saingoog` (on disk, `raw/scans/pl114/`) | PDF page | **page = (column + 11) / 2** | p. 217 = cols 423/424 |
| Gallica **`ark:/12148/bpt6k54939667`** (IIIF, one HTTP request per page) | leaf `f<N>` | **f = (column + 1) / 2** | f242 = cols 483/484 |

Gallica IIIF, User-Agent required:
`https://gallica.bnf.fr/iiif/ark:/12148/bpt6k54939667/f<N>/full/1600,/0/native.jpg`

⛔ **The two maps differ by five leaves.** They are not interchangeable. Calibrate before every use.

⛔⛔ **THE ARCHIVE.ORG COPY OF PL 114 IS BAD IN THIS RANGE.** It clips the outer margin on
pp. 246 (col 481), 247 (col 484), 251 (col 492) — whole line-openings or line-endings gone — **and
it carries ink damage that reads exactly like broken type.** The Gallica copy is clean on every
one of those pages. CLAUDE.md's ⭐⭐ rule ("unreadable is a fact about your copy") is the reason
this stint ships no false accusation against Migne; it should be read as a **positive
recommendation to use Gallica first for PL 114**, not merely as a fallback.

### Withdrawn on the second witness — all five were the archive copy, not the plate

| column | archive copy shows | Gallica shows | verdict |
|---|---|---|---|
| 0482C | *ante **baptismun** culpa* | *ante **baptismum** culpa* | archive ink damage. Our twin is right. |
| 0482C | *sed remanet **secndum** actum* | *sed remanet **secundum** actum* | archive ink damage. Our twin is right. |
| 0487C | *Hoc dicere est **osse** ingratos* | *Hoc dicere est **esse** ingratos* | archive ink damage. Our twin is right. |
| 0488B | *Per unum **Diem** simpla* | *Per unum **diem** simpla* | archive ink damage. Our twin is right. |
| 0493C | *quia nec bonum illud quod **nolo*** | *quia nec bonum illud quod **volo*** | archive ink damage. **Our twin is right, and this is the dangerous one:** *nolo* inverts the clause and would have been "found" by any Latin-vs-English reader working from that copy alone. |

Two smaller ones went the same way: 0493A *et si* / **etsi** and 0493B's comma after
*naturaliter* — both archive artefacts, both matching our twin on Gallica.

### Confirmed on BOTH witnesses — the one real thing

**0493B `ab bonum operandum`.** *ab* + accusative, printed identically on both copies. This is
Migne's, and it is the sole `[cj:]` of the stint (§C below).

### The two "split words" that are NOT split words

⚑ Both of this stint's apparent Pattern 10 word-division defects are **line breaks in Migne that
Corpus Corporum re-joined with a space.** Neither is a defect in the type, and neither takes a
`[sic:]`:

- **0481C `pro mittentia`** — the plate breaks *promittentia* between lines
  (`…Mystica ergo et pro` / `mittentia, in Evangelio…`). The archive copy shows a hyphen after
  *pro*; the Gallica copy does not. Either way the break is typographic, not a broken sort.
  Rendered **"those that promise."**
- **0485D `imputa batur`** — the plate breaks *imputabatur* as `imputaba-` / `tur`, i.e. the
  digitization did not even split it where Migne did. Rendered **"was imputed"**, with the sense
  supplied in plain words per 7a⁗ (the run was the clause's only predicate).

⭐ **The generalizable finding: in this book, a space inside a word in our Latin is a line break
until the plate says otherwise.** Both instances would have shipped as `[sic:]` under a
file-only workflow, and both would have been false claims against Migne's compositor.

### Ledger entry owed (NOT written here — `data/plate-reads.json` is shared with peer stints)

The merge step should add, under `works`:

```
"8996": [
  { "from": "0481A", "to": "0494D", "depth": "read",
    "witness": "gallica ark:/12148/bpt6k54939667 (f241-f247) + archive patrologiaecurs06saingoog (pp. 246-252)",
    "note": "chunks 0005-0009 stint, 2026-08-31. Both witnesses; archive copy clips margins and carries ink damage on cols 481, 484, 487, 488, 492, 493 - see cruces-0005.md SS-P. Licenses the 3 [var:] and 1 [cj:] in 0007-0009." }
]
```

`data/plate-notes/8996.tsv` already carries the work's one asterisk note (p. 240, col 0470); no
foot-of-page apparatus was seen on pp. 246–252 in either witness. That is a by-the-way
observation from a read made for other purposes, **not** a coverage claim.

---

## §V · VOCABULARY FIXED IN THIS STINT — later stints and the merge should inherit

| Latin | English | why |
|---|---|---|
| *justus · justitia · justificare · justificatio* | **just · justice · justify · justification** | The whole of Rom 3–7 as Migne glosses it is one argument built on this root. "Righteousness" would break every gloss that turns on *justus*/*justificatus* (0481A–B; 0482A). Never "righteousness". |
| *praevaricatio · praevaricator · praevaricari* | **transgression · transgressor · to transgress** | Held apart from *peccatum* (sin), *iniquitas* (iniquity), *delictum* (offence). The distinction IS the argument at 0483B–C: *Qui enim legem non acceperunt, iniqui dici possunt, praevaricatores autem dici non possunt.* Collapsing any two of the four destroys that sentence. |
| *delictum* | **offence** | Rom 5:20's *Ubi abundavit delictum* and its whole exposition (0486C, 0487A–B). |
| *culpa · poena* | **fault · punishment** | Set against each other as a pair at 0488B (*in culpa et poena*), and again at 0482C. |
| *fomes* | ***fomes*** (italic Latin, invariable) | Register rule: technical term with no clean English exponent. Occurs 0482B, 0488D, 0491D, 0492B, and the gloss at 0488D *defines* it (*nomen est fomitis, scilicet vitii innati*), so an English word would make the definition circular. ⚠ **A merge partner rendering it "tinder" would be drift** — flag if seen. |
| *propassio* | ***propassio*** (italic Latin) | Same class; 0488D names it as one of three technical stages beside *delectatio* and *consensus*, which ARE Englished (delight, consent) because they have exponents. |
| *charitas* | **charity** · *dilectio*, *amor* | **love** | Inherited from the sibling 8976 §V. *charitas* at 0484B–C, 0492A. |
| *amare* / *diligere* in the 0482B doublet | **to love** / **to hold dear** | ⚠ **Deliberate local exception.** Migne sets them side by side — *illum credendo amare, credendo diligere* — so one English word for both would print as our own dittography. Everywhere else *dilectio*/*diligere* is plain "love" (0484C *Deus late nos diligit*). Do not sweep this to uniformity without reading the line. |
| *virtus* | decided per occurrence | 0484B *testimonio virtutis, id est patientiae vel miraculorum* → **virtue** (the gloss's first exponent is patience); 0493B *deest virtus perficiendi* → **strength**. Migne's one word covers both and English has no single equivalent. |
| *usque ad* (the excerpt formula) | ***as far as*** | Inherited from 8976/8970/8965. 8 occurrences in this stint. |
| *quasi dicat* | **as if he should say** | Inherited from 8976. |
| *VERS. N.--* | **kept verbatim, untranslated** | 8976 precedent, corpus-wide for this genre. Migne prints *VERS 19.* without the point at col 0486D in the archive copy and *VERS.* elsewhere; the digitization normalizes and so do we (Pattern 9, section labels). |
| *CAPUT N.* | **CHAPTER N.** | Head text translated, `## ` structure 1:1. `(cont.)` on 0005's head is our chunk division, not Migne's. |
| *Ecclesia* / *spiritus* | **capitalization mirrors the plate** | 0486B *salvatur Ecclesia* capitalized; 0490D *scilicet spiritus in quibus* and 0483D *per spiritum regenerationis* lowercase against capitalized *Spiritus* at 0484B–C. All mirrored. Verified on the plate; not our slip. |

**Second person (Pattern 17).** Every archaic token in this stint renders a grammatical singular
and every "you" a grammatical plural. The singulars: 0482A *Nihil boni fecisti … opera tua*
("Thou hast done nothing good … Thy works"); 0482A *Non tibi blandiaris*; 0484C *ne desperes*;
0484D *Mortuus est pro te, o homo mortalis, ut vivas cum illo* and the four *induit se / induet
te* clauses; 0491B *Non concupisces rem proximi tui*; 0491C *quando … securus peccabas*;
0492A *Gladio tuo quem portabas … esto ergo humilis et poteris vincere*; 0492D *de se hoc tibi
proponit, ne … desperes in te*. The plurals: 0482B *Non sic intelligatis*; 0488D *Ita et vos*;
0489A–B *Eratis enim … vestra autem sponte*; and — the clean worked case — 0489D's John 8:36
*Si Filius **vos** liberaverit, vere liberi eritis* → "**you**", inside a paragraph whose
surrounding prose is third-person. A reader can see the number change with no apparatus.

---

## §S · VULGATE DIVERGENCE LIST — the deliverable

Every scripture lemma and quotation in cols 0481B–0493D was read **word by word against the
printed Latin** before the English was written, and then against the Vulgate. The lemmata checked
are named here so a later reader can re-run the check rather than take it on trust.

### The bar used for firing `[var:]`, stated so it can be argued with

**A `[var:]` fires only where the divergence changes the sense, and only on scripture quoted AS a
proof-text.** It does **not** fire on a bare lemma head that clips a connective (*enim*, *autem*,
*ergo*) or reorders two words — in a lemma-and-gloss commentary the lemma head is a pointer into
the verse, and clipping is what pointers do. Marking those would put a `[var:]` on roughly a
quarter of the paragraphs in this book and bury the three that matter. **All of them are still
listed below**, because the list, not the marker, is the scholarly payload.

### Fired — 3

1. **0485C · Wisdom 2:24**, quoted as a proof-text for original sin by propagation.
   Migne: *Invidia diaboli mors intravit in hunc mundum.*
   Vulg: *invidia autem diaboli mors **introivit in orbem terrarum**.*
   `[var: Vulg. Sap. 2:24 …, "into the whole earth"]`. Three divergences at once (*autem*
   dropped, *introivit*→*intravit*, *orbem terrarum*→*hunc mundum*), and the direction is not
   random: **the quotation has been conformed to the wording of Rom 5:12** (*peccatum in hunc
   mundum intravit*), which is the verse the paragraph is expounding. Plate-verified, p. 248.
2. **0487B–C · Rom 5:20**, the verse the whole of CAPUT VI is a reply to.
   Migne: *Ubi abundavit delictum, superabundavit **et** gratia.*
   Vulg: *Ubi **autem** abundavit delictum, superabundavit gratia.*
   `[var: … without *et*]`. Plate-verified on both witnesses, p. 249 / f244.
3. **0491B · Exod 20:17**, adduced to decide whether *concupiscentia* in Rom 7:7 is general or
   specific — so the wording is load-bearing for the very question asked.
   Migne: *Non concupisces **rem** proximi tui **vel uxorem**.*
   Vulg: *Non concupisces **domum** proximi tui: **nec desiderabis uxorem ejus**.*
   `[var: …]`. **Migne's *rem* is precisely the generalizing word**, and the gloss immediately
   answers *Generalem, quia ex ea omne malum.* Plate-verified on both witnesses, p. 251 / f246.

### Logged, not marked — divergences that do not change the sense

- **0490B · Rom 6:14**, quoted in prose: Migne *Non estis sub lege, sed sub gratia*; Vulg *non
  **enim** sub lege **estis**, sed sub gratia*. Word order + dropped *enim*.
- **0489D · John 8:36**: Migne *Si Filius **vos** liberaverit*; Vulg *Si **ergo vos** Filius
  liberaverit*. Word order + dropped *ergo*. Sense identical.
- **0484A · 1 Cor 4:7** in prose: Migne *quid habes quod non accepisti?*; Vulg *Quid **autem**
  habes…*.
- **0481B · Jas 2:26**: Migne *Fides sine operibus mortua est*; Vulg *ita et fides sine operibus
  mortua est*. (Jas 2:20's *otiosa* is the other candidate; *mortua* fixes it as 2:26.)
- **0481B · 1 Cor 13:2**: Migne *Si habuero omnem fidem*; Vulg *et si habuero omnem fidem*.
- **0483B · Rom 4:15** lemma head: Migne *Lex iram operatur*; Vulg *Lex **enim** iram operatur*.
- **0483C · Rom 4:19** lemma head: Migne *Non est infirmatus*; Vulg *non infirmatus est*.
- **0490C · Rom 7:3** lemma head: Migne *Igitur vivente **marito***; Vulg *Igitur, vivente
  **viro***. ⚑ The most substantive of the unmarked set — a lexical substitution, not a clipped
  particle — but *maritus* and *vir* are the same man and nothing in the gloss turns on the word.
  Named here because it is exactly the class a later reader should be able to find.
- **0492D · Rom 7:15** lemma head is truncated mid-clause: *Non enim quod volo bonum, hoc ago;
  sed quod.* Rendered truncated ("…but what."), stopping where the plate stops.

### Two locator observations (references, not readings — no marker, per the corpus rule that
`refDisplay` keeps what Migne prints)

- ⚑ **0484C · `[n: (Eccli. V)]` points to the wrong book.** The text quoted — *Fons aquae tuae sit
  tibi proprius, et nemo alienus communicet tibi* — is not in Ecclesiasticus 5. It is a close
  rendering of **LXX Proverbs 5:17–18** (*ἔστω σοι μόνῳ ὑπάρχοντα, καὶ μηδεὶς ἀλλότριος
  μετασχέτω σοι* · *ἡ πηγή σου τοῦ ὕδατος ἔστω σοι ἰδία*), i.e. an **Old Latin** form, and it
  matches the Clementine Prov 5:17–18 (*Habeto eas solus, nec sint alieni participes tui* · *Sit
  vena tua benedicta*) in neither wording nor vocabulary. Note and text both plate-verified on
  both witnesses (f242 gives the line whole where the archive copy clips it). **No `[var:]`
  fired**: the marker's form requires naming a received reading *for the passage cited*, and
  there is none for Ecclesiasticus 5 — the divergence is in the reference, not in the text.
  The identification belongs here, and to the indexer's `refKey`.
- **0492D · Migne's `VERS. 16.` heads what is Rom 7:15** in the Vulgate versification
  (*Quod enim operor, non intelligo*). A locator, normalized nowhere and corrected nowhere;
  recorded so the indexer is not surprised.

---

## §C · CRUCES BY COLUMN

**0481A–B — *Non quin credens post per dilectionem non debeat operari*.** Two negatives, both
carried: "Not but that the believer ought not afterwards to work through love." The sentence the
argument requires is affirmative (works *do* follow justification — the next clause is *Sequuntur
enim opera justificatum*), and *non quin* + *non debeat* as printed will not deliver it. Rendered
as printed per Pattern 7; the reading intended is almost certainly *Non quin … debeat operari*.
No marker: both words are real and both render in place.

**0481C — *additur. et quod lex venturum promittebat*.** Migne prints a full stop and then a
lowercase *et*, on both witnesses. Pattern 8 keeps the stop; English orthography supplies the
capital ("And what the law promised…"), because a lowercase sentence-opening in English reads as
our typesetting error and has no exponent for the Latin fact. The Latin twin carries the plate's
lowercase, so nothing is concealed. **This is a capitalization decision, not a punctuation one**;
no mark was added or deleted.

**0481C — `pro mittentia`.** See §P. Line break, not split type. "those that promise."

**0483B — *vel reos faceret temporalibus poenis iram operaretur, quia praevaricationem, quod
qualiter sit, aperit, dicens*.** Will not construe as printed: two finite verbs in asyndeton
(*faceret … operaretur*) and *praevaricationem* left as an accusative with no governing verb.
Rendered as closely as the printed words allow, with the governing verb supplied in brackets
("because [it works] transgression"), which is the corpus's supplied-word convention and is
visible as ours. The reading required is something like *… iram operaretur, quia
praevaricationem [operatur]*. No marker: nothing here is broken type.

**0485D — `imputa batur`.** See §P. Line break, not split type. Rendered "was imputed", which
keeps the clause's only predicate outside any quarantine (7a⁗ test 1).

**0485D — *Regnavit ergo mors (ut habet alia littera)*.** Migne's own parenthetical variant note,
reproduced as printed. Not our apparatus, not a `[var:]`; it is Migne telling the reader that
another copy reads otherwise, and he does not say what it reads.

**0489A — *Hoc quidam, qui legem quasi cohaerentem vel coercentem praedicant, et tenendam.***
No finite verb in the printed clause. Rendered with a bracketed "[say]"; the alternative was an
English fragment that reads as our omission. Verified on the plate — the clause is short in Migne
too, and the archive copy's margin loss is not the cause.

**0492A — *Fallax enim dulcedo est, quam plures atque majores poenarum amaritudines sequuntur.***
*quam* is the relative object of *sequuntur*, so "which more and greater bitternesses of
punishments follow." Rendered so; noted because the English inverts the apparent order and a
later reader might read *quam* as comparative after *plures*.

**0493B — *impotens surgere `ab` bonum operandum* → `[cj: *ab*; read *ad*, "to"]`.**
The one marker of its class in the stint, and the one thing both witnesses agree Migne printed.
*ab* is a perfectly real preposition, so Pattern 12 has nothing to wrap and Pattern 7 renders it —
and the faithful English then says the will is *powerless to rise **from** the doing of good*,
which is the exact reverse of the paragraph (*naturale est quodammodo bonum velle per rationem*).
That is Pattern 18's founding shape (11081 @0030B *munde* for *mundo*), so the gloss is additive:
Migne's word keeps its English and the conjecture *ad* stands beside it. *ab* + accusative is
ungrammatical, which is the evidence.

**0493B — *Nam velle.* Velle non:**. Elliptical and unconstruable as it stands. Rendered
literally ("To will, not:") rather than completed. The conjecture, on the strength of the verse
being glossed (*Nam velle adjacet mihi, perficere autem bonum non invenio*) and of the run of
lemmata that follows (*Velle* … *Perficere*), is that the sense is *velle [adjacet], non
[perficere]* — "to will, not to accomplish". **Deliberately kept out of the text**: supplying
*[to accomplish]* in brackets would have put a two-word content conjecture inside the running
prose where our brackets otherwise carry only grammatical glue.

**0482C — *quae parvulum habilem concupiscere, sed, non concupiscere, facit*.** Reads as a
contradiction and is not one: the child is made *capable of* concupiscence but not *actually*
concupiscing. Both negatives carried, both commas kept as printed (verified on both witnesses).

**0481C–D — *Ad Deum autem habet gloriam: non ergo ex operibus justificatus est.*** (Corrected
column, 2026-08-31 polarity read — this entry was mis-filed under 0484A, which is merely the
last column of this chunk; the `[0481D]` anchor sits inside the quoted sentence itself.) Reads
at first
as a dropped negative against Rom 4:2 (*habet gloriam, sed non apud Deum*). It construes as
printed — the glory he has *in relation to God* is precisely what shows the justification was not
from works — and the immediately preceding sentence has already given the other half (*haec
justificatio est in opinione hominum, et non apud Deum*). **Examined and deliberately left
unmarked**; recorded so a later polarity sweep does not re-open it.

**0484A–B — *Abraham ac Sarae matricem … jam emortuos*.** Masculine plural participle against a
feminine accusative object. Pattern 9: Latin grammatical gender has no English exponent, so there
is nothing to render either way and nothing to emend. Rendered normally.

**0488C — `*Scientes quod Christus. (AUG)*.`** The attribution rides inside the italic lemma and
outside the `[n:]` namespace, unlike the other four notes in that chunk. Both witnesses print
`(Aug).` there, and our twin carries it as body text, so it is reproduced verbatim and
untranslated, exactly as an `[n:]` content would be. It is correctly **not** counted in
`noteCount`.

---

## §M · FOR THE MERGE

1. **`data/plate-reads.json` entry is owed** — the JSON is in §P, ready to paste. It was not
   written here because peer stints are live on the same file.
2. **Use Gallica for any further PL 114 plate work in cols 481–494.** §P documents why, and gives
   the calibrated map. A peer stint working from the archive copy alone is at material risk of
   shipping a false `[sic:]`; five candidates in this stint alone would have qualified.
3. **Check the peers for *fomes*, *propassio*, *justitia* and *praevaricatio*.** These four are
   the drift-prone terms of this book, and §V fixes them. *justitia* → "righteousness" anywhere in
   the work would be the serious one.
4. **This file is `cruces-0005.md` by instruction** and should be folded into the work's single
   `cruces.md` at merge, with §P promoted — it is a finding about the volume's scans, not about
   this stint.
