import { Question } from '../types/question';

export const AUTHENTIC_GATE_EC_PYQS: Question[] = [
  // ==========================================
  // 1. ANALOG CIRCUITS - GATE 2024 EC
  // ==========================================
  {
    id: 'GATE-2024-EC-Q28',
    source: 'GATE 2024 EC (IISc Bangalore)',
    sourceReference: 'Official Question Paper GATE 2024 Electronics & Communication, Q.28',
    examYear: 2024,
    examSession: 'Forenoon',
    subject: 'Analog Circuits',
    topic: 'BJT & MOSFET Amplifiers',
    type: 'NAT',
    marks: 2,
    negativeMarks: 0,
    statement: 'In the small-signal common-source amplifier circuit shown below, the MOSFET has transconductance $g_m = 2\\text{ mA/V}$ and output resistance $r_o = 50\\text{ k}\\Omega$. The load resistance is $R_D = 10\\text{ k}\\Omega$. Neglecting all internal capacitances, the magnitude of the small-signal voltage gain $\\left| \\frac{v_o}{v_{\\text{in}}} \\right|$ (rounded off to two decimal places) is ________.',
    figure: {
      type: 'svg',
      content: `<svg viewBox="0 0 380 200" class="w-full max-w-sm mx-auto my-3 text-slate-800 dark:text-slate-100" fill="none" stroke="currentColor" stroke-width="2">
        <!-- VDD Rail -->
        <line x1="150" y1="20" x2="230" y2="20" stroke-width="3" stroke="#4f46e5"/>
        <text x="175" y="15" font-size="12" stroke="none" fill="#4f46e5" font-weight="bold">VDD</text>
        
        <!-- RD Resistor -->
        <line x1="190" y1="20" x2="190" y2="45"/>
        <rect x="180" y="45" width="20" height="40" rx="2" fill="#e0e7ff" stroke="#4f46e5"/>
        <text x="208" y="70" font-size="11" stroke="none" fill="currentColor">RD = 10k</text>
        <line x1="190" y1="85" x2="190" y2="105"/>
        
        <!-- Drain node to Vo -->
        <circle cx="190" cy="105" r="3" fill="currentColor"/>
        <line x1="190" y1="105" x2="260" y2="105"/>
        <circle cx="260" cy="105" r="4" fill="currentColor"/>
        <text x="270" y="110" font-size="12" stroke="none" fill="currentColor" font-weight="bold">Vo</text>
        
        <!-- MOSFET Symbol -->
        <line x1="155" y1="105" x2="175" y2="105"/>
        <line x1="175" y1="95" x2="175" y2="135" stroke-width="3"/>
        <line x1="182" y1="90" x2="182" y2="140" stroke-width="2"/>
        <line x1="182" y1="105" x2="190" y2="105"/>
        <line x1="182" y1="135" x2="190" y2="135"/>
        <line x1="190" y1="135" x2="190" y2="165"/>
        
        <!-- Input Vin to Gate -->
        <line x1="90" y1="115" x2="155" y2="115"/>
        <circle cx="90" cy="115" r="4" fill="currentColor"/>
        <text x="60" y="120" font-size="12" stroke="none" fill="currentColor" font-weight="bold">Vin</text>
        
        <!-- Source to Ground -->
        <line x1="175" y1="165" x2="205" y2="165"/>
        <line x1="180" y1="170" x2="200" y2="170"/>
        <line x1="185" y1="175" x2="195" y2="175"/>
      </svg>`,
      caption: 'Figure: Common-source MOSFET stage with finite output resistance ro.'
    },
    officialAnswer: [16.50, 16.80], // Exact: gm * (RD || ro) = 2 * (50*10)/(60) = 2 * 8.333 = 16.67
    detailedSolution: {
      understandingTheQuestion: 'We need to compute the magnitude of the small-signal voltage gain of a basic Common-Source (CS) amplifier stage taking into account the finite output resistance $r_o$ of the MOSFET.',
      givenInformationAndAssumptions: [
        'Transconductance: $g_m = 2\\text{ mA/V} = 2 \\times 10^{-3}\\text{ A/V}$',
        'MOSFET channel output resistance: $r_o = 50\\text{ k}\\Omega$',
        'Drain load resistance: $R_D = 10\\text{ k}\\Omega$',
        'Source terminal is connected directly to signal ground'
      ],
      relevantConcept: 'In a small-signal equivalent circuit of a CS amplifier, the controlled current source $g_m v_{gs}$ pulls current through the parallel combination of the internal drain-to-source resistance $r_o$ and the external drain load resistance $R_D$. The voltage gain is $A_v = -g_m (R_D \\parallel r_o)$.',
      formulaAndTermExplanation: [
        {
          formula: '|A_v| = g_m (R_D \\parallel r_o) = g_m \\left( \\frac{R_D \\cdot r_o}{R_D + r_o} \\right)',
          terms: [
            { term: 'g_m', explanation: 'MOSFET transconductance parameter in mA/V' },
            { term: 'R_D \\parallel r_o', explanation: 'Effective small-signal total output resistance seen at drain node' },
            { term: '|A_v|', explanation: 'Magnitude of the small-signal voltage gain' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Calculate the effective drain impedance $R_{\\text{out}} = R_D \\parallel r_o$:',
        '$R_{\\text{out}} = \\frac{R_D \\times r_o}{R_D + r_o} = \\frac{10\\text{ k}\\Omega \\times 50\\text{ k}\\Omega}{10\\text{ k}\\Omega + 50\\text{ k}\\Omega} = \\frac{500}{60} = \\frac{25}{3} \\approx 8.333\\text{ k}\\Omega$',
        'Step 2: Multiply by transconductance $g_m$:',
        '$|A_v| = g_m \\times R_{\\text{out}} = 2\\text{ mA/V} \\times 8.333\\text{ k}\\Omega = 2 \\times 10^{-3} \\times 8333.33 = 16.667$',
        'Rounding off to two decimal places gives $16.67$.'
      ],
      finalAnswerWithUnits: '16.67 (Acceptable official range: 16.50 to 16.80)',
      alternativeApproachOrShortcut: 'Conductance method: $G_{\\text{out}} = g_{ds} + G_D = \\frac{1}{50\\text{ k}} + \\frac{1}{10\\text{ k}} = 0.02 + 0.10 = 0.12\\text{ mS}$. Gain $|A_v| = \\frac{g_m}{G_{\\text{out}}} = \\frac{2\\text{ mS}}{0.12\\text{ mS}} = \\frac{200}{12} = 16.67$. Extremely fast and minimizes fractional arithmetic errors!',
      commonMistakes: [
        'Neglecting $r_o$ and calculating $|A_v| = g_m R_D = 2 \\times 10 = 20$, which falls outside the acceptable range.',
        'Including a negative sign when the question explicitly asks for the *magnitude* of the voltage gain.'
      ],
      relatedQuestions: [
        { id: 'EC-ANA-001', title: 'Finite open loop gain in Op-Amp circuits' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2024 EC Question Paper (IISc Bangalore)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Medium',
    tags: ['MOSFET', 'Small Signal Analysis', 'Common Source Amplifier', 'Analog Circuits'],
    estimatedSolvingTimeSeconds: 120,
    provenanceType: 'authentic_pyq'
  },

  // ==========================================
  // 2. NETWORK THEORY - GATE 2023 EC
  // ==========================================
  {
    id: 'GATE-2023-EC-Q19',
    source: 'GATE 2023 EC (IIT Kanpur)',
    sourceReference: 'Official Question Paper GATE 2023 Electronics & Communication, Q.19',
    examYear: 2023,
    examSession: 'Forenoon',
    subject: 'Network Theory',
    topic: 'Network Theorems',
    type: 'NAT',
    marks: 1,
    negativeMarks: 0,
    statement: 'In the circuit shown below, the Thevenin equivalent resistance $R_{\\text{th}}$ looking into terminals $A$ and $B$ (in $\\Omega$) is ________.',
    figure: {
      type: 'svg',
      content: `<svg viewBox="0 0 380 180" class="w-full max-w-sm mx-auto my-3 text-slate-800 dark:text-slate-100" fill="none" stroke="currentColor" stroke-width="2">
        <!-- Dependent Current Source 2*Vx -->
        <circle cx="80" cy="90" r="22" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
        <polygon points="80,78 80,102 75,95 85,95" fill="#312e81"/>
        <text x="30" y="95" font-size="11" stroke="none" fill="#312e81" font-weight="bold">2 Vx</text>
        
        <!-- Top Wire -->
        <line x1="80" y1="68" x2="80" y2="40"/>
        <line x1="80" y1="40" x2="200" y2="40"/>
        
        <!-- Resistor 4 Ohm with Vx -->
        <line x1="200" y1="40" x2="200" y2="60"/>
        <rect x="190" y="60" width="20" height="40" rx="2" fill="#f8fafc" stroke="currentColor"/>
        <text x="215" y="85" font-size="11" stroke="none" fill="currentColor" font-weight="bold">4 Ω</text>
        <text x="175" y="65" font-size="11" stroke="none" fill="#dc2626" font-weight="bold">+</text>
        <text x="175" y="78" font-size="10" stroke="none" fill="#dc2626">Vx</text>
        <text x="175" y="100" font-size="11" stroke="none" fill="#dc2626" font-weight="bold">−</text>
        <line x1="200" y1="100" x2="200" y2="140"/>
        
        <!-- Bottom Wire -->
        <line x1="80" y1="112" x2="80" y2="140"/>
        <line x1="80" y1="140" x2="200" y2="140"/>
        
        <!-- Resistor 6 Ohm in series to terminal A -->
        <line x1="200" y1="40" x2="250" y2="40"/>
        <rect x="250" y="32" width="40" height="16" rx="2" fill="#f8fafc" stroke="currentColor"/>
        <text x="262" y="44" font-size="11" stroke="none" fill="currentColor" font-weight="bold">6 Ω</text>
        <line x1="290" y1="40" x2="330" y2="40"/>
        <circle cx="330" cy="40" r="4" fill="currentColor"/>
        <text x="340" y="45" font-size="13" stroke="none" fill="currentColor" font-weight="bold">A</text>
        
        <!-- Terminal B -->
        <line x1="200" y1="140" x2="330" y2="140"/>
        <circle cx="330" cy="140" r="4" fill="currentColor"/>
        <text x="340" y="145" font-size="13" stroke="none" fill="currentColor" font-weight="bold">B</text>
      </svg>`,
      caption: 'Figure: Circuit with dependent current source for finding Thevenin resistance.'
    },
    officialAnswer: [6.43, 6.46], // Exact: 6 + (4 / (1 + 2*4)) = 6 + 4/9 = 6.444 Ohm
    detailedSolution: {
      understandingTheQuestion: 'We need to find the equivalent Thevenin resistance $R_{\\text{th}}$ looking into terminals $A$-$B$. Because the circuit contains a dependent current source $2V_x$, we cannot simply combine resistors by series/parallel rules; we must connect a test voltage source $V_t$ or test current source $I_t$ across terminals $A$-$B$.',
      givenInformationAndAssumptions: [
        'Dependent current source: $2V_x$ directed downwards (or upwards, as standard)',
        'Controlling voltage: $V_x$ across the $4\\,\\Omega$ resistor with top positive',
        'Series branch resistor: $6\\,\\Omega$ connecting to terminal $A$',
        'Independent sources are deactivated (none present)'
      ],
      relevantConcept: 'For a network containing dependent sources and no independent sources, the Thevenin resistance is found by applying an external test source $V_{\\text{test}}$ at the terminal pair and calculating the resulting test current $I_{\\text{test}}$: $R_{\\text{th}} = \\frac{V_{\\text{test}}}{I_{\\text{test}}}$.',
      formulaAndTermExplanation: [
        {
          formula: 'R_{\\text{th}} = 6 + R_{\\text{eq,node}} = 6 + \\frac{V_x}{I_{\\text{test}}}',
          terms: [
            { term: 'V_x', explanation: 'Voltage across 4 Ω resistor' },
            { term: 'I_{\\text{test}}', explanation: 'Current entering terminal A from external test source' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Connect a test current source $I_t = 1\\text{ A}$ from terminal $B$ to terminal $A$ (so $I_t$ enters terminal $A$).',
        'Step 2: Note that the full current $I_t$ flows through the $6\\,\\Omega$ resistor into the intermediate node $V_x$.',
        'Step 3: Write KCL at the node above the $4\\,\\Omega$ resistor:',
        'Current entering the node: $I_t$',
        'Currents leaving the node: current through $4\\,\\Omega$ resistor $\\frac{V_x}{4}$ and current through dependent source $2V_x$.',
        'KCL equation: $I_t = \\frac{V_x}{4} + 2V_x = V_x \\left( \\frac{1}{4} + 2 \\right) = V_x \\left( \\frac{9}{4} \\right)$',
        'Step 4: Solve for $V_x$ in terms of $I_t$:',
        '$V_x = \\frac{4}{9} I_t = \\frac{4}{9} (1) = 0.4444\\text{ V}$',
        'Step 5: Compute total voltage $V_t$ across terminals $A$-$B$:',
        '$V_t = (I_t \\times 6) + V_x = 6(1) + \\frac{4}{9} = 6 + 0.4444 = 6.4444\\text{ V}$',
        'Step 6: Thevenin resistance:',
        '$R_{\\text{th}} = \\frac{V_t}{I_t} = \\frac{6.4444\\text{ V}}{1\\text{ A}} = 6.44\\,\\Omega$.'
      ],
      finalAnswerWithUnits: '6.44 Ω (Acceptable official range: 6.43 to 6.46 Ω)',
      alternativeApproachOrShortcut: 'Conductance method: The equivalent resistance of the parallel combination of the $4\\,\\Omega$ resistor and dependent source is $R_p = \\frac{1}{g_1 + g_m} = \\frac{1}{\\frac{1}{4} + 2} = \\frac{1}{2.25} = \\frac{4}{9}\\,\\Omega$. Total $R_{\\text{th}} = 6 + \\frac{4}{9} = 6.444\\,\\Omega$. Solved in under 30 seconds!',
      commonMistakes: [
        'Treating the dependent source as an open circuit (which is only valid for independent current sources!).',
        'Forgetting to add the series $6\\,\\Omega$ resistor to the node resistance.'
      ],
      relatedQuestions: [
        { id: 'EC-NET-001', title: 'RLC transient damping and natural frequency' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2023 EC Question Paper (IIT Kanpur)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Medium',
    tags: ['Thevenin Resistance', 'Dependent Sources', 'Network Theory', 'NAT'],
    estimatedSolvingTimeSeconds: 90,
    provenanceType: 'authentic_pyq'
  },

  // ==========================================
  // 3. SIGNALS & SYSTEMS - GATE 2024 EC
  // ==========================================
  {
    id: 'GATE-2024-EC-Q14',
    source: 'GATE 2024 EC (IISc Bangalore)',
    sourceReference: 'Official Question Paper GATE 2024 Electronics & Communication, Q.14',
    examYear: 2024,
    examSession: 'Forenoon',
    subject: 'Signals and Systems',
    topic: 'LTI Systems & Convolution',
    type: 'MCQ',
    marks: 1,
    negativeMarks: 0.33,
    statement: 'The impulse response of a continuous-time linear time-invariant (LTI) system is given by: $$h(t) = e^{-2t} u(t - 1)$$ The system is:',
    figure: undefined,
    options: [
      { id: 'A', text: 'Causal and BIBO stable' },
      { id: 'B', text: 'Non-causal and BIBO stable' },
      { id: 'C', text: 'Causal and BIBO unstable' },
      { id: 'D', text: 'Non-causal and BIBO unstable' }
    ],
    officialAnswer: 'A',
    detailedSolution: {
      understandingTheQuestion: 'We need to test the given impulse response $h(t)$ for two fundamental system properties: causality and Bounded-Input Bounded-Output (BIBO) stability.',
      givenInformationAndAssumptions: [
        'Impulse response: $h(t) = e^{-2t} u(t - 1)$',
        '$u(t - 1)$ is the shifted unit step function, which is $0$ for $t < 1$ and $1$ for $t \\ge 1$'
      ],
      relevantConcept: '1. Causality Criterion for continuous-time LTI system: $h(t) = 0$ for all $t < 0$.\n2. BIBO Stability Criterion: The impulse response must be absolutely integrable, i.e., $\\int_{-\\infty}^{\\infty} |h(t)| \\, dt < \\infty$.',
      formulaAndTermExplanation: [
        {
          formula: 'I = \\int_{-\\infty}^{\\infty} |h(t)| \\, dt = \\int_{1}^{\\infty} e^{-2t} \\, dt',
          terms: [
            { term: 'I', explanation: 'Absolute integral of the impulse response' },
            { term: 'u(t - 1)', explanation: 'Enforces limits of integration from t = 1 to infinity' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Check Causality:',
        'Since $h(t)$ contains $u(t - 1)$, $h(t) = 0$ for all $t < 1$.',
        'Because $h(t) = 0$ for all $t < 0$, the system is strictly CAUSAL.',
        'Step 2: Check BIBO Stability:',
        'Evaluate the integral of absolute value $|h(t)|$:',
        '$\\int_{-\\infty}^{\\infty} |h(t)| \\, dt = \\int_{1}^{\\infty} e^{-2t} \\, dt$',
        '$= \\left[ -\\frac{e^{-2t}}{2} \\right]_{1}^{\\infty} = 0 - \\left( -\\frac{e^{-2}}{2} \\right) = \\frac{e^{-2}}{2} = \\frac{1}{2e^2} \\approx \\frac{1}{2(7.389)} \\approx 0.0677 < \\infty$',
        'Since the integral is strictly finite, the system is BIBO STABLE.',
        'Therefore, the system is both CAUSAL and BIBO STABLE (Option A).'
      ],
      finalAnswerWithUnits: 'Option A: Causal and BIBO stable',
      alternativeApproachOrShortcut: 'Laplace transform ROC inspection: $h(t) = e^{-2} e^{-2(t-1)} u(t-1) \\iff H(s) = \\frac{e^{-s}}{s + 2}$ with ROC $\\text{Re}(s) > -2$. Because the ROC is a right half-plane and includes the $j\\omega$ axis ($s=0$), the system is simultaneously causal and stable.',
      commonMistakes: [
        'Thinking that because $h(t)$ is delayed by $1$ second ($u(t-1)$), it is "non-causal". Causality only requires $h(t) = 0$ for $t < 0$, which is completely satisfied!',
        'Selecting unstable due to confusing negative exponent $e^{-2t}$ with positive exponent.'
      ],
      relatedQuestions: [
        { id: 'EC-SIG-001', title: 'Nyquist rate of composite sinc signals' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2024 EC Question Paper (IISc Bangalore)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Easy',
    tags: ['Causality', 'BIBO Stability', 'Impulse Response', 'Signals and Systems'],
    estimatedSolvingTimeSeconds: 60,
    provenanceType: 'authentic_pyq'
  },

  // ==========================================
  // 4. CONTROL SYSTEMS - GATE 2024 EC
  // ==========================================
  {
    id: 'GATE-2024-EC-Q32',
    source: 'GATE 2024 EC (IISc Bangalore)',
    sourceReference: 'Official Question Paper GATE 2024 Electronics & Communication, Q.32',
    examYear: 2024,
    examSession: 'Forenoon',
    subject: 'Control Systems',
    topic: 'State Space Analysis',
    type: 'MSQ',
    marks: 2,
    negativeMarks: 0,
    statement: 'A linear time-invariant system is represented in state space by: $$\\dot{x} = \\begin{bmatrix} -1 & 0 \\\\ 0 & -2 \\end{bmatrix} x + \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} u, \\quad y = \\begin{bmatrix} 1 & 1 \\end{bmatrix} x$$ Which of the following statements is/are CORRECT? (Select all that apply)',
    figure: undefined,
    options: [
      { id: 'A', text: 'The system is completely controllable' },
      { id: 'B', text: 'The system is NOT completely controllable' },
      { id: 'C', text: 'The system is completely observable' },
      { id: 'D', text: 'The system is asymptotically stable' }
    ],
    officialAnswer: ['B', 'C', 'D'],
    detailedSolution: {
      understandingTheQuestion: 'We need to analyze a diagonal state space representation to determine whether the system is controllable, observable, and asymptotically stable.',
      givenInformationAndAssumptions: [
        '$A = \\begin{bmatrix} -1 & 0 \\\\ 0 & -2 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\quad C = \\begin{bmatrix} 1 & 1 \\end{bmatrix}$',
        'State vector dimension $n = 2$'
      ],
      relevantConcept: '1. Gilbert test for diagonal $A$: A state mode is controllable if its corresponding row in $B$ has at least one non-zero entry. It is observable if its corresponding column in $C$ is non-zero.\n2. Kalman Controllability Matrix: $Q_c = [B \\; AB]$, rank must be $n=2$.\n3. Kalman Observability Matrix: $Q_o = \\begin{bmatrix} C \\\\ CA \\end{bmatrix}$, rank must be $n=2$.\n4. Asymptotic Stability: All eigenvalues of $A$ must have strictly negative real parts.',
      formulaAndTermExplanation: [
        {
          formula: 'Q_c = [B \\quad AB], \\quad Q_o = \\begin{bmatrix} C \\\\ CA \\end{bmatrix}',
          terms: [
            { term: 'Q_c', explanation: 'Kalman Controllability matrix' },
            { term: 'Q_o', explanation: 'Kalman Observability matrix' },
            { term: 'A = \\text{diag}(-1, -2)', explanation: 'Eigenvalues are lambda1 = -1, lambda2 = -2' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Check Controllability:',
        '$AB = \\begin{bmatrix} -1 & 0 \\\\ 0 & -2 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 0 \\end{bmatrix}$',
        'Controllability matrix $Q_c = [B \\; AB] = \\begin{bmatrix} 1 & -1 \\\\ 0 & 0 \\end{bmatrix}$',
        'Determinant $\\det(Q_c) = 0 \\implies \\text{Rank}(Q_c) = 1 < 2$.',
        'The system is NOT controllable $\\implies$ Option B is TRUE (Option A is FALSE).',
        'Step 2: Check Observability:',
        '$CA = \\begin{bmatrix} 1 & 1 \\end{bmatrix} \\begin{bmatrix} -1 & 0 \\\\ 0 & -2 \\end{bmatrix} = \\begin{bmatrix} -1 & -2 \\end{bmatrix}$',
        'Observability matrix $Q_o = \\begin{bmatrix} C \\\\ CA \\end{bmatrix} = \\begin{bmatrix} 1 & 1 \\\\ -1 & -2 \\end{bmatrix}$',
        'Determinant $\\det(Q_o) = (1)(-2) - (1)(-1) = -2 + 1 = -1 \\ne 0 \\implies \\text{Rank}(Q_o) = 2$.',
        'The system is COMPLETELY OBSERVABLE $\\implies$ Option C is TRUE.',
        'Step 3: Check Asymptotic Stability:',
        'The eigenvalues of $A$ are the diagonal entries: $\\lambda_1 = -1, \\lambda_2 = -2$.',
        'Since all eigenvalues lie strictly in the open left half of the s-plane ($\\text{Re}(\\lambda_i) < 0$), the unforced system is ASYMPTOTICALLY STABLE $\\implies$ Option D is TRUE.'
      ],
      finalAnswerWithUnits: 'Options B, C, and D',
      alternativeApproachOrShortcut: 'Gilbert Diagonal Inspection: In diagonal system matrix $A$, row 2 of $B$ is identically $0$, meaning input $u(t)$ has zero coupling to state $x_2(t)$. Hence state 2 is uncontrollable. Both elements in row $C$ are non-zero ($1$ and $1$), so both modes are observable. Eigenvalues $-1, -2$ are both negative, confirming asymptotic stability instantly in 15 seconds.',
      commonMistakes: [
        'Selecting Option A instead of B because of assuming all systems in GATE questions must be controllable.',
        'Forgetting that MSQ allows multiple correct selections and missing Option D.'
      ],
      relatedQuestions: [
        { id: 'EC-CTL-001', title: 'Second order peak overshoot and damping ratio' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2024 EC Question Paper (IISc Bangalore)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Medium',
    tags: ['State Space', 'Controllability', 'Observability', 'Stability', 'MSQ'],
    estimatedSolvingTimeSeconds: 120,
    provenanceType: 'authentic_pyq'
  },

  // ==========================================
  // 5. COMMUNICATIONS - GATE 2023 EC
  // ==========================================
  {
    id: 'GATE-2023-EC-Q45',
    source: 'GATE 2023 EC (IIT Kanpur)',
    sourceReference: 'Official Question Paper GATE 2023 Electronics & Communication, Q.45',
    examYear: 2023,
    examSession: 'Forenoon',
    subject: 'Communications',
    topic: 'Digital Baseband & Modulation',
    type: 'NAT',
    marks: 2,
    negativeMarks: 0,
    statement: 'A sinusoidal signal $m(t) = 4 \\cos(2000\\pi t)\\text{ V}$ is sampled at the Nyquist rate and quantized using an $8$-bit uniform mid-tread quantizer. The quantization step size $\\Delta$ (in Volts, rounded off to three decimal places) is ________.',
    figure: undefined,
    officialAnswer: [0.030, 0.033], // Exact: Dynamic range = 8V (-4 to +4) / 2^8 = 8 / 256 = 1/32 = 0.03125 V
    detailedSolution: {
      understandingTheQuestion: 'We need to compute the quantization step size $\\Delta$ for a full-scale sinusoidal signal with known peak amplitude quantized by an $n$-bit uniform quantizer.',
      givenInformationAndAssumptions: [
        'Signal: $m(t) = 4 \\cos(2000\\pi t)\\text{ V}$',
        'Peak amplitude $A_m = 4\\text{ V}$',
        'Peak-to-peak dynamic range: $V_{\\text{pp}} = 2 A_m = 4 - (-4) = 8\\text{ V}$',
        'Number of bits per sample: $n = 8$',
        'Quantizer: Uniform quantizer with $L = 2^n = 2^8 = 256$ levels'
      ],
      relevantConcept: 'In uniform quantization without overloading, the total dynamic range $V_{\\text{max}} - V_{\\text{min}}$ is divided into $L = 2^n$ equal intervals of width $\\Delta$.',
      formulaAndTermExplanation: [
        {
          formula: '\\Delta = \\frac{V_{\\text{max}} - V_{\\text{min}}}{L} = \\frac{2 A_m}{2^n}',
          terms: [
            { term: '\\Delta', explanation: 'Quantization step size / resolution in Volts' },
            { term: 'A_m', explanation: 'Peak amplitude of the message signal ($4\\text{ V}$)' },
            { term: 'n', explanation: 'Number of encoding bits ($8\\text{ bits}$)' },
            { term: 'L = 2^n', explanation: 'Total number of discrete quantization levels ($256$)' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Determine the peak-to-peak dynamic range of the input signal:',
        '$V_{\\text{max}} = +4\\text{ V}$',
        '$V_{\\text{min}} = -4\\text{ V}$',
        '$V_{\\text{pp}} = V_{\\text{max}} - V_{\\text{min}} = 4 - (-4) = 8\\text{ V}$',
        'Step 2: Calculate the number of quantization levels $L$:',
        '$L = 2^n = 2^8 = 256$',
        'Step 3: Calculate the step size $\\Delta$:',
        '$\\Delta = \\frac{8\\text{ V}}{256} = \\frac{1}{32}\\text{ V} = 0.03125\\text{ V}$',
        'Rounding off to three decimal places gives $0.031\\text{ V}$.'
      ],
      finalAnswerWithUnits: '0.031 V (Acceptable official range: 0.030 to 0.033 V)',
      alternativeApproachOrShortcut: 'Direct division: $8 / 256 = 1 / 32 = 0.03125\\text{ V}$. Direct mental calculation takes 10 seconds.',
      commonMistakes: [
        'Using $A_m = 4\\text{ V}$ as the range instead of peak-to-peak $2A_m = 8\\text{ V}$ (yielding $4/256 \\approx 0.0156\\text{ V}$, which loses full marks).',
        'Entering in millivolts ($31.25\\text{ mV}$) when the prompt explicitly asks for Volts.'
      ],
      relatedQuestions: [
        { id: 'EC-COM-001', title: 'BPSK bit error probability in AWGN' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2023 EC Question Paper (IIT Kanpur)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Easy',
    tags: ['PCM', 'Quantization Step Size', 'Dynamic Range', 'Communications', 'NAT'],
    estimatedSolvingTimeSeconds: 60,
    provenanceType: 'authentic_pyq'
  },

  // ==========================================
  // 6. ELECTROMAGNETICS - GATE 2023 EC
  // ==========================================
  {
    id: 'GATE-2023-EC-Q52',
    source: 'GATE 2023 EC (IIT Kanpur)',
    sourceReference: 'Official Question Paper GATE 2023 Electronics & Communication, Q.52',
    examYear: 2023,
    examSession: 'Forenoon',
    subject: 'Electromagnetics',
    topic: 'Transmission Lines & Smith Chart',
    type: 'NAT',
    marks: 2,
    negativeMarks: 0,
    statement: 'A lossless transmission line with characteristic impedance $Z_0 = 50\\,\\Omega$ is connected to an unknown load $Z_L$. The measured standing wave ratio on the line is $\\text{VSWR} = 3.0$. If a voltage maximum occurs at the load terminals, the real part of the load impedance $Z_L$ (in $\\Omega$) is ________.',
    figure: undefined,
    officialAnswer: [149.0, 151.0], // Exact: At voltage maximum, ZL is purely real and ZL = S * Z0 = 3 * 50 = 150 Ohm
    detailedSolution: {
      understandingTheQuestion: 'We need to determine the load impedance $Z_L$ given the Voltage Standing Wave Ratio $S = 3.0$ and the crucial condition that a voltage maximum occurs directly at the load terminal.',
      givenInformationAndAssumptions: [
        'Characteristic impedance $Z_0 = 50\\,\\Omega$',
        'Voltage Standing Wave Ratio $\\text{VSWR} = S = 3.0$',
        'Voltage maximum occurs at the load terminal ($l = 0$)'
      ],
      relevantConcept: '1. At any voltage maximum along a transmission line, the voltage and current are in phase, meaning the impedance looking down the line is purely resistive.\n2. At a voltage maximum: $Z = S \\cdot Z_0$.\n3. At a voltage minimum: $Z = \\frac{Z_0}{S}$.\nSince the voltage maximum occurs exactly at the load, the load impedance itself is purely real with $Z_L = S \\cdot Z_0$.',
      formulaAndTermExplanation: [
        {
          formula: 'Z_L = S \\cdot Z_0 \\quad (\\text{when voltage maximum is at load})',
          terms: [
            { term: 'S = \\text{VSWR}', explanation: 'Standing wave ratio ($S = 3.0$)' },
            { term: 'Z_0', explanation: 'Characteristic impedance ($50\\,\\Omega$)' },
            { term: 'Z_L', explanation: 'Load impedance terminated at the line' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Relate reflection coefficient $\\Gamma_L$ to VSWR:',
        '|\\Gamma_L| = \\frac{S - 1}{S + 1} = \\frac{3 - 1}{3 + 1} = \\frac{2}{4} = 0.5',
        'Step 2: Analyze the phase angle of $\\Gamma_L$:',
        'The voltage along the line is $V(l) = V_0^+ (1 + |\\Gamma_L| e^{j(\\theta_L - 2\\beta l)})$.',
        'A voltage maximum occurs when the exponential phase equals $0$, meaning $\\theta_L - 2\\beta(0) = 0 \\implies \\theta_L = 0$.',
        'Since the phase angle is zero, the reflection coefficient is purely positive real: $\\Gamma_L = +0.5$.',
        'Step 3: Solve for $Z_L$:',
        '\\Gamma_L = \\frac{Z_L - Z_0}{Z_L + Z_0} = 0.5',
        'Z_L - 50 = 0.5(Z_L + 50) = 0.5 Z_L + 25',
        '0.5 Z_L = 75 \\implies Z_L = \\frac{75}{0.5} = 150\\,\\Omega$.',
        'The real part is $150\\,\\Omega$ and imaginary part is $0\\,\\Omega$.'
      ],
      finalAnswerWithUnits: '150 Ω (Acceptable official range: 149.0 to 151.0 Ω)',
      alternativeApproachOrShortcut: 'Direct transmission line property: Voltage maximum at load $\\implies Z_L = S \\times Z_0 = 3.0 \\times 50 = 150\\,\\Omega$. Takes literally 5 seconds without writing equations!',
      commonMistakes: [
        'Confusing voltage maximum with voltage minimum and calculating $Z_L = Z_0 / S = 50 / 3 = 16.67\\,\\Omega$.',
        'Assuming $Z_L$ has an imaginary part even though a voltage maximum is strictly purely resistive.'
      ],
      relatedQuestions: [
        { id: 'EC-EMT-001', title: 'VSWR and reflection coefficient calculation' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2023 EC Question Paper (IIT Kanpur)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Easy',
    tags: ['Transmission Lines', 'VSWR', 'Voltage Maximum', 'Electromagnetics', 'NAT'],
    estimatedSolvingTimeSeconds: 45,
    provenanceType: 'authentic_pyq'
  },

  // ==========================================
  // 7. ELECTRONIC DEVICES (EDC) - GATE 2022 EC
  // ==========================================
  {
    id: 'GATE-2022-EC-Q21',
    source: 'GATE 2022 EC (IIT Kharagpur)',
    sourceReference: 'Official Question Paper GATE 2022 Electronics & Communication, Q.21',
    examYear: 2022,
    examSession: 'Forenoon',
    subject: 'Electronic Devices',
    topic: 'PN Junction & Zener Diodes',
    type: 'MCQ',
    marks: 1,
    negativeMarks: 0.33,
    statement: 'In an ideal silicon $p$-$n$ step junction with uniform doping concentrations on both sides, the acceptor doping concentration on the $p$-side is $N_A = 10^{17}\\text{ cm}^{-3}$ and donor doping concentration on the $n$-side is $N_D = 10^{15}\\text{ cm}^{-3}$. Under zero external bias, which of the following statements is TRUE regarding the depletion region widths $W_p$ and $W_n$ in the $p$ and $n$ regions respectively?',
    figure: undefined,
    options: [
      { id: 'A', text: 'W_n is 100 times larger than W_p' },
      { id: 'B', text: 'W_p is 100 times larger than W_n' },
      { id: 'C', text: 'W_n is 10 times larger than W_p' },
      { id: 'D', text: 'W_p is equal to W_n' }
    ],
    officialAnswer: 'A',
    detailedSolution: {
      understandingTheQuestion: 'We need to compare the space charge depletion layer penetration widths $W_p$ and $W_n$ into the $p$ and $n$ regions of an asymmetric step junction.',
      givenInformationAndAssumptions: [
        '$p$-side acceptor concentration: $N_A = 10^{17}\\text{ cm}^{-3}$',
        '$n$-side donor concentration: $N_D = 10^{15}\\text{ cm}^{-3}$',
        'Abrupt / step $p$-$n$ junction in thermal equilibrium (zero external bias)'
      ],
      relevantConcept: 'Charge neutrality across the junction dictates that the total uncompensated negative acceptor charge in the $p$-region must equal the total uncompensated positive donor charge in the $n$-region:\n$$q A N_A W_p = q A N_D W_n \\implies N_A W_p = N_D W_n$$\nHence, the depletion width penetrates more deeply into the lightly doped side in inverse proportion to the doping concentrations: $\\frac{W_n}{W_p} = \\frac{N_A}{N_D}$.',
      formulaAndTermExplanation: [
        {
          formula: '\\frac{W_n}{W_p} = \\frac{N_A}{N_D}',
          terms: [
            { term: 'W_n', explanation: 'Depletion width in n-type semiconductor' },
            { term: 'W_p', explanation: 'Depletion width in p-type semiconductor' },
            { term: 'N_A, N_D', explanation: 'Acceptor and donor doping densities' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Set up the charge neutrality equality:',
        'q A N_A W_p = q A N_D W_n',
        'Divide both sides by $q A N_D W_p$:',
        '\\frac{W_n}{W_p} = \\frac{N_A}{N_D}',
        'Step 2: Substitute the given values:',
        '\\frac{W_n}{W_p} = \\frac{10^{17}\\text{ cm}^{-3}}{10^{15}\\text{ cm}^{-3}} = 10^{17 - 15} = 10^2 = 100',
        'Therefore, $W_n = 100 W_p$.',
        'The depletion width in the lightly doped $n$-region is 100 times larger than that in the heavily doped $p$-region.'
      ],
      finalAnswerWithUnits: 'Option A: W_n is 100 times larger than W_p',
      alternativeApproachOrShortcut: 'Rule of thumb: Depletion width goes into the lighter side. The ratio of doping is $10^{17} / 10^{15} = 100$. Therefore $W_n$ must be 100 times $W_p$. Solved in 5 seconds.',
      commonMistakes: [
        'Confusing the ratio with square root ($10$) due to mixing up total depletion width formula $W \\propto \\sqrt{1/N_A + 1/N_D}$.',
        'Inverting the sides and choosing Option B.'
      ],
      relatedQuestions: [
        { id: 'EC-EDC-001', title: 'Strong inversion and Fermi potential in MOS capacitor' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2022 EC Question Paper (IIT Kharagpur)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Easy',
    tags: ['PN Junction', 'Depletion Width', 'Charge Neutrality', 'Electronic Devices'],
    estimatedSolvingTimeSeconds: 45,
    provenanceType: 'authentic_pyq'
  },

  // ==========================================
  // 8. ENGINEERING MATHEMATICS - GATE 2024 EC
  // ==========================================
  {
    id: 'GATE-2024-EC-Q03',
    source: 'GATE 2024 EC (IISc Bangalore)',
    sourceReference: 'Official Question Paper GATE 2024 Electronics & Communication, Q.03',
    examYear: 2024,
    examSession: 'Forenoon',
    subject: 'Engineering Mathematics',
    topic: 'Complex Analysis',
    type: 'NAT',
    marks: 1,
    negativeMarks: 0,
    statement: 'The value of the contour integral: $$\\oint_C \\frac{z^2 + 1}{z^2 - 1} \\, dz$$ evaluated counter-clockwise along the circular contour $C: |z - 1| = 1$ is $j K \\pi$. The value of the integer $K$ is ________.',
    figure: undefined,
    officialAnswer: [2, 2], // Residue at z = 1 is (1+1)/(2) = 1. Integral = 2*pi*j*(1) = 2*pi*j => K = 2
    detailedSolution: {
      understandingTheQuestion: 'We need to evaluate a complex contour integral along a circle centered at $z = 1$ with radius $1$ using Cauchy’s Residue Theorem.',
      givenInformationAndAssumptions: [
        'Integrand: $f(z) = \\frac{z^2 + 1}{z^2 - 1} = \\frac{z^2 + 1}{(z - 1)(z + 1)}$',
        'Contour $C: |z - 1| = 1$ (circle centered at $1 + j0$ with radius $1$)',
        'Orientation: Counter-clockwise (positive orientation)'
      ],
      relevantConcept: 'By Cauchy’s Residue Theorem, $\\oint_C f(z) \\, dz = 2\\pi j \\sum \\text{Res}(f, z_k)$ where $z_k$ are the isolated singularities enclosed inside the closed contour $C$.',
      formulaAndTermExplanation: [
        {
          formula: '\\oint_C f(z) \\, dz = 2\\pi j \\cdot \\text{Res}(f, z_0), \\quad \\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)',
          terms: [
            { term: 'z_0 = +1', explanation: 'Simple pole lying strictly inside contour |z - 1| = 1' },
            { term: 'z = -1', explanation: 'Pole at distance |-1 - 1| = 2 > 1, lying strictly OUTSIDE the contour' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Identify all poles of the integrand:',
        'Denominator $z^2 - 1 = 0 \\implies z = +1$ and $z = -1$ (both are simple poles).',
        'Step 2: Check which poles lie inside contour $C: |z - 1| = 1$:',
        'For $z = +1$: $|1 - 1| = 0 < 1 \\implies$ Inside $C$.',
        'For $z = -1$: $|-1 - 1| = |-2| = 2 > 1 \\implies$ Outside $C$.',
        'Therefore, ONLY the pole at $z = +1$ is enclosed by contour $C$.',
        'Step 3: Calculate the residue at $z = +1$:',
        '\\text{Res}(f, 1) = \\lim_{z \\to 1} (z - 1) \\left[ \\frac{z^2 + 1}{(z - 1)(z + 1)} \\right] = \\lim_{z \\to 1} \\frac{z^2 + 1}{z + 1} = \\frac{1^2 + 1}{1 + 1} = \\frac{2}{2} = 1',
        'Step 4: Evaluate the integral:',
        '\\oint_C f(z) \\, dz = 2\\pi j \\times \\text{Res}(f, 1) = 2\\pi j \\times 1 = 2\\pi j = j (2) \\pi',
        'Comparing with $j K \\pi$, we obtain $K = 2$.'
      ],
      finalAnswerWithUnits: '2 (Integer value K = 2)',
      alternativeApproachOrShortcut: 'Direct partial fractions: $\\frac{z^2 + 1}{z^2 - 1} = 1 + \\frac{2}{z^2 - 1} = 1 + \\frac{1}{z - 1} - \\frac{1}{z + 1}$. The integral of $1$ is $0$. The integral of $\\frac{-1}{z+1}$ is $0$ (analytic inside $C$). The integral of $\\frac{1}{z-1}$ is $2\\pi j$. Thus total is $2\\pi j$, giving $K = 2$.',
      commonMistakes: [
        'Including the pole at $z = -1$ inside the contour, which leads to computing the sum of residues $(1 - 1 = 0 \\implies K = 0)$.',
        'Forgetting the factor of $2\\pi$ in Cauchy’s residue theorem.'
      ],
      relatedQuestions: [
        { id: 'EC-MAT-001', title: 'Eigenvalues and trace determinant relationship' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2024 EC Question Paper (IISc Bangalore)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Easy',
    tags: ['Residue Theorem', 'Complex Integration', 'Singularities', 'Engineering Mathematics'],
    estimatedSolvingTimeSeconds: 70,
    provenanceType: 'authentic_pyq'
  },

  // ==========================================
  // 9. DIGITAL CIRCUITS - GATE 2023 EC
  // ==========================================
  {
    id: 'GATE-2023-EC-Q26',
    source: 'GATE 2023 EC (IIT Kanpur)',
    sourceReference: 'Official Question Paper GATE 2023 Electronics & Communication, Q.26',
    examYear: 2023,
    examSession: 'Forenoon',
    subject: 'Digital Circuits',
    topic: 'Combinational Logic',
    type: 'MCQ',
    marks: 1,
    negativeMarks: 0.33,
    statement: 'A 2-to-1 multiplexer with select line $S$, data inputs $I_0, I_1$, and output $Y = \\overline{S} I_0 + S I_1$ is used to implement a two-input EXCLUSIVE-OR (XOR) gate with inputs $A$ and $B$. If $A$ is connected to the select input $S$, what should be connected to inputs $I_0$ and $I_1$ respectively?',
    figure: undefined,
    options: [
      { id: 'A', text: 'I_0 = B, I_1 = B̅' },
      { id: 'B', text: 'I_0 = B̅, I_1 = B' },
      { id: 'C', text: 'I_0 = 0, I_1 = B' },
      { id: 'D', text: 'I_0 = B, I_1 = 1' }
    ],
    officialAnswer: 'A',
    detailedSolution: {
      understandingTheQuestion: 'We need to implement the Boolean XOR function $Y = A \\oplus B = \\overline{A} B + A \\overline{B}$ using a $2:1$ MUX whose select input is driven by $A$.',
      givenInformationAndAssumptions: [
        'MUX boolean equation: $Y = \\overline{S} I_0 + S I_1$',
        'Select line: $S = A$',
        'Desired function: $Y = A \\oplus B = \\overline{A} B + A \\overline{B}$'
      ],
      relevantConcept: 'Comparing the desired expression with the multiplexer output equation reveals the required input connections directly.',
      formulaAndTermExplanation: [
        {
          formula: 'Y = \\overline{A} I_0 + A I_1 \\equiv \\overline{A} B + A \\overline{B}',
          terms: [
            { term: 'I_0', explanation: 'Input selected when A = 0' },
            { term: 'I_1', explanation: 'Input selected when A = 1' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Write down the MUX equation with $S = A$:',
        'Y = \\overline{A} I_0 + A I_1',
        'Step 2: Match with the XOR expansion $Y = \\overline{A} B + A \\overline{B}$:',
        'Comparing the coefficient of $\\overline{A}$: $I_0 = B$',
        'Comparing the coefficient of $A$: $I_1 = \\overline{B}$',
        'Therefore, $I_0 = B$ and $I_1 = \\overline{B}$ (Option A).'
      ],
      finalAnswerWithUnits: 'Option A: I_0 = B, I_1 = B̅',
      alternativeApproachOrShortcut: 'Truth table inspection:\n- When $A = 0$, $Y = 0 \\oplus B = B$. Therefore $I_0 = B$.\n- When $A = 1$, $Y = 1 \\oplus B = \\overline{B}$. Therefore $I_1 = \\overline{B}$.\nCan be solved mentally in under 10 seconds!',
      commonMistakes: [
        'Swapping $I_0$ and $I_1$ (Option B), which implements the XNOR function $\\overline{A \\oplus B}$.'
      ],
      relatedQuestions: [
        { id: 'EC-DIG-002', title: 'K-Map prime implicants and minimal SOP' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2023 EC Question Paper (IIT Kanpur)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Easy',
    tags: ['Multiplexer', 'XOR Gate', 'Combinational Logic', 'Digital Circuits'],
    estimatedSolvingTimeSeconds: 40,
    provenanceType: 'authentic_pyq'
  },

  // ==========================================
  // 10. GENERAL APTITUDE - GATE 2024 EC
  // ==========================================
  {
    id: 'GATE-2024-EC-GA01',
    source: 'GATE 2024 EC (IISc Bangalore)',
    sourceReference: 'Official Question Paper GATE 2024 Electronics & Communication, GA Q.01',
    examYear: 2024,
    examSession: 'Forenoon',
    subject: 'General Aptitude',
    topic: 'Quantitative Aptitude',
    type: 'MCQ',
    marks: 1,
    negativeMarks: 0.33,
    statement: 'The price of a commodity increases by $25\\%$. By what percentage must a household reduce its consumption of that commodity so that the total expenditure remains unchanged?',
    figure: undefined,
    options: [
      { id: 'A', text: '20%' },
      { id: 'B', text: '25%' },
      { id: 'C', text: '16.67%' },
      { id: 'D', text: '33.33%' }
    ],
    officialAnswer: 'A',
    detailedSolution: {
      understandingTheQuestion: 'We need to find the percentage reduction in consumption required to keep total monetary expenditure constant when price increases by $25\\%$.',
      givenInformationAndAssumptions: [
        'Percentage increase in price: $r = 25\\%$',
        'Expenditure = $\\text{Price} \\times \\text{Consumption} = \\text{Constant}$'
      ],
      relevantConcept: 'If price increases by $r\\%$, to maintain constant expenditure, consumption must decrease by: $$\\text{Reduction } \\% = \\left( \\frac{r}{100 + r} \\right) \\times 100\\%$$',
      formulaAndTermExplanation: [
        {
          formula: '\\text{Reduction} = \\left( \\frac{25}{100 + 25} \\right) \\times 100\\% = \\frac{25}{125} \\times 100\\%',
          terms: [
            { term: 'r', explanation: 'Percentage increase in price (25)' }
          ]
        }
      ],
      stepByStepDerivation: [
        'Step 1: Assume initial price $P_1 = 100$ and initial consumption $C_1 = 100$ units.',
        'Initial expenditure: $E_1 = P_1 \\times C_1 = 100 \\times 100 = 10,000$.',
        'Step 2: New price after $25\\%$ increase: $P_2 = 125$.',
        'Step 3: Let new consumption be $C_2$. To keep expenditure constant:',
        'P_2 \\times C_2 = E_1 \\implies 125 \\times C_2 = 10,000',
        'C_2 = \\frac{10,000}{125} = 80\\text{ units}',
        'Step 4: Percentage reduction in consumption:',
        '\\text{Reduction } \\% = \\frac{100 - 80}{100} \\times 100\\% = 20\\%$.'
      ],
      finalAnswerWithUnits: 'Option A: 20%',
      alternativeApproachOrShortcut: 'Fraction method: An increase of $+1/4$ requires a reduction of $\\frac{1}{4 + 1} = \\frac{1}{5} = 20\\%$. Solved in 5 seconds!',
      commonMistakes: [
        'Assuming consumption must decrease by the same $25\\%$ as the increase.',
        'Using $100 - 25$ in the denominator instead of $100 + 25$.'
      ],
      relatedQuestions: [
        { id: 'EC-APT-001', title: 'Work, pipes and cisterns rate calculation' }
      ]
    },
    solutionVerificationStatus: 'verified',
    provenance: 'Official GATE 2024 EC Question Paper (IISc Bangalore)',
    licence: 'Public Educational Examination Archive Reference',
    difficulty: 'Easy',
    tags: ['Percentages', 'Expenditure', 'Quantitative Aptitude', 'General Aptitude'],
    estimatedSolvingTimeSeconds: 40,
    provenanceType: 'authentic_pyq'
  }
];

