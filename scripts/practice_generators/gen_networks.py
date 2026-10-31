import math
from .common import make_question

def generate_networks_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. NETWORK THEOREMS (~70 questions)
    # ==========================================
    # Set 1A: Thevenin Equivalent Voltage & Resistance (20 questions)
    for th_i in range(20):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        vs = 12 + (th_i % 6) * 6  # 12, 18, 24, 30, 36, 42 V
        r1 = 4 + (th_i % 4) * 2   # 4, 6, 8, 10 ohm
        r2 = 6 + (th_i % 3) * 6   # 6, 12, 18 ohm
        # Voltage divider Vth = vs * r2 / (r1 + r2)
        vth = round(vs * r2 / (r1 + r2), 2)
        rth = round((r1 * r2) / (r1 + r2), 2)
        stmt = f"In the linear DC resistive circuit, a DC voltage source of $V_s = {vs}\\text{{ V}}$ is connected in series with resistor $R_1 = {r1}\\,\\Omega$, across which resistor $R_2 = {r2}\\,\\Omega$ is connected in parallel with the load terminals $A-B$. The Thevenin equivalent voltage $V_{{th}}$ looking into terminals $A-B$ is ________ V (rounded off to two decimal places)."
        ans = [round(vth - 0.05, 2), round(vth + 0.05, 2)] if abs(vth - round(vth)) > 1e-4 else str(int(round(vth)))
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="Network Theorems",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the open-circuit Thevenin equivalent voltage across the designated load terminals.",
            given_info=[f"Source voltage $V_s = {vs}\\text{{ V}}$", f"Series resistor $R_1 = {r1}\\,\\Omega$", f"Parallel resistor $R_2 = {r2}\\,\\Omega$"],
            concept="The Thevenin voltage $V_{th}$ is the open-circuit voltage across terminals A-B. For a single-source voltage divider, $V_{th} = V_s \\frac{R_2}{R_1 + R_2}$.",
            formulas=[{"formula": "V_{th} = V_{oc} = V_s \\frac{R_2}{R_1 + R_2}", "terms": [{"term": "V_{oc}", "explanation": "Open-circuit terminal voltage"}]}],
            derivation=[
                f"Step 1: Terminals A-B are open-circuited. No current flows outside $R_2$.",
                f"Step 2: Resistors $R_1$ and $R_2$ form a series loop with source $V_s$.",
                f"Step 3: Loop current is $I = \\frac{{V_s}}{{R_1 + R_2}} = \\frac{{{vs}}}{{{r1} + {r2}}} = \\frac{{{vs}}}{{{r1 + r2}}}\\text{{ A}}$.",
                f"Step 4: Voltage across terminals A-B is $V_{{th}} = I \\times R_2 = \\frac{{{vs} \\times {r2}}}{{{r1 + r2}}} = {vth}\\text{{ V}}$."
            ],
            final_answer=f"Vth = {vth} V",
            alternative="Direct voltage divider ratio: $V_{th} = {vs} \\times ({r2} / {r1+r2}) = {vth}\\text{ V}$.",
            mistakes=["Calculating closed-circuit short-circuit current instead of open-circuit voltage.", "Using $R_1$ in numerator instead of $R_2$."],
            tags=["Network Theory", "Thevenin Theorem", "DC Circuits", "Voltage Divider"]
        )
        questions.append(q)

    # Set 1B: Maximum Power Transfer Theorem (25 questions)
    for mpt_i in range(25):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        v_th = 10 + (mpt_i % 5) * 5 # 10, 15, 20, 25, 30 V
        r_th = 5 + (mpt_i % 4) * 5  # 5, 10, 15, 20 ohm
        # Pmax = Vth^2 / (4 * Rth)
        pmax = round((v_th ** 2) / (4.0 * r_th), 2)
        stmt = f"A linear DC active network connected to a variable load resistor $R_L$ has an open-circuit voltage of $V_{{th}} = {v_th}\\text{{ V}}$ and an equivalent Thevenin resistance of $R_{{th}} = {r_th}\\,\\Omega$. The maximum power that can be transferred to the load resistor $R_L$ is ________ Watts (rounded off to two decimal places)."
        ans = [round(pmax - 0.05, 2), round(pmax + 0.05, 2)] if abs(pmax - round(pmax)) > 1e-4 else str(int(round(pmax)))
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="Network Theorems",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the maximum power deliverable to a resistive load by applying the Maximum Power Transfer Theorem.",
            given_info=[f"Thevenin voltage $V_{{th}} = {v_th}\\text{{ V}}$", f"Thevenin resistance $R_{{th}} = {r_th}\\,\\Omega$"],
            concept="Maximum power is transferred to a resistive load when $R_L = R_{th}$. The maximum power is $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}$.",
            formulas=[{"formula": "P_{\\max} = \\frac{V_{th}^2}{4 R_{th}}", "terms": [{"term": "R_L = R_{th}", "explanation": "Impedance matching condition"}]}],
            derivation=[
                f"Step 1: For maximum power transfer in a DC network, load resistance must match internal resistance: $R_L = R_{{th}} = {r_th}\\,\\Omega$.",
                f"Step 2: Circuit current under matched condition: $I_L = \\frac{{V_{{th}}}}{{R_{{th}} + R_L}} = \\frac{{{v_th}}}{{2 R_{{th}}}} = \\frac{{{v_th}}}{{{2*r_th}}}\\text{{ A}}$.",
                f"Step 3: Power dissipated in $R_L$: $P_{{\\max}} = I_L^2 R_L = \\frac{{V_{{th}}^2}}{{4 R_{{th}}}} = \\frac{{{v_th}^2}}{{4 \\times {r_th}}} = \\frac{{{v_th**2}}}{{{4*r_th}}} = {pmax}\\text{{ W}}$."
            ],
            final_answer=f"Pmax = {pmax} W",
            alternative="Formula shortcut: $P_{\\max} = \\frac{V_{th}^2}{4 R_{th}} = \\frac{1}{4} V_{th} I_N$.",
            mistakes=["Dividing by $2 R_{th}$ instead of $4 R_{th}$ in the maximum power formula."],
            tags=["Network Theory", "Maximum Power Transfer", "Thevenin Resistance", "Power Dissipation"]
        )
        questions.append(q)

    # Set 1C: Superposition & Tellegen's Theorem (25 questions)
    for sup_i in range(25):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        stmt = "Which of the following statements regarding network theorems is/are CORRECT? (Select all that apply)"
        opts = [
            {"id": "A", "text": "Superposition theorem is applicable only to linear networks containing bilateral elements"},
            {"id": "B", "text": "Tellegen's theorem is valid for any lumped network, whether linear or nonlinear, active or passive, time-invariant or time-varying"},
            {"id": "C", "text": "Maximum power transfer in DC circuits occurs at an efficiency of 100%"},
            {"id": "D", "text": "Reciprocity theorem holds for networks containing ideal operational amplifiers and dependent sources"}
        ]
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="Network Theorems",
            qtype="MSQ",
            marks=2,
            statement=stmt,
            options=opts,
            official_answer=["A", "B"],
            difficulty="Medium",
            understanding="Assess the validity and boundary conditions of fundamental network theorems (Superposition, Tellegen, Maximum Power Transfer, Reciprocity).",
            given_info=["Statements regarding Superposition, Tellegen, Maximum Power Transfer, and Reciprocity theorems."],
            concept="1. Superposition requires linearity. 2. Tellegen's theorem depends only on KCL and KVL (Kirchhoff's topological laws) and is independent of element characteristics. 3. At maximum power transfer, efficiency is exactly 50%. 4. Controlled sources and op-amps generally violate reciprocity.",
            formulas=[{"formula": "\\sum_{k=1}^b v_k i_k = 0 \\quad (\\text{Tellegen's equation})", "terms": [{"term": "v_k, i_k", "explanation": "Branch voltages and branch currents obeying KCL/KVL"}]}],
            derivation=[
                "Step 1: Statement A is TRUE: Superposition relies on homogeneity and additivity, which define linear systems.",
                "Step 2: Statement B is TRUE: Tellegen's theorem is purely topological, derived from orthogonality of KCL and KVL spaces.",
                "Step 3: Statement C is FALSE: At maximum power transfer ($R_L = R_{th}$), half the total power is dissipated in internal resistance $R_{th}$, yielding an efficiency of $\\eta = 50\\%$, not 100%.",
                "Step 4: Statement D is FALSE: Op-amps and dependent sources introduce unilateral non-reciprocal couplings ($Z_{12} \\ne Z_{21}$)."
            ],
            final_answer="Options A and B",
            alternative="Recall: Tellegen's theorem is universal for all lumped circuits because it is a direct consequence of energy conservation and graph topology.",
            mistakes=["Confusing 50% efficiency at maximum power transfer with high transmission efficiency."],
            tags=["Network Theory", "Superposition Theorem", "Tellegen Theorem", "MSQ", "Reciprocity"]
        )
        questions.append(q)

    # ==========================================
    # 2. TRANSIENT & STEADY STATE ANALYSIS (~70 questions)
    # ==========================================
    # Set 2A: First-Order RC Circuits (25 questions)
    for rc_i in range(25):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        r_k = (rc_i % 5) + 2    # 2, 3, 4, 5, 6 k-ohm
        c_u = (rc_i % 4) + 1    # 1, 2, 3, 4 uF
        tau_ms = round(r_k * c_u, 2)
        v_dc = 10 + (rc_i % 3) * 5 # 10, 15, 20 V
        stmt = f"A series $RC$ circuit has $R = {r_k}\\,\\text{{k}}\\Omega$ and $C = {c_u}\\,\\mu\\text{{F}}$. The capacitor is initially uncharged ($v_C(0^-) = 0\\text{{ V}}$). At $t = 0$, a DC voltage $V_s = {v_dc}\\text{{ V}}$ is applied. The time constant $\\tau$ of the circuit is ________ ms."
        ans = str(int(tau_ms)) if tau_ms.is_integer() else str(tau_ms)
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="Transient & Steady State Analysis",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the time constant of a first-order series RC charging circuit.",
            given_info=[f"Resistance $R = {r_k}\\text{{ k}}\\Omega = {r_k * 1000}\\,\\Omega$", f"Capacitance $C = {c_u}\\,\\mu\\text{{F}} = {c_u} \\times 10^{{-6}}\\,\\text{{F}}$", f"Source $V_s = {v_dc}\\text{{ V}}$"],
            concept="For a first-order RC circuit, the time constant is $\\tau = R_{eq} C$. In units of $\\text{k}\\Omega \\times \\mu\\text{F}$, the product gives milliseconds directly.",
            formulas=[{"formula": "\\tau = R C", "terms": [{"term": "\\tau", "explanation": "Time required to charge to 63.2% of final voltage"}]}],
            derivation=[
                f"Step 1: Compute product: $\\tau = R \\times C$.",
                f"Step 2: $R = {r_k} \\times 10^3\\,\\Omega$ and $C = {c_u} \\times 10^{{-6}}\\,\\text{{F}}$.",
                f"Step 3: $\\tau = ({r_k} \\times 10^3) \\times ({c_u} \\times 10^{{-6}}) = {r_k * c_u} \\times 10^{{-3}}\\text{{ s}} = {tau_ms}\\text{{ ms}}$."
            ],
            final_answer=f"tau = {tau_ms} ms",
            alternative="Units rule: $(\\text{k}\\Omega) \\times (\\mu\\text{F}) = 10^3 \\times 10^{-6} = 10^{-3}\\text{ s} = 1\\text{ ms}$.",
            mistakes=["Confusing milliseconds with microseconds."],
            tags=["Network Theory", "Transients", "RC Circuit", "Time Constant"]
        )
        questions.append(q)

    # Set 2B: First-Order RL Circuits (25 questions)
    for rl_i in range(25):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        r_ohm = 10 + (rl_i % 5) * 10 # 10, 20, 30, 40, 50 ohm
        l_mh = 20 + (rl_i % 4) * 20  # 20, 40, 60, 80 mH
        tau_ms = round(l_mh / r_ohm, 2)
        stmt = f"A series $RL$ circuit with $R = {r_ohm}\\,\\Omega$ and $L = {l_mh}\\text{{ mH}}$ is connected to a DC source. The time constant of the circuit is ________ ms (rounded off to two decimal places)."
        ans = [round(tau_ms - 0.05, 2), round(tau_ms + 0.05, 2)] if abs(tau_ms - round(tau_ms)) > 1e-4 else str(int(round(tau_ms)))
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="Transient & Steady State Analysis",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the RL circuit time constant from inductor and resistor values.",
            given_info=[f"Resistance $R = {r_ohm}\\,\\Omega$", f"Inductance $L = {l_mh}\\text{{ mH}}$"],
            concept="The time constant of an RL circuit is $\\tau = \\frac{L}{R}$. In milliseconds, $\\tau = \\frac{L\\text{ (in mH)}}{R\\text{ (in }\\Omega\\text{)}}$.",
            formulas=[{"formula": "\\tau = \\frac{L}{R}", "terms": [{"term": "\\tau", "explanation": "Time constant of RL network"}]}],
            derivation=[
                f"Step 1: Formula for RL time constant: $\\tau = \\frac{{L}}{{R}}$.",
                f"Step 2: $L = {l_mh} \\times 10^{{-3}}\\text{{ H}}$ and $R = {r_ohm}\\,\\Omega$.",
                f"Step 3: $\\tau = \\frac{{{l_mh} \\times 10^{{-3}}}}{{{r_ohm}}} = {tau_ms} \\times 10^{{-3}}\\text{{ s}} = {tau_ms}\\text{{ ms}}$."
            ],
            final_answer=f"tau = {tau_ms} ms",
            alternative="Direct division: $\\tau = \\frac{L\\text{ (mH)}}{R\\text{ (}\\Omega\\text{)}} = \\frac{" + str(l_mh) + "}{" + str(r_ohm) + "} = " + str(tau_ms) + "\\text{ ms}$.",
            mistakes=["Writing $\\tau = R/L$ or $R \\times L$ instead of $L/R$."],
            tags=["Network Theory", "Transients", "RL Circuit", "Time Constant"]
        )
        questions.append(q)

    # Set 2C: Second-Order RLC Transient Responses (20 questions)
    for rlc_i in range(20):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        # Characteristic equation: s^2 + 2*zeta*wn*s + wn^2 = 0
        zeta_val = [0.5, 1.0, 1.5, 0.707][rlc_i % 4]
        desc = "underdamped" if zeta_val < 1.0 else ("critically damped" if zeta_val == 1.0 else "overdamped")
        stmt = f"A series $RLC$ circuit has a characteristic equation given by $s^2 + 2\\alpha s + \\omega_0^2 = 0$. If the damping ratio is $\\zeta = {zeta_val}$, the nature of the transient response is:"
        opts = [
            {"id": "A", "text": "Underdamped with oscillatory decay"},
            {"id": "B", "text": "Critically damped with fastest non-oscillatory return"},
            {"id": "C", "text": "Overdamped with sluggish non-oscillatory decay"},
            {"id": "D", "text": "Undamped sustained sinusoidal oscillation"}
        ]
        corr = "A" if zeta_val < 1.0 else ("B" if zeta_val == 1.0 else "C")
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="Transient & Steady State Analysis",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer=corr,
            difficulty="Easy",
            understanding="Classify the transient response regime of a second-order RLC circuit based on its damping ratio $\\zeta$.",
            given_info=[f"Damping ratio $\\zeta = {zeta_val}$"],
            concept="Damping classification: $\\zeta > 1$: Overdamped (two real distinct poles); $\\zeta = 1$: Critically damped (two real repeated poles); $0 < \\zeta < 1$: Underdamped (complex conjugate poles); $\\zeta = 0$: Undamped (imaginary poles).",
            formulas=[{"formula": "\\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}", "terms": [{"term": "\\zeta", "explanation": "Damping ratio"}]}],
            derivation=[
                f"Step 1: Inspect the given damping ratio $\\zeta = {zeta_val}$.",
                f"Step 2: Compare with threshold $\\zeta = 1.0$.",
                f"Step 3: Since $\\zeta = {zeta_val}$, the response regime is {desc}.",
                f"Therefore, the correct choice is Option {corr}."
            ],
            final_answer=f"Option {corr}",
            alternative="Look at pole locations: complex poles always imply underdamped oscillations.",
            mistakes=["Confusing underdamped with overdamped."],
            tags=["Network Theory", "RLC Circuit", "Damping Ratio", "Second-Order Transients"]
        )
        questions.append(q)

    # ==========================================
    # 3. TWO-PORT NETWORKS (~65 questions)
    # ==========================================
    # Set 3A: Z and Y Parameters & Reciprocity (35 questions)
    for tp_i in range(35):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        z11 = 4 + (tp_i % 4) * 2 # 4, 6, 8, 10
        z12 = 2
        z21 = 2
        z22 = 6 + (tp_i % 3) * 2 # 6, 8, 10
        det_z = z11 * z22 - z12 * z21
        y11 = round(z22 / det_z, 3)
        y12 = round(-z12 / det_z, 3)
        stmt = f"A passive, reciprocal two-port network has impedance parameters $Z_{{11}} = {z11}\\,\\Omega, Z_{{12}} = Z_{{21}} = {z12}\\,\\Omega, Z_{{22}} = {z22}\\,\\Omega$. The admittance parameter $Y_{{11}}$ is ________ $\\Omega^{{-1}}$ (rounded off to three decimal places)."
        ans = [round(y11 - 0.01, 3), round(y11 + 0.01, 3)]
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="Two-Port Networks",
            qtype="NAT",
            marks=2,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Medium",
            understanding="Invert the $2 \\times 2$ impedance matrix to compute admittance parameter $Y_{11}$.",
            given_info=[f"$Z_{{11}} = {z11}\\,\\Omega$", f"$Z_{{12}} = Z_{{21}} = {z12}\\,\\Omega$", f"$Z_{{22}} = {z22}\\,\\Omega$"],
            concept="Admittance matrix $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$. Therefore, $Y_{11} = \\frac{Z_{22}}{\\det(Z)}$.",
            formulas=[{"formula": "Y_{11} = \\frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}", "terms": [{"term": "\\det(Z)", "explanation": "Determinant of Z matrix"}]}],
            derivation=[
                f"Step 1: Compute determinant: $\\det(Z) = Z_{{11}}Z_{{22}} - Z_{{12}}Z_{{21}} = ({z11})({z22}) - ({z12})({z21}) = {z11 * z22} - {z12 * z21} = {det_z}\\,\\Omega^2$.",
                f"Step 2: Formula for $Y_{{11}}$: $Y_{{11}} = \\frac{{Z_{{22}}}}{{\\det(Z)}} = \\frac{{{z22}}}{{{det_z}}} \\approx {y11}\\,\\text{{S}}$.",
                f"Step 3: Hence, $Y_{{11}} = {y11}\\,\\Omega^{{-1}}$."
            ],
            final_answer=f"Y11 = {y11} S",
            alternative="Use equivalent T-network: shunt arm $Z_c = Z_{12} = 2\\,\\Omega$, series arm $Z_a = Z_{11} - Z_{12} = " + str(z11 - z12) + "\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = " + str(z22 - z12) + "\\,\\Omega$.",
            mistakes=["Using $Z_{11}$ in the numerator of $Y_{11}$ instead of $Z_{22}$."],
            tags=["Network Theory", "Two-Port Networks", "Z-Parameters", "Y-Parameters", "Matrix Inverse"]
        )
        questions.append(q)

    # Set 3B: ABCD Transmission Parameters (30 questions)
    for abcd_i in range(30):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        stmt = "For a linear two-port network characterized by the transmission matrix $\\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$, which of the following conditions represents RECIPROCITY?"
        opts = [
            {"id": "A", "text": "$AD - BC = 1$"},
            {"id": "B", "text": "$A = D$"},
            {"id": "C", "text": "$AD - BC = 0$"},
            {"id": "D", "text": "$B = C$"}
        ]
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="Two-Port Networks",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Identify the exact mathematical criterion for network reciprocity in terms of ABCD parameters.",
            given_info=["Transmission matrix $[T] = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix}$"],
            concept="For transmission (ABCD) parameters, the condition for reciprocity is $\\det(T) = AD - BC = 1$, and the condition for symmetry is $A = D$.",
            formulas=[{"formula": "AD - BC = 1", "terms": [{"term": "AD - BC", "explanation": "Determinant of ABCD matrix"}]}],
            derivation=[
                "Step 1: The transmission equations are $V_1 = A V_2 - B I_2$ and $I_1 = C V_2 - D I_2$.",
                "Step 2: Converting to Z-parameters gives $Z_{12} = \\frac{AD - BC}{C}$ and $Z_{21} = \\frac{1}{C}$.",
                "Step 3: Condition for reciprocity is $Z_{12} = Z_{21} \\implies \\frac{AD - BC}{C} = \\frac{1}{C} \\implies AD - BC = 1$.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A",
            alternative="Recall that $A=D$ is the condition for SYMMETRY, while $AD-BC=1$ is the condition for RECIPROCITY.",
            mistakes=["Confusing the reciprocity condition ($AD-BC=1$) with the symmetry condition ($A=D$)."],
            tags=["Network Theory", "Two-Port Networks", "ABCD Parameters", "Reciprocity", "Symmetry"]
        )
        questions.append(q)

    # ==========================================
    # 4. AC SINUSOIDAL STEADY STATE & RESONANCE (~65 questions)
    # ==========================================
    # Set 4A: Series Resonance & Quality Factor (35 questions)
    for res_i in range(35):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        l_mh = 10 + (res_i % 5) * 10 # 10, 20, 30, 40, 50 mH
        c_uf = 10 + (res_i % 4) * 10 # 10, 20, 30, 40 uF
        # w0 = 1 / sqrt(L * C)
        # L in H = l_mh * 1e-3, C in F = c_uf * 1e-6
        lc_prod = (l_mh * 1e-3) * (c_uf * 1e-6)
        w0 = round(1.0 / math.sqrt(lc_prod), 1)
        stmt = f"A series $RLC$ circuit consists of $R = 10\\,\\Omega$, $L = {l_mh}\\text{{ mH}}$, and $C = {c_uf}\\,\\mu\\text{{F}}$. The resonant angular frequency $\\omega_0$ of the circuit is ________ rad/s (rounded off to the nearest integer)."
        ans = [round(w0 - 5), round(w0 + 5)]
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="AC Sinusoidal Steady State & Resonance",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Compute the resonant angular frequency of a series RLC resonant tank.",
            given_info=[f"Inductance $L = {l_mh}\\text{{ mH}}$", f"Capacitance $C = {c_uf}\\,\\mu\\text{{F}}$", "Resistance $R = 10\\,\\Omega$"],
            concept="At series resonance, the inductive and capacitive reactances cancel out ($X_L = X_C$), giving $\\omega_0 L = \\frac{1}{\\omega_0 C} \\implies \\omega_0 = \\frac{1}{\\sqrt{LC}}$.",
            formulas=[{"formula": "\\omega_0 = \\frac{1}{\\sqrt{LC}}", "terms": [{"term": "\\omega_0", "explanation": "Resonant angular frequency in rad/s"}]}],
            derivation=[
                f"Step 1: Convert units: $L = {l_mh} \\times 10^{{-3}}\\text{{ H}}$, $C = {c_uf} \\times 10^{{-6}}\\text{{ F}}$.",
                f"Step 2: $LC = ({l_mh} \\times 10^{{-3}}) \\times ({c_uf} \\times 10^{{-6}}) = {lc_prod:.3e}\\text{{ s}}^2$.",
                f"Step 3: Compute $\\omega_0 = \\frac{{1}}{{\\sqrt{{{lc_prod:.3e}}}}} \\approx {int(round(w0))}\\text{{ rad/s}}$."
            ],
            final_answer=f"{int(round(w0))} rad/s",
            alternative="Shortcut: $\\omega_0 = \\frac{10^4}{\\sqrt{L_{mH} \\times C_{\\mu F}}}$.",
            mistakes=["Calculating cyclic frequency in Hz ($f_0$) instead of angular frequency in rad/s ($\\omega_0$)."],
            tags=["Network Theory", "Resonance", "RLC Circuit", "Quality Factor", "Angular Frequency"]
        )
        questions.append(q)

    # Set 4B: Power Factor & Complex Power (30 questions)
    for pf_i in range(30):
        qid = f"PRAC-NET-{idx:03d}"
        idx += 1
        p_w = 400 + (pf_i % 5) * 200 # 400, 600, 800, 1000, 1200 W
        q_var = 300 + (pf_i % 4) * 100 # 300, 400, 500, 600 VAR
        # S = sqrt(P^2 + Q^2)
        s_va = round(math.sqrt(p_w**2 + q_var**2), 1)
        pf = round(p_w / s_va, 2)
        stmt = f"A single-phase AC load consumes an active power of $P = {p_w}\\text{{ W}}$ and an inductive reactive power of $Q = {q_var}\\text{{ VAR}}$. The apparent power $S$ supplied to the load is ________ VA (rounded off to the nearest integer)."
        ans = [round(s_va - 2), round(s_va + 2)]
        q = make_question(
            qid=qid,
            subject="Network Theory",
            topic="AC Sinusoidal Steady State & Resonance",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Evaluate apparent power from active and reactive power components using the power triangle.",
            given_info=[f"Active power $P = {p_w}\\text{{ W}}$", f"Reactive power $Q = {q_var}\\text{{ VAR}}$ (inductive)"],
            concept="The complex power is $\\vec{S} = P + jQ$. The apparent power is the magnitude $S = |\\vec{S}| = \\sqrt{P^2 + Q^2}$.",
            formulas=[{"formula": "S = \\sqrt{P^2 + Q^2}", "terms": [{"term": "S", "explanation": "Apparent power in Volt-Amperes (VA)"}]}],
            derivation=[
                f"Step 1: Formula for apparent power: $S = \\sqrt{{P^2 + Q^2}}$.",
                f"Step 2: $P^2 = ({p_w})^2 = {p_w**2}$, $Q^2 = ({q_var})^2 = {q_var**2}$.",
                f"Step 3: $P^2 + Q^2 = {p_w**2 + q_var**2}$.",
                f"Step 4: $S = \\sqrt{{{p_w**2 + q_var**2}}} \\approx {int(round(s_va))}\\text{{ VA}}$."
            ],
            final_answer=f"{int(round(s_va))} VA",
            alternative="Use 3-4-5 right triangle scaling if $P$ and $Q$ are multiples of 4 and 3.",
            mistakes=["Directly adding $P + Q$ arithmetically instead of taking vector phasor sum."],
            tags=["Network Theory", "AC Steady State", "Power Factor", "Complex Power", "Apparent Power"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} Network Theory practice questions.")
    return questions
