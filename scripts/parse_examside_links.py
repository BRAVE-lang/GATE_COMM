import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://questions.examside.com/past-years/gate/gate-ece'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    links = set(re.findall(r'href=[\'"]([^\'"]+)[\'"]', html, re.I))
    print(f"Total links: {len(links)}")
    for l in sorted(list(links)):
        if 'gate' in l.lower() or 'ec' in l.lower():
            print("  ", l)

