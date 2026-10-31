import pypdf
import json
import re

r = pypdf.PdfReader('data/answer_keys/2025/GATE_2025_EC_Answer_Key.pdf')
tokens = []
for p in r.pages:
    lines = [l.strip() for l in p.extract_text().split('\n') if l.strip()]
    tokens.extend(lines)

print(f"Total tokens in 2025 key: {len(tokens)}")

# Header might be: Answer Key for..., Q. No., Session, Q. Type, Section, Key/Range, Marks
# Let's inspect tokens
questions_2025 = []
i = 0
while i < len(tokens):
    # Check if tokens[i] is an integer 1..65
    if tokens[i].isdigit() and 1 <= int(tokens[i]) <= 65:
        q_no = int(tokens[i])
        # Look ahead
        if i + 5 < len(tokens):
            session = tokens[i+1]
            q_type = tokens[i+2]
            section = tokens[i+3]
            key = tokens[i+4]
            marks = tokens[i+5]
            
            if q_type in ['MCQ', 'MSQ', 'NAT'] and section in ['GA', 'EC'] and marks.isdigit():
                questions_2025.append({
                    'q_no': q_no,
                    'session': session,
                    'q_type': q_type,
                    'section': section,
                    'official_key': key,
                    'marks': int(marks)
                })
                i += 6
                continue
    i += 1

print(f"Parsed 2025 questions: {len(questions_2025)}")
if len(questions_2025) > 0:
    print("First 3:", questions_2025[:3])
    print("Last 3:", questions_2025[-3:])

