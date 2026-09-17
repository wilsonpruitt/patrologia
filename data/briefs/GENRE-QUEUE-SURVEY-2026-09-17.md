# Genre survey of the verified-none frontier — queue brief

Per `next-session-resume.md` (2026-09-16 banner, step 4): survey `data/triage/authors-status.json`
for `status: "none"`, bucket by genre, name pilot works, flag new conventions. Research only —
no translation. PL only; PG has no `authors-status.json` entries (Calfa corpus is triaged
separately, see `pg-paired-pilot.md`).

**The frontier as measured today: 76 authors, 8,487,884 words** (`authors-status.json` is dated
2026-07-02 and undercounts by 3 authors / ~190K words against a fresh filter — the file itself is
stale, not the ruling). Full per-author, per-work dump: scratchpad `frontier-dump.txt` (regenerate
with the one-off Python filter in this session's transcript if needed — no script was added to the
repo for this, since it is a single `status == "none"` filter over an existing file).

Genre was read off each work's Latin title (`data/cc-pl-index.json` → `texts[].name`), not looked
up externally — for the ~20 authors nobody will have heard of, that is a title-pattern inference,
not a scholarly classification. Flag it if a pilot's actual content doesn't match its bucket.

## Buckets, by word count

| Bucket | Words (approx) | Authors | Notes |
|---|---:|---:|---|
| Biblical commentary/exegesis | ~2.9M | 14 | The default genre — same conventions as everything already shipped. Not a new variety; listed for completeness. Gerhohus's two Psalms commentaries alone are 872K. |
| Chronicles/historiography | ~1.1M | 16 | *Chronicon*, *Historia*, *Gesta*, *Pantheon*. New: regnal/annal dating conventions, occasional verse insets (Godefridus). |
| Sermons | ~660K | 9 | Concentrated in one author (Martinus Legionensis, 576K across 3 works). Mechanically identical to prose commentary — no new marker. |
| Letters | ~520K | 9 | Concentrated in Wibaldus Corbeiensis (133K) and Philippus de Harveng (70K). No new marker; letters already ship inside larger corpora (e.g. Bonaventure). |
| Hagiography | ~430K | 20+ | *Vita*, *Passio*, *Miracula*, *Acta translationis*. Most works are small (2–35K); this bucket is wide, not deep — good for short pilots. No new marker. |
| Liturgical/office commentary | ~280K | 4 | Sicardus's *Mitrale* (155K) and Belethus's *Rationale* (62K) are major, influential texts — *not* small pilots. |
| Canon law / monastic rule / capitularies | ~245K | 7 | *Poenitentiale*, *Capitulare*, *Regula*, *Constitutiones*. Numbered-clause structure, same as Sentences-type works already handled elsewhere in the corpus. |
| Scholastic sententiae | ~238K | 3 | Robertus Pullus, Taio, Bandinus. Numbered `<div>` sections — same pattern as `sententiae-daf` (Lombard), already proven outside this repo. |
| Liturgical ordines (*Ordo Romanus*) | ~97K | 2 | Jacobus Caietanus, Petrus Amelius. Distinct rubric/prayer alternation; Migne's own footnote numbers are already inline (see below) — not a new problem. |
| Martyrologies | ~101K | 4 | Ado, Usuardus, Wandalbertus, + 1 anonymous. Usuardus is the historically important one (template for the later Roman Martyrology). Calendar-day divs, not tables — chunker should be fine structurally; the new work is a **translation convention** for Roman calendar dates (Kalends/Nones/Ides), not a chunker fix. |
| Doctrinal/polemical treatises | ~220K | 6 | *De haeresibus*, *Contra haereticos*, Gregorian-reform *Apologeticus* pieces. No new marker; register work only (controversialist Latin, proper-name-heavy). |
| Verse/hymns | <5K, scattered | 8+ | No standalone verse work of any size — a few hundred words each, usually appended to a prose work by the same author. Not worth a dedicated pilot; pick it up opportunistically when its host prose work is translated, and apply the **open verse-lineation issue** (below) then. |
| Musical/computistical | ~15K | 2 | Remigius *De musica*, Wilhelmus *Musica* + *Praefatio in sua astronomica*. Technical vocabulary (modes, intervals) — small, low-priority curiosity pilots. |

