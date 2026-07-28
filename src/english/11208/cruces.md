# Cruces — 11208, *Flores seu sententiae ex S. Bernardo*

Garbled or corrupt printed readings, logged here. **Governed by
`translation-style.md` Pattern 7:** the English renders what the plate PRINTS, never
the conjectured reading; type that is not a word at all is carried into the English
untranslated, in italics. Three entries below previously applied their conjecture to
the running text (the withdrawn 10103 precedent) and have been restored to the
printed readings. Also records the one standing editorial decision taken for this
work.

## Editorial decision (applies to both chunks)

Each sentence in this florilegium is followed by an italic **source citation** in
abbreviated Latin (*Serm. 36 in Cant., n.* 3; *Tract. de cont. mun. ad cler., c.* 1;
*Epist.* 82). These are Migne's citation apparatus, not authorial prose, so they are
**kept verbatim in Latin, unanglicized**, on the same footing as `[n: …]` markers —
even though they are not `[n: …]`-wrapped. Expanding the abbreviations into English
work-titles would require inventing expansions Migne does not print.

Where the italic tail contains **editorial comment** rather than a locator
(*Nam vitia identidem repullulant*; *Nempe amorem comparis*; *Proverb. vulgare*),
that comment **is** translated, with the italic structure kept. Every line has been
kept discrete — no two sentences run together into continuous prose.

This decision is cheap to reverse if Wilson prefers pattern 2 of `translation-style.md`
applied to the locators as well.

## Chunk 0

