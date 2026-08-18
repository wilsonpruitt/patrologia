#!/usr/bin/env node
// Sentence-mark census + localizer — the tool behind the ?/! repair.
//
// verify-english.mjs warns per chunk when the English and its Latin twin
// disagree on question-mark count (added 2026-08-08, after 11632's blind read
// found an entire 46-word rhetorical question missing that every other check
// passed). That warn tells you a chunk is wrong; it does not tell you WHERE,
// and a 113-sentence paragraph is not a site.
//
// This walks the whole corpus, keeps the chunks that DROP a mark the plate
// prints (Pattern 8's live defect — never delete), then narrows each one to a
// single Latin sentence by pairing the marked sentences of the two twins in
// order. The first row where the two columns stop describing the same clause is
// the drop: from there down the English list runs one ahead of the Latin.
//
// Direction matters. A SUPPLIED mark (EN > LA) is a Pattern 8 defect too, but a
// softer one and far more common (112 chunks vs 29); this reports both and
// localizes the drops, which are what the repair queue is for.
//
//   node scripts/sentence-mark-sites.mjs            # summary to stdout
//   node scripts/sentence-mark-sites.mjs --report data/sweeps/sentence-marks
import fs from 'node:fs';
import path from 'node:path';

const colRe = /\[([0-9]{3,5}[A-D]?)\]/g; // keep in sync with verify-english.mjs
// Apparatus is stripped the same way verify-english strips it for the word
// ratio, and for the same reason: a mark inside [var:]/[cj:] is ours, not the
// plate's, and must not count on either side. [n:] is deliberately NOT stripped
// — Migne's notes are translated 1:1, so their marks are in scope.
const strip = s => s.replace(/\[d: ([^\]]*)\]/g, '$1').replace(/\[sic: ([^\]]*)\]/g, '$1')
  .replace(/\[ed: ([^\]]*)\]/g, '').replace(/\[var: ([^\]]*)\]/g, '')
  .replace(/\[cj: ([^\]]*)\]/g, '').replace(colRe, '');

const body = f => {
  const t = fs.readFileSync(f, 'utf8');
  const m = t.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  return m ? m[1] : t;
};
const paras = f => body(f).split(/\n\n+/).map(p => p.trim()).filter(Boolean);
// Colons and semicolons close a "sentence" here on purpose: Migne punctuates in
// long periods, and splitting only on . ? ! leaves 200-word units that localize
// nothing. The split is a ruler, not a claim about syntax.
const sents = p => strip(p).replace(/\s+/g, ' ').split(/(?<=[.?!;:])\s+/).filter(s => s.trim());
const count = (s, re) => (strip(s).match(re) || []).length;

const reportDir = process.argv.includes('--report')
  ? process.argv[process.argv.indexOf('--report') + 1] : null;

const deltas = [], dropped = [];
for (const w of fs.readdirSync('src/english').sort()) {
  const ed = path.join('src/english', w), ld = path.join('src/latin', w);
  if (!fs.statSync(ed).isDirectory() || !fs.existsSync(ld)) continue;
  for (const f of fs.readdirSync(ed).filter(x => x.endsWith('.md')).sort()) {
    const lf = path.join(ld, f);
    if (!fs.existsSync(lf)) continue;
    const e = body(path.join(ed, f)), l = body(lf);
    const r = { work: w, chunk: f.replace('.md', ''),
      eq: count(e, /\?/g), lq: count(l, /\?/g), ex: count(e, /!/g), lx: count(l, /!/g) };
    if (r.eq === r.lq && r.ex === r.lx) continue;
    deltas.push(r);
    if (r.eq < r.lq || r.ex < r.lx) dropped.push(r);
  }
}

const tail = (s, n = 16) => { const w = s.split(' '); return (w.length > n ? '… ' : '') + w.slice(-n).join(' '); };
let report = '';
for (const r of dropped) {
  const L = paras(`src/latin/${r.work}/${r.chunk}.md`), E = paras(`src/english/${r.work}/${r.chunk}.md`);
  report += `\n\n════ ${r.work}/${r.chunk}  ?${r.eq}/${r.lq}  !${r.ex}/${r.lx}\n`;
  if (L.length !== E.length) { report += `  ⚠ paragraph counts differ (${L.length}/${E.length}) — align by hand\n`; continue; }
  for (let i = 0; i < L.length; i++) {
    if (!(count(E[i], /\?/g) < count(L[i], /\?/g) || count(E[i], /!/g) < count(L[i], /!/g))) continue;
    const LS = sents(L[i]).map((s, j) => [j, s]).filter(([, s]) => /[?!]/.test(s));
    const ES = sents(E[i]).map((s, j) => [j, s]).filter(([, s]) => /[?!]/.test(s));
    report += `\n  ── paragraph ${i}: ${LS.length} marked LA vs ${ES.length} marked EN\n`;
    for (let k = 0; k < Math.max(LS.length, ES.length); k++)
      report += `    ${String(k).padStart(3)}  LA[${LS[k]?.[0] ?? '—'}] ${LS[k] ? tail(LS[k][1]) : '—'}\n`
             + `         EN[${ES[k]?.[0] ?? '—'}] ${ES[k] ? tail(ES[k][1]) : '—'}\n`;
  }
}

const byWork = {};
for (const r of dropped) (byWork[r.work] ||= []).push(r);
console.log(`chunks with any ?/! delta: ${deltas.length}`);
console.log(`chunks DROPPING a printed mark: ${dropped.length}  (Pattern 8's live defect)`);
for (const [w, rs] of Object.entries(byWork).sort((a, b) => b[1].length - a[1].length))
  console.log(`  ${w}  ${String(rs.length).padStart(2)}  ${rs.map(r => r.chunk).join(' ')}`);

if (reportDir) {
  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(path.join(reportDir, 'census.json'), JSON.stringify({ deltas, dropped }, null, 1));
  fs.writeFileSync(path.join(reportDir, 'sites.txt'), report.trim() + '\n');
  console.log(`\nwrote ${reportDir}/census.json and sites.txt`);
}
