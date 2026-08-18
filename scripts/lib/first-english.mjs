// THE PRIORITY CLAIM — one definition, imported by every builder that prints it.
//
// "First English translation" is a public assertion of scholarly priority and the
// one claim on this site a reader cannot check for themselves (CLAUDE.md rule 8).
// It has now failed twice by the SAME mechanism — the claim was computed in one
// builder and written in another:
//
//  2026-08-17  build-work-page.mjs hardcoded the strong claim into every PL page
//              while build-landing.mjs computed it. Ten works asserted priority
//              with no evidence; the landing one click above told the truth.
//  2026-08-17  the fix for that MIRRORED build-landing's helper into the work page
//              instead of sharing it, and the mirror drifted immediately:
//              its PRIOR_ENGLISH set was ['full','partial','minimal','some',
//              'mostly'] — five values that appear NOWHERE in works.json, whose
//              entire vocabulary is none / copyrighted / unclear / pd-ingested /
//              null. The prior-English test therefore never fired, and 7561
//              (Vincent of Lérins, whose English Migne-era translation we
//              deliberately re-translated) and 8715 went live claiming to be the
//              first English of a text that already has one.
//
// So the rule is not "keep the two in step." The rule is that there is one of it.
// If you need the claim in a new builder, IMPORT IT. Do not copy it.

import fs from 'node:fs';
import path from 'node:path';

// The real vocabulary of works.json `translation.workStatus`, measured
// 2026-08-17: null (3262) · 'none' (1387) · 'copyrighted' (259) · 'unclear' (175)
// · 'pd-ingested' (121). Nothing else occurs. Keep these sets against THAT list —
// a set entry matching no data is not harmless, it is a test that never fires.

// A prior English exists and we re-translated deliberately. Never a first.
export const PRIOR_ENGLISH = new Set(['pd-ingested', 'copyrighted', 'elsewhere']);

// Does not affirmatively establish a verified none. Anything here — plus anything
// unrecognized — takes the weak claim.
//
// 'ours' is in this set and that is the point (2026-07-29): shipping used to
// overwrite workStatus with 'ours', which the old logic read as a first, so the
// routine act of shipping destroyed the evidence field the fail-safe reads.
// workStatus holds the TRIAGE verdict permanently; englishState:'ours' records
// that we shipped. Never conflate them again.
export const NOT_VERIFIED_NONE = new Set(['unclear', 'ours', 'partial', 'mixed', 'minimal', null, undefined]);

// PL lookup is BY IDNO, and that is load-bearing. build-landing keyed it by
// `${volume}/${title}` under a comment asserting that pair is unique. It is not:
// 176 keys collide across 472 texts, and 56 of those collisions hold records that
// DISAGREE about workStatus — so the badge could read a different work's triage
// verdict. PL 173 "Epistolae" is two works (11031, status none; 11035, untriaged),
// and the Map's last write won, so 11031 was quietly denied a claim it had earned.
// An idno is unique by construction; a human-facing title never was.
export function loadPlStatusByIdno(root) {
  const data = JSON.parse(fs.readFileSync(path.join(root, 'data/works.json'), 'utf8'));
  const byIdno = new Map();
  for (const wk of (data.works || data)) {
    const tr = wk.translation || {};
    for (const t of (wk.texts || [])) byIdno.set(String(t.idno), tr);
  }
  return byIdno;
}

// `warn` receives one human sentence whenever the weak claim is taken by default
// rather than by verdict — a silent fail-safe is how the first bug survived a
// month of deploys.
export function isFirstEnglishPL(idno, byIdno, warn = () => {}) {
  const tr = byIdno.get(String(idno));
  if (!tr) { warn(`no works.json status for ${idno} — using "New English translation"`); return false; }
  if (NOT_VERIFIED_NONE.has(tr.workStatus)) {
    warn(`${idno}: workStatus "${tr.workStatus}" is not a verified none — using "New English translation"`);
    return false;
  }
  if (PRIOR_ENGLISH.has(tr.workStatus)) {
    warn(`${idno}: workStatus "${tr.workStatus}" means a prior English EXISTS — using "New English translation"`);
    return false;
  }
  return true;
}

// PG works live outside the PL-derived works.json and claim only on an explicit
// verified none — never by defaulting, so a lookup miss cannot inherit the claim.
export const isFirstEnglishPG = work =>
  work?.translationStatus === 'none' && !!work?.translationStatusVerified;

export const badgeHtml = isFirst => isFirst
  ? '<span class="first">First English translation</span>'
  : '<span class="first fresh">New English translation</span>';
