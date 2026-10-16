#!/usr/bin/env python3
"""Phase C GREEK lookup layer (PG works), parallel to build-lookup.py but its own root so the two never touch:
  site/lexg/forms/<k>.json  form (lowercase beta code) -> all Morpheus analyses (automatic, unranked)
  site/lexg/lsj/<k>.json    LSJ extracts by lemma (Perseus, CC BY-SA 4.0)
  site/lexg/manifest.json
Greek source = every src/greek/<work>/ chunk set. Morpheus (MPL-2.0) at ~/.local/src/morpheus, classical lexicon:
Byzantine vocabulary and proper names come back EMPTY (shown as 'no analysis'), never guessed. Late-Greek lexicon
(E. A. Sophocles) is a separate, not-yet-built layer.
Run: python3 scripts/build-lookup-grc.py"""
import glob, json, os, re, shutil, sys, unicodedata
import xml.etree.ElementTree as ET
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'lib'))
import morpheus as M
from greek_beta import to_beta, from_beta

OUT = 'site/lexg'
SPLIT_BYTES = 350_000

def key_of(beta):                       # shard key: ascii letters of the beta form, no marks, no capital star
    return re.sub(r'[^a-z]', '', beta)
def bkey(surface):                      # form key = lowercase beta incl. accents; JS word-lookup.js mirrors this
    return to_beta(unicodedata.normalize('NFC', surface).lower())

# ---------- 1. forms ----------
works = sorted(glob.glob('src/greek/*/'))
surface = {}
for d in works:
    for t in M.tokens_of(d): surface[t] = surface.get(t, 0) + 1
print(f'{len(works)} Greek works, {len(surface)} distinct surface forms', file=sys.stderr)
R = M.analyse_all(set(surface))
rank = {'A': 0, 'B': 1, 'C': 2}
forms = {}
for w, r in R.items():
    k = bkey(w)
    if not k: continue
    e = {'a': [], 'p': 'Z'}
    if r['a']:
        seen, a = set(), []
        for pos, lb, morph in r['a']:
            lemma = from_beta(lb.split(',')[-1])
            if (lemma, morph) not in seen: seen.add((lemma, morph)); a.append([lemma, morph])
        e = {'a': a, 'p': r['pass']}
    old = forms.get(k)
    if old is None or (e['a'] and (not old['a'] or rank.get(e['p'], 9) < rank.get(old['p'], 9))): forms[k] = e
for k, e in forms.items():
    if e['p'] == 'C': e['n'] = 'accents ignored in matching'
    del e['p']
lemmas = {l for e in forms.values() for l, _ in e['a']}
print(f'{len(forms)} form keys, {len(lemmas)} lemmas, crashed {len(set(M.CRASHED))}', file=sys.stderr)

# ---------- 2. LSJ ----------
def lemma_beta_variants(lemma):
    b = to_beta(lemma)
    return b, re.sub(r'[/\\=)(|+]', '', b)    # exact, accent-free
want_exact, want_flat = {}, {}
for l in lemmas:
    e, f = lemma_beta_variants(l)
    want_exact.setdefault(e, []).append(l); want_flat.setdefault(f, []).append(l)

def gtext(e):
    """text of an LSJ element; Greek-language runs are beta code -> Unicode"""
    out = []
    def walk(x):
        if x.get('lang') == 'greek':
            out.append(from_beta(''.join(x.itertext()))); return
        if x.text: out.append(x.text)
        for c in x:
            walk(c)
            if c.tail: out.append(c.tail)
    walk(e)
    return re.sub(r'\s+', ' ', ''.join(out)).strip()

lsj = {}
for f in sorted(glob.glob('sources/lexica/lsj/lsj*.xml'), key=lambda p: int(re.search(r'lsj(\d+)', p).group(1))):
    for _, e in ET.iterparse(f, events=('end',)):
        if e.tag != 'entryFree': continue
        k = re.sub(r'\d+$', '', e.get('key', ''))
        hit = want_exact.get(k) or want_flat.get(re.sub(r'[/\\=)(|+]', '', k))
        if hit:
            snip = gtext(e)[:500]
            for l in hit:
                lsj.setdefault(l, []).append({'head': from_beta(k) or k, 'def': snip, 'exact': k in want_exact})
        e.clear()
# prefer exact-accent entries when both exist
lsj_out = {}
for l, es in lsj.items():
    ex = [x for x in es if x['exact']]
    lsj_out[l] = [{'head': x['head'], 'def': x['def']} for x in (ex or es)[:3]]
print(f'LSJ for {len(lsj_out)} / {len(lemmas)} lemmas', file=sys.stderr)

# ---------- 3. shards ----------
def write_shards(kind, items, keyfn):
    base = os.path.join(OUT, kind); os.makedirs(base, exist_ok=True)
    by2 = {}
    for name, val in items.items():
        k = keyfn(name)
        if len(k) < 2: k = (k + '_')[:2]
        by2.setdefault(k[:2], {})[name] = val
    split = set()
    for p, d in by2.items():
        blob = json.dumps(d, ensure_ascii=False, separators=(',', ':'))
        if len(blob.encode()) <= SPLIT_BYTES:
            open(os.path.join(base, p + '.json'), 'w').write(blob); continue
        split.add(p); by3 = {}
        for name, val in d.items():
            by3.setdefault((keyfn(name) + '__')[:3], {})[name] = val
        for p3, d3 in by3.items():
            open(os.path.join(base, p3 + '.json'), 'w').write(json.dumps(d3, ensure_ascii=False, separators=(',', ':')))
    return sorted(split)

if os.path.isdir(OUT): shutil.rmtree(OUT)
os.makedirs(OUT)
manifest = {
    'forms': write_shards('forms', forms, key_of),
    'lsj': write_shards('lsj', lsj_out, lambda l: key_of(to_beta(l))),
    'sources': {'analysis': 'Morpheus (Perseus), MPL-2.0, automatic and unranked; classical lexicon',
                'lsj': 'Liddell-Scott-Jones via Perseus, CC BY-SA 4.0'},
    'works': len(works), 'forms_n': len(forms), 'lemmas_n': len(lemmas)}
json.dump(manifest, open(os.path.join(OUT, 'manifest.json'), 'w'), ensure_ascii=False)
n = sum(len(fs) for _, _, fs in os.walk(OUT)); sz = sum(os.path.getsize(os.path.join(r, f)) for r, _, fs in os.walk(OUT) for f in fs)
print(f'wrote {n} files, {sz/1e6:.1f} MB raw; split: forms {manifest["forms"]}, lsj {manifest["lsj"]}', file=sys.stderr)
