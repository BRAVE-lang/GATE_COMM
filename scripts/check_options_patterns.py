import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/problematic_mcqs_report.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

print(f"Total: {len(items)}")

for idx, it in enumerate(items):
    stmt = it['statement']
    ans = it['answer']
    # Check if (A), (B), (C), (D) exist in stmt
    has_a = bool(re.search(r'\([Aa]\)|\b[Aa]\)', stmt))
    has_b = bool(re.search(r'\([Bb]\)|\b[Bb]\)', stmt))
    has_c = bool(re.search(r'\([Cc]\)|\b[Cc]\)', stmt))
    has_d = bool(re.search(r'\([Dd]\)|\b[Dd]\)', stmt))
    all_four = has_a and has_b and has_c and has_d
    print(f"{idx+1}. {it['id']} (Ans: {ans}) -> Has (A)-(D): {all_four} [A:{has_a}, B:{has_b}, C:{has_c}, D:{has_d}]")
    if not all_four:
        print("   Snippet:", stmt[-150:].replace('\n', ' '))
