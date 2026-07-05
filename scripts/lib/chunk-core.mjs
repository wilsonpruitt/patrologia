// Phase 5 chunker core — pure transform, no filesystem writes.
// Used by chunk-work.mjs (CLI, writes chunks) and chunk-scan.mjs (corpus dry-run).
//
// Design: PARTITION, not extraction. The old chunker matched known containers
// (<div1>, <p>, <list>) and dropped everything else — which silently lost div2+
// heads, verse <l> lines, and any pb/note outside the matched containers.
// Here the entire <body> is split into units at div boundaries so every byte
// lands in exactly one unit, then transformed in place. Content can only be
// lost by an explicit deletion, and the validator counts what the source counts.
//
// Marker conventions carried into translation (hard rule 1: anchors are sacred):
//   <pb n="0473A"/>  →  [0473A]        (column anchor, MUST survive translation verbatim;
//                                       bare "1137" and nonstandard forms preserved verbatim too)
//   <note>X</note>   →  [n: X]         (Migne's inline citation, MUST survive verbatim)
//   <hi>/<emph>      →  *X*            (italic)
//   <list>/<item>    →  markdown "- " lines
//   <head>           →  "## " heading lines (first head of a unit = unit head)
//   <l>              →  line break (verse)
// Special TEI cases handled:
//   - <note> wrapping block structure (Migne's monita etc.) = transparent wrapper,
//     its content is regular translatable text, not an inline citation.
//   - nested inline notes are flattened to SIBLING [n:] markers (parseable downstream).
//   - a <pb> inside a note is pulled out as a sibling marker right after the note.
//   - literal [ ] inside note text are normalized to ( ) so [n: ...] stays parseable.

// Column-marker regex for STANDARD forms (banded 0473A + bare 1137). Downstream
// scripts (verify-english, index-work, build-work-page) import this. The chunker
// itself validates against the work's exact pb-value set, so nonstandard forms
// (Roman numerals, OCR typos) still validate — they just warn.
export const COL_RE_SRC = '\\[([0-9]{3,5}[A-D]?)\\]';
export const colRe = () => new RegExp(COL_RE_SRC, 'g');

const SEN = '\x00';  // block boundary sentinel
const UNIT = '\x01'; // unit (div) boundary
const HEAD = '\x02'; // block-is-a-<head> marker
const NL = '\x03';   // intra-block line break (verse) — not \s, survives whitespace collapse
const ATOM = '\x04'; // pre-rendered atomic block (list/table) placeholder prefix

const words = s => s.split(/\s+/).filter(Boolean).length;

// Match candidate [X] tokens and keep only those whose value is a real pb value
// of THIS work. Exact-set matching is what makes weird pb forms safe: prose
// brackets that don't collide with a real column value are ignored, and a
// collision fails validation loudly instead of corrupting the sequence.
function makeColMatcher(pbValues) {
  const set = new Set(pbValues);
  const cand = /\[([^\][\n]{1,10})\]/g; // no ] [ or newline inside — a literal [ in prose must not swallow a following marker
  return {
    set,
    extract: text => [...text.matchAll(cand)].filter(m => set.has(m[1])).map(m => m[1]),
    strip: text => text.replace(cand, (m, v) => set.has(v) ? '' : m),
  };
}

// Find the matching </note> for the <note...> opening at index `start` (index of '<').
function noteSpan(s, start) {
  const openEnd = s.indexOf('>', start);
  if (openEnd < 0) return null;
  if (s[openEnd - 1] === '/') return { selfClosing: true, end: openEnd };
  let depth = 1;
  const re = /<note[^>]*>|<\/note>/g;
  re.lastIndex = openEnd + 1;
  let m;
  while ((m = re.exec(s))) {
    if (m[0] === '</note>') { depth--; if (depth === 0) return { contentStart: openEnd + 1, contentEnd: m.index, end: m.index + m[0].length }; }
    else if (!m[0].endsWith('/>')) depth++;
  }
  return null;
}

// Remove <note> wrappers whose content contains block structure (divs, paragraphs,
// heads) — they are editorial containers (monita, prefaces), not inline citations.
// Outermost-first; content stays in place. Returns [body, structuralCount, selfClosingCount].
function unwrapStructuralNotes(body) {
  let structural = 0, selfClosing = 0, i = 0;
  while ((i = body.indexOf('<note', i)) !== -1) {
    const span = noteSpan(body, i);
    if (!span) { i += 5; continue; }
    if (span.selfClosing) { body = body.slice(0, i) + body.slice(span.end + 1); selfClosing++; continue; }
    const content = body.slice(span.contentStart, span.contentEnd);
    if (/<div[0-9]?[\s>]|<p[\s>]|<head[\s>]/.test(content)) {
      body = body.slice(0, i) + content + body.slice(span.end);
      structural++; // re-scan from same index — content may hold further structural notes
    } else {
      i = span.end; // inline note: left for the inline transform
    }
  }
  return [body, structural, selfClosing];
}

