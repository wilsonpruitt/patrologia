#!/usr/bin/env node
// Lemma inventory + Clementine pre-scan for a Glossa (lemma-and-gloss) work.
//
// Emits data/briefs/<idno>-lemmata.txt: every italic span in the work's Latin, in
// order, with the column band it stands under, each phrase-searched against
// sources/vulgate/clementine-flat.txt.
//
// Written 2026-08-24 after the 2026-08-23 batch, where the ad-hoc extractor capped an
// italic span at 200 chars and silently dropped 8969's Jer 10:14-15 lemma (which carried
// three substitutions). There is no cap here: a span runs from its opening * to its
// closing *, however long, and an unclosed * is reported rather than skipped.
//
// Usage: node scripts/lemma-inventory.mjs <idno>

import fs from 'node:fs';
import path from 'node:path';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/lemma-inventory.mjs <idno>'); process.exit(1); }

const latinDir = path.join('src/latin', idno);
if (!fs.existsSync(latinDir)) { console.error(`no such work: ${latinDir}`); process.exit(1); }

const manifest = JSON.parse(fs.readFileSync(path.join(latinDir, 'manifest.json'), 'utf8'));

// ---- Clementine index -------------------------------------------------------
const flat = fs.readFileSync('sources/vulgate/clementine-flat.txt', 'utf8');
const normalize = (s) => s
  // ⛔ EVERY bracketed apparatus, not just [n:]. Once plate notes are injected the Latin
  // carries [cn: …] too, and a [cn:] landing inside a lemma made the whole note text part
  // of the span being searched — 8950 @0094D « pectus ª [cn: a | In Hebraeo est gahon…] »
  // scored ⚠ NOT-IN-CLEMENTINE against a lemma that is simply `pectus`. A ⚠ only wastes a
  // look, but it wastes it on an artifact of our own apparatus, which is the worst kind.
  .replace(/\[(?:n|cn|nt|f):[^\]]*\]/g, ' ')  // Migne's inline citations, plate notes, tags
  .replace(/\[[0-9]{4}[A-D]?\]/g, ' ') // column anchors inside a span
  // ⚑ Migne's raised note key is apparatus too. Our TEI keeps it (« pectus ª ») where it
  // drops the note itself, so leaving it in made a one-word lemma unsearchable against
  // the Clementine and scored the span ⚠ on the strength of a footnote marker.
  .replace(/[*«»\u00aa\u1d43\u1d47\u1d9c\u1d48\u1d49]/g, ' ')
  .replace(/[.,;:?!()]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .toLowerCase()
  // Orthographic fold, applied to BOTH sides so it is symmetric. Measured 2026-08-28:
  // clementine-flat.txt carries 459 `cael-` forms and ZERO `coel-`, while Migne prints
  // `coel-` throughout — so every lemma with coelum/coeli/coelestis came back
  // "NOT in Clementine verbatim" on spelling alone (28 spans across 8977/8944/9003,
  // ~10% of the whole ⚠ list). That is a false divergence, and a `[var:]` is a PUBLIC
  // CLAIM ABOUT ANOTHER TEXT, so the noise pushes in the one direction that costs.
  // Folding cannot mask a real divergence: the flat file has no `coel-` for a Migne
  // `cael-` to differ from, and a coel/cael split is Pattern 9 orthography anyway,
  // never a variant worth marking.
  .replace(/coel/g, 'cael');
// ⛔⛔ THE SCAN IS PER VERSE, NOT AGAINST ONE JOINED STRING. Until 2026-09-04 this file
// stripped the references and normalized the whole Clementine into a single blob, so a
// span could score ✓ BY MATCHING ACROSS A VERSE BOUNDARY — the end of one verse plus the
// start of the next. Found by a 9000 stint that re-ran the scan per verse and watched two
// of its own ✓ spans (0340D, 0353A) fall to no-match; both were the recension splicing two
// consecutive verses, innocent in themselves, but the mark had been meaningless.
// ⚑ Verses are kept separate here, so that class cannot occur again.
const VERSES = flat.split('\n').filter(Boolean).map(line => {
  const tab = line.indexOf('\t');
  const ref = tab === -1 ? '' : line.slice(0, tab);
  const book = ref.replace(/\s+\d+:\d+$/, '');
  return { ref, book, norm: normalize(tab === -1 ? line : line.slice(tab + 1)) };
});

// ⛔ THE MATCH MUST END AND BEGIN ON A WORD BOUNDARY. A bare `flatNorm.includes(norm)`
// is an UNANCHORED substring test, so a span whose last word is a PREFIX of the
// Clementine's word scores ✓ — and that is precisely the shape a real divergence takes.
// Found 2026-09-03 by a translating stint on 8999 @0401A: the span
// `Sed ut filios Dei qui erant dispersi congregare` was marked ✓ against Jo 11:52's
// `... qui erant dispersi, congregaret in unum`, because `congregare` is a prefix of
// `congregaret`. THE INFINITIVE/SUBJUNCTIVE IS THE DIVERGENCE, and the mark hid it.
// Measured over every committed brief at the time of the fix: 23 such false ✓ in 8,036
// (0.29%), including 9001 @0227B `Vae autem praegnantibu` — a word BROKEN mid-form,
// cleared by matching the prefix of `praegnantibus`.
// ⚑ The error pushes in the one direction that costs: a false ⚠ only wastes a look,
// a false ✓ suppresses one, and the brief tells stints a ✓ is not clearance precisely
// because it cannot be trusted. This makes the mark mean what the brief says it means.
// ⚑ Boundary = any non-letter, NOT a space: clementine-flat.txt glues the Song of Songs'
// speaker rubrics to the following word (`<sponsa>osculetur me osculo oris sui`), so a
// space-only test rejects 38 perfectly good Canticles matches as artifacts.
const isLetter = (c) => c >= 'a' && c <= 'z';
function occursAsWords(hay, needle) {
  let i = 0;
  while ((i = hay.indexOf(needle, i)) !== -1) {
    const okBefore = i === 0 || !isLetter(hay[i - 1]);
    const okAfter = i + needle.length === hay.length || !isLetter(hay[i + needle.length]);
    if (okBefore && okAfter) return true;
    i++;
  }
  return false;
}

// ---- which book of scripture is this work a commentary ON? --------------------
// ⛔ THE SECOND FAILURE MODE, AND IT IS THE ONE A GOSPEL COMMENTARY WALKS INTO. A ✓ said
// only "these words occur SOMEWHERE in the Clementine" — and in a commentary on one gospel,
// the harmony's own parallels answer that question for the wrong verse. Measured on 9000
// (Luke), where SIX spans scored ✓ and every one was a real divergence a stint caught by
// walking the line: `Quid cogitatis MALA in cordibus vestris` cleared off **Mt 9:4** inside
// a commentary on Lc 5:22; `Gaudete et exsultate` off **Mt 5:12** where Lc 6:23 reads
// `Gaudete in illa die, et exsultate`; and `Gloria in EXCELSIS Deo` at Lc 2:14 cleared off
// **Lc 19:38** — the entry song the gloss expounds two lines further down the same column,
// which the plate then confirmed Migne had conformed it to.
// ⚑ THE FIX IS NOT A CLEVERER TEST, IT IS PRINTING THE ADDRESS. A mark that says WHERE it
// matched turns all six of those into visible signals: a reader glossing Luke 2 who sees
// `✓ Lc 19:38` has been told the thing the bare tick concealed.
const BOOK_OF_WORK = [
  [/Genes/i, 'Gn'], [/Exod/i, 'Ex'], [/Levitic/i, 'Lv'], [/Numeri/i, 'Nm'], [/Deuteronom/i, 'Dt'],
  [/Josue/i, 'Jos'], [/Judicum/i, 'Jdc'], [/Ruth/i, 'Rt'], [/Job/i, 'Job'], [/Psalmo?s?/i, 'Ps'],
  [/Proverb/i, 'Pr'], [/Ecclesiaste/i, 'Ecl'], [/Cantic/i, 'Ct'], [/Sapient/i, 'Sap'],
  [/Ecclesiastic/i, 'Sir'], [/Isai/i, 'Is'], [/Jeremi/i, 'Jr'], [/Lamentat/i, 'Lam'],
  [/Baruch/i, 'Bar'], [/Ezechiel/i, 'Ez'], [/Daniel/i, 'Dn'],
  [/secundum Matth/i, 'Mt'], [/secundum Marc/i, 'Mc'], [/secundum Luc/i, 'Lc'], [/secundum Joann/i, 'Jo'],
  [/Actu[us]m? Apostol/i, 'Act'], [/Apocalyps/i, 'Apc'],
  [/ad Romanos/i, 'Rm'], [/I ad Corinth/i, '1Cor'], [/II ad Corinth/i, '2Cor'], [/ad Galat/i, 'Gal'],
  [/ad Ephes/i, 'Eph'], [/ad Philipp/i, 'Phlp'], [/ad Colossen/i, 'Col'],
  [/I ad Thessal/i, '1Thes'], [/II ad Thessal/i, '2Thes'], [/I ad Timoth/i, '1Tim'],
  [/II ad Timoth/i, '2Tim'], [/ad Titum/i, 'Tit'], [/ad Philemon/i, 'Phlm'], [/ad Hebraeos/i, 'Hbr'],
  [/Jacobi/i, 'Jac'], [/Petri/i, '1Ptr'], [/Joannis/i, '1Jo'], [/Judae/i, 'Jud'],
];
const bookOfWork = (BOOK_OF_WORK.find(([re]) => re.test(manifest.title)) || [])[1] || null;

// Migne's caput heads give the chapter the lemmata under them belong to.
const ROMAN = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
function roman(s) {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const v = ROMAN[s[i]], next = ROMAN[s[i + 1]];
    n += (next && v < next) ? -v : v;
  }
  return n || null;
}

