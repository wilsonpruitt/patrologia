#!/usr/bin/env python3
"""Maximus, *Quaestiones et dubia* (qd-001..006, all Greek; adapted from dc-tables.py 2026-11-23): build the verify/ tables kt-to-site needs.
Run AFTER   MP_STRICT=1 MP_WORK=maximus-quaestiones-dubia MP_DJVU=raw/pg090/090_djvu.xml MP_CMAP=data/pg-column-maps/pg090.json MP_BYCLASS=1 \\
            MP_RANGES=396-431 python3 scripts/mp-bands.py
Writes translate/maximus-quaestiones-dubia/verify/: GREEK-DROPS.tsv, GREEK-BREAKS.tsv (title block, then for each of the 79 questions the heading, the question and the answer), GREEK-BANDS.tsv (edited in place; BAND_SET = every page, gutter letters located on the plate by blob detection + grid fit), GREEK-PATCHES.tsv (rebuilt from
the hand patches below + the OCR-table rows of kind stray/space/heading). Run from ~/patrologia."""
import csv, json, re, os, unicodedata as ud, glob
T = 'translate/maximus-quaestiones-dubia'; K = 'raw/kraken/maximus-quaestiones-dubia/checked/'
nfc = lambda s: ud.normalize('NFC', s)
NOREAD = ('—', '-', '', '(omit)', '(delete)', '(none)', '(nothing)')   # Mystagogia tables write (none)
def page_lines(p):
    f = f'{K}p-{p:04d}.txt'
    return open(f).read().split('\n') if os.path.exists(f) else None
chunks = []
for r in csv.DictReader(open(f'{T}/CHUNKS.tsv'), delimiter='\t'):
    a = re.match(r'p-(\d+):(\d+)', r['first']).groups(); b = re.match(r'p-(\d+):(\d+)', r['last']).groups()
    chunks.append((r['chunk'], int(a[0]), int(a[1]), int(b[0]), int(b[1])))
inrange = {}
for c, fp, fl, lp, ll in chunks:
    for p in range(fp, lp + 1):
        ls = page_lines(p)
        if ls is None: continue                         # duplicate leaf: no file
        for i in range((fl if p == fp else 1), (ll if p == lp else len(ls)) + 1): inrange[(p, i)] = c
def line(p, i): return page_lines(p)[i - 1].strip()

# ---- OCR-table rows ----
rows = []
for f in sorted(glob.glob(f'{T}/qd-0[0-9][0-9].en.md')):
    cid = os.path.basename(f)[:6]
    for l in open(f):
        m = re.match(r'\| (p\d{4})\.(\d+)([-–]\d+| / [^|]*?)? \| (.*?) \| (.*?) \| (\w+) \| (\w+) \| ?(.*?) ?\|$', l.rstrip('\n'))
        if m: rows.append(dict(chunk=cid, page=int(m.group(1)[1:]), line=int(m.group(2)), multi=bool(m.group(3)), printed=m.group(4).strip(),
                               reading=m.group(5).strip(), kind=m.group(7), why=m.group(8)))
for r in rows:
    for k_ in ('printed', 'reading'): r[k_] = r[k_].strip().strip('`').strip() if r[k_].strip().startswith('`') else r[k_]       # the dc cells of dc-003/004 quote their words in backticks
for r in rows:
    if r['reading'].startswith('(Latin'): r['reading'] = '—'      # the translator's note for a leaked Latin heading line, e.g. «(Latin heading CAPITA ALIA)»: a drop
for r in rows:
    if r['page'] == 715 and r['line'] == 1 and r['reading'].startswith('ζουσα ('): r['reading'] = 'ζουσα'      # the table's gloss «(ἀτιμά-ζουσα)» is the translator's explanation of the hyphenated word, not text
print('OCR rows', len(rows))

# ---- DROPS ----
drops = {}
for r in rows:
    if r['kind'] == 'stray' and r['reading'] in NOREAD and (r['page'], r['line']) in inrange \
            and nfc(r['printed']).strip() == nfc(line(r['page'], r['line'])):
        drops[(r['page'], r['line'])] = 'not Greek text: ' + r['why'][:60]
    elif r['kind'] == 'stray' and r['reading'] in NOREAD:
        print('  NOT A WHOLE-LINE DROP (check):', r['page'], r['line'], repr(r['printed'][:40]), '| line:', repr(line(r['page'], r['line'])[:50]) if (r['page'], r['line']) in inrange else 'out of range')
