import sys,importlib.util,subprocess,xml.etree.ElementTree as ET
spec=importlib.util.spec_from_file_location('g','../scripts/greek-witness-scan.py'); g=importlib.util.module_from_spec(spec); spec.loader.exec_module(g)
pid,v,lo,hi=sys.argv[1],sys.argv[2],int(sys.argv[3]),int(sys.argv[4])
gt=subprocess.run(['node','extract-greek-gt.mjs',f'greek-gt/task2/{pid}.xml'],capture_output=True,text=True).stdout
a,_=g.norm_grk_indexed(gt); a=a[200:300]
res=[];n=0
for ev,el in ET.iterparse(f'../raw/pg-djvu-xml/{v}_djvu.xml',events=('end',)):
    if el.tag!='OBJECT': continue
    n+=1
    if lo<=n<=hi:
        txt=''.join(g.norm_lat(w.text or '') for w in el.iter('WORD'))
        s,_=g.align(a,txt); res.append((s,n))
    el.clear()
    if n>hi: break
res.sort(reverse=True); print(pid,res[:4])
