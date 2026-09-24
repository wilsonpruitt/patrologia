# 7090 Innocent I, *Epistolae et decreta* — pending TEI patches, chunks 0028–0031 (stint T6)

Sites where this stint opened the column at the plate (`raw/scans/pl020/pl020.pdf`, 300 dpi,
corners read first) and Migne's type differs from our Corpus Corporum twin. The English already
renders the plate. Not applied: the orchestrator merges into `data/tei-patches/7090.json`.

## 0597B (head of Ep. XXXII) — `familiaritae` in our twin, **`familiariter`** on the plate
- Plate: p. 304, left col, head *Aurelium Innocentius familiariter resalutat.*
- Proposed: `find` `Innocentius familiaritae resalutat` → `Innocentius familiariter resalutat`
  (the string occurs in the XML head once; the chunk frontmatter repeats it).
- English (0028): "Innocent greets Aurelius again in familiar terms."

## 0598A — `commmunione` in our twin, **`communione`** on the plate
- Plate: p. 304, right col, Monitum §1 (quotation from the Roman editor).
- Proposed: `find` `ab ejus commmunione abstinebant` → `ab ejus communione abstinebant`

## 0607A — `admonium` in our twin, **`admonitum`** on the plate
- Plate: p. 309, left col: *nostris litteris admonitum te convenit abstinere.*
- Proposed: `find` `nostris litteris admonium te` → `nostris litteris admonitum te`

## 0608A — `trater` in our twin, **`frater`** on the plate
- Plate: p. 309, right col: *Tuum est, frater charissime*.
- Proposed: `find` `Tuum est, trater charissime` → `Tuum est, frater charissime`

## 0609A — `sed it, solis` in our twin, **`sed in solis`** on the plate
- Plate: p. 310, left col: *sed in solis Christianis juvatur a gratia.*
- Proposed: `find` `sed it, solis Christianis` → `sed in solis Christianis`

## Checked and NOT patched (Migne's own type; logged in `src/english/7090/cruces-0028.md`)
- 0598A `fratrer charissime` (p. 304 prints *fratrer*).
- 0599A `Cathaginensi` (p. 305 prints *Cathaginensi*).
- 0601A head `Joannem Hieronymum Hierosolymitanum` (p. 306 prints it so).
- 0606A `epicopis Apulis` (p. 308 prints *epicopis*).
