import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

qp_path = 'data/source_papers/2026/GATE_2026_EC_Question_Paper.pdf'
ak_path = 'data/answer_keys/2026/GATE_2026_EC_Answer_Key.pdf'

r_qp = pypdf.PdfReader(qp_path)
print(f"2026 QP Total pages: {len(r_qp.pages)}")
print("\n--- 2026 QP Header Sample (Page 1) ---")
print(r_qp.pages[0].extract_text()[:600])

print("\n--- 2026 QP Last Page Sample ---")
print(r_qp.pages[-1].extract_text()[:600])

r_ak = pypdf.PdfReader(ak_path)
print(f"\n2026 AK Total pages: {len(r_ak.pages)}")
print("--- 2026 AK Text ---")
for p in r_ak.pages:
    print(p.extract_text()[:400])

