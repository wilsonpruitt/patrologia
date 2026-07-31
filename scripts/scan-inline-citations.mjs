#!/usr/bin/env node
// Inline-citation scan — the class described in data/inline-citations/BRIEF.md
// Usage: node scripts/scan-inline-citations.mjs [--json]
//
// Migne sometimes sets a scripture reference as running text in the paragraph rather
// than wrapping it in a note. Our indexer harvests only [n:] notes and [f:] locators,
// so these reach no index: a reader searching /scripture/ will not find the page that
// quotes the verse. This script measures the class so the decision is made on numbers
// rather than on however many an agent happened to notice.
//
// Counts LATIN chunks (the twin is the citation's home), masking anything already
// inside [n:]/[nt:]/[f:] so only genuinely un-harvested parentheticals are reported.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const BOOK = '(?:Gen|Exod|Levit|Num|Deut|Josue|Judic|Ruth|Reg|Paralip|Esdr|Tob|Judith|Esther|Job|Psal|Prov|Eccle|Cant|Sap|Eccli|Isai|Esai|Jerem|Thren|Baruch|Ezech|Dan|Ose|Joel|Amos|Abdi|Jon|Mich|Nahum|Habac|Soph|Agg|Zach|Malach|Machab|Matth|Marc|Luc|Joan|Act|Rom|Cor|Galat|Ephes|Philipp|Coloss|Thess|Tim|Tit|Philem|Hebr|Jac|Petr|Jud|Apoc)';
const CIT = new RegExp(`\\(\\s*${BOOK}[a-z]*\\.?\\s*[^)]{0,40}\\)`, 'g');
const ANCHOR = /\[\d{4}[A-D]?\]/;

const works = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/works.json'), 'utf8')).works;
const stateOf = new Map();
for (const w of works)
  for (const t of (w.texts || []))
    if (t.idno) stateOf.set(String(t.idno), (w.translation || {}).englishState);

const latin = path.join(ROOT, 'src/latin');
const hits = new Map();
for (const idno of fs.readdirSync(latin)) {
  const dir = path.join(latin, idno);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir).filter(f => /^\d+\.md$/.test(f))) {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const body = raw.split('---').slice(2).join('---') || raw;
    const masked = body.replace(/\[n(?:t)?:[\s\S]*?\]/g, '').replace(/\[f:[\s\S]*?\]/g, '');
    for (const m of masked.matchAll(CIT)) {
      if (!hits.has(idno)) hits.set(idno, []);
      hits.get(idno).push({ chunk: f.replace('.md', ''), text: m[0], anchorInside: ANCHOR.test(m[0]) });
    }
  }
}

const rows = [...hits.entries()].sort((a, b) => b[1].length - a[1].length);
const total = rows.reduce((n, [, v]) => n + v.length, 0);
const anchors = rows.reduce((n, [, v]) => n + v.filter(x => x.anchorInside).length, 0);
const shipped = rows.filter(([k]) => stateOf.get(k) === 'ours');
const shippedN = shipped.reduce((n, [, v]) => n + v.length, 0);

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(Object.fromEntries(rows), null, 2));
} else {
  console.log(`inline (un-harvested) scripture parentheticals: ${total} across ${rows.length} works`);
  console.log(`  column anchor INSIDE the citation: ${anchors}`);
  console.log(`  in SHIPPED works (invisible to the live index): ${shippedN} across ${shipped.length} works`);
  console.log(`  in queue works (arriving as we translate): ${total - shippedN}\n`);
  for (const [k, v] of rows) {
    const s = stateOf.get(k) === 'ours' ? 'shipped' : 'queue  ';
    console.log(`  ${k.padEnd(7)} ${String(v.length).padStart(3)}  ${s}  anchor-inside ${v.filter(x => x.anchorInside).length}`);
  }
}
