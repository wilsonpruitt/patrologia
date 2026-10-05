#!/usr/bin/env python3
"""Prior-English status for every PG 100-161 work in data/pg-toc/works.tsv.

Judgments are from MODEL MEMORY (Opus, 2026-10-05), not verified against any
catalogue. Wilson ruled this adequate for queueing; confirm per work before a
pilot. Keys are the 0-based index among kind=="work" rows of works.tsv.

Codes: Y = complete English exists · P = partial/selected English · U = unsure,
check before queueing · E = editorial/apparatus/foreign text, not a candidate ·
default (absent) = N, no English known.
Writes data/pg-toc/english-prior.tsv and data/pg-toc/untranslated-queue.tsv.
"""
import csv, pathlib

J = {
 0:("Y","Ignatius the Deacon's Life: Fisher in Talbot, Byzantine Defenders of Images (1998)"),
 2:("U","synodal letter to Leo III: possibly translated; check"),
 3:("U","Antirrhetici: no complete English known to me; check"),
 7:("Y","Mango, CFHB 13 (1990)"),
 11:("N","French only (Auzépy 1997)"),
 13:("U","possibly excerpted in English work on Byzantine-Muslim polemic"),
 20:("P","some Marian homilies may be in Cunningham, Wider than Heaven (2008); check"),
 26:("Y","Holy Transfiguration Monastery (1983); Farrell (1987)"),
 27:("Y","Mango, The Homilies of Photius (1958)"),
 29:("P","selected letters (to Boris-Michael, encyclical; White 1981)"),
 30:("P","Freese vol. 1 (codd. 1-165, 1920); Wilson selection (1994)"),
 31:("P","Wilson selection (1994)"),
 35:("Y","Hamilton & Hamilton, Christian Dualist Heresies (1998)"),
 36:("U","possibly excerpted in Hamilton & Hamilton (1998)"),
 42:("Y","Smithies & Duffy, DOT 13 (2013)"),
 54:("Y","Grant & Menzies, Joseph's Bible Notes (1996)"),
 56:("Y","Constantinou, FC 123 (2011)"),
 88:("Y","Dennis, DOT 12 (2010)"),
 92:("Y","Mango & Scott (1997)"),
 93:("U","Scriptor incertus: check"),
 96:("P","Featherstone & Signes Codoñer, Books I-IV (2015)"),
 97:("Y","Ševčenko, CFHB 42 (2011)"),
 101:("Y","Frendo & Fotiou (2000)"),
 104:("U","Logothete chronicle: Wahlgren TTB (2019) — check this is the same recension"),
 105:("U","Logothete tradition; see Wahlgren (2019)"),
 106:("Y","Kaldellis, Genesios: On the Reigns of the Emperors (1998)"),
 108:("Y","Westerink, Miscellaneous Writings, DOT 6 (1981)"),
 109:("Y","Jenkins & Westerink, Letters, DOT 2 (1973)"),
 110:("Y","Westerink, Miscellaneous Writings (1981)"),
 114:("Y","Connor & Connor (1994)"),
 117:("Y","Rydén (1995)"),
 118:("U","Eutychius' Annals: partial English? check"),
 119:("Y","Moffatt & Tall (2012)"), 120:("Y","Moffatt & Tall (2012)"), 121:("Y","Moffatt & Tall (2012)"),
 124:("Y","Moravcsik & Jenkins (1967)"),
 125:("Y","Guscin, The Image of Edessa (2009)"),
 126:("U","if = Ecloga: Freshfield (1926); check identity"),
 128:("P","historians' fragments in Blockley etc."), 129:("P","as above"), 130:("P","as above"),
 131:("U","if Nikon Metanoeite: Sullivan (1987)"),
 134:("E","Allatius' diatribe (editorial)"), 135:("E","editorial"),
 136:("U","Psellos' encomium: check Papaioannou volumes"),
 224:("Y","Talbot & Sullivan (2005)"),
 225:("Y","Dennis, Three Byzantine Military Treatises (1985)"),
 236:("E","index to the Suda (Suda On Line exists)"),
 240:("U","Euthalian apparatus: Willard (2009)?"), 241:("U","as above"), 242:("U","as above"),
 252:("U","Epiphanius' Life of the Virgin: check"),
 254:("Y","Wilkinson, Jerusalem Pilgrims before the Crusades (2002)"),
 256:("Y","deCatanzaro, The Discourses (1980) — Pontanus' 33 orationes ≈ Catecheses; check mapping"),
 257:("Y","Maloney, Hymns of Divine Love (1976); Griggs (2010)"),
 258:("Y","McGuckin (1982); Philokalia vol. 4"),
 260:("Y","Philokalia vol. 4"), 261:("Y","Philokalia vol. 4 (Ps.-Symeon, Three Methods)"),
 267:("U","excerpts in source readers? check"),
 269:("U","Leo of Ohrid's letter: English online; check"),
 270:("Y","Philokalia vol. 4"),
 277:("Y","Bernard & Livanos, DOML 50 (2018)"), 278:("Y","Bernard & Livanos (2018)"),
 283:("P","Cedrenus copies Skylitzes 811-1057: Wortley (2010) covers that stretch"),
 284:("P","as above"),
 285:("U","Skylitzes Continuatus? check"),
 290:("Y","Collisson (1843)"),
 294:("Y","Barber & Papaioannou, Psellos on Literature and Art (2017)"),
 314:("Y","Patria: Berger, DOML 24 (2013)"),
 315:("Y","Duling, OTP 1 (1983)"),
 317:("Y","Chrysostom Press (1992-2007)"), 318:("Y","Chrysostom Press"), 319:("Y","Chrysostom Press"),
 320:("Y","Chrysostom Press"), 321:("Y","Chrysostom Press"),
 369:("U","Life of Clement of Ohrid: check"),
 370:("E","variant readings"),
 372:("Y","Yuretich (2018)"),
 385:("Y","Jordan in BMFD (2000)"),
 386:("Y","Philokalia vol. 3"), 387:("Y","Philokalia vol. 3"),
 397:("P","Bogomil title in Hamilton & Hamilton (1998)"),
 400:("U","possibly Hamilton & Hamilton (1998)"),
 401:("Y","Hamilton & Hamilton (1998)"),
 403:("Y","Sewter/Frankopan (2009); Dawes (1928)"),
 416:("Y","Brand (1976)"),
 421:("Y","Stewart, PPTS (1889)"),
 423:("U","possibly PPTS"),
 424:("Y","Wilkinson, Jerusalem Pilgrimage 1099-1185 (1988)"),
 427:("P","Banchich & Lane (2009) for Severus-Theodosius"), 428:("P","as above, partial"),
 443:("U","Stone, Secular Orations (2013)?"), 444:("U","as above"),
 446:("Y","Melville Jones (1988)"),
 488:("Y","Magoulias, O City of Byzantium (1984)"),
 **{i:("Y","Magoulias (1984)") for i in range(489,498)},
 541:("Y","Macrides (2007)"),
 **{i:("U","Bekkos: some English online (unpublished); check") for i in range(550,566)},
 572:("U","Papadakis, Crisis in Byzantium: Tomus translated; autobiography? check"),
 584:("Y","Talbot, Correspondence of Athanasius I (1975); check"),
 585:("Y","Talbot (1975); check"),
 596:("Y","Philokalia vol. 4"),
 599:("E","Possinus' observations"), 600:("E","appendix"), 602:("E","Possinus' observations"),
 606:("P","Viscuso (marriage sections)"), 607:("P","as above"),
 633:("Y","Kadloubovsky & Palmer, Writings from the Philokalia on Prayer of the Heart (1951)"),
 634:("U","possibly Kadloubovsky & Palmer (1951)"), 635:("U","as above"), 636:("U","as above"),
 637:("U","check"),
 638:("Y","Philokalia vol. 4"),
 641:("E","Planudes' Greek of Augustine"), 643:("E","Greek of Augustine"), 644:("E","Greek of Ps.-Augustine"),
 656:("Y","Gressop (1560)"),
 661:("E","library catalogue"),
 678:("Y","Hussey & McNulty (1960)"),
 679:("Y","deCatanzaro (1974)"),
 682:("E","editorial dissertation"),
 **{i:("Y","Philokalia vol. 4") for i in (686,687,688,689,691,692,693,694,695,696)},
 690:("Y","Sinkewicz (1988); Philokalia vol. 4"),
 697:("Y","Veniamin (2009)"),
 698:("Y","Russell (2020)"),
 699:("U","check"),
 700:("Y","Russell (2020)"),
 701:("U","check"),
 722:("P","Miller dissertation (1975), partial"), 723:("P","as above"),
 736:("E","Greek of Riccoldo"),
 743:("E","title page"), 744:("E","Dositheus' preface"),
 748:("Y","Hawkes-Teeples (2011)"), 756:("Y","Hawkes-Teeples (2011)"),
 754:("Y","Simmons, Treatise on Prayer (1984)"),
 764:("Y","Angelou (1991)"),
 765:("Y","Dennis, Letters (1977); check"),
 769:("P","excerpts"), 770:("P","excerpts"), 771:("P","excerpts"), 772:("P","excerpts"),
 773:("Y","Chrysostomides (1985)"),
 783:("Y","Dennis (1977)"),
 784:("U","possibly Melville Jones; check"),
 785:("P","Philippides (1990), partial"),
 786:("Y","Philippides (1980)"),
 787:("Y","Macrides, Munitiz & Angelov (2013)"),
 **{i:("Y","Berger, DOML 24 (2013)") for i in range(788,793)},
 793:("U","check"),
 794:("Y","Cameron & Herrin (1984)"),
 795:("U","Downey (1959)?"),
 796:("Y","Magoulias (1975)"),
 815:("Y","Jones (1969)"),
 817:("Y","Kaldellis, DOML (2014)"),
 818:("E","Freher's commentary"), 819:("E","Leunclavius"), 820:("E","Leunclavius"), 821:("E","Leunclavius"),
 822:("Y","Melville Jones, Siege of Constantinople 1453 (1972)"),
 823:("U","possibly Melville Jones (1972)"),
 833:("U","Gennadios' Confession: English exists in places; check"),
 865:("E","codex description"),
 868:("Y","Woodhouse (1986)"), 869:("Y","Woodhouse (1986)"),
 872:("Y","Woodhouse (1986)"),
 873:("U","Woodhouse (1986)?"), 874:("U","Woodhouse (1986)?"),
 875:("P","Woodhouse (1986) excerpts"),
 876:("Y","Woodhouse (1986)"),
 881:("U","English online?"), 884:("U","English online?"), 885:("U","English online?"),
 890:("E","Bandini's life"), 891:("E","documents"), 892:("E","Platina"), 893:("E","documents"),
 913:("E","book list"),
}

