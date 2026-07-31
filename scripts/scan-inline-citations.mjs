#!/usr/bin/env node
// Inline-citation AUDIT — post-rollout check for the class ruled on in
// data/inline-citations/SPEC.md (2026-07-31 Fable session). Usage:
//   node scripts/scan-inline-citations.mjs [--json]
//
// Originally a MEASUREMENT script (see data/inline-citations/BRIEF.md — its numbers
// are frozen there, do not re-derive them from this script's current behavior, which
// has since changed). Migne sometimes sets a scripture reference as running text in
// the paragraph rather than wrapping it in a note; index-work.mjs now harvests this
// class at index time (SPEC.md rulings 1-2). This script's job now is narrower and
// different: find any candidate the harvester DIDN'T catch, so a gap is visible
// rather than silently invisible again.
//
// Requires a NUMERAL TOKEN in the candidate (`\b(?:[IVXLCDM]+|[0-9]+)\b`), not just a
// bare letter — the original brief's 69 held 3 prose false positives ("(Ecclesia de
// Christo dicit)", "(Judaeos videlicet)", "(Joannem Baptistam loquor)"), none of which
// contain a numeral token; the true measured class was 66. Counts LATIN chunks (the
// twin is the citation's home), masking anything already inside [n:]/[nt:]/[f:] so
// only genuinely un-harvested parentheticals are ever candidates.
//
// Invariant this enforces: on every SHIPPED work, the remainder after subtracting
// data/index/<series>/<idno>.json's own harvested inline records must be ZERO.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const BOOK = '(?:Gen|Exod|Levit|Num|Deut|Josue|Judic|Ruth|Reg|Paralip|Esdr|Tob|Judith|Esther|Job|Psal|Prov|Eccle|Cant|Sap|Eccli|Isai|Esai|Jerem|Thren|Baruch|Ezech|Dan|Ose|Joel|Amos|Abdi|Jon|Mich|Nahum|Habac|Soph|Agg|Zach|Malach|Machab|Matth|Marc|Luc|Joan|Act|Rom|Cor|Galat|Ephes|Philipp|Coloss|Thess|Tim|Tit|Philem|Hebr|Jac|Petr|Jud|Apoc|Aeneid)';
const CIT = new RegExp(`\\(\\s*(?:(?:I{1,3}V?|IV)\\s+)?${BOOK}[a-z]*\\.?\\s*[^)]{0,40}\\)`, 'g');
const ANCHOR = /\[\d{4}[A-D]?\]/;
const NUMERAL_TOKEN = /\b(?:[IVXLCDM]+|[0-9]+)\b/;
const stripMarks = s => s.replace(/\[\d{3,5}[A-D]?\]/g, '').replace(/\*/g, '').replace(/\s+/g, ' ').trim();

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
  // Already-harvested inline records for this work (empty set if never indexed —
  // everything then reports as a "gap", which is correct: it IS one).
  const idxPath = path.join(ROOT, 'data/index/pl', `${idno}.json`);
  const harvested = new Set();
  if (fs.existsSync(idxPath)) {
    const j = JSON.parse(fs.readFileSync(idxPath, 'utf8'));
    for (const r of [...(j.scripture || []), ...(j.fontes || [])])
      if (r.inline) harvested.add(`${r.column}|${(r.refDisplay ?? r.raw ?? '').replace(/^\(|\)$/g, '')}`);
  }
  for (const f of fs.readdirSync(dir).filter(f => /^\d+\.md$/.test(f))) {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const body = raw.split('---').slice(2).join('---') || raw;
    const masked = body.replace(/\[n(?:t)?:[\s\S]*?\]/g, '').replace(/\[f:[\s\S]*?\]/g, '');
    for (const m of masked.matchAll(CIT)) {
      if (!NUMERAL_TOKEN.test(m[0])) continue; // prose false positive — no numeral token
      const inner = stripMarks(m[0].replace(/^\(|\)$/g, ''));
      // best-effort match against the harvest: exact column unknown here without
      // re-walking the running column, so treat "any harvested record with this
      // exact text anywhere in the work" as caught — a coarser test than the
      // indexer's own column-keyed one, but adequate for a post-rollout gap audit.
      const caught = [...harvested].some(k => k.endsWith(`|${inner}`));
      if (caught) continue;
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
  console.log(`UNHARVESTED inline scripture parentheticals: ${total} across ${rows.length} works`);
  console.log(`  column anchor INSIDE the citation: ${anchors}`);
  console.log(`  in SHIPPED works (should be ZERO after a full re-index): ${shippedN} across ${shipped.length} works`);
  console.log(`  in queue works (harvested automatically at ship time): ${total - shippedN}\n`);
  for (const [k, v] of rows) {
    const s = stateOf.get(k) === 'ours' ? 'shipped' : 'queue  ';
    console.log(`  ${k.padEnd(7)} ${String(v.length).padStart(3)}  ${s}  anchor-inside ${v.filter(x => x.anchorInside).length}`);
  }
  if (shippedN === 0) console.log('✓ zero unharvested inline citations on shipped works.');
}
