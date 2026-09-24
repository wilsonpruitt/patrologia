# 7090 Innocent I, *Epistolae et decreta*: pending TEI patches, chunks 0018–0023 (stint T4)

Sites where this stint opened the column at the plate (`raw/scans/pl020/pl020.pdf`, 300 dpi,
corners read first) and Migne's type differs from our Corpus Corporum twin. Per "What the English
translates — THE PLATE WHERE READ", the English already renders the plate. Nothing here has been
applied: do not edit the TEI or `data/tei-patches/7090.json` from here; the orchestrator merges.
Each `find` should match once. None of these is a `[sic:]`: in every case the plate carries the
correct word and the defect is in our twin.

## 0558A: `anctoritatem` in our twin, **`auctoritatem`** on the plate
- Plate: p. 284, right col, lines 5–6: `nisi episcopus auctoritatem dederit id efficiendi` (clear *u*).
- Proposed: `find` `nisi episcopus anctoritatem dederit` → `nisi episcopus auctoritatem dederit`
- English (0019): "unless the bishop has given authority to do it".

## 0560A: `orent super cum` in our twin, **`orent super eum`** on the plate
- Plate: p. 285, right col, James 5 quotation: `vocet presbyteros, et orent super eum, ungentes eum oleo`.
- Proposed: `find` `et orent super cum, ungentes` → `et orent super eum, ungentes`
- English (0019): "let them pray over him".

## 0571A: `auctoritate sanctitatis tuae` in our twin, **`auctoritati sanctitatis tuae`** on the plate
- Plate: p. 291, left col: `exaudire ᵇ dignatur, auctoritati sanctitatis tuae, ᶜ de sanctarum`. Read at
  2× zoom; the final *i* is clean. The dative is what *cessuros* governs.
- Proposed: `find` `dignatur, auctoritate sanctitatis tuae` → `dignatur, auctoritati sanctitatis tuae`
- English (0022): "will more easily yield to the authority of thy holiness".

## Worn glyphs: patch proposed, second witness recommended before applying

### 0545A: `impleras` in our twin, plate `imple?as` (reads as **`impletas`**)
- Plate: p. 278, left col, line 3: `et profitenti conditiones pacis imple·as.` The letter after *imple* is a
  thin upright with no *r* shoulder, like the worn *t*s elsewhere on the page. `impleras` is not a word;
  `impletas` is the only reading that construes (*conditiones … impletas*).
- Proposed: `find` `conditiones pacis impleras` → `conditiones pacis impletas`
- English (0018): "that the conditions of peace have been fulfilled". Logged in `cruces-0018.md`.

### 0575B: `misimur` in our twin, plate `misimu?` (more like **`misimus`**)
- Plate: p. 293, left col, §6: `Utrumque misi-|mu?, et cui responsum est`. The last sort is broken:
  a small upper hook and a dot, with no *r* stem. `misimur` is not a word; *misimus* matches
  *Misimus reverentiae tuae librum* at the start of the same paragraph.
- Proposed: `find` `Utrumque misimur,` → `Utrumque misimus,`
- English (0023): "We have sent both". Logged in `cruces-0018.md`.

## Not patched (logged in `src/english/7090/cruces-0018.md`)
- 0546B `(Vide epist. 19, n. 1), etiam`: the plate shows a point with no visible tail after the
  parenthesis, so it could be a period or a worn comma. The English keeps the twin's comma.
