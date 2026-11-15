# Maximus Confessor, *Hymni* (PG 91.1417–1424): base transcription report

Transcription only. Greek verse and the facing Latin verse as printed, one verse line per file line,
every line read at the plate (`raw/kraken/maximus-hymni/pages/p-0771…0774.png`, 600 dpi). Kraken
(`cols/*.kraken.txt`) was used only as a typing aid and was overruled by the plate throughout.
Bracketed Latin overflows (and the two Greek ones, 1418 `προσλαβών [τε,` and 1419 `θερ- [μοῖς`,
1422 `κατ- [έστη;`, 1423 `Σῶ- [τερ,`, 1423 `μοί- [ρης,`, 1424 `κακῶν [μου.`) are rejoined into one line.

## Line counts (verse lines; `#H`/`#C` lines excluded)

| col | pdf p. | Greek | Latin | heading lines in file |
|---|---|---|---|---|
| 1417 | 771 foot (left) | 2 | 2 | 4 (title, citation, "I.", hymn I heading) |
| 1418 | 771 foot (right) | 6 | 6 | 0 |
| 1419 | 772 left | 60 | 60 | 0 |
| 1420 | 772 right | 56 | 56 | 2 ("II.", hymn II heading) |
| 1421 | 773 left | 55 | 55 | 0 |
| 1422 | 773 right | 66 | 66 | 0 |
| 1423 | 774 left | 27 | 26 | 0 |
| 1424 | 774 right (upper half) | 25 | 25 | 2 ("III.", hymn III heading) |
| **total** | | **297** | **296** | |

Per hymn:
- **Hymn I** (Ὕμνος εὐχαριστήριος καὶ ἱκετήριος πρὸς Θεόν / *Hymnus gratiarum actionis et supplicationis ad Deum*): 1417 2/2, 1418 6/6, 1419 60/60, 1420 54/54 = **G 122 / L 122**.
- **Hymn II** (Ὕμνος ἱκετήριος εἰς Χριστὸν, ἐν εἴδει ἐξομολογήσεως / *Hymnus supplicationis ad Christum per modum laudationis*): 1420 2/2, 1421 55/55, 1422 66/66, 1423 27/26, 1424 8/8 = **G 158 / L 157**.
- **Hymn III** (Ὕμνος ἱκετήριος εἰς τὴν ἁγίαν Τριάδα / *Supplex hymnus in sanctam Trinitatem*): 1424 17/17 = **G 17 / L 17**.

**The one mismatch:** col 1423, Latin line 19 `Consortem reddere ineffabilis tuæ carnis.` (a long bracketed
overflow `[fabilis tuæ carnis.`) renders TWO Greek lines (19 `Καὶ σαρκὸς, ἀξιοῖς σῆς` + 20 `Κοινωνίας ἀφράστου.`).
Everywhere else the counts correspond one for one. Note that the Latin does not always follow the Greek
line order inside a sentence (e.g. 1424 hymn III, 1421 `Mundabam enim exterum / Ferens extra colorem`),
but the count holds.

## Hymn boundaries (file line numbers, same in G and L files)
- Page title `S. MAXIMI CONFESSORIS HYMNI.` + Daniel citation (`#C`) + `I.`: col 1417 lines 1–3 (printed centred across both columns at the foot of p. 771, below the end of the *Ambigua*; put in the 1417 files only).
- Hymn I heading: col 1417 line 4; first verse 1417 line 5 (`Λειμών με τλήμον' ἔσχε` / `Olim me beatum efficiebat`).
- Hymn II: col 1420 lines 55 (`#H II.`) and 56 (heading); first verse 1420 line 57 (`Ὤμοι ἐγὼ κακῶν μου,` / `Væ mihi propter mala mea,`).
- Hymn III: col 1424 lines 9 (`#H III.`) and 10 (heading); first verse 1424 line 11 (`Μέμνησό μου, ἀνάρχου` / `Memento mei, æternæ`).
- End: col 1424 last line (`Νεῦσον τεὸν κράτος με.` / `Tuam venerandam potentiam.`), followed by the rule and the *Thalassius* Notitia (not transcribed).

## Band letters (BANDS.tsv)
Migne prints ONE letter per band in the central gutter of each page, shared by both columns; it is
recorded for both columns at the Greek line beside it (1421 C and D fall in gaps of the Greek block and
are assigned to the Greek line matching the Latin line they stand beside). No band letter falls in the
hymn section of p. 771 (cols 1417–1418: A–C belong to the *Ambigua* above; no D printed in the hymn
lines). Page 774 has A–C only above the Thalassius rule. 1419 line 1 A is the gutter A printed beside
1420 line 1.

## Conventions applied
- Breathings: the scan is binarized and rough vs smooth breathing cannot be reliably told apart on most
  lines (p. 772 especially); where the plate is indeterminate the standard breathing is written. Accents
  and stops are as read; indeterminate ones are in DOUBTS.
- French spacing before `!` `?` `:` `;` is not reproduced; ligatured `æ œ` kept; `j`/`u` spellings as printed (`Jordanis`, `Dejicere`).
- Stray specks / mis-set marks (apostrophes before words, dots) are not transcribed but listed in DOUBTS.
- Migne's evident misprints stay as printed, flagged `MIGNE?` (e.g. 1419 L `trangressus`, 1421 G `ἀνάγκης;`, 1420 G `εἶ κ'`).

## Doubts
**58** entries in DOUBTS.tsv. Heaviest damage: p. 772 (cols 1419–1420) is a poor, broken impression,
especially the top lines of both columns (1419 G1 `Γαίης`, L1 `in medio terræ cœlique`; 1420 G1
`ἐμπέφυρται`, G2 `πορίζοις`) and 1420 G26–27 (`αἱμορούσης`, `προσαφῇ`). 1424 G1 `ὕλην` is read from traces.
Nothing was left unread: every line has a best reading; none is marked illegible.

## Crops opened (all from `raw/kraken/maximus-hymni/pages/`)
- p-0771: full-page overview; title/citation band (y 4550–5000); col 1417 block (x 50–2050, y 4980–5550 and 5150–5900); col 1418 blocks (x 1950–4000, same y; x 1750–2950, y 4950–5650); gutter strip x 1850–2150, y 2800–5600 (band-letter check).
- p-0772: overview; col 1419 in 10 strips (x 100–2300, y 450→6030, step 620, h 680) plus Greek re-crops x 1450–2420 for the same strips; zooms: 1419 line 1 (y 560–700), `Πατρὸς` (y 1650–1800), breathing/accent zoom (y 3180–4240); col 1420 in 10 strips (x 2250–4031, same y); zooms of 1420 Greek y 560–1400 and 2300–3200.
- p-0773: overview; col 1421 in 10 strips (x 80–1850, y 380→5960, step 620); col 1422 in 10 strips (x 1760–3500, same y); zooms: 1421 G y 3820–4280 (`Οἰκέτριβας`), Latin y 1150–1480 (`Mihi`).
- p-0774: overview; col 1423 in 7 strips (x 100–2400, y 450→4170, step 620); col 1424 in 7 strips (x 2300–4031, same y).

Kraken comparison notes: Kraken dropped 1421 G22 `Ἐρείπια στέγη τε`, 1422 G1 `Ἄγειρεν ἡ τοσαύτην`, 1422 G9 `Οἳ τίμιοι ἔασι,`, 1422 G42
`Ἔσται ἀεὶ ἐοῦσι.`, and glued band letters / overflow fragments; all restored from the plate (Kraken's 1419 is also short by several lines).
