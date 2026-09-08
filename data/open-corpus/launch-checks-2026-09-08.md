# Open Corpus reading-layer launch checks — migne.app

Run 2026-09-08, against production (migne.app) right after deploy `90268871`.
See ~/open-corpus/PLAN.md Appendix F.

1. `curl -A GPTBot {work_url}` -> 200, full text, no gate. PASS (spot-checked /pl/139/canones/).
2. `curl -A GPTBot {work_url}.txt` -> 200; `.json` parses. PASS.
3. robots.txt, llms.txt, sitemap.xml, /rights, /export -> 200. PASS (all six checked live).
4. Canonical absolute https:// and equals @id in JSON-LD; JSON-LD parses. PASS (verified locally pre-deploy on multiple PL/PG works; spot-checked live).
5. /export manifest lists the newest export; R2 object downloads. NOT YET — wroot-corpus-export R2 bucket not provisioned. export/ built locally (163 works: 156 PL + 7 PG, ~3.18M English words) but not uploaded; /export page shows a placeholder EXPORT_R2_BASE_URL.
6. Sitemap URL count equals work count on disk (plus indexes). PASS (340 URLs; gen-sitemap.py walks all built .html).
7. Vercel edge-request figure noted day-before/week-after. NOT YET — check wilson-pruitts-projects dashboard in ~1 week.

## Known gap, not blocking

49 legacy low-idno PL works (13-207 numeric range, pre-dating the current
src/latin pipeline) have no source manifest on disk, so build-work-page.mjs
cannot rebuild them — they keep serving their existing pages without
canonical/JSON-LD/.txt/.json siblings until/unless their source is
recovered. Not urgent; noted in NOW.md.

## Still open

- Provision the shared `wroot-corpus-export` R2 bucket, update
  EXPORT_R2_BASE_URL in scripts/build-export-page.mjs (and the CL
  equivalent) to its real public dev URL, run scripts/upload_export_r2.sh
  for both sites, rebuild, redeploy. Outward-facing — Wilson's OK first.
- Vercel Firewall rate-limit rule (infra backstop, decision 3) — not urgent.
