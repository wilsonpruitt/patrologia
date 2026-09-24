# Cruces — 7090 (Innocent I, *Epistolae et decreta*)

**Governed by `translation-style.md` Pattern 7 and "Papal letters — Innocent I" (P0–P3).** The English
renders what Migne prints (PL 20, cols 463D–612C), which he reprints from Coustant's *Epistolae
Romanorum Pontificum* (1721). Where Migne prints a Greek version after a Latin letter, the English
translates the Greek as printed (Epp. V, VII, IX, XII) and the differences are logged in the stint files.

## Merge, chunks 0000–0031 (2026-09-24)

This section is a merge layer. The six stints' own records stay beside it, unedited: `cruces-0000.md`
(cols 0463D–0488A), `cruces-0006.md` (0488B–0519A), `cruces-0012.md` (0519B–0544A), `cruces-0018.md`
(0544C–0576A), `cruces-0024.md` (0576B–0594A) and `cruces-0028.md` (0594B–0612C). What follows is only
what had to be settled across them and after the blind read.

### Coustant's foot notes

537 letter-keyed notes were swept from the plate (one Sonnet sweep, then read again page by page by the
translating stints). 528 stand as `[cn:]` in the Latin with a translated `[nt:]` twin in the English; 9
are Coustant's Prolegomena keys (before Epistola I) and are out of scope. The sweep put about 30% of its
keys one word early and mis-transcribed or truncated some 100 note texts; every correction was made
against the plate and is recorded in `data/briefs/7090-NOTE-EDITS-*.md` and in `data/plate-notes/7090.tsv`.
The blind read found sixteen more slips in the Latin note layer (e.g. *581* and *580* for *381* and *380*
at 0478B and 0487A, *clanculo* for *clangulo* at 0479A, *ABFERRI* for *AUFERRI* at 0530A) and all sixteen
were corrected at the plate. A `]` inside a note (0574 d) is written fullwidth ［ ］.

### Markers fired, every one on a column read at the plate

`[sic:]` at 0466B *asbcessurus*, 0477A *nom*, 0483B *patres* (added after the blind read), 0491A
*editiotiones*, 0525A *Macedodonas*, 0525C χειρονουμένους, ~0586A *beattiudini*, *in quam*, 0598A
*fratrer*, 0599A *Cathaginensi*, 0606A *epicopis* (added 2026-09-24, below). `[var:]` at 0470B (II Thess. *tradidi*), 0529A (Prov. 19:14), 0578A
(Jn 8:56), 0591A (Ps 51:9), 0592B (Lk 18:16). No marker sits on a Coustant reading.

### TEI patches — 29 applied

`data/tei-patches/7090.json`: 29 plate-read corrections from the stints, each a place where the plate is
sound and our digitization is not. Two are HELD for want of a second witness (worn glyph): 0545A *impletas*
and 0575B *misimus*. The English followed the plate at every site.

## Blind read (7 readers, Opus, cruces withheld) — findings and verdicts

Seven readers (R1–R6 on 7090, R7 on 7089 and 7091) filed 77 numbered findings; reports at
`data/briefs/INNOCENT-BLIND-READ-R*.md`. Every one was judged against the Latin, and against the plate
where it rested on a printed form. **73 applied** (the English, or the Latin note layer where the Latin
column was the one that departed from the plate), **1 logged with no change to the English, 2 rejected,
1 held.** The readers' minor points were also taken up where they held.

**Polarity and who-did-what (the class that matters), all applied:** 0479B *nulla ratione dissolvi* (a
contract is dissolved on no account) · 0583B *inemundabili* (mire that cannot be cleansed) · 0579C
"can, not undeservedly" · 0537A note a (no one ever alleged it) · 0544A the letters were sent to Alexander,
to be delivered to Acacius · 0546A Alexander gathered John's clergy · 0574A Christ, not "us", ascended ·
0582A the pope, not Pelagius, judges the acts · 0588B the jussive *damnent … submittant* · 0590A the others
see the heresiarchs cut off · 0031 *conjunxisse* is active.

**Silent repairs found:** 0522A *Novatianos* had been turned into the misprint "Navatians" in the English ·
0483B Migne's *patres* for *partes* is now `[sic:]` · 0515A *maxime* is adverbial, "chiefly", where the English
had silently adopted Coustant's *maximis*.

### Contested, decided on the evidence (Wilson may overrule)

- **0570B *quae fidelia corda sustineant*.** The stint had "must endure", which adds an obligation the
  Latin does not carry. Now "might endure": the subjunctive as printed. Coustant's note j says Garnier's
  added *non* is unnecessary, so the sentence probably carries a negative sense through its rhetorical
  form; the plate has no question mark, so no negative is supplied. Render as printed, no `[cj:]`.
- **0595A *deprehendi aliquis facile … nec alicubi possit agnosci*.** The English had supplied a negative
  ("no one could easily be detected") that only the inferior manuscripts and Garnier carry (note c).
  Now the printed reading, "someone could easily be detected", with the variant in the note. The sentence
  wants a negative and does not have one in Coustant's text.
- **Saragossa 381 and 380 (0478B, 0487A).** Both plates read the flat-topped 3 of Migne's face and the
  chronology settles it (Majorian and Agde come "afterwards"; the Priscillianists were condemned in 380).
  The earlier undecided cruces entries are closed.
