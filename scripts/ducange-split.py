#!/usr/bin/env python3
"""Split an archive.org OCR volume of Du Cange (Favre ed., 1883-87) into entries.
Method: candidate headword lines (Capitalised word + , or .), then the longest alphabetical
chain per volume (LIS). True headwords run in order; stray capitalised lines do not.
Usage: python3 scripts/ducange-split.py <ocr.txt> <out.jsonl> [--stats]"""
import re, sys, json, unicodedata, bisect

def key(w):
    w = w.translate(DIGIT) if re.search('[A-Za-z]', w) else w
    w = unicodedata.normalize('NFD', w.lower())
    w = ''.join(c for c in w if not unicodedata.combining(c))
    return re.sub(r'[^a-z]', '', w.replace('æ','ae').replace('œ','oe').replace('j','i').replace('v','u').replace('ae','e'))

RUN = re.compile(r'^(?:GLOSSARIUM|AUCTUM|DIGESSIT|SEQUUNTUR|NIORT|TOMUS.*|[A-Z]{2,12}\.?|\d{1,4}|[IVXL]{1,6}\.?)$')
# Headwords are set in CAPITALS, optionally after OCR debris of a column mark / asterisk / homograph number
# ("* HANOT,", "1 2. HANSA,", "0 HANTSAGCUS."). OCR also turns O->0 and I->1 inside the word.
HEAD = re.compile(r"^(?:(?:[^\sA-Za-z0-9]{1,3}\s*|[A-Za-z]\s+|[a-z]\s*|\d{1,2}\.?\s+)){0,2}([A-ZÆŒ0-9][A-ZÆŒ0-9’'-]{2,}(?:\s[A-Z0-9]{3,})?)(?=\s*[,.\[(]|\s+[A-Za-z])")
DIGIT = str.maketrans('01589', 'oisbg')

def lines_of(path):
    out = []
    for raw in open(path, errors='ignore'):
        l = re.sub(r'\s+', ' ', raw).strip()
        if l: out.append(l)
    return out

def lis_indices(keys):
    # longest non-decreasing subsequence, returns indices
    tails, tidx, prev = [], [], [-1]*len(keys)
    for i, k in enumerate(keys):
        p = bisect.bisect_right(tails, k)
        if p == len(tails): tails.append(k); tidx.append(i)
        else: tails[p] = k; tidx[p] = i
        prev[i] = tidx[p-1] if p else -1
    res, i = [], tidx[-1]
    while i != -1: res.append(i); i = prev[i]
    return res[::-1]

def main():
    path, out = sys.argv[1], sys.argv[2]
    letters = sys.argv[3].lower() if len(sys.argv) > 3 else None
    L = lines_of(path)
    cands = []
    for i, l in enumerate(L):
        if RUN.match(l): continue
        m = HEAD.match(l)
        if m and len(key(m.group(1))) >= 3 and not re.fullmatch(r'[IVXLC0-9]+', m.group(1)): cands.append((i, m.group(1)))
    keys = [key(w) for _, w in cands]
    chain = [cands[j] for j in lis_indices(keys)]
    if letters:
        kept = [c for c in chain if key(c[1])[:1] in letters]
        print(f'  dropped {len(chain)-len(kept)} chain entries outside letters {letters}', file=sys.stderr)
        chain = kept
    print(f'{path}: lines {len(L)}, candidates {len(cands)}, chain {len(chain)}', file=sys.stderr)
    with open(out, 'w') as o:
        for n, (i, w) in enumerate(chain):
            j = chain[n+1][0] if n+1 < len(chain) else len(L)
            body = [x for x in L[i:j] if not RUN.match(x)]
            txt = ' '.join(body)
            txt = re.sub(r'(\w)- (?=[a-zæœ])', r'\1', txt)   # dehyphenate line breaks
            o.write(json.dumps({'head': w, 'key': key(w), 'line': i, 'text': txt}, ensure_ascii=False) + '\n')

if __name__ == '__main__': main()
