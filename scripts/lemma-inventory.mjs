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
const flatNorm = normalize(flat.replace(/^[^\t]*\t/gm, ''));

// ---- walk the chunks --------------------------------------------------------
const files = fs.readdirSync(latinDir).filter(f => /^\d+\.md$/.test(f)).sort();
const rows = [];
let unclosed = 0;

for (const f of files) {
  const body = fs.readFileSync(path.join(latinDir, f), 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  let band = manifest.colFirst;
  // Split on lines so a VERS. address can be attached to the span that opens it.
  for (const line of body.split('\n')) {
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
      rows.push({ band, vers: vers ? vers[1].trim() : '', span });
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
out.push('- **✓ Clementine verbatim** = this exact word sequence occurs SOMEWHERE in the Clementine.');
out.push('  ⛔ It does **not** mean it occurs at the verse being glossed, and it is **not** clearance.');
out.push('  A lemma can match some other verse verbatim and still diverge from its own.');
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

let hits = 0, misses = 0, singles = 0;
for (const r of rows) {
  const norm = normalize(r.span);
  const words = norm.split(' ').filter(Boolean);
  let mark;
  if (words.length === 0) { continue; }
  else if (words.length === 1) { mark = '— single word, check in place'; singles++; }
  else if (flatNorm.includes(norm)) { mark = '✓ Clementine verbatim'; hits++; }
  else { mark = '⚠ NOT in Clementine verbatim — CHECK'; misses++; }
  const lead = r.vers ? r.vers + ' ' : '';
  out.push(`[${r.band}] ${lead}${r.span}   ${mark}`);
}

out.push('');
out.push(`## Totals — ${rows.length} spans: ${hits} ✓ · ${misses} ⚠ · ${singles} single-word`);
if (unclosed) out.push(`\n⚠ ${unclosed} line(s) carry an odd number of \`*\` — an italic span may cross a line. Check by eye.`);

fs.mkdirSync('data/briefs', { recursive: true });
const dest = `data/briefs/${idno}-lemmata.txt`;
fs.writeFileSync(dest, out.join('\n') + '\n');
console.log(`${dest} — ${rows.length} spans: ${hits} ✓ / ${misses} ⚠ / ${singles} single${unclosed ? ` · ⚠ ${unclosed} unclosed-star line(s)` : ''}`);
