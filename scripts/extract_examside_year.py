import urllib.request
import re
import ssl
import json
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def fetch_year_index(year_slug):
    url = f"https://questions.examside.com/past-years/year-wise/gate/gate-ece/{year_slug}"
    print(f"Fetching index: {url}")
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        q_links = set(re.findall(rf'href=[\'"](/past-years/year-wise/gate/gate-ece/{year_slug}/[^\'"]+)[\'"]', html))
        print(f"Found {len(q_links)} question links for {year_slug}.")
        return list(q_links)

def parse_question_page(rel_url):
    full_url = f"https://questions.examside.com{rel_url}"
    req = urllib.request.Request(full_url, headers=HEADERS)
    with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        
        # Statement
        stmt_m = re.search(r'<div class="q-content[^"]*"[^>]*>([\s\S]+?)</div>', html)
        statement = stmt_m.group(1).strip() if stmt_m else ""
        
        # Clean HTML tags and KaTeX/MathJax markers
        clean_stmt = re.sub(r'<[^>]+>', ' ', statement)
        clean_stmt = re.sub(r'\s+', ' ', clean_stmt).strip()
        
        # Options
        opts = []
        opt_matches = re.findall(r'<div class="opt[^"]*"[^>]*>([\s\S]+?)</div>', html)
        for i, opt_html in enumerate(opt_matches):
            opt_clean = re.sub(r'<[^>]+>', ' ', opt_html)
            opt_clean = re.sub(r'\s+', ' ', opt_clean).strip()
            opt_id = chr(ord('A') + i)
            opts.append({'id': opt_id, 'text': opt_clean})
            
        # Answer
        ans_m = re.search(r'Correct answer is\s*([^\<\>]+)', html, re.I)
        raw_ans = ans_m.group(1).strip() if ans_m else ""
        
        # Figure / Image
        img_m = re.search(r'<img[^>]+src="([^">]+cdn\.examgoal\.net[^">]+)"', html)
        img_url = img_m.group(1) if img_m else None
        
        return {
            'url': full_url,
            'statement': clean_stmt,
            'options': opts if opts else None,
            'official_answer': raw_ans,
            'figure_url': img_url
        }

if __name__ == '__main__':
    links = fetch_year_index('gate-ece-2020')
    if links:
        print(f"Sampling question 1 from 2020...")
        sample = parse_question_page(links[0])
        print(json.dumps(sample, indent=2))

