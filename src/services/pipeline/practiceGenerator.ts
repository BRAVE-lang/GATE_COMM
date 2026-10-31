import { Question, SubjectName, QuestionType, DifficultyLevel } from '../../types/question';
import { questionDeduplicator } from './deduplicator';
import { questionValidator } from './validator';

export interface PracticeGenerationParams {
  subject: SubjectName;
  topic?: string;
  difficulty: DifficultyLevel;
  type: QuestionType;
  conceptFocus?: 'basic_conceptual' | 'intermediate_numerical' | 'multi_concept_advanced';
}

export class PracticeQuestionGenerator {
  /**
   * Generates original, independently authored practice questions tailored for GATE EC.
   * Distinctly tags items as 'authored_practice' to preserve integrity and avoid confusion with official PYQs.
   */
  public generateOriginalPracticeQuestion(
    params: PracticeGenerationParams,
    existingPool: Question[] = []
  ): Question | null {
    const templates = this.getPracticeCatalog();
    const matches = templates.filter((t) => {
      if (t.subject !== params.subject) return false;
      if (t.type !== params.type) return false;
      if (t.difficulty !== params.difficulty) return false;
      return true;
    });

    const pool = matches.length > 0 ? matches : templates.filter((t) => t.subject === params.subject);
    if (pool.length === 0) return null;

    // Pick a candidate not yet in existingPool
    for (const candidate of pool) {
      const dup = questionDeduplicator.checkDuplicate(candidate.statement, existingPool);
      if (!dup.isDuplicate) {
        return candidate;
      }
    }

    return null;
  }

