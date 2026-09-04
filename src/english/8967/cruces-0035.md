# Cruces — 8967 *Glossa ordinaria*, Liber Psalmorum, chunks 0035–0038 (cols 0911C–0918C)

Band A, final stint, Psalms XLV–XLIX. Latin `src/latin/8967/0035.md`–`0038.md`.

## 0. SPAN COUNT RECONCILIATION — the brief is CORRECT

`data/briefs/8967-lemmata-0035.txt` declares **222 spans**. Counted mechanically over the four
chunks' Latin bodies (frontmatter excluded, `\*[^*]*\*`):

| chunk | spans |
|---|---|
| 0035 | 59 |
| 0036 | 51 |
| 0037 | 45 |
| 0038 | 67 |
| **total** | **222** |

**222 = 222**, and the brief's own inventory-line count (`^\[0`) is 222 as well. No mis-split. The
head of the range (`VERS. 1.-- *In finem.*` at 0911C) and the tail (`*Salutare Dei.*` at 0918B)
are both present, so the file is shifted at neither end.

English span parity is **1:1 in every chunk** with markers stripped, as are notes (31 / 19 / 26 /
39), column anchors (identical lists, in order and in place), question marks (0 / 1 / 1 / 2),
colons and semicolons band for band.

## 1. PLATE READS — FOUR PAGES, ALL EIGHT COLUMNS OF THIS RANGE, ALL PREVIOUSLY UNREAD

Cols 0911–0918 had never been read. All four pages (PDF 461–464 by the work's map,
`PDF page = (column + 11) / 2`, on-disk `raw/scans/pl113/patrologiaecurs04migngoog.pdf`) were
opened for this stint, **corner numbers read before the text** (911/912, 913/914, 915/916,
917/918), full page width at 300 dpi with 600 dpi crops on every candidate. Recorded in
`data/plate-reads.json`. **Zero foot-of-page conjecture apparatus of either layer on any of the
four pages** — consistent with the work's existing spot coverage, and still a sample.

⚑ **All four left-hand columns (911, 913, 915, 917) are CLEAN.** None is 1 (mod 4), so this range
adds nothing to that tally either way; it is recorded only so a later stint need not re-open the
leaves. Every marker below rests on a word read mid-line in a clean column.

## 2. MARKERS FIRED — three, each licensed by a column read at the plate

### 2.1 `[sic: *sucipientis*]` — 0914B, chunk 0036

Migne prints *Id est, populi non **sucipientis** misericordiam*. Read at 600 dpi, mid-line, in a
clean column: the plate itself sets *sucipientis*, and Corpus Corporum transcribed it faithfully.
A non-word (for *suscipientis*), and brief §A's rule — a suspicion aimed at a non-word has been
right every time — is here settled by the plate rather than by frequency. **The marker does not
swallow the word:** the English reads "of a people not receiving [sic: *sucipientis*] mercy", and
with the bracket deleted the clause still has its participle, its negation (*non*) and its object
(*misericordiam*).

### 2.2 `[var: Vulg. Ps 48:2 *Audite haec, omnes gentes*]` — 0915A, chunk 0037

Migne heads Psalm XLVIII's second verse **`Odite haec, omnes gentes.`** — "*Hate* these things" —
where the Clementine has *Audite*. Plate-confirmed at 300 dpi in a clean column. This is the
sharpest thing in the range, because **the gloss under it argues from the Vulgate reading and not
from Migne's**: Cassiodorus answers *Nullum excipio* ("I except none") and the next verse's gloss
*Nulli sermonem subtraho* ("I withhold my speech from none") — both are glosses on an *invitation
to hear*, and neither has any purchase on a command to hate. Pattern 7 therefore governs the
English: it reads **"Hate these things, all ye nations"**, and the `[var:]` carries the divergence.
⛔ Conforming the lemma to *Audite* would have been the exact 7a″ silent repair, and it would have
concealed the one place in this range where Migne's plate and his own commentary come apart.

