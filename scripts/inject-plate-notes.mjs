#!/usr/bin/env node
// Inject MIGNE'S OWN foot-of-page conjecture notes into the Latin chunks as [cn: …].
//
// Usage: node scripts/inject-plate-notes.mjs <textIdno> [--dry-run] [--quiet]
//
// Migne prints numbered textual notes at the foot of every page — editorial
// conjectures, set `Forte *word*.` — and Corpus Corporum's TEI contains NONE of them
// (measured 2026-08-18: zero across all 5,276 PL files / 498,774 <note> elements).
// They are recovered from the plate at chunking time into data/plate-notes/<idno>.tsv
// (CLAUDE.md, "Migne's conjecture notes"). This script is what puts them back where
// Migne put them: beside the word he queried.
//
// The marker is [cn: <n> | <note text>] and it lives in the LATIN chunk ONLY
// (Wilson, 2026-08-18). That is the opposite rule from [d:] / [sic:] / [var:] / [cj:],
// which are English-only — and for the same reason those are: the Latin chunk carries
// what MIGNE printed and nothing of ours. His foot-of-page note is his. Our conjecture
// beside a printed word is [cj: …] and stays English-side.
//
// NEVER adopted into the text: the printed reading stands, the conjecture sits beside
// it. A translator meets the note where Migne's reader met it and may follow it, but
// the Latin body is never emended (translation-style.md Pattern 7).
//
// Matching is deliberately strict — a note placed against the wrong word would enter
// the apparatus wearing Migne's voice. A row whose anchor is missing, or found more
// than once, is REPORTED AND SKIPPED, never guessed at.
//
// Idempotent: existing [cn: …] markers are stripped before injection, so re-running
// after a re-chunk (which rewrites the chunks from TEI) restores exactly the same state.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const idno = process.argv[2];
const DRY = process.argv.includes('--dry-run');
const QUIET = process.argv.includes('--quiet');
if (!idno) { console.error('usage: node scripts/inject-plate-notes.mjs <textIdno> [--dry-run]'); process.exit(1); }

const tsvPath = path.join(ROOT, 'data/plate-notes', `${idno}.tsv`);
const latDir = path.join(ROOT, 'src/latin', String(idno));
if (!fs.existsSync(tsvPath)) { console.error(`no plate notes for ${idno} (${path.relative(ROOT, tsvPath)})`); process.exit(1); }
if (!fs.existsSync(latDir)) { console.error(`no Latin chunks for ${idno} — chunk the work first`); process.exit(1); }

// ── the note number as Migne prints it: 46 · 12-13 (one note serving two markers) ·
// 62* (a second note on a page whose sequence had already run out). All three are
// attested in the first work read (11613); a number outside this shape is a
// transcription fault, not a new Migne convention, so it is an error.
// ⭐ '*' is a key in its own right (Wilson, 2026-08-24). Beside the numbered conjecture
// sequence Migne prints a SECOND foot-of-page layer keyed by an asterisk: editorial
// cross-references rather than textual conjectures — PL 114 p. 37, in the Baruch preface
// itself, keys "in Vulgata editione*" to "* Vulgata editio, de qua fit mentio in prologo
// super Baruch, exponitur in prologo super Ezechielem. Caetera plana sunt." Our source
// carries neither layer. An asterisk row takes no part in the numeric sequence check
// below, because it belongs to no sequence.
const NOTE_NO = /^(?:[0-9]+(?:-[0-9]+)?\*?|\*)$/;
const MARKER_IN_ANCHOR = /\s*\(([0-9]+(?:-[0-9]+)?\*?)\)/;
// The asterisk layer is not parenthesised: Migne sets a raised * directly against the
// word. Kept as a separate pattern rather than an alternation so that the numeric path
// is byte-for-byte what it was before this class existed.
const MARKER_ASTERISK = /\s*(\*)(?![\w*])/;

