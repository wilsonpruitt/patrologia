#!/usr/bin/env node
// CER/WER scorer for the Phase 3 OCR benchmark.
// Usage: node score.mjs <hyp-file> <ref-file>
//   or:  import { cer, wer, score } from './score.mjs'

import { readFileSync } from 'node:fs';

function normalize(s) {
  return s.normalize('NFC');
}

// Levenshtein edit distance over an arbitrary array of tokens (chars or words).
function editDistance(a, b) {
  const m = a.length, n = b.length;
  let prev = new Array(n + 1);
  let curr = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        curr[j] = prev[j - 1];
      } else {
        curr[j] = 1 + Math.min(prev[j - 1], prev[j], curr[j - 1]);
      }
    }
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}

function cer(hyp, ref) {
  const h = normalize(hyp);
  const r = normalize(ref);
  const dist = editDistance(Array.from(h), Array.from(r));
  return r.length === 0 ? (h.length === 0 ? 0 : 1) : dist / Array.from(r).length;
}

function wer(hyp, ref) {
  const h = normalize(hyp).split(/\s+/).filter(Boolean);
  const r = normalize(ref).split(/\s+/).filter(Boolean);
  const dist = editDistance(h, r);
  return r.length === 0 ? (h.length === 0 ? 0 : 1) : dist / r.length;
}

function score(hyp, ref) {
  return { cer: cer(hyp, ref), wer: wer(hyp, ref) };
}

// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  const [, , hypPath, refPath] = process.argv;
  if (!hypPath || !refPath) {
    console.error('Usage: node score.mjs <hyp-file> <ref-file>');
    process.exit(1);
  }
  const hyp = readFileSync(hypPath, 'utf8');
  const ref = readFileSync(refPath, 'utf8');
  const result = score(hyp, ref);
  console.log(JSON.stringify({
    hyp: hypPath,
    ref: refPath,
    cer: +(result.cer * 100).toFixed(3),
    wer: +(result.wer * 100).toFixed(3),
  }, null, 2));
}

export { cer, wer, score, normalize, editDistance };
