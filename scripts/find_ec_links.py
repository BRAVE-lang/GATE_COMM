import urllib.request
import urllib.parse
import re
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
}

PAGES = [
    'https://gate2026.iitg.ac.in/QPs-answer-keys.html',
    'https://gate2026.iitg.ac.in/download.html',
    'https://gate2025.iitr.ac.in/question-papers.html',
    'https://gate2025.iitr.ac.in/download.html',
]

def find_ec_links():
    found = []
    for page_url in PAGES:
        try:
            req = urllib.request.Request(page_url, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
                links = re.findall(r'href=[\'"]([^\'"]+)[\'"]', html, re.IGNORECASE)
                for l in links:
                    filename = l.split('/')[-1]
                    # Check if it refers to EC
                    if re.search(r'\bEC\b|EC[0-9]|EC_|/EC', l, re.IGNORECASE) or 'electronics' in l.lower():
                        full = urllib.parse.urljoin(page_url, l)
                        found.append((page_url, l, full))
        except Exception as e:
            print(f"Error {page_url}: {e}")
            
    print(f"--- SPECIFIC EC LINKS FOUND ({len(found)}) ---")
    for page, rel, full in set(found):
        print(f"Page: {page}\n  Rel: {rel}\n  Full: {full}\n")

if __name__ == '__main__':
    find_ec_links()

