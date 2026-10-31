import urllib.request
import ssl
import os
import json
import hashlib

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
}

DOWNLOAD_LIST = [
    # 2026
    {
        'year': '2026',
        'category': 'source_paper',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2026/QPs/EC.pdf',
        'filename': 'GATE_2026_EC_Question_Paper.pdf',
        'dest': 'data/source_papers/2026/GATE_2026_EC_Question_Paper.pdf'
    },
    {
        'year': '2026',
        'category': 'answer_key',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2026/Keys/EC_Keys.pdf',
        'filename': 'GATE_2026_EC_Answer_Key.pdf',
        'dest': 'data/answer_keys/2026/GATE_2026_EC_Answer_Key.pdf'
    },
    # 2025
    {
        'year': '2025',
        'category': 'source_paper',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2025/EC2025.pdf',
        'filename': 'GATE_2025_EC_Question_Paper.pdf',
        'dest': 'data/source_papers/2025/GATE_2025_EC_Question_Paper.pdf'
    },
    {
        'year': '2025',
        'category': 'answer_key',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2025_Key/EC_Keys.pdf',
        'filename': 'GATE_2025_EC_Answer_Key.pdf',
        'dest': 'data/answer_keys/2025/GATE_2025_EC_Answer_Key.pdf'
    },
    # 2024
    {
        'year': '2024',
        'category': 'source_paper',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2024/EC24S7.pdf',
        'filename': 'GATE_2024_EC_Question_Paper.pdf',
        'dest': 'data/source_papers/2024/GATE_2024_EC_Question_Paper.pdf'
    },
    {
        'year': '2024',
        'category': 'answer_key',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2024/ECFinalAnswerKey.pdf',
        'filename': 'GATE_2024_EC_Final_Answer_Key.pdf',
        'dest': 'data/answer_keys/2024/GATE_2024_EC_Final_Answer_Key.pdf'
    },
    # 2023
    {
        'year': '2023',
        'category': 'source_paper',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2023/ec_2023.pdf',
        'filename': 'GATE_2023_EC_Question_Paper.pdf',
        'dest': 'data/source_papers/2023/GATE_2023_EC_Question_Paper.pdf'
    },
    {
        'year': '2023',
        'category': 'answer_key',
        'url': 'https://gate2026.iitg.ac.in/doc/download/Answer_keys2023/EC_ANS_GATE2023.pdf',
        'filename': 'GATE_2023_EC_Answer_Key.pdf',
        'dest': 'data/answer_keys/2023/GATE_2023_EC_Answer_Key.pdf'
    },
    # 2022
    {
        'year': '2022',
        'category': 'source_paper',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2022/ec_2022.pdf',
        'filename': 'GATE_2022_EC_Question_Paper.pdf',
        'dest': 'data/source_papers/2022/GATE_2022_EC_Question_Paper.pdf'
    },
    {
        'year': '2022',
        'category': 'answer_key',
        'url': 'https://gate2026.iitg.ac.in/doc/download/Answer_keys2022/ec_2022.pdf',
        'filename': 'GATE_2022_EC_Answer_Key.pdf',
        'dest': 'data/answer_keys/2022/GATE_2022_EC_Answer_Key.pdf'
    },
    # 2021
    {
        'year': '2021',
        'category': 'source_paper',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2021/ec_2021.pdf',
        'filename': 'GATE_2021_EC_Question_Paper.pdf',
        'dest': 'data/source_papers/2021/GATE_2021_EC_Question_Paper.pdf'
    },
    {
        'year': '2021',
        'category': 'answer_key',
        'url': 'https://gate2026.iitg.ac.in/doc/download/Answer_keys2021/ec_2021.pdf',
        'filename': 'GATE_2021_EC_Answer_Key.pdf',
        'dest': 'data/answer_keys/2021/GATE_2021_EC_Answer_Key.pdf'
    },
    # 2020
    {
        'year': '2020',
        'category': 'source_paper',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2020/ec_2020.pdf',
        'filename': 'GATE_2020_EC_Question_Paper.pdf',
        'dest': 'data/source_papers/2020/GATE_2020_EC_Question_Paper.pdf'
    },
    # 2019
    {
        'year': '2019',
        'category': 'source_paper',
        'url': 'https://gate2026.iitg.ac.in/doc/download/2019/ec_2019.pdf',
        'filename': 'GATE_2019_EC_Question_Paper.pdf',
        'dest': 'data/source_papers/older_years/GATE_2019_EC_Question_Paper.pdf'
    }
]

def download_batch_1():
    report = []
    print(f"Beginning download of Batch 1 official papers and answer keys (2021-2026 + older)...\n")
    
    for item in DOWNLOAD_LIST:
        dest = item['dest']
        url = item['url']
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        print(f"Downloading [{item['year']}] {item['category']} from {url}...")
        
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=30) as resp:
                data = resp.read()
                size = len(data)
                is_pdf = data.startswith(b'%PDF-')
                
                if not is_pdf:
                    print(f"  -> WARNING: Returned data is not a valid PDF (length {size} bytes). Skipping file save.")
                    report.append({
                        **item,
                        'status': 'INVALID_PDF',
                        'size': size,
                        'is_pdf': False,
                        'sha256': None
                    })
                    continue
                
                with open(dest, 'wb') as f:
                    f.write(data)
                
                sha256 = hashlib.sha256(data).hexdigest()
                print(f"  -> SUCCESS: Saved {size:,} bytes to {dest} (SHA256: {sha256[:12]}...)")
                
                report.append({
                    **item,
                    'status': 'DOWNLOADED',
                    'size': size,
                    'is_pdf': True,
                    'sha256': sha256
                })
        except Exception as e:
            print(f"  -> ERROR downloading {url}: {e}")
            report.append({
                **item,
                'status': 'FAILED',
                'error': str(e),
                'is_pdf': False,
                'size': 0
            })
            
    # Save download report
    os.makedirs('data/import_reports', exist_ok=True)
    report_path = 'data/import_reports/batch_1_download_report.json'
    with open(report_path, 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2)
    print(f"\nDownload Report saved to {report_path}")
    return report

if __name__ == '__main__':
    download_batch_1()

