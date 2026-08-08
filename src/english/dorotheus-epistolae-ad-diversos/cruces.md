# Dorotheus of Gaza, *Epistolae ad diversos* (PG 88, 1837–1841) — cruces

Greek source: `src/greek/dorotheus-epistolae-ad-diversos/` — **our own 600 dpi
vision-OCR of the plate** (`raw/pg088/epistolae/out/leaf970–972.txt`); this work
has no Calfa text. Twin: `src/pg-latin/dorotheus-epistolae-ad-diversos/`, from
`raw/scans/pg088/copyA_088_djvu.xml` (archive.org OCR of the facing Latin — a
witness, not an authority). Apparatus: `data/pg-notes/pg088-epistolae.json`, 11
notes, `APPARATUS.md`.

Translated 2026-08-08. One chunk, 812 Greek words, Epistles I–VIII.

## Work-wide conventions

- **Section numerals follow the plate's own Latin column, which sets ROMAN**
  (`J.` `ll.` `111.` `IV.` `V.` `Vi.` `VII.` `VIH.`, all OCR mangling of I–VIII).
  So Α΄ Β΄ Γ΄ Δ΄ Ε΄ Ϛ΄ Ζ΄ Η΄ → I. II. III. IV. V. VI. VII. VIII. The
  `translation-style.md` dialogue rule ("arabic, matching the plate's own Latin
  column") is a rule about *deferring to the Latin column*, not about arabic:
  here the column is Roman, so the English is Roman.
- **τέκνον = "child"** throughout, never "son" (the Latin's *fili*). Dorotheus
  addresses ἀδελφός in the headings and τέκνον in the body, and the two are a
  real distinction in the letters.
- **λογισμός = "reasoning"** everywhere — including in the fixed monastic sense
  at Ep. VIII's heading (*λαμβάνοντα διαφόρους λογισμούς*). One English word,
  because the whole argument of Epp. I and VII is that ἀνθρώπινοι λογισμοί are
  the thing to be let go of, and "thought"/"reasoning"/"consideration" by turns
  would dissolve it.
- **ἀνάπαυσις = "rest"** throughout (Ep. VIII turns on it three times in six
  lines); ἀμεριμνία and cognates = "freedom from care".
- Guillemets: the plate prints them **once**, round the Antony logion in Ep. V,
  and they are reproduced. Every other quotation mark on the page is ours (`" "`,
  Pattern 6) — Migne marks his scripture with bold/italic type, not with marks.

## ⛔ THE READING THAT PAID FOR THE SESSION — a dropped negation, in the TRANSCRIPTION

**Col 1840 (leaf971 line 10).** The transcription read
`ἀλλ' ᾧ θέλω ἀντιστῆναί σοι` and did **not** flag it. Re-read at 600 dpi on
`leaf971_p972_seg2.png`, zoomed: the glyph is an **οὐ** ligature with its
breathing, not a ῳ with iota subscript. The facing Latin prints *sed **nolo**
tecum pugnare*. Corrected in the raw transcription and re-chunked; the English
reads "but I do not wish to contend with you."

Uncorrected, the page would have had Dorotheus say he *wished* to contend with a
brother he is writing to console, immediately before "nor with myself either" —
`translation-style.md` 7a exactly, arriving **one step upstream of where 7a
looks for it**. The rulebook hunts the silent repair in the translation; this one
was already in the Greek before the translator saw it, and no reading of the
English against the Greek would ever have found it, because the two would have
agreed.

⚑ **The general lesson, and it bears on the 87-leaf fleet:** on an our-OCR work
the transcriber's *unflagged* readings are the dangerous ones. This word carried
no UNCERTAIN entry while three weaker readings on the same leaf did. Rulebook 11
("the transcriber wins until the plate says otherwise") is intact — the plate
said otherwise — but its corollary needs saying: **a confident transcription of a
negation is still a negation, and polarity-bearing particles deserve a plate look
whether or not they were flagged.**

## Other corrections made from the plate in the same pass

Three, all verified at 600 dpi, all applied to the raw transcription and
re-chunked; each is recorded in a `PLATE RE-READ` block at the foot of its leaf
file.

1. **Col 1837 `κοπούσαι` → `κοποῦσαι`** (`leaf970_p971_seg8.png`). The
   transcriber flagged the word as unparsable and was right to; the fault was the
   accent, not the letters. The plate prints a **circumflex** over the ου, which
   makes it an ordinary Byzantine 2 sg. mid./pass. of κοπόω — "you are worn out",
   which is what the Latin *laborabis valde* says. Rendered normally; no marker.
2. **Col 1837 `ἐπιρρίπτειν` → `ἐπιῤῥίπτειν`** (same crop). This fount prints
   breathings on the double rho and prints them here.
3. **Col 1841 `ἐπιρρίψωμεν` → `ἐπιῤῥίψωμεν`** (`leaf972_p973_seg2.png`).

⭐ **Item 3 closes a standing open flag** carried in `next-session-resume.md`
("leaf972 `ἐπιρρίψωμεν` breathing on the ῥ, against the clearly-printed
`ἐπίῤῥιψον` two lines later — **do not harmonise them**"). They do not need
harmonising: **the plate prints both with the breathings, and always did.** The
apparent divergence was ours. leaf970's ἐπιῤῥίπτειν, corrected in the same pass,
is the third instance and settles the fount's habit. Nothing was harmonised; the
plate was read.

## Rendered as printed — Pattern 7, no emendation

- **Col 1841, Ep. VIII: the missing οὐχ.** Migne prints
  *παρακληθῆναι· καινὸν οὐρανὸν, καὶ καινὴν γῆν ἐὰν ποιήσῃ, **εὑρίσκει
  ἀνάπαυσιν***, and the Latin column prints *novum cœlum et novam terram si
  faciet, **inveniet requiem***. **Both columns print the affirmative**, and the
  sentence contradicts itself: the protasis is a man who is *not* worthy of rest
  or for whom consolation is *not* expedient, and the apodosis grants him rest.
  The Greek transmitted elsewhere reads *οὐχ εὑρίσκει ἀνάπαυσιν*, which is
  certainly what is meant.
  **Rendered as printed — "he finds rest" — and not repaired.** This is the
  clearest kind of plate defect the edition exists to show, and the concurrence
  of the two independent witnesses (our plate read, and archive.org's OCR of the
  facing Latin) is what lets it be attributed to Migne rather than to us. No
  `[sic:]`: the words are ordinary Greek, correctly rendered; only the sense is
  broken, and Pattern 12 marks carried *type*, not a wrong reading.
- **Col 1840 `εὑρίθησεν`** for εὑρέθησαν/εὑρέθη. The transcriber verified at high
  zoom that the vowel after ρ is an accented iota, not an epsilon. The word is
  transparently the aorist passive of εὑρίσκω with a vowel misprint, so it is
  rendered as ordinary English ("are found") under Pattern 7's real-word-merely-
  wrong boundary; no `[sic:]`. (The singular ending is *not* a defect — πράγματα
  is a neuter plural and takes a singular verb.)
- **Col 1841 `ἀξιοῦσαι`** (Ep. V, *ὅτι ὅλως ἀξιοῦσαι*). Flagged by the
  transcriber as not parsing cleanly; ἀξιοῦσθαι would be expected. Rendered "you
  are counted worthy", which is the sense the form points at and what the Latin
  *dignus reputaris* gives. Recorded, not emended.
- **Col 1841, Ep. V punctuation.** The plate sets *πειρασμοὺς εὑρίσκῃς· καὶ
  θλίψεις,* — a middle point before "and afflictions", where the sense wants the
  two nouns joined. Carried through (Pattern 8): "you find temptations; and
  afflictions, but endure them undisturbed".
- **Col 1837 `συν-ετὸς`** is a line-break hyphenation in the plate at an unusual
  point, not a word division defect; the chunker rejoins it. No action.

## `[var:]` — two

1. **Col 1840, Ep. II, Acts 14:22.** Migne's Greek gives *εἰς τὴν βασιλείαν τῶν
   οὐρανῶν*; the received text reads *τοῦ Θεοῦ*. Marked. Note this is the **same
   divergence, in the same volume-neighbourhood, as the one already marked in
   `antiochus-epistula-ad-eustathium`** (PG 89, col 1425) — two Palestinian
   monastic authors quoting Acts 14:22 with "of the heavens". Worth watching as a
   possible transmission fact rather than two independent slips; not asserted
   here.
2. **Col 1840, Ep. IV, Phil. 4:7.** Migne's Greek gives *ἡ εἰρήνη τοῦ Χριστοῦ …
   φρουρήσει τὴν καρδίαν ὑμῶν*; the received text has *τοῦ Θεοῦ* and the plural
   *τὰς καρδίας ὑμῶν*. The Latin column agrees with the Greek (*Pax Christi …
   custodiet corda vestra*) on the divine name, so this is not our OCR. Both
   points marked in the one note.

## `[lat:]` — none fired, and four candidates declined

Allatius translates freely and Pattern 16 says looseness is not divergence. Each
of these was looked at and let go; recorded so a later reader does not re-open
them as discoveries.

1. **Ep. I, *λογισμῶν δαιμονικῶν* ‖ *diaboli insidiæ*.** "Demonic thoughts" vs
   "the devil's snares", and the Greek's active infinitives against the Latin's
   passive *solent superari*. Free rendering of the same claim.
2. **Ep. III close, `Ὁ Θεὸς μετὰ σοῦ` ‖ *Dominus sit tecum*; Ep. VII,
   `Ὁ Κύριος βοηθῆσαι σοι` ‖ *Deus adjuvet te*.** The columns swap God and Lord,
   in **both directions**, in the two formulaic closings — which is what makes it
   look like Allatius's formulary habit rather than a divergent exemplar. A
   reader of either column takes away the same fact. Declined; recorded because
   the *pattern* (not the instance) would be worth re-checking if the same swap
   turns up in the Doctrinae.
3. **Ep. IV opening, `Πεῖσον τὴν καρδίαν σου` ("persuade your heart") ‖ *Vince
   animum tuum* ("conquer your mind").** Different verb, same instruction.
4. **Ep. VIII, `ὁμολογούμενον δικαίωμά ἐστιν` ‖ *aperte justificari vis*.** The
   Greek is a flat verbless predication ("it is an avowed claim of right"); the
   Latin supplies a second person and a verb of wanting ("you plainly wish to
   justify yourself"). Compression/expansion, not a different fact — but this is
   the loosest of the four and the one to revisit if the Doctrinae give more
   evidence about how far Allatius rewrites.

## Notes — placement

All 11 notes are Migne's, keyed in his Latin column, and are placed in the
English at the close of the quotation each cites, per `APPARATUS.md`. **The Greek
carries no marker anywhere in this work and none was added to it.** Series l–q
(Latin col 1839, serving Greek col 1840) and r–v (Latin col 1842, serving Greek
col 1841) are both complete and unbroken.

⚠ **Note `u` (Matth. vi, 34.) rests on a moderate-confidence letter-reading** —
the in-text superscript at Ep. VII's *de crastino* prints as a small blot, and
the transcriber said plainly that the sequence and the quoted content, not the
glyph, are what made it a `u`. The letter is confirmed at 5× per `APPARATUS.md`;
the *placement* follows the citation, which is the method the apparatus is built
on. Unchanged, recorded.

## Still open

- **A blind polarity read has NOT been done.** It cannot be done by the
  translator (runbook 4a: findings must be formed blind and reconciled against
  this file afterwards, never before). This work has **no** `polarity-record.mjs`
  entry and must not be deployed until it has one.
- The genre — terse ascetic letters of spiritual direction — has **no PG anchor
  pair**. It was translated against the `antiochus-epistula-ad-eustathium`
  precedent (Palestinian monastic prose, the nearest thing the corpus holds) and
  the general PG register rules, not against a calibrated anchor. If the
  Doctrinae are to run as a fleet, that is the genre a Fable anchor session
  should be built on, and these eight letters are the natural material for it.
