#!/usr/bin/env node
// Build TEI patch entries mechanically from a TSV of reported sites.
//
// WHY THIS EXISTS. The Band B pass extracted 149 patches from prose stint reports
// BY HAND, and the blind polarity read then found seven defects the pass itself had
// introduced or left behind (a [sic:] on the wrong word, four patched Latin sites whose
// English twin was never re-read, two patches simply never built). Nothing reconciled
// REPORTED sites against APPLIED ones. This script is that reconciliation: every input
// row must resolve to exactly one site in the TEI, in its DECLARED column, or it is
// refused and reported. A row that cannot be resolved is never silently dropped.
//
// Input TSV columns:  col <TAB> find <TAB> replace <TAB> why
//   find = the text as OUR TEI carries it (a distinctive fragment; context is grown
//          automatically until the match is unique, so short is fine)
//   replace = what Migne's plate prints
//
// Usage: node scripts/patch-build.mjs <idno> <sites.tsv> [--emit out.json]
import fs from 'node:fs';

const [,, idno, tsvPath] = process.argv;
const emitIdx = process.argv.indexOf('--emit');
const xml = fs.readFileSync(`sources/pl/tei/${idno}.xml`, 'utf8');

const pbs = [...xml.matchAll(/<pb\s+n="([^"]+)"\s*\/>/g)].map(m => ({ n: m[1], i: m.index }));
const colAt = i => { let c = '?'; for (const p of pbs) { if (p.i <= i) c = p.n; else break; } return c; };

// grow a find string leftwards/rightwards until it matches exactly once
function unique(needle, wantCol) {
  const all = i => { const out = []; let k = -1; while ((k = xml.indexOf(needle, k + 1)) !== -1) out.push(k); return out; };
  let hits = all();
  if (hits.length === 0) return { ok: false, reason: 'find matches ZERO times in the TEI' };
  if (hits.length === 1) return { ok: true, find: needle, at: hits[0] };
  // ambiguous: grow context around the hit that sits in the declared column
  const inCol = hits.filter(h => colAt(h) === wantCol);
  if (inCol.length !== 1) {
    return { ok: false, reason: `find matches ${hits.length}x (${inCol.length} in declared col ${wantCol}); needs a longer fragment`, cols: hits.map(colAt) };
  }
  const at = inCol[0];
  for (let pad = 8; pad <= 160; pad += 8) {
    const cand = xml.slice(at - pad, at + needle.length + pad);
    let k = -1, n = 0; while ((k = xml.indexOf(cand, k + 1)) !== -1) n++;
    if (n === 1) return { ok: true, find: cand, at: at - pad, grown: pad };
  }
  return { ok: false, reason: 'could not grow to a unique find within 160 chars' };
}

const rows = fs.readFileSync(tsvPath, 'utf8').split('\n')
  .map(l => l.replace(/\r$/, ''))
  .filter(l => l.trim() && !l.startsWith('#'))
  .map((l, i) => { const [col, find, replace, ...why] = l.split('\t'); return { line: i + 1, col, find, replace, why: why.join('\t') }; });

const patches = [], refused = [];
for (const r of rows) {
  if (!r.col || !r.find || r.replace === undefined) { refused.push({ ...r, reason: 'malformed row' }); continue; }
  const u = unique(r.find, r.col);
  if (!u.ok) { refused.push({ ...r, reason: u.reason, cols: u.cols }); continue; }
  const actual = colAt(u.at);
  if (actual !== r.col) { refused.push({ ...r, reason: `DECLARED col ${r.col} but the find lands in ${actual}` }); continue; }
  // the replacement must apply to the grown context, not just the bare needle
  const grownReplace = u.find.replace(r.find, r.replace);
  if (grownReplace === u.find) { refused.push({ ...r, reason: 'replacement is identical to the find' }); continue; }
  patches.push({ col: r.col, find: u.find, replace: grownReplace, why: r.why });
}

console.log(`${rows.length} reported · ${patches.length} resolved · ${refused.length} REFUSED`);
for (const f of refused) console.log(`  ⛔ line ${f.line} [${f.col}] "${f.find}" — ${f.reason}${f.cols ? ' — hits in ' + f.cols.join(',') : ''}`);
if (emitIdx > 0) { fs.writeFileSync(process.argv[emitIdx + 1], JSON.stringify(patches, null, 1)); console.log(`wrote ${patches.length} → ${process.argv[emitIdx + 1]}`); }
