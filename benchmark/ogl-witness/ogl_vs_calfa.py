#!/usr/bin/env python3
"""Measure the OGL (Open Patrologia Graeca, 2015) OCR witnesses against Calfa for ONE PG tome.

Usage: ogl_vs_calfa.py <calfa_text.txt> <ogl_vol_dir> <out_dir>

<ogl_vol_dir> holds one *_ocr/ directory per scan copy, each with page .txt files.
Nothing here is ground truth: Calfa is itself ~1% CER. So we (1) align every witness to
Calfa word-for-word, (2) put all sources on the SAME set of Calfa positions, (3) solve the
pairwise disagreement matrix for each source's own error rate (d_ij ~= e_i + e_j, errors
assumed independent between engines), (4) vote the witnesses and see what the vote buys.
The independence assumption is optimistic (same typography -> shared confusions), so the
solved rates are LOWER BOUNDS; plate-check a sample of disagreements before trusting them.
"""
import sys, os, re, json, unicodedata, random, itertools, difflib
from collections import Counter

def dehyph_tokens(text):
    toks, carry = [], ''
    for line in text.splitlines():
        parts = line.split()
        if not parts:
            continue
        if carry:
            parts[0] = carry + parts[0]; carry = ''
        if parts[-1].endswith(('-', '‐', '­')) and len(parts[-1]) > 1:
            carry = parts[-1][:-1]; parts = parts[:-1]
        toks.extend(parts)
    if carry:
        toks.append(carry)
    return toks

KERAIA = '\u02b9\u0374\u02ba'
# Migne prints medial beta etc. as variant glyphs; Calfa normalizes them. Fold, so a convention is not scored as an error.
GLYPH = str.maketrans({'\u03d0': '\u03b2', '\u03d1': '\u03b8', '\u03f0': '\u03ba', '\u03f1': '\u03c1', '\u03d6': '\u03c0', '\u03d5': '\u03c6', '\u03f2': '\u03c3', '\u03f9': '\u03a3'})

def acc(t):
    """accent-sensitive key with grave folded to acute (the 2015 OGL pipeline emits acute for Migne's grave)."""
    return unicodedata.normalize('NFC', unicodedata.normalize('NFD', t).replace('\u0300', '\u0301'))

def clean(tok):
    t = unicodedata.normalize('NFC', tok)
    i, j = 0, len(t)
    while i < j and (unicodedata.category(t[i])[0] in 'PSN' or t[i] in KERAIA):
        i += 1
    while j > i and (unicodedata.category(t[j-1])[0] in 'PSN' or t[j-1] in KERAIA):
        j -= 1
    return t[i:j].translate(GLYPH)

def skel(t):
    d = unicodedata.normalize('NFD', t)
    d = ''.join(c for c in d if unicodedata.category(c) != 'Mn').lower()
    return d.replace('ς', 'σ')

GREEK = re.compile(r'[Ͱ-Ͽἀ-῿]')

def load(text):
    out = []
    for tok in dehyph_tokens(text):
        c = clean(tok)
        if c and GREEK.search(c):
            out.append(c)
    return out

def lis(pairs):
    """pairs sorted by a; longest strictly increasing subsequence on b."""
    import bisect
    tails, idx, prev = [], [], [-1] * len(pairs)
    for k, (_, b) in enumerate(pairs):
        p = bisect.bisect_left(tails, b)
        if p == len(tails):
            tails.append(b); idx.append(k)
        else:
            tails[p] = b; idx[p] = k
        prev[k] = idx[p-1] if p else -1
    res, k = [], idx[-1] if idx else -1
    while k != -1:
        res.append(pairs[k]); k = prev[k]
    return res[::-1]

