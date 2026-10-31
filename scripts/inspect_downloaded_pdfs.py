import os
import pypdf
import json

SOURCE_DIR = 'data/source_papers'
KEY_DIR = 'data/answer_keys'

def inspect_all():
    summary = {}
    
    print("=== INSPECTING SOURCE PAPERS ===")
    for root, dirs, files in os.walk(SOURCE_DIR):
        for f in files:
            if f.endswith('.pdf'):
                path = os.path.join(root, f)
                try:
                    reader = pypdf.PdfReader(path)
                    num_pages = len(reader.pages)
                    sample = reader.pages[0].extract_text()[:400] if num_pages > 0 else ''
                    print(f"\n[PAPER] {path}")
                    print(f"  Pages: {num_pages}")
                    print(f"  Sample page 1: {sample.replace(chr(10), ' ')}")
                    summary[path] = {
                        'type': 'source_paper',
                        'pages': num_pages,
                        'valid': True
                    }
                except Exception as e:
                    print(f"\n[PAPER] {path} -> ERROR: {e}")
                    summary[path] = {
                        'type': 'source_paper',
                        'error': str(e),
                        'valid': False
                    }
                    
    print("\n=== INSPECTING ANSWER KEYS ===")
    for root, dirs, files in os.walk(KEY_DIR):
        for f in files:
            if f.endswith('.pdf'):
                path = os.path.join(root, f)
                try:
                    reader = pypdf.PdfReader(path)
                    num_pages = len(reader.pages)
                    sample = reader.pages[0].extract_text()[:400] if num_pages > 0 else ''
                    print(f"\n[KEY] {path}")
                    print(f"  Pages: {num_pages}")
                    print(f"  Sample page 1: {sample.replace(chr(10), ' ')}")
                    summary[path] = {
                        'type': 'answer_key',
                        'pages': num_pages,
                        'valid': True
                    }
                except Exception as e:
                    print(f"\n[KEY] {path} -> ERROR: {e}")
                    summary[path] = {
                        'type': 'answer_key',
                        'error': str(e),
                        'valid': False
                    }
                    
    with open('data/import_reports/pdf_inspection_summary.json', 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2)

if __name__ == '__main__':
    inspect_all()

