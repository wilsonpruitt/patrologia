# On the text and the translation

*Reader-facing editorial note for migne.app — the "Method" page. Facts follow
the fact-checked biography (`content/migne-biography.md`, esp. its
reprint-lineage section and fn. 38); the conventions described here are the
public face of `translation-style.md`, and the two must agree.*

## What Migne's text is

The Latin and Greek on these pages is Migne's printing, and Migne was a
publisher, not a critical editor. The Patrologia was by design a reprint: its
texts came from the great early-modern collections — the line that runs from
la Bigne's *Bibliotheca* of 1575 through the *Maxima* of Lyon (1677) and
Galland — and above all from the Maurist editions of the seventeenth and
eighteenth centuries, the Benedictine scholarship of Saint-Germain-des-Prés,
reproduced entire. Where those failed, the shop took whatever the nineteenth
century had printed. Migne's workshop reset the type at speed — five stages
of proof and an error bounty against the new mistakes, but no fresh collation
of manuscripts behind them. What you are reading, then, is the received text
of the fathers as the age of print transmitted it: the manuscripts as the
Maurists and their predecessors edited them, as Migne's compositors reset
them, errors of the lineage included.

Two practical consequences. First, where a modern critical edition exists
(Vienna's CSEL, Berlin's GCS, Turnhout's CCSL, Sources Chrétiennes), it
supersedes Migne for scholarly citation of the text itself — what this site
gives you is Migne, complete and addressable, which no critical corpus begun
since has managed to be. Second, column numbers here follow the original
Migne plates; the Garnier reprints made after the 1868 fire were reset with
different column breaks, so citations against a Garnier printing may drift.

## How the translation is made

The English on this site is drafted by large language models working under a
fixed rulebook, and then verified — partly by machine, against the Latin, and
partly by a human reading the result. We say so plainly here because the
alternative is worse: a reader who works it out for himself has every reason
to wonder what else was not said, and a method is easier to defend when it is
described than when it is discovered.

The objection this raises is the right one to raise. A machine asked for a
translation will produce fluent English about the right subject whether or not
it has understood the sentence in front of it, and the fluency is exactly what
makes the failure hard to see. Everything below exists to close that gap. The
short version: the model is never asked to *translate a work*. It is asked to
render a numbered chunk of Latin under a written rule that forbids nearly
every liberty a translator might want to take, and the result is then checked
against the Latin by a program that does not care how good the English sounds.

Three things do the work.

**A frozen rulebook.** Every translation is made against a register rulebook
that is versioned in the project's repository and grows only by explicit
ruling. It fixes the register — literal, never paraphrase; every clause
rendered, nothing summarized or compressed — and it fixes what happens at each
recurring construction that has caused trouble before, with a worked example
named for each. When a reading of a finished work turns up a bad habit, what
gets written down is not a fix for that sentence but a rule for the *class* of
sentence, and the existing English is then swept for other members of the
class. There are a million *quoniam*s in eighty-five million words; the
sentence is not worth fixing, the pattern is.

**A style anchor.** Alongside the rulebook, every draft is made with a fixed
pair of files in view: one chunk of Latin and its approved English. The
conventions that are easier to show than to state — how a heading is set, how
a marker is carried, how dense a sentence is allowed to get — travel by that
example rather than by description.

**Chunks, not works.** Texts are cut into numbered chunks at safe boundaries
and translated in those units, with the column anchors of the printed page
preserved inside them. This is what makes the checking below possible: the
Latin and the English are partitioned identically, so any segment of English
can be laid against the exact Latin it renders rather than against a general
impression of the work.

## What happens when the page is defective

This is where a translation is most tempted to improve on its original, and it
is the rule this project is strictest about. **The English renders what
Migne's plate prints, not what it ought to have printed.** That holds when the
printed reading is odd, when it is ungrammatical, and when it says the
opposite of what the argument plainly requires.

The reason is not pedantry. Migne's corruptions are frequently the most
interesting thing on the page, and every silent correction destroys evidence a
later scholar cannot recover from our English. A dropped negative that makes
Richard of St Victor assert the contrary of his own argument — there are two
such places in the works translated so far, at PL 196 col. 1054A and col.
1069D — is exactly the kind of thing an edition exists to expose. Emend it and
you have produced smooth prose and a worthless witness.

In practice:

- A construable but wrong reading is rendered literally, and the conjecture is
  recorded in the work's list of cruces — never applied to the text.
- Type that is not a word at all (*bonorem* for *honorem*, *ur sam* for
  *ursam*) cannot be rendered, because there is nothing there to render. It is
  carried into the English untranslated, in italics, with a note. The page
  occasionally looks strange; that is the intended cost. A reader who meets
  *bonorem* in italics has learned something true about the plate.
- Punctuation follows the plate as the words do. A printed mark is never
  deleted and a missing one is never supplied: a sentence that simply stops in
  Migne stops in the English.
- Where the plate sets the same words twice, both are printed, and the
  repetition is marked — so that it reads as Migne's doubling rather than as
  our error.

Two classes that look like corruption and are not, and are therefore left
alone: spellings attested in medieval Latin, which are correct Latin for their
period rather than mistakes, and Latin grammatical gender, which has no
English exponent at all — there is nothing there to get right or wrong.

## Why the scripture is translated from the page

Scripture quotations in these works are translated **from the Latin as
printed** — not replaced with any conventional English version. This is
intentional. The fathers and their medieval readers quote the Vulgate
loosely, from memory, from Old Latin versions older than Jerome, or with the
wording deliberately bent to the argument — and then the argument rides on
the wording. Abbo of Fleury's Joel runs *eruca, locusta, bruchus* —
caterpillar, locust, grub — where the King James's creatures come in another
order entirely; a translator who pastes in the familiar verse has quietly
corrected the author's Bible out from under his sermon. Where the quoted
Latin does match the standard text, our rendering is free to echo the
traditional English ("Thou art Peter, and upon this rock I will build my
Church"); where it diverges, the divergence is preserved, because the
divergence is evidence — of the version the author read, the memory he
quoted from, the point he was making. The parenthetical references in small
type stand on Migne's page — editorial identifications, inherited from the
edition he reprinted or supplied by his own shop, and reproduced here exactly
as printed; they will take you to the verse in whatever Bible you trust. The
English on this page tells you what the author actually wrote.

## Quotation marks, and telling us from Migne

The two kinds of quotation mark on these pages mean different things, and the
difference is provenance rather than taste. **« »** reproduces a mark that
Migne prints, placed exactly where he places it. **" "** is a mark *we* have
supplied, because English needs one and the plate marks the quotation some
other way, or not at all.

The consequence is that a reader can tell the edition from the plate by eye,
with no apparatus to consult. It also makes the rule checkable by machine: the
guillemets in the English must match the Latin's one for one, while the
straight quotes are free. One corollary is worth stating because it looks like
an error — where Migne prints an attribution inside the quotation, « I am, he
says, the way and the truth », the English keeps it inside rather than
breaking the quotation around the speech tag as English convention would. And
where Migne opens a quotation and never closes it, neither do we.

## Citations

Migne's citations are reproduced as printed, and this occasionally means
reproducing one that is wrong. The policy separates the two things a citation
does: **the text keeps what Migne prints**, while the project's index resolves
to the reference actually meant and retains the printed form beside it, so
that every correction is auditable. Fourteen such corrections have been
entered so far, each verified against the quoted Latin before entry —
including, in one work, a reference to *III Cor.*, a book that does not exist.

Citations Migne prints inline rather than in notes are kept verbatim in Latin
rather than expanded into English titles, on the same grounds: expanding *De
consid.* into a title would put words on the page that Migne does not print.

## What is checked, and by what

Nothing ships on the strength of the English reading well. Before a work is
built, a verifier compares every English chunk against its Latin twin and
fails on any of the following:

1. Frontmatter identical to the Latin chunk's.
2. Column-anchor sequence identical — same anchors, same order, same count.
   These are the citation-resolving unit of the whole site and are treated as
   sacred.
3. Migne's `[n: …]` citation notes: same count, same content, same order.
4. Section-heading count identical.
5. English-to-Latin word ratio within bounds. English runs about 1.5× the
   Latin; a chunk well outside that is either padded or has dropped something,
   and gets read.
6. A duplicate scan across the whole work, catching text re-emitted at a chunk
   boundary — with a deliberate exception where the Latin itself repeats,
   because canon collections really do cite the same authority twice.
7. Guillemet parity against the Latin, per the rule above.
8. Well-formedness of the markers the edition itself adds.

These are mechanical checks, and mechanical checks catch mechanical failures:
omission, duplication, a dropped anchor, a quotation silently converted. They
do not certify that a sentence has been understood. That is what the cruces
and the reading are for.

## The cruces

Each translated work carries a list of cruces — the places where the plate is
defective or the reading uncertain, given by column, with the printed form,
what was done, and why. Sixty-four of the works translated so far have one,
running to something on the order of nine hundred entries in all. They are not
a disclaimer. They are the part of the edition that lets you check the part
you could not otherwise check: every place a judgment was made is listed, with
the printed Latin beside it, so that a reader who disagrees can see exactly
what he is disagreeing with.

A crux is required even when the decision was to do nothing. That matters more
than it sounds. The failure this project has actually caught in its own work
was not invention but *tidiness* — a defect described accurately in a note and
then quietly smoothed in the text. Two works had deleted a printed repetition
while explaining in their notes that they were avoiding nonsensical English.
Both were restored.

## What this method refuses to do

Stated flatly, because these are the suspicions a translation of theological
texts has to answer:

**It does not paraphrase.** The register is literal and every clause is
rendered. Nothing is summarized, compressed, or dropped for length, and the
mechanical ratio check exists partly to catch it if it were.

**It does not smooth doctrine.** Where an author says something the translator
would not, the author says it. Where the *plate* makes an author say the
opposite of his own argument, the plate's reading stands in the text and the
conjecture goes in the notes — the two dropped negatives named above are the
worked examples, and they are precisely the cases where a well-meaning
corrector would have restored the orthodox sense and destroyed the evidence.

**It does not substitute a familiar Bible for the author's.** See above; this
is the most common way a patristic translation quietly rewrites its author's
argument.

**It does not correct Migne** — not his Latin, not his punctuation, not his
citations, not his attributions. Corrections live in the notes and in the
index, in a form that lets you audit them.

**It does not claim more than it can show.** Every work carries one of two
claims: *first English translation* or *new English translation*. The strong
claim is the only one that needs evidence, and it is made only where a
verified survey found no prior English. Where the evidence is missing,
ambiguous, or merely a search engine's confident assertion, the page says
"new" — which is always true of our work and cannot mislead. When four works
were found carrying a first-translation claim without evidence behind it, the
claim was downgraded rather than defended.

**It does not fill gaps with invention.** Where the source is missing,
illegible, or absent from the digitization, the gap is recorded as a gap.
Nothing is supplied from a modern translation or from general knowledge to
paper over it.

## Why translate this way

Everything above defends the procedure. It does not yet answer the prior
question, which a reader may fairly still be holding: granting every safeguard,
why should this be done by machine at all?

Because nobody was doing it. There is no complete English Migne. There is no
English *Acta Sanctorum*, and no complete English Bonaventure. These are not
gaps waiting on a translator who is nearly finished — they are gaps that have
not moved since the nineteenth century, because the cost of closing them is
measured in human lifetimes. Two hundred and twenty-one volumes of Latin and a
hundred and sixty-one of Greek stood no closer to being read in English this
year than they would a thousand years from now. A corpus of this size is not
translated slowly. It is not translated at all.

The aim is therefore not a perfect translation. It is to unlock the language
gate to the tradition.

There will be errors, including serious ones — as there are in Migne, and in
the Maurists he reprinted, and in every edition of this kind ever assembled.
The model carries a fault forward, a line or a spacing or an artifact of the
transcription, much as a clerk copying his exemplar carried forward the mistake
set in front of him. Working this way has made me feel nearer to the medieval
copyists than to a modern translator.

That is not an excuse offered in advance. It is the reason the rest of this
page exists: if the errors are inevitable, then what matters is whether they
are *findable* — which is why the Latin sits beside the English, why every
judgment is logged as a crux, why the column anchors resolve, and why the
licence lets you publish a correction without asking.

Two companion projects work the same way and under the same rules: the *Acta
Sanctorum* at [actasanctorum.org](https://actasanctorum.org) and Bonaventure's
*Opera Omnia* at
[bonaventure.wrootpress.com](https://bonaventure.wrootpress.com). Three
corpora, one method, each vouching for the others.

## How to check us

The site is built to make this easy rather than to ask for trust.

- **The Latin is on the page.** Every work is published with Migne's text
  beside the English, not merely cited. You need neither our permission nor a
  research library to check a sentence.
- **The column anchors are live.** Migne's own column numbers are preserved in
  both texts and resolve as addresses — `migne.app/pl/139/473a` — so any claim
  can be taken back to a particular column of a particular volume, and from
  there to the scan.
- **The cruces are published with the work**, not held back.
- **The Latin and Greek are public domain and stay that way**, and our English
  is licensed CC BY-NC 4.0. If you think a passage is wrong, you are free to
  take the text, correct it, and publish the correction.

The right posture toward this edition is the one a careful reader takes toward
any translation, and toward Migne himself: use it, and check it where it
matters. It is offered as a serious and disclosed piece of work, not as an
authority.
