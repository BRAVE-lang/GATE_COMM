import urllib.request
import urllib.parse
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

PAGES = [
    'https://gate2026.iitg.ac.in/download.html',
    'https://gate2025.iitr.ac.in/download.html',
]

def search_batch2():
    found = []
    for page in PAGES:
        try:
            req = urllib.request.Request(page, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
                links = re.findall(r'href=[\'"]([^\'"]+)[\'"]', html, re.IGNORECASE)
                for l in links:
                    for yr in ['2020', '2019', '2018', '2017', '2016']:
                        if yr in l:
                            if 'ec' in l.lower() or 'key' in l.lower() or 'ans' in l.lower() or 'qp' in l.lower():
                                full = urllib.parse.urljoin(page, l)
                                found.append((yr, page, l, full))
        except Exception as e:
            print(f"Error {page}: {e}")
            
    print(f"Total matching older links: {len(found)}")
    for yr, pg, rel, full in sorted(list(set(found))):
        print(f"[{yr}] {rel} -> {full}")

if __name__ == '__main__':
    search_batch2()

