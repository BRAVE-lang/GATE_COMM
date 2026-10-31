import json

with open('data/processed_questions/batch_1_verified_questions.json', 'r', encoding='utf-8') as f:
    b1 = json.load(f)

b1_2024_ids = [q['id'] for q in b1 if q['examYear'] == 2024]
print(f"Total 2024 IDs in batch 1: {len(b1_2024_ids)}")
print("Q28 in batch 1?", 'GATE-2024-EC-Q28' in b1_2024_ids)
print("GA01 in batch 1?", 'GATE-2024-EC-GA01' in b1_2024_ids)
print(b1_2024_ids[:15])

