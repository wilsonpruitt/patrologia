#!/bin/zsh
# Greek OCR for PG pages: render -> regions (Calfa YOLO) -> Kraken -> region filter.
#
#   ./pg-ocr.sh <volume.pdf> <first-pdf-page> <last-pdf-page> <out-dir> [model]
#   ./pg-ocr.sh <volume.pdf> @<pages.txt> - <out-dir> [model]   (one pdf page per line)
#
# Out: <out-dir>/text/p-NNNN.txt, the Greek column(s) one printed line per
# line, plus pages/, regions.json, xml/ for audit. Model defaults to the
# PG 88-validated fine-tune (CER 0.50-1.08% on gap pages, RESULTS.md
# 2026-10-17). Every page still gets the plate read before shipping.
set -euo pipefail
pdf=$1 first=$2 last=$3 out=$4
model=${5:-$HOME/patrologia/htr/models/pg-greek-cllg-ft-v1.safetensors}
here=${0:A:h}
mkdir -p $out/pages $out/xml
if [[ $first == @* ]]; then pages=($(<${first#@})); else pages=($(seq $first $last)); fi
for p in $pages; do
  png=$out/pages/p-$(printf %04d $p)  # fixed width: pdftoppm's own padding follows the pdf's page count
  [[ -e $png.png ]] || pdftoppm -r 600 -gray -f $p -l $p -png -singlefile $pdf $png
done
~/.local/share/yolo-venv/bin/python $here/pipeline/regions.py $out/pages $out/regions.json
export TORCHDYNAMO_DISABLE=1 PYTORCH_ENABLE_MPS_FALLBACK=1
export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.75 PYTORCH_MPS_LOW_WATERMARK_RATIO=0.6
args=()
for f in $out/pages/p-*.png; do
  x=$out/xml/${${f:t}:r}.xml
  [[ -e $x ]] || args+=(-i $f $x)
done
(( ${#args} )) && caffeinate -i ~/.local/share/kraken-venv/bin/kraken -d mps -x "${args[@]}" \
  segment -bl ocr -m $model > $out/kraken.log 2>&1
~/.local/share/kraken-venv/bin/python $here/pipeline/extract.py $out/xml $out/regions.json $out/text
ls $out/text | wc -l | xargs echo pages:
