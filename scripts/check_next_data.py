import urllib.request
import re
import ssl
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://questions.examside.com/past-years/year-wise/gate/gate-ece/gate-ece-2018'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Check if there is a __NEXT_DATA__ or script JSON
script_match = re.search(r'<script id="__NEXT_DATA__"[^>]*>([\s\S]+?)</script>', html)
if script_match:
    data = json.loads(script_match.group(1))
    print("Found __NEXT_DATA__!")
    print("Keys in data:", list(data.keys()))
    page_props = data.get('props', {}).get('pageProps', {})
    print("Keys in pageProps:", list(page_props.keys()))
    if 'questions' in page_props:
        print(f"Total questions in pageProps: {len(page_props['questions'])}")
        print("Sample question 1:", page_props['questions'][0].keys())
else:
    print("No __NEXT_DATA__ found.")
    # Search for question blocks
    headings = re.findall(r'<h[234][^>]*>([\s\S]+?)</h[234]>', html)
    print("Headings sample:", headings[:5])

