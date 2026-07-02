# Patrologia

English translation of Migne's Patrologia Latina (221 vols) + Patrologia Graeca (161 vols, 167 tomes).
Wroot Press capstone. See `PLAN.md` for the full phase plan.

## Layout

- `data/volumes.json` — the volume registry: every PL/PG tome with all known source links
  (patristica.net's Google Books / archive.org / Gallica links + `archiveSupplements` discovered 2026-07-02).
  Rebuild: `node scripts/build-volumes.mjs` (parses `raw/html/`, merges `data/archive-supplements.json`).
- `data/archive-supplements.json` — archive.org holdings patristica.net doesn't know about.
  Rebuild: `node scripts/build-supplements.mjs` (reads `data/cache/*.json` item file lists).
- `raw/html/` — snapshots of patristica.net index pages (fetched 2026-07-02; bare subdomains
  `latina.patristica.net` have broken TLS — use `www.patristica.net/latina/`).

## Phase 0 findings (2026-07-02)

- **No volume is Google-Books-only anymore.** patristica.net's link lists are stale; current
  archive.org coverage is total:
  - PG: item `patrologia-volumes` (348 GB, uploaded 2019) holds ALL PG scans as `NNN.pdf` /
    `NNN{a,b,c}.pdf` (parts map to patristica.net's `NNN-1/2/3`), except 075 →
    `bim_early-english-books-1641-1700_patrologiae-cursus-completus-_1859_75` (VERIFY series on download).
  - PL: item `PatrologiaLatina` (99.6 GB) holds 85 vols; the rest have per-volume items
    (`patrologiaecur{NNN}mign` naming family); corpus-level text mirror
    `patrologia-latina_1-221` → `Patrologia_Latina_1-221.zip` (351 MB, all 221 vols as text PDFs).
- **Downloads pending storage:** local disk was at 1.9 GB free on 2026-07-02. Nothing fetched yet.
  When storage exists: always `{id}_jp2.zip` or direct PDF, never IIIF bursts (rate-limited).
