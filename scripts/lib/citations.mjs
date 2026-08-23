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
  // 'Genes' is the fuller form Migne prints throughout 6963 (7 citations).
  'Gen': 'Gen', 'Genes': 'Gen', 'Exod': 'Exod', 'Lev': 'Lev', 'Levit': 'Lev', 'Num': 'Num', 'Deut': 'Deut',
  'Jos': 'Josh', 'Judic': 'Judg', 'Ruth': 'Ruth',
  'I Reg': '1Sam', 'II Reg': '2Sam', 'III Reg': '1Kgs', 'IV Reg': '2Kgs',
  'I Par': '1Chr', 'II Par': '2Chr', 'I Esdr': 'Ezra', 'II Esdr': 'Neh',
  'I Esd': 'Ezra', 'II Esd': 'Neh',
  // Chronicles = Paralipomenon; Migne prints Par./Paral./Paralip. interchangeably —
  // 11551 alone uses two of the three (234b, 236b vs 237b).
  'I Paral': '1Chr', 'II Paral': '2Chr', 'I Paralip': '1Chr', 'II Paralip': '2Chr',
  // 'Esther' is the full form Migne prints at 11632/0290c, beside the usual 'Esth'.
  'Tob': 'Tob', 'Judith': 'Jdt', 'Esth': 'Esth', 'Esther': 'Esth', 'Job': 'Job',
  'Psal': 'Ps', 'Ps': 'Ps', 'Psalm': 'Ps', 'Prov': 'Prov', 'Cant': 'Song', 'Cantic': 'Song',
  // Ecclesiastes: Migne writes Eccle/Eccles/Eccl. Ecclesiasticus (Sirach) is Eccli —
  // keep them distinct, the one-letter difference is the whole distinction.
  'Eccle': 'Eccl', 'Eccles': 'Eccl', 'Eccl': 'Eccl',
  // 'Esai' is Migne's spelling throughout Ambrose on the Song (6963, 18 citations);
  // 'Pov' is broken type for 'Prov' at 6963/1853d — reading the alias does not touch
  // the English, which still prints what the plate prints.
  'Sap': 'Wis', 'Eccli': 'Sir', 'Sirac': 'Sir', 'Isa': 'Isa', 'Is': 'Isa', 'Isai': 'Isa', 'Esai': 'Isa',
  'Pov': 'Prov', 'Jer': 'Jer',
  'Jerem': 'Jer', 'Jere': 'Jer', 'Hier': 'Jer', 'Hierem': 'Jer', 'Thren': 'Lam', 'Bar': 'Bar', 'Ezech': 'Ezek', 'Dan': 'Dan',
  // 'Oseae' is the genitive Migne prints when the citation reads "of Hosea" (11057/340a).
  'Os': 'Hos', 'Ose': 'Hos', 'Osee': 'Hos', 'Oseae': 'Hos', 'Joel': 'Joel', 'Amos': 'Amos', 'Abd': 'Obad', 'Jon': 'Jonah',
  // 'Michae'/'Nahum' are the fuller forms Migne prints at 11632/0307c and /0333a.
  'Mich': 'Mic', 'Michae': 'Mic', 'Nah': 'Nah', 'Nahum': 'Nah',
  'Habac': 'Hab', 'Abac': 'Hab', 'Soph': 'Zeph', 'Sophon': 'Zeph', 'Agg': 'Hag',
  'Zach': 'Zech', 'Zachar': 'Zech', 'Malach': 'Mal', 'Malac': 'Mal', 'Mal': 'Mal',
  'I Mach': '1Macc', 'II Mach': '2Macc', 'I Machab': '1Macc', 'II Machab': '2Macc',
  'Matth': 'Matt', 'Math': 'Matt', 'Matt': 'Matt', 'Marc': 'Mark', 'Luc': 'Luke', 'Joan': 'John',
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
  // 'I Cr.' = I Corinthians, attested once corpus-wide at 8958/0509D (2026-08-23), where
  // Migne notes the Pascha nostrum / in azymis sinceritatis et veritatis quotation. The
  // quoted text is 1 Cor 5:7-8 verbatim, which is what identifies the book -- NOT the
  // printed chapter, which reads XVI and is Migne's own slip. We index the citation and
  // leave his numeral exactly as printed in refDisplay: the alias fixes OUR parsing gap,
  // never his reference. (Cf. runbook false positive 2 -- an Ibid. may depend on it.)
  'I Cr': '1Cor',
  // Bare 'Petr.' = I Peter, attested once corpus-wide at 8969/1177D (2026-08-23), where
  // Migne's own prose introduces the quotation with "unde Petrus:" and the text quoted --
  // In qua pauci, id est octo animae salvae factae sunt per aquam ... salvos fecit baptisma
  // -- is 1 Pet 3:20-21 verbatim. Identified FROM THE QUOTED TEXT, not assumed from the
  // numeral. ⚠ HAZARD, stated because the alias cannot enforce it: the corpus prints the
  // prefixed forms 45 times (I Petr. 33, II Petr. 12), so a bare 'Petr.' meaning II Peter
  // is possible in a work not yet englished, and this mapping would resolve it silently
  // and wrongly. Same shape as the bare 'Phil' ruling above, which was also settled per
  // site by the Latin quoted. Re-verify against the quotation at any new attestation.
  'Petr': '1Pet',
};

