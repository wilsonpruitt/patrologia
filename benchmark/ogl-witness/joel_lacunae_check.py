import sys,os,re,json,difflib
sys.path.insert(0,'.')
import ogl_vs_calfa as m
patches=json.load(open(os.path.expanduser('~/patrologia/data/calfa-patches/joel-chronographia.json')))['patches']
root=sys.argv[1]; ws={}
for d in sorted(os.listdir(root)):
    p=os.path.join(root,d)
    if d.endswith('_ocr'):
        files=sorted((f for f in os.listdir(p) if f.endswith('.txt')), key=lambda f:int(re.sub(r'\D','',f) or 0))
        ws[d.split('_')[0]]=[m.skel(t) for t in m.load('\n'.join(open(os.path.join(p,f),encoding='utf-8',errors='replace').read() for f in files))]
print(len(patches),'patches;',len(ws),'witnesses')
tot={n:0 for n in ws}
for k,pt in enumerate(patches):
    find=[m.skel(t) for t in m.load(pt['find'])]; rep=[m.skel(t) for t in m.load(pt['replace'])]
    missing=[t for t in rep if t not in find]
    row=[]
    for n,w in ws.items():
        # locate the find's first 3 tokens, else last 3
        best=0
        for anchor in (find[:3],find[-3:]):
            if len(anchor)<3: continue
            for i in range(len(w)-2):
                if w[i:i+3]==anchor:
                    a=max(0,i-len(rep)); win=w[a:i+len(rep)+len(find)+3]
                    r=sum(1 for t in missing if t in win)/max(1,len(missing))
                    best=max(best,r)
        row.append(best); 
        if best>=0.7: tot[n]+=1
    print(f'patch {k+1:>2} p{pt["page"]} col{pt["col"]} missing={len(missing):>3} words | recovered fraction per witness:',' '.join(f'{x:.0%}' for x in row))
print('patches recovered (>=70% of the dropped words present) per witness:',tot)
