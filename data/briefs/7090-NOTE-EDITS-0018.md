# 7090 Innocent I, *Epistolae et decreta*: Latin `[cn:]` edits made at the plate, chunks 0018–0023 (stint T4)

Every edit below was made in `src/latin/7090/00NN.md` after reading the note at the plate
(`raw/scans/pl020/pl020.pdf`, 300 dpi, corners read first on every page). The same changes are owed
to `data/plate-notes/7090.tsv` before any re-chunk, or `inject-plate-notes.mjs` will restore the sweep
text and positions. **This stint did not edit the TSV.**

Scope: textual corrections only. The sweep text carries almost no italics, and italics were **not**
added across the board. Where a note was rewritten whole (placed, or restored from truncation) the
new text carries the plate's italics.

⚠ **Tooling:** a `[cn:]` cannot contain `]` (`verify-english.mjs` `cnRe = /\[cn: ([^\]]*)\]/`). Note
0023 *d* quotes the Roman editor's square brackets; they are written as fullwidth `［ ］` in both the
Latin `[cn:]` and the English `[nt:]`. The TSV row (p. 292, col 574, d) has ASCII brackets and will
need the same treatment when it is synced.

## A. Notes PLACED (4; all from `7090-UNPLACED-NOTES.md`)

| chunk | page/col | key | placed at | note |
|---|---|---|---|---|
| 0018 | 277 / 0544 | g | `## EPISTOLA [cn: g] XXII. DE ATTICO…` (plate `EPISTOLA XXII g.`) | Full text runs on from p. 277 foot to the head of p. 278 foot (`Unde et huic papae… narrat.`); the unplaced file had it truncated at `qui in superiori`. Also: `aliis`→`ali s`=**aliis** kept, `Nec aliis videtur`→**Nec alius videtur**. Plate prints `moram, pati nesciit,` (commas kept). |
| 0018 | 278 / 0545B | d | `omnibus eamdem [cn: d] postulaturis` (plate `eamdem ᵈ postulaturis`) | Unplaced text was cut at `ut supra pag. 598, n. 21,`; completed: `observavimus, induci coeperat ille mos, … facti fuissent.` Merlin's reading `praestoris`→**praestaturis** (letters after *praest* worn: `praest·loris`); `quam` may be `quum` (italic worn). |
| 0019 | 281 / 0552C | f | `Quod sufficere [cn: f] ad informationem` (plate `sufficere ᶠ ad`) | text as recovered: `Verbum *arbitrarer* in priscis edit concil. ut in mss. hic additur.` |
| 0023 | 292 / 0574C | d | `ubi dicitur, [cn: d] *Cum scirem` (plate `ubi dicitur, ᵈ Cum sci-rem`) | Unplaced text truncated at `Quo autem pacto resarciend`; completed to `…huic occasionem dedit.` `restri`→**vestri**. Brackets written ［ ］ (see above). |

## B. Notes MOVED to the printed key (10)

| chunk | key | from | to (plate) |
|---|---|---|---|
| 0018 | a (Ep. XXIV) | after `ANTIOCHENUM` | after `EPISTOLA XXIV` (plate `EPISTOLA XXIV ª,`) |
| 0018 | d (0548A) | after `prima primi apostoli` | before `prima` (`quam quod ᵈ prima`) |
| 0018 | c (0550A) | after `caeterasque` | before it (`ᶜ caeterasque`) |
| 0018 | b (Ep. XXV titles) | inside `*De [cn: b] pacis` | before `*De pacis` (`I. ᵇ De pacis`) |
| 0018 | d (0552A) | after `contrarietatem` | before `ab Apostolis` (`aut ᵈ ab Apostolis`) |
| 0019 | d (0554B) | after `solis deberi` | before `pontificium` (`ᵈ pontificium`) |
| 0019 | d (0556A) | before `forma` | after `forma` (`forma ᵈ per singulas`) |
| 0021 | d (0565C) | after `Quod` | before `Quod` (`ᵈ Quod auxilium`) |
| 0022 | a (0569A) | after `PONTICANUS,` | before it (`ª PONTICANUS`) |
| 0022 | f (0572B) | after `Quando infirmor,` | after `tunc` (`tunc ᶠ fortis sum`) |

## C. Note TEXT corrected (sweep → plate)

