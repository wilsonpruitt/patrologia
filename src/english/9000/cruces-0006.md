# Cruces — 9000 stint 0006–0010 (PL 114, cols 0256A–0267D)

*Evangelium secundum Lucam*, Glossa ordinaria. Chunks `0006`–`0010`, 4,770 Latin words,
CAPUT V (from VERS. 1) through CAPUT VI (to VERS. 49). Written under
`data/briefs/9000-launch-brief.md`; §1's inherited axes were carried in from the first line,
not reconciled afterwards.

---

## §a. THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. No `[sic:]`. None fired, and none was close.** The brief's measured record governs: on John
23 leaf-reads spent on fired markers produced zero corrections and the nineteen DECLINED
oddities produced all seventeen. Every suspect word in this range is in §e, unmarked, with its
column, and with no claim about whose it is. Where a word is a **non-word**, Pattern 7's ruling
is obeyed instead of a marker: it is carried into the English untranslated, in italics
(*ejunus*, *jejumare*), so the reader meets the defect rather than a repair.

**2. `[var:]` fires on a SUBSTITUTED OR ADDED WORD, never on order, orthography, or
abridgment.** This is the line I drew before reading, and I held it in both directions — it
cost me four ⚠ spans I would otherwise have marked, and it forced two markers on spans the
pre-scan had passed with ✓. Explicitly:

| I fire | I decline |
|---|---|
| a word substituted for the received word (*Mox* / *At ille*, *dilectio* / *caritas*, *Concidit* / *cecidit*) | word order alone (*Secus stabat*, *A vestimento novo*, *charitas est patiens*) |
| a word added that the verse does not have (*mala* at Lc 5:22) | Migne's orthography (*Nunquid* / *Numquid*, *charitas* / *caritas* — **each occurs 0 times in `clementine-flat.txt`**, so each flags mechanically) |
| a change of number, mood or person with an English exponent (*sapientis*, *faciatis*) | truncation or abridgment of a lemma (*Cum ablatus fuerit sponsus*, *Gaudete et exsultate*) |
| a quotation that joins two places (Col 3:9 + Eph 4:24) | inflection the gloss's own syntax requires of a woven allusion (*novit qui sunt ejus*) |

**3. A one-word suspicion in a lemma is our-file territory, not Migne's.** So *Praebe illis*
(0263D) and *Supra terram* (0267C) — both of which are genuine divergences from Luke 6 —
took **no marker**, and went to §e instead. The brief's asymmetry is the reason: an OCR
letter-swap can manufacture a broken word, and cannot invent a coherent divergent clause.

**4. Every `[var:]` is citable book chapter:verse against
`sources/vulgate/clementine-flat.txt`, and none rests on the pre-scan or on recollection.**
Every one was re-grepped in the file.

**5. Mechanism 5 was censused across all five chunks, not the first two.** §d.2 lists every
site where a relative, participle or pronoun could bind two ways, including the three in
chunk 0009 and 0010 at the far end of the range.

**6. The inherited axes were measured after writing, mechanically** (§c.2). All six hold at
1:1; none needed an exception, and Luke forced none in this range.

---

## §b. SPAN COUNT — 151 vs 151, counted

`data/briefs/9000-lemmata-0006.txt` prints **151 spans** for chunks 0006–0010.

I counted the italic spans in my own Latin: **302 asterisks in the five chunk bodies
(0006: 126 · 0007: 2 · 0008: 102 · 0009: 68 · 0010: 4), = 151 spans.** The frontmatter
`heads[]` of these five chunks carry no asterisks, so body and file totals agree.

**151 = 151. The brief's split is correct for this range**, and 151 lines parsed cleanly out
of the brief file with none unmatched.

Marker parity, counted before each file was written and again after:

| chunk | col anchors | `[n:]` (body) | frontmatter `noteCount` | `[var:]` |
|---|---|---|---|---|
| 0006 | 16 = 16 | 35 = 35 | 35 | 6 |
| 0007 | 0 = 0 | 0 = 0 | 0 | 0 |
| 0008 | 16 = 16 | 14 = 14 | 14 | 1 |
| 0009 | 14 = 14 | 4 = 4 | 4 | 1 |
| 0010 | 1 = 1 | 0 = 0 | 0 | 1 |

`node scripts/verify-english.mjs 9000` reports **no error and no warning on any of the five**.

---

## §c. THE LEMMA DIVERGENCE LIST — all 151 spans

### §c.1 Summary

| | count |
|---|---|
| spans walked | **151** |
| `[var:]` fired | **9** |
| divergences found and **declined** | **14** |
| of those declines, sent to §e for the plate | **2** (*Praebe illis*, *Supra terram*) |
| false ✓ in the pre-scan found by walking the line | **3** (*Quid cogitatis mala*, *Gaudete et exsultate*, *Supra terram*) |
| `[sic:]` fired | **0** |

⭐ **The three false ✓ are the finding of this section.** The brief warns that ✓ means the
sequence occurs *somewhere*; here it demonstrably came from **another verse** twice
(*Quid cogitatis mala* from Mt 9:4 inside a commentary on Lc 5:22; *Gaudete et exsultate* from
Mt 5:12 where Lc 6:23 reads *Gaudete in illa die, et exsultate*), and once from **nothing at
all**: `supra terram` occurs **nowhere** in `clementine-flat.txt`, case-insensitively, yet the
pre-scan marks span 148 ✓. One of the three carries a fired marker; the other two are declined
on their own merits, and the pre-scan's verdict was wrong in all three.

