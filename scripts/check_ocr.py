import shutil

tesseract_path = shutil.which('tesseract')
print(f"Tesseract executable found: {tesseract_path}")

for mod in ['pytesseract', 'easyocr', 'paddleocr', 'tesserocr', 'winocr']:
    try:
        __import__(mod)
        print(f"Module {mod}: INSTALLED")
    except ImportError:
        print(f"Module {mod}: NOT INSTALLED")

