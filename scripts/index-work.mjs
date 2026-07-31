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
  'Gen': 'Gen', 'Exod': 'Exod', 'Lev': 'Lev', 'Levit': 'Lev', 'Num': 'Num', 'Deut': 'Deut',
  'Jos': 'Josh', 'Judic': 'Judg', 'Ruth': 'Ruth',
  'I Reg': '1Sam', 'II Reg': '2Sam', 'III Reg': '1Kgs', 'IV Reg': '2Kgs',
  'I Par': '1Chr', 'II Par': '2Chr', 'I Esdr': 'Ezra', 'II Esdr': 'Neh',
  // Chronicles = Paralipomenon; Migne prints Par./Paral./Paralip. interchangeably —
  // 11551 alone uses two of the three (234b, 236b vs 237b).
  'I Paral': '1Chr', 'II Paral': '2Chr', 'I Paralip': '1Chr', 'II Paralip': '2Chr',
  'Tob': 'Tob', 'Judith': 'Jdt', 'Esth': 'Esth', 'Job': 'Job',
  'Psal': 'Ps', 'Ps': 'Ps', 'Psalm': 'Ps', 'Prov': 'Prov', 'Cant': 'Song', 'Cantic': 'Song',
  // Ecclesiastes: Migne writes Eccle/Eccles/Eccl. Ecclesiasticus (Sirach) is Eccli —
  // keep them distinct, the one-letter difference is the whole distinction.
  'Eccle': 'Eccl', 'Eccles': 'Eccl', 'Eccl': 'Eccl',
  'Sap': 'Wis', 'Eccli': 'Sir', 'Isa': 'Isa', 'Is': 'Isa', 'Isai': 'Isa', 'Jer': 'Jer',
  'Jerem': 'Jer', 'Thren': 'Lam', 'Bar': 'Bar', 'Ezech': 'Ezek', 'Dan': 'Dan',
  // 'Oseae' is the genitive Migne prints when the citation reads "of Hosea" (11057/340a).
  'Os': 'Hos', 'Ose': 'Hos', 'Osee': 'Hos', 'Oseae': 'Hos', 'Joel': 'Joel', 'Amos': 'Amos', 'Abd': 'Obad', 'Jon': 'Jonah',
  'Mich': 'Mic', 'Nah': 'Nah', 'Habac': 'Hab', 'Abac': 'Hab', 'Soph': 'Zeph', 'Sophon': 'Zeph', 'Agg': 'Hag',
  'Zach': 'Zech', 'Malach': 'Mal', 'Malac': 'Mal', 'Mal': 'Mal',
  'I Mach': '1Macc', 'II Mach': '2Macc', 'I Machab': '1Macc', 'II Machab': '2Macc',
  'Matth': 'Matt', 'Math': 'Matt', 'Marc': 'Mark', 'Luc': 'Luke', 'Joan': 'John', 'Act': 'Acts',
  'Rom': 'Rom', 'I Cor': '1Cor', 'II Cor': '2Cor', 'Galat': 'Gal', 'Gal': 'Gal',
  'Ephes': 'Eph', 'Eph': 'Eph', 'Philipp': 'Phil', 'Philip': 'Phil', 'Coloss': 'Col', 'Col': 'Col', 'Colos': 'Col',
  // Bare 'Phil.' = Philippians, not Philemon: Migne consistently prints 'Philem.' for Philemon
  // (8715/1170a, Optabam dissolvi = Phil. 1:23, confirmed against the quoted Latin).
  'Phil': 'Phil',
  'I Thess': '1Thess', 'II Thess': '2Thess', 'I Tim': '1Tim', 'II Tim': '2Tim',
  // Single-s form: Migne prints 'II Thes.' at 11057/324c.
  'I Thes': '1Thess', 'II Thes': '2Thess',
  'Tit': 'Titus', 'Philem': 'Phlm', 'Hebr': 'Heb', 'Jac': 'Jas', 'Jacob': 'Jas',
  'I Petr': '1Pet', 'II Petr': '2Pet', 'I Pet': '1Pet', 'II Pet': '2Pet',
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

