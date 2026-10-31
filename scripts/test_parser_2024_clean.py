import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data/extracted_questions/2024_raw_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Remove page header / footers
cleaned = re.sub(r'---\s*\[PAGE\s*\d+\]\s*---', '', text)
cleaned = re.sub(r'Electronics\s+and\s+Communication\s+Engineering\s+\(EC\)', '', cleaned, flags=re.IGNORECASE)
cleaned = re.sub(r'Organizing\s+Institute:\s+[^\n]+', '', cleaned, flags=re.IGNORECASE)
cleaned = re.sub(r'Page\s+\d+\s+of\s+\d+', '', cleaned, flags=re.IGNORECASE)

# Split by Q.<digits>
# Pattern matches "\nQ.1 ", "\nQ.2 ", etc.
q_blocks = re.split(r'\n(?=Q\.\s*\d+\s+)', cleaned)

parsed = []
for b in q_blocks:
    m = re.match(r'Q\.\s*(\d+)\s+([\s\S]+)', b.strip())
    if not m:
        continue
    q_no = int(m.group(1))
    content = m.group(2).strip()
    
    # Ignore "Q.1 - Q.5 Carry ONE mark each"
    if 'carry one mark' in content[:60].lower() or 'carry two marks' in content[:60].lower():
        continue
        
    # Extract options (A), (B), (C), (D)
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
        
    parsed.append({
        'q_no': q_no,
        'statement': statement,
        'options': options
    })

print(f"Total cleanly parsed questions: {len(parsed)}")
for p in parsed[:5]:
    print(f"\nQ.{p['q_no']}: {p['statement'][:120]}...")
    if p['options']:
        for o in p['options']:
            print(f"  ({o['id']}) {o['text'][:60]}")
    else:
        print("  [Numerical / NAT / No options]")