| chunk | page | key | change |
|---|---|---|---|
| 0018 | 278 | a | `militiaum` → **molitionum** |
| 0018 | 278 | b | `compienda` → **complenda**; `ob nendae` → **obtinendae** (*ti* worn); `*ut ne*` → **`*utque*`** (plate `ut·ue`, *q* worn) |
| 0018 | 278 | e | `Quas hic memoratae litterae` → **`Quas hic memorat litterae`** |
| 0018 | 278 | f | `pro negotii` → **negotiis**; `an eriorem` → **anteriorem** |
| 0018 | 278 | h | `Suple` → **Supple**; sweep comment `(note continues onto next page, …)` removed: the note ends on p. 278 with **`*Promittit praeterea*.`** (last word smudged but legible) |
| 0018 | 279 | a | `res in titulos` → **tres**; `propositum` → **propositis** |
| 0018 | 279 | b | `ex inde` → **exinde** |
| 0018 | 279 | c | `in Oriente jus` → **in Orientem jus** (`regulus` in the Jerome quotation is the plate; vowel worn, left) |
| 0018 | 279 | e | `Tillemont` → **Tillemontium**; `praedictos episcopos` → **praedictus episcopus** |
| 0018 | 279 | g | `Omnium quique Ecclesiam` → **Omnium utique qui Ecclesiam**; `expectat` → **exspectat** |
| 0018 | 279 | h | `Editi. mss.` → **Editi, mss.**; `non (illeg.) visum` → **non esse visum**; `facientes auctoritate` → **facientes litterarum imperialium auctoritate** (dropped words); `proprii (illeg.) mulctetur` → **proprii amissione mulctetur** |
| 0018 | 280 | b | `Cariii` → **Carii** |
| 0018 | 280 | d | `adhibeetur` → **adhiberetur**; `Ab haec` → **At haec**; `vestitum sordes` → **vestium sordes**; `per illam quae poenitentiae fructus` → **qua** |
| 0018 | 280–281 | g | whole note replaced: sweep had straight quotes, `poenitens` (→ **poeniteat**), `permaneamus` (→ **permanemus**) and an injected comment `(continues onto PDF p.281, …)`. Plate text now complete, ending `…qui reprehensionis expertes non sunt.` |
| 0018 | 281 | a | `tacito quide n l Innocentii` → **tacito quidem Innocentii** |
| 0018 | 281 | d | `ant Apostolis` → **aut Apostolis**; `non raris` → **non viris** |
| 0019 | 281 | e | `Illarus` → **Hilarius**; `Illis si adjunguntur` → **His si adjungantur**; restored dropped clause **`quae ad Romanum patriarchatum attinent,`** after `dioeceseon,` |
| 0019 | 282 | a | `Iis suffragatur` → **His suffragatur** |
| 0019 | 282 | b | restored **`legisse liquet.`** (`…pro quorum sunt edicenda, legisse liquet.`); `faverit mihi` → **faveret mori**; restored dropped words: `mox post CANONEM` **`dici statuisset, deinde subdit, Orationem Dominicam`** `idcirco mox post PRECEM dicimus`; `euchas` → **εὐχάς** (Greek on the plate); `Enim tamen usum` → **Eum**; `Mozorabum` → **Mozarabum** |
| 0019 | 282–283 | d (0554B) | `epis. lib. de Bapt.` → **episc.**; `Meldense ann. 845, c. 44` → **`Meldense ann. 843; c. 44`** (plate; the same council is *845* in note a of p. 281) |
| 0019 | 283 | b (0555B) | added the note's second sentence at the head of p. 283 right foot: **`Ejusdem Quesnelli ad calcem operum Leonis specialem *de jejunio sabbati in ecclesia Romana* Dissertationem consule, si lubet.`** |
| 0019 | 283 | f (0556B) | `Neque verecundum` → **Neque verendum** (plate `vercudum`, worn) |
| 0019 | 284 | b (0557A) | `in parcecias` → **in paroecias** |
| 0019 | 284 | d (0558A) | sweep stopped at `…Quod hoc nisi episcopum praecipere non liceat.`; the plate continues on the right foot with two whole paragraphs (`Innocentium hoc loco diaconis… quam simplex *signari*.`), now appended |
| 0019 | 286 | a (0561A) | `inunguant` → **inungant** |
| 0021 | 287 | e | `Posthamianus` → **Posthumianus** |
| 0021 | 287 | h | sweep comment `(note cut off: …no visible continuation…)` removed: the note is **not** truncated; it continues at the head of the RIGHT foot: **`Sic mss. nisi quod in uno Colbert., ut apud Quesn., *Rufianus*. At Crab. et edit. Rom., *Sufinianus*.`** |
| 0021 | 287 | l | `Bizatensis` → **Bizatenus** |
| 0021 | 288 | a | restored **cum**: `pulsi, cum in Palaestinam pervenissent` |
| 0021 | 288 | b | `decrat` → **deerat** |
| 0021 | 288 | f | restored dropped clause after `inscripsit:` **`et concilium CP. epist. 13, ad Damasum, n. 4, τόμον vocavit Antiocheni concilii epistolam.`** |
| 0022 | 289 | d | `Quapropter e in` → **Quapropter et in** |
| 0023 | 291 | g | `Similia mss.` → **Similia prae se ferunt mss.**; `conflci` → **confici**; `jactarunt` → **jactitarunt** |
| 0023 | 292 | c | `Illinc initio num. 5.` → **Hinc et initio num. 5.** (plate `Hinc̄et`, run together) |

## D. Notes read and found to match the sweep text (no edit)

0018: 278 c, g; 279 d, f; 280 a, c, e, f; 281 b, c. 0019: 282 c, 282–283 d (first part, apart from C);
283 a, c, e; 284 a, c; 285 a–h (0558A e runs 284–285, matches). 0020: 286 b. 0021: 287 a–d, f, g,
i, j, k, m–p; 288 c, d, e, g. 0022: 289 a–c, e, f; 290 a–l. 0023: 291 a–f; 292 a, b; 293 a, b.
