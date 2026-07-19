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
//   headnotes[] — in-text attribution intros: the segment preceding every
//                 « quotation (bounded by the prior », paragraph break, or
//                 head), la + en raw, column-located. Catches citations Migne's
//                 editors did NOT footnote ("Augustinus, de verbis Domini,
//                 homilia 19:") — the cross-volume citation layer.
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
  'Psal': 'Ps', 'Ps': 'Ps', 'Prov': 'Prov', 'Cant': 'Song', 'Cantic': 'Song',
  // Ecclesiastes: Migne writes Eccle/Eccles/Eccl. Ecclesiasticus (Sirach) is Eccli —
  // keep them distinct, the one-letter difference is the whole distinction.
  'Eccle': 'Eccl', 'Eccles': 'Eccl', 'Eccl': 'Eccl',
  'Sap': 'Wis', 'Eccli': 'Sir', 'Isa': 'Isa', 'Is': 'Isa', 'Isai': 'Isa', 'Jer': 'Jer',
  'Thren': 'Lam', 'Bar': 'Bar', 'Ezech': 'Ezek', 'Dan': 'Dan',
  'Os': 'Hos', 'Joel': 'Joel', 'Amos': 'Amos', 'Abd': 'Obad', 'Jon': 'Jonah',
  'Mich': 'Mic', 'Nah': 'Nah', 'Habac': 'Hab', 'Soph': 'Zeph', 'Agg': 'Hag',
  'Zach': 'Zech', 'Malach': 'Mal', 'Mal': 'Mal',
  'I Mach': '1Macc', 'II Mach': '2Macc',
  'Matth': 'Matt', 'Marc': 'Mark', 'Luc': 'Luke', 'Joan': 'John', 'Act': 'Acts',
  'Rom': 'Rom', 'I Cor': '1Cor', 'II Cor': '2Cor', 'Galat': 'Gal', 'Gal': 'Gal',
  'Ephes': 'Eph', 'Philipp': 'Phil', 'Coloss': 'Col', 'Col': 'Col',
  'I Thess': '1Thess', 'II Thess': '2Thess', 'I Tim': '1Tim', 'II Tim': '2Tim',
  'Tit': 'Titus', 'Philem': 'Phlm', 'Hebr': 'Heb', 'Jac': 'Jas', 'Jacob': 'Jas',
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
// verses: "20" | "1, 2" | "37-39" (Migne uses both comma-lists and hyphen ranges)
const scripRe = /^\(?\s*((?:I{1,3}V?|IV)\s+)?([A-Z][a-z]+)\.?\s+([IVXLCDM]+)\s*,\s*([0-9]+(?:\s*[,-]\s*[0-9]+)*)\s*\.?\)?$/;
function parseScripture(raw) {
  const m = raw.trim().match(scripRe);
  if (!m) return null;
  const bookLat = (m[1] ? m[1].trim() + ' ' : '') + m[2];
  const osis = BOOKS[bookLat];
  if (!osis) return null;
  const ch = romanToInt(m[3]);
  if (!ch) return null;
  const verses = m[4].split(/\s*[,-]\s*/).map(Number);
  const refKey = verses.length > 1
    ? `${osis}.${ch}.${verses[0]}-${osis}.${ch}.${verses.at(-1)}`
    : `${osis}.${ch}.${verses[0]}`;
  return { refKey };
}

// Printer's-error corrections: refDisplay stays verbatim, refKey resolves to the
// TRUE reference so the index never propagates Migne's bad numbers. The key derived
// from the printed form is kept as refKeyPrinted (auditable + reversible).
const CORRECTIONS = (() => {
  const p = path.join(ROOT, 'data/citation-corrections.json');
  if (!fs.existsSync(p)) return new Map();
  const { corrections } = JSON.parse(fs.readFileSync(p, 'utf8'));
  return new Map(corrections
    .filter(c => String(c.idno) === String(idno))
    .map(c => [`${c.column}|${c.refDisplay}`, c]));
})();

const colRe = /\[([0-9]{3,5}[A-D]?)\]/g; // keep in sync with scripts/lib/chunk-core.mjs COL_RE_SRC (banded 0473A + bare 1137)
const citeCol = c => { if (!c) return null; const m = c.match(/^0*([0-9]+)([A-D]?)$/); return m ? m[1] + m[2].toLowerCase() : c.toLowerCase(); };

