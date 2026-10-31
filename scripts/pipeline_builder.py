import os
import sys
import json
import re
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

# Ensure directories
os.makedirs('data/extracted_questions', exist_ok=True)
os.makedirs('data/processed_questions', exist_ok=True)
os.makedirs('data/import_reports', exist_ok=True)
os.makedirs('data/verification_reports', exist_ok=True)
os.makedirs('data/failed_extractions', exist_ok=True)

# 1. Load answer keys
with open('data/processed_questions/official_answer_keys_2021_2026.json', 'r', encoding='utf-8') as f:
    ALL_KEYS = json.load(f)

# Load 2025 keys
def get_2025_keys():
    r = pypdf.PdfReader('data/answer_keys/2025/GATE_2025_EC_Answer_Key.pdf')
    tokens = []
    for p in r.pages:
        lines = [l.strip() for l in p.extract_text().split('\n') if l.strip()]
        tokens.extend(lines)
    q_map = {}
    i = 0
    while i < len(tokens):
        if tokens[i].isdigit() and 1 <= int(tokens[i]) <= 65:
            q_no = int(tokens[i])
            if i + 5 < len(tokens):
                session = tokens[i+1]
                q_type = tokens[i+2]
                section = tokens[i+3]
                key = tokens[i+4]
                marks = tokens[i+5]
                if q_type in ['MCQ', 'MSQ', 'NAT'] and section in ['GA', 'EC'] and marks.isdigit():
                    q_map[q_no] = {
                        'q_no': q_no,
                        'session': session,
                        'q_type': q_type,
                        'section': section,
                        'official_key': key,
                        'marks': int(marks)
                    }
                    i += 6
                    continue
        i += 1
    return q_map

KEYS_2025 = get_2025_keys()

def get_key(year, q_no):
    if str(year) == '2025':
        return KEYS_2025.get(q_no)
    year_data = ALL_KEYS.get(str(year), {}).get('questions', [])
    for item in year_data:
        if item['q_no'] == q_no:
            return item
    return None

YEAR_INSTITUTES = {
    '2026': 'IIT Guwahati',
    '2025': 'IIT Roorkee',
    '2024': 'IISc Bangalore',
    '2023': 'IIT Kanpur',
    '2022': 'IIT Kharagpur'
}

