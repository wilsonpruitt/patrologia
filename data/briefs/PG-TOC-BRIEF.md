# PG work-level TOC — agent brief (PG 100–161)

**Goal.** For each PG volume you are given, write `data/pg-toc/works/NNN.json`: every item Migne's
front **ELENCHUS AUCTORUM ET OPERUM QUI IN HOC TOMO … CONTINENTUR** lists, in order, each with its
**starting column confirmed in the body of the volume**. This becomes the work-level queue for the
Byzantine PG. It is a finding aid, not a translation: no English, no CPG numbers, no translation
status, no web. Do not go looking for anything outside the files below.

Work in `/Users/wilsonpruitt/patrologia`. Python is `python3`.

## Inputs (per volume NNN)

- `data/pg-toc/elenchus/NNN.txt` — the Elenchus, cut from the OCR. Header says which lines of the
  full OCR it came from. The cut is approximate: it may stop early or run into the first preface.
  If the list looks unfinished, read on in the full OCR from the line given.
- `raw/pg-djvu/NNN.txt` — archive.org's OCR of the WHOLE volume (~100,000 lines). **Never Read it
  whole.** Use `Read` with `offset`/`limit` ≤ 200, or the tool below.
- `scripts/pg-colfind.py` — finds text in the OCR and tells you its column:
  - `python3 scripts/pg-colfind.py NNN 'REGEX'` → each hit's line number and `col ≈N` (the column it
    sits in). Case-insensitive. Max 40 hits; narrow the pattern if you hit the cap.
  - `python3 scripts/pg-colfind.py NNN --col 587` → prints the OCR around column 587.
  - `python3 scripts/pg-colfind.py NNN --stats` → the column range the map covers.

## What the OCR looks like (read this before starting)

- The Elenchus is a two-column list: **author heads in capitals**, then that author's items, each
  ending in its **starting column** (`Vita S. Ignatii archiepiscopi Constantinopolitani. 481`).
  OCR misreads digits: `$` for 5 or 3, `g` for 9, `l`/`I` for 1, `O` for 0. Sometimes the numbers
  come out as a separate block, away from the titles (PG 101), and sometimes they are missing
  altogether (PG 108). That is why every column is confirmed in the body.
- **Greek comes through as Latin-letter garble** (`xal`, `toù`, `Ex Š mwAñpeç fiuepOv`). Most PG
  pages set Greek and Latin side by side. A work head in the body is usually in capitals, often
  Greek garble and then the Latin title. Running heads carry the author's name in the genitive
  (`NICETÆ PAPHLAGONIS`).
- Column numbers in the body are bare lines (`183`, `183 NICETÆ PAPHLAGONIS 184`). `pg-colfind`
  has already smoothed them.

## For each item in the Elenchus

1. Read the title and the Elenchus column as printed. If a digit is garbled, write down what you
   see and don't guess.
2. Find the item's head in the body with `pg-colfind` (a distinctive word from the title, in the
   form the head would print it, e.g. `CONFUTATIO`, `MAHOMED`). Check you have the HEAD, not a
   mention in a preface or index. Use `--col N` to look at the page when unsure.
3. Record `bodyCol` (the column the head sits in) and how the two numbers relate:
   - `agree`: Elenchus column = body column (±1 counts as agree; the head may sit at the foot of
     the column before).
   - `elenchus-garbled`: Elenchus digit unreadable or wrong; the body settles it.
   - `body-only`: the Elenchus prints no column (PG 108).
   - `disagree`: both readable and clearly different. Give both, say which you believe and why.
   - `unlocated`: you can't find the head in the body. Say what you searched for. This is
     allowed; a guess is not.
4. `greek`: does the body print Greek at this item? `"yes"` (Greek and Latin), `"latin-only"`
   (the Elenchus says *Latine*, *Latine tantum*, *ex interpretatione*, or the body shows only
   Latin), `"greek-only"`, or `"unknown"`. This decides whether the work can enter the PG
   translation queue at all, so look at the start column (`--col`), don't infer it from the title.
5. `kind`: `"work"` (a text by the author), `"editorial"` (Migne's or an earlier editor's preface,
   *Monitum*, *Notitia*, *Dissertatio*, *Prolegomena*, indices), or `"crossref"` (*Vide tom. CXII,
   col. 745*: printed in ANOTHER volume. Record it with `crossRefVolume`/`crossRefCol`, and don't
   look for it in the body).

Keep entries in the Elenchus's order. Keep sub-items (e.g. a numbered list of orations inside one
collection) under the collection as `parts` only if the Elenchus gives them their own columns.
Otherwise the collection is one entry.