`omnes gentes` here → **nations**, not Gentiles: the gloss reads the address as universal
(*Nullum excipio*, *Nulli sermonem subtraho*, *audiat haeres terrae … justus*), with no
*Judaei*/*gentes* opposition anywhere in the psalm.

### 2.3 `[sic: *Tempesta*]` — 0916D, chunk 0038

Migne prints *Tempesta valida.* where the Clementine (Ps 49:3) has *tempestas valida*.
Plate-confirmed at 600 dpi. **Why `[sic:]` and not `[var:]`, which was the rival and lost:** a
`[var:]` asserts that Migne's *text* diverges from a witness, which implies a reading some
tradition holds. No witness reads *tempesta*; the nominative does not exist for this noun, and
*tempesta valida* will not construe. What the plate shows is a dropped final letter — a defect in
the type — so `[sic:]` is the honest instrument and `[var:]` would have dressed a broken sort as a
textual variant. The English still says "A mighty tempest": the marker records the type, not the
sense.

## 3. CANDIDATES DECLINED — with reasons, and this list is the deliverable

**Plate-confirmed as Migne's, and deliberately left unmarked:**

1. **0916D `in circumitu ejus`** (Clementine Ps 49:3 *in circuitu ejus*). Plate-confirmed, so it
   is Migne's and not the digitization's. Declined because *circumitus* and *circuitus* are the
   same lexeme and the sense is untouched — Pattern 14 marks a divergence when it is **material**,
   and an orthographic doublet is not. Recorded here so the negative is on file.
2. **0913B `Deus sedet super sedem sanctam.`** (Clementine Ps 46:9 *sedem sanctam **suam***).
   Plate-confirmed. Declined as a **truncated citation, not a variant**: the gloss cuts the
   quotation precisely at the words it is about to take up as its own next lemma (*Sedem sanctam.*
   follows immediately). Marking the omission would convict Migne of a reading where he was only
   quoting as far as he needed.
3. **0917A `Deus est judex justus.`** Neither Ps 49:6 (*quoniam Deus judex est*) nor Ps 7:12
   (*Deus judex justus, fortis*) matches it verbatim, and it stands inside an *usque ad*
   resumption tail, where the recension itself re-sets the words. **Declined because I cannot say
   which verse the span is a divergence FROM**, and a `[var:]` that names the wrong verse is worse
   than none. The crux is the safe instrument here and this is it.
4. **0916D `usque ad: exibit de Sion lex, et Verbum Domini de Jerusalem.`** (Isa 2:3 Clementine:
   *de Sion exibit lex, et verbum Domini de Jerusalem*). Word order only, inside an abridgment
   tail. Immaterial; declined.
5. **0914D `Dilectio fortis est ut mors.`** (Cant 8:6 Clementine: *fortis est ut mors dilectio*).
   Same words, different order, in the gloss's own voice under *whence Solomon*. Immaterial;
   declined. ⚑ Noted because a reversal of this shape was a real defect at 7914 @1079B — but there
   the reversal was **ours**, against a plate that printed the order straight. Here the plate
   prints the reordering, so there is nothing of ours to undo.
6. **0913D `ab aquilone pandetur omne malum`** (Jer 1:14: *Ab aquilone pandetur malum super omnes
   habitatores terrae*). An adapted citation inside an *usque ad* tail — *omne* has been pulled
   forward out of *omnes habitatores*. Declined as adaptation, not divergence.
7. **0913D `In Bethlehem Judae secundum Scripturas.`** (Mt 2:5: *In Bethlehem Judae: sic enim
   scriptum est per prophetam*). The gloss's own summary of the answer given to Herod, not a
   quotation offered as one. Declined.
8. **0913C `Psalmus vel laus cantici filiis Core secunda,`** (Clementine Ps 47:1: *Psalmus cantici,
   filiis Core, secunda sabbati*). The *vel laus* is the glossator offering an alternative rendering
   of the titulus, marked as such by *vel*; it is not a claim about the Psalter's text. Declined.
9. **0918C `quem novit, qui aliquid alii quam gratiae Dei attribuit.`** The sense plainly wants a
   negative — Augustine's point is that the man who ascribes anything to something other than
   God's grace does **not** know Christ. **Migne prints no negative**, confirmed at 600 dpi, and
   Pattern 7a forbids supplying one. The English carries the printed reading and contradicts
   itself, which is the evidence. (See §4 for what our TEI does to the same clause.)

**Real words that read oddly, rendered as printed and NOT raised as plate candidates** (brief §A:
a real word reading oddly is Migne's): 0914C `qui multis:` (the clause has no verb and the colon
hangs — rendered literally, "who to many:"); 0917D `Nostra tribulatio proprie est timore salutis`
(ablative where a genitive is expected); 0918A `In his omnia tonat vitia`; 0916A `quasi felicitas
nominatur impiorum`. All four are on read pages and all four print exactly as our Latin has them.

## 4. CC-NORMALIZATION CANDIDATES — SEVEN, all TEI-patch material, NO markers owed

Every one was found by reading the whole line for a different word, exactly as brief §C predicts.
⛔ **None of these may carry a marker in either direction**: firing a `[sic:]` on one would accuse
Migne of his transcriber's defect. They are logged for `data/tei-patches`, with the leaf named.

| column | leaf | Migne's plate | our TEI | class |
|---|---|---|---|---|
| 0912B | PDF 461 | *diluculo* | *diliculo* | CC **corruption** (u→i); our file holds a non-word |
| 0914A | PDF 462 | *Conteres naves Tharsis.* (space) | *naves-Tharsis* | CC **hyphenation artifact** at a line break |
| 0915A | PDF 463 | *sed quae omnia **concludi**.* | *concludit* | CC **normalization** — the plate's form does not construe, which is why it was tidied |
| 0915D | PDF 463 | *jumentis, **non alia re**, sed in sapientia* | *non in alia re* | CC **supplies** an *in* (the 8969 @1168B class exactly) |
| 0917A | PDF 464 | *qui pluris habent **opere** charitatis* | *opera* | CC **normalization** |
| 0917C | PDF 464 | ***Hic** similitudinibus figurat Ecclesiam* | *His* | CC **alteration** to a different word (adverb → ablative) |
| 0918C | PDF 464 | *qui **aliqui** alii quam gratiae Dei attribuit* | *aliquid* | CC **normalization**, and the most substantive: *aliquid* is what makes the clause construe at all |

⚑ Three further CC artifacts of a lower order, listed so nobody re-derives them: 0917C our TEI
sets **`VERS, 11.--`** with a comma where the plate sets `VERS. 11.`; 0915A our TEI sets
**`[n: ((AUG.)]`** with a doubled parenthesis where the plate sets a single `(AUG.)`; and at 0918B
the plate's own line-break dittography **`doc-/ctus`** is silently repaired to *doctus* in our TEI.
The English reproduces our TEI verbatim in the first two cases, because a `VERS.` address and a
note both pass through unaltered.

⚑ And a habit rather than a defect, reported once as a class: **CC supplies a full stop before a
siglum where the plate prints none** (0914D *Furem, currebas (Ibid.)*, 0918B *Tui similis (CASS.)*,
0918B *Rapiat (CASS.)*, 0916C *In progenies patrum (Ibid.)*), and **supplies the `--` after
`VERS. n.` where Migne omits the dash** (0915D VERS. 12, 0916A VERS. 15). Nothing turns on either;
no patch is worth filing for them individually.

## 5. VOCABULARY CALLS — the axes, and the two the axes did not rule on

**`gentes`, eleven occurrences, split deliberately:**

- → **Gentiles** wherever the *Judaei*/*gentes* typology is the gloss's own argument: 0911C
  (*quod caecitas contigit in Israel, quod Apostoli transierunt ad gentes*), 0911D, 0911D
  *amaritudine gentium*, 0912A *Immanitas gentium*, 0912A *Contradicentes, gentes*, 0912C–D
  Psalm XLVI's *Omnes gentes* and the two glosses under it (*vos omnes gentes ad quas transivit
  gratia*), 0913B (*expulsis Judaeis, gentes in filios Abrahae succedunt* — the opposition stated
  in as many words).
