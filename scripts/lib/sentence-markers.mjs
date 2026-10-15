// migne.app 2.0, Phase 0 (V2-PLAN.md): paragraph IDs + sentence anchors.
//
// Two inline markers, identical in form in the Latin/Greek twin and the English:
//   ⟦p4⟧   opens a paragraph. Full ID = <textIdno>.<chunk>.<para>, e.g. 9741.1.4.
//          Assigned ONCE by mark-sentences.mjs, never renumbered after a work ships;
//          a later split takes a suffix (⟦p4a⟧). Heads (## …) carry no ID.
//   ⟦s3⟧   opens the 3rd sentence of its paragraph (numbered from 1 per paragraph).
//          In the ENGLISH only, many-to-one is written ⟦s2+s3⟧ (two source sentences
//          rendered as one English sentence) and one-to-many repeats the id (⟦s2⟧ … ⟦s2⟧).
//
// A work with no markers at all is a legacy work: every check here is a no-op for it.
// The markers are a hand-off between translation time and the builders; they must never
// reach the reader (scan-raw-markers.mjs enforces that on built HTML).

export const ANY_RE = /⟦[^⟧\n]*⟧/g;
export const hasMarkers = s => s.includes('⟦');

// Strip every marker AND the single space that follows it, so "a. ⟦s2⟧ B" → "a. B"
// and "⟦p3⟧ ⟦s1⟧ Text" → "Text".
export const stripMarkers = s => s.replace(/⟦[^⟧\n]*⟧ ?/g, '');

// Split a chunk body into paragraph records. A paragraph is any non-blank line that is
// not a `## ` head (list lines count: each `- ` line is its own paragraph).
// Returns [{ id, sents: [[srcIds…], …] }] in document order, plus `problems`.
export function parseMarked(body) {
  const paras = [], problems = [];
  for (const line of body.split('\n')) {
    if (!line.trim() || /^##\s/.test(line)) continue;
    const pm = line.match(/^(?:- )?⟦p(\d+[a-z]?)⟧ /);
    if (!pm) {
      // text with sentence markers but no paragraph marker, or none at all
      problems.push(`paragraph without ⟦p⟧ marker: "${line.slice(0, 50)}…"`);
      continue;
    }
    const sents = [];
    for (const m of line.matchAll(/⟦s(\d+(?:\+s?\d+)*)⟧/g))
      sents.push(m[1].split('+').map(x => Number(x.replace(/^s/, ''))));
    const stray = stripMarkers(line).match(/⟦|⟧/);
    paras.push({ id: pm[1], sents, line, stray: !!stray });
  }
  return { paras, problems };
}

// Compare a source-language chunk with its English twin. Returns an array of error strings.
export function compareMarked(srcBody, engBody) {
  const errs = [];
  const A = parseMarked(srcBody), B = parseMarked(engBody);
  A.problems.forEach(p => errs.push(`source: ${p}`));
  B.problems.forEach(p => errs.push(`English: ${p}`));
  if (A.paras.map(p => p.id).join(',') !== B.paras.map(p => p.id).join(','))
    errs.push(`paragraph IDs differ — source ${A.paras.map(p => p.id).join(' ')} | English ${B.paras.map(p => p.id).join(' ')}`);
  const n = Math.min(A.paras.length, B.paras.length);
  for (let i = 0; i < n; i++) {
    const a = A.paras[i], b = B.paras[i], tag = `¶${a.id}`;
    if (a.stray || b.stray) errs.push(`${tag}: malformed ⟦…⟧ marker`);
    const want = a.sents.map(s => s[0]);
    if (want.some((x, j) => x !== j + 1)) errs.push(`${tag}: source sentence ids not 1..n (${want.join(',')})`);
    // flatten the English: each marker covers the ids it names; a repeated id (one-to-many)
    // is allowed only when adjacent; ids must be non-decreasing and cover 1..n with no gap.
    const flat = b.sents.flat();
    let prev = 0, ok = true;
    for (const x of flat) { if (x !== prev && x !== prev + 1) { ok = false; break; } prev = x; }
    const covered = [...new Set(flat)].sort((p, q) => p - q);
    if (!ok) errs.push(`${tag}: English sentence ids out of order or skipping (${flat.join(',')})`);
    else if (covered.join(',') !== want.join(','))
      errs.push(`${tag}: English covers sentences ${covered.join(',')} but the source has ${want.join(',')} (orphan or missing marker)`);
    for (const grp of b.sents) {
      const sorted = grp.every((x, j) => j === 0 || x === grp[j - 1] + 1);
      if (!sorted) errs.push(`${tag}: merged marker ⟦s${grp.join('+')}⟧ must join consecutive sentences`);
    }
  }
  return errs;
}
