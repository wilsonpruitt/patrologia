#!/usr/bin/env python3
"""Latin analogue of kt-apply.py (LATIN-ONLY-SPEC.md section 1; written 2026-11-05). Does not touch kt-apply.py.

Usage: python3 scripts/kt-apply-latin.py <work> [--dry]
  reads   translate/<work>/so-0NN.md (+ .lines.tsv)      scaffold lines for the Latin-only chunks (those with `pages:` and no `range:`)
          translate/<work>/IMAGE-CHECK-LATIN-<chunk>.tsv  plate verdicts (R rows are applied)
          translate/<work>/<chunk>.en.md  ## OCR           table rows of kind stray/space/heading (not image-checked) and, if a row
                                                           is absent from the image check, its ocr/doubt rows too (reported)
          translate/<work>/verify/LATIN-OVERRIDES.tsv      the 39 M/P/? rows: the Latin column prints `latin`
          translate/<work>/verify/LATIN-HEADS.tsv          title blocks the djvu splits across the columns
  writes  raw/kraken/<work>/latin-checked/<chunk>.tsv      `tag \\t text` (drops omitted, heads substituted, calls stripped,
                                                           gutter letters as a leading `[b: X]`)
          translate/<work>/verify/LATIN-APPLIED.tsv        every applied row: chunk, tag, from, to, status, source
          translate/<work>/verify/PRINT-ERRORS-LATIN.tsv   the M rows
          translate/<work>/verify/LATIN-CALLS.tsv          every note call stripped: chunk, tag, preceding word, call
          translate/<work>/verify/LATIN-BANDS-DOUBT.tsv    gutter letters out of order (never emitted)
Passes only at 0 NOT FOUND.
"""
import csv, os, re, statistics, sys, unicodedata as ud
from collections import Counter

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
work = sys.argv[1]; DRY = '--dry' in sys.argv
T = os.path.join(ROOT, 'translate', work); K = os.path.join(ROOT, 'raw/kraken', work); V = f'{T}/verify'
nfc = lambda s: ud.normalize('NFC', s)

# ---- chunks: scaffold with `pages:` and no `range:` ----
CHUNKS = []
for f in sorted(os.listdir(T)):
    m = re.match(r'([a-z]+-\d{3})\.md$', f)
    if not m: continue
    s = open(f'{T}/{f}').read()
    if re.search(r'^pages:', s, re.M) and not re.search(r'range:', s): CHUNKS.append(m.group(1))

# hard-coded per spec section 1 "Furniture" 1 (v2 tags, exact)
DROPS = {'p0220.L.01', 'p0220.R.01', 'p0262.L.01', 'p0262.R.01', 'p0265.L.01', 'p0265.R.01', 'p0275.L.01', 'p0275.R.01',
         'p0258.L.02', 'p0258.R.03', 'p0264.R.16', 'p0273.R.50', 'p0262.R.38'}
# DEVIATION from the spec's drop list (reported): eight foot-of-column apparatus lines (scripture locators / note numerals) that the
# wider Kraken pad let into the column and that no translator logged as stray. They are Migne's notes, which place.py places (step 4).
FOOT_DROPS = {'p0216.L.58', 'p0216.R.58', 'p0218.L.58', 'p0218.R.58', 'p0220.L.46', 'p0260.L.55', 'p0260.R.56', 'p0274.L.59',
              'p0088.R.58'}   # Maximus mo-015: Combefis's footnote 91 (full width under both columns), not Maximus's text
CALL = re.compile(r'\(\d+(?:[-·]\d+)?\)|\s*(?:\*+|[“„]+)(?=[\s.,;:?!»]|$)')   # numbered calls, plus asterisk/quote marks no stray row logged
OFFS = [0, 1, -1, 2, -2, 3, -3]

def strip_map(s):
    """NFD, drop combining marks; return (stripped, index map back into s)"""
    out, idx = [], []
    for i, ch in enumerate(s):
        for c in ud.normalize('NFD', ch):
            if ud.category(c) != 'Mn': out.append(c.lower()); idx.append(i)
    return ''.join(out), idx

