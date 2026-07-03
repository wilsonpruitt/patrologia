#!/usr/bin/env node
// Day-one index extraction — runs after verify-english.mjs, per work.
// Usage: node scripts/index-work.mjs <textIdno>
// Emits data/index/pl/<textIdno>.json — DERIVED from the chunk files (which are
// the source of truth); regenerate freely, never hand-edit.
//
// Indexes FACTS already in the data (per reference_tagging-philosophy: "if the
// connection is already a fact — a citation, a date, an author — index that
// fact directly; don't tag"). Editorial theme/topic tags are deliberately NOT
// built here; that layer needs open-tag→consolidate→freeze on a corpus slice.
//
// Tracked from day 1, so the site-wide indexes accrete work by work:
//   scripture[] — Migne's [n:] scripture citations, dual-keyed per
//                 reference_data-repository-standard: refKey (OSIS) +
//                 refDisplay (VERBATIM Migne form), located by column.
//   fontes[]    — all other [n:] citations (councils, decretals, laws, fathers),
//                 raw verbatim + column. Controlled source-name vocab comes
//                 later, derived from the accumulated raws — never from memory.
//   heads[]     — chapter titles (la + en) with starting column → per-work TOC.
//   unparsed[]  — scripture-shaped notes the alias table missed; each one is an
//                 alias-table addition, not a silent drop.

import fs from 'node:fs';
import path from 'node:path';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/index-work.mjs <textIdno>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const latDir = path.join(ROOT, 'src/latin', String(idno));
const engDir = path.join(ROOT, 'src/english', String(idno));
const manifest = JSON.parse(fs.readFileSync(path.join(latDir, 'manifest.json'), 'utf8'));

// Vulgate/Migne abbreviation → OSIS book code (KJV/WEB versification caveat:
// Vulgate psalm/kingdom numbering differs; refKey follows the CITED numbering —
// Psal. keys as-printed, I-IV Reg. map to 1Sam/2Sam/1Kgs/2Kgs).
const BOOKS = {
  'Gen': 'Gen', 'Exod': 'Exod', 'Lev': 'Lev', 'Num': 'Num', 'Deut': 'Deut',
  'Jos': 'Josh', 'Judic': 'Judg', 'Ruth': 'Ruth',
  'I Reg': '1Sam', 'II Reg': '2Sam', 'III Reg': '1Kgs', 'IV Reg': '2Kgs',
  'I Par': '1Chr', 'II Par': '2Chr', 'I Esdr': 'Ezra', 'II Esdr': 'Neh',
  'Tob': 'Tob', 'Judith': 'Jdt', 'Esth': 'Esth', 'Job': 'Job',
  'Psal': 'Ps', 'Prov': 'Prov', 'Eccle': 'Eccl', 'Cant': 'Song',
  'Sap': 'Wis', 'Eccli': 'Sir', 'Isa': 'Isa', 'Is': 'Isa', 'Jer': 'Jer',
  'Thren': 'Lam', 'Bar': 'Bar', 'Ezech': 'Ezek', 'Dan': 'Dan',
  'Os': 'Hos', 'Joel': 'Joel', 'Amos': 'Amos', 'Abd': 'Obad', 'Jon': 'Jonah',
  'Mich': 'Mic', 'Nah': 'Nah', 'Habac': 'Hab', 'Soph': 'Zeph', 'Agg': 'Hag',
  'Zach': 'Zech', 'Malach': 'Mal', 'Mal': 'Mal',
  'I Mach': '1Macc', 'II Mach': '2Macc',
  'Matth': 'Matt', 'Marc': 'Mark', 'Luc': 'Luke', 'Joan': 'John', 'Act': 'Acts',
  'Rom': 'Rom', 'I Cor': '1Cor', 'II Cor': '2Cor', 'Galat': 'Gal', 'Gal': 'Gal',
  'Ephes': 'Eph', 'Philipp': 'Phil', 'Coloss': 'Col',
  'I Thess': '1Thess', 'II Thess': '2Thess', 'I Tim': '1Tim', 'II Tim': '2Tim',
  'Tit': 'Titus', 'Philem': 'Phlm', 'Hebr': 'Heb', 'Jac': 'Jas',
  'I Petr': '1Pet', 'II Petr': '2Pet',
  'I Joan': '1John', 'II Joan': '2John', 'III Joan': '3John',
  'Jud': 'Jude', 'Apoc': 'Rev',
};

