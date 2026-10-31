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

# Check Sveltekit data script
svelte_data = re.findall(r'<script[^>]*>([\s\S]+?)</script>', html)
for i, s in enumerate(svelte_data):
    if 'question' in s.lower() or 'options' in s.lower():
        print(f"Script {i} has length {len(s)}")
        print(s[:300])

# Also check for question statement text
matches = re.findall(r'<div[^>]*class="[^"]*question-body[^"]*"[^>]*>([\s\S]+?)</div>', html)
print(f"question-body matches: {len(matches)}")