// ── normalisation for MATCHING ONLY. The plate reader transcribes Migne's ligatures
// (præsentiæ); the TEI spells them out (praesentiae). Neither is wrong and neither is
// rewritten — we only need them to compare equal while we look for the anchor.
const fold = s => s
  .replace(/æ/g, 'ae').replace(/Æ/g, 'Ae')
  .replace(/œ/g, 'oe').replace(/Œ/g, 'Oe')
  .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
  .toLowerCase();

// Build a searchable view of a chunk body with an index map back to the original.
// Everything in brackets is apparatus that can fall in the MIDDLE of an anchor phrase
// ([1148A] column marks, [n: …] citations, an earlier [cn: …]) — invisible to the plate
// reader, so it must be invisible to the search too.
const APPARATUS = /\[(?:[0-9]{3,5}[A-D]?|n: [^\]]*|nt: [^\]]*|f: [^\]]*|cn: [^\]]*)\]/g;
// Whitespace is dropped from the view entirely, not merely collapsed: Migne sets French
// spacing before ; : ? » and the TEI does not, and an anchor read off the plate carries
// his spacing. Matching on letters alone removes a whole class of false misses that have
// nothing to do with the reading.
function searchView(body) {
  const skip = new Uint8Array(body.length);
  for (const m of body.matchAll(APPARATUS)) skip.fill(1, m.index, m.index + m[0].length);
  let view = '', map = [];
  for (let i = 0; i < body.length; i++) {
    if (skip[i] || /\s/.test(body[i])) continue;
    view += body[i]; map.push(i);
  }
  return { view: fold(view), map };
}

const rows = [];
const lines = fs.readFileSync(tsvPath, 'utf8').split('\n').filter(l => l.trim());
const header = lines[0].split('\t');
const want = ['page', 'col', 'note_no', 'note_text', 'anchor_words', 'anchor_in_our_latin'];
if (want.some((w, i) => header[i] !== w)) {
  console.error(`${path.relative(ROOT, tsvPath)}: header must be ${want.join(' / ')}`);
  process.exit(1);
}
for (const [i, line] of lines.slice(1).entries()) {
  const [page, col, note_no, note_text, anchor_words, anchor_in_our_latin] = line.split('\t');
  rows.push({ line: i + 2, page, col, note_no, note_text, anchor: anchor_words || '', found: (anchor_in_our_latin || '').trim() });
}

// ── sequence check. The numbers run consecutively down the volume, so a GAP means a
// page was cropped short or a note was missed — this is the detector that caught a
// narrow-crop losing 3 of the first 10 on PL 202. It reports; it never fixes.
const seqErrors = [];
const nums = rows.map(r => r.note_no).filter(Boolean);
for (const n of nums) if (!NOTE_NO.test(n)) seqErrors.push(`note_no "${n}" is not a Migne note number`);
const plain = nums.filter(n => /^[0-9]+$/.test(n)).map(Number);
const spans = nums.filter(n => /^[0-9]+-[0-9]+$/.test(n));
const covered = new Set(plain);
for (const s of spans) { const [a, b] = s.split('-').map(Number); for (let k = a; k <= b; k++) covered.add(k); }
// Migne's own sequence skips numbers now and then — 11613 never prints (59) — so a gap
// can be HIS. Those are declared per work in coverage.json (`sequence_gaps_documented`),
// one number at a time, and only after the plate has been looked at. Everything else is
// ours to answer for.
const covPathEarly = path.join(ROOT, 'data/plate-notes/coverage.json');
const covEarly = fs.existsSync(covPathEarly) ? JSON.parse(fs.readFileSync(covPathEarly, 'utf8')) : { works: [] };
const covEntry = (covEarly.works || []).find(w => String(w.idno) === String(idno));
const documentedGaps = new Set((covEntry && covEntry.sequence_gaps_documented) || []);
if (covered.size) {
  const lo = Math.min(...covered), hi = Math.max(...covered);
  const missing = [];
  for (let k = lo; k <= hi; k++) if (!covered.has(k) && !documentedGaps.has(k)) missing.push(k);
  if (missing.length) seqErrors.push(`sequence gap: ${missing.join(', ')} missing between ${lo} and ${hi} — a page may have been cropped short. Read the plate; if the gap is Migne's own, record the number in coverage.json under sequence_gaps_documented.`);
}

