# ENGLISH FIXES — Maximus *Quaestiones et dubia*, after the image check and the apparatus (coordinator 2026-11-23; Opus fixer)

Edit ONLY `qd-00N.en.md` in `~/patrologia/translate/maximus-quaestiones-dubia/` (English + `## Notes`; never the `## OCR` tables). Targeted Edits; preserve every other word;
renumber a file's notes in order if you add or remove one (markers and definitions; every marker stays in its sentence). Read `CARD.md` first. For each row, read the question's Greek in the
scaffold `qd-00N.md` (find the tag) and the verdict here; the plate verdicts are FINAL (read at 600 dpi). The apparatus is in `notes/result-{1,2,3,4}.jsonl` (the editor's notes, transcribed
from the plate, with working English in `en`). **No images, no web, no agents, no other files.**
Final message: each row, what you changed (old → new) or why nothing, and any row where the printed Greek does not construe.

**Bracket rule (the plate now read):** Migne's square brackets in this work are **his apparatus set into the Greek**, with Latin sigla: «[R. X]», «[Reg. X]», «[Cord. X]», «[vulg. X]», «[ἴσ. X]» (= «perhaps X»,
the editor's conjecture), «[R. non bene X]» (= R. reads X, wrongly), or bare «[X]». The English follows the PRINTED word (the reading outside the bracket); the bracket goes in a T note that quotes it
EXACTLY as printed (siglum included: take it from the `bracket-inline` lines of the result files) and says what kind it is, and what the facing Latin follows if the note already says so.
**Exception:** a bracketed word that SUPPLIES something the printed sentence cannot construe without (no other reading outside the bracket) may stand in the English in [square brackets], T note «Migne prints [ἴσ. X], the editor's conjecture ("perhaps X"); the English supplies it.»
Do not name the editor (say «the editor», «Migne prints»). Sigla are quoted, never expanded into names.

## A. Brackets — check every bracket T note against this list and the result files
1. **p0400.29 [Ἴσ. πρός]** (qd-001): the translator rendered «as [against]» (supplement). Decide by the rule: if the printed sentence construes without it, take [against] out and keep the T note; if not, keep it bracketed as the exception. Say which.
2. p0401.08 [R. πολλαχοῦ] · p0402.10 [Cord. ἔμπτυστε] · p0404.01 [αὐτῶν] (siglum as result-1 gives it) · p0404.30 [R. τὸν λογισμὸν τῆς κακίας κατὰ μνή.] · p0406.25 [R. non bene διαφόρως] · p0408.01 [Reg. τοῖς νεοττοῖς]:
   variants; English = printed; T notes quote as printed (the translators saw only the machine reading, with garbled sigla: fix every quotation).
3. p0410.09 ταύτης [ταύτας] · p0410.21 διαφόρως [ἀδιαφόρως] · p0410.35 ἑταίρων [ἑτέρων] · p0414.01 ἀποκάλυψις [ἀποκύλισις] · p0415.12 ἀγγελικὴν [εὐαγγελ.] · p0416.48 [vulg. ἐν τῇ πόλει ταύτῃ] · p0426.31 γνώσεως [διαγνώσεως]:
   sigla as result-2/3/4 give them; English = printed; T notes quote exactly.
4. **p0422.20 ἀνώρυξαν [ἀνέρρηξαν]** (qd-005): the translator FOLLOWED THE BRACKET («tore apart»). By the rule the English follows the printed ἀνώρυξαν («dug up») if it construes; the T note quotes the bracket and says the LXX
   and the facing Latin *discerpserint* follow it. If the printed word cannot construe in the sentence, keep «tore apart» and say why in the T note. Report which.
5. **p0425.16 ἀναστάσεως [ἴσ. ἀναλήψεως]**: keep «resurrection»; T note quotes the bracket as the editor's conjecture («perhaps ἀναλήψεως», "ascension").