def align(a, b, K=3):
    """Return list of (i,j) 1-1 matches with a[i]==b[j] (patience diff on K-grams, SequenceMatcher on small gaps)."""
    matches = []
    def rec(alo, ahi, blo, bhi):
        if alo >= ahi or blo >= bhi:
            return
        if (ahi - alo) * (bhi - blo) <= 250_000 or (ahi - alo) <= 300 or (bhi - blo) <= 300:
            sm = difflib.SequenceMatcher(None, a[alo:ahi], b[blo:bhi], autojunk=False)
            for blk in sm.get_matching_blocks():
                for t in range(blk.size):
                    matches.append((alo + blk.a + t, blo + blk.b + t))
            return
        ca, cb = {}, {}
        for i in range(alo, ahi - K + 1):
            g = tuple(a[i:i+K]); ca[g] = ca[g] + [i] if g in ca else [i]
        for j in range(blo, bhi - K + 1):
            g = tuple(b[j:j+K]); cb[g] = cb[g] + [j] if g in cb else [j]
        pairs = sorted((ia[0], cb[g][0]) for g, ia in ca.items()
                       if len(ia) == 1 and g in cb and len(cb[g]) == 1)
        anchors = lis(pairs)
        if not anchors:
            if K > 2:
                return rec_k(alo, ahi, blo, bhi, K - 1)
            return  # unalignable block -> structural
        pa, pb = alo, blo
        for ia, jb in anchors:
            rec(pa, ia, pb, jb)
            for t in range(K):
                if a[ia+t] == b[jb+t]:
                    matches.append((ia+t, jb+t))
            pa, pb = ia + K, jb + K
        rec(pa, ahi, pb, bhi)
    def rec_k(alo, ahi, blo, bhi, k):
        nonlocal K
        old, K = K, k
        rec(alo, ahi, blo, bhi)
        K = old
    rec(0, len(a), 0, len(b))
    return sorted(set(matches))

def map_to_calfa(calfa_s, wit_s):
    """For each Calfa index, the witness index it aligns to (equal match, or 1-1 inside an equal-sized gap), else None."""
    m = align(calfa_s, wit_s)
    mp = [None] * len(calfa_s)
    for i, j in m:
        mp[i] = j
    # fill equal-sized gaps between consecutive matches 1-1 (substitution clusters)
    prev_i, prev_j = -1, -1
    for i, j in m + [(len(calfa_s), len(wit_s))]:
        gi, gj = i - prev_i - 1, j - prev_j - 1
        if gi == gj and 0 < gi <= 6:
            for t in range(gi):
                mp[prev_i + 1 + t] = prev_j + 1 + t
        prev_i, prev_j = i, j
    return mp

