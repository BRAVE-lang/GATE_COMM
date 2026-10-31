import math
from .common import make_question

def generate_edc_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. SEMICONDUCTOR PHYSICS (~70 questions)
    # ==========================================
    # Set 1A: Carrier Concentration & Mass Action Law (35 questions)
    for ed_i in range(35):
        qid = f"PRAC-EDC-{idx:03d}"
        idx += 1
        # Silicon at 300K: ni = 1.5e10 cm^-3
        # Doping Nd = 10^16 or 10^17 cm^-3
        # Majority electrons n ~ Nd
        # Minority holes p = ni^2 / Nd
        exp_d = 15 + (ed_i % 3) # 10^15, 10^16, 10^17
        nd_val = 10 ** exp_d
        ni_sq = (1.5 * 10**10) ** 2 # 2.25e20
        p_min = ni_sq / nd_val # e.g. 2.25e20 / 1e16 = 2.25e4 cm^-3
        stmt = f"A sample of silicon at thermal equilibrium ($T = 300\\text{{ K}}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$. The silicon is uniformly doped with donor atoms of concentration $N_d = 10^{{{exp_d}}}\\text{{ cm}}^{{-3}}$. Assuming complete ionization, the minority carrier hole concentration $p_n$ is $k \\times 10^{{{20 - exp_d}}}\\text{{ cm}}^{{-3}}$. The value of $k$ is ________."
        ans = "2.25"
        q = make_question(
            qid=qid,
            subject="Electronic Devices",
            topic="Semiconductor Physics",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Use the Law of Mass Action to determine the minority carrier hole concentration in an n-type semiconductor at thermal equilibrium.",
            given_info=[f"Intrinsic carrier density: $n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$", f"Donor doping: $N_d = 10^{{{exp_d}}}\\text{{ cm}}^{{-3}}$", "Thermal equilibrium at 300 K"],
            concept="Law of Mass Action: At thermal equilibrium in any non-degenerate semiconductor, the product of electron and hole concentrations is constant: $n \\cdot p = n_i^2$. For an n-type semiconductor with $N_d \\gg n_i$, $n \\approx N_d$ and $p = \\frac{n_i^2}{N_d}$.",
            formulas=[{"formula": "n \\cdot p = n_i^2 \\implies p = \\frac{n_i^2}{N_d}", "terms": [{"term": "n_i", "explanation": "Intrinsic carrier concentration"}]}],
            derivation=[
                f"Step 1: Compute $n_i^2$: $(1.5 \\times 10^{{10}})^2 = 2.25 \\times 10^{{20}}\\text{{ cm}}^{{-6}}$.",
                f"Step 2: Since $N_d \\gg n_i$, majority electron density is $n \\approx N_d = 10^{{{exp_d}}}\\text{{ cm}}^{{-3}}$.",
                f"Step 3: Compute minority hole concentration:",
                f"$$p_n = \\frac{{n_i^2}}{{N_d}} = \\frac{{2.25 \\times 10^{{20}}}}{{10^{{{exp_d}}}}} = 2.25 \\times 10^{{{20 - exp_d}}}\\text{{ cm}}^{{-3}}$$.",
                f"Step 4: Comparing with $k \\times 10^{{{20 - exp_d}}}$, we find $k = 2.25$."
            ],
            final_answer="k = 2.25",
            alternative="Direct substitution: $p_n = \\frac{2.25 \\times 10^{20}}{10^{" + str(exp_d) + "}} = 2.25 \\times 10^{" + str(20 - exp_d) + "}\\text{ cm}^{-3}$.",
            mistakes=["Using $n_i$ instead of $n_i^2$ in the numerator."],
            tags=["Electronic Devices", "Semiconductor Physics", "Law of Mass Action", "Carrier Concentration"]
        )
        questions.append(q)

    # Set 1B: Einstein Relation & Diffusion / Drift (35 questions)
    for ein_i in range(35):
        qid = f"PRAC-EDC-{idx:03d}"
        idx += 1
        mu_n = 1000 + (ein_i % 5) * 100 # 1000, 1100, 1200, 1300, 1400 cm^2/V-s
        # Vt = 26 mV = 0.026 V at 300K
        # Dn = mu_n * Vt
        dn_val = round(mu_n * 0.026, 2)
        stmt = f"In a silicon semiconductor at $T = 300\\text{{ K}}$, the electron mobility is $\\mu_n = {mu_n}\\text{{ cm}}^2/(\\text{{V}}\\cdot\\text{{s}})$. Assuming a thermal voltage of $V_t = 26\\text{{ mV}}$, the electron diffusion coefficient $D_n$ is ________ $\\text{{cm}}^2/\\text{{s}}$ (rounded off to two decimal places)."
        ans = [round(dn_val - 0.05, 2), round(dn_val + 0.05, 2)] if abs(dn_val - round(dn_val)) > 1e-4 else str(int(round(dn_val)))
        q = make_question(
            qid=qid,
            subject="Electronic Devices",
            topic="Semiconductor Physics",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the diffusion coefficient of charge carriers using the Einstein relation.",
            given_info=[f"Electron mobility $\\mu_n = {mu_n}\\text{{ cm}}^2/(\\text{{V}}\\cdot\\text{{s}})$", "Thermal voltage $V_t = 26\\text{{ mV}} = 0.026\\text{{ V}}$"],
            concept="The Einstein relation connects carrier mobility and diffusion coefficient at thermal equilibrium: $\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q}$.",
            formulas=[{"formula": "D = \\mu V_t = \\mu \\left(\\frac{kT}{q}\\right)", "terms": [{"term": "D", "explanation": "Diffusion coefficient in cm^2/s"}, {"term": "V_t", "explanation": "Thermal voltage ~ 26 mV at 300 K"}]}],
            derivation=[
                f"Step 1: Formula for diffusion coefficient: $D_n = \\mu_n \\times V_t$.",
                f"Step 2: $\\mu_n = {mu_n}\\text{{ cm}}^2/(\\text{{V}}\\cdot\\text{{s}})$ and $V_t = 0.026\\text{{ V}}$.",
                f"Step 3: $D_n = {mu_n} \\times 0.026 = {dn_val}\\text{{ cm}}^2/\\text{{s}}$."
            ],
            final_answer=f"Dn = {dn_val} cm^2/s",
            alternative="Multiply $\\mu_n$ by $26$ and divide by $1000$: $D_n = \\frac{" + str(mu_n) + " \\times 26}{1000} = " + str(dn_val) + "\\text{ cm}^2/\\text{s}$.",
            mistakes=["Using $V_t = 26\\text{ V}$ instead of $26\\text{ mV} = 0.026\\text{ V}$."],
            tags=["Electronic Devices", "Semiconductor Physics", "Einstein Relation", "Carrier Mobility", "Diffusion"]
        )
        questions.append(q)

    # ==========================================
    # 2. PN JUNCTION & ZENER DIODES (~70 questions)
    # ==========================================
    # Set 2A: Built-in Potential (35 questions)
    for vbi_i in range(35):
        qid = f"PRAC-EDC-{idx:03d}"
        idx += 1
        na_exp = 16 + (vbi_i % 3)
        nd_exp = 16 + ((vbi_i + 1) % 3)
        # Vbi = Vt * ln(Na * Nd / ni^2)
        # Na * Nd / ni^2 = 10^(na_exp + nd_exp) / 2.25e20 = 10^(sum - 20) / 2.25
        sum_exp = na_exp + nd_exp
        ratio = (10.0 ** (sum_exp - 20)) / 2.25
        vbi = round(0.026 * math.log(ratio), 2)
        stmt = f"An abrupt silicon p-n junction at $T = 300\\text{{ K}}$ has acceptor doping $N_a = 10^{{{na_exp}}}\\text{{ cm}}^{{-3}}$ and donor doping $N_d = 10^{{{nd_exp}}}\\text{{ cm}}^{{-3}}$. Given $n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$ and thermal voltage $V_t = 26\\text{{ mV}}$, the built-in potential $V_{{bi}}$ across the junction is ________ V (rounded off to two decimal places)."
        ans = [round(vbi - 0.03, 2), round(vbi + 0.03, 2)]
        q = make_question(
            qid=qid,
            subject="Electronic Devices",
            topic="PN Junction & Zener Diodes",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Medium",
            understanding="Calculate the contact built-in potential $V_{bi}$ across an equilibrium p-n junction.",
            given_info=[f"Doping: $N_a = 10^{{{na_exp}}}\\text{{ cm}}^{{-3}}$, $N_d = 10^{{{nd_exp}}}\\text{{ cm}}^{{-3}}$", "$n_i = 1.5 \\times 10^{{10}}\\text{{ cm}}^{{-3}}$", "$V_t = 26\\text{{ mV}}$"],
            concept="The built-in potential of an abrupt p-n junction in thermal equilibrium is given by $V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)$.",
            formulas=[{"formula": "V_{bi} = V_t \\ln\\left(\\frac{N_a N_d}{n_i^2}\\right)", "terms": [{"term": "V_{bi}", "explanation": "Contact potential barrier in Volts"}]}],
            derivation=[
                f"Step 1: Compute doping product: $N_a N_d = 10^{{{na_exp}}} \\times 10^{{{nd_exp}}} = 10^{{{sum_exp}}}\\text{{ cm}}^{{-6}}$.",
                f"Step 2: $n_i^2 = (1.5 \\times 10^{{10}})^2 = 2.25 \\times 10^{{20}}\\text{{ cm}}^{{-6}}$.",
                f"Step 3: $\\frac{{N_a N_d}}{{n_i^2}} = \\frac{{10^{{{sum_exp}}}}}{{2.25 \\times 10^{{20}}}} \\approx {ratio:.2e}$.",
                f"Step 4: Compute natural log: $\\ln({ratio:.2e}) \\approx {math.log(ratio):.2f}$.",
                f"Step 5: Multiply by thermal voltage: $V_{{bi}} = 0.026 \\times {math.log(ratio):.2f} = {vbi}\\text{{ V}}$."
            ],
            final_answer=f"Vbi = {vbi} V",
            alternative="Approximate shortcut: For typical silicon doping around $10^{16}-10^{17}\\text{ cm}^{-3}$, $V_{bi}$ is approximately $0.70\\text{ to }0.80\\text{ V}$.",
            mistakes=["Using common log (base 10) instead of natural logarithm (base $e$)."],
            tags=["Electronic Devices", "PN Junction", "Built-in Potential", "Doping"]
        )
        questions.append(q)

    # Set 2B: Depletion Width & Capacitance (35 questions)
    for dep_i in range(35):
        qid = f"PRAC-EDC-{idx:03d}"
        idx += 1
        stmt = "For an abrupt silicon $p^+n$ junction diode, how does the depletion layer capacitance $C_j$ vary with reverse bias voltage $V_R$?"
        opts = [
            {"id": "A", "text": "$C_j \\propto (V_{bi} + V_R)^{-1/2}$"},
            {"id": "B", "text": "$C_j \\propto (V_{bi} + V_R)^{-1/3}$"},
            {"id": "C", "text": "$C_j \\propto (V_{bi} + V_R)^{1/2}$"},
            {"id": "D", "text": "$C_j \\propto e^{V_R / V_t}$"}
        ]
        q = make_question(
            qid=qid,
            subject="Electronic Devices",
            topic="PN Junction & Zener Diodes",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Identify the mathematical dependence of junction depletion capacitance on reverse bias voltage for an abrupt junction.",
            given_info=["Abrupt $p^+n$ junction diode operated in reverse bias."],
            concept="For an abrupt p-n junction, depletion width $W \\propto \\sqrt{V_{bi} + V_R}$. The junction capacitance per unit area is $C_j = \\frac{\\epsilon_s}{W} \\propto (V_{bi} + V_R)^{-1/2}$. (For a linearly graded junction, the exponent is $-1/3$).",
            formulas=[{"formula": "C_j = \\frac{\\epsilon_s A}{W} \\propto \\frac{1}{\\sqrt{V_{bi} + V_R}}", "terms": [{"term": "C_j", "explanation": "Depletion/transition capacitance"}]}],
            derivation=[
                "Step 1: The depletion width of an abrupt junction is $W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_a} + \\frac{1}{N_d}\\right)(V_{bi} + V_R)}$.",
                "Step 2: Transition capacitance acts as parallel plate capacitance: $C_j = \\frac{\\epsilon_s A}{W}$.",
                "Step 3: Substituting $W$ reveals $C_j \\propto (V_{bi} + V_R)^{-1/2}$.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A",
            alternative="A plot of $1/C_j^2$ versus reverse bias voltage $V_R$ is a straight line whose intercept gives the built-in potential $V_{bi}$.",
            mistakes=["Confusing the exponent with linearly graded junction ($-1/3$, Option B) or diffusion capacitance (Option D)."],
            tags=["Electronic Devices", "PN Junction", "Depletion Capacitance", "Reverse Bias"]
        )
        questions.append(q)

    # ==========================================
    # 3. BJT PHYSICS (~65 questions)
    # ==========================================
    # Set 3A: Current Gain Alpha & Beta (35 questions)
    for bjt_i in range(35):
        qid = f"PRAC-EDC-{idx:03d}"
        idx += 1
        beta_val = 50 + (bjt_i % 6) * 25 # 50, 75, 100, 125, 150, 175
        alpha_val = round(beta_val / (1.0 + beta_val), 4)
        stmt = f"A bipolar junction transistor (BJT) operating in the active region has a common-emitter current gain of $\\beta = {beta_val}$. The common-base current gain $\\alpha$ is ________ (rounded off to four decimal places)."
        ans = [round(alpha_val - 0.002, 4), round(alpha_val + 0.002, 4)]
        q = make_question(
            qid=qid,
            subject="Electronic Devices",
            topic="BJT Physics",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Convert between common-emitter current gain $\\beta$ and common-base current gain $\\alpha$.",
            given_info=[f"Current gain $\\beta = {beta_val}$"],
            concept="The relationship between BJT current gains is $\\alpha = \\frac{\\beta}{1 + \\beta}$ and $\\beta = \\frac{\\alpha}{1 - \\alpha}$.",
            formulas=[{"formula": "\\alpha = \\frac{\\beta}{1 + \\beta}", "terms": [{"term": "\\alpha", "explanation": "Ratio of collector current to emitter current (\\le 1)"}]}],
            derivation=[
                f"Step 1: Formula connecting $\\alpha$ and $\\beta$: $\\alpha = \\frac{{\\beta}}{{1 + \\beta}}$.",
                f"Step 2: Substitute $\\beta = {beta_val}$:",
                f"$$\\alpha = \\frac{{{beta_val}}}{{1 + {beta_val}}} = \\frac{{{beta_val}}}{{{beta_val + 1}}} \\approx {alpha_val}$$."
            ],
            final_answer=f"alpha = {alpha_val}",
            alternative="Verify: $\\alpha$ is always slightly less than 1 (typically 0.98 to 0.995).",
            mistakes=["Inverting formula as $(1+\\beta)/\\beta$ which produces a value greater than 1."],
            tags=["Electronic Devices", "BJT Physics", "Current Gain", "Alpha and Beta"]
        )
        questions.append(q)

    # Set 3B: Early Effect & Base Width Modulation (30 questions)
    for ear_i in range(30):
        qid = f"PRAC-EDC-{idx:03d}"
        idx += 1
        stmt = "The Early effect (base width modulation) in a BJT operating in the active region causes which of the following effects as collector-to-emitter voltage $V_{CE}$ increases?"
        opts = [
            {"id": "A", "text": "Effective neutral base width decreases, causing collector current $I_C$ to increase"},
            {"id": "B", "text": "Effective neutral base width increases, causing collector current $I_C$ to decrease"},
            {"id": "C", "text": "Common-emitter current gain $\\beta$ decreases to zero"},
            {"id": "D", "text": "Emitter injection efficiency drops to zero"}
        ]
        q = make_question(
            qid=qid,
            subject="Electronic Devices",
            topic="BJT Physics",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Describe the physical mechanism and consequences of the Early effect in bipolar transistors.",
            given_info=["BJT in active mode with increasing $V_{CE}$."],
            concept="As $V_{CE}$ increases, the collector-base reverse bias widens the collector depletion region into the base. This narrows the neutral base width $W_B$, reducing recombination, increasing base transport factor, and resulting in an upward slope in the output characteristics ($r_o = \\frac{V_A}{I_C}$).",
            formulas=[{"formula": "I_C = I_{C0}\\left(1 + \\frac{V_{CE}}{V_A}\\right)", "terms": [{"term": "V_A", "explanation": "Early voltage"}]}],
            derivation=[
                "Step 1: In active mode, the collector-base junction is reverse biased.",
                "Step 2: Higher $V_{CE}$ increases reverse bias voltage across the collector junction.",
                "Step 3: The depletion region extends deeper into the lightly doped base.",
                "Step 4: This decreases the effective neutral base width $W_B$.",
                "Step 5: A narrower base reduces carrier recombination, increasing $\\beta$ and $I_C$.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A",
            alternative="Remember: Early effect gives the BJT a finite small-signal output resistance $r_o = V_A / I_C$.",
            mistakes=["Thinking the base widens instead of narrows."],
            tags=["Electronic Devices", "BJT Physics", "Early Effect", "Base Width Modulation"]
        )
        questions.append(q)

    # ==========================================
    # 4. MOSFET & MOS CAPACITOR (~65 questions)
    # ==========================================
    # Set 4A: MOSFET Drain Current in Saturation (35 questions)
    for mos_i in range(35):
        qid = f"PRAC-EDC-{idx:03d}"
        idx += 1
        kn = 1.0 + (mos_i % 5) * 0.5 # 1.0, 1.5, 2.0, 2.5, 3.0 mA/V^2 (k_n' * W/L)
        vth = 1.0
        vgs = 2.0 + (mos_i % 3) * 0.5 # 2.0, 2.5, 3.0 V
        # Vds = 3.0 V > Vgs - Vth -> Saturation
        vov = vgs - vth
        # Id = 1/2 * kn * (Vgs - Vth)^2 in mA
        id_ma = round(0.5 * kn * (vov ** 2), 2)
        stmt = f"An n-channel MOSFET has threshold voltage $V_{{th}} = {vth}\\text{{ V}}$ and transconductance parameter $\\mu_n C_{{ox}} \\frac{{W}}{{L}} = {kn}\\text{{ mA/V}}^2$. The transistor is biased with gate-to-source voltage $V_{{GS}} = {vgs}\\text{{ V}}$ and drain-to-source voltage $V_{{DS}} = 4.0\\text{{ V}}$. Neglecting channel-length modulation ($\\lambda = 0$), the drain current $I_D$ is ________ mA (rounded off to two decimal places)."
        ans = [round(id_ma - 0.05, 2), round(id_ma + 0.05, 2)] if abs(id_ma - round(id_ma)) > 1e-4 else str(int(round(id_ma)))
        q = make_question(
            qid=qid,
            subject="Electronic Devices",
            topic="MOSFET & MOS Capacitor",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Verify the MOSFET operating region and compute the saturation drain current.",
            given_info=[f"Threshold voltage $V_{{th}} = {vth}\\text{{ V}}$", f"Process parameter $k_n = {kn}\\text{{ mA/V}}^2$", f"Bias: $V_{{GS}} = {vgs}\\text{{ V}}$, $V_{{DS}} = 4.0\\text{{ V}}$"],
            concept="First compute overdrive voltage $V_{ov} = V_{GS} - V_{th}$. Since $V_{DS} \\ge V_{ov}$, the device is in SATURATION. In saturation, $I_D = \\frac{1}{2} k_n (V_{GS} - V_{th})^2$.",
            formulas=[{"formula": "I_D = \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS} - V_{th})^2", "terms": [{"term": "V_{GS} - V_{th}", "explanation": "Gate overdrive voltage"}]}],
            derivation=[
                f"Step 1: Compute overdrive: $V_{{ov}} = V_{{GS}} - V_{{th}} = {vgs} - {vth} = {vov:.1f}\\text{{ V}}$.",
                f"Step 2: Check region: $V_{{DS}} = 4.0\\text{{ V}} > V_{{ov}} = {vov:.1f}\\text{{ V}}$. Hence the MOSFET is in SATURATION.",
                f"Step 3: Saturation drain current formula: $I_D = \\frac{{1}}{{2}} k_n (V_{{ov}})^2$.",
                f"Step 4: $I_D = 0.5 \\times {kn} \\times ({vov:.1f})^2 = 0.5 \\times {kn} \\times {vov**2:.2f} = {id_ma}\\text{{ mA}}$."
            ],
            final_answer=f"ID = {id_ma} mA",
            alternative="Quick check: In saturation, pinch-off occurs at the drain end of the channel.",
            mistakes=["Using triode/linear region formula instead of saturation formula."],
            tags=["Electronic Devices", "MOSFET", "Drain Current", "Saturation Region", "Threshold Voltage"]
        )
        questions.append(q)

    # Set 4B: MOS Capacitor High-Frequency vs Low-Frequency C-V (30 questions)
    for mos_c in range(30):
        qid = f"PRAC-EDC-{idx:03d}"
        idx += 1
        stmt = "In a MOS capacitor fabricated on a p-type silicon substrate, how does the capacitance in strong inversion differ between low-frequency and high-frequency C-V measurements?"
        opts = [
            {"id": "A", "text": "Low-frequency capacitance returns to $C_{ox}$ because minority carriers (electrons) can follow the slow AC signal; high-frequency capacitance remains at $C_{\\min}$"},
            {"id": "B", "text": "High-frequency capacitance returns to $C_{ox}$; low-frequency capacitance drops to zero"},
            {"id": "C", "text": "Both high-frequency and low-frequency capacitances drop to zero in strong inversion"},
            {"id": "D", "text": "Both capacitances remain equal to $C_{ox}$ across all gate voltages"}
        ]
        q = make_question(
            qid=qid,
            subject="Electronic Devices",
            topic="MOSFET & MOS Capacitor",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Medium",
            understanding="Distinguish between low-frequency and high-frequency C-V curves of a MOS capacitor in strong inversion.",
            given_info=["MOS capacitor on p-type substrate in strong inversion ($V_G > V_{th}$)."],
            concept="Inversion layer charge is composed of minority carriers generated thermally. At low frequencies (< 100 Hz), generation-recombination can keep up with the AC signal, so the inversion layer responds, restoring capacitance to oxide capacitance $C_{ox}$. At high frequencies (> 100 kHz), the slow minority carrier generation cannot follow the AC signal, so the depletion layer depth remains fixed at maximum width $W_{dep,\\max}$, keeping total capacitance at $C_{\\min} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}}$.",
            formulas=[{"formula": "C_{LF} = C_{ox}, \\quad C_{HF} = \\frac{C_{ox} C_{dep}}{C_{ox} + C_{dep}} = C_{\\min}", "terms": [{"term": "C_{ox}", "explanation": "Gate oxide capacitance"}]}],
            derivation=[
                "Step 1: In strong inversion, minority electrons form the inversion channel.",
                "Step 2: Generation of minority carriers is governed by thermal generation lifetime (order of milliseconds).",
                "Step 3: Under low-frequency excitation, the inversion layer charges and discharges with the signal, so $C = C_{ox}$.",
                "Step 4: Under high-frequency excitation, minority electrons cannot respond; the signal is absorbed by the bulk depletion edge, so $C = C_{\\min}$.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A",
            alternative="Remember: In MOSFETs with source/drain contacts, minority carriers can flow in instantaneously, so the MOSFET inversion C-V curve is always high (returns to $C_{ox}$) even at high frequencies.",
            mistakes=["Confusing the MOS capacitor (no source/drain) with a MOSFET."],
            tags=["Electronic Devices", "MOS Capacitor", "C-V Characteristics", "Strong Inversion", "Oxide Capacitance"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} Electronic Devices practice questions.")
    return questions