⭐ **Two ⚠ classes in this range are pure orthography and should be discounted wholesale by
later stints:** `Nunquid` (0 occurrences in the Clementine file, which spells *Numquid*) and
`charitas` (0 occurrences, which spells *caritas*). Three of my nineteen ⚠ spans are nothing
but that.

### §c.2 The inherited axes, measured against the Latin after writing

| axis | Latin in range | English | verdict |
|---|---|---|---|
| *turba* (noun) | 10 | crowd 10 | **1:1** |
| *multitudo* | 0 | multitude 0 | vacuous, nothing flattened |
| *daemonium* | 0 | demon 0 | vacuous |
| *diabolus* | 4 | devil 4 | **1:1** |
| *natio* | 0 | nation 0 | vacuous, so the *gentes* axis flattens nothing |
| *gentes* | 4 | Gentiles 4 | all four stand in the Judaei/gentes opposition (0256A the remoter peoples preached to after the Jews; 0258B–C the Pharisees' envy at their salvation; 0262A Tyre and Sidon as *civitates gentium*) |
| *mysterium* | 2 | mystery 2 | **1:1** |
| *sacramentum* | 3 | sacrament 3 | **1:1** |
| *usque ad* | 21 | *as far as* 21 · *down to* 0 | **1:1**, John's settled form |
| gloss-voice archaism | — | *saith* 0 · *says* used throughout | 8 `-eth` forms, **all 8 inside italic spans** by the mechanical italic-membership test |
| em-dashes | 0 in Latin | 0 in English | |

⚑ **The *turba* measuring trap fired here too, as John's cruces predicted.** A `\bturb` grep
over this range returns 11 hits, one of which is *perturbatos* (0265B, the verb) — a different
word. The noun count is 10, and it is 10 in the English. Anyone re-measuring this range must
exclude the verb before reporting drift.

⚑ **One phrase settles *mysterium* / *sacramentum* mechanically inside this range**: 0259D
prints *novorum mysteriorum sacramenta* — both words in one noun phrase, "the sacraments of
the new mysteries." They cannot share an English word here.

### §c.3 The list — every span, in order

| # | col | span | pre-scan | verdict |
|---|---|---|---|---|
| 1 | [0256A] | VERS. 1.-- *Factum est autem.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 2 | [0256A] | *Secus stabat. [n: (BEDA.)]* | ⚠ | **declined** — Lc 5:1 prints *stabat secus stagnum*; the lemma inverts the two words. Word order only, no English exponent, gloss turns on *secus* not on order. |
| 3 | [0256A] | VERS. 2.-- *Vidit duas naves. [n: (ID.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 4 | [0256A] | *novit qui sunt ejus,* | ⚠ | **declined** — allusion to 2 Tim 2:19 *cognovit Dominus qui sunt ejus*. Woven into the gloss's own syntax (*quia in utroque populo novit…*), carries no citation note, and the dropped *Dominus* is what the weave requires. My most arguable decline: *novit* for *cognovit* is a lexical substitution. |
| 5 | [0256A] | VERS. 3.-- *Rogavit eum. [n: (ID.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 6 | [0256A] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 7 | [0256A] | VERS. 4.-- *Duc in altum. [n: (AMBR.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 8 | [0256A] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 9 | [0256A] | VERS. 5.-- *In verbo,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 10 | [0256C] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 11 | [0256C] | VERS. 7.-- *Et impleverunt. [n: (ID.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 12 | [0256C] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 13 | [0256C] | VERS. 10.-- *Ex hoc jam. [n: (ID.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 14 | [0256C] | VERS. 12.-- *In una civitatum.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 15 | [0256D] | VERS. 13.-- *Tetigit.* | — | single word, checked in place at its own verse; agrees as printed |
| 16 | [0256D] | *Volo.* | — | single word, checked in place at its own verse; agrees as printed |
| 17 | [0256D] | VERS. 14.-- *Praecepit illi. [n: (BEDA.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 18 | [0256D] | VERS. 15.-- *Et conveniebant turbae,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 19 | [0257A] | *Mox egressus, coepit praedicare et diffamare sermonem [n: (Marc. I)]* | ⚠ | ⭐ **`[var:]` FIRED** — Mc 1:45 reads *At ille egressus coepit praedicare, et diffamare sermonem*. *Mox* is a substitution, and the quotation is introduced as Mark's own (*Sed et Marcus ait*). |
| 20 | [0257A] | VERS. 16.-- *Et orabat.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 21 | [0257A] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 22 | [0257A] | VERS. 17.-- *Et factum est.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 23 | [0257A] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 24 | [0257A] | *Et erant. [n: (AMBR.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 25 | [0257A] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 26 | [0257A] | VERS. 18.-- *Viri portantes.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 27 | [0257A] | *Et quaerebant,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 28 | [0257A] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 29 | [0257A] | VERS. 19.-- *Et per tegulas. [n: (ID.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 30 | [0257C] | VERS. 20.-- *Quorum fidem. [n: (BEDA.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 31 | [0257C] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 32 | [0257C] | *Homo, remittuntur,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 33 | [0257C] | VERS. 21.-- *Quis potest dimittere?* | ✓ | ✓ agrees; truncated from Lc 5:21 *quis potest dimittere peccata, nisi solus Deus?* |
| 34 | [0257D] | *Quid cogitatis mala in cordibus vestris?* | ✓ | ⭐⭐ **`[var:]` FIRED — A FALSE ✓.** Lc 5:22 reads *Quid cogitatis in cordibus vestris?* with no *mala*. The pre-scan's ✓ came from **Mt 9:4**, *Ut quid cogitatis mala in cordibus vestris*. This is the documented ✓ trap in its pure form, inside a commentary on Luke 5. |
| 35 | [0257D] | VERS. 22.-- *Ut autem cognovit,* | ✓ | **declined** — Lc 5:22 reads *Ut cognovit autem Jesus*. Word order only. |
| 36 | [0257D] | VERS. 24.-- *Tibi dico, surge. [n: (BEDA.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 37 | [0257D] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 38 | [0257D] | VERS. 26.-- *Et stupor. [n: (AMBR.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 39 | [0257D] | *Perfecta enim [0258B] dilectio foras mittit timorem [n: (I Joan., IV)]* | ⚠ | ⭐ **`[var:]` FIRED** — 1 Jo 4:18 reads *perfecta caritas*. Lexical, cited, and visible in English (love / charity). |
| 40 | [0257D] | VERS. 27.-- *Levi. [n: (BEDA.)]* | — | single word, checked in place at its own verse; agrees as printed |
| 41 | [0257D] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 42 | [0257D] | VERS. 30.-- *Quare,* | — | single word, checked in place at its own verse; agrees as printed |
| 43 | [0257D] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 44 | [0258D] | *Quare cum publicanis,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 45 | [0258D] | *Nolite manducare ex omni ligno? [n: (Gen. III.)]* | ⚠ | ⭐ **`[var:]` FIRED** — Gn 3:1 reads *Cur praecepit vobis Deus ut non comederetis de omni ligno paradisi?* The serpent's speech is quoted in a wholly different form, and cited. |
| 46 | [0258D] | VERS. 31.-- *Medico.* | — | single word, checked in place at its own verse; agrees as printed |
| 47 | [0258D] | *vulneratus est propter iniquitates nostras.* | ✓ | ✓ Isa 53:5, verbatim. |
| 48 | [0258D] | VERS. 32.-- *Vocare justos. [n: (BEDA.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 49 | [0258D] | *Dei justitiam ignorantes et suam volentes constituere, justitiae Dei non sunt subjecti;* | ⚠ | ⭐ **`[var:]` FIRED** — Rom 10:3 reads *Ignorantes enim justitiam Dei, et suam quaerentes statuere*. Two substituted words (*volentes constituere*) beyond the word order. |
| 50 | [0258D] | VERS. 33.-- *Quare discipuli. [n: (BEDA.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 51 | [0258D] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 52 | [0258D] | VERS. 34.-- *Nunquid enim potestis. [n: (ID.)]* | ⚠ | **declined** — the ⚠ is orthographic: *Nunquid* occurs **0** times in `clementine-flat.txt` (the file spells *Numquid* throughout), so every *Nunquid* lemma in this range flags. Beyond that Lc 5:34 lacks *enim*: an added connective in a two-word abridged lemma. |
| 53 | [0258D] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 54 | [0259B] | VERS. 35.-- *Venient autem. [n: (ID.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 55 | [0259B] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 56 | [0259B] | *Tunc jejunabunt,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 57 | [0259B] | *Cum ablatus fuerit sponsus,* | ⚠ | **declined** — Lc 5:35 reads *cum ablatus fuerit ab illis sponsus*. Omission of *ab illis* in an abridged re-quotation. |
| 58 | [0259B] | VERS. 36.-- *A vestimento novo. [n: (BEDA.)]* | ⚠ | **declined** — Lc 5:36 reads *a novo vestimento*. Word order only. |
| 59 | [0259B] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 60 | [0259B] | *Exuite veterem hominem cum actibus suis, et induite novum [n: (Ephes. IV)]* | ⚠ | ⭐ **`[var:]` FIRED** — no single verse carries this. Col 3:9 has *expoliantes vos veterem hominem cum actibus suis*; Eph 4:24 has *et induite novum hominem*. The quotation joins words from the two places and drops *hominem* from the second. |
| 61 | [0259B] | VERS. 37.-- *Vinum.* | — | single word, checked in place at its own verse; agrees as printed |
| 62 | [0259B] | *In utres. [n: (BEDA.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 63 | [0259B] | *Et nemo,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 64 | [0260A] | VERS. 38.-- *Sed vinum.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 65 | [0260A] | VERS. 1.-- *Factum est autem,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 66 | [0260A] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 67 | [0260B] | *Per sata,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 68 | [0260B] | *Vellebant discipuli,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 69 | [0260B] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 70 | [0260B] | VERS. 2.-- *Dicebant illis,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 71 | [0260B] | *In sabbatis.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 72 | [0260B] | VERS. 3.-- *Nec hoc legistis,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 73 | [0260B] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 74 | [0260B] | VERS. 4.-- *Intravit in domum Dei.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 75 | [0260B] | VERS. 6.-- *Homo. [n: (BEDA.)]* | — | single word, checked in place at its own verse; agrees as printed |
| 76 | [0260B] | VERS. 7.-- *Observabant. [n: (ID.)]* | — | single word, checked in place at its own verse; agrees as printed |
| 77 | [0260B] | VERS. 9.-- *Interrogo vos. [n: (BEDA.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 78 | [0260B] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 79 | [0260B] | VERS. 10.-- *Extende. [n: (ID.)]* | — | single word, checked in place at its own verse; agrees as printed |
| 80 | [0260B] | *Non sit manus tua ad accipiendum porrecta, et ad dandum collecta [n: (Eccles., IV)]* | ⚠ | **declined** — Sir 4:36 reads *Non sit porrecta manus tua ad accipiendum, et ad dandum collecta*. Same words, *porrecta* moved. Word order only. |
| 81 | [0260B] | VERS. 11.-- *Insipientia.* | — | single word, checked in place at its own verse; agrees as printed |
| 82 | [0260B] | VERS. 12.-- *Exiit in montem orare.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 83 | [0260B] | VERS. 13.-- *Discipulos.* | — | single word, checked in place at its own verse; agrees as printed |
| 84 | [0260B] | *Sicut misit me Pater, et ego mitto vos [n: (Joan. XX)]* | ✓ | ✓ Jo 20:21, verbatim. |
| 85 | [0261C] | *Non vos me elegistis, sed ego elegi vos [n: (Ibid., XV)]* | ✓ | ✓ Jo 15:16, verbatim. |
| 86 | [0261C] | VERS. 14.-- *Cognominavit.* | — | single word, checked in place at its own verse; agrees as printed |
| 87 | [0261C] | *Tu vocaberis Cephas, quod interpretatur Petrus.* | ✓ | ✓ Jo 1:42, verbatim. |
| 88 | [0261D] | VERS. 15.-- *Matthaeum.* | — | single word, checked in place at its own verse; agrees as printed |
| 89 | [0261D] | VERS. 17.-- *Et descendens,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 90 | [0261D] | *Maritima.* | — | single word, checked in place at its own verse; agrees as printed |
| 91 | [0261D] | VERS. 18.-- *Ut audirent.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 92 | [0261D] | VERS. 19.-- *Eum tangere.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 93 | [0261D] | VERS. 20.-- *Et ipse elevatis,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 94 | [0262B] | *Beati pauperes,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 95 | [0262C] | *usque ad* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 96 | [0262C] | VERS. 21.-- *Qui nunc esuritis.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 97 | [0262C] | *Qui nunc fletis.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 98 | [0262C] | VERS. 23.-- *Gaudete et exsultate.* | ✓ | ⭐ **FALSE ✓, declined.** Lc 6:23 reads *Gaudete in illa die, et exsultate*. The ✓ came from **Mt 5:12**, whose wording is exactly this. Declined because the difference is the abridgment of the lemma, not a substitution. |
| 99 | [0262D] | *Secundum haec.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 100 | [0262D] | VERS. 24.-- *Verumtamen vae,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 101 | [0262D] | *Verumtamen vae.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 102 | [0263A] | *Vae, cum benedixerint vobis homines;* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 103 | [0263B] | VERS. 25.-- *Qui saturati estis,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 104 | [0263B] | *Vae vobis, qui nunc ridetis,* | ⚠ | **declined** — Lc 6:25 reads *qui ridetis nunc*. Word order only. |
| 105 | [0263B] | *Cor sapientis ubi est tristitia, cor stultorum ubi est laetitia [n: (Eccl. VII)]* | ⚠ | ⭐ **`[var:]` FIRED** — Ecl 7:5 reads *Cor sapientium ubi tristitia est, et cor stultorum ubi laetitia*. *sapientis* is singular where the received text is plural, and the number has an English exponent. |
| 106 | [0263B] | VERS. 26.-- *Benedixerint vobis,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 107 | [0263B] | VERS. 27.-- *Diligite inimicos.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 108 | [0263B] | VERS. 28.-- *Orate pro calumniantibus vos.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 109 | [0263B] | VERS. 29.-- *Et qui te percutit.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 110 | [0263B] | *non quaerit quae sua sunt,* | ✓ | ✓ 1 Cor 13:5. |
| 111 | [0263B] | *non aemulatur [n: (I Cor. XIII)]* | ✓ | ✓ 1 Cor 13:4. |
| 112 | [0263D] | *Praebe illis,* | ⚠ | ⛔ **declined and sent to the plate.** Lc 6:29 reads *praebe et alteram*; *illis* answers to nothing in the verse, and the gloss expounds *percutienti maxillam praebere*. This is suspicion of ONE WORD, which the brief's class split says is suspicion of our file — so no marker, and it stands in §e. |
| 113 | [0263D] | *Vestimentum.* | — | single word, checked in place at its own verse; agrees as printed |
| 114 | [0264A] | VERS. 30.-- *Ne repetas.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 115 | [0264A] | *charitas est patiens, benigna est [n: (I Cor. III)]* | ⚠ | **declined** — 1 Cor 13:4 reads *Caritas patiens est, benigna est*. Word order, plus *charitas*/*caritas*: **`charitas` occurs 0 times in `clementine-flat.txt`**, so this spelling flags every Pauline charity lemma. ⚑ Migne's note cites *I Cor. III* for 1 Cor 13; his citation, passed through verbatim, not corrected. |
| 116 | [0264A] | VERS. 31.-- *Et prout vultis.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 117 | [0264A] | *prout vultis ut faciant vobis homines, et vos faciatis illis,* | ⚠ | ⭐ **`[var:]` FIRED** — Lc 6:31 reads *et vos facite illis similiter*. Subjunctive for imperative, and *similiter* dropped. |
| 118 | [0264A] | VERS. 32.-- *Et si diligitis.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 119 | [0264A] | VERS. 35.-- *Verumtamen,* | — | single word, checked in place at its own verse; agrees as printed |
| 120 | [0264A] | *Nihil inde sperantes: et erit.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 121 | [0264A] | VERS. 36.-- *Estote ergo misericordes,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 122 | [0264A] | VERS. 37.-- *Nolite judicare.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 123 | [0264A] | VERS. 38.-- *Eadem quippe mensura.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 124 | [0265A] | *Eadem quippe, [n: (AMBR.)]* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 125 | [0265A] | VERS. 39.-- *Dicebat.* | — | single word, checked in place at its own verse; agrees as printed |
| 126 | [0265A] | *Nunquid potest.* | ⚠ | **declined** — orthography only (*Nunquid* / Clementine *Numquid*); Lc 6:39 otherwise agrees. |
| 127 | [0265A] | VERS. 40.-- *Sicut magister.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 128 | [0265A] | VERS. 41.-- *Quid autem vides,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 129 | [0265A] | *Non consideras.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 130 | [0265C] | VERS. 42.-- *Hypocrita.* | — | single word, checked in place at its own verse; agrees as printed |
| 131 | [0265D] | VERS. 43.-- *Non est arbor,* | ⚠ | **declined** — Lc 6:43 reads *Non est enim arbor bona*. Omission of *enim* in an abridged lemma. |
| 132 | [0265D] | *Neque arbor.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 133 | [0265D] | VERS. 44.-- *Unaquaeque enim arbor.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 134 | [0266A] | *Cognoscitur.* | — | single word, checked in place at its own verse; agrees as printed |
| 135 | [0266A] | *Neque enim de spinis.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 136 | [0266A] | VERS. 45.-- *Profert bonum.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 137 | [0266A] | *Profert malum,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 138 | [0266C] | *Quid autem vocatis me Domine?* | ✓ | ✓ agrees; truncated from Lc 6:46 *Domine, Domine*. |
| 139 | [0266C] | *Ex abundantia.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 140 | [0266D] | *Non fuit verbum, quod non ostenderet eis [n: (Isa. XXXIX)]* | ✓ | ✓ Isa 39:2, verbatim; both negations carried. |
| 141 | [0266D] | VERS. 46.-- *Quid autem,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 142 | [0266D] | VERS. 47.-- *Omnis qui venit,* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 143 | [0266D] | VERS. 48.-- *Fodit in altum.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 144 | [0266D] | *Posuit fundamentum.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 145 | [0266D] | *Inundatione.* | — | single word, checked in place at its own verse; agrees as printed |
| 146 | [0266D] | *Et portae inferi non praevalebunt adversus eam [n: (Matth. XVI)]* | ✓ | ✓ Mt 16:18, verbatim. |
| 147 | [0266D] | *Illisum.* | — | ✓ Lc 6:48 *illisum est flumen domui illi*. |
| 148 | [0266D] | *Omnis qui se exaltat [0267C] humiliabitur, et qui se humiliat exaltabitur [n: (Luc. XIV)]* | ✓ | ✓ Lc 14:11, verbatim. |
| 149 | [0267C] | *Domui illi.* | ✓ | checked in place at its own verse; agrees as printed, so far as the lemma runs |
| 150 | [0267C] | VERS. 49.-- *Supra terram,* | ✓ | ⭐ **FALSE ✓, declined and sent to the plate.** `supra terram` occurs **nowhere** in `clementine-flat.txt` (checked case-insensitively); Lc 6:49 reads *super terram*. The pre-scan's ✓ is wrong here. Declined because *supra* is a real word meaning the same thing, with no English exponent, and one word is our-file territory. |
| 151 | [0267D] | *Concidit et facta est ruina,* | ⚠ | ⭐ **`[var:]` FIRED** — Lc 6:49 reads *et continuo cecidit: et facta est ruina domus illius magna*. *Concidit* for *cecidit* is a substitution, and it is the word the gloss itself picks up two lines above (*in puteo quo concidit*). |

---

## §d. THIS RANGE'S CRUCES, BY COLUMN

### §d.1 Sites where the printed Latin does not construe, rendered as printed

**0256B — *quorum corda … provenit*, a singular verb on a plural subject.**
Migne prints *quorum corda a fluctibus saeculi ad futurae vitae tranquillitatem, quasi ad
littus misericorditer vivendo, **provenit***. *provenit* is intransitive, so *corda* cannot be
its object, and it is singular where *corda* is plural. The obvious conjecture is
***provehit*** ("he brings forward"), which would take *corda* as object and give the sentence
the transitive sense the image wants. **I did not make it.** The English keeps the printed
number — "whose hearts **comes** forth from the waves of the world…" — because English verbs
do carry number and a smoothed "come" would erase the only trace of the defect. Pattern 9's
"no English exponent" licence covers gender, not number.
⛔ I do not know whether *provenit* is Migne's or ours. *provenit* is a normal word (22
occurrences in our Latin corpus), so no frequency test bears on it at all.

**0263A — *cibumque perfidiae quae in praesenti eructant*, a relative agreeing with nothing.**
The clause is the object of *scient*: *cibumque perfidiae … causam tanti supplicii esse
scient*. *cibum* is masculine accusative and would take *quem*; *perfidiae* is feminine
genitive and would take *quam* in this clause. *quae* is neither. Rendered literally, "the food
of faithlessness which they belch forth in the present," binding the relative to the nearer
noun without asserting that the printed form licenses it. Logged rather than repaired.

**0266D — *bonos auditores verbi sibi ipsis … assimilat*.** The whole sentence that follows
(*sicut Christus … unam Ecclesiam construit … sic bonus auditor … aedificat*) requires the
singular, i.e. Christ likens the good hearers **to himself**. Migne prints the dative **plural**
*ipsis*, which cannot mean that and agrees with nothing in the clause. The English reads "to
himself," because that is what the following sentence construes, and the printed plural is
recorded here rather than parked in a marker. ⚑ This is the shape of the defect class the
brief calls mechanism 5, met from the grammatical side.

**0267B — *quando Ecclesia utraque est consummata*.** *utraque* agrees with *Ecclesia*, so the
literal sense is "when each Church has been consummated," which is what the English prints; the
reading the argument seems to want is "when the Church in both its parts is consummated." No
emendation made; the difference is a matter of what *utraque* qualifies and nothing in the type
is defective.

**0266B — *Spina et rubus, haereticis*.** A bare dative where the parallel sentences use the
nominative (*Uva et ficus, dulcedo…*, *spinae et rubi, curae saeculi*). Rendered "The thorn and
the bramble, to the heretics," keeping the case. Possibly an ellipsis of *conveniunt*; possibly
a defect. Not marked.

**0263C — *debet patientiam verberantis sustinere*.** Read as an objective genitive ("the
patient bearing of him that beats"), which is the only reading that construes; a subjective
reading would make charity endure the beater's *own* patience, which the paragraph nowhere
supports. Recorded because the English deliberately turns the genitive rather than smoothing it.

**0258C — *Omnis quaestio ex lege quae tenax justitiae, non habet, etc.*** The abridgment cuts
the sentence with *etc.* before its predicate is complete; *non habet* is left governing
nothing. Rendered as printed, with the truncation visible. This is the recension's own splice,
not a defect.

**0259A — *quia qui opera legis, etc.*** Same class: the `usque ad` abridgment cuts before the
verb, leaving *opera legis* accusative with nothing to govern it. The English reproduces the
cut ("because they who the works of the law, etc.") rather than supplying a verb; supplying one
would be Pattern 8's "never supply" at the scale of a clause.

**0264A — *ut beneficiis aliis trahantur*.** *aliis* is printed, so the English reads "that they
may be drawn by other kindnesses." The sense the sentence seems to want is "that **others** may
be drawn by kindnesses," which would need nominative *alii*. Not emended.

### §d.2 MECHANISM 5 CENSUS — every two-way binding in the range, all five chunks

The brief names re-binding to the contextually easier noun as the dominant defect class. These
are the sites where a relative, participle or pronoun in my range could attach two ways. Case
and gender decided each one, not sense.

| col | chunk | the ambiguity | how it was bound, and why |
|---|---|---|---|
| 0256A | 0006 | *Duae naves … significant **quas** vidit* | *quas* fem. acc. pl. = *naves*, not *circumcisionem et praeputium* (which are fem. sg. and neut. sg.). "which he saw" attaches to the ships. |
| 0256B | 0006 | *quorum corda … provenit* | *quorum* = those who are his (*qui sunt ejus*), not the two peoples. See §d.1. |
| 0257B | 0006 | *quorum rursus adminiculis, et attollere et humiliare **se** … docetur* | *se* is the paralytic, the subject of *docetur*, not the bearers; *quorum* is the bearers. Rendered "by whose supports in turn one is taught both to lift himself up and to humble himself." |
| 0258B | 0006 | *fides gentium, **quae** prius mundanis inhiabant … reficiunt* | the verbs are **plural**, so *quae* is *gentium*, not *fides*. "the faith of the Gentiles, who before gaped after worldly things." A singular reading would have been the easier one and is refuted by the morphology. |
| 0258C | 0006 | *invidia Judaeorum, **quae** de gentium salute torquetur* | *quae* fem. sg. = *invidia*, not *superbia Pharisaeorum* (also fem. sg., but *Judaeorum* is the nearer and the sentence's own subject). Bound to the envy. |
| 0259D | 0006 | *Conveniunt autem apostolis non his qui …* | *Conveniunt* has *novus pannus et novum vinum* for its subject across a sentence boundary, not *veteres utres*: the new things suit the apostles. Negation *non his qui* carried. |
| 0260B | 0008 | *spicae, fructus Ecclesiae, **quibus** saturantur apostoli* | *quibus* = *spicae/fructus*, not *Ecclesiae* (sg.). |
| 0260D | 0008 | *per manum in primo parente ad lignum extensam, **quam** sanat manus innocens* | *quam* = *manum*, the withered hand; the healing hand is the nominative *manus innocens*. The two hands are the whole point and are easy to swap. |
| 0261A | 0008 | *probabili magistri excusavit exemplo* | *magistri* gen. sg. with *exemplo*; the excusing subject is Christ. Rendered "by the probable example of the master." |
| 0261C | 0008 | *ne duxisse … ne redemisse … ne … traxisse videretur* | all three infinitives share the one subject *videretur* (Christ), and **all three negations are carried**. |
| 0262B | 0008 | *quibus os in monte sedens aperit … stans in campo oculos dirigit* | both participles are Christ's, not the disciples'; *quibus* is the disciples. |
| 0263A | 0008 | *cibumque perfidiae **quae** … eructant* | see §d.1. |
| 0263C | 0008 | *Si **non quaerit quae sua sunt**, non debet resistere* | the subject of both limbs is *charitas*, carried over from the previous sentence, not the disciple. |
| 0264C | 0009 | *Qui sive reddat quod commodastis, reddet tamen et Deus quo jubente fecistis* | *Qui* is the borrower; *reddet* is God's. Two different subjects one clause apart, and the easier reading merges them. |
| 0265B | 0009 | *illos quos a statu mentis vident … perturbatos* | *perturbatos* agrees with *quos*, the rebuked, not with the rebukers (*qui … praeventi*). |
| 0265D | 0009 | *Fructus, opera, quae nec bona malae voluntatis possunt esse, nec mala bonae voluntatis* | *quae* = *opera*; **both** *nec*s carried, and neither limb left un-negated. |
| 0266A | 0009 | *Quae sicut uva proxima terrenis, corrumpitur, in superioribus maturatur* | *Quae* = *uva* (the grape of the soul's fruit) from the preceding clause, not *ficus*. |
| 0266C | 0009 | *ex abundantia cordis **quod** interius latet loquitur os* | *quod* neut. sg. is the object of *loquitur*, "speaks **what** lies hidden within" — not a relative on *cordis* (which would need *quod* to be genitive-agreeing and is impossible). |
| 0266D | 0009 | *bonos auditores … sibi ipsis, malos diabolo assimilat* | see §d.1. |
| 0267A | 0009 | *ubi non est fundamentum, quia malum est sine substantia* | the *ubi* is *terrena et peccata*, where the devil drags them, not the heavens he drags them from. |
| 0267D | 0010 | *quasi in puteo quo concidit fundum quo figatur non invenit* | the subject of *invenit* is *anima lapsa*, not the well; **the negation is on *invenit*** and is carried. |
| 0267D | 0010 | *Omnis conscientia, quae spe fixa in Deum non permanet* | *quae* = *conscientia*; *spe fixa* is an ablative absolute inside the relative clause, not the subject. Negation carried. |

**No dropped and no added negation anywhere in the range.** Every *non*, *nec*, *neque*, *nisi*,
*nunquam*, *nullus*, *nihil*, and every *ne*-purpose clause the Latin prints stands in the
English, including the double *non modo non* at 0263B ("not only not reproved, but moreover
praised"), the triple *ne … ne … ne* at 0261C, and *non nisi* at 0261D ("not able to see Christ
except in what is lowly").

### §d.3 Pattern 8 — a printed mark I kept rather than improved

**0265A — *Nunquid potest.*** Migne sets a **full stop** on a lemma that is the opening of Luke
6:39's question (*Numquid potest caecus caecum ducere?*). The English reads "*Can he.*" — the
printed mark kept, the sentence left abrupt. §8b's colon device does not apply: this is not an
indirect question refused by English grammar, it is Migne's own punctuation of a truncated
lemma, and recording it is the point. `verify-english` initially flagged 4 EN vs 3 LA question
marks on chunk 0009 and caught my first draft, which had supplied a mark the plate does not
print. Parity is now 3 = 3.

### §d.4 Pattern 17 — thou/you in this range

The range swings between the two repeatedly and the swings are all morphological.
**Singular → thou:** 0257C *Tu homo peccator … tibi peccata relaxo* · 0259A *ut … intelligas* ·
0260B (Sir 4:36) *manus tua* · 0265A–B the whole *te punit / te salvat / te caecaverit /
coronaberis* sequence · 0265C–D *Si quem vis reprehendere … ut sis bona arbor* · the Lc 6:29–30
lemmata *qui te percutit*, *Ne repetas*, and *Praebe illis* · Lc 6:41–42 *Quid autem vides*,
*Hypocrita*.
**Plural → you:** 0257D–0258A *cogitatis … vestras … Ex vobis intelligite* · 0260B *Interrogo
vos* · 0262D–0263B the *vae vobis* series · 0263B–0264A *Diligite inimicos*, *Orate*, *prout
vultis*, *Estote*, *Nolite judicare* · 0264A–B *vobis gradus professionis … amplectamini*.
Nothing was decided by who is addressed or how exalted; 0265A moves from plural *Nolite
judicare* to singular *tibi nocet* within four lines and the English moves with it.

### §d.5 Migne's citations passed through, not corrected

Three of his `[n:]` notes point somewhere other than where the words stand. All are reproduced
verbatim and untranslated, per the note rule and §6.3 of the brief; none is queried in the text.

- **0264A `[n: (I Cor. III)]`** on *charitas est patiens, benigna est* — the words are **1 Cor
  13:4**.
- **0259C `[n: (Ephes. IV)]`** on *Exuite veterem hominem cum actibus suis, et induite novum* —
  the first half is **Col 3:9**, the second **Eph 4:24**. The `[var:]` states both places; the
  note is untouched.
- **0260B `[n: (Eccles., IV)]`** on *Non sit manus tua…* — Ecclesiasticus (Sir) 4:36, i.e. his
  abbreviation is right and only looks like Ecclesiastes; **not** an error, recorded so a later
  reader does not "fix" it.

### §d.6 Not defects — checked and left (Pattern 9)

- **0256D *Fotinum*** for Photinus, beside *Arium* and *Manichaeum*. An attested Latin form of
  the name; translated normally as "Photinus," no italics, no crux beyond this line.
- **0265C *sunt objurgationes adhibenda*** — neuter plural gerundive on a feminine plural noun.
  Gender has no English exponent. Left alone, and marked here so a later sweep does not churn it.
- **0260B *Ebionitas*, 0256D *Manichaeum*** — normal forms, listed only because a heresiarch
  name is a common false positive.
- **Column-band arithmetic.** 0256A→0256B→…→0260A in chunk 0006, then chunk 0007 opening and
  closing at 0260A, then 0260B in chunk 0008; and 0267C→0267D across the 0009/0010 boundary.
  All normal per §6.1. **No text in this range is broken mid-word or mid-construction across an
  anchor** — checked at all 47 anchors.
- **`(cont.)` on the heads of 0007, 0009 and 0010** — our chunk division, translated as the head
  text plus the untouched marker, per §5.

---

## §e. DECLINED-ODDITY LIST — every suspect word I did NOT mark

**This is the list the plate reader works from.** Nothing here carries a `[sic:]`, a `[cj:]`, or
an attribution. Where I have a conjecture I give it, and I say plainly that I do not know whose
the defect is. Two entries are non-words carried into the English in italics under Pattern 7;
the rest are real words that read oddly and are rendered as printed.

| # | col | chunk | printed | what is odd | conjecture | class, if any |
|---|---|---|---|---|---|---|
| 1 | **0259A** | 0006 | *nec **jejumare** possumus* | **Non-word.** *m* for *n* in *jejunare*. The paragraph is entirely about fasting and *jejunabunt* prints eleven words later, which proves an error exists and nothing about whose it is. | *jejunare* | ⚑ **Carried into the English in italics**, untranslated (Pattern 7). The negation (*nec*) and the predicate (*possumus*) stand in the running English: "neither can we *jejumare*." |
| 2 | **0258D** | 0006 | *non remanet **ejunus*** | **Non-word.** *jejunus* with the first syllable lost. **Unique in our whole Latin corpus** — one word-boundary hit across `src/latin/`, this one. | *jejunus* | ⚑ **Carried in italics**; *non* and *remanet* stand in the English. Could equally be a medieval haplography Migne set faithfully, a broken sort, or Corpus Corporum. I do not know. |
| 3 | **0263D** | 0008 | lemma *Praebe **illis**,* | Luke 6:29 reads *praebe et alteram*; *illis* answers to nothing in the verse, and the gloss immediately expounds *percutienti maxillam praebere* — the cheek, not a plural indirect object. | *illi*? *aliam*? *et alteram*? Nothing is decisive. | A two-word lemma with one suspect word, so it took **no `[var:]`** despite being a real divergence from Luke. If the plate reads *illis*, the `[var:]` is owed; if it does not, the lemma is ours. |
| 4 | **0267C** | 0009 | lemma *Supra terram,* | Luke 6:49 reads *super terram*. **`supra terram` occurs nowhere in `clementine-flat.txt`**, yet the pre-scan marks the span ✓ — so this is a false ✓ as well as a divergence. | *super* | *supra* is a real word with the same force and no English exponent, so it is single-word territory. Worth one leaf. |
| 5 | **0256B** | 0006 | *quorum corda … **provenit*** | Singular intransitive verb where the sense wants a transitive plural or a transitive singular with *corda* as object. See §d.1. | *provehit* | Not a non-word (22 corpus occurrences), so no frequency test applies. The English keeps the printed singular. |
| 6 | **0263A** | 0008 | *cibumque perfidiae **quae** … eructant* | A relative agreeing with neither of its candidate antecedents in the case its own clause requires. | *quam* | Could be Migne's compositor or a CC transcription of an abbreviated *quā*. Unknown. |
| 7 | **0266D** | 0009 | *bonos auditores verbi **sibi ipsis**, malos diabolo assimilat* | Dative **plural** where the sentence that follows requires the singular (Christ). | *sibi ipsi* | A one-letter difference; exactly the class the brief says confidence cannot settle. |
| 8 | **0261D** | 0008 | *quia hoc non **miraculi loco ponunt*** | Does not construe cleanly: "because they do not set this in the place of the miracle." The subject of *ponunt* is unexpressed and the sense of the whole remark (why the coast is named from the great sea, not the sea of Galilee) is recoverable but the syntax is not. | none offered | Rendered as printed. |
| 9 | **0266B** | 0009 | *Spina et rubus, **haereticis*** | Dative where the three parallel clauses use the nominative. | *haeretici* | See §d.1. |
| 10 | **0264A** | 0008 | *ut beneficiis **aliis** trahantur* | The sense wants nominative *alii* ("that others may be drawn"); the printed dative/ablative gives "by other kindnesses." | *alii* | No English exponent for the ambiguity; rendered by the printed case. |
| 11 | **0267B** | 0009 | *quando Ecclesia **utraque** est consummata* | See §d.1. | possibly *utrimque* | Weak; listed for completeness. |
| 12 | **0265C** | 0009 | *noli eum tibi **obtemperare*** | "Be not willing that he should obey thee" is grammatical but odd in a passage about rebuking a fellow-sinner. | none offered — *obtemperare* is a real word and the clause construes | Rendered literally. Listed only because the sense is strained. |
| 13 | **0265C** | 0009 | *objurgationes **adhibenda*** | Gender mismatch, Pattern 9. | — | **Not a defect for our purposes**; recorded so a later sweep leaves it alone. |
| 14 | **0259D** | 0006 | *cum quibus Galatae praecepta legis **miscebant in utres veteres vinum novum*** | Two accusative constructions run together with no connective; the metaphor's verb is doing double duty. | none offered | Rendered as printed, "mingled the precepts of the law, new wine into old bottles." |

⚑ **Two of these (1, 2) are non-words and twelve are well-formed Latin.** Per the brief, that
split predicts nothing about attribution: 9001 @0203A *magnitudino* is a genuine non-word that
**Migne prints**, and the John reads went 4-of-4 Migne's in one range and 5-of-5 ours in
another 200 columns away. **I make no class claim on any of the fourteen.**

⚑ **If a leaf budget is limited, the order I would spend it in is 3, 4, 1, 2, 5** — the first
two because they are lemma divergences that would each convert into a standing `[var:]` if the
plate confirms them, the next two because they are the only non-words, and 0256B because a
transitive/intransitive swap changes what the sentence asserts.

⚑ **And a class this range cannot see at all:** the brief's silent-repair mechanism, where
Corpus Corporum quietly fixed Migne's broken type. Nothing in a clean-looking Latin can betray
it, and no Vulgate collation reaches it. The fourteen above are the visible half only.

---

## §f. Columns carrying a fired marker — for `plate-gate.mjs`

Nine `[var:]`, on eight columns: **0257A, 0257D, 0258B, 0258D** (two: the Gen 3 quotation at
0258D and the Rom 10 quotation at 0258D), **0259C, 0263B, 0264A, 0267D**.
Under the brief's map (leaf *n* carries columns 2*n*−11 and 2*n*−10) those eight columns fall
on **four leaves: n134** (cols 257/258 — five of the nine markers), **n135** (259/260),
**n137** (263/264), **n139** (267/268).
No `[sic:]` and no `[cj:]` stands anywhere in this range.