  /**
   * Curated catalog of original, multi-concept practice problems authored for the GATE EC examination.
   */
  private getPracticeCatalog(): Question[] {
    return [
      // 1. Network Theory - Two-Port Network Z to Y conversion & Reciprocity (MSQ, Hard)
      {
        id: 'AUTH-NET-002',
        source: 'Original Author Practice Series (2025)',
        sourceReference: 'GATE EC Practice Series - Advanced Multi-Concept Two-Port Networks',
        subject: 'Network Theory',
        topic: 'Two-Port Networks',
        type: 'MSQ',
        marks: 2,
        negativeMarks: 0,
        statement: 'A linear, passive, reciprocal two-port network has impedance parameters given by: $$[Z] = \\begin{bmatrix} 4 & 2 \\\\ 2 & 6 \\end{bmatrix} \\Omega$$ Which of the following statements is/are CORRECT? (Select all that apply)',
        figure: undefined,
        options: [
          { id: 'A', text: 'The admittance parameter Y_{11} is equal to 0.3 Ω⁻¹ (Siemens)' },
          { id: 'B', text: 'The admittance parameter Y_{12} is equal to -0.1 Ω⁻¹ (Siemens)' },
          { id: 'C', text: 'The network is symmetrical because Z_{12} = Z_{21}' },
          { id: 'D', text: 'The transmission parameter B is equal to 10 Ω' }
        ],
        officialAnswer: ['A', 'B', 'D'],
        detailedSolution: {
          understandingTheQuestion: 'We need to analyze a given $2 \\times 2$ impedance matrix $[Z]$, invert it to find admittance parameters $[Y] = [Z]^{-1}$, verify reciprocity and symmetry criteria, and compute the transmission (ABCD) parameter $B$.',
          givenInformationAndAssumptions: [
            '$Z_{11} = 4\\,\\Omega, \\quad Z_{12} = 2\\,\\Omega$',
            '$Z_{21} = 2\\,\\Omega, \\quad Z_{22} = 6\\,\\Omega$',
            'Network is linear, passive, and time-invariant'
          ],
          relevantConcept: '1. Admittance matrix is the matrix inverse of the impedance matrix: $[Y] = [Z]^{-1} = \\frac{1}{\\det(Z)} \\begin{bmatrix} Z_{22} & -Z_{12} \\\\ -Z_{21} & Z_{11} \\end{bmatrix}$.\n2. Condition for reciprocity: $Z_{12} = Z_{21}$ or $Y_{12} = Y_{21}$.\n3. Condition for symmetry: $Z_{11} = Z_{22}$ or $Y_{11} = Y_{22}$.\n4. Transmission parameter $B = \\frac{\\det(Z)}{Z_{21}}$.',
          formulaAndTermExplanation: [
            {
              formula: '\\det(Z) = Z_{11}Z_{22} - Z_{12}Z_{21}, \\quad B = \\frac{\\det(Z)}{Z_{21}}',
              terms: [
                { term: '\\det(Z)', explanation: 'Determinant of the Z-parameter matrix' },
                { term: 'B', explanation: 'Transmission parameter relating input voltage to output current with V2 = 0' }
              ]
            }
          ],
          stepByStepDerivation: [
            'Step 1: Compute determinant of $[Z]$:',
            '$\\det(Z) = (4)(6) - (2)(2) = 24 - 4 = 20\\,\\Omega^2$',
            'Step 2: Invert $[Z]$ to find $[Y]$:',
            '$Y_{11} = \\frac{Z_{22}}{\\det(Z)} = \\frac{6}{20} = 0.3\\text{ S} \\implies$ Option A is TRUE.',
            '$Y_{12} = -\\frac{Z_{12}}{\\det(Z)} = -\\frac{2}{20} = -0.1\\text{ S} \\implies$ Option B is TRUE.',
            'Step 3: Evaluate symmetry:',
            'For symmetry, $Z_{11} = Z_{22}$ is required. Here $Z_{11} = 4 \\ne Z_{22} = 6$. The network is reciprocal ($Z_{12} = Z_{21} = 2$), but NOT symmetrical $\\implies$ Option C is FALSE.',
            'Step 4: Compute ABCD parameter $B$:',
            '$B = \\frac{\\det(Z)}{Z_{21}} = \\frac{20}{2} = 10\\,\\Omega \\implies$ Option D is TRUE.'
          ],
          finalAnswerWithUnits: 'Options A, B, and D',
          alternativeApproachOrShortcut: 'Direct T-equivalent circuit inspection: A T-network has series arms $Z_a = Z_{11} - Z_{12} = 2\\,\\Omega$, $Z_b = Z_{22} - Z_{12} = 4\\,\\Omega$, and shunt arm $Z_c = Z_{12} = 2\\,\\Omega$. Since $Z_a \\ne Z_b$, it cannot be symmetrical!',
          commonMistakes: [
            'Confusing reciprocity ($Z_{12} = Z_{21}$) with symmetry ($Z_{11} = Z_{22}$).',
            'Forgetting the negative sign in $Y_{12} = -Z_{12}/\\det(Z)$.'
          ],
          relatedQuestions: [
            { id: 'AUTH-NET-003', title: 'Two-port cascade connection ABCD matrix multiplication' }
          ]
        },
        solutionVerificationStatus: 'verified',
        provenance: 'Original Author Practice Item (Independently authored for GATE Companion EC)',
        licence: 'Creative Commons Attribution-ShareAlike 4.0 International',
        difficulty: 'Hard',
        tags: ['Two-Port Networks', 'Z-Parameters', 'Y-Parameters', 'Reciprocity', 'MSQ'],
        estimatedSolvingTimeSeconds: 160,
        provenanceType: 'authored_practice'
      },

      // 2. Control Systems - State Space Controllability & Observability (NAT, Medium)
      {
        id: 'AUTH-CTL-002',
        source: 'Original Author Practice Series (2025)',
        sourceReference: 'GATE EC Practice Series - State Variable Analysis Vol. 2',
        subject: 'Control Systems',
        topic: 'State Space Analysis',
        type: 'NAT',
        marks: 2,
        negativeMarks: 0,
        statement: 'A continuous-time system is described by the state equations: $$\\dot{x}(t) = \\begin{bmatrix} 0 & 1 \\\\ -2 & -k \\end{bmatrix} x(t) + \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} u(t), \\quad y(t) = \\begin{bmatrix} 1 & 0 \\end{bmatrix} x(t)$$ The value of $k$ for which the closed-loop poles have a damping ratio of $\\zeta = 0.707$ is ________ (rounded off to two decimal places).',
        figure: undefined,
        officialAnswer: [1.98, 2.02], // Exact: 2.00
        detailedSolution: {
          understandingTheQuestion: 'We are given the system dynamic matrix $A$ in terms of an unknown parameter $k$. We need to obtain the characteristic equation $\\det(sI - A) = 0$, determine the natural frequency $\\omega_n$ and damping ratio $\\zeta$, and solve for $k$ such that $\\zeta = 1/\\sqrt{2} \\approx 0.707$.',
          givenInformationAndAssumptions: [
            '$A = \\begin{bmatrix} 0 & 1 \\\\ -2 & -k \\end{bmatrix}, \\quad B = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}, \\quad C = \\begin{bmatrix} 1 & 0 \\end{bmatrix}$',
            'Target damping ratio: $\\zeta = 0.707 = \\frac{1}{\\sqrt{2}}$'
          ],
          relevantConcept: 'The characteristic equation of the system is given by $\\det(sI - A) = 0$. Comparing this with standard second-order form $s^2 + 2\\zeta\\omega_n s + \\omega_n^2 = 0$ provides the values for $\\omega_n$ and $\\zeta$.',
          formulaAndTermExplanation: [
            {
              formula: '\\det(sI - A) = s^2 + ks + 2 = s^2 + 2\\zeta\\omega_n s + \\omega_n^2',
              terms: [
                { term: '\\omega_n^2 = 2', explanation: 'Constant term gives natural frequency squared' },
                { term: '2\\zeta\\omega_n = k', explanation: 'Coefficient of s represents damping coefficient' }
              ]
            }
          ],
          stepByStepDerivation: [
            'Step 1: Compute matrix $sI - A$:',
            '$sI - A = \\begin{bmatrix} s & 0 \\\\ 0 & s \\end{bmatrix} - \\begin{bmatrix} 0 & 1 \\\\ -2 & -k \\end{bmatrix} = \\begin{bmatrix} s & -1 \\\\ 2 & s + k \\end{bmatrix}$',
            'Step 2: Calculate determinant:',
            '$\\det(sI - A) = s(s + k) - (-1)(2) = s^2 + ks + 2 = 0$',
            'Step 3: Compare with standard 2nd-order form $s^2 + 2\\zeta\\omega_n s + \\omega_n^2 = 0$:',
            '$\\omega_n^2 = 2 \\implies \\omega_n = \\sqrt{2} \\approx 1.4142\\text{ rad/s}$',
            'Step 4: Solve for $k$ using $\\zeta = 0.707 = \\frac{1}{\\sqrt{2}}$:',
            '$k = 2\\zeta\\omega_n = 2 \\times \\left(\\frac{1}{\\sqrt{2}}\\right) \\times \\sqrt{2} = 2 \\times 1 = 2$ wait, let us re-verify!',
            'Notice: if $k = 2\\zeta\\omega_n = 2 \\times 0.707 \\times 1.4142 = 2 \\times 1.0 = 2.0$! Let us double check:',
            '$\\omega_n = \\sqrt{2} \\approx 1.4142$. For $\\zeta = 0.707 \\approx 1/\\sqrt{2}$:',
            '$2\\zeta\\omega_n = 2 \\times (1/\\sqrt{2}) \\times \\sqrt{2} = 2.0$! Exactly $2.0$ or $2.828$ if $\\omega_n = 2$? Here $\\omega_n^2 = 2 \\implies 2\\zeta\\omega_n = 2(0.707)(1.414) = 2.0$.',
            'Wait, let us check: $k = 2.0$. Thus acceptable range is $[1.98, 2.02]$.'
          ],
          finalAnswerWithUnits: '2.00 (Acceptable Range: 1.98 to 2.02)',
          alternativeApproachOrShortcut: 'Notice immediately that $s^2 + 2\\zeta\\omega_n s + \\omega_n^2$: with $\\omega_n = \\sqrt{2}$ and $\\zeta = 1/\\sqrt{2}$, the $s$ coefficient is $2(1/\\sqrt{2})(\\sqrt{2}) = 2$. Hence $k = 2$ directly in 15 seconds.',
          commonMistakes: [
            'Squaring $\\sqrt{2}$ incorrectly when evaluating $2\\zeta\\omega_n$.',
            'Sign error in $\\det(sI - A)$ resulting in $s^2 + ks - 2 = 0$.'
          ],
          relatedQuestions: [
            { id: 'AUTH-CTL-004', title: 'State feedback gain matrix K design via Ackermann formula' }
          ]
        },
        solutionVerificationStatus: 'verified',
        provenance: 'Original Author Practice Item (Independently authored for GATE Companion EC)',
        licence: 'Creative Commons Attribution-ShareAlike 4.0 International',
        difficulty: 'Medium',
        tags: ['State Space', 'Damping Ratio', 'Characteristic Equation', 'NAT'],
        estimatedSolvingTimeSeconds: 110,
        provenanceType: 'authored_practice'
      }
    ];
  }
}

export const practiceQuestionGenerator = new PracticeQuestionGenerator();
