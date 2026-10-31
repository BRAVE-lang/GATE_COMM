import urllib.request
import urllib.error
import ssl
import os
import sys

# Create unverified SSL context if government/university portals have legacy or self-signed certs
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,application/pdf,*/*;q=0.8'
}

TARGETS = [
    # 2026 - IIT Guwahati
    {
        'year': '2026',
        'type': 'qp_page',
        'url': 'https://gate2026.iitg.ac.in/QPs-answer-keys.html',
        'dest': None
    },
    {
        'year': '2026',
        'type': 'qp_page_alt',
        'url': 'https://gate2026.iitg.ac.in/download.html',
        'dest': None
    },
    # 2025 - IIT Roorkee
    {
        'year': '2025',
        'type': 'qp_page',
        'url': 'https://gate2025.iitr.ac.in/question-papers.html',
        'dest': None
    },
    {
        'year': '2025',
        'type': 'qp_page_alt',
        'url': 'https://gate2025.iitr.ac.in/download.html',
        'dest': None
    },
    # 2024 - IISc Bangalore
    {
        'year': '2024',
        'type': 'qp_pdf',
        'url': 'https://gate2024.iisc.ac.in/wp-content/uploads/2024/02/EC_2024.pdf',
        'dest': 'data/source_papers/2024/EC_2024.pdf'
    },
    {
        'year': '2024',
        'type': 'ak_pdf',
        'url': 'https://gate2024.iisc.ac.in/wp-content/uploads/2024/02/EC_Master_Key.pdf',
        'dest': 'data/answer_keys/2024/EC_Master_Key_2024.pdf'
    },
    # 2023 - IIT Kanpur
    {
        'year': '2023',
        'type': 'qp_pdf',
        'url': 'https://gate.iitk.ac.in/doc/QP2023/EC_2023.pdf',
        'dest': 'data/source_papers/2023/EC_2023.pdf'
    },
    {
        'year': '2023',
        'type': 'ak_pdf',
        'url': 'https://gate.iitk.ac.in/doc/AK2023/EC_2023.pdf',
        'dest': 'data/answer_keys/2023/EC_Master_Key_2023.pdf'
    },
    # 2022 - IIT Kharagpur
    {
        'year': '2022',
        'type': 'qp_pdf',
        'url': 'https://gate.iitkgp.ac.in/documents/qp2022/EC_2022.pdf',
        'dest': 'data/source_papers/2022/EC_2022.pdf'
    },
    {
        'year': '2022',
        'type': 'ak_pdf',
        'url': 'https://gate.iitkgp.ac.in/documents/ak2022/EC_2022.pdf',
        'dest': 'data/answer_keys/2022/EC_Master_Key_2022.pdf'
    },
    # 2021 - IIT Bombay
    {
        'year': '2021',
        'type': 'qp_page',
        'url': 'https://gate.iitb.ac.in/G21/prev_qp.php',
        'dest': None
    },
    # NPTEL / Secondary
    {
        'year': 'all',
        'type': 'nptel',
        'url': 'https://gate.nptel.ac.in/',
        'dest': None
    }
]

def check_and_fetch():
    results = []
    for item in TARGETS:
        url = item['url']
        dest = item['dest']
        print(f"Checking [{item['year']}] ({item['type']}): {url}...")
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
                status = resp.getcode()
                content_type = resp.headers.get('Content-Type', '')
                data = resp.read(1024 * 1024 * 20) # read up to 20MB
                size = len(data)
                is_pdf = data.startswith(b'%PDF-')
                print(f" -> Status: {status}, Size: {size} bytes, Content-Type: {content_type}, IsPDF: {is_pdf}")
                
                if dest and is_pdf:
                    os.makedirs(os.path.dirname(dest), exist_ok=True)
                    with open(dest, 'wb') as f:
                        f.write(data)
                    print(f" -> SAVED TO {dest}")
                    saved = True
                elif dest:
                    print(f" -> NOT A PDF (starts with {data[:20]!r}), skipped saving.")
                    saved = False
                else:
                    saved = False
                
                results.append({
                    'year': item['year'],
                    'type': item['type'],
                    'url': url,
                    'status': status,
                    'content_type': content_type,
                    'size': size,
                    'is_pdf': is_pdf,
                    'saved': saved,
                    'dest': dest,
                    'sample_text': data[:300].decode('utf-8', errors='ignore') if not is_pdf else ''
                })
        except Exception as e:
            print(f" -> FAILED: {e}")
            results.append({
                'year': item['year'],
                'type': item['type'],
                'url': url,
                'status': 'ERROR',
                'error': str(e),
                'saved': False
            })
    return results

if __name__ == '__main__':
    res = check_and_fetch()
    print("\n--- SUMMARY ---")
    for r in res:
        print(r)

