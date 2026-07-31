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
  'Matth': 'Matt', 'Math': 'Matt', 'Marc': 'Mark', 'Luc': 'Luke', 'Joan': 'John',
  // Double-n spelling variant: 9033/0563A prints 'Joann. I' for John 1:29.
  'Joann': 'John', 'Act': 'Acts',
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
  // Attested only in inline (running-text) citations, added per the 2026-07-31
  // Fable inline-citation ruling (SPEC.md): 'Exodi' (10365/0001, 6963/0034),
  // 'Josue' (11065/0045, 11536/0004), 'Aggaei' (7914/0021), 'Heb' short form
  // (11613/0027) — grown by attestation like every other alias here.
  'Exodi': 'Exod', 'Josue': 'Josh', 'Aggaei': 'Hag', 'Heb': 'Heb',
};

// Evidence-grown known-fontes routing list (SPEC.md ruling 4): a citation whose shape
// looks like scripture (roman+book or book+roman) but whose book token is one of these
// is a KNOWN non-scripture fons, not an alias gap — route to fontes[], not unparsed[].
// Grown by attestation only, same discipline as BOOKS: 'Aeneid' added 2026-07-31 for
// 11065's '(Aeneid. VI, 688.)' (a [n:] note, confirmed NOT inline on inspection).
const KNOWN_FONTES = /^(Lib|Cod|Conc|Concil|Can|Cap|Ep|Epist|Tract|Resp|Synod|Novell|Decret|Serm|Hom|Aeneid)\./i;

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
//   "Book, XII" — comma IN PLACE of the abbreviating period (Levit, XIII; Job, X;
//   Dan, II; Eccles, IV) — attested only in inline citations (2026-07-31 SPEC),
//   normalized at the START of the segment only (a mid-segment comma is a real
//   list separator and must not be touched).
const normSeg = s => s
  .replace(/\s+et\s+/gi, ', ')
  .replace(/\b[vVcC]\.\s*(?=\d)/g, '')
  .replace(/\.\s*,/g, '.')
  .replace(/^((?:I{1,3}V?|IV)\s+)?([A-Z][a-z]+),/, '$1$2.');

// A single printed parenthesis can name TWO (or more) books with no semicolon
// between them (2026-07-31 SPEC ruling 6): "(Joan. III [1135A] Isai. V)" inline,
// "(Phil. II, Heb. II)" inside a well-formed [n:] note. Neither has a `;`, so the
// existing semicolon split never sees them. Detect a SECOND (or later) book token
// mid-segment and split there — this is a shape-boundary decision, not a lookup:
// built directly from BOOKS' own keys (so "I Cor", "II Reg" etc. match as compound
// tokens, longest-key-first so "I Cor" wins over a bare partial), and gated on a
// following numeral so a verse LIST inside one citation never gets split (a
// mid-list comma is not a book boundary).
const BOOK_TOKENS = Object.keys(BOOKS).sort((a, b) => b.length - a.length).map(k => k.replace(/\s+/g, '\\s+'));
const BOOK_BOUNDARY = new RegExp(`\\b(?:${BOOK_TOKENS.join('|')})\\.?\\s+(?=[IVXLCDM0-9])`, 'g');
function splitBookBoundaries(seg) {
  const starts = [...seg.matchAll(BOOK_BOUNDARY)].map(m => m.index);
  if (starts.length <= 1) return [seg]; // 0 or 1 book token: nothing to split
  const pieces = [];
  let prev = 0;
  for (let i = 1; i < starts.length; i++) { pieces.push(seg.slice(prev, starts[i])); prev = starts[i]; }
  pieces.push(seg.slice(prev));
  return pieces;
}

// A roman CHAPTER RANGE, "(Exod. VII-XIV)" — ONE record spanning the range, not a
// list of two chapters (which is what the comma form "Gen. XVIII, XIX" means).
// Tried before segRe, which has no dash-range shape for chapters (only for verses).
const rangeRe = /^\(?\s*((?:I{1,3}V?|IV)\s+)?([A-Z][a-z]+)\.?\s+([IVXLCDM]+)\s*-\s*([IVXLCDM]+)\s*\.?\)?$/;

// Returns { refs: [{refKey}], reason } — reason names WHY nothing parsed, so the
// decade blocker can separate a one-line alias fix from a parser-shape decision.
function parseScripture(raw) {
  const segs = raw.trim().replace(/^\(|\)$/g, '').split(/\s*;\s*/).filter(Boolean);
  const refs = [];
  let sawUnknownBook = false, sawBadShape = false;
  for (const seg of segs) for (const piece0 of splitBookBoundaries(seg)) {
    const piece = piece0.replace(/^\s*[,;]\s*|\s*[,;]\s*$/g, '').trim();
    if (!piece) continue;
    const normed = normSeg(piece).trim();
    const rm = normed.match(rangeRe);
    if (rm) {
      const bookLat = (rm[1] ? rm[1].trim() + ' ' : '') + rm[2];
      const osis = BOOKS[bookLat];
      if (!osis) { sawUnknownBook = true; continue; }
      const c1 = romanToInt(rm[3]), c2 = romanToInt(rm[4]);
      if (c1 && c2) { refs.push({ refKey: `${osis}.${c1}-${osis}.${c2}` }); continue; }
    }
    const m = normed.match(segRe);
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

// Strip column anchors + italic asterisks + collapse whitespace. Shared by [f:]
// locator validation (Pattern 4) and, per the 2026-07-31 inline-citation SPEC, by
// inline scripture-candidate detection below — the Latin twin sets these citations
// in italics too, so an anchor or asterisk can fall INSIDE the parenthesis
// ("(Job [0159C] XXX)") and must be stripped before parseScripture ever sees it.
const stripF = s => s.replace(/\[[0-9]{3,5}[A-D]?\]/g, '').replace(/\*/g, '').replace(/\s+/g, ' ').trim();

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
           !KNOWN_FONTES.test(inner))
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
// Gate, so ordinary prose parentheses ("ut ita dicam") are never even considered:
// the stripped text must OPEN with an optional ordinal + Capitalized-word head
// (book-shaped), AND contain a numeral TOKEN somewhere (a whole word of only roman
// letters, or digits — not a bare letter inside an unrelated word: "Christo" must
// never trip this on its capital C). Both gates measured zero false positives
// across the 24 scanned works once the numeral-token form was required (the
// brief's 69 held 3 prose false positives — "(Ecclesia de Christo dicit)" etc. —
// none of which contain a numeral token).
const CANDIDATE_HEAD_RE = /^((?:I{1,3}V?|IV)\s+)?[A-Z][a-z]+[.,]?\s/;
const NUMERAL_TOKEN_RE = /\b(?:[IVXLCDM]+|[0-9]+)\b/;
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
      for (const r of s.refs) ordered.push({ kind: 'scripture', rec: { refKey: r.refKey, refDisplay: stripped, ...loc } });
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
