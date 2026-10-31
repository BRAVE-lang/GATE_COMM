import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader('data/source_papers/2026/GATE_2026_EC_Question_Paper.pdf')
for idx, page in enumerate(reader.pages):
    t = page.extract_text()
    if 'Laplace' in t or 'Q.13' in t:
        print(f"Page {idx+1}:")
        print(t)

