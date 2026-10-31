import { Question } from '../types/question';

/**
 * Optional AI Explanation Layer for GATE Companion EC
 * 
 * Provides on-demand pedagogical hints, concept breakdowns, and real-world analogies.
 * When no API key is configured or offline, it provides high-yield built-in conceptual insights
 * without requiring any external network calls or credentials.
 */

export interface AiExplanationResponse {
  source: 'remote_ai' | 'curated_pedagogy';
  conceptualHint: string;
  gateExamTip: string;
  analogousConcept: string;
}

class AiService {
  private apiKey: string | null = null;
  private endpoint: string | null = null;

  constructor() {
    this.apiKey = import.meta.env.VITE_AI_API_KEY || null;
    this.endpoint = import.meta.env.VITE_AI_API_ENDPOINT || null;
  }

  public isAvailable(): boolean {
    return Boolean(this.apiKey);
  }

  /**
   * Generates or retrieves pedagogical guidance for a given question.
   */
  public async getTutorGuidance(question: Question): Promise<AiExplanationResponse> {
    // If remote endpoint and key configured, call API
    if (this.apiKey && this.endpoint && navigator.onLine) {
      try {
        const response = await fetch(this.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
          body: JSON.stringify({
            prompt: `As a GATE EC professor, provide a concise conceptual hint and exam strategy for this question in ${question.subject} (${question.topic}): "${question.statement}".`,
          }),
        });

        if (response.ok) {
          const json = await response.json();
          return {
            source: 'remote_ai',
            conceptualHint: json.hint || 'Focus on foundational definitions and boundary conditions.',
            gateExamTip: json.tip || 'Watch out for units and sign conventions.',
            analogousConcept: json.analogy || 'Consider conservation principles.',
          };
        }
      } catch (e) {
        console.warn('AI API call failed, falling back to curated pedagogy', e);
      }
    }

    // Curated high-yield pedagogical responses tailored to the subject
    return this.getCuratedGuidance(question);
  }

  private getCuratedGuidance(question: Question): AiExplanationResponse {
    const subject = question.subject;

    const guidanceMap: Record<string, { hint: string; tip: string; analogy: string }> = {
      'Analog Circuits': {
        hint: 'Begin by checking feedback polarity. If negative feedback is present with infinite gain, verify the virtual ground or virtual short condition at the op-amp input terminals.',
        tip: 'GATE EC frequently tests finite open-loop gain A or finite input resistance. Always check whether the problem specifies an ideal or non-ideal op-amp.',
        analogy: 'Think of negative feedback like a cruise control system: it constantly senses the difference between the setpoint and actual speed, driving the error toward zero.',
      },
      'Signals and Systems': {
        hint: 'Use frequency-domain properties! Convolution in time becomes simple point-by-point multiplication in frequency.',
        tip: 'For Nyquist rate calculations, determine the maximum frequency component f_max. Remember f_N = 2 f_max. Never confuse convolution with multiplication when adding bandwidths.',
        analogy: 'Sampling an analog signal is like taking snapshots with a stroboscope: if the motion is faster than half the flash rate, the object appears to move backwards or freeze (aliasing).',
      },
      'Network Theory': {
        hint: 'Write KCL at the essential nodes or check if Thevenin/Norton equivalence simplifies the circuit to a single loop.',
        tip: 'In transient RLC questions, calculate alpha = R/(2L) and omega_0 = 1/sqrt(LC) before writing differential equations. Comparison gives the response type in 30 seconds.',
        analogy: 'Inductors act like inertia (resisting change in current), while capacitors act like elastic springs (resisting sudden change in voltage).',
      },
      'Control Systems': {
        hint: 'Identify whether the loop is open-loop or closed-loop with unity feedback. Standard second-order formulas apply directly to the closed-loop transfer function.',
        tip: 'Peak overshoot %M_p depends strictly on the damping ratio zeta and is independent of the natural frequency omega_n.',
        analogy: 'Damping ratio is like shock absorbers on an automobile: underdamped cars bounce repeatedly after a bump, while critically damped cars return smoothly without oscillation.',
      },
      'Digital Circuits': {
        hint: 'Examine state transitions on each active clock edge. Write next-state flip-flop excitation equations before constructing the state table.',
        tip: 'For K-maps, remember that corner cells wrap around both horizontally and vertically to form 4-cell or 8-cell groups.',
        analogy: 'Flip-flops are the digital equivalent of conveyor belt buckets: each clock pulse advances the item exactly one stage forward.',
      },
      'Communications': {
        hint: 'Distinguish between one-sided noise spectral density N_0 and two-sided PSD N_0/2. This single factor of 2 is the most common pitfall in GATE communication questions.',
        tip: 'BPSK and QPSK share the identical bit error probability Q(sqrt(2E_b/N_0)) for the same bit energy, while QPSK requires half the channel bandwidth.',
        analogy: 'Modulation is like loading mail into distinct delivery trucks: passband carrier shifts the signal frequency so multiple channels travel together without colliding.',
      },
      'Electronic Devices': {
        hint: 'Recall that strong inversion occurs when the surface band bending phi_s reaches exactly twice the bulk Fermi potential 2*phi_F.',
        tip: 'Be vigilant with doping units: concentrations are in cm^-3, requiring permittivity epsilon in F/cm for dimensionally consistent answers.',
        analogy: 'The MOSFET channel behaves like a water canal controlled by a sluice gate (gate voltage) regulating the flow of carrier water between reservoir and basin.',
      },
      'Electromagnetics': {
        hint: 'For transmission lines, note if the load is purely resistive: VSWR is simply R_L/Z_0 (if R_L > Z_0) or Z_0/R_L (if R_L < Z_0).',
        tip: 'Quarter-wave transformers invert impedance (Z_in = Z_0^2 / Z_L) and are ideal for narrow-band impedance matching.',
        analogy: 'Impedance mismatch on a transmission line is like light hitting a windowpane: a fraction is transmitted and a fraction reflects back depending on the refractive index discontinuity.',
      },
      'Engineering Mathematics': {
        hint: 'Use matrix invariance properties: Trace equals the sum of eigenvalues, and the determinant equals their product.',
        tip: 'Never expand characteristic polynomials from scratch when trace and determinant can eliminate wrong options immediately.',
        analogy: 'Eigenvectors represent the natural coordinate axes along which a transformation acts as pure stretching or compressing without rotation.',
      },
      'General Aptitude': {
        hint: 'Assume a convenient total work capacity equal to the Least Common Multiple (LCM) of the given individual times.',
        tip: 'For pipe and cistern questions, remember inlet rates are positive while drainage rates are negative.',
        analogy: 'Think of efficiency as speed: if worker A works twice as fast as B, their combined speed is 3x, finishing the fixed distance in 1/3 the time.',
      },
    };

    const matched = guidanceMap[subject] || guidanceMap['Analog Circuits'];

    return {
      source: 'curated_pedagogy',
      conceptualHint: matched.hint,
      gateExamTip: matched.tip,
      analogousConcept: matched.analogy,
    };
  }
}

export const aiService = new AiService();

