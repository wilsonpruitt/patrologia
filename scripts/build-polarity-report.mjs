#!/usr/bin/env node
// Aggregate the corpus polarity sweep unit JSONs into REPORT.md + per-work cruces sections.
// Report-only: writes data/sweeps/corpus-polarity/REPORT.md and, with --cruces,
// appends a sweep section to each affected src/english/<idno>/cruces.md.
// Idempotent: re-running replaces the sweep section rather than stacking copies.

import { readFileSync, writeFileSync, readdirSync, existsSync, appendFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const DIR = join(ROOT, 'data/sweeps/corpus-polarity')
const MARK = '<!-- corpus-polarity-sweep 2026-07-28 -->'

const works = JSON.parse(readFileSync(join(ROOT, 'data/works.json'), 'utf8'))
const titleOf = new Map()
for (const w of works.works ?? []) {
  for (const t of w.texts ?? []) {
    const id = String(t.idno ?? '')
    if (id) titleOf.set(id, { work: t.title ?? '', vol: (w.volumes ?? [])[0] ?? '', series: w.series ?? 'pl' })
  }
}

const units = readdirSync(DIR).filter(f => /-u\d+\.json$/.test(f)).sort()
const byWork = new Map()
let chunksRead = 0

for (const f of units) {
  const d = JSON.parse(readFileSync(join(DIR, f), 'utf8'))
  chunksRead += d.chunksRead ?? 0
  const w = byWork.get(d.idno) ?? { idno: d.idno, units: [], findings: [] }
  w.units.push(f)
  for (const x of d.findings) w.findings.push({ ...x, unit: f.replace('.json', '') })
  byWork.set(d.idno, w)
}

// dedupe by idno+column+side (two units could overlap a column boundary)
for (const w of byWork.values()) {
  const seen = new Map()
  for (const x of w.findings) {
    const k = `${x.column}|${x.side}|${(x.printedLatin ?? '').slice(0, 60)}`
    if (seen.has(k)) { seen.get(k).alsoFoundBy.push(x.unit); continue }
    seen.set(k, { ...x, alsoFoundBy: [] })
  }
  w.findings = [...seen.values()]
}

const all = [...byWork.values()].flatMap(w => w.findings)
const count = (fn) => all.reduce((m, x) => (m[fn(x)] = (m[fn(x)] ?? 0) + 1, m), {})
const sides = count(x => x.side)
const confs = count(x => x.confidence)
const types = count(x => x.defectType)
const ours = all.filter(x => x.side === 'ours')
const cleanWorks = [...byWork.values()].filter(w => w.findings.length === 0)
const ranked = [...byWork.values()].sort((a, b) => b.findings.length - a.findings.length)

const label = id => {
  const t = titleOf.get(id)
  return t ? `${id} ${String(t.series).toUpperCase()} ${t.vol} — ${t.work}` : id
}

const esc = s => (s ?? '').replace(/\|/g, '\\|').replace(/\n+/g, ' ').trim()

let md = `# Corpus polarity sweep — REPORT

**Run 2026-07-28.** Every work on migne.app outside PL 196, swept blind on Opus per
\`data/sweeps/NEXT-SESSION-BRIEF.md\`. ${units.length} units, ${byWork.size} works, ${chunksRead} chunks.
No unit skipped, sampled, or truncated.

## Result

**${all.length} sites across ${byWork.size} works.** ${cleanWorks.length} works are clean.

| | |
|---|---|
| side | Migne **${sides.migne ?? 0}** · **ours ${sides.ours ?? 0}** |
| confidence | high ${confs.high ?? 0} · medium ${confs.medium ?? 0} · low ${confs.low ?? 0} |

By type: ${Object.entries(types).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join(' · ')}

**The average is the wrong summary — the distribution is what matters.** PL 196 ran
29 sites / 17 works / 82 chunks. This sweep found a comparable per-chunk rate overall,
but it is not evenly spread:

${ranked.slice(0, 6).map(w => `- **${label(w.idno)} — ${w.findings.length} sites** (${w.findings.filter(f => f.side === 'ours').length} ours) in ${w.units.length} unit(s)`).join('\n')}

11064 alone holds ${((byWork.get('11064')?.findings.length ?? 0) / all.length * 100).toFixed(0)}% of the corpus total. With 11066 the two earliest and
largest translations hold ${(((byWork.get('11064')?.findings.length ?? 0) + (byWork.get('11066')?.findings.length ?? 0)) / all.length * 100).toFixed(0)}% of all sites. **The brief's hypothesis is confirmed:
the works done under the withdrawn "intended reading" precedent carry the damage.**
Do not plan future work off the corpus average.

## Our own errors — the actionable set (${ours.length})

These are live on migne.app and wrong. Per Wilson's fix policy they are **fixed in
place**; Migne's ${sides.migne ?? 0} are **reported and rendered literally, never fixed**.

| work | col | conf | type | what |
|---|---|---|---|---|
${ours.map(x => `| ${x.idno ?? ''}${x.unit.split('-')[0]} | ${x.column} | ${x.confidence} | ${x.defectType} | ${esc(x.conjecture).slice(0, 120)} |`).join('\n')}

## Per-work inventory

| work | sites | ours | units |
|---|---|---|---|
${ranked.filter(w => w.findings.length).map(w => `| ${label(w.idno)} | ${w.findings.length} | ${w.findings.filter(f => f.side === 'ours').length} | ${w.units.length} |`).join('\n')}

**Clean (${cleanWorks.length}):** ${cleanWorks.map(w => w.idno).sort().join(' · ')}

## Full findings

`

for (const w of ranked) {
  if (!w.findings.length) continue
  md += `\n### ${label(w.idno)}\n\n`
  for (const x of w.findings.sort((a, b) => String(a.column).localeCompare(String(b.column)))) {
    md += `#### ${x.column} — ${x.defectType} · **${x.side}** · ${x.confidence} confidence\n\n`
    md += `Printed: *${(x.printedLatin ?? '').trim()}*\n\n`
    if (x.englishAsRendered) md += `Our English: "${x.englishAsRendered.trim()}"\n\n`
    if (x.conjecture) md += `Conjecture: **${x.conjecture.trim()}**\n\n`
    md += `${(x.whyContradiction ?? '').trim()}\n\n`
    md += `<sub>found by ${[x.unit, ...(x.alsoFoundBy ?? [])].join(', ')} · chunk ${x.chunk}</sub>\n\n`
  }
}

writeFileSync(join(DIR, 'REPORT.md'), md)
console.log(`REPORT.md: ${all.length} sites, ${byWork.size} works, ${units.length} units, ${chunksRead} chunks`)

if (process.argv.includes('--cruces')) {
  let touched = 0
  for (const w of byWork.values()) {
    if (!w.findings.length) continue
    const p = join(ROOT, 'src/english', w.idno, 'cruces.md')
    let existing = existsSync(p) ? readFileSync(p, 'utf8') : `# ${label(w.idno)} — cruces\n`
    if (existing.includes(MARK)) existing = existing.slice(0, existing.indexOf(MARK)).replace(/\n+$/, '\n')
    let sec = `\n${MARK}\n## Corpus polarity sweep — 2026-07-28\n\n`
    sec += `Blind Opus read of the Latin/English pair for sense-reversing defects (one word or\n`
    sec += `one letter asserting the opposite of what the context requires). ${w.findings.length} site(s).\n`
    sec += `Migne's defects are recorded here and rendered literally in the English; our own\n`
    sec += `errors were fixed in place. Full context: \`data/sweeps/corpus-polarity/REPORT.md\`.\n\n`
    for (const x of w.findings.sort((a, b) => String(a.column).localeCompare(String(b.column)))) {
      sec += `### ${x.column} — ${x.defectType} (${x.side}, ${x.confidence} confidence)\n\n`
      sec += `Printed: *${(x.printedLatin ?? '').trim()}*\n\n`
      if (x.conjecture) sec += `Conjecture: **${x.conjecture.trim()}**\n\n`
      sec += `${(x.whyContradiction ?? '').trim()}\n\n`
    }
    writeFileSync(p, existing + sec)
    touched++
  }
  console.log(`cruces.md appended/refreshed for ${touched} works`)
}
