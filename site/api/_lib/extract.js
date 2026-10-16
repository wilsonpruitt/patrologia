// Phase E2: pull one passage (a paragraph + a range of source-sentence ids) out of a BUILT work
// page, so a quote card says exactly what the reading view says. No data sidecar: the page
// the reader sees is the single source. Pure functions; no I/O (api/q.js does the fetch).
//
// Page grammar (scripts/build-work-page*.mjs): <div class="coltext latin|greek|english">, inside it
//   <span class="sm" data-p="CHUNK.PARA"> opens a paragraph, <span class="sm" data-s="1,2"> opens a
//   sentence (source ids; English may list several), <a class="anchor">473A</a> is a column mark.

const DROP = /\b(notecite|varnote|cjnote|latnote|ednote|fonscite|band)\b/;
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const decode = s => s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) => {
  if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
  return ENT[e] ?? m;
});

// → { src: [seg], en: [seg] }, seg = { p, ids:[n…], text, col }
export function segments(html) {
  const out = { src: [], en: [] };
  const re = /<(\/?)([a-zA-Z0-9]+)([^>]*)>|([^<]+)/g;
  let m, side = null, divDepth = 0, spans = [], drop = 0, p = null, col = '', cur = null, inAnchor = false, anchorTxt = '';
  const start = html.indexOf('<main');
  re.lastIndex = start < 0 ? 0 : start;
  while ((m = re.exec(html))) {
    if (m[4] !== undefined) {
      if (!side) continue;
      if (inAnchor) { anchorTxt += m[4]; continue; }
      if (!drop && cur) cur.text += decode(m[4]);
      continue;
    }
    const close = m[1] === '/', tag = m[2].toLowerCase(), attrs = m[3];
    if (tag === 'div') {
      if (!close) {
        const c = /class="([^"]*)"/.exec(attrs)?.[1] || '';
        if (!side && /\bcoltext\b/.test(c)) { side = /\benglish\b/.test(c) ? 'en' : 'src'; divDepth = 1; spans = []; drop = 0; p = null; cur = null; }
        else if (side) divDepth++;
      } else if (side && --divDepth === 0) { side = null; cur = null; }
      continue;
    }
    if (!side) continue;
    if (tag === 'span') {
      if (close) { if (spans.pop()) drop--; continue; }
      const c = /class="([^"]*)"/.exec(attrs)?.[1] || '';
      const selfEmpty = /\bsm\b/.test(c);
      if (selfEmpty) {
        const dp = /data-p="([^"]*)"/.exec(attrs)?.[1], ds = /data-s="([^"]*)"/.exec(attrs)?.[1];
        if (dp !== undefined) { p = dp; cur = null; }
        if (ds !== undefined && p !== null) {
          cur = { p, ids: ds.split(',').map(Number), text: '', col };
          out[side].push(cur);
        }
        spans.push(false);   // matched by its </span>
        continue;
      }
      const d = DROP.test(c);
      spans.push(d); if (d) drop++;
      continue;
    }
    if (tag === 'a') {
      if (!close && /class="anchor"/.test(attrs)) { inAnchor = true; anchorTxt = ''; }
      else if (close && inAnchor) { inAnchor = false; col = anchorTxt.trim(); }
      continue;
    }
    if ((tag === 'p' || tag === 'li') && cur && !drop) cur.text += ' ';
  }
  return out;
}

const tidy = s => s.replace(/\s+/g, ' ').replace(/\s+([,.;:!?»)])/g, '$1').trim();

// ref = "<chunk>.<para>.<s1>-<s2>" (or "<chunk>.<para>.<s1>"); returns null when nothing matches.
export function parseRef(ref) {
  const m = /^(\d{1,3}\.\d{1,4}[a-z]?)\.(\d{1,3})(?:-(\d{1,3}))?$/.exec(ref);
  if (!m) return null;
  const a = +m[2], b = m[3] ? +m[3] : a;
  return a <= b && b - a < 40 ? { p: m[1], a, b } : null;
}

export function passage(html, ref) {
  const r = parseRef(ref);
  if (!r) return null;
  const { src, en } = segments(html);
  const inR = s => s.p === r.p && s.ids.some(i => i >= r.a && i <= r.b);
  const S = src.filter(inR), E = en.filter(inR);
  if (!S.length || !E.length) return null;
  const join = list => tidy(list.map(s => s.text).join(' '));
  return { source: join(S), english: join(E), col: S[0].col || E[0].col || '', r };
}

export function pageInfo(html) {
  const t = decode(/<title>([^<]*)<\/title>/.exec(html)?.[1] ?? '');
  const [head, rest = ''] = t.split(' — ');
  const k = head.lastIndexOf(', ');
  return { author: k < 0 ? '' : head.slice(0, k), work: k < 0 ? head : head.slice(k + 2), cite: rest.replace(/\s*·.*$/, '') };
}