// ---- walk the chunks --------------------------------------------------------
const files = fs.readdirSync(latinDir).filter(f => /^\d+\.md$/.test(f)).sort();
const rows = [];
let unclosed = 0, unclosedQuote = 0, strayClose = 0;

for (const f of files) {
  const raw = fs.readFileSync(path.join(latinDir, f), 'utf8');
  const body = raw.replace(/^---\n[\s\S]*?\n---\n/, '');
  // ⛔ Band must start from THIS CHUNK's colContext, not the work's colFirst.
  // Found 2026-08-28 by the 8977 0015-0019 translator, which reported its chunk's three
  // opening spans "missing" from the inventory. They were not missing — they were filed
  // under 0709C, the WORK's first column, because `band` reset to manifest.colFirst at
  // every file and stayed wrong until the chunk's first anchor was passed. So the spans
  // that open each chunk — up to three per chunk, twenty chunks — were listed hundreds of
  // lines away from the columns an agent is told to read. An agent reading "the section
  // covering your columns" would skip exactly them, and they sit at chunk boundaries,
  // which is where a split range is already weakest. ⭐ The reader was right about what it
  // SAW and wrong about the rule: nothing was dropped, it was mislabelled.
  const fmBlock = (raw.match(/^---\n([\s\S]*?)\n---\n/) || [, ''])[1];
  const ctx = fmBlock.match(/^colContext:\s*"?(\d{4}[A-D]?)"?/m);
  let band = ctx ? ctx[1] : manifest.colFirst;
  // The chapter a lemma belongs to comes from the division head standing over it. Chunks
  // repeat the head with `(cont.)` at a division, so this survives our own chunking.
  // ⚑ Migne heads the first chapter CAPUT PRIMUM, not CAPUT I, so a numeral-only test
  // lapses on exactly the chapter a work opens with. Both forms are read here.
  // ⛔⛔ AND THE HEAD WORD IS NOT ALWAYS `CAPUT`. Measured on 8967 (Liber Psalmorum,
  // 2026-09-04): a psalter commentary heads its divisions `PSALMUS CVI.`, never `CAPUT`,
  // so `caput` stayed null for all 106 chunks and the ⚑ ownership test silently degraded
  // to book-only — "occurs somewhere in the Psalter", which in 150 chapters of Hebrew
  // parallelism answers almost anything. It fired 4 times in 5,999 spans against Luke's
  // 13 in 1,459, and THE LOW COUNT IS WHAT EXPOSED IT. Same class as the CAPUT PRIMUM
  // lapse above: a mechanical check that fails by going quiet, not by erroring.
  // Migne's psalter heads in 8967, all forms actually present on disk:
  //   PSALMUS PRIMUS. · PSALMUS L (no period) · PSAL. LXXVIII. · PSAMUS CXXIV. (his own
  //   dropped L) · PSALMUS LXVII. (cont.) · PSALMUS X.-- *Secundum Hebraeos.*
  // ⛔ AND MIGNE ABBREVIATES. 8950 heads one division `CAP. XLIV.` among 50 `CAPUT` heads
  // (2026-09-05), so `caput` stayed on 43 across the whole of Genesis 44 and the ownership
  // test reported three of that chapter's lemmata as matching "only elsewhere" — at their
  // own correct addresses, Gn 44:5/44:15/44:16. Fourth lapse of this regex and the first
  // that fired LOUDLY rather than going quiet; a single odd head is enough to do it.
  const capWord = /(?:CAPUT|CAP\.|PSALMUS|PSALMI|PSAMUS|PSAL\.)\s+(PRIMUM|PRIMUS|[IVXLCDM]+)/;
  const chapNum = w => (w === 'PRIMUM' || w === 'PRIMUS') ? 1 : roman(w);
  const fmCap = (fmBlock.match(new RegExp('heads: \\["' + capWord.source)) || [])[1];
  let caput = fmCap ? chapNum(fmCap) : null;
  // Split on lines so a VERS. address can be attached to the span that opens it.
  for (const line of body.split('\n')) {
    const capLine = line.match(new RegExp('^##\\s+' + capWord.source));
    if (capLine) caput = chapNum(capLine[1]);
    let cursor = 0;
    // track column anchors as we pass them, left to right, so a span gets the band it opens under
    const anchors = [...line.matchAll(/\[(\d{4}[A-D]?)\]/g)];
    const starPositions = [...line.matchAll(/\*/g)].map(m => m.index);
    // ⛔⛔ THE LEMMA IS NOT ALWAYS ITALIC. Measured on 8950 (Liber Genesis, 2026-09-05):
    // Migne sets this book's verse lemmata in GUILLEMETS — « Nec ultra vocabitur nomen tuum
    // Abram. » — and italicizes only second lemmata, Hebrew words and the Historice/Allegorice
    // tags. An italic-only harvest therefore inventoried 600 spans and MISSED ALL 1,207
    // QUOTED LEMMATA, i.e. every span the 7a″ Vulgate collation exists to check. The ⚑
    // ownership test went to 0 fires in 600 spans and that silence is the only symptom there
    // was. Third instance of the same class in this file (CAPUT PRIMUM, then PSALMUS): a
    // mechanical check that fails by GOING QUIET, never by erroring. Counts across the
    // Glossa books on disk: 8950 = 1,277 « against 0 in 9000 (Luke) — so this is not a
    // house style, it varies BY BOOK, and neither form may be assumed.
    // ⛔⛔ PAIR BY SCANNING, NEVER BY INDEX. The first cut of this paired opens[i] with
    // closes[i] and dropped any pair whose close came first. That is wrong on the commonest
    // line shape in the book: a quote OPENED IN THE PREVIOUS PARAGRAPH closes at the head of
    // this one, so the line's first delimiter is a `»` with no `«` before it, and every pair
    // after it is shifted by one. Measured on 8950 chunk 0002: the line `» [n: (STRAB., RAB.)]
    // … ut dicere possit: « Mente servio legi Dei, » etc.` runs »«» — opens[0] paired with the
    // close STANDING BEFORE IT, failed the ordering test, and the lemma vanished from the
    // inventory entirely. ⭐ Found by the 0000-0003 stint counting 168 spans against its
    // brief's 167 and diffing line for line — the count is the only handle there is, which is
    // exactly why the brief asks for it. A silent DROP is worse than a mis-split: a mis-split
    // moves a span to a neighbouring file, a drop removes it from every file.
    // ⚑ A second `«` while a quote is open is Migne repeating the mark at the head of a
    // continued line (his house style throughout this book), not a nested quotation — so it
    // is absorbed and the OUTERMOST span is what gets inventoried.
    const quotePairs = [];
    {
      let openAt = null;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '«') { if (openAt === null) openAt = i; }
        else if (ch === '»') {
          if (openAt !== null) { quotePairs.push([openAt, i]); openAt = null; }
          else strayClose++;   // closes a quote opened in an earlier paragraph — not a defect
        }
      }
      // ⛔ AN UNCLOSED « USED TO YIELD NO SPAN AT ALL, so the lemma it opens was in NOBODY'S
      // inventory — not the master, not any stint file, and not the stints' own counts either.
      // Reported by the 0004-0007 stint, 2026-09-05: 8950 @0088A `« Et custodiret` and @0088C
      // `« Praecepitque ei dicens` are real lemmata that every instrument on both sides of the
      // work was blind to. Counting the line as an anomaly (which this did) is not the same as
      // inventorying the span, and only the second puts it in front of a translator. So the
      // span is emitted to the end of its paragraph and MARKED, rather than dropped and tallied.
      if (openAt !== null) {
        unclosedQuote++;
        quotePairs.push([openAt, line.length - 1, 'unclosed']);
      }
    }
    const notePairs = [...line.matchAll(/\[(?:cn|nt): [^\]]*\]/g)].map(m => [m.index, m.index + m[0].length - 1]);
    const spans = quotePairs.map(([a, b, flag]) => ({ a, b, unclosed: flag === 'unclosed' }));
    for (let i = 0; i + 1 < starPositions.length; i += 2) {
      const a = starPositions[i], b = starPositions[i + 1];
      // An italic INSIDE a quoted lemma is already listed as part of that lemma; listing it
      // again would double-count a total the runbook makes load-bearing (stints count their
      // own Latin against it). Measured on 8950: 2 of 1,207.
      if (quotePairs.some(([qa, qb]) => a > qa && b < qb)) continue;
      // Nor an italic inside an injected plate note: `[cn: a | … *gahon*, quod *ventrem* …]`
      // is MIGNE'S FOOT NOTE, not a lemma of his text, and its three italics would be three
      // phantom spans in a total that stints are told to count their own Latin against.
      // (At 8950 they happened to fall inside a quoted lemma and were caught by the rule
      // above — a coincidence of that one site, not a guarantee.)
      if (notePairs.some(([na, nb]) => a > na && b < nb)) continue;
      spans.push({ a, b });
    }
    spans.sort((x, y) => x.a - y.a);
    for (const { a, b, unclosed: openEnded } of spans) {
      for (const an of anchors) if (an.index < a) band = an[1];
      const span = line.slice(a, b + 1);
      // A VERS. n.-- address immediately preceding the span is carried with it.
      // ⚑ The address is not always a single numeral: Genesis prints ranges and lists
      // (`VERS. 8, 9.--`, `VERS. 11-13.--`) and pads the gap to its lemma with Migne's
      // ellipsis dots (`VERS. 1-4.-- . . . . . . « Ponamque foedus, »`). The single-numeral
      // form matched only 228 of 8950's 487 addressed quoted lemmata — so on this book the
      // narrow regex would have disarmed the ownership test for more than half of even the
      // spans it did see. Trailing filler is dots and space ONLY, so it cannot swallow prose.
      const before = line.slice(cursor, a);
      // ⛔⛔ THE `.--` IS NOT ALWAYS THERE. Until 2026-09-05 this pattern REQUIRED it, so a verse
      // lemma Migne addressed `VERS. 25. *Suscitaverunt.*` — no dash — was filed as an ordinary
      // second lemma, and because the ⚑ ownership test fires only on a span carrying a VERS.
      // address, THE TEST SILENTLY SKIPPED IT. Found by the 9002 stint that counted its own verse
      // lemmata against the brief and got 134 where a mechanical read gave 132.
      // ⚑ Measured on 9002: 8 spans work-wide. Six cleared in Matthew's own chapter, and the two
      // that did not were both real findings the ⚑ would otherwise never have surfaced — @0114C
      // *Gerazenorum* against the Clementine's *Gerasenorum* (four times, all three synoptics), and
      // @0172D, a comma-only artefact (*Peccavi, tradens*). So the miss was not cosmetic: it hid
      // one genuine candidate per four missed spans.
      // ⚑ Same class as CAPUT PRIMUM, PSALMUS and CAP. XLIV. before it — FOURTH time this file has
      // assumed one of Migne's addressing forms is the only one. The dash is now optional.
      const vers = before.match(/(VERS\.\s*[IVXLCDM\d]+(?:\s*[-,]\s*[IVXLCDM\d]+)*\.(?:--)?[\s.]*)$/);
      cursor = b + 1;
      rows.push({ file: f, band, caput, openEnded, vers: vers ? vers[1].trim().replace(/[\s.]+$/, '') : '', span });
    }
    // ⛔⛔ ADVANCE THE BAND PAST A LINE THAT HAS ANCHORS BUT NO SPANS. The loop above only
    // updates `band` from anchors standing before a span ON THE SAME LINE, so a line carrying
    // column anchors and no italics — common in this note-dense prose — left `band` frozen and
    // every later span in the chunk inherited a stale column. Measured on 8967: chunk 0005's
    // three spans were all filed under [0850A], the chunk's opening context, while standing at
    // 0850D / 0851A / 0851B; anchors 0850B, 0850C and 0850D all stood on span-less lines.
    // ⚑ Reported independently by the 0000-0004 and 0005-0009 stints, then reproduced
    // mechanically before this fix — two agents noticing the same thing is corroboration only
    // once the instrument has been checked directly.
    // MEMBERSHIP WAS NEVER WRONG (split-lemma-brief.mjs splits by chunk, not by band), so no
    // brief was mis-split and nothing shipped wrong. What was lost is the ability to LOCATE a
    // span from its label — which is most of what the file is for.
    if (anchors.length) band = anchors[anchors.length - 1][1];
    if (starPositions.length % 2 === 1) unclosed++;
  }
}