export function chunkWork({ xml, work, textRec, idno, target = 1200, max = 1600 }) {
  const warnings = [];
  const bodyStart = xml.indexOf('<body>'), bodyEnd = xml.indexOf('</body>');
  if (bodyStart < 0 || bodyEnd < 0) return { errors: ['no <body> element'], warnings, chunks: [], manifest: null };
  let body = xml.slice(bodyStart + 6, bodyEnd);

  // Structural-note transparency BEFORE source-truth counts, so the validator
  // and the transformer agree on what an inline note is.
  const [unwrapped, structuralNotes, selfClosingNotes] = unwrapStructuralNotes(body);
  body = unwrapped;
  if (structuralNotes) warnings.push(`${structuralNotes} structural <note> wrapper(s) treated as regular content`);
  if (selfClosingNotes) warnings.push(`${selfClosingNotes} empty self-closing <note/> dropped`);

  // ---- source-truth counts for validation ----
  const srcPbSeq = [...body.matchAll(/<pb n="([^"]+)"\s*\/>/g)].map(m => m[1]);
  const srcNoteCount = (body.match(/<note[^>]*>/g) || []).length;
  const srcWords = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

  const nonstandard = srcPbSeq.filter(v => !/^[0-9]{3,5}[A-D]?$/.test(v));
  if (nonstandard.length) warnings.push(`${nonstandard.length} nonstandard pb value(s) (patch with provenance before translation): ${[...new Set(nonstandard)].slice(0, 8).join(', ')}`);
  const colM = makeColMatcher(srcPbSeq);

  // ---- inline transform (runs per block) ----
  const unknownTagsSeen = new Set();
  let bracketNormalized = 0;
  function cleanNoteContent(n) {
    // pull already-tokenized col markers and nested [n:] out as siblings
    const siblings = [];
    n = n.replace(/\[n: [^\]]*\]/g, m => { siblings.push(m); return ' '; });
    n = n.replace(/\[([^\][\n]{1,10})\]/g, (m, v) => colM.set.has(v) ? (siblings.push(m), ' ') : m);
    n = n.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (/[[\]]/.test(n)) { bracketNormalized++; n = n.replace(/\[/g, '(').replace(/\]/g, ')'); }
    return `[n: ${n}]` + (siblings.length ? ' ' + siblings.join(' ') : '');
  }
  function inline(s) {
    s = s
      .replace(/<pb n="([^"]+)"\s*\/>/g, '[$1]')
      // <emph> wrapping a <hi> or <note> is a no-op wrapper, not italics
      .replace(/<emph>([\s\S]*?)<\/emph>/g, (_, h) => /<hi>|<note/.test(h) ? h : `*${h.replace(/\s+/g, ' ').trim()}*`);
    // notes innermost-first (flattens nesting into sibling markers)
    let prev;
    do {
      prev = s;
      s = s.replace(/<note[^>]*>((?:(?!<note)[\s\S])*?)<\/note>/g, (_, n) => cleanNoteContent(n));
    } while (s !== prev);
    return s
      .replace(/<hi>([\s\S]*?)<\/hi>/g, (_, h) => `*${h.replace(/\s+/g, ' ').trim()}*`)
      // safety net: strip any unhandled tag rather than leak it, but log it
      .replace(/<\/?([a-zA-Z][\w-]*)\b[^>]*>/g, (m, tag) => { unknownTagsSeen.add(tag); return ' '; })
      .replace(/\s+/g, ' ')
      .trim()
      .replace(new RegExp(`\\s*${NL}\\s*`, 'g'), '\n');
  }

  // ---- lists and tables become atomic pre-rendered blocks (protected from the split) ----
  const atomics = [];
  const protect = text => { atomics.push(text); return `${SEN}${ATOM}${atomics.length - 1}${SEN}`; };
  // A protected block can nest inside another (list inside a table cell) — its
  // placeholder must be expanded back to content when the outer block renders.
  const expandAtomics = t => {
    let prev;
    do { prev = t; t = t.replace(new RegExp(`${SEN}?${ATOM}(\\d+)${SEN}?`, 'g'), (_, i) => `\n${atomics[Number(i)]}\n`); } while (t !== prev);
    return t.replace(/\n{2,}/g, '\n').trim();
  };
  body = body.replace(/<list(?:\s[^>]*)?>([\s\S]*?)<\/list>/g, (_, inner) =>
    protect([...inner.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>|<pb n="([^"]+)"\s*\/>/g)]
      .map(i => i[2] ? `[${i[2]}]` : `- ${inline(i[1])}`)
      .join('\n')));
  // pb marks can sit at table level (between rows) or row level (between cells) —
  // both must survive, and cells can hold nested protected blocks.
  body = body.replace(/<table(?:\s[^>]*)?>([\s\S]*?)<\/table>/g, (_, inner) =>
    protect([...inner.matchAll(/<row(?:\s[^>]*)?>([\s\S]*?)<\/row>|<pb n="([^"]+)"\s*\/>/g)]
      .map(r => r[2] ? `[${r[2]}]`
        : [...r[1].matchAll(/<cell(?:\s[^>]*)?>([\s\S]*?)<\/cell>|<pb n="([^"]+)"\s*\/>/g)]
            .map(c => c[2] ? `[${c[2]}]` : inline(c[1])).join(' | '))
      .join('\n')));

  // ---- partition body into units at div boundaries ----
  // Split at EVERY div open (div, div1..div4) — finest granularity present.
  // Chunk grouping re-merges small units, so fine units only improve boundaries.
  body = body
    .replace(/<\/div[0-9]?>/g, '')
    .replace(/<div[0-9]?(?:\s[^>]*)?>/g, SEN + UNIT + SEN)
    .replace(/<head(?:\s[^>]*)?>/g, SEN + HEAD)
    .replace(/<\/head>/g, SEN)
    .replace(/<\/p>/g, SEN)
    .replace(/<p(?:\s[^>]*)?>/g, SEN)
    .replace(/<\/?(?:lg|quote|cit|argument|sp|opener|closer|salute|dp|app)(?:\s[^>]*)?>/g, SEN)
    .replace(/<\/l>/g, NL)
    .replace(/<l(?:\s[^>]*)?>/g, '');

  const segments = body.split(UNIT); // segment 0 = front matter before first div (often empty)
  const divs = [];
  const atomRe = new RegExp(`^${ATOM}(\\d+)$`);
  for (const seg of segments) {
    const blocks = [];
    let head = null, sawText = false;
    for (const piece of seg.split(SEN)) {
      let block;
      const am = piece.match(atomRe);
      if (am) block = expandAtomics(atomics[Number(am[1])]);
      else if (piece.startsWith(HEAD)) {
        const h = inline(piece.slice(1));
        if (!h) continue;
        if (head === null && !sawText) { head = h; continue; }
        block = `## ${h}`;
      } else block = inline(piece);
      if (!block) continue;
      sawText = true;
      blocks.push(block);
    }
    if (head === null && !blocks.length) continue;
    const text = blocks.join('\n\n');
    divs.push({ head, text, words: words(colM.strip(text)) });
  }
  if (!divs.length) return { errors: ['no content units found in <body>'], warnings, chunks: [], manifest: null };

  // ---- group units into chunks (unchanged from the validated pilot logic) ----
  // A repeated "(cont.)" head must not re-emit note/column markers from the
  // original head — markers are source content and may appear exactly once.
  const contHead = h => h === null ? null
    : `${colM.strip(h.replace(/\[n: [^\]]*\]/g, '')).replace(/\s+/g, ' ').trim()} (cont.)`;
  const units = [];
  for (const d of divs) {
    if (d.words <= max) { units.push({ ...d, splitPart: null }); continue; }
    const paras = d.text.split('\n\n');
    let cur = [], curW = 0, part = 1;
    for (const p of paras) {
      const w = words(p);
      if (curW + w > max && cur.length) {
        units.push({ head: part === 1 ? d.head : contHead(d.head), text: cur.join('\n\n'), words: curW, splitPart: part++ });
        cur = []; curW = 0;
      }
      cur.push(p); curW += w;
    }
    if (cur.length) units.push({ head: part === 1 ? d.head : contHead(d.head), text: cur.join('\n\n'), words: curW, splitPart: part === 1 ? null : part });
  }

  const groups = [];
  let cur = [], curW = 0;
  for (const u of units) {
    if (curW > 0 && curW + u.words > target && !(curW < target / 2 && u.words < target / 2)) {
      groups.push(cur); cur = []; curW = 0;
    }
    cur.push(u); curW += u.words;
  }
  if (cur.length) groups.push(cur);

  // ---- render chunks + manifest ----
  const authors = (work.attributions?.map(a => a.author) ?? [work.author]).filter(Boolean);
  const chunks = [];
  const manifest = [];
  let colContext = null;
  groups.forEach((group, ci) => {
    const text = group.map(u => (u.head ? `## ${u.head}\n\n` : '') + u.text).join('\n\n');
    const cols = colM.extract(text);
    const noteCount = (text.match(/\[n: /g) || []).length;
    const wc = words(colM.strip(text));
    const incipit = colM.strip(text.replace(/^## .*\n+/, '')).replace(/\*/g, '').split(/\s+/).filter(Boolean).slice(0, 8).join(' ');
    const meta = {
      workIdno: Number(work.workIdno),
      textIdno: Number(idno),
      work: textRec.title,
      authors,
      series: 'pl',
      volume: textRec.volume ?? work.volumes?.[0] ?? null,
      chunk: ci,
      chunkCount: groups.length,
      colContext: colContext ?? (cols[0] ?? null),
      colFirst: cols[0] ?? colContext,
      colLast: cols.at(-1) ?? colContext,
      heads: group.map(u => u.head).filter(Boolean),
      words: wc,
      noteCount,
      incipit,
    };
    if (cols.length) colContext = cols.at(-1);
    const fm = Object.entries(meta).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
    chunks.push({ name: `${String(ci).padStart(4, '0')}.md`, content: `---\n${fm}\n---\n\n${text}\n` });
    manifest.push(meta);
  });

  // ---- validate ----
  const errors = [];
  const emittedAll = chunks.map(c => c.content.split('---\n').slice(2).join('---\n')).join('\n\n');
  const outPbSeq = colM.extract(emittedAll);
  if (outPbSeq.join(',') !== srcPbSeq.join(','))
    errors.push(`column sequence mismatch: source ${srcPbSeq.length} marks, chunks ${outPbSeq.length}; first divergence at index ${outPbSeq.findIndex((c, i) => c !== srcPbSeq[i])}`);
  const outNotes = (emittedAll.match(/\[n: /g) || []).length;
  if (outNotes !== srcNoteCount) errors.push(`note count mismatch: source ${srcNoteCount}, chunks ${outNotes}`);
  // Word conservation must compare CONTENT words, not marker syntax: strip
  // column markers, the "[n:" token, list bullets, cell separators, heading
  // prefixes, and repeated "(cont.)" head lines before counting.
  const outWords = words(
    colM.strip(emittedAll)
      .replace(/^## .*\(cont\.\)$/gm, '')
      .replace(/\[n: /g, '')
      .replace(/^- /gm, '')
      .replace(/ \| /g, ' ')
      .replace(/^## /gm, '')
  );
  const delta = Math.abs(outWords - srcWords) / (srcWords || 1);
  if (delta > 0.02) errors.push(`word count drift ${(delta * 100).toFixed(1)}%: source ${srcWords}, chunks ${outWords}`);
  for (let i = 1; i < manifest.length; i++) {
    // colLast === null means no column mark has occurred yet (text before the
    // work's first <pb>) — nothing to be continuous with.
    if (manifest[i - 1].colLast !== null && manifest[i].colContext !== manifest[i - 1].colLast)
      errors.push(`chunk ${i} colContext ${manifest[i].colContext} != chunk ${i - 1} colLast ${manifest[i - 1].colLast}`);
  }

  if (bracketNormalized) warnings.push(`${bracketNormalized} note(s) had literal [ ] normalized to ( )`);
  if (unknownTagsSeen.size) warnings.push(`unrecognized tags stripped (text kept, tags logged): ${[...unknownTagsSeen].join(', ')}`);

  return {
    errors, warnings, chunks,
    manifest: {
      workIdno: Number(work.workIdno), textIdno: Number(idno), title: textRec.title, authors, series: 'pl',
      volume: textRec.volume ?? work.volumes?.[0] ?? null,
      colFirst: srcPbSeq[0], colLast: srcPbSeq.at(-1),
      sourceWords: srcWords, sourceNotes: srcNoteCount, sourcePbMarks: srcPbSeq.length,
      chunkCount: groups.length, chunks: manifest,
    },
  };
}