// walk Latin chunks: track current column; collect notes + heads with position
const scripture = [], fontes = [], unparsed = [], headsLa = [];
for (const c of manifest.chunks) {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const body = fs.readFileSync(path.join(latDir, name), 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  let col = c.colContext;
  const tokenRe = /\[([0-9]{3,5}[A-D]?)\]|\[n: ([^\]]*)\]|^## (.*)$/gm;
  for (const t of body.matchAll(tokenRe)) {
    if (t[1]) { col = t[1]; continue; }
    if (t[3] !== undefined) { headsLa.push({ la: t[3].replace(/\*/g, '').trim(), column: citeCol(col), chunk: c.chunk }); continue; }
    const raw = t[2].replace(/\s+/g, ' ').trim();
    const inner = raw.replace(/^\(|\)$/g, '').trim();
    const s = parseScripture(inner);
    const loc = { column: citeCol(col), chunk: c.chunk };
    if (s) {
      const fix = CORRECTIONS.get(`${loc.column}|${inner}`);
      scripture.push(fix
        ? { refKey: fix.refKey, refDisplay: inner, refKeyPrinted: s.refKey, corrected: true, correctionNote: fix.note, ...loc }
        : { refKey: s.refKey, refDisplay: inner, ...loc });
    }
    else if (/^[IVXLCDM]+\s+[A-Z][a-z]+\.|^[A-Z][a-z]+\.\s+[IVXLCDM]+,/.test(inner) &&
             !/^(Lib|Cod|Conc|Concil|Can|Cap|Ep|Epist|Tract|Resp|Synod|Novell|Decret|Serm|Hom)\./i.test(inner))
      unparsed.push({ raw, ...loc });
    else fontes.push({ raw: inner, ...loc });
  }
}

