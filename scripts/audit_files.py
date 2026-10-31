import os
import sys
import hashlib
import json
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

with open('data/import_reports/batch_1_download_report.json', 'r', encoding='utf-8') as f:
    dl_report = json.load(f)

# Map dest -> url
url_map = {item['dest']: item['url'] for item in dl_report if 'dest' in item}

all_files = []
for base in ['data/source_papers', 'data/answer_keys']:
    for root, dirs, files in os.walk(base):
        for f in files:
            if f.endswith('.pdf'):
                full_path = os.path.join(root, f).replace('\\', '/')
                size = os.path.getsize(full_path)
                with open(full_path, 'rb') as fp:
                    content = fp.read()
                    sha256 = hashlib.sha256(content).hexdigest()
                    
                can_open = False
                num_pages = 0
                error_msg = None
                first_text = ""
                try:
                    reader = pypdf.PdfReader(full_path)
                    can_open = True
                    num_pages = len(reader.pages)
                    if num_pages > 0:
                        first_text = reader.pages[0].extract_text()[:300].replace('\n', ' ')
                except Exception as e:
                    error_msg = str(e)
                    
                # Determine year and category
                year = 'Unknown'
                for y in ['2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019']:
                    if y in full_path:
                        year = y
                        break
                        
                cat = 'Question Paper' if 'source_papers' in full_path else 'Answer Key'
                orig_url = url_map.get(full_path, 'Not in download report')
                
                all_files.append({
                    'filename': f,
                    'path': full_path,
                    'year': year,
                    'category': cat,
                    'size_bytes': size,
                    'sha256': sha256,
                    'url': orig_url,
                    'can_open': can_open,
                    'num_pages': num_pages,
                    'first_text_sample': first_text,
                    'error': error_msg
                })

print(f"Total PDF files found on disk: {len(all_files)}")
for item in all_files:
    print(f"\n[{item['year']}] {item['category']} | {item['filename']} | {item['size_bytes']:,} bytes | Pages: {item['num_pages']} | Opens: {item['can_open']}")
    print(f"  SHA-256: {item['sha256']}")
    print(f"  URL: {item['url']}")
    if item['first_text_sample']:
        print(f"  Sample: {item['first_text_sample'][:120]}...")

with open('data/import_reports/disk_files_audit.json', 'w', encoding='utf-8') as f:
    json.dump(all_files, f, indent=2)

