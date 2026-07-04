#!/usr/bin/env node
// extract-greek-gt.mjs — pull the region-level ground-truth text from a Calfa
// task2 pageXML (line-level Greek transcription).
//
// Each TextRegion carries both per-TextLine TextEquiv/Unicode entries AND one
// region-level TextEquiv/Unicode (the full combined transcription, appearing
// after the last </TextLine>, before </TextRegion>). The region-level block
// is the authoritative one to use as ground truth: it already reflects the
// intended reading order, and its line-final hyphens mark real print-time
// word breaks (must be stripped, not treated as literal hyphens).
//
// Usage: node extract-greek-gt.mjs <xml-file>

import { readFileSync } from 'node:fs';

const [, , file] = process.argv;
if (!file) {
  console.error('Usage: node extract-greek-gt.mjs <xml-file>');
  process.exit(1);
}

const xml = readFileSync(file, 'utf8');
const lastLineEnd = xml.lastIndexOf('</TextLine>');
const regionEnd = xml.indexOf('</TextRegion>', lastLineEnd);
const tail = xml.slice(lastLineEnd, regionEnd);
const m = tail.match(/<Unicode>([\s\S]*?)<\/Unicode>/);
if (!m) {
  console.error(`no region-level Unicode block found in ${file}`);
  process.exit(1);
}

// Dehyphenate: a line ending in "-" continues directly into the next line.
const rawLines = m[1].split('\n');
let out = '';
for (const line of rawLines) {
  const trimmed = line.trim();
  if (!trimmed) continue;
  if (out.endsWith('-')) {
    out = out.slice(0, -1) + trimmed;
  } else if (out.length) {
    out += ' ' + trimmed;
  } else {
    out = trimmed;
  }
}
console.log(out.replace(/\s+/g, ' ').trim());