# Topic classifier based on keyword heuristic
def classify_question(q_no, text):
    text_lower = text.lower()
    
    if q_no <= 10:
        # General Aptitude
        if any(w in text_lower for w in ['ratio', 'price', 'expenditure', 'speed', 'distance', 'work', 'sum', 'percentage', 'prime', 'factor', 'log']):
            return 'General Aptitude', 'Quantitative Aptitude'
        elif any(w in text_lower for w in ['word', 'sentence', 'meaning', 'grammatically', 'antonym', 'synonym', 'analogous', 'idiom']):
            return 'General Aptitude', 'Verbal Aptitude'
        elif any(w in text_lower for w in ['shape', 'cube', 'mirror', 'paper', 'fold', 'pattern', 'figure', 'triangle']):
            return 'General Aptitude', 'Spatial Aptitude'
        else:
            return 'General Aptitude', 'Analytical Aptitude'
            
    # EC Subject (11-65)
    # 1. Engineering Mathematics
    if any(w in text_lower for w in ['eigenvalue', 'eigenvector', 'matrix', 'determinant', 'rank', 'linear system']):
        return 'Engineering Mathematics', 'Linear Algebra'
    if any(w in text_lower for w in ['integral', 'derivative', 'maximum', 'minimum', 'taylor', 'limit', 'continuous', 'gradient', 'divergence', 'curl']):
        return 'Engineering Mathematics', 'Calculus'
    if any(w in text_lower for w in ['contour', 'residue', 'analytic', 'cauchy', 'singularity', 'laurent']):
        return 'Engineering Mathematics', 'Complex Analysis'
    if any(w in text_lower for w in ['probability', 'variance', 'expectation', 'gaussian', 'poisson', 'uniform random']):
        return 'Engineering Mathematics', 'Probability and Statistics'
    if any(w in text_lower for w in ['differential equation', 'homogeneous', 'initial value problem', 'dy/dx']):
        return 'Engineering Mathematics', 'Differential Equations'
        
    # 2. Network Theory
    if any(w in text_lower for w in ['thevenin', 'norton', 'superposition', 'maximum power', 'kcl', 'kvl', 'impedance', 'mesh', 'nodal', 'admittance']):
        return 'Network Theory', 'Network Theorems'
    if any(w in text_lower for w in ['time constant', 'transient', 'rlc', 'initial condition', 'inductor', 'capacitor voltage', 't = 0']):
        return 'Network Theory', 'Transient Analysis'
    if any(w in text_lower for w in ['two-port', 'z-parameter', 'y-parameter', 'h-parameter', 'abcd']):
        return 'Network Theory', 'Two-Port Networks'
    if any(w in text_lower for w in ['resonance', 'quality factor', 'bandwidth', 'coupled']):
        return 'Network Theory', 'Resonance & Coupled Circuits'
        
    # 3. Signals and Systems
    if any(w in text_lower for w in ['lti', 'impulse response', 'convolution', 'causal', 'bibo', 'stable']):
        return 'Signals and Systems', 'LTI Systems & Convolution'
    if any(w in text_lower for w in ['fourier transform', 'fourier series', 'dtft', 'dft', 'spectrum']):
        return 'Signals and Systems', 'Fourier Series & Transform'
    if any(w in text_lower for w in ['laplace transform', 'roc', 'bilateral', 'poles', 'zeros']):
        return 'Signals and Systems', 'Laplace Transform'
    if any(w in text_lower for w in ['z-transform', 'unit circle']):
        return 'Signals and Systems', 'Z-Transform'
    if any(w in text_lower for w in ['nyquist rate', 'sampling', 'aliasing', 'reconstruction']):
        return 'Signals and Systems', 'Sampling & Reconstruction'
        
    # 4. Electronic Devices
    if any(w in text_lower for w in ['fermi', 'carrier concentration', 'intrinsic', 'mobility', 'drift', 'diffusion', 'generation', 'recombination', 'bandgap']):
        return 'Electronic Devices', 'Semiconductor Physics'
    if any(w in text_lower for w in ['pn junction', 'depletion', 'built-in potential', 'breakdown', 'avalanche', 'zener']):
        return 'Electronic Devices', 'PN Junction & Zener Diodes'
    if any(w in text_lower for w in ['mos capacitor', 'threshold voltage', 'flatband', 'inversion', 'oxide']):
        return 'Electronic Devices', 'MOSFET Physics & Capacitances'
    if any(w in text_lower for w in ['bjt base', 'early effect', 'emitter injection', 'base transit']):
        return 'Electronic Devices', 'BJT Physics & Characteristics'
        
    # 5. Analog Circuits
    if any(w in text_lower for w in ['op-amp', 'operational amplifier', 'virtual ground', 'slew rate', 'cmrr', 'inverting amplifier']):
        return 'Analog Circuits', 'Op-Amp Linear & Non-linear Circuits'
    if any(w in text_lower for w in ['small-signal', 'transconductance', 'common-source', 'common-emitter', 'voltage gain', 'current mirror', 'cascode']):
        return 'Analog Circuits', 'BJT & MOSFET Amplifiers'
    if any(w in text_lower for w in ['diode', 'clipper', 'clamper', 'rectifier']):
        return 'Analog Circuits', 'Diode Circuits & Clippers'
    if any(w in text_lower for w in ['feedback', 'barkhausen', 'wien bridge', 'phase shift oscillator']):
        return 'Analog Circuits', 'Active Filters & Oscillators'
        
    # 6. Digital Circuits
    if any(w in text_lower for w in ['multiplexer', 'mux', 'decoder', 'encoder', 'demux', 'adder', 'priority encoder']):
        return 'Digital Circuits', 'Combinational Logic'
    if any(w in text_lower for w in ['flip-flop', 'counter', 'state table', 'state machine', 'fsm', 'setup time', 'hold time', 'clock frequency']):
        return 'Digital Circuits', 'Sequential Circuits & Flip-Flops'
    if any(w in text_lower for w in ['k-map', 'boolean', 'sop', 'pos', 'minimal', 'logic gate', 'nand', 'nor']):
        return 'Digital Circuits', 'Boolean Algebra & Logic Gates'
    if any(w in text_lower for w in ['adc', 'dac', 'resolution', 'quantization error', 'r-2r', 'flash adc']):
        return 'Digital Circuits', 'Data Converters (ADC/DAC)'
        
    # 7. Control Systems
    if any(w in text_lower for w in ['state space', 'controllability', 'observability', 'transition matrix']):
        return 'Control Systems', 'State Space Analysis'
    if any(w in text_lower for w in ['nyquist plot', 'encirclement', 'gain margin', 'phase margin', 'bode']):
        return 'Control Systems', 'Frequency Response & Bode Plots'
    if any(w in text_lower for w in ['root locus', 'asymptote', 'breakaway']):
        return 'Control Systems', 'Root Locus Technique'
    if any(w in text_lower for w in ['damping ratio', 'natural frequency', 'peak overshoot', 'settling time', 'steady state error']):
        return 'Control Systems', 'Time Response Analysis'
    if any(w in text_lower for w in ['routh', 'hurwitz', 'characteristic equation']):
        return 'Control Systems', 'Stability & Routh-Hurwitz'
    if any(w in text_lower for w in ['transfer function', 'block diagram', 'mason', 'signal flow']):
        return 'Control Systems', 'Transfer Functions & Block Diagrams'
        
    # 8. Communications
    if any(w in text_lower for w in ['bpsk', 'qpsk', 'qam', 'constellation', 'matched filter', 'bit error rate', 'ber', 'awgn']):
        return 'Communications', 'Digital Modulation (BPSK, QPSK, QAM)'
    if any(w in text_lower for w in ['pcm', 'quantizer', 'quantization', 'snr', 'companding', 'delta modulation']):
        return 'Communications', 'Digital Baseband & Modulation'
    if any(w in text_lower for w in ['entropy', 'channel capacity', 'shannon', 'huffman', 'mutual information']):
        return 'Communications', 'Information Theory & Coding'
    if any(w in text_lower for w in ['am', 'fm', 'pm', 'modulation index', 'envelope detector', 'superheterodyne', 'frequency modulation']):
        return 'Communications', 'Analog Communications (AM, FM)'
    if any(w in text_lower for w in ['noise figure', 'noise temperature', 'psd', 'autocorrelation', 'white noise']):
        return 'Communications', 'Random Signals & Noise'
        
    # 9. Electromagnetics
    if any(w in text_lower for w in ['transmission line', 'vswr', 'reflection coefficient', 'characteristic impedance', 'stub']):
        return 'Electromagnetics', 'Transmission Lines & Smith Chart'
    if any(w in text_lower for w in ['maxwell', 'boundary condition', 'displacement current', 'poynting']):
        return 'Electromagnetics', 'Maxwell\'s Equations & Boundary Conditions'
    if any(w in text_lower for w in ['plane wave', 'polarization', 'skin depth', 'intrinsic impedance', 'attenuation constant']):
        return 'Electromagnetics', 'Uniform Plane Waves & Polarization'
    if any(w in text_lower for w in ['waveguide', 'cutoff frequency', 'te10', 'tm', 'cavity']):
        return 'Electromagnetics', 'Waveguides & Cavity Resonators'
    if any(w in text_lower for w in ['antenna', 'radiation resistance', 'directivity', 'gain', 'beamwidth', 'dipole']):
        return 'Electromagnetics', 'Antennas & Radiation Patterns'
        
    return 'Engineering Mathematics', 'Calculus'

print("Classifier defined.")

