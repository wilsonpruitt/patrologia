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
// The citation parser lives in scripts/lib/citations.mjs so index-work-pg.mjs uses
// the SAME alias table and shape rules. A PG work's [n:] notes are Migne's own
// Latin apparatus — the two indexers must not drift (2026-08-06).
import {
  KNOWN_FONTES, parseScripture, makeColRe, citeCol, stripF, isAnaphoric,
  isScriptureShaped, CANDIDATE_HEAD_RE, NUMERAL_TOKEN_RE,
} from './lib/citations.mjs';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/index-work.mjs <textIdno>'); process.exit(1); }
const ROOT = path.join(import.meta.dirname, '..');
const latDir = path.join(ROOT, 'src/latin', String(idno));
const engDir = path.join(ROOT, 'src/english', String(idno));
const manifest = JSON.parse(fs.readFileSync(path.join(latDir, 'manifest.json'), 'utf8'));

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

const colRe = makeColRe(); // own /g instance; see lib/citations.mjs

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
      for (const r of s.refs) ordered.push({ kind: 'scripture', rec: { ...r, refDisplay: inner, ...loc } });
  }
  // A correction can also rescue a ref that does not parse at all — e.g. Migne's
  // "III Cor. VI", where the book ordinal is a misprint so no book name resolves.
  // refDisplay still shows what Migne printed; refKeyPrinted is null because there
  // was no derivable key to record.
  else if (CORRECTIONS.has(`${loc.column}|${inner}`)) {
    const fix = CORRECTIONS.get(`${loc.column}|${inner}`);
    ordered.push({ kind: 'scripture', rec: { refKey: fix.refKey, refDisplay: inner, refKeyPrinted: null, corrected: true, correctionNote: fix.note, ...loc } });
  }
  else if (isScriptureShaped(inner) && !KNOWN_FONTES.test(inner))
    unparsed.push({ raw, reason: s.reason, ...loc });
  else ordered.push({ kind: 'fontes', rec: { raw: inner, ...loc } });
}

// Inline (running-text) scripture citations — Migne sometimes sets a reference as
// running text in italic parentheses instead of a [n: …] note (2026-07-31 SPEC,
// data/inline-citations/SPEC.md — read it before touching this function). Harvested
// here, at index time, from the LATIN twin — NOT via a translation-agent marker: a
// marker would cost prompt budget on every one of 5,204 works forever and could
// never be applied to already-shipped English. `raw` may still carry a column
// anchor and/or italic asterisks (the twin sets these citations in italics too,
// and Migne breaks the line mid-citation) — both are stripped via `stripF` (the
// same helper Pattern 4 [f:] locators use) before the shape/parse test; the caller
// is responsible for advancing the running column past any anchor inside `raw`.
//
// The two gates (book-shaped head + a numeral TOKEN) live in lib/citations.mjs.
function handleInlineCandidate(raw, col, chunk, inHead = false) {
  const stripped = stripF(raw);
  if (!CANDIDATE_HEAD_RE.test(stripped) || !NUMERAL_TOKEN_RE.test(stripped)) return; // not a candidate — silent
  const loc = { column: citeCol(col), chunk, inline: true, ...(inHead ? { inHead: true } : {}) };
  const s = parseScripture(stripped);
  if (s.refs.length) {
    const fix = CORRECTIONS.get(`${loc.column}|${stripped}`);
    if (fix && s.refs.length === 1)
      ordered.push({ kind: 'scripture', rec: { refKey: fix.refKey, refDisplay: stripped, refKeyPrinted: s.refs[0].refKey, corrected: true, correctionNote: fix.note, ...loc } });
    else
      for (const r of s.refs) ordered.push({ kind: 'scripture', rec: { ...r, refDisplay: stripped, ...loc } });
    return;
  }
  if (CORRECTIONS.has(`${loc.column}|${stripped}`)) {
    const fix = CORRECTIONS.get(`${loc.column}|${stripped}`);
    ordered.push({ kind: 'scripture', rec: { refKey: fix.refKey, refDisplay: stripped, refKeyPrinted: null, corrected: true, correctionNote: fix.note, ...loc } });
    return;
  }
  if (KNOWN_FONTES.test(stripped)) { ordered.push({ kind: 'fontes', rec: { raw: stripped, ...loc } }); return; }
  unparsed.push({ raw, reason: s.reason, ...loc });
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
  // 4th alternative: a bare parenthetical, candidate for an inline (running-text)
  // citation (2026-07-31 SPEC). Left-to-right non-overlapping matchAll means a
  // `[n: (Isai. V)]` note is always consumed whole by the `[n: …]` alternative
  // FIRST (matching starts at the `[`, before the inner paren is ever reached), so
  // this can never double-count a note's own parenthetical. `[^()]{2,60}` excludes
  // nested parens and caps length — ordinary prose in parens is common and this
  // gate is cheap; `handleInlineCandidate` does the real shape/numeral filtering.
  const tokenRe = /\[([0-9]{3,5}[A-D]?)\]|\[n: ([^\]]*)\]|^## (.*)$|\(([^()]{2,60})\)/gm;
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
      // A head-borne INLINE candidate (rare — heads are usually a bare title, but the
      // class is defined by shape, not position). Masked against already-harvested
      // [n: …] notes first so their internal parens are never double-scanned.
      const headMasked = t[3].replace(/\[n: [^\]]*\]/g, '');
      for (const hc of headMasked.matchAll(/\(([^()]{2,60})\)/g))
        handleInlineCandidate(hc[1], col, c.chunk, true);
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
    if (t[4] !== undefined) {
      handleInlineCandidate(t[4], col, c.chunk, false);
      // an anchor inside the candidate still advances the running column, even when
      // the candidate turns out not to be a citation at all (SPEC ruling 7 / the
      // [f:] precedent) — column tracking is a fact about the plate, not the parse.
      const innerAnchors = [...t[4].matchAll(/\[([0-9]{3,5}[A-D]?)\]/g)];
      if (innerAnchors.length) col = innerAnchors.at(-1)[1];
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

// A pre-existing Pattern-4 [f:] tag can name the SAME citation the new Latin-side
// inline-scripture harvester (2026-07-31 SPEC) now catches independently — 8566's
// "(Job, X, 20-22)" is the attested case (see its cruces.md: the one deliberate
// [f:] judgment call in that work, made before this ruling existed). The tag stays
// in the English text untouched (Pattern 4 is still valid style; this is an INDEX
// question, not a text one), but a raw fontes record that merely restates an
// inline scripture hit at the same column is a duplicate of the same fact and is
// dropped here so the citation is not double-indexed.
const inlineScriptureAt = new Set(scripture.filter(r => r.inline).map(r => `${r.column}|${r.refDisplay}`));
for (let i = fontes.length - 1; i >= 0; i--) {
  const key = `${fontes[i].column}|${fontes[i].raw.replace(/^\(|\)$/g, '')}`;
  if (inlineScriptureAt.has(key)) fontes.splice(i, 1);
}

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
