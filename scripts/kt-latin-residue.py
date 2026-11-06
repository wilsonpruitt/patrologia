"""Residue scan for the Latin-only chunks (LATIN-ONLY-SPEC.md section 1): computation before vision.
Run: ~/.venvs/collatinus/bin/python scripts/kt-latin-residue.py <work>
Every token of raw/kraken/<work>/latin-checked/*.tsv that pycollatinus cannot analyse (as build-lookup.py calls it), plus every
character outside letters / ae oe / digits / .,;:?!«»()'’- , goes to translate/<work>/verify/LATIN-RESIDUE.tsv (tag, token, status blank).
A line-end hyphen is joined to the next line's first token before analysis. Existing status values are kept on re-run."""
import csv, glob, os, re, sys, unicodedata
from pycollatinus import Lemmatiseur
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
work = sys.argv[1]
K = f'{ROOT}/raw/kraken/{work}/latin-checked'; OUT = f'{ROOT}/translate/{work}/verify/LATIN-RESIDUE.tsv'
def norm(w):
    w = ''.join(c for c in unicodedata.normalize('NFD', w.lower()) if not unicodedata.combining(c))
    return w.replace('æ','ae').replace('œ','oe').replace('j','i').replace('v','u')
def variants(w):
    n = norm(w); out = [n]
    for a, b in (('ae','e'),('oe','e'),('e','ae'),('ti','ci'),('ci','ti'),('ph','f'),('ch','c'),('th','t')):
        if a in n: out.append(n.replace(a, b))
    return out
L = Lemmatiseur(); cache = {}
def known(t):
    if t not in cache: cache[t] = any(list(L.lemmatise(v)) for v in variants(t))
    return cache[t]
ALLOWED = re.compile(r"[A-Za-zÀ-ÿæœÆŒ0-9 .,;:?!«»()'’\-\[\]·ºª—]")
old = {}
if os.path.exists(OUT):
    for r in csv.DictReader(open(OUT), delimiter='\t'): old[(r['tag'], r['token'])] = r['status']
rows = []
for f in sorted(glob.glob(f'{K}/so-*.tsv')):
    lines = [l.rstrip('\n').split('\t', 1) for l in open(f) if l.strip()]
    cid = os.path.basename(f)[:-4]
    for i, (tag, text) in enumerate(lines):
        text = re.sub(r'^\[b: .\] ', '', text)
        if text.endswith('-') and i + 1 < len(lines) and lines[i + 1][0][:7] == tag[:7]:
            nxt = re.sub(r'^\[b: .\] ', '', lines[i + 1][1]); first = (re.findall(r"[A-Za-zÀ-ÿæœÆŒ]+", nxt) or [''])[0]
            m = re.search(r"([A-Za-zÀ-ÿæœÆŒ]+)-$", text)
            if m:
                j = m.group(1) + first
                if not known(j) and len(j) > 1: rows.append((tag, j + ' (joined)'))
                text = text[:m.start()]
        if i and lines[i - 1][1].rstrip().endswith('-') and lines[i - 1][0][:7] == tag[:7]:
            text = re.sub(r"^[A-Za-zÀ-ÿæœÆŒ]+", '', text)          # first token already judged joined
        for t in re.findall(r"[A-Za-zÀ-ÿæœÆŒ]+", text):
            if (len(t) > 1 or t not in 'aeoiAEOI') and not known(t): rows.append((tag, t))
        for ch in sorted(set(c for c in text if not ALLOWED.match(c))): rows.append((tag, f'CHAR {ch!r} U+{ord(ch):04X}'))
with open(OUT, 'w') as o:
    o.write('tag\ttoken\tstatus\n')
    for tag, tok in rows: o.write(f"{tag}\t{tok}\t{old.get((tag, tok), '')}\n")
print(len(rows), 'residue rows ->', OUT)
