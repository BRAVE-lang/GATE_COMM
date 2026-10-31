import pypdf

r = pypdf.PdfReader('data/answer_keys/2021/GATE_2021_EC_Answer_Key.pdf')
print(f"2021 Key pages: {len(r.pages)}")
for i in range(len(r.pages)):
    print(f"Page {i+1} text length: {len(r.pages[i].extract_text())}")
    print(f"Page {i+1} images: {len(r.pages[i].images)}")

