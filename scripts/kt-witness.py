#!/usr/bin/env python3
"""Second-witness diff for a Kraken work: a digital text of (part of) the work vs the rule-passed Kraken lines.

    python3 scripts/kt-witness.py <work> <witness.html|txt> [...more] [--label myriobiblos]

Writes raw/kraken/<work>/checked/WITNESS.tsv (page, line, base, checked, kind, note) in the DOUBTS.tsv shape, and
appends those rows to checked/DOUBTS.tsv (creating checked/ as a copy of ruled/ if it is absent), so that
`kt-scaffold.py <work> … --checked` shows them to the translator as open doubts.

Comparison is on BASE LETTERS only (accents, breathings, iota subscript, case and final sigma stripped): the
myriobiblos texts are monotonic and accent-poor, so any accent difference is noise. A row is emitted only where the
two disagree on letters, in a small replace block (≤3 tokens a side); larger blocks are eye-skips or edition
differences in the witness and are counted, not listed. The witness is NEVER the base (Maximus queue, method:
1–2 defects per 100 words); a row is a pointer for the translator, settled on the image like any other.
Written 2026-11-06 for maximus-opuscula (ad Marinum, myriobiblos prosmarinon1–4).
"""
import collections, difflib, html, os, re, shutil, sys, unicodedata as ud
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
args = [a for a in sys.argv[1:] if not a.startswith('--')]
label = 'myriobiblos'
if '--label' in sys.argv: label = sys.argv[sys.argv.index('--label') + 1]; args.remove(label)
work, wits = args[0], args[1:]
K = ROOT / 'raw/kraken' / work
BASE = K / 'ruled' if (K / 'ruled').is_dir() else K / 'text'
CHK = K / 'checked'

def norm(w):
    w = ud.normalize('NFD', w.lower())
    w = ''.join(c for c in w if 'α' <= c <= 'ω' or c == 'ς')
    return w.replace('ς', 'σ')

# Kraken tokens with their (page, line)
ktoks = []   # (norm, raw, page, line)
for f in sorted(BASE.glob('p-*.txt')):
    for i, l in enumerate(open(f, encoding='utf-8'), start=1):
        for t in l.split():
            n = norm(t)
            if n: ktoks.append((n, t, f.stem, i))
# a word hyphenated at a line end (πο- / θεῖ) → join for comparison, credit the first line
joined = []
i = 0
while i < len(ktoks):
    n, t, p, ln = ktoks[i]
    if t.endswith(('-', '‐', '¬')) and i + 1 < len(ktoks):
        n2, t2, _, _ = ktoks[i + 1]
        joined.append((n + n2, t + t2, p, ln)); i += 2
    else:
        joined.append((n, t, p, ln)); i += 1
ktoks = joined
kn = [k[0] for k in ktoks]
index = collections.defaultdict(list)
for j in range(len(kn) - 3):
    index[tuple(kn[j:j + 4])].append(j)

def witness_tokens(path):
    t = open(path, encoding='utf-8', errors='replace').read()
    if path.endswith(('.html', '.htm')):
        t = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', t, flags=re.S)
        t = html.unescape(re.sub(r'<[^>]+>', ' ', t))
    t = re.sub(r'\(\s*[^()\s]{1,3}\s*\)', ' ', t)   # the witness's own note calls (α), (10), (β)
    out = []
    for w in t.split():
        n = norm(w)
        if n: out.append((n, w))
    return out

rows, stats = [], collections.Counter()
def blocks(wt, size=500):
    # a witness file may join pieces Migne prints apart (myriobiblos "Τόμοι δογματικοί"): locate each block on its own
    for i in range(0, len(wt), size): yield wt[i:i + size]

for wpath in wits:
  for bi, wt in enumerate(blocks(witness_tokens(wpath))):
      wn = [w[0] for w in wt]
      # locate the witness in the Kraken stream by 4-gram anchors → median offset
      offs = []
      for j in range(0, len(wn) - 3, 5):
          hits = index.get(tuple(wn[j:j + 4]), [])
          if len(hits) == 1: offs.append(hits[0] - j)
      if len(offs) < 5:
          print(f'{os.path.basename(wpath)}#{bi}: not located ({len(offs)} anchors)'); continue
      offs.sort(); med = offs[len(offs) // 2]
      lo = max(0, med - 60); hi = min(len(kn), med + len(wn) + 60)
      sm = difflib.SequenceMatcher(None, kn[lo:hi], wn, autojunk=False)
      matched = sum(b.size for b in sm.get_matching_blocks())
      first = ktoks[lo + sm.get_matching_blocks()[0].a]
      print(f'{os.path.basename(wpath)}#{bi}: {len(wn)} words, located at {first[2]}:{first[3]}, {matched} matched ({matched / len(wn):.1%})')
      for op, a1, a2, b1, b2 in sm.get_opcodes():
          if op == 'equal': continue
          if (a2 - a1) > 3 or (b2 - b1) > 3:
              stats['large block (skip/edition)'] += 1; continue
          if op == 'insert':   # witness has words Kraken lacks: a dropped word (or a witness addition)
              k = ktoks[lo + max(a1 - 1, 0)]
              rows.append((k[2], k[3], k[1], k[1], 'witness', f'{label} has + {" ".join(w[1] for w in wt[b1:b2])} after this word'))
              stats['insert'] += 1; continue
          ks = ktoks[lo + a1: lo + a2]
          wtxt = ' '.join(w[1] for w in wt[b1:b2]) or '(nothing)'
          # punctuation-only / hyphen-split artefacts: same letters overall → skip
          if ''.join(k[0] for k in ks) == ''.join(wn[b1:b2]):
              stats['split/join only'] += 1; continue
          for k in ks[:1]:
              rows.append((k[2], k[3], ' '.join(x[1] for x in ks), ' '.join(x[1] for x in ks), 'witness',
                           f'{label} reads {wtxt}'))
          stats[op] += 1

CHK.mkdir(exist_ok=True)
for f in BASE.glob('p-*.txt'):
    if not (CHK / f.name).exists(): shutil.copy(f, CHK / f.name)
hdr = 'page\tline\tbase\tchecked\tkind\tnote\n'
rows.sort(key=lambda r: (r[0], r[1]))
with open(CHK / 'WITNESS.tsv', 'w') as o:
    o.write(hdr); o.writelines('\t'.join(map(str, r)) + '\n' for r in rows)
dpath = CHK / 'DOUBTS.tsv'
old = [l for l in open(dpath)][1:] if dpath.exists() else []
old = [l for l in old if '\twitness\t' not in l]   # idempotent: replace earlier witness rows
with open(dpath, 'w') as o:
    o.write(hdr); o.writelines(old); o.writelines('\t'.join(map(str, r)) + '\n' for r in rows)
print(f'{len(rows)} witness rows → {CHK / "WITNESS.tsv"} (and DOUBTS.tsv);', dict(stats))