const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
function romanToInt(s) {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    const v = ROMAN[s[i]], next = ROMAN[s[i + 1]] ?? 0;
    if (!v) return null;
    n += v < next ? -v : v;
  }
  return n;
}

// "(Matth. XVI, 18)" / "(Joel. I, 4)" / "(I Petr. V, 3)" / "(Rom. XIII, 1, 2)"
const scripRe = /^\(?\s*((?:I{1,3}V?|IV)\s+)?([A-Z][a-z]+)\.?\s+([IVXLCDM]+)\s*,\s*([0-9]+(?:\s*,\s*[0-9]+)*)\s*\.?\)?$/;
function parseScripture(raw) {
  const m = raw.trim().match(scripRe);
  if (!m) return null;
  const bookLat = (m[1] ? m[1].trim() + ' ' : '') + m[2];
  const osis = BOOKS[bookLat];
  if (!osis) return null;
  const ch = romanToInt(m[3]);
  if (!ch) return null;
  const verses = m[4].split(/\s*,\s*/).map(Number);
  const refKey = verses.length > 1
    ? `${osis}.${ch}.${verses[0]}-${osis}.${ch}.${verses.at(-1)}`
    : `${osis}.${ch}.${verses[0]}`;
  return { refKey };
}

const colRe = /\[([0-9]{4}[A-D])\]/g;
const citeCol = c => String(parseInt(c.slice(0, 4), 10)) + c.slice(4).toLowerCase();

// walk Latin chunks: track current column; collect notes + heads with position
const scripture = [], fontes = [], unparsed = [], headsLa = [];
for (const c of manifest.chunks) {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const body = fs.readFileSync(path.join(latDir, name), 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  let col = c.colContext;
  const tokenRe = /\[([0-9]{4}[A-D])\]|\[n: ([^\]]*)\]|^## (.*)$/gm;
  for (const t of body.matchAll(tokenRe)) {
    if (t[1]) { col = t[1]; continue; }
    if (t[3] !== undefined) { headsLa.push({ la: t[3].replace(/\*/g, '').trim(), column: citeCol(col), chunk: c.chunk }); continue; }
    const raw = t[2].replace(/\s+/g, ' ').trim();
    const inner = raw.replace(/^\(|\)$/g, '').trim();
    const s = parseScripture(inner);
    const loc = { column: citeCol(col), chunk: c.chunk };
    if (s) scripture.push({ refKey: s.refKey, refDisplay: inner, ...loc });
    else if (/^[IVXLCDM]+\s+[A-Z][a-z]+\.|^[A-Z][a-z]+\.\s+[IVXLCDM]+,/.test(inner) &&
             !/^(Lib|Cod|Conc|Concil|Can|Cap|Ep|Epist|Tract|Resp|Synod|Novell|Decret|Serm|Hom)\./i.test(inner))
      unparsed.push({ raw, ...loc });
    else fontes.push({ raw: inner, ...loc });
  }
}

// English heads pair with Latin heads by order
const headsEn = [];
for (const c of manifest.chunks) {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const body = fs.readFileSync(path.join(engDir, name), 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  for (const m of body.matchAll(/^## (.*)$/gm)) headsEn.push(m[1].replace(/\*/g, '').trim());
}
if (headsEn.length !== headsLa.length) {
  console.error(`head count mismatch la ${headsLa.length} vs en ${headsEn.length}`);
  process.exit(1);
}
const heads = headsLa.map((h, i) => ({ ...h, en: headsEn[i] }));

const out = {
  generated: 'scripts/index-work.mjs',
  workIdno: manifest.workIdno, textIdno: manifest.textIdno,
  title: manifest.title, authors: manifest.authors,
  series: manifest.series, volume: manifest.volume,
  colFirst: citeCol(manifest.colFirst), colLast: citeCol(manifest.colLast),
  counts: { scripture: scripture.length, fontes: fontes.length, heads: heads.length, unparsed: unparsed.length },
  scripture, fontes, heads, unparsed,
};
const outDir = path.join(ROOT, 'data/index', manifest.series);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, `${idno}.json`), JSON.stringify(out, null, 2));
console.log(`data/index/${manifest.series}/${idno}.json — ${scripture.length} scripture, ${fontes.length} fontes, ${heads.length} heads, ${unparsed.length} unparsed`);
if (unparsed.length) unparsed.forEach(u => console.warn(`  unparsed (add alias?): ${u.raw} @ ${u.column}`));
