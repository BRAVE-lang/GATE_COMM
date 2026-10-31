import urllib.request
import ssl
import pypdf
import io

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = 'https://gate2025.iitr.ac.in/doc/download/2021/ec_2021.pdf'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
    data = resp.read()
    r = pypdf.PdfReader(io.BytesIO(data))
    print(f"Pages: {len(r.pages)}")
    text_len = len(r.pages[0].extract_text())
    print(f"Page 1 text length: {text_len}")

