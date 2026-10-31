import pypdf
import os
import re

PAPERS = {
    '2026': 'data/source_papers/2026/GATE_2026_EC_Question_Paper.pdf',
    '2025': 'data/source_papers/2025/GATE_2025_EC_Question_Paper.pdf',
    '2024': 'data/source_papers/2024/GATE_2024_EC_Question_Paper.pdf',
    '2023': 'data/source_papers/2023/GATE_2023_EC_Question_Paper.pdf',
    '2022': 'data/source_papers/2022/GATE_2022_EC_Question_Paper.pdf',
    '2020': 'data/source_papers/2020/GATE_2020_EC_Question_Paper.pdf'
}

for year, path in PAPERS.items():
    if not os.path.exists(path):
        print(f"Skipping {year}, file not found")
        continue
    r = pypdf.PdfReader(path)
    full_text = ""
    for i, page in enumerate(r.pages):
        full_text += f"\n--- [PAGE {i+1}] ---\n" + page.extract_text()
        
    out_file = f'data/extracted_questions/{year}_raw_text.txt'
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(full_text)
        
    # Count distinct Q. markers
    markers = set(re.findall(r'\bQ\.\s*(\d+)\b', full_text))
    print(f"Year {year}: {len(full_text)} chars extracted, {len(markers)} question numbers found (sample: {sorted([int(x) for x in markers])[:10]}... max: {max([int(x) for x in markers]) if markers else 0})")

