import json
import re

# Read batch 1 verified questions (325 items)
with open('data/processed_questions/batch_1_verified_questions.json', 'r', encoding='utf-8') as f:
    batch1 = json.load(f)

# Read curated 10 questions to preserve rich SVG diagrams
with open('src/data/authenticPyqs_curated10.ts', 'r', encoding='utf-8') as f:
    curated_raw = f.read()

# Build map of batch 1 questions
q_map = {q['id']: q for q in batch1}

# If any curated question exists, preserve its rich figure / detailed solution
# Notice: GATE-2024-EC-Q28 has SVG diagram
# GATE-2023-EC-Q19 has SVG diagram
# Let's preserve the SVG figures from the curated 10 onto the respective questions
svg_q28 = """<svg viewBox="0 0 380 200" class="w-full max-w-sm mx-auto my-3 text-slate-800 dark:text-slate-100" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="150" y1="20" x2="230" y2="20" stroke-width="3" stroke="#4f46e5"/>
        <text x="175" y="15" font-size="12" stroke="none" fill="#4f46e5" font-weight="bold">VDD</text>
        <line x1="190" y1="20" x2="190" y2="45"/>
        <rect x="180" y="45" width="20" height="40" rx="2" fill="#e0e7ff" stroke="#4f46e5"/>
        <text x="208" y="70" font-size="11" stroke="none" fill="currentColor">RD = 10k</text>
        <line x1="190" y1="85" x2="190" y2="105"/>
        <circle cx="190" cy="105" r="3" fill="currentColor"/>
        <line x1="190" y1="105" x2="260" y2="105"/>
        <circle cx="260" cy="105" r="4" fill="currentColor"/>
        <text x="270" y="110" font-size="12" stroke="none" fill="currentColor" font-weight="bold">Vo</text>
        <line x1="155" y1="105" x2="175" y2="105"/>
        <line x1="175" y1="95" x2="175" y2="135" stroke-width="3"/>
        <line x1="182" y1="90" x2="182" y2="140" stroke-width="2"/>
        <line x1="182" y1="105" x2="190" y2="105"/>
        <line x1="182" y1="135" x2="190" y2="135"/>
        <line x1="190" y1="135" x2="190" y2="165"/>
        <line x1="90" y1="115" x2="155" y2="115"/>
        <circle cx="90" cy="115" r="4" fill="currentColor"/>
        <text x="60" y="120" font-size="12" stroke="none" fill="currentColor" font-weight="bold">Vin</text>
        <line x1="175" y1="165" x2="205" y2="165"/>
        <line x1="180" y1="170" x2="200" y2="170"/>
        <line x1="185" y1="175" x2="195" y2="175"/>
      </svg>"""

svg_q19 = """<svg viewBox="0 0 380 180" class="w-full max-w-sm mx-auto my-3 text-slate-800 dark:text-slate-100" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="80" cy="90" r="22" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
        <polygon points="80,78 80,102 75,95 85,95" fill="#312e81"/>
        <text x="30" y="95" font-size="11" stroke="none" fill="#312e81" font-weight="bold">2 Vx</text>
        <line x1="80" y1="68" x2="80" y2="40"/>
        <line x1="80" y1="40" x2="200" y2="40"/>
        <line x1="200" y1="40" x2="200" y2="60"/>
        <rect x="190" y="60" width="20" height="40" rx="2" fill="#f8fafc" stroke="currentColor"/>
        <text x="215" y="85" font-size="11" stroke="none" fill="currentColor" font-weight="bold">4 Ω</text>
        <text x="175" y="65" font-size="11" stroke="none" fill="#dc2626" font-weight="bold">+</text>
        <text x="175" y="78" font-size="10" stroke="none" fill="#dc2626">Vx</text>
        <text x="175" y="100" font-size="11" stroke="none" fill="#dc2626" font-weight="bold">−</text>
        <line x1="200" y1="100" x2="200" y2="140"/>
        <line x1="80" y1="112" x2="80" y2="140"/>
        <line x1="80" y1="140" x2="200" y2="140"/>
        <line x1="200" y1="40" x2="250" y2="40"/>
        <rect x="250" y="32" width="40" height="16" rx="2" fill="#f8fafc" stroke="currentColor"/>
        <text x="262" y="44" font-size="11" stroke="none" fill="currentColor" font-weight="bold">6 Ω</text>
        <line x1="290" y1="40" x2="330" y2="40"/>
        <circle cx="330" cy="40" r="4" fill="currentColor"/>
        <text x="340" y="45" font-size="13" stroke="none" fill="currentColor" font-weight="bold">A</text>
        <line x1="200" y1="140" x2="330" y2="140"/>
        <circle cx="330" cy="140" r="4" fill="currentColor"/>
        <text x="340" y="145" font-size="13" stroke="none" fill="currentColor" font-weight="bold">B</text>
      </svg>"""

if 'GATE-2024-EC-Q28' in q_map:
    q_map['GATE-2024-EC-Q28']['figure'] = {
        'type': 'svg',
        'content': svg_q28,
        'caption': 'Figure: Common-source MOSFET stage with finite output resistance ro.'
    }

if 'GATE-2023-EC-Q19' in q_map:
    q_map['GATE-2023-EC-Q19']['figure'] = {
        'type': 'svg',
        'content': svg_q19,
        'caption': 'Figure: Circuit with dependent current source for finding Thevenin resistance.'
    }

final_list = list(q_map.values())
print(f"Total authentic questions to export: {len(final_list)}")

out_ts = "// ============================================================================\n"
out_ts += "// GATE EC AUTHENTIC PREVIOUS YEAR QUESTIONS (BATCH 1: 2022 - 2026)\n"
out_ts += f"// Generated from Official Master Question Papers & Answer Keys\n"
out_ts += f"// Total Authentic Questions: {len(final_list)}\n"
out_ts += "// ============================================================================\n\n"
out_ts += "import { Question } from '../types/question';\n\n"
out_ts += "export const AUTHENTIC_GATE_EC_PYQS: Question[] = "
out_ts += json.dumps(final_list, indent=2) + ";\n"

with open('src/data/authenticPyqs.ts', 'w', encoding='utf-8') as f:
    f.write(out_ts)

print("Export completed successfully.")
