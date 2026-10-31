import urllib.request
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://gateguide.co.in/articles/gate-ece-previous-year-papers-pdf/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        links = re.findall(r'href=[\'"]([^\'"]+)[\'"]', html, re.I)
        for l in links:
            if any(y in l for y in ['2016', '2017', '2018', '2019', '2020']):
                print(l)
except Exception as e:
    print(e)