def bounded(part):
    pre = r'(?<!\w)' if part[:1].isalnum() or part[:1] == '_' else ''
    post = r'(?!\w)' if part[-1:].isalnum() or part[-1:] == '_' else ''
    return re.compile(pre + re.escape(part) + post)

def find_in(text, part, start=0):
    """span (a, b) of `part` in text at/after start: exact bounded, exact, then accent-stripped bounded, stripped"""
    for rx in (bounded(part), re.compile(re.escape(part))):
        m = rx.search(text, start)
        if m: return m.span()
    st, idx = strip_map(text); sp, _ = strip_map(part)
    if not sp: return None
    sstart = next((k for k, i in enumerate(idx) if i >= start), len(st))
    for rx in (bounded(sp), re.compile(re.escape(sp))):
        m = rx.search(st, sstart)
        if m: return idx[m.start()], idx[m.end() - 1] + 1
    return None

class Chunk:
    def __init__(self, cid):
        self.cid = cid
        md = [l for l in open(f'{T}/{cid}.md').read().split('\n') if re.match(r'p\d{4}\.[LR]\.\d+ \|', l)]
        ts = [l.split('\t') for l in open(f'{T}/{cid}.lines.tsv').read().split('\n')[1:] if l]
        assert len(md) == len(ts), cid
        self.lines = []
        for a, b in zip(md, ts):
            tag, text = a.split(' | ', 1)
            assert tag == b[0], (tag, b[0])
            self.lines.append(dict(tag=tag, text=nfc(text), x1=int(b[1]), y1=int(b[2]), x2=int(b[3]), page=tag[1:5], col=tag[6], ln=int(tag[8:]), drop=None, head=None))
        self.cols = {}
        for L in self.lines: self.cols.setdefault((L['page'], L['col']), []).append(L)

    def locate_first(self, tag, part):
        m = re.match(r'p(\d{4})\.([LR])\.(\d+)', tag)
        pg, c, ln = m.group(1), m.group(2), int(m.group(3))
        cl = self.cols.get((pg, c), [])
        if not cl: return None
        base = min(range(len(cl)), key=lambda k: abs(cl[k]['ln'] - ln))
        cands = [base + o for o in OFFS if 0 <= base + o < len(cl)]
        for strict in (True, False):                      # exact forms on any offset first, accent-stripped last
            for k in cands:
                t = cl[k]['text']
                for rx in ((bounded(part), re.compile(re.escape(part))) if strict else ()):
                    mm = rx.search(t)
                    if mm: return cl, k, mm.span()
        for k in cands:
            sp = find_in(cl[k]['text'], part)
            if sp: return cl, k, sp
        return None

    def across(self, tag, a, b):
        """a word the translator wrote joined that Migne breaks (Re-/dempior): find `a` over line i ending '-' + line i+1"""
        m = re.match(r'p(\d{4})\.([LR])\.(\d+)', tag)
        cl = self.cols.get((m.group(1), m.group(2)), [])
        if not cl: return None
        base = min(range(len(cl)), key=lambda k: abs(cl[k]['ln'] - int(m.group(3))))
        a0, b0 = a.replace('-', '').replace('/', ''), b.replace('-', '').replace('/', '')
        for o in OFFS:
            i = base + o
            if not (0 <= i < len(cl) - 1): continue
            top, bot = cl[i]['text'], cl[i + 1]['text']
            if not top.endswith('-'): continue
            joined = top[:-1] + bot; cut = len(top) - 1
            sp = find_in(joined, a0)
            if not sp: continue
            j, e = sp
            if not (j < cut < e): continue
            k = cut - j
            if b0.endswith(a0[k:]) and len(b0) - len(a0[k:]) > 0: k = len(b0) - len(a0[k:])
            new = joined[:j] + b0[:k] + '-\n' + b0[k:] + joined[e:]
            cl[i]['text'], cl[i + 1]['text'] = new.split('\n')
            return 'applied~'
        return None

def clean(s):
    s = re.sub(r'\[\?\]', '', s)
    s = re.sub(r'\s*\((\?|[^)]*\?)\)\s*$', '', s)
    if '(' in s and not s.startswith('(') and not re.search(r'\(\d', s): s = re.sub(r'\s*\(([^)]*)\)\s*$', '', s)
    s = re.sub(r'\?+$', lambda m: '', s) if re.search(r'[\w-]\?$', s) and not re.search(r'\w\?\s*$', s[:-1] + ' ') else s
    return nfc(s.strip())

