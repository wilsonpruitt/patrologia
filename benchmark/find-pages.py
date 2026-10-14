import xml.etree.ElementTree as ET, re, json
B={'PG_2-633':'002','PG_17-26':'017','PG_87-4080':'087c','PG_89-1855':'089','PG_98-1360':'098','PG_99-1706':'099','PG_114-1007':'114','PG_145-230':'145'}
res={}
for pid,v in B.items():
    col=pid.split('-')[1]; hits=[]; n=0
    for ev,el in ET.iterparse(f'../raw/pg-djvu-xml/{v}_djvu.xml',events=('end',)):
        if el.tag!='OBJECT': continue
        n+=1
        words=[(w.text or '') for i,w in enumerate(el.iter('WORD')) if i<60]
        toks=[re.sub(r'\D','',w) for w in words]
        if col in toks: hits.append(n)
        el.clear()
    res[pid]=hits; print(pid,v,n,'pages; header hits',hits[:12])
json.dump(res,open('/private/tmp/claude-501/-Users-wilsonpruitt/9232fd33-6073-48c7-bdad-48a6930b2adb/scratchpad/hits.json','w'))
