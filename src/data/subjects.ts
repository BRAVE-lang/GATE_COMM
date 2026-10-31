import { SubjectMetadata, SubjectName } from '../types/question';

export const GATE_EC_SUBJECTS: SubjectMetadata[] = [
  {
    id: 'Engineering Mathematics',
    name: 'Engineering Mathematics',
    shortName: 'Engg. Maths',
    description: 'Linear Algebra, Calculus, Differential Equations, Complex Analysis, Probability & Numerical Methods.',
    typicalWeightageMarks: '13 Marks',
    icon: 'Sigma',
    color: 'from-blue-600 to-indigo-600',
    topics: [
      { name: 'Linear Algebra', description: 'Matrix algebra, systems of linear equations, eigenvalues & eigenvectors, rank.', estimatedWeightage: '3 - 4 Marks' },
      { name: 'Calculus', description: 'Mean value theorems, maxima & minima, multiple integrals, vector calculus (Stokes, Gauss divergence).', estimatedWeightage: '3 - 4 Marks' },
      { name: 'Differential Equations', description: 'First order equations, linear ODEs with constant coefficients, Euler-Cauchy, PDEs.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Complex Analysis', description: 'Analytic functions, Cauchy-Riemann equations, Cauchy integral theorem, residue theorem.', estimatedWeightage: '1 - 2 Marks' },
      { name: 'Probability and Statistics', description: 'Conditional probability, Bayes theorem, random variables, Poisson/Normal distributions, correlation.', estimatedWeightage: '3 - 4 Marks' }
    ]
  },
  {
    id: 'General Aptitude',
    name: 'General Aptitude',
    shortName: 'Aptitude',
    description: 'Verbal ability, quantitative aptitude, spatial reasoning, and analytical logic.',
    typicalWeightageMarks: '15 Marks',
    icon: 'BrainCircuit',
    color: 'from-amber-500 to-orange-600',
    topics: [
      { name: 'Quantitative Aptitude', description: 'Data interpretation, percentages, permutations & combinations, series, geometry.', estimatedWeightage: '5 - 6 Marks' },
      { name: 'Analytical Aptitude', description: 'Logic deduction, analogies, numerical reasoning, coding-decoding, Venn diagrams.', estimatedWeightage: '4 - 5 Marks' },
      { name: 'Spatial Aptitude', description: 'Transformations of shapes: rotation, scaling, mirroring, folding, 2D & 3D patterns.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Verbal Aptitude', description: 'Grammar, vocabulary, sentence completion, reading comprehension.', estimatedWeightage: '3 - 4 Marks' }
    ]
  },
  {
    id: 'Network Theory',
    name: 'Network Theory',
    shortName: 'Networks',
    description: 'Circuit analysis theorems, transient response, AC steady state, two-port networks, resonance.',
    typicalWeightageMarks: '8 - 10 Marks',
    icon: 'Zap',
    color: 'from-emerald-500 to-teal-700',
    topics: [
      { name: 'Network Theorems', description: 'Thevenin, Norton, Superposition, Maximum Power Transfer, Tellegen.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Transient & Steady State Analysis', description: 'First & second order RC, RL, RLC circuit transient responses, initial conditions.', estimatedWeightage: '3 - 4 Marks' },
      { name: 'Two-Port Networks', description: 'Z, Y, ABCD, h-parameters, reciprocal and symmetrical networks, interconnection.', estimatedWeightage: '2 Marks' },
      { name: 'AC Sinusoidal Steady State & Resonance', description: 'Phasor diagrams, impedance, resonant frequency, quality factor, bandwidth.', estimatedWeightage: '2 Marks' }
    ]
  },
  {
    id: 'Signals and Systems',
    name: 'Signals and Systems',
    shortName: 'Signals',
    description: 'Continuous & discrete-time LTI systems, Fourier analysis, Laplace transform, z-transform, sampling.',
    typicalWeightageMarks: '8 - 10 Marks',
    icon: 'Activity',
    color: 'from-violet-600 to-purple-800',
    topics: [
      { name: 'Continuous-Time & Discrete-Time Signals', description: 'Classification, periodic/aperiodic, energy & power, impulse, unit step, operations.', estimatedWeightage: '1 - 2 Marks' },
      { name: 'LTI Systems & Convolution', description: 'Linearity, time-invariance, causality, stability, impulse response, graphical convolution.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Fourier Transform & Series', description: 'CTFT, DTFT, DFS, properties, duality, parseval energy theorem, spectrum.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Laplace Transform & z-Transform', description: 'ROC properties, pole-zero plots, inverse transforms, transfer function evaluation.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Sampling Theorem', description: 'Nyquist rate, aliasing, ideal reconstruction filter, flat-top & natural sampling.', estimatedWeightage: '2 Marks' }
    ]
  },
  {
    id: 'Electronic Devices',
    name: 'Electronic Devices',
    shortName: 'EDC',
    description: 'Semiconductor physics, p-n junctions, BJT, MOS capacitor, MOSFET physics and scaling.',
    typicalWeightageMarks: '9 - 11 Marks',
    icon: 'Cpu',
    color: 'from-cyan-600 to-blue-700',
    topics: [
      { name: 'Semiconductor Physics', description: 'Carrier concentration, Fermi-Dirac statistics, drift & diffusion current, Einstein relation.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'PN Junction & Zener Diodes', description: 'Built-in potential, depletion width, breakdown mechanisms, diode capacitance.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'BJT Physics', description: 'Carrier profiles, injection efficiency, base transport factor, Early effect, Gummel-Poon.', estimatedWeightage: '1 - 2 Marks' },
      { name: 'MOSFET & MOS Capacitor', description: 'Flatband, inversion, threshold voltage, C-V characteristics, pinch-off, channel length modulation.', estimatedWeightage: '4 - 5 Marks' }
    ]
  },
  {
    id: 'Analog Circuits',
    name: 'Analog Circuits',
    shortName: 'Analog',
    description: 'Diode circuits, BJT/MOSFET amplifiers, Op-Amp circuits, feedback amplifiers, oscillators, filters.',
    typicalWeightageMarks: '9 - 11 Marks',
    icon: 'Waveform',
    color: 'from-rose-500 to-pink-700',
    topics: [
      { name: 'Diode Applications', description: 'Clippers, clampers, rectifiers, voltage regulators using Zener diodes.', estimatedWeightage: '1 - 2 Marks' },
      { name: 'BJT & MOSFET Amplifiers', description: 'Small-signal models, Common Emitter/Source, Cascode, differential pairs, frequency response.', estimatedWeightage: '3 - 4 Marks' },
      { name: 'Op-Amp Circuits', description: 'Inverting, non-inverting, integrators, differentiators, instrumentation amplifier, slew rate.', estimatedWeightage: '3 - 4 Marks' },
      { name: 'Feedback Amplifiers & Oscillators', description: 'Topologies, desensitivity, Barkhausen criterion, Wien-bridge, Colpitts, LC oscillators.', estimatedWeightage: '2 Marks' }
    ]
  },
  {
    id: 'Digital Circuits',
    name: 'Digital Circuits',
    shortName: 'Digital',
    description: 'Boolean algebra, combinational circuits, sequential circuits (flip-flops, counters), ADC/DAC, semiconductor memories.',
    typicalWeightageMarks: '8 - 10 Marks',
    icon: 'Binary',
    color: 'from-teal-600 to-emerald-800',
    topics: [
      { name: 'Boolean Algebra & Logic Gates', description: 'K-Maps, minterms, maxterms, NAND/NOR realization, hazards and race conditions.', estimatedWeightage: '1 - 2 Marks' },
      { name: 'Combinational Logic', description: 'Multiplexers, decoders, encoders, priority encoders, adders/subtractors.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Sequential Circuits', description: 'Latches, Flip-Flops (SR, JK, D, T), timing (setup/hold), counters, shift registers, state machines.', estimatedWeightage: '3 - 4 Marks' },
      { name: 'Data Converters & Memories', description: 'R-2R ladder, Flash ADC, Dual slope ADC, SAR ADC, ROM, RAM, static timing analysis.', estimatedWeightage: '2 Marks' }
    ]
  },
  {
    id: 'Control Systems',
    name: 'Control Systems',
    shortName: 'Control',
    description: 'Transfer functions, block diagram & SFG, time response, Routh-Hurwitz, Root locus, Nyquist & Bode plots, State variables.',
    typicalWeightageMarks: '8 - 10 Marks',
    icon: 'Sliders',
    color: 'from-indigo-600 to-sky-700',
    topics: [
      { name: 'Transfer Function & Signal Flow Graphs', description: 'Mason gain formula, block diagram reduction, open-loop vs closed-loop.', estimatedWeightage: '1 - 2 Marks' },
      { name: 'Time Domain Analysis', description: 'Standard test signals, transient response of 2nd order systems, peak overshoot, settling time, steady-state error.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Stability & Root Locus', description: 'Routh-Hurwitz criterion, angle/magnitude condition, centroid, breakaway points, asymptotes.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Frequency Domain Analysis', description: 'Bode plots, Nyquist criterion, gain margin, phase margin, compensators (lead, lag, lag-lead).', estimatedWeightage: '2 - 3 Marks' },
      { name: 'State Space Analysis', description: 'State transition matrix, controllability, observability, state feedback pole placement.', estimatedWeightage: '2 Marks' }
    ]
  },
  {
    id: 'Communications',
    name: 'Communications',
    shortName: 'Comm.',
    description: 'Analog communications (AM, FM), Digital communications (PCM, PSK, QAM), random processes, noise & SNR, information theory.',
    typicalWeightageMarks: '10 - 12 Marks',
    icon: 'Radio',
    color: 'from-blue-700 to-cyan-800',
    topics: [
      { name: 'Random Processes & Noise', description: 'Autocorrelation, power spectral density (PSD), white noise, Gaussian process, narrowband noise.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Analog Communications', description: 'AM, DSB-SC, SSB, VSB, FM, PM, Carson rule, superheterodyne receivers, SNR comparison.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Digital Baseband & Modulation', description: 'Sampling, PCM, DPCM, quantization noise, matched filter, ISI, Nyquist pulse shaping, eye diagram.', estimatedWeightage: '3 - 4 Marks' },
      { name: 'Digital Passband Modulation', description: 'BPSK, QPSK, QAM, BFSK, BER probability of error calculations, constellation diagrams.', estimatedWeightage: '3 Marks' },
      { name: 'Information Theory & Coding', description: 'Entropy, mutual information, Shannon channel capacity theorem, linear block codes, cyclic codes.', estimatedWeightage: '2 Marks' }
    ]
  },
  {
    id: 'Electromagnetics',
    name: 'Electromagnetics',
    shortName: 'EMT',
    description: 'Electrostatics, Magnetostatics, Maxwell equations, Plane waves in lossy/lossless media, Transmission lines, Waveguides, Antennas.',
    typicalWeightageMarks: '7 - 9 Marks',
    icon: 'Compass',
    color: 'from-emerald-700 to-teal-900',
    topics: [
      { name: 'Maxwell Equations & Boundary Conditions', description: 'Differential & integral forms, displacement current, continuity equation, dielectric/conductor boundaries.', estimatedWeightage: '1 - 2 Marks' },
      { name: 'Uniform Plane Waves', description: 'Wave propagation in free space & dielectrics, skin depth, attenuation constant, intrinsic impedance, polarization.', estimatedWeightage: '2 - 3 Marks' },
      { name: 'Transmission Lines & Smith Chart', description: 'Characteristic impedance, propagation constant, reflection coefficient, VSWR, quarter-wave transformer, impedance matching.', estimatedWeightage: '3 - 4 Marks' },
      { name: 'Waveguides & Antennas', description: 'Rectangular waveguide modes (TE/TM), cutoff frequency, phase & group velocity, dipole antenna radiation, directivity, gain.', estimatedWeightage: '2 Marks' }
    ]
  }
];

export const getSubjectByName = (name: SubjectName): SubjectMetadata | undefined => {
  return GATE_EC_SUBJECTS.find((s) => s.name === name);
};

