#!/bin/zsh
# Fetch the PG volume PDFs ahead of the Kraken queue (pg-volumes.sh), so an archive.org outage is met
# days before the reader needs the volume, not at 4 am in the middle of the run (PG 9, 2026-11-12).
#
#   ./htr/pg-prefetch.sh [first-tome]     # e.g. 012; default: every tome without a local PDF
#
# One download at a time. Each file is checked with pdfinfo; an error page or a broken file is
# deleted and retried up to 3 rounds, an hour apart. Writes raw/pg-pdf/NNN.pdf, the path
# pg-volumes.sh looks at first. Tomes sharing a scan with their first part (007-2, 086-2, 087-2) and
# tomes with no archive.org item are skipped. Log: raw/kraken/pg-prefetch.log.
set -uo pipefail
raw=$HOME/patrologia/raw
log=$raw/kraken/pg-prefetch.log
from=${1:-000}
mkdir -p $raw/pg-pdf
tomes=($(python3 -I -c "
import json
seen = set()
for t in json.load(open('$HOME/patrologia/data/pg-tome-index.json'))['tomes']:
    ia = t.get('archiveId')
    if not ia or ia in seen or t['tome'] < '$from':
        continue
    seen.add(ia); print(t['tome'] + '|' + ia)"))
for round in 1 2 3; do
  missing=0
  for entry in $tomes; do
    tome=${entry%%|*} ia=${entry#*|}
    pdf=$raw/pg-pdf/$tome.pdf
    have=""
    for c in $raw/pg$tome/$tome.pdf $pdf $HOME/scriptura/studies/sensus/sources/editions/pg$tome.pdf; do
      [[ -s $c ]] && pdfinfo $c >/dev/null 2>&1 && { have=$c; break; }
    done
    [[ -n $have ]] && continue
    [[ -e $pdf.part ]] && continue           # the queue itself is fetching this one
    name=$(curl -sf "https://archive.org/metadata/$ia/files" | python3 -I -c "
import json, sys
fs = [f for f in json.load(sys.stdin).get('result', []) if f['name'].lower().endswith('.pdf') and not f['name'].endswith('_text.pdf')]
print(max(fs, key=lambda f: int(f.get('size', 0)))['name'] if fs else '')" 2>/dev/null)
    if [[ -z $name ]]; then echo "$(date '+%m-%d %H:%M') round $round: no PDF listed for $tome ($ia)" >> $log; missing=1; continue; fi
    if curl -sfL --retry 3 -o $pdf.pre "https://archive.org/download/$ia/${name// /%20}" && pdfinfo $pdf.pre >/dev/null 2>&1; then
      mv $pdf.pre $pdf
      echo "$(date '+%m-%d %H:%M') got  $tome ($(pdfinfo $pdf | awk '/^Pages:/{print $2}') pages, $ia)" >> $log
    else
      rm -f $pdf.pre; missing=1
      echo "$(date '+%m-%d %H:%M') round $round: FAILED $tome ($ia)" >> $log
    fi
    sleep 2
  done
  (( missing )) || { echo "$(date '+%m-%d %H:%M') all PDFs in hand" >> $log; exit 0; }
  (( round < 3 )) && sleep 3600
done
echo "$(date '+%m-%d %H:%M') finished with failures: see above" >> $log
