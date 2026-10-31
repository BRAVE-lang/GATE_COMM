import pypdf
import re

r = pypdf.PdfReader('data/source_papers/2024/GATE_2024_EC_Question_Paper.pdf')
full_text = ""
for i, page in enumerate(r.pages):
    t = page.extract_text()
    full_text += f"\n--- [PAGE {i+1}] ---\n" + t

with open('data/extracted_questions/2024_raw_text.txt', 'w', encoding='utf-8') as f:
    f.write(full_text)

print(f"2024 text written, length: {len(full_text)} characters.")

# Look for Q. markers
q_matches = re.findall(r'(Q\.\s*\d+)', full_text)
print(f"Found {len(q_matches)} question markers like Q.XX:")
print(q_matches[:20])