// ---- scan -------------------------------------------------------------------
const out = [];
out.push(`# ${idno} — lemma inventory and Clementine pre-scan`);
out.push('');
out.push(`**${manifest.title}** · PL ${manifest.volume} · cols ${manifest.colFirst}–${manifest.colLast} · ${manifest.chunkCount} chunks.`);
out.push('');
out.push('Generated at launch. **This file is a CANDIDATE LIST, not a findings list.**');
out.push('');
out.push('Every marked span in the Latin of this work, in order, with its column band — **both the');
out.push('italic `*…*` spans and the quoted `« … »` spans.** ⛔ Which of the two carries the verse');
out.push('lemma VARIES BY BOOK and may not be assumed: Luke (9000) has no guillemets at all and sets');
out.push('its lemmata in italic, while Genesis (8950) sets 1,207 lemmata in guillemets and italicizes');
out.push('only second lemmata, Hebrew words and the *Historice/Allegorice* tags. Spans opening a');
out.push('`VERS. n.--` address are the verse lemmata proper; the rest are second lemmata picked up');
out.push('mid-gloss, and inline scripture the gloss quotes. **7a″ applies to all of them.**');
out.push('');
out.push('## How the ✓ / ⚠ marks were made, and what they do NOT mean');
out.push('');
out.push('Mechanical phrase search of the normalized span against');
out.push('`sources/vulgate/clementine-flat.txt` (all 73 books, one verse per line).');
out.push('');
out.push('- **✓ followed by an ADDRESS** = this exact word sequence occurs, as whole words, in the');
out.push('  verse(s) named. ⛔ Still **not clearance** — but now you can see WHERE it matched, which is');
out.push('  the thing a bare tick used to hide. **Read the address.** If you are glossing Luke 2 and the');
out.push('  mark says `✓ Lc 19:38`, the mark has just told you the lemma matches a different verse.');
out.push('- **⚑ MATCHES ONLY ELSEWHERE** = the span carries a `VERS.` address, so it is the verse lemma');
out.push('  proper, and it occurs in the Clementine — but **not in this book and chapter.** In a gospel');
out.push('  commentary that is usually the harmony answering for the wrong evangelist. Measured on 9000:');
out.push('  six spans scored a bare ✓ and every one was a real divergence found by a stint walking the');
out.push('  line — `Quid cogitatis mala…` off Mt 9:4 inside a commentary on Lc 5:22, and `Gloria in');
out.push('  excelsis Deo` at Lc 2:14 off Lc 19:38, the verse the gloss expounds two lines later.');
out.push('- **⚠ NOT in Clementine verbatim** = the sequence was not found. Most of these will be');
out.push('  innocent: a fragment cut mid-phrase, an `usque ad` abridgment span, a span carrying an');
out.push('  editorial `etc.`, a Migne spelling. **A ⚠ is a place to look, never a divergence.**');
out.push('- Single words are not searchable this way and are marked for checking in place.');
out.push('');
out.push('## ⚠ THE COMPARAND ITSELF HAS DEFECTS — CHECK BEFORE YOU ACCUSE MIGNE');
out.push('');
out.push('`clementine-flat.txt` is Tweedale\'s 2005 "Quasimodo" release and **the upstream');
out.push('correction diffs published after it are deliberately NOT applied** (see');
out.push('`sources/vulgate/README.md`). So a divergence can live on OUR side of the collation, and');
out.push('a `[var:]` fired against it is a false public claim about Migne\'s text.');
out.push('');
out.push('**Confirmed defects in this copy** (found by stints, both forms of the file affected):');
out.push('');
out.push('    Is 22:18   `Coronas cornonabit te`   — read `Coronans coronabit te`');
out.push('');
out.push('⛔ **The test is cheap and it is yours to run: if the brief\'s Clementine reading is not');
out.push('itself sound Latin, the defect is in the comparand.** `cornonabit` is not a word. Say so,');
out.push('collate against the sense, and do NOT fire a marker on it. Add any new instance to this');
out.push('list. ⚑ The same rule applies at one remove to a form that IS sound but looks wrong: a');
out.push('peer declined a `[sic:]` on Migne\'s `requiscere` because this file prints the syncopated');
out.push('stem at the verse quoted — the form lives outside Migne\'s compositor.');
out.push('');
out.push('⛔ **You still walk every line.** The marks order your work; they do not do it. A `[var:]`');
out.push('is a public claim about another text and must rest on the file, cited by book chapter:verse —');
out.push('never on this pre-scan and never on recollection.');
out.push('');
out.push('## The inventory');
out.push('');

