import pypdf
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

os.makedirs('data/figures/2020', exist_ok=True)
os.makedirs('data/figures/2021', exist_ok=True)

# 2020
r20 = pypdf.PdfReader('data/source_papers/2020/GATE_2020_EC_Question_Paper.pdf')
print(f"2020 Pages: {len(r20.pages)}")
count20 = 0
for p_idx, page in enumerate(r20.pages[:3]):
    for img_idx, img in enumerate(page.images):
        name = f"page_{p_idx+1}_img_{img_idx+1}_{img.name}"
        save_path = os.path.join('data/figures/2020', name)
        with open(save_path, 'wb') as f:
            f.write(img.data)
        count20 += 1
        if count20 <= 5:
            print(f"Saved 2020: {name} ({len(img.data):,} bytes)")

print(f"Saved {count20} images from first 3 pages of 2020.")

# 2021
r21 = pypdf.PdfReader('data/source_papers/2021/GATE_2021_EC_Question_Paper.pdf')
print(f"2021 Pages: {len(r21.pages)}")
count21 = 0
for p_idx, page in enumerate(r21.pages[:3]):
    for img_idx, img in enumerate(page.images):
        name = f"page_{p_idx+1}_img_{img_idx+1}_{img.name}"
        save_path = os.path.join('data/figures/2021', name)
        with open(save_path, 'wb') as f:
            f.write(img.data)
        count21 += 1
        if count21 <= 5:
            print(f"Saved 2021: {name} ({len(img.data):,} bytes)")

print(f"Saved {count21} images from first 3 pages of 2021.")

