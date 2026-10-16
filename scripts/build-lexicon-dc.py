#!/usr/bin/env python3
"""Phase C: per-work Du Cange bundle (Glossarium mediae et infimae latinitatis, Favre ed. 1883-87, public domain;
text is archive.org Google-scan OCR, UNCORRECTED, so it is labelled OCR in the popup).
Reads sources/lexica/ducange/split/v*.jsonl (made by scripts/ducange-split.py).
Matching: exact normalised key first, then an OCR-confusion-folded key (c/g, i/l, h/b, rn/m); the headword is shown
AS OCR'd so a fuzzy match is visible to the reader.
Usage: python3 scripts/build-lexicon-dc.py site/pl/139/canones.words.json site/pl/139/canones.lex-dc.json"""
import sys, json, re, glob, unicodedata

def norm(w):
    w = unicodedata.normalize('NFD', w.lower())
    w = ''.join(c for c in w if not unicodedata.combining(c))
    return re.sub(r'[^a-z]', '', w.replace('æ','ae').replace('œ','oe').replace('j','i').replace('v','u').replace('ae','e'))
def fold(k): return k.replace('g','c').replace('l','i').replace('h','b').replace('rn','m')

exact, folded = {}, {}
for f in sorted(glob.glob('sources/lexica/ducange/split/v*.jsonl')):
    src = re.search(r'(v\d+[a-z]?)\.jsonl', f).group(1)
    for l in open(f):
        r = json.loads(l)
        t = re.sub(r'\s+', ' ', r['text'].replace('¬ ', '').replace('¬', '')).strip()
        e = {'head': r['head'], 'key': r['key'], 'src': src, 'text': t}
        exact.setdefault(r['key'], []).append(e)
        folded.setdefault(fold(r['key']), []).append(e)

from pycollatinus import Lemmatiseur
_L = Lemmatiseur(); _real = {}
def real(k):
    # is this OCR headword itself a real Latin word? then it is NOT an OCR garble of the lemma we want
    if k not in _real: _real[k] = bool(list(_L.lemmatise(k)))
    return _real[k]
def clean_enough(t):
    s = t[:200]; return len(s) > 20 and sum(c.isalpha() or c == ' ' for c in s) / len(s) >= 0.8

words = json.load(open(sys.argv[1]))
ls_path = sys.argv[1].replace('.words.json', '.lex-ls.json')
def snippet(t, head):
    t = re.sub(r'^(?:(?:[^\sA-Za-z]{1,3}|[a-z]|\d{1,2}\.?)\s+){0,2}', '', t)
    return t[:420]

def lookup(lemma):
    k = norm(lemma)
    hits = exact.get(k)
    if not hits:
        cand = folded.get(fold(k)) or []
        hits = [e for e in cand if e['key'] != k and not real(e['key'])]
    if not hits: return None
    # prefer distinct scans/volumes; longest text wins among duplicates of the same headword
    best = {}
    for e in hits:
        b = best.get(e['key'])
        if b is None or len(e['text']) > len(b['text']): best[e['key']] = e
    out = [e for e in best.values() if clean_enough(e['text'])][:3]
    if not out: return None
    return [{'head': e['head'], 'def': snippet(e['text'], e['head']), 'fuzzy': e['key'] != k} for e in out]

entries = {}
for l in words['lemmas']:
    r = lookup(l)
    if r: entries[l] = r
out = {'source': 'Du Cange, Glossarium mediae et infimae latinitatis (ed. Favre, 1883-87), public domain; OCR of Google/Internet Archive scans, uncorrected',
       'entries': entries}
json.dump(out, open(sys.argv[2], 'w'), ensure_ascii=False, separators=(',', ':'))
ls = json.load(open(ls_path))['entries'] if len(sys.argv) > 3 or True else {}
nolsyes = [l for l in words['lemmas'] if l not in ls and not re.fullmatch(r'[IVXLCDM]+', l)]
print(f"lemmas {len(words['lemmas'])}, with Du Cange entry {len(entries)}; of {len(nolsyes)} non-numeral L&S misses, {sum(1 for l in nolsyes if l in entries)} now covered")
