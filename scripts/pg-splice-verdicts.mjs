#!/usr/bin/env node
// Apply adjudicated verdicts to a transcription, conservatively.
// Usage: pg-splice-verdicts.mjs --base <dir> --other <dir> --verdicts <f.md>[,<f.md>] --out <dir>
//
// Batch 2's final text has to come from four sources: pass A (narrow crops),
// pass B (wide crops, blind), the Opus verdicts, and the separately recovered
// full-width lines. Merging those by hand is exactly where a silent error gets
// in — and silent error is the failure mode this whole batch has been fighting.
//
// So this script is deliberately timid. It applies ONLY the verdicts it can
// resolve mechanically and prove it applied correctly:
//
//   · verdict **A**  → keep the base reading (base must be pass A)
//   · verdict **B**  → replace with the other pass's reading
//   · **READING: x** → replace with the adjudicator's explicit reading
//
// and every replacement must match EXACTLY ONE site in the file. If the token is
// absent, or appears more than once, the edit is REFUSED and reported. A verdict
// that cannot be placed unambiguously is not a verdict this script may guess at.
//
// **NEITHER without an explicit reading, and UNRESOLVED, are never applied.**
// They are listed for a human. So are cruxes, which change nothing in the text by
// definition — the printed form stands and the note goes to the apparatus.
//
// The report is the point as much as the output: it names every edit made, every
// edit refused and why, and every item left for a person. Nothing is silent.

import fs from 'node:fs';
import path from 'node:path';

const arg = (k, d) => {
  const i = process.argv.indexOf(k);
  return i === -1 ? d : process.argv[i + 1];
};
const base = arg('--base'), other = arg('--other'), out = arg('--out');
const vfiles = (arg('--verdicts') || '').split(',').filter(Boolean);
if (!base || !other || !out || !vfiles.length) {
  console.error('usage: pg-splice-verdicts.mjs --base <dir> --other <dir> --verdicts <f>[,<f>] --out <dir>');
  process.exit(1);
}
const ROOT = path.join(import.meta.dirname, '..');
const abs = d => path.isAbsolute(d) ? d : path.join(ROOT, d);
const SECTIONS = ['UNCERTAIN:', 'LATIN-EXCLUDED:', 'FOOTNOTES-SKIPPED:'];