- → **nations** where the sense is plainly generic: 0912A *cui gentes et regna subjiciuntur* — the
  phrase is Ps 45:7's own (*conturbatae sunt gentes, et inclinata sunt regna*), a pair of political
  words with no typology attached; and 0915A *Odite haec, omnes gentes* with its gloss (see §2.2).
- `gens` singular of the Jewish people → **nation**: 0914C *Per Judam, gens earum ostenditur*.
- ⚑ I checked the instrument before reporting any of this: `natio` occurs **zero** times in these
  four chunks (every apparent hit is *damnationis* / *incarnationis* / *significatio*), and there
  is no `gentilis` or `gentilitas` in the range.

**`usque ad`, thirty-four occurrences, decided per occurrence per brief §D.** ⛔ A raw grep returns
34 and the formula is **32** of them — the trap brief §D names, and it fires twice in this range.
The two look-alikes are both *A solis ortu **usque ad** occasum*: at 0916D inside the lemma span
(Ps 49:1's own words) and at 0917A unitalicised in the gloss that re-quotes it. Both are **temporal**
and both are rendered "from the rising of the sun **unto** the going down", identically in both
places. That is the Lc 16:16 exception from the shared brief, met in the wild. The other 32 are the
abridgment formula → **"as far as"**.

**`Diapsalma` / `Diapsalmus` — both forms occur and both stand.** Migne sets *Diapsalmus* at
0912A, 0912B, 0916A and 0916B, and *Diapsalma* at 0913A. Neither is anglicized and neither is
replaced by its explanation; each is carried in the form the plate prints, roman where Migne sets
it roman (he does, in all five places — so no italics were added, which would have broken span
parity as well as fidelity).

**`Dominus virtutum` → "the Lord of hosts"** (0912B, and twice at 0914A). ⚑ This is a departure
from this work's other renderings of *virtutum* ("of the virtues" — 0866C, 0885B, 0901C) and it is
taken **because the gloss argues from the word**: at 0914A the comment on *In civitate Domini
virtutum* is *quia ibi custodes angelos deputat*, "because there he appoints angels as guards", and
at 0913B the gloss on *Sedem sanctam* is *Throni, Virtutes, et sancti* — the angelic orders. Migne's
*virtutes* in this title are the hosts, on his own showing. Saying so here rather than silently, per
the brief: this is the axis a Band B or C stint will meet next (`Deus virtutum` recurs at 0947A,
0975B, 0978D, 0979B, 0981A).

**`sedes` → "seat", never "throne"** (0913B, twice). Forced by the same sentence: the gloss
explains *sedem sanctam* as *Throni, Virtutes, et sancti*, so "throne" in the lemma would collide
with the angelic order **Thrones** three words later and make the gloss circular.

**`saeculum` → "the world"** (0911D, 0916B), matching the work's 22 prior uses.
**`diabolus` → devil** (0916A), **`daemonibus` → demons** (0917D) — axis 3 kept apart; there is no
`daemonium`/`diabolus` collision in the range.

## 6. FRAGMENTARY LEMMATA — expanded per convention 3, and the ones left as they stand

Expanded, because the governed word is elided and the stump would say nothing:

- 0913A `*Omnis. [n: (Ibid.)]*` → **"Of all the earth."** (Ps 46:8 *rex omnis terrae Deus*). The
  gloss's whole argument is the universality — *Non ut Jupiter Cretae, Mars Thraciae* — so a bare
  "All." would strand it.
- 0918B `*Statuam contra tuam.*` → **"I will set against thy face."** (Ps 49:21 *statuam contra
  faciem tuam*). *Faciem* is elided between *contra* and *tuam*; the gloss's own next words are
  *ante faciem ponam*.

Left as they stand, because nothing is elided (the class distinction the shared brief insists on):
`*Mane.*`, `*Vocem.*`, `*Noster.*`, `*Posuit.*`, `*Prodigia.*`, `*Excelsus.*`, `*Terribilis.*`,
`*Dextera.*`, `*Gloria.*`, `*Domus.*`, `*Stultus.*`, `*Asaph,*`, `*Sum.*` and the rest of the
one-word run. **Contrasting these with the two above would manufacture an inconsistency that is
not there.**

⚑ One I could not expand and did not: **0913D `*Quoniam reges contra.*`** Ps 47:5 reads *Quoniam
ecce reges terrae congregati sunt, convenerunt in unum*, which contains no *contra*. Read at the
plate: Migne sets *contra* inside the italic run, and it governs nothing. The likeliest reading is
that it answers the gloss's own question two words earlier (*Tutandam, et quid opus est?* — guarded
against what? *reges contra*, the kings against her), but that is a conjecture and supplying "her"
would put it in the text. **Rendered literally, "For the kings against."** and logged.

