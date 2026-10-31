import re

with open('data/extracted_questions/examside_sample.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Look for question blocks or text inside <body>
print("Length:", len(text))
body_idx = text.find('<body')
print("Body idx:", body_idx)
if body_idx != -1:
    print(text[body_idx:body_idx+2000])

