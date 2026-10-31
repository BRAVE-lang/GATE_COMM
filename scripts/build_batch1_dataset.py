import os
import sys
import json
import re
import hashlib
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

# Ensure directories exist
os.makedirs('data/extracted_questions', exist_ok=True)
os.makedirs('data/processed_questions', exist_ok=True)
os.makedirs('data/import_reports', exist_ok=True)
os.makedirs('data/verification_reports', exist_ok=True)
os.makedirs('data/failed_extractions', exist_ok=True)
os.makedirs('data/figures', exist_ok=True)

# 1. Load parsed answer keys
with open('data/processed_questions/official_answer_keys_2021_2026.json', 'r', encoding='utf-8') as f:
    ALL_KEYS = json.load(f)

# Also load 2025 parsed keys
with open('scripts/parse_2025_key.py', 'r', encoding='utf-8') as f:
    pass # we know parse_2025_key works, let's incorporate it directly

def get_2025_keys():
    r = pypdf.PdfReader('data/answer_keys/2025/GATE_2025_EC_Answer_Key.pdf')
    tokens = []
    for p in r.pages:
        lines = [l.strip() for l in p.extract_text().split('\n') if l.strip()]
        tokens.extend(lines)
    q_map = {}
    i = 0
    while i < len(tokens):
        if tokens[i].isdigit() and 1 <= int(tokens[i]) <= 65:
            q_no = int(tokens[i])
            if i + 5 < len(tokens):
                session = tokens[i+1]
                q_type = tokens[i+2]
                section = tokens[i+3]
                key = tokens[i+4]
                marks = tokens[i+5]
                if q_type in ['MCQ', 'MSQ', 'NAT'] and section in ['GA', 'EC'] and marks.isdigit():
                    q_map[q_no] = {
                        'q_no': q_no,
                        'session': session,
                        'q_type': q_type,
                        'section': section,
                        'official_key': key,
                        'marks': int(marks)
                    }
                    i += 6
                    continue
        i += 1
    return q_map

KEYS_2025 = get_2025_keys()

def get_key_for_year_q(year, q_no):
    if str(year) == '2025':
        return KEYS_2025.get(q_no)
    year_data = ALL_KEYS.get(str(year), {}).get('questions', [])
    for item in year_data:
        if item['q_no'] == q_no:
            return item
    return None

print(f"Loaded answer keys. 2025 count: {len(KEYS_2025)}")

