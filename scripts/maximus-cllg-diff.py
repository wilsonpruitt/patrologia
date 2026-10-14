#!/usr/bin/env python3
"""Diff a keyed transcription (myriobiblos) against CLLG kraken OCR of the same PG plate column.
Every disagreement is a spot to read at the plate. Comparison key: lowercase, grave=acute (the
transcription has no graves), elision marks unified, punctuation stripped. One-sided runs at the
ends (header line, Latin spill, text beyond the transcription's span) are trimmed.
  maximus-cllg-diff.py <transcription.txt> <cllg.txt> [--letters] [--all]
--all keeps CLLG's own spacing / lost-letter faults (see ocr_noise), which are suppressed by default.
"""
import sys, re, unicodedata
from rapidfuzz.distance import Levenshtein as L

_LEX = None
def lex():
    global _LEX
    if _LEX is None:
        import os
        _LEX = {}
        for l in open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'raw', 'greek-lexicon.tsv'), encoding='utf-8'):
            f, c = l.rstrip('\n').split('\t'); _LEX[f] = int(c)
    return _LEX
def lkey(w):
    w = unicodedata.normalize('NFD', w.lower()).replace('\u0300', '\u0301')
    w = unicodedata.normalize('NFC', ''.join(c for c in w if c.isalpha() or unicodedata.combining(c)))
    return w

def ocr_lines(s):
    """CLLG output: drop Latin-script lines (column spill), rejoin words broken at line ends.
    CLLG often loses the hyphen, so a line-final fragment + the next line's first token are joined
    when the join is a known form and the fragment alone is not a common word."""
    L_ = lex(); out = []
    for line in unicodedata.normalize('NFC', s).split('\n'):
        letters = [c for c in line if c.isalpha()]
        if letters and sum('a' <= c.lower() <= 'z' for c in letters) / len(letters) > 0.5: continue
        w = line.split()
        if not w: continue
        if out:
            a = out[-1].rstrip('-¬'); b = w[0]
            ja = lkey(a + b)
            if out[-1].endswith(('-', '¬')) or (L_.get(ja, 0) >= 2 and L_.get(lkey(a), 0) < 50):
                if out[-1].endswith(('-', '¬')) or L_.get(ja, 0) > L_.get(lkey(b), 0) or L_.get(lkey(b), 0) < 2:
                    out[-1] = a + b; w = w[1:]
        out.extend(w)
    return out

def toks(s):
    s = unicodedata.normalize('NFC', s)
    s = re.sub(r'(\w)[-¬]\s*\n\s*(\w)', r'\1\2', s)       # join line-end hyphens
    s = re.sub(r'\(\d{2,4}\)', ' ', s)                      # myriobiblos column markers
    return s.split()
def k_acc(w):
    w = unicodedata.normalize('NFD', w.lower()).replace('̀', '́')
    w = re.sub('[’᾿ʼ´΄\'᾽ʹ]', '’', unicodedata.normalize('NFC', w))
    return ''.join(c for c in w if c.isalpha() or c == '’')
def k_let(w): return ''.join(c for c in unicodedata.normalize('NFD', w.lower()) if c.isalpha() and not unicodedata.combining(c))

def subseq(x, y):
    """x is y with characters dropped"""
    it = iter(y); return all(c in it for c in x)

def ocr_noise(t, o, key):
    """CLLG's own characteristic faults, which say nothing about the transcription: word spacing
    (run-together or split words) and characters LOST at line breaks (πε|λαμπόμενον). Suppressed when
    the transcription side consists of known forms. A transcription with too few letters (οὐδέ for
    οὐδέν) is never suppressed: there the OCR is the longer reading."""
    jt, jo = ''.join(key(w) for w in t), ''.join(key(w) for w in o)
    if not jt or not jo: return False
    if jt == jo: return True
    return len(jo) < len(jt) and subseq(jo, jt) and all(lex().get(lkey(w), 0) >= 2 for w in t if key(w))

def diff(T, O, key, quiet=True):
    a, b = [key(w) for w in T], [key(w) for w in O]
    ops = [op for op in L.opcodes(a, b)]
    # the two texts cover different stretches of the column: start/end at the first/last run of
    # >=3 agreeing words, so a stray one-word match at the edge does not anchor a false span
    solid = lambda op: op.tag == 'equal' and op.src_end - op.src_start >= 3
    while ops and not solid(ops[0]): ops.pop(0)
    while ops and not solid(ops[-1]): ops.pop()
    out = []
    for op in ops:
        if op.tag == 'equal': continue
        t = [w for w in T[op.src_start:op.src_end] if key(w)]; o = [w for w in O[op.dest_start:op.dest_end] if key(w)]
        if not t and not o: continue
        if quiet and ocr_noise(t, o, key): continue
        ctx = ' '.join(T[max(0, op.src_start - 3):op.src_start])
        out.append((op.src_start, ' '.join(t), ' '.join(o), ctx))
    n = sum(1 for w in T[ops[0].src_start:ops[-1].src_end] if key(w)) if ops else 0
    flagged = sum(max(1, len(t.split())) for _, t, _, _ in out)
    return out, n, flagged

if __name__ == '__main__':
    key = k_let if '--letters' in sys.argv else k_acc
    T = toks(open(sys.argv[1], encoding='utf-8').read()); O = ocr_lines(open(sys.argv[2], encoding='utf-8').read())
    out, n, fl = diff(T, O, key, quiet='--all' not in sys.argv)
    print(f'transcription words in span {n}; disagreements {len(out)}; words flagged {fl} ({fl/max(1,n):.1%})')
    for i, t, o, ctx in out: print(f'  @{i:4}  T: {t!r:40}  OCR: {o!r:40}  …{ctx[-40:]}')
