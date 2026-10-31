from PIL import Image
import os

for f in sorted(os.listdir('data/figures/2020'))[:10]:
    p = os.path.join('data/figures/2020', f)
    with Image.open(p) as img:
        print(f"2020: {f} -> {img.size}, mode={img.mode}, format={img.format}")

for f in sorted(os.listdir('data/figures/2021'))[:10]:
    p = os.path.join('data/figures/2021', f)
    with Image.open(p) as img:
        print(f"2021: {f} -> {img.size}, mode={img.mode}, format={img.format}")

