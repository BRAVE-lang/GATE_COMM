import pymupdf
import re
import os
import sys
import json

sys.stdout.reconfigure(encoding='utf-8')

# 1. Load Authentic PYQs
with open('src/data/authenticPyqs.ts', 'r', encoding='utf-8') as f:
    c = f.read()

marker = 'AUTHENTIC_GATE_EC_PYQS: Question[] = '
eq_pos = c.find(marker)
start = c.find('[', eq_pos + len(marker))
end = c.rfind(']')

pyqs = json.loads(c[start:end+1])

# High-precision regex for questions that actually require a diagram:
diagram_indicators = [
    r'shown in (?:the )?(?:figure|circuit|diagram|graph|truth table|state diagram)',
    r'in the (?:circuit|network|figure|block diagram|state diagram|timing diagram|Bode plot|Nyquist plot|Smith chart) shown',
    r'circuit shown below',
    r'figure shown below',
    r'diagram shown below',
    r'given in (?:the )?(?:figure|circuit)',
    r'as shown in the figure',
    r'as shown in Figure',
    r'as shown in the circuit',
    r'shown in Figure',
    r'for the network shown',
    r'for the circuit shown',
    r'in the circuit given',
    r'in the following circuit',
    r'in the given circuit',
    r'circuit diagram shown',
    r'state transition diagram shown',
    r'signal flow graph shown',
    r'bode (?:magnitude )?plot shown',
    r'nyquist plot of',
    r'refer to (?:the )?figure',
    r'the circuit of Figure',
    r'the network shown below'
]
pattern = re.compile('|'.join(diagram_indicators), re.IGNORECASE)

genuine_diagram_qs = [q for q in pyqs if pattern.search(q['statement'])]
print(f"Total Authentic Questions needing diagrams: {len(genuine_diagram_qs)}")

PUBLIC_FIGURES_DIR = 'public/figures'
os.makedirs(PUBLIC_FIGURES_DIR, exist_ok=True)

docs = {}

def get_doc(year):
    if year not in docs:
        pdf_path = f'data/source_papers/{year}/GATE_{year}_EC_Question_Paper.pdf'
        docs[year] = pymupdf.open(pdf_path)
    return docs[year]

restored_count = 0
audit_results = []