root = pathlib.Path(__file__).resolve().parent.parent / "data" / "pg-toc"
rows = [r for r in csv.DictReader(open(root/"works.tsv"), delimiter="\t") if r["kind"]=="work"]
assert len(rows)==941, len(rows)
def num(v):
    try: return int(v)
    except: return None
out = []
for i,r in enumerate(rows):
    code,note = J.get(i,("N",""))
    s,e = num(r["startCol"]), num(r["endCol"])
    out.append({"idx":i,"vol":r["vol"],"startCol":r["startCol"],"cols":(e-s+1) if s and e else "",
                "greek":r["greek"],"english":code,"note":note,"author":r["author"],"title":r["title"]})
cols = ["idx","vol","startCol","cols","greek","english","note","author","title"]
with open(root/"english-prior.tsv","w") as f:
    w = csv.DictWriter(f, cols, delimiter="\t"); w.writeheader(); w.writerows(out)
q = [o for o in out if o["english"] in ("N","U")]
with open(root/"untranslated-queue.tsv","w") as f:
    w = csv.DictWriter(f, cols, delimiter="\t"); w.writeheader(); w.writerows(q)
from collections import Counter
c = Counter(o["english"] for o in out)
print(dict(c), "queue:", len(q),
      "| N cols:", sum(o["cols"] or 0 for o in out if o["english"]=="N"),
      "| U cols:", sum(o["cols"] or 0 for o in out if o["english"]=="U"))
