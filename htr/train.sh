#!/bin/zsh
# Overnight Kraken fine-tune on the M5 Pro GPU. Recipe + the traps it avoids:
# memory reference_kraken-apple-silicon.md.
#
#   ./train.sh <base-model> <train.arrow> <eval.arrow> <out-dir> [max-passes]
#
# Arrows must be compiled from NFD-normalized PAGE XML (see data/nfd-xml).
# The base model's saved hparams override --lag (CLLG carries lag 10), so
# max-passes is the real stop; keep it small and pick the best checkpoint.
set -euo pipefail
base=$1 train=$2 eval=$3 out=$4 passes=${5:-8}
mkdir -p $out
export TORCHDYNAMO_DISABLE=1                  # torch.compile -> 30 GB MPS OOM
export PYTORCH_ENABLE_MPS_FALLBACK=1          # CTC loss runs on CPU
export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.75  # ~13 GB; uncapped it grew to 22 GB and swapped
export PYTORCH_MPS_LOW_WATERMARK_RATIO=0.6    # must be below HIGH or the model won't load
caffeinate -i ~/.local/share/kraken-venv/bin/ketos -d mps --workers 2 --threads 4 \
  train -i $base --resize union -f binary -B 4 \
  --optimizer AdamW -r 0.0001 \
  -t <(echo $train) -e <(echo $eval) \
  -F 1 -N $passes --min-epochs 3 -o $out 2>&1 | tr '\r' '\n' > $out/train.log
ls $out