- **7091 0633B *nequidquam* [*Forte* nil quidquam].** Now "not anything", reading *ne quidquam*; Migne's
  own bracket supports it and "in vain" left the clause with the opposite polarity. No `[cj:]`.
- **7091 Greek οὔτε οὐ δυνήσεται (0632C).** The pleonastic οὐ is not carried: "nor will worldly rank be
  able to help anyone". A double negative in English would cancel and reverse the sense.
- **ἀρχιερεύς is "high priest", not "archpriest"** (three Greek heads in 7091).

### Rejected

- **7091 0630C *cum istud … non fugisset* (R7 F7).** Read at the plate (p. 320): Migne prints *cum*, and
  the sentence construes with an elided object. "Him" is supplied in English as the Latin's own ellipsis,
  not a repair. No marker.
- **7089 0628B *inergumeno* (R7 F9).** The plate (p. 319) prints *iner-|gumeno*, hyphenated at the line
  end. *Inergumenus* is an attested variant of *energumenus*, so Pattern 9 applies: no `[sic:]`.
- **0606A *epicopis Apulis* (R6).** First kept unmarked as ruled by the stint; reversed 2026-09-24 for
  consistency with *fratrer* and *Cathaginensi* (see "Held items settled").

### Held

- **R2 B7, 0497B note c; 0519 note a; Dionysius's number in Ep. XVIII's note g**: moved to "Held items
  settled" below (2026-09-24). The Dionysius digit is still open.
- **The second `[cn: a]` in 0527 (Ep. XVII inscription)** is keyed before `[0527A]` in our anchors, but
  on the plate the key belongs to p. 527/528. Anchor placement, not a translation matter.
- **Coustant's own figures**, rendered as printed and not corrected: the Monitum's "Baronius … 308" and
  "430 aut 431" (plate p. 275), Cod. Th. lib. XIX, Pagi's *anni 310*, Arles I *anno 514*.

### The 7091 English is two texts per letter

Migne prints each letter twice (Greek block, Latin block, each with its own column anchors), and the
English translates each from its own language. The Greek-versus-Latin differences are in
`src/english/7091/cruces-0000.md`.

## Held items settled (plate, 2026-09-24)

Scan `raw/scans/pl020/pl020.pdf`. Each page was rendered on its own, and the printed corners were read before anything else. The
disputed glyphs were read at 600 dpi against other sorts of the same face on the same page.

1. **0606A *epicopis Apulis*: `[sic: *epicopis*]` added** in 0030 at "bishops of Apulia", in the same form as *fratrer* and
   *Cathaginensi*. The plate (p. 308, corners 605/606) was already read and recorded in `data/plate-reads.json`, and it prints
   Migne's own misprint for *episcopis*. plate-gate passes.
2. **0497B note c: the plate reads *manendum*** (p. 254, corners 497/498). The sort after *-mend-* has two arms with an open
   notch at the top, which is the italic *u* of *officium* in note a on the same page. The italic *a* on the page (*ad*,
   *sacrificia*, *fas*) has a closed, rounded top. Fixed in `data/plate-notes/7090.tsv` (*propter manendam* → *propter
   manendum*) and re-injected. The Latin diff is that one word in 0007. The English twin was fixed to match.
3. **0519 note a: the plate reads *sibi*** (p. 265, corners 519/520): *Spiritales divitias nullus sibi praeter te conferre
   poterit*, clean italic, with the initial the same sort as the *s* of *nullus*. The TSV and the Latin already had *sibi*. The English
   had rendered *tibi* ("confer on thee"). It now renders the printed *sibi*: "confer on himself". That is a real word and it
   construes, so no marker (Pattern 7; P0, no marker on a Coustant reading).
4. **Ep. XVIII note g, Dionysius's number: UNRESOLVED.** The note is on p. 274 (corners 537/538), col 0537 left foot, not
   0526D as logged above: *Apud hunc inter Innocentii decreta locum ?5 obtinet*. **The second digit is a 5**: it has the
   left upright of the known 5 in the corner "537". **The first digit is not settled**: its top bar stands detached from
   the bowl at both ends, and the joint is the one feature that tells this face's flat-topped 3 (joined top right, like
   the known 3 in "(13 Decemb." = *Idibus Decembris*, same page) from its 5 (joined top left). Second witness: `volumes.json`
   lists for PL 20 only the archive item `patrologiaecurs75unkngoog` (an Augustine volume, per the style file) and Google Books
   IDs with no calibrated fetch method, so no second witness was read. The Latin keeps *55* and the English "55th"
   as transcribed. A reading of 35 or 55 stays open.
5. **TEI patches 0545A *impletas* and 0575B *misimus*: NOT APPLIED, still held.**
   - 0545A (p. 278, corners 545/546): *imple?as*. The sort is a short thin stroke in the upper half of the x-height and
     nothing more. On the next line a worn *r* in *detersas* is the same kind of thin upright, and every *t* on these lines is a full sort.
     So the plate does not tell *t* from *r*.
   - 0575B (p. 293, corners 575/576): *misi-|mu?*. The last sort is an upper hook plus a detached dot. That fits a broken *s*
     (spine lost) or a broken *r* (stem lost) equally well. Not clear.
   Neither is clear at the plate, so `data/tei-patches/7090.json` is unchanged and there was no re-chunk. The English
   ("have been fulfilled", "We have sent both") is unchanged. Both want a second witness.