// ⛔ `printed`, NOT rows.length. An empty span (CC's `<hi></hi>` noise, which the chunker
// renders as a bare `**`) is COLLECTED as a row and then dropped by the `continue` below, so
// rows.length totals lines the file does not contain. Measured on 8967: the headline said
// 5999 while the file held 5997 and the four categories summed to 5997. The runbook makes
// this total load-bearing -- stints are told to count their own Latin against it, and that
// count is the ONLY handle on a mis-split brief -- so two phantom spans send a stint hunting
// for lemmata that never existed.
let hits = 0, misses = 0, singles = 0, elsewhere = 0, printed = 0;
// ⛔ MEMBERSHIP IS COMPUTED HERE AND NOWHERE ELSE. split-lemma-brief.mjs used to re-derive
// it by counting `*…*` spans in each chunk with its own copy of the harvest rule — and the
// moment this file learned to harvest « … » too, that copy allocated 603 of 1805 spans and
// mis-labelled every band. Same class as the first-english.mjs triple failure in CLAUDE.md
// rule 8: a rule written twice drifts the day one copy is improved. The splitter now READS
// this tally instead of re-deriving it, so a future span class cannot desynchronise them.
// (The splitter's own sum assertion is what caught it, and it stays.)
const perChunk = new Map();
const perChunkOpen = new Map();
let openEndedTotal = 0;
for (const r of rows) {
  const norm = normalize(r.span);
  const words = norm.split(' ').filter(Boolean);
  let mark;
  if (words.length === 0) { continue; }
  else if (words.length === 1) { mark = '— single word, check in place'; singles++; }
  else {
    // Every verse the span occurs in, as words. Cheap because the substring test rejects
    // almost every verse before the boundary check is reached.
    // ⛔ DO NOT STOP EARLY. The first cut of this loop kept the first six matches and
    // broke — and because VERSES runs in canonical order, a common phrase in a gospel
    // lemma filled all six slots from Genesis–Maccabees and the loop never reached the
    // gospel at all. `Et factum est` under CAPUT VII was reported as matching ONLY
    // elsewhere while standing verbatim at Lc 7:11. The ownership test must see EVERY
    // match, so only the DISPLAY is capped. Caught by sampling the new flag's output
    // instead of trusting the count — the same rule this project gives its agents:
    // check the instrument before reporting the drift.
    const refs = [];
    let ownMatch = false;
    for (const v of VERSES) {
      if (!v.norm.includes(norm) || !occursAsWords(v.norm, norm)) continue;
      if (refs.length < 6) refs.push(v.ref);
      if (bookOfWork && v.book === bookOfWork &&
          (!r.caput || Number(v.ref.slice(bookOfWork.length + 1).split(':')[0]) === r.caput))
        ownMatch = true;
    }
    if (!refs.length) { mark = '⚠ NOT in Clementine verbatim — CHECK'; misses++; }
    else {
      const shown = refs.slice(0, 3).join(', ') + (refs.length > 3 ? ', …' : '');
      // A VERS. address makes this the verse lemma proper, so it should stand in THIS
      // work's own book and chapter. Anything else is a parallel, and a parallel that
      // answers for the lemma is exactly the false ✓ this file used to hand out.
      const own = bookOfWork ? ownMatch : true;
      if (r.vers && bookOfWork && !own) {
        mark = `⚑ MATCHES ONLY ELSEWHERE — ${shown}  (lemma is ${bookOfWork}${r.caput ? ' ' + r.caput : ''}) — CHECK`;
        elsewhere++;
      } else { mark = `✓ ${shown}`; hits++; }
    }
  }
  printed++;
  perChunk.set(r.file, (perChunk.get(r.file) || 0) + 1);
  if (r.openEnded) {
    openEndedTotal++;
    perChunkOpen.set(r.file, (perChunkOpen.get(r.file) || 0) + 1);
    mark = `⚠ UNCLOSED « — Migne's quotation runs past this paragraph, so the span shown ends where the paragraph does and may be SHORT. Collate it at the line. (${mark})`;
  }
  const lead = r.vers ? r.vers + ' ' : '';
  out.push(`[${r.band}] ${lead}${r.span}   ${mark}`);
}