def split_parts(s):
    return [p.strip() for p in re.split(r'\s*…\s*|/', s)]

def parse_tag(tag):
    return re.sub(r'–\d+$', '', tag)

def edit(cl, j, a, b, new):
    t = cl[j]['text']; t2 = t[:a] + new + t[b:]
    if not new: t2 = re.sub(r'  +', ' ', t2).strip()
    cl[j]['text'] = t2
    return a + len(new)

def try_part(cl, order, start0, part, new):
    """locate `part` on the lines of `order` (indices into cl) and apply `new`. Returns (line, end pos) or None.
    Forms tried: exact; hyphen the OCR dropped at a line end (`ome-` for `ome`); a break inside the form (`name «que`,
    `vir-cumscribi`), written on one line by the translator; word by word when the word counts agree."""
    # 1 exact (bounded, plain, accent-stripped), line by line in `order`; strict pass over all lines before the loose one
    for strict in (True, False):
        for n, j in enumerate(order):
            t = cl[j]['text']; s0 = start0 if n == 0 else 0
            if strict:
                for rx in (bounded(part), re.compile(re.escape(part))):
                    m = rx.search(t, s0)
                    if m: return j, edit(cl, j, m.start(), m.end(), new)
            else:
                sp = find_in(t, part, s0)
                if sp: return j, edit(cl, j, sp[0], sp[1], new)
    # 2 hyphen dropped by the OCR at the end of a line
    if part.endswith('-') and len(part) > 2:
        stem = part[:-1]
        for j in order:
            t = cl[j]['text']
            if t.endswith(stem) and re.search(r'(?<!\w)' + re.escape(stem) + r'$', t):
                return j, edit(cl, j, len(t) - len(stem), len(t), new.rstrip('-') + ('-' if new else ''))
    # 3 a break inside the printed form: `vir-cumscribi` (hyphen) or `name «que` (space)
    for n, j in enumerate(order):
        if j + 1 >= len(cl): continue
        top, bot = cl[j]['text'], cl[j + 1]['text']
        if '-' in part.strip('-') and '-' in new.strip('-'):
            (a0, a1), (b0, b1) = part.split('-', 1), new.split('-', 1)
            if (top.endswith(a0 + '-') or top.endswith(a0)) and bot.startswith(a1):
                edit(cl, j, len(top) - len(a0) - (1 if top.endswith(a0 + '-') else 0), len(top), b0 + '-'); edit(cl, j + 1, 0, len(a1), b1)
                return j + 1, len(b1)
        if ' ' in part:
            a0, a1 = part.rsplit(' ', 1) if False else (part.split(' ')[0], ' '.join(part.split(' ')[1:]))
            for cut in range(1, len(part.split(' '))):
                a0 = ' '.join(part.split(' ')[:cut]); a1 = ' '.join(part.split(' ')[cut:])
                if top.endswith(a0) and bot.startswith(a1):
                    nw = new.split(' ')
                    if len(nw) == len(part.split(' ')): b0, b1 = ' '.join(nw[:cut]), ' '.join(nw[cut:])
                    else:                                    # one word where the plate breaks it: put the hyphen back
                        core = re.sub(r'^\W+|\W+$', '', a1); k = max(1, len(new) - len(core)); b0, b1 = new[:k] + '-', new[k:]
                    edit(cl, j, len(top) - len(a0), len(top), b0); edit(cl, j + 1, 0, len(a1), b1)
                    return j + 1, len(b1)
        if '-' not in part:               # one word (or a form starting with one), broken by the plate: Redempior for Re-/dempior
            a0 = part
            joined = top[:-1] + bot if top.endswith('-') else None
            if joined:
                sp = find_in(joined, a0)
                cut = len(top) - 1
                if sp and sp[0] < cut < sp[1]:
                    j0, e = sp; k = cut - j0
                    b0 = new.replace('-', '')
                    if b0.endswith(a0[k:]) and len(b0) - len(a0[k:]) > 0: k = len(b0) - len(a0[k:])
                    nj = joined[:j0] + b0[:k] + '-\n' + b0[k:] + joined[e:]
                    cl[j]['text'], cl[j + 1]['text'] = nj.split('\n')
                    return j + 1, k
    # 4 word by word (an elided word the translator did not mark)
    pw, nw = part.split(), new.split()
    if len(pw) > 1 and len(pw) == len(nw):
        got = None; cur = (order[0], start0)
        for a, b in zip(pw, nw):
            ca, cb = a.rstrip('.,;:?!»'), b.rstrip('.,;:?!»')
            hit = None
            for n, j in enumerate(order):
                if j < cur[0]: continue
                t = cl[j]['text']; s0 = cur[1] if j == cur[0] else 0
                m = bounded(ca).search(t, s0) if ca else None
                if m: hit = (j, m); break
            if not hit: return None
            j, m = hit; cur = (j, edit(cl, j, m.start(), m.end(), cb))
        return cur
    return None

