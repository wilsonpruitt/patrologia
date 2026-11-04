"""Rule pass over raw Kraken Greek, before translation (kt method, 2026-11-04).

Usage: python3 scripts/kt-rules.py <work> [--score]
  reads  raw/kraken/<work>/text/p-*.txt
  writes raw/kraken/<work>/ruled/p-*.txt  (same lines, same tokens: words are only re-accented, never split or joined)
         raw/kraken/<work>/ruled/CHANGES.tsv  (page, line, from, to, rule) -- every change, for the image check
  --score: diff Kraken and ruled against raw/kraken/<work>/checked (Dorotheus only) and print fixed/broken per rule.

WHY. The Doctrina I pilot (translate/dorotheus-doctrinae/PILOT.md) found the translator catches letters but misses
accents systematically. Over the whole Doctrinae, Kraken vs the paid plate check: 551 breathing, 502 acute/grave,
137 iota subscript, 93 acute/circumflex, ~680 glyph diffs. Three rules, in order:

  glyph   word-final elision marks ´ ′ ’ ' ` ΄ → ᾿ (never ʹ, the numeral sign: ιʹ = 10) ; stray ']' (Kraken noise) dropped.
  lexical a word not in the lexicon, one breathing / iota-subscript / acute↔circumflex edit away from a form that is,
          takes that form. The lexicon is CLEAN Greek only: SBLGNT, First1K Swete, First1K texts in ~/neoplatonism.org
          and ~/bereshit, and the shipped PG Greek in src/greek -- EXCEPT the work being ruled (never its own control).
  accent  Migne's convention, measured on the checked Doctrinae: a final acute becomes grave before a comma or another
          word (868:48, 12504:1120), a final grave becomes acute before . ; · (475:7). The exceptions are the grammar
          book's: a following enclitic keeps the acute, and interrogative τίς/τί never take a grave.

A rule never touches a word whose context is unclear (end of page, before » or a bracket). Everything it does change
is in CHANGES.tsv, so a doubtful row can be checked on the image like any translator flag.
"""
import collections, difflib, glob, os, re, sys, unicodedata as ud

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
HOME = os.path.expanduser('~')
args = [a for a in sys.argv[1:] if not a.startswith('--')]
if not args: sys.exit(__doc__)
work, SCORE = args[0], '--score' in sys.argv
K = os.path.join(ROOT, 'raw/kraken', work)
OUT = os.path.join(K, 'ruled')

ACUTE, GRAVE, CIRC, SMOOTH, ROUGH, YPOG = '́', '̀', '͂', '̓', '̔', 'ͅ'
VOWELS = set('αεηιουω')
nfd = lambda s: ud.normalize('NFD', s)
nfc = lambda s: ud.normalize('NFC', s)
def isletter(c): return ud.category(c).startswith('L')

# ---------------- lexicon ----------------
def lexkey(w):
    """lookup key: lowercase, grave → acute, an enclitic throwback (second acute) dropped."""
    d = nfd(w.lower()).replace(GRAVE, ACUTE)
    if d.count(ACUTE) + d.count(CIRC) > 1:
        i = d.rfind(ACUTE)
        if i > 0: d = d[:i] + d[i + 1:]
    return nfc(d)

WORD = re.compile(r'[^\W\d_]+', re.U)
def corpus_words():
    for f in glob.glob(f'{HOME}/wpb/raw/morphgnt-sblgnt/*.txt'):
        for l in open(f):
            p = l.split()
            if len(p) >= 5: yield p[4]
    for f in glob.glob(f'{HOME}/surplus/raw/swete/data/*.txt'):
        for l in open(f):
            p = l.split(maxsplit=1)
            if len(p) == 2: yield from WORD.findall(p[1])
    for f in glob.glob(f'{HOME}/neoplatonism.org/raw/first1k/*.xml') + glob.glob(f'{HOME}/bereshit/raw/first1k/*.xml'):
        yield from WORD.findall(re.sub(r'<[^>]+>', ' ', open(f).read()))
    stem = work.split('-')[0]                       # dorotheus-doctrinae → leave out every dorotheus-* work
    for d in glob.glob(f'{ROOT}/src/greek/*'):
        if os.path.basename(d).startswith(stem): continue
        for f in glob.glob(f'{d}/*.md'):
            t = open(f).read().split('\n---', 1)[-1]
            yield from WORD.findall(re.sub(r'\[[a-z]+:[^\]]*\]', ' ', t))

LEX = collections.Counter()
for w in corpus_words():
    w = nfc(w)
    if any('Ͱ' <= c <= 'Ͽ' or 'ἀ' <= c <= '῿' for c in w): LEX[lexkey(w)] += 1