for q in genuine_diagram_qs:
    qid = q['id']
    year = q['examYear']
    
    is_ga = '-GA' in qid
    if is_ga:
        q_num = int(re.search(r'GA(\d+)', qid).group(1))
    else:
        q_num = int(re.search(r'Q(\d+)', qid).group(1))
        
    doc = get_doc(year)
    
    target_page = None
    target_q_block = None
    next_q_block = None
    opt_a_block = None
    
    q_str = str(q_num)
    
    page_range = range(0, min(10, len(doc))) if is_ga else range(min(8, len(doc)), len(doc))
    
    for p_idx in page_range:
        p = doc[p_idx]
        blocks = p.get_text("blocks")
        
        found_block = None
        for b in blocks:
            txt = b[4].strip()
            for l in txt.split('\n'):
                line_clean = l.strip()
                if re.match(r'^Q\.?\s*[0-9]{1,2}\s*[–\-]', line_clean):
                    continue
                if re.match(rf'^Q\.?\s*{q_str}\b', line_clean):
                    found_block = b
                    break
            if found_block:
                break
                
        if found_block:
            target_page = p
            target_q_block = found_block
            
            # Find next Q or Option A on same page
            for b in blocks:
                txt = b[4].strip()
                if b[1] > target_q_block[1] + 25: # below header of target question
                    # Check for strict Option (A)
                    for l in txt.split('\n'):
                        l_c = l.strip()
                        if re.match(r'^\([Aa]\)|\b[Aa]\)', l_c) and opt_a_block is None:
                            opt_a_block = b
                            break
                        # Check for next question Q.<other_num>
                        m_next = re.match(r'^Q\.?\s*([0-9]{1,2})\b', l_c)
                        if m_next and int(m_next.group(1)) != q_num and next_q_block is None:
                            if not re.search(r'Carry|carry|[–\-]', l_c):
                                next_q_block = b
                                break
            break

    if not target_page or not target_q_block:
        audit_results.append({
            "id": qid,
            "status": "PAGE_NOT_FOUND",
            "year": year,
            "subject": q['subject']
        })
        continue

    # Determine vertical bounding box of diagram
    y_start = target_q_block[1] + 20
    if opt_a_block:
        y_end = opt_a_block[1]
    elif next_q_block:
        y_end = next_q_block[1]
    else:
        y_end = 760.0 # page footer boundary

    visual_boxes = []
    
    # 1. Images
    for info in target_page.get_image_info(xrefs=True):
        b = info['bbox']
        # Must fall in vertical range of this question
        if b[1] >= y_start - 15 and b[3] <= y_end + 15:
            w = b[2] - b[0]
            h = b[3] - b[1]
            if w > 25 and h > 20:
                visual_boxes.append(b)

    # 2. Vector drawings (schematic lines, op-amps, logic gates)
    for d in target_page.get_drawings():
        r = d['rect']
        if r[1] >= y_start - 10 and r[3] <= y_end + 10:
            w = r[2] - r[0]
            h = r[3] - r[1]
            # Include circuit lines / elements but ignore full-width separator lines
            if max(w, h) >= 4 and w < 420:
                visual_boxes.append(r)

    # If visual_boxes found:
    if visual_boxes:
        min_x = max(50.0, min(b[0] for b in visual_boxes) - 10)
        max_x = min(545.0, max(b[2] for b in visual_boxes) + 10)
        min_y = max(y_start - 5, min(b[1] for b in visual_boxes) - 6)
        max_y = min(y_end + 5, max(b[3] for b in visual_boxes) + 6)

        diag_w = max_x - min_x
        diag_h = max_y - min_y

        if diag_w >= 40 and diag_h >= 20:
            year_fig_dir = os.path.join(PUBLIC_FIGURES_DIR, str(year))
            os.makedirs(year_fig_dir, exist_ok=True)
            
            filename = f"{qid}.png"
            filepath = os.path.join(year_fig_dir, filename)
            
            clip_rect = pymupdf.Rect(min_x, min_y, max_x, max_y)
            pix = target_page.get_pixmap(clip=clip_rect, dpi=200)
            pix.save(filepath)
            
            rel_url = f"/figures/{year}/{filename}"
            q['figure'] = {
                "type": "image",
                "content": rel_url,
                "caption": f"Figure: Circuit / Schematic diagram for {qid} ({q['subject']})"
            }
            restored_count += 1
            audit_results.append({
                "id": qid,
                "status": "RESTORED",
                "year": year,
                "subject": q['subject'],
                "url": rel_url,
                "width": pix.width,
                "height": pix.height,
                "size": os.path.getsize(filepath)
            })
            continue

    # Fallback: if no drawings/images caught in the strict band, crop between y_start and y_end
    if y_end > y_start + 40:
        year_fig_dir = os.path.join(PUBLIC_FIGURES_DIR, str(year))
        os.makedirs(year_fig_dir, exist_ok=True)
        
        filename = f"{qid}.png"
        filepath = os.path.join(year_fig_dir, filename)
        
        clip_rect = pymupdf.Rect(65.0, y_start, 530.0, y_end)
        pix = target_page.get_pixmap(clip=clip_rect, dpi=200)
        pix.save(filepath)
        
        rel_url = f"/figures/{year}/{filename}"
        q['figure'] = {
            "type": "image",
            "content": rel_url,
            "caption": f"Figure: Circuit / Schematic diagram for {qid} ({q['subject']})"
        }
        restored_count += 1
        audit_results.append({
            "id": qid,
            "status": "RESTORED_BAND",
            "year": year,
            "subject": q['subject'],
            "url": rel_url,
            "width": pix.width,
            "height": pix.height,
            "size": os.path.getsize(filepath)
        })
    else:
        audit_results.append({
            "id": qid,
            "status": "NO_DIAGRAM_REGION",
            "year": year,
            "subject": q['subject']
        })

print(f"\nRESTORED DIAGRAMS: {restored_count} of {len(genuine_diagram_qs)}")

# Write updated authenticPyqs.ts
new_ts = c[:start] + json.dumps(pyqs, indent=2, ensure_ascii=False) + c[end+1:]
with open('src/data/authenticPyqs.ts', 'w', encoding='utf-8') as f:
    f.write(new_ts)

# Save audit report
with open('data/verification_reports/diagram_restoration_report.json', 'w', encoding='utf-8') as f:
    json.dump({
        "totalAuthenticQuestions": len(pyqs),
        "questionsNeedingDiagrams": len(genuine_diagram_qs),
        "diagramsRestored": restored_count,
        "restoredPercentage": round(restored_count / len(genuine_diagram_qs) * 100, 1),
        "results": audit_results
    }, f, indent=2)

print("Saved updated src/data/authenticPyqs.ts and data/verification_reports/diagram_restoration_report.json successfully!")
