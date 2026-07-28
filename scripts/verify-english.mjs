#!/usr/bin/env node
// English-chunk verifier + dedupe scan (Acta lessons as validators).
// Usage: node scripts/verify-english.mjs <textIdno>
//
// Per chunk, against its Latin twin:
//   1. Frontmatter identical (verbatim copy rule).
//   2. Column-marker sequence identical (order + count) — anchors are sacred.
//   3. [n: ...] note markers: same count, same content, same order.
//   4. Section (## head) count identical.
//   5. English/Latin word ratio in [0.85, 1.75] (pilots: EN ≈ 1.5× Latin; 1.6+ warns).
//   7. Guillemet parity vs the Latin twin — a total drop errors, a delta warns.
// Whole work:
//   6. Dedupe scan — any English paragraph (>15 words, normalized) appearing
//      more than once across all chunks (agents re-emitting boundary text).
//      Downgraded to a warning when the LATIN also duplicates across the same
//      chunks — canon collections legitimately quote the same authority twice
//      (e.g. Abbo cites Leg. cap. 456 in both ch. XI and ch. XXV).
// Exit non-zero on any failure.

import fs from 'node:fs';
import path from 'node:path';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/verify-english.mjs <textIdno>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const latDir = path.join(ROOT, 'src/latin', String(idno));
const engDir = path.join(ROOT, 'src/english', String(idno));