def apply_row(ch, tag, printed, target, rowkind):
    m = re.match(r'p(\d{4})\.([LR])\.(\d+)(?:–(\d+))?', tag)
    pg, c, ln = m.group(1), m.group(2), int(m.group(3)); ln2 = int(m.group(4)) if m.group(4) else ln
    cl = ch.cols.get((pg, c), [])
    if not cl: return 'NOT FOUND (no column)'
    fp = split_parts(printed); tt = target.strip()
    tp = ([''] * len(fp)) if tt in ('—', '') else split_parts(tt)
    if len(tp) != len(fp):
        if len(tp) == 1: tp = [tp[0]] + [''] * (len(fp) - 1)
        elif len(fp) == 1: fp = [printed.strip()]; tp = [tt]
        else: return 'NOT FOUND (part count)'
    base = min(range(len(cl)), key=lambda k: abs(cl[k]['ln'] - ln))
    changed = False; cur = None
    for i, (a, b) in enumerate(zip(fp, tp)):
        if not a: continue
        before = [L['text'] for L in cl]
        if i == 0: order_sets = [[base + o] for o in OFFS if 0 <= base + o < len(cl)]
        else:
            lo = cur[0]; hi = min(len(cl), max(lo + 4, base + (ln2 - ln) + 4))
            order_sets = [list(range(lo, hi))]
        got = None
        if i == 0:
            # exact forms on any offset before loose ones: try each offset's single line, strict first
            allo = [x[0] for x in order_sets]
            got = try_part(cl, allo, 0, a, b) if False else None
            for strictness in (0,):
                pass
            # pass 1: exact on each offset in turn
            for x in order_sets:
                t = cl[x[0]]['text']
                for rx in (bounded(a), re.compile(re.escape(a))):
                    mm = rx.search(t)
                    if mm: got = (x[0], edit(cl, x[0], mm.start(), mm.end(), b)); break
                if got: break
            if not got:
                for x in order_sets:
                    got = try_part(cl, x, 0, a, b)
                    if got: break
            if not got and a == b:                         # a no-op row (Migne's own form kept) whose form straddles a line break
                w0 = a.split()[0]
                if any(find_in(cl[x[0]]['text'], w0) for x in order_sets): return 'already'
        else:
            got = try_part(cl, order_sets[0], cur[1], a, b)
        if not got:
            if i == 0 and b and any(find_in(cl[x[0]]['text'], b) for x in order_sets): return 'already'
            return 'NOT FOUND' if i == 0 else 'NOT FOUND (later part)'
        cur = got
        if [L['text'] for L in cl] != before: changed = True
    return 'applied' if changed else 'already'

# ---- tables ----
def table_rows(cid):
    s = open(f'{T}/{cid}.en.md').read().split('## OCR')[1]
    out = []
    for l in s.split('\n')[3:]:
        if not l.startswith('|'): continue
        c = [x.strip().replace('\\|', '|') for x in re.split(r'(?<!\\)\|', l)[1:-1]]
        out.append(dict(tag=c[0], printed=c[1], reading=c[2], sure=c[3], kind=c[4], why=c[5]))
    return out

