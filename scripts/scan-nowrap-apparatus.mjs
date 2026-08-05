#!/usr/bin/env node
// Find apparatus spans that cannot wrap but are long enough to need to.
// Usage: node scripts/scan-nowrap-apparatus.mjs [--chars N] [--json out.json]
//
// Why this exists. `.notecite` carries `white-space: nowrap`, which is right for
// what it was built for — "Prov. v, 22" must never break across a line. It is
// wrong for anything sentence-length: an unbreakable span wider than the space
// left on the line drops to a line of its own AND stretches the justified line
// above it into a row of isolated words. That shipped on the Antiochus letter
// (PG 89), whose `[nt:]` gloss on *laura* is the corpus's first long one.
//
// The 2026-08-05 fix gave `.notecite.prose` (i.e. `[nt: …]`, editorial prose)
// `white-space: normal`. It did NOT touch plain `.notecite` (`[n: …]`, Migne's
// locators), which is still nowrap by design — so a long `[n:]` has the same
// defect and the CSS fix does not reach it. That is what this scans for.
//
// Character count is a proxy for rendered width, so this reports CANDIDATES;
// confirm a hit by rendering the page. The threshold is deliberately low —
// a false positive costs one look, a false negative ships a broken column.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const args = process.argv.slice(2);
const LIMIT = Number(args[args.indexOf('--chars') + 1]) || 45;
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : null;

// every class that sets white-space: nowrap AND wraps caller-supplied text
const NOWRAP = ['notecite'];

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.name === 'index.html') yield p;
  }
}

const strip = s => s.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/g, ' ').trim();
const hits = [];
let pages = 0, spans = 0;

for (const file of walk(path.join(ROOT, 'site'))) {
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes('notecite')) continue;
  pages++;
  const re = /<span class="(notecite[^"]*)"[^>]*>([\s\S]*?)<\/span>/g;
  let m;
  while ((m = re.exec(html))) {
    const cls = m[1].split(/\s+/);
    if (!NOWRAP.some(c => cls.includes(c))) continue;
    spans++;
    // .wraps is the builders' own marker, added above NOWRAP_MAX chars, and the
    // CSS gives it white-space: normal. A long span carrying it is fine; a long
    // span WITHOUT it is the defect — either a page built before the 2026-08-05
    // fix and never rebuilt, or a new emit site that forgot noteCls().
    const wraps = cls.includes('wraps');
    const text = strip(m[2]);
    if (text.length <= LIMIT) continue;
    hits.push({
      page: path.relative(ROOT, file).replace(/^site/, '').replace(/index\.html$/, ''),
      cls: m[1], chars: text.length, wraps,
      text: text.length > 110 ? text.slice(0, 107) + '…' : text,
    });
  }
}

const broken = hits.filter(h => !h.wraps);
const fixed = hits.filter(h => h.wraps);

console.log(`scanned ${pages} pages, ${spans} nowrap apparatus spans, threshold ${LIMIT} chars\n`);

if (broken.length) {
  console.log(`⛔ ${broken.length} STILL UNWRAPPABLE — these have the Antiochus defect:\n`);
  for (const h of broken.sort((a, b) => b.chars - a.chars)) {
    console.log(`  ${String(h.chars).padStart(4)}ch  ${h.page}`);
    console.log(`        .${h.cls.replace(/ /g, '.')} — ${h.text}`);
  }
} else {
  console.log('✓ no unwrappable apparatus span over the threshold — the defect class is clear.');
}

if (fixed.length) {
  console.log(`\n${fixed.length} long span(s) correctly carrying .wraps since the 2026-08-05 fix,`);
  console.log('listed so the fix stays load-bearing (if that rule is ever lost, these break):\n');
  for (const h of fixed.sort((a, b) => b.chars - a.chars)) {
    console.log(`  ${String(h.chars).padStart(4)}ch  ${h.page} — ${h.text}`);
  }
}

if (jsonOut) fs.writeFileSync(path.join(ROOT, jsonOut), JSON.stringify({ broken, fixed }, null, 1));
process.exit(broken.length ? 1 : 0);
