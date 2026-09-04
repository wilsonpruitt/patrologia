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
  .replace(/\[n:[^\]]*\]/g, ' ')      // Migne's inline citation notes
  .replace(/\[[0-9]{4}[A-D]?\]/g, ' ') // column anchors inside a span
  .replace(/[*«»]/g, ' ')
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
let unclosed = 0;

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
  // The chapter a lemma belongs to comes from the caput head standing over it. Chunks
  // repeat the head with `(cont.)` at a division, so this survives our own chunking.
  // ⚑ Migne heads the first chapter CAPUT PRIMUM, not CAPUT I, so a numeral-only test
  // lapses on exactly the chapter a work opens with. Both forms are read here.
  const capWord = /CAPUT\s+(PRIMUM|[IVXLCDM]+)/;
  const fmCap = (fmBlock.match(new RegExp('heads: \\["' + capWord.source)) || [])[1];
  let caput = fmCap ? (fmCap === 'PRIMUM' ? 1 : roman(fmCap)) : null;
  // Split on lines so a VERS. address can be attached to the span that opens it.
  for (const line of body.split('\n')) {
    const capLine = line.match(/^##\s+CAPUT\s+(PRIMUM|[IVXLCDM]+)/);
    if (capLine) caput = capLine[1] === 'PRIMUM' ? 1 : roman(capLine[1]);
    let cursor = 0;
    // track column anchors as we pass them, left to right, so a span gets the band it opens under
    const anchors = [...line.matchAll(/\[(\d{4}[A-D]?)\]/g)];
    const starPositions = [...line.matchAll(/\*/g)].map(m => m.index);
    for (let i = 0; i + 1 < starPositions.length; i += 2) {
      const a = starPositions[i], b = starPositions[i + 1];
      for (const an of anchors) if (an.index < a) band = an[1];
      const span = line.slice(a, b + 1);
      // A VERS. n.-- address immediately preceding the span is carried with it.
      const before = line.slice(cursor, a);
      const vers = before.match(/(VERS\.\s*[IVXLCDM\d]+\.--\s*)$/);
      cursor = b + 1;
      rows.push({ band, caput, vers: vers ? vers[1].trim() : '', span });
    }
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
out.push('Every italic span in the Latin of this work, in order, with its column band. Spans opening a');
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
out.push('⛔ **You still walk every line.** The marks order your work; they do not do it. A `[var:]`');
out.push('is a public claim about another text and must rest on the file, cited by book chapter:verse —');
out.push('never on this pre-scan and never on recollection.');
out.push('');
out.push('## The inventory');
out.push('');

let hits = 0, misses = 0, singles = 0, elsewhere = 0;
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
  const lead = r.vers ? r.vers + ' ' : '';
  out.push(`[${r.band}] ${lead}${r.span}   ${mark}`);
}

out.push('');
out.push(`## Totals — ${rows.length} spans: ${hits} ✓ · ${elsewhere} ⚑ · ${misses} ⚠ · ${singles} single-word`);
if (unclosed) out.push(`\n⚠ ${unclosed} line(s) carry an odd number of \`*\` — an italic span may cross a line. Check by eye.`);

fs.mkdirSync('data/briefs', { recursive: true });
const dest = `data/briefs/${idno}-lemmata.txt`;
fs.writeFileSync(dest, out.join('\n') + '\n');
console.log(`${dest} — ${rows.length} spans: ${hits} ✓ / ${elsewhere} ⚑ / ${misses} ⚠ / ${singles} single${unclosed ? ` · ⚠ ${unclosed} unclosed-star line(s)` : ''}`);
