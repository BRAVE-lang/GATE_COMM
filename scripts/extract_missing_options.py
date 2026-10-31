import pypdf
import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

def search_pdf_for_q(pdf_path, q_marker):
    reader = pypdf.PdfReader(pdf_path)
    for idx, page in enumerate(reader.pages):
        text = page.extract_text()
        if q_marker in text:
            print(f"=== Found {q_marker} on page {idx+1} of {pdf_path} ===")
            print(text)

print("Checking 2026 Q36:")
search_pdf_for_q('data/source_papers/2026/GATE_2026_EC_Question_Paper.pdf', 'Q.36')

print("\nChecking 2025 Q12:")
search_pdf_for_q('data/source_papers/2025/GATE_2025_EC_Question_Paper.pdf', 'Q.12')

print("\nChecking 2024 Q36:")
search_pdf_for_q('data/source_papers/2024/GATE_2024_EC_Question_Paper.pdf', 'Q.36')

