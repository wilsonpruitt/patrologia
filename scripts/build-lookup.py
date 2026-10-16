#!/usr/bin/env python3
"""Phase C global lookup layer: ONE sharded set of files shared by every work (not per-work bundles).
  site/lex/forms/<k>.json   normalised word form -> all Collatinus analyses (automatic, unranked)
  site/lex/ls/<k>.json      Lewis & Short extracts by lemma     (Perseus, CC BY-SA 4.0)
  site/lex/dc/<k>.json      Du Cange extracts by lemma          (PD; uncorrected OCR)
  site/lex/manifest.json    which 2-letter prefixes were split to 3 letters (big shards)
Latin source = every src/latin/<idno>/ work that carries ⟦pN⟧ markers (i.e. shipped). Re-run after shipping a work;
it only adds forms. Inputs: sources/lexica/ls/ls.xml, sources/lexica/ducange/split/v*.jsonl.
Run: ~/.venvs/collatinus/bin/python scripts/build-lookup.py [--limit-works N]"""
import re, glob, json, os, sys, unicodedata, shutil
import xml.etree.ElementTree as ET
from pycollatinus import Lemmatiseur

OUT = 'site/lex'
SPLIT_BYTES = 350_000   # a 2-letter shard larger than this is re-cut at 3 letters

# ---------- normalisation (JS word-lookup.js mirrors norm()) ----------
def norm(w):
    w = unicodedata.normalize('NFD', w.lower())
    w = ''.join(c for c in w if not unicodedata.combining(c))
    return w.replace('æ','ae').replace('œ','oe').replace('j','i').replace('v','u')
def letters(w): return re.sub(r'[^a-z]', '', norm(w))
def variants(w):
    n = norm(w); out = [n]
    for a, b in (('ae','e'),('oe','e'),('e','ae'),('ti','ci'),('ci','ti'),('ph','f'),('ch','c'),('th','t')):
        if a in n: out.append(n.replace(a, b))
    return out
EN = {'nominatif':'nom.','vocatif':'voc.','accusatif':'acc.','génitif':'gen.','datif':'dat.','ablatif':'abl.','locatif':'loc.',
 'singulier':'sg.','pluriel':'pl.','masculin':'m.','féminin':'f.','neutre':'n.','1ère':'1st','2ème':'2nd','3ème':'3rd',
 'indicatif':'indic.','subjonctif':'subj.','impératif':'imper.','infinitif':'inf.','présent':'pres.','imparfait':'impf.',
 'parfait':'perf.','futur':'fut.','antérieur':'(anterior)','PQP':'plupf.','actif':'act.','passif':'pass.',
 'participe':'participle','adjectif':'gerundive','verbal':'','gérondif':'gerund','supin':'supine','en':'in','positif':'positive',
 'comparatif':'comparative','superlatif':'superlative','-um':'-um','-u':'-u','-':''}
def en(m): return re.sub(r'\s+', ' ', ' '.join(EN.get(w, w) for w in m.split())).strip()

# ---------- 1. forms from every shipped Latin work ----------
works = []
for d in sorted(glob.glob('src/latin/*/')):
    fs = sorted(glob.glob(d + '*.md'))
    if fs and '⟦p' in open(fs[0]).read(): works.append(d)
if '--limit-works' in sys.argv: works = works[:int(sys.argv[sys.argv.index('--limit-works') + 1])]
print(f'{len(works)} shipped Latin works', file=sys.stderr)
surface = {}          # normalised form -> count
for d in works:
    for f in sorted(glob.glob(d + '*.md')):
        t = open(f).read().split('---', 2)[2]
        t = re.sub(r'⟦[^⟧]*⟧', '', t); t = re.sub(r'\[[^\]]*\]', '', t)
        for w in re.findall(r"[A-Za-zÀ-ÿæœÆŒ]+", t):
            if len(w) > 1:
                k = norm(w); surface[k] = surface.get(k, 0) + 1
print(f'{len(surface)} distinct forms', file=sys.stderr)

L = Lemmatiseur()
forms = {}            # form -> {'a': [(lemma, morph)], 'v': via?}
lemmas = set()
for i, k in enumerate(surface):
    res, via = [], None
    for v in variants(k):
        res = list(L.lemmatise(v))
        if res: via = v; break
    seen, a = set(), []
    for r in res:
        key = (r['lemma'], en(r['morph']))
        if key not in seen: seen.add(key); a.append(key); lemmas.add(r['lemma'])
    e = {'a': a}
    if via and via != k: e['v'] = via
    forms[k] = e
    if i and i % 20000 == 0: print(f'  analysed {i}', file=sys.stderr)
print(f'{len(lemmas)} distinct lemmas', file=sys.stderr)

