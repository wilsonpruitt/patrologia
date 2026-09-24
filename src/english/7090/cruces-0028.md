# 7090 Innocent I, *Epistolae et decreta* — cruces, chunks 0028–0031 (stint T6)

Cols 0594A–0612C, PL 20 PDF pp. 302–312 (`raw/scans/pl020/pl020.pdf`, 300 dpi, corners read first
on every page; zooms at 1.6–3× where noted). Every page in the range was opened, the text collated
and the foot notes read. p. 311 (611/612) carries no notes; p. 312 (613/614) is the *Notitia*
appendix, outside the work. The work ends at 0612C (*Laus Deo in aeternum! Amen.*).

## Standing decisions

- **Coustant's lettered notes.** Latin `[cn: <letter> | …]` at the printed key; the English carries
  only a translated `[nt: …]` at the same point, **no `[cn:]`** (Pattern 19, P0, verifier 9a).
  Bare variant words stay Latin italic in the case printed; sigla expanded (Merlin, Crabbe,
  Quesnel, Garnier, Labbe, Baronius, the Roman edition, the edition of the Councils, the Isidorian
  collection); manuscript sigla rendered "the Colbert / Corbie / Pithou / Vatican / Royal / Navarre
  manuscript". Greek words in notes (τῷ ποιμνίῳ ἑαυτοῦ, τὴν εὐσέβειαν) carried in Greek script.
- **Quotations inside notes.** The Latin notes set Augustine's words in `<< >>`; the English twins
  use straight " " so that the body guillemet parity check (Pattern 6) still compares the text only.
- **Pattern 17.** Ep. XXXI (five bishops) *you*; Ep. XXXII (Aurelius) *thou*; Ep. XXXIV (Jerome)
  *thou*, but *multis saepe narrastis* is plural and stays *you have often related*; Ep. XXXV (John)
  *thou*; Ep. XXXVII (Felix) *thou*, with the plural *oblitos vos esse dicimus* → *you*; Epp.
  XXXVIII–XXXIX *you*; Epp. XL–XLI *thou* (*apud vos* in XLI → *among you*); Pelagius to Innocent,
  *apud beatitudinem tuam* → *thy beatitude*; Augustine to John (Monitum) *thou*, then *Si diligitis*
  *you*.
- **Greek versions (brief item d).** Migne prints no Greek text of any letter in this range. Coustant
  argues (Monitum §4 and notes d, f to Ep. XXXV) that Ep. XXXV was translated from Greek; that is
  his argument, carried in the notes, not a printed Greek version. Ep. XLIII survives in Mai's
  Latin from an Arabic codex. No Greek-vs-Latin cruces arise.
- **Heads.** *CAP.* → *CHAP.* as in 0006–0011 (0015 keeps *CAP.*; left for merge reconciliation).

## Plate vs TEI (English follows the plate; patches filed in `data/briefs/7090-PENDING-TEI-PATCHES-0028.md`)

| col | TEI | plate | English |
|---|---|---|---|
| 0597B head | *familiaritae* | *familiariter* | "in familiar terms" |
| 0598A | *commmunione* | *communione* | "communion" |
| 0607A | *admonium* | *admonitum* | "admonished by our letter" |
| 0608A | *trater* | *frater* | "dearest brother" |
| 0609A | *sed it, solis* | *sed in solis* | "but in Christians alone" |

## Migne's own type (plate read, TEI agrees)

- **0598A *fratrer charissime*** (p. 304, clear). Non-word, carried as `[sic: *fratrer*]` beside
  "dearest brother". Intended *frater*.
- **0599A *Cathaginensi*** (p. 305, clear). Carried as `[sic: *Cathaginensi*]` beside "Carthage";
  intended *Carthaginensi*.
- **0601A head *Joannem Hieronymum Hierosolymitanum*** (p. 306, italic, clear). Rendered literally
  "That John Jerome of Jerusalem". The letter is to John alone; *Hieronymum* looks like an
  intrusion from the neighbouring Jerome letters, but the plate prints it. No marker (a real word).
- **0602A *conqueruntur*** after *plus … quam* (p. 306): indicative where Coustant's own quotation of
  the passage in note i to Ep. XXXIV has *conquerantur*. Both render "complain"; no English exponent.
- **0606A *epicopis Apulis*** (p. 308): Migne's spelling; rendered "bishops of Apulia", Pattern 9
  (no marker: the head's facing Latin shows it).
- **0600B *ut ratio non tractandi consulendique sit*** — rendered literally "that there is reason for
  not treating and consulting", which says the opposite of the context; Coustant's note f says a
  word is wanting and proposes *ut nulla ratio*. The note carries the conjecture; no `[cj:]` (P0/
  Pattern 19: Migne's apparatus already answers it).
- **0601A–B Ep. XXXV, *tua lacessit negligentia admittere*** — rendered "which … thy negligence
  provokes to admit into the flock of the Lord"; construes only loosely, as Coustant's notes d–f say
  of the whole letter (Greek idiom in Latin). Rendered as printed.

## Notes: text as printed that looks wrong (kept, not emended)

- 0594B note m: *quinque e, i-covorum n. 14* — broken type for *episcoporum* (p. 302, re-read at
  0.9× and 2×). Carried in italics in the twin.
- 0594A note i: *pos int*, *idoneo dato cuiris* — the readings Coustant reports; printed so.
- 0595B note g: *qui judicarerunt* — printed so in the note; carried.
- 0602A note j (Jerome to Demetrias): *renumdare* — carried untranslated in the twin (Jerome's text
  has *venundare*, "to sell"); the twin italic run is left roman inside the italic quotation.
- 0607A note d: the plate sets *sedulioremin ea* without a visible space in a tight line; entered in
  the Latin note as *seduliorem in ea* (logged in `data/briefs/7090-NOTE-EDITS-0028.md`).

## Note placement, by page (full list of every edit in `data/briefs/7090-NOTE-EDITS-0028.md`)

- Sequences checked per page, all gapless: 302 a–n (f, g are chunk 0027's), 303 a–l, 304 a–i,
  305 a–i, 306 a–l, 307 a–j, 308 a–k, 309 a–g, 310 a–h; 311 none.
- **Placed by hand (were unplaced):** 302 i; 304 d, e, i; 305 h; 306 a, i. All seven of the
  unplaced-notes list that fall in chunks 0028–0031. None left unplaced.
- **Not mine:** 302 f (*EPISTOLA XXXI* head, unplaced, "In edit. Concil. 26. Quae antem erat 59,
  nunc 5.") keys the head of Ep. XXXI, which is in chunk 0027. Left for that stint/the merge.
- 35 auto-placed keys sat one or more words from Migne's raised letter (the injector put most keys
  BEFORE the anchor word the sweep recorded after the key); moved to the printed position.
- Completed or corrected note texts: 0028 d; 0029 g, h, i (spliced text replaced), e, l; 0029 a;
  0030 g (p. 307), b, g (p. 308), k, a, b, c, d (p. 309); 0031 e, g.

## Word ratio

EN/LA (body words, apparatus stripped): 0028 1.50, 0029 1.49, 0030 1.47, 0031 1.39.
