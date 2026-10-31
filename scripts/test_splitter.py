import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data/extracted_questions/2024_raw_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Pattern for question headers:
# Matches things like:
# "Q.1  ..." or "Q.11  ..."
# Note: we need to distinguish "Q.1 - Q.5 Carry ONE mark each" instructions from actual "Q.1  <statement>"
parts = re.split(r'\n(?=Q\.\s*\d+\s+)', text)
print(f"Total parts split: {len(parts)}")

questions = []
for p in parts:
    m = re.match(r'Q\.\s*(\d+)\s+([\s\S]+)', p)
    if m:
        q_num = int(m.group(1))
        content = m.group(2).strip()
        # Exclude instruction lines like "Q.1 - Q.5 Carry ONE mark each"
        if 'Carry ONE mark' in content[:50] or 'carry one mark' in content[:50]:
            continue
        questions.append((q_num, content))

print(f"Extracted valid question blocks: {len(questions)}")
if questions:
    for q_num, c in questions[:5]:
        print(f"\n--- Question {q_num} (len {len(c)}) ---")
        print(c[:200].replace('\n', ' '))
