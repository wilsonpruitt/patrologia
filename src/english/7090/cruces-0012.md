# 7090 Innocent I, *Epistolae et decreta* — cruces, chunks 0012–0017 (stint T3)

Cols 0519B–0544A, PL 20 PDF pp. 265–277 (`raw/scans/pl020/pl020.pdf`, 300 dpi, corners read
first on every page; spot zooms at 400/600 dpi where noted). Every page in the range was opened once,
text collated and the foot notes read in the same visit.

## Standing decisions

- **Coustant's lettered notes.** Latin `[cn: <letter> | …]` at the key; the English carries a
  translated `[nt: …]` at the same point and **no `[cn:]`**. The stint brief asked for the Latin
  `[cn:]` to be repeated verbatim in the English with the `[nt:]` after it, but Pattern 19,
  P0 ("English: an `[nt: …]` opposite every note") and `verify-english.mjs` check 9a (an English
  `[cn:]` is a hard error, and it would also break note-count parity) all require the `[nt:]`
  alone. Followed P0 and the verifier; if the brief's form is wanted it is a mechanical copy.
- Bare variant words inside a note stay Latin italic in the case printed; sigla expanded at first
  use in each note (Merlin, Crabbe, Quesnel, Garnier, the Roman edition, the Isidorian
  collection); *Dion.*/*Hadr.* → "Dionysius"/"Hadrian" (the collections); manuscript sigla
  (*Colb.*, *Corb.*, *Reg.*, *Pith.*, *Navar.*) rendered "the Colbert / Corbie / Royal / Pithou /
  Navarre manuscript".
- Pattern 17: Innocent's singular addressee (Marcianus, Ep. XVI) takes thou; the Macedonian
  bishops (Ep. XVII) take you.

## Notes: corrections to the recovered note text (plate read; Latin `[cn:]` corrected in place)

These change the text of `[cn:]` markers already in the Latin chunks. The same corrections are
owed to `data/plate-notes/7090.tsv` / the sweep TSV, or a re-chunk will revert them.

| page | col | key | sweep/injected text | plate |
|---|---|---|---|---|
| 265 | 0519 | c | `Ita plerique mss. Naisitano.` | `Ita plerique mss. Nonnulli autem ut apud Merlin. Naisitano.` (a whole sentence dropped) |
| 265 | 0519 | e | `Sane respondeu non esset` | `Sane respuenda non esset` |
| 265 | 0520 | h | `ex Merl. et mss. revocatum.` | `revocatur.` |
| 265 | 0520 | h | `Lab. tom. ii, pag. 1234` | `pag. 1251` (read at 600 dpi; the sweep's 1234 and a first 300-dpi reading of 1231 were both wrong) |
| 265 | 0519 | b | (unplaced; text) `haec epistola decretum L.` · `Crescontio` · `subsequenti` · `probabilior` | `haec epistola Innocentii decretum L.` · `Cresconio` · `subsequentem` · `probabiliter` |
| 269 | 0527 | a | `*Eusathium*` · `in Macedonia tot` · `Marcini` · `ut siti erat vicini Bonosi episcopi` | `*Eustathium*` · `in Macedoniane tot` · `Marciani` · `ut finitimi ac vicini Bonoso episcopi` |
| 268 | 0526 | b | ended at `…Joanni, Flaviano.` | continues `…Flaviano, Calecrati, Nicitae, Aciologo, Martiano, episcopis Macedonibus et diaconibus in Deo salutem. Eidem codici concinit et alter Colb. Unde liquet … probetur. Dionysius Exiguus` and runs on to p. 269 foot: `duos ex illis episcopis appellare contentus … imitati sunt Hispanae collectionis auctor et Isidorus.` |

## Notes placed by hand (from `7090-UNPLACED-NOTES.md`)

- **p. 265 col 0519 (b)** — at `EPISTOLA ᵇ XVI` (0012, in the head, as the other 7090 heads do).
- **p. 265 col 0520 (i)** — at `aut ille sic ⁱ peccari`; the phrase occurs twice in our Latin
  (again in the Monitum §5 quotation, 0013), the plate key is in the letter, 0012.
- **p. 268 col 0525 (a)** — at `EPISTOLA ᵃ XVII` (0014).
- **p. 268 col 0526 (b)** — at `INNOCENTIUS ᵇ RUFO` (0014). The sweep described the key as sitting
  in "an illustrative quotation"; it does not — it is the letter's own inscription, which our
  Latin has.
- **p. 268 col 0526 "(c)" — NOT A NOTE.** No key c is printed on p. 268 (the page's keys are a and
  b only). The sweep's "c" (`dici concinit et alter Colb. Unde liquet…`) is the middle of note b,
  split off at the word `Eidem codici` in the note's own text. Folded into b; nothing to place.

## Cruces in the text

- **0521B/0522B `Navatianos`, `Anisii`, `Bonosio`** (Monitum §3, p. 266) — the plate prints
  *Navatianos* (beside *Novatianos* elsewhere), *Anisii* (beside *Anysii* two lines up) and *qui
  Bonosio adhaeserant* (beside *Bonosus/Bonoso* throughout). All read at the plate, all as our TEI.
  Rendered as printed ("Navatians", "Anisius", "Bonosius"); variant name-forms, no marker.
- **0522C `ὅστε χειροθετουμένους`** — plate prints ὅστε (for ὥστε); carried as printed, Greek.
- **0525A `Macedodonas`** (0014, §7) — **Migne's type.** The plate sets `Macedo-` at a line end and
  `donas` at the next line's head (p. 268, left col), so the syllable doubling is his, not a
  digitization fusion. `[sic: *Macedodonas*]` with the sense ("the Macedonians") beside it.
- **0525C `χειρονουμένους`** (0014, §8) — plate read at 400 dpi: Migne prints χειρονουμένους,
  which is not the word Coustant's argument needs (χειροτονουμένους, set correctly two lines
  above). Carried in Greek inside `[sic: χειρονουμένους]`.
- **0525B/C `χειροθετουμένους, :`** — our TEI has a stray colon; the plate prints only the comma.
  English follows the plate; logged in the pending-patches file.
- **0526A `peceaverat`** — our TEI; the plate prints `peccaverat`. English renders the plate ("had
  sinned"); pending patch filed.
- **0526A `occassione`** — our TEI; the plate's glyph between `occ` and `sione` is worn and looks
  like one letter (so `occasione`), but not certain. Either is an attested spelling (Pattern 9);
  no marker, no patch.

## Notes, pp. 269–277: corrections, placements, additions

- **p. 269 (d)** — the sweep marked it cut off at `ante bap-`. It is not cut off: it runs on in
  the next column of the foot (`…ante baptismum. Probabile autem est eum, Siricii exemplo curasse
  … quae subinde tractantur.`). Completed in the Latin; the sweep's own comment
  "(note cut off … not visible …)" had been injected into the `[cn:]` text and is removed.
- **p. 269 (b)** — plate `*reperiremus*` (sweep `reperimus`).
- **p. 270 (j) — ADDED; the sweep missed it.** Key `ʲ` after `in dante` (0530C), note
  `Duo mss. *in dante remanserat*. Ad imitationem hujus loci … conferri non potuisse
  ordinationem.` Now `[cn: j | …]` in 0015 with its `[nt:]`. The page's run is a–j with no gap.
- **p. 270 (i)** — the injected text ended with the sweep's "(note continues onto p.271)"; removed.
- **p. 271 (c)** `ab Apostolis apostolicisve viris` (sweep dropped `Apostolis`); **(e)** `Jam e
  Siricii` (sweep `Jamne`).
- **p. 272 (c)** — completed from the foot (`ne qui diu convincitur fuisse perversus, per speciem
  remeantis non remedium salvationis inquirat, sed facultatem propagandae pravitatis inveniat.`,
  italic, Simplicius quoted); the injected text carried a stray quote mark and the sweep's
  commentary, both removed. **(d)** placed by hand at `transierunt ᵈ damnatum` (0016); the phrase
  also occurs in the Monitum (0012), the key is in the letter.
- **p. 273 (c)** `Docet quippe` / `Et hic igitur` (sweep `De caet quippe` / `Et haec igitur`);
  **(d)** placed at `inultum ᵈ solet`; the sweep read the anchor as `inultum sit transire`, the
  plate and our TEI both read `inultum solet transire`; `disciplinam` for `discipinam`;
  **(e)** placed at `rediit; ᵉ et vel veniam`; text `quem reum non esse contestamini` (sweep
  dropped `non esse`, which inverts the note); **(g)** `initium ducit`; **(h)** `quod in altero Colb.`
- **p. 274 (a) — WRONG NOTE INJECTED.** The Latin carried note e's text (`Editi post Dion. et
  Isid., *reparatus mercatur pacem*…`) at key a as well as at e. The plate's a is `Verbum,
  *aestimatur*, Quesn. praetermisit … vel jactavit vel finxit.` Replaced.
- **p. 274 (e)** — moved: the plate keys it after `reparatus` (`cum suis reparatus ᵉ, profundam
  pacem`), not after `non fictam`. Italic span and `charitas`/`castigantur` read from the plate.
- **p. 274 (f)** — placed by hand at `(13 Decemb. ann. 414) ᶠ Flavio Constantio`.
- **p. 274 (g)** — completed from the right-hand foot (`…tractaretur, adeoque circa ann. 414
  scriptam esse censeamus … moram in Urbe majorem quam sperabatur, facerent.`).
- **p. 274** (c) `corriguntur`; (h) `nec omnes`; (l) `Hadrianus II`; (m) `Illius scilicet`.
- **p. 275 (b)** `ne talibus socientur`.
- **p. 276 (h)** — moved: the plate keys it `Subscripserunt ʰ viginti`, not before
  `Subscripserunt`. (a) `exprimat`, `duas in partes`, `successit`; (b) `precationibus vacantes`.
- **p. 277 (a)** placed at `EPISTOLA XX ᵃ`, **(c)** at `EPISTOLA XXI ᶜ` (0017, in the head).
  (c) `Beroeae`, `in collectionibus`, `teste Palladio`. (d) `interfuerunt`; **one word worn**: `Quae
  ro….i in synodo` — not read, carried as `ro...i` in the Latin note and said so in the English
  twin. Do not guess it. (f) `*cognoscat*`, `apud Nicephorum` (sweep `Niceph. rom.`).
- **p. 277 (b)** `retragantibus` is the plate's form; carried.
- **Key sequence, every page:** 265 a–j · 266 a · 267 none (a checked zero) · 268 a–b · 269 a–h ·
  270 a–j · 271 a–g · 272 a–f · 273 a–h · 274 a–n · 275 a–c · 276 a–h · 277 a–g. No gaps. Keys owed
  to other stints: p. 265 (a) (0011), p. 277 (g) (0018).

## Cruces in the text, pp. 269–277

- **0529A `axoris`**, **0530A `cripuerit`** — our TEI; the plate prints `uxoris`, `eripuerit`.
  English renders the plate ("wife", "rescued"); pending patches filed.
- **0529A Prov. 19:14** `*Etenim a Deo praeparatur viro uxor*` — Vulgate *a Domino autem proprie
  uxor prudens*. `[var:]` placed (column read at the plate). Lev. 22:13–14 at 0528A is cited as
  printed; no marker.
- **0531A `honoram`** — plate `honor.m`, the vowel worn; English "honour" either way; no marker.
- **0540A `expelere`** (Monitum §2, TEI) — rendered "ask for" by sense. The plate at p. 276 top
  reads `expetere` (clear `t`), so the TEI form is our digitization's; no marker. Patch owed:
  `find` `communionem expelere festinavit` → `communionem expetere festinavit`.
- **0544A `subcisivum`** — the plate's form (= *subsicivum*, "left over"); rendered "residual".
- **0525D `Macedodonas`**, **0525C `χειρονουμένους`** — see above; the only two `[sic:]` in the
  range, both whole-syllable or whole-word, both read at the plate.
