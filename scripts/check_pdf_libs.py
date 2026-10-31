for mod in ['pypdf', 'fitz', 'pdfplumber', 'pypdf2', 'pdfminer']:
    try:
        __import__(mod)
        print(f"FOUND: {mod}")
    except ImportError:
        print(f"NOT FOUND: {mod}")