out.push('');
out.push(`## Totals — ${printed} spans: ${hits} ✓ · ${elsewhere} ⚑ · ${misses} ⚠ · ${singles} single-word`);
// ⭐ PRINT THE UNMATCHED COUNT BESIDE THE TOTAL. The 0004-0007 stint reconciled 215 against 215
// and the agreement was FALSE: two of its own counting errors, both caused by unmatched
// delimiters, had cancelled. `215, 5 unmatched` would have exposed it instantly. A bare total
// on a guillemet book is not a checkable number.
out.push(`\n**${openEndedTotal} of those spans are open-ended** (Migne's quotation runs past its paragraph). Count yours paragraph-bounded and report BOTH numbers.`);
if (unclosed) out.push(`\n⚠ ${unclosed} line(s) carry an odd number of \`*\` — an italic span may cross a line. Check by eye.`);
// A « with no » on its line is a quoted lemma running past a paragraph break, and it is NOT
// inventoried — it is the one span class this file can lose silently, so it is reported.
if (unclosedQuote) out.push(`\n⚠ ${unclosedQuote} line(s) carry unbalanced \`«\`/\`»\` — a quoted lemma runs past the line and is NOT in the list above. Check by eye.`);

fs.mkdirSync('data/briefs', { recursive: true });
const dest = `data/briefs/${idno}-lemmata.txt`;
fs.writeFileSync(dest, out.join('\n') + '\n');
const countsDest = `data/briefs/${idno}-lemmata.counts.json`;
fs.writeFileSync(countsDest, JSON.stringify({
  idno, generated: new Date().toISOString(), total: printed,
  note: 'Spans PRINTED in <idno>-lemmata.txt per chunk file, in file order. Written by lemma-inventory.mjs; read by split-lemma-brief.mjs. Never hand-edit, and never re-derive these counts by re-parsing the Latin.',
  openEnded: openEndedTotal,
  chunks: files.map(f => ({ file: f, spans: perChunk.get(f) || 0, openEnded: perChunkOpen.get(f) || 0 })),
}, null, 1) + '\n');
console.log(`${dest} — ${printed} spans: ${hits} ✓ / ${elsewhere} ⚑ / ${misses} ⚠ / ${singles} single${unclosed ? ` · ⚠ ${unclosed} unclosed-star line(s)` : ''}${openEndedTotal ? ` · ${openEndedTotal} open-ended` : ''}${unclosedQuote ? ` · ⚠ ${unclosedQuote} unbalanced-guillemet line(s)` : ''}`);