## 7. UNEXPRESSED SUBJECTS SUPPLIED — named, with what licenses each

- 0911D *Nos enim fugiebamus **eas*** — "we were fleeing **them**": *eas* is feminine and its
  antecedent is not in the sentence. It is **tribulationibus** from Ps 45:2 (*adjutor in
  tribulationibus quae invenerunt nos nimis*), which is also what supplies the subject of
  *invenerunt* in the lemma above. Both stand or fall together, and the verse settles both.
- 0913A *in qua speciosus erit fulgens ut sol, **qui** nunc est abjectus* — the subject of *erit*
  is the Christian people of the clause before, and *qui nunc est abjectus* attaches to it, not to
  a new person. Rendered "in which he shall be comely, shining as the sun, who now is abject",
  which keeps the Latin's own ambiguity rather than resolving it; **flagged rather than decided.**
- 0912D *ut nondum credentes sub pedibus **habeat*** — the subject is *Ecclesia*, named two words
  earlier (*Sic est exaltata Ecclesia*).
- 0918A *cui charitate jungimur* — the antecedent is **Ecclesiae**, which is the gloss's expansion
  of *matris* in the lemma *Et adversus filium matris*; the Church, not the mother's son.
- 0916C *ut malus a malo quiescat* — *malus* is the man, *malo* the evil; rendered "that the evil
  man may rest from evil" and not "from the evil man".

