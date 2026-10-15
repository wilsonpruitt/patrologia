#!/bin/zsh
# Diff every API vision read (raw/pg091/api/p*.txt) against its CLLG witness (raw/pg091/cllg/ep/).
# Writes raw/pg091/api/diff/p<page>.txt (the plate stint's checklist) and api/diff/SUMMARY.tsv.
cd "${0:A:h}/../../raw/pg091" || exit 1
mkdir -p api/diff
print -r -- $'page\twords\tdisagreements\tflagged\tpct\tunsure' > api/diff/SUMMARY.tsv
for f in api/p*.txt; do
  p=${f:t:r}
  [[ -f cllg/ep/$p.txt ]] || { print -r -- "$p	no CLLG" >> api/diff/SUMMARY.tsv; continue; }
  python3 ../../scripts/maximus-cllg-diff.py $f cllg/ep/$p.txt > api/diff/$p.txt 2>&1
  python3 - "$p" api/diff/$p.txt "$f" >> api/diff/SUMMARY.tsv <<'EOF'
import sys, re
p, d, t = sys.argv[1:]
m = re.search(r'words in span (\d+); disagreements (\d+); words flagged (\d+) \(([\d.]+)%\)', open(d).read())
u = open(t).read().count('?]')
print('\t'.join([p, *(m.groups() if m else ('?',) * 4), str(u)]))
EOF
done
sort -t$'\t' -k5 -rn api/diff/SUMMARY.tsv | head -12
