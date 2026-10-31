import json
import re

with open('src/data/authenticPyqs.ts', 'r', encoding='utf-8') as f:
    c = f.read()

# Find true array
marker = 'AUTHENTIC_GATE_EC_PYQS: Question[] = '
eq_pos = c.find(marker)
start = c.find('[', eq_pos + len(marker))
end = c.rfind(']')

qs = json.loads(c[start:end+1])
problematic = [q for q in qs if q['type'] == 'MCQ' and (not q.get('options') or len(q['options']) < 2)]
print(f"Total problematic MCQs: {len(problematic)}")

for q in problematic:
    print(f"ID: {q['id']}, Type: {q['type']}, Answer: {q.get('officialAnswer')}, Options: {len(q.get('options', []))}")
    # Show last 200 chars of statement
    print("Statement tail:", repr(q['statement'][-200:]))
    print("-" * 50)
