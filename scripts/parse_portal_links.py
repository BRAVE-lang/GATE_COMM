import urllib.request
import urllib.parse
import re
import ssl
# Using regex for parsing

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

def analyze_pages():
    for page_url in PAGES:
        print(f"\n==========================================")
        print(f"ANALYZING: {page_url}")
        print(f"==========================================")
        try:
            req = urllib.request.Request(page_url, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
                
                # Find all links
                links = re.findall(r'href=[\'"]([^\'"]+)[\'"]', html, re.IGNORECASE)
                print(f"Total links found: {len(links)}")
                
                ec_pdf_links = []
                for l in links:
                    if 'ec' in l.lower() or 'electronics' in l.lower() or 'qp' in l.lower() or 'key' in l.lower():
                        full_url = urllib.parse.urljoin(page_url, l)
                        ec_pdf_links.append((l, full_url))
                
                print(f"Relevant links ({len(ec_pdf_links)}):")
                for text, full in ec_pdf_links[:30]:
                    print(f" - {text} -> {full}")
                    
        except Exception as e:
            print(f"Error fetching {page_url}: {e}")

if __name__ == '__main__':
    analyze_pages()