def run():
    rep = Counter(); applied = []; prints = []; calls = []; doubts = []; notfound = []
    ov_all = list(csv.DictReader(open(f'{V}/LATIN-OVERRIDES.tsv'), delimiter='\t'))
    heads_all = list(csv.DictReader(open(f'{V}/LATIN-HEADS.tsv'), delimiter='\t'))
    os.makedirs(f'{K}/latin-checked', exist_ok=True)
    for cid in CHUNKS:
        ch = Chunk(cid)
        ic = list(csv.DictReader(open(f'{T}/IMAGE-CHECK-LATIN-{cid}.tsv'), delimiter='\t'))
        ick = {(r['tag'], r['printed'].replace('\\|', '|')) for r in ic}
        ovk = {(r['tag'], r['printed']) for r in ov_all if r['chunk'] == cid}
        rows = []
        for r in ic:
            if r['verdict'] != 'R': continue
            plate = re.search(r'plate=(.+?)(?:\s*\(|;|\s*$)', r['comment'] or '')
            if r['tag'] == 'p0219.L.19': to = 'mœroreque … emi-'     # spec: plate= names only the 2nd part
            elif plate: to = nfc(plate.group(1).strip())
            else: to = clean(r['reading'])
            rows.append(('R', r['tag'], r['printed'], to))
        for r in table_rows(cid):
            if r['kind'] in ('stray', 'space', 'heading'):
                rd = 'D' if (r['tag'], r['printed']) == ('p0259.R.45', 'p') else r['reading']   # plate read: the lone p is the gutter D
                rows.append(('table', r['tag'], r['printed'], rd))
            elif r['kind'] in ('ocr', 'doubt') and (r['tag'], r['printed']) not in ick:
                rep['table ocr/doubt absent from image check'] += 1
                rows.append(('table-absent', r['tag'], r['printed'], r['reading'])); print('  absent from image check:', cid, r['tag'], r['printed'], '->', r['reading'])
        for r in ov_all:
            if r['chunk'] == cid:
                rows.append(('override-' + r['verdict'], r['tag'], r['printed'], r['latin']))
                if r['verdict'] == 'M': prints.append(r)
        rf = f'{V}/LATIN-RESIDUE-FIXES.tsv'           # residue-scan fixes (spec: "adds an override row"; kept in a file of their own so the 39 stay M 21 / P 13 / ? 5)
        if os.path.exists(rf):
            for r in csv.DictReader(open(rf), delimiter='\t'):
                if r['chunk'] == cid: rows.append(('residue', r['tag'], r['printed'], r['latin']))
        for src, tag, pr, to in rows:
            st = apply_row(ch, tag, pr, to, src)
            rep[(src.split('-')[0] if src.startswith('override') else src, st.split(' ')[0] if not st.startswith('NOT') else 'NOT FOUND')] += 1
            applied.append((cid, tag, pr, to, st, src))
            if st.startswith('NOT FOUND'): notfound.append((cid, tag, pr, to, st))
        # whole-line stray rows (footnote leak): a line reduced to nothing is dropped
        for L in ch.lines:
            if not L['text'].strip(): L['drop'] = 'empty'; rep['dropped (emptied by a row)'] += 1
        # drops (furniture 1)
        for L in ch.lines:
            if L['tag'] in DROPS: L['drop'] = 'furniture'; rep['drops (hard-coded)'] += 1
            elif L['tag'] in FOOT_DROPS: L['drop'] = 'footnote'; rep['foot-of-column apparatus lines dropped (deviation)'] += 1
        # heads (furniture 2)
        hs = [h for h in heads_all if h['chunk'] == cid]
        if hs:
            rep_tags = [t for h in hs for t in h['replaces'].split(',') if t]
            tagorder = {L['tag']: i for i, L in enumerate(ch.lines)}
            first = min(rep_tags, key=lambda t: tagorder[t])
            for L in ch.lines:
                if L['tag'] in rep_tags: L['drop'] = 'head'; L['headrows'] = None
            fl = next(L for L in ch.lines if L['tag'] == first); fl['drop'] = None
            fl['head'] = [h['text'] for h in hs]
            rep['head lines'] += len(hs)
        # emit lines list (heads expand into one record per printed line)
        kept = []
        for L in ch.lines:
            if L['drop']: continue
            if L['head']:
                for i, t in enumerate(L['head']):
                    kept.append(dict(L, text=t, tag=L['tag'] if i == 0 else f"{L['tag']}+{i}", ishead=True))
            else: kept.append(dict(L, ishead=False))
        # note calls (furniture 3)
        for L in kept:
            for m in CALL.finditer(L['text']):
                pre = L['text'][:m.start()].split()
                calls.append((cid, L['tag'], pre[-1] if pre else '', m.group().strip()))
            t = CALL.sub('', L['text']); L['text'] = re.sub(r'\s+', ' ', t).strip()
            t = L['text']
        # gutter band letters (furniture 4)
        med = {}
        for key, cl in ch.cols.items():
            med[key] = statistics.median(x['x1'] for x in cl)
        # a letter is kept only if it sits where its band does: Migne's bands are ~1330 px apart (measured on full pages:
        # A 350-450, B ~1720, C ~3010, D ~4380); a column that shows its own A is measured from that A (p0215 starts lower).
        # The spec's rule is "in order"; position is what catches p0215.L.16 (a B read as D), which order alone cannot.
        found = []
        for L in kept:
            key = (L['page'], L['col']); toks = L['text'].split(); letter = None
            if L['col'] == 'R' and toks and re.fullmatch(r'[A-Da-d]', toks[0]) and L['x1'] < med[key] - 40 and not L['ishead']:
                letter = toks[0].upper(); L['text'] = ' '.join(toks[1:])
            elif L['col'] == 'L' and toks and re.fullmatch(r'[A-D]', toks[-1]) and len(toks) > 1:
                letter = toks[-1]; L['text'] = ' '.join(toks[:-1])
            if letter: found.append((L, key, letter))
        basey = {}
        for L, key, letter in found:
            if letter == 'A': basey.setdefault(key, L['y1'])
        for L, key, letter in found:
            base = basey.get(key, 400)
            pos = (L['y1'] - base) / 1330.0; idx = ord(letter) - 65
            if abs(pos - idx) <= 0.55:
                L['band'] = letter; rep['bands emitted'] += 1
            else:
                doubts.append((cid, L['tag'], letter, f"y={L['y1']} expected band {max(0, min(3, round(pos)))}")); rep['bands doubt'] += 1
        # write
        if not DRY:
            with open(f'{K}/latin-checked/{cid}.tsv', 'w') as o:
                for L in kept:
                    o.write(f"{L['tag']}\t{('[b: %s] ' % L['band']) if L.get('band') else ''}{L['text']}\n")
        rep[('lines', cid)] = len(kept)
    if not DRY:
        with open(f'{V}/LATIN-APPLIED.tsv', 'w') as o:
            o.write('chunk\ttag\tfrom\tto\tstatus\tsource\n'); o.writelines('\t'.join(a) + '\n' for a in applied)
        with open(f'{V}/PRINT-ERRORS-LATIN.tsv', 'w') as o:
            o.write('chunk\ttag\tprinted\tlatin\tverdict\tsic_note\n')
            o.writelines('\t'.join([r['chunk'], r['tag'], r['printed'], r['latin'], r['verdict'], r.get('sic_note') or '']) + '\n' for r in prints)
        with open(f'{V}/LATIN-CALLS.tsv', 'w') as o:
            o.write('chunk\ttag\tprecedes\tcall\n'); o.writelines('\t'.join(c) + '\n' for c in calls)
        with open(f'{V}/LATIN-BANDS-DOUBT.tsv', 'w') as o:
            o.write('chunk\ttag\tletter\tnote\n'); o.writelines('\t'.join(d) + '\n' for d in doubts)
    for k, v in sorted(rep.items(), key=lambda kv: str(kv[0])): print(' ', k, v)
    print('  calls recorded', len(calls), '| band doubts', len(doubts))
    print(f'NOT FOUND {len(notfound)}')
    for n in notfound: print('   NOT FOUND', *n)
    return len(notfound)

if __name__ == '__main__':
    sys.exit(1 if run() else 0)
