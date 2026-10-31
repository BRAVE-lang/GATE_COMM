import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://questions.examside.com/past-years/year-wise/gate/gate-ece'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        links = set(re.findall(r'href=[\'"]([^\'"]+)[\'"]', html, re.I))
        for l in sorted(list(links)):
            if any(y in l for y in ['2020', '2019', '2018', '2017', '2016']):
                print(l)
except Exception as e:
    print(e)

