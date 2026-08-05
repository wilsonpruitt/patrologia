#!/usr/bin/env node
// Mechanical checks on raw PG OCR transcriptions, before Opus adjudication.
// Usage: node scripts/pg-ocr-lint.mjs raw/pg088/batch2/out [--map data/pg-column-maps/pg088.json]
//
// These are the defects a transcriber cannot catch in its own output, because
// each one is a property of the FILE or of the SEQUENCE, not of a reading:
//
//  latin      Latin-script letters loose in the Greek body. Layout rule 4 calls
//             Latin inside a Greek source file a serious defect; the transcriber
//             reports the bleed it noticed, which is exactly not the bleed it
//             missed.
//  head       A running head (column number, DOCTRINA/S. DOROTHEI …) left in the
//             body. Rule 2 says skip it; a leaked head becomes a phantom line of
//             text and, worse, a number that looks like a column anchor.
//  marginals  Migne's subdivision letters must run A→B→C→D down a column. A gap
//             or a repeat means one was missed, misread, or clipped — and a lost
//             marginal is a lost citation address that nothing downstream can
//             detect (hard rule 1). Reported, never "fixed": B,C,D with no A is
//             normal when A fell on the previous column, so this flags the shape
//             for a human and does not assume.
//  sections   UNCERTAIN / LATIN-EXCLUDED / FOOTNOTES-SKIPPED present and parseable.
//  empty      A suspiciously short body — a truncated read that still looks like
//             a completed file.
//
// This lints the TRANSCRIPTION, never the Greek. It cannot tell a misprint from
// a misreading and does not try: that judgement is the Opus adjudication pass,
// and a lint that guessed at readings would be the silent-correction defect
// wearing a different hat.

import fs from 'node:fs';
import path from 'node:path';

const dir = process.argv[2];
if (!dir) { console.error('usage: node scripts/pg-ocr-lint.mjs <outDir>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const abs = path.isAbsolute(dir) ? dir : path.join(ROOT, dir);

const SECTIONS = ['UNCERTAIN:', 'LATIN-EXCLUDED:', 'FOOTNOTES-SKIPPED:'];
// Latin letters that are NOT also Greek homoglyphs a transcriber might type.
// Deliberately narrow: flagging every a/o/e would drown the real signal.
const LATIN_RUN = /[A-Za-z]{3,}/g;
const HEAD = /^\s*\d{3,4}\b|DOCTRIN|DOROTHEI|S\.\s*DOROTH/i;
const MARGINAL = /\[([A-D])\]/g;

let files = 0, problems = 0;
const rows = [];
const notables = [];

for (const f of fs.readdirSync(abs).filter(f => /^leaf\d+\.txt$/.test(f)).sort()) {
  files++;
  const raw = fs.readFileSync(path.join(abs, f), 'utf8');
  // body = everything before the first marker section
  let cut = raw.length;
  for (const s of SECTIONS) { const i = raw.indexOf('\n' + s); if (i !== -1 && i < cut) cut = i; }
  const body = raw.slice(0, cut);
  const bodyLines = body.split('\n').filter(l => l.trim());
  const issues = [];

  // Migne prints his OWN editorial "(sic)" in the Greek body — plate-verified on
  // leaf 848, `ἵνα μόρον (sic) εἴπῃ`. That is the edition speaking and must be
  // kept, so it is reported as a notable rather than counted as a defect. Any
  // other Latin run is the rule-4 defect.
  const printedSic = /\(sic\)/g;
  const sics = (body.match(printedSic) || []).length;
  const latin = [...body.replace(printedSic, '').matchAll(LATIN_RUN)].map(m => m[0]);
  if (latin.length) issues.push(`latin in body: ${[...new Set(latin)].slice(0, 6).join(' ')}`);
  // The body carries Greek and [A]-[D] only. An English editorial placeholder is
  // honest but becomes text at assembly, so it belongs in its own section.
  const placeholder = body.match(/\[[^\]]*(?:excluded|LATIN|illegible|omitted)[^\]]*\]/i);
  if (placeholder) issues.push(`editorial placeholder inside body: "${placeholder[0].slice(0, 52)}" — belongs in a marker section`);
  if (sics) notables.push(`${f}: ${sics} printed "(sic)" kept in body (Migne's own mark — verify against the plate once)`);

  for (const [i, line] of bodyLines.entries()) {
    if (HEAD.test(line)) { issues.push(`possible running head at body line ${i + 1}: "${line.slice(0, 46)}"`); break; }
  }

  const marks = [...body.matchAll(MARGINAL)].map(m => m[1]);
  const dupes = marks.filter((m, i) => marks.indexOf(m) !== i);
  if (dupes.length) issues.push(`marginal repeated: ${[...new Set(dupes)].join(',')} (saw ${marks.join('')})`);
  else if (marks.length && marks.join('') !== [...marks].sort().join(''))
    issues.push(`marginals out of order: ${marks.join('')}`);
  if (!marks.length) issues.push('no marginal letters at all — verify against the plate');

  for (const s of SECTIONS) {
    if (!raw.includes(s)) continue; // omitted-because-empty is legal
    const seg = raw.slice(raw.indexOf(s) + s.length).split(/\n[A-Z-]+:/)[0];
    if (!seg.split('\n').some(l => l.trim().startsWith('-')))
      issues.push(`${s} present but has no "- " entries`);
  }

  if (bodyLines.length < 30) issues.push(`only ${bodyLines.length} body lines — truncated read?`);

  rows.push({ f, lines: bodyLines.length, marks: marks.join('') || '—',
    unc: (raw.match(/^- /gm) || []).length, issues });
  if (issues.length) problems++;
}

console.log(`linted ${files} transcription files in ${dir}\n`);
for (const r of rows) {
  const flag = r.issues.length ? '⛔' : '✓ ';
  console.log(`${flag} ${r.f}  ${String(r.lines).padStart(3)} lines  marginals ${r.marks.padEnd(5)}  ${r.unc} flagged items`);
  for (const i of r.issues) console.log(`     → ${i}`);
}
if (notables.length) {
  console.log('\nNOTABLE (not defects — the plate speaking, worth one look each):');
  for (const n of notables) console.log(`  · ${n}`);
}
console.log(`\n${files - problems}/${files} clean`);
process.exit(problems ? 1 : 0);
