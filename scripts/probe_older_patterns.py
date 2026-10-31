import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0'}

TEST_URLS = [
    'https://gate2026.iitg.ac.in/doc/download/Answer_keys2020/ec_2020.pdf',
    'https://gate2026.iitg.ac.in/doc/download/Answer_keys2020/EC_2020.pdf',
    'https://gate2026.iitg.ac.in/doc/download/2020/EC_Keys.pdf',
    'https://gate2026.iitg.ac.in/doc/download/Answer_keys2019/ec_2019.pdf',
    'https://gate2026.iitg.ac.in/doc/download/Answer_keys2019/EC_2019.pdf',
    'https://gate2026.iitg.ac.in/doc/download/2018/ec_2018.pdf',
    'https://gate2026.iitg.ac.in/doc/download/2017/ec_2017.pdf',
    'https://gate2026.iitg.ac.in/doc/download/2016/ec_2016.pdf',
    'https://gate2025.iitr.ac.in/doc/download/2018/ec_2018.pdf',
    'https://gate2025.iitr.ac.in/doc/download/2017/ec_2017.pdf',
    'https://gate2025.iitr.ac.in/doc/download/2016/ec_2016.pdf',
]

for url in TEST_URLS:
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=8) as resp:
            data = resp.read(100)
            print(f"FOUND ({resp.getcode()}): {url} (is_pdf={data.startswith(b'%PDF')})")
    except Exception as e:
        print(f"FAILED: {url} -> {e}")

