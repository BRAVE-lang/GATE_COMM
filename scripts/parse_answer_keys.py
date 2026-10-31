import os
import pypdf
import json
import re

KEY_FILES = {
    '2026': 'data/answer_keys/2026/GATE_2026_EC_Answer_Key.pdf',
    '2025': 'data/answer_keys/2025/GATE_2025_EC_Answer_Key.pdf',
    '2024': 'data/answer_keys/2024/GATE_2024_EC_Final_Answer_Key.pdf',
    '2023': 'data/answer_keys/2023/GATE_2023_EC_Answer_Key.pdf',
    '2022': 'data/answer_keys/2022/GATE_2022_EC_Answer_Key.pdf',
    '2021': 'data/answer_keys/2021/GATE_2021_EC_Answer_Key.pdf'
}

def parse_all_keys():
    all_keys = {}
    
    for year, filepath in KEY_FILES.items():
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue
            
        reader = pypdf.PdfReader(filepath)
        full_text = ""
        for page in reader.pages:
            full_text += page.extract_text() + "\n"
            
        lines = full_text.split('\n')
        parsed_items = []
        
        # Regex patterns for GATE answer keys
        # Standard formats:
        # Q.No Session Q.Type Section Key/Range Mark
        # e.g.: "1 7 MCQ GA B 1" or "1 3 MCQ GA C 1" or "28 7 NAT EC 16.50 to 16.80 2"
        for line in lines:
            line = line.strip()
            if not line:
                continue
            
            # Pattern: q_no session q_type subject key marks
            # Key can be single letter like A, B, C, D, or multiple for MSQ like B;C;D or B, C, D, or range like 16.50 to 16.80, or MTA (Marks To All)
            match = re.search(r'^(\d+)\s+(\d+)\s+(MCQ|MSQ|NAT)\s+(GA|EC)\s+(.+?)\s+(\d+)$', line)
            if match:
                q_no = int(match.group(1))
                session = match.group(2)
                q_type = match.group(3)
                section = match.group(4)
                raw_key = match.group(5).strip()
                marks = int(match.group(6))
                
                parsed_items.append({
                    'q_no': q_no,
                    'session': session,
                    'q_type': q_type,
                    'section': section,
                    'official_key': raw_key,
                    'marks': marks,
                    'raw_line': line
                })
                
        print(f"Year {year}: Extracted {len(parsed_items)} question keys from {filepath}")
        all_keys[year] = {
            'count': len(parsed_items),
            'questions': parsed_items,
            'source_file': filepath
        }
        
    out_path = 'data/processed_questions/official_answer_keys_2021_2026.json'
    os.makedirs('data/processed_questions', exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(all_keys, f, indent=2)
    print(f"Saved parsed official keys to {out_path}")

if __name__ == '__main__':
    parse_all_keys()

