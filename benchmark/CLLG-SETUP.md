# CLLG polytonic Greek model: local setup (Intel Mac, 8 GB)

Model: CLLG Polytonic Greek (Inria), Zenodo 10.5281/zenodo.22232579, CC-BY-4.0, kraken 7.1,
file `ppocr_v6_tau090.safetensors` (63.8 MB), stored as `raw/cllg/cllg.safetensors` (gitignored).
Cite: hal-05732094. Results: `RESULTS.md`, follow-up 2026-10-14.

kraken 7.1 asks for torch >= 2.9, and there is no torch wheel that new for x86_64 macOS. It runs on
torch 2.2.2 anyway:

    python3.11 -m venv raw/cllg/.venv
    raw/cllg/.venv/bin/pip install torch==2.2.2 torchvision==0.17.2 'numpy<2' 'pyarrow<16'
    raw/cllg/.venv/bin/pip install --no-deps kraken==7.1.1
    # then install kraken's remaining deps under raw/cllg/constraints.txt (keeps torch/numpy pinned)

Patch three files in site-packages (`kraken/models/convert.py`, `kraken/configs/__init__.py`,
`kraken/lib/codec.py`). torch 2.2 has no `add_safe_globals`, so replace each
`torch.serialization.add_safe_globals(` with
`(getattr(torch.serialization, "add_safe_globals", None) or (lambda *a, **k: None))(`.

Run it on one cropped Greek column, about 4–5 min of CPU. Run one job at a time; this machine has
8 GB.

    raw/cllg/.venv/bin/kraken -i col.png col.txt segment -bl ocr -m raw/cllg/cllg.safetensors -B 8 --num-line-workers 0

Then diff the result against the primary read:
`scripts/maximus-cllg-diff.py <primary.txt> col.txt` (`--all` turns off the CLLG-noise filter).

Page images: `pdfimages -png` on the archive.org PDF gives the native 600 ppi 1-bit scan. Crop the
Greek column at the gutter with a few px of margin. Kraken's whole-page segmentation was tested and
did worse: it truncates line starts.
