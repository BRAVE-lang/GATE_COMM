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
    print(f"HTML size: {len(html)}")
    
    # Check for direct PDF links inside the viewer page
    pdf_matches = re.findall(r'href=[\'"]([^\'"]+?\.pdf)[\'"]', html, re.I)
    print("PDF matches:", pdf_matches)
    
    # Check for question items
    q_matches = re.findall(r'class=[\'"][^\'"]*question[^\'"]*[\'"]', html, re.I)
    print("Question class matches:", len(q_matches))

