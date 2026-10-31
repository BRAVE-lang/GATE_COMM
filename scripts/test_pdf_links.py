import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0'}

TEST_LINKS = [
    'https://pdf.questions.examgoal.com/past-years/year-wise/gate/gate-ece/gate-ece-2018',
    'https://pdf.questions.examgoal.com/past-years/year-wise/gate/gate-ece/gate-ece-2017-set-1',
    'https://pdf.questions.examgoal.com/past-years/year-wise/gate/gate-ece/gate-ece-2016-set-1'
]

for url in TEST_LINKS:
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
            data = resp.read(200)
            print(f"Status: {resp.getcode()}, Content-Type: {resp.headers.get('Content-Type')}, StartsWith: {data[:30]}")
    except Exception as e:
        print(f"Error {url}: {e}")

