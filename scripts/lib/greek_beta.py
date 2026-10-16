"""Unicode polytonic Greek <-> Perseus/Morpheus beta code (lowercase form; capital = '*' prefix)."""
import unicodedata, re

BASE = dict(zip('αβγδεζηθικλμνξοπρστυφχψω', 'abgdezhqiklmnc' 'oprstufxyw'))
BASE['ς'] = 's'
MARK = {'\u0313': ')', '\u0314': '(', '\u0301': '/', '\u0300': '\\', '\u0342': '=', '\u0345': '|', '\u0308': '+'}
ELIDE = '\u00b4\u1fbd\u2019\u02bc\''   # elision marks: Migne sets U+00B4 after the word
ORDER = '+)(/\\=|'    # beta convention: diaeresis, breathing, accent, iota subscript
# oxia/tonos variants normalise to acute
FIX = {'\u0384': '\u0301', '\u1fbd': '\u0313', '\u1fbf': '\u0313', '\u1ffe': '\u0314'}

def is_greek(ch):
    o = ord(ch)
    return 0x370 <= o <= 0x3FF or 0x1F00 <= o <= 0x1FFF or o in (0x0300, 0x0301, 0x0313, 0x0314, 0x0342, 0x0345, 0x0308)

def to_beta(word, strip_accents=False):
    """Letters + their marks, marks in beta order. strip_accents drops accents/breathing (Morpheus -n style input)."""
    parts = []
    for ch in unicodedata.normalize('NFD', word):
        ch = FIX.get(ch, ch)
        lo = ch.lower()
        if lo in BASE:
            parts.append([('*' if ch != lo else '') + BASE[lo], []])
        elif ch in MARK and parts:
            parts[-1][1].append(MARK[ch])
        elif ch in ELIDE and parts:
            parts.append(["'", []])
    res = ''
    for letter, marks in parts:
        if strip_accents: marks = [m for m in marks if m == '+']
        res += letter + ''.join(sorted(marks, key=ORDER.index))
    return res.replace('r)r(', 'rr').replace('r(r)', 'rr')   # ῤῥ: Morpheus's cruncher crashes on it

_B2U = {'a':'α','b':'β','g':'γ','d':'δ','e':'ε','z':'ζ','h':'η','q':'θ','i':'ι','k':'κ','l':'λ','m':'μ','n':'ν','c':'ξ','o':'ο',
        'p':'π','r':'ρ','s':'σ','t':'τ','u':'υ','f':'φ','x':'χ','y':'ψ','w':'ω','v':'ϝ'}
_MK = {')':'\u0313','(':'\u0314','/':'\u0301','\\':'\u0300','=':'\u0342','|':'\u0345','+':'\u0308'}

def from_beta(b):
    """beta -> Unicode. Letters/marks convert; spaces, digits and punctuation pass through (LSJ runs contain them)."""
    b = re.sub(r'[_^]', '', b)          # vowel-quantity marks
    toks, cap, pend = [], False, []      # toks: [char, [marks]] for Greek letters, or a plain string
    for ch in b:                          # capital: '*' then marks THEN letter ('*)a' = Ἀ); lowercase: letter then marks
        if ch == '*': cap, pend = True, []
        elif ch in _B2U:
            toks.append([_B2U[ch].upper() if cap else _B2U[ch], pend if cap else []]); cap, pend = False, []
        elif ch in _MK and cap: pend.append(_MK[ch])
        elif ch in _MK and toks and isinstance(toks[-1], list): toks[-1][1].append(_MK[ch])
        else:
            cap, pend = False, []; toks.append(ch)
    s = ''.join(t if isinstance(t, str) else t[0] + ''.join(t[1]) for t in toks)
    s = unicodedata.normalize('NFC', s)
    return re.sub(r'σ(?![\u0370-\u03FF\u1F00-\u1FFF])', 'ς', s)   # final sigma: σ not followed by another Greek letter

if __name__ == '__main__':
    for w in ['ἐπειδή', 'Ἀντιόχου', 'μοναχός', 'θεοῦ', 'ᾠδή', 'ΕΠΙΣΤΟΛΗ', 'ἀϊδίου', 'Σίμων']:
        b = to_beta(w); print(w, b, from_beta(b))
