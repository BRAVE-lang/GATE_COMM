import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for url in ['https://gate2026.iitg.ac.in/download.html', 'https://gate2025.iitr.ac.in/download.html']:
    print(f"\n==========================================")
    print(f"SEARCHING ALL PDFS IN: {url}")
    print(f"==========================================")
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            pdfs = set(re.findall(r'href=[\'"]([^\'"]+?\.pdf)[\'"]', html, re.I))
            print(f"Total PDF links found: {len(pdfs)}")
            for p in sorted(list(pdfs)):
                if any(k in p.lower() for k in ['ec', '2016', '2017', '2018', '2019', '2020']):
                    print("  ", p)
    except Exception as e:
        print(f"Error {url}: {e}")

