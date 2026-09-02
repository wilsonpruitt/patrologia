#!/usr/bin/env node
// SHIP TEST — refuse a [sic:] or [var:] on a column nobody has read at the plate.
//
// Usage:
//   node scripts/plate-gate.mjs <textIdno>   gate one work; exits nonzero on any uncovered marker
//   node scripts/plate-gate.mjs --all        survey the whole englished corpus; always exits 0
//
// WHY (2026-08-28, out of 9003's full collation): a `[sic:]` asserts a defect in MIGNE'S TYPE
// and a `[var:]` asserts that MIGNE'S TEXT diverges from a scriptural witness. Both are public
// claims about the printed page, and our Latin is not the printed page — it is Corpus
// Corporum's transcription of it, which 9003 measured departing from the plate at ~3 sites per
// page. Corpus frequency can show that an error EXISTS but never WHOSE it is; Vulgate
// collation is worse for the [var:] class, because the digitization can MANUFACTURE the
// divergence the collation then finds. Only the plate licenses either marker. The rule was
// already written in reference_plate-read-triage.md and nothing enforced it: 8977 shipped two
// false `[sic:]` against Migne, each carrying the words "plate-read caveat" in its own crux.
//
// Reads are recorded in data/plate-reads.json. A read range means a human eye met the type on
// those columns — with the corner numbers checked first — whether or not anything was found.
//
// ⛔ NOT A RETROFIT (CLAUDE.md, "RECOVER GOING FORWARD, DO NOT SWEEP THE DONE CORPUS"). `--all` measures the exposure across works that shipped
// before the gate and exits 0; the number is evidence for a decision about sample width, not a
// mandate to re-open them.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const arg = process.argv[2];
if (!arg) { console.error('usage: node scripts/plate-gate.mjs <textIdno> | --all | --ratchet | --freeze'); process.exit(1); }

const registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/plate-reads.json'), 'utf8'));
const works = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/works.json'), 'utf8'));

const COL_RE = /\[([0-9]{3,5})([A-D]?)\]/g;          // keep in sync with chunk-core.mjs COL_RE_SRC
const MARK_RE = /\[(sic|var):\s*([^\]]*)\]/g;
const BANDS = { '': 0, A: 0, B: 1, C: 2, D: 3 };

// A column is a sortable pair (number, band). A bare column sorts as band A so that a range
// written bare is inclusive of the whole column at both ends.
const key = (num, band) => Number(num) * 4 + (BANDS[band] ?? 0);
const parseCol = s => {
  const m = String(s).match(/^([0-9]{3,5})([A-D]?)$/);
  return m ? key(m[1], m[2]) : null;
};

const readsFor = idno => {
  const rec = registry.works[String(idno)];
  if (!rec) return [];
  return rec.reads.map(r => ({ ...r, lo: parseCol(r.from), hi: parseCol(r.to) + 3 }));
};

// Every [sic:]/[var:] in a work's English, resolved to the column it stands in: the last
// anchor at or before it, else the chunk's own colContext (the column running when the chunk
// opens). Cruces files are apparatus about the markers, not the text, and are skipped.
const markersFor = idno => {
  const engDir = path.join(ROOT, 'src/english', String(idno));
  if (!fs.existsSync(engDir)) return null;
  const out = [];
  for (const f of fs.readdirSync(engDir).filter(f => /^\d{4}\.md$/.test(f)).sort()) {
    const raw = fs.readFileSync(path.join(engDir, f), 'utf8');
    const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
    const ctx = fm?.[1].match(/colContext:\s*"?([0-9]{3,5}[A-D]?)"?/)?.[1]
             ?? fm?.[1].match(/colFirst:\s*"?([0-9]{3,5}[A-D]?)"?/)?.[1] ?? null;
    const body = fm ? raw.slice(fm[0].length) : raw;
    const anchors = [...body.matchAll(COL_RE)].map(m => ({ at: m.index, col: m[1] + m[2] }));
    for (const m of body.matchAll(MARK_RE)) {
      let col = ctx;
      for (const a of anchors) { if (a.at < m.index) col = a.col; else break; }
      out.push({ chunk: f, kind: m[1], text: m[2].trim(), col });
    }
  }
  return out;
};

const check = idno => {
  const marks = markersFor(idno);
  if (marks === null) return null;
  const reads = readsFor(idno);
  const covered = [], uncovered = [];
  for (const m of marks) {
    const k = m.col == null ? null : parseCol(m.col);
    const hit = k == null ? null : reads.find(r => k >= r.lo && k <= r.hi);
    (hit ? covered : uncovered).push({ ...m, depth: hit?.depth });
  }
  return { idno, marks, covered, uncovered, reads };
};

const label = w => {
  const rec = works.works.find(x => x.texts?.some(t => String(t.idno) === String(w)));
  const t = rec?.texts.find(t => String(t.idno) === String(w));
  return t ? `${t.title ?? t.idno}` : String(w);
};

// THE SURVEY — computed in ONE place and shared by --all, --ratchet and --freeze.
// (This repo has been burned three times by a claim written in two builders; see
// scripts/lib/first-english.mjs. Do not re-derive the uncovered set anywhere else.)
const BASELINE = path.join(ROOT, 'data/plate-backlog-baseline.json');
const survey = () => {
  // englishState lives on the WORK, not the text (data/works.json).
  const englished = [];
  for (const w of works.works) {
    if ((w.translation?.englishState ?? null) !== 'ours') continue;
    for (const t of w.texts ?? []) englished.push(String(t.idno));
  }
  let totMark = 0, totUn = 0, worksExposed = 0;
  const rows = [];
  for (const idno of englished.sort()) {
    const r = check(idno);
    if (!r || r.marks.length === 0) continue;
    totMark += r.marks.length; totUn += r.uncovered.length;
    if (r.uncovered.length) worksExposed++;
    rows.push(r);
  }
  rows.sort((a, b) => b.uncovered.length - a.uncovered.length);
  const byIdno = {};
  for (const r of rows) if (r.uncovered.length) byIdno[r.idno] = r.uncovered.length;
  return { rows, totMark, totUn, worksExposed, byIdno };
};