// ---- parse verdicts -------------------------------------------------------
const items = [];
for (const vf of vfiles) {
  let leaf = null;
  for (const line of fs.readFileSync(abs(vf), 'utf8').split('\n')) {
    const h = line.match(/^##\s+leaf\s*(\d+)/i);
    if (h) { leaf = h[1]; continue; }
    if (!line.startsWith('- ') || !line.includes('→') || !leaf) continue;
    const [lhsRaw, rhsRaw] = line.slice(2).split('→');
    const lhs = lhsRaw.trim(), rhs = rhsRaw.trim();

    const reading = rhs.match(/\*\*READING:\s*`?([^`*]+?)`?\s*\*\*/);
    const verdict = reading ? 'READING'
      : /\*\*A\*\*/.test(rhs) ? 'A'
      : /\*\*B\*\*/.test(rhs) ? 'B'
      : /UNRESOLVED/.test(rhs) ? 'UNRESOLVED'
      : /NEITHER/.test(rhs) ? 'NEITHER' : '?';

    // The adjudicators wrote the pair BOTH ways — `A=x` `B=y` in separate spans
    // and `A=x B=y` inside one. Matching only the first form left 80+ items
    // unparsed and therefore "manual", which is a silent way to do nothing.
    const ab = lhs.match(/`A=([^`]*?)\s+B=([^`]*?)`/)
            || lhs.match(/`A=([^`]*)`\s*`?B=([^`]*)`?/);
    const onlyA = lhs.match(/`ONLY IN A:\s*([^`]+)`/);
    const onlyB = lhs.match(/`ONLY IN B:\s*([^`]+)`/);
    items.push({
      leaf, line, verdict,
      a: ab ? ab[1] : onlyA ? onlyA[1] : null,
      b: ab ? ab[2] : onlyB ? onlyB[1] : null,
      reading: reading ? reading[1].trim() : null,
      crux: /CRUX/.test(line),
      kind: ab ? 'sub' : onlyA ? 'onlyA' : onlyB ? 'onlyB' : 'other',
    });
  }
}

// ---- apply ----------------------------------------------------------------
fs.mkdirSync(abs(out), { recursive: true });
const report = [];
let applied = 0, refused = 0, manual = 0, kept = 0, noop = 0;

const bodyOf = raw => {
  let cut = raw.length;
  for (const s of SECTIONS) { const i = raw.indexOf('\n' + s); if (i !== -1 && i < cut) cut = i; }
  return [raw.slice(0, cut), raw.slice(cut)];
};

for (const f of fs.readdirSync(abs(base)).filter(f => /^leaf\d+\.txt$/.test(f)).sort()) {
  const leaf = f.match(/\d+/)[0];
  const raw = fs.readFileSync(path.join(abs(base), f), 'utf8');
  let [body, tail] = bodyOf(raw);
  const mine = items.filter(i => i.leaf === leaf);

  for (const it of mine) {
    // what the text should end up saying, if we can know it mechanically
    const want = it.verdict === 'READING' ? it.reading
      : it.verdict === 'B' ? it.b
      : it.verdict === 'A' ? null      // base already holds A
      : null;

    if (it.verdict === 'A') { kept++; continue; }
    if (want === null || want === undefined || want === '') {
      manual++;
      report.push(`  ↯ MANUAL  leaf${leaf}  [${it.verdict}] ${it.line.trim().slice(0, 150)}`);
      continue;
    }
    const from = it.a;
    if (!from) {
      manual++;
      report.push(`  ↯ MANUAL  leaf${leaf}  no A-token to replace: ${it.line.trim().slice(0, 130)}`);
      continue;
    }
    const hits = body.split(from).length - 1;
    if (hits !== 1) {
      refused++;
      report.push(`  ✗ REFUSED leaf${leaf}  "${from}" → "${want}" — ${hits} matches in body (need exactly 1)`);
      continue;
    }
    if (from === want) {   // adjudicator confirmed the base reading, worded as READING
      noop++;
      continue;
    }
    body = body.replace(from, want);
    applied++;
    report.push(`  ✓ leaf${leaf}  "${from}" → "${want}"${it.crux ? '   [CRUX logged]' : ''}`);
  }

  fs.writeFileSync(path.join(abs(out), f), body + tail);
}

console.log(report.join('\n'));
console.log(`\napplied ${applied} · already-correct ${kept + noop} · REFUSED ${refused} · MANUAL ${manual}`);
// `already-correct` = verdict A, plus READING verdicts whose reading the base
// already had. Counting those as "applied" would flatter the splice: no edit was
// made and none was needed.
console.log(`\nRefused and manual items are NOT in the output — resolve them against the plate.`);
console.log(`Cruxes change no text by definition: the printed form stands, the note goes to the apparatus.`);
const residual = report.filter(r => r.includes('REFUSED') || r.includes('MANUAL'));
if (residual.length) {
  const f = path.join(ROOT, 'benchmark/pg88-pilot/BATCH2-RESIDUAL.md');
  fs.writeFileSync(f, '# Batch 2 — verdicts the splice would not place itself\n\n' +
    'Each of these was adjudicated against the plate; the splice refused to place it\n' +
    'mechanically because the token was absent, ambiguous, or spans more than one word.\n' +
    'They are NOT in `batch2-final`. Resolve each against the plate.\n\n' +
    residual.join('\n') + '\n');
  console.log(`\n${residual.length} residual items → benchmark/pg88-pilot/BATCH2-RESIDUAL.md`);
}
