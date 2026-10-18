"""Turn plate verdicts into corrected error rates.

    tally.py   (reads review/items.jsonl + review/verdicts/r*.jsonl)

Per item, the printed text is: K -> kraken, T -> transcription, N -> reading.
L items are layout (not body text) and are excluded from both sides. U items
give a range: low counts them as Kraken-correct, high as Kraken-wrong (taking
the transcription as printed). Denominator = reference characters scored.
"""
import json, glob, unicodedata
from collections import Counter
from pathlib import Path
from rapidfuzz.distance import Levenshtein

HERE = Path(__file__).parent
REF_CHARS = 58308


def base(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if not unicodedata.combining(c))


def kind(a, b):
    if a.strip() == b.strip() and a != b:
        return 'space'
    if base(a) == base(b):
        return 'accent/breathing'
    if all(not c.isalpha() for c in a + b):
        return 'punctuation'
    return 'letters'


items = {json.loads(l)['id']: json.loads(l) for l in open(HERE / 'review/items.jsonl')}
verdicts = {}
for f in sorted(glob.glob(str(HERE / 'review/verdicts/r*.jsonl'))):
    for l in open(f):
        if l.strip():
            v = json.loads(l)
            verdicts[v['id']] = v
missing = set(items) - set(verdicts)
counts = Counter(v['v'] for v in verdicts.values())
k_lo = k_hi = t_err = u_t = 0
k_kinds, t_kinds = Counter(), Counter()
for i, it in items.items():
    v = verdicts.get(i)
    if not v or v['v'] == 'L':
        continue
    K, T = it['kraken'], it['transcription']
    printed = {'K': K, 'T': T, 'N': v.get('reading', '')}.get(v['v'])
    if v['v'] == 'U':
        k_hi += Levenshtein.distance(K, T)
        u_t += Levenshtein.distance(K, T)
        continue
    dk, dt = Levenshtein.distance(K, printed), Levenshtein.distance(T, printed)
    k_lo += dk; k_hi += dk; t_err += dt
    if dk:
        k_kinds[kind(K, printed)] += dk
    if dt:
        t_kinds[kind(T, printed) if '⟨?⟩' not in T else 'gap ⟨?⟩'] += dt
print(f'verdicts {len(verdicts)}/{len(items)}  missing {len(missing)}  {dict(counts)}')
print(f'KRAKEN  CER {k_lo / REF_CHARS:.2%} (U as right) – {k_hi / REF_CHARS:.2%} (U as wrong)   chars {k_lo}–{k_hi}')
print(f'OUR TRANSCRIPTION  CER {t_err / REF_CHARS:.2%} + up to {u_t / REF_CHARS:.2%} on U')
print('Kraken errors by kind:', dict(k_kinds.most_common()))
print('Transcription errors by kind:', dict(t_kinds.most_common()))
if missing:
    print('MISSING ids:', sorted(missing)[:20])