def variants(core):
    """forms one breathing / iota-subscript / acute↔circumflex edit away (up to two edits)."""
    def one(d):
        out = set()
        for i, c in enumerate(d):
            if c == SMOOTH: out.add(d[:i] + ROUGH + d[i + 1:])
            elif c == ROUGH: out.add(d[:i] + SMOOTH + d[i + 1:])
            elif c == ACUTE and CIRCUM: out.add(d[:i] + CIRC + d[i + 1:])
            elif c == CIRC and CIRCUM: out.add(d[:i] + ACUTE + d[i + 1:])
            if c.lower() in 'αηω':                  # add a subscript after the base letter's marks
                j = i + 1
                while j < len(d) and not isletter(d[j]): j += 1
                if YPOG not in d[i + 1:j]: out.add(d[:j] + YPOG + d[j:])
        return out
    d = nfd(core)
    v1 = one(d)
    v2 = {y for x in v1 for y in one(x)}
    return {nfc(x) for x in (v1 | v2) if x != d}

MINF = 3
CIRCUM = os.environ.get('KT_CIRC', '0') == '1'      # acute↔circumflex off: Byzantine accentuation (κρῖμα) reads as error
RATIO = float(os.environ.get('KT_RATIO', '10'))      # swap a form 10× rarer than its neighbour (Doctrinae knee; 0 = off)
def lexical(core):
    own = LEX[lexkey(core)] if core else 0
    if not core or (own and not RATIO) or not any(c in (ACUTE, GRAVE, CIRC, SMOOTH, ROUGH) for c in nfd(core)):
        return None
    cands = collections.Counter({v: LEX[lexkey(v)] for v in variants(core) if LEX[lexkey(v)]})
    if not cands: return None
    (best, n), *rest = cands.most_common(2) + [(None, 0)]
    if n < MINF or rest[0][1] * 2 > n: return None  # thin or no clear winner: leave it for the translator
    # NOT capped by the form's own frequency: measured on the Doctrinae, ἣ→ἢ fixed 92 and broke 0 (7 were wrong either way)
    if own and n < RATIO * own: return None
    return best

# ---------------- accent position ----------------
ENCLITIC = {nfc(w) for w in '''τις τι τινος τινι τινα τινες τινων τισι τισιν τινας του τω μου μοι με σου σοι σε
  εστι εστιν ειμι εισι εισιν εσμεν εστε φημι φησι φησιν φασι φασιν ποτε που πως πω πη γε τε τοι περ νυν'''.split()}
INTERROG = {nfc(w) for w in 'τίς τί τίνα τίνος τίνι τίνες τίνων τίσι τίσιν τίνας'.split()}

def final_mark(core):
    """(index in NFD, mark) of an acute/grave on the final syllable, else None."""
    d = nfd(core)
    for i in range(len(d) - 1, -1, -1):
        if d[i] in (ACUTE, GRAVE, CIRC):
            j = i - 1
            while j >= 0 and not isletter(d[j]): j -= 1
            if any(isletter(c) and nfd(c)[0].lower() in VOWELS for c in d[j + 1:]): return None
            return (i, d[i]) if d[i] != CIRC else None
    return None

def swap(core, i, mark): d = nfd(core); return nfc(d[:i] + mark + d[i + 1:])

SPLIT = re.compile(r'^([«(\[]*)(.*?)([,.·;:»)!]*)$')
ELISION = str.maketrans({'´': '᾿', '′': '᾿', '’': '᾿', "'": '᾿', '`': '᾿', '΄': '᾿'})

