#!/usr/bin/env node
// Enumerate every supplied em-dash in the English corpus, with the context a
// rule could key on, and emit either a census or a stratified sample for
// labelling.
//
// WHY THIS EXISTS. Migne prints ZERO em-dashes in the entire Latin corpus —
// measured, all works, all chunks. So every one of the ~4,700 in our English is
// ours, supplied for a mark he did print (comma, colon, semicolon) or for no
// mark at all. Pattern 8 says never supply a mark the plate lacks.
//
// It went unmeasured for so long because every blind reader met these one at a
// time and reasonably judged each as house style. The class only became visible
// when a reader was asked to COUNT rather than list.
//
// The plan this script serves: sample → label each site against the Latin twin
// (what does Migne actually print at that point?) → derive a mechanical rule →
// measure the rule against the labels → script the sweep only once it is right
// 95%+ of the time. Running agents over all 4,700 would cost as much as
// translating a work; deriving a rule from ~150 labels does not.
//
//   node scripts/emdash-sites.mjs --census
//   node scripts/emdash-sites.mjs --sample 150 > /tmp/emdash-sample.tsv

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const val = (f, d) => (args.indexOf(f) === -1 ? d : args[args.indexOf(f) + 1]);

const ENG = 'src/english';
const CTX = 60;

// Deterministic shuffle so a sample is reproducible without Math.random.
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

const sites = [];
for (const work of fs.readdirSync(ENG).sort()) {
  const dir = path.join(ENG, work);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir).filter((x) => /^\d{4}\.md$/.test(x)).sort()) {
    const body = fs.readFileSync(path.join(dir, f), 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
    for (let i = 0; i < body.length; i++) {
      if (body[i] !== '—') continue;
      const before = body.slice(Math.max(0, i - CTX), i);
      const after = body.slice(i + 1, i + 1 + CTX);

      // A dash inside our own apparatus is a different animal from one in the
      // prose: [var:]/[nt:] notes are OUR editorial voice, where a dash is not a
      // supplied mark at all. Classify so the sweep can leave them alone.
      const openMarker = before.lastIndexOf('[');
      const closeMarker = before.lastIndexOf(']');
      const inMarker = openMarker > closeMarker && /\[(var|nt|sic|ed|d|n|f|b):/.test(before.slice(openMarker));

      // Paired = another dash close by with no sentence end between.
      const paired = /^[^—.?!]{0,160}—/.test(after) || /—[^—.?!]{0,160}$/.test(before);

      const nextWord = (after.match(/^\s*([A-Za-z']+)/) || [, ''])[1];
      const prevChar = (before.match(/(\S)\s*$/) || [, ''])[1];

      let cls;
      if (inMarker) cls = 'apparatus';
      else if (paired) cls = 'paired';
      else if (/^(and|but|or|nor|for|yet|so|which|who|whom|whose|that|nay|yea)$/i.test(nextWord)) cls = 'conjunction';
      else if (nextWord && nextWord[0] === nextWord[0].toLowerCase()) cls = 'lowercase';
      else cls = 'capital';

      sites.push({
        work, chunk: f.replace('.md', ''), cls, prevChar, nextWord,
        before: before.replace(/\s+/g, ' ').trim(),
        after: after.replace(/\s+/g, ' ').trim(),
      });
    }
  }
}

if (flag('--census')) {
  const byCls = {}, byWork = {};
  for (const s of sites) { byCls[s.cls] = (byCls[s.cls] || 0) + 1; byWork[s.work] = (byWork[s.work] || 0) + 1; }
  console.log(`TOTAL supplied em-dashes in the English corpus: ${sites.length}`);
  console.log(`works affected: ${Object.keys(byWork).length}\n`);
  console.log('by context class:');
  for (const [k, v] of Object.entries(byCls).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(v).padStart(5)}  ${((v / sites.length) * 100).toFixed(1).padStart(5)}%  ${k}`);
  }
  console.log('\nprose sites (excludes apparatus):', sites.filter((s) => s.cls !== 'apparatus').length);
  process.exit(0);
}

if (flag('--sample')) {
  const n = Number(val('--sample', 150));
  // Stratify by class, and inside a class spread across works so the rule is not
  // fitted to one translator's habit.
  const prose = sites.filter((s) => s.cls !== 'apparatus');
  const byCls = {};
  for (const s of prose) (byCls[s.cls] ||= []).push(s);
  const out = [];
  for (const [cls, list] of Object.entries(byCls)) {
    const want = Math.max(12, Math.round((list.length / prose.length) * n));
    list.sort((a, b) => hash(a.work + a.chunk + a.before) - hash(b.work + b.chunk + b.before));
    const seen = {};
    for (const s of list) {
      if (out.filter((o) => o.cls === cls).length >= want) break;
      seen[s.work] = (seen[s.work] || 0) + 1;
      if (seen[s.work] > Math.ceil(want / 6)) continue; // cap per work
      out.push(s);
    }
  }
  console.log(['work', 'chunk', 'class', 'prevChar', 'nextWord', 'before', 'after', 'MIGNE_MARK'].join('\t'));
  for (const s of out) {
    console.log([s.work, s.chunk, s.cls, s.prevChar, s.nextWord, s.before, s.after, ''].join('\t'));
  }
  process.exit(0);
}

console.error('usage: emdash-sites.mjs --census | --sample N');
process.exit(1);
