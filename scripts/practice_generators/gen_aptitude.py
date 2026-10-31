import math
from .common import make_question

def generate_aptitude_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. QUANTITATIVE APTITUDE (~75 questions)
    # ==========================================
    # Set 1A: Time and Work (15 questions)
    for w_i in range(15):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        d_a = 10 + (w_i % 6) * 2  # 10, 12, 14, 16, 18, 20
        d_b = 15 + (w_i % 5) * 3  # 15, 18, 21, 24, 27
        # Total days together: (d_a * d_b) / (d_a + d_b)
        tot_days = round((d_a * d_b) / (d_a + d_b), 2)
        stmt = f"Person A can complete a project alone in {d_a} days, and Person B can complete the same project alone in {d_b} days. If they work together at their respective constant rates, the number of days required to finish the project is ________ (rounded off to two decimal places)."
        ans = [round(tot_days - 0.05, 2), round(tot_days + 0.05, 2)]
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Quantitative Aptitude",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the combined time taken by two workers working simultaneously using their individual work rates.",
            given_info=[f"Time taken by A: $T_A = {d_a}$ days", f"Time taken by B: $T_B = {d_b}$ days"],
            concept="Work rate is inversely proportional to time: Rate of A is $1/T_A$ and Rate of B is $1/T_B$. Combined rate is $1/T_{total} = 1/T_A + 1/T_B$.",
            formulas=[{"formula": "T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}", "terms": [{"term": "T_{total}", "explanation": "Combined days to finish work"}]}],
            derivation=[
                f"Step 1: In one day, Person A completes $\\frac{{1}}{{{d_a}}}$ of the work.",
                f"Step 2: In one day, Person B completes $\\frac{{1}}{{{d_b}}}$ of the work.",
                f"Step 3: Together, in one day they complete $\\frac{{1}}{{{d_a}}} + \\frac{{1}}{{{d_b}}} = \\frac{{{d_a + d_b}}}{{{d_a * d_b}}}$.",
                f"Step 4: Total days required is the reciprocal: $T = \\frac{{{d_a * d_b}}}{{{d_a + d_b}}} \\approx {tot_days}$ days."
            ],
            final_answer=f"{tot_days} days",
            alternative="Use LCM method: Assume total work is the LCM of the days to work with integer daily efficiencies.",
            mistakes=["Averaging the two times $(T_A + T_B)/2$ instead of taking the harmonic mean."],
            tags=["Quantitative Aptitude", "Time and Work", "Harmonic Mean", "Rate Problems"]
        )
        questions.append(q)

    # Set 1B: Speed, Time and Distance (15 questions)
    for s_i in range(15):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        speed_kmh = 36 + (s_i % 6) * 18 # 36, 54, 72, 90, 108, 126 km/h
        speed_ms = speed_kmh * 5 / 18   # 10, 15, 20, 25, 30, 35 m/s
        len_train = 150 + s_i * 10
        len_plat = 200 + s_i * 15
        time_sec = round((len_train + len_plat) / speed_ms, 2)
        stmt = f"A train of length {len_train} m is travelling at a constant speed of {speed_kmh} km/h. The time taken by the train to completely cross a railway platform of length {len_plat} m is ________ seconds (rounded off to two decimal places)."
        ans = [round(time_sec - 0.05, 2), round(time_sec + 0.05, 2)]
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Quantitative Aptitude",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the crossing time of a train passing a stationary platform.",
            given_info=[f"Train length = {len_train} m", f"Platform length = {len_plat} m", f"Speed = {speed_kmh} km/h"],
            concept="Total distance covered to completely cross the platform is $D = L_{train} + L_{platform}$. Convert speed from km/h to m/s by multiplying by $5/18$.",
            formulas=[{"formula": "t = \\frac{L_{train} + L_{platform}}{v}", "terms": [{"term": "v", "explanation": "Speed in m/s"}]}],
            derivation=[
                f"Step 1: Convert speed to m/s: $v = {speed_kmh} \\times \\frac{{5}}{{18}} = {speed_ms:.1f}\\text{{ m/s}}$.",
                f"Step 2: Total distance to cover: $D = {len_train} + {len_plat} = {len_train + len_plat}\\text{{ m}}$.",
                f"Step 3: Time taken: $t = \\frac{{D}}{{v}} = \\frac{{{len_train + len_plat}}}{{{speed_ms:.1f}}} = {time_sec}\\text{{ seconds}}$."
            ],
            final_answer=f"{time_sec} s",
            alternative="Direct calculation: $t = \\frac{(L_1 + L_2) \\times 18}{v_{km/h} \\times 5}$.",
            mistakes=["Forgetting to add the train's own length to the platform length.", "Forgetting unit conversion from km/h to m/s."],
            tags=["Quantitative Aptitude", "Speed Time Distance", "Trains", "Unit Conversion"]
        )
        questions.append(q)

    # Set 1C: Profit, Loss & Percentage (15 questions)
    for p_i in range(15):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        markup = 20 + (p_i % 5) * 10 # 20%, 30%, 40%, 50%, 60%
        discount = 10 + (p_i % 3) * 5 # 10%, 15%, 20%
        # Net profit % = markup - discount - (markup * discount)/100
        net_profit = round(markup - discount - (markup * discount) / 100.0, 2)
        stmt = f"A retailer marks up the price of an article by {markup}\\% above its cost price and then allows a discount of {discount}\\% on the marked price. The net profit percentage earned by the retailer is ________\\% (rounded off to two decimal places)."
        ans = [round(net_profit - 0.05, 2), round(net_profit + 0.05, 2)]
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Quantitative Aptitude",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the overall net profit percentage after successive markup and discount percentages.",
            given_info=[f"Markup = {markup}%", f"Discount = {discount}%"],
            concept="Net successive percentage change is given by $a + b + \\frac{ab}{100}$ where discount represents a negative percentage change.",
            formulas=[{"formula": "\\text{Net Profit \\%} = M - D - \\frac{M \\cdot D}{100}", "terms": [{"term": "M", "explanation": "Markup %"}, {"term": "D", "explanation": "Discount %"}]}],
            derivation=[
                "Step 1: Let the Cost Price (CP) be $100.",
                f"Step 2: Marked Price (MP) $= 100 + {markup} = {100 + markup}$.",
                f"Step 3: Selling Price (SP) after {discount}% discount $= {100 + markup} \\times \\left(1 - \\frac{{{discount}}}{{100}}\\right) = {100 + markup} \\times {(100-discount)/100:.2f} = {(100+markup)*(100-discount)/100:.2f}$.",
                f"Step 4: Profit $= \\text{{SP}} - \\text{{CP}} = {(100+markup)*(100-discount)/100:.2f} - 100 = {net_profit}\\%."
            ],
            final_answer=f"{net_profit}%",
            alternative="Formula: $x + y + \\frac{xy}{100} = +{markup} - {discount} - \\frac{{{markup}\\times {discount}}}{{100}} = {net_profit}\\%$.",
            mistakes=["Directly subtracting the discount from markup ($M - D$) without accounting for the fact that discount is applied to the higher marked price."],
            tags=["Quantitative Aptitude", "Profit and Loss", "Percentage", "Successive Percentage"]
        )
        questions.append(q)

    # Set 1D: Permutations, Combinations & Probability (15 questions)
    for comb_i in range(15):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        n_tot = 8 + (comb_i % 4) # 8, 9, 10, 11
        r_sel = 3
        # nCr = n! / (r! * (n-r)!)
        ncr = math.comb(n_tot, r_sel)
        stmt = f"A committee of {r_sel} members is to be formed from a group of {n_tot} eligible candidates. The total number of distinct committees that can be selected is ________."
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Quantitative Aptitude",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=str(ncr),
            difficulty="Easy",
            understanding="Find the number of ways to select an unordered committee of members from a group.",
            given_info=[f"Total candidates $n = {n_tot}$", f"Selection size $r = {r_sel}$"],
            concept="Selection of $r$ objects from $n$ distinct objects without regard to order is given by the combination formula $^n C_r = \\frac{n!}{r!(n - r)!}$.",
            formulas=[{"formula": "^n C_r = \\frac{n!}{r!(n-r)!}", "terms": [{"term": "^n C_r", "explanation": "Binomial coefficient"}]}],
            derivation=[
                f"Step 1: Formula: $^{{{n_tot}}} C_{{{r_sel}}} = \\frac{{{n_tot}!}}{{{r_sel}! ({n_tot} - {r_sel})!}}$.",
                f"Step 2: Expand: $^{{{n_tot}}} C_{{{r_sel}}} = \\frac{{{n_tot} \\times {n_tot - 1} \\times {n_tot - 2}}}{{3 \\times 2 \\times 1}}$.",
                f"Step 3: Numerator $= {n_tot * (n_tot - 1) * (n_tot - 2)}$, Denominator $= 6$.",
                f"Step 4: Division yields $\\frac{{{n_tot * (n_tot - 1) * (n_tot - 2)}}}{{6}} = {ncr}$."
            ],
            final_answer=f"{ncr}",
            alternative="Use recursive combination property: $^n C_r = ^{n-1} C_{r-1} + ^{n-1} C_r$.",
            mistakes=["Using permutation $^n P_r$ (which assumes order of committee members matters)."],
            tags=["Quantitative Aptitude", "Combinations", "Permutations", "Counting Principles"]
        )
        questions.append(q)

    # Set 1E: Number Properties & Sequences (15 questions)
    for num_i in range(15):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        base = 7
        exp = 4 * num_i + 3
        # 7^1 = 7, 7^2 = 9, 7^3 = 3, 7^4 = 1 -> cyclicity 4
        unit_digit = [1, 7, 9, 3][exp % 4]
        stmt = f"The units digit of the number $7^{{{exp}}}$ is:"
        opts = [
            {"id": "A", "text": "3"},
            {"id": "B", "text": "7"},
            {"id": "C", "text": "9"},
            {"id": "D", "text": "1"}
        ]
        ans_opt = "A" if unit_digit == 3 else ("B" if unit_digit == 7 else ("C" if unit_digit == 9 else "D"))
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Quantitative Aptitude",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer=ans_opt,
            difficulty="Easy",
            understanding="Determine the units digit of a large power using the cyclical pattern of powers of 7.",
            given_info=[f"Expression: $7^{{{exp}}}$"],
            concept="The units digits of powers of 7 repeat in cycles of 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$.",
            formulas=[{"formula": "7^n \\pmod{10} = 7^{n \\pmod 4} \\pmod{10}", "terms": [{"term": "n \\pmod 4", "explanation": "Remainder when exponent is divided by period 4"}]}],
            derivation=[
                "Step 1: Determine the cyclicity of base 7: $7^1=7, 7^2=49 (9), 7^3=343 (3), 7^4=2401 (1)$. Period is 4.",
                f"Step 2: Find remainder of exponent {exp} divided by 4: ${exp} \\pmod 4 = {exp % 4}$.",
                f"Step 3: Since remainder is {exp % 4}, the units digit is identical to $7^{{{exp % 4}}}$ which is {unit_digit}.",
                f"Therefore, the correct option is Option {ans_opt}."
            ],
            final_answer=f"Option {ans_opt} ({unit_digit})",
            alternative="Express $7^4 \\equiv 1 \\pmod{10}$. Then $7^{4k+3} = (7^4)^k \\times 7^3 \\equiv 1^k \\times 343 \\equiv 3 \\pmod{10}$.",
            mistakes=["Assuming cyclicity is 2 instead of 4."],
            tags=["Quantitative Aptitude", "Number Systems", "Units Digit", "Cyclicity", "Modular Arithmetic"]
        )
        questions.append(q)

    # ==========================================
    # 2. ANALYTICAL APTITUDE (~70 questions)
    # ==========================================
    # Set 2A: Syllogisms & Logical Deductions (20 questions)
    syllogisms = [
        ("All engineers are problem solvers. Some problem solvers are programmers.", "Some engineers are programmers", "All problem solvers are engineers", "Neither I nor II follows", "Both I and II follow", "C"),
        ("All diodes are semiconductor devices. All semiconductor devices conduct current.", "All diodes conduct current", "Some devices that conduct current are diodes", "Both I and II follow", "Neither I nor II follows", "C"),
        ("No metals are insulators. All copper wires are metals.", "No copper wires are insulators", "Some insulators are copper wires", "Only I follows", "Only II follows", "A"),
        ("Some amplifiers are linear. All linear circuits obey superposition.", "Some amplifiers obey superposition", "All circuits that obey superposition are amplifiers", "Only I follows", "Both follow", "A"),
        ("All flip-flops are sequential circuits. No combinational circuits are sequential circuits.", "No flip-flops are combinational circuits", "All sequential circuits are flip-flops", "Only I follows", "Neither follows", "A")
    ]
    for syl_i in range(20):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        premise, c1, c2, o_a, o_b, o_ans = syllogisms[syl_i % len(syllogisms)]
        stmt = f"Read the statements and conclusions carefully:\n\n**Statements:**\n{premise}\n\n**Conclusions:**\nI. {c1}\nII. {c2}\n\nWhich of the following is logically CORRECT?"
        opts = [
            {"id": "A", "text": "Only Conclusion I follows"},
            {"id": "B", "text": "Only Conclusion II follows"},
            {"id": "C", "text": o_a},
            {"id": "D", "text": o_b}
        ]
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Analytical Aptitude",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A" if o_ans == "A" else "C",
            difficulty="Medium",
            understanding="Evaluate the deductive validity of conclusions given universal and particular premises.",
            given_info=[f"Premises: {premise}"],
            concept="Deductive syllogistic logic: A conclusion is valid if and only if it is true in every possible Venn diagram representation satisfying the premises.",
            formulas=[{"formula": "A \\subseteq B, \\, B \\subseteq C \\implies A \\subseteq C", "terms": [{"term": "\\subseteq", "explanation": "Subset inclusion"}]}],
            derivation=[
                "Step 1: Construct the Venn diagrams corresponding to the given premises.",
                "Step 2: Test Conclusion I across all minimal and maximal overlap possibilities.",
                "Step 3: Test Conclusion II across all possibilities.",
                f"Step 4: Identify the validly inferred conclusion(s)."
            ],
            final_answer="The logically valid option",
            alternative="Translate into standard Aristotelian categorical propositions (A, E, I, O types).",
            mistakes=["Assuming an existential conclusion from two universal premises without explicit non-emptiness."],
            tags=["Analytical Aptitude", "Syllogisms", "Venn Diagrams", "Deductive Logic"]
        )
        questions.append(q)

    # Set 2B: Series & Pattern Recognition (25 questions)
    series_cases = [
        ([2, 5, 10, 17, 26], 37, "n^2 + 1"),
        ([3, 7, 15, 31, 63], 127, "2^n - 1"),
        ([1, 1, 2, 3, 5, 8], 13, "Fibonacci sequence"),
        ([2, 6, 12, 20, 30], 42, "n(n+1) sequence"),
        ([5, 11, 23, 47, 95], 191, "2x + 1 progression")
    ]
    for ser_i in range(25):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        seq, nxt, rule = series_cases[ser_i % len(series_cases)]
        seq_str = ", ".join(str(x) for x in seq)
        stmt = f"Find the next number in the sequence: $${seq_str}, \\quad ?$$"
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Analytical Aptitude",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=str(nxt),
            difficulty="Easy",
            understanding="Identify the governing numerical progression rule to predict the next sequence term.",
            given_info=[f"Sequence: {seq_str}"],
            concept=f"Rule of progression: {rule}.",
            formulas=[{"formula": "a_n = f(n)", "terms": [{"term": "a_n", "explanation": "General term of the series"}]}],
            derivation=[
                f"Step 1: Calculate differences between consecutive terms:",
                f"The difference series reveals the underlying structure.",
                f"Step 2: Applying the rule '{rule}', the next term is {nxt}."
            ],
            final_answer=str(nxt),
            alternative="Fit a polynomial difference table up to second or third differences.",
            mistakes=["Assuming constant differences without checking higher-order differences."],
            tags=["Analytical Aptitude", "Number Series", "Pattern Recognition", "Sequences"]
        )
        questions.append(q)

    # Set 2C: Seating Arrangement & Ranking (25 questions)
    for seat_i in range(25):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        rank_top = 10 + (seat_i % 8)
        rank_bot = 25 + (seat_i % 10)
        tot_students = rank_top + rank_bot - 1
        stmt = f"In a class examination, Rohit ranks {rank_top}th from the top and {rank_bot}th from the bottom among all students who took the test. The total number of students in the class is ________."
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Analytical Aptitude",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=str(tot_students),
            difficulty="Easy",
            understanding="Determine total count from rank given from both ends of a linear ordered list.",
            given_info=[f"Rank from top = {rank_top}", f"Rank from bottom = {rank_bot}"],
            concept="When the position of a single individual is counted from both ends, the individual is counted twice. Therefore, $\\text{Total} = \\text{Rank}_{top} + \\text{Rank}_{bottom} - 1$.",
            formulas=[{"formula": "\\text{Total} = \\text{Rank}_1 + \\text{Rank}_2 - 1", "terms": [{"term": "-1", "explanation": "Avoids double-counting the person"}]}],
            derivation=[
                f"Step 1: Rank from top: {rank_top}.",
                f"Step 2: Rank from bottom: {rank_bot}.",
                f"Step 3: Total students $= {rank_top} + {rank_bot} - 1 = {tot_students}$."
            ],
            final_answer=str(tot_students),
            alternative="There are $rank_top - 1$ students ahead and $rank_bot - 1$ students behind: $(top - 1) + (bot - 1) + 1 = top + bot - 1$.",
            mistakes=["Directly adding $rank_{top} + rank_{bottom}$ without subtracting 1."],
            tags=["Analytical Aptitude", "Ranking", "Linear Ordering", "Counting"]
        )
        questions.append(q)

    # ==========================================
    # 3. SPATIAL APTITUDE (~60 questions)
    # ==========================================
    # Set 3A: Paper Folding, Symmetries & Rotation (30 questions)
    rot_angles = [90, 180, 270, 360]
    for sp_i in range(30):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        deg = rot_angles[sp_i % len(rot_angles)]
        stmt = f"A plane figure in the $xy$-plane is rotated clockwise by {deg}$^\\circ$ about the origin, followed by a reflection across the $x$-axis. If a point on the original shape was at $(1, 0)$, its coordinates after both transformations are:"
        # Clockwise rotation by deg:
        rad = -math.radians(deg) # clockwise is negative angle
        x1 = round(1 * math.cos(rad) - 0 * math.sin(rad))
        y1 = round(1 * math.sin(rad) + 0 * math.cos(rad))
        # Reflection across x-axis: (x, -y)
        x_final = x1
        y_final = -y1
        opts = [
            {"id": "A", "text": f"$({x_final}, {y_final})$"},
            {"id": "B", "text": f"$({-x_final}, {y_final})$"},
            {"id": "C", "text": f"$({y_final}, {x_final})$"},
            {"id": "D", "text": f"$({x_final}, {-y_final})$"}
        ]
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Spatial Aptitude",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Medium",
            understanding="Track the coordinate transformations of a geometric point under sequential 2D rotation and reflection.",
            given_info=[f"Initial point: $(1, 0)$", f"Clockwise rotation: {deg}$^\\circ$", "Reflection axis: $x$-axis"],
            concept="2D Transformation matrices: Clockwise rotation by $\\theta$ is $\\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix}$, and reflection across the $x$-axis maps $(x, y) \\to (x, -y)$.",
            formulas=[{"formula": "(x', y') = (x\\cos\\theta + y\\sin\\theta, -x\\sin\\theta + y\\cos\\theta)", "terms": [{"term": "\\theta", "explanation": "Clockwise rotation angle"}]}],
            derivation=[
                f"Step 1: Rotate point $(1, 0)$ clockwise by {deg}$^\\circ$. The resulting coordinate is $({x1}, {y1})$.",
                f"Step 2: Reflect across the $x$-axis: $(x, y) \\to (x, -y)$.",
                f"The $y$-coordinate changes sign while $x$ remains unchanged: $({x_final}, {y_final})$.",
                "Therefore, the final coordinates correspond to Option A."
            ],
            final_answer="Option A",
            alternative="Use unit circle visualization: start at $0^\\circ$, rotate clockwise, then flip vertically across horizontal axis.",
            mistakes=["Confusing clockwise (negative angle) with counter-clockwise rotation."],
            tags=["Spatial Aptitude", "Transformation", "2D Rotation", "Reflection"]
        )
        questions.append(q)

    # Set 3B: Cube Views & Unfolding (30 questions)
    dice_opposites = [
        ("1 is opposite to 6", "2 is opposite to 5", "3 is opposite to 4", "6"),
        ("A is opposite to F", "B is opposite to E", "C is opposite to D", "F"),
        ("Red is opposite to Blue", "Green is opposite to Yellow", "Black is opposite to White", "Blue")
    ]
    for d_i in range(30):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        opp1, opp2, opp3, target_ans = dice_opposites[d_i % len(dice_opposites)]
        stmt = f"A standard six-faced cube is unfolded into a cross-shaped net. In this layout, {opp1}, and {opp2}. Which face is directly opposite to face 3 in the folded cube?"
        opts = [
            {"id": "A", "text": "Face 4"},
            {"id": "B", "text": "Face 5"},
            {"id": "C", "text": "Face 6"},
            {"id": "D", "text": "Face 2"}
        ]
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Spatial Aptitude",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Determine opposite faces in a 3D folded cube from relative adjacency constraints.",
            given_info=["Cube faces: 1, 2, 3, 4, 5, 6", f"Known opposites: {opp1}, {opp2}"],
            concept="In any 6-faced cube, the 3 pairs of opposite faces are mutually disjoint. If two pairs are determined, the remaining two faces must be opposite to each other.",
            formulas=[{"formula": "\\text{Total pairs} = 3", "terms": [{"term": "Opposite faces", "explanation": "Never share an edge in the assembled cube"}]}],
            derivation=[
                "Step 1: A cube has 6 faces grouped into 3 distinct opposite pairs.",
                f"Step 2: Pair 1 is established: {opp1}.",
                f"Step 3: Pair 2 is established: {opp2}.",
                "Step 4: The remaining unassigned faces are 3 and 4.",
                "Therefore, face 3 must be opposite to face 4 (Option A)."
            ],
            final_answer="Option A",
            alternative="Eliminate adjacent faces: faces that share an edge in the net can never be opposite.",
            mistakes=["Assuming adjacent faces in the unfolded net become opposite faces upon folding."],
            tags=["Spatial Aptitude", "Cube Folding", "Dice Problems", "3D Visualization"]
        )
        questions.append(q)

    # ==========================================
    # 4. VERBAL APTITUDE (~65 questions)
    # ==========================================
    # Set 4A: Sentence Completion & Grammar (35 questions)
    verbal_items = [
        ("The engineer insisted on ________ the test results before submitting the technical report.", ["verifying", "verify", "verified", "verification"], "A", "Preposition 'on' takes a gerund (-ing form)."),
        ("Neither the professor nor the students ________ present in the laboratory during the power outage.", ["were", "was", "is", "are"], "A", "Subject closest to verb ('students', plural) governs agreement with 'neither...nor'."),
        ("The signal-to-noise ratio was so low ________ the receiver could barely detect the transmitted packet.", ["that", "which", "because", "then"], "A", "Correlative conjunction 'so...that' indicates degree/result."),
        ("Had the technician calibrated the oscilloscope properly, the measurement error ________ avoided.", ["would have been", "will be", "had been", "is"], "A", "Third conditional: 'Had + past participle' requires 'would have been' in main clause."),
        ("The committee expressed grave concern ________ the unprecedented delay in product certification.", ["over", "with", "at", "against"], "A", "Correct idiomatic preposition is 'concern over' or 'concern about'.")
    ]
    for vb_i in range(35):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        prompt, opt_words, corr_letter, reason = verbal_items[vb_i % len(verbal_items)]
        stmt = f"Choose the grammatically CORRECT and most appropriate word/phrase to fill in the blank:\n\n\"{prompt}\""
        opts = [
            {"id": "A", "text": opt_words[0]},
            {"id": "B", "text": opt_words[1]},
            {"id": "C", "text": opt_words[2]},
            {"id": "D", "text": opt_words[3]}
        ]
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Verbal Aptitude",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer=corr_letter,
            difficulty="Easy",
            understanding="Select the syntactically and semantically correct word or phrase completing the sentence.",
            given_info=[f"Sentence: {prompt}"],
            concept=f"Standard English grammatical rules: {reason}.",
            formulas=[{"formula": "\\text{Grammar rule application}", "terms": [{"term": "Syntax", "explanation": "Subject-verb agreement and prepositional collocations"}]}],
            derivation=[
                f"Step 1: Analyze the grammatical structure of the sentence.",
                f"Step 2: {reason}",
                f"Step 3: The correct choice is Option {corr_letter}."
            ],
            final_answer=f"Option {corr_letter}",
            alternative="Test by substituting each option into the sentence to evaluate semantic and syntactic fluency.",
            mistakes=["Overlooking proximity rule in correlative conjunctions like 'neither...nor'."],
            tags=["Verbal Aptitude", "Grammar", "Sentence Completion", "Subject-Verb Agreement"]
        )
        questions.append(q)

    # Set 4B: Vocabulary & Antonyms/Synonyms (30 questions)
    vocab_items = [
        ("METICULOUS", "Careful and thorough", "Careless", ["Diligent", "Careless", "Hasty", "Indifferent"], "B"),
        ("AMBIGUOUS", "Open to more than one interpretation", "Clear", ["Vague", "Clear", "Doubtful", "Obscure"], "B"),
        ("PRAGMATIC", "Dealing with things sensibly and realistically", "Idealistic", ["Practical", "Idealistic", "Realistic", "Logical"], "B"),
        ("EPHEMERAL", "Lasting for a very short time", "Permanent", ["Transient", "Permanent", "Fleeting", "Short-lived"], "B"),
        ("LUCID", "Expressed clearly and easy to understand", "Confusing", ["Clear", "Confusing", "Transparent", "Bright"], "B")
    ]
    for vc_i in range(30):
        qid = f"PRAC-APT-{idx:03d}"
        idx += 1
        word, meaning, antonym, choices, corr_choice = vocab_items[vc_i % len(vocab_items)]
        stmt = f"Choose the word that is most nearly OPPOSITE in meaning (ANTONYM) to the capitalized word:\n\n**{word}**"
        opts = [
            {"id": "A", "text": choices[0]},
            {"id": "B", "text": choices[1]},
            {"id": "C", "text": choices[2]},
            {"id": "D", "text": choices[3]}
        ]
        q = make_question(
            qid=qid,
            subject="General Aptitude",
            topic="Verbal Aptitude",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer=corr_choice,
            difficulty="Easy",
            understanding=f"Identify the antonym of the given English vocabulary word '{word}'.",
            given_info=[f"Target word: {word}"],
            concept=f"Vocabulary and semantic antonyms: '{word}' means '{meaning}'. Its direct opposite is '{antonym}'.",
            formulas=[{"formula": "\\text{Antonym}(word)", "terms": [{"term": "Antonym", "explanation": "Semantic polar opposite"}]}],
            derivation=[
                f"Step 1: Definition: '{word}' denotes '{meaning}'.",
                f"Step 2: Examine the given choices.",
                f"Step 3: '{antonym}' represents the direct antonym.",
                f"Therefore, Option {corr_choice} is the correct answer."
            ],
            final_answer=f"Option {corr_choice} ({antonym})",
            alternative="Eliminate synonyms (e.g. practical/realistic) to isolate the single opposing term.",
            mistakes=["Selecting the synonym instead of the requested antonym."],
            tags=["Verbal Aptitude", "Vocabulary", "Antonyms", "Semantics"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} General Aptitude practice questions.")
    return questions
