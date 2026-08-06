#!/usr/bin/env node
// Day-one index for a shipped PG work (rule 9). PG variant.
// Usage: node scripts/index-work-pg.mjs <workKey>   (run AFTER verify)
// Writes data/index/pg/<workKey>.json
//
// What is indexed:
//   - columns: every anchor with the first words of its Greek and English
//     (column-level incipits — the resolver and search seed)
//   - scripture / fontes / unparsed: Migne's [n: …] citations, parsed by the
//     SHARED parser in scripts/lib/citations.mjs (the same one index-work.mjs
//     uses — a PG note is Migne's own Latin apparatus and must not be parsed by
//     a second, drifting copy of the rules)
//   - cruces: count + file pointer (PG works carry a cruces.md by convention)
//
// ⛔ WHY THE NOTES ARE READ FROM THE **ENGLISH** SIDE.
// For a PL work the Latin twin is the TEI transform and carries every [n: …]
// verbatim, so index-work.mjs walks the Latin. A PG work has no such layer: a
// Calfa transcription carries no apparatus at all, and a work from our own plate
// OCR (Antiochus, Dorotheus) transcribes the Greek COLUMN — Migne's notes sit in
// the footnote block under the columns and reach the corpus only through the
// translator, who sets them as [n: …] in the English chunk. So the English is the
// only file in which a PG citation exists, and it is what we walk.
//
// This file previously hardcoded `scripture: []` / `fontes: []`, written when
// every PG work came from Calfa and the assumption held. Antiochus (PG 89) was
// the first PG work from our own plate OCR, and all four of its citations were
// silently missing from the site scripture index — rule 9's exact failure mode,
// and it would have hit every PG work harvested from a plate from then on
// (Dorotheus first). Fixed 2026-08-06 before the next leaf was harvested.
//
// [nt: …] is editorial PROSE, not a citation (the *laura* gloss on the Antiochus
// page is the worked example). PL separates the two positionally, by comparing
// the Latin note order against the English; here the marker itself says which is
// which, so prose notes are recorded in proseNotes[] and never parsed.
//
// NOT harvested here, deliberately: Pattern-4 [f: …] inline locators. Their
// index contract is that the tag content validates as a verbatim substring of
// the Latin twin (index-work.mjs makes a mismatch a HARD error). PG Latin twins
// exist at src/pg-latin/<workKey>/ but are page-atomic scan OCR carrying a
// neighbouring work's Latin at the seams, so a substring test there would fail
// on good tags and pass on bad ones. No shipped PG work uses [f: …]; when one
// does, spec the validation before harvesting it.

import fs from 'node:fs';
import path from 'node:path';
import {
  KNOWN_FONTES, parseScripture, citeCol, isAnaphoric, isScriptureShaped,
} from './lib/citations.mjs';