## B. Plate readings that bear on the English
6. **p0403.11 (Q.~17)**: the plate prints **«οἶμαι δὲ, ὁ θυμός»** («and, I think, anger»); the Latin *sanguis autem, ira* and the sense need **αἷμα**. Keep «blood»; T note «Migne prints οἶμαι ("I think"), a misprint for αἷμα, which the sense and the facing Latin (*sanguis*) need.»
7. **p0426.18 (Q.~72, 1 Cor 3:12)**: the plate prints **παλάμην** (a misprint for καλάμην): «stubble» stands; T note «Migne prints παλάμην, a misprint for the καλάμην of 1 Cor 3:12.»
8. **p0431.12**: the plate prints **κρηνοβατεῖ** (no μ): English for κρημνοβατεῖ («walks on cliffs») stands; T note «Migne prints κρηνοβατεῖ; the sense needs κρημνοβατεῖ.»
9. **p0421.04 δεδοικότας** is on the plate (not δεδωκότας): the English as is; T note may say the Latin *tradendo* seems to read δεδωκότας. **p0422.06 ἐλαφροτάτους** and **p0429.10 διὰ τὰς δέκα** are on the plate: make the English construe them (check).
10. **p0412.13** the plate prints κτένων (for κτείνων): the English follows the sense; no note unless it changes a word.
11. Punctuation the plate prints wrong (questions ending «.», «;» for a comma, p0424.01 σκέπει. μόνας, p0429.29 ἐπιφανείᾳ. ἐνεσπαρμένον): the English follows the sense; no note.
12. **p0399 locator**: Migne prints «II Thess. iv, 16» for 1 Thess 4:16: if an S note gives the locator, it reads «1 Thess 4:16».

## C. From the apparatus
13. **Q.58 (qd-004, p0418–0419), the editor's note (l)**: he EMENDED the text: «ἀντὶ τοῦ, παράδικον, τὸ, παροδικόν· ἀντὶ τοῦ, πονηρῷ, τὸ, μονίμῳ» — the printed **παροδικόν** («passing») and **μονίμῳ** («abiding») are his corrections of the
    manuscript's παράδικον and πονηρῷ. Read the whole of note (l) in result-3 (it explains the passage: the abiding pondering vs the passing one, with Athanasius and Eusebius). Re-read Q.58's English against the printed Greek and the note
    (the translator was unsure who «has the more» and followed the Latin): fix the English if the note settles it; add a T note: «The printed παροδικόν and μονίμῳ are the editor's corrections (his note: "instead of παράδικον, παροδικόν; instead of πονηρῷ, μονίμῳ").»
14. **p0424.34 (Q.~67), after ἀριστερὰν**: the asterisk note reads «Quid si δεξιάν, ad laboris scilicet usum?» («What if δεξιάν, for the use of labour?»): the English keeps «left»; add a T note quoting the conjecture.
15. **p0425.31**: asterisk note «Primam lectionem Latina modo, secundam Graeca repraesentant»: read it in result-4 with its anchor; if it bears on the English there, a T note.
16. Every lettered note in result-1…4 whose `en` says the editor **supplies, deletes, corrects or conjectures** a word of the Greek (as (l) does): check the English at that place, and give a T note where the reader would need it. List each.
17. **POLARITY — p0423.14 (qd-005, Q.~66, Christ and the knowledge of the day and hour): «καθὸ … ἡ ἀνθρωπεία ἐν αὐτῷ οὐχ ἤνωτο».** The editor's note (p) (result-4; coordinator read it at the plate) begins
    «Ἐν αὐτῷ οὐχ ἤνωτο. Necessario addidi negat., ut oppositio constaret ἡνώθη καὶ οὐχ ἤνωτο…» («I necessarily added the negation, so that the opposition "was united" and "was not united" should stand»).
    So the **οὐχ is the editor's SUPPLEMENT** (printed without brackets). The English keeps the negative (it is the printed text); rewrite the T note to say so: «The negative οὐχ is the editor's addition: his note (p) says he
    added it so that the contrast "was united" / "was not united" should stand (cf. Gregory of Nazianzus, Or. 30.15; Basil).» Read the whole of note (p) first, and check the sentence's English construes the contrast.
18. Read every other lettered/asterisk note on pp. 423–431 in result-4 for row 16's classes (p0428 «* Vulg. abscindantur, aliique.»; (t) ἀποκόψωνται = lament; (u) ἔντερον πατρός, the etymology of Moab, which the editor calls inexact):
    T notes only where the reader of the English would need them.
