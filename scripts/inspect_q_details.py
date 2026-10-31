import re

with open('data/extracted_questions/examside_sample.html', 'r', encoding='utf-8') as f:
    pass

import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://questions.examside.com/past-years/year-wise/gate/gate-ece/gate-ece-2018/0pEtolYrXLbyoermVEjf7629jjyy8fjna'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Search for the question text container
m = re.search(r'<div class="q-content[^"]*"[^>]*>([\s\S]+?)</div>', html)
if m:
    print("q-content found:", m.group(1)[:300])

# Search for options
opts = re.findall(r'<div class="opt[^"]*"[^>]*>([\s\S]+?)</div>', html)
print(f"Options found: {len(opts)}")

# Search for correct answer in script or json
correct = re.findall(r'"correctAnswer":\s*"([^"]+)"', html)
if correct:
    print("Correct answer from JSON:", correct)
else:
    # Look for correct answer keywords
    c_m = re.findall(r'correct[_\s]*answer[\s\S]{1,50}', html, re.I)
    print("Correct matches:", c_m[:3])