## Output — `data/pg-toc/works/NNN.json` (write it AS SOON AS each volume is done, before starting the next)

```json
{
  "volume": 105,
  "source": "archive.org patrologia-volumes 105_djvu.txt",
  "elenchusLines": "230-277",
  "colMap": "cols 14–1431 (pg-colfind --stats)",
  "entries": [
    {
      "author": "NICETAS BYZANTINUS",
      "title": "Confutatio dogmatum Mahomedis",
      "kind": "work",
      "elenchusCol": "670",
      "bodyCol": 669,
      "bodyLine": 52311,
      "colStatus": "agree",
      "greek": "yes",
      "note": ""
    }
  ],
  "problems": ["anything you could not settle, one line each"]
}
```

`author` and `title`: spell them as Migne prints them (Latin), with obvious OCR garble mended
(`Constantinopolitanus` for `Constantinopolitauus`). Don't modernize or "improve" a name.
`elenchusCol` is a string, exactly as read (`"$17"` if that is what it says). `bodyCol` is a number
or null.

## Rules

- **Exhaustive.** Every item in the Elenchus gets an entry, including editorial matter and
  cross-references. Don't skip an item because it's minor.
- **The OCR is evidence about the OCR.** A column from `pg-colfind` is not a plate read, and
  nothing here is a claim about Migne's printed page. Say "OCR shows", not "Migne prints".
- **Never guess.** An unreadable column is `unlocated` or `elenchus-garbled` with what you saw.
- When you finish each volume, print one line: `NNN: E entries (W works), agree A, garbled G,
  body-only B, disagree D, unlocated U`.
- Don't commit. Don't edit any file except your own `data/pg-toc/works/NNN.json`.

## When there is no front Elenchus

If `elenchus/NNN.txt` begins `# FALLBACK`, the cut is the volume's closing **ORDO RERUM**, which
lists chapters as well as works. Take only its top-level items (works and editorial pieces under
each author head), not the chapter lists, and set `"listSource": "ordo-rerum"` at the top of the JSON
(otherwise `"listSource": "elenchus"`). The columns are confirmed in the body the same way.

## Lessons from the pilot (PG 105/101/108, 2026-10-05). Read before starting.

**Fastest route per volume (do it in this order):**
1. `--ordo`: the volume's closing ORDO RERUM prints a column for each work too. It is Migne's
   second list, read independently by the OCR. Line it up against the Elenchus first.
2. Where Elenchus and Ordo agree, confirm with ONE look: `--heads C-2 C+2` lists the capitals
   lines (heads) in that span. Find the work's head among them. Done.
3. Only where they disagree, one is garbled, or the Elenchus has no number: search the title with
   the regex mode, then `--near LINE` to read the page numbers around the hit.

**`bodyCol` convention.** A PG page carries two columns (odd | even, Greek and Latin side by
side), so a head opening a page belongs to both. Record the column Migne's own lists give when it
is one of that page's two columns, otherwise the page's odd (left) column. ±1 counts as agree.

**`col ≈N` is "the last good page number above this line".** Page numbers are often lost, so it
can lag by a page or two. Settle any doubt with `--near LINE`.

**Digit misreads seen:** 7→1 (`481` for 487, `515` for 575, `1211` for 1275), 9→1 or 8,
`$`/`t`/`b` for 5 or 6, a stray leading digit (`4173` for 1173), `R65` for 865. **If an Elenchus
column falls inside a DIFFERENT work, it is garbled.** That test settled most cases.

**Heads, not mentions.** A preface or index mentioning the work is not its head. A running head
can start a page before the real title block. A bilingual item prints the Greek head first, then
the Latin a few lines on. Record the line of the first one.

**One Elenchus title, several heads** (*Vita et Officium S. Theophanis*): one entry, at the first
head; describe the rest in `note`. **A section heading with no column** (*Pars I. Exegetica*): not
an entry, but mention it in the next entry's `note`. **Detached number blocks with fewer numbers
than titles** (PG 101): assign by the body, say in `note` that the mapping is inferred.

**Editorial items renamed in the body** (Elenchus *Editorum Patrologiae Dissertatio*, body head
*MONITUM EDITORUM*) count as found. Say so in `note`.

**OCR page duplication.** Runs of page numbers can repeat (PG 108 cols 999–1022 twice). If a head
appears twice, give the FIRST `bodyLine` and note the duplication in `problems`.

**Ordo-only lists** (`# FALLBACK` files) are already the cross-check list; confirm every column in
the body as usual.
