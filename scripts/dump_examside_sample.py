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

# Find first occurrence of "Q. 1" or question card
idx = html.find('General Aptitude')
with open('data/extracted_questions/examside_sample.html', 'w', encoding='utf-8') as f:
    f.write(html[idx:idx+8000])

print("Sample saved to data/extracted_questions/examside_sample.html")

