#!/bin/zsh
# The whole PG in volume order through Kraken (Scriptura G2, ruled by Wilson 2026-11-10). Unattended,
# resumable, one tome at a time:
#   1. PDF: a local copy if one exists (raw/pgNNN/NNN.pdf, raw/pg-pdf/NNN.pdf, Scriptura's editions/),
#      else the largest PDF of the tome's archive.org item (data/pg-tome-index.json; 132 of 167
#      tomes matched, the 35 unmatched are logged and skipped).
#   2. pg-ocr.sh on every page -> raw/kraken/pg-NNN/text (the region filter keeps the Greek columns).
#   3. disk: page PNGs deleted (re-render from the PDF), Kraken XML gzipped; a DONE marker written.
#
#   ./htr/pg-volumes.sh            # from the first tome without DONE
#   touch ~/patrologia/raw/kraken/STOP   # stops cleanly after the current tome
# Log: raw/kraken/pg-volumes.log. Tomes already read whole elsewhere are skipped by SKIP below.
set -uo pipefail
here=${0:A:h}
raw=$HOME/patrologia/raw
k=$raw/kraken
log=$k/pg-volumes.log
mkdir -p $raw/pg-pdf
SKIP=(013 014)   # Greek pages done 2026-11-10 as origen-pg013/-pg014
tomes=($(python3 -I -c "
import json
for t in json.load(open('$HOME/patrologia/data/pg-tome-index.json'))['tomes']:
    print(t['tome'] + '|' + (t.get('archiveId') or '-'))"))
for entry in $tomes; do
  tome=${entry%%|*} ia=${entry#*|}
  out=$k/pg-$tome
  [[ -e $k/STOP ]] && { echo "$(date '+%m-%d %H:%M') STOP file found, stopping before $tome" >> $log; exit 0; }
  [[ -e $out/DONE ]] && continue
  (( ${SKIP[(Ie)$tome]} )) && continue
  # two parts of one tome sharing one scan (007, 086, 087): the second part is covered by the first
  if [[ $tome == *-2 && $ia != - && -e $k/pg-${tome%-2}-1/DONE ]] && grep -q "^${tome%-2}-1|$ia\$" <<< "${(F)tomes}"; then
    echo "covered by pg-${tome%-2}-1: same archive.org scan" > $out/DONE 2>/dev/null || { mkdir -p $out; echo "covered by pg-${tome%-2}-1" > $out/DONE; }; continue
  fi
  pdf=""
  for c in $raw/pg$tome/$tome.pdf $raw/pg-pdf/$tome.pdf $HOME/scriptura/studies/sensus/sources/editions/pg$tome.pdf; do
    [[ -s $c ]] && { pdf=$c; break; }
  done
  if [[ -z $pdf ]]; then
    if [[ $ia == - ]]; then echo "$(date '+%m-%d %H:%M') SKIP $tome: no archive.org item" >> $log; continue; fi
    name=$(curl -s "https://archive.org/metadata/$ia/files" | python3 -I -c "
import json, sys
fs = [f for f in json.load(sys.stdin).get('result', []) if f['name'].lower().endswith('.pdf') and not f['name'].endswith('_text.pdf')]
print(max(fs, key=lambda f: int(f.get('size', 0)))['name'] if fs else '')")
    if [[ -z $name ]]; then echo "$(date '+%m-%d %H:%M') SKIP $tome: no PDF in $ia" >> $log; continue; fi
    pdf=$raw/pg-pdf/$tome.pdf
    echo "$(date '+%m-%d %H:%M') get  $tome $ia/$name" >> $log
    curl -sfL --retry 3 -o $pdf.part "https://archive.org/download/$ia/${name// /%20}" && mv $pdf.part $pdf \
      || { echo "$(date '+%m-%d %H:%M') FAILED download $tome" >> $log; rm -f $pdf.part; continue; }
  fi
  n=$(pdfinfo $pdf 2>/dev/null | awk '/^Pages:/{print $2}')
  [[ -z $n ]] && { echo "$(date '+%m-%d %H:%M') FAILED $tome: unreadable PDF (deleted; rerun fetches it again)" >> $log; [[ $pdf == $raw/pg-pdf/* ]] && rm -f $pdf; continue; }
  echo "$(date '+%m-%d %H:%M') start $tome ($n pages, $pdf)" >> $log
  if $here/pg-ocr.sh $pdf 1 $n $out >> $out.run.log 2>&1; then
    rm -f $out/pages/p-*.png
    gzip -q $out/xml/*.xml 2>/dev/null
    echo "$n pages, $(date '+%Y-%m-%d %H:%M'), $pdf" > $out/DONE
    echo "$(date '+%m-%d %H:%M') done  $tome ($(ls $out/text | wc -l | tr -d ' ') pages)" >> $log
  else
    echo "$(date '+%m-%d %H:%M') FAILED $tome, see $out.run.log and $out/kraken.log" >> $log
  fi
done
echo "$(date '+%m-%d %H:%M') queue finished" >> $log
