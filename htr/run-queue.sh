#!/bin/zsh
# Run the Kraken OCR queue (htr/QUEUE.md) in order, unattended. Re-runnable:
# pg-ocr.sh skips pages already rendered and read. One work at a time (one
# Kraken run fills ~13 GB of the GPU budget).
set -uo pipefail
here=${0:A:h}
raw=$HOME/patrologia/raw
queue=(
  "dorotheus-doctrinae   $raw/pg088/088.pdf    @$here/queue/dorotheus-doctrinae.pages -"
  "moschus-pratum        $raw/pg087c/087c.pdf  39  173"
  "sophronius-orationes  $raw/pg087c/087c.pdf  187 298"
  "sophronius-anacreontica $raw/pg087c/087c.pdf 480 535"
  "procopius-rhetorica   $raw/pg087c/087c.pdf  9   38"
)
for entry in $queue; do
  set -- ${=entry}
  work=$1; out=$raw/kraken/$work
  echo "$(date +%H:%M) start $work"
  if $here/pg-ocr.sh $2 $3 $4 $out; then
    echo "$(date +%H:%M) done  $work ($(ls $out/text | wc -l | tr -d ' ') pages)"
  else
    echo "$(date +%H:%M) FAILED $work — see $out/kraken.log"
  fi
done
