// Shared citation parser for the day-one indexes (CLAUDE.md rule 9).
//
// Lifted verbatim out of scripts/index-work.mjs on 2026-08-06, when
// scripts/index-work-pg.mjs stopped hardcoding `scripture: []` and needed the
// same parser. The two indexers MUST NOT drift: a PG work's [n:] notes are
// Migne's own Latin apparatus, identical in form to a PL work's, so the same
// alias table and the same shape rules have to govern both. Every comment below
// is the original reasoning — do not re-derive it, and grow BOOKS by attestation
// only (a new alias means a real citation was seen in a real plate).
//
// What is NOT here: anything that depends on a work's own files or its idno —
// corrections lookup, note routing, anaphora resolution, the walk over chunks.
// Those stay in the callers, because PL harvests from the Latin twin and PG
// harvests from the English (its Greek source carries no note layer).

// Vulgate/Migne abbreviation → OSIS book code (KJV/WEB versification caveat:
// Vulgate psalm/kingdom numbering differs; refKey follows the CITED numbering —
// Psal. keys as-printed, I-IV Reg. map to 1Sam/2Sam/1Kgs/2Kgs).
export const BOOKS = {
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
export const KNOWN_FONTES = /^(Lib|Cod|Conc|Concil|Can|Cap|Ep|Epist|Tract|Resp|Synod|Novell|Decret|Serm|Hom|Aeneid)\./i;

const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
export function romanToInt(s) {
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
export function parseScripture(raw) {
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

// Column anchors. Kept in sync with scripts/lib/chunk-core.mjs COL_RE_SRC
// (banded 0473A + bare 1137 — PG works use the bare form). A /g regex carries
// lastIndex state, so this is a FACTORY: every consumer gets its own.
export const COL_RE_SRC = '\\[([0-9]{3,5}[A-D]?)\\]';
export const makeColRe = () => new RegExp(COL_RE_SRC, 'g');

// Citation-form column: strip leading zeros, lowercase the band. 0473A → 473a.
export const citeCol = c => { if (!c) return null; const m = c.match(/^0*([0-9]+)([A-D]?)$/); return m ? m[1] + m[2].toLowerCase() : c.toLowerCase(); };

// Strip column anchors + italic asterisks + collapse whitespace. Shared by [f:]
// locator validation (Pattern 4) and, per the 2026-07-31 inline-citation SPEC, by
// inline scripture-candidate detection — the Latin twin sets these citations in
// italics too, so an anchor or asterisk can fall INSIDE the parenthesis
// ("(Job [0159C] XXX)") and must be stripped before parseScripture ever sees it.
export const stripF = s => s.replace(/\[[0-9]{3,5}[A-D]?\]/g, '').replace(/\*/g, '').replace(/\s+/g, ' ').trim();

// Anaphoric notes: "(Ibid.)", "(Ibid., 33)", "(Id. VI, 24)", "(Idem)". They carry no
// book name by nature, so they can only be resolved from the PRINTED SEQUENCE — which
// is possible at index time and impossible afterwards from the display string alone
// (CLAUDE.md rule 9). Resolution is deterministic, so this is a script, not a judgment.
// The TEXT is never rewritten: refDisplay/raw keep Migne's "Ibid." verbatim per the
// sacred-marker rule; the antecedent lives in its own field.
export const isAnaphoric = s => /^\(?\s*(ibid|idem|id)\b/i.test(s);

// A note whose SHAPE is scripture-like (roman+book or book+roman) but which no alias
// resolved: that is an alias-table gap and must be recorded in unparsed[], never
// dropped and never filed as a fons. KNOWN_FONTES is the documented exception.
export const isScriptureShaped = s => /^[IVXLCDM]+\s+[A-Z][a-z]+\.|^[A-Z][a-z]+\.\s+[IVXLCDM]+/.test(s);

// Inline (running-text) candidate gates, so ordinary prose parentheses
// ("ut ita dicam") are never even considered: the stripped text must OPEN with an
// optional ordinal + Capitalized-word head (book-shaped), AND contain a numeral
// TOKEN somewhere (a whole word of only roman letters, or digits — not a bare
// letter inside an unrelated word: "Christo" must never trip this on its capital
// C). Both gates measured zero false positives across the 24 scanned works once
// the numeral-token form was required (the brief's 69 held 3 prose false
// positives — "(Ecclesia de Christo dicit)" etc. — none with a numeral token).
export const CANDIDATE_HEAD_RE = /^((?:I{1,3}V?|IV)\s+)?[A-Z][a-z]+[.,]?\s/;
export const NUMERAL_TOKEN_RE = /\b(?:[IVXLCDM]+|[0-9]+)\b/;