// Evidence-grown known-fontes routing list (SPEC.md ruling 4): a citation whose shape
// looks like scripture (roman+book or book+roman) but whose book token is one of these
// is a KNOWN non-scripture fons, not an alias gap — route to fontes[], not unparsed[].
// Grown by attestation only, same discipline as BOOKS: 'Aeneid' added 2026-07-31 for
// 11065's '(Aeneid. VI, 688.)' (a [n:] note, confirmed NOT inline on inspection).
export const KNOWN_FONTES = /^(Lib|Cod|Conc|Concil|Can|Cap|Ep|Epist|Tract|Resp|Synod|Novell|Decret|Serm|Hom|Aeneid)\./i;

// ⚠ KNOWN_FONTES is anchored at the START, so it cannot see a work title that stands
// AFTER an author's name — "(Virgil. II Aeneid.)" begins "Virgil." and so failed both
// tests: not scripture the parser could key, not a fons the guard recognised, and it
// therefore landed in unparsed[] alone. The record survived, but the fons index never
// saw it, so a real classical source Migne cites reached no reader (11632 @ 385a,
// 2026-08-24 — the resume note had recorded it as "correctly a fons" while the data
// filed it nowhere).
// ⛔ Deliberately narrow: author, roman numeral, KNOWN_FONTES work token, END. It
// cannot capture a scripture reference, because a scripture reference never ends on a
// work title. Widening this to an unanchored search would let an "Ep." inside a
// semicolon-joined scripture note route the whole note to fontes.
export const AUTHOR_WORK_FONS = /^[A-Z][a-z]+\.\s+[IVXLCDM]+\s+(?:Lib|Cod|Conc|Concil|Can|Cap|Ep|Epist|Tract|Resp|Synod|Novell|Decret|Serm|Hom|Aeneid)\.?\)?$/i;

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
// ⚠ The comma between chapter and verse is OPTIONAL (2026-08-24). Migne prints the
// verse on a bare space often enough to matter — "(I Cor. VI 20)", "(Isai. LX 8.)",
// "(Rom. VII 24.)" were all dropped as unparsed-shape while their books sat in the
// table the whole time. This was diagnosed as an alias gap twice before it was
// measured; it is a NUMERAL-PATTERN gap, and no alias would ever have fixed it.
// Making the separator `,?` only ADDS matches: every comma form still matches as it did.
const segRe = /^\(?\s*((?:I{1,3}V?|IV)\s+)?([A-Z][a-z]+)\.?\s+([IVXLCDM]+(?:\s*,\s*[IVXLCDM]+)*|[0-9]+)(?:\s*,?\s*([0-9]+(?:\s*[,-]\s*[0-9]+)*))?\s*\.?\)?$/;