// ── load chunks, strip any previous injection (idempotence)
const files = fs.readdirSync(latDir).filter(f => /^\d{4}\.md$/.test(f)).sort();
const bodies = new Map();
for (const f of files) {
  const raw = fs.readFileSync(path.join(latDir, f), 'utf8');
  bodies.set(f, raw.replace(/ ?\[cn: [^\]]*\]/g, ''));
}

const injected = [], skipped = [], trimmed = [], headPlaced = [];
for (const r of rows) {
  if (!/^yes/i.test(r.found)) { skipped.push({ ...r, why: 'anchor not in our Latin (per the plate reader)' }); continue; }
  const m = r.note_no === '*' ? r.anchor.match(MARKER_ASTERISK) : r.anchor.match(MARKER_IN_ANCHOR);
  if (!m) { skipped.push({ ...r, why: 'anchor does not show Migne\'s (n) marker, so the note has no place to attach' }); continue; }
  if (m[1] !== r.note_no) { skipped.push({ ...r, why: `anchor marker (${m[1]}) disagrees with note_no ${r.note_no}` }); continue; }
  if (!r.note_text) { skipped.push({ ...r, why: 'no note text' }); continue; }

  const prefix = r.anchor.slice(0, m.index);
  const suffix = r.anchor.slice(m.index + m[0].length);
  const norm = s => fold(s).replace(/\s+/g, '');
  const wordsOf = s => s.split(/\s+/).filter(Boolean);

  // The anchor is a phrase read off the plate, and its OUTER words are the ones most
  // likely to disagree with our TEI — a divergent reading two clauses away has nothing
  // to do with where this note attaches. So: try the whole phrase, then walk the window
  // in toward the marker, and take the first width that lands on EXACTLY ONE site.
  // The words immediately flanking the marker are never trimmed; if they are the ones
  // that disagree, the note is skipped for adjudication rather than placed by guess.
  //
  // ⚠ One anchor shape has NO left context at all: the plate reader's excerpt begins at
  // the marker itself ("(32) Defiguntur hic tempora…", note "f. *Designantur*."). The
  // conjecture there plainly addresses the word that FOLLOWS, so the marker goes after
  // that first word and the row is reported separately. That is an inference about
  // PLACEMENT from the excerpt, not about the reading — and it is checkable on the page.
  const pw = wordsOf(prefix), sw = wordsOf(suffix);
  const headAnchored = pw.length === 0;
  const windows = [];
  for (const k of [Infinity, 6, 4, 3, 2]) {
    const p = k === Infinity ? pw : pw.slice(-k);
    const s = k === Infinity ? sw : sw.slice(0, k);
    if (!p.length && !headAnchored) continue;
    if (headAnchored && s.length < 2) continue; // a single word is not an anchor
    const key = p.join(' ') + ' ' + s.join(' ');
    if (!windows.some(w => w.key === key)) windows.push({ key, p, s, k });
  }

  let hits = [], used = null;
  for (const w of windows) {
    const target = norm(w.p.join(' ') + w.s.join(' '));
    // where the marker belongs inside `target`: after the left window, or — with no left
    // window at all — after the first word of the right one (the word the note names).
    const cut = headAnchored ? norm(w.s[0]).length : norm(w.p.join(' ')).length;
    hits = [];
    for (const [f, body] of bodies) {
      const { view, map } = searchView(body);
      let at = view.indexOf(target);
      while (at !== -1) { hits.push({ f, orig: map[at + cut - 1] + 1 }); at = view.indexOf(target, at + 1); }
    }
    if (hits.length === 1) { used = w; break; }
  }
  if (!used) {
    skipped.push({ ...r, why: hits.length === 0 ? 'anchor phrase not found in the Latin chunks (our text and the plate reading may differ — adjudicate, do not guess)' : `anchor phrase occurs ${hits.length}× — ambiguous` });
    continue;
  }
  if (headAnchored) headPlaced.push({ ...r, word: used.s[0] });
  else if (used.k !== Infinity) trimmed.push({ ...r, k: used.k });
  const { f, orig } = hits[0];
  const body = bodies.get(f);
  // Marker syntax across this corpus is [x: …] with NO nested brackets — every reader of
  // it, here and in the builders, stops at the first ]. Some plate rows carry a bracketed
  // aside from the reader ("F. *spr*  [TRUNCATED ON THE PLATE …]"), which would truncate
  // the marker and strand a ] in the Latin — and it did, silently, until a re-run placed
  // one note fewer than the run before it. The TSV keeps the reader's words verbatim; the
  // marker carries them in parentheses.
  const noteText = r.note_text.trim().replace(/\[/g, '(').replace(/\]/g, ')').replace(/\s+/g, ' ');
  const marker = ` [cn: ${r.note_no} | ${noteText}]`;
  bodies.set(f, body.slice(0, orig) + marker + body.slice(orig));
  injected.push({ ...r, file: f });
}

