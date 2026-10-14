#!/usr/bin/env python3
"""Omission scan: align a keyed Greek transcription (myriobiblos) against archive.org's
garbage-Latin OCR of the same PG plate column. OCR runs with no counterpart in the
transcription = candidate omissions (eye-skips, dropped words) -> read at the plate.
Usage: maximus-omission-scan.py <pdfpage> <L|R> <transcript.txt> [minrun]"""
import sys, re, unicodedata, xml.etree.ElementTree as ET

LOOK = {  # greek letter -> latin-lookalikes archive's OCR emits for it (stripped, lowercased)
 'α':'a','β':'6b','γ':'yg','δ':'b5d','ε':'ecs','ζ':'zc','η':'nhf','θ':'0o','ι':'il1t','κ':'xk',
 'λ':'lak','μ':'pu','ν':'vy','ξ':'e','ο':'o','π':'nmr','ρ':'p','σ':'co','ς':'sc','τ':'tc',
 'υ':'uvb','φ':'gq','χ':'x','ψ':'d','ω':'wu'}
def norm_lat(s):
    s=unicodedata.normalize('NFD',s.lower()); s=''.join(c for c in s if not unicodedata.combining(c))
    s=s.replace('ð','o').replace('ü','u').replace('£','e').replace('ç','c').replace('&','a').replace('\\','l')
    return re.sub(r'[^a-z0-9]','',s)
def norm_grk(s):
    s=unicodedata.normalize('NFD',s.lower()); s=''.join(c for c in s if not unicodedata.combining(c))
    return ''.join(c for c in s if c in LOOK)

import os
LATIN=set(open(os.path.join(os.path.dirname(__file__),'..','raw','pg091','latin-words.txt')).read().split())
def ocr_column(xmlpath, page, side):
    obj=None
    for i,(ev,el) in enumerate(ET.iterparse(xmlpath, events=('end',))):
        if el.tag=='OBJECT':
            page-=1
            if page==0: obj=el; break
            el.clear()
    W=int(obj.get('width')); lines=[]
    # gutter = least-inked x between 35% and 65% of the page width (scan margins shift it)
    cov=[0]*(W+1)
    for w in obj.iter('WORD'):
        l,b,r,t=map(int,w.get('coords').split(','))
        for x in range(max(0,l),min(W,r)+1,4): cov[x]+=1
    lo,hi=int(W*0.35),int(W*0.65)
    gx=min(range(lo,hi,4),key=lambda x:sum(cov[x-40:x+40:4]))
    for ln in obj.iter('LINE'):
        ws=[]
        for w in ln.iter('WORD'):
            l,b,r,t=map(int,w.get('coords').split(',')); cx=(l+r)/2
            if (side=='L' and r<gx+15) or (side=='R' and l>gx-15): ws.append(w.text or '')
        if not ws: continue
        lat=[w for w in ws if len(norm_lat(w))>=3]
        hit=[w for w in lat if norm_lat(w) in LATIN]
        if lat and len(hit)/len(lat)>=0.4: continue          # a Latin line (full-width Latin, notes)
        ws=[w for w in ws if not (len(norm_lat(w))>=5 and norm_lat(w) in LATIN)]  # stray Latin words at the gutter
        lines.append(' '.join(ws))
    return lines

def align(a,b):
    """Smith-Waterman, a = greek-normalized transcript, b = ocr-normalized. returns pairs."""
    M,G,X=3,-2,-1
    n,m=len(a),len(b); H=[[0]*(m+1) for _ in range(n+1)]; best=(0,0,0)
    for i in range(1,n+1):
        ai=LOOK[a[i-1]]; Hi=H[i]; Hp=H[i-1]
        for j in range(1,m+1):
            v=max(0, Hp[j-1]+(M if b[j-1] in ai else X), Hp[j]+G, Hi[j-1]+G)
            Hi[j]=v
            if v>best[0]: best=(v,i,j)
    _,i,j=best; ops=[]
    while i>0 and j>0 and H[i][j]>0:
        ai=LOOK[a[i-1]]
        if H[i][j]==H[i-1][j-1]+(M if b[j-1] in ai else X): ops.append(('=',i-1,j-1)); i-=1; j-=1
        elif H[i][j]==H[i-1][j]+G: ops.append(('T',i-1,None)); i-=1
        else: ops.append(('O',None,j-1)); j-=1
    return ops[::-1]

def runs(ops, kind):
    out=[]; cur=[]
    for o in ops:
        if o[0]==kind: cur.append(o)
        else:
            if cur: out.append(cur); cur=[]
    if cur: out.append(cur)
    return out

if __name__=='__main__':
    page,side,tpath=int(sys.argv[1]),sys.argv[2],sys.argv[3]; minrun=int(sys.argv[4]) if len(sys.argv)>4 else 6
    lines=ocr_column('091_djvu.xml',page,side)
    b=''.join(norm_lat(l) for l in lines)
    T=open(tpath,encoding='utf-8').read(); a=norm_grk(T)
    ops=align(a,b)
    matched=sum(1 for o in ops if o[0]=='=')
    print(f'p{page}{side}: transcript {len(a)} ch, ocr {len(b)} ch, aligned span {len(ops)}, matched {matched}')
    # map transcript char index -> context for reporting
    for r in runs(ops,'O'):
        if len(r)>=minrun:
            j0=r[0][2]; seg=b[j0:j0+len(r)]
            # transcript position just before the gap
            k=ops.index(r[0]); prev=[o for o in ops[:k] if o[1] is not None]
            ti=prev[-1][1] if prev else 0
            print(f'  OCR-only run {len(r):3}: "{seg}"  after transcript ...{a[max(0,ti-25):ti+1]}')