def rule_page(lines):
    """returns new lines + [(line, from, to, rule)]"""
    toks = [l.split(' ') for l in lines]          # split on single spaces so the line rejoins exactly
    changes = []
    page_opens = any('[' in t and not t.startswith('[b:') for r in toks for t in r)   # Migne's own brackets
    def setw(li, ti, new, rule):
        if new != toks[li][ti]: changes.append((li + 1, toks[li][ti], new, rule)); toks[li][ti] = new
    # glyph + lexical, token by token
    for li, row in enumerate(toks):
        for ti, t in enumerate(row):
            if not t or t.startswith('[b:') or (len(t) == 2 and t.endswith(']')): continue
            new = nfc(t)
            if ']' in new and not new.startswith('[') and not page_opens: new = new.replace(']', '')
            # ʹ (U+0374) is the numeral sign -- ιʹ, κγʹ, Γʹ -- never an elision mark: left alone
            if re.search(r'[^\W\d_][´′’\'`΄]$', new): new = new[:-1] + '᾿'
            setw(li, ti, new, 'glyph')
            pre, core, post = SPLIT.match(toks[li][ti]).groups()
            # half a word is not a word: skip a piece before a line-end hyphen and the piece that continues it
            if core.endswith('-') or (ti == 0 and li > 0 and toks[li - 1] and toks[li - 1][-1].endswith('-')): continue
            fix = lexical(core)
            if fix: setw(li, ti, pre + fix + post, 'lexical')
    # accent position over the page's word stream (a line-end hyphen joins two pieces into one word)
    words, cur = [], []
    for li, row in enumerate(toks):
        for ti, t in enumerate(row):
            if not t or t.startswith('[b:') or (len(t) == 2 and t.endswith(']')): continue
            cur.append((li, ti))
            if not (t.endswith('-') and ti == len(row) - 1): words.append(cur); cur = []
    if cur: words.append(cur)
    for wi, pieces in enumerate(words):
        li, ti = pieces[-1]
        pre, core, post = SPLIT.match(toks[li][ti]).groups()
        if not core or '᾿' in core or core.endswith('-'): continue
        if sum(nfd(core).count(m) for m in (ACUTE, GRAVE, CIRC)) > 1: continue   # throwback before an enclitic
        fm = final_mark(core)
        if not fm: continue
        i, mark = fm
        if post[:1] in ('»', ')', ':', '!'): continue
        if post[:1] in ('.', ';', '·'): want = ACUTE
        elif post[:1] == ',': want = GRAVE
        elif wi + 1 < len(words):
            nl, nt = words[wi + 1][0]
            npre, ncore, _ = SPLIT.match(toks[nl][nt]).groups()
            if npre: continue
            bare = nfc(''.join(c for c in nfd(ncore.lower()) if isletter(c)))
            if bare in ENCLITIC and not any(c in (ACUTE, GRAVE, CIRC) for c in nfd(ncore)): continue
            want = GRAVE
        else: continue                               # end of page: next word unknown
        if want == GRAVE and lexkey(core) in INTERROG: continue
        if mark != want: setw(li, ti, pre + swap(core, i, want) + post, 'accent')
    return [' '.join(r) for r in toks], changes

# ---------------- run ----------------
os.makedirs(OUT, exist_ok=True)
pages = sorted(glob.glob(f'{K}/text/p-*.txt'))
log = ['page\tline\tfrom\tto\trule']
for f in pages:
    p = os.path.basename(f)[:-4]
    new, ch = rule_page(open(f).read().split('\n'))
    open(f'{OUT}/{p}.txt', 'w').write('\n'.join(new))
    log += [f'{p}\t{l}\t{a}\t{b}\t{r}' for l, a, b, r in ch]
open(f'{OUT}/CHANGES.tsv', 'w').write('\n'.join(log) + '\n')
by = collections.Counter(r.split('\t')[-1] for r in log[1:])
print(f'{len(pages)} pages, {len(log) - 1} changes ({", ".join(f"{k} {v}" for k, v in by.most_common())}); '
      f'lexicon {len(LEX):,} forms → {os.path.relpath(OUT, ROOT)}/')

if SCORE:
    # same token view as kt-score.py: band markers out, NFC; compare Kraken / ruled / checked word by word
    def toks(path):
        out = []
        for l in open(path).read().split('\n'):
            ws = re.sub(r'\[b: .\]\s*', '', nfc(l)).split()
            if ws and ws[-1] in 'ΑΒΓΔ': ws = ws[:-1]
            out += ws
        return out
    APOSN = str.maketrans({"'": '᾿', '᾽': '᾿', '’': '᾿'})
    base = lambda s: ''.join(c for c in nfd(s.lower()) if isletter(c))
    res = collections.Counter(); ex = collections.defaultdict(list)
    rule_of = {}
    for r in log[1:]:
        p, l, a, b, rule = r.split('\t'); rule_of.setdefault((p, b), rule)
    for f in pages:
        p = os.path.basename(f)[:-4]
        c = f'{K}/checked/{p}.txt'
        if not os.path.exists(c): continue
        kt, rt, ct = toks(f), toks(f'{OUT}/{p}.txt'), toks(c)
        if len(kt) != len(rt): res['TOKEN COUNT CHANGED'] += 1; continue
        sm = difflib.SequenceMatcher(None, [base(w) for w in kt], [base(w) for w in ct], autojunk=False)
        for tag, i1, i2, j1, j2 in sm.get_opcodes():
            if tag != 'equal': continue
            for k, r, ch in zip(kt[i1:i2], rt[i1:i2], ct[j1:j2]):
                ch = ch.translate(APOSN)
                if k == r: res['wrong, untouched' if k != ch else 'right, untouched'] += 1; continue
                rule = rule_of.get((p, r), '?')
                key = f'{rule}: ' + ('FIXED' if r == ch else 'BROKE' if k == ch else 'changed, still wrong')
                res[key] += 1; ex[key].append(f'{p} {k}→{r} (checked {ch})')
    print('\nscore against checked/ (word pairs whose letters match):')
    for k in sorted(res): print(f'  {res[k]:6d}  {k}')
    for k in sorted(ex):
        if 'FIXED' not in k: print(f'\n{k} — e.g.\n    ' + '\n    '.join(ex[k][:15]))
