import math
from .common import make_question

def generate_digital_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. BOOLEAN ALGEBRA & LOGIC GATES (~70 questions)
    # ==========================================
    # Set 1A: De Morgan's & Boolean Minimization (35 questions)
    for ba_i in range(35):
        qid = f"PRAC-DIG-{idx:03d}"
        idx += 1
        stmt = "The simplified minimal Sum-of-Products (SOP) expression for the Boolean function $F(A, B, C) = AB + \\bar{A}C + BC$ is:"
        opts = [
            {"id": "A", "text": "$AB + \\bar{A}C$"},
            {"id": "B", "text": "$AB + BC$"},
            {"id": "C", "text": "$\\bar{A}C + BC$"},
            {"id": "D", "text": "$A + B + C$"}
        ]
        q = make_question(
            qid=qid,
            subject="Digital Circuits",
            topic="Boolean Algebra & Logic Gates",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Apply the Consensus Theorem to eliminate redundant terms from a Boolean expression.",
            given_info=["Boolean function: $F = AB + \\bar{A}C + BC$"],
            concept="Consensus Theorem: $XY + \\bar{X}Z + YZ = XY + \\bar{X}Z$. The term $YZ$ is the consensus of $XY$ and $\\bar{X}Z$ and is completely redundant.",
            formulas=[{"formula": "AB + \\bar{A}C + BC = AB + \\bar{A}C", "terms": [{"term": "BC", "explanation": "Redundant consensus term"}]}],
            derivation=[
                "Step 1: In the expression $AB + \\bar{A}C + BC$, identify the variable $A$ which appears in both true and complemented forms.",
                "Step 2: The remaining literals associated with $A$ and $\\bar{A}$ are $B$ and $C$.",
                "Step 3: Their conjunction is $BC$, which appears as the third term.",
                "Step 4: By the consensus theorem, $BC$ can be eliminated without altering the truth value: $F = AB + \\bar{A}C$.",
                "Therefore, Option A is the correct minimal SOP."
            ],
            final_answer="Option A",
            alternative="Algebraic expansion: $BC = BC(A + \\bar{A}) = ABC + \\bar{A}BC$. Then $AB + ABC = AB$ and $\\bar{A}C + \\bar{A}BC = \\bar{A}C$.",
            mistakes=["Thinking all three terms are essential in the minimal SOP."],
            tags=["Digital Circuits", "Boolean Algebra", "Consensus Theorem", "Logic Gates", "SOP"]
        )
        questions.append(q)

    # Set 1B: Universal Gates & XOR Realization (35 questions)
    for univ_i in range(35):
        qid = f"PRAC-DIG-{idx:03d}"
        idx += 1
        stmt = "The MINIMUM number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate is:"
        opts = [
            {"id": "A", "text": "4"},
            {"id": "B", "text": "3"},
            {"id": "C", "text": "5"},
            {"id": "D", "text": "6"}
        ]
        q = make_question(
            qid=qid,
            subject="Digital Circuits",
            topic="Boolean Algebra & Logic Gates",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Determine the minimum number of universal NAND gates required to construct a 2-input XOR function.",
            given_info=["2-input XOR function $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ using 2-input NAND gates."],
            concept="Standard universal gate implementations: An XOR gate requires exactly 4 NAND gates (or 5 NOR gates). An XNOR gate requires 5 NAND gates (or 4 NOR gates).",
            formulas=[{"formula": "A \\oplus B = \\overline{\\overline{A \\cdot \\overline{AB}} \\cdot \\overline{B \\cdot \\overline{AB}}}", "terms": [{"term": "\\overline{AB}", "explanation": "Shared first-stage NAND gate"}]}],
            derivation=[
                "Step 1: Let gate 1 compute $N_1 = \\overline{AB}$.",
                "Step 2: Let gate 2 compute $N_2 = \\overline{A \\cdot N_1} = \\overline{A \\cdot \\overline{AB}} = \\bar{A} + AB = \\bar{A} + B$.",
                "Step 3: Let gate 3 compute $N_3 = \\overline{B \\cdot N_1} = \\overline{B \\cdot \\overline{AB}} = \\bar{B} + AB = \\bar{B} + A$.",
                "Step 4: Let gate 4 combine $N_2$ and $N_3$: $Y = \\overline{N_2 \\cdot N_3} = \\overline{(\\bar{A} + B)(\\bar{B} + A)} = \\overline{\\bar{A}\\bar{B} + AB} = A\\bar{B} + \\bar{A}B = A \\oplus B$.",
                "Step 5: Total number of NAND gates used is 4.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A (4 NAND gates)",
            alternative="Summary: NOT = 1 NAND; AND = 2 NAND; OR = 3 NAND; XOR = 4 NAND; XNOR = 5 NAND.",
            mistakes=["Selecting 5 (which is the requirement using NOR gates, or for XNOR using NAND)."],
            tags=["Digital Circuits", "Universal Gates", "NAND Realization", "XOR Gate"]
        )
        questions.append(q)

    # ==========================================
    # 2. COMBINATIONAL LOGIC (~70 questions)
    # ==========================================
    # Set 2A: Multiplexers as Logic Function Generators (35 questions)
    for mux_i in range(35):
        qid = f"PRAC-DIG-{idx:03d}"
        idx += 1
        stmt = "A $4 \\times 1$ Multiplexer (MUX) with select inputs $S_1, S_0$ connected to variables $A, B$ respectively has data inputs $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$. The minimal Boolean function realized at output $Y$ is:"
        opts = [
            {"id": "A", "text": "$A \\oplus B$ (XOR)"},
            {"id": "B", "text": "$\\overline{A \\oplus B}$ (XNOR)"},
            {"id": "C", "text": "$AB$ (AND)"},
            {"id": "D", "text": "$A + B$ (OR)"}
        ]
        q = make_question(
            qid=qid,
            subject="Digital Circuits",
            topic="Combinational Logic",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Evaluate the logic function synthesized by a 4:1 multiplexer with fixed data inputs.",
            given_info=["4:1 MUX with $S_1 = A, S_0 = B$", "Data inputs: $I_0 = 0, I_1 = 1, I_2 = 1, I_3 = 0$"],
            concept="The output equation of a 4:1 MUX is $Y = \\bar{S}_1\\bar{S}_0 I_0 + \\bar{S}_1 S_0 I_1 + S_1\\bar{S}_0 I_2 + S_1 S_0 I_3$.",
            formulas=[{"formula": "Y = \\bar{A}\\bar{B}I_0 + \\bar{A}B I_1 + A\\bar{B}I_2 + AB I_3", "terms": [{"term": "Y", "explanation": "Multiplexer output"}]}],
            derivation=[
                "Step 1: Write the MUX Boolean equation with $S_1 = A$ and $S_0 = B$:",
                "$Y = \\bar{A}\\bar{B}(0) + \\bar{A}B(1) + A\\bar{B}(1) + AB(0)$.",
                "Step 2: Simplify: $Y = \\bar{A}B + A\\bar{B}$.",
                "Step 3: This is the definition of the 2-input XOR gate: $Y = A \\oplus B$.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A",
            alternative="Truth table: when $(A, B) = (0, 1)$ or $(1, 0)$, $Y=1$. When inputs are identical $(0, 0)$ or $(1, 1)$, $Y=0$. This is strictly XOR behavior.",
            mistakes=["Confusing XOR ($0, 1, 1, 0$) with XNOR ($1, 0, 0, 1$)."],
            tags=["Digital Circuits", "Combinational Logic", "Multiplexer", "XOR Gate", "MUX Realization"]
        )
        questions.append(q)

    # Set 2B: Full Adders & Decoders (35 questions)
    for fa_i in range(35):
        qid = f"PRAC-DIG-{idx:03d}"
        idx += 1
        n_bits = 4 + (fa_i % 5) * 4 # 4, 8, 12, 16, 20 bits
        t_fa_ns = 10 # 10 ns
        # Ripple carry delay = n * t_fa
        tot_delay = n_bits * t_fa_ns
        stmt = f"An ${n_bits}$-bit ripple-carry adder is constructed by cascading ${n_bits}$ identical 1-bit full adders. If the carry propagation delay through each full adder is $t_{{carry}} = {t_fa_ns}\\text{{ ns}}$, the total worst-case carry propagation delay of the adder is ________ ns."
        ans = str(tot_delay)
        q = make_question(
            qid=qid,
            subject="Digital Circuits",
            topic="Combinational Logic",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the worst-case propagation delay of an n-bit ripple carry adder.",
            given_info=[f"Word length $n = {n_bits}$ bits", f"Carry delay per full adder $t_{{carry}} = {t_fa_ns}\\text{{ ns}}$"],
            concept="In a ripple-carry adder, carry ripples sequentially from least significant bit (LSB) to most significant bit (MSB). The worst-case delay is $T_{total} = n \\times t_{carry}$.",
            formulas=[{"formula": "T_{total} = n \\cdot t_{carry}", "terms": [{"term": "n", "explanation": "Number of cascaded adder stages"}]}],
            derivation=[
                f"Step 1: Number of cascaded 1-bit stages: $n = {n_bits}$.",
                f"Step 2: Carry delay per stage: $t_{{carry}} = {t_fa_ns}\\text{{ ns}}$.",
                f"Step 3: Total delay: $T = {n_bits} \\times {t_fa_ns}\\text{{ ns}} = {tot_delay}\\text{{ ns}}$."
            ],
            final_answer=f"{tot_delay} ns",
            alternative="To overcome this $O(n)$ delay, Lookahead Carry Adders (CLA) compute carries in parallel in $O(1)$ delay.",
            mistakes=["Dividing by $n$ or assuming parallel carry propagation in a ripple adder."],
            tags=["Digital Circuits", "Combinational Logic", "Full Adder", "Ripple Carry Adder", "Propagation Delay"]
        )
        questions.append(q)

    # ==========================================
    # 3. SEQUENTIAL CIRCUITS (~65 questions)
    # ==========================================
    # Set 3A: Counters & Modulo States (35 questions)
    for cnt_i in range(35):
        qid = f"PRAC-DIG-{idx:03d}"
        idx += 1
        n_ff = (cnt_i % 4) + 3 # 3, 4, 5, 6 flip-flops
        is_johnson = (cnt_i % 2 == 0)
        if is_johnson:
            mod_states = 2 * n_ff
            stmt = f"A Johnson (twisted-ring) counter is constructed using {n_ff} flip-flops. The total number of distinct valid states in the counting sequence (MOD number) is ________."
        else:
            mod_states = n_ff
            stmt = f"A simple ring counter is constructed using {n_ff} flip-flops. The total number of distinct states in its sequence is ________."

        ans = str(mod_states)
        q = make_question(
            qid=qid,
            subject="Digital Circuits",
            topic="Sequential Circuits",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding=f"Determine the modulo (number of valid states) of a {'Johnson counter' if is_johnson else 'ring counter'}.",
            given_info=[f"Number of flip-flops $n = {n_ff}$", f"Counter topology: {'Johnson (twisted ring) counter' if is_johnson else 'Ring counter'}"],
            concept=f"A ring counter with $n$ flip-flops has $n$ states. A Johnson (twisted ring) counter with $n$ flip-flops has $2n$ states (and $2^n - 2n$ unused states). A binary ripple counter has $2^n$ states.",
            formulas=[{"formula": "\\text{States} = 2n \\quad (\\text{Johnson}) \\quad \\text{or} \\quad n \\quad (\\text{Ring})", "terms": [{"term": "n", "explanation": "Number of flip-flops"}]}],
            derivation=[
                f"Step 1: Number of flip-flops is $n = {n_ff}$.",
                f"Step 2: {'For a Johnson counter, inverted feedback doubles the number of states to $2n$.' if is_johnson else 'For a ring counter, a single circulating 1 gives exactly $n$ states.'}",
                f"Step 3: Total states $= {'2 \\times ' + str(n_ff) + ' = ' + str(mod_states) if is_johnson else str(mod_states)}$."
            ],
            final_answer=str(mod_states),
            alternative=f"{'Unused states = ' + str(2**n_ff - mod_states) if is_johnson else 'Unused states = ' + str(2**n_ff - mod_states)}.",
            mistakes=[f"Confusing Johnson counter ($2n$) with binary counter ($2^n = {2**n_ff}$)."],
            tags=["Digital Circuits", "Sequential Circuits", "Counters", "Ring Counter", "Johnson Counter"]
        )
        questions.append(q)

    # Set 3B: Setup Time, Hold Time & Max Clock Frequency (30 questions)
    for clk_i in range(30):
        qid = f"PRAC-DIG-{idx:03d}"
        idx += 1
        tcq = 2.0  # 2 ns
        tcomb = 5.0 + (clk_i % 5) * 1.0 # 5, 6, 7, 8, 9 ns
        tsetup = 3.0 # 3 ns
        # Tclk_min = tcq + tcomb + tsetup
        tclk_min = tcq + tcomb + tsetup # 10 to 14 ns
        fmax_mhz = round(1000.0 / tclk_min, 1) # MHz
        stmt = f"In a synchronous digital system, two flip-flops are connected via combinational logic. The flip-flop clock-to-Q delay is $t_{{cq}} = {tcq}\\text{{ ns}}$, the setup time is $t_{{setup}} = {tsetup}\\text{{ ns}}$, and the combinational logic delay is $t_{{comb}} = {tcomb}\\text{{ ns}}$. Assuming zero clock skew, the maximum clock frequency $f_{{clk, \\max}}$ at which the circuit can reliably operate is ________ MHz (rounded off to one decimal place)."
        ans = [round(fmax_mhz - 0.5, 1), round(fmax_mhz + 0.5, 1)]
        q = make_question(
            qid=qid,
            subject="Digital Circuits",
            topic="Sequential Circuits",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Medium",
            understanding="Calculate the maximum allowable operating clock frequency constrained by flip-flop setup timing requirements.",
            given_info=[f"Clock-to-Q delay $t_{{cq}} = {tcq}\\text{{ ns}}$", f"Combinational logic delay $t_{{comb}} = {tcomb}\\text{{ ns}}$", f"Setup time $t_{{setup}} = {tsetup}\\text{{ ns}}$", "Clock skew = 0"],
            concept="To prevent setup time violations, the minimum clock period is given by $T_{clk, \\min} \\ge t_{cq} + t_{comb} + t_{setup}$. The maximum clock frequency is $f_{clk, \\max} = \\frac{1}{T_{clk, \\min}}$.",
            formulas=[{"formula": "T_{clk, \\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{\\max} = \\frac{1}{T_{clk, \\min}}", "terms": [{"term": "T_{clk, \\min}", "explanation": "Minimum allowable clock period"}]}],
            derivation=[
                f"Step 1: Compute minimum clock period: $T_{{clk, \\min}} = t_{{cq}} + t_{{comb}} + t_{{setup}}$.",
                f"Step 2: $T_{{clk, \\min}} = {tcq} + {tcomb} + {tsetup} = {tclk_min}\\text{{ ns}}$.",
                f"Step 3: Compute maximum clock frequency: $f_{{\\max}} = \\frac{{1}}{{{tclk_min} \\times 10^{{-9}}}} = \\frac{{1000}}{{{tclk_min}}}\\text{{ MHz}} = {fmax_mhz}\\text{{ MHz}}$."
            ],
            final_answer=f"fmax = {fmax_mhz} MHz",
            alternative="Formula shortcut: $f_{\\max} = \\frac{1000}{T_{clk}\\text{ (in ns)}}\\text{ MHz}$.",
            mistakes=["Including hold time $t_{hold}$ in the minimum clock period equation."],
            tags=["Digital Circuits", "Sequential Circuits", "Setup Time", "Clock Frequency", "Static Timing Analysis"]
        )
        questions.append(q)

    # ==========================================
    # 4. DATA CONVERTERS & MEMORIES (~65 questions)
    # ==========================================
    # Set 4A: DAC Resolution & Step Size (35 questions)
    for dac_i in range(35):
        qid = f"PRAC-DIG-{idx:03d}"
        idx += 1
        n_bits = (dac_i % 5) + 6 # 6, 7, 8, 9, 10 bits
        vfs = 5.0                # 5.0 V
        # step size = Vfs / (2^n - 1) in mV
        n_steps = (2 ** n_bits) - 1
        step_mv = round((vfs * 1000.0) / n_steps, 2)
        stmt = f"An ${n_bits}$-bit Digital-to-Analog Converter (DAC) has a full-scale reference voltage of $V_{{FS}} = {vfs}\\text{{ V}}$. The step size (analog resolution) of the DAC is ________ mV (rounded off to two decimal places)."
        ans = [round(step_mv - 0.05, 2), round(step_mv + 0.05, 2)]
        q = make_question(
            qid=qid,
            subject="Digital Circuits",
            topic="Data Converters & Memories",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the step size (voltage resolution) of an n-bit DAC.",
            given_info=[f"Resolution $n = {n_bits}$ bits", f"Full-scale voltage $V_{{FS}} = {vfs}\\text{{ V}}$"],
            concept="The resolution or step size of an n-bit DAC is the change in analog output voltage corresponding to a change of 1 LSB in digital input: $\\Delta = \\frac{V_{FS}}{2^n - 1}$.",
            formulas=[{"formula": "\\Delta = \\frac{V_{FS}}{2^n - 1}", "terms": [{"term": "\\Delta", "explanation": "Step size / resolution voltage"}]}],
            derivation=[
                f"Step 1: Total number of discrete steps is $2^n - 1 = 2^{{{n_bits}}} - 1 = {n_steps}$.",
                f"Step 2: Step size formula: $\\Delta = \\frac{{V_{{FS}}}}{{2^n - 1}} = \\frac{{{vfs}\\text{{ V}}}}{{{n_steps}}}$.",
                f"Step 3: Convert to millivolts: $\\Delta = \\frac{{{vfs * 1000}\\text{{ mV}}}}{{{n_steps}}} \\approx {step_mv}\\text{{ mV}}$."
            ],
            final_answer=f"Step size = {step_mv} mV",
            alternative="Approximate for large $n$: $\\Delta \\approx \\frac{V_{FS}}{2^n}$.",
            mistakes=["Dividing by $2^n$ instead of $2^n - 1$ for the exact full-scale definition."],
            tags=["Digital Circuits", "Data Converters", "DAC", "Resolution", "Step Size"]
        )
        questions.append(q)

    # Set 4B: ADC Types Comparison (30 questions)
    for adc_i in range(30):
        qid = f"PRAC-DIG-{idx:03d}"
        idx += 1
        stmt = "Which of the following Analog-to-Digital Converter (ADC) architectures provides the HIGHEST conversion speed (fastest conversion time of 1 clock cycle)?"
        opts = [
            {"id": "A", "text": "Flash (Parallel Comparator) ADC"},
            {"id": "B", "text": "Successive Approximation Register (SAR) ADC"},
            {"id": "C", "text": "Dual-Slope Integrating ADC"},
            {"id": "D", "text": "Counter-Ramp ADC"}
        ]
        q = make_question(
            qid=qid,
            subject="Digital Circuits",
            topic="Data Converters & Memories",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Compare speed characteristics of standard ADC architectures.",
            given_info=["ADC types: Flash, SAR, Dual-slope, Counter-ramp."],
            concept="ADC Speed Hierarchy: 1. Flash ADC: Fastest ($1$ clock cycle, $2^n-1$ comparators). 2. SAR ADC: Medium speed ($n$ clock cycles). 3. Counter-type: Slow ($2^n$ clock cycles worst-case). 4. Dual-slope: Slowest ($2^{n+1}$ cycles, but highest accuracy and noise immunity).",
            formulas=[{"formula": "T_{conv} = 1 \\cdot T_{clk} \\quad (\\text{Flash ADC})", "terms": [{"term": "T_{conv}", "explanation": "Conversion time"}]}],
            derivation=[
                "Step 1: Flash ADC uses $2^n - 1$ parallel comparators simultaneously.",
                "Step 2: All comparisons occur in parallel during a single clock pulse.",
                "Step 3: Conversion time is strictly 1 clock cycle.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A (Flash ADC)",
            alternative="Summary: Flash = fastest; Dual-slope = slowest but most noise immune.",
            mistakes=["Selecting SAR ADC (which takes $n$ cycles, not 1 cycle)."],
            tags=["Digital Circuits", "Data Converters", "Flash ADC", "SAR ADC", "ADC Comparison"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} Digital Circuits practice questions.")
    return questions