// ⛔ THE RATCHET — the backlog may FALL, never RISE (Wilson, 2026-09-02).
//
// 889 uncovered markers are legacy: they belong to works that shipped before the
// plate gate existed, and Wilson's no-retrofit ruling says they are not to be swept
// on a schedule. That number is therefore not a target — it is a CEILING. What must
// never happen again is a NEW work adding to it, which is exactly what every work
// before 8993 did, silently, at the moment it was marked `ours`.
//
// So this does not ask "is the corpus clean?" (it is not, by ruling). It asks the
// only question a ship test can enforce: "did THIS session make it worse?"
//   · a work absent from the baseline must be at ZERO — it is new, and new work
//     ships already read;
//   · a work present in the baseline must not go UP.
// A fall is reported and is a reason to re-freeze, never a failure.
if (arg === '--ratchet' || arg === '--freeze') {
  const { totUn, byIdno, rows } = survey();
  if (arg === '--freeze') {
    const out = {
      generated: new Date().toISOString(),
      what: 'Per-work count of [sic:]/[var:] markers standing on columns nobody has read at Migne\u2019s plate, for every work marked englishState:"ours". The CEILING the ratchet enforces.',
      rule: 'plate-gate.mjs --ratchet fails if a work absent here carries ANY uncovered marker, or if a work listed here goes UP. Falls are fine and are a reason to re-freeze. Re-freeze ONLY after reading plates, never to make a red gate green.',
      total: totUn,
      works: byIdno,
    };
    fs.writeFileSync(BASELINE, JSON.stringify(out, null, 2) + '\n');
    console.log(`froze the backlog baseline: ${totUn} uncovered markers across ${Object.keys(byIdno).length} works -> data/plate-backlog-baseline.json`);
    process.exit(0);
  }
  if (!fs.existsSync(BASELINE)) {
    console.error('no data/plate-backlog-baseline.json — run: node scripts/plate-gate.mjs --freeze');
    process.exit(1);
  }
  const base = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
  const regressions = [], newly = [], improved = [];
  for (const r of rows) {
    const now = r.uncovered.length, was = base.works[r.idno] ?? 0;
    if (now === 0 && was === 0) continue;
    if (!(r.idno in base.works) && now > 0) newly.push({ idno: r.idno, now });
    else if (now > was) regressions.push({ idno: r.idno, was, now });
    else if (now < was) improved.push({ idno: r.idno, was, now });
  }
  for (const i of improved) console.log(`  ✓ ${i.idno} ${label(i.idno)} — backlog fell ${i.was} → ${i.now}`);
  if (!newly.length && !regressions.length) {
    console.log(`\nratchet OK — backlog ${totUn} of ceiling ${base.total}. No work added to it.`);
    if (improved.length) console.log('It FELL. Re-freeze to lock the gain in: node scripts/plate-gate.mjs --freeze');
    process.exit(0);
  }
  console.error('\n⛔ RATCHET FAILED — this session made the backlog WORSE.');
  for (const n of newly) console.error(`  ⛔ ${n.idno} ${label(n.idno)} — NEW work shipping with ${n.now} unread marker(s). New work ships already read.`);
  for (const g of regressions) console.error(`  ⛔ ${g.idno} ${label(g.idno)} — rose ${g.was} → ${g.now}`);
  console.error(`\nbacklog ${totUn} against ceiling ${base.total}.`);
  console.error('Fix by READING THE PLATE for the named work (node scripts/plate-gate.mjs <idno> lists the columns), or by withdrawing the marker.');
  console.error('⛔ Do NOT re-freeze to clear this. The baseline records plates that were read; re-freezing over a regression records a claim nobody checked.');
  process.exit(1);
}

if (arg === '--all') {
  const { rows, totMark, totUn, worksExposed } = survey();
  for (const r of rows) {
    const flag = r.uncovered.length ? '⛔' : '✓ ';
    console.log(`${flag} ${r.idno}  ${String(r.uncovered.length).padStart(3)} uncovered / ${String(r.marks.length).padStart(3)} markers   ${label(r.idno)}`);
  }
  console.log(`\n${totUn} of ${totMark} [sic:]/[var:] markers stand on columns no one has read, across ${worksExposed} of ${rows.length} englished works carrying apparatus.`);
  console.log('This is a MEASUREMENT, not a verdict — the gate is a ship test for new work, not a sweep of the done corpus.');
  process.exit(0);
}

const r = check(arg);
if (!r) { console.error(`no English for ${arg} at src/english/${arg}`); process.exit(1); }
console.log(`plate gate ${arg} — ${r.marks.length} [sic:]/[var:] marker(s), ${r.reads.length} recorded plate read(s)`);
for (const m of r.covered) console.log(`  ✓ ${m.col} ${m.chunk} [${m.kind}: ${m.text}]  (read: ${m.depth})`);
if (!r.uncovered.length) { console.log('\ngate OK — every marker stands on a column that was read.'); process.exit(0); }
console.error('\n⛔ GATE FAILED — a marker makes a public claim about a page nobody read:');
for (const m of r.uncovered) console.error(`  ⛔ ${m.col ?? '(no column)'} ${m.chunk} [${m.kind}: ${m.text}]`);
console.error(`\nRead the column at the plate and record it in data/plate-reads.json, or withdraw the marker.`);
console.error(`Corpus frequency and Vulgate collation do NOT license either marker — see the head of this script.`);
process.exit(1);
