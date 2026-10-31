import pypdf

for y, p in [('2025', 'data/answer_keys/2025/GATE_2025_EC_Answer_Key.pdf'), ('2021', 'data/answer_keys/2021/GATE_2021_EC_Answer_Key.pdf')]:
    print(f"\n=== RAW TEXT FOR {y} ===")
    r = pypdf.PdfReader(p)
    for i, page in enumerate(r.pages):
        print(f"--- Page {i+1} ---")
        lines = page.extract_text().split('\n')
        for l in lines[:25]:
            print(repr(l))

