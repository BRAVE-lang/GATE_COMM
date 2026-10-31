import math
from .common import make_question

def generate_control_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. TRANSFER FUNCTION & SFG (~55 questions)
    # ==========================================
    # Set 1A: Closed-Loop Transfer Function & Mason's Gain Formula (55 questions)
    for sfg_i in range(55):
        qid = f"PRAC-CTL-{idx:03d}"
        idx += 1
        g_k = (sfg_i % 5) + 2 # 2, 3, 4, 5, 6
        h_val = 1             # unity feedback
        # CLTF = G / (1 + G*H) = g_k / (s + a + g_k)
        # DC gain = g_k / (a + g_k)
        a_pole = (sfg_i % 4) + 1 # 1, 2, 3, 4
        dc_gain = round(float(g_k) / (a_pole + g_k), 2)
        stmt = f"A unity negative feedback control system has an open-loop transfer function $G(s) = \\frac{{{g_k}}}{{s + {a_pole}}}$ and $H(s) = 1$. The DC steady-state closed-loop gain $T(0) = \\left.\\frac{{C(s)}}{{R(s)}}\\right|_{{s=0}}$ is ________ (rounded off to two decimal places)."
        ans = [round(dc_gain - 0.05, 2), round(dc_gain + 0.05, 2)] if abs(dc_gain - round(dc_gain)) > 1e-4 else str(int(round(dc_gain)))
        q = make_question(
            qid=qid,
            subject="Control Systems",
            topic="Transfer Function & Signal Flow Graphs",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Evaluate the closed-loop DC gain of a negative feedback control system.",
            given_info=[f"Forward transfer function $G(s) = \\frac{{{g_k}}}{{s + {a_pole}}}$", "Feedback $H(s) = 1$"],
            concept="Closed-loop transfer function for negative feedback: $T(s) = \\frac{G(s)}{1 + G(s)H(s)}$. The DC gain is found by evaluating at $s = 0$.",
            formulas=[{"formula": "T(0) = \\frac{G(0)}{1 + G(0)H(0)}", "terms": [{"term": "T(0)", "explanation": "Closed-loop DC steady-state gain"}]}],
            derivation=[
                f"Step 1: Compute closed-loop transfer function: $T(s) = \\frac{{{g_k}/(s + {a_pole})}}{{1 + {g_k}/(s + {a_pole})}} = \\frac{{{g_k}}}{{s + {a_pole} + {g_k}}} = \\frac{{{g_k}}}{{s + {a_pole + g_k}}}$.",
                f"Step 2: Evaluate at $s = 0$: $T(0) = \\frac{{{g_k}}}{{{a_pole + g_k}}} = {dc_gain}$."
            ],
            final_answer=f"T(0) = {dc_gain}",
            alternative="Direct evaluation: $G(0) = " + str(g_k) + "/" + str(a_pole) + "$. Then $T(0) = \\frac{G(0)}{1 + G(0)} = " + str(dc_gain) + "$.",
            mistakes=["Taking open-loop DC gain $G(0)$ instead of closed-loop gain $T(0)$."],
            tags=["Control Systems", "Transfer Function", "Negative Feedback", "DC Gain"]
        )
        questions.append(q)

    # ==========================================
    # 2. TIME DOMAIN ANALYSIS (~55 questions)
    # ==========================================
    # Set 2A: Peak Overshoot & Damping Ratio (30 questions)
    for td_i in range(30):
        qid = f"PRAC-CTL-{idx:03d}"
        idx += 1
        zeta = 0.5 + (td_i % 4) * 0.1 # 0.5, 0.6, 0.7, 0.8
        # Mp = e^(-pi * zeta / sqrt(1 - zeta^2)) * 100
        num = -math.pi * zeta
        den = math.sqrt(1.0 - zeta**2)
        mp = round(math.exp(num / den) * 100.0, 1)
        stmt = f"A standard second-order unity feedback system has a closed-loop damping ratio of $\\zeta = {zeta:.1f}$. The percentage maximum peak overshoot $\\% M_p$ in response to a unit step input is ________\\% (rounded off to one decimal place)."
        ans = [round(mp - 0.5, 1), round(mp + 0.5, 1)]
        q = make_question(
            qid=qid,
            subject="Control Systems",
            topic="Time Domain Analysis",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Medium",
            understanding="Calculate the percentage maximum peak overshoot of an underdamped second-order control system.",
            given_info=[f"Damping ratio $\\zeta = {zeta:.1f}$", "Unit step input"],
            concept="Maximum peak overshoot depends exclusively on the damping ratio $\\zeta$: $\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$.",
            formulas=[{"formula": "\\% M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%", "terms": [{"term": "M_p", "explanation": "Peak overshoot ratio above steady state"}]}],
            derivation=[
                f"Step 1: Given $\\zeta = {zeta:.1f}$.",
                f"Step 2: $\\sqrt{{1 - \\zeta^2}} = \\sqrt{{1 - {zeta**2:.2f}}} = \\sqrt{{{1 - zeta**2:.2f}}} \\approx {den:.4f}$.",
                f"Step 3: Exponent: $\\frac{{-\\pi \\times {zeta:.1f}}}{{{den:.4f}}} \\approx {num/den:.4f}$.",
                f"Step 4: $\\% M_p = e^{{{num/den:.4f}}} \\times 100\\% \\approx {mp}\\%.$"
            ],
            final_answer=f"%Mp = {mp}%",
            alternative="Rule of thumb: $\\zeta = 0.5 \\implies 16.3\\%$; $\\zeta = 0.707 \\implies 4.3\\%$; $\\zeta = 1.0 \\implies 0\\%$.",
            mistakes=["Confusing radians and degrees in the exponent."],
            tags=["Control Systems", "Time Domain Analysis", "Peak Overshoot", "Damping Ratio", "Second-Order System"]
        )
        questions.append(q)

    # Set 2B: Steady-State Error Constants (25 questions)
    for err_i in range(25):
        qid = f"PRAC-CTL-{idx:03d}"
        idx += 1
        k_val = 10 + (err_i % 5) * 5 # 10, 15, 20, 25, 30
        # G(s) = K / s(s + 2) -> Type 1 system
        # Ramp input r(t) = t u(t) -> Kv = lim s*G(s) = K / 2
        # ess = 1 / Kv = 2 / K
        kv = round(k_val / 2.0, 2)
        ess = round(1.0 / kv, 2)
        stmt = f"A unity feedback system has an open-loop transfer function $G(s) = \\frac{{{k_val}}}{{s(s + 2)}}$. The steady-state error $e_{{ss}}$ in response to a unit ramp input $r(t) = t\\,u(t)$ is ________ (rounded off to two decimal places)."
        ans = [round(ess - 0.05, 2), round(ess + 0.05, 2)] if abs(ess - round(ess)) > 1e-4 else str(int(round(ess)))
        q = make_question(
            qid=qid,
            subject="Control Systems",
            topic="Time Domain Analysis",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the steady-state tracking error of a Type-1 control system under unit ramp excitation.",
            given_info=[f"Open-loop transfer function: $G(s) = \\frac{{{k_val}}}{{s(s + 2)}}$", "Unit ramp input $R(s) = 1/s^2$"],
            concept="For a Type-1 system subjected to a unit ramp input, the steady-state error is $e_{ss} = \\frac{1}{K_v}$, where velocity error constant is $K_v = \\lim_{s \\to 0} s G(s)$.",
            formulas=[{"formula": "e_{ss} = \\frac{1}{K_v}, \\quad K_v = \\lim_{s\\to 0} s G(s)", "terms": [{"term": "K_v", "explanation": "Velocity error constant"}]}],
            derivation=[
                f"Step 1: Compute velocity error constant: $K_v = \\lim_{{s \\to 0}} s \\left[ \\frac{{{k_val}}}{{s(s + 2)}} \\right] = \\frac{{{k_val}}}{{0 + 2}} = {kv}$.",
                f"Step 2: Steady-state error for unit ramp: $e_{{ss}} = \\frac{{1}}{{K_v}} = \\frac{{1}}{{{kv}}} = {ess}$."
            ],
            final_answer=f"ess = {ess}",
            alternative="Formula shortcut: $e_{ss} = \\frac{2}{K} = \\frac{2}{" + str(k_val) + "} = " + str(ess) + "$.",
            mistakes=["Using position error constant $K_p$ instead of velocity error constant $K_v$ for a ramp input."],
            tags=["Control Systems", "Time Domain Analysis", "Steady-State Error", "Error Constants", "Type 1 System"]
        )
        questions.append(q)

    # ==========================================
    # 3. STABILITY & ROOT LOCUS (~55 questions)
    # ==========================================
    # Set 3A: Routh-Hurwitz Stability Criterion (30 questions)
    for rh_i in range(30):
        qid = f"PRAC-CTL-{idx:03d}"
        idx += 1
        k_crit = 12 + (rh_i % 6) * 6 # 12, 18, 24, 30, ...
        # Characteristic equation: s^3 + 3s^2 + 2s + K = 0
        # Routh array:
        # s^3: 1    2
        # s^2: 3    K
        # s^1: (6 - K) / 3
        # s^0: K
        # Stable for 0 < K < 6
        stmt = "The characteristic equation of a closed-loop system is given by: $$s^3 + 3s^2 + 2s + K = 0$$ For the system to be stable, the gain $K$ must satisfy the range:"
        opts = [
            {"id": "A", "text": "$0 < K < 6$"},
            {"id": "B", "text": "$K > 6$"},
            {"id": "C", "text": "$-6 < K < 0$"},
            {"id": "D", "text": "$K > 0$ with no upper bound"}
        ]
        q = make_question(
            qid=qid,
            subject="Control Systems",
            topic="Stability & Root Locus",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Construct the Routh array to find the range of parameter K for closed-loop stability.",
            given_info=["Characteristic polynomial: $s^3 + 3s^2 + 2s + K = 0$"],
            concept="Routh-Hurwitz Criterion: All coefficients in the first column of the Routh array must be strictly positive for stability (no sign changes).",
            formulas=[{"formula": "b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1} > 0", "terms": [{"term": "b_1", "explanation": "First element of s^1 row in Routh array"}]}],
            derivation=[
                "Step 1: Construct the Routh array:",
                "Row $s^3$: $1, \\quad 2$",
                "Row $s^2$: $3, \\quad K$",
                "Row $s^1$: $\\frac{3(2) - 1(K)}{3} = \\frac{6 - K}{3}$",
                "Row $s^0$: $K$",
                "Step 2: For stability, all elements of column 1 must be strictly positive:",
                "1. $\\frac{6 - K}{3} > 0 \\implies K < 6$.",
                "2. $K > 0$.",
                "Step 3: Combining inequalities gives $0 < K < 6$ (Option A)."
            ],
            final_answer="Option A (0 < K < 6)",
            alternative="For a 3rd-order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires all coefficients positive and inner product greater than outer product: $b c > a d \\implies 3(2) > 1(K) \\implies K < 6$.",
            mistakes=["Overlooking the lower bound $K > 0$ from the $s^0$ row."],
            tags=["Control Systems", "Routh-Hurwitz", "Stability Criterion", "Characteristic Equation"]
        )
        questions.append(q)

    # Set 3B: Root Locus Asymptotes & Breakaway (25 questions)
    for rl_i in range(25):
        qid = f"PRAC-CTL-{idx:03d}"
        idx += 1
        stmt = "A unity feedback system has an open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 4)}$. The number of asymptotes of the root locus as $K \\to \\infty$ is:"
        opts = [
            {"id": "A", "text": "3"},
            {"id": "B", "text": "2"},
            {"id": "C", "text": "1"},
            {"id": "D", "text": "4"}
        ]
        q = make_question(
            qid=qid,
            subject="Control Systems",
            topic="Stability & Root Locus",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Determine the number of root locus asymptotes approaching infinity.",
            given_info=["Open-loop poles: $s = 0, -2, -4$ ($P = 3$)", "Open-loop zeros: none ($Z = 0$)"],
            concept="The number of root locus branches that terminate at infinity along asymptotes is equal to $P - Z$, where $P$ is the number of finite poles and $Z$ is the number of finite zeros.",
            formulas=[{"formula": "\\text{Number of asymptotes} = P - Z", "terms": [{"term": "P - Z", "explanation": "Pole-zero excess"}]}],
            derivation=[
                "Step 1: Identify finite poles: $s = 0, -2, -4 \\implies P = 3$.",
                "Step 2: Identify finite zeros: none $\\implies Z = 0$.",
                "Step 3: Number of asymptotes $= P - Z = 3 - 0 = 3$.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A (3 asymptotes)",
            alternative="The centroid of the 3 asymptotes is $\\sigma_a = \\frac{0 - 2 - 4}{3} = -2$, with angles $60^\\circ, 180^\\circ, 300^\\circ$.",
            mistakes=["Counting only the non-zero poles."],
            tags=["Control Systems", "Root Locus", "Asymptotes", "Pole-Zero Excess"]
        )
        questions.append(q)

    # ==========================================
    # 4. FREQUENCY DOMAIN ANALYSIS (~55 questions)
    # ==========================================
    # Set 4A: Bode Plot Slopes & Corner Frequencies (30 questions)
    for bode_i in range(30):
        qid = f"PRAC-CTL-{idx:03d}"
        idx += 1
        n_poles = (bode_i % 3) + 2 # 2, 3, 4 poles
        slope = -20 * n_poles
        stmt = f"A minimum-phase transfer function has no finite zeros and {n_poles} simple poles. In the asymptotic Bode magnitude plot, the high-frequency slope as $\\omega \\to \\infty$ is ________ dB/decade."
        ans = str(slope)
        q = make_question(
            qid=qid,
            subject="Control Systems",
            topic="Frequency Domain Analysis",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Evaluate the high-frequency asymptotic roll-off slope of a Bode magnitude plot.",
            given_info=[f"Transfer function with {n_poles} poles and 0 zeros."],
            concept="Each pole contributes a slope change of $-20\\text{ dB/decade}$. Each zero contributes $+20\\text{ dB/decade}$. The high-frequency slope is $(Z - P) \\times 20\\text{ dB/decade}$.",
            formulas=[{"formula": "\\text{High-frequency slope} = -20(P - Z)\\text{ dB/dec}", "terms": [{"term": "P - Z", "explanation": "Net pole excess"}]}],
            derivation=[
                f"Step 1: Number of poles $P = {n_poles}$, zeros $Z = 0$.",
                f"Step 2: Each pole rolls off at $-20\\text{{ dB/decade}}$.",
                f"Step 3: Total high-frequency slope $= {n_poles} \\times (-20) = {slope}\\text{{ dB/decade}}$."
            ],
            final_answer=f"{slope} dB/dec",
            alternative="In terms of octaves: $-6(P - Z)\\text{ dB/octave} = " + str(-6 * n_poles) + "\\text{ dB/octave}$.",
            mistakes=["Using positive sign (poles roll off, so slope is negative)."],
            tags=["Control Systems", "Frequency Domain", "Bode Plot", "Roll-off Slope"]
        )
        questions.append(q)

    # Set 4B: Phase Margin & Gain Margin (25 questions)
    for pm_i in range(25):
        qid = f"PRAC-CTL-{idx:03d}"
        idx += 1
        phi_gc = -140 + (pm_i % 5) * 5 # -140, -135, -130, -125, -120 deg
        pm = 180 + phi_gc # 40, 45, 50, 55, 60 deg
        stmt = f"At the gain crossover frequency $\\omega_{{gc}}$, the open-loop phase angle of a feedback system is $\\angle G(j\\omega_{{gc}})H(j\\omega_{{gc}}) = {phi_gc}^\\circ$. The Phase Margin (PM) of the system is ________ degrees."
        ans = str(pm)
        q = make_question(
            qid=qid,
            subject="Control Systems",
            topic="Frequency Domain Analysis",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the Phase Margin from the loop phase angle at the gain crossover frequency.",
            given_info=[f"Open-loop phase at $\\omega_{{gc}}$: $\\phi_{{gc}} = {phi_gc}^\\circ$"],
            concept="Phase Margin is defined as the additional phase lag required to bring the system to the verge of instability at the gain crossover frequency: $PM = 180^\\circ + \\angle G(j\\omega_{gc})H(j\\omega_{gc})$.",
            formulas=[{"formula": "PM = 180^\\circ + \\phi_{gc}", "terms": [{"term": "PM", "explanation": "Phase margin in degrees"}]}],
            derivation=[
                f"Step 1: Formula for Phase Margin: $PM = 180^\\circ + \\phi_{{gc}}$.",
                f"Step 2: $\\phi_{{gc}} = {phi_gc}^\\circ$.",
                f"Step 3: $PM = 180^\\circ + ({phi_gc}^\\circ) = {pm}^\\circ$."
            ],
            final_answer=f"PM = {pm} deg",
            alternative="A positive Phase Margin corresponds to a stable closed-loop system.",
            mistakes=["Subtracting from $180^\\circ$ instead of adding: $180 - (-140) = 320^\\circ$ (incorrect)."],
            tags=["Control Systems", "Frequency Domain", "Phase Margin", "Gain Crossover", "Stability"]
        )
        questions.append(q)

    # ==========================================
    # 5. STATE SPACE ANALYSIS (~50 questions)
    # ==========================================
    # Set 5A: State Transition Matrix & Controllability (50 questions)
    for ss_i in range(50):
        qid = f"PRAC-CTL-{idx:03d}"
        idx += 1
        stmt = "A continuous-time LTI system is described by the state equation $\\dot{x}(t) = A x(t) + B u(t)$. By Kalman's controllability criterion, the system of order $n$ is completely controllable if and only if:"
        opts = [
            {"id": "A", "text": "The controllability matrix $Q_c = [B \\quad AB \\quad A^2 B \\quad \\dots \\quad A^{n-1}B]$ has rank equal to $n$"},
            {"id": "B", "text": "The matrix $A$ is symmetric and positive definite"},
            {"id": "C", "text": "All eigenvalues of $A$ are strictly negative"},
            {"id": "D", "text": "The determinant of $A$ is non-zero"}
        ]
        q = make_question(
            qid=qid,
            subject="Control Systems",
            topic="State Space Analysis",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="State Kalman's algebraic rank condition for complete state controllability.",
            given_info=["System state equation $\\dot{x} = Ax + Bu$ of dimension $n$."],
            concept="Kalman's Controllability Condition: A system is completely controllable if and only if the controllability matrix $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$ has full rank $n$ (i.e. $\\det(Q_c) \\ne 0$ for single-input systems).",
            formulas=[{"formula": "\\text{rank}(Q_c) = n, \\quad Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]", "terms": [{"term": "Q_c", "explanation": "Controllability matrix"}]}],
            derivation=[
                "Step 1: Controllability requires that any initial state can be steered to any target state in finite time by a suitable control input.",
                "Step 2: By the Cayley-Hamilton theorem, powers of $A^k$ for $k \\ge n$ are linear combinations of $I, A, \\dots, A^{n-1}$.",
                "Step 3: Hence, the reachable subspace is spanned by columns of $Q_c = [B \\quad AB \\quad \\dots \\quad A^{n-1}B]$.",
                "Step 4: For full controllability, the reachable space must span all $n$ dimensions: $\\text{rank}(Q_c) = n$.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A (rank(Qc) = n)",
            alternative="Dual property: Observability requires matrix $Q_o = [C^T \\quad A^T C^T \\quad \\dots \\quad (A^T)^{n-1} C^T]^T$ to have rank $n$.",
            mistakes=["Confusing controllability with internal stability (Option C). An unstable system can still be completely controllable."],
            tags=["Control Systems", "State Space", "Controllability", "Kalman Criterion", "Rank"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} Control Systems practice questions.")
    return questions

