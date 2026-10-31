import re

with open('src/data/authenticPyqs.ts', 'r', encoding='utf-8') as f:
    text = f.read()

ids_2024 = re.findall(r'"id":\s*"(GATE-2024-EC-[^"]+)"', text)
print(f"2024 IDs in JSON part: {len(ids_2024)}")

# Also in curated 10
with open('src/data/authenticPyqs_curated10.ts', 'r', encoding='utf-8') as f:
    curated_text = f.read()

curated_2024 = re.findall(r"id:\s*'(GATE-2024-EC-[^']+)'", curated_text)
print(f"2024 IDs in curated part: {curated_2024}")

overlap = set(ids_2024).intersection(set(curated_2024))
print(f"Overlap: {overlap}")
