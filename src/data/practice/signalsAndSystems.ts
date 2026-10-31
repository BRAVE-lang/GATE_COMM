import { Question } from '../../types/question';

/**
 * High-Yield GATE EC Practice Question Bank — SIGNALS_AND_SYSTEMS_PRACTICE
 * Count: 270 items
 * Provenance: authored_practice (Independently authored with verified 8-section solutions)
 */
export const SIGNALS_AND_SYSTEMS_PRACTICE: Question[] = [
  {
    "id": "PRAC-SIG-001",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-2t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.24,
      0.26
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2t} u(t)$",
        "Decay factor $a = 2$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-2t})^2 dt = \\int_0^{\\infty} e^{-4t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-4t}}{-4} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{4} \\right) = \\frac{1}{4} = 0.25\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.25 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-002",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-3t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.157,
      0.177
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3t} u(t)$",
        "Decay factor $a = 3$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-3t})^2 dt = \\int_0^{\\infty} e^{-6t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-6t}}{-6} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{6} \\right) = \\frac{1}{6} = 0.167\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.167 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-003",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-4t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.115,
      0.135
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4t} u(t)$",
        "Decay factor $a = 4$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-4t})^2 dt = \\int_0^{\\infty} e^{-8t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-8t}}{-8} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{8} \\right) = \\frac{1}{8} = 0.125\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.125 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-004",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-5t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.09,
      0.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5t} u(t)$",
        "Decay factor $a = 5$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-5t})^2 dt = \\int_0^{\\infty} e^{-10t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-10t}}{-10} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{10} \\right) = \\frac{1}{10} = 0.1\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.1 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-005",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-6t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.073,
      0.093
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-6t} u(t)$",
        "Decay factor $a = 6$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-6t})^2 dt = \\int_0^{\\infty} e^{-12t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-12t}}{-12} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{12} \\right) = \\frac{1}{12} = 0.083\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.083 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-006",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-2t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.24,
      0.26
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2t} u(t)$",
        "Decay factor $a = 2$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-2t})^2 dt = \\int_0^{\\infty} e^{-4t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-4t}}{-4} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{4} \\right) = \\frac{1}{4} = 0.25\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.25 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-007",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-3t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.157,
      0.177
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3t} u(t)$",
        "Decay factor $a = 3$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-3t})^2 dt = \\int_0^{\\infty} e^{-6t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-6t}}{-6} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{6} \\right) = \\frac{1}{6} = 0.167\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.167 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-008",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-4t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.115,
      0.135
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4t} u(t)$",
        "Decay factor $a = 4$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-4t})^2 dt = \\int_0^{\\infty} e^{-8t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-8t}}{-8} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{8} \\right) = \\frac{1}{8} = 0.125\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.125 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-009",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-5t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.09,
      0.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5t} u(t)$",
        "Decay factor $a = 5$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-5t})^2 dt = \\int_0^{\\infty} e^{-10t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-10t}}{-10} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{10} \\right) = \\frac{1}{10} = 0.1\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.1 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-010",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-6t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.073,
      0.093
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-6t} u(t)$",
        "Decay factor $a = 6$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-6t})^2 dt = \\int_0^{\\infty} e^{-12t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-12t}}{-12} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{12} \\right) = \\frac{1}{12} = 0.083\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.083 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-011",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-2t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.24,
      0.26
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2t} u(t)$",
        "Decay factor $a = 2$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-2t})^2 dt = \\int_0^{\\infty} e^{-4t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-4t}}{-4} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{4} \\right) = \\frac{1}{4} = 0.25\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.25 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-012",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-3t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.157,
      0.177
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3t} u(t)$",
        "Decay factor $a = 3$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-3t})^2 dt = \\int_0^{\\infty} e^{-6t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-6t}}{-6} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{6} \\right) = \\frac{1}{6} = 0.167\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.167 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-013",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-4t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.115,
      0.135
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4t} u(t)$",
        "Decay factor $a = 4$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-4t})^2 dt = \\int_0^{\\infty} e^{-8t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-8t}}{-8} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{8} \\right) = \\frac{1}{8} = 0.125\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.125 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-014",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-5t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.09,
      0.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5t} u(t)$",
        "Decay factor $a = 5$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-5t})^2 dt = \\int_0^{\\infty} e^{-10t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-10t}}{-10} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{10} \\right) = \\frac{1}{10} = 0.1\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.1 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-015",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-6t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.073,
      0.093
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-6t} u(t)$",
        "Decay factor $a = 6$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-6t})^2 dt = \\int_0^{\\infty} e^{-12t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-12t}}{-12} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{12} \\right) = \\frac{1}{12} = 0.083\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.083 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-016",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-2t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.24,
      0.26
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2t} u(t)$",
        "Decay factor $a = 2$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-2t})^2 dt = \\int_0^{\\infty} e^{-4t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-4t}}{-4} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{4} \\right) = \\frac{1}{4} = 0.25\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.25 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-017",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-3t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.157,
      0.177
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3t} u(t)$",
        "Decay factor $a = 3$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-3t})^2 dt = \\int_0^{\\infty} e^{-6t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-6t}}{-6} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{6} \\right) = \\frac{1}{6} = 0.167\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.167 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-018",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-4t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.115,
      0.135
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4t} u(t)$",
        "Decay factor $a = 4$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-4t})^2 dt = \\int_0^{\\infty} e^{-8t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-8t}}{-8} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{8} \\right) = \\frac{1}{8} = 0.125\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.125 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-019",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-5t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.09,
      0.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5t} u(t)$",
        "Decay factor $a = 5$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-5t})^2 dt = \\int_0^{\\infty} e^{-10t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-10t}}{-10} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{10} \\right) = \\frac{1}{10} = 0.1\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.1 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-020",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-6t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.073,
      0.093
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-6t} u(t)$",
        "Decay factor $a = 6$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-6t})^2 dt = \\int_0^{\\infty} e^{-12t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-12t}}{-12} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{12} \\right) = \\frac{1}{12} = 0.083\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.083 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-021",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-2t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.24,
      0.26
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2t} u(t)$",
        "Decay factor $a = 2$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-2t})^2 dt = \\int_0^{\\infty} e^{-4t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-4t}}{-4} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{4} \\right) = \\frac{1}{4} = 0.25\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.25 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-022",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-3t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.157,
      0.177
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3t} u(t)$",
        "Decay factor $a = 3$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-3t})^2 dt = \\int_0^{\\infty} e^{-6t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-6t}}{-6} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{6} \\right) = \\frac{1}{6} = 0.167\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.167 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-023",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-4t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.115,
      0.135
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4t} u(t)$",
        "Decay factor $a = 4$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-4t})^2 dt = \\int_0^{\\infty} e^{-8t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-8t}}{-8} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{8} \\right) = \\frac{1}{8} = 0.125\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.125 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-024",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-5t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.09,
      0.11
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5t} u(t)$",
        "Decay factor $a = 5$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-5t})^2 dt = \\int_0^{\\infty} e^{-10t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-10t}}{-10} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{10} \\right) = \\frac{1}{10} = 0.1\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.1 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-025",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "Consider the continuous-time signal $x(t) = e^{-6t} u(t)$, where $u(t)$ is the unit step function. The total energy $E$ of the signal is ________ Joules (rounded off to three decimal places).",
    "options": null,
    "officialAnswer": [
      0.073,
      0.093
    ],
    "detailedSolution": {
      "understandingTheQuestion": "Calculate the total energy of a causal exponentially decaying continuous-time signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-6t} u(t)$",
        "Decay factor $a = 6$"
      ],
      "relevantConcept": "The total energy of a continuous-time signal $x(t)$ is given by $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$. For $x(t) = e^{-at}u(t)$, $E = \\frac{1}{2a}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\int_0^{\\infty} e^{-2at}dt = \\frac{1}{2a}",
          "terms": [
            {
              "term": "E",
              "explanation": "Total signal energy in Joules"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up the energy integral: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt$.",
        "Step 2: Since $u(t) = 0$ for $t < 0$, the limits become $0$ to $\\infty$:",
        "$$E = \\int_0^{\\infty} (e^{-6t})^2 dt = \\int_0^{\\infty} e^{-12t} dt$$.",
        "Step 3: Integrate: $\\left[ \\frac{e^{-12t}}{-12} \\right]_0^{\\infty} = 0 - \\left( -\\frac{1}{12} \\right) = \\frac{1}{12} = 0.083\\text{ J}$."
      ],
      "finalAnswerWithUnits": "E = 0.083 J",
      "alternativeApproachOrShortcut": "Standard formula shortcut for real causal exponential $e^{-at}u(t)$: $E = \\frac{1}{2a}$.",
      "commonMistakes": [
        "Integrating $e^{-at}$ instead of $|x(t)|^2 = e^{-2at}$, resulting in $1/a$ instead of $1/(2a)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Signal Energy",
      "Continuous Time",
      "Exponential Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-026",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{5}$.",
        "Step 3: Since $\\gcd(1, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 1} \\times 1 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-027",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{3} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{3}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{3}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{3}$.",
        "Step 3: Since $\\gcd(1, 3) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 3$."
      ],
      "finalAnswerWithUnits": "N = 3",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 3}{2\\pi \\times 1} \\times 1 = 3$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-028",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{6\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{6\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{6\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{3}{7}$.",
        "Step 3: Since $\\gcd(3, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 3} \\times 3 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-029",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{8\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{8\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{8\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{4}{5}$.",
        "Step 3: Since $\\gcd(4, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 4} \\times 4 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-030",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{6} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{6}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{6}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{6}$.",
        "Step 3: Since $\\gcd(1, 6) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 6$."
      ],
      "finalAnswerWithUnits": "N = 6",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 6}{2\\pi \\times 1} \\times 1 = 6$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-031",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{4\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{4\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{4\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{2}{7}$.",
        "Step 3: Since $\\gcd(2, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 2} \\times 2 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-032",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{6\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{6\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{6\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{3}{5}$.",
        "Step 3: Since $\\gcd(3, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 3} \\times 3 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-033",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{4\\pi}{3} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{4\\pi}{3}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{4\\pi}{3}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{2}{3}$.",
        "Step 3: Since $\\gcd(2, 3) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 3$."
      ],
      "finalAnswerWithUnits": "N = 3",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 3}{2\\pi \\times 2} \\times 2 = 3$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-034",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{7}$.",
        "Step 3: Since $\\gcd(1, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 1} \\times 1 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-035",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{4\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{4\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{4\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{2}{5}$.",
        "Step 3: Since $\\gcd(2, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 2} \\times 2 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-036",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{2} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{2}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{2}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{2}$.",
        "Step 3: Since $\\gcd(1, 2) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 2$."
      ],
      "finalAnswerWithUnits": "N = 2",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 2}{2\\pi \\times 1} \\times 1 = 2$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-037",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{8\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{8\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{8\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{4}{7}$.",
        "Step 3: Since $\\gcd(4, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 4} \\times 4 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-038",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{5}$.",
        "Step 3: Since $\\gcd(1, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 1} \\times 1 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-039",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{3} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{3}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{3}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{3}$.",
        "Step 3: Since $\\gcd(1, 3) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 3$."
      ],
      "finalAnswerWithUnits": "N = 3",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 3}{2\\pi \\times 1} \\times 1 = 3$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-040",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{6\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{6\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{6\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{3}{7}$.",
        "Step 3: Since $\\gcd(3, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 3} \\times 3 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-041",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{8\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{8\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{8\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{4}{5}$.",
        "Step 3: Since $\\gcd(4, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 4} \\times 4 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-042",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{6} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{6}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{6}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{6}$.",
        "Step 3: Since $\\gcd(1, 6) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 6$."
      ],
      "finalAnswerWithUnits": "N = 6",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 6}{2\\pi \\times 1} \\times 1 = 6$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-043",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{4\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{4\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{4\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{2}{7}$.",
        "Step 3: Since $\\gcd(2, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 2} \\times 2 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-044",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{6\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{6\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{6\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{3}{5}$.",
        "Step 3: Since $\\gcd(3, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 3} \\times 3 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-045",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{4\\pi}{3} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{4\\pi}{3}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{4\\pi}{3}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{2}{3}$.",
        "Step 3: Since $\\gcd(2, 3) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 3$."
      ],
      "finalAnswerWithUnits": "N = 3",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 3}{2\\pi \\times 2} \\times 2 = 3$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-046",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{7}$.",
        "Step 3: Since $\\gcd(1, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 1} \\times 1 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-047",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{4\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{4\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{4\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{2}{5}$.",
        "Step 3: Since $\\gcd(2, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 2} \\times 2 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-048",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{2} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{2}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{2}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{2}$.",
        "Step 3: Since $\\gcd(1, 2) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 2$."
      ],
      "finalAnswerWithUnits": "N = 2",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 2}{2\\pi \\times 1} \\times 1 = 2$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-049",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{8\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{8\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{8\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{4}{7}$.",
        "Step 3: Since $\\gcd(4, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 4} \\times 4 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-050",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{5}$.",
        "Step 3: Since $\\gcd(1, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 1} \\times 1 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-051",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{3} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{3}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{3}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{3}$.",
        "Step 3: Since $\\gcd(1, 3) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 3$."
      ],
      "finalAnswerWithUnits": "N = 3",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 3}{2\\pi \\times 1} \\times 1 = 3$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-052",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{6\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{6\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{6\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{3}{7}$.",
        "Step 3: Since $\\gcd(3, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 3} \\times 3 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-053",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{8\\pi}{5} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{8\\pi}{5}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{8\\pi}{5}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{4}{5}$.",
        "Step 3: Since $\\gcd(4, 5) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 5$."
      ],
      "finalAnswerWithUnits": "N = 5",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 5}{2\\pi \\times 4} \\times 4 = 5$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-054",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{2\\pi}{6} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{2\\pi}{6}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{2\\pi}{6}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{1}{6}$.",
        "Step 3: Since $\\gcd(1, 6) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 6$."
      ],
      "finalAnswerWithUnits": "N = 6",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 6}{2\\pi \\times 1} \\times 1 = 6$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-055",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Continuous-Time & Discrete-Time Signals",
    "subject": "Signals and Systems",
    "topic": "Continuous-Time & Discrete-Time Signals",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time sequence is given by $x[n] = \\cos\\left(\\frac{4\\pi}{7} n\\right)$. The fundamental period $N$ of the sequence is equal to ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the fundamental period $N$ of a sinusoidal discrete-time sequence.",
      "givenInformationAndAssumptions": [
        "Discrete frequency $\\omega_0 = \\frac{4\\pi}{7}\\text{ rad/sample}$"
      ],
      "relevantConcept": "A discrete-time sinusoid $\\cos(\\omega_0 n)$ is periodic if and only if $\\frac{\\omega_0}{2\\pi} = \\frac{m}{N}$ is a rational number. In irreducible form, $N$ is the fundamental period.",
      "formulaAndTermExplanation": [
        {
          "formula": "N = m \\left(\\frac{2\\pi}{\\omega_0}\\right)",
          "terms": [
            {
              "term": "N",
              "explanation": "Smallest positive integer period"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify digital angular frequency: $\\omega_0 = \\frac{4\\pi}{7}$.",
        "Step 2: Check rationality: $\\frac{\\omega_0}{2\\pi} = \\frac{2}{7}$.",
        "Step 3: Since $\\gcd(2, 7) = 1$, the fraction is in lowest terms.",
        "Step 4: The fundamental period is the denominator: $N = 7$."
      ],
      "finalAnswerWithUnits": "N = 7",
      "alternativeApproachOrShortcut": "Formula: $N = \\frac{2\\pi}{\\omega_0} \\times m = \\frac{2\\pi \\times 7}{2\\pi \\times 2} \\times 2 = 7$.",
      "commonMistakes": [
        "Assuming continuous-time period formula $T = 2\\pi / \\omega_0$ which may not be an integer in discrete time."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Discrete Time",
      "Periodicity",
      "Fundamental Period"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-056",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 3 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 3$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 3$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 3 + 2 - 1 = 4$ samples."
      ],
      "finalAnswerWithUnits": "4 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-057",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 4 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 4$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 4$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 4 + 3 - 1 = 6$ samples."
      ],
      "finalAnswerWithUnits": "6 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-058",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 5 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 5$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 5$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 5 + 4 - 1 = 8$ samples."
      ],
      "finalAnswerWithUnits": "8 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-059",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 6 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 6$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 6$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 6 + 2 - 1 = 7$ samples."
      ],
      "finalAnswerWithUnits": "7 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-060",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 3 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 3$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 3$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 3 + 3 - 1 = 5$ samples."
      ],
      "finalAnswerWithUnits": "5 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-061",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 4 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 4$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 4$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 4 + 4 - 1 = 7$ samples."
      ],
      "finalAnswerWithUnits": "7 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-062",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 5 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 5$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 5$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 5 + 2 - 1 = 6$ samples."
      ],
      "finalAnswerWithUnits": "6 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-063",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 6 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 6$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 6$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 6 + 3 - 1 = 8$ samples."
      ],
      "finalAnswerWithUnits": "8 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-064",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 3 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 3$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 3$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 3 + 4 - 1 = 6$ samples."
      ],
      "finalAnswerWithUnits": "6 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-065",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 4 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 4$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 4$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 4 + 2 - 1 = 5$ samples."
      ],
      "finalAnswerWithUnits": "5 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-066",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 5 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 5$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 5$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 5 + 3 - 1 = 7$ samples."
      ],
      "finalAnswerWithUnits": "7 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-067",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 6 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "9",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 6$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 6$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 6 + 4 - 1 = 9$ samples."
      ],
      "finalAnswerWithUnits": "9 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-068",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 3 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 3$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 3$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 3 + 2 - 1 = 4$ samples."
      ],
      "finalAnswerWithUnits": "4 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-069",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 4 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 4$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 4$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 4 + 3 - 1 = 6$ samples."
      ],
      "finalAnswerWithUnits": "6 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-070",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 5 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 5$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 5$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 5 + 4 - 1 = 8$ samples."
      ],
      "finalAnswerWithUnits": "8 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-071",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 6 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 6$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 6$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 6 + 2 - 1 = 7$ samples."
      ],
      "finalAnswerWithUnits": "7 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-072",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 3 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 3$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 3$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 3 + 3 - 1 = 5$ samples."
      ],
      "finalAnswerWithUnits": "5 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-073",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 4 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 4$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 4$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 4 + 4 - 1 = 7$ samples."
      ],
      "finalAnswerWithUnits": "7 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-074",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 5 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 5$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 5$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 5 + 2 - 1 = 6$ samples."
      ],
      "finalAnswerWithUnits": "6 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-075",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 6 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 6$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 6$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 6 + 3 - 1 = 8$ samples."
      ],
      "finalAnswerWithUnits": "8 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-076",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 3 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 3$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 3$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 3 + 4 - 1 = 6$ samples."
      ],
      "finalAnswerWithUnits": "6 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-077",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 4 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 4$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 4$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 4 + 2 - 1 = 5$ samples."
      ],
      "finalAnswerWithUnits": "5 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-078",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 5 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 5$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 5$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 5 + 3 - 1 = 7$ samples."
      ],
      "finalAnswerWithUnits": "7 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-079",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 6 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "9",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 6$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 6$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 6 + 4 - 1 = 9$ samples."
      ],
      "finalAnswerWithUnits": "9 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-080",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 3 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 3$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 3$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 3 + 2 - 1 = 4$ samples."
      ],
      "finalAnswerWithUnits": "4 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-081",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 4 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "6",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 4$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 4$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 4 + 3 - 1 = 6$ samples."
      ],
      "finalAnswerWithUnits": "6 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-082",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 5 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "8",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 5$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 5$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 5 + 4 - 1 = 8$ samples."
      ],
      "finalAnswerWithUnits": "8 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-083",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 2 samples is excited by an input signal $x[n]$ of duration 6 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 6$",
        "Length of $h[n]$: $L_h = 2$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 6$.",
        "Step 2: Length of impulse response: $L_h = 2$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 6 + 2 - 1 = 7$ samples."
      ],
      "finalAnswerWithUnits": "7 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-084",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 3 samples is excited by an input signal $x[n]$ of duration 3 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 3$",
        "Length of $h[n]$: $L_h = 3$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 3$.",
        "Step 2: Length of impulse response: $L_h = 3$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 3 + 3 - 1 = 5$ samples."
      ],
      "finalAnswerWithUnits": "5 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-085",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A discrete-time LTI system with impulse response $h[n]$ of duration 4 samples is excited by an input signal $x[n]$ of duration 4 samples. The total length (duration in samples) of the output sequence $y[n] = x[n] * h[n]$ is ________.",
    "options": null,
    "officialAnswer": "7",
    "detailedSolution": {
      "understandingTheQuestion": "Determine the support length of the convolution of two finite-length discrete-time sequences.",
      "givenInformationAndAssumptions": [
        "Length of $x[n]$: $L_x = 4$",
        "Length of $h[n]$: $L_h = 4$"
      ],
      "relevantConcept": "If sequence $x[n]$ has length $L_x$ and sequence $h[n]$ has length $L_h$, their linear convolution $y[n] = x[n] * h[n]$ has length $L_y = L_x + L_h - 1$.",
      "formulaAndTermExplanation": [
        {
          "formula": "L_y = L_x + L_h - 1",
          "terms": [
            {
              "term": "L_y",
              "explanation": "Total number of non-zero output samples"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Length of input: $L_x = 4$.",
        "Step 2: Length of impulse response: $L_h = 4$.",
        "Step 3: Apply convolution duration property: $L_y = L_x + L_h - 1$.",
        "Step 4: $L_y = 4 + 4 - 1 = 7$ samples."
      ],
      "finalAnswerWithUnits": "7 samples",
      "alternativeApproachOrShortcut": "Verify by polynomial multiplication: multiplying a polynomial of degree $(L_x - 1)$ by degree $(L_h - 1)$ yields degree $(L_x + L_h - 2)$, having $L_x + L_h - 1$ coefficients.",
      "commonMistakes": [
        "Adding the lengths directly ($L_x + L_h$) without subtracting 1."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Convolution",
      "LTI Systems",
      "Discrete Convolution"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-086",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-087",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-088",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-089",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-090",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-091",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-092",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-093",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-094",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-095",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-096",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-097",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-098",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-099",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-100",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-101",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-102",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-103",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-104",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-105",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-106",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-107",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-108",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-109",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-110",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — LTI Systems & Convolution",
    "subject": "Signals and Systems",
    "topic": "LTI Systems & Convolution",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "An LTI system is Bounded-Input Bounded-Output (BIBO) STABLE if and only if its impulse response satisfies which of the following conditions?",
    "options": [
      {
        "id": "A",
        "text": "The impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$"
      },
      {
        "id": "B",
        "text": "The impulse response is square integrable: $\\int_{-\\infty}^{\\infty} |h(t)|^2 dt < \\infty$"
      },
      {
        "id": "C",
        "text": "The impulse response is strictly causal: $h(t) = 0$ for $t < 0$"
      },
      {
        "id": "D",
        "text": "The system transfer function has at least one pole at the origin $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the exact necessary and sufficient condition for BIBO stability in continuous-time LTI systems.",
      "givenInformationAndAssumptions": [
        "LTI system with continuous-time impulse response $h(t)$."
      ],
      "relevantConcept": "An LTI system is BIBO stable if and only if its impulse response is absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\int_{-\\infty}^{\\infty} |h(t)|dt < \\infty",
          "terms": [
            {
              "term": "|h(t)|",
              "explanation": "Absolute magnitude of impulse response"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Let input $|x(t)| \\le M_x < \\infty$ for all $t$.",
        "Step 2: Output $y(t) = \\int_{-\\infty}^{\\infty} h(\\tau)x(t - \\tau)d\\tau$.",
        "Step 3: $|y(t)| \\le \\int_{-\\infty}^{\\infty} |h(\\tau)| |x(t - \\tau)|d\\tau \\le M_x \\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau$.",
        "Step 4: For $|y(t)|$ to be bounded for all bounded inputs, $\\int_{-\\infty}^{\\infty} |h(\\tau)|d\\tau < \\infty$ is required and sufficient.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "In the Laplace s-domain, absolute integrability is equivalent to the ROC of $H(s)$ containing the imaginary axis $j\\omega$.",
      "commonMistakes": [
        "Confusing finite energy (Option B) with absolute integrability (Option A). An integrator has finite energy impulse response over finite time but is NOT BIBO stable."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "BIBO Stability",
      "LTI Systems",
      "Impulse Response"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-111",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-1|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{2}{1 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{1 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{2}{1 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{1 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-1|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-1t}u(t) + e^{1t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-1t}u(t)\\} = \\frac{1}{1 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{1t}u(-t)\\} = \\frac{1}{1 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{1 + j\\omega} + \\frac{1}{1 - j\\omega} = \\frac{(1 - j\\omega) + (1 + j\\omega)}{1^2 + \\omega^2} = \\frac{2}{1 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-112",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-2|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{4}{4 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{2}{4 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{4}{2 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{4 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-2t}u(t) + e^{2t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-2t}u(t)\\} = \\frac{1}{2 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{2t}u(-t)\\} = \\frac{1}{2 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{2 + j\\omega} + \\frac{1}{2 - j\\omega} = \\frac{(2 - j\\omega) + (2 + j\\omega)}{2^2 + \\omega^2} = \\frac{4}{4 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-113",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-3|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{6}{9 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{3}{9 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{6}{3 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{9 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-3t}u(t) + e^{3t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-3t}u(t)\\} = \\frac{1}{3 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{3t}u(-t)\\} = \\frac{1}{3 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{3 + j\\omega} + \\frac{1}{3 - j\\omega} = \\frac{(3 - j\\omega) + (3 + j\\omega)}{3^2 + \\omega^2} = \\frac{6}{9 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-114",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-4|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{8}{16 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{4}{16 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{8}{4 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{16 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-4t}u(t) + e^{4t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-4t}u(t)\\} = \\frac{1}{4 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{4t}u(-t)\\} = \\frac{1}{4 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{4 + j\\omega} + \\frac{1}{4 - j\\omega} = \\frac{(4 - j\\omega) + (4 + j\\omega)}{4^2 + \\omega^2} = \\frac{8}{16 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-115",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-5|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{10}{25 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{5}{25 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{10}{5 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{25 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-5t}u(t) + e^{5t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-5t}u(t)\\} = \\frac{1}{5 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{5t}u(-t)\\} = \\frac{1}{5 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{5 + j\\omega} + \\frac{1}{5 - j\\omega} = \\frac{(5 - j\\omega) + (5 + j\\omega)}{5^2 + \\omega^2} = \\frac{10}{25 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-116",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-1|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{2}{1 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{1 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{2}{1 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{1 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-1|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-1t}u(t) + e^{1t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-1t}u(t)\\} = \\frac{1}{1 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{1t}u(-t)\\} = \\frac{1}{1 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{1 + j\\omega} + \\frac{1}{1 - j\\omega} = \\frac{(1 - j\\omega) + (1 + j\\omega)}{1^2 + \\omega^2} = \\frac{2}{1 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-117",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-2|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{4}{4 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{2}{4 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{4}{2 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{4 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-2t}u(t) + e^{2t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-2t}u(t)\\} = \\frac{1}{2 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{2t}u(-t)\\} = \\frac{1}{2 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{2 + j\\omega} + \\frac{1}{2 - j\\omega} = \\frac{(2 - j\\omega) + (2 + j\\omega)}{2^2 + \\omega^2} = \\frac{4}{4 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-118",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-3|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{6}{9 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{3}{9 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{6}{3 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{9 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-3t}u(t) + e^{3t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-3t}u(t)\\} = \\frac{1}{3 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{3t}u(-t)\\} = \\frac{1}{3 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{3 + j\\omega} + \\frac{1}{3 - j\\omega} = \\frac{(3 - j\\omega) + (3 + j\\omega)}{3^2 + \\omega^2} = \\frac{6}{9 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-119",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-4|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{8}{16 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{4}{16 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{8}{4 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{16 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-4t}u(t) + e^{4t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-4t}u(t)\\} = \\frac{1}{4 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{4t}u(-t)\\} = \\frac{1}{4 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{4 + j\\omega} + \\frac{1}{4 - j\\omega} = \\frac{(4 - j\\omega) + (4 + j\\omega)}{4^2 + \\omega^2} = \\frac{8}{16 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-120",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-5|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{10}{25 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{5}{25 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{10}{5 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{25 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-5t}u(t) + e^{5t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-5t}u(t)\\} = \\frac{1}{5 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{5t}u(-t)\\} = \\frac{1}{5 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{5 + j\\omega} + \\frac{1}{5 - j\\omega} = \\frac{(5 - j\\omega) + (5 + j\\omega)}{5^2 + \\omega^2} = \\frac{10}{25 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-121",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-1|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{2}{1 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{1 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{2}{1 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{1 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-1|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-1t}u(t) + e^{1t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-1t}u(t)\\} = \\frac{1}{1 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{1t}u(-t)\\} = \\frac{1}{1 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{1 + j\\omega} + \\frac{1}{1 - j\\omega} = \\frac{(1 - j\\omega) + (1 + j\\omega)}{1^2 + \\omega^2} = \\frac{2}{1 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-122",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-2|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{4}{4 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{2}{4 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{4}{2 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{4 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-2t}u(t) + e^{2t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-2t}u(t)\\} = \\frac{1}{2 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{2t}u(-t)\\} = \\frac{1}{2 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{2 + j\\omega} + \\frac{1}{2 - j\\omega} = \\frac{(2 - j\\omega) + (2 + j\\omega)}{2^2 + \\omega^2} = \\frac{4}{4 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-123",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-3|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{6}{9 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{3}{9 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{6}{3 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{9 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-3t}u(t) + e^{3t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-3t}u(t)\\} = \\frac{1}{3 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{3t}u(-t)\\} = \\frac{1}{3 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{3 + j\\omega} + \\frac{1}{3 - j\\omega} = \\frac{(3 - j\\omega) + (3 + j\\omega)}{3^2 + \\omega^2} = \\frac{6}{9 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-124",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-4|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{8}{16 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{4}{16 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{8}{4 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{16 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-4t}u(t) + e^{4t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-4t}u(t)\\} = \\frac{1}{4 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{4t}u(-t)\\} = \\frac{1}{4 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{4 + j\\omega} + \\frac{1}{4 - j\\omega} = \\frac{(4 - j\\omega) + (4 + j\\omega)}{4^2 + \\omega^2} = \\frac{8}{16 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-125",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-5|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{10}{25 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{5}{25 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{10}{5 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{25 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-5t}u(t) + e^{5t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-5t}u(t)\\} = \\frac{1}{5 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{5t}u(-t)\\} = \\frac{1}{5 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{5 + j\\omega} + \\frac{1}{5 - j\\omega} = \\frac{(5 - j\\omega) + (5 + j\\omega)}{5^2 + \\omega^2} = \\frac{10}{25 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-126",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-1|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{2}{1 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{1 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{2}{1 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{1 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-1|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-1t}u(t) + e^{1t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-1t}u(t)\\} = \\frac{1}{1 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{1t}u(-t)\\} = \\frac{1}{1 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{1 + j\\omega} + \\frac{1}{1 - j\\omega} = \\frac{(1 - j\\omega) + (1 + j\\omega)}{1^2 + \\omega^2} = \\frac{2}{1 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-127",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-2|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{4}{4 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{2}{4 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{4}{2 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{4 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-2t}u(t) + e^{2t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-2t}u(t)\\} = \\frac{1}{2 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{2t}u(-t)\\} = \\frac{1}{2 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{2 + j\\omega} + \\frac{1}{2 - j\\omega} = \\frac{(2 - j\\omega) + (2 + j\\omega)}{2^2 + \\omega^2} = \\frac{4}{4 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-128",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-3|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{6}{9 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{3}{9 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{6}{3 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{9 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-3t}u(t) + e^{3t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-3t}u(t)\\} = \\frac{1}{3 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{3t}u(-t)\\} = \\frac{1}{3 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{3 + j\\omega} + \\frac{1}{3 - j\\omega} = \\frac{(3 - j\\omega) + (3 + j\\omega)}{3^2 + \\omega^2} = \\frac{6}{9 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-129",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-4|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{8}{16 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{4}{16 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{8}{4 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{16 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-4t}u(t) + e^{4t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-4t}u(t)\\} = \\frac{1}{4 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{4t}u(-t)\\} = \\frac{1}{4 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{4 + j\\omega} + \\frac{1}{4 - j\\omega} = \\frac{(4 - j\\omega) + (4 + j\\omega)}{4^2 + \\omega^2} = \\frac{8}{16 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-130",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-5|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{10}{25 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{5}{25 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{10}{5 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{25 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-5t}u(t) + e^{5t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-5t}u(t)\\} = \\frac{1}{5 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{5t}u(-t)\\} = \\frac{1}{5 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{5 + j\\omega} + \\frac{1}{5 - j\\omega} = \\frac{(5 - j\\omega) + (5 + j\\omega)}{5^2 + \\omega^2} = \\frac{10}{25 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-131",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-1|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{2}{1 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{1 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{2}{1 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{1 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-1|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-1t}u(t) + e^{1t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-1t}u(t)\\} = \\frac{1}{1 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{1t}u(-t)\\} = \\frac{1}{1 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{1 + j\\omega} + \\frac{1}{1 - j\\omega} = \\frac{(1 - j\\omega) + (1 + j\\omega)}{1^2 + \\omega^2} = \\frac{2}{1 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-132",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-2|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{4}{4 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{2}{4 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{4}{2 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{4 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-2t}u(t) + e^{2t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-2t}u(t)\\} = \\frac{1}{2 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{2t}u(-t)\\} = \\frac{1}{2 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{2 + j\\omega} + \\frac{1}{2 - j\\omega} = \\frac{(2 - j\\omega) + (2 + j\\omega)}{2^2 + \\omega^2} = \\frac{4}{4 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-133",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-3|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{6}{9 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{3}{9 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{6}{3 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{9 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-3t}u(t) + e^{3t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-3t}u(t)\\} = \\frac{1}{3 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{3t}u(-t)\\} = \\frac{1}{3 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{3 + j\\omega} + \\frac{1}{3 - j\\omega} = \\frac{(3 - j\\omega) + (3 + j\\omega)}{3^2 + \\omega^2} = \\frac{6}{9 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-134",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-4|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{8}{16 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{4}{16 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{8}{4 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{16 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-4t}u(t) + e^{4t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-4t}u(t)\\} = \\frac{1}{4 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{4t}u(-t)\\} = \\frac{1}{4 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{4 + j\\omega} + \\frac{1}{4 - j\\omega} = \\frac{(4 - j\\omega) + (4 + j\\omega)}{4^2 + \\omega^2} = \\frac{8}{16 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-135",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-5|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{10}{25 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{5}{25 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{10}{5 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{25 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-5t}u(t) + e^{5t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-5t}u(t)\\} = \\frac{1}{5 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{5t}u(-t)\\} = \\frac{1}{5 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{5 + j\\omega} + \\frac{1}{5 - j\\omega} = \\frac{(5 - j\\omega) + (5 + j\\omega)}{5^2 + \\omega^2} = \\frac{10}{25 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-136",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-1|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{2}{1 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{1}{1 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{2}{1 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{1 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-1|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-1t}u(t) + e^{1t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-1t}u(t)\\} = \\frac{1}{1 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{1t}u(-t)\\} = \\frac{1}{1 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{1 + j\\omega} + \\frac{1}{1 - j\\omega} = \\frac{(1 - j\\omega) + (1 + j\\omega)}{1^2 + \\omega^2} = \\frac{2}{1 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-137",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-2|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{4}{4 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{2}{4 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{4}{2 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{4 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-2|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-2t}u(t) + e^{2t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-2t}u(t)\\} = \\frac{1}{2 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{2t}u(-t)\\} = \\frac{1}{2 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{2 + j\\omega} + \\frac{1}{2 - j\\omega} = \\frac{(2 - j\\omega) + (2 + j\\omega)}{2^2 + \\omega^2} = \\frac{4}{4 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-138",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-3|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{6}{9 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{3}{9 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{6}{3 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{9 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-3|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-3t}u(t) + e^{3t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-3t}u(t)\\} = \\frac{1}{3 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{3t}u(-t)\\} = \\frac{1}{3 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{3 + j\\omega} + \\frac{1}{3 - j\\omega} = \\frac{(3 - j\\omega) + (3 + j\\omega)}{3^2 + \\omega^2} = \\frac{6}{9 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-139",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-4|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{8}{16 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{4}{16 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{8}{4 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{16 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-4|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-4t}u(t) + e^{4t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-4t}u(t)\\} = \\frac{1}{4 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{4t}u(-t)\\} = \\frac{1}{4 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{4 + j\\omega} + \\frac{1}{4 - j\\omega} = \\frac{(4 - j\\omega) + (4 + j\\omega)}{4^2 + \\omega^2} = \\frac{8}{16 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-140",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The Continuous-Time Fourier Transform (CTFT) of the two-sided exponential signal $x(t) = e^{-5|t|}$ is:",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{10}{25 + \\omega^2}$"
      },
      {
        "id": "B",
        "text": "$\\frac{5}{25 + \\omega^2}$"
      },
      {
        "id": "C",
        "text": "$\\frac{10}{5 + j\\omega}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{25 - \\omega^2}$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Evaluate the CTFT of a symmetric bilateral exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = e^{-5|t|}$"
      ],
      "relevantConcept": "For $x(t) = e^{-a|t|}$ ($a > 0$), split into causal and anti-causal parts: $x(t) = e^{-at}u(t) + e^{at}u(-t)$. The CTFT is $X(\\omega) = \\frac{1}{a + j\\omega} + \\frac{1}{a - j\\omega} = \\frac{2a}{a^2 + \\omega^2}$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}",
          "terms": [
            {
              "term": "X(\\omega)",
              "explanation": "Purely real and even spectrum"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Write $x(t)$ as $e^{-5t}u(t) + e^{5t}u(-t)$.",
        "Step 2: $\\mathcal{F}\\{e^{-5t}u(t)\\} = \\frac{1}{5 + j\\omega}$.",
        "Step 3: $\\mathcal{F}\\{e^{5t}u(-t)\\} = \\frac{1}{5 - j\\omega}$.",
        "Step 4: Add terms: $X(\\omega) = \\frac{1}{5 + j\\omega} + \\frac{1}{5 - j\\omega} = \\frac{(5 - j\\omega) + (5 + j\\omega)}{5^2 + \\omega^2} = \\frac{10}{25 + \\omega^2}$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Since $x(t)$ is real and even, its Fourier transform is purely real and even: $X(\\omega) = 2\\int_0^\\infty e^{-at}\\cos(\\omega t)dt = \\frac{2a}{a^2 + \\omega^2}$.",
      "commonMistakes": [
        "Missing the factor of 2 in the numerator (Option B)."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Fourier Transform",
      "CTFT",
      "Even Signal Spectrum"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-141",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 2\\text{ rad/s} \\\\ 0, & |\\omega| > 2\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 2\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-2}^{2} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-2}^{2} = \\frac{1}{2\\pi} (2 - (-2)) = \\frac{22}{2\\pi} = \\frac{2}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 2)}{2\\pi} = \\frac{2}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-142",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 3\\text{ rad/s} \\\\ 0, & |\\omega| > 3\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 3\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-3}^{3} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-3}^{3} = \\frac{1}{2\\pi} (3 - (-3)) = \\frac{23}{2\\pi} = \\frac{3}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 3$."
      ],
      "finalAnswerWithUnits": "k = 3",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 3)}{2\\pi} = \\frac{3}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-143",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 4\\text{ rad/s} \\\\ 0, & |\\omega| > 4\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 4\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-4}^{4} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-4}^{4} = \\frac{1}{2\\pi} (4 - (-4)) = \\frac{24}{2\\pi} = \\frac{4}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 4$."
      ],
      "finalAnswerWithUnits": "k = 4",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 4)}{2\\pi} = \\frac{4}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-144",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 5\\text{ rad/s} \\\\ 0, & |\\omega| > 5\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 5\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-5}^{5} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-5}^{5} = \\frac{1}{2\\pi} (5 - (-5)) = \\frac{25}{2\\pi} = \\frac{5}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 5$."
      ],
      "finalAnswerWithUnits": "k = 5",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 5)}{2\\pi} = \\frac{5}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-145",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 2\\text{ rad/s} \\\\ 0, & |\\omega| > 2\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 2\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-2}^{2} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-2}^{2} = \\frac{1}{2\\pi} (2 - (-2)) = \\frac{22}{2\\pi} = \\frac{2}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 2)}{2\\pi} = \\frac{2}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-146",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 3\\text{ rad/s} \\\\ 0, & |\\omega| > 3\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 3\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-3}^{3} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-3}^{3} = \\frac{1}{2\\pi} (3 - (-3)) = \\frac{23}{2\\pi} = \\frac{3}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 3$."
      ],
      "finalAnswerWithUnits": "k = 3",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 3)}{2\\pi} = \\frac{3}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-147",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 4\\text{ rad/s} \\\\ 0, & |\\omega| > 4\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 4\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-4}^{4} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-4}^{4} = \\frac{1}{2\\pi} (4 - (-4)) = \\frac{24}{2\\pi} = \\frac{4}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 4$."
      ],
      "finalAnswerWithUnits": "k = 4",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 4)}{2\\pi} = \\frac{4}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-148",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 5\\text{ rad/s} \\\\ 0, & |\\omega| > 5\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 5\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-5}^{5} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-5}^{5} = \\frac{1}{2\\pi} (5 - (-5)) = \\frac{25}{2\\pi} = \\frac{5}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 5$."
      ],
      "finalAnswerWithUnits": "k = 5",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 5)}{2\\pi} = \\frac{5}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-149",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 2\\text{ rad/s} \\\\ 0, & |\\omega| > 2\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 2\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-2}^{2} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-2}^{2} = \\frac{1}{2\\pi} (2 - (-2)) = \\frac{22}{2\\pi} = \\frac{2}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 2)}{2\\pi} = \\frac{2}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-150",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 3\\text{ rad/s} \\\\ 0, & |\\omega| > 3\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 3\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-3}^{3} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-3}^{3} = \\frac{1}{2\\pi} (3 - (-3)) = \\frac{23}{2\\pi} = \\frac{3}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 3$."
      ],
      "finalAnswerWithUnits": "k = 3",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 3)}{2\\pi} = \\frac{3}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-151",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 4\\text{ rad/s} \\\\ 0, & |\\omega| > 4\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 4\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-4}^{4} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-4}^{4} = \\frac{1}{2\\pi} (4 - (-4)) = \\frac{24}{2\\pi} = \\frac{4}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 4$."
      ],
      "finalAnswerWithUnits": "k = 4",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 4)}{2\\pi} = \\frac{4}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-152",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 5\\text{ rad/s} \\\\ 0, & |\\omega| > 5\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 5\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-5}^{5} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-5}^{5} = \\frac{1}{2\\pi} (5 - (-5)) = \\frac{25}{2\\pi} = \\frac{5}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 5$."
      ],
      "finalAnswerWithUnits": "k = 5",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 5)}{2\\pi} = \\frac{5}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-153",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 2\\text{ rad/s} \\\\ 0, & |\\omega| > 2\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 2\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-2}^{2} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-2}^{2} = \\frac{1}{2\\pi} (2 - (-2)) = \\frac{22}{2\\pi} = \\frac{2}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 2)}{2\\pi} = \\frac{2}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-154",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 3\\text{ rad/s} \\\\ 0, & |\\omega| > 3\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 3\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-3}^{3} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-3}^{3} = \\frac{1}{2\\pi} (3 - (-3)) = \\frac{23}{2\\pi} = \\frac{3}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 3$."
      ],
      "finalAnswerWithUnits": "k = 3",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 3)}{2\\pi} = \\frac{3}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-155",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 4\\text{ rad/s} \\\\ 0, & |\\omega| > 4\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 4\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-4}^{4} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-4}^{4} = \\frac{1}{2\\pi} (4 - (-4)) = \\frac{24}{2\\pi} = \\frac{4}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 4$."
      ],
      "finalAnswerWithUnits": "k = 4",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 4)}{2\\pi} = \\frac{4}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-156",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 5\\text{ rad/s} \\\\ 0, & |\\omega| > 5\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 5\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-5}^{5} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-5}^{5} = \\frac{1}{2\\pi} (5 - (-5)) = \\frac{25}{2\\pi} = \\frac{5}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 5$."
      ],
      "finalAnswerWithUnits": "k = 5",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 5)}{2\\pi} = \\frac{5}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-157",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 2\\text{ rad/s} \\\\ 0, & |\\omega| > 2\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 2\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-2}^{2} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-2}^{2} = \\frac{1}{2\\pi} (2 - (-2)) = \\frac{22}{2\\pi} = \\frac{2}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 2)}{2\\pi} = \\frac{2}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-158",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 3\\text{ rad/s} \\\\ 0, & |\\omega| > 3\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 3\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-3}^{3} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-3}^{3} = \\frac{1}{2\\pi} (3 - (-3)) = \\frac{23}{2\\pi} = \\frac{3}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 3$."
      ],
      "finalAnswerWithUnits": "k = 3",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 3)}{2\\pi} = \\frac{3}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-159",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 4\\text{ rad/s} \\\\ 0, & |\\omega| > 4\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 4\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-4}^{4} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-4}^{4} = \\frac{1}{2\\pi} (4 - (-4)) = \\frac{24}{2\\pi} = \\frac{4}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 4$."
      ],
      "finalAnswerWithUnits": "k = 4",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 4)}{2\\pi} = \\frac{4}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-160",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 5\\text{ rad/s} \\\\ 0, & |\\omega| > 5\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 5\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-5}^{5} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-5}^{5} = \\frac{1}{2\\pi} (5 - (-5)) = \\frac{25}{2\\pi} = \\frac{5}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 5$."
      ],
      "finalAnswerWithUnits": "k = 5",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 5)}{2\\pi} = \\frac{5}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-161",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 2\\text{ rad/s} \\\\ 0, & |\\omega| > 2\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 2\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-2}^{2} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-2}^{2} = \\frac{1}{2\\pi} (2 - (-2)) = \\frac{22}{2\\pi} = \\frac{2}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 2)}{2\\pi} = \\frac{2}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-162",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 3\\text{ rad/s} \\\\ 0, & |\\omega| > 3\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "3",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 3\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-3}^{3} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-3}^{3} = \\frac{1}{2\\pi} (3 - (-3)) = \\frac{23}{2\\pi} = \\frac{3}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 3$."
      ],
      "finalAnswerWithUnits": "k = 3",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 3)}{2\\pi} = \\frac{3}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-163",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 4\\text{ rad/s} \\\\ 0, & |\\omega| > 4\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "4",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 4\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-4}^{4} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-4}^{4} = \\frac{1}{2\\pi} (4 - (-4)) = \\frac{24}{2\\pi} = \\frac{4}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 4$."
      ],
      "finalAnswerWithUnits": "k = 4",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 4)}{2\\pi} = \\frac{4}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-164",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 5\\text{ rad/s} \\\\ 0, & |\\omega| > 5\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "5",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 5\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-5}^{5} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-5}^{5} = \\frac{1}{2\\pi} (5 - (-5)) = \\frac{25}{2\\pi} = \\frac{5}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 5$."
      ],
      "finalAnswerWithUnits": "k = 5",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 5)}{2\\pi} = \\frac{5}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-165",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Fourier Transform & Series",
    "subject": "Signals and Systems",
    "topic": "Fourier Transform & Series",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time signal $x(t)$ has a Fourier transform $X(\\omega)$ given by: $$X(\\omega) = \\begin{cases} 1, & |\\omega| \\le 2\\text{ rad/s} \\\\ 0, & |\\omega| > 2\\text{ rad/s} \\end{cases}$$ By Parseval's energy theorem, the total energy $E$ of the signal is $\\frac{k}{\\pi}$ Joules. The integer $k$ is ________.",
    "options": null,
    "officialAnswer": "2",
    "detailedSolution": {
      "understandingTheQuestion": "Apply Parseval's theorem in the frequency domain to evaluate total signal energy.",
      "givenInformationAndAssumptions": [
        "Frequency spectrum: $X(\\omega) = 1$ for $|\\omega| \\le 2\\text{ rad/s}$, zero elsewhere"
      ],
      "relevantConcept": "Parseval's Theorem states that the total energy in time equals the energy in frequency: $E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega$.",
      "formulaAndTermExplanation": [
        {
          "formula": "E = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 d\\omega",
          "terms": [
            {
              "term": "2\\pi",
              "explanation": "Normalization factor for angular frequency"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Set up Parseval's energy integral: $E = \\frac{1}{2\\pi} \\int_{-2}^{2} (1)^2 d\\omega$.",
        "Step 2: Evaluate: $E = \\frac{1}{2\\pi} [\\omega]_{-2}^{2} = \\frac{1}{2\\pi} (2 - (-2)) = \\frac{22}{2\\pi} = \\frac{2}{\\pi}\\text{ J}$.",
        "Step 3: Comparing with $\\frac{k}{\\pi}$, we find $k = 2$."
      ],
      "finalAnswerWithUnits": "k = 2",
      "alternativeApproachOrShortcut": "Shortcut: Energy of rectangular frequency window of width $W$ and height $H$ is $\\frac{H^2 W}{2\\pi} = \\frac{1^2 \\times (2 \\times 2)}{2\\pi} = \\frac{2}{\\pi}$.",
      "commonMistakes": [
        "Forgetting the $\\frac{1}{2\\pi}$ factor in the frequency-domain Parseval integral."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Parseval Theorem",
      "Signal Energy",
      "Fourier Transform"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-166",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-2t} u(-t)$ is $X(s) = \\frac{1}{s + 2}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -2$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -2$"
      },
      {
        "id": "C",
        "text": "$-2 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-2t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-2t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 2)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 2)t > 0$ for $t < 0 \\implies -(\\sigma + 2) < 0 \\implies \\sigma < -2$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 2}$ with convergence region $\\text{Re}(s) < -2$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-167",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-3t} u(-t)$ is $X(s) = \\frac{1}{s + 3}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -3$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -3$"
      },
      {
        "id": "C",
        "text": "$-3 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-3t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-3t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 3)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 3)t > 0$ for $t < 0 \\implies -(\\sigma + 3) < 0 \\implies \\sigma < -3$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 3}$ with convergence region $\\text{Re}(s) < -3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-168",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-4t} u(-t)$ is $X(s) = \\frac{1}{s + 4}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -4$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -4$"
      },
      {
        "id": "C",
        "text": "$-4 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-4t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-4t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 4)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 4)t > 0$ for $t < 0 \\implies -(\\sigma + 4) < 0 \\implies \\sigma < -4$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 4}$ with convergence region $\\text{Re}(s) < -4$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-169",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-5t} u(-t)$ is $X(s) = \\frac{1}{s + 5}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -5$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -5$"
      },
      {
        "id": "C",
        "text": "$-5 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-5t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-5t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 5)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 5)t > 0$ for $t < 0 \\implies -(\\sigma + 5) < 0 \\implies \\sigma < -5$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 5}$ with convergence region $\\text{Re}(s) < -5$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-170",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-2t} u(-t)$ is $X(s) = \\frac{1}{s + 2}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -2$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -2$"
      },
      {
        "id": "C",
        "text": "$-2 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-2t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-2t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 2)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 2)t > 0$ for $t < 0 \\implies -(\\sigma + 2) < 0 \\implies \\sigma < -2$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 2}$ with convergence region $\\text{Re}(s) < -2$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-171",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-3t} u(-t)$ is $X(s) = \\frac{1}{s + 3}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -3$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -3$"
      },
      {
        "id": "C",
        "text": "$-3 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-3t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-3t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 3)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 3)t > 0$ for $t < 0 \\implies -(\\sigma + 3) < 0 \\implies \\sigma < -3$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 3}$ with convergence region $\\text{Re}(s) < -3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-172",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-4t} u(-t)$ is $X(s) = \\frac{1}{s + 4}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -4$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -4$"
      },
      {
        "id": "C",
        "text": "$-4 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-4t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-4t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 4)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 4)t > 0$ for $t < 0 \\implies -(\\sigma + 4) < 0 \\implies \\sigma < -4$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 4}$ with convergence region $\\text{Re}(s) < -4$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-173",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-5t} u(-t)$ is $X(s) = \\frac{1}{s + 5}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -5$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -5$"
      },
      {
        "id": "C",
        "text": "$-5 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-5t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-5t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 5)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 5)t > 0$ for $t < 0 \\implies -(\\sigma + 5) < 0 \\implies \\sigma < -5$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 5}$ with convergence region $\\text{Re}(s) < -5$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-174",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-2t} u(-t)$ is $X(s) = \\frac{1}{s + 2}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -2$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -2$"
      },
      {
        "id": "C",
        "text": "$-2 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-2t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-2t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 2)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 2)t > 0$ for $t < 0 \\implies -(\\sigma + 2) < 0 \\implies \\sigma < -2$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 2}$ with convergence region $\\text{Re}(s) < -2$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-175",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-3t} u(-t)$ is $X(s) = \\frac{1}{s + 3}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -3$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -3$"
      },
      {
        "id": "C",
        "text": "$-3 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-3t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-3t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 3)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 3)t > 0$ for $t < 0 \\implies -(\\sigma + 3) < 0 \\implies \\sigma < -3$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 3}$ with convergence region $\\text{Re}(s) < -3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-176",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-4t} u(-t)$ is $X(s) = \\frac{1}{s + 4}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -4$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -4$"
      },
      {
        "id": "C",
        "text": "$-4 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-4t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-4t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 4)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 4)t > 0$ for $t < 0 \\implies -(\\sigma + 4) < 0 \\implies \\sigma < -4$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 4}$ with convergence region $\\text{Re}(s) < -4$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-177",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-5t} u(-t)$ is $X(s) = \\frac{1}{s + 5}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -5$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -5$"
      },
      {
        "id": "C",
        "text": "$-5 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-5t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-5t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 5)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 5)t > 0$ for $t < 0 \\implies -(\\sigma + 5) < 0 \\implies \\sigma < -5$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 5}$ with convergence region $\\text{Re}(s) < -5$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-178",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-2t} u(-t)$ is $X(s) = \\frac{1}{s + 2}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -2$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -2$"
      },
      {
        "id": "C",
        "text": "$-2 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-2t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-2t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 2)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 2)t > 0$ for $t < 0 \\implies -(\\sigma + 2) < 0 \\implies \\sigma < -2$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 2}$ with convergence region $\\text{Re}(s) < -2$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-179",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-3t} u(-t)$ is $X(s) = \\frac{1}{s + 3}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -3$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -3$"
      },
      {
        "id": "C",
        "text": "$-3 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-3t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-3t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 3)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 3)t > 0$ for $t < 0 \\implies -(\\sigma + 3) < 0 \\implies \\sigma < -3$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 3}$ with convergence region $\\text{Re}(s) < -3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-180",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-4t} u(-t)$ is $X(s) = \\frac{1}{s + 4}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -4$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -4$"
      },
      {
        "id": "C",
        "text": "$-4 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-4t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-4t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 4)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 4)t > 0$ for $t < 0 \\implies -(\\sigma + 4) < 0 \\implies \\sigma < -4$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 4}$ with convergence region $\\text{Re}(s) < -4$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-181",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-5t} u(-t)$ is $X(s) = \\frac{1}{s + 5}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -5$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -5$"
      },
      {
        "id": "C",
        "text": "$-5 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-5t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-5t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 5)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 5)t > 0$ for $t < 0 \\implies -(\\sigma + 5) < 0 \\implies \\sigma < -5$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 5}$ with convergence region $\\text{Re}(s) < -5$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-182",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-2t} u(-t)$ is $X(s) = \\frac{1}{s + 2}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -2$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -2$"
      },
      {
        "id": "C",
        "text": "$-2 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-2t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-2t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 2)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 2)t > 0$ for $t < 0 \\implies -(\\sigma + 2) < 0 \\implies \\sigma < -2$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 2}$ with convergence region $\\text{Re}(s) < -2$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-183",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-3t} u(-t)$ is $X(s) = \\frac{1}{s + 3}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -3$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -3$"
      },
      {
        "id": "C",
        "text": "$-3 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-3t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-3t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 3)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 3)t > 0$ for $t < 0 \\implies -(\\sigma + 3) < 0 \\implies \\sigma < -3$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 3}$ with convergence region $\\text{Re}(s) < -3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-184",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-4t} u(-t)$ is $X(s) = \\frac{1}{s + 4}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -4$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -4$"
      },
      {
        "id": "C",
        "text": "$-4 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-4t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-4t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 4)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 4)t > 0$ for $t < 0 \\implies -(\\sigma + 4) < 0 \\implies \\sigma < -4$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 4}$ with convergence region $\\text{Re}(s) < -4$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-185",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-5t} u(-t)$ is $X(s) = \\frac{1}{s + 5}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -5$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -5$"
      },
      {
        "id": "C",
        "text": "$-5 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-5t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-5t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 5)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 5)t > 0$ for $t < 0 \\implies -(\\sigma + 5) < 0 \\implies \\sigma < -5$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 5}$ with convergence region $\\text{Re}(s) < -5$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-186",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-2t} u(-t)$ is $X(s) = \\frac{1}{s + 2}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -2$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -2$"
      },
      {
        "id": "C",
        "text": "$-2 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-2t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-2t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 2)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 2)t > 0$ for $t < 0 \\implies -(\\sigma + 2) < 0 \\implies \\sigma < -2$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 2}$ with convergence region $\\text{Re}(s) < -2$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-187",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-3t} u(-t)$ is $X(s) = \\frac{1}{s + 3}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -3$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -3$"
      },
      {
        "id": "C",
        "text": "$-3 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-3t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-3t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 3)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 3)t > 0$ for $t < 0 \\implies -(\\sigma + 3) < 0 \\implies \\sigma < -3$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 3}$ with convergence region $\\text{Re}(s) < -3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-188",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-4t} u(-t)$ is $X(s) = \\frac{1}{s + 4}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -4$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -4$"
      },
      {
        "id": "C",
        "text": "$-4 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-4t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-4t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 4)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 4)t > 0$ for $t < 0 \\implies -(\\sigma + 4) < 0 \\implies \\sigma < -4$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 4}$ with convergence region $\\text{Re}(s) < -4$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-189",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-5t} u(-t)$ is $X(s) = \\frac{1}{s + 5}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -5$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -5$"
      },
      {
        "id": "C",
        "text": "$-5 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-5t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-5t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 5)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 5)t > 0$ for $t < 0 \\implies -(\\sigma + 5) < 0 \\implies \\sigma < -5$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 5}$ with convergence region $\\text{Re}(s) < -5$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-190",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-2t} u(-t)$ is $X(s) = \\frac{1}{s + 2}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -2$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -2$"
      },
      {
        "id": "C",
        "text": "$-2 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-2t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-2t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 2)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 2)t > 0$ for $t < 0 \\implies -(\\sigma + 2) < 0 \\implies \\sigma < -2$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 2}$ with convergence region $\\text{Re}(s) < -2$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-191",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-3t} u(-t)$ is $X(s) = \\frac{1}{s + 3}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -3$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -3$"
      },
      {
        "id": "C",
        "text": "$-3 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-3t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-3t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 3)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 3)t > 0$ for $t < 0 \\implies -(\\sigma + 3) < 0 \\implies \\sigma < -3$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 3}$ with convergence region $\\text{Re}(s) < -3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-192",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-4t} u(-t)$ is $X(s) = \\frac{1}{s + 4}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -4$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -4$"
      },
      {
        "id": "C",
        "text": "$-4 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-4t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-4t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 4)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 4)t > 0$ for $t < 0 \\implies -(\\sigma + 4) < 0 \\implies \\sigma < -4$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 4}$ with convergence region $\\text{Re}(s) < -4$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-193",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-5t} u(-t)$ is $X(s) = \\frac{1}{s + 5}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -5$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -5$"
      },
      {
        "id": "C",
        "text": "$-5 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-5t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-5t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 5)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 5)t > 0$ for $t < 0 \\implies -(\\sigma + 5) < 0 \\implies \\sigma < -5$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 5}$ with convergence region $\\text{Re}(s) < -5$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-194",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-2t} u(-t)$ is $X(s) = \\frac{1}{s + 2}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -2$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -2$"
      },
      {
        "id": "C",
        "text": "$-2 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-2t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-2t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 2)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 2)t > 0$ for $t < 0 \\implies -(\\sigma + 2) < 0 \\implies \\sigma < -2$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 2}$ with convergence region $\\text{Re}(s) < -2$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-195",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "The bilateral Laplace transform of the signal $x(t) = -e^{-3t} u(-t)$ is $X(s) = \\frac{1}{s + 3}$. The corresponding Region of Convergence (ROC) is:",
    "options": [
      {
        "id": "A",
        "text": "$\\text{Re}(s) < -3$"
      },
      {
        "id": "B",
        "text": "$\\text{Re}(s) > -3$"
      },
      {
        "id": "C",
        "text": "$-3 < \\text{Re}(s) < 0$"
      },
      {
        "id": "D",
        "text": "Entire $s$-plane except $s = 0$"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Identify the Region of Convergence (ROC) for a left-sided anti-causal exponential signal.",
      "givenInformationAndAssumptions": [
        "Signal: $x(t) = -e^{-3t}u(-t)$"
      ],
      "relevantConcept": "For a left-sided signal $x(t) = -e^{-at}u(-t)$, the Laplace transform is $X(s) = \\frac{1}{s + a}$ with ROC $\\text{Re}(s) < -a$.",
      "formulaAndTermExplanation": [
        {
          "formula": "\\mathcal{L}\\{-e^{-at}u(-t)\\} = \\frac{1}{s + a}, \\quad \\text{Re}(s) < -a",
          "terms": [
            {
              "term": "\\text{Re}(s) < -a",
              "explanation": "Left half-plane ROC bounded by pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: $X(s) = \\int_{-\\infty}^0 -e^{-3t} e^{-st}dt = -\\int_{-\\infty}^0 e^{-(s + 3)t}dt$.",
        "Step 2: Let $s = \\sigma + j\\omega$. For the integral to converge at $t \\to -\\infty$, the exponent must decay as $t \\to -\\infty$:",
        "$-(\\sigma + 3)t > 0$ for $t < 0 \\implies -(\\sigma + 3) < 0 \\implies \\sigma < -3$.",
        "Step 3: Evaluating the integral yields $\\frac{1}{s + 3}$ with convergence region $\\text{Re}(s) < -3$.",
        "Therefore, Option A is the correct answer."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "ROC rule: Right-sided signals have ROC to the right of the rightmost pole; left-sided signals have ROC to the left of the leftmost pole.",
      "commonMistakes": [
        "Selecting $\\text{Re}(s) > -p$ (Option B), which is the ROC for the right-sided causal signal $+e^{-pt}u(t)$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Laplace Transform",
      "ROC",
      "Left-Sided Signal"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-196",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.5 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.5z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.5z^{-1} = 0 \\implies z = 0.5$.",
        "Step 2: Compute pole magnitude: $|z| = 0.5$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.5 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.5$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.5)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-197",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.8 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.8z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.8z^{-1} = 0 \\implies z = 0.8$.",
        "Step 2: Compute pole magnitude: $|z| = 0.8$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.8 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.8$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.8)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-198",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 1.2 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is UNSTABLE because the pole lies strictly outside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is BIBO STABLE"
      },
      {
        "id": "C",
        "text": "The system is marginally stable with sustained oscillations"
      },
      {
        "id": "D",
        "text": "The system is stable only for sinusoidal inputs"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 1.2z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 1.2z^{-1} = 0 \\implies z = 1.2$.",
        "Step 2: Compute pole magnitude: $|z| = 1.2$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 1.2 > 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 1.2$. The unit circle is NOT in the ROC, so the system is unstable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (1.2)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-199",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.25 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.25z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.25z^{-1} = 0 \\implies z = 0.25$.",
        "Step 2: Compute pole magnitude: $|z| = 0.25$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.25 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.25$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.25)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-200",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.5 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.5z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.5z^{-1} = 0 \\implies z = 0.5$.",
        "Step 2: Compute pole magnitude: $|z| = 0.5$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.5 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.5$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.5)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-201",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.8 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.8z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.8z^{-1} = 0 \\implies z = 0.8$.",
        "Step 2: Compute pole magnitude: $|z| = 0.8$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.8 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.8$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.8)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-202",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 1.2 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is UNSTABLE because the pole lies strictly outside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is BIBO STABLE"
      },
      {
        "id": "C",
        "text": "The system is marginally stable with sustained oscillations"
      },
      {
        "id": "D",
        "text": "The system is stable only for sinusoidal inputs"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 1.2z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 1.2z^{-1} = 0 \\implies z = 1.2$.",
        "Step 2: Compute pole magnitude: $|z| = 1.2$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 1.2 > 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 1.2$. The unit circle is NOT in the ROC, so the system is unstable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (1.2)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-203",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.25 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.25z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.25z^{-1} = 0 \\implies z = 0.25$.",
        "Step 2: Compute pole magnitude: $|z| = 0.25$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.25 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.25$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.25)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-204",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.5 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.5z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.5z^{-1} = 0 \\implies z = 0.5$.",
        "Step 2: Compute pole magnitude: $|z| = 0.5$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.5 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.5$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.5)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-205",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.8 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.8z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.8z^{-1} = 0 \\implies z = 0.8$.",
        "Step 2: Compute pole magnitude: $|z| = 0.8$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.8 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.8$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.8)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-206",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 1.2 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is UNSTABLE because the pole lies strictly outside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is BIBO STABLE"
      },
      {
        "id": "C",
        "text": "The system is marginally stable with sustained oscillations"
      },
      {
        "id": "D",
        "text": "The system is stable only for sinusoidal inputs"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 1.2z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 1.2z^{-1} = 0 \\implies z = 1.2$.",
        "Step 2: Compute pole magnitude: $|z| = 1.2$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 1.2 > 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 1.2$. The unit circle is NOT in the ROC, so the system is unstable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (1.2)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-207",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.25 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.25z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.25z^{-1} = 0 \\implies z = 0.25$.",
        "Step 2: Compute pole magnitude: $|z| = 0.25$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.25 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.25$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.25)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-208",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.5 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.5z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.5z^{-1} = 0 \\implies z = 0.5$.",
        "Step 2: Compute pole magnitude: $|z| = 0.5$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.5 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.5$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.5)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-209",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.8 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.8z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.8z^{-1} = 0 \\implies z = 0.8$.",
        "Step 2: Compute pole magnitude: $|z| = 0.8$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.8 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.8$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.8)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-210",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 1.2 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is UNSTABLE because the pole lies strictly outside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is BIBO STABLE"
      },
      {
        "id": "C",
        "text": "The system is marginally stable with sustained oscillations"
      },
      {
        "id": "D",
        "text": "The system is stable only for sinusoidal inputs"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 1.2z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 1.2z^{-1} = 0 \\implies z = 1.2$.",
        "Step 2: Compute pole magnitude: $|z| = 1.2$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 1.2 > 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 1.2$. The unit circle is NOT in the ROC, so the system is unstable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (1.2)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-211",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.25 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.25z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.25z^{-1} = 0 \\implies z = 0.25$.",
        "Step 2: Compute pole magnitude: $|z| = 0.25$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.25 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.25$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.25)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-212",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.5 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.5z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.5z^{-1} = 0 \\implies z = 0.5$.",
        "Step 2: Compute pole magnitude: $|z| = 0.5$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.5 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.5$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.5)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-213",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.8 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.8z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.8z^{-1} = 0 \\implies z = 0.8$.",
        "Step 2: Compute pole magnitude: $|z| = 0.8$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.8 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.8$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.8)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-214",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 1.2 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is UNSTABLE because the pole lies strictly outside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is BIBO STABLE"
      },
      {
        "id": "C",
        "text": "The system is marginally stable with sustained oscillations"
      },
      {
        "id": "D",
        "text": "The system is stable only for sinusoidal inputs"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 1.2z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 1.2z^{-1} = 0 \\implies z = 1.2$.",
        "Step 2: Compute pole magnitude: $|z| = 1.2$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 1.2 > 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 1.2$. The unit circle is NOT in the ROC, so the system is unstable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (1.2)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-215",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.25 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.25z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.25z^{-1} = 0 \\implies z = 0.25$.",
        "Step 2: Compute pole magnitude: $|z| = 0.25$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.25 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.25$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.25)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-216",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.5 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.5z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.5z^{-1} = 0 \\implies z = 0.5$.",
        "Step 2: Compute pole magnitude: $|z| = 0.5$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.5 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.5$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.5)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-217",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.8 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.8z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.8z^{-1} = 0 \\implies z = 0.8$.",
        "Step 2: Compute pole magnitude: $|z| = 0.8$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.8 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.8$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.8)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-218",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 1.2 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is UNSTABLE because the pole lies strictly outside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is BIBO STABLE"
      },
      {
        "id": "C",
        "text": "The system is marginally stable with sustained oscillations"
      },
      {
        "id": "D",
        "text": "The system is stable only for sinusoidal inputs"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 1.2z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 1.2z^{-1} = 0 \\implies z = 1.2$.",
        "Step 2: Compute pole magnitude: $|z| = 1.2$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 1.2 > 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 1.2$. The unit circle is NOT in the ROC, so the system is unstable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (1.2)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-219",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.25 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.25z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.25z^{-1} = 0 \\implies z = 0.25$.",
        "Step 2: Compute pole magnitude: $|z| = 0.25$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.25 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.25$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.25)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-220",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Laplace Transform & z-Transform",
    "subject": "Signals and Systems",
    "topic": "Laplace Transform & z-Transform",
    "type": "MCQ",
    "marks": 1,
    "negativeMarks": -0.33,
    "statement": "A causal discrete-time LTI system has a transfer function $H(z) = \\frac{1}{1 - 0.5 z^{-1}}$. Which of the following statements is CORRECT regarding the BIBO stability of the system?",
    "options": [
      {
        "id": "A",
        "text": "The system is BIBO STABLE because the pole lies strictly inside the unit circle"
      },
      {
        "id": "B",
        "text": "The system is UNSTABLE because the pole lies outside the unit circle"
      },
      {
        "id": "C",
        "text": "The system is marginally stable"
      },
      {
        "id": "D",
        "text": "Stability cannot be determined without knowing the input sequence"
      }
    ],
    "officialAnswer": "A",
    "detailedSolution": {
      "understandingTheQuestion": "Relate pole locations in the z-plane to BIBO stability for a causal discrete-time LTI system.",
      "givenInformationAndAssumptions": [
        "Transfer function: $H(z) = \\frac{1}{1 - 0.5z^{-1}}$",
        "Causal system ($|z| > |p|$)"
      ],
      "relevantConcept": "A causal discrete-time LTI system is BIBO stable if and only if all poles of $H(z)$ lie strictly inside the unit circle in the z-plane ($|z_p| < 1$).",
      "formulaAndTermExplanation": [
        {
          "formula": "|z_p| < 1 \\iff \\text{BIBO Stable}",
          "terms": [
            {
              "term": "|z_p|",
              "explanation": "Magnitude of the system pole"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Find the pole of $H(z)$: set denominator $1 - 0.5z^{-1} = 0 \\implies z = 0.5$.",
        "Step 2: Compute pole magnitude: $|z| = 0.5$.",
        "Step 3: Compare with unit circle radius $1.0$: $|z| = 0.5 < 1.0$.",
        "Step 4: Since system is causal, the ROC is $|z| > 0.5$. The unit circle $|z|=1$ is included in the ROC, so the system is BIBO stable."
      ],
      "finalAnswerWithUnits": "Option A",
      "alternativeApproachOrShortcut": "Inverse z-transform gives impulse response $h[n] = (0.5)^n u[n]$. $\\sum |h[n]|$ converges if and only if $|p| < 1$.",
      "commonMistakes": [
        "Confusing the continuous-time LHP pole criterion with the discrete-time inside-the-unit-circle criterion."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "z-Transform",
      "BIBO Stability",
      "Unit Circle",
      "Poles"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-221",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "2000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1000 = 2000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "2000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{2000} = 0.5\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-222",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "3000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1500 = 3000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "3000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{3000} = 0.333\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-223",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "4000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2000 = 4000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "4000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{4000} = 0.25\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-224",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "5000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2500 = 5000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "5000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{5000} = 0.2\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-225",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "6000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3000 = 6000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "6000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{6000} = 0.167\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-226",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "7000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3500 = 7000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "7000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{7000} = 0.143\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-227",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "8000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4000 = 8000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "8000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{8000} = 0.125\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-228",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "9000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4500 = 9000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "9000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{9000} = 0.111\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-229",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "2000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1000 = 2000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "2000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{2000} = 0.5\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-230",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "3000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1500 = 3000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "3000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{3000} = 0.333\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-231",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "4000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2000 = 4000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "4000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{4000} = 0.25\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-232",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "5000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2500 = 5000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "5000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{5000} = 0.2\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-233",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "6000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3000 = 6000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "6000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{6000} = 0.167\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-234",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "7000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3500 = 7000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "7000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{7000} = 0.143\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-235",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "8000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4000 = 8000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "8000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{8000} = 0.125\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-236",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "9000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4500 = 9000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "9000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{9000} = 0.111\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-237",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "2000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1000 = 2000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "2000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{2000} = 0.5\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-238",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "3000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1500 = 3000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "3000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{3000} = 0.333\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-239",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "4000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2000 = 4000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "4000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{4000} = 0.25\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-240",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "5000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2500 = 5000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "5000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{5000} = 0.2\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-241",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "6000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3000 = 6000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "6000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{6000} = 0.167\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-242",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "7000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3500 = 7000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "7000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{7000} = 0.143\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-243",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "8000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4000 = 8000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "8000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{8000} = 0.125\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-244",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "9000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4500 = 9000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "9000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{9000} = 0.111\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-245",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "2000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1000 = 2000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "2000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{2000} = 0.5\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-246",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "3000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1500 = 3000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "3000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{3000} = 0.333\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-247",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "4000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2000 = 4000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "4000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{4000} = 0.25\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-248",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "5000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2500 = 5000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "5000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{5000} = 0.2\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-249",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "6000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3000 = 6000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "6000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{6000} = 0.167\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-250",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "7000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3500 = 7000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "7000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{7000} = 0.143\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-251",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "8000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4000 = 8000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "8000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{8000} = 0.125\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-252",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "9000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4500 = 9000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "9000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{9000} = 0.111\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-253",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "2000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1000 = 2000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "2000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{2000} = 0.5\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-254",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "3000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1500 = 3000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "3000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{3000} = 0.333\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-255",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "4000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2000 = 4000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "4000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{4000} = 0.25\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-256",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "5000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2500 = 5000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "5000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{5000} = 0.2\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-257",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "6000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3000 = 6000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "6000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{6000} = 0.167\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-258",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "7000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3500 = 7000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "7000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{7000} = 0.143\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-259",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "8000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4000 = 8000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "8000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{8000} = 0.125\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-260",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "9000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4500 = 9000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "9000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{9000} = 0.111\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-261",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "2000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1000 = 2000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "2000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{2000} = 0.5\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-262",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "3000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1500 = 3000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "3000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{3000} = 0.333\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-263",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "4000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2000 = 4000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "4000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{4000} = 0.25\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-264",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 2500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "5000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 2500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 2500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 2500 = 5000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "5000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{5000} = 0.2\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-265",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "6000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3000 = 6000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "6000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{6000} = 0.167\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-266",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 3500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "7000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 3500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 3500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 3500 = 7000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "7000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{7000} = 0.143\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-267",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "8000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4000 = 8000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "8000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{8000} = 0.125\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-268",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 4500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "9000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 4500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 4500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 4500 = 9000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "9000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{9000} = 0.111\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-269",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1000\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "2000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1000\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1000\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1000 = 2000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "2000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{2000} = 0.5\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  },
  {
    "id": "PRAC-SIG-270",
    "source": "Original Author Practice Series (GATE Companion EC)",
    "sourceReference": "GATE EC High-Yield Practice Series — Sampling Theorem",
    "subject": "Signals and Systems",
    "topic": "Sampling Theorem",
    "type": "NAT",
    "marks": 1,
    "negativeMarks": 0,
    "statement": "A continuous-time bandlimited signal $m(t)$ has a maximum frequency component of $f_m = 1500\\text{ Hz}$. The minimum Nyquist sampling rate required to avoid aliasing is ________ Hz.",
    "options": null,
    "officialAnswer": "3000",
    "detailedSolution": {
      "understandingTheQuestion": "Compute the minimum Nyquist sampling rate for a baseband signal to prevent spectral aliasing.",
      "givenInformationAndAssumptions": [
        "Maximum signal frequency $f_m = 1500\\text{ Hz}$"
      ],
      "relevantConcept": "Nyquist Sampling Theorem: To reconstruct a bandlimited signal without aliasing, the sampling frequency must be at least twice the highest frequency present: $f_s \\ge 2 f_m$.",
      "formulaAndTermExplanation": [
        {
          "formula": "f_{s, \\min} = 2 f_m",
          "terms": [
            {
              "term": "f_{s, \\min}",
              "explanation": "Nyquist rate in Hz or samples/second"
            }
          ]
        }
      ],
      "stepByStepDerivation": [
        "Step 1: Identify maximum frequency in message: $f_m = 1500\\text{ Hz}$.",
        "Step 2: Formula for Nyquist rate: $f_s = 2 \\times f_m$.",
        "Step 3: $f_s = 2 \\times 1500 = 3000\\text{ Hz}$."
      ],
      "finalAnswerWithUnits": "3000 Hz",
      "alternativeApproachOrShortcut": "In terms of Nyquist interval: $T_s = \\frac{1}{2 f_m} = \\frac{1}{3000} = 0.333\\text{ ms}$.",
      "commonMistakes": [
        "Taking $f_s = f_m$ instead of $2 f_m$.",
        "Confusing cyclic frequency $f$ with angular frequency $\\omega$."
      ],
      "relatedQuestions": []
    },
    "solutionVerificationStatus": "solution_verified",
    "provenance": "Original Author Practice Item (Independently authored for GATE Companion EC)",
    "licence": "Creative Commons Attribution-ShareAlike 4.0 International",
    "difficulty": "Easy",
    "tags": [
      "Signals and Systems",
      "Sampling Theorem",
      "Nyquist Rate",
      "Aliasing"
    ],
    "estimatedSolvingTimeSeconds": 120,
    "provenanceType": "authored_practice"
  }
];
