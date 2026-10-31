import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

for yr, path in [('2020', 'data/source_papers/2020/GATE_2020_EC_Question_Paper.pdf'), ('2019', 'data/source_papers/older_years/GATE_2019_EC_Question_Paper.pdf')]:
    print(f"\n==========================================")
    print(f"INSPECTING {yr}: {path}")
    print(f"==========================================")
    r = pypdf.PdfReader(path)
    print(f"Total pages: {len(r.pages)}")
    for p_idx in range(min(5, len(r.pages))):
        page = r.pages[p_idx]
        text = page.extract_text()
        print(f"Page {p_idx+1}: text length = {len(text)}, images = {len(page.images)}")
        if len(text) > 0:
            print(f"Sample: {repr(text[:250])}")

