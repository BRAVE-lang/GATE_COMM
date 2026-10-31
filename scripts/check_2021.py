import pypdf

r = pypdf.PdfReader('data/source_papers/2021/GATE_2021_EC_Question_Paper.pdf')
print(f"2021 QP total pages: {len(r.pages)}")
for i in range(min(5, len(r.pages))):
    text = r.pages[i].extract_text()
    images = len(r.pages[i].images)
    print(f"Page {i+1}: text length = {len(text)}, images count = {images}")
    if len(text) > 0:
        print(f"Sample: {repr(text[:200])}")