// One note can carry several references, semicolon-separated:
//   "(Matth. XVI, 18)"                    → one, with verse
//   "(I Cor. XV)"                         → CHAPTER-ONLY (very common; Migne cites a
//                                            whole chapter). OSIS chapter key.
//   "(Gen. XVIII, XIX)"                   → two chapters of one book
//   "(I Cor. III; III Joan. I; Matth. V)" → three separate references
//   "(Rom. XIII, 1, 2)" / "(Matth. XXII, 37-39)" → verse list / range
// Chapter is EITHER a roman list (Gen. XVIII, XIX) OR a single arabic (II Cor. 12).
// Roman is tried first, so "Rom. XIII, 1, 2" still reads 1,2 as verses, not chapters.
const segRe = /^\(?\s*((?:I{1,3}V?|IV)\s+)?([A-Z][a-z]+)\.?\s+([IVXLCDM]+(?:\s*,\s*[IVXLCDM]+)*|[0-9]+)(?:\s*,\s*([0-9]+(?:\s*[,-]\s*[0-9]+)*))?\s*\.?\)?$/;

// Migne's spelling variants, normalized before matching:
//   " et " joins chapters or verses exactly like a comma (Act. XI et XXII)
//   "c." / "v." prefix a numeral (Num. XIX, c. 14-19 ; I Joan. III, V. 8) — only
//   stripped when a digit follows, so a roman chapter "III, V" is left alone
//   "Book., XII" — stray comma after the abbreviation
const normSeg = s => s
  .replace(/\s+et\s+/gi, ', ')
  .replace(/\b[vVcC]\.\s*(?=\d)/g, '')
  .replace(/\.\s*,/g, '.');

