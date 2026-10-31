import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

YEARS = ['2026', '2025', '2024', '2023', '2022']

def parse_year_text(year):
    path = f'data/extracted_questions/{year}_raw_text.txt'
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()

    cleaned = re.sub(r'---\s*\[PAGE\s*\d+\]\s*---', '', text)
    cleaned = re.sub(r'Electronics\s+(?:&|and)\s+Communication\s+Engineering\s*(?:\(EC\))?', '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'Organizing\s+Institute:\s+[^\n]+', '', cleaned, flags=re.IGNORECASE)
    cleaned = re.sub(r'Page\s+\d+\s+of\s+\d+', '', cleaned, flags=re.IGNORECASE)

    q_blocks = re.split(r'\n(?=Q\.\s*\d+\s+)', cleaned)

    parsed = []
    seen = set()
    for b in q_blocks:
        m = re.match(r'Q\.\s*(\d+)\s+([\s\S]+)', b.strip())
        if not m:
            continue
        q_no = int(m.group(1))
        if q_no in seen or q_no > 65:
            continue
        content = m.group(2).strip()
        
        if 'carry one mark' in content[:60].lower() or 'carry two marks' in content[:60].lower():
            continue
            
        options = []
        opt_matches = list(re.finditer(r'\(([A-D])\)\s+([^\(\)]+?)(?=(\([A-D]\)|$))', content, re.DOTALL))
        if opt_matches:
            statement = content[:opt_matches[0].start()].strip()
            for om in opt_matches:
                options.append({
                    'id': om.group(1),
                    'text': om.group(2).strip()
                })
        else:
            statement = content
            
        seen.add(q_no)
        parsed.append({
            'q_no': q_no,
            'statement': statement,
            'options': options
        })

    print(f"Year {year}: Parsed {len(parsed)} questions. Max Q: {max([p['q_no'] for p in parsed]) if parsed else 0}")
    return parsed

for y in YEARS:
    parse_year_text(y)

