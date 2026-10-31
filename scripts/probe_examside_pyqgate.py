import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0'}

for u in ['https://questions.examside.com/past-years/gate/gate-ece', 'https://pyqgate.in/gate-ec-previous-year-questions']:
    print(f"\nFetching {u}...")
    try:
        req = urllib.request.Request(u, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            print(f"Status 200, length {len(html)}")
            # Look for year links
            links = set(re.findall(r'href=[\'"]([^\'"]+?(?:201[5-9]|2020)[^\'"]*)[\'"]', html, re.I))
            print(f"Year links found: {len(links)}")
            for l in list(links)[:10]:
                print("  ", l)
    except Exception as e:
        print(f"Error {u}: {e}")

