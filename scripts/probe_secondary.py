import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

URLS = [
    'https://lemyte.com/gate/papers',
    'https://gateguide.co.in/articles/gate-ece-previous-year-papers-pdf/'
]

for url in URLS:
    print(f"\nFetching {url}...")
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Look for pdf links or year links
            matches = re.findall(r'href=[\'"]([^\'"]+?\.pdf)[\'"]', html, re.I)
            print(f"Found {len(matches)} PDF links:")
            for m in matches[:15]:
                print("  ", m)
    except Exception as e:
        print(f"Error {url}: {e}")