// A LIST OF CHAPTER+VERSE PAIRS in one parenthesis: "(Exod. XIX, 20, et XX, 21)"
// → Exod 19:20 AND Exod 20:21. The code below attaches verses to the first chapter
// only, on the stated ground that "Migne never lists verses across chapters" — this
// form is the counter-example, found 2026-08-23 in 11613. Tried only AFTER segRe
// fails, so nothing that parses today can be re-read by it. It requires a digit in
// every pair, which is what keeps it off the chapter-list form "(Gen. XVIII, XIX)".
const pairListRe = /^\(?\s*((?:I{1,3}V?|IV)\s+)?([A-Z][a-z]+)\.?\s+((?:[IVXLCDM]+\s*,?\s*[0-9]+)(?:\s*,\s*[IVXLCDM]+\s*,?\s*[0-9]+)+)\s*\.?\)?$/;
const PAIR_RE = /([IVXLCDM]+)\s*,?\s*([0-9]+)/g;

// Migne's spelling variants, normalized before matching:
//   " et " joins chapters or verses exactly like a comma (Act. XI et XXII)
//   "c." / "v." prefix a numeral (Num. XIX, c. 14-19 ; I Joan. III, V. 8) — only
//   stripped when a digit follows, so a roman chapter "III, V" is left alone
//   "Book., XII" — stray comma after the abbreviation
//   "Book, XII" — comma IN PLACE of the abbreviating period (Levit, XIII; Job, X;
//   Dan, II; Eccles, IV) — attested only in inline citations (2026-07-31 SPEC),
//   normalized at the START of the segment only (a mid-segment comma is a real
//   list separator and must not be touched).
//   "Matth. vi, 34." — a LOWERCASE roman chapter. Migne sets the chapter numerals of
//   his FOOTNOTE apparatus in lowercase and Corpus Corporum's TEI gives them in
//   uppercase, so both forms are in the corpus and they are the same address. Every
//   numeral class here is uppercase-only, so before 2026-08-08 a faithfully
//   transcribed lowercase note parsed to nothing and was filed as a FONS —
//   ⛔ silently, because isScriptureShaped is case-sensitive too and so never sent it
//   to unparsed[] either. The guard that exists to make an alias gap impossible to
//   drop had the same blind spot as the parser it guards.
//   ⚑ The perverse consequence, and the reason this is not cosmetic: the indexer was
//   REWARDING INFIDELITY. `antiochus-epistula-ad-eustathium`, whose transcriber
//   silently uppercased Migne's numerals, indexed its citations; `dorotheus-epistolae-
//   ad-diversos`, which kept what the plate prints as the verbatim rule requires,
//   indexed none of its eleven.
//   Uppercased for MATCHING only, and only a wholly-lowercase run in the chapter slot
//   after the book head (never a mixed "Vi", never a numeral elsewhere in the note).
//   refDisplay keeps the printed lowercase — the reader sees Migne's form, refKey
//   resolves it (rule 9's dual key, exactly the case it was designed for).
const upperRomanChapter = s => s.replace(
  /^(\(?\s*(?:(?:I{1,3}V?|IV)\s+)?[A-Z][a-z]+\.?\s+)([ivxlcdm]+(?:\s*[,-]\s*[ivxlcdm]+)*)\b/,
  (_, head, nums) => head + nums.toUpperCase());

// "Matth. XXVIII, 5 et seq." — an OPEN-ENDED range: the verse named, and what
// follows it. Migne prints the formula only in 6963 (3 citations: Matth. XXVIII,
// 5; Coloss. II, 20; Tob. X, 3 — measured 2026-08-15 across all shipped works),
// and before this it parsed to nothing, because normSeg turns " et " into a comma
// and the verse class then meets "seq." where it wants a digit.
// ⚠ Stripped BEFORE normSeg, and it must stay before it — afterwards the formula's
// own " et " has already been rewritten and the trailing token is unrecognizable.
// The range's HEAD is the addressable part, so the ref keys the opening verse and
// carries openEnded: true. It is deliberately NOT keyed as a span: Migne does not
// say where the range ends, and inventing a terminus would be a conjecture wearing
// an index key. refDisplay keeps "et seq." verbatim, so the reader still sees it.
// The trailing `)` is put back, so a piece that carried one still closes and segRe's
// optional `\)?$` sees what it expects either way.
const ET_SEQ_RE = /\s*,?\s*(?:et\s+)?seqq?\.?\s*(\)?)\s*$/i;
const stripEtSeq = s => s.replace(ET_SEQ_RE, '$1');

