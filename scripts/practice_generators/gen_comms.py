import math
from .common import make_question

def generate_comms_questions():
    questions = []
    idx = 1

    # ==========================================
    # 1. RANDOM PROCESSES & NOISE (~55 questions)
    # ==========================================
    # Set 1A: Autocorrelation & Total Power (55 questions)
    for rp_i in range(55):
        qid = f"PRAC-COM-{idx:03d}"
        idx += 1
        p_avg = 10 + (rp_i % 6) * 5 # 10, 15, 20, 25, 30, 35 W
        tau_decay = (rp_i % 4) + 1 # 1, 2, 3, 4
        # R_XX(tau) = P_avg * e^(-tau_decay * |tau|)
        # Total average power = R_XX(0) = P_avg
        stmt = f"A wide-sense stationary (WSS) random process $X(t)$ has an autocorrelation function given by: $$R_{{XX}}(\\tau) = {p_avg} e^{{-{tau_decay}|\\tau|}}\\text{{ W}}$$ The total average power $E[X^2(t)]$ of the random process is ________ Watts."
        ans = str(p_avg)
        q = make_question(
            qid=qid,
            subject="Communications",
            topic="Random Processes & Noise",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the total average power of a WSS random process from its autocorrelation function evaluated at zero lag.",
            given_info=[f"Autocorrelation: $R_{{XX}}(\\tau) = {p_avg} e^{{-{tau_decay}|\\tau|}}\\text{{ W}}$"],
            concept="For any wide-sense stationary random process, the total average power is the mean-square value, which equals the autocorrelation evaluated at zero lag: $P_{avg} = E[X^2(t)] = R_{XX}(0)$.",
            formulas=[{"formula": "E[X^2(t)] = R_{XX}(0)", "terms": [{"term": "R_{XX}(0)", "explanation": "Autocorrelation at zero time displacement"}]}],
            derivation=[
                f"Step 1: Formula for total average power of a WSS process: $P = R_{{XX}}(0)$.",
                f"Step 2: Evaluate at $\\tau = 0$: $R_{{XX}}(0) = {p_avg} e^{{-{tau_decay}|0|}} = {p_avg} \\times 1 = {p_avg}\\text{{ W}}$."
            ],
            final_answer=f"P = {p_avg} W",
            alternative="By Wiener-Khinchin theorem: total power is the area under the power spectral density $\\int_{-\\infty}^{\\infty} S_{XX}(f)df = R_{XX}(0) = " + str(p_avg) + "\\text{ W}$.",
            mistakes=["Integrating over $\\tau$ instead of simply evaluating at $\\tau = 0$."],
            tags=["Communications", "Random Processes", "Autocorrelation", "WSS", "Average Power"]
        )
        questions.append(q)

    # ==========================================
    # 2. ANALOG COMMUNICATIONS (~55 questions)
    # ==========================================
    # Set 2A: AM Power & Modulation Index (30 questions)
    for am_i in range(30):
        qid = f"PRAC-COM-{idx:03d}"
        idx += 1
        pc_kw = 10.0 + (am_i % 5) * 5.0 # 10, 15, 20, 25, 30 kW
        mu = 0.5 + (am_i % 4) * 0.1     # 0.5, 0.6, 0.7, 0.8
        # Pt = Pc * (1 + mu^2 / 2)
        pt_kw = round(pc_kw * (1.0 + (mu ** 2) / 2.0), 2)
        stmt = f"A sinusoidal carrier wave with unmodulated carrier power $P_c = {pc_kw:.1f}\\text{{ kW}}$ is amplitude modulated by a single-tone audio signal with modulation index $\\mu = {mu:.1f}$. The total transmitted power $P_t$ of the AM (DSB-FC) wave is ________ kW (rounded off to two decimal places)."
        ans = [round(pt_kw - 0.05, 2), round(pt_kw + 0.05, 2)]
        q = make_question(
            qid=qid,
            subject="Communications",
            topic="Analog Communications",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate total transmitted power of an amplitude-modulated wave from carrier power and modulation index.",
            given_info=[f"Carrier power $P_c = {pc_kw:.1f}\\text{{ kW}}$", f"Modulation index $\\mu = {mu:.1f}$"],
            concept="Total power in standard AM (DSB-FC) with single-tone modulation is the sum of carrier power and sideband powers: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$.",
            formulas=[{"formula": "P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)", "terms": [{"term": "P_c \\mu^2 / 2", "explanation": "Total power in both sidebands (USB + LSB)"}]}],
            derivation=[
                f"Step 1: Compute $\\mu^2 / 2$: $({mu:.1f})^2 / 2 = {mu**2:.2f} / 2 = {mu**2 / 2:.3f}$.",
                f"Step 2: $1 + \\frac{{\\mu^2}}{{2}} = 1 + {mu**2 / 2:.3f} = {1 + mu**2 / 2:.3f}$.",
                f"Step 3: Total transmitted power: $P_t = {pc_kw:.1f} \\times {1 + mu**2 / 2:.3f} = {pt_kw}\\text{{ kW}}$."
            ],
            final_answer=f"Pt = {pt_kw} kW",
            alternative="Sideband power is $P_{SB} = P_c \\frac{\\mu^2}{2} = " + str(round(pc_kw * mu**2 / 2.0, 2)) + "\\text{ kW}$. Then $P_t = P_c + P_{SB} = " + str(pt_kw) + "\\text{ kW}$.",
            mistakes=["Dividing by 4 instead of 2 (dividing by 4 gives the power of a SINGLE sideband, not both)."],
            tags=["Communications", "Analog Communications", "Amplitude Modulation", "Carrier Power", "Sideband Power"]
        )
        questions.append(q)

    # Set 2B: Frequency Modulation & Carson's Bandwidth (25 questions)
    for fm_i in range(25):
        qid = f"PRAC-COM-{idx:03d}"
        idx += 1
        delta_f = 50 + (fm_i % 5) * 10 # 50, 60, 70, 80, 90 kHz
        fm_khz = 10 + (fm_i % 3) * 5   # 10, 15, 20 kHz
        # Carson's rule: BW = 2 * (delta_f + fm)
        bw_khz = 2 * (delta_f + fm_khz)
        beta_fm = round(float(delta_f) / fm_khz, 2)
        stmt = f"A frequency-modulated (FM) signal has a peak frequency deviation of $\\Delta f = {delta_f}\\text{{ kHz}}$ and a modulating message signal frequency of $f_m = {fm_khz}\\text{{ kHz}}$. By Carson's rule, the transmission bandwidth of the FM signal is ________ kHz."
        ans = str(bw_khz)
        q = make_question(
            qid=qid,
            subject="Communications",
            topic="Analog Communications",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Determine the transmission bandwidth of a wideband FM signal using Carson's empirical rule.",
            given_info=[f"Frequency deviation $\\Delta f = {delta_f}\\text{{ kHz}}$", f"Message frequency $f_m = {fm_khz}\\text{{ kHz}}$"],
            concept="Carson's Rule gives an accurate approximation for the 98% power transmission bandwidth of an angle-modulated signal: $BW = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m$, where modulation index $\\beta = \\Delta f / f_m$.",
            formulas=[{"formula": "BW_{FM} = 2(\\Delta f + f_m)", "terms": [{"term": "BW_{FM}", "explanation": "Carson's bandwidth containing 98% signal power"}]}],
            derivation=[
                f"Step 1: Formula for Carson's bandwidth: $BW = 2(\\Delta f + f_m)$.",
                f"Step 2: $\\Delta f = {delta_f}\\text{{ kHz}}$ and $f_m = {fm_khz}\\text{{ kHz}}$.",
                f"Step 3: $BW = 2({delta_f} + {fm_khz}) = 2({delta_f + fm_khz}) = {bw_khz}\\text{{ kHz}}$."
            ],
            final_answer=f"BW = {bw_khz} kHz",
            alternative="Using modulation index: $\\beta = \\frac{" + str(delta_f) + "}{" + str(fm_khz) + "} = " + str(beta_fm) + "$. Then $BW = 2(\\beta + 1)f_m = 2(" + str(beta_fm + 1) + ") \\times " + str(fm_khz) + " = " + str(bw_khz) + "\\text{ kHz}$.",
            mistakes=["Forgetting the outer multiplier of 2, obtaining only one side of the spectrum: $\\Delta f + f_m$."],
            tags=["Communications", "Analog Communications", "Frequency Modulation", "Carson's Rule", "Bandwidth"]
        )
        questions.append(q)

    # ==========================================
    # 3. DIGITAL BASEBAND & MODULATION (~55 questions)
    # ==========================================
    # Set 3A: PCM, SQNR & 6 dB/bit Rule (55 questions)
    for pcm_i in range(55):
        qid = f"PRAC-COM-{idx:03d}"
        idx += 1
        n_bits = (pcm_i % 6) + 6 # 6, 7, 8, 9, 10, 11 bits
        # SQNR (dB) = 1.76 + 6.02 * n
        sqnr_db = round(1.76 + 6.02 * n_bits, 2)
        stmt = f"A sinusoidal audio signal is digitized using a uniform Pulse Code Modulation (PCM) system with $n = {n_bits}$ bits per sample. The maximum Signal-to-Quantization-Noise Ratio (SQNR) in decibels is ________ dB (rounded off to two decimal places)."
        ans = [round(sqnr_db - 0.1, 2), round(sqnr_db + 0.1, 2)]
        q = make_question(
            qid=qid,
            subject="Communications",
            topic="Digital Baseband & Modulation",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Evaluate the maximum SQNR of an n-bit uniform PCM quantizer for a sinusoidal test tone.",
            given_info=[f"Word length: $n = {n_bits}$ bits/sample", "Full-scale sinusoidal input signal"],
            concept="For a full-scale sinusoidal signal encoded by an n-bit uniform quantizer, $SQNR = \\frac{P_{signal}}{N_q} = \\frac{V_p^2 / 2}{\\Delta^2 / 12} = 1.5 \\times 2^{2n}$. In decibels, this gives the fundamental 6 dB/bit rule: $SQNR_{dB} = 1.76 + 6.02 n\\text{ dB}$.",
            formulas=[{"formula": "SQNR_{dB} = 1.76 + 6.02 n", "terms": [{"term": "6.02\\text{ dB}", "explanation": "SQNR improvement for every 1 added bit of resolution"}]}],
            derivation=[
                f"Step 1: Formula for sinusoidal SQNR: $SQNR_{{dB}} = 1.76 + 6.02 n$.",
                f"Step 2: Substitute $n = {n_bits}$ bits:",
                f"$$SQNR_{{dB}} = 1.76 + 6.02 \\times {n_bits} = 1.76 + {round(6.02 * n_bits, 2)} = {sqnr_db}\\text{{ dB}}$$."
            ],
            final_answer=f"SQNR = {sqnr_db} dB",
            alternative="Approximate rule of thumb: $SQNR \\approx 6n + 1.8 = " + str(round(6 * n_bits + 1.8, 1)) + "\\text{ dB}$.",
            mistakes=["Using $n$ instead of $2n$ in powers of 2, forgetting that power scales with the square of voltage."],
            tags=["Communications", "Digital Communications", "PCM", "Quantization Noise", "SQNR"]
        )
        questions.append(q)

    # ==========================================
    # 4. DIGITAL PASSBAND MODULATION (~55 questions)
    # ==========================================
    # Set 4A: BPSK, QPSK & Constellation Distance (55 questions)
    for pass_i in range(55):
        qid = f"PRAC-COM-{idx:03d}"
        idx += 1
        eb_uj = (pass_i % 5) + 1 # 1, 2, 3, 4, 5 micro-Joules
        # For BPSK, d_min = 2 * sqrt(Eb)
        d_min = round(2.0 * math.sqrt(eb_uj), 3)
        stmt = f"A Binary Phase Shift Keying (BPSK) modulation scheme transmits antipodal signals with energy per bit $E_b = {eb_uj}\\,\\mu\\text{{J}}$. The minimum Euclidean distance $d_{{\\min}}$ between the two constellation points in the signal space is ________ $\\mu\\text{{J}}^{{1/2}}$ (rounded off to two decimal places)."
        ans = [round(d_min - 0.05, 2), round(d_min + 0.05, 2)]
        q = make_question(
            qid=qid,
            subject="Communications",
            topic="Digital Passband Modulation",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Calculate the minimum Euclidean distance between constellation symbols for BPSK.",
            given_info=[f"Energy per bit $E_b = {eb_uj}\\,\\mu\\text{{J}}$", "Antipodal BPSK modulation"],
            concept="BPSK uses two antipodal constellation points along the basis function $\\phi_1(t)$: $s_1 = +\\sqrt{E_b}$ and $s_2 = -\\sqrt{E_b}$. The minimum Euclidean distance is $d_{\\min} = s_1 - s_2 = 2\\sqrt{E_b}$.",
            formulas=[{"formula": "d_{\\min} = 2\\sqrt{E_b}", "terms": [{"term": "d_{\\min}", "explanation": "Euclidean distance between constellation symbols"}]}],
            derivation=[
                f"Step 1: Constellation coordinates: $s_1 = +\\sqrt{{E_b}}, \\quad s_2 = -\\sqrt{{E_b}}$.",
                f"Step 2: Euclidean distance: $d_{{\\min}} = \\sqrt{{E_b}} - (-\\sqrt{{E_b}}) = 2\\sqrt{{E_b}}$.",
                f"Step 3: For $E_b = {eb_uj}\\,\\mu\\text{{J}}$: $d_{{\\min}} = 2\\sqrt{{{eb_uj}}} \\approx {d_min}$."
            ],
            final_answer=f"dmin = {d_min}",
            alternative="Bit error probability over AWGN is governed directly by this distance: $P_e = Q\\left(\\frac{d_{\\min}}{2\\sqrt{N_0/2}}\\right) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$.",
            mistakes=["Taking distance as $\\sqrt{E_b}$ (which is distance from origin, not between points)."],
            tags=["Communications", "Digital Modulation", "BPSK", "Constellation", "Euclidean Distance"]
        )
        questions.append(q)

    # ==========================================
    # 5. INFORMATION THEORY & CODING (~50 questions)
    # ==========================================
    # Set 5A: Shannon Channel Capacity (50 questions)
    for it_i in range(50):
        qid = f"PRAC-COM-{idx:03d}"
        idx += 1
        bw_khz = 10 + (it_i % 6) * 5 # 10, 15, 20, 25, 30, 35 kHz
        # SNR = 15 -> 1 + SNR = 16 = 2^4 -> log2(16) = 4 bits/sample
        # C = B * log2(1 + SNR) = bw_khz * 4 kbps
        cap_kbps = bw_khz * 4
        stmt = f"An additive white Gaussian noise (AWGN) channel has a bandwidth of $B = {bw_khz}\\text{{ kHz}}$ and a signal-to-noise power ratio of $\\text{{SNR}} = 15$. According to the Shannon-Hartley theorem, the channel capacity $C$ is ________ kbps."
        ans = str(cap_kbps)
        q = make_question(
            qid=qid,
            subject="Communications",
            topic="Information Theory & Coding",
            qtype="NAT",
            marks=1,
            statement=stmt,
            options=None,
            official_answer=ans,
            difficulty="Easy",
            understanding="Compute the theoretical maximum error-free transmission rate of an AWGN channel using the Shannon-Hartley theorem.",
            given_info=[f"Channel bandwidth $B = {bw_khz}\\text{{ kHz}}$", "Signal-to-noise ratio $\\text{SNR} = 15$ (linear)"],
            concept="Shannon-Hartley Theorem: The theoretical channel capacity of a bandlimited AWGN channel is $C = B \\log_2(1 + \\text{SNR})$ bits/second.",
            formulas=[{"formula": "C = B \\log_2(1 + \\text{SNR})", "terms": [{"term": "C", "explanation": "Maximum channel capacity in bits/second"}]}],
            derivation=[
                f"Step 1: Compute argument: $1 + \\text{{SNR}} = 1 + 15 = 16$.",
                f"Step 2: Base-2 logarithm: $\\log_2(16) = 4\\text{{ bits/symbol}}$.",
                f"Step 3: Channel capacity: $C = B \\times \\log_2(16) = {bw_khz}\\text{{ kHz}} \\times 4 = {cap_kbps}\\text{{ kbps}}$."
            ],
            final_answer=f"C = {cap_kbps} kbps",
            alternative="Power of two trick: When $1 + SNR = 2^k$, capacity is simply $k \\times B$. Here $k = 4$, so $C = 4B$.",
            mistakes=["Treating SNR=15 as decibels instead of linear power ratio."],
            tags=["Communications", "Information Theory", "Shannon Capacity", "Channel Capacity", "AWGN"]
        )
        questions.append(q)

    print(f"Generated {len(questions)} Communications practice questions.")
    return questions