# hand drops: lines the plate does not bear out (image check R: phantom / misread hyphenation fragment)
EXTRA_DROPS = {(410, 42): 'foot-note junk after the column\'s last Greek line (410.41 ends «ἐπαί-»; the foot notes follow on the plate)', (413, 39): 'second line of the garbled heading ΕΡΩΤ. ΜΔʹ. (plate: one heading line)'}
for k_, w_ in EXTRA_DROPS.items(): drops[k_] = 'hand: ' + w_
with open(f'{T}/verify/GREEK-DROPS.tsv', 'w') as o:
    o.write('page\tline\ttext\twhy\n')
    for (p, i), w in sorted(drops.items()): o.write(f'p-{p:04d}\t{i}\t{line(p, i)}\t{w}\n')

# ---- BANDS ----
bands = list(csv.DictReader(open(f'{T}/verify/GREEK-BANDS.tsv'), delimiter='\t'))
BK = {(b['page'], int(b['line'])): b for b in bands}
for (p, i) in list(drops):                                  # a dropped line hands its band to the next kept line
    pg = f'p-{p:04d}'; b = BK.get((pg, i))
    if b:
        j = i + 1
        while (p, j) in drops: j += 1
        if BK.get((pg, j)) is None: b['line'] = str(j); BK[(pg, j)] = b
        del BK[(pg, i)]