const normSeg = s => upperRomanChapter(s
  .replace(/\s+et\s+/gi, ', ')
  // "(Exod. XIX, 20, et XX, 21)" already prints a comma BEFORE the "et", so the line
  // above leaves ",," behind and every downstream shape then fails on it. Collapsing a
  // run of commas is safe: a doubled comma never means anything in a citation.
  .replace(/,(\s*,)+/g, ',')
  .replace(/\b[vVcC]\.\s*(?=\d)/g, '')
  .replace(/\.\s*,/g, '.')
  .replace(/^((?:I{1,3}V?|IV)\s+)?([A-Z][a-z]+),/, '$1$2.'));

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
    const piece1 = piece0.replace(/^\s*[,;]\s*|\s*[,;]\s*$/g, '').trim();
    if (!piece1) continue;
    const piece = stripEtSeq(piece1);
    const openEnded = piece !== piece1;
    const push = ref => refs.push(openEnded ? { ...ref, openEnded: true } : ref);
    const normed = normSeg(piece).trim();
    const rm = normed.match(rangeRe);
    if (rm) {
      const bookLat = (rm[1] ? rm[1].trim() + ' ' : '') + rm[2];
      const osis = BOOKS[bookLat];
      if (!osis) { sawUnknownBook = true; continue; }
      const c1 = romanToInt(rm[3]), c2 = romanToInt(rm[4]);
      if (c1 && c2) { push({ refKey: `${osis}.${c1}-${osis}.${c2}` }); continue; }
    }
    const m = normed.match(segRe);
    if (!m) {
      const pm = normed.match(pairListRe);
      if (pm) {
        const bookLat = (pm[1] ? pm[1].trim() + ' ' : '') + pm[2];
        const osis = BOOKS[bookLat];
        if (!osis) { sawUnknownBook = true; continue; }
        let any = false;
        for (const p of pm[3].matchAll(PAIR_RE)) {
          const ch = romanToInt(p[1]);
          if (!ch) continue;
          push({ refKey: `${osis}.${ch}.${Number(p[2])}` });
          any = true;
        }
        if (any) continue;
      }
      sawBadShape = true; continue;
    }
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
      push({ refKey: verses.length > 1
        ? `${osis}.${ch}.${verses[0]}-${osis}.${ch}.${verses.at(-1)}`
        : `${osis}.${ch}.${verses[0]}` });
      for (const ch2 of chapters.slice(1)) push({ refKey: `${osis}.${ch2}` });
    } else {
      for (const ch of chapters) push({ refKey: `${osis}.${ch}` }); // chapter-level
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
// ⚠ Case-tolerant since 2026-08-08, and it MUST stay so: the guard shares its numeral
// class with the parser, so an uppercase-only test cannot see the very notes the
// parser has just failed on, and routes them to fontes[] as though they had been
// judged. A guard blind in the same direction as the thing it guards is not a guard.
// ⚠ The numeral run must be a WHOLE token — `(?![A-Za-z])`. Without it the class
// matches a PREFIX of an ordinary Latin word, which is harmless while the class is
// uppercase-only and immediately false-positive once it is not: "Leg. voraginis"
// matched on the *v* of voraginis, "Greg. lib. VII" on the *li* of lib. Both
// surfaced as phantom alias gaps the moment the case-tolerance went in, which is
// how the flaw was found — the uppercase-only version had it latent all along.
export const isScriptureShaped = s => /^(?:[IVXLCDM]+|[ivxlcdm]+)(?![A-Za-z])\s+[A-Z][a-z]+\.|^[A-Z][a-z]+\.\s+(?:[IVXLCDM]+|[ivxlcdm]+)(?![A-Za-z])/.test(s);

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
