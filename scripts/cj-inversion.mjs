#!/usr/bin/env node
// Pattern 18 audit: does the running English render MIGNE'S printed word, or our conjecture?
//
// The rule (translation-style.md 18): "the gloss is ADDITIVE. Migne's word keeps its English,
// and our conjecture stands beside it." So the marker's quoted sense-gloss and the English
// immediately before it are supposed to be TWO DIFFERENT READINGS. When they say the same
// thing, the running text is rendering the conjecture and Migne's reading reaches nobody.
//
// ⚑ v1 of this test compared the gloss VERBATIM and found 19 sites. It was a FLOOR, not a
// total: a repair agent found two more where the echo is INFLECTED — "canst" against
// "thou canst", "does not admit" against "it admits". Exact-string tests on natural language
// have that failure mode by construction, and its direction is the dangerous one (silent
// under-reporting). This version compares CONTENT-WORD STEMS with an overlap threshold.
//
// ⛔⛔ AND IT FAILS THE OTHER WAY, WHICH IS WHY THIS SCRIPT SHORTLISTS AND NEVER DECIDES.
// Stemming erases exactly the contrast a Pattern 18 marker usually exists to record. Verified
// on 8967 after the Band C repair: every remaining flag is a FALSE POSITIVE, and each is a
// different inflectional axis the stemmer flattened —
//   0042 "hath delivered" vs gloss "will deliver"  — TENSE (and that site is the house-form control)
//   0101 "without ends"   vs gloss "without end"   — NUMBER
//   0092 "they had gone before the head" vs "the head had gone before" — WHO IS THE SUBJECT
// A [cj:] marks a printed form whose faithful English misleads, so the printed form and the
// conjecture differ most often in tense, number, case or person — precisely what a lexical
// overlap test cannot see. TREAT THE OUTPUT AS A READING LIST. The count it prints is not a
// measurement of anything and must never be quoted as one.
import fs from 'node:fs';

const dir = process.argv[3] || 'src/english/8967';
const STOP = new Set(['the','a','an','is','are','was','were','be','to','of','in','on','it','he','she','they','thou','thee','thy','his','her','their','that','this','and','or','not','for','with','by','as','shall','will','may','let','him','them','us','we','i','you','one','who','which','what','when','from','at','into','up','out','do','does','did','has','have','had']);
const stem = w => w.replace(/(ing|eth|est|ed|es|s)$/,'');
const words = s => s.toLowerCase().replace(/[^a-z\s]/g,' ').split(/\s+/).filter(w=>w && !STOP.has(w)).map(stem);

const files = fs.readdirSync(dir).filter(f=>/^\d{4}\.md$/.test(f)).sort();
let inv=0, ok=0, noExp=0;
for (const f of files) {
  const t = fs.readFileSync(`${dir}/${f}`,'utf8');
  for (const m of t.matchAll(/\[cj:\s*\*([^*]+)\*;\s*read\s*\*([^*]+)\*(?:,\s*"([^"]*)")?\s*\]/g)) {
    const [, printed, conj, gloss] = m;
    if (!gloss) { noExp++; continue; }
    const g = words(gloss);
    if (!g.length) { noExp++; continue; }
    const before = words(t.slice(Math.max(0,m.index-120), m.index)).slice(-14);
    const hit = g.filter(w => before.includes(w)).length;
    const ratio = hit / g.length;
    if (ratio >= 0.6) { inv++; console.log(`⛔ ${f} [cj: *${printed}*; read *${conj}*, "${gloss}"]  (${hit}/${g.length} of the gloss already stands in the English before it)`); }
    else ok++;
  }
}
console.log(`\n${ok+inv} glossed [cj:] · ${ok} render Migne · ${inv} render the CONJECTURE · ${noExp} carry no sense-gloss`);