bands = [b for b in bands if BK.get((b['page'], int(b['line']))) is b]
bands = [b for b in bands if (int(b['page'][2:]), int(b['line'])) in inrange]
bands.sort(key=lambda b: (b['page'], int(b['line'])))
# generic: a stray row that is a lone band letter at a line end/start (glued after a hyphen, no space, or before a capital) -> strip it, recording
# the band (the letter IS the band marker, Migne's A-D). Lines without a band entry get one from the letter.
LOOK = {'Α': 'A', 'Β': 'B', 'Γ': 'C', 'Δ': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D'}
gen_n = 0
for r in rows:
    if r['kind'] != 'stray' or r['reading'] not in NOREAD or (r['page'], r['line']) not in inrange or (r['page'], r['line']) in drops: continue
    pr = r['printed'].strip()
    if pr.split(' ')[0] not in LOOK or len(pr.split(' ')[0]) != 1 or pr in ('Α Η,',) and False: continue
    pg = f'p-{r["page"]:04d}'; b = BK.get((pg, r['line']))
    if b and b['strip_from']: continue
    t = line(r['page'], r['line']); new = None
    first = pr.split(' ')[0]
    tail = ' ' + pr.split(' ', 1)[1] if ' ' in pr else ''
    if t.endswith(first + tail): new = t[:-len(first + tail)].rstrip(' ')
    elif t.startswith(first) and re.match(r'[Α-Ω]', t[1:2] or ''): new = t[1:]
    if new is None or new == t: print('  BAND STRIP not applied', pg, r['line'], repr(pr), '|', t[-30:]); continue
    if not b:
        b = dict(page=pg, line=str(r['line']), letter=LOOK[first], how='table: band letter read as text', strip_from='', strip_to=''); bands.append(b); BK[(pg, r['line'])] = b
    b['strip_from'], b['strip_to'] = t, new; gen_n += 1
print('generic band strips', gen_n)
# BAND_SET: every page. The gutter letters were located on the plate 2026-11-22 (dark blobs in the gutter channel, grid-fitted A-D, each assigned to the Greek line
# whose centre is nearest; a letter standing in a paragraph gap goes to the first line after the gap; a letter midway between two lines goes to the nearer one). Where no
# letter stands in our range (page ends before the D position) none is set. p0602: the A stands in the gap after the century heading: first text line (8). Pages checked by eye:
# 602 606 624 631 643 661 665 669 672 685 687 699.
# BAND_SET: every page. Gutter letters located on the plate 2026-11-23: dark isolated blobs in the gutter channel (blob detection), each detected letter assigned to the Greek line whose centre is nearest,
# the others inferred from mp-bands' djvu fit (grid A-D, one letter per ~1337 px); p0396: only the C (level with the heading ΕΡΩΤΗΣΙΣ Αʹ, line 28) falls in range; p0403 B stands in the paragraph gap: first line after.
BAND_SET = {
'p-0396': [[28, 'C']],
'p-0397': [[1, 'A'], [14, 'B'], [28, 'C']],
'p-0398': [[1, 'A'], [14, 'B'], [26, 'C']],
'p-0399': [[1, 'A'], [13, 'B'], [26, 'C']],
'p-0400': [[1, 'A'], [14, 'B'], [28, 'C']],
'p-0401': [[1, 'A'], [13, 'B'], [28, 'C']],
'p-0402': [[1, 'A'], [15, 'B']],
'p-0403': [[1, 'A'], [14, 'B'], [27, 'C']],
'p-0404': [[1, 'A'], [13, 'B'], [25, 'C'], [38, 'D']],
'p-0405': [[1, 'A'], [14, 'B'], [28, 'C']],
'p-0406': [[1, 'A'], [15, 'B'], [30, 'C'], [44, 'D']],
'p-0407': [[1, 'A'], [13, 'B'], [27, 'C']],
'p-0408': [[1, 'A'], [16, 'B'], [30, 'C']],
'p-0409': [[1, 'A'], [15, 'B'], [28, 'C'], [42, 'D']],
'p-0410': [[1, 'A'], [15, 'B'], [29, 'C']],
'p-0411': [[1, 'A'], [14, 'B'], [29, 'C']],
'p-0412': [[1, 'A'], [15, 'B'], [29, 'C'], [44, 'D']],
'p-0413': [[1, 'A'], [14, 'B'], [28, 'C']],
'p-0414': [[1, 'A'], [15, 'B'], [30, 'C']],
'p-0415': [[15, 'B'], [29, 'C'], [44, 'D']],
'p-0416': [[1, 'A'], [15, 'B'], [29, 'C'], [44, 'D']],
'p-0417': [[1, 'A'], [16, 'B'], [27, 'C'], [40, 'D']],
'p-0418': [[1, 'A'], [15, 'B']],
'p-0419': [[1, 'A'], [13, 'B'], [27, 'C'], [40, 'D']],
'p-0420': [[1, 'A'], [12, 'B'], [27, 'C'], [40, 'D']],
'p-0421': [[1, 'A']],
'p-0422': [[1, 'A'], [16, 'B'], [30, 'C'], [44, 'D']],
'p-0423': [[1, 'A']],
'p-0424': [[1, 'A'], [16, 'B'], [31, 'C']],
'p-0425': [[1, 'A'], [13, 'B'], [26, 'C'], [40, 'D']],
'p-0426': [[1, 'A'], [14, 'B'], [27, 'C']],
'p-0427': [[1, 'A'], [14, 'B']],
'p-0428': [[1, 'A'], [16, 'B'], [26, 'C']],
'p-0429': [[1, 'A'], [15, 'B'], [29, 'C'], [44, 'D']],
'p-0430': [[1, 'A'], [16, 'B'], [30, 'C'], [45, 'D']],
'p-0431': [[1, 'A'], [14, 'B'], [28, 'C']]}
# glued-letter strips found by mp-bands / the generic loop (the strip applies to the line's text, whatever band the line carries)
allstrips = {(b['page'], int(b['line'])): (b['strip_from'], b['strip_to']) for b in bands
             if b['strip_from'] and b['strip_from'] == line(int(b['page'][2:]), int(b['line']))}
bands = []
for pg_, lst_ in BAND_SET.items():
    for ln_, let_ in lst_:
        p_ = int(pg_[2:]); j_ = ln_
        while (p_, j_) in drops: j_ += 1                     # a band on a dropped line goes to the next kept line
        if (p_, j_) not in inrange: continue                 # beyond the end of the work's range (p0709 ends at line 37)
        sf_, st_ = allstrips.get((pg_, j_), ('', ''))
        bands.append(dict(page=pg_, line=str(j_), letter=let_, how='plate read 2026-11-22 (gutter letter, blob-located)', strip_from=sf_, strip_to=st_))
bands.sort(key=lambda b: (b['page'], int(b['line'])))
bandlines = {(b['page'], int(b['line'])) for b in bands}
STRIP_ONLY = {k: v for k, v in allstrips.items() if k not in bandlines}      # glued letters on a line that carries no band: removed by a patch
with open(f'{T}/verify/GREEK-BANDS.tsv', 'w') as o:
    o.write('page\tline\tletter\thow\tstrip_from\tstrip_to\n')
    for b in bands: o.write('\t'.join([b['page'], b['line'], b['letter'], b['how'], b['strip_from'], b['strip_to']]) + '\n')
print('drops', len(drops), '| bands', len(bands), '| band strips on band lines', sum(1 for b in bands if b['strip_from']), '| strips on other lines (patched)', len(STRIP_ONLY))

# ---- PATCHES ----
pf = f'{T}/verify/GREEK-PATCHES.tsv'
pat = []            # rebuilt on every run (hand patches + OCR-table rows)
CALL = re.compile(r'\s*\([^()\s]{1,3}\)|\s*[⁰¹²³⁴⁵⁶⁷⁸⁹]+')
bd = {(b['page'], int(b['line'])): b for b in bands}
def cur(p, i):
    t = line(p, i); b = bd.get((f'p-{p:04d}', i)); st = allstrips.get((f'p-{p:04d}', i))
    if b and b['strip_from'] and t == b['strip_from']: t = b['strip_to']
    elif st and t == st[0]: t = st[1]
    t = CALL.sub('', t)
    for q in pat:
        if q['page'] == f'p-{p:04d}' and int(q['line']) == i:
            a = q['from']
            if ' / ' in a: a = a.split(' / ')[-1]
            if a in t: t = t.replace(a, q['to'], 1)
    return t
new, skipped = [], []
for (pg_, i_), (sf_, st_) in sorted(STRIP_ONLY.items()):           # glued band letters on lines that carry no band: removed here
    p_ = int(pg_[2:]); k = 0
    while k < min(len(sf_), len(st_)) and sf_[k] == st_[k]: k += 1
    m = 0
    while m < min(len(sf_), len(st_)) - k and sf_[len(sf_) - 1 - m] == st_[len(st_) - 1 - m]: m += 1
    lo = max(0, k - 4); a_ = sf_[lo:len(sf_) - m + min(m, 4)]; b_ = st_[lo:len(st_) - m + min(m, 4)]
    q = dict(page=pg_, line=str(i_), **{'from': a_}, to=b_, source='band letter glued to the line (stripped; the letter is the gutter letter, Migne A-D)'); pat.append(q); new.append(q)
# hand patches. (page, line, from, to, why). `from` is matched on the line AFTER the band strip and the removal of note calls.
KT = 'kt-apply NOT FOUND (a word split across lines): '
MANUAL = [
 # kt-apply NOT FOUND rows (cross-line words, garbled brackets), read at the plate 2026-11-23 (600 dpi crops of the Greek column)
 (400, 1, 'μεοι,', 'μενοι,', KT + 'πυρού-|μενοι (p0399.34 / p0400.01; plate μενοι)'),
 (402, 10, '[al. ἔμπτυστε]', '[Cord. ἔμπτυστε]', KT + 'bracket as the plate prints it: [Cord. ἔμπτυστε]'),
 (411, 1, 'Αει σε', 'ρει σε', KT + 'ἐπαί-|ρει (plate: the line opens «ρει σε»; the Α is the gutter letter fused)'),
 (414, 1, 'μηνεύεταικτῆσις', 'μηνεύεται κτῆσις', 'lost space (ἑρμηνεύεται κτῆσις)'),
 (414, 1, '[απ-Α', '[ἀπο-', KT + 'bracket [ἀπο-|κύλισις] as the plate prints it (no siglum); the Α is the gutter letter fused'),
 (414, 2, 'κύλισι].Δωὴκ', 'κύλισις]. Δωὴκ', KT + 'bracket close, final ς and lost space'),
 (414, 2, 'ἐστιλογι-', 'ἐστι λογι-', 'lost space'),
 (414, 19, 'ἀλη-]', 'ἀλη-', KT + 'ἀλη-|θινὴ (stray ] removed)'), (414, 20, 'θυνὴ', 'θινὴ', KT + 'ἀλη-|θινὴ'),
 (416, 40, 'συν-]', 'συν-', KT + 'συν-|ανιστάμενος (stray ] removed)'), (416, 41, 'πινιστάμενος', 'ανιστάμενος', KT + 'συν-|ανιστάμενος'),
 (416, 44, 'ὁδεύον', 'ὁδεύον-', KT + 'ὁδεύον-|τες (hyphen lost)'), (416, 45, 'τες,', 'τες.', KT + 'ὁδεύον-|τες. (plate: full point)'),
 (424, 3, 'ἁμα', 'ἀμαρ-', KT + 'ἀμαρ-|τίας'),
 (428, 31, 'σημά-', 'σημαί-', KT + 'σημαί-|νεται (plate prints σημαί-)'), (429, 1, 'ἃ νεται', 'νεται', KT + 'σημαί-|νεται'),
 # other hand patches found at the plate
 (414, 35, 'τε]', 'τε', 'stray ] at the line end (column rule; the plate prints no bracket here)'),
 (403, 9, 'ται', 'ται. »', 'the plate closes the quotation «… οὐ δύναν-|ται. »» (Kraken lost the point and the guillemet)'),
 (431, 28, 'μεναι..... Λείπει.', 'μεναι. . . .¶Λείπει.', 'the plate ends «συμπλεκό-|μεναι. . . . Λείπει.» (Migne\'s note that the rest is wanting): the closing word as its own paragraph, as the English\'s «The rest is wanting.»'),
 (410, 32, 'Δπόκρ.', 'Απόκρ.', 'Δ read for Α; the plate prints «Απόκρ.» without a breathing (a print error: PRINT-ERRORS.tsv p0410.32), so the Greek keeps what the plate prints'),
 (409, 44, 'φοραπαθήματα', 'φορα παθήματα', 'lost space (διά-φορα παθήματα)'),
 (416, 32, 'οὐ-', 'οὐ', 'false hyphen (οὐ | χρὴ)'),
 (417, 29, 'γράφεται(,', 'γράφεται,', 'note-call remnant «(»'),
 (426, 17, 'λίθους τις', 'λίθους τι-', 'τι-|μίους (1 Cor 3:12)'),
 # Migne's brackets: the sigla the plate prints (apparatus readers, image check A, coordinator crops of the plate)
 (400, 29, 'Ὡς οὖν Ἴσ. ἀντικειμένην', 'Ὡς οὖν [Ἴσ. πρὸς] ἀντικειμένην', 'bracket as the plate prints it: [Ἴσ. πρὸς] (Kraken lost the brackets and the word)'),
 (401, 8, '[Β. πολλαχοῦ]', '[R. πολλαχοῦ]', 'bracket siglum as the plate prints it (R.); the opening sort is worn (the reader saw a brace-like one)'),
 (404, 30, '[.τὸν λογι-', '[R. τὸν λογι-', 'bracket siglum as the plate prints it (R.)'), (404, 31, 'κατὰ μνὴ.]', 'κατὰ μνή.]', 'accent'),
 (406, 25, '[al. διαφόρως]', '[R. non bene διαφόρως;]', 'bracket as the plate prints it (apparatus reader 2)'),
 (408, 1, '[al. τοῖς νεοττοῖς]', '[Reg. τοῖς νεοττοῖς]', 'bracket siglum as the plate prints it (Reg.)'),
 (410, 9, '[ταύτας]', '[R. ταύτας]', 'bracket siglum as the plate prints it (R.)'), (410, 35, '[ἑτέρων]', '[R. ἑτέρων]', 'bracket siglum as the plate prints it (R.)'),
 (416, 48, '[ἐν τῇ πόλει ταύτῃ]', '[vulg. ἐν τῇ πόλει ταύτῃ]', 'bracket siglum as the plate prints it (vulg.)'),
 (425, 16, '[ἴσ. ἀναλήψεως]', '[Ἴσ. ἀναλήψεως]', 'bracket siglum as the plate prints it (Ἴσ.)'),
 (426, 31, '[διαγνώσεως]', '{διαγνώσεως}', 'the plate prints this one in curly braces'),
 # question headings whose line Kraken lost (the heading stands on its own line on the plate, read at 600 dpi): the numeral line is patched in after the previous line (¶ = paragraph break)
 (399, 9, 'λέγεται.', 'λέγεται.¶ΕΡΩΤ. Θʹ.', 'heading line lost: Q.9 (numeral by sequence)'),
 (402, 12, 'ὑπόκειται.', 'ὑπόκειται.¶ΕΡΩΤ. ΙΕʹ.', 'heading line lost: Q.15'), (402, 19, 'αἱμάτων.', 'αἱμάτων.¶ΕΡΩΤ. ΙϚʹ.', 'heading line lost: Q.16'),
 (403, 13, 'οὐ δύναται.', 'οὐ δύναται.¶ΕΡΩΤ. ΙΗʹ.', 'heading line lost: Q.18'),
 (413, 38, 'εʹ.', 'ΕΡΩΤ. ΜΔʹ.', 'Q.44 heading garbled over two lines (the second, 413.39, dropped); numeral by sequence, plate «ΕΡΩΤ. ΜΔʹ.»'),
 (415, 46, 'ὑπόστασιν.', 'ὑπόστασιν.¶ΕΡΩΤ. Νʹ.', 'heading line lost between p0415.46 and .47: Q.50 «ΕΡΩΤ. Νʹ.» (plate read)'),
 (418, 16, 'σίας.', 'σίας.¶ΕΡΩΤ. ΝΗʹ.', 'heading line lost between p0418.16 and .17: Q.58 «ΕΡΩΤ. ΝΗʹ.» (plate read)'),
 (423, 14, 'ἀγνοεῖν.', 'ἀγνοεῖν.¶ΕΡΩΤ. ΞΖʹ.', 'heading line lost: Q.67 «ΕΡΩΤ. ΞΖʹ.» (plate read)'),
 (424, 44, 'Ἀπόκρ.', 'ΕΡΩΤ. ΞΗʹ.¶. . . . . . . . . .¶Ἀπόκρ.', 'Q.68: heading and the row of points that stands for the missing question (Migne prints neither text; the Latin has none); both lost by Kraken (plate read p0424 foot)'),
 (425, 6, 'τυγχάνωμεν.', 'τυγχάνωμεν.¶ΕΡΩΤ. ΞΘʹ.', 'heading line lost: Q.69 (numeral by sequence)'),
 (425, 11, 'Ἀπόκρ.', 'Ἀπόκρ. . . . . . . . . . .', 'Q.69: «Ἀπόκρ.» followed on the plate by a row of points (the answer wanting); Kraken lost the row'),
 (425, 12, 'εΤ.ο.', 'ΕΡΩΤ. Οʹ.¶. . . . . . . . . .', 'Q.70: heading, then a row of points for the missing question (plate), which Kraken lost'),
 (426, 16, 'Τ ἐστιν,', 'ΕΡΩΤ. ΟΓʹ.¶Τί ἐστιν,', 'Q.73: heading line lost (plate read); Τ for Τί'),
 (427, 6, 'κρίσεως.', 'κρίσεως.¶ΕΡΩΤ. ΟΔʹ.', 'heading line lost: Q.74'), (428, 17, 'Θεοῦ.', 'Θεοῦ.¶ΕΡΩΤ. ΟϚʹ.', 'heading line lost: Q.76'),
 (429, 15, 'οικία.', 'οικία.¶ΕΡΩΤ. ΟΗʹ.', 'heading line lost: Q.78'),
]

for p_, i_, a_, b_, why_ in MANUAL:
    t_ = cur(p_, i_)
    if a_ in t_:
        if t_.count(a_) > 1: print('  MANUAL ambiguous (first occurrence taken)', p_, i_, repr(a_))
        q = dict(page=f'p-{p_:04d}', line=str(i_), **{'from': a_}, to=b_, source='HAND (coordinator/plate or table, not a table row): ' + why_); pat.append(q); new.append(q)
    elif b_ and b_ in t_: print('  MANUAL already applied', p_, i_, repr(a_))
    else: print('  MANUAL NOT APPLICABLE', p_, i_, repr(a_), '|', repr(t_[:70]))
nhand = len(pat); nclip = 0
SKIP_ROWS = {(399, 9), (402, 12), (402, 19), (403, 13), (413, 38), (415, 46), (418, 16), (423, 14), (424, 44), (425, 6), (425, 12), (426, 16), (427, 6), (428, 17), (429, 15), (414, 1), (414, 2), (409, 43), (416, 32), (426, 17), (417, 29)}      # rows replaced by the hand patches above
for r in rows:
    if (r['page'], r['line']) in SKIP_ROWS: continue
    CLIP = False
    if (r['kind'] not in ('stray', 'space', 'heading') and not CLIP) or (r['page'], r['line']) not in inrange or (r['page'], r['line']) in drops: continue
    a, b_ = r['printed'], r['reading']
    if r['kind'] == 'stray' and nfc(CALL.sub('', a)) == nfc(b_): continue          # a note call and nothing else: stripped by pattern
    if r['multi'] or ' / ' in a or '…' in a: skipped.append((r, 'multi-part')); continue
    if b_ in NOREAD:
        pr_ = a.strip(); t_ = cur(r['page'], r['line'])
        if r['kind'] == 'stray' and len(pr_) >= 3 and t_.count(pr_) == 1 and not (len(pr_.split(' ')[0]) == 1 and pr_.split(' ')[0] in 'ΑΒΓΔABCD'):
            q = dict(page=f'p-{r["page"]:04d}', line=str(r['line']), **{'from': pr_ + ' ' if t_.startswith(pr_ + ' ') else pr_}, to='',
                     source=f'OCR-TABLE {r["chunk"]} kind=stray (translator reading, not plate-checked): junk fragment removed: {r["why"][:60]}')
            pat.append(q); new.append(q); continue
        if r['kind'] == 'stray' and len(pr_) <= 2 and pr_ not in ('Α', 'Β', 'Γ', 'Δ', 'A', 'B', 'C', 'D') and len(re.findall(r'(?<!\S)' + re.escape(pr_) + r'(?!\S)', t_)) == 1:
            m_ = re.search(r'(?<!\S)' + re.escape(pr_) + r'(?!\S)', t_)
            fr_ = (' ' + pr_) if m_.start() > 0 and t_[m_.start() - 1] == ' ' else (pr_ + ' ')
            q = dict(page=f'p-{r["page"]:04d}', line=str(r['line']), **{'from': fr_}, to='',
                     source=f'OCR-TABLE {r["chunk"]} kind=stray (translator reading, not plate-checked): lone mark removed: {r["why"][:60]}')
            pat.append(q); new.append(q); continue
        skipped.append((r, 'no reading')); continue
    t = cur(r['page'], r['line'])
    a2 = nfc(CALL.sub('', a))
    if nfc(a) not in nfc(t) and a2 not in nfc(t):
        if nfc(b_) in nfc(t) or nfc(CALL.sub('', b_)) in nfc(t): continue                  # already done (kt-apply or a hand patch)
        skipped.append((r, 'printed form not in the (stripped, patched) line: ' + t[:60])); continue
    use = a if nfc(a) in nfc(t) else a2
    q = dict(page=f'p-{r["page"]:04d}', line=str(r['line']), **{'from': use, 'to': CALL.sub('', b_) if use == a2 else b_},
             source=f'OCR-TABLE {r["chunk"]} kind={r["kind"]} (translator reading, not plate-checked): {r["why"][:70]}')
    pat.append(q); new.append(q); nclip += 1 if CLIP else 0
for q in pat:
    if 'ΕΡΩΤΗΣΙΣ ' in q['to'] and 'ΕΡΩΤΗΣΙΣ Αʹ.' not in q['to']: q['to'] = q['to'].replace('ΕΡΩΤΗΣΙΣ ', 'ΕΡΩΤ. ')      # the plate prints «ΕΡΩΤ.» for every question but the first
with open(pf, 'w') as o:
    o.write('page\tline\tfrom\tto\tsource\n')
    for q in pat: o.write('\t'.join([q['page'], q['line'], q['from'], q['to'], q['source']]) + '\n')
print('patches', len(pat), '(strips', len(STRIP_ONLY), '| hand', nhand - len(STRIP_ONLY), '| table', len(pat) - nhand, ', of them col. 1181 line openings', nclip, ') | skipped', len(skipped))
for r, why in skipped: print('  SKIP', r['chunk'], r['page'], r['line'], r['kind'], repr(r['printed'][:30]), '->', repr(r['reading'][:30]), '|', why)

# ---- BREAKS (after patches, so the lines are the patched ones) ----
# the title block (p0396:24 «ΤΟΥ ΑΥΤΟΥ» / 25-26 «ΠΕΥΣΕΙΣ … ΚΑΙ ΕΚΛΟΓΑΙ» / 27 «Διαφόρων κεφαλαίων ἀπορουμένων»), then for each of the 79 questions THREE paragraphs: the heading «ΕΡΩΤ. Xʹ.»,
# the question, and the answer (from «Ἀπόκρ.»). A heading Kraken lost is patched onto the end of the previous line with a '¶' (hand patches above), so its break is inline.
# Matched by SEQUENCE to the numerals 1..79 (the patched numerals are read off the plate; Kraken mangles them), never by regex alone; the hand-placed ones are listed.
U_ = ['', 'Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ϛ', 'Ζ', 'Η', 'Θ']; T_ = ['', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο']
def gnum(n): return T_[n // 10] + U_[n % 10]
kept = [(p, i) for (p, i), c in sorted(inrange.items()) if (p, i) not in drops]
HEADRE = re.compile(r'ΕΡΩΤ(?:ΗΣΙΣ|\.) (\S+?)ʹ')
breaks = {(396, 24): 'title', (396, 25): 'para', (396, 27): 'para'}
n = 0; state = None; inline_hand = []; nq = 0; na = 0
for idx_, (p, i) in enumerate(kept):
    t = cur(p, i)
    if state == 'question' and t.strip():            # the line after a heading line that carries no question: the question opens here
        breaks[(p, i)] = 'para'; state = 'answer'
        if re.match(r"\W*[ἈΑ]πόκ", t): na += 1; state = 'between'      # (a question wanting: the answer follows at once)
        elif idx_ >= 0 and (t.startswith('ΕΡΩΤ.') or '¶' in t): pass
        continue
    m = HEADRE.search(t)
    if m and 'ΠΕΥΣΕΙΣ' not in t:
        n += 1
        assert m.group(1) == gnum(n), (p, i, n, m.group(1), t)
        parts = t.split('¶')
        hi = next(k for k, x in enumerate(parts) if 'ΕΡΩΤ' in x)
        if hi == 0: breaks[(p, i)] = 'para'              # the heading opens its own line
        else: inline_hand.append((n, p, i, 'heading after ¶ on the previous text'))
        rest = parts[hi + 1:]
        # what follows the heading on this line (question inline / answer inline)?
        if rest and any(x.strip() for x in rest):
            if any(re.match(r"\W*[ἈΑ]πόκ", x) for x in rest): state = 'between'; na += 1       # Q.68: heading, row of points, «Ἀπόκρ.» all inline
            else: state = 'answer'; nq += 1                                            # Q.70 (row of points) / Q.73 (question): question inline, answer later
        else: state = 'question'
        continue
    if state in ('answer', 'between', 'question') and re.match(r"\W*[ἈΑ]πόκ", t) and state != 'between':
        breaks[(p, i)] = 'para'; state = 'between'; na += 1
assert n == 79, n
# paragraph starts the plate shows (indented line after a short last line) and the English paragraphs follow: inside Q.16's answer (p0403.04 «Ἡρώδης δερμάτινος…», a closing remark with no question of its own) and inside Q.79's answer («Περὶ δὲ τοῦ βοός…», «Ἡ δὲ αἲξ…»); placed by hand after the plate
HAND_BREAKS = [(403, 4), (430, 21), (431, 11)]
for k_ in HAND_BREAKS: breaks[k_] = 'para'
assert na == 79, na
for k in breaks:
    assert k in inrange and k not in drops, k
with open(f'{T}/verify/GREEK-BREAKS.tsv', 'w') as o:
    o.write('page\tline\tcaput\ty\tdrop\n')
    for (p, i), c in sorted(breaks.items()): o.write(f'p-{p:04d}\t{i}\t{c}\t\t\n')
from collections import Counter
print('questions', n, '| answers', na, '| breaks', len(breaks), Counter(breaks.values()), '| inline (¶) headings', len(inline_hand), '| hand-placed breaks', HAND_BREAKS)
if os.environ.get('QD_DUMP'):
    with open(os.environ['QD_DUMP'], 'w') as o:
        for (p, i), c in sorted(inrange.items()):
            if (p, i) in drops: continue
            o.write(f'{p}.{i:02d}\t{cur(p, i)}\n')
