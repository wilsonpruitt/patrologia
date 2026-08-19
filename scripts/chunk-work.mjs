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

// TEI patches (data/tei-patches/<idno>.json) are applied to the XML BEFORE the
// transform, so a re-harvest + re-chunk reproduces them — same discipline as
// data/calfa-patches/ on the PG side. These correct the DIGITIZATION only; a
// defect in Migne's own plate is rendered literally and logged as a crux
// (translation-style.md Pattern 7), never patched here.
// Fail loudly: a find string that matches zero times or more than once means the
// source moved under the patch, and silently skipping it would quietly restore
// the defect the patch exists to fix.
let xml = fs.readFileSync(teiPath, 'utf8');
const patchPath = path.join(ROOT, 'data/tei-patches', `${idno}.json`);
if (fs.existsSync(patchPath)) {
  const { patches } = JSON.parse(fs.readFileSync(patchPath, 'utf8'));
  for (const p of patches) {
    const n = xml.split(p.find).length - 1;
    if (n !== 1) {
      console.error(`TEI patch (${p.col}) matched ${n} times, expected exactly 1 — source has moved; fix the patch before chunking.`);
      process.exit(1);
    }
    xml = xml.replace(p.find, p.replace);
  }
  console.log(`applied ${patches.length} TEI patch(es) from data/tei-patches/${idno}.json`);
}
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

// Migne's foot-of-page conjecture notes, if this work's plate has been read, go back
// into the chunks HERE — chunking rewrites every chunk from the TEI, so an injection
// done earlier would be silently erased by a re-chunk. Running it as the last step of
// the chunker is what makes the recovery survive (CLAUDE.md, "Migne's conjecture notes").
const notesTsv = path.join(ROOT, 'data/plate-notes', `${idno}.tsv`);
if (fs.existsSync(notesTsv)) {
  const { spawnSync } = await import('node:child_process');
  const r = spawnSync(process.execPath, [path.join(ROOT, 'scripts/inject-plate-notes.mjs'), String(idno)], { stdio: 'inherit' });
  if (r.status !== 0) console.error('⛔ plate-note injection reported a problem — see above; the chunks are written, the notes are not all placed.');
} else {
  // The plate spot check is part of chunking (Wilson, 2026-08-19). A work may not be
  // translated on the assumption that its volume has no foot-of-page apparatus: that
  // assumption rests on samples taken in OTHER books, and it is the work in hand that
  // ships. Read 1 page of this work at the plate (2 where a work division falls
  // mid-page — notes sit mid-page there), then record the result in
  // data/plate-notes/coverage.json: coverage "spot" for a checked zero, or recover the
  // notes to <idno>.tsv and re-run this script, which places them.
  const cov = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/plate-notes/coverage.json'), 'utf8'));
  const rec = (cov.works || []).find((w) => String(w.idno) === String(idno));
  if (!rec || rec.coverage === 'none') {
    console.log(`⬜ PLATE SPOT CHECK OWED for ${idno} — no data/plate-notes/${idno}.tsv and coverage is`
      + ` "${rec ? rec.coverage : 'unrecorded'}". Migne's conjecture notes are NOT captured for this work.`);
    console.log(`   Do not infer a zero from a sibling book: sample the plate for THIS work, then set`
      + ` coverage "spot" (checked zero) or recover the notes and re-run.`);
  } else {
    console.log(`(no data/plate-notes/${idno}.tsv — coverage recorded as "${rec.coverage}")`);
  }
}
for (const w of warnings) console.warn(`⚠ ${w}`);
