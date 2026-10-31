import urllib.request
import re
import ssl
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://questions.examside.com/past-years/year-wise/gate/gate-ece/gate-ece-2018/0pEtolYrXLbyoermVEjf7629jjyy8fjna'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

print(f"HTML size: {len(html)}")

# Extract metadata JSON-LD or schema
json_ld = re.findall(r'<script type="application/ld\+json">([\s\S]+?)</script>', html)
for j in json_ld:
    print("JSON-LD:", j[:300])

# Extract question text
# Often there is an <h1> or <div class="question...">
h1 = re.search(r'<h1[^>]*>([\s\S]+?)</h1>', html)
if h1:
    print("H1:", h1.group(1)[:200])

# Extract answer
ans = re.search(r'Correct Answer:?\s*([A-D]|[\d\.\-]+)', html, re.I)
if ans:
    print("Answer matched:", ans.group(0))
else:
    # Look for answer elements
    ans_blocks = re.findall(r'class="[^"]*answer[^"]*"[^>]*>([\s\S]+?)</div>', html, re.I)
    print("Answer blocks:", len(ans_blocks))
    if ans_blocks:
        print(ans_blocks[0][:200])