# ---------- 2. Lewis & Short ----------
want = {}
for l in lemmas: want.setdefault(letters(l), []).append(l)
def text(e): return re.sub(r'\s+', ' ', ''.join(e.itertext())).strip()
ls_entries = {}
for _, e in ET.iterparse('sources/lexica/ls/ls.xml', events=('end',)):
    if e.tag != 'entryFree': continue
    k = letters(re.sub(r'\d+$', '', e.get('key', '')))
    if k in want:
        o = e.find('orth')
        ls_entries.setdefault(k, []).append({'head': text(o) if o is not None else e.get('key'), 'def': text(e)[:500]})
    e.clear()
def ls_resolve(l):
    k = letters(l)
    if k in ls_entries: return k
    for cut, adds in ((2, ('us','er','is','ius')), (1, ('us','is','er','ens','ans')), (3, ('ium','ius','is'))):
        if len(k) > cut + 2:
            for a in adds:
                if k[:-cut] + a in ls_entries: return k[:-cut] + a
ls_out = {}
for l in lemmas:
    k = ls_resolve(l)
    if k: ls_out[l] = ls_entries[k][:3]

# ---------- 3. Du Cange ----------
def dnorm(w): return letters(w).replace('ae', 'e')
def fold(k): return k.replace('g','c').replace('l','i').replace('h','b').replace('rn','m')
exact, folded = {}, {}
for f in sorted(glob.glob('sources/lexica/ducange/split/v*.jsonl')):
    for line in open(f):
        r = json.loads(line)
        t = re.sub(r'\s+', ' ', r['text'].replace('¬ ', '').replace('¬', '')).strip()
        e = {'head': r['head'], 'key': r['key'], 'text': t}
        exact.setdefault(r['key'], []).append(e); folded.setdefault(fold(r['key']), []).append(e)
_real = {}
def real(k):
    if k not in _real: _real[k] = bool(list(L.lemmatise(k)))
    return _real[k]
def clean_enough(t):
    s = t[:200]; return len(s) > 20 and sum(c.isalpha() or c == ' ' for c in s) / len(s) >= 0.8
def dc_lookup(lemma):
    k = dnorm(lemma)
    hits = exact.get(k)
    if not hits:
        hits = [e for e in (folded.get(fold(k)) or []) if e['key'] != k and not real(e['key'])]
    if not hits: return None
    best = {}
    for e in hits:
        b = best.get(e['key'])
        if b is None or len(e['text']) > len(b['text']): best[e['key']] = e
    out = [e for e in best.values() if clean_enough(e['text'])][:3]
    return [{'head': e['head'], 'def': re.sub(r'^(?:(?:[^\sA-Za-z]{1,3}|[a-z]|\d{1,2}\.?)\s+){0,2}', '', e['text'])[:420],
             'fuzzy': e['key'] != k} for e in out] or None
dc_out = {}
for l in lemmas:
    r = dc_lookup(l)
    if r: dc_out[l] = r
print(f'L&S for {len(ls_out)} lemmas, Du Cange for {len(dc_out)}', file=sys.stderr)

# ---------- 4. write shards ----------
def write_shards(kind, items, keyfn):
    """items: dict name -> value. Returns set of 2-letter prefixes that were split to 3 letters."""
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
            k = keyfn(name); k = (k + '__')[:3]
            by3.setdefault(k, {})[name] = val
        for p3, d3 in by3.items():
            open(os.path.join(base, p3 + '.json'), 'w').write(json.dumps(d3, ensure_ascii=False, separators=(',', ':')))
    return sorted(split)

if os.path.isdir(OUT): shutil.rmtree(OUT)
os.makedirs(OUT)
# forms shard value: {"a": [[lemma, morph], ...], "v": via?}
manifest = {
    'forms': write_shards('forms', {k: {**e, 'a': [list(x) for x in e['a']]} for k, e in forms.items()}, lambda n: letters(n)),
    'ls': write_shards('ls', ls_out, letters),
    'dc': write_shards('dc', dc_out, letters),
    'sources': {'analysis': 'Collatinus (pycollatinus), GPL-3, automatic and unranked',
                'ls': 'Lewis & Short via Perseus, CC BY-SA 4.0',
                'dc': 'Du Cange, ed. Favre 1883-87, public domain; OCR, uncorrected'},
    'works': len(works), 'forms_n': len(forms), 'lemmas_n': len(lemmas)}
json.dump(manifest, open(os.path.join(OUT, 'manifest.json'), 'w'), ensure_ascii=False)
n = sum(len(fs) for _, _, fs in os.walk(OUT)); sz = sum(os.path.getsize(os.path.join(r, f)) for r, _, fs in os.walk(OUT) for f in fs)
print(f'wrote {n} files, {sz/1e6:.1f} MB raw; split prefixes: forms {len(manifest["forms"])}, ls {len(manifest["ls"])}, dc {len(manifest["dc"])}', file=sys.stderr)
