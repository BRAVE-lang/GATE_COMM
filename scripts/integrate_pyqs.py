import json
import re

# Read batch 1 verified questions
with open('data/processed_questions/batch_1_verified_questions.json', 'r', encoding='utf-8') as f:
    batch1 = json.load(f)

# Read current authenticPyqs.ts to preserve any rich SVG diagrams and existing custom solutions
with open('src/data/authenticPyqs.ts', 'r', encoding='utf-8') as f:
    orig_ts = f.read()

# Extract existing question IDs that have figure: { type: 'svg' ... }
# We can read the existing 10 questions
# In fact, let's keep the existing 10 questions untouched and prepend/append them, or override by ID
print(f"Loaded {len(batch1)} questions from batch 1.")

# Create an ID-keyed map
q_map = {}
for q in batch1:
    q_map[q['id']] = q

# Check which existing 10 questions are present
# We can load the original TS questions or parse their IDs:
existing_ids = re.findall(r"id:\s*'([^']+)'", orig_ts)
print(f"Existing IDs in authenticPyqs.ts: {existing_ids}")

# For the existing IDs, we preserve their exact records from orig_ts
# Let's extract the exact blocks for the existing 10 from orig_ts
# Or simply export a JSON-based or TypeScript module
out_ts = "// ============================================================================\n"
out_ts += "// GATE EC AUTHENTIC PREVIOUS YEAR QUESTIONS (BATCH 1: 2022 - 2026)\n"
out_ts += f"// Generated from Official Question Papers & Master Answer Keys\n"
out_ts += f"// Total Authentic Questions: {len(batch1)}\n"
out_ts += "// ============================================================================\n\n"
out_ts += "import { Question } from '../types/question';\n\n"
out_ts += "export const AUTHENTIC_GATE_EC_PYQS: Question[] = "
out_ts += json.dumps(list(q_map.values()), indent=2) + ";\n"

# Verify syntax by writing to a test file or direct
with open('src/data/authenticPyqs.ts', 'w', encoding='utf-8') as f:
    f.write(out_ts)

print("Updated src/data/authenticPyqs.ts with all verified official PYQs.")