// Inline citation tails (translation-style.md pattern 4): [f: ...] locators tagged
// in the ENGLISH chunks (their content is verbatim Latin). Harvested here per
// CLAUDE.md rule 9 — a florilegium indexing 0 fontes is a pipeline failure.
// Each tag's content must be a verbatim substring of the Latin twin (asterisks
// stripped, whitespace normalized); a mismatch is a HARD ERROR, not a warning.
// A locator can be SPLIT BY A COLUMN ANCHOR in the plate (Migne breaks the line
// mid-citation), so the tag body must be able to contain [0473A] marks — hence the
// alternation rather than [^\]]*. Anchors are stripped for validation (the Latin twin
// prints them mid-locator too) but kept in `raw`, and still advance column tracking.
const F_BODY = '(?:[^\\]]|\\[[0-9]{3,5}[A-D]?\\])*';
const fRe = new RegExp(`\\[f: (${F_BODY})\\]`, 'g');
const stripF = s => s.replace(/\[[0-9]{3,5}[A-D]?\]/g, '').replace(/\*/g, '').replace(/\s+/g, ' ').trim();
function harvestInlineFontes() {
  const out = [], bad = [];
  for (const c of manifest.chunks) {
    const name = `${String(c.chunk).padStart(4, '0')}.md`;
    const engPath = path.join(engDir, name);
    if (!fs.existsSync(engPath)) continue;
    const eng = fs.readFileSync(engPath, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
    const latFlat = stripF(fs.readFileSync(path.join(latDir, name), 'utf8')
      .replace(/^---\n[\s\S]*?\n---\n/, ''));
    let col = c.colContext;
    // f-tag alternative FIRST: a tag may contain an anchor, and the anchor branch
    // would otherwise match inside it and shred the locator.
    const tokenRe = new RegExp(`\\[f: (${F_BODY})\\]|\\[([0-9]{3,5}[A-D]?)\\]`, 'g');
    for (const t of eng.matchAll(tokenRe)) {
      if (t[2]) { col = t[2]; continue; }
      const raw = t[1].replace(/\s+/g, ' ').trim();
      const flat = stripF(raw);
      if (!latFlat.includes(flat)) bad.push(`${name}: [f: ${raw}] not found verbatim in Latin twin`);
      out.push({ raw, column: citeCol(col), chunk: c.chunk, inline: true });
      // an anchor inside the tag still advances the running column
      const inner = [...raw.matchAll(/\[([0-9]{3,5}[A-D]?)\]/g)];
      if (inner.length) col = inner.at(-1)[1];
    }
  }
  if (bad.length) {
    console.error('INDEX FAILED: [f: ...] content must be verbatim Latin from the twin chunk');
    bad.forEach(b => console.error(' - ' + b));
    process.exit(1);
  }
  return out;
}

// Resolve Ibid. chains: a bare or partial *Ibid.* points at the nearest preceding
// non-Ibid. locator. Deterministic inference from the printed sequence — NOT a
// correction, so `raw` keeps the printed Ibid. and no corrections entry is made.
function resolveIbid(list) {
  let last = null, lastCol = null;
  for (const f of list) {
    if (/^ibid/i.test(stripF(f.raw))) {
      if (last) { f.antecedent = last; f.antecedentColumn = lastCol; }
    } else { last = f.raw; lastCol = f.column; }
  }
  return list;
}

// headnotes: for every « quotation, the attribution segment before it.
// Bounded by the previous » / paragraph break / head line; column-located.
function harvestHeadnotes(dir, colContextByChunk) {
  const out = [];
  for (const c of manifest.chunks) {
    const name = `${String(c.chunk).padStart(4, '0')}.md`;
    const body = fs.readFileSync(path.join(dir, name), 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
    for (const m of body.matchAll(/«/g)) {
      const before = body.slice(0, m.index);
      const bound = Math.max(before.lastIndexOf('»'), before.lastIndexOf('\n\n'), before.lastIndexOf('\n## '));
      let seg = before.slice(bound + 1)
        .replace(/^#+ /, '')
        .replace(colRe, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/[:.]$/, '')
        .trim();
      if (seg.length > 200) seg = '…' + seg.slice(-200);
      // column in effect at the « position
      const colsBefore = [...before.matchAll(colRe)];
      const col = colsBefore.length ? colsBefore.at(-1)[1] : c.colContext;
      out.push({ seg, column: citeCol(col), chunk: c.chunk });
    }
  }
  return out;
}
const hnLa = harvestHeadnotes(latDir);
const hnEn = harvestHeadnotes(engDir);
const headnotes = hnLa.map((h, i) => ({
  la: h.seg,
  en: hnEn[i] && hnEn[i].chunk === h.chunk ? hnEn[i].seg : null,
  column: h.column, chunk: h.chunk,
}));
if (hnLa.length !== hnEn.length)
  console.warn(`warn: quotation count differs la ${hnLa.length} vs en ${hnEn.length} — English pairing may misalign`);

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

// authors: keep the printed Latin form (disambiguates same-English-name authors)
// and add the English display name for author browse/search, from author-bios.json
let authorBios = {};
try { authorBios = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/author-bios.json'), 'utf8')); } catch {}
const authorsDisplay = (manifest.authors ?? []).map(a => authorBios[a]?.displayName ?? a);

// pattern-4 inline locators join the same fontes pool as [n:] citations
fontes.push(...resolveIbid(harvestInlineFontes()));

const out = {
  generated: 'scripts/index-work.mjs',
  workIdno: manifest.workIdno, textIdno: manifest.textIdno,
  title: manifest.title, authors: manifest.authors, authorsDisplay,
  series: manifest.series, volume: manifest.volume,
  colFirst: citeCol(manifest.colFirst), colLast: citeCol(manifest.colLast),
  counts: { scripture: scripture.length, fontes: fontes.length, heads: heads.length, headnotes: headnotes.length, unparsed: unparsed.length },
  scripture, fontes, heads, headnotes, unparsed,
};
const outDir = path.join(ROOT, 'data/index', manifest.series);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, `${idno}.json`), JSON.stringify(out, null, 2));
console.log(`data/index/${manifest.series}/${idno}.json — ${scripture.length} scripture, ${fontes.length} fontes, ${heads.length} heads, ${headnotes.length} headnotes, ${unparsed.length} unparsed`);
if (unparsed.length) unparsed.forEach(u => console.warn(`  unparsed (add alias?): ${u.raw} @ ${u.column}`));
