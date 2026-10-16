// Shared sentence segmenter (heuristic) for mark-sentences.mjs and align-sentences.mjs.
// Masks [n: …] notes and [col] anchors, breaks after . ? ! (Greek also ; ·) before an opener.

const ABBR = new Set(['ep', 'epist', 'cap', 'concil', 'lib', 'hom', 'serm', 'tom', 'dom', 'sanct', 'ibid', 'id', 'gr', 'hier', 'vid', 'cf', 'loc', 'cit', 'tit', 'dist', 'quaest', 'art', 'conc', 'can', 'ms', 'edit', 'col', 'pag', 'num', 'vers', 'ps', 'prov', 'eccl', 'matth', 'luc', 'joan', 'rom', 'cor', 'gal', 'eph', 'tim', 'hebr', 'apoc', 'deut', 'reg', 'isa', 'jer', 'ezech', 'dan', 'gen', 'exod', 'levit', 'sap', 'ecclus']);
// punctuation + closers, whitespace, then something that opens a sentence
const mkBreak = greek => new RegExp(`(${greek ? '[.?!;·]' : '[.?!]'}[»*)\\u2019"]*)( +)(?=(?:\\[\\d{3,5}[A-D]?\\] *)*[«*A-ZÆŒ\\u0391-\\u03A9\\u1F08-\\u1FFF])`, 'g');

export function segment(text, greek = false) {
  const BREAK = mkBreak(greek);
  const masks = [];
  const masked = text.replace(/\[(?:n|nt|cn|fn|vl|f|b|bid|sic|ed|d|var|lat|cj): [^\]]*\]|\[\d{3,5}[A-D]?\]/g, m => { masks.push(m); return `\u0001${masks.length - 1}\u0002`; });
  const out = [];
  let last = 0, m;
  BREAK.lastIndex = 0;
  while ((m = BREAK.exec(masked))) {
    const before = masked.slice(last, m.index + m[1].length);
    const tok = before.match(/([^\s.]+)\.?[»*)’"]*$/)?.[1] ?? '';
    const bare = tok.replace(/[^A-Za-zÆŒæœ]/g, '');
    // abbreviation guard (only for '.', never for ? !)
    if (m[1].startsWith('.') && (/^[A-ZÆŒ]$/.test(bare) || ABBR.has(bare.toLowerCase()))) continue;
    out.push(before);
    last = m.index + m[0].length;
  }
  out.push(masked.slice(last));
  return out.map(s => s.replace(/\u0001(\d+)\u0002/g, (_, i) => masks[i]));
}