// Returns { refs: [{refKey}], reason } — reason names WHY nothing parsed, so the
// decade blocker can separate a one-line alias fix from a parser-shape decision.
function parseScripture(raw) {
  const segs = raw.trim().replace(/^\(|\)$/g, '').split(/\s*;\s*/).filter(Boolean);
  const refs = [];
  let sawUnknownBook = false, sawBadShape = false;
  for (const seg of segs) {
    const m = normSeg(seg).trim().match(segRe);
    if (!m) { sawBadShape = true; continue; }
    const bookLat = (m[1] ? m[1].trim() + ' ' : '') + m[2];
    const osis = BOOKS[bookLat];
    if (!osis) { sawUnknownBook = true; continue; }
    // chapter may be roman (XIII) or arabic (II Cor. 12) — romanToInt returns null on digits
    const toInt = t => (/^\d+$/.test(t) ? Number(t) : romanToInt(t));
    const chapters = m[3].split(/\s*,\s*/).map(toInt).filter(Boolean);
    if (!chapters.length) { sawBadShape = true; continue; }
    if (m[4]) {
      // verses attach to the FIRST chapter only (Migne never lists verses across chapters)
      const verses = m[4].split(/\s*[,-]\s*/).map(Number);
      const ch = chapters[0];
      refs.push({ refKey: verses.length > 1
        ? `${osis}.${ch}.${verses[0]}-${osis}.${ch}.${verses.at(-1)}`
        : `${osis}.${ch}.${verses[0]}` });
      for (const ch2 of chapters.slice(1)) refs.push({ refKey: `${osis}.${ch2}` });
    } else {
      for (const ch of chapters) refs.push({ refKey: `${osis}.${ch}` }); // chapter-level
    }
  }
  if (!refs.length) return { refs: [], reason: sawUnknownBook ? 'unknown-book' : 'unparsed-shape' };
  return { refs };
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

// Anaphoric notes: "(Ibid.)", "(Ibid., 33)", "(Id. VI, 24)", "(Idem)". They carry no
// book name by nature, so they can only be resolved from the PRINTED SEQUENCE — which
// is possible at index time and impossible afterwards from the display string alone
// (CLAUDE.md rule 9). Resolution is deterministic, so this is a script, not a judgment.
// The TEXT is never rewritten: refDisplay/raw keep Migne's "Ibid." verbatim per the
// sacred-marker rule; the antecedent lives in its own field.
const isAnaphoric = s => /^\(?\s*(ibid|idem|id)\b/i.test(s);

// walk Latin chunks: track current column; collect notes + heads with position
// `ordered` holds every citation in document order so anaphora can look backwards;
// scripture[]/fontes[] are split out of it afterwards, preserving that order.
const ordered = [];
// The chunker's continuation marker. "(continued)" is accepted too: 7383 shipped
// with an agent having translated the marker, which slipped every literal-string
// scan. Matching both keeps the la/en head lists paired no matter which appears.
const CONT_HEAD = /\((?:cont\.|continued)\)$/;
const scripture = [], fontes = [], unparsed = [], headsLa = [];

// One note -> its index record(s). Factored out so head-borne notes go through exactly
// the same classification as body notes, AT THEIR POSITION in document order (anaphora
// resolve backwards through `ordered`, so appending them later would mis-resolve).
function handleNote(raw, col, chunk, inHead = false) {
  const inner = raw.replace(/^\(|\)$/g, '').trim();
  const s = parseScripture(inner);
  const loc = { column: citeCol(col), chunk, ...(inHead ? { inHead: true } : {}) };
  // anaphoric notes are parked in document order and resolved after the walk
  if (isAnaphoric(inner)) { ordered.push({ kind: 'anaphor', raw, inner, loc }); return; }
  if (s.refs.length) {
    const fix = CORRECTIONS.get(`${loc.column}|${inner}`);
    // a correction targets a single-reference note; compound notes pass through
    if (fix && s.refs.length === 1)
      ordered.push({ kind: 'scripture', rec: { refKey: fix.refKey, refDisplay: inner, refKeyPrinted: s.refs[0].refKey, corrected: true, correctionNote: fix.note, ...loc } });
    else
      for (const r of s.refs) ordered.push({ kind: 'scripture', rec: { refKey: r.refKey, refDisplay: inner, ...loc } });
  }
  // A correction can also rescue a ref that does not parse at all — e.g. Migne's
  // "III Cor. VI", where the book ordinal is a misprint so no book name resolves.
  // refDisplay still shows what Migne printed; refKeyPrinted is null because there
  // was no derivable key to record.
  else if (CORRECTIONS.has(`${loc.column}|${inner}`)) {
    const fix = CORRECTIONS.get(`${loc.column}|${inner}`);
    ordered.push({ kind: 'scripture', rec: { refKey: fix.refKey, refDisplay: inner, refKeyPrinted: null, corrected: true, correctionNote: fix.note, ...loc } });
  }
  else if (/^[IVXLCDM]+\s+[A-Z][a-z]+\.|^[A-Z][a-z]+\.\s+[IVXLCDM]+/.test(inner) &&
           !/^(Lib|Cod|Conc|Concil|Can|Cap|Ep|Epist|Tract|Resp|Synod|Novell|Decret|Serm|Hom)\./i.test(inner))
    unparsed.push({ raw, reason: s.reason, ...loc });
  else ordered.push({ kind: 'fontes', rec: { raw: inner, ...loc } });
}

// Which note positions are editorial PROSE rather than citations (Wilson,
// 2026-07-28). The Latin twin writes [n: …] for every note — it stays the faithful
// TEI transform — so the English side is what distinguishes them: a note the
// translator marked [nt: …] is prose and must NOT be parsed as a citation. Without
// this, 8407's 64-word explanation of numeral subtraction and 9519's scholion on
// epilepsy both landed in fontes[] as if they were sources.
// Positional, per chunk: verify-english.mjs check 3 has already guaranteed that the
// two sides carry the same number of notes in the same order, so index i on the
// Latin side is index i on the English side.
const proseNotePositions = new Map(); // chunk -> Set of note indices
for (const c of manifest.chunks) {
  const f = path.join(engDir, `${String(c.chunk).padStart(4, '0')}.md`);
  if (!fs.existsSync(f)) continue;
  const body = fs.readFileSync(f, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  const set = new Set();
  [...body.matchAll(/\[(n|nt): ([^\]]*)\]/g)].forEach((m, i) => { if (m[1] === 'nt') set.add(i); });
  if (set.size) proseNotePositions.set(c.chunk, set);
}
const proseNotes = [];

for (const c of manifest.chunks) {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const body = fs.readFileSync(path.join(latDir, name), 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  let col = c.colContext;
  const prose = proseNotePositions.get(c.chunk) || new Set();
  let noteIdx = 0; // document-order note counter, shared by the head and body branches
  const routeNote = (raw, column, chunk, inHead) => {
    const isProse = prose.has(noteIdx++);
    if (isProse) proseNotes.push({ raw, column: citeCol(column), chunk, ...(inHead ? { inHead: true } : {}) });
    else handleNote(raw, column, chunk, inHead);
  };
  const tokenRe = /\[([0-9]{3,5}[A-D]?)\]|\[n: ([^\]]*)\]|^## (.*)$/gm;
  for (const t of body.matchAll(tokenRe)) {
    if (t[1]) { col = t[1]; continue; }
    if (t[3] !== undefined) {
      // `^## (.*)$` is greedy to end-of-line, so a [n: ] note INSIDE a head is consumed
      // here and never reaches the citation branch. Sermons routinely put their
      // governing verse in the head (11325: Rom. X, 10 — the theme of the whole
      // sermon), so that citation was being dropped from the scripture index entirely.
      // Harvest head-borne notes in place, then strip them from the recorded head text.
      for (const hn of t[3].matchAll(/\[n: ([^\]]*)\]/g))
        routeNote(hn[1].replace(/\s+/g, ' ').trim(), col, c.chunk, true);
      // A "(cont.)" head is the chunker re-emitting a section head on the next chunk
      // it spans (see build-work-page.mjs sections()). It is our apparatus, not a
      // title Migne prints, and a TOC entry must point at the section's true start —
      // so it is not recorded as a head. Head-borne notes are still harvested above,
      // because chunk-core deliberately strips markers from the repeated head only
      // when re-emitting, and a real citation must never be lost to this branch.
      if (CONT_HEAD.test(t[3].trim())) continue;
      headsLa.push({ la: t[3].replace(/\[n: [^\]]*\]/g, '').replace(/\*/g, '')
        .replace(/\s+/g, ' ').replace(/\s+([.,;:])/g, '$1').trim(), // removing the note leaves "salutem ."
        column: citeCol(col), chunk: c.chunk });
      continue;
    }
    routeNote(t[2].replace(/\s+/g, ' ').trim(), col, c.chunk);
  }
}

