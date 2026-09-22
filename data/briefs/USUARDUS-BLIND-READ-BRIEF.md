# Usuardus, *Martyrologium* (9198 + 9215): blind read brief (2026-09-22)

You are one of six blind readers on Usuardus's *Martyrologium* (PL 123–124). It is ONE work across
two idnos: 9198 = the prologues + January–April (7 chunks), 9215 = May–December (15 chunks). Your
launch message names your idno and chunks.

The English was drafted by Opus stints with plates read, and it passes every mechanical check. It
now also carries **Bouillart's keyed notes**, which are `[cn: a | …]` in the Latin and translated
`[nt: …]` in the English. **Your job is the class the checks cannot see.**

⚑ **What the text is.** A martyrology: one entry per calendar day, each a run of short
commemorations (place → saint → a clause or two of passion). It is formulaic by design, and the
formulas are fixed by ruling. Bouillart's 1718 variant readings stand inline in square brackets
(`[Bouillart adds: …]`), and they are translated in place (style rule M2). His keyed notes are
18th-century polemic about the Pratensis codex: erasures, hands, and which lines are Usuardus's own.

## ⛔ Rules of the read
- **Do NOT open any `src/english/<idno>/cruces*.md`, or any `data/briefs/` file other than this one
  and `translation-style.md`, before your findings are written.** Blind readers given the cruces
  found nothing new, and readers without them found live defects. You may check a finding against
  the cruces AFTER you have formed it, and say whether it was already logged.
- **Do not edit any file except your report.** The orchestrator adjudicates and applies.
- Read `translation-style.md`, at minimum:
  - the **Martyrologies section (M0–M2)**;
  - Pattern 7/7a;
  - Patterns 8, 11–13, 15, 18 and 19.

  Know the markers: `[n:]`/`[nt:]`, `[var:]`, `[d:]`, `[sic:]`, `[cj:]`, `[ed:]`. `[cn:]` is Latin-only,
  and its English twin is a translated `[nt:]`.

## Fixed by ruling. Do NOT report these as defects
- **Day heads** follow M1: "The sixth day before the Nones · 2 May", Roman form first. **Month heads**
  read "MAY HAS 31 DAYS.". The November head carries a ruled `[cj:]` for XXXI.
- **Formulas:**
  - *natalis* = "the birthday of" (never glossed after the first instance)
  - *passio* = the passion
  - *depositio* = the deposition
  - *translatio* = the translation
  - *Item* = Also
  - *Eodem die* = On the same day; *Ipso die* = On this same day
  - *Apud X* = At X
  - *civitate X* = in the city of X
  - *sub X* = under X
  - *martyrio coronatus* = crowned with martyrdom
  - Bouillart brackets: "[Bouillart adds: …]", "[Bouillart omits …]", "[In Bouillart: …]"
- **Names:** conventional English for well-known saints, emperors and places. Otherwise the Latin
  nominative as printed. Where the nominative was uncertain, the printed form is kept. **Spelling
  variation between entries follows Migne's print and is not a defect.**
- Also not defects:
  - em-dashes;
  - column anchors that step backwards, and doubled bare anchors (Migne's layout);
  - `(cont.)` heads;
  - literal renderings the Latin forces;
  - a garbled word inside a Bouillart note rendered in its evident sense (those were checked at the
    plate separately).

## What to hunt, in order of yield
1. **Numbers.** How many companions (*cum aliis tribus*, *quadraginta*, *XXX militum*), ages, years,
   Roman dates INSIDE entries. A wrong number reads as perfectly good hagiography. Check every one.
2. **Polarity.** A `non / nec / neque / nisi / haud / nunquam / nullus / nihil / absque / sine` dropped
   or added. In Bouillart's notes, a *non* in an argument about which lines are Usuardus's own turns
   the whole argument round. Read those notes' negations with special care.
3. **Mis-parsed grammar.** Who did what to whom: the persecutor or the martyr, which saint a relative
   clause belongs to, whose relics went where, a genitive list read as a nominative list.
4. **Missing or added text.** A commemoration, a companion's name, or a place in one column and not
   the other. **Count the commemorations per day on both sides.** Also check the same in the notes.
5. **Wrong place or wrong saint.** An English name that is not the Latin one: a conventional form
   that points at a DIFFERENT saint or city, or two different Latin names collapsed into one English
   one.

## Report: `data/briefs/USUARDUS-BLIND-READ-<your label>.md`
For each finding give:
- **idno, chunk and column**;
- **class (1–5)**;
- **the Latin**, exact;
- **the English as it stands**, exact, and enough to be found uniquely;
- **the proposed English**, as exact replacement text;
- **why**, in one or two lines;
- **confidence** (certain / probable);
- **whether it was already in the cruces** (checked AFTER).

Then name the chunks you read and found clean, and list the candidates you considered and rejected,
with reasons. A report that lists only findings cannot be told apart from one whose writer never read.

Read every sentence of both columns, notes included. Do not stop early. A transport error is not a
limit.
