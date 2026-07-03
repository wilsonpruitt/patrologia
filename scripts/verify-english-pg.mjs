#!/usr/bin/env node
// English-chunk verifier for PG works (Greek source variant of verify-english.mjs).
// Usage: node scripts/verify-english-pg.mjs <workKey>
//
// Per chunk, against its Greek twin:
//   1. Frontmatter identical (verbatim copy rule).
//   2. Column-anchor sequence identical (order + count) — anchors are sacred.
//   3. English/Greek word ratio in [1.1, 2.0] — the hand anchor chunk ran
//      1.26× (chronicle Greek, paratactic and name-heavy, translates leaner
//      than canonical Latin's 1.5×).
// Whole work:
//   4. Dedupe scan — any English paragraph (>15 words, normalized) appearing
//      more than once across all chunks (agents re-emitting boundary text).
// Exit non-zero on any failure.

import fs from 'node:fs';
import path from 'node:path';

const key = process.argv[2];
if (!key) { console.error('usage: node scripts/verify-english-pg.mjs <workKey>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const grcDir = path.join(ROOT, 'src/greek', key);
const engDir = path.join(ROOT, 'src/english', key);
const manifest = JSON.parse(fs.readFileSync(path.join(grcDir, 'manifest.json'), 'utf8'));
const errs = [];
const warns = [];

const colRe = /\[(\d{4})\]/g;
const words = s => s.split(/\s+/).filter(Boolean).length;
const split = raw => {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  return { fm: m[1], body: m[2].trim() };
};

const engBodies = [];
for (const c of manifest.chunks) {
  const n = String(c.chunk).padStart(4, '0');
  const engPath = path.join(engDir, `${n}.md`);
  if (!fs.existsSync(engPath)) { errs.push(`${n}: missing English chunk`); continue; }
  const grc = split(fs.readFileSync(path.join(grcDir, `${n}.md`), 'utf8'));
  const eng = split(fs.readFileSync(engPath, 'utf8'));
  if (grc.fm !== eng.fm) errs.push(`${n}: frontmatter differs from Greek chunk`);
  const gCols = [...grc.body.matchAll(colRe)].map(m => m[1]);
  const eCols = [...eng.body.matchAll(colRe)].map(m => m[1]);
  if (gCols.join(',') !== eCols.join(','))
    errs.push(`${n}: anchor sequence mismatch (grc ${gCols.length}: ${gCols.join(' ')} | eng ${eCols.length}: ${eCols.join(' ')})`);
  const gw = words(grc.body.replace(colRe, ''));
  const ew = words(eng.body.replace(colRe, ''));
  const ratio = ew / gw;
  if (ratio < 1.1 || ratio > 2.0) errs.push(`${n}: EN/GRC ratio ${ratio.toFixed(2)} outside [1.1, 2.0] (${ew}/${gw})`);
  engBodies.push({ n, body: eng.body });
}

// dedupe scan
const seen = new Map();
for (const { n, body } of engBodies) {
  for (const p of body.split(/\n\n+/)) {
    const norm = p.replace(colRe, '').replace(/\s+/g, ' ').trim().toLowerCase();
    if (words(norm) <= 15) continue;
    if (seen.has(norm)) errs.push(`duplicate paragraph in ${seen.get(norm)} and ${n}: "${norm.slice(0, 60)}…"`);
    else seen.set(norm, n);
  }
}

if (warns.length) { console.log('warnings:'); warns.forEach(w => console.log(' ~ ' + w)); }
if (errs.length) { console.error('VERIFY FAILED:'); errs.forEach(e => console.error(' - ' + e)); process.exit(1); }
console.log(`verify OK: ${manifest.chunks.length} chunks, anchors + frontmatter + ratios + dedupe clean`);
