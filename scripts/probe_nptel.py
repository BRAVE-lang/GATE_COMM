import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

req = urllib.request.Request('https://gate.nptel.ac.in/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        links = re.findall(r'href=[\'"]([^\'"]+)[\'"]', html, re.I)
        for l in links:
            if 'ec' in l.lower() or 'qp' in l.lower() or 'paper' in l.lower() or 'key' in l.lower():
                print(l)
except Exception as e:
    print(e)

