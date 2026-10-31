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

# Search for any <article> or links that look like questions
q_links = re.findall(r'href=[\'"]([^\'"]+?/question/[^\'"]+)[\'"]', html)
print(f"Direct question links: {len(q_links)}")
for l in q_links[:5]:
    print("  ", l)

# Search for question text
card_titles = re.findall(r'<p[^>]*>([\s\S]+?)</p>', html)
print(f"Paragraphs count: {len(card_titles)}")
for p in card_titles[:10]:
    if len(p.strip()) > 30:
        print("P:", p.strip()[:100])

