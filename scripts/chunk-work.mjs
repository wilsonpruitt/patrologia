#!/usr/bin/env node
// Phase 5 chunker — per-work, column-anchor preserving.
// Usage: node scripts/chunk-work.mjs <workIdno> [--target 1200] [--max 1600] [--out <dir>]
//
// Emits src/latin/<idno>/NNNN.md chunks + manifest.json, then validates:
//   1. Column-marker sequence across all chunks === source pb sequence (order + count).
//   2. Chunk colContext continuity (each chunk knows the column in effect at its first word).
//   3. Note-marker count across chunks === source inline <note> count.
//   4. Word-count conservation (chunks total ≈ source body total).
// Any validator failure exits non-zero and deletes nothing — inspect, fix, re-run.
//
// All transform logic lives in scripts/lib/chunk-core.mjs (shared with chunk-scan.mjs);
// marker conventions are documented there.

import fs from 'node:fs';
import path from 'node:path';
import { chunkWork } from './lib/chunk-core.mjs';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/chunk-work.mjs <workIdno>'); process.exit(1); }
const argVal = (flag, dflt) => {
  const i = process.argv.indexOf(flag);
  return i > 0 ? process.argv[i + 1] : dflt;
};
const TARGET = Number(argVal('--target', 1200));
const MAX = Number(argVal('--max', 1600));

const ROOT = path.join(import.meta.dirname, '..');
const teiPath = path.join(ROOT, 'sources/pl/tei', `${idno}.xml`);
const works = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/works.json'), 'utf8'));
const work = works.works.find(w => w.texts?.some(t => String(t.idno) === String(idno)));
if (!work) { console.error(`text idno ${idno} not found in works.json`); process.exit(1); }
const textRec = work.texts.find(t => String(t.idno) === String(idno));

const xml = fs.readFileSync(teiPath, 'utf8');
const { errors, warnings, chunks, manifest } = chunkWork({ xml, work, textRec, idno, target: TARGET, max: MAX });

if (!manifest) { console.error('FAILED:'); errors.forEach(e => console.error(' - ' + e)); process.exit(1); }

const outDir = argVal('--out', null) ?? path.join(ROOT, 'src/latin', String(idno));
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (/^\d{4}\.md$/.test(f)) fs.unlinkSync(path.join(outDir, f));
for (const c of chunks) fs.writeFileSync(path.join(outDir, c.name), c.content);
fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

console.log(`${chunks.length} chunks → ${outDir}`);
manifest.chunks.forEach(m => console.log(`  ${String(m.chunk).padStart(4, '0')}  ${String(m.words).padStart(5)}w  ${m.colFirst}–${m.colLast}  ${m.heads[0] ?? '(cont.)'}${m.heads.length > 1 ? ` … ${m.heads.at(-1)}` : ''}`));
if (errors.length) { console.error('\nVALIDATION FAILED:'); errors.forEach(e => console.error(' - ' + e)); process.exit(1); }
console.log(`\nvalidation OK: ${manifest.sourcePbMarks} column marks, ${manifest.sourceNotes} notes, ${manifest.sourceWords} words conserved`);
for (const w of warnings) console.warn(`⚠ ${w}`);
