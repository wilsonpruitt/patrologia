#!/usr/bin/env node
// extract-gt.mjs — pull plain-text ground truth for one Migne column (all quarters
// A-D) out of a Corpus Corporum TEI file, keyed by the <pb n="NNNNA"/> markers.
//
// Usage: node extract-gt.mjs <tei-file> <col>
// Prints plain text from <pb n="{col}A"/> (or the first pb at that column) up to
// (not including) the next column's first pb. Strips tags, keeps footnote-callout
// numbers that are inline in the body (e.g. "(29)") since those ARE in the TEI.

import { readFileSync } from 'node:fs';

const [, , file, colArg] = process.argv;
if (!file || !colArg) {
  console.error('Usage: node extract-gt.mjs <tei-file> <col>');
  process.exit(1);
}
const col = String(colArg).padStart(4, '0');
const nextCol = String(Number(colArg) + 1).padStart(4, '0');

const xml = readFileSync(file, 'utf8');
const startMatch = xml.match(new RegExp(`<pb n="${col}[A-D]?"`));
if (!startMatch) {
  console.error(`column ${col} not found in ${file}`);
  process.exit(1);
}
const start = startMatch.index;
const endMatch = xml.slice(start + 1).match(new RegExp(`<pb n="${nextCol}A?"`));
const end = endMatch ? start + 1 + endMatch.index : xml.length;

let chunk = xml.slice(start, end);
// drop the pb tags themselves, then strip all remaining markup
chunk = chunk.replace(/<pb[^/]*\/>/g, ' ');
chunk = chunk.replace(/<[^>]+>/g, ' ');
// collapse entities/whitespace
chunk = chunk.replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

console.log(chunk);