const key = process.argv[2];
if (!key) { console.error('usage: node scripts/index-work-pg.mjs <workKey>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const grcDir = path.join(ROOT, 'src/greek', key);
const engDir = path.join(ROOT, 'src/english', key);
const manifest = JSON.parse(fs.readFileSync(path.join(grcDir, 'manifest.json'), 'utf8'));
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'));
const work = reg.works.find(w => w.key === key);

const body = f => fs.readFileSync(f, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '').trim();
const joined = dir => manifest.chunks
  .map(c => body(path.join(dir, `${String(c.chunk).padStart(4, '0')}.md`)))
  .join('\n\n');

function colIncipits(text, n = 10) {
  const parts = text.split(/\[(\d{4})\]\s*/);
  const out = {};
  for (let i = 1; i < parts.length; i += 2)
    out[parts[i]] = (parts[i + 1] || '').replace(/\s+/g, ' ').trim().split(' ').slice(0, n).join(' ');
  return out;
}

const grcInc = colIncipits(joined(grcDir));
const engInc = colIncipits(joined(engDir));
const columns = Object.keys(grcInc).map(c => ({
  col: parseInt(c, 10),
  grc: grcInc[c],
  en: engInc[c] ?? null,
}));

// Printer's-error corrections, keyed by workKey for PG (PL keys by idno — a PG
// work has no textIdno). Same contract: refDisplay stays verbatim, refKey
// resolves to the TRUE reference, refKeyPrinted keeps the printed form's key.
const CORRECTIONS = (() => {
  const p = path.join(ROOT, 'data/citation-corrections.json');
  if (!fs.existsSync(p)) return new Map();
  const { corrections } = JSON.parse(fs.readFileSync(p, 'utf8'));
  return new Map(corrections
    .filter(c => c.workKey === key)
    .map(c => [`${c.column}|${c.refDisplay}`, c]));
})();

// `ordered` holds every citation in document order so anaphora ("Ibid.") can look
// backwards; scripture[]/fontes[] are split out afterwards preserving that order.
const ordered = [];
const scripture = [], fontes = [], unparsed = [], proseNotes = [];

function handleNote(raw, col, chunk) {
  const inner = raw.replace(/^\(|\)$/g, '').trim();
  const loc = { column: citeCol(col), chunk };
  if (isAnaphoric(inner)) { ordered.push({ kind: 'anaphor', inner, loc }); return; }
  const s = parseScripture(inner);
  const fix = CORRECTIONS.get(`${loc.column}|${inner}`);
  if (s.refs.length) {
    // a correction targets a single-reference note; compound notes pass through
    if (fix && s.refs.length === 1)
      ordered.push({ kind: 'scripture', rec: { refKey: fix.refKey, refDisplay: inner, refKeyPrinted: s.refs[0].refKey, corrected: true, correctionNote: fix.note, ...loc } });
    else
      for (const r of s.refs) ordered.push({ kind: 'scripture', rec: { refKey: r.refKey, refDisplay: inner, ...loc } });
  }
  // a correction can also rescue a ref that does not parse at all (a misprinted
  // book ordinal resolves to no book): refKeyPrinted is null, there was no key.
  else if (fix)
    ordered.push({ kind: 'scripture', rec: { refKey: fix.refKey, refDisplay: inner, refKeyPrinted: null, corrected: true, correctionNote: fix.note, ...loc } });
  // scripture-SHAPED but no alias resolved = an alias-table gap, never a silent drop
  else if (isScriptureShaped(inner) && !KNOWN_FONTES.test(inner))
    unparsed.push({ raw: inner, reason: s.reason, ...loc });
  else ordered.push({ kind: 'fontes', rec: { raw: inner, ...loc } });
}

// Walk the ENGLISH chunks: track the running column, route every [n: …] through
// the shared classifier and park every [nt: …] as prose. The alternation is
// ordered so a note is consumed whole before the anchor branch can match inside it.
const tokenRe = /\[(n|nt): ([^\]]*)\]|\[([0-9]{3,5}[A-D]?)\]/g;
for (const c of manifest.chunks) {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const p = path.join(engDir, name);
  if (!fs.existsSync(p)) continue;
  const text = fs.readFileSync(p, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  let col = c.colContext ?? c.colFirst ?? null; // Antiochus's manifest carries colFirst, the Calfa works colContext
  for (const t of text.matchAll(tokenRe)) {
    if (t[3]) { col = t[3]; continue; }
    const raw = t[2].replace(/\s+/g, ' ').trim();
    if (t[1] === 'nt') { proseNotes.push({ raw, column: citeCol(col), chunk: c.chunk }); continue; }
    handleNote(raw, col, c.chunk);
  }
}

// Band letters (CLAUDE.md "Band letters in PG"). Migne's marginal A/B/C/D, read
// from the GREEK chunks — the band is a fact about the plate, and the Greek is
// where the plate is transcribed. The page emits its ids from the Greek column
// too, exactly as column anchors already work.
// Captured but NOT used for addressing: PG citation addresses stay column-level
// by ruling, so `column` on a citation record is what resolves. `band` rides
// alongside so that turning band-level addressing on later is a rebuild rather
// than a re-read of 234 columns of plate.
const bands = [];
for (const c of manifest.chunks) {
  const f = path.join(grcDir, `${String(c.chunk).padStart(4, '0')}.md`);
  if (!fs.existsSync(f)) continue;
  const text = fs.readFileSync(f, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  let col = c.colContext ?? c.colFirst ?? null;
  for (const t of text.matchAll(/\[([0-9]{3,5}[A-D]?)\]|\[b: *([A-D])\]/g)) {
    if (t[1]) { col = t[1]; continue; }
    bands.push({ column: citeCol(col), band: t[2].toLowerCase(), chunk: c.chunk });
  }
}

// Resolve anaphora against the printed sequence (CLAUDE.md rule 9): an Ibid.
// points at the nearest preceding NON-Ibid. citation and inherits its BUCKET.
// This is a deterministic inference, not a correction — the printed "Ibid." is
// kept verbatim in refDisplay/raw and the antecedent lives in its own field.
let unresolvedAnaphora = 0;
for (let i = 0; i < ordered.length; i++) {
  const e = ordered[i];
  if (e.kind !== 'anaphor') continue;
  let ant = null;
  // skip already-resolved anaphors too, or an Ibid. chains onto an Ibid.
  for (let j = i - 1; j >= 0; j--)
    if (ordered[j].kind !== 'anaphor' && !ordered[j].rec?.ibidResolved) { ant = ordered[j]; break; }
  if (!ant) { // the work's first citation is an Ibid. — nothing to point at
    unresolvedAnaphora++;
    ordered[i] = { kind: 'fontes', rec: { raw: e.inner, unresolvedAnaphor: true, ...e.loc } };
    continue;
  }
  const antDisplay = ant.kind === 'scripture' ? ant.rec.refDisplay : ant.rec.raw;
  ordered[i] = ant.kind === 'scripture'
    ? { kind: 'scripture', rec: { refKey: ant.rec.refKey, refDisplay: e.inner, antecedent: antDisplay, antecedentColumn: ant.rec.column, ibidResolved: true, ...e.loc } }
    : { kind: 'fontes', rec: { raw: e.inner, antecedent: antDisplay, antecedentColumn: ant.rec.column, ibidResolved: true, ...e.loc } };
}
for (const e of ordered) (e.kind === 'scripture' ? scripture : fontes).push(e.rec);

// Attach the band in force to each citation. A citation's band is the last band
// opened at or before its column — resolvable here because both are walked in
// document order, and NOT resolvable afterwards from the record alone.
const bandsByCol = new Map();
for (const b of bands) {
  if (!bandsByCol.has(b.column)) bandsByCol.set(b.column, []);
  bandsByCol.get(b.column).push(b.band);
}
for (const rec of [...scripture, ...fontes]) {
  const inCol = bandsByCol.get(rec.column);
  // The English note carries no band marker of its own, so a citation resolves
  // only to its column's band SET, not to one letter. Recorded honestly as such
  // rather than guessing a letter — a wrong band is a wrong citation address.
  if (inCol?.length) rec.bandsInColumn = inCol;
}

const crucesFile = path.join(engDir, 'cruces.md');
const cruces = fs.existsSync(crucesFile)
  ? (fs.readFileSync(crucesFile, 'utf8').match(/^- \*\*/gm) || []).length
  : 0;

// The site path. ⚠ A PG page slugs from titleEn (or an explicit work.slug), NOT
// from the Latin title the way a PL page does — build-work-page-pg.mjs line 146
// is the authority and this must match it exactly. Recorded in the index because
// build-scripture-index.mjs otherwise falls back to slugOf(title) and would have
// linked every PG citation to a 404 (Antiochus lives at
// /pg/89/the-letter-of-antiochus-the-monk-to-eustathius/, not /…/epistola-…/).
const slug = work.slug ?? work.titleEn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const out = {
  generated: 'scripts/index-work-pg.mjs',
  workKey: key,
  slug,
  series: 'pg',
  volume: work.volume,
  title: work.title,
  titleEn: work.titleEn ?? null,
  authors: [work.author],
  citRange: work.citRange,
  colFirst: parseInt(manifest.colFirst, 10),
  colLast: parseInt(manifest.colLast, 10),
  sourceWords: manifest.sourceWords,
  counts: { scripture: scripture.length, fontes: fontes.length, unparsed: unparsed.length, bands: bands.length },
  columns,
  // PG chunks carry no `## ` section heads: the Calfa transcriptions have no head
  // layer, and a plate-OCR work transcribes the column, where Migne's own section
  // divisions are inline. Recorded as empty rather than silently omitted.
  heads: [],
  scripture, fontes, unparsed, bands,
  // Notes the translator marked [nt: …] — editorial prose, deliberately kept OUT
  // of fontes[]: a gloss on the word *laura* is not a source Migne is citing.
  proseNotes,
  cruces: { count: cruces, file: `src/english/${key}/cruces.md` },
  note: 'Citations harvested from the ENGLISH chunks — a PG work\'s Greek source (Calfa, or our own plate OCR of the Greek column) carries no note layer, so Migne\'s footnotes reach the corpus only through the translator\'s [n: …] markers. Columns indexed with Greek+English incipits. Pattern-4 [f: …] locators are not harvested for PG (no validating Latin twin).',
  indexed: null,
};

const outPath = path.join(ROOT, 'data/index/pg', `${key}.json`);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`${outPath} — ${columns.length} columns, ${scripture.length} scripture, ${fontes.length} fontes, ${unparsed.length} unparsed, ${proseNotes.length} prose notes, ${cruces} cruces`);
if (unresolvedAnaphora) console.warn(`  warn: ${unresolvedAnaphora} anaphoric note(s) with no antecedent`);
if (unparsed.length) unparsed.forEach(u => console.warn(`  unparsed (add alias?): ${u.raw} @ ${u.column}`));
