#!/usr/bin/env python3
"""Candidate finder: diff a work's Latin chunks against archive.org's own OCR of the volume.

Usage: python3 scripts/ocr-diff-candidates.py <idno> <djvu.txt> <leafOffset> > out.tsv
  leafOffset k: archive leaf = (odd col + k) / 2, calibrated at the printed corners.

A disagreement is a CANDIDATE, never a finding: either our TEI or the OCR may be wrong, and only
the plate decides. Its job is to tell a translating stint WHICH pages to open, so that a work with
~600 sparse pages is not read page by page. Short replace-ops only; insertions (Solier's commentary
interleaves the band in the OCR) are ignored."""
import sys, re, glob, unicodedata, difflib, os

idno, ocr_path, k = sys.argv[1], sys.argv[2], int(sys.argv[3])

def norm(w):
    w = unicodedata.normalize('NFKD', w).encode('ascii', 'ignore').decode().lower()
    w = w.replace('ae', 'e').replace('oe', 'e').replace('j', 'i').replace('v', 'u')
    return re.sub(r'[^a-z]', '', w)

ocr_raw = open(ocr_path, encoding='utf-8', errors='replace').read()
ocr_raw = re.sub(r'-\s*\n\s*', '', ocr_raw)          # rejoin hyphenated line breaks
ocr_words = [w for w in (norm(t) for t in ocr_raw.split()) if w]
idx = {}
for i in range(len(ocr_words) - 3):
    idx.setdefault(tuple(ocr_words[i:i+4]), []).append(i)

print('chunk\tcol\tleaf\tours\tocr\tcontext')
for f in sorted(glob.glob(f'src/latin/{idno}/[0-9]*.md')):
    body = open(f).read().split('---', 2)[2]
    body = re.sub(r'\[(n|cn):[^\]]*\]', ' ', body)
    toks, cols, col = [], [], None
    for t in body.split():
        m = re.fullmatch(r'\[(\d{4}[A-D]?)\]', t)
        if m: col = m.group(1); continue
        if t.startswith('#'): continue
        n = norm(t)
        if n: toks.append((n, t)); cols.append(col)
    # align in windows of 40 tokens, each anchored on its own first 4-gram
    i = 0
    while i < len(toks):
        win = toks[i:i+40]
        start = None
        for j in range(0, min(10, len(win) - 3)):
            key = tuple(x[0] for x in win[j:j+4])
            if key in idx and len(idx[key]) == 1:
                start = idx[key][0] - j; break
        if start is None: i += 40; continue
        a = [x[0] for x in win]; b = ocr_words[max(0, start):start + len(win) + 60]
        sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
        for op, a1, a2, b1, b2 in sm.get_opcodes():
            if op == 'replace' and (a2 - a1) <= 2 and (b2 - b1) <= 2:
                ours = ' '.join(x[1] for x in win[a1:a2]); ocr = ' '.join(b[b1:b2])
                if norm(ours) == ''.join(b[b1:b2]): continue      # split/fusion only
                c = cols[i + a1] or ''
                num = int(re.match(r'\d+', c).group()) if c else 0
                odd = num if num % 2 else num - 1
                leaf = (odd + k) // 2 if num else ''
                ctx = ' '.join(x[1] for x in win[max(0, a1-4):a2+4])
                print(f'{os.path.basename(f)[:4]}\t{c}\t{leaf}\t{ours}\t{ocr}\t{ctx}')
        i += 40