(Buckets don't sum to 8.49M exactly — a handful of works are cross-listed, e.g. *Historia
Compostellana* under both its named authors, and TEI titles that don't cleanly signal genre — e.g.
Wernerus's *Libri deflorationum*, a florilegium, ~212K — are left unbucketed above and are their
own long tail.)

## Recommended pilots, smallest genuinely new problem first

1. **Canon law — Egbertus Eboracensis, *Poenitentiale* (idno 8382, 13,082w).** Plain prose,
   confessor's-manual dialogue form (`sources/pl/tei/8382.xml` checked this session — no numbered
   canons in this particular text, straight `<div1>`/`<p>`). Cheapest way to prove the bucket
   ships clean with zero new machinery.
2. **Martyrology — Usuardus Sangermanensis, *Martyrologium* (idno 9198, first recension, 8,345w;
   idno 9215, second, 17,773w).** Checked this session (`9215.xml`): one `<div1>` per calendar day,
   headed by the Roman date (`Kalendis Die 1.`, `VI Non. Die 2.`) — clean `<pb>`/`<p>` structure,
   no table markup, so the chunker should take it as-is. **New convention needed: how to render
   Kalends/Nones/Ides day-headings in English** (transliterate vs. convert to a modern date vs.
   both) — decide before chunking, it will recur across all four martyrologies in this frontier
   plus any later PL saints'-calendar work. Historically the highest-value pilot in the whole
   survey: Usuardus's martyrology is the direct ancestor of the modern Roman Martyrology, so this
   is a foundational, citable text, not an obscure one.
3. **Liturgical ordines — Jacobus Caietanus, *Ordo Romanus XIV* (idno 8096, 60,840w).** Checked
   this session: Migne's own numbered footnote markers (`<emph>246</emph>`, `<emph>247</emph>`
   inline in the rubric text) are present already — this is the *existing* `[cn:]` conjecture-note
   machinery, not a new layer. Real new problem is rubric-vs-spoken-text alternation (stage
   directions like *"Deinde fiat idem per ordinem"* interleaved with the prayer text itself) —
   worth one register note in `translation-style.md`, not a chunker change. Petrus Amelius's
   *Ordo Romanus XV* (idno 8100, 35,609w) is the natural second work once the convention is set.
4. **Hagiography — Joannes diaconus, *Vita S. Gregorii Magni* (idno 8047, 66,979w).** No new
   machinery at all (plain narrative prose); flagged because it's the flagship of its bucket —
   the earliest full biography of Gregory the Great, by his own deacon — the same kind of
   "worth doing even though small pilots exist elsewhere in the genre" case that Eriugena was for
   commentary. Good candidate for a "maximal" treatment later, not just a bucket-proving pilot.
5. **Chronicles — Freculphus Lexovensis, *Chronica* (idno 8868, 130,209w) or Landulfus Sagax,
   *Historia miscella* (idno 8532, 139,592w).** Not small, so not a first pilot — flagged for
   register work (regnal-year dating, proper-name-dense) before either is queued at full length.
   A genuinely small chronicle pilot doesn't exist in this frontier; the bucket is authored in a
   few large works, not many small ones.

## Open items carried, not resolved here

- **Verse lineation** (`next-session-resume.md` line ~236): TEI marks verse but the chunker runs
  the first line on from surrounding prose (already shipped wrong in 11057; open on 8975/8973
  too). This survey found the bucket is scattered, never a standalone work of size — so the fix
  doesn't block a pilot, but it will fire on nearly every chronicle and several hagiography pieces
  above (verse epitaphs, metrical vitae) the first time one is chunked. Fix before, not during, the
  first chronicle pilot.
- **Tabular layouts**: none of the four bucket types checked this session (poenitential, martyrology,
  ordo, chronicle) actually use TEI table markup — Migne's calendars and ordines are set as prose
  `<div>`s, not tables, in the Corpus Corporum encoding. The chunker risk named in the 2026-09-16
  plan didn't materialize in the pilots checked; treat as closed until a work is found that
  contradicts it.
- **`authors-status.json` is 2.5 months stale** (generated 2026-07-02) against a corpus that ships
  new works weekly. Anything ruled `ours` since July should already be excluded by `englishState`
  logic downstream, but this survey did not cross-check that — a genuine re-triage pass (not
  needed for this brief) would want the live union of `workStatus: none` against `englishState`,
  not the frozen author-level file.
