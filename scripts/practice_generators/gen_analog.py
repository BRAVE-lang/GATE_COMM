import math
from .common import make_question

def generate_analog_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. DIODE APPLICATIONS (~70 questions)
    # ==========================================
    # Set 1A: Rectifiers & Ripple Factor (35 questions)
    for rec_i in range(35):
        qid = f"PRAC-ANA-{idx:03d}"
        idx += 1
        is_full = (rec_i % 2 == 0)
        vm = 10 + (rec_i % 6) * 5 # 10, 15, 20, 25, 30, 35 V
        if is_full:
            vdc = round(2 * vm / math.pi, 2)
            piv = 2 * vm
            stmt = f"A center-tapped full-wave rectifier is supplied by a sinusoidal AC voltage with peak secondary voltage $V_m = {vm}\\text{{ V}}$. Assuming ideal diodes with zero forward drop, the DC output voltage $V_{{dc}}$ across the load resistor is ________ V (rounded off to two decimal places)."
            ans = [round(vdc - 0.05, 2), round(vdc + 0.05, 2)]
            der = [
                f"Step 1: For a full-wave rectifier, average (DC) voltage is $V_{{dc}} = \\frac{{2 V_m}}{{\\pi}}$.",
                f"Step 2: $V_m = {vm}\\text{{ V}}$.",
                f"Step 3: $V_{{dc}} = \\frac{{2 \\times {vm}}}{{\\pi}} = \\frac{{{2*vm}}}{{\\pi}} \\approx {vdc}\\text{{ V}}$."
            ]
        else:
            vdc = round(vm / math.pi, 2)
            stmt = f"A half-wave rectifier is energized by an AC source of peak voltage $V_m = {vm}\\text{{ V}}$. Assuming an ideal diode, the DC output voltage $V_{{dc}}$ across the resistive load is ________ V (rounded off to two decimal places)."
            ans = [round(vdc - 0.05, 2), round(vdc + 0.05, 2)]
            der = [
                f"Step 1: For a half-wave rectifier, average (DC) voltage is $V_{{dc}} = \\frac{{V_m}}{{\\pi}}$.",
                f"Step 2: $V_m = {vm}\\text{{ V}}$.",
                f"Step 3: $V_{{dc}} = \\frac{{{vm}}}{{\\pi}} \\approx {vdc}\\text{{ V}}$."
            ]

        q = make_question(
            qid=qid,
            subject="Analog Circuits",
            topic="Diode Applications",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Evaluate the DC average output voltage of a diode rectifier circuit.",
            given_info=[f"Peak AC voltage: $V_m = {vm}\\text{{ V}}$", f"Rectifier topology: {'Full-wave center-tapped' if is_full else 'Half-wave'}"],
            concept=f"The DC component of a rectified waveform is the average value over one period: $V_{{dc}} = \\frac{{2V_m}}{{\\pi}}$ for full-wave and $\\frac{{V_m}}{{\\pi}}$ for half-wave.",
            formulas=[{"formula": "V_{dc} = \\frac{2V_m}{\\pi} \\quad (\\text{full-wave}) \\quad \\text{or} \\quad \\frac{V_m}{\\pi} \\quad (\\text{half-wave})", "terms": [{"term": "V_m", "explanation": "Peak sinusoidal AC amplitude"}]}],
            derivation=der,
            final_answer=f"Vdc = {vdc} V",
            alternative="Divide by $\\pi \\approx 3.1416$: $V_{dc} \\approx 0.637 V_m$ (full-wave) or $0.318 V_m$ (half-wave).",
            mistakes=["Using RMS voltage $V_m / \\sqrt{2}$ instead of DC average."],
            tags=["Analog Circuits", "Diode Applications", "Rectifiers", "DC Voltage", "Ripple"]
        )
        questions.append(q)

    # Set 1B: Zener Diode Shunt Regulator (35 questions)
    for zen_i in range(35):
        qid = f"PRAC-ANA-{idx:03d}"
        idx += 1
        vin = 20 + (zen_i % 5) * 5  # 20, 25, 30, 35, 40 V
        vz = 10.0                   # 10 V
        rs = 100 + (zen_i % 4) * 50 # 100, 150, 200, 250 ohm
        rl = 500                    # 500 ohm
        # Is = (Vin - Vz) / Rs
        is_cur_ma = round((vin - vz) / (rs / 1000.0), 1)
        # Il = Vz / Rl = 10 / 500 = 20 mA
        il_ma = round(vz / (rl / 1000.0), 1)
        iz_ma = round(is_cur_ma - il_ma, 1)
        stmt = f"A Zener diode voltage regulator circuit has an unregulated input voltage of $V_{{in}} = {vin}\\text{{ V}}$, a series current-limiting resistor $R_s = {rs}\\,\\Omega$, and a Zener diode with breakdown voltage $V_Z = 10\\text{{ V}}$. The load resistor is $R_L = {rl}\\,\\Omega$. The current flowing through the Zener diode $I_Z$ is ________ mA (rounded off to one decimal place)."
        ans = [round(iz_ma - 0.5, 1), round(iz_ma + 0.5, 1)]
        q = make_question(
            qid=qid,
            subject="Analog Circuits",
            topic="Diode Applications",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Medium",
            understanding="Calculate the operating current through the Zener diode in a shunt regulator circuit.",
            given_info=[f"Input voltage $V_{{in}} = {vin}\\text{{ V}}$", f"Zener voltage $V_Z = 10\\text{{ V}}$", f"Series resistor $R_s = {rs}\\,\\Omega$", f"Load resistor $R_L = {rl}\\,\\Omega$"],
            concept="When the Zener diode is in breakdown regulation ($V_o = V_Z$), the total source current is $I_s = \\frac{V_{in} - V_Z}{R_s}$. The load current is $I_L = \\frac{V_Z}{R_L}$. By KCL at the output node, $I_Z = I_s - I_L$.",
            formulas=[{"formula": "I_Z = \\frac{V_{in} - V_Z}{R_s} - \\frac{V_Z}{R_L}", "terms": [{"term": "I_Z", "explanation": "Current through Zener diode"}]}],
            derivation=[
                f"Step 1: Check breakdown condition: Open-circuit voltage without Zener is $V_{{in}} \\frac{{R_L}}{{R_s + R_L}} = {vin} \\times \\frac{{{rl}}}{{{rs + rl}}} > 10\\text{{ V}}$. Thus Zener is in breakdown.",
                f"Step 2: Source current: $I_s = \\frac{{V_{{in}} - V_Z}}{{R_s}} = \\frac{{{vin} - 10}}{{{rs}}}\\,\\text{{A}} = \\frac{{{vin - 10}}}{{{rs}}}\\,\\text{{A}} = {is_cur_ma}\\text{{ mA}}$.",
                f"Step 3: Load current: $I_L = \\frac{{V_Z}}{{R_L}} = \\frac{{10}}{{{rl}}}\\,\\text{{A}} = {il_ma}\\text{{ mA}}$.",
                f"Step 4: Zener current by KCL: $I_Z = I_s - I_L = {is_cur_ma} - {il_ma} = {iz_ma}\\text{{ mA}}$."
            ],
            final_answer=f"IZ = {iz_ma} mA",
            alternative="Apply KCL directly at the cathode of the Zener: $\\frac{V_{in} - 10}{R_s} = I_Z + \\frac{10}{R_L}$.",
            mistakes=["Assuming total source current flows through the Zener diode, ignoring load current $I_L$."],
            tags=["Analog Circuits", "Zener Diode", "Voltage Regulator", "Diode Circuits", "KCL"]
        )
        questions.append(q)

    # ==========================================
    # 2. BJT & MOSFET AMPLIFIERS (~70 questions)
    # ==========================================
    # Set 2A: Common-Emitter Small-Signal Voltage Gain (35 questions)
    for ce_i in range(35):
        qid = f"PRAC-ANA-{idx:03d}"
        idx += 1
        ic_ma = 1.0 + (ce_i % 5) * 0.5 # 1.0, 1.5, 2.0, 2.5, 3.0 mA
        rc_k = 2.0 + (ce_i % 4) * 1.0  # 2.0, 3.0, 4.0, 5.0 k-ohm
        # gm = Ic / Vt = ic_ma / 26 mV in mA/V = 1/ohm
        # gm = ic_ma / 26
        # |Av| = gm * Rc = (ic_ma / 0.026) * (rc_k * 1000) * 1e-3 = ic_ma * rc_k * 1000 / 26
        av_mag = round((ic_ma * rc_k * 1000.0) / 26.0, 1)
        stmt = f"A common-emitter BJT amplifier with fully bypassed emitter resistor is biased at a quiescent collector current of $I_C = {ic_ma}\\text{{ mA}}$. The collector load resistor is $R_C = {rc_k}\\text{{ k}}\\Omega$. Assuming thermal voltage $V_t = 26\\text{{ mV}}$ and Early voltage $V_A = \\infty$, the magnitude of the small-signal voltage gain $|A_v|$ is ________ (rounded off to the nearest integer)."
        ans = [round(av_mag - 2), round(av_mag + 2)]
        q = make_question(
            qid=qid,
            subject="Analog Circuits",
            topic="BJT & MOSFET Amplifiers",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Evaluate the small-signal voltage gain magnitude of an unattenuated Common-Emitter amplifier.",
            given_info=[f"Collector bias current $I_C = {ic_ma}\\text{{ mA}}$", f"Collector resistor $R_C = {rc_k}\\text{{ k}}\\Omega$", "$V_t = 26\\text{{ mV}}$", "Ideal BJT ($r_o = \\infty$)"],
            concept="The small-signal transconductance of a BJT is $g_m = \\frac{I_C}{V_t}$. For a common-emitter amplifier with bypassed emitter, the voltage gain is $A_v = -g_m R_C$.",
            formulas=[{"formula": "|A_v| = g_m R_C = \\frac{I_C R_C}{V_t}", "terms": [{"term": "g_m", "explanation": "Transconductance = I_C / V_t"}]}],
            derivation=[
                f"Step 1: Compute transconductance: $g_m = \\frac{{I_C}}{{V_t}} = \\frac{{{ic_ma} \\times 10^{{-3}}}}{{0.026}} \\approx {round(ic_ma / 0.026, 2)}\\text{{ mA/V}}$.",
                f"Step 2: Voltage gain magnitude: $|A_v| = g_m R_C = \\frac{{{ic_ma} \\times 10^{{-3}} \\times ({rc_k} \\times 10^3)}}{{0.026}} = \\frac{{{ic_ma * rc_k}}}{{0.026}} \\approx {int(round(av_mag))}$."
            ],
            final_answer=f"|Av| = {int(round(av_mag))}",
            alternative="Formula: $|A_v| = \\frac{I_C R_C}{V_t} = \\frac{V_{RC}}{V_t}$ where $V_{RC}$ is the DC voltage drop across $R_C$.",
            mistakes=["Missing the factor of 1000 in $R_C$ (kilo-ohms to ohms)."],
            tags=["Analog Circuits", "BJT Amplifiers", "Common Emitter", "Voltage Gain", "Transconductance"]
        )
        questions.append(q)

    # Set 2B: Common-Source MOSFET Amplifier Gain (35 questions)
    for cs_i in range(35):
        qid = f"PRAC-ANA-{idx:03d}"
        idx += 1
        gm_ma = 2.0 + (cs_i % 5) * 1.0 # 2, 3, 4, 5, 6 mA/V
        rd_k = 5.0 + (cs_i % 4) * 2.5  # 5.0, 7.5, 10.0, 12.5 k-ohm
        # Av = -gm * Rd
        av_cs = round(gm_ma * rd_k, 1)
        stmt = f"A Common-Source (CS) MOSFET amplifier has a small-signal transconductance of $g_m = {gm_ma}\\text{{ mA/V}}$ and a drain load resistor $R_D = {rd_k}\\text{{ k}}\\Omega$. Neglecting channel length modulation (output resistance $r_o \\to \\infty$), the small-signal voltage gain magnitude $|A_v|$ is ________ (rounded off to the nearest integer)."
        ans = [round(av_cs - 1), round(av_cs + 1)]
        q = make_question(
            qid=qid,
            subject="Analog Circuits",
            topic="BJT & MOSFET Amplifiers",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the small-signal voltage gain magnitude of a Common-Source MOSFET amplifier.",
            given_info=[f"Transconductance $g_m = {gm_ma}\\text{{ mA/V}}$", f"Drain resistor $R_D = {rd_k}\\text{{ k}}\\Omega$", "Infinite output resistance ($r_o = \\infty$)"],
            concept="For a Common-Source amplifier with grounded source, the small-signal voltage gain is $A_v = -g_m (R_D \\parallel r_o) = -g_m R_D$.",
            formulas=[{"formula": "|A_v| = g_m R_D", "terms": [{"term": "g_m", "explanation": "MOSFET transconductance"}]}],
            derivation=[
                f"Step 1: Formula for CS voltage gain magnitude: $|A_v| = g_m R_D$.",
                f"Step 2: $g_m = {gm_ma} \\times 10^{{-3}}\\text{{ A/V}}$ and $R_D = {rd_k} \\times 10^3\\,\\Omega$.",
                f"Step 3: $|A_v| = ({gm_ma} \\times 10^{{-3}}) \\times ({rd_k} \\times 10^3) = {gm_ma} \\times {rd_k} = {int(round(av_cs))}$."
            ],
            final_answer=f"|Av| = {int(round(av_cs))}",
            alternative="Units cancellation: $(\\text{mA/V}) \\times (\\text{k}\\Omega) = 10^{-3} \\times 10^3 = 1$ (dimensionless gain).",
            mistakes=["Forgetting that CS amplifier is an inverting topology if asked for signed gain $A_v$."],
            tags=["Analog Circuits", "MOSFET Amplifiers", "Common Source", "Voltage Gain"]
        )
        questions.append(q)

    # ==========================================
    # 3. OP-AMP CIRCUITS (~65 questions)
    # ==========================================
    # Set 3A: Inverting & Non-Inverting Op-Amp Configurations (35 questions)
    for op_i in range(35):
        qid = f"PRAC-ANA-{idx:03d}"
        idx += 1
        r1_k = (op_i % 4) + 1 # 1, 2, 3, 4 k-ohm
        rf_k = 10 + (op_i % 5) * 5 # 10, 15, 20, 25, 30 k-ohm
        is_inv = (op_i % 2 == 0)
        if is_inv:
            gain = round(rf_k / r1_k, 2)
            stmt = f"An ideal op-amp is configured as an inverting amplifier with input resistor $R_1 = {r1_k}\\text{{ k}}\\Omega$ and feedback resistor $R_f = {rf_k}\\text{{ k}}\\Omega$. The magnitude of the closed-loop voltage gain $|A_{{v}}|$ is ________ (rounded off to two decimal places)."
            ans = [round(gain - 0.05, 2), round(gain + 0.05, 2)] if abs(gain - round(gain)) > 1e-4 else str(int(round(gain)))
            der = [
                f"Step 1: For an ideal inverting op-amp with virtual ground at inverting terminal, $A_v = -\\frac{{R_f}}{{R_1}}$.",
                f"Step 2: Substitute $R_f = {rf_k}\\text{{ k}}\\Omega$ and $R_1 = {r1_k}\\text{{ k}}\\Omega$:",
                f"$$|A_v| = \\frac{{{rf_k}}}{{{r1_k}}} = {gain}$$."
            ]
        else:
            gain = round(1.0 + (rf_k / r1_k), 2)
            stmt = f"An ideal op-amp is configured as a non-inverting amplifier with resistors $R_1 = {r1_k}\\text{{ k}}\\Omega$ and $R_f = {rf_k}\\text{{ k}}\\Omega$. The closed-loop voltage gain $A_{{v}}$ is ________ (rounded off to two decimal places)."
            ans = [round(gain - 0.05, 2), round(gain + 0.05, 2)] if abs(gain - round(gain)) > 1e-4 else str(int(round(gain)))
            der = [
                f"Step 1: For an ideal non-inverting op-amp, $A_v = 1 + \\frac{{R_f}}{{R_1}}$.",
                f"Step 2: Substitute $R_f = {rf_k}\\text{{ k}}\\Omega$ and $R_1 = {r1_k}\\text{{ k}}\\Omega$:",
                f"$$A_v = 1 + \\frac{{{rf_k}}}{{{r1_k}}} = 1 + {round(rf_k / r1_k, 2)} = {gain}$$."
            ]

        q = make_question(
            qid=qid,
            subject="Analog Circuits",
            topic="Op-Amp Circuits",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the closed-loop voltage gain of standard inverting and non-inverting ideal op-amp circuits.",
            given_info=[f"Resistors: $R_1 = {r1_k}\\text{{ k}}\\Omega$, $R_f = {rf_k}\\text{{ k}}\\Omega$", f"Topology: {'Inverting' if is_inv else 'Non-Inverting'}", "Ideal op-amp"],
            concept="By virtual short concept, $V_+ = V_-$. Inverting gain is $A_v = -R_f / R_1$, while non-inverting gain is $A_v = 1 + R_f / R_1$.",
            formulas=[{"formula": "A_v = -\\frac{R_f}{R_1} \\quad (\\text{inv}) \\quad \\text{or} \\quad 1 + \\frac{R_f}{R_1} \\quad (\\text{non-inv})", "terms": [{"term": "R_f", "explanation": "Feedback resistor"}]}],
            derivation=der,
            final_answer=f"Av = {gain}",
            alternative="Remember that non-inverting gain is always strictly greater than 1 by exactly 1 unit compared to inverting magnitude.",
            mistakes=["Forgetting the $+1$ in the non-inverting gain formula."],
            tags=["Analog Circuits", "Op-Amp Circuits", "Inverting Amplifier", "Non-Inverting Amplifier", "Voltage Gain"]
        )
        questions.append(q)

    # Set 3B: Slew Rate & Full-Power Bandwidth (30 questions)
    for sr_i in range(30):
        qid = f"PRAC-ANA-{idx:03d}"
        idx += 1
        sr_v_us = 1.0 + (sr_i % 5) * 1.0 # 1, 2, 3, 4, 5 V/us
        vm = 5.0                        # 5 V
        # fmax = SR / (2 * pi * Vm)
        # SR in V/s = sr_v_us * 1e6
        fmax_khz = round((sr_v_us * 1e6) / (2.0 * math.pi * vm * 1000.0), 1)
        stmt = f"An operational amplifier has a slew rate of $SR = {sr_v_us}\\text{{ V/}}\\mu\\text{{s}}$. For an undistorted output sinusoidal signal with peak amplitude $V_m = {vm}\\text{{ V}}$, the maximum frequency (full-power bandwidth) $f_{{\\max}}$ of the signal is ________ kHz (rounded off to one decimal place)."
        ans = [round(fmax_khz - 0.5, 1), round(fmax_khz + 0.5, 1)]
        q = make_question(
            qid=qid,
            subject="Analog Circuits",
            topic="Op-Amp Circuits",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Medium",
            understanding="Calculate the full-power bandwidth of an op-amp limited by its slew rate.",
            given_info=[f"Slew rate $SR = {sr_v_us}\\text{{ V/}}\\mu\\text{{s}} = {sr_v_us} \\times 10^6\\text{{ V/s}}$", f"Peak output amplitude $V_m = {vm}\\text{{ V}}$"],
            concept="The maximum rate of change of a sinusoidal signal $v_o(t) = V_m \\sin(2\\pi f t)$ is $\\left.\\frac{dv_o}{dt}\\right|_{\\max} = 2\\pi f V_m$. To avoid slew-rate distortion, $2\\pi f V_m \\le SR \\implies f_{\\max} = \\frac{SR}{2\\pi V_m}$.",
            formulas=[{"formula": "f_{\\max} = \\frac{SR}{2\\pi V_m}", "terms": [{"term": "SR", "explanation": "Op-amp slew rate in V/s"}]}],
            derivation=[
                f"Step 1: Formula for full-power bandwidth: $f_{{\\max}} = \\frac{{SR}}{{2\\pi V_m}}$.",
                f"Step 2: Convert slew rate to V/s: $SR = {sr_v_us} \\times 10^6\\text{{ V/s}}$.",
                f"Step 3: $f_{{\\max}} = \\frac{{{sr_v_us} \\times 10^6}}{{2\\pi \\times {vm}}} = \\frac{{{sr_v_us} \\times 10^6}}{{{2 * math.pi * vm:.2f}}} \\approx {fmax_khz * 1000:.0f}\\text{{ Hz}} = {fmax_khz}\\text{{ kHz}}$."
            ],
            final_answer=f"fmax = {fmax_khz} kHz",
            alternative="Shortcut: $f_{\\max} = \\frac{SR\\text{ (in V/}\\mu\\text{s)}}{2\\pi V_m} \\times 1000\\text{ kHz}$.",
            mistakes=["Using peak-to-peak voltage $2 V_m$ instead of peak voltage $V_m$."],
            tags=["Analog Circuits", "Op-Amp Circuits", "Slew Rate", "Full Power Bandwidth"]
        )
        questions.append(q)

    # ==========================================
    # 4. FEEDBACK AMPLIFIERS & OSCILLATORS (~65 questions)
    # ==========================================
    # Set 4A: Barkhausen Criterion & Wien Bridge Oscillator (35 questions)
    for osc_i in range(35):
        qid = f"PRAC-ANA-{idx:03d}"
        idx += 1
        r_k = (osc_i % 5) + 2 # 2, 3, 4, 5, 6 k-ohm
        c_nf = 10             # 10 nF
        # f0 = 1 / (2 * pi * R * C)
        # R in ohm = r_k * 1000, C in F = 10 * 1e-9 = 1e-8
        rc = (r_k * 1000.0) * (c_nf * 1e-9)
        f0_khz = round(1.0 / (2.0 * math.pi * rc * 1000.0), 2)
        stmt = f"A Wien-bridge oscillator uses symmetrical bridge arms with $R = {r_k}\\text{{ k}}\\Omega$ and $C = {c_nf}\\text{{ nF}}$. The oscillation frequency $f_0$ of the circuit is ________ kHz (rounded off to two decimal places)."
        ans = [round(f0_khz - 0.05, 2), round(f0_khz + 0.05, 2)]
        q = make_question(
            qid=qid,
            subject="Analog Circuits",
            topic="Feedback Amplifiers & Oscillators",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the oscillation frequency of a symmetrical Wien-bridge RC oscillator.",
            given_info=[f"Resistance $R = {r_k}\\text{{ k}}\\Omega$", f"Capacitance $C = {c_nf}\\text{{ nF}}$"],
            concept="For a symmetrical Wien-bridge network, the feedback transfer function has zero phase shift at $\\omega_0 = \\frac{1}{RC}$, giving oscillation frequency $f_0 = \\frac{1}{2\\pi RC}$. The feedback factor at this frequency is $\\beta = 1/3$, requiring non-inverting op-amp gain $A_v \\ge 3$ ($R_f \\ge 2 R_1$).",
            formulas=[{"formula": "f_0 = \\frac{1}{2\\pi R C}", "terms": [{"term": "f_0", "explanation": "Wien bridge oscillation frequency"}]}],
            derivation=[
                f"Step 1: Formula for Wien-bridge frequency: $f_0 = \\frac{{1}}{{2\\pi RC}}$.",
                f"Step 2: $R = {r_k} \\times 10^3\\,\\Omega$ and $C = {c_nf} \\times 10^{{-9}}\\,\\text{{F}}$.",
                f"Step 3: $RC = ({r_k} \\times 10^3) \\times ({c_nf} \\times 10^{{-9}}) = {rc:.3e}\\text{{ s}}$.",
                f"Step 4: $f_0 = \\frac{{1}}{{2\\pi \\times {rc:.3e}}} \\approx {f0_khz * 1000:.0f}\\text{{ Hz}} = {f0_khz}\\text{{ kHz}}$."
            ],
            final_answer=f"f0 = {f0_khz} kHz",
            alternative="Remember that for RC phase-shift oscillators, the denominator includes $\\sqrt{6}$ or $\\sqrt{2N}$, whereas Wien-bridge has strictly $2\\pi RC$.",
            mistakes=["Confusing the formula with RC phase shift oscillator $f_0 = \\frac{1}{2\\pi RC\\sqrt{6}}$."],
            tags=["Analog Circuits", "Oscillators", "Wien Bridge", "Barkhausen Criterion", "Frequency"]
        )
        questions.append(q)

    # Set 4B: Feedback Topologies & Impedance Effects (30 questions)
    for fb_i in range(30):
        qid = f"PRAC-ANA-{idx:03d}"
        idx += 1
        stmt = "Which of the following negative feedback topologies INCREASES the input impedance and DECREASES the output impedance of an amplifier?"
        opts = [
            {"id": "A", "text": "Voltage-series (Series-Shunt) feedback"},
            {"id": "B", "text": "Voltage-shunt (Shunt-Shunt) feedback"},
            {"id": "C", "text": "Current-series (Series-Series) feedback"},
            {"id": "D", "text": "Current-shunt (Shunt-Series) feedback"}
        ]
        q = make_question(
            qid=qid,
            subject="Analog Circuits",
            topic="Feedback Amplifiers & Oscillators",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Identify the feedback topology that creates an ideal voltage amplifier (high input impedance, low output impedance).",
            given_info=["Negative feedback amplifier with high $R_{in}$ and low $R_{out}$."],
            concept="Rule for feedback impedances: Series mixing at the input increases input impedance ($R_{in, f} = R_{in}(1 + A\\beta)$). Shunt sampling at the output decreases output impedance ($R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$). Thus, Voltage-series (Series-Shunt) feedback increases $R_{in}$ and decreases $R_{out}$.",
            formulas=[{"formula": "R_{in, f} = R_{in}(1 + A\\beta), \\quad R_{out, f} = \\frac{R_{out}}{1 + A\\beta}", "terms": [{"term": "1 + A\\beta", "explanation": "Desensitivity factor"}]}],
            derivation=[
                "Step 1: Input mixing is SERIES $\\implies$ Input impedance increases: $R_{in, f} = R_{in}(1 + A\\beta)$.",
                "Step 2: Output sampling is SHUNT (Voltage sampling) $\\implies$ Output impedance decreases: $R_{out, f} = \\frac{R_{out}}{1 + A\\beta}$.",
                "Step 3: This topology is known as Voltage-series (or Series-Shunt) feedback.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A",
            alternative="Summary table: Voltage-series: $R_{in} \\uparrow, R_{out} \\downarrow$; Current-series: $R_{in} \\uparrow, R_{out} \\uparrow$; Voltage-shunt: $R_{in} \\downarrow, R_{out} \\downarrow$; Current-shunt: $R_{in} \\downarrow, R_{out} \\uparrow$.",
            mistakes=["Confusing series-shunt (voltage-series) with shunt-shunt (voltage-shunt)."],
            tags=["Analog Circuits", "Feedback Amplifiers", "Negative Feedback", "Input Impedance", "Output Impedance"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} Analog Circuits practice questions.")
    return questions
