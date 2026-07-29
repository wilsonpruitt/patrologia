#!/usr/bin/env node
// Polarity-check ledger. A work that was never checked must not look like a work
// that was checked and came back clean — that ambiguity is what let 11064's 41
// sites sit unnoticed through two prior verification passes.
//
//   node scripts/polarity-record.mjs --gate            list englished works with NO record (exit 1 if any)
//   node scripts/polarity-record.mjs --gate --quiet    exit code only, for a pre-deploy hook
//   node scripts/polarity-record.mjs --import <dir>    backfill records from a sweep's unit JSONs
//   node scripts/polarity-record.mjs <idno> --chunks N --sites N [--note "..."]
//
// Records live in data/polarity/<idno>.json. `sites: 0` is a real, valuable result —
// it means read and clear. Absence of a file means NOT READ, and the gate says so.

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const REC = join(ROOT, 'data/polarity')
const argv = process.argv.slice(2)
const flag = (n) => argv.includes(n)
const val = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? argv[i + 1] : d }

if (!existsSync(REC)) mkdirSync(REC, { recursive: true })

// NOT `/^\d+$/` — PG works are foldered by slug (src/english/joel-chronographia),
// and the first version of this gate silently skipped the only one on the site.
// A ledger that quietly omits a work is worse than no ledger: it reports "all clear"
// over the exact gap it cannot see. Take every directory that holds chunk files.
const englishedWorks = () =>
  readdirSync(join(ROOT, 'src/english'))
    .filter(d => statSync(join(ROOT, 'src/english', d)).isDirectory())
    .filter(d => readdirSync(join(ROOT, 'src/english', d)).some(f => /^\d+\.md$/.test(f)))

const recordFor = (idno) => {
  const p = join(REC, `${idno}.json`)
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : null
}

if (flag('--import')) {
  const dir = join(ROOT, val('--import'))
  const sweep = val('--sweep', dir.split('/').filter(Boolean).pop())
  const acc = new Map()
  for (const f of readdirSync(dir).filter(f => /\.json$/.test(f) && !/^opus-|^recall-/.test(f))) {
    const d = JSON.parse(readFileSync(join(dir, f), 'utf8'))
    if (!d.idno) continue
    const a = acc.get(d.idno) ?? { idno: d.idno, chunksRead: 0, sites: 0, ours: 0, units: [] }
    a.chunksRead += d.chunksRead ?? 0
    a.sites += (d.findings ?? []).length
    a.ours += (d.findings ?? []).filter(x => x.side === 'ours').length
    a.units.push(f.replace('.json', ''))
    acc.set(d.idno, a)
  }
  for (const a of acc.values()) {
    const prev = recordFor(a.idno)
    writeFileSync(join(REC, `${a.idno}.json`), JSON.stringify({
      idno: a.idno, method: 'blind-opus-read-of-pair', sweep,
      chunksRead: a.chunksRead, sites: a.sites, ours: a.ours,
      units: a.units.sort(), date: val('--date', '2026-07-28'),
      note: val('--note', prev?.note ?? ''),
    }, null, 2) + '\n')
  }
  console.log(`imported ${acc.size} records from ${sweep}`)
  process.exit(0)
}

if (flag('--gate')) {
  const works = englishedWorks()
  const missing = works.filter(w => !recordFor(w))
  const withOurs = works.map(recordFor).filter(r => r && r.ours > 0)
  if (!flag('--quiet')) {
    console.log(`polarity ledger: ${works.length - missing.length}/${works.length} englished works checked`)
    if (withOurs.length) {
      console.log(`  ${withOurs.length} works had errors of OUR OWN found and fixed:`)
      console.log('  ' + withOurs.map(r => `${r.idno}(${r.ours})`).join(' '))
    }
    if (missing.length) {
      console.log(`\n  NOT POLARITY-CHECKED (${missing.length}) — these must not ship as verified:`)
      console.log('  ' + missing.join(' '))
      console.log('\n  Run the blind read (translation-runbook.md step 4a), then record it here.')
      console.log('  A clean result is recorded as sites: 0 — silence is not a pass.')
    } else {
      console.log('  every englished work has been read for this class.')
    }
  }
  process.exit(missing.length ? 1 : 0)
}

const idno = argv.find(a => /^\d+$/.test(a))
if (!idno) {
  console.error('usage: polarity-record.mjs <idno> --chunks N --sites N [--note "..."] | --gate | --import <dir>')
  process.exit(2)
}
writeFileSync(join(REC, `${idno}.json`), JSON.stringify({
  idno, method: val('--method', 'blind-opus-read-of-pair'), sweep: val('--sweep', 'ad-hoc'),
  chunksRead: Number(val('--chunks', 0)), sites: Number(val('--sites', 0)),
  ours: Number(val('--ours', 0)), units: [], date: val('--date', new Date().toISOString().slice(0, 10)),
  note: val('--note', ''),
}, null, 2) + '\n')
console.log(`recorded ${idno}`)
