# Usuardus: plate check of the garbled forms in Bouillart's keyed notes (2026-09-22)

Bouillart's 101 keyed notes were transcribed from the plates by translating stints (Opus) and sweep
agents (Sonnet). They are now injected into the Latin as `[cn: a | …]`, **which presents every word
as Migne's print.** The two note-translation agents found the forms below garbled and rendered the
sense in English. **Each is either Migne's misprint or a transcription slip of ours, and only the
plate can say which.** The same rule applies as for `[sic:]`: frequency and internal sense prove an
error exists, never whose it is.

## Scans (on disk; never fetch page images)
- **PL 123 (9198):** `raw/scans/pl123/patrologiaecurs29goog.pdf`. **PDF page = (odd col + 29)/2 + 1**
  (p.315 = cols 599/600).
- **PL 124 (9215):** `raw/scans/pl124/patrologiaecurs76unkngoog.pdf`. **PDF page = (odd col + 9)/2 + 1**
  (p.21 = cols 31/32). Archive leaf n168 lacks col 327, so read the corners.
- **PL 124 second printing:** Gallica `ark:/12148/bpt6k54939860`, IIIF
  `https://gallica.bnf.fr/iiif/ark:/12148/bpt6k54939860/f<N>/full/2400,/0/native.jpg`, with f = (col + 1)/2.
  Send the header `-A "Mozilla/5.0"`. Use it where the archive copy is clipped or worn.
- Render with `pdftoppm -f <p> -l <p> -r 300 -png <pdf> <dir>/p`, then crop with PIL. Go to 400–600 dpi
  for a single letter. Read the printed corners first. Delete renders when done.

## Where the notes are
- `data/plate-notes/9198.tsv` and `data/plate-notes/9215.tsv`: one row per note, with column 2 = the
  column where the key sits, column 4 = the note text as transcribed, and column 1 = the leaf. The note
  is printed on that leaf, or it runs onto the next.
- The English twins are the `[nt: …]` in `src/english/<idno>/*.md`.

## The sites
Find each by its column and the word. Most notes are on one page, and a few run over.

**9198 (PL 123)**
| col / note | form as transcribed |
|---|---|
| 0631 Revolutus | *Ad Revolutum et Firminum* (for *At*?) |
| 0641 Archadius | *eror* |
| 0649 Felix | full stops in *An Usuardo satis fuerit. S. Felicem* |
| 0655 Maurus | *qnod* |
| 0703 Julian | *notum bis etiam usu venit* |
| 0707 Vincent octave | *t° i;* |
| 0709 Bathildis | stop in *Martyrologia. S. Hieronymi dicta*; the second *festum*; *Monstiburg.* |
| 0729 Aventinus | *S. Avieni*; *Devensi* |
| 0739 magnifice | *Sellerius* |
| 0747 b | *Boullartium* |
| 0851 Nicomedia | *Nec die hesterna actus erat* |
| 0885 Pastor et al. | *Matricula. Carthus-Ultraject*; *commemoratiouem*; *Nicomendienses*; *vftio*; *dubit* |
| 0879 Eucherius | *suo Periculo* |
| 0887 Domninus | *en Achaicum*; *excederit*; *Usuardius* |
| 0897 Mary of Egypt | *vel hoc solum fecisset* |
| 0925 Zeno | *Pontisareusis*; *symmistan* |
| 0941 Nicephorus | *Niceofori* (twice) |
| 0947 Ursmar | *Praetensem* |
| 0959 Leo | *antiquiora, Martyrologia referunt, Saussaii* |

**9215 (PL 124)**
| col / note | form as transcribed |
|---|---|
| 0155 Mercurius | *sublata furta sunt* |
| 0109 crypts | *exstrunctum*; *pate*; *desita est*; *solutu* |
| 0119 Nivedunum | *exstrita*; *haud multum assimilis*; *magis illi faveat quod adversetur* |
| 0135 oratory | *Sollario* |
| 0309 Lupus | *Sollario* |
| 0177 Eusebius | *Alii elio loco* |
| 0163 Gundulfus | *Mediolensem* |
| 0277 Paul/Margaret | *nunquam ab Usuardo facta scripto est* |
| 0343 or 0357 Claudius (find it) | *nulla addito* |
| 0431 Gregory | *se modo non in oculos in gerat* |
| 0451 Autmarus | *Lituræ tamen inscribuntur … Lituræ igitur omnibus exemplis antiquior facta igitur* |
| 0487 Eulogius | *Heriniensem Codicem … respuit*; *non miror quod … hallucinatum fuisse non est credibile* |
| 0585 Vincent | *propat*; *Julii I, XIXVIII* |
| 0593 Savinianus | *Si vero non possit* |
| 0665 Herculanus | *reperiatu* |
| 0725 Columbanus | *medius tertius* |
| 0825 Basileus | *Hieronymia nos indices* |
| scattered (grep the TSV) | *attramentum*; *presbtieri*; *Mabilio*; *pœnuriam*; *supera* |

## For each site, record one verdict in `data/briefs/USUARDUS-NOTE-GARBLE-VERDICTS.md`
- **PLATE AGREES:** Migne prints the form. It stays in the Latin. Note the page, the corners and the dpi.
- **PLATE DIFFERS:** our transcription slipped. **Correct column 4 of the TSV row to exactly what the
  plate prints.** Then check the English `[nt:]`: if it already renders the plate's sense, leave it.
  If it renders the garble, fix just those words.
- **PRESS VARIANT (PL 124 only):** the two printings differ, one sound and one not. Correct the TSV
  to the sound printing (Wilson's ruling, 2026-09-22) and say so.
- **ILLEGIBLE:** say what is visible. Never guess.

Also note any OTHER slip you happen to see in a note while you have it on screen. Correct it the
same way and list it.

## Rules
- Edit only the two TSV files, the English `[nt:]` contents where a verdict requires it, and the
  verdicts file.
- Then run `node scripts/chunk-work.mjs 9198` and `node scripts/chunk-work.mjs 9215`. They re-inject
  the notes, so the output must say all placed (39/40 and 62/62).
- Then run `node scripts/verify-english.mjs` on both. Both must be OK.
- Do not commit or deploy.
- 8 GB machine: render one page at a time into your own scratch directory, and delete as you go.
