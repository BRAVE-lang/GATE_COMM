import pypdf
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader('data/source_papers/2024/GATE_2024_EC_Question_Paper.pdf')
print(f"Total pages: {len(reader.pages)}")

os.makedirs('data/figures/2024', exist_ok=True)
saved_count = 0

for page_idx, page in enumerate(reader.pages):
    for img_idx, img in enumerate(page.images):
        ext = img.name.split('.')[-1] if '.' in img.name else 'png'
        filename = f"page_{page_idx+1}_img_{img_idx+1}_{img.name}"
        save_path = os.path.join('data/figures/2024', filename)
        with open(save_path, 'wb') as f:
            f.write(img.data)
        saved_count += 1
        if saved_count <= 10:
            print(f"Saved: {filename} ({len(img.data):,} bytes)")

print(f"Total figures extracted from 2024 paper: {saved_count}")