- **1198C** — *Parum est semel putasse … Nam. vitia idemtidem repullulant.* Two typographic slips in the gloss: *Nam.* with a stray point, and *idemtidem* for *identidem*. *idemtidem* is not a Latin word, so it is **carried through untranslated in italics** — "*For the vices idemtidem sprout.*" Intended reading *identidem* ("again and again"), certain. (Earlier: "sprout again and again.") The stray point after *Nam.* is a printing artifact with no counterpart in English word order and is not reproduced. Note also that *putare* here is "to prune," not "to think" — the surrounding sentences about pruning cupidity fix the sense.
- **1199B** — *Utinam relinquant nobis moderni Noe, unde a nobis possint operiri.* Compressed to the point of obscurity; the allusion is to Genesis 9:23 (the sons covering Noah's nakedness), and the sense wanted is that today's "Noahs" should leave us some covering for their shame. Rendered literally.
- **1201B** — *Non est laus calami laudabilis pictura, sive scriptura.* Word order makes the subject ambiguous; rendered "A praiseworthy painting, or writing, is not the praise of the pen."
- **1201D** — *mors in ollis earnium*. *earnium* is not a Latin word, so it is **carried through untranslated in italics** — "death is in the pots *earnium*." Intended reading *carnium*, near-certain (cf. the fleshpots of Egypt, Exodus 16:3, and *Nam peccata populi comedis* in the gloss). (Earlier: "the pots of flesh.")
- **1197B–1202A** — The inline section numbers *1569*, *1570*, *1571*, *1572* are Migne's running numeration and are kept italic per the marker rule, never bare.

## Chunk 1

- **1202D** — *Ambitio ambientium crux, omnes torquens omnibus placet.* Elliptical; *crux* stands in apposition without a verb. Rendered "Ambition, the cross of the ambitious, tormenting all, pleases all."
- **1203B** — *Ille convenientior babitus*. *babitus* is not a Latin word (b for h), so it is **carried through untranslated in italics** — "That *babitus* is more fitting." Intended reading *habitus* ("bearing"), certain from the following *si actu … severus sis*. (Earlier: "That bearing is more fitting.")
- **1203A** — *Hippocrates docet animas salvas facere in hoc mundo, Christus perdere.* *animas* is being used in the double sense "lives/souls" that the antithesis with Matthew 16:25 depends on. Rendered "souls" to keep the antithesis; a human may prefer "lives."
- **1203C → 1204A** — Anchor sequence gap: column 1203D is not marked, the text running from [1203C] straight to [1204A]. Reproduced as printed; worth a check against the plate for dropped sentences, since this is a list where a dropped item would leave no syntactic trace.
- **1204B** — *In circuitu impii ambulant* echoes Psalm 11:9 (Vulg.); translated from the Latin as printed, not from a conventional English version.
- **1203C** — *nunc tomo V* ("now in volume V") is Migne's own editorial cross-reference, printed outside the italics; translated as such.

## Inline citation tails — `[f: …]` tagging pass (2026-07-18)

The standing editorial decision above was superseded in its mechanics (not its
principle) by `translation-style.md` **pattern 4**: the locators are now wrapped in
`[f: …]` markers so the indexer harvests them as *fontes*. 167 locators tagged
(114 in chunk 0, 53 in chunk 1); 26 bare *Ibid.*, 48 members of the *Ibid.* family
resolved by the indexer. Four paragraphs carry no locator at all and are correctly
untagged: the three *Sunt qui scire volunt* clauses at 1199D–1200A (they share the
citation printed after the fourth) and *Sapiens est, cui quaeque res sapiunt* at 1201B.

### Swallowed-sentence fix (segmentation guard, rule 3)

- **1197B** — *Nil tam durum, quod duriori non cedat.* IV, *De consid., c. 3. Hinc
  consuetudo consuetudine vincitur.* Migne's italic run runs past the locator and
  swallows an independent Bernardine adage. Split: the tag takes only
  `IV, *De consid., c.* 3.`, and *Hinc consuetudo consuetudine vincitur* is now
  ordinary translated body text ("Hence habit is conquered by habit."), roman, outside
  the marker. This is the **only** swallowed-content fix made; the full sweep of both
  chunks turned up one further candidate, logged immediately below.

### Comment-vs-content judgment calls

Migne's glosses in this work almost all carry an explicit gloss marker — *Nam*,
*Nempe*, *Adeo*, *id est*, *Sicut*, *Proverb.* — which is the test used throughout.
Marker-bearing runs were read as editorial comment: translated, kept italic, left
outside the tag (1198C *Nam. vitia idemtidem repullulant*; 1198C *Nempe amorem
comparis*; 1198D *Nam ad violenta media convertitur*; 1199A *Sicut Graece loquentem
non intelligit…*; 1199A *Nam optimum cibi condimentum fames*; 1199B *Nempe erga Deum*;
1199B *Adeo jam palam et sine pudore peccatur*; 1200D *id est, Non prius effundes…*;
1201A *Nempe ne majoris ingratitudinis rei fiant*; 1201D *Nam peccata populi comedis*;
1202D *Proverb. vulgare*; 1204B *Nam si impliceris infimis, non pervenies*).
Migne's cross-references *--Vid. notas, ibid.* (1200B) and *nunc tomo V* (1203C) are
likewise comment, not locator, and are untagged.

- **1200B — FLAG FOR HUMAN REVIEW.** *Melius est, ut pereat unus quam unitas.* Epist.
  102. *Ejiciendus qui turbat concordiam.* The trailing clause carries **no** gloss
  marker, so by the marker test it looks like a second swallowed adage on the 1197B
  model. It has been kept as editorial comment (italic, outside the tag) on the ground
  that it is applicative — it prescribes what follows *from* the preceding maxim rather
  than standing free of it, unlike *Hinc consuetudo consuetudine vincitur*, which is an
  independent sentence. Either reading splits it out of the locator, so the index is
  unaffected; only the italics differ. Reverse if a human prefers the content reading.

### Column anchors trapped inside a locator — partial tags

`scripts/index-work.mjs` matches `[f: ([^\]]*)]`, so a `[f: …]` tag cannot contain a
column anchor, and the tag content must survive as a verbatim substring of the Latin
twin — which still prints the anchor mid-locator. Four locators are split by an anchor
in the plate. In each, the tag takes the longest anchor-free stretch that still
identifies the source; the remainder stays as printed italics outside the marker. The
anchors themselves are untouched and in order. These four index as partial raws:

- **1199B/C** — *Epist. 27 ad [1199C] Ardut.* → tagged `*Epist. 27 ad*` (drops the
  addressee *Ardut.*).
- **1200B** — *Epist. [1200B] 102.* → tagged `*Epist.*` only (drops the number). The
  weakest of the four; a bare number would have been no better as a source name.
- **1201C** — *Tract. de cont. mun. ad [1201C] cler., n. 21.* → tagged
  `*Tract. de cont. mun. ad*` (drops *cler., n. 21*).
- **1203C** — *Serm. [1203C] de S. Magdal., n. 1* → tagged `*de S. Magdal., n.* 1,`
  (drops the leading *Serm.*, which alone would identify nothing).

If the indexer is ever taught to skip anchors inside `[f: …]`, these four should be
re-tagged whole.
