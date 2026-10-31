import math
from .common import make_question

def generate_signals_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. CONTINUOUS & DISCRETE TIME SIGNALS (~55 questions)
    # ==========================================
    # Set 1A: Energy & Power Signals (25 questions)
    for sig_i in range(25):
        qid = f"PRAC-SIG-{idx:03d}"
        idx += 1
        a_val = (sig_i % 5) + 2 # 2, 3, 4, 5, 6
        # Signal x(t) = e^(-a*t) * u(t) -> Energy E = \int_0^\infty e^(-2at) dt = 1 / (2a)
        energy = round(1.0 / (2.0 * a_val), 3)
        stmt = f"Consider the continuous-time signal $x(t) = e^{{-{a_val}t}} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places)."
        ans = [round(energy - 0.01, 3), round(energy + 0.01, 3)]
        q = make_question(
            qid=qid,
            subject="Signals and Systems",
            topic="Continuous-Time & Discrete-Time Signals",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the total energy of a causal exponentially decaying continuous-time signal.",
            given_info=[f"Signal: $x(t) = e^{{-{a_val}t}} u(t)$", f"Decay factor $a = {a_val}$"],
            concept="The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
            formulas=[{"formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}", "terms": [{"term": "E", "explanation": "Total signal energy in Joules"}]}],
            derivation=[
                f"Step 1: Set up the energy integral: $E = \\int_{{-\\infty}}^{{\\infty}} |x(t)|^2 dt$.",
                f"Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
                f"$$E = \\int_0^{{\\infty}} (e^{{-{a_val}t}})^2 dt = \\int_0^{{\\infty}} e^{{-{2*a_val}t}} dt$$.",
                f"Step 3: Integrate: $\\left[ \\frac{{e^{{-{2*a_val}t}}}}{{-{2*a_val}}} \\right]_0^{{\\infty}} = 0 - \\left( -\\frac{{1}}{{{2*a_val}}} \\right) = \\frac{{1}}{{{2*a_val}}} = {energy}\\text{{ J}}$."
            ],
            final_answer=f"E = {energy} J",
            alternative="Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
            mistakes=["Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."],
            tags=["Signals and Systems", "Signal Energy", "Continuous Time", "Exponential Signal"]
        )
        questions.append(q)

    # Set 1B: Periodicity of Discrete-Time Signals (30 questions)
    for per_i in range(30):
        qid = f"PRAC-SIG-{idx:03d}"
        idx += 1
        m_num = (per_i % 4) + 1 # 1, 2, 3, 4
        n_den = 5 + (per_i % 3) # 5, 6, 7
        # w0 = 2 * pi * m / N -> fundamental period N
        g = math.gcd(m_num, n_den)
        m_red = m_num // g
        n_red = n_den // g
        stmt = f"A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{{{2*m_red}\\pi}}{{{n_red}}} n\\right)$. The fundamental period $N$ of the sequence is equal to ________."
        ans = str(n_red)
        q = make_question(
            qid=qid,
            subject="Signals and Systems",
            topic="Continuous-Time & Discrete-Time Signals",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
            given_info=[f"Discrete frequency $\\omega_0 = \\frac{{{2*m_red}\\pi}}{{{n_red}}}\\text{{ rad/sample}}$"],
            concept="A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
            formulas=[{"formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)", "terms": [{"term": "N", "explanation": "Smallest positive integer period"}]}],
            derivation=[
                f"Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{{{2*m_red}\\pi}}{{{n_red}}}$.",
                f"Step 2: Check rationality: $\\frac{{\\omega_0}}{{2\\pi}} = \\frac{{{m_red}}}{{{n_red}}}$.",
                f"Step 3: Since $\\gcd({m_red}, {n_red}) = 1$, the fraction is in lowest terms.",
                f"Step 4: The fundamental period is the denominator: $N = {n_red}$."
            ],
            final_answer=f"N = {n_red}",
            alternative="Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times " + str(n_red) + "}{2\\pi \\times " + str(m_red) + "} \\times " + str(m_red) + " = " + str(n_red) + "$.",
            mistakes=["Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."],
            tags=["Signals and Systems", "Discrete Time", "Periodicity", "Fundamental Period"]
        )
        questions.append(q)

    # ==========================================
    # 2. LTI SYSTEMS & CONVOLUTION (~55 questions)
    # ==========================================
    # Set 2A: Discrete Convolution Sum (30 questions)
    for conv_i in range(30):
        qid = f"PRAC-SIG-{idx:03d}"
        idx += 1
        l_x = (conv_i % 4) + 3 # 3, 4, 5, 6
        l_h = (conv_i % 3) + 2 # 2, 3, 4
        # Duration of y[n] = l_x + l_h - 1
        l_y = l_x + l_h - 1
        stmt = f"A discrete-time LTI system with impulse response $h[n]$ of duration {l_h} samples is excited by an input signal $x[n]$ of duration {l_x} samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________."
        ans = str(l_y)
        q = make_question(
            qid=qid,
            subject="Signals and Systems",
            topic="LTI Systems & Convolution",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the support length of the convolution of two finite-length discrete-time sequences.",
            given_info=[f"Length of $x[n]$: $L_x = {l_x}$", f"Length of $h[n]$: $L_h = {l_h}$"],
            concept="If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
            formulas=[{"formula": "L_y = L_x + L_h - 1", "terms": [{"term": "L_y", "explanation": "Total number of non-zero output samples"}]}],
            derivation=[
                f"Step 1: Length of input: $L_x = {l_x}$.",
                f"Step 2: Length of impulse response: $L_h = {l_h}$.",
                f"Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
                f"Step 4: $L_y = {l_x} + {l_h} - 1 = {l_y}$ samples."
            ],
            final_answer=f"{l_y} samples",
            alternative="Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
            mistakes=["Adding the lengths directly ($L_x + L_h$) without subtracting 1."],
            tags=["Signals and Systems", "Convolution", "LTI Systems", "Discrete Convolution"]
        )
        questions.append(q)

    # Set 2B: BIBO Stability Criterion (25 questions)
    for stab_i in range(25):
        qid = f"PRAC-SIG-{idx:03d}"
        idx += 1
        stmt = "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?"
        opts = [
            {"id": "A", "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"},
            {"id": "B", "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"},
            {"id": "C", "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"},
            {"id": "D", "text": "The system transfer function has at least one pole at the origin $s = 0$"}
        ]
        q = make_question(
            qid=qid,
            subject="Signals and Systems",
            topic="LTI Systems & Convolution",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
            given_info=["LTI system with continuous-time impulse response $h(t)$."],
            concept="An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
            formulas=[{"formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty", "terms": [{"term": "|h(t)|", "explanation": "Absolute magnitude of impulse response"}]}],
            derivation=[
                "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
                "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
                "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
                "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A",
            alternative="In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
            mistakes=["Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."],
            tags=["Signals and Systems", "BIBO Stability", "LTI Systems", "Impulse Response"]
        )
        questions.append(q)

    # ==========================================
    # 3. FOURIER TRANSFORM & SERIES (~55 questions)
    # ==========================================
    # Set 3A: Continuous-Time Fourier Transform Pairs & Properties (30 questions)
    for ft_i in range(30):
        qid = f"PRAC-SIG-{idx:03d}"
        idx += 1
        a_f = (ft_i % 5) + 1 # 1, 2, 3, 4, 5
        stmt = f"The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{{-{a_f}|t|}}$ is:"
        denom = a_f ** 2
        opts = [
            {"id": "A", "text": f"$\\frac{{{2*a_f}}}{{{denom} + \\omega^2}}$"},
            {"id": "B", "text": f"$\\frac{{{a_f}}}{{{denom} + \\omega^2}}$"},
            {"id": "C", "text": f"$\\frac{{{2*a_f}}}{{{a_f} + j\\omega}}$"},
            {"id": "D", "text": f"$\\frac{{1}}{{{denom} - \\omega^2}}$"}
        ]
        q = make_question(
            qid=qid,
            subject="Signals and Systems",
            topic="Fourier Transform & Series",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Evaluate the CTFT of a symmetric bilateral exponential signal.",
            given_info=[f"Signal: $x(t) = e^{{-{a_f}|t|}}$"],
            concept="For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
            formulas=[{"formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}", "terms": [{"term": "X(\\omega)", "explanation": "Purely real and even spectrum"}]}],
            derivation=[
                f"Step 1: Write $x(t)$ as $e^{{-{a_f}t}}u(t) + e^{{{a_f}t}}u(-t)$.",
                f"Step 2: $\\mathcal{{F}}\\{{e^{{-{a_f}t}}u(t)\\}} = \\frac{{1}}{{{a_f} + j\\omega}}$.",
                f"Step 3: $\\mathcal{{F}}\\{{e^{{{a_f}t}}u(-t)\\}} = \\frac{{1}}{{{a_f} - j\\omega}}$.",
                f"Step 4: Add terms: $X(\\omega) = \\frac{{1}}{{{a_f} + j\\omega}} + \\frac{{1}}{{{a_f} - j\\omega}} = \\frac{{({a_f} - j\\omega) + ({a_f} + j\\omega)}}{{{a_f}^2 + \\omega^2}} = \\frac{{{2*a_f}}}{{{denom} + \\omega^2}}$.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A",
            alternative="Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
            mistakes=["Missing the factor of 2 in the numerator (Option B)."],
            tags=["Signals and Systems", "Fourier Transform", "CTFT", "Even Signal Spectrum"]
        )
        questions.append(q)

    # Set 3B: Parseval's Energy Theorem (25 questions)
    for par_i in range(25):
        qid = f"PRAC-SIG-{idx:03d}"
        idx += 1
        w_b = (par_i % 4) + 2 # 2, 3, 4, 5 rad/s
        # x(t) has X(w) = 1 for |w| <= w_b, 0 elsewhere
        # Total energy E = 1 / (2*pi) * \int_{-w_b}^{w_b} 1^2 dw = 2*w_b / (2*pi) = w_b / pi
        stmt = f"A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{{cases}} 1, & |\\omega| \\le {w_b}\\text{{ rad/s}} \\\\ 0, & |\\omega| > {w_b}\\text{{ rad/s}} \\end{{cases}}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{{k}}{{\\pi}}$ Joules. The integer $k$ is ________."
        ans = str(w_b)
        q = make_question(
            qid=qid,
            subject="Signals and Systems",
            topic="Fourier Transform & Series",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
            given_info=[f"Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le {w_b}\\text{{ rad/s}}$, zero elsewhere"],
            concept="Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
            formulas=[{"formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega", "terms": [{"term": "2\\pi", "explanation": "Normalization factor for angular frequency"}]}],
            derivation=[
                f"Step 1: Set up Parseval's energy integral: $E = \\frac{{1}}{{2\\pi}} \\int_{{-{w_b}}}^{{{w_b}}} (1)^2 d\\omega$.",
                f"Step 2: Evaluate: $E = \\frac{{1}}{{2\\pi}} [\\omega]_{{-{w_b}}}^{{{w_b}}} = \\frac{{1}}{{2\\pi}} ({w_b} - (-{w_b})) = \\frac{{2{w_b}}}{{2\\pi}} = \\frac{{{w_b}}}{{\\pi}}\\text{{ J}}$.",
                f"Step 3: Comparing with $\\frac{{k}}{{\\pi}}$, we find $k = {w_b}$."
            ],
            final_answer=f"k = {w_b}",
            alternative="Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times " + str(w_b) + ")}{2\\pi} = \\frac{" + str(w_b) + "}{\\pi}$.",
            mistakes=["Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."],
            tags=["Signals and Systems", "Parseval Theorem", "Signal Energy", "Fourier Transform"]
        )
        questions.append(q)

    # ==========================================
    # 4. LAPLACE TRANSFORM & Z-TRANSFORM (~55 questions)
    # ==========================================
    # Set 4A: Laplace Transform & ROC (30 questions)
    for lap_i in range(30):
        qid = f"PRAC-SIG-{idx:03d}"
        idx += 1
        p_pole = (lap_i % 4) + 2 # 2, 3, 4, 5
        stmt = f"The bilateral Laplace transform of the signal $x(t) = -e^{{-{p_pole}t}} u(-t)$ is $X(s) = \\frac{{1}}{{s + {p_pole}}}$. The corresponding Region of Convergence (ROC) is:"
        opts = [
            {"id": "A", "text": f"$\\text{{Re}}(s) < -{p_pole}$"},
            {"id": "B", "text": f"$\\text{{Re}}(s) > -{p_pole}$"},
            {"id": "C", "text": f"$-{p_pole} < \\text{{Re}}(s) < 0$"},
            {"id": "D", "text": "Entire $s$-plane except $s = 0$"}
        ]
        q = make_question(
            qid=qid,
            subject="Signals and Systems",
            topic="Laplace Transform & z-Transform",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
            given_info=[f"Signal: $x(t) = -e^{{-{p_pole}t}}u(-t)$"],
            concept="For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
            formulas=[{"formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a", "terms": [{"term": "\\text{Re}(s) < -a", "explanation": "Left half-plane ROC bounded by pole"}]}],
            derivation=[
                f"Step 1: $X(s) = \\int_{{-\\infty}}^0 -e^{{-{p_pole}t}} e^{{-st}}dt = -\\int_{{-\\infty}}^0 e^{{-(s + {p_pole})t}}dt$.",
                f"Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
                f"$-(\\sigma + {p_pole})t > 0$ for $t < 0 \\implies -(\\sigma + {p_pole}) < 0 \\implies \\sigma < -{p_pole}$.",
                f"Step 3: Evaluating the integral yields $\\frac{{1}}{{s + {p_pole}}}$ with convergence region $\\text{{Re}}(s) < -{p_pole}$.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A",
            alternative="ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
            mistakes=["Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."],
            tags=["Signals and Systems", "Laplace Transform", "ROC", "Left-Sided Signal"]
        )
        questions.append(q)

    # Set 4B: z-Transform & Stability (25 questions)
    for zt_i in range(25):
        qid = f"PRAC-SIG-{idx:03d}"
        idx += 1
        pole_val = [0.5, 0.8, 1.2, 0.25][zt_i % 4]
        is_stable = pole_val < 1.0
        stmt = f"A causal discrete-time LTI system has a transfer function $H(z) = \\frac{{1}}{{1 - {pole_val} z^{{-1}}}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?"
        opts = [
            {"id": "A", "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"},
            {"id": "B", "text": "The system is UNSTABLE because the pole lies outside the unit circle"},
            {"id": "C", "text": "The system is marginally stable"},
            {"id": "D", "text": "Stability cannot be determined without knowing the input sequence"}
        ] if is_stable else [
            {"id": "A", "text": "The system is UNSTABLE because the pole lies strictly outside the unit circle"},
            {"id": "B", "text": "The system is BIBO STABLE"},
            {"id": "C", "text": "The system is marginally stable with sustained oscillations"},
            {"id": "D", "text": "The system is stable only for sinusoidal inputs"}
        ]
        q = make_question(
            qid=qid,
            subject="Signals and Systems",
            topic="Laplace Transform & z-Transform",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
            given_info=[f"Transfer function: $H(z) = \\frac{{1}}{{1 - {pole_val}z^{{-1}}}}$", "Causal system ($|z| > |p|$)"],
            concept="A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
            formulas=[{"formula": "|z_p| < 1 \\iff \\text{BIBO Stable}", "terms": [{"term": "|z_p|", "explanation": "Magnitude of the system pole"}]}],
            derivation=[
                f"Step 1: Find the pole of $H(z)$: set denominator $1 - {pole_val}z^{{-1}} = 0 \\implies z = {pole_val}$.",
                f"Step 2: Compute pole magnitude: $|z| = {pole_val}$.",
                f"Step 3: Compare with unit circle radius $1.0$: $|z| = {pole_val} " + ("< 1.0$" if is_stable else "> 1.0$") + ".",
                f"Step 4: Since system is causal, the ROC is $|z| > {pole_val}$." + (" The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable." if is_stable else " The unit circle is NOT in the ROC, so the system is unstable.")
            ],
            final_answer="Option A",
            alternative="Inverse z-transform gives impulse response $h[n] = (" + str(pole_val) + ")^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
            mistakes=["Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."],
            tags=["Signals and Systems", "z-Transform", "BIBO Stability", "Unit Circle", "Poles"]
        )
        questions.append(q)

    # ==========================================
    # 5. SAMPLING THEOREM (~50 questions)
    # ==========================================
    # Set 5A: Nyquist Rate & Nyquist Interval (50 questions)
    for samp_i in range(50):
        qid = f"PRAC-SIG-{idx:03d}"
        idx += 1
        fm_hz = 1000 + (samp_i % 8) * 500 # 1000, 1500, 2000, 2500, ... Hz
        # Nyquist rate fs = 2 * fm
        fs_nyq = 2 * fm_hz
        # Nyquist interval Ts = 1 / fs = 1 / (2*fm) in ms
        ts_ms = round(1000.0 / fs_nyq, 3)
        stmt = f"A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = {fm_hz}\\text{{ Hz}}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz."
        ans = str(fs_nyq)
        q = make_question(
            qid=qid,
            subject="Signals and Systems",
            topic="Sampling Theorem",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
            given_info=[f"Maximum signal frequency $f_m = {fm_hz}\\text{{ Hz}}$"],
            concept="Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
            formulas=[{"formula": "f_{s, \\min} = 2 f_m", "terms": [{"term": "f_{s, \\min}", "explanation": "Nyquist rate in Hz or samples/second"}]}],
            derivation=[
                f"Step 1: Identify maximum frequency in message: $f_m = {fm_hz}\\text{{ Hz}}$.",
                f"Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
                f"Step 3: $f_s = 2 \\times {fm_hz} = {fs_nyq}\\text{{ Hz}}$."
            ],
            final_answer=f"{fs_nyq} Hz",
            alternative="In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{" + str(fs_nyq) + "} = " + str(ts_ms) + "\\text{ ms}$.",
            mistakes=["Taking $f_s = f_m$ instead of $2 f_m$.", "Confusing cyclic frequency $f$ with angular frequency $\\omega$."],
            tags=["Signals and Systems", "Sampling Theorem", "Nyquist Rate", "Aliasing"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} Signals and Systems practice questions.")
    return questions