// Resolve [n: ] anaphora against the printed sequence, then split `ordered` into the
// scripture/fontes buckets preserving document order. An Ibid. inherits the BUCKET of
// its antecedent — a scripture Ibid. belongs in scripture[], not stranded in fontes[]
// where it was landing merely because "Ibid." has no parseable book name.
let unresolvedAnaphora = 0;
for (let i = 0; i < ordered.length; i++) {
  const e = ordered[i];
  if (e.kind !== 'anaphor') continue;
  let ant = null;
  // Skip ALREADY-RESOLVED anaphors too: entries before i have been rewritten in place,
  // so a naive "kind !== anaphor" test finds a resolved Ibid. and chains onto it.
  // Rule 9 says resolve to the nearest preceding NON-Ibid. locator — walk past them.
  for (let j = i - 1; j >= 0; j--)
    if (ordered[j].kind !== 'anaphor' && !ordered[j].rec?.ibidResolved) { ant = ordered[j]; break; }
  if (!ant) { // first citation in the work is an Ibid. — nothing to point at
    unresolvedAnaphora++;
    ordered[i] = { kind: 'fontes', rec: { raw: e.inner, unresolvedAnaphor: true, ...e.loc } };
    continue;
  }
  const antDisplay = ant.kind === 'scripture' ? ant.rec.refDisplay : ant.rec.raw;
  const common = { refDisplayOrRaw: e.inner, antecedent: antDisplay, antecedentColumn: ant.rec.column, ibidResolved: true };
  ordered[i] = ant.kind === 'scripture'
    // refKey inherited from the antecedent so the Ibid. is findable in the scripture
    // index; refDisplay still shows Migne's "Ibid.", and ibidResolved marks the key as
    // INFERRED rather than printed — this is an inference, not a correction, so it
    // never enters citation-corrections.json.
    ? { kind: 'scripture', rec: { refKey: ant.rec.refKey, refDisplay: e.inner, antecedent: antDisplay, antecedentColumn: ant.rec.column, ibidResolved: true, ...e.loc } }
    : { kind: 'fontes', rec: { raw: e.inner, antecedent: antDisplay, antecedentColumn: ant.rec.column, ibidResolved: true, ...e.loc } };
}
for (const e of ordered) (e.kind === 'scripture' ? scripture : fontes).push(e.rec);

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
  // skip "(cont.)" heads in step with the Latin side above, so the two lists pair
  for (const m of body.matchAll(/^## (.*)$/gm)) {
    if (CONT_HEAD.test(m[1].trim())) continue;
    headsEn.push(m[1].replace(/\*/g, '').trim());
  }
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
  // Notes that are editorial PROSE, not citations (marked [nt: …] in the English).
  // Recorded so they are not lost, but deliberately kept OUT of fontes[] — a
  // scholion on epilepsy is not a source Migne is citing.
  proseNotes,
};
const outDir = path.join(ROOT, 'data/index', manifest.series);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, `${idno}.json`), JSON.stringify(out, null, 2));
console.log(`data/index/${manifest.series}/${idno}.json — ${scripture.length} scripture, ${fontes.length} fontes, ${heads.length} heads, ${headnotes.length} headnotes, ${unparsed.length} unparsed` + (proseNotes.length ? `, ${proseNotes.length} prose notes` : ''));
if (unparsed.length) unparsed.forEach(u => console.warn(`  unparsed (add alias?): ${u.raw} @ ${u.column}`));
