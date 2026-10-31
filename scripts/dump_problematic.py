import json
import re

with open('src/data/authenticPyqs.ts', 'r', encoding='utf-8') as f:
    c = f.read()

marker = 'AUTHENTIC_GATE_EC_PYQS: Question[] = '
eq_pos = c.find(marker)
start = c.find('[', eq_pos + len(marker))
end = c.rfind(']')

qs = json.loads(c[start:end+1])
problematic = [q for q in qs if q['type'] == 'MCQ' and (not q.get('options') or len(q['options']) < 2)]

report = []
for q in problematic:
    report.append({
        "id": q['id'],
        "type": q['type'],
        "answer": q.get('officialAnswer'),
        "curr_options_count": len(q.get('options', [])),
        "curr_options": q.get('options', []),
        "statement": q['statement']
    })

with open('scripts/problematic_mcqs_report.json', 'w', encoding='utf-8') as f:
    json.dump(report, f, indent=2, ensure_ascii=False)

print(f"Dumped {len(problematic)} problematic MCQs to scripts/problematic_mcqs_report.json")