def main():
    calfa_path, ogl_dir, out_dir = sys.argv[1:4]
    os.makedirs(out_dir, exist_ok=True)
    calfa = load(open(calfa_path, encoding='utf-8').read())
    calfa_s = [skel(t) for t in calfa]
    srcs = {'calfa': calfa}
    maps = {}
    for d in sorted(os.listdir(ogl_dir)):
        p = os.path.join(ogl_dir, d)
        if not (os.path.isdir(p) and d.endswith('_ocr')):
            continue
        files = sorted((f for f in os.listdir(p) if f.endswith('.txt')), key=lambda f: int(re.sub(r'\D', '', f) or 0))
        text = '\n'.join(open(os.path.join(p, f), encoding='utf-8', errors='replace').read() for f in files)
        w = load(text)
        name = d.split('_')[0]
        srcs[name] = w
        maps[name] = map_to_calfa(calfa_s, [skel(t) for t in w])
        cov = sum(x is not None for x in maps[name]) / len(calfa)
        print(f'{name}: {len(w)} tokens, aligned to {cov:.1%} of Calfa', flush=True)
    names = list(maps)
    allnames = ['calfa'] + names
    modes = (('accented (grave=acute, glyph variants folded)', acc), ('letters only (accents/breathings ignored)', skel))

    def common(sub):
        return [i for i in range(len(calfa)) if all(maps[n][i] is not None for n in sub if n != 'calfa')]
    def tokens(sub, P):
        out = {'calfa': [calfa[i] for i in P]}
        for n in sub:
            if n != 'calfa':
                out[n] = [srcs[n][maps[n][i]] for i in P]
        return out
    def solve(sub, tk, key, P):
        K = {n: [key(t) for t in tk[n]] for n in sub}
        d = {(x, y): sum(1 for a, b in zip(K[x], K[y]) if a != b) / len(P) for x, y in itertools.combinations(sub, 2)}
        e = {n: 0.0 for n in sub}
        for _ in range(500):
            for n in sub:
                oth = [(m, d[(n, m)] if (n, m) in d else d[(m, n)]) for m in sub if m != n]
                e[n] = sum(dd - e[m] for m, dd in oth) / len(oth)
        return K, d, e

    depth = Counter(sum(maps[n][i] is not None for n in names) for i in range(len(calfa)))
    nw = len(names)
    cov_any = 1 - depth[0] / len(calfa)
    cov_ge3 = sum(v for k, v in depth.items() if k >= min(3, nw)) / len(calfa)
    print(f'DEPTH: Calfa tokens covered by >=1 witness: {cov_any:.1%}; by >=3 witnesses: {cov_ge3:.1%}; by none: {depth[0]/len(calfa):.1%}  (n witnesses={nw})')
    print('depth histogram (witnesses covering -> % of Calfa tokens):', {k: f"{depth[k]/len(calfa):.1%}" for k in sorted(depth)})
    P = common(names)
    tok = tokens(allnames, P)
    print(f'common positions (all witnesses aligned): {len(P)} of {len(calfa)} Calfa tokens ({len(P)/len(calfa):.1%})')
    res = {'volume': os.path.basename(calfa_path), 'calfa_tokens': len(calfa), 'common_positions': len(P),
           'coverage': {n: sum(x is not None for x in maps[n]) / len(calfa) for n in names},
           'depth_any': round(cov_any, 4), 'depth_ge3': round(cov_ge3, 4), 'depth_hist': {str(k): depth[k] for k in sorted(depth)}}
    for mode, key in modes:
        K, d, e = solve(allnames, tok, key, P)
        vote = []
        for t in range(len(P)):
            c = Counter(K[n][t] for n in names).most_common(2)
            vote.append(c[0][0] if len(c) == 1 or c[0][1] > c[1][1] else None)
        decided = [v is not None for v in vote]
        vs_calfa = sum(1 for v, a in zip(vote, K['calfa']) if v is not None and v != a) / max(1, sum(decided))
        unanimous = sum(1 for t in range(len(P)) if len({K[n][t] for n in names}) == 1)
        un_diff = sum(1 for t in range(len(P)) if len({K[n][t] for n in names}) == 1 and K[names[0]][t] != K['calfa'][t])
        # selection-bias check: re-solve on bigger position sets (calfa + each witness pair)
        trip = {}
        for x, y in itertools.combinations(names, 2):
            sub = ['calfa', x, y]; P3 = common(sub); tk3 = tokens(sub, P3)
            _, _, e3 = solve(sub, tk3, key, P3)
            trip[f'{x[:3]}+{y[:3]}'] = (round(e3['calfa'], 4), round(e3[x], 4), round(e3[y], 4), len(P3))
        calfa_trip = [v[0] for v in trip.values()]
        res[mode] = {
            'pairwise_disagreement': {f'{x}~{y}': round(v, 5) for (x, y), v in d.items()},
            'solved_error_rate_all5_common': {n: round(e[n], 5) for n in allnames},
            'calfa_error_by_triple (bigger position sets)': {'min': min(calfa_trip), 'max': max(calfa_trip), 'mean': round(sum(calfa_trip)/len(calfa_trip), 5)},
            'vote_decided_frac': round(sum(decided) / len(P), 4),
            'vote_vs_calfa_disagreement': round(vs_calfa, 5),
            'vote_error_est (vote~calfa minus calfa err)': round(vs_calfa - e['calfa'], 5),
            'witnesses_unanimous_frac': round(unanimous / len(P), 4),
            'unanimous_but_differs_from_calfa (Calfa likely wrong or shared confusion)': un_diff,
        }
        print(f'\n== {mode} ==')
        print('solved error per source (all-5 common):', {n[:6]: f'{e[n]:.2%}' for n in allnames})
        print(f'calfa error from triples on larger position sets: {min(calfa_trip):.2%} .. {max(calfa_trip):.2%} (mean {sum(calfa_trip)/len(calfa_trip):.2%})')
        print(f'vote(5) vs calfa disagreement: {vs_calfa:.2%}  -> vote error est {vs_calfa - e["calfa"]:.2%}')
        print(f'all five witnesses unanimous: {unanimous/len(P):.1%}; of those differing from Calfa: {un_diff} ({un_diff/len(P):.1%})')
    # sample of disagreement sites for plate-check
    random.seed(7)
    key0 = skel
    sites = [t for t in range(len(P)) if len({tok[n][t] for n in names}) > 1 or any(tok[n][t] != tok['calfa'][t] for n in names)]
    sample = random.sample(sites, min(60, len(sites)))
    with open(os.path.join(out_dir, 'disagreement-sample.tsv'), 'w') as f:
        f.write('calfa_idx\tcontext\t' + '\t'.join(allnames) + '\n')
        for t in sorted(sample):
            i = P[t]
            ctx = ' '.join(calfa[max(0, i-3):i]) + ' [[' + calfa[i] + ']] ' + ' '.join(calfa[i+1:i+4])
            f.write(f'{i}\t{ctx}\t' + '\t'.join(tok[n][t] for n in allnames) + '\n')
    json.dump(res, open(os.path.join(out_dir, 'results.json'), 'w'), ensure_ascii=False, indent=1)
    print('\nwrote', out_dir)

if __name__ == '__main__':
    main()
