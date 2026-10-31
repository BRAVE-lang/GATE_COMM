import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/problematic_mcqs_report.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

for it in items:
    if it['id'] in ['GATE-2026-EC-Q13', 'GATE-2026-EC-Q36', 'GATE-2025-EC-Q12', 'GATE-2024-EC-Q36']:
        print("="*60)
        print("ID:", it['id'], "Ans:", it['answer'])
        print("Statement:\n", it['statement'])

