import math
from .common import make_question

def generate_emt_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. ELECTROSTATICS & MAGNETOSTATICS (~55 questions)
    # ==========================================
    # Set 1A: Capacitance & Electric Boundary Conditions (55 questions)
    for em_i in range(55):
        qid = f"PRAC-EMT-{idx:03d}"
        idx += 1
        eps_r = (em_i % 5) + 2 # 2, 3, 4, 5, 6
        stmt = f"A charge-free dielectric interface lies on the $z = 0$ plane, separating medium 1 ($z > 0$, $\\epsilon_{{r1}} = 1$) from medium 2 ($z < 0$, $\\epsilon_{{r2}} = {eps_r}$). If the electric field in medium 1 is $\\vec{{E}}_1 = 3\\hat{{a}}_x + 4\\hat{{a}}_y + 12\\hat{{a}}_z\\text{{ V/m}}$, the $z$-component (normal component) of the electric field $\\vec{{E}}_2$ in medium 2 is ________ V/m."
        # Boundary condition: D_n1 = D_n2 -> eps1 * E_n1 = eps2 * E_n2
        # E_n2 = eps1 / eps2 * E_n1 = 1 / eps_r * 12
        en2 = round(12.0 / eps_r, 2)
        ans = [round(en2 - 0.05, 2), round(en2 + 0.05, 2)] if abs(en2 - round(en2)) > 1e-4 else str(int(round(en2)))
        q = make_question(
            qid=qid,
            subject="Electromagnetics",
            topic="Electrostatics & Magnetostatics",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Apply electromagnetic boundary conditions for normal components of the electric displacement field at a charge-free dielectric boundary.",
            given_info=[f"Medium 1 ($z > 0$): $\\epsilon_{{r1}} = 1$", f"Medium 2 ($z < 0$): $\\epsilon_{{r2}} = {eps_r}$", "Normal field $E_{{n1}} = 12\\text{{ V/m}}$", "Charge-free interface ($\\rho_s = 0$)"],
            concept="At a charge-free dielectric interface ($\rho_s = 0$), the normal component of electric flux density is continuous: $D_{n1} = D_{n2} \\implies \\epsilon_1 E_{n1} = \\epsilon_2 E_{n2}$.",
            formulas=[{"formula": "E_{n2} = \\frac{\\epsilon_1}{\\epsilon_2}E_{n1} = \\frac{\\epsilon_{r1}}{\\epsilon_{r2}}E_{n1}", "terms": [{"term": "D_{n1} = D_{n2}", "explanation": "Continuity of normal electric displacement field"}]}],
            derivation=[
                f"Step 1: Normal vector to the interface $z = 0$ is $\\hat{{a}}_z$.",
                f"Step 2: The normal electric field in medium 1 is $E_{{n1}} = 12\\text{{ V/m}}$.",
                f"Step 3: Boundary condition at charge-free interface: $\\epsilon_1 E_{{n1}} = \\epsilon_2 E_{{n2}}$.",
                f"Step 4: $E_{{n2}} = \\frac{{\\epsilon_{{r1}}}}{{\\epsilon_{{r2}}}} E_{{n1}} = \\frac{{1}}{{{eps_r}}} \\times 12 = \\frac{{12}}{{{eps_r}}} = {en2}\\text{{ V/m}}$."
            ],
            final_answer=f"En2 = {en2} V/m",
            alternative="Remember: Tangential $\\vec{E}$ is continuous ($E_{t1} = E_{t2}$), while normal $\\vec{E}$ steps down by the dielectric constant ratio $\\epsilon_1 / \\epsilon_2$.",
            mistakes=["Multiplying by $\\epsilon_{r2}$ instead of dividing."],
            tags=["Electromagnetics", "Electrostatics", "Boundary Conditions", "Dielectric Interface", "Displacement Field"]
        )
        questions.append(q)

    # ==========================================
    # 2. MAXWELL'S EQUATIONS (~55 questions)
    # ==========================================
    # Set 2A: Displacement Current & Continuity (55 questions)
    for max_i in range(55):
        qid = f"PRAC-EMT-{idx:03d}"
        idx += 1
        w_rad = (max_i % 5) + 1 # 1, 2, 3, 4, 5 x 10^9 rad/s
        stmt = f"In a lossless dielectric medium with relative permittivity $\\epsilon_r = 4.0$ and $\\mu_r = 1.0$, the electric field of an electromagnetic wave is $\\vec{{E}} = 10\\cos({w_rad} \\times 10^9 t - \\beta z)\\hat{{a}}_x\\text{{ V/m}}$. Given permittivity of free space $\\epsilon_0 = \\frac{{1}}{{36\\pi \\times 10^9}}\\text{{ F/m}}$, the amplitude of the displacement current density $\\vec{{J}}_d$ is ________ A/m$^2$ (rounded off to two decimal places)."
        # J_d = eps * dE/dt = eps_r * eps0 * (-10 * w * sin(...))
        # Amplitude = eps_r * eps0 * 10 * w = 4 * (1 / (36*pi * 1e9)) * 10 * (w_rad * 1e9) = (40 * w_rad) / (36 * pi)
        jd_amp = round((40.0 * w_rad) / (36.0 * math.pi), 2)
        ans = [round(jd_amp - 0.05, 2), round(jd_amp + 0.05, 2)]
        q = make_question(
            qid=qid,
            subject="Electromagnetics",
            topic="Maxwell's Equations & Boundary Conditions",
            qtype="NAT",
            marks=2,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Medium",
            understanding="Compute the displacement current density amplitude $\\vec{J}_d$ from a time-harmonic electric field.",
            given_info=[f"$\\vec{{E}} = 10\\cos({w_rad} \\times 10^9 t - \\beta z)\\hat{{a}}_x\\text{{ V/m}}$", f"Relative permittivity $\\epsilon_r = 4.0$", f"$\\omega = {w_rad} \\times 10^9\\text{{ rad/s}}$", f"$\\epsilon_0 = \\frac{{1}}{{36\\pi \\times 10^9}}\\text{{ F/m}}$"],
            concept="Displacement current density introduced by Maxwell is $\\vec{J}_d = \\frac{\\partial \\vec{D}}{\\partial t} = \\epsilon \\frac{\\partial \\vec{E}}{\\partial t}$.",
            formulas=[{"formula": "\\vec{J}_d = \\epsilon_r \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}", "terms": [{"term": "J_d", "explanation": "Displacement current density in A/m^2"}]}],
            derivation=[
                f"Step 1: Compute time derivative: $\\frac{{\\partial \\vec{{E}}}}{{\\partial t}} = -10({w_rad} \\times 10^9)\\sin({w_rad} \\times 10^9 t - \\beta z)\\hat{{a}}_x$.",
                f"Step 2: Amplitude of $\\frac{{\\partial \\vec{{E}}}}{{\\partial t}}$ is $10({w_rad} \\times 10^9) = {10 * w_rad} \\times 10^9\\text{{ V/(m\\cdot s)}}$.",
                f"Step 3: $\\epsilon = \\epsilon_r \\epsilon_0 = 4 \\times \\frac{{1}}{{36\\pi \\times 10^9}} = \\frac{{1}}{{9\\pi \\times 10^9}}\\text{{ F/m}}$.",
                f"Step 4: Amplitude of $\\vec{{J}}_d = \\epsilon \\times |\\partial E/\\partial t| = \\frac{{1}}{{9\\pi \\times 10^9}} \\times ({10 * w_rad} \\times 10^9) = \\frac{{{10 * w_rad}}}{{9\\pi}} \\approx {jd_amp}\\text{{ A/m}}^2$."
            ],
            final_answer=f"Jd = {jd_amp} A/m^2",
            alternative="Shortcut: $|J_d| = \\omega \\epsilon E_0 = ({w_rad} \\times 10^9) \\times (4 \\times \\epsilon_0) \\times 10 = {jd_amp}\\text{ A/m}^2$.",
            mistakes=["Omitting $\\epsilon_r$ (using only $\\epsilon_0$)."],
            tags=["Electromagnetics", "Maxwell Equations", "Displacement Current", "Permittivity", "Plane Waves"]
        )
        questions.append(q)

    # ==========================================
    # 3. PLANE WAVES & POLARIZATION (~55 questions)
    # ==========================================
    # Set 3A: Wave Impedance & Phase Velocity (30 questions)
    for pw_i in range(30):
        qid = f"PRAC-EMT-{idx:03d}"
        idx += 1
        er = [4, 9, 16, 25][pw_i % 4]
        # vp = c / sqrt(er) = 3e8 / sqrt(er)
        vp_e8 = round(3.0 / math.sqrt(er), 2) # e.g. 1.5, 1.0, 0.75, 0.60
        # eta = 377 / sqrt(er) = 120 * pi / sqrt(er)
        eta = round(377.0 / math.sqrt(er), 1)
        stmt = f"A uniform plane wave propagates in a lossless non-magnetic dielectric medium with $\\epsilon_r = {er}$ and $\\mu_r = 1$. The intrinsic wave impedance $\\eta$ of the medium is ________ $\\Omega$ (rounded off to the nearest integer)."
        ans = [round(eta - 2), round(eta + 2)]
        q = make_question(
            qid=qid,
            subject="Electromagnetics",
            topic="Plane Waves & Polarization",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the intrinsic wave impedance of a non-magnetic dielectric medium.",
            given_info=[f"Relative permittivity $\\epsilon_r = {er}$", "Relative permeability $\\mu_r = 1$", "Lossless medium ($\\sigma = 0$)"],
            concept="The intrinsic impedance of a lossless medium is $\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} = \\sqrt{\\frac{\\mu_0 \\mu_r}{\\epsilon_0 \\epsilon_r}} = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}}$, where free space impedance is $\\eta_0 \\approx 120\\pi \\approx 377\\,\\Omega$.",
            formulas=[{"formula": "\\eta = \\frac{\\eta_0}{\\sqrt{\\epsilon_r}} = \\frac{377}{\\sqrt{\\epsilon_r}}\\,\\Omega", "terms": [{"term": "\\eta_0", "explanation": "Intrinsic impedance of free space ~ 377 ohm"}]}],
            derivation=[
                f"Step 1: Formula: $\\eta = \\frac{{\\eta_0}}{{\\sqrt{{\\epsilon_r}}}}$.",
                f"Step 2: $\\sqrt{{\\epsilon_r}} = \\sqrt{{{er}}} = {int(math.sqrt(er))}$.",
                f"Step 3: $\\eta = \\frac{{377}}{{{int(math.sqrt(er))}}} \\approx {int(round(eta))}\\,\\Omega$."
            ],
            final_answer=f"eta = {int(round(eta))} ohm",
            alternative="Formula using $120\\pi$: $\\eta = \\frac{120\\pi}{" + str(int(math.sqrt(er))) + "} = " + str(int(120 / math.sqrt(er))) + "\\pi\\,\\Omega$.",
            mistakes=["Multiplying by $\\sqrt{\\epsilon_r}$ instead of dividing."],
            tags=["Electromagnetics", "Plane Waves", "Intrinsic Impedance", "Wave Velocity", "Permittivity"]
        )
        questions.append(q)

    # Set 3B: Polarization Classification (25 questions)
    for pol_i in range(25):
        qid = f"PRAC-EMT-{idx:03d}"
        idx += 1
        stmt = "The electric field of a uniform plane wave propagating in the $+z$ direction in free space is given by: $$\\vec{E}(z, t) = E_0 \\cos(\\omega t - \\beta z)\\hat{a}_x + E_0 \\sin(\\omega t - \\beta z)\\hat{a}_y$$ The state of polarization of the wave is:"
        opts = [
            {"id": "A", "text": "Left-Hand Circular Polarization (LHCP)"},
            {"id": "B", "text": "Right-Hand Circular Polarization (RHCP)"},
            {"id": "C", "text": "Linear polarization at 45° to the x-axis"},
            {"id": "D", "text": "Elliptical polarization"}
        ]
        q = make_question(
            qid=qid,
            subject="Electromagnetics",
            topic="Plane Waves & Polarization",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Medium",
            understanding="Determine the polarization state (linear, circular, elliptical) and handedness of an electromagnetic plane wave.",
            given_info=["$E_x(z, t) = E_0 \\cos(\\omega t - \\beta z)$", "$E_y(z, t) = E_0 \\sin(\\omega t - \\beta z) = E_0 \\cos(\\omega t - \\beta z - 90^\\circ)$", "Propagation along $+z$ direction"],
            concept="1. Equal amplitudes ($|E_x| = |E_y| = E_0$). 2. Phase difference $\\Delta\\phi = \\phi_y - \\phi_x = -90^\\circ$ (or $y$ lags $x$ by $90^\\circ$). 3. Equal amplitudes with $\\pm 90^\\circ$ phase shift produces Circular Polarization. By IEEE standard (thumb pointing in direction of wave propagation $+z$), rotation of $\\vec{E}$ with time at a fixed $z$ gives Left-Hand Circular Polarization (LHCP).",
            formulas=[{"formula": "\\vec{E} = E_0(\\hat{a}_x - j\\hat{a}_y)e^{-j\\beta z} \\implies \\text{LHCP}", "terms": [{"term": "\\text{LHCP}", "explanation": "Left-hand circular polarization (IEEE convention)"}]}],
            derivation=[
                "Step 1: Check amplitudes: $|E_x| = E_0$ and $|E_y| = E_0$. Amplitudes are equal.",
                "Step 2: Check phase: $E_y = E_0\\sin(\\omega t - \\beta z) = E_0\\cos(\\omega t - \\beta z - \\pi/2)$. Phase difference is $\\Delta\\phi = -90^\\circ$.",
                "Step 3: At $z = 0$, evaluate $\\vec{E}$ at successive time instants:",
                "- At $\\omega t = 0$: $\\vec{E} = E_0 \\hat{a}_x + 0\\hat{a}_y$ (pointing along $+x$).",
                "- At $\\omega t = \\pi/2$: $\\vec{E} = 0\\hat{a}_x + E_0 \\hat{a}_y$ (pointing along $+y$).",
                "Step 4: Looking in the direction of propagation (out of page $+z$), the vector rotates counter-clockwise with time, which corresponds to LHCP by IEEE convention.",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A (LHCP)",
            alternative="Use phasor notation: $\\vec{E} = E_0\\hat{a}_x - j E_0\\hat{a}_y = E_0(\\hat{a}_x - j\\hat{a}_y)$. The factor $-j$ on $y$ represents LHCP.",
            mistakes=["Confusing classical optics convention (looking towards the source) with engineering/IEEE convention (looking in the direction of propagation)."],
            tags=["Electromagnetics", "Plane Waves", "Polarization", "Circular Polarization", "LHCP"]
        )
        questions.append(q)

    # ==========================================
    # 4. TRANSMISSION LINES & SMITH CHART (~55 questions)
    # ==========================================
    # Set 4A: VSWR & Reflection Coefficient (30 questions)
    for tl_i in range(30):
        qid = f"PRAC-EMT-{idx:03d}"
        idx += 1
        z0 = 50.0 # 50 ohm
        zl = [100.0, 150.0, 25.0, 200.0, 75.0][tl_i % 5]
        # Gamma = (Zl - Z0) / (Zl + Z0)
        gamma = abs(zl - z0) / (zl + z0)
        # S = (1 + gamma) / (1 - gamma)
        vswr = round((1.0 + gamma) / (1.0 - gamma), 2)
        stmt = f"A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is terminated in a purely resistive load of $Z_L = {int(zl)}\\,\\Omega$. The Voltage Standing Wave Ratio (VSWR) on the line is ________ (rounded off to two decimal places)."
        ans = [round(vswr - 0.05, 2), round(vswr + 0.05, 2)] if abs(vswr - round(vswr)) > 1e-4 else str(int(round(vswr)))
        q = make_question(
            qid=qid,
            subject="Electromagnetics",
            topic="Transmission Lines & Smith Chart",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Evaluate the Voltage Standing Wave Ratio (VSWR) from load and characteristic impedances.",
            given_info=[f"Characteristic impedance $Z_0 = 50\\,\\Omega$", f"Load resistance $Z_L = {int(zl)}\\,\\Omega$"],
            concept="For purely resistive loads, $VSWR = \\frac{R_L}{Z_0}$ if $R_L > Z_0$, or $VSWR = \\frac{Z_0}{R_L}$ if $R_L < Z_0$. Generally, $VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}$.",
            formulas=[{"formula": "VSWR = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|}, \\quad \\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}", "terms": [{"term": "VSWR", "explanation": "Voltage standing wave ratio (\\ge 1)"}]}],
            derivation=[
                f"Step 1: Compute reflection coefficient: $\\Gamma = \\frac{{Z_L - Z_0}}{{Z_L + Z_0}} = \\frac{{{int(zl)} - 50}}{{{int(zl)} + 50}} = \\frac{{{int(zl - 50)}}}{{{int(zl + 50)}}}$.",
                f"Step 2: Magnitude $|\\Gamma| = {gamma:.3f}$.",
                f"Step 3: Compute VSWR: $S = \\frac{{1 + |\\Gamma|}}{{1 - |\\Gamma|}} = \\frac{{1 + {gamma:.3f}}}{{1 - {gamma:.3f}}} = {vswr}$."
            ],
            final_answer=f"VSWR = {vswr}",
            alternative="Direct ratio for resistive load: $VSWR = \\max\\left(\\frac{Z_L}{Z_0}, \\frac{Z_0}{Z_L}\\right) = \\max\\left(\\frac{" + str(int(zl)) + "}{50}, \\frac{50}{" + str(int(zl)) + "}\\right) = " + str(vswr) + "$.",
            mistakes=["Getting a VSWR less than 1 (VSWR is always $\\ge 1$)."],
            tags=["Electromagnetics", "Transmission Lines", "VSWR", "Reflection Coefficient", "Impedance Matching"]
        )
        questions.append(q)

    # Set 4B: Quarter-Wave Transformer (25 questions)
    for qw_i in range(25):
        qid = f"PRAC-EMT-{idx:03d}"
        idx += 1
        z_in = 50.0  # 50 ohm
        z_load = [200.0, 450.0, 800.0, 1250.0][qw_i % 4]
        # Z0_line = sqrt(Zin * Zload)
        z0_trans = round(math.sqrt(z_in * z_load), 1)
        stmt = f"A quarter-wavelength ($\\lambda/4$) lossless transmission line matching section is used to match a load of $Z_L = {int(z_load)}\\,\\Omega$ to a feeder line of characteristic impedance $Z_{{in}} = 50\\,\\Omega$. The required characteristic impedance $Z_0$ of the matching section is ________ $\\Omega$."
        ans = str(int(round(z0_trans)))
        q = make_question(
            qid=qid,
            subject="Electromagnetics",
            topic="Transmission Lines & Smith Chart",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Design a quarter-wave transformer by finding the required characteristic impedance.",
            given_info=[f"Feeder line impedance $Z_{{in}} = 50\\,\\Omega$", f"Terminating load $Z_L = {int(z_load)}\\,\\Omega$", "Length $l = \\lambda/4$"],
            concept="A quarter-wave transformer transforms impedance according to $Z_{in} = \\frac{Z_0^2}{Z_L}$. To match $Z_L$ to $Z_{in}$, the required line impedance is $Z_0 = \\sqrt{Z_{in} Z_L}$.",
            formulas=[{"formula": "Z_0 = \\sqrt{Z_{in} Z_L}", "terms": [{"term": "Z_0", "explanation": "Characteristic impedance of quarter-wave line"}]}],
            derivation=[
                f"Step 1: Formula for quarter-wave impedance transformer: $Z_0 = \\sqrt{{Z_{{in}} \\times Z_L}}$.",
                f"Step 2: $Z_{{in}} = 50\\,\\Omega$ and $Z_L = {int(z_load)}\\,\\Omega$.",
                f"Step 3: $Z_0 = \\sqrt{{50 \\times {int(z_load)}}} = \\sqrt{{{int(50 * z_load)}}} = {int(round(z0_trans))}\\,\\Omega$."
            ],
            final_answer=f"Z0 = {int(round(z0_trans))} ohm",
            alternative="Check: $Z_{in} = \\frac{Z_0^2}{Z_L} = \\frac{" + str(int(round(z0_trans))) + "^2}{" + str(int(z_load)) + "} = 50\\,\\Omega$.",
            mistakes=["Taking arithmetic average $(Z_{in} + Z_L)/2$ instead of geometric mean $\\sqrt{Z_{in} Z_L}$."],
            tags=["Electromagnetics", "Transmission Lines", "Quarter-Wave Transformer", "Impedance Matching"]
        )
        questions.append(q)

    # ==========================================
    # 5. WAVEGUIDES & ANTENNAS (~50 questions)
    # ==========================================
    # Set 5A: Rectangular Waveguide Cutoff Frequency (25 questions)
    for wg_i in range(25):
        qid = f"PRAC-EMT-{idx:03d}"
        idx += 1
        a_cm = 3.0 + (wg_i % 4) * 1.0 # 3, 4, 5, 6 cm
        # TE10 cutoff: fc = c / (2 * a)
        # a in m = a_cm / 100
        # fc = 3e8 / (2 * (a_cm / 100)) = 3e10 / (2 * a_cm) = 15 / a_cm GHz
        fc_ghz = round(15.0 / a_cm, 2)
        stmt = f"An air-filled rectangular metallic waveguide has broad wall dimension $a = {a_cm:.1f}\\text{{ cm}}$ and narrow wall dimension $b = 1.5\\text{{ cm}}$. The cutoff frequency $f_c$ for the dominant $TE_{{10}}$ mode is ________ GHz (rounded off to two decimal places)."
        ans = [round(fc_ghz - 0.05, 2), round(fc_ghz + 0.05, 2)] if abs(fc_ghz - round(fc_ghz)) > 1e-4 else str(int(round(fc_ghz)))
        q = make_question(
            qid=qid,
            subject="Electromagnetics",
            topic="Waveguides & Antennas",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the cutoff frequency of the dominant TE10 mode in an air-filled rectangular waveguide.",
            given_info=[f"Broad dimension $a = {a_cm:.1f}\\text{{ cm}}$", "Narrow dimension $b = 1.5\\text{{ cm}}$", "Air-filled medium ($c = 3 \\times 10^8\\text{{ m/s}}$)"],
            concept="For the dominant $TE_{10}$ mode in a rectangular waveguide, the cutoff wavelength is $\\lambda_c = 2a$. The cutoff frequency is $f_c = \\frac{c}{2a}$.",
            formulas=[{"formula": "f_c = \\frac{c}{2a}", "terms": [{"term": "f_c", "explanation": "Cutoff frequency below which wave cannot propagate"}]}],
            derivation=[
                f"Step 1: Formula for dominant $TE_{{10}}$ mode cutoff: $f_c = \\frac{{c}}{{2a}}$.",
                f"Step 2: $c = 3 \\times 10^8\\text{{ m/s}}$ and $a = {a_cm:.1f} \\times 10^{{-2}}\\text{{ m}}$.",
                f"Step 3: $f_c = \\frac{{3 \\times 10^8}}{{2 \\times ({a_cm:.1f} \\times 10^{{-2}})}} = \\frac{{3 \\times 10^{{10}}}}{{2 \\times {a_cm:.1f}}}\\text{{ Hz}} = \\frac{{15}}{{{a_cm:.1f}}}\\text{{ GHz}} = {fc_ghz}\\text{{ GHz}}$."
            ],
            final_answer=f"fc = {fc_ghz} GHz",
            alternative="Formula shortcut: $f_c\\text{ (in GHz)} = \\frac{15}{a\\text{ (in cm)}}$.",
            mistakes=["Using dimension $b$ instead of broad dimension $a$ for $TE_{10}$ mode."],
            tags=["Electromagnetics", "Waveguides", "Rectangular Waveguide", "Cutoff Frequency", "Dominant Mode"]
        )
        questions.append(q)

    # Set 5B: Half-Wave Dipole Directivity & Radiation Resistance (25 questions)
    for ant_i in range(25):
        qid = f"PRAC-EMT-{idx:03d}"
        idx += 1
        stmt = "The radiation resistance $R_{rad}$ and maximum directivity $D$ of an ideal thin half-wave ($\\lambda/2$) dipole antenna in free space are approximately:"
        opts = [
            {"id": "A", "text": "$R_{rad} \\approx 73\\,\\Omega, \\quad D \\approx 1.64$ (2.15 dBi)"},
            {"id": "B", "text": "$R_{rad} \\approx 50\\,\\Omega, \\quad D \\approx 1.50$ (1.76 dBi)"},
            {"id": "C", "text": "$R_{rad} \\approx 36.5\\,\\Omega, \\quad D \\approx 3.28$ (5.16 dBi)"},
            {"id": "D", "text": "$R_{rad} \\approx 120\\pi\\,\\Omega, \\quad D \\approx 2.0$ (3.01 dBi)"}
        ]
        q = make_question(
            qid=qid,
            subject="Electromagnetics",
            topic="Waveguides & Antennas",
            qtype="MCQ",
            marks=1,
            statement=stmt,
            options=opts,
            official_answer="A",
            difficulty="Easy",
            understanding="State the standard theoretical benchmark values for radiation resistance and directivity of a half-wave dipole antenna.",
            given_info=["Thin half-wave dipole ($l = \\lambda/2$) in free space."],
            concept="For a center-fed half-wave dipole in free space: 1. Input impedance is $Z_{in} \\approx 73 + j42.5\\,\\Omega$ (radiation resistance $R_{rad} \\approx 73\\,\\Omega$). 2. Maximum directivity is $D = 1.64$ ($10\\log_{10}(1.64) \\approx 2.15\\text{ dBi}$). (By contrast, a Hertzian dipole has $D = 1.5$ and $R_{rad} = 80\\pi^2(l/\\lambda)^2$).",
            formulas=[{"formula": "R_{rad} \\approx 73\\,\\Omega, \\quad D = 1.64 = 2.15\\text{ dBi}", "terms": [{"term": "R_{rad}", "explanation": "Radiation resistance representing radiated power"}]}],
            derivation=[
                "Step 1: Current distribution on half-wave dipole is sinusoidal: $I(z) = I_0 \\cos(k z)$.",
                "Step 2: Total radiated power $P_{rad} = \\frac{\\eta_0 I_0^2}{4\\pi}\\int_0^\\pi \\frac{\\cos^2\\left(\\frac{\\pi}{2}\\cos\\theta\\right)}{\\sin\\theta}d\\theta \\approx 36.56 I_0^2$.",
                "Step 3: Radiation resistance: $R_{rad} = \\frac{2 P_{rad}}{I_0^2} \\approx 73.13\\,\\Omega \\approx 73\\,\\Omega$.",
                "Step 4: Peak radiation intensity gives directivity $D = \\frac{4\\pi U_{\\max}}{P_{rad}} \\approx 1.64$ ($2.15$ dBi).",
                "Therefore, Option A is the correct answer."
            ],
            final_answer="Option A (73 ohm, 1.64)",
            alternative="Summary: Hertzian dipole ($l \\ll \\lambda$): $D = 1.5$ (1.76 dBi); Half-wave dipole ($l = \\lambda/2$): $D = 1.64$ (2.15 dBi).",
            mistakes=["Confusing half-wave dipole ($R_{rad} \\approx 73\\,\\Omega$) with quarter-wave monopole ($R_{rad} \\approx 36.5\\,\\Omega$)."],
            tags=["Electromagnetics", "Antennas", "Half-Wave Dipole", "Radiation Resistance", "Directivity"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} Electromagnetics practice questions.")
    return questions
