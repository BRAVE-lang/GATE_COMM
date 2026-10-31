import { FormulaItem } from '../types/formula';

export const FORMULA_LIBRARY: FormulaItem[] = [
  // Network Theory
  {
    id: 'F-NET-01',
    subject: 'Network Theory',
    topic: 'Transient & Steady State Analysis',
    title: 'Series RLC Damping and Natural Frequency',
    latex: '\\omega_0 = \\frac{1}{\\sqrt{LC}}, \\quad \\alpha = \\frac{R}{2L}, \\quad \\zeta = \\frac{\\alpha}{\\omega_0} = \\frac{R}{2}\\sqrt{\\frac{C}{L}}',
    explanation: 'Defines the damping factor, resonant frequency, and damping ratio determining transient response type (overdamped, critically damped, underdamped) for a series RLC circuit.',
    terms: [
      { symbol: '\\omega_0', meaning: 'Undamped natural angular frequency', unit: 'rad/s' },
      { symbol: '\\alpha', meaning: 'Neper attenuation frequency', unit: 'Np/s or rad/s' },
      { symbol: '\\zeta', meaning: 'Damping ratio (dimensionless)' },
      { symbol: 'R, L, C', meaning: 'Resistance (Ω), Inductance (H), Capacitance (F)' }
    ],
    importantNotes: [
      'For Parallel RLC: \\alpha = \\frac{1}{2RC} and \\zeta = \\frac{1}{2R}\\sqrt{\\frac{L}{C}}.',
      'Critical resistance for series RLC: R_{crit} = 2\\sqrt{L/C}.'
    ],
    isHighYield: true
  },
  {
    id: 'F-NET-02',
    subject: 'Network Theory',
    topic: 'Network Theorems',
    title: 'Maximum Power Transfer Theorem (AC & DC)',
    latex: 'Z_L = Z_{th}^* \\implies P_{\\text{max}} = \\frac{|V_{th}|^2}{4 R_{th}}',
    explanation: 'For maximum power delivery from a linear AC source with Thevenin impedance to a variable load impedance, the load must be the complex conjugate of the Thevenin impedance.',
    terms: [
      { symbol: 'Z_L', meaning: 'Load impedance = R_L + jX_L', unit: 'Ω' },
      { symbol: 'Z_{th}^*', meaning: 'Complex conjugate of Thevenin impedance (R_{th} - jX_{th})', unit: 'Ω' },
      { symbol: 'P_{\\text{max}}', meaning: 'Maximum active average power delivered to the load', unit: 'W' }
    ],
    importantNotes: [
      'If load is purely resistive (R_L variable, X_L = 0): R_L = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}.'
    ],
    isHighYield: true
  },

  // Signals and Systems
  {
    id: 'F-SIG-01',
    subject: 'Signals and Systems',
    topic: 'Sampling Theorem',
    title: 'Nyquist Rate and Interval',
    latex: 'f_N = 2 f_{\\text{max}}, \\quad T_N = \\frac{1}{f_N} = \\frac{1}{2 f_{\\text{max}}}',
    explanation: 'A bandlimited baseband signal can be completely reconstructed from its samples without aliasing if sampled at or above the Nyquist rate.',
    terms: [
      { symbol: 'f_N', meaning: 'Nyquist sampling rate', unit: 'samples/s or Hz' },
      { symbol: 'f_{\\text{max}}', meaning: 'Highest spectral frequency component in the message', unit: 'Hz' },
      { symbol: 'T_N', meaning: 'Maximum Nyquist sampling interval', unit: 'seconds' }
    ],
    importantNotes: [
      'For product x_1(t) \\cdot x_2(t): f_{\\text{max}} = f_{m1} + f_{m2}.',
      'For convolution x_1(t) \\ast x_2(t): f_{\\text{max}} = \\min(f_{m1}, f_{m2}).'
    ],
    isHighYield: true
  },
  {
    id: 'F-SIG-02',
    subject: 'Signals and Systems',
    topic: 'Fourier Transform & Series',
    title: 'Parseval Energy Theorem',
    latex: 'E = \\int_{-\\infty}^{\\infty} |x(t)|^2 \\, dt = \\int_{-\\infty}^{\\infty} |X(f)|^2 \\, df = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} |X(\\omega)|^2 \\, d\\omega',
    explanation: 'Total signal energy is identical whether integrated in time domain or frequency domain.',
    terms: [
      { symbol: 'E', meaning: 'Total energy of the signal', unit: 'Joules' },
      { symbol: 'X(f)', meaning: 'Continuous-time Fourier transform of x(t)' },
      { symbol: '|X(f)|^2', meaning: 'Energy Spectral Density (ESD)', unit: 'J/Hz' }
    ],
    importantNotes: [
      'For discrete-time DTFT: E = \\sum_{n=-\\infty}^{\\infty} |x[n]|^2 = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} |X(e^{j\\omega})|^2 \\, d\\omega.'
    ],
    isHighYield: true
  },

  // Analog Circuits
  {
    id: 'F-ANA-01',
    subject: 'Analog Circuits',
    topic: 'Op-Amp Circuits',
    title: 'Inverting and Non-Inverting Op-Amp Closed Loop Gains',
    latex: 'A_{CL,\\text{inv}} = -\\frac{R_f}{R_1}, \\quad A_{CL,\\text{non-inv}} = 1 + \\frac{R_f}{R_1}',
    explanation: 'Ideal closed-loop voltage gain expressions with infinite open-loop gain and virtual short concept.',
    terms: [
      { symbol: 'R_f', meaning: 'Feedback resistance', unit: 'Ω' },
      { symbol: 'R_1', meaning: 'Input / series resistance', unit: 'Ω' },
      { symbol: 'A_{CL}', meaning: 'Closed-loop voltage gain (dimensionless)' }
    ],
    importantNotes: [
      'Finite gain formula: A_{CL} = \\frac{A_{ideal}}{1 + 1/(A\\beta)} where \\beta = \\frac{R_1}{R_1 + R_f}.'
    ],
    isHighYield: true
  },
  {
    id: 'F-ANA-02',
    subject: 'Analog Circuits',
    topic: 'Op-Amp Circuits',
    title: 'Op-Amp Slew Rate & Full Power Bandwidth',
    latex: 'SR = \\left. \\frac{dv_o}{dt} \\right|_{\\text{max}} = 2\\pi f_{\\text{max}} V_m',
    explanation: 'Slew rate is the maximum rate of change of output voltage. For undistorted sinusoidal output of amplitude V_m, frequency cannot exceed the full power bandwidth.',
    terms: [
      { symbol: 'SR', meaning: 'Slew rate', unit: 'V/μs or V/s' },
      { symbol: 'f_{\\text{max}}', meaning: 'Full-power bandwidth', unit: 'Hz' },
      { symbol: 'V_m', meaning: 'Peak sinusoidal output voltage amplitude', unit: 'Volts' }
    ],
    importantNotes: [
      'If input frequency f > f_{max}, the sinusoidal output distorts into a triangular waveform.'
    ],
    isHighYield: true
  },

  // Control Systems
  {
    id: 'F-CTL-01',
    subject: 'Control Systems',
    topic: 'Time Domain Analysis',
    title: 'Second-Order System Specifications',
    latex: '\\%M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%, \\quad t_p = \\frac{\\pi}{\\omega_d}, \\quad t_s = \\frac{4}{\\zeta\\omega_n} \\; (2\\% \\text{ band})',
    explanation: 'Time-domain step response performance criteria for an underdamped second-order closed-loop system.',
    terms: [
      { symbol: '\\%M_p', meaning: 'Percentage peak overshoot' },
      { symbol: 't_p', meaning: 'Peak time to first overshoot', unit: 'seconds' },
      { symbol: 't_s', meaning: 'Settling time', unit: 'seconds' },
      { symbol: '\\omega_d = \\omega_n\\sqrt{1-\\zeta^2}', meaning: 'Damped natural frequency', unit: 'rad/s' }
    ],
    importantNotes: [
      'For 5% settling time tolerance band: t_s = \\frac{3}{\\zeta\\omega_n}.'
    ],
    isHighYield: true
  },
  {
    id: 'F-CTL-02',
    subject: 'Control Systems',
    topic: 'Stability & Root Locus',
    title: 'Steady-State Error Coefficients',
    latex: 'e_{ss} = \\lim_{s \\to 0} \\frac{s R(s)}{1 + G(s)H(s)}, \\quad K_p = \\lim_{s \\to 0} G(s), \\; K_v = \\lim_{s \\to 0} s G(s), \\; K_a = \\lim_{s \\to 0} s^2 G(s)',
    explanation: 'Error constants to evaluate steady-state tracking error for step, ramp, and parabolic inputs based on system Type.',
    terms: [
      { symbol: 'K_p', meaning: 'Positional error constant' },
      { symbol: 'K_v', meaning: 'Velocity error constant', unit: 's^{-1}' },
      { symbol: 'K_a', meaning: 'Acceleration error constant', unit: 's^{-2}' }
    ],
    importantNotes: [
      'Type 0 system has finite error to step input: e_{ss} = \\frac{1}{1 + K_p}.',
      'Type 1 system has zero error to step, finite error to ramp: e_{ss} = \\frac{1}{K_v}.'
    ],
    isHighYield: true
  },

  // Electronic Devices
  {
    id: 'F-EDC-01',
    subject: 'Electronic Devices',
    topic: 'Semiconductor Physics',
    title: 'Mass Action Law and Built-in Potential',
    latex: 'n \\cdot p = n_i^2, \\quad V_{bi} = V_t \\ln\\left( \\frac{N_A N_D}{n_i^2} \\right)',
    explanation: 'In thermal equilibrium, product of carrier concentrations is independent of doping. Built-in potential of an abrupt p-n junction under zero bias.',
    terms: [
      { symbol: 'n_i', meaning: 'Intrinsic carrier concentration', unit: 'cm^{-3}' },
      { symbol: 'V_{bi}', meaning: 'Built-in junction barrier potential', unit: 'Volts' },
      { symbol: 'V_t = kT/q', meaning: 'Thermal voltage (≈ 26 mV at 300 K)', unit: 'Volts' },
      { symbol: 'N_A, N_D', meaning: 'Acceptor and Donor doping densities', unit: 'cm^{-3}' }
    ],
    importantNotes: [
      'Built-in potential decreases with increasing temperature at approximately -2 mV/°C.'
    ],
    isHighYield: true
  },
  {
    id: 'F-EDC-02',
    subject: 'Electronic Devices',
    topic: 'MOSFET & MOS Capacitor',
    title: 'MOSFET Drain Current Equations (Gradual Channel)',
    latex: 'I_D = \\begin{cases} \\mu_n C_{ox} \\frac{W}{L} \\left[ (V_{GS} - V_{TH}) V_{DS} - \\frac{V_{DS}^2}{2} \\right] & V_{DS} < V_{GS} - V_{TH} \\text{ (Triode)} \\\\ \\frac{1}{2} \\mu_n C_{ox} \\frac{W}{L} (V_{GS} - V_{TH})^2 (1 + \\lambda V_{DS}) & V_{DS} \\ge V_{GS} - V_{TH} \\text{ (Saturation)} \\end{cases}',
    explanation: 'Current-voltage equations for an n-channel enhancement MOSFET operating in linear/triode and saturation regions.',
    terms: [
      { symbol: '\\mu_n C_{ox}', meaning: 'Process transconductance parameter', unit: 'A/V^2' },
      { symbol: 'W/L', meaning: 'Channel width-to-length aspect ratio' },
      { symbol: 'V_{TH}', meaning: 'Threshold voltage', unit: 'Volts' },
      { symbol: '\\lambda', meaning: 'Channel length modulation parameter', unit: 'V^{-1}' }
    ],
    importantNotes: [
      'Pinch-off condition at drain end occurs when V_{GD} = V_{TH} or V_{DS} = V_{GS} - V_{TH}.'
    ],
    isHighYield: true
  },

  // Communications
  {
    id: 'F-COM-01',
    subject: 'Communications',
    topic: 'Digital Passband Modulation',
    title: 'Coherent Modulation Bit Error Rates (BER)',
    latex: 'P_{e,\\text{BPSK}} = Q\\left( \\sqrt{\\frac{2E_b}{N_0}} \\right), \\quad P_{e,\\text{QPSK}} = Q\\left( \\sqrt{\\frac{2E_b}{N_0}} \\right), \\quad P_{e,\\text{BFSK}} = Q\\left( \\sqrt{\\frac{E_b}{N_0}} \\right)',
    explanation: 'Probability of bit error for standard digital passband constellations over an AWGN channel with optimal matched filter detection.',
    terms: [
      { symbol: 'E_b', meaning: 'Energy per transmitted bit', unit: 'Joules' },
      { symbol: 'N_0', meaning: 'One-sided noise power spectral density', unit: 'W/Hz' },
      { symbol: 'Q(x)', meaning: 'Gaussian tail probability function' }
    ],
    importantNotes: [
      'BPSK and QPSK have the EXACT SAME bit error probability for the same E_b/N_0, but QPSK achieves double the spectral efficiency!'
    ],
    isHighYield: true
  },
  {
    id: 'F-COM-02',
    subject: 'Communications',
    topic: 'Information Theory & Coding',
    title: 'Shannon Channel Capacity Theorem',
    latex: 'C = B \\log_2\\left( 1 + \\frac{S}{N} \\right) = B \\log_2\\left( 1 + \\frac{S}{N_0 B} \\right)',
    explanation: 'Maximum theoretical data rate that can be transmitted over a bandlimited AWGN channel with arbitrarily small probability of error.',
    terms: [
      { symbol: 'C', meaning: 'Channel capacity', unit: 'bits/second (bps)' },
      { symbol: 'B', meaning: 'Channel bandwidth', unit: 'Hz' },
      { symbol: 'S/N', meaning: 'Signal-to-Noise power ratio (linear scale, not dB!)' }
    ],
    importantNotes: [
      'As B \\to \\infty, maximum capacity approaches the Shannon limit: C_{\\infty} = 1.44 \\frac{S}{N_0}.'
    ],
    isHighYield: true
  },

  // Electromagnetics
  {
    id: 'F-EMT-01',
    subject: 'Electromagnetics',
    topic: 'Transmission Lines & Smith Chart',
    title: 'Transmission Line Input Impedance',
    latex: 'Z_{\\text{in}}(l) = Z_0 \\left[ \\frac{Z_L + j Z_0 \\tan(\\beta l)}{Z_0 + j Z_L \\tan(\\beta l)} \\right]',
    explanation: 'Calculates the input impedance looking into a lossless transmission line of length l terminated in load Z_L.',
    terms: [
      { symbol: 'Z_0', meaning: 'Characteristic impedance', unit: 'Ω' },
      { symbol: 'Z_L', meaning: 'Load impedance', unit: 'Ω' },
      { symbol: '\\beta = \\frac{2\\pi}{\\lambda}', meaning: 'Phase constant', unit: 'rad/m' },
      { symbol: 'l', meaning: 'Physical length of the line', unit: 'meters' }
    ],
    importantNotes: [
      'Quarter-wave transformer (l = \\lambda/4): Z_{\\text{in}} = \\frac{Z_0^2}{Z_L}.',
      'Half-wave line (l = \\lambda/2): Z_{\\text{in}} = Z_L (repeats every half wavelength).'
    ],
    isHighYield: true
  },
  {
    id: 'F-EMT-02',
    subject: 'Electromagnetics',
    topic: 'Uniform Plane Waves',
    title: 'Intrinsic Impedance and Skin Depth',
    latex: '\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}}, \\quad \\delta = \\frac{1}{\\alpha} = \\frac{1}{\\sqrt{\\pi f \\mu \\sigma}}',
    explanation: 'Wave impedance for dielectric medium and skin depth in a good conductor where amplitude drops to 1/e (36.8%) of its surface value.',
    terms: [
      { symbol: '\\eta_0', meaning: 'Intrinsic impedance of free space = 120π ≈ 377 Ω' },
      { symbol: '\\delta', meaning: 'Skin depth', unit: 'meters' },
      { symbol: '\\sigma', meaning: 'Conductivity of conductor', unit: 'S/m' }
    ],
    importantNotes: [
      'For good conductors (\\sigma \\gg \\omega\\epsilon): \\alpha = \\beta = \\sqrt{\\pi f \\mu \\sigma}.'
    ],
    isHighYield: true
  },

  // Engineering Mathematics
  {
    id: 'F-MAT-01',
    subject: 'Engineering Mathematics',
    topic: 'Linear Algebra',
    title: 'Matrix Eigenvalue Properties & Cayley-Hamilton',
    latex: '\\sum_{i=1}^n \\lambda_i = \\text{Trace}(A), \\quad \\prod_{i=1}^n \\lambda_i = \\det(A)',
    explanation: 'Fundamental relationships connecting matrix trace and determinant to the roots of its characteristic polynomial.',
    terms: [
      { symbol: '\\lambda_i', meaning: 'Eigenvalues of square matrix A' },
      { symbol: '\\text{Trace}(A)', meaning: 'Sum of main diagonal elements' },
      { symbol: '\\det(A)', meaning: 'Determinant of matrix A' }
    ],
    importantNotes: [
      'Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation: P(A) = 0.'
    ],
    isHighYield: true
  },
  {
    id: 'F-MAT-02',
    subject: 'Engineering Mathematics',
    topic: 'Probability and Statistics',
    title: 'Bayes Theorem and Total Probability',
    latex: 'P(A_i | B) = \\frac{P(B | A_i) P(A_i)}{\\sum_{j=1}^k P(B | A_j) P(A_j)}',
    explanation: 'Calculates the posterior probability of an event given prior evidence.',
    terms: [
      { symbol: 'P(A_i | B)', meaning: 'Posterior probability of hypothesis A_i given evidence B' },
      { symbol: 'P(B | A_i)', meaning: 'Likelihood of evidence B given hypothesis A_i' },
      { symbol: 'P(A_i)', meaning: 'Prior probability of hypothesis A_i' }
    ],
    importantNotes: [
      'For independent random variables X and Y: \\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y).'
    ],
    isHighYield: true
  },

  // Digital Circuits
  {
    id: 'F-DIG-01',
    subject: 'Digital Circuits',
    topic: 'Sequential Circuits',
    title: 'Flip-Flop Setup and Hold Timing & Max Clock Frequency',
    latex: 'T_{clk,\\min} = t_{cq} + t_{comb} + t_{setup}, \\quad f_{clk,\\max} = \\frac{1}{T_{clk,\\min}}',
    explanation: 'Fundamental timing constraint for synchronous sequential digital circuits to prevent setup time violations.',
    terms: [
      { symbol: 't_{cq}', meaning: 'Clock-to-Q propagation delay of launching flip-flop', unit: 'ns' },
      { symbol: 't_{comb}', meaning: 'Maximum propagation delay of combinational logic', unit: 'ns' },
      { symbol: 't_{setup}', meaning: 'Setup time required by receiving flip-flop before clock edge', unit: 'ns' },
      { symbol: 'f_{clk,\\max}', meaning: 'Maximum allowable synchronous clock frequency', unit: 'Hz or MHz' }
    ],
    importantNotes: [
      'Hold time condition: t_{cq} + t_{comb,\\min} \\ge t_{hold} + t_{skew} (independent of clock frequency!).'
    ],
    isHighYield: true
  },
  {
    id: 'F-DIG-02',
    subject: 'Digital Circuits',
    topic: 'Data Converters & Memories',
    title: 'DAC & ADC Quantization Resolution and Error',
    latex: '\\Delta = \\frac{V_{FS}}{2^n - 1}, \\quad Q_e = \\pm \\frac{\\Delta}{2} = \\pm \\frac{V_{FS}}{2(2^n - 1)}',
    explanation: 'Defines the step size (voltage resolution) of an n-bit digital-to-analog converter and peak quantization error.',
    terms: [
      { symbol: '\\Delta', meaning: 'Resolution / step size', unit: 'Volts' },
      { symbol: 'V_{FS}', meaning: 'Full-scale reference analog voltage', unit: 'Volts' },
      { symbol: 'n', meaning: 'Number of binary resolution bits' },
      { symbol: 'Q_e', meaning: 'Peak theoretical quantization error', unit: 'Volts' }
    ],
    importantNotes: [
      'Percentage resolution = \\frac{1}{2^n - 1} \\times 100\\%.',
      'Flash ADC requires 2^n - 1 comparators and completes conversion in 1 clock cycle.'
    ],
    isHighYield: true
  },

  // General Aptitude
  {
    id: 'F-APT-01',
    subject: 'General Aptitude',
    topic: 'Quantitative Aptitude',
    title: 'Combined Work Rates and Harmonic Duration',
    latex: '\\frac{1}{T_{total}} = \\frac{1}{T_A} + \\frac{1}{T_B} \\implies T_{total} = \\frac{T_A \\cdot T_B}{T_A + T_B}',
    explanation: 'Harmonic mean relationship governing combined time taken by two independent agents working at constant rates.',
    terms: [
      { symbol: 'T_A', meaning: 'Days/hours taken by Person A alone' },
      { symbol: 'T_B', meaning: 'Days/hours taken by Person B alone' },
      { symbol: 'T_{total}', meaning: 'Time taken when working simultaneously' }
    ],
    importantNotes: [
      'For pipes and cisterns: leak rate subtracts: \\frac{1}{T} = \\frac{1}{T_{fill}} - \\frac{1}{T_{leak}}.'
    ],
    isHighYield: true
  },
  {
    id: 'F-APT-02',
    subject: 'General Aptitude',
    topic: 'Quantitative Aptitude',
    title: 'Successive Percentage Changes and Markup-Discount',
    latex: '\\text{Net Change \\%} = x + y + \\frac{x \\cdot y}{100}',
    explanation: 'Formula for successive percentage increases and decreases (use negative sign for discounts or decreases).',
    terms: [
      { symbol: 'x', meaning: 'First percentage change (+ for increase, - for decrease)' },
      { symbol: 'y', meaning: 'Second percentage change (+ for increase, - for decrease)' }
    ],
    importantNotes: [
      'If price is marked up by M% and discounted by D%: Net Profit % = M - D - \\frac{M \\cdot D}{100}.'
    ],
    isHighYield: true
  }
];