const manifest = JSON.parse(fs.readFileSync(path.join(latDir, 'manifest.json'), 'utf8'));
const errs = [];
const warns = [];
const colRe = /\[([0-9]{3,5}[A-D]?)\]/g; // keep in sync with scripts/lib/chunk-core.mjs COL_RE_SRC (banded 0473A + bare 1137)
const noteRe = /\[n: ([^\]]*)\]/g;
const words = s => s.split(/\s+/).filter(Boolean).length;
const parse = f => {
  const raw = fs.readFileSync(f, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return null;
  return { fm: m[1], body: raw.slice(m[0].length) };
};

const paraSeen = new Map(); // normalized English paragraph -> [chunk ids]
const latDupPairs = new Set(); // "0002.md+0005.md" keys where the LATIN itself repeats
const norm = p => p.replace(colRe, '').replace(/[^a-z0-9 ]/gi, '').replace(/\s+/g, ' ').trim().toLowerCase();

for (const c of manifest.chunks) {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const engPath = path.join(engDir, name);
  if (!fs.existsSync(engPath)) { errs.push(`${name}: MISSING English chunk`); continue; }
  const lat = parse(path.join(latDir, name));
  const eng = parse(engPath);
  if (!eng) { errs.push(`${name}: English chunk has no frontmatter block`); continue; }

  if (eng.fm.trim() !== lat.fm.trim())
    errs.push(`${name}: frontmatter differs from Latin twin (must be verbatim copy)`);

  const latCols = [...lat.body.matchAll(colRe)].map(m => m[1]);
  const engCols = [...eng.body.matchAll(colRe)].map(m => m[1]);
  if (latCols.join(',') !== engCols.join(','))
    errs.push(`${name}: column markers differ — Latin ${latCols.length}, English ${engCols.length}` +
      (latCols.length === engCols.length ? `; first divergence ${engCols.find((x, i) => x !== latCols[i])}` : ''));

  const latNotes = [...lat.body.matchAll(noteRe)].map(m => m[1].replace(/\s+/g, ' ').trim());
  const engNotes = [...eng.body.matchAll(noteRe)].map(m => m[1].replace(/\s+/g, ' ').trim());
  if (latNotes.length !== engNotes.length)
    errs.push(`${name}: note markers — Latin ${latNotes.length}, English ${engNotes.length}`);
  else latNotes.forEach((n, i) => {
    if (n !== engNotes[i]) errs.push(`${name}: note ${i} differs — Latin "[n: ${n}]" vs English "[n: ${engNotes[i]}]"`);
  });

  // 7. Guillemet parity (added 2026-07-28). « » are sacred markers per
  // translation-style.md (register section + Pattern 5): the English opens and
  // closes exactly where Migne does, 1:1. Parity against the LATIN TWIN is the
  // right test rather than internal balance, because Migne himself leaves
  // quotations unclosed (10103 at 0594B–C) and we mirror the plate.
  // A total drop is an ERROR — 9852 shipped 2026-07-20 with all 10 of its
  // charter quotations unmarked and no check caught it. Small deltas WARN:
  // they are usually Pattern 5 violations (a quote broken around "he says",
  // which ADDS a pair) but in lemma-and-gloss commentary they can be a
  // defensible marking choice, so they need an eyeball, not a hard block.
  const latQ = [lat.body.split('«').length - 1, lat.body.split('»').length - 1];
  const engQ = [eng.body.split('«').length - 1, eng.body.split('»').length - 1];
  if (latQ[0] + latQ[1] > 0 && engQ[0] + engQ[1] === 0)
    errs.push(`${name}: guillemets DROPPED — Latin has «${latQ[0]} »${latQ[1]}, English has none (quotation marks are sacred markers)`);
  else if (latQ[0] !== engQ[0] || latQ[1] !== engQ[1])
    warns.push(`${name}: guillemet counts differ — Latin «${latQ[0]} »${latQ[1]} vs English «${engQ[0]} »${engQ[1]}; check translation-style.md Pattern 5 (inquit stays INSIDE the quote — do not break it around "he says")`);

  const latHeads = (lat.body.match(/^## /gm) || []).length;
  const engHeads = (eng.body.match(/^## /gm) || []).length;
  if (latHeads !== engHeads) errs.push(`${name}: section heads — Latin ${latHeads}, English ${engHeads}`);

  const lw = words(lat.body.replace(colRe, '')), ew = words(eng.body.replace(colRe, ''));
  const ratio = ew / lw;
  // Ceiling recalibrated 2026-07-18: the pilots established EN ≈ 1.5× Latin (not the
  // 1.1–1.2× originally assumed), so a 1.6 hard fail sat only 7% above the true mean
  // and misfired on dense synthetic Latin — ablative absolutes and participle stacks
  // ("ignorantiae tenebris effugatis" → "the darkness of ignorance being put to
  // flight") legitimately run 2×+. Hard fail moved to 1.75; 1.6–1.75 now WARNS so
  // these still get an eyeball instead of passing silently.
  if (ratio < 0.85 || ratio > 1.75) errs.push(`${name}: word ratio ${ratio.toFixed(2)} (${ew}/${lw}) outside [0.85, 1.75] — possible skip or padding`);
  else if (ratio > 1.6) warns.push(`${name}: ratio ${ratio.toFixed(2)} — high; confirm expansion is synthetic-Latin unpacking, not padding`);
  else if (ratio < 1.0) warns.push(`${name}: ratio ${ratio.toFixed(2)} — low for Tier-2, eyeball for compression`);

  for (const p of eng.body.split(/\n\n+/)) {
    const n = norm(p);
    if (words(n) <= 15) continue;
    if (!paraSeen.has(n)) paraSeen.set(n, []);
    paraSeen.get(n).push(name);
  }
}

// map where the Latin source itself repeats a paragraph across chunks
{
  const latSeen = new Map();
  for (const c of manifest.chunks) {
    const name = `${String(c.chunk).padStart(4, '0')}.md`;
    const lat = parse(path.join(latDir, name));
    for (const p of lat.body.split(/\n\n+/)) {
      const n = norm(p);
      if (words(n) <= 15) continue;
      if (!latSeen.has(n)) latSeen.set(n, []);
      latSeen.get(n).push(name);
    }
  }
  for (const locs of latSeen.values()) if (new Set(locs).size > 1)
    latDupPairs.add([...new Set(locs)].sort().join('+'));
}

for (const [p, locs] of paraSeen) if (locs.length > 1) {
  const key = [...new Set(locs)].sort().join('+');
  if (latDupPairs.has(key))
    warns.push(`duplicate paragraph in ${locs.join(' + ')} matches a Latin-side repetition (source quotes the authority twice) — OK`);
  else
    errs.push(`DUPLICATE paragraph in ${locs.join(' + ')}: "${p.slice(0, 70)}…"`);
}

warns.forEach(w => console.warn('warn: ' + w));
if (errs.length) { console.error('VERIFY FAILED:'); errs.forEach(e => console.error(' - ' + e)); process.exit(1); }
console.log(`verify OK: ${manifest.chunks.length} chunks, columns/notes/sections aligned, no duplicate paragraphs`);