if (!DRY) {
  for (const [f, body] of bodies) fs.writeFileSync(path.join(latDir, f), body);
  const mfPath = path.join(latDir, 'manifest.json');
  const mf = JSON.parse(fs.readFileSync(mfPath, 'utf8'));
  mf.plateNotes = {
    source: `data/plate-notes/${idno}.tsv`,
    rows: rows.length,
    injected: injected.length,
    trimmedAnchor: trimmed.length,
    headAnchored: headPlaced.length,
    skipped: skipped.length,
    sequenceOk: seqErrors.length === 0,
  };
  fs.writeFileSync(mfPath, JSON.stringify(mf, null, 2));

  // Per-work capture status. Tier 3 = Migne's own notes recovered; "full" is claimed
  // ONLY when the numbered sequence is unbroken, because an unbroken sequence is the
  // one piece of evidence that nothing was cropped away. Anything else is "partial",
  // and under the file's own definition absence of a note there means nothing.
  const covPath = path.join(ROOT, 'data/plate-notes/coverage.json');
  const cov = JSON.parse(fs.readFileSync(covPath, 'utf8'));
  const series = (JSON.parse(fs.readFileSync(path.join(latDir, 'manifest.json'), 'utf8')).series || 'pl');
  const volume = mf.volume;
  const entry = cov.works.find(w => String(w.idno) === String(idno));
  const next = {
    idno: String(idno), series, volume,
    tier: 3,
    coverage: seqErrors.length === 0 ? (entry ? entry.coverage || 'full' : 'full') : 'partial',
    notes_recovered: rows.length,
    notes_placed: injected.length,
  };
  if (entry) Object.assign(entry, next); else cov.works.push(next);
  fs.writeFileSync(covPath, JSON.stringify(cov, null, 1));
}

const tag = DRY ? '(dry run) ' : '';
console.log(`${tag}${idno}: ${rows.length} plate notes — ${injected.length} injected, ${skipped.length} skipped`);
if (!QUIET) for (const h of headPlaced) console.log(`  · note ${h.note_no} (col ${h.col}): excerpt began at the marker — placed after *${h.word}*`);
if (!QUIET) for (const t of trimmed) console.log(`  · note ${t.note_no} (col ${t.col}): placed on a ${t.k}-word window — the wider anchor disagrees with our text`);
if (!QUIET) for (const s of skipped) console.log(`  ⚠ note ${s.note_no} (col ${s.col}): ${s.why}`);
for (const e of seqErrors) console.error(`  ⛔ ${e}`);
if (seqErrors.length) process.exit(2);
