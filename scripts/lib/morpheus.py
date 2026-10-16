"""Morpheus (Perseus; MPL-2.0; built at ~/.local/src/morpheus) driver for Greek forms.
analyse_all(surface_forms) -> {surface: {'a': [(pos, lemma_beta, morph)], 'pass': 'A'|'B'|'C'|None}}
Passes: (A) exact accents, lowercase; (B) initial capital as written; (C) accents ignored (-n), flagged."""
import re, os, subprocess, sys, unicodedata, glob
sys.path.insert(0, os.path.dirname(__file__))
from greek_beta import to_beta

MORPH = os.path.expanduser('~/.local/src/morpheus')
CRASHED = []
def _run(words, ignore_accents):
    args = [MORPH + '/bin/cruncher', '-S'] + (['-n'] if ignore_accents else [])
    return subprocess.run(args, input='\n'.join(words) + '\n', capture_output=True, text=True,
                          env={**os.environ, 'MORPHLIB': MORPH + '/stemlib'})
def _parse(stdout):
    res, cur = {}, None
    for line in stdout.split('\n'):
        if not line: continue
        if line.startswith('<NL>'):
            if cur is None: continue
            for nl in re.findall(r'<NL>(.*?)</NL>', line):
                f = nl.split('\t')
                m = re.match(r'(\S+) (\S+)\s+(.*)$', f[0])
                if m:
                    extra = ' '.join(x.strip() for x in f[1:-1] if x.strip())   # dialect + features; last field is the stem type
                    morph = m.group(3).strip() + (f' ({extra})' if extra else '')
                    res.setdefault(cur, []).append((m.group(1), m.group(2), morph))
        else:
            cur = line.strip()
    return res

def crunch(words, ignore_accents=False):
    """words: list of beta strings -> {beta: [(pos, lemma_beta, morph)]}.
    ⚠ Morpheus's cruncher dies with SIGILL on some inputs (OCR junk) and then returns NOTHING for the whole batch,
    so run in chunks and bisect a failing chunk down to the offending word(s); those are recorded in CRASHED."""
    if not words: return {}
    r = _run(words, ignore_accents)
    if r.returncode == 0: return _parse(r.stdout)
    if len(words) == 1:
        CRASHED.append(words[0]); return {}
    mid = len(words) // 2
    out = crunch(words[:mid], ignore_accents)
    out.update(crunch(words[mid:], ignore_accents))
    return out

def crunch_chunked(words, ignore_accents=False, n=400):
    out = {}
    for i in range(0, len(words), n): out.update(crunch(words[i:i+n], ignore_accents))
    return out

TOK = re.compile(r"[\u0370-\u03FF\u1F00-\u1FFF\u0300-\u0345]{2,}[\u00b4\u1fbd\u2019\u02bc']?")
def tokens_of(dirpath):
    out = []
    for f in sorted(glob.glob(dirpath + '/*.md')):
        parts = open(f).read().split('---', 2)
        if len(parts) < 3: print('skip (no frontmatter):', f, file=sys.stderr); continue
        t = parts[2]
        t = re.sub(r'⟦[^⟧]*⟧', '', t); t = re.sub(r'\[[^\]]*\]', '', t)
        out += TOK.findall(t)
    return out

def analyse_all(forms):
    """forms: set of surface strings -> {surface: {'a': [...], 'pass': 'A'|'B'|'C'|None}}"""
    res = {}
    beta = {w: to_beta(unicodedata.normalize('NFC', w).lower() if (w.isupper() and len(w) > 1) else w) for w in forms}
    lower = {w: to_beta(w.lower()) for w in forms}
    A = crunch_chunked(sorted(set(lower.values())))
    for w in forms:
        a = A.get(lower[w])
        if a: res[w] = {'a': a, 'pass': 'A'}
    miss = [w for w in forms if w not in res and w[:1] != w[:1].lower()]
    B = crunch_chunked(sorted({beta[w] for w in miss}))
    for w in miss:
        a = B.get(beta[w])
        if a: res[w] = {'a': a, 'pass': 'B'}
    miss = [w for w in forms if w not in res]
    C = crunch_chunked(sorted({to_beta(w.lower(), strip_accents=True) for w in miss}), ignore_accents=True)
    for w in miss:
        a = C.get(to_beta(w.lower(), strip_accents=True))
        res[w] = {'a': a, 'pass': 'C'} if a else {'a': [], 'pass': None}
    return res

