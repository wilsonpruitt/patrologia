#!/usr/bin/env python3
"""Theological subset of untranslated-queue.tsv, tagged by genre (model judgment,
2026-10-05). Exegesis, homilies, lives, histories, canon law left out on purpose.
Writes data/pg-toc/theological-queue.tsv.
NB 486 (Nicetas of Maroneia, Dialogi) is already shipped (src/greek/nicetas-maroneia-dialogi) and is NOT queued.
NB 746 (De sacramentis) is the Byzantine pilot (symeon-thessalonica-de-sacramentis, set up 2026-10-05).
NB 899 and 901 are Bessarion's own Latin versions of 898 and 900."""
import csv, pathlib
G = {
 "images":   [3,4,5,99,264],
 "dogmatic": [9,10,18,19,22,24,34,282,287,355,397,398,380,498,499,500,501,502,503,504,509,510,511,512,
              531,533,663,664,683,684,745,757,758,759,760,847,848,860,861,862,863,864,835,836],
 "palamite": [704,705,706,715,716,717,718,719,726,731],
 "sacraments-liturgy": [535,746,747,749,750,751,752,753,755,761,881,887,902,903,436,807],
 "filioque-union": [2,263,267,269,272,273,383,435,525,526,528,529,534]+list(range(550,566))+
              [566,567,568,569,570,571,573,574,575,576,577,586,604,642,657,707,708,709,710,711,712,714,
               732,733,739,806,808,810,824,825,826,827,828,829,830,831,838,839,840,841,849,851,852,853,854,855,
               877,882,885,895,896,897,898,899,900,901,906,919,920,923,924],
 "islam-judaism": [39,40,46,79,834,233,268,399,420,506,507,724,725,816],
 "dualist-heresy": [25,36,400],
 "armenian": [45,376,408,409,410,411,415,505],
 "ascetic-moral": [374,440,455,456,587,637,728],
}
root = pathlib.Path(__file__).resolve().parent.parent/"data"/"pg-toc"
q = {int(r["idx"]):r for r in csv.DictReader(open(root/"english-prior.tsv"),delimiter="\t") if r["english"] in ("N","U","P")}
out=[]
for g,ids in G.items():
    for i in ids:
        if i not in q: print("not in queue (already Y/E):",i); continue
        r=dict(q[i]); r["genre"]=g; out.append(r)
cols=["genre","idx","vol","startCol","cols","greek","english","note","author","title"]
with open(root/"theological-queue.tsv","w") as f:
    w=csv.DictWriter(f,cols,delimiter="\t",extrasaction="ignore"); w.writeheader(); w.writerows(out)
from collections import defaultdict
t=defaultdict(lambda:[0,0])
for r in out: t[r["genre"]][0]+=1; t[r["genre"]][1]+=int(r["cols"] or 0)
for g,(n,c) in t.items(): print(f"{g:20} {n:3} works {c:6} cols")
print("total", len(out), sum(c for _,c in t.values()))
