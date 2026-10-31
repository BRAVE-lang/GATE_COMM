import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/authenticPyqs.ts', 'r', encoding='utf-8') as f:
    c = f.read()

marker = 'AUTHENTIC_GATE_EC_PYQS: Question[] = '
eq_pos = c.find(marker)
start = c.find('[', eq_pos + len(marker))
end = c.rfind(']')

qs = json.loads(c[start:end+1])

def clean_opt(text):
    text = text.strip()
    # Remove leading (A), (B), A), etc. if present
    text = re.sub(r'^\([A-Da-d]\)\s*', '', text)
    text = re.sub(r'^[A-Da-d]\)\s*', '', text)
    return text.strip()

fixed_count = 0

for q in qs:
    if q['type'] == 'MCQ' and (not q.get('options') or len(q['options']) < 2):
        qid = q['id']
        stmt = q['statement']
        
        # Specific fixes
        if qid == 'GATE-2026-EC-Q13':
            q['statement'] = 'The Laplace Transform of the signal $x(t) = u(t - 2) * (t u(t))$ is given by which of the following expressions? [“∗” represents convolution operator]'
            q['options'] = [
                {"id": "A", "text": "$\\frac{e^{-2s}}{s^2(s - 2)}$"},
                {"id": "B", "text": "$\\frac{e^{-2(s-2)}}{s^3}$"},
                {"id": "C", "text": "$\\frac{s e^{-2s}}{(s - 2)^2}$"},
                {"id": "D", "text": "$\\frac{e^{-2s}}{s^3}$"}
            ]
            fixed_count += 1
            continue

        if qid == 'GATE-2026-EC-Q36':
            q['statement'] = 'Consider the two series, $S_A$ and $S_B$, where:\n$$S_A = \\sum_{n=1}^\\infty \\frac{n^2}{2^n}$$\n$$S_B = 1 + \\frac{1}{2} + \\frac{1}{8} + \\frac{1}{16} + \\frac{1}{64} + \\frac{1}{128} + \\frac{1}{512} + \\cdots$$\nWhich of the following statements is correct for the two given series?'
            q['options'] = [
                {"id": "A", "text": "Both $S_A$ and $S_B$ converge."},
                {"id": "B", "text": "Neither $S_A$ nor $S_B$ converges."},
                {"id": "C", "text": "$S_A$ converges but $S_B$ does not converge."},
                {"id": "D", "text": "$S_B$ converges but $S_A$ does not converge."}
            ]
            fixed_count += 1
            continue

        if qid == 'GATE-2025-EC-Q12':
            q['statement'] = 'Consider the following series:\n(i) $\\sum_{n=1}^\\infty \\frac{1}{\\sqrt{n}}$\n(ii) $\\sum_{n=1}^\\infty \\frac{1}{n(n+1)}$\n(iii) $\\sum_{n=1}^\\infty \\frac{1}{n!}$\nChoose the correct option.'
            q['options'] = [
                {"id": "A", "text": "Only (ii) converges"},
                {"id": "B", "text": "Only (ii) and (iii) converge"},
                {"id": "C", "text": "Only (iii) converges"},
                {"id": "D", "text": "All three converge"}
            ]
            fixed_count += 1
            continue

        if qid == 'GATE-2024-EC-Q36':
            q['statement'] = 'Consider the Earth to be a perfect sphere of radius $R$. Then the surface area of the region, enclosed by the $60^\\circ\\text{N}$ latitude circle, that contains the north pole in its interior is ________.'
            q['options'] = [
                {"id": "A", "text": "$(2 - \\sqrt{3})\\pi R^2$"},
                {"id": "B", "text": "$(2 - 1/2)\\pi R^2$"},
                {"id": "C", "text": "$\\frac{2}{3}\\pi R^2$"},
                {"id": "D", "text": "$\\frac{2 + \\sqrt{3}}{2}\\pi R^2$"}
            ]
            fixed_count += 1
            continue

        # General regex matching for (A) ... (B) ... (C) ... (D) ...
        # Match (A) or (a)
        match_a = re.search(r'(?:\([Aa]\)|\b[Aa]\))\s+', stmt)
        match_b = re.search(r'(?:\([Bb]\)|\b[Bb]\))\s+', stmt)
        match_c = re.search(r'(?:\([Cc]\)|\b[Cc]\))\s+', stmt)
        match_d = re.search(r'(?:\([Dd]\)|\b[Dd]\))\s+', stmt)

        if match_a and match_b and match_c and match_d:
            idx_a = match_a.start()
            idx_b = match_b.start()
            idx_c = match_c.start()
            idx_d = match_d.start()

            if idx_a < idx_b < idx_c < idx_d:
                clean_stmt = stmt[:idx_a].strip()
                opt_a = clean_opt(stmt[match_a.end():idx_b])
                opt_b = clean_opt(stmt[match_b.end():idx_c])
                opt_c = clean_opt(stmt[match_c.end():idx_d])
                opt_d = clean_opt(stmt[match_d.end():])

                # Clean up any trailing footer noise in opt_d
                opt_d = re.split(r'Organizing Institute:|Page \d+ of \d+|GATE \d+', opt_d)[0].strip()

                q['statement'] = clean_stmt
                q['options'] = [
                    {"id": "A", "text": opt_a},
                    {"id": "B", "text": opt_b},
                    {"id": "C", "text": opt_c},
                    {"id": "D", "text": opt_d}
                ]
                fixed_count += 1
                continue

        print(f"Could NOT automatically fix {qid}: {stmt[-100:]}")

print(f"Fixed {fixed_count} of 34 problematic MCQs.")

# Write back to authenticPyqs.ts
new_ts = c[:start] + json.dumps(qs, indent=2, ensure_ascii=False) + c[end+1:]
with open('src/data/authenticPyqs.ts', 'w', encoding='utf-8') as f:
    f.write(new_ts)

print("Saved updated src/data/authenticPyqs.ts successfully!")