## 8. NEGATION — every printed negative named to its host

Sixty-three negatives across the four chunks (`non`, `nec`, `neque`, `nisi`, `ne`, `nullus`, `nemo`,
`nihil`, `nunquam`), all carried. The ones where the host is not the adjacent verb, which is the
2a trigger population — a negative resting near a quantifier, correlative or predicate:

- 0912B **`non enim illius tantum est Deus`** — the negative belongs on **`tantum`**, not on *est*.
  The preceding clause is *Qui tanta nobis dedit quanta dedit Jacob*: the point is not that God
  fails to be Jacob's God, but that he is not Jacob's **alone**. English: "for he is not the God of
  him alone."
- 0912B **`Non nisi filiorum crucis`** — both particles carried ("Not save of the sons of the
  cross"); rendering it "Only of the sons of the cross" would have dropped two negatives and passed
  every count.
- 0915C **`pro qua tantum timebitur`** with *quasi non est quod timeam* before it — *tantum* is the
  restrictive, and the English puts it there: "for that alone shall there be fear."
- 0918A **`non casu alii derogat, sed studio`** — a `non … sed` correlative, so the negative is on
  **`casu`** and not on *derogat*: "he detracts from another not by chance, but of set purpose."
  Putting it on the verb would have said he does not detract, which the sentence is denying.
- 0918A **`non cum voluntate facit`** — the negative is on the phrase *cum voluntate*, not on the
  verb; the sentence concedes that he does the thing, and denies that he wills it.
- 0917D **`non ideo quod Deus inde delectaretur, sed ne daemonibus offerentur`** — a `non … sed`
  with a second negative (*ne*) inside the *sed* clause; both stand, and the *ne* clause is a
  purpose clause, not a second denial of the first.
- 0913B **`Nemo sapienter facit quod non intelligit`** — two negatives, two hosts, both kept.
- 0914C **`quia nullus est, et si nesciat cultum, qui huic nomini non se subjiciat`** — three
  negative words in one sentence, each on its own host; the *nullus … qui non* is a double negative
  that English must keep as a double negative, not flatten to "everyone submits".

## 9. THE FOURTH TEST — read back for what the English ASSERTS

Run last, with every count already clean. Two paragraphs read smoothly where the Latin is rough
and were re-checked for that reason:

- 0914C *populi non sucipientis misericordiam, qui multis: ut nulla videantur esse grana, sed tamen
  nonnulla* — the smooth reading would supply a verb for *qui multis* and make the grains a simile
  of the temple. **Nothing was supplied**; the colon and the dangling *multis* stand.
- 0918C *Christus, qui cum gratia venit, quem novit, qui aliquid alii quam gratiae Dei attribuit* —
  see §3.9. The English asserts what Migne asserts, which is the opposite of what Augustine meant,
  and the crux is where that belongs.

## 10. GATE STATE — read this before shipping the work

`node scripts/plate-gate.mjs 8967` passes all three of my markers (0914B, 0915A, 0916D) and
**fails on one marker outside my range**: `0904D 0032.md [var: Vulg. Ps 41:1 …]`, chunk 0032,
which belongs to the stint on 0030–0034. Col 0904 is unread. Either that page is read at PDF 458
and recorded, or the marker is withdrawn — it cannot ship as it stands.
