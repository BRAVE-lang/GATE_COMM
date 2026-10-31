import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://questions.examside.com/past-years/year-wise/gate/gate-ece/gate-ece-2018'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

q_urls = set(re.findall(r'href=[\'"](/past-years/year-wise/gate/gate-ece/gate-ece-2018/[^\'"]+)[\'"]', html))
print(f"Total question pages found for 2018: {len(q_urls)}")
for u in sorted(list(q_urls))[:10]:
    print("  ", u)

