#!/usr/bin/env python3.11
"""
Fetch and build the Clementine Vulgate at sources/vulgate/.

Rebuilds exactly what is committed there, so the tree can be reproduced from
scratch. See sources/vulgate/README.md for provenance, rights, and — importantly
— WHY the two normalizations exist. Do not "simplify" them away:

  * ligatures are expanded because Corpus Corporum's Migne (src/latin/) expands
    them, and grepping our 'quae' against the source's 'quæ' silently returns
    nothing, which reads as absence;
  * layout markup (/ [ ] \) is stripped from the flat index because 12,635 of
    35,811 verses carry it and a phrase spanning a poetic line break would
    otherwise fail to match for a reason unrelated to the text.

⚠ This is the CLEMENTINE. Never substitute the Stuttgart/Weber-Gryson critical
edition: it is in copyright and cannot be committed or quoted here.

This rebuilds the TEXT only. sources/vulgate/README.md is hand-maintained and is
not regenerated here — do not delete it expecting this script to restore it.

Usage:  python3.11 scripts/fetch-vulgate.py [--keep-zip]
"""
import io, os, re, sys, zipfile, urllib.request

URL = "https://sourceforge.net/projects/vulsearch/files/clemtext/source/Quasimodo.zip/download"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DST  = os.path.join(ROOT, "sources", "vulgate")
BOOKS = os.path.join(DST, "clementine")
FLAT  = os.path.join(DST, "clementine-flat.txt")

LIG = {'æ':'ae','Æ':'Ae','œ':'oe','Œ':'Oe','ë':'e','Ë':'E','ï':'i','ö':'o','ü':'u','é':'e','è':'e'}

def normalize(s):
    for k, v in LIG.items():
        s = s.replace(k, v)
    for m in '/\\[]':
        s = s.replace(m, ' ')
    return re.sub(r'\s+', ' ', s).strip()

def main():
    os.makedirs(BOOKS, exist_ok=True)
    print(f"fetching {URL}")
    req = urllib.request.Request(URL, headers={"User-Agent": "patrologia/1.0"})
    blob = urllib.request.urlopen(req, timeout=120).read()
    print(f"  {len(blob):,} bytes")
    if "--keep-zip" in sys.argv:
        open(os.path.join(DST, "Quasimodo.zip"), "wb").write(blob)

    zf = zipfile.ZipFile(io.BytesIO(blob))
    names = [n for n in zf.namelist() if n.endswith(".lat")]
    flat, verses = [], 0
    for n in sorted(names):
        book = os.path.basename(n)[:-4]
        # source is CP1252 (0x9c = oe ligature rules out plain Latin-1), CRLF
        raw = zf.read(n).decode("cp1252").replace("\r\n", "\n")
        open(os.path.join(BOOKS, book + ".lat"), "w", encoding="utf-8").write(raw)
        for line in raw.split("\n"):
            m = re.match(r'^(\d+):(\d+)\s+(.*)$', line.strip())
            if not m:
                continue
            txt = normalize(m.group(3))
            if not txt:
                continue
            verses += 1
            flat.append(f"{book} {m.group(1)}:{m.group(2)}\t{txt}")
    open(FLAT, "w", encoding="utf-8").write("\n".join(flat) + "\n")
    print(f"built {len(names)} books, {verses:,} verses -> {FLAT}")

    # the canon is 73 books; a short count means the archive changed upstream
    if len(names) != 73:
        print(f"⚠ expected 73 books, got {len(names)} — upstream archive may have changed", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
